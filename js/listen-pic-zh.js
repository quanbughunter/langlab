/* ============================================================
   LangLab — NGHE & CHỌN CÂU ĐÚNG VỚI TRANH · tiếng Trung
   ------------------------------------------------------------
   Đẩy thêm vào mảng LISTEN_PIC của js/listen-pic.js (nạp SAU tệp đó).

   Chỗ khó của tiếng Trung không nằm ở từ lạ mà ở THANH ĐIỆU và ở
   những âm gần nhau. Bộ này dồn bẫy vào đúng đó, và chỉ chọn những
   cặp mà bức tranh phân xử được dứt khoát:

     床 chuáng / 窗 chuāng      giường / cửa sổ   — cùng âm, khác thanh
     书 shū / 树 shù            sách / cây
     猫 māo / 帽子 màozi        mèo / mũ
     花 huā / 画 huà            hoa / tranh
     鱼 yú / 雨 yǔ              cá / mưa
     车 chē / 茶 chá            xe / trà
     四 sì / 十 shí             bốn / mười
     十四 shísì / 四十 sìshí    mười bốn / bốn mươi

   Ngoài ra: lượng từ 只·条·本·张·把·杯, vị trí 上面·下面·里面·旁边·
   中间, 有/没有, và thì thể 正在…呢 · 已经…了 · 要…了.

   LƯU Ý khi soạn thêm: 他 và 她 đọc y hệt nhau nên KHÔNG được dùng
   làm bẫy nghe — tai không phân biệt được, đó là bẫy không công bằng.

   Nội dung do LangLab tự biên soạn.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ========== CẶP KHÁC THANH ĐIỆU ========== */
{ id:'zh-01', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:30, y:30, view:'sun' }, { p:'bed', x:180, y:220 },
    { p:'cat', x:190, y:178, pose:'lie', s:0.8 }, { p:'lamp', x:330, y:220 }
  ]},
  alt:'Con mèo nằm trên giường, cửa sổ ở bên trái, cây đèn ở góc phải.',
  opts:[
    { t:'猫在床上。', ok:true },
    { t:'猫在窗上。', why:'床 chuáng và 窗 chuāng cùng một âm, chỉ khác thanh: 床 thanh hai đi lên, 窗 thanh một đi ngang. Con mèo nằm trên giường.', trap:'thanh điệu: 床 / 窗' },
    { t:'猫在床下。', why:'Chỉ khác chữ cuối. 上 là ở trên, 下 là ở dưới gầm.', trap:'vị trí' },
    { t:'狗在床上。', why:'Chỉ khác chữ đầu. Trong tranh là con mèo, không có con chó nào.', trap:'chủ thể' }
  ],
  keys:[
    { w:'床', r:'chuáng', vi:'cái giường' }, { w:'窗', r:'chuāng', vi:'cửa sổ' },
    { w:'猫', r:'māo', vi:'con mèo' }, { w:'上', r:'shàng', vi:'ở trên' }
  ],
  gram:[{ p:'床 chuáng và 窗 chuāng', vi:'Hai chữ cùng âm chuang, chỉ khác thanh điệu: 床 thanh 2 (giọng đi lên như hỏi lại), 窗 thanh 1 (giọng cao và ngang). Đây là cặp người Việt lẫn nhiều nhất.',
    ex:['猫在床上。', 'Con mèo nằm trên giường.'] }] },

{ id:'zh-02', lang:'zh', lv:'hsk1', cat:'Học tập',
  scene:{ bg:'room', items:[
    { p:'table', x:170, y:220, w:130 }, { p:'book', x:170, y:158, open:true },
    { p:'window', x:290, y:28, view:'sun' }, { p:'tree', x:330, y:220, h:80 }
  ]},
  alt:'Một cuốn sách mở đặt trên bàn; ngoài phòng có một cái cây.',
  opts:[
    { t:'桌子上有一本书。', ok:true },
    { t:'桌子上有一棵树。', why:'书 shū thanh một, 树 shù thanh bốn — cùng âm shu. Cây ở ngoài, không ở trên bàn.', trap:'thanh điệu: 书 / 树' },
    { t:'桌子下有一本书。', why:'Chỉ khác một chữ. Cuốn sách nằm trên mặt bàn.', trap:'vị trí' },
    { t:'桌子上有两本书。', why:'一 và 两 đều ngắn. Trên bàn chỉ có một cuốn.', trap:'số lượng' }
  ],
  keys:[
    { w:'书', r:'shū', vi:'cuốn sách' }, { w:'树', r:'shù', vi:'cái cây' },
    { w:'本', r:'běn', vi:'quyển (lượng từ cho sách)' }, { w:'棵', r:'kē', vi:'cây (lượng từ cho cây cối)' }
  ],
  gram:[{ p:'Lượng từ đi kèm cho biết danh từ nào', vi:'书 đi với 本, 树 đi với 棵. Nghe được lượng từ là đoán trước được danh từ, khỏi cần chờ nghe rõ thanh điệu.',
    ex:['桌子上有一本书。', 'Trên bàn có một cuốn sách.'] }] },

{ id:'zh-03', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'cat', x:160, y:174, pose:'sit', s:0.8 },
    { p:'hat', x:290, y:220, s:1.5 }
  ]},
  alt:'Con mèo ngồi trên ghế sofa, cái mũ để dưới sàn bên phải.',
  opts:[
    { t:'猫在沙发上。', ok:true },
    { t:'帽子在沙发上。', why:'猫 māo thanh một, 帽 mào thanh bốn. Cái mũ nằm dưới sàn.', trap:'thanh điệu: 猫 / 帽' },
    { t:'猫在沙发下。', why:'Chỉ khác chữ cuối.', trap:'vị trí' },
    { t:'猫不在沙发上。', why:'Thêm mỗi chữ 不 vào giữa câu — chỗ đọc rất nhanh nên dễ trôi.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'猫', r:'māo', vi:'con mèo' }, { w:'帽子', r:'màozi', vi:'cái mũ' },
    { w:'沙发', r:'shāfā', vi:'ghế sofa' }, { w:'不', r:'bù', vi:'không' }
  ],
  gram:[{ p:'猫 māo và 帽 mào', vi:'Thanh một giữ giọng cao đều, thanh bốn rơi mạnh xuống. 猫 là con mèo, 帽 là cái mũ — hai vật hoàn toàn khác nhau.',
    ex:['猫在沙发上。', 'Con mèo ngồi trên ghế sofa.'] }] },

{ id:'zh-04', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:250, y:30, w:70, h:54 }, { p:'table', x:150, y:220, w:110 },
    { p:'flower', x:150, y:158, s:1.2 }
  ]},
  alt:'Bình hoa đặt trên bàn, bức tranh treo trên tường bên phải.',
  opts:[
    { t:'桌子上有花。', ok:true },
    { t:'桌子上有画。', why:'花 huā thanh một, 画 huà thanh bốn. Bức tranh treo trên tường chứ không đặt trên bàn.', trap:'thanh điệu: 花 / 画' },
    { t:'墙上有花。', why:'Chỉ khác chữ đầu. Trên tường là bức tranh.', trap:'vị trí' },
    { t:'桌子上没有花。', why:'Thêm chữ 没 vào giữa. 有 và 没有 nghe lướt rất dễ lẫn.', trap:'有 / 没有' }
  ],
  keys:[
    { w:'花', r:'huā', vi:'hoa' }, { w:'画', r:'huà', vi:'bức tranh' },
    { w:'墙', r:'qiáng', vi:'bức tường' }, { w:'没有', r:'méiyǒu', vi:'không có' }
  ],
  gram:[{ p:'有 và 没有', vi:'Phủ định của 有 không dùng 不 mà dùng 没. Nghe thấy âm 没 ở trước 有 là biết câu đang nói KHÔNG có.',
    ex:['桌子上有花。', 'Trên bàn có hoa.'] }] },

{ id:'zh-05', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:46 }, { p:'rain', x:90, y:66, n:6 },
    { p:'person', x:200, y:220, pose:'walk' }, { p:'umbrella', x:206, y:100, open:true, s:1.3 }
  ]},
  alt:'Trời đang mưa, một người che ô đi bộ.',
  opts:[
    { t:'下雨了，他打着伞。', ok:true },
    { t:'下鱼了，他打着伞。', why:'雨 yǔ thanh ba, 鱼 yú thanh hai. Câu «下鱼» là vô nghĩa nhưng khi nghe nhanh vẫn dễ gật.', trap:'thanh điệu: 雨 / 鱼' },
    { t:'下雨了，他没打伞。', why:'Vế đầu đúng nên tai buông, rồi chữ 没 ở vế sau trôi mất.', trap:'phủ định chìm' },
    { t:'下雪了，他打着伞。', why:'雨 là mưa, 雪 là tuyết. Trong tranh là những vạch xiên, tức là mưa.', trap:'thời tiết' }
  ],
  keys:[
    { w:'下雨', r:'xià yǔ', vi:'trời mưa' }, { w:'鱼', r:'yú', vi:'con cá' },
    { w:'伞', r:'sǎn', vi:'cái ô' }, { w:'下雪', r:'xià xuě', vi:'trời có tuyết' }
  ],
  gram:[{ p:'雨 yǔ và 鱼 yú', vi:'Thanh ba đi xuống rồi vòng lên, thanh hai chỉ đi lên. Hai chữ này cùng âm yu nên phải bám vào đường lên xuống của giọng.',
    ex:['下雨了，他打着伞。', 'Trời mưa, anh ấy che ô.'] }] },

