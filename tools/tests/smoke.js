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
    window.Element.prototype.getTotalLength   = function(){ return 60; };
    window.Element.prototype.getPointAtLength = function(){ return { x: 20, y: 20 }; };
    Object.defineProperty(window.Element.prototype, 'transform', {
      get(){ return { baseVal: { consolidate(){ return null; } } }; }, configurable: true });
    window.Element.prototype.getBoundingClientRect =
      function(){ return { left:0, top:0, width:320, height:320, right:320, bottom:320 }; };
    window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get: () => () => {} });
    window.scrollTo = () => {};
    window.fetch = () => Promise.reject(new Error('khong co may chu'));
    const fnv = t => { let h = 0x811c9dc5;
      for (const b of Buffer.from(t.replace(/\s+/g,' ').trim(), 'utf8')){ h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
      return ('0000000' + h.toString(16)).slice(-8); };
    const S1 = '저는 학생입니다.', S2 = '한국어를 공부해요.';
    window.localStorage.setItem('langlab.shadow', JSON.stringify({
      raw: S1 + ' ' + S2, sents: [S1, S2], breaks: {}, loop: 1, gap: 600,
      mimic: 0, slow: false, showVi: true,
      trans: { [fnv(S1)]: 'Mình là sinh viên.', [fnv(S2)]: 'Mình đang học tiếng Hàn.' }
    }));
    window.__audio = [];
    // Giả lập: audio/tts/* CHƯA thu (để kiểm tra đường dự phòng sang giọng máy),
    // audio/ko/* chỉ có ở đường lùi một cấp (để kiểm tra việc dò lại thư mục).
    const fakeVoices = [
      { name:'Microsoft Heami - Korean', lang:'ko-KR', voiceURI:'ko-heami', localService:true },
      { name:'Google 한국의',            lang:'ko-KR', voiceURI:'ko-google', localService:false },
      { name:'Microsoft David',          lang:'en-US', voiceURI:'en-david', localService:true }
    ];
    window.__spoken = [];
    window.speechSynthesis = {
      speaking:false, paused:false,
      cancel(){}, resume(){}, pause(){},
      getVoices(){ return fakeVoices; },
      addEventListener(){}, removeEventListener(){},
      speak(u){ window.__spoken.push(u.text); if (u.onend) setTimeout(u.onend, 0); }
    };
    window.SpeechSynthesisUtterance = function(t){ this.text = t; };
    window.Audio = function(){
      const self = this;
      this.paused = true; this.currentTime = 0; this.duration = 42; this.playbackRate = 1;
      this._ev = {};
      const fire = n => setTimeout(() => {
        if (self['on' + n]) self['on' + n]();
        (self._ev[n] || []).forEach(f => f());
      }, 0);
      Object.defineProperty(this, 'src', {
        get(){ return self._src; },
        set(v){
          self._src = v; window.__audio.push(v);
          if (/^\.\.\/audio\/ko\//.test(v)) fire('loadedmetadata');
          else fire('error');
        }
      });
      this.addEventListener = (n, f) => { (self._ev[n] = self._ev[n] || []).push(f); };
      this.play = () => { self.paused = false; (self._ev.play || []).forEach(f => f()); return Promise.resolve(); };
      this.pause = () => { self.paused = true; (self._ev.pause || []).forEach(f => f()); };
    };
    window.onerror = m => errors.push('window.onerror: ' + m);
  }
});
const { window } = dom, d = window.document;
const click = el => { if (!el) throw new Error('không tìm thấy phần tử'); el.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); };

let pass = 0, fail = 0;
const check = (label, fn, expect) => {
  const before = errors.length;
  try { fn(); } catch(e){ errors.push(label + ' → ' + e.message); }
  const view = d.getElementById('view');
  const len  = view ? view.innerHTML.length : 0;
  const bad  = errors.length > before || len < 400 || (expect && !view.innerHTML.includes(expect));
  bad ? fail++ : pass++;
  console.log((bad ? 'FAIL  ' : 'ok    ') + label.padEnd(30) + String(len).padStart(6) + ' ký tự');
};

