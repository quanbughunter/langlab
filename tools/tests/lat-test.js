/* ============================================================
   LangLab — KIỂM THỬ TIẾNG PHÁP VÀ TÂY BAN NHA
   ------------------------------------------------------------
   Hai thứ tiếng này dùng CHUNG một bộ màn hình (khối LAT trong
   js/app.js), nên lỗi ở một tiếng thường kéo theo tiếng kia.
   Bộ này soát cả dữ liệu lẫn màn hình.

   Chạy:  node tools/tests/lat-test.js
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const dir = '/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab';
const html = fs.readFileSync(dir + '/dist/langlab.html', 'utf8');
const errors = [], spoken = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push('jsdomError: ' + e.message); });
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));

const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc,
  url:'http://localhost:9999/', beforeParse(window){
  /* Máy chưa có mp3 nào: Audio báo lỗi ngay, y như trình duyệt gặp 404. */
  window.Audio = function(){
    const h = {};
    return { preload:'', src:'', playbackRate:1, pause(){}, play(){ (this.onerror||function(){})(); (h.error||[]).forEach(f=>f()); },
      addEventListener(k,f){ (h[k]=h[k]||[]).push(f); }, removeEventListener(){} };
  };
  window.Element.prototype.getTotalLength = () => 60;
  window.Element.prototype.getPointAtLength = () => ({ x:20, y:20 });
  window.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
  window.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
  window.Element.prototype.scrollIntoView = function(){};
  window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:()=>()=>{} });
  window.scrollTo = () => {}; window.confirm = () => true;
  window.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
  window.fetch = () => Promise.reject(new Error('no server'));
  window.speechSynthesis = { speaking:false, cancel(){}, resume(){}, pause(){},
    getVoices(){ return [{ lang:'fr-FR', name:'FR' }, { lang:'es-ES', name:'ES' }]; },
    addEventListener(){}, removeEventListener(){}, speak(u){ spoken.push([u.lang, u.text]); } };
  window.SpeechSynthesisUtterance = function(t){ this.text = t; };
}});

const win = dom.window, d = win.document;
const click = s => { const el = typeof s === 'string' ? d.querySelector(s) : s; if (!el) throw new Error('không thấy ' + s); el.dispatchEvent(new win.MouseEvent('click', { bubbles:true })); };
const n = s => d.querySelectorAll(s).length;
const body = () => d.getElementById('view').textContent;
const crumb = () => d.getElementById('crumb').textContent;
let pass = 0, fail = 0;
const check = (name, fn) => { try { const r = fn(); if (r === false) throw new Error('sai'); if (typeof r === 'string') throw new Error(r); pass++; console.log('ok   ' + name); } catch (e){ fail++; console.log('FAIL ' + name + ' — ' + e.message); } };

/* Hai thứ tiếng, một bộ màn hình — mọi phép thử chạy cho cả hai. */
const LANGS = [
  { id:'fr', vi:'Tiếng Pháp',          key:'fr', course:'COURSE_FR', voice:/^fr/ },
  { id:'es', vi:'Tiếng Tây Ban Nha',   key:'es', course:'COURSE_ES', voice:/^es/ }
];