{ id:'zh-06', lang:'zh', lv:'hsk2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'cup', x:180, y:158 },
    { p:'window', x:290, y:28, view:'sun' }
  ]},
  alt:'Một cốc trà đặt trên bàn.',
  opts:[
    { t:'桌子上有一杯茶。', ok:true },
    { t:'桌子上有一辆车。', why:'茶 chá và 车 chē khác nhau ở nguyên âm, mà lượng từ cũng đổi từ 杯 sang 辆. Trong tranh không có xe.', trap:'gần âm: 茶 / 车' },
    { t:'桌子上有两杯茶。', why:'一 và 两 đều là từ rất ngắn. Trên bàn chỉ có một cốc.', trap:'số lượng' },
    { t:'桌子下有一杯茶。', why:'Chỉ khác chữ thứ ba.', trap:'vị trí' }
  ],
  keys:[
    { w:'茶', r:'chá', vi:'trà' }, { w:'车', r:'chē', vi:'xe' },
    { w:'杯', r:'bēi', vi:'cốc (lượng từ)' }, { w:'辆', r:'liàng', vi:'chiếc (lượng từ cho xe)' }
  ],
  gram:[{ p:'一杯 và 一辆', vi:'Lượng từ trong tiếng Trung gắn chặt với loại vật: 杯 cho đồ uống, 辆 cho xe cộ. Nghe lượng từ là biết trước loại danh từ.',
    ex:['桌子上有一杯茶。', 'Trên bàn có một cốc trà.'] }] },

/* ========== SỐ 四 / 十 ========== */
{ id:'zh-07', lang:'zh', lv:'hsk1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:160 }, { p:'apple', x:180, y:158, rep:4, gap:34 }
  ]},
  alt:'Bốn quả táo bày trên bàn.',
  opts:[
    { t:'桌子上有四个苹果。', ok:true },
    { t:'桌子上有十个苹果。', why:'四 sì và 十 shí là cặp bẫy kinh điển: 四 không cong lưỡi, 十 cong lưỡi. Trên bàn có bốn quả.', trap:'gần âm: 四 / 十' },
    { t:'桌子上有十四个苹果。', why:'十四 là mười bốn. Đếm kỹ trong tranh có bốn quả.', trap:'số lượng' },
    { t:'桌子下有四个苹果。', why:'Chỉ khác chữ thứ ba.', trap:'vị trí' }
  ],
  keys:[
    { w:'四', r:'sì', vi:'bốn' }, { w:'十', r:'shí', vi:'mười' },
    { w:'苹果', r:'píngguǒ', vi:'quả táo' }, { w:'个', r:'gè', vi:'cái (lượng từ chung)' }
  ],
  gram:[{ p:'四 sì và 十 shí', vi:'四 phát âm lưỡi phẳng, 十 phải cong lưỡi lên. Đây là chỗ mất điểm nhiều nhất trong phần nghe HSK. Nghe kỹ có tiếng «sh» hay không.',
    ex:['桌子上有四个苹果。', 'Trên bàn có bốn quả táo.'] }] },

{ id:'zh-08', lang:'zh', lv:'hsk2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:36, y:44, w:86, h:116, rows:4 }, { p:'tag', x:220, y:126, text:'14' },
    { p:'coat', x:310, y:180 }
  ]},
  alt:'Chiếc áo treo bên phải, bảng giá ghi số 14.',
  opts:[
    { t:'这件衣服十四块。', ok:true },
    { t:'这件衣服四十块。', why:'十四 là 14, 四十 là 40 — chỉ đảo thứ tự hai chữ. Bảng giá ghi 14.', trap:'đảo số: 十四 / 四十' },
    { t:'这件衣服四块。', why:'Thiếu mỗi chữ 十 ở đầu số.', trap:'gần âm: 四 / 十四' },
    { t:'这些衣服十四块。', why:'这件 là chiếc này, 这些 là những chiếc này. Trong tranh chỉ treo một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'十四', r:'shísì', vi:'mười bốn' }, { w:'四十', r:'sìshí', vi:'bốn mươi' },
    { w:'件', r:'jiàn', vi:'chiếc (lượng từ cho áo)' }, { w:'块', r:'kuài', vi:'đồng (tiền)' }
  ],
  gram:[{ p:'十四 và 四十', vi:'Hai chữ giống hệt nhau, chỉ đảo thứ tự: 十四 là 10+4, 四十 là 4×10. Nghe chữ nào ĐỨNG TRƯỚC là biết ngay.',
    ex:['这件衣服十四块。', 'Chiếc áo này mười bốn đồng.'] }] },

{ id:'zh-09', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:200, y:88, time:'10:00', r:36 }, { p:'table', x:200, y:220, w:110 },
    { p:'cup', x:200, y:158 }
  ]},
  alt:'Đồng hồ treo tường chỉ đúng 10 giờ.',
  opts:[
    { t:'现在十点。', ok:true },
    { t:'现在四点。', why:'十 shí cong lưỡi, 四 sì lưỡi phẳng. Kim ngắn đang ở số 10.', trap:'gần âm: 四 / 十' },
    { t:'现在两点。', why:'两 và 十 đều ngắn. Kim ngắn chỉ số 10.', trap:'số lượng' },
    { t:'现在十点半。', why:'Thêm mỗi chữ 半 ở cuối là thành 10 rưỡi. Kim phút đang chỉ thẳng lên số 12.', trap:'thêm một chữ đổi nghĩa' }
  ],
  keys:[
    { w:'现在', r:'xiànzài', vi:'bây giờ' }, { w:'点', r:'diǎn', vi:'giờ' },
    { w:'半', r:'bàn', vi:'rưỡi' }, { w:'两', r:'liǎng', vi:'hai (đi với lượng từ)' }
  ],
  gram:[{ p:'Chữ 半 ở cuối câu giờ', vi:'十点 là 10 giờ đúng, 十点半 là 10 rưỡi. Một chữ ở cuối mà lệch nửa tiếng, nên phải nghe hết câu.',
    ex:['现在十点。', 'Bây giờ là mười giờ.'] }] },

{ id:'zh-10', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:200, y:88, time:'2:45', r:36 }, { p:'sofa', x:200, y:220 }
  ]},
  alt:'Đồng hồ chỉ 2 giờ 45.',
  opts:[
    { t:'现在差一刻三点。', ok:true },
    { t:'现在三点一刻。', why:'差一刻三点 là 2:45, còn 三点一刻 là 3:15. Cùng mấy chữ ấy, chỉ đảo vị trí.', trap:'đảo trật tự: 差一刻' },
    { t:'现在差一刻两点。', why:'差一刻 đếm ngược tới giờ SAU, nên phải là 三点.', trap:'giờ: lệch một giờ' },
    { t:'现在差一刻十点。', why:'三 sān và 十 shí đều ngắn. Kim ngắn đang gần số 3.', trap:'gần âm: 三 / 十' }
  ],
  keys:[
    { w:'差一刻', r:'chà yí kè', vi:'kém mười lăm phút' }, { w:'一刻', r:'yí kè', vi:'mười lăm phút' },
    { w:'三', r:'sān', vi:'ba' }, { w:'点', r:'diǎn', vi:'giờ' }
  ],
  gram:[{ p:'差一刻 đứng TRƯỚC giờ', vi:'差一刻三点 = kém mười lăm phút nữa là ba giờ = 2:45. Còn 三点一刻 = ba giờ mười lăm. Vị trí của 一刻 quyết định tất cả.',
    ex:['现在差一刻三点。', 'Bây giờ là ba giờ kém mười lăm.'] }] },

/* ========== VỊ TRÍ ========== */
{ id:'zh-11', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'cat', x:180, y:218, pose:'lie' },
    { p:'chair', x:300, y:220 }
  ]},
  alt:'Con mèo nằm dưới gầm bàn, cái ghế ở bên phải.',
  opts:[
    { t:'猫在桌子下面。', ok:true },
    { t:'猫在桌子上面。', why:'Chỉ khác một chữ. 上面 là trên mặt bàn, 下面 là dưới gầm.', trap:'vị trí' },
    { t:'猫在椅子下面。', why:'Cái ghế có thật trong tranh nhưng đứng tách hẳn sang bên phải.', trap:'đúng vật, sai mốc' },
    { t:'猫在桌子里面。', why:'里面 là ở bên trong. Cái bàn không có bên trong để chui vào.', trap:'vị trí' }
  ],
  keys:[
    { w:'下面', r:'xiàmiàn', vi:'phía dưới' }, { w:'上面', r:'shàngmiàn', vi:'phía trên' },
    { w:'里面', r:'lǐmiàn', vi:'bên trong' }, { w:'椅子', r:'yǐzi', vi:'cái ghế' }
  ],
  gram:[{ p:'上面 · 下面 · 里面 · 旁边', vi:'Từ chỉ vị trí trong tiếng Trung đứng SAU danh từ: 桌子下面 chứ không phải 下面桌子. Chữ quyết định nằm ở cuối câu.',
    ex:['猫在桌子下面。', 'Con mèo nằm dưới gầm bàn.'] }] },

{ id:'zh-12', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:80, y:220 }, { p:'fridge', x:180, y:220 },
    { p:'table', x:300, y:220, w:100 }, { p:'bowl', x:300, y:158 }
  ]},
  alt:'Tủ bếp bên trái, tủ lạnh ở giữa, bàn có cái bát ở bên phải.',
  opts:[
    { t:'冰箱在柜子和桌子中间。', ok:true },
    { t:'冰箱在柜子和桌子旁边。', why:'旁边 chỉ nói là ở cạnh, 中间 mới là ở chính giữa hai vật.', trap:'vị trí' },
    { t:'柜子在冰箱和桌子中间。', why:'Đổi chỗ hai chủ thể. Tủ bếp đứng ngoài cùng bên trái.', trap:'hoán chủ thể' },
    { t:'冰箱不在柜子和桌子中间。', why:'Thêm mỗi chữ 不 vào giữa câu dài.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'冰箱', r:'bīngxiāng', vi:'tủ lạnh' }, { w:'柜子', r:'guìzi', vi:'cái tủ' },
    { w:'中间', r:'zhōngjiān', vi:'ở giữa' }, { w:'旁边', r:'pángbiān', vi:'bên cạnh' }
  ],
  gram:[{ p:'在 A 和 B 中间', vi:'Cấu trúc cố định: 在 … 和 … 中间. Phải đủ hai mốc nối bằng 和. Nghe được chữ 和 là biết câu đang nói về vị trí giữa hai vật.',
    ex:['冰箱在柜子和桌子中间。', 'Tủ lạnh ở giữa tủ bếp và cái bàn.'] }] },

