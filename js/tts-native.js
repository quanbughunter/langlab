/* ============================================================
   LangLab — LỚP ĐỆM GIỌNG MÁY CHO WEBVIEW ANDROID
   ------------------------------------------------------------
   Vì sao có tệp này: app dùng Web Speech API (`speechSynthesis`)
   làm tầng dự phòng khi chưa có mp3 thu sẵn. Trên trình duyệt thì
   không sao, nhưng khi đóng gói thành APK thì app chạy trong
   WebView của Android — và WebView RẤT HAY KHÔNG CÓ API này:
   `typeof window.speechSynthesis` trả về undefined ngay cả trên
   WebView dựng từ Chromium đời mới. Không bù vào thì mọi câu chưa
   thu mp3 sẽ im lặng, mà người học không hiểu vì sao.

   Cách bù: khai đúng một API trông y hệt API thật, rồi chuyển lời
   gọi sang TextToSpeech của Android qua plugin Capacitor. Vì hình
   dạng giống hệt nên BỐN chỗ gọi trong js/speech.js và js/app.js
   không phải sửa một dòng nào.

   Tệp này phải nạp TRƯỚC js/speech.js và js/app.js.

   Khi chạy trên trình duyệt thường, tệp này không làm gì cả —
   thấy có API thật là nó đứng im.
   ============================================================ */

(function(){
'use strict';

/* Có API thật thì thôi, không đụng vào. Đây là trường hợp của mọi trình duyệt
   trên máy tính và của Chrome trên Android. */
if (typeof window.speechSynthesis !== 'undefined'
    && typeof window.SpeechSynthesisUtterance !== 'undefined') return;

/* Không có API thật, cũng không chạy trong Capacitor: đây là một WebView trần
   (hoặc một trình duyệt quá cũ). Vẫn khai API giả để app không ném lỗi, nhưng
   mỗi lần gọi đều báo ngay là KHÔNG đọc được — thà nói thật còn hơn im lặng
   để người học tưởng máy hỏng. */
const CAP = (typeof window.Capacitor !== 'undefined') ? window.Capacitor : null;
const plugin = () => (CAP && CAP.Plugins && CAP.Plugins.TextToSpeech) || null;

/* ---------- SpeechSynthesisUtterance giả ---------- */
function Utterance(text){
  this.text = String(text == null ? '' : text);
  this.lang = '';
  this.rate = 1;
  this.pitch = 1;
  this.volume = 1;
  this.voice = null;
  this.onstart = null;
  this.onend = null;
  this.onerror = null;
}

/* ---------- danh sách giọng ----------
   Plugin trả về giọng của hệ điều hành dưới dạng {name, language}. Web Speech
   gọi hai trường ấy là {name, lang}, nên phải đổi tên — js/app.js lọc giọng
   bằng chính x.lang nên sai tên là không tìm ra giọng nào. */
let voices = [];
let voicesLoaded = false;
const voiceListeners = [];

function loadVoices(){
  const p = plugin();
  if (!p || !p.getSupportedVoices) { voicesLoaded = true; return; }
  p.getSupportedVoices().then(res => {
    const list = (res && res.voices) || [];
    voices = list.map(v => ({
      name: v.name || v.voiceURI || '',
      lang: (v.language || v.lang || '').replace('_', '-'),
      localService: true,
      default: false,
      voiceURI: v.voiceURI || v.name || ''
    }));
    voicesLoaded = true;
    voiceListeners.forEach(fn => { try { fn(); } catch(e){} });
  }).catch(() => { voicesLoaded = true; });
}

/* ---------- speechSynthesis giả ---------- */
let speaking = false;
let seq = 0;                 // tăng mỗi lần cancel, để lời gọi cũ tự biết mình đã bị huỷ

const synth = {
  get speaking(){ return speaking; },
  get pending(){ return false; },
  get paused(){ return false; },

  speak: function(u){
    if (!u || !u.text) return;
    const p = plugin();
    const mine = seq;
    if (!p){
      /* Không có đường nào đọc được. Báo lỗi ngay trong cùng một nhịp để bên
         gọi chuyển sang phương án khác, đúng như khi engine thật báo lỗi. */
      setTimeout(() => {
        if (mine !== seq) return;
        if (typeof u.onerror === 'function') u.onerror({ error: 'not-allowed' });
        else if (typeof u.onend === 'function') u.onend({});
      }, 0);
      return;
    }
    speaking = true;
    if (typeof u.onstart === 'function') { try { u.onstart({}); } catch(e){} }

    /* Plugin nhận rate quanh 1.0 giống Web Speech, nhưng nhiều máy Android
       vượt 2.0 là méo tiếng, nên kẹp lại. */
    const rate = Math.max(0.5, Math.min(2, Number(u.rate) || 1));
    const lang = (u.lang || (u.voice && u.voice.lang) || 'en-US').replace('_', '-');

    p.speak({
      text: u.text,
      lang: lang,
      rate: rate,
      pitch: Math.max(0.5, Math.min(2, Number(u.pitch) || 1)),
      volume: Math.max(0, Math.min(1, u.volume == null ? 1 : Number(u.volume))),
      category: 'ambient'
    }).then(() => {
      if (mine !== seq) return;
      speaking = false;
      if (typeof u.onend === 'function') u.onend({});
    }).catch(err => {
      if (mine !== seq) return;
      speaking = false;
      /* Thiếu gói giọng cho thứ tiếng ấy cũng rơi vào đây. Bên gọi đã có sẵn
         đường xử lí lỗi nên cứ báo lỗi là đúng. */
      if (typeof u.onerror === 'function') u.onerror({ error: String((err && err.message) || err) });
      else if (typeof u.onend === 'function') u.onend({});
    });
  },

  cancel: function(){
    seq++;
    speaking = false;
    const p = plugin();
    if (p && p.stop) { try { p.stop(); } catch(e){} }
  },

  /* Android TTS không có tạm dừng / tiếp tục đúng nghĩa. Khai cho đủ hình dạng
     để js/speech.js gọi resume() theo nhịp mà không ném lỗi; không làm gì cả
     là đúng, vì ở đây không có chuyện engine tự ngủ như Chrome trên máy tính. */
  pause: function(){},
  resume: function(){},

  getVoices: function(){
    if (!voicesLoaded) loadVoices();
    return voices.slice();
  },

  addEventListener: function(type, fn){
    if (type === 'voiceschanged' && typeof fn === 'function'){
      voiceListeners.push(fn);
      if (voicesLoaded) setTimeout(fn, 0);
    }
  },
  removeEventListener: function(type, fn){
    const i = voiceListeners.indexOf(fn);
    if (i >= 0) voiceListeners.splice(i, 1);
  },
  set onvoiceschanged(fn){ this.addEventListener('voiceschanged', fn); },
  get onvoiceschanged(){ return null; }
};

window.SpeechSynthesisUtterance = Utterance;
window.speechSynthesis = synth;

/* Capacitor nạp plugin sau khi trang dựng xong, nên hỏi giọng ngay lúc này có
   thể chưa ra gì. Hỏi lại một nhịp sau khi app sẵn sàng. */
if (CAP){
  document.addEventListener('deviceready', loadVoices, { once:true });
  setTimeout(loadVoices, 600);
} else {
  voicesLoaded = true;
}

/* Để đo đếm và để màn hình chẩn đoán biết đang chạy bằng đường nào. */
window.__ttsNative = {
  active: true,
  hasPlugin: () => !!plugin(),
  voices: () => voices.slice()
};

})();
