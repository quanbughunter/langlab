/* ============================================================
   LangLab — Dữ liệu thứ tự nét viết chữ Hangul (한글 획순)
   ------------------------------------------------------------
   Mọi nét được vẽ trong khung 100×100 (đơn vị viewBox).
   Quy tắc viết chữ Hàn:  trên → dưới,  trái → phải.
   ============================================================ */

const JAMO = {
  /* ---------- 14 phụ âm cơ bản (기본 자음) ---------- */
  'ㄱ': { name:'기역', rom:'g / k', type:'consonant', group:'basic',
    tip:'Một nét liền: kéo ngang sang phải rồi gập xuống dưới.',
    strokes:['M18,24 H78 L60,80'] },
  'ㄴ': { name:'니은', rom:'n', type:'consonant', group:'basic',
    tip:'Một nét: đi xuống trước, rồi hất ngang sang phải.',
    strokes:['M26,20 V76 H80'] },
  'ㄷ': { name:'디귿', rom:'d / t', type:'consonant', group:'basic',
    tip:'Nét ngang trên trước, sau đó viết chữ ㄴ bên dưới.',
    strokes:['M22,22 H80','M22,22 V78 H80'] },
  'ㄹ': { name:'리을', rom:'r / l', type:'consonant', group:'basic',
    tip:'ㄱ ở trên, nét ngang giữa, rồi ㄴ ở dưới. Ba nét, không viết liền một mạch.',
    strokes:['M20,20 H76 V45','M20,45 H76','M20,45 V78 H76'] },
  'ㅁ': { name:'미음', rom:'m', type:'consonant', group:'basic',
    tip:'Cột trái trước, sau đó nét ngang trên nối xuống cột phải, cuối cùng là đáy.',
    strokes:['M24,20 V78','M24,20 H76 V78','M24,78 H76'] },
  'ㅂ': { name:'비읍', rom:'b / p', type:'consonant', group:'basic',
    tip:'Hai cột dọc trước (trái rồi phải), sau đó nét ngang giữa và nét đáy.',
    strokes:['M24,18 V80','M76,18 V80','M24,50 H76','M24,80 H76'] },
  'ㅅ': { name:'시옷', rom:'s', type:'consonant', group:'basic',
    tip:'Nét trái đi từ đỉnh xuống, nét phải bắt đầu từ khoảng giữa nét trái.',
    strokes:['M52,20 L24,80','M48,42 L78,80'] },
  'ㅇ': { name:'이응', rom:'ㅡ / ng', type:'consonant', group:'basic',
    tip:'Một vòng tròn khép kín, bắt đầu từ đỉnh và đi ngược chiều kim đồng hồ.',
    strokes:['M50,20 A30,30 0 1 0 50,80 A30,30 0 1 0 50,20'] },
  'ㅈ': { name:'지읒', rom:'j', type:'consonant', group:'basic',
    tip:'Nét đầu gồm ngang trên gập xuống trái, nét sau hất xuống phải.',
    strokes:['M20,26 H76 L26,80','M50,44 L78,80'] },
  'ㅊ': { name:'치읓', rom:'ch', type:'consonant', group:'basic',
    tip:'Chấm mũ trên cùng, rồi viết như ㅈ.',
    strokes:['M50,10 V22','M18,34 H78 L26,84','M50,52 L80,84'] },
  'ㅋ': { name:'키읔', rom:'k', type:'consonant', group:'basic',
    tip:'Viết ㄱ trước, rồi thêm một gạch ngang ở giữa.',
    strokes:['M18,22 H78 L60,80','M26,50 H70'] },
  'ㅌ': { name:'티읕', rom:'t', type:'consonant', group:'basic',
    tip:'Ngang trên, ngang giữa, cuối cùng là ㄴ ôm bên ngoài.',
    strokes:['M22,20 H78','M22,49 H78','M22,20 V78 H78'] },
  'ㅍ': { name:'피읖', rom:'p', type:'consonant', group:'basic',
    tip:'Ngang trên, hai cột dọc, rồi ngang dưới.',
    strokes:['M16,26 H84','M34,26 V74','M66,26 V74','M16,74 H84'] },
  'ㅎ': { name:'히읗', rom:'h', type:'consonant', group:'basic',
    tip:'Chấm mũ, gạch ngang, rồi vòng tròn bên dưới.',
    strokes:['M50,8 V20','M24,30 H76','M50,42 A21,21 0 1 0 50,84 A21,21 0 1 0 50,42'] },

  /* ---------- 5 phụ âm căng (쌍자음) ---------- */
  'ㄲ': { name:'쌍기역', rom:'kk', type:'consonant', group:'double',
    tip:'Viết ㄱ hai lần, chữ trái trước rồi tới chữ phải.',
    strokes:['M8,26 H44 L32,78','M54,26 H90 L78,78'] },
  'ㄸ': { name:'쌍디귿', rom:'tt', type:'consonant', group:'double',
    tip:'Hoàn tất trọn vẹn chữ ㄷ bên trái rồi mới sang chữ bên phải.',
    strokes:['M8,24 H44','M8,24 V76 H44','M56,24 H92','M56,24 V76 H92'] },
  'ㅃ': { name:'쌍비읍', rom:'pp', type:'consonant', group:'double',
    tip:'Tám nét: viết xong hẳn ㅂ bên trái rồi mới viết ㅂ bên phải.',
    strokes:['M8,20 V80','M42,20 V80','M8,50 H42','M8,80 H42',
             'M58,20 V80','M92,20 V80','M58,50 H92','M58,80 H92'] },
  'ㅆ': { name:'쌍시옷', rom:'ss', type:'consonant', group:'double',
    tip:'Hai chữ ㅅ đứng cạnh nhau, viết lần lượt từ trái sang phải.',
    strokes:['M28,22 L8,78','M25,40 L46,78','M74,22 L54,78','M71,40 L92,78'] },
  'ㅉ': { name:'쌍지읒', rom:'jj', type:'consonant', group:'double',
    tip:'Hai chữ ㅈ, mỗi chữ hai nét, viết hết chữ trái rồi sang chữ phải.',
    strokes:['M6,28 H42 L12,78','M28,44 L46,78','M56,28 H92 L62,78','M78,44 L96,78'] },

  /* ---------- 10 nguyên âm cơ bản (기본 모음) ---------- */
  'ㅏ': { name:'아', rom:'a', type:'vowel', group:'basic', shape:'vertical',
    tip:'Cột dọc trước, sau đó gạch ngắn chìa sang phải.',
    strokes:['M44,12 V88','M44,50 H80'] },
  'ㅑ': { name:'야', rom:'ya', type:'vowel', group:'basic', shape:'vertical',
    tip:'Cột dọc, rồi hai gạch ngắn — trên trước, dưới sau.',
    strokes:['M44,12 V88','M44,36 H80','M44,64 H80'] },
  'ㅓ': { name:'어', rom:'eo', type:'vowel', group:'basic', shape:'vertical',
    tip:'Gạch ngắn bên trái trước, rồi mới tới cột dọc.',
    strokes:['M20,50 H56','M56,12 V88'] },
  'ㅕ': { name:'여', rom:'yeo', type:'vowel', group:'basic', shape:'vertical',
    tip:'Hai gạch ngắn (trên trước), sau đó là cột dọc.',
    strokes:['M20,36 H56','M20,64 H56','M56,12 V88'] },
  'ㅗ': { name:'오', rom:'o', type:'vowel', group:'basic', shape:'horizontal',
    tip:'Nét dọc ngắn ở trên trước, rồi nét ngang dài bên dưới.',
    strokes:['M50,20 V54','M12,54 H88'] },
  'ㅛ': { name:'요', rom:'yo', type:'vowel', group:'basic', shape:'horizontal',
    tip:'Hai nét dọc ngắn (trái trước), rồi nét ngang dài.',
    strokes:['M34,20 V54','M66,20 V54','M12,54 H88'] },
  'ㅜ': { name:'우', rom:'u', type:'vowel', group:'basic', shape:'horizontal',
    tip:'Nét ngang dài trước, sau đó nét dọc thả xuống.',
    strokes:['M12,46 H88','M50,46 V80'] },
  'ㅠ': { name:'유', rom:'yu', type:'vowel', group:'basic', shape:'horizontal',
    tip:'Nét ngang dài, rồi hai nét dọc thả xuống — trái trước.',
    strokes:['M12,46 H88','M34,46 V80','M66,46 V80'] },
  'ㅡ': { name:'으', rom:'eu', type:'vowel', group:'basic', shape:'horizontal',
    tip:'Một nét ngang duy nhất, kéo từ trái sang phải.',
    strokes:['M12,50 H88'] },
  'ㅣ': { name:'이', rom:'i', type:'vowel', group:'basic', shape:'vertical',
    tip:'Một nét dọc duy nhất, kéo từ trên xuống dưới.',
    strokes:['M50,12 V88'] },

  /* ---------- 11 nguyên âm ghép (복합 모음) ---------- */
  'ㅐ': { name:'애', rom:'ae', type:'vowel', group:'compound', shape:'vertical',
    tip:'ㅏ rồi thêm ㅣ. Luôn hoàn thành ㅏ trước.',
    strokes:['M36,12 V88','M36,50 H64','M76,12 V88'] },
  'ㅒ': { name:'얘', rom:'yae', type:'vowel', group:'compound', shape:'vertical',
    tip:'ㅑ rồi thêm ㅣ ngoài cùng bên phải.',
    strokes:['M32,12 V88','M32,36 H60','M32,64 H60','M76,12 V88'] },
  'ㅔ': { name:'에', rom:'e', type:'vowel', group:'compound', shape:'vertical',
    tip:'ㅓ rồi thêm ㅣ. Gạch ngắn vẫn viết đầu tiên.',
    strokes:['M18,50 H46','M46,12 V88','M78,12 V88'] },
  'ㅖ': { name:'예', rom:'ye', type:'vowel', group:'compound', shape:'vertical',
    tip:'ㅕ rồi thêm ㅣ ngoài cùng bên phải.',
    strokes:['M14,36 H42','M14,64 H42','M42,12 V88','M78,12 V88'] },
  /* Nguyên âm ghép hai phía có thêm `split`: số nét thuộc phần nằm ngang (ㅗ/ㅜ/ㅡ),
     các nét còn lại thuộc phần đứng bên phải. Nhờ vậy khi ghép vào khối chữ,
     hai phần được đặt vào hai vị trí khác nhau đúng như chữ in. */
  'ㅘ': { name:'와', rom:'wa', type:'vowel', group:'compound', shape:'mixed', split:2,
    tip:'Viết trọn ㅗ trước, rồi mới tới ㅏ bên phải.',
    strokes:['M26,22 V52','M6,52 H50','M64,12 V88','M64,50 H94'] },
  'ㅙ': { name:'왜', rom:'wae', type:'vowel', group:'compound', shape:'mixed', split:2,
    tip:'ㅗ, rồi ㅏ, rồi ㅣ — đúng thứ tự trái sang phải.',
    strokes:['M22,22 V50','M4,50 H44','M58,12 V88','M58,50 H76','M90,12 V88'] },
  'ㅚ': { name:'외', rom:'oe', type:'vowel', group:'compound', shape:'mixed', split:2,
    tip:'ㅗ rồi ㅣ.',
    strokes:['M30,22 V52','M8,52 H54','M78,12 V88'] },
  'ㅝ': { name:'워', rom:'wo', type:'vowel', group:'compound', shape:'mixed', split:2,
    tip:'Viết trọn ㅜ trước, rồi mới tới ㅓ bên phải.',
    strokes:['M4,44 H50','M26,44 V80','M54,50 H78','M78,12 V88'] },
  'ㅞ': { name:'웨', rom:'we', type:'vowel', group:'compound', shape:'mixed', split:2,
    tip:'ㅜ, rồi ㅓ, rồi ㅣ.',
    strokes:['M2,44 H44','M22,44 V80','M48,50 H68','M68,12 V88','M92,12 V88'] },
  'ㅟ': { name:'위', rom:'wi', type:'vowel', group:'compound', shape:'mixed', split:2,
    tip:'ㅜ rồi ㅣ.',
    strokes:['M4,44 H52','M28,44 V80','M78,12 V88'] },
  'ㅢ': { name:'의', rom:'ui', type:'vowel', group:'compound', shape:'mixed', split:1,
    tip:'ㅡ rồi ㅣ. Nét ngang luôn đi trước.',
    strokes:['M6,50 H62','M78,12 V88'] }
};

