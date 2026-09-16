/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG ANH (mở rộng)
   ------------------------------------------------------------
   Mức A1 · A2 · B1 — đọc để nhặt từ trong ngữ cảnh, không phải để thi.
   Đẩy thêm vào mảng READINGS của js/readings.js (nạp SAU tệp đó).
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'en', lv:'a1', mins:3, cat:'Đời sống', title:'The Bus at Seven', vi:'Chuyến xe buýt lúc bảy giờ',
  intro:'A1. Chùm từ trọng tâm: thói quen hằng ngày, giờ giấc, phương tiện.',
  text:[
    'Mai takes the same bus every morning. It comes at seven o\'clock.',
    'She always sits near the window. She likes to watch the shops open.',
    'The driver knows her name. He says "Good morning, Mai" every day.',
    'The ride is only fifteen minutes, but it is her quiet time.'
  ],
  tr:[
    'Mai đi cùng một chuyến xe buýt mỗi sáng. Xe đến lúc bảy giờ.',
    'Cô luôn ngồi gần cửa sổ. Cô thích ngắm các cửa hàng mở cửa.',
    'Bác tài biết tên cô. Ngày nào bác cũng nói “Chào buổi sáng, Mai.”',
    'Chuyến đi chỉ mười lăm phút, nhưng đó là khoảng lặng của cô.'
  ],
  keys:[
    { w:'bus', r:'/bʌs/', vi:'xe buýt' },
    { w:'morning', r:'/ˈmɔːnɪŋ/', vi:'buổi sáng' },
    { w:'window', r:'/ˈwɪndəʊ/', vi:'cửa sổ' },
    { w:'shop', r:'/ʃɒp/', vi:'cửa hàng' },
    { w:'driver', r:'/ˈdraɪvə/', vi:'tài xế' },
    { w:'ride', r:'/raɪd/', vi:'chuyến đi' },
    { w:'quiet', r:'/ˈkwaɪət/', vi:'yên tĩnh' },
    { w:'every day', r:'/ˈevri deɪ/', vi:'mỗi ngày' }
  ],
  qs:[
    { q:'Xe buýt đến lúc mấy giờ?', o:['6 giờ','7 giờ','8 giờ','9 giờ'], c:1, e:'It comes at seven o\'clock.' },
    { q:'Mai ngồi ở đâu?', o:['Gần cửa ra vào','Gần cửa sổ','Phía sau','Cạnh tài xế'], c:1, e:'She always sits near the window.' },
    { q:'Chuyến đi dài bao lâu?', o:['5 phút','10 phút','15 phút','30 phút'], c:2, e:'The ride is only fifteen minutes.' }
  ],
  after:'Viết 4 câu về chuyến đi hằng ngày của bạn, dùng: every morning · near · only.' },

{ lang:'en', lv:'a1', mins:3, cat:'Ẩm thực', title:'Breakfast at Home', vi:'Bữa sáng ở nhà',
  intro:'A1. Chùm từ trọng tâm: đồ ăn sáng, động từ chỉ thói quen.',
  text:[
    'My family eats breakfast together at six thirty.',
    'My father drinks black coffee. My mother drinks green tea.',
    'I usually have rice and eggs. My little sister only wants bread and milk.',
    'We talk about the day. Then everybody leaves the house.'
  ],
  tr:[
    'Gia đình tôi ăn sáng cùng nhau lúc sáu giờ rưỡi.',
    'Bố tôi uống cà phê đen. Mẹ tôi uống trà xanh.',
    'Tôi thường ăn cơm với trứng. Em gái tôi thì chỉ muốn bánh mì và sữa.',
    'Chúng tôi nói chuyện về một ngày sắp tới. Rồi mọi người rời khỏi nhà.'
  ],
  keys:[
    { w:'breakfast', r:'/ˈbrekfəst/', vi:'bữa sáng' },
    { w:'together', r:'/təˈɡeðə/', vi:'cùng nhau' },
    { w:'coffee', r:'/ˈkɒfi/', vi:'cà phê' },
    { w:'usually', r:'/ˈjuːʒuəli/', vi:'thường' },
    { w:'egg', r:'/eɡ/', vi:'trứng' },
    { w:'bread', r:'/bred/', vi:'bánh mì' },
    { w:'talk about', r:'/tɔːk əˈbaʊt/', vi:'nói về' },
    { w:'leave', r:'/liːv/', vi:'rời đi' }
  ],
  qs:[
    { q:'Cả nhà ăn sáng lúc mấy giờ?', o:['6:00','6:30','7:00','7:30'], c:1, e:'at six thirty.' },
    { q:'Mẹ uống gì?', o:['Cà phê đen','Trà xanh','Sữa','Nước cam'], c:1, e:'My mother drinks green tea.' },
    { q:'Em gái muốn gì?', o:['Cơm và trứng','Bánh mì và sữa','Phở','Cháo'], c:1, e:'only wants bread and milk.' }
  ],
  after:'Tả bữa sáng nhà bạn bằng 4 câu, dùng: usually · together · only.' },

{ lang:'en', lv:'a1', mins:3, cat:'Đời sống', title:'A Small Room', vi:'Một căn phòng nhỏ',
  intro:'A1. Chùm từ trọng tâm: đồ đạc trong phòng, giới từ chỉ vị trí.',
  text:[
    'My room is small but bright. There is one big window.',
    'The bed is next to the wall. The desk is under the window.',
    'There are many books on the shelf. Some of them are in English.',
    'I clean the room on Sunday. I feel better in a tidy room.'
  ],
  tr:[
    'Phòng tôi nhỏ nhưng sáng. Có một cửa sổ lớn.',
    'Giường kê sát tường. Bàn học đặt dưới cửa sổ.',
    'Trên giá có nhiều sách. Một số cuốn bằng tiếng Anh.',
    'Tôi dọn phòng vào chủ nhật. Trong căn phòng gọn gàng tôi thấy dễ chịu hơn.'
  ],
  keys:[
    { w:'bright', r:'/braɪt/', vi:'sáng sủa' },
    { w:'next to', r:'/nekst tuː/', vi:'bên cạnh' },
    { w:'wall', r:'/wɔːl/', vi:'bức tường' },
    { w:'desk', r:'/desk/', vi:'bàn học' },
    { w:'shelf', r:'/ʃelf/', vi:'giá sách' },
    { w:'clean', r:'/kliːn/', vi:'dọn dẹp' },
    { w:'tidy', r:'/ˈtaɪdi/', vi:'gọn gàng' },
    { w:'feel', r:'/fiːl/', vi:'cảm thấy' }
  ],
  qs:[
    { q:'Bàn học đặt ở đâu?', o:['Cạnh tường','Dưới cửa sổ','Cạnh giường','Giữa phòng'], c:1, e:'The desk is under the window.' },
    { q:'Trên giá có gì?', o:['Quần áo','Nhiều sách','Đồ chơi','Cây cảnh'], c:1, e:'There are many books on the shelf.' },
    { q:'Người viết dọn phòng khi nào?', o:['Thứ Bảy','Chủ nhật','Mỗi ngày','Mỗi tháng'], c:1, e:'I clean the room on Sunday.' }
  ],
  after:'Tả phòng bạn bằng 4 câu, dùng: There is / There are · next to · under.' },

{ lang:'en', lv:'a1', mins:3, cat:'Mua sắm', title:'At the Market', vi:'Ở chợ',
  intro:'A1. Chùm từ trọng tâm: mua bán, giá cả, số lượng.',
  text:[
    'On Saturday my mother goes to the market. Sometimes I go with her.',
    'She buys vegetables, fish and fruit. She never buys too much.',
    'The woman who sells tomatoes always gives us one extra.',
    'We carry two bags home. The bags are heavy but we are happy.'
  ],
  tr:[
    'Thứ Bảy mẹ tôi đi chợ. Thỉnh thoảng tôi đi cùng mẹ.',
    'Mẹ mua rau, cá và trái cây. Mẹ không bao giờ mua quá nhiều.',
    'Cô bán cà chua lúc nào cũng cho thêm chúng tôi một quả.',
    'Chúng tôi xách hai túi về nhà. Túi nặng nhưng chúng tôi vui.'
  ],
  keys:[
    { w:'market', r:'/ˈmɑːkɪt/', vi:'chợ' },
    { w:'vegetable', r:'/ˈvedʒtəbl/', vi:'rau' },
    { w:'fruit', r:'/fruːt/', vi:'trái cây' },
    { w:'never', r:'/ˈnevə/', vi:'không bao giờ' },
    { w:'sell', r:'/sel/', vi:'bán' },
    { w:'extra', r:'/ˈekstrə/', vi:'thêm' },
    { w:'carry', r:'/ˈkæri/', vi:'xách, mang' },
    { w:'heavy', r:'/ˈhevi/', vi:'nặng' }
  ],
  qs:[
    { q:'Họ đi chợ ngày nào?', o:['Thứ Sáu','Thứ Bảy','Chủ nhật','Mỗi ngày'], c:1, e:'On Saturday my mother goes to the market.' },
    { q:'Cô bán cà chua làm gì?', o:['Giảm giá','Cho thêm một quả','Giao tận nhà','Cho nợ'], c:1, e:'always gives us one extra.' },
    { q:'Họ mang về mấy túi?', o:['Một','Hai','Ba','Bốn'], c:1, e:'We carry two bags home.' }
  ],
  after:'Viết 4 câu đi chợ, dùng: buy · never · heavy.' },

{ lang:'en', lv:'a1', mins:3, cat:'Học tập', title:'My English Notebook', vi:'Cuốn vở tiếng Anh của tôi',
  intro:'A1. Chùm từ trọng tâm: học từ mới, thói quen học, tiến bộ nhỏ.',
  text:[
    'I have a small notebook for new words. I write five words every day.',
    'On one side I write the English word. On the other side I write Vietnamese.',
    'Before I sleep, I read the last page again.',
    'The notebook is now half full. That is three hundred words.'
  ],
  tr:[
    'Tôi có một cuốn sổ nhỏ để ghi từ mới. Mỗi ngày tôi viết năm từ.',
    'Một bên tôi viết từ tiếng Anh. Bên kia tôi viết tiếng Việt.',
    'Trước khi ngủ, tôi đọc lại trang cuối.',
    'Bây giờ cuốn sổ đã đầy một nửa. Tức là ba trăm từ.'
  ],
  keys:[
    { w:'notebook', r:'/ˈnəʊtbʊk/', vi:'cuốn sổ' },
    { w:'word', r:'/wɜːd/', vi:'từ' },
    { w:'write', r:'/raɪt/', vi:'viết' },
    { w:'side', r:'/saɪd/', vi:'mặt, phía' },
    { w:'before', r:'/bɪˈfɔː/', vi:'trước khi' },
    { w:'page', r:'/peɪdʒ/', vi:'trang' },
    { w:'half', r:'/hɑːf/', vi:'một nửa' },
    { w:'full', r:'/fʊl/', vi:'đầy' }
  ],
  qs:[
    { q:'Mỗi ngày viết mấy từ?', o:['Ba','Năm','Mười','Hai mươi'], c:1, e:'I write five words every day.' },
    { q:'Trước khi ngủ làm gì?', o:['Viết thêm','Đọc lại trang cuối','Nghe nhạc','Làm bài tập'], c:1, e:'I read the last page again.' },
    { q:'Cuốn sổ có bao nhiêu từ?', o:['100','200','300','500'], c:2, e:'That is three hundred words.' }
  ],
  after:'Viết 4 câu về cách bạn học từ mới, dùng: every day · before · again.' },

{ lang:'en', lv:'a1', mins:3, cat:'Đời sống', title:'The Cat Next Door', vi:'Con mèo nhà bên',
  intro:'A1. Chùm từ trọng tâm: con vật, mô tả, thói quen.',
  text:[
    'There is an orange cat in my street. It does not have a home.',
    'It sits in front of the bakery every afternoon. The baker gives it milk.',
    'The cat is not afraid of people. It walks between our legs.',
    'Nobody owns it, but everybody feeds it. We call it Tiger.'
  ],
  tr:[
    'Ở phố tôi có một con mèo màu cam. Nó không có nhà.',
    'Chiều nào nó cũng ngồi trước cửa tiệm bánh. Bác thợ bánh cho nó sữa.',
    'Con mèo không sợ người. Nó đi luồn qua chân chúng tôi.',
    'Chẳng ai là chủ nó, nhưng ai cũng cho nó ăn. Chúng tôi gọi nó là Tiger.'
  ],
  keys:[
    { w:'street', r:'/striːt/', vi:'phố' },
    { w:'bakery', r:'/ˈbeɪkəri/', vi:'tiệm bánh' },
    { w:'afternoon', r:'/ˌɑːftəˈnuːn/', vi:'buổi chiều' },
    { w:'afraid', r:'/əˈfreɪd/', vi:'sợ' },
    { w:'between', r:'/bɪˈtwiːn/', vi:'giữa' },
    { w:'nobody', r:'/ˈnəʊbədi/', vi:'không ai' },
    { w:'own', r:'/əʊn/', vi:'sở hữu' },
    { w:'feed', r:'/fiːd/', vi:'cho ăn' }
  ],
  qs:[
    { q:'Con mèo ngồi ở đâu?', o:['Trước tiệm bánh','Trong công viên','Trên mái nhà','Ở bến xe'], c:0, e:'It sits in front of the bakery.' },
    { q:'Ai cho nó sữa?', o:['Người viết','Bác thợ bánh','Trẻ con','Không ai'], c:1, e:'The baker gives it milk.' },
    { q:'Ai là chủ con mèo?', o:['Bác thợ bánh','Người viết','Không ai','Cả phố'], c:2, e:'Nobody owns it.' }
  ],
  after:'Tả một con vật ở khu bạn bằng 4 câu, dùng: There is · every afternoon · nobody.' },

