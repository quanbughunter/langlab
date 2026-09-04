# LangLab

Ứng dụng web học ngoại ngữ **theo bài**, mở đầu bằng tiếng Hàn.
Điểm khác biệt chính: mọi chữ viết đều có **hướng dẫn thứ tự nét** chạy động — người học
nhìn thấy nét nào đi trước, nét nào đi sau, thay vì chỉ nhìn chữ đã viết xong.

Kiến trúc dữ liệu tách rời khỏi giao diện, nên thêm tiếng Nhật hoặc tiếng Trung về sau
chỉ là thêm một tệp `course-*.js` và một bộ nét trong `strokes.js`.

---

## Chạy thử

Không cần cài gì cả, không cần build.

Mở thẳng `index.html` bằng trình duyệt là chạy — kể cả phần audio, vì phần lõi chỉ dùng
`<script src>` và `new Audio()`, không dùng ES module (thứ mà `file://` chặn).

Hai tính năng cần máy chủ cục bộ: **đọc văn bản tuỳ ý** và **dịch cả đoạn**.
Trên Windows bấm đúp [`chay.bat`](chay.bat) — nó tự cài `edge-tts` nếu thiếu, tự chọn
cổng rảnh rồi mở trình duyệt. Hoặc:

```bash
python tools/serve.py           # tự chọn cổng, tự mở trình duyệt
python tools/serve.py --port 5500
```

Trên Windows, cổng 8080 hay bị Hyper-V/WSL giữ trước và báo `WinError 10013` —
`serve.py` đã tự né bằng cách dò cổng rảnh. Muốn xem dải cổng bị chiếm:
`netsh int ipv4 show excludedportrange protocol=tcp`.

Muốn một tệp HTML duy nhất để gửi cho người khác:

```bash
python3 build.py                # -> dist/langlab.html
```

---

## Đang có gì

| Màn hình | Nội dung |
|---|---|
| **Khoá học** | 15 bài của Sơ cấp 1, mỗi bài hiện chủ đề, kỹ năng và các mẫu ngữ pháp chính |
| **Bài học** | 7 thẻ: Từ vựng · Ngữ pháp · Hội thoại · **Nghe đĩa** · Tập viết · Phát âm · Văn hoá |
| **Shadowing** | Dán đoạn văn nào cũng được → tách câu, dịch tự nhiên từng câu, bấm từng từ hoặc cả câu để tra, tự ngắt thành các *ý*, đọc theo câu / theo ý / cả đoạn |
| **Bảng tra từ** | Bấm vào bất kỳ từ tiếng Hàn nào ở bất kỳ đâu → nghĩa, dạng gốc, câu ví dụ, 8 nút nhảy sang từ điển ngoài |
| **Tập viết** | 40 chữ cái Hangul có hoạt hình thứ tự nét, bộ ghép âm tiết, ô viết thử bằng chuột/ngón tay |
| **Ôn tập** | Thẻ ghi nhớ với bốn mức đánh giá theo mô hình FSRS |
| **Từ điển** | Tra ~480 từ (từ vựng Sơ cấp 1 + bộ từ thông dụng theo chủ đề) bằng tiếng Hàn, tiếng Việt, phiên âm hoặc âm Hán-Việt |
| **Bài tập** | Câu hỏi trắc nghiệm có giải thích ngữ pháp khi trả lời sai |

### Module thứ tự nét

Đây là phần cốt lõi, nằm trong [`js/strokes.js`](js/strokes.js).

* **40 chữ cái** — 14 phụ âm cơ bản, 5 phụ âm căng, 10 nguyên âm cơ bản, 11 nguyên âm ghép.
  Mỗi chữ gồm danh sách đường SVG theo đúng thứ tự viết, kèm một câu nhắc bằng tiếng Việt.
* **Ghép âm tiết** — `syllableStrokes('한')` trả về toàn bộ nét của cả khối chữ,
  đã tính sẵn vị trí và tỉ lệ của phụ âm đầu, nguyên âm và patchim.
  Bộ ghép phủ hết **11 172 âm tiết** tiếng Hàn, kể cả patchim kép như `ㄺ`, `ㅄ`.
* **Hoạt hình** — dùng `stroke-dasharray` + `stroke-dashoffset`, không cần thư viện ngoài.
  Nét đang viết tô màu đỏ son, nét đã xong chuyển sang màu mực, nét chưa tới nằm mờ phía dưới.
  Có nút tua từng nét và ba mức tốc độ.

