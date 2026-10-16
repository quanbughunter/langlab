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

/* ------------------------------------------------------------
   audioBase — nơi để audio thu sẵn khi bản web không mang theo nó.

   Vì sao có: GitHub Pages chặn cứng ở 1 GB cho site đã xuất bản, mà
   riêng audio/tts đã ~937 MB. Thu thêm một lô mp3 nữa là vỡ trần và
   bản web chết hẳn. Nên audio tách ra chỗ khác, còn đây là chỗ khai
   báo nó nằm đâu. Ví dụ (R2 của Cloudflare, 10 GB miễn phí, không
   tính phí truyền ra):

     audioBase: "https://audio.langlab.workers.dev"

   App sẽ tìm tệp ở  <audioBase>/audio/tts/<giọng>/<băm>.mp3

   ĐỂ TRỐNG thì mọi thứ y như cũ: audio đi kèm site, và quy trình
   Pages vẫn đẩy cả thư mục audio/ lên. Điền vào thì quy trình tự bỏ
   audio ra khỏi bản web — một chỗ bật tắt duy nhất.

   Bản APK KHÔNG dùng giá trị này: trong đó tệp nằm sẵn trong gói và
   phải chạy được khi không có mạng.
   ------------------------------------------------------------ */
window.LANGLAB_CONFIG = {
  translateWorker: "https://langlab-translate.nguyendinhquan7788266.workers.dev",
  audioBase: ""
};