{ lang:'en', lv:'a1', mins:3, cat:'Đời sống', title:'Rainy Afternoon', vi:'Buổi chiều mưa',
  intro:'A1. Chùm từ trọng tâm: thời tiết, hoạt động trong nhà.',
  text:[
    'It rains a lot in July. Today it starts at two o\'clock.',
    'I cannot go out, so I stay at home. I make tea and open a book.',
    'My brother plays a game on his phone. Our dog sleeps by the door.',
    'At five the rain stops. The street is clean and the air is cool.'
  ],
  tr:[
    'Tháng Bảy mưa nhiều. Hôm nay mưa bắt đầu lúc hai giờ.',
    'Tôi không ra ngoài được nên ở nhà. Tôi pha trà và mở một cuốn sách.',
    'Em trai tôi chơi game trên điện thoại. Con chó nhà tôi ngủ cạnh cửa.',
    'Năm giờ thì mưa tạnh. Đường phố sạch sẽ và không khí mát mẻ.'
  ],
  keys:[
    { w:'rain', r:'/reɪn/', vi:'mưa' },
    { w:'start', r:'/stɑːt/', vi:'bắt đầu' },
    { w:'stay', r:'/steɪ/', vi:'ở lại' },
    { w:'make tea', r:'/meɪk tiː/', vi:'pha trà' },
    { w:'play', r:'/pleɪ/', vi:'chơi' },
    { w:'by the door', r:'/baɪ ðə dɔː/', vi:'cạnh cửa' },
    { w:'stop', r:'/stɒp/', vi:'dừng, tạnh' },
    { w:'cool', r:'/kuːl/', vi:'mát' }
  ],
  qs:[
    { q:'Mưa bắt đầu lúc mấy giờ?', o:['1 giờ','2 giờ','3 giờ','4 giờ'], c:1, e:'it starts at two o\'clock.' },
    { q:'Người viết làm gì?', o:['Ngủ','Pha trà và đọc sách','Chơi game','Ra ngoài'], c:1, e:'I make tea and open a book.' },
    { q:'Mấy giờ mưa tạnh?', o:['4 giờ','5 giờ','6 giờ','7 giờ'], c:1, e:'At five the rain stops.' }
  ],
  after:'Viết 4 câu về một buổi chiều mưa, dùng: cannot · so · at five.' },

{ lang:'en', lv:'a1', mins:3, cat:'Công việc', title:'My First Day', vi:'Ngày đầu đi làm',
  intro:'A1. Chùm từ trọng tâm: công việc mới, giới thiệu, cảm giác.',
  text:[
    'Yesterday was my first day at the shop. I was very nervous.',
    'The manager showed me the coffee machine. It has many buttons.',
    'A customer asked for tea, not coffee. I was happy — tea is easy.',
    'At the end of the day my feet hurt. But I want to come back tomorrow.'
  ],
  tr:[
    'Hôm qua là ngày đầu tôi làm ở cửa hàng. Tôi rất hồi hộp.',
    'Quản lý chỉ cho tôi cái máy pha cà phê. Nó có nhiều nút.',
    'Một khách gọi trà chứ không phải cà phê. Tôi mừng — trà thì dễ.',
    'Cuối ngày chân tôi đau. Nhưng mai tôi vẫn muốn quay lại.'
  ],
  keys:[
    { w:'nervous', r:'/ˈnɜːvəs/', vi:'hồi hộp' },
    { w:'manager', r:'/ˈmænɪdʒə/', vi:'quản lý' },
    { w:'show', r:'/ʃəʊ/', vi:'chỉ, cho xem' },
    { w:'machine', r:'/məˈʃiːn/', vi:'máy' },
    { w:'button', r:'/ˈbʌtn/', vi:'nút bấm' },
    { w:'customer', r:'/ˈkʌstəmə/', vi:'khách hàng' },
    { w:'ask for', r:'/ɑːsk fɔː/', vi:'gọi, yêu cầu' },
    { w:'hurt', r:'/hɜːt/', vi:'đau' }
  ],
  qs:[
    { q:'Người viết cảm thấy thế nào?', o:['Bình thản','Rất hồi hộp','Chán','Tức giận'], c:1, e:'I was very nervous.' },
    { q:'Khách gọi gì?', o:['Cà phê','Trà','Nước cam','Bánh'], c:1, e:'A customer asked for tea.' },
    { q:'Cuối ngày thế nào?', o:['Chân đau nhưng vẫn muốn quay lại','Muốn nghỉ việc','Được thưởng','Về sớm'], c:0, e:'my feet hurt. But I want to come back tomorrow.' }
  ],
  after:'Kể ngày đầu làm việc bằng 4 câu, dùng: was/were · show · ask for.' },

{ lang:'en', lv:'a1', mins:3, cat:'Sức khoẻ', title:'A Walk After Dinner', vi:'Đi bộ sau bữa tối',
  intro:'A1. Chùm từ trọng tâm: vận động nhẹ, thói quen gia đình.',
  text:[
    'After dinner my parents always walk for thirty minutes.',
    'They go around the lake near our house. Many neighbours do the same.',
    'Last month I started to go with them. At first I was bored.',
    'Now I like it. We do not talk much, but we walk together.'
  ],
  tr:[
    'Sau bữa tối bố mẹ tôi luôn đi bộ ba mươi phút.',
    'Ông bà đi vòng quanh hồ gần nhà. Nhiều hàng xóm cũng làm vậy.',
    'Tháng trước tôi bắt đầu đi cùng. Ban đầu tôi thấy chán.',
    'Giờ thì tôi thích. Chúng tôi không nói nhiều, nhưng cùng đi với nhau.'
  ],
  keys:[
    { w:'dinner', r:'/ˈdɪnə/', vi:'bữa tối' },
    { w:'walk', r:'/wɔːk/', vi:'đi bộ' },
    { w:'around', r:'/əˈraʊnd/', vi:'vòng quanh' },
    { w:'lake', r:'/leɪk/', vi:'hồ' },
    { w:'neighbour', r:'/ˈneɪbə/', vi:'hàng xóm' },
    { w:'start', r:'/stɑːt/', vi:'bắt đầu' },
    { w:'at first', r:'/ət fɜːst/', vi:'lúc đầu' },
    { w:'bored', r:'/bɔːd/', vi:'chán' }
  ],
  qs:[
    { q:'Bố mẹ đi bộ bao lâu?', o:['15 phút','30 phút','45 phút','1 tiếng'], c:1, e:'walk for thirty minutes.' },
    { q:'Họ đi ở đâu?', o:['Quanh hồ','Trong công viên','Trên phố lớn','Trong nhà'], c:0, e:'They go around the lake near our house.' },
    { q:'Ban đầu người viết thấy thế nào?', o:['Thích ngay','Chán','Mệt','Vui'], c:1, e:'At first I was bored.' }
  ],
  after:'Viết 4 câu về một thói quen gia đình, dùng: always · at first · now.' },

{ lang:'en', lv:'a1', mins:3, cat:'Đời sống', title:'The Lost Key', vi:'Chiếc chìa khoá bị mất',
  intro:'A1. Chùm từ trọng tâm: mất đồ, tìm kiếm, may mắn.',
  text:[
    'Last Friday I lost my house key. I looked in my bag three times.',
    'I sat on the stairs and waited for my sister. She came home at nine.',
    'On Saturday I found the key in my coat pocket.',
    'Now I always put the key in the same place. Always.'
  ],
  tr:[
    'Thứ Sáu tuần trước tôi mất chìa khoá nhà. Tôi lục túi ba lần.',
    'Tôi ngồi ở cầu thang đợi chị. Chị về lúc chín giờ.',
    'Thứ Bảy tôi tìm thấy chìa khoá trong túi áo khoác.',
    'Bây giờ tôi luôn để chìa khoá ở đúng một chỗ. Luôn luôn.'
  ],
  keys:[
    { w:'lose', r:'/luːz/', vi:'làm mất' },
    { w:'key', r:'/kiː/', vi:'chìa khoá' },
    { w:'look in', r:'/lʊk ɪn/', vi:'tìm trong' },
    { w:'stairs', r:'/steəz/', vi:'cầu thang' },
    { w:'wait for', r:'/weɪt fɔː/', vi:'đợi' },
    { w:'find', r:'/faɪnd/', vi:'tìm thấy' },
    { w:'pocket', r:'/ˈpɒkɪt/', vi:'túi áo' },
    { w:'the same place', r:'/ðə seɪm pleɪs/', vi:'cùng một chỗ' }
  ],
  qs:[
    { q:'Người viết đợi ai?', o:['Mẹ','Chị gái','Bạn','Hàng xóm'], c:1, e:'waited for my sister.' },
    { q:'Chị về lúc mấy giờ?', o:['7 giờ','8 giờ','9 giờ','10 giờ'], c:2, e:'She came home at nine.' },
    { q:'Chìa khoá ở đâu?', o:['Trong túi xách','Trong túi áo khoác','Ở trường','Ở cửa'], c:1, e:'in my coat pocket.' }
  ],
  after:'Kể một lần mất đồ bằng 4 câu, dùng: lost · looked in · found.' },

{ lang:'en', lv:'a1', mins:3, cat:'Gia đình', title:'My Grandmother\'s Garden', vi:'Khu vườn của bà tôi',
  intro:'A1. Chùm từ trọng tâm: vườn tược, cây cối, gia đình.',
  text:[
    'My grandmother has a small garden behind her house.',
    'She grows onions, chillies and one lemon tree.',
    'Every morning she waters the plants before it gets hot.',
    'She says the garden keeps her young. She is seventy-eight.'
  ],
  tr:[
    'Bà tôi có một khu vườn nhỏ phía sau nhà.',
    'Bà trồng hành, ớt và một cây chanh.',
    'Sáng nào bà cũng tưới cây trước khi trời nắng.',
    'Bà bảo khu vườn giữ cho bà trẻ lâu. Bà bảy mươi tám tuổi.'
  ],
  keys:[
    { w:'garden', r:'/ˈɡɑːdn/', vi:'vườn' },
    { w:'behind', r:'/bɪˈhaɪnd/', vi:'phía sau' },
    { w:'grow', r:'/ɡrəʊ/', vi:'trồng' },
    { w:'onion', r:'/ˈʌnjən/', vi:'hành' },
    { w:'chilli', r:'/ˈtʃɪli/', vi:'ớt' },
    { w:'water', r:'/ˈwɔːtə/', vi:'tưới' },
    { w:'plant', r:'/plɑːnt/', vi:'cây trồng' },
    { w:'young', r:'/jʌŋ/', vi:'trẻ' }
  ],
  qs:[
    { q:'Vườn ở đâu?', o:['Trước nhà','Sau nhà','Trên sân thượng','Cạnh hồ'], c:1, e:'behind her house.' },
    { q:'Bà trồng gì?', o:['Hoa hồng','Hành, ớt và cây chanh','Rau cải','Chuối'], c:1, e:'She grows onions, chillies and one lemon tree.' },
    { q:'Bà bao nhiêu tuổi?', o:['68','72','78','82'], c:2, e:'She is seventy-eight.' }
  ],
  after:'Tả một khu vườn bằng 4 câu, dùng: behind · grow · every morning.' },

{ lang:'en', lv:'a1', mins:3, cat:'Thể thao', title:'Saturday Football', vi:'Bóng đá thứ Bảy',
  intro:'A1. Chùm từ trọng tâm: thể thao, bạn bè, thắng thua.',
  text:[
    'Every Saturday my friends and I play football in the park.',
    'We start at five, when it is not too hot. Two teams, six players each.',
    'Last week my team lost four to two. Nobody was angry.',
    'After the game we drink sugarcane juice. That is the best part.'
  ],
  tr:[
    'Thứ Bảy nào tôi và các bạn cũng đá bóng trong công viên.',
    'Chúng tôi bắt đầu lúc năm giờ, khi trời bớt nóng. Hai đội, mỗi đội sáu người.',
    'Tuần trước đội tôi thua bốn hai. Chẳng ai giận cả.',
    'Sau trận chúng tôi uống nước mía. Đó mới là phần hay nhất.'
  ],
  keys:[
    { w:'football', r:'/ˈfʊtbɔːl/', vi:'bóng đá' },
    { w:'park', r:'/pɑːk/', vi:'công viên' },
    { w:'team', r:'/tiːm/', vi:'đội' },
    { w:'player', r:'/ˈpleɪə/', vi:'cầu thủ' },
    { w:'lose', r:'/luːz/', vi:'thua' },
    { w:'angry', r:'/ˈæŋɡri/', vi:'giận' },
    { w:'after', r:'/ˈɑːftə/', vi:'sau khi' },
    { w:'the best part', r:'/ðə best pɑːt/', vi:'phần hay nhất' }
  ],
  qs:[
    { q:'Họ bắt đầu lúc mấy giờ?', o:['4 giờ','5 giờ','6 giờ','7 giờ'], c:1, e:'We start at five.' },
    { q:'Mỗi đội mấy người?', o:['Năm','Sáu','Bảy','Mười một'], c:1, e:'Two teams, six players each.' },
    { q:'Tuần trước tỉ số thế nào?', o:['2–4 thắng','4–2 thua','3–3 hoà','Không đá'], c:1, e:'my team lost four to two.' }
  ],
  after:'Viết 4 câu về môn thể thao bạn chơi, dùng: every Saturday · team · after.' },

