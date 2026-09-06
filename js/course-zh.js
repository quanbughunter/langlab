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
    { id:'hsk2', zh:'HSK 2', vi:'HSK 2 · Sơ–trung cấp', lessons:15, status:'active'  },
    { id:'hsk3', zh:'HSK 3', vi:'HSK 3 · Trung cấp', lessons:20, status:'active'  },
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
    },

    {
      level:'hsk2', no:1, zh:'你最近怎么样', pinyin:'Nǐ zuìjìn zěnmeyàng', vi:'Dạo này bạn thế nào',
      skill:'Hỏi thăm; bổ ngữ trình độ 得 và nêu lý do 因为…所以',
      grammar:[
        { form:'V + 得 + tính từ', vi:'“làm (thế nào)” — bổ ngữ trình độ',
          note:'得 de nối động từ với đánh giá. Vd 他跑得很快 / 你说得很好. Có tân ngữ thì lặp động từ: 他说汉语说得很好.',
          ex:{ zh:'你汉语说得很好。', pinyin:'Nǐ Hànyǔ shuō de hěn hǎo.', vi:'Bạn nói tiếng Trung rất giỏi.' } },
        { form:'因为… ，所以…', vi:'“vì… nên…”',
          note:'因为 nêu nguyên nhân, 所以 nêu kết quả (có thể lược một vế). Vd 因为很忙，所以很累.',
          ex:{ zh:'因为工作很多，所以我很忙。', pinyin:'Yīnwèi gōngzuò hěn duō, suǒyǐ wǒ hěn máng.', vi:'Vì nhiều việc nên tôi rất bận.' } }
      ],
      vocab:[
        { zh:'最近', pinyin:'zuìjìn', hv:'tối cận', vi:'gần đây, dạo này', pos:'danh từ' },
        { zh:'还', pinyin:'hái', hv:'hoàn', vi:'vẫn, còn', pos:'phó từ' },
        { zh:'得', pinyin:'de', hv:'đắc', vi:'(trợ từ bổ ngữ)', pos:'trợ từ' },
        { zh:'觉得', pinyin:'juéde', hv:'giác đắc', vi:'cảm thấy', pos:'động từ' },
        { zh:'累', pinyin:'lèi', hv:'luy', vi:'mệt', pos:'tính từ' },
        { zh:'忙', pinyin:'máng', hv:'mang', vi:'bận', pos:'tính từ' },
        { zh:'身体', pinyin:'shēntǐ', hv:'thân thể', vi:'sức khoẻ, cơ thể', pos:'danh từ' },
        { zh:'但是', pinyin:'dànshì', hv:'đãn thị', vi:'nhưng', pos:'liên từ' },
        { zh:'因为', pinyin:'yīnwèi', hv:'nhân vị', vi:'vì, bởi vì', pos:'liên từ' },
        { zh:'所以', pinyin:'suǒyǐ', hv:'sở dĩ', vi:'cho nên', pos:'liên từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你最近怎么样？', pinyin:'Nǐ zuìjìn zěnmeyàng?', vi:'Dạo này bạn thế nào?' },
        { sp:'B', zh:'还不错，就是有点儿忙。', pinyin:'Hái búcuò, jiùshì yǒudiǎnr máng.', vi:'Cũng ổn, chỉ hơi bận.' },
        { sp:'A', zh:'工作累吗？', pinyin:'Gōngzuò lèi ma?', vi:'Công việc có mệt không?' },
        { sp:'B', zh:'因为工作很多，所以有点儿累。', pinyin:'Yīnwèi gōngzuò hěn duō, suǒyǐ yǒudiǎnr lèi.', vi:'Vì nhiều việc nên hơi mệt.' }
      ]
    },

    {
      level:'hsk2', no:2, zh:'你的爱好是什么', pinyin:'Nǐ de àihào shì shénme', vi:'Sở thích của bạn là gì',
      skill:'Nói về sở thích; “vừa… vừa…”',
      grammar:[
        { form:'一边 V₁ 一边 V₂', vi:'“vừa… vừa…”',
          note:'Hai hành động cùng lúc. Vd 他一边听音乐一边跑步 (vừa nghe nhạc vừa chạy).',
          ex:{ zh:'我喜欢一边喝茶一边看书。', pinyin:'Wǒ xǐhuan yìbiān hē chá yìbiān kàn shū.', vi:'Mình thích vừa uống trà vừa đọc sách.' } },
        { form:'打 / 踢 + môn thể thao', vi:'“chơi/đá (môn…)”',
          note:'Bóng dùng tay: 打篮球; bóng dùng chân: 踢足球. Bơi: 游泳, nhảy: 跳舞.',
          ex:{ zh:'他每天都打篮球。', pinyin:'Tā měitiān dōu dǎ lánqiú.', vi:'Ngày nào anh ấy cũng chơi bóng rổ.' } }
      ],
      vocab:[
        { zh:'爱好', pinyin:'àihào', hv:'ái hảo', vi:'sở thích', pos:'danh từ' },
        { zh:'运动', pinyin:'yùndòng', hv:'vận động', vi:'thể thao; vận động', pos:'danh từ; động từ' },
        { zh:'跳舞', pinyin:'tiàowǔ', hv:'khiêu vũ', vi:'nhảy, múa', pos:'động từ' },
        { zh:'游泳', pinyin:'yóuyǒng', hv:'du vịnh', vi:'bơi', pos:'động từ' },
        { zh:'篮球', pinyin:'lánqiú', hv:'lam cầu', vi:'bóng rổ', pos:'danh từ' },
        { zh:'打', pinyin:'dǎ', hv:'đả', vi:'đánh; chơi (bóng)', pos:'động từ' },
        { zh:'旅游', pinyin:'lǚyóu', hv:'lữ du', vi:'du lịch', pos:'động từ' },
        { zh:'音乐', pinyin:'yīnyuè', hv:'âm nhạc', vi:'âm nhạc', pos:'danh từ' },
        { zh:'电影', pinyin:'diànyǐng', hv:'điện ảnh', vi:'phim', pos:'danh từ' },
        { zh:'一边', pinyin:'yìbiān', hv:'nhất biên', vi:'một bên; vừa (… vừa)', pos:'phó từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你的爱好是什么？', pinyin:'Nǐ de àihào shì shénme?', vi:'Sở thích của bạn là gì?' },
        { sp:'B', zh:'我喜欢运动，特别是篮球。你呢？', pinyin:'Wǒ xǐhuan yùndòng, tèbié shì lánqiú. Nǐ ne?', vi:'Mình thích thể thao, nhất là bóng rổ. Còn bạn?' },
        { sp:'A', zh:'我爱看电影，也喜欢旅游。', pinyin:'Wǒ ài kàn diànyǐng, yě xǐhuan lǚyóu.', vi:'Mình mê xem phim, cũng thích du lịch.' }
      ]
    },

    {
      level:'hsk2', no:3, zh:'你什么时候搬家', pinyin:'Nǐ shénme shíhou bānjiā', vi:'Khi nào bạn chuyển nhà',
      skill:'“Sắp…” với 要…了; khoảng cách với 离',
      grammar:[
        { form:'(快)要 + V + 了', vi:'“sắp (làm gì)”',
          note:'Diễn tả việc sắp xảy ra. Vd 我下个月要搬家了 / 快要下雨了.',
          ex:{ zh:'快要下雨了。', pinyin:'Kuàiyào xiàyǔ le.', vi:'Trời sắp mưa rồi.' } },
        { form:'A 离 B + 近/远', vi:'“A cách B gần/xa”',
          note:'离 lí chỉ khoảng cách giữa hai nơi. Vd 我家离公司很近.',
          ex:{ zh:'新房子离公司很近。', pinyin:'Xīn fángzi lí gōngsī hěn jìn.', vi:'Nhà mới cách công ty rất gần.' } }
      ],
      vocab:[
        { zh:'搬', pinyin:'bān', hv:'ban', vi:'dời, chuyển', pos:'động từ' },
        { zh:'房间', pinyin:'fángjiān', hv:'phòng gian', vi:'căn phòng', pos:'danh từ' },
        { zh:'帮', pinyin:'bāng', hv:'bang', vi:'giúp', pos:'động từ' },
        { zh:'帮忙', pinyin:'bāngmáng', hv:'bang mang', vi:'giúp đỡ', pos:'động từ' },
        { zh:'要', pinyin:'yào', hv:'yếu', vi:'muốn; sắp; phải', pos:'động từ năng nguyện' },
        { zh:'新', pinyin:'xīn', hv:'tân', vi:'mới', pos:'tính từ' },
        { zh:'离', pinyin:'lí', hv:'ly', vi:'cách (khoảng cách)', pos:'giới từ' },
        { zh:'近', pinyin:'jìn', hv:'cận', vi:'gần', pos:'tính từ' },
        { zh:'远', pinyin:'yuǎn', hv:'viễn', vi:'xa', pos:'tính từ' },
        { zh:'方便', pinyin:'fāngbiàn', hv:'phương tiện', vi:'tiện lợi', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你什么时候搬家？', pinyin:'Nǐ shénme shíhou bānjiā?', vi:'Khi nào bạn chuyển nhà?' },
        { sp:'B', zh:'下个月。', pinyin:'Xià ge yuè.', vi:'Tháng sau.' },
        { sp:'A', zh:'新房子在哪儿？', pinyin:'Xīn fángzi zài nǎr?', vi:'Nhà mới ở đâu?' },
        { sp:'B', zh:'离公司很近，很方便。', pinyin:'Lí gōngsī hěn jìn, hěn fāngbiàn.', vi:'Cách công ty rất gần, rất tiện.' },
        { sp:'A', zh:'搬家的时候我来帮你。', pinyin:'Bānjiā de shíhou wǒ lái bāng nǐ.', vi:'Lúc chuyển nhà mình đến giúp bạn.' }
      ]
    },

    {
      level:'hsk2', no:4, zh:'这个工作是同事介绍的', pinyin:'Zhège gōngzuò shì tóngshì jièshào de', vi:'Việc này là đồng nghiệp giới thiệu',
      skill:'Nhấn mạnh với 是…的; “từ… đến…”',
      grammar:[
        { form:'是 … 的', vi:'nhấn mạnh (ai/khi nào/ở đâu/cách nào) của việc đã xảy ra',
          note:'Với việc đã xảy ra, dùng 是…的 để nhấn mạnh thành phần ở giữa. Vd 我是昨天来的 / 这是他介绍的.',
          ex:{ zh:'这个工作是同事介绍的。', pinyin:'Zhège gōngzuò shì tóngshì jièshào de.', vi:'Việc này là đồng nghiệp giới thiệu.' } },
        { form:'从 A 到 B', vi:'“từ A đến B”',
          note:'Chỉ khoảng thời gian/không gian. Vd 从早上到晚上 / 从家到公司.',
          ex:{ zh:'我从早上八点工作到下午五点。', pinyin:'Wǒ cóng zǎoshang bā diǎn gōngzuò dào xiàwǔ wǔ diǎn.', vi:'Tôi làm từ 8 giờ sáng đến 5 giờ chiều.' } }
      ],
      vocab:[
        { zh:'介绍', pinyin:'jièshào', hv:'giới thiệu', vi:'giới thiệu', pos:'động từ' },
        { zh:'帮助', pinyin:'bāngzhù', hv:'bang trợ', vi:'giúp đỡ', pos:'động từ; danh từ' },
        { zh:'同事', pinyin:'tóngshì', hv:'đồng sự', vi:'đồng nghiệp', pos:'danh từ' },
        { zh:'同学', pinyin:'tóngxué', hv:'đồng học', vi:'bạn học', pos:'danh từ' },
        { zh:'经理', pinyin:'jīnglǐ', hv:'kinh lý', vi:'giám đốc, quản lý', pos:'danh từ' },
        { zh:'上班', pinyin:'shàngbān', hv:'thượng ban', vi:'đi làm', pos:'động từ' },
        { zh:'下班', pinyin:'xiàbān', hv:'hạ ban', vi:'tan làm', pos:'động từ' },
        { zh:'迟到', pinyin:'chídào', hv:'trì đáo', vi:'đến muộn', pos:'động từ' },
        { zh:'开始', pinyin:'kāishǐ', hv:'khai thuỷ', vi:'bắt đầu', pos:'động từ' },
        { zh:'从', pinyin:'cóng', hv:'tòng', vi:'từ (nơi/lúc)', pos:'giới từ' }
      ],
      dialogue:[
        { sp:'A', zh:'这个工作是谁给你介绍的？', pinyin:'Zhège gōngzuò shì shéi gěi nǐ jièshào de?', vi:'Việc này ai giới thiệu cho bạn?' },
        { sp:'B', zh:'是我同事介绍的。', pinyin:'Shì wǒ tóngshì jièshào de.', vi:'Là đồng nghiệp mình giới thiệu.' },
        { sp:'A', zh:'经理怎么样？', pinyin:'Jīnglǐ zěnmeyàng?', vi:'Giám đốc thế nào?' },
        { sp:'B', zh:'他人很好，对我们很好。', pinyin:'Tā rén hěn hǎo, duì wǒmen hěn hǎo.', vi:'Anh ấy tốt tính, đối xử với chúng mình rất tốt.' }
      ]
    },

    {
      level:'hsk2', no:5, zh:'桌子上放着很多东西', pinyin:'Zhuōzi shang fàng zhe hěn duō dōngxi', vi:'Trên bàn để nhiều đồ',
      skill:'Trạng thái tồn tại với 着; vị trí đồ vật',
      grammar:[
        { form:'Nơi + V + 着 + N', vi:'“ở (nơi) đang có/đặt…”',
          note:'着 zhe chỉ trạng thái duy trì. Vd 门开着 (cửa đang mở) / 桌子上放着书 (trên bàn để sách).',
          ex:{ zh:'桌子上放着一个手机。', pinyin:'Zhuōzi shang fàng zhe yí ge shǒujī.', vi:'Trên bàn để một chiếc điện thoại.' } },
        { form:'N + 上/里/旁边', vi:'từ chỉ vị trí',
          note:'Danh từ + từ phương vị: 桌子上 (trên bàn), 房间里 (trong phòng), 旁边 (bên cạnh).',
          ex:{ zh:'电脑在手机旁边。', pinyin:'Diànnǎo zài shǒujī pángbiān.', vi:'Máy tính ở bên cạnh điện thoại.' } }
      ],
      vocab:[
        { zh:'桌子', pinyin:'zhuōzi', hv:'trác tử', vi:'cái bàn', pos:'danh từ' },
        { zh:'椅子', pinyin:'yǐzi', hv:'ỷ tử', vi:'cái ghế', pos:'danh từ' },
        { zh:'放', pinyin:'fàng', hv:'phóng', vi:'đặt, để', pos:'động từ' },
        { zh:'着', pinyin:'zhe', hv:'trước', vi:'(trợ từ trạng thái)', pos:'trợ từ' },
        { zh:'上面', pinyin:'shàngmiàn', hv:'thượng diện', vi:'phía trên', pos:'danh từ' },
        { zh:'旁边', pinyin:'pángbiān', hv:'bàng biên', vi:'bên cạnh', pos:'danh từ' },
        { zh:'东西', pinyin:'dōngxi', hv:'đông tây', vi:'đồ vật, đồ đạc', pos:'danh từ' },
        { zh:'手机', pinyin:'shǒujī', hv:'thủ cơ', vi:'điện thoại di động', pos:'danh từ' },
        { zh:'电脑', pinyin:'diànnǎo', hv:'điện não', vi:'máy tính', pos:'danh từ' },
        { zh:'报纸', pinyin:'bàozhǐ', hv:'báo chỉ', vi:'báo (tờ báo)', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我的手机在哪儿？', pinyin:'Wǒ de shǒujī zài nǎr?', vi:'Điện thoại của mình đâu rồi?' },
        { sp:'B', zh:'在桌子上放着呢。', pinyin:'Zài zhuōzi shang fàng zhe ne.', vi:'Đang để trên bàn đấy.' },
        { sp:'A', zh:'桌子上还有什么？', pinyin:'Zhuōzi shang hái yǒu shénme?', vi:'Trên bàn còn gì nữa?' },
        { sp:'B', zh:'有电脑、报纸和一杯茶。', pinyin:'Yǒu diànnǎo, bàozhǐ hé yì bēi chá.', vi:'Có máy tính, báo và một cốc trà.' }
      ]
    },

    {
      level:'hsk2', no:6, zh:'你怎么不吃了', pinyin:'Nǐ zěnme bù chī le', vi:'Sao bạn không ăn nữa',
      skill:'Hỏi nguyên do với 怎么; 了 chỉ thay đổi; V một chút',
      grammar:[
        { form:'怎么 + V ?', vi:'“sao lại…?”',
          note:'怎么 hỏi nguyên nhân/cách thức. Vd 你怎么不吃了？ / 这个字怎么写？',
          ex:{ zh:'你怎么不舒服？', pinyin:'Nǐ zěnme bù shūfu?', vi:'Sao bạn thấy không khoẻ?' } },
        { form:'V + 一下 / … + 了 (thay đổi)', vi:'“làm một chút” / “… rồi (đổi trạng thái)”',
          note:'一下 làm nhẹ/thử một chút: 休息一下. 了 ở cuối câu chỉ tình huống mới: 我不想吃了 (không muốn ăn nữa).',
          ex:{ zh:'我们休息一下吧。', pinyin:'Wǒmen xiūxi yíxià ba.', vi:'Chúng ta nghỉ một chút nhé.' } }
      ],
      vocab:[
        { zh:'怎么', pinyin:'zěnme', hv:'chẩm ma', vi:'làm sao; thế nào', pos:'đại từ nghi vấn' },
        { zh:'已经', pinyin:'yǐjīng', hv:'dĩ kinh', vi:'đã, đã rồi', pos:'phó từ' },
        { zh:'饱', pinyin:'bǎo', hv:'bão', vi:'no', pos:'tính từ' },
        { zh:'饿', pinyin:'è', hv:'ngạ', vi:'đói', pos:'tính từ' },
        { zh:'生病', pinyin:'shēngbìng', hv:'sinh bệnh', vi:'bị ốm', pos:'động từ' },
        { zh:'药', pinyin:'yào', hv:'dược', vi:'thuốc', pos:'danh từ' },
        { zh:'休息', pinyin:'xiūxi', hv:'hưu tức', vi:'nghỉ ngơi', pos:'động từ' },
        { zh:'舒服', pinyin:'shūfu', hv:'thư phục', vi:'dễ chịu, khoẻ', pos:'tính từ' },
        { zh:'慢慢', pinyin:'mànmàn', hv:'mạn mạn', vi:'từ từ, chậm rãi', pos:'phó từ' },
        { zh:'一下', pinyin:'yíxià', hv:'nhất hạ', vi:'một chút, thử', pos:'số lượng' }
      ],
      dialogue:[
        { sp:'A', zh:'你怎么不吃了？', pinyin:'Nǐ zěnme bù chī le?', vi:'Sao bạn không ăn nữa?' },
        { sp:'B', zh:'我已经饱了。', pinyin:'Wǒ yǐjīng bǎo le.', vi:'Mình no rồi.' },
        { sp:'A', zh:'你不舒服吗？', pinyin:'Nǐ bù shūfu ma?', vi:'Bạn không khoẻ à?' },
        { sp:'B', zh:'有点儿累，想休息一下。', pinyin:'Yǒudiǎnr lèi, xiǎng xiūxi yíxià.', vi:'Hơi mệt, muốn nghỉ một chút.' }
      ]
    },

    {
      level:'hsk2', no:7, zh:'就买这件吧', pinyin:'Jiù mǎi zhè jiàn ba', vi:'Mua chiếc này đi',
      skill:'So sánh với 比; nhấn mạnh quyết định với 就',
      grammar:[
        { form:'A 比 B + tính từ', vi:'“A … hơn B”',
          note:'比 bǐ dùng để so sánh. Vd 这件比那件贵 / 我比你高. Thêm mức độ: 大一点儿, 高很多.',
          ex:{ zh:'这件衣服比那件长。', pinyin:'Zhè jiàn yīfu bǐ nà jiàn cháng.', vi:'Chiếc áo này dài hơn chiếc kia.' } },
        { form:'就 + V', vi:'“(vậy) thì… (quyết định)”',
          note:'就 jiù nhấn mạnh sự lựa chọn/kết luận. Vd 就买这件吧 / 那就这样.',
          ex:{ zh:'我们就坐这儿吧。', pinyin:'Wǒmen jiù zuò zhèr ba.', vi:'Vậy mình ngồi đây nhé.' } }
      ],
      vocab:[
        { zh:'比', pinyin:'bǐ', hv:'bỉ', vi:'so với; hơn', pos:'giới từ' },
        { zh:'一样', pinyin:'yíyàng', hv:'nhất dạng', vi:'giống nhau, như nhau', pos:'tính từ' },
        { zh:'就', pinyin:'jiù', hv:'tựu', vi:'thì, liền, ngay', pos:'phó từ' },
        { zh:'或者', pinyin:'huòzhě', hv:'hoặc giả', vi:'hoặc', pos:'liên từ' },
        { zh:'种', pinyin:'zhǒng', hv:'chủng', vi:'loại (lượng từ)', pos:'lượng từ' },
        { zh:'真', pinyin:'zhēn', hv:'chân', vi:'thật, thật là', pos:'phó từ' },
        { zh:'长', pinyin:'cháng', hv:'trường', vi:'dài', pos:'tính từ' },
        { zh:'短', pinyin:'duǎn', hv:'đoản', vi:'ngắn', pos:'tính từ' },
        { zh:'黑', pinyin:'hēi', hv:'hắc', vi:'đen', pos:'tính từ' },
        { zh:'白', pinyin:'bái', hv:'bạch', vi:'trắng', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'这件和那件，哪件好？', pinyin:'Zhè jiàn hé nà jiàn, nǎ jiàn hǎo?', vi:'Chiếc này với chiếc kia, chiếc nào đẹp?' },
        { sp:'B', zh:'这件比那件长一点儿。', pinyin:'Zhè jiàn bǐ nà jiàn cháng yìdiǎnr.', vi:'Chiếc này dài hơn chiếc kia một chút.' },
        { sp:'A', zh:'颜色都是黑的，真好看。', pinyin:'Yánsè dōu shì hēi de, zhēn hǎokàn.', vi:'Màu đều đen, thật đẹp.' },
        { sp:'B', zh:'那就买这件吧。', pinyin:'Nà jiù mǎi zhè jiàn ba.', vi:'Vậy mua chiếc này đi.' }
      ]
    },

    {
      level:'hsk2', no:8, zh:'左边红色的是我的', pinyin:'Zuǒbian hóngsè de shì wǒ de', vi:'Cái màu đỏ bên trái là của tôi',
      skill:'Màu sắc; “cái…” lược danh từ với 的; vị trí trái/phải',
      grammar:[
        { form:'tính từ / N + 的', vi:'“cái (…)” — lược danh từ',
          note:'的 đứng sau tính từ/danh từ, thay cho danh từ đã hiểu. Vd 红色的 (cái màu đỏ), 大的, 我的.',
          ex:{ zh:'红色的是我的，蓝色的是他的。', pinyin:'Hóngsè de shì wǒ de, lánsè de shì tā de.', vi:'Cái đỏ là của tôi, cái xanh là của cậu ấy.' } },
        { form:'左边 / 右边 / 中间', vi:'trái / phải / giữa',
          note:'Từ chỉ vị trí, thường + 的: 左边的书, 中间那个.',
          ex:{ zh:'右边的是新的。', pinyin:'Yòubian de shì xīn de.', vi:'Cái bên phải là cái mới.' } }
      ],
      vocab:[
        { zh:'颜色', pinyin:'yánsè', hv:'nhan sắc', vi:'màu sắc', pos:'danh từ' },
        { zh:'红', pinyin:'hóng', hv:'hồng', vi:'đỏ', pos:'tính từ' },
        { zh:'蓝', pinyin:'lán', hv:'lam', vi:'xanh dương', pos:'tính từ' },
        { zh:'绿', pinyin:'lǜ', hv:'lục', vi:'xanh lá', pos:'tính từ' },
        { zh:'黄', pinyin:'huáng', hv:'hoàng', vi:'vàng', pos:'tính từ' },
        { zh:'左边', pinyin:'zuǒbian', hv:'tả biên', vi:'bên trái', pos:'danh từ' },
        { zh:'右边', pinyin:'yòubian', hv:'hữu biên', vi:'bên phải', pos:'danh từ' },
        { zh:'中间', pinyin:'zhōngjiān', hv:'trung gian', vi:'ở giữa', pos:'danh từ' },
        { zh:'好看', pinyin:'hǎokàn', hv:'hảo khán', vi:'đẹp, đẹp mắt', pos:'tính từ' },
        { zh:'双', pinyin:'shuāng', hv:'song', vi:'đôi (lượng từ)', pos:'lượng từ' }
      ],
      dialogue:[
        { sp:'A', zh:'哪个是你的？', pinyin:'Nǎge shì nǐ de?', vi:'Cái nào là của bạn?' },
        { sp:'B', zh:'左边红色的是我的。', pinyin:'Zuǒbian hóngsè de shì wǒ de.', vi:'Cái màu đỏ bên trái là của mình.' },
        { sp:'A', zh:'右边蓝色的呢？', pinyin:'Yòubian lánsè de ne?', vi:'Còn cái màu xanh bên phải?' },
        { sp:'B', zh:'那个是我朋友的。', pinyin:'Nàge shì wǒ péngyou de.', vi:'Cái đó là của bạn mình.' }
      ]
    },

    {
      level:'hsk2', no:9, zh:'用了三个小时才做完', pinyin:'Yòng le sān ge xiǎoshí cái zuò wán', vi:'Mất ba tiếng mới làm xong',
      skill:'Bổ ngữ kết quả 完; 才 (muộn/ít) so với 就 (sớm); thời lượng',
      grammar:[
        { form:'V + 完 / 好', vi:'bổ ngữ kết quả “xong”',
          note:'Chỉ hành động hoàn tất. Vd 做完 (làm xong), 吃完, 写好. Phủ định: 没做完.',
          ex:{ zh:'我做完作业了。', pinyin:'Wǒ zuò wán zuòyè le.', vi:'Tôi làm xong bài tập rồi.' } },
        { form:'才 (muộn/ít) ↔ 就 (sớm)', vi:'“mãi mới” ↔ “đã… (sớm)”',
          note:'才 hàm ý muộn/ít hơn mong đợi; 就 hàm ý sớm/nhanh. Vd 八点才起床 / 六点就起床.',
          ex:{ zh:'他用了三个小时才做完。', pinyin:'Tā yòng le sān ge xiǎoshí cái zuò wán.', vi:'Anh ấy mất ba tiếng mới làm xong.' } }
      ],
      vocab:[
        { zh:'小时', pinyin:'xiǎoshí', hv:'tiểu thời', vi:'giờ (đồng hồ)', pos:'danh từ' },
        { zh:'才', pinyin:'cái', hv:'tài', vi:'mãi mới; mới', pos:'phó từ' },
        { zh:'完', pinyin:'wán', hv:'hoàn', vi:'xong, hết', pos:'động từ; bổ ngữ' },
        { zh:'分钟', pinyin:'fēnzhōng', hv:'phân chung', vi:'phút', pos:'danh từ' },
        { zh:'用', pinyin:'yòng', hv:'dụng', vi:'dùng; mất (thời gian)', pos:'động từ' },
        { zh:'花', pinyin:'huā', hv:'hoa', vi:'tiêu, tốn (tiền/giờ)', pos:'động từ' },
        { zh:'刚', pinyin:'gāng', hv:'cương', vi:'vừa mới', pos:'phó từ' },
        { zh:'作业', pinyin:'zuòyè', hv:'tác nghiệp', vi:'bài tập', pos:'danh từ' },
        { zh:'每', pinyin:'měi', hv:'mỗi', vi:'mỗi', pos:'đại từ' },
        { zh:'总是', pinyin:'zǒngshì', hv:'tổng thị', vi:'luôn luôn', pos:'phó từ' }
      ],
      dialogue:[
        { sp:'A', zh:'作业做完了吗？', pinyin:'Zuòyè zuò wán le ma?', vi:'Bài tập làm xong chưa?' },
        { sp:'B', zh:'刚做完，用了三个小时才做完。', pinyin:'Gāng zuò wán, yòng le sān ge xiǎoshí cái zuò wán.', vi:'Vừa xong, mất ba tiếng mới làm xong.' },
        { sp:'A', zh:'这么久！', pinyin:'Zhème jiǔ!', vi:'Lâu thế!' },
        { sp:'B', zh:'是啊，花了很多时间。', pinyin:'Shì a, huā le hěn duō shíjiān.', vi:'Ừ, tốn nhiều thời gian lắm.' }
      ]
    },

    {
      level:'hsk2', no:10, zh:'你哥哥结婚了吗', pinyin:'Nǐ gēge jiéhūn le ma', vi:'Anh trai bạn kết hôn chưa',
      skill:'Gia đình; 了 (đã xảy ra) và 还没… (chưa)',
      grammar:[
        { form:'V + 了 (吗)？', vi:'“đã… (chưa)?”',
          note:'了 chỉ việc đã xảy ra. Hỏi: 结婚了吗？ Trả lời khẳng định: 结婚了.',
          ex:{ zh:'他结婚了。', pinyin:'Tā jiéhūn le.', vi:'Anh ấy kết hôn rồi.' } },
        { form:'还没(有) + V (呢)', vi:'“vẫn chưa…”',
          note:'Phủ định “chưa (làm)”. Vd 我还没吃饭 / 她还没结婚呢.',
          ex:{ zh:'我妹妹还没结婚。', pinyin:'Wǒ mèimei hái méi jiéhūn.', vi:'Em gái mình vẫn chưa kết hôn.' } }
      ],
      vocab:[
        { zh:'哥哥', pinyin:'gēge', hv:'ca ca', vi:'anh trai', pos:'danh từ' },
        { zh:'姐姐', pinyin:'jiějie', hv:'tỉ tỉ', vi:'chị gái', pos:'danh từ' },
        { zh:'弟弟', pinyin:'dìdi', hv:'đệ đệ', vi:'em trai', pos:'danh từ' },
        { zh:'妹妹', pinyin:'mèimei', hv:'muội muội', vi:'em gái', pos:'danh từ' },
        { zh:'结婚', pinyin:'jiéhūn', hv:'kết hôn', vi:'kết hôn', pos:'động từ' },
        { zh:'孩子', pinyin:'háizi', hv:'hài tử', vi:'con; đứa trẻ', pos:'danh từ' },
        { zh:'妻子', pinyin:'qīzi', hv:'thê tử', vi:'vợ', pos:'danh từ' },
        { zh:'丈夫', pinyin:'zhàngfu', hv:'trượng phu', vi:'chồng', pos:'danh từ' },
        { zh:'没', pinyin:'méi', hv:'một', vi:'không; chưa (có)', pos:'phó từ' },
        { zh:'又', pinyin:'yòu', hv:'hựu', vi:'lại (đã xảy ra)', pos:'phó từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你哥哥结婚了吗？', pinyin:'Nǐ gēge jiéhūn le ma?', vi:'Anh trai bạn kết hôn chưa?' },
        { sp:'B', zh:'结婚了，还有一个孩子。', pinyin:'Jiéhūn le, hái yǒu yí ge háizi.', vi:'Kết hôn rồi, còn có một đứa con.' },
        { sp:'A', zh:'你姐姐呢？', pinyin:'Nǐ jiějie ne?', vi:'Còn chị gái bạn?' },
        { sp:'B', zh:'她还没结婚。', pinyin:'Tā hái méi jiéhūn.', vi:'Chị ấy vẫn chưa kết hôn.' }
      ]
    },

    {
      level:'hsk2', no:11, zh:'先坐地铁再换公交', pinyin:'Xiān zuò dìtiě zài huàn gōngjiāo', vi:'Đi tàu điện ngầm trước rồi đổi xe buýt',
      skill:'Phương tiện đi lại; trình tự 先… 再…',
      grammar:[
        { form:'先 V₁ ，再 V₂', vi:'“…trước, rồi mới…”',
          note:'Chỉ thứ tự hành động. Vd 先坐地铁，再换公交 / 先做作业，再看电视.',
          ex:{ zh:'我们先吃饭，再去公司。', pinyin:'Wǒmen xiān chīfàn, zài qù gōngsī.', vi:'Mình ăn cơm trước, rồi đến công ty.' } },
        { form:'坐 / 骑 + phương tiện', vi:'“đi bằng…”',
          note:'坐 cho xe/tàu/máy bay: 坐地铁; 骑 cho xe đạp/xe máy: 骑自行车.',
          ex:{ zh:'我骑自行车去学校。', pinyin:'Wǒ qí zìxíngchē qù xuéxiào.', vi:'Tôi đạp xe đến trường.' } }
      ],
      vocab:[
        { zh:'地铁', pinyin:'dìtiě', hv:'địa thiết', vi:'tàu điện ngầm', pos:'danh từ' },
        { zh:'公共汽车', pinyin:'gōnggòng qìchē', hv:'công cộng khí xa', vi:'xe buýt', pos:'danh từ' },
        { zh:'换', pinyin:'huàn', hv:'hoán', vi:'đổi, chuyển', pos:'động từ' },
        { zh:'先', pinyin:'xiān', hv:'tiên', vi:'trước, đầu tiên', pos:'phó từ' },
        { zh:'再', pinyin:'zài', hv:'tái', vi:'rồi mới; lại', pos:'phó từ' },
        { zh:'路', pinyin:'lù', hv:'lộ', vi:'đường; tuyến', pos:'danh từ' },
        { zh:'站', pinyin:'zhàn', hv:'trạm', vi:'bến, ga, trạm', pos:'danh từ' },
        { zh:'到', pinyin:'dào', hv:'đáo', vi:'đến, tới', pos:'động từ' },
        { zh:'骑', pinyin:'qí', hv:'kỵ', vi:'cưỡi, đạp (xe)', pos:'động từ' },
        { zh:'自行车', pinyin:'zìxíngchē', hv:'tự hành xa', vi:'xe đạp', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你怎么去公司？', pinyin:'Nǐ zěnme qù gōngsī?', vi:'Bạn đi công ty bằng gì?' },
        { sp:'B', zh:'我先坐地铁，再换公共汽车。', pinyin:'Wǒ xiān zuò dìtiě, zài huàn gōnggòng qìchē.', vi:'Mình đi tàu điện ngầm trước, rồi đổi xe buýt.' },
        { sp:'A', zh:'远吗？', pinyin:'Yuǎn ma?', vi:'Xa không?' },
        { sp:'B', zh:'有点儿远，要一个小时。', pinyin:'Yǒudiǎnr yuǎn, yào yí ge xiǎoshí.', vi:'Hơi xa, mất một tiếng.' }
      ]
    },

    {
      level:'hsk2', no:12, zh:'别忘了带护照', pinyin:'Bié wàng le dài hùzhào', vi:'Đừng quên mang hộ chiếu',
      skill:'Nhắc nhở/cấm với 别; chuẩn bị đi lại',
      grammar:[
        { form:'别 + V (了)', vi:'“đừng…”',
          note:'别 bié dùng để khuyên/cấm nhẹ. Vd 别走 / 别忘了带护照 / 别迟到.',
          ex:{ zh:'别忘了带手机。', pinyin:'Bié wàng le dài shǒujī.', vi:'Đừng quên mang điện thoại.' } },
        { form:'坐 + 飞机 / 火车', vi:'“đi máy bay / tàu hoả”',
          note:'Phương tiện đường dài dùng 坐: 坐飞机, 坐火车. Mua vé: 买票.',
          ex:{ zh:'我们坐飞机去。', pinyin:'Wǒmen zuò fēijī qù.', vi:'Chúng ta đi máy bay.' } }
      ],
      vocab:[
        { zh:'别', pinyin:'bié', hv:'biệt', vi:'đừng, chớ', pos:'phó từ' },
        { zh:'忘', pinyin:'wàng', hv:'vong', vi:'quên', pos:'động từ' },
        { zh:'带', pinyin:'dài', hv:'đới', vi:'mang, dẫn theo', pos:'động từ' },
        { zh:'护照', pinyin:'hùzhào', hv:'hộ chiếu', vi:'hộ chiếu', pos:'danh từ' },
        { zh:'机场', pinyin:'jīchǎng', hv:'cơ trường', vi:'sân bay', pos:'danh từ' },
        { zh:'飞机', pinyin:'fēijī', hv:'phi cơ', vi:'máy bay', pos:'danh từ' },
        { zh:'火车', pinyin:'huǒchē', hv:'hoả xa', vi:'tàu hoả', pos:'danh từ' },
        { zh:'票', pinyin:'piào', hv:'phiếu', vi:'vé', pos:'danh từ' },
        { zh:'出发', pinyin:'chūfā', hv:'xuất phát', vi:'xuất phát, khởi hành', pos:'động từ' },
        { zh:'准备', pinyin:'zhǔnbèi', hv:'chuẩn bị', vi:'chuẩn bị', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'明天去机场，别忘了带护照。', pinyin:'Míngtiān qù jīchǎng, bié wàng le dài hùzhào.', vi:'Mai ra sân bay, đừng quên mang hộ chiếu.' },
        { sp:'B', zh:'好，我已经准备好了。', pinyin:'Hǎo, wǒ yǐjīng zhǔnbèi hǎo le.', vi:'Được, mình chuẩn bị xong rồi.' },
        { sp:'A', zh:'我们几点出发？', pinyin:'Wǒmen jǐ diǎn chūfā?', vi:'Mấy giờ mình khởi hành?' },
        { sp:'B', zh:'早上六点。', pinyin:'Zǎoshang liù diǎn.', vi:'6 giờ sáng.' }
      ]
    },

    {
      level:'hsk2', no:13, zh:'我把材料带来了', pinyin:'Wǒ bǎ cáiliào dài lái le', vi:'Tôi đã mang tài liệu tới',
      skill:'Câu chữ 把; bổ ngữ xu hướng 来/去',
      grammar:[
        { form:'把 + O + V + …', vi:'câu chữ 把 — xử lý tân ngữ',
          note:'Nhấn “đem/lấy (tân ngữ) mà làm gì”. Sau động từ phải có thành phần khác. Vd 我把书带来了 / 请把门关上.',
          ex:{ zh:'请把门关上。', pinyin:'Qǐng bǎ mén guān shàng.', vi:'Làm ơn đóng cửa lại.' } },
        { form:'V + 来 / 去', vi:'bổ ngữ xu hướng',
          note:'来 hướng về người nói, 去 hướng ra xa: 带来 (mang tới), 拿去 (cầm đi).',
          ex:{ zh:'我把材料带来了。', pinyin:'Wǒ bǎ cáiliào dài lái le.', vi:'Tôi đã mang tài liệu tới.' } }
      ],
      vocab:[
        { zh:'把', pinyin:'bǎ', hv:'bả', vi:'đem, lấy (chữ 把)', pos:'giới từ' },
        { zh:'材料', pinyin:'cáiliào', hv:'tài liệu', vi:'tài liệu; vật liệu', pos:'danh từ' },
        { zh:'拿', pinyin:'ná', hv:'nã', vi:'cầm, lấy', pos:'động từ' },
        { zh:'关', pinyin:'guān', hv:'quan', vi:'đóng; tắt', pos:'động từ' },
        { zh:'门', pinyin:'mén', hv:'môn', vi:'cửa', pos:'danh từ' },
        { zh:'找', pinyin:'zhǎo', hv:'trảo', vi:'tìm', pos:'động từ' },
        { zh:'事情', pinyin:'shìqing', hv:'sự tình', vi:'việc, sự việc', pos:'danh từ' },
        { zh:'完成', pinyin:'wánchéng', hv:'hoàn thành', vi:'hoàn thành', pos:'động từ' },
        { zh:'记得', pinyin:'jìde', hv:'ký đắc', vi:'nhớ', pos:'động từ' },
        { zh:'忘记', pinyin:'wàngjì', hv:'vong ký', vi:'quên', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你把我要的材料带来了吗？', pinyin:'Nǐ bǎ wǒ yào de cáiliào dài lái le ma?', vi:'Bạn mang tài liệu mình cần tới chưa?' },
        { sp:'B', zh:'带来了，都在这儿。', pinyin:'Dài lái le, dōu zài zhèr.', vi:'Mang tới rồi, đều ở đây.' },
        { sp:'A', zh:'谢谢！请把门关上。', pinyin:'Xièxie! Qǐng bǎ mén guān shàng.', vi:'Cảm ơn! Đóng giúp cửa lại nhé.' },
        { sp:'B', zh:'好的。', pinyin:'Hǎo de.', vi:'Được.' }
      ]
    },

    {
      level:'hsk2', no:14, zh:'我给你打电话', pinyin:'Wǒ gěi nǐ dǎ diànhuà', vi:'Tôi gọi điện cho bạn',
      skill:'Gọi điện, nhắn tin; hành động đang diễn ra 正在',
      grammar:[
        { form:'给 + ai + 打电话', vi:'“gọi điện cho ai”',
          note:'给 chỉ đối tượng. Vd 我给你打电话 / 给妈妈发短信.',
          ex:{ zh:'晚上我给你打电话。', pinyin:'Wǎnshang wǒ gěi nǐ dǎ diànhuà.', vi:'Tối mình gọi cho bạn.' } },
        { form:'正在 + V (呢)', vi:'“đang…”',
          note:'Nhấn hành động đang diễn ra ngay lúc đó. Vd 我正在开会呢 / 他正在打电话.',
          ex:{ zh:'我正在开会呢。', pinyin:'Wǒ zhèngzài kāihuì ne.', vi:'Mình đang họp mà.' } }
      ],
      vocab:[
        { zh:'电话', pinyin:'diànhuà', hv:'điện thoại', vi:'điện thoại; cuộc gọi', pos:'danh từ' },
        { zh:'打电话', pinyin:'dǎ diànhuà', hv:'đả điện thoại', vi:'gọi điện', pos:'động từ' },
        { zh:'发', pinyin:'fā', hv:'phát', vi:'gửi, phát', pos:'động từ' },
        { zh:'短信', pinyin:'duǎnxìn', hv:'đoản tín', vi:'tin nhắn', pos:'danh từ' },
        { zh:'正在', pinyin:'zhèngzài', hv:'chính tại', vi:'đang', pos:'phó từ' },
        { zh:'告诉', pinyin:'gàosu', hv:'cáo tố', vi:'nói cho, bảo', pos:'động từ' },
        { zh:'问题', pinyin:'wèntí', hv:'vấn đề', vi:'câu hỏi; vấn đề', pos:'danh từ' },
        { zh:'回答', pinyin:'huídá', hv:'hồi đáp', vi:'trả lời', pos:'động từ' },
        { zh:'号码', pinyin:'hàomǎ', hv:'hiệu mã', vi:'số (điện thoại)', pos:'danh từ' },
        { zh:'接', pinyin:'jiē', hv:'tiếp', vi:'nghe (máy); đón', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'昨天我给你打电话，你没接。', pinyin:'Zuótiān wǒ gěi nǐ dǎ diànhuà, nǐ méi jiē.', vi:'Hôm qua mình gọi cho bạn, bạn không nghe máy.' },
        { sp:'B', zh:'对不起，我正在开会呢。', pinyin:'Duìbuqǐ, wǒ zhèngzài kāihuì ne.', vi:'Xin lỗi, lúc đó mình đang họp.' },
        { sp:'A', zh:'有个问题想问你。', pinyin:'Yǒu ge wèntí xiǎng wèn nǐ.', vi:'Có một vấn đề muốn hỏi bạn.' },
        { sp:'B', zh:'你说，我告诉你。', pinyin:'Nǐ shuō, wǒ gàosu nǐ.', vi:'Bạn nói đi, mình trả lời cho.' }
      ]
    },

    {
      level:'hsk2', no:15, zh:'天气越来越冷', pinyin:'Tiānqì yuèláiyuè lěng', vi:'Trời ngày càng lạnh',
      skill:'Mùa và thời tiết; “ngày càng…” và “hễ… là…”',
      grammar:[
        { form:'越来越 + tính từ', vi:'“ngày càng…”',
          note:'Chỉ mức độ tăng dần theo thời gian. Vd 天气越来越冷 / 汉语越来越难.',
          ex:{ zh:'天气越来越冷了。', pinyin:'Tiānqì yuèláiyuè lěng le.', vi:'Thời tiết ngày càng lạnh.' } },
        { form:'一 V₁ 就 V₂', vi:'“hễ… là…”',
          note:'Hành động sau xảy ra ngay khi hành động trước xong. Vd 我一回家就睡觉 / 一下雨就冷.',
          ex:{ zh:'我一到冬天就想家。', pinyin:'Wǒ yí dào dōngtiān jiù xiǎng jiā.', vi:'Cứ đến mùa đông là tôi nhớ nhà.' } }
      ],
      vocab:[
        { zh:'越来越', pinyin:'yuèláiyuè', hv:'việt lai việt', vi:'ngày càng', pos:'phó từ' },
        { zh:'季节', pinyin:'jìjié', hv:'quý tiết', vi:'mùa', pos:'danh từ' },
        { zh:'春天', pinyin:'chūntiān', hv:'xuân thiên', vi:'mùa xuân', pos:'danh từ' },
        { zh:'夏天', pinyin:'xiàtiān', hv:'hạ thiên', vi:'mùa hè', pos:'danh từ' },
        { zh:'秋天', pinyin:'qiūtiān', hv:'thu thiên', vi:'mùa thu', pos:'danh từ' },
        { zh:'冬天', pinyin:'dōngtiān', hv:'đông thiên', vi:'mùa đông', pos:'danh từ' },
        { zh:'雪', pinyin:'xuě', hv:'tuyết', vi:'tuyết', pos:'danh từ' },
        { zh:'晴', pinyin:'qíng', hv:'tình', vi:'nắng, quang đãng', pos:'tính từ' },
        { zh:'阴', pinyin:'yīn', hv:'âm', vi:'âm u, râm', pos:'tính từ' },
        { zh:'刮风', pinyin:'guāfēng', hv:'quát phong', vi:'nổi gió, có gió', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'天气越来越冷了。', pinyin:'Tiānqì yuèláiyuè lěng le.', vi:'Trời ngày càng lạnh rồi.' },
        { sp:'B', zh:'是啊，冬天到了。', pinyin:'Shì a, dōngtiān dào le.', vi:'Ừ, mùa đông tới rồi.' },
        { sp:'A', zh:'你喜欢哪个季节？', pinyin:'Nǐ xǐhuan nǎge jìjié?', vi:'Bạn thích mùa nào?' },
        { sp:'B', zh:'我喜欢春天，不冷不热。', pinyin:'Wǒ xǐhuan chūntiān, bù lěng bú rè.', vi:'Mình thích mùa xuân, không lạnh không nóng.' }
      ]
    },

    /* ================= HSK 3 ================= */
    {
      level:'hsk3', no:1, zh:'周末你有什么打算', pinyin:'Zhōumò nǐ yǒu shénme dǎsuàn', vi:'Cuối tuần bạn định làm gì',
      skill:'Nói về dự định; “ngoài… ra còn…”',
      grammar:[
        { form:'打算 + V', vi:'“định / dự định (làm gì)”',
          note:'打算 dǎsuàn diễn tả kế hoạch. Vd 我打算去旅游 / 你打算什么时候回国？',
          ex:{ zh:'周末我打算去爬山。', pinyin:'Zhōumò wǒ dǎsuàn qù páshān.', vi:'Cuối tuần tôi định đi leo núi.' } },
        { form:'除了 A (以外)，还/也 B', vi:'“ngoài A ra, còn B”',
          note:'Thêm vào: 除了看书以外，我还喜欢运动. Loại trừ thì dùng 都: 除了他以外，大家都来了.',
          ex:{ zh:'除了休息以外，我还想去公园。', pinyin:'Chúle xiūxi yǐwài, wǒ hái xiǎng qù gōngyuán.', vi:'Ngoài nghỉ ngơi ra, tôi còn muốn đi công viên.' } }
      ],
      vocab:[
        { zh:'周末', pinyin:'zhōumò', hv:'chu mạt', vi:'cuối tuần', pos:'danh từ' },
        { zh:'打算', pinyin:'dǎsuàn', hv:'đả toán', vi:'định, dự định', pos:'động từ; danh từ' },
        { zh:'除了', pinyin:'chúle', hv:'trừ liễu', vi:'ngoài (… ra)', pos:'giới từ' },
        { zh:'以外', pinyin:'yǐwài', hv:'dĩ ngoại', vi:'ngoài ra', pos:'danh từ' },
        { zh:'爬山', pinyin:'páshān', hv:'bà sơn', vi:'leo núi', pos:'động từ' },
        { zh:'公园', pinyin:'gōngyuán', hv:'công viên', vi:'công viên', pos:'danh từ' },
        { zh:'一般', pinyin:'yìbān', hv:'nhất ban', vi:'thường; bình thường', pos:'phó từ; tính từ' },
        { zh:'有时候', pinyin:'yǒushíhou', hv:'hữu thời hậu', vi:'đôi khi', pos:'phó từ' },
        { zh:'安静', pinyin:'ānjìng', hv:'an tĩnh', vi:'yên tĩnh', pos:'tính từ' },
        { zh:'热闹', pinyin:'rènao', hv:'nhiệt náo', vi:'náo nhiệt', pos:'tính từ' },
        { zh:'地方', pinyin:'dìfang', hv:'địa phương', vi:'nơi, chỗ', pos:'danh từ' },
        { zh:'计划', pinyin:'jìhuà', hv:'kế hoạch', vi:'kế hoạch', pos:'danh từ; động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'周末你有什么打算？', pinyin:'Zhōumò nǐ yǒu shénme dǎsuàn?', vi:'Cuối tuần bạn định làm gì?' },
        { sp:'B', zh:'我打算去爬山，你呢？', pinyin:'Wǒ dǎsuàn qù páshān, nǐ ne?', vi:'Mình định đi leo núi, còn bạn?' },
        { sp:'A', zh:'除了休息以外，我还想去公园走走。', pinyin:'Chúle xiūxi yǐwài, wǒ hái xiǎng qù gōngyuán zǒuzou.', vi:'Ngoài nghỉ ngơi ra, mình còn muốn ra công viên đi dạo.' },
        { sp:'B', zh:'那个公园很安静，是个好地方。', pinyin:'Nàge gōngyuán hěn ānjìng, shì ge hǎo dìfang.', vi:'Công viên đó rất yên tĩnh, là chỗ đẹp.' }
      ]
    },

    {
      level:'hsk3', no:2, zh:'他什么时候回来', pinyin:'Tā shénme shíhou huílái', vi:'Khi nào anh ấy về',
      skill:'Bổ ngữ xu hướng 来/去; nói việc đã kéo dài bao lâu',
      grammar:[
        { form:'V + 来 / 去 (回来·进去·出来…)', vi:'bổ ngữ xu hướng',
          note:'来 hướng về phía người nói, 去 hướng ra xa. Vd 他回来了 / 你进来吧 / 我们出去玩.',
          ex:{ zh:'经理下星期回来。', pinyin:'Jīnglǐ xià xīngqī huílái.', vi:'Giám đốc tuần sau về.' } },
        { form:'V + 了 + thời lượng + 了', vi:'“đã… được (bao lâu) rồi”',
          note:'Diễn tả hành động kéo dài tới hiện tại. Vd 他去了三天了 / 我学了两年汉语了.',
          ex:{ zh:'他已经出差三天了。', pinyin:'Tā yǐjīng chūchāi sān tiān le.', vi:'Anh ấy đi công tác được ba ngày rồi.' } }
      ],
      vocab:[
        { zh:'回来', pinyin:'huílái', hv:'hồi lai', vi:'trở về (phía người nói)', pos:'động từ' },
        { zh:'回去', pinyin:'huíqù', hv:'hồi khứ', vi:'đi về, quay về', pos:'động từ' },
        { zh:'进来', pinyin:'jìnlái', hv:'tiến lai', vi:'đi vào (đây)', pos:'động từ' },
        { zh:'出去', pinyin:'chūqù', hv:'xuất khứ', vi:'đi ra (ngoài)', pos:'động từ' },
        { zh:'出差', pinyin:'chūchāi', hv:'xuất sai', vi:'đi công tác', pos:'động từ' },
        { zh:'大概', pinyin:'dàgài', hv:'đại khái', vi:'khoảng, đại khái', pos:'phó từ' },
        { zh:'可能', pinyin:'kěnéng', hv:'khả năng', vi:'có thể, có lẽ', pos:'phó từ' },
        { zh:'一定', pinyin:'yídìng', hv:'nhất định', vi:'nhất định', pos:'phó từ' },
        { zh:'马上', pinyin:'mǎshàng', hv:'mã thượng', vi:'ngay lập tức', pos:'phó từ' },
        { zh:'办公室', pinyin:'bàngōngshì', hv:'biện công thất', vi:'văn phòng', pos:'danh từ' },
        { zh:'会议', pinyin:'huìyì', hv:'hội nghị', vi:'cuộc họp', pos:'danh từ' },
        { zh:'参加', pinyin:'cānjiā', hv:'tham gia', vi:'tham gia, dự', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'经理什么时候回来？', pinyin:'Jīnglǐ shénme shíhou huílái?', vi:'Khi nào giám đốc về?' },
        { sp:'B', zh:'他出差了，大概下星期回来。', pinyin:'Tā chūchāi le, dàgài xià xīngqī huílái.', vi:'Anh ấy đi công tác, khoảng tuần sau về.' },
        { sp:'A', zh:'他去了几天了？', pinyin:'Tā qù le jǐ tiān le?', vi:'Anh ấy đi được mấy ngày rồi?' },
        { sp:'B', zh:'已经去了三天了。会议可能要等他回来。', pinyin:'Yǐjīng qù le sān tiān le. Huìyì kěnéng yào děng tā huílái.', vi:'Đi được ba ngày rồi. Cuộc họp có lẽ phải đợi anh ấy về.' }
      ]
    },

    {
      level:'hsk3', no:3, zh:'我看得懂中文报纸', pinyin:'Wǒ kàn de dǒng Zhōngwén bàozhǐ', vi:'Tôi đọc hiểu được báo tiếng Trung',
      skill:'Bổ ngữ khả năng V得/不…; “càng… càng…”',
      grammar:[
        { form:'V + 得 / 不 + bổ ngữ', vi:'“có thể / không thể (làm được)”',
          note:'Khả năng đạt kết quả: 看得懂 / 看不懂, 听得清楚 / 听不清楚, 做得完 / 做不完.',
          ex:{ zh:'这个字我看不懂。', pinyin:'Zhège zì wǒ kàn bu dǒng.', vi:'Chữ này tôi đọc không hiểu.' } },
        { form:'越 A 越 B', vi:'“càng A càng B”',
          note:'Mức độ tăng theo nhau. Vd 越学越有意思 / 雨越下越大.',
          ex:{ zh:'汉语越学越有意思。', pinyin:'Hànyǔ yuè xué yuè yǒuyìsi.', vi:'Tiếng Trung càng học càng thú vị.' } }
      ],
      vocab:[
        { zh:'懂', pinyin:'dǒng', hv:'đổng', vi:'hiểu', pos:'động từ' },
        { zh:'清楚', pinyin:'qīngchu', hv:'thanh sở', vi:'rõ ràng', pos:'tính từ' },
        { zh:'明白', pinyin:'míngbai', hv:'minh bạch', vi:'hiểu, rõ', pos:'động từ' },
        { zh:'有意思', pinyin:'yǒuyìsi', hv:'hữu ý tứ', vi:'thú vị', pos:'tính từ' },
        { zh:'容易', pinyin:'róngyì', hv:'dung dị', vi:'dễ', pos:'tính từ' },
        { zh:'难', pinyin:'nán', hv:'nan', vi:'khó', pos:'tính từ' },
        { zh:'练习', pinyin:'liànxí', hv:'luyện tập', vi:'luyện tập; bài luyện', pos:'động từ; danh từ' },
        { zh:'水平', pinyin:'shuǐpíng', hv:'thuỷ bình', vi:'trình độ', pos:'danh từ' },
        { zh:'提高', pinyin:'tígāo', hv:'đề cao', vi:'nâng cao', pos:'động từ' },
        { zh:'努力', pinyin:'nǔlì', hv:'nỗ lực', vi:'nỗ lực, cố gắng', pos:'động từ; tính từ' },
        { zh:'越', pinyin:'yuè', hv:'việt', vi:'càng', pos:'phó từ' },
        { zh:'复习', pinyin:'fùxí', hv:'phục tập', vi:'ôn tập', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你看得懂中文报纸吗？', pinyin:'Nǐ kàn de dǒng Zhōngwén bàozhǐ ma?', vi:'Bạn đọc hiểu báo tiếng Trung không?' },
        { sp:'B', zh:'看得懂一些，但是有的字看不懂。', pinyin:'Kàn de dǒng yìxiē, dànshì yǒu de zì kàn bu dǒng.', vi:'Hiểu được một ít, nhưng có chữ đọc không hiểu.' },
        { sp:'A', zh:'你的汉语水平提高得很快。', pinyin:'Nǐ de Hànyǔ shuǐpíng tígāo de hěn kuài.', vi:'Trình độ tiếng Trung của bạn lên nhanh thật.' },
        { sp:'B', zh:'因为我每天都练习，越学越有意思。', pinyin:'Yīnwèi wǒ měitiān dōu liànxí, yuè xué yuè yǒuyìsi.', vi:'Vì ngày nào mình cũng luyện, càng học càng thấy thú vị.' }
      ]
    },

    {
      level:'hsk3', no:4, zh:'今天比昨天冷多了', pinyin:'Jīntiān bǐ zuótiān lěng duō le', vi:'Hôm nay lạnh hơn hôm qua nhiều',
      skill:'So sánh nâng cao: hơn nhiều / như nhau / không bằng',
      grammar:[
        { form:'A 比 B + adj + 多了 / 一点儿 / 得多', vi:'“A hơn B nhiều / một chút”',
          note:'Sau tính từ thêm mức chênh: 冷多了 (lạnh hơn nhiều), 高一点儿 (cao hơn chút), 贵得多.',
          ex:{ zh:'今天比昨天冷多了。', pinyin:'Jīntiān bǐ zuótiān lěng duō le.', vi:'Hôm nay lạnh hơn hôm qua nhiều.' } },
        { form:'A 跟 B 一样 / A 没有 B (那么) adj', vi:'“A giống B” / “A không bằng B”',
          note:'Bằng nhau: 他跟我一样高. Kém hơn: 我没有他那么高 (tôi không cao bằng anh ấy).',
          ex:{ zh:'明天跟今天差不多。', pinyin:'Míngtiān gēn jīntiān chàbuduō.', vi:'Ngày mai cũng gần như hôm nay.' } }
      ],
      vocab:[
        { zh:'更', pinyin:'gèng', hv:'cánh', vi:'hơn, càng', pos:'phó từ' },
        { zh:'最', pinyin:'zuì', hv:'tối', vi:'nhất', pos:'phó từ' },
        { zh:'差不多', pinyin:'chàbuduō', hv:'sai bất đa', vi:'gần như, xấp xỉ', pos:'tính từ; phó từ' },
        { zh:'那么', pinyin:'nàme', hv:'na ma', vi:'như thế, đến thế', pos:'đại từ' },
        { zh:'这么', pinyin:'zhème', hv:'giá ma', vi:'như này, thế này', pos:'đại từ' },
        { zh:'跟', pinyin:'gēn', hv:'cân', vi:'với, cùng', pos:'giới từ' },
        { zh:'矮', pinyin:'ǎi', hv:'ải', vi:'thấp (người)', pos:'tính từ' },
        { zh:'胖', pinyin:'pàng', hv:'bàn', vi:'béo, mập', pos:'tính từ' },
        { zh:'瘦', pinyin:'shòu', hv:'sấu', vi:'gầy', pos:'tính từ' },
        { zh:'年轻', pinyin:'niánqīng', hv:'niên khinh', vi:'trẻ', pos:'tính từ' },
        { zh:'聪明', pinyin:'cōngming', hv:'thông minh', vi:'thông minh', pos:'tính từ' },
        { zh:'温度', pinyin:'wēndù', hv:'ôn độ', vi:'nhiệt độ', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'今天比昨天冷多了。', pinyin:'Jīntiān bǐ zuótiān lěng duō le.', vi:'Hôm nay lạnh hơn hôm qua nhiều.' },
        { sp:'B', zh:'是啊，温度低了很多。', pinyin:'Shì a, wēndù dī le hěn duō.', vi:'Ừ, nhiệt độ giảm nhiều.' },
        { sp:'A', zh:'明天呢？', pinyin:'Míngtiān ne?', vi:'Còn ngày mai?' },
        { sp:'B', zh:'明天跟今天差不多，可能更冷。', pinyin:'Míngtiān gēn jīntiān chàbuduō, kěnéng gèng lěng.', vi:'Mai cũng gần như hôm nay, có lẽ còn lạnh hơn.' }
      ]
    },

    {
      level:'hsk3', no:5, zh:'虽然很累，但是很开心', pinyin:'Suīrán hěn lèi, dànshì hěn kāixīn', vi:'Tuy mệt nhưng rất vui',
      skill:'Nhượng bộ 虽然…但是; nêu chủ đề với 关于',
      grammar:[
        { form:'虽然 A，但是/可是 B', vi:'“tuy A nhưng B”',
          note:'虽然 mở đầu vế nhượng bộ, vế sau bắt buộc có 但是/可是/还是. Vd 虽然下雨，但是我们还是去了.',
          ex:{ zh:'虽然很贵，但是很好吃。', pinyin:'Suīrán hěn guì, dànshì hěn hǎochī.', vi:'Tuy đắt nhưng rất ngon.' } },
        { form:'关于 + N', vi:'“về (chuyện gì)”',
          note:'关于 nêu phạm vi/chủ đề, thường đứng đầu câu. Vd 关于这个问题，我有意见.',
          ex:{ zh:'关于下次旅行，你有什么意见？', pinyin:'Guānyú xià cì lǚxíng, nǐ yǒu shénme yìjiàn?', vi:'Về chuyến đi lần tới, bạn có ý kiến gì?' } }
      ],
      vocab:[
        { zh:'虽然', pinyin:'suīrán', hv:'tuy nhiên', vi:'tuy, mặc dù', pos:'liên từ' },
        { zh:'可是', pinyin:'kěshì', hv:'khả thị', vi:'nhưng', pos:'liên từ' },
        { zh:'开心', pinyin:'kāixīn', hv:'khai tâm', vi:'vui vẻ', pos:'tính từ' },
        { zh:'关于', pinyin:'guānyú', hv:'quan vu', vi:'về, liên quan tới', pos:'giới từ' },
        { zh:'意见', pinyin:'yìjiàn', hv:'ý kiến', vi:'ý kiến', pos:'danh từ' },
        { zh:'同意', pinyin:'tóngyì', hv:'đồng ý', vi:'đồng ý', pos:'động từ' },
        { zh:'决定', pinyin:'juédìng', hv:'quyết định', vi:'quyết định', pos:'động từ; danh từ' },
        { zh:'担心', pinyin:'dānxīn', hv:'đảm tâm', vi:'lo lắng', pos:'động từ' },
        { zh:'放心', pinyin:'fàngxīn', hv:'phóng tâm', vi:'yên tâm', pos:'động từ' },
        { zh:'安排', pinyin:'ānpái', hv:'an bài', vi:'sắp xếp', pos:'động từ' },
        { zh:'旅行', pinyin:'lǚxíng', hv:'lữ hành', vi:'chuyến đi, du lịch', pos:'danh từ; động từ' },
        { zh:'南方', pinyin:'nánfāng', hv:'nam phương', vi:'miền Nam', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'昨天的旅行怎么样？', pinyin:'Zuótiān de lǚxíng zěnmeyàng?', vi:'Chuyến đi hôm qua thế nào?' },
        { sp:'B', zh:'虽然很累，但是很开心。', pinyin:'Suīrán hěn lèi, dànshì hěn kāixīn.', vi:'Tuy mệt nhưng rất vui.' },
        { sp:'A', zh:'关于下次旅行，你有什么意见？', pinyin:'Guānyú xià cì lǚxíng, nǐ yǒu shénme yìjiàn?', vi:'Về chuyến sau, bạn có ý kiến gì?' },
        { sp:'B', zh:'我同意去南方。你放心，我来安排。', pinyin:'Wǒ tóngyì qù nánfāng. Nǐ fàngxīn, wǒ lái ānpái.', vi:'Mình đồng ý đi miền Nam. Yên tâm, mình sắp xếp.' }
      ]
    },

    {
      level:'hsk3', no:6, zh:'如果下雨，我们就不去了', pinyin:'Rúguǒ xiàyǔ, wǒmen jiù bú qù le', vi:'Nếu mưa thì chúng ta không đi nữa',
      skill:'Câu điều kiện 如果/要是…就',
      grammar:[
        { form:'如果 / 要是 A (的话)，就 B', vi:'“nếu A thì B”',
          note:'Vế điều kiện có thể thêm 的话 ở cuối. Vd 要是下雨的话，就在家看电影.',
          ex:{ zh:'如果有时间，我就去看你。', pinyin:'Rúguǒ yǒu shíjiān, wǒ jiù qù kàn nǐ.', vi:'Nếu có thời gian tôi sẽ đến thăm bạn.' } },
        { form:'… 的话', vi:'đánh dấu vế giả định',
          note:'的话 dehuà đặt cuối vế điều kiện, có thể dùng một mình không cần 如果. Vd 明天下雨的话，我们改天.',
          ex:{ zh:'不方便的话，我们改天。', pinyin:'Bù fāngbiàn dehuà, wǒmen gǎitiān.', vi:'Nếu bất tiện thì ta đổi ngày.' } }
      ],
      vocab:[
        { zh:'如果', pinyin:'rúguǒ', hv:'như quả', vi:'nếu', pos:'liên từ' },
        { zh:'要是', pinyin:'yàoshi', hv:'yếu thị', vi:'nếu', pos:'liên từ' },
        { zh:'的话', pinyin:'dehuà', hv:'đích thoại', vi:'(nếu) … thì', pos:'trợ từ' },
        { zh:'伞', pinyin:'sǎn', hv:'tán', vi:'cái ô, dù', pos:'danh từ' },
        { zh:'天气预报', pinyin:'tiānqì yùbào', hv:'thiên khí dự báo', vi:'dự báo thời tiết', pos:'danh từ' },
        { zh:'变', pinyin:'biàn', hv:'biến', vi:'thay đổi, biến', pos:'động từ' },
        { zh:'突然', pinyin:'tūrán', hv:'đột nhiên', vi:'đột nhiên', pos:'phó từ' },
        { zh:'办法', pinyin:'bànfǎ', hv:'biện pháp', vi:'cách, biện pháp', pos:'danh từ' },
        { zh:'影响', pinyin:'yǐngxiǎng', hv:'ảnh hưởng', vi:'ảnh hưởng', pos:'động từ; danh từ' },
        { zh:'情况', pinyin:'qíngkuàng', hv:'tình huống', vi:'tình hình', pos:'danh từ' },
        { zh:'改', pinyin:'gǎi', hv:'cải', vi:'sửa, đổi', pos:'động từ' },
        { zh:'改天', pinyin:'gǎitiān', hv:'cải thiên', vi:'hôm khác', pos:'phó từ' }
      ],
      dialogue:[
        { sp:'A', zh:'明天要是下雨的话，我们怎么办？', pinyin:'Míngtiān yàoshi xiàyǔ dehuà, wǒmen zěnme bàn?', vi:'Mai nếu mưa thì mình làm sao?' },
        { sp:'B', zh:'如果下雨，我们就不去公园了。', pinyin:'Rúguǒ xiàyǔ, wǒmen jiù bú qù gōngyuán le.', vi:'Nếu mưa thì mình không ra công viên nữa.' },
        { sp:'A', zh:'天气预报说明天晴天。', pinyin:'Tiānqì yùbào shuō míngtiān qíngtiān.', vi:'Dự báo nói mai trời nắng.' },
        { sp:'B', zh:'那就好。天气变得太突然的话，我们再改计划。', pinyin:'Nà jiù hǎo. Tiānqì biàn de tài tūrán dehuà, wǒmen zài gǎi jìhuà.', vi:'Vậy thì tốt. Nếu thời tiết đổi đột ngột quá thì mình đổi kế hoạch sau.' }
      ]
    },

    {
      level:'hsk3', no:7, zh:'他不但会唱歌，而且会跳舞', pinyin:'Tā búdàn huì chànggē, érqiě huì tiàowǔ', vi:'Anh ấy không những biết hát mà còn biết nhảy',
      skill:'Tăng tiến 不但…而且; “vừa… vừa…” (tính chất) 又…又',
      grammar:[
        { form:'不但 A，而且/还 B', vi:'“không những A mà còn B”',
          note:'Vế sau bổ sung ý mạnh hơn. Cùng chủ ngữ thì 不但 đứng sau chủ ngữ: 他不但会唱歌，而且会跳舞.',
          ex:{ zh:'她不但聪明，而且很努力。', pinyin:'Tā búdàn cōngming, érqiě hěn nǔlì.', vi:'Cô ấy không những thông minh mà còn rất chăm.' } },
        { form:'又 A 又 B', vi:'“vừa A vừa B” (hai tính chất)',
          note:'Nối hai tính từ/động từ cùng tồn tại. Vd 又便宜又好 / 又唱又跳.',
          ex:{ zh:'他的声音又好听又特别。', pinyin:'Tā de shēngyīn yòu hǎotīng yòu tèbié.', vi:'Giọng anh ấy vừa hay vừa đặc biệt.' } }
      ],
      vocab:[
        { zh:'不但', pinyin:'búdàn', hv:'bất đãn', vi:'không những', pos:'liên từ' },
        { zh:'而且', pinyin:'érqiě', hv:'nhi thả', vi:'mà còn', pos:'liên từ' },
        { zh:'表演', pinyin:'biǎoyǎn', hv:'biểu diễn', vi:'biểu diễn', pos:'động từ; danh từ' },
        { zh:'节目', pinyin:'jiémù', hv:'tiết mục', vi:'tiết mục, chương trình', pos:'danh từ' },
        { zh:'声音', pinyin:'shēngyīn', hv:'thanh âm', vi:'giọng, âm thanh', pos:'danh từ' },
        { zh:'好听', pinyin:'hǎotīng', hv:'hảo thính', vi:'hay (nghe)', pos:'tính từ' },
        { zh:'可爱', pinyin:'kě’ài', hv:'khả ái', vi:'đáng yêu', pos:'tính từ' },
        { zh:'有名', pinyin:'yǒumíng', hv:'hữu danh', vi:'nổi tiếng', pos:'tính từ' },
        { zh:'比赛', pinyin:'bǐsài', hv:'tỉ tái', vi:'cuộc thi, trận đấu', pos:'danh từ; động từ' },
        { zh:'第一', pinyin:'dì-yī', hv:'đệ nhất', vi:'thứ nhất, nhất', pos:'số thứ tự' },
        { zh:'难怪', pinyin:'nánguài', hv:'nan quái', vi:'thảo nào', pos:'phó từ' },
        { zh:'特别', pinyin:'tèbié', hv:'đặc biệt', vi:'đặc biệt; rất', pos:'tính từ; phó từ' }
      ],
      dialogue:[
        { sp:'A', zh:'他不但会唱歌，而且会跳舞。', pinyin:'Tā búdàn huì chànggē, érqiě huì tiàowǔ.', vi:'Anh ấy không những biết hát mà còn biết nhảy.' },
        { sp:'B', zh:'他的声音又好听又特别。', pinyin:'Tā de shēngyīn yòu hǎotīng yòu tèbié.', vi:'Giọng anh ấy vừa hay vừa đặc biệt.' },
        { sp:'A', zh:'上次比赛他得了第一。', pinyin:'Shàng cì bǐsài tā dé le dì-yī.', vi:'Cuộc thi lần trước anh ấy giành giải nhất.' },
        { sp:'B', zh:'难怪他这么有名。', pinyin:'Nánguài tā zhème yǒumíng.', vi:'Thảo nào anh ấy nổi tiếng thế.' }
      ]
    },

    {
      level:'hsk3', no:8, zh:'先看题，然后再做', pinyin:'Xiān kàn tí, ránhòu zài zuò', vi:'Xem đề trước rồi mới làm',
      skill:'Trình tự 先…然后…最后; động lượng từ 次/遍',
      grammar:[
        { form:'先 A，然后 B，最后 C', vi:'“trước… sau đó… cuối cùng…”',
          note:'Nêu các bước theo thứ tự; 再 có thể kèm 然后: 然后再做.',
          ex:{ zh:'先看题，然后想方法，最后检查。', pinyin:'Xiān kàn tí, ránhòu xiǎng fāngfǎ, zuìhòu jiǎnchá.', vi:'Xem đề trước, sau đó nghĩ cách, cuối cùng kiểm tra.' } },
        { form:'V + số + 次 / 遍', vi:'“(làm) mấy lần / mấy lượt”',
          note:'次 đếm số lần; 遍 đếm số lượt làm trọn từ đầu tới cuối. Vd 去过三次 / 看了两遍.',
          ex:{ zh:'这本书我看了两遍。', pinyin:'Zhè běn shū wǒ kàn le liǎng biàn.', vi:'Cuốn này tôi đọc hai lượt rồi.' } }
      ],
      vocab:[
        { zh:'然后', pinyin:'ránhòu', hv:'nhiên hậu', vi:'sau đó', pos:'liên từ' },
        { zh:'最后', pinyin:'zuìhòu', hv:'tối hậu', vi:'cuối cùng', pos:'danh từ; phó từ' },
        { zh:'次', pinyin:'cì', hv:'thứ', vi:'lần', pos:'lượng từ' },
        { zh:'遍', pinyin:'biàn', hv:'biến', vi:'lượt (trọn vẹn)', pos:'lượng từ' },
        { zh:'题', pinyin:'tí', hv:'đề', vi:'đề, câu hỏi', pos:'danh từ' },
        { zh:'检查', pinyin:'jiǎnchá', hv:'kiểm tra', vi:'kiểm tra', pos:'động từ' },
        { zh:'顺序', pinyin:'shùnxù', hv:'thuận tự', vi:'thứ tự', pos:'danh từ' },
        { zh:'重要', pinyin:'zhòngyào', hv:'trọng yếu', vi:'quan trọng', pos:'tính từ' },
        { zh:'简单', pinyin:'jiǎndān', hv:'giản đơn', vi:'đơn giản', pos:'tính từ' },
        { zh:'复杂', pinyin:'fùzá', hv:'phức tạp', vi:'phức tạp', pos:'tính từ' },
        { zh:'方法', pinyin:'fāngfǎ', hv:'phương pháp', vi:'phương pháp, cách', pos:'danh từ' },
        { zh:'急', pinyin:'jí', hv:'cấp', vi:'vội, gấp', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'这道题怎么做？', pinyin:'Zhè dào tí zěnme zuò?', vi:'Câu này làm thế nào?' },
        { sp:'B', zh:'先看题，然后想方法，最后检查一遍。', pinyin:'Xiān kàn tí, ránhòu xiǎng fāngfǎ, zuìhòu jiǎnchá yí biàn.', vi:'Xem đề trước, rồi nghĩ cách, cuối cùng kiểm tra một lượt.' },
        { sp:'A', zh:'我已经看了两遍了，还是不明白。', pinyin:'Wǒ yǐjīng kàn le liǎng biàn le, háishi bù míngbai.', vi:'Mình xem hai lượt rồi mà vẫn không hiểu.' },
        { sp:'B', zh:'别急，这道题有点儿复杂，我们一步一步来。', pinyin:'Bié jí, zhè dào tí yǒudiǎnr fùzá, wǒmen yí bù yí bù lái.', vi:'Đừng vội, câu này hơi phức tạp, mình làm từng bước.' }
      ]
    },

    {
      level:'hsk3', no:9, zh:'你去过北京吗', pinyin:'Nǐ qù guo Běijīng ma', vi:'Bạn từng đến Bắc Kinh chưa',
      skill:'Trợ từ kinh nghiệm 过; “chưa bao giờ” 从来没…过',
      grammar:[
        { form:'V + 过', vi:'“đã từng…”',
          note:'过 guo chỉ kinh nghiệm trong quá khứ. Phủ định: 没(有)…过. Vd 我去过北京 / 我没吃过北京烤鸭.',
          ex:{ zh:'我去过两次长城。', pinyin:'Wǒ qù guo liǎng cì Chángchéng.', vi:'Tôi từng đến Trường Thành hai lần.' } },
        { form:'从来没(有) + V + 过', vi:'“chưa bao giờ…”',
          note:'Nhấn mạnh chưa từng. Vd 我从来没坐过飞机.',
          ex:{ zh:'我从来没去过北京。', pinyin:'Wǒ cónglái méi qù guo Běijīng.', vi:'Tôi chưa bao giờ đến Bắc Kinh.' } }
      ],
      vocab:[
        { zh:'过', pinyin:'guo', hv:'quá', vi:'(đã) từng', pos:'trợ từ' },
        { zh:'从来', pinyin:'cónglái', hv:'tòng lai', vi:'từ trước tới nay', pos:'phó từ' },
        { zh:'国家', pinyin:'guójiā', hv:'quốc gia', vi:'quốc gia, nước', pos:'danh từ' },
        { zh:'城市', pinyin:'chéngshì', hv:'thành thị', vi:'thành phố', pos:'danh từ' },
        { zh:'长城', pinyin:'Chángchéng', hv:'trường thành', vi:'Vạn Lý Trường Thành', pos:'danh từ' },
        { zh:'历史', pinyin:'lìshǐ', hv:'lịch sử', vi:'lịch sử', pos:'danh từ' },
        { zh:'文化', pinyin:'wénhuà', hv:'văn hoá', vi:'văn hoá', pos:'danh từ' },
        { zh:'照片', pinyin:'zhàopiàn', hv:'chiếu phiến', vi:'bức ảnh', pos:'danh từ' },
        { zh:'照相', pinyin:'zhàoxiàng', hv:'chiếu tướng', vi:'chụp ảnh', pos:'động từ' },
        { zh:'经验', pinyin:'jīngyàn', hv:'kinh nghiệm', vi:'kinh nghiệm', pos:'danh từ' },
        { zh:'印象', pinyin:'yìnxiàng', hv:'ấn tượng', vi:'ấn tượng', pos:'danh từ' },
        { zh:'深', pinyin:'shēn', hv:'thâm', vi:'sâu, sâu sắc', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你去过北京吗？', pinyin:'Nǐ qù guo Běijīng ma?', vi:'Bạn từng đến Bắc Kinh chưa?' },
        { sp:'B', zh:'去过两次，还去过长城。', pinyin:'Qù guo liǎng cì, hái qù guo Chángchéng.', vi:'Đi hai lần rồi, còn đến cả Trường Thành.' },
        { sp:'A', zh:'我从来没去过，印象怎么样？', pinyin:'Wǒ cónglái méi qù guo, yìnxiàng zěnmeyàng?', vi:'Mình chưa từng đi, ấn tượng thế nào?' },
        { sp:'B', zh:'历史很长，文化很深，我照了很多照片。', pinyin:'Lìshǐ hěn cháng, wénhuà hěn shēn, wǒ zhào le hěn duō zhàopiàn.', vi:'Lịch sử lâu đời, văn hoá sâu sắc, mình chụp rất nhiều ảnh.' }
      ]
    },

    {
      level:'hsk3', no:10, zh:'我的手机被弟弟弄坏了', pinyin:'Wǒ de shǒujī bèi dìdi nòng huài le', vi:'Điện thoại tôi bị em trai làm hỏng',
      skill:'Câu bị động 被; 弄 + kết quả',
      grammar:[
        { form:'S + 被 + (ai) + V + kết quả', vi:'câu bị động “bị (ai) làm gì”',
          note:'被 bèi đánh dấu bị động; người gây ra có thể lược. Sau động từ phải có thành phần khác (了/坏/完…).',
          ex:{ zh:'我的书被朋友借走了。', pinyin:'Wǒ de shū bèi péngyou jiè zǒu le.', vi:'Sách của tôi bị bạn mượn mất rồi.' } },
        { form:'弄 + kết quả', vi:'“làm (cho) … (hỏng/mất/bẩn)”',
          note:'弄 nòng là động từ chung, đi với bổ ngữ kết quả: 弄坏, 弄丢, 弄脏, 弄干净.',
          ex:{ zh:'别把衣服弄脏了。', pinyin:'Bié bǎ yīfu nòng zāng le.', vi:'Đừng làm bẩn quần áo.' } }
      ],
      vocab:[
        { zh:'被', pinyin:'bèi', hv:'bị', vi:'bị (bị động)', pos:'giới từ' },
        { zh:'弄', pinyin:'nòng', hv:'lộng', vi:'làm, xử lý', pos:'động từ' },
        { zh:'坏', pinyin:'huài', hv:'hoại', vi:'hỏng; xấu', pos:'tính từ' },
        { zh:'丢', pinyin:'diū', hv:'đâu', vi:'mất, đánh mất', pos:'động từ' },
        { zh:'脏', pinyin:'zāng', hv:'tang', vi:'bẩn', pos:'tính từ' },
        { zh:'打扫', pinyin:'dǎsǎo', hv:'đả tảo', vi:'quét dọn', pos:'động từ' },
        { zh:'干净', pinyin:'gānjìng', hv:'can tịnh', vi:'sạch', pos:'tính từ' },
        { zh:'修', pinyin:'xiū', hv:'tu', vi:'sửa', pos:'động từ' },
        { zh:'借', pinyin:'jiè', hv:'tá', vi:'mượn; cho mượn', pos:'động từ' },
        { zh:'还', pinyin:'huán', hv:'hoàn', vi:'trả (lại)', pos:'động từ' },
        { zh:'小心', pinyin:'xiǎoxīn', hv:'tiểu tâm', vi:'cẩn thận', pos:'động từ; tính từ' },
        { zh:'让', pinyin:'ràng', hv:'nhượng', vi:'để, cho, bảo (ai làm)', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你的手机怎么了？', pinyin:'Nǐ de shǒujī zěnme le?', vi:'Điện thoại bạn sao thế?' },
        { sp:'B', zh:'被弟弟弄坏了。', pinyin:'Bèi dìdi nòng huài le.', vi:'Bị em trai làm hỏng.' },
        { sp:'A', zh:'那怎么办？', pinyin:'Nà zěnme bàn?', vi:'Vậy làm sao?' },
        { sp:'B', zh:'我打算拿去修，修不好就买新的。', pinyin:'Wǒ dǎsuàn ná qù xiū, xiū bu hǎo jiù mǎi xīn de.', vi:'Mình định mang đi sửa, sửa không được thì mua mới.' },
        { sp:'A', zh:'下次让他小心一点儿。', pinyin:'Xià cì ràng tā xiǎoxīn yìdiǎnr.', vi:'Lần sau bảo nó cẩn thận chút.' }
      ]
    },

    {
      level:'hsk3', no:11, zh:'请把空调打开', pinyin:'Qǐng bǎ kōngtiáo dǎkāi', vi:'Làm ơn bật điều hoà lên',
      skill:'Câu chữ 把 nâng cao: 把…V + 在/到/给',
      grammar:[
        { form:'把 + O + V + 在/到 + nơi chốn', vi:'“đem … đặt/để ở …”',
          note:'Kết quả hành động là vị trí mới của vật. Vd 把书放在桌子上 / 把车开到门口.',
          ex:{ zh:'请把行李放在这儿。', pinyin:'Qǐng bǎ xíngli fàng zài zhèr.', vi:'Xin để hành lý ở đây.' } },
        { form:'把 + O + V + 给 + người', vi:'“đem … đưa/gửi cho …”',
          note:'Vd 把钱交给老师 / 把照片发给我. Phủ định và trợ động từ đặt trước 把: 别把…, 能把….',
          ex:{ zh:'请把钥匙交给服务员。', pinyin:'Qǐng bǎ yàoshi jiāo gěi fúwùyuán.', vi:'Xin đưa chìa khoá cho nhân viên.' } }
      ],
      vocab:[
        { zh:'空调', pinyin:'kōngtiáo', hv:'không điều', vi:'điều hoà', pos:'danh từ' },
        { zh:'打开', pinyin:'dǎkāi', hv:'đả khai', vi:'bật, mở', pos:'động từ' },
        { zh:'关', pinyin:'guān', hv:'quan', vi:'tắt, đóng', pos:'động từ' },
        { zh:'放', pinyin:'fàng', hv:'phóng', vi:'đặt, để', pos:'động từ' },
        { zh:'行李', pinyin:'xíngli', hv:'hành lý', vi:'hành lý', pos:'danh từ' },
        { zh:'钥匙', pinyin:'yàoshi', hv:'thược thi', vi:'chìa khoá', pos:'danh từ' },
        { zh:'交', pinyin:'jiāo', hv:'giao', vi:'nộp, giao', pos:'động từ' },
        { zh:'发', pinyin:'fā', hv:'phát', vi:'gửi (tin/ảnh)', pos:'động từ' },
        { zh:'窗户', pinyin:'chuānghu', hv:'song hộ', vi:'cửa sổ', pos:'danh từ' },
        { zh:'冰箱', pinyin:'bīngxiāng', hv:'băng tương', vi:'tủ lạnh', pos:'danh từ' },
        { zh:'电梯', pinyin:'diàntī', hv:'điện thê', vi:'thang máy', pos:'danh từ' },
        { zh:'服务员', pinyin:'fúwùyuán', hv:'phục vụ viên', vi:'nhân viên phục vụ', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'房间有点儿热，请把空调打开。', pinyin:'Fángjiān yǒudiǎnr rè, qǐng bǎ kōngtiáo dǎkāi.', vi:'Phòng hơi nóng, làm ơn bật điều hoà.' },
        { sp:'B', zh:'好的。请把行李放在这儿。', pinyin:'Hǎo de. Qǐng bǎ xíngli fàng zài zhèr.', vi:'Vâng. Xin để hành lý ở đây.' },
        { sp:'A', zh:'钥匙呢？', pinyin:'Yàoshi ne?', vi:'Còn chìa khoá?' },
        { sp:'B', zh:'走的时候把钥匙交给服务员就行。', pinyin:'Zǒu de shíhou bǎ yàoshi jiāo gěi fúwùyuán jiù xíng.', vi:'Lúc đi đưa chìa khoá cho nhân viên là được.' }
      ]
    },

    {
      level:'hsk3', no:12, zh:'我找到工作了', pinyin:'Wǒ zhǎodào gōngzuò le', vi:'Tôi tìm được việc rồi',
      skill:'Bổ ngữ kết quả 到/见/懂/错/住',
      grammar:[
        { form:'V + 到 / 见', vi:'đạt được mục tiêu / cảm nhận được',
          note:'到 = đạt tới (找到 tìm được, 买到 mua được, 收到 nhận được); 见 dùng với giác quan (看见, 听见).',
          ex:{ zh:'我终于找到工作了。', pinyin:'Wǒ zhōngyú zhǎodào gōngzuò le.', vi:'Cuối cùng tôi tìm được việc rồi.' } },
        { form:'V + 错 / 住 / 完', vi:'sai / giữ chặt / xong',
          note:'写错 viết sai, 记住 nhớ kỹ, 做完 làm xong. Phủ định dùng 没: 没听懂, 没做完.',
          ex:{ zh:'老师的话我都记住了。', pinyin:'Lǎoshī de huà wǒ dōu jìzhù le.', vi:'Lời thầy tôi đều nhớ kỹ rồi.' } }
      ],
      vocab:[
        { zh:'找到', pinyin:'zhǎodào', hv:'trảo đáo', vi:'tìm được', pos:'động từ' },
        { zh:'收到', pinyin:'shōudào', hv:'thu đáo', vi:'nhận được', pos:'động từ' },
        { zh:'看见', pinyin:'kànjiàn', hv:'khán kiến', vi:'nhìn thấy', pos:'động từ' },
        { zh:'听见', pinyin:'tīngjiàn', hv:'thính kiến', vi:'nghe thấy', pos:'động từ' },
        { zh:'记住', pinyin:'jìzhù', hv:'ký trụ', vi:'nhớ kỹ', pos:'động từ' },
        { zh:'写错', pinyin:'xiěcuò', hv:'tả thác', vi:'viết sai', pos:'động từ' },
        { zh:'终于', pinyin:'zhōngyú', hv:'chung vu', vi:'cuối cùng (cũng)', pos:'phó từ' },
        { zh:'面试', pinyin:'miànshì', hv:'diện thí', vi:'phỏng vấn', pos:'danh từ; động từ' },
        { zh:'通知', pinyin:'tōngzhī', hv:'thông tri', vi:'thông báo', pos:'động từ; danh từ' },
        { zh:'公司', pinyin:'gōngsī', hv:'công ty', vi:'công ty', pos:'danh từ' },
        { zh:'祝贺', pinyin:'zhùhè', hv:'chúc hạ', vi:'chúc mừng', pos:'động từ' },
        { zh:'满意', pinyin:'mǎnyì', hv:'mãn ý', vi:'hài lòng', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'告诉你一个好消息，我找到工作了！', pinyin:'Gàosu nǐ yí ge hǎo xiāoxi, wǒ zhǎodào gōngzuò le!', vi:'Báo bạn tin vui, mình tìm được việc rồi!' },
        { sp:'B', zh:'真的吗？祝贺你！什么时候收到通知的？', pinyin:'Zhēn de ma? Zhùhè nǐ! Shénme shíhou shōudào tōngzhī de?', vi:'Thật à? Chúc mừng! Nhận thông báo khi nào?' },
        { sp:'A', zh:'昨天。面试的时候我把老师教的都记住了。', pinyin:'Zuótiān. Miànshì de shíhou wǒ bǎ lǎoshī jiāo de dōu jìzhù le.', vi:'Hôm qua. Lúc phỏng vấn mình nhớ hết những gì thầy dạy.' },
        { sp:'B', zh:'难怪公司对你这么满意。', pinyin:'Nánguài gōngsī duì nǐ zhème mǎnyì.', vi:'Thảo nào công ty hài lòng về bạn thế.' }
      ]
    },

    {
      level:'hsk3', no:13, zh:'天气热起来了', pinyin:'Tiānqì rè qǐlái le', vi:'Trời bắt đầu nóng lên rồi',
      skill:'Bổ ngữ xu hướng kép 起来/下去/出来/过来',
      grammar:[
        { form:'V/adj + 起来', vi:'“bắt đầu … (lên)”',
          note:'Chỉ sự bắt đầu và tiếp diễn: 热起来, 笑起来, 唱起来. Nghĩa mở rộng: 看起来 (trông có vẻ), 想起来 (nhớ ra).',
          ex:{ zh:'他一看到照片就笑起来了。', pinyin:'Tā yí kàndào zhàopiàn jiù xiào qǐlái le.', vi:'Vừa thấy ảnh anh ấy đã bật cười.' } },
        { form:'V + 下去 / 出来 / 过来', vi:'tiếp tục / ra (nhận ra) / qua (về trạng thái bình thường)',
          note:'说下去 nói tiếp; 听出来 nghe ra được; 醒过来 tỉnh lại. Tân ngữ nơi chốn đặt giữa: 走进教室来.',
          ex:{ zh:'请你继续说下去。', pinyin:'Qǐng nǐ jìxù shuō xiàqù.', vi:'Mời bạn nói tiếp.' } }
      ],
      vocab:[
        { zh:'起来', pinyin:'qǐlái', hv:'khởi lai', vi:'lên; bắt đầu', pos:'bổ ngữ' },
        { zh:'下去', pinyin:'xiàqù', hv:'hạ khứ', vi:'xuống; tiếp tục', pos:'bổ ngữ' },
        { zh:'出来', pinyin:'chūlái', hv:'xuất lai', vi:'ra; nhận ra', pos:'bổ ngữ' },
        { zh:'过来', pinyin:'guòlái', hv:'quá lai', vi:'qua (đây); tỉnh lại', pos:'bổ ngữ' },
        { zh:'看起来', pinyin:'kàn qǐlái', hv:'khán khởi lai', vi:'trông có vẻ', pos:'động từ' },
        { zh:'想起来', pinyin:'xiǎng qǐlái', hv:'tưởng khởi lai', vi:'nhớ ra', pos:'động từ' },
        { zh:'继续', pinyin:'jìxù', hv:'kế tục', vi:'tiếp tục', pos:'động từ' },
        { zh:'季节', pinyin:'jìjié', hv:'quý tiết', vi:'mùa', pos:'danh từ' },
        { zh:'夏天', pinyin:'xiàtiān', hv:'hạ thiên', vi:'mùa hè', pos:'danh từ' },
        { zh:'秋天', pinyin:'qiūtiān', hv:'thu thiên', vi:'mùa thu', pos:'danh từ' },
        { zh:'冬天', pinyin:'dōngtiān', hv:'đông thiên', vi:'mùa đông', pos:'danh từ' },
        { zh:'习惯', pinyin:'xíguàn', hv:'tập quán', vi:'quen; thói quen', pos:'động từ; danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'天气热起来了，夏天到了。', pinyin:'Tiānqì rè qǐlái le, xiàtiān dào le.', vi:'Trời bắt đầu nóng lên rồi, hè đến rồi.' },
        { sp:'B', zh:'你看起来不太喜欢夏天。', pinyin:'Nǐ kàn qǐlái bú tài xǐhuan xiàtiān.', vi:'Trông bạn không thích mùa hè lắm.' },
        { sp:'A', zh:'是啊，我还没习惯这里的季节。', pinyin:'Shì a, wǒ hái méi xíguàn zhèlǐ de jìjié.', vi:'Ừ, mình vẫn chưa quen mùa ở đây.' },
        { sp:'B', zh:'再过两个月秋天就来了，你会慢慢习惯的。', pinyin:'Zài guò liǎng ge yuè qiūtiān jiù lái le, nǐ huì mànmàn xíguàn de.', vi:'Hai tháng nữa thu đến rồi, bạn sẽ dần quen thôi.' }
      ]
    },

    {
      level:'hsk3', no:14, zh:'我等了你半个小时', pinyin:'Wǒ děng le nǐ bàn ge xiǎoshí', vi:'Tôi đợi bạn nửa tiếng rồi',
      skill:'Bổ ngữ thời lượng; “bao lâu rồi không…”',
      grammar:[
        { form:'V + (了) + O + thời lượng / V + thời lượng + (的) O', vi:'“(làm gì) trong bao lâu”',
          note:'Tân ngữ là đại từ đặt trước thời lượng: 等了你半个小时. Tân ngữ là danh từ: 学了两年(的)汉语.',
          ex:{ zh:'我每天学一个小时汉语。', pinyin:'Wǒ měitiān xué yí ge xiǎoshí Hànyǔ.', vi:'Mỗi ngày tôi học tiếng Trung một tiếng.' } },
        { form:'thời lượng + 没 + V + 了', vi:'“đã (bao lâu) không …”',
          note:'Khoảng thời gian không xảy ra hành động đặt trước: 三天没吃饭了 / 很久没见了.',
          ex:{ zh:'我们好久没见面了。', pinyin:'Wǒmen hǎojiǔ méi jiànmiàn le.', vi:'Lâu rồi chúng ta không gặp nhau.' } }
      ],
      vocab:[
        { zh:'半', pinyin:'bàn', hv:'bán', vi:'nửa', pos:'số từ' },
        { zh:'小时', pinyin:'xiǎoshí', hv:'tiểu thời', vi:'giờ, tiếng', pos:'danh từ' },
        { zh:'久', pinyin:'jiǔ', hv:'cửu', vi:'lâu', pos:'tính từ' },
        { zh:'见面', pinyin:'jiànmiàn', hv:'kiến diện', vi:'gặp mặt', pos:'động từ' },
        { zh:'迟到', pinyin:'chídào', hv:'trì đáo', vi:'đến muộn', pos:'động từ' },
        { zh:'堵车', pinyin:'dǔchē', hv:'đổ xa', vi:'tắc đường', pos:'động từ' },
        { zh:'路上', pinyin:'lùshang', hv:'lộ thượng', vi:'trên đường', pos:'danh từ' },
        { zh:'对不起', pinyin:'duìbuqǐ', hv:'đối bất khởi', vi:'xin lỗi', pos:'động từ' },
        { zh:'没关系', pinyin:'méi guānxi', hv:'một quan hệ', vi:'không sao', pos:'cụm cố định' },
        { zh:'刚', pinyin:'gāng', hv:'cương', vi:'vừa mới', pos:'phó từ' },
        { zh:'才', pinyin:'cái', hv:'tài', vi:'mới (muộn hơn dự kiến)', pos:'phó từ' },
        { zh:'开始', pinyin:'kāishǐ', hv:'khai thuỷ', vi:'bắt đầu', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'对不起，我迟到了。', pinyin:'Duìbuqǐ, wǒ chídào le.', vi:'Xin lỗi, mình đến muộn.' },
        { sp:'B', zh:'没关系，我也刚到，等了你半个小时。', pinyin:'Méi guānxi, wǒ yě gāng dào, děng le nǐ bàn ge xiǎoshí.', vi:'Không sao, mình cũng vừa tới, đợi bạn nửa tiếng.' },
        { sp:'A', zh:'路上堵车，坐了一个小时的车才到。', pinyin:'Lùshang dǔchē, zuò le yí ge xiǎoshí de chē cái dào.', vi:'Trên đường tắc, ngồi xe một tiếng mới tới.' },
        { sp:'B', zh:'我们好久没见面了，今天好好聊聊。', pinyin:'Wǒmen hǎojiǔ méi jiànmiàn le, jīntiān hǎohāo liáoliao.', vi:'Lâu rồi mình không gặp, hôm nay trò chuyện thật kỹ.' }
      ]
    },

    {
      level:'hsk3', no:15, zh:'他一直在图书馆学习', pinyin:'Tā yìzhí zài túshūguǎn xuéxí', vi:'Anh ấy học ở thư viện suốt',
      skill:'Phó từ tần suất & trạng thái: 一直/总是/经常/突然/终于',
      grammar:[
        { form:'一直 / 总是 / 经常 + V', vi:'“luôn / lúc nào cũng / thường xuyên”',
          note:'一直 liên tục không gián đoạn; 总是 luôn luôn (thói quen, hơi phàn nàn); 经常 thường xuyên; 偶尔 thỉnh thoảng.',
          ex:{ zh:'他总是第一个到教室。', pinyin:'Tā zǒngshì dì-yī ge dào jiàoshì.', vi:'Anh ấy lúc nào cũng là người đầu tiên đến lớp.' } },
        { form:'正在 / 在 + V (+ 呢)', vi:'hành động đang diễn ra',
          note:'Vd 他正在看书呢 / 我在等你. Phủ định: 没(在)….',
          ex:{ zh:'他正在图书馆看书呢。', pinyin:'Tā zhèngzài túshūguǎn kàn shū ne.', vi:'Anh ấy đang đọc sách trong thư viện.' } }
      ],
      vocab:[
        { zh:'一直', pinyin:'yìzhí', hv:'nhất trực', vi:'luôn, suốt', pos:'phó từ' },
        { zh:'总是', pinyin:'zǒngshì', hv:'tổng thị', vi:'luôn luôn', pos:'phó từ' },
        { zh:'经常', pinyin:'jīngcháng', hv:'kinh thường', vi:'thường xuyên', pos:'phó từ' },
        { zh:'偶尔', pinyin:'ǒu’ěr', hv:'ngẫu nhĩ', vi:'thỉnh thoảng', pos:'phó từ' },
        { zh:'正在', pinyin:'zhèngzài', hv:'chính tại', vi:'đang', pos:'phó từ' },
        { zh:'图书馆', pinyin:'túshūguǎn', hv:'đồ thư quán', vi:'thư viện', pos:'danh từ' },
        { zh:'认真', pinyin:'rènzhēn', hv:'nhận chân', vi:'nghiêm túc, chăm chú', pos:'tính từ' },
        { zh:'成绩', pinyin:'chéngjì', hv:'thành tích', vi:'thành tích, điểm', pos:'danh từ' },
        { zh:'考试', pinyin:'kǎoshì', hv:'khảo thí', vi:'thi; kỳ thi', pos:'động từ; danh từ' },
        { zh:'通过', pinyin:'tōngguò', hv:'thông quá', vi:'đỗ, thông qua', pos:'động từ' },
        { zh:'相信', pinyin:'xiāngxìn', hv:'tương tín', vi:'tin, tin tưởng', pos:'động từ' },
        { zh:'奇怪', pinyin:'qíguài', hv:'kỳ quái', vi:'kỳ lạ', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'最近怎么总是看不到小王？', pinyin:'Zuìjìn zěnme zǒngshì kàn bu dào Xiǎo Wáng?', vi:'Dạo này sao không thấy Tiểu Vương đâu?' },
        { sp:'B', zh:'他一直在图书馆学习，正在准备考试呢。', pinyin:'Tā yìzhí zài túshūguǎn xuéxí, zhèngzài zhǔnbèi kǎoshì ne.', vi:'Cậu ấy học ở thư viện suốt, đang ôn thi.' },
        { sp:'A', zh:'奇怪，他以前偶尔才去一次。', pinyin:'Qíguài, tā yǐqián ǒu’ěr cái qù yí cì.', vi:'Lạ nhỉ, trước cậu ấy thỉnh thoảng mới đi một lần.' },
        { sp:'B', zh:'他现在很认真，我相信他一定能通过。', pinyin:'Tā xiànzài hěn rènzhēn, wǒ xiāngxìn tā yídìng néng tōngguò.', vi:'Giờ cậu ấy rất nghiêm túc, mình tin chắc chắn sẽ đỗ.' }
      ]
    },

    {
      level:'hsk3', no:16, zh:'只要努力，就一定能学好', pinyin:'Zhǐyào nǔlì, jiù yídìng néng xué hǎo', vi:'Chỉ cần cố gắng là học tốt được',
      skill:'Điều kiện đủ / cần: 只要…就 · 只有…才',
      grammar:[
        { form:'只要 A，就 B', vi:'“chỉ cần A là B” (điều kiện đủ)',
          note:'A xảy ra thì B chắc chắn xảy ra. Vd 只要有时间，我就去.',
          ex:{ zh:'只要你说，我就帮你。', pinyin:'Zhǐyào nǐ shuō, wǒ jiù bāng nǐ.', vi:'Chỉ cần bạn nói là tôi giúp.' } },
        { form:'只有 A，才 B', vi:'“chỉ có A thì mới B” (điều kiện cần)',
          note:'Không có A thì không có B. Vd 只有多练习，才能说得流利.',
          ex:{ zh:'只有多听多说，才能进步。', pinyin:'Zhǐyǒu duō tīng duō shuō, cái néng jìnbù.', vi:'Chỉ có nghe nhiều nói nhiều mới tiến bộ được.' } }
      ],
      vocab:[
        { zh:'只要', pinyin:'zhǐyào', hv:'chỉ yếu', vi:'chỉ cần', pos:'liên từ' },
        { zh:'只有', pinyin:'zhǐyǒu', hv:'chỉ hữu', vi:'chỉ có', pos:'liên từ' },
        { zh:'才', pinyin:'cái', hv:'tài', vi:'mới (điều kiện)', pos:'phó từ' },
        { zh:'进步', pinyin:'jìnbù', hv:'tiến bộ', vi:'tiến bộ', pos:'động từ; danh từ' },
        { zh:'流利', pinyin:'liúlì', hv:'lưu lợi', vi:'lưu loát', pos:'tính từ' },
        { zh:'坚持', pinyin:'jiānchí', hv:'kiên trì', vi:'kiên trì', pos:'động từ' },
        { zh:'放弃', pinyin:'fàngqì', hv:'phóng khí', vi:'từ bỏ', pos:'động từ' },
        { zh:'害怕', pinyin:'hàipà', hv:'hại phạ', vi:'sợ', pos:'động từ' },
        { zh:'错误', pinyin:'cuòwù', hv:'thác ngộ', vi:'lỗi sai', pos:'danh từ' },
        { zh:'机会', pinyin:'jīhuì', hv:'cơ hội', vi:'cơ hội', pos:'danh từ' },
        { zh:'环境', pinyin:'huánjìng', hv:'hoàn cảnh', vi:'môi trường', pos:'danh từ' },
        { zh:'鼓励', pinyin:'gǔlì', hv:'cổ lệ', vi:'khích lệ', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我的口语一直不好，真想放弃。', pinyin:'Wǒ de kǒuyǔ yìzhí bù hǎo, zhēn xiǎng fàngqì.', vi:'Khẩu ngữ mình mãi không khá, muốn bỏ thật.' },
        { sp:'B', zh:'只要坚持练习，就一定能说好。', pinyin:'Zhǐyào jiānchí liànxí, jiù yídìng néng shuō hǎo.', vi:'Chỉ cần kiên trì luyện là nói tốt được.' },
        { sp:'A', zh:'可是我害怕说错。', pinyin:'Kěshì wǒ hàipà shuō cuò.', vi:'Nhưng mình sợ nói sai.' },
        { sp:'B', zh:'只有不怕错误，才有进步的机会。', pinyin:'Zhǐyǒu bú pà cuòwù, cái yǒu jìnbù de jīhuì.', vi:'Chỉ khi không sợ sai mới có cơ hội tiến bộ.' }
      ]
    },

    {
      level:'hsk3', no:17, zh:'他连一句话都没说', pinyin:'Tā lián yí jù huà dōu méi shuō', vi:'Anh ấy một câu cũng không nói',
      skill:'Nhấn mạnh 连…都/也; đại từ nghi vấn + 都 (什么都/谁都)',
      grammar:[
        { form:'连 + X + 都/也 + V', vi:'“ngay cả X cũng…”',
          note:'Nhấn mạnh trường hợp cực đoan. Vd 连老师都不知道 / 他连饭都没吃就走了.',
          ex:{ zh:'他忙得连饭都没时间吃。', pinyin:'Tā máng de lián fàn dōu méi shíjiān chī.', vi:'Anh ấy bận đến mức cơm cũng không có thời gian ăn.' } },
        { form:'什么/谁/哪儿 + 都/也 + V', vi:'“cái gì/ai/đâu cũng…”',
          note:'Khẳng định toàn bộ hoặc phủ định hoàn toàn: 什么都想吃 / 谁也不认识 / 哪儿都不去.',
          ex:{ zh:'今天我什么都不想做。', pinyin:'Jīntiān wǒ shénme dōu bù xiǎng zuò.', vi:'Hôm nay tôi chẳng muốn làm gì cả.' } }
      ],
      vocab:[
        { zh:'连', pinyin:'lián', hv:'liên', vi:'ngay cả', pos:'giới từ' },
        { zh:'句', pinyin:'jù', hv:'cú', vi:'câu (lượng từ)', pos:'lượng từ' },
        { zh:'生气', pinyin:'shēngqì', hv:'sinh khí', vi:'tức giận', pos:'động từ' },
        { zh:'难过', pinyin:'nánguò', hv:'nan quá', vi:'buồn', pos:'tính từ' },
        { zh:'安慰', pinyin:'ānwèi', hv:'an uỷ', vi:'an ủi', pos:'động từ' },
        { zh:'解释', pinyin:'jiěshì', hv:'giải thích', vi:'giải thích', pos:'động từ' },
        { zh:'误会', pinyin:'wùhuì', hv:'ngộ hội', vi:'hiểu lầm', pos:'danh từ; động từ' },
        { zh:'态度', pinyin:'tàidu', hv:'thái độ', vi:'thái độ', pos:'danh từ' },
        { zh:'关心', pinyin:'guānxīn', hv:'quan tâm', vi:'quan tâm', pos:'động từ' },
        { zh:'冷静', pinyin:'lěngjìng', hv:'lãnh tĩnh', vi:'bình tĩnh', pos:'tính từ' },
        { zh:'其实', pinyin:'qíshí', hv:'kỳ thực', vi:'thực ra', pos:'phó từ' },
        { zh:'理解', pinyin:'lǐjiě', hv:'lý giải', vi:'hiểu, thông cảm', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'小李今天怎么了？连一句话都没说。', pinyin:'Xiǎo Lǐ jīntiān zěnme le? Lián yí jù huà dōu méi shuō.', vi:'Tiểu Lý hôm nay sao thế? Một câu cũng không nói.' },
        { sp:'B', zh:'他跟朋友有点儿误会，很难过。', pinyin:'Tā gēn péngyou yǒudiǎnr wùhuì, hěn nánguò.', vi:'Cậu ấy có chút hiểu lầm với bạn, đang buồn.' },
        { sp:'A', zh:'那我们去安慰安慰他吧。', pinyin:'Nà wǒmen qù ānwèi ānwèi tā ba.', vi:'Vậy mình đi an ủi cậu ấy đi.' },
        { sp:'B', zh:'他现在谁都不想见，等他冷静一下再说。', pinyin:'Tā xiànzài shéi dōu bù xiǎng jiàn, děng tā lěngjìng yíxià zài shuō.', vi:'Giờ cậu ấy chẳng muốn gặp ai, đợi bình tĩnh lại rồi tính.' }
      ]
    },

    {
      level:'hsk3', no:18, zh:'为了身体健康，我每天跑步', pinyin:'Wèile shēntǐ jiànkāng, wǒ měitiān pǎobù', vi:'Vì sức khoẻ, tôi chạy bộ mỗi ngày',
      skill:'Mục đích 为了; nguyên nhân với 因为…所以 / 由于',
      grammar:[
        { form:'为了 + mục đích，+ hành động', vi:'“vì / để …”',
          note:'为了 nêu mục đích, đứng đầu câu hoặc trước động từ. Vd 为了学好汉语，他去了中国.',
          ex:{ zh:'为了身体健康，我每天跑步。', pinyin:'Wèile shēntǐ jiànkāng, wǒ měitiān pǎobù.', vi:'Vì sức khoẻ, tôi chạy bộ hằng ngày.' } },
        { form:'S + 对 + N + 有好处 / 有帮助', vi:'“có lợi / có ích cho …”',
          note:'Vd 运动对身体有好处 / 这本书对学习很有帮助. Phủ định: 没有好处 / 有坏处.',
          ex:{ zh:'早睡早起对身体有好处。', pinyin:'Zǎo shuì zǎo qǐ duì shēntǐ yǒu hǎochu.', vi:'Ngủ sớm dậy sớm có lợi cho sức khoẻ.' } }
      ],
      vocab:[
        { zh:'为了', pinyin:'wèile', hv:'vị liễu', vi:'vì, để', pos:'giới từ' },
        { zh:'健康', pinyin:'jiànkāng', hv:'kiện khang', vi:'khoẻ mạnh; sức khoẻ', pos:'tính từ; danh từ' },
        { zh:'跑步', pinyin:'pǎobù', hv:'bào bộ', vi:'chạy bộ', pos:'động từ' },
        { zh:'锻炼', pinyin:'duànliàn', hv:'đoàn luyện', vi:'rèn luyện, tập thể dục', pos:'động từ' },
        { zh:'好处', pinyin:'hǎochu', hv:'hảo xứ', vi:'lợi ích', pos:'danh từ' },
        { zh:'坏处', pinyin:'huàichu', hv:'hoại xứ', vi:'tác hại', pos:'danh từ' },
        { zh:'帮助', pinyin:'bāngzhù', hv:'bang trợ', vi:'giúp đỡ; sự giúp ích', pos:'động từ; danh từ' },
        { zh:'减肥', pinyin:'jiǎnféi', hv:'giảm phì', vi:'giảm cân', pos:'động từ' },
        { zh:'公斤', pinyin:'gōngjīn', hv:'công cân', vi:'ki-lô-gam', pos:'lượng từ' },
        { zh:'早起', pinyin:'zǎo qǐ', hv:'tảo khởi', vi:'dậy sớm', pos:'động từ' },
        { zh:'水果', pinyin:'shuǐguǒ', hv:'thuỷ quả', vi:'hoa quả', pos:'danh từ' },
        { zh:'甜', pinyin:'tián', hv:'điềm', vi:'ngọt', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你怎么每天都这么早起？', pinyin:'Nǐ zěnme měitiān dōu zhème zǎo qǐ?', vi:'Sao ngày nào bạn cũng dậy sớm thế?' },
        { sp:'B', zh:'为了身体健康，我每天早上跑步。', pinyin:'Wèile shēntǐ jiànkāng, wǒ měitiān zǎoshang pǎobù.', vi:'Vì sức khoẻ, sáng nào mình cũng chạy bộ.' },
        { sp:'A', zh:'跑步对减肥有帮助吗？', pinyin:'Pǎobù duì jiǎnféi yǒu bāngzhù ma?', vi:'Chạy bộ có giúp giảm cân không?' },
        { sp:'B', zh:'当然，我已经瘦了三公斤了。少吃甜的也有好处。', pinyin:'Dāngrán, wǒ yǐjīng shòu le sān gōngjīn le. Shǎo chī tián de yě yǒu hǎochu.', vi:'Đương nhiên, mình đã gầy đi ba cân. Ăn ít đồ ngọt cũng tốt.' }
      ]
    },

    {
      level:'hsk3', no:19, zh:'你喝茶还是咖啡', pinyin:'Nǐ hē chá háishi kāfēi', vi:'Bạn uống trà hay cà phê',
      skill:'Phân biệt 还是 (hỏi) / 或者 (kể); 要么…要么',
      grammar:[
        { form:'A 还是 B？', vi:'“A hay B?” (câu hỏi lựa chọn)',
          note:'还是 chỉ dùng trong câu hỏi hoặc mệnh đề nghi vấn gián tiếp: 我不知道去还是不去.',
          ex:{ zh:'你喝茶还是咖啡？', pinyin:'Nǐ hē chá háishi kāfēi?', vi:'Bạn uống trà hay cà phê?' } },
        { form:'A 或者 B / 要么 A，要么 B', vi:'“A hoặc B” (câu kể)',
          note:'或者 dùng trong câu trần thuật: 茶或者咖啡都行. 要么…要么 nêu hai lựa chọn phải chọn một.',
          ex:{ zh:'要么打车，要么坐地铁。', pinyin:'Yàome dǎchē, yàome zuò dìtiě.', vi:'Hoặc bắt taxi, hoặc đi tàu điện ngầm.' } }
      ],
      vocab:[
        { zh:'还是', pinyin:'háishi', hv:'hoàn thị', vi:'hay là (hỏi)', pos:'liên từ' },
        { zh:'或者', pinyin:'huòzhě', hv:'hoặc giả', vi:'hoặc (kể)', pos:'liên từ' },
        { zh:'要么', pinyin:'yàome', hv:'yếu ma', vi:'hoặc là', pos:'liên từ' },
        { zh:'咖啡', pinyin:'kāfēi', hv:'ca phi', vi:'cà phê', pos:'danh từ' },
        { zh:'果汁', pinyin:'guǒzhī', hv:'quả trấp', vi:'nước ép', pos:'danh từ' },
        { zh:'选择', pinyin:'xuǎnzé', hv:'tuyển trạch', vi:'lựa chọn', pos:'động từ; danh từ' },
        { zh:'随便', pinyin:'suíbiàn', hv:'tuỳ tiện', vi:'tuỳ ý, sao cũng được', pos:'phó từ; tính từ' },
        { zh:'打车', pinyin:'dǎchē', hv:'đả xa', vi:'bắt taxi', pos:'động từ' },
        { zh:'地铁', pinyin:'dìtiě', hv:'địa thiết', vi:'tàu điện ngầm', pos:'danh từ' },
        { zh:'方便', pinyin:'fāngbiàn', hv:'phương tiện', vi:'tiện lợi', pos:'tính từ' },
        { zh:'菜单', pinyin:'càidān', hv:'thái đơn', vi:'thực đơn', pos:'danh từ' },
        { zh:'甜点', pinyin:'tiándiǎn', hv:'điềm điểm', vi:'món tráng miệng', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你喝茶还是咖啡？', pinyin:'Nǐ hē chá háishi kāfēi?', vi:'Bạn uống trà hay cà phê?' },
        { sp:'B', zh:'随便，茶或者咖啡都可以。', pinyin:'Suíbiàn, chá huòzhě kāfēi dōu kěyǐ.', vi:'Sao cũng được, trà hoặc cà phê đều được.' },
        { sp:'A', zh:'吃完饭我们怎么回去？', pinyin:'Chī wán fàn wǒmen zěnme huíqù?', vi:'Ăn xong mình về bằng gì?' },
        { sp:'B', zh:'要么打车，要么坐地铁，地铁更方便。', pinyin:'Yàome dǎchē, yàome zuò dìtiě, dìtiě gèng fāngbiàn.', vi:'Hoặc taxi, hoặc tàu điện ngầm; tàu tiện hơn.' }
      ]
    },

    {
      level:'hsk3', no:20, zh:'这里的风景美极了', pinyin:'Zhèlǐ de fēngjǐng měi jí le', vi:'Phong cảnh ở đây đẹp cực',
      skill:'Bổ ngữ mức độ 极了/死了/得很; tổng ôn HSK3',
      grammar:[
        { form:'adj + 极了 / 死了 / 得很', vi:'mức độ rất cao',
          note:'极了 (cực kỳ, khen), 死了 (…chết đi được, thường tiêu cực), 得很 (rất). Vd 好吃极了 / 累死了 / 好得很.',
          ex:{ zh:'今天累死了，但是高兴极了。', pinyin:'Jīntiān lèi sǐ le, dànshì gāoxìng jí le.', vi:'Hôm nay mệt chết đi được nhưng vui cực.' } },
        { form:'Tổng ôn: 把 / 被 / 得 / 过 / 起来 / 连…都 / 只要…就', vi:'Điểm ngữ pháp trọng tâm HSK3',
          note:'Thử tự đặt mỗi mẫu một câu: 把书放在桌子上 · 被雨淋湿了 · 说得很流利 · 去过长城 · 热起来了 · 连水都没喝 · 只要努力就能进步.',
          ex:{ zh:'只要多练习，你就一定能说得像中国人一样。', pinyin:'Zhǐyào duō liànxí, nǐ jiù yídìng néng shuō de xiàng Zhōngguórén yíyàng.', vi:'Chỉ cần luyện nhiều, bạn chắc chắn nói được như người Trung Quốc.' } }
      ],
      vocab:[
        { zh:'风景', pinyin:'fēngjǐng', hv:'phong cảnh', vi:'phong cảnh', pos:'danh từ' },
        { zh:'极了', pinyin:'jí le', hv:'cực liễu', vi:'cực kỳ', pos:'bổ ngữ' },
        { zh:'美', pinyin:'měi', hv:'mỹ', vi:'đẹp', pos:'tính từ' },
        { zh:'累', pinyin:'lèi', hv:'luỵ', vi:'mệt', pos:'tính từ' },
        { zh:'像', pinyin:'xiàng', hv:'tượng', vi:'giống như', pos:'động từ; giới từ' },
        { zh:'云', pinyin:'yún', hv:'vân', vi:'mây', pos:'danh từ' },
        { zh:'河', pinyin:'hé', hv:'hà', vi:'sông', pos:'danh từ' },
        { zh:'树', pinyin:'shù', hv:'thụ', vi:'cây', pos:'danh từ' },
        { zh:'草', pinyin:'cǎo', hv:'thảo', vi:'cỏ', pos:'danh từ' },
        { zh:'花园', pinyin:'huāyuán', hv:'hoa viên', vi:'vườn hoa', pos:'danh từ' },
        { zh:'新鲜', pinyin:'xīnxiān', hv:'tân tiên', vi:'tươi, trong lành', pos:'tính từ' },
        { zh:'值得', pinyin:'zhíde', hv:'trị đắc', vi:'đáng (để)', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'这里的风景美极了！', pinyin:'Zhèlǐ de fēngjǐng měi jí le!', vi:'Phong cảnh ở đây đẹp cực!' },
        { sp:'B', zh:'是啊，空气也新鲜得很。', pinyin:'Shì a, kōngqì yě xīnxiān de hěn.', vi:'Ừ, không khí cũng trong lành lắm.' },
        { sp:'A', zh:'爬了三个小时的山，我累死了。', pinyin:'Pá le sān ge xiǎoshí de shān, wǒ lèi sǐ le.', vi:'Leo núi ba tiếng, mình mệt chết đi được.' },
        { sp:'B', zh:'虽然累，但是值得。把照片发给我吧！', pinyin:'Suīrán lèi, dànshì zhíde. Bǎ zhàopiàn fā gěi wǒ ba!', vi:'Tuy mệt nhưng đáng. Gửi ảnh cho mình nhé!' }
      ]
    }
  ]
};

/* Bài nào chưa ghi cấp thì thuộc HSK1 */
COURSE_ZH.lessons.forEach(l => { if (!l.level) l.level = 'hsk1'; });

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSE_ZH, STROKES_ZH, RADICALS_ZH, PINYIN_ZH };
}