{ id:'zh-13', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'box', x:160, y:220, w:44 }, { p:'ball', x:160, y:196, s:1.1 },
    { p:'bag', x:290, y:220, s:1.2 }
  ]},
  alt:'Quả bóng đặt trên nắp hộp, cái túi ở bên phải.',
  opts:[
    { t:'球在箱子上面。', ok:true },
    { t:'球在箱子里面。', why:'里面 là ở trong hộp. Quả bóng nằm trên nắp.', trap:'vị trí' },
    { t:'球在包里面。', why:'Cái túi có thật nhưng ở tít bên phải.', trap:'đúng vật, sai mốc' },
    { t:'两个球在箱子上面。', why:'Chỉ thêm 两个 ở đầu. Trên nắp hộp có một quả.', trap:'số lượng' }
  ],
  keys:[
    { w:'球', r:'qiú', vi:'quả bóng' }, { w:'箱子', r:'xiāngzi', vi:'cái hộp, thùng' },
    { w:'里面', r:'lǐmiàn', vi:'bên trong' }, { w:'包', r:'bāo', vi:'cái túi' }
  ],
  gram:[{ p:'上面 và 里面', vi:'Hai từ này chỉ khác chữ đầu nhưng ngược hẳn: một cái là trên mặt, một cái là trong ruột. Khi trong tranh có vật đựng thì đây là bẫy chắc chắn xuất hiện.',
    ex:['球在箱子上面。', 'Quả bóng nằm trên nắp hộp.'] }] },

{ id:'zh-14', lang:'zh', lv:'hsk2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:44 }, { p:'car', x:140, y:220, w:84 },
    { p:'person', x:240, y:220, pose:'stand' }, { p:'bus', x:330, y:220, w:92 }
  ]},
  alt:'Một người đứng giữa chiếc ô tô bên trái và xe buýt bên phải.',
  opts:[
    { t:'他站在汽车和公共汽车中间。', ok:true },
    { t:'他站在汽车和自行车中间。', why:'Chỉ khác mốc thứ hai. Bên phải là xe buýt, trong tranh không có xe đạp.', trap:'vật không có' },
    { t:'他坐在汽车和公共汽车中间。', why:'站 là đứng, 坐 là ngồi. Hai chân người này chạm đất, thân thẳng.', trap:'hành động' },
    { t:'他站在汽车后面。', why:'后面 là phía sau. Người này đứng ngang hàng, ở khoảng giữa.', trap:'vị trí' }
  ],
  keys:[
    { w:'站', r:'zhàn', vi:'đứng' }, { w:'坐', r:'zuò', vi:'ngồi' },
    { w:'汽车', r:'qìchē', vi:'ô tô' }, { w:'公共汽车', r:'gōnggòng qìchē', vi:'xe buýt' }
  ],
  gram:[{ p:'站 zhàn và 坐 zuò', vi:'Hai động từ tư thế cơ bản nhất, đều một âm tiết và hay nằm chìm giữa câu. Nghe được chúng là xác định được dáng người trong tranh.',
    ex:['他站在汽车和公共汽车中间。', 'Anh ấy đứng giữa ô tô và xe buýt.'] }] },

/* ========== LƯỢNG TỪ ========== */
{ id:'zh-15', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:52, y:42 }, { p:'dog', x:150, y:220, s:1.1 },
    { p:'cat', x:260, y:220, pose:'sit' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Một con chó bên trái, một con mèo ngồi ở giữa, cây ở bên phải.',
  opts:[
    { t:'有一只猫和一条狗。', ok:true },
    { t:'有一只猫和两条狗。', why:'一 và 两 đều ngắn. Chỉ có một con chó.', trap:'số lượng' },
    { t:'有两只猫和一条狗。', why:'Chỉ đổi con số ở nửa đầu câu.', trap:'số lượng' },
    { t:'有一只猫，没有狗。', why:'没有 nằm ở nửa sau, lúc tai đã yên tâm vì nửa đầu đúng.', trap:'有 / 没有' }
  ],
  keys:[
    { w:'只', r:'zhī', vi:'con (lượng từ cho vật nuôi nhỏ)' }, { w:'条', r:'tiáo', vi:'con (lượng từ cho vật dài: chó, cá)' },
    { w:'猫', r:'māo', vi:'con mèo' }, { w:'狗', r:'gǒu', vi:'con chó' }
  ],
  gram:[{ p:'一只猫 và 一条狗', vi:'Mèo dùng 只, chó dùng 条. Không hoán đổi được. Nghe lượng từ trước là đoán được con vật đi sau.',
    ex:['有一只猫和一条狗。', 'Có một con mèo và một con chó.'] }] },

{ id:'zh-16', lang:'zh', lv:'hsk2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:160 }, { p:'bottle', x:150, y:158 },
    { p:'cup', x:200, y:158 }, { p:'cup', x:240, y:158 }
  ]},
  alt:'Trên bàn có một cái chai và hai cái cốc.',
  opts:[
    { t:'桌子上有一瓶水和两杯茶。', ok:true },
    { t:'桌子上有两瓶水和一杯茶。', why:'Đổi chỗ hai con số. Chai chỉ có một, cốc có hai.', trap:'hoán số lượng' },
    { t:'桌子上有一杯水和两瓶茶。', why:'Đổi chỗ hai lượng từ 瓶 và 杯.', trap:'hoán lượng từ' },
    { t:'桌子下有一瓶水和两杯茶。', why:'Chỉ khác chữ thứ ba, ngay đầu câu.', trap:'vị trí' }
  ],
  keys:[
    { w:'瓶', r:'píng', vi:'chai (lượng từ)' }, { w:'杯', r:'bēi', vi:'cốc (lượng từ)' },
    { w:'水', r:'shuǐ', vi:'nước' }, { w:'茶', r:'chá', vi:'trà' }
  ],
  gram:[{ p:'瓶 và 杯', vi:'瓶 dùng cho vật đựng có cổ (chai), 杯 dùng cho cốc chén. Đảo hai lượng từ là đảo hẳn vật, dù các chữ khác giữ nguyên.',
    ex:['桌子上有一瓶水和两杯茶。', 'Trên bàn có một chai nước và hai cốc trà.'] }] },

{ id:'zh-17', lang:'zh', lv:'hsk2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:120, y:220 }, { p:'book', x:120, y:158, open:true },
    { p:'desk', x:260, y:220 }, { p:'clock', x:216, y:34, time:'8:00', r:22 }
  ]},
  alt:'Hai cái bàn trong lớp: bàn bên trái có sách mở, bàn bên phải trống.',
  opts:[
    { t:'一张桌子上有书，另一张没有。', ok:true },
    { t:'两张桌子上都有书。', why:'都 là đều, cả hai. Bàn bên phải trống trơn.', trap:'都 (đều)' },
    { t:'一张桌子上有书，另一张也有。', why:'也有 là cũng có. Chỉ khác chữ cuối, mà nghĩa ngược hẳn.', trap:'phủ định chìm' },
    { t:'一把椅子上有书，另一把没有。', why:'桌子 là bàn, 椅子 là ghế, và lượng từ cũng đổi từ 张 sang 把. Trong tranh không có ghế.', trap:'vật không có' }
  ],
  keys:[
    { w:'张', r:'zhāng', vi:'cái (lượng từ cho bàn, giấy)' }, { w:'另一', r:'lìng yī', vi:'cái còn lại' },
    { w:'都', r:'dōu', vi:'đều' }, { w:'也', r:'yě', vi:'cũng' }
  ],
  gram:[{ p:'另一张 … 没有', vi:'Cấu trúc «một cái thì có, cái kia thì không». Chữ quyết định nằm ở cuối: 没有 hay 也有. Phải nghe hết câu.',
    ex:['一张桌子上有书，另一张没有。', 'Một bàn có sách, bàn kia thì không.'] }] },

/* ========== THÌ THỂ ========== */
{ id:'zh-18', lang:'zh', lv:'hsk2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'stove', x:130, y:220 }, { p:'person', x:196, y:220, pose:'cook', flip:true },
    { p:'table', x:300, y:220, w:100 }, { p:'bowl', x:300, y:158 }
  ]},
  alt:'Một người đang nấu bên bếp lò, cái bát để sẵn trên bàn.',
  opts:[
    { t:'他正在做饭呢。', ok:true },
    { t:'他已经做完饭了。', why:'已经…了 là đã xong. Trong tranh tay vẫn đang trên bếp.', trap:'thì: đã xong' },
    { t:'他要做饭了。', why:'要…了 là sắp làm, chưa bắt đầu. Anh ấy đã đứng bên bếp rồi.', trap:'thì: sắp làm' },
    { t:'他正在洗碗呢。', why:'Chỉ khác hai chữ giữa. Cái bát để trên bàn chứ không ở trong tay.', trap:'đúng vật, sai hành động' }
  ],
  keys:[
    { w:'正在', r:'zhèngzài', vi:'đang (làm gì)' }, { w:'已经', r:'yǐjīng', vi:'đã… rồi' },
    { w:'要…了', r:'yào…le', vi:'sắp' }, { w:'做饭', r:'zuò fàn', vi:'nấu cơm' }
  ],
  gram:[{ p:'正在…呢 · 已经…了 · 要…了', vi:'Ba mốc của một việc: sắp làm, đang làm, đã xong. Tranh chỉ đúng một mốc, nên nghe được cụm này là loại ngay hai đáp án.',
    ex:['他正在做饭呢。', 'Anh ấy đang nấu cơm.'] }] },

