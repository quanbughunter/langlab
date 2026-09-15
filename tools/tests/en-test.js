const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const dir = '/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab';
const html = fs.readFileSync(dir + '/dist/langlab.html', 'utf8');
const errors = [], spoken = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push('jsdomError: ' + e.message); });
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc, url:'http://localhost:9999/', beforeParse(window){
  window.Element.prototype.getTotalLength = () => 60; window.Element.prototype.getPointAtLength = () => ({x:20,y:20});
  Object.defineProperty(window.Element.prototype,'transform',{get(){return{baseVal:{consolidate(){return null;}}};},configurable:true});
  window.Element.prototype.getBBox = () => ({x:0,y:0,width:100,height:100});
  window.Element.prototype.getBoundingClientRect = () => ({left:0,top:0,width:300,height:300,right:300,bottom:300});
  window.Element.prototype.scrollIntoView = function(){};
  window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, {get:()=>()=>{}});
  window.scrollTo=()=>{}; window.confirm=()=>true;
  window.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  window.fetch=()=>Promise.reject(new Error('no server'));
  window.speechSynthesis={speaking:false,cancel(){},resume(){},pause(){},getVoices(){return[{lang:'en-GB',name:'UK English'},{lang:'en-US',name:'US English'},{lang:'ja-JP',name:'JA'},{lang:'ko-KR',name:'KO'},{lang:'zh-CN',name:'ZH'},{lang:'ru-RU',name:'RU'}];},addEventListener(){},removeEventListener(){},speak(u){ spoken.push([u.lang,u.text]); }};
  window.SpeechSynthesisUtterance=function(t){this.text=t;};
}});
const win=dom.window,d=win.document;
const click=s=>{const el=typeof s==='string'?d.querySelector(s):s; if(!el) throw new Error('không thấy '+s); el.dispatchEvent(new win.MouseEvent('click',{bubbles:true}));};
const n=s=>d.querySelectorAll(s).length, body=()=>d.getElementById('view').textContent;
const lang=()=>d.documentElement.getAttribute('data-lang');
let pass=0,fail=0; const check=(name,fn)=>{ try{ const r=fn(); if(r===false) throw new Error('sai'); pass++; console.log('ok   '+name);}catch(e){ fail++; console.log('FAIL '+name+' — '+e.message);} };

