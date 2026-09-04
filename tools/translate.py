#!/usr/bin/env python3
"""
Dịch tiếng Hàn sang tiếng Việt cho LangLab — dịch tự nhiên, không word-by-word.

Vì sao dùng LLM chứ không dùng máy dịch: máy dịch xử lý từng câu rời rạc nên
hay ra thứ tiếng Việt dịch sát từng chữ, đọc lên rất cứng. LLM nhận CẢ ĐOẠN một
lượt nên biết ai đang nói với ai, câu trước nói gì, và chọn được cách nói tự
nhiên của người Việt.

Khoá API đọc theo thứ tự:
  1. biến môi trường LANGLAB_API_KEY  (kèm LANGLAB_PROVIDER, LANGLAB_MODEL)
  2. tệp api-key.txt ở thư mục gốc — chỉ cần dán khoá vào, một dòng

Nhà cung cấp tự nhận theo tiền tố khoá:
  AIza…        → Google Gemini   (miễn phí, dễ lấy nhất — nên dùng)
  gsk_…        → Groq            (miễn phí, rất nhanh)
  sk-or-…      → OpenRouter      (có model :free)
  sk-ant-…     → Anthropic       (trả phí)
  sk-…         → OpenAI          (trả phí)

  (GitHub Models đã bị GitHub khai tử 30/7/2026 — không dùng được nữa.)

Nhà nào khác thì khai thêm dòng trong api-key.txt:
  base_url=https://…/v1      model=tên-model      provider=openai-compat

Kiểm tra khoá và xem model dùng được:
  python tools/translate.py --check

Bản dịch được lưu vào cache/translations.json nên câu đã dịch không gọi lại API.
"""

import json, os, pathlib, re, sys, time, urllib.error, urllib.parse, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE_FILE = ROOT / 'cache' / 'translations.json'
KEY_FILE = ROOT / 'api-key.txt'

# base_url = None nghĩa là dùng giao thức riêng của nhà đó, không phải OpenAI-compat
PROVIDERS = {
    'anthropic':  {'base_url': None, 'model': 'claude-sonnet-5',      'free': False},
    'gemini':     {'base_url': None, 'model': '',                     'free': True},
    'openai':     {'base_url': 'https://api.openai.com/v1',           'model': 'gpt-4o-mini',            'free': False},
    # GitHub Models đã bị khai tử 30/7/2026; giữ lại để báo lỗi cho rõ, không còn free
    'github':     {'base_url': 'https://models.github.ai/inference',  'model': 'openai/gpt-4.1-mini',    'free': False, 'dead': 'GitHub Models đã bị GitHub khai tử ngày 30/7/2026. Hãy dùng khoá Google AI Studio (AIza…) hoặc Groq (gsk_…) — cả hai đều miễn phí.'},
    'groq':       {'base_url': 'https://api.groq.com/openai/v1',      'model': 'llama-3.3-70b-versatile','free': True},
    'openrouter': {'base_url': 'https://openrouter.ai/api/v1',        'model': 'meta-llama/llama-3.3-70b-instruct:free', 'free': True},
    'openai-compat': {'base_url': '', 'model': '', 'free': False},
}

PREFIXES = [
    ('AIza',       'gemini'),
    ('github_pat_','github'),
    ('ghp_',       'github'),
    ('gsk_',       'groq'),
    ('sk-or-',     'openrouter'),
    ('sk-ant-',    'anthropic'),
    ('sk-',        'openai'),
]

SYSTEM = (
    "Bạn là người dịch Hàn–Việt cho một ứng dụng học tiếng Hàn.\n"
    "Nhiệm vụ: dịch từng câu sang tiếng Việt TỰ NHIÊN, như người Việt thật sẽ nói.\n"
    "\n"
    "Nguyên tắc:\n"
    "- Dịch ý, không dịch sát từng chữ. Được phép đổi trật tự từ, thêm hoặc bỏ hư từ "
    "cho câu tiếng Việt trôi chảy.\n"
    "- Giữ đúng sắc thái và mức độ lịch sự của bản gốc: 반말 thì dịch suồng sã, "
    "-습니다 thì dịch trang trọng, -아/어요 thì dịch bình thường lịch sự.\n"
    "- Dùng đại từ tiếng Việt cho tự nhiên theo ngữ cảnh (tôi/mình/em/anh/chị...), "
    "đừng máy móc dịch 저 thành 'tôi' ở mọi chỗ.\n"
    "- Đừng thêm chú thích, đừng giải thích ngữ pháp, đừng phiên âm.\n"
    "- Câu nào là câu hỏi thì bản dịch cũng phải là câu hỏi.\n"
    "- Cả đoạn phải đọc liền mạch như một đoạn văn tiếng Việt, không phải một chuỗi "
    "câu rời rạc.\n"
    "\n"
    "Trả về DUY NHẤT một mảng JSON gồm các chuỗi, đúng thứ tự và đúng số lượng câu "
    "được đưa vào. Không viết gì thêm ngoài mảng JSON."
)


