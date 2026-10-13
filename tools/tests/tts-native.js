/* ============================================================
   LangLab — KIỂM THỬ LỚP ĐỆM GIỌNG MÁY CHO WEBVIEW
   ------------------------------------------------------------
   Giả lập đúng cảnh gặp phải khi đóng gói thành APK: WebView KHÔNG
   có window.speechSynthesis, chỉ có plugin TextToSpeech của
   Capacitor. Nếu lớp đệm làm đúng việc thì mọi chỗ gọi cũ trong
   js/speech.js và js/app.js vẫn chạy mà không biết có gì đổi.

   Không chạy được trên máy Android thật ở đây, nên bộ này kiểm
   HÌNH DẠNG và ĐƯỜNG ĐI: gọi đúng plugin, truyền đúng tham số,
   bắn đúng sự kiện, và khi không có plugin thì báo lỗi ngay chứ
   không im lặng.

   Chạy từ thư mục gốc repo: node tools/tests/tts-native.js
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
let pass = 0, fail = 0;
/* Vài phép thử phải chờ sự kiện bắn ra nên trả về Promise. Khung chạy phải
   biết chờ, nếu không nó so Promise với true rồi báo lỗi oan. */
/* Chạy TUẦN TỰ, không chạy chồng lên nhau: phép thử «cancel()» mà chen vào
   giữa phép thử «onend» thì nó huỷ mất lời đọc đang chờ, và onend không bắn —
   đúng theo đặc tả, nhưng làm phép thử kia báo lỗi oan. */
const check = async (name, fn) => {
  let r; try { r = await fn(); } catch(e){ r = e.message; }
  if (r === true){ pass++; console.log('ok   ' + name); }
  else { fail++; console.log('FAIL ' + name + ' — ' + r); }
};

/* Dựng một cửa sổ KHÔNG có Web Speech API, kèm plugin giả ghi lại mọi lời gọi. */
function makeWindow(withPlugin){
  const log = [];
  const vc = new VirtualConsole();
  const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true,
    virtualConsole:vc, url:'http://localhost:9999/', beforeParse(w){
      w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
      w.Element.prototype.scrollIntoView = function(){};
      w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
      w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
      w.scrollTo = () => {};
      w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
      w.fetch = () => Promise.reject(new Error('x'));

      /* ĐÂY là chỗ khác mọi bộ kiểm thử khác: KHÔNG khai speechSynthesis,
         đúng như WebView Android. */
      delete w.speechSynthesis;
      delete w.SpeechSynthesisUtterance;

      if (withPlugin){
        w.Capacitor = { Plugins: { TextToSpeech: {
          speak(opts){ log.push(['speak', opts]); return Promise.resolve(); },
          stop(){ log.push(['stop']); return Promise.resolve(); },
          getSupportedVoices(){
            return Promise.resolve({ voices: [
              { name:'ko-kr-x-koc', language:'ko-KR' },
              { name:'en-gb-x-gba', language:'en-GB' }
            ]});
          }
        }}};
      }
    }});
  return { win: dom.window, log };
}

setTimeout(async () => {
  /* ---------- có plugin ---------- */
  const A = makeWindow(true);
  const w = A.win;

  await check('WebView không có API thật → lớp đệm tự khai vào', () => {
    if (typeof w.speechSynthesis === 'undefined') return 'speechSynthesis vẫn không có';
    if (typeof w.SpeechSynthesisUtterance === 'undefined') return 'SpeechSynthesisUtterance vẫn không có';
    if (!w.__ttsNative || !w.__ttsNative.active) return 'lớp đệm không tự nhận là đang chạy';
    return true;
  });

  await check('lớp đệm nhận ra có plugin TextToSpeech', () =>
    w.__ttsNative.hasPlugin() === true || 'không thấy plugin');

  await check('speak() gọi sang plugin với đúng chữ, đúng thứ tiếng, đúng tốc độ', () => {
    A.log.length = 0;
    const u = new w.SpeechSynthesisUtterance('안녕하세요');
    u.lang = 'ko-KR'; u.rate = 0.85;
    w.speechSynthesis.speak(u);
    const hit = A.log.find(x => x[0] === 'speak');
    if (!hit) return 'plugin không hề được gọi';
    if (hit[1].text !== '안녕하세요') return 'chữ sai: ' + hit[1].text;
    if (hit[1].lang !== 'ko-KR') return 'thứ tiếng sai: ' + hit[1].lang;
    if (Math.abs(hit[1].rate - 0.85) > 1e-6) return 'tốc độ sai: ' + hit[1].rate;
    return true;
  });

  await check('tốc độ quá đà bị kẹp lại trong khoảng máy Android đọc được', () => {
    A.log.length = 0;
    const u = new w.SpeechSynthesisUtterance('test');
    u.rate = 9;
    w.speechSynthesis.speak(u);
    const hit = A.log.find(x => x[0] === 'speak');
    return (hit && hit[1].rate === 2) || 'không kẹp: ' + (hit && hit[1].rate);
  });

  await check('onend bắn ra sau khi plugin đọc xong', () => new Promise(res => {
    const u = new w.SpeechSynthesisUtterance('xong chưa');
    u.onend = () => res(true);
    w.speechSynthesis.speak(u);
    setTimeout(() => res('onend không bắn'), 300);
  }));

  await check('cancel() dừng plugin', () => {
    A.log.length = 0;
    w.speechSynthesis.cancel();
    return A.log.some(x => x[0] === 'stop') || 'không gọi stop()';
  });

  await check('resume() không ném lỗi — js/speech.js gọi nó theo nhịp 6 giây', () => {
    w.speechSynthesis.resume(); w.speechSynthesis.pause();
    return true;
  });

  /* ---------- không có plugin ---------- */
  const B = makeWindow(false);
  await check('không có plugin thì BÁO LỖI ngay, không im lặng', () => new Promise(res => {
    const u = new B.win.SpeechSynthesisUtterance('không ai đọc được câu này');
    u.onerror = () => res(true);
    u.onend = () => res('bắn onend như thể đã đọc xong — sai, phải báo lỗi');
    B.win.speechSynthesis.speak(u);
    setTimeout(() => res('im lặng hoàn toàn: bên gọi sẽ treo mãi'), 300);
  }));

  {
    await new Promise(r => setTimeout(r, 400));
    await check('getVoices() đổi tên trường language → lang như Web Speech thật', () => {
      const vs = w.speechSynthesis.getVoices();
      if (!vs.length) return 'không có giọng nào';
      if (!vs[0].lang) return 'thiếu trường lang (js/app.js lọc giọng bằng chính trường này)';
      if (!vs.some(v => v.lang === 'ko-KR')) return 'không thấy ko-KR';
      return true;
    });
    console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
    process.exit(fail ? 1 : 0);
  }
}, 900);
