/* ============================================================
   LangLab — NGHE & CHỌN CÂU ĐÚNG VỚI TRANH
   ------------------------------------------------------------
   Một tranh, bốn câu chỉ đọc lên chứ không hiện chữ. Người học nghe
   tối đa hai lượt rồi chọn A/B/C/D. Chọn xong mới mở được lời thoại,
   đáp án, giải thích từng câu nhiễu, chùm từ và điểm ngữ pháp — để
   một câu hỏi dạy được nhiều thứ chứ không chỉ chấm đúng/sai.

   Câu nhiễu soạn theo nguyên tắc: mỗi câu sai ĐÚNG MỘT chi tiết, và
   ba câu sai trong cùng một bài phải khác kiểu nhau. Nếu ba câu cùng
   một kiểu thì người học đoán được mẹo thay vì phải nghe.
   Các kiểu nhiễu đang dùng:
     vị trí · số lượng · giờ · gần âm · sai hành động · sai chủ thể ·
     thêm chi tiết không có trong tranh · sai thì

   Mỗi mục:
     id · lang · lv · cat · scene (bản ghi tranh, xem js/scene-svg.js)
     alt   — mô tả tranh cho trình đọc màn hình
     opts  — 4 câu theo đúng thứ tự A · B · C · D; câu đúng có ok:true,
             câu sai có why (giải thích bằng tiếng Việt) và trap (tên kiểu)
     keys  — chùm từ bấm tra được
     gram  — điểm ngữ pháp rút ra từ chính câu đúng

   Nội dung do LangLab tự biên soạn.
   ============================================================ */

const LISTEN_PIC = [

/* ---------------- A1 ---------------- */
{ id:'en-01', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:26, y:34, view:'rain' },
    { p:'clock',  x:334, y:72, time:'7:30' },
    { p:'table',  x:180, y:220, w:130 },
    { p:'cat',    x:180, y:218, pose:'lie' },
    { p:'chair',  x:300, y:220 }
  ]},
  alt:'Trong phòng: một con mèo nằm dưới gầm bàn, ghế đứng riêng bên phải, đồng hồ chỉ 7 giờ 30, ngoài cửa sổ trời mưa.',
  opts:[
    { t:'The cat is on the table.', why:'Sai vị trí. «on» là ở TRÊN mặt bàn, còn trong tranh con mèo nằm bên dưới.', trap:'vị trí' },
    { t:'The cat is under the table.', ok:true },
    { t:'The cat is sleeping next to the chair.', why:'Trong tranh có cái ghế thật, nhưng nó đứng tách hẳn sang bên phải, mèo không nằm cạnh ghế.', trap:'đúng vật, sai quan hệ' },
    { t:'There are two cats under the table.', why:'Sai số lượng — chỉ có một con mèo.', trap:'số lượng' }
  ],
  keys:[
    { w:'under', r:'/ˈʌndə/', vi:'ở dưới, dưới gầm' },
    { w:'table', r:'/ˈteɪbl/', vi:'cái bàn' },
    { w:'chair', r:'/tʃeə/', vi:'cái ghế' },
    { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' }
  ],
  gram:[{ p:'Giới từ chỉ vị trí: in · on · under · next to',
    vi:'«on» là nằm trên bề mặt, «under» là ở phía dưới, «next to» là ngay bên cạnh. Ba từ này là bẫy quen thuộc của bài nghe xem tranh.',
    ex:['The cat is under the table.', 'Con mèo nằm dưới gầm bàn.'] }] },