{ lang:'en', lv:'a1', mins:3, cat:'Ẩm thực', title:'Learning to Cook', vi:'Học nấu ăn',
  intro:'A1. Chùm từ trọng tâm: nấu ăn, làm theo công thức, sai sót.',
  text:[
    'My mother is teaching me to cook. We start with fried rice.',
    'First we cut the onion. Then we heat the pan.',
    'The first time I put too much salt. My father ate it anyway.',
    'Now I can cook three dishes. That is enough for one week.'
  ],
  tr:[
    'Mẹ đang dạy tôi nấu ăn. Chúng tôi bắt đầu từ cơm rang.',
    'Đầu tiên thái hành. Sau đó làm nóng chảo.',
    'Lần đầu tôi cho quá nhiều muối. Bố tôi vẫn ăn.',
    'Bây giờ tôi nấu được ba món. Thế là đủ cho một tuần.'
  ],
  keys:[
    { w:'cook', r:'/kʊk/', vi:'nấu ăn' },
    { w:'fried rice', r:'/fraɪd raɪs/', vi:'cơm rang' },
    { w:'cut', r:'/kʌt/', vi:'thái, cắt' },
    { w:'heat', r:'/hiːt/', vi:'làm nóng' },
    { w:'pan', r:'/pæn/', vi:'chảo' },
    { w:'salt', r:'/sɔːlt/', vi:'muối' },
    { w:'anyway', r:'/ˈeniweɪ/', vi:'dù sao vẫn' },
    { w:'dish', r:'/dɪʃ/', vi:'món ăn' }
  ],
  qs:[
    { q:'Món đầu tiên học là gì?', o:['Phở','Cơm rang','Trứng ốp la','Canh'], c:1, e:'We start with fried rice.' },
    { q:'Lần đầu sai ở đâu?', o:['Cháy','Quá nhiều muối','Quá nhạt','Sống'], c:1, e:'I put too much salt.' },
    { q:'Bây giờ nấu được mấy món?', o:['Một','Hai','Ba','Năm'], c:2, e:'Now I can cook three dishes.' }
  ],
  after:'Viết 4 câu dạy nấu một món, dùng: First · Then · too much.' },

{ lang:'en', lv:'a1', mins:3, cat:'Đời sống', title:'The Old Bicycle', vi:'Chiếc xe đạp cũ',
  intro:'A1. Chùm từ trọng tâm: đồ vật cũ, sửa chữa, giá trị tình cảm.',
  text:[
    'My bicycle is fifteen years old. It was my father\'s bicycle first.',
    'The paint is not nice, and the bell does not work.',
    'Last month the chain broke. A man fixed it for fifty thousand dong.',
    'My friends say I need a new one. But this one knows all my roads.'
  ],
  tr:[
    'Xe đạp của tôi mười lăm tuổi rồi. Trước đó nó là xe của bố tôi.',
    'Nước sơn không đẹp, chuông thì hỏng.',
    'Tháng trước xích bị đứt. Một bác thợ sửa hết năm mươi nghìn đồng.',
    'Bạn bè bảo tôi nên mua xe mới. Nhưng chiếc này thuộc hết đường tôi đi.'
  ],
  keys:[
    { w:'bicycle', r:'/ˈbaɪsɪkl/', vi:'xe đạp' },
    { w:'paint', r:'/peɪnt/', vi:'nước sơn' },
    { w:'bell', r:'/bel/', vi:'chuông' },
    { w:'work', r:'/wɜːk/', vi:'hoạt động' },
    { w:'chain', r:'/tʃeɪn/', vi:'xích' },
    { w:'break', r:'/breɪk/', vi:'đứt, hỏng' },
    { w:'fix', r:'/fɪks/', vi:'sửa' },
    { w:'road', r:'/rəʊd/', vi:'con đường' }
  ],
  qs:[
    { q:'Xe bao nhiêu năm rồi?', o:['5','10','15','20'], c:2, e:'My bicycle is fifteen years old.' },
    { q:'Tháng trước hỏng gì?', o:['Phanh','Xích','Lốp','Yên'], c:1, e:'the chain broke.' },
    { q:'Người viết nghĩ gì?', o:['Cần mua xe mới','Chiếc này thuộc hết đường mình đi','Sẽ bán nó','Không dùng nữa'], c:1, e:'this one knows all my roads.' }
  ],
  after:'Tả một món đồ cũ bạn giữ lại bằng 4 câu, dùng: was … first · does not work · but.' },

{ lang:'en', lv:'a2', mins:4, cat:'Đời sống', title:'The Man Who Waters the Street', vi:'Người đàn ông tưới phố',
  intro:'A2. Chùm từ trọng tâm: thói quen của người lạ, quan sát, cộng đồng.',
  text:[
    'There is a man on my street who waters the trees every evening.',
    'Nobody asked him to do it. He simply started one summer when the heat killed two young trees.',
    'At first people thought it was strange. Then somebody bought him a longer hose.',
    'Now the street has the best shade in the neighbourhood, and everyone knows his name.'
  ],
  tr:[
    'Ở phố tôi có một người đàn ông chiều nào cũng tưới cây.',
    'Chẳng ai nhờ ông cả. Ông chỉ đơn giản bắt đầu làm vào một mùa hè, khi cái nóng làm chết hai cây non.',
    'Ban đầu người ta thấy lạ. Rồi có người mua tặng ông một cái vòi dài hơn.',
    'Giờ con phố có bóng mát đẹp nhất khu, và ai cũng biết tên ông.'
  ],
  keys:[
    { w:'water (v.)', r:'/ˈwɔːtə/', vi:'tưới' },
    { w:'simply', r:'/ˈsɪmpli/', vi:'chỉ đơn giản là' },
    { w:'heat', r:'/hiːt/', vi:'cái nóng' },
    { w:'strange', r:'/streɪndʒ/', vi:'lạ' },
    { w:'hose', r:'/həʊz/', vi:'vòi nước' },
    { w:'shade', r:'/ʃeɪd/', vi:'bóng mát' },
    { w:'neighbourhood', r:'/ˈneɪbəhʊd/', vi:'khu phố' },
    { w:'everyone', r:'/ˈevriwʌn/', vi:'mọi người' }
  ],
  qs:[
    { q:'Vì sao ông bắt đầu tưới cây?', o:['Được trả tiền','Vì nắng nóng làm chết hai cây non','Vì là nhân viên đô thị','Vì thích cây'], c:1, e:'when the heat killed two young trees.' },
    { q:'Hàng xóm phản ứng thế nào sau đó?', o:['Phàn nàn','Mua tặng ông vòi nước dài hơn','Bỏ mặc','Báo phường'], c:1, e:'somebody bought him a longer hose.' },
    { q:'Kết quả?', o:['Cây vẫn chết','Phố có bóng mát đẹp nhất khu','Ông chuyển đi','Không ai để ý'], c:1, e:'the street has the best shade in the neighbourhood.' }
  ],
  after:'Viết 5 câu về một người bạn hay gặp trong khu, dùng: who · at first · now.' },

{ lang:'en', lv:'a2', mins:4, cat:'Học tập', title:'Ten Minutes a Day', vi:'Mười phút mỗi ngày',
  intro:'A2. Chùm từ trọng tâm: học đều, tiến bộ chậm, kiên trì.',
  text:[
    'For six months I tried to study English for two hours every Sunday. It never worked.',
    'Then a teacher told me something simple: ten minutes a day beats two hours a week.',
    'I was not sure, but I tried it. I read one short text before breakfast.',
    'After three months I noticed the change. The texts were not shorter — I was faster.'
  ],
  tr:[
    'Suốt sáu tháng tôi cố học tiếng Anh hai tiếng mỗi chủ nhật. Chẳng bao giờ hiệu quả.',
    'Rồi một cô giáo nói với tôi điều rất đơn giản: mười phút mỗi ngày hơn hai tiếng mỗi tuần.',
    'Tôi không tin lắm, nhưng vẫn thử. Tôi đọc một bài ngắn trước bữa sáng.',
    'Ba tháng sau tôi nhận ra thay đổi. Bài đọc không ngắn đi — tôi nhanh lên.'
  ],
  keys:[
    { w:'try', r:'/traɪ/', vi:'cố gắng, thử' },
    { w:'work (v.)', r:'/wɜːk/', vi:'có hiệu quả' },
    { w:'simple', r:'/ˈsɪmpl/', vi:'đơn giản' },
    { w:'beat', r:'/biːt/', vi:'hơn, thắng' },
    { w:'be sure', r:'/biː ʃʊə/', vi:'chắc chắn' },
    { w:'short', r:'/ʃɔːt/', vi:'ngắn' },
    { w:'notice', r:'/ˈnəʊtɪs/', vi:'nhận ra' },
    { w:'change', r:'/tʃeɪndʒ/', vi:'sự thay đổi' }
  ],
  qs:[
    { q:'Cách học cũ là gì?', o:['10 phút mỗi ngày','2 tiếng mỗi chủ nhật','1 tiếng mỗi tối','Học nhóm'], c:1, e:'two hours every Sunday.' },
    { q:'Lời khuyên của cô giáo?', o:['Học nhiều hơn','10 phút mỗi ngày hơn 2 tiếng mỗi tuần','Học vào buổi tối','Nghe podcast'], c:1, e:'ten minutes a day beats two hours a week.' },
    { q:'Sau ba tháng thì sao?', o:['Bài dễ hơn','Người viết đọc nhanh hơn','Bỏ cuộc','Không đổi gì'], c:1, e:'The texts were not shorter — I was faster.' }
  ],
  after:'Viết 5 câu về thói quen học của bạn, dùng: tried to · beats · after three months.' },

{ lang:'en', lv:'a2', mins:4, cat:'Đời sống', title:'The Second-Hand Bookshop', vi:'Tiệm sách cũ',
  intro:'A2. Chùm từ trọng tâm: sách cũ, giá rẻ, những ghi chú của người lạ.',
  text:[
    'There is a second-hand bookshop near the university. The books cost almost nothing.',
    'The best part is not the price. It is the handwriting inside.',
    'Last week I bought a novel with notes in the margins. Someone had underlined every sentence about the sea.',
    'I do not know who that reader was. But for two weeks we read the same book together.'
  ],
  tr:[
    'Gần trường đại học có một tiệm sách cũ. Sách rẻ như cho.',
    'Điều hay nhất không phải giá. Mà là những nét chữ viết tay bên trong.',
    'Tuần trước tôi mua một cuốn tiểu thuyết có ghi chú ở lề. Ai đó đã gạch chân mọi câu nói về biển.',
    'Tôi không biết người đọc ấy là ai. Nhưng suốt hai tuần, chúng tôi cùng đọc chung một cuốn sách.'
  ],
  keys:[
    { w:'second-hand', r:'/ˌsekənd ˈhænd/', vi:'đồ cũ' },
    { w:'cost', r:'/kɒst/', vi:'có giá' },
    { w:'almost', r:'/ˈɔːlməʊst/', vi:'gần như' },
    { w:'handwriting', r:'/ˈhændraɪtɪŋ/', vi:'nét chữ viết tay' },
    { w:'novel', r:'/ˈnɒvl/', vi:'tiểu thuyết' },
    { w:'margin', r:'/ˈmɑːdʒɪn/', vi:'lề trang' },
    { w:'underline', r:'/ˌʌndəˈlaɪn/', vi:'gạch chân' },
    { w:'reader', r:'/ˈriːdə/', vi:'người đọc' }
  ],
  qs:[
    { q:'Điều hay nhất ở tiệm sách là gì?', o:['Giá rẻ','Nét chữ viết tay bên trong','Vị trí','Chủ tiệm'], c:1, e:'It is the handwriting inside.' },
    { q:'Người đọc trước đã gạch chân gì?', o:['Tên nhân vật','Mọi câu nói về biển','Từ khó','Câu cuối mỗi chương'], c:1, e:'underlined every sentence about the sea.' },
    { q:'Người viết cảm thấy thế nào?', o:['Khó chịu vì sách bị viết','Như cùng đọc với người lạ','Muốn trả sách','Không quan tâm'], c:1, e:'we read the same book together.' }
  ],
  after:'Viết 5 câu về một cuốn sách cũ, dùng: second-hand · almost · someone had…' },

{ lang:'en', lv:'a2', mins:4, cat:'Giao thông', title:'The Wrong Train', vi:'Lên nhầm tàu',
  intro:'A2. Chùm từ trọng tâm: sai lầm khi đi lại, xoay xở, kết quả bất ngờ.',
  text:[
    'I was in a hurry, so I did not check the platform number.',
    'Twenty minutes later I realised the train was going north, not south.',
    'I got off at a small station I had never heard of. The next train was in an hour.',
    'I bought a coffee and sat in the sun. It was the quietest hour of my whole week.'
  ],
  tr:[
    'Tôi đang vội nên không kiểm tra số sân ga.',
    'Hai mươi phút sau tôi mới nhận ra tàu đang chạy lên phía bắc chứ không phải phía nam.',
    'Tôi xuống ở một ga nhỏ chưa từng nghe tên. Chuyến tiếp theo phải một tiếng nữa.',
    'Tôi mua một cốc cà phê và ngồi dưới nắng. Đó là một tiếng yên tĩnh nhất cả tuần của tôi.'
  ],
  keys:[
    { w:'in a hurry', r:'/ɪn ə ˈhʌri/', vi:'vội' },
    { w:'check', r:'/tʃek/', vi:'kiểm tra' },
    { w:'platform', r:'/ˈplætfɔːm/', vi:'sân ga' },
    { w:'realise', r:'/ˈrɪəlaɪz/', vi:'nhận ra' },
    { w:'get off', r:'/ɡet ɒf/', vi:'xuống xe/tàu' },
    { w:'station', r:'/ˈsteɪʃn/', vi:'nhà ga' },
    { w:'hear of', r:'/hɪər ɒv/', vi:'nghe nói đến' },
    { w:'whole', r:'/həʊl/', vi:'cả, toàn bộ' }
  ],
  qs:[
    { q:'Vì sao lên nhầm tàu?', o:['Nghe nhầm thông báo','Vội nên không xem số sân ga','Tàu đổi giờ','Bị chỉ sai'], c:1, e:'I did not check the platform number.' },
    { q:'Phải đợi bao lâu?', o:['20 phút','30 phút','1 tiếng','2 tiếng'], c:2, e:'The next train was in an hour.' },
    { q:'Kết quả cuối cùng?', o:['Trễ hẹn quan trọng','Một tiếng yên tĩnh nhất cả tuần','Mất vé','Phải bắt taxi'], c:1, e:'It was the quietest hour of my whole week.' }
  ],
  after:'Kể một lần đi nhầm đường bằng 5 câu, dùng: in a hurry · realise · get off.' },