def read_key():
    """Trả về dict cấu hình, hoặc None nếu chưa có khoá.

    api-key.txt: dòng đầu không phải khai báo được coi là khoá.
    Có thể thêm các dòng  provider=…  model=…  base_url=…  để ghi đè.
    """
    conf = {}
    key = (os.environ.get('LANGLAB_API_KEY') or '').strip()

    if KEY_FILE.exists():
        for line in KEY_FILE.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            m = re.match(r'^(provider|model|base_url|key)\s*=\s*(.+)$', line, re.I)
            if m:
                conf[m.group(1).lower()] = m.group(2).strip()
            elif not key:
                key = line

    key = conf.get('key', key)
    if not key:
        return None

    prov = (os.environ.get('LANGLAB_PROVIDER') or conf.get('provider') or '').strip().lower()
    if not prov:
        prov = next((p for pre, p in PREFIXES if key.startswith(pre)), 'openai-compat')

    spec = PROVIDERS.get(prov, PROVIDERS['openai-compat'])
    model = (os.environ.get('LANGLAB_MODEL') or conf.get('model') or spec['model']).strip()
    base = (os.environ.get('LANGLAB_BASE_URL') or conf.get('base_url') or spec['base_url'] or '').strip()

    return {'provider': prov, 'key': key, 'model': model, 'base_url': base.rstrip('/')}


def status():
    c = read_key()
    if not c:
        return {'ok': False, 'reason': 'no-key'}
    return {'ok': True, 'provider': c['provider'], 'model': c['model'] or '(tự chọn)'}


# ── tự chọn model cho Gemini ────────────────────────────────────────────
_gemini_list = None

def gemini_models(key):
    """Danh sách model Flash dùng được, xếp ưu tiên. Tên model Gemini đổi
    liên tục (2.0 → 2.5 → 3.x) nên hỏi thẳng API thay vì ghim cứng.

    KHÔNG lấy bản mới nhất làm mặc định: model mới nhất đông người dùng nhất
    nên hay trả 503. Ưu tiên bản 'stable' đời giữa (nhiều hạn ngạch, ít nghẽn),
    để bản mới nhất và bản -lite làm phương án dự phòng."""
    global _gemini_list
    if _gemini_list is not None:
        return _gemini_list
    found = []
    try:
        url = 'https://generativelanguage.googleapis.com/v1beta/models?key=' + urllib.parse.quote(key)
        with urllib.request.urlopen(url, timeout=20) as r:
            data = json.loads(r.read().decode('utf-8'))
        for m in data.get('models', []):
            if 'generateContent' not in (m.get('supportedGenerationMethods') or []):
                continue
            n = m.get('name', '').split('/')[-1]
            if 'flash' not in n or 'thinking' in n or 'image' in n or 'preview' in n or 'exp' in n:
                continue
            ver = re.search(r'(\d+(?:\.\d+)?)', n)
            v = float(ver.group(1)) if ver else 0
            lite = 'lite' in n
            # điểm ưu tiên: bản đời giữa (2.x) đứng trước bản mới nhất và -lite
            score = (0 if (2.0 <= v <= 2.9 and not lite) else
                     1 if not lite else 2, -v)
            found.append((score, n))
        found.sort()
        _gemini_list = [n for _, n in found]
    except Exception:
        _gemini_list = []
    if not _gemini_list:                              # dự phòng nếu không hỏi được
        _gemini_list = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-flash-latest']
    return _gemini_list


def pick_gemini_model(key):
    return gemini_models(key)[0]


# ── cache ───────────────────────────────────────────────────────────────
def load_cache():
    if CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text(encoding='utf-8'))
        except Exception:
            return {}
    return {}


def save_cache(d):
    CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = CACHE_FILE.with_suffix('.tmp')
    tmp.write_text(json.dumps(d, ensure_ascii=False, indent=0), encoding='utf-8')
    os.replace(tmp, CACHE_FILE)


# ── gọi API ─────────────────────────────────────────────────────────────
def _post(url, payload, headers, timeout=90):
    req = urllib.request.Request(
        url, data=json.dumps(payload).encode('utf-8'), method='POST',
        headers=dict({'Content-Type': 'application/json'}, **headers))
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8'))


