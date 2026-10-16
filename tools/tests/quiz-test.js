/* ============================================================
   LangLab — MÀN BÀI TẬP: chống học vẹt và không mất bài
   ------------------------------------------------------------
   Năm chỗ người dùng báo thiếu, kiểm cho cả bốn thứ tiếng có màn
   bài tập riêng (Anh, Trung, Pháp, Tây Ban Nha):

     1. xáo thứ tự câu VÀ thứ tự lựa chọn mỗi lượt — giữ nguyên thì
        làm vài lượt là nhớ «đáp án ở nút thứ hai», thành học vẹt;
     2. quay lại giữa chừng thì HỎI làm tiếp hay làm lại, chứ không
        lẳng lặng thả vào câu đang dở;
     3. có nút làm lại từ đầu ngay lúc đang làm;
     4. chọn được đề khác / dạng khác mà không phải làm hết lượt;
     5. vuốt cạnh lùi về CÂU TRƯỚC, không thoát cả màn.

   Mã app nằm trong IIFE nên bộ này đi bằng đúng đường người dùng
   đi — bấm nút thật, đọc màn hình thật — và chỉ dùng mấy móc mà
   app chủ động phơi ra (window.__qz, window.__lat).

   Chạy từ thư mục gốc repo: node tools/tests/quiz-test.js
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
let pass = 0, fail = 0;
const check = (name, fn) => {
  let r; try { r = fn(); } catch(e){ r = e.message; }
  if (r === true){ pass++; console.log('ok   ' + name); }
  else { fail++; console.log('FAIL ' + name + ' — ' + r); }
};

const vc = new VirtualConsole();
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc,
  url:'http://localhost:9999/', beforeParse(w){
    w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
    w.Element.prototype.getTotalLength = () => 60;
    w.Element.prototype.getPointAtLength = () => ({ x:20, y:20 });
    w.Element.prototype.scrollIntoView = function(){};
    w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
    w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
    w.scrollTo = () => {};
    w.confirm = () => true;
    w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
    w.fetch = () => Promise.reject(new Error('x'));
    w.Audio = function(){
      const h = {};
      return { preload:'', src:'', playbackRate:1, pause(){}, play(){ (this.onerror || function(){})(); (h.error || []).forEach(f => f()); },
        removeAttribute(){}, load(){}, addEventListener(k, f){ (h[k] = h[k] || []).push(f); }, removeEventListener(){} };
    };
    w.speechSynthesis = { getVoices:() => [], addEventListener(){}, removeEventListener(){}, cancel(){}, speak(){} };
    w.SpeechSynthesisUtterance = function(t){ this.text = t; };
  }});
const win = dom.window, doc = win.document;

const click = s => { const el = typeof s === 'string' ? doc.querySelector(s) : s;
  if (!el) throw new Error('không thấy nút ' + s);
  el.dispatchEvent(new win.MouseEvent('click', { bubbles:true })); };
const has = s => !!doc.querySelector(s);
const txt = () => doc.getElementById('view').textContent;
const QZ = () => win.__qz;

setTimeout(() => {
  /* ---------------- 1. xáo lựa chọn (tiếng Anh) ----------------
     EN_EXERCISES là mảng dùng chung, mỗi câu có sẵn o và c. Dùng thẳng mảng ấy
     thì vị trí đáp án không bao giờ đổi — làm vài lượt là thuộc vị trí. */
  check('app phơi ra móc cho bộ kiểm thử màn Bài tập', () =>
    (QZ() && typeof QZ().enStart === 'function') || 'không thấy window.__qz');

  check('tiếng Anh — ngân hàng câu hỏi KHÔNG bị lượt luyện sửa vào', () => {
    const bank = QZ().enBank();
    if (!bank || !bank.length) return 'không với tới được ngân hàng câu hỏi';
    const q0 = bank.find(x => Array.isArray(x.o) && x.o.length >= 4);
    if (!q0) return 'không tìm được câu nhiều lựa chọn để thử';
    const truoc = q0.o.join('|') + '#' + q0.c;
    for (let i = 0; i < 10; i++) QZ().enStart();
    return (q0.o.join('|') + '#' + q0.c) === truoc || 'câu trong ngân hàng bị sửa';
  });

  check('tiếng Anh — 20 lượt thì vị trí đáp án phải đổi, không đứng yên', () => {
    const thay = {};
    for (let i = 0; i < 20; i++){
      QZ().enStart();
      const Q = QZ().st('en');
      const q = Q.qs.find(x => Array.isArray(x.o) && x.o.length >= 4);
      if (q) thay[q.c] = 1;
    }
    const n = Object.keys(thay).length;
    return n >= 2 || ('đáp án luôn nằm ở đúng ' + n + ' vị trí — vẫn học vẹt được');
  });

  check('phép xáo lựa chọn: giữ nguyên bộ lựa chọn và giữ nguyên ĐÁP ÁN', () => {
    const o = ['alpha', 'beta', 'gamma', 'delta'];
    const viTri = {};
    for (let i = 0; i < 60; i++){
      const r = QZ().shuffleOpts(o, 1);                       // đáp án đúng là «beta»
      if (r.o.slice().sort().join('|') !== o.slice().sort().join('|'))
        return 'bộ lựa chọn bị đổi: ' + r.o.join(',');
      if (r.o[r.c] !== 'beta') return 'đáp án trượt sang «' + r.o[r.c] + '»';
      viTri[r.c] = 1;
    }
    return Object.keys(viTri).length >= 3 || 'xáo mà đáp án chỉ rơi vào ' + Object.keys(viTri).length + ' vị trí';
  });

  check('tiếng Anh — câu sinh ra vẫn là một câu có thật trong ngân hàng', () => {
    /* Không tra câu gốc bằng lời đề: ngân hàng có nhiều câu dùng chung một lời
       đề chung chung («Từ nào KHÔNG cùng nhóm?»), lại có nhiều câu khác nhau
       cùng bộ lựa chọn (a / an / the / —). Nên điều kiện đúng là: PHẢI CÓ một
       câu gốc vừa khớp bộ lựa chọn vừa khớp đáp án. */
    const bank = QZ().enBank();
    const key = o => o.slice().sort().join('\u0001');
    const nhom = {};
    bank.forEach(x => { if (Array.isArray(x.o)) (nhom[key(x.o)] = nhom[key(x.o)] || []).push(x.o[x.c]); });
    for (let k = 0; k < 8; k++){
      QZ().enStart();
      for (const q of QZ().st('en').qs){
        if (!Array.isArray(q.o)) continue;
        const dapAn = nhom[key(q.o)];
        if (!dapAn) return 'câu «' + q.q + '» có bộ lựa chọn không khớp câu gốc nào';
        if (dapAn.indexOf(q.o[q.c]) < 0)
          return 'câu «' + q.q + '»: đáp án «' + q.o[q.c] + '» không phải đáp án của câu gốc nào';
      }
    }
    return true;
  });

  check('tiếng Pháp / Tây Ban Nha — hai lượt ra hai đề khác nhau', () => {
    const a = win.__lat.quiz('fr', 'all', 'all', 10, 12345).map(q => q.q).join('|');
    const b = win.__lat.quiz('fr', 'all', 'all', 10, 99999).map(q => q.q).join('|');
    return a !== b || 'hai lượt ra y hệt nhau';
  });

  /* ---------------- 2–4. hỏi làm tiếp · làm lại · đổi đề ---------------- */
  check('tiếng Anh — vào màn bài tập và bắt đầu được một lượt', () => {
    click('[data-go="en_quiz"]');
    if (!has('[data-en-quizstart]')) return 'không thấy nút bắt đầu';
    click('[data-en-quizstart]');
    return (has('[data-en-quiznav]') || has('[data-en-quizsubmit]')) || 'không vào được câu hỏi';
  });

  check('tiếng Anh — đang làm thì có sẵn nút làm lại và nút chọn đề khác', () =>
    (has('.qz-tools [data-en-quizstart]') && has('.qz-tools [data-en-quizexit]'))
    || (doc.querySelector('.qz-tools') ? 'có thanh công cụ nhưng thiếu nút' : 'không có thanh công cụ nào'));

  check('tiếng Anh — bỏ sang phần khác rồi quay lại thì HỎI, không thả thẳng vào câu dở', () => {
    click('[data-en-quiznav="1"]');                 // sang câu 2
    click('[data-en-quiznav="1"]');                 // sang câu 3
    click('[data-go="en_dict"]');
    click('[data-go="en_quiz"]');
    if (!has('[data-en-quizresume]')) return 'không hỏi gì, vào thẳng câu đang dở';
    return /câu 3/i.test(txt()) || ('thẻ hỏi không nói đúng câu đang dở: ' + txt().slice(0, 120));
  });

  check('tiếng Anh — chọn «Làm tiếp» thì về đúng câu đang dở', () => {
    click('[data-en-quizresume]');
    return /Câu 3\//.test(txt()) || ('vào câu khác: ' + txt().slice(0, 80));
  });

  check('tiếng Anh — «Làm lại từ đầu» thì về câu 1 và xáo ra đề mới', () => {
    const truoc = QZ().st('en').qs.map(q => q.q).join('|');
    click('.qz-tools [data-en-quizstart]');
    const Q = QZ().st('en');
    if (Q.i !== 0) return 'không về câu 1';
    if (Q.picked.filter(x => x != null).length) return 'còn giữ đáp án của lượt cũ';
    return Q.qs.map(q => q.q).join('|') !== truoc || 'đề y hệt lượt trước';
  });

  check('tiếng Anh — «Chọn đề khác» đưa về màn lọc cấp độ và dạng bài', () => {
    click('.qz-tools [data-en-quizexit]');
    return (has('[data-en-quizlevel]') && has('[data-en-quiztype]')) || 'không về được màn lọc';
  });

  /* ---------------- tiếng Trung ---------------- */
  check('tiếng Trung — chọn được dạng bài, không còn trộn ngẫu nhiên cả ba', () => {
    click('[data-go="zh_quiz"]');
    if (!has('[data-zh-qz-type]')) return 'không có chỗ chọn dạng bài';
    if (!has('[data-zh-qz-type="pinyin"]')) return 'thiếu dạng «chọn pinyin»';
    click('[data-zh-qz-type="pinyin"]');
    click('[data-zh-qz-start]');
    const Q = QZ().st('zh');
    return Q.qs.every(q => /pinyin/.test(q.prompt)) || 'vẫn lẫn dạng khác vào';
  });

  check('tiếng Trung — đang làm thì có nút làm lại và nút chọn đề khác', () =>
    (has('.qz-tools [data-zh-qz-start]') && has('.qz-tools [data-zh-qz-exit]')) || 'thiếu thanh công cụ');

  check('tiếng Trung — quay lại giữa chừng thì hỏi làm tiếp hay làm lại', () => {
    const Q = QZ().st('zh');
    Q.i = 2;
    click('[data-go="zh_dict"]');
    click('[data-go="zh_quiz"]');
    return has('[data-zh-qz-resume]') || 'vào thẳng câu đang dở';
  });

  check('tiếng Trung — «Chọn đề khác» về lại màn chọn cấp và dạng', () => {
    click('[data-zh-qz-exit]');
    return (has('[data-zh-qz-type]') && has('[data-zh-qz-start]')) || 'không về được màn chọn';
  });

  /* ---------------- 5. vuốt cạnh lùi về câu trước ---------------- */
  check('lịch sử điều hướng mang theo số thứ tự câu đang làm', () => {
    click('[data-go="en_quiz"]');
    if (has('[data-en-quizstart]')) click('[data-en-quizstart]');
    const d0 = QZ().desc();
    if (!('qz' in d0)) return 'mô tả lịch sử không có khoá qz';
    click('[data-en-quiznav="1"]');
    const d1 = QZ().desc();
    return d0.qz !== d1.qz || ('đổi câu mà qz vẫn là ' + d1.qz + ' — vuốt back sẽ thoát cả màn');
  });

  check('lùi một bước trong lịch sử = lùi một CÂU, không thoát màn', () => {
    click('[data-en-quiznav="1"]');                  // đang ở câu 3
    const d = JSON.parse(JSON.stringify(QZ().desc()));
    d.qz = 0;                                        // lùi về câu 1
    QZ().apply(d);
    if (QZ().st('en') == null) return 'lượt luyện bị xoá mất';
    const v = doc.documentElement.getAttribute('data-lang');
    if (!/Câu 1\//.test(txt())) return 'không về câu 1: ' + txt().slice(0, 80);
    return v === 'en' || 'thoát mất khỏi màn tiếng Anh';
  });

  check('Pháp / Tây Ban Nha — lùi một câu nghĩa là bỏ lựa chọn vừa bấm', () => {
    click('[data-go="fr_quiz"]');
    if (has('[data-lat-qzstart]')) click('[data-lat-qzstart]');
    const Q = QZ().st('fr');
    if (!Q || !Q.qs.length) return 'không bắt đầu được lượt luyện';
    click('[data-lat-qzpick]');                      // bấm đáp án câu 1
    click('[data-lat-qzpick]');                      // bấm đáp án câu 2
    const d = JSON.parse(JSON.stringify(QZ().desc()));
    if (d.qz !== 2) return 'vị trí ghi vào lịch sử là ' + d.qz + ' chứ không phải 2';
    d.qz = 1;
    QZ().apply(d);
    return QZ().st('fr').picked.length === 1 || 'không bỏ được lựa chọn cuối';
  });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 1400);
