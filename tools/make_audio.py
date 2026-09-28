#!/usr/bin/env python3
"""
Thu sẵn audio cho LangLab bằng giọng neural của Microsoft — cả 5 thứ tiếng.

Vì sao cần: giọng đọc của trình duyệt lấy từ giọng cài trên máy. Windows
thường chỉ có sẵn tiếng Anh; tiếng Hàn là Microsoft Heami ghép mẫu từ thời
Windows 8, còn tiếng Trung, Nhật, Nga thì nhiều máy KHÔNG CÓ giọng nào —
bấm nghe là im lặng. Script này thu sẵn từng từ, từng câu thành mp3, sau đó
app chỉ việc phát tệp: chất lượng như nhau trên mọi máy, chạy offline, và
bấm là kêu ngay không phải chờ engine khởi động.

    pip install edge-tts
    python tools/make_audio.py                     # cả 5 thứ tiếng, phần lõi
    python tools/make_audio.py --lang zh ja        # chỉ Trung và Nhật
    python tools/make_audio.py --only pic          # chỉ bài nghe – xem tranh
    python tools/make_audio.py --with-readings     # thu thêm 50 bài đọc / thứ tiếng
    python tools/make_audio.py --dry-run           # chỉ xem sẽ thu những gì
    python tools/make_audio.py --voice ko=ko-KR-InJoonNeural

MỖI THỨ TIẾNG MỘT THƯ MỤC: audio/tts/<giọng>/<băm>.mp3 — vì 本 tiếng Trung và
本 tiếng Nhật là cùng một chuỗi ký tự nhưng đọc khác hẳn nhau, để chung một rổ
là phát nhầm tiếng. Tiếng Anh tách hai thư mục en-gb và en-us. Bộ audio tiếng
Hàn thu theo cách cũ (nằm thẳng trong audio/tts/) vẫn dùng được, app dò cả hai.

Chạy lại thì chỉ thu phần còn thiếu, nên cứ chạy thoải mái.

edge-tts dùng endpoint đọc-to của Microsoft Edge: miễn phí, không cần khoá API.
Đây là endpoint nội bộ của Edge chứ không phải API công khai — dùng để tự học
thì không sao, nhưng đừng đưa vào sản phẩm thương mại.
"""

import argparse, asyncio, json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT  = ROOT / 'audio' / 'tts'
MANIFEST = ROOT / 'tools' / 'audio-manifest.json'

# ── giọng mặc định của từng thư mục audio ────────────────────────────────
VOICES = {
    'ko':    'ko-KR-SunHiNeural',
    'zh':    'zh-CN-XiaoxiaoNeural',
    'ja':    'ja-JP-NanamiNeural',
    'ru':    'ru-RU-SvetlanaNeural',
    'en-gb': 'en-GB-SoniaNeural',
    'en-us': 'en-US-AriaNeural',
}
# Tốc độ: khớp với rate trong SAY_CFG của js/app.js, chậm hơn giọng thường một chút
RATES = {'ko': '-12%', 'zh': '-15%', 'ja': '-10%', 'ru': '-10%', 'en-gb': '-8%', 'en-us': '-8%'}

# Thay bằng --voice ko=..., ví dụ vài giọng khác hay dùng:
#   ko-KR-InJoonNeural · zh-CN-YunxiNeural · ja-JP-KeitaNeural
#   ru-RU-DmitryNeural · en-GB-RyanNeural  · en-US-GuyNeural

LANGS = ['ko', 'zh', 'ja', 'ru', 'en']
# một thứ tiếng có thể sinh ra nhiều thư mục giọng
VOICE_OF = {'ko': ['ko'], 'zh': ['zh'], 'ja': ['ja'], 'ru': ['ru'], 'en': ['en-gb', 'en-us']}


# ── băm: phải khớp tuyệt đối với hàm hash() trong js/tts.js ──────────────
def norm(s: str) -> str:
    return re.sub(r'\s+', ' ', str(s)).strip()


def fnv1a(s: str) -> str:
    h = 0x811c9dc5
    for b in norm(s).encode('utf-8'):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return '%08x' % h


# ── chuẩn hoá: phải khớp tuyệt đối với SAY_PLAIN trong js/app.js ─────────
RU_STRESS = re.compile('́')                       # dấu trọng âm tổ hợp
JA_FURI   = re.compile(r'([^\s\[\]]+)\[[^\]]*\]')      # 本[ほん] -> 本
JA_BRACK  = re.compile('[「」『』]')   # 「」『』
EN_QUOTE  = str.maketrans({'‘': "'", '’': "'", '“': '"', '”': '"'})