check('màn Khoá học',    () => click(d.querySelector('[data-go="home"]')), '일상생활');
check('chọn cấp: sang Sơ cấp 2', () => {
  const chip = d.querySelector('.level-chip[data-level="so-cap-2"]');
  if (!chip) throw new Error('không có nút cấp Sơ cấp 2');
  click(chip);
  if (!d.querySelector('.lesson-grid').textContent.includes('한국 생활')) throw new Error('không hiện bài SC2');
});
check('mở một bài Sơ cấp 2', () => {
  click(d.querySelector('.lesson-card[data-lesson="1"]'));
  if (!d.body.textContent.includes('한국 생활')) throw new Error('không mở được bài SC2');
});
check('chọn cấp: quay lại Sơ cấp 1', () => {
  click(d.querySelector('[data-go="home"]'));
  click(d.querySelector('.level-chip[data-level="so-cap-1"]'));
  if (!d.querySelector('.lesson-grid').textContent.includes('일상생활')) throw new Error('không quay lại SC1');
});
check('mở Bài 01',       () => click(d.querySelector('[data-lesson="1"]')), '반갑습니다');
d.querySelectorAll('.tab').forEach(t => check('  tab ' + t.dataset.tab, () => click(t)));
check('màn Tập viết',    () => click(d.querySelector('[data-go="write"]')), 'jamo-grid');
check('  chọn ㄹ',       () => click(d.querySelector('[data-jamo="ㄹ"]')));
check('  chọn ㅃ',       () => click(d.querySelector('[data-jamo="ㅃ"]')));
check('  chọn ㅘ',       () => click(d.querySelector('[data-jamo="ㅘ"]')));
check('  chọn patchim ㅇ',() => click(d.querySelector('[data-pick="jong"][data-val="ㅇ"]')));
check('  ghép âm tiết',  () => click(d.querySelector('[data-build]')));
check('  xem nét số 3',  () => click(d.querySelector('[data-step="2"]')));
check('màn Ôn tập',      () => click(d.querySelector('[data-go="srs"]')));
check('  lật thẻ',       () => click(d.getElementById('flipBtn')));
check('  chấm điểm',     () => click(d.querySelector('.grade')));
check('màn Từ điển',     () => click(d.querySelector('[data-go="dict"]')));
check('  tìm "thư viện"',() => { const q=d.getElementById('dq'); q.value='thư viện'; q.dispatchEvent(new window.Event('input',{bubbles:true})); }, '도서관');
check('  tìm "chingu"',  () => { const q=d.getElementById('dq'); q.value='chingu'; q.dispatchEvent(new window.Event('input',{bubbles:true})); }, '친구');
  check('  kho từ mở rộng > 450 từ', () => { if (window.__langlab_wordcount() < 450) throw new Error('chỉ ' + window.__langlab_wordcount() + ' từ'); });
  check('  tìm "mũ" ra 모자', () => { const q=d.getElementById('dq'); q.value='mũ'; q.dispatchEvent(new window.Event('input',{bubbles:true})); }, '모자');
  check('  tìm "mèo" ra 고양이', () => { const q=d.getElementById('dq'); q.value='mèo'; q.dispatchEvent(new window.Event('input',{bubbles:true})); }, '고양이');
check('  tìm rỗng',      () => { const q=d.getElementById('dq'); q.value='zzzz'; q.dispatchEvent(new window.Event('input',{bubbles:true})); });
check('màn Bài tập',     () => click(d.querySelector('[data-go="quiz"]')));
check('Bài tập: sinh câu trắc nghiệm', () => {
  click(d.querySelector('.qt[data-qtype="meaning"]'));
  if (!d.querySelector('#quizArea [data-quiz-opt]')) throw new Error('không sinh được câu');
});
check('Bài tập: chọn → kiểm tra → giải thích → câu sau', () => {
  click(d.querySelector('#quizArea [data-quiz-opt]'));
  if (!d.querySelector('#quizArea .opt.sel')) throw new Error('chọn đáp án không tô');
  if (d.querySelector('#quizArea .fb.show')) throw new Error('chưa kiểm tra mà đã lộ đáp án');
  click(d.querySelector('#quizArea [data-quiz-check]'));
  if (!d.querySelector('#quizArea .fb.show')) throw new Error('không hiện phản hồi khi kiểm tra');
  if (!d.querySelector('#quizArea .q-explain')) throw new Error('thiếu giải thích');
  click(d.querySelector('#quizArea [data-quiz-next]'));
  if (!d.querySelector('#quizArea [data-quiz-opt], #quizArea .quiz-done')) throw new Error('không sang câu mới');
  if (!d.querySelector('#quizArea [data-quiz-prev]')) throw new Error('thiếu nút câu trước');
});
check('Bài tập: sắp xếp câu ghép được', () => {
  click(d.querySelector('.qt[data-qtype="order"]'));
  const chip = d.querySelector('#quizArea [data-quiz-oadd]');
  if (!chip) throw new Error('không sinh được câu sắp xếp');
  click(chip);
  if (!d.querySelector('#quizArea .obuild [data-quiz-orm]')) throw new Error('mảnh không vào vùng ghép');
});
check('đổi giao diện',   () => click(d.getElementById('themeBtn')));
check('về Khoá học',     () => click(d.querySelector('[data-go="home"]')), '교통');
check('mở Bài 15',       () => click(d.querySelector('[data-lesson="15"]')), '갈아타다');
check('nút "Nét viết"',  () => { click(d.querySelector('.tab[data-tab="vocab"]')); click(d.querySelector('[data-write]')); }, 'stage');

