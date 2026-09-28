/* Ba tình huống mạng mà TTS phải xử lý khác nhau — chỉ nhìn đồng hồ thì
   trông y hệt, nên rất dễ gộp nhầm làm một (đã từng gộp, và hậu quả là trên
   điện thoại nghe được một câu rồi im):

     1. mạng chậm, tệp CÓ thật  -> phải CHỜ, không được bỏ
     2. tệp thiếu ở giữa chuỗi  -> nhường giọng máy TỪ CÂU ĐÓ, không nhảy qua
     3. môi trường câm (không bắn cả loadstart lẫn error) -> bỏ tầng tệp tĩnh ngay

   Thẻ <audio> giả ở đây bắt chước trình duyệt thật: gán src là bắn loadstart,
   một lúc sau mới phát, hoặc bắn error nếu tệp không có.                     */
const fs = require('fs'), path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');
const html = fs.readFileSync(path.resolve(__dirname, '..', '..', 'dist', 'langlab.html'), 'utf8');

let pass = 0, fail = 0;
const check = (n, f) => {
  let ok = false, why = '';
  try { const r = f(); ok = r === true; if (!ok && r) why = ' — ' + r; }
  catch (e){ why = ' — ' + e.message; }
  ok ? pass++ : fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + n + (ok ? '' : (why || ' — sai')));
};

/** @param cfg {delay, has} — has(src) trả về tệp đó có tồn tại không */
function boot(cfg){
  const log = [];
  const vc = new VirtualConsole();
  const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc,
    url:'http://localhost:9999/', beforeParse(w){
      w.Element.prototype.getBBox = () => ({x:0,y:0,width:100,height:100});
      w.Element.prototype.scrollIntoView = function(){};
      w.Element.prototype.getBoundingClientRect = () => ({left:0,top:0,width:300,height:300,right:300,bottom:300});
      w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, {get:()=>()=>{}});
      w.scrollTo = () => {};
      w.matchMedia = () => ({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
      w.Audio = function(){
        const h = {}; let _src = '';
        const fire = (k, m) => { if (self[m]) self[m](); (h[k] || []).forEach(f => f()); };
        const self = { preload:'', playbackRate:1, pause(){}, play(){},
          get src(){ return _src; },
          set src(v){
            _src = v;
            if (cfg.mute) return;                       // môi trường câm: im hoàn toàn
            setTimeout(() => fire('loadstart', 'onloadstart'), 0);
            setTimeout(() => {
              // /_tts? là máy chủ đọc cục bộ — mặc định người dùng KHÔNG chạy nó
              const ok = v.indexOf('/_tts?') === 0 ? !!cfg.server : cfg.has(v);
              if (!ok){ log.push('404 ' + v); fire('error', 'onerror'); return; }
              log.push('mp3 ' + v);
              fire('playing', 'onplaying');
              setTimeout(() => fire('ended', 'onended'), 5);
            }, cfg.delay);
          },
          addEventListener(k, f){ (h[k] = h[k] || []).push(f); }, removeEventListener(){} };
        return self;
      };
      w.speechSynthesis = { getVoices:()=>[{lang:'ko-KR',name:'Korean'}],
        addEventListener(){}, removeEventListener(){}, cancel(){},
        speak(u){ log.push('máy ' + u.text); setTimeout(()=>u.onend && u.onend(), 5); } };
      w.SpeechSynthesisUtterance = function(t){ this.text = t; };
    }});
  return { win: dom.window, log };
}

const wait = ms => new Promise(r => setTimeout(r, ms));
const LINES = ['하나', '둘', '셋'];

(async () => {
  /* ---------- 1. mạng chậm: tệp có thật, nạp 1,2 giây ---------- */
  {
    const { win, log } = boot({ delay:1200, has: () => true });
    await wait(400);
    win.TTS.playSeq(LINES, { voice:'ko', gap:10, onFail(){ log.push('NHƯỜNG'); } });
    await wait(5000);
    check('mạng chậm 1,2 giây: vẫn phát đủ 3 câu bằng mp3, không nhường giọng máy', () =>
      log.filter(x => x.startsWith('mp3')).length === 3 && log.indexOf('NHƯỜNG') < 0
      || log.join(' | '));
    check('mạng chậm: không phát chồng hai nguồn lên nhau', () =>
      log.filter(x => x.startsWith('máy')).length === 0 || log.join(' | '));
  }

  /* ---------- 2. thiếu đúng tệp của câu thứ hai ---------- */
  {
    const probe = boot({ delay:20, has: () => true });
    await wait(400);
    const missing = probe.win.TTS.hash(LINES[1]);           // băm của câu thứ hai
    const { win, log } = boot({ delay:20, has: s => s.indexOf(missing) < 0 });
    await wait(400);
    let from = -1;
    win.TTS.playSeq(LINES, { voice:'ko', gap:10, onFail(i){ from = i; } });
    await wait(1500);
    check('thiếu tệp câu 2: báo đúng số thứ tự câu hỏng cho bên gọi', () =>
      from === 1 || ('báo ' + from));
    check('thiếu tệp câu 2: câu 1 vẫn dùng mp3, không đọc lại từ đầu', () =>
      log.filter(x => x.startsWith('mp3')).length === 1 || log.join(' | '));
  }

  /* ---------- 3. môi trường câm: không bắn cả loadstart lẫn error ---------- */
  {
    const { win, log } = boot({ mute:true, delay:0, has: () => true });
    await wait(400);
    let ms = -1;
    const t0 = Date.now();
    win.TTS.playSeq(LINES, { voice:'ko', gap:10, onFail(){ if (ms < 0) ms = Date.now() - t0; } });
    await wait(3000);
    check('môi trường câm: nhường cho giọng máy chứ không treo', () => ms >= 0 || 'vẫn đang chờ');
    check('môi trường câm: nhường trong vòng 2 giây, không dò hết từng thư mục', () =>
      (ms >= 0 && ms < 2000) || (ms + ' ms'));
  }

  /* ---------- 4. thư mục theo từng thứ tiếng ---------- */
  {
    const { win } = boot({ delay:10, has: () => true });
    await wait(400);
    const d = win.TTS.dirs('ja');
    check('mỗi thứ tiếng dò thư mục riêng trước, thư mục gốc sau cùng', () =>
      (d[0] === 'audio/tts/ja/' && d.indexOf('audio/tts/') > 0) || d.join(' '));
    check('không khai báo thứ tiếng thì chỉ dò thư mục gốc', () =>
      win.TTS.dirs('').every(x => x.indexOf('audio/tts/') === x.length - 10) || win.TTS.dirs('').join(' '));
  }

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
})();
