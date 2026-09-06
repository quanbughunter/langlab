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
    { id:'hsk4', zh:'HSK 4', vi:'HSK 4 · Trung–cao cấp', lessons:20, status:'active' },
    { id:'hsk5', zh:'HSK 5', vi:'HSK 5 · Cao cấp', lessons:36, status:'active'  }
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
    },

    /* ================= HSK 4 ================= */
    {
      level:'hsk4', no:1, zh:'不管多忙，他都坚持锻炼', pinyin:'Bùguǎn duō máng, tā dōu jiānchí duànliàn', vi:'Dù bận đến đâu anh ấy vẫn tập luyện',
      skill:'Điều kiện vô điều kiện: 不管/无论…都; 既然…就',
      grammar:[
        { form:'不管 / 无论 + (nghi vấn) …，都/也 …', vi:'“bất kể / dù … cũng …”',
          note:'Vế trước phải chứa yếu tố nghi vấn hoặc lựa chọn: 不管多忙 / 无论谁 / 不管刮风还是下雨. 无论 trang trọng hơn 不管.',
          ex:{ zh:'无论遇到什么困难，我们都不会放弃。', pinyin:'Wúlùn yùdào shénme kùnnan, wǒmen dōu bú huì fàngqì.', vi:'Dù gặp khó khăn gì chúng tôi cũng không bỏ cuộc.' } },
        { form:'既然 A，就 B', vi:'“đã … thì …” (nêu sự thật rồi suy ra)',
          note:'既然 dẫn một việc đã xác lập, vế sau kết luận với 就/那/也. Vd 既然来了，就多住几天吧.',
          ex:{ zh:'既然你身体不舒服，就早点儿回去休息吧。', pinyin:'Jìrán nǐ shēntǐ bù shūfu, jiù zǎodiǎnr huíqù xiūxi ba.', vi:'Đã không khoẻ thì về nghỉ sớm đi.' } }
      ],
      vocab:[
        { zh:'不管', pinyin:'bùguǎn', hv:'bất quản', vi:'bất kể, dù', pos:'liên từ' },
        { zh:'无论', pinyin:'wúlùn', hv:'vô luận', vi:'bất luận, dù', pos:'liên từ' },
        { zh:'既然', pinyin:'jìrán', hv:'ký nhiên', vi:'đã … (thì)', pos:'liên từ' },
        { zh:'困难', pinyin:'kùnnan', hv:'khốn nan', vi:'khó khăn', pos:'danh từ; tính từ' },
        { zh:'遇到', pinyin:'yùdào', hv:'ngộ đáo', vi:'gặp phải', pos:'động từ' },
        { zh:'坚持', pinyin:'jiānchí', hv:'kiên trì', vi:'kiên trì', pos:'động từ' },
        { zh:'规律', pinyin:'guīlǜ', hv:'quy luật', vi:'quy luật; điều độ', pos:'danh từ; tính từ' },
        { zh:'习惯', pinyin:'xíguàn', hv:'tập quán', vi:'thói quen', pos:'danh từ; động từ' },
        { zh:'压力', pinyin:'yālì', hv:'áp lực', vi:'áp lực', pos:'danh từ' },
        { zh:'精神', pinyin:'jīngshén', hv:'tinh thần', vi:'tinh thần', pos:'danh từ' },
        { zh:'效果', pinyin:'xiàoguǒ', hv:'hiệu quả', vi:'hiệu quả', pos:'danh từ' },
        { zh:'佩服', pinyin:'pèifú', hv:'bội phục', vi:'khâm phục', pos:'động từ' },
        { zh:'羡慕', pinyin:'xiànmù', hv:'tiện mộ', vi:'ngưỡng mộ, ghen tị', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你每天都去健身房吗？', pinyin:'Nǐ měitiān dōu qù jiànshēnfáng ma?', vi:'Ngày nào bạn cũng đến phòng gym à?' },
        { sp:'B', zh:'对，不管多忙，我都坚持锻炼一个小时。', pinyin:'Duì, bùguǎn duō máng, wǒ dōu jiānchí duànliàn yí ge xiǎoshí.', vi:'Ừ, dù bận đến đâu mình vẫn tập một tiếng.' },
        { sp:'A', zh:'真佩服你。我工作压力大，总是没精神。', pinyin:'Zhēn pèifú nǐ. Wǒ gōngzuò yālì dà, zǒngshì méi jīngshén.', vi:'Khâm phục thật. Mình áp lực công việc lớn, lúc nào cũng uể oải.' },
        { sp:'B', zh:'既然这样，就更应该运动。生活有规律，效果很明显。', pinyin:'Jìrán zhèyàng, jiù gèng yīnggāi yùndòng. Shēnghuó yǒu guīlǜ, xiàoguǒ hěn míngxiǎn.', vi:'Đã vậy thì càng nên vận động. Sống điều độ, hiệu quả rất rõ.' }
      ]
    },

    {
      level:'hsk4', no:2, zh:'即使下雨，比赛也照常进行', pinyin:'Jíshǐ xiàyǔ, bǐsài yě zhàocháng jìnxíng', vi:'Dù mưa trận đấu vẫn diễn ra như thường',
      skill:'Nhượng bộ giả định 即使…也; loại trừ 除非…否则',
      grammar:[
        { form:'即使 A，也 B', vi:'“cho dù A thì cũng B” (giả định)',
          note:'Khác 虽然 (sự thật đã xảy ra), 即使 nêu tình huống giả định/cực đoan. Vd 即使失败了，也不要灰心.',
          ex:{ zh:'即使再贵，这本书我也要买。', pinyin:'Jíshǐ zài guì, zhè běn shū wǒ yě yào mǎi.', vi:'Cho dù đắt nữa tôi cũng phải mua cuốn này.' } },
        { form:'除非 A，否则 B / 除非 A，才 B', vi:'“trừ phi A, nếu không thì B”',
          note:'除非 nêu điều kiện duy nhất. Vd 除非你去，否则我不去 / 除非有证明，才能进去.',
          ex:{ zh:'除非提前预订，否则周末订不到座位。', pinyin:'Chúfēi tíqián yùdìng, fǒuzé zhōumò dìng bu dào zuòwèi.', vi:'Trừ phi đặt trước, nếu không cuối tuần không có chỗ.' } }
      ],
      vocab:[
        { zh:'即使', pinyin:'jíshǐ', hv:'tức sử', vi:'cho dù', pos:'liên từ' },
        { zh:'除非', pinyin:'chúfēi', hv:'trừ phi', vi:'trừ phi', pos:'liên từ' },
        { zh:'否则', pinyin:'fǒuzé', hv:'phủ tắc', vi:'nếu không thì', pos:'liên từ' },
        { zh:'照常', pinyin:'zhàocháng', hv:'chiếu thường', vi:'như thường lệ', pos:'phó từ' },
        { zh:'进行', pinyin:'jìnxíng', hv:'tiến hành', vi:'tiến hành, diễn ra', pos:'động từ' },
        { zh:'提前', pinyin:'tíqián', hv:'đề tiền', vi:'trước (thời hạn)', pos:'động từ' },
        { zh:'预订', pinyin:'yùdìng', hv:'dự đính', vi:'đặt trước', pos:'động từ' },
        { zh:'座位', pinyin:'zuòwèi', hv:'toạ vị', vi:'chỗ ngồi', pos:'danh từ' },
        { zh:'取消', pinyin:'qǔxiāo', hv:'thủ tiêu', vi:'huỷ bỏ', pos:'động từ' },
        { zh:'推迟', pinyin:'tuīchí', hv:'suy trì', vi:'hoãn lại', pos:'động từ' },
        { zh:'失败', pinyin:'shībài', hv:'thất bại', vi:'thất bại', pos:'động từ; danh từ' },
        { zh:'灰心', pinyin:'huīxīn', hv:'hôi tâm', vi:'nản lòng', pos:'tính từ' },
        { zh:'观众', pinyin:'guānzhòng', hv:'quan chúng', vi:'khán giả', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'明天要下大雨，比赛会取消吗？', pinyin:'Míngtiān yào xià dàyǔ, bǐsài huì qǔxiāo ma?', vi:'Mai mưa to, trận đấu có huỷ không?' },
        { sp:'B', zh:'即使下雨，比赛也照常进行，除非有大风。', pinyin:'Jíshǐ xiàyǔ, bǐsài yě zhàocháng jìnxíng, chúfēi yǒu dàfēng.', vi:'Dù mưa vẫn đấu như thường, trừ phi có gió lớn.' },
        { sp:'A', zh:'那我们得提前预订座位。', pinyin:'Nà wǒmen děi tíqián yùdìng zuòwèi.', vi:'Vậy mình phải đặt chỗ trước.' },
        { sp:'B', zh:'对，否则观众太多，就没位子了。', pinyin:'Duì, fǒuzé guānzhòng tài duō, jiù méi wèizi le.', vi:'Đúng, nếu không khán giả đông quá là hết chỗ.' }
      ]
    },

    {
      level:'hsk4', no:3, zh:'由于天气原因，航班延误了', pinyin:'Yóuyú tiānqì yuányīn, hángbān yánwù le', vi:'Do thời tiết, chuyến bay bị hoãn',
      skill:'Nguyên nhân – kết quả trang trọng: 由于…因此; 之所以…是因为',
      grammar:[
        { form:'由于 A，(因此/所以) B', vi:'“do A nên B” (văn viết)',
          note:'由于 trang trọng hơn 因为, thường đứng đầu câu; vế sau có thể dùng 因此. Vd 由于路上堵车，因此我迟到了.',
          ex:{ zh:'由于人数太多，活动改在礼堂举行。', pinyin:'Yóuyú rénshù tài duō, huódòng gǎi zài lǐtáng jǔxíng.', vi:'Do số người quá đông, hoạt động chuyển sang hội trường.' } },
        { form:'A 之所以 B，是因为 C', vi:'“sở dĩ A B là vì C” (nêu kết quả trước, nguyên nhân sau)',
          note:'Dùng khi muốn nhấn mạnh nguyên nhân. Vd 他之所以成功，是因为他很努力.',
          ex:{ zh:'航班之所以延误，是因为北京下大雪。', pinyin:'Hángbān zhī suǒyǐ yánwù, shì yīnwèi Běijīng xià dàxuě.', vi:'Chuyến bay sở dĩ hoãn là vì Bắc Kinh tuyết lớn.' } }
      ],
      vocab:[
        { zh:'由于', pinyin:'yóuyú', hv:'do vu', vi:'do, bởi vì', pos:'giới từ; liên từ' },
        { zh:'因此', pinyin:'yīncǐ', hv:'nhân thử', vi:'vì thế', pos:'liên từ' },
        { zh:'之所以', pinyin:'zhī suǒyǐ', hv:'chi sở dĩ', vi:'sở dĩ', pos:'liên từ' },
        { zh:'原因', pinyin:'yuányīn', hv:'nguyên nhân', vi:'nguyên nhân', pos:'danh từ' },
        { zh:'航班', pinyin:'hángbān', hv:'hàng ban', vi:'chuyến bay', pos:'danh từ' },
        { zh:'延误', pinyin:'yánwù', hv:'diên ngộ', vi:'hoãn, chậm trễ', pos:'động từ' },
        { zh:'起飞', pinyin:'qǐfēi', hv:'khởi phi', vi:'cất cánh', pos:'động từ' },
        { zh:'降落', pinyin:'jiàngluò', hv:'giáng lạc', vi:'hạ cánh', pos:'động từ' },
        { zh:'登机牌', pinyin:'dēngjīpái', hv:'đăng cơ bài', vi:'thẻ lên máy bay', pos:'danh từ' },
        { zh:'礼堂', pinyin:'lǐtáng', hv:'lễ đường', vi:'hội trường', pos:'danh từ' },
        { zh:'举行', pinyin:'jǔxíng', hv:'cử hành', vi:'tổ chức, cử hành', pos:'động từ' },
        { zh:'通知', pinyin:'tōngzhī', hv:'thông tri', vi:'thông báo', pos:'động từ; danh từ' },
        { zh:'耐心', pinyin:'nàixīn', hv:'nại tâm', vi:'kiên nhẫn', pos:'tính từ; danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'请问，去北京的航班为什么还没起飞？', pinyin:'Qǐngwèn, qù Běijīng de hángbān wèishénme hái méi qǐfēi?', vi:'Xin hỏi, sao chuyến đi Bắc Kinh vẫn chưa cất cánh?' },
        { sp:'B', zh:'由于天气原因，航班延误了，大概两个小时。', pinyin:'Yóuyú tiānqì yuányīn, hángbān yánwù le, dàgài liǎng ge xiǎoshí.', vi:'Do thời tiết, chuyến bay hoãn khoảng hai tiếng.' },
        { sp:'A', zh:'之所以延误，是因为北京下大雪吗？', pinyin:'Zhī suǒyǐ yánwù, shì yīnwèi Běijīng xià dàxuě ma?', vi:'Hoãn là vì Bắc Kinh tuyết lớn à?' },
        { sp:'B', zh:'是的。请您耐心等待，有新通知我们会马上广播。', pinyin:'Shì de. Qǐng nín nàixīn děngdài, yǒu xīn tōngzhī wǒmen huì mǎshàng guǎngbō.', vi:'Vâng. Xin kiên nhẫn chờ, có thông báo mới sẽ phát loa ngay.' }
      ]
    },

    {
      level:'hsk4', no:4, zh:'他不但没生气，反而笑了', pinyin:'Tā búdàn méi shēngqì, fǎn’ér xiào le', vi:'Anh ấy không những không giận mà ngược lại còn cười',
      skill:'Ngược với dự đoán 反而; tăng tiến cực đoan 甚至',
      grammar:[
        { form:'不但不/没 A，反而 B', vi:'“không những không A mà ngược lại còn B”',
          note:'反而 chỉ kết quả trái với mong đợi. Có thể dùng một mình: 吃了药，病反而更重了.',
          ex:{ zh:'雨不但没停，反而越下越大。', pinyin:'Yǔ búdàn méi tíng, fǎn’ér yuè xià yuè dà.', vi:'Mưa không những không tạnh mà còn càng lúc càng to.' } },
        { form:'…，甚至 …', vi:'“thậm chí …”',
          note:'甚至 nêu trường hợp nổi bật nhất trong loạt ví dụ, thường kèm 都/也. Vd 他很忙，甚至周末也要工作.',
          ex:{ zh:'这道菜太辣了，甚至四川人都受不了。', pinyin:'Zhè dào cài tài là le, shènzhì Sìchuānrén dōu shòu bu liǎo.', vi:'Món này cay quá, thậm chí người Tứ Xuyên cũng chịu không nổi.' } }
      ],
      vocab:[
        { zh:'反而', pinyin:'fǎn’ér', hv:'phản nhi', vi:'trái lại, ngược lại', pos:'phó từ' },
        { zh:'甚至', pinyin:'shènzhì', hv:'thậm chí', vi:'thậm chí', pos:'phó từ; liên từ' },
        { zh:'受不了', pinyin:'shòu bu liǎo', hv:'thụ bất liễu', vi:'chịu không nổi', pos:'động từ' },
        { zh:'道歉', pinyin:'dàoqiàn', hv:'đạo khiểm', vi:'xin lỗi', pos:'động từ' },
        { zh:'原谅', pinyin:'yuánliàng', hv:'nguyên lượng', vi:'tha thứ', pos:'động từ' },
        { zh:'态度', pinyin:'tàidu', hv:'thái độ', vi:'thái độ', pos:'danh từ' },
        { zh:'脾气', pinyin:'píqi', hv:'tỳ khí', vi:'tính khí', pos:'danh từ' },
        { zh:'幽默', pinyin:'yōumò', hv:'u mặc', vi:'hài hước', pos:'tính từ' },
        { zh:'吃惊', pinyin:'chījīng', hv:'cật kinh', vi:'kinh ngạc', pos:'động từ' },
        { zh:'相反', pinyin:'xiāngfǎn', hv:'tương phản', vi:'trái lại, ngược lại', pos:'tính từ; liên từ' },
        { zh:'打碎', pinyin:'dǎsuì', hv:'đả toái', vi:'làm vỡ', pos:'động từ' },
        { zh:'安慰', pinyin:'ānwèi', hv:'an uỷ', vi:'an ủi', pos:'động từ' },
        { zh:'性格', pinyin:'xìnggé', hv:'tính cách', vi:'tính cách', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'听说你把老板的杯子打碎了？他生气了吧？', pinyin:'Tīngshuō nǐ bǎ lǎobǎn de bēizi dǎsuì le? Tā shēngqì le ba?', vi:'Nghe nói bạn làm vỡ cốc của sếp? Ông ấy giận chứ?' },
        { sp:'B', zh:'我马上道歉了。他不但没生气，反而笑着安慰我。', pinyin:'Wǒ mǎshàng dàoqiàn le. Tā búdàn méi shēngqì, fǎn’ér xiàozhe ānwèi wǒ.', vi:'Mình xin lỗi ngay. Ông ấy không những không giận mà còn cười an ủi mình.' },
        { sp:'A', zh:'真让人吃惊，他脾气这么好？', pinyin:'Zhēn ràng rén chījīng, tā píqi zhème hǎo?', vi:'Bất ngờ thật, tính ông ấy tốt vậy sao?' },
        { sp:'B', zh:'他很幽默，甚至说那个杯子本来就该换了。', pinyin:'Tā hěn yōumò, shènzhì shuō nàge bēizi běnlái jiù gāi huàn le.', vi:'Ông ấy hài hước lắm, thậm chí bảo cái cốc đó vốn nên thay rồi.' }
      ]
    },

    {
      level:'hsk4', no:5, zh:'你到底想说什么', pinyin:'Nǐ dàodǐ xiǎng shuō shénme', vi:'Rốt cuộc bạn muốn nói gì',
      skill:'Truy vấn 到底/究竟; phản vấn 难道…吗',
      grammar:[
        { form:'到底 / 究竟 + câu hỏi', vi:'“rốt cuộc …?”',
          note:'Nhấn mạnh muốn biết rõ; không dùng với 吗. 究竟 trang trọng hơn. Vd 你到底去不去？/ 这究竟是怎么回事？',
          ex:{ zh:'你到底同意不同意？', pinyin:'Nǐ dàodǐ tóngyì bù tóngyì?', vi:'Rốt cuộc bạn có đồng ý không?' } },
        { form:'难道 … (吗)?', vi:'“chẳng lẽ …?” (phản vấn)',
          note:'Câu hỏi tu từ, ngụ ý ngược lại. Vd 难道你忘了吗？(= bạn không thể quên được).',
          ex:{ zh:'难道你不知道今天是她的生日吗？', pinyin:'Nándào nǐ bù zhīdào jīntiān shì tā de shēngrì ma?', vi:'Chẳng lẽ bạn không biết hôm nay là sinh nhật cô ấy?' } }
      ],
      vocab:[
        { zh:'到底', pinyin:'dàodǐ', hv:'đáo để', vi:'rốt cuộc', pos:'phó từ' },
        { zh:'究竟', pinyin:'jiūjìng', hv:'cứu cánh', vi:'rốt cuộc, thực ra', pos:'phó từ' },
        { zh:'难道', pinyin:'nándào', hv:'nan đạo', vi:'chẳng lẽ', pos:'phó từ' },
        { zh:'怎么回事', pinyin:'zěnme huí shì', hv:'chẩm ma hồi sự', vi:'chuyện gì thế', pos:'cụm cố định' },
        { zh:'秘密', pinyin:'mìmì', hv:'bí mật', vi:'bí mật', pos:'danh từ' },
        { zh:'猜', pinyin:'cāi', hv:'sai', vi:'đoán', pos:'động từ' },
        { zh:'惊喜', pinyin:'jīngxǐ', hv:'kinh hỉ', vi:'bất ngờ thú vị', pos:'danh từ' },
        { zh:'礼物', pinyin:'lǐwù', hv:'lễ vật', vi:'quà', pos:'danh từ' },
        { zh:'邀请', pinyin:'yāoqǐng', hv:'yêu thỉnh', vi:'mời', pos:'động từ' },
        { zh:'隐瞒', pinyin:'yǐnmán', hv:'ẩn man', vi:'giấu giếm', pos:'động từ' },
        { zh:'坦白', pinyin:'tǎnbái', hv:'thản bạch', vi:'thẳng thắn, thú thật', pos:'tính từ; động từ' },
        { zh:'明明', pinyin:'míngmíng', hv:'minh minh', vi:'rõ ràng là', pos:'phó từ' },
        { zh:'弄清楚', pinyin:'nòng qīngchu', hv:'lộng thanh sở', vi:'làm rõ', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你今天怪怪的，到底想说什么？', pinyin:'Nǐ jīntiān guàiguài de, dàodǐ xiǎng shuō shénme?', vi:'Hôm nay bạn lạ lạ, rốt cuộc muốn nói gì?' },
        { sp:'B', zh:'没什么，你猜猜看。', pinyin:'Méi shénme, nǐ cāicai kàn.', vi:'Không có gì, bạn đoán thử xem.' },
        { sp:'A', zh:'难道你们准备了惊喜？明明有秘密还隐瞒我。', pinyin:'Nándào nǐmen zhǔnbèi le jīngxǐ? Míngmíng yǒu mìmì hái yǐnmán wǒ.', vi:'Chẳng lẽ mọi người chuẩn bị bất ngờ? Rõ ràng có bí mật mà còn giấu.' },
        { sp:'B', zh:'好吧，我坦白：晚上大家想邀请你去吃饭。', pinyin:'Hǎo ba, wǒ tǎnbái: wǎnshang dàjiā xiǎng yāoqǐng nǐ qù chīfàn.', vi:'Được rồi, mình thú thật: tối nay mọi người muốn mời bạn đi ăn.' }
      ]
    },

    {
      level:'hsk4', no:6, zh:'恐怕来不及了', pinyin:'Kǒngpà láibují le', vi:'E là không kịp rồi',
      skill:'Phỏng đoán lo ngại 恐怕; 来得及/来不及; khuyên nhủ 千万',
      grammar:[
        { form:'恐怕 + mệnh đề', vi:'“e rằng, sợ là …” (phỏng đoán không mong muốn)',
          note:'恐怕 là phó từ, không phải động từ “sợ”; không dùng 我恐怕他. Vd 恐怕要下雨了.',
          ex:{ zh:'现在出发恐怕赶不上火车了。', pinyin:'Xiànzài chūfā kǒngpà gǎn bu shàng huǒchē le.', vi:'Giờ xuất phát e không kịp tàu.' } },
        { form:'来得及 / 来不及 (+ V); 千万 + 别/要', vi:'“còn kịp / không kịp”; “nhất định (đừng/phải)”',
          note:'来得及 chỉ có đủ thời gian. 千万 dùng trong câu cầu khiến để dặn dò khẩn thiết: 千万别忘了 / 千万要小心.',
          ex:{ zh:'千万别忘了带护照。', pinyin:'Qiānwàn bié wàng le dài hùzhào.', vi:'Nhất định đừng quên mang hộ chiếu.' } }
      ],
      vocab:[
        { zh:'恐怕', pinyin:'kǒngpà', hv:'khủng phạ', vi:'e rằng', pos:'phó từ' },
        { zh:'来得及', pinyin:'láidejí', hv:'lai đắc cập', vi:'còn kịp', pos:'động từ' },
        { zh:'来不及', pinyin:'láibují', hv:'lai bất cập', vi:'không kịp', pos:'động từ' },
        { zh:'千万', pinyin:'qiānwàn', hv:'thiên vạn', vi:'nhất định, chớ có', pos:'phó từ' },
        { zh:'赶', pinyin:'gǎn', hv:'cản', vi:'đuổi kịp, vội đến', pos:'động từ' },
        { zh:'出发', pinyin:'chūfā', hv:'xuất phát', vi:'xuất phát', pos:'động từ' },
        { zh:'护照', pinyin:'hùzhào', hv:'hộ chiếu', vi:'hộ chiếu', pos:'danh từ' },
        { zh:'签证', pinyin:'qiānzhèng', hv:'thiêm chứng', vi:'thị thực, visa', pos:'danh từ' },
        { zh:'登机', pinyin:'dēngjī', hv:'đăng cơ', vi:'lên máy bay', pos:'động từ' },
        { zh:'排队', pinyin:'páiduì', hv:'bài đội', vi:'xếp hàng', pos:'động từ' },
        { zh:'安检', pinyin:'ānjiǎn', hv:'an kiểm', vi:'kiểm tra an ninh', pos:'danh từ' },
        { zh:'来回', pinyin:'láihuí', hv:'lai hồi', vi:'khứ hồi, đi về', pos:'danh từ; động từ' },
        { zh:'着急', pinyin:'zháojí', hv:'trước cấp', vi:'sốt ruột', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'飞机十点起飞，我们八点半出发来得及吗？', pinyin:'Fēijī shí diǎn qǐfēi, wǒmen bā diǎn bàn chūfā láidejí ma?', vi:'Máy bay 10 giờ cất cánh, 8 rưỡi xuất phát có kịp không?' },
        { sp:'B', zh:'恐怕来不及了，安检要排很长的队。', pinyin:'Kǒngpà láibují le, ānjiǎn yào pái hěn cháng de duì.', vi:'E không kịp, an ninh phải xếp hàng dài.' },
        { sp:'A', zh:'那七点半走吧。护照和签证我都放包里了。', pinyin:'Nà qī diǎn bàn zǒu ba. Hùzhào hé qiānzhèng wǒ dōu fàng bāo li le.', vi:'Vậy 7 rưỡi đi. Hộ chiếu và visa mình để trong túi rồi.' },
        { sp:'B', zh:'千万别着急，出门前再检查一遍。', pinyin:'Qiānwàn bié zháojí, chūmén qián zài jiǎnchá yí biàn.', vi:'Nhất định đừng cuống, trước khi đi kiểm tra lại một lượt.' }
      ]
    },

    {
      level:'hsk4', no:7, zh:'幸亏你提醒我', pinyin:'Xìngkuī nǐ tíxǐng wǒ', vi:'May mà bạn nhắc tôi',
      skill:'May mắn 幸亏/多亏; bất đắc dĩ 只好/不得不',
      grammar:[
        { form:'幸亏 / 多亏 A，(要不然) B', vi:'“may mà A, (nếu không) B”',
          note:'幸亏 là phó từ; 多亏 là động từ, có thể theo sau bằng người: 多亏了你. Vế sau thường nêu hậu quả tránh được.',
          ex:{ zh:'幸亏带了伞，要不然全身都湿了。', pinyin:'Xìngkuī dài le sǎn, yàoburán quánshēn dōu shī le.', vi:'May mang ô, không thì ướt hết người.' } },
        { form:'只好 / 不得不 + V', vi:'“đành phải / buộc phải”',
          note:'只好 nhẹ hơn, chọn phương án duy nhất còn lại; 不得不 nhấn sự bắt buộc. Vd 没有车，只好走路 / 他不得不承认错误.',
          ex:{ zh:'商店关门了，我们只好明天再来。', pinyin:'Shāngdiàn guānmén le, wǒmen zhǐhǎo míngtiān zài lái.', vi:'Cửa hàng đóng rồi, đành mai quay lại.' } }
      ],
      vocab:[
        { zh:'幸亏', pinyin:'xìngkuī', hv:'hạnh khuy', vi:'may mà', pos:'phó từ' },
        { zh:'多亏', pinyin:'duōkuī', hv:'đa khuy', vi:'nhờ có, may nhờ', pos:'động từ' },
        { zh:'要不然', pinyin:'yàoburán', hv:'yếu bất nhiên', vi:'nếu không thì', pos:'liên từ' },
        { zh:'只好', pinyin:'zhǐhǎo', hv:'chỉ hảo', vi:'đành phải', pos:'phó từ' },
        { zh:'不得不', pinyin:'bùdébù', hv:'bất đắc bất', vi:'buộc phải', pos:'phó từ' },
        { zh:'提醒', pinyin:'tíxǐng', hv:'đề tỉnh', vi:'nhắc nhở', pos:'động từ' },
        { zh:'截止', pinyin:'jiézhǐ', hv:'tiệt chỉ', vi:'hết hạn, chốt', pos:'động từ' },
        { zh:'日期', pinyin:'rìqī', hv:'nhật kỳ', vi:'ngày tháng', pos:'danh từ' },
        { zh:'报名', pinyin:'bàomíng', hv:'báo danh', vi:'đăng ký', pos:'động từ' },
        { zh:'材料', pinyin:'cáiliào', hv:'tài liệu', vi:'tài liệu, hồ sơ', pos:'danh từ' },
        { zh:'复印', pinyin:'fùyìn', hv:'phục ấn', vi:'photocopy', pos:'động từ' },
        { zh:'承认', pinyin:'chéngrèn', hv:'thừa nhận', vi:'thừa nhận', pos:'động từ' },
        { zh:'粗心', pinyin:'cūxīn', hv:'thô tâm', vi:'bất cẩn', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'HSK报名今天截止，你交材料了吗？', pinyin:'HSK bàomíng jīntiān jiézhǐ, nǐ jiāo cáiliào le ma?', vi:'Đăng ký HSK hôm nay chốt, bạn nộp hồ sơ chưa?' },
        { sp:'B', zh:'幸亏你提醒我，要不然我就错过日期了。', pinyin:'Xìngkuī nǐ tíxǐng wǒ, yàoburán wǒ jiù cuòguò rìqī le.', vi:'May mà bạn nhắc, không thì mình lỡ mất ngày.' },
        { sp:'A', zh:'复印店关门了，怎么办？', pinyin:'Fùyìndiàn guānmén le, zěnme bàn?', vi:'Tiệm photo đóng cửa rồi, làm sao?' },
        { sp:'B', zh:'我只好去学校打印。我得承认自己太粗心了。', pinyin:'Wǒ zhǐhǎo qù xuéxiào dǎyìn. Wǒ děi chéngrèn zìjǐ tài cūxīn le.', vi:'Đành lên trường in. Phải thừa nhận mình bất cẩn quá.' }
      ]
    },

    {
      level:'hsk4', no:8, zh:'毕竟他还是个孩子', pinyin:'Bìjìng tā háishi ge háizi', vi:'Dù sao nó vẫn là trẻ con',
      skill:'Lý lẽ 毕竟; giới hạn 至少/至多; đánh giá 值得',
      grammar:[
        { form:'毕竟 + mệnh đề', vi:'“dù sao thì, xét cho cùng”',
          note:'Nêu lý do/bản chất để biện hộ hoặc kết luận. Vd 别怪他，毕竟他是第一次做.',
          ex:{ zh:'毕竟是第一次，做得不好也正常。', pinyin:'Bìjìng shì dì-yī cì, zuò de bù hǎo yě zhèngcháng.', vi:'Dù sao là lần đầu, làm chưa tốt cũng bình thường.' } },
        { form:'至少 / 至多 + số lượng; 值得 + V', vi:'“ít nhất / nhiều nhất”; “đáng để …”',
          note:'至少 = tối thiểu, 至多 = tối đa. 值得 + động từ: 值得一看, 值得学习; phủ định 不值得.',
          ex:{ zh:'这部电影至少要看两遍才看得懂，但很值得。', pinyin:'Zhè bù diànyǐng zhìshǎo yào kàn liǎng biàn cái kàn de dǒng, dàn hěn zhíde.', vi:'Phim này ít nhất phải xem hai lượt mới hiểu, nhưng rất đáng.' } }
      ],
      vocab:[
        { zh:'毕竟', pinyin:'bìjìng', hv:'tất cánh', vi:'dù sao, xét cho cùng', pos:'phó từ' },
        { zh:'至少', pinyin:'zhìshǎo', hv:'chí thiểu', vi:'ít nhất', pos:'phó từ' },
        { zh:'至多', pinyin:'zhìduō', hv:'chí đa', vi:'nhiều nhất', pos:'phó từ' },
        { zh:'值得', pinyin:'zhíde', hv:'trị đắc', vi:'đáng (để)', pos:'động từ' },
        { zh:'正常', pinyin:'zhèngcháng', hv:'chính thường', vi:'bình thường', pos:'tính từ' },
        { zh:'责备', pinyin:'zébèi', hv:'trách bị', vi:'trách móc', pos:'động từ' },
        { zh:'教育', pinyin:'jiàoyù', hv:'giáo dục', vi:'giáo dục, dạy dỗ', pos:'động từ; danh từ' },
        { zh:'成长', pinyin:'chéngzhǎng', hv:'thành trưởng', vi:'trưởng thành', pos:'động từ' },
        { zh:'经历', pinyin:'jīnglì', hv:'kinh lịch', vi:'trải qua; trải nghiệm', pos:'động từ; danh từ' },
        { zh:'弄坏', pinyin:'nòng huài', hv:'lộng hoại', vi:'làm hỏng', pos:'động từ' },
        { zh:'耐心', pinyin:'nàixīn', hv:'nại tâm', vi:'kiên nhẫn', pos:'tính từ; danh từ' },
        { zh:'冷静', pinyin:'lěngjìng', hv:'lãnh tĩnh', vi:'bình tĩnh', pos:'tính từ' },
        { zh:'部', pinyin:'bù', hv:'bộ', vi:'bộ (phim), cuốn', pos:'lượng từ' }
      ],
      dialogue:[
        { sp:'A', zh:'儿子又把手机弄坏了，我真想责备他。', pinyin:'Érzi yòu bǎ shǒujī nòng huài le, wǒ zhēn xiǎng zébèi tā.', vi:'Con trai lại làm hỏng điện thoại, tôi muốn mắng nó thật.' },
        { sp:'B', zh:'冷静一点儿，毕竟他还是个孩子。', pinyin:'Lěngjìng yìdiǎnr, bìjìng tā háishi ge háizi.', vi:'Bình tĩnh, dù sao nó vẫn là trẻ con.' },
        { sp:'A', zh:'可这至少是第三次了。', pinyin:'Kě zhè zhìshǎo shì dì-sān cì le.', vi:'Nhưng đây ít nhất là lần thứ ba rồi.' },
        { sp:'B', zh:'耐心教育比责备更值得。孩子在经历中成长。', pinyin:'Nàixīn jiàoyù bǐ zébèi gèng zhíde. Háizi zài jīnglì zhōng chéngzhǎng.', vi:'Kiên nhẫn dạy đáng hơn trách mắng. Trẻ trưởng thành qua trải nghiệm.' }
      ]
    },

    {
      level:'hsk4', no:9, zh:'这个问题值得我们认真讨论', pinyin:'Zhège wèntí zhíde wǒmen rènzhēn tǎolùn', vi:'Vấn đề này đáng để chúng ta thảo luận nghiêm túc',
      skill:'Nêu ý kiến trong thảo luận: 对…来说, 在…看来, 首先…其次…',
      grammar:[
        { form:'对 + người + 来说 / 在 + người + 看来', vi:'“đối với … mà nói / theo … thấy”',
          note:'对…来说 nêu góc nhìn/ảnh hưởng; 在…看来 nêu quan điểm. Vd 对我来说，健康最重要 / 在他看来，这不是问题.',
          ex:{ zh:'对学生来说，时间管理非常重要。', pinyin:'Duì xuésheng lái shuō, shíjiān guǎnlǐ fēicháng zhòngyào.', vi:'Đối với sinh viên, quản lý thời gian rất quan trọng.' } },
        { form:'首先 …，其次 …，另外/最后 …', vi:'liệt kê luận điểm',
          note:'Dùng khi trình bày nhiều lý do theo thứ tự. 另外 bổ sung, 总之 tóm lại.',
          ex:{ zh:'首先要听懂，其次要敢说，最后才是写。', pinyin:'Shǒuxiān yào tīng dǒng, qícì yào gǎn shuō, zuìhòu cái shì xiě.', vi:'Trước hết phải nghe hiểu, sau là dám nói, cuối cùng mới là viết.' } }
      ],
      vocab:[
        { zh:'来说', pinyin:'lái shuō', hv:'lai thuyết', vi:'(đối với) … mà nói', pos:'cụm cố định' },
        { zh:'看来', pinyin:'kànlái', hv:'khán lai', vi:'xem ra; theo … thấy', pos:'động từ' },
        { zh:'首先', pinyin:'shǒuxiān', hv:'thủ tiên', vi:'trước hết', pos:'phó từ' },
        { zh:'其次', pinyin:'qícì', hv:'kỳ thứ', vi:'thứ đến', pos:'đại từ' },
        { zh:'另外', pinyin:'lìngwài', hv:'lánh ngoại', vi:'ngoài ra', pos:'liên từ' },
        { zh:'总之', pinyin:'zǒngzhī', hv:'tổng chi', vi:'tóm lại', pos:'liên từ' },
        { zh:'讨论', pinyin:'tǎolùn', hv:'thảo luận', vi:'thảo luận', pos:'động từ' },
        { zh:'管理', pinyin:'guǎnlǐ', hv:'quản lý', vi:'quản lý', pos:'động từ; danh từ' },
        { zh:'方面', pinyin:'fāngmiàn', hv:'phương diện', vi:'mặt, phương diện', pos:'danh từ' },
        { zh:'观点', pinyin:'guāndiǎn', hv:'quan điểm', vi:'quan điểm', pos:'danh từ' },
        { zh:'支持', pinyin:'zhīchí', hv:'chi trì', vi:'ủng hộ', pos:'động từ' },
        { zh:'反对', pinyin:'fǎnduì', hv:'phản đối', vi:'phản đối', pos:'động từ' },
        { zh:'网课', pinyin:'wǎngkè', hv:'võng khoá', vi:'học trực tuyến', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你支持还是反对上网课？', pinyin:'Nǐ zhīchí háishi fǎnduì shàng wǎngkè?', vi:'Bạn ủng hộ hay phản đối học online?' },
        { sp:'B', zh:'对我来说，网课很方便。首先省时间，其次可以反复看。', pinyin:'Duì wǒ lái shuō, wǎngkè hěn fāngbiàn. Shǒuxiān shěng shíjiān, qícì kěyǐ fǎnfù kàn.', vi:'Với mình, học online rất tiện. Trước hết tiết kiệm thời gian, sau nữa xem lại được.' },
        { sp:'A', zh:'在我看来，交流方面网课还是差一些。', pinyin:'Zài wǒ kànlái, jiāoliú fāngmiàn wǎngkè háishi chà yìxiē.', vi:'Theo mình, về mặt giao lưu thì online vẫn kém hơn.' },
        { sp:'B', zh:'总之，这个问题值得我们认真讨论。', pinyin:'Zǒngzhī, zhège wèntí zhíde wǒmen rènzhēn tǎolùn.', vi:'Tóm lại, vấn đề này đáng để thảo luận nghiêm túc.' }
      ]
    },

    {
      level:'hsk4', no:10, zh:'随着经济的发展，生活越来越好', pinyin:'Suízhe jīngjì de fāzhǎn, shēnghuó yuèláiyuè hǎo', vi:'Cùng với sự phát triển kinh tế, đời sống ngày càng tốt',
      skill:'Biến đổi theo thời gian: 随着…; 越来越; 通过…',
      grammar:[
        { form:'随着 + N/mệnh đề，…', vi:'“cùng với, theo đà …”',
          note:'随着 dẫn điều kiện thay đổi, vế sau là kết quả thay đổi theo. Vd 随着年龄的增长，人会更成熟.',
          ex:{ zh:'随着科技的发展，人们的生活方式改变了很多。', pinyin:'Suízhe kējì de fāzhǎn, rénmen de shēnghuó fāngshì gǎibiàn le hěn duō.', vi:'Cùng với sự phát triển của khoa học công nghệ, lối sống thay đổi nhiều.' } },
        { form:'通过 + cách thức，… ; 越来越 + adj', vi:'“thông qua …”; “ngày càng …”',
          note:'通过 nêu phương tiện đạt kết quả: 通过努力，他考上了大学. 越来越 chỉ mức độ tăng theo thời gian, không kèm 很.',
          ex:{ zh:'通过这次活动，大家越来越了解中国文化了。', pinyin:'Tōngguò zhè cì huódòng, dàjiā yuèláiyuè liǎojiě Zhōngguó wénhuà le.', vi:'Qua hoạt động này, mọi người ngày càng hiểu văn hoá Trung Quốc.' } }
      ],
      vocab:[
        { zh:'随着', pinyin:'suízhe', hv:'tuỳ trước', vi:'cùng với, theo', pos:'giới từ' },
        { zh:'越来越', pinyin:'yuèláiyuè', hv:'việt lai việt', vi:'ngày càng', pos:'phó từ' },
        { zh:'通过', pinyin:'tōngguò', hv:'thông quá', vi:'thông qua', pos:'giới từ; động từ' },
        { zh:'经济', pinyin:'jīngjì', hv:'kinh tế', vi:'kinh tế', pos:'danh từ' },
        { zh:'发展', pinyin:'fāzhǎn', hv:'phát triển', vi:'phát triển', pos:'động từ; danh từ' },
        { zh:'科技', pinyin:'kējì', hv:'khoa kỹ', vi:'khoa học công nghệ', pos:'danh từ' },
        { zh:'方式', pinyin:'fāngshì', hv:'phương thức', vi:'phương thức, cách', pos:'danh từ' },
        { zh:'改变', pinyin:'gǎibiàn', hv:'cải biến', vi:'thay đổi', pos:'động từ' },
        { zh:'增长', pinyin:'zēngzhǎng', hv:'tăng trưởng', vi:'tăng trưởng', pos:'động từ' },
        { zh:'收入', pinyin:'shōurù', hv:'thu nhập', vi:'thu nhập', pos:'danh từ' },
        { zh:'购物', pinyin:'gòuwù', hv:'cấu vật', vi:'mua sắm', pos:'động từ' },
        { zh:'网络', pinyin:'wǎngluò', hv:'võng lạc', vi:'mạng internet', pos:'danh từ' },
        { zh:'了解', pinyin:'liǎojiě', hv:'liễu giải', vi:'hiểu rõ, tìm hiểu', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你觉得这几年这里变化大吗？', pinyin:'Nǐ juéde zhè jǐ nián zhèlǐ biànhuà dà ma?', vi:'Bạn thấy mấy năm nay nơi này thay đổi nhiều không?' },
        { sp:'B', zh:'很大。随着经济的发展，人们的收入越来越高。', pinyin:'Hěn dà. Suízhe jīngjì de fāzhǎn, rénmen de shōurù yuèláiyuè gāo.', vi:'Rất nhiều. Cùng với kinh tế phát triển, thu nhập ngày càng cao.' },
        { sp:'A', zh:'购物方式也改变了，现在都在网络上买。', pinyin:'Gòuwù fāngshì yě gǎibiàn le, xiànzài dōu zài wǎngluò shang mǎi.', vi:'Cách mua sắm cũng đổi, giờ toàn mua trên mạng.' },
        { sp:'B', zh:'对，通过手机，几分钟就能买到东西。', pinyin:'Duì, tōngguò shǒujī, jǐ fēnzhōng jiù néng mǎidào dōngxi.', vi:'Đúng, qua điện thoại, vài phút là mua được.' }
      ]
    },

    {
      level:'hsk4', no:11, zh:'这份工作适合你', pinyin:'Zhè fèn gōngzuò shìhé nǐ', vi:'Công việc này hợp với bạn',
      skill:'Phỏng vấn – xin việc; 对…感兴趣; 有 + kinh nghiệm/năng lực',
      grammar:[
        { form:'对 + N + 感兴趣 / 有兴趣', vi:'“hứng thú với …”',
          note:'Phủ định: 对…不感兴趣. Mức độ: 很感兴趣 / 特别感兴趣.',
          ex:{ zh:'我对市场营销很感兴趣。', pinyin:'Wǒ duì shìchǎng yíngxiāo hěn gǎn xìngqù.', vi:'Tôi rất hứng thú với marketing.' } },
        { form:'具有 / 有 + 经验·能力·责任心', vi:'nêu năng lực bản thân',
          note:'Câu trang trọng khi giới thiệu bản thân: 我有三年的工作经验 / 具有较强的沟通能力.',
          ex:{ zh:'我有两年的翻译经验，责任心也很强。', pinyin:'Wǒ yǒu liǎng nián de fānyì jīngyàn, zérènxīn yě hěn qiáng.', vi:'Tôi có hai năm kinh nghiệm dịch, tinh thần trách nhiệm cũng cao.' } }
      ],
      vocab:[
        { zh:'适合', pinyin:'shìhé', hv:'thích hợp', vi:'phù hợp', pos:'động từ' },
        { zh:'份', pinyin:'fèn', hv:'phần', vi:'(lượng từ) công việc, bản', pos:'lượng từ' },
        { zh:'应聘', pinyin:'yìngpìn', hv:'ứng sính', vi:'ứng tuyển', pos:'động từ' },
        { zh:'招聘', pinyin:'zhāopìn', hv:'chiêu sính', vi:'tuyển dụng', pos:'động từ' },
        { zh:'简历', pinyin:'jiǎnlì', hv:'giản lịch', vi:'sơ yếu lý lịch, CV', pos:'danh từ' },
        { zh:'经验', pinyin:'jīngyàn', hv:'kinh nghiệm', vi:'kinh nghiệm', pos:'danh từ' },
        { zh:'能力', pinyin:'nénglì', hv:'năng lực', vi:'năng lực', pos:'danh từ' },
        { zh:'责任心', pinyin:'zérènxīn', hv:'trách nhiệm tâm', vi:'tinh thần trách nhiệm', pos:'danh từ' },
        { zh:'沟通', pinyin:'gōutōng', hv:'câu thông', vi:'giao tiếp, trao đổi', pos:'động từ' },
        { zh:'翻译', pinyin:'fānyì', hv:'phiên dịch', vi:'dịch; phiên dịch viên', pos:'động từ; danh từ' },
        { zh:'工资', pinyin:'gōngzī', hv:'công tư', vi:'lương', pos:'danh từ' },
        { zh:'加班', pinyin:'jiābān', hv:'gia ban', vi:'tăng ca', pos:'động từ' },
        { zh:'录取', pinyin:'lùqǔ', hv:'lục thủ', vi:'tuyển, nhận', pos:'động từ' },
        { zh:'兴趣', pinyin:'xìngqù', hv:'hứng thú', vi:'hứng thú', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'请你简单介绍一下自己。', pinyin:'Qǐng nǐ jiǎndān jièshào yíxià zìjǐ.', vi:'Mời bạn giới thiệu ngắn về mình.' },
        { sp:'B', zh:'我学的是汉语，有两年翻译经验，对贵公司的工作很感兴趣。', pinyin:'Wǒ xué de shì Hànyǔ, yǒu liǎng nián fānyì jīngyàn, duì guì gōngsī de gōngzuò hěn gǎn xìngqù.', vi:'Tôi học tiếng Trung, có hai năm kinh nghiệm dịch, rất hứng thú với công việc ở quý công ty.' },
        { sp:'A', zh:'这份工作经常要加班，你能接受吗？', pinyin:'Zhè fèn gōngzuò jīngcháng yào jiābān, nǐ néng jiēshòu ma?', vi:'Việc này thường phải tăng ca, bạn chấp nhận được không?' },
        { sp:'B', zh:'可以。我责任心强，沟通能力也不错。', pinyin:'Kěyǐ. Wǒ zérènxīn qiáng, gōutōng nénglì yě búcuò.', vi:'Được. Tôi có trách nhiệm, khả năng giao tiếp cũng ổn.' },
        { sp:'A', zh:'好，我觉得这份工作很适合你。', pinyin:'Hǎo, wǒ juéde zhè fèn gōngzuò hěn shìhé nǐ.', vi:'Tốt, tôi thấy công việc này rất hợp với bạn.' }
      ]
    },

    {
      level:'hsk4', no:12, zh:'房子租下来了', pinyin:'Fángzi zū xiàlái le', vi:'Thuê được nhà rồi',
      skill:'Thuê nhà; bổ ngữ xu hướng nghĩa mở rộng 下来/下去/出来',
      grammar:[
        { form:'V + 下来 (cố định, lưu lại)', vi:'“… lại, … xuống” (kết quả được giữ)',
          note:'租下来 thuê được, 记下来 ghi lại, 停下来 dừng lại, 安静下来 yên lặng dần.',
          ex:{ zh:'请把房东的电话记下来。', pinyin:'Qǐng bǎ fángdōng de diànhuà jì xiàlái.', vi:'Hãy ghi lại số điện thoại chủ nhà.' } },
        { form:'V + 出来 (xuất hiện, nhận ra)', vi:'“… ra”',
          note:'想出来 nghĩ ra, 看出来 nhìn ra, 认出来 nhận ra. Khả năng: 看得出来 / 看不出来.',
          ex:{ zh:'我看不出来这房子有什么问题。', pinyin:'Wǒ kàn bu chūlái zhè fángzi yǒu shénme wèntí.', vi:'Tôi không nhìn ra căn nhà này có vấn đề gì.' } }
      ],
      vocab:[
        { zh:'租', pinyin:'zū', hv:'tô', vi:'thuê', pos:'động từ' },
        { zh:'房东', pinyin:'fángdōng', hv:'phòng đông', vi:'chủ nhà (cho thuê)', pos:'danh từ' },
        { zh:'房租', pinyin:'fángzū', hv:'phòng tô', vi:'tiền thuê nhà', pos:'danh từ' },
        { zh:'合同', pinyin:'hétong', hv:'hợp đồng', vi:'hợp đồng', pos:'danh từ' },
        { zh:'押金', pinyin:'yājīn', hv:'áp kim', vi:'tiền đặt cọc', pos:'danh từ' },
        { zh:'家具', pinyin:'jiājù', hv:'gia cụ', vi:'đồ đạc, nội thất', pos:'danh từ' },
        { zh:'卧室', pinyin:'wòshì', hv:'ngoạ thất', vi:'phòng ngủ', pos:'danh từ' },
        { zh:'厨房', pinyin:'chúfáng', hv:'trù phòng', vi:'bếp', pos:'danh từ' },
        { zh:'卫生间', pinyin:'wèishēngjiān', hv:'vệ sinh gian', vi:'nhà vệ sinh', pos:'danh từ' },
        { zh:'交通', pinyin:'jiāotōng', hv:'giao thông', vi:'giao thông', pos:'danh từ' },
        { zh:'邻居', pinyin:'línjū', hv:'lân cư', vi:'hàng xóm', pos:'danh từ' },
        { zh:'搬家', pinyin:'bānjiā', hv:'ban gia', vi:'chuyển nhà', pos:'động từ' },
        { zh:'签', pinyin:'qiān', hv:'thiêm', vi:'ký', pos:'động từ' },
        { zh:'认出来', pinyin:'rèn chūlái', hv:'nhận xuất lai', vi:'nhận ra', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'听说你把学校附近的房子租下来了？', pinyin:'Tīngshuō nǐ bǎ xuéxiào fùjìn de fángzi zū xiàlái le?', vi:'Nghe nói bạn thuê được nhà gần trường rồi?' },
        { sp:'B', zh:'对，两室一厅，家具齐全，交通也方便。', pinyin:'Duì, liǎng shì yì tīng, jiājù qíquán, jiāotōng yě fāngbiàn.', vi:'Ừ, hai phòng ngủ một phòng khách, đủ nội thất, đi lại tiện.' },
        { sp:'A', zh:'房租多少？签合同了吗？', pinyin:'Fángzū duōshao? Qiān hétong le ma?', vi:'Tiền thuê bao nhiêu? Ký hợp đồng chưa?' },
        { sp:'B', zh:'一个月三千，押金一个月。合同签了一年，我把条款都记下来了。', pinyin:'Yí ge yuè sānqiān, yājīn yí ge yuè. Hétong qiān le yì nián, wǒ bǎ tiáokuǎn dōu jì xiàlái le.', vi:'Ba nghìn một tháng, cọc một tháng. Hợp đồng một năm, mình ghi lại hết điều khoản rồi.' }
      ]
    },

    {
      level:'hsk4', no:13, zh:'医生建议我多休息', pinyin:'Yīshēng jiànyì wǒ duō xiūxi', vi:'Bác sĩ khuyên tôi nghỉ ngơi nhiều',
      skill:'Khám bệnh; động từ kiêm ngữ 建议/劝/让; 好像 phỏng đoán',
      grammar:[
        { form:'S + 建议/劝/要求 + người + V', vi:'câu kiêm ngữ “khuyên/yêu cầu ai làm gì”',
          note:'Tân ngữ của động từ 1 làm chủ ngữ của động từ 2. Vd 医生劝我戒烟 / 老师要求我们准时.',
          ex:{ zh:'医生建议我每天散步半个小时。', pinyin:'Yīshēng jiànyì wǒ měitiān sànbù bàn ge xiǎoshí.', vi:'Bác sĩ khuyên tôi mỗi ngày đi bộ nửa tiếng.' } },
        { form:'好像 … (似的); 看样子 …', vi:'“hình như, có vẻ …”',
          note:'好像 phỏng đoán hoặc so sánh. Vd 他好像感冒了 / 看样子要下雨了.',
          ex:{ zh:'你好像发烧了，脸很红。', pinyin:'Nǐ hǎoxiàng fāshāo le, liǎn hěn hóng.', vi:'Hình như bạn sốt rồi, mặt đỏ lắm.' } }
      ],
      vocab:[
        { zh:'建议', pinyin:'jiànyì', hv:'kiến nghị', vi:'đề nghị, khuyên', pos:'động từ; danh từ' },
        { zh:'劝', pinyin:'quàn', hv:'khuyến', vi:'khuyên', pos:'động từ' },
        { zh:'好像', pinyin:'hǎoxiàng', hv:'hảo tượng', vi:'hình như', pos:'phó từ' },
        { zh:'发烧', pinyin:'fāshāo', hv:'phát thiêu', vi:'sốt', pos:'động từ' },
        { zh:'咳嗽', pinyin:'késou', hv:'khái thấu', vi:'ho', pos:'động từ' },
        { zh:'感冒', pinyin:'gǎnmào', hv:'cảm mạo', vi:'cảm', pos:'động từ; danh từ' },
        { zh:'症状', pinyin:'zhèngzhuàng', hv:'chứng trạng', vi:'triệu chứng', pos:'danh từ' },
        { zh:'检查', pinyin:'jiǎnchá', hv:'kiểm tra', vi:'kiểm tra, khám', pos:'động từ' },
        { zh:'打针', pinyin:'dǎzhēn', hv:'đả châm', vi:'tiêm', pos:'động từ' },
        { zh:'药', pinyin:'yào', hv:'dược', vi:'thuốc', pos:'danh từ' },
        { zh:'按时', pinyin:'ànshí', hv:'án thời', vi:'đúng giờ', pos:'phó từ' },
        { zh:'恢复', pinyin:'huīfù', hv:'khôi phục', vi:'hồi phục', pos:'động từ' },
        { zh:'厉害', pinyin:'lìhai', hv:'lệ hại', vi:'nặng, dữ dội; giỏi', pos:'tính từ' },
        { zh:'散步', pinyin:'sànbù', hv:'tán bộ', vi:'đi dạo', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'医生，我咳嗽得厉害，好像还有点儿发烧。', pinyin:'Yīshēng, wǒ késou de lìhai, hǎoxiàng hái yǒudiǎnr fāshāo.', vi:'Bác sĩ, tôi ho dữ, hình như còn hơi sốt.' },
        { sp:'B', zh:'我检查一下。是感冒，不用打针，吃药就行。', pinyin:'Wǒ jiǎnchá yíxià. Shì gǎnmào, búyòng dǎzhēn, chī yào jiù xíng.', vi:'Để tôi khám. Bị cảm, không cần tiêm, uống thuốc là được.' },
        { sp:'A', zh:'需要注意什么吗？', pinyin:'Xūyào zhùyì shénme ma?', vi:'Cần chú ý gì không?' },
        { sp:'B', zh:'按时吃药，多喝水。我建议你多休息，几天就能恢复。', pinyin:'Ànshí chī yào, duō hē shuǐ. Wǒ jiànyì nǐ duō xiūxi, jǐ tiān jiù néng huīfù.', vi:'Uống thuốc đúng giờ, uống nhiều nước. Tôi khuyên nghỉ nhiều, vài ngày là khỏi.' }
      ]
    },

    {
      level:'hsk4', no:14, zh:'我被他的故事感动了', pinyin:'Wǒ bèi tā de gùshi gǎndòng le', vi:'Tôi xúc động vì câu chuyện của anh ấy',
      skill:'Cảm xúc & bình luận phim/sách; 被/让/叫 bị động; 使/令',
      grammar:[
        { form:'S + 被/让/叫 + O + V + …', vi:'bị động (让/叫 khẩu ngữ)',
          note:'让/叫 bị động bắt buộc có tác nhân: 让雨淋了 / 叫人拿走了. 被 có thể lược tác nhân.',
          ex:{ zh:'我的自行车让人骑走了。', pinyin:'Wǒ de zìxíngchē ràng rén qí zǒu le.', vi:'Xe đạp của tôi bị người ta đi mất.' } },
        { form:'A 使/令 B + trạng thái', vi:'“A khiến B …”',
          note:'使 trung tính, 令 trang trọng hơn, thường đi với cảm xúc: 令人感动, 令人失望, 使人难忘.',
          ex:{ zh:'这部电影的结尾令人感动。', pinyin:'Zhè bù diànyǐng de jiéwěi lìng rén gǎndòng.', vi:'Đoạn kết bộ phim này khiến người ta xúc động.' } }
      ],
      vocab:[
        { zh:'感动', pinyin:'gǎndòng', hv:'cảm động', vi:'xúc động', pos:'động từ; tính từ' },
        { zh:'使', pinyin:'shǐ', hv:'sử', vi:'khiến', pos:'động từ' },
        { zh:'令', pinyin:'lìng', hv:'lệnh', vi:'khiến (trang trọng)', pos:'động từ' },
        { zh:'故事', pinyin:'gùshi', hv:'cố sự', vi:'câu chuyện', pos:'danh từ' },
        { zh:'情节', pinyin:'qíngjié', hv:'tình tiết', vi:'tình tiết', pos:'danh từ' },
        { zh:'结尾', pinyin:'jiéwěi', hv:'kết vĩ', vi:'kết thúc', pos:'danh từ' },
        { zh:'演员', pinyin:'yǎnyuán', hv:'diễn viên', vi:'diễn viên', pos:'danh từ' },
        { zh:'失望', pinyin:'shīwàng', hv:'thất vọng', vi:'thất vọng', pos:'tính từ' },
        { zh:'激动', pinyin:'jīdòng', hv:'kích động', vi:'xúc động mạnh, phấn khích', pos:'tính từ' },
        { zh:'难忘', pinyin:'nánwàng', hv:'nan vong', vi:'khó quên', pos:'tính từ' },
        { zh:'流泪', pinyin:'liúlèi', hv:'lưu lệ', vi:'rơi nước mắt', pos:'động từ' },
        { zh:'推荐', pinyin:'tuījiàn', hv:'suy tiến', vi:'giới thiệu, gợi ý', pos:'động từ' },
        { zh:'评价', pinyin:'píngjià', hv:'bình giá', vi:'đánh giá', pos:'động từ; danh từ' },
        { zh:'淋', pinyin:'lín', hv:'lâm', vi:'dội, ướt (mưa)', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'昨天那部电影怎么样？', pinyin:'Zuótiān nà bù diànyǐng zěnmeyàng?', vi:'Bộ phim hôm qua thế nào?' },
        { sp:'B', zh:'我被主人公的故事感动了，结尾让我流泪了。', pinyin:'Wǒ bèi zhǔréngōng de gùshi gǎndòng le, jiéwěi ràng wǒ liúlèi le.', vi:'Mình xúc động vì câu chuyện nhân vật chính, đoạn kết làm mình khóc.' },
        { sp:'A', zh:'网上评价说情节有点儿慢。', pinyin:'Wǎngshàng píngjià shuō qíngjié yǒudiǎnr màn.', vi:'Đánh giá trên mạng bảo tình tiết hơi chậm.' },
        { sp:'B', zh:'开头是慢，但演员的表演令人难忘。我推荐你去看。', pinyin:'Kāitóu shì màn, dàn yǎnyuán de biǎoyǎn lìng rén nánwàng. Wǒ tuījiàn nǐ qù kàn.', vi:'Đầu phim chậm thật, nhưng diễn xuất khó quên. Mình gợi ý bạn đi xem.' }
      ]
    },

    {
      level:'hsk4', no:15, zh:'那家餐厅的服务态度不错', pinyin:'Nà jiā cāntīng de fúwù tàidu búcuò', vi:'Thái độ phục vụ của nhà hàng đó khá tốt',
      skill:'Khiếu nại & khen chê dịch vụ; 对…满意/不满; V + 得 + đánh giá',
      grammar:[
        { form:'对 + N + 满意 / 有意见', vi:'“hài lòng / có ý kiến với …”',
          note:'Vd 顾客对服务很满意 / 我对这个安排有意见. Mức độ: 非常满意, 不太满意.',
          ex:{ zh:'我对这家店的态度很不满意。', pinyin:'Wǒ duì zhè jiā diàn de tàidu hěn bù mǎnyì.', vi:'Tôi rất không hài lòng với thái độ của cửa hàng này.' } },
        { form:'V + 得 + đánh giá (太/不够/够 + adj)', vi:'bổ ngữ trạng thái khi nhận xét',
          note:'菜上得太慢 / 味道做得不够好 / 服务员解释得很清楚.',
          ex:{ zh:'菜上得太慢了，我们等了四十分钟。', pinyin:'Cài shàng de tài màn le, wǒmen děng le sìshí fēnzhōng.', vi:'Món lên chậm quá, chúng tôi đợi bốn mươi phút.' } }
      ],
      vocab:[
        { zh:'服务', pinyin:'fúwù', hv:'phục vụ', vi:'phục vụ; dịch vụ', pos:'động từ; danh từ' },
        { zh:'顾客', pinyin:'gùkè', hv:'cố khách', vi:'khách hàng', pos:'danh từ' },
        { zh:'满意', pinyin:'mǎnyì', hv:'mãn ý', vi:'hài lòng', pos:'tính từ' },
        { zh:'抱怨', pinyin:'bàoyuàn', hv:'bão oán', vi:'than phiền', pos:'động từ' },
        { zh:'投诉', pinyin:'tóusù', hv:'đầu tố', vi:'khiếu nại', pos:'động từ' },
        { zh:'味道', pinyin:'wèidao', hv:'vị đạo', vi:'mùi vị', pos:'danh từ' },
        { zh:'新鲜', pinyin:'xīnxiān', hv:'tân tiên', vi:'tươi', pos:'tính từ' },
        { zh:'账单', pinyin:'zhàngdān', hv:'trướng đơn', vi:'hoá đơn', pos:'danh từ' },
        { zh:'打折', pinyin:'dǎzhé', hv:'đả chiết', vi:'giảm giá', pos:'động từ' },
        { zh:'免费', pinyin:'miǎnfèi', hv:'miễn phí', vi:'miễn phí', pos:'động từ' },
        { zh:'经理', pinyin:'jīnglǐ', hv:'kinh lý', vi:'quản lý, giám đốc', pos:'danh từ' },
        { zh:'解释', pinyin:'jiěshì', hv:'giải thích', vi:'giải thích', pos:'động từ' },
        { zh:'够', pinyin:'gòu', hv:'cú', vi:'đủ', pos:'động từ; phó từ' },
        { zh:'态度', pinyin:'tàidu', hv:'thái độ', vi:'thái độ', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'服务员，我们的菜上得太慢了。', pinyin:'Fúwùyuán, wǒmen de cài shàng de tài màn le.', vi:'Nhân viên ơi, món của chúng tôi lên chậm quá.' },
        { sp:'B', zh:'非常抱歉，今天顾客特别多。我马上去催。', pinyin:'Fēicháng bàoqiàn, jīntiān gùkè tèbié duō. Wǒ mǎshàng qù cuī.', vi:'Rất xin lỗi, hôm nay khách đông. Tôi đi giục ngay.' },
        { sp:'A', zh:'而且这个菜不够新鲜，味道也不对。', pinyin:'Érqiě zhège cài bú gòu xīnxiān, wèidao yě bú duì.', vi:'Với lại món này không đủ tươi, vị cũng không đúng.' },
        { sp:'B', zh:'我请经理来解释，这道菜给您免费，账单打八折。', pinyin:'Wǒ qǐng jīnglǐ lái jiěshì, zhè dào cài gěi nín miǎnfèi, zhàngdān dǎ bā zhé.', vi:'Tôi mời quản lý ra giải thích, món này miễn phí, hoá đơn giảm 20%.' },
        { sp:'A', zh:'好吧，你们的服务态度还不错。', pinyin:'Hǎo ba, nǐmen de fúwù tàidu hái búcuò.', vi:'Được rồi, thái độ phục vụ của các bạn cũng ổn.' }
      ]
    },

    {
      level:'hsk4', no:16, zh:'环境保护人人有责', pinyin:'Huánjìng bǎohù rénrén yǒu zé', vi:'Bảo vệ môi trường là trách nhiệm của mọi người',
      skill:'Chủ đề xã hội: môi trường; 禁止/提倡; 一方面…另一方面',
      grammar:[
        { form:'一方面 A，另一方面 B', vi:'“một mặt A, mặt khác B”',
          note:'Nêu hai khía cạnh song song của cùng một việc. Vd 一方面要发展经济，另一方面要保护环境.',
          ex:{ zh:'一方面要减少污染，另一方面要节约资源。', pinyin:'Yì fāngmiàn yào jiǎnshǎo wūrǎn, lìng yì fāngmiàn yào jiéyuē zīyuán.', vi:'Một mặt giảm ô nhiễm, mặt khác tiết kiệm tài nguyên.' } },
        { form:'禁止 / 提倡 / 应该 + V (câu khẩu hiệu)', vi:'cấm / khuyến khích / nên',
          note:'Văn phong thông báo: 禁止吸烟, 提倡绿色出行. 人人有责 = mọi người đều có trách nhiệm.',
          ex:{ zh:'公共场所禁止吸烟。', pinyin:'Gōnggòng chǎngsuǒ jìnzhǐ xīyān.', vi:'Nơi công cộng cấm hút thuốc.' } }
      ],
      vocab:[
        { zh:'环境', pinyin:'huánjìng', hv:'hoàn cảnh', vi:'môi trường', pos:'danh từ' },
        { zh:'保护', pinyin:'bǎohù', hv:'bảo hộ', vi:'bảo vệ', pos:'động từ' },
        { zh:'污染', pinyin:'wūrǎn', hv:'ô nhiễm', vi:'ô nhiễm', pos:'động từ; danh từ' },
        { zh:'垃圾', pinyin:'lājī', hv:'lạp ngập', vi:'rác', pos:'danh từ' },
        { zh:'分类', pinyin:'fēnlèi', hv:'phân loại', vi:'phân loại', pos:'động từ' },
        { zh:'节约', pinyin:'jiéyuē', hv:'tiết ước', vi:'tiết kiệm', pos:'động từ' },
        { zh:'资源', pinyin:'zīyuán', hv:'tư nguyên', vi:'tài nguyên', pos:'danh từ' },
        { zh:'禁止', pinyin:'jìnzhǐ', hv:'cấm chỉ', vi:'cấm', pos:'động từ' },
        { zh:'提倡', pinyin:'tíchàng', hv:'đề xướng', vi:'khuyến khích, đề xướng', pos:'động từ' },
        { zh:'塑料袋', pinyin:'sùliàodài', hv:'tố liệu đại', vi:'túi ni-lông', pos:'danh từ' },
        { zh:'减少', pinyin:'jiǎnshǎo', hv:'giảm thiểu', vi:'giảm bớt', pos:'động từ' },
        { zh:'责任', pinyin:'zérèn', hv:'trách nhiệm', vi:'trách nhiệm', pos:'danh từ' },
        { zh:'公共', pinyin:'gōnggòng', hv:'công cộng', vi:'công cộng', pos:'tính từ' },
        { zh:'吸烟', pinyin:'xīyān', hv:'hấp yên', vi:'hút thuốc', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'现在超市不免费提供塑料袋了。', pinyin:'Xiànzài chāoshì bù miǎnfèi tígōng sùliàodài le.', vi:'Giờ siêu thị không phát túi ni-lông miễn phí nữa.' },
        { sp:'B', zh:'对，政府提倡减少污染，还要求垃圾分类。', pinyin:'Duì, zhèngfǔ tíchàng jiǎnshǎo wūrǎn, hái yāoqiú lājī fēnlèi.', vi:'Ừ, chính phủ khuyến khích giảm ô nhiễm, còn yêu cầu phân loại rác.' },
        { sp:'A', zh:'一方面有点儿麻烦，另一方面确实对环境好。', pinyin:'Yì fāngmiàn yǒudiǎnr máfan, lìng yì fāngmiàn quèshí duì huánjìng hǎo.', vi:'Một mặt hơi phiền, mặt khác đúng là tốt cho môi trường.' },
        { sp:'B', zh:'环境保护人人有责，从小事做起吧。', pinyin:'Huánjìng bǎohù rénrén yǒu zé, cóng xiǎoshì zuò qǐ ba.', vi:'Bảo vệ môi trường là trách nhiệm của mọi người, bắt đầu từ việc nhỏ.' }
      ]
    },

    {
      level:'hsk4', no:17, zh:'我差点儿忘了', pinyin:'Wǒ chàdiǎnr wàng le', vi:'Tôi suýt nữa quên',
      skill:'Phó từ tinh tế: 差点儿 / 几乎 / 简直 / 总算 / 竟然',
      grammar:[
        { form:'差点儿 (没) + V', vi:'“suýt nữa …”',
          note:'Việc không mong muốn: 差点儿摔倒 = 差点儿没摔倒 (đều là không ngã). Việc mong muốn: 差点儿没赶上 = suýt lỡ nhưng kịp; 差点儿赶上 = không kịp.',
          ex:{ zh:'今天早上我差点儿迟到。', pinyin:'Jīntiān zǎoshang wǒ chàdiǎnr chídào.', vi:'Sáng nay tôi suýt muộn.' } },
        { form:'竟然 / 总算 / 简直 + V/adj', vi:'“không ngờ / cuối cùng cũng / quả thật là”',
          note:'竟然 bất ngờ ngoài dự đoán; 总算 sau khi chờ đợi lâu; 简直 cường điệu (简直太棒了).',
          ex:{ zh:'等了三个月，签证总算办下来了。', pinyin:'Děng le sān ge yuè, qiānzhèng zǒngsuàn bàn xiàlái le.', vi:'Đợi ba tháng, visa cuối cùng cũng xong.' } }
      ],
      vocab:[
        { zh:'差点儿', pinyin:'chàdiǎnr', hv:'sai điểm nhi', vi:'suýt nữa', pos:'phó từ' },
        { zh:'几乎', pinyin:'jīhū', hv:'cơ hồ', vi:'hầu như', pos:'phó từ' },
        { zh:'简直', pinyin:'jiǎnzhí', hv:'giản trực', vi:'quả thật, đúng là', pos:'phó từ' },
        { zh:'总算', pinyin:'zǒngsuàn', hv:'tổng toán', vi:'cuối cùng cũng', pos:'phó từ' },
        { zh:'竟然', pinyin:'jìngrán', hv:'cánh nhiên', vi:'không ngờ, lại', pos:'phó từ' },
        { zh:'摔倒', pinyin:'shuāidǎo', hv:'suất đảo', vi:'ngã', pos:'động từ' },
        { zh:'钥匙', pinyin:'yàoshi', hv:'thược thi', vi:'chìa khoá', pos:'danh từ' },
        { zh:'锁', pinyin:'suǒ', hv:'toả', vi:'khoá; ổ khoá', pos:'động từ; danh từ' },
        { zh:'出门', pinyin:'chūmén', hv:'xuất môn', vi:'ra khỏi nhà', pos:'động từ' },
        { zh:'半路', pinyin:'bànlù', hv:'bán lộ', vi:'giữa đường', pos:'danh từ' },
        { zh:'想起', pinyin:'xiǎngqǐ', hv:'tưởng khởi', vi:'nhớ ra', pos:'động từ' },
        { zh:'吓', pinyin:'xià', hv:'hách', vi:'làm sợ, giật mình', pos:'động từ' },
        { zh:'马虎', pinyin:'mǎhu', hv:'mã hổ', vi:'cẩu thả', pos:'tính từ' },
        { zh:'办', pinyin:'bàn', hv:'biện', vi:'làm (thủ tục)', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你怎么又回来了？', pinyin:'Nǐ zěnme yòu huílái le?', vi:'Sao bạn lại quay về?' },
        { sp:'B', zh:'我差点儿忘了带钥匙，走到半路才想起来。', pinyin:'Wǒ chàdiǎnr wàng le dài yàoshi, zǒu dào bànlù cái xiǎng qǐlái.', vi:'Suýt quên mang chìa khoá, đi nửa đường mới nhớ ra.' },
        { sp:'A', zh:'你竟然没锁门？简直太马虎了。', pinyin:'Nǐ jìngrán méi suǒ mén? Jiǎnzhí tài mǎhu le.', vi:'Bạn lại không khoá cửa? Đúng là cẩu thả quá.' },
        { sp:'B', zh:'吓死我了。总算没丢东西。', pinyin:'Xià sǐ wǒ le. Zǒngsuàn méi diū dōngxi.', vi:'Sợ chết mất. May cuối cùng không mất gì.' }
      ]
    },

    {
      level:'hsk4', no:18, zh:'按照说明书安装', pinyin:'Ànzhào shuōmíngshū ānzhuāng', vi:'Lắp theo hướng dẫn sử dụng',
      skill:'Giới từ chỉ căn cứ/cách thức: 按照 / 根据 / 以…为 / 用…来',
      grammar:[
        { form:'按照 / 根据 + N，…', vi:'“theo / căn cứ vào …”',
          note:'按照 = làm đúng theo quy định/thứ tự; 根据 = dựa vào thông tin để suy ra. Vd 按照规定 / 根据天气预报.',
          ex:{ zh:'根据调查，大部分人支持这个计划。', pinyin:'Gēnjù diàochá, dà bùfen rén zhīchí zhège jìhuà.', vi:'Theo khảo sát, phần lớn mọi người ủng hộ kế hoạch này.' } },
        { form:'以 A 为 B', vi:'“lấy A làm B”',
          note:'Cấu trúc văn viết: 以健康为主 (lấy sức khoẻ làm chính), 以…为例 (lấy … làm ví dụ).',
          ex:{ zh:'我们以质量为第一标准。', pinyin:'Wǒmen yǐ zhìliàng wéi dì-yī biāozhǔn.', vi:'Chúng tôi lấy chất lượng làm tiêu chuẩn số một.' } }
      ],
      vocab:[
        { zh:'按照', pinyin:'ànzhào', hv:'án chiếu', vi:'theo, dựa theo', pos:'giới từ' },
        { zh:'根据', pinyin:'gēnjù', hv:'căn cứ', vi:'căn cứ vào', pos:'giới từ' },
        { zh:'说明书', pinyin:'shuōmíngshū', hv:'thuyết minh thư', vi:'sách hướng dẫn', pos:'danh từ' },
        { zh:'安装', pinyin:'ānzhuāng', hv:'an trang', vi:'lắp đặt, cài đặt', pos:'động từ' },
        { zh:'步骤', pinyin:'bùzhòu', hv:'bộ sậu', vi:'các bước', pos:'danh từ' },
        { zh:'零件', pinyin:'língjiàn', hv:'linh kiện', vi:'linh kiện', pos:'danh từ' },
        { zh:'标准', pinyin:'biāozhǔn', hv:'tiêu chuẩn', vi:'tiêu chuẩn', pos:'danh từ' },
        { zh:'质量', pinyin:'zhìliàng', hv:'chất lượng', vi:'chất lượng', pos:'danh từ' },
        { zh:'调查', pinyin:'diàochá', hv:'điều tra', vi:'khảo sát, điều tra', pos:'động từ; danh từ' },
        { zh:'规定', pinyin:'guīdìng', hv:'quy định', vi:'quy định', pos:'danh từ; động từ' },
        { zh:'顺利', pinyin:'shùnlì', hv:'thuận lợi', vi:'thuận lợi', pos:'tính từ' },
        { zh:'售后', pinyin:'shòuhòu', hv:'thụ hậu', vi:'hậu mãi', pos:'danh từ' },
        { zh:'保修', pinyin:'bǎoxiū', hv:'bảo tu', vi:'bảo hành', pos:'động từ' },
        { zh:'部分', pinyin:'bùfen', hv:'bộ phận', vi:'phần, bộ phận', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'新买的书架怎么装？零件太多了。', pinyin:'Xīn mǎi de shūjià zěnme zhuāng? Língjiàn tài duō le.', vi:'Giá sách mới mua lắp sao? Linh kiện nhiều quá.' },
        { sp:'B', zh:'按照说明书一步一步来，别跳步骤。', pinyin:'Ànzhào shuōmíngshū yí bù yí bù lái, bié tiào bùzhòu.', vi:'Theo hướng dẫn từng bước một, đừng nhảy bước.' },
        { sp:'A', zh:'根据说明，这块板应该先装。', pinyin:'Gēnjù shuōmíng, zhè kuài bǎn yīnggāi xiān zhuāng.', vi:'Theo hướng dẫn, tấm này phải lắp trước.' },
        { sp:'B', zh:'对。要是装不好，可以联系售后，他们以服务为主，保修一年。', pinyin:'Duì. Yàoshi zhuāng bu hǎo, kěyǐ liánxì shòuhòu, tāmen yǐ fúwù wéi zhǔ, bǎoxiū yì nián.', vi:'Đúng. Nếu lắp không được thì liên hệ hậu mãi, họ lấy dịch vụ làm chính, bảo hành một năm.' }
      ]
    },

    {
      level:'hsk4', no:19, zh:'这件事跟他毫无关系', pinyin:'Zhè jiàn shì gēn tā háowú guānxi', vi:'Việc này chẳng liên quan gì đến anh ấy',
      skill:'Phủ định nhấn mạnh: 毫无 / 一点儿也不 / 从不 / 并不',
      grammar:[
        { form:'一点儿也/都 + 不/没 + V/adj', vi:'“chẳng … chút nào”',
          note:'Phủ định tuyệt đối. Vd 一点儿也不累 / 一点儿都没变. Văn viết: 毫无 + N (毫无关系, 毫无办法).',
          ex:{ zh:'他对这件事一点儿也不知情。', pinyin:'Tā duì zhè jiàn shì yìdiǎnr yě bù zhīqíng.', vi:'Anh ấy chẳng biết gì về việc này.' } },
        { form:'并不 / 并没(有) + V', vi:'“hoàn toàn không …” (bác lại ý người khác)',
          note:'并 nhấn mạnh phủ định trái với điều được cho là đúng. Vd 我并不喜欢 / 事情并没有那么严重.',
          ex:{ zh:'事情并没有你想的那么严重。', pinyin:'Shìqing bìng méiyǒu nǐ xiǎng de nàme yánzhòng.', vi:'Sự việc hoàn toàn không nghiêm trọng như bạn nghĩ.' } }
      ],
      vocab:[
        { zh:'毫无', pinyin:'háowú', hv:'hào vô', vi:'không hề, chẳng chút', pos:'động từ' },
        { zh:'并', pinyin:'bìng', hv:'tịnh', vi:'(nhấn mạnh phủ định) hoàn toàn', pos:'phó từ' },
        { zh:'关系', pinyin:'guānxi', hv:'quan hệ', vi:'quan hệ, liên quan', pos:'danh từ' },
        { zh:'严重', pinyin:'yánzhòng', hv:'nghiêm trọng', vi:'nghiêm trọng', pos:'tính từ' },
        { zh:'误会', pinyin:'wùhuì', hv:'ngộ hội', vi:'hiểu lầm', pos:'danh từ; động từ' },
        { zh:'证明', pinyin:'zhèngmíng', hv:'chứng minh', vi:'chứng minh', pos:'động từ; danh từ' },
        { zh:'怀疑', pinyin:'huáiyí', hv:'hoài nghi', vi:'nghi ngờ', pos:'động từ' },
        { zh:'冤枉', pinyin:'yuānwang', hv:'oan uổng', vi:'oan', pos:'động từ; tính từ' },
        { zh:'相信', pinyin:'xiāngxìn', hv:'tương tín', vi:'tin tưởng', pos:'động từ' },
        { zh:'事实', pinyin:'shìshí', hv:'sự thực', vi:'sự thật', pos:'danh từ' },
        { zh:'从不', pinyin:'cóngbù', hv:'tòng bất', vi:'không bao giờ', pos:'phó từ' },
        { zh:'撒谎', pinyin:'sāhuǎng', hv:'tán hoang', vi:'nói dối', pos:'động từ' },
        { zh:'监控', pinyin:'jiānkòng', hv:'giám khống', vi:'camera giám sát', pos:'danh từ' },
        { zh:'知情', pinyin:'zhīqíng', hv:'tri tình', vi:'biết chuyện', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'有人怀疑小张拿了办公室的钱。', pinyin:'Yǒu rén huáiyí Xiǎo Zhāng ná le bàngōngshì de qián.', vi:'Có người nghi Tiểu Trương lấy tiền của văn phòng.' },
        { sp:'B', zh:'不可能，这件事跟他毫无关系，他那天并没有来。', pinyin:'Bù kěnéng, zhè jiàn shì gēn tā háowú guānxi, tā nà tiān bìng méiyǒu lái.', vi:'Không thể, việc này chẳng liên quan gì đến cậu ấy, hôm đó cậu ấy đâu có đến.' },
        { sp:'A', zh:'你怎么证明？', pinyin:'Nǐ zěnme zhèngmíng?', vi:'Bạn chứng minh sao?' },
        { sp:'B', zh:'监控可以证明。他从不撒谎，别冤枉他。', pinyin:'Jiānkòng kěyǐ zhèngmíng. Tā cóngbù sāhuǎng, bié yuānwang tā.', vi:'Camera chứng minh được. Cậu ấy không bao giờ nói dối, đừng đổ oan.' }
      ]
    },

    {
      level:'hsk4', no:20, zh:'回顾这一年', pinyin:'Huígù zhè yì nián', vi:'Nhìn lại một năm qua',
      skill:'Tổng ôn HSK4: kể lại + nhận xét; 曾经 / 既…又 / 总的来说',
      grammar:[
        { form:'曾经 + V + 过', vi:'“đã từng …” (quá khứ xa, nay không còn)',
          note:'曾经 nhấn mạnh trước đây; đối lập với 现在. Vd 我曾经在北京住过两年.',
          ex:{ zh:'我曾经害怕开口说汉语，现在不怕了。', pinyin:'Wǒ céngjīng hàipà kāikǒu shuō Hànyǔ, xiànzài bú pà le.', vi:'Tôi từng sợ mở miệng nói tiếng Trung, giờ không sợ nữa.' } },
        { form:'Tổng ôn: 不管…都 / 即使…也 / 由于 / 反而 / 到底 / 恐怕 / 幸亏 / 随着 / 按照 / 并不', vi:'Điểm ngữ pháp trọng tâm HSK4',
          note:'总的来说 (nhìn chung) + 既…又… (vừa… vừa…) dùng để kết luận. Tự viết một đoạn 6–8 câu kể lại năm học của bạn với ít nhất 5 mẫu trên.',
          ex:{ zh:'总的来说，这一年既辛苦又充实。', pinyin:'Zǒng de lái shuō, zhè yì nián jì xīnkǔ yòu chōngshí.', vi:'Nhìn chung, năm nay vừa vất vả vừa trọn vẹn.' } }
      ],
      vocab:[
        { zh:'回顾', pinyin:'huígù', hv:'hồi cố', vi:'nhìn lại', pos:'động từ' },
        { zh:'曾经', pinyin:'céngjīng', hv:'tằng kinh', vi:'đã từng', pos:'phó từ' },
        { zh:'总的来说', pinyin:'zǒng de lái shuō', hv:'tổng đích lai thuyết', vi:'nhìn chung', pos:'cụm cố định' },
        { zh:'充实', pinyin:'chōngshí', hv:'sung thực', vi:'trọn vẹn, phong phú', pos:'tính từ' },
        { zh:'辛苦', pinyin:'xīnkǔ', hv:'tân khổ', vi:'vất vả', pos:'tính từ' },
        { zh:'收获', pinyin:'shōuhuò', hv:'thu hoạch', vi:'thu hoạch, thành quả', pos:'danh từ; động từ' },
        { zh:'目标', pinyin:'mùbiāo', hv:'mục tiêu', vi:'mục tiêu', pos:'danh từ' },
        { zh:'实现', pinyin:'shíxiàn', hv:'thực hiện', vi:'thực hiện, đạt được', pos:'động từ' },
        { zh:'遗憾', pinyin:'yíhàn', hv:'di hám', vi:'tiếc nuối', pos:'tính từ; danh từ' },
        { zh:'期待', pinyin:'qīdài', hv:'kỳ đãi', vi:'mong đợi', pos:'động từ' },
        { zh:'感谢', pinyin:'gǎnxiè', hv:'cảm tạ', vi:'cảm ơn', pos:'động từ' },
        { zh:'开口', pinyin:'kāikǒu', hv:'khai khẩu', vi:'mở miệng, cất lời', pos:'động từ' },
        { zh:'进步', pinyin:'jìnbù', hv:'tiến bộ', vi:'tiến bộ', pos:'động từ; danh từ' },
        { zh:'挑战', pinyin:'tiǎozhàn', hv:'khiêu chiến', vi:'thử thách', pos:'danh từ; động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'回顾这一年，你最大的收获是什么？', pinyin:'Huígù zhè yì nián, nǐ zuì dà de shōuhuò shì shénme?', vi:'Nhìn lại năm qua, thành quả lớn nhất của bạn là gì?' },
        { sp:'B', zh:'我曾经害怕开口，现在不管跟谁都敢用汉语聊天。', pinyin:'Wǒ céngjīng hàipà kāikǒu, xiànzài bùguǎn gēn shéi dōu gǎn yòng Hànyǔ liáotiān.', vi:'Mình từng sợ mở miệng, giờ dù với ai cũng dám nói chuyện bằng tiếng Trung.' },
        { sp:'A', zh:'有什么遗憾吗？', pinyin:'Yǒu shénme yíhàn ma?', vi:'Có tiếc nuối gì không?' },
        { sp:'B', zh:'恐怕是没实现读完一本中文小说的目标。总的来说，这一年既辛苦又充实。', pinyin:'Kǒngpà shì méi shíxiàn dú wán yì běn Zhōngwén xiǎoshuō de mùbiāo. Zǒng de lái shuō, zhè yì nián jì xīnkǔ yòu chōngshí.', vi:'E là chưa đạt mục tiêu đọc xong một cuốn tiểu thuyết tiếng Trung. Nhìn chung, năm nay vừa vất vả vừa trọn vẹn.' },
        { sp:'A', zh:'期待明年的新挑战！', pinyin:'Qīdài míngnián de xīn tiǎozhàn!', vi:'Mong chờ thử thách mới năm sau!' }
      ]
    },

    /* ================= HSK 5 ================= */
    {
      level:'hsk5', no:1, zh:'爱的细节', pinyin:'Ài de xìjié', vi:'Những chi tiết của tình yêu thương',
      skill:'Kể chuyện gia đình; so sánh lựa chọn 与其…不如; cảm xúc bột phát 不禁',
      grammar:[
        { form:'与其 A，不如 B', vi:'“thà B còn hơn A” (chọn B)',
          note:'Cân nhắc hai phương án rồi chọn vế sau. Vế sau có thể thêm 还: 与其在家等，不如出去找.',
          ex:{ zh:'与其抱怨，不如想办法改变。', pinyin:'Yǔqí bàoyuàn, bùrú xiǎng bànfǎ gǎibiàn.', vi:'Thà nghĩ cách thay đổi còn hơn than phiền.' } },
        { form:'不禁 / 不由得 + V', vi:'“không kìm được, bất giác …”',
          note:'Đi với động từ biểu cảm: 不禁笑了 / 不由得想起. Không dùng với phủ định.',
          ex:{ zh:'看到母亲的白发，我不禁流下了眼泪。', pinyin:'Kàndào mǔqīn de báifà, wǒ bùjīn liú xià le yǎnlèi.', vi:'Thấy tóc bạc của mẹ, tôi không kìm được nước mắt.' } }
      ],
      vocab:[
        { zh:'细节', pinyin:'xìjié', hv:'tế tiết', vi:'chi tiết', pos:'danh từ' },
        { zh:'与其', pinyin:'yǔqí', hv:'dữ kỳ', vi:'thà … (còn hơn)', pos:'liên từ' },
        { zh:'不禁', pinyin:'bùjīn', hv:'bất cấm', vi:'không kìm được', pos:'phó từ' },
        { zh:'不由得', pinyin:'bùyóude', hv:'bất do đắc', vi:'bất giác', pos:'phó từ' },
        { zh:'默默', pinyin:'mòmò', hv:'mặc mặc', vi:'lặng lẽ', pos:'phó từ' },
        { zh:'平凡', pinyin:'píngfán', hv:'bình phàm', vi:'bình dị, tầm thường', pos:'tính từ' },
        { zh:'温暖', pinyin:'wēnnuǎn', hv:'ôn noãn', vi:'ấm áp', pos:'tính từ' },
        { zh:'照顾', pinyin:'zhàogù', hv:'chiếu cố', vi:'chăm sóc', pos:'động từ' },
        { zh:'唠叨', pinyin:'láodao', hv:'lao đao', vi:'cằn nhằn, lải nhải', pos:'động từ' },
        { zh:'珍惜', pinyin:'zhēnxī', hv:'trân tích', vi:'trân trọng', pos:'động từ' },
        { zh:'眼泪', pinyin:'yǎnlèi', hv:'nhãn lệ', vi:'nước mắt', pos:'danh từ' },
        { zh:'表达', pinyin:'biǎodá', hv:'biểu đạt', vi:'bày tỏ', pos:'động từ' },
        { zh:'热腾腾', pinyin:'rèténgténg', hv:'nhiệt đằng đằng', vi:'nóng hổi', pos:'tính từ' },
        { zh:'陪伴', pinyin:'péibàn', hv:'bồi bạn', vi:'ở bên, đồng hành', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你妈妈每天给你打电话，不觉得烦吗？', pinyin:'Nǐ māma měitiān gěi nǐ dǎ diànhuà, bù juéde fán ma?', vi:'Mẹ bạn ngày nào cũng gọi, không thấy phiền à?' },
        { sp:'B', zh:'以前觉得她唠叨，现在明白那是爱的细节。', pinyin:'Yǐqián juéde tā láodao, xiànzài míngbai nà shì ài de xìjié.', vi:'Trước thấy mẹ cằn nhằn, giờ hiểu đó là chi tiết của yêu thương.' },
        { sp:'A', zh:'我爸从不说“爱”，但每天早上都默默做好热腾腾的早饭。', pinyin:'Wǒ bà cóngbù shuō “ài”, dàn měitiān zǎoshang dōu mòmò zuò hǎo rèténgténg de zǎofàn.', vi:'Bố mình không bao giờ nói “yêu”, nhưng sáng nào cũng lặng lẽ làm bữa sáng nóng hổi.' },
        { sp:'B', zh:'与其等他们说出口，不如我们先表达。想到这儿，我不禁有点儿难过。', pinyin:'Yǔqí děng tāmen shuō chūkǒu, bùrú wǒmen xiān biǎodá. Xiǎngdào zhèr, wǒ bùjīn yǒudiǎnr nánguò.', vi:'Thà mình bày tỏ trước còn hơn đợi họ nói ra. Nghĩ đến đây mình không kìm được chút buồn.' },
        { sp:'A', zh:'是啊，平凡的陪伴最值得珍惜。', pinyin:'Shì a, píngfán de péibàn zuì zhíde zhēnxī.', vi:'Ừ, sự đồng hành bình dị là đáng trân trọng nhất.' }
      ]
    },

    {
      level:'hsk5', no:2, zh:'父母的期望', pinyin:'Fùmǔ de qīwàng', vi:'Kỳ vọng của cha mẹ',
      skill:'Bày tỏ mong muốn mạnh; nhượng bộ 尽管…仍然; 恨不得/巴不得',
      grammar:[
        { form:'尽管 A，(但是/仍然/还是) B', vi:'“mặc dù A, vẫn B” (sự thật)',
          note:'尽管 tương đương 虽然 nhưng trang trọng hơn; vế sau thường có 仍然/还是/却. Lưu ý 尽管 còn nghĩa “cứ việc” (你尽管说).',
          ex:{ zh:'尽管父母反对，她仍然选择了画画。', pinyin:'Jǐnguǎn fùmǔ fǎnduì, tā réngrán xuǎnzé le huàhuà.', vi:'Dù cha mẹ phản đối, cô ấy vẫn chọn vẽ.' } },
        { form:'恨不得 / 巴不得 + V', vi:'“ước gì, chỉ mong …”',
          note:'恨不得 nêu mong muốn khó thực hiện (恨不得马上飞回家); 巴不得 mong điều có thể xảy ra, và dùng được với phủ định (巴不得你别来).',
          ex:{ zh:'他恨不得一天有四十八个小时。', pinyin:'Tā hènbude yì tiān yǒu sìshíbā ge xiǎoshí.', vi:'Anh ấy ước gì một ngày có bốn mươi tám tiếng.' } }
      ],
      vocab:[
        { zh:'期望', pinyin:'qīwàng', hv:'kỳ vọng', vi:'kỳ vọng', pos:'danh từ; động từ' },
        { zh:'尽管', pinyin:'jǐnguǎn', hv:'tận quản', vi:'mặc dù; cứ việc', pos:'liên từ; phó từ' },
        { zh:'仍然', pinyin:'réngrán', hv:'nhưng nhiên', vi:'vẫn', pos:'phó từ' },
        { zh:'恨不得', pinyin:'hènbude', hv:'hận bất đắc', vi:'ước gì, hận không thể', pos:'động từ' },
        { zh:'巴不得', pinyin:'bābude', hv:'ba bất đắc', vi:'chỉ mong', pos:'động từ' },
        { zh:'专业', pinyin:'zhuānyè', hv:'chuyên nghiệp', vi:'ngành học, chuyên ngành', pos:'danh từ' },
        { zh:'稳定', pinyin:'wěndìng', hv:'ổn định', vi:'ổn định', pos:'tính từ' },
        { zh:'理想', pinyin:'lǐxiǎng', hv:'lý tưởng', vi:'lý tưởng', pos:'danh từ; tính từ' },
        { zh:'尊重', pinyin:'zūnzhòng', hv:'tôn trọng', vi:'tôn trọng', pos:'động từ' },
        { zh:'矛盾', pinyin:'máodùn', hv:'mâu thuẫn', vi:'mâu thuẫn', pos:'danh từ; tính từ' },
        { zh:'沟通', pinyin:'gōutōng', hv:'câu thông', vi:'trao đổi, giao tiếp', pos:'động từ' },
        { zh:'妥协', pinyin:'tuǒxié', hv:'thoả hiệp', vi:'thoả hiệp', pos:'động từ' },
        { zh:'前途', pinyin:'qiántú', hv:'tiền đồ', vi:'tương lai, tiền đồ', pos:'danh từ' },
        { zh:'追求', pinyin:'zhuīqiú', hv:'truy cầu', vi:'theo đuổi', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我想学设计，可父母巴不得我学医，说前途稳定。', pinyin:'Wǒ xiǎng xué shèjì, kě fùmǔ bābude wǒ xué yī, shuō qiántú wěndìng.', vi:'Mình muốn học thiết kế, nhưng bố mẹ chỉ mong mình học y, bảo tương lai ổn định.' },
        { sp:'B', zh:'尽管他们反对，你仍然坚持自己的理想吗？', pinyin:'Jǐnguǎn tāmen fǎnduì, nǐ réngrán jiānchí zìjǐ de lǐxiǎng ma?', vi:'Dù họ phản đối, bạn vẫn giữ lý tưởng của mình chứ?' },
        { sp:'A', zh:'我恨不得马上向他们证明我的选择是对的。', pinyin:'Wǒ hènbude mǎshàng xiàng tāmen zhèngmíng wǒ de xuǎnzé shì duì de.', vi:'Mình ước gì chứng minh ngay được lựa chọn của mình đúng.' },
        { sp:'B', zh:'与其争吵，不如好好沟通。也许双方都能妥协一点儿。', pinyin:'Yǔqí zhēngchǎo, bùrú hǎohāo gōutōng. Yěxǔ shuāngfāng dōu néng tuǒxié yìdiǎnr.', vi:'Thà trao đổi tử tế còn hơn cãi nhau. Có lẽ hai bên đều nhượng một chút.' },
        { sp:'A', zh:'你说得对，尊重是相互的。', pinyin:'Nǐ shuō de duì, zūnzhòng shì xiānghù de.', vi:'Bạn nói đúng, tôn trọng là từ hai phía.' }
      ]
    },

    {
      level:'hsk5', no:3, zh:'成功的秘诀', pinyin:'Chénggōng de mìjué', vi:'Bí quyết thành công',
      skill:'Diễn đạt quy luật, điều kiện tất yếu: 一旦…就; 凡是…都',
      grammar:[
        { form:'一旦 A，就 B', vi:'“một khi A thì B”',
          note:'一旦 nêu điều kiện giả định (có thể xảy ra), vế sau là hệ quả tất yếu. Vd 一旦养成习惯，就很难改.',
          ex:{ zh:'一旦下定决心，就不要轻易放弃。', pinyin:'Yídàn xiàdìng juéxīn, jiù búyào qīngyì fàngqì.', vi:'Một khi đã quyết tâm thì đừng dễ dàng bỏ cuộc.' } },
        { form:'凡是 + N，都 …', vi:'“phàm là / hễ là … đều …”',
          note:'Khái quát mọi trường hợp trong phạm vi. Vd 凡是成功的人，都经历过失败.',
          ex:{ zh:'凡是有价值的东西，都需要时间。', pinyin:'Fánshì yǒu jiàzhí de dōngxi, dōu xūyào shíjiān.', vi:'Phàm là thứ có giá trị đều cần thời gian.' } }
      ],
      vocab:[
        { zh:'秘诀', pinyin:'mìjué', hv:'bí quyết', vi:'bí quyết', pos:'danh từ' },
        { zh:'一旦', pinyin:'yídàn', hv:'nhất đán', vi:'một khi', pos:'phó từ' },
        { zh:'凡是', pinyin:'fánshì', hv:'phàm thị', vi:'phàm là, hễ', pos:'phó từ' },
        { zh:'决心', pinyin:'juéxīn', hv:'quyết tâm', vi:'quyết tâm', pos:'danh từ; động từ' },
        { zh:'轻易', pinyin:'qīngyì', hv:'khinh dị', vi:'dễ dàng, tuỳ tiện', pos:'phó từ' },
        { zh:'价值', pinyin:'jiàzhí', hv:'giá trị', vi:'giá trị', pos:'danh từ' },
        { zh:'天才', pinyin:'tiāncái', hv:'thiên tài', vi:'thiên tài', pos:'danh từ' },
        { zh:'勤奋', pinyin:'qínfèn', hv:'cần phấn', vi:'cần cù', pos:'tính từ' },
        { zh:'积累', pinyin:'jīlěi', hv:'tích luỹ', vi:'tích luỹ', pos:'động từ' },
        { zh:'运气', pinyin:'yùnqi', hv:'vận khí', vi:'vận may', pos:'danh từ' },
        { zh:'挫折', pinyin:'cuòzhé', hv:'toả chiết', vi:'thất bại, trắc trở', pos:'danh từ' },
        { zh:'总结', pinyin:'zǒngjié', hv:'tổng kết', vi:'tổng kết', pos:'động từ; danh từ' },
        { zh:'目标', pinyin:'mùbiāo', hv:'mục tiêu', vi:'mục tiêu', pos:'danh từ' },
        { zh:'具体', pinyin:'jùtǐ', hv:'cụ thể', vi:'cụ thể', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你觉得成功靠天才还是靠运气？', pinyin:'Nǐ juéde chénggōng kào tiāncái háishi kào yùnqi?', vi:'Bạn nghĩ thành công nhờ thiên tài hay vận may?' },
        { sp:'B', zh:'都不是。凡是成功的人，都经历过无数挫折。', pinyin:'Dōu bú shì. Fánshì chénggōng de rén, dōu jīnglì guo wúshù cuòzhé.', vi:'Chẳng phải cả hai. Phàm là người thành công đều trải qua vô số trắc trở.' },
        { sp:'A', zh:'那秘诀是什么？', pinyin:'Nà mìjué shì shénme?', vi:'Vậy bí quyết là gì?' },
        { sp:'B', zh:'目标要具体，每天积累一点儿。一旦养成勤奋的习惯，就会有结果。', pinyin:'Mùbiāo yào jùtǐ, měitiān jīlěi yìdiǎnr. Yídàn yǎngchéng qínfèn de xíguàn, jiù huì yǒu jiéguǒ.', vi:'Mục tiêu phải cụ thể, mỗi ngày tích luỹ một chút. Một khi thành thói quen cần cù thì sẽ có kết quả.' },
        { sp:'A', zh:'听起来简单，做起来难啊。', pinyin:'Tīng qǐlái jiǎndān, zuò qǐlái nán a.', vi:'Nghe thì đơn giản, làm mới khó.' }
      ]
    },

    {
      level:'hsk5', no:4, zh:'学会说“不”', pinyin:'Xuéhuì shuō “bù”', vi:'Học cách nói “không”',
      skill:'Khuyên nhủ & từ chối khéo: 何必/不妨; 宁可…也不',
      grammar:[
        { form:'何必 + V (呢)? / 不妨 + V', vi:'“cần gì phải …?” / “không ngại gì mà không …”',
          note:'何必 phản vấn, ý “không cần thiết”; 不妨 gợi ý nhẹ nhàng. Vd 何必这么客气 / 不妨试试.',
          ex:{ zh:'你何必为了别人的看法委屈自己呢？', pinyin:'Nǐ hébì wèile biéren de kànfǎ wěiqu zìjǐ ne?', vi:'Cần gì phải vì cách nhìn của người khác mà ấm ức chính mình?' } },
        { form:'宁可 A，也不 B / 宁可 A，也要 B', vi:'“thà A chứ không B” / “thà A cũng phải B”',
          note:'Nêu lựa chọn trong hoàn cảnh bất lợi. Vd 宁可累一点儿，也不麻烦别人.',
          ex:{ zh:'我宁可少赚钱，也不做不喜欢的工作。', pinyin:'Wǒ nìngkě shǎo zhuànqián, yě bú zuò bù xǐhuan de gōngzuò.', vi:'Tôi thà kiếm ít tiền chứ không làm việc mình không thích.' } }
      ],
      vocab:[
        { zh:'何必', pinyin:'hébì', hv:'hà tất', vi:'cần gì phải', pos:'phó từ' },
        { zh:'不妨', pinyin:'bùfáng', hv:'bất phương', vi:'chẳng ngại, cứ thử', pos:'phó từ' },
        { zh:'宁可', pinyin:'nìngkě', hv:'ninh khả', vi:'thà rằng', pos:'phó từ' },
        { zh:'拒绝', pinyin:'jùjué', hv:'cự tuyệt', vi:'từ chối', pos:'động từ' },
        { zh:'委屈', pinyin:'wěiqu', hv:'uỷ khuất', vi:'ấm ức, tủi thân', pos:'tính từ; động từ' },
        { zh:'看法', pinyin:'kànfǎ', hv:'khán pháp', vi:'cách nhìn', pos:'danh từ' },
        { zh:'勉强', pinyin:'miǎnqiǎng', hv:'miễn cưỡng', vi:'miễn cưỡng', pos:'tính từ; động từ' },
        { zh:'过分', pinyin:'guòfèn', hv:'quá phận', vi:'quá đáng', pos:'tính từ' },
        { zh:'面子', pinyin:'miànzi', hv:'diện tử', vi:'thể diện', pos:'danh từ' },
        { zh:'得罪', pinyin:'dézuì', hv:'đắc tội', vi:'đắc tội, làm mất lòng', pos:'động từ' },
        { zh:'委婉', pinyin:'wěiwǎn', hv:'uỷ uyển', vi:'khéo léo, uyển chuyển', pos:'tính từ' },
        { zh:'原则', pinyin:'yuánzé', hv:'nguyên tắc', vi:'nguyên tắc', pos:'danh từ' },
        { zh:'赚钱', pinyin:'zhuànqián', hv:'trám tiền', vi:'kiếm tiền', pos:'động từ' },
        { zh:'负担', pinyin:'fùdān', hv:'phụ đảm', vi:'gánh nặng', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'同事总让我帮忙加班，我不好意思拒绝。', pinyin:'Tóngshì zǒng ràng wǒ bāngmáng jiābān, wǒ bù hǎoyìsi jùjué.', vi:'Đồng nghiệp cứ nhờ mình tăng ca giúp, mình ngại từ chối.' },
        { sp:'B', zh:'何必勉强自己呢？这已经成了你的负担。', pinyin:'Hébì miǎnqiǎng zìjǐ ne? Zhè yǐjīng chéng le nǐ de fùdān.', vi:'Cần gì phải ép mình? Việc này thành gánh nặng của bạn rồi.' },
        { sp:'A', zh:'可是我怕得罪人，怕他没面子。', pinyin:'Kěshì wǒ pà dézuì rén, pà tā méi miànzi.', vi:'Nhưng mình sợ mất lòng, sợ anh ấy mất mặt.' },
        { sp:'B', zh:'不妨委婉一点儿说，比如“今天实在没时间”。我宁可得罪人，也不违背原则。', pinyin:'Bùfáng wěiwǎn yìdiǎnr shuō, bǐrú “jīntiān shízài méi shíjiān”. Wǒ nìngkě dézuì rén, yě bù wéibèi yuánzé.', vi:'Cứ nói khéo, ví dụ “hôm nay thực sự không có thời gian”. Mình thà mất lòng chứ không trái nguyên tắc.' }
      ]
    },

    {
      level:'hsk5', no:5, zh:'网络改变生活', pinyin:'Wǎngluò gǎibiàn shēnghuó', vi:'Internet thay đổi cuộc sống',
      skill:'Văn viết: 借助/凭; 便 thay 就; nêu hiện tượng xã hội',
      grammar:[
        { form:'借助 / 凭(借) + N，…', vi:'“nhờ vào / dựa vào …”',
          note:'借助 = mượn sức của công cụ/phương tiện; 凭 = dựa vào năng lực/căn cứ (凭经验, 凭票入场).',
          ex:{ zh:'借助翻译软件，他看懂了合同。', pinyin:'Jièzhù fānyì ruǎnjiàn, tā kàn dǒng le hétong.', vi:'Nhờ phần mềm dịch, anh ấy đọc hiểu hợp đồng.' } },
        { form:'… 便 … (= 就, văn viết)', vi:'“liền, là …”',
          note:'便 dùng trong văn viết thay 就: 一看便知 / 天一亮便出发. Không dùng 便 với nghĩa “chỉ” như 就.',
          ex:{ zh:'只要有网络，足不出户便能购物。', pinyin:'Zhǐyào yǒu wǎngluò, zú bù chū hù biàn néng gòuwù.', vi:'Chỉ cần có mạng, không ra khỏi cửa cũng mua sắm được.' } }
      ],
      vocab:[
        { zh:'借助', pinyin:'jièzhù', hv:'tá trợ', vi:'nhờ vào', pos:'động từ' },
        { zh:'凭', pinyin:'píng', hv:'bằng', vi:'dựa vào', pos:'giới từ' },
        { zh:'便', pinyin:'biàn', hv:'tiện', vi:'liền, là (= 就)', pos:'phó từ' },
        { zh:'软件', pinyin:'ruǎnjiàn', hv:'nhuyễn kiện', vi:'phần mềm', pos:'danh từ' },
        { zh:'足不出户', pinyin:'zú bù chū hù', hv:'túc bất xuất hộ', vi:'không bước chân ra khỏi cửa', pos:'thành ngữ' },
        { zh:'信息', pinyin:'xìnxī', hv:'tín tức', vi:'thông tin', pos:'danh từ' },
        { zh:'效率', pinyin:'xiàolǜ', hv:'hiệu suất', vi:'hiệu suất', pos:'danh từ' },
        { zh:'依赖', pinyin:'yīlài', hv:'ỷ lại', vi:'phụ thuộc', pos:'động từ' },
        { zh:'隐私', pinyin:'yǐnsī', hv:'ẩn tư', vi:'quyền riêng tư', pos:'danh từ' },
        { zh:'虚拟', pinyin:'xūnǐ', hv:'hư nghĩ', vi:'ảo', pos:'tính từ' },
        { zh:'现实', pinyin:'xiànshí', hv:'hiện thực', vi:'hiện thực', pos:'danh từ; tính từ' },
        { zh:'距离', pinyin:'jùlí', hv:'cự ly', vi:'khoảng cách', pos:'danh từ' },
        { zh:'利弊', pinyin:'lìbì', hv:'lợi tệ', vi:'lợi và hại', pos:'danh từ' },
        { zh:'合理', pinyin:'hélǐ', hv:'hợp lý', vi:'hợp lý', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'现在借助手机，足不出户便能解决大部分事情。', pinyin:'Xiànzài jièzhù shǒujī, zú bù chū hù biàn néng jiějué dà bùfen shìqing.', vi:'Giờ nhờ điện thoại, không ra khỏi cửa cũng giải quyết được phần lớn việc.' },
        { sp:'B', zh:'效率是高了，可人们越来越依赖网络。', pinyin:'Xiàolǜ shì gāo le, kě rénmen yuèláiyuè yīlài wǎngluò.', vi:'Hiệu suất cao thật, nhưng người ta ngày càng phụ thuộc mạng.' },
        { sp:'A', zh:'凭我的经验，虚拟世界拉近了距离，也拉远了距离。', pinyin:'Píng wǒ de jīngyàn, xūnǐ shìjiè lājìn le jùlí, yě lāyuǎn le jùlí.', vi:'Theo kinh nghiệm của mình, thế giới ảo kéo gần khoảng cách mà cũng đẩy xa nó.' },
        { sp:'B', zh:'还有隐私问题。任何工具都有利弊，关键是合理使用。', pinyin:'Hái yǒu yǐnsī wèntí. Rènhé gōngjù dōu yǒu lìbì, guānjiàn shì hélǐ shǐyòng.', vi:'Còn vấn đề riêng tư nữa. Công cụ nào cũng có lợi hại, then chốt là dùng hợp lý.' }
      ]
    },

    {
      level:'hsk5', no:6, zh:'一份特别的礼物', pinyin:'Yí fèn tèbié de lǐwù', vi:'Một món quà đặc biệt',
      skill:'Kể chuyện có bất ngờ: 居然/果然; 恰好/正好',
      grammar:[
        { form:'居然 / 果然 + V', vi:'“không ngờ lại …” / “quả nhiên …”',
          note:'居然 = ngoài dự đoán (ngạc nhiên); 果然 = đúng như dự đoán. Vd 他居然忘了 / 果然是他.',
          ex:{ zh:'我随口说了一句，他居然记住了。', pinyin:'Wǒ suíkǒu shuō le yí jù, tā jūrán jìzhù le.', vi:'Tôi buột miệng nói một câu, không ngờ anh ấy nhớ.' } },
        { form:'恰好 / 正好 + V', vi:'“vừa đúng, vừa hay …”',
          note:'Sự trùng hợp thuận lợi. 正好 còn làm tính từ (大小正好). Vd 我正好路过 / 恰好那天下雨.',
          ex:{ zh:'那天恰好是我们认识十周年。', pinyin:'Nà tiān qiàhǎo shì wǒmen rènshi shí zhōunián.', vi:'Hôm đó vừa hay là kỷ niệm mười năm quen nhau.' } }
      ],
      vocab:[
        { zh:'居然', pinyin:'jūrán', hv:'cư nhiên', vi:'không ngờ lại', pos:'phó từ' },
        { zh:'果然', pinyin:'guǒrán', hv:'quả nhiên', vi:'quả nhiên', pos:'phó từ' },
        { zh:'恰好', pinyin:'qiàhǎo', hv:'kháp hảo', vi:'vừa đúng', pos:'phó từ' },
        { zh:'随口', pinyin:'suíkǒu', hv:'tuỳ khẩu', vi:'buột miệng', pos:'phó từ' },
        { zh:'周年', pinyin:'zhōunián', hv:'chu niên', vi:'kỷ niệm … năm', pos:'danh từ' },
        { zh:'手工', pinyin:'shǒugōng', hv:'thủ công', vi:'thủ công', pos:'danh từ' },
        { zh:'珍贵', pinyin:'zhēnguì', hv:'trân quý', vi:'quý giá', pos:'tính từ' },
        { zh:'心意', pinyin:'xīnyì', hv:'tâm ý', vi:'tấm lòng', pos:'danh từ' },
        { zh:'惊讶', pinyin:'jīngyà', hv:'kinh nhạ', vi:'ngạc nhiên', pos:'tính từ' },
        { zh:'包装', pinyin:'bāozhuāng', hv:'bao trang', vi:'bao bì, gói', pos:'danh từ; động từ' },
        { zh:'纪念', pinyin:'jìniàn', hv:'kỷ niệm', vi:'kỷ niệm', pos:'động từ; danh từ' },
        { zh:'相册', pinyin:'xiàngcè', hv:'tướng sách', vi:'album ảnh', pos:'danh từ' },
        { zh:'感激', pinyin:'gǎnjī', hv:'cảm kích', vi:'cảm kích', pos:'động từ' },
        { zh:'用心', pinyin:'yòngxīn', hv:'dụng tâm', vi:'dụng tâm, tận tâm', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'生日那天你收到了什么礼物？', pinyin:'Shēngrì nà tiān nǐ shōudào le shénme lǐwù?', vi:'Sinh nhật bạn nhận được quà gì?' },
        { sp:'B', zh:'朋友居然做了一本手工相册，里面全是我们的照片。', pinyin:'Péngyou jūrán zuò le yì běn shǒugōng xiàngcè, lǐmiàn quán shì wǒmen de zhàopiàn.', vi:'Bạn mình không ngờ lại làm một album thủ công, toàn ảnh chung.' },
        { sp:'A', zh:'那天恰好是你们认识十周年吧？', pinyin:'Nà tiān qiàhǎo shì nǐmen rènshi shí zhōunián ba?', vi:'Hôm đó vừa hay là mười năm quen nhau nhỉ?' },
        { sp:'B', zh:'对，我随口提过一次，她果然记住了。礼物不贵，可这份心意太珍贵了。', pinyin:'Duì, wǒ suíkǒu tí guo yí cì, tā guǒrán jìzhù le. Lǐwù bú guì, kě zhè fèn xīnyì tài zhēnguì le.', vi:'Đúng, mình buột miệng nhắc một lần, cô ấy quả nhiên nhớ. Quà không đắt nhưng tấm lòng quý vô cùng.' }
      ]
    },

    {
      level:'hsk5', no:7, zh:'慢下来的生活', pinyin:'Màn xiàlái de shēnghuó', vi:'Sống chậm lại',
      skill:'Bàn về lối sống; 与其说…不如说; 未必/不见得',
      grammar:[
        { form:'与其说 A，不如说 B', vi:'“nói là A, chi bằng nói là B” (cách diễn đạt đúng hơn)',
          note:'Khác 与其…不如 (chọn hành động), cấu trúc này chọn cách mô tả chính xác hơn.',
          ex:{ zh:'与其说他懒，不如说他不知道该做什么。', pinyin:'Yǔqí shuō tā lǎn, bùrú shuō tā bù zhīdào gāi zuò shénme.', vi:'Nói anh ấy lười, chi bằng nói anh ấy không biết nên làm gì.' } },
        { form:'未必 / 不见得 + V', vi:'“chưa chắc …”',
          note:'Phủ định mềm về khả năng. 不见得 khẩu ngữ hơn. Vd 贵的未必好 / 他不见得会来.',
          ex:{ zh:'忙未必等于有效率。', pinyin:'Máng wèibì děngyú yǒu xiàolǜ.', vi:'Bận chưa chắc bằng hiệu quả.' } }
      ],
      vocab:[
        { zh:'未必', pinyin:'wèibì', hv:'vị tất', vi:'chưa chắc', pos:'phó từ' },
        { zh:'不见得', pinyin:'bújiàndé', hv:'bất kiến đắc', vi:'chưa hẳn', pos:'phó từ' },
        { zh:'节奏', pinyin:'jiézòu', hv:'tiết tấu', vi:'nhịp điệu', pos:'danh từ' },
        { zh:'享受', pinyin:'xiǎngshòu', hv:'hưởng thụ', vi:'tận hưởng', pos:'động từ' },
        { zh:'追赶', pinyin:'zhuīgǎn', hv:'truy cản', vi:'đuổi theo', pos:'động từ' },
        { zh:'焦虑', pinyin:'jiāolǜ', hv:'tiêu lự', vi:'lo âu', pos:'tính từ' },
        { zh:'等于', pinyin:'děngyú', hv:'đẳng vu', vi:'bằng, tương đương', pos:'động từ' },
        { zh:'匆忙', pinyin:'cōngmáng', hv:'thông mang', vi:'vội vã', pos:'tính từ' },
        { zh:'品味', pinyin:'pǐnwèi', hv:'phẩm vị', vi:'thưởng thức; gu', pos:'động từ; danh từ' },
        { zh:'自在', pinyin:'zìzai', hv:'tự tại', vi:'thoải mái, tự tại', pos:'tính từ' },
        { zh:'田园', pinyin:'tiányuán', hv:'điền viên', vi:'điền viên, đồng quê', pos:'danh từ' },
        { zh:'平衡', pinyin:'pínghéng', hv:'bình hành', vi:'cân bằng', pos:'danh từ; động từ' },
        { zh:'意义', pinyin:'yìyì', hv:'ý nghĩa', vi:'ý nghĩa', pos:'danh từ' },
        { zh:'懒', pinyin:'lǎn', hv:'lãn', vi:'lười', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你辞职去乡下住半年，是不是太任性了？', pinyin:'Nǐ cízhí qù xiāngxià zhù bàn nián, shì bu shì tài rènxìng le?', vi:'Bạn nghỉ việc về quê ở nửa năm, có tuỳ hứng quá không?' },
        { sp:'B', zh:'与其说任性，不如说我想找回生活的节奏。', pinyin:'Yǔqí shuō rènxìng, bùrú shuō wǒ xiǎng zhǎohuí shēnghuó de jiézòu.', vi:'Nói tuỳ hứng, chi bằng nói mình muốn tìm lại nhịp sống.' },
        { sp:'A', zh:'可是慢下来未必就快乐吧？', pinyin:'Kěshì màn xiàlái wèibì jiù kuàilè ba?', vi:'Nhưng chậm lại chưa chắc đã vui chứ?' },
        { sp:'B', zh:'快也不见得快乐。以前我天天匆忙追赶，却越来越焦虑。现在我学会品味每一天。', pinyin:'Kuài yě bújiàndé kuàilè. Yǐqián wǒ tiāntiān cōngmáng zhuīgǎn, què yuèláiyuè jiāolǜ. Xiànzài wǒ xuéhuì pǐnwèi měi yì tiān.', vi:'Nhanh cũng chưa hẳn vui. Trước mình ngày ngày vội vã đuổi theo mà càng lo âu. Giờ mình học cách thưởng thức từng ngày.' }
      ]
    },

    {
      level:'hsk5', no:8, zh:'语言与文化', pinyin:'Yǔyán yǔ wénhuà', vi:'Ngôn ngữ và văn hoá',
      skill:'Trình bày học thuật: 就…而言; 由…组成',
      grammar:[
        { form:'就 + N + 而言 / 对(于) + N + 来说', vi:'“xét về … / đối với … mà nói”',
          note:'就…而言 dùng trong văn viết, nêu phạm vi bàn luận. Vd 就发音而言，汉语的难点是声调.',
          ex:{ zh:'就语法而言，汉语比很多语言简单。', pinyin:'Jiù yǔfǎ ér yán, Hànyǔ bǐ hěn duō yǔyán jiǎndān.', vi:'Xét về ngữ pháp, tiếng Trung đơn giản hơn nhiều ngôn ngữ.' } },
        { form:'A 由 B 组成 / 构成', vi:'“A được tạo thành từ B”',
          note:'Dùng khi mô tả cấu tạo. Vd 汉字由笔画组成 / 委员会由十人组成.',
          ex:{ zh:'汉字由偏旁和部首组成，有的还表示读音。', pinyin:'Hànzì yóu piānpáng hé bùshǒu zǔchéng, yǒu de hái biǎoshì dúyīn.', vi:'Chữ Hán được tạo bởi thiên bàng và bộ thủ, có chữ còn biểu thị cách đọc.' } }
      ],
      vocab:[
        { zh:'而言', pinyin:'ér yán', hv:'nhi ngôn', vi:'(xét về) … mà nói', pos:'cụm cố định' },
        { zh:'组成', pinyin:'zǔchéng', hv:'tổ thành', vi:'tạo thành', pos:'động từ' },
        { zh:'构成', pinyin:'gòuchéng', hv:'cấu thành', vi:'cấu thành', pos:'động từ' },
        { zh:'偏旁', pinyin:'piānpáng', hv:'thiên bàng', vi:'thiên bàng (thành phần chữ)', pos:'danh từ' },
        { zh:'读音', pinyin:'dúyīn', hv:'độc âm', vi:'cách đọc', pos:'danh từ' },
        { zh:'成语', pinyin:'chéngyǔ', hv:'thành ngữ', vi:'thành ngữ', pos:'danh từ' },
        { zh:'方言', pinyin:'fāngyán', hv:'phương ngôn', vi:'phương ngữ', pos:'danh từ' },
        { zh:'普通话', pinyin:'pǔtōnghuà', hv:'phổ thông thoại', vi:'tiếng phổ thông', pos:'danh từ' },
        { zh:'反映', pinyin:'fǎnyìng', hv:'phản ánh', vi:'phản ánh', pos:'động từ' },
        { zh:'思维', pinyin:'sīwéi', hv:'tư duy', vi:'tư duy', pos:'danh từ' },
        { zh:'翻译', pinyin:'fānyì', hv:'phiên dịch', vi:'dịch', pos:'động từ' },
        { zh:'含义', pinyin:'hányì', hv:'hàm nghĩa', vi:'hàm ý', pos:'danh từ' },
        { zh:'掌握', pinyin:'zhǎngwò', hv:'chưởng ác', vi:'nắm vững', pos:'động từ' },
        { zh:'背景', pinyin:'bèijǐng', hv:'bối cảnh', vi:'bối cảnh', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'为什么很多成语翻译成外语就变味了？', pinyin:'Wèishénme hěn duō chéngyǔ fānyì chéng wàiyǔ jiù biànwèi le?', vi:'Sao nhiều thành ngữ dịch sang tiếng nước ngoài là mất vị?' },
        { sp:'B', zh:'因为语言反映文化。就成语而言，每个词都有历史背景。', pinyin:'Yīnwèi yǔyán fǎnyìng wénhuà. Jiù chéngyǔ ér yán, měi ge cí dōu yǒu lìshǐ bèijǐng.', vi:'Vì ngôn ngữ phản ánh văn hoá. Xét về thành ngữ, mỗi từ đều có bối cảnh lịch sử.' },
        { sp:'A', zh:'那学汉字呢？', pinyin:'Nà xué Hànzì ne?', vi:'Thế học chữ Hán thì sao?' },
        { sp:'B', zh:'汉字由偏旁组成，掌握了部首，就能猜出含义甚至读音。', pinyin:'Hànzì yóu piānpáng zǔchéng, zhǎngwò le bùshǒu, jiù néng cāichū hányì shènzhì dúyīn.', vi:'Chữ Hán do thiên bàng tạo thành, nắm được bộ thủ là đoán được nghĩa, thậm chí cách đọc.' }
      ]
    },

    {
      level:'hsk5', no:9, zh:'传统节日', pinyin:'Chuántǒng jiérì', vi:'Ngày lễ truyền thống',
      skill:'Giới thiệu văn hoá: 据说/据…; 自从…以来',
      grammar:[
        { form:'据说 … / 据 + nguồn，…', vi:'“nghe nói …” / “theo … thì …”',
          note:'据说 không có chủ ngữ. 据 + nguồn: 据统计, 据报道, 据老人们说.',
          ex:{ zh:'据说端午节是为了纪念屈原。', pinyin:'Jùshuō Duānwǔjié shì wèile jìniàn Qū Yuán.', vi:'Nghe nói Tết Đoan Ngọ là để tưởng nhớ Khuất Nguyên.' } },
        { form:'自从 A 以来 / 自 A 起，…', vi:'“kể từ A đến nay …”',
          note:'A là mốc quá khứ; vế sau nêu tình trạng kéo dài. Vd 自从来中国以来，我过了三个春节.',
          ex:{ zh:'自从工作以来，我很少回家过年。', pinyin:'Zìcóng gōngzuò yǐlái, wǒ hěn shǎo huíjiā guònián.', vi:'Kể từ khi đi làm, tôi ít về nhà ăn Tết.' } }
      ],
      vocab:[
        { zh:'据说', pinyin:'jùshuō', hv:'cứ thuyết', vi:'nghe nói', pos:'động từ' },
        { zh:'自从', pinyin:'zìcóng', hv:'tự tòng', vi:'kể từ', pos:'giới từ' },
        { zh:'以来', pinyin:'yǐlái', hv:'dĩ lai', vi:'đến nay', pos:'danh từ' },
        { zh:'传统', pinyin:'chuántǒng', hv:'truyền thống', vi:'truyền thống', pos:'danh từ; tính từ' },
        { zh:'春节', pinyin:'Chūnjié', hv:'xuân tiết', vi:'Tết Nguyên đán', pos:'danh từ' },
        { zh:'端午节', pinyin:'Duānwǔjié', hv:'đoan ngọ tiết', vi:'Tết Đoan Ngọ', pos:'danh từ' },
        { zh:'中秋节', pinyin:'Zhōngqiūjié', hv:'trung thu tiết', vi:'Tết Trung thu', pos:'danh từ' },
        { zh:'团圆', pinyin:'tuányuán', hv:'đoàn viên', vi:'đoàn viên', pos:'động từ' },
        { zh:'风俗', pinyin:'fēngsú', hv:'phong tục', vi:'phong tục', pos:'danh từ' },
        { zh:'象征', pinyin:'xiàngzhēng', hv:'tượng trưng', vi:'tượng trưng', pos:'động từ; danh từ' },
        { zh:'月饼', pinyin:'yuèbing', hv:'nguyệt bính', vi:'bánh trung thu', pos:'danh từ' },
        { zh:'粽子', pinyin:'zòngzi', hv:'tống tử', vi:'bánh ú, bánh chưng (kiểu Trung)', pos:'danh từ' },
        { zh:'热闹', pinyin:'rènao', hv:'nhiệt náo', vi:'náo nhiệt', pos:'tính từ' },
        { zh:'气氛', pinyin:'qìfēn', hv:'khí phân', vi:'không khí (bầu)', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'中秋节为什么要吃月饼？', pinyin:'Zhōngqiūjié wèishénme yào chī yuèbing?', vi:'Tết Trung thu sao phải ăn bánh trung thu?' },
        { sp:'B', zh:'据说圆圆的月饼象征团圆。这个风俗已经有几百年了。', pinyin:'Jùshuō yuányuán de yuèbing xiàngzhēng tuányuán. Zhège fēngsú yǐjīng yǒu jǐ bǎi nián le.', vi:'Nghe nói bánh tròn tượng trưng đoàn viên. Phong tục này có vài trăm năm rồi.' },
        { sp:'A', zh:'自从来中国以来，我最喜欢的是春节的气氛。', pinyin:'Zìcóng lái Zhōngguó yǐlái, wǒ zuì xǐhuan de shì Chūnjié de qìfēn.', vi:'Kể từ khi đến Trung Quốc, mình thích nhất không khí Tết.' },
        { sp:'B', zh:'那你今年一定要来我家，热闹得很。', pinyin:'Nà nǐ jīnnián yídìng yào lái wǒ jiā, rènao de hěn.', vi:'Vậy năm nay nhất định đến nhà mình, náo nhiệt lắm.' }
      ]
    },

    {
      level:'hsk5', no:10, zh:'健康饮食', pinyin:'Jiànkāng yǐnshí', vi:'Ăn uống lành mạnh',
      skill:'Khuyên về sức khoẻ: 以免/免得; 说不定',
      grammar:[
        { form:'…，以免 / 免得 + hậu quả xấu', vi:'“… để tránh / kẻo …”',
          note:'Vế trước là hành động, vế sau là điều muốn tránh. 以免 văn viết, 免得 khẩu ngữ. Vd 早点儿出发，免得堵车.',
          ex:{ zh:'少吃油炸食品，以免影响健康。', pinyin:'Shǎo chī yóuzhá shípǐn, yǐmiǎn yǐngxiǎng jiànkāng.', vi:'Ăn ít đồ chiên rán để tránh ảnh hưởng sức khoẻ.' } },
        { form:'说不定 + mệnh đề', vi:'“biết đâu, có thể …”',
          note:'Phỏng đoán mang hy vọng, đặt đầu câu hoặc trước động từ. Vd 说不定明天就好了.',
          ex:{ zh:'坚持一个月，说不定你就习惯了。', pinyin:'Jiānchí yí ge yuè, shuōbudìng nǐ jiù xíguàn le.', vi:'Kiên trì một tháng, biết đâu bạn quen luôn.' } }
      ],
      vocab:[
        { zh:'饮食', pinyin:'yǐnshí', hv:'ẩm thực', vi:'ăn uống', pos:'danh từ' },
        { zh:'以免', pinyin:'yǐmiǎn', hv:'dĩ miễn', vi:'để tránh', pos:'liên từ' },
        { zh:'免得', pinyin:'miǎnde', hv:'miễn đắc', vi:'kẻo, để khỏi', pos:'liên từ' },
        { zh:'说不定', pinyin:'shuōbudìng', hv:'thuyết bất định', vi:'biết đâu', pos:'phó từ' },
        { zh:'营养', pinyin:'yíngyǎng', hv:'dinh dưỡng', vi:'dinh dưỡng', pos:'danh từ' },
        { zh:'油炸', pinyin:'yóuzhá', hv:'du tạc', vi:'chiên rán', pos:'động từ' },
        { zh:'食品', pinyin:'shípǐn', hv:'thực phẩm', vi:'thực phẩm', pos:'danh từ' },
        { zh:'蔬菜', pinyin:'shūcài', hv:'sơ thái', vi:'rau', pos:'danh từ' },
        { zh:'清淡', pinyin:'qīngdàn', hv:'thanh đạm', vi:'thanh đạm', pos:'tính từ' },
        { zh:'规律', pinyin:'guīlǜ', hv:'quy luật', vi:'điều độ', pos:'tính từ; danh từ' },
        { zh:'体重', pinyin:'tǐzhòng', hv:'thể trọng', vi:'cân nặng', pos:'danh từ' },
        { zh:'消化', pinyin:'xiāohuà', hv:'tiêu hoá', vi:'tiêu hoá', pos:'động từ' },
        { zh:'过量', pinyin:'guòliàng', hv:'quá lượng', vi:'quá mức', pos:'động từ' },
        { zh:'搭配', pinyin:'dāpèi', hv:'đáp phối', vi:'kết hợp, phối', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我最近体重涨了不少，怎么办？', pinyin:'Wǒ zuìjìn tǐzhòng zhǎng le bù shǎo, zěnme bàn?', vi:'Dạo này mình tăng cân khá nhiều, làm sao?' },
        { sp:'B', zh:'饮食清淡一点儿，多吃蔬菜，少吃油炸食品，免得越来越胖。', pinyin:'Yǐnshí qīngdàn yìdiǎnr, duō chī shūcài, shǎo chī yóuzhá shípǐn, miǎnde yuèláiyuè pàng.', vi:'Ăn thanh đạm hơn, nhiều rau, ít đồ chiên, kẻo càng ngày càng béo.' },
        { sp:'A', zh:'可我晚上总想吃夜宵。', pinyin:'Kě wǒ wǎnshang zǒng xiǎng chī yèxiāo.', vi:'Nhưng tối mình cứ thèm ăn khuya.' },
        { sp:'B', zh:'吃饭有规律，营养搭配好，坚持一个月，说不定你就不想吃了。', pinyin:'Chīfàn yǒu guīlǜ, yíngyǎng dāpèi hǎo, jiānchí yí ge yuè, shuōbudìng nǐ jiù bù xiǎng chī le.', vi:'Ăn điều độ, phối dinh dưỡng tốt, kiên trì một tháng biết đâu hết thèm.' }
      ]
    },

    {
      level:'hsk5', no:11, zh:'面对压力', pinyin:'Miànduì yālì', vi:'Đối mặt áp lực',
      skill:'Tâm lý & cảm xúc: 不至于; 难免',
      grammar:[
        { form:'不至于 + V/adj', vi:'“chưa đến mức …”',
          note:'Phủ định mức độ nghiêm trọng. Vd 不至于吧？(Không đến mức thế chứ?) / 累是累，不至于生病.',
          ex:{ zh:'压力大是正常的，但不至于影响睡眠吧？', pinyin:'Yālì dà shì zhèngcháng de, dàn búzhìyú yǐngxiǎng shuìmián ba?', vi:'Áp lực lớn là bình thường, nhưng chưa đến mức ảnh hưởng giấc ngủ chứ?' } },
        { form:'难免 + V / 难免会 …', vi:'“khó tránh khỏi …”',
          note:'Nêu điều tất yếu xảy ra, thường tiêu cực nhẹ. Vd 第一次上台，难免紧张.',
          ex:{ zh:'刚开始工作，难免会犯错误。', pinyin:'Gāng kāishǐ gōngzuò, nánmiǎn huì fàn cuòwù.', vi:'Mới đi làm, khó tránh khỏi mắc lỗi.' } }
      ],
      vocab:[
        { zh:'面对', pinyin:'miànduì', hv:'diện đối', vi:'đối mặt', pos:'động từ' },
        { zh:'不至于', pinyin:'búzhìyú', hv:'bất chí vu', vi:'chưa đến mức', pos:'động từ' },
        { zh:'难免', pinyin:'nánmiǎn', hv:'nan miễn', vi:'khó tránh', pos:'tính từ' },
        { zh:'情绪', pinyin:'qíngxù', hv:'tình tự', vi:'cảm xúc, tâm trạng', pos:'danh từ' },
        { zh:'紧张', pinyin:'jǐnzhāng', hv:'khẩn trương', vi:'căng thẳng', pos:'tính từ' },
        { zh:'失眠', pinyin:'shīmián', hv:'thất miên', vi:'mất ngủ', pos:'động từ' },
        { zh:'倾诉', pinyin:'qīngsù', hv:'khuynh tố', vi:'giãi bày', pos:'động từ' },
        { zh:'释放', pinyin:'shìfàng', hv:'thích phóng', vi:'giải toả', pos:'động từ' },
        { zh:'调整', pinyin:'tiáozhěng', hv:'điều chỉnh', vi:'điều chỉnh', pos:'động từ' },
        { zh:'心态', pinyin:'xīntài', hv:'tâm thái', vi:'tâm thế', pos:'danh từ' },
        { zh:'崩溃', pinyin:'bēngkuì', hv:'băng hội', vi:'suy sụp', pos:'động từ' },
        { zh:'乐观', pinyin:'lèguān', hv:'lạc quan', vi:'lạc quan', pos:'tính từ' },
        { zh:'犯', pinyin:'fàn', hv:'phạm', vi:'mắc, phạm (lỗi)', pos:'động từ' },
        { zh:'睡眠', pinyin:'shuìmián', hv:'thuỵ miên', vi:'giấc ngủ', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我最近失眠，一想到考试就紧张得要崩溃。', pinyin:'Wǒ zuìjìn shīmián, yì xiǎngdào kǎoshì jiù jǐnzhāng de yào bēngkuì.', vi:'Dạo này mình mất ngủ, nghĩ tới thi là căng thẳng muốn suy sụp.' },
        { sp:'B', zh:'不至于吧？考前难免紧张，可别把自己吓坏了。', pinyin:'Búzhìyú ba? Kǎo qián nánmiǎn jǐnzhāng, kě bié bǎ zìjǐ xià huài le.', vi:'Không đến mức thế chứ? Trước thi khó tránh căng thẳng, nhưng đừng tự doạ mình.' },
        { sp:'A', zh:'我不知道怎么释放这种情绪。', pinyin:'Wǒ bù zhīdào zěnme shìfàng zhè zhǒng qíngxù.', vi:'Mình không biết giải toả cảm xúc này thế nào.' },
        { sp:'B', zh:'找朋友倾诉，跑跑步，调整一下心态。乐观一点儿，你准备得已经很充分了。', pinyin:'Zhǎo péngyou qīngsù, pǎopao bù, tiáozhěng yíxià xīntài. Lèguān yìdiǎnr, nǐ zhǔnbèi de yǐjīng hěn chōngfèn le.', vi:'Tìm bạn giãi bày, chạy bộ, điều chỉnh tâm thế. Lạc quan lên, bạn chuẩn bị đầy đủ rồi.' }
      ]
    },

    {
      level:'hsk5', no:12, zh:'职场第一课', pinyin:'Zhíchǎng dì-yī kè', vi:'Bài học đầu tiên nơi công sở',
      skill:'Dặn dò & tận dụng thời cơ: 万一; 趁',
      grammar:[
        { form:'万一 A，(就) B', vi:'“nhỡ đâu / lỡ mà A thì B”',
          note:'Giả định khả năng thấp nhưng xấu. Vd 万一下雨，就改天. Cũng là danh từ: 以防万一 (đề phòng bất trắc).',
          ex:{ zh:'带上备用文件，万一电脑坏了也不怕。', pinyin:'Dài shàng bèiyòng wénjiàn, wànyī diànnǎo huài le yě bú pà.', vi:'Mang theo tệp dự phòng, nhỡ máy hỏng cũng không sợ.' } },
        { form:'趁 + thời cơ，+ V', vi:'“nhân lúc, tranh thủ …”',
          note:'Vd 趁年轻多学点儿 / 趁热吃 / 趁老板不在. Có thể nói 趁着.',
          ex:{ zh:'趁现在还年轻，多积累经验。', pinyin:'Chèn xiànzài hái niánqīng, duō jīlěi jīngyàn.', vi:'Nhân lúc còn trẻ, tích luỹ nhiều kinh nghiệm.' } }
      ],
      vocab:[
        { zh:'职场', pinyin:'zhíchǎng', hv:'chức trường', vi:'nơi công sở, môi trường làm việc', pos:'danh từ' },
        { zh:'万一', pinyin:'wànyī', hv:'vạn nhất', vi:'nhỡ đâu', pos:'liên từ; danh từ' },
        { zh:'趁', pinyin:'chèn', hv:'sấn', vi:'nhân lúc', pos:'giới từ' },
        { zh:'备用', pinyin:'bèiyòng', hv:'bị dụng', vi:'dự phòng', pos:'động từ' },
        { zh:'文件', pinyin:'wénjiàn', hv:'văn kiện', vi:'tệp, văn bản', pos:'danh từ' },
        { zh:'汇报', pinyin:'huìbào', hv:'hối báo', vi:'báo cáo (lên cấp trên)', pos:'động từ' },
        { zh:'主动', pinyin:'zhǔdòng', hv:'chủ động', vi:'chủ động', pos:'tính từ' },
        { zh:'细心', pinyin:'xìxīn', hv:'tế tâm', vi:'tỉ mỉ', pos:'tính từ' },
        { zh:'同事', pinyin:'tóngshì', hv:'đồng sự', vi:'đồng nghiệp', pos:'danh từ' },
        { zh:'请教', pinyin:'qǐngjiào', hv:'thỉnh giáo', vi:'thỉnh giáo, hỏi', pos:'động từ' },
        { zh:'效率', pinyin:'xiàolǜ', hv:'hiệu suất', vi:'hiệu suất', pos:'danh từ' },
        { zh:'截止', pinyin:'jiézhǐ', hv:'tiệt chỉ', vi:'hạn chót', pos:'động từ' },
        { zh:'提交', pinyin:'tíjiāo', hv:'đề giao', vi:'nộp', pos:'động từ' },
        { zh:'备份', pinyin:'bèifèn', hv:'bị phận', vi:'sao lưu', pos:'động từ; danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'明天要向经理汇报，我有点儿没把握。', pinyin:'Míngtiān yào xiàng jīnglǐ huìbào, wǒ yǒudiǎnr méi bǎwò.', vi:'Mai phải báo cáo với giám đốc, mình hơi không chắc.' },
        { sp:'B', zh:'趁今天还有时间，把材料再检查一遍，然后备份一下。', pinyin:'Chèn jīntiān hái yǒu shíjiān, bǎ cáiliào zài jiǎnchá yí biàn, ránhòu bèifèn yíxià.', vi:'Nhân hôm nay còn thời gian, kiểm tra tài liệu lần nữa rồi sao lưu.' },
        { sp:'A', zh:'备份有必要吗？', pinyin:'Bèifèn yǒu bìyào ma?', vi:'Sao lưu có cần không?' },
        { sp:'B', zh:'万一电脑出问题，你连汇报的文件都没有。新人要细心，也要主动请教同事。', pinyin:'Wànyī diànnǎo chū wèntí, nǐ lián huìbào de wénjiàn dōu méiyǒu. Xīnrén yào xìxīn, yě yào zhǔdòng qǐngjiào tóngshì.', vi:'Nhỡ máy tính gặp sự cố là không có cả tệp báo cáo. Người mới phải tỉ mỉ, cũng phải chủ động hỏi đồng nghiệp.' }
      ]
    },

    {
      level:'hsk5', no:13, zh:'城市与乡村', pinyin:'Chéngshì yǔ xiāngcūn', vi:'Thành thị và nông thôn',
      skill:'So sánh có luận điểm: 相比之下/与…相比; 无非',
      grammar:[
        { form:'与 A 相比，B … / 相比之下，…', vi:'“so với A thì B …” / “so ra thì …”',
          note:'与…相比 đặt đầu câu, nêu đối tượng so sánh; 相比之下 dùng khi hai đối tượng đã được nhắc.',
          ex:{ zh:'与城市相比，乡村的生活节奏慢得多。', pinyin:'Yǔ chéngshì xiāngbǐ, xiāngcūn de shēnghuó jiézòu màn de duō.', vi:'So với thành phố, nhịp sống nông thôn chậm hơn nhiều.' } },
        { form:'无非 (是) + …', vi:'“chẳng qua chỉ là …”',
          note:'Thu hẹp phạm vi, ngụ ý không có gì hơn. Vd 他要的无非是一句道歉.',
          ex:{ zh:'人们搬到城市，无非是为了更多的机会。', pinyin:'Rénmen bān dào chéngshì, wúfēi shì wèile gèng duō de jīhuì.', vi:'Người ta chuyển lên thành phố chẳng qua vì nhiều cơ hội hơn.' } }
      ],
      vocab:[
        { zh:'乡村', pinyin:'xiāngcūn', hv:'hương thôn', vi:'nông thôn', pos:'danh từ' },
        { zh:'相比', pinyin:'xiāngbǐ', hv:'tương tỉ', vi:'so với', pos:'động từ' },
        { zh:'无非', pinyin:'wúfēi', hv:'vô phi', vi:'chẳng qua là', pos:'phó từ' },
        { zh:'拥挤', pinyin:'yōngjǐ', hv:'ủng tễ', vi:'đông đúc, chen chúc', pos:'tính từ' },
        { zh:'空气', pinyin:'kōngqì', hv:'không khí', vi:'không khí', pos:'danh từ' },
        { zh:'设施', pinyin:'shèshī', hv:'thiết thi', vi:'cơ sở vật chất', pos:'danh từ' },
        { zh:'医疗', pinyin:'yīliáo', hv:'y liệu', vi:'y tế', pos:'danh từ' },
        { zh:'人口', pinyin:'rénkǒu', hv:'nhân khẩu', vi:'dân số', pos:'danh từ' },
        { zh:'流动', pinyin:'liúdòng', hv:'lưu động', vi:'di chuyển, luân chuyển', pos:'động từ' },
        { zh:'邻里', pinyin:'línlǐ', hv:'lân lý', vi:'xóm giềng', pos:'danh từ' },
        { zh:'亲切', pinyin:'qīnqiè', hv:'thân thiết', vi:'thân thiện', pos:'tính từ' },
        { zh:'代价', pinyin:'dàijià', hv:'đại giá', vi:'cái giá phải trả', pos:'danh từ' },
        { zh:'各有', pinyin:'gè yǒu', hv:'các hữu', vi:'mỗi bên đều có', pos:'cụm cố định' },
        { zh:'取舍', pinyin:'qǔshě', hv:'thủ xả', vi:'chọn lựa, lấy bỏ', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你更愿意住在城市还是乡村？', pinyin:'Nǐ gèng yuànyì zhù zài chéngshì háishi xiāngcūn?', vi:'Bạn muốn sống ở thành phố hay nông thôn hơn?' },
        { sp:'B', zh:'与乡村相比，城市设施好，医疗方便，但太拥挤了。', pinyin:'Yǔ xiāngcūn xiāngbǐ, chéngshì shèshī hǎo, yīliáo fāngbiàn, dàn tài yōngjǐ le.', vi:'So với nông thôn, thành phố cơ sở tốt, y tế tiện, nhưng chen chúc quá.' },
        { sp:'A', zh:'相比之下，乡村空气好，邻里也亲切。', pinyin:'Xiāngbǐ zhī xià, xiāngcūn kōngqì hǎo, línlǐ yě qīnqiè.', vi:'So ra, nông thôn không khí tốt, xóm giềng thân thiện.' },
        { sp:'B', zh:'人口往城市流动，无非是为了机会。各有代价，看你怎么取舍。', pinyin:'Rénkǒu wǎng chéngshì liúdòng, wúfēi shì wèile jīhuì. Gè yǒu dàijià, kàn nǐ zěnme qǔshě.', vi:'Dân đổ về thành phố chẳng qua vì cơ hội. Mỗi bên có cái giá, tuỳ bạn chọn.' }
      ]
    },

    {
      level:'hsk5', no:14, zh:'理财与消费', pinyin:'Lǐcái yǔ xiāofèi', vi:'Quản lý tài chính và tiêu dùng',
      skill:'Quyết định dứt khoát: 干脆/索性; 大不了',
      grammar:[
        { form:'干脆 / 索性 + V', vi:'“dứt khoát, thà … cho xong”',
          note:'Sau khi cân nhắc, chọn cách đơn giản/dứt khoát. 干脆 còn là tính từ (说话很干脆).',
          ex:{ zh:'既然用不上，干脆别买了。', pinyin:'Jìrán yòng bu shàng, gāncuì bié mǎi le.', vi:'Đã không dùng đến thì dứt khoát đừng mua.' } },
        { form:'大不了 + hậu quả tệ nhất', vi:'“cùng lắm thì …”',
          note:'Nêu hậu quả xấu nhất để cho thấy không đáng lo. Vd 大不了重新来.',
          ex:{ zh:'先试着记账，大不了坚持不下来再说。', pinyin:'Xiān shìzhe jìzhàng, dàbuliǎo jiānchí bu xiàlái zài shuō.', vi:'Cứ thử ghi chép chi tiêu, cùng lắm không theo được thì tính sau.' } }
      ],
      vocab:[
        { zh:'理财', pinyin:'lǐcái', hv:'lý tài', vi:'quản lý tài chính', pos:'động từ' },
        { zh:'消费', pinyin:'xiāofèi', hv:'tiêu phí', vi:'tiêu dùng', pos:'động từ; danh từ' },
        { zh:'干脆', pinyin:'gāncuì', hv:'can thuý', vi:'dứt khoát', pos:'phó từ; tính từ' },
        { zh:'索性', pinyin:'suǒxìng', hv:'tác tính', vi:'dứt khoát, thà', pos:'phó từ' },
        { zh:'大不了', pinyin:'dàbuliǎo', hv:'đại bất liễu', vi:'cùng lắm thì', pos:'phó từ' },
        { zh:'记账', pinyin:'jìzhàng', hv:'ký trướng', vi:'ghi chép chi tiêu', pos:'động từ' },
        { zh:'预算', pinyin:'yùsuàn', hv:'dự toán', vi:'ngân sách', pos:'danh từ' },
        { zh:'储蓄', pinyin:'chǔxù', hv:'trữ súc', vi:'tiết kiệm (tiền)', pos:'động từ; danh từ' },
        { zh:'冲动', pinyin:'chōngdòng', hv:'xung động', vi:'bốc đồng', pos:'tính từ; danh từ' },
        { zh:'打折', pinyin:'dǎzhé', hv:'đả chiết', vi:'giảm giá', pos:'động từ' },
        { zh:'投资', pinyin:'tóuzī', hv:'đầu tư', vi:'đầu tư', pos:'động từ; danh từ' },
        { zh:'风险', pinyin:'fēngxiǎn', hv:'phong hiểm', vi:'rủi ro', pos:'danh từ' },
        { zh:'账单', pinyin:'zhàngdān', hv:'trướng đơn', vi:'hoá đơn, sao kê', pos:'danh từ' },
        { zh:'月光族', pinyin:'yuèguāngzú', hv:'nguyệt quang tộc', vi:'người tiêu hết lương mỗi tháng', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我是典型的“月光族”，看到打折就冲动消费。', pinyin:'Wǒ shì diǎnxíng de “yuèguāngzú”, kàndào dǎzhé jiù chōngdòng xiāofèi.', vi:'Mình là “nguyệt quang tộc” điển hình, thấy giảm giá là mua bốc đồng.' },
        { sp:'B', zh:'那你索性把购物软件删了，每月先储蓄再消费。', pinyin:'Nà nǐ suǒxìng bǎ gòuwù ruǎnjiàn shān le, měi yuè xiān chǔxù zài xiāofèi.', vi:'Vậy dứt khoát xoá app mua sắm, mỗi tháng để dành trước rồi mới tiêu.' },
        { sp:'A', zh:'我怕做不到。', pinyin:'Wǒ pà zuò bu dào.', vi:'Mình sợ không làm được.' },
        { sp:'B', zh:'先做预算，每天记账，大不了失败了再调整。别急着投资，风险太大。', pinyin:'Xiān zuò yùsuàn, měitiān jìzhàng, dàbuliǎo shībài le zài tiáozhěng. Bié jízhe tóuzī, fēngxiǎn tài dà.', vi:'Lập ngân sách trước, ghi chép hằng ngày, cùng lắm thất bại thì chỉnh lại. Đừng vội đầu tư, rủi ro lớn.' }
      ]
    },

    {
      level:'hsk5', no:15, zh:'绿色生活', pinyin:'Lǜsè shēnghuó', vi:'Lối sống xanh',
      skill:'Lập luận nhân quả văn viết: 从而/以致; 鉴于',
      grammar:[
        { form:'…，从而 / 以致 …', vi:'“từ đó …” (kết quả tốt) / “đến nỗi …” (kết quả xấu)',
          note:'从而 nối hành động với kết quả mong muốn; 以致 (以至于) nối với hậu quả tiêu cực.',
          ex:{ zh:'垃圾分类减少了污染，从而改善了环境。', pinyin:'Lājī fēnlèi jiǎnshǎo le wūrǎn, cóng’ér gǎishàn le huánjìng.', vi:'Phân loại rác giảm ô nhiễm, từ đó cải thiện môi trường.' } },
        { form:'鉴于 + tình hình，…', vi:'“xét thấy / căn cứ vào tình hình …”',
          note:'Văn viết, mở đầu bằng lý do khách quan. Vd 鉴于天气恶劣，活动推迟.',
          ex:{ zh:'鉴于资源有限，我们必须节约用水。', pinyin:'Jiànyú zīyuán yǒuxiàn, wǒmen bìxū jiéyuē yòng shuǐ.', vi:'Xét thấy tài nguyên có hạn, chúng ta phải tiết kiệm nước.' } }
      ],
      vocab:[
        { zh:'从而', pinyin:'cóng’ér', hv:'tòng nhi', vi:'từ đó', pos:'liên từ' },
        { zh:'以致', pinyin:'yǐzhì', hv:'dĩ trí', vi:'đến nỗi', pos:'liên từ' },
        { zh:'鉴于', pinyin:'jiànyú', hv:'giám vu', vi:'xét thấy', pos:'giới từ' },
        { zh:'改善', pinyin:'gǎishàn', hv:'cải thiện', vi:'cải thiện', pos:'động từ' },
        { zh:'有限', pinyin:'yǒuxiàn', hv:'hữu hạn', vi:'có hạn', pos:'tính từ' },
        { zh:'能源', pinyin:'néngyuán', hv:'năng nguyên', vi:'năng lượng', pos:'danh từ' },
        { zh:'排放', pinyin:'páifàng', hv:'bài phóng', vi:'thải ra', pos:'động từ' },
        { zh:'气候', pinyin:'qìhòu', hv:'khí hậu', vi:'khí hậu', pos:'danh từ' },
        { zh:'恶劣', pinyin:'èliè', hv:'ác liệt', vi:'khắc nghiệt, tồi tệ', pos:'tính từ' },
        { zh:'循环', pinyin:'xúnhuán', hv:'tuần hoàn', vi:'tuần hoàn, tái chế', pos:'động từ' },
        { zh:'一次性', pinyin:'yícìxìng', hv:'nhất thứ tính', vi:'dùng một lần', pos:'tính từ' },
        { zh:'措施', pinyin:'cuòshī', hv:'thố thi', vi:'biện pháp', pos:'danh từ' },
        { zh:'倡导', pinyin:'chàngdǎo', hv:'xướng đạo', vi:'đề xướng, kêu gọi', pos:'động từ' },
        { zh:'出行', pinyin:'chūxíng', hv:'xuất hành', vi:'đi lại', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'公司为什么不再提供一次性餐具了？', pinyin:'Gōngsī wèishénme bú zài tígōng yícìxìng cānjù le?', vi:'Sao công ty không cấp bộ đồ ăn dùng một lần nữa?' },
        { sp:'B', zh:'鉴于垃圾越来越多，公司倡导绿色办公。', pinyin:'Jiànyú lājī yuèláiyuè duō, gōngsī chàngdǎo lǜsè bàngōng.', vi:'Xét thấy rác ngày càng nhiều, công ty kêu gọi văn phòng xanh.' },
        { sp:'A', zh:'这些措施真的有用吗？', pinyin:'Zhèxiē cuòshī zhēn de yǒuyòng ma?', vi:'Biện pháp này có tác dụng thật không?' },
        { sp:'B', zh:'减少排放、循环利用，从而改善气候。以前大家不在乎，以致环境越来越恶劣。', pinyin:'Jiǎnshǎo páifàng, xúnhuán lìyòng, cóng’ér gǎishàn qìhòu. Yǐqián dàjiā bú zàihu, yǐzhì huánjìng yuèláiyuè èliè.', vi:'Giảm thải, tái chế, từ đó cải thiện khí hậu. Trước mọi người không quan tâm, đến nỗi môi trường ngày càng tệ.' }
      ]
    },

    {
      level:'hsk5', no:16, zh:'孔子的智慧', pinyin:'Kǒngzǐ de zhìhuì', vi:'Trí tuệ của Khổng Tử',
      skill:'Giới thiệu nhân vật lịch sử: 历来/向来; 以…著称',
      grammar:[
        { form:'历来 / 向来 + V', vi:'“từ trước đến nay, xưa nay …”',
          note:'历来 nói về truyền thống chung; 向来 nói về thói quen của cá nhân/tập thể. Vd 中国人历来重视教育 / 他向来守时.',
          ex:{ zh:'中国人历来重视尊师重道。', pinyin:'Zhōngguórén lìlái zhòngshì zūn shī zhòng dào.', vi:'Người Trung Quốc xưa nay coi trọng tôn sư trọng đạo.' } },
        { form:'以 + đặc điểm + 著称 / 闻名', vi:'“nổi tiếng vì …”',
          note:'Văn viết. Vd 杭州以西湖闻名 / 他以幽默著称.',
          ex:{ zh:'孔子以“因材施教”的思想著称。', pinyin:'Kǒngzǐ yǐ “yīn cái shī jiào” de sīxiǎng zhùchēng.', vi:'Khổng Tử nổi tiếng với tư tưởng “dạy học tuỳ theo người học”.' } }
      ],
      vocab:[
        { zh:'孔子', pinyin:'Kǒngzǐ', hv:'Khổng Tử', vi:'Khổng Tử', pos:'danh từ' },
        { zh:'智慧', pinyin:'zhìhuì', hv:'trí tuệ', vi:'trí tuệ', pos:'danh từ' },
        { zh:'历来', pinyin:'lìlái', hv:'lịch lai', vi:'xưa nay', pos:'phó từ' },
        { zh:'向来', pinyin:'xiànglái', hv:'hướng lai', vi:'trước nay', pos:'phó từ' },
        { zh:'著称', pinyin:'zhùchēng', hv:'trứ xưng', vi:'nổi tiếng (vì)', pos:'động từ' },
        { zh:'思想', pinyin:'sīxiǎng', hv:'tư tưởng', vi:'tư tưởng', pos:'danh từ' },
        { zh:'教育家', pinyin:'jiàoyùjiā', hv:'giáo dục gia', vi:'nhà giáo dục', pos:'danh từ' },
        { zh:'弟子', pinyin:'dìzǐ', hv:'đệ tử', vi:'học trò', pos:'danh từ' },
        { zh:'因材施教', pinyin:'yīn cái shī jiào', hv:'nhân tài thi giáo', vi:'dạy tuỳ theo năng lực', pos:'thành ngữ' },
        { zh:'温故知新', pinyin:'wēn gù zhī xīn', hv:'ôn cố tri tân', vi:'ôn cũ biết mới', pos:'thành ngữ' },
        { zh:'影响', pinyin:'yǐngxiǎng', hv:'ảnh hưởng', vi:'ảnh hưởng', pos:'động từ; danh từ' },
        { zh:'深远', pinyin:'shēnyuǎn', hv:'thâm viễn', vi:'sâu xa', pos:'tính từ' },
        { zh:'重视', pinyin:'zhòngshì', hv:'trọng thị', vi:'coi trọng', pos:'động từ' },
        { zh:'经典', pinyin:'jīngdiǎn', hv:'kinh điển', vi:'kinh điển', pos:'danh từ; tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'为什么两千多年后人们还在读孔子？', pinyin:'Wèishénme liǎngqiān duō nián hòu rénmen hái zài dú Kǒngzǐ?', vi:'Sao hơn hai nghìn năm sau người ta vẫn đọc Khổng Tử?' },
        { sp:'B', zh:'他是伟大的教育家，以“因材施教”著称，思想影响深远。', pinyin:'Tā shì wěidà de jiàoyùjiā, yǐ “yīn cái shī jiào” zhùchēng, sīxiǎng yǐngxiǎng shēnyuǎn.', vi:'Ông là nhà giáo dục vĩ đại, nổi tiếng với “dạy tuỳ người”, tư tưởng ảnh hưởng sâu xa.' },
        { sp:'A', zh:'“温故知新”也是他说的吧？', pinyin:'“Wēn gù zhī xīn” yě shì tā shuō de ba?', vi:'“Ôn cố tri tân” cũng là ông nói nhỉ?' },
        { sp:'B', zh:'对。中国人历来重视教育，很多经典观念都来自他和他的弟子。', pinyin:'Duì. Zhōngguórén lìlái zhòngshì jiàoyù, hěn duō jīngdiǎn guānniàn dōu láizì tā hé tā de dìzǐ.', vi:'Đúng. Người Trung Quốc xưa nay trọng giáo dục, nhiều quan niệm kinh điển đến từ ông và học trò.' }
      ]
    },

    {
      level:'hsk5', no:17, zh:'旅行的意义', pinyin:'Lǚxíng de yìyì', vi:'Ý nghĩa của những chuyến đi',
      skill:'Nhượng bộ giả định mạnh 哪怕…也; giả định ngược 要不是',
      grammar:[
        { form:'哪怕 A，也 B', vi:'“dù cho A thì cũng B” (khẩu ngữ, mạnh hơn 即使)',
          note:'Vd 哪怕只有一天假，我也要出去走走.',
          ex:{ zh:'哪怕路再远，我也想去看看。', pinyin:'Nǎpà lù zài yuǎn, wǒ yě xiǎng qù kànkan.', vi:'Dù đường xa mấy tôi cũng muốn đi xem.' } },
        { form:'要不是 A，(就) B', vi:'“nếu không phải vì A thì đã B” (trái với thực tế)',
          note:'A là việc đã xảy ra; B là kết quả tưởng tượng. Vd 要不是你提醒，我就忘了.',
          ex:{ zh:'要不是那次旅行，我不会认识这么多朋友。', pinyin:'Yàobúshì nà cì lǚxíng, wǒ bú huì rènshi zhème duō péngyou.', vi:'Nếu không nhờ chuyến đi đó, tôi đã không quen nhiều bạn thế.' } }
      ],
      vocab:[
        { zh:'哪怕', pinyin:'nǎpà', hv:'na phạ', vi:'dù cho', pos:'liên từ' },
        { zh:'要不是', pinyin:'yàobúshì', hv:'yếu bất thị', vi:'nếu không phải vì', pos:'liên từ' },
        { zh:'开阔', pinyin:'kāikuò', hv:'khai khoát', vi:'mở mang, rộng mở', pos:'động từ; tính từ' },
        { zh:'眼界', pinyin:'yǎnjiè', hv:'nhãn giới', vi:'tầm mắt', pos:'danh từ' },
        { zh:'陌生', pinyin:'mòshēng', hv:'mạch sinh', vi:'xa lạ', pos:'tính từ' },
        { zh:'风土人情', pinyin:'fēngtǔ rénqíng', hv:'phong thổ nhân tình', vi:'phong tục tập quán', pos:'thành ngữ' },
        { zh:'攻略', pinyin:'gōnglüè', hv:'công lược', vi:'cẩm nang (du lịch)', pos:'danh từ' },
        { zh:'预算', pinyin:'yùsuàn', hv:'dự toán', vi:'ngân sách', pos:'danh từ' },
        { zh:'背包', pinyin:'bēibāo', hv:'bối bao', vi:'ba lô', pos:'danh từ' },
        { zh:'当地', pinyin:'dāngdì', hv:'đương địa', vi:'địa phương', pos:'danh từ' },
        { zh:'体验', pinyin:'tǐyàn', hv:'thể nghiệm', vi:'trải nghiệm', pos:'động từ; danh từ' },
        { zh:'迷路', pinyin:'mílù', hv:'mê lộ', vi:'lạc đường', pos:'động từ' },
        { zh:'收获', pinyin:'shōuhuò', hv:'thu hoạch', vi:'thu hoạch, thành quả', pos:'danh từ' },
        { zh:'热情', pinyin:'rèqíng', hv:'nhiệt tình', vi:'nhiệt tình', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你怎么一个人背包去了云南？', pinyin:'Nǐ zěnme yí ge rén bēibāo qù le Yúnnán?', vi:'Sao bạn một mình đeo ba lô đi Vân Nam?' },
        { sp:'B', zh:'哪怕预算不多，我也想去体验当地的风土人情。', pinyin:'Nǎpà yùsuàn bù duō, wǒ yě xiǎng qù tǐyàn dāngdì de fēngtǔ rénqíng.', vi:'Dù ngân sách ít, mình vẫn muốn trải nghiệm phong tục địa phương.' },
        { sp:'A', zh:'一个人在陌生的地方，不怕迷路吗？', pinyin:'Yí ge rén zài mòshēng de dìfang, bú pà mílù ma?', vi:'Một mình ở nơi xa lạ, không sợ lạc à?' },
        { sp:'B', zh:'迷过一次，要不是当地人热情带路，我可能到不了车站。旅行开阔了我的眼界。', pinyin:'Mí guo yí cì, yàobúshì dāngdìrén rèqíng dàilù, wǒ kěnéng dào bu liǎo chēzhàn. Lǚxíng kāikuò le wǒ de yǎnjiè.', vi:'Lạc một lần, nếu không nhờ người địa phương nhiệt tình dẫn đường thì có lẽ không tới được bến xe. Đi mở mang tầm mắt lắm.' }
      ]
    },

    {
      level:'hsk5', no:18, zh:'幽默的力量', pinyin:'Yōumò de lìliàng', vi:'Sức mạnh của hài hước',
      skill:'Thái độ khẩu ngữ: 反正; 就算…也',
      grammar:[
        { form:'反正 + mệnh đề', vi:'“đằng nào cũng, dù sao thì …”',
          note:'Nêu sự thật không đổi bất kể điều kiện. Vd 反正我不去 / 不管你信不信，反正我信.',
          ex:{ zh:'反正都要做，不如笑着做。', pinyin:'Fǎnzhèng dōu yào zuò, bùrú xiàozhe zuò.', vi:'Đằng nào cũng phải làm, chi bằng vừa cười vừa làm.' } },
        { form:'就算 A，也 B', vi:'“cho dù A thì cũng B” (khẩu ngữ của 即使)',
          note:'Vd 就算失败了，也是一次经验.',
          ex:{ zh:'就算别人不笑，我自己也觉得好玩。', pinyin:'Jiùsuàn biéren bú xiào, wǒ zìjǐ yě juéde hǎowán.', vi:'Cho dù người khác không cười, tự tôi cũng thấy vui.' } }
      ],
      vocab:[
        { zh:'幽默', pinyin:'yōumò', hv:'u mặc', vi:'hài hước', pos:'tính từ' },
        { zh:'力量', pinyin:'lìliàng', hv:'lực lượng', vi:'sức mạnh', pos:'danh từ' },
        { zh:'反正', pinyin:'fǎnzhèng', hv:'phản chính', vi:'đằng nào cũng', pos:'phó từ' },
        { zh:'就算', pinyin:'jiùsuàn', hv:'tựu toán', vi:'cho dù', pos:'liên từ' },
        { zh:'气氛', pinyin:'qìfēn', hv:'khí phân', vi:'bầu không khí', pos:'danh từ' },
        { zh:'缓解', pinyin:'huǎnjiě', hv:'hoãn giải', vi:'làm dịu', pos:'động từ' },
        { zh:'尴尬', pinyin:'gāngà', hv:'giam giới', vi:'ngượng ngùng, lúng túng', pos:'tính từ' },
        { zh:'开玩笑', pinyin:'kāi wánxiào', hv:'khai ngoạn tiếu', vi:'nói đùa', pos:'động từ' },
        { zh:'自嘲', pinyin:'zìcháo', hv:'tự trào', vi:'tự trào, tự giễu', pos:'động từ' },
        { zh:'分寸', pinyin:'fēncun', hv:'phân thốn', vi:'chừng mực', pos:'danh từ' },
        { zh:'伤害', pinyin:'shānghài', hv:'thương hại', vi:'tổn thương', pos:'động từ' },
        { zh:'魅力', pinyin:'mèilì', hv:'mị lực', vi:'sức hút', pos:'danh từ' },
        { zh:'化解', pinyin:'huàjiě', hv:'hoá giải', vi:'hoá giải', pos:'động từ' },
        { zh:'冲突', pinyin:'chōngtū', hv:'xung đột', vi:'xung đột', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'昨天会上气氛那么尴尬，你一句玩笑就化解了。', pinyin:'Zuótiān huì shang qìfēn nàme gāngà, nǐ yí jù wánxiào jiù huàjiě le.', vi:'Hôm qua họp không khí ngượng thế, bạn đùa một câu là hoá giải.' },
        { sp:'B', zh:'反正问题总要解决，不如先缓解一下情绪。', pinyin:'Fǎnzhèng wèntí zǒng yào jiějué, bùrú xiān huǎnjiě yíxià qíngxù.', vi:'Đằng nào vấn đề cũng phải giải quyết, chi bằng làm dịu cảm xúc trước.' },
        { sp:'A', zh:'可是开玩笑也可能伤害别人吧？', pinyin:'Kěshì kāi wánxiào yě kěnéng shānghài biéren ba?', vi:'Nhưng đùa cũng có thể làm tổn thương người khác chứ?' },
        { sp:'B', zh:'所以要有分寸，最安全的是自嘲。就算不好笑，也不会引起冲突。', pinyin:'Suǒyǐ yào yǒu fēncun, zuì ānquán de shì zìcháo. Jiùsuàn bù hǎoxiào, yě bú huì yǐnqǐ chōngtū.', vi:'Nên phải có chừng mực, an toàn nhất là tự giễu. Cho dù không buồn cười cũng không gây xung đột.' }
      ]
    },

    {
      level:'hsk5', no:19, zh:'人工智能时代', pinyin:'Réngōng zhìnéng shídài', vi:'Thời đại trí tuệ nhân tạo',
      skill:'Văn viết về công nghệ: 在…下; 随之',
      grammar:[
        { form:'在 + N + (的) 下', vi:'“dưới (sự) …, trong điều kiện …”',
          note:'在…的帮助下, 在…的影响下, 在这种情况下. Danh từ thường chỉ tác động/hoàn cảnh.',
          ex:{ zh:'在技术的推动下，很多工作方式发生了变化。', pinyin:'Zài jìshù de tuīdòng xià, hěn duō gōngzuò fāngshì fāshēng le biànhuà.', vi:'Dưới sự thúc đẩy của công nghệ, nhiều cách làm việc đã thay đổi.' } },
        { form:'…，随之 + V', vi:'“theo đó, kéo theo …”',
          note:'Văn viết; vế trước là thay đổi, vế sau thay đổi kéo theo. Vd 收入增加了，消费也随之增长.',
          ex:{ zh:'机器越来越聪明，新的问题也随之出现。', pinyin:'Jīqì yuèláiyuè cōngming, xīn de wèntí yě suízhī chūxiàn.', vi:'Máy móc ngày càng thông minh, vấn đề mới cũng theo đó xuất hiện.' } }
      ],
      vocab:[
        { zh:'人工智能', pinyin:'réngōng zhìnéng', hv:'nhân công trí năng', vi:'trí tuệ nhân tạo', pos:'danh từ' },
        { zh:'时代', pinyin:'shídài', hv:'thời đại', vi:'thời đại', pos:'danh từ' },
        { zh:'随之', pinyin:'suízhī', hv:'tuỳ chi', vi:'theo đó', pos:'phó từ' },
        { zh:'技术', pinyin:'jìshù', hv:'kỹ thuật', vi:'công nghệ, kỹ thuật', pos:'danh từ' },
        { zh:'推动', pinyin:'tuīdòng', hv:'suy động', vi:'thúc đẩy', pos:'động từ' },
        { zh:'机器', pinyin:'jīqì', hv:'cơ khí', vi:'máy móc', pos:'danh từ' },
        { zh:'取代', pinyin:'qǔdài', hv:'thủ đại', vi:'thay thế', pos:'động từ' },
        { zh:'岗位', pinyin:'gǎngwèi', hv:'cương vị', vi:'vị trí việc làm', pos:'danh từ' },
        { zh:'创造', pinyin:'chuàngzào', hv:'sáng tạo', vi:'sáng tạo, tạo ra', pos:'động từ' },
        { zh:'数据', pinyin:'shùjù', hv:'số cứ', vi:'dữ liệu', pos:'danh từ' },
        { zh:'判断', pinyin:'pànduàn', hv:'phán đoán', vi:'phán đoán', pos:'động từ; danh từ' },
        { zh:'伦理', pinyin:'lúnlǐ', hv:'luân lý', vi:'đạo đức, luân lý', pos:'danh từ' },
        { zh:'担忧', pinyin:'dānyōu', hv:'đảm ưu', vi:'lo ngại', pos:'động từ' },
        { zh:'把握', pinyin:'bǎwò', hv:'bả ác', vi:'nắm bắt; sự chắc chắn', pos:'động từ; danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你担心人工智能会取代你的岗位吗？', pinyin:'Nǐ dānxīn réngōng zhìnéng huì qǔdài nǐ de gǎngwèi ma?', vi:'Bạn có lo AI thay thế vị trí của bạn không?' },
        { sp:'B', zh:'有点儿担忧。在技术的推动下，很多重复性工作已经被机器取代了。', pinyin:'Yǒudiǎnr dānyōu. Zài jìshù de tuīdòng xià, hěn duō chóngfùxìng gōngzuò yǐjīng bèi jīqì qǔdài le.', vi:'Hơi lo. Dưới sự thúc đẩy của công nghệ, nhiều việc lặp lại đã bị máy thay thế.' },
        { sp:'A', zh:'但新的岗位也随之出现了，比如数据分析。', pinyin:'Dàn xīn de gǎngwèi yě suízhī chūxiàn le, bǐrú shùjù fēnxī.', vi:'Nhưng vị trí mới cũng theo đó xuất hiện, như phân tích dữ liệu.' },
        { sp:'B', zh:'对，机器擅长计算，人擅长判断和创造。关键是把握机会，还要考虑伦理问题。', pinyin:'Duì, jīqì shàncháng jìsuàn, rén shàncháng pànduàn hé chuàngzào. Guānjiàn shì bǎwò jīhuì, hái yào kǎolǜ lúnlǐ wèntí.', vi:'Đúng, máy giỏi tính toán, người giỏi phán đoán và sáng tạo. Then chốt là nắm bắt cơ hội, còn phải nghĩ tới đạo đức.' }
      ]
    },

    {
      level:'hsk5', no:20, zh:'人与动物', pinyin:'Rén yǔ dòngwù', vi:'Con người và động vật',
      skill:'Lập luận tăng tiến: 何况; 无论如何',
      grammar:[
        { form:'A，(更/又) 何况 B', vi:'“A, huống chi B”',
          note:'B là trường hợp còn hiển nhiên hơn A. Vd 大人都搬不动，何况孩子.',
          ex:{ zh:'连专家都无法解释，何况我们。', pinyin:'Lián zhuānjiā dōu wúfǎ jiěshì, hékuàng wǒmen.', vi:'Ngay cả chuyên gia cũng không giải thích nổi, huống chi chúng ta.' } },
        { form:'无论如何 + (也/都) V', vi:'“dù thế nào cũng …”',
          note:'Thái độ kiên quyết. Vd 无论如何我都要试一次.',
          ex:{ zh:'无论如何，我们都不能伤害动物。', pinyin:'Wúlùn rúhé, wǒmen dōu bù néng shānghài dòngwù.', vi:'Dù thế nào chúng ta cũng không được làm hại động vật.' } }
      ],
      vocab:[
        { zh:'何况', pinyin:'hékuàng', hv:'hà huống', vi:'huống chi', pos:'liên từ' },
        { zh:'无论如何', pinyin:'wúlùn rúhé', hv:'vô luận như hà', vi:'dù thế nào', pos:'thành ngữ' },
        { zh:'动物', pinyin:'dòngwù', hv:'động vật', vi:'động vật', pos:'danh từ' },
        { zh:'宠物', pinyin:'chǒngwù', hv:'sủng vật', vi:'thú cưng', pos:'danh từ' },
        { zh:'野生', pinyin:'yěshēng', hv:'dã sinh', vi:'hoang dã', pos:'tính từ' },
        { zh:'灭绝', pinyin:'mièjué', hv:'diệt tuyệt', vi:'tuyệt chủng', pos:'động từ' },
        { zh:'专家', pinyin:'zhuānjiā', hv:'chuyên gia', vi:'chuyên gia', pos:'danh từ' },
        { zh:'无法', pinyin:'wúfǎ', hv:'vô pháp', vi:'không thể', pos:'động từ' },
        { zh:'生态', pinyin:'shēngtài', hv:'sinh thái', vi:'sinh thái', pos:'danh từ' },
        { zh:'平衡', pinyin:'pínghéng', hv:'bình hành', vi:'cân bằng', pos:'danh từ' },
        { zh:'抛弃', pinyin:'pāoqì', hv:'phao khí', vi:'bỏ rơi', pos:'động từ' },
        { zh:'忠诚', pinyin:'zhōngchéng', hv:'trung thành', vi:'trung thành', pos:'tính từ' },
        { zh:'责任', pinyin:'zérèn', hv:'trách nhiệm', vi:'trách nhiệm', pos:'danh từ' },
        { zh:'领养', pinyin:'lǐngyǎng', hv:'lĩnh dưỡng', vi:'nhận nuôi', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我想领养一只狗，可又怕照顾不好。', pinyin:'Wǒ xiǎng lǐngyǎng yì zhī gǒu, kě yòu pà zhàogù bu hǎo.', vi:'Mình muốn nhận nuôi một chú chó, nhưng sợ chăm không tốt.' },
        { sp:'B', zh:'养宠物是一种责任。无论如何，都不能养了又抛弃。', pinyin:'Yǎng chǒngwù shì yì zhǒng zérèn. Wúlùn rúhé, dōu bù néng yǎng le yòu pāoqì.', vi:'Nuôi thú cưng là một trách nhiệm. Dù thế nào cũng không được nuôi rồi bỏ.' },
        { sp:'A', zh:'我知道，狗很忠诚。', pinyin:'Wǒ zhīdào, gǒu hěn zhōngchéng.', vi:'Mình biết, chó rất trung thành.' },
        { sp:'B', zh:'连宠物都需要我们保护，何况野生动物。有的物种已经快灭绝了，生态平衡太重要了。', pinyin:'Lián chǒngwù dōu xūyào wǒmen bǎohù, hékuàng yěshēng dòngwù. Yǒu de wùzhǒng yǐjīng kuài mièjué le, shēngtài pínghéng tài zhòngyào le.', vi:'Thú cưng còn cần ta bảo vệ, huống chi động vật hoang dã. Có loài sắp tuyệt chủng rồi, cân bằng sinh thái quan trọng lắm.' }
      ]
    },

    {
      level:'hsk5', no:21, zh:'读书的乐趣', pinyin:'Dúshū de lèqù', vi:'Niềm vui đọc sách',
      skill:'Lập luận kèm cảnh báo: 不然/要不; 除此之外',
      grammar:[
        { form:'…，不然 / 要不 …', vi:'“nếu không thì …”',
          note:'Cùng nghĩa 否则 nhưng khẩu ngữ. 要不 còn dùng để đề nghị: 要不我们去图书馆吧.',
          ex:{ zh:'读书要有选择，不然浪费时间。', pinyin:'Dúshū yào yǒu xuǎnzé, bùrán làngfèi shíjiān.', vi:'Đọc sách phải có chọn lọc, nếu không lãng phí thời gian.' } },
        { form:'除此之外，(还/也) …', vi:'“ngoài ra, bên cạnh đó …”',
          note:'Văn viết, bổ sung ý sau khi đã nêu một điểm. Khẩu ngữ: 另外 / 还有.',
          ex:{ zh:'读书能增长知识；除此之外，还能让人平静。', pinyin:'Dúshū néng zēngzhǎng zhīshi; chú cǐ zhī wài, hái néng ràng rén píngjìng.', vi:'Đọc sách tăng kiến thức; ngoài ra còn giúp ta bình tâm.' } }
      ],
      vocab:[
        { zh:'乐趣', pinyin:'lèqù', hv:'lạc thú', vi:'niềm vui, thú vui', pos:'danh từ' },
        { zh:'不然', pinyin:'bùrán', hv:'bất nhiên', vi:'nếu không', pos:'liên từ' },
        { zh:'除此之外', pinyin:'chú cǐ zhī wài', hv:'trừ thử chi ngoại', vi:'ngoài ra', pos:'cụm cố định' },
        { zh:'知识', pinyin:'zhīshi', hv:'tri thức', vi:'kiến thức', pos:'danh từ' },
        { zh:'平静', pinyin:'píngjìng', hv:'bình tĩnh', vi:'bình lặng, bình tâm', pos:'tính từ' },
        { zh:'浪费', pinyin:'làngfèi', hv:'lãng phí', vi:'lãng phí', pos:'động từ' },
        { zh:'小说', pinyin:'xiǎoshuō', hv:'tiểu thuyết', vi:'tiểu thuyết', pos:'danh từ' },
        { zh:'人物', pinyin:'rénwù', hv:'nhân vật', vi:'nhân vật', pos:'danh từ' },
        { zh:'想象', pinyin:'xiǎngxiàng', hv:'tưởng tượng', vi:'tưởng tượng', pos:'động từ; danh từ' },
        { zh:'碎片', pinyin:'suìpiàn', hv:'toái phiến', vi:'mảnh vụn', pos:'danh từ' },
        { zh:'专注', pinyin:'zhuānzhù', hv:'chuyên chú', vi:'tập trung', pos:'tính từ; động từ' },
        { zh:'电子书', pinyin:'diànzǐshū', hv:'điện tử thư', vi:'sách điện tử', pos:'danh từ' },
        { zh:'纸质', pinyin:'zhǐzhì', hv:'chỉ chất', vi:'bản giấy', pos:'tính từ' },
        { zh:'思考', pinyin:'sīkǎo', hv:'tư khảo', vi:'suy nghĩ, tư duy', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'现在信息这么多，为什么还要读书？', pinyin:'Xiànzài xìnxī zhème duō, wèishénme hái yào dúshū?', vi:'Giờ thông tin nhiều thế, sao vẫn phải đọc sách?' },
        { sp:'B', zh:'网上的信息是碎片，读书才能系统地思考。除此之外，读小说还能锻炼想象力。', pinyin:'Wǎngshàng de xìnxī shì suìpiàn, dúshū cái néng xìtǒng de sīkǎo. Chú cǐ zhī wài, dú xiǎoshuō hái néng duànliàn xiǎngxiànglì.', vi:'Thông tin trên mạng là mảnh vụn, đọc sách mới tư duy có hệ thống. Ngoài ra đọc tiểu thuyết còn rèn trí tưởng tượng.' },
        { sp:'A', zh:'电子书和纸质书有区别吗？', pinyin:'Diànzǐshū hé zhǐzhì shū yǒu qūbié ma?', vi:'Sách điện tử và sách giấy có khác nhau không?' },
        { sp:'B', zh:'都行，关键是专注。不然一边读一边看手机，等于浪费时间。', pinyin:'Dōu xíng, guānjiàn shì zhuānzhù. Bùrán yìbiān dú yìbiān kàn shǒujī, děngyú làngfèi shíjiān.', vi:'Đều được, then chốt là tập trung. Nếu không vừa đọc vừa xem điện thoại thì bằng lãng phí thời gian.' }
      ]
    },

    {
      level:'hsk5', no:22, zh:'教育的选择', pinyin:'Jiàoyù de xuǎnzé', vi:'Lựa chọn trong giáo dục',
      skill:'Thừa nhận rồi phản bác: 固然…但是; 既…也 (văn viết)',
      grammar:[
        { form:'A 固然 …，但是/可是 B', vi:'“A cố nhiên …, nhưng B”',
          note:'Thừa nhận A đúng rồi nhấn mạnh B. Vd 成绩固然重要，但健康更重要.',
          ex:{ zh:'名校固然好，但不一定适合每个孩子。', pinyin:'Míngxiào gùrán hǎo, dàn bù yídìng shìhé měi ge háizi.', vi:'Trường danh tiếng cố nhiên tốt, nhưng chưa chắc hợp với mọi đứa trẻ.' } },
        { form:'既 A，也/又 B', vi:'“vừa A vừa B” (hai mặt cùng có, văn viết)',
          note:'既…也 nối hai vế cùng chủ ngữ; 既…又 nhấn hai tính chất. Vd 这个办法既省钱又省时间.',
          ex:{ zh:'家长既要关心成绩，也要关心孩子的兴趣。', pinyin:'Jiāzhǎng jì yào guānxīn chéngjì, yě yào guānxīn háizi de xìngqù.', vi:'Phụ huynh vừa phải quan tâm điểm số, vừa phải quan tâm sở thích của con.' } }
      ],
      vocab:[
        { zh:'固然', pinyin:'gùrán', hv:'cố nhiên', vi:'cố nhiên', pos:'liên từ' },
        { zh:'既', pinyin:'jì', hv:'ký', vi:'vừa … (vừa)', pos:'liên từ' },
        { zh:'名校', pinyin:'míngxiào', hv:'danh hiệu', vi:'trường danh tiếng', pos:'danh từ' },
        { zh:'家长', pinyin:'jiāzhǎng', hv:'gia trưởng', vi:'phụ huynh', pos:'danh từ' },
        { zh:'补习班', pinyin:'bǔxíbān', hv:'bổ tập ban', vi:'lớp học thêm', pos:'danh từ' },
        { zh:'竞争', pinyin:'jìngzhēng', hv:'cạnh tranh', vi:'cạnh tranh', pos:'động từ; danh từ' },
        { zh:'压力', pinyin:'yālì', hv:'áp lực', vi:'áp lực', pos:'danh từ' },
        { zh:'兴趣', pinyin:'xìngqù', hv:'hứng thú', vi:'sở thích, hứng thú', pos:'danh từ' },
        { zh:'全面', pinyin:'quánmiàn', hv:'toàn diện', vi:'toàn diện', pos:'tính từ' },
        { zh:'素质', pinyin:'sùzhì', hv:'tố chất', vi:'tố chất', pos:'danh từ' },
        { zh:'培养', pinyin:'péiyǎng', hv:'bồi dưỡng', vi:'bồi dưỡng, nuôi dạy', pos:'động từ' },
        { zh:'独立', pinyin:'dúlì', hv:'độc lập', vi:'độc lập', pos:'tính từ; động từ' },
        { zh:'分数', pinyin:'fēnshù', hv:'phân số', vi:'điểm số', pos:'danh từ' },
        { zh:'童年', pinyin:'tóngnián', hv:'đồng niên', vi:'tuổi thơ', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我给女儿报了三个补习班，周末都排满了。', pinyin:'Wǒ gěi nǚ’ér bào le sān ge bǔxíbān, zhōumò dōu pái mǎn le.', vi:'Tôi đăng ký cho con gái ba lớp học thêm, cuối tuần kín lịch.' },
        { sp:'B', zh:'分数固然重要，但孩子也需要童年吧？', pinyin:'Fēnshù gùrán zhòngyào, dàn háizi yě xūyào tóngnián ba?', vi:'Điểm số cố nhiên quan trọng, nhưng trẻ cũng cần tuổi thơ chứ?' },
        { sp:'A', zh:'竞争这么激烈，不学就落后了。', pinyin:'Jìngzhēng zhème jīliè, bù xué jiù luòhòu le.', vi:'Cạnh tranh gay gắt thế, không học là tụt lại.' },
        { sp:'B', zh:'教育既要培养能力，也要培养独立的人格。全面的素质比一次考试更重要。', pinyin:'Jiàoyù jì yào péiyǎng nénglì, yě yào péiyǎng dúlì de réngé. Quánmiàn de sùzhì bǐ yí cì kǎoshì gèng zhòngyào.', vi:'Giáo dục vừa bồi dưỡng năng lực, vừa bồi dưỡng nhân cách độc lập. Tố chất toàn diện quan trọng hơn một kỳ thi.' }
      ]
    },

    {
      level:'hsk5', no:23, zh:'谦虚与自信', pinyin:'Qiānxū yǔ zìxìn', vi:'Khiêm tốn và tự tin',
      skill:'Giảm nhẹ & nhấn mạnh: 只不过…罢了; 才…呢',
      grammar:[
        { form:'只不过 / 不过 … 罢了 / 而已', vi:'“chẳng qua chỉ … mà thôi”',
          note:'Giảm nhẹ mức độ, thường dùng khi khiêm tốn. Vd 我只不过运气好罢了.',
          ex:{ zh:'我只不过比别人多练了几遍罢了。', pinyin:'Wǒ zhǐbúguò bǐ biéren duō liàn le jǐ biàn bàle.', vi:'Tôi chẳng qua luyện nhiều hơn người khác vài lượt mà thôi.' } },
        { form:'… 才 … 呢 (nhấn mạnh phản bác)', vi:'“… mới … chứ”',
          note:'Khẩu ngữ, phản bác ý trước đó. Vd 他才不会去呢 / 我才不怕呢.',
          ex:{ zh:'你才是真正的高手呢。', pinyin:'Nǐ cái shì zhēnzhèng de gāoshǒu ne.', vi:'Bạn mới là cao thủ thực sự chứ.' } }
      ],
      vocab:[
        { zh:'谦虚', pinyin:'qiānxū', hv:'khiêm hư', vi:'khiêm tốn', pos:'tính từ' },
        { zh:'自信', pinyin:'zìxìn', hv:'tự tín', vi:'tự tin', pos:'tính từ; danh từ' },
        { zh:'只不过', pinyin:'zhǐbúguò', hv:'chỉ bất quá', vi:'chẳng qua', pos:'phó từ' },
        { zh:'罢了', pinyin:'bàle', hv:'bãi liễu', vi:'mà thôi', pos:'trợ từ' },
        { zh:'高手', pinyin:'gāoshǒu', hv:'cao thủ', vi:'cao thủ', pos:'danh từ' },
        { zh:'骄傲', pinyin:'jiāo’ào', hv:'kiêu ngạo', vi:'kiêu ngạo; tự hào', pos:'tính từ' },
        { zh:'自卑', pinyin:'zìbēi', hv:'tự ti', vi:'tự ti', pos:'tính từ' },
        { zh:'夸', pinyin:'kuā', hv:'khoa', vi:'khen', pos:'động từ' },
        { zh:'承认', pinyin:'chéngrèn', hv:'thừa nhận', vi:'thừa nhận', pos:'động từ' },
        { zh:'优点', pinyin:'yōudiǎn', hv:'ưu điểm', vi:'ưu điểm', pos:'danh từ' },
        { zh:'缺点', pinyin:'quēdiǎn', hv:'khuyết điểm', vi:'khuyết điểm', pos:'danh từ' },
        { zh:'虚心', pinyin:'xūxīn', hv:'hư tâm', vi:'khiêm tốn học hỏi', pos:'tính từ' },
        { zh:'真正', pinyin:'zhēnzhèng', hv:'chân chính', vi:'thực sự', pos:'tính từ' },
        { zh:'评价', pinyin:'píngjià', hv:'bình giá', vi:'đánh giá', pos:'động từ; danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你演讲得真好，全场都在鼓掌。', pinyin:'Nǐ yǎnjiǎng de zhēn hǎo, quánchǎng dōu zài gǔzhǎng.', vi:'Bạn thuyết trình hay thật, cả khán phòng vỗ tay.' },
        { sp:'B', zh:'哪里，我只不过准备得比较早罢了。', pinyin:'Nǎli, wǒ zhǐbúguò zhǔnbèi de bǐjiào zǎo bàle.', vi:'Đâu có, mình chẳng qua chuẩn bị sớm hơn thôi.' },
        { sp:'A', zh:'别太谦虚，承认自己的优点不是骄傲。', pinyin:'Bié tài qiānxū, chéngrèn zìjǐ de yōudiǎn bú shì jiāo’ào.', vi:'Đừng khiêm tốn quá, thừa nhận ưu điểm của mình không phải kiêu ngạo.' },
        { sp:'B', zh:'谢谢。其实你的提问才精彩呢。虚心和自信并不矛盾。', pinyin:'Xièxie. Qíshí nǐ de tíwèn cái jīngcǎi ne. Xūxīn hé zìxìn bìng bù máodùn.', vi:'Cảm ơn. Thực ra câu hỏi của bạn mới đặc sắc chứ. Khiêm tốn và tự tin không hề mâu thuẫn.' }
      ]
    },

    {
      level:'hsk5', no:24, zh:'时间去哪儿了', pinyin:'Shíjiān qù nǎr le', vi:'Thời gian đi đâu mất',
      skill:'Bắt buộc & bất đắc dĩ: 非…不可; 不得已',
      grammar:[
        { form:'非 + V + 不可 / 不行', vi:'“nhất định phải …, không … không được”',
          note:'Nhấn mạnh tất yếu hoặc quyết tâm. Vd 这件事非你去不可 / 我非学会不可.',
          ex:{ zh:'今天的报告非今晚写完不可。', pinyin:'Jīntiān de bàogào fēi jīnwǎn xiě wán bùkě.', vi:'Báo cáo hôm nay nhất định phải viết xong tối nay.' } },
        { form:'不得已 (才) + V / 出于无奈', vi:'“bất đắc dĩ mới …”',
          note:'Vd 不得已才熬夜 / 迫不得已. Khác 不得不 ở chỗ nhấn sự miễn cưỡng.',
          ex:{ zh:'他不得已才推掉了朋友的聚会。', pinyin:'Tā bùdéyǐ cái tuī diào le péngyou de jùhuì.', vi:'Anh ấy bất đắc dĩ mới từ chối buổi tụ tập với bạn.' } }
      ],
      vocab:[
        { zh:'非…不可', pinyin:'fēi … bùkě', hv:'phi … bất khả', vi:'nhất định phải', pos:'cấu trúc' },
        { zh:'不得已', pinyin:'bùdéyǐ', hv:'bất đắc dĩ', vi:'bất đắc dĩ', pos:'tính từ' },
        { zh:'拖延', pinyin:'tuōyán', hv:'tha diên', vi:'trì hoãn', pos:'động từ' },
        { zh:'熬夜', pinyin:'áoyè', hv:'ngao dạ', vi:'thức khuya', pos:'động từ' },
        { zh:'优先', pinyin:'yōuxiān', hv:'ưu tiên', vi:'ưu tiên', pos:'động từ' },
        { zh:'清单', pinyin:'qīngdān', hv:'thanh đơn', vi:'danh sách', pos:'danh từ' },
        { zh:'紧急', pinyin:'jǐnjí', hv:'khẩn cấp', vi:'khẩn cấp', pos:'tính từ' },
        { zh:'分散', pinyin:'fēnsàn', hv:'phân tán', vi:'phân tán', pos:'động từ' },
        { zh:'注意力', pinyin:'zhùyìlì', hv:'chú ý lực', vi:'sự tập trung', pos:'danh từ' },
        { zh:'聚会', pinyin:'jùhuì', hv:'tụ hội', vi:'buổi tụ tập', pos:'danh từ' },
        { zh:'推掉', pinyin:'tuī diào', hv:'suy điệu', vi:'từ chối, gạt đi', pos:'động từ' },
        { zh:'效率', pinyin:'xiàolǜ', hv:'hiệu suất', vi:'hiệu suất', pos:'danh từ' },
        { zh:'安排', pinyin:'ānpái', hv:'an bài', vi:'sắp xếp', pos:'động từ' },
        { zh:'报告', pinyin:'bàogào', hv:'báo cáo', vi:'báo cáo', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你又熬夜了？黑眼圈这么重。', pinyin:'Nǐ yòu áoyè le? Hēiyǎnquān zhème zhòng.', vi:'Bạn lại thức khuya? Quầng mắt thâm thế.' },
        { sp:'B', zh:'报告非今天交不可，我不得已才熬到三点。', pinyin:'Bàogào fēi jīntiān jiāo bùkě, wǒ bùdéyǐ cái áo dào sān diǎn.', vi:'Báo cáo nhất định phải nộp hôm nay, mình bất đắc dĩ thức đến ba giờ.' },
        { sp:'A', zh:'是不是又拖延了？', pinyin:'Shì bu shì yòu tuōyán le?', vi:'Có phải lại trì hoãn không?' },
        { sp:'B', zh:'是。手机分散了我的注意力。以后我得列清单，紧急的事优先安排。', pinyin:'Shì. Shǒujī fēnsàn le wǒ de zhùyìlì. Yǐhòu wǒ děi liè qīngdān, jǐnjí de shì yōuxiān ānpái.', vi:'Ừ. Điện thoại làm mình mất tập trung. Sau này phải lập danh sách, việc gấp ưu tiên trước.' }
      ]
    },

    {
      level:'hsk5', no:25, zh:'真正的朋友', pinyin:'Zhēnzhèng de péngyou', vi:'Người bạn thực sự',
      skill:'Đối lập bất ngờ: 却/倒; 反倒',
      grammar:[
        { form:'…，却 …', vi:'“lại, nhưng lại” (phó từ đối lập, đứng sau chủ ngữ)',
          note:'却 không đứng đầu câu như 但是; có thể kết hợp: 虽然…，却…. Vd 他很聪明，却不努力.',
          ex:{ zh:'平时联系不多，关键时刻他却第一个出现。', pinyin:'Píngshí liánxì bù duō, guānjiàn shíkè tā què dì-yī ge chūxiàn.', vi:'Ngày thường ít liên lạc, lúc quan trọng anh ấy lại xuất hiện đầu tiên.' } },
        { form:'倒 / 反倒 + V', vi:'“ngược lại, trái lại …” (ngoài dự đoán)',
          note:'倒 nhẹ nhàng, hay dùng trong lời nhượng bộ (倒不是…); 反倒 ≈ 反而.',
          ex:{ zh:'我以为他会生气，他反倒笑了。', pinyin:'Wǒ yǐwéi tā huì shēngqì, tā fǎndào xiào le.', vi:'Tôi tưởng anh ấy sẽ giận, ngược lại anh ấy cười.' } }
      ],
      vocab:[
        { zh:'却', pinyin:'què', hv:'khước', vi:'lại, nhưng', pos:'phó từ' },
        { zh:'倒', pinyin:'dào', hv:'đảo', vi:'lại, ngược lại', pos:'phó từ' },
        { zh:'反倒', pinyin:'fǎndào', hv:'phản đảo', vi:'trái lại', pos:'phó từ' },
        { zh:'关键', pinyin:'guānjiàn', hv:'quan kiện', vi:'then chốt', pos:'danh từ; tính từ' },
        { zh:'时刻', pinyin:'shíkè', hv:'thời khắc', vi:'thời khắc', pos:'danh từ' },
        { zh:'以为', pinyin:'yǐwéi', hv:'dĩ vi', vi:'tưởng rằng', pos:'động từ' },
        { zh:'患难', pinyin:'huànnàn', hv:'hoạn nạn', vi:'hoạn nạn', pos:'danh từ' },
        { zh:'信任', pinyin:'xìnrèn', hv:'tín nhiệm', vi:'tin tưởng', pos:'động từ; danh từ' },
        { zh:'背叛', pinyin:'bèipàn', hv:'bội phản', vi:'phản bội', pos:'động từ' },
        { zh:'借口', pinyin:'jièkǒu', hv:'tá khẩu', vi:'cái cớ', pos:'danh từ' },
        { zh:'联系', pinyin:'liánxì', hv:'liên hệ', vi:'liên lạc', pos:'động từ' },
        { zh:'真诚', pinyin:'zhēnchéng', hv:'chân thành', vi:'chân thành', pos:'tính từ' },
        { zh:'距离', pinyin:'jùlí', hv:'cự ly', vi:'khoảng cách', pos:'danh từ' },
        { zh:'出现', pinyin:'chūxiàn', hv:'xuất hiện', vi:'xuất hiện', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我住院那几天，很多人只发了条信息。', pinyin:'Wǒ zhùyuàn nà jǐ tiān, hěn duō rén zhǐ fā le tiáo xìnxī.', vi:'Mấy ngày mình nằm viện, nhiều người chỉ nhắn một tin.' },
        { sp:'B', zh:'小林呢？你们平时联系不多吧。', pinyin:'Xiǎo Lín ne? Nǐmen píngshí liánxì bù duō ba.', vi:'Còn Tiểu Lâm? Bình thường hai bạn ít liên lạc nhỉ.' },
        { sp:'A', zh:'对，他却每天来送饭。我以为他会找借口，他反倒请了假。', pinyin:'Duì, tā què měitiān lái sòng fàn. Wǒ yǐwéi tā huì zhǎo jièkǒu, tā fǎndào qǐng le jià.', vi:'Ừ, cậu ấy lại ngày nào cũng mang cơm. Mình tưởng cậu ấy sẽ viện cớ, ngược lại còn xin nghỉ.' },
        { sp:'B', zh:'患难见真情。真正的朋友不在于距离，而在于真诚和信任。', pinyin:'Huànnàn jiàn zhēnqíng. Zhēnzhèng de péngyou bú zàiyú jùlí, ér zàiyú zhēnchéng hé xìnrèn.', vi:'Hoạn nạn thấy chân tình. Bạn thực sự không ở khoảng cách mà ở chân thành và tin tưởng.' }
      ]
    },

    {
      level:'hsk5', no:26, zh:'舌尖上的中国', pinyin:'Shéjiān shàng de Zhōngguó', vi:'Trung Quốc trên đầu lưỡi',
      skill:'Liệt kê & nối văn viết: 以及/及; 而 (nối/đối lập)',
      grammar:[
        { form:'A、B 以及 C', vi:'“A, B cùng với C” (liệt kê trang trọng)',
          note:'以及 đặt trước thành phần cuối, thường là thành phần ít quan trọng hơn hoặc thuộc loại khác. 及 chỉ nối danh từ.',
          ex:{ zh:'川菜、粤菜以及各地小吃都值得尝试。', pinyin:'Chuāncài, Yuècài yǐjí gèdì xiǎochī dōu zhíde chángshì.', vi:'Món Tứ Xuyên, Quảng Đông cùng với đồ ăn vặt các nơi đều đáng thử.' } },
        { form:'A，而 B', vi:'“A, còn/mà B” (đối lập hoặc bổ sung)',
          note:'Văn viết. Đối lập: 南方人爱吃米饭，而北方人爱吃面. Bổ sung: 不是…而是….',
          ex:{ zh:'南方菜偏甜，而北方菜偏咸。', pinyin:'Nánfāng cài piān tián, ér běifāng cài piān xián.', vi:'Món miền Nam thiên ngọt, còn món miền Bắc thiên mặn.' } }
      ],
      vocab:[
        { zh:'以及', pinyin:'yǐjí', hv:'dĩ cập', vi:'cùng với', pos:'liên từ' },
        { zh:'而', pinyin:'ér', hv:'nhi', vi:'mà, còn', pos:'liên từ' },
        { zh:'舌尖', pinyin:'shéjiān', hv:'thiệt tiêm', vi:'đầu lưỡi', pos:'danh từ' },
        { zh:'菜系', pinyin:'càixì', hv:'thái hệ', vi:'trường phái ẩm thực', pos:'danh từ' },
        { zh:'川菜', pinyin:'Chuāncài', hv:'Xuyên thái', vi:'món Tứ Xuyên', pos:'danh từ' },
        { zh:'粤菜', pinyin:'Yuècài', hv:'Việt thái', vi:'món Quảng Đông', pos:'danh từ' },
        { zh:'小吃', pinyin:'xiǎochī', hv:'tiểu cật', vi:'đồ ăn vặt, món nhỏ', pos:'danh từ' },
        { zh:'口味', pinyin:'kǒuwèi', hv:'khẩu vị', vi:'khẩu vị', pos:'danh từ' },
        { zh:'偏', pinyin:'piān', hv:'thiên', vi:'thiên về', pos:'phó từ' },
        { zh:'麻辣', pinyin:'málà', hv:'ma lạt', vi:'cay tê', pos:'tính từ' },
        { zh:'清淡', pinyin:'qīngdàn', hv:'thanh đạm', vi:'thanh đạm', pos:'tính từ' },
        { zh:'食材', pinyin:'shícái', hv:'thực tài', vi:'nguyên liệu', pos:'danh từ' },
        { zh:'讲究', pinyin:'jiǎngjiu', hv:'giảng cứu', vi:'cầu kỳ, chú trọng', pos:'động từ; tính từ' },
        { zh:'尝试', pinyin:'chángshì', hv:'thường thí', vi:'thử', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'中国菜为什么每个地方都不一样？', pinyin:'Zhōngguó cài wèishénme měi ge dìfang dōu bù yíyàng?', vi:'Sao món Trung Quốc mỗi nơi mỗi khác?' },
        { sp:'B', zh:'气候、食材以及历史都不同。川菜麻辣，而粤菜清淡。', pinyin:'Qìhòu, shícái yǐjí lìshǐ dōu bù tóng. Chuāncài málà, ér Yuècài qīngdàn.', vi:'Khí hậu, nguyên liệu cùng lịch sử đều khác. Món Tứ Xuyên cay tê, còn món Quảng Đông thanh đạm.' },
        { sp:'A', zh:'我的口味偏清淡，该从哪个菜系开始尝试？', pinyin:'Wǒ de kǒuwèi piān qīngdàn, gāi cóng nǎge càixì kāishǐ chángshì?', vi:'Khẩu vị mình thiên thanh đạm, nên thử từ trường phái nào?' },
        { sp:'B', zh:'粤菜很讲究食材的新鲜，早茶的小吃也特别丰富。', pinyin:'Yuècài hěn jiǎngjiu shícái de xīnxiān, zǎochá de xiǎochī yě tèbié fēngfù.', vi:'Món Quảng Đông chú trọng nguyên liệu tươi, món nhỏ trong trà sáng cũng rất phong phú.' }
      ]
    },

    {
      level:'hsk5', no:27, zh:'毕业之际', pinyin:'Bìyè zhī jì', vi:'Trước ngưỡng cửa tốt nghiệp',
      skill:'Diễn đạt thời điểm & ý nghĩa: 之际/之时; 意味着',
      grammar:[
        { form:'在 … 之际 / 之时', vi:'“vào lúc, nhân dịp …” (văn viết)',
          note:'Vd 在新年到来之际 / 临别之际. Trang trọng, hay dùng trong thư và diễn văn.',
          ex:{ zh:'在毕业之际，我想感谢所有帮助过我的人。', pinyin:'Zài bìyè zhī jì, wǒ xiǎng gǎnxiè suǒyǒu bāngzhù guo wǒ de rén.', vi:'Nhân dịp tốt nghiệp, tôi muốn cảm ơn tất cả những người đã giúp tôi.' } },
        { form:'A 意味着 B', vi:'“A có nghĩa là / đồng nghĩa với B”',
          note:'Nêu hàm ý sâu xa của sự việc. Vd 毕业意味着新的开始.',
          ex:{ zh:'离开校园并不意味着停止学习。', pinyin:'Líkāi xiàoyuán bìng bú yìwèizhe tíngzhǐ xuéxí.', vi:'Rời khuôn viên trường không có nghĩa là ngừng học.' } }
      ],
      vocab:[
        { zh:'之际', pinyin:'zhī jì', hv:'chi tế', vi:'vào lúc, nhân dịp', pos:'cụm cố định' },
        { zh:'意味着', pinyin:'yìwèizhe', hv:'ý vị trước', vi:'có nghĩa là', pos:'động từ' },
        { zh:'毕业', pinyin:'bìyè', hv:'tất nghiệp', vi:'tốt nghiệp', pos:'động từ' },
        { zh:'校园', pinyin:'xiàoyuán', hv:'hiệu viên', vi:'khuôn viên trường', pos:'danh từ' },
        { zh:'典礼', pinyin:'diǎnlǐ', hv:'điển lễ', vi:'buổi lễ', pos:'danh từ' },
        { zh:'告别', pinyin:'gàobié', hv:'cáo biệt', vi:'từ biệt', pos:'động từ' },
        { zh:'留恋', pinyin:'liúliàn', hv:'lưu luyến', vi:'lưu luyến', pos:'động từ' },
        { zh:'前程', pinyin:'qiánchéng', hv:'tiền trình', vi:'tương lai, tiền trình', pos:'danh từ' },
        { zh:'迷茫', pinyin:'mímáng', hv:'mê mang', vi:'mông lung', pos:'tính từ' },
        { zh:'深造', pinyin:'shēnzào', hv:'thâm tạo', vi:'học lên cao', pos:'động từ' },
        { zh:'就业', pinyin:'jiùyè', hv:'tựu nghiệp', vi:'tìm việc, có việc làm', pos:'động từ' },
        { zh:'创业', pinyin:'chuàngyè', hv:'sáng nghiệp', vi:'khởi nghiệp', pos:'động từ' },
        { zh:'祝福', pinyin:'zhùfú', hv:'chúc phúc', vi:'chúc phúc', pos:'động từ; danh từ' },
        { zh:'停止', pinyin:'tíngzhǐ', hv:'đình chỉ', vi:'dừng lại', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'毕业典礼结束了，我对校园有点儿留恋。', pinyin:'Bìyè diǎnlǐ jiéshù le, wǒ duì xiàoyuán yǒudiǎnr liúliàn.', vi:'Lễ tốt nghiệp xong rồi, mình hơi lưu luyến trường.' },
        { sp:'B', zh:'我也是。你打算深造还是就业？', pinyin:'Wǒ yě shì. Nǐ dǎsuàn shēnzào háishi jiùyè?', vi:'Mình cũng vậy. Bạn định học lên hay đi làm?' },
        { sp:'A', zh:'还有点儿迷茫。也许先就业，攒了经验再创业。', pinyin:'Hái yǒudiǎnr mímáng. Yěxǔ xiān jiùyè, zǎn le jīngyàn zài chuàngyè.', vi:'Vẫn hơi mông lung. Có lẽ đi làm trước, tích luỹ kinh nghiệm rồi khởi nghiệp.' },
        { sp:'B', zh:'在告别之际，送你一句话：毕业意味着新的开始，而不是结束。祝你前程似锦！', pinyin:'Zài gàobié zhī jì, sòng nǐ yí jù huà: bìyè yìwèizhe xīn de kāishǐ, ér bú shì jiéshù. Zhù nǐ qiánchéng sì jǐn!', vi:'Lúc chia tay, tặng bạn một câu: tốt nghiệp là khởi đầu mới chứ không phải kết thúc. Chúc bạn tiền đồ rực rỡ!' }
      ]
    },

    {
      level:'hsk5', no:28, zh:'广告与消费', pinyin:'Guǎnggào yǔ xiāofèi', vi:'Quảng cáo và tiêu dùng',
      skill:'Nêu đối tượng: 针对; 有关/关于 nâng cao',
      grammar:[
        { form:'针对 + đối tượng/vấn đề，…', vi:'“nhằm vào, đối với …”',
          note:'针对 nêu mục tiêu cụ thể của hành động/biện pháp. Vd 针对年轻人的广告 / 针对这个问题提出建议.',
          ex:{ zh:'这些广告是针对年轻消费者设计的。', pinyin:'Zhèxiē guǎnggào shì zhēnduì niánqīng xiāofèizhě shèjì de.', vi:'Những quảng cáo này được thiết kế nhằm vào người tiêu dùng trẻ.' } },
        { form:'有关 + N + 的 + N / 关于 + N，…', vi:'“có liên quan đến …” / “về …”',
          note:'有关 làm định ngữ (有关消费的规定) hoặc động từ (与…有关); 关于 chỉ đứng đầu câu làm trạng ngữ.',
          ex:{ zh:'有关虚假广告的投诉越来越多。', pinyin:'Yǒuguān xūjiǎ guǎnggào de tóusù yuèláiyuè duō.', vi:'Khiếu nại liên quan đến quảng cáo sai sự thật ngày càng nhiều.' } }
      ],
      vocab:[
        { zh:'广告', pinyin:'guǎnggào', hv:'quảng cáo', vi:'quảng cáo', pos:'danh từ' },
        { zh:'针对', pinyin:'zhēnduì', hv:'châm đối', vi:'nhằm vào', pos:'giới từ; động từ' },
        { zh:'有关', pinyin:'yǒuguān', hv:'hữu quan', vi:'có liên quan', pos:'động từ' },
        { zh:'消费者', pinyin:'xiāofèizhě', hv:'tiêu phí giả', vi:'người tiêu dùng', pos:'danh từ' },
        { zh:'虚假', pinyin:'xūjiǎ', hv:'hư giả', vi:'giả dối, sai sự thật', pos:'tính từ' },
        { zh:'夸大', pinyin:'kuādà', hv:'khoa đại', vi:'phóng đại', pos:'động từ' },
        { zh:'诱惑', pinyin:'yòuhuò', hv:'dụ hoặc', vi:'cám dỗ', pos:'động từ; danh từ' },
        { zh:'品牌', pinyin:'pǐnpái', hv:'phẩm bài', vi:'thương hiệu', pos:'danh từ' },
        { zh:'明星', pinyin:'míngxīng', hv:'minh tinh', vi:'ngôi sao', pos:'danh từ' },
        { zh:'代言', pinyin:'dàiyán', hv:'đại ngôn', vi:'đại diện quảng cáo', pos:'động từ' },
        { zh:'理性', pinyin:'lǐxìng', hv:'lý tính', vi:'lý trí', pos:'tính từ; danh từ' },
        { zh:'冲动', pinyin:'chōngdòng', hv:'xung động', vi:'bốc đồng', pos:'tính từ' },
        { zh:'监管', pinyin:'jiānguǎn', hv:'giám quản', vi:'giám sát quản lý', pos:'động từ' },
        { zh:'识别', pinyin:'shíbié', hv:'thức biệt', vi:'nhận biết', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'这个牌子的护肤品，明星代言，广告说一周见效。', pinyin:'Zhège páizi de hùfūpǐn, míngxīng dàiyán, guǎnggào shuō yì zhōu jiànxiào.', vi:'Mỹ phẩm hãng này, ngôi sao đại diện, quảng cáo bảo một tuần thấy hiệu quả.' },
        { sp:'B', zh:'广告往往夸大效果，有的甚至是虚假的。', pinyin:'Guǎnggào wǎngwǎng kuādà xiàoguǒ, yǒu de shènzhì shì xūjiǎ de.', vi:'Quảng cáo thường phóng đại hiệu quả, có cái thậm chí sai sự thật.' },
        { sp:'A', zh:'那怎么识别呢？', pinyin:'Nà zěnme shíbié ne?', vi:'Vậy nhận biết thế nào?' },
        { sp:'B', zh:'看有关部门的检测报告，别被“限时优惠”诱惑。针对冲动消费，最好的办法就是理性等三天。', pinyin:'Kàn yǒuguān bùmén de jiǎncè bàogào, bié bèi “xiànshí yōuhuì” yòuhuò. Zhēnduì chōngdòng xiāofèi, zuì hǎo de bànfǎ jiùshì lǐxìng děng sān tiān.', vi:'Xem báo cáo kiểm nghiệm của cơ quan liên quan, đừng bị “ưu đãi giới hạn” cám dỗ. Với mua sắm bốc đồng, cách tốt nhất là lý trí đợi ba ngày.' }
      ]
    },

    {
      level:'hsk5', no:29, zh:'志愿者的一天', pinyin:'Zhìyuànzhě de yì tiān', vi:'Một ngày của tình nguyện viên',
      skill:'Kết luận & quy nạp: 总而言之/可见; 归根到底',
      grammar:[
        { form:'总而言之 / 可见，…', vi:'“tóm lại …” / “có thể thấy …”',
          note:'总而言之 tổng kết sau nhiều ý; 可见 rút ra kết luận từ bằng chứng vừa nêu (由此可见).',
          ex:{ zh:'报名的人比去年多了一倍，可见大家的热情很高。', pinyin:'Bàomíng de rén bǐ qùnián duō le yí bèi, kějiàn dàjiā de rèqíng hěn gāo.', vi:'Người đăng ký gấp đôi năm ngoái, có thể thấy mọi người rất nhiệt tình.' } },
        { form:'归根到底 / 说到底，…', vi:'“suy cho cùng …”',
          note:'Chỉ ra bản chất sâu xa nhất. Vd 归根到底，还是教育问题.',
          ex:{ zh:'做志愿者归根到底是为了让社会更温暖。', pinyin:'Zuò zhìyuànzhě guīgēn dàodǐ shì wèile ràng shèhuì gèng wēnnuǎn.', vi:'Làm tình nguyện suy cho cùng là để xã hội ấm áp hơn.' } }
      ],
      vocab:[
        { zh:'志愿者', pinyin:'zhìyuànzhě', hv:'chí nguyện giả', vi:'tình nguyện viên', pos:'danh từ' },
        { zh:'总而言之', pinyin:'zǒng ér yán zhī', hv:'tổng nhi ngôn chi', vi:'tóm lại', pos:'thành ngữ' },
        { zh:'可见', pinyin:'kějiàn', hv:'khả kiến', vi:'có thể thấy', pos:'liên từ' },
        { zh:'归根到底', pinyin:'guīgēn dàodǐ', hv:'quy căn đáo để', vi:'suy cho cùng', pos:'thành ngữ' },
        { zh:'社区', pinyin:'shèqū', hv:'xã khu', vi:'khu dân cư', pos:'danh từ' },
        { zh:'老人', pinyin:'lǎorén', hv:'lão nhân', vi:'người già', pos:'danh từ' },
        { zh:'孤独', pinyin:'gūdú', hv:'cô độc', vi:'cô đơn', pos:'tính từ' },
        { zh:'奉献', pinyin:'fèngxiàn', hv:'phụng hiến', vi:'cống hiến', pos:'động từ' },
        { zh:'回报', pinyin:'huíbào', hv:'hồi báo', vi:'đền đáp', pos:'động từ; danh từ' },
        { zh:'倍', pinyin:'bèi', hv:'bội', vi:'lần, gấp', pos:'lượng từ' },
        { zh:'组织', pinyin:'zǔzhī', hv:'tổ chức', vi:'tổ chức', pos:'động từ; danh từ' },
        { zh:'活动', pinyin:'huódòng', hv:'hoạt động', vi:'hoạt động', pos:'danh từ' },
        { zh:'温暖', pinyin:'wēnnuǎn', hv:'ôn noãn', vi:'ấm áp', pos:'tính từ' },
        { zh:'意义', pinyin:'yìyì', hv:'ý nghĩa', vi:'ý nghĩa', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'周末你去社区做什么了？', pinyin:'Zhōumò nǐ qù shèqū zuò shénme le?', vi:'Cuối tuần bạn đến khu dân cư làm gì?' },
        { sp:'B', zh:'陪独居老人聊天。有的老人一个星期都没人说话，特别孤独。', pinyin:'Péi dújū lǎorén liáotiān. Yǒu de lǎorén yí ge xīngqī dōu méi rén shuōhuà, tèbié gūdú.', vi:'Trò chuyện với cụ già sống một mình. Có cụ cả tuần không ai nói chuyện, rất cô đơn.' },
        { sp:'A', zh:'这次报名的志愿者比上次多了一倍，可见大家很关心。', pinyin:'Zhè cì bàomíng de zhìyuànzhě bǐ shàng cì duō le yí bèi, kějiàn dàjiā hěn guānxīn.', vi:'Lần này tình nguyện viên đăng ký gấp đôi lần trước, có thể thấy mọi người rất quan tâm.' },
        { sp:'B', zh:'总而言之，奉献不求回报。归根到底，被需要本身就是一种幸福。', pinyin:'Zǒng ér yán zhī, fèngxiàn bù qiú huíbào. Guīgēn dàodǐ, bèi xūyào běnshēn jiùshì yì zhǒng xìngfú.', vi:'Tóm lại, cống hiến không cầu đền đáp. Suy cho cùng, được cần đến đã là một hạnh phúc.' }
      ]
    },

    {
      level:'hsk5', no:30, zh:'梦想与现实', pinyin:'Mèngxiǎng yǔ xiànshí', vi:'Ước mơ và hiện thực',
      skill:'Giả định & góc nhìn: 假如/倘若; 从…来看',
      grammar:[
        { form:'假如 / 倘若 A，(就) B', vi:'“giả sử A thì B”',
          note:'假如 ≈ 如果 nhưng thiên về giả định tưởng tượng; 倘若 văn viết. Vd 假如我是你，我会再试一次.',
          ex:{ zh:'假如有一年自由的时间，你会做什么？', pinyin:'Jiǎrú yǒu yì nián zìyóu de shíjiān, nǐ huì zuò shénme?', vi:'Giả sử có một năm tự do, bạn sẽ làm gì?' } },
        { form:'从 + góc độ + 来看/来说', vi:'“xét từ góc độ …”',
          note:'Vd 从长远来看 / 从经济角度来说. Nêu tiêu chí đánh giá trước khi kết luận.',
          ex:{ zh:'从长远来看，坚持梦想是值得的。', pinyin:'Cóng chángyuǎn lái kàn, jiānchí mèngxiǎng shì zhíde de.', vi:'Xét về lâu dài, kiên trì ước mơ là đáng.' } }
      ],
      vocab:[
        { zh:'梦想', pinyin:'mèngxiǎng', hv:'mộng tưởng', vi:'ước mơ', pos:'danh từ' },
        { zh:'假如', pinyin:'jiǎrú', hv:'giả như', vi:'giả sử', pos:'liên từ' },
        { zh:'倘若', pinyin:'tǎngruò', hv:'thảng nhược', vi:'nếu như (văn viết)', pos:'liên từ' },
        { zh:'长远', pinyin:'chángyuǎn', hv:'trường viễn', vi:'lâu dài', pos:'tính từ' },
        { zh:'角度', pinyin:'jiǎodù', hv:'giác độ', vi:'góc độ', pos:'danh từ' },
        { zh:'现实', pinyin:'xiànshí', hv:'hiện thực', vi:'hiện thực', pos:'danh từ; tính từ' },
        { zh:'妥协', pinyin:'tuǒxié', hv:'thoả hiệp', vi:'thoả hiệp', pos:'động từ' },
        { zh:'差距', pinyin:'chājù', hv:'sai cự', vi:'khoảng cách, chênh lệch', pos:'danh từ' },
        { zh:'兼顾', pinyin:'jiāngù', hv:'kiêm cố', vi:'cân đối cả hai', pos:'động từ' },
        { zh:'自由', pinyin:'zìyóu', hv:'tự do', vi:'tự do', pos:'danh từ; tính từ' },
        { zh:'热爱', pinyin:'rè’ài', hv:'nhiệt ái', vi:'yêu thích say mê', pos:'động từ' },
        { zh:'摄影', pinyin:'shèyǐng', hv:'nhiếp ảnh', vi:'nhiếp ảnh', pos:'động từ; danh từ' },
        { zh:'副业', pinyin:'fùyè', hv:'phó nghiệp', vi:'nghề tay trái', pos:'danh từ' },
        { zh:'勇气', pinyin:'yǒngqì', hv:'dũng khí', vi:'dũng khí', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我热爱摄影，可现实是我得先交房租。', pinyin:'Wǒ rè’ài shèyǐng, kě xiànshí shì wǒ děi xiān jiāo fángzū.', vi:'Mình mê nhiếp ảnh, nhưng thực tế là phải trả tiền nhà trước.' },
        { sp:'B', zh:'假如不用担心钱，你会全职做摄影吗？', pinyin:'Jiǎrú búyòng dānxīn qián, nǐ huì quánzhí zuò shèyǐng ma?', vi:'Giả sử không lo tiền, bạn có làm nhiếp ảnh toàn thời gian không?' },
        { sp:'A', zh:'当然。可梦想和现实的差距太大了。', pinyin:'Dāngrán. Kě mèngxiǎng hé xiànshí de chājù tài dà le.', vi:'Đương nhiên. Nhưng khoảng cách ước mơ và hiện thực lớn quá.' },
        { sp:'B', zh:'从长远来看，可以先把摄影当副业，兼顾两边。这不是妥协，而是需要勇气的选择。', pinyin:'Cóng chángyuǎn lái kàn, kěyǐ xiān bǎ shèyǐng dàng fùyè, jiāngù liǎng biān. Zhè bú shì tuǒxié, ér shì xūyào yǒngqì de xuǎnzé.', vi:'Xét lâu dài, có thể làm nhiếp ảnh nghề tay trái trước, cân đối cả hai. Đó không phải thoả hiệp mà là lựa chọn cần dũng khí.' }
      ]
    },

    {
      level:'hsk5', no:31, zh:'银发时代', pinyin:'Yínfà shídài', vi:'Thời đại tóc bạc',
      skill:'Thói quen & mốc thời gian: 一向 vs 一直; 从此',
      grammar:[
        { form:'一向 + V (thói quen lâu dài) / 一直 + V (liên tục)', vi:'“xưa nay vẫn …” / “luôn, suốt …”',
          note:'一向 chỉ tính cách/thói quen tồn tại lâu (他一向节俭); 一直 chỉ hành động/trạng thái không gián đoạn trong một khoảng (他一直在等).',
          ex:{ zh:'奶奶一向很独立，退休后一直在学画画。', pinyin:'Nǎinai yíxiàng hěn dúlì, tuìxiū hòu yìzhí zài xué huàhuà.', vi:'Bà xưa nay rất độc lập, nghỉ hưu xong vẫn luôn học vẽ.' } },
        { form:'从此 (以后)，…', vi:'“từ đó về sau …”',
          note:'Mốc là sự kiện vừa nêu. Vd 他搬到了海边，从此每天散步.',
          ex:{ zh:'爷爷学会了视频通话，从此每天都和孙子聊天。', pinyin:'Yéye xuéhuì le shìpín tōnghuà, cóngcǐ měitiān dōu hé sūnzi liáotiān.', vi:'Ông học được gọi video, từ đó ngày nào cũng trò chuyện với cháu.' } }
      ],
      vocab:[
        { zh:'一向', pinyin:'yíxiàng', hv:'nhất hướng', vi:'xưa nay vẫn', pos:'phó từ' },
        { zh:'从此', pinyin:'cóngcǐ', hv:'tòng thử', vi:'từ đó', pos:'phó từ' },
        { zh:'老龄化', pinyin:'lǎolínghuà', hv:'lão linh hoá', vi:'già hoá dân số', pos:'danh từ' },
        { zh:'退休', pinyin:'tuìxiū', hv:'thoái hưu', vi:'nghỉ hưu', pos:'động từ' },
        { zh:'养老', pinyin:'yǎnglǎo', hv:'dưỡng lão', vi:'dưỡng già', pos:'động từ' },
        { zh:'孝顺', pinyin:'xiàoshùn', hv:'hiếu thuận', vi:'hiếu thảo', pos:'tính từ; động từ' },
        { zh:'陪伴', pinyin:'péibàn', hv:'bồi bạn', vi:'ở bên', pos:'động từ' },
        { zh:'独立', pinyin:'dúlì', hv:'độc lập', vi:'độc lập', pos:'tính từ' },
        { zh:'视频', pinyin:'shìpín', hv:'thị tần', vi:'video', pos:'danh từ' },
        { zh:'通话', pinyin:'tōnghuà', hv:'thông thoại', vi:'gọi điện', pos:'động từ' },
        { zh:'孙子', pinyin:'sūnzi', hv:'tôn tử', vi:'cháu trai (nội)', pos:'danh từ' },
        { zh:'晚年', pinyin:'wǎnnián', hv:'vãn niên', vi:'tuổi già', pos:'danh từ' },
        { zh:'节俭', pinyin:'jiéjiǎn', hv:'tiết kiệm', vi:'tiết kiệm, giản dị', pos:'tính từ' },
        { zh:'社会', pinyin:'shèhuì', hv:'xã hội', vi:'xã hội', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'你奶奶退休以后过得怎么样？', pinyin:'Nǐ nǎinai tuìxiū yǐhòu guò de zěnmeyàng?', vi:'Bà bạn sau khi nghỉ hưu sống thế nào?' },
        { sp:'B', zh:'她一向独立，报了老年大学，一直在学画画。', pinyin:'Tā yíxiàng dúlì, bào le lǎonián dàxué, yìzhí zài xué huàhuà.', vi:'Bà xưa nay độc lập, đăng ký đại học người cao tuổi, vẫn luôn học vẽ.' },
        { sp:'A', zh:'真好。很多老人最怕孤独。', pinyin:'Zhēn hǎo. Hěn duō lǎorén zuì pà gūdú.', vi:'Tốt quá. Nhiều người già sợ nhất cô đơn.' },
        { sp:'B', zh:'所以我教她视频通话，从此她每天都跟孙子聊天。社会老龄化了，陪伴比钱更重要。', pinyin:'Suǒyǐ wǒ jiāo tā shìpín tōnghuà, cóngcǐ tā měitiān dōu gēn sūnzi liáotiān. Shèhuì lǎolínghuà le, péibàn bǐ qián gèng zhòngyào.', vi:'Nên mình dạy bà gọi video, từ đó ngày nào bà cũng nói chuyện với cháu. Xã hội già hoá rồi, ở bên quan trọng hơn tiền.' }
      ]
    },

    {
      level:'hsk5', no:32, zh:'气候在变', pinyin:'Qìhòu zài biàn', vi:'Khí hậu đang thay đổi',
      skill:'Mô tả xu hướng: 眼看; 一 + lượng từ + 比 + 一 + lượng từ',
      grammar:[
        { form:'眼看 (着) + mệnh đề', vi:'“trông thấy rõ …, sắp …”',
          note:'Nghĩa 1: chứng kiến diễn biến (眼看着河水一天天减少). Nghĩa 2: sắp xảy ra (眼看就要下雨了).',
          ex:{ zh:'眼看着夏天一年比一年热。', pinyin:'Yǎnkànzhe xiàtiān yì nián bǐ yì nián rè.', vi:'Nhìn thấy rõ mùa hè năm sau nóng hơn năm trước.' } },
        { form:'一 + LT + 比 + 一 + LT + adj', vi:'“… này hơn … kia, ngày càng …”',
          note:'一天比一天冷, 一次比一次好. Diễn tả xu hướng tăng dần.',
          ex:{ zh:'极端天气一次比一次严重。', pinyin:'Jíduān tiānqì yí cì bǐ yí cì yánzhòng.', vi:'Thời tiết cực đoan lần sau nghiêm trọng hơn lần trước.' } }
      ],
      vocab:[
        { zh:'眼看', pinyin:'yǎnkàn', hv:'nhãn khán', vi:'trông thấy rõ; sắp', pos:'phó từ; động từ' },
        { zh:'极端', pinyin:'jíduān', hv:'cực đoan', vi:'cực đoan', pos:'tính từ' },
        { zh:'全球', pinyin:'quánqiú', hv:'toàn cầu', vi:'toàn cầu', pos:'danh từ' },
        { zh:'变暖', pinyin:'biàn nuǎn', hv:'biến noãn', vi:'nóng lên', pos:'động từ' },
        { zh:'冰川', pinyin:'bīngchuān', hv:'băng xuyên', vi:'sông băng', pos:'danh từ' },
        { zh:'融化', pinyin:'rónghuà', hv:'dung hoá', vi:'tan chảy', pos:'động từ' },
        { zh:'海平面', pinyin:'hǎipíngmiàn', hv:'hải bình diện', vi:'mực nước biển', pos:'danh từ' },
        { zh:'洪水', pinyin:'hóngshuǐ', hv:'hồng thuỷ', vi:'lũ lụt', pos:'danh từ' },
        { zh:'干旱', pinyin:'gānhàn', hv:'can hạn', vi:'hạn hán', pos:'tính từ; danh từ' },
        { zh:'温室', pinyin:'wēnshì', hv:'ôn thất', vi:'nhà kính', pos:'danh từ' },
        { zh:'减排', pinyin:'jiǎnpái', hv:'giảm bài', vi:'giảm phát thải', pos:'động từ' },
        { zh:'紧迫', pinyin:'jǐnpò', hv:'khẩn bách', vi:'cấp bách', pos:'tính từ' },
        { zh:'行动', pinyin:'xíngdòng', hv:'hành động', vi:'hành động', pos:'danh từ; động từ' },
        { zh:'后代', pinyin:'hòudài', hv:'hậu đại', vi:'thế hệ sau', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'今年夏天热得离谱，这正常吗？', pinyin:'Jīnnián xiàtiān rè de lípǔ, zhè zhèngcháng ma?', vi:'Hè năm nay nóng vô lý, bình thường không?' },
        { sp:'B', zh:'不正常。眼看着夏天一年比一年热，极端天气也一次比一次严重。', pinyin:'Bú zhèngcháng. Yǎnkànzhe xiàtiān yì nián bǐ yì nián rè, jíduān tiānqì yě yí cì bǐ yí cì yánzhòng.', vi:'Không. Thấy rõ hè năm sau nóng hơn năm trước, thời tiết cực đoan cũng lần sau nặng hơn.' },
        { sp:'A', zh:'原因是全球变暖吧？', pinyin:'Yuányīn shì quánqiú biàn nuǎn ba?', vi:'Nguyên nhân là nóng lên toàn cầu nhỉ?' },
        { sp:'B', zh:'对，温室气体太多，冰川融化，海平面上升，洪水和干旱都更频繁。减排已经非常紧迫，为了后代必须行动。', pinyin:'Duì, wēnshì qìtǐ tài duō, bīngchuān rónghuà, hǎipíngmiàn shàngshēng, hóngshuǐ hé gānhàn dōu gèng pínfán. Jiǎnpái yǐjīng fēicháng jǐnpò, wèile hòudài bìxū xíngdòng.', vi:'Đúng, khí nhà kính quá nhiều, sông băng tan, mực nước biển dâng, lũ và hạn thường xuyên hơn. Giảm phát thải đã rất cấp bách, vì thế hệ sau phải hành động.' }
      ]
    },

    {
      level:'hsk5', no:33, zh:'远亲不如近邻', pinyin:'Yuǎnqīn bùrú jìnlín', vi:'Bà con xa không bằng láng giềng gần',
      skill:'Đối lập & trớ trêu: 明明…却; 偏偏',
      grammar:[
        { form:'明明 A，却/怎么 B', vi:'“rõ ràng A, vậy mà B”',
          note:'明明 khẳng định sự thật hiển nhiên; vế sau trái ngược, mang sắc thái trách hoặc ngạc nhiên.',
          ex:{ zh:'明明住对门，却一年也说不上一句话。', pinyin:'Míngmíng zhù duìmén, què yì nián yě shuō bu shàng yí jù huà.', vi:'Rõ ràng ở đối diện cửa, vậy mà cả năm không nói được một câu.' } },
        { form:'偏偏 + V', vi:'“trớ trêu thay, cứ …” (trái ý muốn)',
          note:'Vd 我急着出门，偏偏下起了大雨 / 别人都同意，偏偏他反对.',
          ex:{ zh:'我出差那天，家里偏偏停水了。', pinyin:'Wǒ chūchāi nà tiān, jiā li piānpiān tíng shuǐ le.', vi:'Đúng hôm tôi đi công tác, nhà lại cúp nước.' } }
      ],
      vocab:[
        { zh:'远亲不如近邻', pinyin:'yuǎnqīn bùrú jìnlín', hv:'viễn thân bất như cận lân', vi:'bà con xa không bằng láng giềng gần', pos:'tục ngữ' },
        { zh:'明明', pinyin:'míngmíng', hv:'minh minh', vi:'rõ ràng là', pos:'phó từ' },
        { zh:'偏偏', pinyin:'piānpiān', hv:'thiên thiên', vi:'trớ trêu, cứ', pos:'phó từ' },
        { zh:'对门', pinyin:'duìmén', hv:'đối môn', vi:'nhà đối diện', pos:'danh từ' },
        { zh:'打招呼', pinyin:'dǎ zhāohu', hv:'đả chiêu hô', vi:'chào hỏi', pos:'động từ' },
        { zh:'冷漠', pinyin:'lěngmò', hv:'lãnh mạc', vi:'lạnh nhạt', pos:'tính từ' },
        { zh:'互助', pinyin:'hùzhù', hv:'hỗ trợ', vi:'giúp đỡ nhau', pos:'động từ' },
        { zh:'停水', pinyin:'tíng shuǐ', hv:'đình thuỷ', vi:'cúp nước', pos:'động từ' },
        { zh:'钥匙', pinyin:'yàoshi', hv:'thược thi', vi:'chìa khoá', pos:'danh từ' },
        { zh:'反锁', pinyin:'fǎnsuǒ', hv:'phản toả', vi:'khoá trái', pos:'động từ' },
        { zh:'物业', pinyin:'wùyè', hv:'vật nghiệp', vi:'ban quản lý toà nhà', pos:'danh từ' },
        { zh:'热心', pinyin:'rèxīn', hv:'nhiệt tâm', vi:'nhiệt tình, tốt bụng', pos:'tính từ' },
        { zh:'串门', pinyin:'chuànmén', hv:'xuyến môn', vi:'sang chơi nhà', pos:'động từ' },
        { zh:'来往', pinyin:'láiwǎng', hv:'lai vãng', vi:'qua lại', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'昨天我把自己反锁在门外，偏偏手机也没电了。', pinyin:'Zuótiān wǒ bǎ zìjǐ fǎnsuǒ zài mén wài, piānpiān shǒujī yě méi diàn le.', vi:'Hôm qua mình tự khoá trái mình ngoài cửa, điện thoại lại còn hết pin.' },
        { sp:'B', zh:'那怎么办？物业下班了吧？', pinyin:'Nà zěnme bàn? Wùyè xiàbān le ba?', vi:'Vậy làm sao? Ban quản lý tan làm rồi chứ?' },
        { sp:'A', zh:'对门的阿姨很热心，让我在她家等，还给我做了饭。', pinyin:'Duìmén de āyí hěn rèxīn, ràng wǒ zài tā jiā děng, hái gěi wǒ zuò le fàn.', vi:'Cô nhà đối diện rất tốt bụng, cho mình đợi ở nhà cô, còn nấu cơm cho.' },
        { sp:'B', zh:'远亲不如近邻啊。明明住得这么近，我们平时却很少来往，以后该多打招呼。', pinyin:'Yuǎnqīn bùrú jìnlín a. Míngmíng zhù de zhème jìn, wǒmen píngshí què hěn shǎo láiwǎng, yǐhòu gāi duō dǎ zhāohu.', vi:'Bà con xa không bằng láng giềng gần. Rõ ràng ở gần thế mà bình thường ít qua lại, sau này nên chào hỏi nhiều hơn.' }
      ]
    },

    {
      level:'hsk5', no:34, zh:'放下手机', pinyin:'Fàngxià shǒujī', vi:'Đặt điện thoại xuống',
      skill:'Phê bình nhẹ & phản vấn: 未免; 岂不是',
      grammar:[
        { form:'未免 + 太/有点儿 + adj', vi:'“có phần, e là hơi … quá”',
          note:'Phê bình nhẹ nhàng, ngụ ý “không hợp lý”. Vd 这个要求未免太高了.',
          ex:{ zh:'一天看八个小时手机，未免太多了。', pinyin:'Yì tiān kàn bā ge xiǎoshí shǒujī, wèimiǎn tài duō le.', vi:'Một ngày xem điện thoại tám tiếng, e là hơi nhiều quá.' } },
        { form:'岂不是 … (吗)?', vi:'“chẳng phải là … sao?” (phản vấn văn viết)',
          note:'Khẳng định mạnh qua câu hỏi. Vd 这样做岂不是更好？',
          ex:{ zh:'把时间都给了手机，岂不是浪费了生活？', pinyin:'Bǎ shíjiān dōu gěi le shǒujī, qǐbúshì làngfèi le shēnghuó?', vi:'Dành hết thời gian cho điện thoại, chẳng phải lãng phí cuộc sống sao?' } }
      ],
      vocab:[
        { zh:'未免', pinyin:'wèimiǎn', hv:'vị miễn', vi:'e là hơi', pos:'phó từ' },
        { zh:'岂不是', pinyin:'qǐbúshì', hv:'khởi bất thị', vi:'chẳng phải là', pos:'phó từ' },
        { zh:'低头族', pinyin:'dītóuzú', hv:'đê đầu tộc', vi:'người cúi đầu (nghiện điện thoại)', pos:'danh từ' },
        { zh:'刷', pinyin:'shuā', hv:'loát', vi:'lướt (mạng)', pos:'động từ' },
        { zh:'短视频', pinyin:'duǎnshìpín', hv:'đoản thị tần', vi:'video ngắn', pos:'danh từ' },
        { zh:'沉迷', pinyin:'chénmí', hv:'trầm mê', vi:'nghiện, đắm chìm', pos:'động từ' },
        { zh:'屏幕', pinyin:'píngmù', hv:'bình mạc', vi:'màn hình', pos:'danh từ' },
        { zh:'视力', pinyin:'shìlì', hv:'thị lực', vi:'thị lực', pos:'danh từ' },
        { zh:'控制', pinyin:'kòngzhì', hv:'khống chế', vi:'kiểm soát', pos:'động từ' },
        { zh:'面对面', pinyin:'miànduìmiàn', hv:'diện đối diện', vi:'mặt đối mặt', pos:'phó từ' },
        { zh:'忽略', pinyin:'hūlüè', hv:'hốt lược', vi:'bỏ qua, lơ là', pos:'động từ' },
        { zh:'设定', pinyin:'shèdìng', hv:'thiết định', vi:'đặt, cài', pos:'động từ' },
        { zh:'限制', pinyin:'xiànzhì', hv:'hạn chế', vi:'hạn chế, giới hạn', pos:'động từ; danh từ' },
        { zh:'习惯', pinyin:'xíguàn', hv:'tập quán', vi:'thói quen', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'我一有空就刷短视频，昨天刷到凌晨两点。', pinyin:'Wǒ yì yǒu kòng jiù shuā duǎnshìpín, zuótiān shuā dào língchén liǎng diǎn.', vi:'Mình cứ rảnh là lướt video ngắn, hôm qua lướt đến hai giờ sáng.' },
        { sp:'B', zh:'这未免太沉迷了吧，视力和睡眠都会受影响。', pinyin:'Zhè wèimiǎn tài chénmí le ba, shìlì hé shuìmián dōu huì shòu yǐngxiǎng.', vi:'Thế e là nghiện quá rồi, thị lực và giấc ngủ đều bị ảnh hưởng.' },
        { sp:'A', zh:'我也想控制，可是停不下来。', pinyin:'Wǒ yě xiǎng kòngzhì, kěshì tíng bu xiàlái.', vi:'Mình cũng muốn kiểm soát nhưng không dừng được.' },
        { sp:'B', zh:'设定使用限制，吃饭时把手机放远点儿。把时间都给了屏幕，岂不是忽略了身边的人？', pinyin:'Shèdìng shǐyòng xiànzhì, chīfàn shí bǎ shǒujī fàng yuǎn diǎnr. Bǎ shíjiān dōu gěi le píngmù, qǐbúshì hūlüè le shēnbiān de rén?', vi:'Đặt giới hạn sử dụng, lúc ăn để điện thoại xa ra. Dành hết thời gian cho màn hình, chẳng phải bỏ quên người bên cạnh sao?' }
      ]
    },

    {
      level:'hsk5', no:35, zh:'艺术就在身边', pinyin:'Yìshù jiù zài shēnbiān', vi:'Nghệ thuật ngay bên ta',
      skill:'Chuyển chủ đề & giới hạn: 至于; 谈到/说到',
      grammar:[
        { form:'至于 + chủ đề mới，…', vi:'“còn về …, còn như …”',
          note:'Chuyển sang khía cạnh khác của cùng chủ đề. Vd 我负责翻译，至于设计，由他来做. Khác nghĩa 不至于 (chưa đến mức).',
          ex:{ zh:'我喜欢国画，至于书法，我还在入门。', pinyin:'Wǒ xǐhuan guóhuà, zhìyú shūfǎ, wǒ hái zài rùmén.', vi:'Tôi thích quốc hoạ, còn về thư pháp thì vẫn đang nhập môn.' } },
        { form:'谈到 / 说到 / 提到 + N，…', vi:'“nói đến …, nhắc đến …”',
          note:'Mở đầu ý bàn về chủ đề được gợi. Vd 说到音乐，他就停不下来.',
          ex:{ zh:'谈到艺术，很多人觉得离生活很远。', pinyin:'Tándào yìshù, hěn duō rén juéde lí shēnghuó hěn yuǎn.', vi:'Nói đến nghệ thuật, nhiều người thấy xa cuộc sống.' } }
      ],
      vocab:[
        { zh:'艺术', pinyin:'yìshù', hv:'nghệ thuật', vi:'nghệ thuật', pos:'danh từ' },
        { zh:'至于', pinyin:'zhìyú', hv:'chí vu', vi:'còn về', pos:'giới từ' },
        { zh:'谈到', pinyin:'tándào', hv:'đàm đáo', vi:'nói đến', pos:'động từ' },
        { zh:'国画', pinyin:'guóhuà', hv:'quốc hoạ', vi:'tranh thuỷ mặc Trung Quốc', pos:'danh từ' },
        { zh:'书法', pinyin:'shūfǎ', hv:'thư pháp', vi:'thư pháp', pos:'danh từ' },
        { zh:'入门', pinyin:'rùmén', hv:'nhập môn', vi:'nhập môn', pos:'động từ' },
        { zh:'展览', pinyin:'zhǎnlǎn', hv:'triển lãm', vi:'triển lãm', pos:'danh từ; động từ' },
        { zh:'欣赏', pinyin:'xīnshǎng', hv:'hân thưởng', vi:'thưởng thức', pos:'động từ' },
        { zh:'审美', pinyin:'shěnměi', hv:'thẩm mỹ', vi:'thẩm mỹ', pos:'danh từ' },
        { zh:'灵感', pinyin:'línggǎn', hv:'linh cảm', vi:'cảm hứng', pos:'danh từ' },
        { zh:'创作', pinyin:'chuàngzuò', hv:'sáng tác', vi:'sáng tác', pos:'động từ' },
        { zh:'门槛', pinyin:'ménkǎn', hv:'môn khảm', vi:'ngưỡng cửa, rào cản', pos:'danh từ' },
        { zh:'博物馆', pinyin:'bówùguǎn', hv:'bác vật quán', vi:'bảo tàng', pos:'danh từ' },
        { zh:'情感', pinyin:'qínggǎn', hv:'tình cảm', vi:'cảm xúc, tình cảm', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', zh:'谈到艺术，我总觉得门槛太高，看不懂。', pinyin:'Tándào yìshù, wǒ zǒng juéde ménkǎn tài gāo, kàn bu dǒng.', vi:'Nói đến nghệ thuật, mình luôn thấy ngưỡng quá cao, không hiểu.' },
        { sp:'B', zh:'欣赏不需要“懂”，先感受情感就行。周末博物馆有国画展览，一起去？', pinyin:'Xīnshǎng bù xūyào “dǒng”, xiān gǎnshòu qínggǎn jiù xíng. Zhōumò bówùguǎn yǒu guóhuà zhǎnlǎn, yìqǐ qù?', vi:'Thưởng thức không cần “hiểu”, cảm nhận cảm xúc trước là được. Cuối tuần bảo tàng có triển lãm quốc hoạ, đi cùng không?' },
        { sp:'A', zh:'好啊。你自己也创作吗？', pinyin:'Hǎo a. Nǐ zìjǐ yě chuàngzuò ma?', vi:'Được. Bạn tự sáng tác không?' },
        { sp:'B', zh:'我练书法，至于国画，只是欣赏。灵感其实来自生活，艺术就在身边。', pinyin:'Wǒ liàn shūfǎ, zhìyú guóhuà, zhǐshì xīnshǎng. Línggǎn qíshí láizì shēnghuó, yìshù jiù zài shēnbiān.', vi:'Mình luyện thư pháp, còn quốc hoạ chỉ thưởng thức. Cảm hứng thực ra đến từ cuộc sống, nghệ thuật ngay bên ta.' }
      ]
    },

    {
      level:'hsk5', no:36, zh:'我的汉语之路', pinyin:'Wǒ de Hànyǔ zhī lù', vi:'Con đường học tiếng Trung của tôi',
      skill:'Tổng ôn HSK5 & kỹ năng viết đoạn 80 chữ',
      grammar:[
        { form:'Bố cục đoạn viết HSK5 (80 chữ): mở – thân – kết', vi:'Mở: nêu chủ đề (说到…/随着…); Thân: 首先…其次…; Kết: 总之/可见/归根到底',
          note:'Dùng liên từ đã học để nối: 尽管…仍然 · 一旦…就 · 与其…不如 · 哪怕…也 · 从而 · 以免 · 何况 · 却. Tránh lặp 我觉得; thay bằng 在我看来 / 就我而言.',
          ex:{ zh:'说到学汉语，尽管过程辛苦，我仍然坚持了下来。首先，我每天记十个生词；其次，哪怕说错也敢开口。总之，一旦坚持，就会有收获。', pinyin:'Shuōdào xué Hànyǔ, jǐnguǎn guòchéng xīnkǔ, wǒ réngrán jiānchí le xiàlái. Shǒuxiān, wǒ měitiān jì shí ge shēngcí; qícì, nǎpà shuō cuò yě gǎn kāikǒu. Zǒngzhī, yídàn jiānchí, jiù huì yǒu shōuhuò.', vi:'Nói đến học tiếng Trung, dù quá trình vất vả, tôi vẫn kiên trì. Trước hết, mỗi ngày tôi nhớ mười từ mới; sau nữa, dù nói sai cũng dám mở miệng. Tóm lại, một khi kiên trì sẽ có thành quả.' } },
        { form:'Tổng ôn 36 bài: cặp dễ nhầm', vi:'与其…不如 (chọn) ≠ 与其说…不如说 (mô tả) · 未必 ≈ 不见得 · 居然 (bất ngờ) ≠ 果然 (đúng dự đoán) · 至于 (còn về) ≠ 不至于 (chưa đến mức) · 一向 (thói quen) ≠ 一直 (liên tục) · 反而 ≈ 反倒 · 免得 ≈ 以免',
          note:'Tự đặt câu với mỗi cặp; đọc to và bấm Nghe để so thanh điệu. Sau đó vào Thi thử HSK làm đề 20 câu.',
          ex:{ zh:'他一向谦虚，这次却居然主动上台，果然讲得很精彩。', pinyin:'Tā yíxiàng qiānxū, zhè cì què jūrán zhǔdòng shàngtái, guǒrán jiǎng de hěn jīngcǎi.', vi:'Anh ấy xưa nay khiêm tốn, lần này lại bất ngờ chủ động lên sân khấu, quả nhiên nói rất hay.' } }
      ],
      vocab:[
        { zh:'之路', pinyin:'zhī lù', hv:'chi lộ', vi:'con đường …', pos:'cụm cố định' },
        { zh:'过程', pinyin:'guòchéng', hv:'quá trình', vi:'quá trình', pos:'danh từ' },
        { zh:'生词', pinyin:'shēngcí', hv:'sinh từ', vi:'từ mới', pos:'danh từ' },
        { zh:'语法', pinyin:'yǔfǎ', hv:'ngữ pháp', vi:'ngữ pháp', pos:'danh từ' },
        { zh:'声调', pinyin:'shēngdiào', hv:'thanh điệu', vi:'thanh điệu', pos:'danh từ' },
        { zh:'地道', pinyin:'dìdao', hv:'địa đạo', vi:'chuẩn, đúng kiểu bản xứ', pos:'tính từ' },
        { zh:'交流', pinyin:'jiāoliú', hv:'giao lưu', vi:'giao lưu, trao đổi', pos:'động từ' },
        { zh:'自如', pinyin:'zìrú', hv:'tự như', vi:'tự nhiên, thành thạo', pos:'tính từ' },
        { zh:'瓶颈', pinyin:'píngjǐng', hv:'bình cảnh', vi:'điểm nghẽn, giai đoạn chững', pos:'danh từ' },
        { zh:'突破', pinyin:'tūpò', hv:'đột phá', vi:'đột phá', pos:'động từ' },
        { zh:'成就感', pinyin:'chéngjiùgǎn', hv:'thành tựu cảm', vi:'cảm giác thành tựu', pos:'danh từ' },
        { zh:'感慨', pinyin:'gǎnkǎi', hv:'cảm khái', vi:'cảm khái, bồi hồi', pos:'động từ' },
        { zh:'回想', pinyin:'huíxiǎng', hv:'hồi tưởng', vi:'nhớ lại', pos:'động từ' },
        { zh:'继续', pinyin:'jìxù', hv:'kế tục', vi:'tiếp tục', pos:'động từ' }
      ],
      dialogue:[
        { sp:'A', zh:'回想三年前，我连声调都分不清，现在居然能用汉语讨论新闻了。', pinyin:'Huíxiǎng sān nián qián, wǒ lián shēngdiào dōu fēn bu qīng, xiànzài jūrán néng yòng Hànyǔ tǎolùn xīnwén le.', vi:'Nhớ lại ba năm trước, mình thanh điệu còn phân biệt không nổi, giờ lại có thể bàn tin tức bằng tiếng Trung.' },
        { sp:'B', zh:'你是怎么突破瓶颈的？', pinyin:'Nǐ shì zěnme tūpò píngjǐng de?', vi:'Bạn vượt qua giai đoạn chững thế nào?' },
        { sp:'A', zh:'与其死记语法，不如多和中国朋友交流，哪怕说错也不怕。一旦开口，进步就快了。', pinyin:'Yǔqí sǐ jì yǔfǎ, bùrú duō hé Zhōngguó péngyou jiāoliú, nǎpà shuō cuò yě bú pà. Yídàn kāikǒu, jìnbù jiù kuài le.', vi:'Thà giao lưu nhiều với bạn Trung Quốc còn hơn học vẹt ngữ pháp, dù nói sai cũng không sợ. Một khi mở miệng, tiến bộ nhanh lắm.' },
        { sp:'B', zh:'说得真地道！听你这么说，我也很感慨。', pinyin:'Shuō de zhēn dìdao! Tīng nǐ zhème shuō, wǒ yě hěn gǎnkǎi.', vi:'Nói chuẩn thật! Nghe bạn nói, mình cũng thấy bồi hồi.' },
        { sp:'A', zh:'这种成就感让我想继续学下去。HSK5 只是一个新起点。', pinyin:'Zhè zhǒng chéngjiùgǎn ràng wǒ xiǎng jìxù xué xiàqù. HSK5 zhǐshì yí ge xīn qǐdiǎn.', vi:'Cảm giác thành tựu này khiến mình muốn học tiếp. HSK5 chỉ là một điểm khởi đầu mới.' }
      ]
    }
  ]
};

/* Bài nào chưa ghi cấp thì thuộc HSK1 */
COURSE_ZH.lessons.forEach(l => { if (!l.level) l.level = 'hsk1'; });

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSE_ZH, STROKES_ZH, RADICALS_ZH, PINYIN_ZH };
}