// ---- tương tác mới: từ bấm được + bảng tra ----
const wp = () => d.getElementById('wordPanel');
const checkWp = (label, fn, expect) => {
  const before = errors.length;
  try { fn(); } catch(e){ errors.push(label + ' → ' + e.message); }
  const html = wp() ? wp().innerHTML : '';
  const bad = errors.length > before || html.length < 300 || (expect && !html.includes(expect));
  bad ? fail++ : pass++;
  console.log((bad ? 'FAIL  ' : 'ok    ') + label.padEnd(30) + String(html.length).padStart(6) + ' ký tự');
};

click(d.querySelector('[data-go="home"]'));
click(d.querySelector('[data-lesson="3"]'));
click(d.querySelector('.tab[data-tab="talk"]'));
const kws = d.querySelectorAll('#dlg .kw');
console.log('\nSố từ bấm được trong hội thoại bài 03: ' + kws.length);
checkWp('bấm từ 도서관에서', () => {
  const el = [...kws].find(k => k.dataset.kw.indexOf('도서관') === 0);
  if (!el) throw new Error('không thấy từ 도서관…');
  click(el);
}, 'krdict.korean.go.kr');
checkWp('  có nghĩa nội bộ',  () => {}, 'thư viện');
checkWp('  có câu ví dụ',     () => {}, 'wp-ex');
checkWp('  có 8 nguồn tra',   () => { if (wp().querySelectorAll('.src').length !== 8) throw new Error('thiếu nguồn'); }, 'youglish');
checkWp('  đổi dạng tra',     () => click(wp().querySelector('[data-kw-form]')), 'Tra ở từ điển ngoài');
checkWp('bấm từ đã chia 공부합니다', () => {
  const el = [...d.querySelectorAll('.kw')].find(k => k.dataset.kw === '공부합니다');
  click(el || d.querySelector('#dlg .kw'));
});
check('  đóng bảng tra',   () => { click(d.getElementById('wpClose')); if (wp().classList.contains('open')) throw new Error('không đóng'); });

// ---- cửa sổ tra từ: thu gọn + kéo-thả; breadcrumb bấm được ----
const ptr = (type, x, y) => { const e = new window.Event(type, { bubbles: true }); e.clientX = x; e.clientY = y; return e; };
check('mở lại bảng tra có nút thu gọn', () => {
  click(d.querySelector('#dlg .kw'));
  if (!wp().classList.contains('open')) throw new Error('không mở');
  if (!d.getElementById('wpMin')) throw new Error('thiếu nút thu gọn');
});
check('thu gọn rồi mở lại', () => {
  click(d.getElementById('wpMin'));
  if (!wp().classList.contains('collapsed')) throw new Error('không thu gọn');
  if (window.localStorage.getItem('langlab.wpanelCollapsed') !== 'true') throw new Error('không lưu trạng thái');
  click(d.getElementById('wpMin'));
  if (wp().classList.contains('collapsed')) throw new Error('không mở lại');
});
check('kéo bảng tra thì lưu vị trí', () => {
  try { Object.defineProperty(window, 'innerWidth',  { value: 1200, configurable: true }); } catch(e){}
  try { Object.defineProperty(window, 'innerHeight', { value: 800,  configurable: true }); } catch(e){}
  const head = wp().querySelector('.wp-head');
  head.dispatchEvent(ptr('pointerdown', 900, 120));
  d.dispatchEvent(ptr('pointermove', 400, 320));
  d.dispatchEvent(ptr('pointerup', 400, 320));
  if (!window.localStorage.getItem('langlab.wpanelPos')) throw new Error('không lưu vị trí');
});
click(d.getElementById('wpClose'));
check('breadcrumb bấm được để quay lại', () => {
  click(d.querySelector('[data-go="home"]'));
  click(d.querySelector('[data-lesson="3"]'));
  const links = d.querySelectorAll('#crumb .crumb-link[data-go="home"]');
  if (links.length < 2) throw new Error('thiếu link breadcrumb (' + links.length + ')');
  click(links[1]);
  if (d.getElementById('crumb').innerHTML.includes('Bài 03')) throw new Error('không quay về danh sách bài');
});
click(d.querySelector('[data-lesson="3"]'));
click(d.querySelector('.tab[data-tab="talk"]'));

