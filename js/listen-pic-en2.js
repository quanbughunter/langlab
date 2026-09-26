/* ============================================================
   LangLab — NGHE & CHỌN CÂU ĐÚNG VỚI TRANH · mở rộng tiếng Anh
   ------------------------------------------------------------
   Đẩy thêm vào mảng LISTEN_PIC của js/listen-pic.js (nạp SAU tệp đó).

   Nguyên tắc của bộ này: KHÓ Ở CHỖ PHÂN BIỆT, KHÔNG KHÓ Ở TỪ.
   Toàn bộ nằm dưới mức B2, dùng vốn từ đời thường. Cái khó nằm ở chỗ
   câu sai chỉ lệch câu đúng một mẩu rất nhỏ:

     · số gần âm      thirteen / thirty · fifteen / fifty · sixteen / sixty
     · giới từ        in / on / at / under / behind / in front of / between
     · số ít – số nhiều   chỉ khác mỗi âm -s và is/are
     · phủ định chìm  is / isn't · some / any · someone / no one
     · thì            is opening / has opened / is going to open
     · giờ            to / past, lệch một giờ
     · thứ tự         first / second / third from the left
     · so sánh        taller than / as tall as / not as tall as
     · hoán chủ thể   đổi chỗ hai nhân vật trong cùng một câu

   Mỗi câu sai vẫn chỉ sai ĐÚNG MỘT chi tiết, và ba câu nhiễu trong
   cùng một bài luôn khác kiểu nhau.

   Nội dung do LangLab tự biên soạn.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ================= PHÒNG KHÁCH ================= */
{ id:'en-16', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:150, y:220 }, { p:'cat', x:150, y:174, pose:'sit', s:0.8 },
    { p:'rug', x:250, y:220, w:110 }, { p:'dog', x:250, y:216, s:0.8 },
    { p:'lamp', x:330, y:220 }
  ]},
  alt:'Con mèo ngồi trên ghế sofa, con chó nằm trên tấm thảm bên phải, cây đèn đứng ở góc.',
  opts:[
    { t:'The cat is on the sofa and the dog is on the rug.', ok:true },
    { t:'The dog is on the sofa and the cat is on the rug.', why:'Đúng từng chữ một, chỉ đổi chỗ hai con. Nghe tới đâu phải gắn ngay tới đó, đừng đợi hết câu.', trap:'hoán chủ thể' },
    { t:'The cat is on the sofa and the dog is under the rug.', why:'Vế đầu đúng nên tai dễ buông. Con chó nằm TRÊN thảm, không phải dưới.', trap:'giới từ' },
    { t:'The cat is on the sofa and the dogs are on the rug.', why:'Chỉ khác mỗi âm -s và is/are: trong tranh có một con chó, không phải nhiều con.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'sofa', r:'/ˈsəʊfə/', vi:'ghế sofa' }, { w:'rug', r:'/rʌɡ/', vi:'tấm thảm' },
    { w:'lamp', r:'/læmp/', vi:'cây đèn' }, { w:'on', r:'/ɒn/', vi:'ở trên' }
  ],
  gram:[{ p:'Câu hai vế nối bằng and', vi:'Cả hai vế phải cùng đúng. Bẫy hay dùng nhất là để vế đầu chuẩn rồi đổi một chữ ở vế sau.',
    ex:['The cat is on the sofa and the dog is on the rug.', 'Con mèo trên ghế sofa còn con chó trên tấm thảm.'] }] },

{ id:'en-17', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:60, y:34, w:70, h:54 }, { p:'clock', x:250, y:66, time:'4:00', r:28 },
    { p:'sofa', x:180, y:220 }, { p:'plant', x:320, y:220, s:1.4 }
  ]},
  alt:'Trên tường có một bức tranh bên trái và một cái đồng hồ chỉ 4 giờ bên phải.',
  opts:[
    { t:'There is a picture on the wall and a clock on the wall.', why:'Đúng nội dung nhưng thừa: người bản ngữ gộp lại thành «a picture and a clock on the wall».', trap:'lặp thừa' },
    { t:'There is a picture and a clock on the wall.', ok:true },
    { t:'There are two pictures on the wall.', why:'Trên tường có hai vật nhưng là hai vật KHÁC nhau — một tranh và một đồng hồ.', trap:'số lượng cùng loại' },
    { t:'There is a picture and a clock on the floor.', why:'Chỉ khác mỗi từ cuối. wall là tường, floor là sàn.', trap:'gần nghĩa: wall / floor' }
  ],
  keys:[
    { w:'picture', r:'/ˈpɪktʃə/', vi:'bức tranh, bức ảnh' }, { w:'wall', r:'/wɔːl/', vi:'bức tường' },
    { w:'floor', r:'/flɔː/', vi:'sàn nhà' }, { w:'clock', r:'/klɒk/', vi:'đồng hồ treo' }
  ],
  gram:[{ p:'Liệt kê hai vật cùng một chỗ', vi:'Nói «a picture and a clock on the wall» — chỉ cần một lần «on the wall» ở cuối, không lặp lại.',
    ex:['There is a picture and a clock on the wall.', 'Trên tường có một bức tranh và một cái đồng hồ.'] }] },

{ id:'en-18', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'tv', x:110, y:220 }, { p:'sofa', x:240, y:220 },
    { p:'person', x:240, y:220, pose:'sit', s:0.85 }, { p:'clock', x:330, y:60, time:'7:45', r:26 }
  ]},
  alt:'Một người ngồi trên ghế sofa, cái tivi ở bên trái, đồng hồ chỉ 7 giờ 45.',
  opts:[
    { t:'It is a quarter to eight and he is sitting on the sofa.', ok:true },
    { t:'It is a quarter to seven and he is sitting on the sofa.', why:'«a quarter to seven» là 6:45. Kim ngắn đang nhích về số 8 chứ không phải số 7.', trap:'giờ: lệch một giờ' },
    { t:'It is a quarter past eight and he is sitting on the sofa.', why:'past là hơn, to là kém. 7:45 phải là «to eight».', trap:'giờ: to / past' },
    { t:'It is a quarter to eight and he is sitting on the floor.', why:'Vế giờ đúng hoàn toàn nên rất dễ gật. Nhưng người trong tranh ngồi trên ghế sofa.', trap:'đúng một nửa' }
  ],
  keys:[
    { w:'quarter', r:'/ˈkwɔːtə/', vi:'mười lăm phút' }, { w:'to', r:'/tuː/', vi:'kém (giờ)' },
    { w:'past', r:'/pɑːst/', vi:'hơn (giờ)' }, { w:'sit', r:'/sɪt/', vi:'ngồi' }
  ],
  gram:[{ p:'a quarter to / a quarter past', vi:'to là đếm ngược tới giờ sau nên giờ nói ra lớn hơn giờ trên kim ngắn. 7:45 là a quarter to EIGHT chứ không phải seven.',
    ex:['It is a quarter to eight.', 'Bây giờ là tám giờ kém mười lăm.'] }] },

{ id:'en-19', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:70, w:84, h:120, rows:4 }, { p:'lamp', x:190, y:220 },
    { p:'desk', x:290, y:220 }, { p:'laptop', x:290, y:160 }
  ]},
  alt:'Kệ sách bên trái, cây đèn đứng ở giữa, bàn có laptop ở bên phải.',
  opts:[
    { t:'The lamp is between the bookshelf and the desk.', ok:true },
    { t:'The lamp is behind the bookshelf and the desk.', why:'behind là phía sau. Cây đèn đứng ngang hàng, ở khoảng giữa hai vật.', trap:'giới từ' },
    { t:'The lamp is between the bookshelf and the door.', why:'Chỉ khác mỗi từ cuối. Trong tranh không có cửa, vật bên phải là cái bàn.', trap:'vật không có' },
    { t:'The lamps are between the bookshelf and the desk.', why:'Chỉ thêm mỗi âm -s. Trong tranh chỉ có một cây đèn.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa hai vật' }, { w:'behind', r:'/bɪˈhaɪnd/', vi:'phía sau' },
    { w:'desk', r:'/desk/', vi:'bàn làm việc' }, { w:'lamp', r:'/læmp/', vi:'cây đèn' }
  ],
  gram:[{ p:'between A and B', vi:'between luôn cần đủ hai mốc. Nghe kỹ mốc thứ hai, vì bẫy hay thay đúng một mốc.',
    ex:['The lamp is between the bookshelf and the desk.', 'Cây đèn ở giữa kệ sách và cái bàn.'] }] },

{ id:'en-20', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'cup', x:140, y:158 },
    { p:'cup', x:180, y:158 }, { p:'cup', x:220, y:158 }, { p:'window', x:290, y:30, view:'sun' }
  ]},
  alt:'Trên bàn có ba cái cốc xếp thành hàng.',
  opts:[
    { t:'There are three cups on the table.', ok:true },
    { t:'There are three cups under the table.', why:'Chỉ khác mỗi giới từ. Ba cái cốc đặt trên mặt bàn.', trap:'giới từ' },
    { t:'There is a tree on the table.', why:'Bẫy gần âm: three /θriː/ bắt đầu bằng âm gió, tree /triː/ bắt đầu bằng /t/. Trong tranh không có cây nào.', trap:'gần âm: three / tree' },
    { t:'There are thirteen cups on the table.', why:'three và thirteen dễ lẫn khi nghe nhanh. Trên bàn chỉ có ba cái.', trap:'gần âm: three / thirteen' }
  ],
  keys:[
    { w:'three', r:'/θriː/', vi:'ba' }, { w:'tree', r:'/triː/', vi:'cái cây' },
    { w:'thirteen', r:'/ˌθɜːˈtiːn/', vi:'mười ba' }, { w:'cup', r:'/kʌp/', vi:'cái cốc' }
  ],
  gram:[{ p:'three và tree khác nhau ở âm đầu', vi:'three bắt đầu bằng âm /θ/ — lưỡi chạm nhẹ răng trên, hơi thoát ra. tree bắt đầu bằng /t/ dứt khoát. Đây là cặp người Việt hay lẫn nhất.',
    ex:['There are three cups on the table.', 'Trên bàn có ba cái cốc.'] }] },

/* ================= BẾP ================= */
{ id:'en-21', lang:'en', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:56, y:220 }, { p:'cupboard', x:130, y:220 },
    { p:'table', x:250, y:220, w:120 }, { p:'egg', x:230, y:158 }, { p:'egg', x:258, y:158 },
    { p:'window', x:300, y:26, view:'sun' }
  ]},
  alt:'Trong bếp có tủ lạnh, tủ bếp, và hai quả trứng đặt trên bàn.',
  opts:[
    { t:'There are two eggs on the table.', ok:true },
    { t:'There are two eggs in the fridge.', why:'Chỉ khác chỗ để. Hai quả trứng nằm trên mặt bàn, không ở trong tủ lạnh.', trap:'giới từ + nơi chốn' },
    { t:'There is an egg on the table.', why:'Chỉ khác mỗi is/are và âm -s. Trong tranh có hai quả.', trap:'số ít / số nhiều' },
    { t:'There are two eggs on the tables.', why:'Thêm mỗi âm -s ở cuối. Trong bếp chỉ có một cái bàn.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'egg', r:'/eɡ/', vi:'quả trứng' }, { w:'fridge', r:'/frɪdʒ/', vi:'tủ lạnh' },
    { w:'in', r:'/ɪn/', vi:'ở trong' }, { w:'on', r:'/ɒn/', vi:'ở trên' }
  ],
  gram:[{ p:'in và on', vi:'in là ở BÊN TRONG một vật kín (in the fridge, in the box). on là nằm TRÊN một bề mặt (on the table). Đổi một chữ là đổi hẳn chỗ.',
    ex:['There are two eggs on the table.', 'Trên bàn có hai quả trứng.'] }] },

{ id:'en-22', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'stove', x:120, y:220 }, { p:'person', x:186, y:220, pose:'cook', flip:true },
    { p:'sink', x:290, y:220 }, { p:'clock', x:330, y:60, time:'6:30', r:24 }
  ]},
  alt:'Nam đứng nấu bên bếp lò, bồn rửa ở bên phải, đồng hồ chỉ 6 giờ 30.',
  opts:[
    { t:'Nam is washing the dishes.', why:'Bồn rửa có thật trong tranh nên câu nghe rất hợp. Nhưng Nam đứng quay về phía bếp lò.', trap:'đúng vật, sai hành động' },
    { t:'Nam is cooking dinner at half past six.', ok:true },
    { t:'Nam is cooking dinner at half past seven.', why:'Vế trước đúng hoàn toàn, chỉ lệch một giờ ở cuối câu — chỗ tai đã lơ là.', trap:'giờ: lệch một giờ' },
    { t:'Nam isn\'t cooking dinner at half past six.', why:'Chỉ thêm mỗi n\'t. Phủ định nằm lọt giữa câu nên rất dễ nghe sót.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'cook', r:'/kʊk/', vi:'nấu ăn' }, { w:'wash', r:'/wɒʃ/', vi:'rửa' },
    { w:'half past', r:'/hɑːf pɑːst/', vi:'rưỡi, ba mươi phút' }, { w:'dinner', r:'/ˈdɪnə/', vi:'bữa tối' }
  ],
  gram:[{ p:'isn\'t nằm chìm giữa câu', vi:'Phủ định tiếng Anh hay bị nuốt: «isn\'t» đọc nhanh gần như «izn». Nghe thấy âm /n/ sau is là phải dừng lại nghĩ.',
    ex:['Nam is cooking dinner at half past six.', 'Nam đang nấu bữa tối lúc sáu giờ rưỡi.'] }] },

{ id:'en-23', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:160 }, { p:'bowl', x:140, y:158 },
    { p:'plate', x:196, y:158 }, { p:'bread', x:196, y:150 }, { p:'glass', x:250, y:158 }
  ]},
  alt:'Trên bàn có một cái bát, một cái đĩa có bánh mì và một cái cốc thuỷ tinh.',
  opts:[
    { t:'There is some bread on the plate.', ok:true },
    { t:'There is some bread in the bowl.', why:'Cái bát có thật trong tranh — nhưng bánh mì nằm trên đĩa.', trap:'đúng vật, sai vị trí' },
    { t:'There isn\'t any bread on the plate.', why:'Chỉ khác «is some» thành «isn\'t any». Cả hai đều ngắn và đọc lướt rất giống nhau.', trap:'phủ định chìm' },
    { t:'There are some breads on the plate.', why:'bread không đếm được nên không có dạng số nhiều. Nghe thấy «breads» là biết sai ngay.', trap:'danh từ không đếm được' }
  ],
  keys:[
    { w:'bread', r:'/bred/', vi:'bánh mì' }, { w:'plate', r:'/pleɪt/', vi:'cái đĩa' },
    { w:'bowl', r:'/bəʊl/', vi:'cái bát' }, { w:'any', r:'/ˈeni/', vi:'nào, chút nào (trong câu phủ định)' }
  ],
  gram:[{ p:'some trong câu khẳng định, any trong câu phủ định', vi:'There is SOME bread ↔ There isn\'t ANY bread. Nghe thấy «any» là gần như chắc chắn câu đang phủ định hoặc hỏi.',
    ex:['There is some bread on the plate.', 'Trên đĩa có ít bánh mì.'] }] },

{ id:'en-24', lang:'en', lv:'a1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:30, y:50, w:80, h:110, rows:3 }, { p:'table', x:200, y:220, w:110 },
    { p:'apple', x:200, y:158, rep:4, gap:26 }, { p:'tag', x:310, y:130, text:'$3' }
  ]},
  alt:'Bốn quả táo bày trên bàn, bảng giá ghi 3 đô la.',
  opts:[
    { t:'Four apples cost three dollars.', ok:true },
    { t:'Four apples cost thirty dollars.', why:'three /θriː/ chỉ một âm tiết, thirty /ˈθɜːti/ có hai và nhấn ở đầu. Bảng ghi 3.', trap:'gần âm: three / thirty' },
    { t:'Fourteen apples cost three dollars.', why:'four và fourteen chỉ khác đuôi -teen, mà đuôi này hay bị nuốt. Trên bàn có bốn quả.', trap:'gần âm: four / fourteen' },
    { t:'Four apples cost three dollars each.', why:'Thêm mỗi chữ «each» ở cuối là đổi hẳn nghĩa: 3 đô mỗi quả, tức là 12 đô cả bốn quả.', trap:'thêm một chữ đổi nghĩa' }
  ],
  keys:[
    { w:'four', r:'/fɔː/', vi:'bốn' }, { w:'fourteen', r:'/ˌfɔːˈtiːn/', vi:'mười bốn' },
    { w:'thirty', r:'/ˈθɜːti/', vi:'ba mươi' }, { w:'each', r:'/iːtʃ/', vi:'mỗi (cái)' }
  ],
  gram:[{ p:'each đứng cuối câu giá', vi:'«three dollars» là giá cả lô, «three dollars each» là giá một cái. Một chữ nhỏ ở cuối câu mà đổi hẳn số tiền.',
    ex:['Four apples cost three dollars.', 'Bốn quả táo giá ba đô la.'] }] },

{ id:'en-25', lang:'en', lv:'a2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:150, y:40, w:110, h:120, rows:3 }, { p:'person', x:80, y:220, pose:'carry' },
    { p:'basket', x:290, y:220, s:1.3 }, { p:'tag', x:300, y:120, text:'$15' }
  ]},
  alt:'Một người đang xách đồ đứng cạnh kệ hàng, cái giỏ để dưới sàn, bảng giá ghi 15 đô la.',
  opts:[
    { t:'The bag costs fifty dollars.', why:'fifty nhấn ở đầu FIF-ty. Bảng ghi 15.', trap:'gần âm: fifteen / fifty' },
    { t:'The bag costs fifteen dollars.', ok:true },
    { t:'The bags cost fifteen dollars.', why:'Chỉ khác âm -s và cost/costs. Người trong tranh chỉ xách một túi.', trap:'số ít / số nhiều' },
    { t:'The basket costs fifteen dollars.', why:'Cái giỏ có thật trong tranh, nhưng bảng giá treo cạnh kệ hàng và người đang cầm cái túi.', trap:'đúng vật, sai đối tượng' }
  ],
  keys:[
    { w:'fifteen', r:'/ˌfɪfˈtiːn/', vi:'mười lăm' }, { w:'fifty', r:'/ˈfɪfti/', vi:'năm mươi' },
    { w:'cost', r:'/kɒst/', vi:'có giá là' }, { w:'basket', r:'/ˈbɑːskɪt/', vi:'cái giỏ' }
  ],
  gram:[{ p:'Nghe trọng âm để tách -teen với -ty', vi:'fifTEEN nhấn cuối, FIFty nhấn đầu. Khi người nói đọc nhanh, trọng âm là manh mối duy nhất.',
    ex:['The bag costs fifteen dollars.', 'Cái túi giá mười lăm đô la.'] }] },

/* ================= PHÒNG NGỦ ================= */
{ id:'en-26', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:140, y:220 }, { p:'cat', x:150, y:178, pose:'lie', s:0.8 },
    { p:'shoe', x:250, y:220 }, { p:'shoe', x:272, y:220 }, { p:'lamp', x:330, y:220 }
  ]},
  alt:'Con mèo nằm trên giường, một đôi giày để dưới sàn, cây đèn ở góc phải.',
  opts:[
    { t:'The cat is sleeping on the bed.', ok:true },
    { t:'The cat is sleeping under the bed.', why:'Chỉ khác mỗi giới từ, mà on và under đọc rất nhanh trong câu.', trap:'giới từ' },
    { t:'The cat is sleeping on the bed and there is a shoe on the floor.', why:'Vế đầu đúng nhưng dưới sàn là một ĐÔI giày, phải nói «there are two shoes».', trap:'số ít / số nhiều' },
    { t:'The cats are sleeping on the bed.', why:'Chỉ thêm âm -s và đổi is thành are. Trên giường chỉ có một con.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'bed', r:'/bed/', vi:'cái giường' }, { w:'shoe', r:'/ʃuː/', vi:'chiếc giày' },
    { w:'sleep', r:'/sliːp/', vi:'ngủ' }, { w:'floor', r:'/flɔː/', vi:'sàn nhà' }
  ],
  gram:[{ p:'a shoe và two shoes', vi:'shoe là một chiếc. Một đôi là «a pair of shoes» hoặc «two shoes». Trong bài nghe, âm -s cuối là chỗ quyết định.',
    ex:['The cat is sleeping on the bed.', 'Con mèo đang ngủ trên giường.'] }] },

