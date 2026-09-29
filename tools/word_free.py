#!/usr/bin/env python3
"""Hỏi xem những từ này đã dùng ở bài nào chưa, TRƯỚC khi chọn làm từ thay thế.

    python tools/word_free.py fr spectacle reporter combien préciser

Có tệp nháp đang chờ ghép thì đưa thêm vào cuối để soát cả nó:
    python tools/word_free.py fr --draft outputs/fr-a1-31.txt mot1 mot2
"""
import re, subprocess, sys, tempfile
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent

JS = r"""
const fs=require('fs'),vm=require('vm');
const ctx={console};ctx.window=ctx;vm.createContext(ctx);
const id=process.argv[3];
vm.runInContext(fs.readFileSync(process.argv[2],'utf8')
  +'\n;this.C='+(id==='fr'?'COURSE_FR':'COURSE_ES')+';',ctx);
const m={};
ctx.C.lessons.forEach(l=>(l.vocab||[]).forEach(v=>{
  m[String(v[id]||'').toLowerCase()] = l.level+'#'+l.no;
}));
console.log(JSON.stringify(m));
"""

def main():
    if len(sys.argv) < 3:
        print(__doc__); return 2
    lang = sys.argv[1]
    args = sys.argv[2:]
    draft = None
    if args and args[0] == '--draft':
        draft = Path(args[1]); args = args[2:]
    course = ROOT / 'js' / ('course-%s.js' % lang)
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as f:
        f.write(JS); tmp = f.name
    out = subprocess.run(['node', tmp, str(course), lang], capture_output=True, text=True)
    Path(tmp).unlink(missing_ok=True)
    if out.returncode != 0:
        print(out.stderr[-500:]); return 1
    import json
    used = json.loads(out.stdout.strip().splitlines()[-1])
    if draft and draft.exists():
        for w in re.findall(r"\{\s*%s\s*:\s*'([^']+)'" % lang, draft.read_text(encoding='utf-8')):
            used.setdefault(w.lower(), 'BẢN NHÁP')
    for w in args:
        k = w.lower()
        print('%-18s %s' % (w, ('đã dùng ở ' + used[k]) if k in used else '✓ còn trống'))
    return 0

if __name__ == '__main__':
    sys.exit(main())