// ---- phát âm (chạy trễ 1 nhịp vì engine chờ 120ms để tránh lỗi cancel/speak của Chrome) ----
const wait = ms => new Promise(r => setTimeout(r, ms));
const speechChecks = async () => {
  const n0 = window.__spoken.length;
  click(d.querySelector('#dlg [data-speak]'));
  await wait(400);
  check('nghe một câu', () => { if (window.__spoken.length === n0) throw new Error('không phát'); });

  const n1 = window.__spoken.length;
  click(d.querySelector('#dlg [data-speak-slow]'));
  await wait(400);
  check('nghe chậm', () => { if (window.__spoken.length === n1) throw new Error('không phát'); });

  const n2 = window.__spoken.length;
  click(d.querySelector('[data-speak-all]'));
  await wait(4200);
  check('đọc cả bài (4 lượt)', () => {
    const got = window.__spoken.length - n2;
    if (got < 4) throw new Error('mới phát ' + got + ' mẩu');
  });
  console.log('   mẩu đẩy vào engine: ' + window.__spoken.length);
  console.log('   ba mẩu đầu: ' + JSON.stringify(window.__spoken.slice(0, 3)));

  const long = 'ntest';
  const chunks = window.Speech.chunk('안녕하세요, 만나서 반갑습니다. 저는 베트남 사람입니다. 한국어를 공부해요!');
  console.log('   cắt câu: ' + chunks.length + ' mẩu → ' + JSON.stringify(chunks.map(c => c.t)));
  check('cắt câu đúng chỗ', () => { if (chunks.length !== 4) throw new Error('ra ' + chunks.length + ' mẩu'); });

  click(d.querySelector('[data-stop]'));
};

const shadowChecks = async () => {
  click(d.querySelector('[data-go="shadow"]'));
  check('khôi phục đoạn đã lưu', () => {
    if (d.querySelectorAll('.sh-row').length !== 2) throw new Error('không khôi phục câu');
  }, 'Mình là sinh viên');
  check('  hiện bản dịch dưới câu', () => {
    const n = d.querySelectorAll('.sh-vi').length;
    if (n !== 2) throw new Error('có ' + n + ' dòng dịch');
  });
  check('  tắt hiện bản dịch', () => {
    click(d.getElementById('shToggleVi'));
    if (d.querySelectorAll('.sh-vi').length) throw new Error('vẫn còn hiện');
  });
  check('  bật lại', () => {
    click(d.getElementById('shToggleVi'));
    if (d.querySelectorAll('.sh-vi').length !== 2) throw new Error('không hiện lại');
  });
  check('  bản dịch trong bảng tra câu', () => {
    click(d.querySelector('.sh-text'));
    if (!d.getElementById('wordPanel').innerHTML.includes('Mình là sinh viên'))
      throw new Error('thiếu bản dịch');
    click(d.getElementById('wpClose'));
  });
  click(d.getElementById('shTrans'));
  check('  báo đang dịch', () => {
    if (!d.getElementById('shTransBox').innerHTML.includes('Đang dịch')) throw new Error('không báo');
  });
  await wait(300);
  check('  đủ bản dịch thì báo xong', () => {
    const b = d.getElementById('shTransBox').innerHTML;
    if (!b.includes('Đã dịch xong')) throw new Error('không báo xong: ' + b.slice(0,90));
  });

check('sang ô nhập', () => { click(d.getElementById('shEdit')); if (!d.getElementById('shInput')) throw new Error('không về ô nhập'); }, 'Tách thành câu');
  check('dùng đoạn mẫu', () => click(d.getElementById('shSample')), 'sh-chunk');

  // đoạn mẫu chưa có bản dịch nào -> phải báo lỗi chứ không được im lặng
  click(d.getElementById('shTrans'));
  await wait(300);
  check('đoạn chưa dịch + máy chủ hỏng → báo lỗi', () => {
    const b = d.getElementById('shTransBox').innerHTML;
    if (b.includes('Đã dịch xong')) throw new Error('báo nhầm là xong');
    if (!b.includes('translate.google.com')) throw new Error('thiếu lối thoát Google Dịch');
  });
  const rows = d.querySelectorAll('.sh-row').length;
  const kws  = d.querySelectorAll('.sh-text .kw').length;
  console.log('   tách được ' + rows + ' câu, ' + kws + ' từ bấm được');
  check('  tách đủ câu',   () => { if (rows < 6) throw new Error('chỉ có ' + rows); });
  check('  từ bấm được',   () => { if (kws < 40) throw new Error('chỉ có ' + kws); });
  check('  một ý ban đầu', () => { if (d.querySelectorAll('.sh-chunk').length !== 1) throw new Error('sai số ý'); });

  check('ngắt ý ở câu 3', () => {
    const b = [...d.querySelectorAll('[data-sh-break]')].find(x => x.dataset.shBreak === '3');
    if (!b) throw new Error('không thấy nút ngắt');
    click(b);
    const n = d.querySelectorAll('.sh-chunk').length;
    if (n !== 2) throw new Error('ra ' + n + ' ý');
  }, 'Ý 2');
  check('  gộp lại',   () => {
    click(d.querySelector('[data-sh-merge]'));
    if (d.querySelectorAll('.sh-chunk').length !== 1) throw new Error('không gộp');
  });

  check('đổi lặp 3×',  () => { click(d.querySelector('[data-sh-loop="3"]')); if (window.__state_loop !== undefined) {} });
  check('đổi tốc độ',  () => click(d.querySelector('[data-sh-slow="1"]')));
  check('bật chờ nhại',() => click(d.querySelector('[data-sh-mimic="1"]')), 'Chế độ nhại đang bật');

  // đọc một câu
  const n0 = window.__spoken.length;
  click(d.querySelector('[data-sh-play="0"]'));
  await wait(500);
  check('đọc câu 1', () => {
    if (window.__spoken.length === n0) throw new Error('không phát');
    if (!d.querySelector('.sh-row.on')) throw new Error('không tô sáng câu đang đọc');
  });
  click(d.querySelector('[data-stop]'));

  // đọc cả đoạn
  const n1 = window.__spoken.length;
  click(d.querySelector('[data-sh-all]'));
  await wait(900);
  check('đọc cả đoạn', () => { if (window.__spoken.length === n1) throw new Error('không phát'); });
  click(d.querySelector('[data-stop]'));
  check('dừng thì bỏ tô sáng', () => { if (d.querySelector('.sh-row.on')) throw new Error('vẫn còn tô sáng'); });

  // bảng tra cả câu
  const wp2 = () => d.getElementById('wordPanel');
  check('bấm vào câu → bảng tra câu', () => {
    click(d.querySelector('.sh-text'));
    const h = wp2().innerHTML;
    if (!h.includes('Từ trong câu')) throw new Error('thiếu mục từ');
    if (!h.includes('Ngữ pháp nhận ra')) throw new Error('thiếu mục ngữ pháp');
    if (!h.includes('translate.google.com')) throw new Error('thiếu link dịch câu');
  });
  const toks = wp2().querySelectorAll('.tok').length;
  const grams = wp2().querySelectorAll('.gram-hit').length;
  console.log('   bảng tra câu: ' + toks + ' từ, ' + grams + ' mẫu ngữ pháp');
  check('  liệt kê từ',      () => { if (toks < 4) throw new Error('chỉ ' + toks); });
  check('  nhận ra ngữ pháp',() => { if (grams < 1) throw new Error('không mẫu nào'); });
  check('  bấm 1 từ trong bảng câu', () => {
    click(wp2().querySelector('.tok'));
    if (!wp2().innerHTML.includes('Dạng dùng để tra')) throw new Error('không mở bảng tra từ');
  });
  click(d.getElementById('wpClose'));

  check('sửa đoạn', () => {
    click(d.getElementById('shEdit'));
    if (!d.getElementById('shInput')) throw new Error('không về ô nhập');
    if (!d.getElementById('shInput').value) throw new Error('mất đoạn đã dán');
  });
};