{ id:'en-27', lang:'en', lv:'a2', cat:'Du lịch',
  scene:{ bg:'room', items:[
    { p:'bed', x:120, y:220 }, { p:'suitcase', x:250, y:220, s:1.2 },
    { p:'coat', x:320, y:160 }, { p:'clock', x:330, y:60, time:'5:50', r:24 }
  ]},
  alt:'Cái vali để dưới sàn cạnh giường, áo khoác treo trên móc, đồng hồ chỉ 5 giờ 50.',
  opts:[
    { t:'The suitcase is next to the bed.', ok:true },
    { t:'The suitcase is on the bed.', why:'Chỉ khác mỗi giới từ. Vali đặt dưới sàn, bên cạnh giường.', trap:'giới từ' },
    { t:'The suitcase is next to the bag.', why:'Chỉ khác mỗi từ cuối, mà bed và bag chỉ lệch nhau một âm. Trong tranh không có túi nào.', trap:'gần âm: bed / bag' },
    { t:'There are two suitcases next to the bed.', why:'Chỉ có một cái vali.', trap:'số lượng' }
  ],
  keys:[
    { w:'suitcase', r:'/ˈsuːtkeɪs/', vi:'cái vali' }, { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' },
    { w:'coat', r:'/kəʊt/', vi:'áo khoác' }, { w:'bag', r:'/bæɡ/', vi:'cái túi' }
  ],
  gram:[{ p:'bed và bag khác nhau ở nguyên âm', vi:'bed dùng /e/ — miệng hẹp; bag dùng /æ/ — miệng mở rộng hơn. Hai từ rất ngắn nên trong câu chỉ còn một âm để phân biệt.',
    ex:['The suitcase is next to the bed.', 'Cái vali để cạnh giường.'] }] },

{ id:'en-28', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:40, y:28, view:'night', open:true }, { p:'bed', x:170, y:220 },
    { p:'sleeper', x:178, y:180 }, { p:'lamp', x:300, y:220 }, { p:'clock', x:340, y:64, time:'11:20', r:24 }
  ]},
  alt:'Ban đêm: cửa sổ đang mở, một người ngủ trên giường, cây đèn ở bên phải, đồng hồ chỉ 11 giờ 20.',
  opts:[
    { t:'The window is open and someone is sleeping.', ok:true },
    { t:'The window isn\'t open and someone is sleeping.', why:'Chỉ thêm n\'t. Cánh cửa sổ trong tranh đang hé ra ngoài.', trap:'phủ định chìm' },
    { t:'The window is open and no one is sleeping.', why:'Vế đầu đúng nên tai buông. someone và no one đọc lướt nghe khá giống nhau.', trap:'someone / no one' },
    { t:'The window is open and someone is reading.', why:'Chỉ khác động từ cuối. Người trong tranh nằm nhắm mắt, không cầm sách.', trap:'hành động' }
  ],
  keys:[
    { w:'open', r:'/ˈəʊpən/', vi:'mở; đang mở' }, { w:'someone', r:'/ˈsʌmwʌn/', vi:'có ai đó' },
    { w:'no one', r:'/ˈnəʊ wʌn/', vi:'không ai' }, { w:'window', r:'/ˈwɪndəʊ/', vi:'cửa sổ' }
  ],
  gram:[{ p:'someone và no one', vi:'no one đã mang sẵn nghĩa phủ định nên động từ vẫn ở dạng khẳng định: «no one IS sleeping». Nghe nhầm someone thành no one là đảo ngược cả câu.',
    ex:['The window is open and someone is sleeping.', 'Cửa sổ đang mở và có người đang ngủ.'] }] },

/* ================= LỚP HỌC ================= */
{ id:'en-29', lang:'en', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:230, y:220, pose:'write' }, { p:'desk', x:222, y:220, w:100 },
    { p:'person', x:320, y:220, pose:'read', s:0.9 }, { p:'clock', x:216, y:36, time:'9:15', r:22 }
  ]},
  alt:'Trong lớp: một bạn ngồi viết ở bàn, một bạn khác đứng đọc sách bên phải, đồng hồ chỉ 9 giờ 15.',
  opts:[
    { t:'One student is writing and the other is reading.', ok:true },
    { t:'One student is reading and the other is writing.', why:'Đổi chỗ hai hành động. Bạn ngồi ở bàn là người đang viết.', trap:'hoán chủ thể' },
    { t:'Both students are writing.', why:'both là cả hai. Chỉ một bạn cầm bút.', trap:'both' },
    { t:'One student is writing and the other is sleeping.', why:'Vế đầu đúng nên dễ gật. Bạn thứ hai đang cầm sách đọc.', trap:'đúng một nửa' }
  ],
  keys:[
    { w:'student', r:'/ˈstjuːdnt/', vi:'học sinh, sinh viên' }, { w:'the other', r:'/ði ˈʌðə/', vi:'người còn lại' },
    { w:'both', r:'/bəʊθ/', vi:'cả hai' }, { w:'write', r:'/raɪt/', vi:'viết' }
  ],
  gram:[{ p:'one … the other', vi:'Khi có đúng hai người: one là người thứ nhất, the other là người còn lại. Nghe được cấu trúc này là loại ngay đáp án dùng both hay neither.',
    ex:['One student is writing and the other is reading.', 'Một bạn đang viết, bạn kia đang đọc.'] }] },

{ id:'en-30', lang:'en', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:110, y:220 }, { p:'desk', x:220, y:220 }, { p:'desk', x:330, y:220 },
    { p:'person', x:220, y:220, pose:'write' }
  ]},
  alt:'Trong lớp có ba cái bàn xếp hàng, một bạn ngồi ở cái bàn giữa.',
  opts:[
    { t:'There are three desks and someone is sitting at the middle one.', ok:true },
    { t:'There are three desks and someone is sitting at the first one.', why:'Vế đầu đúng. Bạn ấy ngồi ở bàn giữa, không phải bàn đầu bên trái.', trap:'thứ tự' },
    { t:'There are thirty desks and someone is sitting at the middle one.', why:'three và thirty chỉ khác trọng âm và một âm tiết. Trong lớp có ba cái bàn.', trap:'gần âm: three / thirty' },
    { t:'There are three desks and no one is sitting at the middle one.', why:'someone đổi thành no one — hai từ này đọc lướt rất giống nhau.', trap:'someone / no one' }
  ],
  keys:[
    { w:'middle', r:'/ˈmɪdl/', vi:'ở giữa' }, { w:'first', r:'/fɜːst/', vi:'thứ nhất' },
    { w:'desk', r:'/desk/', vi:'bàn học' }, { w:'thirty', r:'/ˈθɜːti/', vi:'ba mươi' }
  ],
  gram:[{ p:'the first one · the middle one · the last one', vi:'«one» thay cho danh từ vừa nhắc để khỏi lặp. Nghe xem one đứng sau từ chỉ thứ tự nào là biết vật nào.',
    ex:['Someone is sitting at the middle one.', 'Có người ngồi ở cái bàn giữa.'] }] },

{ id:'en-31', lang:'en', lv:'b1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:120, y:220, pose:'point' }, { p:'shelf', x:290, y:120, w:80, h:96, rows:3 },
    { p:'clock', x:216, y:34, time:'2:40', r:22 }
  ]},
  alt:'Một người đứng bên trái, tay chỉ về phía bảng; kệ sách ở bên phải.',
  opts:[
    { t:'The teacher is pointing at the board.', ok:true },
    { t:'The teacher is pointing at the bookshelf.', why:'Kệ sách có thật nhưng ở phía bên kia. Cánh tay chỉ chếch lên về phía bảng.', trap:'đúng vật, sai hướng' },
    { t:'The teacher is painting the board.', why:'Bẫy gần âm: pointing /ˈpɔɪntɪŋ/ và painting /ˈpeɪntɪŋ/ chỉ khác nguyên âm giữa.', trap:'gần âm: point / paint' },
    { t:'The teacher isn\'t pointing at the board.', why:'Chỉ thêm n\'t vào giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'point at', r:'/pɔɪnt æt/', vi:'chỉ tay vào' }, { w:'paint', r:'/peɪnt/', vi:'sơn, vẽ' },
    { w:'board', r:'/bɔːd/', vi:'cái bảng' }, { w:'teacher', r:'/ˈtiːtʃə/', vi:'giáo viên' }
  ],
  gram:[{ p:'point AT — động từ đi kèm giới từ cố định', vi:'point luôn đi với at khi chỉ vào vật gì. Học thuộc cả cụm thì nghe mới bắt kịp, vì at đọc rất nhẹ.',
    ex:['The teacher is pointing at the board.', 'Cô giáo đang chỉ vào cái bảng.'] }] },

/* ================= NGOÀI PHỐ ================= */
{ id:'en-32', lang:'en', lv:'a1', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:56, y:44 }, { p:'bus', x:140, y:220 }, { p:'car', x:288, y:220 }
  ]},
  alt:'Ngoài phố trời nắng: xe buýt ở bên trái, ô tô con ở bên phải.',
  opts:[
    { t:'The bus is bigger than the car.', ok:true },
    { t:'The car is bigger than the bus.', why:'Đổi chỗ hai chủ thể. Nghe tới «the car is bigger» là phải thấy sai ngay.', trap:'hoán chủ thể' },
    { t:'The bus is as big as the car.', why:'«as big as» là to BẰNG nhau. Trong tranh xe buýt dài hơn hẳn.', trap:'so sánh bằng / hơn' },
    { t:'The bus isn\'t bigger than the car.', why:'Chỉ thêm n\'t, mà nó lại nằm giữa câu nên rất dễ nghe sót.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'bus', r:'/bʌs/', vi:'xe buýt' }, { w:'car', r:'/kɑː/', vi:'ô tô con' },
    { w:'bigger', r:'/ˈbɪɡə/', vi:'to hơn' }, { w:'as … as', r:'/əz … əz/', vi:'bằng… (so sánh ngang)' }
  ],
  gram:[{ p:'bigger than và as big as', vi:'«A is bigger than B» là hơn. «A is as big as B» là bằng. Hai câu chỉ khác mấy chữ nhỏ nhưng nghĩa ngược nhau.',
    ex:['The bus is bigger than the car.', 'Xe buýt to hơn ô tô con.'] }] },

{ id:'en-33', lang:'en', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:46 }, { p:'sign', x:180, y:220, dir:'left' },
    { p:'person', x:110, y:220, pose:'walk' }, { p:'tree', x:330, y:220 }
  ]},
  alt:'Ngoài phố có biển chỉ đường mũi tên hướng sang trái, một người đang đi bộ, cây ở bên phải.',
  opts:[
    { t:'The sign says you have to turn right.', why:'Mũi tên trên biển chỉ sang TRÁI. right và left đều ngắn, nghe lướt rất dễ lẫn.', trap:'trái / phải' },
    { t:'The sign says you have to turn left.', ok:true },
    { t:'The sign says you can turn left.', why:'«have to» là bắt buộc, «can» là được phép. Một chữ mà đổi hẳn mức độ.', trap:'have to / can' },
    { t:'There isn\'t a sign on the street.', why:'Phủ định thẳng. Cái biển rõ ràng có trong tranh.', trap:'phủ định' }
  ],
  keys:[
    { w:'sign', r:'/saɪn/', vi:'biển báo' }, { w:'turn left', r:'/tɜːn left/', vi:'rẽ trái' },
    { w:'turn right', r:'/tɜːn raɪt/', vi:'rẽ phải' }, { w:'have to', r:'/hæv tuː/', vi:'phải, bắt buộc' }
  ],
  gram:[{ p:'have to và can', vi:'have to là bắt buộc, can là được phép. Trong bài nghe chỉ đường, đây là hai từ quyết định bạn có được chọn hay không.',
    ex:['The sign says you have to turn left.', 'Biển báo nói là phải rẽ trái.'] }] },

{ id:'en-34', lang:'en', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:44 }, { p:'rain', x:90, y:62, n:6 },
    { p:'person', x:150, y:220, pose:'walk' }, { p:'umbrella', x:156, y:100, open:true, s:1.3 },
    { p:'person', x:280, y:220, pose:'run' }
  ]},
  alt:'Trời mưa: người bên trái đi bộ và che ô, người bên phải chạy và không có ô.',
  opts:[
    { t:'One of them has an umbrella and the other doesn\'t.', ok:true },
    { t:'Both of them have umbrellas.', why:'Chỉ một người cầm ô; người kia chạy tay không.', trap:'both' },
    { t:'Neither of them has an umbrella.', why:'neither là không ai cả. Nhưng rõ ràng có một người đang che ô.', trap:'neither' },
    { t:'One of them has an umbrella and the other does.', why:'Chỉ thiếu mỗi n\'t ở chữ cuối cùng — và đó lại là chữ quyết định cả câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'umbrella', r:'/ʌmˈbrelə/', vi:'cái ô' }, { w:'both', r:'/bəʊθ/', vi:'cả hai' },
    { w:'neither', r:'/ˈnaɪðə/', vi:'không ai trong hai' }, { w:'the other', r:'/ði ˈʌðə/', vi:'người còn lại' }
  ],
  gram:[{ p:'… and the other doesn\'t', vi:'Người Anh hay bỏ lửng vế sau: «the other doesn\'t» thay vì nhắc lại cả câu. Chữ n\'t cuối cùng là chỗ duy nhất phân biệt.',
    ex:['One of them has an umbrella and the other doesn\'t.', 'Một người có ô, người kia thì không.'] }] },

{ id:'en-35', lang:'en', lv:'b1', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:44 }, { p:'car', x:130, y:220 }, { p:'bicycle', x:240, y:220 },
    { p:'bus', x:330, y:220, w:100 }
  ]},
  alt:'Ba phương tiện xếp hàng: ô tô bên trái, xe đạp ở giữa, xe buýt bên phải.',
  opts:[
    { t:'The bicycle is between the car and the bus.', ok:true },
    { t:'The bicycle is in front of the car and the bus.', why:'in front of là ở phía trước. Ba vật xếp ngang hàng, xe đạp nằm giữa.', trap:'giới từ' },
    { t:'The car is between the bicycle and the bus.', why:'Đổi chỗ hai chủ thể. Ô tô ở ngoài cùng bên trái.', trap:'hoán chủ thể' },
    { t:'The bicycles are between the car and the bus.', why:'Chỉ thêm âm -s. Ở giữa chỉ có một chiếc xe đạp.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'bicycle', r:'/ˈbaɪsɪkl/', vi:'xe đạp' }, { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa' },
    { w:'in front of', r:'/ɪn frʌnt ɒv/', vi:'phía trước' }, { w:'bus', r:'/bʌs/', vi:'xe buýt' }
  ],
  gram:[{ p:'between dùng cho hàng ngang', vi:'Khi ba vật xếp thành hàng, vật ở giữa là «between» hai vật kia. «in front of» chỉ dùng khi có trước–sau theo chiều sâu.',
    ex:['The bicycle is between the car and the bus.', 'Chiếc xe đạp ở giữa ô tô và xe buýt.'] }] },

/* ================= VĂN PHÒNG ================= */
{ id:'en-36', lang:'en', lv:'a2', cat:'Công việc',
  scene:{ bg:'room', items:[
    { p:'desk', x:180, y:220 }, { p:'laptop', x:180, y:158 },
    { p:'lamp', x:280, y:220 }, { p:'clock', x:330, y:60, time:'9:00', r:26 }
  ]},
  alt:'Cái laptop đặt trên bàn làm việc, cây đèn bên phải, đồng hồ chỉ đúng 9 giờ.',
  opts:[
    { t:'The laptop is on the desk.', ok:true },
    { t:'The laptop is under the desk.', why:'Chỉ khác mỗi giới từ, mà on và under đều đọc rất nhanh.', trap:'giới từ' },
    { t:'The laptops are on the desk.', why:'Chỉ thêm âm -s và đổi is thành are. Trên bàn chỉ có một cái.', trap:'số ít / số nhiều' },
    { t:'The lamp is on the desk.', why:'Bẫy gần âm: laptop và lamp đều bắt đầu bằng /læ/. Cây đèn đứng dưới sàn.', trap:'gần âm: laptop / lamp' }
  ],
  keys:[
    { w:'laptop', r:'/ˈlæptɒp/', vi:'máy tính xách tay' }, { w:'lamp', r:'/læmp/', vi:'cây đèn' },
    { w:'desk', r:'/desk/', vi:'bàn làm việc' }, { w:'under', r:'/ˈʌndə/', vi:'ở dưới' }
  ],
  gram:[{ p:'Chủ ngữ số ít đi với is, số nhiều đi với are', vi:'Nghe được is hay are là biết ngay câu nói về một vật hay nhiều vật, kể cả khi âm -s cuối bị nuốt mất.',
    ex:['The laptop is on the desk.', 'Cái laptop đặt trên bàn.'] }] },

{ id:'en-37', lang:'en', lv:'a2', cat:'Công việc',
  scene:{ bg:'room', items:[
    { p:'calendar', x:80, y:36, text:'14' }, { p:'desk', x:230, y:220 },
    { p:'person', x:240, y:220, pose:'write' }, { p:'clock', x:330, y:56, time:'10:00', r:24 }
  ]},
  alt:'Tờ lịch trên tường ghi số 14, một người đang ngồi viết ở bàn, đồng hồ chỉ 10 giờ.',
  opts:[
    { t:'Today is the fourteenth.', ok:true },
    { t:'Today is the fortieth.', why:'fourteenth nhấn cuối, fortieth nhấn đầu. Tờ lịch ghi 14.', trap:'gần âm: fourteen / forty' },
    { t:'Today is the fourth.', why:'four và fourteen chỉ khác đuôi -teen, mà đuôi ấy hay bị đọc lướt.', trap:'gần âm: four / fourteen' },
    { t:'Tomorrow is the fourteenth.', why:'Chỉ khác chữ đầu tiên. Tờ lịch đang treo là ngày hôm nay.', trap:'today / tomorrow' }
  ],
  keys:[
    { w:'today', r:'/təˈdeɪ/', vi:'hôm nay' }, { w:'tomorrow', r:'/təˈmɒrəʊ/', vi:'ngày mai' },
    { w:'fourteenth', r:'/ˌfɔːˈtiːnθ/', vi:'ngày mười bốn' }, { w:'calendar', r:'/ˈkælɪndə/', vi:'tờ lịch' }
  ],
  gram:[{ p:'Ngày tháng dùng số thứ tự', vi:'Nói ngày phải dùng số thứ tự có «the»: the fourteenth, the third. Đuôi -th đọc rất nhẹ nên phải bắt phần đầu của từ.',
    ex:['Today is the fourteenth.', 'Hôm nay là ngày mười bốn.'] }] },

{ id:'en-38', lang:'en', lv:'b1', cat:'Công việc',
  scene:{ bg:'room', items:[
    { p:'desk', x:140, y:220 }, { p:'laptop', x:140, y:158 },
    { p:'person', x:225, y:220, pose:'phone' },
    { p:'person', x:318, y:220, pose:'write' }, { p:'desk', x:310, y:220, w:88 }
  ]},
  alt:'Một người đang nghe điện thoại, người bên cạnh đang viết; cái laptop để trên bàn bên trái.',
  opts:[
    { t:'One of them is on the phone and the other is writing.', ok:true },
    { t:'One of them is on the phone and the other is typing.', why:'Cái laptop có thật trong tranh nên «typing» nghe rất hợp. Nhưng người đó đang cầm bút.', trap:'đúng vật, sai hành động' },
    { t:'One of them is on the phone and the other isn\'t writing.', why:'Chỉ thêm n\'t ở gần cuối câu, lúc tai đã buông.', trap:'phủ định chìm' },
    { t:'Both of them are on the phone.', why:'both là cả hai. Chỉ một người áp điện thoại lên tai.', trap:'both' }
  ],
  keys:[
    { w:'on the phone', r:'/ɒn ðə fəʊn/', vi:'đang nghe điện thoại' }, { w:'type', r:'/taɪp/', vi:'gõ máy tính' },
    { w:'write', r:'/raɪt/', vi:'viết tay' }, { w:'both', r:'/bəʊθ/', vi:'cả hai' }
  ],
  gram:[{ p:'be on the phone', vi:'«on the phone» là đang nói chuyện điện thoại, không phải ở trên cái điện thoại. Đây là cụm cố định, học nguyên cụm.',
    ex:['One of them is on the phone.', 'Một người đang nói chuyện điện thoại.'] }] },

