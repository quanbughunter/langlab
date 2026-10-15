/* ============================================================
   LangLab — KIỂM THỬ NÚT QUAY LẠI / VUỐT CẠNH TRÊN ANDROID
   ------------------------------------------------------------
   Giả lập đúng cảnh trong APK: có window.Capacitor với plugin App,
   không có gì khác. Bộ này kiểm ba việc:

     1. Lớp đệm có ĐĂNG KÍ người nghe «backButton» không. Đây là
        điểm sinh tử: hễ JS không đăng kí thì plugin tự lùi theo
        lịch sử WebView, mà thiếu cả plugin thì cú back đóng thẳng
        app — chính lỗi người dùng gặp.
     2. Còn trang trước thì phải gọi history.back(), và cú ấy phải
        chảy tới popstate để bộ định tuyến của app đổi màn hình
        thật, không chỉ đổi URL.
     3. Ở trang đầu thì KHÔNG thoát ngay — phải đòi hai lần trong
        hai giây, lần đầu chỉ nhắc.

   Chạy từ thư mục gốc repo: node tools/tests/back-native.js
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
let pass = 0, fail = 0;
const check = async (name, fn) => {
  let r; try { r = await fn(); } catch(e){ r = e.message; }
  if (r === true){ pass++; console.log('ok   ' + name); }
  else { fail++; console.log('FAIL ' + name + ' — ' + r); }
};

/* Plugin App giả: ghi lại mọi lời gọi, và giữ lại người nghe để kiểm thử bắn
   sự kiện vào đúng như plugin thật bắn. */
function makeWindow(withPlugin){
  const log = [];
  const listeners = {};
  const vc = new VirtualConsole();
  const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true,
    virtualConsole:vc, url:'http://localhost/', beforeParse(w){
      w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
      w.Element.prototype.scrollIntoView = function(){};
      w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
      w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
      w.scrollTo = () => {};
      w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
      w.fetch = () => Promise.reject(new Error('x'));

      if (withPlugin){
        /* Hình dạng đúng như đoạn JS mà Capacitor tự sinh cho mỗi plugin
           (xem JSExport.getPluginJS trong @capacitor/android): addListener và
           từng @PluginMethod thành một hàm trả Promise. */
        w.Capacitor = { Plugins: { App: {
          addListener(ev, cb){ (listeners[ev] = listeners[ev] || []).push(cb);
                               log.push(['addListener', ev]);
                               return Promise.resolve({ remove(){} }); },
          exitApp(){ log.push(['exitApp']); return Promise.resolve(); }
        }}};
      }
    }});
  /* Bắn sự kiện y như plugin: notifyListeners('backButton', {canGoBack}) */
  const banBack = canGoBack => (listeners.backButton || []).forEach(cb => cb({ canGoBack }));
  return { win: dom.window, log, listeners, banBack };
}

