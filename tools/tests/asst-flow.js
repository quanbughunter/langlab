const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const dir = '/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab';
const html = fs.readFileSync(dir + '/dist/langlab.html', 'utf8');
const vc = new VirtualConsole(); const errors = [];
vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push('jsdomError: ' + e.message); });
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc, url:'http://localhost:9999/',
  beforeParse(window){
    window.scrollTo = () => {};
    window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get: () => () => {} });
    window.Element.prototype.getBoundingClientRect = () => ({left:0,top:0,width:452,height:400,right:452,bottom:400});
    window.speechSynthesis = { getVoices(){return [];}, cancel(){}, speak(u){ if(u&&u.onend) setTimeout(u.onend,0); }, speaking:false, paused:false, resume(){}, pause(){}, addEventListener(){}, removeEventListener(){} };
    window.SpeechSynthesisUtterance = function(t){ this.text = t; };
  }});
const { window } = dom, d = window.document;
const click = el => el.dispatchEvent(new window.MouseEvent('click', { bubbles:true }));
const ptr = (el, type, x, y) => el.dispatchEvent(new window.MouseEvent(type, { clientX:x, clientY:y, bubbles:true }));
const wait = (cond, ms=2500) => new Promise((res,rej)=>{ const t0=Date.now(); (function p(){ if(cond())return res(); if(Date.now()-t0>ms)return rej(new Error('timeout')); setTimeout(p,20);})(); });
let pass=0, fail=0; const ok=(n,c)=>{(c?pass++:fail++);console.log((c?'ok   ':'FAIL ')+n);};

window.fetch = (url) => {
  const u = String(url);
  const R = obj => Promise.resolve({ ok:true, json:()=>Promise.resolve(obj) });
  if (u.endsWith('/_chat')) return R({ reply:'Xin chào, mình là Labi.' });
  if (u.endsWith('/_audio')) return R({ lang:'ko', langVi:'Tiếng Hàn', sentences:[
    { text:'저는 학생이에요.', vi:'Tôi là học sinh.', words:[{w:'저는',rom:'jeoneun',vi:'tôi'},{w:'학생이에요',rom:'',vi:'là học sinh'}] },
    { text:'가나다라마 좋아요.', vi:'Ga-na-da tốt.', words:[{w:'가나다라마',rom:'ganadarama',vi:'(từ thử)'},{w:'좋아요',rom:'joayo',vi:'tốt'}] } ] });
  if (u.endsWith('/_translate/status')) return R({ ok:true, chat:true, audio:true });
  if (u.endsWith('/_translate')) return R({ translations: {} });
  return Promise.reject(new Error('no'));
};

setTimeout(async () => {
  try {
    // MỞ cửa sổ nổi Labi từ nav
    click(d.querySelector('#labiNav'));
    const panel = d.getElementById('labiPanel');
    ok('Labi: mở được cửa sổ nổi từ nav', panel && panel.classList.contains('open'));
    ok('Labi: nav được đánh dấu đang mở', d.querySelector('#labiNav').getAttribute('aria-current') === 'true');
    ok('Labi: có tiêu đề + nút đóng/thu gọn', !!d.querySelector('#labiPanel .fw-head #labiClose') && !!d.querySelector('#labiPanel #labiMin'));
    ok('Labi: có linh vật chữ A chibi + «cùng học nhé!!!»',
       !!d.querySelector('#labiPanel .labi-hi .labi-mascot') &&
       d.querySelectorAll('#labiPanel .labi-mascot .labi-eye').length === 2 &&
       /cùng học nhé!!!/.test(d.querySelector('#labiPanel .labi-hi').textContent) &&
       !d.querySelector('#labiPanel .asst-intro'));
    ok('Labi: ô chat dùng lời mời mới', (d.getElementById('asstInput')||{}).placeholder === 'hỏi gì hỏi đi… (Enter để gửi)');

    // KÉO cửa sổ đi chỗ khác
    const head = d.querySelector('#labiPanel .fw-title');
    ptr(head, 'pointerdown', 500, 90);
    ptr(d, 'pointermove', 200, 300);
    ptr(d, 'pointerup', 200, 300);
    ok('Labi: kéo-thả di chuyển được (có toạ độ)', panel.style.left !== '' && panel.style.top !== '');
    const pos = JSON.parse(window.localStorage.getItem('langlab.labiPos') || 'null');
    ok('Labi: lưu vị trí sau khi kéo', pos && typeof pos.left === 'number');

    // CHAT trong cửa sổ nổi
    d.getElementById('asstInput').value = 'chào Labi';
    click(d.querySelector('[data-asst-send]'));
    await wait(() => d.querySelector('#labiPanel .asst-msg.assistant .asst-bubble:not(.typing)'));
    ok('Labi: chat trả lời được trong cửa sổ nổi', d.body.textContent.includes('mình là Labi'));

    // AUDIO trong cửa sổ nổi: tách câu, sửa ngắt
    click(d.querySelector('[data-asst-tab="audio"]'));
    const fileInput = d.getElementById('asstFile');
    const file = new window.File([new Uint8Array([1,2,3,4])], 'test.mp3', { type:'audio/mpeg' });
    Object.defineProperty(fileInput, 'files', { value:[file], configurable:true });
    fileInput.dispatchEvent(new window.Event('change', { bubbles:true }));
    await wait(() => d.querySelector('#labiPanel .asst-line'));
    ok('Labi: audio hiện các câu trong cửa sổ', d.querySelectorAll('#labiPanel .asst-line').length === 2);
    ok('Labi: ghi chú audio đổi thành câu mì tôm',
       /pha mì tôm/.test((d.querySelector('#labiPanel .asst-note')||{textContent:''}).textContent) &&
       !/gửi tới máy chủ AI/.test(d.querySelector('#labiPanel').textContent));
    click(d.querySelector('[data-asst-edit]'));
    await wait(() => d.getElementById('asstEditBox'));
    d.getElementById('asstEditBox').value = '저는 학생이에요.\n가나다라마 좋아요.\n반갑습니다.';
    click(d.querySelector('[data-asst-edit-apply]'));
    await wait(() => d.querySelectorAll('#labiPanel .asst-line').length === 3);
    ok('Labi: sửa ngắt câu → 3 dòng', d.querySelectorAll('#labiPanel .asst-line').length === 3);

    // THU GỌN rồi ĐÓNG
    click(d.querySelector('#labiMin'));
    ok('Labi: thu gọn được', panel.classList.contains('collapsed'));
    click(d.querySelector('#labiMin'));
    click(d.querySelector('#labiClose'));
    ok('Labi: đóng được', !panel.classList.contains('open'));

    // MỞ LẠI: giữ nội dung + vị trí đã kéo
    click(d.querySelector('#labiNav'));
    ok('Labi: mở lại giữ vị trí đã kéo', d.getElementById('labiPanel').style.left === (pos.left + 'px'));

    if (errors.length) { console.log('LỖI JS:', errors.slice(0,3).join(' | ')); fail += errors.length; }
    console.log('\n'+pass+' đạt / '+fail+' lỗi');
    process.exit(fail?1:0);
  } catch(e){ console.log('FAIL runner → '+e.message); process.exit(1); }
}, 400);