/* ================= DỌN DẸP ================= */
{ id:'en-39', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:150, y:220, pose:'cook' }, { p:'broom', x:196, y:220, s:1.2 },
    { p:'bucket', x:270, y:220, s:1.2 }, { p:'bin', x:330, y:220 }
  ]},
  alt:'Một người đang cầm chổi quét nhà, cái xô và thùng rác ở bên phải.',
  opts:[
    { t:'She is cleaning the floor with a broom.', ok:true },
    { t:'She is cleaning the floor with a bucket.', why:'Cái xô có thật trong tranh nhưng đang đặt dưới sàn, tay cô ấy cầm chổi.', trap:'đúng vật, sai dụng cụ' },
    { t:'She is cleaning the floor with her broom.', why:'a broom là một cái chổi nào đó, her broom là chổi của cô ấy. Tranh không cho biết chổi của ai.', trap:'a / her' },
    { t:'She isn\'t cleaning the floor.', why:'Chỉ thêm n\'t, mà nó lại nằm ngay sau chủ ngữ nên dễ trôi qua tai.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'broom', r:'/bruːm/', vi:'cái chổi' }, { w:'bucket', r:'/ˈbʌkɪt/', vi:'cái xô' },
    { w:'clean', r:'/kliːn/', vi:'lau dọn' }, { w:'with', r:'/wɪð/', vi:'bằng (dụng cụ)' }
  ],
  gram:[{ p:'with + dụng cụ', vi:'Muốn nói làm bằng cái gì thì dùng with: clean with a broom, write with a pen. Nghe kỹ danh từ ngay sau with.',
    ex:['She is cleaning the floor with a broom.', 'Cô ấy đang quét nhà bằng chổi.'] }] },

{ id:'en-40', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bin', x:110, y:220, s:1.3 }, { p:'box', x:220, y:220, w:40 },
    { p:'box', x:270, y:220, w:40 }, { p:'broom', x:330, y:220 }
  ]},
  alt:'Thùng rác ở bên trái, hai cái hộp đặt giữa sàn, cái chổi dựng bên phải.',
  opts:[
    { t:'There are two boxes on the floor.', ok:true },
    { t:'There are two boxes in the bin.', why:'Thùng rác có thật nhưng hai cái hộp nằm dưới sàn, không ở trong thùng.', trap:'giới từ + nơi chốn' },
    { t:'There is a box on the floor.', why:'Chỉ khác is/are và âm -s. Dưới sàn có hai cái hộp.', trap:'số ít / số nhiều' },
    { t:'There are two boxes on the floors.', why:'Thêm mỗi âm -s ở từ cuối. floor không dùng số nhiều trong câu này.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'box', r:'/bɒks/', vi:'cái hộp' }, { w:'bin', r:'/bɪn/', vi:'thùng rác' },
    { w:'floor', r:'/flɔː/', vi:'sàn nhà' }, { w:'two', r:'/tuː/', vi:'hai' }
  ],
  gram:[{ p:'box thành boxes', vi:'Danh từ kết thúc bằng -x, -s, -ch, -sh thì thêm -es và đọc thành một âm tiết riêng: /ˈbɒksɪz/. Âm này rõ nên dễ nghe hơn -s thường.',
    ex:['There are two boxes on the floor.', 'Dưới sàn có hai cái hộp.'] }] },

{ id:'en-41', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:250, y:30, w:72, h:56 }, { p:'ladder', x:180, y:220, h:110 },
    { p:'person', x:130, y:220, pose:'point' }, { p:'bucket', x:320, y:220 }
  ]},
  alt:'Cái thang dựng giữa phòng, bức tranh đã treo trên tường, một người đứng bên cạnh chỉ tay lên.',
  opts:[
    { t:'The picture is already on the wall.', ok:true },
    { t:'The picture is still on the floor.', why:'Bức tranh đã ở trên tường rồi. already và still đều là từ ngắn nằm giữa câu.', trap:'already / still' },
    { t:'He is climbing the ladder.', why:'Cái thang có thật nhưng người này đứng dưới sàn, tay chỉ lên chứ chưa trèo.', trap:'đúng vật, sai hành động' },
    { t:'The pictures are already on the wall.', why:'Chỉ thêm âm -s. Trên tường chỉ có một bức.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'already', r:'/ɔːlˈredi/', vi:'đã… rồi' }, { w:'still', r:'/stɪl/', vi:'vẫn còn' },
    { w:'ladder', r:'/ˈlædə/', vi:'cái thang' }, { w:'climb', r:'/klaɪm/', vi:'trèo, leo' }
  ],
  gram:[{ p:'already và still', vi:'already là việc đã xong sớm hơn mong đợi; still là việc vẫn đang kéo dài. Hai từ ngắn nằm giữa câu nhưng đổi hẳn tình huống.',
    ex:['The picture is already on the wall.', 'Bức tranh đã treo lên tường rồi.'] }] },

/* ================= CÔNG VIÊN · THỂ THAO ================= */
{ id:'en-42', lang:'en', lv:'a1', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:52, y:44 }, { p:'tree', x:120, y:220 },
    { p:'person', x:230, y:220, pose:'run' }, { p:'ball', x:310, y:220, s:1.2 }
  ]},
  alt:'Ngoài công viên trời nắng: một cái cây bên trái, một người đang chạy, quả bóng nằm trên mặt đất.',
  opts:[
    { t:'There is a tree and a ball in the park.', ok:true },
    { t:'There are three balls in the park.', why:'Bẫy kép: three nghe gần như tree, và trong tranh cũng chỉ có một quả bóng.', trap:'gần âm: three / tree' },
    { t:'There is a tree and a ball in the car.', why:'Chỉ khác mỗi từ cuối, mà park và car đều ngắn.', trap:'gần âm: park / car' },
    { t:'There is a tree but no ball in the park.', why:'«but no ball» thay cho «and a ball» — chỉ hai chữ nhỏ ở giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'tree', r:'/triː/', vi:'cái cây' }, { w:'ball', r:'/bɔːl/', vi:'quả bóng' },
    { w:'park', r:'/pɑːk/', vi:'công viên' }, { w:'three', r:'/θriː/', vi:'ba' }
  ],
  gram:[{ p:'and và but no', vi:'«a tree and a ball» là có cả hai. «a tree but no ball» là chỉ có cây. Chữ no nằm lọt giữa câu, nghe sót là chọn sai.',
    ex:['There is a tree and a ball in the park.', 'Trong công viên có một cái cây và một quả bóng.'] }] },

{ id:'en-43', lang:'en', lv:'a2', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'cloud', x:70, y:44 }, { p:'person', x:170, y:220, pose:'run' },
    { p:'person', x:260, y:220, pose:'walk' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai người ngoài công viên: người bên trái đang chạy, người bên phải đang đi bộ.',
  opts:[
    { t:'One of them is running and the other is walking.', ok:true },
    { t:'One of them is running and the other is working.', why:'Bẫy gần âm: walking /ˈwɔːkɪŋ/ và working /ˈwɜːkɪŋ/ chỉ khác nguyên âm giữa.', trap:'gần âm: walk / work' },
    { t:'Both of them are running.', why:'Chỉ một người chạy; người kia bước chậm, thân thẳng.', trap:'both' },
    { t:'One of them is walking and the other is running.', why:'Đổi chỗ hai hành động. Người chạy đứng bên trái.', trap:'hoán chủ thể' }
  ],
  keys:[
    { w:'walk', r:'/wɔːk/', vi:'đi bộ' }, { w:'work', r:'/wɜːk/', vi:'làm việc' },
    { w:'run', r:'/rʌn/', vi:'chạy' }, { w:'both', r:'/bəʊθ/', vi:'cả hai' }
  ],
  gram:[{ p:'walk và work khác nhau ở nguyên âm', vi:'walk có /ɔː/ — môi tròn, giống «o» kéo dài. work có /ɜː/ — môi dẹt. Cặp này người Việt lẫn rất nhiều.',
    ex:['One of them is running and the other is walking.', 'Một người đang chạy, người kia đang đi bộ.'] }] },

{ id:'en-44', lang:'en', lv:'a2', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:56, y:44 }, { p:'person', x:160, y:220, pose:'stand' },
    { p:'racket', x:190, y:200, s:1.1 }, { p:'ball', x:270, y:220 }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Một người cầm vợt đứng ngoài sân, quả bóng nằm dưới đất phía trước.',
  opts:[
    { t:'He is holding a racket.', ok:true },
    { t:'He is holding a ball.', why:'Quả bóng có thật nhưng đang nằm dưới đất, tay anh ấy cầm cái vợt.', trap:'đúng vật, sai đối tượng' },
    { t:'He is holding two rackets.', why:'Chỉ khác a thành two và thêm âm -s.', trap:'số lượng' },
    { t:'He isn\'t holding a racket.', why:'Chỉ thêm n\'t ngay sau chủ ngữ.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'hold', r:'/həʊld/', vi:'cầm, giữ' }, { w:'racket', r:'/ˈrækɪt/', vi:'cái vợt' },
    { w:'ball', r:'/bɔːl/', vi:'quả bóng' }, { w:'ground', r:'/ɡraʊnd/', vi:'mặt đất' }
  ],
  gram:[{ p:'hold — đang cầm trên tay', vi:'hold là cầm giữ trong tay lúc này, khác với have là sở hữu. Trong bài nghe xem tranh, hold luôn nói về thứ đang ở trên tay.',
    ex:['He is holding a racket.', 'Anh ấy đang cầm cái vợt.'] }] },

{ id:'en-45', lang:'en', lv:'b1', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:42 }, { p:'tree', x:110, y:220, h:90 },
    { p:'tree', x:200, y:220, h:120 }, { p:'person', x:300, y:220, pose:'stand' }
  ]},
  alt:'Hai cái cây: cây bên trái thấp hơn, cây ở giữa cao hơn hẳn; một người đứng bên phải.',
  opts:[
    { t:'The tree on the right is taller than the tree on the left.', ok:true },
    { t:'The tree on the left is taller than the tree on the right.', why:'Đổi chỗ hai chủ thể. Cây cao hơn đứng bên phải.', trap:'hoán chủ thể' },
    { t:'The tree on the right is as tall as the tree on the left.', why:'«as tall as» là cao bằng nhau. Hai cây trong tranh rõ ràng lệch nhau.', trap:'so sánh bằng / hơn' },
    { t:'The tree on the right isn\'t taller than the tree on the left.', why:'Chỉ thêm n\'t vào giữa câu dài, chỗ dễ trôi nhất.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'taller', r:'/ˈtɔːlə/', vi:'cao hơn' }, { w:'than', r:'/ðæn/', vi:'hơn (dùng khi so sánh)' },
    { w:'on the right', r:'/ɒn ðə raɪt/', vi:'ở bên phải' }, { w:'on the left', r:'/ɒn ðə left/', vi:'ở bên trái' }
  ],
  gram:[{ p:'So sánh hơn: tall → taller than', vi:'Tính từ ngắn thêm -er rồi đi với than. Nghe thấy than là biết đang so hơn kém chứ không phải so bằng.',
    ex:['The tree on the right is taller than the tree on the left.', 'Cây bên phải cao hơn cây bên trái.'] }] },

/* ================= ĐỒ UỐNG · ĐỒ ĂN ================= */
{ id:'en-46', lang:'en', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'can', x:150, y:158 },
    { p:'bottle', x:195, y:158 }, { p:'glass', x:240, y:158 }
  ]},
  alt:'Trên bàn có một lon nước, một cái chai và một cái cốc thuỷ tinh.',
  opts:[
    { t:'There is a can, a bottle and a glass on the table.', ok:true },
    { t:'There is a can, a bottle and a glass on the tables.', why:'Thêm mỗi âm -s ở chữ cuối cùng. Trong tranh chỉ có một cái bàn.', trap:'số ít / số nhiều' },
    { t:'There are two cans, a bottle and a glass on the table.', why:'Chỉ đổi phần đầu. Trên bàn có đúng một lon.', trap:'số lượng' },
    { t:'There is a can, a bottle and a cup on the table.', why:'glass là cốc thuỷ tinh có thành thẳng, cup là cốc có quai. Trong tranh là cốc thuỷ tinh.', trap:'gần nghĩa: glass / cup' }
  ],
  keys:[
    { w:'can', r:'/kæn/', vi:'lon (nước ngọt)' }, { w:'bottle', r:'/ˈbɒtl/', vi:'cái chai' },
    { w:'glass', r:'/ɡlɑːs/', vi:'cốc thuỷ tinh' }, { w:'cup', r:'/kʌp/', vi:'cốc có quai' }
  ],
  gram:[{ p:'Liệt kê ba vật: A, B and C', vi:'Chỉ dùng «and» trước vật cuối cùng, hai vật đầu ngăn bằng dấu phẩy. Động từ theo vật ĐẦU TIÊN: «There IS a can, a bottle and a glass».',
    ex:['There is a can, a bottle and a glass on the table.', 'Trên bàn có một lon nước, một cái chai và một cái cốc.'] }] },

{ id:'en-47', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'clock', x:80, y:64, time:'3:50', r:28 }, { p:'table', x:220, y:220, w:130 },
    { p:'cup', x:200, y:158 }, { p:'cake', x:250, y:158 }, { p:'person', x:130, y:220, pose:'drink' }
  ]},
  alt:'Đồng hồ chỉ 3 giờ 50, trên bàn có cốc và miếng bánh, một người đang uống.',
  opts:[
    { t:'It is ten to four.', ok:true },
    { t:'It is ten past four.', why:'to là kém, past là hơn. «ten past four» là 4:10.', trap:'giờ: to / past' },
    { t:'It is ten to three.', why:'to đếm ngược tới giờ SAU, nên 3:50 là «ten to four» chứ không phải three.', trap:'giờ: lệch một giờ' },
    { t:'It is two to four.', why:'ten và two đều ngắn, đọc nhanh dễ lẫn. Kim phút đang ở số 10.', trap:'gần âm: ten / two' }
  ],
  keys:[
    { w:'ten', r:'/ten/', vi:'mười' }, { w:'to', r:'/tuː/', vi:'kém (giờ)' },
    { w:'past', r:'/pɑːst/', vi:'hơn (giờ)' }, { w:'four', r:'/fɔː/', vi:'bốn' }
  ],
  gram:[{ p:'Đọc giờ kém', vi:'Từ phút 31 trở đi thì đếm ngược tới giờ kế tiếp: 3:50 là «ten to four». Nhớ cộng thêm một giờ khi nghe thấy «to».',
    ex:['It is ten to four.', 'Bây giờ là bốn giờ kém mười.'] }] },

{ id:'en-48', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:160 }, { p:'plate', x:150, y:158 },
    { p:'cake', x:150, y:150 }, { p:'cup', x:230, y:158 },
    { p:'calendar', x:300, y:34, text:'30' }
  ]},
  alt:'Trên bàn có đĩa bánh và một cốc nước, tờ lịch trên tường ghi số 30.',
  opts:[
    { t:'Today is the thirtieth.', ok:true },
    { t:'Today is the thirteenth.', why:'thirTEENTH nhấn cuối, THIRtieth nhấn đầu. Tờ lịch ghi 30.', trap:'gần âm: thirteen / thirty' },
    { t:'Today is the third.', why:'third, thirteenth và thirtieth đều bắt đầu giống nhau. Phải nghe hết đuôi từ.', trap:'gần âm: third / thirty' },
    { t:'Yesterday was the thirtieth.', why:'Chỉ khác hai chữ đầu câu. Tờ lịch đang treo là ngày hôm nay.', trap:'today / yesterday' }
  ],
  keys:[
    { w:'thirtieth', r:'/ˈθɜːtiəθ/', vi:'ngày ba mươi' }, { w:'thirteenth', r:'/ˌθɜːˈtiːnθ/', vi:'ngày mười ba' },
    { w:'yesterday', r:'/ˈjestədeɪ/', vi:'hôm qua' }, { w:'today', r:'/təˈdeɪ/', vi:'hôm nay' }
  ],
  gram:[{ p:'-teenth và -tieth', vi:'thirteenth (13) nhấn ở giữa, thirtieth (30) nhấn ở đầu. Nghe trọng âm rơi ở đâu là tách được ngay, khỏi cần nghe rõ đuôi.',
    ex:['Today is the thirtieth.', 'Hôm nay là ngày ba mươi.'] }] },

/* ================= QUẦN ÁO ================= */
{ id:'en-49', lang:'en', lv:'a2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'coat', x:100, y:180 }, { p:'hat', x:200, y:220, s:1.6 },
    { p:'shoe', x:280, y:220 }, { p:'shoe', x:308, y:220 }, { p:'shelf', x:330, y:40, w:60, h:70, rows:2 }
  ]},
  alt:'Áo khoác treo bên trái, một cái mũ đặt dưới sàn, một đôi giày ở bên phải.',
  opts:[
    { t:'There is a hat and a pair of shoes on the floor.', ok:true },
    { t:'There is a cap and a pair of shoes on the floor.', why:'hat /hæt/ và cap /kæp/ chỉ khác âm đầu và âm cuối, đều rất ngắn.', trap:'gần âm: hat / cap' },
    { t:'There is a hat and a pair of shoes on the shelf.', why:'Cái kệ có thật trong tranh, nhưng mũ và giày đều nằm dưới sàn.', trap:'đúng vật, sai vị trí' },
    { t:'There is a hat and a shoe on the floor.', why:'Dưới sàn là một ĐÔI giày, tức hai chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'hat', r:'/hæt/', vi:'cái mũ' }, { w:'cap', r:'/kæp/', vi:'mũ lưỡi trai' },
    { w:'a pair of', r:'/ə peər ɒv/', vi:'một đôi' }, { w:'coat', r:'/kəʊt/', vi:'áo khoác' }
  ],
  gram:[{ p:'a pair of shoes', vi:'Những thứ có hai phần đi liền (shoes, glasses, trousers) đếm bằng «a pair of». Nói «a shoe» là chỉ một chiếc lẻ.',
    ex:['There is a hat and a pair of shoes on the floor.', 'Dưới sàn có một cái mũ và một đôi giày.'] }] },

{ id:'en-50', lang:'en', lv:'b1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'coat', x:120, y:180 }, { p:'coat', x:190, y:180 },
    { p:'tag', x:290, y:120, text:'$60' }, { p:'shelf', x:320, y:40, w:60, h:64, rows:2 }
  ]},
  alt:'Hai chiếc áo khoác treo cạnh nhau, bảng giá ghi 60 đô la.',
  opts:[
    { t:'The coats are sixty dollars.', ok:true },
    { t:'The coats are sixteen dollars.', why:'SIXty nhấn đầu, sixTEEN nhấn cuối. Bảng ghi 60.', trap:'gần âm: sixteen / sixty' },
    { t:'The coat is sixty dollars.', why:'Chỉ khác âm -s và is/are. Trong tranh có hai chiếc áo.', trap:'số ít / số nhiều' },
    { t:'The coats aren\'t sixty dollars.', why:'Chỉ thêm n\'t vào giữa. Câu phủ định này nghe lướt gần y hệt câu khẳng định.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'sixty', r:'/ˈsɪksti/', vi:'sáu mươi' }, { w:'sixteen', r:'/ˌsɪksˈtiːn/', vi:'mười sáu' },
    { w:'coat', r:'/kəʊt/', vi:'áo khoác' }, { w:'dollar', r:'/ˈdɒlə/', vi:'đô la' }
  ],
  gram:[{ p:'Số nhiều kéo theo are', vi:'«The coats ARE» — chủ ngữ số nhiều. Khi âm -s cuối bị nuốt, chính từ are là manh mối còn lại.',
    ex:['The coats are sixty dollars.', 'Hai chiếc áo khoác giá sáu mươi đô la.'] }] },