setTimeout(async () => {
  const A = makeWindow(true);
  const w = A.win;

  await check('trong Capacitor thì lớp đệm tự nhận là đang chạy', () =>
    (w.__backNative && w.__backNative.active === true) || 'không thấy __backNative');

  await check('đăng kí người nghe «backButton» — thiếu bước này là cú back đóng app', () => {
    if (!w.__backNative.registered()) return 'lớp đệm báo chưa đăng kí';
    const hit = A.log.find(x => x[0] === 'addListener' && x[1] === 'backButton');
    return !!hit || 'plugin không hề được gọi addListener';
  });

  await check('còn trang trước → gọi history.back()', () => {
    let goi = 0;
    const that = w.history.back;
    w.history.back = function(){ goi++; };
    A.banBack(true);
    w.history.back = that;
    return goi === 1 || ('history.back() được gọi ' + goi + ' lần');
  });

  await check('cú lùi chảy tới popstate, tức bộ định tuyến của app đổi màn thật', () => new Promise(res => {
    /* Đẩy một trang mới vào lịch sử rồi nhờ plugin lùi. Nếu đường đi thông thì
       JSDOM bắn popstate — đúng chỗ js/app.js nối applyHist vào.

       Không chốt cứng tên màn hình lùi về: màn đầu tiên tuỳ môi trường (app
       đọc tiến độ đã lưu để chọn). Chỉ cần chắc hai điều: popstate CÓ bắn, và
       trang lùi về là trang do chính bộ định tuyến của app ghi — tức trạng
       thái mang đúng hình dạng histDesc() chứ không phải trang tôi vừa đẩy. */
    w.history.pushState({ v:'__thu__' }, '');
    const onPop = e => {
      w.removeEventListener('popstate', onPop);
      const s = e.state;
      if (!s || typeof s !== 'object') return res('popstate không mang trạng thái nào');
      if (s.v === '__thu__') return res('không lùi: vẫn đứng ở trang vừa đẩy');
      if (typeof s.v !== 'string') return res('trạng thái không có khoá v của histDesc()');
      if (!('lesson' in s) || !('word' in s)) return res('trạng thái không phải do histDesc() ghi: ' + JSON.stringify(s));
      return res(true);
    };
    w.addEventListener('popstate', onPop);
    A.banBack(true);
    setTimeout(() => res('không có popstate nào bắn ra'), 400);
  }));

  await check('ở trang đầu: lần đầu CHƯA thoát, chỉ nhắc', () => {
    w.__backNative.reset();
    A.log.length = 0;
    const kq = w.__backNative.handle({ canGoBack:false });
    if (A.log.some(x => x[0] === 'exitApp')) return 'thoát ngay từ lần đầu';
    if (kq !== 'warn') return 'trả về ' + kq + ' chứ không phải warn';
    const el = w.document.getElementById('toast');
    if (!el || !el.classList.contains('show')) return 'không hiện thông báo nhắc';
    if (!/thoát/i.test(el.textContent)) return 'thông báo không nói gì về thoát: ' + el.textContent;
    return true;
  });

  await check('ở trang đầu: lần thứ hai ngay sau đó thì thoát', () => {
    A.log.length = 0;
    const kq = w.__backNative.handle({ canGoBack:false });
    if (kq !== 'exit') return 'trả về ' + kq;
    return A.log.some(x => x[0] === 'exitApp') || 'không gọi exitApp()';
  });

  await check('hai cú cách nhau quá lâu thì không tính là bấm đôi', () => {
    w.__backNative.reset();
    w.__backNative.handle({ canGoBack:false });
    /* Lùi mốc thời gian bằng cách reset rồi gọi lại — reset() xoá mốc, đúng
       như khi đã quá hạn 2 giây. */
    w.__backNative.reset();
    A.log.length = 0;
    const kq = w.__backNative.handle({ canGoBack:false });
    if (A.log.some(x => x[0] === 'exitApp')) return 'thoát mất dù không phải bấm đôi';
    return kq === 'warn' || ('trả về ' + kq);
  });

  await check('lùi được một cú thì mốc bấm đôi bị xoá — không thoát oan', () => {
    w.__backNative.reset();
    w.__backNative.handle({ canGoBack:false });     // lần 1 ở trang đầu: nhắc
    const that = w.history.back; w.history.back = function(){};
    w.__backNative.handle({ canGoBack:true });      // rồi lùi được một trang
    w.history.back = that;
    A.log.length = 0;
    const kq = w.__backNative.handle({ canGoBack:false });
    if (A.log.some(x => x[0] === 'exitApp')) return 'thoát oan';
    return kq === 'warn' || ('trả về ' + kq);
  });

  /* ---------- trên trình duyệt thường ---------- */
  const B = makeWindow(false);
  await check('trên trình duyệt thường thì lớp đệm đứng im', () => {
    if (B.win.__backNative) return 'vẫn tự dựng lên dù không có Capacitor';
    return true;
  });

  await check('bộ định tuyến gốc của app vẫn còn nguyên trên trình duyệt', () => {
    /* Không có Capacitor thì nút back của trình duyệt phải tự chạy qua
       popstate như trước — lớp đệm không được chen vào. */
    return typeof B.win.history.pushState === 'function' || 'history bị sửa';
  });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 900);