def plain(text: str, lang: str) -> str:
    s = str(text)
    if lang == 'ru':
        s = RU_STRESS.sub('', s)
    elif lang == 'ja':
        s = JA_BRACK.sub('', re.sub(r'\s+', '', JA_FURI.sub(r'\1', s)))
    elif lang == 'en':
        s = s.translate(EN_QUOTE)
    return s.strip()


# ── nhận dạng chữ viết, để bỏ các trường tiếng Việt lẫn vào ─────────────
SCRIPT = {
    'ko': re.compile(r'[가-힣]'),
    'zh': re.compile(r'[一-鿿]'),
    'ja': re.compile(r'[぀-ヿ一-鿿]'),
    'ru': re.compile(r'[Ѐ-ӿ]'),
    'en': re.compile(r'[A-Za-z]'),
}
# tiếng Anh dùng chung bảng chữ Latin với tiếng Việt nên phải loại thêm
VI_MARKS = re.compile('[À-ỹ̀-̣]')


def is_lang(t: str, lang: str) -> bool:
    if not SCRIPT[lang].search(t):
        return False
    if lang == 'en' and VI_MARKS.search(t):
        return False
    return True


# ── đọc dữ liệu: quét trực tiếp tệp .js bằng regex, không cần Node.js ───
def js_strings(src: str, key: str):
    """Mọi chuỗi nằm ở khoá `key:'…'`. Dữ liệu khoá học viết rất đều nên đủ dùng."""
    pat = re.compile(r"\b%s\s*:\s*'((?:[^'\\]|\\.)*)'" % re.escape(key))
    for m in pat.finditer(src):
        yield m.group(1).replace("\\'", "'").replace('\\\\', '\\')


COURSE_FIELD = {'ko': 'ko', 'zh': 'zh', 'ja': 'jp', 'ru': 'ru', 'en': 'en'}
LESSON_HDR = re.compile(r"\bno\s*:\s*(\d+)\s*,")


def read(path: pathlib.Path) -> str:
    return path.read_text(encoding='utf-8') if path.exists() else ''


def from_course(lang: str):
    """Từ vựng, lượt hội thoại, câu ví dụ ngữ pháp của giáo trình."""
    src = read(ROOT / 'js' / ('course-%s.js' % lang))
    extra = ''
    for f in ('vocab-common.js' if lang == 'ko' else 'vocab-%s-common.js' % lang,):
        extra += read(ROOT / 'js' / f)
    for t in js_strings(src + '\n' + extra, COURSE_FIELD[lang]):
        yield norm(t), 'course'


PIC_PROMPT = {
    'en': 'Look at the picture. Choose the sentence that describes it.',
    'ko': '그림을 보고 알맞은 문장을 고르십시오.',
    'zh': '看图，选出与图片相符的句子。',
    'ja': '絵を見て、合う文を選んでください。',
    'ru': 'Посмотрите на картинку и выберите подходящее предложение.'
}
PIC_LETTERS = ['A', 'B', 'C', 'D']

Q_SPLIT = re.compile(r"\{\s*id\s*:\s*'([a-z]{2}-\d+)'")
OPT_T   = re.compile(r"\{\s*t\s*:\s*'((?:[^'\\]|\\.)*)'")
KEY_W   = re.compile(r"\{\s*w\s*:\s*'((?:[^'\\]|\\.)*)'")
GRAM_EX = re.compile(r"\bex\s*:\s*\[\s*'((?:[^'\\]|\\.)*)'")


def pic_seed(qid: str) -> int:
    """Bản Python của picSeed() trong js/app.js."""
    h = 0x811c9dc5
    for ch in qid:
        h ^= ord(ch)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return h or 1


def pic_order(qid: str, n: int):
    """Bản Python của picOpts(): xáo Fisher–Yates bằng LCG gieo từ mã câu hỏi."""
    a = list(range(n))
    s = pic_seed(qid)
    for i in range(n - 1, 0, -1):
        s = (s * 1664525 + 1013904223) & 0xFFFFFFFF
        j = int(s / 4294967296.0 * (i + 1))
        a[i], a[j] = a[j], a[i]
    return a


