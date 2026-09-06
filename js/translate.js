/* ============================================================
   LangLab — bản dịch tiếng Việt cho đoạn văn tự dán
   ------------------------------------------------------------
   Máy dịch xử lý từng câu rời rạc nên hay ra thứ tiếng Việt dịch sát
   từng chữ. Ở đây cả đoạn được gửi một lượt cho LLM qua máy chủ cục bộ
   (tools/translate.py), nên bản dịch có ngữ cảnh và nghe tự nhiên hơn.

   Chỉ hoạt động khi mở LangLab qua máy chủ (chay.bat). Mở bằng file://
   thì phần này tắt, app vẫn chạy bình thường.
   ============================================================ */

const Translate = (function(){
'use strict';

const online = () => /^https?:$/.test(location.protocol);

/* băm giống hệt js/tts.js và tools/make_audio.py */
function hash(s){
  const t = String(s).replace(/\s+/g, ' ').trim();
  const bytes = (typeof TextEncoder !== 'undefined')
    ? new TextEncoder().encode(t)
    : unescape(encodeURIComponent(t)).split('').map(c => c.charCodeAt(0));
  let h = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i++){
    h ^= bytes[i];
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return ('0000000' + h.toString(16)).slice(-8);
}

let cfg = null;          // null = chưa hỏi, {ok:…} = đã biết
let base = null;         // nơi gọi được: '' = cùng gốc (serve.py), hoặc URL Worker

/* Các nơi có thể xử lý việc dịch, thử theo thứ tự:
   1. cùng gốc  '/_translate'      — máy chủ cục bộ khi mở bằng chay.bat
   2. Cloudflare Worker            — khi app đã đưa lên mạng (điền ở js/config.js) */
function endpoints(){
  const list = [];
  if (online()) list.push('');                    // máy chủ cục bộ, chỉ khi mở qua http
  const w = (window.LANGLAB_CONFIG && window.LANGLAB_CONFIG.translateWorker || '').trim().replace(/\/$/, '');
  if (w) list.push(w);                            // Worker là URL đầy đủ nên gọi được cả khi mở file://
  return list;
}

function status(cb){
  if (cfg){ cb(cfg); return; }
  const eps = endpoints();
  if (!eps.length){ cfg = { ok:false, reason:'offline' }; cb(cfg); return; }

  let i = 0;
  const tryNext = () => {
    if (i >= eps.length){ cfg = { ok:false, reason:'no-server' }; cb(cfg); return; }
    const ep = eps[i++];
    fetch(ep + '/_translate/status')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(j => { if (j && j.ok){ base = ep; cfg = j; cb(j); } else { tryNext(); } })
      .catch(tryNext);
  };
  tryNext();
}

/**
 * Dịch cả đoạn một lượt.
 * cb(map, err) — map là { băm câu: bản dịch }
 */
function run(sentences, cb){
  const eps = base !== null ? [base] : endpoints();
  if (!eps.length){ cb({}, 'offline'); return; }

  let i = 0;
  const tryNext = (lastErr) => {
    if (i >= eps.length){ cb({}, lastErr || 'no-server'); return; }
    const ep = eps[i++];
    fetch(ep + '/_translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sentences: sentences })
    })
      .then(r => r.ok ? r.json() : Promise.reject('HTTP ' + r.status))
      .then(j => { base = ep; cb(j.translations || {}, j.error || null); })
      .catch(e => tryNext(String(e && e.message || e)));
  };
  tryNext();
}

/** Mở cả đoạn trong Google Dịch — phương án cho người chưa có khoá API. */
function googleUrl(text){
  return 'https://translate.google.com/?sl=ko&tl=vi&op=translate&text='
       + encodeURIComponent(String(text).slice(0, 4500));
}

/* Gửi POST tới Worker (hoặc máy chủ cục bộ), thử lần lượt các endpoint. */
function post(path, payload, cb){
  const eps = base !== null ? [base] : endpoints();
  if (!eps.length){ cb(null, 'offline'); return; }
  let i = 0;
  const tryNext = (lastErr) => {
    if (i >= eps.length){ cb(null, lastErr || 'no-server'); return; }
    const ep = eps[i++];
    fetch(ep + path, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    })
      .then(r => r.ok ? r.json() : Promise.reject('HTTP ' + r.status))
      .then(j => { base = ep; cb(j, (j && j.error) || null); })
      .catch(e => tryNext(String(e && e.message || e)));
  };
  tryNext();
}

/** Hỏi đáp: messages = [{role:'user'|'assistant', content}] → cb(reply, err) */
function chat(messages, cb){ post('/_chat', { messages: messages }, (j, err) => cb((j && j.reply) || '', err)); }

/** Phân tích âm thanh: audio base64 + mime → cb(result, err) */
function analyzeAudio(audio, mime, cb){ post('/_audio', { audio: audio, mime: mime }, cb); }

return { hash, status, run, googleUrl, online, chat, analyzeAudio };
})();
if (typeof window !== 'undefined') window.Translate = Translate;
