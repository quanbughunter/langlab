/* Nghe & chọn câu đúng với tranh — kiểm thử jsdom
   Chạy từ thư mục gốc repo: node tools/tests/pic-test.js */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const errors = [];
const vc = new VirtualConsole(); vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push(e.message); });
const spoken = [];
const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc, url:'http://localhost:9999/', beforeParse(w){
  w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
  w.Element.prototype.scrollIntoView = function(){};
  w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
  w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
  w.__scrolls = []; w.scrollTo = o => w.__scrolls.push(o && o.top); w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
  w.fetch = () => Promise.reject(new Error('x'));
  w.speechSynthesis = { getVoices:() => [{ lang:'en-GB', name:'UK English' }], addEventListener(){}, removeEventListener(){}, cancel(){},
    speak(u){ spoken.push(u.text); setTimeout(() => u.onend && u.onend(), 3); } };
  w.SpeechSynthesisUtterance = function(t){ this.text = t; };
  /* chưa thu sẵn mp3 nào -> thẻ audio báo lỗi ngay để rơi về giọng máy, đúng như trên trình duyệt thật */
  w.Audio = function(){
    const self = this;
    this.paused = true; this.playbackRate = 1; this.preload = 'none'; this._ev = {};
    this.pause = function(){};
    this.addEventListener = function(k, f){ (self._ev[k] = self._ev[k] || []).push(f); };
    this.removeEventListener = function(k, f){ self._ev[k] = (self._ev[k] || []).filter(x => x !== f); };
    Object.defineProperty(this, 'src', { get(){ return self._src; },
      set(v){ self._src = v; setTimeout(() => {
        if (self.onerror) self.onerror();
        (self._ev.error || []).forEach(f => f());
      }, 0); } });
    this.play = function(){ return Promise.reject(new Error('không có tệp')); };
  };
}});
const win = dom.window, d = win.document;
const $ = s => d.querySelector(s), n = s => d.querySelectorAll(s).length;
const click = s => { const e = typeof s === 'string' ? $(s) : s; if (e) e.dispatchEvent(new win.MouseEvent('click', { bubbles:true })); };
const body = () => d.getElementById('view').textContent;
let pass = 0, fail = 0;
const check = (name, fn) => { let ok = false; try { ok = !!fn(); } catch(e){ console.log('   ✗ ' + e.message); } if (ok){ pass++; console.log('ok   ' + name); } else { fail++; console.log('FAIL ' + name + ' — sai'); } };
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  await wait(260);

  /* ---------- dữ liệu ---------- */
  check('dữ liệu: mỗi câu đủ trường, đúng 1 đáp án đúng, 3 câu nhiễu có giải thích', () => {
    const P = win.eval('LISTEN_PIC'), SC = win.eval('SCENE');
    const parts = SC.partNames(), bgs = SC.bgNames(), ids = new Set();
    const bad = P.filter(q => {
      if (ids.has(q.id)) return true; ids.add(q.id);
      if (!q.scene || !q.alt || !q.cat || !q.lv) return true;
      if (!Array.isArray(q.opts) || q.opts.length !== 4) return true;
      if (q.opts.filter(o => o.ok).length !== 1) return true;
      if (new Set(q.opts.map(o => o.t)).size !== 4) return true;
      if (q.opts.some(o => !o.ok && (!o.why || !o.trap))) return true;
      if (!q.keys || q.keys.length < 4 || !q.gram || !q.gram.length) return true;
      if (q.gram.some(g => !g.p || !g.vi || !g.ex || g.ex.length !== 2)) return true;
      if (bgs.indexOf(q.scene.bg) < 0) return true;
      return (q.scene.items || []).some(it => parts.indexOf(it.p) < 0);
    });
    if (bad.length) console.log('   câu lỗi:', bad.map(x => x.id).join(' '));
    return P.length >= 300 && bad.length === 0;
  });

  check('ba câu nhiễu của MỘT bài không được cùng một kiểu bẫy', () => {
    const P = win.eval('LISTEN_PIC');
    const bad = P.filter(q => new Set(q.opts.filter(o => !o.ok).map(o => o.trap)).size < 2);
    if (bad.length) console.log('   trùng kiểu bẫy:', bad.map(x => x.id).join(' '));
    return bad.length === 0;
  });

  check('nhiễu phải SÁT câu đúng: mỗi câu có ít nhất một nhiễu chỉ lệch ≤2 từ', () => {
    const P = win.eval('LISTEN_PIC');
    /* zh·ja viết liền không cách, tách theo TỪ là vô nghĩa (cả câu thành 1 token)
       -> hai thứ tiếng này đếm theo KÝ TỰ, các thứ tiếng còn lại đếm theo từ */
    const CJK = { zh:1, ja:1 };
    const tok = (s, lang) => CJK[lang]
      ? [...String(s).replace(/[。、，！？·]/g, '')]
      : String(s).toLowerCase().replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
    const dist = (a, b) => {                       // Levenshtein đếm theo TỪ
      const m = a.length, n = b.length, d = Array.from({ length:m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
      for (let j = 0; j <= n; j++) d[0][j] = j;
      for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
        d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
      return d[m][n];
    };
    const LIM = { zh:3, ja:3 };                    // ký tự dày hơn từ nên nới 1 nấc
    const far = P.filter(q => {
      const c = tok(q.opts.find(o => o.ok).t, q.lang);
      const lim = LIM[q.lang] || 2;
      return Math.min(...q.opts.filter(o => !o.ok).map(o => dist(c, tok(o.t, q.lang)))) > lim;
    });
    if (far.length) console.log('   nhiễu còn xa:', far.map(x => x.id).join(' '));
    return far.length === 0;
  });

  check('không dùng từ lạ: mọi từ trong đáp án đều tra được ở từ điển tiếng Anh', () => {
    const P = win.eval('LISTEN_PIC'), L = win.__en.lookup, lemma = win.__en.lemma;
    const NAMES = new Set(['nam', 'lan', 'huy', 'minh']);
    const GRAM = new Set(['a','an','the','is','are','was','were','be','am','isn','aren','wasn','doesn','don',
      'didn','hasn','haven','has','have','had','do','does','did','s','t','not','no','and','or','but','so',
      'of','to','in','on','at','for','with','from','by','it','its','he','she','they','them','him','her','his',
      'their','we','you','i','my','your','our','this','that','these','those','there','here','one','ones',
      'other','another','both','neither','nor','either','all','most','some','any','none','each','every','too',
      'also','still','already','yet','just','only','almost','nobody','somebody','someone','up','down','out',
      'off','over','under','than','as','if','when','while','because','about','into','onto','o']);
    const bad = {};
    P.filter(q => q.lang === 'en').forEach(q => q.opts.forEach(o => {
      String(o.t).toLowerCase().replace(/[.,!?]/g, '').split(/[\s']+/).filter(Boolean).forEach(w => {
        if (NAMES.has(w) || GRAM.has(w) || L[w]) return;
        const base = lemma(w);
        if (base && L[base]) return;
        (bad[w] = bad[w] || []).push(q.id);
      });
    }));
    const ks = Object.keys(bad);
    if (ks.length) console.log('   chưa tra được:', ks.slice(0, 12).join(' '), '(' + ks.length + ' từ)');
    return ks.length === 0;
  });

  check('không dùng chữ lạ: mọi chữ Hán trong đáp án đều có trong từ điển tiếng Trung', () => {
    const P = win.eval('LISTEN_PIC'), L = win.__zhDict.lookup;
    const bad = {};
    P.filter(q => q.lang === 'zh').forEach(q => q.opts.forEach(o => {
      [...String(o.t)].forEach(c => {
        if (!/[一-鿿]/.test(c) || L[c]) return;
        (bad[c] = bad[c] || []).push(q.id);
      });
    }));
    const ks = Object.keys(bad);
    if (ks.length) console.log('   chưa tra được:', ks.map(k => k + ' [' + bad[k][0] + ']').slice(0, 14).join(' '), '(' + ks.length + ' chữ)');
    return ks.length === 0;
  });

  check('SCENE dựng được SVG hợp lệ cho mọi câu', () => {
    const P = win.eval('LISTEN_PIC'), SC = win.eval('SCENE');
    return P.every(q => {
      const s = SC.render(q.scene, { label:q.alt });
      return s.indexOf('<svg') === 0 && s.indexOf('</svg>') > 0 && s.indexOf('NaN') < 0 && s.indexOf('undefined') < 0;
    });
  });

  /* ---------- màn danh sách ---------- */
  click('#pcNav');
  check('navbar mở được màn Nghe & tranh, có chip 5 thứ tiếng và lưới câu hỏi', () =>
    n('[data-pic-lang]') === 5 && n('.pic-card') >= 110 && n('.pic-card .scene') >= 110);

  check('chip mở hay khoá đúng theo số câu của từng thứ tiếng', () => {
    const P = win.eval('LISTEN_PIC');
    const chips = [...d.querySelectorAll('[data-pic-lang]')];
    return chips.every(c => {
      const has = P.some(q => q.lang === c.dataset.picLang);
      return has ? !c.disabled : !!c.disabled;
    });
  });

  /* ---------- mở một câu ---------- */
  click('[data-pic-open="0"]');
  check('mở câu: có tranh, có nút nghe, 4 đáp án A B C D', () =>
    !!$('.pic-frame .scene') && !!$('#picPlay') && n('.pic-opt') === 4
    && [...d.querySelectorAll('.pic-letter')].map(e => e.textContent).join('') === 'ABCD');

  check('chưa chọn thì KHÔNG lộ chữ của đáp án', () => {
    const P = win.eval('LISTEN_PIC');
    const t = body();
    return n('.pic-opt-hidden') === 4 && n('.pic-opt-t') === 0
      && P[0].opts.every(o => t.indexOf(o.t) < 0);
  });

  check('chưa chọn thì nút mở lời thoại bị khoá', () => {
    const b = d.querySelector('[data-pic-show]');
    return !!b && b.disabled;
  });

  /* ---------- nghe ---------- */
  check('nút nghe hiện số lượt còn lại', () => /còn 2 lượt/.test($('#picPlay').textContent));
  spoken.length = 0;
  click('#picPlay');
  await wait(2600);            // câu dẫn + 4 đáp án, mỗi câu cách nhau ~380ms
  check('bấm nghe: đọc câu dẫn rồi đọc lần lượt A, B, C, D', () => {
    const P = win.eval('LISTEN_PIC');
    if (spoken.length < 5) { console.log('   chỉ đọc ' + spoken.length + ' câu'); return false; }
    return /Look at the picture/.test(spoken[0])
      && win.__pic.opts(P[0]).every((o, i) => spoken[i + 1] === 'ABCD'[i] + '. ' + o.t);
  });
  check('nghe xong một lượt thì còn 1 lượt', () => /còn 1 lượt/.test($('#picPlay').textContent));

  click('#picPlay'); await wait(600);
  check('hết hai lượt thì nút nghe bị khoá', () => $('#picPlay').disabled === true);

  /* ---------- đặt lại lượt nghe ---------- */
  check('hết lượt thì hiện nút đặt lại, kèm lời nhắc', () =>
    !!d.querySelector('[data-pic-reset]') && /Đặt lại nếu muốn nghe thêm/.test(body()));

  click('[data-pic-reset]');
  check('bấm đặt lại: có lại hai lượt, nút nghe mở khoá', () =>
    /còn 2 lượt/.test($('#picPlay').textContent) && $('#picPlay').disabled === false);

  spoken.length = 0;
  click('#picPlay'); await wait(2600);
  check('sau khi đặt lại thì nghe lại được thật', () => spoken.length >= 5);

  check('chưa nghe lượt nào thì chưa hiện nút đặt lại', () => {
    click('#pcNav'); click('[data-pic-open="0"]');
    return !d.querySelector('[data-pic-reset]');
  });
  click('#picPlay'); await wait(600);
  check('nghe một lượt là nút đặt lại xuất hiện ngay, không phải đợi hết lượt', () =>
    !!d.querySelector('[data-pic-reset]') && /còn 1 lượt/.test($('#picPlay').textContent));

  /* ---------- không được nhảy về đầu trang ---------- */
  Object.defineProperty(win, 'scrollY', { value:640, configurable:true });
  win.__scrolls.length = 0;
  click('[data-pic-ans="0"]');
  check('chọn đáp án thì trang đứng yên, không nhảy lên đầu', () => {
    const sc = win.__scrolls;
    if (!sc.length) { console.log('   không gọi scrollTo lần nào'); return false; }
    return sc[sc.length - 1] === 640;
  });

  win.__scrolls.length = 0;
  click('[data-pic-ans="1"]');
  check('đổi đáp án cũng đứng yên', () => win.__scrolls[win.__scrolls.length - 1] === 640);

  win.__scrolls.length = 0;
  click('[data-pic-reset]');
  check('bấm đặt lại lượt nghe cũng đứng yên', () => win.__scrolls[win.__scrolls.length - 1] === 640);

  win.__scrolls.length = 0;
  click('[data-pic-show]');
  check('mở lời thoại cũng đứng yên tại chỗ đang xem', () => win.__scrolls[win.__scrolls.length - 1] === 640);

  win.__scrolls.length = 0;
  click('[data-pic-back]');
  check('nhưng đổi màn (về danh sách) thì VẪN phải về đầu trang', () => win.__scrolls[win.__scrolls.length - 1] === 0);
  Object.defineProperty(win, 'scrollY', { value:0, configurable:true });
  click('[data-pic-open="0"]');

  /* ---------- chọn đáp án ---------- */
  click('[data-pic-ans="0"]');
  check('chọn A: ô A được đánh dấu, vẫn chưa lộ lời thoại', () =>
    !!$('.pic-opt.picked') && n('.pic-opt-t') === 0 && !d.querySelector('[data-pic-show]').disabled);

  click('[data-pic-ans="1"]');
  check('đổi ý sang B được (chưa mở lời thoại thì còn sửa được)', () => {
    const ps = [...d.querySelectorAll('.pic-opt')];
    return ps[1].classList.contains('picked') && !ps[0].classList.contains('picked');
  });

  /* ---------- mở lời thoại ---------- */
  {                                  // bấm đúng ô chứa đáp án đúng, dù nó nằm ở đâu sau khi xáo
    const P0 = win.eval('LISTEN_PIC')[0];
    click('[data-pic-ans="' + win.__pic.opts(P0).findIndex(o => o.ok) + '"]');
  }
  click('[data-pic-show]');
  check('mở lời thoại: hiện đủ 4 câu, đánh dấu câu đúng và câu đã chọn', () => {
    const P = win.eval('LISTEN_PIC'), t = body();
    return n('.pic-opt-t') === 4 && P[0].opts.every(o => t.indexOf(o.t) >= 0)
      && !!$('.pic-opt.right') && !!$('.pic-verdict');
  });

  check('chọn đúng ô chứa đáp án đúng thì báo đúng', () =>
    $('.pic-verdict').classList.contains('ok'));

  check('thứ tự A·B·C·D được xáo theo mã câu hỏi và luôn ổn định', () => {
    const P = win.eval('LISTEN_PIC'), o = win.__pic.opts;
    if (o(P[3]).map(x => x.t).join('|') !== o(P[3]).map(x => x.t).join('|')) return false;
    const pos = {};
    P.forEach(q => { pos[o(q).findIndex(x => x.ok)] = (pos[o(q).findIndex(x => x.ok)] || 0) + 1; });
    const max = Math.max(...Object.values(pos));
    if (Object.keys(pos).length < 4 || max > P.length * 0.4){ console.log('   phân bố:', JSON.stringify(pos)); return false; }
    return true;
  });

  check('có giải thích cho từng câu nhiễu, kèm tên kiểu bẫy', () => {
    const P = win.eval('LISTEN_PIC'), t = body();
    return n('.pic-why li') === 4 && n('.pic-trap') === 4
      && P[0].opts.filter(o => !o.ok).every(o => t.indexOf(o.why) >= 0 && t.indexOf(o.trap) >= 0);
  });

  check('có phần từ vựng bấm tra được và phần ngữ pháp', () => {
    const P = win.eval('LISTEN_PIC'), t = body();
    return n('.rd-keys .rd-key[data-en-word]') === P[0].keys.length
      && n('.pic-gram') === P[0].gram.length && t.indexOf(P[0].gram[0].p) >= 0;
  });

  check('mở lời thoại rồi thì nghe lại không giới hạn', () =>
    /Nghe lại/.test($('#picPlay').textContent) && $('#picPlay').disabled === false);

  check('bấm từ vựng thì mở mục từ điển tiếng Anh', () => {
    click('.rd-keys .rd-key[data-en-word]');
    return /Từ điển|từ điển/.test(body()) && !!d.querySelector('#enEntry, .ru-entry');
  });

  /* ---------- điều hướng ---------- */
  click('#pcNav'); click('[data-pic-open="1"]');
  check('mở câu khác thì lượt nghe được đặt lại', () =>
    /còn 2 lượt/.test($('#picPlay').textContent) && n('.pic-opt-t') === 0);

  click('[data-pic-ans="2"]'); click('[data-pic-show]');
  click('[data-pic-next]');
  check('nút «câu tiếp theo» sang câu 3 và đặt lại trạng thái', () =>
    /Câu 3 \/ /.test(body()) && /còn 2 lượt/.test($('#picPlay').textContent) && n('.pic-opt-t') === 0);

  click('[data-pic-back]');
  check('về danh sách thì có đếm số câu đã làm', () => /đã làm/.test(body()) && n('.pic-card') >= 110);

  check('câu đã làm được đánh dấu đúng/sai trên thẻ', () => n('.pic-card .pic-mark') >= 2);

  /* ---------- lùi lịch sử ---------- */
  click('[data-pic-open="0"]');
  win.history.back(); await wait(120);
  check('bấm back thì quay lại danh sách chứ không văng khỏi màn', () =>
    n('.pic-card') >= 110 && !$('.pic-frame'));

  check('không có lỗi console', () => { if (errors.length) console.log('   ' + errors[0]); return errors.length === 0; });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
})();
