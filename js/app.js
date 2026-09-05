/* ============================================================
   LangLab — logic ứng dụng
   ============================================================ */
(function(){
'use strict';

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- lưu trạng thái nhẹ ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem('langlab.' + k); return v === null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem('langlab.' + k, JSON.stringify(v)); } catch(e){} }
};

const state = {
  view: 'home',
  level: store.get('level', 'so-cap-1'),
  lesson: null,
  tab: 'vocab',
  jamo: 'ㄱ',
  syll: { cho:'ㅎ', jung:'ㅏ', jong:'ㄴ' },
  speed: 1,
  quiz: null,
  deck: store.get('deck', []),
  done: store.get('done', {}),
  theme: store.get('theme', 'auto'),
  shadow: Object.assign(
    { raw:'', sents:[], breaks:{}, loop:1, gap:600, mimic:0, slow:false,
      trans:{}, showVi:true },
    store.get('shadow', {})
  )
};

/* ---------- nhiều cấp học ---------- */
function curLessons(){ return COURSE_KO.lessons.filter(l => l.level === state.level); }
function curLesson(){ return curLessons().find(l => l.no === state.lesson); }
function levelHasLessons(id){ return COURSE_KO.lessons.some(l => l.level === id); }
function curLevel(){ return (COURSE_KO.levels || []).find(x => x.id === state.level) || { vi:'Sơ cấp 1', ko:'초급 1' }; }

/* ---------- thông báo ngắn ---------- */
let toastTimer;
function toast(msg){
  let el = $('#toast');
  if (!el){ el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}

/* ---------- phát âm ---------- */
function ensureVoice(){
  if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return false; }
  if (!Speech.hasKorean()){
    toast('Máy chưa có giọng tiếng Hàn — thử mở bằng Microsoft Edge để có giọng Hàn');
    return false;
  }
  return true;
}

/* Ưu tiên tệp mp3 thu sẵn bằng giọng neural; giọng máy chỉ là dự phòng. */
function speak(text, opts){
  opts = opts || {};
  Speech.stop();
  TTS.play(text, {
    rate: opts.slow ? .72 : 1,
    onEnd: opts.onEnd,
    onFail(){
      if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return; }
      Speech.onReady(() => {
        if (!ensureVoice()) return;
        Speech.speak(text, { rate: opts.slow ? Math.max(.45, Speech.cfg.rate - .3) : opts.rate, onEnd: opts.onEnd });
      });
    }
  });
}

function speakSlow(text){ speak(text, { slow: true }); }

function stopAudio(){
  shToken++;
  TTS.stop(); Speech.stop();
  $$('.dlg-row').forEach(r => r.classList.remove('speaking'));
  $$('.sh-row').forEach(r => r.classList.remove('on', 'waiting'));
  $$('.sh-chunk').forEach(c => c.classList.remove('on'));
}

/* ============================================================
   VẼ NÉT — bộ máy dùng chung cho chữ cái đơn và âm tiết ghép
   ============================================================ */

function guideSvg(){
  return `<svg class="guide" viewBox="0 0 100 100" aria-hidden="true">
    <rect x="4" y="4" width="92" height="92" rx="2"></rect>
    <line x1="50" y1="4" x2="50" y2="96"></line>
    <line x1="4" y1="50" x2="96" y2="50"></line>
    <line x1="4" y1="4" x2="96" y2="96"></line>
    <line x1="96" y1="4" x2="4" y2="96"></line>
  </svg>`;
}

/* strokes: [{d, transform?}] */
function renderGlyph(host, strokes){
  const layer = cls => strokes.map((s, i) =>
    `<g${s.transform ? ` transform="${s.transform}"` : ''}><path d="${s.d}" class="${cls}" data-i="${i}"></path></g>`
  ).join('');

  host.innerHTML = guideSvg() +
    `<svg class="glyph" viewBox="0 0 100 100" role="img">
       <g class="ghosts">${layer('ghost')}</g>
       <g class="paths">${layer('ink')}</g>
       <g class="nums"></g>
     </svg>`;

  const svg = $('.glyph', host);
  const nums = $('.nums', svg);
  $$('.paths path', svg).forEach((p, i) => {
    const len = p.getTotalLength();
    p.dataset.len = len;
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = 0;
    // số thứ tự nét đặt ở điểm bắt đầu
    const pt = p.getPointAtLength(0);
    const m  = p.parentNode.transform.baseVal.consolidate();
    const g  = m ? { x: m.matrix.a * pt.x + m.matrix.e, y: m.matrix.d * pt.y + m.matrix.f } : pt;
    const ns = 'http://www.w3.org/2000/svg';
    const c  = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', g.x); c.setAttribute('cy', g.y); c.setAttribute('r', 5.4);
    c.setAttribute('class', 'snum-bg'); c.dataset.i = i;
    const t = document.createElementNS(ns, 'text');
    t.setAttribute('x', g.x); t.setAttribute('y', g.y + 2.5);
    t.setAttribute('text-anchor', 'middle'); t.setAttribute('class', 'snum'); t.dataset.i = i;
    t.textContent = i + 1;
    nums.appendChild(c); nums.appendChild(t);
  });
  return svg;
}

function showUpTo(svg, n){          // hiển thị tĩnh: n nét đầu tiên đã viết xong
  $$('.paths path', svg).forEach((p, i) => {
    p.style.transition = 'none';
    p.setAttribute('class', i < n ? 'done' : (i === n ? 'live' : 'ink'));
    p.style.strokeDashoffset = i <= n ? 0 : p.dataset.len;
  });
  $$('.snum,.snum-bg', svg).forEach(el => { el.style.opacity = (+el.dataset.i <= n) ? 1 : .3; });
}

