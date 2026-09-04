#!/usr/bin/env python3
"""
build_dict.py — dựng từ điển Hàn–Việt cho LangLab từ KRDict.

Kéo dữ liệu từ « 한국어기초사전 » (Korean Learners' Dictionary) của Viện Quốc
ngữ Hàn Quốc qua Open API, lấy đúng bản dịch tiếng Việt, làm giàu thêm phiên âm
và Hanja, rồi xuất ra một tệp tĩnh js/dict-ko.js mà app nạp thẳng (không cần
server lúc tra — đúng tinh thần LangLab).

    # 1) Lấy khoá API miễn phí tại:
    #    https://krdict.korean.go.kr/openApi/openApiRegister
    #    rồi dán vào tools/krdict-key.txt (một dòng)
    pip install wordfreq          # (tuỳ chọn) để lấy danh sách từ phổ biến
    python tools/build_dict.py --top 1000        # kéo 1000 từ hay dùng nhất
    python tools/build_dict.py --self-test       # kiểm parser, KHÔNG cần mạng/khoá

Giấy phép: dữ liệu KRDict theo CC-BY-SA 2.0 KR. Tệp xuất ra có kèm dòng ghi công
국립국어원 ở đầu. Vì là « share-alike », nếu bạn phát hành app thì phần từ điển
phái sinh cũng phải mở dưới cùng giấy phép — đừng gỡ dòng ghi công.
"""

import argparse, html, json, os, re, sys, time, pathlib
import urllib.error, urllib.parse, urllib.request
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT  = ROOT / 'js' / 'dict-ko.js'
KEY_FILE = ROOT / 'tools' / 'krdict-key.txt'
API = 'https://krdict.korean.go.kr/api/search'
API_VIEW = 'https://krdict.korean.go.kr/api/view'

# Tên ngôn ngữ tiếng Việt như KRDict trả về trong thẻ <trans_lang>.
# Lọc theo TÊN nên không phụ thuộc mã số trans_lang (vốn không chắc chắn).
VI_NAMES = ('베트남어', 'Vietnamese', 'tiếng Việt')

# Danh sách từ mồi khi không có wordfreq — vài trăm từ đời sống hay gặp.
SEED_WORDS = (
    '사람 사랑 시간 오늘 내일 어제 지금 여기 저기 사과 물 밥 국 고기 채소 과일 '
    '학교 학생 선생님 친구 가족 어머니 아버지 동생 남자 여자 아이 이름 나라 '
    '집 방 문 창문 책 신문 연필 가방 지갑 시계 안경 우산 모자 옷 바지 신발 '
    '개 고양이 새 물고기 말 소 돼지 닭 나무 꽃 하늘 바다 산 강 비 눈 바람 구름 '
    '병원 은행 시장 가게 식당 공원 회사 도서관 극장 공항 지하철 버스 택시 기차 '
    '아침 점심 저녁 봄 여름 가을 겨울 년 월 일 주일 요일 '
    '가다 오다 먹다 마시다 자다 일어나다 앉다 서다 걷다 뛰다 보다 듣다 읽다 쓰다 '
    '사다 팔다 열다 닫다 주다 받다 알다 모르다 좋아하다 싫어하다 만나다 '
    '크다 작다 많다 적다 높다 낮다 길다 짧다 빠르다 느리다 좋다 나쁘다 예쁘다 '
    '쉽다 어렵다 덥다 춥다 맵다 달다 짜다 맛있다 재미있다 바쁘다 아프다 '
    '공부하다 일하다 운동하다 여행 취미 음악 영화 사진 그림 노래 '
    '돈 값 가격 시험 문제 질문 대답 수업 숙제 전화 컴퓨터 냉장고 텔레비전'
).split()


# ── khoá API ────────────────────────────────────────────────────────────
def read_key():
    key = (os.environ.get('KRDICT_KEY') or '').strip()
    if not key and KEY_FILE.exists():
        for line in KEY_FILE.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if line and not line.startswith('#'):
                key = line
                break
    return key


# ── phiên âm La-tinh (Revised Romanization, xấp xỉ) ─────────────────────
CHO = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h']
JUNG = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i']
JONG = ['','k','k','ks','n','nj','nh','t','l','lk','lm','lp','ls','lt','lp','lh','m','p','ps','t','t','ng','t','t','k','t','p','h']