{ id:'zh-19', lang:'zh', lv:'hsk3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:250, y:30, w:70, h:54 }, { p:'ladder', x:180, y:220, h:110 },
    { p:'person', x:128, y:220, pose:'point' }
  ]},
  alt:'Bức tranh đã treo lên tường, cái thang dựng bên cạnh, một người đứng dưới chỉ tay lên.',
  opts:[
    { t:'画已经挂上去了。', ok:true },
    { t:'画还没挂上去。', why:'已经 là đã rồi, 还没 là vẫn chưa. Bức tranh rõ ràng đã ở trên tường.', trap:'已经 / 还没' },
    { t:'他正在挂画呢。', why:'Anh ấy đứng dưới sàn chỉ tay lên, không trèo thang cũng không cầm tranh.', trap:'thì: đang làm' },
    { t:'花已经挂上去了。', why:'Chỉ khác chữ đầu tiên. 画 huà thanh bốn là bức tranh, 花 huā thanh một là bông hoa — trong tranh không có hoa nào.', trap:'thanh điệu: 画 / 花' }
  ],
  keys:[
    { w:'挂', r:'guà', vi:'treo' }, { w:'已经', r:'yǐjīng', vi:'đã… rồi' },
    { w:'还没', r:'hái méi', vi:'vẫn chưa' }, { w:'梯子', r:'tīzi', vi:'cái thang' }
  ],
  gram:[{ p:'已经…了 và 还没…', vi:'已经 đi với 了 ở cuối, 还没 thì KHÔNG dùng 了. Nghe được chữ 了 ở cuối câu cũng là một manh mối.',
    ex:['画已经挂上去了。', 'Bức tranh đã treo lên rồi.'] }] },

{ id:'zh-20', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:40, y:28, view:'sun', open:true }, { p:'window', x:250, y:28, view:'sun' },
    { p:'sofa', x:190, y:220 }
  ]},
  alt:'Hai cửa sổ: cửa bên trái đang mở, cửa bên phải đóng.',
  opts:[
    { t:'一个窗户开着，另一个关着。', ok:true },
    { t:'两个窗户都开着。', why:'都 là cả hai. Chỉ cánh bên trái hé ra ngoài.', trap:'都 (đều)' },
    { t:'一个窗户关着，另一个开着。', why:'Đổi chỗ hai vế. Cửa đang mở là cửa bên trái.', trap:'hoán chủ thể' },
    { t:'一个窗户开着，另一个也开着。', why:'也 là cũng, chỉ khác một chữ ở cuối.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'窗户', r:'chuānghu', vi:'cửa sổ' }, { w:'开', r:'kāi', vi:'mở' },
    { w:'关', r:'guān', vi:'đóng' }, { w:'着', r:'zhe', vi:'đang ở trạng thái' }
  ],
  gram:[{ p:'开着 và 关着', vi:'Chữ 着 chỉ trạng thái đang duy trì, không phải hành động. 开着 là đang ở trạng thái mở, khác với 开 là động tác mở ra.',
    ex:['一个窗户开着，另一个关着。', 'Một cửa sổ đang mở, cửa kia đóng.'] }] },

/* ========== HAI NGƯỜI ========== */
{ id:'zh-21', lang:'zh', lv:'hsk2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:130, y:220, pose:'write' }, { p:'desk', x:122, y:220, w:92 },
    { p:'person', x:265, y:220, pose:'read', s:0.95 }, { p:'desk', x:257, y:220, w:92 }
  ]},
  alt:'Hai bạn ngồi hai bàn: bạn bên trái đang viết, bạn bên phải đang đọc sách.',
  opts:[
    { t:'一个人在写字，另一个人在看书。', ok:true },
    { t:'一个人在看书，另一个人在写字。', why:'Đổi chỗ hai hành động. Bạn cầm bút ngồi bên trái.', trap:'hoán chủ thể' },
    { t:'两个人都在写字。', why:'都 là cả hai. Bạn bên phải cầm sách.', trap:'都 (đều)' },
    { t:'一个人在写字，另一个人在睡觉。', why:'Vế đầu đúng nên dễ gật. Không ai đang ngủ.', trap:'đúng một nửa' }
  ],
  keys:[
    { w:'写字', r:'xiě zì', vi:'viết chữ' }, { w:'看书', r:'kàn shū', vi:'đọc sách' },
    { w:'睡觉', r:'shuì jiào', vi:'ngủ' }, { w:'都', r:'dōu', vi:'đều' }
  ],
  gram:[{ p:'一个人… 另一个人…', vi:'Khi có đúng hai người thì dùng cặp này. Nghe thấy 都 là câu đang nói cả hai giống nhau — loại được ngay.',
    ex:['一个人在写字，另一个人在看书。', 'Một người đang viết, người kia đang đọc sách.'] }] },

{ id:'zh-22', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'phone' }, { p:'table', x:270, y:220, w:110 },
    { p:'phone', x:270, y:156, s:1.4 }
  ]},
  alt:'Một người đang áp điện thoại lên tai; một chiếc điện thoại khác nằm trên bàn.',
  opts:[
    { t:'他在打电话，桌子上还有一个手机。', ok:true },
    { t:'他在打电话，桌子上没有手机。', why:'Vế đầu đúng nên tai buông, rồi 没有 ở vế sau trôi mất.', trap:'有 / 没有' },
    { t:'他在看电视，桌子上还有一个手机。', why:'打电话 là gọi điện, 看电视 là xem tivi. Trong tranh không có tivi.', trap:'hành động' },
    { t:'他在打电话，桌子上还有两个手机。', why:'Chỉ khác con số ở cuối. Trên bàn có một chiếc.', trap:'số lượng' }
  ],
  keys:[
    { w:'打电话', r:'dǎ diànhuà', vi:'gọi điện thoại' }, { w:'手机', r:'shǒujī', vi:'điện thoại di động' },
    { w:'还', r:'hái', vi:'còn, thêm nữa' }, { w:'看电视', r:'kàn diànshì', vi:'xem tivi' }
  ],
  gram:[{ p:'打电话 — động từ 打 đi với danh từ cố định', vi:'打电话 gọi điện, 打球 chơi bóng, 打伞 che ô. Chữ 打 một mình không có nghĩa rõ, phải nghe cả cụm.',
    ex:['他在打电话。', 'Anh ấy đang gọi điện thoại.'] }] },

/* ========== THỜI TIẾT ========== */
{ id:'zh-23', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:100, y:46 }, { p:'snowfall', x:100, y:70, n:7 },
    { p:'person', x:220, y:220, pose:'walk' }, { p:'tree', x:330, y:220 }
  ]},
  alt:'Trời đang có tuyết rơi, một người đi bộ.',
  opts:[
    { t:'今天下雪。', ok:true },
    { t:'今天下雨。', why:'雪 xuě là tuyết, 雨 yǔ là mưa. Trong tranh là những chấm tròn.', trap:'thời tiết' },
    { t:'明天下雪。', why:'今天 là hôm nay, 明天 là ngày mai. Tranh tả cảnh đang diễn ra.', trap:'今天 / 明天' },
    { t:'今天不下雪。', why:'Thêm mỗi chữ 不 vào giữa câu rất ngắn.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'下雪', r:'xià xuě', vi:'trời có tuyết' }, { w:'下雨', r:'xià yǔ', vi:'trời mưa' },
    { w:'今天', r:'jīntiān', vi:'hôm nay' }, { w:'明天', r:'míngtiān', vi:'ngày mai' }
  ],
  gram:[{ p:'下 + hiện tượng thời tiết', vi:'下雨, 下雪 — chữ 下 nghĩa là rơi xuống. Nghe chữ đi sau 下 mới biết là mưa hay tuyết.',
    ex:['今天下雪。', 'Hôm nay trời có tuyết.'] }] },

{ id:'zh-24', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:58, y:44 }, { p:'cloud', x:150, y:50 },
    { p:'tree', x:280, y:220 }, { p:'bird', x:150, y:218 }
  ]},
  alt:'Trời nắng và có một đám mây; một con chim đứng dưới đất, cây ở bên phải.',
  opts:[
    { t:'天上有一朵云。', ok:true },
    { t:'天上有两朵云。', why:'一 và 两 đều ngắn. Trên trời có một đám.', trap:'số lượng' },
    { t:'树上有一只鸟。', why:'Con chim có thật nhưng đứng dưới đất, không đậu trên cây.', trap:'đúng vật, sai vị trí' },
    { t:'天上没有云。', why:'没有 thay cho 有 — chỉ thêm một chữ mà nghĩa ngược hẳn.', trap:'有 / 没有' }
  ],
  keys:[
    { w:'云', r:'yún', vi:'đám mây' }, { w:'朵', r:'duǒ', vi:'đoá, đám (lượng từ cho mây, hoa)' },
    { w:'鸟', r:'niǎo', vi:'con chim' }, { w:'天上', r:'tiānshàng', vi:'trên trời' }
  ],
  gram:[{ p:'一朵云 và 一只鸟', vi:'Mây và hoa dùng 朵, chim và mèo dùng 只. Lượng từ báo trước danh từ, nghe được nó là đỡ phải căng tai ở chữ sau.',
    ex:['天上有一朵云。', 'Trên trời có một đám mây.'] }] },

{ id:'zh-25', lang:'zh', lv:'hsk3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:250, y:28, view:'rain' }, { p:'sofa', x:160, y:220 },
    { p:'person', x:160, y:220, pose:'read', s:0.85 }, { p:'umbrella', x:330, y:220, s:1.2 }
  ]},
  alt:'Ngoài cửa sổ trời mưa; cái ô đã gập dựng trong nhà; một người ngồi đọc sách.',
  opts:[
    { t:'外面下雨，她在里面看书。', ok:true },
    { t:'里面下雨，她在外面看书。', why:'Đổi chỗ 外面 và 里面. Mưa ở ngoài cửa sổ, người ở trong nhà.', trap:'里面 / 外面' },
    { t:'外面下雨，她在里面睡觉。', why:'Vế đầu đúng. Nhưng cô ấy đang cầm sách mở ra trước mặt.', trap:'đúng một nửa' },
    { t:'外面下雨，她带着伞。', why:'Cái ô có thật nhưng đang gập dựng ở góc, không ở trên tay.', trap:'đúng vật, sai trạng thái' }
  ],
  keys:[
    { w:'外面', r:'wàimiàn', vi:'bên ngoài' }, { w:'里面', r:'lǐmiàn', vi:'bên trong' },
    { w:'看书', r:'kàn shū', vi:'đọc sách' }, { w:'带', r:'dài', vi:'mang theo' }
  ],
  gram:[{ p:'里面 và 外面', vi:'Khi một câu có cả hai từ này thì bẫy quen thuộc là đảo chỗ chúng. Gắn từng vế vào tranh ngay khi nghe.',
    ex:['外面下雨，她在里面看书。', 'Ngoài trời mưa, cô ấy ngồi trong nhà đọc sách.'] }] },

