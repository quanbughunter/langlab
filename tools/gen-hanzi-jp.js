#!/usr/bin/env node
/*
 * Sinh dữ liệu nét cho Tập viết tiếng Nhật: hanzi-jp/<codepoint-hex>.json
 *   node tools/gen-hanzi-jp.js [đường-dẫn @k1low/hanzi-writer-data-jp]
 * - Toàn bộ hiragana/katakana (kể cả chữ nhỏ, dakuten) + mọi kanji trong js/course-ja.js và js/kanji-ja.js.
 * - Nguồn: gói npm @k1low/hanzi-writer-data-jp (AnimCJK / Make Me a Hanzi; giấy phép LGPL + Arphic PL — giữ ghi công ở trang Giới thiệu).
 */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'hanzi-jp');
const cands = [process.argv[2], path.join(ROOT, 'node_modules/@k1low/hanzi-writer-data-jp'), '/tmp/jp/node_modules/@k1low/hanzi-writer-data-jp'].filter(Boolean);
const SRC = cands.find(p => p && fs.existsSync(path.join(p, 'あ.json')));
if (!SRC){ console.error('Không tìm thấy @k1low/hanzi-writer-data-jp. Cài: npm i @k1low/hanzi-writer-data-jp'); process.exit(1); }
const chars = new Set();
for (let c = 0x3041; c <= 0x3096; c++) chars.add(String.fromCharCode(c));   // hiragana
for (let c = 0x30A1; c <= 0x30FA; c++) chars.add(String.fromCharCode(c));   // katakana
chars.add('ー');
const add = s => { for (const ch of String(s || '')) if (/[一-鿿々]/.test(ch)) chars.add(ch); };
const C = require(path.join(ROOT, 'js/course-ja.js'));
(C.COURSE_JA.lessons || []).forEach(l => { (l.vocab || []).forEach(w => add(w.jp)); (l.grammar || []).forEach(g => { add(g.form); if (g.ex) add(g.ex.jp); }); (l.dialogue || []).forEach(d => add(d.jp)); (l.kanji || []).forEach(add); });
try { const K = require(path.join(ROOT, 'js/kanji-ja.js')); (K.KANJI_JA || []).forEach(k => { add(k.k); (k.ex || []).forEach(e => add(e[0])); }); } catch(e){}
fs.mkdirSync(OUT, { recursive:true });
let ok = 0, miss = [];
for (const ch of chars){
  const src = path.join(SRC, ch + '.json');
  if (!fs.existsSync(src)){ miss.push(ch); continue; }
  const d = JSON.parse(fs.readFileSync(src, 'utf8'));
  fs.writeFileSync(path.join(OUT, ch.codePointAt(0).toString(16) + '.json'), JSON.stringify({ strokes:d.strokes, medians:d.medians }));
  ok++;
}
console.log(`hanzi-jp: ${ok} tệp, thiếu ${miss.length}${miss.length ? ': ' + miss.join('') : ''}`);
