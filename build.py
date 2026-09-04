#!/usr/bin/env python3
"""
Gộp toàn bộ LangLab thành một tệp HTML duy nhất.

    python3 build.py            -> dist/langlab.html      (mở trực tiếp bằng trình duyệt)
    python3 build.py --artifact -> dist/artifact.html     (bản không có thẻ <html>/<head>,
                                                           dùng để publish làm Artifact)

Bản gộp không cần server, không cần build tool — copy đi đâu cũng chạy.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).parent
DIST = ROOT / "dist"
DIST.mkdir(exist_ok=True)

html = (ROOT / "index.html").read_text(encoding="utf-8")

def read(p):
    return (ROOT / p).read_text(encoding="utf-8")

# nhúng CSS
html = html.replace(
    '<link rel="stylesheet" href="css/langlab.css">',
    "<style>\n" + read("css/langlab.css") + "\n</style>"
)

# nhúng JS theo đúng thứ tự
for src in ("js/strokes.js", "js/course-ko.js", "js/vocab-common.js", "js/audio-ko.js", "js/tts.js", "js/config.js", "js/translate.js",
            "js/speech.js", "js/words.js", "js/app.js"):
    html = html.replace(
        f'<script src="{src}"></script>',
        "<script>\n" + read(src) + "\n</script>"
    )

full = DIST / "langlab.html"
full.write_text(html, encoding="utf-8")
print("→", full, f"({len(html)//1024} KB)")

if "--artifact" in sys.argv:
    # Artifact tự bọc <!doctype>/<html>/<head>/<body>, nên chỉ giữ phần ruột
    body = re.search(r"<body>(.*)</body>", html, re.S).group(1)
    head = ""
    m = re.search(r"<title>(.*?)</title>", html, re.S)
    if m:
        head += f"<title>{m.group(1)}</title>\n"
    for link in re.findall(r'<link rel="(?:preconnect|stylesheet)"[^>]*>', html):
        head += link + "\n"
    head += re.search(r"<style>.*?</style>", html, re.S).group(0) + "\n"
    art = DIST / "artifact.html"
    art.write_text(head + body, encoding="utf-8")
    print("→", art, f"({len(head+body)//1024} KB)")