/* ========== TRÁI PHẢI · TRƯỚC SAU ========== */
{ id:'zh-26', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'lamp', x:110, y:220 }, { p:'sofa', x:230, y:220 }, { p:'plant', x:330, y:220, s:1.4 }
  ]},
  alt:'Cây đèn ở bên trái, ghế sofa ở giữa, chậu cây ở bên phải.',
  opts:[
    { t:'灯在沙发左边。', ok:true },
    { t:'灯在沙发右边。', why:'左 zuǒ và 右 yòu đều là một âm tiết nằm giữa câu. Cây đèn đứng bên trái.', trap:'trái / phải' },
    { t:'花在沙发左边。', why:'Chậu cây có thật nhưng ở bên phải, còn bên trái là cây đèn.', trap:'đúng vật, sai vị trí' },
    { t:'灯不在沙发左边。', why:'Thêm mỗi chữ 不.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'左边', r:'zuǒbian', vi:'bên trái' }, { w:'右边', r:'yòubian', vi:'bên phải' },
    { w:'灯', r:'dēng', vi:'cái đèn' }, { w:'沙发', r:'shāfā', vi:'ghế sofa' }
  ],
  gram:[{ p:'左边 và 右边', vi:'Hai từ chỉ hướng ngược nhau, đều đứng SAU danh từ mốc: 沙发左边 nghĩa là bên trái của ghế sofa.',
    ex:['灯在沙发左边。', 'Cây đèn ở bên trái ghế sofa.'] }] },

{ id:'zh-27', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:130, y:96 }, { p:'person', x:160, y:220, pose:'stand' },
    { p:'window', x:280, y:30, view:'sun' }
  ]},
  alt:'Một người đứng chắn ngay trước cánh cửa, cửa sổ ở phía bên phải.',
  opts:[
    { t:'他站在门前面。', ok:true },
    { t:'他站在门后面。', why:'前 qián và 后 hòu đều ngắn, lại nằm ở chữ thứ năm. Nhìn thấy cả người lẫn cửa nghĩa là người ở phía trước.', trap:'trước / sau' },
    { t:'门在他前面。', why:'Đổi chỗ hai chủ thể — các chữ vẫn y nguyên.', trap:'hoán chủ thể' },
    { t:'他站在窗户前面。', why:'Cửa sổ có thật nhưng ở tít bên phải, người đứng trước cửa ra vào.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'前面', r:'qiánmiàn', vi:'phía trước' }, { w:'后面', r:'hòumiàn', vi:'phía sau' },
    { w:'门', r:'mén', vi:'cửa ra vào' }, { w:'窗户', r:'chuānghu', vi:'cửa sổ' }
  ],
  gram:[{ p:'A 在 B 前面', vi:'Trật tự là: vật cần tả — 在 — mốc — từ chỉ vị trí. Đảo A và B là đảo hẳn nghĩa dù chữ không đổi.',
    ex:['他站在门前面。', 'Anh ấy đứng trước cửa.'] }] },

{ id:'zh-28', lang:'zh', lv:'hsk2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'chair', x:110, y:220 }, { p:'chair', x:190, y:220 },
    { p:'chair', x:270, y:220 }, { p:'person', x:56, y:220, pose:'stand' }
  ]},
  alt:'Ba cái ghế xếp hàng, một người đứng cạnh cái ghế đầu tiên bên trái.',
  opts:[
    { t:'他站在第一把椅子旁边。', ok:true },
    { t:'他站在第三把椅子旁边。', why:'一 yī và 三 sān đều ngắn, lại nằm chìm giữa câu.', trap:'thứ tự' },
    { t:'他坐在第一把椅子上。', why:'Cả ba ghế đều trống, người này đang đứng.', trap:'hành động' },
    { t:'他站在第一张桌子旁边。', why:'Lượng từ đổi từ 把 sang 张 kéo theo danh từ đổi từ ghế sang bàn.', trap:'hoán lượng từ' }
  ],
  keys:[
    { w:'第一', r:'dì yī', vi:'thứ nhất' }, { w:'第三', r:'dì sān', vi:'thứ ba' },
    { w:'把', r:'bǎ', vi:'cái (lượng từ cho ghế, dao)' }, { w:'旁边', r:'pángbiān', vi:'bên cạnh' }
  ],
  gram:[{ p:'第 + số + lượng từ', vi:'Số thứ tự trong tiếng Trung là 第一, 第二, 第三 và vẫn phải kèm lượng từ: 第一把椅子. Nghe được lượng từ là biết đang đếm vật gì.',
    ex:['他站在第一把椅子旁边。', 'Anh ấy đứng cạnh cái ghế đầu tiên.'] }] },

/* ========== SO SÁNH ========== */
{ id:'zh-29', lang:'zh', lv:'hsk2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:44 }, { p:'bus', x:140, y:220 }, { p:'car', x:300, y:220 }
  ]},
  alt:'Xe buýt ở bên trái to hơn hẳn chiếc ô tô con bên phải.',
  opts:[
    { t:'公共汽车比汽车大。', ok:true },
    { t:'汽车比公共汽车大。', why:'Đổi chỗ hai chủ thể quanh chữ 比. Chữ đứng TRƯỚC 比 mới là cái lớn hơn.', trap:'hoán chủ thể' },
    { t:'公共汽车比汽车小。', why:'Chỉ khác chữ cuối cùng. 大 là to, 小 là nhỏ.', trap:'大 / 小' },
    { t:'公共汽车和汽车一样大。', why:'一样大 là to bằng nhau. Trong tranh xe buýt dài hơn hẳn.', trap:'so sánh bằng / hơn' }
  ],
  keys:[
    { w:'比', r:'bǐ', vi:'hơn (dùng khi so sánh)' }, { w:'一样', r:'yíyàng', vi:'giống nhau, như nhau' },
    { w:'大', r:'dà', vi:'to' }, { w:'小', r:'xiǎo', vi:'nhỏ' }
  ],
  gram:[{ p:'A 比 B 大 và A 和 B 一样大', vi:'比 là so hơn, 一样 là so bằng. Vật đứng trước 比 luôn là vật hơn. Nghe chữ nào đứng đầu câu là biết.',
    ex:['公共汽车比汽车大。', 'Xe buýt to hơn ô tô con.'] }] },

{ id:'zh-30', lang:'zh', lv:'hsk3', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:42 }, { p:'tree', x:110, y:220, h:80 },
    { p:'tree', x:290, y:220, h:128 }
  ]},
  alt:'Hai cái cây: cây bên trái thấp, cây bên phải cao hơn hẳn.',
  opts:[
    { t:'右边的树比左边的高。', ok:true },
    { t:'左边的树比右边的高。', why:'Đổi chỗ trái phải quanh chữ 比.', trap:'trái / phải' },
    { t:'右边的树比左边的矮。', why:'Chỉ khác chữ cuối. 高 là cao, 矮 là thấp.', trap:'高 / 矮' },
    { t:'右边的树和左边的一样高。', why:'一样高 là cao bằng nhau. Hai cây trong tranh lệch nhau rõ.', trap:'so sánh bằng / hơn' }
  ],
  keys:[
    { w:'高', r:'gāo', vi:'cao' }, { w:'矮', r:'ǎi', vi:'thấp' },
    { w:'比', r:'bǐ', vi:'hơn' }, { w:'一样', r:'yíyàng', vi:'như nhau' }
  ],
  gram:[{ p:'…的 thay cho danh từ đã nhắc', vi:'«左边的» là rút gọn của «左边的树» — khỏi lặp lại chữ 树. Nghe chữ 的 đứng lẻ là biết nó đang thay cho danh từ vừa nói.',
    ex:['右边的树比左边的高。', 'Cây bên phải cao hơn cây bên trái.'] }] },