let animToken = 0;
function playStrokes(svg, speed, onStep){
  const token = ++animToken;
  const paths = $$('.paths path', svg);
  paths.forEach(p => {
    p.style.transition = 'none';
    p.setAttribute('class', 'ink');
    p.style.strokeDashoffset = p.dataset.len;
  });
  $$('.snum,.snum-bg', svg).forEach(el => el.style.opacity = .25);

  let i = 0;
  const step = () => {
    if (token !== animToken) return;
    if (i >= paths.length){ if (onStep) onStep(paths.length - 1, true); return; }
    const p = paths[i];
    const len = +p.dataset.len;
    const dur = Math.max(260, Math.min(1400, len * 11)) / speed;
    p.setAttribute('class', 'live');
    p.style.transition = 'none';
    p.style.strokeDashoffset = len;
    $$('.snum,.snum-bg', svg).forEach(el => { if (+el.dataset.i === i) el.style.opacity = 1; });
    if (onStep) onStep(i, false);
    // ép trình duyệt tính lại rồi mới chạy transition
    void p.getBoundingClientRect();
    p.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(.4,.05,.35,1)`;
    p.style.strokeDashoffset = 0;
    setTimeout(() => {
      if (token !== animToken) return;
      p.setAttribute('class', 'done');
      i++;
      setTimeout(step, 190 / speed);
    }, dur + 20);
  };
  step();
}

/* ============================================================
   CÁC MÀN HÌNH
   ============================================================ */

const VIEWS = {

/* ---------------- Khoá học ---------------- */
home(){
  const L = curLessons();
  const lv = curLevel();
  return `
  <div class="page-head">
    <span class="eyebrow">Khoá tiếng Hàn · ${esc(lv.ko)}</span>
    <h1>Học theo bài, đúng thứ tự của giáo trình</h1>
    <p>${L.length} bài của <em>${esc(lv.vi)}</em>, mỗi bài giữ nguyên cấu trúc quen thuộc: từ vựng → ngữ pháp → hội thoại → phát âm → văn hoá. Bấm vào một bài để bắt đầu.</p>
  </div>

  <div class="level-strip">
    ${COURSE_KO.levels.map(v => {
      const has = levelHasLessons(v.id);
      return `<button class="level-chip" data-level="${v.id}"${state.level === v.id ? ' aria-pressed="true"' : ''}${has ? '' : ' disabled'} title="${has ? '' : 'Đang biên soạn'}">
        ${esc(v.vi)} <span class="lv-ko ko">${esc(v.ko)}</span>${has ? '' : ' <span class="lv-soon">sắp có</span>'}
      </button>`;
    }).join('')}
  </div>

  <div class="lesson-grid">
    ${L.map(l => {
      const pct = state.done[l.level + '-' + l.no] ? 100 : 0;
      return `
      <button class="lesson-card" data-lesson="${l.no}">
        <span class="lesson-no"><i></i> BÀI ${String(l.no).padStart(2,'0')}</span>
        <h3 class="ko">${esc(l.ko)}</h3>
        <p class="vi">${esc(l.vi)}</p>
        <p class="skill">${esc(l.skill)}</p>
        <div class="gram-tags">${(l.grammar || []).slice(0,3).map(g =>
          `<span class="gtag">${esc(g.form.split('<')[0].trim())}</span>`).join('')}</div>
        <div class="lesson-foot">
          <span class="n">${l.vocab.length} từ</span>
          <span class="prog"><i style="width:${pct}%"></i></span>
          <span class="n">${pct}%</span>
        </div>
      </button>`;
    }).join('')}
  </div>`;
},

/* ---------------- Chi tiết bài học ---------------- */
lesson(){
  const l = curLesson();
  if (!l) return VIEWS.home();
  const tabs = [
    ['vocab','어휘','Từ vựng'], ['gram','문법','Ngữ pháp'], ['talk','회화','Hội thoại'],
    ['write','쓰기','Tập viết'], ['pron','발음','Phát âm'],
    ['culture','문화','Văn hoá']
  ];
  if (!tabs.some(t => t[0] === state.tab)) state.tab = 'vocab';
  return `
  <div class="lesson-hero">
    <div>
      <span class="eyebrow">Sơ cấp 1 · Bài ${String(l.no).padStart(2,'0')}</span>
      <h1 class="ko">${esc(l.ko)}</h1>
      <p class="sub">${esc(l.vi)}</p>
      <div class="hero-meta">
        <div><span class="eyebrow">Kỹ năng</span><p>${esc(l.skill)}</p></div>
        <div><span class="eyebrow">Phát âm</span><p>${esc(l.pron)}</p></div>
        <div><span class="eyebrow">Từ mới</span><p>${l.vocab.length} từ · ${l.grammar.length} mẫu ngữ pháp</p></div>
      </div>
    </div>
    <button class="btn-back" data-go="home">← Tất cả các bài</button>
  </div>

  <div class="tabs" role="tablist">
    ${tabs.map(([id, k, vi]) => `
      <button class="tab" role="tab" data-tab="${id}" aria-selected="${state.tab === id}">
        <span class="k ko">${k}</span> ${vi}
      </button>`).join('')}
  </div>

  <div id="tabbody">${VIEWS['tab_' + state.tab](l)}</div>`;
},

tab_vocab(l){
  return `<div class="vocab-grid">${l.vocab.map(v => `
    <div class="vcard">
      <span class="pos">${esc(v.pos)}</span>
      <span class="w ko"><span class="kw" data-kw="${esc(v.ko)}" tabindex="0" role="button">${esc(v.ko)}</span></span>
      <span class="r">${esc(v.rom)}</span>
      <span class="m">${esc(v.vi)}</span>
      ${v.hanja ? `<span class="h">${esc(v.hanja)} · ${esc(v.hv)}</span>` : ''}
      <div class="vcard-actions">
        <button class="mini" data-speak="${esc(v.ko)}">Nghe</button>
        <button class="mini" data-add="${esc(v.ko)}">+ Thẻ</button>
        <button class="mini" data-write="${esc(v.ko)}">Nét viết</button>
      </div>
    </div>`).join('')}</div>`;
},

tab_gram(l){
  return `<div class="gram-list">${l.grammar.map(g => `
    <div class="gram">
      <div class="gram-form ko">${esc(g.form)}</div>
      <div class="gram-vi">${esc(g.vi)}</div>
      <p class="gram-note">${esc(g.note)}</p>
      <div class="gram-ex">
        <span class="k ko">${Words.mark(g.ex.ko)}</span>
        <span class="v">${esc(g.ex.vi)}</span>
        <button class="icon-btn ex-play" data-speak="${esc(g.ex.ko)}" title="Nghe câu này">
          <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
        </button>
      </div>
    </div>`).join('')}</div>`;
},

tab_talk(l){
  return `
  <div class="dlg-bar">
    <button class="pbtn primary" data-speak-all="1">
      <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Đọc cả bài
    </button>
    <button class="pbtn" data-stop="1">Dừng</button>
    <span class="eyebrow">Rê chuột vào bất kỳ từ nào để xem nghĩa · bấm để mở bảng tra</span>
  </div>
  <div class="dlg" id="dlg">${l.dialogue.map((d, i) => `
    <div class="dlg-row" data-line="${i}">
      <span class="dlg-sp ko">${esc(d.sp)}</span>
      <span>
        <span class="dlg-ko">${Words.mark(d.ko)}</span>
        <span class="dlg-vi">${esc(d.vi)}</span>
      </span>
      <span class="row-tools">
        <button class="icon-btn" data-speak="${esc(d.ko)}" title="Nghe câu này">
          <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
        </button>
        <button class="icon-btn" data-speak-slow="${esc(d.ko)}" title="Nghe chậm">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
        </button>
      </span>
    </div>`).join('')}</div>`;
},

tab_write(l){
  const words = l.vocab.slice(0, 6).map(v => v.ko);
  return `
  <div class="note-card" style="margin-bottom:16px">
    <span class="mark ko">쓰</span>
    <div>
      <h4>Luyện viết từ vựng của bài ${l.no}</h4>
      <p>Mỗi ô là một chữ. Bấm <b>Xem nét</b> để mở màn Tập viết với đúng chữ đó, hoặc viết trực tiếp lên ô bên dưới bằng chuột hoặc ngón tay.</p>
    </div>
  </div>
  <div class="trace-wrap">
    ${words.map((w, i) => {
      const ch = w[0];
      return `<div class="trace-cell">
        <span class="lbl">${esc(w)}</span>
        <span class="model ko">${esc(ch)}</span>
        <canvas data-trace="${i}"></canvas>
      </div>`;
    }).join('')}
  </div>
  <div class="stage-ctrl" style="margin-top:14px">
    <button class="pbtn" data-clear-trace="1">Xoá hết</button>
    <button class="pbtn primary" data-write="${esc(words[0])}">Xem nét chữ ${esc(words[0][0])}</button>
  </div>`;
},

tab_pron(l){
  return `
  <div class="note-card">
    <span class="mark ko">발</span>
    <div>
      <h4>${esc(l.pron)}</h4>
      <p>Trọng tâm phát âm của bài này. Hãy nghe lại các câu trong phần Hội thoại và chú ý riêng hiện tượng trên — đây là điểm người Việt hay bị sai nhất khi học tới bài ${l.no}.</p>
    </div>
  </div>
  <div class="gram-list" style="margin-top:14px">
    ${l.dialogue.map(d => `
    <div class="gram">
      <div class="gram-form ko" style="font-size:17px;color:var(--ink)">${Words.mark(d.ko)}</div>
      <p class="gram-note">${esc(d.vi)}</p>
      <div class="stage-ctrl" style="margin-top:10px">
        <button class="pbtn" data-speak="${esc(d.ko)}">Nghe</button>
        <button class="pbtn" data-speak-slow="${esc(d.ko)}">Nghe chậm</button>
        <button class="pbtn" data-syl="${esc(d.ko)}">Đọc rời từng chữ</button>
      </div>
    </div>`).join('')}
  </div>`;
},

tab_culture(l){
  return `
  <div class="note-card">
    <span class="mark ko">문</span>
    <div>
      <h4>${esc(l.culture)}</h4>
      <p>Phần văn hoá của bài ${l.no}. Trong bản đầy đủ, đây là nơi đặt bài đọc song ngữ, hình ảnh và phần đối chiếu với văn hoá Việt Nam — đúng nguyên tắc "trước khi học · trong khi học · sau khi học" của giáo trình.</p>
    </div>
  </div>`;
},

/* ---------------- Tập viết ---------------- */
write(){
  const rows = [
    ['Phụ âm cơ bản', '기본 자음 · 14 chữ', JAMO_ORDER.consonantBasic],
    ['Phụ âm căng',   '쌍자음 · 5 chữ',     JAMO_ORDER.consonantDouble],
    ['Nguyên âm cơ bản','기본 모음 · 10 chữ', JAMO_ORDER.vowelBasic],
    ['Nguyên âm ghép','복합 모음 · 11 chữ',  JAMO_ORDER.vowelCompound]
  ];
  return `
  <div class="page-head">
    <span class="eyebrow">한글 획순 · Thứ tự nét</span>
    <h1>Tập viết chữ Hangul</h1>
    <p>Chữ Hàn luôn viết theo hai quy tắc: <b>trên xuống dưới</b> và <b>trái sang phải</b>. Chọn một chữ cái để xem từng nét chạy theo đúng thứ tự, hoặc ghép cả một âm tiết ở phần bên dưới.</p>
  </div>

  <div class="write-layout">
    <div class="jamo-panel">
      ${rows.map(([vi, ko, list]) => `
        <div class="jamo-row-label"><h4>${vi}</h4><span class="ko">${ko}</span></div>
        <div class="jamo-grid">
          ${list.map(j => `<button class="jbtn ko" data-jamo="${j}" aria-pressed="${state.jamo === j}">${j}</button>`).join('')}
        </div>`).join('')}

      <div class="builder">
        <h4>Ghép âm tiết — 음절 조합</h4>
        <p>Một âm tiết tiếng Hàn gồm phụ âm đầu + nguyên âm + patchim (nếu có). Chọn từng thành phần để xem toàn bộ thứ tự nét của cả khối chữ.</p>
        ${[['cho','Phụ âm đầu','초성', CHOSEONG],
           ['jung','Nguyên âm','중성', JUNGSEONG],
           ['jong','Patchim','종성', JONGSEONG]].map(([key, vi, ko, list]) => `
          <div class="pick-row">
            <div class="pick-label">${vi}<span class="ko">${ko}</span></div>
            <div class="pick-opts">
              ${list.map(v => `<button class="pick ${v === '' ? 'none' : 'ko'}" data-pick="${key}" data-val="${v}"
                aria-pressed="${state.syll[key] === v}">${v === '' ? 'không' : v}</button>`).join('')}
            </div>
          </div>`).join('')}
        <div class="stage-ctrl">
          <button class="pbtn primary" data-build="1">Xem nét của âm tiết ghép</button>
          <span class="eyebrow" id="syllPreview"></span>
        </div>
      </div>
    </div>

    <div class="stage" id="stage"></div>
  </div>`;
},

/* ---------------- Ôn tập SRS ---------------- */
srs(){
  const base = curLessons()[0] || COURSE_KO.lessons[0];
  const deck = state.deck.length ? state.deck : base.vocab.slice(0, 8).map(v => v.ko);
  const all = COURSE_KO.lessons.flatMap(l => l.vocab);
  const w = all.find(v => v.ko === deck[0]) || all[0];
  return `
  <div class="page-head">
    <span class="eyebrow">복습 · Lặp lại ngắt quãng</span>
    <h1>Ôn tập hôm nay</h1>
    <p>Lịch ôn do thuật toán FSRS quyết định. Bốn mức đánh giá phía dưới là toàn bộ thao tác bạn cần — không có nút nào khác.</p>
  </div>
  <div class="srs-layout">
    <div>
      <div class="flash" id="flash">
        <span class="w ko"><span class="kw" data-kw="${esc(w.ko)}" tabindex="0" role="button">${esc(w.ko)}</span></span>
        <div class="back">
          <span class="r">${esc(w.rom)}</span>
          ${w.hanja ? `<div class="h">${esc(w.hanja)} · ${esc(w.hv)}</div>` : ''}
          <div class="m">${esc(w.vi)}</div>
          <div class="p">${esc(w.pos)}</div>
        </div>
        <span class="hint">Nhớ lại nghĩa rồi lật thẻ · phím cách</span>
      </div>
      <div class="stage-ctrl" style="margin-top:12px">
        <button class="pbtn primary" id="flipBtn" style="flex:1;justify-content:center">Lật thẻ</button>
        <button class="pbtn" data-speak="${esc(w.ko)}">Nghe</button>
        <button class="pbtn" data-write="${esc(w.ko)}">Nét viết</button>
      </div>
      <div class="grades" id="grades">
        <button class="grade again"><b>Lại</b><span>&lt;1 phút</span></button>
        <button class="grade"><b>Khó</b><span>6 phút</span></button>
        <button class="grade"><b>Tốt</b><span>1 ngày</span></button>
        <button class="grade"><b>Dễ</b><span>4 ngày</span></button>
      </div>
    </div>
    <div>
      <div class="aside-card">
        <h5>Bộ thẻ</h5>
        ${curLessons().slice(0,5).map(l => `
          <div class="krow"><span>Bài ${String(l.no).padStart(2,'0')} · ${esc(l.vi)}</span><span class="n">${l.vocab.length}</span></div>`).join('')}
      </div>
      <div class="aside-card" style="margin-top:14px">
        <h5>Thẻ bạn đã lưu</h5>
        ${state.deck.length
          ? state.deck.slice(0,8).map(k => `<div class="krow"><span class="ko">${esc(k)}</span></div>`).join('')
          : '<p style="font-size:12.5px;color:var(--muted)">Chưa có thẻ nào. Bấm «+ Thẻ» ở màn Từ vựng để thêm.</p>'}
      </div>
    </div>
  </div>`;
},

/* ---------------- Từ điển ---------------- */
dict(){
  return `
  <div class="page-head">
    <span class="eyebrow">사전 · Từ điển Hàn – Việt</span>
    <h1>Tra từ</h1>
    <p>Tra trong ${allWords().length} từ: toàn bộ từ vựng Sơ cấp 1 cộng với một bộ từ thông dụng theo chủ đề. Bản đầy đủ sẽ nạp thêm dữ liệu từ KRDict — từ điển của Viện Quốc ngữ Hàn Quốc, vốn đã có sẵn bản dịch tiếng Việt.</p>
  </div>
  <div class="dict-layout">
    <div>
      <div class="dsearch">
        <input id="dq" type="search" placeholder="Gõ tiếng Hàn, tiếng Việt hoặc phiên âm…  ví dụ: 도서관 · thư viện · chingu" autocomplete="off">
      </div>
      <div class="dhits" id="dhits"></div>
      <div id="dentry"></div>
    </div>
    <div>
      <div class="aside-card">
        <h5>Mẹo cho người Việt</h5>
        <p style="font-size:12.5px;color:var(--muted)">Khoảng 60% từ vựng tiếng Hàn có gốc Hán. Ô <b style="color:var(--gold)">Hán tự</b> trong mỗi mục từ cho bạn âm Hán-Việt tương ứng — nhớ một chữ Hán là nhớ được cả chùm từ.</p>
      </div>
      <div class="aside-card" style="margin-top:14px">
        <h5>Sẽ có ở bản đầy đủ</h5>
        <div class="krow"><span>Gỡ đuôi chia động từ</span></div>
        <div class="krow"><span>Câu ví dụ Tatoeba</span></div>
        <div class="krow"><span>Phát âm thu sẵn</span></div>
        <div class="krow"><span>Lịch sử tra từ</span></div>
      </div>
    </div>
  </div>`;
},

/* ---------------- Luyện shadowing ---------------- */
shadow(){
  const sh = state.shadow;
  if (!sh.sents.length){
    return `
    <div class="page-head">
      <span class="eyebrow">쉐도잉 · Nghe và nhại theo</span>
      <h1>Luyện shadowing</h1>
      <p>Dán một đoạn tiếng Hàn vào — tin tức, lời bài hát, hội thoại trong sách, bất cứ thứ gì.
      LangLab tách thành câu, cho bấm từng từ để tra, và đọc lại theo nhịp bạn chọn.</p>
    </div>
    <div class="sh-editor">
      <textarea id="shInput" class="free-text ko" rows="9" placeholder="Dán đoạn tiếng Hàn vào đây…"></textarea>
      <div class="stage-ctrl" style="margin-top:12px">
        <button class="pbtn primary" id="shParse">Tách thành câu</button>
        <button class="pbtn" id="shSample">Dùng đoạn mẫu</button>
      </div>
      <p class="wp-hint" style="margin-top:12px">Câu được tách ở dấu chấm, chấm hỏi và chấm than.
      Sau khi tách, bạn có thể tự ngắt đoạn thành nhiều <b>ý</b> và cho đọc liền mạch từng ý.</p>
    </div>`;
  }

  const chunks = shadowChunks();
  return `
  <div class="page-head">
    <span class="eyebrow">쉐도잉 · ${sh.sents.length} câu · ${chunks.length} ý</span>
    <h1>Luyện shadowing</h1>
  </div>

  <div class="sh-bar">
    <button class="pbtn primary" data-sh-all="1">
      <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Đọc cả đoạn
    </button>
    <button class="pbtn" data-stop="1">Dừng</button>

    <span class="sh-sep"></span>

    <span class="sh-field">
      <label>Lặp mỗi câu</label>
      <span class="seg">
        ${[1,2,3].map(n => `<button class="sp" data-sh-loop="${n}" aria-pressed="${sh.loop === n}">${n}×</button>`).join('')}
      </span>
    </span>

    <span class="sh-field">
      <label>Tốc độ</label>
      <span class="seg">
        <button class="sp" data-sh-slow="0" aria-pressed="${!sh.slow}">1×</button>
        <button class="sp" data-sh-slow="1" aria-pressed="${sh.slow}">0.7×</button>
      </span>
    </span>

    <span class="sh-field">
      <label>Chờ để nhại</label>
      <span class="seg">
        ${[[0,'tắt'],[1,'1×'],[1.5,'1.5×']].map(([v,t]) =>
          `<button class="sp" data-sh-mimic="${v}" aria-pressed="${sh.mimic === v}">${t}</button>`).join('')}
      </span>
    </span>

    <span class="sh-sep"></span>

    <button class="pbtn" id="shTrans">
      <svg viewBox="0 0 24 24"><path d="M4 5h10M9 3v2c0 5-2.5 8-5 9"/><path d="M8 11c1.5 3 4 5 6 6"/><path d="M13 20l4-9 4 9M14.5 17h5"/></svg>
      Dịch cả đoạn
    </button>
    <button class="pbtn ${sh.showVi ? 'primary' : ''}" id="shToggleVi">
      ${sh.showVi ? 'Ẩn bản dịch' : 'Hiện bản dịch'}
    </button>

    <button class="pbtn" id="shEdit" style="margin-left:auto">Sửa đoạn</button>
  </div>

  <div id="shTransBox"></div>

  ${sh.mimic ? `<p class="sh-note">Chế độ nhại đang bật: sau mỗi câu, máy im lặng đúng ${sh.mimic}× độ dài câu đó để bạn nói theo.</p>` : ''}

  <div class="sh-body">
    ${chunks.map((c, ci) => `
      <div class="sh-chunk" data-chunk="${ci}">
        <div class="sh-chunk-head">
          <span class="sh-chunk-no mono">Ý ${ci + 1}</span>
          <span class="sh-chunk-n">${c.indices.length} câu</span>
          <button class="pbtn" data-sh-chunk="${ci}">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Đọc liền mạch ý này
          </button>
          ${ci > 0 ? `<button class="mini" data-sh-merge="${c.from}">Gộp với ý trên</button>` : ''}
        </div>
        ${c.indices.map((i, k) => `
          <div class="sh-row" data-si="${i}">
            <span class="sh-no mono">${String(i + 1).padStart(2,'0')}</span>
            <span class="sh-main">
              <span class="sh-text ko" data-sent="${i}">${Words.mark(sh.sents[i])}</span>
              ${sh.showVi && sh.trans[Translate.hash(sh.sents[i])]
                ? `<span class="sh-vi">${esc(sh.trans[Translate.hash(sh.sents[i])])}</span>` : ''}
            </span>
            <span class="sh-tools">
              <button class="icon-btn" data-sh-play="${i}" title="Nghe câu này">
                <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
              </button>
              <button class="icon-btn" data-sh-play="${i}" data-slow="1" title="Nghe chậm">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </button>
              <button class="icon-btn" data-sent="${i}" title="Tra cả câu">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              </button>
            </span>
          </div>
          ${k < c.indices.length - 1
            ? `<button class="sh-break" data-sh-break="${c.indices[k + 1]}">＋ ngắt ý ở đây</button>`
            : ''}
        `).join('')}
      </div>`).join('')}
  </div>

  <p class="wp-hint" style="margin-top:16px">Bấm vào <b>một từ</b> để mở bảng tra từ · bấm vào <b>phần trống của câu</b> hoặc nút kính lúp để tra cả câu ·
  bấm <b>＋ ngắt ý</b> giữa hai câu để chia đoạn thành các ý riêng.</p>`;
},

/* ---------------- Bài tập ---------------- */
quiz(){
  if (!state.quiz || !state.quiz.qs) quizStart(state.quiz && state.quiz.type);
  return `
  <div class="page-head">
    <span class="eyebrow">연습 · Bài tập</span>
    <h1>Luyện tập</h1>
    <p>Câu hỏi sinh ra từ chính từ vựng, ngữ pháp và hội thoại của khoá học — mỗi lượt 10 câu.</p>
  </div>
  <div class="qtypes">
    ${QUIZ_TYPES.map(([id, label]) =>
      `<button class="qt" data-qtype="${id}" aria-pressed="${(state.quiz.type || 'mix') === id}">${label}</button>`).join('')}
  </div>
  <div id="quizArea">${quizCard()}</div>`;
}
};

/* ============================================================
   BÀI TẬP — sinh câu hỏi từ dữ liệu khoá học
   ============================================================ */
const QUIZ_TYPES = [
  ['mix','Trộn'], ['meaning','Chọn nghĩa'], ['word','Chọn từ'],
  ['listen','Nghe hiểu'], ['fill','Điền vào câu'], ['order','Sắp xếp câu']
];
const QUIZ_KINDS = ['meaning','word','listen','fill','order'];
const QUIZ_ROUND = 10;

let quizData = null;
function quizPool(){
  if (quizData) return quizData;
  const seen = {}, vocab = [], sents = [];
  curLessons().forEach(l => {
    (l.vocab || []).forEach(v => {
      if (v.ko && v.vi && !seen[v.ko]){ seen[v.ko] = 1; vocab.push({ ko:v.ko, rom:v.rom, vi:v.vi, lesson:l.no }); }
    });
    (l.dialogue || []).forEach(d => { if (d.ko && d.vi) sents.push({ ko:d.ko, vi:d.vi, lesson:l.no }); });
    (l.grammar  || []).forEach(g => { if (g.ex && g.ex.ko && g.ex.vi) sents.push({ ko:g.ex.ko, vi:g.ex.vi, lesson:l.no }); });
  });
  quizData = { vocab, sents };
  return quizData;
}

const _qrnd = n => Math.floor(Math.random() * n);
const _qpick = a => a[_qrnd(a.length)];
function _qsample(a, n){ a = a.slice(); const out = []; while (out.length < n && a.length) out.push(a.splice(_qrnd(a.length), 1)[0]); return out; }
function _qshuffle(a){ a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = _qrnd(i + 1); const x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

function makeQuestion(type, depth){
  depth = depth || 0;
  const P = quizPool();
  if (!P.vocab.length || depth > 4) return null;
  let kind = type === 'mix' ? _qpick(QUIZ_KINDS) : type;
  if ((kind === 'fill' || kind === 'order') && P.sents.length < 3) kind = 'meaning';

  if (kind === 'meaning' || kind === 'listen'){
    const w = _qpick(P.vocab);
    const distr = _qsample(P.vocab.filter(x => x.vi !== w.vi), 3).map(x => x.vi);
    if (distr.length < 3) return makeQuestion('word', depth + 1);
    const options = _qshuffle([w.vi].concat(distr));
    return { kind, ko:w.ko, rom:w.rom, hideStem: kind === 'listen',
             prompt: kind === 'listen' ? 'Nghe rồi chọn nghĩa đúng' : 'Từ này nghĩa là gì?',
             options, correct: options.indexOf(w.vi) };
  }
  if (kind === 'word'){
    const w = _qpick(P.vocab);
    const distr = _qsample(P.vocab.filter(x => x.ko !== w.ko), 3).map(x => x.ko);
    if (distr.length < 3) return makeQuestion('meaning', depth + 1);
    const options = _qshuffle([w.ko].concat(distr));
    return { kind, vi:w.vi, prompt:'Chọn từ tiếng Hàn đúng', koOpts:true,
             options, correct: options.indexOf(w.ko) };
  }
  if (kind === 'fill'){
    for (const s of _qshuffle(P.sents)){
      const toks = s.ko.split(/\s+/);
      for (let i = 0; i < toks.length; i++){
        const bare = toks[i].replace(/[.,?!~]/g, '');
        const w = P.vocab.find(v => v.ko === bare);
        if (w){
          const distr = _qsample(P.vocab.filter(x => x.ko !== w.ko), 3).map(x => x.ko);
          if (distr.length < 3) return makeQuestion('meaning', depth + 1);
          const options = _qshuffle([w.ko].concat(distr));
          const stem = toks.map((t, k) => k === i ? '____' : t).join(' ');
          return { kind, stem, hint:s.vi, koOpts:true, options, correct: options.indexOf(w.ko) };
        }
      }
    }
    return makeQuestion('meaning', depth + 1);
  }
  if (kind === 'order'){
    const cand = _qshuffle(P.sents).find(s => { const n = s.ko.split(/\s+/).length; return n >= 3 && n <= 6; });
    if (!cand) return makeQuestion('meaning', depth + 1);
    const tokens = cand.ko.split(/\s+/);
    return { kind, tokens, hint:cand.vi, chips: _qshuffle(tokens.map((t, id) => ({ t, id }))), order: [] };
  }
  return null;
}

function quizStart(type){
  type = type || 'mix';
  const qs = [];
  let guard = 0;
  while (qs.length < QUIZ_ROUND && guard++ < 80){ const q = makeQuestion(type); if (q) qs.push(q); }
  state.quiz = { type, qs, idx:0, score:0, answered:false, chosen:null };
}

function paintQuiz(){ const a = $('#quizArea'); if (a) a.innerHTML = quizCard(); }

function quizCard(){
  const Q = state.quiz;
  if (!Q || !Q.qs || !Q.qs.length) return '<div class="quiz-card"><p class="wp-empty">Chưa tạo được câu hỏi.</p></div>';
  if (Q.idx >= Q.qs.length) return quizSummary();
  const q = Q.qs[Q.idx];
  const dots = Q.qs.map((_, k) => `<i class="${k < Q.idx ? 'done' : k === Q.idx ? 'now' : ''}"></i>`).join('');
  const top = `<div class="quiz-top">
      <span class="eyebrow">Câu ${Q.idx + 1} / ${Q.qs.length}</span>
      <div class="dots">${dots}</div>
      <span class="quiz-score">${Q.score} điểm</span>
    </div>`;
  if (q.kind === 'order') return `<div class="quiz-card">${top}${quizOrder(q)}</div>`;

  let stem;
  if (q.kind === 'word'){
    stem = `<p class="q-stem q-vi">${esc(q.vi)}</p>`;
  } else if (q.kind === 'fill'){
    stem = `<p class="q-stem ko">${esc(q.stem).replace('____', '<span class="blank">____</span>')}</p>`;
  } else if (q.hideStem){
    stem = `<div class="q-listen-wrap"><button class="pbtn primary" data-quiz-say="${esc(q.ko)}">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe từ</button></div>`;
  } else {
    stem = `<p class="q-stem ko">${esc(q.ko)}${q.rom ? ` <span class="q-rom">[${esc(q.rom)}]</span>` : ''}</p>`;
  }
  const prompt = q.prompt ? `<p class="q-prompt">${esc(q.prompt)}</p>` : '';
  const hint = q.hint ? `<p class="q-hint">${esc(q.hint)}</p>` : '';
  const opts = `<div class="opts" id="opts">${q.options.map((o, k) => {
      let cls = 'opt' + (q.koOpts ? ' ko' : '');
      if (Q.answered){ if (k === q.correct) cls += ' ok'; else if (k === Q.chosen) cls += ' no'; }
      return `<button class="${cls}" data-quiz-opt="${k}"${Q.answered ? ' disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>`;
  const fb = Q.answered ? quizFeedback(q) : '';
  return `<div class="quiz-card">${top}${stem}${prompt}${hint}${opts}${fb}</div>`;
}

function quizFeedback(q){
  const Q = state.quiz, right = Q.chosen === q.correct, last = Q.idx + 1 >= Q.qs.length;
  return `<div class="fb show" style="background:${right ? 'var(--ok-soft)' : 'var(--seal-soft)'}">
      <b>${right ? 'Chính xác 👍' : 'Chưa đúng.'}</b> ${right ? '' : 'Đáp án: <b>' + esc(q.options[q.correct]) + '</b>'}
      <div class="q-next"><button class="pbtn primary" data-quiz-next="1">${last ? 'Xem kết quả' : 'Câu tiếp →'}</button></div>
    </div>`;
}

function quizOrder(q){
  const Q = state.quiz, done = Q.answered;
  const chosen = q.order.map(id => { const c = q.chips.find(x => x.id === id); return `<button class="ochip" data-quiz-orm="${id}">${esc(c.t)}</button>`; }).join('');
  const remain = q.chips.filter(x => q.order.indexOf(x.id) < 0).map(x => `<button class="ochip pool" data-quiz-oadd="${x.id}">${esc(x.t)}</button>`).join('');
  let tail;
  if (done){
    const built = q.order.map(id => q.chips.find(x => x.id === id).t).join(' ');
    const right = built === q.tokens.join(' '), last = Q.idx + 1 >= Q.qs.length;
    tail = `<div class="fb show" style="background:${right ? 'var(--ok-soft)' : 'var(--seal-soft)'}">
        <b>${right ? 'Chính xác 👍' : 'Chưa đúng.'}</b> ${right ? '' : 'Câu đúng: <b class="ko">' + esc(q.tokens.join(' ')) + '</b>'}
        <div class="q-next"><button class="pbtn primary" data-quiz-next="1">${last ? 'Xem kết quả' : 'Câu tiếp →'}</button></div>
      </div>`;
  } else {
    tail = `<div class="q-next">
        <button class="pbtn" data-quiz-oclear="1"${q.order.length ? '' : ' disabled'}>Xoá</button>
        <button class="pbtn primary" data-quiz-ocheck="1"${q.order.length === q.tokens.length ? '' : ' disabled'}>Kiểm tra</button></div>`;
  }
  return `<p class="q-prompt">Sắp xếp các mảnh thành câu đúng</p><p class="q-hint">${esc(q.hint)}</p>
    <div class="obuild">${chosen || '<span class="obuild-ph">Bấm các mảnh bên dưới để ghép câu…</span>'}</div>
    <div class="opool">${remain}</div>${tail}`;
}

function quizSummary(){
  const Q = state.quiz, pct = Math.round(Q.score / Q.qs.length * 100);
  const msg = pct >= 80 ? 'Xuất sắc! 🎉' : pct >= 50 ? 'Khá tốt — luyện thêm chút nữa nhé.' : 'Cứ luyện tiếp, nhớ dần thôi.';
  return `<div class="quiz-card quiz-done">
      <div class="qd-score">${Q.score}<span>/ ${Q.qs.length}</span></div>
      <p class="qd-msg">${msg}</p>
      <div class="q-next" style="justify-content:center"><button class="pbtn primary" data-quiz-restart="1">Làm lại 10 câu</button></div>
    </div>`;
}

/* ============================================================
   ĐIỀU HƯỚNG & GẮN SỰ KIỆN
   ============================================================ */

const CRUMBS = {
  home:'Khoá học', lesson:'Bài học', write:'Tập viết',
  srs:'Ôn tập', dict:'Từ điển', quiz:'Bài tập', shadow:'Luyện shadowing'
};

function render(){
  const view = $('#view');
  view.innerHTML = VIEWS[state.view]();
  view.classList.toggle('wide', state.view === 'write');

  $$('.nav-btn').forEach(b => {
    const on = b.dataset.go === state.view || (state.view === 'lesson' && b.dataset.go === 'home');
    b.setAttribute('aria-current', on ? 'page' : 'false');
  });

  const l = state.lesson && curLesson();
  $('#crumb').innerHTML = state.view === 'lesson' && l
    ? `<button class="crumb-link" data-go="home">Tiếng Hàn</button> <span>›</span> <button class="crumb-link" data-go="home">Sơ cấp 1</button> <span>›</span> <b>Bài ${String(l.no).padStart(2,'0')} · ${esc(l.vi)}</b>`
    : `<button class="crumb-link" data-go="home">Tiếng Hàn</button> <span>›</span> <b>${CRUMBS[state.view]}</b>`;

  if (state.view === 'write') mountWrite();
  if (state.view === 'dict'){ mountDict(); loadDict(added => { if (added && state.view === 'dict') render(); }); }
  if (state.view === 'shadow'){
    const box = $('#shInput');
    if (box && state.shadow.raw) box.value = state.shadow.raw;
  }
  if (state.view === 'lesson' && state.tab === 'write') mountTrace();
  window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
}

function go(v, lessonNo){
  if (v !== state.view) stopAudio();
  state.view = v;
  if (lessonNo){ state.lesson = lessonNo; state.tab = 'vocab'; }
  render();
}

/* ---------- màn Tập viết ---------- */
function mountWrite(){ drawStage(); }

function currentStrokes(){
  if (state.jamo && JAMO[state.jamo]) return JAMO[state.jamo].strokes.map(d => ({ d }));
  return [];
}

let stageMode = 'jamo';   // 'jamo' | 'syllable'
let stageChar = '';

function drawStage(){
  const stage = $('#stage'); if (!stage) return;
  let strokes, title, name, rom, tip;

  if (stageMode === 'syllable'){
    strokes = syllableStrokes(stageChar);
    const p = decomposeHangul(stageChar);
    title = stageChar;
    name  = p ? `${p.cho} + ${p.jung}${p.jong ? ' + ' + p.jong : ''}` : '';
    rom   = `${strokes.length} nét`;
    tip   = 'Trong một khối chữ, viết hết phụ âm đầu, rồi tới nguyên âm, cuối cùng mới tới patchim ở dưới đáy.';
  } else {
    const j = JAMO[state.jamo];
    strokes = currentStrokes();
    title = state.jamo; name = j.name; rom = j.rom; tip = j.tip;
  }

  stage.innerHTML = `
    <div class="stage-head">
      <div>
        <div class="big ko">${esc(title)}</div>
        <div class="nm ko">${esc(name)}</div>
      </div>
      <div class="rm">${esc(rom)}</div>
    </div>
    <div class="paper" id="paper"></div>
    <div class="stage-ctrl">
      <button class="pbtn primary" id="play">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Chạy lại
      </button>
      <button class="pbtn" data-speak="${esc(title)}">Nghe</button>
      <div class="speed">
        ${[[.5,'0.5×'],[1,'1×'],[2,'2×']].map(([v,t]) =>
          `<button class="sp" data-speed="${v}" aria-pressed="${state.speed === v}">${t}</button>`).join('')}
      </div>
    </div>
    <div class="stroke-steps">
      <h5>${strokes.length} nét — bấm để xem từng bước</h5>
      <div class="steps">${strokes.map((s,i) =>
        `<button class="step-dot" data-step="${i}">${i+1}</button>`).join('')}</div>
      <p class="tip">${esc(tip)}</p>
    </div>
    <div class="trace-wrap" style="grid-template-columns:1fr;margin-top:16px">
      <div class="trace-cell">
        <span class="lbl">VIẾT THỬ</span>
        <span class="model ko">${esc(title)}</span>
        <canvas data-trace="0"></canvas>
      </div>
    </div>
    <div class="stage-ctrl" style="margin-top:10px">
      <button class="pbtn" data-clear-trace="1">Xoá nét vừa viết</button>
    </div>`;

  const svg = renderGlyph($('#paper', stage), strokes);
  playStrokes(svg, state.speed, i => {
    $$('.step-dot', stage).forEach((d, k) => d.setAttribute('aria-pressed', k === i));
  });
  mountTrace();
}

/* ---------- canvas viết thử ---------- */
function mountTrace(){
  $$('canvas[data-trace]').forEach(cv => {
    if (cv.dataset.ready) return;
    cv.dataset.ready = '1';
    const fit = () => {
      const r = cv.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (!r.width) return;
      cv.width = r.width * dpr; cv.height = r.height * dpr;
      const c = cv.getContext('2d');
      c.scale(dpr, dpr);
      c.lineWidth = Math.max(6, r.width / 22);
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#1B4D8F';
    };
    fit();
    window.addEventListener('resize', fit);

    let drawing = false;
    const pos = e => {
      const r = cv.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    cv.addEventListener('pointerdown', e => {
      drawing = true; cv.setPointerCapture(e.pointerId);
      const c = cv.getContext('2d'), p = pos(e);
      c.beginPath(); c.moveTo(p.x, p.y);
    });
    cv.addEventListener('pointermove', e => {
      if (!drawing) return;
      const c = cv.getContext('2d'), p = pos(e);
      c.lineTo(p.x, p.y); c.stroke();
    });
    const stop = () => { drawing = false; };
    cv.addEventListener('pointerup', stop);
    cv.addEventListener('pointerleave', stop);
    cv.addEventListener('pointercancel', stop);
  });
}
function clearTrace(){
  $$('canvas[data-trace]').forEach(cv => {
    const c = cv.getContext('2d');
    c.save(); c.setTransform(1,0,0,1,0,0); c.clearRect(0,0,cv.width,cv.height); c.restore();
  });
}

/* ---------- màn Từ điển ---------- */
function allWords(){
  // dùng đúng kho đã gộp (khoá học + từ thông dụng, đã khử trùng lặp)
  const idx = Words.index();
  return idx ? idx.words : COURSE_KO.lessons.flatMap(l => l.vocab.map(v => Object.assign({ lesson: l.no, level: l.level, theme: l.vi }, v)));
}
function mountDict(){
  const words = allWords();
  const q = $('#dq'), hits = $('#dhits'), entry = $('#dentry');

  const showEntry = w => {
    entry.innerHTML = `
      <div class="entry">
        <div class="entry-actions" style="margin:0 0 14px">
          <button class="pbtn" data-speak="${esc(w.ko)}">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe
          </button>
          <button class="pbtn" data-add="${esc(w.ko)}">+ Bộ thẻ</button>
          <button class="pbtn" data-write="${esc(w.ko)}">Nét viết</button>
          <button class="pbtn" data-kw-open="${esc(w.ko)}">Tra sâu · nguồn ngoài</button>
        </div>
        ${dictEntryHtml(w)}
      </div>`;
  };

  const search = term => {
    const t = (term || '').trim().toLowerCase();
    const list = (t ? words.filter(w =>
      w.ko.includes(t) || w.rom.includes(t) || w.vi.toLowerCase().includes(t) ||
      (w.hv || '').toLowerCase().includes(t) ||
      (w.senses || []).some(s => (s.def_vi || '').toLowerCase().includes(t))) : words).slice(0, 60);
    hits.innerHTML = list.length ? list.map((w, i) => `
      <button class="dhit" data-hit="${esc(w.ko)}"${i === 0 ? ' aria-current="true"' : ''}>
        <span class="k">${esc(w.ko)}</span><span class="v">${esc(w.vi)}</span>
        <span class="l">${w.lesson ? 'BÀI ' + String(w.lesson).padStart(2,'0') : 'THÔNG DỤNG'}</span>
      </button>`).join('')
      : '<div style="padding:14px;color:var(--faint);font-size:13px">Không tìm thấy. Thử «도서관», «thư viện» hoặc «chingu».</div>';
    if (list.length) showEntry(list[0]);
    else entry.innerHTML = '<div class="empty">Bản đầy đủ sẽ gỡ đuôi chia động từ rồi tra lại lần nữa trước khi báo không có kết quả.</div>';
  };

  q.addEventListener('input', () => search(q.value));
  hits.addEventListener('click', e => {
    const b = e.target.closest('.dhit'); if (!b) return;
    $$('.dhit', hits).forEach(x => x.removeAttribute('aria-current'));
    b.setAttribute('aria-current', 'true');
    const w = words.find(x => x.ko === b.dataset.hit);
    if (w) showEntry(w);
  });
  search('');
}

/* ============================================================
   LUYỆN SHADOWING — bộ phát theo câu, theo ý, cả đoạn
   ============================================================ */

const SAMPLE_TEXT = '저는 매일 아침 일곱 시에 일어나요. 세수를 하고 아침을 먹은 다음에 학교에 가요. '
  + '오전에는 한국어 수업을 듣고 오후에는 도서관에서 숙제를 해요. '
  + '도서관은 조용하고 책이 많아서 공부하기에 좋아요. '
  + '수업이 끝나면 친구를 만나서 같이 저녁을 먹어요. '
  + '한국 음식은 조금 맵지만 정말 맛있어서 자주 먹고 싶어요. '
  + '주말에는 아르바이트를 하거나 집에서 쉬어요. '
  + '다음 학기에는 장학금을 받고 싶어서 열심히 공부할 거예요.';

function saveShadow(){
  const sh = state.shadow;
  store.set('shadow', { raw: sh.raw, sents: sh.sents, breaks: sh.breaks,
                        loop: sh.loop, gap: sh.gap, mimic: sh.mimic, slow: sh.slow,
                        trans: sh.trans, showVi: sh.showVi });
}

/** Nhóm các câu thành từng « ý » theo các mốc ngắt người học đặt. */
function shadowChunks(){
  const sh = state.shadow, out = [];
  let cur = null;
  sh.sents.forEach((_, i) => {
    if (i === 0 || sh.breaks[i]){ cur = { from: i, indices: [] }; out.push(cur); }
    cur.indices.push(i);
  });
  return out;
}

/** Đọc một câu: ưu tiên tệp thu sẵn / máy chủ, cuối cùng mới tới giọng máy. */
function sayOne(text, opts){
  opts = opts || {};
  Speech.stop();
  const fin = () => { try { opts.onEnd && opts.onEnd(); } catch(e){} };
  TTS.play(text, {
    rate: opts.slow ? .7 : 1,
    onEnd: fin,
    onFail(){
      if (!Speech.supported || !Speech.hasKorean()){ setTimeout(fin, 300); return; }
      Speech.onReady(() => Speech.speak(text, {
        rate: opts.slow ? Math.max(.45, Speech.cfg.rate - .3) : undefined,
        onEnd: fin
      }));
    }
  });
}

let shToken = 0;

function shStop(){
  shToken++;
  TTS.stop(); Speech.stop();
  $$('.sh-row').forEach(r => r.classList.remove('on', 'waiting'));
  $$('.sh-chunk').forEach(c => c.classList.remove('on'));
}

/** Ước lượng thời gian đọc một câu, để biết chờ bao lâu cho người học nhại lại. */
function estimateMs(text){
  return Math.max(900, text.length * 195 * (state.shadow.slow ? 1.4 : 1));
}

function shPlay(indices, chunkIdx){
  const sh = state.shadow;
  shStop();
  const mine = ++shToken;
  if (chunkIdx !== undefined){
    const c = $(`.sh-chunk[data-chunk="${chunkIdx}"]`);
    if (c) c.classList.add('on');
  }

  let i = 0, rep = 0;
  const step = () => {
    if (mine !== shToken) return;
    if (i >= indices.length){ shStop(); return; }
    const idx = indices[i];
    const row = $(`.sh-row[data-si="${idx}"]`);
    $$('.sh-row').forEach(r => r.classList.remove('on', 'waiting'));
    if (row){
      row.classList.add('on');
      if (row.scrollIntoView) row.scrollIntoView({ block:'center', behavior:'smooth' });
    }
    sayOne(sh.sents[idx], {
      slow: sh.slow,
      onEnd(){
        if (mine !== shToken) return;
        rep++;
        if (rep < sh.loop){ setTimeout(step, 320); return; }
        rep = 0; i++;
        let wait = sh.gap;
        if (sh.mimic){
          wait = estimateMs(sh.sents[idx]) * sh.mimic;
          if (row){ row.classList.remove('on'); row.classList.add('waiting'); }
        }
        setTimeout(step, wait);
      }
    });
  };
  step();
}

/* ---------- dịch cả đoạn ---------- */
function transBox(html, cls){
  const b = $('#shTransBox');
  if (b) b.innerHTML = html ? `<div class="sh-trans ${cls || ''}">${html}</div>` : '';
}

function runTranslate(){
  const sh = state.shadow;
  if (!sh.sents.length) return;

  const gg = `<a class="pbtn" href="${Translate.googleUrl(sh.raw || sh.sents.join(' '))}"
                 target="_blank" rel="noopener noreferrer">Mở cả đoạn trong Google Dịch</a>`;

  const hasWorker = !!(window.LANGLAB_CONFIG && (window.LANGLAB_CONFIG.translateWorker || '').trim());
  if (!Translate.online() && !hasWorker){
    transBox(`<b>Chưa dịch được ở chế độ này</b>
      <p>Trang đang mở trực tiếp từ tệp và chưa nối máy dịch. Khi mở qua link web, phần dịch chạy bình thường.</p>
      <p>Tạm thời dùng cách này, không cần cài gì:</p><div class="wp-actions" style="padding:10px 0 0">${gg}</div>`, 'warn');
    return;
  }

  transBox('<b>Đang dịch cả đoạn…</b><p>Cả đoạn được gửi một lượt để bản dịch có ngữ cảnh, nên hơi lâu một chút.</p>');

  Translate.run(sh.sents, (map, err) => {
    Object.assign(sh.trans, map);
    const total = sh.sents.length;
    const got = sh.sents.filter(s => sh.trans[Translate.hash(s)]).length;
    const missing = total - got;

    // Chỉ báo thành công khi ĐỦ câu. Trước đây chỗ này đếm cả bản dịch cũ
    // trong bộ nhớ nên vẫn báo « xong » dù lần gọi này hỏng — che mất lỗi.
    if (!missing){
      sh.showVi = true;
      saveShadow(); render();
      // Gọn thôi: một dòng xanh, tự ẩn sau vài giây. Bản dịch đã nằm dưới từng câu rồi.
      transBox('<b>Đã dịch xong ✓</b>', 'good');
      setTimeout(() => { if ($('#shTransBox')) transBox(''); }, 3000);
      return;
    }

    if (got){                                   // dịch được một phần
      sh.showVi = true;
      saveShadow(); render();
    }
    const partial = got ? `<p>Đã có ${got}/${total} câu, còn <b>${missing} câu chưa dịch được</b>.</p>` : '';

    if (err === 'no-key' || err === 'no-module'){
      transBox(`<b>Máy dịch của trang chưa sẵn sàng</b>
        ${partial}
        <p>Phần dịch chạy qua máy chủ dịch của trang (Cloudflare Worker) và máy chủ này chưa nhận được khoá API.</p>
        <p><i>Nếu bạn là người quản trị trang:</i> vào Worker <span class="mono">langlab-translate</span> →
        Settings → Variables and Secrets, thêm secret <span class="mono">GEMINI_API_KEY</span> (khoá lấy miễn phí ở
        <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>).</p>
        <p>Trong lúc đó, dùng tạm:</p>
        <div class="wp-actions" style="padding:10px 0 0">${gg}</div>`, 'warn');
      return;
    }

    transBox(`<b>Dịch không thành công</b>
      ${partial}
      <p class="mono" style="font-size:11px;word-break:break-all">${esc(String(err || 'không rõ lỗi'))}</p>
      <p>Thường do hết hạn mức của khoá hoặc mạng chập chờn — thử lại sau ít phút.
      Nếu bạn quản trị trang, kiểm tra khoá và hạn mức của Worker dịch.</p>
      <div class="wp-actions" style="padding:10px 0 0">${gg}</div>`, 'warn');
  });
}

/* ============================================================
   BẢNG TRA CẢ CÂU
   ============================================================ */
function openSentence(text){
  const el = wordPanel();
  const toks = Words.tokens(text);
  const gram = Words.grammarIn(text);
  const idx = Words.index();

  const srcBtn = s => `
    <a class="src" href="${s.url(text)}" target="_blank" rel="noopener noreferrer">
      <span class="src-top"><b>${esc(s.name)}</b><span class="src-tag">${esc(s.tag)}</span></span>
      <span class="src-ko ko">${esc(s.ko)}</span>
      <span class="src-note">${esc(s.note)}</span>
    </a>`;

  el.innerHTML = `
    <div class="wp-head">
      <div>
        <span class="eyebrow">Tra cả câu</span>
        <div class="wp-sent ko">${Words.mark(text)}</div>
        ${state.shadow.trans[Translate.hash(text)]
          ? `<div class="wp-sent-vi">${esc(state.shadow.trans[Translate.hash(text)])}</div>` : ''}
      </div>
${WP_TOOLS}
    </div>

    <div class="wp-actions">
      <button class="pbtn primary" data-speak="${esc(text)}">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe
      </button>
      <button class="pbtn" data-speak-slow="${esc(text)}">Chậm</button>
      <button class="pbtn" data-stop="1">Dừng</button>
    </div>

    <div class="wp-sec">
      <h5>Từ trong câu — bấm để tra</h5>
      <div class="tok-list">
        ${toks.map(w => {
          const a = Words.analyze(w);
          return `<button class="tok ${a.hit ? 'known' : ''}" data-kw="${esc(w)}">
            <span class="tok-ko ko">${esc(w)}</span>
            <span class="tok-vi">${a.hit ? esc(a.hit.vi) : (a.best !== w ? esc(a.best) : '?')}</span>
          </button>`;
        }).join('')}
      </div>
      <p class="wp-hint">Ô tô đậm là từ đã có trong ${idx ? idx.words.length : 0} từ của Sơ cấp 1.
      Ô nhạt là từ ngoài khoá — bấm vào vẫn tra được ở từ điển ngoài.</p>
    </div>

    <div class="wp-sec">
      <h5>Ngữ pháp nhận ra trong câu</h5>
      ${gram.length ? gram.map(g => `
        <div class="gram-hit">
          <div class="gram-hit-top">
            <span class="ko">${esc(g.form)}</span>
            <button class="chip link" data-lesson="${g.lesson}">Bài ${String(g.lesson).padStart(2,'0')}</button>
          </div>
          <div class="gram-hit-vi">${esc(g.vi)}</div>
          <div class="gram-hit-m">khớp ở «<span class="ko">${esc(g.matched)}</span>»</div>
          ${g.note ? `<p class="gram-hit-note">${esc(g.note)}</p>` : ''}
        </div>`).join('')
      : `<p class="wp-empty">Không thấy mẫu nào trong danh sách ngữ pháp Sơ cấp 1.
         Câu này có thể dùng cấu trúc của trình độ cao hơn.</p>`}
    </div>

    <div class="wp-sec">
      <h5>Tra cả câu ở nguồn ngoài</h5>
      <div class="src-list">${Words.SENTENCE_SOURCES.filter(s => s.primary).map(srcBtn).join('')}</div>
      <div class="src-list compact">${Words.SENTENCE_SOURCES.filter(s => !s.primary).map(srcBtn).join('')}</div>
      <p class="wp-hint">우리말샘 và Youglish tra theo cụm nên câu dài có thể không ra kết quả —
      khi đó hãy bấm vào một từ riêng ở trên.</p>
    </div>`;

  showPanel(el);
}

/* ============================================================
   MỘT MỤC TỪ ĐIỂN đầy đủ — dùng chung cho bảng tra và màn Từ điển
   ============================================================ */
const LEVEL_VI = { '초급':'Sơ cấp', '중급':'Trung cấp', '고급':'Cao cấp' };

function dictEntryHtml(hit){
  const senses = (hit.senses && hit.senses.length) ? hit.senses
               : [{ def_vi: hit.vi, def_ko: '' }];

  // cấu tạo từ: Hán-Hàn (kèm Hán-Việt nếu có) hay thuần Hàn
  let structure = '';
  if (hit.hanja){
    structure = `<div class="de-struct">
      <span class="de-lbl">Cấu tạo</span>
      <span class="de-hanja">${esc(hit.hanja)}</span>
      <span class="de-note">${hit.hv ? 'âm Hán-Việt: <b>' + esc(hit.hv) + '</b> — ' : ''}từ gốc Hán, nhớ chữ Hán là nhớ cả chùm từ cùng gốc.</span>
    </div>`;
  }

  const level = hit.level && LEVEL_VI[hit.level] ? LEVEL_VI[hit.level] : (hit.level || '');

  return `
    <div class="dict-entry">
      <div class="de-head">
        <span class="de-word ko">${esc(hit.ko)}</span>
        ${hit.rom ? `<span class="de-rom">[${esc(hit.rom)}]</span>` : ''}
      </div>
      <div class="de-meta">
        ${hit.pos ? `<span class="chip">${esc(hit.pos)}</span>` : ''}
        ${level ? `<span class="chip lv">${esc(level)}</span>` : ''}
        ${hit.hanja ? `<span class="chip gold">${esc(hit.hanja)}${hit.hv ? ' · ' + esc(hit.hv) : ''}</span>` : ''}
        ${hit.lesson
          ? `<button class="chip link" data-lesson="${hit.lesson}" data-lv="${esc(hit.level || '')}">Bài ${String(hit.lesson).padStart(2,'0')}</button>`
          : `<span class="chip soft">${esc(hit.theme || '')}</span>`}
      </div>
      ${structure}
      <ol class="de-senses">
        ${senses.map(s => `
          <li>
            <div class="de-vi">${esc(s.def_vi || '')}</div>
            ${s.def_ko ? `<div class="de-ko ko">${esc(s.def_ko)}</div>` : ''}
            ${(s.examples && s.examples.length) ? `
              <div class="de-ex-list">
                ${s.examples.map(e => `
                  <div class="de-ex">
                    <span class="ko">${Words.mark(typeof e === 'string' ? e : e.ko)}</span>
                    ${(e && e.vi) ? `<span class="de-ex-vi">${esc(e.vi)}</span>` : ''}
                  </div>`).join('')}
              </div>` : ''}
          </li>`).join('')}
      </ol>
      ${senses.length > 1 ? `<p class="de-hint">${senses.length} nghĩa theo ngữ cảnh khác nhau.</p>` : ''}
      ${(hit.examples && hit.examples.length) ? `
        <div class="de-usage">
          <span class="de-lbl">Cách dùng</span>
          <div class="de-ex-list">
            ${hit.examples.map(e => {
              const ko = typeof e === 'string' ? e : e.ko;
              return `<div class="de-ex">
                <span class="ko">${Words.mark(ko)}</span>
                ${(e && e.vi) ? `<span class="de-ex-vi">${esc(e.vi)}</span>` : ''}
                <button class="icon-btn de-ex-play" data-speak="${esc(ko)}" title="Nghe">
                  <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
                </button>
              </div>`;
            }).join('')}
          </div>
        </div>` : ''}
    </div>`;
}

/* ============================================================
   BẢNG TRA TỪ — mở khi bấm vào bất kỳ từ tiếng Hàn nào
   ============================================================ */
let wordState = { token:'', query:'' };

/* ---------- cửa sổ tra từ: nổi, kéo-thả, thu gọn ---------- */
const WP_DESKTOP = 641;   // từ 641px mới cho kéo-thả (khớp breakpoint mobile 640)
const WP_TOOLS = `
      <div class="wp-tools">
        <button class="icon-btn wp-min" id="wpMin" title="Thu gọn / mở rộng">
          <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <button class="icon-btn wp-close" id="wpClose" title="Đóng">
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>`;

function clampPanel(el, left, top){
  const w = el.offsetWidth || 384;
  const maxL = Math.max(8, window.innerWidth  - w - 8);
  const maxT = Math.max(8, window.innerHeight - 46 - 8);   // luôn chừa header để kéo lại được
  return { left: Math.max(8, Math.min(left, maxL)), top: Math.max(8, Math.min(top, maxT)) };
}

function showPanel(el){
  el.classList.add('open');
  el.classList.toggle('collapsed', !!store.get('wpanelCollapsed', false));
  if (window.innerWidth >= WP_DESKTOP){
    const saved = store.get('wpanelPos', null);
    const pos = saved || { left: window.innerWidth - 384 - 24, top: 76 };
    const c = clampPanel(el, pos.left, pos.top);
    el.style.left = c.left + 'px'; el.style.top = c.top + 'px';
    el.style.right = 'auto'; el.style.bottom = 'auto';
  } else {
    el.style.left = el.style.top = el.style.right = el.style.bottom = '';
  }
  document.body.classList.add('wp-open');
}

/* kéo cửa sổ bằng thanh tiêu đề (chuột hoặc cảm ứng) */
let wpDrag = null;
document.addEventListener('pointerdown', e => {
  if (window.innerWidth < WP_DESKTOP) return;
  const head = e.target.closest && e.target.closest('.wp-head');
  if (!head) return;
  if (e.target.closest('button, a, input, textarea, select')) return;   // bấm nút thì không kéo
  const el = head.closest('.wpanel');
  if (!el) return;
  const r = el.getBoundingClientRect();
  wpDrag = { el, dx: e.clientX - r.left, dy: e.clientY - r.top };
  el.classList.add('dragging');
});
document.addEventListener('pointermove', e => {
  if (!wpDrag) return;
  const c = clampPanel(wpDrag.el, e.clientX - wpDrag.dx, e.clientY - wpDrag.dy);
  wpDrag.el.style.left = c.left + 'px'; wpDrag.el.style.top = c.top + 'px';
  wpDrag.el.style.right = 'auto'; wpDrag.el.style.bottom = 'auto';
});
function wpDragEnd(){
  if (!wpDrag) return;
  const el = wpDrag.el; el.classList.remove('dragging');
  store.set('wpanelPos', { left: parseInt(el.style.left, 10) || 0, top: parseInt(el.style.top, 10) || 0 });
  wpDrag = null;
}
document.addEventListener('pointerup', wpDragEnd);
document.addEventListener('pointercancel', wpDragEnd);

function wordPanel(){
  let el = $('#wordPanel');
  if (!el){
    el = document.createElement('aside');
    el.id = 'wordPanel'; el.className = 'wpanel';
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  return el;
}

function openWord(token, queryOverride){
  const a  = Words.analyze(token);
  const q  = queryOverride || a.best;
  wordState = { token: token, query: q };
  const ex = Words.examples(token, 5);
  const hit = a.hit;
  const el = wordPanel();

  const primary = Words.SOURCES.filter(s => s.primary);
  const rest    = Words.SOURCES.filter(s => !s.primary);
  const srcBtn = s => `
    <a class="src" href="${s.url(q)}" target="_blank" rel="noopener noreferrer">
      <span class="src-top">
        <b>${esc(s.name)}</b>
        <span class="src-tag">${esc(s.tag)}</span>
      </span>
      <span class="src-ko ko">${esc(s.ko)}</span>
      <span class="src-note">${esc(s.note)}</span>
    </a>`;

  el.innerHTML = `
    <div class="wp-head">
      <div>
        <span class="eyebrow">Tra từ</span>
        <div class="wp-word ko">${esc(token)}</div>
        ${hit ? `<div class="wp-rom">${esc(hit.rom)}</div>` : ''}
      </div>
${WP_TOOLS}
    </div>

    <div class="wp-actions">
      <button class="pbtn primary" data-speak="${esc(token)}">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe
      </button>
      <button class="pbtn" data-speak-slow="${esc(token)}">Chậm</button>
      <button class="pbtn" data-syl="${esc(token)}">Từng chữ</button>
      <button class="pbtn" data-add="${esc(token)}">+ Thẻ</button>
      <button class="pbtn" data-write="${esc(token)}">Nét viết</button>
    </div>

    <div class="wp-sec">
      <h5>Dạng dùng để tra</h5>
      <div class="form-chips">
        ${a.forms.map(f => `
          <button class="fchip ${f.form === q ? 'on' : ''}" data-kw-form="${esc(f.form)}">
            <span class="ko">${esc(f.form)}</span>
            <span>${esc(f.why)}</span>
          </button>`).join('')}
      </div>
      <p class="wp-hint">Tiếng Hàn dính trợ từ và đuôi chia vào sau từ, nên tra nguyên dạng thường không ra.
        Chọn dạng gốc rồi mới bấm sang từ điển.</p>
    </div>

    <div class="wp-sec">
      <h5>Mục từ</h5>
      ${hit ? dictEntryHtml(hit)
      : `<p class="wp-empty">Chưa có trong ${Words.index().words.length} từ của LangLab. Dùng các từ điển bên dưới để tra.</p>`}
    </div>

    <div class="wp-sec">
      <h5>Dùng trong câu</h5>
      ${ex.length ? ex.map(s => `
        <div class="wp-ex">
          <span class="ko">${Words.mark(s.ko)}</span>
          <span class="wp-ex-vi">${esc(s.vi)}</span>
          <span class="wp-ex-from">${esc(s.from)}</span>
          <button class="icon-btn wp-ex-play" data-speak="${esc(s.ko)}" title="Nghe câu này">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
          </button>
        </div>`).join('')
      : `<p class="wp-empty">Chưa có câu nào trong khoá dùng từ này. Tatoeba và 우리말샘 bên dưới có sẵn hàng trăm câu thật.</p>`}
    </div>

    <div class="wp-sec">
      <h5>Tra ở từ điển ngoài — «${esc(q)}»</h5>
      <div class="src-list">${primary.map(srcBtn).join('')}</div>
      <div class="src-list compact">${rest.map(srcBtn).join('')}</div>
    </div>`;

  showPanel(el);
}

function closeWord(){
  const el = $('#wordPanel');
  if (el) el.classList.remove('open');
  document.body.classList.remove('wp-open');
}

/* ---------- gợi ý nhanh khi rê chuột ---------- */
let tipTimer;
function showTip(el){
  const token = el.dataset.kw;
  const a = Words.analyze(token);
  let tip = $('#kwtip');
  if (!tip){ tip = document.createElement('div'); tip.id = 'kwtip'; tip.className = 'kwtip'; document.body.appendChild(tip); }
  tip.innerHTML = a.hit
    ? `<b class="ko">${esc(a.hit.ko)}</b> <span class="r">${esc(a.hit.rom)}</span><span class="v">${esc(a.hit.vi)}</span>`
    : `<b class="ko">${esc(token)}</b><span class="v">Chưa có trong khoá — bấm để tra ngoài</span>`;
  const r = el.getBoundingClientRect();
  tip.style.left = Math.max(8, Math.min(window.innerWidth - 250, r.left)) + 'px';
  tip.style.top  = (r.top > 90 ? r.top - 8 : r.bottom + 8) + 'px';
  tip.classList.toggle('below', r.top <= 90);
  tip.classList.add('show');
}
function hideTip(){ const t = $('#kwtip'); if (t) t.classList.remove('show'); }

document.addEventListener('mouseover', e => {
  const k = e.target.closest && e.target.closest('.kw');
  if (!k){ clearTimeout(tipTimer); hideTip(); return; }
  clearTimeout(tipTimer);
  tipTimer = setTimeout(() => showTip(k), 180);
});
document.addEventListener('scroll', hideTip, true);

/* ============================================================
   SỰ KIỆN TOÀN CỤC
   ============================================================ */
document.addEventListener('click', e => {
  const t = e.target;

  /* ----- bảng tra từ ----- */
  // gồm cả span .kw trong câu và ô .tok trong bảng tra câu
  const kw = t.closest('[data-kw]');
  if (kw){ hideTip(); openWord(kw.dataset.kw); return; }

  /* ----- luyện shadowing ----- */
  if (t.closest('#shParse') || t.closest('#shSample')){
    const box = $('#shInput');
    const raw = t.closest('#shSample') ? SAMPLE_TEXT : (box ? box.value : '');
    const sents = Words.splitSentences(raw);
    if (!sents.length){ toast('Chưa tách được câu nào — đoạn văn có chữ Hàn chưa?'); return; }
    state.shadow.raw = raw.trim();
    state.shadow.sents = sents;
    state.shadow.breaks = {};
    saveShadow();
    render();
    toast('Đã tách ' + sents.length + ' câu');
    return;
  }
  if (t.closest('#shEdit')){
    shStop();
    const keep = state.shadow.raw;
    state.shadow.sents = [];
    saveShadow();
    render();
    const box = $('#shInput'); if (box){ box.value = keep; box.focus(); }
    return;
  }

  const shb = t.closest('[data-sh-break]');
  if (shb){
    const i = +shb.dataset.shBreak;
    state.shadow.breaks[i] = true;
    saveShadow(); render();
    return;
  }
  const shm = t.closest('[data-sh-merge]');
  if (shm){
    delete state.shadow.breaks[+shm.dataset.shMerge];
    saveShadow(); render();
    return;
  }
  const shp = t.closest('[data-sh-play]');
  if (shp){
    const i = +shp.dataset.shPlay;
    const slow = shp.dataset.slow === '1';
    shStop();
    const mine = ++shToken;
    const row = $(`.sh-row[data-si="${i}"]`);
    if (row) row.classList.add('on');
    let rep = 0;
    const once = () => {
      if (mine !== shToken) return;
      sayOne(state.shadow.sents[i], { slow: slow || state.shadow.slow, onEnd(){
        if (mine !== shToken) return;
        rep++;
        if (rep < state.shadow.loop){ setTimeout(once, 320); return; }
        if (row) row.classList.remove('on');
      }});
    };
    once();
    return;
  }
  const shc = t.closest('[data-sh-chunk]');
  if (shc){
    const ci = +shc.dataset.shChunk;
    const c = shadowChunks()[ci];
    if (c) shPlay(c.indices, ci);
    return;
  }
  if (t.closest('[data-sh-all]')){
    shPlay(state.shadow.sents.map((_, i) => i));
    return;
  }
  const shl = t.closest('[data-sh-loop]');
  if (shl){
    state.shadow.loop = +shl.dataset.shLoop;
    $$('[data-sh-loop]').forEach(x => x.setAttribute('aria-pressed', x === shl));
    saveShadow();
    return;
  }
  const shs = t.closest('[data-sh-slow]');
  if (shs){
    state.shadow.slow = shs.dataset.shSlow === '1';
    $$('[data-sh-slow]').forEach(x => x.setAttribute('aria-pressed', x === shs));
    saveShadow();
    return;
  }
  const shx = t.closest('[data-sh-mimic]');
  if (shx){
    state.shadow.mimic = parseFloat(shx.dataset.shMimic);
    saveShadow(); render();
    return;
  }
  if (t.closest('#shToggleVi')){
    state.shadow.showVi = !state.shadow.showVi;
    saveShadow(); render();
    return;
  }
  if (t.closest('#shTrans')){ runTranslate(); return; }

  const sent = t.closest('[data-sent]');
  if (sent){
    const i = +sent.dataset.sent;
    const txt = state.shadow.sents[i];
    if (txt) openSentence(txt);
    return;
  }

  const kwo = t.closest('[data-kw-open]');
  if (kwo){ openWord(kwo.dataset.kwOpen); return; }

  const kwf = t.closest('[data-kw-form]');
  if (kwf){ openWord(wordState.token, kwf.dataset.kwForm); return; }

  if (t.closest('#wpMin')){
    const p = $('#wordPanel');
    if (p){ const c = !p.classList.contains('collapsed'); p.classList.toggle('collapsed', c); store.set('wpanelCollapsed', c); }
    return;
  }
  if (t.closest('#wpClose')){ closeWord(); return; }

  if (t.closest('[data-stop]')){ stopAudio(); return; }

  const ss = t.closest('[data-speak-slow]');
  if (ss){ speakSlow(ss.dataset.speakSlow); return; }

  const sy = t.closest('[data-syl]');
  if (sy){
    // đọc rời từng chữ để nghe rõ patchim và chỗ nối âm
    const chars = sy.dataset.syl.split('').filter(c => Words.HANGUL_RE.test(c));
    if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return; }
    Speech.onReady(() => {
      if (ensureVoice()) Speech.speakLines(chars, { rate: Math.max(.5, Speech.cfg.rate - .2), gap: 240 });
    });
    return;
  }

  const lvchip = t.closest('.level-chip');
  if (lvchip && lvchip.dataset.level){
    if (!lvchip.disabled && lvchip.dataset.level !== state.level){
      state.level = lvchip.dataset.level; store.set('level', state.level);
      quizData = null; state.quiz = null; state.lesson = null; state.view = 'home';
      render();
    }
    return;
  }

  const nav = t.closest('[data-go]');
  if (nav){ go(nav.dataset.go); return; }

  const les = t.closest('[data-lesson]');
  if (les){
    if (les.dataset.lv && les.dataset.lv !== state.level){ state.level = les.dataset.lv; store.set('level', state.level); quizData = null; state.quiz = null; }
    closeWord(); go('lesson', +les.dataset.lesson); return;
  }

  const tab = t.closest('.tab');
  if (tab){
    state.tab = tab.dataset.tab;
    $$('.tab').forEach(x => x.setAttribute('aria-selected', x === tab));
    const l = curLesson();
    $('#tabbody').innerHTML = VIEWS['tab_' + state.tab](l);
    if (state.tab === 'write') mountTrace();
    return;
  }

  const sp = t.closest('[data-speak]');
  if (sp){ speak(sp.dataset.speak); return; }

  if (t.closest('[data-speak-all]')){
    const l = curLesson();
    const rows = $$('.dlg-row');
    const lines = l.dialogue.map(d => d.ko);
    const hi = i => {
      rows.forEach((r, k) => r.classList.toggle('speaking', k === i));
      if (rows[i] && rows[i].scrollIntoView) rows[i].scrollIntoView({ block:'nearest', behavior:'smooth' });
    };
    const clear = () => rows.forEach(r => r.classList.remove('speaking'));

    Speech.stop();
    TTS.playSeq(lines, {
      onLine: hi,
      onEnd: clear,
      onFail(){                                  // chưa thu sẵn → dùng giọng máy
        if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return; }
        Speech.onReady(() => {
          if (!ensureVoice()) return;
          Speech.speakLines(lines, { onChunk: c => hi(c.line), onEnd: clear });
        });
      }
    });
    return;
  }

  const add = t.closest('[data-add]');
  if (add){
    const k = add.dataset.add;
    if (!state.deck.includes(k)){ state.deck.unshift(k); store.set('deck', state.deck); toast('Đã thêm ' + k + ' vào bộ thẻ'); }
    else toast(k + ' đã có trong bộ thẻ');
    return;
  }

  const wr = t.closest('[data-write]');
  if (wr){
    const ch = wr.dataset.write[0];
    const parts = decomposeHangul(ch);
    if (parts){ stageMode = 'syllable'; stageChar = ch; state.syll = { cho:parts.cho, jung:parts.jung, jong:parts.jong }; }
    else if (JAMO[ch]){ stageMode = 'jamo'; state.jamo = ch; }
    go('write');
    return;
  }

  const jb = t.closest('[data-jamo]');
  if (jb){
    state.jamo = jb.dataset.jamo; stageMode = 'jamo';
    $$('.jbtn').forEach(b => b.setAttribute('aria-pressed', b === jb));
    drawStage();
    return;
  }

  const pk = t.closest('[data-pick]');
  if (pk){
    state.syll[pk.dataset.pick] = pk.dataset.val;
    $$(`[data-pick="${pk.dataset.pick}"]`).forEach(b => b.setAttribute('aria-pressed', b === pk));
    const ch = composeHangul(state.syll.cho, state.syll.jung, state.syll.jong);
    const pv = $('#syllPreview'); if (pv) pv.textContent = ch ? 'Kết quả: ' + ch : '';
    return;
  }

  if (t.closest('[data-build]')){
    const ch = composeHangul(state.syll.cho, state.syll.jung, state.syll.jong);
    if (!ch){ toast('Chưa chọn đủ phụ âm đầu và nguyên âm'); return; }
    stageMode = 'syllable'; stageChar = ch; drawStage();
    return;
  }

  if (t.closest('#play')){ drawStage(); return; }

  const spd = t.closest('[data-speed]');
  if (spd){
    state.speed = +spd.dataset.speed;
    $$('[data-speed]').forEach(b => b.setAttribute('aria-pressed', b === spd));
    return;
  }

  const st = t.closest('[data-step]');
  if (st){
    animToken++;                                  // dừng animation đang chạy
    const svg = $('#paper .glyph');
    if (svg){
      showUpTo(svg, +st.dataset.step);
      $$('.step-dot').forEach((d, k) => d.setAttribute('aria-pressed', k === +st.dataset.step));
    }
    return;
  }

  if (t.closest('[data-clear-trace]')){ clearTrace(); return; }

  if (t.closest('#flipBtn') || t.closest('#flash')){
    const f = $('#flash'); if (!f) return;
    const on = f.classList.toggle('open');
    const b = $('#flipBtn'); if (b) b.textContent = on ? 'Ẩn đáp án' : 'Lật thẻ';
    return;
  }

  const gr = t.closest('.grade');
  if (gr){
    $('#flash').classList.remove('open');
    const b = $('#flipBtn'); if (b) b.textContent = 'Lật thẻ';
    toast('Đã ghi nhận · ' + gr.querySelector('b').textContent);
    return;
  }

  /* ----- bài tập ----- */
  const qopt = t.closest('[data-quiz-opt]');
  if (qopt){
    const Q = state.quiz;
    if (Q && !Q.answered){
      Q.chosen = +qopt.dataset.quizOpt; Q.answered = true;
      if (Q.chosen === Q.qs[Q.idx].correct) Q.score++;
      paintQuiz();
    }
    return;
  }
  const qadd = t.closest('[data-quiz-oadd]');
  if (qadd){ const q = state.quiz.qs[state.quiz.idx]; q.order.push(+qadd.dataset.quizOadd); paintQuiz(); return; }
  const qorm = t.closest('[data-quiz-orm]');
  if (qorm){ const q = state.quiz.qs[state.quiz.idx]; const id = +qorm.dataset.quizOrm; q.order = q.order.filter(x => x !== id); paintQuiz(); return; }
  if (t.closest('[data-quiz-oclear]')){ state.quiz.qs[state.quiz.idx].order = []; paintQuiz(); return; }
  if (t.closest('[data-quiz-ocheck]')){
    const Q = state.quiz, q = Q.qs[Q.idx];
    Q.answered = true;
    if (q.order.map(id => q.chips.find(x => x.id === id).t).join(' ') === q.tokens.join(' ')) Q.score++;
    paintQuiz(); return;
  }
  if (t.closest('[data-quiz-next]')){ const Q = state.quiz; Q.idx++; Q.answered = false; Q.chosen = null; paintQuiz(); return; }
  if (t.closest('[data-quiz-restart]')){ quizStart(state.quiz.type); paintQuiz(); return; }
  const qsay = t.closest('[data-quiz-say]');
  if (qsay){ speak(qsay.dataset.quizSay); return; }

  const qt = t.closest('.qt');
  if (qt){ quizStart(qt.dataset.qtype); $$('.qt').forEach(x => x.setAttribute('aria-pressed', x === qt)); paintQuiz(); return; }

  const th = t.closest('#themeBtn');
  if (th){
    const order = ['auto','light','dark'];
    state.theme = order[(order.indexOf(state.theme) + 1) % 3];
    applyTheme(); store.set('theme', state.theme);
    return;
  }
});

/* phím tắt */
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && state.view === 'srs'){
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    e.preventDefault();
    const f = $('#flash'); if (!f) return;
    const on = f.classList.toggle('open');
    const b = $('#flipBtn'); if (b) b.textContent = on ? 'Ẩn đáp án' : 'Lật thẻ';
  }
  if (e.key === 'Enter' && state.view === 'write'){ drawStage(); }
  if (e.key === 'Escape'){ closeWord(); hideTip(); Speech.stop(); }
  // Enter trên một từ = mở bảng tra (dùng bàn phím)
  if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('kw')){
    e.preventDefault(); openWord(e.target.dataset.kw);
  }
});

