const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const dir = '/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab';
const html = fs.readFileSync(dir + '/dist/langlab.html', 'utf8');
const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push('jsdomError: ' + e.message); });
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
const dom = new JSDOM(html, {
  runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  url: 'http://localhost:9999/',
  beforeParse(window){
    window.Element.prototype.getTotalLength   = () => 60;
    window.Element.prototype.getPointAtLength = () => ({ x:20, y:20 });
    Object.defineProperty(window.Element.prototype, 'transform', { get(){ return { baseVal:{ consolidate(){ return null; } } }; }, configurable:true });
    window.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:320, height:320, right:320, bottom:320 });
    window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get: () => () => {} });
    window.scrollTo = () => {};
    window.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
    window.fetch = () => Promise.reject(new Error('no server'));
    window.speechSynthesis = { speaking:false, paused:false, cancel(){}, resume(){}, pause(){}, getVoices(){ return []; }, addEventListener(){}, removeEventListener(){}, speak(u){ if(u.onend) setTimeout(u.onend,0); } };
    window.SpeechSynthesisUtterance = function(t){ this.text = t; };
    window.Audio = function(){ this.play=()=>Promise.resolve(); this.pause=()=>{}; this.addEventListener=()=>{}; this.load=()=>{}; };
  }
});
const win = dom.window, d = win.document;
const click = el => el && el.dispatchEvent(new win.MouseEvent('click', { bubbles:true }));
const crumb = () => (d.querySelector('#crumb b') || {}).textContent || '';
const back = () => new Promise(res => {
  let done = false; const fin = () => { if(done) return; done = true; res(); };
  win.addEventListener('popstate', () => setTimeout(fin, 0), { once:true });
  win.history.back();
  setTimeout(fin, 250);
});
let pass = 0, fail = 0;
const check = (name, cond) => { if (cond){ pass++; console.log('ok   ' + name); } else { fail++; console.log('FAIL ' + name); } };

(async () => {
  await new Promise(r => setTimeout(r, 60));   // chờ boot
  if (errors.length){ console.log('BOOT ERRORS:', errors.slice(0,3).join(' | ')); }
  check('khởi động ở trang Giới thiệu', crumb().includes('Giới thiệu'));

  click(d.querySelector('[data-go="home"]'));
  check('vào Khoá học', crumb() === 'Khoá học');
  click(d.querySelector('[data-go="dict"]'));
  check('điều hướng → Từ điển', crumb() === 'Từ điển');
  click(d.querySelector('[data-go="numbers"]'));
  check('điều hướng → Số đếm', crumb() === 'Số đếm');

  await back();
  check('back 1 → về Từ điển', crumb() === 'Từ điển');
  await back();
  check('back 2 → về Khoá học (không thoát app)', crumb() === 'Khoá học');

  // bảng tra từ: mở rồi back để đóng
  click(d.querySelector('[data-lesson]'));                 // vào 1 bài
  const kw = d.querySelector('[data-kw]');
  if (kw){
    click(kw);
    const opened = d.body.classList.contains('wp-open');
    check('mở bảng tra từ', opened);
    await back();
    check('back đóng bảng tra (không đổi màn)', !d.body.classList.contains('wp-open'));
  } else {
    console.log('skip  không tìm thấy [data-kw] để thử bảng tra');
  }

  /* Luyện shadowing: bấm «Dùng đoạn mẫu» rồi Back phải quay về ô soạn đoạn */
  click(d.querySelector('#shNav'));
  check('mở Luyện shadowing từ navbar', !!d.querySelector('#shInput'));
  click(d.querySelector('#shSample'));
  check('đoạn mẫu tách thành câu', d.querySelectorAll('.sh-row').length > 0 && !d.querySelector('#shInput'));
  await back();
  check('back trong Shadowing → về ô soạn đoạn, không văng ra ngoài',
        !!d.querySelector('#shInput') && d.querySelectorAll('.sh-row').length === 0);
  await back();
  check('back lần nữa mới rời Shadowing', !d.querySelector('#shInput') && !d.querySelector('.sh-row'));

  /* đổi ngôn ngữ shadowing cũng lùi lại được */
  click(d.querySelector('#shNav'));
  click(d.querySelector('[data-sh-lang="en"]'));
  const enOn = d.querySelector('[data-sh-lang="en"]').getAttribute('aria-pressed') === 'true';
  await back();
  check('back sau khi đổi ngôn ngữ → về ngôn ngữ trước',
        enOn && d.querySelector('[data-sh-lang="ko"]').getAttribute('aria-pressed') === 'true');

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
})();