/* ================= NHÀ GA · ĐI LẠI ================= */
{ id:'en-51', lang:'en', lv:'a2', cat:'Du lịch',
  scene:{ bg:'street', items:[
    { p:'clock', x:70, y:60, time:'8:05', r:26 }, { p:'person', x:180, y:220, pose:'carry' },
    { p:'suitcase', x:250, y:220, s:1.2 }, { p:'bus', x:340, y:220, w:90 }
  ]},
  alt:'Đồng hồ chỉ 8 giờ 5, một người xách đồ đứng cạnh cái vali, xe buýt ở bên phải.',
  opts:[
    { t:'It is five past eight and the bus is here.', ok:true },
    { t:'It is five to eight and the bus is here.', why:'past là hơn, to là kém. Kim phút mới qua số 1 một chút.', trap:'giờ: to / past' },
    { t:'It is five past eight and the bus isn\'t here.', why:'Vế giờ đúng nên tai buông, rồi n\'t trượt qua.', trap:'phủ định chìm' },
    { t:'It is five past eight and the buses are here.', why:'Chỉ thêm âm -es và đổi is thành are. Trong tranh có một xe buýt.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'past', r:'/pɑːst/', vi:'hơn (giờ)' }, { w:'suitcase', r:'/ˈsuːtkeɪs/', vi:'cái vali' },
    { w:'here', r:'/hɪə/', vi:'ở đây, đã tới' }, { w:'bus', r:'/bʌs/', vi:'xe buýt' }
  ],
  gram:[{ p:'five past và five to', vi:'five past eight là 8:05, five to eight là 7:55. Chênh nhau mười phút và một chữ.',
    ex:['It is five past eight and the bus is here.', 'Tám giờ năm phút và xe buýt đã tới.'] }] },

{ id:'en-52', lang:'en', lv:'a2', cat:'Du lịch',
  scene:{ bg:'street', items:[
    { p:'sign', x:100, y:220, dir:'right' }, { p:'person', x:200, y:220, pose:'walk' },
    { p:'suitcase', x:240, y:220 }, { p:'car', x:330, y:220, w:80 }
  ]},
  alt:'Biển chỉ đường mũi tên hướng sang phải, một người kéo vali đi bộ, ô tô ở bên phải.',
  opts:[
    { t:'The arrow on the sign points to the right.', ok:true },
    { t:'The arrow on the sign points to the left.', why:'right và left đều là từ một âm tiết, nằm cuối câu — chỗ tai dễ buông nhất.', trap:'trái / phải' },
    { t:'The arrows on the sign point to the right.', why:'Chỉ thêm âm -s hai chỗ. Trên biển chỉ có một mũi tên.', trap:'số ít / số nhiều' },
    { t:'The arrow on the car points to the right.', why:'Chiếc ô tô có thật trong tranh, nhưng mũi tên nằm trên tấm biển.', trap:'đúng vật, sai vị trí' }
  ],
  keys:[
    { w:'arrow', r:'/ˈærəʊ/', vi:'mũi tên' }, { w:'sign', r:'/saɪn/', vi:'biển báo' },
    { w:'point to', r:'/pɔɪnt tuː/', vi:'chỉ về phía' }, { w:'right', r:'/raɪt/', vi:'bên phải' }
  ],
  gram:[{ p:'point to the right / to the left', vi:'Hướng luôn đi với «to the». Nghe được hai chữ này là biết chữ tiếp theo mới là hướng thật.',
    ex:['The arrow on the sign points to the right.', 'Mũi tên trên biển chỉ sang phải.'] }] },

{ id:'en-53', lang:'en', lv:'b1', cat:'Du lịch',
  scene:{ bg:'room', items:[
    { p:'bed', x:120, y:220 }, { p:'suitcase', x:240, y:220, s:1.2 },
    { p:'coat', x:320, y:180 }, { p:'clock', x:320, y:60, time:'6:00', r:22 }
  ]},
  alt:'Cái vali đã đóng để giữa phòng, áo khoác vẫn treo trên móc, đồng hồ chỉ 6 giờ.',
  opts:[
    { t:'She has already packed her suitcase.', ok:true },
    { t:'She is packing her suitcase.', why:'is packing là đang xếp dở. Cái vali trong tranh đã đóng nắp.', trap:'thì: đang làm / đã xong' },
    { t:'She is going to pack her suitcase.', why:'is going to là sắp làm, chưa bắt đầu. Vali đã xếp xong rồi.', trap:'thì: sắp làm' },
    { t:'She has already packed her coat.', why:'Chiếc áo khoác vẫn còn treo trên móc, chưa vào vali.', trap:'đúng vật, chưa đúng trạng thái' }
  ],
  keys:[
    { w:'pack', r:'/pæk/', vi:'xếp đồ vào vali' }, { w:'already', r:'/ɔːlˈredi/', vi:'đã… rồi' },
    { w:'suitcase', r:'/ˈsuːtkeɪs/', vi:'cái vali' }, { w:'going to', r:'/ˈɡəʊɪŋ tuː/', vi:'sắp, định' }
  ],
  gram:[{ p:'Ba mốc thời gian của một việc', vi:'is going to pack (sắp xếp) → is packing (đang xếp) → has packed (xếp xong). Tranh chỉ nói được một trong ba, nên phải nhìn kỹ trạng thái của vật.',
    ex:['She has already packed her suitcase.', 'Cô ấy đã xếp xong vali rồi.'] }] },

/* ================= THÚ NUÔI ================= */
{ id:'en-54', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:150, y:220 }, { p:'cat', x:150, y:174, pose:'sit', s:0.8 },
    { p:'cat', x:260, y:220, pose:'lie', s:0.9 }, { p:'lamp', x:330, y:220 }
  ]},
  alt:'Một con mèo ngồi trên ghế sofa, một con mèo khác nằm dưới sàn bên phải.',
  opts:[
    { t:'One cat is on the sofa and the other is on the floor.', ok:true },
    { t:'Both cats are on the sofa.', why:'Chỉ một con ở trên ghế, con kia nằm dưới sàn.', trap:'both' },
    { t:'One cat is on the sofa and the other is under it.', why:'under it là chui xuống gầm ghế. Con thứ hai nằm ngoài, cách ghế một quãng.', trap:'giới từ' },
    { t:'One dog is on the sofa and the other is on the floor.', why:'Chỉ khác mỗi từ thứ hai. Cả hai con trong tranh đều là mèo.', trap:'chủ thể' }
  ],
  keys:[
    { w:'cat', r:'/kæt/', vi:'con mèo' }, { w:'dog', r:'/dɒɡ/', vi:'con chó' },
    { w:'floor', r:'/flɔː/', vi:'sàn nhà' }, { w:'the other', r:'/ði ˈʌðə/', vi:'con còn lại' }
  ],
  gram:[{ p:'it thay cho vật vừa nhắc', vi:'«under it» — it chính là cái sofa vừa nói ở vế trước. Nghe đại từ phải nhớ nó đang thay cho vật nào.',
    ex:['One cat is on the sofa and the other is on the floor.', 'Một con mèo trên ghế, con kia dưới sàn.'] }] },

{ id:'en-55', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'dog', x:150, y:220, s:1.1 },
    { p:'person', x:250, y:220, pose:'walk' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Một con chó ở phía trước, người đi bộ phía sau nó, cây ở bên phải.',
  opts:[
    { t:'The dog is in front of the man.', ok:true },
    { t:'The dog is behind the man.', why:'Đổi hẳn hướng. Con chó đứng phía trước, gần mép trái hơn.', trap:'giới từ' },
    { t:'The dogs are in front of the man.', why:'Chỉ thêm âm -s và đổi is thành are. Chỉ có một con chó.', trap:'số ít / số nhiều' },
    { t:'The dog is in front of the tree.', why:'Cái cây có thật nhưng ở tít bên phải, sau lưng người kia.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'in front of', r:'/ɪn frʌnt ɒv/', vi:'phía trước' }, { w:'behind', r:'/bɪˈhaɪnd/', vi:'phía sau' },
    { w:'dog', r:'/dɒɡ/', vi:'con chó' }, { w:'man', r:'/mæn/', vi:'người đàn ông' }
  ],
  gram:[{ p:'in front of và behind', vi:'Hai giới từ ngược nhau hoàn toàn, mà trong câu lại đọc rất nhanh. Nghe được chữ đầu — «in» hay «be» — là đủ phân biệt.',
    ex:['The dog is in front of the man.', 'Con chó đi phía trước người đàn ông.'] }] },

/* ================= CẶP TỪ DỄ LẪN ================= */
{ id:'en-56', lang:'en', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'bowl', x:180, y:158 },
    { p:'ball', x:300, y:220, s:1.2 }, { p:'window', x:290, y:26, view:'sun' }
  ]},
  alt:'Một cái bát đặt trên bàn, một quả bóng nằm dưới sàn bên phải.',
  opts:[
    { t:'The bowl is on the table.', ok:true },
    { t:'The ball is on the table.', why:'bowl /bəʊl/ và ball /bɔːl/ chỉ khác nguyên âm. Quả bóng nằm dưới sàn.', trap:'gần âm: bowl / ball' },
    { t:'The bowl is under the table.', why:'Chỉ khác mỗi giới từ.', trap:'giới từ' },
    { t:'The bowls are on the table.', why:'Chỉ thêm âm -s và đổi is thành are.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'bowl', r:'/bəʊl/', vi:'cái bát' }, { w:'ball', r:'/bɔːl/', vi:'quả bóng' },
    { w:'table', r:'/ˈteɪbl/', vi:'cái bàn' }, { w:'under', r:'/ˈʌndə/', vi:'ở dưới' }
  ],
  gram:[{ p:'bowl và ball', vi:'bowl có nguyên âm đôi /əʊ/ — môi tròn rồi khép lại. ball có /ɔː/ kéo dài đều. Hai từ cùng độ dài nên chỉ còn nguyên âm để phân biệt.',
    ex:['The bowl is on the table.', 'Cái bát đặt trên bàn.'] }] },

{ id:'en-57', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:120 }, { p:'plate', x:160, y:158 },
    { p:'plant', x:300, y:220, s:1.5 }
  ]},
  alt:'Một cái đĩa đặt trên bàn, chậu cây đứng dưới sàn bên phải.',
  opts:[
    { t:'There is a plate on the table.', ok:true },
    { t:'There is a plant on the table.', why:'plate /pleɪt/ và plant /plɑːnt/ chỉ khác nguyên âm và âm cuối. Chậu cây đứng dưới sàn.', trap:'gần âm: plate / plant' },
    { t:'There are some plates on the table.', why:'Chỉ khác is/are và âm -s. Trên bàn có đúng một cái đĩa.', trap:'số ít / số nhiều' },
    { t:'There isn\'t a plate on the table.', why:'Chỉ thêm n\'t vào ngay đầu câu, chỗ tai chưa kịp vào nhịp.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'plate', r:'/pleɪt/', vi:'cái đĩa' }, { w:'plant', r:'/plɑːnt/', vi:'cây trồng trong chậu' },
    { w:'table', r:'/ˈteɪbl/', vi:'cái bàn' }, { w:'some', r:'/sʌm/', vi:'một vài' }
  ],
  gram:[{ p:'plate và plant', vi:'plate có nguyên âm đôi /eɪ/ như trong «say». plant có /ɑː/ dài và thêm âm /n/ trước /t/. Nghe kỹ có âm mũi /n/ hay không.',
    ex:['There is a plate on the table.', 'Trên bàn có một cái đĩa.'] }] },

{ id:'en-58', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'chair', x:140, y:220 }, { p:'person', x:230, y:220, pose:'stand' },
    { p:'chair', x:320, y:220 }
  ]},
  alt:'Hai cái ghế trống, một người đứng ở giữa hai cái ghế.',
  opts:[
    { t:'He is standing between two chairs.', ok:true },
    { t:'He is sitting between two chairs.', why:'Hai cái ghế đều trống, người này đứng thẳng.', trap:'hành động' },
    { t:'He is standing behind two chairs.', why:'Chỉ khác mỗi giới từ.', trap:'giới từ' },
    { t:'He is standing between two shares.', why:'chair /tʃeə/ và share /ʃeə/ chỉ khác âm đầu — /tʃ/ bật ra như «ch», /ʃ/ kéo dài như «sh».', trap:'gần âm: chair / share' }
  ],
  keys:[
    { w:'chair', r:'/tʃeə/', vi:'cái ghế' }, { w:'stand', r:'/stænd/', vi:'đứng' },
    { w:'sit', r:'/sɪt/', vi:'ngồi' }, { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa' }
  ],
  gram:[{ p:'âm /tʃ/ và /ʃ/', vi:'/tʃ/ có tiếng bật nhẹ ở đầu (chair, cheap), /ʃ/ thì luồng hơi chảy đều (share, sheep). Đây là cặp phụ âm người Việt hay trộn.',
    ex:['He is standing between two chairs.', 'Anh ấy đứng giữa hai cái ghế.'] }] },

{ id:'en-59', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:140, y:220 }, { p:'bag', x:260, y:220, s:1.3 },
    { p:'lamp', x:330, y:220 }
  ]},
  alt:'Cái túi đặt dưới sàn, cách giường một quãng; cây đèn ở góc phải.',
  opts:[
    { t:'The bag is on the floor.', ok:true },
    { t:'The bed is on the floor.', why:'bag /bæɡ/ và bed /bed/ chỉ khác nguyên âm. Câu này tuy đúng sự thật nhưng không phải điều bức tranh muốn nói tới.', trap:'gần âm: bag / bed' },
    { t:'The bag is on the bed.', why:'Chỉ khác từ cuối. Cái túi nằm dưới sàn, cách giường một quãng.', trap:'giới từ + nơi chốn' },
    { t:'The bags are on the floor.', why:'Chỉ thêm âm -s. Dưới sàn chỉ có một cái túi.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'bag', r:'/bæɡ/', vi:'cái túi' }, { w:'bed', r:'/bed/', vi:'cái giường' },
    { w:'floor', r:'/flɔː/', vi:'sàn nhà' }, { w:'lamp', r:'/læmp/', vi:'cây đèn' }
  ],
  gram:[{ p:'/æ/ và /e/', vi:'bag dùng /æ/ — hàm hạ thấp, miệng mở rộng. bed dùng /e/ — miệng hẹp hơn. Luyện cặp này giúp nghe rõ cả cat/get, man/men.',
    ex:['The bag is on the floor.', 'Cái túi nằm dưới sàn.'] }] },

/* ================= THỜI TIẾT ================= */
{ id:'en-60', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:100, y:46 }, { p:'snowfall', x:100, y:70, n:7 },
    { p:'person', x:210, y:220, pose:'walk' }, { p:'tree', x:330, y:220 }
  ]},
  alt:'Trời đang có tuyết rơi, một người đi bộ, cây ở bên phải.',
  opts:[
    { t:'It is snowing today.', ok:true },
    { t:'It is raining today.', why:'Hạt tuyết vẽ thành chấm tròn, còn mưa vẽ thành vạch xiên. Hai từ chỉ khác âm giữa.', trap:'thời tiết' },
    { t:'It isn\'t snowing today.', why:'Chỉ thêm n\'t, mà câu lại rất ngắn nên nghe càng dễ trôi.', trap:'phủ định chìm' },
    { t:'It is snowing tomorrow.', why:'Chỉ khác từ cuối. Tranh tả cảnh đang diễn ra, không phải dự báo.', trap:'today / tomorrow' }
  ],
  keys:[
    { w:'snow', r:'/snəʊ/', vi:'tuyết; có tuyết rơi' }, { w:'rain', r:'/reɪn/', vi:'mưa' },
    { w:'today', r:'/təˈdeɪ/', vi:'hôm nay' }, { w:'tomorrow', r:'/təˈmɒrəʊ/', vi:'ngày mai' }
  ],
  gram:[{ p:'It is + động từ thời tiết', vi:'Thời tiết luôn lấy «It» làm chủ ngữ giả: It is raining, It is snowing. Không nói «The weather is raining».',
    ex:['It is snowing today.', 'Hôm nay trời có tuyết.'] }] },

{ id:'en-61', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:60, y:44 }, { p:'cloud', x:150, y:50 },
    { p:'person', x:230, y:220, pose:'stand' }, { p:'hat', x:230, y:220, s:1.4 }
  ]},
  alt:'Trời vừa có nắng vừa có mây, một người đứng ngoài trời, cái mũ để dưới chân.',
  opts:[
    { t:'It is sunny but there is a cloud in the sky.', ok:true },
    { t:'It is sunny and there are clouds in the sky.', why:'Chỉ đổi and/but và thêm âm -s. Trên trời có đúng một đám mây.', trap:'số ít / số nhiều' },
    { t:'It is cloudy but there is a sun in the sky.', why:'Đổi chỗ hai vế. Trời đang nắng là chính, mây chỉ có một đám.', trap:'hoán chủ thể' },
    { t:'It is sunny but there isn\'t a cloud in the sky.', why:'Chỉ thêm n\'t. Câu này nghĩa ngược hẳn: trời quang không một gợn mây.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'sunny', r:'/ˈsʌni/', vi:'trời nắng' }, { w:'cloud', r:'/klaʊd/', vi:'đám mây' },
    { w:'sky', r:'/skaɪ/', vi:'bầu trời' }, { w:'but', r:'/bʌt/', vi:'nhưng' }
  ],
  gram:[{ p:'and và but', vi:'and là thêm vào cùng chiều, but là đổi chiều. Nghe được từ nối là đoán trước được vế sau nói xuôi hay nói ngược.',
    ex:['It is sunny but there is a cloud in the sky.', 'Trời nắng nhưng có một đám mây.'] }] },

{ id:'en-62', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:44 }, { p:'rain', x:90, y:64, n:6 },
    { p:'person', x:180, y:220, pose:'walk' }, { p:'umbrella', x:186, y:100, open:true, s:1.3 },
    { p:'umbrella', x:300, y:220, s:1.2 }
  ]},
  alt:'Trời mưa: một người che ô đang mở, một cái ô khác đã gập để dựa dưới sàn.',
  opts:[
    { t:'One umbrella is open and the other is closed.', ok:true },
    { t:'One umbrella is open and the other is too.', why:'«is too» nghĩa là cũng đang mở. Cái ô thứ hai đã gập lại.', trap:'phủ định chìm' },
    { t:'Both umbrellas are open.', why:'both là cả hai. Chỉ một cái đang bung.', trap:'both' },
    { t:'One umbrella is closed and the other is open.', why:'Đổi chỗ hai vế. Cái đang mở là cái người ta cầm.', trap:'hoán chủ thể' }
  ],
  keys:[
    { w:'open', r:'/ˈəʊpən/', vi:'mở ra' }, { w:'closed', r:'/kləʊzd/', vi:'đã đóng, đã gập' },
    { w:'too', r:'/tuː/', vi:'cũng vậy' }, { w:'umbrella', r:'/ʌmˈbrelə/', vi:'cái ô' }
  ],
  gram:[{ p:'… and the other is too', vi:'«is too» là cũng thế, «isn\'t» là ngược lại. Một chữ ở cuối câu quyết định hai vế giống hay khác nhau.',
    ex:['One umbrella is open and the other is closed.', 'Một cái ô đang mở, cái kia đã gập.'] }] },

/* ================= CỬA HÀNG ================= */
{ id:'en-63', lang:'en', lv:'a2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:44, w:90, h:120, rows:4 }, { p:'person', x:200, y:220, pose:'carry' },
    { p:'basket', x:280, y:220, s:1.3 }, { p:'money', x:330, y:220, s:1.3 }
  ]},
  alt:'Người mua hàng đang xách túi, cái giỏ và tờ tiền để dưới sàn bên phải.',
  opts:[
    { t:'She is carrying a bag.', ok:true },
    { t:'She is carrying a basket.', why:'Cái giỏ có thật trong tranh nhưng đang để dưới sàn.', trap:'đúng vật, sai đối tượng' },
    { t:'She is carrying her bag.', why:'a bag là một cái túi nào đó, her bag là túi của chính cô ấy. Tranh không cho biết túi của ai.', trap:'a / her' },
    { t:'She was carrying a bag.', why:'is thành was — chỉ một từ mà chuyển từ «đang» sang «đã». Tranh luôn tả việc đang diễn ra.', trap:'thì: is / was' }
  ],
  keys:[
    { w:'carry', r:'/ˈkæri/', vi:'xách, mang' }, { w:'basket', r:'/ˈbɑːskɪt/', vi:'cái giỏ' },
    { w:'bag', r:'/bæɡ/', vi:'cái túi' }, { w:'her', r:'/hɜː/', vi:'của cô ấy' }
  ],
  gram:[{ p:'is và was', vi:'is là bây giờ, was là lúc trước. Bài nghe xem tranh luôn hỏi cảnh đang diễn ra nên câu đúng gần như luôn dùng is.',
    ex:['She is carrying a bag.', 'Cô ấy đang xách một cái túi.'] }] },

