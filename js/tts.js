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

/* PROBE_MS: đã từng thấy môi trường bắn sự kiện media thì chờ bấy nhiêu là đủ.
   PROBE_FIRST: lần phát ĐẦU TIÊN của phiên được chờ lâu hơn — trong APK, tệp
   mp3 nằm trong gói gần 900 MB và Capacitor phải mở qua lớp phục vụ tài nguyên
   riêng, lần đầu nguội có thể mất hơn một giây. LOAD_MAX: đã bắt đầu nạp rồi
   thì cho hẳn ngần này, đủ cho mạng di động chậm tải một tệp vài chục KB.    */
const PROBE_MS = 900, PROBE_FIRST = 1500, LOAD_MAX = 8000;

/* Im lặng bao nhiêu lượt LIÊN TIẾP thì mới tạm nghỉ, và nghỉ bao lâu. */
const HUSH_AFTER = 3, HUSH_MS = 60000;

let el = null, root = 0, tried = 0, missing = {};
let currentRate = 1;
let server = null;                 // null = chưa dò, false = không có, true = có
/* seenMedia: đã từng thấy môi trường này bắn loadstart hoặc playing chưa.
   silentRuns: số lượt im lặng liên tiếp. hushUntil: tạm nghỉ tầng tệp tới lúc
   nào. Ba biến này thay cho cái công tắc probed=false ngày trước — xem chú
   thích dài ở hàm play(). */
let seenMedia = false, silentRuns = 0, hushUntil = 0;

const serverUrl = t => '/_tts?text=' + encodeURIComponent(norm(t));

/* Trong APK thì không có máy chủ đọc cục bộ nào cả — chạy trong WebView của
   Capacitor, không phải sau một server. Hỏi nó là chắc chắn 404, mà mỗi lần
   404 lại tốn một nhịp chờ trước khi nhường cho giọng điện thoại. */
function serverPossible(){
  if (typeof window !== 'undefined' && window.Capacitor) return false;
  return /^https?:$/.test(typeof location !== 'undefined' ? location.protocol : '');
}

function ensure(){
  if (el) return el;
  el = new Audio();
  el.preload = 'none';
  return el;
}

/* Cắt đứt lượt nạp đang dở và gỡ hết người nghe, để tệp mp3 nạp xong muộn
   không bật lên chồng lên giọng máy đang đọc. */
function hushAudio(){
  if (!el) return;
  el.onerror = null; el.onloadstart = null; el.onplaying = null; el.onended = null;
  try { el.pause(); } catch(e){}
  try { el.removeAttribute('src'); el.load(); } catch(e){}
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

  // đã biết chắc không có tệp cho câu này: nhường luôn
  if (missing[key]) return fromServer(text, opts);

  /* Đang trong kỳ tạm nghỉ vì môi trường im lặng mấy lượt liền. Khác hẳn với
     bản cũ: đây là tạm, hết giờ là dò lại. */
  if (Date.now() < hushUntil) return fromServer(text, opts);

  tried = 0;
  let guard = null;
  const unguard = () => { if (guard){ clearTimeout(guard); guard = null; } };

  /* BA tình huống, mà nếu chỉ nhìn đồng hồ thì ba cái trông y hệt nhau:
       · tệp KHÔNG có           — thẻ audio bắn error, dò thư mục khác
       · tệp CÓ nhưng nạp lâu   — bắn loadstart rồi im một lúc, phải chờ
       · môi trường không báo gì — không bắn cả loadstart lẫn error

     Chỗ sai cũ nằm ở nhánh thứ ba: hễ im quá 0,9 giây là nó kết luận «môi
     trường này không có tệp nào» rồi TẮT HẲN tầng mp3 cho cả phiên, vĩnh viễn,
     không bao giờ dò lại. Trong APK thì lần phát đầu tiên hay chậm thật — gói
     gần 900 MB, Capacitor mở tệp qua lớp phục vụ tài nguyên riêng — nên chỉ
     cần lần đầu nguội là cả phiên mất giọng thu sẵn, nghe toàn giọng máy dù
     57 nghìn tệp mp3 nằm sẵn trong gói.

     Bản này tách hai việc vốn bị gộp làm một:
       1. NHƯỜNG NHANH cho câu đang đọc — người học không phải ngồi chờ;
       2. KHÔNG kết luận gì về cả phiên — hết giờ không phải bằng chứng là
          không có tệp, nên lượt sau vẫn thử lại như thường.
     Chỉ khi im lặng BA lượt liền mà chưa từng thấy môi trường bắn một sự kiện
     media nào, mới tạm nghỉ một phút cho đỡ tốn — rồi lại dò tiếp.           */
  let reports = false;                      // lượt này đã bắn loadstart chưa
  a.onloadstart = () => {
    reports = true; seenMedia = true; silentRuns = 0;
    unguard();
    guard = setTimeout(() => { guard = null; next(); }, LOAD_MAX);
  };
  a.onplaying = () => {
    seenMedia = true; silentRuns = 0; probed = true;
    unguard();
  };

  const start = src => {
    unguard();
    a.src = src;
    a.playbackRate = currentRate;
    guard = setTimeout(() => { guard = null; reports ? next() : silent(); },
                       seenMedia ? PROBE_MS : PROBE_FIRST);
    try {
      const p = a.play();
      if (p && p.catch) p.catch(() => next());
    } catch (e){ setTimeout(next, 0); }
  };

  /* Im lặng: KHÔNG đánh dấu missing[key] — tệp vẫn có thể có thật, chỉ là máy
     chưa kịp trả lời. Đánh dấu vào đây là tự tay bỏ luôn câu ấy cho cả phiên. */
  const silent = () => {
    unguard();
    silentRuns++;
    if (!seenMedia && silentRuns >= HUSH_AFTER) hushUntil = Date.now() + HUSH_MS;
    fromServer(text, opts);
  };

  const next = () => {
    unguard();
    if (tried < cands.length){ start(cands[tried++] + h + '.mp3'); return; }
    missing[key] = 1;                       // đã dò hết thư mục và đều báo lỗi: đúng là không có
    fromServer(text, opts);
  };
  a.onerror = () => next();
  next();                                   // lượt gọi đầu chính là lần thử đầu tiên
  return true;
}

