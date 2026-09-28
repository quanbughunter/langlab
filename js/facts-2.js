/* ============================================================
   LangLab — «BẠN CÓ BIẾT?» ĐỢT MỞ RỘNG
   ------------------------------------------------------------
   Kho gốc (js/facts.js) mạnh về ngôn ngữ, ẩm thực, thói quen. Đợt này
   mở sang những mảng còn trống: cách tổ chức nhà nước và bầu cử, luật
   lệ khác Việt Nam, thiên nhiên và sông núi, nguồn gốc tên họ, lịch sử.

   NGUYÊN TẮC KHI SOẠN:
   · Không nêu tên người đang giữ chức. Tổng thống, thủ tướng đổi theo
     nhiệm kỳ, mà nội dung này nằm cứng trong app — viết vào là vài năm
     sau thành sai. Nên chỉ nói về BỘ MÁY: bầu thế nào, nhiệm kỳ bao
     lâu, quốc hội bao nhiêu ghế.
   · Luật lệ cũng đổi, nên tránh con số phạt cụ thể, chỉ nêu điều luật
     và tinh thần của nó.
   · Chỗ nào bản thân giới nghiên cứu còn chưa thống nhất thì nói thẳng
     là chưa thống nhất, đừng chọn bừa một giả thuyết rồi kể như sự thật.

   Nội dung do LangLab biên soạn cho người học, có thể lược giản so với
   tài liệu chuyên khảo. Hình minh hoạ vẽ bằng SVG, không dùng ảnh ngoài.
   ============================================================ */