{ id:'en-02', lang:'en', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'window', x:286, y:32, view:'sun' },
    { p:'table',  x:180, y:220, w:160 },
    { p:'apple',  x:180, y:158, rep:3, gap:36 },
    { p:'bird',   x:74,  y:218 }
  ]},
  alt:'Ba quả táo đặt trên bàn, một con chim đứng dưới sàn bên trái, ngoài cửa sổ trời nắng.',
  opts:[
    { t:'There are two apples on the table.', why:'Sai số lượng — trên bàn có ba quả.', trap:'số lượng' },
    { t:'There is a bird on the table.', why:'Con chim có thật trong tranh nhưng nó đứng dưới sàn, không ở trên bàn.', trap:'đúng vật, sai vị trí' },
    { t:'There are three apples on the table.', ok:true },
    { t:'There are three apples under the table.', why:'Sai vị trí — táo nằm trên mặt bàn.', trap:'vị trí' }
  ],
  keys:[
    { w:'apple', r:'/ˈæpl/', vi:'quả táo' },
    { w:'bird', r:'/bɜːd/', vi:'con chim' },
    { w:'three', r:'/θriː/', vi:'ba' },
    { w:'there are', r:'/ðeər ɑː/', vi:'có (số nhiều)' }
  ],
  gram:[{ p:'There is / There are',
    vi:'«There is» đi với danh từ số ít, «There are» đi với số nhiều. Nghe kỹ phần này là biết ngay câu nói về một hay nhiều vật.',
    ex:['There are three apples on the table.', 'Trên bàn có ba quả táo.'] }] },

{ id:'en-03', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'fridge', x:52,  y:220 },
    { p:'table',  x:150, y:220, w:84 },
    { p:'cup',    x:150, y:158 },
    { p:'person', x:236, y:220, pose:'cook' },
    { p:'stove',  x:302, y:220 },
    { p:'window', x:294, y:26, view:'sun' }
  ]},
  alt:'Trong bếp: Nam đứng nấu bên bếp lò, tủ lạnh ở bên trái, một cái cốc đặt trên bàn nhỏ.',
  opts:[
    { t:'Nam is cooking at the stove.', ok:true },
    { t:'Nam is standing next to the fridge.', why:'Tủ lạnh có trong tranh nhưng ở tít bên trái, Nam đứng bên bếp lò.', trap:'đúng vật, sai vị trí' },
    { t:'Nam is opening the window.', why:'Sai hành động — cửa sổ có thật nhưng Nam không đụng vào nó.', trap:'hành động' },
    { t:'There is a cat under the table.', why:'Trong tranh không hề có con mèo nào. Câu nghe rất xuôi tai nên dễ gật bừa.', trap:'chi tiết không có' }
  ],
  keys:[
    { w:'cook', r:'/kʊk/', vi:'nấu ăn' },
    { w:'stove', r:'/stəʊv/', vi:'bếp lò' },
    { w:'fridge', r:'/frɪdʒ/', vi:'tủ lạnh' },
    { w:'open', r:'/ˈəʊpən/', vi:'mở' }
  ],
  gram:[{ p:'Thì hiện tại tiếp diễn: be + V-ing',
    vi:'Dùng để tả việc đang xảy ra ngay lúc nhìn vào tranh. Đây là thì chính của mọi bài nghe xem tranh.',
    ex:['Nam is cooking at the stove.', 'Nam đang nấu ăn bên bếp.'] }] },

{ id:'en-04', lang:'en', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock',  x:200, y:86, time:'8:15', r:40 },
    { p:'person', x:120, y:220, pose:'walk' },
    { p:'bag',    x:296, y:220, s:1.3 }
  ]},
  alt:'Đồng hồ treo tường chỉ 8 giờ 15, một người đang bước đi, cái túi để dưới sàn bên phải.',
  opts:[
    { t:'It is a quarter to eight.', why:'«a quarter TO eight» là 7 giờ 45, tức là còn mười lăm phút nữa mới tới 8 giờ.', trap:'giờ: to / past' },
    { t:'It is half past eight.', why:'«half past eight» là 8 giờ 30, kim phút phải chỉ số 6.', trap:'giờ: nửa / một phần tư' },
    { t:'It is a quarter past eight.', ok:true },
    { t:'It is a quarter past nine.', why:'Đúng «a quarter past» nhưng sai giờ — kim ngắn đang ở số 8.', trap:'giờ: sai giờ' }
  ],
  keys:[
    { w:'quarter', r:'/ˈkwɔːtə/', vi:'một phần tư, mười lăm phút' },
    { w:'past', r:'/pɑːst/', vi:'hơn (giờ)' },
    { w:'half', r:'/hɑːf/', vi:'một nửa, ba mươi phút' },
    { w:'clock', r:'/klɒk/', vi:'đồng hồ treo' }
  ],
  gram:[{ p:'Nói giờ: past và to',
    vi:'Từ phút 1 đến 30 dùng «past» (hơn): 8:15 là a quarter past eight. Từ phút 31 đến 59 dùng «to» (kém): 7:45 là a quarter to eight. Nghe nhầm past thành to là lỗi phổ biến nhất.',
    ex:['It is a quarter past eight.', 'Bây giờ là tám giờ mười lăm.'] }] },