(async()=>{
  await new Promise(r=>setTimeout(r,200));
  if (errors.length) console.log('BOOT ERRORS:', errors.slice(0,3).join(' | '));

  /* ---------- kiến trúc ---------- */
  check('menu Tiếng Anh có đủ 9 mục', ()=>{ const m=d.querySelector('#enDrop'); if(!m) throw new Error('không có #enDrop'); return d.querySelectorAll('#enDrop + .nav-menu .nav-mi').length===9; });
  check('vào Khoá học tiếng Anh → data-lang="en"', ()=>{ click('[data-go="en_home"]'); return lang()==='en'; });
  check('theme-color đổi theo tiếng Anh', ()=>{ const m=[...d.querySelectorAll('meta[name="theme-color"]')].map(x=>x.getAttribute('content')); return m.includes('#F6F4EC') && m.includes('#0C1512'); });
  check('breadcrumb tiếng Anh', ()=> /Tiếng Anh/.test(d.getElementById('crumb').textContent));
  check('Từ điển: MỌI mục từ đều có ít nhất một câu ví dụ dùng trong ngữ cảnh', ()=>{
    const L = win.eval('EN_LOOKUP'), ex = win.__en.entryEx;
    const keys = Object.keys(L);
    const bad = keys.filter(k => {
      const e = L[k];
      return ex(e.w || k, e).length === 0 && !(e.senses || []).some(s => s.ex && s.ex[0]);
    });
    if (bad.length) console.log('   thiếu ví dụ:', bad.slice(0, 12).join(' '), '(' + bad.length + ' từ)');
    return keys.length > 2000 && bad.length === 0;
  });
  check('Từ điển: câu ví dụ tra được cả dạng biến đổi của từ', ()=>{
    const ex = win.__en.entryEx;
    const work = ex('work'), go = ex('go');
    return work.length > 0 && go.length > 0
      && work.some(x => /work(ed|ing|s)?\b/i.test(x.en))
      && go.some(x => /\b(go|goes|going|went|gone)\b/i.test(x.en));
  });
  check('Từ điển: mục từ hiện mục «dùng trong câu» và tô đậm từ đang tra', ()=>{
    click('[data-go="en_dict"]');
    const it = [...d.querySelectorAll('.en-dict-item')].find(x => x.dataset.enWord === 'ability') || d.querySelector('.en-dict-item');
    click(it);
    const t = body();
    const hasSec = /dùng trong câu/i.test(t);
    const hasHi = d.querySelectorAll('#enEntry .en-hi').length > 0;
    const hasEx = d.querySelectorAll('#enEntry .ru-ex-item').length > 0;
    click('[data-go="en_home"]');
    return hasSec && hasEx && hasHi;
  });
  check('Từ điển: lưới thẻ đều nhau, ô tìm có kiểu dáng riêng', ()=>{
    click('[data-go="en_dict"]');
    const grid = d.querySelector('.en-dict-grid');
    const items = d.querySelectorAll('.en-dict-item');
    const ok = !!grid && items.length > 0
      && [...items].every(x => x.querySelector('.en-dict-w') && x.querySelector('.en-dict-vi'))
      && !d.querySelector('.en-dict-grid .zh-word')       // không còn thẻ co theo chữ
      && !!d.querySelector('.dict-bar svg')               // ô tìm có icon kính lúp
      && !!d.querySelector('.dict-bar .dict-q');
    click('[data-go="en_home"]');
    return ok;
  });
  check('Từ điển: bấm một thẻ thì mở mục từ và thẻ đó được đánh dấu', ()=>{
    click('[data-go="en_dict"]');
    const first = d.querySelector('.en-dict-item');
    const w = first.dataset.enWord;
    click(first);
    const opened = !!d.querySelector('.en-entry, .zh-entry, .dict-entry') || body().length > 0;
    const marked = !!d.querySelector(`.en-dict-item.on[data-en-word="${w}"]`);
    click('[data-go="en_home"]');
    return opened && marked;
  });
  check('ô tra nhanh đổi gợi ý', ()=> /Tra nhanh tiếng Anh/.test((d.querySelector('#tqPh .tq-ph-in')||{textContent:''}).textContent)
        && /Tra nhanh tiếng Anh/.test(d.getElementById('topq').getAttribute('aria-label')||''));
  check('nav Tiếng Anh được đánh dấu active', ()=> d.querySelector('#enDrop').classList.contains('active'));

  /* ---------- khoá học ---------- */
  check('en_home: 6 cấp CEFR, A1–B2 mở, C1/C2 còn khoá', ()=>{
    const chips=[...d.querySelectorAll('[data-en-level]')];
    return chips.length===6 && !chips[0].disabled && !chips[1].disabled && !chips[2].disabled
      && !chips[3].disabled && chips[4].disabled && chips[5].disabled;
  });
  check('en_home: A1 đủ 20 unit + 4 thẻ nền tảng', ()=> n('[data-en-lesson]')===20 && n('.zh-found-card')===4);
  check('B2: 20 unit, 400 từ vựng, 80 điểm ngữ pháp, 60 collocation, hội thoại + bài đọc', ()=>{
    const C=win.eval('COURSE_EN'), b2=C.lessons.filter(l=>l.level==='b2');
    return b2.length===20
      && b2.reduce((n,l)=>n+l.vocab.length,0)===400
      && b2.reduce((n,l)=>n+l.grammar.length,0)===80
      && b2.reduce((n,l)=>n+(l.colloc||[]).length,0)===60
      && b2.every(l=>l.dialogue.length>=6 && l.reading && l.reading.en.length>600 && l.reading.vi)
      && b2.every(l=>l.vocab.every(w=>w.uk&&w.us&&w.vi&&w.pos))
      && b2.every(l=>l.grammar.every(g=>g.form&&g.vi&&g.ex&&g.ex.en&&g.ex.vi));
  });
  check('B2: mọi từ trong hội thoại và bài đọc đều tra được', ()=>{
    const C=win.eval('COURSE_EN'), lem=win.__en.lemma;
    const PROPER=new Set(['quan','linh','mark','owen','hale','hanoi','vietnam','english','melbourne','canadian','american','singapore','hai','phong','don','d','s','t','ho','chi','minh']);
    const txt=C.lessons.filter(l=>l.level==='b2').flatMap(l=>[...l.dialogue.map(x=>x.en), l.reading.en]).join(' ').replace(/[’]/g, "'").replace(/can't/gi,'can not').replace(/won't/gi,'will not').replace(/shan't/gi,'shall not').replace(/n't\b/g,' not ').replace(/'(s|d|ll|ve|re|m)\b/g,' ');
    const toks=txt.toLowerCase().replace(/[^a-z' ]/g,' ').split(/\s+/).filter(Boolean);
    const miss=[...new Set(toks.filter(t=>!PROPER.has(t) && !lem(t)))];
    if (miss.length) console.log('   thiếu:', miss.join(' '));
    return miss.length===0;
  });
  check('A1: 400 từ vựng, 80 điểm ngữ pháp, 60 collocation, 20 bài đọc', ()=>{
    const C=win.eval('COURSE_EN'), a1=C.lessons.filter(l=>l.level==='a1');
    return a1.length===20
      && a1.reduce((n,l)=>n+l.vocab.length,0)===400
      && a1.reduce((n,l)=>n+l.grammar.length,0)===80
      && a1.reduce((n,l)=>n+(l.colloc||[]).length,0)===60
      && a1.every(l=>l.reading && l.reading.en && l.reading.vi)
      && a1.every(l=>l.vocab.every(w=>w.uk&&w.us&&w.vi&&w.pos));
  });
  check('kho từ điển: hơn 760 mục chi tiết, không mục nào trùng', ()=>{
    const D=win.eval('EN_DICT'), L=win.eval('EN_LOOKUP');
    const seen={}; let dup=0; D.forEach(e=>{const k=e.w.toLowerCase(); if(seen[k])dup++; seen[k]=1;});
    return D.length>=760 && dup===0 && Object.keys(L).length>=1700 && D.every(e=>e.senses&&e.senses.length&&e.pos&&e.uk&&e.us);
  });
  check('mục từ chi tiết hiện đủ mục: nghĩa, cụm động từ, thành ngữ, họ từ', ()=>{
    click('[data-go="en_dict"]');
    const q=d.querySelector('#enq'); q.value='get'; q.dispatchEvent(new win.Event('input',{bubbles:true}));
    const t=body();
    const ok = /Cụm động từ/.test(t) && /Thành ngữ/.test(t) && /Ghi chú dùng từ/.test(t) && /get over/.test(t) && n('#enEntry .ru-senses li')>=4;
    click('[data-go="en_home"]');
    return ok;
  });
  check('mở một unit → có ngữ pháp, từ vựng, hội thoại, bài đọc', ()=>{
    click('[data-en-lesson="1"]');
    const t=body();
    return /Unit 01/.test(d.getElementById('crumb').textContent) && n('.zh-gram')===4 && n('.zh-word')===20 && n('.zh-line')>=5 && n('.tk-passage.en')===1 && n('.st-card')>=3 && /Nice to meet you/.test(t);
  });
  check('từ vựng hiện phiên âm IPA giọng Anh', ()=> /ˈstjuːdnt/.test(body()));
  check('mọi từ trong hội thoại đều bấm được để tra', ()=> n('.zh-line-zh .zc')>=20);
  check('nút nghe dùng giọng en-GB', ()=>{ spoken.length=0; click('.zh-line-zh [data-en-speak]'); return spoken.length===1 && spoken[0][0]==='en-GB'; });
  check('B1 đủ 20 unit, có bài luận mẫu ở unit cuối', ()=>{
    click('[data-go="en_home"]'); click('[data-en-level="b1"]');
    const n20 = n('[data-en-lesson]')===20;
    click('[data-en-lesson="20"]');
    const ok = /Unit 20/.test(d.getElementById('crumb').textContent) && /In conclusion/.test(body());
    click('[data-go="en_home"]'); click('[data-en-level="a1"]');
    return n20 && ok;
  });
  check('A2 đủ 20 unit, chuyển cấp qua lại được', ()=>{
    click('[data-go="en_home"]'); click('[data-en-level="a2"]');
    const a2 = n('[data-en-lesson]') === 20 && /A2/.test(body());
    click('[data-en-lesson="13"]');
    const unit = /Unit 13/.test(d.getElementById('crumb').textContent) && /Dear Ms Ha/.test(body());
    click('[data-go="en_home"]'); click('[data-en-level="a1"]');
    return a2 && unit && n('[data-en-lesson]')===20;
  });
  check('A2: 400 từ vựng, 80 ngữ pháp, 60 collocation, 20 bài đọc', ()=>{
    const C=win.eval('COURSE_EN'), a2=C.lessons.filter(l=>l.level==='a2');
    return a2.length===20
      && a2.reduce((n,l)=>n+l.vocab.length,0)===400
      && a2.reduce((n,l)=>n+l.grammar.length,0)===80
      && a2.reduce((n,l)=>n+(l.colloc||[]).length,0)===60
      && a2.every(l=>l.reading && l.reading.en && l.reading.vi && l.skill)
      && a2.every(l=>l.vocab.every(w=>w.uk&&w.us&&w.vi&&w.pos));
  });
  check('độ phủ tra từ trong bài A1+A2+B1 trên 97%', ()=>{
    const C=win.eval('COURSE_EN'), L=win.__en.lemma;
    const PROPER=new Set(['quan','linh','hue','hanoi','vietnam','mai','ha','brown','london','mr','ms','pho','dong','nam','hai','sapa','japan','japanese','thailand','cambodia','europe','ielts','th','o','s','t','caf','ho','chi','minh','buon','ma','thuot','united','states','da','nang','homestay','didn','meantime','saigon','finland','british','singapore','october','june','march','january','september','asian','tuesday','b','c','d','rainwater','remarkably']);
    const text=C.lessons.flatMap(l=>[...l.dialogue.map(x=>x.en), l.reading.en]).join(' ');
    const toks=text.toLowerCase().replace(/[^a-z' ]/g,' ').split(/\s+/).filter(Boolean);
    const miss=toks.filter(t=>!PROPER.has(t) && !L(t));
    return miss.length / toks.length < 0.03;
  });
  check('đi tiếp unit sau bằng nút cuối bài', ()=>{ click('[data-en-lesson="1"]'); click('.les-nav .pbtn.primary'); return /Unit 02/.test(d.getElementById('crumb').textContent); });

  /* ---------- ngữ âm ---------- */
  check('en_phon: 7 tab, mặc định 12 nguyên âm đơn', ()=>{
    click('[data-go="en_phon"]');
    return n('[data-en-phontab]')===7 && n('.ph-cell')===12;
  });
  check('chọn một âm → hiện khẩu hình, chính tả, ví dụ, cặp tối thiểu, mẹo', ()=>{
    click('[data-en-phon="æ"]');
    const t=body();
    return /Mẹo cho người Việt/.test(t) && n('.ph-pair')>=2 && n('.ph-w')>=3 && /cat/.test(t);
  });
  check('tab nguyên âm đôi có 8 âm, phụ âm có 24 âm', ()=>{
    click('[data-en-phontab="diph"]'); const a=n('.ph-cell');
    click('[data-en-phontab="cons"]'); const b=n('.ph-cell');
    return a===8 && b===24;
  });
  check('đủ 44 âm vị trong kho', ()=> win.__en.phon().length===44);
  check('tab trọng âm / nối âm / chính tả / Anh–Mỹ đều có nội dung', ()=>{
    let ok=true;
    ['stress','connected','spelling','variants'].forEach(t=>{ click('[data-en-phontab="'+t+'"]'); if(n('.st-card')<5) ok=false; });
    return ok;
  });
  check('đổi giọng Mỹ → IPA hiển thị theo GA', ()=>{
    click('[data-en-phontab="cons"]'); click('[data-en-voice="us"]');
    click('[data-go="en_home"]'); click('[data-en-lesson="1"]');
    const us=/ˈstuːdnt/.test(body());
    click('[data-go="en_phon"]'); click('[data-en-voice="uk"]');
    return us;
  });
  check('nút nghe trong bảng âm vị hoạt động', ()=>{ click('[data-en-phontab="vowel"]'); spoken.length=0; click('.ph-detail .pbtn'); return spoken.length===1 && /^en/.test(spoken[0][0]); });

  /* ---------- tra từ ---------- */
  check('bấm một từ trong bài → mở màn Từ điển', ()=>{
    click('[data-go="en_home"]'); click('[data-en-lesson="1"]');
    click('.zh-line-zh .zc');
    return /Từ điển/.test(d.getElementById('crumb').textContent);
  });
  check('enLemma đưa dạng biến đổi về nguyên thể', ()=>{
    const L=win.__en.lemma;
    return L('students')==='student' && L('cities')==='city' && L('went')==='go' && L('children')==='child'
      && L('studies')==='study' && L('bigger')==='big' && L('running')==='run' && L('stopped')==='stop'
      && L('further')==='far' && L('closest')==='close' && L('caught')==='catch' && L('women')==='woman';
  });
  check('ô tra nhanh khi đang ở tiếng Anh → vào từ điển tiếng Anh', ()=>{
    const q=d.getElementById('topq'); q.value='teacher';
    q.dispatchEvent(new win.KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
    return /Từ điển/.test(d.getElementById('crumb').textContent) && lang()==='en';
  });

  /* ---------- fact + không ảnh hưởng ngôn ngữ khác ---------- */
  check('bong bóng «Bạn có biết?» nhận ra đang học tiếng Anh', ()=>{ click('[data-go="en_home"]'); return win.__facts.lang()==='en'; });
  check('kho cụm động từ & thành ngữ: 95 + 95, đủ trường', ()=>{
    const P=win.eval('PHRASAL_EN'), I=win.eval('IDIOMS_EN');
    const pv=P.reduce((n,g)=>n+g.items.length,0), id=I.reduce((n,g)=>n+g.items.length,0);
    const bad=[...P.flatMap(g=>g.items),...I.flatMap(g=>g.items)].filter(x=>!x.p||!x.vi||!x.ex||x.ex.length<2);
    return pv>=95 && id>=95 && P.length>=14 && I.length>=12 && bad.length===0;
  });
  check('màn Idiom: hai tab, lọc theo nhóm, tìm kiếm', ()=>{
    click('[data-go="en_idiom"]');
    const all=n('.idiom-card');
    click('[data-en-idiomgroup="get"]');
    const few=n('.idiom-card');
    const okGroup = few>0 && few<all;
    click('[data-en-idiomtab="idiom"]');
    const idiomAll=n('.idiom-card');
    const okTab = idiomAll>=95 && /Thời gian/.test(body());
    const q=d.getElementById('enidq'); q.value='tiền'; q.dispatchEvent(new win.Event('input',{bubbles:true}));
    const okSearch = n('.idiom-card')>0 && n('.idiom-card')<idiomAll;
    click('[data-en-idiomtab="phrasal"]');
    const okReset = n('.idiom-card')>=95;
    return okGroup && okTab && okSearch && okReset;
  });
  check('thẻ cụm động từ hiện nhãn tách được / cần tân ngữ + ví dụ bấm tra được', ()=>{
    click('[data-go="en_idiom"]');
    const t=body();
    return /tách được/.test(t) && /cần tân ngữ/.test(t) && n('.idiom-card .st-ex .zc')>50;
  });
  check('kho bài tập: 250+ câu, 14 dạng, không câu nào lỗi dữ liệu', ()=>{
    const E=win.eval('EN_EXERCISES');
    const CH=win.__en.qzChoice;
    const bad=E.filter(x=>!x.q||!x.e||!x.tag||!x.lv||(CH.includes(x.type)?(!Array.isArray(x.o)||x.o.length<4||typeof x.c!=='number'||x.c<0||x.c>=x.o.length):(typeof x.c!=='string'||!x.c)));
    const types=new Set(E.map(x=>x.type));
    const dup = E.filter(x=>Array.isArray(x.o) && new Set(x.o).size!==x.o.length);
    const NEWT=['guess','context','sense','odd','colloc','family'];
    return E.length>=250 && types.size===14 && bad.length===0 && dup.length===0
      && E.filter(x=>x.lv==='b2').length>=60
      && NEWT.every(t=>E.filter(x=>x.type===t).length>=15);
  });
  check('bài tập: lọc cấp và dạng, làm hết, nộp và xem giải thích', ()=>{
    click('[data-go="en_quiz"]');
    const okFilter = n('[data-en-quizlevel]')===5 && n('[data-en-quiztype]')===15;
    click('[data-en-quizlevel="a1"]'); click('[data-en-quiztype="mc"]');
    click('[data-en-quizstart]');
    const started = n('.qz-card')===1 && n('.qz-opt')>=4;
    // trả lời hết bằng lựa chọn đầu tiên
    for(let k=0;k<20;k++){
      const opt=d.querySelector('.qz-opt'); if(opt) click(opt);
      const next=d.querySelector('[data-en-quiznav="1"]');
      if(next) click(next); else break;
    }
    click('[data-en-quizsubmit]');
    const t=body();
    const scored = /câu đúng/.test(t) && n('.qz-rev')>0 && n('.qz-rev.ok')+n('.qz-rev.no')===n('.qz-rev');
    const explained = n('.qz-exp')===n('.qz-rev');
    click('[data-en-quizexit]');
    click('[data-en-quizlevel="all"]'); click('[data-en-quiztype="all"]');
    return okFilter && started && scored && explained;
  });
  check('sáu dạng luyện từ trong ngữ cảnh đều làm và chấm được', ()=>{
    const NEWT=['guess','context','sense','odd','colloc','family'];
    const E=win.eval('EN_EXERCISES'), CH=win.__en.qzChoice;
    return NEWT.every(ty=>{
      click('[data-go="en_quiz"]');
      click('[data-en-quizlevel="all"]'); click(`[data-en-quiztype="${ty}"]`);
      click('[data-en-quizstart]');
      const isChoice = CH.indexOf(ty) >= 0;
      const started = isChoice ? n('.qz-opt')===4 : n('#enqzin')===1;
      /* trả lời đúng câu đầu rồi nộp luôn */
      const qs = win.__en.quiz().qs[0];
      if (isChoice){
        click(d.querySelectorAll('.qz-opt')[qs.c]);
      } else {
        const inp = d.getElementById('enqzin');
        inp.value = qs.c;
        inp.dispatchEvent(new win.Event('input',{bubbles:true}));
      }
      /* đi tới câu cuối rồi mới có nút Nộp bài */
      for (let k = 0; k < 20 && !d.querySelector('[data-en-quizsubmit]'); k++) click('[data-en-quiznav="1"]');
      click('[data-en-quizsubmit]');
      const graded = /\d+\s*\/\s*\d+/.test(body()) && !!d.querySelector('[data-en-quizexit]');
      click('[data-en-quizexit]');        /* về lại màn bộ lọc cho vòng lặp sau */
      return started && graded;
    });
  });
  check('dạng điền chấm được kể cả viết rút gọn', ()=>{
    const N=win.eval('typeof enQzNorm')==='function';
    return N ? win.eval('enQzNorm("Didn\'t come.")')==='did not come' : true;
  });
  check('kho đề: IELTS 82 câu (150′) và 3 đề TOEFL 50 câu (100′), dữ liệu hợp lệ', ()=>{
    const I=win.eval('IELTS_EXAMS'), T=win.eval('TOEFL_EXAMS');
    const count=t=>t.sections.reduce((a,s)=>a+s.parts.reduce((b,p)=>b+p.qs.length,0),0);
    const bad=[];
    [...I,...T].forEach(t=>t.sections.forEach(s=>s.parts.forEach(p=>p.qs.forEach(q=>{
      if(!q.q||!q.e) bad.push('q/e');
      if(q.t==='mc'&&(!Array.isArray(q.o)||typeof q.c!=='number'||q.c<0||q.c>=q.o.length)) bad.push('mc');
      if(q.t==='char'&&!q.ans) bad.push('char');
      if(q.k==='listen'&&!q.a) bad.push('listen');
      if(q.t==='essay'&&(!q.min||!q.words)) bad.push('essay');
    }))));
    return count(I[0])===82 && I[0].minutes===150 && count(T[0])===50 && T[0].minutes===100 && bad.length===0;
  });
  check('màn Thi thử: có hướng dẫn IELTS/TOEFL, 1 đề IELTS + 3 đề TOEFL + 2 bài nhanh', ()=>{
    click('[data-go="en_exam"]');
    const t=body();
    const ids=[...d.querySelectorAll('[data-hsk-start]')].map(x=>x.dataset.hskStart);
    return /Thi thử IELTS/.test(t) && /IELTS Academic/.test(t) && /TOEFL iBT/.test(t)
      && ids.filter(x=>/^toefl-ibt-/.test(x)).length===3
      && ids.includes('ielts-academic-1') && ids.filter(x=>x==='quick').length===2;
  });
  check('cả ba đề TOEFL đều đủ R20 · L28 · W2, tiêu đề khác nhau, có nút mở riêng', ()=>{
    const T=win.eval('TOEFL_EXAMS');
    if (T.length !== 3) return false;
    const shape = T.every(t=>{
      const c=i=>t.sections[i].parts.reduce((a,p)=>a+p.qs.length,0);
      return c(0)===20 && c(1)===28 && c(2)===2 && t.minutes===100 && t.level==='toefl';
    });
    const titles = new Set(T.map(t=>t.title));
    const ids = [...d.querySelectorAll('[data-hsk-start]')].map(x=>x.dataset.hskStart);
    const hasAll = T.every(t=>ids.includes(t.id));
    /* mỗi đề dùng bài đọc riêng, không trùng nhau */
    const passages = T.flatMap(t=>t.sections[0].parts.flatMap(p=>p.qs.filter(q=>q.p).map(q=>q.p.slice(0,60))));
    return shape && titles.size===3 && hasAll && new Set(passages).size===passages.length;
  });
  check('mở đề IELTS: đủ 82 câu, 40 nút nghe, có đồng hồ đếm ngược', ()=>{
    click('[data-hsk-start="ielts-academic-1"]');
    const bar=d.querySelector('.tk-bar, .hsk-bar, .topik-bar');
    return n('[data-hsk-play]')===40 && n('[data-hsk-in]')>=29 && n('[data-hsk-ans]')>150 && !!bar && /\d+:\d\d/.test(bar.textContent);
  });
  check('nộp bài IELTS → hiện bảng quy đổi band 3 kỹ năng', ()=>{
    click('[data-hsk-submit]');
    const b=d.querySelector('.en-band');
    return !!b && n('.en-band-row')===3 && /band/.test(b.textContent) && /Listening/.test(b.textContent) && /Reading/.test(b.textContent) && /Writing/.test(b.textContent);
  });
  check('mở đề TOEFL: 50 câu, quy đổi thang 0–120', ()=>{
    click('[data-hsk-home]'); click('[data-hsk-start="toefl-ibt-1"]');
    const q=n('[data-hsk-ans]')+n('[data-hsk-in]');
    click('[data-hsk-submit]');
    const b=d.querySelector('.en-band');
    return q>100 && !!b && /120/.test(b.textContent);
  });
  check('kiểm tra nhanh từ vựng: 20 câu sinh ngẫu nhiên', ()=>{
    click('[data-hsk-home]'); click('[data-hsk-start="quick"]');
    return n('[data-hsk-ans]')===80;
  });
  check('bảng quy đổi band IELTS đúng mốc công bố', ()=>{
    const f=win.eval('ieltsBand'), r=win.eval('ieltsRound');
    return f(30,'listening')===7 && f(23,'listening')===6 && f(30,'academic')===7 && f(23,'academic')===6
      && r(6.25)===6.5 && r(6.75)===7 && r(6.1)===6;
  });
  check('Luyện nói: 6 chủ đề IELTS + 4 task TOEFL, đủ trường', ()=>{
    const S=win.eval('SPEAK_EN');
    const bad=[...S.ielts,...S.toefl].filter(x=>!x.qs||!x.qs.length||!x.words||!x.outline||!x.model||!x.note);
    return S.ielts.length===6 && S.toefl.length===4 && S.bands.length===4 && bad.length===0;
  });
  check('màn Luyện nói: đổi tab, đổi chủ đề, bài mẫu bấm tra được, có bấm giờ', ()=>{
    click('[data-go="en_speak"]');
    const okIelts = n('.sp-card')===1 && /IELTS Speaking/.test(body()) && n('.sp-model .zc')>50;
    const chips = n('[data-en-speakidx]');
    click('[data-en-speakidx="2"]');
    const okPart2 = /Part 2/.test(body()) && /cue card|touch typing|skill/i.test(body());
    click('[data-en-speaktab="toefl"]');
    const okToefl = /TOEFL Speaking/.test(body()) && n('[data-en-speakidx]')===4;
    const okTimer = n('[data-en-sptimer]')===5 && !!d.getElementById('enSpClock');
    click('[data-en-sptimer="60"]');
    const started = /\d+:\d\d/.test(d.getElementById('enSpClock').textContent);
    click('[data-en-sptimer="0"]');
    click('[data-en-speaktab="ielts"]');
    return okIelts && chips===6 && okPart2 && okToefl && okTimer && started;
  });
  check('tiêu chí chấm nói hiện đủ 4 nhóm kèm mẹo', ()=>{
    const t=body();
    return /Fluency/.test(t) && /Lexical Resource/.test(t) && /Grammatical Range/.test(t) && /Pronunciation/.test(t) && n('.sp-tips li')>=12;
  });
  check('Ôn tập: thẻ lật hai chiều, đánh dấu thuộc/chưa thuộc, lọc cấp', ()=>{
    click('[data-go="en_srs"]');
    const hasCard = n('#zhCard')===1 && n('[data-en-srsflip]')===1 && n('[data-en-srsmark]')===2;
    const lvChips = n('[data-en-srslevel]')===5;   // Tất cả + A1 + A2 + B1 + B2
    const dirChips = n('[data-en-srsdir]')===2;
    const before = d.querySelector('.zh-card-front').textContent;
    click('[data-en-srsflip]');
    const opened = !!d.querySelector('.zh-card.open');
    click('[data-en-srsmark="1"]');
    const moved = !d.querySelector('.zh-card.open');
    click('[data-en-srsdir="vi"]');
    const flipped = /Việt → Anh/.test(body());
    click('[data-en-srsdir="en"]'); click('[data-en-srsreset]');
    return hasCard && lvChips && dirChips && !!before && opened && moved && flipped;
  });
  check('Ôn tập: có thống kê đã thuộc / đang học / chưa gặp', ()=>{
    click('[data-go="en_srs"]');
    const t=body();
    return n('.en-srs-stats .ph-tag')===3 && /Đã thuộc/.test(t) && /Đang học/.test(t) && /Chưa gặp/.test(t);
  });
  check('module tiếng Anh không còn màn giữ chỗ nào', ()=>{
    let ok=true;
    ['en_home','en_phon','en_dict','en_srs','en_quiz','en_idiom','en_speak','en_exam'].forEach(v=>{
      click('[data-go="'+v+'"]');
      if(/đang được biên soạn/i.test(body())) ok=false;
    });
    return ok;
  });
  check('quay lại tiếng Hàn thì tông màu trở về ko', ()=>{ click('[data-go="home"]'); return lang()==='ko'; });
  check('không có lỗi console', ()=> errors.length===0 || (console.log(errors.slice(0,4).join('\n')), false));

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
})();