{ lang:'en', lv:'a2', mins:4, cat:'Xã hội', title:'The Free Bookshelf', vi:'Giá sách miễn phí',
  intro:'A2. Chùm từ trọng tâm: chia sẻ, lòng tin, cộng đồng nhỏ.',
  text:[
    'Someone put a wooden bookshelf on the corner of our street. A sign says: "Take one, leave one."',
    'At the beginning I thought all the books would disappear in a week.',
    'That was two years ago. The shelf is still full, and the books change every day.',
    'It turns out that people are more careful with things nobody guards.'
  ],
  tr:[
    'Ai đó đặt một giá sách gỗ ở góc phố chúng tôi. Tấm biển ghi: “Lấy một cuốn, để lại một cuốn.”',
    'Ban đầu tôi nghĩ một tuần là sách sẽ biến mất sạch.',
    'Chuyện đó là hai năm trước. Giá sách vẫn đầy, và sách thì đổi mỗi ngày.',
    'Hoá ra người ta lại cẩn thận hơn với những thứ chẳng ai canh gác.'
  ],
  keys:[
    { w:'wooden', r:'/ˈwʊdn/', vi:'bằng gỗ' },
    { w:'corner', r:'/ˈkɔːnə/', vi:'góc phố' },
    { w:'sign', r:'/saɪn/', vi:'biển báo' },
    { w:'disappear', r:'/ˌdɪsəˈpɪə/', vi:'biến mất' },
    { w:'still', r:'/stɪl/', vi:'vẫn còn' },
    { w:'turn out', r:'/tɜːn aʊt/', vi:'hoá ra' },
    { w:'careful', r:'/ˈkeəfl/', vi:'cẩn thận' },
    { w:'guard', r:'/ɡɑːd/', vi:'canh gác' }
  ],
  qs:[
    { q:'Tấm biển ghi gì?', o:['“Sách miễn phí”','“Lấy một cuốn, để lại một cuốn”','“Không lấy quá hai cuốn”','“Xin đừng lấy”'], c:1, e:'"Take one, leave one."' },
    { q:'Giá sách đã ở đó bao lâu?', o:['Một tháng','Một năm','Hai năm','Năm năm'], c:2, e:'That was two years ago.' },
    { q:'Kết luận của bài?', o:['Cần lắp camera','Người ta cẩn thận hơn với thứ không ai canh','Nên bỏ giá sách','Sách hay thì mất nhanh'], c:1, e:'people are more careful with things nobody guards.' }
  ],
  after:'Viết 5 câu về một sáng kiến nhỏ ở khu bạn, dùng: at the beginning · still · turn out.' },

{ lang:'en', lv:'a2', mins:4, cat:'Công việc', title:'Learning to Say No', vi:'Học cách nói không',
  intro:'A2. Chùm từ trọng tâm: khối lượng công việc, ranh giới, lịch sự.',
  text:[
    'For a long time I said yes to everything at work. I thought that was being helpful.',
    'By March I was doing three people\'s jobs and sleeping badly.',
    'A colleague showed me a simple sentence: "I can do that, but not this week."',
    'Nobody was angry. In fact, my manager thanked me for being clear.'
  ],
  tr:[
    'Đã lâu tôi cứ nhận hết mọi việc ở công ty. Tôi tưởng như thế là nhiệt tình.',
    'Đến tháng Ba tôi làm việc của ba người và ngủ rất kém.',
    'Một đồng nghiệp chỉ cho tôi một câu đơn giản: “Việc đó tôi làm được, nhưng không phải tuần này.”',
    'Chẳng ai giận cả. Thậm chí sếp còn cảm ơn vì tôi nói rõ ràng.'
  ],
  keys:[
    { w:'say yes to', r:'/seɪ jes tuː/', vi:'nhận lời' },
    { w:'helpful', r:'/ˈhelpfl/', vi:'nhiệt tình giúp đỡ' },
    { w:'badly', r:'/ˈbædli/', vi:'kém, tệ' },
    { w:'colleague', r:'/ˈkɒliːɡ/', vi:'đồng nghiệp' },
    { w:'sentence', r:'/ˈsentəns/', vi:'câu' },
    { w:'in fact', r:'/ɪn fækt/', vi:'thực ra, thậm chí' },
    { w:'thank', r:'/θæŋk/', vi:'cảm ơn' },
    { w:'clear', r:'/klɪə/', vi:'rõ ràng' }
  ],
  qs:[
    { q:'Đến tháng Ba thì sao?', o:['Được thăng chức','Làm việc của ba người, ngủ kém','Xin nghỉ','Đổi phòng ban'], c:1, e:'I was doing three people\'s jobs and sleeping badly.' },
    { q:'Câu đồng nghiệp chỉ là gì?', o:['“Tôi không làm được”','“Việc đó tôi làm được, nhưng không phải tuần này”','“Hỏi người khác đi”','“Tôi đang bận”'], c:1, e:'"I can do that, but not this week."' },
    { q:'Sếp phản ứng thế nào?', o:['Giận','Cảm ơn vì nói rõ ràng','Không nói gì','Giao thêm việc'], c:1, e:'my manager thanked me for being clear.' }
  ],
  after:'Viết 5 câu về cách bạn từ chối lịch sự, dùng: say yes to · in fact · be clear.' },

{ lang:'en', lv:'a2', mins:4, cat:'Đời sống', title:'The Repair Shop', vi:'Tiệm sửa đồ',
  intro:'A2. Chùm từ trọng tâm: sửa thay vì vứt, tay nghề, tiêu dùng.',
  text:[
    'My kettle stopped working, so I looked for a new one online.',
    'My neighbour laughed and said, "Take it to Mr Binh on the corner."',
    'Mr Binh opened it, cleaned something inside and closed it again. Forty thousand dong.',
    'The kettle has worked for two more years. I still think about how close I came to throwing it away.'
  ],
  tr:[
    'Cái ấm đun nước của tôi hỏng, nên tôi lên mạng tìm mua cái mới.',
    'Bác hàng xóm cười bảo: “Mang ra cho bác Bình ở góc phố ấy.”',
    'Bác Bình mở ra, lau chùi gì đó bên trong rồi đóng lại. Bốn mươi nghìn đồng.',
    'Cái ấm chạy thêm hai năm nữa. Tôi vẫn còn nghĩ mình đã suýt vứt nó đi.'
  ],
  keys:[
    { w:'kettle', r:'/ˈketl/', vi:'ấm đun nước' },
    { w:'look for', r:'/lʊk fɔː/', vi:'tìm' },
    { w:'laugh', r:'/lɑːf/', vi:'cười' },
    { w:'open', r:'/ˈəʊpən/', vi:'mở ra' },
    { w:'inside', r:'/ɪnˈsaɪd/', vi:'bên trong' },
    { w:'work (v.)', r:'/wɜːk/', vi:'chạy, hoạt động' },
    { w:'come close to', r:'/kʌm kləʊs tuː/', vi:'suýt nữa' },
    { w:'throw away', r:'/θrəʊ əˈweɪ/', vi:'vứt đi' }
  ],
  qs:[
    { q:'Phản ứng đầu tiên của người viết là gì?', o:['Tìm mua cái mới','Mang đi sửa','Hỏi hàng xóm','Tự sửa'], c:0, e:'I looked for a new one online.' },
    { q:'Sửa hết bao nhiêu?', o:['20 nghìn','40 nghìn','100 nghìn','200 nghìn'], c:1, e:'Forty thousand dong.' },
    { q:'Cái ấm dùng thêm bao lâu?', o:['Sáu tháng','Một năm','Hai năm','Năm năm'], c:2, e:'has worked for two more years.' }
  ],
  after:'Viết 5 câu về một lần sửa đồ, dùng: look for · take it to · throw away.' },

{ lang:'en', lv:'a2', mins:4, cat:'Sức khoẻ', title:'Eight Hours', vi:'Tám tiếng',
  intro:'A2. Chùm từ trọng tâm: giấc ngủ, thói quen buổi tối, năng lượng.',
  text:[
    'For years I went to bed at one in the morning. I thought I worked better at night.',
    'Then I tried a small experiment: lights off at eleven, for one month.',
    'The first week was hard. My body did not agree with the plan.',
    'By the third week I stopped needing coffee after lunch. The work did not take longer — it took less.'
  ],
  tr:[
    'Nhiều năm liền tôi đi ngủ lúc một giờ sáng. Tôi cứ tưởng mình làm việc tốt hơn về đêm.',
    'Rồi tôi thử một thí nghiệm nhỏ: tắt đèn lúc mười một giờ, trong một tháng.',
    'Tuần đầu rất khó. Cơ thể tôi không chịu theo kế hoạch.',
    'Đến tuần thứ ba tôi thôi cần cà phê sau bữa trưa. Công việc không lâu hơn — mà còn ít thời gian hơn.'
  ],
  keys:[
    { w:'go to bed', r:'/ɡəʊ tə bed/', vi:'đi ngủ' },
    { w:'experiment', r:'/ɪkˈsperɪmənt/', vi:'thí nghiệm' },
    { w:'lights off', r:'/laɪts ɒf/', vi:'tắt đèn' },
    { w:'hard', r:'/hɑːd/', vi:'khó' },
    { w:'agree with', r:'/əˈɡriː wɪð/', vi:'đồng tình với' },
    { w:'plan', r:'/plæn/', vi:'kế hoạch' },
    { w:'stop -ing', r:'/stɒp/', vi:'thôi không làm gì nữa' },
    { w:'take (time)', r:'/teɪk/', vi:'mất (thời gian)' }
  ],
  qs:[
    { q:'Trước đây người viết ngủ lúc mấy giờ?', o:['11 giờ','12 giờ','1 giờ sáng','2 giờ sáng'], c:2, e:'I went to bed at one in the morning.' },
    { q:'Thí nghiệm kéo dài bao lâu?', o:['Một tuần','Hai tuần','Một tháng','Ba tháng'], c:2, e:'for one month.' },
    { q:'Đến tuần thứ ba?', o:['Bỏ cuộc','Thôi cần cà phê sau bữa trưa','Ngủ kém hơn','Không thay đổi'], c:1, e:'I stopped needing coffee after lunch.' }
  ],
  after:'Viết 5 câu về một thay đổi nhỏ trong nếp sống, dùng: I thought · tried · by the third week.' },

{ lang:'en', lv:'a2', mins:4, cat:'Du lịch', title:'Three Days, One Bag', vi:'Ba ngày, một túi',
  intro:'A2. Chùm từ trọng tâm: đóng gói, đi nhẹ, bài học nhỏ.',
  text:[
    'Last year I went to Da Nang for three days with one small bag.',
    'I packed two shirts, one pair of shoes and a book. Nothing else.',
    'My friend brought a large suitcase. She wore the same two shirts as me.',
    'Since then I always ask one question before I pack: will I really use this?'
  ],
  tr:[
    'Năm ngoái tôi đi Đà Nẵng ba ngày với đúng một cái túi nhỏ.',
    'Tôi xếp hai cái áo, một đôi giày và một cuốn sách. Không gì khác.',
    'Bạn tôi thì mang một cái va li to. Cô ấy cũng chỉ mặc đúng hai cái áo như tôi.',
    'Từ đó trước khi xếp đồ tôi luôn hỏi một câu: mình có thật sự dùng cái này không?'
  ],
  keys:[
    { w:'pack', r:'/pæk/', vi:'xếp đồ' },
    { w:'shirt', r:'/ʃɜːt/', vi:'áo sơ mi' },
    { w:'a pair of', r:'/ə peər ɒv/', vi:'một đôi' },
    { w:'nothing else', r:'/ˈnʌθɪŋ els/', vi:'không gì khác' },
    { w:'suitcase', r:'/ˈsuːtkeɪs/', vi:'va li' },
    { w:'wear', r:'/weə/', vi:'mặc' },
    { w:'since then', r:'/sɪns ðen/', vi:'từ đó' },
    { w:'really', r:'/ˈrɪəli/', vi:'thật sự' }
  ],
  qs:[
    { q:'Người viết mang gì?', o:['Hai áo, một đôi giày, một cuốn sách','Va li lớn','Ba lô đầy','Không mang gì'], c:0, e:'two shirts, one pair of shoes and a book.' },
    { q:'Bạn của người viết thì sao?', o:['Cũng mang túi nhỏ','Mang va li to nhưng chỉ mặc hai áo','Không đi','Mua đồ ở đó'], c:1, e:'She wore the same two shirts as me.' },
    { q:'Câu hỏi người viết luôn đặt ra?', o:['Có đủ tiền không?','Mình có thật sự dùng cái này không?','Trời có mưa không?','Có ai mang giúp không?'], c:1, e:'will I really use this?' }
  ],
  after:'Viết 5 câu về cách bạn chuẩn bị hành lý, dùng: pack · nothing else · since then.' },