{ id:'en-05', lang:'en', lv:'a1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:170, y:220, w:120 },
    { p:'book',  x:170, y:158, s:1.4, open:true },
    { p:'tag',   x:296, y:130, text:'$5' },
    { p:'shelf', x:24,  y:40, w:76, h:92 }
  ]},
  alt:'Một cuốn sách đặt trên bàn, bên cạnh có bảng giá ghi 5 đô la, kệ sách ở góc trái.',
  opts:[
    { t:'The book is fifteen dollars.', why:'Bẫy gần âm: fifteen /fɪfˈtiːn/ nhấn ở cuối, còn five /faɪv/ chỉ một âm tiết. Bảng giá ghi 5.', trap:'gần âm: five / fifteen' },
    { t:'The book is fifty dollars.', why:'Bẫy gần âm khó hơn: fifty /ˈfɪfti/ nhấn ở đầu. Vẫn không phải 5.', trap:'gần âm: five / fifty' },
    { t:'The books are five dollars.', why:'Đúng giá nhưng sai số — trên bàn chỉ có một cuốn, phải là «the book IS».', trap:'số ít / số nhiều' },
    { t:'The book is five dollars.', ok:true }
  ],
  keys:[
    { w:'five', r:'/faɪv/', vi:'năm' },
    { w:'fifteen', r:'/ˌfɪfˈtiːn/', vi:'mười lăm' },
    { w:'fifty', r:'/ˈfɪfti/', vi:'năm mươi' },
    { w:'dollar', r:'/ˈdɒlə/', vi:'đô la' }
  ],
  gram:[{ p:'Phân biệt -teen và -ty khi nghe',
    vi:'fifteen nhấn vào âm cuối -TEEN, fifty nhấn vào âm đầu FIF-. Nghe trọng âm rơi ở đâu là biết số nào. Đây là chỗ mất điểm kinh điển trong mọi kỳ thi nghe.',
    ex:['The book is five dollars.', 'Cuốn sách giá năm đô la.'] }] },

/* ---------------- A2 ---------------- */
{ id:'en-06', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud',    x:86,  y:48 },
    { p:'rain',     x:86,  y:68, n:6 },
    { p:'tree',     x:340, y:220 },
    { p:'person',   x:176, y:220, pose:'walk' },
    { p:'umbrella', x:182, y:100, open:true, s:1.3 }
  ]},
  alt:'Ngoài phố trời mưa, Lan vừa đi vừa che ô đang mở, bên phải có một cái cây.',
  opts:[
    { t:'It is snowing, so Lan is wearing a coat.', why:'Sai thời tiết — trong tranh là những vạch mưa xiên, không phải hạt tuyết tròn.', trap:'thời tiết' },
    { t:'It is raining, so Lan is using an umbrella.', ok:true },
    { t:'It is sunny, but Lan is carrying an umbrella.', why:'Nửa sau đúng (Lan có cầm ô) nên rất dễ gật. Nhưng trời đang mưa chứ không nắng.', trap:'đúng một nửa' },
    { t:'Lan is closing her umbrella because the rain stopped.', why:'Cái ô trong tranh đang bung ra, và mưa vẫn rơi.', trap:'hành động ngược' }
  ],
  keys:[
    { w:'umbrella', r:'/ʌmˈbrelə/', vi:'cái ô' },
    { w:'rain', r:'/reɪn/', vi:'mưa' },
    { w:'snow', r:'/snəʊ/', vi:'tuyết' },
    { w:'so', r:'/səʊ/', vi:'nên, vì vậy' }
  ],
  gram:[{ p:'so và but nối hai vế',
    vi:'«so» nối nguyên nhân với kết quả (trời mưa NÊN che ô). «but» nối hai vế trái ngược. Nghe từ nối là đoán được vế sau đi theo hướng nào.',
    ex:['It is raining, so Lan is using an umbrella.', 'Trời đang mưa nên Lan che ô.'] }] },

