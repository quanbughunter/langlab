#!/usr/bin/env python3
"""
Máy chủ cục bộ cho LangLab — vừa mở app, vừa đọc được MỌI văn bản tiếng Hàn.

    python tools/serve.py            # tự chọn cổng rảnh rồi mở trình duyệt
    python tools/serve.py --port 5500
    python tools/serve.py --voice ko-KR-InJoonNeural
    python tools/serve.py --no-browser

Vì sao cần: `tools/make_audio.py` chỉ thu được những từ và câu đã có trong khoá học
lúc chạy script. Còn khi bạn dán một đoạn văn mới vào để luyện shadowing thì không có
tệp nào sẵn. Máy chủ này giải quyết đúng chỗ đó:

    GET /_tts?text=<văn bản>     →  trả về mp3 giọng neural

Lần đầu gọi thì nó tổng hợp rồi lưu vào audio/tts/<băm>.mp3. Lần sau đọc lại
từ đĩa, không cần mạng. Nói cách khác máy chủ vừa là bộ đọc theo yêu cầu, vừa tự
đắp dần cái kho audio thu sẵn — càng dùng càng ít phải gọi mạng.

Chỉ lắng nghe trên 127.0.0.1 nên không máy nào khác trong mạng vào được.
"""

import argparse, asyncio, hashlib, http.server, json, os, re, socket, socketserver
import sys, threading, urllib.parse, webbrowser, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / 'audio' / 'tts'
MAX_CHARS = 600           # một lần đọc tối đa, tránh gọi mạng quá dài

# dùng lại đúng hàm băm của make_audio.py để hai bên chia sẻ cùng bộ cache
sys.path.insert(0, str(ROOT / 'tools'))
try:
    from make_audio import fnv1a, norm, VOICES
except Exception:                                     # chạy độc lập vẫn được
    def norm(s): return re.sub(r'\s+', ' ', str(s)).strip()
    def fnv1a(s):
        h = 0x811c9dc5
        for b in norm(s).encode('utf-8'):
            h ^= b; h = (h * 0x01000193) & 0xFFFFFFFF
        return '%08x' % h
    VOICES = {'ko-KR-SunHiNeural': 'nữ'}

try:
    import translate as TR
except Exception:
    TR = None

CFG = {'voice': 'ko-KR-SunHiNeural', 'rate': '-8%'}
_locks, _locks_guard = {}, threading.Lock()


