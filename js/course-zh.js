/* ============================================================
   LangLab — Khoá tiếng Trung (中文)
   ------------------------------------------------------------
   Khung chương trình bám theo bộ « Giáo trình chuẩn HSK »
   (HSK Standard Course, 标准教程). Tên bài và chủ điểm ngữ pháp
   dùng làm KHUNG; toàn bộ từ vựng, câu ví dụ và hội thoại trong
   tệp này do LangLab tự biên soạn.

   Thứ tự nét chữ Hán dùng dữ liệu mở Make Me a Hanzi qua thư viện
   Hanzi Writer (xem js/hanzi-data-zh.js và phần ghi công ở trang
   Giới thiệu).
   ============================================================ */

/* ---------- 8 nét cơ bản (基本笔画) ---------- */
const STROKES_ZH = [
  { stroke:'㇐', name:'横', pinyin:'héng', hv:'hoạnh', vi:'nét ngang', ex:'一', desc:'Kéo ngang từ trái sang phải, hơi nhích lên.' },
  { stroke:'㇑', name:'竖', pinyin:'shù',  hv:'thụ',  vi:'nét sổ (dọc)', ex:'十', desc:'Kéo thẳng từ trên xuống dưới.' },
  { stroke:'㇓', name:'撇', pinyin:'piě',  hv:'phiệt', vi:'nét phẩy', ex:'人', desc:'Vuốt chéo từ phải-trên xuống trái-dưới, nhỏ dần.' },
  { stroke:'㇏', name:'捺', pinyin:'nà',   hv:'nại',  vi:'nét mác', ex:'八', desc:'Vuốt chéo từ trái-trên xuống phải-dưới, cuối nhấn nặng.' },
  { stroke:'㇔', name:'点', pinyin:'diǎn', hv:'điểm', vi:'nét chấm', ex:'主', desc:'Chấm nhỏ, nhấn từ nhẹ tới nặng.' },
  { stroke:'㇀', name:'提', pinyin:'tí',   hv:'đề',   vi:'nét hất', ex:'冰', desc:'Hất lên từ trái-dưới sang phải-trên.' },
  { stroke:'㇕', name:'折', pinyin:'zhé',  hv:'chiết', vi:'nét gập', ex:'口', desc:'Đổi hướng gập góc trong một nét liền (ngang rồi gập xuống).' },
  { stroke:'㇖', name:'钩', pinyin:'gōu',  hv:'câu',  vi:'nét móc', ex:'小', desc:'Cuối nét hất ngược lại thành móc nhỏ.' }
];