{ id:'en-64', lang:'en', lv:'a1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:170, y:220, w:140 }, { p:'apple', x:140, y:158 },
    { p:'apple', x:172, y:158 }, { p:'banana', x:214, y:158 },
    { p:'tag', x:310, y:130, text:'$2' }
  ]},
  alt:'Trên bàn có hai quả táo và một quả chuối, bảng giá ghi 2 đô la.',
  opts:[
    { t:'There are two apples and one banana on the table.', ok:true },
    { t:'There are two apples and one banana on the shelf.', why:'Chỉ khác từ cuối. Mọi thứ bày trên mặt bàn, trong tranh cũng không có cái kệ nào.', trap:'nơi chốn' },
    { t:'There is one apple and two bananas on the table.', why:'Đổi chỗ hai con số. Nghe tới đâu phải gắn ngay tới đó.', trap:'hoán số lượng' },
    { t:'There are two apples and one banana on the table for two dollars each.', why:'Thêm mỗi chữ «each» là đổi hẳn: 2 đô cho mỗi quả chứ không phải cho cả mâm.', trap:'thêm một chữ đổi nghĩa' }
  ],
  keys:[
    { w:'apple', r:'/ˈæpl/', vi:'quả táo' }, { w:'banana', r:'/bəˈnɑːnə/', vi:'quả chuối' },
    { w:'each', r:'/iːtʃ/', vi:'mỗi (cái)' }, { w:'dollar', r:'/ˈdɒlə/', vi:'đô la' }
  ],
  gram:[{ p:'Đếm danh từ: one banana, two bananas', vi:'Số từ 2 trở lên kéo theo -s. Khi nghe, con số đứng trước là manh mối chắc chắn hơn âm -s ở cuối.',
    ex:['There are two apples and one banana on the table.', 'Trên bàn có hai quả táo và một quả chuối.'] }] },

/* ================= NHÀ CỬA ================= */
{ id:'en-65', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:40, y:30, view:'sun', open:true }, { p:'window', x:250, y:30, view:'sun' },
    { p:'sofa', x:190, y:220 }, { p:'plant', x:330, y:220, s:1.4 }
  ]},
  alt:'Hai cửa sổ: cửa bên trái đang mở, cửa bên phải đóng.',
  opts:[
    { t:'One window is open and the other is closed.', ok:true },
    { t:'Both windows are open.', why:'Chỉ cánh bên trái hé ra ngoài.', trap:'both' },
    { t:'One window is open and the other is open too.', why:'«open too» nghĩa là cả hai cùng mở, chỉ khác mỗi chữ cuối.', trap:'phủ định chìm' },
    { t:'One window is closed and the other is closed.', why:'Câu này nói cả hai đều đóng. Nghe kỹ từ thứ tư của câu.', trap:'hoán chủ thể' }
  ],
  keys:[
    { w:'window', r:'/ˈwɪndəʊ/', vi:'cửa sổ' }, { w:'open', r:'/ˈəʊpən/', vi:'mở' },
    { w:'closed', r:'/kləʊzd/', vi:'đóng' }, { w:'too', r:'/tuː/', vi:'cũng vậy' }
  ],
  gram:[{ p:'one … the other khi có đúng hai vật', vi:'Cấu trúc này luôn báo hiệu hai vật KHÁC nhau. Nếu nghe thấy «both» hay «too» thì câu đang nói hai vật giống nhau.',
    ex:['One window is open and the other is closed.', 'Một cửa sổ mở, cửa kia đóng.'] }] },

{ id:'en-66', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:60, y:100 }, { p:'table', x:220, y:220, w:110 },
    { p:'key', x:220, y:156, s:1.4 }, { p:'clock', x:330, y:60, time:'12:00', r:24 }
  ]},
  alt:'Chiếc chìa khoá đặt trên bàn, cánh cửa ở bên trái, đồng hồ chỉ 12 giờ.',
  opts:[
    { t:'The key is on the table.', ok:true },
    { t:'The key is in the door.', why:'Cánh cửa có thật trong tranh, nhưng chìa khoá nằm trên mặt bàn.', trap:'đúng vật, sai vị trí' },
    { t:'The keys are on the table.', why:'Chỉ thêm âm -s và đổi is thành are. Trên bàn có một chiếc.', trap:'số ít / số nhiều' },
    { t:'There is no key on the table.', why:'Phủ định gọn lỏn ở giữa câu. Chìa khoá rõ ràng nằm đó.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'key', r:'/kiː/', vi:'chìa khoá' }, { w:'door', r:'/dɔː/', vi:'cánh cửa' },
    { w:'table', r:'/ˈteɪbl/', vi:'cái bàn' }, { w:'no', r:'/nəʊ/', vi:'không có' }
  ],
  gram:[{ p:'there is no + danh từ', vi:'«There is no key» và «There is a key» chỉ khác một từ ngắn, mà nghĩa thì ngược hẳn. Nghe cho kỹ từ đứng ngay sau «is».',
    ex:['The key is on the table.', 'Chìa khoá nằm trên bàn.'] }] },

{ id:'en-67', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:70, y:220 }, { p:'fridge', x:160, y:220 },
    { p:'table', x:280, y:220, w:110 }, { p:'bowl', x:280, y:158 }
  ]},
  alt:'Tủ bếp bên trái, tủ lạnh ở giữa, bàn có cái bát ở bên phải.',
  opts:[
    { t:'The fridge is between the cupboard and the table.', ok:true },
    { t:'The fridge is next to the cupboard and the table.', why:'«next to» chỉ nói cạnh, không nói rõ ở giữa. Trong tranh tủ lạnh nằm đúng khoảng giữa hai vật.', trap:'giới từ' },
    { t:'The cupboard is between the fridge and the table.', why:'Đổi chỗ hai chủ thể. Tủ bếp đứng ngoài cùng bên trái.', trap:'hoán chủ thể' },
    { t:'The fridge isn\'t between the cupboard and the table.', why:'Chỉ thêm n\'t vào câu dài, chỗ dễ trôi nhất.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'fridge', r:'/frɪdʒ/', vi:'tủ lạnh' }, { w:'cupboard', r:'/ˈkʌbəd/', vi:'tủ bếp' },
    { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa' }, { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' }
  ],
  gram:[{ p:'cupboard đọc là /ˈkʌbəd/', vi:'Chữ p trong cupboard câm hoàn toàn, và chữ oa đọc thành /ə/ rất nhẹ. Nhìn mặt chữ mà đoán cách đọc là hỏng.',
    ex:['The fridge is between the cupboard and the table.', 'Tủ lạnh ở giữa tủ bếp và cái bàn.'] }] },

{ id:'en-68', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'rug', x:170, y:220, w:130 }, { p:'cat', x:170, y:216, pose:'lie' },
    { p:'shoe', x:290, y:220 }, { p:'shoe', x:316, y:220 }
  ]},
  alt:'Con mèo nằm trên tấm thảm, một đôi giày để bên cạnh thảm.',
  opts:[
    { t:'The cat is lying on the rug.', ok:true },
    { t:'The cat is lying under the rug.', why:'Chỉ khác giới từ. Con mèo nằm trên mặt thảm.', trap:'giới từ' },
    { t:'The cat is lying on the rug next to the shoes.', why:'Vế đầu đúng. Nhưng đôi giày đặt tách ra khỏi thảm chứ không sát bên mèo.', trap:'thêm chi tiết sai' },
    { t:'The cat was lying on the rug.', why:'is thành was. Bài nghe xem tranh luôn tả cảnh đang diễn ra.', trap:'thì: is / was' }
  ],
  keys:[
    { w:'lie', r:'/laɪ/', vi:'nằm' }, { w:'rug', r:'/rʌɡ/', vi:'tấm thảm' },
    { w:'shoe', r:'/ʃuː/', vi:'chiếc giày' }, { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' }
  ],
  gram:[{ p:'lie — lying', vi:'lie (nằm) khi thêm -ing thì đổi thành lying. Đừng lẫn với lay hay với lie nghĩa «nói dối».',
    ex:['The cat is lying on the rug.', 'Con mèo đang nằm trên tấm thảm.'] }] },

/* ================= LỚP HỌC · SỐ ĐẾM ================= */
{ id:'en-69', lang:'en', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'shelf', x:250, y:110, w:110, h:104, rows:2 }, { p:'desk', x:110, y:220 },
    { p:'book', x:110, y:158, open:true }
  ]},
  alt:'Một cuốn sách đang mở đặt trên bàn, kệ sách ở bên phải.',
  opts:[
    { t:'The book on the desk is open.', ok:true },
    { t:'The book on the desk is closed.', why:'Cuốn sách trong tranh xoè hai trang ra hai bên.', trap:'trạng thái ngược' },
    { t:'The books on the desk are open.', why:'Chỉ thêm âm -s và đổi is thành are. Trên bàn có một cuốn.', trap:'số ít / số nhiều' },
    { t:'The book on the shelf is open.', why:'Cái kệ có thật và có sách thật, nhưng cuốn đang mở nằm trên bàn.', trap:'đúng vật, sai vị trí' }
  ],
  keys:[
    { w:'book', r:'/bʊk/', vi:'cuốn sách' }, { w:'open', r:'/ˈəʊpən/', vi:'đang mở' },
    { w:'closed', r:'/kləʊzd/', vi:'đang đóng' }, { w:'shelf', r:'/ʃelf/', vi:'cái kệ' }
  ],
  gram:[{ p:'Cụm «the + danh từ + on the …»', vi:'Phần «on the desk» là để chỉ rõ cuốn sách NÀO. Nghe hết cả cụm rồi mới xét vị ngữ, đừng vội quyết khi mới nghe «the book».',
    ex:['The book on the desk is open.', 'Cuốn sách trên bàn đang mở.'] }] },

{ id:'en-70', lang:'en', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'chair', x:100, y:220 }, { p:'chair', x:180, y:220 },
    { p:'chair', x:260, y:220 }, { p:'person', x:100, y:220, pose:'stand' }
  ]},
  alt:'Ba cái ghế xếp hàng, một người đứng cạnh cái ghế đầu tiên bên trái.',
  opts:[
    { t:'He is standing next to the first chair on the left.', ok:true },
    { t:'He is standing next to the first chair on the right.', why:'Chỉ khác từ cuối. Người này ở phía bên trái của hàng ghế.', trap:'trái / phải' },
    { t:'He is standing next to the third chair on the left.', why:'first và third đều ngắn, nằm giữa câu dài nên dễ nghe sót.', trap:'thứ tự' },
    { t:'He is sitting next to the first chair on the left.', why:'Cả ba cái ghế đều trống, người này đang đứng.', trap:'hành động' }
  ],
  keys:[
    { w:'first', r:'/fɜːst/', vi:'thứ nhất' }, { w:'third', r:'/θɜːd/', vi:'thứ ba' },
    { w:'on the left', r:'/ɒn ðə left/', vi:'ở phía bên trái' }, { w:'chair', r:'/tʃeə/', vi:'cái ghế' }
  ],
  gram:[{ p:'Số thứ tự: first · second · third', vi:'Ba từ này đều ngắn và hay nằm chìm giữa câu. Nghe được chúng là xác định được đúng vật trong một hàng.',
    ex:['He is standing next to the first chair on the left.', 'Anh ấy đứng cạnh cái ghế đầu tiên bên trái.'] }] },

{ id:'en-71', lang:'en', lv:'b1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:120, y:220, pose:'write' }, { p:'desk', x:112, y:220, w:92 },
    { p:'person', x:250, y:220, pose:'write' }, { p:'desk', x:242, y:220, w:92 },
    { p:'clock', x:216, y:34, time:'11:30', r:22 }
  ]},
  alt:'Hai bạn cùng ngồi viết ở hai cái bàn riêng, đồng hồ chỉ 11 giờ 30.',
  opts:[
    { t:'Both of them are writing.', ok:true },
    { t:'Both of them are reading.', why:'Cả hai đều cầm bút cúi xuống bàn, không ai cầm sách.', trap:'hành động' },
    { t:'One of them is writing.', why:'Câu này đúng về mặt sự thật nhưng bỏ sót người thứ hai — trong bốn câu chỉ có một câu tả trọn vẹn bức tranh.', trap:'tả thiếu' },
    { t:'Neither of them is writing.', why:'neither là không ai cả, ngược hẳn với both. Hai từ này cùng nằm ở đầu câu.', trap:'neither' }
  ],
  keys:[
    { w:'both', r:'/bəʊθ/', vi:'cả hai' }, { w:'neither', r:'/ˈnaɪðə/', vi:'không ai trong hai' },
    { w:'write', r:'/raɪt/', vi:'viết' }, { w:'read', r:'/riːd/', vi:'đọc' }
  ],
  gram:[{ p:'both … are / neither … is', vi:'both đi với động từ số nhiều (are), neither đi với số ít (is). Chính động từ là manh mối thứ hai giúp bạn xác nhận đã nghe đúng.',
    ex:['Both of them are writing.', 'Cả hai bạn đều đang viết.'] }] },

/* ================= THỜI GIAN ================= */
{ id:'en-72', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:200, y:84, time:'12:00', r:34 },
    { p:'table', x:200, y:220, w:110 }, { p:'cup', x:200, y:158 }
  ]},
  alt:'Đồng hồ treo tường chỉ đúng 12 giờ, dưới bàn có một cái cốc.',
  opts:[
    { t:'It is twelve o\'clock.', ok:true },
    { t:'It is twenty o\'clock.', why:'twelve và twenty đều bắt đầu bằng /tw/. Hai kim đang chồng lên nhau ở số 12.', trap:'gần âm: twelve / twenty' },
    { t:'It is two o\'clock.', why:'two và twelve chỉ khác phần đuôi, mà đuôi lại hay bị nuốt.', trap:'gần âm: two / twelve' },
    { t:'It is half past twelve.', why:'Thêm «half past» là thành 12:30. Kim phút đang chỉ thẳng lên số 12.', trap:'giờ: nửa giờ' }
  ],
  keys:[
    { w:'twelve', r:'/twelv/', vi:'mười hai' }, { w:'twenty', r:'/ˈtwenti/', vi:'hai mươi' },
    { w:'o\'clock', r:'/əˈklɒk/', vi:'đúng giờ (giờ chẵn)' }, { w:'half past', r:'/hɑːf pɑːst/', vi:'rưỡi' }
  ],
  gram:[{ p:'o\'clock chỉ dùng cho giờ chẵn', vi:'Nói «twelve o\'clock» khi kim phút chỉ đúng số 12. Không bao giờ nói «half past twelve o\'clock».',
    ex:['It is twelve o\'clock.', 'Bây giờ là mười hai giờ đúng.'] }] },

{ id:'en-73', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'7:15', r:30 }, { p:'calendar', x:280, y:34, text:'7' },
    { p:'table', x:200, y:220, w:110 }, { p:'bread', x:200, y:158 }
  ]},
  alt:'Đồng hồ chỉ 7 giờ 15, tờ lịch ghi số 7, trên bàn có bánh mì.',
  opts:[
    { t:'It is a quarter past seven on the seventh.', ok:true },
    { t:'It is a quarter past seven on the seventeenth.', why:'seventh và seventeenth chỉ khác một âm tiết ở giữa. Tờ lịch ghi 7.', trap:'gần âm: seventh / seventeenth' },
    { t:'It is a quarter to seven on the seventh.', why:'past thành to là lùi mất nửa tiếng. Kim phút đang ở số 3.', trap:'giờ: to / past' },
    { t:'It is a quarter past eleven on the seventh.', why:'Vế cuối đúng nên tai đã yên tâm. Kim ngắn đang ở số 7.', trap:'giờ: sai giờ' }
  ],
  keys:[
    { w:'seventh', r:'/ˈsevnθ/', vi:'ngày mùng bảy' }, { w:'seventeenth', r:'/ˌsevnˈtiːnθ/', vi:'ngày mười bảy' },
    { w:'quarter', r:'/ˈkwɔːtə/', vi:'mười lăm phút' }, { w:'past', r:'/pɑːst/', vi:'hơn (giờ)' }
  ],
  gram:[{ p:'Câu có hai con số', vi:'Khi một câu chứa cả giờ lẫn ngày, bẫy thường đặt ở con số thứ hai — lúc tai đã mệt. Nghe hết câu rồi mới quyết.',
    ex:['It is a quarter past seven on the seventh.', 'Bảy giờ mười lăm, ngày mùng bảy.'] }] },

{ id:'en-74', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:250, y:28, view:'night' }, { p:'clock', x:80, y:70, time:'9:40', r:28 },
    { p:'sofa', x:200, y:220 }, { p:'person', x:200, y:220, pose:'read', s:0.85 }
  ]},
  alt:'Buổi tối, đồng hồ chỉ 9 giờ 40, một người đang đọc sách bên ghế sofa.',
  opts:[
    { t:'It is twenty to ten and he is still reading.', ok:true },
    { t:'It is twenty past ten and he is still reading.', why:'to thành past là chênh bốn mươi phút. Kim phút đang ở số 8.', trap:'giờ: to / past' },
    { t:'It is twenty to ten and he is already reading.', why:'still là vẫn còn đang; already là đã bắt đầu sớm hơn dự tính. Hai từ đều ngắn, nằm cùng một chỗ trong câu.', trap:'already / still' },
    { t:'It is twenty to ten and he isn\'t reading.', why:'Chỉ thêm n\'t ở gần cuối, sau khi vế giờ đã đúng.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'twenty to', r:'/ˈtwenti tuː/', vi:'kém hai mươi' }, { w:'still', r:'/stɪl/', vi:'vẫn còn đang' },
    { w:'already', r:'/ɔːlˈredi/', vi:'đã… rồi' }, { w:'read', r:'/riːd/', vi:'đọc' }
  ],
  gram:[{ p:'still trong câu khẳng định', vi:'still đứng ngay trước động từ chính và nghĩa là việc vẫn đang kéo dài. Nó khác already — đã xảy ra rồi — dù cả hai cùng đứng một chỗ.',
    ex:['It is twenty to ten and he is still reading.', 'Mười giờ kém hai mươi và anh ấy vẫn đang đọc.'] }] },

{ id:'en-75', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:140, y:220 }, { p:'sleeper', x:148, y:180 },
    { p:'clock', x:300, y:70, time:'6:00', r:30 }, { p:'window', x:250, y:30, view:'sun' }
  ]},
  alt:'Trời đã sáng, đồng hồ chỉ 6 giờ, một người vẫn đang ngủ trên giường.',
  opts:[
    { t:'It is six o\'clock and he is still in bed.', ok:true },
    { t:'It is six o\'clock and he is out of bed.', why:'«still in bed» và «out of bed» ngược hẳn nhau, mà đều là mấy từ ngắn ở cuối câu.', trap:'trạng thái ngược' },
    { t:'It is seven o\'clock and he is still in bed.', why:'six và seven đều ngắn. Kim ngắn đang ở số 6.', trap:'gần âm: six / seven' },
    { t:'It is six o\'clock and she is still in bed.', why:'he thành she — một âm duy nhất ở giữa câu.', trap:'he / she' }
  ],
  keys:[
    { w:'in bed', r:'/ɪn bed/', vi:'đang nằm trên giường' }, { w:'still', r:'/stɪl/', vi:'vẫn còn' },
    { w:'six', r:'/sɪks/', vi:'sáu' }, { w:'seven', r:'/ˈsevn/', vi:'bảy' }
  ],
  gram:[{ p:'in bed — cụm cố định, không có «the»', vi:'«in bed» nghĩa là đang nằm ngủ. Nếu thêm the thành «in the bed» thì lại chỉ đơn thuần là ở bên trong cái giường.',
    ex:['It is six o\'clock and he is still in bed.', 'Sáu giờ rồi mà anh ấy vẫn còn nằm trên giường.'] }] },

/* ================= ĐẠI TỪ · SỞ HỮU ================= */
{ id:'en-76', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'carry' }, { p:'person', x:250, y:220, pose:'stand' },
    { p:'bag', x:320, y:220, s:1.2 }
  ]},
  alt:'Người bên trái đang xách một cái túi, người bên phải đứng tay không, một cái túi khác để dưới sàn.',
  opts:[
    { t:'He has a bag but she doesn\'t.', ok:true },
    { t:'He has a bag but she does.', why:'Chỉ thiếu mỗi n\'t ở chữ cuối cùng — và đó là chữ quyết định cả câu.', trap:'phủ định chìm' },
    { t:'She has a bag but he doesn\'t.', why:'Đổi chỗ hai người. Người xách túi đứng bên trái.', trap:'hoán chủ thể' },
    { t:'He has her bag but she doesn\'t.', why:'a bag thành her bag — tranh không cho biết cái túi là của ai.', trap:'a / her' }
  ],
  keys:[
    { w:'have', r:'/hæv/', vi:'có' }, { w:'but', r:'/bʌt/', vi:'nhưng' },
    { w:'doesn\'t', r:'/ˈdʌznt/', vi:'không (ngôi thứ ba)' }, { w:'bag', r:'/bæɡ/', vi:'cái túi' }
  ],
  gram:[{ p:'… but she doesn\'t', vi:'Người Anh rút gọn vế sau, chỉ giữ lại trợ động từ. Toàn bộ nghĩa dồn vào chữ cuối: does hay doesn\'t.',
    ex:['He has a bag but she doesn\'t.', 'Anh ấy có túi còn cô ấy thì không.'] }] },