{ id:'en-07', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa',  x:172, y:220 },
    { p:'cat',   x:142, y:174, pose:'sit', s:0.8 },
    { p:'cat',   x:206, y:174, pose:'lie', s:0.8 },
    { p:'clock', x:336, y:76, time:'3:15' }
  ]},
  alt:'Hai con mèo ở trên ghế sofa, một con ngồi và một con nằm, đồng hồ chỉ 3 giờ 15.',
  opts:[
    { t:'Two cats are under the sofa.', why:'Sai vị trí — hai con mèo ở trên mặt ghế.', trap:'vị trí' },
    { t:'Three cats are on the sofa.', why:'Sai số lượng — chỉ có hai con.', trap:'số lượng' },
    { t:'Two cats are on the sofa.', ok:true },
    { t:'A cat and a dog are on the sofa.', why:'Sai chủ thể — cả hai con đều là mèo, trong tranh không có con chó nào.', trap:'chủ thể' }
  ],
  keys:[
    { w:'sofa', r:'/ˈsəʊfə/', vi:'ghế sofa' },
    { w:'dog', r:'/dɒɡ/', vi:'con chó' },
    { w:'two', r:'/tuː/', vi:'hai' },
    { w:'on', r:'/ɒn/', vi:'ở trên' }
  ],
  gram:[{ p:'Danh từ số nhiều và động từ đi kèm',
    vi:'«Two cats ARE» — chủ ngữ số nhiều thì động từ to be phải là are. Nếu nghe thấy «is» thì câu đang nói về một vật.',
    ex:['Two cats are on the sofa.', 'Hai con mèo nằm trên ghế sofa.'] }] },

{ id:'en-08', lang:'en', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed',     x:150, y:220 },
    { p:'sleeper', x:158, y:180 },
    { p:'window',  x:206, y:28, view:'night' },
    { p:'clock',   x:342, y:74, time:'10:45', r:28 },
    { p:'book',    x:300, y:220 }
  ]},
  alt:'Ban đêm: một người đang ngủ trên giường, ngoài cửa sổ có mặt trăng, đồng hồ chỉ 10 giờ 45, một cuốn sách để dưới sàn.',
  opts:[
    { t:'It is a quarter to eleven and he is sleeping.', ok:true },
    { t:'It is a quarter past eleven and he is sleeping.', why:'Vế sau đúng nên rất dễ chọn. Nhưng 10:45 là «a quarter TO eleven», không phải past.', trap:'giờ: to / past' },
    { t:'It is a quarter to eleven and he is reading.', why:'Cuốn sách có trong tranh nhưng nằm dưới sàn — người trong tranh đang ngủ.', trap:'đúng vật, sai hành động' },
    { t:'It is a quarter to eleven and he is getting up.', why:'Sai hành động — đây là cảnh đang ngủ, không phải đang ngồi dậy.', trap:'hành động' }
  ],
  keys:[
    { w:'sleep', r:'/sliːp/', vi:'ngủ' },
    { w:'get up', r:'/ɡet ʌp/', vi:'ngủ dậy, đứng dậy' },
    { w:'eleven', r:'/ɪˈlevn/', vi:'mười một' },
    { w:'night', r:'/naɪt/', vi:'ban đêm' }
  ],
  gram:[{ p:'Nối hai mệnh đề bằng and',
    vi:'Câu có hai vế thì phải đúng CẢ HAI. Bẫy hay gặp là để một vế đúng hoàn toàn, chỉ sai vế còn lại — nghe hết câu rồi hãy chọn.',
    ex:['It is a quarter to eleven and he is sleeping.', 'Bây giờ là mười một giờ kém mười lăm và anh ấy đang ngủ.'] }] },