/* tìm nhanh trên thanh trên cùng */
document.addEventListener('input', e => {
  if (e.target.id !== 'topq') return;
  const v = e.target.value.trim();
  if (!v) return;
  if (state.view !== 'dict'){ go('dict'); }
  const d = $('#dq'); if (d){ d.value = v; d.dispatchEvent(new Event('input')); }
});

/* ---------- giao diện sáng/tối ---------- */
function applyTheme(){
  const r = document.documentElement;
  if (state.theme === 'auto') r.removeAttribute('data-theme');
  else r.setAttribute('data-theme', state.theme);
  const b = $('#themeBtn');
  if (b) b.textContent = { auto:'Giao diện: theo hệ thống', light:'Giao diện: sáng', dark:'Giao diện: tối' }[state.theme];
}

/* ---------- khởi động ---------- */
if (typeof window !== "undefined") window.__langlab_wordcount = () => (Words.index() ? Words.index().words.length : 0);

Words.build(COURSE_KO,
  (typeof VOCAB_COMMON !== 'undefined') ? VOCAB_COMMON : [],
  (typeof DICT_KO !== 'undefined') ? DICT_KO : []);

/* ---------- nạp từ điển KRDict kiểu lazy ----------
   Từ điển lớn (có thể tới ~50k mục) không tải lúc khởi động để app hiện nhanh.
   Tải ngầm ngay sau khi vẽ xong; nếu đã nhúng sẵn (bản gộp) thì bỏ qua. */
let dictLoaded = (typeof DICT_KO !== 'undefined') && DICT_KO.length > 0;
function loadDict(cb){
  if (dictLoaded){ cb && cb(false); return; }
  dictLoaded = true;
  const finish = () => {
    const added = (typeof window.DICT_KO !== 'undefined') ? Words.addDict(window.DICT_KO) : 0;
    cb && cb(added > 0);
  };
  const s = document.createElement('script');
  s.src = 'js/dict-ko.js';
  s.onload = finish;
  s.onerror = () => { cb && cb(false); };
  document.head.appendChild(s);
}
applyTheme();
render();

// Tải từ điển KRDict ngầm ngay sau khi app đã hiện — không chặn khởi động.
// Nếu người dùng đang ở màn Từ điển, vẽ lại khi có thêm từ.
setTimeout(() => loadDict(added => {
  if (added && (state.view === 'dict')) render();
}), 300);

})();