```js
syllableStrokes('한')
// [{ d:'M50,8 V20',  part:'cho',  transform:'translate(2 7) scale(0.58 0.86)' }, … ]
```

### Tra từ trong ngữ cảnh

[`js/words.js`](js/words.js) bọc mọi từ tiếng Hàn trong `<span class="kw">`, nên hội thoại,
câu ví dụ ngữ pháp và đề bài đều rê chuột xem nghĩa và bấm để mở bảng tra được.

Tiếng Hàn dính trợ từ và đuôi chia vào sau từ, tra nguyên dạng thường không ra kết quả.
`Words.analyze()` gỡ ngược lại: bỏ trợ từ (`도서관에서` → `도서관`), quy đuôi chia về dạng gốc
(`공부해요` → `공부하다`, `갑니다` → `가다`), gỡ đuôi quá khứ và cả nguyên âm co
(`봤어요` → `보다`, `바꿔요` → `바꾸다`). Bộ quy tắc hiện đạt 31/31 trên tập kiểm thử trong `smoke.js`.

Tám nguồn tra ngoài đều đã mở thử tay trước khi đưa vào: KRDict Hàn–Việt, Youglish,
Tatoeba, 우리말샘, 표준국어대사전, 다음 어학사전, Wiktionary, Google Dịch.

#### Mở rộng từ điển bằng KRDict