{ lang:'en', lv:'a2', mins:4, cat:'Xã hội', title:'The Photo I Did Not Take', vi:'Bức ảnh tôi đã không chụp',
  intro:'A2. Chùm từ trọng tâm: khoảnh khắc, điện thoại, sự có mặt.',
  text:[
    'Last October I watched the sun rise over the rice fields near Sa Pa.',
    'I took out my phone, then put it back in my pocket.',
    'For ten minutes I just stood there. Nobody spoke.',
    'I have no photo of that morning. It is the one I remember best.'
  ],
  tr:[
    'Tháng Mười năm ngoái tôi ngắm mặt trời mọc trên những thửa ruộng gần Sa Pa.',
    'Tôi rút điện thoại ra, rồi lại cất vào túi.',
    'Suốt mười phút tôi chỉ đứng đó. Chẳng ai nói gì.',
    'Tôi không có tấm ảnh nào của buổi sáng ấy. Đó lại là buổi sáng tôi nhớ rõ nhất.'
  ],
  keys:[
    { w:'sun rise', r:'/sʌn raɪz/', vi:'mặt trời mọc' },
    { w:'rice field', r:'/raɪs fiːld/', vi:'ruộng lúa' },
    { w:'take out', r:'/teɪk aʊt/', vi:'lấy ra' },
    { w:'put back', r:'/pʊt bæk/', vi:'cất lại' },
    { w:'pocket', r:'/ˈpɒkɪt/', vi:'túi' },
    { w:'just', r:'/dʒʌst/', vi:'chỉ' },
    { w:'speak', r:'/spiːk/', vi:'nói' },
    { w:'remember', r:'/rɪˈmembə/', vi:'nhớ' }
  ],
  qs:[
    { q:'Chuyện xảy ra ở đâu?', o:['Gần Sa Pa','Ở Hà Nội','Ở biển','Trong rừng'], c:0, e:'over the rice fields near Sa Pa.' },
    { q:'Người viết làm gì với điện thoại?', o:['Chụp nhiều ảnh','Rút ra rồi lại cất vào','Quay video','Gọi điện'], c:1, e:'then put it back in my pocket.' },
    { q:'Ý cuối của bài?', o:['Nên chụp ảnh nhiều hơn','Buổi sáng không ảnh lại là buổi nhớ nhất','Điện thoại hỏng','Ảnh bị xoá'], c:1, e:'It is the one I remember best.' }
  ],
  after:'Kể một khoảnh khắc bạn không chụp ảnh, bằng 5 câu, dùng: took out · just · remember.' },

{ lang:'en', lv:'a2', mins:4, cat:'Ngôn ngữ', title:'Speaking First', vi:'Nói trước đã',
  intro:'A2. Chùm từ trọng tâm: nỗi sợ nói, sai sót, tiến bộ.',
  text:[
    'For a year I could read English well but I could not speak.',
    'I was afraid of mistakes. I wanted every sentence to be perfect before it left my mouth.',
    'Then I joined a small club where nobody was a teacher. Everybody made mistakes.',
    'I still make mistakes today. The difference is that now I finish my sentences.'
  ],
  tr:[
    'Suốt một năm tôi đọc tiếng Anh tốt nhưng không nói được.',
    'Tôi sợ sai. Tôi muốn mỗi câu phải hoàn hảo trước khi rời khỏi miệng.',
    'Rồi tôi tham gia một câu lạc bộ nhỏ, ở đó chẳng ai là giáo viên. Ai cũng nói sai.',
    'Đến giờ tôi vẫn sai. Khác ở chỗ bây giờ tôi nói hết câu.'
  ],
  keys:[
    { w:'be afraid of', r:'/biː əˈfreɪd ɒv/', vi:'sợ' },
    { w:'mistake', r:'/mɪˈsteɪk/', vi:'lỗi sai' },
    { w:'perfect', r:'/ˈpɜːfɪkt/', vi:'hoàn hảo' },
    { w:'leave', r:'/liːv/', vi:'rời khỏi' },
    { w:'join', r:'/dʒɔɪn/', vi:'tham gia' },
    { w:'club', r:'/klʌb/', vi:'câu lạc bộ' },
    { w:'difference', r:'/ˈdɪfrəns/', vi:'sự khác biệt' },
    { w:'finish', r:'/ˈfɪnɪʃ/', vi:'hoàn thành' }
  ],
  qs:[
    { q:'Vấn đề của người viết là gì?', o:['Không đọc được','Đọc tốt nhưng không nói được','Không nghe được','Không viết được'], c:1, e:'I could read English well but I could not speak.' },
    { q:'Câu lạc bộ có gì đặc biệt?', o:['Có giáo viên giỏi','Chẳng ai là giáo viên, ai cũng sai','Miễn phí','Chỉ nói tiếng Anh'], c:1, e:'nobody was a teacher. Everybody made mistakes.' },
    { q:'Khác biệt bây giờ là gì?', o:['Không còn sai','Nói hết câu','Nói nhanh hơn','Ít nói hơn'], c:1, e:'now I finish my sentences.' }
  ],
  after:'Viết 5 câu về nỗi sợ nói ngoại ngữ, dùng: be afraid of · wanted … to be · the difference is.' },

{ lang:'en', lv:'a2', mins:4, cat:'Gia đình', title:'The Sunday Phone Call', vi:'Cuộc gọi chủ nhật',
  intro:'A2. Chùm từ trọng tâm: gia đình xa, thói quen gọi điện, yêu thương kín đáo.',
  text:[
    'Every Sunday at eight I call my parents. The call lasts about twenty minutes.',
    'We say the same things. The weather, the price of food, my sister\'s new job.',
    'My father never asks how I feel. He asks if I am eating enough.',
    'For a long time I thought that was a strange question. Now I know it is the same question.'
  ],
  tr:[
    'Chủ nhật nào tám giờ tôi cũng gọi cho bố mẹ. Cuộc gọi kéo dài chừng hai mươi phút.',
    'Chúng tôi nói đúng những chuyện ấy. Thời tiết, giá thực phẩm, việc làm mới của chị tôi.',
    'Bố tôi không bao giờ hỏi tôi thấy thế nào. Bố hỏi tôi ăn có đủ không.',
    'Đã lâu tôi tưởng đó là một câu hỏi lạ. Giờ tôi biết đó cũng chính là câu hỏi ấy.'
  ],
  keys:[
    { w:'call', r:'/kɔːl/', vi:'gọi điện' },
    { w:'last (v.)', r:'/lɑːst/', vi:'kéo dài' },
    { w:'about', r:'/əˈbaʊt/', vi:'khoảng' },
    { w:'price', r:'/praɪs/', vi:'giá' },
    { w:'job', r:'/dʒɒb/', vi:'công việc' },
    { w:'enough', r:'/ɪˈnʌf/', vi:'đủ' },
    { w:'strange', r:'/streɪndʒ/', vi:'lạ' },
    { w:'the same', r:'/ðə seɪm/', vi:'giống nhau' }
  ],
  qs:[
    { q:'Cuộc gọi kéo dài bao lâu?', o:['10 phút','20 phút','30 phút','1 tiếng'], c:1, e:'about twenty minutes.' },
    { q:'Bố hỏi gì?', o:['Công việc thế nào','Có ăn đủ không','Khi nào về','Có tiền không'], c:1, e:'He asks if I am eating enough.' },
    { q:'Người viết hiểu ra điều gì?', o:['Bố không quan tâm','Đó cũng chính là câu hỏi “con thấy thế nào”','Nên gọi ít hơn','Nên đổi chủ đề'], c:1, e:'Now I know it is the same question.' }
  ],
  after:'Viết 5 câu về một cuộc gọi quen thuộc, dùng: every Sunday · never asks · now I know.' },

{ lang:'en', lv:'a2', mins:4, cat:'Môi trường', title:'The Plastic Bag Habit', vi:'Thói quen túi ni lông',
  intro:'A2. Chùm từ trọng tâm: rác nhựa, thay đổi thói quen, thực tế.',
  text:[
    'I used to come home with six plastic bags after one trip to the market.',
    'Last year I bought two cloth bags and left them next to my shoes.',
    'The hard part was not buying them. It was remembering to take them.',
    'Now I forget about once a month. Six bags a week became six bags a year.'
  ],
  tr:[
    'Trước kia mỗi lần đi chợ tôi mang về sáu cái túi ni lông.',
    'Năm ngoái tôi mua hai cái túi vải và để ngay cạnh chỗ để giày.',
    'Phần khó không phải là mua túi. Mà là nhớ mang theo.',
    'Giờ tôi quên chừng mỗi tháng một lần. Sáu túi một tuần thành sáu túi một năm.'
  ],
  keys:[
    { w:'used to', r:'/juːst tuː/', vi:'trước kia thường' },
    { w:'plastic bag', r:'/ˈplæstɪk bæɡ/', vi:'túi ni lông' },
    { w:'trip', r:'/trɪp/', vi:'chuyến đi' },
    { w:'cloth', r:'/klɒθ/', vi:'vải' },
    { w:'leave', r:'/liːv/', vi:'để lại' },
    { w:'the hard part', r:'/ðə hɑːd pɑːt/', vi:'phần khó' },
    { w:'remember to', r:'/rɪˈmembə tuː/', vi:'nhớ làm gì' },
    { w:'become', r:'/bɪˈkʌm/', vi:'trở thành' }
  ],
  qs:[
    { q:'Trước kia mỗi lần đi chợ mang về mấy túi?', o:['Hai','Bốn','Sáu','Mười'], c:2, e:'six plastic bags after one trip.' },
    { q:'Phần khó là gì?', o:['Mua túi vải','Nhớ mang theo','Giặt túi','Thuyết phục người bán'], c:1, e:'It was remembering to take them.' },
    { q:'Kết quả?', o:['Không đổi gì','Sáu túi/tuần thành sáu túi/năm','Vẫn quên mỗi tuần','Bỏ túi vải'], c:1, e:'Six bags a week became six bags a year.' }
  ],
  after:'Viết 5 câu về một thói quen bạn muốn đổi, dùng: used to · the hard part was · now.' },

{ lang:'en', lv:'a2', mins:4, cat:'Học tập', title:'Teaching My Sister', vi:'Dạy em gái tôi',
  intro:'A2. Chùm từ trọng tâm: dạy lại người khác, hiểu sâu hơn, kiên nhẫn.',
  text:[
    'My sister is twelve and she hates English homework.',
    'Last month I started helping her for fifteen minutes after dinner.',
    'She asks questions I cannot answer. Why do we say "on Monday" but "in May"?',
    'So I look it up, and then I remember it forever. She is teaching me too.'
  ],
  tr:[
    'Em gái tôi mười hai tuổi và ghét bài tập tiếng Anh.',
    'Tháng trước tôi bắt đầu kèm em mười lăm phút sau bữa tối.',
    'Em hỏi những câu tôi không trả lời được. Vì sao lại nói “on Monday” mà lại “in May”?',
    'Thế là tôi phải tra, rồi thì nhớ mãi. Em cũng đang dạy lại tôi.'
  ],
  keys:[
    { w:'hate', r:'/heɪt/', vi:'ghét' },
    { w:'homework', r:'/ˈhəʊmwɜːk/', vi:'bài tập về nhà' },
    { w:'help', r:'/help/', vi:'giúp' },
    { w:'question', r:'/ˈkwestʃən/', vi:'câu hỏi' },
    { w:'answer', r:'/ˈɑːnsə/', vi:'trả lời' },
    { w:'look up', r:'/lʊk ʌp/', vi:'tra cứu' },
    { w:'forever', r:'/fərˈevə/', vi:'mãi mãi' },
    { w:'too', r:'/tuː/', vi:'cũng' }
  ],
  qs:[
    { q:'Em gái bao nhiêu tuổi?', o:['10','12','14','16'], c:1, e:'My sister is twelve.' },
    { q:'Kèm em bao lâu mỗi ngày?', o:['5 phút','15 phút','30 phút','1 tiếng'], c:1, e:'for fifteen minutes after dinner.' },
    { q:'Kết quả với người viết?', o:['Mất thời gian','Phải tra cứu nên nhớ mãi','Chán','Không có gì'], c:1, e:'I look it up, and then I remember it forever.' }
  ],
  after:'Viết 5 câu về một lần bạn dạy người khác, dùng: started -ing · cannot answer · look up.' },

{ lang:'en', lv:'b1', mins:5, cat:'Truyền thông', title:'Why Headlines Win', vi:'Vì sao cái tít thắng',
  intro:'B1. Chùm từ trọng tâm: tiêu đề, cảm xúc, đọc có chọn lọc.',
  text:[
    'Most people share an article after reading only the headline. Studies have shown this again and again.',
    'That is not because readers are lazy. A headline is written to produce a feeling in under two seconds, and feelings travel faster than facts.',
    'The problem is that the body of an article often qualifies what the headline states. "May cause" becomes "causes". "In one small study" disappears entirely.',
    'A simple habit helps: before sharing anything, read the third paragraph. That is usually where the qualification hides.'
  ],
  tr:[
    'Phần lớn người ta chia sẻ một bài báo sau khi chỉ đọc mỗi cái tít. Các nghiên cứu đã chỉ ra điều này hết lần này đến lần khác.',
    'Không phải vì người đọc lười. Một cái tít được viết để tạo ra cảm xúc trong chưa đầy hai giây, mà cảm xúc thì đi nhanh hơn sự thật.',
    'Vấn đề là phần thân bài thường làm nhẹ đi điều cái tít khẳng định. “Có thể gây ra” biến thành “gây ra”. “Trong một nghiên cứu nhỏ” thì biến mất hẳn.',
    'Một thói quen đơn giản có ích: trước khi chia sẻ bất cứ gì, hãy đọc đoạn thứ ba. Đó thường là chỗ những giới hạn ấy ẩn mình.'
  ],
  keys:[
    { w:'headline', r:'/ˈhedlaɪn/', vi:'tiêu đề, cái tít' },
    { w:'share', r:'/ʃeə/', vi:'chia sẻ' },
    { w:'lazy', r:'/ˈleɪzi/', vi:'lười' },
    { w:'produce', r:'/prəˈdjuːs/', vi:'tạo ra' },
    { w:'travel', r:'/ˈtrævl/', vi:'lan đi' },
    { w:'qualify', r:'/ˈkwɒlɪfaɪ/', vi:'giới hạn lại, nói rõ mức độ' },
    { w:'state (v.)', r:'/steɪt/', vi:'khẳng định' },
    { w:'entirely', r:'/ɪnˈtaɪəli/', vi:'hoàn toàn' }
  ],
  qs:[
    { q:'Vì sao người ta chia sẻ chỉ sau khi đọc tít?', o:['Vì lười','Vì tít tạo cảm xúc rất nhanh','Vì bài quá dài','Vì thói quen'], c:1, e:'A headline is written to produce a feeling in under two seconds.' },
    { q:'Điều gì hay biến mất?', o:['Tên tác giả','Các giới hạn như “trong một nghiên cứu nhỏ”','Ngày tháng','Nguồn ảnh'], c:1, e:'"In one small study" disappears entirely.' },
    { q:'Thói quen được đề xuất?', o:['Đọc hết bài','Đọc đoạn thứ ba trước khi chia sẻ','Chỉ đọc nguồn lớn','Không chia sẻ gì'], c:1, e:'before sharing anything, read the third paragraph.' }
  ],
  after:'Viết 6 câu về cách bạn kiểm tra tin, dùng: studies have shown · the problem is that · before -ing.' },