(async () => {
  await new Promise(r => setTimeout(r, 200));
  if (errors.length) console.log('BOOT ERRORS:', errors.slice(0, 3).join(' | '));

  /* ---------- dữ liệu khoá học ---------- */
  LANGS.forEach(L => {
    check(L.vi + ' — khoá A1 đủ 15 bài, mỗi bài đủ trường', () => {
      const C = win.eval(L.course);
      if (!C) return 'không nạp được ' + L.course;
      const a1 = C.lessons.filter(l => l.level === 'a1');
      if (a1.length !== 15) return 'có ' + a1.length + ' bài A1, cần 15';
      const nos = a1.map(l => l.no).sort((x, y) => x - y).join(',');
      if (nos !== '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15') return 'số bài lệch: ' + nos;
      const bad = a1.filter(l =>
        !(l[L.key] && l.vi && l.skill)
        || !Array.isArray(l.grammar) || l.grammar.length < 4
        || l.grammar.some(g => !g.form || !g.vi || !g.note || !g.ex || !g.ex[L.key] || !g.ex.vi)
        || !Array.isArray(l.vocab) || l.vocab.length < 20
        || !Array.isArray(l.colloc) || l.colloc.length < 3
        || l.colloc.some(c => !c.p || !c.vi || !c.ex)
        || !Array.isArray(l.dialogue) || l.dialogue.length < 6
        || l.dialogue.some(x => !x.sp || !x[L.key] || !x.vi));
      if (bad.length) return 'bài thiếu trường: ' + bad.map(l => l.no).join(' ');
      return true;
    });

    /* Giống của danh từ là thứ không được quên: học từ mà không học giống
       thì sau phải học lại từ đầu, nên bắt cứng ở đây. */
    check(L.vi + ' — mọi danh từ đều ghi giống đực hoặc cái', () => {
      const C = win.eval(L.course);
      const bad = C.lessons.flatMap(l => l.vocab.map(v => ({ l:l.no, v })))
        .filter(x => /^danh từ$/.test(x.v.pos) && !/^[mf]$/.test(x.v.g || ''));
      if (bad.length) return bad.slice(0, 5).map(x => 'bài ' + x.l + ': ' + x.v[L.key]).join(' | ');
      return true;
    });

    check(L.vi + ' — không từ nào bị lặp giữa các bài', () => {
      const C = win.eval(L.course);
      const m = {};
      C.lessons.forEach(l => l.vocab.forEach(v => { (m[v[L.key]] = m[v[L.key]] || []).push(l.no); }));
      const dup = Object.entries(m).filter(([, ls]) => ls.length > 1);
      if (dup.length) return dup.slice(0, 5).map(([w, ls]) => w + ' (bài ' + ls.join(',') + ')').join(' | ');
      return true;
    });

    check(L.vi + ' — mọi từ đều có phiên âm, không lẫn dấu tiếng Việt', () => {
      const C = win.eval(L.course);
      const VI = /[ăĂơƠưƯđĐẠ-ỹ]/;
      const bad = C.lessons.flatMap(l => l.vocab)
        .filter(v => !v.ipa || !v.vi || VI.test(v[L.key]) || VI.test(v.ipa));
      if (bad.length) return bad.slice(0, 5).map(v => v[L.key]).join(' | ');
      return true;
    });
  });

  /* ---------- màn hình ---------- */
  LANGS.forEach(L => {
    check(L.vi + ' — menu có đủ 5 mục và mỗi mục mang data-lang riêng', () => {
      const want = ['_home', '_dict', '_phon'].map(s => L.id + s);
      const miss = want.filter(v => !d.querySelector('[data-go="' + v + '"]'));
      if (miss.length) return 'thiếu mục: ' + miss.join(' ');
      return ['read', 'shadow', 'pic', 'facts'].every(v =>
        n('[data-go="' + v + '"][data-lang="' + L.id + '"]') === 1) || 'thiếu mục kỹ năng';
    });

    check(L.vi + ' — vào khoá học: đúng tông màu, breadcrumb không có undefined', () => {
      click('[data-go="' + L.id + '_home"]');
      const c = crumb();
      if (/undefined/.test(c)) return 'breadcrumb có undefined: ' + c;
      if (!c.includes(L.vi)) return 'breadcrumb không nêu tên tiếng: ' + c;
      return d.documentElement.getAttribute('data-lang') === L.id || 'data-lang không đổi';
    });

    check(L.vi + ' — trang chủ khoá liệt kê đủ 15 bài A1', () => {
      const C = win.eval(L.course);
      const a1 = C.lessons.filter(l => l.level === 'a1').length;
      const cards = n('[data-lat-lesson]');
      return cards === a1 || 'hiện ' + cards + ' thẻ, dữ liệu có ' + a1;
    });

    check(L.vi + ' — mở bài 1: có ngữ pháp, từ vựng, cụm và hội thoại', () => {
      click('[data-lat-lesson]');
      const t = body();
      return /Ngữ pháp/.test(t) && /Từ vựng/.test(t) && /Hội thoại/.test(t)
        || 'thiếu mục trong bài: ' + t.slice(0, 80);
    });

    check(L.vi + ' — nút nghe trong bài dùng đúng giọng', () => {
      spoken.length = 0;
      const b = d.querySelector('[data-lat-speak]');
      if (!b) return 'không có nút nghe';
      click(b);
      if (spoken.length !== 1) return 'gọi ' + spoken.length + ' lần, cần 1';
      return L.voice.test(spoken[0][0]) || 'giọng sai: ' + spoken[0][0];
    });

    check(L.vi + ' — màn từ điển tra được từ có dấu', () => {
      click('[data-go="' + L.id + '_dict"]');
      /* Phải bắt đúng #latSearch: trang còn ô nhập khác đứng trước nó trong DOM. */
      const box = d.querySelector('#latSearch');
      if (!box) return 'không thấy ô tra #latSearch';
      const C = win.eval(L.course);
      const w = C.lessons.flatMap(l => l.vocab).find(v => /[éèêàçñáíóúü]/.test(v[L.key]));
      if (!w) return 'dữ liệu không có từ nào mang dấu';
      box.value = w[L.key];
      box.dispatchEvent(new win.Event('input', { bubbles:true }));
      return body().includes(w.vi) || 'tra «' + w[L.key] + '» không ra nghĩa';
    });

    /* Thứ làm từ điển dùng được thật khi đọc bài: gõ dạng đã chia cũng ra. */
    check(L.vi + ' — tra được dạng đã biến đổi, không chỉ dạng từ điển', () => {
      const CASES = L.id === 'fr'
        ? [['vais','aller'], ['allée','aller'], ['sommes','être'], ['petites','petit'], ['mangeons','manger']]
        : [['voy','ir'], ['estoy','estar'], ['pequeñas','pequeño'], ['tienes','tener'], ['comimos','comer']];
      const bad = [];
      for (const [typed, want] of CASES){
        click('[data-go="' + L.id + '_dict"]');
        const box = d.querySelector('#latSearch');
        box.value = typed;
        box.dispatchEvent(new win.Event('input', { bubbles:true }));
        const hz = (d.querySelector('#latEntry .zh-entry-hz') || {}).textContent || '';
        if (hz.trim().toLowerCase().indexOf(want) < 0) bad.push(typed + ' → «' + hz.trim() + '», cần ' + want);
      }
      return bad.length ? bad.join(' | ') : true;
    });

    check(L.vi + ' — mục từ động từ có bảng chia đủ các thì', () => {
      click('[data-go="' + L.id + '_dict"]');
      const box = d.querySelector('#latSearch');
      const verb = L.id === 'fr' ? 'aller' : 'ir';
      box.value = verb;
      box.dispatchEvent(new win.Event('input', { bubbles:true }));
      const btn = [...d.querySelectorAll('[data-lat-entry]')]
        .find(b => b.textContent.trim().toLowerCase().indexOf(verb) === 0);
      if (btn) click(btn);
      const rows = d.querySelectorAll('.lat-conj-tb tbody tr').length;
      if (rows < 6) return 'chỉ có ' + rows + ' hàng thì, cần ít nhất 6';
      const cells = d.querySelectorAll('.lat-conj-tb tbody td').length;
      if (cells < 36) return 'chỉ có ' + cells + ' ô';
      return !!d.querySelector('.lat-imper') || 'thiếu phần mệnh lệnh';
    });

    check(L.vi + ' — thanh tra từ dùng đúng kiểu của các tiếng khác', () => {
      click('[data-go="' + L.id + '_dict"]');
      const wrap = d.querySelector('.zh-dict-search');
      if (!wrap) return 'thiếu khung .zh-dict-search';
      if (!wrap.querySelector('svg')) return 'thiếu biểu tượng kính lúp';
      return !!wrap.querySelector('#latSearch') || 'ô tra không nằm trong khung';
    });

    check(L.vi + ' — màn phát âm mở được và có nội dung', () => {
      click('[data-go="' + L.id + '_phon"]');
      const t = body();
      return t.length > 200 && !/undefined/.test(crumb()) || 'màn phát âm trống hoặc breadcrumb hỏng';
    });
  });

  check('hai thứ tiếng không dùng chung state — đổi qua lại vẫn đúng tiếng', () => {
    click('[data-go="fr_home"]');
    const a = d.documentElement.getAttribute('data-lang');
    click('[data-go="es_home"]');
    const b = d.documentElement.getAttribute('data-lang');
    click('[data-go="fr_home"]');
    const c = d.documentElement.getAttribute('data-lang');
    return (a === 'fr' && b === 'es' && c === 'fr') || 'đổi tiếng ra: ' + [a, b, c].join(' → ');
  });

  check('bài đọc và nghe–tranh của hai tiếng đều có dữ liệu', () => {
    const R = win.eval('typeof READINGS !== "undefined" ? READINGS : []');
    const P = win.eval('typeof LISTEN_PIC !== "undefined" ? LISTEN_PIC : []');
    const bad = [];
    LANGS.forEach(L => {
      const r = R.filter(x => x.lang === L.id).length;
      const p = P.filter(x => x.lang === L.id).length;
      if (r < 10) bad.push(L.id + ': chỉ ' + r + ' bài đọc');
      if (p < 50) bad.push(L.id + ': chỉ ' + p + ' câu nghe–tranh');
    });
    return bad.length ? bad.join(' | ') : true;
  });

  check('kho «Bạn có biết?» của hai tiếng đủ 128 mẩu', () => {
    const F = win.eval('typeof FACTS !== "undefined" ? FACTS : []');
    const bad = LANGS.map(L => [L.id, F.filter(f => f.lang === L.id).length])
      .filter(([, c]) => c !== 128);
    return bad.length ? bad.map(x => x[0] + '=' + x[1]).join(' ') : true;
  });

  check('không có lỗi console', () => errors.length === 0 || errors.slice(0, 2).join(' | '));

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
})();
