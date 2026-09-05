/* ============================================================
   LangLab — cấu hình khi đưa app lên mạng
   ------------------------------------------------------------
   Chỉ cần sửa tệp này khi bạn muốn phần DỊCH chạy được qua link
   (app tĩnh trên Cloudflare Pages / GitHub Pages không có máy chủ,
   nên phải trỏ tới một Cloudflare Worker làm việc dịch — xem
   worker/README.md để dựng Worker).

   Dán URL Worker của bạn vào giữa hai dấu nháy. Ví dụ:
     translateWorker: "https://langlab-translate.ten-cua-ban.workers.dev"

   Để trống thì phần dịch chỉ chạy khi mở bằng chay.bat (máy chủ cục bộ).
   URL này KHÔNG phải bí mật — khoá API nằm an toàn trong secret của
   Worker, không nằm ở đây.
   ============================================================ */

window.LANGLAB_CONFIG = {
  translateWorker: "https://langlab-translate.nguyendinhquan7788266.workers.dev"
};
