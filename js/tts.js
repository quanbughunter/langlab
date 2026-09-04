/* ============================================================
   LangLab — audio thu sẵn cho từng từ và từng câu
   ------------------------------------------------------------
   Giọng đọc của trình duyệt (Web Speech API) phụ thuộc vào giọng
   cài trên máy, và trên Windows thường là giọng cũ, nghe rất máy.
   Cách chắc chắn: thu sẵn mọi từ và mọi câu thành mp3 bằng giọng
   neural, rồi app chỉ việc phát tệp.

   Chạy `python tools/make_audio.py` một lần để sinh thư mục
   audio/tts/. Sau đó mọi thao tác nghe trong app đều dùng tệp thu
   sẵn; giọng máy chỉ còn là phương án dự phòng.

   Tên tệp = băm FNV-1a 32 bit của câu đã chuẩn hoá, tính giống
   nhau ở cả JS và Python nên hai bên luôn khớp.
   ============================================================ */

const TTS = (function(){
'use strict';

const ROOTS = ['audio/tts/', '../audio/tts/'];

/** Chuẩn hoá trước khi băm — phải giống hệt hàm norm() trong make_audio.py */
function norm(s){
  return String(s).replace(/\s+/g, ' ').trim();
}

function hash(s){
  const t = norm(s);
  let bytes;
  if (typeof TextEncoder !== 'undefined') bytes = new TextEncoder().encode(t);
  else bytes = unescape(encodeURIComponent(t)).split('').map(c => c.charCodeAt(0));
  let h = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i++){
    h ^= bytes[i];
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return ('0000000' + h.toString(16)).slice(-8);
}

const file = (s, k) => ROOTS[(k || 0) % ROOTS.length] + hash(s) + '.mp3';

/* ---------- ba tầng nguồn audio ----------
   1. tệp thu sẵn audio/tts/<băm>.mp3   — nhanh nhất, chạy offline
   2. máy chủ cục bộ /_tts?text=…       — đọc được MỌI văn bản, tự lưu vào tầng 1
   3. giọng máy của trình duyệt         — chỉ khi hai tầng trên đều không có     */

let el = null, root = 0, tried = 0, missing = {};
let currentRate = 1;
let server = null;                 // null = chưa dò, false = không có, true = có

const serverUrl = t => '/_tts?text=' + encodeURIComponent(norm(t));

function ensure(){
  if (el) return el;
  el = new Audio();
  el.preload = 'none';
  return el;
}

/**
 * Phát câu bằng tệp thu sẵn. Nếu không có tệp, gọi onFail() để
 * màn hình tự chuyển sang giọng máy.
 */
function play(text, opts){
  opts = opts || {};
  const key = hash(text);
  const a = ensure();
  a.pause();
  currentRate = opts.rate || 1;
  a.onended = () => { opts.onEnd && opts.onEnd(); };

  // đã biết không có tệp tĩnh: đi thẳng máy chủ, hoặc nhường cho giọng máy
  if (missing[key]) return fromServer(text, opts);

  tried = 0;
  const start = src => {
    a.src = src;
    a.playbackRate = currentRate;
    const p = a.play();
    if (p && p.catch) p.catch(a.onerror);
  };
  const fail = () => {
    if (tried < ROOTS.length - 1){ tried++; root = (root + 1) % ROOTS.length; start(file(text, root)); return; }
    missing[key] = 1;                       // lần sau khỏi dò lại cho nhanh
    fromServer(text, opts);
  };
  a.onerror = fail;
  start(file(text, root));
  return true;
}

/** Nhờ máy chủ cục bộ tổng hợp — chỗ này mới là thứ đọc được văn bản tuỳ ý. */
function fromServer(text, opts){
  if (server === false){ opts.onFail && opts.onFail(); return false; }
  const a = ensure();
  a.onerror = () => { server = false; opts.onFail && opts.onFail(); };
  a.onended = () => { opts.onEnd && opts.onEnd(); };
  a.src = serverUrl(text);
  a.playbackRate = opts.rate || 1;
  const p = a.play();
  if (p && p.catch) p.catch(() => { server = false; opts.onFail && opts.onFail(); });
  return true;
}

/** Đọc bất kỳ đoạn văn nào: tách câu rồi phát lần lượt. Dùng cho luyện shadowing. */
function speakText(text, opts){
  opts = opts || {};
  const parts = String(text)
    .split(/(?:\r?\n)+/).join(' ')
    .match(/[^.!?…。？！]+[.!?…。？！]*/g) || [];
  const lines = parts.map(s => norm(s)).filter(s => s.length);
  if (!lines.length) return false;
  return playSeq(lines, opts);
}

function stop(){
  seqToken++;
  if (el){ el.pause(); el.onerror = null; el.onended = null; }
}

/* ---------- phát liên tiếp nhiều câu (hội thoại) ---------- */
let seqToken = 0;

function playSeq(lines, opts){
  opts = opts || {};
  stop();
  const mine = ++seqToken;
  let i = 0;
  const step = () => {
    if (mine !== seqToken) return;
    if (i >= lines.length){ opts.onEnd && opts.onEnd(); return; }
    const idx = i;
    opts.onLine && opts.onLine(idx);
    play(lines[idx], {
      rate: opts.rate || 1,
      onEnd(){ if (mine !== seqToken) return; i++; setTimeout(step, opts.gap || 550); },
      onFail(){
        if (mine !== seqToken) return;
        if (idx === 0){ opts.onFail && opts.onFail(); return; }   // chưa thu → nhường cho giọng máy
        i++; setTimeout(step, 120);
      }
    });
  };
  step();
  return true;
}

/* ---------- dò xem đang có nguồn nào ---------- */
let probed = null;
const PROBE = '안녕하세요';
/* Dò bằng nhiều từ, vì chỉ cần một tệp lẻ bị thiếu là kết luận sai toàn bộ. */
const PROBE_WORDS = ['도서관', '학교', '친구', '안녕하세요'];

/** Dò tệp tĩnh (không cần mạng, không cần fetch — dùng chính thẻ audio). */
function probeStatic(cb){
  if (probed !== null){ cb(probed); return; }

  const queue = [];
  ROOTS.forEach((_, k) => PROBE_WORDS.forEach(w => queue.push([w, k])));

  let i = 0, settled = false;
  const a = new Audio();
  a.preload = 'metadata';
  const done = v => { if (settled) return; settled = true; probed = v; cb(v); };
  const next = () => {
    if (i >= queue.length){ done(false); return; }
    const [w, k] = queue[i++];
    root = k;
    a.src = file(w, k);
  };
  a.addEventListener('loadedmetadata', () => done(true));
  a.addEventListener('error', next);
  next();
  setTimeout(() => done(false), 5000);
}

/** Dò máy chủ cục bộ. Chỉ gọi khi trang được mở qua http(s). */
function probeServer(cb){
  if (server !== null){ cb(server); return; }
  if (!/^https?:$/.test(location.protocol)){ server = false; cb(false); return; }
  const done = v => { if (server === null){ server = v; cb(v); } };
  const t = setTimeout(() => done(false), 2500);
  const a = new Audio();
  a.preload = 'metadata';
  a.addEventListener('loadedmetadata', () => { clearTimeout(t); done(true); });
  a.addEventListener('error', () => { clearTimeout(t); done(false); });
  a.src = serverUrl(PROBE);
}

/** Trạng thái gộp: { statics, server } */
function probe(cb){
  let s1 = null, s2 = null;
  const fire = () => { if (s1 !== null && s2 !== null) cb({ statics: s1, server: s2 }); };
  probeStatic(v => { s1 = v; fire(); });
  probeServer(v => { s2 = v; fire(); });
}

function ready(){ return probed === true || server === true; }
function hasServer(){ return server === true; }

return { hash, file, play, playSeq, speakText, stop, ready, probe, hasServer, norm, roots: ROOTS };
})();
if (typeof window !== 'undefined') window.TTS = TTS;
