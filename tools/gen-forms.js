/* ============================================================
   LangLab — XUẤT MỌI DẠNG BIẾN ĐỔI ĐỂ THU AUDIO
   ------------------------------------------------------------
   Vì sao cần: bảng chia giờ bấm được vào từng dạng, và bấm thì dẫn
   tới mục từ có nút nghe. Nhưng kho audio thu sẵn chỉ có câu và từ
   NGUYÊN MẪU, nên nghe một dạng đã chia thì rơi xuống giọng máy.

   Mà chính dạng đã chia mới là thứ cần nghe nhất ở tiếng Tây Ban Nha:
   lla·MAR, LLA·mas, lla·MÉ, lla·ma·RÍ·a·mos — cùng một động từ mà
   trọng âm nhảy bốn chỗ khác nhau. Giọng máy đọc được nhưng không
   bằng giọng thu sẵn.

   Tệp này liệt kê mọi dạng ra JSON để tools/make_audio.py thu. Danh
   sách sinh từ chính bộ hình thái của app, nên không bao giờ lệch
   với thứ hiện trên màn hình.

   Chạy:  node tools/gen-forms.js
   Ra:    tools/forms-audio.json
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const M = require(path.join(ROOT, 'js', 'morph-lat.js'));

/* Rút mục từ ra khỏi tệp dữ liệu: cần chữ và TỪ LOẠI, vì từ loại quyết định
   sinh ra dạng nào — danh từ thì số nhiều, động từ thì cả bảng chia. */
function entries(id, files){
  const src = files.map(f => {
    const p = path.join(ROOT, 'js', f);
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
  }).join('\n');
  const re = new RegExp("\\{ *" + id + ":'((?:[^'\\\\]|\\\\.)*)', *ipa:'(?:[^'\\\\]|\\\\.)*', *vi:'(?:[^'\\\\]|\\\\.)*', *pos:'((?:[^'\\\\]|\\\\.)*)'", 'g');
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push([m[1].replace(/\\'/g, "'"), m[2]]);
  return out;
}

const LANGS = {
  fr: ['words-core-fr.js', 'words-core2-fr.js', 'course-fr.js'],
  es: ['words-core-es.js', 'words-core2-es.js', 'course-es.js']
};

/* Thứ tự thu quan trọng: thu hết 32 nghìn tệp mất nhiều giờ, mà lệnh thu thì
   dừng lúc nào cũng được và lần sau chạy tiếp. Nên xếp phần ĐÁNG GIÁ NHẤT lên
   trước, để dừng giữa chừng vẫn dùng được ngay:
     1. động từ — chỗ duy nhất trọng âm nhảy chỗ, và là bảng người học mở nhiều
        nhất;
     2. tính từ — hợp giống số, bốn dạng mỗi từ;
     3. còn lại — danh từ số nhiều và các dạng lặt vặt. */
function rank(pos){
  if (/động từ/.test(pos)) return 0;
  if (/tính từ/.test(pos)) return 1;
  return 2;
}

const result = {};
for (const [id, files] of Object.entries(LANGS)){
  const ws = entries(id, files);
  const best = new Map();          // dạng → hạng tốt nhất từng gặp
  let verbs = 0;
  for (const [w, pos] of ws){
    if (/động từ/.test(pos)) verbs++;
    const r = rank(pos);
    let f = [];
    try { f = M.forms(id, w, pos); } catch(e){}
    for (const x of f){
      const t = String(x || '').trim();
      /* Bỏ dạng một chữ và dạng rỗng: không có gì để nghe. */
      if (t.length < 2) continue;
      if (!best.has(t) || best.get(t) > r) best.set(t, r);
    }
  }
  result[id] = [...best.entries()]
    .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0], id))
    .map(x => x[0]);
  const nv = [...best.values()].filter(r => r === 0).length;
  const na = [...best.values()].filter(r => r === 1).length;
  console.log(id + ': ' + ws.length + ' mục từ (' + verbs + ' động từ) → '
    + result[id].length + ' dạng cần thu'
    + '  [động từ ' + nv + ' · tính từ ' + na + ' · khác ' + (result[id].length - nv - na) + ']');
}

const dst = path.join(ROOT, 'tools', 'forms-audio.json');
fs.writeFileSync(dst, JSON.stringify(result));
const kb = Math.round(fs.statSync(dst).size / 1024);
console.log('\n→ ' + dst + ' (' + kb + ' KB)');
const total = Object.values(result).reduce((a, b) => a + b.length, 0);
console.log('Tổng ' + total + ' dạng. Thu bằng:');
console.log('   python tools/make_audio.py --lang fr es --only forms');