{ id:'en-77', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:140, y:220, pose:'phone' }, { p:'table', x:260, y:220, w:110 },
    { p:'phone', x:260, y:156, s:1.4 }
  ]},
  alt:'Một người đang áp điện thoại lên tai; một chiếc điện thoại khác nằm trên bàn.',
  opts:[
    { t:'There is a phone on the table and he\'s using another one.', ok:true },
    { t:'There is a phone on the table and his is another one.', why:'he\'s (he is) và his đọc gần như nhau khi nói nhanh, nhưng ngữ pháp và nghĩa khác hẳn.', trap:'he\'s / his' },
    { t:'There is a phone on the table and he\'s using that one.', why:'that one là chính cái trên bàn. Anh ấy đang dùng một cái khác.', trap:'another / that' },
    { t:'There are phones on the table and he\'s using another one.', why:'Chỉ thêm âm -s và đổi is thành are. Trên bàn có một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'another', r:'/əˈnʌðə/', vi:'một cái khác' }, { w:'use', r:'/juːz/', vi:'dùng' },
    { w:'phone', r:'/fəʊn/', vi:'điện thoại' }, { w:'his', r:'/hɪz/', vi:'của anh ấy' }
  ],
  gram:[{ p:'he\'s và his', vi:'he\'s là rút gọn của he is (hoặc he has) nên phải có động từ theo sau. his là sở hữu nên phải có danh từ theo sau. Nghe từ ĐỨNG SAU là biết ngay từ nào.',
    ex:['He\'s using another one.', 'Anh ấy đang dùng một cái khác.'] }] },

{ id:'en-78', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:140 }, { p:'glasses', x:150, y:158, s:1.3 },
    { p:'key', x:215, y:156, s:1.2 }, { p:'person', x:320, y:220, pose:'stand' }
  ]},
  alt:'Trên bàn có cặp kính và chiếc chìa khoá; một người đứng bên phải.',
  opts:[
    { t:'His glasses are on the table.', ok:true },
    { t:'His glass is on the table.', why:'glass là cái cốc, glasses là cặp kính. Chỉ khác âm -es mà đổi hẳn vật.', trap:'gần âm: glass / glasses' },
    { t:'Her glasses are on the table.', why:'his thành her — một âm duy nhất ở đầu câu.', trap:'his / her' },
    { t:'His glasses are on the chair.', why:'Chỉ khác từ cuối. Trong tranh không có cái ghế nào.', trap:'vật không có' }
  ],
  keys:[
    { w:'glasses', r:'/ˈɡlɑːsɪz/', vi:'cặp kính' }, { w:'glass', r:'/ɡlɑːs/', vi:'cốc thuỷ tinh' },
    { w:'his', r:'/hɪz/', vi:'của anh ấy' }, { w:'her', r:'/hɜː/', vi:'của cô ấy' }
  ],
  gram:[{ p:'glasses luôn ở dạng số nhiều', vi:'Cặp kính gồm hai mắt nên luôn là glasses và đi với are. Nếu nghe thấy «glass is» thì đang nói về cái cốc.',
    ex:['His glasses are on the table.', 'Cặp kính của anh ấy để trên bàn.'] }] },

/* ================= SỐ ĐẾM LỚN ================= */
{ id:'en-79', lang:'en', lv:'a2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:40, w:90, h:120, rows:4 }, { p:'tag', x:220, y:120, text:'$18' },
    { p:'coat', x:300, y:180 }
  ]},
  alt:'Chiếc áo khoác treo bên phải, bảng giá ghi 18 đô la.',
  opts:[
    { t:'The coat costs eighteen dollars.', ok:true },
    { t:'The coat costs eighty dollars.', why:'eighTEEN nhấn cuối, EIGHty nhấn đầu. Bảng ghi 18.', trap:'gần âm: eighteen / eighty' },
    { t:'The coat cost eighteen dollars.', why:'costs thành cost — chỉ mất âm -s mà chuyển từ hiện tại sang quá khứ.', trap:'thì: costs / cost' },
    { t:'The coats cost eighteen dollars.', why:'Chỉ thêm âm -s vào danh từ. Trong tranh chỉ treo một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'eighteen', r:'/ˌeɪˈtiːn/', vi:'mười tám' }, { w:'eighty', r:'/ˈeɪti/', vi:'tám mươi' },
    { w:'cost', r:'/kɒst/', vi:'có giá là' }, { w:'coat', r:'/kəʊt/', vi:'áo khoác' }
  ],
  gram:[{ p:'costs và cost', vi:'Hiện tại ngôi thứ ba số ít thêm -s: it costs. Bỏ -s đi thì thành quá khứ: it cost. Một âm nhỏ mà đổi cả thời gian.',
    ex:['The coat costs eighteen dollars.', 'Chiếc áo khoác giá mười tám đô la.'] }] },

{ id:'en-80', lang:'en', lv:'a2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:150 }, { p:'book', x:150, y:158 },
    { p:'book', x:185, y:158 }, { p:'book', x:220, y:158 },
    { p:'tag', x:310, y:126, text:'$19' }
  ]},
  alt:'Ba cuốn sách xếp trên bàn, bảng giá ghi 19 đô la.',
  opts:[
    { t:'Three books cost nineteen dollars.', ok:true },
    { t:'Three books cost ninety dollars.', why:'nineTEEN nhấn cuối, NINEty nhấn đầu. Bảng ghi 19.', trap:'gần âm: nineteen / ninety' },
    { t:'Three books cost nineteen dollars each.', why:'Thêm mỗi chữ «each» là thành 57 đô cả ba cuốn.', trap:'thêm một chữ đổi nghĩa' },
    { t:'Thirteen books cost nineteen dollars.', why:'three và thirteen chỉ khác đuôi -teen. Trên bàn có ba cuốn.', trap:'gần âm: three / thirteen' }
  ],
  keys:[
    { w:'nineteen', r:'/ˌnaɪnˈtiːn/', vi:'mười chín' }, { w:'ninety', r:'/ˈnaɪnti/', vi:'chín mươi' },
    { w:'book', r:'/bʊk/', vi:'cuốn sách' }, { w:'each', r:'/iːtʃ/', vi:'mỗi cái' }
  ],
  gram:[{ p:'Giá cả lô và giá mỗi cái', vi:'«cost nineteen dollars» là giá cho cả ba cuốn. Thêm «each» vào cuối là giá cho từng cuốn. Chữ cuối câu quan trọng nhất.',
    ex:['Three books cost nineteen dollars.', 'Ba cuốn sách giá mười chín đô la.'] }] },

/* ================= HÀNH ĐỘNG GẦN GIỐNG ================= */
{ id:'en-81', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:130 }, { p:'cup', x:200, y:158 },
    { p:'person', x:120, y:220, pose:'drink' }, { p:'window', x:290, y:28, view:'sun' }
  ]},
  alt:'Một người đang đưa cốc lên miệng uống, trên bàn còn một cốc nữa.',
  opts:[
    { t:'He is drinking from a cup.', ok:true },
    { t:'He is drinking from a cap.', why:'cup /kʌp/ và cap /kæp/ chỉ khác nguyên âm, mà cả hai đều là từ rất ngắn.', trap:'gần âm: cup / cap' },
    { t:'He is holding a cup.', why:'holding là chỉ cầm, drinking là đang uống. Trong tranh cốc đã đưa tới miệng.', trap:'hành động gần giống' },
    { t:'He isn\'t drinking from a cup.', why:'Chỉ thêm n\'t ngay sau chủ ngữ.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'cup', r:'/kʌp/', vi:'cái cốc' }, { w:'cap', r:'/kæp/', vi:'mũ lưỡi trai' },
    { w:'drink', r:'/drɪŋk/', vi:'uống' }, { w:'hold', r:'/həʊld/', vi:'cầm' }
  ],
  gram:[{ p:'drink from', vi:'Uống từ vật đựng nào thì dùng «drink from»: drink from a cup, from a bottle. Nghe được giới từ from là biết câu đang nói tới vật đựng.',
    ex:['He is drinking from a cup.', 'Anh ấy đang uống từ cái cốc.'] }] },

{ id:'en-82', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'stove', x:130, y:220 }, { p:'person', x:196, y:220, pose:'cook', flip:true },
    { p:'table', x:300, y:220, w:100 }, { p:'bowl', x:300, y:158 }
  ]},
  alt:'Một người đang nấu bên bếp, cái bát để sẵn trên bàn bên phải.',
  opts:[
    { t:'She is still cooking.', ok:true },
    { t:'She has already cooked.', why:'has cooked là đã nấu xong. Trong tranh tay vẫn đang trên bếp.', trap:'thì: đã xong' },
    { t:'She is going to cook.', why:'is going to là sắp làm, chưa bắt đầu. Cô ấy đã đứng bên bếp rồi.', trap:'thì: sắp làm' },
    { t:'She is still cooking it.', why:'Thêm mỗi chữ «it» ở cuối, mà «it» phải thay cho một món đã nhắc trước đó — ở đây chưa nhắc gì.', trap:'đại từ không có gốc' }
  ],
  keys:[
    { w:'still', r:'/stɪl/', vi:'vẫn còn đang' }, { w:'already', r:'/ɔːlˈredi/', vi:'đã… rồi' },
    { w:'cook', r:'/kʊk/', vi:'nấu ăn' }, { w:'going to', r:'/ˈɡəʊɪŋ tuː/', vi:'sắp' }
  ],
  gram:[{ p:'Ba mốc của một hành động', vi:'is going to cook → is cooking → has cooked. Chỉ một mốc đúng với tranh, nên nghe được cụm thì là loại được hai đáp án ngay.',
    ex:['She is still cooking.', 'Cô ấy vẫn đang nấu.'] }] },

{ id:'en-83', lang:'en', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:230, y:220, pose:'read', s:0.95 }, { p:'desk', x:230, y:220, w:100 },
    { p:'shelf', x:320, y:120, w:66, h:90, rows:3 }
  ]},
  alt:'Một bạn ngồi ở bàn, hai tay cầm cuốn sách đang mở.',
  opts:[
    { t:'She is reading a book.', ok:true },
    { t:'She is reading her book.', why:'a book là một cuốn nào đó, her book là sách của chính cô ấy. Tranh không cho biết sách của ai.', trap:'a / her' },
    { t:'She is writing in a book.', why:'reading và writing đều là hành động với cuốn sách, nhưng trong tranh hai tay đang giữ sách mở ra trước mặt.', trap:'hành động gần giống' },
    { t:'She has read a book.', why:'has read là đã đọc xong. Cuốn sách vẫn đang mở trên tay.', trap:'thì: đã xong' }
  ],
  keys:[
    { w:'read', r:'/riːd/', vi:'đọc' }, { w:'book', r:'/bʊk/', vi:'cuốn sách' },
    { w:'write', r:'/raɪt/', vi:'viết' }, { w:'her', r:'/hɜː/', vi:'của cô ấy' }
  ],
  gram:[{ p:'a và her', vi:'Mạo từ a chỉ nói «một cái nào đó». Sở hữu her khẳng định vật ấy là của cô ấy — một thông tin mà bức tranh thường không nói được.',
    ex:['She is reading a book.', 'Cô ấy đang đọc một cuốn sách.'] }] },

/* ================= NHIỀU VẬT CÙNG LOẠI ================= */
{ id:'en-84', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'tree', x:110, y:220, h:96 },
    { p:'tree', x:200, y:220, h:96 }, { p:'bird', x:300, y:218 }
  ]},
  alt:'Hai cái cây đứng cạnh nhau, một con chim đậu dưới đất bên phải.',
  opts:[
    { t:'There are two trees and one bird.', ok:true },
    { t:'There are three trees and one bird.', why:'two và three đều ngắn. Trong tranh có đúng hai cây.', trap:'số lượng' },
    { t:'There are two trees and one bird in the tree.', why:'Thêm «in the tree» ở cuối. Con chim đứng dưới đất chứ không đậu trên cây.', trap:'thêm chi tiết sai' },
    { t:'There are two trees but no birds.', why:'«but no birds» thay cho «and one bird» — mấy chữ ngắn ở cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'tree', r:'/triː/', vi:'cái cây' }, { w:'bird', r:'/bɜːd/', vi:'con chim' },
    { w:'two', r:'/tuː/', vi:'hai' }, { w:'three', r:'/θriː/', vi:'ba' }
  ],
  gram:[{ p:'two và three', vi:'two bắt đầu bằng /t/, three bắt đầu bằng /θ/ — lưỡi chạm răng. Nghe âm đầu là tách được, khỏi cần đếm.',
    ex:['There are two trees and one bird.', 'Có hai cái cây và một con chim.'] }] },

{ id:'en-85', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:170 }, { p:'egg', x:140, y:158 },
    { p:'egg', x:168, y:158 }, { p:'egg', x:196, y:158 },
    { p:'egg', x:224, y:158 }, { p:'bowl', x:270, y:158 }
  ]},
  alt:'Bốn quả trứng xếp hàng trên bàn, cạnh đó có một cái bát.',
  opts:[
    { t:'There are four eggs next to the bowl.', ok:true },
    { t:'There are four eggs in the bowl.', why:'Cái bát có thật nhưng bốn quả trứng nằm bên cạnh, không ở trong bát.', trap:'giới từ' },
    { t:'There are fourteen eggs next to the bowl.', why:'four và fourteen chỉ khác đuôi -teen.', trap:'gần âm: four / fourteen' },
    { t:'There are four eggs next to the ball.', why:'bowl /bəʊl/ và ball /bɔːl/ chỉ khác nguyên âm, mà lại nằm ở cuối câu.', trap:'gần âm: bowl / ball' }
  ],
  keys:[
    { w:'egg', r:'/eɡ/', vi:'quả trứng' }, { w:'bowl', r:'/bəʊl/', vi:'cái bát' },
    { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' }, { w:'four', r:'/fɔː/', vi:'bốn' }
  ],
  gram:[{ p:'next to và in', vi:'next to là nằm cạnh, bên ngoài. in là nằm bên trong. Bẫy hay dùng nhất khi trong tranh có vật đựng.',
    ex:['There are four eggs next to the bowl.', 'Có bốn quả trứng bên cạnh cái bát.'] }] },

{ id:'en-86', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:50, y:50, w:96, h:130, rows:4 }, { p:'table', x:250, y:220, w:120 },
    { p:'book', x:250, y:158 }, { p:'lamp', x:330, y:220 }
  ]},
  alt:'Kệ sách đầy sách ở bên trái, chỉ một cuốn để riêng trên bàn.',
  opts:[
    { t:'Most of the books are on the shelf.', ok:true },
    { t:'All of the books are on the shelf.', why:'all là tất cả. Vẫn còn một cuốn nằm trên bàn.', trap:'most / all' },
    { t:'Most of the books are on the table.', why:'Đổi chỗ hai vật. Trên bàn chỉ có đúng một cuốn.', trap:'hoán chủ thể' },
    { t:'Most of the books aren\'t on the shelf.', why:'Chỉ thêm n\'t vào giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'most of', r:'/məʊst ɒv/', vi:'phần lớn' }, { w:'all of', r:'/ɔːl ɒv/', vi:'tất cả' },
    { w:'shelf', r:'/ʃelf/', vi:'cái kệ' }, { w:'book', r:'/bʊk/', vi:'cuốn sách' }
  ],
  gram:[{ p:'most of và all of', vi:'most of là phần lớn nhưng không phải tất cả. Khi trong tranh có một vật nằm riêng ra, câu đúng gần như luôn dùng most chứ không dùng all.',
    ex:['Most of the books are on the shelf.', 'Phần lớn sách nằm trên kệ.'] }] },

/* ================= NGOÀI TRỜI ================= */
{ id:'en-87', lang:'en', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:44 }, { p:'car', x:150, y:220, w:84 },
    { p:'car', x:270, y:220, w:84 }, { p:'tree', x:350, y:220 }
  ]},
  alt:'Hai chiếc ô tô đỗ cách nhau một quãng, cái cây ở ngoài cùng bên phải.',
  opts:[
    { t:'There are two cars in the street.', ok:true },
    { t:'There are two cars in the car park.', why:'Thêm mỗi hai chữ ở cuối. Tranh chỉ cho thấy mặt đường, không có bãi đỗ.', trap:'thêm chi tiết sai' },
    { t:'There is a car in the street.', why:'Chỉ khác is/are và âm -s. Ngoài phố có hai chiếc.', trap:'số ít / số nhiều' },
    { t:'There are two cars and two trees in the street.', why:'Vế đầu đúng hoàn toàn. Nhưng chỉ có một cái cây.', trap:'số lượng' }
  ],
  keys:[
    { w:'car', r:'/kɑː/', vi:'ô tô con' }, { w:'street', r:'/striːt/', vi:'con phố' },
    { w:'car park', r:'/kɑː pɑːk/', vi:'bãi đỗ xe' }, { w:'tree', r:'/triː/', vi:'cái cây' }
  ],
  gram:[{ p:'in the street', vi:'Người Anh nói «in the street», người Mỹ nói «on the street». Cả hai đều đúng, nhưng nghe được giới từ là bắt được cả cụm.',
    ex:['There are two cars in the street.', 'Ngoài phố có hai chiếc ô tô.'] }] },

{ id:'en-88', lang:'en', lv:'a1', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:52, y:44 }, { p:'bicycle', x:160, y:220 },
    { p:'person', x:250, y:220, pose:'stand' }, { p:'bus', x:340, y:220, w:88 }
  ]},
  alt:'Chiếc xe đạp dựng bên trái, một người đứng ở giữa, xe buýt ở bên phải.',
  opts:[
    { t:'The man is standing between the bicycle and the bus.', ok:true },
    { t:'The man is standing behind the bicycle and the bus.', why:'Chỉ khác mỗi giới từ.', trap:'giới từ' },
    { t:'The men are standing between the bicycle and the bus.', why:'man thành men — chỉ khác một nguyên âm, mà lại kéo theo cả is thành are.', trap:'gần âm: man / men' },
    { t:'The man is sitting between the bicycle and the bus.', why:'Chỉ khác động từ. Người trong tranh đứng thẳng, hai chân chạm đất.', trap:'hành động' }
  ],
  keys:[
    { w:'man', r:'/mæn/', vi:'người đàn ông' }, { w:'men', r:'/men/', vi:'những người đàn ông' },
    { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa' }, { w:'stand', r:'/stænd/', vi:'đứng' }
  ],
  gram:[{ p:'man và men', vi:'Số nhiều bất quy tắc: man → men, woman → women, child → children. Không có âm -s nên phải nghe nguyên âm bên trong từ.',
    ex:['The man is standing between the bicycle and the bus.', 'Người đàn ông đứng giữa xe đạp và xe buýt.'] }] },

{ id:'en-89', lang:'en', lv:'b1', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:42 }, { p:'rain', x:80, y:62, n:6 },
    { p:'bus', x:180, y:220, w:110 }, { p:'person', x:300, y:220, pose:'walk' },
    { p:'umbrella', x:306, y:100, open:true, s:1.2 }
  ]},
  alt:'Trời mưa: xe buýt đã tới, một người che ô đi bộ ở bên phải.',
  opts:[
    { t:'It is raining so she is using an umbrella.', ok:true },
    { t:'It is raining but she is using an umbrella.', why:'so là vì thế, but là nhưng. Che ô khi trời mưa là chuyện thuận, không phải nghịch.', trap:'so / but' },
    { t:'It is raining so she isn\'t using an umbrella.', why:'Chỉ thêm n\'t ở nửa sau câu.', trap:'phủ định chìm' },
    { t:'It was raining so she is using an umbrella.', why:'is thành was ở ngay đầu câu — chỗ tai vừa mới vào nhịp.', trap:'thì: is / was' }
  ],
  keys:[
    { w:'so', r:'/səʊ/', vi:'nên, vì thế' }, { w:'but', r:'/bʌt/', vi:'nhưng' },
    { w:'rain', r:'/reɪn/', vi:'mưa' }, { w:'umbrella', r:'/ʌmˈbrelə/', vi:'cái ô' }
  ],
  gram:[{ p:'so và but', vi:'so nối nguyên nhân với kết quả hợp lẽ. but báo hiệu điều ngược với mong đợi. Nghe từ nối là đoán được vế sau đi hướng nào.',
    ex:['It is raining so she is using an umbrella.', 'Trời mưa nên cô ấy che ô.'] }] },

