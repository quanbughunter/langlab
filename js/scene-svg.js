/* ============================================================
   LangLab — THƯ VIỆN HÌNH VẼ CHO BÀI TẬP NGHE — XEM TRANH
   ------------------------------------------------------------
   Vì sao vẽ vector thay vì dùng ảnh chụp: bài nghe xem tranh của
   JLPT · TOPIK · HSK đều dùng tranh nét đơn giản. Ảnh chụp có quá
   nhiều chi tiết nên câu hỏi mất tính dứt khoát — người học tranh
   luận được «cái đó là cốc hay ly», «trời đó sáng hay chiều». Tranh
   nét thì mỗi chi tiết xuất hiện là có chủ ý, đáp án đúng chỉ một.

   Cách dùng: mỗi tranh chỉ là một bản ghi ngắn, không phải SVG tay.

     SCENE.render({ bg:'room', items:[
       { p:'table', x:200, y:220 },
       { p:'cat',   x:200, y:218, pose:'lie' },
       { p:'clock', x:330, y:70, time:'7:30' }
     ]})

   Mọi bộ phận vẽ bằng nét, không tô màu đặc, không chuyển sắc. Màu
   lấy từ biến CSS của app nên tranh tự đổi theo tông từng ngôn ngữ
   và tự đảo khi sang nền tối (xem .scene trong css/langlab.css).

   Quy ước neo (x, y trong bản ghi trỏ vào đâu của bộ phận):
     · đồ đứng trên sàn (bàn, ghế, người, cây, con vật) → đáy, giữa
     · đồ treo hoặc bay (đồng hồ, mây, mặt trời)        → tâm
     · khung (cửa sổ, cửa, kệ)                          → góc trên bên trái
   Thêm rep:3 (và gap) để lặp một bộ phận — dùng cho câu nhiễu sai số lượng.

   Nội dung do LangLab tự vẽ, không lấy từ nguồn nào.
   ============================================================ */

