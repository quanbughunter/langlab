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

/* Mỗi thứ tiếng một thư mục con — 本 tiếng Trung và 本 tiếng Nhật là cùng một
   chuỗi ký tự nhưng đọc khác hẳn nhau, để chung một rổ là phát nhầm tiếng.
   Thư mục gốc vẫn được dò sau cùng, để bộ audio tiếng Hàn thu từ trước
   (nằm thẳng trong audio/tts/) vẫn dùng được, khỏi phải thu lại.            */
function dirs(voice){
  const order = ROOTS.slice(root).concat(ROOTS.slice(0, root));
  const out = [];
  if (voice) order.forEach(r => out.push(r + voice + '/'));
  order.forEach(r => out.push(r));
  return out;
}

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
  const voice = opts.voice || '';
  const h = hash(text);
  const key = voice + '|' + h;
  const cands = dirs(voice);
  const a = ensure();
  a.pause();
  currentRate = opts.rate || 1;
  a.onended = () => { opts.onEnd && opts.onEnd(); };

  // đã biết không có tệp tĩnh: đi thẳng máy chủ, hoặc nhường cho giọng máy
  if (missing[key]) return fromServer(text, opts);

  // chưa hề thu tệp nào: khỏi dò từng thư mục cho mất công
  if (probed === false){ missing[key] = 1; return fromServer(text, opts); }

  tried = 0;
  let guard = null;
  const unguard = () => { if (guard){ clearTimeout(guard); guard = null; } };
  a.onplaying = unguard;
  const start = src => {
    unguard();
    a.src = src;
    a.playbackRate = currentRate;
    /* jsdom và vài WebView không ném lỗi mà cũng không phát: không có chốt
       thời gian thì cả chuỗi đứng im và người học chờ mãi không nghe gì. */
    guard = setTimeout(() => { guard = null; fail(true); }, 700);
    try {
      const p = a.play();
      if (p && p.catch) p.catch(a.onerror);
    } catch (e){ setTimeout(a.onerror, 0); }
  };
  const fail = mute => {
    unguard();
    /* Chốt thời gian nổ = môi trường này không báo lỗi tệp. Dò tiếp cũng vô ích,
       nên bỏ hẳn tầng tệp tĩnh cho cả phiên thay vì chờ từng thư mục một. */
    if (mute){ probed = false; missing[key] = 1; fromServer(text, opts); return; }
    if (tried < cands.length){ start(cands[tried++] + h + '.mp3'); return; }
    missing[key] = 1;                       // lần sau khỏi dò lại cho nhanh
    fromServer(text, opts);
  };
  a.onerror = () => fail(false);
  fail(false);                              // lượt gọi đầu chính là lần thử đầu tiên
  return true;
}

/** Nhờ máy chủ cục bộ tổng hợp — chỗ này mới là thứ đọc được văn bản tuỳ ý. */
function fromServer(text, opts){
  if (server === false){ opts.onFail && opts.onFail(); return false; }
  const a = ensure();
  let g = null, done = false;
  const give = () => {
    if (done) return; done = true;
    if (g){ clearTimeout(g); g = null; }
    server = false;
    opts.onFail && opts.onFail();
  };
  a.onerror = give;
  a.onplaying = () => { if (g){ clearTimeout(g); g = null; } done = true; };
  a.onended = () => { opts.onEnd && opts.onEnd(); };
  a.src = serverUrl(text);
  a.playbackRate = opts.rate || 1;
  g = setTimeout(give, 700);                 // chốt thời gian, xem chú thích ở play()
  try {
    const p = a.play();
    if (p && p.catch) p.catch(give);
  } catch (e){ give(); }
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
      voice: opts.voice,
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
/* Dò bằng nhiều câu, vì chỉ cần một tệp lẻ bị thiếu là kết luận sai toàn bộ.
   Mỗi thứ tiếng lấy đúng câu dẫn của bài tập nghe–xem tranh: câu đó chắc chắn
   nằm trong danh sách thu, nên có tệp là dò ra. Hai từ tiếng Hàn cuối là để
   nhận ra bộ audio thu theo cách cũ (nằm thẳng trong audio/tts/).           */
const PROBE_WORDS = [
  ['그림을 보고 알맞은 문장을 고르십시오.', 'ko'],
  ['看图，选出与图片相符的句子。', 'zh'],
  ['絵を見て、合う文を選んでください。', 'ja'],
  ['Посмотрите на картинку и выберите подходящее предложение.', 'ru'],
  ['Look at the picture. Choose the sentence that describes it.', 'en-gb'],
  ['Look at the picture. Choose the sentence that describes it.', 'en-us'],
  ['안녕하세요', ''],
  ['도서관', '']
];

/** Dò tệp tĩnh (không cần mạng, không cần fetch — dùng chính thẻ audio). */
function probeStatic(cb){
  if (probed !== null){ cb(probed); return; }

  const queue = [];
  PROBE_WORDS.forEach(([w, v]) => {
    ROOTS.forEach((r, k) => queue.push([w, (v ? r + v + '/' : r), k]));
  });

  let i = 0, settled = false;
  const a = new Audio();
  a.preload = 'metadata';
  const done = v => { if (settled) return; settled = true; probed = v; cb(v); };
  const next = () => {
    if (i >= queue.length){ done(false); return; }
    const [w, dir, k] = queue[i++];
    root = k;                                 // nhớ gốc vừa thử, lần phát sau đi thẳng
    a.src = dir + hash(w) + '.mp3';
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

return { hash, file, dirs, play, playSeq, speakText, stop, ready, probe, hasServer, norm, roots: ROOTS };
})();
if (typeof window !== 'undefined') window.TTS = TTS;
