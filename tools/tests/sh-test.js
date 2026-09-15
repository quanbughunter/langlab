/* Luyện shadowing đa ngôn ngữ — kiểm thử jsdom */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => errors.push(e.message));
const spoken = [];
const html = fs.readFileSync('/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab/dist/langlab.html', 'utf8');
const dom = new JSDOM(html, {
  runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc, url:'http://localhost:9999/',
  beforeParse(w){
    w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
    w.Element.prototype.scrollIntoView = function(){};
    w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
    w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
    w.scrollTo = () => {};
    w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
    w.fetch = () => Promise.reject(new Error('offline'));
    w.speechSynthesis = {
      getVoices: () => [{lang:'ko-KR',name:'ko'},{lang:'zh-CN',name:'zh'},{lang:'ja-JP',name:'ja'},{lang:'ru-RU',name:'ru'},{lang:'en-GB',name:'en'}],
      addEventListener(){}, removeEventListener(){}, cancel(){},
      speak(u){ spoken.push({ text:u.text, lang:u.lang, rate:u.rate }); setTimeout(() => u.onend && u.onend(), 5); }
    };
    w.SpeechSynthesisUtterance = function(t){ this.text = t; };
  }
});
const win = dom.window, d = win.document;
const $ = s => d.querySelector(s);
const n = s => d.querySelectorAll(s).length;
const click = s => { const e = typeof s === 'string' ? $(s) : s; if (e) e.dispatchEvent(new win.MouseEvent('click', { bubbles:true })); };
const body = () => d.getElementById('view').textContent;

let pass = 0, fail = 0;
const check = (name, fn) => {
  let ok = false;
  try { ok = !!fn(); } catch(e){ console.log('   ✗ ' + e.message); }
  if (ok){ pass++; console.log('ok   ' + name); } else { fail++; console.log('FAIL ' + name + ' — sai'); }
};

setTimeout(() => {
  click('#shNav');

  check('Shadowing là mục cấp 1 trên navbar, mở được', () =>
    !!$('.nav-main > #shNav') && !$('.nav-menu [data-go="shadow"]') && !!$('#shInput'));

  check('có đủ 5 chip ngôn ngữ, mặc định tiếng Hàn', () =>
    n('[data-sh-lang]') === 5 && $('[data-sh-lang="ko"]').getAttribute('aria-pressed') === 'true');

  const LANGS = [
    ['ko', 'ko', /한국|저는|공부/],
    ['zh', 'zh', /我|中文|河内/],
    ['ja', 'ja', /日本語|ハノイ|毎朝/],
    ['ru', 'ru', /Ханое|русск|зовут/],
    ['en', 'en', /Hanoi|English|shadow/]
  ];
  LANGS.forEach(([id, cls, re]) => {
    check('tiếng «' + id + '»: đoạn mẫu tách câu, tông màu và lớp chữ đúng', () => {
      click(`[data-sh-lang="${id}"]`);
      click('#shSample');
      const rows = n('.sh-row');
      const first = $('.sh-text');
      return rows >= 5
        && d.documentElement.getAttribute('data-lang') === cls
        && !!first && first.classList.contains(cls)
        && re.test(body());
    });
    check('tiếng «' + id + '»: mọi câu đều có từ bấm được để tra', () => {
      const toks = n('.sh-text .zc, .sh-text .kw');
      return toks >= n('.sh-row');
    });
  });

  check('mỗi ngôn ngữ giữ đoạn riêng, đổi qua lại không mất bài', () => {
    click('[data-sh-lang="zh"]');
    const zh = n('.sh-row');
    click('[data-sh-lang="ru"]');
    const ru = n('.sh-row');
    click('[data-sh-lang="zh"]');
    return zh > 0 && ru > 0 && n('.sh-row') === zh;
  });

  check('chip ngôn ngữ hiện số câu đang có', () =>
    n('.sh-chip-n') >= 5 && /\d/.test($('.sh-chip-n').textContent));

  check('nghe một câu dùng đúng mã ngôn ngữ của giọng đọc', () => {
    click('[data-sh-lang="en"]');
    spoken.length = 0;
    click('[data-sh-play="0"]');
    return spoken.length === 1 && spoken[0].lang === 'en-GB';
  });
  check('nút nghe chậm hạ tốc độ xuống 0.7', () => {
    spoken.length = 0;
    click('[data-sh-play="0"][data-slow="1"]');
    return spoken.length === 1 && spoken[0].rate === 0.7;
  });
  check('đổi sang tiếng Nga thì giọng đọc đổi theo', () => {
    click('[data-sh-lang="ru"]');
    spoken.length = 0;
    click('[data-sh-play="0"]');
    return spoken.length === 1 && spoken[0].lang === 'ru-RU';
  });

  check('ngắt ý rồi gộp lại được', () => {
    const before = n('.sh-chunk');
    const br = $('[data-sh-break]');
    if (!br) return false;
    click(br);
    const after = n('.sh-chunk');
    click('[data-sh-merge]');
    return after === before + 1 && n('.sh-chunk') === before;
  });

  check('nút «Đoạn khác» quay về ô soạn, giữ nguyên đoạn cũ trong ô', () => {
    click('#shBack');
    const box = $('#shInput');
    return !!box && !!box.value && n('.sh-row') === 0;
  });

  check('crumb chỉ rõ đang shadowing thứ tiếng nào', () =>
    /Luyện shadowing/.test($('#crumb').textContent) && /Nga/.test($('#crumb').textContent));

  check('không có lỗi console', () => { if (errors.length) console.log('   ' + errors.slice(0,2).join(' | ')); return errors.length === 0; });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 700);
