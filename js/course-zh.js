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
    },

    {
      no:6, zh:'我会说汉语', pinyin:'Wǒ huì shuō Hànyǔ', vi:'Tôi biết nói tiếng Trung',
      skill:'Động từ năng nguyện 会 và nói về khả năng',
      grammar:[
        { form:'S + 会 + V', vi:'“biết (làm gì)” — do học mà có',
          note:'会 huì chỉ khả năng có được nhờ học. Phủ định: 不会. Vd 我会说汉语 / 我不会写汉字.',
          ex:{ zh:'我会说一点儿汉语。', pinyin:'Wǒ huì shuō yìdiǎnr Hànyǔ.', vi:'Tôi biết nói một chút tiếng Trung.' } },
        { form:'一点儿', vi:'“một chút”',
          note:'一点儿 yìdiǎnr chỉ lượng ít, đặt sau động từ hoặc trước danh từ: 会一点儿, 喝一点儿水.',
          ex:{ zh:'他会写一点儿汉字。', pinyin:'Tā huì xiě yìdiǎnr Hànzì.', vi:'Anh ấy biết viết một chút chữ Hán.' } }
      ],
      vocab:[
        { zh:'会', pinyin:'huì', hv:'hội', vi:'biết (làm gì)', pos:'động từ năng nguyện' },
        { zh:'说', pinyin:'shuō', hv:'thuyết', vi:'nói', pos:'động từ' },
        { zh:'话', pinyin:'huà', hv:'thoại', vi:'lời nói, tiếng', pos:'danh từ' },
        { zh:'一点儿', pinyin:'yìdiǎnr', hv:'nhất điểm nhi', vi:'một chút', pos:'số lượng' },
        { zh:'英语', pinyin:'Yīngyǔ', hv:'anh ngữ', vi:'tiếng Anh', pos:'danh từ' },
        { zh:'写', pinyin:'xiě', hv:'tả', vi:'viết', pos:'động từ' },
        { zh:'读', pinyin:'dú', hv:'độc', vi:'đọc', pos:'động từ' },
        { zh:'看', pinyin:'kàn', hv:'khán', vi:'xem, nhìn, đọc', pos:'động từ' },
        { zh:'听', pinyin:'tīng', hv:'thính', vi:'nghe', pos:'động từ' },
        { zh:'书', pinyin:'shū', hv:'thư', vi:'sách', pos:'danh từ' },
        { zh:'汉字', pinyin:'Hànzì', hv:'hán tự', vi:'chữ Hán', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你会说汉语吗？', pinyin:'Nǐ huì shuō Hànyǔ ma?', vi:'Bạn biết nói tiếng Trung không?' },
        { sp:'B', zh:'我会说一点儿。', pinyin:'Wǒ huì shuō yìdiǎnr.', vi:'Mình biết nói một chút.' },
        { sp:'A', zh:'你也会写汉字吗？', pinyin:'Nǐ yě huì xiě Hànzì ma?', vi:'Bạn cũng biết viết chữ Hán chứ?' },
        { sp:'B', zh:'会，我会写一点儿。', pinyin:'Huì, wǒ huì xiě yìdiǎnr.', vi:'Có, mình biết viết một chút.' }
      ]
    },

    {
      no:7, zh:'今天几号', pinyin:'Jīntiān jǐ hào', vi:'Hôm nay ngày mấy',
      skill:'Ngày, tháng, thứ trong tuần',
      grammar:[
        { form:'…月…号', vi:'ngày tháng',
          note:'Tháng dùng 月, ngày dùng 号 (khi nói) / 日 (khi viết). Hỏi: 今天几号？ → 五月八号.',
          ex:{ zh:'今天五月八号。', pinyin:'Jīntiān wǔ yuè bā hào.', vi:'Hôm nay ngày 8 tháng 5.' } },
        { form:'星期 + số', vi:'thứ trong tuần',
          note:'星期一…星期六 = thứ Hai…thứ Bảy; Chủ nhật là 星期天. Hỏi: 今天星期几？',
          ex:{ zh:'今天星期四。', pinyin:'Jīntiān xīngqīsì.', vi:'Hôm nay thứ Năm.' } }
      ],
      vocab:[
        { zh:'今天', pinyin:'jīntiān', hv:'kim thiên', vi:'hôm nay', pos:'danh từ' },
        { zh:'昨天', pinyin:'zuótiān', hv:'tạc thiên', vi:'hôm qua', pos:'danh từ' },
        { zh:'明天', pinyin:'míngtiān', hv:'minh thiên', vi:'ngày mai', pos:'danh từ' },
        { zh:'号', pinyin:'hào', hv:'hiệu', vi:'ngày (trong tháng)', pos:'danh từ' },
        { zh:'月', pinyin:'yuè', hv:'nguyệt', vi:'tháng', pos:'danh từ' },
        { zh:'星期', pinyin:'xīngqī', hv:'tinh kỳ', vi:'tuần; thứ', pos:'danh từ' },
        { zh:'星期天', pinyin:'xīngqītiān', hv:'tinh kỳ thiên', vi:'Chủ nhật', pos:'danh từ' },
        { zh:'日', pinyin:'rì', hv:'nhật', vi:'ngày', pos:'danh từ' },
        { zh:'生日', pinyin:'shēngrì', hv:'sinh nhật', vi:'sinh nhật', pos:'danh từ' },
        { zh:'去', pinyin:'qù', hv:'khứ', vi:'đi (đến)', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'今天几号？', pinyin:'Jīntiān jǐ hào?', vi:'Hôm nay ngày mấy?' },
        { sp:'B', zh:'今天五月八号。', pinyin:'Jīntiān wǔ yuè bā hào.', vi:'Hôm nay ngày 8 tháng 5.' },
        { sp:'A', zh:'今天星期几？', pinyin:'Jīntiān xīngqī jǐ?', vi:'Hôm nay thứ mấy?' },
        { sp:'B', zh:'星期四。明天是我的生日。', pinyin:'Xīngqīsì. Míngtiān shì wǒ de shēngrì.', vi:'Thứ Năm. Mai là sinh nhật mình.' }
      ]
    },

    {
      no:8, zh:'我想喝茶', pinyin:'Wǒ xiǎng hē chá', vi:'Tôi muốn uống trà',
      skill:'Bày tỏ mong muốn với 想; đồ ăn thức uống',
      grammar:[
        { form:'S + 想 + V', vi:'“muốn (làm gì)”',
          note:'想 xiǎng = muốn/nghĩ. Phủ định: 不想. Vd 我想喝茶 / 我不想吃饭.',
          ex:{ zh:'我想喝一杯茶。', pinyin:'Wǒ xiǎng hē yì bēi chá.', vi:'Tôi muốn uống một cốc trà.' } },
        { form:'lượng từ 个 / 杯', vi:'“cái / cốc”',
          note:'Số + lượng từ + danh từ: 一个苹果, 两杯水. 个 là lượng từ chung, 杯 dùng cho đồ uống.',
          ex:{ zh:'我想吃两个苹果。', pinyin:'Wǒ xiǎng chī liǎng gè píngguǒ.', vi:'Tôi muốn ăn hai quả táo.' } }
      ],
      vocab:[
        { zh:'想', pinyin:'xiǎng', hv:'tưởng', vi:'muốn; nghĩ', pos:'động từ' },
        { zh:'喝', pinyin:'hē', hv:'hát', vi:'uống', pos:'động từ' },
        { zh:'茶', pinyin:'chá', hv:'trà', vi:'trà', pos:'danh từ' },
        { zh:'吃', pinyin:'chī', hv:'ngật', vi:'ăn', pos:'động từ' },
        { zh:'饭', pinyin:'fàn', hv:'phạn', vi:'cơm', pos:'danh từ' },
        { zh:'水', pinyin:'shuǐ', hv:'thuỷ', vi:'nước', pos:'danh từ' },
        { zh:'苹果', pinyin:'píngguǒ', hv:'bình quả', vi:'quả táo', pos:'danh từ' },
        { zh:'菜', pinyin:'cài', hv:'thái', vi:'món ăn; rau', pos:'danh từ' },
        { zh:'杯', pinyin:'bēi', hv:'bôi', vi:'cốc (lượng từ)', pos:'lượng từ' },
        { zh:'个', pinyin:'gè', hv:'cá', vi:'cái (lượng từ chung)', pos:'lượng từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你想喝什么？', pinyin:'Nǐ xiǎng hē shénme?', vi:'Bạn muốn uống gì?' },
        { sp:'B', zh:'我想喝茶。你呢？', pinyin:'Wǒ xiǎng hē chá. Nǐ ne?', vi:'Mình muốn uống trà. Còn bạn?' },
        { sp:'A', zh:'我想喝水。', pinyin:'Wǒ xiǎng hē shuǐ.', vi:'Mình muốn uống nước.' },
        { sp:'B', zh:'你想吃苹果吗？', pinyin:'Nǐ xiǎng chī píngguǒ ma?', vi:'Bạn muốn ăn táo không?' },
        { sp:'A', zh:'好，谢谢！', pinyin:'Hǎo, xièxie!', vi:'Được, cảm ơn!' }
      ]
    },

    {
      no:9, zh:'你儿子在哪儿工作', pinyin:'Nǐ érzi zài nǎr gōngzuò', vi:'Con trai bạn làm việc ở đâu',
      skill:'Nói về nơi chốn với 在 và hỏi 哪儿',
      grammar:[
        { form:'S + 在 + nơi chốn', vi:'“ở (đâu)”',
          note:'在 zài chỉ vị trí. Vd 我在学校, 他在家. Hỏi nơi chốn dùng 哪儿.',
          ex:{ zh:'他在医院工作。', pinyin:'Tā zài yīyuàn gōngzuò.', vi:'Anh ấy làm việc ở bệnh viện.' } },
        { form:'…在哪儿？', vi:'“… ở đâu?”',
          note:'哪儿 nǎr = ở đâu. Vd 你在哪儿？ / 你在哪儿工作？',
          ex:{ zh:'你在哪儿工作？', pinyin:'Nǐ zài nǎr gōngzuò?', vi:'Bạn làm việc ở đâu?' } }
      ],
      vocab:[
        { zh:'在', pinyin:'zài', hv:'tại', vi:'ở (đâu)', pos:'động từ; giới từ' },
        { zh:'哪儿', pinyin:'nǎr', hv:'na nhi', vi:'ở đâu', pos:'đại từ nghi vấn' },
        { zh:'工作', pinyin:'gōngzuò', hv:'công tác', vi:'làm việc; công việc', pos:'động từ; danh từ' },
        { zh:'儿子', pinyin:'érzi', hv:'nhi tử', vi:'con trai', pos:'danh từ' },
        { zh:'医院', pinyin:'yīyuàn', hv:'y viện', vi:'bệnh viện', pos:'danh từ' },
        { zh:'学校', pinyin:'xuéxiào', hv:'học hiệu', vi:'trường học', pos:'danh từ' },
        { zh:'公司', pinyin:'gōngsī', hv:'công ty', vi:'công ty', pos:'danh từ' },
        { zh:'家', pinyin:'jiā', hv:'gia', vi:'nhà, gia đình', pos:'danh từ' },
        { zh:'饭馆', pinyin:'fànguǎn', hv:'phạn quán', vi:'quán ăn, nhà hàng', pos:'danh từ' },
        { zh:'北京', pinyin:'Běijīng', hv:'bắc kinh', vi:'Bắc Kinh', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你儿子在哪儿工作？', pinyin:'Nǐ érzi zài nǎr gōngzuò?', vi:'Con trai bạn làm việc ở đâu?' },
        { sp:'B', zh:'他在医院工作，是医生。', pinyin:'Tā zài yīyuàn gōngzuò, shì yīshēng.', vi:'Cháu làm ở bệnh viện, là bác sĩ.' },
        { sp:'A', zh:'你女儿呢？', pinyin:'Nǐ nǚ’ér ne?', vi:'Còn con gái bạn?' },
        { sp:'B', zh:'她在学校，是学生。', pinyin:'Tā zài xuéxiào, shì xuésheng.', vi:'Cháu ở trường, là học sinh.' }
      ]
    },

    {
      no:10, zh:'我能坐这儿吗', pinyin:'Wǒ néng zuò zhèr ma', vi:'Tôi ngồi đây được không',
      skill:'Xin phép với 能; chỉ vị trí 这儿/那儿',
      grammar:[
        { form:'S + 能 + V', vi:'“có thể / được phép (làm gì)”',
          note:'能 néng chỉ khả năng hoặc sự cho phép. Hỏi xin phép: 我能…吗？ Phủ định: 不能.',
          ex:{ zh:'我能坐这儿吗？', pinyin:'Wǒ néng zuò zhèr ma?', vi:'Tôi ngồi đây được không?' } },
        { form:'这儿 / 那儿', vi:'“ở đây / ở kia”',
          note:'这儿 zhèr = chỗ này; 那儿 nàr = chỗ kia. Kết hợp 在: 在这儿, 在那儿.',
          ex:{ zh:'你的书在那儿。', pinyin:'Nǐ de shū zài nàr.', vi:'Sách của bạn ở kia.' } }
      ],
      vocab:[
        { zh:'能', pinyin:'néng', hv:'năng', vi:'có thể, được phép', pos:'động từ năng nguyện' },
        { zh:'坐', pinyin:'zuò', hv:'toạ', vi:'ngồi', pos:'động từ' },
        { zh:'这儿', pinyin:'zhèr', hv:'giá nhi', vi:'ở đây', pos:'đại từ' },
        { zh:'那儿', pinyin:'nàr', hv:'na nhi', vi:'ở kia', pos:'đại từ' },
        { zh:'请', pinyin:'qǐng', hv:'thỉnh', vi:'mời; xin', pos:'động từ' },
        { zh:'进', pinyin:'jìn', hv:'tiến', vi:'vào', pos:'động từ' },
        { zh:'开', pinyin:'kāi', hv:'khai', vi:'mở; lái', pos:'động từ' },
        { zh:'前面', pinyin:'qiánmiàn', hv:'tiền diện', vi:'phía trước', pos:'danh từ' },
        { zh:'后面', pinyin:'hòumiàn', hv:'hậu diện', vi:'phía sau', pos:'danh từ' },
        { zh:'里', pinyin:'lǐ', hv:'lý', vi:'trong; bên trong', pos:'danh từ vị trí' }
      ],
      dialogue:[
        { sp:'A', zh:'请进！', pinyin:'Qǐng jìn!', vi:'Mời vào!' },
        { sp:'B', zh:'谢谢。我能坐这儿吗？', pinyin:'Xièxie. Wǒ néng zuò zhèr ma?', vi:'Cảm ơn. Tôi ngồi đây được không?' },
        { sp:'A', zh:'能，请坐。', pinyin:'Néng, qǐng zuò.', vi:'Được, mời ngồi.' },
        { sp:'B', zh:'我的书在哪儿？', pinyin:'Wǒ de shū zài nǎr?', vi:'Sách của mình ở đâu nhỉ?' },
        { sp:'A', zh:'在那儿。', pinyin:'Zài nàr.', vi:'Ở kia.' }
      ]
    },

    {
      no:11, zh:'现在几点', pinyin:'Xiànzài jǐ diǎn', vi:'Bây giờ mấy giờ',
      skill:'Xem giờ và nói về thời gian trong ngày',
      grammar:[
        { form:'…点…分', vi:'giờ phút',
          note:'Giờ dùng 点, phút dùng 分, rưỡi dùng 半. Vd 八点, 八点半, 八点十分. Hỏi: 现在几点？',
          ex:{ zh:'现在八点半。', pinyin:'Xiànzài bā diǎn bàn.', vi:'Bây giờ 8 giờ rưỡi.' } },
        { form:'thời gian + V', vi:'“(mấy giờ) làm gì”',
          note:'Từ chỉ thời gian đặt TRƯỚC động từ: 我七点起床 (chứ không nói 我起床七点).',
          ex:{ zh:'我晚上十一点睡觉。', pinyin:'Wǒ wǎnshang shíyī diǎn shuìjiào.', vi:'Tối mình 11 giờ đi ngủ.' } }
      ],
      vocab:[
        { zh:'现在', pinyin:'xiànzài', hv:'hiện tại', vi:'bây giờ', pos:'danh từ' },
        { zh:'点', pinyin:'diǎn', hv:'điểm', vi:'giờ', pos:'lượng từ' },
        { zh:'分', pinyin:'fēn', hv:'phân', vi:'phút', pos:'lượng từ' },
        { zh:'半', pinyin:'bàn', hv:'bán', vi:'rưỡi, nửa', pos:'số từ' },
        { zh:'上午', pinyin:'shàngwǔ', hv:'thượng ngọ', vi:'buổi sáng', pos:'danh từ' },
        { zh:'中午', pinyin:'zhōngwǔ', hv:'trung ngọ', vi:'buổi trưa', pos:'danh từ' },
        { zh:'下午', pinyin:'xiàwǔ', hv:'hạ ngọ', vi:'buổi chiều', pos:'danh từ' },
        { zh:'早上', pinyin:'zǎoshang', hv:'tảo thượng', vi:'sáng sớm', pos:'danh từ' },
        { zh:'晚上', pinyin:'wǎnshang', hv:'vãn thượng', vi:'buổi tối', pos:'danh từ' },
        { zh:'起床', pinyin:'qǐchuáng', hv:'khởi sàng', vi:'ngủ dậy', pos:'động từ' },
        { zh:'睡觉', pinyin:'shuìjiào', hv:'thuỵ giác', vi:'đi ngủ', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'现在几点？', pinyin:'Xiànzài jǐ diǎn?', vi:'Bây giờ mấy giờ?' },
        { sp:'B', zh:'现在八点半。', pinyin:'Xiànzài bā diǎn bàn.', vi:'Bây giờ 8 giờ rưỡi.' },
        { sp:'A', zh:'你早上几点起床？', pinyin:'Nǐ zǎoshang jǐ diǎn qǐchuáng?', vi:'Sáng bạn mấy giờ dậy?' },
        { sp:'B', zh:'我七点起床，晚上十一点睡觉。', pinyin:'Wǒ qī diǎn qǐchuáng, wǎnshang shíyī diǎn shuìjiào.', vi:'Mình 7 giờ dậy, 11 giờ tối đi ngủ.' }
      ]
    },

    {
      no:12, zh:'明天天气怎么样', pinyin:'Míngtiān tiānqì zěnmeyàng', vi:'Thời tiết ngày mai thế nào',
      skill:'Hỏi ý kiến với 怎么样; nói về thời tiết',
      grammar:[
        { form:'…怎么样？', vi:'“… thế nào?”',
          note:'怎么样 zěnmeyàng hỏi tình trạng/ý kiến. Vd 天气怎么样？ / 这个菜怎么样？',
          ex:{ zh:'今天天气怎么样？', pinyin:'Jīntiān tiānqì zěnmeyàng?', vi:'Thời tiết hôm nay thế nào?' } },
        { form:'太 + tính từ + 了', vi:'“… quá!”',
          note:'太…了 nhấn mạnh mức độ cao (thường hơi than). Vd 太热了, 太贵了.',
          ex:{ zh:'今天太热了！', pinyin:'Jīntiān tài rè le!', vi:'Hôm nay nóng quá!' } }
      ],
      vocab:[
        { zh:'天气', pinyin:'tiānqì', hv:'thiên khí', vi:'thời tiết', pos:'danh từ' },
        { zh:'怎么样', pinyin:'zěnmeyàng', hv:'chẩm ma dạng', vi:'thế nào', pos:'đại từ nghi vấn' },
        { zh:'热', pinyin:'rè', hv:'nhiệt', vi:'nóng', pos:'tính từ' },
        { zh:'冷', pinyin:'lěng', hv:'lãnh', vi:'lạnh', pos:'tính từ' },
        { zh:'下雨', pinyin:'xiàyǔ', hv:'hạ vũ', vi:'mưa (trời mưa)', pos:'động từ' },
        { zh:'太', pinyin:'tài', hv:'thái', vi:'quá, rất', pos:'phó từ' },
        { zh:'风', pinyin:'fēng', hv:'phong', vi:'gió', pos:'danh từ' },
        { zh:'有点儿', pinyin:'yǒudiǎnr', hv:'hữu điểm nhi', vi:'hơi (mang ý chê)', pos:'phó từ' },
        { zh:'天', pinyin:'tiān', hv:'thiên', vi:'trời; ngày', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'明天天气怎么样？', pinyin:'Míngtiān tiānqì zěnmeyàng?', vi:'Thời tiết mai thế nào?' },
        { sp:'B', zh:'明天很热。', pinyin:'Míngtiān hěn rè.', vi:'Mai rất nóng.' },
        { sp:'A', zh:'今天呢？', pinyin:'Jīntiān ne?', vi:'Còn hôm nay?' },
        { sp:'B', zh:'今天下雨，有点儿冷。', pinyin:'Jīntiān xiàyǔ, yǒudiǎnr lěng.', vi:'Hôm nay mưa, hơi lạnh.' },
        { sp:'A', zh:'太冷了！', pinyin:'Tài lěng le!', vi:'Lạnh quá!' }
      ]
    },

    {
      no:13, zh:'他在学做中国菜', pinyin:'Tā zài xué zuò Zhōngguó cài', vi:'Anh ấy đang học nấu món Trung',
      skill:'Diễn tả hành động đang diễn ra với 在 + V',
      grammar:[
        { form:'S + 在 + V', vi:'“đang (làm gì)”',
          note:'在 đặt trước động từ để chỉ hành động đang diễn ra. Vd 他在学习 / 我在吃饭.',
          ex:{ zh:'他在学做中国菜。', pinyin:'Tā zài xué zuò Zhōngguó cài.', vi:'Anh ấy đang học nấu món Trung.' } },
        { form:'喜欢 + V/N', vi:'“thích…”',
          note:'喜欢 xǐhuan = thích, theo sau là danh từ hoặc động từ. Vd 我喜欢做菜 / 他喜欢中国菜.',
          ex:{ zh:'他很喜欢做菜。', pinyin:'Tā hěn xǐhuan zuò cài.', vi:'Anh ấy rất thích nấu ăn.' } }
      ],
      vocab:[
        { zh:'学习', pinyin:'xuéxí', hv:'học tập', vi:'học tập, học', pos:'động từ' },
        { zh:'做', pinyin:'zuò', hv:'tố', vi:'làm; nấu', pos:'động từ' },
        { zh:'喜欢', pinyin:'xǐhuan', hv:'hỉ hoan', vi:'thích', pos:'động từ' },
        { zh:'鱼', pinyin:'yú', hv:'ngư', vi:'cá', pos:'danh từ' },
        { zh:'肉', pinyin:'ròu', hv:'nhục', vi:'thịt', pos:'danh từ' },
        { zh:'鸡蛋', pinyin:'jīdàn', hv:'kê đản', vi:'trứng gà', pos:'danh từ' },
        { zh:'好吃', pinyin:'hǎochī', hv:'hảo ngật', vi:'ngon', pos:'tính từ' },
        { zh:'一起', pinyin:'yìqǐ', hv:'nhất khởi', vi:'cùng nhau', pos:'phó từ' },
        { zh:'都', pinyin:'dōu', hv:'đô', vi:'đều, cả', pos:'phó từ' },
        { zh:'常常', pinyin:'chángcháng', hv:'thường thường', vi:'thường, thường xuyên', pos:'phó từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你朋友在做什么？', pinyin:'Nǐ péngyou zài zuò shénme?', vi:'Bạn của bạn đang làm gì?' },
        { sp:'B', zh:'他在学做中国菜。', pinyin:'Tā zài xué zuò Zhōngguó cài.', vi:'Cậu ấy đang học nấu món Trung.' },
        { sp:'A', zh:'他喜欢做菜吗？', pinyin:'Tā xǐhuan zuò cài ma?', vi:'Cậu ấy thích nấu ăn không?' },
        { sp:'B', zh:'很喜欢，他做的菜很好吃。', pinyin:'Hěn xǐhuan, tā zuò de cài hěn hǎochī.', vi:'Rất thích, món cậu ấy nấu rất ngon.' }
      ]
    },

    {
      no:14, zh:'她买了不少衣服', pinyin:'Tā mǎi le bù shǎo yīfu', vi:'Cô ấy mua khá nhiều quần áo',
      skill:'Trợ từ 了 (hoàn thành) và mua sắm, giá cả',
      grammar:[
        { form:'V + 了', vi:'“đã (làm xong)”',
          note:'了 le sau động từ chỉ hành động đã hoàn thành. Vd 我买了一本书 / 她买了不少衣服.',
          ex:{ zh:'我买了两件衣服。', pinyin:'Wǒ mǎi le liǎng jiàn yīfu.', vi:'Tôi đã mua hai bộ quần áo.' } },
        { form:'…多少钱？', vi:'“… bao nhiêu tiền?”',
          note:'Hỏi giá: N + 多少钱？ Tiền đếm bằng 块. Vd 这件衣服多少钱？ → 一百块.',
          ex:{ zh:'这本书多少钱？', pinyin:'Zhè běn shū duōshao qián?', vi:'Quyển sách này bao nhiêu tiền?' } }
      ],
      vocab:[
        { zh:'买', pinyin:'mǎi', hv:'mãi', vi:'mua', pos:'động từ' },
        { zh:'衣服', pinyin:'yīfu', hv:'y phục', vi:'quần áo', pos:'danh từ' },
        { zh:'钱', pinyin:'qián', hv:'tiền', vi:'tiền', pos:'danh từ' },
        { zh:'多少', pinyin:'duōshao', hv:'đa thiểu', vi:'bao nhiêu', pos:'đại từ nghi vấn' },
        { zh:'块', pinyin:'kuài', hv:'khối', vi:'đồng (tiền); cục', pos:'lượng từ' },
        { zh:'少', pinyin:'shǎo', hv:'thiểu', vi:'ít', pos:'tính từ' },
        { zh:'多', pinyin:'duō', hv:'đa', vi:'nhiều', pos:'tính từ' },
        { zh:'本', pinyin:'běn', hv:'bản', vi:'quyển (lượng từ)', pos:'lượng từ' },
        { zh:'件', pinyin:'jiàn', hv:'kiện', vi:'bộ, chiếc (lượng từ áo/việc)', pos:'lượng từ' },
        { zh:'贵', pinyin:'guì', hv:'quý', vi:'đắt', pos:'tính từ' },
        { zh:'便宜', pinyin:'piányi', hv:'tiện nghi', vi:'rẻ', pos:'tính từ' },
        { zh:'商店', pinyin:'shāngdiàn', hv:'thương điếm', vi:'cửa hàng', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你买了什么？', pinyin:'Nǐ mǎi le shénme?', vi:'Bạn mua gì thế?' },
        { sp:'B', zh:'我买了不少衣服。', pinyin:'Wǒ mǎi le bù shǎo yīfu.', vi:'Mình mua khá nhiều quần áo.' },
        { sp:'A', zh:'这件多少钱？', pinyin:'Zhè jiàn duōshao qián?', vi:'Chiếc này bao nhiêu tiền?' },
        { sp:'B', zh:'一百块。', pinyin:'Yìbǎi kuài.', vi:'Một trăm đồng.' },
        { sp:'A', zh:'太贵了！那件呢？', pinyin:'Tài guì le! Nà jiàn ne?', vi:'Đắt quá! Còn chiếc kia?' },
        { sp:'B', zh:'那件便宜，五十块。', pinyin:'Nà jiàn piányi, wǔshí kuài.', vi:'Chiếc kia rẻ, năm mươi đồng.' }
      ]
    },

    {
      no:15, zh:'祝你生日快乐', pinyin:'Zhù nǐ shēngrì kuàilè', vi:'Chúc mừng sinh nhật',
      skill:'Lời chúc và tặng quà',
      grammar:[
        { form:'祝 + (ai) + lời chúc', vi:'“chúc…”',
          note:'祝 zhù mở đầu câu chúc. Vd 祝你生日快乐！/ 祝你健康！',
          ex:{ zh:'祝你生日快乐！', pinyin:'Zhù nǐ shēngrì kuàilè!', vi:'Chúc bạn sinh nhật vui vẻ!' } },
        { form:'给 + ai + N', vi:'“cho / tặng ai cái gì”',
          note:'给 gěi = cho/tặng. Vd 这是给你的礼物 / 我给你一本书.',
          ex:{ zh:'这是给你的礼物。', pinyin:'Zhè shì gěi nǐ de lǐwù.', vi:'Đây là quà cho bạn.' } }
      ],
      vocab:[
        { zh:'祝', pinyin:'zhù', hv:'chúc', vi:'chúc', pos:'động từ' },
        { zh:'礼物', pinyin:'lǐwù', hv:'lễ vật', vi:'quà, món quà', pos:'danh từ' },
        { zh:'送', pinyin:'sòng', hv:'tống', vi:'tặng; đưa, tiễn', pos:'động từ' },
        { zh:'给', pinyin:'gěi', hv:'cấp', vi:'cho, tặng', pos:'động từ' },
        { zh:'漂亮', pinyin:'piàoliang', hv:'phiêu lượng', vi:'đẹp, xinh', pos:'tính từ' },
        { zh:'唱歌', pinyin:'chànggē', hv:'xướng ca', vi:'hát', pos:'động từ' },
        { zh:'蛋糕', pinyin:'dàngāo', hv:'đản cao', vi:'bánh kem', pos:'danh từ' },
        { zh:'快', pinyin:'kuài', hv:'khoái', vi:'nhanh', pos:'tính từ' },
        { zh:'慢', pinyin:'màn', hv:'mạn', vi:'chậm', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'祝你生日快乐！', pinyin:'Zhù nǐ shēngrì kuàilè!', vi:'Chúc mừng sinh nhật!' },
        { sp:'B', zh:'谢谢！', pinyin:'Xièxie!', vi:'Cảm ơn!' },
        { sp:'A', zh:'这是给你的礼物。', pinyin:'Zhè shì gěi nǐ de lǐwù.', vi:'Đây là quà cho bạn.' },
        { sp:'B', zh:'太漂亮了，谢谢你！', pinyin:'Tài piàoliang le, xièxie nǐ!', vi:'Đẹp quá, cảm ơn bạn!' },
        { sp:'A', zh:'我们一起唱歌吧！', pinyin:'Wǒmen yìqǐ chànggē ba!', vi:'Cùng hát nào!' }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSE_ZH, STROKES_ZH, RADICALS_ZH, PINYIN_ZH };
}