{ id:'en-09', lang:'en', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:186, y:220, w:170 },
    { p:'bread', x:140, y:158 },
    { p:'cup',   x:210, y:158 },
    { p:'bowl',  x:262, y:158 },
    { p:'window', x:300, y:30, view:'sun' }
  ]},
  alt:'Trên bàn có một ổ bánh mì, một cái cốc và một cái bát.',
  opts:[
    { t:'There is some bread and a bowl of soup on the table.', why:'Cái bát có thật trong tranh — nhưng câu bỏ mất cái cốc và nói thành bát súp.', trap:'đúng vật, sai mô tả' },
    { t:'There are two cups of tea on the table.', why:'Sai số lượng — chỉ có một cái cốc.', trap:'số lượng' },
    { t:'There is some bread and a cup of tea on the table.', ok:true },
    { t:'There is some bread under the table.', why:'Sai vị trí — bánh mì nằm trên mặt bàn.', trap:'vị trí' }
  ],
  keys:[
    { w:'bread', r:'/bred/', vi:'bánh mì' },
    { w:'bowl', r:'/bəʊl/', vi:'cái bát' },
    { w:'some', r:'/sʌm/', vi:'một ít' },
    { w:'a cup of', r:'/ə kʌp ɒv/', vi:'một cốc (gì đó)' }
  ],
  gram:[{ p:'Danh từ không đếm được: some bread, a cup of tea',
    vi:'bread và tea không đếm trực tiếp được nên không nói «a bread». Muốn đếm phải mượn vật chứa: a cup of tea, a bowl of soup, hoặc dùng «some».',
    ex:['There is some bread and a cup of tea on the table.', 'Trên bàn có ít bánh mì và một cốc trà.'] }] },

{ id:'en-10', lang:'en', lv:'a2', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun',    x:56,  y:48 },
    { p:'tree',   x:330, y:220 },
    { p:'person', x:170, y:220, pose:'run' },
    { p:'ball',   x:250, y:220 },
    { p:'bird',   x:96,  y:220, s:0.8 }
  ]},
  alt:'Ngoài công viên trời nắng: Huy đang chạy, quả bóng nằm trên mặt đất phía sau, có cây và một con chim.',
  opts:[
    { t:'Huy is walking in the park.', why:'Sai hành động, và đây là bẫy tinh: hai chân trong tranh dang rộng, thân đổ về trước — đó là chạy chứ không phải đi bộ.', trap:'hành động gần giống' },
    { t:'Huy is playing with a ball.', why:'Quả bóng có thật nhưng đang nằm yên dưới đất, Huy không chơi với nó.', trap:'đúng vật, sai hành động' },
    { t:'Huy is running in the park.', ok:true },
    { t:'Huy is sitting under a tree.', why:'Cái cây có thật nhưng Huy đang chạy, không ngồi.', trap:'đúng vật, sai hành động' }
  ],
  keys:[
    { w:'run', r:'/rʌn/', vi:'chạy' },
    { w:'walk', r:'/wɔːk/', vi:'đi bộ' },
    { w:'park', r:'/pɑːk/', vi:'công viên' },
    { w:'ball', r:'/bɔːl/', vi:'quả bóng' }
  ],
  gram:[{ p:'run · walk · sit — chọn đúng động từ chỉ tư thế',
    vi:'Tranh chỉ khác nhau ở dáng người: chạy thì chân dang rộng và người đổ về trước, đi bộ thì bước ngắn và thân thẳng. Nghe động từ rồi đối chiếu dáng.',
    ex:['Huy is running in the park.', 'Huy đang chạy trong công viên.'] }] },

/* ---------------- B1 ---------------- */
{ id:'en-11', lang:'en', lv:'b1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:248, y:220, pose:'write' },
    { p:'desk',   x:238, y:220, w:104 },
    { p:'shelf',  x:326, y:132, w:62, h:84, rows:3 },
    { p:'clock',  x:214, y:34, time:'9:00', r:24 }
  ]},
  alt:'Trong lớp học có bảng đen: Lan ngồi viết ở bàn, kệ sách ở bên phải, đồng hồ chỉ 9 giờ.',
  opts:[
    { t:'Lan is reading a book at her desk.', why:'Trên kệ có sách thật, nhưng Lan đang cầm bút viết chứ không cầm sách đọc.', trap:'đúng vật, sai hành động' },
    { t:'Lan is writing on the board.', why:'Cái bảng có trong tranh nhưng Lan ngồi ở bàn, không đứng viết bảng.', trap:'đúng hành động, sai vị trí' },
    { t:'Lan is sitting next to the window.', why:'Trong lớp này không vẽ cửa sổ nào. Câu nghe hợp lý nên dễ chọn bừa.', trap:'chi tiết không có' },
    { t:'Lan is writing at her desk.', ok:true }
  ],
  keys:[
    { w:'write', r:'/raɪt/', vi:'viết' },
    { w:'desk', r:'/desk/', vi:'bàn học, bàn làm việc' },
    { w:'board', r:'/bɔːd/', vi:'cái bảng' },
    { w:'classroom', r:'/ˈklɑːsruːm/', vi:'lớp học' }
  ],
  gram:[{ p:'at · on — cùng là giới từ nhưng khác chỗ',
    vi:'«at her desk» là ngồi tại bàn, «on the board» là viết lên mặt bảng. Đổi giới từ là đổi hẳn nơi chốn, dù động từ vẫn y nguyên.',
    ex:['Lan is writing at her desk.', 'Lan đang ngồi viết ở bàn.'] }] },