/* Bảng chữ cái theo thứ tự từ điển tiếng Hàn */
const JAMO_ORDER = {
  consonantBasic : ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'],
  consonantDouble: ['ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'],
  vowelBasic     : ['ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅛ','ㅜ','ㅠ','ㅡ','ㅣ'],
  vowelCompound  : ['ㅐ','ㅒ','ㅔ','ㅖ','ㅘ','ㅙ','ㅚ','ㅝ','ㅞ','ㅟ','ㅢ']
};

/* ============================================================
   Ghép âm tiết (음절 조합)
   Một âm tiết = 초성 (phụ âm đầu) + 중성 (nguyên âm) + 종성 (patchim, tuỳ chọn)
   ============================================================ */

const CHOSEONG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JUNGSEONG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const JONGSEONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

/* Patchim ghép → tách thành các chữ cái đơn để vẽ nét */
const JONG_SPLIT = {
  'ㄳ':['ㄱ','ㅅ'], 'ㄵ':['ㄴ','ㅈ'], 'ㄶ':['ㄴ','ㅎ'], 'ㄺ':['ㄹ','ㄱ'],
  'ㄻ':['ㄹ','ㅁ'], 'ㄼ':['ㄹ','ㅂ'], 'ㄽ':['ㄹ','ㅅ'], 'ㄾ':['ㄹ','ㅌ'],
  'ㄿ':['ㄹ','ㅍ'], 'ㅀ':['ㄹ','ㅎ'], 'ㅄ':['ㅂ','ㅅ']
};