/** Nhờ máy chủ cục bộ tổng hợp — chỗ này mới là thứ đọc được văn bản tuỳ ý. */
function fromServer(text, opts){
  /* Trong APK thì chắc chắn không có máy chủ nào — hỏi cũng chỉ tốn thêm một
     nhịp chờ. Cắt lượt nạp mp3 đang dở rồi nhường thẳng cho giọng điện thoại,
     nếu không tệp nạp xong muộn sẽ bật lên chồng lên giọng máy. */
  if (!serverPossible()){ server = false; hushAudio(); opts.onFail && opts.onFail(); return false; }
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
      /* Nhường cho giọng máy TỪ CÂU HỎNG TRỞ ĐI, kèm số thứ tự để bên gọi biết
         đọc tiếp từ đâu. Trước đây câu thiếu ở giữa bị nhảy qua trong im lặng —
         bộ audio thu thiếu vài tệp là người học mất hẳn mấy câu mà không hay. */
      onFail(){
        if (mine !== seqToken) return;
        seqToken++;                                   // cắt chuỗi, bên gọi tiếp quản
        opts.onFail && opts.onFail(idx);
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
  ['Regardez l’image et choisissez la phrase qui lui correspond.', 'fr'],
  ['Mire la imagen y elija la frase que le corresponde.', 'es'],
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
  /* Hết giờ KHÔNG phải bằng chứng «không có tệp nào» — có thể chỉ là WebView
     đang bận dựng trang 10 MB. Báo cho bên gọi là chưa dò ra, nhưng KHÔNG ghi
     vào probed, để lần sau còn dò lại. */
  setTimeout(() => { if (settled) return; settled = true; cb(false); }, 5000);
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

/* Để trang Giới thiệu nói được đang nghe bằng đường nào — lần sau gặp chuyện
   «nghe toàn giọng máy» thì đọc thẳng trên máy thật, khỏi phải đoán. */
function stats(){
  return {
    tep: probed === true,                 // đã phát được ít nhất một tệp mp3
    thayMedia: seenMedia,                 // môi trường có bắn sự kiện media không
    imLienTiep: silentRuns,
    tamNghi: Math.max(0, Math.round((hushUntil - Date.now()) / 1000)),
    thieu: Object.keys(missing).length,   // số câu đã dò hết thư mục mà vẫn không có
    mayChu: server === true,
    goc: ROOTS[root] || ROOTS[0]
  };
}

return { hash, file, dirs, play, playSeq, speakText, stop, ready, probe, hasServer, norm, stats, roots: ROOTS };
})();
if (typeof window !== 'undefined') window.TTS = TTS;
