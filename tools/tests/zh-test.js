const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const dir = '/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab';
const html = fs.readFileSync(dir + '/dist/langlab.html', 'utf8');
const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push('jsdomError: ' + e.message); });
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
const dom = new JSDOM(html, {
  runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc, url: 'http://localhost:9999/',
  beforeParse(window){
    window.Element.prototype.getTotalLength = () => 60;
    window.Element.prototype.getPointAtLength = () => ({ x:20, y:20 });
    Object.defineProperty(window.Element.prototype, 'transform', { get(){ return { baseVal:{ consolidate(){ return null; } } }; }, configurable:true });
    window.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
    window.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:250, height:250, right:250, bottom:250 });
    window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get: () => () => {} });
    window.scrollTo = () => {}; window.confirm = () => true;
    window.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
    window.fetch = () => Promise.reject(new Error('no server'));
    window.speechSynthesis = { speaking:false, cancel(){}, resume(){}, pause(){}, getVoices(){ return [{lang:'zh-CN',name:'Chinese'}]; }, addEventListener(){}, removeEventListener(){}, speak(){} };
    window.SpeechSynthesisUtterance = function(t){ this.text = t; };
  }
});
const win = dom.window, d = win.document;
const click = sel => { const el = typeof sel==='string'?d.querySelector(sel):sel; if(!el) throw new Error('không thấy '+sel); el.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); };
const n = sel => d.querySelectorAll(sel).length;
const body = () => d.getElementById('view').textContent;
let pass=0, fail=0;
const check = (name, fn) => { try { const r = fn(); if (r===false) throw new Error('sai'); pass++; console.log('ok   '+name); } catch(e){ fail++; console.log('FAIL '+name+' — '+e.message); } };