/* ================= BẾP · ĐỒ DÙNG ================= */
{ id:'en-90', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'sink', x:110, y:220 }, { p:'cupboard', x:220, y:220 },
    { p:'table', x:320, y:220, w:90 }, { p:'can', x:320, y:158 }
  ]},
  alt:'Bồn rửa bên trái, tủ bếp ở giữa, một lon nước đặt trên bàn nhỏ bên phải.',
  opts:[
    { t:'The can is on the table, not in the cupboard.', ok:true },
    { t:'The can is in the cupboard, not on the table.', why:'Đổi chỗ hai vế. Lon nước nằm ngoài, trên mặt bàn.', trap:'hoán chủ thể' },
    { t:'The cans are on the table, not in the cupboard.', why:'Chỉ thêm âm -s. Trên bàn có một lon.', trap:'số ít / số nhiều' },
    { t:'The can is on the table, not in the sink.', why:'Vế đầu đúng. Cái bồn rửa có thật, nhưng vế sau của câu đúng nói về tủ bếp.', trap:'đúng một nửa' }
  ],
  keys:[
    { w:'can', r:'/kæn/', vi:'lon nước' }, { w:'cupboard', r:'/ˈkʌbəd/', vi:'tủ bếp' },
    { w:'sink', r:'/sɪŋk/', vi:'bồn rửa' }, { w:'not', r:'/nɒt/', vi:'không phải' }
  ],
  gram:[{ p:'A, not B', vi:'Kiểu câu «đúng chỗ này, không phải chỗ kia» cho hai thông tin một lúc. Phải nghe đủ cả hai vế mới chọn được.',
    ex:['The can is on the table, not in the cupboard.', 'Lon nước ở trên bàn chứ không phải trong tủ.'] }] },

{ id:'en-91', lang:'en', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'bottle', x:150, y:158 },
    { p:'glass', x:200, y:158 }, { p:'glass', x:236, y:158 }
  ]},
  alt:'Trên bàn có một cái chai và hai cái cốc thuỷ tinh.',
  opts:[
    { t:'There is one bottle and two glasses.', ok:true },
    { t:'There is one bottle and two glass.', why:'Thiếu âm -es. Có hai cái cốc nên phải là glasses.', trap:'số ít / số nhiều' },
    { t:'There are two bottles and one glass.', why:'Đổi chỗ hai con số.', trap:'hoán số lượng' },
    { t:'There is one bottle and two glasses in the fridge.', why:'Thêm mấy chữ ở cuối. Trong tranh không có tủ lạnh.', trap:'thêm chi tiết sai' }
  ],
  keys:[
    { w:'bottle', r:'/ˈbɒtl/', vi:'cái chai' }, { w:'glass', r:'/ɡlɑːs/', vi:'cốc thuỷ tinh' },
    { w:'one', r:'/wʌn/', vi:'một' }, { w:'two', r:'/tuː/', vi:'hai' }
  ],
  gram:[{ p:'glass thành glasses', vi:'Danh từ kết thúc bằng -ss thêm -es và đọc thành âm tiết riêng /ɪz/. Âm này rõ nên nghe được dễ hơn -s thường.',
    ex:['There is one bottle and two glasses.', 'Có một cái chai và hai cái cốc.'] }] },

/* ================= PHÒNG NGỦ · ĐỒ ĐẠC ================= */
{ id:'en-92', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:130, y:220 }, { p:'lamp', x:240, y:220 },
    { p:'picture', x:290, y:34, w:64, h:50 }, { p:'rug', x:320, y:220, w:80 }
  ]},
  alt:'Cây đèn đứng cạnh giường, bức tranh treo trên tường, tấm thảm ở góc phải.',
  opts:[
    { t:'The lamp is next to the bed.', ok:true },
    { t:'The lamp is next to the bag.', why:'bed và bag chỉ khác một nguyên âm, mà lại nằm ở cuối câu.', trap:'gần âm: bed / bag' },
    { t:'The lamp is above the bed.', why:'above là ở phía trên cao. Cây đèn đứng dưới sàn, ngang với giường.', trap:'giới từ' },
    { t:'The lamps are next to the bed.', why:'Chỉ thêm âm -s và đổi is thành are.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'lamp', r:'/læmp/', vi:'cây đèn' }, { w:'above', r:'/əˈbʌv/', vi:'phía trên cao' },
    { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' }, { w:'bed', r:'/bed/', vi:'cái giường' }
  ],
  gram:[{ p:'above và on', vi:'above là ở phía trên nhưng KHÔNG chạm vào. on là nằm đè lên bề mặt. Bức tranh above cái giường, còn cái gối thì on cái giường.',
    ex:['The lamp is next to the bed.', 'Cây đèn đứng cạnh giường.'] }] },

{ id:'en-93', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:130, y:220 }, { p:'suitcase', x:250, y:220, s:1.2 },
    { p:'shoe', x:320, y:220 }, { p:'shoe', x:346, y:220 }
  ]},
  alt:'Cái vali để giữa phòng, một đôi giày ở bên phải, giường bên trái.',
  opts:[
    { t:'The suitcase is on the floor between the bed and the shoes.', ok:true },
    { t:'The suitcase is on the bed between the shoes.', why:'Đổi hẳn chỗ. Vali đặt dưới sàn.', trap:'giới từ + nơi chốn' },
    { t:'The suitcase is on the floor between the bed and the shoe.', why:'Chỉ thiếu âm -s ở từ cuối. Bên phải là một đôi, tức hai chiếc.', trap:'số ít / số nhiều' },
    { t:'The suitcase isn\'t on the floor between the bed and the shoes.', why:'Chỉ thêm n\'t vào câu dài, chỗ dễ trôi nhất.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'suitcase', r:'/ˈsuːtkeɪs/', vi:'cái vali' }, { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa' },
    { w:'floor', r:'/flɔː/', vi:'sàn nhà' }, { w:'shoe', r:'/ʃuː/', vi:'chiếc giày' }
  ],
  gram:[{ p:'Câu dài nhiều mốc', vi:'Câu càng dài thì bẫy càng hay giấu ở cuối. Nghe hết cả câu rồi mới đối chiếu với tranh, đừng quyết khi mới nghe một nửa.',
    ex:['The suitcase is on the floor between the bed and the shoes.', 'Cái vali để dưới sàn, giữa giường và đôi giày.'] }] },

{ id:'en-94', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:120 }, { p:'phone', x:160, y:156, s:1.4 },
    { p:'chair', x:280, y:220 }, { p:'bag', x:340, y:220 }
  ]},
  alt:'Chiếc điện thoại nằm trên bàn, cái ghế trống ở bên phải, cái túi ở góc.',
  opts:[
    { t:'Someone left a phone on the table.', ok:true },
    { t:'Someone left a phone on the chair.', why:'Cái ghế có thật trong tranh nhưng đang trống.', trap:'đúng vật, sai vị trí' },
    { t:'No one left a phone on the table.', why:'someone và no one đọc lướt nghe rất giống, mà nghĩa thì ngược hẳn.', trap:'someone / no one' },
    { t:'Someone left their phone on the table.', why:'a phone là một cái nào đó, their phone là của chính họ. Tranh không nói được điều đó.', trap:'a / their' }
  ],
  keys:[
    { w:'someone', r:'/ˈsʌmwʌn/', vi:'có ai đó' }, { w:'no one', r:'/ˈnəʊ wʌn/', vi:'không ai' },
    { w:'leave', r:'/liːv/', vi:'để quên, bỏ lại' }, { w:'phone', r:'/fəʊn/', vi:'điện thoại' }
  ],
  gram:[{ p:'leave — để quên đồ ở đâu', vi:'«leave something somewhere» là bỏ quên vật gì ở đâu. Dạng quá khứ là left, đọc rất ngắn nên dễ trôi.',
    ex:['Someone left a phone on the table.', 'Có ai đó để quên điện thoại trên bàn.'] }] },

{ id:'en-95', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:50, y:96 }, { p:'window', x:170, y:30, view:'sun' },
    { p:'sofa', x:250, y:220 }, { p:'cat', x:250, y:176, pose:'sit', s:0.8 }
  ]},
  alt:'Trong phòng có cánh cửa bên trái, cửa sổ ở giữa, con mèo ngồi trên ghế sofa.',
  opts:[
    { t:'There is a door and a window in the room.', ok:true },
    { t:'There are two doors in the room.', why:'Trong phòng có hai thứ nhưng là hai thứ khác nhau — một cửa ra vào và một cửa sổ.', trap:'số lượng cùng loại' },
    { t:'There is a door and a window in the rooms.', why:'Thêm mỗi âm -s ở chữ cuối cùng.', trap:'số ít / số nhiều' },
    { t:'There is a door but no window in the room.', why:'«but no» thay cho «and a» — hai từ ngắn nằm lọt giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'door', r:'/dɔː/', vi:'cửa ra vào' }, { w:'window', r:'/ˈwɪndəʊ/', vi:'cửa sổ' },
    { w:'room', r:'/ruːm/', vi:'căn phòng' }, { w:'but', r:'/bʌt/', vi:'nhưng' }
  ],
  gram:[{ p:'door và window là hai thứ khác nhau', vi:'Tiếng Việt gọi chung là «cửa» nên người học hay gộp. Tiếng Anh tách hẳn: door để đi qua, window để nhìn ra.',
    ex:['There is a door and a window in the room.', 'Trong phòng có một cửa ra vào và một cửa sổ.'] }] },

/* ================= CÂU DÀI, BẪY Ở CUỐI ================= */
{ id:'en-96', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:30, y:28, view:'rain' }, { p:'sofa', x:170, y:220 },
    { p:'person', x:170, y:220, pose:'read', s:0.85 }, { p:'cat', x:280, y:220, pose:'lie', s:0.9 },
    { p:'lamp', x:340, y:220 }
  ]},
  alt:'Ngoài trời mưa; một người ngồi đọc sách bên ghế sofa, con mèo nằm dưới sàn bên phải.',
  opts:[
    { t:'It is raining outside and she is reading inside.', ok:true },
    { t:'It is raining outside and she is reading outside.', why:'Chỉ khác từ cuối. inside và outside chỉ lệch nhau phần đầu, mà phần đầu lại đọc rất nhẹ.', trap:'inside / outside' },
    { t:'It is raining outside and the cat is reading inside.', why:'Vế đầu đúng. Chủ thể ở vế sau bị đổi thành con mèo.', trap:'hoán chủ thể' },
    { t:'It was raining outside and she is reading inside.', why:'is thành was ngay đầu câu.', trap:'thì: is / was' }
  ],
  keys:[
    { w:'outside', r:'/ˌaʊtˈsaɪd/', vi:'bên ngoài' }, { w:'inside', r:'/ˌɪnˈsaɪd/', vi:'bên trong' },
    { w:'read', r:'/riːd/', vi:'đọc' }, { w:'rain', r:'/reɪn/', vi:'mưa' }
  ],
  gram:[{ p:'inside và outside', vi:'Hai từ chỉ khác âm tiết đầu, mà trọng âm lại rơi vào phần sau giống nhau: -SIDE. Phải bắt cho được phần đầu.',
    ex:['It is raining outside and she is reading inside.', 'Ngoài trời mưa còn cô ấy đọc sách bên trong.'] }] },

{ id:'en-97', lang:'en', lv:'b1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:130, y:220, pose:'write' }, { p:'desk', x:122, y:220, w:92 },
    { p:'person', x:260, y:220, pose:'read', s:0.95 }, { p:'desk', x:252, y:220, w:92 },
    { p:'clock', x:216, y:34, time:'10:10', r:22 }
  ]},
  alt:'Hai bạn ngồi hai bàn: bạn bên trái viết, bạn bên phải đọc sách; đồng hồ chỉ 10 giờ 10.',
  opts:[
    { t:'At ten past ten, one is writing and the other is reading.', ok:true },
    { t:'At ten to ten, one is writing and the other is reading.', why:'past thành to ở ngay đầu câu, lúc tai chưa kịp vào nhịp. 10:10 là «ten past ten».', trap:'giờ: to / past' },
    { t:'At ten past ten, one is reading and the other is writing.', why:'Vế giờ đúng rồi thì tai buông, và hai hành động bị đổi chỗ.', trap:'hoán chủ thể' },
    { t:'At ten past ten, both of them are writing.', why:'both là cả hai. Bạn bên phải đang cầm sách.', trap:'both' }
  ],
  keys:[
    { w:'ten past ten', r:'/ten pɑːst ten/', vi:'mười giờ mười' }, { w:'one', r:'/wʌn/', vi:'một người' },
    { w:'the other', r:'/ði ˈʌðə/', vi:'người còn lại' }, { w:'both', r:'/bəʊθ/', vi:'cả hai' }
  ],
  gram:[{ p:'Câu mở đầu bằng trạng ngữ thời gian', vi:'Khi câu bắt đầu bằng «At ten past ten, …» thì phần quan trọng vẫn nằm ở sau dấu phẩy. Đừng dồn hết sức nghe vào mấy chữ đầu.',
    ex:['At ten past ten, one is writing and the other is reading.', 'Mười giờ mười, một bạn viết, bạn kia đọc.'] }] },

{ id:'en-98', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:150 }, { p:'cup', x:140, y:158 },
    { p:'cup', x:180, y:158 }, { p:'plate', x:230, y:158 }, { p:'cake', x:230, y:150 }
  ]},
  alt:'Trên bàn có hai cái cốc và một đĩa bánh.',
  opts:[
    { t:'There are two cups and one plate on the table.', ok:true },
    { t:'There are two caps and one plate on the table.', why:'cup và cap chỉ khác nguyên âm. Trong tranh không có cái mũ nào.', trap:'gần âm: cup / cap' },
    { t:'There is one cup and two plates on the table.', why:'Đổi chỗ hai con số.', trap:'hoán số lượng' },
    { t:'There are two cups and one plant on the table.', why:'plate và plant chỉ khác âm mũi /n/ ở gần cuối.', trap:'gần âm: plate / plant' }
  ],
  keys:[
    { w:'cup', r:'/kʌp/', vi:'cái cốc' }, { w:'cap', r:'/kæp/', vi:'mũ lưỡi trai' },
    { w:'plate', r:'/pleɪt/', vi:'cái đĩa' }, { w:'plant', r:'/plɑːnt/', vi:'cây trong chậu' }
  ],
  gram:[{ p:'Ba cặp dễ lẫn cùng lúc', vi:'cup/cap, plate/plant, cùng với số lượng bị đảo. Bài này luyện đúng thói quen: nghe từng cụm danh từ một, gắn ngay vào tranh.',
    ex:['There are two cups and one plate on the table.', 'Trên bàn có hai cái cốc và một cái đĩa.'] }] },

{ id:'en-99', lang:'en', lv:'a2', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:52, y:42 }, { p:'person', x:150, y:220, pose:'run' },
    { p:'person', x:250, y:220, pose:'run' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai người cùng đang chạy ngoài công viên.',
  opts:[
    { t:'Both of them are running.', ok:true },
    { t:'Both of them are walking.', why:'Cả hai đều đổ người về trước, chân xoạc rộng — đó là chạy.', trap:'hành động gần giống' },
    { t:'Neither of them is running.', why:'neither là không ai cả, ngược hẳn với both.', trap:'neither' },
    { t:'Both of them aren\'t running.', why:'Chỉ thêm n\'t. Câu này cũng ngược nghĩa nhưng nghe rất giống câu đúng.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'both', r:'/bəʊθ/', vi:'cả hai' }, { w:'neither', r:'/ˈnaɪðə/', vi:'không ai' },
    { w:'run', r:'/rʌn/', vi:'chạy' }, { w:'walk', r:'/wɔːk/', vi:'đi bộ' }
  ],
  gram:[{ p:'both are và neither is', vi:'both luôn kéo theo are, neither luôn kéo theo is. Nếu nghe thấy is ở đầu câu nói về hai người thì gần như chắc là neither.',
    ex:['Both of them are running.', 'Cả hai đang chạy.'] }] },

{ id:'en-100', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:200, y:96, time:'10:30', r:40 }, { p:'table', x:200, y:220, w:110 },
    { p:'book', x:200, y:158 }
  ]},
  alt:'Đồng hồ treo tường chỉ 10 giờ 30, trên bàn có một cuốn sách.',
  opts:[
    { t:'It is half past ten.', ok:true },
    { t:'It is half past two.', why:'ten và two đều ngắn, đọc nhanh dễ lẫn. Kim ngắn đang nằm giữa số 10 và 11.', trap:'gần âm: ten / two' },
    { t:'It is half to ten.', why:'Tiếng Anh không nói «half to». Chỉ có «half past».', trap:'giờ: to / past' },
    { t:'It is a quarter past ten.', why:'quarter là 15 phút, half là 30 phút. Kim phút đang chỉ thẳng xuống số 6.', trap:'giờ: nửa / một phần tư' }
  ],
  keys:[
    { w:'half past', r:'/hɑːf pɑːst/', vi:'rưỡi, ba mươi phút' }, { w:'quarter', r:'/ˈkwɔːtə/', vi:'mười lăm phút' },
    { w:'ten', r:'/ten/', vi:'mười' }, { w:'two', r:'/tuː/', vi:'hai' }
  ],
  gram:[{ p:'half past, không có half to', vi:'Ba mươi phút luôn là «half past». Nghe thấy «half to» là biết câu sai, khỏi cần nhìn đồng hồ.',
    ex:['It is half past ten.', 'Bây giờ là mười giờ rưỡi.'] }] },

{ id:'en-101', lang:'en', lv:'b1', cat:'Công việc',
  scene:{ bg:'room', items:[
    { p:'desk', x:170, y:220, w:110 }, { p:'laptop', x:170, y:158 },
    { p:'person', x:270, y:220, pose:'stand' }, { p:'calendar', x:310, y:32, text:'16' }
  ]},
  alt:'Cái laptop đã đóng lại để trên bàn, một người đứng cạnh; tờ lịch ghi số 16.',
  opts:[
    { t:'He has finished working on the sixteenth.', ok:true },
    { t:'He has finished working on the sixtieth.', why:'sixTEENTH nhấn cuối, SIXtieth nhấn đầu. Tờ lịch ghi 16.', trap:'gần âm: sixteen / sixty' },
    { t:'He is finishing work on the sixteenth.', why:'is finishing là đang làm nốt; has finished là đã xong hẳn. Cái laptop đã gập lại.', trap:'thì: đang làm / đã xong' },
    { t:'He hasn\'t finished working on the sixteenth.', why:'Chỉ thêm n\'t vào giữa cụm động từ.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'finish', r:'/ˈfɪnɪʃ/', vi:'làm xong' }, { w:'sixteenth', r:'/ˌsɪksˈtiːnθ/', vi:'ngày mười sáu' },
    { w:'work', r:'/wɜːk/', vi:'làm việc' }, { w:'laptop', r:'/ˈlæptɒp/', vi:'máy tính xách tay' }
  ],
  gram:[{ p:'has finished — đã xong hẳn', vi:'Thì hiện tại hoàn thành nói việc đã kết thúc và còn để lại dấu vết thấy được — ở đây là cái laptop đã gập.',
    ex:['He has finished working on the sixteenth.', 'Anh ấy đã làm xong việc vào ngày mười sáu.'] }] },

{ id:'en-102', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bin', x:110, y:220, s:1.2 }, { p:'person', x:200, y:220, pose:'carry' },
    { p:'box', x:300, y:220, w:36 }, { p:'broom', x:350, y:220 }
  ]},
  alt:'Một người đang xách cái hộp, thùng rác ở bên trái, một hộp khác dưới sàn bên phải.',
  opts:[
    { t:'He is carrying a box to the bin.', ok:true },
    { t:'He is carrying a box to the bed.', why:'bin và bed chỉ khác nguyên âm, mà lại nằm ở cuối câu.', trap:'gần âm: bin / bed' },
    { t:'He is carrying a box from the bin.', why:'to là đi về phía, from là đi ra khỏi. Một giới từ mà đổi hẳn hướng.', trap:'to / from' },
    { t:'He is carrying two boxes to the bin.', why:'Chỉ khác a thành two và thêm âm -es. Trên tay anh ấy có một cái.', trap:'số lượng' }
  ],
  keys:[
    { w:'bin', r:'/bɪn/', vi:'thùng rác' }, { w:'carry', r:'/ˈkæri/', vi:'xách, mang' },
    { w:'to', r:'/tuː/', vi:'tới, về phía' }, { w:'from', r:'/frɒm/', vi:'từ' }
  ],
  gram:[{ p:'to và from', vi:'to là hướng tới, from là hướng đi ra. Hai từ đều ngắn và đọc rất nhẹ nhưng chỉ hướng ngược nhau.',
    ex:['He is carrying a box to the bin.', 'Anh ấy đang xách cái hộp ra thùng rác.'] }] },