function composeHangul(cho, jung, jong){
  const ci = CHOSEONG.indexOf(cho), vi = JUNGSEONG.indexOf(jung), ti = JONGSEONG.indexOf(jong || '');
  if (ci < 0 || vi < 0 || ti < 0) return '';
  return String.fromCharCode(0xAC00 + (ci * 21 + vi) * 28 + ti);
}

function decomposeHangul(ch){
  const code = ch.charCodeAt(0) - 0xAC00;
  if (code < 0 || code > 11171) return null;
  return {
    cho : CHOSEONG[Math.floor(code / 588)],
    jung: JUNGSEONG[Math.floor((code % 588) / 28)],
    jong: JONGSEONG[code % 28]
  };
}

/* Vị trí từng thành phần trong ô vuông 100×100, tuỳ hình dạng nguyên âm.
   Trả về [scaleX, scaleY, offsetX, offsetY] */
function blockLayout(jung, hasJong){
  const shape = (JAMO[jung] && JAMO[jung].shape) || 'vertical';
  if (shape === 'vertical'){          // ㅏ ㅓ ㅣ … nguyên âm đứng bên phải
    return hasJong
      ? { cho:[.52,.55, 3, 4], jung:[.44,.55, 55, 4], jong:[.86,.35, 7, 63] }
      : { cho:[.58,.86, 2, 7], jung:[.46,.86, 55, 7] };
  }
  if (shape === 'horizontal'){        // ㅗ ㅜ ㅡ … nguyên âm nằm bên dưới
    return hasJong
      ? { cho:[.56,.34, 22, 0], jung:[.90,.62, 5, 20], jong:[.80,.34, 10, 63] }
      : { cho:[.64,.46, 18, 2], jung:[.92,.82, 4, 26] };
  }
  // ㅘ ㅝ ㅢ … phần ngang xuống dưới bên trái, phần đứng dựng bên phải
  return hasJong
    ? { cho:[.42,.34, 4, 2], jungH:[.86,.34, 2, 26], jungV:[.94,.66, 4, 2], jong:[.80,.32, 10, 65] }
    : { cho:[.46,.46, 4, 4], jungH:[.88,.55, 2, 40], jungV:[1, 1, 4, 0] };
}