/* ========== 都 · 也 · 只有 ========== */
{ id:'zh-31', lang:'zh', lv:'hsk2', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:52, y:42 }, { p:'person', x:150, y:220, pose:'run' },
    { p:'person', x:260, y:220, pose:'run' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai người cùng đang chạy.',
  opts:[
    { t:'两个人都在跑步。', ok:true },
    { t:'两个人都在走路。', why:'跑步 là chạy, 走路 là đi bộ. Cả hai người đều đổ người về trước, chân xoạc rộng.', trap:'hành động gần giống' },
    { t:'只有一个人在跑步。', why:'只有 là chỉ có. Cả hai đều đang chạy.', trap:'只有 (chỉ có)' },
    { t:'两个人都不在跑步。', why:'Thêm mỗi chữ 不 sau 都.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'跑步', r:'pǎobù', vi:'chạy bộ' }, { w:'走路', r:'zǒulù', vi:'đi bộ' },
    { w:'都', r:'dōu', vi:'đều' }, { w:'只有', r:'zhǐyǒu', vi:'chỉ có' }
  ],
  gram:[{ p:'都 đứng trước động từ', vi:'都 luôn đứng sau chủ ngữ và trước động từ: 两个人都在跑步. Nghe được 都 là biết câu nói về tất cả.',
    ex:['两个人都在跑步。', 'Cả hai người đều đang chạy.'] }] },

{ id:'zh-32', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:140, y:220, pose:'carry' }, { p:'person', x:260, y:220, pose:'stand' },
    { p:'lamp', x:350, y:220 }
  ]},
  alt:'Người bên trái đang xách túi, người bên phải đứng tay không.',
  opts:[
    { t:'只有一个人拿着包。', ok:true },
    { t:'两个人都拿着包。', why:'都 là cả hai. Người bên phải tay không.', trap:'都 (đều)' },
    { t:'两个人都没拿包。', why:'Vẫn là 两个人都 nhưng thêm 没 — nghĩa lại khác hẳn câu trên.', trap:'phủ định chìm' },
    { t:'只有一个人拿着伞。', why:'Chỉ khác chữ cuối. Trong tranh là cái túi, không có ô.', trap:'vật không có' }
  ],
  keys:[
    { w:'只有', r:'zhǐyǒu', vi:'chỉ có' }, { w:'拿', r:'ná', vi:'cầm, xách' },
    { w:'着', r:'zhe', vi:'đang (trạng thái kéo dài)' }, { w:'包', r:'bāo', vi:'cái túi' }
  ],
  gram:[{ p:'拿着 — cầm và đang giữ', vi:'Chữ 着 biến hành động 拿 thành trạng thái đang cầm. Không có 着 thì chỉ là động tác nhấc lên.',
    ex:['只有一个人拿着包。', 'Chỉ một người đang xách túi.'] }] },

/* ========== ĐỒ VẬT TRONG NHÀ ========== */
{ id:'zh-33', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:50, y:96 }, { p:'window', x:180, y:30, view:'sun' },
    { p:'sofa', x:260, y:220 }
  ]},
  alt:'Trong phòng có một cánh cửa và một cửa sổ.',
  opts:[
    { t:'房间里有一个门和一个窗户。', ok:true },
    { t:'房间里有两个门。', why:'Trong phòng có hai thứ nhưng là hai thứ khác nhau: một cửa ra vào và một cửa sổ.', trap:'số lượng cùng loại' },
    { t:'房间里有一个门，没有窗户。', why:'没有 nằm ở nửa sau, lúc tai đã yên tâm.', trap:'有 / 没有' },
    { t:'房间里有一个床和一个窗户。', why:'门 mén và 床 chuáng khác hẳn nhau, nhưng câu lại giữ nguyên mọi chữ khác nên dễ trôi.', trap:'chủ thể' }
  ],
  keys:[
    { w:'房间', r:'fángjiān', vi:'căn phòng' }, { w:'门', r:'mén', vi:'cửa ra vào' },
    { w:'窗户', r:'chuānghu', vi:'cửa sổ' }, { w:'里', r:'lǐ', vi:'trong' }
  ],
  gram:[{ p:'房间里 — chữ 里 đứng sau', vi:'Tiếng Trung nói «phòng trong» chứ không nói «trong phòng»: 房间里. Từ chỉ vị trí luôn bám sau danh từ.',
    ex:['房间里有一个门和一个窗户。', 'Trong phòng có một cửa ra vào và một cửa sổ.'] }] },

{ id:'zh-34', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:170, y:220, w:130 }, { p:'key', x:170, y:156, s:1.4 },
    { p:'door', x:320, y:100 }
  ]},
  alt:'Chiếc chìa khoá đặt trên bàn, cánh cửa ở bên phải.',
  opts:[
    { t:'钥匙在桌子上。', ok:true },
    { t:'钥匙在门上。', why:'Cánh cửa có thật nhưng chìa khoá nằm trên mặt bàn.', trap:'đúng vật, sai vị trí' },
    { t:'桌子上有两把钥匙。', why:'Trên bàn chỉ có một chiếc.', trap:'số lượng' },
    { t:'钥匙不在桌子上。', why:'Thêm mỗi chữ 不.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'钥匙', r:'yàoshi', vi:'chìa khoá' }, { w:'门', r:'mén', vi:'cánh cửa' },
    { w:'把', r:'bǎ', vi:'chiếc (lượng từ cho chìa khoá, ghế)' }, { w:'桌子', r:'zhuōzi', vi:'cái bàn' }
  ],
  gram:[{ p:'一把钥匙', vi:'Chìa khoá, ghế, dao, ô đều dùng lượng từ 把 — những vật có chỗ để cầm nắm.',
    ex:['钥匙在桌子上。', 'Chìa khoá ở trên bàn.'] }] },

{ id:'zh-35', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:140, y:220 }, { p:'suitcase', x:260, y:220, s:1.2 },
    { p:'coat', x:330, y:180 }
  ]},
  alt:'Cái vali để dưới sàn cạnh giường, áo khoác treo trên móc.',
  opts:[
    { t:'箱子在床旁边。', ok:true },
    { t:'箱子在床上。', why:'Chỉ khác chữ cuối. Vali đặt dưới sàn.', trap:'vị trí' },
    { t:'箱子在窗旁边。', why:'床 chuáng và 窗 chuāng cùng âm khác thanh, mà trong tranh cũng không vẽ cửa sổ.', trap:'thanh điệu: 床 / 窗' },
    { t:'两个箱子在床旁边。', why:'Chỉ có một cái vali.', trap:'số lượng' }
  ],
  keys:[
    { w:'箱子', r:'xiāngzi', vi:'cái vali, thùng' }, { w:'床', r:'chuáng', vi:'cái giường' },
    { w:'旁边', r:'pángbiān', vi:'bên cạnh' }, { w:'外套', r:'wàitào', vi:'áo khoác' }
  ],
  gram:[{ p:'旁边 — bên cạnh', vi:'旁边 chỉ nói là ở cạnh, không nói rõ trái hay phải. Nếu cần rõ thì dùng 左边 hoặc 右边.',
    ex:['箱子在床旁边。', 'Cái vali để cạnh giường.'] }] },

/* ========== ĂN UỐNG ========== */
{ id:'zh-36', lang:'zh', lv:'hsk1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:150 }, { p:'bowl', x:150, y:158 },
    { p:'chopsticks', x:205, y:158, s:1.2 }, { p:'cup', x:245, y:158 }
  ]},
  alt:'Trên bàn có một cái bát, một đôi đũa và một cái cốc.',
  opts:[
    { t:'桌子上有一个碗、一双筷子和一杯水。', ok:true },
    { t:'桌子上有两个碗、一双筷子和一杯水。', why:'Chỉ đổi con số đầu tiên. Trên bàn có một cái bát.', trap:'số lượng' },
    { t:'桌子上有一个碗、两双筷子和一杯水。', why:'Con số bị đổi ở giữa câu, chỗ tai dễ lơ là nhất.', trap:'số lượng' },
    { t:'桌子上有一个碗和一双筷子。', why:'Câu này bỏ mất cái cốc. Trong bốn câu chỉ có một câu tả đủ.', trap:'tả thiếu' }
  ],
  keys:[
    { w:'碗', r:'wǎn', vi:'cái bát' }, { w:'筷子', r:'kuàizi', vi:'đôi đũa' },
    { w:'双', r:'shuāng', vi:'đôi (lượng từ cho vật đi cặp)' }, { w:'杯', r:'bēi', vi:'cốc' }
  ],
  gram:[{ p:'一双筷子', vi:'Những thứ đi thành cặp — đũa, giày, tất — dùng lượng từ 双. Không nói «一个筷子».',
    ex:['桌子上有一双筷子。', 'Trên bàn có một đôi đũa.'] }] },

{ id:'zh-37', lang:'zh', lv:'hsk2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:130 }, { p:'cup', x:200, y:158 },
    { p:'person', x:110, y:220, pose:'drink' }, { p:'window', x:290, y:28, view:'sun' }
  ]},
  alt:'Một người đang đưa cốc lên uống, trên bàn còn một cốc nữa.',
  opts:[
    { t:'他在喝水。', ok:true },
    { t:'他在睡觉。', why:'水 shuǐ và 睡 shuì cùng âm khác thanh — nhưng nhìn tranh thì anh ấy đang đứng đưa cốc lên miệng.', trap:'thanh điệu: 水 / 睡' },
    { t:'他要喝水。', why:'在 là đang làm, 要 là sắp làm. Cốc đã đưa tới miệng rồi.', trap:'thì: đang / sắp' },
    { t:'他喝完水了。', why:'喝完…了 là uống xong rồi. Cốc vẫn đang trên tay.', trap:'thì: đã xong' }
  ],
  keys:[
    { w:'喝', r:'hē', vi:'uống' }, { w:'水', r:'shuǐ', vi:'nước' },
    { w:'睡觉', r:'shuì jiào', vi:'ngủ' }, { w:'完', r:'wán', vi:'xong' }
  ],
  gram:[{ p:'在… · 要… · …完了', vi:'Ba mốc của một việc: 要喝 sắp uống, 在喝 đang uống, 喝完了 uống xong. Tranh chỉ đúng một mốc.',
    ex:['他在喝水。', 'Anh ấy đang uống nước.'] }] },

{ id:'zh-38', lang:'zh', lv:'hsk2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:70, y:220 }, { p:'table', x:220, y:220, w:130 },
    { p:'egg', x:195, y:158 }, { p:'egg', x:225, y:158 }, { p:'bowl', x:265, y:158 }
  ]},
  alt:'Hai quả trứng và một cái bát đặt trên bàn, tủ lạnh ở bên trái.',
  opts:[
    { t:'桌子上有两个鸡蛋。', ok:true },
    { t:'冰箱里有两个鸡蛋。', why:'Tủ lạnh có thật nhưng hai quả trứng nằm trên mặt bàn.', trap:'giới từ + nơi chốn' },
    { t:'碗里有两个鸡蛋。', why:'Cái bát có thật nhưng trứng đặt bên cạnh, không ở trong bát.', trap:'đúng vật, sai vị trí' },
    { t:'桌子上有十个鸡蛋。', why:'两 và 十 đều ngắn. Trên bàn có hai quả.', trap:'số lượng' }
  ],
  keys:[
    { w:'鸡蛋', r:'jīdàn', vi:'quả trứng gà' }, { w:'冰箱', r:'bīngxiāng', vi:'tủ lạnh' },
    { w:'碗', r:'wǎn', vi:'cái bát' }, { w:'里', r:'lǐ', vi:'ở trong' }
  ],
  gram:[{ p:'碗里 và 桌子上', vi:'里 là bên trong vật đựng, 上 là trên bề mặt. Khi tranh có cả bát lẫn bàn thì đây là bẫy chắc chắn có.',
    ex:['桌子上有两个鸡蛋。', 'Trên bàn có hai quả trứng.'] }] },

