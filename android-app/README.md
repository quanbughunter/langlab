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

## Biểu tượng ứng dụng

`npx cap add android` dựng dự án kèm biểu tượng **mặc định của Capacitor**.
Không thay thì cài app ra màn hình điện thoại sẽ thấy logo Capacitor chứ không
phải logo LangLab — đúng lỗi gặp ở bản dựng đầu tiên.

Quy trình dựng đã có sẵn hai bước xử lí:

1. `tools/tao-icon.py` sinh ba ảnh nguồn 1024×1024 vào `android-app/assets/`
2. `npx capacitor-assets generate --android` cắt ra đủ mọi cỡ Android đòi

Ba ảnh, và vì sao lại ba:

| tệp | vai trò |
|---|---|
| `icon.png` | biểu tượng kiểu cũ, máy đời trước hiện nguyên khối vuông |
| `icon-foreground.png` | lớp trước của biểu tượng thích ứng — hình phải nằm trong **vùng an toàn** ở giữa, vì mỗi hãng máy cắt một kiểu (Pixel cắt tròn, Samsung cắt squircle) và có thể cắt mất tới một phần ba mỗi bề |
| `icon-background.png` | lớp sau, một màu phẳng lấy đúng `background_color` trong `manifest.webmanifest` |

Nguồn là `logo-icon.png` ở thư mục gốc — bản logo nền trong suốt. Đổi logo thì
sửa tệp ấy rồi dựng lại, không phải đụng gì vào mã.

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

## Nút quay lại và cử chỉ vuốt cạnh

Bản dựng đầu tiên vuốt cạnh là **thoát app** chứ không về trang trước. Không
phải app thiếu bộ định tuyến — `js/app.js` đã ghi vào History API từ lâu
(`syncHist` / `applyHist` / `popstate`), nên trên trình duyệt nút back chạy
đúng. Chỗ hỏng nằm ở vỏ: cú back của Android **không tự chảy** vào History API
của trang, phải có ai bắt lấy.

Trong Capacitor 8 việc ấy thuộc plugin `@capacitor/app`: nó đăng kí một
`OnBackPressedCallback` vào `OnBackPressedDispatcher` của Activity. Dự án chưa
có plugin ấy, nên không ai đăng kí gì, và cú back rơi về hành vi mặc định của
Activity — đóng app. Đúng triệu chứng.

Ba mảnh ghép lại:

| mảnh | việc |
|---|---|
| `@capacitor/app` trong `package.json` | đưa cú back từ hệ điều hành sang JS |
| `js/back-native.js` | quyết định lùi hay thoát |
| `tools/sua-manifest.py` | bật hình xem trước lúc vuốt |

Một chỗ của plugin cần biết: **hễ JS đăng kí người nghe `backButton` thì plugin
thôi tự lùi** — nó chỉ báo sang JS rồi để JS quyết. Nên khi `back-native.js`
nạp, mọi quyết định nằm ở đấy, không còn hành vi mặc định nào chen vào:

- còn trang trước (`canGoBack`) → `history.back()`, chảy tới `popstate`, và
  `applyHist` đổi màn hình
- đang ở trang đầu → **vuốt hai lần trong hai giây** mới thoát, lần đầu chỉ
  hiện nhắc. Một cú vuốt vô ý không được làm mất bài đang học.

Còn `tools/sua-manifest.py` thì chỉ lo một việc hẹp: khai
`android:enableOnBackInvokedCallback="true"` để có **hình hé trang sẽ lùi về**
lúc vuốt. Android chia ba mốc — máy 13 và 14 phải khai mới có; từ 15 trở lên
app nhắm `targetSdk ≥ 35` là bật sẵn và cờ bị bỏ qua (dự án nhắm 36). Tức là
tệp ấy chỉ để lo cho máy Android 13–14; thiếu nó thì back vẫn chạy, chỉ là lùi
khô. `npx cap add android` không khai cờ ấy — tôi đọc manifest nó sinh ra để
chắc, chứ không đoán.

Kiểm chứng bằng `node tools/tests/back-native.js`: bộ này giả lập đúng plugin
mà Capacitor tự sinh, rồi soi cả đường đi — bắn `backButton` vào thì phải thấy
`popstate` bắn ra mang đúng hình dạng `histDesc()`, chứng tỏ chuỗi plugin →
`history.back()` → bộ định tuyến còn thông.

## Hai thứ không bao giờ được đóng gói

`tools/gom-app.py` dùng **danh sách cho phép**, không phải danh sách loại trừ —
vì quên một dòng trong danh sách loại trừ là lọt, còn danh sách cho phép thì
quên là thiếu, mà thiếu thì thấy ngay.

- `api-key.txt` nằm ngay thư mục gốc dự án. APK thì ai cài cũng mở ra xem được,
  nên khoá lọt vào đó là phát tán cho mọi người.
- `audio/ko/` là 153 bản thu đĩa CD có bản quyền. Chỉ `audio/tts/` — do máy đọc
  — mới được phát hành.

Script còn kiểm lại lần cuối sau khi gom, thấy tệp cấm là dừng hẳn.

## Phép kiểm tham chiếu

Danh sách cho phép có một chỗ yếu: quên một tệp thì **thiếu**. Tôi đã quên thật,
và bản dựng đầu tiên ra APK với trang Giới thiệu hiện ô ảnh vỡ — thiếu
`logo-full.png`.

Nên `gom-app.py` giờ soi luôn trang đã gom: mọi tệp cục bộ mà nó gọi tới đều
phải có mặt, thiếu là dừng hẳn chứ không cho ra gói hỏng. Phép kiểm này bắt
được ngay một lỗi thứ hai mà mắt thường không thấy: **`js/dict-ko.js`** — từ
điển Hàn–Việt 1,9 MB — không được `build.py` nhúng vào bản gộp mà app tự nạp
lúc chạy bằng thẻ `<script>`. Thiếu nó thì từ điển tiếng Hàn mất nguồn lớn
nhất, mà hỏng **âm thầm**: `s.onerror` chỉ trả về `false` chứ không báo gì.

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
