/* ============================================================
   LangLab — THƯ VIỆN BÀI ĐỌC
   Mỗi bài: một đoạn văn hoàn chỉnh, viết quanh một chùm từ cần học, để từ mới
   xuất hiện trong ngữ cảnh chứ không đứng trơ trọi trong danh sách.

   { lang, lv, mins, cat, title, vi (tiêu đề tiếng Việt), intro,
     text: [đoạn 1, đoạn 2, ...],          // bản ngữ
     tr:   [dịch đoạn 1, ...],             // tiếng Việt, khớp từng đoạn
     keys: [{ w, r?, vi, note? }],         // chùm từ trọng tâm của bài
     qs:   [{ q, o:[...], c, e }],         // câu hỏi hiểu bài
     after: 'gợi ý luyện tập sau khi đọc' }

   Nội dung do LangLab tự biên soạn — không chép nguyên văn từ nguồn nào.
   ============================================================ */

const READINGS = [
/* ================= TIẾNG ANH ================= */
{ lang:'en', lv:'a2', mins:3, cat:'Đời sống', title:'The Woman Who Counts Birds', vi:'Người phụ nữ đếm chim',
  intro:'Bài đọc ngắn về một thói quen nhỏ kéo dài nhiều năm. Chùm từ trọng tâm: thói quen, ghi chép, thời tiết.',
  text:[
    'Every morning at seven, Mrs Doan opens her window and writes down the birds she can see. She has done this for eleven years. The notebook on her table is the fourth one.',
    'She is not a scientist. She started because her doctor told her to sit still for ten minutes a day, and sitting still was boring. So she began to count. Two sparrows on Monday. Nine on Tuesday. None at all on the morning after a storm.',
    'Her neighbours thought it was a strange hobby. Then a university wrote to her. They were studying how city birds change with the weather, and eleven years of daily notes were exactly what they needed. Her four notebooks are now part of a real study.',
    'Mrs Doan is seventy-two. She says the birds are only half the reason she keeps writing. The other half is that ten quiet minutes, every single morning, turned out to be the best part of her day.'
  ],
  tr:[
    'Bảy giờ sáng nào bà Đoàn cũng mở cửa sổ và ghi lại những con chim bà nhìn thấy. Bà làm thế đã mười một năm. Cuốn sổ trên bàn là cuốn thứ tư.',
    'Bà không phải nhà khoa học. Bà bắt đầu vì bác sĩ dặn phải ngồi yên mười phút mỗi ngày, mà ngồi không thì chán. Thế là bà đếm. Thứ Hai hai con sẻ. Thứ Ba chín con. Sáng sau cơn bão thì không con nào.',
    'Hàng xóm thấy đó là thú vui kỳ lạ. Rồi một trường đại học viết thư cho bà. Họ đang nghiên cứu chim thành phố thay đổi ra sao theo thời tiết, và mười một năm ghi chép mỗi ngày đúng là thứ họ cần. Bốn cuốn sổ của bà giờ là một phần của một nghiên cứu thật.',
    'Bà Đoàn bảy mươi hai tuổi. Bà nói chim chỉ là một nửa lý do bà tiếp tục ghi. Nửa còn lại là mười phút yên tĩnh, sáng nào cũng vậy, hoá ra lại là phần hay nhất trong ngày của bà.'
  ],
  keys:[
    { w:'notebook', r:'/ˈnəʊtbʊk/', vi:'cuốn sổ' },
    { w:'sparrow', r:'/ˈspærəʊ/', vi:'chim sẻ' },
    { w:'storm', r:'/stɔːm/', vi:'cơn bão' },
    { w:'hobby', r:'/ˈhɒbi/', vi:'thú vui, sở thích' },
    { w:'neighbour', r:'/ˈneɪbə/', vi:'hàng xóm', note:'Mỹ viết neighbor.' },
    { w:'study', r:'/ˈstʌdi/', vi:'nghiên cứu; học', note:'Ở đây là danh từ: một công trình nghiên cứu.' },
    { w:'quiet', r:'/ˈkwaɪət/', vi:'yên tĩnh', note:'Đừng nhầm với quite (/kwaɪt/) nghĩa là «khá».' },
    { w:'turn out', r:'/tɜːn aʊt/', vi:'hoá ra là' }
  ],
  qs:[
    { q:'Vì sao bà Đoàn bắt đầu đếm chim?', o:['Vì bà là nhà khoa học','Vì bác sĩ dặn bà ngồi yên mỗi ngày','Vì trường đại học nhờ bà','Vì hàng xóm rủ bà'], c:1, e:'Đoạn 2: her doctor told her to sit still for ten minutes a day.' },
    { q:'Buổi sáng sau cơn bão bà thấy bao nhiêu con chim?', o:['Hai con','Chín con','Không con nào','Bốn con'], c:2, e:'None at all on the morning after a storm — «none at all» nghĩa là không con nào cả.' },
    { q:'Vì sao trường đại học quan tâm tới sổ của bà?', o:['Vì chữ bà đẹp','Vì bà ghi liên tục nhiều năm','Vì bà sống gần trường','Vì bà từng học ở đó'], c:1, e:'eleven years of daily notes were exactly what they needed — giá trị nằm ở tính liên tục.' },
    { q:'Theo bà, nửa lý do còn lại khiến bà tiếp tục là gì?', o:['Tiền thưởng của trường','Được lên báo','Mười phút yên tĩnh mỗi sáng','Được hàng xóm khen'], c:2, e:'Đoạn cuối: ten quiet minutes… turned out to be the best part of her day.' }
  ],
  after:'Thử kể lại bằng bốn câu, dùng đủ: notebook · storm · neighbour · turn out.' },

{ lang:'en', lv:'a2', mins:3, cat:'Công việc', title:'The Shop That Closes at Lunch', vi:'Cửa hàng đóng cửa giờ trưa',
  intro:'Một chuyện nhỏ về cách làm ăn khác thường. Chùm từ trọng tâm: cửa hàng, khách hàng, lợi nhuận.',
  text:[
    'There is a bakery on Nguyen Trai street that closes from twelve to two every day. Not for repairs. Not because it is quiet. It closes because the owner, Mr Hung, eats lunch with his family and then sleeps for forty minutes.',
    'Customers complained at first. Twelve to two is exactly when office workers want bread. Mr Hung listened, thanked them, and kept closing.',
    'What happened next surprised him. People began to arrive before twelve so they would not miss him. By eleven thirty there was often a short queue. He now sells more bread in that hour than he used to sell all afternoon.',
    'He is careful not to give advice about it. "This works for me," he says. "I am not saying it works for anyone else." But every year another shop on the street starts closing at lunch too.'
  ],
  tr:[
    'Trên phố Nguyễn Trãi có một tiệm bánh đóng cửa từ mười hai giờ đến hai giờ mỗi ngày. Không phải để sửa chữa. Không phải vì vắng khách. Tiệm đóng vì ông chủ, ông Hùng, ăn trưa với gia đình rồi ngủ bốn mươi phút.',
    'Ban đầu khách phàn nàn. Mười hai đến hai giờ đúng là lúc dân văn phòng muốn mua bánh. Ông Hùng lắng nghe, cảm ơn họ, rồi vẫn đóng cửa.',
    'Điều xảy ra sau đó làm ông bất ngờ. Người ta bắt đầu đến trước mười hai giờ để khỏi lỡ. Đến mười một rưỡi thường đã có một hàng ngắn. Giờ ông bán được nhiều bánh trong tiếng đó hơn cả buổi chiều trước kia.',
    'Ông rất thận trọng, không khuyên ai làm theo. «Cách này hợp với tôi,» ông nói. «Tôi không nói nó hợp với người khác.» Nhưng mỗi năm lại có thêm một cửa hàng trên phố cũng đóng cửa giờ trưa.'
  ],
  keys:[
    { w:'bakery', r:'/ˈbeɪkəri/', vi:'tiệm bánh' },
    { w:'owner', r:'/ˈəʊnə/', vi:'chủ (cửa hàng)' },
    { w:'customer', r:'/ˈkʌstəmə/', vi:'khách hàng' },
    { w:'complain', r:'/kəmˈpleɪn/', vi:'phàn nàn', note:'complain to sb about sth.' },
    { w:'queue', r:'/kjuː/', vi:'hàng người xếp chờ', note:'Mỹ dùng «line».' },
    { w:'miss', r:'/mɪs/', vi:'lỡ, bỏ lỡ' },
    { w:'advice', r:'/ədˈvaɪs/', vi:'lời khuyên', note:'Không đếm được: a piece of advice.' },
    { w:'surprise', r:'/səˈpraɪz/', vi:'làm ngạc nhiên' }
  ],
  qs:[
    { q:'Vì sao tiệm bánh đóng cửa buổi trưa?', o:['Vì sửa chữa','Vì vắng khách','Vì ông chủ ăn trưa và ngủ trưa','Vì hết bánh'], c:2, e:'Đoạn 1 loại trừ hai lý do đầu rồi mới nêu lý do thật.' },
    { q:'Khách hàng phản ứng thế nào lúc đầu?', o:['Họ khen','Họ phàn nàn','Họ không để ý','Họ chuyển sang tiệm khác'], c:1, e:'Customers complained at first.' },
    { q:'Kết quả bất ngờ là gì?', o:['Ông phải mở lại buổi trưa','Ông bán được nhiều hơn trong giờ trước trưa','Ông đóng cửa hẳn','Ông chuyển sang bán online'], c:1, e:'He now sells more bread in that hour than he used to sell all afternoon.' },
    { q:'Thái độ của ông Hùng khi nói về cách làm của mình?', o:['Khuyên mọi người làm theo','Thận trọng, không khuyên ai','Chê người khác','Giữ bí mật'], c:1, e:'He is careful not to give advice about it.' }
  ],
  after:'Viết ba câu về một thói quen bạn giữ dù người khác thấy lạ, dùng: owner · complain · turn out.' },

{ lang:'en', lv:'b1', mins:4, cat:'Khoa học', title:'Why Maps Lie', vi:'Vì sao bản đồ nói dối',
  intro:'Bài đọc giải thích một hiện tượng quen thuộc. Chùm từ trọng tâm: hình dạng, kích thước, méo mó, chiếu.',
  text:[
    'Every flat map of the world is wrong. Not slightly wrong, and not because of carelessness: it is impossible to flatten a sphere onto a rectangle without stretching something. The only question is what you choose to distort.',
    'The map most of us grew up with keeps angles correct, which is exactly what a sailor needs. The price is size. Greenland appears roughly as large as Africa, although Africa is fourteen times bigger. Countries near the poles swell; countries near the equator shrink.',
    'Other projections keep area honest and let shape suffer instead. On these maps Africa looks correct in size but oddly narrow, and most people find them uncomfortable, simply because they are unfamiliar.',
    'There is no perfect map, only a choice about which lie is least harmful for the job at hand. A pilot, a farmer and a history teacher all need different lies. The dangerous map is not the distorted one — it is the one whose distortion nobody has mentioned.'
  ],
  tr:[
    'Mọi bản đồ thế giới phẳng đều sai. Không phải sai chút ít, cũng không phải vì cẩu thả: không thể trải một hình cầu lên một hình chữ nhật mà không kéo giãn thứ gì đó. Vấn đề duy nhất là bạn chọn làm méo cái gì.',
    'Tấm bản đồ mà phần lớn chúng ta lớn lên cùng giữ đúng góc, đúng thứ mà người đi biển cần. Cái giá phải trả là kích thước. Greenland trông to gần bằng châu Phi, dù châu Phi lớn gấp mười bốn lần. Các nước gần cực thì phình ra; các nước gần xích đạo thì co lại.',
    'Những phép chiếu khác giữ đúng diện tích và để hình dạng chịu thiệt. Trên các bản đồ đó châu Phi đúng kích thước nhưng trông hẹp một cách kỳ lạ, và phần lớn mọi người thấy khó chịu, đơn giản vì không quen mắt.',
    'Không có bản đồ hoàn hảo, chỉ có lựa chọn xem lời nói dối nào ít hại nhất cho việc đang làm. Phi công, nông dân và giáo viên lịch sử cần ba lời nói dối khác nhau. Tấm bản đồ nguy hiểm không phải tấm bị méo — mà là tấm mà không ai nhắc tới chỗ méo của nó.'
  ],
  keys:[
    { w:'flatten', r:'/ˈflætn/', vi:'làm phẳng, trải phẳng' },
    { w:'sphere', r:'/sfɪə/', vi:'hình cầu' },
    { w:'distort', r:'/dɪˈstɔːt/', vi:'làm méo, bóp méo', note:'Danh từ: distortion.' },
    { w:'projection', r:'/prəˈdʒekʃn/', vi:'phép chiếu (bản đồ)' },
    { w:'swell', r:'/swel/', vi:'phình to ra', note:'swell — swelled — swollen.' },
    { w:'shrink', r:'/ʃrɪŋk/', vi:'co lại' },
    { w:'unfamiliar', r:'/ˌʌnfəˈmɪliə/', vi:'không quen mắt' },
    { w:'harmful', r:'/ˈhɑːmfl/', vi:'có hại' }
  ],
  qs:[
    { q:'Vì sao mọi bản đồ phẳng đều sai?', o:['Vì người vẽ cẩu thả','Vì không thể trải hình cầu thành mặt phẳng mà không kéo giãn','Vì thiếu dữ liệu','Vì Trái Đất luôn thay đổi'], c:1, e:'Đoạn 1: it is impossible to flatten a sphere onto a rectangle without stretching something.' },
    { q:'Bản đồ quen thuộc giữ đúng điều gì và hy sinh điều gì?', o:['Giữ đúng diện tích, hy sinh góc','Giữ đúng góc, hy sinh kích thước','Giữ đúng cả hai','Không giữ đúng gì'], c:1, e:'keeps angles correct… The price is size.' },
    { q:'Vì sao nhiều người thấy các bản đồ giữ đúng diện tích khó chịu?', o:['Vì chúng sai','Vì chúng lạ mắt','Vì chúng khó in','Vì chúng thiếu nước'], c:1, e:'simply because they are unfamiliar — lý do là thói quen nhìn, không phải độ chính xác.' },
    { q:'Theo tác giả, tấm bản đồ nguy hiểm là tấm nào?', o:['Tấm bị méo','Tấm cũ','Tấm không nói rõ nó méo ở đâu','Tấm vẽ tay'], c:2, e:'the one whose distortion nobody has mentioned.' }
  ],
  after:'Tóm tắt bài trong hai câu, bắt buộc dùng distort và projection.' },

{ lang:'en', lv:'b1', mins:4, cat:'Đời sống', title:'The Cost of a Free Refill', vi:'Cái giá của một lần rót thêm miễn phí',
  intro:'Bài đọc về hành vi tiêu dùng. Chùm từ trọng tâm: giá cả, lựa chọn, thói quen chi tiêu.',
  text:[
    'A cafe near the university offers free refills on filter coffee. The first cup costs the same as anywhere else; every cup after that is free. The owner is not being generous. She is running an experiment that has worked for six years.',
    'Customers who know they can refill stay longer. People who stay longer buy food. The margin on a slice of cake is far wider than on coffee, so an afternoon of free refills usually ends with a profitable order of something else.',
    'There is a second effect, harder to measure. Regulars feel they are being treated well, and they bring friends. Word of mouth costs nothing and outperforms every advert the cafe has ever paid for.',
    'None of this works if the coffee is bad. The offer only sounds generous because the first cup is worth paying for. A weak product with a clever offer attached simply loses money faster.'
  ],
  tr:[
    'Một quán cà phê gần trường đại học cho rót thêm cà phê phin miễn phí. Cốc đầu tính giá như mọi nơi; mọi cốc sau đó miễn phí. Chủ quán không phải đang hào phóng. Cô ấy đang chạy một thí nghiệm đã hiệu quả suốt sáu năm.',
    'Khách biết mình được rót thêm thì ngồi lâu hơn. Người ngồi lâu hơn thì mua đồ ăn. Biên lợi nhuận của một miếng bánh rộng hơn nhiều so với cà phê, nên một buổi chiều rót thêm miễn phí thường kết thúc bằng một đơn hàng có lãi cho thứ khác.',
    'Còn một tác động thứ hai, khó đo hơn. Khách quen thấy mình được đối đãi tử tế, và họ rủ bạn bè tới. Truyền miệng không tốn đồng nào mà hiệu quả hơn mọi quảng cáo quán từng bỏ tiền ra.',
    'Chẳng cách nào trong số đó hiệu quả nếu cà phê dở. Lời mời chỉ nghe hào phóng khi cốc đầu tiên đáng đồng tiền. Một sản phẩm yếu gắn thêm một chiêu khôn ngoan thì chỉ lỗ nhanh hơn mà thôi.'
  ],
  keys:[
    { w:'refill', r:'/ˈriːfɪl/', vi:'lần rót thêm' },
    { w:'generous', r:'/ˈdʒenərəs/', vi:'hào phóng' },
    { w:'margin', r:'/ˈmɑːdʒɪn/', vi:'biên lợi nhuận' },
    { w:'profitable', r:'/ˈprɒfɪtəbl/', vi:'có lãi' },
    { w:'regular', r:'/ˈreɡjələ/', vi:'khách quen', note:'Ở đây là danh từ số nhiều: regulars.' },
    { w:'word of mouth', r:'/wɜːd əv maʊθ/', vi:'truyền miệng' },
    { w:'outperform', r:'/ˌaʊtpəˈfɔːm/', vi:'vượt trội hơn' },
    { w:'advert', r:'/ˈædvɜːt/', vi:'quảng cáo (Anh)', note:'Mỹ nói ad hoặc commercial.' }
  ],
  qs:[
    { q:'Vì sao chủ quán cho rót thêm miễn phí?', o:['Vì cô ấy hào phóng','Vì khách ngồi lâu sẽ mua thêm đồ ăn','Vì cà phê sắp hỏng','Vì luật bắt buộc'], c:1, e:'Đoạn 2 giải thích chuỗi: ngồi lâu → mua đồ ăn → lãi từ bánh.' },
    { q:'Vì sao bánh quan trọng hơn cà phê với quán?', o:['Vì bánh ngon hơn','Vì biên lợi nhuận của bánh rộng hơn','Vì bánh rẻ hơn','Vì bánh bán chạy hơn'], c:1, e:'The margin on a slice of cake is far wider than on coffee.' },
    { q:'Tác động thứ hai, khó đo hơn, là gì?', o:['Khách quen rủ bạn tới','Quán nổi tiếng trên báo','Nhân viên vui hơn','Giá thuê giảm'], c:0, e:'Regulars… bring friends. Word of mouth…' },
    { q:'Điều kiện để cách làm này hiệu quả là gì?', o:['Quán phải rộng','Cà phê phải ngon','Giá phải rẻ','Phải gần trường'], c:1, e:'None of this works if the coffee is bad.' }
  ],
  after:'Viết một đoạn năm câu về một chiêu khuyến mãi bạn từng thấy, dùng: margin · profitable · word of mouth.' },

{ lang:'en', lv:'b2', mins:5, cat:'Xã hội', title:'The Library With No Books', vi:'Thư viện không có sách',
  intro:'Bài đọc mức B2 về một mô hình dịch vụ công. Chùm từ trọng tâm: cộng đồng, chia sẻ, tiếp cận.',
  text:[
    'On the ground floor of a community centre in Rotterdam there is a room that calls itself a library and contains no books at all. The shelves hold drills, sewing machines, camping tents, a projector, a pasta maker and eleven different kinds of ladder.',
    'The principle is simple. Most households own tools they use twice a year and store for the other three hundred and sixty three days. Pooling them costs almost nothing and gives every member access to equipment none of them could justify buying alone.',
    'The hard part is not the equipment but the trust. Items come back broken, or late, or not at all. The library that survives is the one that treats this as an ordinary running cost rather than a betrayal, budgets for repairs, and keeps the rules few enough that people can remember them.',
    'Similar projects have opened in dozens of cities, usually run by volunteers and usually short of storage space. They rarely make money. What they demonstrably produce is less waste, cheaper household projects, and a slow accumulation of the sort of neighbourly familiarity that no policy can order into existence.'
  ],
  tr:[
    'Ở tầng trệt một trung tâm cộng đồng tại Rotterdam có một căn phòng tự gọi mình là thư viện mà không hề có cuốn sách nào. Trên kệ là máy khoan, máy khâu, lều cắm trại, máy chiếu, máy làm mì và mười một loại thang khác nhau.',
    'Nguyên tắc rất đơn giản. Phần lớn hộ gia đình sở hữu những dụng cụ dùng hai lần một năm và cất giữ suốt ba trăm sáu mươi ba ngày còn lại. Gom chung lại gần như chẳng tốn gì mà cho mọi thành viên tiếp cận thiết bị mà một mình không ai thấy đáng bỏ tiền mua.',
    'Phần khó không nằm ở thiết bị mà ở lòng tin. Đồ trả về hỏng, hoặc muộn, hoặc không trả. Thư viện sống sót là thư viện coi đó như một khoản chi vận hành bình thường chứ không phải sự phản bội, dự trù tiền sửa chữa, và giữ số quy định đủ ít để người ta nhớ được.',
    'Những dự án tương tự đã mở ở hàng chục thành phố, thường do tình nguyện viên vận hành và thường thiếu chỗ chứa. Chúng hiếm khi có lãi. Thứ chúng tạo ra một cách rõ ràng là ít rác hơn, những việc sửa sang trong nhà rẻ hơn, và sự tích luỹ chậm rãi của thứ tình làng nghĩa xóm mà không chính sách nào ra lệnh cho nó xuất hiện được.'
  ],
  keys:[
    { w:'shelf', r:'/ʃelf/', vi:'cái kệ', note:'Số nhiều: shelves.' },
    { w:'pool', r:'/puːl/', vi:'gom chung lại dùng chung', note:'Ở đây là động từ.' },
    { w:'access', r:'/ˈækses/', vi:'sự tiếp cận', note:'access to something, không có «to» ở dạng động từ.' },
    { w:'justify', r:'/ˈdʒʌstɪfaɪ/', vi:'biện minh, thấy đáng' },
    { w:'betrayal', r:'/bɪˈtreɪəl/', vi:'sự phản bội' },
    { w:'budget', r:'/ˈbʌdʒɪt/', vi:'dự trù kinh phí', note:'budget for something.' },
    { w:'volunteer', r:'/ˌvɒlənˈtɪə/', vi:'tình nguyện viên' },
    { w:'accumulation', r:'/əˌkjuːmjəˈleɪʃn/', vi:'sự tích luỹ dần' }
  ],
  qs:[
    { q:'Thư viện này cho mượn gì?', o:['Sách hiếm','Dụng cụ và thiết bị gia đình','Nhạc cụ','Quần áo'], c:1, e:'Đoạn 1 liệt kê máy khoan, máy khâu, lều, thang…' },
    { q:'Nguyên tắc kinh tế của mô hình là gì?', o:['Mua rẻ bán đắt','Gom chung đồ ít dùng để ai cũng tiếp cận được','Cho thuê lấy lãi','Xin tài trợ'], c:1, e:'Pooling them costs almost nothing and gives every member access…' },
    { q:'Theo bài, phần khó nhất là gì?', o:['Tiền mua thiết bị','Chỗ để đồ','Lòng tin và cách xử lý đồ hỏng','Tìm tình nguyện viên'], c:2, e:'The hard part is not the equipment but the trust.' },
    { q:'Thư viện tồn tại lâu là thư viện làm gì?', o:['Phạt nặng người trả muộn','Coi hỏng hóc là chi phí vận hành và dự trù trước','Chỉ cho hội viên lâu năm mượn','Đòi đặt cọc lớn'], c:1, e:'treats this as an ordinary running cost… budgets for repairs.' },
    { q:'Kết quả rõ ràng nhất mà các dự án này tạo ra là gì?', o:['Lợi nhuận cao','Ít rác, chi phí rẻ hơn và tình làng nghĩa xóm','Nhiều việc làm','Giá nhà tăng'], c:1, e:'less waste, cheaper household projects, and a slow accumulation of… familiarity.' }
  ],
  after:'Viết đoạn 100 từ trả lời: một «thư viện đồ vật» có hợp với khu bạn ở không? Dùng ít nhất ba từ khoá của bài.' },

{ lang:'en', lv:'b2', mins:5, cat:'Khoa học', title:'What the Nose Remembers', vi:'Điều chiếc mũi ghi nhớ',
  intro:'Bài đọc B2 về trí nhớ và giác quan. Chùm từ trọng tâm: mùi, ký ức, thần kinh, gợi nhớ.',
  text:[
    'Smell is the only sense that reaches the brain without passing through the relay station that filters everything else. Sight, sound and touch are all routed through the thalamus first. Odour goes almost directly to the regions that handle emotion and memory, and it arrives before the conscious mind has had time to comment.',
    'This explains an experience most people recognise. A particular soap, a corridor, the inside of an old book, and you are eleven years old for half a second. The memory is not more accurate than any other; it is simply faster and comes with the feeling attached.',
    'Researchers who study this describe smell memories as unusually resistant to being overwritten. A visual memory rehearsed many times drifts towards the version you last told. Odour-triggered memories are rehearsed rarely, because the trigger is rare, so they arrive comparatively untouched.',
    'The practical use is limited but real. Clinics working with older patients sometimes keep boxes of ordinary household smells — tar soap, camphor, pipe tobacco — not to test memory but to open a conversation that questions alone had failed to start.'
  ],
  tr:[
    'Khứu giác là giác quan duy nhất đi tới não mà không qua trạm trung chuyển vốn lọc mọi thứ khác. Thị giác, thính giác và xúc giác đều được dẫn qua đồi thị trước. Mùi thì đi gần như thẳng tới những vùng phụ trách cảm xúc và ký ức, và nó đến trước khi ý thức kịp bình luận gì.',
    'Điều đó giải thích một trải nghiệm mà phần lớn mọi người đều nhận ra. Một loại xà phòng nào đó, một hành lang, mùi bên trong một cuốn sách cũ, và bạn trở lại tuổi mười một trong nửa giây. Ký ức ấy không chính xác hơn ký ức nào khác; nó chỉ nhanh hơn và đến kèm luôn cảm xúc.',
    'Các nhà nghiên cứu mô tả ký ức mùi là loại khó bị ghi đè một cách khác thường. Một ký ức hình ảnh được ôn lại nhiều lần sẽ trôi dần về phiên bản bạn kể lần gần nhất. Ký ức do mùi khơi dậy thì ít khi được ôn lại, vì tác nhân khơi dậy hiếm, nên chúng đến trong trạng thái tương đối nguyên vẹn.',
    'Ứng dụng thực tế có hạn nhưng là thật. Một số phòng khám làm việc với người cao tuổi giữ những hộp mùi gia dụng thông thường — xà phòng nhựa thông, long não, thuốc lá tẩu — không phải để kiểm tra trí nhớ mà để mở ra một cuộc trò chuyện mà những câu hỏi suông đã không mở nổi.'
  ],
  keys:[
    { w:'sense', r:'/sens/', vi:'giác quan' },
    { w:'odour', r:'/ˈəʊdə/', vi:'mùi', note:'Mỹ viết odor.' },
    { w:'conscious', r:'/ˈkɒnʃəs/', vi:'thuộc ý thức, tỉnh táo' },
    { w:'trigger', r:'/ˈtrɪɡə/', vi:'tác nhân khơi dậy; kích hoạt' },
    { w:'overwrite', r:'/ˌəʊvəˈraɪt/', vi:'ghi đè lên' },
    { w:'rehearse', r:'/rɪˈhɜːs/', vi:'ôn lại, diễn tập lại' },
    { w:'drift', r:'/drɪft/', vi:'trôi dần' },
    { w:'untouched', r:'/ʌnˈtʌtʃt/', vi:'còn nguyên vẹn' }
  ],
  qs:[
    { q:'Điều gì làm khứu giác khác các giác quan còn lại?', o:['Nó nhạy hơn','Nó tới não không qua đồi thị','Nó chỉ hoạt động ban đêm','Nó chậm hơn'], c:1, e:'Đoạn 1: Sight, sound and touch are all routed through the thalamus first.' },
    { q:'Ký ức do mùi gợi lên khác ở chỗ nào?', o:['Chính xác hơn','Nhanh hơn và kèm cảm xúc','Dài hơn','Dễ kể lại hơn'], c:1, e:'not more accurate… simply faster and comes with the feeling attached.' },
    { q:'Vì sao ký ức mùi ít bị ghi đè?', o:['Vì não bảo vệ chúng','Vì tác nhân khơi dậy hiếm nên ít được ôn lại','Vì chúng mới hơn','Vì chúng ít cảm xúc'], c:1, e:'rehearsed rarely, because the trigger is rare.' },
    { q:'Phòng khám dùng hộp mùi để làm gì?', o:['Kiểm tra trí nhớ','Chẩn đoán bệnh','Mở đầu câu chuyện với bệnh nhân','Huấn luyện khứu giác'], c:2, e:'not to test memory but to open a conversation.' }
  ],
  after:'Chọn một mùi gợi cho bạn một ký ức, viết 80 từ mô tả, dùng trigger và rehearse.' },

{ lang:'en', lv:'b2', mins:5, cat:'Học tập', title:'Reading Twice Is Not Studying', vi:'Đọc lại hai lần không phải là học',
  intro:'Bài đọc B2 về phương pháp học. Chùm từ trọng tâm: ôn tập, gợi nhớ, ảo tưởng thành thạo.',
  text:[
    'Ask a room of students how they revise and most will say the same thing: they read the material again, and highlight it. Both feel productive. Both are among the least effective methods that have been measured.',
    'The problem is a mismatch between what feels easy and what is actually being learned. Rereading makes a text feel familiar, and the brain quietly converts familiarity into a sense of knowing. Researchers call this the illusion of competence: you recognise the page, so you assume you could reproduce it. Recognition and recall are different abilities.',
    'What works is uncomfortable. Close the book and write down everything you can remember. Answer questions before you feel ready. Space your sessions out so that you have half forgotten the material and have to retrieve it with effort. Every one of these feels worse than rereading, and every one of them produces stronger retention weeks later.',
    'This is why students often revise for many hours and still perform poorly. The hours were real. The difficulty, which is where most of the learning actually happens, was carefully avoided.'
  ],
  tr:[
    'Hỏi một phòng đầy sinh viên xem họ ôn thi thế nào, phần lớn sẽ trả lời giống nhau: họ đọc lại tài liệu và tô màu nó. Cả hai đều cho cảm giác hiệu quả. Cả hai đều nằm trong nhóm phương pháp kém hiệu quả nhất từng được đo đạc.',
    'Vấn đề là sự lệch pha giữa cái cảm thấy dễ và cái thực sự được học. Đọc lại làm một văn bản trở nên quen thuộc, và bộ não âm thầm chuyển sự quen thuộc thành cảm giác đã biết. Các nhà nghiên cứu gọi đó là ảo tưởng thành thạo: bạn nhận ra trang sách, nên bạn cho rằng mình tái tạo lại được nó. Nhận ra và nhớ lại là hai năng lực khác nhau.',
    'Thứ có tác dụng thì lại khó chịu. Hãy gấp sách lại và viết ra mọi thứ bạn nhớ được. Hãy trả lời câu hỏi trước khi thấy mình sẵn sàng. Hãy giãn các buổi học ra để bạn đã quên đi một nửa và phải gắng sức truy xuất lại. Cách nào cũng cho cảm giác tệ hơn đọc lại, và cách nào cũng cho khả năng nhớ mạnh hơn hẳn sau vài tuần.',
    'Đó là lý do sinh viên ôn nhiều giờ mà vẫn làm bài kém. Số giờ là có thật. Còn phần khó chịu, vốn là nơi phần lớn việc học thực sự diễn ra, thì đã bị né tránh rất cẩn thận.'
  ],
  keys:[
    { w:'revise', r:'/rɪˈvaɪz/', vi:'ôn tập (Anh)', note:'Mỹ nói review hoặc study for.' },
    { w:'highlight', r:'/ˈhaɪlaɪt/', vi:'tô màu làm nổi bật' },
    { w:'mismatch', r:'/ˈmɪsmætʃ/', vi:'sự lệch pha, không khớp' },
    { w:'familiarity', r:'/fəˌmɪliˈærəti/', vi:'sự quen thuộc' },
    { w:'illusion', r:'/ɪˈluːʒn/', vi:'ảo tưởng' },
    { w:'recall', r:'/rɪˈkɔːl/', vi:'nhớ lại, truy xuất', note:'Khác recognition: nhận ra khi thấy lại.' },
    { w:'retrieve', r:'/rɪˈtriːv/', vi:'truy xuất lại' },
    { w:'retention', r:'/rɪˈtenʃn/', vi:'khả năng nhớ lâu' }
  ],
  qs:[
    { q:'Hai cách ôn tập phổ biến mà bài phê phán là gì?', o:['Đọc lại và tô màu','Làm đề và học nhóm','Ghi âm và nghe lại','Chép tay và vẽ sơ đồ'], c:0, e:'they read the material again, and highlight it.' },
    { q:'«Ảo tưởng thành thạo» nghĩa là gì?', o:['Tin mình giỏi hơn thực tế vì thấy quen mắt','Học quá nhiều nên mệt','Quên hết sau kỳ thi','Chỉ nhớ được hình ảnh'], c:0, e:'you recognise the page, so you assume you could reproduce it.' },
    { q:'Cách học nào được bài coi là hiệu quả?', o:['Đọc chậm hơn','Gấp sách lại tự viết ra, trả lời sớm, giãn buổi học','Tô nhiều màu hơn','Học liên tục không nghỉ'], c:1, e:'Cả đoạn 3 liệt kê ba việc: viết lại, trả lời sớm, giãn cách.' },
    { q:'Vì sao ôn nhiều giờ mà vẫn kém?', o:['Vì thiếu tài liệu','Vì né tránh phần khó, nơi việc học thật sự diễn ra','Vì ngủ ít','Vì đề thi quá khó'], c:1, e:'The difficulty… was carefully avoided.' }
  ],
  after:'Áp dụng ngay: gấp trang này lại và viết ra bốn ý chính của bài, rồi mở ra đối chiếu.' },

{ lang:'en', lv:'b2', mins:4, cat:'Môi trường', title:'The River That Came Back', vi:'Dòng sông trở lại',
  intro:'Bài đọc B2 về phục hồi môi trường. Chùm từ trọng tâm: ô nhiễm, phục hồi, hệ sinh thái.',
  text:[
    'In 1957 a museum survey declared the tidal Thames biologically dead. No fish were recorded along a stretch of more than sixty kilometres. The water carried untreated sewage from a city that had outgrown its Victorian pipes by a factor of four.',
    'The recovery was neither quick nor accidental. New treatment works were built through the sixties and seventies; discharge limits were tightened and, more importantly, enforced. Oxygen levels rose slowly, then crossed the threshold at which fish eggs survive.',
    'Today well over a hundred fish species have been recorded in the estuary, along with seals, porpoises and the occasional bewildered seahorse. None of this makes the river clean in the way a mountain stream is clean. Storm overflows still discharge into it, and plastic collects on the foreshore at every low tide.',
    'What the Thames demonstrates is narrower and more useful than a happy ending. Ecosystems that appear finished are often only suppressed, and they can return within a human lifetime — provided the pressure that suppressed them is genuinely removed rather than merely moved somewhere less visible.'
  ],
  tr:[
    'Năm 1957 một khảo sát của bảo tàng tuyên bố đoạn sông Thames chịu thuỷ triều đã chết về mặt sinh học. Không ghi nhận được con cá nào dọc một đoạn dài hơn sáu mươi ki-lô-mét. Dòng nước mang theo nước thải chưa xử lý từ một thành phố đã lớn gấp bốn lần hệ thống ống thời Victoria.',
    'Sự hồi phục không nhanh và cũng không tình cờ. Các nhà máy xử lý mới được xây suốt thập niên sáu mươi và bảy mươi; giới hạn xả thải được siết chặt và, quan trọng hơn, được thực thi. Nồng độ oxy tăng chậm, rồi vượt qua ngưỡng mà trứng cá sống được.',
    'Ngày nay hơn một trăm loài cá đã được ghi nhận ở cửa sông, cùng với hải cẩu, cá heo chuột và thi thoảng một con cá ngựa lạc lối. Chẳng điều nào trong số đó khiến dòng sông sạch theo cách một con suối trên núi là sạch. Nước tràn khi mưa bão vẫn xả vào sông, và nhựa vẫn tụ trên bãi bồi mỗi kỳ triều xuống.',
    'Điều sông Thames chứng minh hẹp hơn và hữu ích hơn một cái kết có hậu. Những hệ sinh thái trông như đã kết thúc thường chỉ đang bị đè nén, và chúng có thể trở lại trong vòng một đời người — với điều kiện áp lực đè nén chúng thật sự được gỡ bỏ chứ không phải chỉ được chuyển tới chỗ khác ít ai nhìn thấy.'
  ],
  keys:[
    { w:'sewage', r:'/ˈsuːɪdʒ/', vi:'nước thải sinh hoạt' },
    { w:'discharge', r:'/dɪsˈtʃɑːdʒ/', vi:'xả thải', note:'Danh từ đổi trọng âm: /ˈdɪstʃɑːdʒ/.' },
    { w:'enforce', r:'/ɪnˈfɔːs/', vi:'thực thi (luật)' },
    { w:'threshold', r:'/ˈθreʃhəʊld/', vi:'ngưỡng' },
    { w:'estuary', r:'/ˈestʃuəri/', vi:'cửa sông' },
    { w:'suppress', r:'/səˈpres/', vi:'đè nén, kìm hãm' },
    { w:'ecosystem', r:'/ˈiːkəʊsɪstəm/', vi:'hệ sinh thái' },
    { w:'foreshore', r:'/ˈfɔːʃɔː/', vi:'bãi bồi ven sông lộ ra khi triều xuống' }
  ],
  qs:[
    { q:'Năm 1957 sông Thames được mô tả thế nào?', o:['Sạch trở lại','Chết về mặt sinh học','Ô nhiễm nhẹ','Bị cấm đánh cá'], c:1, e:'declared the tidal Thames biologically dead.' },
    { q:'Yếu tố nào được bài nhấn mạnh là quan trọng hơn?', o:['Xây nhà máy xử lý','Siết giới hạn xả thải và THỰC THI nó','Trồng cây hai bên bờ','Cấm tàu thuyền'], c:1, e:'tightened and, more importantly, enforced — chữ enforced được nhấn.' },
    { q:'Bài có coi sông Thames hiện nay là sạch hoàn toàn không?', o:['Có','Không, vẫn còn nước tràn và rác nhựa','Chỉ sạch vào mùa hè','Không nhắc tới'], c:1, e:'Đoạn 3: Storm overflows still discharge… plastic collects on the foreshore.' },
    { q:'Bài học chính rút ra là gì?', o:['Sông nào cũng tự hồi phục','Hệ sinh thái bị đè nén có thể trở lại nếu áp lực được gỡ thật','Không nên can thiệp vào tự nhiên','Công nghệ giải quyết mọi thứ'], c:1, e:'Đoạn cuối: often only suppressed… provided the pressure… is genuinely removed.' }
  ],
  after:'So sánh với một dòng sông ở Việt Nam mà bạn biết: viết 100 từ, dùng discharge · enforce · ecosystem.' },

/* ================= TIẾNG HÀN ================= */
{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'우리 동네 시장', vi:'Khu chợ gần nhà tôi',
  intro:'Bài đọc sơ cấp, câu ngắn và lặp cấu trúc. Chùm từ trọng tâm: chợ, mua bán, giá cả.',
  text:[
    '저는 하노이에 살아요. 우리 집 앞에 작은 시장이 있어요. 아침 다섯 시에 문을 열어요.',
    '어머니는 매일 시장에 가요. 저는 토요일에만 같이 가요. 시장에는 과일, 채소, 생선이 많아요.',
    '과일 아주머니는 저를 알아요. 그래서 항상 조금 더 주세요. 저는 감사합니다 하고 인사해요.',
    '시장은 조금 시끄러워요. 하지만 값이 싸고 물건이 신선해요. 그래서 우리 가족은 마트보다 시장을 더 좋아해요.'
  ],
  tr:[
    'Tôi sống ở Hà Nội. Trước nhà tôi có một khu chợ nhỏ. Chợ mở cửa lúc năm giờ sáng.',
    'Mẹ tôi đi chợ mỗi ngày. Tôi thì chỉ đi cùng vào thứ Bảy. Ở chợ có nhiều hoa quả, rau và cá.',
    'Cô bán hoa quả biết tôi. Vì thế cô luôn cho thêm một chút. Tôi cảm ơn và chào cô.',
    'Chợ hơi ồn. Nhưng giá rẻ và hàng tươi. Vì thế gia đình tôi thích chợ hơn siêu thị.'
  ],
  keys:[
    { w:'시장', r:'sijang', vi:'chợ' },
    { w:'과일', r:'gwail', vi:'hoa quả' },
    { w:'채소', r:'chaeso', vi:'rau' },
    { w:'생선', r:'saengseon', vi:'cá (để ăn)' },
    { w:'값', r:'gap', vi:'giá' },
    { w:'싸다', r:'ssada', vi:'rẻ' },
    { w:'신선하다', r:'sinseonhada', vi:'tươi' },
    { w:'시끄럽다', r:'sikkeureopda', vi:'ồn ào' }
  ],
  qs:[
    { q:'Chợ mở cửa lúc mấy giờ?', o:['4 giờ','5 giờ','6 giờ','7 giờ'], c:1, e:'아침 다섯 시에 문을 열어요 — năm giờ sáng.' },
    { q:'Người viết đi chợ vào ngày nào?', o:['Mỗi ngày','Chủ nhật','Thứ Bảy','Thứ Hai'], c:2, e:'저는 토요일에만 같이 가요 — chỉ thứ Bảy.' },
    { q:'Vì sao gia đình thích chợ hơn siêu thị?', o:['Vì chợ gần','Vì giá rẻ và hàng tươi','Vì chợ yên tĩnh','Vì có bạn bè'], c:1, e:'값이 싸고 물건이 신선해요.' }
  ],
  after:'Viết 4 câu về chợ hoặc siêu thị gần nhà bạn, dùng 시장 · 값 · 싸다 · 신선하다.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Văn hoá', title:'택배 아저씨의 하루', vi:'Một ngày của anh giao hàng',
  intro:'Bài đọc sơ cấp 2, dùng thì quá khứ và liên từ. Chùm từ trọng tâm: giao hàng, thời gian, mệt mỏi.',
  text:[
    '민수 씨는 택배 기사입니다. 아침 여섯 시에 일어나서 일곱 시에 회사에 갑니다. 회사에서 물건을 차에 싣습니다.',
    '하루에 보통 이백 개쯤 배달합니다. 엘리베이터가 없는 건물이 제일 힘듭니다. 오층까지 계단으로 올라가야 하니까요.',
    '점심은 보통 차 안에서 먹습니다. 시간이 없어서 십오 분 안에 끝냅니다. 그리고 다시 출발합니다.',
    '저녁 여덟 시쯤 일이 끝납니다. 힘들지만 사람들이 «감사합니다» 하고 인사할 때 기분이 좋아집니다. 민수 씨는 이 일을 오 년째 하고 있습니다.'
  ],
  tr:[
    'Anh Min-su là nhân viên giao hàng. Sáu giờ sáng anh dậy, bảy giờ đến công ty. Ở công ty anh chất hàng lên xe.',
    'Một ngày anh thường giao khoảng hai trăm kiện. Toà nhà không có thang máy là vất vả nhất. Vì phải leo bộ lên tận tầng năm.',
    'Bữa trưa anh thường ăn trong xe. Vì không có thời gian nên anh ăn xong trong mười lăm phút. Rồi lại xuất phát.',
    'Khoảng tám giờ tối thì xong việc. Vất vả nhưng khi mọi người chào «cảm ơn» thì anh thấy vui hơn. Anh Min-su làm việc này đã sang năm thứ năm.'
  ],
  keys:[
    { w:'택배', r:'taekbae', vi:'giao hàng tận nơi' },
    { w:'싣다', r:'sitda', vi:'chất, xếp lên xe' },
    { w:'배달하다', r:'baedalhada', vi:'giao hàng' },
    { w:'엘리베이터', r:'ellibeiteo', vi:'thang máy' },
    { w:'계단', r:'gyedan', vi:'cầu thang' },
    { w:'힘들다', r:'himdeulda', vi:'vất vả' },
    { w:'출발하다', r:'chulbalhada', vi:'xuất phát' },
    { w:'-째', r:'-jjae', vi:'thứ… (đếm thứ tự thời gian)', note:'오 년째 = sang năm thứ năm.' }
  ],
  qs:[
    { q:'Anh Min-su dậy lúc mấy giờ?', o:['5 giờ','6 giờ','7 giờ','8 giờ'], c:1, e:'아침 여섯 시에 일어나서.' },
    { q:'Điều gì vất vả nhất với anh?', o:['Trời mưa','Toà nhà không có thang máy','Khách hàng khó tính','Xe hỏng'], c:1, e:'엘리베이터가 없는 건물이 제일 힘듭니다.' },
    { q:'Anh ăn trưa ở đâu và trong bao lâu?', o:['Ở quán, 30 phút','Trong xe, 15 phút','Ở công ty, 1 tiếng','Không ăn trưa'], c:1, e:'점심은 보통 차 안에서… 십오 분 안에 끝냅니다.' },
    { q:'Điều gì khiến anh thấy vui?', o:['Lương cao','Khi khách nói cảm ơn','Khi trời mát','Khi ít hàng'], c:1, e:'«감사합니다» 하고 인사할 때 기분이 좋아집니다.' }
  ],
  after:'Kể một ngày làm việc của bạn bằng 5 câu, dùng -아서/어서 và -지만.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Xã hội', title:'혼자 사는 사람들', vi:'Những người sống một mình',
  intro:'Bài đọc trung cấp về thay đổi xã hội. Chùm từ trọng tâm: hộ độc thân, xu hướng, thay đổi.',
  text:[
    '한국에서 일인 가구는 이제 가장 흔한 형태의 가구가 되었다. 30년 전만 해도 네 명이 함께 사는 집이 기준이었지만, 지금은 혼자 사는 집이 전체의 삼분의 일을 넘는다.',
    '이런 변화는 상품에도 그대로 나타난다. 편의점에는 한 끼 분량으로 포장된 반찬이 늘었고, 가전제품도 작아졌다. 「혼밥」, 「혼술」 같은 말이 생긴 것도 같은 이유에서다.',
    '문제는 외로움이 아니라 위기에 대비하기 어렵다는 점이다. 갑자기 아플 때 도와줄 사람이 가까이 없으면 작은 일도 큰 일이 된다. 그래서 지자체마다 안부를 확인하는 서비스를 운영한다.',
    '전문가들은 일인 가구를 문제로만 볼 필요는 없다고 말한다. 다만 주택, 의료, 복지 제도가 여전히 네 명 가족을 기준으로 설계되어 있다는 점은 손봐야 한다고 지적한다.'
  ],
  tr:[
    'Ở Hàn Quốc, hộ một người giờ đã trở thành loại hộ gia đình phổ biến nhất. Ba mươi năm trước, nhà bốn người còn là chuẩn, nhưng hiện nay nhà một người chiếm hơn một phần ba tổng số.',
    'Thay đổi đó hiện ra rõ ngay trên hàng hoá. Cửa hàng tiện lợi có thêm nhiều món ăn kèm đóng gói cho một bữa, đồ điện gia dụng cũng nhỏ lại. Những từ như «ăn một mình», «uống một mình» ra đời cũng vì lý do đó.',
    'Vấn đề không phải là nỗi cô đơn mà là khó xoay xở khi có sự cố. Khi đột nhiên ốm mà không có ai ở gần giúp thì việc nhỏ cũng thành việc lớn. Vì thế mỗi chính quyền địa phương đều vận hành dịch vụ hỏi thăm tình hình.',
    'Các chuyên gia nói không nhất thiết chỉ nhìn hộ một người như một vấn đề. Có điều họ chỉ ra rằng chế độ nhà ở, y tế và phúc lợi vẫn đang được thiết kế lấy gia đình bốn người làm chuẩn, và điều đó thì cần sửa.'
  ],
  keys:[
    { w:'일인 가구', r:'irin gagu', vi:'hộ một người' },
    { w:'흔하다', r:'heunhada', vi:'phổ biến, thường gặp' },
    { w:'기준', r:'gijun', vi:'tiêu chuẩn, cái chuẩn' },
    { w:'나타나다', r:'natanada', vi:'xuất hiện, hiện ra' },
    { w:'대비하다', r:'daebihada', vi:'chuẩn bị đối phó' },
    { w:'지자체', r:'jijache', vi:'chính quyền địa phương' },
    { w:'안부', r:'anbu', vi:'tin tức, tình hình sức khoẻ' },
    { w:'지적하다', r:'jijeokhada', vi:'chỉ ra, nêu vấn đề' }
  ],
  qs:[
    { q:'Hộ một người hiện chiếm bao nhiêu?', o:['Một phần tư','Hơn một phần ba','Một nửa','Hai phần ba'], c:1, e:'전체의 삼분의 일을 넘는다.' },
    { q:'Thay đổi đó thể hiện trên hàng hoá thế nào?', o:['Hàng đắt hơn','Đồ ăn đóng gói một bữa, đồ điện nhỏ lại','Hàng nhập khẩu nhiều hơn','Cửa hàng mở lâu hơn'], c:1, e:'한 끼 분량으로 포장된 반찬이 늘었고, 가전제품도 작아졌다.' },
    { q:'Theo bài, vấn đề chính là gì?', o:['Nỗi cô đơn','Khó xoay xở khi có sự cố','Giá nhà cao','Thiếu bạn bè'], c:1, e:'문제는 외로움이 아니라 위기에 대비하기 어렵다는 점이다.' },
    { q:'Chuyên gia đề nghị sửa điều gì?', o:['Khuyến khích kết hôn','Chế độ nhà ở, y tế, phúc lợi vẫn lấy gia đình 4 người làm chuẩn','Giảm giá đồ ăn','Tăng dịch vụ hỏi thăm'], c:1, e:'Đoạn cuối: 네 명 가족을 기준으로 설계되어 있다는 점은 손봐야 한다.' }
  ],
  after:'Viết 6 câu về hộ một người ở Việt Nam, dùng -고 있다 và -(으)ㄴ/는 점.' },

/* ================= TIẾNG TRUNG ================= */
{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'我的一天', vi:'Một ngày của tôi',
  intro:'Bài đọc HSK1, chỉ dùng chữ và mẫu câu cơ bản. Chùm từ trọng tâm: thời gian, hoạt động hằng ngày.',
  text:[
    '我叫阮明，是越南人。我今年二十岁，在河内学习汉语。',
    '我每天六点半起床。七点吃早饭，八点去学校。我很喜欢我的老师，她说话很慢，我都听得懂。',
    '中午我和朋友在学校吃饭。我们常常说汉语，说得不太好，可是很高兴。',
    '晚上我在家看中国电影。看电影的时候我学到很多新词。我想明年去中国看看。'
  ],
  tr:[
    'Tôi tên Nguyễn Minh, là người Việt Nam. Năm nay tôi hai mươi tuổi, học tiếng Trung ở Hà Nội.',
    'Mỗi ngày tôi dậy lúc sáu rưỡi. Bảy giờ ăn sáng, tám giờ đến trường. Tôi rất thích cô giáo của tôi, cô nói rất chậm, tôi đều nghe hiểu được.',
    'Buổi trưa tôi ăn cơm với bạn ở trường. Chúng tôi thường nói tiếng Trung, nói không giỏi lắm, nhưng rất vui.',
    'Buổi tối tôi xem phim Trung Quốc ở nhà. Lúc xem phim tôi học được nhiều từ mới. Tôi muốn sang năm đi Trung Quốc xem thử.'
  ],
  keys:[
    { w:'起床', r:'qǐchuáng', vi:'ngủ dậy' },
    { w:'早饭', r:'zǎofàn', vi:'bữa sáng' },
    { w:'学校', r:'xuéxiào', vi:'trường học' },
    { w:'老师', r:'lǎoshī', vi:'giáo viên' },
    { w:'听得懂', r:'tīng de dǒng', vi:'nghe hiểu được' },
    { w:'常常', r:'chángcháng', vi:'thường xuyên' },
    { w:'高兴', r:'gāoxìng', vi:'vui' },
    { w:'新词', r:'xīncí', vi:'từ mới' }
  ],
  qs:[
    { q:'Người viết dậy lúc mấy giờ?', o:['6 giờ','6 giờ rưỡi','7 giờ','8 giờ'], c:1, e:'我每天六点半起床.' },
    { q:'Vì sao bạn ấy thích cô giáo?', o:['Cô trẻ','Cô nói chậm, dễ nghe hiểu','Cô cho điểm cao','Cô là người Việt'], c:1, e:'她说话很慢，我都听得懂.' },
    { q:'Buổi tối bạn ấy làm gì?', o:['Đi chơi','Xem phim Trung Quốc ở nhà','Học ở trường','Đi làm thêm'], c:1, e:'晚上我在家看中国电影.' }
  ],
  after:'Viết 4 câu về một ngày của bạn, dùng 每天 · 常常 · 的时候.' },

{ lang:'zh', lv:'hsk3', mins:4, cat:'Văn hoá', title:'外卖小哥的路线', vi:'Lộ trình của anh giao đồ ăn',
  intro:'Bài đọc HSK3 về công việc quen thuộc. Chùm từ trọng tâm: giao hàng, thời gian, đường phố.',
  text:[
    '每天中午十一点，李强的手机就开始响个不停。他是外卖骑手，一天要送四五十单。',
    '他最怕的不是堵车，是找不到门。有的小区有十几栋楼，号码却不按顺序排。他常常要打电话问：您在几号楼？',
    '公司按时间给他打分，晚一分钟也会扣钱。所以他每天早上都会先看一遍地图，把难找的地方记下来。',
    '李强说这份工作辛苦，但是自由。他打算再做两年，存够钱以后回老家开一家小面馆。'
  ],
  tr:[
    'Mười một giờ trưa mỗi ngày, điện thoại của Lý Cường bắt đầu reo không dứt. Anh là tài xế giao đồ ăn, một ngày phải giao bốn năm mươi đơn.',
    'Thứ anh sợ nhất không phải tắc đường mà là không tìm thấy cửa. Có khu chung cư mười mấy toà, mà số nhà lại không xếp theo thứ tự. Anh thường phải gọi điện hỏi: anh ở toà số mấy ạ?',
    'Công ty chấm điểm anh theo thời gian, muộn một phút cũng bị trừ tiền. Vì thế mỗi sáng anh đều xem trước bản đồ một lượt, ghi lại những chỗ khó tìm.',
    'Lý Cường nói công việc này vất vả nhưng tự do. Anh dự định làm thêm hai năm nữa, dành đủ tiền rồi về quê mở một quán mì nhỏ.'
  ],
  keys:[
    { w:'外卖', r:'wàimài', vi:'đồ ăn giao tận nơi' },
    { w:'骑手', r:'qíshǒu', vi:'tài xế xe máy giao hàng' },
    { w:'堵车', r:'dǔchē', vi:'tắc đường' },
    { w:'小区', r:'xiǎoqū', vi:'khu dân cư, chung cư' },
    { w:'顺序', r:'shùnxù', vi:'thứ tự' },
    { w:'扣钱', r:'kòu qián', vi:'trừ tiền' },
    { w:'辛苦', r:'xīnkǔ', vi:'vất vả' },
    { w:'打算', r:'dǎsuàn', vi:'dự định' }
  ],
  qs:[
    { q:'Lý Cường sợ nhất điều gì?', o:['Tắc đường','Không tìm thấy cửa nhà khách','Trời mưa','Xe hỏng'], c:1, e:'他最怕的不是堵车，是找不到门.' },
    { q:'Công ty chấm điểm anh dựa vào gì?', o:['Số đơn','Thời gian giao','Đánh giá của khách','Quãng đường'], c:1, e:'公司按时间给他打分.' },
    { q:'Anh làm gì mỗi sáng để đỡ vất vả?', o:['Đổ xăng đầy','Xem trước bản đồ và ghi chỗ khó tìm','Gọi cho khách','Ăn sáng no'], c:1, e:'先看一遍地图，把难找的地方记下来.' },
    { q:'Dự định tương lai của anh là gì?', o:['Đổi công ty','Về quê mở quán mì','Học tiếp','Mua ô tô'], c:1, e:'回老家开一家小面馆.' }
  ],
  after:'Dùng 把 viết 3 câu về việc bạn chuẩn bị trước khi làm gì đó.' },

/* ================= TIẾNG NHẬT ================= */
{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'コンビニの朝', vi:'Buổi sáng ở cửa hàng tiện lợi',
  intro:'Bài đọc N5, câu ngắn, kanji cơ bản. Chùm từ trọng tâm: buổi sáng, mua sắm, thói quen.',
  text:[
    'わたしは まいあさ 七時に いえを 出ます。えきの まえに コンビニが あります。',
    'そこで おにぎりと お茶を 買います。おにぎりは 百五十円、お茶は 百二十円です。',
    'てんいんの 人は いつも 「おはようございます」と 言います。わたしも 「おはようございます」と 言います。',
    'コンビニは 二十四時間 あいています。よるも あかるいので、ひとりで 歩いても こわくないです。'
  ],
  tr:[
    'Sáng nào tôi cũng ra khỏi nhà lúc bảy giờ. Trước ga có một cửa hàng tiện lợi.',
    'Ở đó tôi mua cơm nắm và trà. Cơm nắm một trăm năm mươi yên, trà một trăm hai mươi yên.',
    'Nhân viên lúc nào cũng nói «Chào buổi sáng». Tôi cũng nói «Chào buổi sáng».',
    'Cửa hàng mở hai mươi tư giờ. Ban đêm cũng sáng nên đi một mình cũng không sợ.'
  ],
  keys:[
    { w:'出ます', r:'demasu', vi:'ra khỏi, đi ra' },
    { w:'駅', r:'eki', vi:'nhà ga' },
    { w:'買います', r:'kaimasu', vi:'mua' },
    { w:'店員', r:'ten\'in', vi:'nhân viên bán hàng' },
    { w:'言います', r:'iimasu', vi:'nói' },
    { w:'開いて います', r:'aite imasu', vi:'đang mở cửa' },
    { w:'明るい', r:'akarui', vi:'sáng' },
    { w:'こわい', r:'kowai', vi:'đáng sợ' }
  ],
  qs:[
    { q:'Người viết ra khỏi nhà lúc mấy giờ?', o:['6 giờ','7 giờ','8 giờ','9 giờ'], c:1, e:'まいあさ 七時に いえを 出ます.' },
    { q:'Bạn ấy mua gì?', o:['Bánh mì và cà phê','Cơm nắm và trà','Mì và nước','Cơm hộp'], c:1, e:'おにぎりと お茶を 買います.' },
    { q:'Vì sao ban đêm đi một mình không sợ?', o:['Có bạn đi cùng','Vì cửa hàng sáng đèn','Vì gần nhà','Vì có cảnh sát'], c:1, e:'よるも あかるいので.' }
  ],
  after:'Viết 4 câu về buổi sáng của bạn, dùng ～ます và ～ので.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Văn hoá', title:'ごみの日', vi:'Ngày đổ rác',
  intro:'Bài đọc N4 về đời sống Nhật. Chùm từ trọng tâm: phân loại, quy tắc, hàng xóm.',
  text:[
    '日本に 来て 一番 おどろいた ことは、ごみの ルールです。もえる ごみは 月曜日と 木曜日、ペットボトルは 水曜日、と 曜日が 決まって います。',
    'はじめの 週、わたしは 火曜日に ごみを 出して しまいました。つぎの 日、ふくろに 紙が はって ありました。「この 日では ありません」と 書いて ありました。',
    'はずかしかったですが、となりの おばあさんが 表を くれました。どの ごみを いつ 出すか、絵で 書いて ある 表です。',
    '今では まちがえません。ペットボトルの ラベルを はがして、あらって、つぶす。めんどうですが、なれると 気に なりません。'
  ],
  tr:[
    'Điều làm tôi ngạc nhiên nhất khi sang Nhật là quy định về rác. Rác cháy được thì thứ Hai và thứ Năm, chai nhựa thì thứ Tư — thứ trong tuần được quy định sẵn.',
    'Tuần đầu tiên, tôi lỡ đem rác ra vào thứ Ba. Hôm sau, trên túi rác có dán một tờ giấy. Trên đó viết «Không phải ngày này».',
    'Tôi thấy ngượng, nhưng bà cụ nhà bên đã cho tôi một cái bảng. Là cái bảng vẽ hình, chỉ rõ loại rác nào thì đổ vào ngày nào.',
    'Bây giờ thì tôi không nhầm nữa. Bóc nhãn chai nhựa, rửa sạch, bóp dẹp. Phiền thật đấy, nhưng quen rồi thì cũng không thấy gì.'
  ],
  keys:[
    { w:'ごみ', r:'gomi', vi:'rác' },
    { w:'決まって います', r:'kimatte imasu', vi:'đã được quy định sẵn' },
    { w:'出す', r:'dasu', vi:'đem ra, nộp' },
    { w:'はって あります', r:'hatte arimasu', vi:'được dán sẵn (trạng thái)' },
    { w:'はずかしい', r:'hazukashii', vi:'ngượng' },
    { w:'表', r:'hyō', vi:'bảng biểu' },
    { w:'はがす', r:'hagasu', vi:'bóc ra' },
    { w:'めんどう', r:'mendō', vi:'phiền phức' }
  ],
  qs:[
    { q:'Điều gì làm người viết ngạc nhiên nhất?', o:['Giá cả','Quy định về rác','Giao thông','Thời tiết'], c:1, e:'一番 おどろいた ことは、ごみの ルールです.' },
    { q:'Chuyện gì xảy ra ở tuần đầu tiên?', o:['Bị phạt tiền','Đem rác sai ngày và bị dán giấy nhắc','Quên đổ rác','Bị hàng xóm mắng'], c:1, e:'火曜日に ごみを 出して しまいました… 紙が はって ありました.' },
    { q:'Bà cụ hàng xóm đã làm gì?', o:['Đổ rác hộ','Cho một cái bảng có hình hướng dẫn','Gọi ban quản lý','Dạy tiếng Nhật'], c:1, e:'表を くれました… 絵で 書いて ある 表です.' },
    { q:'Ba bước xử lý chai nhựa là gì?', o:['Bóc nhãn, rửa, bóp dẹp','Rửa, phơi, buộc','Cắt, đốt, chôn','Gấp, dán, dán nhãn'], c:0, e:'ラベルを はがして、あらって、つぶす.' }
  ],
  after:'Dùng ～て しまいました kể một lần bạn lỡ làm sai điều gì đó.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Xã hội', title:'閉じない本屋', vi:'Hiệu sách không chịu đóng cửa',
  intro:'Bài đọc N3 về một cửa hàng nhỏ. Chùm từ trọng tâm: kinh doanh, cộng đồng, kiên trì.',
  text:[
    '駅前の 商店街に、五十年 続いて いる 小さな 本屋が ある。まわりの 店は 次々に 閉まり、今 残って いるのは 三軒だけだ。',
    '店主の 田中さんは 「本だけでは やって いけない」と 認める。それでも 店を 閉めない 理由は、毎週 土曜日の 読書会に ある。',
    '読書会は 十二年前、常連の 高校生 三人と 始めた。今は 六十代の 人も、小学生も 来る。本を 買わなくても かまわない。ただ 話を しに 来る 人も 多い。',
    '田中さんは 言う。「うちは 本屋と いうより、たまたま 本が たくさん ある 場所かも しれません。それでも 誰かが ここに 来る かぎり、開けて おきます。」'
  ],
  tr:[
    'Trong khu phố buôn bán trước ga có một hiệu sách nhỏ đã tồn tại năm mươi năm. Các cửa hàng xung quanh lần lượt đóng cửa, hiện chỉ còn lại ba tiệm.',
    'Ông chủ, ông Tanaka, thừa nhận «chỉ bán sách thì không sống nổi». Vậy mà lý do ông không đóng cửa nằm ở buổi đọc sách chung mỗi thứ Bảy.',
    'Buổi đọc sách bắt đầu mười hai năm trước, cùng ba học sinh cấp ba là khách quen. Giờ có cả người ngoài sáu mươi lẫn học sinh tiểu học tới. Không mua sách cũng chẳng sao. Nhiều người đến chỉ để trò chuyện.',
    'Ông Tanaka nói: «Chỗ này, thay vì gọi là hiệu sách, có lẽ nên gọi là một nơi tình cờ có nhiều sách. Dù vậy, chừng nào còn có người tới đây, tôi vẫn cứ mở cửa.»'
  ],
  keys:[
    { w:'商店街', r:'shōtengai', vi:'khu phố buôn bán' },
    { w:'続いて いる', r:'tsuzuite iru', vi:'đang tiếp diễn, tồn tại liên tục' },
    { w:'閉まる', r:'shimaru', vi:'đóng cửa (tự động)' },
    { w:'店主', r:'tenshu', vi:'chủ cửa hàng' },
    { w:'認める', r:'mitomeru', vi:'thừa nhận' },
    { w:'常連', r:'jōren', vi:'khách quen' },
    { w:'たまたま', r:'tamatama', vi:'tình cờ' },
    { w:'～かぎり', r:'~kagiri', vi:'chừng nào còn…', note:'Đi với thể từ điển hoặc ている.' }
  ],
  qs:[
    { q:'Hiệu sách tồn tại bao lâu rồi?', o:['12 năm','30 năm','50 năm','60 năm'], c:2, e:'五十年 続いて いる 小さな 本屋.' },
    { q:'Ông Tanaka thừa nhận điều gì?', o:['Sách ngày càng đắt','Chỉ bán sách thì không sống nổi','Khách toàn người già','Tiền thuê quá cao'], c:1, e:'「本だけでは やって いけない」と 認める.' },
    { q:'Buổi đọc sách bắt đầu như thế nào?', o:['Do chính quyền tổ chức','Cùng ba học sinh cấp ba là khách quen','Do một trường học đề xuất','Do con ông Tanaka'], c:1, e:'常連の 高校生 三人と 始めた.' },
    { q:'Câu cuối của ông Tanaka có ý gì?', o:['Ông sắp nghỉ','Chừng nào còn người tới thì ông còn mở cửa','Ông muốn bán tiệm','Ông sẽ chuyển sang bán cà phê'], c:1, e:'誰かが ここに 来る かぎり、開けて おきます.' }
  ],
  after:'Dùng ～かぎり viết 3 câu nói về điều bạn sẽ tiếp tục làm.' },

/* ================= TIẾNG NGA ================= */
{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Мой день', vi:'Một ngày của tôi',
  intro:'Bài đọc A1, câu ngắn và thì hiện tại. Chùm từ trọng tâm: thời gian biểu, việc hằng ngày.',
  text:[
    'Меня зовут Куан. Я живу в Ханое. Я студент. Мне двадцать два года.',
    'Я встаю в шесть часов. Потом я пью чай и читаю новости. В семь часов я еду в университет на мотоцикле.',
    'Днём я учусь. Вечером я работаю в кафе три часа. Дома я делаю домашнее задание и слушаю музыку.',
    'В субботу я не работаю. Я гуляю с друзьями или читаю книгу. Я очень люблю субботу.'
  ],
  tr:[
    'Tôi tên là Quân. Tôi sống ở Hà Nội. Tôi là sinh viên. Tôi hai mươi hai tuổi.',
    'Tôi dậy lúc sáu giờ. Sau đó tôi uống trà và đọc tin tức. Bảy giờ tôi đi xe máy đến trường đại học.',
    'Ban ngày tôi học. Buổi tối tôi làm ở quán cà phê ba tiếng. Ở nhà tôi làm bài tập và nghe nhạc.',
    'Thứ Bảy tôi không làm việc. Tôi đi chơi với bạn hoặc đọc sách. Tôi rất thích thứ Bảy.'
  ],
  keys:[
    { w:'встава́ть', r:'vstavát\'', vi:'thức dậy' },
    { w:'пить', r:'pit\'', vi:'uống' },
    { w:'чита́ть', r:'chitát\'', vi:'đọc' },
    { w:'е́хать', r:'jékhat\'', vi:'đi (bằng phương tiện)' },
    { w:'у́чится', r:'úchitsya', vi:'học (thể phản thân)' },
    { w:'рабо́тать', r:'rabótat\'', vi:'làm việc' },
    { w:'гуля́ть', r:'gulyát\'', vi:'đi dạo, đi chơi' },
    { w:'суббо́та', r:'subbóta', vi:'thứ Bảy' }
  ],
  qs:[
    { q:'Quân dậy lúc mấy giờ?', o:['5 giờ','6 giờ','7 giờ','8 giờ'], c:1, e:'Я встаю в шесть часов.' },
    { q:'Anh ấy đến trường bằng gì?', o:['Xe buýt','Xe máy','Đi bộ','Tàu điện'], c:1, e:'еду в университет на мотоцикле.' },
    { q:'Thứ Bảy anh ấy làm gì?', o:['Đi làm','Đi chơi với bạn hoặc đọc sách','Học ở trường','Ngủ cả ngày'], c:1, e:'Я гуляю с друзьями или читаю книгу.' }
  ],
  after:'Viết 5 câu về một ngày của bạn, dùng động từ ở thì hiện tại và giới từ в + cách 4 chỉ giờ.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Văn hoá', title:'Дача', vi:'Căn nhà vườn ngoại ô',
  intro:'Bài đọc A2 về một nét văn hoá Nga. Chùm từ trọng tâm: nhà vườn, mùa hè, gia đình.',
  text:[
    'У многих русских семей есть дача — небольшой дом за городом. Обычно дача стоит на маленьком участке земли, где растут яблони, картофель и укроп.',
    'Летом вся семья едет на дачу в пятницу вечером и возвращается в воскресенье. Дети играют на улице, взрослые работают в саду и жарят шашлык.',
    'Дача появилась не как отдых, а как необходимость. В трудные годы люди выращивали там овощи, чтобы было что есть зимой. Многие до сих пор делают заготовки: солят огурцы, варят варенье.',
    'Сегодня дача для многих — это просто тишина. Нет интернета, нет метро, только соседи, чай на веранде и очень длинный вечер.'
  ],
  tr:[
    'Nhiều gia đình Nga có một căn dacha — ngôi nhà nhỏ ở ngoại ô. Thường thì dacha nằm trên một mảnh đất nhỏ, nơi trồng táo, khoai tây và thì là.',
    'Mùa hè cả nhà đi dacha vào tối thứ Sáu và trở về vào Chủ nhật. Trẻ con chơi ngoài sân, người lớn làm vườn và nướng thịt xiên.',
    'Dacha ra đời không phải như một chốn nghỉ ngơi mà như một điều cần thiết. Những năm khó khăn, người ta trồng rau ở đó để mùa đông có cái ăn. Nhiều người đến giờ vẫn làm đồ dự trữ: muối dưa chuột, nấu mứt.',
    'Ngày nay với nhiều người, dacha chỉ đơn giản là sự yên tĩnh. Không internet, không tàu điện ngầm, chỉ có hàng xóm, ấm trà ngoài hiên và một buổi tối rất dài.'
  ],
  keys:[
    { w:'да́ча', r:'dácha', vi:'nhà vườn ngoại ô' },
    { w:'уча́сток', r:'uchástok', vi:'mảnh đất' },
    { w:'расти́', r:'rastí', vi:'mọc, lớn lên' },
    { w:'возвраща́ться', r:'vozvrashchátsya', vi:'quay về' },
    { w:'необходи́мость', r:'neobkhodímost\'', vi:'điều cần thiết' },
    { w:'выра́щивать', r:'vyráshchivat\'', vi:'trồng trọt' },
    { w:'загото́вки', r:'zagotóvki', vi:'đồ dự trữ (muối, ngâm)' },
    { w:'тишина́', r:'tishiná', vi:'sự yên tĩnh' }
  ],
  qs:[
    { q:'Dacha là gì?', o:['Một loại xe','Ngôi nhà nhỏ ở ngoại ô','Một món ăn','Một lễ hội'], c:1, e:'дача — небольшой дом за городом.' },
    { q:'Gia đình thường đi dacha khi nào?', o:['Sáng thứ Bảy','Tối thứ Sáu đến Chủ nhật','Cả tuần','Chỉ mùa đông'], c:1, e:'едет на дачу в пятницу вечером и возвращается в воскресенье.' },
    { q:'Ban đầu dacha ra đời vì lý do gì?', o:['Để nghỉ ngơi','Vì cần thiết — trồng rau để có cái ăn','Để cho thuê','Vì mốt'], c:1, e:'появилась не как отдых, а как необходимость.' },
    { q:'Ngày nay dacha có ý nghĩa gì với nhiều người?', o:['Kiếm tiền','Sự yên tĩnh','Nơi làm việc','Chỗ học'], c:1, e:'Сегодня дача для многих — это просто тишина.' }
  ],
  after:'Viết 5 câu so sánh dacha với việc «về quê» ở Việt Nam.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Xã hội', title:'Библиотека, где не молчат', vi:'Thư viện không bắt im lặng',
  intro:'Bài đọc B1 về thay đổi của thư viện công. Chùm từ trọng tâm: không gian công cộng, thay đổi, cộng đồng.',
  text:[
    'Раньше в библиотеке можно было делать одно: молча читать. Сегодня в районной библиотеке на окраине Казани по вечерам шумно, и это считается хорошим знаком.',
    'В большом зале на первом этаже проходят курсы компьютерной грамотности для пенсионеров, репетиции школьного театра и встречи тех, кто учит языки. Книги никуда не делись, но они больше не единственная причина прийти.',
    'Заведующая объясняет это просто: людям нужно место, где можно находиться бесплатно и никто не спросит, почему ты здесь. Кафе стоит денег, торговый центр шумит, а дома не у всех есть тишина.',
    'Не всем читателям это нравится. Часть постоянных посетителей ушла в другой филиал, где по-прежнему тихо. Заведующая считает это нормальным: библиотек должно быть несколько, и они не обязаны быть одинаковыми.'
  ],
  tr:[
    'Trước kia trong thư viện chỉ làm được một việc: lặng lẽ đọc. Ngày nay ở thư viện quận vùng ngoại vi Kazan, buổi tối lại ồn ào, và điều đó được coi là dấu hiệu tốt.',
    'Trong đại sảnh tầng một diễn ra các lớp phổ cập máy tính cho người về hưu, buổi tập của đội kịch học sinh và các cuộc gặp của những người đang học ngoại ngữ. Sách không hề biến mất, nhưng chúng không còn là lý do duy nhất để tới đây.',
    'Bà quản lý giải thích rất giản dị: người ta cần một chỗ có thể ở lại miễn phí mà không ai hỏi tại sao bạn có mặt ở đây. Quán cà phê thì mất tiền, trung tâm thương mại thì ồn, còn ở nhà không phải ai cũng có sự yên tĩnh.',
    'Không phải bạn đọc nào cũng thích điều đó. Một bộ phận khách quen đã chuyển sang chi nhánh khác, nơi vẫn yên tĩnh như trước. Bà quản lý cho rằng thế là bình thường: thư viện thì phải có vài cái, và chúng không nhất thiết phải giống nhau.'
  ],
  keys:[
    { w:'молча́ть', r:'molchát\'', vi:'im lặng' },
    { w:'окра́ина', r:'okráina', vi:'vùng ven, ngoại vi' },
    { w:'гра́мотность', r:'grámotnost\'', vi:'sự biết đọc biết viết, trình độ phổ cập' },
    { w:'репети́ция', r:'repetítsiya', vi:'buổi tập, diễn tập' },
    { w:'заве́дующая', r:'zavéduyushchaya', vi:'bà quản lý, trưởng bộ phận' },
    { w:'бесплатно', r:'besplátno', vi:'miễn phí' },
    { w:'посети́тель', r:'posetítel\'', vi:'khách tới thăm' },
    { w:'фили́ал', r:'filiál', vi:'chi nhánh' }
  ],
  qs:[
    { q:'Buổi tối thư viện này thế nào?', o:['Đóng cửa','Ồn ào, và đó là dấu hiệu tốt','Vắng người','Chỉ cho học sinh vào'], c:1, e:'по вечерам шумно, и это считается хорошим знаком.' },
    { q:'Ở đại sảnh tầng một có những hoạt động gì?', o:['Chỉ đọc sách','Lớp máy tính, tập kịch, gặp gỡ nhóm học ngoại ngữ','Bán sách','Chiếu phim'], c:1, e:'курсы… репетиции… встречи тех, кто учит языки.' },
    { q:'Theo bà quản lý, người ta cần gì ở thư viện?', o:['Sách mới','Chỗ ở lại miễn phí mà không ai hỏi lý do','Wifi nhanh','Cà phê rẻ'], c:1, e:'место, где можно находиться бесплатно и никто не спросит, почему ты здесь.' },
    { q:'Bà quản lý nghĩ gì về việc một số khách quen bỏ đi?', o:['Rất buồn','Coi là bình thường, thư viện không cần giống nhau','Sẽ quay lại cách cũ','Đổ lỗi cho họ'], c:1, e:'считает это нормальным: библиотек должно быть несколько.' }
  ],
  after:'Viết 6 câu về một không gian công cộng ở nơi bạn sống, dùng ít nhất ba từ khoá của bài.' }

];

if (typeof module !== 'undefined') module.exports = { READINGS };