/* ========== MUA BÁN ========== */
{ id:'zh-39', lang:'zh', lv:'hsk2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:170, y:220, w:140 }, { p:'apple', x:140, y:158 },
    { p:'apple', x:172, y:158 }, { p:'apple', x:204, y:158 },
    { p:'tag', x:310, y:126, text:'15' }
  ]},
  alt:'Ba quả táo trên bàn, bảng giá ghi số 15.',
  opts:[
    { t:'三个苹果十五块。', ok:true },
    { t:'三个苹果五十块。', why:'十五 là 15, 五十 là 50 — chỉ đảo thứ tự hai chữ.', trap:'đảo số: 十五 / 五十' },
    { t:'十个苹果十五块。', why:'三 sān và 十 shí đều ngắn. Trên bàn có ba quả.', trap:'gần âm: 三 / 十' },
    { t:'一个苹果十五块。', why:'Chỉ đổi con số đầu. Câu này nghĩa là mỗi quả 15 đồng.', trap:'giá cả lô / giá mỗi cái' }
  ],
  keys:[
    { w:'十五', r:'shíwǔ', vi:'mười lăm' }, { w:'五十', r:'wǔshí', vi:'năm mươi' },
    { w:'块', r:'kuài', vi:'đồng (tiền)' }, { w:'苹果', r:'píngguǒ', vi:'quả táo' }
  ],
  gram:[{ p:'十五 và 五十', vi:'Cùng hai chữ, chỉ đảo thứ tự: 十五 là 10+5, 五十 là 5×10. Nghe chữ nào đứng trước là ra ngay.',
    ex:['三个苹果十五块。', 'Ba quả táo mười lăm đồng.'] }] },

{ id:'zh-40', lang:'zh', lv:'hsk3', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:36, y:44, w:86, h:116, rows:4 }, { p:'tag', x:210, y:126, text:'60' },
    { p:'coat', x:300, y:180 }, { p:'person', x:350, y:220, pose:'stand' }
  ]},
  alt:'Chiếc áo khoác treo bên phải, bảng giá ghi số 60.',
  opts:[
    { t:'这件外套六十块，不是十六块。', ok:true },
    { t:'这件外套十六块，不是六十块。', why:'Đổi chỗ hai con số. Bảng giá ghi 60.', trap:'đảo số: 十六 / 六十' },
    { t:'这件外套六十块，不是十五块。', why:'Vế đầu đúng nên tai buông. Nhưng vế sau của câu đúng nói về 16.', trap:'đúng một nửa' },
    { t:'这些外套六十块，不是十六块。', why:'这件 là chiếc này, 这些 là những chiếc này. Trong tranh treo một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'六十', r:'liùshí', vi:'sáu mươi' }, { w:'十六', r:'shíliù', vi:'mười sáu' },
    { w:'不是', r:'bú shì', vi:'không phải là' }, { w:'外套', r:'wàitào', vi:'áo khoác' }
  ],
  gram:[{ p:'A，不是 B', vi:'Kiểu câu «là A chứ không phải B» cho hai thông tin một lúc. Phải nghe đủ cả hai vế mới chọn được.',
    ex:['这件外套六十块，不是十六块。', 'Chiếc áo này sáu mươi đồng chứ không phải mười sáu.'] }] },

/* ========== THỜI GIAN ========== */
{ id:'zh-41', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'7:15', r:30 }, { p:'table', x:230, y:220, w:120 },
    { p:'bread', x:230, y:158 }, { p:'person', x:330, y:220, pose:'stand' }
  ]},
  alt:'Đồng hồ chỉ 7 giờ 15, trên bàn có bánh mì.',
  opts:[
    { t:'现在七点一刻。', ok:true },
    { t:'现在七点四十五。', why:'Kim phút đang ở số 3, tức là 15 phút chứ không phải 45.', trap:'giờ: phút' },
    { t:'现在十点一刻。', why:'七 qī và 十 shí đều ngắn. Kim ngắn đang ở số 7.', trap:'gần âm: 七 / 十' },
    { t:'现在差一刻七点。', why:'差一刻七点 là 6:45. Chữ 差一刻 phải đứng TRƯỚC giờ mới có nghĩa kém.', trap:'đảo trật tự: 差一刻' }
  ],
  keys:[
    { w:'一刻', r:'yí kè', vi:'mười lăm phút' }, { w:'七', r:'qī', vi:'bảy' },
    { w:'十', r:'shí', vi:'mười' }, { w:'分', r:'fēn', vi:'phút' }
  ],
  gram:[{ p:'七点一刻 và 差一刻七点', vi:'Cùng mấy chữ ấy nhưng đảo vị trí là lệch nửa tiếng: 七点一刻 là 7:15, 差一刻七点 là 6:45.',
    ex:['现在七点一刻。', 'Bây giờ là bảy giờ mười lăm.'] }] },

{ id:'zh-42', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:64, y:70, time:'6:00', r:30 }, { p:'window', x:250, y:30, view:'sun' },
    { p:'bed', x:180, y:220 }, { p:'sleeper', x:188, y:180 }
  ]},
  alt:'Trời đã sáng, đồng hồ chỉ 6 giờ, một người vẫn đang ngủ.',
  opts:[
    { t:'六点了，他还在睡觉。', ok:true },
    { t:'六点了，他已经起床了。', why:'还在 là vẫn đang, 已经…了 là đã xong. Người trong tranh vẫn nằm.', trap:'还 / 已经' },
    { t:'九点了，他还在睡觉。', why:'六 liù và 九 jiǔ đều ngắn. Kim ngắn đang ở số 6.', trap:'gần âm: 六 / 九' },
    { t:'六点了，他还在看书。', why:'Vế đầu đúng. Nhưng anh ấy nhắm mắt nằm chứ không cầm sách.', trap:'đúng một nửa' }
  ],
  keys:[
    { w:'还', r:'hái', vi:'vẫn còn' }, { w:'已经', r:'yǐjīng', vi:'đã… rồi' },
    { w:'起床', r:'qǐchuáng', vi:'ngủ dậy' }, { w:'睡觉', r:'shuì jiào', vi:'ngủ' }
  ],
  gram:[{ p:'还在… và 已经…了', vi:'还在 nói việc vẫn kéo dài, 已经…了 nói việc đã xong. Hai cụm đứng cùng một chỗ trong câu nhưng nghĩa ngược nhau.',
    ex:['六点了，他还在睡觉。', 'Sáu giờ rồi mà anh ấy vẫn đang ngủ.'] }] },

/* ========== HỌC TẬP ========== */
{ id:'zh-43', lang:'zh', lv:'hsk2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'shelf', x:300, y:120, w:80, h:94, rows:3 },
    { p:'person', x:206, y:220, pose:'point', flip:true }
  ]},
  alt:'Một người đứng cạnh bảng, tay chỉ về phía bảng; kệ sách ở bên phải.',
  opts:[
    { t:'老师指着黑板。', ok:true },
    { t:'老师指着书架。', why:'Kệ sách có thật nhưng ở phía bên kia. Cánh tay chỉ chếch lên về phía bảng.', trap:'đúng vật, sai hướng' },
    { t:'学生指着黑板。', why:'老师 là giáo viên, 学生 là học sinh — tranh vẽ người đứng trước bảng chỉ bài.', trap:'chủ thể' },
    { t:'老师没指黑板。', why:'Thêm mỗi chữ 没 vào giữa câu ngắn.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'指', r:'zhǐ', vi:'chỉ tay' }, { w:'黑板', r:'hēibǎn', vi:'bảng đen' },
    { w:'书架', r:'shūjià', vi:'kệ sách' }, { w:'老师', r:'lǎoshī', vi:'giáo viên' }
  ],
  gram:[{ p:'教室 jiàoshì và 教师 jiàoshī', vi:'Hai từ chỉ khác thanh ở chữ sau: 教室 là phòng học, 教师 là người dạy. Đây là cặp rất dễ lẫn khi nghe nhanh.',
    ex:['老师指着黑板。', 'Cô giáo đang chỉ vào bảng.'] }] },

{ id:'zh-44', lang:'zh', lv:'hsk2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'shelf', x:250, y:110, w:110, h:104, rows:2 }, { p:'desk', x:110, y:220 },
    { p:'book', x:110, y:158, open:true }
  ]},
  alt:'Một cuốn sách đang mở đặt trên bàn, kệ sách ở bên phải.',
  opts:[
    { t:'桌子上的书是打开的。', ok:true },
    { t:'桌子上的书是合着的。', why:'Cuốn sách trong tranh xoè hai trang ra hai bên.', trap:'trạng thái ngược' },
    { t:'书架上的书是打开的。', why:'Kệ sách có thật và có sách thật, nhưng cuốn đang mở nằm trên bàn.', trap:'đúng vật, sai vị trí' },
    { t:'桌子上的书不是打开的。', why:'Thêm mỗi chữ 不 vào giữa.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'打开', r:'dǎkāi', vi:'mở ra' }, { w:'合', r:'hé', vi:'khép lại' },
    { w:'书架', r:'shūjià', vi:'kệ sách' }, { w:'的', r:'de', vi:'trợ từ định ngữ' }
  ],
  gram:[{ p:'…的书 — phần đứng trước xác định cuốn nào', vi:'«桌子上的书» nghĩa là cuốn sách ở trên bàn. Nghe hết cụm định ngữ rồi mới xét vị ngữ.',
    ex:['桌子上的书是打开的。', 'Cuốn sách trên bàn đang mở.'] }] },