Kho từ mặc định là ~480 mục tự soạn. Muốn nhiều hơn, kéo thẳng từ
**한국어기초사전** (Korean Learners' Dictionary) của Viện Quốc ngữ Hàn Quốc —
nguồn Hàn–Việt chính thống, có Open API miễn phí:

```bash
# lấy khoá miễn phí: https://krdict.korean.go.kr/openApi/openApiRegister
# dán vào tools/krdict-key.txt
pip install wordfreq
python tools/build_dict.py --top 1000     # kéo 1000 từ hay dùng nhất
python tools/build_dict.py --self-test     # kiểm parser, không cần mạng
```

Script chạy **offline một lần** (không phải server), sinh ra `js/dict-ko.js` — tệp tĩnh
app **nạp ngầm sau khi khởi động** (lazy) nên cỡ vài chục nghìn mục vẫn không làm app ì,
gộp vào kho từ và khử trùng lặp với các từ đã có. Kèm sẵn phiên âm La-tinh có xử lý nối âm
(`한국어` → `hangugeo`) và Hanja lấy từ trường `origin`.

Cú kéo lớn dùng `--resume` để an toàn khi ngắt giữa chừng:

```bash
python tools/build_dict.py --top 5000 --resume    # ~15–20 phút, phủ gần hết từ hay dùng
```

Kéo tới 5.000 từ phổ biến nhất là đã phủ gần trọn nhu cầu thực tế. Muốn lấy trọn ~50.000 mục
(cả từ hiếm) thì nên dùng bản dump XML chính thức thay vì gọi API từng từ — nhắn để bổ sung
bộ đọc dump khi bạn tải về.

Dữ liệu KRDict theo **CC-BY-SA 2.0 KR**: tệp sinh ra có dòng ghi công 국립국어원 ở đầu —
đừng gỡ. Vì là share-alike, phát hành app thì phần từ điển cũng phải giữ mở cùng giấy phép.
Kế hoạch phát triển đầy đủ (các cấp quy mô, khi nào cần backend) ở
[`docs/tu-dien-ke-hoach.html`](docs/tu-dien-ke-hoach.html).

### Audio gốc của giáo trình

Thẻ **Nghe đĩa** trong mỗi bài phát thẳng 153 track CD đi kèm sách — giọng người Hàn thật,
thu đúng cho từng bài. Trình phát có tua ±5 giây, tốc độ 0.6× / 0.75× / 1× và nút lặp
để luyện nhại theo.

**File audio không nằm trong repo** — đó là tài sản có bản quyền của nhà xuất bản.
Thư mục `audio/` đã bị `.gitignore` chặn. Muốn dùng, tự chép từ đĩa của bạn:

```
audio/ko/so-cap-1/001.mp3 … 153.mp3
```

Mở thẳng `index.html` là phát được; nếu mở bản gộp trong `dist/` thì app tự dò lùi
một cấp lên `../audio/`.

**Bản đồ track → bài học** ([`js/audio-ko.js`](js/audio-ko.js)) suy ra từ các nhãn
`CD1 TRACK nn` in trong sách: OCR hơn 60 trang mẫu rải đều 15 bài rồi đối chiếu số trang
với mục lục. Kết quả: CD1 = phần Hangeul (4 track) + Bài 01–08, CD2 = Bài 09–15 đánh số lại
từ 1, mỗi bài 10 track liên tiếp — vừa khít 153 file. OCR chỉ bắt được khoảng 40% số nhãn
(chữ nhỏ, màu nhạt) nên bản đồ là ước lượng; thẻ Nghe có nút **±1 track** để tự hiệu chỉnh
nếu nghe thấy lệch, và thiết lập được nhớ lại.

### Luyện shadowing

Dán một đoạn tiếng Hàn bất kỳ, LangLab tách thành câu rồi biến nó thành bài tập:

* **Mọi từ bấm được** — mở bảng tra từ như ở phần bài học.
* **Bấm cả câu** → bảng tra câu: liệt kê từng từ kèm nghĩa (tô đậm nếu đã có trong khoá),
  các **mẫu ngữ pháp nhận ra được** trong câu kèm số bài để mở lại lý thuyết, và nút dịch cả câu.
* **Tự ngắt thành ý** — bấm *＋ ngắt ý* giữa hai câu để chia đoạn theo cách hiểu của bạn,
  rồi cho đọc liền một mạch từng ý.
* **Đọc theo câu / theo ý / cả đoạn**, lặp mỗi câu 1–3 lần, tốc độ 1× hoặc 0.7×.
* **Chế độ chờ để nhại** — sau mỗi câu, máy im lặng đúng 1× hoặc 1.5× độ dài câu đó
  để bạn nói theo. Câu đang chờ được tô đỏ, câu đang đọc tô xanh.

* **Dịch cả đoạn** — bản dịch tiếng Việt hiện ngay dưới từng câu, bật/tắt được
  (khi luyện nhại thì thường muốn tắt đi).

Đoạn văn, các mốc ngắt ý và bản dịch đều được nhớ lại giữa các lần mở app.

#### Dịch tự nhiên, không word-by-word

Máy dịch xử lý từng câu rời rạc nên hay ra thứ tiếng Việt dịch sát từng chữ.
[`tools/translate.py`](tools/translate.py) gửi **cả đoạn một lượt** cho một mô hình ngôn ngữ,
kèm yêu cầu giữ đúng mức lịch sự của bản gốc (반말 / -아요 / -습니다) và chọn đại từ
tiếng Việt cho hợp ngữ cảnh, nên bản dịch đọc liền mạch như một đoạn văn thật.

Cần một khoá API. Tạo tệp `api-key.txt` ở thư mục gốc, dán khoá vào là xong —
máy chủ tự nhận nhà cung cấp theo tiền tố khoá.

**Hai nơi cấp khoá miễn phí, không cần thẻ tín dụng:**

| Nơi lấy | Tiền tố | Hạn mức miễn phí |
|---|---|---|
| [Google AI Studio](https://aistudio.google.com/apikey) | `AIza` | rộng nhất; dịch tiếng Việt tốt — dễ lấy nhất |
| [Groq](https://console.groq.com/keys) | `gsk_` | nhanh, chạy model nguồn mở |

Cả đoạn văn chỉ tốn **một lượt gọi**, và bản dịch được cache lại, nên hạn mức miễn phí
thoải mái cho việc tự học. Lưu ý: Google có thể dùng dữ liệu bậc miễn phí để cải thiện mô hình.

> GitHub Models từng nằm trong danh sách này nhưng **GitHub đã khai tử nó ngày 30/7/2026** —
> không dùng được nữa. Script sẽ báo rõ nếu bạn lỡ dùng khoá GitHub.

Khoá trả phí cũng dùng được: `sk-ant-` (Anthropic), `sk-` (OpenAI), `sk-or-` (OpenRouter).
Nhà cung cấp khác thì khai thêm trong `api-key.txt`:

```
gsk_khoa_cua_ban
model=llama-3.3-70b-versatile
base_url=https://api.groq.com/openai/v1
```

Tên model của Gemini đổi liên tục (2.0 → 2.5 → 3.x) nên script **hỏi thẳng API** xem khoá
dùng được model nào rồi lấy bản Flash mới nhất, thay vì ghim cứng một tên rồi vài tháng sau hỏng.

Kiểm tra khoá: bấm đúp [`tools/kiem-tra-khoa.bat`](tools/kiem-tra-khoa.bat) hoặc chạy
`python tools/translate.py --check` — nó thử dịch hai câu và nói rõ lỗi gì nếu hỏng.

Bản dịch lưu vào `cache/translations.json`. `api-key.txt` và `cache/` đều bị `.gitignore` chặn.

Chưa muốn dùng khoá thì vẫn có nút **Mở cả đoạn trong Google Dịch** — không cần cài gì.

#### Đưa lên mạng để chia sẻ qua link

Muốn người khác dán link là dùng được (kể cả phần dịch) mà không cần chạy `chay.bat`:
host phần tĩnh bằng **Cloudflare Pages** và đưa phần dịch lên một **Cloudflare Worker**
(cả hai đều miễn phí). Worker giữ khoá Gemini của bạn trong secret, app tự gọi tới đó
khi mở qua link. Các bước chi tiết ở [`worker/README.md`](worker/README.md).

Lưu ý: mọi người dùng link sẽ xài chung hạn mức Gemini của bạn (~vài trăm lượt/ngày ở bậc
miễn phí) — hợp cho chia sẻ nhóm nhỏ. Phần đọc giọng neural và audio giáo trình vẫn chỉ
chạy khi mở bằng `chay.bat` ở máy.

Bộ nhận diện ngữ pháp ([`js/words.js`](js/words.js)) không suy ra từ tên mẫu mà dùng
26 biểu thức viết tay bám vào **dạng thực tế** trong câu — vì suy ra từ tên mẫu cho kết quả sai:
`조용하고` bị nhận thành trợ từ `하고`, còn `먹고 싶어요` lại không khớp với `-고 싶다`.

### Audio thu sẵn — nguồn phát âm chính

Giọng đọc của trình duyệt lấy từ giọng cài trên máy. Trên Windows thường chỉ có
Microsoft Heami — giọng ghép mẫu từ thời Windows 8, nghe rất máy. Không có cách nào
sửa được bằng code, vì vấn đề nằm ở engine.

Cách dứt điểm: thu sẵn từng từ và từng câu bằng giọng neural, rồi app chỉ việc phát tệp.

```bash
pip install edge-tts
python tools/make_audio.py                      # giọng nữ ko-KR-SunHiNeural
python tools/make_audio.py --voice ko-KR-InJoonNeural   # giọng nam
python tools/make_audio.py --dry-run            # xem trước sẽ thu những gì
```

Trên Windows có thể bấm đúp [`tools/thu-am.bat`](tools/thu-am.bat) thay cho hai dòng trên —
nó tự kiểm tra Python, tự cài `edge-tts` rồi chạy. Script chỉ cần Python, không cần Node.js.

Sinh 298 tệp (~5 MB) vào `audio/tts/`. Xong thì tải lại trang — mọi thao tác nghe
trong app tự chuyển sang tệp thu sẵn, giọng máy chỉ còn là dự phòng. Kết quả:
chất lượng như nhau trên mọi máy và mọi trình duyệt, chạy offline, bấm là kêu ngay
không phải chờ engine khởi động. Nút loa ở thanh trên hiển thị đang dùng nguồn nào.

Tên tệp là băm FNV-1a 32 bit của câu đã chuẩn hoá, tính giống nhau ở
[`js/tts.js`](js/tts.js) và [`tools/make_audio.py`](tools/make_audio.py) nên hai bên
luôn khớp — có bài kiểm thử đối chiếu trong `smoke.js`.

`edge-tts` dùng endpoint đọc-to nội bộ của Microsoft Edge: miễn phí, không cần khoá API,
nhưng không phải API công khai — dùng để tự học thì không sao, đừng đưa vào sản phẩm
thương mại.

### Phát âm dự phòng

[`js/speech.js`](js/speech.js) sửa ba điểm yếu của Web Speech API:

* **Chọn đúng giọng.** Tự tìm giọng `ko-KR`, ưu tiên giọng mạng của Edge/Google vì tự nhiên hơn
  giọng cài sẵn. Máy chưa có giọng Hàn thì hiện hướng dẫn cài, thay vì đọc Hangul bằng giọng tiếng Anh.
* **Ngắt nghỉ đúng chỗ.** Cắt câu ở dấu chấm và dấu phẩy rồi đọc thành hàng đợi có khoảng nghỉ
  điều chỉnh được, thay vì đẩy cả đoạn vào một lần cho máy tự đoán.
* **Không bị nuốt tiếng.** Hoãn 120 ms sau `cancel()` và giữ nhịp `resume()` để né hai lỗi
  đã biết của Chrome.

Kèm theo: nghe chậm, đọc rời từng chữ để nghe rõ patchim, và tô sáng lượt thoại đang đọc.

---

## Cấu trúc thư mục

```
langlab/
├── index.html          khung ứng dụng
├── css/langlab.css     toàn bộ giao diện, có sẵn chế độ sáng/tối
├── js/
│   ├── strokes.js      dữ liệu nét viết + hàm ghép/tách âm tiết
│   ├── course-ko.js    nội dung khoá tiếng Hàn
│   ├── tts.js          phát audio thu sẵn, băm tên tệp
│   ├── audio-ko.js     bản đồ track đĩa CD → bài học
│   ├── speech.js       giọng máy dự phòng: chọn giọng, cắt câu, khoảng nghỉ
│   ├── words.js        tách từ, gỡ đuôi chia, link từ điển ngoài
│   └── app.js          điều hướng và các màn hình
├── build.py            gộp tất cả thành một tệp HTML
└── dist/               kết quả gộp
```

Thêm một ngôn ngữ mới = viết `js/course-<mã>.js` theo đúng cấu trúc của `course-ko.js`,
rồi thêm một dòng vào mảng `LANGUAGES`.

---

## Nguồn nội dung

Khung chương trình (tên bài, chủ điểm ngữ pháp, trọng tâm phát âm và văn hoá của từng bài)
bám theo bộ giáo trình **« Tiếng Hàn Quốc tổng hợp dành cho người Việt Nam — Sơ cấp 1 »**
(베트남인을 위한 종합 한국어), do Quỹ Giao lưu Quốc tế Hàn Quốc và Ngân hàng KB Kookmin xuất bản.

Toàn bộ từ vựng, câu ví dụ và hội thoại trong repo này **do LangLab tự biên soạn**.
Không có nội dung nào được sao chép từ sách. Repo cũng không kèm theo tệp sách, file nghe
hay hình ảnh của giáo trình.

Dự kiến bản đầy đủ sẽ lấy dữ liệu từ điển từ [KRDict](https://krdict.korean.go.kr/eng/openApi/openApiInfo)
của Viện Quốc ngữ Quốc gia Hàn Quốc — nguồn Hàn–Việt chính thống, có Open API miễn phí.

---

## Lộ trình

- [x] Khung ứng dụng đa ngôn ngữ
- [x] 15 bài Sơ cấp 1 với từ vựng, ngữ pháp và hội thoại
- [x] Module thứ tự nét viết Hangul, phủ toàn bộ âm tiết
- [x] Mọi từ bấm được, bảng tra kèm 8 nguồn từ điển ngoài
- [x] Engine phát âm cắt câu và ngắt nghỉ theo ngữ pháp
- [x] Phát audio đĩa CD gốc của giáo trình theo từng bài
- [x] Thu sẵn từng từ và từng câu bằng giọng neural, thay hẳn giọng máy
- [x] Luyện shadowing: dán đoạn, tách câu, tự ngắt ý, đọc theo câu/ý/cả đoạn
- [ ] Cắt audio đĩa CD theo từng câu để bấm câu nào nghe câu đó
- [ ] Nạp dữ liệu thật từ KRDict thay cho từ điển mẫu
- [ ] Cắm [`ts-fsrs`](https://github.com/open-spaced-repetition/ts-fsrs) để xếp lịch ôn tập thật
- [ ] Chấm nét viết trên canvas (so khớp hướng và thứ tự nét người dùng vẽ)
- [ ] Sinh bài tập tự động từ từ vựng người học đang yếu
- [ ] Bộ nét cho kana và Hán tự, mở đường cho tiếng Nhật và tiếng Trung

## Giấy phép

MIT — xem [LICENSE](LICENSE).