# Khi âm tiết có patchim đơn và âm tiết sau bắt đầu bằng ㅇ (âm đầu rỗng),
# phụ âm cuối « chạy » sang làm âm đầu của âm tiết sau, và được đọc mềm đi.
# 국어 → gu-geo, 좋아 → jo-a. Chỉ xử lý patchim đơn; patchim kép thì bỏ qua.
MOVE = {1:'g',2:'kk',4:'n',7:'d',8:'r',16:'m',17:'b',19:'s',20:'ss',
        22:'j',23:'ch',24:'k',25:'t',26:'p',27:''}

def romanize(text):
    """Hangul → chữ La-tinh theo Romaja tu chỉnh, có xử lý nối âm cơ bản.
    Bỏ qua các quy tắc đồng hoá phức tạp — đủ để người học hình dung cách đọc."""
    syls = []
    for ch in text:
        code = ord(ch) - 0xAC00
        if 0 <= code <= 11171:
            syls.append([code // 588, (code % 588) // 28, code % 28])
        elif ch == ' ':
            syls.append(' ')
        # bỏ ký tự khác
    n = len(syls)
    override = [None] * n
    for i in range(n):
        s = syls[i]
        if s == ' ':
            continue
        # patchim di chuyển khi âm tiết sau có âm đầu rỗng (ㅇ = chỉ số 11)
        if s[2] in MOVE and i + 1 < n and isinstance(syls[i+1], list) and syls[i+1][0] == 11:
            override[i+1] = MOVE[s[2]]
            s[2] = 0                              # âm tiết này mất patchim
    out = []
    for i in range(n):
        s = syls[i]
        if s == ' ':
            out.append(' '); continue
        onset = override[i] if override[i] is not None else CHO[s[0]]
        out.append(onset + JUNG[s[1]] + JONG[s[2]])
    return ''.join(out).strip()


# ── gọi & phân tích KRDict ──────────────────────────────────────────────
def fetch(word, key, timeout=20):
    q = urllib.parse.urlencode({
        'key': key, 'q': word, 'part': 'word', 'sort': 'dict',
        'translated': 'y', 'trans_lang': '7',   # 7 = tiếng Việt (best guess); parser vẫn lọc theo tên
        'num': 10, 'advanced': 'y', 'method': 'exact'
    })
    req = urllib.request.Request(API + '?' + q, headers={'User-Agent': 'LangLab-dict/1'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8')


def _txt(node, tag):
    el = node.find(tag)
    return html.unescape(el.text.strip()) if el is not None and el.text else ''


POS_VI = {
    '명사':'danh từ', '동사':'động từ', '형용사':'tính từ', '부사':'phó từ',
    '대명사':'đại từ', '관형사':'định từ', '수사':'số từ', '조사':'trợ từ',
    '감탄사':'thán từ', '의존 명사':'danh từ phụ thuộc', '보조 동사':'động từ bổ trợ',
}

def parse(xml_text, want_word):
    """Trả về danh sách mục từ khớp want_word, mỗi mục có bản dịch tiếng Việt."""
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return []
    items = []
    for item in root.iter('item'):
        ko = _txt(item, 'word')
        if not ko or ko != want_word:
            continue
        pos = _txt(item, 'pos')
        origin = _txt(item, 'origin')            # Hanja nếu là từ gốc Hán, ví dụ 圖書館
        hanja = origin if re.search(r'[㐀-鿿]', origin) else ''
        target_code = _txt(item, 'target_code')  # mã để gọi API chi tiết lấy ví dụ

        level = _txt(item, 'word_grade')          # 초급 / 중급 / 고급 (nếu có)

        senses = []
        for s in item.iter('sense'):
            def_vi = def_ko = ''
            # KRDict lồng bản dịch trong <translation> có <trans_lang> = tên ngôn ngữ
            for tr in s.iter('translation'):
                lang = _txt(tr, 'trans_lang')
                if any(v in lang for v in VI_NAMES):
                    def_vi = _txt(tr, 'trans_word') or _txt(tr, 'trans_dfn')
                    dfn = _txt(tr, 'trans_dfn')
                    if dfn and dfn != def_vi:
                        def_vi = def_vi or dfn
                    break
            def_ko = _txt(s, 'definition')

            # câu ví dụ (용례) — « cách dùng ». Chỉ lấy phần chữ trực tiếp (leaf),
            # bỏ qua thẻ bao ngoài để không đếm trùng.
            examples, seen_ex = [], set()
            for exel in s.iter('example'):
                exk = html.unescape(exel.text.strip()) if exel.text and exel.text.strip() else ''
                if exk and re.search(r'[가-힣]', exk) and exk not in seen_ex:
                    seen_ex.add(exk); examples.append(exk)
            examples = examples[:3]

            if def_vi or def_ko:
                sn = {'def_vi': def_vi, 'def_ko': def_ko}
                if examples:
                    sn['examples'] = examples
                senses.append(sn)

        vi_first = next((s['def_vi'] for s in senses if s['def_vi']), '')
        if not vi_first:
            continue                              # bỏ mục không có tiếng Việt

        entry = {
            'ko': ko,
            'rom': romanize(ko),
            'vi': vi_first,
            'pos': POS_VI.get(pos, pos or ''),
            'hanja': hanja,
            'senses': senses[:5],
        }
        if level:
            entry['level'] = level
        if target_code:
            entry['_tc'] = target_code            # tạm để gọi API chi tiết, xoá trước khi xuất
        items.append(entry)
    return items


def view_url(target_code, key):
    # API chi tiết: method=target_code, mã số đưa vào tham số 'q' (KHÔNG phải 'target_code').
    q = urllib.parse.urlencode({'key': key, 'method': 'target_code', 'q': target_code})
    return API_VIEW + '?' + q


def fetch_view(target_code, key, timeout=20):
    req = urllib.request.Request(view_url(target_code, key), headers={'User-Agent': 'LangLab-dict/1'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8')


def parse_examples(xml_text):
    """Lấy câu ví dụ (용례) từ phản hồi API chi tiết. Trả về danh sách chuỗi tiếng Hàn."""
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return []
    out, seen = [], set()
    for exel in root.iter('example'):
        txt = html.unescape(exel.text.strip()) if exel.text and exel.text.strip() else ''
        # bỏ mẫu quá ngắn (chỉ là cụm), giữ câu có chữ Hàn
        if txt and re.search(r'[가-힣]', txt) and len(txt) >= 4 and txt not in seen:
            seen.add(txt); out.append(txt)
    return out


# ── danh sách từ cần kéo ────────────────────────────────────────────────
def word_list(top):
    try:
        from wordfreq import top_n_list
        words = [w for w in top_n_list('ko', top * 2) if re.fullmatch(r'[가-힣]{1,}', w)]
        if words:
            return words[:top]
    except Exception:
        pass
    print('  (không có wordfreq — dùng danh sách mồi %d từ)' % len(SEED_WORDS))
    return SEED_WORDS[:top]


ATTRIB = (
    '/* ============================================================\n'
    '   LangLab — từ điển Hàn–Việt (js/dict-ko.js)\n'
    '   TỰ SINH bằng tools/build_dict.py — đừng sửa tay.\n'
    '\n'
    '   Nguồn dữ liệu: 국립국어원 한국어기초사전 (Korean Learners\' Dictionary,\n'
    '   National Institute of Korean Language), giấy phép CC-BY-SA 2.0 KR.\n'
    '   Bản phái sinh này giữ nguyên giấy phép CC-BY-SA. Ghi công 국립국어원.\n'
    '   Phiên âm La-tinh do LangLab tự sinh (Romaja tu chỉnh, xấp xỉ).\n'
    '   ============================================================ */\n'
)

def write_out(entries):
    OUT.parent.mkdir(parents=True, exist_ok=True)
    clean = [{k: v for k, v in e.items() if k != '_tc'} for e in entries]   # bỏ trường tạm
    body = 'window.DICT_KO = ' + json.dumps(clean, ensure_ascii=False, separators=(',', ':')) + ';\n'
    OUT.write_text(ATTRIB + body, encoding='utf-8')


PROGRESS = ROOT / 'tools' / '.dict-progress.json'

_view_warned = [False]

def enrich_examples(entry, key):
    """Gọi API chi tiết lấy tối đa 3 câu ví dụ, gắn vào entry['examples'].
    In một dòng chẩn đoán ở lần trục trặc ĐẦU TIÊN để dễ soi nếu vẫn 0 ví dụ."""
    tc = entry.get('_tc')
    if not tc:
        if not _view_warned[0]:
            _view_warned[0] = True
            print('  [chẩn đoán] mục %r không có target_code trong phản hồi tìm kiếm.' % entry.get('ko'))
        return
    try:
        xml = fetch_view(tc, key)
        ex = parse_examples(xml)
        if ex:
            entry['examples'] = ex[:3]
        elif not _view_warned[0]:
            _view_warned[0] = True
            print('  [chẩn đoán] API chi tiết không có <example> cho %r (mã %s). '
                  'Trích phản hồi: %s' % (entry.get('ko'), tc, xml[:300].replace('\n', ' ')))
    except Exception as e:
        if not _view_warned[0]:
            _view_warned[0] = True
            print('  [chẩn đoán] lỗi gọi API chi tiết cho %r (mã %s): %r'
                  % (entry.get('ko'), tc, e))


def try_word(word):
    """Thử 1 từ để xác nhận API chi tiết trả về câu ví dụ. Không ghi đè js/dict-ko.js."""
    key = read_key()
    if not key:
        sys.exit('Chưa có khoá KRDict (tools/krdict-key.txt).')
    try:
        got = parse(fetch(word, key), word)
    except Exception as e:
        sys.exit('Lỗi gọi API tìm kiếm: %r' % e)
    if not got:
        print('Không tìm thấy « %s » (hoặc mục không có bản dịch tiếng Việt).' % word)
        return 0
    for m in got:
        enrich_examples(m, key)
        print('\n%s  [%s]  →  %s' % (m['ko'], m.get('pos', ''), m.get('vi', '')))
        exs = m.get('examples', [])
        if exs:
            for ex in exs:
                print('   • ví dụ:', ex)
        else:
            print('   (không lấy được câu ví dụ — mã %s)' % m.get('_tc', '?'))
    return 0


def build(top, resume=False, examples=False):
    key = read_key()
    if not key:
        sys.exit('Chưa có khoá KRDict.\n'
                 'Lấy miễn phí tại https://krdict.korean.go.kr/openApi/openApiRegister\n'
                 'rồi dán vào %s' % KEY_FILE)

    words = word_list(top)
    entries, seen, done = [], set(), set()

    # --resume: nạp lại tiến độ dở dang để không kéo lại từ đầu
    if resume and PROGRESS.exists():
        try:
            saved = json.loads(PROGRESS.read_text(encoding='utf-8'))
            entries = saved.get('entries', [])
            seen = {m['ko'] for m in entries}
            done = set(saved.get('done', []))
            print('Tiếp tục: đã có %d mục, bỏ qua %d từ đã kéo.' % (len(entries), len(done)))
        except Exception:
            pass

    todo = [w for w in words if w not in done]
    print('Kéo %d từ từ KRDict (còn lại %d)…' % (len(words), len(todo)))
    miss = fail = 0

    def save_progress():
        try:
            PROGRESS.write_text(json.dumps({'done': sorted(done), 'entries': entries},
                                           ensure_ascii=False), encoding='utf-8')
        except Exception:
            pass

    for i, w in enumerate(todo, 1):
        try:
            got = parse(fetch(w, key), w)
        except urllib.error.HTTPError as e:
            fail += 1
            if e.code in (400, 401, 403):
                save_progress()
                sys.exit('\nAPI báo HTTP %s — khoá sai hoặc chưa kích hoạt.\n'
                         'Tiến độ đã lưu; sửa khoá rồi chạy lại với --resume.' % e.code)
            continue
        except Exception:
            fail += 1
            continue
        done.add(w)
        for m in got:
            if m['ko'] in seen:
                continue
            if examples:                          # gọi thêm API chi tiết lấy câu ví dụ
                enrich_examples(m, key)
                time.sleep(0.2)
            seen.add(m['ko']); entries.append(m)
        if not got:
            miss += 1
        if i % 25 == 0 or i == len(todo):
            nex = sum(1 for e in entries if e.get('examples'))
            print('  %4d/%d  · tổng %d mục%s · không có VN %d · lỗi %d'
                  % (i, len(todo), len(entries),
                     (' · có ví dụ %d' % nex) if examples else '', miss, fail))
            save_progress()                       # lưu định kỳ để chịu được ngắt giữa chừng
        time.sleep(0.2)                           # lịch sự với máy chủ

    if not entries:
        sys.exit('Không lấy được mục nào. Kiểm tra khoá và kết nối.')
    write_out(entries)
    if PROGRESS.exists():
        PROGRESS.unlink()
    size = OUT.stat().st_size / 1024
    print('\nXong. %d mục → %s (%.0f KB)' % (len(entries), OUT, size))
    print('Nhớ giữ dòng ghi công 국립국어원 (CC-BY-SA).')


# ── tự kiểm parser, không cần mạng ──────────────────────────────────────
SAMPLE_XML = '''<?xml version="1.0" encoding="UTF-8"?>
<channel>
  <item>
    <word>도서관</word>
    <pos>명사</pos>
    <origin>圖書館</origin>
    <word_grade>초급</word_grade>
    <sense>
      <definition>책과 자료를 모아 두고 사람들이 볼 수 있게 한 시설.</definition>
      <translation><trans_lang>영어</trans_lang><trans_word>library</trans_word></translation>
      <translation><trans_lang>베트남어</trans_lang><trans_word>thư viện</trans_word>
        <trans_dfn>Cơ sở tập hợp sách và tài liệu để mọi người đến xem.</trans_dfn></translation>
      <example><example>학교 도서관에서 책을 빌렸다.</example></example>
      <example><example>도서관은 조용해서 공부하기 좋다.</example></example>
    </sense>
  </item>
  <item>
    <word>먹다</word>
    <pos>동사</pos>
    <origin></origin>
    <sense>
      <definition>음식을 입에 넣고 삼키다.</definition>
      <translation><trans_lang>일본어</trans_lang><trans_word>食べる</trans_word></translation>
      <translation><trans_lang>베트남어</trans_lang><trans_word>ăn</trans_word></translation>
    </sense>
  </item>
</channel>'''

def self_test():
    ok = True
    def check(cond, label):
        nonlocal ok
        ok = ok and cond
        print(('  ✓ ' if cond else '  ✗ ') + label)

    print('1) Romaja:')
    for ko, exp in [('도서관','doseogwan'), ('먹다','meokda'), ('한국어','hangugeo'),
                    ('안녕하세요','annyeonghaseyo'), ('책상','chaeksang')]:
        got = romanize(ko)
        check(got == exp, '%s → %s%s' % (ko, got, '' if got == exp else ' (mong %s)' % exp))

    print('2) Parser — chọn đúng tiếng Việt giữa nhiều ngôn ngữ:')
    a = parse(SAMPLE_XML, '도서관')
    check(len(a) == 1, 'khớp đúng 1 mục 도서관')
    check(a and a[0]['vi'] == 'thư viện', 'nghĩa VN = « thư viện » (không lấy nhầm library)')
    check(a and a[0]['hanja'] == '圖書館', 'bắt được Hanja 圖書館')
    check(a and a[0]['pos'] == 'danh từ', 'quy 명사 → danh từ')
    check(a and a[0].get('level') == '초급', 'bắt được cấp độ 초급')
    exs = a[0]['senses'][0].get('examples', []) if a else []
    check(len(exs) == 2 and '도서관' in exs[0], 'lấy được 2 câu ví dụ')
    b = parse(SAMPLE_XML, '먹다')
    check(b and b[0]['vi'] == 'ăn', '먹다 → ăn (bỏ qua 食べる)')
    check(b and b[0]['hanja'] == '', '먹다 không có Hanja')

    print('3) Parser ví dụ từ API chi tiết:')
    VIEW = ('<channel><item><word>도서관</word><sense>'
            '<example_info><example>도서관에서 책을 읽어요.</example></example_info>'
            '<example_info><example>학교 도서관이 넓다.</example></example_info>'
            '</sense></item></channel>')
    exs = parse_examples(VIEW)
    check(len(exs) == 2 and exs[0] == '도서관에서 책을 읽어요.', 'lấy 2 câu ví dụ từ API chi tiết')
    u = view_url('32750', 'DEMOKEY')
    check('q=32750' in u and 'method=target_code' in u, 'URL API chi tiết dùng đúng tham số q')

    print('\n' + ('TẤT CẢ ĐẠT' if ok else 'CÓ LỖI'))
    return 0 if ok else 1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--top', type=int, default=1000, help='số từ phổ biến cần kéo (5000 phủ gần hết từ hay dùng)')
    ap.add_argument('--resume', action='store_true', help='tiếp tục cú kéo dở dang (an toàn khi ngắt giữa chừng)')
    ap.add_argument('--examples', action='store_true', help='gọi thêm API chi tiết lấy câu ví dụ thật (chậm hơn ~2×)')
    ap.add_argument('--self-test', action='store_true', help='kiểm parser, không cần mạng')
    ap.add_argument('--try', dest='try_word', metavar='TỪ',
                    help='thử 1 từ: in nghĩa + câu ví dụ lấy được, KHÔNG ghi đè từ điển')
    a = ap.parse_args()
    if a.self_test:
        sys.exit(self_test())
    if a.try_word:
        sys.exit(try_word(a.try_word))
    build(a.top, resume=a.resume, examples=a.examples)


if __name__ == '__main__':
    main()