/* ========== NGOÀI TRỜI ========== */
{ id:'zh-45', lang:'zh', lv:'hsk1', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:52, y:42 }, { p:'bicycle', x:160, y:220 },
    { p:'person', x:250, y:220, pose:'stand' }, { p:'bus', x:340, y:220, w:88 }
  ]},
  alt:'Chiếc xe đạp bên trái, một người đứng ở giữa, xe buýt bên phải.',
  opts:[
    { t:'他站在自行车和公共汽车中间。', ok:true },
    { t:'他站在自行车和汽车中间。', why:'Bên phải là xe buýt 公共汽车, không phải ô tô con 汽车. Hai từ chỉ khác ba chữ đầu.', trap:'gần nghĩa: 汽车 / 公共汽车' },
    { t:'他坐在自行车和公共汽车中间。', why:'站 là đứng, 坐 là ngồi.', trap:'hành động' },
    { t:'自行车在他和公共汽车中间。', why:'Đổi chỗ chủ thể. Người mới là kẻ đứng giữa.', trap:'hoán chủ thể' }
  ],
  keys:[
    { w:'自行车', r:'zìxíngchē', vi:'xe đạp' }, { w:'汽车', r:'qìchē', vi:'ô tô con' },
    { w:'公共汽车', r:'gōnggòng qìchē', vi:'xe buýt' }, { w:'中间', r:'zhōngjiān', vi:'ở giữa' }
  ],
  gram:[{ p:'汽车 và 公共汽车', vi:'公共 nghĩa là công cộng. Thiếu hai chữ này là thành ô tô con. Đuôi 汽车 giống nhau nên phải bắt phần đầu.',
    ex:['他站在自行车和公共汽车中间。', 'Anh ấy đứng giữa xe đạp và xe buýt.'] }] },

{ id:'zh-46', lang:'zh', lv:'hsk2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:44 }, { p:'sign', x:170, y:220, dir:'left' },
    { p:'person', x:260, y:220, pose:'walk' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Biển chỉ đường mũi tên hướng sang trái, một người đang đi bộ.',
  opts:[
    { t:'路牌指着左边。', ok:true },
    { t:'路牌指着右边。', why:'左 và 右 đều một âm tiết nằm cuối câu, chỗ tai dễ buông nhất.', trap:'trái / phải' },
    { t:'两个路牌指着左边。', why:'Chỉ có một tấm biển.', trap:'số lượng' },
    { t:'路牌没指左边。', why:'Thêm mỗi chữ 没 vào giữa.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'路牌', r:'lùpái', vi:'biển chỉ đường' }, { w:'左边', r:'zuǒbian', vi:'bên trái' },
    { w:'右边', r:'yòubian', vi:'bên phải' }, { w:'指', r:'zhǐ', vi:'chỉ về phía' }
  ],
  gram:[{ p:'指着 — đang chỉ về hướng nào', vi:'Chữ 着 cho biết mũi tên đang ở trạng thái chỉ về một hướng. Hướng nằm ở chữ cuối câu.',
    ex:['路牌指着左边。', 'Biển chỉ đường chỉ sang trái.'] }] },

{ id:'zh-47', lang:'zh', lv:'hsk3', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:42 }, { p:'rain', x:80, y:62, n:6 },
    { p:'bus', x:180, y:220, w:110 }, { p:'person', x:310, y:220, pose:'walk' },
    { p:'umbrella', x:316, y:100, open:true, s:1.2 }
  ]},
  alt:'Trời mưa, xe buýt đã tới, một người che ô đi bộ ở bên phải.',
  opts:[
    { t:'因为下雨，所以她打着伞。', ok:true },
    { t:'虽然下雨，但是她没打伞。', why:'Vế sau bị đổi hẳn: cô ấy đang che ô rõ ràng.', trap:'phủ định chìm' },
    { t:'因为下雪，所以她打着伞。', why:'Vế sau đúng nên tai buông. Trong tranh là những vạch xiên, tức là mưa.', trap:'thời tiết' },
    { t:'因为下雨，所以她坐公共汽车。', why:'Xe buýt có thật nhưng cô ấy đang đi bộ ngoài đường, không lên xe.', trap:'đúng vật, sai hành động' }
  ],
  keys:[
    { w:'因为', r:'yīnwèi', vi:'vì, bởi vì' }, { w:'虽然', r:'suīrán', vi:'tuy, mặc dù' },
    { w:'打伞', r:'dǎ sǎn', vi:'che ô' }, { w:'坐', r:'zuò', vi:'ngồi; đi (xe)' }
  ],
  gram:[{ p:'因为…所以… và 虽然…但是…', vi:'Cặp đầu nối nguyên nhân với kết quả thuận chiều, cặp sau báo hiệu vế nghịch. Nghe được cặp liên từ là đoán trước được hướng của vế sau.',
    ex:['因为下雨，所以她打着伞。', 'Vì trời mưa nên cô ấy che ô.'] }] },

/* ========== THÚ NUÔI ========== */
{ id:'zh-48', lang:'zh', lv:'hsk1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:150, y:220 }, { p:'cat', x:150, y:174, pose:'sit', s:0.8 },
    { p:'cat', x:270, y:220, pose:'lie', s:0.9 }, { p:'lamp', x:340, y:220 }
  ]},
  alt:'Một con mèo ngồi trên ghế sofa, một con mèo khác nằm dưới sàn.',
  opts:[
    { t:'一只猫在沙发上，另一只在地上。', ok:true },
    { t:'两只猫都在沙发上。', why:'都 là cả hai. Một con nằm dưới sàn.', trap:'都 (đều)' },
    { t:'一只猫在沙发上，另一只也在沙发上。', why:'也 là cũng — chỉ khác mấy chữ cuối.', trap:'phủ định chìm' },
    { t:'一只狗在沙发上，另一只在地上。', why:'Chỉ khác chữ thứ ba. Cả hai con đều là mèo.', trap:'chủ thể' }
  ],
  keys:[
    { w:'地上', r:'dìshàng', vi:'dưới sàn, dưới đất' }, { w:'另一只', r:'lìng yì zhī', vi:'con còn lại' },
    { w:'都', r:'dōu', vi:'đều' }, { w:'也', r:'yě', vi:'cũng' }
  ],
  gram:[{ p:'一只… 另一只…', vi:'Khi có đúng hai con vật thì dùng cặp này. Nghe thấy 都 hoặc 也 là câu đang nói hai con giống nhau.',
    ex:['一只猫在沙发上，另一只在地上。', 'Một con mèo trên ghế, con kia dưới sàn.'] }] },

{ id:'zh-49', lang:'zh', lv:'hsk2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'tree', x:120, y:220, h:96 },
    { p:'tree', x:210, y:220, h:96 }, { p:'bird', x:310, y:218 }
  ]},
  alt:'Hai cái cây đứng cạnh nhau, một con chim đậu dưới đất.',
  opts:[
    { t:'有两棵树和一只鸟。', ok:true },
    { t:'有两棵树和一只猫。', why:'鸟 niǎo và 猫 māo đều là một âm tiết ở cuối câu. Trong tranh là con chim.', trap:'chủ thể' },
    { t:'有两本书和一只鸟。', why:'树 shù và 书 shū cùng âm khác thanh, mà lượng từ cũng đổi từ 棵 sang 本.', trap:'thanh điệu: 书 / 树' },
    { t:'鸟在树上。', why:'Con chim đứng dưới đất chứ không đậu trên cây.', trap:'vị trí' }
  ],
  keys:[
    { w:'棵', r:'kē', vi:'cây (lượng từ)' }, { w:'鸟', r:'niǎo', vi:'con chim' },
    { w:'树', r:'shù', vi:'cái cây' }, { w:'书', r:'shū', vi:'cuốn sách' }
  ],
  gram:[{ p:'两棵树 và 两本书', vi:'Lượng từ khác nhau hẳn nên là manh mối chắc hơn cả thanh điệu: nghe 棵 là cây, nghe 本 là sách.',
    ex:['有两棵树和一只鸟。', 'Có hai cái cây và một con chim.'] }] },

{ id:'zh-50', lang:'zh', lv:'hsk3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:170, y:220, w:130 }, { p:'laptop', x:170, y:158 },
    { p:'person', x:290, y:220, pose:'stand' }, { p:'bag', x:350, y:220 }
  ]},
  alt:'Cái laptop đang mở trên bàn, một người đứng cách đó một quãng.',
  opts:[
    { t:'电脑开着，但是没有人用。', ok:true },
    { t:'电脑开着，有人正在用。', why:'没有人 và 有人 chỉ khác hai chữ đầu của vế sau, mà nghĩa ngược hẳn.', trap:'有 / 没有' },
    { t:'电脑关着，没有人用。', why:'Màn hình đang dựng lên, tức là đang mở.', trap:'trạng thái ngược' },
    { t:'电视开着，但是没有人看。', why:'电脑 là máy tính, 电视 là tivi — chỉ khác chữ thứ hai. Trong tranh không có tivi.', trap:'gần âm: 电脑 / 电视' }
  ],
  keys:[
    { w:'电脑', r:'diànnǎo', vi:'máy tính' }, { w:'电视', r:'diànshì', vi:'tivi' },
    { w:'没有人', r:'méiyǒu rén', vi:'không có ai' }, { w:'但是', r:'dànshì', vi:'nhưng' }
  ],
  gram:[{ p:'电脑 · 电视 · 电话', vi:'Ba từ cùng bắt đầu bằng 电 (điện): 电脑 máy tính, 电视 tivi, 电话 điện thoại. Chữ thứ hai mới quyết định vật gì.',
    ex:['电脑开着，但是没有人用。', 'Máy tính đang mở nhưng không ai dùng.'] }] }

  );
})();
