#!/usr/bin/env python3
"""
Thu sẵn toàn bộ audio tiếng Hàn cho LangLab bằng giọng neural của Microsoft.

Vì sao cần: giọng đọc của trình duyệt lấy từ giọng cài trên máy, trên Windows
thường là Microsoft Heami — giọng ghép mẫu từ thời Windows 8, nghe rất máy.
Script này thu sẵn từng từ và từng câu thành mp3 bằng giọng neural, sau đó app
chỉ việc phát tệp: chất lượng như nhau trên mọi máy, mọi trình duyệt, chạy
offline, và bấm là kêu ngay không phải chờ engine khởi động.

    pip install edge-tts
    python tools/make_audio.py                  # giọng nữ SunHi
    python tools/make_audio.py --voice ko-KR-InJoonNeural
    python tools/make_audio.py --dry-run        # chỉ xem sẽ thu những gì

Kết quả nằm ở audio/tts/<băm>.mp3 — khoảng 300 tệp, tổng chừng 4–6 MB.
Chạy lại thì chỉ thu phần còn thiếu.

edge-tts dùng endpoint đọc-to của Microsoft Edge: miễn phí, không cần khoá API.
Đây là endpoint nội bộ của Edge chứ không phải API công khai — dùng để tự học
thì không sao, nhưng đừng đưa vào sản phẩm thương mại.
"""

import argparse, asyncio, json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT  = ROOT / 'audio' / 'tts'
MANIFEST = ROOT / 'tools' / 'audio-manifest.json'

VOICES = {
    'ko-KR-SunHiNeural':  'nữ, giọng chuẩn thời sự',
    'ko-KR-InJoonNeural': 'nam, giọng trầm ấm',
    'ko-KR-BongJinNeural':'nam, giọng trẻ',
    'ko-KR-GookMinNeural':'nam, giọng thân thiện',
    'ko-KR-JiMinNeural':  'nữ, giọng trẻ',
    'ko-KR-SeoHyeonNeural':'nữ, giọng nhẹ',
    'ko-KR-SoonBokNeural':'nữ, giọng lớn tuổi',
    'ko-KR-YuJinNeural':  'nữ, giọng năng động',
    'ko-KR-HyunsuMultilingualNeural': 'nam, đa ngôn ngữ',
}


# ── băm: phải khớp tuyệt đối với hàm hash() trong js/tts.js ──────────────
def norm(s: str) -> str:
    return re.sub(r'\s+', ' ', str(s)).strip()


def fnv1a(s: str) -> str:
    h = 0x811c9dc5
    for b in norm(s).encode('utf-8'):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return '%08x' % h


# ── lấy danh sách câu cần thu từ dữ liệu khoá học ───────────────────────
HANGUL = re.compile(r'[가-힣]')
KO_FIELD = re.compile(r"\bko\s*:\s*'((?:[^'\\]|\\.)*)'")
LESSON_HDR = re.compile(r"\bno\s*:\s*(\d+)\s*,\s*ko\s*:")


def build_manifest() -> list:
    """Đọc trực tiếp js/course-ko.js bằng Python — không cần Node.js.

    Dữ liệu khoá học có dạng rất đều: mọi chuỗi tiếng Hàn đều nằm ở khoá `ko:'…'`
    (từ vựng, lượt hội thoại, câu ví dụ ngữ pháp, tên bài). Quét đúng khoá đó là đủ.
    """
    path = ROOT / 'js' / 'course-ko.js'
    if not path.exists():
        sys.exit('Không thấy %s' % path)
    src = path.read_text(encoding='utf-8')

    seen, out = set(), []
    for m in KO_FIELD.finditer(src):
        raw = m.group(1).replace("\\'", "'").replace('\\\\', '\\')
        t = norm(raw)
        if not t or not HANGUL.search(t) or t in seen:
            continue
        seen.add(t)

        # bài nào: lấy số bài của tiêu đề gần nhất phía trên
        hdr = None
        for h in LESSON_HDR.finditer(src, 0, m.start()):
            hdr = h
        lesson = int(hdr.group(1)) if hdr else 0

        kind = 'sentence' if (' ' in t or t[-1] in '.?!') else 'word'
        out.append({'text': t, 'kind': kind, 'lesson': lesson, 'hash': fnv1a(t)})
    return out


async def synth(items, voice, rate, force):
    import edge_tts
    OUT.mkdir(parents=True, exist_ok=True)
    done = skipped = failed = 0
    for i, it in enumerate(items, 1):
        dst = OUT / (it['hash'] + '.mp3')
        # Tệp dưới 1.5 KB không thể là audio thật (một giây tiếng Hàn đã ~4 KB)
        # nên coi như hỏng và thu lại.
        if dst.exists() and dst.stat().st_size >= 1500 and not force:
            skipped += 1
            continue
        try:
            comm = edge_tts.Communicate(it['text'], voice, rate=rate)
            await comm.save(str(dst))
            done += 1
        except Exception as e:
            failed += 1
            print('  lỗi: %-24s %s' % (it['text'][:22], e))
            if dst.exists():
                dst.unlink()
        if i % 25 == 0 or i == len(items):
            print('  %4d/%d  đã thu %d · bỏ qua %d · lỗi %d' % (i, len(items), done, skipped, failed))
    return done, skipped, failed


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--voice', default='ko-KR-SunHiNeural', choices=list(VOICES))
    ap.add_argument('--rate', default='-8%', help='tốc độ, ví dụ -15%% cho chậm hơn')
    ap.add_argument('--force', action='store_true', help='thu lại cả những tệp đã có')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    items = build_manifest()
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(items, ensure_ascii=False, indent=1), encoding='utf-8')

    kinds = {}
    for it in items:
        kinds[it['kind']] = kinds.get(it['kind'], 0) + 1
    print('Cần thu %d câu: %s' % (len(items), ', '.join('%s %d' % kv for kv in sorted(kinds.items()))))
    print('Giọng: %s (%s) · tốc độ %s' % (a.voice, VOICES[a.voice], a.rate))
    print('Ra thư mục: %s' % OUT)

    if a.dry_run:
        print('\n-- dry-run, 8 mục đầu --')
        for it in items[:8]:
            print('  %s.mp3  %-6s bài %-2s  %s' % (it['hash'], it['kind'], it['lesson'], it['text']))
        have = len(list(OUT.glob('*.mp3'))) if OUT.exists() else 0
        print('\nĐã có sẵn %d tệp trong audio/tts/' % have)
        return

    try:
        import edge_tts  # noqa
    except ImportError:
        sys.exit('Thiếu thư viện. Chạy:  pip install edge-tts')

    done, skipped, failed = asyncio.run(synth(items, a.voice, a.rate, a.force))
    total = len(list(OUT.glob('*.mp3')))
    size = sum(f.stat().st_size for f in OUT.glob('*.mp3')) / 1048576
    print('\nXong. Thu mới %d · bỏ qua %d · lỗi %d' % (done, skipped, failed))
    print('audio/tts/ hiện có %d tệp, %.1f MB' % (total, size))
    if failed:
        print('Chạy lại script để thu tiếp những câu bị lỗi mạng.')


if __name__ == '__main__':
    main()