const rest = () => {
// ---- tính năng Nghe đĩa đã gỡ bỏ ----
click(d.querySelector('[data-go="home"]'));
click(d.querySelector('[data-lesson="9"]'));
check('đã gỡ thẻ Nghe đĩa', () => {
  if (d.querySelector('.tab[data-tab="listen"]')) throw new Error('vẫn còn thẻ Nghe đĩa');
  if (d.querySelector('.track')) throw new Error('vẫn còn track CD');
});
check('đã gỡ nút loa (Giọng đọc)', () => {
  if (d.getElementById('voiceBtn')) throw new Error('vẫn còn nút loa');
  if (d.getElementById('voiceSheet')) throw new Error('vẫn còn bảng giọng đọc');
});
check('đổi tên Hiển→Quân trong hội thoại', () => {
  click(d.querySelector('[data-go="home"]'));
  click(d.querySelector('[data-lesson="1"]'));
  click(d.querySelector('.tab[data-tab="talk"]'));
  const h = d.getElementById('tabbody').innerHTML;
  if (h.includes('히엔') || h.includes('Hiển')) throw new Error('vẫn còn tên cũ');
  if (!h.includes('꾸언')) throw new Error('thiếu tên mới trong hội thoại');
});
}

speechChecks().then(shadowChecks).then(rest).then(() => {
  // ---- lazy-load từ điển KRDict ----
  const before = window.__langlab_wordcount();
  window.DICT_KO = [{ko:'우체통',rom:'uchetong',vi:'thùng thư',pos:'danh từ'},
                    {ko:'지하철역',rom:'jihacheollyeok',vi:'ga tàu điện ngầm',pos:'danh từ'}];
  window.DICT_KO.push({ko:'세상',rom:'sesang',vi:'thế gian',pos:'danh từ',hanja:'世上',
    senses:[{def_vi:'thế gian',def_ko:'지구 위 전체.'},
            {def_vi:'thế giới',def_ko:'사람이 살고 있는 사회.',examples:['넓은 세상을 보다.']}]});
  /* từ nào kho sẵn có thì addDict gộp nghĩa (không tăng số mục), từ mới thì thêm vào */
  const freshN = window.DICT_KO.filter(v => !window.Words.analyze(v.ko).hit).length;
  const addedN = window.Words.addDict(window.DICT_KO);
  check('lazy-load gộp từ điển', () => {
    if (window.__langlab_wordcount() !== before + freshN) throw new Error('không gộp');
    if (addedN !== window.DICT_KO.length) throw new Error('addDict trả về ' + addedN);
    if (freshN < 1) throw new Error('không có mục mới nào để thêm');
  });
  click(d.querySelector('[data-go="dict"]'));
  check('tra từ vừa nạp muộn', () => {
    const q=d.getElementById('dq'); q.value='thùng thư'; q.dispatchEvent(new window.Event('input',{bubbles:true}));
    if (!d.getElementById('dhits').innerHTML.includes('우체통')) throw new Error('không tra được từ nạp muộn');
  });
  check('mục từ điển giàu: nhiều nghĩa + cấu tạo + ví dụ', () => {
    const q=d.getElementById('dq'); q.value='세상'; q.dispatchEvent(new window.Event('input',{bubbles:true}));
    const h=d.getElementById('dentry').innerHTML;
    if (!h.includes('de-senses')) throw new Error('không có danh sách nghĩa');
    if (!h.includes('de-struct')) throw new Error('không có phần cấu tạo Hán tự');
    if (!h.includes('de-ex') || !h.includes('넓은')) throw new Error('không hiện câu ví dụ');
    if ((h.match(/<li>/g)||[]).length < 2) throw new Error('không tách nhiều nghĩa');
  });

  check('mục từ điển: khối "Cách dùng" cho ví dụ mức từ (dạng --examples)', () => {
    const KO='랩용례시험어';
    window.Words.addDict([{ko:KO,rom:'labyongrye',vi:'từ thử ví dụ',pos:'danh từ',
      senses:[{def_vi:'từ thử',def_ko:'시험용 단어.'}],
      examples:['지수는 학교 도서관에서 공부를 한다.','도서관에서 빌린 책을 반납했다.']}]);
    const q=d.getElementById('dq'); q.value=KO; q.dispatchEvent(new window.Event('input',{bubbles:true}));
    const h=d.getElementById('dentry').innerHTML;
    if (!h.includes('Cách dùng')) throw new Error('thiếu nhãn Cách dùng');
    if (!h.includes('de-usage')) throw new Error('thiếu khối de-usage');
    if (!h.includes('de-ex-play')) throw new Error('thiếu nút nghe ví dụ');
    if (!h.includes('지수는')) throw new Error('không hiện câu ví dụ mức từ');
  });

  check('màn Số đếm mở được', () => {
    click(d.querySelector('[data-go="numbers"]'));
    if (!d.body.textContent.includes('Số đếm tiếng Hàn')) throw new Error('không mở màn số đếm');
    if (!d.getElementById('numInput')) throw new Error('thiếu ô chuyển số');
  });
  check('Số đếm: chuyển 25 sang hai hệ', () => {
    const inp = d.getElementById('numInput'); inp.value = '25';
    inp.dispatchEvent(new window.Event('input', { bubbles: true }));
    const out = d.getElementById('numOut').textContent;
    if (!out.includes('이십오') || !out.includes('스물다섯')) throw new Error('chuyển số sai: ' + out);
  });

  check('Khoá mới: chuyển cấp, hiển thị bài (6 cấp đều mở)', () => {
    click(d.querySelector('[data-go="home"]'));
    const chip = d.querySelector('.level-chip[data-level="cao-cap-2"]');
    if (!chip) throw new Error('thiếu nút cấp Cao cấp 2');
    if (chip.disabled) throw new Error('Cao cấp 2 chưa mở');
    click(chip);
    if (!d.body.textContent.includes('철학과 인생')) throw new Error('không thấy bài Cao cấp 2');
    if (d.querySelectorAll('.level-chip[disabled]').length !== 0) throw new Error('còn cấp bị khoá');
    // quay lại Sơ cấp 1 cho các test sau
    const c1 = d.querySelector('.level-chip[data-level="so-cap-1"]'); if (c1) click(c1);
  });
  check('màn Thi thử TOPIK: danh sách đề', () => {
    click(d.querySelector('[data-go="topik"]'));
    if (!d.querySelector('[data-topik-start="topik1"]')) throw new Error('không thấy đề TOPIK I');
  });
  check('TOPIK: nhiều đề, nhóm theo bậc', () => {
    click(d.querySelector('[data-go="topik"]'));
    ['topik1','topik1b','topik1c','topik2','topik2b','topik2c'].forEach(id => {
      if (!d.querySelector('[data-topik-start="'+id+'"]')) throw new Error('thiếu đề ' + id);
    });
    const bands = [...d.querySelectorAll('.tk-band-title')];
    if (bands.length < 2) throw new Error('thiếu tiêu đề nhóm bậc');
    if (!bands.some(b => /TOPIK I\b/.test(b.textContent)) || !bands.some(b => /TOPIK II/.test(b.textContent))) throw new Error('thiếu nhóm I hoặc II');
    if (!bands[0].textContent.includes('3 đề')) throw new Error('mỗi bậc phải có nhiều đề');
  });
  check('TOPIK: bắt đầu (đồng hồ + câu hỏi)', () => {
    click(d.querySelector('[data-topik-start="topik1"]'));
    if (!d.getElementById('topikTimer')) throw new Error('không có đồng hồ');
    if (!d.querySelector('[data-topik-ans]')) throw new Error('không có câu hỏi');
  });
  check('TOPIK: tạm dừng / tiếp tục', () => {
    const btn = d.querySelector('[data-topik-pause]');
    if (!btn) throw new Error('thiếu nút tạm dừng');
    click(btn);
    if (!d.getElementById('topikTimer').classList.contains('paused')) throw new Error('đồng hồ không dừng');
    if (d.querySelector('[data-topik-pause]').textContent.trim() !== 'Tiếp tục') throw new Error('nút không đổi thành Tiếp tục');
    click(d.querySelector('[data-topik-pause]'));
    if (d.getElementById('topikTimer').classList.contains('paused')) throw new Error('không tiếp tục được');
  });
  check('TOPIK: nút Chọn đề khác khi đang thi', () => {
    if (!d.querySelector('[data-topik-exit]')) throw new Error('thiếu nút Chọn đề khác trong lúc thi');
    const oldConfirm = window.confirm; window.confirm = () => true;
    click(d.querySelector('[data-topik-exit]'));
    window.confirm = oldConfirm;
    if (!d.querySelector('[data-topik-start="topik1"]')) throw new Error('không quay lại danh sách đề');
  });
  check('TOPIK: chọn đáp án + nộp + chấm điểm', () => {
    click(d.querySelector('[data-topik-start="topik1"]'));
    d.querySelectorAll('.tk-q').forEach(q => { const opt = q.querySelector('[data-topik-ans]'); if (opt) click(opt); });
    click(d.querySelector('[data-topik-submit]'));
    if (!d.body.textContent.includes('câu đúng')) throw new Error('không hiện kết quả');
    if (!d.querySelector('.tk-explain')) throw new Error('không hiện giải thích');
  });

  check('Labi: cửa sổ nổi mở/đóng + đổi tab', () => {
    click(d.querySelector('#labiNav'));
    const panel = d.getElementById('labiPanel');
    if (!panel || !panel.classList.contains('open')) throw new Error('cửa sổ Labi không mở');
    if (!d.getElementById('asstInput')) throw new Error('thiếu ô nhập chat');
    click(d.querySelector('[data-asst-tab="audio"]'));
    if (!d.getElementById('asstFile')) throw new Error('thiếu ô tải âm thanh');
    click(d.querySelector('[data-asst-tab="chat"]'));
    if (!d.getElementById('asstInput')) throw new Error('không quay lại tab chat');
    click(d.querySelector('#labiClose'));
    if (d.getElementById('labiPanel').classList.contains('open')) throw new Error('không đóng được Labi');
  });
  check('Labi: gửi câu hỏi hiện bong bóng người dùng', () => {
    if (!d.getElementById('labiPanel') || !d.getElementById('labiPanel').classList.contains('open')) click(d.querySelector('#labiNav'));
    const chip = d.querySelector('[data-asst-ask]');
    if (!chip) throw new Error('thiếu gợi ý câu hỏi');
    const q = chip.getAttribute('data-asst-ask');
    click(chip);
    const bubble = d.querySelector('.asst-msg.user .asst-bubble');
    if (!bubble || !bubble.textContent.includes(q.slice(0, 6))) throw new Error('không hiện câu người dùng');
    click(d.querySelector('#labiClose'));
  });
  check('Giới thiệu: rút gọn — logo, một câu, thông tin cá nhân', () => {
    click(d.querySelector('[data-go="about"]'));
    const v = d.getElementById('view').innerHTML;
    if (!v.includes('nguyendinhquan7788266@gmail.com')) throw new Error('thiếu email người phát triển');
    if (!v.includes('Hà Nội')) throw new Error('thiếu nơi ở');
    if (!/nghịch nghịch/.test(v)) throw new Error('thiếu câu mô tả ngắn');
    if (!d.querySelector('.about-logo img')) throw new Error('thiếu logo trên trang giới thiệu');
    if (/LangLab là gì|Ý nghĩa tên/.test(v)) throw new Error('vẫn còn phần giới thiệu dài');
    if (d.querySelectorAll('.about-feats li').length) throw new Error('vẫn còn danh sách tính năng');
    if (!v.includes('CC BY-SA')) throw new Error('mất dòng ghi công giấy phép');
  });
  check('navbar: Shadowing là mục cấp 1, không nằm trong menu Tiếng Hàn', () => {
    if (!d.querySelector('.nav-main > #shNav[data-go="shadow"]')) throw new Error('thiếu mục Shadowing cấp 1');
    if (d.querySelector('.nav-menu [data-go="shadow"]')) throw new Error('vẫn còn Shadowing trong menu thả xuống');
  });
  check('navbar: thu gọn / mở rộng được, Labi và nút giao diện vẫn còn', () => {
    const tg = d.querySelector('#navToggle');
    if (!tg) throw new Error('thiếu nút thu gọn');
    click(tg);
    if (!d.body.classList.contains('nav-collapsed')) throw new Error('không thu gọn được');
    if (tg.getAttribute('aria-expanded') !== 'false') throw new Error('aria-expanded sai');
    if (!d.querySelector('.nav-side #labiNav') || !d.querySelector('.nav-side #themeBtn')) throw new Error('Labi/giao diện bị ẩn theo');
    click(tg);
    if (d.body.classList.contains('nav-collapsed')) throw new Error('không mở lại được');
  });
  check('chữ LangLab tách hai tông như wordmark trong logo', () => {
    const n = d.querySelector('.brand-name');
    if (!n || !n.querySelector('b') || !n.querySelector('i')) throw new Error('thiếu hai nửa Lang / Lab');
    if (n.textContent.replace(/\s/g, '') !== 'LangLab') throw new Error('chữ sai');
  });
  check('ô tra nhanh: có tay cầm kéo + lớp chữ gợi ý riêng', () => {
    if (!d.querySelector('#topSearch #tqGrip')) throw new Error('thiếu tay cầm kéo');
    const inn = d.querySelector('#tqPh .tq-ph-in');
    if (!inn || !inn.textContent.trim()) throw new Error('lớp chữ gợi ý rỗng');
    if (d.getElementById('topq').getAttribute('placeholder')) throw new Error('placeholder thật phải để trống, tránh hiện chồng');
    if (!d.getElementById('topq').getAttribute('aria-label')) throw new Error('thiếu aria-label thay cho placeholder');
  });
  check('navbar: không còn nút «Tiếng Anh sắp có»', () => {
    if (d.querySelector('.nav-soon')) throw new Error('vẫn còn nút giữ chỗ');
    const drops = [...d.querySelectorAll('.nav-drop-btn')].map(b => b.textContent.trim());
    if (drops.filter(x => /Tiếng Anh/.test(x)).length !== 1) throw new Error('phải có đúng một mục Tiếng Anh');
  });
  check('Logo/brand bấm được → trang Giới thiệu', () => {
    click(d.querySelector('.brand[data-go="about"]'));
    if (!d.querySelector('.about-logo img')) throw new Error('không mở trang Giới thiệu');
  });
  check('từ điển: nút dịch câu ví dụ', () => {
    window.Words.addDict([{ko:'번역시험어', rom:'x', vi:'từ thử dịch', pos:'danh từ', examples:['이것은 예문입니다.']}]);
    click(d.querySelector('[data-go="dict"]'));
    const q=d.getElementById('dq'); q.value='번역시험어'; q.dispatchEvent(new window.Event('input',{bubbles:true}));
    if (!d.getElementById('dentry').innerHTML.includes('data-trans-ex')) throw new Error('thiếu nút Dịch nghĩa');
    const btn=d.querySelector('#dentry [data-trans-ex]'); click(btn);
    const slot=btn.closest('.de-ex').querySelector('.de-ex-trans');
    if (!slot || slot.hidden) throw new Error('khối dịch không hiện');
  });

  check('gỡ đuôi: bất quy tắc ㅡ + hệ từ 입니다', () => {
    window.Words.addDict([{ko:'예쁘다',rom:'yeppeuda',vi:'đẹp',pos:'tính từ'}]);
    const a = window.Words.analyze('예뻐요');
    if (!a.hit || a.hit.ko !== '예쁘다') throw new Error('예뻐요 không ra 예쁘다');
    const b = window.Words.analyze('학생입니다');
    if (!b.hit || b.hit.ko !== '학생') throw new Error('학생입니다 không ra 학생');
  });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  if (errors.length) console.log('\nCHI TIẾT LỖI:\n' + errors.join('\n'));
  process.exit(fail ? 1 : 0);
});


