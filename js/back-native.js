/* ============================================================
   LangLab — NÚT QUAY LẠI / VUỐT CẠNH TRÊN ANDROID
   ------------------------------------------------------------
   Vì sao có tệp này: app đã có sẵn bộ định tuyến ghi vào History
   API (xem syncHist / applyHist / popstate trong js/app.js), nên
   trên trình duyệt thì nút back và cử chỉ vuốt cạnh lùi trong app
   đúng như mong đợi. Nhưng trong APK thì không: ở đó app chạy
   trong WebView, và cú back của hệ điều hành KHÔNG tự chảy vào
   History API của trang. Phải có ai bắt lấy nó rồi chuyển thành
   history.back().

   Capacitor 8 để việc ấy cho plugin @capacitor/app: plugin đăng kí
   một OnBackPressedCallback vào OnBackPressedDispatcher của
   Activity (đường chính thức của AndroidX, cũng là đường duy nhất
   còn chạy khi targetSdk ≥ 35 vì Activity.onBackPressed() đã bị hệ
   thống thôi gọi). Thiếu plugin thì không ai đăng kí gì, nên cú
   back rơi về hành vi mặc định của Activity: ĐÓNG APP. Đúng cái
   triệu chứng «vuốt cạnh là thoát luôn chứ không về trang trước».

   Một chỗ cần biết về plugin: hễ JS có đăng kí người nghe sự kiện
   «backButton» thì plugin KHÔNG tự lùi nữa — nó chỉ báo sang JS
   rồi để JS quyết. Nên khi tệp này nạp, mọi quyết định lùi/thoát
   nằm ở đây, không còn hành vi mặc định nào chen vào.

   Tệp này phải nạp TRƯỚC js/app.js, nhưng nó chỉ ĐĂNG KÍ người
   nghe — không gọi history.back() lúc nạp — nên không đua với
   seedHist().

   Khi chạy trên trình duyệt thường, tệp này không làm gì cả.
   ============================================================ */

(function(){
'use strict';

const CAP = (typeof window !== 'undefined' && typeof window.Capacitor !== 'undefined')
  ? window.Capacitor : null;

/* Trình duyệt thường: nút back của trình duyệt đã chạy sẵn qua popstate. */
if (!CAP) return;

const plugin = () => (CAP.Plugins && CAP.Plugins.App) || null;

/* ---------- thông báo ngắn ----------
   Dùng lại đúng #toast và lớp .toast/.show của app (css/langlab.css) để trông
   y hệt mọi thông báo khác. Không gọi hàm toast() của js/app.js được vì app
   nằm trong IIFE, không phơi ra ngoài. */
let toastTimer = null;
function nhac(msg){
  let el = document.getElementById('toast');
  if (!el){
    el = document.createElement('div');
    el.id = 'toast'; el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}

/* ---------- xử lí một cú back ---------- */
const HAN_THOAT = 2000;        // hai lần trong 2 giây mới thoát
let lanTruoc = 0;
let soLanXuLi = 0;             // cho kiểm thử và chẩn đoán

function xuLi(data){
  soLanXuLi++;

  /* canGoBack do plugin đọc từ WebView.canGoBack(). pushState có tính vào lịch
     sử WebView, nên con số này đúng với bộ định tuyến của app: ở màn đầu tiên
     (chỉ có replaceState của seedHist) nó là false. */
  const luiDuoc = !!(data && data.canGoBack);

  if (luiDuoc){
    lanTruoc = 0;
    try { window.history.back(); } catch(e){}
    return 'back';
  }

  /* Đã ở trang đầu. Thoát ngay thì dễ mất bài đang học vì một cú vuốt vô ý,
     nên đòi hai lần. */
  const gio = Date.now();
  if (lanTruoc && gio - lanTruoc < HAN_THOAT){
    lanTruoc = 0;
    const p = plugin();
    if (p && p.exitApp){ try { p.exitApp(); } catch(e){} }
    return 'exit';
  }
  lanTruoc = gio;
  nhac('Vuốt lần nữa để thoát app');
  return 'warn';
}

/* ---------- đăng kí ----------
   Capacitor tiêm đoạn JS sinh ra cho từng plugin vào đầu trang, nên thường
   Plugins.App đã có mặt ngay lúc này. «Thường» chứ không phải «luôn»: thử lại
   vài nhịp cho chắc, giống cách js/tts-native.js hỏi lại danh sách giọng. */
let daDangKi = false;
function dangKi(){
  if (daDangKi) return true;
  const p = plugin();
  if (!p || !p.addListener) return false;
  try { p.addListener('backButton', xuLi); } catch(e){ return false; }
  daDangKi = true;
  return true;
}

if (!dangKi()){
  document.addEventListener('deviceready', dangKi, { once:true });
  let con = 20;                                  // ~6 giây là quá đủ
  const dongHo = setInterval(() => {
    if (dangKi() || --con <= 0) clearInterval(dongHo);
  }, 300);
}

/* Để màn chẩn đoán và bộ kiểm thử biết đang chạy bằng đường nào. */
window.__backNative = {
  active: true,
  registered: () => daDangKi,
  handled: () => soLanXuLi,
  handle: xuLi,                                  // kiểm thử gọi trực tiếp
  reset: () => { lanTruoc = 0; soLanXuLi = 0; }
};

})();