{ lang:'en', lv:'b1', mins:5, cat:'Xã hội', title:'The Fifteen-Minute City', vi:'Thành phố mười lăm phút',
  intro:'B1. Chùm từ trọng tâm: quy hoạch đô thị, khoảng cách, đời sống hằng ngày.',
  text:[
    'Some planners argue that a good city gives you everything you need within a fifteen-minute walk: a school, a clinic, a market, a park.',
    'It sounds obvious, but most modern cities were built around the opposite idea. Distance was not a problem, because everyone would drive.',
    'The result is that time, not money, has become the real cost of living somewhere.',
    'Vietnamese neighbourhoods often already work this way. The challenge is keeping them that way as the city grows.'
  ],
  tr:[
    'Một số nhà quy hoạch cho rằng một thành phố tốt là nơi mọi thứ bạn cần đều nằm trong mười lăm phút đi bộ: trường học, phòng khám, chợ, công viên.',
    'Nghe thì hiển nhiên, nhưng phần lớn đô thị hiện đại lại được xây theo ý tưởng ngược lại. Khoảng cách không phải vấn đề, vì ai cũng sẽ lái xe.',
    'Hệ quả là thời gian, chứ không phải tiền bạc, mới trở thành cái giá thật của việc sống ở một nơi.',
    'Các khu phố Việt Nam thường vốn đã vận hành như thế. Cái khó là giữ được điều đó khi thành phố phình ra.'
  ],
  keys:[
    { w:'planner', r:'/ˈplænə/', vi:'nhà quy hoạch' },
    { w:'argue', r:'/ˈɑːɡjuː/', vi:'lập luận' },
    { w:'within', r:'/wɪˈðɪn/', vi:'trong phạm vi' },
    { w:'obvious', r:'/ˈɒbviəs/', vi:'hiển nhiên' },
    { w:'the opposite', r:'/ði ˈɒpəzɪt/', vi:'điều ngược lại' },
    { w:'distance', r:'/ˈdɪstəns/', vi:'khoảng cách' },
    { w:'cost of living', r:'/kɒst ɒv ˈlɪvɪŋ/', vi:'chi phí sinh sống' },
    { w:'challenge', r:'/ˈtʃælɪndʒ/', vi:'thách thức' }
  ],
  qs:[
    { q:'Thành phố 15 phút nghĩa là gì?', o:['Đi làm 15 phút','Mọi thứ cần thiết trong 15 phút đi bộ','Xe buýt 15 phút một chuyến','Đèn đỏ 15 giây'], c:1, e:'everything you need within a fifteen-minute walk.' },
    { q:'Đô thị hiện đại được xây theo ý tưởng nào?', o:['Đi bộ là chính','Khoảng cách không quan trọng vì ai cũng lái xe','Nhà cao tầng','Không có quy hoạch'], c:1, e:'Distance was not a problem, because everyone would drive.' },
    { q:'Cái giá thật của nơi sống là gì?', o:['Tiền bạc','Thời gian','Không khí','Tiếng ồn'], c:1, e:'time, not money, has become the real cost.' }
  ],
  after:'Viết 6 câu về khu bạn ở theo góc nhìn này, dùng: argue that · the result is that · the challenge is.' },

{ lang:'en', lv:'b1', mins:5, cat:'Khoa học', title:'What the Ear Keeps', vi:'Điều đôi tai giữ lại',
  intro:'B1. Chùm từ trọng tâm: thính giác, ký ức, sự chú ý.',
  text:[
    'Hearing is the sense we cannot switch off. We can close our eyes, but the ears stay open even in sleep.',
    'That is why sound is tied so closely to memory. A song from a certain year can return a whole season to you in three seconds.',
    'Researchers describe this as involuntary memory: you do not choose it, it arrives.',
    'It also explains why cities feel different with headphones on. You are still there, but part of you is somewhere else.'
  ],
  tr:[
    'Thính giác là giác quan ta không tắt được. Ta nhắm mắt lại được, nhưng đôi tai vẫn mở ngay cả trong giấc ngủ.',
    'Vì thế âm thanh gắn rất chặt với ký ức. Một bài hát của một năm nào đó có thể trả lại cho bạn cả một mùa chỉ trong ba giây.',
    'Các nhà nghiên cứu gọi đó là ký ức không chủ ý: bạn không chọn nó, nó tự đến.',
    'Điều đó cũng lý giải vì sao thành phố khác hẳn khi bạn đeo tai nghe. Bạn vẫn ở đó, nhưng một phần bạn đang ở nơi khác.'
  ],
  keys:[
    { w:'sense', r:'/sens/', vi:'giác quan' },
    { w:'switch off', r:'/swɪtʃ ɒf/', vi:'tắt đi' },
    { w:'be tied to', r:'/biː taɪd tuː/', vi:'gắn với' },
    { w:'certain', r:'/ˈsɜːtn/', vi:'nhất định, nào đó' },
    { w:'return (v.)', r:'/rɪˈtɜːn/', vi:'trả lại' },
    { w:'researcher', r:'/rɪˈsɜːtʃə/', vi:'nhà nghiên cứu' },
    { w:'involuntary', r:'/ɪnˈvɒləntri/', vi:'không chủ ý' },
    { w:'explain', r:'/ɪkˈspleɪn/', vi:'giải thích' }
  ],
  qs:[
    { q:'Vì sao thính giác đặc biệt?', o:['Nhạy nhất','Không tắt được, kể cả khi ngủ','Phát triển sớm nhất','Chính xác nhất'], c:1, e:'the ears stay open even in sleep.' },
    { q:'“Involuntary memory” nghĩa là gì?', o:['Ký ức bị quên','Ký ức không chủ ý, tự đến','Ký ức tuổi thơ','Ký ức tập luyện được'], c:1, e:'you do not choose it, it arrives.' },
    { q:'Đeo tai nghe khiến điều gì xảy ra?', o:['Nghe rõ hơn','Một phần bạn ở nơi khác','Đi nhanh hơn','Ít mệt hơn'], c:1, e:'part of you is somewhere else.' }
  ],
  after:'Viết 6 câu về một âm thanh gợi ký ức, dùng: that is why · describe … as · it explains why.' },

{ lang:'en', lv:'b1', mins:5, cat:'Môi trường', title:'The Cost of Cheap Clothes', vi:'Cái giá của quần áo rẻ',
  intro:'B1. Chùm từ trọng tâm: thời trang nhanh, chuỗi cung ứng, lựa chọn tiêu dùng.',
  text:[
    'A T-shirt that costs less than a bowl of pho has to save money somewhere.',
    'Usually it is saved twice: once in the cotton field, where water is used without limit, and once in the factory, where hours are long.',
    'Buying fewer, better things is easy advice to give and hard advice to follow, especially on a student budget.',
    'But there is a middle path: wear what you own longer. The greenest shirt is almost always the one already in your wardrobe.'
  ],
  tr:[
    'Một chiếc áo phông rẻ hơn một bát phở thì phải tiết kiệm ở đâu đó.',
    'Thường là tiết kiệm hai lần: một lần ở ruộng bông, nơi nước được dùng vô hạn, và một lần ở nhà máy, nơi giờ làm kéo dài.',
    'Mua ít hơn nhưng tốt hơn là lời khuyên dễ nói mà khó theo, nhất là với túi tiền sinh viên.',
    'Nhưng có một lối đi ở giữa: mặc lâu hơn những thứ bạn đã có. Chiếc áo “xanh” nhất gần như luôn là chiếc đang nằm trong tủ bạn.'
  ],
  keys:[
    { w:'save', r:'/seɪv/', vi:'tiết kiệm' },
    { w:'cotton', r:'/ˈkɒtn/', vi:'bông' },
    { w:'without limit', r:'/wɪˈðaʊt ˈlɪmɪt/', vi:'vô hạn' },
    { w:'factory', r:'/ˈfæktri/', vi:'nhà máy' },
    { w:'advice', r:'/ədˈvaɪs/', vi:'lời khuyên' },
    { w:'budget', r:'/ˈbʌdʒɪt/', vi:'ngân sách' },
    { w:'middle path', r:'/ˈmɪdl pɑːθ/', vi:'lối đi ở giữa' },
    { w:'wardrobe', r:'/ˈwɔːdrəʊb/', vi:'tủ quần áo' }
  ],
  qs:[
    { q:'Chi phí được tiết kiệm ở đâu?', o:['Vận chuyển và bán lẻ','Ruộng bông và nhà máy','Thiết kế','Quảng cáo'], c:1, e:'once in the cotton field… once in the factory.' },
    { q:'Vì sao lời khuyên “mua ít, mua tốt” khó theo?', o:['Không có hàng tốt','Vì túi tiền eo hẹp','Vì không ai tin','Vì tốn thời gian'], c:1, e:'especially on a student budget.' },
    { q:'Lối đi ở giữa là gì?', o:['Mua đồ cũ','Mặc lâu hơn những thứ đã có','Tự may','Mua hàng nội địa'], c:1, e:'wear what you own longer.' }
  ],
  after:'Viết 6 câu về thói quen mua quần áo của bạn, dùng: has to · easy … and hard … · there is a middle path.' },

{ lang:'en', lv:'b1', mins:5, cat:'Học tập', title:'Learning by Teaching', vi:'Học bằng cách dạy',
  intro:'B1. Chùm từ trọng tâm: phương pháp học, giải thích, lỗ hổng kiến thức.',
  text:[
    'There is a well-known trick among students: if you want to know whether you understand something, try to explain it to somebody else.',
    'The moment you start speaking, the gaps appear. You hear yourself saying "and then, somehow, it works" — and you know exactly where to study next.',
    'This is sometimes called the protégé effect. People who prepare to teach material learn it better than people who prepare to be tested on it.',
    'You do not even need a real student. Explaining to an empty chair is uncomfortable, but it works.'
  ],
  tr:[
    'Có một mẹo nổi tiếng trong giới sinh viên: muốn biết mình có hiểu hay không, hãy thử giải thích cho người khác.',
    'Ngay khi bạn bắt đầu nói, các lỗ hổng lộ ra. Bạn nghe chính mình nói “rồi thì, kiểu như, nó chạy được” — và bạn biết chính xác phải học tiếp chỗ nào.',
    'Người ta đôi khi gọi đó là hiệu ứng protégé. Người chuẩn bị để dạy lại học tốt hơn người chuẩn bị để đi thi.',
    'Bạn thậm chí không cần học trò thật. Giải thích cho một cái ghế trống thì ngượng đấy, nhưng có tác dụng.'
  ],
  keys:[
    { w:'trick', r:'/trɪk/', vi:'mẹo' },
    { w:'explain', r:'/ɪkˈspleɪn/', vi:'giải thích' },
    { w:'gap', r:'/ɡæp/', vi:'lỗ hổng' },
    { w:'appear', r:'/əˈpɪə/', vi:'lộ ra, xuất hiện' },
    { w:'exactly', r:'/ɪɡˈzæktli/', vi:'chính xác' },
    { w:'prepare', r:'/prɪˈpeə/', vi:'chuẩn bị' },
    { w:'material', r:'/məˈtɪəriəl/', vi:'tài liệu, phần kiến thức' },
    { w:'uncomfortable', r:'/ʌnˈkʌmftəbl/', vi:'khó chịu, ngượng' }
  ],
  qs:[
    { q:'Mẹo được nhắc đến là gì?', o:['Viết lại bài','Giải thích cho người khác','Học nhóm','Làm đề thi'], c:1, e:'try to explain it to somebody else.' },
    { q:'“Protégé effect” nói gì?', o:['Học trò giỏi hơn thầy','Người chuẩn bị để dạy học tốt hơn người chuẩn bị đi thi','Dạy làm mất thời gian','Chỉ đúng với trẻ em'], c:1, e:'People who prepare to teach material learn it better.' },
    { q:'Có cần học trò thật không?', o:['Có, bắt buộc','Không, giải thích cho ghế trống cũng được','Cần ít nhất hai người','Cần giáo viên'], c:1, e:'Explaining to an empty chair… works.' }
  ],
  after:'Viết 6 câu thử giải thích một khái niệm bạn vừa học, dùng: if you want to · the moment you · it turns out.' },