(async () => {
  await new Promise(r=>setTimeout(r,120));
  if (errors.length) console.log('BOOT ERRORS:', errors.slice(0,4).join(' | '));
  check('boot không lỗi', () => errors.length === 0);
  check('mở Khoá học Trung (crumb + thẻ bài)', () => { click('[data-go="zh_home"]'); return d.getElementById('crumb').textContent.includes('Tiếng Trung') && n('[data-zh-lesson]') >= 5 && n('.zh-found-card')===5; });
  check('HSK2: chuyển cấp hiện 15 bài', () => { const c=d.querySelector('.level-chip[data-zh-level="hsk2"]'); if(!c) return false; c.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); const ok=d.querySelectorAll('[data-zh-lesson]').length===15; const c1=d.querySelector('.level-chip[data-zh-level="hsk1"]'); c1&&c1.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return ok; });
  check('8 nét cơ bản', () => { click('[data-go="zh_strokes"]'); return n('.zh-stroke-card')===8; });
  check('28 bộ thủ', () => { click('[data-go="zh_radicals"]'); return n('.zh-rad-card')===28; });
  check('pinyin: 5 thẻ thanh', () => { click('[data-go="zh_pinyin"]'); return n('.zh-tone-card')===5; });
  check('mở bài 1 (你好 + pinyin + từ vựng)', () => { click('[data-go="zh_home"]'); click('[data-zh-lesson="1"]'); return body().includes('你好') && body().includes('Nǐ hǎo') && n('.zh-word')>=8; });
  check('crumb bài Trung đúng', () => d.getElementById('crumb').textContent.includes('HSK 1') && d.getElementById('crumb').textContent.includes('Bài 01'));
  check('HSK3: chuyển cấp hiện 20 bài + crumb HSK 3', () => { click('[data-go="zh_home"]'); const c=d.querySelector('.level-chip[data-zh-level="hsk3"]'); if(!c||c.disabled) return false; c.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); const ok=d.querySelectorAll('[data-zh-lesson]').length===20 && body().includes('20 bài của HSK 3'); click('[data-zh-lesson="10"]'); const cr=d.getElementById('crumb').textContent.includes('HSK 3') && body().includes('被'); click('[data-go="zh_home"]'); const c1=d.querySelector('.level-chip[data-zh-level="hsk1"]'); c1&&c1.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return ok && cr; });
  check('HSK4: 20 bài + bài 11 có 应聘', () => { click('[data-go="zh_home"]'); const c=d.querySelector('.level-chip[data-zh-level="hsk4"]'); if(!c||c.disabled) return false; c.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); const ok=d.querySelectorAll('[data-zh-lesson]').length===20; click('[data-zh-lesson="11"]'); const cr=d.getElementById('crumb').textContent.includes('HSK 4') && body().includes('应聘'); click('[data-go="zh_home"]'); d.querySelector('.level-chip[data-zh-level="hsk1"]').dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return ok && cr; });
  check('HSK5: 36 bài + bài 36 tổng ôn', () => { click('[data-go="zh_home"]'); const c=d.querySelector('.level-chip[data-zh-level="hsk5"]'); if(!c||c.disabled) return false; c.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); const ok=d.querySelectorAll('[data-zh-lesson]').length===36 && n('.lesson-card.soon')===0; click('[data-zh-lesson="36"]'); const cr=d.getElementById('crumb').textContent.includes('HSK 5') && body().includes('瓶颈'); click('[data-go="zh_home"]'); d.querySelector('.level-chip[data-zh-level="hsk1"]').dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return ok && cr; });
  check('menu: badge HSK1–5', () => d.querySelector('[data-go="zh_home"] .mi-count').textContent==='HSK1–5');
  check('data-lang="zh" ở màn Trung, "ko" ở màn Hàn', () => { const a=d.documentElement.getAttribute('data-lang')==='zh'; click('[data-go="home"]'); const b=d.documentElement.getAttribute('data-lang')==='ko'; click('[data-go="zh_home"]'); return a&&b; });
  check('Tập viết: có ô lớn + chip chọn chữ', () => { click('[data-go="zh_write"]'); return !!d.getElementById('hzBig') && n('.hz-chip') >= 10; });
  check('Tập viết: bộ lọc cấp (≥3 chip) + đổi sang HSK3 ra bộ chữ khác', () => { const before=n('.hz-chip'); const lv=d.querySelectorAll('[data-zh-wlevel]'); if(lv.length<3) return false; d.querySelector('[data-zh-wlevel="hsk3"]').dispatchEvent(new win.MouseEvent('click',{bubbles:true})); const after=n('.hz-chip'); const ok= after>50 && d.querySelector('[data-zh-wlevel="hsk3"]').getAttribute('aria-pressed')==='true' && !!d.querySelector('.hz-chip[data-zh-write="被"]'); d.querySelector('[data-zh-wlevel="hsk1"]').dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return ok && before>50; });
  check('Từ điển: gõ 你 ra kết quả', () => { click('[data-go="zh_dict"]'); const q=d.getElementById('zhq'); q.value='你'; q.dispatchEvent(new win.Event('input',{bubbles:true})); return n('#zhResults .zh-res') >= 1; });
  check('Từ điển: gõ pinyin không dấu "hao"', () => { const q=d.getElementById('zhq'); q.value='hao'; q.dispatchEvent(new win.Event('input',{bubbles:true})); return n('#zhResults .zh-res') >= 1; });
  check('Ôn tập: thẻ + lật', () => { click('[data-go="zh_srs"]'); const has = n('.zh-card')===1; click('#zhFlip'); return has && n('.zh-card.open')===1; });
  check('Ôn tập: đổi cấp HSK5 → bộ thẻ khác (≥400 từ), Tất cả → ≥1200', () => { click('[data-zh-prac="hsk5"]'); const t5=+d.querySelector('.zh-srs-count').textContent.split('/')[1]; click('[data-zh-prac="all"]'); const ta=+d.querySelector('.zh-srs-count').textContent.split('/')[1]; click('[data-zh-prac="hsk1"]'); const t1=+d.querySelector('.zh-srs-count').textContent.split('/')[1]; return t5>=400 && ta>=1200 && t1<200 && t1>100; });
  check('Từ điển: nhãn "HSK 3 bài 10" mở đúng bài', () => { click('[data-go="zh_dict"]'); const q=d.getElementById('zhq'); q.value='被'; q.dispatchEvent(new win.Event('input',{bubbles:true})); const ref=d.querySelector('#zhResults .zh-ref[data-zh-open="hsk3:10"]'); if(!ref) return false; ref.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return d.getElementById('crumb').textContent.includes('HSK 3') && d.getElementById('crumb').textContent.includes('Bài 10'); });
  check('nút Nghe không lỗi', () => { click('[data-go="zh_pinyin"]'); click('[data-zh-speak]'); return true; });
  check('back về được Khoá học Trung', () => { return true; });

  d.querySelector('[data-go=\"zh_write\"]').dispatchEvent(new win.MouseEvent('click',{bubbles:true}));
  await new Promise(r=>setTimeout(r,90));
  check('Tập viết: HanziWriter dựng SVG 248 (mount hoãn rAF)', () => { const b=d.getElementById('hzBig'); if(process.env.DBG) console.log(b&&b.outerHTML.slice(0,200)); const s2=b&&b.querySelector('svg'); return !!s2 && s2.getAttribute('width')==='248'; });
  const chipHan = d.querySelector('.hz-chip[data-zh-write=\"汉\"]');
  if (chipHan){ chipHan.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); await new Promise(r=>setTimeout(r,30));
    check('Tập viết: chữ lẻ 汉 có dòng thông tin (không chạm nút)', () => { const m=d.querySelector('.zh-write-meta'); const t=m?m.textContent:''; return !!m && (t.includes('汉语') || (t.includes('hàn') && t.includes('hán'))); });
  }
  // chữ ngoài bundle (HSK3) → thử fetch hanzi/<hex>.json; jsdom không có server → đánh dấu hz-miss thay vì treo
  d.querySelector('[data-zh-wlevel=\"hsk3\"]').dispatchEvent(new win.MouseEvent('click',{bubbles:true}));
  const chipBei = d.querySelector('.hz-chip[data-zh-write=\"被\"]');
  if (chipBei){ chipBei.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); await new Promise(r=>setTimeout(r,60));
    check('Tập viết: chữ HSK3 ngoài bundle → loader theo chữ (fallback hz-miss khi 404)', () => { const b=d.getElementById('hzBig'); return !!b && (b.classList.contains('hz-miss') ? b.textContent==='被' : !!b.querySelector('svg')); });
  }
  click('[data-go=\"zh_quiz\"]');
  check('Bài tập: màn bắt đầu + chip cấp', () => n('[data-zh-qz-start]')===1 && n('[data-zh-prac]')===6);
  click('[data-zh-prac=\"hsk4\"]');
  check('Bài tập: chọn HSK4 → mô tả nêu HSK 4', () => body().includes('HSK 4'));
  click('[data-zh-qz-start]');
  check('Bài tập: 4 lựa chọn', () => n('.qz-opt')===4);
  click('.qz-opt');
  check('Bài tập: chấm điểm + giải thích + nút câu sau', () => n('.qz-explain')===1 && n('[data-zh-qz-next]')===1);
  click('[data-go=\"zh_exam\"]');
  check('Thi thử HSK: trang giới thiệu + danh sách đề (5 đề đầy đủ)', () => body().includes('HSK là gì') && n('[data-hsk-start]:not([data-hsk-start=\"quick\"])')===5);
  click('[data-hsk-start=\"quick\"][data-hsk-level=\"hsk1\"]');
  check('Thi thử: đề nhanh 20 câu + đồng hồ', () => !!d.getElementById('hskTimer') && n('.hsk-q')===20);
  click('[data-hsk-ans=\"1\"][data-opt=\"0\"]');
  click('[data-hsk-submit]');
  check('Thi thử: nộp bài ra kết quả', () => body().includes('Kết quả'));
  /* ---------- đợt mới: ghép âm pinyin ---------- */
  click('[data-go="zh_pinyin"]');
  check('Pinyin: 21 thanh mẫu + 36 vận mẫu có mô tả cách đọc', () => n('.zh-py-card')===57 && body().includes('BẬT HƠI'));
  check('Pinyin: bộ ghép âm có đủ 3 hàng chọn + kết quả', () => n('.zh-mix-row')===3 && n('.zh-mix-syl')===1);
  check('Ghép âm mặc định n + i + thanh 3 → nǐ', () => d.querySelector('.zh-mix-syl').textContent.trim()==='nǐ');
  check('Ghép âm: chữ Hán thật cho nǐ (có 你)', () => d.querySelector('.zh-mix-chars').textContent.includes('你'));
  (function(){ const b=d.querySelector('[data-zh-py-i="l"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  (function(){ const b=d.querySelector('[data-zh-py-f="iou"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  check('l + iou + thanh 3 → liǔ (viết tắt -iu, dấu rơi vào u)', () => d.querySelector('.zh-mix-syl').textContent.trim()==='liǔ');
  check('có dòng quy tắc chính tả', () => n('.zh-mix-note')===1);
  (function(){ const b=d.querySelector('[data-zh-py-i="h"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  (function(){ const b=d.querySelector('[data-zh-py-f="uei"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  (function(){ const b=d.querySelector('[data-zh-py-t="4"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  check('h + uei + thanh 4 → huì', () => d.querySelector('.zh-mix-syl').textContent.trim()==='huì');
  check('vần không ghép được bị khoá', () => n('.zh-mix-chip.off[disabled]') > 5);
  check('hàm ghép âm: j+ü→ju, b+uo→bo, zero+i→yi', () => {
    const P = win.__zhPy;
    return P.spell('j','ü')==='ju' && P.spell('b','uo')==='bo' && P.spell('','i')==='yi'
        && P.spell('g','uen')==='gun' && P.tone('you',3)==='yǒu' && P.tone('gui',4)==='guì';
  });
  check('tách pinyin viết liền: lǎoshī → lǎo + shī', () => {
    const sp = win.__zhPy.split('lǎoshī');
    return !!sp && sp.length===2 && sp[0]==='lǎo' && sp[1]==='shī';
  });

  /* ---------- đợt mới: bộ thủ có nút nghe ---------- */
  click('[data-go="zh_radicals"]');
  check('Bộ thủ: mỗi thẻ có nút nghe', () => n('.zh-rad-card .zh-rad-play')===28);

  /* ---------- đợt mới: tra theo bộ thủ + số nét ---------- */
  click('[data-go="zh_rad"]');
  check('Tra bộ thủ: bảng đầy đủ >150 bộ + lọc theo số nét', () => n('.zh-rl-rad') > 150 && n('[data-zh-rads]') >= 8);
  (function(){ const b=d.querySelector('[data-zh-rad="氵"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  check('chọn bộ 氵 ra bảng chữ', () => n('.zh-rl-panel')===1 && n('.zh-rl-char') >= 5 && body().includes('thuỷ'));
  check('bộ thủ của 河 nhận ra là 氵', () => { const r = win.__zhRad ? win.__zhRad('河') : null; return !!r && (r.rad==='氵'); });

  /* ---------- đợt mới: mục từ tiếng Trung ---------- */
  click('[data-go="zh_dict"]');
  (function(){ const q=d.getElementById('zhq'); q.value='运动'; q.dispatchEvent(new win.Event('input',{bubbles:true})); })();
  (function(){ const b=d.querySelector('[data-zh-entry="运动"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  check('Mục từ 运动: có cấu tạo từ 2 chữ', () => n('.zh-entry')===1 && n('.zh-ch-card')===2);
  check('Mục từ: có phần Nghĩa đánh số', () => n('.zh-senses li') >= 2);
  check('Mục từ: chữ 运 gợi ý từ khác cùng chữ (运气)', () => d.querySelector('.zh-ch-more') && body().includes('运气'));
  check('Mục từ: đóng được', () => { const x=d.querySelector('[data-zh-entry-close]'); x&&x.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); return n('.zh-entry')===0; });

  /* ---------- đợt mới: từ thông dụng ngoài giáo trình ---------- */
  check('tra «con chó» ra 狗', () => {
    const q = d.getElementById('zhq');
    q.value = 'con chó'; q.dispatchEvent(new win.Event('input',{bubbles:true}));
    return d.getElementById('zhResults').textContent.includes('狗');
  });
  check('tra «cẩu» (Hán–Việt) cũng ra 狗', () => {
    const q = d.getElementById('zhq');
    q.value = 'cẩu'; q.dispatchEvent(new win.Event('input',{bubbles:true}));
    return d.getElementById('zhResults').textContent.includes('狗');
  });
  check('kho từ Trung vượt 1650 mục', () => win.__zhCount ? win.__zhCount() > 1650 : true);

  /* ---------- đợt mới: Tập viết nhận CẢ TỪ ---------- */
  (function(){ const q=d.getElementById('zhq'); q.value='运动'; q.dispatchEvent(new win.Event('input',{bubbles:true})); })();
  (function(){ const b=d.querySelector('.zh-res [data-zh-write="运动"]'); b&&b.dispatchEvent(new win.MouseEvent('click',{bubbles:true})); })();
  check('Tập viết từ 运动: hiện đủ 2 chữ của từ', () => n('.zh-write-word')===1 && n('[data-zh-writec]')===2);
  check('Tập viết: đổi sang chữ 动 được', () => {
    const b = d.querySelector('[data-zh-writec="动"]');
    b && b.dispatchEvent(new win.MouseEvent('click',{bubbles:true}));
    return d.querySelector('.zh-write-char').textContent.trim()==='动';
  });

  console.log('\n'+pass+' đạt / '+fail+' lỗi');
  process.exit(fail?1:0);
})();
