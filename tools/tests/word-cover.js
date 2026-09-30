/* ============================================================
   LangLab — ĐỘ PHỦ TRA TỪ TRONG CÂU VÍ DỤ, CẢ BẢY TIẾNG
   ------------------------------------------------------------
   Vì sao có bộ này: từ điển điện tử thì bấm vào chữ nào cũng phải
   tra được chữ ấy. Trước đây không ai đo, nên tiếng Pháp và Tây Ban
   Nha chỉ tra được quá nửa số từ trong câu ví dụ mà không ai biết —
   người học bấm vào «revisé» thì không có gì xảy ra, và tưởng app
   hỏng.

   Cách đo: lấy ĐÚNG bộ tách từ mà app dùng để sinh chữ bấm được,
   chạy trên toàn bộ câu ví dụ của khoá và bài đọc, rồi đếm xem bao
   nhiêu lượt bấm ra được mục từ. Đo bằng chính đường mà người học
   đi, nên con số không nói dối được.

   Ngưỡng dưới đây là mức đã đạt được; hạ xuống là có hồi quy.

   Chạy từ thư mục gốc repo: node tools/tests/word-cover.js
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const vc = new VirtualConsole();
const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc, url:'http://localhost:9999/', beforeParse(w){
  w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
  w.Element.prototype.scrollIntoView = function(){};
  w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
  w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
  w.scrollTo = () => {};
  w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
  w.fetch = () => Promise.reject(new Error('x'));
  w.speechSynthesis = { getVoices:() => [], addEventListener(){}, removeEventListener(){}, cancel(){}, speak(){} };
  w.SpeechSynthesisUtterance = function(t){ this.text = t; };
}});
const win = dom.window;
let pass = 0, fail = 0;
const check = (name, fn) => {
  let r; try { r = fn(); } catch(e){ r = e.message; }
  if (r === true){ pass++; console.log('ok   ' + name); }
  else { fail++; console.log('FAIL ' + name + ' — ' + r); }
};

/* Ngưỡng tối thiểu — đặt đúng mức ĐÃ ĐẠT, để lần sau tụt xuống là biết ngay.
   Bốn tiếng đòi tròn 100%: Pháp, Tây Ban Nha, Anh và Trung. Ba tiếng còn lại
   chưa tròn vì lí do khác nhau, và khác nhau thật chứ không phải cùng một
   thứ chưa làm xong:
     · Nga  — còn tên riêng và dạng biến cách của từ ngoài khoá;
     · Nhật — còn từ mượn viết bằng katakana và tên riêng ghép;
     · Hàn  — còn đuôi ngữ pháp bậc cao (…을지언정, …노라면) và tên riêng. */
const MIN = { fr:1.00, es:1.00, en:1.00, zh:1.00, ru:0.93, ja:0.95, ko:0.93 };