{ id:'en-103', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'dog', x:140, y:220, s:1.1 },
    { p:'cat', x:250, y:220, pose:'sit' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Một con chó ở bên trái, một con mèo ngồi ở giữa, cây ở bên phải.',
  opts:[
    { t:'There is one dog and one cat.', ok:true },
    { t:'There is one dog and one cap.', why:'cat /kæt/ và cap /kæp/ chỉ khác phụ âm cuối, mà phụ âm cuối tiếng Anh lại rất nhẹ.', trap:'gần âm: cat / cap' },
    { t:'There are two dogs and one cat.', why:'Chỉ có một con chó.', trap:'số lượng' },
    { t:'There is one dog but no cat.', why:'«but no» thay cho «and one» — hai từ ngắn ở giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'cat', r:'/kæt/', vi:'con mèo' }, { w:'cap', r:'/kæp/', vi:'mũ lưỡi trai' },
    { w:'dog', r:'/dɒɡ/', vi:'con chó' }, { w:'one', r:'/wʌn/', vi:'một' }
  ],
  gram:[{ p:'Phụ âm cuối /t/ và /p/', vi:'Người Anh thường không bật mạnh phụ âm cuối, nên cat và cap nghe gần như nhau. Phải dựa vào ngữ cảnh và vào tranh.',
    ex:['There is one dog and one cat.', 'Có một con chó và một con mèo.'] }] },

{ id:'en-104', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'person', x:160, y:220, pose:'sit', s:0.85 },
    { p:'tv', x:300, y:220 }, { p:'clock', x:340, y:56, time:'8:00', r:22 }
  ]},
  alt:'Một người ngồi trên ghế sofa quay mặt về phía cái tivi.',
  opts:[
    { t:'He is sitting in front of the TV.', ok:true },
    { t:'He is sitting behind the TV.', why:'Chỉ khác giới từ. Người ngồi phía trước, quay mặt về màn hình.', trap:'giới từ' },
    { t:'He is standing in front of the TV.', why:'Chỉ khác động từ. Hai chân đang gập lại trên ghế.', trap:'hành động' },
    { t:'They are sitting in front of the TV.', why:'He thành They, kéo theo is thành are. Trong tranh chỉ có một người.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'in front of', r:'/ɪn frʌnt ɒv/', vi:'phía trước' }, { w:'behind', r:'/bɪˈhaɪnd/', vi:'phía sau' },
    { w:'sit', r:'/sɪt/', vi:'ngồi' }, { w:'TV', r:'/ˌtiːˈviː/', vi:'cái tivi' }
  ],
  gram:[{ p:'he is và they are', vi:'Khi nghe nhanh, «he\'s» và «they\'re» dễ lẫn. Động từ theo sau là manh mối: is đi với một người, are đi với nhiều người.',
    ex:['He is sitting in front of the TV.', 'Anh ấy ngồi trước cái tivi.'] }] },

{ id:'en-105', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:44, w:90, h:124, rows:4 }, { p:'ladder', x:190, y:220, h:104 },
    { p:'person', x:250, y:220, pose:'point' }, { p:'picture', x:290, y:30, w:64, h:50 }
  ]},
  alt:'Cái thang dựng giữa phòng, bức tranh đã treo lên tường, một người đứng cạnh chỉ tay.',
  opts:[
    { t:'Someone has already hung the picture.', ok:true },
    { t:'Someone is hanging the picture.', why:'is hanging là đang treo dở. Bức tranh đã nằm yên trên tường.', trap:'thì: đang làm / đã xong' },
    { t:'No one has hung the picture.', why:'someone thành no one — hai từ đọc lướt nghe rất giống.', trap:'someone / no one' },
    { t:'Someone has already hung the pictures.', why:'Chỉ thêm âm -s. Trên tường có một bức.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'hang', r:'/hæŋ/', vi:'treo' }, { w:'already', r:'/ɔːlˈredi/', vi:'đã… rồi' },
    { w:'picture', r:'/ˈpɪktʃə/', vi:'bức tranh' }, { w:'ladder', r:'/ˈlædə/', vi:'cái thang' }
  ],
  gram:[{ p:'hang — hung — hung', vi:'Động từ bất quy tắc: hang thành hung ở quá khứ và phân từ. Dạng «has hung» báo việc đã xong.',
    ex:['Someone has already hung the picture.', 'Có người đã treo bức tranh lên rồi.'] }] },

{ id:'en-106', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:70, y:220 }, { p:'table', x:220, y:220, w:130 },
    { p:'bottle', x:190, y:158 }, { p:'can', x:240, y:158 }, { p:'clock', x:340, y:56, time:'1:45', r:22 }
  ]},
  alt:'Trên bàn có một cái chai và một lon nước; tủ lạnh ở bên trái; đồng hồ chỉ 1 giờ 45.',
  opts:[
    { t:'The bottle and the can are both on the table.', ok:true },
    { t:'The bottle and the can are both in the fridge.', why:'Tủ lạnh có thật nhưng cả hai thứ đều bày trên mặt bàn.', trap:'giới từ + nơi chốn' },
    { t:'The bottle and the can are both on the tables.', why:'Chỉ thêm âm -s ở chữ cuối cùng.', trap:'số ít / số nhiều' },
    { t:'Neither the bottle nor the can is on the table.', why:'Câu phủ định kép, nghe qua vẫn thấy đủ «bottle», «can», «table» nên rất dễ gật bừa.', trap:'neither … nor' }
  ],
  keys:[
    { w:'both', r:'/bəʊθ/', vi:'cả hai' }, { w:'neither … nor', r:'/ˈnaɪðə nɔː/', vi:'không cái nào trong hai' },
    { w:'bottle', r:'/ˈbɒtl/', vi:'cái chai' }, { w:'can', r:'/kæn/', vi:'lon nước' }
  ],
  gram:[{ p:'neither … nor', vi:'Cấu trúc phủ định cả hai vế. Nghe thấy «neither» ở đầu câu là biết toàn bộ câu đang phủ định, dù các danh từ nghe vẫn quen tai.',
    ex:['The bottle and the can are both on the table.', 'Cả cái chai lẫn lon nước đều ở trên bàn.'] }] },

{ id:'en-107', lang:'en', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:140, y:220 }, { p:'book', x:140, y:158, open:true },
    { p:'desk', x:280, y:220 }, { p:'clock', x:216, y:36, time:'8:30', r:22 }
  ]},
  alt:'Hai cái bàn trong lớp: bàn bên trái có sách mở, bàn bên phải trống.',
  opts:[
    { t:'There is a book on one desk but not on the other.', ok:true },
    { t:'There is a book on one desk and on the other.', why:'«and on the other» nghĩa là cả hai bàn đều có sách. Chỉ khác mấy chữ ở cuối.', trap:'phủ định chìm' },
    { t:'There are books on both desks.', why:'both là cả hai. Bàn bên phải trống trơn.', trap:'both' },
    { t:'There is a book on one chair but not on the other.', why:'desk thành chair. Trong tranh không có cái ghế nào.', trap:'vật không có' }
  ],
  keys:[
    { w:'desk', r:'/desk/', vi:'bàn học' }, { w:'but not', r:'/bʌt nɒt/', vi:'nhưng không' },
    { w:'both', r:'/bəʊθ/', vi:'cả hai' }, { w:'the other', r:'/ði ˈʌðə/', vi:'cái còn lại' }
  ],
  gram:[{ p:'but not on the other', vi:'Cụm «but not» ở cuối câu là chỗ lật nghĩa. Nghe hết câu rồi hãy quyết, vì nửa đầu của cả hai đáp án giống hệt nhau.',
    ex:['There is a book on one desk but not on the other.', 'Một bàn có sách còn bàn kia thì không.'] }] },

{ id:'en-108', lang:'en', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sign', x:90, y:220, dir:'left' }, { p:'sign', x:300, y:220, dir:'right' },
    { p:'person', x:200, y:220, pose:'stand' }
  ]},
  alt:'Hai tấm biển: biển bên trái chỉ sang trái, biển bên phải chỉ sang phải; một người đứng ở giữa.',
  opts:[
    { t:'One sign points left and the other points right.', ok:true },
    { t:'Both signs point left.', why:'Chỉ có biển bên trái chỉ sang trái.', trap:'both' },
    { t:'One sign points right and the other points left.', why:'Đổi chỗ hai vế. Biển đứng bên trái là biển chỉ sang trái.', trap:'hoán chủ thể' },
    { t:'One sign points left and the other points left too.', why:'«left too» ở cuối câu nghĩa là cả hai cùng chỉ một hướng.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'sign', r:'/saɪn/', vi:'biển báo' }, { w:'left', r:'/left/', vi:'bên trái' },
    { w:'right', r:'/raɪt/', vi:'bên phải' }, { w:'point', r:'/pɔɪnt/', vi:'chỉ về phía' }
  ],
  gram:[{ p:'one … the other … too', vi:'«the other … too» đảo ngược ý nghĩa của cả cấu trúc one/the other: từ khác nhau thành giống nhau. Chữ too ở cuối là chỗ quyết định.',
    ex:['One sign points left and the other points right.', 'Một biển chỉ sang trái, biển kia chỉ sang phải.'] }] },

{ id:'en-109', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:150 }, { p:'cup', x:150, y:158 },
    { p:'person', x:90, y:220, pose:'stand' }, { p:'window', x:280, y:28, view:'rain' },
    { p:'umbrella', x:330, y:220, s:1.2 }
  ]},
  alt:'Ngoài cửa sổ trời mưa; cái ô đã gập dựng trong nhà; một người đứng cạnh bàn có cốc.',
  opts:[
    { t:'It is raining but she hasn\'t taken the umbrella yet.', ok:true },
    { t:'It is raining but she has already taken the umbrella.', why:'Cái ô vẫn dựng trong phòng. already và «hasn\'t … yet» nằm cùng một chỗ trong câu nhưng nghĩa ngược nhau.', trap:'already / not yet' },
    { t:'It is raining so she hasn\'t taken the umbrella yet.', why:'so là vì thế, but là nhưng. Trời mưa mà chưa cầm ô là chuyện nghịch, phải dùng but.', trap:'so / but' },
    { t:'It was raining but she hasn\'t taken the umbrella yet.', why:'is thành was ngay đầu câu.', trap:'thì: is / was' }
  ],
  keys:[
    { w:'yet', r:'/jet/', vi:'vẫn chưa (trong câu phủ định)' }, { w:'already', r:'/ɔːlˈredi/', vi:'đã… rồi' },
    { w:'take', r:'/teɪk/', vi:'lấy, cầm theo' }, { w:'umbrella', r:'/ʌmˈbrelə/', vi:'cái ô' }
  ],
  gram:[{ p:'hasn\'t … yet và has already', vi:'yet đi với câu phủ định và đứng cuối; already đi với câu khẳng định và đứng giữa. Hai cách nói về cùng một việc nhưng ngược nhau.',
    ex:['She hasn\'t taken the umbrella yet.', 'Cô ấy vẫn chưa cầm ô theo.'] }] },

{ id:'en-110', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:90, y:220 }, { p:'table', x:220, y:220, w:120 },
    { p:'glass', x:200, y:158 }, { p:'glass', x:240, y:158 }, { p:'bin', x:330, y:220 }
  ]},
  alt:'Hai cái cốc thuỷ tinh đặt trên bàn, tủ bếp bên trái, thùng rác bên phải.',
  opts:[
    { t:'The two glasses are on the table.', ok:true },
    { t:'The two glasses are in the cupboard.', why:'Tủ bếp có thật nhưng hai cái cốc bày trên mặt bàn.', trap:'giới từ + nơi chốn' },
    { t:'The two glass are on the table.', why:'Thiếu âm -es. Có hai cái nên phải là glasses.', trap:'số ít / số nhiều' },
    { t:'The two glasses aren\'t on the table.', why:'Chỉ thêm n\'t.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'glass', r:'/ɡlɑːs/', vi:'cốc thuỷ tinh' }, { w:'cupboard', r:'/ˈkʌbəd/', vi:'tủ bếp' },
    { w:'table', r:'/ˈteɪbl/', vi:'cái bàn' }, { w:'bin', r:'/bɪn/', vi:'thùng rác' }
  ],
  gram:[{ p:'the two + danh từ số nhiều', vi:'Khi đã có số đếm thì danh từ bắt buộc ở dạng số nhiều: the two glasses. Nghe thấy «two glass» là biết sai ngay.',
    ex:['The two glasses are on the table.', 'Hai cái cốc để trên bàn.'] }] },

{ id:'en-111', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:250, y:28, view:'snow' }, { p:'sofa', x:160, y:220 },
    { p:'cat', x:160, y:174, pose:'sit', s:0.8 }, { p:'lamp', x:330, y:220 }
  ]},
  alt:'Ngoài cửa sổ có tuyết rơi, con mèo ngồi trên ghế sofa trong nhà.',
  opts:[
    { t:'It is snowing outside and the cat is inside.', ok:true },
    { t:'It is snowing inside and the cat is outside.', why:'Đổi chỗ hai từ. Tuyết ở ngoài cửa sổ, con mèo ở trong nhà.', trap:'inside / outside' },
    { t:'It is raining outside and the cat is inside.', why:'Vế sau đúng nên tai buông. Ngoài cửa sổ là những chấm tròn, tức là tuyết.', trap:'thời tiết' },
    { t:'It is snowing outside and the cats are inside.', why:'Chỉ thêm âm -s và đổi is thành are. Trong nhà có một con mèo.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'snow', r:'/snəʊ/', vi:'tuyết rơi' }, { w:'outside', r:'/ˌaʊtˈsaɪd/', vi:'bên ngoài' },
    { w:'inside', r:'/ˌɪnˈsaɪd/', vi:'bên trong' }, { w:'cat', r:'/kæt/', vi:'con mèo' }
  ],
  gram:[{ p:'outside và inside trong cùng một câu', vi:'Khi câu có cả hai từ này, bẫy quen thuộc là đảo chỗ chúng. Gắn từng vế vào tranh ngay khi nghe, đừng đợi hết câu.',
    ex:['It is snowing outside and the cat is inside.', 'Ngoài trời có tuyết còn con mèo ở trong nhà.'] }] },

{ id:'en-112', lang:'en', lv:'b1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:44, w:86, h:118, rows:4 }, { p:'tag', x:200, y:120, text:'$40' },
    { p:'coat', x:290, y:180 }, { p:'person', x:340, y:220, pose:'stand' }
  ]},
  alt:'Chiếc áo khoác treo bên phải, bảng giá ghi 40 đô la, một người đứng nhìn.',
  opts:[
    { t:'The coat costs forty dollars, not fourteen.', ok:true },
    { t:'The coat costs fourteen dollars, not forty.', why:'Đổi chỗ hai con số. Bảng ghi 40.', trap:'hoán số lượng' },
    { t:'The coat costs forty dollars, not fifty.', why:'Vế đầu đúng nên tai buông. Nhưng vế sau của câu đúng nói về 14, không phải 50.', trap:'đúng một nửa' },
    { t:'The coats cost forty dollars, not fourteen.', why:'Chỉ thêm âm -s. Trong tranh treo một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'forty', r:'/ˈfɔːti/', vi:'bốn mươi' }, { w:'fourteen', r:'/ˌfɔːˈtiːn/', vi:'mười bốn' },
    { w:'fifty', r:'/ˈfɪfti/', vi:'năm mươi' }, { w:'cost', r:'/kɒst/', vi:'có giá là' }
  ],
  gram:[{ p:'forty viết không có chữ u', vi:'four và fourteen có u, nhưng forty thì không. Khi nghe, hãy bám vào trọng âm: FORty nhấn đầu, fourTEEN nhấn cuối.',
    ex:['The coat costs forty dollars, not fourteen.', 'Chiếc áo giá bốn mươi đô chứ không phải mười bốn.'] }] },

{ id:'en-113', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:120 }, { p:'laptop', x:160, y:158 },
    { p:'person', x:270, y:220, pose:'stand' }, { p:'bag', x:340, y:220 }
  ]},
  alt:'Cái laptop đang mở trên bàn, một người đứng cách đó một quãng, cái túi ở góc.',
  opts:[
    { t:'The laptop is open but no one is using it.', ok:true },
    { t:'The laptop is open but someone is using it.', why:'no one thành someone — hai từ đọc lướt nghe rất giống, mà nghĩa ngược hẳn.', trap:'someone / no one' },
    { t:'The laptop is closed and no one is using it.', why:'Màn hình đang dựng lên, tức là đang mở.', trap:'trạng thái ngược' },
    { t:'The laptop is open but no one is using them.', why:'it thành them ở chữ cuối cùng. Chỉ có một cái laptop.', trap:'it / them' }
  ],
  keys:[
    { w:'open', r:'/ˈəʊpən/', vi:'đang mở' }, { w:'no one', r:'/ˈnəʊ wʌn/', vi:'không ai' },
    { w:'use', r:'/juːz/', vi:'dùng' }, { w:'it', r:'/ɪt/', vi:'nó (một vật)' }
  ],
  gram:[{ p:'it và them', vi:'it thay cho một vật, them thay cho nhiều vật. Ở cuối câu, chữ này rất nhẹ nhưng lại cho biết số lượng.',
    ex:['The laptop is open but no one is using it.', 'Laptop đang mở nhưng không ai dùng.'] }] },

{ id:'en-114', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:44 }, { p:'person', x:170, y:220, pose:'walk' },
    { p:'dog', x:250, y:220, s:1 }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Một người đi bộ, con chó đi phía sau, cây ở bên phải.',
  opts:[
    { t:'The man is walking with a dog.', ok:true },
    { t:'The man is walking with a duck.', why:'dog và duck đều ngắn và bắt đầu bằng /d/. Trong tranh là con chó.', trap:'gần âm: dog / duck' },
    { t:'The man is walking with his dog.', why:'a dog là một con chó nào đó, his dog là chó của anh ấy. Tranh không cho biết.', trap:'a / his' },
    { t:'The men are walking with a dog.', why:'man thành men, kéo theo is thành are. Chỉ có một người.', trap:'gần âm: man / men' }
  ],
  keys:[
    { w:'dog', r:'/dɒɡ/', vi:'con chó' }, { w:'duck', r:'/dʌk/', vi:'con vịt' },
    { w:'walk with', r:'/wɔːk wɪð/', vi:'đi cùng' }, { w:'man', r:'/mæn/', vi:'người đàn ông' }
  ],
  gram:[{ p:'walk with — đi cùng ai', vi:'Đi cùng người hay con vật thì dùng with. Nghe được with là biết từ tiếp theo mới là người bạn đồng hành.',
    ex:['The man is walking with a dog.', 'Người đàn ông đang dắt chó đi bộ.'] }] },

{ id:'en-115', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:80, y:70, time:'4:55', r:28 }, { p:'table', x:220, y:220, w:130 },
    { p:'cup', x:200, y:158 }, { p:'cake', x:250, y:158 },
    { p:'person', x:330, y:220, pose:'stand' }
  ]},
  alt:'Đồng hồ chỉ 4 giờ 55, trên bàn có cốc và bánh, một người đứng bên phải chưa ngồi xuống.',
  opts:[
    { t:'It is almost five and nobody has started eating.', ok:true },
    { t:'It is almost five and somebody has started eating.', why:'nobody thành somebody — hai từ dài gần bằng nhau, đọc lướt rất giống, mà nghĩa ngược hẳn.', trap:'somebody / nobody' },
    { t:'It is almost nine and nobody has started eating.', why:'five và nine đều ngắn. Kim ngắn đang gần số 5.', trap:'gần âm: five / nine' },
    { t:'It is almost five and nobody has finished eating.', why:'started thành finished — chỉ một từ ở cuối, mà đổi hẳn chuyện đã bắt đầu hay đã xong.', trap:'start / finish' }
  ],
  keys:[
    { w:'almost', r:'/ˈɔːlməʊst/', vi:'gần, sắp' }, { w:'nobody', r:'/ˈnəʊbədi/', vi:'không ai' },
    { w:'start', r:'/stɑːt/', vi:'bắt đầu' }, { w:'finish', r:'/ˈfɪnɪʃ/', vi:'làm xong' }
  ],
  gram:[{ p:'nobody đã mang sẵn nghĩa phủ định', vi:'«Nobody has started» — động từ vẫn ở dạng khẳng định vì nobody đã phủ định rồi. Không nói «nobody hasn\'t started».',
    ex:['It is almost five and nobody has started eating.', 'Gần năm giờ rồi mà chưa ai bắt đầu ăn.'] }] }

  );
})();
