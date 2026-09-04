/* ============================================================
   LangLab — engine phát âm tiếng Hàn
   ------------------------------------------------------------
   Web Speech API mặc định đọc rất giật vì ba lý do:
     1. trình duyệt tự chọn giọng, nhiều khi không phải giọng Hàn;
     2. cả đoạn dài được đẩy vào một lần nên máy ngắt nghỉ tuỳ tiện;
     3. Chrome có lỗi: gọi speak() ngay sau cancel() sẽ bị nuốt tiếng,
        và tự dừng sau khoảng 15 giây.
   Module này xử lý cả ba: chọn đúng giọng ko-KR, cắt câu theo dấu
   rồi phát thành hàng đợi có khoảng nghỉ, và giữ nhịp cho Chrome.
   ============================================================ */

const Speech = (function(){
'use strict';

const SUPPORTED = typeof window !== 'undefined' && 'speechSynthesis' in window;

const cfg = {
  voiceURI: null,
  rate: 0.9,
  pitch: 1,
  gapSentence: 420,   // nghỉ giữa hai câu (ms)
  gapClause: 200,     // nghỉ ở dấu phẩy
  gapLine: 650        // nghỉ giữa hai lượt thoại
};
try {
  const saved = JSON.parse(localStorage.getItem('langlab.speech') || '{}');
  Object.assign(cfg, saved);
} catch(e){}
function save(){ try { localStorage.setItem('langlab.speech', JSON.stringify({
  voiceURI: cfg.voiceURI, rate: cfg.rate, pitch: cfg.pitch })); } catch(e){} }

let voices = [], readyCbs = [], loaded = false;

function loadVoices(){
  if (!SUPPORTED) return;
  const list = speechSynthesis.getVoices();
  if (!list.length) return;
  voices = list;
  if (!loaded){ loaded = true; readyCbs.splice(0).forEach(fn => { try { fn(); } catch(e){} }); }
}
if (SUPPORTED){
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
  // Safari đôi khi không bắn voiceschanged — thử lại vài nhịp
  let tries = 0;
  const t = setInterval(() => { loadVoices(); if (loaded || ++tries > 20) clearInterval(t); }, 250);
}

function korean(){ return voices.filter(v => /^ko(-|_|$)/i.test(v.lang)); }

/** Giọng đang dùng: giọng người học đã chọn, nếu không thì giọng Hàn tốt nhất. */
function current(){
  const ko = korean();
  if (!ko.length) return null;
  if (cfg.voiceURI){
    const found = ko.find(v => v.voiceURI === cfg.voiceURI);
    if (found) return found;
  }
  // Giọng "online/neural" của Edge và Google thường tự nhiên hơn giọng cài sẵn
  const score = v => (/google/i.test(v.name) ? 3 : 0)
                   + (/natural|neural|online/i.test(v.name) ? 3 : 0)
                   + (!v.localService ? 1 : 0);
  return ko.slice().sort((a, b) => score(b) - score(a))[0];
}

/* ---------- cắt câu ---------- */
function splitKeep(text, enders){
  const out = []; let buf = '';
  for (const ch of text){
    buf += ch;
    if (enders.indexOf(ch) > -1){ if (buf.trim()) out.push(buf.trim()); buf = ''; }
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

/** Trả về danh sách mẩu {t, gap} — mỗi mẩu là một hơi đọc. */
function chunk(text){
  const clean = String(text)
    .replace(/\([^)]*\)/g, ' ')     // bỏ phần trong ngoặc (phiên âm, chú thích)
    .replace(/[""''«»]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return [];
  const out = [];
  splitKeep(clean, ['.', '!', '?', '…', '。', '！', '？']).forEach(sent => {
    // câu ngắn đọc liền một hơi; câu dài mới cắt tiếp ở dấu phẩy
    if (sent.length <= 15 || sent.search(/[,、;:·]/) < 0){ out.push({ t: sent, gap: cfg.gapSentence }); return; }
    const parts = splitKeep(sent, [',', '、', ';', ':', '·']);
    parts.forEach((p, i) => out.push({ t: p, gap: i === parts.length - 1 ? cfg.gapSentence : cfg.gapClause }));
  });
  return out;
}

/* ---------- hàng đợi phát ---------- */
let token = 0, keepAlive = null, listeners = [];

function emit(ev, data){ listeners.forEach(fn => { try { fn(ev, data); } catch(e){} }); }
function onEvent(fn){ listeners.push(fn); }

function stop(){
  token++;
  if (keepAlive){ clearInterval(keepAlive); keepAlive = null; }
  if (SUPPORTED) speechSynthesis.cancel();
  emit('stop');
}

function play(items, opts){
  opts = opts || {};
  if (!SUPPORTED){ emit('unsupported'); return; }
  stop();
  const mine = ++token;
  const voice = current();

  // Chrome tự dừng sau ~15 giây im lặng nội bộ — nhịp resume này giữ cho nó chạy tiếp
  keepAlive = setInterval(() => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) speechSynthesis.resume();
  }, 6000);

  let i = 0;
  const step = () => {
    if (mine !== token) return;
    if (i >= items.length){
      if (keepAlive){ clearInterval(keepAlive); keepAlive = null; }
      emit('end');
      try { opts.onEnd && opts.onEnd(); } catch(err){}
      return;
    }
    const it = items[i];
    emit('chunk', it);
    // lỗi trong callback của màn hình không được phép làm đứt mạch đọc
    try { opts.onChunk && opts.onChunk(it, i); } catch(err){}

    const u = new SpeechSynthesisUtterance(it.t);
    u.lang  = 'ko-KR';
    u.rate  = opts.rate || cfg.rate;
    u.pitch = cfg.pitch;
    u.volume = 1;
    if (voice) u.voice = voice;

    let moved = false;
    const next = () => {
      if (moved || mine !== token) return;
      moved = true; i++;
      setTimeout(step, it.gap || cfg.gapSentence);
    };
    u.onend = next;
    u.onerror = next;
    // phòng trường hợp engine câm lặng: ước lượng thời lượng rồi tự đi tiếp
    const guard = Math.max(2500, it.t.length * 280 / (opts.rate || cfg.rate));
    setTimeout(next, guard);

    speechSynthesis.speak(u);
  };
  // Chrome nuốt tiếng nếu speak() gọi ngay sau cancel() — chờ một nhịp ngắn
  setTimeout(step, 120);
}

/** Đọc một câu / một cụm. */
function speak(text, opts){ play(chunk(text), opts); }

/** Đọc nhiều lượt thoại liên tiếp, nghỉ dài hơn giữa các lượt. */
function speakLines(lines, opts){
  opts = opts || {};
  const items = [];
  const lineGap = opts.gap || cfg.gapLine;
  lines.forEach((ln, li) => {
    const cs = chunk(typeof ln === 'string' ? ln : ln.text);
    cs.forEach((c, ci) => {
      c.line = li;
      if (ci === cs.length - 1) c.gap = lineGap;
      items.push(c);
    });
  });
  play(items, opts);
}

return {
  supported: SUPPORTED,
  cfg,
  save,
  voices: () => voices,
  koVoices: korean,
  currentVoice: current,
  hasKorean: () => korean().length > 0,
  onReady: fn => { if (loaded) fn(); else readyCbs.push(fn); },
  onEvent,
  chunk,
  speak,
  speakLines,
  stop
};
})();
if (typeof window !== 'undefined') window.Speech = Speech;