setTimeout(() => {
  const R = win.eval('typeof READINGS !== "undefined" ? READINGS : []');
  const ZH = win.__zhDict, RU = win.__ruDict, JA = win.__jaDict, EN = win.__en, Words = win.Words;
  const jaKanjiSet = new Set(win.eval('typeof KANJI_JA !== "undefined" ? KANJI_JA.map(k => k.k) : []'));

  /* Câu ví dụ của một ngôn ngữ: câu của điểm ngữ pháp, câu của cụm từ, lượt
     hội thoại, cộng thân bài đọc. Đúng những chỗ người học bấm vào. */
  function sentences(id, courseVar, key, courseOnly){
    const out = [];
    const C = win.eval('typeof ' + courseVar + ' !== "undefined" ? ' + courseVar + ' : null');
    const lessons = C ? (C.lessons || C) : [];
    lessons.forEach(l => {
      (l.grammar  || []).forEach(g => { if (g.ex) out.push(g.ex[key] || g.ex.text || ''); });
      (l.colloc   || []).forEach(p => { if (p.p) out.push(p.p); if (p.ex) out.push(typeof p.ex === 'string' ? p.ex : (p.ex[key] || '')); });
      (l.dialogue || []).forEach(d => out.push(d[key] || ''));
    });
    if (courseOnly) return out.filter(Boolean);
    R.filter(r => r.lang === id).forEach(r => (r.text || []).forEach(t => out.push(t)));
    return out.filter(Boolean);
  }

  /* Bộ tách từ THẬT của từng ngôn ngữ, cùng cái thuộc tính mà nó gắn vào chữ
     bấm được. Không tự viết lại bộ tách nào — đo bằng chính cái app dùng. */
  const TOK = {
    fr: { f: t => win.__lat.tokens(t, 'fr'), ok:'data-latw', no:'data-latwx' },
    es: { f: t => win.__lat.tokens(t, 'es'), ok:'data-latw', no:'data-latwx' },
    zh: { f: t => ZH.tokens(t),              ok:'data-zc',   test: w => !!ZH.lookup[w] },
    ru: { f: t => RU.tokens(t),              ok:'data-ruw',  test: w => RU.lemmatize(w).length > 0 },
    /* Chữ Hán lẻ không có mục từ riêng thì app mở thẳng TRANG KANJI — âm On/Kun,
       Hán–Việt, nghĩa, thứ tự nét. Đó là đích đến thật và hữu ích, nên phải
       tính là tra được. Không tính thì phép đo báo sai chỗ app vốn làm đúng. */
    ja: { f: t => JA.tokens(t),              ok:'data-jaw',
          test: w => JA.lemmatize(w).length > 0
                  || ([...w].length === 1 && jaKanjiSet.has(w)) },
    en: { f: t => EN.tokens(t),              ok:'data-en-word',
          test: w => !!EN.lookup[String(w).toLowerCase()] || !!EN.lookup[String(EN.lemma(String(w).toLowerCase()) || '')] },
    ko: { f: t => Words.mark(t),             ok:'data-kw',   test: w => !!Words.analyze(w).hit }
  };
  const SRC = {
    fr: ['COURSE_FR','fr'], es: ['COURSE_ES','es'], en: ['COURSE_EN','en'],
    zh: ['COURSE_ZH','zh'], ru: ['COURSE_RU','ru'], ja: ['COURSE_JA','jp'],
    ko: ['COURSE_KO','ko']
  };
  const grab = (h, attr) => {
    const out = [], re = new RegExp(attr + '="([^"]*)"', 'g');
    let m; while ((m = re.exec(h))) out.push(m[1]
      .replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"'));
    return out;
  };

  /* Câu trong khoá và thân bài đọc đôi khi đi qua HAI bộ tách khác nhau —
     tiếng Nhật là vậy: câu trong khoá đã có sẵn dấu cách và ruby nên tách theo
     dấu cách, còn bài đọc là văn bản liền nên phải tự đoán ranh giới. Đo bằng
     một bộ cho cả hai thì ra con số của một màn hình không tồn tại. */
  const LESSON_TOK = { ja: t => JA.lessonTokens(t) };

  const report = [];
  for (const id of Object.keys(MIN)){
    const T = TOK[id], S = SRC[id];
    let good = 0, bad = 0;
    const miss = new Map();
    const lessonN = sentences(id, S[0], S[1], true).length;
    let n = 0;
    for (const line of sentences(id, S[0], S[1])){
      const fn = (n++ < lessonN && LESSON_TOK[id]) ? LESSON_TOK[id] : T.f;
      let h; try { h = fn(line); } catch(e){ continue; }
      if (T.no){
        /* Tiếng Pháp và Tây Ban Nha tự đánh dấu chữ chưa tra được, nên đếm
           thẳng hai loại thẻ. */
        good += grab(h, T.ok).length;
        grab(h, T.no).forEach(w => { bad++; miss.set(w, (miss.get(w) || 0) + 1); });
      } else {
        grab(h, T.ok).forEach(w => {
          let ok = false; try { ok = !!T.test(w); } catch(e){}
          if (ok) good++; else { bad++; miss.set(w, (miss.get(w) || 0) + 1); }
        });
      }
    }
    const tot = good + bad, rate = tot ? good / tot : 1;
    report.push([id, rate, good, tot, miss]);
    check(id + ' — bấm vào từ trong câu ví dụ thì tra được ≥ '
      + Math.round(MIN[id] * 100) + '% (' + good + '/' + tot + ' = ' + (rate * 100).toFixed(1) + '%)', () => {
      if (rate < MIN[id]){
        const top = [...miss.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
        return 'thiếu ' + miss.size + ' từ · nhiều nhất: ' + top.map(x => x[0] + '·' + x[1]).join(' ');
      }
      return true;
    });
  }

  /* Ghi danh sách thiếu ra tệp để soi và sửa. Không phải phần của phép thử,
     chỉ là cái cân đặt sẵn cạnh bàn làm việc. */
  try {
    const dump = {};
    report.forEach(([id, r, g, t, miss]) => {
      dump[id] = [...miss.entries()].sort((a, b) => b[1] - a[1]);
    });
    if (process.env.COVER_DUMP) fs.writeFileSync(process.env.COVER_DUMP, JSON.stringify(dump));
  } catch(e){}

  console.log('\nBảng độ phủ');
  report.forEach(([id, rate, good, tot, miss]) => console.log(
    '  ' + id.toUpperCase().padEnd(3) + (rate * 100).toFixed(1).padStart(6) + '%   '
    + String(good) + '/' + tot + (miss.size ? '   còn thiếu ' + miss.size + ' từ' : '   đủ')));
  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 1200);
