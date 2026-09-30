/* Độ phủ từ điển cho bài đọc — kiểm thử jsdom
   1) MỌI từ khoá của mọi bài đọc phải mở ra được một mục từ điển.
   2) Từ trong thân bài (bấm được) phải tra được ở mức tối thiểu đã đặt.
   Chạy từ thư mục gốc repo: node tools/tests/dict-cover.js
*/
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const vc = new VirtualConsole();
const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc, url:'http://localhost:9999/', beforeParse(w){
  w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
  w.Element.prototype.scrollIntoView = function(){};
  w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
  w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
  w.scrollTo = () => {}; w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
  w.fetch = () => Promise.reject(new Error('x'));
  w.speechSynthesis = { getVoices:() => [], addEventListener(){}, removeEventListener(){}, cancel(){}, speak(){} };
  w.SpeechSynthesisUtterance = function(t){ this.text = t; };
}});
const win = dom.window;
let pass = 0, fail = 0;
const check = (name, fn) => { let ok = false; try { ok = !!fn(); } catch(e){ console.log('   ✗ ' + e.message); } if (ok){ pass++; console.log('ok   ' + name); } else { fail++; console.log('FAIL ' + name + ' — sai'); } };

/* rút token bấm được từ HTML mà bộ tách từ sinh ra */
function picks(h, attr){
  const out = [], re = new RegExp(attr + '="([^"]*)"', 'g');
  let m; while ((m = re.exec(h))) out.push(m[1].replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"'));
  return out;
}

setTimeout(() => {
  const R  = win.eval('READINGS');
  const ZH = win.__zhDict, RU = win.__ruDict, JA = win.__jaDict, EN = win.__en, Words = win.Words;
  const jaKanji = win.eval('typeof KANJI_JA !== "undefined" ? KANJI_JA : []');
  const kanjiSet = new Set(jaKanji.map(k => k.k));

  const hitKey = (lang, w) => {
    try {
      if (lang === 'zh') return !!ZH.lookup[w];
      if (lang === 'ru') return RU.lemmatize(w).length > 0;
      if (lang === 'ja') return JA.lemmatize(w).length > 0 || ([...w].length === 1 && kanjiSet.has(w));
      if (lang === 'en') return !!EN.lookup[String(w).toLowerCase()] || !!EN.lookup[String(EN.lemma(String(w).toLowerCase()) || '')];
      return !!Words.analyze(w).hit;
    } catch(e){ return false; }
  };

  /* ---- 1. từ khoá ---- */
  /* Năm thứ tiếng này có từ điển hình thái riêng nên đòi tra được 100%.
     Tiếng Pháp và Tây Ban Nha đi đường khác — từ điển của chúng là danh sách
     từ của khoá CỘNG từ khoá của bài đọc (xem latLookup trong js/app.js) —
     nên kiểm riêng ở mục 3 bên dưới, chứ không chạy qua hitKey. */
  const MORPH = ['zh', 'ko', 'ja', 'ru', 'en'];
  const missKeys = { ko:[], zh:[], ja:[], ru:[], en:[] };
  for (const r of R){
    if (MORPH.indexOf(r.lang) < 0) continue;
    for (const k of (r.keys || [])) if (!hitKey(r.lang, String(k.w))) missKeys[r.lang].push(k.w + ' [' + r.title + ']');
  }
  for (const l of MORPH){
    check('từ khoá bài đọc ' + l + ': mục nào cũng tra được', () => {
      if (missKeys[l].length) console.log('   thiếu:', missKeys[l].slice(0, 8).join(' · '), '(' + missKeys[l].length + ')');
      return missKeys[l].length === 0;
    });
  }

  /* ---- 3. tiếng Pháp và Tây Ban Nha: từ điển phải nuốt hết từ khoá bài đọc ---- */
  for (const l of ['fr', 'es']){
    check('từ khoá bài đọc ' + l + ': đều có trong từ điển của khoá', () => {
      const L = win.eval('__lat && __lat.lookup ? __lat.lookup("' + l + '") : null');
      if (!L) return 'app chưa mở __lat.lookup ra ngoài';
      const miss = R.filter(r => r.lang === l)
        .flatMap(r => (r.keys || []).map(k => ({ w:String(k.w), t:r.title })))
        /* Khoá tra quy dấu nháy cong ’ về dấu thẳng ' (xem latKey trong
           js/app.js), nên phép so ở đây phải quy y như vậy. */
        .filter(x => !L[x.w.toLowerCase().replace(/[\u2019\u02bc]/g, "'")]);
      if (miss.length) console.log('   thiếu:', miss.slice(0, 8).map(x => x.w + ' [' + x.t + ']').join(' · '), '(' + miss.length + ')');
      return miss.length === 0;
    });
  }

  /* ---- 2. thân bài ---- */
  const MIN = { zh:1.0, en:1.0, ru:0.95, ko:0.85, ja:0.70 };
  const seen = { ko:new Set(), zh:new Set(), ja:new Set(), ru:new Set(), en:new Set() };
  const bad  = { ko:[], zh:[], ja:[], ru:[], en:[] };
  for (const r of R) for (const line of r.text){
    let toks = [];
    try {
      if (r.lang === 'zh')      toks = picks(ZH.tokens(line), 'data-zc');
      else if (r.lang === 'ru') toks = picks(RU.tokens(line), 'data-ruw');
      else if (r.lang === 'ja') toks = picks(JA.tokens(line), 'data-jaw');
      else if (r.lang === 'en') toks = picks(EN.tokens(line), 'data-en-word');
      else                      toks = picks(Words.mark(line), 'data-kw');
    } catch(e){ continue; }
    for (const t of toks){
      if (!t || seen[r.lang].has(t)) continue;
      seen[r.lang].add(t);
      if (!hitKey(r.lang, t)) bad[r.lang].push(t);
    }
  }
  for (const l of ['zh','en','ru','ko','ja']){
    const tot = seen[l].size, ok = tot - bad[l].length, rate = tot ? ok / tot : 1;
    check('thân bài ' + l + ': tra được ≥ ' + Math.round(MIN[l] * 100) + '% (' + ok + '/' + tot + ')', () => {
      if (rate < MIN[l]) console.log('   chưa tra được:', bad[l].slice(0, 10).join(' · '));
      return rate >= MIN[l];
    });
  }

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 500);
