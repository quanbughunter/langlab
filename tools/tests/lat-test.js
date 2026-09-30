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
    check(L.vi + ' — A1 và A2 mỗi cấp đủ 50 bài, đủ trường, số liền mạch', () => {
      const C = win.eval(L.course);
      if (!C) return 'không nạp được ' + L.course;
      for (const lv of ['a1', 'a2']){
        const set = C.lessons.filter(l => l.level === lv);
        if (set.length !== 50) return lv.toUpperCase() + ' có ' + set.length + ' bài, cần 50';
        const nos = set.map(l => l.no).sort((x, y) => x - y);
        const want = set.map((_, i) => i + 1).join(',');
        if (nos.join(',') !== want) return lv + ': số bài không liền mạch: ' + nos.join(',');
        const bad = set.filter(l =>
          !(l[L.key] && l.vi && l.skill)
          || !Array.isArray(l.grammar) || l.grammar.length < 4
          || l.grammar.some(g => !g.form || !g.vi || !g.note || !g.ex || !g.ex[L.key] || !g.ex.vi)
          || !Array.isArray(l.vocab) || l.vocab.length < 20
          || !Array.isArray(l.colloc) || l.colloc.length < 3
          || l.colloc.some(c => !c.p || !c.vi || !c.ex)
          || !Array.isArray(l.dialogue) || l.dialogue.length < 6
          || l.dialogue.some(x => !x.sp || !x[L.key] || !x.vi));
        if (bad.length) return lv + ': bài thiếu trường: ' + bad.map(l => l.no).join(' ');
      }
      return true;
    });

    /* Ràng buộc dễ vỡ nhất của khoá: 2.000 từ mà không từ nào lặp. Soát ở đây
       để một lần ghép sai không lọt qua mà phải chờ tới lúc người học gặp. */
    check(L.vi + ' — 2.000 từ, không từ nào lặp giữa các bài', () => {
      const C = win.eval(L.course);
      const seen = {}, dup = [];
      C.lessons.forEach(l => (l.vocab || []).forEach(v => {
        const k = String(v[L.key] || '').toLowerCase();
        if (!k) return;
        if (seen[k]) dup.push(k + ' (' + seen[k] + ' và ' + l.level + '#' + l.no + ')');
        else seen[k] = l.level + '#' + l.no;
      }));
      if (dup.length) return dup.length + ' từ lặp: ' + dup.slice(0, 5).join(', ');
      const n = Object.keys(seen).length;
      return n === 2000 || 'có ' + n + ' từ, cần 2000';
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

    check(L.vi + ' — trang chủ khoá liệt kê đủ số bài A1', () => {
      const C = win.eval(L.course);
      const a1 = C.lessons.filter(l => l.level === 'a1').length;
      const cards = n('[data-lat-lesson]');
      return cards === a1 || 'hiện ' + cards + ' thẻ, dữ liệu có ' + a1;
    });

    /* Cấp A2 phải BẤM ĐƯỢC, không còn khoá «sắp có», và phải ra đủ 50 thẻ.
       Quên bật status:'active' là lỗi im lặng: nội dung có mà không ai vào được. */
    check(L.vi + ' — chip A2 mở được và liệt kê đủ 50 bài', () => {
      const chip = d.querySelector('[data-lat-level="' + L.id + ':a2"]');
      if (!chip) return 'không thấy chip A2';
      if (chip.disabled) return 'chip A2 vẫn bị khoá (status chưa active)';
      click(chip);
      const cards = n('[data-lat-lesson]');
      if (cards !== 50) return 'A2 hiện ' + cards + ' thẻ, cần 50';
      const cards50 = d.querySelectorAll('[data-lat-lesson]');
      click(cards50[cards50.length - 1]);
      const t = body();
      if (!/Ngữ pháp/.test(t) || !/Hội thoại/.test(t)) return 'bài A2 cuối thiếu mục';
      /* Trả màn hình về đúng chỗ các phép thử sau đang chờ: danh sách bài, cấp A1.
         Đi bằng đúng nút người dùng bấm — breadcrumb — chứ không chọc vào state. */
      click('[data-lat-home="' + L.id + '"]');
      if (!n('[data-lat-lesson]')) return 'breadcrumb không trở lại được danh sách bài';
      click('[data-lat-level="' + L.id + ':a1"]');
      return n('[data-lat-lesson]') === 50 || 'không trở lại được danh sách bài A1';
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

  /* ---------- ba màn luyện tập ---------- */
  LANGS.forEach(L => {
    check(L.vi + ' — màn Ôn tập lật được thẻ và đổi được chiều', () => {
      click('[data-go="' + L.id + '_srs"]');
      if (!d.querySelector('.zh-card')) return 'không thấy thẻ';
      const front = d.querySelector('.zh-card-front').textContent.trim();
      if (!front) return 'mặt trước trống';
      click('[data-lat-flip="' + L.id + '"]');
      if (!d.querySelector('.zh-card.open')) return 'bấm lật mà thẻ không mở';
      click('[data-lat-srsnext="' + L.id + '"]');
      if (d.querySelector('.zh-card.open')) return 'sang thẻ mới mà vẫn để lộ đáp án';
      click('[data-lat-srsdir="v2f"]');
      const f2 = d.querySelector('.zh-card-front').textContent.trim();
      return f2 !== front || 'đổi chiều mà mặt trước không đổi';
    });

    check(L.vi + ' — màn Bài tập chạy hết một lượt và chấm đúng', () => {
      click('[data-go="' + L.id + '_quiz"]');
      const start = d.querySelector('[data-lat-qzstart="' + L.id + '"]');
      if (!start) return 'không thấy nút bắt đầu';
      click(start);
      let n = 0;
      while (d.querySelector('[data-lat-qzpick]') && n < 30){
        click(d.querySelector('[data-lat-qzpick]')); n++;
      }
      if (!n) return 'không có câu nào';
      const t = body();
      if (!/câu đúng/.test(t)) return 'làm hết mà không ra kết quả';
      return n === 15 || ('ra ' + n + ' câu, cần 15');
    });

    check(L.vi + ' — đề sinh ra đủ sáu dạng và câu nào cũng đúng khuôn', () => {
      const Q = win.__lat && win.__lat.quiz;
      if (!Q) return 'app chưa mở latMakeQuiz ra ngoài';
      const bad = [];
      Object.keys(win.__lat.types).forEach(ty => {
        const qs = Q(L.id, 'all', ty, 8, 3);
        if (!qs.length){ bad.push(ty + ': không ra câu nào'); return; }
        qs.forEach(q => {
          if (!q.q || !q.e) bad.push(ty + ': thiếu đề hoặc lời giải');
          if (!Array.isArray(q.o) || q.o.length < 2) bad.push(ty + ': dưới 2 lựa chọn');
          if (q.c == null || q.c < 0 || q.c >= q.o.length) bad.push(ty + ': đáp án trỏ sai ô');
          if (new Set(q.o).size !== q.o.length) bad.push(ty + ': có hai lựa chọn trùng nhau «' + q.o.join('/') + '»');
        });
      });
      return bad.length ? Array.from(new Set(bad)).slice(0, 4).join(' | ') : true;
    });

    /* Bẫy dễ mắc nhất khi sinh đề: quên chính tả của mạo từ. */
    check(L.vi + ' — phần giải thích không viết sai mạo từ', () => {
      const Q = win.__lat.quiz;
      const es = Q(L.id, 'all', 'giong', 60, 5).map(q => q.e).join(' ');
      const bad = L.id === 'fr'
        ? (es.match(/\b(le|la) [aeiouâàéèêîïôûùy]\w+/gi) || [])
        : (es.match(/\bla (agua|aula|área|alma|hambre)\b/gi) || []);
      return bad.length ? 'viết sai: ' + Array.from(new Set(bad)).slice(0, 3).join(' · ') : true;
    });

    check(L.vi + ' — màn Luyện nói giấu đáp án cho tới khi bấm mở', () => {
      click('[data-go="' + L.id + '_speak"]');
      if (!d.querySelector('.sp-vi')) return 'không thấy câu gợi ý tiếng Việt';
      if (d.querySelector('.sp-answer')) return 'đáp án hiện sẵn — mất hết tác dụng của bài';
      click('[data-lat-spshow="' + L.id + '"]');
      if (!d.querySelector('.sp-answer')) return 'bấm mở mà không hiện đáp án';
      click('[data-lat-spnext="' + L.id + ':1"]');
      return !d.querySelector('.sp-answer') || 'sang câu mới mà vẫn để lộ đáp án';
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


  /* ---------- ba lỗi người dùng chỉ ra, chốt lại để không tái diễn ---------- */

  /* 1. Tranh của mục «Bạn có biết?»: không mẩu nào của hai tiếng này được đeo
     tranh vẽ cho ngôn ngữ khác. Đây là lỗi im lặng — mã chạy đúng, chỉ có
     người đọc là thấy phiên âm tiếng Anh nằm dưới một mẩu tiếng Pháp. */
  check('Bạn có biết? — không mẩu Pháp/TBN nào dùng tranh của tiếng khác', () => {
    const F = win.eval('FACTS'), A = win.eval('FACT_ART');
    const foreign = ['hangul','hanzi','pinyin','tone','kana','keigo','cyrillic','stress','phonetic',
      'phrasal','number','alphabet','shakespeare','teatime','fishchips','burger','queue','bigben',
      'liberty','baseball','halloween','thanksgiving','taekwondo','chopsticks','mahjong','koi','kimchi',
      'ondol','seaweed','ppalli','redenvelope','panda','dumpling','greatwall','hotpot','matryoshka',
      'samovar','blin','banya','sansho','sushi','bowjp','sakura','train_jp','onsen','maneki','onomat',
      'bento','torii','vending','nameru','ramen','kintsugi','matsuri','newyearja','origami','mtfuji',
      'lantern','dragon','birch','ballet','bow','age','bowl','pub','metro','smile','shoes','newyear','soup'];
    const bad = F.filter(f => (f.lang === 'fr' || f.lang === 'es') && foreign.indexOf(f.art) >= 0);
    if (bad.length) return bad.length + ' mẩu, ví dụ «' + bad[0].title.slice(0, 40) + '» dùng tranh ' + bad[0].art;
    const miss = F.filter(f => (f.lang === 'fr' || f.lang === 'es') && !A[f.art]);
    return !miss.length || miss.length + ' mẩu trỏ vào khoá tranh không tồn tại';
  });

  check('Bạn có biết? — mỗi tiếng có bộ tranh riêng đủ rộng', () => {
    const F = win.eval('FACTS');
    const fr = Array.from(new Set(F.filter(f => f.lang === 'fr').map(f => f.art)));
    const es = Array.from(new Set(F.filter(f => f.lang === 'es').map(f => f.art)));
    const onlyFr = fr.filter(k => es.indexOf(k) < 0).length;
    const onlyEs = es.filter(k => fr.indexOf(k) < 0).length;
    if (onlyFr < 15) return 'tiếng Pháp chỉ có ' + onlyFr + ' tranh riêng';
    if (onlyEs < 15) return 'tiếng Tây Ban Nha chỉ có ' + onlyEs + ' tranh riêng';
    return true;
  });

  /* 2 và 3: thanh tra nhanh và chiều sâu của mục từ. */
  LANGS.forEach(L => {
    check(L.vi + ' — thanh tra nhanh vào đúng kho, không rơi về tiếng Hàn', () => {
      click('[data-go="' + L.id + '_home"]');
      const tq = d.querySelector('#topq');
      if (!tq) return 'không thấy ô tra nhanh';
      const lbl = tq.getAttribute('aria-label') || tq.placeholder || '';
      if (lbl.toLowerCase().indexOf(L.vi.toLowerCase()) < 0) return 'nhãn ô tra nhanh vẫn là: ' + lbl;
      const word = L.id === 'fr' ? 'bonjour' : 'hola';
      tq.value = word;
      tq.dispatchEvent(new win.Event('input', { bubbles:true }));
      const e = d.querySelector('#latEntry');
      if (!e) return 'không mở mục từ nào — nhiều khả năng đã nhảy sang kho khác';
      const hz = e.querySelector('.zh-entry-hz');
      return (hz && hz.textContent.trim() === word) || 'mở ra «' + (hz ? hz.textContent.trim() : '?') + '»';
    });

    check(L.vi + ' — gõ dạng đã chia vào ô tra nhanh vẫn ra từ gốc', () => {
      click('[data-go="' + L.id + '_home"]');
      const tq = d.querySelector('#topq');
      const typed = L.id === 'fr' ? 'allé' : 'fuimos';
      const want  = L.id === 'fr' ? 'aller' : 'ser';
      tq.value = typed;
      tq.dispatchEvent(new win.Event('input', { bubbles:true }));
      const e = d.querySelector('#latEntry');
      if (!e) return 'không mở mục từ nào';
      const hz = e.querySelector('.zh-entry-hz');
      return (hz && hz.textContent.trim() === want) || 'ra «' + (hz ? hz.textContent.trim() : '?') + '» thay vì «' + want + '»';
    });

    check(L.vi + ' — mục từ có ví dụ trong câu, cấu tạo từ và từ cùng gốc', () => {
      const word = L.id === 'fr' ? 'écrire' : 'escribir';
      click('[data-go="' + L.id + '_home"]');
      const tq = d.querySelector('#topq');
      tq.value = word; tq.dispatchEvent(new win.Event('input', { bubbles:true }));
      const e = d.querySelector('#latEntry');
      if (!e) return 'không mở được mục từ ' + word;
      const heads = Array.prototype.map.call(e.querySelectorAll('.zh-entry-sec h3'), h => h.textContent);
      if (heads.indexOf('Dùng trong câu') < 0) return 'thiếu mục ví dụ; hiện có: ' + heads.join(', ');
      if (heads.indexOf('Cấu tạo từ') < 0) return 'thiếu mục cấu tạo từ; hiện có: ' + heads.join(', ');
      if (e.querySelectorAll('.lat-ex > li').length < 2) return 'dưới 2 câu ví dụ';
      if (!e.querySelectorAll('.lat-mp b').length) return 'không bày được tiền tố / gốc / hậu tố';
      return e.querySelectorAll('.lat-chip').length > 0 || 'không có từ cùng gốc nào';
    });
  });

  check('Mục từ — phần gốc bày đúng mặt chữ có dấu', () => {
    click('[data-go="fr_home"]');
    const tq = d.querySelector('#topq');
    tq.value = 'écrire'; tq.dispatchEvent(new win.Event('input', { bubbles:true }));
    const b = d.querySelector('#latEntry .lat-mp.root b');
    if (!b) return 'không thấy mảnh gốc';
    return b.textContent.indexOf('é') === 0 || 'bày ra «' + b.textContent + '», đáng lẽ còn dấu sắc';
  });

  check('Bảng gốc La-tinh — gán đúng gốc, và không tự nghĩ ra gốc', () => {
    const R = win.eval('typeof LAT_ROOTS !== "undefined" ? LAT_ROOTS : null');
    if (!R || !R.analyze) return 'chưa nạp được bảng gốc';
    const want = [['fr','impossible','pot'], ['es','posible','pot'], ['fr','chercher','circ'],
                  ['fr','léger','lev'], ['es','salado','salnou'], ['fr','maintenir','man'],
                  ['es','desencadenar','caten'], ['fr','inscription','scrib']];
    for (let i = 0; i < want.length; i++){
      const id = want[i][0], w = want[i][1], root = want[i][2];
      const a = R.analyze(id, w);
      if (!a) return w + ': không tách được nữa';
      if (a.roots[0].id !== root && !(a.roots[1] && a.roots[1].id === root))
        return w + ': gán vào gốc ' + a.roots[0].id + ', đáng lẽ ' + root;
    }
    if (R.analyze('fr', 'xyzzyx')) return 'bịa ra gốc cho một từ không có thật';
    return true;
  });

  check('không có lỗi console', () => errors.length === 0 || errors.slice(0, 2).join(' | '));

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
})();
