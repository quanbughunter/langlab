# LangLab trên Android

Vỏ Capacitor để gói LangLab thành tệp APK chạy **hoàn toàn ngoại tuyến** —
không cần mạng, không cần máy chủ.

## Cách dễ nhất: để GitHub dựng hộ

Không phải cài gì lên máy. Máy chủ của GitHub đã có sẵn Android SDK.

1. Vào <https://github.com/quanbughunter/langlab> → thẻ **Actions**
2. Cột trái chọn **Dựng APK cho Android**
3. Bấm **Run workflow**, chọn thứ tiếng muốn đóng audio, bấm nút xanh
4. Chờ chừng 10–20 phút, rồi tải tệp ở mục **Artifacts** của lần chạy đó

Tệp tải về là `.zip` — giải nén ra mới thấy `.apk`. GitHub luôn nén artifact lại,
không có cách tắt.

Quy trình nằm ở `.github/workflows/apk.yml`.

## Cách còn lại: dựng ngay trên máy mình

Chỉ cần khi muốn thử nhanh mà không phải đẩy mã lên, hoặc khi muốn gỡ lỗi bằng
Android Studio. Bấm đúp `tools\dung-apk.bat` ở thư mục gốc dự án.

Tệp APK ra ở:

```
android-app\android\app\build\outputs\apk\debug\app-debug.apk
```

Chép sang điện thoại rồi mở ra cài. Máy sẽ hỏi «cài từ nguồn không xác định» —
đồng ý là xong.

### Cần có sẵn trên máy (chỉ cho cách dựng tại máy)

- **Node.js** — <https://nodejs.org/>
- **Android Studio** — <https://developer.android.com/studio>, kèm sẵn Android SDK và một JDK

### Yêu cầu phiên bản

Mấy con số này tôi đọc thẳng từ khuôn dự án mà Capacitor 8.5.3 sinh ra, không
phải chép từ bài hướng dẫn trên mạng:

| | |
|---|---|
| JDK | **21** — `capacitor-cordova-android-plugins/build.gradle` đặt `JavaVersion.VERSION_21` |
| Gradle | 8.14.3 (tự tải, không phải cài tay) |
| Android Gradle Plugin | 8.13.0 |
| compileSdk / targetSdk | 36 |
| minSdk | 24 — tức **Android 7.0 trở lên** |

JDK cũ hơn 21 sẽ báo `invalid source release: 21`. Cách chắc ăn nhất là để
Android Studio dùng JDK đi kèm của chính nó:

> Settings → Build, Execution, Deployment → Build Tools → Gradle → Gradle JDK →
> chọn bản `jbr` đi kèm

Muốn biết máy mình thiếu gì thì chạy trong thư mục `android-app`:

```
npx cap doctor
```

## Chọn đóng audio của thứ tiếng nào

Đây là quyết định đáng cân nhắc nhất. Toàn bộ `audio/tts/` đã khoảng **1 GB**
— nhét hết vào một APK thì vừa nặng vừa không đăng Play được (giới hạn 150 MB
cho APK thường).

```
python tools\gom-app.py --tieng ko          # chỉ tiếng Hàn  (~80 MB)
python tools\gom-app.py --tieng ko en       # Hàn + Anh
python tools\gom-app.py --khong-audio       # không audio    (~10 MB)
python tools\gom-app.py --tat-ca            # tất cả         (rất nặng)
```

Mặc định trong `dung-apk.bat` là `--tieng ko`. Sửa dòng đó nếu muốn khác.

Bỏ hẳn audio cũng dùng được: app tự chuyển sang giọng đọc của điện thoại. Nghe
không hay bằng giọng thu sẵn, nhưng đọc được mọi câu.

## Giọng đọc trong WebView

Đây là chỗ khác biệt lớn nhất giữa chạy trên trình duyệt và chạy trong APK.

WebView của Android **thường không có** `window.speechSynthesis` — ngay cả bản
WebView dựng từ Chromium đời mới cũng có thể trả về `undefined`. Nếu không bù
vào thì mọi câu chưa có mp3 thu sẵn sẽ im lặng, mà người học không hiểu vì sao.

`js/tts-native.js` khai một API trông y hệt API thật rồi chuyển lời gọi sang
`TextToSpeech` của Android qua plugin Capacitor. Vì hình dạng giống hệt nên bốn
chỗ gọi sẵn có trong `js/speech.js` và `js/app.js` không phải sửa dòng nào. Khi
chạy trên trình duyệt thường, tệp ấy tự đứng im.

Kiểm chứng bằng `node tools/tests/tts-native.js` — bộ này giả lập đúng cảnh
WebView không có API, và kiểm cả trường hợp xấu nhất: không có plugin thì phải
**báo lỗi ngay** chứ không im lặng.

Lưu ý: chất lượng giọng lúc này là giọng TTS cài trong điện thoại. Máy thiếu
gói giọng cho thứ tiếng nào thì thứ tiếng ấy sẽ không đọc được — cài thêm
trong *Cài đặt → Ngôn ngữ → Đầu ra văn bản thành giọng nói*.

## Hai thứ không bao giờ được đóng gói

`tools/gom-app.py` dùng **danh sách cho phép**, không phải danh sách loại trừ —
vì quên một dòng trong danh sách loại trừ là lọt, còn danh sách cho phép thì
quên là thiếu, mà thiếu thì thấy ngay.

- `api-key.txt` nằm ngay thư mục gốc dự án. APK thì ai cài cũng mở ra xem được,
  nên khoá lọt vào đó là phát tán cho mọi người.
- `audio/ko/` là 153 bản thu đĩa CD có bản quyền. Chỉ `audio/tts/` — do máy đọc
  — mới được phát hành.

Script còn kiểm lại lần cuối sau khi gom, thấy tệp cấm là dừng hẳn.

## Những chỗ nên thử ngay trên máy thật

Tôi dựng được dự án và kiểm thử được phần logic, nhưng **chưa chạy thử trên
Android thật** — hộp cát không có Android SDK. Mấy chỗ nên để ý khi anh cài lần
đầu:

1. **Thời gian mở app.** `index.html` nặng 10 MB với gần 8 MB JavaScript nhúng
   trong. WebView phải phân tích hết chỗ đó trước khi vẽ màn hình đầu, nên lần
   mở đầu có thể lâu vài giây. Nếu chậm khó chịu thì chuyển sang dùng bản nhiều
   tệp (`index.html` + `js/*.js`) thay cho bản gộp.
2. **Giọng đọc.** Mở một bài rồi bấm nghe. Có mp3 thu sẵn thì phát ngay; câu
   nào chưa thu thì phải nghe thấy giọng máy của điện thoại.
3. **Lưu tiến độ.** App ghi tiến độ vào `localStorage`. Trong WebView thì dữ
   liệu ấy nằm trong vùng riêng của app, gỡ app là mất — khác với trên trình
   duyệt.
4. **Trợ lí AI.** Phần này cần mạng. Khuôn Capacitor đã khai sẵn quyền
   `INTERNET` nên không phải thêm gì, nhưng mọi thứ còn lại vẫn chạy ngoại
   tuyến bình thường.

## Cập nhật app sau này

Sửa nội dung xong thì chạy lại `tools\dung-apk.bat`. Lần sau nhanh hơn nhiều vì
thư viện đã tải sẵn.