(function(){
  if (typeof FACTS === 'undefined') return;
  FACTS.push(

/* ==================================================================
   ===========================  TIẾNG NGA  ==========================
   ================================================================== */

/* ---------------- Chính trị & bầu cử ---------------- */
{ lang:'ru', cat:'Chính trị', art:'parliament', title:'Quốc hội Nga có hai viện, và viện dưới đúng 450 ghế',
  body:'Cơ quan lập pháp Nga gọi là Hội đồng Liên bang (Федеральное собрание), gồm hai viện. Viện dưới là Duma Quốc gia với 450 đại biểu; viện trên là Hội đồng Liên bang, nơi mỗi chủ thể liên bang cử hai đại diện.',
  extra:'Chữ «дума» cùng gốc với động từ «думать» — suy nghĩ. Nghĩa đen của Duma Quốc gia là «nơi nhà nước ngồi nghĩ». Tên này có từ thời Nga hoàng, được dùng lại sau năm 1993.',
  word:{ t:'Госуда́рственная ду́ма', r:'Gosudarstvennaya duma', vi:'Duma Quốc gia' } },

{ lang:'ru', cat:'Chính trị', art:'ballot', title:'Tổng thống Nga do dân bầu trực tiếp',
  body:'Khác nhiều nước châu Âu nơi nguyên thủ do quốc hội chọn, tổng thống Nga được bầu trực tiếp trên toàn quốc. Nếu không ai quá nửa số phiếu ở vòng một thì hai người dẫn đầu vào vòng hai.',
  extra:'Nhiệm kỳ tổng thống từng là 4 năm, sau đó sửa hiến pháp thành 6 năm kể từ kỳ bầu cử năm 2012. Đây là chi tiết hay thay đổi, nên nếu bạn cần con số chính xác cho bài thi hoặc bài viết thì nên tra lại tại thời điểm dùng.',
  word:{ t:'вы́боры', r:'výbory', vi:'cuộc bầu cử' } },

{ lang:'ru', cat:'Chính trị', art:'flag', title:'Cờ Nga ba màu và mẹo nhớ thứ tự',
  body:'Cờ Nga gồm ba dải ngang: trắng trên, lam giữa, đỏ dưới. Rất dễ lẫn với cờ Hà Lan (đỏ trên, trắng giữa, lam dưới) và cờ Luxembourg.',
  extra:'Mẹo của chính người Nga: đọc từ dưới lên là «КСБ» — красный, синий, белый. Còn một mẹo khác gắn với thiên nhiên: tuyết trắng ở trên, bầu trời xanh ở giữa, đất đỏ ở dưới. Lá cờ này do Pyotr Đại đế đưa vào sau chuyến đi Hà Lan.',
  word:{ t:'флаг', r:'flag', vi:'lá cờ' } },

{ lang:'ru', cat:'Chính trị', art:'crown', title:'Quốc huy Nga có con đại bàng hai đầu',
  body:'Đại bàng hai đầu nhìn về hai phía đông và tây, thể hiện nước Nga trải dài trên cả châu Âu lẫn châu Á. Biểu tượng này được tiếp nhận từ đế quốc Byzantine vào thế kỷ XV.',
  extra:'Trên ngực đại bàng là hình Thánh George đâm rồng — vốn là huy hiệu riêng của Moskva. Nên quốc huy Nga thật ra là hai lớp huy hiệu lồng vào nhau: đế chế bao ngoài, thành phố thủ đô bên trong.',
  word:{ t:'двугла́вый орёл', r:'dvuglávyj orjól', vi:'đại bàng hai đầu' } },

{ lang:'ru', cat:'Chính trị', art:'map', title:'Nga chia thành nhiều loại chủ thể khác nhau, không chỉ «tỉnh»',
  body:'Việt Nam chỉ có tỉnh và thành phố trực thuộc trung ương. Nga thì có nhiều loại cùng tồn tại: область (tỉnh), край (vùng biên), респу́блика (nước cộng hoà), о́круг (khu tự trị) và thành phố liên bang.',
  extra:'Các nước cộng hoà trong Liên bang Nga được quyền có ngôn ngữ chính thức riêng bên cạnh tiếng Nga. Vì vậy ở Tatarstan biển hiệu thường song ngữ Nga – Tatar, còn ở Sakha là Nga – Yakut.',
  word:{ t:'о́бласть', r:'óblast’', vi:'tỉnh' } },

{ lang:'ru', cat:'Chính trị', art:'podium', title:'Thủ đô có thị trưởng, nhưng Moskva là một chủ thể liên bang',
  body:'Moskva và Sankt-Peterburg không nằm trong tỉnh nào cả — chúng là chủ thể liên bang ngang hàng với các tỉnh, có ngân sách và luật địa phương riêng.',
  extra:'Cách tổ chức này giống Hà Nội và TP. Hồ Chí Minh là thành phố trực thuộc trung ương, nhưng ở Nga quyền tự chủ lớn hơn nhiều: Moskva tự quyết mức lương tối thiểu và nhiều khoản trợ cấp riêng cho dân thành phố.',
  word:{ t:'столи́ца', r:'stolítsa', vi:'thủ đô' } },

{ lang:'ru', cat:'Chính trị', art:'stamp', title:'Mọi giấy tờ đều phải có con dấu tròn',
  body:'Văn hoá hành chính Nga rất coi trọng con dấu. Giấy tờ không đóng dấu thường bị coi là chưa có hiệu lực, kể cả khi đã có chữ ký.',
  extra:'Từ «печа́ть» vừa là con dấu vừa là báo chí — cùng một gốc với «in ấn». Người Việt sang Nga làm giấy tờ hay bất ngờ vì số lượng dấu cần xin, nhưng thật ra thói quen này khá giống thủ tục hành chính Việt Nam.',
  word:{ t:'печа́ть', r:'pechát’', vi:'con dấu; báo chí' } },

{ lang:'ru', cat:'Chính trị', art:'passport', title:'Người Nga có hai loại hộ chiếu',
  body:'«Hộ chiếu trong nước» là giấy tờ tuỳ thân chính, cấp năm 14 tuổi và dùng cho mọi việc trong nước. Muốn ra nước ngoài thì phải xin thêm «hộ chiếu nước ngoài» — một quyển khác hẳn.',
  extra:'Trong hộ chiếu nội địa có trang ghi nơi đăng ký thường trú, và trang ghi tình trạng hôn nhân. Nghe lạ với người Việt, nhưng đây chính là lý do người Nga hay nói «cho xem hộ chiếu» ở những nơi mà ta chỉ cần căn cước.',
  word:{ t:'па́спорт', r:'páspоrt', vi:'hộ chiếu; giấy tờ tuỳ thân' } },

/* ---------------- Luật lệ khác Việt Nam ---------------- */
{ lang:'ru', cat:'Luật pháp', art:'scales', title:'Mùa đông bắt buộc phải thay lốp xe',
  body:'Nga quy định xe con phải dùng lốp mùa đông trong những tháng lạnh nhất. Chạy lốp hè giữa mùa tuyết là vi phạm, chứ không chỉ là nguy hiểm.',
  extra:'Nhiều chủ xe có hẳn hai bộ lốp và đổi theo mùa, gửi bộ còn lại ở dịch vụ trông lốp. Ở Việt Nam khái niệm này gần như không tồn tại vì không có băng tuyết.',
  word:{ t:'зи́мние ши́ны', r:'zímnie shíny', vi:'lốp mùa đông' } },

{ lang:'ru', cat:'Luật pháp', art:'coin', title:'Nhiều vùng cấm bán rượu sau giờ tối',
  body:'Phần lớn các vùng ở Nga cấm bán đồ uống có cồn trong cửa hàng sau khoảng 22–23 giờ cho tới sáng hôm sau. Giờ cụ thể do từng chủ thể liên bang tự quyết nên mỗi nơi một khác.',
  extra:'Quán ăn và quán bar vẫn được phục vụ tại chỗ, chỉ cấm bán mang về. Vì vậy người Nga có thói quen mua trước buổi tối, và câu hỏi «cửa hàng còn bán không?» là câu rất quen ở Nga.',
  word:{ t:'алкого́ль', r:'alkogól’', vi:'đồ uống có cồn' } },

{ lang:'ru', cat:'Luật pháp', art:'nametag', title:'Ở Nga phải đăng ký nơi cư trú, kể cả người nước ngoài',
  body:'Người nước ngoài tới Nga phải làm thủ tục đăng ký chỗ ở trong vài ngày đầu. Giấy đăng ký này được kiểm tra khi rời nước, nên mất nó là rắc rối thật sự.',
  extra:'Chế độ này là hậu thân của «прописка» thời Liên Xô, vốn gắn chặt quyền đi lại với nơi đăng ký. Ngày nay đã nới nhiều nhưng dấu vết vẫn còn trong mọi thủ tục.',
  word:{ t:'регистра́ция', r:'registrátsiya', vi:'đăng ký cư trú' } },

{ lang:'ru', cat:'Luật pháp', art:'book', title:'Đi bộ sai chỗ cũng bị phạt',
  body:'Sang đường không đúng vạch hoặc không đúng đèn là lỗi có chế tài với chính người đi bộ, chứ không chỉ nhắc nhở.',
  extra:'Đổi lại, khi người đi bộ đã bước xuống vạch kẻ thì ô tô gần như luôn dừng lại. Người Việt mới sang hay ngập ngừng ở vạch, còn tài xế thì đã dừng từ lâu và đang đợi.',
  word:{ t:'пешехо́д', r:'peshekhód', vi:'người đi bộ' } },

{ lang:'ru', cat:'Luật pháp', art:'passport', title:'Trẻ em dưới 12 tuổi phải ngồi ghế chuyên dụng trên ô tô',
  body:'Luật giao thông Nga bắt buộc dùng ghế an toàn cho trẻ nhỏ khi đi ô tô. Không có ghế là bị phạt, kể cả khi bố mẹ bế trên tay.',
  extra:'Quy định này phổ biến ở châu Âu nhưng còn mới với nhiều gia đình Việt Nam. Nếu bạn thuê xe ở Nga và đi cùng trẻ nhỏ, nhớ đặt ghế trẻ em cùng lúc thuê xe.',
  word:{ t:'де́тское кре́сло', r:'détskoye kréslo', vi:'ghế trẻ em trên ô tô' } },

{ lang:'ru', cat:'Luật pháp', art:'stamp', title:'Bằng lái Việt Nam không dùng thẳng được ở Nga',
  body:'Muốn lái xe lâu dài ở Nga phải đổi sang bằng Nga, thường là thi lại lý thuyết và thực hành. Bằng quốc tế chỉ giúp được trong thời gian ngắn.',
  extra:'Thi lý thuyết ở Nga toàn bộ bằng tiếng Nga, gồm cả câu hỏi về sơ cứu. Nhiều du học sinh Việt coi đây là một bài kiểm tra tiếng Nga chuyên ngành thực thụ.',
  word:{ t:'води́тельские права́', r:'vodítel’skie pravá', vi:'bằng lái xe' } },

{ lang:'ru', cat:'Luật pháp', art:'snowflake', title:'Chủ nhà có trách nhiệm dọn băng trên mái',
  body:'Băng treo trên mái nhà rơi xuống có thể gây chết người, nên các thành phố Nga quy định trách nhiệm dọn cho đơn vị quản lý toà nhà. Mùa xuân, vỉa hè hay bị rào lại để dọn băng.',
  extra:'Chữ «сосу́лька» là cột băng treo dưới mái. Nghe thì thơ mộng, nhưng tin tức mùa xuân ở Nga năm nào cũng nhắc tới tai nạn do nó rơi.',
  word:{ t:'сосу́лька', r:'sosúl’ka', vi:'cột băng treo mái nhà' } },

{ lang:'ru', cat:'Luật pháp', art:'scales', title:'Nga bỏ giờ mùa hè, không đổi đồng hồ nữa',
  body:'Sau vài lần thay đổi, Nga chốt dùng một giờ cố định quanh năm và không vặn đồng hồ theo mùa như Liên minh châu Âu.',
  extra:'Với người học tiếng Nga, điều này có ích khi tính giờ gọi về Việt Nam: chênh lệch giữa Hà Nội và Moskva giữ nguyên cả năm, không phải nhớ mùa nào lệch mấy tiếng.',
  word:{ t:'часово́й по́яс', r:'chasovój póyas', vi:'múi giờ' } },

/* ---------------- Tên gọi & tên họ ---------------- */
{ lang:'ru', cat:'Tên gọi', art:'nametag', title:'Tên người Nga có ba phần, và phần giữa lấy từ tên bố',
  body:'Họ tên đầy đủ gồm tên riêng, phụ danh và họ: Ива́н Петро́вич Смирно́в. Phụ danh «Петрович» nghĩa là «con trai của Pyotr».',
  extra:'Đuôi phụ danh khác nhau theo giới: con trai lấy -ович/-евич, con gái lấy -овна/-евна. Nên nghe phụ danh là biết ngay bố tên gì và người đó là nam hay nữ.',
  word:{ t:'о́тчество', r:'ótchestvo', vi:'phụ danh (tên theo tên bố)' } },

{ lang:'ru', cat:'Tên gọi', art:'family', title:'Họ của phụ nữ Nga có đuôi khác họ của đàn ông',
  body:'Cùng một gia đình nhưng bố là Смирно́в còn con gái là Смирно́ва. Họ Nga là tính từ nên phải hợp giống với người mang nó.',
  extra:'Điều này gây rắc rối thật khi làm giấy tờ ở nước ngoài: hộ chiếu ghi Ivanova, còn giấy tờ của chồng ghi Ivanov, nhiều cán bộ tưởng là hai họ khác nhau.',
  word:{ t:'фами́лия', r:'famíliya', vi:'họ' } },

{ lang:'ru', cat:'Tên gọi', art:'nametag', title:'Họ phổ biến nhất nước Nga không phải Ivanov',
  body:'Nhiều người đoán Ивано́в, nhưng các khảo sát thường xếp Смирно́в ở vị trí đầu, Ивано́в ngay sau, rồi tới Кузнецо́в.',
  extra:'Смирнов bắt nguồn từ «смирный» — hiền lành, ngoan. Кузнецов là «con nhà thợ rèn», cùng ý với Smith tiếng Anh, Schmidt tiếng Đức và Lê Rèn… thì không, tiếng Việt lại không có họ nghề.',
  word:{ t:'Смирно́в', r:'Smirnóv', vi:'họ Smirnov (gốc: hiền lành)' } },

{ lang:'ru', cat:'Tên gọi', art:'family', title:'Vì sao người Nga hay bị gọi là «Ivan» và «Natasha»',
  body:'Ива́н từng là tên nam phổ biến bậc nhất suốt nhiều thế kỷ, vì gắn với thánh Ioann trong lịch nhà thờ. Ната́лья cùng dạng thân mật Ната́ша cũng rất thông dụng ở thế kỷ XX.',
  extra:'Từ chỗ phổ biến, hai cái tên thành hình ảnh ước lệ trong phim ảnh và truyện nước ngoài — hễ nhân vật người Nga là Ivan hoặc Natasha. Ở Nga ngày nay lớp trẻ đặt tên đa dạng hơn nhiều, nên vào lớp học gọi «Ivan» có khi không ai quay lại.',
  word:{ t:'и́мя', r:'ímya', vi:'tên riêng' } },

{ lang:'ru', cat:'Tên gọi', art:'letter', title:'«Nga ngố» — biệt danh tiếng Việt, không phải tiếng Nga',
  body:'Đây là cách gọi thân mật trong tiếng Việt, hình thành từ thời có đông người Việt học tập và lao động ở Liên Xô. Nguồn gốc chính xác không có tài liệu nào ghi chép chắc chắn.',
  extra:'Cách giải thích hay được kể nhất là chữ «ngố» ở đây mang nghĩa thật thà, xuề xoà đến mức đáng yêu — nói gì tin nấy, không mặc cả. Dù vậy đây vẫn chỉ là lời kể truyền miệng, và nên nhớ: người Nga không có biệt danh tương ứng cho mình, dịch thẳng sang tiếng Nga sẽ thành một lời chê.',
  word:{ t:'ру́сский', r:'rússkij', vi:'người Nga; thuộc về Nga' } },

{ lang:'ru', cat:'Tên gọi', art:'nametag', title:'Gọi trống tên riêng là suồng sã, phải thêm phụ danh',
  body:'Với thầy cô, cấp trên hay người lớn tuổi, cách gọi đúng là tên riêng kèm phụ danh: «Ива́н Петро́вич». Gọi trống «Иван» chỉ dùng với bạn bè cùng lứa.',
  extra:'Người Việt hay thấy cách này dài dòng, nhưng nó gần với việc ta gọi «thầy Quân», «cô Lan» hơn là gọi trống tên. Nhớ phụ danh của thầy cô là một phần của phép lịch sự ở Nga.',
  word:{ t:'обраще́ние', r:'obrashchéniye', vi:'cách xưng hô' } },

{ lang:'ru', cat:'Tên gọi', art:'book', title:'Một tên riêng đẻ ra cả chùm tên gọi khác nhau',
  body:'Алекса́ндр có thể thành Са́ша, Саню́ня, Са́шенька, Шу́ра, Сашо́к… Mỗi dạng ứng với một mức độ thân mật và một sắc thái tình cảm riêng.',
  extra:'Đây là lý do đọc văn học Nga hay rối: cùng một nhân vật mà mỗi người gọi một kiểu, tưởng là mấy người khác nhau. Mẹo là bám lấy phần gốc của tên.',
  word:{ t:'Са́ша', r:'Sásha', vi:'Sasha (dạng thân mật của Aleksandr)' } },

{ lang:'ru', cat:'Tên gọi', art:'nametag', title:'Nhiều họ Nga kể nghề của tổ tiên',
  body:'Кузнецо́в từ «кузнец» thợ rèn, Гончаро́в từ «гончар» thợ gốm, Рыбако́в từ «рыбак» ngư dân, Попо́в từ «поп» thầy tu.',
  extra:'Cách này giống họ châu Âu nói chung (Smith, Müller, Ferrari) nhưng rất khác Việt Nam, nơi họ chủ yếu là họ dòng tộc. Nên nghe một họ Nga là có thể đoán nghề của gia đình vài trăm năm trước.',
  word:{ t:'кузне́ц', r:'kuznéts', vi:'thợ rèn' } },

/* ---------------- Thiên nhiên ---------------- */
{ lang:'ru', cat:'Thiên nhiên', art:'river', title:'Volga là con sông dài nhất châu Âu',
  body:'Sông Volga dài khoảng 3.530 km, chảy hoàn toàn trong nước Nga rồi đổ vào biển Caspi. Không một con sông châu Âu nào dài hơn.',
  extra:'Người Nga gọi Volga là «Во́лга-ма́тушка» — mẹ Volga. Cách nhân hoá này giống hệt cách người Việt gọi sông Hồng, sông Cửu Long bằng giọng thân thuộc.',
  word:{ t:'Во́лга', r:'Vólga', vi:'sông Volga' } },

{ lang:'ru', cat:'Thiên nhiên', art:'coast', title:'Hồ Baikal chứa khoảng một phần năm nước ngọt mặt của thế giới',
  body:'Baikal sâu hơn 1.600 m, là hồ sâu nhất hành tinh. Lượng nước ngọt trong hồ chiếm chừng 20% tổng lượng nước ngọt dạng lỏng trên bề mặt Trái Đất.',
  extra:'Nước Baikal trong tới mức mùa đông nhìn xuyên lớp băng thấy đáy. Hồ đã tồn tại hơn 25 triệu năm, thuộc loại hồ cổ nhất thế giới, và có nhiều loài không tìm thấy ở đâu khác.',
  word:{ t:'о́зеро', r:'ózero', vi:'cái hồ' } },

{ lang:'ru', cat:'Thiên nhiên', art:'forest', title:'Rừng taiga Nga là dải rừng lớn nhất hành tinh',
  body:'Taiga là rừng lá kim trải dài suốt Siberia. Đây là vùng rừng liên tục lớn nhất thế giới, lớn hơn cả rừng Amazon về diện tích.',
  extra:'Chữ «тайга́» vốn là từ mượn từ các ngôn ngữ Turk-Mông ở Siberia, rồi từ tiếng Nga lan ra khắp thế giới. Nên khi bạn nói «taiga» bằng tiếng Việt, bạn đang dùng một từ đi vòng qua tiếng Nga.',
  word:{ t:'тайга́', r:'tajgá', vi:'rừng taiga' } },

{ lang:'ru', cat:'Thiên nhiên', art:'snowflake', title:'Oymyakon là nơi có người ở lạnh nhất thế giới',
  body:'Làng Oymyakon ở Sakha từng ghi nhận nhiệt độ quanh −67,7 °C. Đây là điểm dân cư thường trú lạnh nhất từng được ghi nhận.',
  extra:'Ở mức nhiệt đó, xe hơi phải nổ máy suốt ngày đêm vì tắt là không khởi động lại được. Mực bút bi đông cứng, nên học sinh dùng bút chì.',
  word:{ t:'моро́з', r:'moróz', vi:'giá rét, băng giá' } },

{ lang:'ru', cat:'Thiên nhiên', art:'volcano', title:'Kamchatka có hàng trăm núi lửa, hàng chục còn hoạt động',
  body:'Bán đảo Kamchatka nằm trên vành đai lửa Thái Bình Dương, có mật độ núi lửa hoạt động vào loại dày nhất thế giới. Khu vực này được UNESCO ghi danh.',
  extra:'Kamchatka cũng có thung lũng mạch nước phun, một trong số rất ít nơi trên thế giới có hiện tượng này. Từ Moskva bay tới Kamchatka mất khoảng tám tiếng — dài hơn bay từ Hà Nội đi châu Âu.',
  word:{ t:'вулка́н', r:'vulkán', vi:'núi lửa' } },

{ lang:'ru', cat:'Thiên nhiên', art:'mountain', title:'Dãy Ural là ranh giới quy ước giữa châu Âu và châu Á',
  body:'Dãy Ural chạy theo hướng bắc – nam, được lấy làm đường phân chia hai châu lục. Ở thành phố Yekaterinburg có cột mốc để du khách đứng một chân ở châu Âu, một chân ở châu Á.',
  extra:'Ural là dãy núi rất cổ nên đã bị bào mòn thấp, đỉnh cao nhất chỉ khoảng 1.895 m — thấp hơn Fansipan. Ranh giới châu lục ở đây là quy ước của con người chứ không phải rào cản tự nhiên.',
  word:{ t:'Ура́л', r:'Urál', vi:'dãy Ural' } },

{ lang:'ru', cat:'Thiên nhiên', art:'coast', title:'Nga giáp cả ba đại dương',
  body:'Bờ biển Nga chạm Bắc Băng Dương ở phía bắc, Thái Bình Dương ở phía đông và Đại Tây Dương qua biển Baltic ở phía tây.',
  extra:'Tuyến đường biển phương Bắc dọc bờ Bắc Băng Dương rút ngắn đáng kể quãng đường từ châu Âu sang châu Á so với đi qua kênh Suez, nhưng chỉ thông được vài tháng mùa hè.',
  word:{ t:'мо́ре', r:'móre', vi:'biển' } },

{ lang:'ru', cat:'Thiên nhiên', art:'forest', title:'Đêm trắng ở Sankt-Peterburg kéo dài hàng tuần',
  body:'Vì nằm ở vĩ độ cao, vào khoảng tháng 6 thành phố gần như không tối hẳn. Hoàng hôn nối liền bình minh, trời chỉ nhá nhem rồi sáng lại.',
  extra:'Mùa đông thì ngược lại: ngày rất ngắn, mặt trời lên muộn và lặn sớm. Người học tiếng Nga sang mùa đông thường bất ngờ vì tan học lúc bốn giờ chiều mà trời đã tối như đêm.',
  word:{ t:'бе́лые но́чи', r:'bélyye nóchi', vi:'đêm trắng' } },

{ lang:'ru', cat:'Thiên nhiên', art:'snowflake', title:'Tuyết ở Nga không tan giữa mùa, nó chất lên nhau',
  body:'Ở miền bắc và Siberia, nhiệt độ âm suốt mấy tháng liền nên tuyết rơi xuống là nằm đó tới mùa xuân, lớp sau đè lớp trước.',
  extra:'Vì thế xe dọn tuyết là phương tiện đô thị thiết yếu, và trẻ con Nga lớn lên với khái niệm «núi tuyết» ngay trong sân chung cư. Đến tháng ba thì cả thành phố bước vào giai đoạn lầy lội mà tiếng Nga có từ riêng: «слякоть».',
  word:{ t:'снег', r:'sneg', vi:'tuyết' } },

{ lang:'ru', cat:'Thiên nhiên', art:'river', title:'Nhiều sông lớn của Nga chảy ngược lên phía bắc',
  body:'Ob, Yenisei và Lena đều bắt nguồn ở phía nam rồi đổ vào Bắc Băng Dương. Đây là ba trong số những con sông dài nhất thế giới.',
  extra:'Hướng chảy này gây lụt đặc trưng mỗi mùa xuân: thượng nguồn phía nam tan băng trước, nước dồn xuống hạ nguồn phía bắc vẫn còn đóng băng, thế là nước bị chặn lại và tràn bờ.',
  word:{ t:'река́', r:'reká', vi:'con sông' } },

/* ---------------- Địa lý & đời sống ---------------- */
{ lang:'ru', cat:'Địa lý', art:'train', title:'Tàu xuyên Siberia dài gần 9.300 km',
  body:'Tuyến Moskva – Vladivostok là đường sắt liên tục dài nhất thế giới, vượt qua tám múi giờ.',
  extra:'Mọi giờ tàu trên toàn tuyến trước đây đều niêm yết theo giờ Moskva, dù tàu đang ở đâu. Hành khách phải tự quy đổi sang giờ địa phương — nguồn cơn của vô số lần lỡ tàu.',
  word:{ t:'по́езд', r:'póyezd', vi:'chuyến tàu' } },

{ lang:'ru', cat:'Địa lý', art:'apartment', title:'Nhà chung cư Nga có hệ thống sưởi chung cả toà',
  body:'Nước nóng chạy trong ống sưởi được cấp từ nhà máy nhiệt của thành phố, bật và tắt theo lịch chung chứ không do từng hộ quyết định.',
  extra:'Vì thế có hiện tượng lạ với người Việt: giữa mùa đông, trong nhà nóng tới mức phải mở cửa sổ cho mát. Và mùa thu, nếu thành phố chưa bật sưởi thì cả khu cùng lạnh.',
  word:{ t:'отопле́ние', r:'otopléniye', vi:'hệ thống sưởi' } },

{ lang:'ru', cat:'Địa lý', art:'forest', title:'Dacha — căn nhà vườn ngoại ô gần như nhà nào cũng có',
  body:'Дача là mảnh đất nhỏ kèm nhà gỗ ở ngoại ô, dùng để trồng rau và nghỉ cuối tuần. Đây là một phần của đời sống Nga chứ không phải thú chơi xa xỉ.',
  extra:'Thời Liên Xô, dacha giúp các gia đình tự túc rau quả. Ngày nay nhiều dacha thành nơi nghỉ, nhưng tháng 5 vẫn là mùa cả nước kéo nhau ra trồng khoai tây, và giao thông cuối tuần tắc nghẽn vì dòng người về dacha.',
  word:{ t:'да́ча', r:'dácha', vi:'nhà vườn ngoại ô' } },

{ lang:'ru', cat:'Địa lý', art:'library', title:'Nga có hệ thống thư viện phủ tới cấp làng',
  body:'Mạng lưới thư viện công lập được xây dựng rộng khắp từ thời Liên Xô, tới tận các thị trấn nhỏ, và phần lớn vẫn hoạt động.',
  extra:'Thư viện Quốc gia Nga ở Moskva là một trong những thư viện lớn nhất thế giới. Với người học tiếng, thẻ thư viện địa phương là cách rẻ nhất để có sách gốc đọc mỗi ngày.',
  word:{ t:'библиоте́ка', r:'bibliotéka', vi:'thư viện' } },

{ lang:'ru', cat:'Địa lý', art:'metro', title:'Tàu điện ngầm Moskva chạy dày tới mức không cần xem giờ',
  body:'Vào giờ cao điểm, tàu cách nhau chừng một tới hai phút. Không ai tra giờ tàu, cứ xuống ga là đi.',
  extra:'Đây là một trong những hệ thống metro đông khách nhất thế giới. Bảng điện ở đầu ke ga đếm thời gian TỪ KHI tàu trước rời đi, chứ không đếm ngược tới tàu sau — ngược với thói quen ở nhiều nước.',
  word:{ t:'метро́', r:'metró', vi:'tàu điện ngầm' } },

{ lang:'ru', cat:'Địa lý', art:'apartment', title:'Số tầng đếm khác Việt Nam một chút',
  body:'Nga đếm tầng trệt là tầng 1, giống Việt Nam và Mỹ, khác Pháp và Anh vốn gọi tầng trệt là tầng 0.',
  extra:'Nhưng trong thang máy chung cư cũ hay gặp ký hiệu lạ: tầng hầm ghi «подва́л», tầng kỹ thuật ghi «техэта́ж». Nhớ hai chữ này để khỏi bấm nhầm xuống hầm chứa đồ.',
  word:{ t:'эта́ж', r:'etázh', vi:'tầng nhà' } },

{ lang:'ru', cat:'Địa lý', art:'coin', title:'Đồng rúp có ký hiệu riêng, mới dùng từ năm 2013',
  body:'Ký hiệu ₽ là chữ «Р» in hoa có gạch ngang, được chọn qua một cuộc bỏ phiếu công khai và chính thức dùng từ năm 2013.',
  extra:'Chữ «рубль» vốn từ động từ «рубить» — chặt. Thời xưa người ta chặt thỏi bạc ra thành khúc để làm tiền, và tên gọi giữ lại dấu vết của hành động đó.',
  word:{ t:'рубль', r:'rubl’', vi:'đồng rúp' } },

{ lang:'ru', cat:'Địa lý', art:'map', title:'Nga rộng tới mức khi Moskva ăn sáng thì Kamchatka đã ngủ',
  body:'Chênh lệch giữa hai đầu đất nước lên tới mười tiếng đồng hồ. Cùng một ngày lịch nhưng hai vùng sống ở hai nhịp hoàn toàn khác.',
  extra:'Truyền hình quốc gia phải phát nhiều phiên bản lệch giờ cho các vùng. Lời chúc năm mới của lãnh đạo được phát lần lượt theo từng múi giờ, nên nước Nga đón giao thừa suốt mười một lần.',
  word:{ t:'вре́мя', r:'vrémya', vi:'thời gian' } },

/* ---------------- Ẩm thực ---------------- */
{ lang:'ru', cat:'Ẩm thực', art:'bowl', title:'Salad Olivier là món bắt buộc của đêm giao thừa',
  body:'Món salad khoai tây trộn sốt mayonnaise này gắn chặt với năm mới tới mức nhiều gia đình trộn hẳn một chậu lớn ăn suốt mấy ngày.',
  extra:'Ở phương Tây món này được gọi là «Russian salad», còn công thức gốc thế kỷ XIX của đầu bếp Olivier thì xa hoa hơn nhiều, có cả thịt gà gô và tôm hùm.',
  word:{ t:'сала́т Оливье́', r:'salát Oliv’é', vi:'salad Olivier' } },

{ lang:'ru', cat:'Ẩm thực', art:'bowl', title:'Có món salad tên là «cá trích khoác áo lông»',
  body:'Селёдка под шу́бой xếp thành nhiều lớp: cá trích muối dưới cùng, rồi khoai tây, cà rốt, và trên cùng là củ dền đỏ tím.',
  extra:'Lớp củ dền chính là «áo lông» phủ lên con cá. Đây là món trình bày theo tầng, nên khi xúc phải xúc thẳng từ trên xuống để lấy đủ các lớp.',
  word:{ t:'селёдка', r:'seljódka', vi:'cá trích muối' } },

{ lang:'ru', cat:'Ẩm thực', art:'bowl', title:'Kiều mạch là món ăn hằng ngày, không phải đồ ăn kiêng',
  body:'Гре́чка nấu như cơm, ăn kèm thịt, nấm hoặc sữa. Với người Nga nó bình thường như cơm trắng với người Việt.',
  extra:'Người Việt sang Nga thường thấy kiều mạch lạ miệng vì ở nhà nó chỉ xuất hiện trong thực phẩm chức năng. Ở Nga, đây là món ký túc xá kinh điển: rẻ, no lâu, nấu một lần ăn cả tuần.',
  word:{ t:'гре́чка', r:'gréchka', vi:'kiều mạch' } },

{ lang:'ru', cat:'Ẩm thực', art:'samovar', title:'Kvas là đồ uống lên men từ bánh mì đen',
  body:'Квас có vị chua ngọt nhẹ, độ cồn rất thấp, được bán cả ở thùng lớn ngoài phố vào mùa hè.',
  extra:'Chính kvas là thứ tạo nên món súp lạnh okroshka. Người mới uống hay thấy lạ vì vị giống bánh mì hơn giống nước giải khát, nhưng đến ngày nóng thì hiểu ngay vì sao người Nga xếp hàng mua.',
  word:{ t:'квас', r:'kvas', vi:'nước kvas' } },

{ lang:'ru', cat:'Ẩm thực', art:'bowl', title:'Sữa đặc Nga được ăn thẳng bằng thìa',
  body:'Сгущёнка là sữa đặc có đường, dùng phết bánh, chan lên bánh xèo, hoặc múc ăn trực tiếp.',
  extra:'Có cách chế biến rất được ưa chuộng: luộc nguyên lon vài tiếng cho sữa ngả nâu và đặc lại thành caramel. Người Việt sẽ thấy quen, vì ta cũng có sữa đặc, chỉ khác là ta dùng để pha cà phê.',
  word:{ t:'сгущёнка', r:'sgushchjónka', vi:'sữa đặc có đường' } },

{ lang:'ru', cat:'Ẩm thực', art:'blin', title:'Pirozhki là bánh nhân mặn hoặc ngọt, bán khắp nơi',
  body:'Пирожки́ là bánh bột mì nhỏ, có nhân thịt, bắp cải, khoai tây, trứng, táo hoặc mứt. Có loại nướng, có loại rán.',
  extra:'Chú ý trọng âm: пиро́жки (bánh nhỏ) khác пиро́жное (bánh ngọt tráng miệng) và пиро́г (bánh to nguyên cái). Gọi nhầm là ra món khác hẳn.',
  word:{ t:'пирожки́', r:'pirozhkí', vi:'bánh nhân nhỏ' } },

{ lang:'ru', cat:'Ẩm thực', art:'bowl', title:'Bữa trưa Nga thường có ba món theo thứ tự cố định',
  body:'Пе́рвое là món canh, второ́е là món chính có thịt và tinh bột, компо́т hoặc trà là đồ uống kết thúc bữa.',
  extra:'Căng tin trường học và nhà máy đều dọn theo bộ ba này. Nếu bạn vào một «столовая» và người ta hỏi «первое будете?», họ đang hỏi bạn có lấy súp không.',
  word:{ t:'столо́вая', r:'stolóvaya', vi:'nhà ăn tập thể' } },

{ lang:'ru', cat:'Ẩm thực', art:'bowl', title:'Người Nga ăn rất nhiều rau muối chua',
  body:'Dưa chuột muối, bắp cải muối, cà chua muối, nấm muối — tất cả đều là đồ ăn kèm quen thuộc quanh năm, đặc biệt là mùa đông.',
  extra:'Lý do rất thực tế: trước khi có nhà kính và hàng nhập khẩu, muối chua là cách duy nhất giữ rau qua sáu tháng lạnh. Thói quen ở lại ngay cả khi siêu thị đã đủ rau tươi.',
  word:{ t:'солёные огурцы́', r:'soljónye ogurtsý', vi:'dưa chuột muối' } },

/* ---------------- Động vật ---------------- */
{ lang:'ru', cat:'Động vật', art:'wolf', title:'Sói xuất hiện dày đặc trong truyện cổ tích Nga',
  body:'Серый волк là nhân vật quen thuộc, có khi là kẻ gian, có khi lại là người giúp đỡ nhân vật chính.',
  extra:'Cặp đối lập «волк và лиса» (sói và cáo) trong cổ tích Nga có vai trò giống cặp «thỏ và rùa» hay «Cáo và Quạ» ở các nền văn hoá khác: dùng để dạy trẻ con bài học ứng xử.',
  word:{ t:'волк', r:'volk', vi:'con sói' } },

{ lang:'ru', cat:'Động vật', art:'forest', title:'Con chồn zibelin từng đẩy nước Nga mở rộng sang phía đông',
  body:'Lông соболь quý tới mức việc săn tìm nó là một động lực kinh tế lớn thúc đẩy các đoàn người Nga tiến sâu vào Siberia từ thế kỷ XVI.',
  extra:'Có thể nói bản đồ nước Nga hiện đại một phần được vẽ nên bởi nhu cầu về lông thú. Tiền thuế nộp cho triều đình thời ấy có khi tính bằng số tấm da.',
  word:{ t:'со́боль', r:'sóbol’', vi:'con chồn zibelin' } },

{ lang:'ru', cat:'Động vật', art:'snowflake', title:'Tuần lộc là phương tiện đi lại thật ở vùng cực bắc',
  body:'Các dân tộc bản địa vùng bắc cực Nga vẫn chăn nuôi tuần lộc, dùng cho việc kéo xe trượt và lấy thịt, da.',
  extra:'Từ «оле́нь» chỉ chung loài hươu nai. Ở vùng Nenets và Yamal, đàn tuần lộc được lùa di cư theo mùa trên quãng đường hàng trăm cây số, và cả gia đình di chuyển theo đàn.',
  word:{ t:'оле́нь', r:'olén’', vi:'con hươu, tuần lộc' } },

{ lang:'ru', cat:'Động vật', art:'coast', title:'Gấu trắng sống ở vùng cực bắc nước Nga',
  body:'Белый медведь phân bố dọc bờ Bắc Băng Dương. Một số thị trấn phía bắc có quy định riêng về ứng xử khi gấu đi lạc vào khu dân cư.',
  extra:'Tên tiếng Nga nghĩa đen là «gấu trắng», trong khi tiếng Anh gọi là «gấu vùng cực». Cùng một con vật, hai ngôn ngữ chọn hai đặc điểm khác nhau để đặt tên.',
  word:{ t:'бе́лый медве́дь', r:'bélyj medvéd’', vi:'gấu trắng Bắc Cực' } },

{ lang:'ru', cat:'Động vật', art:'crow', title:'Chim sẻ và quạ khoang là hàng xóm quen của thành phố Nga',
  body:'Воро́на серая với bộ lông xám đen sống dày đặc trong các thành phố, dạn người và nổi tiếng tinh khôn.',
  extra:'Chữ «воро́на» (quạ khoang, giống cái) khác «во́рон» (quạ đen lớn, giống đực) chỉ ở trọng âm và giống. Đây là một cặp bẫy nhỏ nhưng rất hay gặp trong bài đọc.',
  word:{ t:'воро́на', r:'voróna', vi:'con quạ khoang' } },

{ lang:'ru', cat:'Động vật', art:'bear', title:'«Медведь» là tên gọi tránh, tên thật đã mất',
  body:'Từ này ghép từ «мёд» (mật) và gốc «есть» (ăn) — nghĩa là «kẻ ăn mật». Đây là cách gọi vòng vì người xưa kiêng gọi thẳng tên con gấu.',
  extra:'Hiện tượng này gọi là kiêng huý ngôn ngữ, có ở nhiều nền văn hoá. Tên gốc của con gấu trong tiếng Slav cổ đã mất hẳn, chỉ còn lại cái tên tránh, và ngày nay nó trở thành tên chính thức.',
  word:{ t:'медве́дь', r:'medvéd’', vi:'con gấu' } },

/* ---------------- Lịch sử ---------------- */
{ lang:'ru', cat:'Lịch sử', art:'crown', title:'Pyotr Đại đế từng đánh thuế râu',
  body:'Để ép giới quý tộc theo lối sống châu Âu, ông đặt ra khoản thuế cho người muốn giữ râu. Ai nộp thuế được phát một thẻ đồng làm bằng chứng.',
  extra:'Cùng thời điểm đó ông bắt quý tộc mặc âu phục và dời đô về Sankt-Peterburg. Đây là một trong những đợt cải cách áp đặt từ trên xuống quyết liệt nhất lịch sử châu Âu.',
  word:{ t:'борода́', r:'borodá', vi:'bộ râu' } },

{ lang:'ru', cat:'Lịch sử', art:'coast', title:'Sankt-Peterburg được xây trên đầm lầy',
  body:'Thành phố khởi công năm 1703 ở vùng cửa sông Neva ngập nước. Người ta phải đóng cọc gỗ xuống bùn rồi mới xây được nền móng.',
  extra:'Thành phố có hơn 300 cây cầu. Ban đêm mùa hè, các cầu lớn bắc qua Neva được nâng lên cho tàu đi qua — ai ở sai bờ vào giờ đó thì phải đợi tới sáng mới về nhà được.',
  word:{ t:'мост', r:'most', vi:'cây cầu' } },

{ lang:'ru', cat:'Lịch sử', art:'stamp', title:'Nga bỏ mất 13 ngày trong năm 1918',
  body:'Khi chuyển từ lịch Julius sang lịch Gregory, ngày 31 tháng 1 được nối thẳng sang ngày 14 tháng 2. Mười ba ngày ở giữa đơn giản là không tồn tại.',
  extra:'Đây là lý do có «Năm mới cũ» ngày 14 tháng 1, và cũng là lý do Cách mạng Tháng Mười lại diễn ra vào tháng 11 theo lịch hiện hành.',
  word:{ t:'календа́рь', r:'kalendár’', vi:'quyển lịch' } },

{ lang:'ru', cat:'Lịch sử', art:'map', title:'Nga từng bán Alaska cho Mỹ',
  body:'Năm 1867, đế quốc Nga bán Alaska cho Hoa Kỳ với giá 7,2 triệu đô la. Vùng đất này quá xa để bảo vệ và khi đó chưa ai biết dưới lòng đất có gì.',
  extra:'Ba mươi năm sau, vàng được tìm thấy ở Klondike gần đó, rồi tới dầu mỏ. Ở Nga, thương vụ này thỉnh thoảng vẫn được nhắc lại như một ví dụ về quyết định nhìn ngắn.',
  word:{ t:'прода́ть', r:'prodát’', vi:'bán' } },

{ lang:'ru', cat:'Lịch sử', art:'space', title:'Sputnik là vật thể nhân tạo đầu tiên bay quanh Trái Đất',
  body:'Ngày 4 tháng 10 năm 1957, Liên Xô phóng Sputnik-1. Quả cầu kim loại nhỏ này phát tín hiệu bíp mà đài nghiệp dư khắp thế giới đều bắt được.',
  extra:'Chữ «спу́тник» nghĩa đen là «người bạn đồng hành» — thứ đi cùng ta trên đường. Nghĩa «vệ tinh» chỉ là nghĩa phái sinh, và chính sự kiện này đã đưa từ tiếng Nga đó vào mọi ngôn ngữ trên thế giới.',
  word:{ t:'спу́тник', r:'spútnik', vi:'vệ tinh; bạn đồng hành' } },

{ lang:'ru', cat:'Lịch sử', art:'parliament', title:'Chuông Sa hoàng chưa bao giờ được gióng',
  body:'Quả chuông khổng lồ trong điện Kremlin nặng hơn 200 tấn. Trong lúc đúc còn dở thì có hoả hoạn, nước dội vào làm vỡ mất một mảng nặng chừng 11 tấn.',
  extra:'Ngay cạnh đó là Đại bác Sa hoàng, cũng chưa từng bắn phát nào trong chiến trận. Hai hiện vật này hay được nhắc tới cùng nhau như một cặp biểu tượng về tham vọng quy mô.',
  word:{ t:'ко́локол', r:'kólokol', vi:'quả chuông' } },

{ lang:'ru', cat:'Lịch sử', art:'letter', title:'Bảng chữ Nga từng có nhiều chữ hơn bây giờ',
  body:'Cuộc cải cách chính tả năm 1918 bỏ đi mấy chữ cái không còn tương ứng với âm nào trong tiếng nói, trong đó có chữ ять (ѣ).',
  extra:'Trước cải cách, học sinh phải học thuộc lòng danh sách những từ viết bằng ѣ, vì không thể nghe mà đoán ra. Sách in trước 1918 nhìn khác hẳn sách ngày nay.',
  word:{ t:'рефо́рма', r:'refórma', vi:'cuộc cải cách' } },

{ lang:'ru', cat:'Lịch sử', art:'library', title:'Nga từng có tỷ lệ biết chữ tăng rất nhanh trong thế kỷ XX',
  body:'Đầu thế kỷ XX phần lớn dân cư nông thôn chưa biết chữ. Chiến dịch xoá mù chữ quy mô lớn sau đó đã đưa tỷ lệ biết chữ lên rất cao trong vài thập niên.',
  extra:'Chiến dịch này có tên «ликбез», viết tắt của «ликвидация безграмотности» — xoá bỏ nạn mù chữ. Ngày nay người Nga vẫn dùng từ «ликбез» theo nghĩa đùa: một buổi phổ cập kiến thức vỡ lòng về chuyện gì đó.',
  word:{ t:'ликбе́з', r:'likbéz', vi:'xoá mù chữ; lớp vỡ lòng' } },

/* ==================================================================
   ===========================  TIẾNG HÀN  ==========================
   ================================================================== */

/* ---------------- Chính trị & bầu cử ---------------- */
{ lang:'ko', cat:'Chính trị', art:'podium', title:'Tổng thống Hàn Quốc chỉ được làm một nhiệm kỳ duy nhất',
  body:'Nhiệm kỳ là 5 năm và hiến pháp không cho phép tái cử, dù chỉ một lần. Đây là điều khoản được đưa vào sau thời kỳ độc tài, nhằm chặn khả năng một người nắm quyền quá lâu.',
  extra:'Hầu hết các nước cho phép tái cử ít nhất một lần, nên quy định của Hàn Quốc khá hiếm. Hệ quả là mỗi tổng thống chỉ có đúng 5 năm để làm xong mọi việc mình hứa.',
  word:{ t:'대통령', r:'daetongnyeong', vi:'tổng thống' } },

{ lang:'ko', cat:'Chính trị', art:'parliament', title:'Quốc hội Hàn Quốc chỉ có một viện, 300 ghế',
  body:'Quốc hội (국회) là cơ quan đơn viện với 300 đại biểu, nhiệm kỳ 4 năm. Một phần được bầu theo khu vực, phần còn lại theo danh sách tỷ lệ của các đảng.',
  extra:'Toà nhà Quốc hội ở đảo Yeouido có mái vòm xanh rất dễ nhận ra. Chữ «국회» gốc Hán là «quốc hội», đọc theo âm Hán–Việt gần như y hệt — một trong vô số từ mà người Việt học tiếng Hàn được lợi.',
  word:{ t:'국회', r:'gukhoe', vi:'quốc hội' } },

{ lang:'ko', cat:'Chính trị', art:'ballot', title:'Ngày bầu cử ở Hàn Quốc là ngày nghỉ toàn quốc',
  body:'Để ai cũng đi bỏ phiếu được, ngày bầu cử được ấn định là ngày nghỉ có lương. Các cuộc bầu cử lớn thường rơi vào giữa tuần chứ không phải cuối tuần.',
  extra:'Lý do chọn ngày giữa tuần: nếu bầu vào thứ Bảy hay Chủ nhật, nhiều người sẽ đi chơi xa thay vì đi bỏ phiếu. Chọn thứ Tư thì ngày nghỉ đó nằm lẻ loi, ít ai đi đâu được.',
  word:{ t:'선거', r:'seongeo', vi:'cuộc bầu cử' } },

{ lang:'ko', cat:'Chính trị', art:'flag', title:'Lá cờ Hàn Quốc kể cả một hệ triết học',
  body:'Vòng tròn giữa là thái cực âm dương, bốn góc là bốn quẻ trong Kinh Dịch: càn (trời), khôn (đất), khảm (nước), ly (lửa). Nền trắng tượng trưng cho sự thanh khiết.',
  extra:'Tên lá cờ là 태극기 — «thái cực kỳ». Người Việt nhìn bốn quẻ này sẽ thấy quen, vì cùng một hệ tư tưởng Đông Á. Đây là một trong số rất ít quốc kỳ mang ký hiệu triết học thay vì ngôi sao hay sọc màu.',
  word:{ t:'태극기', r:'taegeukgi', vi:'quốc kỳ Hàn Quốc' } },

{ lang:'ko', cat:'Chính trị', art:'map', title:'Sejong là thủ đô hành chính, nhưng Seoul vẫn là thủ đô',
  body:'Nhiều bộ ngành đã dời về thành phố Sejong ở miền trung để giảm tải cho vùng thủ đô. Nhưng Quốc hội, Phủ Tổng thống và toà án tối cao vẫn ở Seoul.',
  extra:'Kết quả là công chức Hàn Quốc có một tuyến đi lại đặc thù: xe buýt và tàu nối Seoul – Sejong chạy dày đặc để chở người đi họp. Thành phố này được xây mới hoàn toàn từ đầu những năm 2000.',
  word:{ t:'행정수도', r:'haengjeongsudo', vi:'thủ đô hành chính' } },

{ lang:'ko', cat:'Chính trị', art:'nametag', title:'Seoul không nằm trong tỉnh nào cả',
  body:'Seoul là «đặc biệt thị» (특별시), còn Busan, Incheon, Daegu… là «quảng vực thị» (광역시). Cả hai loại đều ngang cấp tỉnh chứ không trực thuộc tỉnh.',
  extra:'Tỉnh trong tiếng Hàn là 도 (đạo), đọc gần với «đạo» Hán–Việt. Gyeonggi-do bao quanh Seoul nhưng không quản Seoul — giống Hà Nội không thuộc tỉnh nào.',
  word:{ t:'특별시', r:'teukbyeolsi', vi:'thành phố đặc biệt' } },

{ lang:'ko', cat:'Chính trị', art:'ballot', title:'Tuổi đi bầu ở Hàn Quốc đã hạ xuống 18',
  body:'Trước đây phải đủ 19 tuổi mới được bỏ phiếu. Sau một đợt sửa luật, tuổi bầu cử hạ xuống 18, nghĩa là học sinh lớp 12 cũng có thể đi bầu.',
  extra:'Việc này kéo theo một vấn đề thực tế thú vị: trường học phải bàn cách ứng xử khi học sinh trở thành cử tri, kể cả chuyện vận động tranh cử trong khuôn viên trường.',
  word:{ t:'유권자', r:'yugwonja', vi:'cử tri' } },

{ lang:'ko', cat:'Chính trị', art:'stamp', title:'Người Hàn có con dấu cá nhân thay chữ ký',
  body:'도장 là con dấu khắc tên riêng, dùng để ký hợp đồng, mở tài khoản, làm giấy tờ nhà đất. Dấu quan trọng phải đăng ký với chính quyền.',
  extra:'Nhật Bản cũng có tập tục này (hanko). Ngày nay chữ ký và chữ ký số đã phổ biến hơn, nhưng trong các giao dịch lớn thì con dấu đăng ký vẫn có sức nặng pháp lý riêng.',
  word:{ t:'도장', r:'dojang', vi:'con dấu cá nhân' } },

/* ---------------- Luật lệ khác Việt Nam ---------------- */
{ lang:'ko', cat:'Luật pháp', art:'scales', title:'Hàn Quốc đổi toàn bộ hệ thống địa chỉ vào năm 2014',
  body:'Trước đó địa chỉ dựa trên số thửa đất (지번), vốn không theo thứ tự nào cả. Từ 2014 chuyển hẳn sang hệ tên đường và số nhà (도로명주소).',
  extra:'Đây là một cuộc đổi thay khổng lồ: mọi biển hiệu, giấy tờ, bản đồ đều phải làm lại. Người lớn tuổi tới giờ vẫn quen đọc địa chỉ theo kiểu cũ, nên nhiều nơi ghi song song cả hai.',
  word:{ t:'도로명주소', r:'doromyeongjuso', vi:'địa chỉ theo tên đường' } },

{ lang:'ko', cat:'Luật pháp', art:'coin', title:'Có luật giới hạn cả giá trị bữa ăn mời công chức',
  body:'Luật chống tham nhũng thường được gọi theo tên người đề xuất, quy định trần giá trị cho bữa ăn, quà tặng và tiền phúng viếng dành cho công chức, nhà báo, giáo viên.',
  extra:'Khi luật mới có hiệu lực, các nhà hàng đã phải thiết kế riêng thực đơn có giá vừa đúng mức trần. Người Việt sẽ thấy lạ vì ta không có ngưỡng cụ thể tính bằng tiền như vậy.',
  word:{ t:'청탁금지법', r:'cheongtakgeumjibeop', vi:'luật cấm nhờ vả, hối lộ' } },

{ lang:'ko', cat:'Luật pháp', art:'passport', title:'Ai cũng có một số định danh 13 chữ số',
  body:'주민등록번호 là số căn cước công dân, cấp một lần và dùng suốt đời. Sáu số đầu là ngày sinh, số thứ bảy cho biết giới tính và thế kỷ sinh.',
  extra:'Số này gắn với gần như mọi dịch vụ: ngân hàng, bệnh viện, đăng ký game. Vì quá quan trọng nên các vụ rò rỉ dữ liệu ở Hàn Quốc luôn là chuyện lớn, và hiện nhiều nơi đã chuyển sang dùng mã thay thế.',
  word:{ t:'주민등록번호', r:'jumindeungnokbeonho', vi:'số căn cước công dân' } },

{ lang:'ko', cat:'Luật pháp', art:'book', title:'Hàn Quốc từng cấm trẻ em chơi game sau nửa đêm',
  body:'«Luật tắt máy» từng chặn tài khoản game của trẻ dưới 16 tuổi trong khoảng 0–6 giờ sáng. Luật này đã được bãi bỏ vào năm 2021 sau nhiều tranh cãi.',
  extra:'Lý do bãi bỏ: trẻ chỉ cần mượn tài khoản người lớn là lách được, còn game trên điện thoại thì nằm ngoài phạm vi. Đây là ví dụ hay về việc một luật đúng ý tốt nhưng không khả thi về kỹ thuật.',
  word:{ t:'게임', r:'geim', vi:'trò chơi điện tử' } },

{ lang:'ko', cat:'Luật pháp', art:'scales', title:'Tuổi hợp pháp ở Hàn tính theo NĂM sinh, không theo ngày sinh',
  body:'Để mua rượu thuốc lá, người ta chỉ xét năm sinh: cứ sang năm mà năm sinh đủ điều kiện là được, không cần đợi đúng ngày sinh nhật.',
  extra:'Cách tính này gọi là «tuổi năm». Nó tồn tại song song với tuổi quốc tế và tuổi Hàn truyền thống, nên có giai đoạn một người Hàn có tới ba con số tuổi khác nhau cùng lúc.',
  word:{ t:'연 나이', r:'yeon nai', vi:'tuổi tính theo năm sinh' } },

{ lang:'ko', cat:'Luật pháp', art:'apartment', title:'Hút thuốc trong nhà chung cư có thể bị khiếu nại chính thức',
  body:'Khói thuốc bay theo ống thông gió sang nhà khác là vấn đề tranh chấp phổ biến. Nhiều khu chung cư có quy chế riêng, và ban quản lý được quyền can thiệp.',
  extra:'Nơi công cộng thì cấm gần như tuyệt đối: nhà hàng, quán cà phê, bến xe, thậm chí nhiều đoạn vỉa hè có biển cấm hút thuốc kèm mức phạt ghi sẵn.',
  word:{ t:'금연', r:'geumyeon', vi:'cấm hút thuốc' } },

{ lang:'ko', cat:'Luật pháp', art:'coin', title:'Tiền cọc thuê nhà jeonse có thể bằng cả nửa giá trị căn hộ',
  body:'Người thuê đưa một khoản cọc rất lớn, ở miễn phí trong vài năm rồi nhận lại nguyên khoản đó. Chủ nhà lấy lãi từ việc đầu tư số tiền ấy.',
  extra:'Đây là hình thức gần như chỉ có ở Hàn Quốc. Rủi ro là nếu chủ nhà vỡ nợ, người thuê có thể mất cả khoản cọc — nên pháp luật có cơ chế đăng ký quyền ưu tiên để bảo vệ người thuê.',
  word:{ t:'전세', r:'jeonse', vi:'thuê nhà đặt cọc lớn' } },

{ lang:'ko', cat:'Luật pháp', art:'stamp', title:'Sách giáo khoa được chọn theo từng trường, nhưng phải qua thẩm định',
  body:'Nhà nước không in một bộ duy nhất cho cả nước. Nhiều nhà xuất bản cùng làm sách, hội đồng thẩm định duyệt, rồi từng trường chọn bộ phù hợp.',
  extra:'Cách làm này tạo cạnh tranh về chất lượng, nhưng cũng khiến việc chuyển trường giữa năm học hơi rắc rối vì sách khác nhau. Việt Nam gần đây cũng đi theo hướng nhiều bộ sách tương tự.',
  word:{ t:'교과서', r:'gyogwaseo', vi:'sách giáo khoa' } },

/* ---------------- Tên gọi & tên họ ---------------- */
{ lang:'ko', cat:'Tên gọi', art:'nametag', title:'Ba họ Kim, Lee, Park chiếm gần một nửa dân số',
  body:'Kim khoảng một phần năm dân số, Lee và Park cộng lại thêm chừng một phần tư nữa. Gặp ba người Hàn ngẫu nhiên thì rất dễ có một người họ Kim.',
  extra:'Hàn Quốc chỉ có khoảng 280 họ, quá ít so với Trung Quốc hay Việt Nam. Vì thế họ gần như vô dụng trong việc phân biệt người, và người Hàn buộc phải gọi nhau bằng chức danh.',
  word:{ t:'성', r:'seong', vi:'họ' } },

{ lang:'ko', cat:'Tên gọi', art:'family', title:'Cùng họ Kim nhưng khác «bản quán» là khác dòng họ hẳn',
  body:'Mỗi họ chia thành nhiều 본관 — quê gốc của dòng họ. Kim Gimhae và Kim Gyeongju là hai dòng khác nhau, dù viết và đọc giống hệt.',
  extra:'Trước đây luật cấm kết hôn giữa hai người cùng họ cùng bản quán, vì coi như họ hàng. Quy định này đã được bãi bỏ năm 2005, nhưng nhiều gia đình vẫn hỏi bản quán khi bàn chuyện cưới xin.',
  word:{ t:'본관', r:'bongwan', vi:'bản quán, quê gốc dòng họ' } },

{ lang:'ko', cat:'Tên gọi', art:'nametag', title:'Phụ nữ Hàn giữ nguyên họ sau khi kết hôn',
  body:'Khác phương Tây, vợ không đổi sang họ chồng. Con thì mang họ bố theo lệ thường.',
  extra:'Điều này bắt nguồn từ quan niệm dòng họ là huyết thống, không thể đổi bằng hôn nhân. Nên trong một gia đình Hàn, mẹ thường có họ khác với con — chuyện hoàn toàn bình thường.',
  word:{ t:'결혼', r:'gyeolhon', vi:'kết hôn' } },

{ lang:'ko', cat:'Tên gọi', art:'letter', title:'Anh chị em ruột thường có chung một chữ trong tên',
  body:'Tục 돌림자 quy định một âm tiết cố định cho cùng một thế hệ trong dòng họ. Nên nghe tên hai người là đoán được họ cùng đời.',
  extra:'Chữ chung này được ghi sẵn trong gia phả, đôi khi định trước cho cả chục thế hệ sau. Việt Nam cũng có tục đặt tên đệm theo đời, nên người Việt sẽ thấy rất quen.',
  word:{ t:'돌림자', r:'dollimja', vi:'chữ đệm chung theo đời' } },

{ lang:'ko', cat:'Tên gọi', art:'calligraphy', title:'Tên người Hàn thường có chữ Hán đi kèm',
  body:'Phần lớn tên riêng được đặt theo nghĩa chữ Hán, dù viết hằng ngày bằng Hangul. Trên giấy khai sinh có thể ghi cả hai.',
  extra:'Chỉ những chữ Hán nằm trong danh sách được phép mới dùng để đặt tên. Vì thế bố mẹ Hàn khi đặt tên con thường tra từ điển chữ Hán để chọn nghĩa đẹp — giống hệt cách người Việt chọn tên Hán–Việt.',
  word:{ t:'한자', r:'hanja', vi:'chữ Hán' } },

{ lang:'ko', cat:'Tên gọi', art:'nametag', title:'Gọi nhau bằng chức danh chứ ít gọi tên',
  body:'Ở công ty, người ta gọi «부장님», «과장님» — trưởng phòng, trưởng ban. Trong đời sống thì gọi «선생님», «사장님» kể cả khi người đó không phải giáo viên hay giám đốc.',
  extra:'Gọi «사장님» với chủ quán ăn là phép lịch sự bình thường, không phải nịnh. Người Việt sẽ thấy quen, vì ta cũng gọi «anh», «chị», «cô» thay tên riêng.',
  word:{ t:'직함', r:'jikham', vi:'chức danh' } },

{ lang:'ko', cat:'Tên gọi', art:'family', title:'Người Hàn gọi anh chị khác nhau tuỳ giới tính người nói',
  body:'Con trai gọi anh là 형, gọi chị là 누나. Con gái gọi anh là 오빠, gọi chị là 언니. Bốn từ cho hai quan hệ.',
  extra:'Nên chỉ cần nghe một người dùng từ «오빠» là biết người nói là nữ. Tiếng Việt không phân biệt theo giới người nói, nên đây là chỗ người Việt hay quên.',
  word:{ t:'오빠', r:'oppa', vi:'anh (nữ gọi)' } },

{ lang:'ko', cat:'Tên gọi', art:'letter', title:'Tên Hàn viết theo thứ tự họ trước, tên sau',
  body:'Kim Min-jun thì Kim là họ. Khi viết bằng chữ Latinh cho người nước ngoài, nhiều người Hàn đảo lại thành Min-jun Kim, gây lẫn lộn.',
  extra:'Chính phủ Hàn khuyến nghị giữ thứ tự gốc họ trước, viết hoa chữ đầu và nối tên bằng dấu gạch nối. Việt Nam cũng viết họ trước, nên người Việt ít nhầm hơn người phương Tây.',
  word:{ t:'이름', r:'ireum', vi:'tên' } },

/* ---------------- Thiên nhiên ---------------- */
{ lang:'ko', cat:'Thiên nhiên', art:'mountain', title:'Khoảng bảy phần mười diện tích Hàn Quốc là đồi núi',
  body:'Địa hình chủ yếu là núi thấp và trung bình, nên đất bằng để ở và canh tác rất ít. Đó là lý do dân cư dồn vào một số đồng bằng hẹp ven biển.',
  extra:'Cũng vì thiếu đất bằng mà nhà cao tầng mọc lên khắp nơi, kể cả ở thị trấn nhỏ. Và leo núi trở thành môn thể thao quốc dân — vì núi ở ngay sau nhà.',
  word:{ t:'산', r:'san', vi:'núi' } },

{ lang:'ko', cat:'Thiên nhiên', art:'river', title:'Sông Hàn chia đôi Seoul và có tới 30 cây cầu bắc qua',
  body:'한강 rộng hàng trăm mét ngay giữa thành phố. Hai bờ được xây thành công viên chạy dài, là nơi người Seoul đi dạo, đạp xe, cắm trại và ăn gà rán.',
  extra:'Chữ «한» ở đây không phải «Hàn Quốc» mà là một từ cổ nghĩa là «lớn». Cụm «kỳ tích sông Hàn» chỉ giai đoạn kinh tế Hàn Quốc tăng trưởng thần tốc sau chiến tranh.',
  word:{ t:'한강', r:'Hangang', vi:'sông Hàn' } },

{ lang:'ko', cat:'Thiên nhiên', art:'volcano', title:'Đảo Jeju là một ngọn núi lửa nổi giữa biển',
  body:'Cả hòn đảo hình thành từ hoạt động núi lửa, với đỉnh Hallasan cao 1.947 m ở chính giữa — điểm cao nhất Hàn Quốc.',
  extra:'Đảo có hơn 300 nón núi lửa phụ gọi là 오름, và hệ thống ống dung nham được UNESCO ghi danh. Đất đá bazan đen là lý do nhà cổ ở Jeju xây bằng đá đen và có tường rào thấp chắn gió.',
  word:{ t:'한라산', r:'Hallasan', vi:'núi Halla' } },

{ lang:'ko', cat:'Thiên nhiên', art:'weather', title:'Mùa mưa jangma kéo dài liên tục hàng tuần',
  body:'Khoảng cuối tháng 6 tới cuối tháng 7, một dải mưa nằm vắt ngang bán đảo gây mưa dai dẳng. Đây là mùa mưa có tên riêng chứ không chỉ là «mùa mưa».',
  extra:'Người Hàn có cả một nếp sinh hoạt riêng cho jangma: máy hút ẩm chạy suốt, quần áo phơi trong nhà, và món 부침개 (bánh xèo Hàn) được coi là món của ngày mưa.',
  word:{ t:'장마', r:'jangma', vi:'mùa mưa dầm' } },

{ lang:'ko', cat:'Thiên nhiên', art:'snowflake', title:'Bốn mùa ở Hàn Quốc chênh nhau tới 50 độ',
  body:'Mùa hè Seoul có thể trên 35 °C, mùa đông xuống dưới −15 °C. Cùng một thành phố nhưng hai mùa là hai thế giới khác nhau.',
  extra:'Chính vì vậy nhà Hàn có sàn sưởi ondol cho mùa đông và điều hoà cho mùa hè, còn tủ quần áo thì phải thay toàn bộ hai lần mỗi năm. Việt Nam chỉ miền Bắc có mùa đông, mà cũng không lạnh tới mức ấy.',
  word:{ t:'사계절', r:'sagyejeol', vi:'bốn mùa' } },

{ lang:'ko', cat:'Thiên nhiên', art:'coast', title:'Ba mặt Hàn Quốc giáp biển, nhưng mỗi biển một tính',
  body:'Biển Hoàng Hải phía tây nông, đục và thuỷ triều chênh rất lớn. Biển Đông phía đông sâu, trong và bờ dốc. Biển Nam thì rải rác hàng nghìn đảo nhỏ.',
  extra:'Chênh lệch thuỷ triều ở bờ tây có nơi tới gần 10 mét, đủ để lộ ra cả con đường dưới biển nối đảo với đất liền vài lần trong năm — hiện tượng được tổ chức thành lễ hội.',
  word:{ t:'바다', r:'bada', vi:'biển' } },

{ lang:'ko', cat:'Thiên nhiên', art:'forest', title:'Rừng Hàn Quốc gần như được trồng lại từ đầu',
  body:'Sau chiến tranh, đồi núi Hàn Quốc gần như trọc vì bị đốn lấy củi. Một chiến dịch trồng rừng quy mô quốc gia kéo dài nhiều thập niên đã phủ xanh trở lại.',
  extra:'Đây được coi là một trong những chương trình phục hồi rừng thành công nhất thế giới. Ngày nay tỷ lệ che phủ rừng của Hàn Quốc thuộc nhóm cao ở châu Á, và cây được trồng ngay trong lòng thành phố.',
  word:{ t:'숲', r:'sup', vi:'rừng' } },

{ lang:'ko', cat:'Thiên nhiên', art:'weather', title:'Bụi vàng thổi sang mỗi mùa xuân',
  body:'황사 là bụi cát từ các sa mạc phía tây bắc lục địa bay tới theo gió mùa xuân, làm trời mờ đục và không khí khó thở.',
  extra:'Dự báo bụi mịn được phát cùng dự báo thời tiết, và khẩu trang là vật dụng quen thuộc ở Hàn từ trước khi cả thế giới quen với nó. Người Hà Nội sẽ thấy quen với cảnh nhìn chỉ số không khí trước khi ra đường.',
  word:{ t:'황사', r:'hwangsa', vi:'bụi vàng' } },

{ lang:'ko', cat:'Thiên nhiên', art:'forest', title:'Vùng phi quân sự vô tình thành khu bảo tồn thiên nhiên',
  body:'Dải đất rộng 4 km chạy ngang bán đảo bị bỏ hoang hơn bảy mươi năm. Không người ở, không canh tác, nên hệ sinh thái phục hồi gần như nguyên vẹn.',
  extra:'Nhiều loài quý hiếm được ghi nhận ở đây, trong đó có sếu đầu đỏ. Đây là một trong những nghịch lý được nhắc tới nhiều nhất về DMZ: nơi căng thẳng nhất lại là nơi thiên nhiên yên ổn nhất.',
  word:{ t:'비무장지대', r:'bimujangjidae', vi:'vùng phi quân sự' } },

{ lang:'ko', cat:'Thiên nhiên', art:'coast', title:'Hàn Quốc có hơn ba nghìn hòn đảo',
  body:'Phần lớn tập trung ở vùng biển phía tây nam. Chỉ một phần nhỏ trong số đó có người ở.',
  extra:'Nhiều đảo nhỏ được nối với đất liền bằng cầu trong vài chục năm gần đây, làm đổi hẳn đời sống dân đảo. Những đảo còn lại vẫn phụ thuộc vào phà, và lịch phà là chuyện sinh tử khi có bão.',
  word:{ t:'섬', r:'seom', vi:'hòn đảo' } },

/* ---------------- Địa lý & đời sống ---------------- */
{ lang:'ko', cat:'Địa lý', art:'apartment', title:'Một nửa dân số Hàn Quốc sống quanh Seoul',
  body:'Vùng thủ đô gồm Seoul, Incheon và tỉnh Gyeonggi chiếm khoảng một nửa dân số cả nước, trên một diện tích rất nhỏ.',
  extra:'Mức độ tập trung này thuộc hàng cao nhất thế giới và là bài toán chính sách lớn: nhà đắt, giao thông tắc, còn các tỉnh xa thì dân số giảm dần. Đây chính là lý do Sejong được xây.',
  word:{ t:'수도권', r:'sudogwon', vi:'vùng thủ đô' } },

{ lang:'ko', cat:'Địa lý', art:'train', title:'Tàu KTX đi từ đầu này tới đầu kia đất nước trong hơn hai tiếng',
  body:'Seoul – Busan dài khoảng 400 km, tàu cao tốc chạy chừng 2 giờ 15 phút. Nghĩa là có thể đi làm ở đầu kia đất nước rồi về trong ngày.',
  extra:'Khoảng cách này tương đương Hà Nội – Vinh. Vì cả nước gần như nằm trong tầm đi về trong ngày, người Hàn rất hay về quê cuối tuần, và dịp Tết thì toàn bộ hệ thống tàu xe quá tải.',
  word:{ t:'고속철도', r:'gosokcheoldo', vi:'đường sắt cao tốc' } },

{ lang:'ko', cat:'Địa lý', art:'metro', title:'Tàu điện ngầm Seoul có sóng điện thoại ở mọi ga và mọi đường hầm',
  body:'Toàn bộ hệ thống đều phủ sóng di động và wifi, kể cả khi tàu đang chạy sâu dưới lòng đất.',
  extra:'Đây là điều khiến nhiều du khách ngạc nhiên, vì metro ở London hay Paris thì mất sóng trong hầm. Hệ quả nhỏ: toa tàu Seoul rất im, ai cũng cúi nhìn điện thoại.',
  word:{ t:'지하철', r:'jihacheol', vi:'tàu điện ngầm' } },

{ lang:'ko', cat:'Địa lý', art:'apartment', title:'Chung cư Hàn Quốc được đánh số theo cụm, không theo phố',
  body:'Một khu 아파트 gồm nhiều toà đánh số 101동, 102동… và mỗi căn có số riêng. Địa chỉ đầy đủ gồm tên khu, số toà và số căn.',
  extra:'Nhiều khu có cả trường mẫu giáo, phòng tập, sân chơi và siêu thị bên trong. Người Hàn hay nói tên khu chung cư thay cho tên phường khi chỉ đường.',
  word:{ t:'아파트', r:'apateu', vi:'chung cư' } },

{ lang:'ko', cat:'Địa lý', art:'phone', title:'Hàn Quốc gần như không dùng tiền mặt nữa',
  body:'Thẻ và thanh toán qua điện thoại được chấp nhận ở gần như mọi nơi, kể cả quán nhỏ và xe bán hàng rong.',
  extra:'Xe buýt và tàu điện dùng thẻ giao thông chạm là đi. Du khách Việt sang Hàn thường bất ngờ vì đổi nhiều tiền mặt mà không tiêu tới, trong khi ở Việt Nam quán nhỏ vẫn hay chỉ nhận tiền mặt.',
  word:{ t:'현금', r:'hyeongeum', vi:'tiền mặt' } },

{ lang:'ko', cat:'Địa lý', art:'coin', title:'Đơn vị tiền Hàn không có số lẻ',
  body:'Won không chia nhỏ hơn được nữa, tờ nhỏ nhất đang lưu hành là 1.000 won. Giá cả luôn là số tròn, không bao giờ có phần thập phân.',
  extra:'Vì vậy con số trên bảng giá trông rất lớn: một bát mì có thể là 9.000. Mẹo quy đổi nhanh sang tiền Việt là nhân khoảng 19–20 lần, tuỳ tỷ giá từng thời điểm.',
  word:{ t:'원', r:'won', vi:'đồng won' } },

{ lang:'ko', cat:'Địa lý', art:'map', title:'Hàn Quốc hạn chế xuất bản đồ số chi tiết ra nước ngoài',
  body:'Vì lý do an ninh, dữ liệu bản đồ độ chính xác cao không được đưa ra máy chủ đặt ngoài lãnh thổ. Đó là lý do Google Maps ở Hàn Quốc thiếu chỉ đường đi bộ và lái xe.',
  extra:'Người Hàn dùng ứng dụng nội địa như Naver Map hay KakaoMap. Du khách sang Hàn nên cài sẵn một trong hai, nếu không sẽ rất vất vả khi tìm đường.',
  word:{ t:'지도', r:'jido', vi:'bản đồ' } },

{ lang:'ko', cat:'Địa lý', art:'library', title:'Quán cà phê học bài mở tới đêm và tính tiền theo giờ',
  body:'스터디카페 là mô hình phòng học trả tiền theo giờ, có bàn riêng, đèn riêng, yên tĩnh tuyệt đối. Nhiều nơi mở 24 giờ.',
  extra:'Đây là mô hình sinh ra từ áp lực thi cử: nhà chật, thư viện đóng cửa sớm, nên học sinh và người ôn thi công chức cần một chỗ ngồi tính bằng giờ.',
  word:{ t:'스터디카페', r:'seuteodi kape', vi:'quán cà phê tự học' } },

/* ---------------- Ẩm thực ---------------- */
{ lang:'ko', cat:'Ẩm thực', art:'bowl', title:'Gà rán và bia thành một từ ghép riêng',
  body:'치맥 ghép từ 치킨 (gà rán) và 맥주 (bia). Đây là combo quốc dân, đặc biệt khi xem bóng đá hoặc ngồi công viên bờ sông Hàn.',
  extra:'Hàn Quốc có mật độ tiệm gà rán rất cao, nhiều hơn cả một số chuỗi đồ ăn nhanh toàn cầu cộng lại. Gà rán Hàn khác gà rán Mỹ ở lớp sốt phủ ngoài sau khi rán.',
  word:{ t:'치맥', r:'chimaek', vi:'gà rán và bia' } },

{ lang:'ko', cat:'Ẩm thực', art:'bowl', title:'Thịt ba chỉ nướng là món tụ tập mặc định',
  body:'삼겹살 nghĩa đen là «ba lớp thịt». Nướng ngay tại bàn, cuốn với rau xà lách, tỏi sống và tương ssamjang.',
  extra:'Ngày 3 tháng 3 được một số nơi gọi đùa là «ngày samgyeopsal» vì 3–3 gợi tới «ba lớp». Cách cuốn cũng có phép tắc: miếng cuốn phải vừa một miếng ăn, không cắn dở.',
  word:{ t:'삼겹살', r:'samgyeopsal', vi:'thịt ba chỉ nướng' } },

{ lang:'ko', cat:'Ẩm thực', art:'seaweed', title:'Nhân sâm Hàn Quốc được phân loại rất kỹ',
  body:'인삼 tươi, 홍삼 hấp rồi sấy, 백삼 phơi khô — mỗi loại một cách chế biến và một mức giá. Tuổi củ sâm cũng được tính và ghi rõ.',
  extra:'Sâm là quà biếu phổ biến bậc nhất ở Hàn. Vùng Geumsan có cả một khu chợ chuyên sâm, và giá phụ thuộc vào số năm trồng cùng hình dáng củ.',
  word:{ t:'인삼', r:'insam', vi:'nhân sâm' } },

{ lang:'ko', cat:'Ẩm thực', art:'bowl', title:'Có món cá đuối lên men mà chính người Hàn cũng ngại',
  body:'홍어 là cá đuối ủ lên men, có mùi amoniac rất nặng. Đây là đặc sản vùng Jeolla, thường ăn kèm thịt luộc và kimchi.',
  extra:'Món này chia đôi dư luận ngay trong nước: người mê thì mê hẳn, người sợ thì không dám ngồi cùng bàn. Nó đóng vai trò như sầu riêng hay mắm tôm ở Việt Nam — một phép thử khẩu vị.',
  word:{ t:'홍어', r:'hongeo', vi:'cá đuối lên men' } },

{ lang:'ko', cat:'Ẩm thực', art:'bowl', title:'Cơm hộp ngày xưa phải lắc cho đều',
  body:'도시락 kiểu cũ là hộp thiếc đựng cơm, kimchi, trứng và rau. Học sinh đậy nắp rồi lắc mạnh cho các thứ trộn vào nhau trước khi ăn.',
  extra:'Ngày nay nhiều quán bán lại đúng kiểu hộp thiếc này như một món gợi nhớ. Người Việt sẽ thấy gần với cơm nắm hay cơm hộp mang đi học thời bao cấp.',
  word:{ t:'도시락', r:'dosirak', vi:'cơm hộp' } },

{ lang:'ko', cat:'Ẩm thực', art:'bowl', title:'Bánh cá nướng là món của mùa đông',
  body:'붕어빵 là bánh hình con cá diếc, nhân đậu đỏ, nướng trên khuôn gang. Xe bán rong chỉ xuất hiện khi trời lạnh.',
  extra:'Có hẳn ứng dụng do người dùng đóng góp để tìm xe bánh cá gần nhất — vì mỗi năm xe càng ít đi. Sự xuất hiện của xe bánh cá được người Hàn coi là dấu hiệu mùa đông đã tới.',
  word:{ t:'붕어빵', r:'bungeoppang', vi:'bánh cá nhân đậu đỏ' } },

/* ---------------- Động vật ---------------- */
{ lang:'ko', cat:'Động vật', art:'bear', title:'Gấu ngực trăng được thả lại vào núi Jiri',
  body:'Loài gấu này từng gần như biến mất khỏi Hàn Quốc. Một chương trình phục hồi đã nuôi và thả lại chúng vào vườn quốc gia Jirisan từ đầu những năm 2000.',
  extra:'Đàn gấu nay đã sinh sản tự nhiên trong rừng. Biển cảnh báo có gấu trên đường mòn Jirisan là bằng chứng dễ thấy nhất cho sự thành công của chương trình.',
  word:{ t:'반달가슴곰', r:'bandalgaseumgom', vi:'gấu ngực trăng' } },

{ lang:'ko', cat:'Động vật', art:'forest', title:'Hoẵng nước sống đầy ở Hàn Quốc, nhưng hiếm ở nơi khác',
  body:'고라니 là loài hươu nhỏ không có gạc, con đực mọc răng nanh dài chìa ra ngoài. Ở Hàn Quốc chúng rất phổ biến.',
  extra:'Trên thế giới loài này bị xếp vào nhóm dễ tổn thương, nhưng ở Hàn lại đông tới mức bị coi là gây hại cho hoa màu. Việt Nam không có loài này, nên nhìn ảnh nhiều người tưởng là nai con.',
  word:{ t:'고라니', r:'gorani', vi:'hoẵng nước' } },

{ lang:'ko', cat:'Động vật', art:'coast', title:'Rái cá là bảo vật thiên nhiên được bảo vệ',
  body:'수달 sống dọc các con sông và được xếp vào diện bảo vệ nghiêm ngặt. Chúng đã quay lại cả những khúc sông chảy qua thành phố.',
  extra:'Việc rái cá xuất hiện lại ở sông trong đô thị được coi là thước đo chất lượng nước. Mỗi lần có người quay được cảnh rái cá ở sông Hàn là tin đó lên báo.',
  word:{ t:'수달', r:'sudal', vi:'con rái cá' } },

{ lang:'ko', cat:'Động vật', art:'rooster', title:'Truyện lập quốc Silla kể về một quả trứng trong rừng',
  body:'Theo truyền thuyết, tổ của dòng họ Kim vùng Gyeongju được tìm thấy trong một chiếc hộp vàng treo trên cây, bên cạnh có con gà trống gáy.',
  extra:'Vì thế khu rừng đó mang tên 계림 — «rừng gà». Đây là một trong nhiều truyền thuyết lập quốc của Hàn Quốc, bên cạnh câu chuyện con gấu hoá người của Dangun.',
  word:{ t:'닭', r:'dak', vi:'con gà' } },

{ lang:'ko', cat:'Động vật', art:'crow', title:'Quạ và chim ác là được đối xử khác hẳn nhau',
  body:'Chim ác là 까치 là điềm lành, báo có khách quý tới. Còn quạ 까마귀 thì bị coi là điềm gở, dù cả hai đều là chim đen sống gần người.',
  extra:'Thành ngữ «까마귀 고기를 먹었나?» — «ăn thịt quạ à?» dùng để trêu người hay quên, vì dân gian tin quạ là loài đãng trí. Việt Nam cũng coi quạ là điềm xấu, nên chỗ này rất dễ đồng cảm.',
  word:{ t:'까마귀', r:'kkamagwi', vi:'con quạ' } },

{ lang:'ko', cat:'Động vật', art:'forest', title:'Ngựa lùn Jeju là giống riêng của hòn đảo',
  body:'제주 조랑말 thấp bé nhưng dai sức, thích nghi với gió và địa hình đá của Jeju. Giống ngựa này được công nhận là bảo vật thiên nhiên.',
  extra:'Thời Nguyên Mông, Jeju từng là nơi nuôi ngựa cho quân đội. Ngày nay đàn ngựa vẫn thả trên các đồng cỏ ven núi Halla và trở thành hình ảnh quen thuộc của đảo.',
  word:{ t:'조랑말', r:'jorangmal', vi:'ngựa lùn' } },

/* ---------------- Lịch sử ---------------- */
{ lang:'ko', cat:'Lịch sử', art:'book', title:'Bản in kim loại rời cổ nhất còn lại là của Hàn Quốc',
  body:'Cuốn Jikji in năm 1377 bằng kỹ thuật chữ rời kim loại, sớm hơn Gutenberg khoảng bảy mươi năm. Bản còn lại hiện nằm ở Thư viện Quốc gia Pháp.',
  extra:'Điều đáng nói là kỹ thuật này không lan rộng như ở châu Âu, một phần vì tiếng Hàn khi đó vẫn viết bằng chữ Hán với hàng nghìn ký tự — quá nhiều khuôn chữ phải đúc.',
  word:{ t:'직지', r:'Jikji', vi:'sách Jikji' } },

{ lang:'ko', cat:'Lịch sử', art:'crown', title:'Vua Sejong còn cho làm máy đo mưa từ thế kỷ XV',
  body:'Ngoài việc tạo ra Hangul, triều Sejong còn chế và phân phát 측우기 — ống đo lượng mưa bằng đồng — tới các địa phương để ghi chép có hệ thống.',
  extra:'Cùng thời còn có đồng hồ nước tự đánh chuông và đồng hồ mặt trời đặt ngoài phố cho dân xem giờ. Đây là giai đoạn khoa học kỹ thuật phát triển mạnh nhất của triều Joseon.',
  word:{ t:'측우기', r:'cheugugi', vi:'máy đo lượng mưa' } },

{ lang:'ko', cat:'Lịch sử', art:'coast', title:'Thuyền rùa là tàu chiến bọc mái của đô đốc Yi Sun-sin',
  body:'거북선 có mái che phủ kín boong, gắn gai nhọn để chống việc lính địch nhảy sang. Nó được dùng trong các trận thuỷ chiến cuối thế kỷ XVI.',
  extra:'Yi Sun-sin nổi tiếng nhất với trận Myeongnyang, nơi ông chỉ huy một số ít chiến thuyền chặn được hạm đội lớn hơn nhiều lần nhờ lợi dụng dòng chảy xiết của eo biển.',
  word:{ t:'거북선', r:'geobukseon', vi:'thuyền rùa' } },

{ lang:'ko', cat:'Lịch sử', art:'library', title:'Đài quan sát thiên văn Cheomseongdae xây từ thế kỷ VII',
  body:'Tháp đá ở Gyeongju được coi là một trong những công trình quan sát thiên văn còn nguyên vẹn cổ nhất Đông Á.',
  extra:'Tháp cao khoảng 9 m, xếp bằng 362 viên đá — con số được cho là ứng với số ngày trong năm âm lịch. Cách hiểu này còn tranh luận, nhưng tính biểu tượng thì rõ.',
  word:{ t:'첨성대', r:'Cheomseongdae', vi:'đài Cheomseongdae' } },

{ lang:'ko', cat:'Lịch sử', art:'calligraphy', title:'Hangul từng bị giới nho sĩ coi thường suốt nhiều thế kỷ',
  body:'Sau khi được ban hành năm 1446, Hangul bị gọi là «chữ đàn bà» hoặc «chữ trẻ con». Giới có học vẫn viết bằng chữ Hán.',
  extra:'Phải tới cuối thế kỷ XIX đầu XX, khi phong trào dân tộc và báo chí phát triển, Hangul mới trở thành chữ viết chính thức. Tên gọi «한글» cũng chỉ mới có từ thời đó.',
  word:{ t:'훈민정음', r:'Hunminjeongeum', vi:'Huấn dân chính âm' } },

{ lang:'ko', cat:'Lịch sử', art:'book', title:'Thực lục triều Joseon ghi chép liên tục gần 500 năm',
  body:'조선왕조실록 chép việc triều đình qua hàng chục đời vua. Ngay cả vua cũng không được phép đọc phần chép về mình.',
  extra:'Quy tắc đó nhằm giữ cho sử quan chép trung thực. Bộ sách được cất ở nhiều nơi khác nhau để phòng hoả hoạn và chiến tranh, và nay được UNESCO ghi vào danh mục Ký ức Thế giới.',
  word:{ t:'실록', r:'sillok', vi:'thực lục' } },

{ lang:'ko', cat:'Lịch sử', art:'letter', title:'Giấy dâu hanji bền tới mức tính bằng trăm năm',
  body:'한지 làm từ vỏ cây dâu tằm, dai và bền hơn giấy thường rất nhiều. Nó được dùng làm cửa, quạt, áo giấy chứ không chỉ để viết.',
  extra:'Có câu nói dân gian: «lụa sống nghìn năm, giấy sống năm trăm năm». Ngày nay hanji còn được dùng trong phục chế tài liệu cổ ở các bảo tàng châu Âu.',
  word:{ t:'한지', r:'hanji', vi:'giấy dâu truyền thống' } },

{ lang:'ko', cat:'Lịch sử', art:'apartment', title:'Seoul từng gần như bị san phẳng, rồi xây lại từ đầu',
  body:'Chiến tranh giữa thế kỷ XX tàn phá phần lớn thành phố. Công cuộc tái thiết và công nghiệp hoá sau đó diễn ra với tốc độ rất nhanh.',
  extra:'Đó là lý do trung tâm Seoul gần như không có phố cổ liền mạch như Hà Nội hay Kyoto: những khu nhà truyền thống hanok còn lại chỉ là vài cụm được giữ có chủ đích, như làng Bukchon.',
  word:{ t:'재건', r:'jaegeon', vi:'tái thiết' } },

{ lang:'ko', cat:'Lịch sử', art:'crown', title:'Cung Gyeongbok từng bị phá rồi dựng lại nhiều lần',
  body:'Cung chính của triều Joseon bị đốt trong chiến tranh cuối thế kỷ XVI, bỏ hoang gần 300 năm, rồi được xây lại vào thế kỷ XIX, và tiếp tục bị tháo dỡ phần lớn thời thuộc địa.',
  extra:'Công cuộc phục dựng vẫn đang tiếp diễn tới ngày nay, theo bản vẽ và tư liệu cũ. Nên khi tham quan, nhiều toà bạn nhìn thấy là công trình phục dựng gần đây chứ không phải bản gốc.',
  word:{ t:'경복궁', r:'Gyeongbokgung', vi:'cung Gyeongbok' } },

{ lang:'ko', cat:'Lịch sử', art:'coin', title:'Hàn Quốc từng là nước nhận viện trợ, nay là nước cấp viện trợ',
  body:'Sau chiến tranh, Hàn Quốc nằm trong nhóm nghèo nhất thế giới và sống nhờ viện trợ. Chỉ vài thập niên sau, nước này gia nhập nhóm các nước cấp viện trợ phát triển.',
  extra:'Đây là trường hợp chuyển vai hiếm hoi trong lịch sử hiện đại và thường được nhắc tới như «kỳ tích sông Hàn». Với người Việt, câu chuyện này đặc biệt đáng chú ý vì hai nước có xuất phát điểm khá gần nhau.',
  word:{ t:'원조', r:'wonjo', vi:'viện trợ' } },

/* ==================================================================
   ==========================  TIẾNG TRUNG  =========================
   ================================================================== */

/* ---------------- Chính trị & tổ chức nhà nước ---------------- */
{ lang:'zh', cat:'Chính trị', art:'parliament', title:'Đại hội Đại biểu Nhân dân toàn quốc có gần ba nghìn đại biểu',
  body:'全国人民代表大会 là cơ quan quyền lực nhà nước cao nhất, với số đại biểu lên tới khoảng ba nghìn người — thuộc hàng đông nhất thế giới.',
  extra:'Vì quá đông nên kỳ họp toàn thể mỗi năm chỉ kéo dài chừng hai tuần. Công việc thường xuyên do Uỷ ban Thường vụ đảm nhiệm. Tên gọi tắt trong tiếng Trung là 人大.',
  word:{ t:'人民代表大会', r:'rénmín dàibiǎo dàhuì', vi:'đại hội đại biểu nhân dân' } },

{ lang:'zh', cat:'Chính trị', art:'flag', title:'Cờ Trung Quốc có một sao lớn và bốn sao nhỏ',
  body:'Ngôi sao lớn tượng trưng cho sự lãnh đạo, bốn sao nhỏ xếp thành vòng cung hướng về nó. Nền đỏ là màu truyền thống của cách mạng.',
  extra:'Lá cờ do một công dân bình thường thiết kế và được chọn qua cuộc thi năm 1949. Chú ý kỹ sẽ thấy bốn sao nhỏ không song song mà đều nghiêng về phía sao lớn.',
  word:{ t:'五星红旗', r:'wǔxīng hóngqí', vi:'cờ ngũ tinh hồng kỳ' } },

{ lang:'zh', cat:'Chính trị', art:'map', title:'Trung Quốc có bốn thành phố trực thuộc trung ương',
  body:'Bắc Kinh, Thượng Hải, Thiên Tân và Trùng Khánh không thuộc tỉnh nào, mà ngang cấp tỉnh. Cách chia này giống thành phố trực thuộc trung ương ở Việt Nam.',
  extra:'Trùng Khánh có diện tích rất lớn, gồm cả vùng nông thôn rộng — nên gọi là «thành phố» thì hơi lệch với hình dung thông thường. Dân số của riêng Trùng Khánh đã ngang cả một quốc gia trung bình.',
  word:{ t:'直辖市', r:'zhíxiáshì', vi:'thành phố trực thuộc trung ương' } },

{ lang:'zh', cat:'Chính trị', art:'passport', title:'Hộ khẩu quyết định rất nhiều quyền lợi',
  body:'户口 gắn một người với một nơi đăng ký, và nó ảnh hưởng tới việc học của con cái, khám chữa bệnh, mua nhà. Chuyển hộ khẩu giữa các thành phố lớn rất khó.',
  extra:'Chế độ này chia thành hộ khẩu thành thị và nông thôn, tạo ra khoảng cách lớn về phúc lợi. Việt Nam cũng từng có hộ khẩu nặng nề tương tự và đã nới dần, nên người Việt lớn tuổi sẽ thấy rất quen.',
  word:{ t:'户口', r:'hùkǒu', vi:'hộ khẩu' } },

{ lang:'zh', cat:'Chính trị', art:'nametag', title:'Hong Kong và Macau có hệ thống pháp luật riêng',
  body:'Hai đặc khu hành chính giữ hệ thống luật, tiền tệ và cơ quan hải quan riêng. Đi từ đại lục sang phải qua kiểm tra xuất nhập cảnh.',
  extra:'Hong Kong dùng đô la Hong Kong, lái xe bên trái, tiếng Quảng Đông là ngôn ngữ chính trong đời sống. Macau dùng pataca và có tiếng Bồ Đào Nha là ngôn ngữ chính thức thứ hai.',
  word:{ t:'特别行政区', r:'tèbié xíngzhèngqū', vi:'đặc khu hành chính' } },

{ lang:'zh', cat:'Chính trị', art:'stamp', title:'Con dấu của cơ quan quan trọng hơn chữ ký',
  body:'公章 là con dấu tròn màu đỏ của tổ chức. Hợp đồng có chữ ký giám đốc nhưng thiếu dấu thì thường bị coi là chưa hoàn chỉnh.',
  extra:'Vì thế việc giữ con dấu là chuyện hệ trọng trong doanh nghiệp Trung Quốc, và có không ít tranh chấp nội bộ xoay quanh việc ai đang cầm con dấu.',
  word:{ t:'公章', r:'gōngzhāng', vi:'con dấu cơ quan' } },

{ lang:'zh', cat:'Chính trị', art:'coin', title:'Đồng tiền Trung Quốc có hai tên gọi',
  body:'人民币 là tên chính thức của đồng tiền, còn 元 là đơn vị đếm. Trong đời sống, người ta còn hay nói 块 thay cho 元.',
  extra:'Tương tự, 角 là một phần mười 元 nhưng khi nói thì dùng 毛. Nên cùng một giá tiền có tới hai cách đọc: cách viết trên hoá đơn và cách nói ngoài chợ.',
  word:{ t:'人民币', r:'rénmínbì', vi:'nhân dân tệ' } },

{ lang:'zh', cat:'Chính trị', art:'podium', title:'Hai kỳ họp lớn diễn ra cùng lúc mỗi mùa xuân',
  body:'两会 là cách gọi gộp hai kỳ họp thường niên của Đại hội Đại biểu Nhân dân toàn quốc và Hội nghị Hiệp thương Chính trị.',
  extra:'Đây là dịp công bố các chỉ tiêu kinh tế xã hội của năm. Tin tức trong nước suốt tuần đó gần như xoay quanh hai kỳ họp này, và từ 两会 xuất hiện dày đặc trên mặt báo.',
  word:{ t:'两会', r:'liǎnghuì', vi:'hai kỳ họp' } },

/* ---------------- Luật lệ khác Việt Nam ---------------- */
{ lang:'zh', cat:'Luật pháp', art:'scales', title:'Biển số xe ở các thành phố lớn phải bốc thăm mới có',
  body:'Bắc Kinh giới hạn số biển số cấp mỗi năm và tổ chức quay số. Nhiều người chờ nhiều năm vẫn chưa trúng.',
  extra:'Thượng Hải thì đấu giá biển số, và giá có lúc ngang một chiếc ô tô nhỏ. Mục tiêu là giảm ùn tắc và ô nhiễm, nhưng hệ quả là xe điện được ưu tiên cấp biển nên bán rất chạy.',
  word:{ t:'车牌', r:'chēpái', vi:'biển số xe' } },

{ lang:'zh', cat:'Luật pháp', art:'map', title:'Toàn Trung Quốc dùng chung một múi giờ, kể cả vùng cực tây',
  body:'Dù trải dài như cả châu Âu, cả nước dùng giờ Bắc Kinh. Ở Tân Cương, mặt trời có thể mọc lúc gần 10 giờ sáng theo giờ chính thức.',
  extra:'Vì thế nhiều nơi phía tây chạy song song một «giờ địa phương» không chính thức, lệch hai tiếng, dùng trong sinh hoạt hằng ngày. Hỏi giờ hẹn ở Tân Cương là phải hỏi rõ giờ nào.',
  word:{ t:'北京时间', r:'Běijīng shíjiān', vi:'giờ Bắc Kinh' } },

{ lang:'zh', cat:'Luật pháp', art:'passport', title:'Mua vé tàu xe đều phải khai tên thật',
  body:'Vé tàu, vé máy bay và cả sim điện thoại đều gắn với số căn cước. Không có giấy tờ thì không mua được vé.',
  extra:'Khi vào ga, hành khách quẹt thẻ căn cước thay cho vé giấy. Du khách nước ngoài dùng hộ chiếu, nhưng phải xếp hàng ở quầy kiểm tra thủ công chứ không qua cổng tự động được.',
  word:{ t:'实名制', r:'shímíngzhì', vi:'chế độ khai tên thật' } },

{ lang:'zh', cat:'Luật pháp', art:'book', title:'Có quy định giới hạn giờ chơi game của trẻ em',
  body:'Người chưa đủ tuổi thành niên bị giới hạn thời gian chơi game trực tuyến, chỉ được chơi trong một số khung giờ nhất định vào cuối tuần và ngày lễ.',
  extra:'Việc xác minh tuổi dựa trên hệ thống tên thật gắn với căn cước, nên khó lách hơn các nước khác. Đây là một trong những quy định nghiêm ngặt nhất thế giới về vấn đề này.',
  word:{ t:'未成年人', r:'wèichéngniánrén', vi:'người chưa thành niên' } },

{ lang:'zh', cat:'Luật pháp', art:'coin', title:'Pháo hoa bị cấm hoặc hạn chế ở nhiều đô thị',
  body:'Để giảm ô nhiễm và tai nạn, nhiều thành phố lớn cấm đốt pháo trong nội đô, kể cả dịp Tết. Vùng ngoại ô thường chỉ cho đốt trong vài ngày nhất định.',
  extra:'Quy định này từng gây tranh luận vì pháo gắn chặt với Tết Trung Quốc. Một số nơi sau đó nới trở lại, nên trước Tết người dân phải xem thông báo của chính quyền địa phương năm đó.',
  word:{ t:'鞭炮', r:'biānpào', vi:'pháo' } },

{ lang:'zh', cat:'Luật pháp', art:'scales', title:'Phân loại rác được thực thi nghiêm ở một số thành phố',
  body:'Thượng Hải áp dụng phân loại rác bắt buộc từ năm 2019, chia thành rác ướt, rác khô, rác tái chế và rác nguy hại. Bỏ sai có thể bị phạt.',
  extra:'Khó nhất là phân biệt «rác ướt» và «rác khô» vì tiêu chí không theo trực giác. Thời gian đầu có cả ứng dụng tra cứu và câu hỏi «bạn là rác gì?» trở thành câu đùa phổ biến trên mạng.',
  word:{ t:'垃圾分类', r:'lājī fēnlèi', vi:'phân loại rác' } },

{ lang:'zh', cat:'Luật pháp', art:'phone', title:'Nhiều dịch vụ quốc tế không dùng được ở đại lục',
  body:'Một số nền tảng và ứng dụng nước ngoài không truy cập được từ Trung Quốc đại lục. Người dùng trong nước dùng các nền tảng nội địa tương đương.',
  extra:'Với người học tiếng Trung, điều này có mặt tích cực: muốn tìm tài liệu thật thì phải dùng công cụ tìm kiếm và mạng xã hội trong nước, nên tiếp xúc với tiếng Trung tự nhiên nhiều hơn.',
  word:{ t:'网络', r:'wǎngluò', vi:'mạng internet' } },

{ lang:'zh', cat:'Luật pháp', art:'nametag', title:'Tên đặt cho con phải nằm trong bộ chữ máy tính đọc được',
  body:'Nếu chọn một chữ Hán quá hiếm, hệ thống đăng ký hộ tịch và ngân hàng có thể không hiển thị được, gây rắc rối suốt đời cho đứa trẻ.',
  extra:'Đã có những trường hợp phải đổi tên vì máy tính không in ra được chữ đó trên vé tàu hay thẻ ngân hàng. Việt Nam không gặp vấn đề này vì dùng chữ Latinh.',
  word:{ t:'生僻字', r:'shēngpìzì', vi:'chữ hiếm gặp' } },

/* ---------------- Tên gọi & tên họ ---------------- */
{ lang:'zh', cat:'Tên gọi', art:'nametag', title:'Chỉ khoảng một trăm họ chiếm phần lớn dân số',
  body:'Vương, Lý, Trương, Lưu, Trần là những họ đông nhất. Chỉ riêng ba họ đầu đã chiếm một tỷ lệ rất lớn trong hơn một tỷ dân.',
  extra:'Có hẳn một cuốn sách cổ tên «Bách gia tính» liệt kê các họ, và trẻ con ngày xưa học thuộc nó như học bảng chữ cái. Câu mở đầu «赵钱孙李» được sắp theo lý do chính trị thời Tống chứ không theo độ phổ biến.',
  word:{ t:'姓', r:'xìng', vi:'họ' } },

{ lang:'zh', cat:'Tên gọi', art:'family', title:'Tên người Trung Quốc thường chỉ một hoặc hai chữ',
  body:'Họ một chữ, tên một hoặc hai chữ — tổng cộng thường là hai hoặc ba chữ. Rất hiếm tên dài hơn.',
  extra:'Tên một chữ đang được ưa chuộng trở lại, nhưng lại dễ trùng: cả nước có thể có hàng chục nghìn người cùng tên. Vì thế nhiều bố mẹ quay sang chọn chữ ít gặp hơn.',
  word:{ t:'名字', r:'míngzi', vi:'tên' } },

{ lang:'zh', cat:'Tên gọi', art:'calligraphy', title:'Chọn tên con là cả một việc hệ trọng',
  body:'Bố mẹ cân nhắc nghĩa của chữ, số nét, âm đọc và cả sự hài hoà khi đứng cạnh họ. Nhiều gia đình còn tham khảo người có kinh nghiệm.',
  extra:'Một yếu tố ít ai nghĩ tới: phải tránh chữ đồng âm với từ xấu. Ví dụ tên đọc lên nghe giống «thất bại» hay «bệnh tật» thì dù chữ viết rất đẹp cũng bị loại.',
  word:{ t:'取名', r:'qǔmíng', vi:'đặt tên' } },

{ lang:'zh', cat:'Tên gọi', art:'letter', title:'Người Trung Quốc thường có thêm một tên tiếng Anh',
  body:'Rất nhiều người chọn cho mình một tên tiếng Anh dùng trong công việc và lớp học ngoại ngữ. Tên này do chính họ chọn, không phải do bố mẹ đặt.',
  extra:'Vì tự chọn nên đôi khi rất sáng tạo: có người lấy tên là Apple, Seven hay Cherry. Thói quen này bắt đầu từ Hong Kong rồi lan vào đại lục.',
  word:{ t:'英文名', r:'yīngwénmíng', vi:'tên tiếng Anh' } },

{ lang:'zh', cat:'Tên gọi', art:'family', title:'Người Trung Quốc gọi họ hàng bằng những từ cực kỳ chi tiết',
  body:'Bác trai bên bố là 伯伯, chú bên bố là 叔叔, cậu bên mẹ là 舅舅. Mỗi quan hệ có một từ riêng, phân biệt cả bên nội bên ngoại và thứ bậc.',
  extra:'Tiếng Việt cũng phân biệt nội ngoại nhưng hệ thống Trung Quốc còn chi tiết hơn, với cả từ riêng cho anh em họ bên nội và bên ngoại. Trẻ con Trung Quốc phải học thuộc bảng xưng hô này.',
  word:{ t:'亲戚', r:'qīnqi', vi:'họ hàng' } },

{ lang:'zh', cat:'Tên gọi', art:'nametag', title:'Thêm 小 hoặc 老 trước họ là cách gọi thân mật',
  body:'Gọi một người trẻ là 小王, gọi người lớn tuổi hơn là 老王. Cùng một người, cùng một họ, nhưng cách gọi đổi theo tuổi tác và quan hệ.',
  extra:'Cách này rất thông dụng ở nơi làm việc. Người Việt có thể so với việc gọi «bé Lan», «bác Lan» — cùng một nguyên tắc dùng tuổi thay cho tên đầy đủ.',
  word:{ t:'老王', r:'Lǎo Wáng', vi:'ông Vương (thân mật)' } },

{ lang:'zh', cat:'Tên gọi', art:'book', title:'Người xưa có tên huý và tên tự khác nhau',
  body:'Nam giới có học ngày xưa có 名 dùng cho bản thân và người trên, còn 字 là tên tự do bạn bè gọi. Gọi thẳng tên huý bị coi là bất kính.',
  extra:'Vì thế trong sử sách, cùng một nhân vật có khi xuất hiện dưới hai ba cái tên. Việt Nam thời phong kiến cũng theo lệ này, nên các cụ nhà nho đều có tên tự và tên hiệu.',
  word:{ t:'字', r:'zì', vi:'tên tự; chữ' } },

{ lang:'zh', cat:'Tên gọi', art:'letter', title:'Kiêng huý từng khiến cả nước phải đổi chữ',
  body:'Chữ trùng tên vua phải tránh, nên người ta đổi cách viết hoặc dùng chữ khác. Điều này để lại dấu vết trong tên đất, tên người và cả trong văn bản cổ.',
  extra:'Đây là lý do một số địa danh Trung Quốc và Việt Nam đổi tên qua các triều đại. Với người đọc sử, biết luật kiêng huý là công cụ để xác định niên đại của văn bản.',
  word:{ t:'避讳', r:'bìhuì', vi:'kiêng huý' } },

/* ---------------- Thiên nhiên ---------------- */
{ lang:'zh', cat:'Thiên nhiên', art:'river', title:'Trường Giang là con sông dài nhất châu Á',
  body:'长江 dài khoảng 6.300 km, chảy từ cao nguyên Thanh Tạng ra biển Hoa Đông. Đây là sông dài thứ ba thế giới.',
  extra:'Người Trung Quốc thường gọi đoạn hạ lưu là 扬子江, và chính tên này được người phương Tây dùng cho cả con sông — «Yangtze». Trong tiếng Trung, tên chính thức luôn là 长江.',
  word:{ t:'长江', r:'Chángjiāng', vi:'Trường Giang' } },

{ lang:'zh', cat:'Thiên nhiên', art:'river', title:'Hoàng Hà mang tên «sông Vàng» vì chở quá nhiều phù sa',
  body:'黄河 cuốn theo lượng phù sa khổng lồ từ cao nguyên hoàng thổ, làm nước ngả vàng đục. Đây là một trong những con sông nhiều phù sa nhất thế giới.',
  extra:'Phù sa lắng làm đáy sông dâng cao dần, có đoạn lòng sông cao hơn cả đồng ruộng hai bên, phải đắp đê giữ. Lịch sử Trung Quốc gắn liền với những lần Hoàng Hà đổi dòng.',
  word:{ t:'黄河', r:'Huánghé', vi:'Hoàng Hà' } },

{ lang:'zh', cat:'Thiên nhiên', art:'mountain', title:'Trung Quốc có năm ngọn núi thiêng',
  body:'五岳 gồm Thái Sơn ở đông, Hoa Sơn ở tây, Hành Sơn ở nam, Hằng Sơn ở bắc và Tung Sơn ở giữa. Các hoàng đế xưa lên Thái Sơn làm lễ tế trời.',
  extra:'Có câu nói: «đã trèo Ngũ Nhạc rồi thì không cần xem núi nữa». Ngày nay phần lớn đều có cáp treo, nhưng bậc đá leo bộ vẫn còn và vẫn đông người đi.',
  word:{ t:'五岳', r:'wǔyuè', vi:'ngũ nhạc, năm núi thiêng' } },

{ lang:'zh', cat:'Thiên nhiên', art:'mountain', title:'Một phần tư diện tích Trung Quốc là sa mạc hoặc bán sa mạc',
  body:'Vùng tây bắc có sa mạc Taklamakan và Gobi trải rộng. Trong khi đó vùng đông nam lại mưa nhiều và trồng lúa nước.',
  extra:'Chênh lệch này tạo ra một đường phân chia dân cư nổi tiếng: gần như toàn bộ dân số dồn về nửa phía đông, còn nửa phía tây rộng hơn nhưng rất thưa người.',
  word:{ t:'沙漠', r:'shāmò', vi:'sa mạc' } },

{ lang:'zh', cat:'Thiên nhiên', art:'forest', title:'Tre ở Trung Quốc có thể mọc gần một mét một ngày',
  body:'Một số loài tre trong mùa sinh trưởng vươn cao rất nhanh, thuộc nhóm thực vật mọc nhanh nhất thế giới.',
  extra:'Tre không phải cây gỗ mà thuộc họ cỏ. Rừng tre Trung Quốc vừa là nơi sống của gấu trúc, vừa là nguồn vật liệu cho giàn giáo xây dựng, đồ gia dụng và cả giấy.',
  word:{ t:'竹子', r:'zhúzi', vi:'cây tre' } },

{ lang:'zh', cat:'Thiên nhiên', art:'snowflake', title:'Cao nguyên Thanh Tạng được gọi là «cực thứ ba»',
  body:'Vùng này có lượng băng lớn nhất ngoài hai cực Trái Đất, và là nơi bắt nguồn của nhiều con sông lớn châu Á.',
  extra:'Sông Mê Kông chảy qua Việt Nam cũng bắt nguồn từ đây, với tên gọi 澜沧江 trong tiếng Trung. Nên nước ở đồng bằng sông Cửu Long có một phần khởi đầu từ cao nguyên này.',
  word:{ t:'青藏高原', r:'Qīngzàng gāoyuán', vi:'cao nguyên Thanh Tạng' } },

{ lang:'zh', cat:'Thiên nhiên', art:'weather', title:'Gió mùa quyết định mùa vụ của cả nước',
  body:'Mùa hè gió từ biển thổi vào mang mưa, mùa đông gió từ lục địa thổi ra khô và lạnh. Nhịp này chi phối toàn bộ nông nghiệp.',
  extra:'Ranh giới sưởi ấm của Trung Quốc chạy dọc dãy Tần Lĩnh và sông Hoài: phía bắc được cấp sưởi tập thể vào mùa đông, phía nam thì không — dù nhiều nơi phía nam vẫn rất lạnh và ẩm.',
  word:{ t:'季风', r:'jìfēng', vi:'gió mùa' } },

{ lang:'zh', cat:'Thiên nhiên', art:'coast', title:'Quế Lâm có dạng địa hình đá vôi giống vịnh Hạ Long',
  body:'Những ngọn núi đá dựng đứng giữa đồng bằng là kết quả của quá trình karst — đá vôi bị nước hoà tan qua hàng triệu năm.',
  extra:'Cùng một quá trình đã tạo nên vịnh Hạ Long, Tam Cốc và Phong Nha ở Việt Nam. Người Việt tới Quế Lâm thường thấy phong cảnh quen mắt một cách lạ lùng, và lý do nằm ở địa chất.',
  word:{ t:'桂林', r:'Guìlín', vi:'Quế Lâm' } },

{ lang:'zh', cat:'Thiên nhiên', art:'volcano', title:'Trung Quốc nằm trên vùng động đất mạnh',
  body:'Mảng Ấn Độ ép vào mảng Á–Âu tạo ra dãy Himalaya và cũng gây động đất ở Tứ Xuyên, Vân Nam, Cam Túc.',
  extra:'Từ thế kỷ II, Trương Hành đã chế ra một máy phát hiện hướng động đất bằng đồng, với những con rồng ngậm viên bi rơi xuống miệng cóc. Đây là thiết bị đo địa chấn sớm nhất được ghi chép.',
  word:{ t:'地震', r:'dìzhèn', vi:'động đất' } },

{ lang:'zh', cat:'Thiên nhiên', art:'forest', title:'Trung Quốc trồng một «bức tường xanh» chắn cát',
  body:'Chương trình trồng rừng phòng hộ quy mô lớn ở phía bắc nhằm ngăn sa mạc lan rộng và giảm bão cát thổi vào Bắc Kinh.',
  extra:'Đây là một trong những dự án trồng rừng lớn nhất lịch sử, kéo dài nhiều thập niên. Hiệu quả còn được tranh luận, nhưng số lần bão cát nghiêm trọng ở Bắc Kinh đã giảm rõ rệt.',
  word:{ t:'防护林', r:'fánghùlín', vi:'rừng phòng hộ' } },

/* ---------------- Địa lý & đời sống ---------------- */
{ lang:'zh', cat:'Địa lý', art:'train', title:'Mạng đường sắt cao tốc Trung Quốc dài hơn cả thế giới cộng lại',
  body:'Chỉ trong khoảng hai thập niên, Trung Quốc xây dựng mạng lưới 高铁 dài hơn tổng chiều dài đường sắt cao tốc của tất cả các nước khác gộp lại.',
  extra:'Đi từ Bắc Kinh tới Thượng Hải khoảng 1.300 km chỉ mất hơn bốn tiếng. Vé đặt qua điện thoại, vào ga quẹt căn cước, không cần vé giấy.',
  word:{ t:'高铁', r:'gāotiě', vi:'đường sắt cao tốc' } },

{ lang:'zh', cat:'Địa lý', art:'phone', title:'Mã QR có mặt ở mọi nơi, kể cả người ăn xin',
  body:'Thanh toán bằng quét mã phổ biến tới mức nhiều quán nhỏ không giữ tiền lẻ. Xe bán hàng rong cũng dán sẵn mã ở đầu xe.',
  extra:'Điều này gây khó cho du khách nước ngoài vì các ví điện tử trước đây đòi tài khoản ngân hàng trong nước. Gần đây đã có cách liên kết thẻ quốc tế, nhưng vẫn nên chuẩn bị trước khi đi.',
  word:{ t:'二维码', r:'èrwéimǎ', vi:'mã QR' } },

{ lang:'zh', cat:'Địa lý', art:'apartment', title:'Nhà ở Trung Quốc được bán theo mét vuông xây dựng',
  body:'Giá nhà niêm yết theo 平方米, và diện tích tính gồm cả phần hành lang, thang máy chia đều — gọi là diện tích chung.',
  extra:'Vì vậy diện tích sử dụng thực tế nhỏ hơn con số trên hợp đồng khá nhiều. Tỷ lệ giữa hai con số này là điều người mua nhà luôn hỏi kỹ.',
  word:{ t:'平方米', r:'píngfāngmǐ', vi:'mét vuông' } },

{ lang:'zh', cat:'Địa lý', art:'map', title:'Địa chỉ Trung Quốc viết từ lớn tới nhỏ',
  body:'Bắt đầu từ tỉnh, rồi thành phố, quận, đường, số nhà. Ngược hẳn với cách viết của phương Tây.',
  extra:'Cách này giống hệt tiếng Việt và tiếng Hàn. Nó phản ánh một lối tư duy chung của vùng Đông Á: đi từ khung lớn vào chi tiết, cũng như cách viết ngày tháng năm.',
  word:{ t:'地址', r:'dìzhǐ', vi:'địa chỉ' } },

{ lang:'zh', cat:'Địa lý', art:'coin', title:'Thương mại điện tử có ngày mua sắm lớn nhất thế giới',
  body:'Ngày 11 tháng 11 vốn là «ngày độc thân» của giới trẻ, sau trở thành dịp giảm giá lớn nhất năm, với doanh số vượt xa mọi sự kiện tương tự ở nước khác.',
  extra:'Con số 11.11 gồm bốn chữ số 1 đứng riêng lẻ, tượng trưng cho người độc thân. Từ một câu đùa của sinh viên, nó thành một hiện tượng kinh tế.',
  word:{ t:'双十一', r:'shuāng shíyī', vi:'ngày 11 tháng 11' } },

{ lang:'zh', cat:'Địa lý', art:'library', title:'Trung Quốc có hệ thống chữ nổi riêng cho tiếng Trung',
  body:'Chữ nổi tiếng Trung ghi theo âm pinyin và thanh điệu chứ không ghi theo chữ Hán, vì không thể tạo chữ nổi cho hàng chục nghìn ký tự.',
  extra:'Đây là một ví dụ hay cho thấy chữ Hán khó thích ứng thế nào với các hệ thống mã hoá tuyến tính. Cùng lý do đó, máy đánh chữ tiếng Trung thời xưa to như một cái bàn.',
  word:{ t:'盲文', r:'mángwén', vi:'chữ nổi' } },

{ lang:'zh', cat:'Địa lý', art:'apartment', title:'Nhiều chung cư kiêng số tầng có chữ 4',
  body:'四 đọc gần giống 死 (chết), nên nhiều toà nhà bỏ hẳn tầng 4, 14, 24. Thang máy nhảy thẳng từ 3 sang 5.',
  extra:'Một số nơi còn kiêng cả số 13 theo thói quen phương Tây, nên một toà nhà 30 tầng thật có thể đánh số tới 36. Việt Nam cũng kiêng tầng 4 ở một số nơi vì cùng lý do âm Hán–Việt.',
  word:{ t:'楼层', r:'lóucéng', vi:'tầng nhà' } },

{ lang:'zh', cat:'Địa lý', art:'phone', title:'Xe đạp chia sẻ từng bùng nổ rồi để lại «nghĩa địa xe»',
  body:'Khoảng năm 2016–2017, hàng chục công ty đổ hàng triệu xe đạp ra đường các thành phố lớn. Sau khi nhiều công ty phá sản, xe bị thu gom chất thành bãi khổng lồ.',
  extra:'Ảnh chụp từ trên cao các bãi xe đủ màu này từng lan khắp thế giới. Hiện thị trường đã ổn định lại với vài công ty lớn, và xe đạp chia sẻ vẫn là phương tiện phổ biến cho quãng đường ngắn.',
  word:{ t:'共享单车', r:'gòngxiǎng dānchē', vi:'xe đạp chia sẻ' } },

/* ---------------- Ẩm thực ---------------- */
{ lang:'zh', cat:'Ẩm thực', art:'hotpot', title:'Mỗi vùng Trung Quốc có một kiểu bánh bao riêng',
  body:'包子 có nhân và vỏ dày, 馒头 không nhân, 小笼包 vỏ mỏng có nước súp bên trong, 灌汤包 còn nhiều nước hơn nữa.',
  extra:'Ăn 小笼包 có kỹ thuật: cắn một lỗ nhỏ, hút nước súp ra trước rồi mới ăn cả cái. Ăn vội là bỏng miệng — đây là lời cảnh báo mọi người Thượng Hải đều nói với khách.',
  word:{ t:'小笼包', r:'xiǎolóngbāo', vi:'tiểu long bao' } },

{ lang:'zh', cat:'Ẩm thực', art:'tea', title:'Tám trường phái ẩm thực lớn, mỗi vùng một vị chủ đạo',
  body:'八大菜系 gồm Lỗ, Xuyên, Việt, Tô, Mân, Chiết, Tương, Huy. Món Tứ Xuyên cay tê, món Quảng Đông thanh nhẹ, món Hồ Nam cay gắt.',
  extra:'Có câu tóm tắt dân gian: «Đông chua, Tây cay, Nam nhạt, Bắc mặn». Người Việt quen món Quảng Đông nhất vì cộng đồng người Hoa ở Việt Nam phần lớn gốc Quảng.',
  word:{ t:'菜系', r:'càixì', vi:'trường phái ẩm thực' } },

{ lang:'zh', cat:'Ẩm thực', art:'bowl', title:'Đậu phụ thối có mùi nồng nhưng rất được ưa chuộng',
  body:'臭豆腐 là đậu phụ ngâm trong nước ủ lên men rồi đem rán. Mùi rất nặng nhưng vị thì đậm và giòn.',
  extra:'Mỗi vùng làm một kiểu: Trường Sa rán đen, Đài Loan rán vàng ăn kèm dưa chua. Đây là món khiến du khách chia làm hai phe rõ rệt, giống mắm tôm ở Việt Nam.',
  word:{ t:'臭豆腐', r:'chòu dòufu', vi:'đậu phụ thối' } },

{ lang:'zh', cat:'Ẩm thực', art:'hotpot', title:'Người Trung Quốc ăn sáng mặn và nóng',
  body:'Cháo, bánh quẩy, sữa đậu nành, bánh bao hấp, mì nước — bữa sáng thường là đồ nóng và mặn, hiếm khi là đồ nguội hay ngọt.',
  extra:'油条 (bánh quẩy) chấm sữa đậu nành là combo kinh điển miền bắc. Người Việt sẽ thấy quen vì ta cũng ăn quẩy với cháo và phở — cùng một gốc du nhập.',
  word:{ t:'油条', r:'yóutiáo', vi:'bánh quẩy' } },

{ lang:'zh', cat:'Ẩm thực', art:'tea', title:'Rượu trắng Trung Quốc rất nặng độ',
  body:'白酒 cất từ cao lương, độ cồn thường trên 40 độ, có loại tới hơn 50. Đây là rượu dùng trong tiệc tùng và giao tế.',
  extra:'Trên bàn tiệc có cả một hệ thống phép tắc về việc mời rượu: ai mời trước, ly chạm cao hay thấp, uống cạn hay không. Người Việt sẽ thấy khá quen với văn hoá chúc rượu này.',
  word:{ t:'白酒', r:'báijiǔ', vi:'rượu trắng' } },

{ lang:'zh', cat:'Ẩm thực', art:'bowl', title:'Trứng bách thảo không hề được ủ một trăm năm',
  body:'皮蛋 được ủ trong hỗn hợp kiềm chỉ vài tuần tới vài tháng. Lòng trắng chuyển sang màu hổ phách trong, lòng đỏ ngả xanh xám và đặc lại.',
  extra:'Tên tiếng Anh «century egg» gây hiểu lầm lớn. Món này ăn kèm cháo hoặc đậu phụ lạnh, và ở Việt Nam cũng khá phổ biến trong các quán cháo người Hoa.',
  word:{ t:'皮蛋', r:'pídàn', vi:'trứng bách thảo' } },

/* ---------------- Động vật ---------------- */
{ lang:'zh', cat:'Động vật', art:'river', title:'Cá heo sông Dương Tử đã được coi là tuyệt chủng chức năng',
  body:'白鱀豚 là loài cá heo nước ngọt sống ở Trường Giang. Sau các đợt khảo sát không tìm thấy cá thể nào, loài này được coi là tuyệt chủng chức năng.',
  extra:'Đây là một trong những loài thú lớn đầu tiên tuyệt chủng do hoạt động của con người trong thời hiện đại. Hiện còn loài cá heo không vây Trường Giang, cũng đang rất nguy cấp.',
  word:{ t:'白鱀豚', r:'báijìtún', vi:'cá heo sông Dương Tử' } },

{ lang:'zh', cat:'Động vật', art:'forest', title:'Khỉ vàng Vân Nam có bộ mặt hồng và mũi hếch',
  body:'金丝猴 sống ở rừng núi cao, lông ánh vàng. Đây là loài linh trưởng đặc hữu và được bảo vệ nghiêm ngặt.',
  extra:'Chúng sống ở độ cao mà ít loài khỉ nào chịu được, có khi trên 3.000 m, và ăn địa y vào mùa đông. Hình ảnh loài này hay được dùng làm biểu tượng bảo tồn của Trung Quốc bên cạnh gấu trúc.',
  word:{ t:'金丝猴', r:'jīnsīhóu', vi:'khỉ lông vàng' } },

{ lang:'zh', cat:'Động vật', art:'crow', title:'Chim hỷ thước là điềm lành trong văn hoá Trung Hoa',
  body:'喜鹊 có chữ 喜 nghĩa là «vui mừng» ngay trong tên. Dân gian tin nghe tiếng nó kêu là sắp có tin vui.',
  extra:'Trong truyền thuyết Ngưu Lang Chức Nữ, đàn hỷ thước bắc cầu qua sông Ngân cho hai người gặp nhau mỗi năm một lần. Người Hàn cũng coi chim ác là là điềm lành với cùng lý do văn hoá.',
  word:{ t:'喜鹊', r:'xǐquè', vi:'chim hỷ thước' } },

{ lang:'zh', cat:'Động vật', art:'bull', title:'Con trâu trong mười hai con giáp Trung Quốc là bò',
  body:'Chi 丑 trong tiếng Trung là 牛 — con bò. Sang Việt Nam thì thành con trâu, vì trâu mới là con vật gắn với ruộng nước.',
  extra:'Đây là ví dụ rõ nhất về việc mười hai con giáp được bản địa hoá. Con thỏ của Trung Quốc thành con mèo ở Việt Nam cũng theo cùng một cơ chế.',
  word:{ t:'牛', r:'niú', vi:'con bò' } },

{ lang:'zh', cat:'Động vật', art:'koi', title:'Cá chép koi là biểu tượng may mắn trên mạng xã hội',
  body:'Ngoài nghĩa truyền thống về đỗ đạt, hình cá chép còn trở thành một trào lưu: người ta chia sẻ ảnh cá chép để cầu may trước kỳ thi hay phỏng vấn.',
  extra:'Từ 锦鲤 nay được dùng để gọi người cực kỳ may mắn. Đây là ví dụ thú vị về một biểu tượng cổ được giới trẻ tái sử dụng theo cách hoàn toàn mới.',
  word:{ t:'锦鲤', r:'jǐnlǐ', vi:'cá chép koi; người may mắn' } },

{ lang:'zh', cat:'Động vật', art:'panda', title:'Gấu trúc được cho mượn chứ không được tặng',
  body:'Các vườn thú nước ngoài nuôi gấu trúc theo hợp đồng cho mượn có thời hạn, kèm khoản phí dùng cho công tác bảo tồn. Gấu con sinh ra ở nước ngoài vẫn thuộc về Trung Quốc.',
  extra:'Vì thế mỗi lần một chú gấu trúc phải về nước là một sự kiện được truyền thông địa phương đưa tin rầm rộ, với cả lễ tiễn.',
  word:{ t:'熊猫', r:'xióngmāo', vi:'gấu trúc' } },

/* ---------------- Lịch sử ---------------- */
{ lang:'zh', cat:'Lịch sử', art:'greatwall', title:'Trường Thành được xây qua nhiều triều đại khác nhau',
  body:'Các đoạn tường được xây, bỏ, rồi xây lại trong suốt hơn hai nghìn năm. Phần du khách hay thăm gần Bắc Kinh chủ yếu là công trình thời Minh.',
  extra:'Truyền thuyết nói nhìn thấy Trường Thành từ mặt trăng là không đúng: tường hẹp và cùng màu với địa hình xung quanh. Các phi hành gia đã xác nhận không nhìn thấy bằng mắt thường từ quỹ đạo.',
  word:{ t:'长城', r:'Chángchéng', vi:'Trường Thành' } },

{ lang:'zh', cat:'Lịch sử', art:'ballot', title:'Chế độ thi cử chọn quan kéo dài hơn một nghìn ba trăm năm',
  body:'科举 cho phép người thường thi đỗ làm quan, không phụ thuộc dòng dõi. Chế độ này tồn tại từ thời Tuỳ tới đầu thế kỷ XX.',
  extra:'Việt Nam, Hàn Quốc và Nhật Bản đều từng áp dụng mô hình này. Văn Miếu Hà Nội với bia tiến sĩ chính là dấu tích của hệ thống ấy trên đất Việt.',
  word:{ t:'科举', r:'kējǔ', vi:'khoa cử' } },

{ lang:'zh', cat:'Lịch sử', art:'book', title:'Trung Quốc in tiền giấy sớm hơn châu Âu nhiều thế kỷ',
  body:'Tiền giấy xuất hiện từ thời Tống, khi việc mang theo tiền đồng nặng nề trở nên bất tiện cho thương nhân.',
  extra:'Marco Polo viết về tiền giấy Trung Hoa với giọng kinh ngạc, vì châu Âu khi đó chưa có khái niệm này. Tiền giấy đầu tiên vốn là giấy biên nhận gửi tiền, rồi dần được dùng thay tiền thật.',
  word:{ t:'纸币', r:'zhǐbì', vi:'tiền giấy' } },

{ lang:'zh', cat:'Lịch sử', art:'map', title:'Đô đốc Trịnh Hoà dẫn hạm đội đi xa hơn cả Columbus',
  body:'Bảy chuyến hải hành đầu thế kỷ XV đưa hạm đội Trung Hoa tới Đông Nam Á, Ấn Độ, bán đảo Ả Rập và bờ đông châu Phi.',
  extra:'Những chuyến đi này diễn ra trước Columbus vài chục năm, với những con tàu lớn hơn nhiều. Sau đó triều đình quyết định dừng hẳn chương trình hàng hải, một bước ngoặt mà sử gia còn bàn tới nay.',
  word:{ t:'郑和', r:'Zhèng Hé', vi:'Trịnh Hoà' } },

{ lang:'zh', cat:'Lịch sử', art:'calligraphy', title:'Tần Thuỷ Hoàng thống nhất cả chữ viết lẫn trục bánh xe',
  body:'Sau khi thống nhất các nước, ông cho chuẩn hoá chữ viết, đơn vị đo lường, tiền tệ và cả khoảng cách giữa hai bánh xe.',
  extra:'Chuẩn hoá trục bánh xe nghe lạ nhưng rất thực tế: đường đất khi đó hằn sâu vết bánh, xe khác cỡ trục thì không đi được. Thống nhất chữ viết mới là di sản lâu dài nhất — nó giữ cho các vùng nói tiếng khác nhau vẫn đọc chung một văn bản.',
  word:{ t:'统一', r:'tǒngyī', vi:'thống nhất' } },

{ lang:'zh', cat:'Lịch sử', art:'river', title:'Đại Vận Hà là kênh đào nhân tạo dài nhất thế giới',
  body:'京杭大运河 nối Bắc Kinh với Hàng Châu, dài gần 1.800 km, đào và mở rộng qua nhiều triều đại.',
  extra:'Con kênh này nối Hoàng Hà với Trường Giang, cho phép chở lương thực từ vùng lúa gạo phía nam ra kinh đô phía bắc. Nó là hạ tầng quyết định sự tồn tại của các triều đình Bắc Kinh.',
  word:{ t:'大运河', r:'dàyùnhé', vi:'Đại Vận Hà' } },

{ lang:'zh', cat:'Lịch sử', art:'stamp', title:'La bàn ban đầu dùng để xem hướng nhà chứ không để đi biển',
  body:'Thiết bị chỉ hướng bằng từ tính xuất hiện sớm ở Trung Quốc và được dùng trong phong thuỷ trước khi trở thành công cụ hàng hải.',
  extra:'Dạng sớm nhất là một cái thìa bằng đá nam châm đặt trên đĩa đồng, cán thìa tự quay về hướng nam. Vì thế tiếng Trung gọi la bàn là 指南针 — «kim chỉ nam», chứ không phải chỉ bắc như phương Tây.',
  word:{ t:'指南针', r:'zhǐnánzhēn', vi:'la bàn, kim chỉ nam' } },

{ lang:'zh', cat:'Lịch sử', art:'coin', title:'Con đường Tơ lụa không phải một con đường',
  body:'Đó là mạng lưới nhiều tuyến buôn bán trên bộ và trên biển, nối Trung Quốc với Trung Á, Ba Tư và châu Âu qua nhiều chặng trung gian.',
  extra:'Cái tên «Con đường Tơ lụa» do một nhà địa lý người Đức đặt vào thế kỷ XIX, chứ người đương thời không gọi như vậy. Hàng hoá đi qua nhiều tay buôn, hiếm ai đi trọn tuyến.',
  word:{ t:'丝绸之路', r:'sīchóu zhī lù', vi:'Con đường Tơ lụa' } },

{ lang:'zh', cat:'Lịch sử', art:'library', title:'Bộ bách khoa thời Minh lớn tới mức không thể in nổi',
  body:'永乐大典 huy động hàng nghìn người biên soạn, gồm hơn hai vạn quyển. Vì quá đồ sộ nên nó chưa bao giờ được khắc in, chỉ chép tay vài bản.',
  extra:'Phần lớn đã thất lạc qua chiến tranh và hoả hoạn; ngày nay chỉ còn lại vài trăm quyển rải rác ở các thư viện khắp thế giới. Đây từng là bộ bách khoa toàn thư lớn nhất thế giới suốt nhiều thế kỷ.',
  word:{ t:'百科全书', r:'bǎikē quánshū', vi:'bách khoa toàn thư' } },

{ lang:'zh', cat:'Thiên nhiên', art:'coast', title:'Trung Quốc có hồ nước mặn cao hơn cả đỉnh Fansipan',
  body:'Hồ Thanh Hải nằm ở độ cao khoảng 3.200 m, là hồ lớn nhất Trung Quốc và là hồ nước mặn nội địa.',
  extra:'Nước mặn vì hồ không có đường thoát ra biển: nước chỉ bốc hơi, để lại muối tích tụ dần. Đây cũng là nguyên lý tạo nên Biển Chết và Biển Caspi.',
  word:{ t:'青海湖', r:'Qīnghǎi Hú', vi:'hồ Thanh Hải' } }
,

/* ==================================================================
   ==========================  TIẾNG NHẬT  ==========================
   ================================================================== */

/* ---------------- Chính trị & tổ chức nhà nước ---------------- */
{ lang:'ja', cat:'Chính trị', art:'parliament', title:'Quốc hội Nhật có hai viện, và viện dưới mạnh hơn',
  body:'国会 gồm Chúng nghị viện và Tham nghị viện. Khi hai viện bất đồng, Chúng nghị viện có quyền quyết định cuối cùng về ngân sách, điều ước và việc chọn thủ tướng.',
  extra:'Chữ 国会 đọc theo âm Hán–Việt là «quốc hội», giống hệt tiếng Việt và tiếng Hàn. Đây là một trong vô số từ chính trị mà ba nước cùng dùng — thật ra do người Nhật dịch từ tiếng phương Tây thời Minh Trị rồi lan ngược sang Trung Quốc và Việt Nam.',
  word:{ t:'国会', r:'こっかい / kokkai', vi:'quốc hội' } },

{ lang:'ja', cat:'Chính trị', art:'podium', title:'Nhật Bản có thủ tướng, không có tổng thống',
  body:'Người đứng đầu chính phủ là 内閣総理大臣, do Quốc hội chọn chứ không do dân bầu trực tiếp. Thiên hoàng là biểu tượng quốc gia, không nắm quyền chính trị.',
  extra:'Vì thủ tướng phụ thuộc vào đa số trong Quốc hội nên nhiệm kỳ thường không dài. Có giai đoạn Nhật đổi thủ tướng gần như mỗi năm một lần.',
  word:{ t:'総理大臣', r:'そうりだいじん / sōri daijin', vi:'thủ tướng' } },

{ lang:'ja', cat:'Chính trị', art:'crown', title:'Hoàng gia Nhật Bản không có họ',
  body:'Thiên hoàng và các thành viên hoàng tộc chỉ có tên riêng. Vì thế khi công chúa kết hôn với thường dân, bà phải rời hoàng tộc và mang họ của chồng.',
  extra:'Hiến pháp sau năm 1947 quy định Thiên hoàng là «biểu tượng của quốc gia và của sự thống nhất dân tộc», thực hiện nghi lễ nhà nước theo lời khuyên của nội các chứ không có quyền chính trị.',
  word:{ t:'天皇', r:'てんのう / tennō', vi:'Thiên hoàng' } },

{ lang:'ja', cat:'Chính trị', art:'map', title:'Nhật Bản chia thành 47 «đô đạo phủ huyện»',
  body:'Có 1 đô (Tokyo), 1 đạo (Hokkaido), 2 phủ (Osaka, Kyoto) và 43 huyện. Bốn loại tên gọi nhưng đều ngang cấp nhau về hành chính.',
  extra:'Chữ 県 đọc Hán–Việt là «huyện», nhưng ở Nhật nó tương đương với TỈNH của Việt Nam chứ không phải huyện. Đây là bẫy dịch thuật rất hay gặp.',
  word:{ t:'都道府県', r:'とどうふけん / todōfuken', vi:'đô đạo phủ huyện' } },

{ lang:'ja', cat:'Chính trị', art:'ballot', title:'Người Nhật đi bầu bằng cách VIẾT TAY tên ứng cử viên',
  body:'Không có sẵn danh sách để tích chọn. Cử tri tự viết tên người hoặc tên đảng mình chọn lên lá phiếu trắng.',
  extra:'Cách này sinh ra một vấn đề thật: phiếu viết sai chính tả hoặc chữ xấu phải đem ra hội đồng phán xét. Có những kỳ bầu cử mà số phiếu gây tranh cãi lên tới hàng nghìn.',
  word:{ t:'投票', r:'とうひょう / tōhyō', vi:'bỏ phiếu' } },

{ lang:'ja', cat:'Chính trị', art:'flag', title:'Quốc kỳ Nhật chính là hình vẽ của tên nước',
  body:'日の丸 nghĩa đen là «vòng tròn mặt trời»: nền trắng, một đĩa đỏ. Tên nước 日本 nghĩa là «gốc của mặt trời» — xứ sở mặt trời mọc.',
  extra:'Cách gọi đó xuất phát từ vị trí của Nhật khi nhìn từ Trung Hoa. Đĩa đỏ trên cờ được đặt hơi lệch về phía cán một chút chứ không hoàn toàn chính giữa.',
  word:{ t:'日の丸', r:'ひのまる / hinomaru', vi:'quốc kỳ Nhật Bản' } },

{ lang:'ja', cat:'Chính trị', art:'stamp', title:'Con dấu hanko vẫn có giá trị pháp lý',
  body:'判子 là con dấu khắc họ, dùng thay chữ ký trên hợp đồng và giấy tờ ngân hàng. Loại quan trọng nhất là 実印 phải đăng ký với chính quyền địa phương.',
  extra:'Có phong trào bỏ bớt hanko trong thủ tục hành chính để số hoá, nhưng thói quen vẫn rất dai. Người nước ngoài sống ở Nhật thường phải đặt khắc riêng một con dấu tên mình bằng katakana.',
  word:{ t:'判子', r:'はんこ / hanko', vi:'con dấu cá nhân' } },

{ lang:'ja', cat:'Chính trị', art:'passport', title:'Nhật Bản cấp thẻ số cá nhân gọi là My Number',
  body:'マイナンバー là mã 12 chữ số gắn với thuế, bảo hiểm xã hội và thủ tục hành chính, bắt đầu áp dụng từ năm 2016.',
  extra:'Việc phổ biến thẻ này gặp không ít trở ngại vì lo ngại về quyền riêng tư. So với Hàn Quốc, nơi số căn cước đã dùng từ rất lâu, Nhật đi sau khá xa trong việc số hoá giấy tờ.',
  word:{ t:'マイナンバー', r:'mai nanbā', vi:'số định danh cá nhân' } },

/* ---------------- Luật lệ khác Việt Nam ---------------- */
{ lang:'ja', cat:'Luật pháp', art:'scales', title:'Muốn mua ô tô phải chứng minh có chỗ đỗ xe',
  body:'Ở phần lớn đô thị, người mua xe phải nộp giấy chứng nhận có nơi đỗ cố định thì mới đăng ký được. Không có chỗ đỗ thì không mua được xe.',
  extra:'Quy định này là lý do đường phố Nhật gần như không có xe đỗ qua đêm dưới lòng đường. Người Việt sẽ thấy đây là một cách tiếp cận rất khác với ta.',
  word:{ t:'車庫証明', r:'しゃこしょうめい / shako shōmei', vi:'giấy chứng nhận chỗ đỗ xe' } },

{ lang:'ja', cat:'Luật pháp', art:'coin', title:'Xe hơi cũ ở Nhật phải qua kiểm định rất tốn kém',
  body:'車検 là đợt kiểm định bắt buộc, làm lại mỗi hai năm với xe cũ. Chi phí cao tới mức nhiều người thấy bán xe đi còn rẻ hơn giữ lại.',
  extra:'Đó là lý do xe Nhật cũ nhưng còn rất tốt được xuất khẩu ồ ạt sang các nước khác. Nhiều xe chạy ở Đông Nam Á và châu Phi chính là xe hết hạn kiểm định ở Nhật.',
  word:{ t:'車検', r:'しゃけん / shaken', vi:'kiểm định xe' } },

{ lang:'ja', cat:'Luật pháp', art:'nametag', title:'Vợ chồng Nhật bắt buộc phải cùng một họ',
  body:'Luật dân sự quy định hai người kết hôn phải chọn chung một họ. Trên thực tế, phần lớn là vợ đổi theo họ chồng.',
  extra:'Đây là điểm khác hẳn Hàn Quốc, Trung Quốc và Việt Nam — nơi phụ nữ giữ nguyên họ. Quy định này đang là đề tài tranh luận kéo dài ở Nhật, vì nhiều người muốn được giữ họ riêng.',
  word:{ t:'夫婦', r:'ふうふ / fūfu', vi:'vợ chồng' } },

{ lang:'ja', cat:'Luật pháp', art:'book', title:'Nhật Bản ghi hộ tịch theo gia đình, không theo cá nhân',
  body:'戸籍 ghi lại toàn bộ sự kiện của một gia đình: sinh, kết hôn, ly hôn, mất. Mỗi lần kết hôn là lập một hộ tịch mới.',
  extra:'Hệ thống này rất chi tiết và được lưu giữ lâu dài, đến mức có thể truy ngược nhiều đời. Đó cũng là lý do nhiều thủ tục thay đổi nhân thân ở Nhật kéo theo rất nhiều giấy tờ.',
  word:{ t:'戸籍', r:'こせき / koseki', vi:'hộ tịch' } },

{ lang:'ja', cat:'Luật pháp', art:'apartment', title:'Thuê nhà ở Nhật phải trả thêm «tiền lễ» không hoàn lại',
  body:'礼金 là khoản tặng chủ nhà, thường bằng một hai tháng tiền thuê, và không được trả lại khi dọn đi. Khác với 敷金 là tiền đặt cọc có hoàn.',
  extra:'Ngoài ra còn cần người bảo lãnh và phí môi giới. Tổng chi phí ban đầu để dọn vào một căn hộ Nhật có thể bằng bốn năm tháng tiền thuê — cú sốc quen thuộc với du học sinh.',
  word:{ t:'礼金', r:'れいきん / reikin', vi:'tiền lễ cho chủ nhà' } },

{ lang:'ja', cat:'Luật pháp', art:'scales', title:'Đi xe đạp ở Nhật cũng có luật rất chặt',
  body:'Xe đạp được coi là phương tiện giao thông nhẹ. Đi ngược chiều, chở hai, không bật đèn khi trời tối hay vừa đi vừa dùng điện thoại đều là vi phạm.',
  extra:'Xe đạp cũng phải đăng ký tên chủ. Cảnh sát có thể dừng kiểm tra bất kỳ lúc nào, và một chiếc xe không khớp tên chủ sẽ bị nghi là xe trộm.',
  word:{ t:'自転車', r:'じてんしゃ / jitensha', vi:'xe đạp' } },

{ lang:'ja', cat:'Luật pháp', art:'coin', title:'Người Nhật được chọn gửi một phần thuế về quê',
  body:'ふるさと納税 cho phép chuyển một phần thuế cư trú cho một địa phương bất kỳ, thường là quê hương hoặc nơi mình muốn ủng hộ.',
  extra:'Đổi lại, địa phương gửi tặng đặc sản. Chương trình này trở thành một cuộc cạnh tranh về quà tặng giữa các tỉnh, và có cả trang web so sánh quà như mua sắm trực tuyến.',
  word:{ t:'ふるさと納税', r:'furusato nōzei', vi:'thuế gửi về quê' } },

{ lang:'ja', cat:'Luật pháp', art:'snowflake', title:'Mỗi địa phương có lịch đổ rác riêng và rất nghiêm',
  body:'Rác cháy được, không cháy được, chai nhựa, lon, giấy — mỗi loại một ngày. Đổ sai ngày thì túi rác bị dán giấy nhắc nhở và để lại tại chỗ.',
  extra:'Có địa phương phát hẳn quyển sổ tay phân loại rác dày vài chục trang, dịch ra nhiều thứ tiếng cho người nước ngoài. Đây thường là bài học hội nhập đầu tiên của du học sinh ở Nhật.',
  word:{ t:'ゴミ出し', r:'ごみだし / gomidashi', vi:'việc đổ rác' } },

/* ---------------- Tên gọi & tên họ ---------------- */
{ lang:'ja', cat:'Tên gọi', art:'nametag', title:'Nhật Bản có tới hơn một trăm nghìn họ',
  body:'Khác hẳn Hàn Quốc chỉ có vài trăm họ, Nhật Bản có số họ nhiều bậc nhất thế giới. Phần lớn được đặt ồ ạt vào thời Minh Trị, khi thường dân được yêu cầu phải có họ.',
  extra:'Vì đặt vội nên nhiều họ lấy ngay cảnh vật quanh nhà: 田中 «giữa ruộng», 山本 «chân núi», 小林 «rừng nhỏ», 井上 «trên giếng». Đọc họ người Nhật gần như là đọc một bản đồ làng quê.',
  word:{ t:'苗字', r:'みょうじ / myōji', vi:'họ' } },

{ lang:'ja', cat:'Tên gọi', art:'letter', title:'Cùng một chữ Hán trong tên có thể đọc nhiều kiểu',
  body:'Tên riêng tiếng Nhật không có quy tắc đọc cố định. Chữ 優 có thể đọc là Yū, Masaru hay Yutaka tuỳ ý bố mẹ.',
  extra:'Vì thế danh thiếp Nhật luôn in kèm furigana, và mọi biểu mẫu đều có dòng riêng để ghi cách đọc. Gặp người mới, hỏi cách đọc tên là chuyện hoàn toàn bình thường chứ không bất lịch sự.',
  word:{ t:'読み方', r:'よみかた / yomikata', vi:'cách đọc' } },

{ lang:'ja', cat:'Tên gọi', art:'family', title:'Đuôi -san, -kun, -chan không dùng lẫn lộn được',
  body:'さん là trung tính lịch sự, くん thường dùng với nam giới trẻ hoặc cấp dưới, ちゃん thân mật với trẻ con và bạn rất thân.',
  extra:'Tuyệt đối không tự thêm đuôi cho chính mình. Nói «私は田中さんです» là sai — tự nâng mình lên. Đây là lỗi kinh điển của người mới học.',
  word:{ t:'敬称', r:'けいしょう / keishō', vi:'đuôi kính ngữ sau tên' } },

{ lang:'ja', cat:'Tên gọi', art:'nametag', title:'Người Nhật gọi nhau bằng HỌ, không phải tên',
  body:'Ở công ty và trường học, gọi «Tanaka-san» là bình thường. Gọi bằng tên riêng chỉ dành cho gia đình và bạn rất thân.',
  extra:'Đây là điểm khác Việt Nam, nơi ta gọi tên riêng và gần như không gọi họ. Người Việt sang Nhật hay quen miệng gọi tên riêng, và người Nhật sẽ thấy hơi đường đột.',
  word:{ t:'名字で呼ぶ', r:'みょうじでよぶ', vi:'gọi bằng họ' } },

{ lang:'ja', cat:'Tên gọi', art:'calligraphy', title:'Chữ dùng đặt tên bị giới hạn trong một danh sách',
  body:'Chỉ những chữ Hán nằm trong danh sách 人名用漢字 và 常用漢字 mới được dùng để đặt tên cho trẻ sơ sinh.',
  extra:'Danh sách này được bổ sung dần theo thời gian. Đã có vụ kiện nổi tiếng khi bố mẹ muốn đặt tên con bằng một chữ không nằm trong danh sách và bị từ chối đăng ký.',
  word:{ t:'人名用漢字', r:'じんめいようかんじ', vi:'chữ Hán dùng đặt tên' } },

{ lang:'ja', cat:'Tên gọi', art:'letter', title:'Tên người nước ngoài viết bằng katakana',
  body:'Mọi tên nước ngoài đều chuyển sang katakana theo âm. «Quân» thành クアン, «Nguyễn» thành グエン.',
  extra:'Vì hệ âm tiếng Nhật không có nhiều phụ âm cuối, tên tiếng Việt thường bị biến dạng khá nhiều. Nhiều người Việt ở Nhật chủ động chọn sẵn cách viết katakana cho tên mình để tránh mỗi nơi ghi một kiểu.',
  word:{ t:'カタカナ', r:'katakana', vi:'chữ katakana' } },

{ lang:'ja', cat:'Tên gọi', art:'family', title:'Người Nhật ít dùng đại từ «anh», «bạn»',
  body:'Dùng あなた với người trên là bất lịch sự. Thay vào đó, người ta gọi thẳng bằng họ hoặc chức danh, kể cả khi đang nói chuyện trực tiếp với người đó.',
  extra:'Nên một câu như «Tanaka-san có rảnh không?» được dùng ngay cả khi đang nói với chính ông Tanaka. Tiếng Việt cũng làm tương tự khi ta nói «anh có rảnh không» thay vì dùng đại từ trung tính.',
  word:{ t:'あなた', r:'anata', vi:'bạn, anh, chị' } },

{ lang:'ja', cat:'Tên gọi', art:'book', title:'Thứ tự họ tên tiếng Nhật đang được trả lại như cũ',
  body:'Lâu nay khi viết bằng chữ Latinh, người Nhật đảo thành tên trước họ sau theo kiểu phương Tây. Chính phủ đã khuyến nghị quay lại thứ tự gốc: họ trước, tên sau.',
  extra:'Cách viết được khuyến nghị là viết HỌ in hoa toàn bộ để tránh nhầm: YAMADA Taro. Trung Quốc và Hàn Quốc vốn đã giữ nguyên thứ tự gốc từ lâu.',
  word:{ t:'名前', r:'なまえ / namae', vi:'tên' } },

/* ---------------- Thiên nhiên ---------------- */
{ lang:'ja', cat:'Thiên nhiên', art:'volcano', title:'Nhật Bản có hơn một trăm núi lửa còn hoạt động',
  body:'Nằm trên vành đai lửa Thái Bình Dương, Nhật chiếm một tỷ lệ đáng kể số núi lửa hoạt động của thế giới trên một diện tích rất nhỏ.',
  extra:'Đây vừa là hiểm hoạ vừa là món quà: chính hoạt động núi lửa tạo ra hàng nghìn suối nước nóng onsen trải khắp cả nước.',
  word:{ t:'火山', r:'かざん / kazan', vi:'núi lửa' } },

{ lang:'ja', cat:'Thiên nhiên', art:'mountain', title:'Ba phần tư diện tích Nhật Bản là đồi núi',
  body:'Đất bằng rất ít và tập trung ở vài đồng bằng ven biển. Dân cư, thành phố và ruộng đồng đều dồn vào phần diện tích nhỏ đó.',
  extra:'Đồng bằng Kanto quanh Tokyo là vùng bằng phẳng lớn nhất, và cũng là nơi tập trung dân số đông nhất. Phần còn lại của đất nước phần lớn là rừng núi.',
  word:{ t:'山地', r:'さんち / sanchi', vi:'vùng núi' } },

{ lang:'ja', cat:'Thiên nhiên', art:'snowflake', title:'Bờ biển phía tây Nhật Bản là một trong những nơi tuyết dày nhất thế giới',
  body:'Gió lạnh từ lục địa thổi qua biển Nhật Bản, hút hơi ẩm rồi đổ xuống thành tuyết khi gặp núi. Có nơi tuyết dày hàng mét.',
  extra:'Xét riêng những thành phố đông dân mà tuyết dày, Nhật Bản đứng đầu thế giới. Nhà ở vùng này có mái rất dốc, và có hệ thống phun nước ấm giữa đường để tuyết không đóng băng.',
  word:{ t:'豪雪', r:'ごうせつ / gōsetsu', vi:'tuyết dày' } },

{ lang:'ja', cat:'Thiên nhiên', art:'coast', title:'Nhật Bản có gần mười bốn nghìn hòn đảo',
  body:'Sau một đợt khảo sát lại bằng bản đồ số, con số đảo được cập nhật lên hơn 14.000 — nhiều hơn hẳn con số 6.852 dùng suốt mấy chục năm trước.',
  extra:'Số đảo tăng không phải vì có đảo mới, mà vì kỹ thuật đo đạc chính xác hơn tách được những mỏm đá trước đây bị tính gộp. Bốn đảo lớn nhất vẫn là Honshu, Hokkaido, Kyushu và Shikoku.',
  word:{ t:'島', r:'しま / shima', vi:'hòn đảo' } },

{ lang:'ja', cat:'Thiên nhiên', art:'weather', title:'Nhật Bản có mùa mưa riêng gọi là tsuyu',
  body:'梅雨 nghĩa đen là «mưa mận», kéo dài chừng một tháng vào đầu mùa hè. Trời ẩm liên tục, quần áo phơi không khô.',
  extra:'Tên gọi gắn với mùa quả mận chín. Đây cũng là mùa của hoa cẩm tú cầu và của ốc sên — hai hình ảnh xuất hiện dày đặc trong tranh và thơ Nhật về mùa này.',
  word:{ t:'梅雨', r:'つゆ / tsuyu', vi:'mùa mưa đầu hè' } },

{ lang:'ja', cat:'Thiên nhiên', art:'volcano', title:'Điện thoại ở Nhật rú lên vài giây trước khi động đất tới',
  body:'Bốn mảng kiến tạo gặp nhau quanh quần đảo, khiến đây là một trong những nơi nhiều động đất nhất hành tinh. Hệ thống cảnh báo sớm phát tín hiệu tới mọi điện thoại trước khi rung lan tới.',
  extra:'Vài giây đó đủ để tắt bếp và chui xuống gầm bàn. Nguyên lý rất đơn giản: sóng địa chấn phá hoại đi chậm hơn sóng dò được đầu tiên, nên máy móc kịp báo trước con người kịp phản ứng.',
  word:{ t:'地震', r:'じしん / jishin', vi:'động đất' } },

{ lang:'ja', cat:'Thiên nhiên', art:'forest', title:'Hai phần ba diện tích Nhật Bản là rừng',
  body:'Tỷ lệ che phủ rừng của Nhật thuộc nhóm cao nhất trong các nước phát triển, dù mật độ dân số rất cao.',
  extra:'Một phần lớn là rừng tuyết tùng trồng sau chiến tranh để lấy gỗ. Việc trồng dày một loài về sau gây hậu quả không ngờ: mùa xuân, phấn hoa tuyết tùng khiến hàng chục triệu người bị dị ứng.',
  word:{ t:'森林', r:'しんりん / shinrin', vi:'rừng' } },

{ lang:'ja', cat:'Thiên nhiên', art:'river', title:'Sông Nhật Bản ngắn và dốc tới mức gần như là thác',
  body:'Vì núi sát biển, sông chảy rất xiết và chỉ dài vài trăm km. Một kỹ sư người Hà Lan từng nhận xét rằng sông Nhật «không phải sông, mà là thác nước».',
  extra:'Đặc điểm này khiến lũ lên rất nhanh sau mưa lớn, nhưng cũng là lý do Nhật phát triển mạnh thuỷ điện nhỏ. Sông Cửu Long chảy hiền và dài, gần như trái ngược hoàn toàn.',
  word:{ t:'川', r:'かわ / kawa', vi:'con sông' } },

{ lang:'ja', cat:'Thiên nhiên', art:'coast', title:'Dòng hải lưu nóng và lạnh gặp nhau ngoài khơi Nhật Bản',
  body:'Dòng Kuroshio ấm từ phía nam gặp dòng Oyashio lạnh từ phía bắc, tạo ra một trong những ngư trường giàu có nhất thế giới.',
  extra:'Đây là nền tảng của văn hoá ăn cá ở Nhật. 黒潮 nghĩa đen là «dòng đen» vì nước rất trong nên trông sẫm màu, còn 親潮 là «dòng cha mẹ» vì nó nuôi dưỡng vô số sinh vật.',
  word:{ t:'黒潮', r:'くろしお / Kuroshio', vi:'hải lưu Kuroshio' } },

{ lang:'ja', cat:'Thiên nhiên', art:'weather', title:'Bão ở Nhật được gọi bằng số thứ tự trong năm',
  body:'台風1号, 台風2号… Truyền thông trong nước dùng số này thay vì tên riêng quốc tế.',
  extra:'Mùa bão rơi vào khoảng tháng 8 tới tháng 10. Khi bão lớn tới, tàu điện thông báo ngừng chạy trước hàng giờ — gọi là 計画運休, dừng chạy theo kế hoạch, để hành khách kịp về nhà.',
  word:{ t:'台風', r:'たいふう / taifū', vi:'bão' } },

/* ---------------- Địa lý & đời sống ---------------- */
{ lang:'ja', cat:'Địa lý', art:'train', title:'Shinkansen chạy hơn nửa thế kỷ chưa có hành khách tử vong vì va chạm',
  body:'Từ khi khai trương năm 1964, mạng tàu cao tốc Nhật giữ kỷ lục an toàn rất đáng nể: không có hành khách thiệt mạng vì trật bánh hay đâm nhau.',
  extra:'Bí quyết nằm ở đường ray riêng hoàn toàn, không giao cắt đồng mức với đường bộ, và hệ thống tự động phanh khi có địa chấn. Shinkansen là mạng tàu cao tốc đầu tiên trên thế giới.',
  word:{ t:'新幹線', r:'しんかんせん / shinkansen', vi:'tàu cao tốc' } },

{ lang:'ja', cat:'Địa lý', art:'metro', title:'Ga Shinjuku là nhà ga đông khách nhất thế giới',
  body:'Mỗi ngày có hàng triệu lượt người qua ga này. Nó có hơn hai trăm lối ra, nhiều tới mức người Nhật cũng lạc.',
  extra:'Lời khuyên cho người mới: nhớ SỐ lối ra chứ đừng nhớ hướng, vì hướng trong ga đổi liên tục theo tầng. Ra nhầm cửa có thể khiến bạn đi bộ thêm hai mươi phút.',
  word:{ t:'駅', r:'えき / eki', vi:'nhà ga' } },

{ lang:'ja', cat:'Địa lý', art:'apartment', title:'Nhà ở Nhật mất giá theo thời gian, khác hẳn Việt Nam',
  body:'Nhà gỗ thường được coi là gần hết giá trị sau khoảng 20–30 năm. Người mua chủ yếu trả tiền cho mảnh đất.',
  extra:'Vì thế người Nhật hay phá nhà cũ xây mới thay vì cải tạo. Quan niệm này ngược hẳn Việt Nam, nơi nhà càng ở lâu càng lên giá cùng với đất.',
  word:{ t:'一戸建て', r:'いっこだて / ikkodate', vi:'nhà riêng' } },

{ lang:'ja', cat:'Địa lý', art:'map', title:'Phần lớn đường phố Nhật Bản không có tên',
  body:'Địa chỉ ghi theo khối: quận, khu phố, số khối, số nhà. Số nhà trong một khối lại đánh theo thứ tự thời gian xây dựng chứ không theo vị trí.',
  extra:'Vì thế nhà số 5 có thể nằm cạnh nhà số 12. Đây là lý do tấm bản đồ chi tiết dán ở mọi góc phố Nhật là thứ thiết yếu chứ không phải trang trí.',
  word:{ t:'住所', r:'じゅうしょ / jūsho', vi:'địa chỉ' } },

{ lang:'ja', cat:'Địa lý', art:'coin', title:'Đồng 5 yên có lỗ ở giữa và được coi là may mắn',
  body:'五円 đọc giống 御縁 — «duyên lành». Người đi lễ đền thường bỏ đúng đồng này vào hòm công đức.',
  extra:'Khác Trung Quốc và Hàn Quốc, Nhật vẫn dùng rất nhiều tiền mặt: nhiều quán ăn nhỏ và đền chùa chỉ nhận tiền mặt, nên máy ATM ở cửa hàng tiện lợi là hạ tầng quan trọng.',
  word:{ t:'現金', r:'げんきん / genkin', vi:'tiền mặt' } },

{ lang:'ja', cat:'Địa lý', art:'phone', title:'Điện thoại Nhật từng tiến hoá tách biệt với thế giới',
  body:'Trước khi smartphone phổ biến, điện thoại Nhật đã có internet, thanh toán, truyền hình và emoji — nhưng chỉ dùng được trong nước.',
  extra:'Hiện tượng này được gọi là «hội chứng Galápagos»: tiến hoá rất cao nhưng chỉ trên một hòn đảo, không sống nổi ở nơi khác. Emoji là thứ duy nhất từ hệ sinh thái đó lan ra toàn thế giới.',
  word:{ t:'絵文字', r:'えもじ / emoji', vi:'emoji, chữ hình' } },

{ lang:'ja', cat:'Địa lý', art:'library', title:'Sách khổ bỏ túi được thiết kế để đọc trên tàu',
  body:'文庫本 là loại sách bìa mềm khổ nhỏ, rẻ và nhẹ, vừa túi áo khoác. Từ hiệu sách trong ga tới chuỗi lớn nhiều tầng, sách giấy vẫn giữ vị trí vững chắc ở Nhật.',
  extra:'Thói quen đọc sách trên tàu điện là một nét rất Nhật. Nhiều hiệu sách còn bọc bìa giấy miễn phí cho khách, để người khác không nhìn thấy mình đang đọc gì.',
  word:{ t:'文庫本', r:'ぶんこぼん / bunkobon', vi:'sách khổ bỏ túi' } },

{ lang:'ja', cat:'Địa lý', art:'apartment', title:'Nhật Bản có hàng triệu ngôi nhà bỏ hoang',
  body:'空き家 là nhà không người ở, phần lớn ở vùng nông thôn nơi dân số giảm và người trẻ ra thành phố. Con số lên tới hàng triệu căn.',
  extra:'Một số địa phương bán hoặc cho không những căn nhà này với điều kiện người nhận phải tới ở và sửa sang. Đây là mặt trái của già hoá dân số và đô thị hoá.',
  word:{ t:'空き家', r:'あきや / akiya', vi:'nhà bỏ hoang' } },

/* ---------------- Ẩm thực ---------------- */
{ lang:'ja', cat:'Ẩm thực', art:'bento', title:'Vỏ bọc cơm nắm onigiri là một kiệt tác đóng gói',
  body:'Lớp bọc được thiết kế để rong biển nằm tách khỏi cơm cho tới lúc ăn. Mở đúng thứ tự ba bước thì rong biển ôm lấy cơm và vẫn giòn.',
  extra:'Người mới mua thường mở sai và làm rách, nên trên bao bì luôn in số 1, 2, 3 rất to. Đây là chi tiết nhỏ cho thấy cách người Nhật giải quyết vấn đề bằng thiết kế.',
  word:{ t:'おにぎり', r:'onigiri', vi:'cơm nắm' } },

{ lang:'ja', cat:'Ẩm thực', art:'soup', title:'Vị umami được tìm ra trong một nồi nước dùng',
  body:'出汁 nấu từ tảo bẹ kombu và cá ngừ bào khô. Chính từ tảo kombu mà nhà khoa học Ikeda tách ra được glutamate và đặt tên cho vị thứ năm.',
  extra:'Nước dùng dashi không có vị mạnh nhưng làm mọi món khác đậm đà lên — đó chính là bản chất của umami. Nó là nền tảng của gần như mọi món ăn Nhật.',
  word:{ t:'出汁', r:'だし / dashi', vi:'nước dùng' } },

{ lang:'ja', cat:'Ẩm thực', art:'bowl', title:'Cà ri Nhật đi đường vòng qua nước Anh',
  body:'カレー Nhật sánh đặc, ngọt dịu, ăn với cơm trắng. Nó du nhập qua đường hải quân Anh chứ không phải trực tiếp từ Ấn Độ.',
  extra:'Vì đi đường vòng nên cà ri Nhật có bột mì làm sánh — thứ không có trong cà ri Ấn. Đây nay là một trong những món ăn gia đình phổ biến nhất nước Nhật.',
  word:{ t:'カレー', r:'karē', vi:'cà ri' } },

{ lang:'ja', cat:'Ẩm thực', art:'bowl', title:'Natto chia rẽ khẩu vị ngay trong nước Nhật',
  body:'納豆 là đậu nành lên men, có sợi tơ dính kéo dài và mùi nồng. Người vùng Kanto ăn hằng ngày, còn một bộ phận người vùng Kansai thì không quen.',
  extra:'Cách ăn đúng là khuấy thật nhiều lần cho lên tơ trước khi trộn nước tương và mù tạt. Đây là món đóng vai trò như mắm tôm ở Việt Nam — một phép thử khẩu vị.',
  word:{ t:'納豆', r:'なっとう / nattō', vi:'đậu nành lên men' } },

{ lang:'ja', cat:'Ẩm thực', art:'bowl', title:'Cùng một bát mì, đi từ Tokyo tới Osaka là đổi màu nước',
  body:'Vùng Kanto dùng nước dùng đậm màu và mặn, vùng Kansai nhạt màu và thanh hơn. Sự khác biệt này rõ tới mức nhìn là biết đang ở đâu.',
  extra:'そば làm từ bột kiều mạch, sợi mảnh màu nâu xám; うどん làm từ bột mì, sợi to trắng và dai. Hai loại mì, hai vùng, bốn kiểu kết hợp khác nhau.',
  word:{ t:'蕎麦', r:'そば / soba', vi:'mì kiều mạch' } },

{ lang:'ja', cat:'Ẩm thực', art:'tea', title:'Trà xanh Nhật được hấp chứ không sao',
  body:'Khác trà Trung Quốc thường sao trên chảo, lá trà Nhật được hấp hơi nước ngay sau khi hái. Vì thế trà Nhật có màu xanh đậm và vị tươi hơn.',
  extra:'Cùng một cây trà, chỉ khác cách xử lý sau thu hoạch mà ra hai hướng hoàn toàn khác. Matcha thì còn thêm một bước nữa: che nắng cho cây trước khi hái để tăng vị ngọt.',
  word:{ t:'緑茶', r:'りょくちゃ / ryokucha', vi:'trà xanh' } },

/* ---------------- Động vật ---------------- */
{ lang:'ja', cat:'Động vật', art:'wolf', title:'Sói Nhật Bản tuyệt chủng, và hươu bùng nổ',
  body:'ニホンオオカミ là loài sói nhỏ sống ở Honshu, Shikoku và Kyushu. Cá thể cuối cùng được ghi nhận vào đầu thế kỷ XX.',
  extra:'Trước đó sói được thờ như thần giữ ruộng, vì nó ăn hươu và lợn rừng phá mùa màng. Sau khi sói biến mất, số lượng hươu tăng vọt và nay là vấn đề nghiêm trọng cho rừng Nhật Bản.',
  word:{ t:'狼', r:'おおかみ / ōkami', vi:'con sói' } },

{ lang:'ja', cat:'Động vật', art:'forest', title:'Tanuki là con vật có thật, không phải sinh vật huyền thoại',
  body:'狸 là loài chó gấu thật, sống hoang ở Nhật và đôi khi đi lạc vào thành phố. Trong truyện dân gian, nó là con vật biết biến hoá và hay trêu người.',
  extra:'Tượng tanuki bụng tròn đội nón đứng trước quán ăn là bùa cầu may. Người phương Tây hay dịch nhầm thành «raccoon», nhưng tanuki thuộc họ chó chứ không phải họ gấu mèo.',
  word:{ t:'狸', r:'たぬき / tanuki', vi:'chó gấu' } },

{ lang:'ja', cat:'Động vật', art:'crow', title:'Quạ Tokyo khôn tới mức thành vấn đề đô thị',
  body:'Quạ lớn mở được túi rác, nhớ mặt người và biết dùng xe cộ để cán vỡ hạt cứng. Thành phố phải làm lưới phủ riêng cho điểm tập kết rác.',
  extra:'Trong thần thoại Nhật lại có con quạ ba chân Yatagarasu dẫn đường cho vị Thiên hoàng đầu tiên. Nó hiện là biểu tượng trên logo của đội tuyển bóng đá quốc gia Nhật Bản.',
  word:{ t:'烏', r:'からす / karasu', vi:'con quạ' } },

{ lang:'ja', cat:'Động vật', art:'coast', title:'Có những hòn đảo mèo đông hơn người',
  body:'Một số đảo nhỏ ở Nhật có số mèo hoặc thỏ vượt xa số dân, do được cho ăn và không có thiên địch. Chúng trở thành điểm đến của khách du lịch.',
  extra:'Nguồn gốc thường rất đời thường: mèo được đưa tới để diệt chuột trên tàu cá, rồi sinh sôi. Dân trên đảo phần lớn là người già, nên tỷ lệ mèo trên người tăng dần theo thời gian.',
  word:{ t:'猫', r:'ねこ / neko', vi:'con mèo' } },

{ lang:'ja', cat:'Động vật', art:'rooster', title:'Chim trĩ xanh là quốc điểu của Nhật Bản',
  body:'キジ là loài chim trĩ đặc hữu, được chọn làm quốc điểu. Nó xuất hiện trong truyện cổ Momotaro như một người bạn đồng hành.',
  extra:'Chim trĩ nổi tiếng vì phản ứng rất sớm với rung chấn, nên dân gian coi tiếng kêu bất thường của nó là điềm báo động đất. Hình chim trĩ từng được in trên tờ tiền 10.000 yên.',
  word:{ t:'雉', r:'きじ / kiji', vi:'chim trĩ' } },

{ lang:'ja', cat:'Động vật', art:'river', title:'Cờ cá chép bay trước nhà vào ngày thiếu nhi',
  body:'Ngày 5 tháng 5, các gia đình treo 鯉のぼり trước nhà, mỗi con ứng với một thành viên trong gia đình.',
  extra:'Hình ảnh gốc là tích cá chép vượt Vũ Môn hoá rồng của Trung Hoa. Nhật tiếp nhận rồi biến thành cờ vải bay trong gió — một cách diễn đạt rất khác cho cùng một câu chuyện.',
  word:{ t:'鯉のぼり', r:'こいのぼり / koinobori', vi:'cờ cá chép' } },

/* ---------------- Lịch sử ---------------- */
{ lang:'ja', cat:'Lịch sử', art:'coast', title:'Nhật Bản đóng cửa với thế giới trong hơn hai trăm năm',
  body:'Chính sách 鎖国 hạn chế gần như toàn bộ giao thương và đi lại từ thế kỷ XVII tới giữa thế kỷ XIX. Chỉ một cửa hẹp ở Nagasaki còn mở với Hà Lan và Trung Quốc.',
  extra:'Vì cửa duy nhất là người Hà Lan, mọi kiến thức phương Tây vào Nhật thời đó được gọi chung là 蘭学 — «Hà Lan học». Nhiều thuật ngữ y học tiếng Nhật tới nay vẫn có gốc Hà Lan.',
  word:{ t:'鎖国', r:'さこく / sakoku', vi:'toả quốc, bế quan' } },

{ lang:'ja', cat:'Lịch sử', art:'crown', title:'Nhật Bản đổi niên hiệu là phải sửa cả hệ thống máy tính',
  body:'Năm được ghi theo 元号: Showa, Heisei, Reiwa… Giấy tờ hành chính và đồng tiền xu đều dùng cách ghi này song song với dương lịch.',
  extra:'Khi đổi niên hiệu, toàn bộ biểu mẫu và phần mềm phải cập nhật. Lần chuyển sang Reiwa năm 2019 được chuẩn bị trước cả năm, với không ít lo ngại về lỗi hệ thống.',
  word:{ t:'元号', r:'げんごう / gengō', vi:'niên hiệu' } },

{ lang:'ja', cat:'Lịch sử', art:'book', title:'Tiểu thuyết đầu tiên của thế giới do một phụ nữ Nhật viết',
  body:'源氏物語 do Murasaki Shikibu viết vào khoảng đầu thế kỷ XI, dài hơn một nghìn trang, với hệ thống nhân vật và tâm lý phức tạp.',
  extra:'Tác giả là một nữ quan trong cung. Thời đó đàn ông viết bằng chữ Hán, còn phụ nữ viết bằng kana — nên nền văn học kana rực rỡ nhất của Nhật lại do phụ nữ tạo ra.',
  word:{ t:'源氏物語', r:'げんじものがたり', vi:'Truyện Genji' } },

{ lang:'ja', cat:'Lịch sử', art:'podium', title:'Nhật Bản biến cả một tầng lớp vũ sĩ thành công chức',
  body:'Chỉ samurai mới được đeo đồng thời kiếm dài và kiếm ngắn. Sau cải cách Minh Trị, đặc quyền này bị bãi bỏ cùng toàn bộ hệ thống đẳng cấp.',
  extra:'Nhiều samurai mất kế sinh nhai đã chuyển sang làm cảnh sát, giáo viên hoặc đi khai hoang Hokkaido. Chuyển đổi một tầng lớp vũ sĩ thành viên chức chỉ trong vài thập niên là điều hiếm thấy trong lịch sử.',
  word:{ t:'侍', r:'さむらい / samurai', vi:'võ sĩ' } },

{ lang:'ja', cat:'Lịch sử', art:'library', title:'Từ «xã hội», «kinh tế», «khoa học» đều do người Nhật đặt ra',
  body:'Thời Minh Trị, các học giả Nhật tạo ra những từ mới như 社会, 経済, 科学, 自由 bằng cách ghép chữ Hán để dịch khái niệm phương Tây.',
  extra:'Những từ này sau đó quay ngược sang Trung Quốc và Việt Nam. Nên khi người Việt nói «xã hội», «kinh tế», «khoa học», ta đang dùng từ do người Nhật đặt ra bằng chữ Hán.',
  word:{ t:'社会', r:'しゃかい / shakai', vi:'xã hội' } },

{ lang:'ja', cat:'Lịch sử', art:'train', title:'Nhật xây tàu cao tốc khi cả thế giới cho rằng đường sắt đã lỗi thời',
  body:'Tuyến Tokaido Shinkansen khai trương chỉ ít ngày trước lễ khai mạc Olympic Tokyo 1964, nối Tokyo với Osaka.',
  extra:'Đây là mạng tàu cao tốc đầu tiên trên thế giới, ra đời khi nhiều nước đang dồn tiền cho ô tô và máy bay. Sự kiện này đánh dấu Nhật Bản trở lại vũ đài quốc tế sau chiến tranh.',
  word:{ t:'開業', r:'かいぎょう / kaigyō', vi:'khai trương' } },

{ lang:'ja', cat:'Lịch sử', art:'calligraphy', title:'Hiragana từng bị gọi là «chữ đàn bà»',
  body:'Hiragana hình thành từ lối viết thảo của chữ Hán. Ban đầu nó bị coi thường vì đàn ông có học vẫn viết bằng chữ Hán.',
  extra:'Chính vì thế những tác phẩm văn học kana sớm nhất và hay nhất đều do phụ nữ viết. Đây là điểm trùng hợp thú vị với Hangul của Hàn Quốc, vốn cũng từng bị gọi bằng đúng cái tên ấy.',
  word:{ t:'平仮名', r:'ひらがな / hiragana', vi:'chữ hiragana' } },

{ lang:'ja', cat:'Lịch sử', art:'stamp', title:'Nhật Bản từng dùng hệ giờ co giãn theo mùa',
  body:'Trước năm 1873, ngày và đêm mỗi bên được chia thành sáu phần bằng nhau. Nghĩa là một «giờ» ban ngày mùa hè dài hơn một «giờ» ban ngày mùa đông.',
  extra:'Đồng hồ cơ Nhật thời đó phải chế tạo đặc biệt để chạy được với hệ giờ co giãn này. Năm 1873, nước này bỏ lịch âm dương lẫn hệ giờ cũ để chuyển sang dương lịch.',
  word:{ t:'太陽暦', r:'たいようれき / taiyōreki', vi:'dương lịch' } },

{ lang:'ja', cat:'Thiên nhiên', art:'coast', title:'Nhật Bản là một trong những nước dùng nhiều hải sản nhất thế giới',
  body:'Vì là quần đảo với ngư trường giàu có, cá và hải sản chiếm tỷ trọng rất lớn trong khẩu phần đạm của người Nhật.',
  extra:'Chợ cá Toyosu ở Tokyo là chợ buôn hải sản lớn vào loại nhất thế giới, kế thừa chợ Tsukiji cũ. Phiên đấu giá cá ngừ đầu năm luôn được đưa tin, với những con cá đạt giá kỷ lục.',
  word:{ t:'魚', r:'さかな / sakana', vi:'con cá' } },

{ lang:'ja', cat:'Địa lý', art:'volcano', title:'Nhật Bản có hơn hai mươi nghìn suối nước nóng',
  body:'温泉 phải đạt tiêu chuẩn về nhiệt độ và khoáng chất mới được gọi đúng tên. Luật quy định rõ ràng thế nào là onsen thật.',
  extra:'Mỗi loại khoáng chất cho một màu nước và công dụng khác nhau: lưu huỳnh đục trắng, sắt ngả nâu đỏ. Bảng thành phần nước luôn được dán ở lối vào để khách tự chọn.',
  word:{ t:'温泉', r:'おんせん / onsen', vi:'suối nước nóng' } },

/* ==================================================================
   ===========================  TIẾNG ANH  ==========================
   Kho này gồm cả Anh và Mỹ, nên phần chính trị tách rõ hai nước —
   hai mô hình gần như trái ngược nhau dù cùng nói một thứ tiếng.
   ================================================================== */

/* ---------------- Chính trị & bầu cử ---------------- */
{ lang:'en', cat:'Chính trị', art:'parliament', title:'Nước Anh không có một bản hiến pháp thành văn',
  body:'Thay vì một văn bản duy nhất, hiến pháp Anh nằm rải rác trong các đạo luật, án lệ và tập quán chính trị có từ nhiều thế kỷ.',
  extra:'Chỉ một vài nước làm như vậy. Hệ quả là «sửa hiến pháp» ở Anh về mặt kỹ thuật chỉ cần một đạo luật thường — nhưng trên thực tế, sức nặng của tập quán khiến điều đó không dễ như nghe.',
  word:{ t:'constitution', r:'ˌkɒnstɪˈtjuːʃn', vi:'hiến pháp' } },

{ lang:'en', cat:'Chính trị', art:'crown', title:'Vua Anh trị vì nhưng không cai trị',
  body:'Quốc vương ký ban hành luật, bổ nhiệm thủ tướng và khai mạc Quốc hội — nhưng tất cả đều theo lời khuyên của chính phủ được bầu.',
  extra:'Lần cuối một quốc vương Anh từ chối ký một đạo luật đã cách đây hơn ba trăm năm. Quyền phủ quyết vẫn tồn tại trên giấy, nhưng dùng tới nó sẽ gây khủng hoảng hiến pháp.',
  word:{ t:'monarch', r:'ˈmɒnək', vi:'quốc vương' } },

{ lang:'en', cat:'Chính trị', art:'podium', title:'Thủ tướng Anh phải trả lời chất vấn trực tiếp mỗi tuần',
  body:'Prime Minister’s Questions diễn ra vào trưa thứ Tư, khi thủ tướng đứng trả lời câu hỏi của các nghị sĩ, kể cả phe đối lập.',
  extra:'Phiên này được truyền hình trực tiếp và nổi tiếng ồn ào. Với người học tiếng Anh, đây là nguồn nghe rất tốt về tranh luận, nhưng tốc độ nói và giọng vùng miền thì khá thử thách.',
  word:{ t:'question time', r:'ˈkwestʃən taɪm', vi:'phiên chất vấn' } },

{ lang:'en', cat:'Chính trị', art:'ballot', title:'Tổng thống Mỹ không do số phiếu phổ thông quyết định',
  body:'Mỗi bang có một số phiếu đại cử tri, và phần lớn bang trao toàn bộ số phiếu đó cho người thắng trong bang. Người thắng cả nước là người đủ đa số đại cử tri.',
  extra:'Vì thế đã có những kỳ bầu cử mà người thắng phiếu phổ thông lại thua chung cuộc. Đây là điểm khiến hệ thống Mỹ khác hẳn gần như mọi nền dân chủ khác.',
  word:{ t:'electoral college', r:'ɪˈlektərəl ˈkɒlɪdʒ', vi:'đại cử tri đoàn' } },

{ lang:'en', cat:'Chính trị', art:'flag', title:'Cờ Mỹ có 50 ngôi sao và 13 sọc, mỗi con số một ý nghĩa',
  body:'50 sao là 50 bang hiện nay, còn 13 sọc là 13 thuộc địa ban đầu lập nên nước Mỹ. Mỗi khi có bang mới, chỉ số sao thay đổi.',
  extra:'Thiết kế phiên bản 50 sao hiện dùng là bài tập của một học sinh trung học, ban đầu chỉ được chấm điểm B. Sau khi được chọn làm quốc kỳ, giáo viên đã nâng lên điểm A.',
  word:{ t:'stars and stripes', r:'stɑːz ənd straɪps', vi:'cờ sao và sọc' } },

{ lang:'en', cat:'Chính trị', art:'map', title:'Vương quốc Anh và nước Anh không phải một',
  body:'England chỉ là một trong bốn phần của United Kingdom, cùng với Scotland, Wales và Northern Ireland. Great Britain lại là tên hòn đảo gồm ba phần đầu.',
  extra:'Nói «nước Anh» khi định nói cả Vương quốc là lỗi rất hay gặp, và người Scotland hoặc xứ Wales sẽ nhắc bạn ngay. Ba phần này còn có quốc hội riêng với quyền tự quyết về giáo dục và y tế.',
  word:{ t:'United Kingdom', r:'juˌnaɪtɪd ˈkɪŋdəm', vi:'Vương quốc Anh' } },

{ lang:'en', cat:'Chính trị', art:'scales', title:'Mỗi bang của Mỹ gần như là một nước riêng về luật',
  body:'Luật hình sự, luật giao thông, tuổi kết hôn, thuế — mỗi bang tự quyết. Nên cùng một hành vi có thể hợp pháp ở bang này và bị phạt nặng ở bang bên cạnh.',
  extra:'Bằng lái, giấy đăng ký kết hôn và cả kỳ thi hành nghề luật sư đều theo từng bang. Người Mỹ chuyển bang phải làm lại khá nhiều giấy tờ, gần như chuyển quốc gia.',
  word:{ t:'state law', r:'steɪt lɔː', vi:'luật tiểu bang' } },

{ lang:'en', cat:'Chính trị', art:'parliament', title:'Viện Quý tộc Anh không do dân bầu',
  body:'House of Lords gồm các thành viên được bổ nhiệm trọn đời, một số giám mục và một nhóm quý tộc thế tập. Họ rà soát và sửa luật, nhưng không chặn được vô thời hạn.',
  extra:'Đây là viện lập pháp không qua bầu cử lớn vào loại nhất thế giới. Vai trò của nó là «phòng suy xét lại» — làm chậm và đánh bóng luật chứ không phải quyết định cuối cùng.',
  word:{ t:'House of Lords', r:'haʊs əv lɔːdz', vi:'Viện Quý tộc' } },

/* ---------------- Luật lệ khác Việt Nam ---------------- */
{ lang:'en', cat:'Luật pháp', art:'scales', title:'Người Anh lái xe bên trái, và không phải vì kỳ quặc',
  body:'Tập quán này có gốc từ thời cưỡi ngựa: người thuận tay phải đi bên trái để tay cầm kiếm luôn hướng về phía người lạ đi ngược chiều.',
  extra:'Khoảng một phần ba dân số thế giới vẫn lái bên trái, chủ yếu ở các nước từng thuộc Anh: Ấn Độ, Úc, Nhật, Nam Phi. Nên đây không phải ngoại lệ hiếm như nhiều người tưởng.',
  word:{ t:'left-hand drive', r:'left hænd draɪv', vi:'lái bên trái' } },

{ lang:'en', cat:'Luật pháp', art:'coin', title:'Ở Anh, có tivi là phải đóng phí truyền hình',
  body:'TV licence là khoản phí hằng năm cho mọi hộ xem truyền hình trực tiếp, dùng để nuôi đài công BBC. Không đóng mà vẫn xem là vi phạm.',
  extra:'Chính vì được nuôi bằng phí này mà BBC không phát quảng cáo. Đây là mô hình rất khác với truyền hình Việt Nam và Mỹ, vốn chủ yếu sống bằng quảng cáo.',
  word:{ t:'TV licence', r:'ˌtiːˈviː ˈlaɪsns', vi:'phí truyền hình' } },

{ lang:'en', cat:'Luật pháp', art:'passport', title:'Nước Anh không có thẻ căn cước bắt buộc',
  body:'Người Anh không có thẻ căn cước quốc gia. Muốn chứng minh nhân thân, người ta dùng bằng lái, hộ chiếu hoặc hoá đơn tiền điện có tên và địa chỉ.',
  extra:'Các đề xuất đưa thẻ căn cước vào đều gặp phản đối mạnh vì lý do quyền riêng tư. Với người Việt quen với căn cước công dân, đây là điểm khác biệt khó hình dung nhất.',
  word:{ t:'proof of address', r:'pruːf əv əˈdres', vi:'giấy tờ chứng minh nơi ở' } },

{ lang:'en', cat:'Luật pháp', art:'coin', title:'Giá niêm yết ở Mỹ chưa bao gồm thuế',
  body:'Bảng giá ghi 10 đô thì ra quầy trả hơn 10 đô, vì thuế bán hàng được cộng thêm lúc thanh toán. Mức thuế khác nhau theo bang, thậm chí theo thành phố.',
  extra:'Cộng thêm tiền tip ở nhà hàng, số tiền thực trả có thể cao hơn giá niêm yết tới một phần ba. Người Việt sang Mỹ hay bị hụt tiền mặt vì tính nhẩm theo bảng giá.',
  word:{ t:'sales tax', r:'seɪlz tæks', vi:'thuế bán hàng' } },

{ lang:'en', cat:'Luật pháp', art:'scales', title:'Rẽ phải khi đèn đỏ là hợp pháp ở phần lớn nước Mỹ',
  body:'Sau khi dừng hẳn và nhường đường, xe được rẽ phải dù đèn đang đỏ, trừ nơi có biển cấm. Thành phố New York thì ngược lại: cấm, trừ nơi có biển cho phép.',
  extra:'Quy định này giúp giao thông thông thoáng nhưng đòi hỏi tài xế phải chủ động quan sát. Ở Việt Nam, rẽ phải khi đèn đỏ chỉ được nếu có biển hoặc đèn phụ cho phép.',
  word:{ t:'right on red', r:'raɪt ɒn red', vi:'rẽ phải khi đèn đỏ' } },

{ lang:'en', cat:'Luật pháp', art:'book', title:'Hệ thống luật Anh Mỹ dựa trên án lệ',
  body:'Common law lấy phán quyết của toà án trước làm căn cứ ràng buộc cho vụ sau. Luật do quốc hội ban hành và án lệ cùng tồn tại.',
  extra:'Việt Nam theo truyền thống dân luật châu Âu lục địa, lấy bộ luật thành văn làm gốc, dù gần đây cũng đã công nhận án lệ. Sự khác biệt này giải thích vì sao phim toà án Mỹ tập trung vào tranh luận và tiền lệ nhiều đến thế.',
  word:{ t:'common law', r:'ˈkɒmən lɔː', vi:'thông luật, luật án lệ' } },

{ lang:'en', cat:'Luật pháp', art:'ballot', title:'Bồi thẩm đoàn là nghĩa vụ công dân ở cả Anh và Mỹ',
  body:'Người dân được triệu tập ngẫu nhiên để ngồi xét xử. Từ chối mà không có lý do chính đáng có thể bị phạt.',
  extra:'Bồi thẩm đoàn quyết định về sự việc — có tội hay không — còn thẩm phán quyết định về luật và mức án. Hệ thống Việt Nam dùng hội thẩm nhân dân, có vai trò khác khá nhiều.',
  word:{ t:'jury duty', r:'ˈdʒʊəri ˈdjuːti', vi:'nghĩa vụ bồi thẩm' } },

{ lang:'en', cat:'Luật pháp', art:'apartment', title:'Ở Anh, nhà có thể «thuê đất» dù bạn đã mua nhà',
  body:'Leasehold nghĩa là bạn sở hữu căn hộ trong một số năm nhất định, còn đất thì thuộc về người khác. Freehold mới là sở hữu trọn vẹn cả nhà lẫn đất.',
  extra:'Nhiều căn hộ ở London là leasehold với thời hạn hàng trăm năm. Khi thời hạn còn ngắn, giá trị căn hộ giảm mạnh — một điều rất lạ với người Việt quen với sổ đỏ lâu dài.',
  word:{ t:'leasehold', r:'ˈliːshəʊld', vi:'sở hữu có thời hạn' } },

/* ---------------- Tên gọi & tên họ ---------------- */
{ lang:'en', cat:'Tên gọi', art:'nametag', title:'Smith là họ phổ biến nhất ở cả Anh lẫn Mỹ',
  body:'Nghĩa gốc là «thợ rèn». Cùng một logic đặt họ theo nghề đã tạo ra Schmidt ở Đức, Ferrari ở Ý, Kuznetsov ở Nga và Kim... không, Kim thì lại là chuyện khác.',
  extra:'Các họ nghề khác rất phổ biến: Baker (thợ làm bánh), Taylor (thợ may), Cooper (thợ đóng thùng), Miller (thợ xay bột). Đọc danh bạ tiếng Anh gần như là đọc danh sách nghề thời trung cổ.',
  word:{ t:'surname', r:'ˈsɜːneɪm', vi:'họ' } },

{ lang:'en', cat:'Tên gọi', art:'family', title:'Nhiều họ tiếng Anh có nghĩa là «con trai của ai đó»',
  body:'Johnson là con của John, Anderson là con của Andrew. Tiền tố Mac- hoặc Mc- trong tiếng Gael Scotland và Ireland cũng mang đúng nghĩa đó.',
  extra:'Tương tự, O’ trong O’Brien nghĩa là «cháu của». Nên ba họ Johnson, MacDonald và O’Connor được tạo theo cùng một nguyên tắc, chỉ khác ngôn ngữ gốc.',
  word:{ t:'patronymic', r:'ˌpætrəˈnɪmɪk', vi:'họ theo tên cha' } },

{ lang:'en', cat:'Tên gọi', art:'letter', title:'Tên đệm ở Mỹ thường chỉ còn lại một chữ cái',
  body:'Người Mỹ hay viết tên theo kiểu John F. Kennedy — tên, chữ cái đầu của tên đệm, rồi họ. Tên đệm thường lấy từ họ bên mẹ hoặc tên người thân.',
  extra:'Biểu mẫu Mỹ luôn có ô «middle initial». Người Việt điền form Mỹ hay lúng túng vì tên ta có tên đệm đầy đủ chứ không rút gọn, ví dụ «Phạm Đăng Hiển» thì «Đăng» là cả một chữ.',
  word:{ t:'middle name', r:'ˈmɪdl neɪm', vi:'tên đệm' } },

{ lang:'en', cat:'Tên gọi', art:'ring', title:'Phụ nữ phương Tây thường đổi họ khi kết hôn, nhưng không bắt buộc',
  body:'Truyền thống là vợ lấy họ chồng. Ngày nay nhiều người giữ họ gốc, hoặc ghép hai họ bằng dấu gạch nối.',
  extra:'Cách ghép họ gọi là double-barrelled name, ví dụ Smith-Jones. Ở Việt Nam, Hàn Quốc và Trung Quốc thì phụ nữ vốn đã luôn giữ nguyên họ, nên chuyện này không đặt ra.',
  word:{ t:'maiden name', r:'ˈmeɪdn neɪm', vi:'họ thời con gái' } },

{ lang:'en', cat:'Tên gọi', art:'nametag', title:'Tên gọi tắt trong tiếng Anh nhiều khi không giống tên gốc',
  body:'Robert thành Bob, Richard thành Dick, William thành Bill, Margaret thành Peggy. Các dạng này hình thành qua nhiều thế kỷ biến âm.',
  extra:'Robert → Rob → Bob là do lối gieo vần thời trung cổ, đổi phụ âm đầu cho vui miệng. Vì thế người mới học tiếng Anh không thể đoán ra, phải học thuộc từng cặp.',
  word:{ t:'nickname', r:'ˈnɪkneɪm', vi:'tên gọi tắt, biệt danh' } },

{ lang:'en', cat:'Tên gọi', art:'crown', title:'Người Anh dùng danh xưng rất cẩn thận',
  body:'Mr, Mrs, Miss, Ms, Dr, Professor — mỗi cái dùng trong một hoàn cảnh. Ms được dùng khi không muốn hoặc không cần nêu tình trạng hôn nhân của phụ nữ.',
  extra:'Mrs dành cho phụ nữ đã kết hôn, Miss cho người chưa kết hôn. Ms ra đời chính vì sự bất đối xứng này: đàn ông chỉ có một danh xưng Mr, không ai biết họ có vợ hay chưa.',
  word:{ t:'title', r:'ˈtaɪtl', vi:'danh xưng' } },

{ lang:'en', cat:'Tên gọi', art:'map', title:'Rất nhiều địa danh Mỹ mượn thẳng tên châu Âu',
  body:'New York lấy từ York, New Orleans từ Orléans, Boston và Birmingham từ Anh. Có tới hơn hai mươi nơi ở Mỹ tên là Paris.',
  extra:'Bên cạnh đó là hàng nghìn địa danh gốc từ ngôn ngữ bản địa: Chicago, Massachusetts, Mississippi. Bản đồ Mỹ là một lớp chồng lớp của các đợt di dân.',
  word:{ t:'place name', r:'pleɪs neɪm', vi:'địa danh' } },

{ lang:'en', cat:'Tên gọi', art:'book', title:'Tên đường ở Mỹ nhiều nơi chỉ là số',
  body:'5th Avenue, 42nd Street — nhiều thành phố Mỹ đánh số đường theo lưới, nên biết số là biết vị trí ngay.',
  extra:'Manhattan là ví dụ rõ nhất: avenue chạy dọc, street chạy ngang, đánh số tăng dần. Nhờ vậy tìm đường ở New York dễ hơn hẳn London, nơi phố cong queo và mang tên riêng có từ thời trung cổ.',
  word:{ t:'avenue', r:'ˈævənjuː', vi:'đại lộ' } },

/* ---------------- Thiên nhiên ---------------- */
{ lang:'en', cat:'Thiên nhiên', art:'river', title:'Sông Thames từng «chết» rồi sống lại',
  body:'Giữa thế kỷ XX, sông Thames ô nhiễm nặng tới mức bị tuyên bố là chết về mặt sinh học — gần như không còn loài cá nào sống nổi.',
  extra:'Sau nhiều thập niên xử lý nước thải, cá hồi, hải cẩu và cả cá heo đã quay lại. Đây là một trong những câu chuyện phục hồi sông đô thị được nhắc tới nhiều nhất thế giới.',
  word:{ t:'river', r:'ˈrɪvə', vi:'con sông' } },

{ lang:'en', cat:'Thiên nhiên', art:'river', title:'Sông Mississippi dài tới mức chia đôi nước Mỹ',
  body:'Hệ thống Mississippi – Missouri là một trong những hệ sông dài nhất thế giới, chảy từ phía bắc xuống vịnh Mexico.',
  extra:'Tên sông gốc từ ngôn ngữ Ojibwe, nghĩa là «dòng nước lớn». Người Mỹ dùng cụm «east of the Mississippi» và «west of the Mississippi» như hai nửa văn hoá của đất nước.',
  word:{ t:'Mississippi', r:'ˌmɪsɪˈsɪpi', vi:'sông Mississippi' } },

{ lang:'en', cat:'Thiên nhiên', art:'volcano', title:'Yellowstone nằm trên một siêu núi lửa',
  body:'Vườn quốc gia này thực chất là miệng của một siêu núi lửa còn hoạt động. Chính nhiệt từ lòng đất tạo ra các mạch nước phun và suối nước nóng đủ màu.',
  extra:'Yellowstone là vườn quốc gia đầu tiên trên thế giới, lập năm 1872. Mạch phun Old Faithful nổi tiếng vì phun khá đều đặn, nên du khách có thể canh giờ để xem.',
  word:{ t:'geyser', r:'ˈɡiːzə', vi:'mạch nước phun' } },

{ lang:'en', cat:'Thiên nhiên', art:'weather', title:'Nước Mỹ hứng nhiều lốc xoáy nhất thế giới',
  body:'Không khí ấm ẩm từ vịnh Mexico gặp không khí lạnh khô từ Canada trên vùng đồng bằng giữa nước Mỹ, tạo ra điều kiện lý tưởng cho lốc xoáy.',
  extra:'Vùng này được gọi là Tornado Alley. Nhà ở đó thường có hầm trú ẩn, và trẻ em tập diễn tập lốc xoáy ở trường như trẻ Nhật tập diễn tập động đất.',
  word:{ t:'tornado', r:'tɔːˈneɪdəʊ', vi:'lốc xoáy' } },

{ lang:'en', cat:'Thiên nhiên', art:'weather', title:'Thời tiết Anh thất thường vì nằm nơi bốn khối khí gặp nhau',
  body:'Không khí từ Bắc Cực, từ lục địa châu Âu, từ Đại Tây Dương và từ vùng nhiệt đới đều có thể tới Anh. Vì thế một ngày có thể đủ bốn kiểu thời tiết.',
  extra:'Đây là lý do thật sự khiến người Anh nói chuyện thời tiết nhiều đến thế: nó thay đổi liên tục nên luôn có gì đó mới để nói. Không phải chỉ là thói quen xã giao vô nghĩa.',
  word:{ t:'changeable', r:'ˈtʃeɪndʒəbl', vi:'hay thay đổi' } },

{ lang:'en', cat:'Thiên nhiên', art:'forest', title:'Cây sequoia ở California thuộc loại lớn nhất hành tinh',
  body:'Cây General Sherman là cây đơn lẻ có thể tích thân gỗ lớn nhất thế giới. Cây redwood ven biển thì cao nhất, vượt 100 m.',
  extra:'Nhiều cây trong số này đã hơn hai nghìn năm tuổi, nghĩa là đã đứng đó từ trước Công nguyên. Vỏ dày của chúng chịu được cháy rừng, và lửa thậm chí giúp hạt nảy mầm.',
  word:{ t:'redwood', r:'ˈredwʊd', vi:'cây gỗ đỏ' } },

{ lang:'en', cat:'Thiên nhiên', art:'coast', title:'Không đâu ở Anh cách biển quá 120 km',
  body:'Vì là đảo và hình dáng hẹp dài, mọi điểm trên đất liền Vương quốc Anh đều tương đối gần bờ biển.',
  extra:'Điều này định hình cả lịch sử lẫn ẩm thực: hải quân mạnh, thương mại đường biển, và cá là món ăn phổ biến. Việt Nam cũng có bờ biển dài, nhưng vùng Tây Bắc thì cách biển rất xa.',
  word:{ t:'coastline', r:'ˈkəʊstlaɪn', vi:'đường bờ biển' } },

{ lang:'en', cat:'Thiên nhiên', art:'mountain', title:'Ngọn núi cao nhất nước Anh thấp hơn Fansipan',
  body:'Ben Nevis ở Scotland cao khoảng 1.345 m, còn Fansipan của Việt Nam là 3.147 m. Núi ở Anh thấp vì đã bị bào mòn qua hàng trăm triệu năm.',
  extra:'Dù thấp, Ben Nevis vẫn nguy hiểm vì thời tiết đổi rất nhanh và mây mù dày. Mỗi năm đều có người phải cứu hộ trên núi này.',
  word:{ t:'summit', r:'ˈsʌmɪt', vi:'đỉnh núi' } },

{ lang:'en', cat:'Thiên nhiên', art:'snowflake', title:'Alaska rộng gấp hơn hai lần bang lớn thứ nhì của Mỹ',
  body:'Alaska lớn tới mức nếu tách ra làm hai, mỗi nửa vẫn lớn hơn Texas. Nhưng dân số thì thuộc nhóm ít nhất nước Mỹ.',
  extra:'Mỹ mua Alaska từ Nga năm 1867 với giá 7,2 triệu đô. Vào thời điểm đó, thương vụ bị báo chí Mỹ chế giễu là «chiếc tủ lạnh của Seward», theo tên vị bộ trưởng đã ký.',
  word:{ t:'Alaska', r:'əˈlæskə', vi:'bang Alaska' } },

{ lang:'en', cat:'Thiên nhiên', art:'forest', title:'Nước Anh là một trong những nước ít rừng nhất châu Âu',
  body:'Rừng bị phá gần hết qua nhiều thế kỷ để lấy đất canh tác và gỗ đóng tàu. Tỷ lệ che phủ rừng hiện thuộc nhóm thấp của châu Âu.',
  extra:'Vì thế cảnh quan «đồng quê Anh» điển hình — đồng cỏ xanh với hàng rào cây — thực ra là cảnh quan nhân tạo, không phải thiên nhiên nguyên bản. Có các chương trình trồng rừng lại đang được triển khai.',
  word:{ t:'woodland', r:'ˈwʊdlənd', vi:'vùng rừng' } },

/* ---------------- Địa lý & đời sống ---------------- */
{ lang:'en', cat:'Địa lý', art:'coin', title:'Nước Anh không dùng đồng euro',
  body:'Vương quốc Anh giữ đồng bảng, một trong những đồng tiền còn lưu hành liên tục lâu đời nhất thế giới. Ngay cả khi còn ở trong Liên minh châu Âu, Anh cũng không đổi sang euro.',
  extra:'Scotland và Bắc Ireland còn phát hành tờ bảng riêng do các ngân hàng địa phương in. Chúng hợp pháp nhưng đôi khi bị cửa hàng ở Anh từ chối vì người bán không quen mặt tờ tiền.',
  word:{ t:'pound sterling', r:'paʊnd ˈstɜːlɪŋ', vi:'đồng bảng Anh' } },

{ lang:'en', cat:'Địa lý', art:'metro', title:'Tàu điện ngầm London là tuyến đầu tiên trên thế giới',
  body:'Khai trương năm 1863, ban đầu chạy bằng đầu máy hơi nước dưới lòng đất — khói mù mịt tới mức các ga phải mở thông hơi lên mặt đường.',
  extra:'Tên gọi «the Tube» đến từ hình dạng ống tròn của các đường hầm đào sâu. Bản đồ tuyến của Harry Beck năm 1933 là một cột mốc thiết kế, và ngày nay gần như mọi metro trên thế giới đều vẽ theo kiểu đó.',
  word:{ t:'the Tube', r:'ðə tjuːb', vi:'tàu điện ngầm London' } },

{ lang:'en', cat:'Địa lý', art:'apartment', title:'Nhà Anh hay có hai vòi nước riêng cho nóng và lạnh',
  body:'Nhiều nhà cũ ở Anh có vòi nóng và vòi lạnh tách rời, nên không pha được nước ấm ở vòi. Đây là di sản của quy định cũ về bồn chứa nước nóng trên mái.',
  extra:'Nước nóng từng được chứa trong bể trên gác mái, có thể không sạch, nên luật tách riêng để không lẫn vào nước uống. Nhà mới đã dùng vòi trộn, nhưng vòi đôi vẫn còn ở rất nhiều nơi.',
  word:{ t:'tap', r:'tæp', vi:'vòi nước' } },

{ lang:'en', cat:'Địa lý', art:'phone', title:'Người Mỹ ghi ngày tháng theo thứ tự khác cả thế giới',
  body:'Mỹ viết tháng trước, rồi ngày, rồi năm: 09/12/2026 là ngày 12 tháng 9. Anh và phần lớn thế giới thì viết ngày trước.',
  extra:'Đây là nguồn nhầm lẫn thật trong hợp đồng và đặt vé. Cách an toàn là viết tên tháng bằng chữ, hoặc dùng định dạng quốc tế năm–tháng–ngày.',
  word:{ t:'date format', r:'deɪt ˈfɔːmæt', vi:'cách ghi ngày tháng' } },

{ lang:'en', cat:'Địa lý', art:'coin', title:'Mỹ vẫn dùng inch, pound và Fahrenheit',
  body:'Chỉ một số rất ít nước trên thế giới chưa chuyển hẳn sang hệ mét. Mỹ là nước lớn duy nhất trong nhóm đó.',
  extra:'Có một sự cố nổi tiếng: tàu thăm dò sao Hoả của NASA bị mất năm 1999 vì một nhóm kỹ sư dùng đơn vị Anh còn nhóm kia dùng hệ mét. Thiệt hại lên tới hàng trăm triệu đô.',
  word:{ t:'imperial units', r:'ɪmˈpɪəriəl ˈjuːnɪts', vi:'hệ đo lường Anh' } },

{ lang:'en', cat:'Địa lý', art:'map', title:'Nước Mỹ trải qua sáu múi giờ',
  body:'Từ bờ đông tới Hawaii, Mỹ có sáu múi giờ chính. Chương trình truyền hình phải phát nhiều lần cho các vùng khác nhau.',
  extra:'Rắc rối hơn nữa: bang Arizona phần lớn không đổi giờ mùa hè, trong khi các bang xung quanh thì có. Nên vào mùa hè, chênh lệch giờ giữa Arizona và bang bên cạnh thay đổi.',
  word:{ t:'time zone', r:'taɪm zəʊn', vi:'múi giờ' } },

{ lang:'en', cat:'Địa lý', art:'library', title:'Thư viện Quốc hội Mỹ là thư viện lớn nhất thế giới',
  body:'Library of Congress có hàng trăm triệu tài liệu, với các giá sách nối lại dài hàng trăm km.',
  extra:'Nó nhận một bản của gần như mọi thứ được đăng ký bản quyền ở Mỹ. Bộ sưu tập ban đầu được mua lại từ thư viện cá nhân của Thomas Jefferson, sau khi thư viện cũ bị đốt năm 1814.',
  word:{ t:'library', r:'ˈlaɪbrəri', vi:'thư viện' } },

{ lang:'en', cat:'Địa lý', art:'apartment', title:'Mỹ và Anh gọi tầng nhà khác nhau',
  body:'Tầng sát mặt đất ở Anh là ground floor, tầng trên nó là first floor. Ở Mỹ, tầng sát mặt đất đã là first floor rồi.',
  extra:'Nên «first floor» ở hai nước là hai tầng khác nhau. Trong thang máy Anh, nút tầng trệt ghi là G hoặc 0. Việt Nam theo cách Mỹ, gọi tầng sát đất là tầng 1.',
  word:{ t:'ground floor', r:'ɡraʊnd flɔː', vi:'tầng trệt' } },

/* ---------------- Ẩm thực ---------------- */
{ lang:'en', cat:'Ẩm thực', art:'cheese', title:'Cheddar là tên một ngôi làng ở Anh',
  body:'Loại phô mai phổ biến nhất thế giới mang tên làng Cheddar ở vùng Somerset, nơi có hang đá dùng để ủ phô mai.',
  extra:'Tên «cheddar» không được bảo hộ, nên ai ở đâu cũng làm và gọi là cheddar được. Chỉ «West Country Farmhouse Cheddar» mới có chỉ dẫn địa lý bảo hộ.',
  word:{ t:'cheddar', r:'ˈtʃedə', vi:'phô mai cheddar' } },

{ lang:'en', cat:'Ẩm thực', art:'baguette', title:'Bánh sandwich mang tên một bá tước ham chơi bài',
  body:'Theo giai thoại, Bá tước xứ Sandwich muốn ăn mà không rời bàn bài, nên bảo người hầu kẹp thịt vào giữa hai lát bánh mì.',
  extra:'Giai thoại này chưa bao giờ được xác nhận chắc chắn, và có thể ông chỉ đơn giản là bận việc chứ không phải mê bài. Nhưng cái tên thì đã đi vào mọi ngôn ngữ trên thế giới.',
  word:{ t:'sandwich', r:'ˈsænwɪdʒ', vi:'bánh mì kẹp' } },

{ lang:'en', cat:'Ẩm thực', art:'teatime', title:'Ở Anh, «tea» có thể là bữa tối',
  body:'Miền Bắc nước Anh và Scotland dùng «tea» để chỉ bữa ăn chiều tối. Nên câu mời «come round for tea» không nhất thiết là mời uống trà.',
  extra:'Còn có «high tea» và «afternoon tea» — hai thứ hoàn toàn khác nhau. Afternoon tea là bữa nhẹ sang trọng lúc 4 giờ; high tea vốn là bữa tối no của tầng lớp lao động.',
  word:{ t:'high tea', r:'haɪ tiː', vi:'bữa tối kiểu Anh' } },

{ lang:'en', cat:'Ẩm thực', art:'wine', title:'Nước Anh đang trở thành nơi làm rượu vang sủi',
  body:'Khí hậu ấm lên khiến vùng đông nam nước Anh có điều kiện trồng nho gần giống vùng Champagne của Pháp cách đây vài chục năm.',
  extra:'Đất đá phấn ở Sussex và Kent thực ra cùng một tầng địa chất với Champagne. Rượu vang sủi Anh nay đã đoạt giải trong các cuộc thi quốc tế, điều không ai nghĩ tới cách đây một thế hệ.',
  word:{ t:'sparkling wine', r:'ˈspɑːklɪŋ waɪn', vi:'rượu vang sủi' } },

{ lang:'en', cat:'Ẩm thực', art:'bowl', title:'Người Mỹ ăn bơ đậu phộng nhiều hơn bất kỳ nước nào',
  body:'Bơ đậu phộng phết bánh mì cùng với mứt là món ăn tuổi thơ gần như phổ quát ở Mỹ, viết tắt là PB&J.',
  extra:'Nhiều trường học Mỹ cấm mang đồ có đậu phộng vì học sinh dị ứng có thể phản ứng nặng. Đây là một trong những khác biệt văn hoá gây bất ngờ nhất với phụ huynh nước ngoài.',
  word:{ t:'peanut butter', r:'ˈpiːnʌt ˈbʌtə', vi:'bơ đậu phộng' } },

{ lang:'en', cat:'Ẩm thực', art:'coin', title:'Tiền tip ở Mỹ là một phần thu nhập, không phải quà',
  body:'Ở nhiều bang, nhân viên phục vụ có mức lương cơ bản rất thấp vì luật cho phép tính tiền tip vào thu nhập. Không tip nghĩa là họ thực sự mất tiền.',
  extra:'Mức thông thường là 15–20% hoá đơn. Ở Anh thì thoải mái hơn nhiều, và ở Nhật thì tip có thể bị coi là khiếm nhã. Cùng một hành vi, ba nước ba ý nghĩa.',
  word:{ t:'tip', r:'tɪp', vi:'tiền boa' } },

/* ---------------- Động vật ---------------- */
{ lang:'en', cat:'Động vật', art:'wolf', title:'Sói được thả lại vào Yellowstone và đổi cả dòng sông',
  body:'Năm 1995, sói xám được đưa trở lại vườn quốc gia sau bảy mươi năm vắng bóng. Đàn hươu giảm bớt, cây bụi ven sông mọc lại, bờ sông ổn định hơn.',
  extra:'Câu chuyện này hay được kể như ví dụ kinh điển về «thác dinh dưỡng» — một loài ở đỉnh chuỗi thức ăn ảnh hưởng tới cả hệ sinh thái. Giới khoa học vẫn tranh luận mức độ, nhưng hướng tác động thì rõ.',
  word:{ t:'grey wolf', r:'ɡreɪ wʊlf', vi:'sói xám' } },

{ lang:'en', cat:'Động vật', art:'crow', title:'Quạ ở Tháp London được nuôi theo truyền thuyết',
  body:'Tương truyền nếu đàn quạ rời Tháp London thì vương quốc sẽ sụp đổ. Vì thế luôn có ít nhất sáu con được nuôi ở đó, với một người chăm sóc riêng.',
  extra:'Mỗi con quạ có tên riêng và được cắt bớt lông cánh nhẹ để không bay xa. Người chăm sóc chúng mang chức danh chính thức là Ravenmaster.',
  word:{ t:'raven', r:'ˈreɪvn', vi:'con quạ lớn' } },

{ lang:'en', cat:'Động vật', art:'bull', title:'Bò rừng bison Mỹ từng suýt bị xoá sổ',
  body:'Từ hàng chục triệu con, đàn bison giảm xuống chỉ còn vài trăm vào cuối thế kỷ XIX do săn bắn tràn lan. Các nỗ lực bảo tồn đã cứu loài này khỏi tuyệt chủng.',
  extra:'Bison hiện là «quốc thú» chính thức của Hoa Kỳ. Người Mỹ hay gọi nhầm nó là «buffalo», nhưng trâu thật sự chỉ có ở châu Á và châu Phi.',
  word:{ t:'bison', r:'ˈbaɪsn', vi:'bò rừng bison' } },

{ lang:'en', cat:'Động vật', art:'forest', title:'Cáo đỏ sống ngay giữa London',
  body:'Cáo đô thị kiếm ăn trong vườn nhà và thùng rác, hoạt động chủ yếu về đêm. Số lượng cáo sống trong thành phố ở Anh khá lớn.',
  extra:'Người Anh chia làm hai phe rõ rệt: người thì để thức ăn cho chúng, người thì coi là loài phá phách. Dù sao, gặp một con cáo đi ngang phố London lúc nửa đêm là chuyện hoàn toàn bình thường.',
  word:{ t:'fox', r:'fɒks', vi:'con cáo' } },

{ lang:'en', cat:'Động vật', art:'coast', title:'Thiên nga trên sông Thames được kiểm đếm mỗi năm',
  body:'Nghi thức Swan Upping diễn ra vào tháng 7: thuyền đi dọc sông, bắt và đánh dấu thiên nga con để thống kê số lượng và kiểm tra sức khoẻ.',
  extra:'Truyền thống này có từ thế kỷ XII, khi thiên nga là món ăn quý dành cho hoàng gia. Ngày nay nó thuần tuý là công việc bảo tồn, nhưng nghi thức và trang phục vẫn giữ như xưa.',
  word:{ t:'swan', r:'swɒn', vi:'con thiên nga' } },

{ lang:'en', cat:'Động vật', art:'rooster', title:'Gà tây Mỹ suýt trở thành quốc điểu',
  body:'Benjamin Franklin từng viết thư chê đại bàng đầu trắng là loài «có phẩm chất đạo đức kém» vì hay cướp mồi, và khen gà tây là loài đáng kính hơn.',
  extra:'Bức thư đó viết cho con gái ông và mang giọng đùa, chứ không phải đề xuất chính thức. Nhưng câu chuyện được kể lại nhiều tới mức nhiều người Mỹ tin là thật.',
  word:{ t:'turkey', r:'ˈtɜːki', vi:'gà tây' } },

/* ---------------- Lịch sử ---------------- */
{ lang:'en', cat:'Lịch sử', art:'book', title:'Magna Carta là văn bản hạn chế quyền vua từ năm 1215',
  body:'Các nam tước ép vua John ký, buộc nhà vua cũng phải tuân theo luật. Đây là một trong những nền móng của tư tưởng pháp quyền phương Tây.',
  extra:'Phần lớn các điều khoản đã bị bãi bỏ, nhưng vài điều vẫn còn hiệu lực, trong đó có quyền được xét xử công bằng. Bốn bản gốc còn lại tới ngày nay.',
  word:{ t:'Magna Carta', r:'ˌmæɡnə ˈkɑːtə', vi:'Đại Hiến chương' } },

{ lang:'en', cat:'Lịch sử', art:'coast', title:'Đế quốc Anh từng rộng tới mức mặt trời không bao giờ lặn',
  body:'Vào lúc cực thịnh, lãnh thổ và thuộc địa Anh trải khắp các múi giờ, nên luôn có một nơi đang là ban ngày.',
  extra:'Đây chính là lý do tiếng Anh trở thành ngôn ngữ toàn cầu, và cũng là lý do nhiều nước lái xe bên trái. Di sản của giai đoạn đó tới nay vẫn còn trong biên giới, luật pháp và ngôn ngữ của hàng chục quốc gia.',
  word:{ t:'empire', r:'ˈempaɪə', vi:'đế quốc' } },

{ lang:'en', cat:'Lịch sử', art:'stamp', title:'Tem thư đầu tiên của thế giới là của nước Anh',
  body:'Penny Black phát hành năm 1840, mở đầu cho hệ thống bưu chính hiện đại: người gửi trả tiền trước bằng cách dán tem.',
  extra:'Vì là nước đầu tiên, tem Anh tới nay vẫn không in tên nước — chỉ có hình đầu quốc vương. Mọi nước khác đều phải ghi tên mình trên tem.',
  word:{ t:'postage stamp', r:'ˈpəʊstɪdʒ stæmp', vi:'tem thư' } },

{ lang:'en', cat:'Lịch sử', art:'ballot', title:'Nước Mỹ tuyên bố độc lập năm 1776, nhưng hiến pháp mãi sau mới có',
  body:'Tuyên ngôn Độc lập ký năm 1776, còn Hiến pháp Hoa Kỳ chỉ được thông qua năm 1787 và có hiệu lực năm 1789.',
  extra:'Giữa hai mốc đó, nước Mỹ vận hành theo một văn bản khác vốn quá lỏng lẻo và gần như không có chính quyền trung ương. Chính sự thất bại đó dẫn tới việc soạn hiến pháp mới.',
  word:{ t:'independence', r:'ˌɪndɪˈpendəns', vi:'độc lập' } },

{ lang:'en', cat:'Lịch sử', art:'library', title:'Từ điển Oxford mất hơn bảy mươi năm mới soạn xong',
  body:'Công việc bắt đầu từ năm 1857 và bộ đầy đủ chỉ hoàn tất năm 1928. Nó dựa vào hàng triệu phiếu trích dẫn do tình nguyện viên khắp nơi gửi về.',
  extra:'Một trong những người đóng góp nhiều nhất là một bác sĩ đang bị giam trong bệnh viện tâm thần. Câu chuyện của ông đã được viết thành sách và dựng thành phim.',
  word:{ t:'dictionary', r:'ˈdɪkʃənri', vi:'từ điển' } },

{ lang:'en', cat:'Lịch sử', art:'letter', title:'Tiếng Anh từng suýt không còn là ngôn ngữ của giới cầm quyền Anh',
  body:'Sau cuộc chinh phục năm 1066, giới quý tộc Anh nói tiếng Pháp Norman suốt hơn hai trăm năm. Tiếng Anh chỉ là tiếng của dân thường.',
  extra:'Đó là lý do tiếng Anh có hai lớp từ: từ ngắn gốc German cho đời thường (cow, pig, house) và từ gốc Pháp cho món ăn và chuyện sang trọng (beef, pork, mansion). Nông dân nuôi con vật, quý tộc ăn món ăn.',
  word:{ t:'Norman Conquest', r:'ˈnɔːmən ˈkɒŋkwest', vi:'cuộc chinh phục Norman' } },

{ lang:'en', cat:'Lịch sử', art:'train', title:'Đường sắt chở khách đầu tiên của thế giới chạy ở Anh',
  body:'Tuyến Liverpool – Manchester khai trương năm 1830, là đường sắt liên đô thị đầu tiên chạy hoàn toàn bằng đầu máy hơi nước và có lịch chạy cố định.',
  extra:'Chính nhu cầu về giờ tàu thống nhất đã buộc nước Anh bỏ giờ địa phương của từng thành phố và chuyển sang một giờ chuẩn duy nhất. Trước đó, đồng hồ ở Bristol chậm hơn London mười phút.',
  word:{ t:'railway', r:'ˈreɪlweɪ', vi:'đường sắt' } },

{ lang:'en', cat:'Lịch sử', art:'podium', title:'Nước Anh từng bỏ mười một ngày trong năm 1752',
  body:'Khi chuyển từ lịch Julius sang lịch Gregory, ngày 2 tháng 9 nối thẳng sang ngày 14 tháng 9. Mười một ngày ở giữa không tồn tại.',
  extra:'Cùng lúc đó, đầu năm mới cũng chuyển từ ngày 25 tháng 3 sang ngày 1 tháng 1. Nga phải tới năm 1918 mới làm việc tương tự, khi đó phải bỏ tới mười ba ngày vì sai số đã lớn hơn.',
  word:{ t:'calendar', r:'ˈkælɪndə', vi:'lịch' } },

{ lang:'en', cat:'Địa lý', art:'flag', title:'Cờ Vương quốc Anh là ba lá cờ chồng lên nhau',
  body:'Union Jack ghép chữ thập của thánh George (Anh), thánh Andrew (Scotland) và thánh Patrick (Ireland). Xứ Wales không có mặt trong đó.',
  extra:'Lá cờ này không đối xứng: dải chéo trắng rộng hơn ở một bên. Treo ngược là lỗi nghi thức thật sự, và đã từng xảy ra trong các buổi lễ cấp nhà nước.',
  word:{ t:'Union Jack', r:'ˈjuːniən dʒæk', vi:'cờ Vương quốc Anh' } },

{ lang:'en', cat:'Thiên nhiên', art:'coast', title:'Bờ biển Anh dài bao nhiêu phụ thuộc vào cách bạn đo',
  body:'Đo bằng thước càng ngắn thì càng lọt vào từng khúc quanh nhỏ, và con số càng lớn. Không có một đáp án duy nhất.',
  extra:'Hiện tượng này được gọi là «nghịch lý đường bờ biển», do nhà toán học Mandelbrot nêu ra và trở thành một trong những ví dụ khởi đầu của hình học fractal.',
  word:{ t:'paradox', r:'ˈpærədɒks', vi:'nghịch lý' } }
  );
})();