{ lang:'en', lv:'b1', mins:5, cat:'Xã hội', title:'The Night Market', vi:'Chợ đêm',
  intro:'B1. Chùm từ trọng tâm: kinh tế phi chính thức, lao động, đô thị về đêm.',
  text:[
    'After nine o\'clock the street outside my window changes owner. The shops close, and the carts arrive.',
    'Each cart is a small business with no office, no website and almost no paperwork. Rent is paid in metres of pavement.',
    'Economists call this the informal sector, and in many Asian cities it feeds more people than the formal one.',
    'It is fragile work. One rainy week can erase a month of profit. But by ten the street is louder and warmer than it is at noon.'
  ],
  tr:[
    'Sau chín giờ tối, con phố ngoài cửa sổ nhà tôi đổi chủ. Cửa hàng đóng lại, những chiếc xe đẩy kéo đến.',
    'Mỗi chiếc xe là một doanh nghiệp nhỏ không văn phòng, không website và gần như không giấy tờ. Tiền thuê chỗ được tính bằng mét vỉa hè.',
    'Các nhà kinh tế gọi đó là khu vực phi chính thức, và ở nhiều đô thị châu Á nó nuôi sống nhiều người hơn cả khu vực chính thức.',
    'Đó là công việc mong manh. Một tuần mưa có thể xoá sạch lợi nhuận cả tháng. Nhưng đến mười giờ, con phố ồn ào và ấm áp hơn cả lúc giữa trưa.'
  ],
  keys:[
    { w:'cart', r:'/kɑːt/', vi:'xe đẩy' },
    { w:'paperwork', r:'/ˈpeɪpəwɜːk/', vi:'giấy tờ' },
    { w:'rent', r:'/rent/', vi:'tiền thuê' },
    { w:'pavement', r:'/ˈpeɪvmənt/', vi:'vỉa hè' },
    { w:'informal sector', r:'/ɪnˈfɔːml ˈsektə/', vi:'khu vực phi chính thức' },
    { w:'feed', r:'/fiːd/', vi:'nuôi sống' },
    { w:'fragile', r:'/ˈfrædʒaɪl/', vi:'mong manh' },
    { w:'profit', r:'/ˈprɒfɪt/', vi:'lợi nhuận' }
  ],
  qs:[
    { q:'Sau chín giờ có gì thay đổi?', o:['Phố vắng đi','Cửa hàng đóng, xe đẩy kéo đến','Đèn tắt','Cấm xe'], c:1, e:'The shops close, and the carts arrive.' },
    { q:'Tiền thuê chỗ tính bằng gì?', o:['Theo tháng','Bằng mét vỉa hè','Theo doanh thu','Không phải trả'], c:1, e:'Rent is paid in metres of pavement.' },
    { q:'Vì sao công việc này mong manh?', o:['Cạnh tranh cao','Một tuần mưa xoá sạch lợi nhuận cả tháng','Bị cấm','Thiếu vốn'], c:1, e:'One rainy week can erase a month of profit.' }
  ],
  after:'Tả một khu chợ đêm bằng 6 câu, dùng: after … o\'clock · economists call this · but by ten.' },

{ lang:'en', lv:'b1', mins:5, cat:'Du lịch', title:'The Slow Train', vi:'Chuyến tàu chậm',
  intro:'B1. Chùm từ trọng tâm: tốc độ, cảnh vật, cách ta trải nghiệm quãng đường.',
  text:[
    'The train from Hanoi to Hue takes thirteen hours. The plane takes one.',
    'On the plane you see clouds. On the train you see the country change: red soil, then sand, then the sea appearing suddenly on your left.',
    'There is an argument that speed is not always progress. Getting somewhere faster means experiencing less of the distance.',
    'I am not romantic about it. I take the plane when I am busy. But once a year I choose the thirteen hours on purpose.'
  ],
  tr:[
    'Tàu từ Hà Nội vào Huế mất mười ba tiếng. Máy bay mất một tiếng.',
    'Trên máy bay bạn thấy mây. Trên tàu bạn thấy đất nước đổi thay: đất đỏ, rồi cát, rồi biển bất chợt hiện ra bên trái.',
    'Có một lập luận rằng tốc độ không phải lúc nào cũng là tiến bộ. Đến nơi nhanh hơn nghĩa là trải nghiệm ít hơn cái khoảng cách ấy.',
    'Tôi không lãng mạn hoá chuyện này. Bận thì tôi vẫn đi máy bay. Nhưng mỗi năm một lần tôi cố tình chọn mười ba tiếng.'
  ],
  keys:[
    { w:'take (time)', r:'/teɪk/', vi:'mất (thời gian)' },
    { w:'soil', r:'/sɔɪl/', vi:'đất' },
    { w:'appear', r:'/əˈpɪə/', vi:'hiện ra' },
    { w:'suddenly', r:'/ˈsʌdnli/', vi:'bất chợt' },
    { w:'argument', r:'/ˈɑːɡjumənt/', vi:'lập luận' },
    { w:'progress', r:'/ˈprəʊɡres/', vi:'sự tiến bộ' },
    { w:'experience (v.)', r:'/ɪkˈspɪəriəns/', vi:'trải nghiệm' },
    { w:'on purpose', r:'/ɒn ˈpɜːpəs/', vi:'cố tình' }
  ],
  qs:[
    { q:'Tàu mất bao lâu?', o:['Ba tiếng','Tám tiếng','Mười ba tiếng','Hai mươi tiếng'], c:2, e:'takes thirteen hours.' },
    { q:'Lập luận trong bài là gì?', o:['Tàu rẻ hơn','Tốc độ không phải lúc nào cũng là tiến bộ','Máy bay nguy hiểm','Nên bỏ máy bay'], c:1, e:'speed is not always progress.' },
    { q:'Người viết đi tàu khi nào?', o:['Luôn luôn','Mỗi năm một lần, cố tình','Khi hết vé máy bay','Không bao giờ'], c:1, e:'once a year I choose the thirteen hours on purpose.' }
  ],
  after:'Viết 6 câu so sánh hai cách đi lại, dùng: there is an argument that · means -ing · on purpose.' },

{ lang:'en', lv:'b1', mins:5, cat:'Khoa học', title:'Seeds in a Freezer', vi:'Những hạt giống trong kho lạnh',
  intro:'B1. Chùm từ trọng tâm: ngân hàng hạt giống, đa dạng sinh học, phòng xa.',
  text:[
    'On an island in the far north of Norway, a building holds nearly a million seed samples at minus eighteen degrees.',
    'The idea is simple. If a crop disappears from the fields — through war, disease or drought — the seed still exists somewhere.',
    'It is not a museum. Countries deposit seeds and can ask for them back, and one country already has.',
    'What makes the project unusual is its timescale. It was designed to be useful to people who are not yet born.'
  ],
  tr:[
    'Trên một hòn đảo ở cực bắc Na Uy, một toà nhà giữ gần một triệu mẫu hạt giống ở âm mười tám độ.',
    'Ý tưởng rất đơn giản. Nếu một loại cây trồng biến mất khỏi đồng ruộng — vì chiến tranh, dịch bệnh hay hạn hán — thì hạt giống của nó vẫn còn ở đâu đó.',
    'Đó không phải bảo tàng. Các nước gửi hạt vào và có thể xin lấy lại, và đã có một nước làm vậy.',
    'Điều khiến dự án này khác thường là thang thời gian của nó. Nó được thiết kế để có ích cho những người còn chưa ra đời.'
  ],
  keys:[
    { w:'seed', r:'/siːd/', vi:'hạt giống' },
    { w:'sample', r:'/ˈsɑːmpl/', vi:'mẫu' },
    { w:'crop', r:'/krɒp/', vi:'cây trồng, mùa màng' },
    { w:'disease', r:'/dɪˈziːz/', vi:'dịch bệnh' },
    { w:'drought', r:'/draʊt/', vi:'hạn hán' },
    { w:'deposit', r:'/dɪˈpɒzɪt/', vi:'gửi vào' },
    { w:'unusual', r:'/ʌnˈjuːʒuəl/', vi:'khác thường' },
    { w:'timescale', r:'/ˈtaɪmskeɪl/', vi:'thang thời gian' }
  ],
  qs:[
    { q:'Kho giữ hạt ở nhiệt độ nào?', o:['0 độ','−5 độ','−18 độ','−40 độ'], c:2, e:'at minus eighteen degrees.' },
    { q:'Đây có phải bảo tàng không?', o:['Có','Không — các nước gửi và có thể lấy lại','Chỉ dành cho nghiên cứu','Chỉ là kho lưu trữ ảnh'], c:1, e:'Countries deposit seeds and can ask for them back.' },
    { q:'Điều gì khiến dự án khác thường?', o:['Quy mô tiền bạc','Thang thời gian — phục vụ người chưa ra đời','Vị trí xa xôi','Công nghệ mới'], c:1, e:'designed to be useful to people who are not yet born.' }
  ],
  after:'Viết 6 câu về một dự án dài hạn, dùng: the idea is simple · what makes … unusual is · designed to.' },

{ lang:'en', lv:'b1', mins:5, cat:'Đời sống', title:'The Value of Being Lost', vi:'Giá trị của việc bị lạc',
  intro:'B1. Chùm từ trọng tâm: bản đồ số, định hướng, trí nhớ không gian.',
  text:[
    'Before phone maps, getting lost was normal. You asked a stranger, took a wrong turn, and slowly built a picture of the city in your head.',
    'Studies of taxi drivers suggest that this kind of navigation actually changes the brain\'s spatial memory.',
    'Now most of us follow a blue arrow. We arrive on time and remember nothing about how we got there.',
    'I am not suggesting we delete the app. But once a week, in a familiar area, it is worth putting the phone away and guessing.'
  ],
  tr:[
    'Trước khi có bản đồ điện thoại, lạc đường là chuyện thường. Bạn hỏi người lạ, rẽ nhầm, rồi dần dựng nên hình ảnh thành phố trong đầu.',
    'Các nghiên cứu về tài xế taxi cho thấy kiểu định hướng này thật sự làm thay đổi trí nhớ không gian của não.',
    'Bây giờ phần lớn chúng ta đi theo một mũi tên xanh. Đến đúng giờ và chẳng nhớ gì về cách mình đã đến.',
    'Tôi không đề nghị xoá ứng dụng. Nhưng mỗi tuần một lần, ở khu vực quen thuộc, cũng đáng để cất điện thoại đi và tự đoán đường.'
  ],
  keys:[
    { w:'get lost', r:'/ɡet lɒst/', vi:'bị lạc' },
    { w:'stranger', r:'/ˈstreɪndʒə/', vi:'người lạ' },
    { w:'wrong turn', r:'/rɒŋ tɜːn/', vi:'ngã rẽ nhầm' },
    { w:'navigation', r:'/ˌnævɪˈɡeɪʃn/', vi:'sự định hướng' },
    { w:'spatial', r:'/ˈspeɪʃl/', vi:'thuộc không gian' },
    { w:'arrow', r:'/ˈærəʊ/', vi:'mũi tên' },
    { w:'familiar', r:'/fəˈmɪliə/', vi:'quen thuộc' },
    { w:'guess', r:'/ɡes/', vi:'đoán' }
  ],
  qs:[
    { q:'Nghiên cứu về tài xế taxi cho thấy gì?', o:['Họ lái an toàn hơn','Định hướng làm thay đổi trí nhớ không gian','Họ nhớ tên phố tốt hơn','Họ ít dùng bản đồ'], c:1, e:'changes the brain\'s spatial memory.' },
    { q:'Hệ quả của việc theo mũi tên xanh?', o:['Đi nhanh hơn','Đến đúng giờ nhưng không nhớ đường','Tiết kiệm xăng','Ít hỏi đường'], c:1, e:'remember nothing about how we got there.' },
    { q:'Đề xuất của người viết?', o:['Xoá ứng dụng bản đồ','Mỗi tuần một lần, cất điện thoại ở khu quen','Học thuộc bản đồ','Đi bộ nhiều hơn'], c:1, e:'once a week, in a familiar area… putting the phone away.' }
  ],
  after:'Viết 6 câu về một lần bạn bị lạc, dùng: before … , · studies suggest that · it is worth -ing.' },

{ lang:'en', lv:'b1', mins:5, cat:'Ngôn ngữ', title:'Words for Rain', vi:'Những từ để gọi mưa',
  intro:'B1. Chùm từ trọng tâm: từ vựng theo khí hậu, dịch thuật, văn hoá.',
  text:[
    'Vietnamese has many ways to talk about rain: mưa phùn, mưa rào, mưa ngâu. English mostly has adjectives: light rain, heavy rain.',
    'This is not because one language is richer. Languages grow detailed where life demands detail.',
    'In English, by contrast, there is a large vocabulary for degrees of cold, because that is what the weather asked speakers to notice.',
    'Translating a word is easy. Translating why a language bothered to have that word is the difficult part.'
  ],
  tr:[
    'Tiếng Việt có nhiều cách gọi mưa: mưa phùn, mưa rào, mưa ngâu. Tiếng Anh thì chủ yếu dùng tính từ: light rain, heavy rain.',
    'Không phải vì ngôn ngữ này giàu hơn ngôn ngữ kia. Ngôn ngữ trở nên chi tiết ở đúng chỗ mà đời sống đòi hỏi sự chi tiết.',
    'Ngược lại, tiếng Anh có cả một kho từ chỉ các mức độ lạnh, bởi đó là điều thời tiết buộc người nói phải để ý.',
    'Dịch một từ thì dễ. Dịch được lý do vì sao một ngôn ngữ chịu khó có từ ấy mới là phần khó.'
  ],
  keys:[
    { w:'adjective', r:'/ˈædʒɪktɪv/', vi:'tính từ' },
    { w:'rich', r:'/rɪtʃ/', vi:'giàu, phong phú' },
    { w:'detailed', r:'/ˈdiːteɪld/', vi:'chi tiết' },
    { w:'demand', r:'/dɪˈmɑːnd/', vi:'đòi hỏi' },
    { w:'by contrast', r:'/baɪ ˈkɒntrɑːst/', vi:'ngược lại' },
    { w:'vocabulary', r:'/vəˈkæbjələri/', vi:'vốn từ' },
    { w:'notice', r:'/ˈnəʊtɪs/', vi:'để ý' },
    { w:'bother to', r:'/ˈbɒðə tuː/', vi:'chịu khó làm gì' }
  ],
  qs:[
    { q:'Tiếng Anh chủ yếu diễn tả mưa bằng gì?', o:['Danh từ riêng','Tính từ','Động từ','Thành ngữ'], c:1, e:'English mostly has adjectives.' },
    { q:'Vì sao ngôn ngữ chi tiết ở chỗ nào đó?', o:['Vì ngữ pháp','Vì đời sống đòi hỏi sự chi tiết ở đó','Vì lịch sử','Vì văn học'], c:1, e:'Languages grow detailed where life demands detail.' },
    { q:'Phần khó của dịch thuật là gì?', o:['Tìm từ tương đương','Dịch lý do ngôn ngữ ấy có từ đó','Ngữ pháp','Phát âm'], c:1, e:'Translating why a language bothered to have that word.' }
  ],
  after:'Viết 6 câu về một nhóm từ tiếng Việt khó dịch, dùng: not because … but · by contrast · the difficult part is.' },

