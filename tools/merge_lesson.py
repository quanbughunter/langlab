#!/usr/bin/env python3
"""Ghép một tệp bài học mới vào js/course-fr.js hoặc js/course-es.js, rồi soát ngay.

    python tools/merge_lesson.py fr outputs/fr-a1-16.txt

Soát những gì:
  · cú pháp — nạp lại được bằng Node thì mới tính là ghép xong
  · đủ trường của mọi bài (ngữ pháp · từ vựng · cụm · hội thoại)
  · danh từ nào cũng phải ghi giống đực hay cái
  · KHÔNG từ nào lặp giữa các bài — đây là ràng buộc dễ vỡ nhất khi
    kho từ lên tới hàng nghìn, nên soát sau MỖI lần ghép chứ không
    để dồn tới cuối.

Có gì sai thì tệp gốc được trả lại nguyên trạng, không ghép nửa vời.
"""
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

CHECK_JS = r"""
const fs = require('fs'), vm = require('vm'), path = process.argv[2], id = process.argv[3];   /* argv[1] là chính tệp này */
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path, 'utf8') + '\n;this.C=' +
  (id === 'fr' ? 'COURSE_FR' : 'COURSE_ES') + ';', ctx, { filename: path });
const L = ctx.C.lessons, bad = [], dup = [], seen = {};
L.forEach(l => {
  const w = [];
  if (!l.level || !l.no || !l[id] || !l.vi || !l.skill) w.push('thiếu đầu bài');
  if (!Array.isArray(l.grammar) || l.grammar.length < 4) w.push('dưới 4 điểm ngữ pháp');
  (l.grammar || []).forEach(g => {
    if (!g.form || !g.vi || !g.note || !g.ex || !g.ex[id] || !g.ex.vi) w.push('mục ngữ pháp thiếu trường');
  });
  if (!Array.isArray(l.vocab) || l.vocab.length < 20) w.push('dưới 20 từ');
  (l.vocab || []).forEach(v => {
    if (!v[id] || !v.ipa || !v.vi || !v.pos) w.push('từ «' + (v[id] || '?') + '» thiếu trường');
    if (/^danh từ$/.test(v.pos || '') && !/^[mf]$/.test(v.g || '')) w.push('danh từ «' + v[id] + '» chưa ghi giống');
  });
  if (!Array.isArray(l.colloc) || l.colloc.length < 3) w.push('dưới 3 cụm');
  (l.colloc || []).forEach(c => { if (!c.p || !c.vi || !c.ex) w.push('cụm thiếu trường'); });
  if (!Array.isArray(l.dialogue) || l.dialogue.length < 6) w.push('dưới 6 lượt hội thoại');
  (l.dialogue || []).forEach(x => { if (!x.sp || !x[id] || !x.vi) w.push('lượt thoại thiếu trường'); });
  if (w.length) bad.push({ lv: l.level, no: l.no, why: Array.from(new Set(w)) });
  (l.vocab || []).forEach(v => {
    const k = String(v[id] || '').toLowerCase();
    if (!k) return;
    if (seen[k]) dup.push(k + ' (bài ' + seen[k] + ' và ' + l.level + '#' + l.no + ')');
    else seen[k] = l.level + '#' + l.no;
  });
});
const byLv = {};
L.forEach(l => byLv[l.level] = (byLv[l.level] || 0) + 1);
console.log(JSON.stringify({ n: L.length, byLv, words: Object.keys(seen).length, bad, dup }));
"""


def run_check(js_path: Path, lang: str):
    chk = ROOT / 'tools' / '.check_course.js'
    chk.write_text(CHECK_JS, encoding='utf-8')
    try:
        out = subprocess.run(['node', str(chk), str(js_path), lang],
                             capture_output=True, text=True, timeout=120)
    finally:
        chk.unlink(missing_ok=True)
    if out.returncode != 0:
        return None, (out.stderr or out.stdout).strip()
    try:
        return json.loads(out.stdout.strip().splitlines()[-1]), None
    except Exception as e:
        return None, 'không đọc được kết quả soát: %s\n%s' % (e, out.stdout[-800:])


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    lang, src = sys.argv[1], Path(sys.argv[2])
    if lang not in ('fr', 'es'):
        print('Tiếng phải là fr hoặc es'); return 2
    if not src.exists():
        print('Không thấy tệp %s' % src); return 2

    target = ROOT / 'js' / ('course-%s.js' % lang)
    before = target.read_text(encoding='utf-8')
    block = src.read_text(encoding='utf-8').strip().rstrip(',')

    i = before.rindex('\n  ]\n};')
    after = before[:i] + ',\n\n' + block + before[i:]
    target.write_text(after, encoding='utf-8')

    res, err = run_check(target, lang)
    if err or res is None:
        target.write_text(before, encoding='utf-8')
        print('✗ GHÉP HỎNG — đã trả lại nguyên trạng\n' + (err or ''))
        return 1
    if res['bad'] or res['dup']:
        target.write_text(before, encoding='utf-8')
        print('✗ DỮ LIỆU SAI — đã trả lại nguyên trạng')
        for b in res['bad'][:8]:
            print('   bài %s#%s: %s' % (b['lv'], b['no'], ' · '.join(b['why'])))
        for d in res['dup'][:12]:
            print('   từ lặp: %s' % d)
        if len(res['dup']) > 12:
            print('   … và %d từ lặp nữa' % (len(res['dup']) - 12))
        return 1

    lv = ' · '.join('%s %d bài' % (k.upper(), v) for k, v in sorted(res['byLv'].items()))
    print('✓ %s — %s · %d từ, không trùng' % (lang.upper(), lv, res['words']))
    return 0


if __name__ == '__main__':
    sys.exit(main())