/* ---------- Bộ thủ thường gặp (常用部首) ---------- */
const RADICALS_ZH = [
  { rad:'人', alt:'亻', pinyin:'rén', hv:'nhân', vi:'người', ex:['你','他','们'] },
  { rad:'口', pinyin:'kǒu', hv:'khẩu', vi:'miệng, cửa', ex:['吗','呢','叫','名'] },
  { rad:'女', pinyin:'nǚ', hv:'nữ', vi:'nữ, con gái', ex:['她','好','妈'] },
  { rad:'心', alt:'忄', pinyin:'xīn', hv:'tâm', vi:'tim, tâm', ex:['想','您','忙'] },
  { rad:'手', alt:'扌', pinyin:'shǒu', hv:'thủ', vi:'tay', ex:['打','找','拿'] },
  { rad:'水', alt:'氵', pinyin:'shuǐ', hv:'thuỷ', vi:'nước', ex:['汉','没','汽'] },
  { rad:'木', pinyin:'mù', hv:'mộc', vi:'cây, gỗ', ex:['样','杯','校'] },
  { rad:'日', pinyin:'rì', hv:'nhật', vi:'mặt trời, ngày', ex:['明','时','星'] },
  { rad:'月', pinyin:'yuè', hv:'nguyệt', vi:'mặt trăng, tháng', ex:['明','朋','服'] },
  { rad:'目', pinyin:'mù', hv:'mục', vi:'mắt', ex:['看','睡','眼'] },
  { rad:'言', alt:'讠', pinyin:'yán', hv:'ngôn', vi:'lời nói', ex:['语','请','谁','说'] },
  { rad:'金', alt:'钅', pinyin:'jīn', hv:'kim', vi:'kim loại, vàng', ex:['钱','错','钟'] },
  { rad:'土', pinyin:'tǔ', hv:'thổ', vi:'đất', ex:['在','坐','块'] },
  { rad:'大', pinyin:'dà', hv:'đại', vi:'to, lớn', ex:['天','太','头'] },
  { rad:'小', pinyin:'xiǎo', hv:'tiểu', vi:'nhỏ', ex:['少','尖'] },
  { rad:'火', alt:'灬', pinyin:'huǒ', hv:'hoả', vi:'lửa', ex:['热','点','烧'] },
  { rad:'力', pinyin:'lì', hv:'lực', vi:'sức', ex:['男','加','动'] },
  { rad:'刀', alt:'刂', pinyin:'dāo', hv:'đao', vi:'dao', ex:['分','别','到'] },
  { rad:'门', pinyin:'mén', hv:'môn', vi:'cửa', ex:['们','问','间'] },
  { rad:'马', pinyin:'mǎ', hv:'mã', vi:'ngựa', ex:['吗','妈','骂'] },
  { rad:'车', pinyin:'chē', hv:'xa', vi:'xe', ex:['转','轻','较'] },
  { rad:'米', pinyin:'mǐ', hv:'mễ', vi:'gạo', ex:['料','粉','糖'] },
  { rad:'竹', alt:'⺮', pinyin:'zhú', hv:'trúc', vi:'tre', ex:['笔','第','答'] },
  { rad:'王', pinyin:'wáng', hv:'vương', vi:'vua, ngọc', ex:['现','玩','球'] },
  { rad:'衣', alt:'衤', pinyin:'yī', hv:'y', vi:'áo, quần áo', ex:['服','初','被'] },
  { rad:'食', alt:'饣', pinyin:'shí', hv:'thực', vi:'ăn', ex:['饭','饿','馆'] },
  { rad:'走', pinyin:'zǒu', hv:'tẩu', vi:'đi, chạy', ex:['起','越','超'] },
  { rad:'足', alt:'⻊', pinyin:'zú', hv:'túc', vi:'chân', ex:['跑','跟','路'] }
];

/* ---------- Pinyin & thanh điệu ---------- */
const PINYIN_ZH = {
  tones: [
    { no:1, mark:'ˉ', ex:'mā', hz:'妈', vi:'mẹ',   name:'Thanh 1 — ngang cao', desc:'Cao và đều, giữ nguyên độ cao như hát một nốt.' },
    { no:2, mark:'ˊ', ex:'má', hz:'麻', vi:'gai/tê', name:'Thanh 2 — lên',      desc:'Đi lên như khi hỏi lại “Hả?”. Giống thanh sắc.' },
    { no:3, mark:'ˇ', ex:'mǎ', hz:'马', vi:'ngựa',  name:'Thanh 3 — xuống rồi lên', desc:'Hạ thấp xuống rồi hất lên. Hơi giống thanh hỏi.' },
    { no:4, mark:'ˋ', ex:'mà', hz:'骂', vi:'mắng',  name:'Thanh 4 — xuống mạnh', desc:'Đổ dốc xuống dứt khoát. Giống thanh huyền + nặng.' },
    { no:0, mark:'·', ex:'ma', hz:'吗', vi:'(trợ từ)', name:'Thanh nhẹ (khinh thanh)', desc:'Đọc nhẹ, ngắn, không nhấn — thường ở âm tiết cuối.' }
  ],
  initials: 'b p m f  d t n l  g k h  j q x  zh ch sh r  z c s'.split(/\s+/).filter(Boolean),
  finals:   'a o e i u ü  ai ei ao ou  an en ang eng ong  ia ie iao iou ian in iang ing  ua uo uai uei uan un uang ueng  üe üan ün  er'.split(/\s+/).filter(Boolean),
  notes: [
    'Mỗi âm tiết = phụ âm đầu (声母) + vần (韵母) + thanh điệu. Ví dụ: h + ǎo → hǎo.',
    'Thanh điệu đặt trên nguyên âm chính: a > o = e > i = u (chữ nào đứng trước theo thứ tự này thì mang dấu).',
    'Hai thanh 3 đứng liền nhau: thanh 3 đầu đọc thành thanh 2 (你好 nǐ hǎo → “ní hǎo”).',
    '不 bù trước thanh 4 đọc thành bú (不是 → bú shì); 一 yī đổi thanh theo chữ sau.'
  ]
};