def synth_to_file(text, dst, voice, rate):
    """Tổng hợp một câu và lưu ra tệp. Trả về None nếu ổn, hoặc chuỗi lỗi."""
    import edge_tts
    tmp = dst.with_suffix('.part-%d' % os.getpid())

    async def go():
        comm = edge_tts.Communicate(text, voice, rate=rate)
        await comm.save(str(tmp))

    try:
        asyncio.run(go())
        if tmp.stat().st_size < 300:
            raise RuntimeError('tệp rỗng')
        os.replace(tmp, dst)
        return None
    except Exception as e:
        if tmp.exists():
            try: tmp.unlink()
            except OSError: pass
        return str(e)


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)

    # bớt log rác, chỉ in các lần gọi TTS
    def log_message(self, fmt, *args):
        if '/_tts' in (self.path or ''):
            sys.stderr.write('  %s\n' % (fmt % args))

    def _send(self, code, body=b'', ctype='text/plain; charset=utf-8', extra=None):
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store' if code >= 400 else 'max-age=86400')
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        if body:
            self.wfile.write(body)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/_tts/ping':
            return self._send(200, b'ok', extra={'X-LangLab-Voice': CFG['voice']})
        if parsed.path == '/_tts':
            return self.do_tts(urllib.parse.parse_qs(parsed.query))
        if parsed.path == '/_translate/status':
            body = json.dumps(TR.status() if TR else {'ok': False, 'reason': 'no-module'})
            return self._send(200, body.encode(), 'application/json; charset=utf-8')
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != '/_translate':
            return self._send(404, b'not found')
        if not TR:
            return self._send(501, json.dumps({'error': 'no-module'}).encode(),
                              'application/json; charset=utf-8')
        try:
            n = int(self.headers.get('Content-Length') or 0)
            if n > 200000:
                return self._send(413, b'body qua lon')
            req = json.loads(self.rfile.read(n).decode('utf-8'))
            sents = [str(s) for s in (req.get('sentences') or [])][:120]
        except Exception as e:
            return self._send(400, json.dumps({'error': str(e)}).encode(),
                              'application/json; charset=utf-8')

        sys.stderr.write('  dịch %d câu...\n' % len(sents))
        got, err = TR.translate(sents, fnv1a)
        if err and not got:
            sys.stderr.write('  LỖI dịch: %s\n' % err)
        out = {'translations': {fnv1a(s): got.get(fnv1a(s), '') for s in sents if s.strip()}}
        if err:
            out['error'] = err
        body = json.dumps(out, ensure_ascii=False).encode('utf-8')
        return self._send(200, body, 'application/json; charset=utf-8')

    def do_tts(self, q):
        text = norm((q.get('text') or [''])[0])
        if not text:
            return self._send(400, 'thiếu tham số text'.encode())
        if len(text) > MAX_CHARS:
            return self._send(413, ('câu dài quá %d ký tự' % MAX_CHARS).encode())

        voice = (q.get('voice') or [CFG['voice']])[0]
        rate  = (q.get('rate')  or [CFG['rate']])[0]
        if voice not in VOICES:
            voice = CFG['voice']

        # cache theo băm của câu; giọng khác giọng mặc định thì cache riêng
        key = fnv1a(text) if voice == CFG['voice'] else \
              fnv1a(text) + '-' + hashlib.sha1(voice.encode()).hexdigest()[:6]
        dst = CACHE / (key + '.mp3')

        if not dst.exists():
            CACHE.mkdir(parents=True, exist_ok=True)
            with _locks_guard:
                lock = _locks.setdefault(key, threading.Lock())
            with lock:                                  # hai tab gọi cùng câu thì chỉ thu một lần
                if not dst.exists():
                    sys.stderr.write('  thu mới: %s\n' % text[:48])
                    err = synth_to_file(text, dst, voice, rate)
                    if err:
                        sys.stderr.write('  LỖI: %s\n' % err)
                        return self._send(502, ('không tổng hợp được: %s' % err).encode())

        data = dst.read_bytes()
        self._send(200, data, 'audio/mpeg', {'X-LangLab-Cache': 'disk'})


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def free_port(preferred=None):
    for p in ([preferred] if preferred else []) + [5500, 5173, 4321, 8321, 8765, 0]:
        if p is None:
            continue
        try:
            s = socket.socket()
            s.bind(('127.0.0.1', p))
            port = s.getsockname()[1]
            s.close()
            return port
        except OSError:
            continue
    raise SystemExit('Không tìm được cổng rảnh nào.')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--port', type=int)
    ap.add_argument('--voice', default='ko-KR-SunHiNeural')
    ap.add_argument('--rate', default='-8%')
    ap.add_argument('--no-browser', action='store_true')
    a = ap.parse_args()
    CFG['voice'], CFG['rate'] = a.voice, a.rate

    try:
        import edge_tts  # noqa
        tts_ok = True
    except ImportError:
        tts_ok = False

    port = free_port(a.port)
    url = 'http://127.0.0.1:%d/' % port
    have = len(list(CACHE.glob('*.mp3'))) if CACHE.exists() else 0

    print()
    print('=' * 58)
    print('  LangLab đang chạy tại  %s' % url)
    print('=' * 58)
    print('  Giọng đọc  : %s' % a.voice)
    print('  Cache      : %d tệp trong audio/tts/' % have)
    if tts_ok:
        print('  Đọc tự do  : BẬT — dán đoạn văn nào cũng đọc được,')
        print('               tệp mới tự lưu vào cache.')
    else:
        print('  Đọc tự do  : TẮT — thiếu thư viện. Chạy: pip install edge-tts')

    st = TR.status() if TR else {'ok': False, 'reason': 'no-module'}
    if st.get('ok'):
        print('  Dịch       : BẬT — %s / %s' % (st['provider'], st['model']))
    else:
        print('  Dịch       : TẮT — chưa có khoá API.')
        print('               Dán khoá vào tệp api-key.txt ở thư mục này.')
    print()
    print('  Nhấn Ctrl+C để dừng.')
    print()

    if not a.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()

    with Server(('127.0.0.1', port), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nĐã dừng.')


if __name__ == '__main__':
    main()
