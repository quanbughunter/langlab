/* Thư viện bài đọc — kiểm thử jsdom */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const errors = [];
const vc = new VirtualConsole(); vc.on('jsdomError', e => errors.push(e.message));
const spoken = [];
const html = fs.readFileSync('/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab/dist/langlab.html','utf8');
const dom = new JSDOM(html,{runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,url:'http://localhost:9999/',beforeParse(w){
 w.Element.prototype.getBBox=()=>({x:0,y:0,width:100,height:100}); w.Element.prototype.scrollIntoView=function(){};
 w.Element.prototype.getBoundingClientRect=()=>({left:0,top:0,width:300,height:300,right:300,bottom:300});
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:()=>()=>{}});
 w.scrollTo=()=>{}; w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
 w.fetch=()=>Promise.reject(new Error('x'));
 w.speechSynthesis={getVoices:()=>[{lang:'ko-KR'},{lang:'zh-CN'},{lang:'ja-JP'},{lang:'ru-RU'},{lang:'en-GB'}],addEventListener(){},removeEventListener(){},cancel(){},speak(u){spoken.push(u.lang);setTimeout(()=>u.onend&&u.onend(),5);}};
 w.SpeechSynthesisUtterance=function(t){this.text=t;};
}});
const win=dom.window,d=win.document;
const $=s=>d.querySelector(s), n=s=>d.querySelectorAll(s).length;
const click=s=>{const e=typeof s==='string'?$(s):s; if(e) e.dispatchEvent(new win.MouseEvent('click',{bubbles:true}));};
const body=()=>d.getElementById('view').textContent;
let pass=0,fail=0;
const check=(name,fn)=>{let ok=false;try{ok=!!fn();}catch(e){console.log('   ✗ '+e.message);}if(ok){pass++;console.log('ok   '+name);}else{fail++;console.log('FAIL '+name+' — sai');}};

setTimeout(()=>{
  check('kho bài đọc: dữ liệu đủ trường, mỗi ngôn ngữ đều có bài', ()=>{
    const R = win.eval('READINGS');
    const by = {}; R.forEach(r=>by[r.lang]=(by[r.lang]||0)+1);
    const bad = R.filter(r => !r.title || !r.vi || !r.intro || !r.after
      || !Array.isArray(r.text) || !Array.isArray(r.tr) || r.text.length !== r.tr.length
      || (r.keys||[]).length < 6 || (r.qs||[]).length < 3
      || r.qs.some(q => !q.o || q.o.length !== 4 || typeof q.c !== 'number' || !q.e || new Set(q.o).size !== 4)
      || r.keys.some(k => !k.w || !k.vi));
    if (bad.length) console.log('   bài lỗi:', bad.map(x=>x.title).join(' | '));
    return R.length >= 20 && ['ko','zh','ru','ja','en'].every(l => by[l] >= 3) && by.en >= 8 && bad.length === 0;
  });

  click('#rdNav');
  check('Bài đọc là mục cấp 1 trên navbar, mở ra danh sách thẻ', ()=>
    !!$('.nav-main > #rdNav') && n('[data-rd-lang]') === 5 && n('.rd-card') > 0);

  const LANGS = [['ko','ko'],['zh','zh'],['ja','ja'],['ru','ru'],['en','en']];
  LANGS.forEach(([id,cls])=>{
    check('tiếng «'+id+'»: mở được bài, có từ bấm tra, tông màu đúng', ()=>{
      click(`[data-rd-lang="${id}"]`);
      const cards = n('.rd-card');
      click('.rd-card');
      const paras = n('.rd-para');
      const toks = n('.rd-para-x .zc, .rd-para-x .kw');
      const keys = n('.rd-key');
      const okLang = d.documentElement.getAttribute('data-lang') === cls;
      click('[data-rd-back]');
      return cards >= 3 && paras >= 3 && toks >= paras && keys >= 6 && okLang;
    });
  });

  check('bản dịch bật/tắt được theo từng đoạn', ()=>{
    click('[data-rd-lang="en"]'); click('.rd-card');
    const off = n('.rd-para-vi') === 0;
    click('[data-rd-tr]');
    const on = n('.rd-para-vi') === n('.rd-para');
    click('[data-rd-tr]');
    return off && on && n('.rd-para-vi') === 0;
  });

  check('câu hỏi hiểu bài: chấm ngay, hiện giải thích, làm lại được', ()=>{
    const q0 = d.querySelectorAll('.rd-q')[0];
    const opts = q0.querySelectorAll('.rd-opt');
    click(opts[0]);
    const marked = n('.rd-opt.ok') >= 1 && n('.rd-q-e') === 1;
    const locked = (()=>{ const o=d.querySelectorAll('.rd-q')[0].querySelectorAll('.rd-opt'); click(o[1]); return n('.rd-q-e')===1; })();
    click('[data-rd-reset]');
    return marked && locked && n('.rd-q-e') === 0;
  });

  check('trả lời đúng hết thì điểm bằng số câu hỏi', ()=>{
    const R = win.eval('READINGS').filter(r=>r.lang==='en')[0];
    R.qs.forEach((q,i)=>{ const qs=d.querySelectorAll('.rd-q')[i]; if(qs) click(qs.querySelectorAll('.rd-opt')[q.c]); });
    return new RegExp(R.qs.length+'/'+R.qs.length).test(body());
  });

  check('nút nghe dùng đúng giọng của ngôn ngữ đang đọc', ()=>{
    click('[data-rd-back]'); click('[data-rd-lang="ru"]'); click('.rd-card');
    spoken.length = 0;
    const b = $('.rd-para-x .icon-btn, .rd-para-x .mini, .sh-bar .pbtn[data-ru-speak]');
    if (b) click(b);
    return spoken.length === 0 || /^ru/.test(spoken[0] || 'ru');
  });

  check('back quay lại danh sách rồi mới rời màn Bài đọc', ()=>{
    click('[data-rd-back]');
    click('[data-rd-lang="en"]'); click('.rd-card');
    const inArticle = n('.rd-para') > 0;
    win.history.back();
    return inArticle;
  });

  setTimeout(()=>{
    check('sau khi lùi lịch sử thì về danh sách bài đọc', ()=> n('.rd-card') > 0 && n('.rd-para') === 0);
    check('không có lỗi console', ()=>{ if(errors.length) console.log('   '+errors.slice(0,2).join(' | ')); return errors.length===0; });
    console.log('\n'+pass+' đạt / '+fail+' lỗi');
    process.exit(fail?1:0);
  }, 120);
}, 700);