{ lang:'en', lv:'b1', mins:5, cat:'Xã hội', title:'Rooftop Gardens', vi:'Vườn trên mái',
  intro:'B1. Chùm từ trọng tâm: đô thị, nhiệt độ, không gian bỏ trống.',
  text:[
    'Look down on any Asian city from a plane and you will see thousands of flat, empty roofs.',
    'Some cities now pay residents to plant them. A layer of soil and vegetables can lower the temperature inside the top flat by several degrees.',
    'The benefit is not only heat. Rain that would rush into the drains is slowed down, which matters in a city that floods.',
    'None of this replaces parks. But a roof is space a city already owns, and that is rare.'
  ],
  tr:[
    'Nhìn xuống bất kỳ thành phố châu Á nào từ máy bay, bạn sẽ thấy hàng nghìn mái nhà bằng phẳng và trống trơn.',
    'Một số thành phố giờ trả tiền cho cư dân để trồng cây trên đó. Một lớp đất và rau có thể hạ nhiệt độ trong căn hộ tầng trên cùng vài độ.',
    'Lợi ích không chỉ là cái nóng. Nước mưa lẽ ra ào xuống cống thì được làm chậm lại, điều rất quan trọng với một thành phố hay ngập.',
    'Tất cả những cái đó không thay được công viên. Nhưng mái nhà là khoảng không thành phố vốn đã có, và điều đó thì hiếm.'
  ],
  keys:[
    { w:'roof', r:'/ruːf/', vi:'mái nhà' },
    { w:'resident', r:'/ˈrezɪdənt/', vi:'cư dân' },
    { w:'layer', r:'/ˈleɪə/', vi:'lớp' },
    { w:'lower (v.)', r:'/ˈləʊə/', vi:'hạ xuống' },
    { w:'benefit', r:'/ˈbenɪfɪt/', vi:'lợi ích' },
    { w:'drain', r:'/dreɪn/', vi:'cống thoát nước' },
    { w:'flood', r:'/flʌd/', vi:'ngập lụt' },
    { w:'replace', r:'/rɪˈpleɪs/', vi:'thay thế' }
  ],
  qs:[
    { q:'Một số thành phố làm gì?', o:['Cấm xây thêm','Trả tiền cho cư dân trồng cây trên mái','Xây thêm công viên','Tăng thuế'], c:1, e:'Some cities now pay residents to plant them.' },
    { q:'Lợi ích thứ hai là gì?', o:['Có rau ăn','Làm chậm nước mưa chảy vào cống','Giảm tiếng ồn','Tăng giá nhà'], c:1, e:'Rain that would rush into the drains is slowed down.' },
    { q:'Ưu điểm lớn nhất của mái nhà?', o:['Rẻ','Là không gian thành phố vốn đã có','Dễ xây','Nhiều nắng'], c:1, e:'a roof is space a city already owns.' }
  ],
  after:'Viết 6 câu đề xuất một cải tạo nhỏ cho thành phố, dùng: some cities now · which matters · none of this replaces.' },

{ lang:'en', lv:'b1', mins:5, cat:'Công việc', title:'The Person Who Answers', vi:'Người nhấc máy',
  intro:'B1. Chùm từ trọng tâm: dịch vụ khách hàng, kiên nhẫn, lao động vô hình.',
  text:[
    'My cousin works on a support line. She answers about sixty calls a day.',
    'Most callers are polite. A few are not, and she has learned not to take it personally — the anger is usually about the tenth problem of their week, not about her.',
    'What surprised me is how much of the job is listening. People often calm down before the problem is solved, simply because somebody let them finish.',
    'She says the hardest calls are not the loud ones. They are the ones where the person has already given up.'
  ],
  tr:[
    'Chị họ tôi làm ở tổng đài hỗ trợ. Mỗi ngày chị nhận chừng sáu mươi cuộc gọi.',
    'Phần lớn khách lịch sự. Một số ít thì không, và chị đã học được cách không xem đó là chuyện cá nhân — cơn giận ấy thường là vì rắc rối thứ mười trong tuần của họ, chứ không phải vì chị.',
    'Điều làm tôi ngạc nhiên là công việc này phần lớn là lắng nghe. Người ta thường nguôi đi trước cả khi vấn đề được giải quyết, chỉ vì có ai đó để họ nói hết.',
    'Chị bảo những cuộc khó nhất không phải là những cuộc to tiếng. Mà là những cuộc mà người ta đã buông xuôi rồi.'
  ],
  keys:[
    { w:'support line', r:'/səˈpɔːt laɪn/', vi:'tổng đài hỗ trợ' },
    { w:'polite', r:'/pəˈlaɪt/', vi:'lịch sự' },
    { w:'take it personally', r:'/teɪk ɪt ˈpɜːsənəli/', vi:'xem là chuyện cá nhân' },
    { w:'anger', r:'/ˈæŋɡə/', vi:'cơn giận' },
    { w:'surprise', r:'/səˈpraɪz/', vi:'làm ngạc nhiên' },
    { w:'calm down', r:'/kɑːm daʊn/', vi:'nguôi đi' },
    { w:'solve', r:'/sɒlv/', vi:'giải quyết' },
    { w:'give up', r:'/ɡɪv ʌp/', vi:'buông xuôi' }
  ],
  qs:[
    { q:'Mỗi ngày chị nhận bao nhiêu cuộc?', o:['Ba mươi','Bốn mươi','Sáu mươi','Một trăm'], c:2, e:'She answers about sixty calls a day.' },
    { q:'Điều gì khiến người viết ngạc nhiên?', o:['Lương thấp','Công việc phần lớn là lắng nghe','Ca làm dài','Phải thuộc kịch bản'], c:1, e:'how much of the job is listening.' },
    { q:'Cuộc gọi khó nhất là loại nào?', o:['To tiếng','Người đã buông xuôi','Kỹ thuật phức tạp','Gọi lúc cuối ca'], c:1, e:'the ones where the person has already given up.' }
  ],
  after:'Viết 6 câu về một công việc ít người để ý, dùng: most … a few · what surprised me is · not … but.' },

{ lang:'en', lv:'b1', mins:5, cat:'Đời sống', title:'Why Bread Smells Like Home', vi:'Vì sao mùi bánh gợi nhớ nhà',
  intro:'B1. Chùm từ trọng tâm: khứu giác, ký ức, sự gắn bó nơi chốn.',
  text:[
    'Smell reaches memory by a shorter road than sight or sound. That is the usual explanation for why a bakery can stop you in the street.',
    'For me it is not bread but the smell of rain on hot concrete. Two seconds, and I am eleven years old in Hanoi.',
    'What interests me is how specific these triggers are. Not "rain" — rain on hot concrete, in the first minute only.',
    'Perhaps that precision is the point. A general memory belongs to everyone. A precise one belongs to you.'
  ],
  tr:[
    'Mùi đến được với ký ức bằng một con đường ngắn hơn so với thị giác hay thính giác. Đó là lời giải thích quen thuộc cho việc vì sao một tiệm bánh có thể giữ chân bạn giữa phố.',
    'Với tôi thì không phải bánh mì mà là mùi mưa rơi trên bê tông nóng. Hai giây thôi, và tôi lại mười một tuổi ở Hà Nội.',
    'Điều tôi thấy thú vị là những thứ khơi gợi ấy cụ thể đến mức nào. Không phải “mưa” — mà là mưa trên bê tông nóng, chỉ trong phút đầu tiên.',
    'Có lẽ chính sự chính xác ấy mới là điều đáng nói. Một ký ức chung chung thì thuộc về mọi người. Một ký ức chính xác thì thuộc về bạn.'
  ],
  keys:[
    { w:'smell', r:'/smel/', vi:'mùi' },
    { w:'reach', r:'/riːtʃ/', vi:'chạm tới, đến được' },
    { w:'sight', r:'/saɪt/', vi:'thị giác' },
    { w:'explanation', r:'/ˌekspləˈneɪʃn/', vi:'lời giải thích' },
    { w:'concrete', r:'/ˈkɒŋkriːt/', vi:'bê tông' },
    { w:'trigger', r:'/ˈtrɪɡə/', vi:'thứ khơi gợi' },
    { w:'specific', r:'/spəˈsɪfɪk/', vi:'cụ thể' },
    { w:'precision', r:'/prɪˈsɪʒn/', vi:'sự chính xác' }
  ],
  qs:[
    { q:'Vì sao mùi gợi ký ức mạnh?', o:['Vì ta ngửi nhiều','Vì mùi đến ký ức bằng con đường ngắn hơn','Vì mũi nhạy','Vì thói quen'], c:1, e:'Smell reaches memory by a shorter road than sight or sound.' },
    { q:'Với người viết, mùi nào gợi nhớ?', o:['Bánh mì','Mưa trên bê tông nóng','Cà phê','Hoa sữa'], c:1, e:'the smell of rain on hot concrete.' },
    { q:'Ý cuối của bài?', o:['Ký ức chung mạnh hơn','Ký ức càng chính xác càng thuộc về riêng bạn','Nên ghi lại ký ức','Mùi sẽ phai đi'], c:1, e:'A precise one belongs to you.' }
  ],
  after:'Viết 6 câu về một mùi gợi nhớ, dùng: that is the usual explanation for · what interests me is · perhaps.' },

{ lang:'en', lv:'b1', mins:5, cat:'Học tập', title:'The Exam That Taught Nothing', vi:'Kỳ thi chẳng dạy được gì',
  intro:'B1. Chùm từ trọng tâm: thi cử, học đối phó, đánh giá thật.',
  text:[
    'In my final year I memorised four hundred terms for one exam. I got a high mark.',
    'Three weeks later I could not define half of them. The knowledge had been rented, not owned.',
    'The problem is not the students. If a test rewards recall, students will practise recall — that is a rational response, not laziness.',
    'The tests I still remember asked me to do something: build, argue, explain to a stranger. I failed one of them, and I still remember what it taught me.'
  ],
  tr:[
    'Năm cuối tôi học thuộc bốn trăm thuật ngữ cho một kỳ thi. Tôi được điểm cao.',
    'Ba tuần sau tôi không định nghĩa nổi một nửa số đó. Kiến thức ấy là đi thuê chứ không phải sở hữu.',
    'Vấn đề không nằm ở sinh viên. Nếu bài thi thưởng cho khả năng nhớ lại, sinh viên sẽ luyện nhớ lại — đó là phản ứng hợp lý, không phải lười.',
    'Những bài kiểm tra tôi còn nhớ là những bài bắt tôi làm gì đó: dựng một thứ, tranh luận, giải thích cho người lạ. Tôi trượt một bài trong số đó, và đến giờ vẫn nhớ nó dạy tôi điều gì.'
  ],
  keys:[
    { w:'memorise', r:'/ˈmeməraɪz/', vi:'học thuộc' },
    { w:'term', r:'/tɜːm/', vi:'thuật ngữ' },
    { w:'mark', r:'/mɑːk/', vi:'điểm số' },
    { w:'define', r:'/dɪˈfaɪn/', vi:'định nghĩa' },
    { w:'rent', r:'/rent/', vi:'thuê' },
    { w:'reward', r:'/rɪˈwɔːd/', vi:'thưởng cho' },
    { w:'recall', r:'/rɪˈkɔːl/', vi:'sự nhớ lại' },
    { w:'rational', r:'/ˈræʃnəl/', vi:'hợp lý' }
  ],
  qs:[
    { q:'Ba tuần sau kỳ thi thì sao?', o:['Vẫn nhớ hết','Không định nghĩa nổi một nửa','Quên sạch','Nhớ rõ hơn'], c:1, e:'I could not define half of them.' },
    { q:'Theo bài, vấn đề nằm ở đâu?', o:['Ở sinh viên lười','Ở cách bài thi thưởng cho khả năng nhớ lại','Ở giáo viên','Ở giáo trình'], c:1, e:'If a test rewards recall, students will practise recall.' },
    { q:'Bài kiểm tra nào đáng nhớ?', o:['Bài trắc nghiệm','Bài bắt làm: dựng, tranh luận, giải thích','Bài về nhà','Bài thi cuối kỳ'], c:1, e:'asked me to do something: build, argue, explain.' }
  ],
  after:'Viết 6 câu về một kỳ thi bạn nhớ, dùng: the problem is not … · if … , … will · I still remember.' }

  );
})();
