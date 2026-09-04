/* ============================================================
   LangLab — audio gốc của giáo trình (Sơ cấp 1)
   ------------------------------------------------------------
   153 track đĩa CD đi kèm sách « Tiếng Hàn Quốc tổng hợp dành cho
   người Việt Nam — Sơ cấp 1 ». Giọng người Hàn thật, thu đúng bài.

   ⚠ Đây là tài sản có bản quyền của nhà xuất bản.
   Thư mục audio/ nằm ngoài git (xem .gitignore) — chỉ để tự học
   trên máy mình, không phát tán, không đưa lên repo công khai.

   ── Bản đồ track được xác định thế nào ──
   Sách in nhãn « CD1 TRACK 07 » cạnh mỗi hoạt động. Tôi OCR các nhãn
   này trên hơn 60 trang mẫu rải đều 15 bài, rồi đối chiếu số trang
   với mục lục. Kết quả:

     · CD1 = phần Hangeul + Bài 01–08     · CD2 = Bài 09–15 (đánh số lại từ 1)
     · Mỗi bài dùng 10 track liên tiếp    · Phần Hangeul dùng 4 track đầu
     · 4 + 8×10 = 84 track CD1  →  153 − 84 = 69 track CD2 cho 7 bài ✓

   Nhãn OCR đọc được khớp mô hình này: Bài 01 {5,7,8,10}, Bài 02 {14,15,20},
   Bài 06 {59}, Bài 08 {76,78,79}, Bài 09 {2,3,4}, Bài 10 {12,13}.

   OCR chỉ đọc được khoảng 40% số nhãn (chữ nhỏ, màu nhạt) nên bản đồ này
   là ƯỚC LƯỢNG. Nếu nghe thấy lệch bài, dùng nút hiệu chỉnh trong thẻ Nghe
   để dịch toàn bộ bản đồ ±1 track; giá trị được nhớ lại cho lần sau.
   ============================================================ */

const AUDIO_KO = (function(){
'use strict';

const TOTAL = 153;
const INTRO = 4;          // phần Hangeul: track 1–4
const PER   = 10;         // mỗi bài 10 track
const CD1_LESSONS = 8;    // CD1 chứa Bài 01–08

let offset = 0;
try { offset = +(localStorage.getItem('langlab.audioOffset') || 0) || 0; } catch(e){}

/** Số thứ tự file phẳng (1–153) của track thứ k trong bài `no`. */
function range(no){
  let start;
  if (no === 0) start = 1;                                  // phần Hangeul
  else if (no <= CD1_LESSONS) start = INTRO + (no - 1) * PER + 1;
  else start = INTRO + CD1_LESSONS * PER + (no - CD1_LESSONS - 1) * PER + 1;
  const out = [];
  for (let k = 0; k < PER; k++){
    const n = start + k + offset;
    if (n >= 1 && n <= TOTAL) out.push(n);
  }
  return no === 0 ? out.slice(0, INTRO) : out;
}

/** CD nào chứa track phẳng này, và số hiệu in trong sách. */
function label(n){
  const cd1 = INTRO + CD1_LESSONS * PER;                    // 84
  return n <= cd1 ? { cd: 1, no: n } : { cd: 2, no: n - cd1 };
}

/* Thư mục audio nằm cạnh index.html. Nhưng bản gộp một-tệp lại nằm trong dist/,
   nên phải thử cả đường lùi một cấp. Trình phát đi lần lượt các ứng viên này. */
const ROOTS = ['audio/ko/so-cap-1/', '../audio/ko/so-cap-1/', './audio/ko/so-cap-1/'];

return {
  roots: ROOTS,
  total: TOTAL,
  file: (n, k) => ROOTS[(k || 0) % ROOTS.length] + String(n).padStart(3, '0') + '.mp3',
  lessonTracks: range,
  label,
  get offset(){ return offset; },
  setOffset(v){
    offset = Math.max(-20, Math.min(20, v | 0));
    try { localStorage.setItem('langlab.audioOffset', offset); } catch(e){}
    return offset;
  }
};
})();
if (typeof window !== 'undefined') window.AUDIO_KO = AUDIO_KO;