const SCENE = (function(){
'use strict';

const W = 400, H = 280, FLOOR = 220;

/* ---------- tiện ích ---------- */
const n2 = v => Math.round(v * 10) / 10;
const ln = (x1, y1, x2, y2, cls) => `<line${cls ? ` class="${cls}"` : ''} x1="${n2(x1)}" y1="${n2(y1)}" x2="${n2(x2)}" y2="${n2(y2)}"/>`;
const rc = (x, y, w, h, r, cls) => `<rect${cls ? ` class="${cls}"` : ''} x="${n2(x)}" y="${n2(y)}" width="${n2(w)}" height="${n2(h)}"${r ? ` rx="${r}"` : ''}/>`;
const ci = (cx, cy, r, cls) => `<circle${cls ? ` class="${cls}"` : ''} cx="${n2(cx)}" cy="${n2(cy)}" r="${n2(r)}"/>`;
const pa = (d, cls) => `<path${cls ? ` class="${cls}"` : ''} d="${d}"/>`;
const el = (cx, cy, rx, ry, cls) => `<ellipse${cls ? ` class="${cls}"` : ''} cx="${n2(cx)}" cy="${n2(cy)}" rx="${n2(rx)}" ry="${n2(ry)}"/>`;

/* ---------- nền ---------- */
const BG = {
  plain: () => '',
  /* phòng: chân tường + sàn */
  room: () => ln(0, FLOOR, W, FLOOR, 'sv-ground') + ln(0, FLOOR - 10, W, FLOOR - 10, 'sv-faint'),
  /* ngoài trời: đường chân trời thấp */
  street: () => ln(0, FLOOR, W, FLOOR, 'sv-ground') + ln(0, FLOOR + 26, W, FLOOR + 26, 'sv-faint'),
  /* trong lớp / phòng có bảng */
  classroom: () => BG.room() + rc(34, 34, 150, 78, 3, 'sv-fill') + ln(34, 112, 184, 112)
};

/* ============================================================
   BỘ PHẬN — mỗi hàm trả về SVG trong hệ toạ độ riêng của nó
   ============================================================ */
const P = {};

/* ---------- đồ đạc (neo: đáy, giữa) ---------- */
P.table = o => {
  const w = o.w || 120, h = o.h || 62, hw = w / 2, lx = hw - 12;
  return rc(-hw, -h, w, 9, 2, 'sv-fill') + ln(-lx, -h + 9, -lx, 0) + ln(lx, -h + 9, lx, 0);
};
P.chair = o => {
  const s = o.seat || 46, hs = s / 2;
  return rc(-hs + 3, -96, s - 6, 48, 3, 'sv-fill')
    + rc(-hs, -48, s, 9, 2, 'sv-fill')
    + ln(-hs + 5, -39, -hs + 5, 0) + ln(hs - 5, -39, hs - 5, 0);
};
P.bed = o => {
  const w = o.w || 150, hw = w / 2;
  return rc(-hw, -40, w, 18, 3, 'sv-fill')                       /* đệm */
    + rc(-hw, -74, 30, 34, 4, 'sv-soft')                          /* gối */
    + ln(-hw, -22, -hw, 0) + ln(hw, -22, hw, 0)
    + pa(`M${n2(hw)} -40 V-70`) + pa(`M${n2(hw - 2)} -70 H${n2(hw)}`);
};
P.sofa = o => {
  const w = o.w || 130, hw = w / 2;
  return rc(-hw, -46, w, 20, 4, 'sv-fill') + rc(-hw, -80, w, 34, 5, 'sv-fill')
    + rc(-hw - 12, -74, 14, 48, 4, 'sv-fill') + rc(hw - 2, -74, 14, 48, 4, 'sv-fill')
    + ln(-hw + 8, -26, -hw + 8, 0) + ln(hw - 8, -26, hw - 8, 0);
};
P.desk = o => {
  const w = o.w || 110, hw = w / 2;
  return rc(-hw, -66, w, 9, 2, 'sv-fill') + ln(-hw + 8, -57, -hw + 8, 0) + ln(hw - 8, -57, hw - 8, 0)
    + rc(-hw + 14, -50, 34, 24, 2, 'sv-faint');
};
P.fridge = o => {
  const w = o.w || 58, h = o.h || 124, hw = w / 2;
  return rc(-hw, -h, w, h, 5, 'sv-fill') + ln(-hw, -h + 44, hw, -h + 44)
    + ln(hw - 12, -h + 14, hw - 12, -h + 34) + ln(hw - 12, -h + 54, hw - 12, -h + 76);
};
P.stove = o => {
  const w = o.w || 76, hw = w / 2;
  return rc(-hw, -60, w, 60, 4, 'sv-fill') + ln(-hw, -44, hw, -44)
    + ci(-hw + 20, -30, 9) + ci(hw - 20, -30, 9) + ci(-hw + 20, -8, 6) + ci(hw - 20, -8, 6);
};
P.sink = o => {
  const w = o.w || 84, hw = w / 2;
  return rc(-hw, -58, w, 58, 4, 'sv-fill') + el(0, -50, 22, 7)
    + pa(`M0 -76 V-62 M0 -76 q10 0 10 8`);
};
P.tv = o => {
  const w = o.w || 86, hw = w / 2;
  return rc(-hw, -66, w, 52, 3, 'sv-fill') + ln(-14, -14, 14, -14) + ln(0, -14, 0, -4) + ln(-16, -4, 16, -4);
};
P.plant = () => pa('M0 0 V-18') + pa('M0 -18 q-16 -6 -18 -24 q18 2 18 24')
  + pa('M0 -22 q16 -6 18 -26 q-18 2 -18 26') + pa('M-11 0 h22 l-4 -14 h-14 z', 'sv-fill');
P.tree = o => {
  const h = o.h || 104, t = h * 0.1;
  return rc(-t / 2, -h * 0.4, t, h * 0.4, 1, 'sv-fill')
    + ci(-h * 0.17, -h * 0.5, h * 0.17, 'sv-fill') + ci(h * 0.17, -h * 0.5, h * 0.17, 'sv-fill')
    + ci(0, -h * 0.63, h * 0.25, 'sv-fill');
};

/* ---------- khung (neo: góc trên bên trái) ---------- */
P.window = o => {
  const w = o.w || 92, h = o.h || 82;
  let s = rc(0, 0, w, h, 2, 'sv-fill') + ln(w / 2, 0, w / 2, h) + ln(0, h / 2, w, h / 2);
  if (o.view === 'rain') for (let i = 0; i < 6; i++){ const x = 10 + i * (w - 20) / 5; s += ln(x, 10, x - 5, 26, 'sv-faint'); }
  if (o.view === 'snow') for (let i = 0; i < 6; i++){ const x = 10 + i * (w - 20) / 5; s += ci(x, 14 + (i % 2) * 12, 2.6, 'sv-faint'); }
  if (o.view === 'sun'){ s += ci(w * 0.28, h * 0.26, 10); for (let i = 0; i < 6; i++){ const a = i * Math.PI / 3; s += ln(w * 0.28 + Math.cos(a) * 14, h * 0.26 + Math.sin(a) * 14, w * 0.28 + Math.cos(a) * 19, h * 0.26 + Math.sin(a) * 19); } }
  if (o.view === 'night'){ s += pa(`M${n2(w * 0.3)} ${n2(h * 0.18)} a9 9 0 1 0 8 13 a7 7 0 1 1 -8 -13`); }
  if (o.open) s += ln(w / 2, 0, w / 2 + 16, -8) + ln(w / 2 + 16, -8, w / 2 + 16, h - 8) + ln(w / 2, h, w / 2 + 16, h - 8);
  return s;
};
P.door = o => {
  const w = o.w || 56, h = o.h || 118;
  return rc(0, 0, w, h, 2, 'sv-fill') + ci(w - 10, h / 2, 3.4, 'sv-accent');
};
P.shelf = o => {
  const w = o.w || 92, h = o.h || 96, rows = o.rows || 3;
  let s = rc(0, 0, w, h, 2, 'sv-fill');
  for (let r = 1; r < rows; r++) s += ln(0, h * r / rows, w, h * r / rows);
  for (let r = 0; r < rows; r++){
    const top = h * r / rows + 5, bh = h / rows - 10;
    for (let b = 0; b < 4; b++) s += rc(7 + b * ((w - 16) / 4), top, (w - 16) / 4 - 3, bh, 1, 'sv-soft');
  }
  return s;
};
P.board = o => {
  const w = o.w || 150, h = o.h || 78;
  return rc(0, 0, w, h, 3, 'sv-fill') + ln(0, h, w, h);
};

/* ---------- người (neo: đáy, giữa · cao khoảng 112) ---------- */
P.person = o => {
  const hair = o.hair === 'long', pose = o.pose || 'stand';
  const head = ci(0, -96, 13) + (hair ? pa('M-13 -96 q-5 18 2 22 M13 -96 q5 18 -2 22') : '');
  let body = ln(0, -83, 0, -46), arms = '', legs = '', extra = '';

  if (pose === 'sit'){
    body = ln(0, -83, 0, -52);
    legs = pa('M0 -52 h20 M20 -52 V-16');
    arms = pa('M0 -74 q16 6 20 18');
  } else if (pose === 'walk'){
    legs = pa('M0 -46 l-13 46 M0 -46 l15 46');
    arms = pa('M0 -76 l-16 16 M0 -76 l17 13');
  } else if (pose === 'run'){
    legs = pa('M0 -46 l-20 40 M0 -46 l22 30');
    arms = pa('M0 -76 l-20 8 M0 -76 l20 -12');
  } else if (pose === 'read'){
    arms = pa('M0 -76 q14 8 18 16 M0 -76 q-14 8 -18 16');
    extra = pa('M-20 -58 h40 v14 h-40 z', 'sv-soft') + ln(0, -58, 0, -44);
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'eat' || pose === 'drink'){
    arms = pa('M0 -76 q-16 6 -18 14') + pa('M0 -74 q16 -2 14 -14');
    extra = pose === 'drink' ? rc(10, -96, 12, 12, 1.5, 'sv-soft') : el(16, -88, 7, 3, 'sv-soft');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'cook'){
    arms = pa('M0 -74 h24 M0 -74 q-14 8 -16 16');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'point'){
    arms = pa('M0 -76 l26 -14 M0 -76 q-14 8 -16 16');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'phone'){
    arms = pa('M0 -74 q14 -4 12 -16 M0 -74 q-15 6 -17 14');
    extra = rc(8, -96, 9, 14, 2, 'sv-soft');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'carry'){
    arms = pa('M0 -76 q-18 6 -20 14 M0 -76 q18 6 20 14');
    extra = rc(14, -62, 20, 22, 2, 'sv-soft');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'wave'){
    arms = pa('M0 -76 l-22 -16 M0 -76 q16 8 18 16');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  } else if (pose === 'write'){
    arms = pa('M0 -74 q18 6 22 14 M0 -74 q-16 6 -18 14');
    legs = pa('M0 -46 h18 M18 -46 V-14');
    body = ln(0, -83, 0, -50);
  } else {                                   /* stand */
    arms = pa('M0 -76 l-16 22 M0 -76 l16 22');
    legs = pa('M0 -46 l-10 46 M0 -46 l10 46');
  }
  return head + body + arms + legs + extra;
};
/* người nằm ngủ (neo: đáy, giữa — đặt trên giường) */
P.sleeper = () => ci(-30, -17, 11, 'sv-fill') + pa('M-19 0 q6 -20 27 -20 q22 0 26 20 z', 'sv-fill') + pa('M-15 -34 l7 -9 M-4 -38 l8 -10', 'sv-faint');

/* ---------- con vật (neo: đáy, giữa) ---------- */
P.cat = o => {
  if (o.pose === 'lie'){
    return pa('M-24 0 q6 -16 24 -16 q18 0 24 16 z', 'sv-fill')
      + ci(-24, -12, 9) + pa('M-31 -19 l3 -8 l6 6 M-17 -19 l3 -8 l4 7')
      + pa('M24 -8 q14 -2 12 -16');
  }
  return pa('M-14 0 q-2 -26 14 -26 q16 0 14 26 z', 'sv-fill')
    + ci(0, -36, 11) + pa('M-9 -43 l0 -10 l8 5 M9 -43 l0 -10 l-8 5')
    + pa('M14 -4 q16 0 14 -20');
};
P.dog = () => el(-2, -20, 22, 11, 'sv-fill')
  + ci(22, -31, 10, 'sv-fill') + pa('M30 -31 l11 3 l-11 4 z', 'sv-fill')
  + pa('M15 -38 l-3 -11 l9 5 z', 'sv-fill')
  + ln(-16, -10, -16, 0) + ln(-6, -10, -6, 0) + ln(8, -10, 8, 0) + ln(17, -12, 17, 0)
  + pa('M-23 -24 q-11 -5 -8 -17') + ci(25, -33, 1.7, 'sv-accent');
P.bird = () => el(0, -15, 16, 10, 'sv-fill')
  + ci(14, -26, 7, 'sv-fill') + pa('M21 -26 l9 3 l-9 3 z', 'sv-fill')
  + pa('M-15 -17 l-13 -7 l2 11 z', 'sv-fill') + pa('M-3 -18 q10 -5 16 3')
  + ci(15, -28, 1.7, 'sv-accent') + ln(-3, -5, -3, 0) + ln(5, -5, 5, 0);
P.fish = () => el(0, -8, 16, 9, 'sv-fill') + pa('M16 -8 l12 -8 v16 z') + ci(-7, -10, 2, 'sv-accent');

/* ---------- đồ vật nhỏ (neo: đáy, giữa) ---------- */
P.cup = () => pa('M-10 -22 h20 l-3 22 h-14 z', 'sv-fill') + pa('M10 -18 q10 2 8 10 q-2 6 -8 6');
P.glass = () => pa('M-8 -26 h16 l-3 26 h-10 z', 'sv-fill');
P.bottle = () => pa('M-8 -30 h16 v30 h-16 z', 'sv-fill') + rc(-4, -42, 8, 12, 1);
P.plate = () => el(0, -7, 25, 10, 'sv-fill') + el(0, -7, 15, 5.5);
P.bowl = () => pa('M-20 -21 q3 21 20 21 q17 0 20 -21 z', 'sv-fill') + ln(-20, -21, 20, -21);
P.apple = () => ci(0, -13, 13, 'sv-fill') + ln(0, -26, 0, -31) + pa('M0 -29 q9 -5 12 2 q-8 4 -12 -2 z', 'sv-fill');
P.banana = () => pa('M-17 -3 Q-14 -32 6 -34 Q20 -35 22 -24 Q14 -23 9 -18 Q0 -9 -10 -3 Z', 'sv-fill') + ln(22, -24, 26, -25);
P.bread = () => pa('M-18 0 q0 -20 18 -20 q18 0 18 20 z', 'sv-fill') + ln(-8, -18, -8, 0) + ln(8, -18, 8, 0);
P.cake = () => rc(-16, -18, 32, 18, 2, 'sv-fill') + ln(-16, -10, 16, -10) + ln(0, -26, 0, -18) + ci(0, -28, 2.4, 'sv-accent');
P.book = o => o.open
  ? pa('M0 -2 q-20 -12 -22 -2 V-24 q2 -10 22 2 q20 -12 22 -2 V-2 q-2 -10 -22 2 z', 'sv-fill') + ln(0, -2, 0, -22)
  : rc(-16, -22, 32, 22, 1.5, 'sv-fill') + ln(-11, -22, -11, 0);
P.bag = () => pa('M-16 -20 h32 l3 20 h-38 z', 'sv-fill') + pa('M-8 -20 q8 -16 16 0');
P.umbrella = o => o.open
  ? pa('M-24 -18 q24 -26 48 0 z', 'sv-fill') + ln(0, -18, 0, 0) + pa('M0 0 q8 0 8 -6')
  : pa('M-4 -34 h8 v34 h-8 z', 'sv-fill') + pa('M0 0 q7 0 7 -6') + ln(0, -40, 0, -34);
P.phone = () => rc(-9, -18, 18, 18, 2.5, 'sv-fill') + ln(-5, -15, 5, -15);
P.key = () => ci(-10, -8, 6) + ln(-4, -8, 12, -8) + ln(8, -8, 8, -3) + ln(12, -8, 12, -4);
P.shoe = () => pa('M-17 0 V-17 q0 -8 8 -8 q6 0 7 7 l2 9 l13 4 q8 2 8 9 V0 z', 'sv-fill')
  + ln(-17, -5, 21, -5) + pa('M-17 -25 q8 4 15 1') + ln(-12, -19, -5, -16) + ln(-11, -14, -3, -11);
P.hat = () => el(0, -12, 18, 4.5, 'sv-fill') + pa('M-10 -13 q0 -17 10 -17 q10 0 10 17 z', 'sv-fill') + ln(-10, -16, 10, -16);
P.glasses = () => ci(-9, -8, 7) + ci(9, -8, 7) + ln(-2, -8, 2, -8);
P.box = o => { const w = o.w || 30; return rc(-w / 2, -w, w, w, 2, 'sv-fill') + ln(-w / 2, -w * 0.65, w / 2, -w * 0.65); };
P.basket = () => pa('M-19 -19 l4 19 h30 l4 -19 z', 'sv-fill') + ln(-16, -11, 16, -11) + pa('M-13 -19 q13 -21 26 0');
P.flower = () => ln(0, 0, 0, -30)
  + el(0, -48, 7, 10, 'sv-fill') + el(0, -32, 7, 10, 'sv-fill')
  + el(-10, -40, 10, 7, 'sv-fill') + el(10, -40, 10, 7, 'sv-fill')
  + ci(0, -40, 5, 'sv-accent') + pa('M0 -16 q-12 -3 -13 -12');
P.money = () => rc(-18, -12, 36, 12, 1.5, 'sv-fill') + ci(0, -6, 4);
P.ball = () => ci(0, -13, 13, 'sv-fill') + el(0, -13, 5, 13) + ln(-13, -13, 13, -13);
P.bicycle = () => ci(-20, -12, 12) + ci(20, -12, 12) + pa('M-20 -12 l10 -18 h20 l10 18') + pa('M-10 -30 h-8') + ln(10, -30, 16, -22);

/* ---------- trên cao (neo: tâm) ---------- */
P.clock = o => {
  const r = o.r || 32, t = String(o.time || '12:00').split(':');
  const hh = (+t[0] || 0) % 12, mm = +t[1] || 0;
  const ah = (hh * 30 + mm * 0.5 - 90) * Math.PI / 180, am = (mm * 6 - 90) * Math.PI / 180;
  let s = ci(0, 0, r, 'sv-fill') + ci(0, 0, 2.4, 'sv-accent');
  for (let i = 0; i < 12; i++){
    const a = (i * 30 - 90) * Math.PI / 180, o1 = i % 3 === 0 ? r - 7 : r - 4;
    s += ln(Math.cos(a) * o1, Math.sin(a) * o1, Math.cos(a) * (r - 2), Math.sin(a) * (r - 2), i % 3 === 0 ? '' : 'sv-faint');
  }
  s += ln(0, 0, Math.cos(ah) * r * 0.5, Math.sin(ah) * r * 0.5);
  s += ln(0, 0, Math.cos(am) * r * 0.78, Math.sin(am) * r * 0.78);
  return s;
};
P.sun = o => {
  const r = o.r || 16;
  let s = ci(0, 0, r);
  for (let i = 0; i < 8; i++){ const a = i * Math.PI / 4; s += ln(Math.cos(a) * (r + 5), Math.sin(a) * (r + 5), Math.cos(a) * (r + 11), Math.sin(a) * (r + 11)); }
  return s;
};
P.moon = () => pa('M-2 -14 a14 14 0 1 0 10 25 a11 11 0 1 1 -10 -25');
P.cloud = o => {
  const w = o.w || 62;
  return pa(`M${n2(-w / 2)} 8 q-6 -16 10 -17 q2 -16 18 -13 q12 -9 20 4 q14 -1 12 14 q0 8 -10 12 z`, 'sv-fill');
};
P.rain = o => {
  const nn = o.n || 5; let s = '';
  for (let i = 0; i < nn; i++){ const x = -22 + i * 11; s += ln(x, 0, x - 4, 13, 'sv-faint'); }
  return s;
};
P.snowfall = o => {
  const nn = o.n || 6; let s = '';
  for (let i = 0; i < nn; i++) s += ci(-24 + i * 10, (i % 3) * 9, 2.6, 'sv-faint');
  return s;
};

/* ---------- nhãn số / giá (neo: tâm) ---------- */
P.tag = o => rc(-20, -12, 40, 24, 3, 'sv-fill')
  + `<text class="sv-text" x="0" y="5" text-anchor="middle">${String(o.text || '').replace(/[<&>]/g, '')}</text>`;

/* ============================================================
   GHÉP TRANH
   ============================================================ */
function part(it){
  const f = P[it.p];
  if (!f) return '';
  const inner = f(it) || '';
  const s = it.s || 1, fx = it.flip ? -1 : 1;
  const tr = `translate(${n2(it.x || 0)},${n2(it.y || 0)})`
    + (s !== 1 || fx !== 1 ? ` scale(${n2(s * fx)},${n2(s)})` : '');
  return `<g transform="${tr}">${inner}</g>`;
}

/** Bản ghi tranh -> chuỗi SVG hoàn chỉnh. */
function render(spec, opts){
  spec = spec || {};
  opts = opts || {};
  const bg = (BG[spec.bg] || BG.plain)();
  const items = (spec.items || []).map(it => {
    if (!it.rep || it.rep < 2) return part(it);
    const gap = it.gap || 28, start = -(it.rep - 1) * gap / 2;
    let out = '';
    for (let i = 0; i < it.rep; i++) out += part(Object.assign({}, it, { x: (it.x || 0) + start + i * gap, rep: 0 }));
    return out;
  }).join('');
  const label = opts.label ? ` role="img" aria-label="${String(opts.label).replace(/"/g, '&quot;')}"` : ' role="img" aria-label="Tranh của câu hỏi"';
  return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet"`
    + ` fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"${label}>`
    + bg + items + '</svg>';
}

function partNames(){ return Object.keys(P).sort(); }
function bgNames(){ return Object.keys(BG); }

return { render, partNames, bgNames, W, H, FLOOR };
})();

if (typeof window !== 'undefined') window.SCENE = SCENE;
if (typeof module !== 'undefined' && module.exports) module.exports = { SCENE };
