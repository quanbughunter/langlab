#!/usr/bin/env node
/*
 * Sinh tệp dữ liệu nét theo từng chữ cho Tập viết tiếng Trung.
 *
 *   node tools/gen-hanzi.js [đường-dẫn-hanzi-writer-data]
 *
 * - Quét mọi chữ Hán xuất hiện trong js/course-zh.js (từ vựng, ví dụ nét, bộ thủ).
 * - Với mỗi chữ, chép {strokes, medians} từ gói npm `hanzi-writer-data`
 *   (dữ liệu Make Me a Hanzi, giấy phép Arphic Public License) vào hanzi/<codepoint-hex>.json.
 * - app.js (zhLoadChar) ưu tiên bundle HANZI_DATA (HSK1–2), không có thì fetch tệp này theo nhu cầu.
 *
 * Mặc định tìm gói ở ./node_modules/hanzi-writer-data hoặc ../node_modules/hanzi-writer-data.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'hanzi');
const cands = [process.argv[2], path.join(ROOT, 'node_modules/hanzi-writer-data'), path.join(ROOT, '..', 'node_modules/hanzi-writer-data')].filter(Boolean);
const SRC = cands.find(p => fs.existsSync(path.join(p, '一.json')));
if (!SRC){ console.error('Không tìm thấy hanzi-writer-data. Cài: npm i hanzi-writer-data  rồi chạy lại.'); process.exit(1); }

const C = require(path.join(ROOT, 'js/course-zh.js'));
const chars = new Set();
const add = s => { for (const ch of String(s || '')) if (/[一-鿿]/.test(ch)) chars.add(ch); };
(C.COURSE_ZH.lessons || []).forEach(l => {
  (l.vocab || []).forEach(w => add(w.zh));
  (l.grammar || []).forEach(g => { add(g.form); if (g.ex) add(g.ex.zh); });
  (l.dialogue || []).forEach(d => add(d.zh));
});
(C.STROKES_ZH || []).forEach(s => add(s.ex));
(C.RADICALS_ZH || []).forEach(r => { add(r.r); add(r.ex); });

fs.mkdirSync(OUT, { recursive: true });
let ok = 0, miss = [], skipped = 0;
for (const ch of chars){
  const src = path.join(SRC, ch + '.json');
  if (!fs.existsSync(src)){ miss.push(ch); continue; }
  const d = JSON.parse(fs.readFileSync(src, 'utf8'));
  const dst = path.join(OUT, ch.codePointAt(0).toString(16) + '.json');
  const body = JSON.stringify({ strokes: d.strokes, medians: d.medians });
  if (fs.existsSync(dst) && fs.readFileSync(dst, 'utf8') === body){ skipped++; continue; }
  fs.writeFileSync(dst, body);
  ok++;
}
console.log(`hanzi/: ${chars.size} chữ · ghi mới ${ok} · giữ nguyên ${skipped} · thiếu dữ liệu ${miss.length}${miss.length ? ' → ' + miss.join('') : ''}`);