{ id:'en-12', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:126, y:220, pose:'phone' },
    { p:'person', x:236, y:220, pose:'read' },
    { p:'plant',  x:338, y:220, s:1.3 },
    { p:'window', x:286, y:30, view:'sun' }
  ]},
  alt:'Hai người trong phòng: người bên trái đang áp điện thoại lên tai, người bên phải cầm sách đọc. Bên phải có chậu cây.',
  opts:[
    { t:'Both of them are talking on the phone.', why:'«Both» là cả hai. Chỉ một người cầm điện thoại, người kia cầm sách.', trap:'số lượng: both' },
    { t:'One of them is talking on the phone and the other is reading.', ok:true },
    { t:'One of them is reading and the other is sleeping.', why:'Vế đầu đúng nên rất dễ gật. Nhưng không ai đang ngủ cả.', trap:'đúng một nửa' },
    { t:'Neither of them is reading.', why:'«Neither» là không ai cả. Thực tế có một người đang đọc.', trap:'phủ định: neither' }
  ],
  keys:[
    { w:'both', r:'/bəʊθ/', vi:'cả hai' },
    { w:'neither', r:'/ˈnaɪðə/', vi:'không ai trong hai' },
    { w:'the other', r:'/ði ˈʌðə/', vi:'người/cái còn lại' },
    { w:'talk on the phone', r:'/tɔːk ɒn ðə fəʊn/', vi:'nói chuyện điện thoại' }
  ],
  gram:[{ p:'both · neither · one … the other',
    vi:'Ba cách nói về hai người: «both» là cả hai, «neither» là không ai, «one … the other» là một người thế này, người kia thế kia. Nghe đúng từ đầu câu là loại được ngay hai đáp án.',
    ex:['One of them is talking on the phone and the other is reading.', 'Một người đang nói điện thoại, người kia đang đọc sách.'] }] },

{ id:'en-13', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun',     x:60,  y:46 },
    { p:'tree',    x:296, y:220 },
    { p:'bicycle', x:248, y:220 },
    { p:'person',  x:96,  y:220, pose:'walk' }
  ]},
  alt:'Ngoài phố trời nắng: một chiếc xe đạp dựng cạnh cây, một người đang đi bộ ở xa bên trái.',
  opts:[
    { t:'It is sunny and there is a bicycle next to the tree.', ok:true },
    { t:'It is cloudy and there is a bicycle next to the tree.', why:'Vế sau đúng hoàn toàn nên dễ bỏ qua vế đầu. Trên trời là mặt trời có tia, không phải đám mây.', trap:'thời tiết' },
    { t:'It is sunny and there are two bicycles next to the tree.', why:'Sai số lượng — chỉ có một chiếc xe đạp.', trap:'số lượng' },
    { t:'It is sunny and there is a bicycle in front of the house.', why:'Trong tranh không có ngôi nhà nào. Chiếc xe đạp dựng cạnh cái cây.', trap:'chi tiết không có' }
  ],
  keys:[
    { w:'sunny', r:'/ˈsʌni/', vi:'trời nắng' },
    { w:'cloudy', r:'/ˈklaʊdi/', vi:'trời nhiều mây' },
    { w:'bicycle', r:'/ˈbaɪsɪkl/', vi:'xe đạp' },
    { w:'in front of', r:'/ɪn frʌnt ɒv/', vi:'phía trước' }
  ],
  gram:[{ p:'Tả thời tiết: It is + tính từ đuôi -y',
    vi:'sun thành sunny, cloud thành cloudy, rain thành rainy, wind thành windy. Chủ ngữ luôn là «It», không nói «The weather is sun».',
    ex:['It is sunny and there is a bicycle next to the tree.', 'Trời nắng và có một chiếc xe đạp dựng cạnh cây.'] }] },

