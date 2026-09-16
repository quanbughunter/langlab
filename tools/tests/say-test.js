/* Kiểm nút dừng đọc: thanh nổi hiện khi phát, stopAudio cắt được Web Speech */
const fs=require('fs'), {JSDOM}=require('jsdom');
const html=fs.readFileSync('/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab/dist/langlab.html','utf8');
const dom=new JSDOM(html,{runScripts:'dangerously',pretendToBeVisual:true,url:'https://x/'});
const win=dom.window,d=win.document;
let cancelled=0, spoken=[];
win.speechSynthesis={
  getVoices:()=>[{lang:'zh-CN',name:'Chinese'},{lang:'ru-RU',name:'Russian'},{lang:'ja-JP',name:'Japanese'},{lang:'en-GB',name:'British'}],
  speak(u){ spoken.push(u.lang); win.speechSynthesis._u=u; },
  cancel(){ cancelled++; },
  addEventListener(){}, removeEventListener(){}, speaking:false, paused:false
};
win.SpeechSynthesisUtterance=function(t){ this.text=t; };
let pass=0,fail=0;
const check=(n,f)=>{ let ok=false; try{ ok=!!f(); }catch(e){ ok=false; } ok?pass++:fail++; console.log((ok?'ok   ':'FAIL ')+n+(ok?'':' — sai')); };
const click=s=>{const b=d.querySelector(s); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true}));};
const bar=()=>d.getElementById('sayBar');
const shown=()=>{const b=bar(); return !!b && b.classList.contains('show');};
(async()=>{
  await new Promise(r=>setTimeout(r,400));
  check('chưa phát thì chưa có thanh dừng', ()=> !shown());
  click('[data-go="zh_dict"]');
  click('[data-zh-speak]');
  await new Promise(r=>setTimeout(r,80));
  check('tiếng Trung: phát → hiện thanh dừng', ()=> shown() && spoken.includes('zh-CN'));
  check('thanh dừng có nút bấm được', ()=> !!d.querySelector('[data-say-stop]'));
  click('[data-say-stop]');
  check('bấm Dừng → cancel() được gọi + thanh ẩn', ()=> cancelled>0 && !shown());
  cancelled=0;
  click('[data-go="ru_dict"]'); click('[data-ru-speak]');
  await new Promise(r=>setTimeout(r,80));
  check('tiếng Nga: phát → hiện thanh dừng', ()=> shown() && spoken.includes('ru-RU'));
  click('[data-say-stop]');
  check('tiếng Nga: dừng được', ()=> cancelled>0 && !shown());
  cancelled=0;
  click('[data-go="ja_dict"]'); click('[data-ja-speak]');
  await new Promise(r=>setTimeout(r,80));
  check('tiếng Nhật: phát → hiện thanh dừng', ()=> shown() && spoken.includes('ja-JP'));
  click('[data-say-stop]');
  check('tiếng Nhật: dừng được', ()=> cancelled>0 && !shown());
  cancelled=0;
  click('[data-go="en_dict"]');
  (function(){ const q=d.querySelector('#enq,.dict-q,input[type=search]'); if(q){ q.value='water'; q.dispatchEvent(new win.Event('input',{bubbles:true})); } })();
  await new Promise(r=>setTimeout(r,120));
  click('[data-en-speak]');
  await new Promise(r=>setTimeout(r,80));
  check('tiếng Anh: phát → hiện thanh dừng', ()=> shown() && spoken.includes('en-GB'));
  // Esc cũng dừng
  cancelled=0;
  d.dispatchEvent(new win.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
  check('phím Esc dừng được', ()=> cancelled>0 && !shown());
  // đổi màn cũng dừng
  click('[data-go="zh_dict"]'); click('[data-zh-speak]');
  await new Promise(r=>setTimeout(r,80));
  const was=shown();
  click('[data-go="about"]');
  check('đổi màn hình thì tự dừng', ()=> was && !shown());
  console.log('\n'+pass+' đạt / '+fail+' lỗi');
  process.exit(fail?1:0);
})();