def _prompt(sentences):
    numbered = '\n'.join('%d. %s' % (i + 1, s) for i, s in enumerate(sentences))
    return ('Đoạn tiếng Hàn gồm %d câu:\n\n%s\n\n'
            'Trả về mảng JSON gồm đúng %d bản dịch tiếng Việt.'
            % (len(sentences), numbered, len(sentences)))


def _extract_array(text, n):
    """LLM đôi khi bọc mảng trong khối code hoặc thêm lời dẫn — lôi mảng ra."""
    t = text.strip()
    t = re.sub(r'^```(?:json)?\s*', '', t)
    t = re.sub(r'\s*```$', '', t)
    i, j = t.find('['), t.rfind(']')
    if i >= 0 and j > i:
        t = t[i:j + 1]
    arr = json.loads(t)
    if not isinstance(arr, list):
        raise ValueError('không phải mảng JSON')
    arr = [str(x).strip() for x in arr]
    if len(arr) != n:
        raise ValueError('trả về %d câu, cần %d' % (len(arr), n))
    return arr


def call_llm(sentences, cfg):
    user = _prompt(sentences)
    prov, key, model = cfg['provider'], cfg['key'], cfg['model']

    if prov == 'anthropic':
        data = _post('https://api.anthropic.com/v1/messages', {
            'model': model, 'max_tokens': 4096, 'system': SYSTEM,
            'messages': [{'role': 'user', 'content': user}],
        }, {'x-api-key': key, 'anthropic-version': '2023-06-01'})
        text = ''.join(b.get('text', '') for b in data.get('content', []))

    elif prov == 'gemini':
        # thử lần lượt vài model: gặp nghẽn (503) hay hết hạn ngạch (429)
        # thì đợi chút rồi lùi sang model vắng hơn, thay vì chịu thua ngay
        cand = [model] if model else gemini_models(key)
        payload = {
            'systemInstruction': {'parts': [{'text': SYSTEM}]},
            'contents': [{'role': 'user', 'parts': [{'text': user}]}],
            'generationConfig': {'temperature': 0.4, 'maxOutputTokens': 4096},
        }
        text, last = None, None
        for mi, mdl in enumerate(cand):
            url = ('https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent?key=%s'
                   % (urllib.parse.quote(mdl), urllib.parse.quote(key)))
            for attempt in range(2):                 # mỗi model thử lại một lần
                try:
                    data = _post(url, payload, {})
                    cands = data.get('candidates') or []
                    parts = (cands[0].get('content', {}).get('parts', []) if cands else [])
                    text = ''.join(p.get('text', '') for p in parts)
                    break
                except urllib.error.HTTPError as e:
                    last = e
                    if e.code in (503, 429) and attempt == 0:
                        time.sleep(1.5)              # nghẽn tạm thời: đợi rồi thử lại
                        continue
                    break                            # lỗi khác hoặc đã thử lại: sang model tiếp
            if text is not None:
                break
        if text is None and last is not None:
            raise last

    else:  # OpenAI và mọi endpoint tương thích: GitHub Models, Groq, OpenRouter…
        base = cfg['base_url'] or 'https://api.openai.com/v1'
        data = _post(base + '/chat/completions', {
            'model': model, 'temperature': 0.4,
            'messages': [{'role': 'system', 'content': SYSTEM},
                         {'role': 'user', 'content': user}],
        }, {'Authorization': 'Bearer ' + key})
        text = data['choices'][0]['message']['content']

    return _extract_array(text, len(sentences))


def translate(sentences, hash_fn):
    """Dịch danh sách câu. Trả về (dict {băm: bản dịch}, thông báo lỗi hoặc None)."""
    sentences = [s for s in (x.strip() for x in sentences) if s]
    if not sentences:
        return {}, None

    cache = load_cache()
    keys = [hash_fn(s) for s in sentences]
    missing = [s for s, k in zip(sentences, keys) if k not in cache]

    if not missing:
        return {k: cache[k] for k in keys}, None

    cfg = read_key()
    if not cfg:
        return {k: cache[k] for k in keys if k in cache}, 'no-key'

    spec = PROVIDERS.get(cfg['provider'], {})
    if spec.get('dead'):
        return {k: cache[k] for k in keys if k in cache}, spec['dead']

    # Gửi CẢ đoạn (không chỉ câu thiếu) để LLM có ngữ cảnh, rồi chỉ lưu phần thiếu.
    try:
        arr = call_llm(sentences, cfg)
    except urllib.error.HTTPError as e:
        body = ''
        try:
            body = e.read().decode('utf-8', 'ignore')[:300]
        except Exception:
            pass
        return {k: cache[k] for k in keys if k in cache}, 'HTTP %s — %s' % (e.code, body)
    except Exception as e:
        return {k: cache[k] for k in keys if k in cache}, str(e)

    for k, vi in zip(keys, arr):
        cache[k] = vi
    save_cache(cache)
    return {k: cache[k] for k in keys}, None