/* ---------- Khoá HSK ---------- */
const COURSE_ZH = {
  code: 'zh',
  name: 'Tiếng Trung',
  nativeName: '中文',
  flag: '中',
  levels: [
    { id:'hsk1', zh:'HSK 1', vi:'HSK 1 · Sơ cấp', lessons:15, status:'active'  },
    { id:'hsk2', zh:'HSK 2', vi:'HSK 2',           lessons:15, status:'planned' },
    { id:'hsk3', zh:'HSK 3', vi:'HSK 3 · Trung cấp', lessons:20, status:'planned' },
    { id:'hsk4', zh:'HSK 4', vi:'HSK 4',           lessons:20, status:'planned' },
    { id:'hsk5', zh:'HSK 5', vi:'HSK 5 · Cao cấp', lessons:36, status:'planned' }
  ],

  lessons: [
    {
      no:1, zh:'你好', pinyin:'Nǐ hǎo', vi:'Xin chào',
      skill:'Chào hỏi cơ bản và làm quen với thanh điệu',
      grammar:[
        { form:'你好！', vi:'Xin chào!',
          note:'Câu chào thông dụng nhất, dùng được với mọi người, mọi lúc. 你 (bạn) + 好 (tốt).',
          ex:{ zh:'你好！', pinyin:'Nǐ hǎo!', vi:'Xin chào!' } },
        { form:'您 + 好', vi:'chào (kính trọng)',
          note:'您 nín là cách gọi “bạn/ngài” lịch sự, dùng với người lớn tuổi, thầy cô, khách hàng.',
          ex:{ zh:'老师，您好！', pinyin:'Lǎoshī, nín hǎo!', vi:'Thưa thầy/cô, em chào ạ!' } }
      ],
      vocab:[
        { zh:'你', pinyin:'nǐ', hv:'nễ', vi:'bạn, anh, chị', pos:'đại từ' },
        { zh:'好', pinyin:'hǎo', hv:'hảo', vi:'tốt, khỏe', pos:'tính từ' },
        { zh:'你好', pinyin:'nǐ hǎo', hv:'nễ hảo', vi:'xin chào', pos:'chào hỏi' },
        { zh:'您', pinyin:'nín', hv:'nâm', vi:'ngài, bạn (kính)', pos:'đại từ' },
        { zh:'您好', pinyin:'nín hǎo', hv:'nâm hảo', vi:'chào (kính trọng)', pos:'chào hỏi' },
        { zh:'我', pinyin:'wǒ', hv:'ngã', vi:'tôi, tớ', pos:'đại từ' },
        { zh:'老师', pinyin:'lǎoshī', hv:'lão sư', vi:'thầy/cô giáo', pos:'danh từ' },
        { zh:'们', pinyin:'men', hv:'môn', vi:'(hậu tố số nhiều)', pos:'hậu tố' },
        { zh:'你们', pinyin:'nǐmen', hv:'nễ môn', vi:'các bạn', pos:'đại từ' },
        { zh:'再见', pinyin:'zàijiàn', hv:'tái kiến', vi:'tạm biệt', pos:'chào hỏi' }
      ],
      dialogue:[
        { sp:'A', zh:'你好！', pinyin:'Nǐ hǎo!', vi:'Xin chào!' },
        { sp:'B', zh:'你好！', pinyin:'Nǐ hǎo!', vi:'Xin chào!' },
        { sp:'A', zh:'老师，您好！', pinyin:'Lǎoshī, nín hǎo!', vi:'Thưa cô, em chào ạ!' },
        { sp:'B', zh:'你们好！再见！', pinyin:'Nǐmen hǎo! Zàijiàn!', vi:'Chào các em! Tạm biệt!' }
      ]
    },

    {
      no:2, zh:'谢谢你', pinyin:'Xièxie nǐ', vi:'Cảm ơn bạn',
      skill:'Cảm ơn, xin lỗi và câu hỏi với 吗',
      grammar:[
        { form:'S + 吗 ?', vi:'câu hỏi “có… không?”',
          note:'Thêm 吗 ma vào cuối câu khẳng định là thành câu hỏi Có/Không. 你好吗？= Bạn khỏe không?',
          ex:{ zh:'你好吗？', pinyin:'Nǐ hǎo ma?', vi:'Bạn khỏe không?' } },
        { form:'也 / 很', vi:'“cũng” / “rất”',
          note:'也 yě = cũng (đặt trước động/tính từ); 很 hěn = rất. Tính từ thường đi kèm 很: 我很好.',
          ex:{ zh:'我也很好。', pinyin:'Wǒ yě hěn hǎo.', vi:'Tôi cũng rất khỏe.' } }
      ],
      vocab:[
        { zh:'谢谢', pinyin:'xièxie', hv:'tạ tạ', vi:'cảm ơn', pos:'động từ' },
        { zh:'不', pinyin:'bù', hv:'bất', vi:'không', pos:'phó từ' },
        { zh:'客气', pinyin:'kèqi', hv:'khách khí', vi:'khách sáo', pos:'tính từ' },
        { zh:'不客气', pinyin:'bú kèqi', hv:'bất khách khí', vi:'đừng khách sáo, không có gì', pos:'thành ngữ' },
        { zh:'吗', pinyin:'ma', hv:'ma', vi:'(trợ từ nghi vấn)', pos:'trợ từ' },
        { zh:'很', pinyin:'hěn', hv:'ngận', vi:'rất', pos:'phó từ' },
        { zh:'也', pinyin:'yě', hv:'dã', vi:'cũng', pos:'phó từ' },
        { zh:'我们', pinyin:'wǒmen', hv:'ngã môn', vi:'chúng tôi', pos:'đại từ' },
        { zh:'对不起', pinyin:'duìbuqǐ', hv:'đối bất khởi', vi:'xin lỗi', pos:'thành ngữ' },
        { zh:'没关系', pinyin:'méi guānxi', hv:'một quan hệ', vi:'không sao', pos:'thành ngữ' }
      ],
      dialogue:[
        { sp:'A', zh:'你好吗？', pinyin:'Nǐ hǎo ma?', vi:'Bạn khỏe không?' },
        { sp:'B', zh:'我很好，谢谢！你呢？', pinyin:'Wǒ hěn hǎo, xièxie! Nǐ ne?', vi:'Tôi rất khỏe, cảm ơn! Còn bạn?' },
        { sp:'A', zh:'我也很好。', pinyin:'Wǒ yě hěn hǎo.', vi:'Tôi cũng rất khỏe.' },
        { sp:'B', zh:'谢谢你！', pinyin:'Xièxie nǐ!', vi:'Cảm ơn bạn!' },
        { sp:'A', zh:'不客气。', pinyin:'Bú kèqi.', vi:'Không có gì.' }
      ]
    },

    {
      no:3, zh:'你叫什么名字', pinyin:'Nǐ jiào shénme míngzi', vi:'Bạn tên là gì',
      skill:'Hỏi tên, làm quen',
      grammar:[
        { form:'S + 叫 + tên', vi:'“tên là…”',
          note:'叫 jiào = gọi/tên là. Hỏi tên: 你叫什么名字？ (Bạn tên là gì?).',
          ex:{ zh:'我叫小明。', pinyin:'Wǒ jiào Xiǎomíng.', vi:'Tôi tên là Tiểu Minh.' } },
        { form:'什么 + N', vi:'“… gì?”',
          note:'什么 shénme = cái gì. Đặt trực tiếp vào chỗ cần hỏi: 什么名字 (tên gì), 什么 (cái gì).',
          ex:{ zh:'这是什么？', pinyin:'Zhè shì shénme?', vi:'Đây là cái gì?' } }
      ],
      vocab:[
        { zh:'叫', pinyin:'jiào', hv:'khiếu', vi:'gọi, tên là', pos:'động từ' },
        { zh:'什么', pinyin:'shénme', hv:'thập ma', vi:'cái gì, gì', pos:'đại từ nghi vấn' },
        { zh:'名字', pinyin:'míngzi', hv:'danh tự', vi:'tên', pos:'danh từ' },
        { zh:'请问', pinyin:'qǐngwèn', hv:'thỉnh vấn', vi:'xin hỏi', pos:'thành ngữ' },
        { zh:'认识', pinyin:'rènshi', hv:'nhận thức', vi:'quen biết', pos:'động từ' },
        { zh:'高兴', pinyin:'gāoxìng', hv:'cao hứng', vi:'vui mừng', pos:'tính từ' },
        { zh:'呢', pinyin:'ne', hv:'ni', vi:'(trợ từ hỏi lại)', pos:'trợ từ' },
        { zh:'他', pinyin:'tā', hv:'tha', vi:'anh ấy', pos:'đại từ' },
        { zh:'她', pinyin:'tā', hv:'tha', vi:'cô ấy', pos:'đại từ' },
        { zh:'朋友', pinyin:'péngyou', hv:'bằng hữu', vi:'bạn bè', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你好！请问你叫什么名字？', pinyin:'Nǐ hǎo! Qǐngwèn nǐ jiào shénme míngzi?', vi:'Chào bạn! Cho hỏi bạn tên là gì?' },
        { sp:'B', zh:'我叫小明。你呢？', pinyin:'Wǒ jiào Xiǎomíng. Nǐ ne?', vi:'Mình tên Tiểu Minh. Còn bạn?' },
        { sp:'A', zh:'我叫阿英。认识你很高兴！', pinyin:'Wǒ jiào Ā Yīng. Rènshi nǐ hěn gāoxìng!', vi:'Mình tên A Anh. Rất vui được quen bạn!' },
        { sp:'B', zh:'我也很高兴。', pinyin:'Wǒ yě hěn gāoxìng.', vi:'Mình cũng rất vui.' }
      ]
    },

    {
      no:4, zh:'她是我的汉语老师', pinyin:'Tā shì wǒ de Hànyǔ lǎoshī', vi:'Cô ấy là cô giáo tiếng Trung của tôi',
      skill:'Giới thiệu người khác với 是 và 的',
      grammar:[
        { form:'A + 是 + B', vi:'“A là B”',
          note:'是 shì = là (hệ từ). Phủ định: 不是 (không phải là). 她是老师 / 她不是学生.',
          ex:{ zh:'他是医生。', pinyin:'Tā shì yīshēng.', vi:'Anh ấy là bác sĩ.' } },
        { form:'N₁ + 的 + N₂', vi:'“… của …” (sở hữu)',
          note:'的 de nối để chỉ sở hữu/quan hệ: 我的老师 (thầy của tôi), 我的朋友 (bạn của tôi).',
          ex:{ zh:'她是我的朋友。', pinyin:'Tā shì wǒ de péngyou.', vi:'Cô ấy là bạn của tôi.' } }
      ],
      vocab:[
        { zh:'是', pinyin:'shì', hv:'thị', vi:'là', pos:'động từ' },
        { zh:'的', pinyin:'de', hv:'đích', vi:'(trợ từ sở hữu)', pos:'trợ từ' },
        { zh:'汉语', pinyin:'Hànyǔ', hv:'hán ngữ', vi:'tiếng Trung', pos:'danh từ' },
        { zh:'谁', pinyin:'shéi', hv:'thùy', vi:'ai', pos:'đại từ nghi vấn' },
        { zh:'医生', pinyin:'yīshēng', hv:'y sinh', vi:'bác sĩ', pos:'danh từ' },
        { zh:'学生', pinyin:'xuésheng', hv:'học sinh', vi:'học sinh, sinh viên', pos:'danh từ' },
        { zh:'这', pinyin:'zhè', hv:'giá', vi:'đây, này', pos:'đại từ' },
        { zh:'那', pinyin:'nà', hv:'na', vi:'kia, đó', pos:'đại từ' },
        { zh:'中国', pinyin:'Zhōngguó', hv:'trung quốc', vi:'Trung Quốc', pos:'danh từ' },
        { zh:'人', pinyin:'rén', hv:'nhân', vi:'người', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'她是谁？', pinyin:'Tā shì shéi?', vi:'Cô ấy là ai?' },
        { sp:'B', zh:'她是我的汉语老师。', pinyin:'Tā shì wǒ de Hànyǔ lǎoshī.', vi:'Cô ấy là cô giáo tiếng Trung của mình.' },
        { sp:'A', zh:'她是中国人吗？', pinyin:'Tā shì Zhōngguó rén ma?', vi:'Cô ấy là người Trung Quốc à?' },
        { sp:'B', zh:'是，她是中国人。', pinyin:'Shì, tā shì Zhōngguó rén.', vi:'Đúng, cô ấy là người Trung Quốc.' }
      ]
    },

    {
      no:5, zh:'她今年几岁', pinyin:'Tā jīnnián jǐ suì', vi:'Năm nay cô bé mấy tuổi',
      skill:'Số đếm 1–10 và hỏi tuổi',
      grammar:[
        { form:'几 + lượng từ', vi:'“mấy…?” (số nhỏ)',
          note:'几 jǐ hỏi số lượng nhỏ (dưới 10). Hỏi tuổi trẻ em: 几岁？ Người lớn: 多大？',
          ex:{ zh:'你今年几岁？', pinyin:'Nǐ jīnnián jǐ suì?', vi:'Năm nay bạn mấy tuổi?' } },
        { form:'两 vs 二', vi:'“hai”',
          note:'二 èr dùng khi đếm và trong số (二十 = 20). 两 liǎng dùng trước lượng từ: 两岁, 两个.',
          ex:{ zh:'她两岁。', pinyin:'Tā liǎng suì.', vi:'Cô bé hai tuổi.' } }
      ],
      vocab:[
        { zh:'几', pinyin:'jǐ', hv:'kỷ', vi:'mấy, bao nhiêu', pos:'đại từ nghi vấn' },
        { zh:'岁', pinyin:'suì', hv:'tuế', vi:'tuổi', pos:'lượng từ' },
        { zh:'今年', pinyin:'jīnnián', hv:'kim niên', vi:'năm nay', pos:'danh từ' },
        { zh:'了', pinyin:'le', hv:'liễu', vi:'(trợ từ)', pos:'trợ từ' },
        { zh:'女儿', pinyin:'nǚ’ér', hv:'nữ nhi', vi:'con gái', pos:'danh từ' },
        { zh:'两', pinyin:'liǎng', hv:'lưỡng', vi:'hai (trước lượng từ)', pos:'số từ' },
        { zh:'一', pinyin:'yī', hv:'nhất', vi:'một (1)', pos:'số từ' },
        { zh:'二', pinyin:'èr', hv:'nhị', vi:'hai (2)', pos:'số từ' },
        { zh:'三', pinyin:'sān', hv:'tam', vi:'ba (3)', pos:'số từ' },
        { zh:'四', pinyin:'sì', hv:'tứ', vi:'bốn (4)', pos:'số từ' },
        { zh:'五', pinyin:'wǔ', hv:'ngũ', vi:'năm (5)', pos:'số từ' },
        { zh:'六', pinyin:'liù', hv:'lục', vi:'sáu (6)', pos:'số từ' },
        { zh:'七', pinyin:'qī', hv:'thất', vi:'bảy (7)', pos:'số từ' },
        { zh:'八', pinyin:'bā', hv:'bát', vi:'tám (8)', pos:'số từ' },
        { zh:'九', pinyin:'jiǔ', hv:'cửu', vi:'chín (9)', pos:'số từ' },
        { zh:'十', pinyin:'shí', hv:'thập', vi:'mười (10)', pos:'số từ' }
      ],
      dialogue:[
        { sp:'A', zh:'她是你的女儿吗？', pinyin:'Tā shì nǐ de nǚ’ér ma?', vi:'Bé là con gái bạn à?' },
        { sp:'B', zh:'是，她是我女儿。', pinyin:'Shì, tā shì wǒ nǚ’ér.', vi:'Vâng, bé là con gái mình.' },
        { sp:'A', zh:'她今年几岁？', pinyin:'Tā jīnnián jǐ suì?', vi:'Năm nay bé mấy tuổi?' },
        { sp:'B', zh:'她今年两岁了。', pinyin:'Tā jīnnián liǎng suì le.', vi:'Năm nay bé hai tuổi rồi.' }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSE_ZH, STROKES_ZH, RADICALS_ZH, PINYIN_ZH };
}
