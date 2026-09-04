# Đưa LangLab lên mạng — Cloudflare Pages + Worker dịch

Mục tiêu: người khác chỉ cần dán một đường link là dùng được, kể cả phần **dịch cả đoạn**,
mà bạn không tốn tiền server. Tất cả đều dùng bậc miễn phí của Cloudflare.

Có hai phần:

- **Cloudflare Pages** — host phần web tĩnh (miễn phí, băng thông không giới hạn).
- **Cloudflare Worker** — làm việc dịch, giữ khoá Gemini của bạn an toàn (miễn phí, 100.000 lượt/ngày).

Phần đọc bằng giọng neural và audio đĩa giáo trình vẫn chỉ chạy khi mở bằng `chay.bat` ở máy —
qua link, phát âm dùng giọng máy của trình duyệt người xem.

---

## Bước 1 — Dựng Worker dịch

1. Đăng nhập https://dash.cloudflare.com (tạo tài khoản miễn phí nếu chưa có).
2. Menu trái: **Workers & Pages** → **Create** → **Create Worker**.
3. Đặt tên, ví dụ `langlab-translate` → **Deploy** (nó tạo một Worker mẫu trước).
4. Bấm **Edit code**. Xoá hết code mẫu, dán **toàn bộ** nội dung tệp
   [`worker/translate-worker.js`](translate-worker.js) vào. Bấm **Deploy**.
5. Đặt khoá API làm secret (khoá **không** nằm trong code):
   - Về trang Worker → tab **Settings** → **Variables and Secrets** → **Add**.
   - Loại **Secret**, tên `GEMINI_API_KEY`, giá trị là khoá `AIza…` của bạn → **Save and deploy**.

   > Muốn dùng Groq thay Gemini: thêm ba biến `LLM_API_KEY`, `LLM_BASE_URL`
   > (`https://api.groq.com/openai/v1`) và `LLM_MODEL` (`llama-3.3-70b-versatile`).

6. Ghi lại địa chỉ Worker, dạng:

   ```
   https://langlab-translate.<tên-tài-khoản>.workers.dev
   ```

   Thử dán thêm `/_translate/status` vào cuối rồi mở trên trình duyệt — thấy
   `{"ok":true,...}` là Worker đã chạy và đã nhận khoá.

---

## Bước 2 — Trỏ app tới Worker

Mở tệp [`js/config.js`](../js/config.js), dán URL Worker vào:

```js
window.LANGLAB_CONFIG = {
  translateWorker: "https://langlab-translate.ten-cua-ban.workers.dev"
};
```

Lưu lại và commit. URL này **không phải bí mật** — khoá API nằm trong secret của Worker,
không có trong repo.

---

## Bước 3 — Host phần web bằng Cloudflare Pages

1. Trong **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Chọn repo `langlab` (cho Cloudflare quyền đọc repo nếu nó hỏi).
3. Phần build settings: để trống hết (đây là web tĩnh, không cần build).
   - Framework preset: **None**
   - Build command: để trống
   - Build output directory: `/`
4. **Save and Deploy**. Vài chục giây sau có link dạng:

   ```
   https://langlab.pages.dev
   ```

Đó là link gửi cho mọi người. Mỗi lần bạn push code mới lên GitHub, Cloudflare tự dựng lại.

---

## Cái bẫy phải biết: hạn mức Google dùng chung

Worker giữ khoá Gemini của **bạn**, nên mọi người dùng link đều xài chung hạn mức đó.
Bậc miễn phí của Gemini khoảng vài trăm lượt/ngày. Vài người bạn dùng thì thoải mái;
đông người là hết quota (báo lỗi 429), tới hôm sau mới lại.

Bản dịch được nhớ trong trình duyệt mỗi người, nên câu đã dịch không gọi lại — đỡ tốn quota.

Khi nào muốn mở cho nhiều người, nạp một ít tiền vào tài khoản Gemini là quota tăng vọt,
không phải đổi gì trong code.

---

## Kiểm tra nhanh sau khi xong

- Mở link `pages.dev` → vào **Shadowing** → dán một đoạn → **Dịch cả đoạn**.
  Bản dịch hiện dưới từng câu = mọi thứ thông.
- Nếu báo "chưa có khoá": Worker chưa nhận secret — xem lại Bước 1.5.
- Nếu báo lỗi 429: hết quota Google hôm nay, mai thử lại.