def from_pic(lang: str):
    """Bài nghe – xem tranh: câu dẫn, bốn phương án có nhãn A·B·C·D,
       từng phương án đứng lẻ (nút nghe sau khi mở đáp án), từ khoá, câu ví dụ."""
    src = ''
    for f in sorted((ROOT / 'js').glob('listen-pic*.js')):
        src += read(f) + '\n'
    if not src:
        return

    yield norm(PIC_PROMPT[lang]), 'pic'

    marks = [(m.group(1), m.start()) for m in Q_SPLIT.finditer(src)]
    for k, (qid, pos) in enumerate(marks):
        if not qid.startswith(lang + '-'):
            continue
        end = marks[k + 1][1] if k + 1 < len(marks) else len(src)
        block = src[pos:end]

        opts = [t.replace("\\'", "'").replace('\\\\', '\\') for t in OPT_T.findall(block)]
        if len(opts) == 4:
            for i, idx in enumerate(pic_order(qid, 4)):
                yield norm(PIC_LETTERS[i] + '. ' + opts[idx]), 'pic'
        for t in opts:
            yield norm(t), 'pic'
        for t in KEY_W.findall(block):
            yield norm(t.replace("\\'", "'")), 'pic'
        for t in GRAM_EX.findall(block):
            yield norm(t.replace("\\'", "'")), 'pic'


RD_FIELD = {'ko': 'ko', 'zh': 'zh', 'ja': 'jp', 'ru': 'ru', 'en': 'en'}


def from_readings(lang: str):
    """50 bài đọc: từng đoạn một, và cả bài gộp lại (nút «nghe cả bài»)."""
    src = read(ROOT / 'js' / ('readings-%s.js' % lang))
    if not src:
        return
    # thân bài nằm ở text:['đoạn 1','đoạn 2',…]
    for m in re.finditer(r"\btext\s*:\s*\[(.*?)\]\s*,\s*\n", src, re.S):
        paras = [p.replace("\\'", "'").replace('\\\\', '\\')
                 for p in re.findall(r"'((?:[^'\\]|\\.)*)'", m.group(1))]
        paras = [norm(p) for p in paras if is_lang(p, lang)]
        for p in paras:
            yield p, 'reading'
        if len(paras) > 1:
            yield norm(' '.join(paras)), 'reading'
    for t in js_strings(src, 'w'):                 # từ khoá của bài đọc
        yield norm(t), 'reading'


SOURCES = {'course': from_course, 'pic': from_pic, 'readings': from_readings}


def build(langs, parts):
    """Trả về {thư_mục_giọng: [mục…]} — mục đã chuẩn hoá và đã băm."""
    out = {}
    for lang in langs:
        texts = []
        seen = set()
        for part in parts:
            for raw, kind in SOURCES[part](lang):
                t = plain(raw, lang)
                if not t or not is_lang(t, lang) or t in seen:
                    continue
                seen.add(t)
                texts.append((t, kind))
        for voice in VOICE_OF[lang]:
            out[voice] = [{'text': t, 'kind': k, 'lang': lang, 'voice': voice,
                           'hash': fnv1a(t)} for t, k in texts]
    return out


# ── thu ──────────────────────────────────────────────────────────────────
async def synth(voice, items, voice_name, rate, force):
    import edge_tts
    dst_dir = OUT / voice
    dst_dir.mkdir(parents=True, exist_ok=True)
    legacy = OUT                                   # bộ tiếng Hàn thu theo cách cũ
    done = skipped = failed = 0
    for i, it in enumerate(items, 1):
        dst = dst_dir / (it['hash'] + '.mp3')
        # Tệp dưới 1.5 KB không thể là audio thật (một giây tiếng nói đã ~4 KB)
        # nên coi như hỏng và thu lại.
        if dst.exists() and dst.stat().st_size >= 1500 and not force:
            skipped += 1
            continue
        old = legacy / (it['hash'] + '.mp3')
        if voice == 'ko' and old.exists() and old.stat().st_size >= 1500 and not force:
            dst.write_bytes(old.read_bytes())      # đã có sẵn thì chép sang, khỏi thu lại
            skipped += 1
            continue
        try:
            comm = edge_tts.Communicate(it['text'], voice_name, rate=rate)
            await comm.save(str(dst))
            done += 1
        except Exception as e:
            failed += 1
            print('  lỗi: %-24s %s' % (it['text'][:22], e))
            if dst.exists():
                dst.unlink()
        if i % 50 == 0 or i == len(items):
            print('  %-6s %4d/%d  thu %d · bỏ qua %d · lỗi %d'
                  % (voice, i, len(items), done, skipped, failed))
    return done, skipped, failed