{ id:'en-14', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:34,  y:96, w:82, h:110, rows:3 },
    { p:'plant', x:160, y:220, s:1.5 },
    { p:'chair', x:330, y:220 },
    { p:'desk',  x:262, y:220, w:100 }
  ]},
  alt:'Trong phòng: kệ sách sát tường bên trái, chậu cây đứng giữa, bàn làm việc và ghế ở bên phải.',
  opts:[
    { t:'The plant is behind the desk.', why:'«behind» là ở phía sau. Chậu cây đứng ngang hàng, bên trái cái bàn.', trap:'vị trí' },
    { t:'The plant is between the desk and the bookshelf.', ok:true },
    { t:'The plant is in front of the bookshelf.', why:'Kệ sách có thật nhưng chậu cây không che trước nó, nó nằm ở khoảng giữa hai vật.', trap:'vị trí' },
    { t:'There is no plant in the room.', why:'Phủ định thẳng thừng — nghe qua tưởng loại được ngay, nhưng chậu cây rõ ràng có trong tranh.', trap:'phủ định' }
  ],
  keys:[
    { w:'between', r:'/bɪˈtwiːn/', vi:'ở giữa (hai vật)' },
    { w:'behind', r:'/bɪˈhaɪnd/', vi:'phía sau' },
    { w:'in front of', r:'/ɪn frʌnt ɒv/', vi:'phía trước' },
    { w:'plant', r:'/plɑːnt/', vi:'cây trồng trong chậu' }
  ],
  gram:[{ p:'between A and B',
    vi:'«between» luôn cần hai mốc, nối bằng «and»: between the desk AND the bookshelf. Nếu chỉ có một mốc thì phải dùng next to, behind hoặc in front of.',
    ex:['The plant is between the desk and the bookshelf.', 'Chậu cây nằm giữa bàn làm việc và kệ sách.'] }] },

{ id:'en-15', lang:'en', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:288, y:28, view:'sun' },
    { p:'clock',  x:64,  y:70, time:'7:00', r:26 },
    { p:'table',  x:190, y:220, w:120 },
    { p:'person', x:112, y:220, pose:'drink' },
    { p:'bread',  x:236, y:158 }
  ]},
  alt:'Buổi sáng 7 giờ: một người đang đưa cốc lên uống, trên bàn có ổ bánh mì, ngoài cửa sổ trời nắng.',
  opts:[
    { t:'He drinks coffee every morning.', why:'Câu này đúng ngữ pháp và nghe rất hợp cảnh, nhưng nó tả THÓI QUEN. Tranh chỉ cho biết chuyện đang xảy ra lúc này.', trap:'sai thì' },
    { t:'He is making coffee.', why:'Sai hành động — anh ấy đang đưa cốc lên uống, không phải đang pha.', trap:'hành động' },
    { t:'He is drinking coffee right now.', ok:true },
    { t:'He has finished his coffee.', why:'Sai thì và sai trạng thái — cốc đang trên tay, việc uống chưa xong.', trap:'sai thì' }
  ],
  keys:[
    { w:'drink', r:'/drɪŋk/', vi:'uống' },
    { w:'right now', r:'/raɪt naʊ/', vi:'ngay lúc này' },
    { w:'every morning', r:'/ˈevri ˈmɔːnɪŋ/', vi:'mỗi sáng' },
    { w:'finish', r:'/ˈfɪnɪʃ/', vi:'làm xong, kết thúc' }
  ],
  gram:[{ p:'Hiện tại tiếp diễn và hiện tại đơn khác nhau ở chỗ nào',
    vi:'«He is drinking» là đang uống lúc này — đúng với tranh. «He drinks every morning» là thói quen lặp lại, tranh không nói được điều đó. Bài nghe xem tranh luôn hỏi cái ĐANG diễn ra.',
    ex:['He is drinking coffee right now.', 'Anh ấy đang uống cà phê ngay lúc này.'] }] }

];

if (typeof window !== 'undefined') window.LISTEN_PIC = LISTEN_PIC;
if (typeof module !== 'undefined' && module.exports) module.exports = { LISTEN_PIC };
