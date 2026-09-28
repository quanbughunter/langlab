# Bộ kiểm thử LangLab

Chạy từ **thư mục gốc của repo** (`langlab/`), sau khi đã `python3 build.py`
— các test jsdom đọc `dist/langlab.html`, không đọc `index.html`.

```bash
python3 build.py
npm i jsdom          # chỉ cần một lần
for t in smoke zh-test hsk-test ru-test ja-test en-test fact-test sh-test rd-test hist-test asst-flow pic-test say-test dict-cover audio-test tts-test; do
  printf "%-12s " $t; node tools/tests/$t.js | tail -1
done
node tools/tests/morph-nouns.js && node tools/tests/morph-verbs.js && node tools/tests/morph-adj.js
node tools/tests/worker-test.mjs
```

| Tệp | Kiểm cái gì |
|---|---|
| `smoke.js` | navbar, wordmark, ô tra nhanh, điều hướng chung |
| `zh-test.js` | khoá HSK, bộ thủ, ghép âm pinyin, mục từ, tra theo bộ thủ, tập viết |
| `hsk-test.js` | engine thi thử HSK |
| `ru-test.js` | khoá Nga A1–C2, từ điển, bài tập, ТРКИ |
| `ja-test.js` | kana, kanji, khoá N5–N2, JLPT |
| `en-test.js` | khoá A1–B2, từ điển Anh, 14 dạng bài tập, IELTS/TOEFL |
| `fact-test.js` | kho «Bạn có biết?» |
| `sh-test.js` | Shadowing 5 ngôn ngữ |
| `rd-test.js` | màn Bài đọc |
| `hist-test.js` | nút Back / History API |
| `asst-flow.js` | Labi: hỏi đáp + phân tích âm thanh |
| `pic-test.js` | Nghe & chọn tranh: dữ liệu, độ sát nhiễu, tranh, luồng làm bài |
| `say-test.js` | Nút dừng đọc, chọn đúng giọng từng thứ tiếng |
| `dict-cover.js` | Độ phủ từ điển cho từ khoá và thân bài đọc |
| `audio-test.js` | `tools/make_audio.py` và app phải băm ra cùng tên tệp mp3 |
| `tts-test.js` | Ba cảnh mạng: chậm · thiếu tệp giữa chuỗi · môi trường câm |
| `morph-*.js` | engine hình thái tiếng Nga (chạy bằng node thuần) |
| `worker-test.mjs` | Cloudflare Worker dịch |

Trước đây bộ test chỉ nằm trong máy ảo nên mất sạch mỗi lần máy ảo dựng lại.
Từ 15/9/2026 nó nằm trong repo.