/* Sinh danh sách nét cho một âm tiết hoàn chỉnh.
   Mỗi phần tử: { d, part, label } — d đã được biến đổi sẵn về khung 100×100. */
function syllableStrokes(ch){
  const parts = decomposeHangul(ch);
  if (!parts) return [];
  const L = blockLayout(parts.jung, !!parts.jong);
  const out = [];

  const push = (jamo, box, part, from, to) => {
    if (!jamo || !JAMO[jamo]) return;
    const [sx, sy, ox, oy] = box;
    JAMO[jamo].strokes.slice(from || 0, to === undefined ? Infinity : to).forEach(d => out.push({
      d, part, jamo,
      transform: `translate(${ox} ${oy}) scale(${sx} ${sy})`
    }));
  };

  push(parts.cho, L.cho, 'cho');
  if (L.jungH){                              // nguyên âm ghép hai phía: tách làm hai
    const k = JAMO[parts.jung].split || 2;
    push(parts.jung, L.jungH, 'jung', 0, k);
    push(parts.jung, L.jungV, 'jung', k);
  } else {
    push(parts.jung, L.jung, 'jung');
  }
  if (parts.jong){
    const split = JONG_SPLIT[parts.jong];
    if (split){
      const [sx, sy, ox, oy] = L.jong;
      split.forEach((j, i) => push(j, [sx * .46, sy, ox + i * sx * 52, oy], 'jong'));
    } else {
      push(parts.jong, L.jong, 'jong');
    }
  }
  return out;
}