def main():
    ap = argparse.ArgumentParser(description='Thu sẵn audio cho LangLab (5 thứ tiếng).')
    ap.add_argument('--lang', nargs='*', default=LANGS, choices=LANGS,
                    help='thứ tiếng cần thu, mặc định cả 5')
    ap.add_argument('--only', nargs='*', default=['pic'],
                    choices=['course', 'pic', 'readings'],
                    help='phần nào: pic (nghe–xem tranh, mặc định) · course (giáo trình) · readings (bài đọc)')
    ap.add_argument('--with-course', action='store_true', help='thu thêm từ vựng và hội thoại của giáo trình')
    ap.add_argument('--with-readings', action='store_true', help='thu thêm 50 bài đọc mỗi thứ tiếng')
    ap.add_argument('--en-voice', default='uk', choices=['uk', 'us', 'both'],
                    help='tiếng Anh thu giọng nào; «both» thu cả hai nên tốn gấp đôi')
    ap.add_argument('--voice', action='append', default=[], metavar='LANG=VOICE',
                    help='đổi giọng, ví dụ --voice ko=ko-KR-InJoonNeural')
    ap.add_argument('--rate', default=None, help='ghi đè tốc độ cho mọi thứ tiếng, ví dụ -15%%')
    ap.add_argument('--force', action='store_true', help='thu lại cả những tệp đã có')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--dump-hashes', action='store_true',
                    help='in JSON {text, voice, hash} — dùng cho tools/tests/audio-test.js')
    a = ap.parse_args()

    voices = dict(VOICES)
    for pair in a.voice:
        k, _, v = pair.partition('=')
        if k not in voices:
            sys.exit('Không có thư mục giọng «%s». Chọn trong: %s' % (k, ', '.join(voices)))
        voices[k] = v

    parts = list(a.only)
    if a.with_course and 'course' not in parts:
        parts.append('course')
    if a.with_readings and 'readings' not in parts:
        parts.append('readings')

    VOICE_OF['en'] = {'uk': ['en-gb'], 'us': ['en-us'], 'both': ['en-gb', 'en-us']}[a.en_voice]

    groups = build(a.lang, parts)

    if a.dump_hashes:
        flat = [x for items in groups.values() for x in items]
        print(json.dumps(flat, ensure_ascii=False))
        return

    total = sum(len(v) for v in groups.values())
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(groups, ensure_ascii=False, indent=1), encoding='utf-8')

    # Ước lượng dung lượng: mp3 24 kbps, một từ ~1,5 s, một câu ~4 s.
    secs = sum(1.5 if len(x['text']) < 12 else 4.0
               for items in groups.values() for x in items)
    print('Sẽ thu %d tệp, phần: %s — cỡ %.0f MB, chừng %.0f phút tải về'
          % (total, ', '.join(parts), secs * 3 / 1024, secs / 60))
    for v in sorted(groups):
        kinds = {}
        for it in groups[v]:
            kinds[it['kind']] = kinds.get(it['kind'], 0) + 1
        print('  %-6s %4d câu  (%s)  giọng %s · tốc độ %s'
              % (v, len(groups[v]), ', '.join('%s %d' % kv for kv in sorted(kinds.items())),
                 voices[v], a.rate or RATES[v]))
    print('Ra thư mục: %s/<giọng>/' % OUT)

    if a.dry_run:
        print('\n-- dry-run, 3 mục đầu mỗi thứ tiếng --')
        for v in sorted(groups):
            for it in groups[v][:3]:
                print('  %s/%s.mp3  %-8s %s' % (v, it['hash'], it['kind'], it['text'][:56]))
        have = len(list(OUT.rglob('*.mp3'))) if OUT.exists() else 0
        print('\nĐã có sẵn %d tệp trong audio/tts/' % have)
        return

    try:
        import edge_tts  # noqa
    except ImportError:
        sys.exit('Thiếu thư viện. Chạy:  pip install edge-tts')

    D = S = F = 0
    for v in sorted(groups):
        d, s, f = asyncio.run(synth(v, groups[v], voices[v], a.rate or RATES[v], a.force))
        D, S, F = D + d, S + s, F + f

    files = list(OUT.rglob('*.mp3'))
    size = sum(f.stat().st_size for f in files) / 1048576
    print('\nXong. Thu mới %d · bỏ qua %d · lỗi %d' % (D, S, F))
    print('audio/tts/ hiện có %d tệp, %.1f MB' % (len(files), size))
    if F:
        print('Chạy lại script để thu tiếp những câu bị lỗi mạng.')


if __name__ == '__main__':
    main()