# ── kiểm tra khoá từ dòng lệnh: python tools/translate.py --check ───────
FREE_HELP = """
Hai nơi cấp khoá MIỄN PHÍ, không cần thẻ tín dụng:

  1. Google AI Studio        aistudio.google.com/apikey   (DỄ NHẤT)
     Bấm "Create API key", khỏi chọn quyền gì cả. Khoá bắt đầu bằng AIza.
     Bậc miễn phí rộng nhất, dịch tiếng Việt tốt.
     Lưu ý: Google có thể dùng dữ liệu bậc miễn phí để cải thiện mô hình.

  2. Groq                    console.groq.com/keys
     Khoá bắt đầu bằng gsk_. Rất nhanh, chạy model nguồn mở.

(GitHub Models đã bị GitHub khai tử ngày 30/7/2026 — không dùng được nữa.)

Chép khoá vào tệp api-key.txt ở thư mục langlab là xong.
"""


def _check():
    cfg = read_key()
    if not cfg:
        print('Chưa có khoá.')
        print('Đã tìm ở: biến môi trường LANGLAB_API_KEY và tệp %s' % KEY_FILE)
        print(FREE_HELP)
        return 1

    # chặn sớm nhà cung cấp đã ngừng hoạt động, khỏi gọi API vô ích
    spec = PROVIDERS.get(cfg['provider'], {})
    if spec.get('dead'):
        print('Nhà cung cấp : %s — ĐÃ NGỪNG HOẠT ĐỘNG' % cfg['provider'])
        print('\n%s' % spec['dead'])
        print(FREE_HELP)
        return 1

    masked = cfg['key'][:6] + '…' + cfg['key'][-4:] if len(cfg['key']) > 12 else '…'
    print('Nhà cung cấp : %s' % cfg['provider'])
    print('Khoá         : %s' % masked)
    print('Base URL     : %s' % (cfg['base_url'] or '(giao thức riêng)'))

    if cfg['provider'] == 'gemini' and not cfg['model']:
        print('Model        : đang hỏi API xem dùng được model nào…')
        chain = gemini_models(cfg['key'])
        print('Model        : %s%s' % (chain[0],
              (' (dự phòng nếu nghẽn: ' + ', '.join(chain[1:3]) + ')') if len(chain) > 1 else ''))
    else:
        print('Model        : %s' % cfg['model'])

    print('\nThử dịch hai câu…')
    try:
        out = call_llm(['안녕하세요. 만나서 반갑습니다.', '한국어 공부는 재미있지만 조금 어려워요.'], cfg)
        for s, v in zip(['안녕하세요. 만나서 반갑습니다.', '한국어 공부는 재미있지만 조금 어려워요.'], out):
            print('  %s\n  → %s' % (s, v))
        print('\nKhoá dùng được. Chạy chay.bat rồi bấm « Dịch cả đoạn ».')
        return 0
    except urllib.error.HTTPError as e:
        body = ''
        try:
            body = e.read().decode('utf-8', 'ignore')[:400]
        except Exception:
            pass
        print('\nLỖI HTTP %s\n%s' % (e.code, body))
        if e.code in (401, 403):
            print('\n→ Khoá sai, hết hạn, hoặc thiếu quyền.')
            if cfg['provider'] == 'github':
                print('  Với GitHub Models, token phải có quyền "Models: read".')
        elif e.code == 404:
            print('\n→ Không có model tên đó. Thêm dòng  model=…  vào api-key.txt.')
        elif e.code == 429:
            print('\n→ Hết hạn mức trong ngày. Mai thử lại, hoặc đổi nhà cung cấp.')
        elif e.code == 503:
            print('\n→ Model đang quá tải (không phải lỗi khoá). Đợi một chút rồi chạy lại.')
            print('  App đã tự thử lại và lùi sang model vắng hơn, nên trong app thường vẫn dịch được.')
        return 1
    except Exception as e:
        print('\nLỖI: %s' % e)
        return 1


if __name__ == '__main__':
    if '--help' in sys.argv or '-h' in sys.argv:
        print(__doc__)
        print(FREE_HELP)
        sys.exit(0)
    sys.exit(_check())
