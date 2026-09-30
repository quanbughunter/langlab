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
  word:{ t:'paradox', r:'ˈpærədɒks', vi:'nghịch lý' } },

/* ==================================================================
   ===========================  TIẾNG PHÁP  =========================
   ================================================================== */

/* ---------------- Ngôn ngữ ---------------- */
{ lang:'fr', cat:'Ngôn ngữ', art:'academy', title:'Tiếng Pháp có một viện hàn lâm canh giữ ngôn ngữ',
  body:'Académie française lập từ năm 1635, có 40 thành viên trọn đời gọi là «những người bất tử». Nhiệm vụ của họ là soạn từ điển và giữ chuẩn mực cho tiếng Pháp.',
  extra:'Khác hẳn tiếng Anh vốn không có cơ quan nào quản. Viện hàn lâm hay đề xuất từ Pháp thay cho từ mượn tiếng Anh — «courriel» thay cho email, «logiciel» thay cho software. Không phải đề xuất nào cũng được dân chấp nhận.',
  word:{ t:'l’Académie française', r:'a.ka.de.mi fʁɑ̃.sɛz', vi:'Viện Hàn lâm Pháp' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'silentletter', title:'Phụ âm cuối trong tiếng Pháp thường câm',
  body:'«Petit» đọc là «pơ-ti», «grand» là «gờ-răng». Chữ viết giữ lại phụ âm mà tiếng nói đã bỏ từ lâu.',
  extra:'Mẹo nhớ của người bản xứ: bốn chữ C, R, F, L thì thường đọc lên — ghép lại thành từ tiếng Anh «CaReFuL». Vẫn có ngoại lệ, nhưng mẹo này đúng phần lớn trường hợp.',
  word:{ t:'muet', r:'mɥɛ', vi:'câm, không phát âm' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'liaison', title:'Nối âm liaison làm cả câu dính vào nhau',
  body:'«Les amis» đọc thành «lê-za-mi» vì chữ s câm được đánh thức khi từ sau bắt đầu bằng nguyên âm.',
  extra:'Đây là lý do người mới học nghe tiếng Pháp thấy như một dòng âm liền không có khoảng nghỉ. Tách được từ trong dòng âm đó là cột mốc lớn nhất của việc luyện nghe tiếng Pháp.',
  word:{ t:'la liaison', r:'lje.zɔ̃', vi:'nối âm' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'vigesimal', title:'Số 80 trong tiếng Pháp là «bốn hai mươi»',
  body:'70 là «soixante-dix» (60+10), 80 là «quatre-vingts» (4×20), 90 là «quatre-vingt-dix» (4×20+10). Số 99 đọc thành «bốn hai mươi mười chín».',
  extra:'Đây là tàn dư của lối đếm theo hệ 20 thời cổ. Người Bỉ và Thuỵ Sĩ nói gọn hơn nhiều: septante (70), huitante (80), nonante (90) — nhưng ở Pháp thì không dùng.',
  word:{ t:'quatre-vingts', r:'katʁə vɛ̃', vi:'tám mươi' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'gendermark', title:'Danh từ tiếng Pháp không có giống trung',
  body:'Mọi danh từ đều là giống đực hoặc giống cái, kể cả vật vô tri. Cái bàn là giống cái, quyển sách là giống đực.',
  extra:'Đổi giống là đổi nghĩa: «un livre» là quyển sách, «une livre» là nửa cân. «Le tour» là vòng đi, «la tour» là cái tháp. Nên học từ mà không học giống thì sau phải học lại từ đầu.',
  word:{ t:'le genre', r:'ʒɑ̃ʁ', vi:'giống của danh từ' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'diplomacy', title:'Tiếng Pháp từng là ngôn ngữ ngoại giao của cả châu Âu',
  body:'Từ thế kỷ XVII tới đầu thế kỷ XX, hiệp ước và thư từ giữa các triều đình châu Âu chủ yếu viết bằng tiếng Pháp.',
  extra:'Dấu vết còn lại trong tiếng Anh ngày nay: attaché, communiqué, détente, rendez-vous, chargé d’affaires. Hộ chiếu nhiều nước vẫn in song ngữ với tiếng Pháp vì lý do lịch sử này.',
  word:{ t:'la diplomatie', r:'di.plɔ.ma.si', vi:'ngành ngoại giao' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'negation', title:'Tiếng Pháp phủ định bằng hai chữ kẹp lấy động từ',
  body:'«Ne … pas» ôm lấy động từ chia: «je ne sais pas». Cấu trúc kẹp này khác hẳn tiếng Anh chỉ cần một chữ «not».',
  extra:'Khi nói, người Pháp thường nuốt mất «ne»: «je sais pas» nghe thành «chê-pa». Viết thì luôn phải giữ đủ. Nghe hội thoại thật mà không biết điều này là hiểu ngược hoàn toàn.',
  word:{ t:'la négation', r:'ne.ɡa.sjɔ̃', vi:'phủ định' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'loanword', title:'Tiếng Pháp có rất nhiều từ mà tiếng Anh mượn nguyên xi',
  body:'Café, restaurant, menu, chef, ballet, genre, déjà-vu, fiancé, souvenir — tiếng Anh dùng thẳng mà không dịch.',
  extra:'Chiều ngược lại cũng có: tiếng Pháp mượn week-end, parking, shopping, football. Điều buồn cười là nhiều từ «tiếng Anh» trong tiếng Pháp lại không tồn tại trong tiếng Anh thật, ví dụ «le footing» nghĩa là chạy bộ.',
  word:{ t:'un emprunt', r:'ɑ̃.pʁœ̃', vi:'từ mượn' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'accentcirc', title:'Dấu mũ trong tiếng Pháp thường đánh dấu một chữ S đã mất',
  body:'«Forêt» từng là «forest», «hôpital» từng là «hospital», «île» từng là «isle». Dấu mũ ^ là bia mộ của chữ s biến mất.',
  extra:'Mẹo này rất hữu dụng cho người biết tiếng Anh: thấy dấu mũ thì thử thêm chữ s vào sau nguyên âm, rất có thể ra một từ tiếng Anh quen thuộc. Bête → beast, coût → cost, pâte → paste.',
  word:{ t:'l’accent circonflexe', r:'siʁ.kɔ̃.flɛks', vi:'dấu mũ' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'throatr', title:'Chữ R tiếng Pháp phát ở cổ họng, không rung đầu lưỡi',
  body:'Âm này ma sát ở cuống lưỡi, gần với «kh» nhẹ hơn là với «r» tiếng Việt. Nó là âm khó nhất với người Việt học tiếng Pháp.',
  extra:'Thú vị là âm R họng này chỉ mới phổ biến ở Pháp từ khoảng thế kỷ XVII, bắt đầu từ giới quý tộc Paris. Ở một số vùng quê và ở Québec, người già vẫn rung lưỡi theo lối cũ.',
  word:{ t:'la prononciation', r:'pʁɔ.nɔ̃.sja.sjɔ̃', vi:'cách phát âm' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'tuvous', title:'Tiếng Pháp có hai cách nói «bạn» và chọn sai là bất lịch sự',
  body:'«Tu» thân mật, «vous» trang trọng và cũng là số nhiều. Dùng «tu» với người chưa quen bị coi là suồng sã.',
  extra:'Có hẳn hai động từ cho việc này: «tutoyer» là gọi bằng tu, «vouvoyer» là gọi bằng vous. Khi quan hệ đủ thân, người Pháp sẽ đề nghị «on peut se tutoyer ?» — một cột mốc nhỏ trong quan hệ.',
  word:{ t:'tutoyer', r:'ty.twa.je', vi:'gọi bằng «tu»' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'accentset', title:'Tiếng Pháp dùng chung bảng chữ Latinh nhưng thêm năm dấu',
  body:'Accent aigu (é), accent grave (è), circonflexe (ê), cédille (ç) và tréma (ë). Mỗi dấu có một chức năng riêng chứ không phải trang trí.',
  extra:'Cédille dưới chữ c ép nó đọc thành «s» trước a, o, u — nên «français» mới đọc là «phrăng-xe». Không có cédille thì «francais» sẽ phải đọc là «phrăng-ke».',
  word:{ t:'la cédille', r:'se.dij', vi:'dấu móc dưới chữ c' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'idiom', title:'Người Pháp nói «chín mươi chín» chứ không nói «rất nhiều lần»',
  body:'Thành ngữ tiếng Pháp hay dùng con số cụ thể: «trente-six» (ba mươi sáu) để chỉ số lượng lớn không xác định.',
  extra:'«Voir trente-six chandelles» nghĩa đen là «thấy ba mươi sáu ngọn nến», dùng khi bị đánh choáng váng — tương đương «hoa mắt chóng mặt» của tiếng Việt. Con số 36 xuất hiện trong rất nhiều thành ngữ Pháp.',
  word:{ t:'trente-six', r:'tʁɑ̃t sis', vi:'ba mươi sáu; rất nhiều' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'writtentense', title:'Tiếng Pháp có một thì chỉ dùng trong văn viết',
  body:'Passé simple gần như biến mất khỏi lời nói hằng ngày, nhưng vẫn sống trong tiểu thuyết, truyện cổ tích và sách lịch sử.',
  extra:'Nên người Pháp có thể đọc hiểu thì này trôi chảy mà không bao giờ dùng nó khi nói. Người học thường chỉ cần nhận biết chứ không cần chia thành thạo — trừ khi định đọc văn học.',
  word:{ t:'le passé simple', r:'pa.se sɛ̃pl', vi:'thì quá khứ đơn (văn viết)' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'latinroot', title:'Hơn nửa từ vựng tiếng Anh có gốc Pháp hoặc Latinh qua Pháp',
  body:'Sau cuộc chinh phục Norman năm 1066, tiếng Pháp tràn vào tiếng Anh suốt mấy thế kỷ, để lại một lớp từ rất dày.',
  extra:'Đó là lý do người Việt biết tiếng Anh học tiếng Pháp rất nhanh ở phần đọc: nation, information, situation, possible, important — viết gần như y hệt. Chỉ cách đọc là khác hẳn.',
  word:{ t:'le vocabulaire', r:'vɔ.ka.by.lɛʁ', vi:'từ vựng' } },

{ lang:'fr', cat:'Ngôn ngữ', art:'endstress', title:'Trọng âm tiếng Pháp luôn rơi vào cuối cụm từ',
  body:'Khác tiếng Anh với trọng âm nhảy khắp nơi, tiếng Pháp nhấn đều và nhẹ vào âm tiết cuối của mỗi nhóm từ.',
  extra:'Điều này làm tiếng Pháp nghe có nhịp rất đều, và cũng là lý do người Pháp nói tiếng Anh hay bị nhận ra ngay: họ nhấn sai chỗ vì quen nhấn cuối.',
  word:{ t:'l’accent tonique', r:'tɔ.nik', vi:'trọng âm' } },

/* ---------------- Chính trị & bầu cử ---------------- */
{ lang:'fr', cat:'Chính trị', art:'ballot', title:'Bầu cử tổng thống Pháp luôn có hai vòng',
  body:'Nếu vòng một không ai quá nửa số phiếu, hai người dẫn đầu vào vòng hai sau đó hai tuần. Vòng hai luôn chỉ còn đúng hai người.',
  extra:'Hệ thống này cho phép cử tri «bầu bằng trái tim ở vòng một, bầu bằng lý trí ở vòng hai». Nhiệm kỳ tổng thống là 5 năm, rút từ 7 năm xuống sau cuộc trưng cầu dân ý năm 2000.',
  word:{ t:'le second tour', r:'sə.ɡɔ̃ tuʁ', vi:'vòng hai' } },

{ lang:'fr', cat:'Chính trị', art:'parliament', title:'Pháp có tổng thống VÀ thủ tướng cùng lúc',
  body:'Tổng thống do dân bầu, nắm đối ngoại và quốc phòng. Thủ tướng do tổng thống bổ nhiệm, điều hành chính phủ hằng ngày và chịu trách nhiệm trước Quốc hội.',
  extra:'Khi tổng thống và đa số Quốc hội thuộc hai phe khác nhau, tình huống đó gọi là «cohabitation» — chung sống. Nó đã xảy ra vài lần và khiến quyền lực thực tế nghiêng hẳn về thủ tướng.',
  word:{ t:'la cohabitation', r:'ko.a.bi.ta.sjɔ̃', vi:'chung sống chính trị' } },

{ lang:'fr', cat:'Chính trị', art:'flag', title:'Ba màu cờ Pháp ghép màu Paris với màu nhà vua',
  body:'Xanh và đỏ là hai màu của thành phố Paris, trắng là màu của hoàng gia. Ghép lại thành biểu tượng hoà giải sau Cách mạng.',
  extra:'Ba dải không rộng bằng nhau trên lá cờ treo ngoài trời: dải xanh hơi hẹp hơn, để khi gió thổi và khoảng cách xa thì mắt người nhìn thấy ba phần đều nhau.',
  word:{ t:'le drapeau tricolore', r:'dʁa.po tʁi.kɔ.lɔʁ', vi:'cờ tam tài' } },

{ lang:'fr', cat:'Chính trị', art:'crown', title:'Khẩu hiệu nước Pháp được khắc lên mọi toà thị chính',
  body:'«Liberté, Égalité, Fraternité» xuất hiện trên mặt tiền trường học, toà thị chính và giấy tờ hành chính khắp nước Pháp.',
  extra:'Khẩu hiệu này chỉ được chốt thành bộ ba vào thời Đệ Tam Cộng hoà, cuối thế kỷ XIX. Trong Cách mạng, còn có những bộ ba khác từng được dùng rồi bị bỏ.',
  word:{ t:'la devise', r:'də.viz', vi:'khẩu hiệu' } },

{ lang:'fr', cat:'Chính trị', art:'podium', title:'Marianne là gương mặt tượng trưng cho nền Cộng hoà Pháp',
  body:'Tượng bán thân Marianne đội mũ Phrygian có mặt ở mọi toà thị chính. Bà không phải người thật mà là hình tượng của Tự do và Cộng hoà.',
  extra:'Mỗi thời kỳ, khuôn mặt Marianne được tạc theo một người mẫu khác nhau, trong đó có cả các nữ diễn viên nổi tiếng. Hình Marianne cũng xuất hiện trên tem thư Pháp.',
  word:{ t:'Marianne', r:'ma.ʁjan', vi:'biểu tượng nền Cộng hoà' } },

{ lang:'fr', cat:'Chính trị', art:'scales', title:'Pháp tách hẳn tôn giáo khỏi nhà nước từ năm 1905',
  body:'Nguyên tắc «laïcité» quy định nhà nước trung lập tuyệt đối với mọi tôn giáo. Trường công không dạy giáo lý và không có biểu tượng tôn giáo.',
  extra:'Đây là một trong những nguyên tắc gây tranh luận nhiều nhất ở Pháp hiện nay. Nó khác cả Mỹ (tự do tôn giáo nhưng tổng thống tuyên thệ trên Kinh Thánh) lẫn Anh (có quốc giáo chính thức).',
  word:{ t:'la laïcité', r:'la.i.si.te', vi:'tính thế tục của nhà nước' } },

{ lang:'fr', cat:'Chính trị', art:'map', title:'Nước Pháp có lãnh thổ rải khắp mọi đại dương',
  body:'Ngoài phần châu Âu, Pháp còn có các vùng lãnh thổ hải ngoại ở Caribe, Ấn Độ Dương, Thái Bình Dương và Nam Mỹ.',
  extra:'Guyane thuộc Pháp nằm ở Nam Mỹ và là nơi đặt sân bay vũ trụ châu Âu. Nhờ các vùng này, Pháp có vùng đặc quyền kinh tế trên biển thuộc hàng rộng nhất thế giới.',
  word:{ t:'l’outre-mer', r:'utʁə.mɛʁ', vi:'lãnh thổ hải ngoại' } },

{ lang:'fr', cat:'Chính trị', art:'nametag', title:'Nước Pháp đã gộp các vùng từ 22 xuống 13',
  body:'Năm 2016, bản đồ hành chính vùng của Pháp được vẽ lại, nhiều vùng cũ sáp nhập thành vùng lớn hơn.',
  extra:'Một số vùng mới lúc đầu chỉ có tên tạm ghép từ tên cũ, rồi mới được đặt tên chính thức sau. Cải cách này nhằm giảm chi phí hành chính, nhưng gây nhiều tranh luận về bản sắc địa phương.',
  word:{ t:'une région', r:'ʁe.ʒjɔ̃', vi:'vùng' } },

{ lang:'fr', cat:'Chính trị', art:'stamp', title:'Pháp có hơn ba mươi nghìn xã, nhiều hơn cả châu Âu cộng lại',
  body:'«Commune» là đơn vị hành chính nhỏ nhất, có thể chỉ vài chục dân nhưng vẫn có thị trưởng và hội đồng riêng.',
  extra:'Số xã của Pháp nhiều hơn tổng số của nhiều nước EU gộp lại. Nhiều nỗ lực sáp nhập đã thất bại vì người dân gắn bó mạnh với làng xã của mình.',
  word:{ t:'une commune', r:'kɔ.myn', vi:'xã' } },

{ lang:'fr', cat:'Chính trị', art:'coin', title:'Pháp là một trong những nước đầu tiên dùng đồng euro',
  body:'Đồng franc Pháp được thay bằng euro từ năm 2002. Franc đã tồn tại dưới nhiều dạng suốt hơn sáu trăm năm trước đó.',
  extra:'Mặt sau đồng xu euro do mỗi nước tự thiết kế, nên xu Pháp có hình Marianne, cây sồi hoặc người gieo hạt. Xu của nước nào cũng tiêu được ở mọi nước dùng euro.',
  word:{ t:'l’euro', r:'ø.ʁo', vi:'đồng euro' } },

/* ---------------- Luật lệ khác Việt Nam ---------------- */
{ lang:'fr', cat:'Luật pháp', art:'scales', title:'Pháp quy định tỷ lệ nhạc Pháp trên sóng phát thanh',
  body:'Luật buộc các đài phát thanh phải dành một tỷ lệ nhất định thời lượng cho bài hát bằng tiếng Pháp, nhằm bảo vệ nền âm nhạc trong nước.',
  extra:'Quy định ra đời những năm 1990 khi nhạc Anh Mỹ lấn át. Kết quả gây tranh cãi: nó giúp nhạc Pháp sống được, nhưng cũng khiến một số bài bị phát đi phát lại tới mức nhàm.',
  word:{ t:'les quotas', r:'kwɔ.ta', vi:'hạn ngạch' } },

{ lang:'fr', cat:'Luật pháp', art:'book', title:'Siêu thị Pháp bị cấm vứt bỏ thực phẩm còn dùng được',
  body:'Luật buộc siêu thị lớn phải ký thoả thuận tặng lại thực phẩm gần hết hạn cho các tổ chức từ thiện, thay vì đem đổ.',
  extra:'Pháp là một trong những nước đầu tiên ra luật kiểu này, và nhiều nước sau đó học theo. Trước khi có luật, một số siêu thị còn cố tình đổ thuốc tẩy lên thực phẩm bỏ đi để không ai nhặt.',
  word:{ t:'le gaspillage', r:'ɡas.pi.jaʒ', vi:'sự lãng phí' } },

{ lang:'fr', cat:'Luật pháp', art:'coin', title:'Người Pháp có quyền «ngắt kết nối» ngoài giờ làm',
  body:'Luật lao động công nhận quyền không trả lời email công việc ngoài giờ. Doanh nghiệp lớn phải thương lượng quy tắc cụ thể với người lao động.',
  extra:'Tuần làm việc chuẩn ở Pháp là 35 giờ, và người lao động có ít nhất 5 tuần nghỉ phép mỗi năm. Đây là một trong những chế độ hào phóng nhất thế giới.',
  word:{ t:'le droit à la déconnexion', r:'dʁwa a la de.kɔ.nɛk.sjɔ̃', vi:'quyền ngắt kết nối' } },

{ lang:'fr', cat:'Luật pháp', art:'passport', title:'Tên đặt cho con ở Pháp có thể bị toà bác',
  body:'Bố mẹ được tự do đặt tên, nhưng nếu nhân viên hộ tịch thấy cái tên có thể gây hại cho đứa trẻ thì báo lên toà, và toà có quyền buộc đổi.',
  extra:'Đã có những vụ toà bác các tên như «Nutella» hay «Fraise» (quả dâu) vì lo trẻ bị trêu chọc suốt đời. Trước năm 1993, luật còn chặt hơn: tên phải lấy từ danh sách các thánh và nhân vật lịch sử.',
  word:{ t:'l’état civil', r:'e.ta si.vil', vi:'hộ tịch' } },

{ lang:'fr', cat:'Luật pháp', art:'ring', title:'Pháp có một hình thức chung sống có đăng ký ngoài hôn nhân',
  body:'PACS là hợp đồng dân sự giữa hai người sống chung, cho nhiều quyền lợi về thuế và thừa kế mà thủ tục đơn giản hơn kết hôn.',
  extra:'Ra đời năm 1999, ban đầu chủ yếu dành cho các cặp đồng giới khi hôn nhân chưa được công nhận. Ngày nay phần lớn người ký PACS lại là các cặp nam nữ.',
  word:{ t:'le PACS', r:'paks', vi:'hợp đồng chung sống dân sự' } },

{ lang:'fr', cat:'Luật pháp', art:'scales', title:'Bánh mì baguette ở Pháp có luật riêng',
  body:'Một sắc lệnh quy định bánh mì gọi là «pain de tradition française» chỉ được làm từ bột mì, nước, muối và men — không chất phụ gia, không đông lạnh bột.',
  extra:'Đó là lý do baguette ở tiệm bánh thật sự khác hẳn bánh siêu thị. Nghề làm baguette thủ công của Pháp đã được UNESCO ghi vào danh sách di sản phi vật thể.',
  word:{ t:'la baguette', r:'ba.ɡɛt', vi:'bánh mì baguette' } },

{ lang:'fr', cat:'Luật pháp', art:'stamp', title:'Pháp bắt buộc mọi xe phải mang một bộ đồ an toàn',
  body:'Áo phản quang và tam giác cảnh báo phải có sẵn trong xe. Áo phải để trong khoang lái chứ không phải cốp, để mặc được trước khi ra khỏi xe.',
  extra:'Nhiều quốc gia châu Âu có quy định tương tự nhưng chi tiết khác nhau, nên lái xe qua biên giới phải kiểm tra lại. Đây là một trong những điều du khách tự lái xe ở châu Âu hay bỏ sót.',
  word:{ t:'le gilet jaune', r:'ʒi.lɛ ʒon', vi:'áo phản quang vàng' } },

{ lang:'fr', cat:'Luật pháp', art:'apartment', title:'Chủ nhà Pháp không được đuổi người thuê vào mùa đông',
  body:'Từ đầu tháng 11 tới cuối tháng 3, việc cưỡng chế đuổi người khỏi nhà ở bị tạm dừng. Khoảng thời gian này gọi là «trêve hivernale».',
  extra:'Quy định có từ những năm 1950, nhằm tránh việc người bị đuổi ra đường giữa mùa lạnh. Tiền điện nước cũng không được cắt trong thời gian này.',
  word:{ t:'la trêve hivernale', r:'tʁɛv i.vɛʁ.nal', vi:'thời gian đình chỉ mùa đông' } },

/* ---------------- Tên gọi & tên họ ---------------- */
{ lang:'fr', cat:'Tên gọi', art:'nametag', title:'Martin là họ phổ biến nhất nước Pháp',
  body:'Họ này bắt nguồn từ tên thánh Martin de Tours, một vị thánh rất được sùng kính ở Pháp thời trung cổ.',
  extra:'Các họ phổ biến tiếp theo — Bernard, Dubois, Thomas, Robert — cũng phần lớn từ tên thánh. Khác với Anh và Đức nơi họ nghề chiếm ưu thế, họ Pháp nghiêng về tên thánh.',
  word:{ t:'un nom de famille', r:'nɔ̃ də fa.mij', vi:'họ' } },

{ lang:'fr', cat:'Tên gọi', art:'family', title:'Nhiều họ Pháp bắt đầu bằng «de», «du», «le»',
  body:'«De» thường chỉ nơi xuất thân: Descartes là «từ Cartes». «Le» đi với biệt danh: Leblanc là «người tóc trắng», Legrand là «người cao lớn».',
  extra:'Chữ «de» hay bị coi là dấu hiệu quý tộc, nhưng không phải lúc nào cũng đúng — rất nhiều gia đình thường dân cũng có, đơn giản vì tổ tiên họ đến từ một làng nào đó.',
  word:{ t:'la particule', r:'paʁ.ti.kyl', vi:'tiểu từ trước họ' } },

{ lang:'fr', cat:'Tên gọi', art:'nametag', title:'Người Pháp có thể mang họ ghép của cả bố lẫn mẹ',
  body:'Từ năm 2005, bố mẹ được chọn cho con mang họ bố, họ mẹ, hoặc cả hai ghép lại theo thứ tự tự chọn.',
  extra:'Trước đó luật mặc định lấy họ bố. Phụ nữ Pháp khi kết hôn về mặt pháp lý vẫn giữ họ gốc — họ chồng chỉ là «tên sử dụng» chứ không thay thế họ trên giấy khai sinh.',
  word:{ t:'le nom d’usage', r:'nɔ̃ dy.zaʒ', vi:'tên sử dụng' } },

{ lang:'fr', cat:'Tên gọi', art:'letter', title:'Người Pháp thường có nhiều hơn một tên riêng',
  body:'Giấy khai sinh Pháp hay ghi hai ba tên: tên gọi hằng ngày, rồi tên của ông bà hoặc cha mẹ đỡ đầu.',
  extra:'Chỉ tên đầu tiên được dùng trong đời sống, các tên sau chủ yếu xuất hiện trên giấy tờ. Người Việt điền biểu mẫu Pháp hay bối rối vì có ô «prénoms» ở dạng số nhiều.',
  word:{ t:'les prénoms', r:'pʁe.nɔ̃', vi:'các tên riêng' } },

{ lang:'fr', cat:'Tên gọi', art:'nametag', title:'Người Pháp chào hỏi kèm tên riêng rất ít',
  body:'Câu chào chuẩn là «Bonjour, monsieur» hoặc «Bonjour, madame» chứ không phải «Bonjour, Pierre». Thêm tên riêng khi chưa thân là hơi suồng sã.',
  extra:'Bỏ hẳn chữ «monsieur» hay «madame» khi chào người lạ — chỉ nói trống «bonjour» — lại bị coi là cộc lốc. Đây là chi tiết nhỏ nhưng ảnh hưởng lớn tới ấn tượng đầu tiên.',
  word:{ t:'monsieur', r:'mə.sjø', vi:'ông, ngài' } },

{ lang:'fr', cat:'Tên gọi', art:'map', title:'Rất nhiều tên làng Pháp kết thúc bằng «-ac», «-y» hoặc «-ville»',
  body:'Đuôi «-ac» thường có gốc Gaulois ở miền nam, «-y» ở miền bắc, còn «-ville» nghĩa là «làng» hay «trang trại».',
  extra:'Nhìn bản đồ Pháp có thể đoán được lịch sử định cư: vùng nào chịu ảnh hưởng Gaulois, vùng nào chịu ảnh hưởng Germanic. Đuôi «-ville» còn theo người Pháp sang tận Bắc Mỹ, như Louisville.',
  word:{ t:'un village', r:'vi.laʒ', vi:'ngôi làng' } },

{ lang:'fr', cat:'Tên gọi', art:'saintcal', title:'Pháp có lịch ghi tên thánh cho từng ngày trong năm',
  body:'Mỗi ngày trong lịch Pháp gắn với một vị thánh. Người mang tên đó được chúc mừng «bonne fête» giống như ngày sinh nhật nhỏ.',
  extra:'Lịch treo tường và cả bản tin thời tiết trên truyền hình đều nhắc tên thánh của ngày. Truyền thống này còn mạnh ở các vùng quê, nhất là với người lớn tuổi.',
  word:{ t:'la fête', r:'fɛt', vi:'ngày lễ; ngày tên thánh' } },

{ lang:'fr', cat:'Tên gọi', art:'family', title:'Người Pháp gọi họ hàng đơn giản hơn tiếng Việt rất nhiều',
  body:'«Oncle» dùng cho cả chú, bác, cậu. «Tante» dùng cho cô, dì, thím, mợ. Không phân biệt nội ngoại, không phân biệt tuổi so với bố mẹ.',
  extra:'Đây là chỗ dịch ngược từ Pháp sang Việt rất khó: một chữ «oncle» phải chọn lấy một trong năm sáu từ tiếng Việt, mà muốn chọn đúng thì phải biết quan hệ cụ thể.',
  word:{ t:'un oncle', r:'ɔ̃kl', vi:'chú, bác, cậu' } },

/* ---------------- Ẩm thực ---------------- */
{ lang:'fr', cat:'Ẩm thực', art:'baguette', title:'Baguette phải ăn trong ngày, và người Pháp biết rõ điều đó',
  body:'Vì không có chất bảo quản, baguette cứng lại sau vài giờ. Người Pháp mua bánh mỗi ngày, có khi hai lần một ngày.',
  extra:'Bánh cứng không bị bỏ đi: nó thành «pain perdu» (bánh mì chiên trứng, chính là French toast) hoặc vụn bánh mì. Nghề làm baguette thủ công đã được UNESCO ghi danh năm 2022.',
  word:{ t:'la boulangerie', r:'bu.lɑ̃.ʒʁi', vi:'tiệm bánh mì' } },

{ lang:'fr', cat:'Ẩm thực', art:'cheese', title:'Pháp có hàng trăm loại phô mai',
  body:'Con số thường được nhắc là «một loại cho mỗi ngày trong năm», nhưng thực tế còn nhiều hơn — tuỳ cách đếm mà từ vài trăm tới hơn một nghìn.',
  extra:'Charles de Gaulle từng than: «Làm sao cai trị nổi một đất nước có hai trăm bốn mươi sáu loại phô mai?» Câu nói này được trích lại với nhiều con số khác nhau, vì bản thân ông cũng nói mỗi lần một số.',
  word:{ t:'le fromage', r:'fʁɔ.maʒ', vi:'phô mai' } },

{ lang:'fr', cat:'Ẩm thực', art:'wine', title:'Rượu vang Pháp được đặt tên theo VÙNG, không theo giống nho',
  body:'Chai ghi «Bourgogne» hay «Bordeaux» chứ không ghi Chardonnay hay Merlot. Rượu Mỹ, Úc, Chile thì ngược lại.',
  extra:'Cách này dựa trên khái niệm «terroir» — đất, khí hậu và tay nghề của một vùng tạo nên hương vị riêng. Muốn biết chai Bourgogne làm từ nho gì thì phải học thuộc, vì nhãn không ghi.',
  word:{ t:'le terroir', r:'tɛ.ʁwaʁ', vi:'thổ nhưỡng vùng trồng' } },

{ lang:'fr', cat:'Ẩm thực', art:'lightbreakfast', title:'Bữa sáng Pháp rất nhẹ và ngọt',
  body:'Một tách cà phê với bánh sừng bò hoặc bánh mì phết bơ mứt. Không có món mặn, không có trứng thịt như bữa sáng Anh.',
  extra:'Bù lại, bữa trưa ở Pháp là bữa chính và có thể kéo dài cả tiếng. Nhiều cửa hàng nhỏ vẫn đóng cửa nghỉ trưa — thói quen đang mất dần ở thành phố lớn nhưng còn nguyên ở tỉnh lẻ.',
  word:{ t:'le petit-déjeuner', r:'pə.ti de.ʒø.ne', vi:'bữa sáng' } },

{ lang:'fr', cat:'Ẩm thực', art:'mealorder', title:'Bữa ăn Pháp có thứ tự cố định, và phô mai đứng trước tráng miệng',
  body:'Khai vị, món chính, rồi phô mai, rồi mới tới đồ ngọt. Đây là trật tự truyền thống, không phải tuỳ hứng.',
  extra:'Salad nếu có thì ăn SAU món chính chứ không phải trước như kiểu Mỹ. Bữa ăn kiểu Pháp đã được UNESCO ghi vào danh sách di sản phi vật thể, và chính cái trật tự này là một phần của hồ sơ.',
  word:{ t:'l’entrée', r:'ɑ̃.tʁe', vi:'món khai vị' } },

{ lang:'fr', cat:'Ẩm thực', art:'baguette', title:'Bánh sừng bò không phải phát minh của người Pháp',
  body:'Croissant có tiền thân là bánh kipferl của Áo. Nó được đưa vào Pháp từ thế kỷ XIX rồi được làm lại bằng bột nghìn lớp.',
  extra:'Chính người Pháp đã biến nó thành thứ như ngày nay: bột gập nhiều lớp với bơ, nở phồng thành tầng. Croissant làm bằng bơ thật có hình thẳng, loại cong là làm bằng bơ thực vật — đó là quy ước ở Pháp.',
  word:{ t:'le croissant', r:'kʁwa.sɑ̃', vi:'bánh sừng bò' } },

{ lang:'fr', cat:'Ẩm thực', art:'mealorder', title:'Người Pháp ăn ốc sên và đùi ếch, nhưng không thường xuyên',
  body:'Escargots và cuisses de grenouille là món truyền thống có thật, nhưng chủ yếu xuất hiện trong dịp lễ hoặc ở nhà hàng, không phải món ăn hằng ngày.',
  extra:'Đùi ếch thì người Việt rất quen. Còn biệt danh «frogs» mà người Anh gán cho người Pháp chính là từ món này — và người Pháp đáp lại bằng biệt danh «rosbifs» (thịt bò nướng) cho người Anh.',
  word:{ t:'les escargots', r:'ɛs.kaʁ.ɡo', vi:'ốc sên' } },

{ lang:'fr', cat:'Ẩm thực', art:'wine', title:'Champagne chỉ được gọi là Champagne nếu làm ở vùng Champagne',
  body:'Rượu vang sủi làm ở nơi khác phải gọi tên khác: crémant ở các vùng khác của Pháp, cava ở Tây Ban Nha, prosecco ở Ý.',
  extra:'Đây là hệ thống chỉ dẫn địa lý được bảo hộ rất chặt. Cùng nguyên tắc đó bảo vệ phô mai Roquefort, Comté và rất nhiều đặc sản vùng miền khác của Pháp.',
  word:{ t:'le champagne', r:'ʃɑ̃.paɲ', vi:'rượu champagne' } },

/* ---------------- Thiên nhiên ---------------- */
{ lang:'fr', cat:'Thiên nhiên', art:'mountain', title:'Mont Blanc là đỉnh cao nhất Tây Âu',
  body:'Cao khoảng 4.808 m, nằm trên biên giới Pháp – Ý. Độ cao chính thức thay đổi vài chục centimet mỗi lần đo lại, vì đỉnh phủ băng tuyết.',
  extra:'Chiều cao được đo lại vài năm một lần và luôn được đưa tin. Chính vì lớp băng ở đỉnh dày mỏng theo năm mà con số không bao giờ cố định.',
  word:{ t:'le sommet', r:'sɔ.mɛ', vi:'đỉnh núi' } },

{ lang:'fr', cat:'Thiên nhiên', art:'river', title:'Loire là con sông dài nhất nước Pháp',
  body:'Dài hơn một nghìn km, chảy từ vùng núi Trung Pháp ra Đại Tây Dương. Đây cũng là con sông hoang sơ nhất châu Âu vì ít bị đắp đập.',
  extra:'Thung lũng Loire nổi tiếng với hàng loạt lâu đài thời Phục hưng và được UNESCO ghi danh. Sông Seine chảy qua Paris thì ngắn hơn nhiều nhưng nổi tiếng hơn.',
  word:{ t:'la Loire', r:'lwaʁ', vi:'sông Loire' } },

{ lang:'fr', cat:'Thiên nhiên', art:'coast', title:'Mont-Saint-Michel thành đảo rồi lại thành đất liền mỗi ngày',
  body:'Vùng vịnh này có biên độ thuỷ triều thuộc loại lớn nhất châu Âu, tới hơn mười mét. Nước lên thì tu viện thành đảo, nước xuống thì lộ bãi cát nối vào bờ.',
  extra:'Bãi cát khi nước rút trông có vẻ đi được nhưng rất nguy hiểm vì có cát lún và vì nước lên rất nhanh. Người xưa nói nước dâng «nhanh như ngựa phi» — có phóng đại, nhưng không nhiều.',
  word:{ t:'la marée', r:'ma.ʁe', vi:'thuỷ triều' } },

{ lang:'fr', cat:'Thiên nhiên', art:'forest', title:'Hang Lascaux có tranh vẽ từ hơn mười bảy nghìn năm trước',
  body:'Bốn thiếu niên tìm ra hang này năm 1940 khi đi tìm con chó lạc. Bên trong là hàng trăm hình vẽ bò, ngựa, hươu.',
  extra:'Hang gốc đã phải đóng cửa với công chúng từ 1963 vì hơi thở du khách làm hỏng tranh. Nay người ta xây bản sao gần như hoàn hảo bên cạnh cho khách tham quan.',
  word:{ t:'la grotte', r:'ɡʁɔt', vi:'hang động' } },

{ lang:'fr', cat:'Thiên nhiên', art:'volcano', title:'Miền trung nước Pháp có cả một dãy núi lửa đã tắt',
  body:'Vùng Auvergne có hàng chục nón núi lửa, trong đó Puy de Dôme là nổi tiếng nhất. Chúng đã ngừng hoạt động từ hàng nghìn năm.',
  extra:'Nhiều thị trấn ở đây xây bằng đá bazan đen nên nhà cửa có màu rất đặc trưng. Nước khoáng Volvic cũng lấy từ tầng nước lọc qua chính lớp đá núi lửa này.',
  word:{ t:'un volcan', r:'vɔl.kɑ̃', vi:'núi lửa' } },

{ lang:'fr', cat:'Thiên nhiên', art:'coast', title:'Pháp có bờ biển trên ba mặt biển khác nhau',
  body:'Biển Manche ở phía bắc, Đại Tây Dương ở phía tây, Địa Trung Hải ở phía nam. Mỗi bờ một kiểu khí hậu và một nền ẩm thực.',
  extra:'Nhờ vị trí này mà Pháp có cả bơ và kem tươi ở miền bắc, lẫn dầu ô liu và thảo mộc ở miền nam. Ranh giới «bơ hay dầu ô liu» chạy ngang nước Pháp và là một đường phân chia văn hoá thật sự.',
  word:{ t:'la Méditerranée', r:'me.di.te.ʁa.ne', vi:'Địa Trung Hải' } },

{ lang:'fr', cat:'Thiên nhiên', art:'snowflake', title:'Gió mistral thổi ở miền nam nước Pháp có thể kéo dài nhiều ngày',
  body:'Đây là luồng gió lạnh mạnh thổi từ thung lũng sông Rhône xuống Địa Trung Hải, có khi liên tục hàng tuần.',
  extra:'Mistral làm trời rất trong, và chính thứ ánh sáng ấy đã hấp dẫn các hoạ sĩ tới Provence. Nhưng nó cũng đủ mạnh để bẻ cây, nên nhà cửa truyền thống ở đây quay lưng về hướng bắc.',
  word:{ t:'le mistral', r:'mis.tʁal', vi:'gió mistral' } },

{ lang:'fr', cat:'Thiên nhiên', art:'forest', title:'Pháp là nước nông nghiệp lớn nhất Liên minh châu Âu',
  body:'Đồng bằng rộng và khí hậu ôn hoà khiến Pháp dẫn đầu EU về sản lượng nông nghiệp, đặc biệt là lúa mì, sữa và rượu vang.',
  extra:'Vì thế nông dân Pháp có tiếng nói chính trị rất mạnh, và các cuộc biểu tình của họ — đôi khi bằng cách lái máy kéo vào trung tâm Paris — là hình ảnh quen thuộc trên truyền hình.',
  word:{ t:'l’agriculture', r:'a.ɡʁi.kyl.tyʁ', vi:'nông nghiệp' } },

/* ---------------- Động vật ---------------- */
{ lang:'fr', cat:'Động vật', art:'rooster', title:'Con gà trống là biểu tượng nước Pháp vì một trò chơi chữ Latinh',
  body:'Trong tiếng Latinh, «gallus» vừa nghĩa là con gà trống vừa nghĩa là người xứ Gaule — tổ tiên của người Pháp.',
  extra:'Từ một sự trùng âm, con gà trống thành biểu tượng quốc gia, xuất hiện trên áo đấu các đội tuyển thể thao Pháp. Đây là một trong số ít biểu tượng quốc gia ra đời từ trò chơi chữ.',
  word:{ t:'le coq', r:'kɔk', vi:'con gà trống' } },

{ lang:'fr', cat:'Động vật', art:'wolf', title:'Sói đã tự quay lại nước Pháp sau bảy mươi năm vắng bóng',
  body:'Sói bị tiêu diệt hoàn toàn ở Pháp vào những năm 1930. Đầu thập niên 1990, chúng tự đi bộ từ Ý sang qua dãy Alps và định cư trở lại.',
  extra:'Sự trở lại này gây xung đột thật giữa bảo tồn và chăn nuôi cừu. Đây là đề tài tranh luận nóng ở các vùng núi Pháp suốt ba mươi năm qua.',
  word:{ t:'le loup', r:'lu', vi:'con sói' } },

{ lang:'fr', cat:'Động vật', art:'bull', title:'Vùng Camargue có bò và ngựa sống bán hoang dã',
  body:'Ở vùng đầm lầy cửa sông Rhône, giống bò đen và ngựa trắng Camargue được chăn thả gần như tự do quanh năm.',
  extra:'Ngựa Camargue sinh ra màu sẫm rồi chuyển dần sang trắng khi lớn. Vùng này cũng là nơi duy nhất ở Pháp có đàn hồng hạc sinh sống tự nhiên.',
  word:{ t:'le taureau', r:'tɔ.ʁo', vi:'con bò đực' } },

{ lang:'fr', cat:'Động vật', art:'forest', title:'Chó được dùng để tìm nấm truffle',
  body:'Trước kia người ta dùng lợn, nhưng lợn hay ăn mất nấm. Chó được huấn luyện thì chỉ đánh hơi và báo, đổi lại lấy phần thưởng khác.',
  extra:'Truffle đen vùng Périgord là một trong những nguyên liệu đắt nhất thế giới. Mùa truffle vào mùa đông, và các chợ truffle ở miền nam nước Pháp họp từ tờ mờ sáng.',
  word:{ t:'la truffe', r:'tʁyf', vi:'nấm truffle' } },

{ lang:'fr', cat:'Động vật', art:'crow', title:'Chim ác là trong tiếng Pháp gắn với thói ăn cắp',
  body:'«Voleur comme une pie» — trộm cắp như con ác là. Dân gian tin nó tha những vật sáng bóng về tổ.',
  extra:'Nghiên cứu gần đây cho thấy chim ác là thật ra khá dè chừng với vật lạ sáng bóng. Nhưng hình ảnh này đã in sâu, tới mức có cả một vở opera tên «Con ác là ăn trộm».',
  word:{ t:'la pie', r:'pi', vi:'chim ác là' } },

{ lang:'fr', cat:'Động vật', art:'coast', title:'Pháp nuôi hàu theo mùa và phân loại rất kỹ',
  body:'Hàu được xếp hạng theo kích cỡ bằng số, số càng nhỏ thì hàu càng to. Vùng nuôi cũng quyết định vị: Marennes, Cancale, Arcachon mỗi nơi một kiểu.',
  extra:'Có câu nói cũ rằng chỉ nên ăn hàu vào những tháng có chữ «r» trong tên — tức là tránh tháng 5 tới tháng 8. Ngày nay kỹ thuật nuôi đã cho phép ăn quanh năm, nhưng thói quen vẫn còn.',
  word:{ t:'les huîtres', r:'ɥitʁ', vi:'con hàu' } },

/* ---------------- Địa lý & đời sống ---------------- */
{ lang:'fr', cat:'Địa lý', art:'train', title:'Tàu TGV của Pháp từng giữ kỷ lục tốc độ thế giới',
  body:'Năm 2007, một đoàn tàu TGV cải tiến đạt hơn 574 km/h trên đường ray thử nghiệm. Tàu chạy thương mại thì khoảng 300 km/h.',
  extra:'Paris đi Marseille hơn 750 km chỉ mất khoảng ba tiếng. Vì thế nhiều tuyến bay nội địa ngắn ở Pháp đã bị huỷ, và luật còn cấm bay nếu có tàu chạy dưới hai tiếng rưỡi.',
  word:{ t:'le TGV', r:'te ʒe ve', vi:'tàu cao tốc Pháp' } },

{ lang:'fr', cat:'Địa lý', art:'metroline', title:'Metro Paris có ga nằm sâu tới bốn tầng dưới mặt đất',
  body:'Mạng metro Paris rất dày: trong nội đô, gần như đứng ở đâu cũng chỉ cách một ga chừng năm trăm mét.',
  extra:'Nhiều ga được thiết kế theo chủ đề: ga Louvre trưng bày bản sao hiện vật bảo tàng, ga Arts et Métiers ốp đồng như trong tàu ngầm Jules Verne. Lối vào kiểu Art Nouveau của Hector Guimard đã thành biểu tượng của Paris.',
  word:{ t:'une station', r:'sta.sjɔ̃', vi:'ga tàu điện ngầm' } },

{ lang:'fr', cat:'Địa lý', art:'apartment', title:'Paris chia thành hai mươi quận xoáy trôn ốc',
  body:'Các quận đánh số từ 1 ở trung tâm rồi xoáy ra ngoài theo chiều kim đồng hồ, giống vỏ ốc sên.',
  extra:'Vì thế nghe số quận là biết ngay vị trí tương đối: quận 1 ở giữa, quận 20 ở rìa đông. Mã bưu chính cũng theo đó: 75001 tới 75020.',
  word:{ t:'un arrondissement', r:'a.ʁɔ̃.dis.mɑ̃', vi:'quận' } },

{ lang:'fr', cat:'Địa lý', art:'coin', title:'Pháp là nước đón nhiều khách du lịch quốc tế nhất thế giới',
  body:'Năm nào Pháp cũng đứng đầu về số lượt khách quốc tế, nhiều hơn cả dân số nước này vài lần.',
  extra:'Một phần lý do là vị trí: rất nhiều người đi từ Bắc Âu xuống Tây Ban Nha hay Ý phải đi qua Pháp và được tính là khách. Nhưng Paris, vùng Provence và các lâu đài Loire cũng tự thân là điểm đến lớn.',
  word:{ t:'le tourisme', r:'tu.ʁism', vi:'du lịch' } },

{ lang:'fr', cat:'Địa lý', art:'library', title:'Pháp trợ giá cho sách bằng một đạo luật riêng',
  body:'Luật quy định giá sách do nhà xuất bản đặt, mọi hiệu sách đều bán cùng giá, giảm tối đa chỉ 5%. Mục đích là để hiệu sách nhỏ không bị chuỗi lớn bóp chết.',
  extra:'Nhờ vậy nước Pháp vẫn còn rất nhiều hiệu sách độc lập, điều hiếm thấy ở các nước khác. Luật này thường được gọi theo tên vị bộ trưởng đã đưa nó ra năm 1981.',
  word:{ t:'une librairie', r:'li.bʁɛ.ʁi', vi:'hiệu sách' } },

{ lang:'fr', cat:'Địa lý', art:'zincroof', title:'Nhà Pháp có mái kẽm xám đặc trưng ở Paris',
  body:'Mái kẽm màu xám xanh của các toà nhà Haussmann là một phần bản sắc của Paris, và nghề thợ mái kẽm Paris đã được UNESCO ghi danh.',
  extra:'Toàn bộ trung tâm Paris được quy hoạch lại vào thế kỷ XIX dưới thời nam tước Haussmann, với chiều cao và kiểu mặt tiền thống nhất. Đó là lý do phố Paris nhìn đồng đều đến vậy.',
  word:{ t:'le zinc', r:'zɛ̃ɡ', vi:'kẽm; mái kẽm' } },

{ lang:'fr', cat:'Địa lý', art:'saintcal', title:'Pháp nghỉ trưa dài và nghỉ hè cả tháng Tám',
  body:'Tháng Tám là tháng nghỉ lớn: nhiều cửa hàng nhỏ, tiệm bánh và cả phòng khám đóng cửa vài tuần liền.',
  extra:'Ở Paris tháng Tám, thành phố vắng hẳn người bản địa mà đầy du khách. Với người mới sang, đây là cú sốc thật: cần mua gì cũng phải đi xa hơn vì tiệm quen đóng cửa.',
  word:{ t:'les vacances', r:'va.kɑ̃s', vi:'kỳ nghỉ' } },

{ lang:'fr', cat:'Địa lý', art:'oldscreen', title:'Pháp từng có một mạng trực tuyến riêng trước cả internet',
  body:'Minitel là thiết bị đầu cuối phát miễn phí cho hộ gia đình từ đầu những năm 1980, cho phép tra danh bạ, đặt vé tàu, mua sắm và nhắn tin.',
  extra:'Nó phổ biến tới mức làm Pháp chậm chân trong việc chuyển sang internet. Minitel chỉ ngừng hẳn vào năm 2012 — nghĩa là nó sống song song với web suốt gần hai mươi năm.',
  word:{ t:'le Minitel', r:'mi.ni.tɛl', vi:'máy Minitel' } },

/* ---------------- Văn hoá & thói quen ---------------- */
{ lang:'fr', cat:'Thói quen', art:'kissgreet', title:'Người Pháp chào nhau bằng cách hôn má, và số lần tuỳ vùng',
  body:'«La bise» là chạm má và tạo tiếng hôn. Paris thường hai lần, một số vùng ba, có nơi bốn. Không phải hôn thật lên má.',
  extra:'Bắt đầu từ bên má nào cũng tuỳ vùng, nên người từ hai vùng khác nhau gặp nhau có thể va đầu. Với người lạ hoặc trong công việc thì bắt tay, không bise.',
  word:{ t:'la bise', r:'biz', vi:'nụ hôn má chào hỏi' } },

{ lang:'fr', cat:'Thói quen', art:'tuvous', title:'Nói «bonjour» trước khi hỏi bất cứ điều gì là bắt buộc',
  body:'Vào cửa hàng, lên taxi, hỏi đường — đều phải chào trước rồi mới nói việc. Bỏ qua bước này bị coi là rất bất lịch sự.',
  extra:'Đây là nguồn hiểu lầm lớn nhất về «người Pháp lạnh lùng». Du khách vào hỏi thẳng bằng tiếng Anh mà quên chào thì bị đáp lại lạnh nhạt, rồi kết luận người Pháp khó tính.',
  word:{ t:'la politesse', r:'pɔ.li.tɛs', vi:'phép lịch sự' } },

{ lang:'fr', cat:'Thói quen', art:'terrace', title:'Ngồi quán cà phê ở Pháp có thể ngồi rất lâu với một ly',
  body:'Gọi một ly cà phê rồi ngồi đọc sách hay ngắm phố hàng giờ là chuyện bình thường. Không ai giục.',
  extra:'Giá cà phê khác nhau tuỳ chỗ ngồi: đứng ở quầy rẻ nhất, ngồi trong nhà đắt hơn, ngồi ngoài terrasse đắt nhất. Bảng giá theo luật phải niêm yết cả ba mức.',
  word:{ t:'la terrasse', r:'te.ʁas', vi:'chỗ ngồi ngoài trời' } },

{ lang:'fr', cat:'Thói quen', art:'calligraphy', title:'Học sinh Pháp viết bằng bút máy từ tiểu học',
  body:'Bút máy và mực tím vẫn là chuẩn ở trường tiểu học Pháp. Kèm theo đó là bút xoá mực — một vật dụng đặc trưng của học trò Pháp.',
  extra:'Chữ viết tay được dạy rất kỹ theo một kiểu chữ nghiêng thống nhất. Người Pháp lớn lên viết chữ khá giống nhau, khác hẳn sự đa dạng trong chữ viết tay của người Mỹ.',
  word:{ t:'le stylo-plume', r:'sti.lo plym', vi:'bút máy' } },

{ lang:'fr', cat:'Thói quen', art:'library', title:'Học sinh Pháp chấm điểm trên thang 20',
  body:'Điểm 10 là đạt, 20 là tuyệt đối. Nhưng 20 gần như không bao giờ được cho, và điểm 14–16 đã được coi là rất tốt.',
  extra:'Có câu đùa rằng 20 dành cho Chúa, 19 cho thầy giáo, còn học trò giỏi nhất chỉ tới 18. Người Việt quen thang 10 nên hay hiểu nhầm rằng điểm 12/20 là kém, trong khi nó là mức đạt bình thường.',
  word:{ t:'une note', r:'nɔt', vi:'điểm số' } },

{ lang:'fr', cat:'Thói quen', art:'coin', title:'Người Pháp hay đình công, và điều đó được coi là quyền',
  body:'Quyền đình công được ghi trong hiến pháp. Đình công của ngành giao thông, giáo dục hay y tế là chuyện diễn ra đều đặn.',
  extra:'Trước khi đi Pháp nên kiểm tra tin tức về «grève» — một cuộc đình công tàu điện có thể làm hỏng cả lịch trình. Người Pháp coi đây là cách thương lượng bình thường chứ không phải sự cố.',
  word:{ t:'la grève', r:'ɡʁɛv', vi:'cuộc đình công' } },

{ lang:'fr', cat:'Lễ hội', art:'flag', title:'Ngày Quốc khánh Pháp không được người Pháp gọi là Bastille Day',
  body:'Người Pháp gọi đơn giản là «le 14 juillet» — ngày mười bốn tháng Bảy. Tên «Bastille Day» chủ yếu là cách gọi của người nói tiếng Anh.',
  extra:'Ngày này kỷ niệm sự kiện phá ngục Bastille năm 1789, nhưng luật lập quốc khánh năm 1880 lại cố tình nói mập mờ để cũng có thể hiểu là kỷ niệm Lễ Liên minh năm 1790 — một sự kiện ôn hoà hơn.',
  word:{ t:'le 14 juillet', r:'la.tɔʁz ʒɥi.jɛ', vi:'Quốc khánh Pháp' } },

{ lang:'fr', cat:'Lễ hội', art:'guitar', title:'Pháp có ngày hội âm nhạc mà ai cũng được chơi nhạc ngoài phố',
  body:'Ngày 21 tháng 6, «Fête de la Musique» cho phép mọi người biểu diễn tự do ngoài đường, miễn phí, không cần giấy phép.',
  extra:'Bắt đầu ở Pháp năm 1982, ngày hội này nay đã lan ra hàng trăm thành phố trên thế giới. Nó rơi đúng vào ngày hạ chí, ngày dài nhất trong năm.',
  word:{ t:'la fête de la musique', r:'fɛt də la my.zik', vi:'ngày hội âm nhạc' } },

/* ---------------- Lịch sử ---------------- */
{ lang:'fr', cat:'Lịch sử', art:'crown', title:'Cách mạng Pháp từng đặt ra cả một hệ lịch mới',
  body:'Lịch cộng hoà chia năm thành 12 tháng, mỗi tháng 30 ngày, mỗi tuần 10 ngày. Tên tháng đặt theo thiên nhiên: Brumaire (sương mù), Thermidor (nóng).',
  extra:'Nó tồn tại khoảng mười hai năm rồi bị bỏ. Lý do thực tế: tuần mười ngày nghĩa là chỉ nghỉ một ngày trong mười, thay vì một trong bảy — người lao động phản đối mạnh.',
  word:{ t:'la Révolution', r:'ʁe.vɔ.ly.sjɔ̃', vi:'Cách mạng' } },

{ lang:'fr', cat:'Lịch sử', art:'scales', title:'Hệ mét là sáng chế của Cách mạng Pháp',
  body:'Mét được định nghĩa là một phần mười triệu khoảng cách từ xích đạo tới cực Bắc, đo qua kinh tuyến Paris. Kilogram, lít cũng ra đời cùng lúc.',
  extra:'Mục đích là thay thế hàng trăm đơn vị đo khác nhau giữa các vùng. Ngày nay gần như cả thế giới dùng hệ mét — trừ vài nước, trong đó nổi bật nhất là Hoa Kỳ.',
  word:{ t:'le mètre', r:'mɛtʁ', vi:'mét' } },

{ lang:'fr', cat:'Lịch sử', art:'stamp', title:'Phiến đá Rosetta mở khoá được chữ Ai Cập cổ',
  body:'Quân Pháp tìm ra phiến đá này ở Ai Cập năm 1799. Nó ghi cùng một nội dung bằng ba hệ chữ, cho phép Champollion giải mã chữ tượng hình.',
  extra:'Bản thân phiến đá hiện nằm ở Bảo tàng Anh, vì Pháp phải nhượng lại cho Anh sau thất bại quân sự. Nhưng người giải mã được nó lại là một người Pháp.',
  word:{ t:'les hiéroglyphes', r:'je.ʁɔ.ɡlif', vi:'chữ tượng hình' } },

{ lang:'fr', cat:'Lịch sử', art:'monument', title:'Tượng Nữ thần Tự do do người Pháp làm và tặng nước Mỹ',
  body:'Bartholdi thiết kế phần tượng, còn Gustave Eiffel làm khung thép bên trong. Tượng được tháo rời, chở qua Đại Tây Dương rồi lắp lại ở New York năm 1886.',
  extra:'Ở Paris còn vài bản sao nhỏ hơn, trong đó một bản đứng trên đảo giữa sông Seine và quay mặt về hướng tây — nhìn về phía «chị em» của mình ở New York.',
  word:{ t:'la statue', r:'sta.ty', vi:'bức tượng' } },

{ lang:'fr', cat:'Lịch sử', art:'monument', title:'Tháp Eiffel ban đầu chỉ định dựng tạm hai mươi năm',
  body:'Nó được xây cho Triển lãm Thế giới năm 1889 và dự kiến tháo dỡ sau đó. Nhiều nghệ sĩ Paris ký kiến nghị phản đối, gọi nó là «cây đèn đường xấu xí».',
  extra:'Thứ cứu tháp Eiffel là ăng-ten vô tuyến đặt trên đỉnh, khiến nó trở nên hữu ích về quân sự và truyền thông. Nhờ đó nó được giữ lại, rồi thành biểu tượng của cả nước Pháp.',
  word:{ t:'la tour Eiffel', r:'tuʁ ɛ.fɛl', vi:'tháp Eiffel' } },

{ lang:'fr', cat:'Lịch sử', art:'library', title:'Anh em nhà Lumière chiếu bộ phim đầu tiên cho công chúng',
  body:'Tháng 12 năm 1895, buổi chiếu thu tiền đầu tiên diễn ra tại Paris. Điện ảnh ra đời từ đó, và chữ «cinéma» cũng là tiếng Pháp.',
  extra:'Chính anh em Lumière lại cho rằng phát minh của mình «không có tương lai thương mại». Họ nghĩ nó chỉ là một trò tò mò khoa học.',
  word:{ t:'le cinéma', r:'si.ne.ma', vi:'điện ảnh' } },

{ lang:'fr', cat:'Lịch sử', art:'braille', title:'Louis Braille phát minh chữ nổi khi mới mười lăm tuổi',
  body:'Ông bị mù từ nhỏ sau một tai nạn. Dựa trên một hệ mã quân sự đọc bằng tay, ông rút gọn thành hệ sáu chấm mà ngày nay cả thế giới dùng.',
  extra:'Hệ Braille được đặt theo tên ông và đã được chuyển thể cho hàng trăm ngôn ngữ, kể cả tiếng Việt, tiếng Trung và tiếng Ả Rập. Nó là một trong những phát minh Pháp có ảnh hưởng rộng nhất.',
  word:{ t:'le braille', r:'bʁaj', vi:'chữ nổi Braille' } },

{ lang:'fr', cat:'Lịch sử', art:'coin', title:'Napoléon để lại một bộ luật vẫn còn ảnh hưởng tới hôm nay',
  body:'Bộ luật Dân sự năm 1804 hệ thống hoá luật tư thành văn bản rõ ràng, dễ tra cứu. Nó được mang theo tới mọi nơi quân Pháp đi qua.',
  extra:'Rất nhiều nước xây bộ luật dân sự của mình theo mô hình này, từ châu Âu tới Nam Mỹ và cả Nhật Bản. Việt Nam, qua ảnh hưởng của luật Pháp thời thuộc địa, cũng mang dấu vết của truyền thống ấy.',
  word:{ t:'le Code civil', r:'kɔd si.vil', vi:'Bộ luật Dân sự' } },

/* ---------------- Văn hoá ---------------- */
{ lang:'fr', cat:'Văn hoá', art:'library', title:'Bảo tàng Louvre lớn tới mức đi hết phải mất nhiều ngày',
  body:'Với hàng chục nghìn hiện vật trưng bày trên nhiều cây số hành lang, không ai xem hết Louvre trong một lần.',
  extra:'Toà nhà vốn là cung điện hoàng gia, chỉ thành bảo tàng công cộng sau Cách mạng. Kim tự tháp kính ở sân trong do kiến trúc sư người Mỹ gốc Hoa I. M. Pei thiết kế, và lúc mới xây bị chê dữ dội.',
  word:{ t:'le musée', r:'my.ze', vi:'bảo tàng' } },

{ lang:'fr', cat:'Văn hoá', art:'book', title:'Nước Pháp có giải thưởng văn học trao kèm mười euro',
  body:'Giải Goncourt, danh giá nhất nước Pháp, có tiền thưởng chỉ mang tính tượng trưng. Giá trị thật nằm ở doanh số bán sách sau đó.',
  extra:'Một cuốn đoạt Goncourt thường bán thêm vài trăm nghìn bản. Vì thế giải này được coi là có sức nặng kinh tế lớn nhất trong ngành xuất bản Pháp, dù tiền thưởng gần như bằng không.',
  word:{ t:'le prix littéraire', r:'pʁi li.te.ʁɛʁ', vi:'giải thưởng văn học' } },

{ lang:'fr', cat:'Văn hoá', art:'calligraphy', title:'Truyện tranh ở Pháp được gọi là «nghệ thuật thứ chín»',
  body:'Bande dessinée được coi trọng ngang các loại hình nghệ thuật khác, có bảo tàng riêng và liên hoan quốc gia ở Angoulême.',
  extra:'Pháp và Bỉ là cái nôi của Tintin, Astérix, Lucky Luke. Khác Nhật Bản nơi manga in đen trắng khổ nhỏ, truyện tranh Pháp thường in màu, khổ lớn, bìa cứng.',
  word:{ t:'la bande dessinée', r:'bɑ̃d de.si.ne', vi:'truyện tranh' } },

{ lang:'fr', cat:'Văn hoá', art:'monument', title:'Nhà thờ Đức Bà Paris mất gần hai trăm năm để xây',
  body:'Khởi công năm 1163 và hoàn thành về cơ bản vào giữa thế kỷ XIV. Nhiều thế hệ thợ đã sống và chết trong lúc công trình còn dang dở.',
  extra:'Cuốn tiểu thuyết của Victor Hugo năm 1831 đã cứu nhà thờ khỏi bị phá bỏ, khi đó nó đang xuống cấp nặng. Sách làm dấy lên phong trào đòi trùng tu, và công trình được cứu.',
  word:{ t:'la cathédrale', r:'ka.te.dʁal', vi:'nhà thờ lớn' } },

{ lang:'fr', cat:'Văn hoá', art:'loanword', title:'Thuật ngữ ballet trên toàn thế giới đều bằng tiếng Pháp',
  body:'Plié, jeté, arabesque, pirouette — mọi động tác đều mang tên tiếng Pháp, dù lớp học diễn ra ở Nga, Nhật hay Mỹ.',
  extra:'Lý do là Học viện Múa Hoàng gia do vua Louis XIV lập năm 1661 đã chuẩn hoá và đặt tên cho các động tác. Chính nhà vua cũng là một vũ công, và biệt danh «Vua Mặt Trời» đến từ một vai diễn của ông.',
  word:{ t:'la danse', r:'dɑ̃s', vi:'múa, khiêu vũ' } },

{ lang:'fr', cat:'Văn hoá', art:'mealorder', title:'Pháp có hệ thống xếp hạng nhà hàng ra đời từ một hãng lốp xe',
  body:'Cẩm nang Michelin ban đầu là sách phát miễn phí cho tài xế, nhằm khuyến khích họ lái xe nhiều hơn — và mòn lốp nhiều hơn.',
  extra:'Hệ sao chỉ được đưa vào từ những năm 1920–30. Một nhà hàng ba sao nghĩa là «đáng để đi một chuyến riêng» — đúng tinh thần ban đầu của cuốn sách hướng dẫn lái xe.',
  word:{ t:'une étoile', r:'e.twal', vi:'ngôi sao' } },

{ lang:'fr', cat:'Văn hoá', art:'terrace', title:'Quán cà phê Paris từng là nơi triết học ra đời',
  body:'Café de Flore và Les Deux Magots ở khu Saint-Germain là nơi Sartre, Beauvoir và nhiều nhà văn ngồi viết hằng ngày.',
  extra:'Họ ngồi quán vì căn hộ thời đó thiếu than sưởi, mà quán thì ấm. Nên phong trào triết học hiện sinh một phần ra đời vì lý do rất thực tế: tìm chỗ ấm để ngồi viết.',
  word:{ t:'la philosophie', r:'fi.lɔ.zɔ.fi', vi:'triết học' } },

{ lang:'fr', cat:'Văn hoá', art:'space', title:'Pháp có sân bay vũ trụ nằm ở Nam Mỹ',
  body:'Trung tâm phóng Kourou đặt tại Guyane thuộc Pháp, gần xích đạo. Vị trí này giúp tên lửa tận dụng vận tốc quay của Trái Đất.',
  extra:'Phóng từ gần xích đạo tiết kiệm nhiên liệu đáng kể so với phóng từ vĩ độ cao. Đây là sân bay vũ trụ chính của châu Âu, và các vệ tinh châu Âu phần lớn bay lên từ đó.',
  word:{ t:'une fusée', r:'fy.ze', vi:'tên lửa' } },

{ lang:'fr', cat:'Văn hoá', art:'nametag', title:'Pháp có tổ chức riêng để bảo vệ tiếng Pháp trên thế giới',
  body:'Cộng đồng Pháp ngữ gồm hàng chục quốc gia và vùng lãnh thổ dùng tiếng Pháp, từ châu Phi tới Canada và Đông Nam Á.',
  extra:'Việt Nam là thành viên của tổ chức này. Số người nói tiếng Pháp ở châu Phi hiện đã vượt xa số người nói ở Pháp, và dự báo sẽ còn tăng mạnh.',
  word:{ t:'la francophonie', r:'fʁɑ̃.kɔ.fɔ.ni', vi:'cộng đồng Pháp ngữ' } },

{ lang:'fr', cat:'Văn hoá', art:'map', title:'Tiếng Pháp là ngôn ngữ chính thức của Thế vận hội',
  body:'Cùng với tiếng Anh, tiếng Pháp được xướng trong mọi buổi lễ Olympic. Khi hai bản khác nhau, bản tiếng Pháp được coi là chuẩn.',
  extra:'Lý do là người sáng lập Thế vận hội hiện đại, nam tước Pierre de Coubertin, là người Pháp. Đây là một trong những vị trí ưu tiên cuối cùng còn lại của tiếng Pháp trong các thiết chế quốc tế.',
  word:{ t:'les Jeux olympiques', r:'ʒø ɔ.lɛ̃.pik', vi:'Thế vận hội' } },

{ lang:'fr', cat:'Văn hoá', art:'monument', title:'Pháp có hơn bốn mươi nghìn công trình được xếp hạng di tích',
  body:'Từ lâu đài, nhà thờ tới cầu cống và cả một số nhà máy cũ. Chủ sở hữu công trình xếp hạng được hỗ trợ tài chính nhưng phải tuân thủ quy định trùng tu nghiêm ngặt.',
  extra:'Mỗi năm vào tháng 9 có «Ngày Di sản châu Âu», khi nhiều công trình thường đóng — kể cả dinh tổng thống — mở cửa miễn phí cho dân vào xem.',
  word:{ t:'le patrimoine', r:'pa.tʁi.mwan', vi:'di sản' } },

{ lang:'fr', cat:'Văn hoá', art:'wine', title:'Nghề bếp Pháp tổ chức theo hệ thống cấp bậc như quân đội',
  body:'«Brigade de cuisine» do Escoffier chuẩn hoá: chef de cuisine, sous-chef, chef de partie, commis. Mỗi vị trí một nhiệm vụ rõ ràng.',
  extra:'Escoffier từng phục vụ trong quân đội và mang tư duy tổ chức đó vào bếp. Hệ thống này lan ra toàn thế giới, nên bếp nhà hàng ở Hà Nội hay New York vẫn dùng đúng các chức danh tiếng Pháp.',
  word:{ t:'le chef', r:'ʃɛf', vi:'bếp trưởng' } },

/* ---------------- Thói quen & con người ---------------- */
{ lang:'fr', cat:'Thói quen', art:'baguette', title:'Người Pháp bẻ bánh mì chứ không cắt trên bàn ăn',
  body:'Bánh mì được đặt thẳng lên khăn trải bàn chứ không để trên đĩa, và người ta bẻ từng miếng bằng tay.',
  extra:'Bánh mì cũng dùng để «vét» sốt còn lại trên đĩa — hành vi này ở Pháp là lời khen món ăn, không phải bất lịch sự. Nhưng vét bằng tay thì được, còn dùng dĩa thì tuỳ mức trang trọng.',
  word:{ t:'le pain', r:'pɛ̃', vi:'bánh mì' } },

{ lang:'fr', cat:'Thói quen', art:'mealorder', title:'Người Pháp để hai tay trên bàn khi ăn',
  body:'Khác phép lịch sự Anh Mỹ vốn yêu cầu để tay không dùng xuống đùi, người Pháp giữ cả hai cổ tay trên mặt bàn.',
  extra:'Gốc gác được cho là từ thời trung cổ, khi giấu tay dưới bàn bị nghi là đang thủ vũ khí. Dù vậy chống cả khuỷu tay lên bàn thì vẫn bị coi là thiếu lễ độ.',
  word:{ t:'la table', r:'tabl', vi:'cái bàn' } },

{ lang:'fr', cat:'Thói quen', art:'coin', title:'Ở Pháp, tiền boa không bắt buộc vì đã tính vào hoá đơn',
  body:'Luật quy định giá niêm yết đã bao gồm phục vụ. Để lại vài euro lẻ là thể hiện hài lòng, chứ không phải nghĩa vụ.',
  extra:'Đây là khác biệt lớn với Mỹ, nơi không tip là thực sự cắt thu nhập của người phục vụ. Du khách Mỹ ở Pháp thường tip quá tay vì quen ở nhà.',
  word:{ t:'le pourboire', r:'puʁ.bwaʁ', vi:'tiền boa' } },

{ lang:'fr', cat:'Thói quen', art:'apartment', title:'Nhiều toà nhà Pháp có mã cửa thay vì chuông',
  body:'Cửa ngoài chung cư thường mở bằng mã số bấm trên bàn phím. Khách tới chơi phải được chủ nhà báo mã trước.',
  extra:'Hệ thống này gọi là «digicode», và đổi mã định kỳ. Người mới sang Pháp hay đứng ngoài cửa chờ mãi vì không biết phải có mã mới vào được.',
  word:{ t:'le digicode', r:'di.ʒi.kɔd', vi:'khoá mã số cửa' } },

{ lang:'fr', cat:'Thói quen', art:'terrace', title:'Người Pháp hay hỏi «ça va ?» nhưng không mong câu trả lời dài',
  body:'Giống «how are you» trong tiếng Anh, đây là câu chào chứ không phải câu hỏi thật. Đáp lại bằng «ça va, et toi ?» là đủ.',
  extra:'Khác với người Nga vốn trả lời thật và kể hết mọi chuyện, người Pháp giữ câu này ở mức xã giao. Kể lể chi tiết với người mới quen sẽ khiến không khí hơi ngượng.',
  word:{ t:'ça va', r:'sa va', vi:'khoẻ chứ, ổn cả' } },

{ lang:'fr', cat:'Con người', art:'family', title:'Pháp có tỷ lệ sinh cao vào loại nhất châu Âu',
  body:'Nhờ hệ thống trợ cấp gia đình, nhà trẻ công và chế độ nghỉ sinh, Pháp duy trì mức sinh cao hơn hầu hết các nước châu Âu khác.',
  extra:'Trẻ em Pháp được gửi nhà trẻ công từ rất sớm với chi phí tính theo thu nhập gia đình. Chính sách này được xây dựng từ sau Thế chiến và gần như không đảng phái nào đụng tới.',
  word:{ t:'la natalité', r:'na.ta.li.te', vi:'tỷ lệ sinh' } },

{ lang:'fr', cat:'Con người', art:'library', title:'Học sinh Pháp học triết học ở năm cuối phổ thông',
  body:'Triết học là môn bắt buộc lớp cuối cấp ba, với bài thi tốt nghiệp là một bài luận dài bốn tiếng.',
  extra:'Đề thi triết mỗi năm được báo chí đăng lại và cả nước bàn luận. Những đề như «Có thể nào thoát khỏi thời gian?» trở thành chủ đề trò chuyện trên bàn ăn suốt mấy ngày.',
  word:{ t:'le baccalauréat', r:'ba.ka.lɔ.ʁe.a', vi:'kỳ thi tú tài' } },

{ lang:'fr', cat:'Con người', art:'coin', title:'Pháp có hệ thống y tế hoàn trả phần lớn chi phí',
  body:'Bảo hiểm y tế bắt buộc chi trả một tỷ lệ lớn tiền khám chữa bệnh, phần còn lại thường do bảo hiểm bổ sung lo.',
  extra:'Người bệnh xuất trình thẻ «carte Vitale», tiền được hoàn tự động về tài khoản. Hệ thống này thường được xếp hạng rất cao trên thế giới, nhưng cũng đang chịu áp lực về ngân sách và thiếu bác sĩ ở vùng nông thôn.',
  word:{ t:'la sécurité sociale', r:'se.ky.ʁi.te sɔ.sjal', vi:'bảo hiểm xã hội' } },

{ lang:'fr', cat:'Con người', art:'podium', title:'Người Pháp biểu tình như một truyền thống chính trị',
  body:'Xuống đường là cách bày tỏ quan điểm được chấp nhận rộng rãi, có từ thời Cách mạng và được thực hành đều đặn tới nay.',
  extra:'Các cuộc tuần hành lớn thường được thông báo trước, có lộ trình đăng ký và được cảnh sát hộ tống. Người nước ngoài hay bất ngờ vì mức độ bình thường hoá của chuyện này trong đời sống Pháp.',
  word:{ t:'une manifestation', r:'ma.ni.fɛs.ta.sjɔ̃', vi:'cuộc biểu tình' } },

{ lang:'fr', cat:'Con người', art:'apartment', title:'Người Pháp mua hàng ở chợ phiên hằng tuần',
  body:'Gần như mọi thị trấn đều có chợ ngoài trời vào một hoặc hai ngày cố định trong tuần, bán rau quả, phô mai, thịt cá từ vùng lân cận.',
  extra:'Đây không phải hoài niệm mà là thói quen sống thật: chợ phiên cạnh tranh được với siêu thị nhờ đồ tươi và quan hệ quen biết với người bán. Người Việt sẽ thấy rất gần với chợ quê ở nhà.',
  word:{ t:'le marché', r:'maʁ.ʃe', vi:'chợ' } },

{ lang:'fr', cat:'Con người', art:'train', title:'Người Pháp nghỉ phép theo đợt và cả nước di chuyển cùng lúc',
  body:'Kỳ nghỉ học được chia theo ba vùng lệch nhau để giảm ùn tắc, nhưng tháng Tám thì cả nước gần như nghỉ cùng lúc.',
  extra:'Những ngày cao điểm được dự báo trước bằng màu: đỏ và đen là ngày nên tránh đi đường. Bản tin giao thông những ngày đó dài không kém bản tin thời tiết.',
  word:{ t:'le départ en vacances', r:'de.paʁ ɑ̃ va.kɑ̃s', vi:'kỳ đi nghỉ' } },

{ lang:'fr', cat:'Con người', art:'book', title:'Người Pháp tranh luận như một môn thể thao',
  body:'Phản bác trực diện trong bữa ăn hay lớp học không bị coi là mất lịch sự, mà là dấu hiệu bạn đang tham gia nghiêm túc.',
  extra:'Nhà trường Pháp dạy cấu trúc lập luận rất sớm: luận đề, phản đề, tổng hợp. Người Việt quen tránh đối đầu trực diện nên có thể thấy phong cách này hơi gay gắt lúc đầu.',
  word:{ t:'le débat', r:'de.ba', vi:'cuộc tranh luận' } },

/* ---------------- Lễ hội ---------------- */
{ lang:'fr', cat:'Lễ hội', art:'lightbreakfast', title:'Người Pháp ăn bánh vua vào tháng Giêng và giấu một hạt đậu trong đó',
  body:'Bánh galette des rois có một tượng nhỏ giấu bên trong. Ai ăn trúng thì được đội vương miện giấy và làm «vua» trong ngày.',
  extra:'Theo lệ, người trẻ nhất chui xuống gầm bàn và chỉ định xem miếng bánh nào cho ai, để đảm bảo không ai gian lận. Tục này gắn với ngày lễ Hiển linh đầu tháng Giêng.',
  word:{ t:'la galette des rois', r:'ɡa.lɛt de ʁwa', vi:'bánh vua' } },

{ lang:'fr', cat:'Lễ hội', art:'fish', title:'Ngày Cá tháng Tư ở Pháp gọi là «con cá tháng Tư»',
  body:'Trẻ con dán hình con cá giấy lên lưng người khác rồi hô «poisson d’avril !» khi bị phát hiện.',
  extra:'Một giả thuyết phổ biến gắn tục này với việc đổi ngày đầu năm từ cuối tháng Ba sang mùng 1 tháng Giêng vào thế kỷ XVI — ai còn ăn Tết theo lịch cũ thì bị trêu. Giả thuyết này chưa được chứng minh chắc chắn.',
  word:{ t:'le poisson d’avril', r:'pwa.sɔ̃ da.vʁil', vi:'cá tháng Tư' } },

{ lang:'fr', cat:'Lễ hội', art:'crepe', title:'Ngày Chandeleur là ngày ăn bánh crêpe',
  body:'Ngày 2 tháng 2, cả nước làm bánh crêpe. Có tục cầm đồng xu trong tay trái và lật bánh bằng tay phải để cầu may cả năm.',
  extra:'Hình tròn vàng của bánh crêpe được cho là tượng trưng cho mặt trời và sự trở lại của ánh sáng sau mùa đông. Nhiều nền văn hoá có lễ tương tự vào thời điểm này trong năm.',
  word:{ t:'la crêpe', r:'kʁɛp', vi:'bánh crêpe' } },

{ lang:'fr', cat:'Lễ hội', art:'ring', title:'Đám cưới Pháp bắt buộc phải làm ở toà thị chính',
  body:'Chỉ hôn lễ dân sự tại toà thị chính mới có giá trị pháp lý. Lễ nhà thờ nếu có thì phải diễn ra sau, và chỉ mang ý nghĩa tôn giáo.',
  extra:'Thị trưởng hoặc người được uỷ quyền chủ trì, đeo dải băng ba màu. Đây là hệ quả trực tiếp của nguyên tắc tách tôn giáo khỏi nhà nước.',
  word:{ t:'la mairie', r:'mɛ.ʁi', vi:'toà thị chính' } },

{ lang:'fr', cat:'Lễ hội', art:'wine', title:'Rượu vang mới Beaujolais được mở cùng lúc trên toàn thế giới',
  body:'Đúng 0 giờ ngày thứ Năm thứ ba của tháng 11, rượu Beaujolais nouveau của vụ năm đó mới được phép bán ra.',
  extra:'Đây vốn là rượu uống ngay, không để lâu. Việc đồng loạt mở bán tạo thành một sự kiện được tổ chức ở nhiều nước, trong đó Nhật Bản là thị trường nhập khẩu rất lớn.',
  word:{ t:'le beaujolais nouveau', r:'bo.ʒɔ.lɛ nu.vo', vi:'rượu Beaujolais mới' } },

{ lang:'fr', cat:'Lễ hội', art:'flag', title:'Diễu binh Quốc khánh Pháp đi trên đại lộ Champs-Élysées',
  body:'Cuộc duyệt binh ngày 14 tháng 7 là một trong những cuộc duyệt binh thường niên lâu đời nhất châu Âu, với máy bay bay qua nhả khói ba màu.',
  extra:'Buổi tối, pháo hoa được bắn từ tháp Eiffel. Ở các thị trấn nhỏ thì có «bal des pompiers» — vũ hội do lính cứu hoả tổ chức ngay tại trạm cứu hoả.',
  word:{ t:'le défilé', r:'de.fi.le', vi:'cuộc diễu hành' } },

/* ---------------- Ẩm thực (tiếp) ---------------- */
{ lang:'fr', cat:'Ẩm thực', art:'wine', title:'Món hầm bò bourguignon vốn là món nhà nghèo',
  body:'Thịt bò phần dai được hầm rất lâu trong rượu vang đỏ cho mềm. Đây là cách tận dụng phần thịt rẻ, không phải món sang trọng.',
  extra:'Rất nhiều món Pháp nổi tiếng có gốc bình dân: cassoulet, pot-au-feu, ratatouille. Chính các đầu bếp thế kỷ XX đã nâng chúng lên hàng ẩm thực cao cấp.',
  word:{ t:'le bœuf bourguignon', r:'bœf buʁ.ɡi.ɲɔ̃', vi:'bò hầm rượu vang' } },

{ lang:'fr', cat:'Ẩm thực', art:'cheese', title:'Phô mai Roquefort chỉ được ủ trong đúng một hệ hang đá',
  body:'Theo quy định bảo hộ, Roquefort phải ủ trong các hang tự nhiên ở làng Roquefort-sur-Soulzon, nơi có dòng khí đặc biệt qua các khe đá.',
  extra:'Chính những khe nứt đó duy trì nhiệt độ và độ ẩm ổn định quanh năm, và mang theo loại nấm mốc tạo nên vân xanh của phô mai. Không tái tạo được ở nơi khác.',
  word:{ t:'le roquefort', r:'ʁɔk.fɔʁ', vi:'phô mai Roquefort' } },

{ lang:'fr', cat:'Ẩm thực', art:'baguette', title:'Macaron và macaroon là hai thứ khác nhau',
  body:'Macaron Pháp là hai vỏ bột hạnh nhân kẹp nhân kem, nhiều màu. Macaroon kiểu Anh Mỹ là bánh dừa xù xì.',
  extra:'Macaron kiểu hai vỏ kẹp nhân như ngày nay được cho là do hiệu bánh Ladurée ở Paris hoàn thiện vào đầu thế kỷ XX. Làm được vỏ bánh có chân nhẵn và mặt bóng là thước đo tay nghề thợ bánh.',
  word:{ t:'le macaron', r:'ma.ka.ʁɔ̃', vi:'bánh macaron' } },

{ lang:'fr', cat:'Ẩm thực', art:'coffee', title:'Người Pháp uống cà phê rất đặc và rất nhỏ',
  body:'Gọi «un café» ở Pháp là ra một tách espresso nhỏ. Muốn loại loãng hơn phải nói rõ «un allongé» hoặc «un café crème».',
  extra:'Cà phê sữa lớn kiểu sáng chỉ uống vào bữa sáng; gọi «café au lait» sau bữa trưa sẽ khiến người phục vụ hơi ngạc nhiên. Người Việt quen cà phê sữa đá thì đây là cú sốc nhỏ đầu tiên.',
  word:{ t:'un café', r:'ka.fe', vi:'tách cà phê espresso' } },

/* ---------------- Thiên nhiên (tiếp) ---------------- */
{ lang:'fr', cat:'Thiên nhiên', art:'river', title:'Sông Seine đã được làm sạch để bơi được trở lại',
  body:'Bơi ở sông Seine bị cấm từ đầu thế kỷ XX vì ô nhiễm. Một chương trình xử lý nước thải quy mô lớn đã được thực hiện để đưa dòng sông trở lại.',
  extra:'Đây là câu chuyện cùng loại với sông Thames ở London. Cả hai cho thấy sông đô thị có thể phục hồi, nhưng phải mất nhiều thập niên và rất nhiều tiền.',
  word:{ t:'la Seine', r:'sɛn', vi:'sông Seine' } },

{ lang:'fr', cat:'Thiên nhiên', art:'mountain', title:'Dãy Pyrénées có một quốc gia tí hon nằm giữa',
  body:'Andorra nằm gọn trong dãy núi giữa Pháp và Tây Ban Nha, và về mặt hiến pháp có hai nguyên thủ: tổng thống Pháp và một giám mục Tây Ban Nha.',
  extra:'Đây là một trong những cấu trúc nhà nước lạ nhất thế giới, tồn tại từ một hiệp ước thời trung cổ. Tổng thống Pháp đương nhiệm, dù là ai, cũng tự động là đồng thân vương Andorra.',
  word:{ t:'les Pyrénées', r:'pi.ʁe.ne', vi:'dãy Pyrénées' } },

{ lang:'fr', cat:'Thiên nhiên', art:'forest', title:'Rừng Fontainebleau là nơi hội hoạ ngoài trời ra đời',
  body:'Khu rừng gần Paris này là nơi các hoạ sĩ thế kỷ XIX ra vẽ trực tiếp ngoài trời thay vì trong xưởng, mở đường cho trường phái Ấn tượng.',
  extra:'Điều làm việc đó khả thi là một phát minh rất đời thường: tuýp sơn bằng thiếc, cho phép mang màu ra khỏi xưởng mà không bị khô. Không có nó thì có lẽ không có hội hoạ Ấn tượng.',
  word:{ t:'la forêt', r:'fɔ.ʁɛ', vi:'khu rừng' } },

{ lang:'fr', cat:'Thiên nhiên', art:'coast', title:'Vùng Provence có mùa hoa oải hương rất ngắn',
  body:'Cánh đồng oải hương chỉ nở rộ khoảng từ cuối tháng 6 tới đầu tháng 8, rồi bị cắt để chưng cất tinh dầu.',
  extra:'Có hai loài thường bị nhầm: lavande thật mọc ở độ cao trên 800 m và cho tinh dầu quý hơn, còn lavandin là giống lai, khoẻ hơn và chính là thứ phủ kín các cánh đồng chụp ảnh.',
  word:{ t:'la lavande', r:'la.vɑ̃d', vi:'hoa oải hương' } },

/* ---------------- Động vật (tiếp) ---------------- */
{ lang:'fr', cat:'Động vật', art:'pigeon', title:'Chim bồ câu đưa thư từng là hệ thống liên lạc của Paris bị vây',
  body:'Trong cuộc vây hãm Paris 1870–71, thư được thu nhỏ bằng kỹ thuật ảnh rồi buộc vào chân bồ câu để gửi ra ngoài.',
  extra:'Một con chim có thể mang hàng nghìn bức thư đã thu nhỏ. Người nhận dùng máy chiếu để phóng to và chép lại — có thể coi là một dạng tiền thân của việc nén dữ liệu.',
  word:{ t:'le pigeon', r:'pi.ʒɔ̃', vi:'chim bồ câu' } },

{ lang:'fr', cat:'Động vật', art:'bull', title:'Mỗi vùng của Pháp có giống gia súc bản địa riêng',
  body:'Nhiều vùng của Pháp có giống gia súc bản địa riêng được bảo tồn: bò Salers ở Auvergne, cừu Lacaune ở miền nam, ngựa kéo Breton ở Bretagne.',
  extra:'Mỗi giống gắn với một sản phẩm: giống bò nào cho sữa làm phô mai nào là điều được ghi trong quy định bảo hộ. Nên bảo tồn giống vật nuôi ở Pháp cũng là bảo vệ hương vị vùng miền.',
  word:{ t:'une race', r:'ʁas', vi:'giống (vật nuôi)' } },

/* ---------------- Ngôn ngữ (16) ---------------- */
{ lang:'es', cat:'Ngôn ngữ', art:'enye', title:'Chữ ñ là chữ cái riêng, không phải n có dấu',
  body:'Trong bảng chữ cái tiếng Tây Ban Nha, ñ đứng riêng một ô sau n. Từ điển xếp año sau ano, và hai từ này nghĩa khác nhau hoàn toàn.',
  extra:'Dấu ngã trên đầu vốn là chữ n thứ hai viết thu nhỏ đặt lên trên, do các thầy tu thời trung cổ nghĩ ra để tiết kiệm giấy da. Về sau nét viết tắt đó cứng lại thành một chữ cái độc lập.',
  word:{ t:'el año', r:'a.ɲo', vi:'năm' } },

{ lang:'es', cat:'Ngôn ngữ', art:'spellread', title:'Tiếng Tây Ban Nha viết sao đọc vậy gần như tuyệt đối',
  body:'Biết vài quy tắc là đọc đúng mọi từ, kể cả từ chưa gặp. Đây là điểm dễ nhất của tiếng Tây Ban Nha với người Việt.',
  extra:'Nguyên do là Viện Hàn lâm Hoàng gia đã nhiều lần cải cách chính tả cho khớp với cách phát âm, trong khi tiếng Anh và tiếng Pháp thì giữ lại lối viết cũ. Nhờ vậy học viết chính tả tiếng Tây Ban Nha nhẹ hơn hẳn.',
  word:{ t:'la ortografía', r:'oɾ.to.ɣɾa.fi.a', vi:'chính tả' } },

{ lang:'es', cat:'Ngôn ngữ', art:'inverted', title:'Câu hỏi tiếng Tây Ban Nha có dấu hỏi ở cả hai đầu',
  body:'¿Cómo estás? — dấu hỏi ngược mở đầu câu, dấu hỏi thường đóng lại. Câu cảm thán cũng vậy: ¡Qué bien!',
  extra:'Viện Hàn lâm đưa quy tắc này vào từ thế kỷ XVIII, vì tiếng Tây Ban Nha không đảo trật tự từ khi hỏi như tiếng Anh. Không có dấu mở, người đọc đọc tới cuối câu mới biết đó là câu hỏi.',
  word:{ t:'la pregunta', r:'pɾe.ɣun.ta', vi:'câu hỏi' } },

{ lang:'es', cat:'Ngôn ngữ', art:'speakers', title:'Tiếng Tây Ban Nha là tiếng mẹ đẻ của nhiều người hơn tiếng Anh',
  body:'Tính theo số người nói bản ngữ, tiếng Tây Ban Nha đứng thứ hai thế giới, chỉ sau tiếng Trung. Tiếng Anh vượt nó nếu tính cả người học.',
  extra:'Hơn hai mươi quốc gia lấy tiếng Tây Ban Nha làm ngôn ngữ chính thức, phần lớn ở châu Mỹ. Mexico một mình đã có nhiều người nói tiếng Tây Ban Nha hơn cả Tây Ban Nha.',
  word:{ t:'el idioma', r:'i.ðjo.ma', vi:'ngôn ngữ' } },

{ lang:'es', cat:'Ngôn ngữ', art:'fivevowels', title:'Tiếng Tây Ban Nha chỉ có năm nguyên âm',
  body:'A, e, i, o, u — mỗi chữ một âm, không đổi theo vị trí. So với tiếng Anh có hơn mười nguyên âm thì đây là món quà cho người học.',
  extra:'Nhưng chính điều đó khiến người Tây Ban Nha học tiếng Anh rất khó phân biệt ship và sheep, hay bad và bed. Tai họ không được luyện để nghe những khác biệt đó từ nhỏ.',
  word:{ t:'la vocal', r:'bo.kal', vi:'nguyên âm' } },

{ lang:'es', cat:'Ngôn ngữ', art:'acutemark', title:'Dấu sắc trong tiếng Tây Ban Nha chỉ để đánh dấu trọng âm',
  body:'Không phải dấu thanh như tiếng Việt. Nó chỉ nói cho biết âm tiết nào nhấn, khi trọng âm lệch khỏi quy tắc mặc định.',
  extra:'Đôi khi dấu này là thứ duy nhất phân biệt hai từ: esta (này) và está (thì, ở), hay papa (khoai tây) và papá (bố). Bỏ dấu là đổi nghĩa.',
  word:{ t:'el acento', r:'a.θen.to', vi:'trọng âm, dấu' } },

{ lang:'es', cat:'Ngôn ngữ', art:'arabicroot', title:'Tiếng Tây Ban Nha có khoảng bốn nghìn từ gốc Ả Rập',
  body:'Tám thế kỷ Hồi giáo ở bán đảo Iberia để lại dấu vết trong kho từ: azúcar (đường), almohada (gối), ojalá (mong sao), aceite (dầu).',
  extra:'Nhiều từ trong số đó bắt đầu bằng al-, vốn là mạo từ xác định tiếng Ả Rập bị dính liền vào từ. Nên khi nói almohada, người Tây Ban Nha đang nói «cái-cái gối» mà không biết.',
  word:{ t:'el azúcar', r:'a.θu.kaɾ', vi:'đường (ăn)' } },

{ lang:'es', cat:'Ngôn ngữ', art:'loanword', title:'Nhiều từ tiếng Việt mượn qua tiếng Tây Ban Nha mà ta không nhận ra',
  body:'Cà phê, xà bông, ga, sô-cô-la đi vòng qua các tiếng châu Âu. Riêng «xì gà» thì đúng là từ cigarro của tiếng Tây Ban Nha.',
  extra:'Ngược lại, tiếng Tây Ban Nha cũng lấy rất nhiều từ của các tiếng bản địa châu Mỹ rồi truyền cho cả thế giới: chocolate, tomate, aguacate từ tiếng Nahuatl, còn cacao, canoa, huracán từ vùng Caribe.',
  word:{ t:'el chocolate', r:'tʃo.ko.la.te', vi:'sô-cô-la' } },

{ lang:'es', cat:'Ngôn ngữ', art:'tuvous', title:'Tiếng Tây Ban Nha có hai cách gọi «bạn» và ranh giới rất khác nhau tuỳ nước',
  body:'Tú là thân, usted là lịch sự. Nhưng ngưỡng chuyển đổi mỗi nước một khác: ở Tây Ban Nha người ta dùng tú rất rộng, ở Colombia thì usted phổ biến cả trong gia đình.',
  extra:'Ở Argentina và Uruguay còn có vos thay cho tú, với cách chia động từ riêng: vos tenés chứ không phải tú tienes. Đây là một trong những dấu hiệu rõ nhất để nhận ra người nói từ đâu.',
  word:{ t:'usted', r:'us.teð', vi:'ngài, ông/bà (lịch sự)' } },

{ lang:'es', cat:'Ngôn ngữ', art:'idiom', title:'Người Tây Ban Nha nói «không có bà nội» khi ai đó tự khen quá',
  body:'No tener abuela — không có bà nội. Vì bà nội thì khen cháu hộ, ai không có bà thì phải tự khen mình.',
  extra:'Kiểu thành ngữ này rất nhiều trong tiếng Tây Ban Nha: «ser pan comido» (là bánh đã ăn) nghĩa là quá dễ, «estar en las nubes» (đang ở trên mây) nghĩa là lơ đãng.',
  word:{ t:'la abuela', r:'a.βwe.la', vi:'bà nội, bà ngoại' } },

{ lang:'es', cat:'Ngôn ngữ', art:'seseo', title:'Ở Tây Ban Nha, c và z đọc như th tiếng Anh, ở Mỹ Latinh thì không',
  body:'Gracias ở Madrid nghe là «gra-thias», ở Mexico là «gra-sias». Cả hai đều chuẩn, chỉ khác vùng.',
  extra:'Hiện tượng phân biệt này gọi là distinción, còn cách đọc gộp thành s gọi là seseo. Người học nên chọn một lối rồi giữ nhất quán, chứ không trộn lẫn trong cùng một câu.',
  word:{ t:'gracias', r:'ɡɾa.θjas', vi:'cảm ơn' } },

{ lang:'es', cat:'Ngôn ngữ', art:'academy', title:'Có một Viện Hàn lâm chung cho tất cả các nước nói tiếng Tây Ban Nha',
  body:'Hiệp hội các Viện Hàn lâm tiếng Tây Ban Nha gồm đại diện của mọi quốc gia nói ngôn ngữ này, cùng biên soạn từ điển và ngữ pháp chuẩn.',
  extra:'Nhờ đó tiếng Tây Ban Nha giữ được sự thống nhất đáng kể trên hai lục địa. Khẩu hiệu của Viện Hàn lâm Tây Ban Nha là «gạn trong, giữ vững và làm rạng» — limpia, fija y da esplendor.',
  word:{ t:'la academia', r:'a.ka.ðe.mja', vi:'viện hàn lâm' } },

{ lang:'es', cat:'Ngôn ngữ', art:'serestar', title:'Tiếng Tây Ban Nha có hai động từ «là»',
  body:'Ser dùng cho bản chất lâu dài, estar cho trạng thái tạm thời. Ser aburrido là người nhàm chán, estar aburrido là đang buồn.',
  extra:'Đây là lỗi dai dẳng nhất của người học. Câu nổi tiếng trong lớp học: «es guapo» là đẹp sẵn, còn «está guapo» là hôm nay trông đẹp — khen kiểu này an toàn hơn nhiều.',
  word:{ t:'ser / estar', r:'seɾ / es.taɾ', vi:'là, thì (hai động từ)' } },

{ lang:'es', cat:'Ngôn ngữ', art:'reverseverb', title:'Người Tây Ban Nha nói «tôi thích» theo lối ngược',
  body:'Me gusta el café nghĩa đúng là «cà phê làm vui lòng tôi». Chủ ngữ ngữ pháp là món được thích, không phải người thích.',
  extra:'Nên khi thích nhiều thứ thì động từ phải đổi: me gustan los libros. Nhóm động từ hoạt động kiểu này khá lớn: encantar, doler, interesar, faltar.',
  word:{ t:'gustar', r:'ɡus.taɾ', vi:'làm vui lòng, thích' } },

{ lang:'es', cat:'Ngôn ngữ', art:'letterset', title:'Viện Hàn lâm từng bỏ hai chữ cái khỏi bảng chữ',
  body:'Ch và ll trước đây được xếp là chữ cái riêng. Từ năm 1994 chúng bị coi là tổ hợp hai chữ, và từ điển sắp xếp lại theo đó.',
  extra:'Lý do rất thực dụng: máy tính và cơ sở dữ liệu quốc tế sắp xếp theo bảng chữ Latinh cơ bản. Giữ ch và ll làm chữ riêng khiến việc sắp thứ tự trở nên rắc rối.',
  word:{ t:'la letra', r:'le.tɾa', vi:'chữ cái' } },

{ lang:'es', cat:'Ngôn ngữ', art:'voseo', title:'Cùng một từ có thể vô hại ở nước này và thô tục ở nước khác',
  body:'Coger ở Tây Ban Nha chỉ là «lấy, bắt» — coger el autobús là bắt xe buýt. Ở Argentina và Mexico thì nó là từ thô tục.',
  extra:'Danh sách những từ như vậy khá dài, nên người học nên biết mình đang học biến thể nào. An toàn nhất là dùng tomar el autobús, hiểu được ở mọi nơi.',
  word:{ t:'tomar', r:'to.maɾ', vi:'lấy, uống, đi (xe)' } },

/* ---------------- Tên gọi (10) ---------------- */
{ lang:'es', cat:'Tên gọi', art:'nametag', title:'Người Tây Ban Nha có hai họ, của cả bố và mẹ',
  body:'Tên đầy đủ gồm tên riêng, họ bố rồi họ mẹ. Con của García và López sẽ là ... García López.',
  extra:'Nghĩa là họ mẹ không mất đi sau một đời như ở nhiều nước khác. Luật hiện nay còn cho phép đảo thứ tự hai họ, nếu cha mẹ cùng đồng ý.',
  word:{ t:'el apellido', r:'a.pe.ʎi.ðo', vi:'họ' } },

{ lang:'es', cat:'Tên gọi', art:'family', title:'Phụ nữ Tây Ban Nha không đổi họ khi kết hôn',
  body:'Họ là thứ gắn với gia đình gốc và giữ nguyên suốt đời. Trong một gia đình, vợ và chồng mang họ khác nhau là bình thường.',
  extra:'Đây là truyền thống lâu đời, không phải thành quả của phong trào hiện đại. Người Mỹ sang Tây Ban Nha thường bối rối vì thấy mẹ và con không cùng họ.',
  word:{ t:'el matrimonio', r:'ma.tɾi.mo.njo', vi:'hôn nhân' } },

{ lang:'es', cat:'Tên gọi', art:'stamp', title:'Họ García phổ biến nhất trong tiếng Tây Ban Nha',
  body:'García, Rodríguez, González, Fernández, López là nhóm họ đông nhất, cả ở Tây Ban Nha và phần lớn Mỹ Latinh.',
  extra:'Đuôi -ez vốn nghĩa là «con của»: Rodríguez là con của Rodrigo, Fernández là con của Fernando. Cách cấu tạo giống -son trong tiếng Anh hay -vich trong tiếng Nga.',
  word:{ t:'González', r:'ɡon.θa.leθ', vi:'họ González' } },

{ lang:'es', cat:'Tên gọi', art:'crown', title:'Rất nhiều tên nữ Tây Ban Nha là các danh hiệu của Đức Mẹ',
  body:'Pilar, Rocío, Carmen, Dolores, Mercedes, Guadalupe — đều là tên gắn với những nơi thờ hoặc danh hiệu tôn giáo, không phải tên gốc.',
  extra:'Nên có rất nhiều người tên María kèm thêm một từ: María del Pilar, María del Carmen, thường gọi tắt là Pilar hay Carmen. Ghép lại thành Maricarmen cũng rất thường gặp.',
  word:{ t:'María', r:'ma.ɾi.a', vi:'tên María' } },

{ lang:'es', cat:'Tên gọi', art:'letter', title:'Người Tây Ban Nha gọi thân mật bằng cách rút ngắn rất mạnh',
  body:'José thành Pepe, Francisco thành Paco, Enrique thành Quique, Concepción thành Concha. Nhiều tên gọi tắt không còn giống tên gốc.',
  extra:'Không phải cái nào cũng giải thích được rõ ràng. Pepe được cho là từ chữ viết tắt P.P. của «pater putativus» chỉ thánh Giuse, nhưng giả thuyết này chưa chắc chắn.',
  word:{ t:'el apodo', r:'a.po.ðo', vi:'tên gọi thân mật' } },

{ lang:'es', cat:'Tên gọi', art:'map', title:'Tên nước Tây Ban Nha có thể bắt nguồn từ tiếng Phoenicia',
  body:'España xuất phát từ Hispania của người La Mã, mà tên này lại có thể do người Phoenicia đặt. Nghĩa gốc thì chưa ai chắc.',
  extra:'Một giả thuyết cũ gắn nó với chữ «bờ biển nhiều thỏ», dựa trên đồng tiền La Mã vẽ một con thỏ. Giả thuyết khác cho là «vùng đất phía bắc». Cả hai đều chỉ là suy đoán.',
  word:{ t:'España', r:'es.pa.ɲa', vi:'nước Tây Ban Nha' } },

{ lang:'es', cat:'Tên gọi', art:'flag', title:'Argentina được gọi theo tên chất bạc',
  body:'Argentum trong tiếng Latinh là bạc. Người châu Âu tới đây vì tin có núi bạc trong nội địa, nên đặt tên vùng theo kim loại đó.',
  extra:'Dòng sông lớn ở đây cũng gọi là Río de la Plata — sông Bạc. Trên thực tế bạc chủ yếu nằm ở Bolivia và Peru, còn Argentina thì hầu như không có.',
  word:{ t:'la plata', r:'pla.ta', vi:'bạc; tiền' } },

{ lang:'es', cat:'Tên gọi', art:'volcano', title:'Venezuela có nghĩa là «Venice nhỏ»',
  body:'Người Ý trong đoàn thám hiểm đầu thế kỷ XVI thấy những nhà sàn trên mặt nước ở hồ Maracaibo, liên tưởng tới thành Venice.',
  extra:'Nhiều tên nước Mỹ Latinh cũng có gốc mô tả kiểu vậy: Ecuador là «xích đạo», Costa Rica là «bờ biển giàu», Puerto Rico là «cảng giàu». Argentina thì theo kim loại bạc.',
  word:{ t:'pequeño', r:'pe.ke.ɲo', vi:'nhỏ' } },

{ lang:'es', cat:'Tên gọi', art:'passport', title:'Tên gọi «Mỹ Latinh» do người Pháp phổ biến',
  body:'Cách gọi này nhấn vào gốc gác ngôn ngữ Latinh, và được đẩy mạnh trong thế kỷ XIX, một phần để tách vùng này khỏi ảnh hưởng của Bắc Mỹ nói tiếng Anh.',
  extra:'Nhiều người ở đây thích gọi bằng Iberoamérica hoặc Hispanoamérica hơn. Riêng Brazil nói tiếng Bồ Đào Nha nên không thuộc Hispanoamérica, nhưng vẫn thuộc Mỹ Latinh.',
  word:{ t:'Latinoamérica', r:'la.ti.no.a.me.ɾi.ka', vi:'Mỹ Latinh' } },

{ lang:'es', cat:'Tên gọi', art:'nametag', title:'Người Tây Ban Nha gọi người Việt là vietnamita, không phân biệt nam nữ',
  body:'Nhiều tên gọi dân tộc kết thúc bằng -ita hoặc -ense thì giữ nguyên cho cả hai giới, chỉ đổi mạo từ: el vietnamita, la vietnamita.',
  extra:'Nhưng phần lớn tên dân tộc thì có hai dạng: español/española, chino/china, ruso/rusa. Người học phải nhớ từng nhóm, không có quy tắc duy nhất.',
  word:{ t:'vietnamita', r:'bjet.na.mi.ta', vi:'người Việt Nam' } },

/* ---------------- Chính trị (10) ---------------- */
{ lang:'es', cat:'Chính trị', art:'crown', title:'Tây Ban Nha là quân chủ lập hiến, vua không cầm quyền',
  body:'Nhà vua là nguyên thủ quốc gia mang tính biểu tượng. Người điều hành đất nước là chủ tịch chính phủ, do Quốc hội bầu.',
  extra:'Chế độ quân chủ được lập lại năm 1975 sau gần bốn thập niên chế độ Franco. Hiến pháp năm 1978, được thông qua bằng trưng cầu dân ý, là văn bản định hình nhà nước Tây Ban Nha hiện nay.',
  word:{ t:'el rey', r:'rei', vi:'nhà vua' } },

{ lang:'es', cat:'Chính trị', art:'ballot', title:'Người Tây Ban Nha bỏ phiếu cho danh sách đảng, không cho từng người',
  body:'Cử tri chọn một lá phiếu in sẵn tên đảng và thứ tự ứng viên. Ai vào Quốc hội thì phụ thuộc vào số ghế đảng giành được và thứ tự trong danh sách.',
  extra:'Hệ quả là lãnh đạo đảng có quyền rất lớn, vì họ quyết định ai đứng đầu danh sách. Người dân hầu như không thể chọn riêng một ứng viên cụ thể.',
  word:{ t:'la papeleta', r:'pa.pe.le.ta', vi:'phiếu bầu' } },

{ lang:'es', cat:'Chính trị', art:'parliament', title:'Tây Ban Nha chia thành 17 vùng tự trị với quyền hạn rất rộng',
  body:'Mỗi vùng có nghị viện và chính quyền riêng, tự quản y tế, giáo dục và trong vài trường hợp cả cảnh sát.',
  extra:'Mức độ tự trị không đồng đều: xứ Basque và Navarra còn tự thu thuế rồi chuyển một phần cho trung ương. Cấu trúc bất đối xứng này là đặc điểm và cũng là điểm gây tranh cãi của nhà nước Tây Ban Nha.',
  word:{ t:'la comunidad autónoma', r:'ko.mu.ni.ðað au̯.to.no.ma', vi:'vùng tự trị' } },

{ lang:'es', cat:'Chính trị', art:'podium', title:'Tây Ban Nha có bốn ngôn ngữ chính thức ở cấp vùng',
  body:'Ngoài tiếng Tây Ban Nha, tiếng Catalan, tiếng Basque và tiếng Galicia đều là ngôn ngữ chính thức tại vùng của mình.',
  extra:'Trong đó tiếng Basque không họ hàng với bất kỳ ngôn ngữ nào còn sống trên thế giới. Còn tiếng Galicia thì gần với tiếng Bồ Đào Nha hơn là với tiếng Tây Ban Nha.',
  word:{ t:'la lengua cooficial', r:'leŋ.ɡwa ko.o.fi.θjal', vi:'ngôn ngữ đồng chính thức' } },

{ lang:'es', cat:'Chính trị', art:'scales', title:'Thượng viện Tây Ban Nha yếu hơn Hạ viện rất nhiều',
  body:'Hạ viện bầu và bãi nhiệm chính phủ, thông qua luật. Thượng viện chỉ có thể trì hoãn hoặc sửa, rồi Hạ viện có quyền bác lại.',
  extra:'Vì thế cải cách Thượng viện là chủ đề bàn thảo kéo dài nhiều thập niên. Tên gọi chung của hai viện là Cortes Generales, một từ có từ thời trung cổ.',
  word:{ t:'el Senado', r:'se.na.ðo', vi:'Thượng viện' } },

{ lang:'es', cat:'Chính trị', art:'flag', title:'Cờ Tây Ban Nha có dải vàng rộng gấp đôi hai dải đỏ',
  body:'Ba dải ngang đỏ - vàng - đỏ, trong đó dải giữa chiếm một nửa chiều cao cờ. Huy hiệu quốc gia đặt lệch về phía cột cờ.',
  extra:'Hai cột trong huy hiệu là cột Hercules ở eo Gibraltar, kèm dòng chữ «Plus Ultra» — «còn xa hơn nữa». Câu này thay cho khẩu hiệu cũ «đến đây là hết», sau khi người châu Âu tới châu Mỹ.',
  word:{ t:'la bandera', r:'ban.de.ɾa', vi:'quốc kỳ' } },

{ lang:'es', cat:'Chính trị', art:'ballot', title:'Ở nhiều nước Mỹ Latinh, đi bầu là nghĩa vụ có chế tài',
  body:'Argentina, Brazil, Peru và một số nước khác quy định bỏ phiếu là bắt buộc, không đi có thể bị phạt hoặc bị hạn chế một số giao dịch hành chính.',
  extra:'Cách làm này nâng tỷ lệ đi bầu lên rất cao, nhưng cũng làm tăng số phiếu trắng và phiếu bỏ bừa. Tây Ban Nha thì không bắt buộc.',
  word:{ t:'el voto obligatorio', r:'bo.to o.βli.ɣa.to.ɾjo', vi:'bầu cử bắt buộc' } },

{ lang:'es', cat:'Chính trị', art:'parliament', title:'Nhiều nước Mỹ Latinh không cho tổng thống tái cử liền kề',
  body:'Mexico thì cấm tuyệt đối một người làm tổng thống hai lần, với nhiệm kỳ sáu năm duy nhất.',
  extra:'Quy định này là phản ứng lịch sử với những giai đoạn cầm quyền quá dài. Chile, Colombia và Peru mỗi nước có một cách giới hạn khác nhau, nhưng đều xuất phát từ cùng nỗi lo ấy.',
  word:{ t:'el mandato', r:'man.da.to', vi:'nhiệm kỳ' } },

{ lang:'es', cat:'Chính trị', art:'passport', title:'Người Mỹ Latinh ở một số nước có thể xin quốc tịch Tây Ban Nha nhanh hơn',
  body:'Thời gian cư trú yêu cầu để xin nhập tịch được rút ngắn đáng kể với công dân các nước nói tiếng Tây Ban Nha và một vài nước có quan hệ lịch sử.',
  extra:'Đây là chính sách dựa trên gắn kết ngôn ngữ và lịch sử, có trong luật quốc tịch Tây Ban Nha. Philippines cũng nằm trong nhóm được ưu đãi, dù ngày nay ít người ở đó còn nói tiếng Tây Ban Nha.',
  word:{ t:'la nacionalidad', r:'na.θjo.na.li.ðað', vi:'quốc tịch' } },

{ lang:'es', cat:'Chính trị', art:'podium', title:'Tây Ban Nha có thời kỳ chuyển tiếp được nghiên cứu khắp thế giới',
  body:'Giai đoạn từ 1975 tới đầu thập niên 1980, chuyển từ chế độ độc tài sang dân chủ nghị viện mà không có nội chiến, được gọi là la Transición.',
  extra:'Thoả ước Moncloa giữa các đảng và nghiệp đoàn là một dấu mốc của quá trình đó. Mô hình này từng được nhiều nước tham khảo, nhưng ở Tây Ban Nha vẫn còn tranh luận về cái giá đã trả cho nó.',
  word:{ t:'la transición', r:'tɾan.si.θjon', vi:'thời kỳ chuyển tiếp' } },

/* ---------------- Luật pháp (8) ---------------- */
{ lang:'es', cat:'Luật pháp', art:'scales', title:'Ở Tây Ban Nha, giấc trưa từng được một thị trấn ra quy định bảo vệ',
  body:'Một số địa phương ban hành lệnh giữ yên tĩnh vào giờ đầu chiều, để không ai làm ồn trong khoảng nghỉ trưa.',
  extra:'Trên bình diện quốc gia thì không có luật nào bắt nghỉ trưa. Thực tế siesta trong đời sống thành thị hiện đại đã thu hẹp nhiều, chủ yếu còn ở thị trấn nhỏ và vùng nóng.',
  word:{ t:'la siesta', r:'sjes.ta', vi:'giấc nghỉ trưa' } },

{ lang:'es', cat:'Luật pháp', art:'stamp', title:'Người Tây Ban Nha phải có thẻ căn cước và mang theo',
  body:'DNI là giấy tờ tuỳ thân bắt buộc từ tuổi mười bốn, dùng cho gần như mọi thủ tục, từ mở tài khoản tới nhận bưu kiện.',
  extra:'Con số trên DNI đi kèm một chữ cái kiểm tra, tính ra bằng phép chia lấy dư. Nhờ vậy hệ thống phát hiện được số sai ngay khi nhập liệu.',
  word:{ t:'el carné de identidad', r:'kaɾ.ne ðe i.ðen.ti.ðað', vi:'thẻ căn cước' } },

{ lang:'es', cat:'Luật pháp', art:'bull', title:'Đấu bò bị cấm ở một số vùng của Tây Ban Nha',
  body:'Quần đảo Canaria đã cấm từ lâu, và Catalonia cũng từng thông qua lệnh cấm trước khi bị Toà Bảo hiến bác bỏ.',
  extra:'Toà lập luận rằng đấu bò được xếp là di sản văn hoá thuộc thẩm quyền quốc gia, nên vùng không được cấm. Đây là ví dụ rõ về ranh giới quyền lực giữa vùng tự trị và trung ương.',
  word:{ t:'la corrida', r:'ko.ri.ða', vi:'cuộc đấu bò' } },

{ lang:'es', cat:'Luật pháp', art:'scales', title:'Tây Ban Nha coi hiến tặng nội tạng là mặc định đồng ý',
  body:'Về nguyên tắc pháp lý, mọi người được xem là người hiến tiềm năng trừ khi đã bày tỏ ý ngược lại. Thực tế gia đình vẫn luôn được hỏi ý.',
  extra:'Điều làm nên hiệu quả thật lại không chỉ là luật, mà là mạng lưới phối hợp cấy ghép trong từng bệnh viện. Nhiều nước sao chép mô hình tổ chức này của Tây Ban Nha.',
  word:{ t:'el donante', r:'do.nan.te', vi:'người hiến tặng' } },

{ lang:'es', cat:'Luật pháp', art:'apartment', title:'Ở Tây Ban Nha, thuê nhà có thời hạn tối thiểu do luật quy định',
  body:'Hợp đồng thuê nhà ở được luật bảo đảm một thời hạn tối thiểu nhất định, dù trên giấy hai bên ghi ngắn hơn, nếu người thuê muốn ở tiếp.',
  extra:'Đây là thứ người nước ngoài hay bất ngờ: điều khoản trong hợp đồng mà kém hơn mức luật cho thì vô hiệu. Quy định chi tiết đã thay đổi vài lần, nên cần tra bản mới nhất.',
  word:{ t:'el alquiler', r:'al.ki.leɾ', vi:'việc thuê; tiền thuê' } },

{ lang:'es', cat:'Luật pháp', art:'coin', title:'Tây Ban Nha đánh thuế cả tiền thưởng xổ số nhưng miễn một phần đầu',
  body:'Giải thưởng dưới một ngưỡng nhất định thì không phải nộp thuế, phần vượt ngưỡng bị giữ lại theo một tỷ lệ cố định.',
  extra:'Ngưỡng này đã thay đổi vài lần nên phải tra quy định hiện hành. Giải xổ số Giáng sinh El Gordo là đợt trả thưởng lớn nhất trong năm, và cũng là dịp cơ quan thuế thu về nhiều nhất.',
  word:{ t:'el impuesto', r:'im.pwes.to', vi:'thuế' } },

{ lang:'es', cat:'Luật pháp', art:'ring', title:'Tây Ban Nha là một trong những nước đầu tiên hợp pháp hoá hôn nhân đồng tính',
  body:'Luật được thông qua năm 2005, khi đó Tây Ban Nha là một trong ba nước đầu tiên trên thế giới làm việc này.',
  extra:'Điều đáng chú ý là đây là một quốc gia có truyền thống Công giáo rất mạnh. Cải cách gặp phản đối đáng kể vào thời điểm đó, nhưng sau đó nhanh chóng trở thành chuyện bình thường trong đời sống.',
  word:{ t:'la ley', r:'lei', vi:'luật' } },

{ lang:'es', cat:'Luật pháp', art:'bus', title:'Ở Tây Ban Nha, xe đạp cũng phải theo luật giao thông như xe cơ giới',
  body:'Người đi xe đạp bị xử lý nếu vượt đèn đỏ hoặc uống rượu khi điều khiển, và trẻ dưới mười sáu tuổi bắt buộc đội mũ bảo hiểm.',
  extra:'Ngoài khu dân cư thì mọi người đi xe đạp đều phải đội mũ. Trong thành phố thì không bắt buộc với người lớn — một sự phân biệt khiến chính người Tây Ban Nha cũng hay nhầm.',
  word:{ t:'el casco', r:'kas.ko', vi:'mũ bảo hiểm' } },

/* ---------------- Ẩm thực (12) ---------------- */
{ lang:'es', cat:'Ẩm thực', art:'paella', title:'Paella đúng kiểu Valencia không có hải sản',
  body:'Bản gốc dùng thịt thỏ, thịt gà, đậu và rau, nấu trên lửa củi. Paella hải sản là một biến thể khác, ra đời ở vùng ven biển.',
  extra:'Thứ quyết định một chảo paella ngon là lớp cơm cháy giòn dưới đáy, gọi là socarrat. Đảo cơm trong lúc nấu là điều không được làm, khác hẳn cơm rang.',
  word:{ t:'la paella', r:'pa.e.ʎa', vi:'món paella' } },

{ lang:'es', cat:'Ẩm thực', art:'tapas', title:'Gazpacho là món xúp uống lạnh',
  body:'Cà chua, dưa chuột, ớt ngọt, tỏi, bánh mì, dầu ô liu xay nhuyễn rồi làm lạnh. Ở miền nam nóng, nó được rót ra cốc uống như nước.',
  extra:'Trước khi người châu Âu biết đến cà chua từ châu Mỹ, gazpacho vốn có màu trắng, làm từ bánh mì, tỏi và hạnh nhân. Bản màu trắng đó nay gọi là ajoblanco và vẫn được ăn.',
  word:{ t:'el gazpacho', r:'ɡaθ.pa.tʃo', vi:'xúp lạnh gazpacho' } },

{ lang:'es', cat:'Ẩm thực', art:'cheese', title:'Giăm bông Tây Ban Nha hảo hạng làm từ lợn ăn hạt sồi',
  body:'Jamón ibérico de bellota lấy từ giống lợn đen bản địa được thả trong rừng sồi, ăn hạt sồi vào mùa thu đông.',
  extra:'Chế độ ăn đó làm thay đổi thành phần chất béo, nên miếng thịt có vị và mùi rất khác. Một chiếc chân giò được ủ nhiều năm, và ở nhà hàng có người chuyên chỉ làm việc cắt lát.',
  word:{ t:'el jamón', r:'xa.mon', vi:'giăm bông' } },

{ lang:'es', cat:'Ẩm thực', art:'wine', title:'Sangría ở Tây Ban Nha không phải thứ người dân uống hằng ngày',
  body:'Đó là thức uống của tiệc và của khách du lịch. Người bản địa thường gọi tinto de verano — rượu đỏ pha nước ngọt chanh, đơn giản hơn nhiều.',
  extra:'Tên sangría xuất phát từ sangre, nghĩa là máu, chỉ màu đỏ của thức uống. Liên minh châu Âu còn giới hạn: chỉ đồ làm ở Tây Ban Nha và Bồ Đào Nha mới được gọi là sangría khi bán trong khối.',
  word:{ t:'el vino', r:'bi.no', vi:'rượu vang' } },

{ lang:'es', cat:'Ẩm thực', art:'baguette', title:'Tortilla ở Tây Ban Nha và ở Mexico là hai món khác nhau',
  body:'Ở Tây Ban Nha, tortilla là trứng đánh chiên dày với khoai tây. Ở Mexico, đó là bánh mỏng làm từ bột ngô hoặc bột mì.',
  extra:'Cùng một từ Latinh nghĩa «cái bánh tròn nhỏ» nhưng đi hai đường. Gọi «tortilla» ở Madrid mà mong nhận được bánh cuốn taco thì sẽ ra một đĩa trứng khoai rất dày.',
  word:{ t:'la tortilla', r:'toɾ.ti.ʎa', vi:'trứng chiên khoai; bánh ngô' } },

{ lang:'es', cat:'Ẩm thực', art:'lightbreakfast', title:'Churros là món ăn sáng, chấm sô-cô-la đặc',
  body:'Bột nặn qua khuôn hình ngôi sao rồi chiên, ăn kèm một cốc sô-cô-la đặc gần như kem. Đây là món sáng hoặc món ăn khuya sau khi đi chơi về.',
  extra:'Có hàng churros mở từ tờ mờ sáng đón cả hai loại khách: người đi làm sớm và người vừa tan tiệc. Khuôn hình ngôi sao không để trang trí mà để bánh chín đều và giòn.',
  word:{ t:'el churro', r:'tʃu.ro', vi:'bánh churro' } },

{ lang:'es', cat:'Ẩm thực', art:'tapas', title:'Ở một số vùng Tây Ban Nha, gọi đồ uống là được tapa miễn phí',
  body:'Granada và León nổi tiếng nhất về chuyện này: mỗi lần gọi bia là quán mang ra một món nhỏ kèm theo, không tính tiền.',
  extra:'Ở Madrid hay Barcelona thì tapa thường phải gọi và trả riêng. Nên «đi tapas» ở Granada có thể thay cả bữa tối, còn ở Barcelona thì không.',
  word:{ t:'la tapa', r:'ta.pa', vi:'món nhắm nhỏ' } },

{ lang:'es', cat:'Ẩm thực', art:'siesta', title:'Người Tây Ban Nha ăn tối rất muộn',
  body:'Bữa tối thường bắt đầu từ chín, mười giờ đêm. Nhà hàng nhiều nơi còn chưa nhận khách trước tám giờ.',
  extra:'Một cách giải thích là Tây Ban Nha dùng múi giờ lệch so với vị trí địa lý thực, từ những năm 1940. Nên mười giờ tối theo đồng hồ ở Madrid tương ứng với chín giờ theo mặt trời.',
  word:{ t:'la cena', r:'θe.na', vi:'bữa tối' } },

{ lang:'es', cat:'Ẩm thực', art:'map', title:'Ba loại rau quả quen thuộc nhất châu Âu đến từ châu Mỹ',
  body:'Khoai tây, cà chua và ớt đều được mang từ châu Mỹ về qua các cảng Tây Ban Nha vào thế kỷ XVI.',
  extra:'Không có chúng thì không có pizza Ý, không có khoai tây chiên Bỉ, không có goulash Hungary. Cả ba lúc mới sang đều bị nghi là độc và phải mất rất lâu mới được ăn rộng rãi.',
  word:{ t:'el tomate', r:'to.ma.te', vi:'cà chua' } },

{ lang:'es', cat:'Ẩm thực', art:'wine', title:'Tây Ban Nha có diện tích trồng nho lớn nhất thế giới',
  body:'Về diện tích vườn nho, Tây Ban Nha đứng đầu, dù sản lượng rượu thì thường sau Ý và Pháp vì nhiều vùng khô hạn, năng suất thấp.',
  extra:'Vùng La Rioja và Ribera del Duero nổi tiếng nhất về rượu đỏ, còn Jerez ở miền nam cho ra rượu sherry. Từ «sherry» trong tiếng Anh chính là biến âm của Jerez.',
  word:{ t:'la uva', r:'u.βa', vi:'quả nho' } },

{ lang:'es', cat:'Ẩm thực', art:'paella', title:'Tây Ban Nha là nước sản xuất dầu ô liu lớn nhất thế giới',
  body:'Riêng vùng Andalucía đã chiếm phần lớn sản lượng, với những cánh đồng ô liu trải dài hết tầm mắt ở tỉnh Jaén.',
  extra:'Nhiều dầu Tây Ban Nha được bán sang Ý rồi đóng nhãn Ý xuất đi tiếp. Dầu ép nguội loại đầu gọi là aceite de oliva virgen extra, và đó là thứ dùng ăn nguội.',
  word:{ t:'el aceite de oliva', r:'a.θei̯.te ðe o.li.βa', vi:'dầu ô liu' } },

{ lang:'es', cat:'Ẩm thực', art:'grapes12', title:'Người Tây Ban Nha ăn mười hai quả nho lúc giao thừa',
  body:'Mỗi tiếng đồng hồ điểm là một quả nho, mười hai quả cho mười hai tháng. Ai kịp hết trước khi hồi chuông dứt thì được cả năm may.',
  extra:'Tục này được cho là bắt đầu từ đầu thế kỷ XX và có phần do các nhà vườn nho muốn bán hết vụ. Dù gốc gác thực dụng, nay nó là hình ảnh giao thừa quen thuộc nhất ở Tây Ban Nha.',
  word:{ t:'las uvas', r:'u.βas', vi:'những quả nho' } },

/* ---------------- Thiên nhiên (10) ---------------- */
{ lang:'es', cat:'Thiên nhiên', art:'mountain', title:'Tây Ban Nha là nước nhiều núi thứ hai châu Âu',
  body:'Sau Thụy Sĩ, Tây Ban Nha là quốc gia có độ cao trung bình lớn nhất châu Âu. Phần lớn lãnh thổ là cao nguyên nội địa.',
  extra:'Cao nguyên Meseta chiếm khoảng một nửa diện tích cả nước, cao chừng 600–700 m. Madrid nằm trên đó, và là thủ đô cao nhất trong các thủ đô lớn của châu Âu.',
  word:{ t:'la montaña', r:'mon.ta.ɲa', vi:'núi' } },

{ lang:'es', cat:'Thiên nhiên', art:'coast', title:'Tây Ban Nha có một vùng bán hoang mạc thật ở châu Âu',
  body:'Vùng Tabernas ở Almería khô tới mức được xếp là hoang mạc, và từng là phim trường của rất nhiều phim cao bồi châu Âu.',
  extra:'Những phim «spaghetti western» thập niên 1960 phần lớn quay ở đây chứ không ở Mỹ. Một số phim trường vẫn còn và mở cửa cho khách tham quan.',
  word:{ t:'el desierto', r:'de.sjeɾ.to', vi:'hoang mạc' } },

{ lang:'es', cat:'Thiên nhiên', art:'volcano', title:'Tây Ban Nha có núi lửa đang hoạt động, nhưng không ở châu Âu',
  body:'Quần đảo Canaria nằm ngoài khơi châu Phi và có núi lửa hoạt động. Đợt phun ở đảo La Palma năm 2021 kéo dài nhiều tháng.',
  extra:'Đỉnh Teide trên đảo Tenerife là điểm cao nhất toàn Tây Ban Nha, cao hơn mọi núi trên phần lục địa. Nếu tính từ đáy biển thì đây là một trong những núi lửa cao nhất thế giới.',
  word:{ t:'el volcán', r:'bol.kan', vi:'núi lửa' } },

{ lang:'es', cat:'Thiên nhiên', art:'river', title:'Tây Ban Nha có sông chảy sang Bồ Đào Nha rồi mới ra biển',
  body:'Phần lớn sông lớn của Tây Ban Nha chảy về phía tây, qua Bồ Đào Nha rồi mới đổ ra Đại Tây Dương: Tajo, Duero, Guadiana.',
  extra:'Điều này khiến việc chia nước giữa hai nước phải có hiệp định riêng. Chỉ có Ebro ở đông bắc là chảy ngược về phía Địa Trung Hải.',
  word:{ t:'el río', r:'ri.o', vi:'con sông' } },

{ lang:'es', cat:'Thiên nhiên', art:'forest', title:'Vùng bắc Tây Ban Nha xanh và mưa nhiều như Ireland',
  body:'Galicia và vùng Cantabria có khí hậu đại dương, mưa quanh năm, đồng cỏ xanh và rừng rậm. Hình ảnh khô cằn quen thuộc chỉ đúng với miền nam và trung.',
  extra:'Vùng này được gọi là «España verde» — Tây Ban Nha xanh. Ở đây người ta ăn nhiều bơ và uống rượu táo hơn dầu ô liu và rượu vang, giống các vùng ven Đại Tây Dương khác.',
  word:{ t:'la lluvia', r:'ʎu.βja', vi:'mưa' } },

{ lang:'es', cat:'Thiên nhiên', art:'coast', title:'Tây Ban Nha có vùng đầm phá là điểm dừng của chim di cư châu Âu',
  body:'Vườn quốc gia Doñana ở cửa sông Guadalquivir là nơi hàng trăm nghìn con chim nước dừng lại trên đường giữa châu Âu và châu Phi.',
  extra:'Vị trí này khiến Doñana quan trọng ở tầm lục địa, chứ không chỉ với Tây Ban Nha. Vườn cũng là một trong ít nơi còn linh miêu Iberia hoang dã, loài mèo lớn nguy cấp nhất châu Âu.',
  word:{ t:'la marisma', r:'ma.ɾis.ma', vi:'đầm phá, vùng ngập mặn' } },

{ lang:'es', cat:'Thiên nhiên', art:'snowflake', title:'Tây Ban Nha có tuyết và có bãi biển cách nhau vài chục cây số',
  body:'Ở Granada, dãy Sierra Nevada có khu trượt tuyết, còn bờ biển Địa Trung Hải chỉ cách đó chừng một giờ xe.',
  extra:'Đây là khu trượt tuyết ở vĩ độ thấp nhất châu Âu. Vào tháng Ba, đi trượt tuyết buổi sáng rồi ra biển buổi chiều là chuyện làm được thật.',
  word:{ t:'la nieve', r:'nje.βe', vi:'tuyết' } },

{ lang:'es', cat:'Thiên nhiên', art:'mountain', title:'Dãy Pyrénées gần như không có đường đèo thấp',
  body:'Biên giới với Pháp dài hơn bốn trăm cây số và gần như toàn bộ là núi cao, nên đường bộ chỉ qua được ở hai đầu ven biển hoặc qua hầm.',
  extra:'Chính rào cản địa lý này giữ cho bán đảo Iberia tương đối tách biệt suốt nhiều thời kỳ lịch sử. Có câu nói cũ rằng «châu Âu chấm dứt ở dãy Pyrénées» — nghe cường điệu nhưng phản ánh cảm nhận thật.',
  word:{ t:'la frontera', r:'fɾon.te.ɾa', vi:'biên giới' } },

{ lang:'es', cat:'Thiên nhiên', art:'forest', title:'Nút chai bần trên thế giới chủ yếu đến từ bán đảo Iberia',
  body:'Vỏ cây sồi bần được bóc theo chu kỳ nhiều năm mà cây vẫn sống. Bồ Đào Nha và Tây Ban Nha cung cấp phần lớn lượng bần thế giới.',
  extra:'Một cây phải lớn mấy chục năm mới được bóc lần đầu, và sau đó cứ khoảng chín năm mới bóc lại. Nên rừng bần là kiểu khai thác rất chậm, và chính vì thế mà rừng được giữ lại.',
  word:{ t:'el corcho', r:'koɾ.tʃo', vi:'gỗ bần, nút bần' } },

{ lang:'es', cat:'Thiên nhiên', art:'map', title:'Tây Ban Nha có cây ô liu sống hàng nghìn năm vẫn cho quả',
  body:'Một số cây ô liu cổ ở vùng đông bắc được cho là đã mấy nghìn năm tuổi và hằng năm vẫn được thu hoạch.',
  extra:'Ô liu sống lâu vì gốc có thể mọc chồi mới khi thân già chết đi, nên «cây» thực ra là một cụm tái sinh liên tục. Ước tính tuổi các cây này còn tranh luận, nhưng chúng chắc chắn rất cổ.',
  word:{ t:'el olivo', r:'o.li.βo', vi:'cây ô liu' } },

/* ---------------- Địa lý (10) ---------------- */
{ lang:'es', cat:'Địa lý', art:'map', title:'Tây Ban Nha có hai thành phố nằm ở châu Phi',
  body:'Ceuta và Melilla nằm trên bờ bắc Maroc nhưng thuộc Tây Ban Nha, và là biên giới đất liền duy nhất của Liên minh châu Âu với châu Phi.',
  extra:'Hai thành phố này có quy chế tự trị riêng và chế độ thuế đặc biệt. Maroc có yêu sách về cả hai, nên đây là vấn đề ngoại giao còn ngỏ giữa hai nước.',
  word:{ t:'la ciudad', r:'θju.ðað', vi:'thành phố' } },

{ lang:'es', cat:'Địa lý', art:'square', title:'Madrid nằm gần đúng tâm hình học của Tây Ban Nha',
  body:'Thủ đô được chọn phần lớn vì vị trí trung tâm. Trên quảng trường Puerta del Sol có một phiến đá đánh dấu điểm số 0 của các tuyến đường quốc lộ.',
  extra:'Sáu tuyến đường chính đánh số từ A-1 tới A-6 toả ra từ Madrid như nan hoa. Đi từ Barcelona tới Valencia thì không có đường nào qua Madrid, nhưng hệ thống quốc lộ vẫn được thiết kế theo lối hướng tâm.',
  word:{ t:'el centro', r:'θen.tɾo', vi:'trung tâm' } },

{ lang:'es', cat:'Địa lý', art:'train', title:'Tây Ban Nha có mạng tàu cao tốc dài nhất châu Âu',
  body:'Hệ thống AVE nối Madrid với phần lớn các thành phố lớn, và về chiều dài tuyến cao tốc thì Tây Ban Nha dẫn đầu châu Âu.',
  extra:'Đường sắt thường của Tây Ban Nha lại dùng khổ rộng hơn tiêu chuẩn châu Âu, nên tàu qua biên giới Pháp từng phải đổi khổ bánh. Các tuyến cao tốc mới thì dùng khổ chuẩn châu Âu.',
  word:{ t:'el tren', r:'tɾen', vi:'tàu hoả' } },

{ lang:'es', cat:'Địa lý', art:'coast', title:'Eo biển Gibraltar hẹp tới mức nhìn thấy châu Phi bằng mắt thường',
  body:'Chỗ hẹp nhất giữa Tây Ban Nha và Maroc chỉ khoảng mười bốn cây số. Từ bờ biển Tarifa, trời trong là thấy rõ núi bên kia.',
  extra:'Đây là nơi hàng nghìn con chim săn mồi và hạc bay qua mỗi mùa di cư, vì chúng cần đường bộ ngắn nhất để lượn nhờ luồng khí nóng. Tarifa vì thế là điểm ngắm chim nổi tiếng.',
  word:{ t:'el estrecho', r:'es.tɾe.tʃo', vi:'eo biển' } },

{ lang:'es', cat:'Địa lý', art:'apartment', title:'Barcelona được xây theo một ô lưới có bốn góc vát',
  body:'Khu Eixample gồm các ô vuông có bốn góc cắt chéo, tạo thành những khoảng mở nhỏ ở mỗi giao lộ.',
  extra:'Kiến trúc sư Ildefons Cerdà thiết kế như vậy từ giữa thế kỷ XIX, để xe ngựa quay đầu được và để ánh sáng vào sâu hơn. Nhìn từ trên cao, cả khu thành một mạng bát giác đều đặn.',
  word:{ t:'la manzana', r:'man.θa.na', vi:'ô phố; quả táo' } },

{ lang:'es', cat:'Địa lý', art:'monument', title:'Tây Ban Nha có một nhà thờ xây mãi chưa xong sau hơn trăm năm',
  body:'Sagrada Família ở Barcelona khởi công năm 1882 và vẫn đang thi công, chủ yếu bằng tiền vé tham quan và quyên góp.',
  extra:'Gaudí biết mình không sống tới ngày hoàn thành, nên để lại mô hình thạch cao thay vì bản vẽ đầy đủ. Nhiều mô hình bị phá trong nội chiến và phải chắp lại từ mảnh vỡ.',
  word:{ t:'la obra', r:'o.βɾa', vi:'công trình; tác phẩm' } },

{ lang:'es', cat:'Địa lý', art:'map', title:'Tây Ban Nha đón lượng khách du lịch thuộc nhóm cao nhất thế giới',
  body:'Nhiều năm liền Tây Ban Nha nằm trong nhóm hai, ba nước có nhiều khách quốc tế nhất, với con số vượt cả dân số của chính nước này.',
  extra:'Điều đó tạo áp lực thật lên đời sống ở Barcelona, Mallorca và quần đảo Canaria, từ giá nhà tới nước sinh hoạt. Một số thành phố đã siết chặt việc cho thuê nhà ngắn ngày.',
  word:{ t:'el turismo', r:'tu.ɾis.mo', vi:'du lịch' } },

{ lang:'es', cat:'Địa lý', art:'metroline', title:'Madrid và Barcelona đều có tàu điện ngầm rất rộng',
  body:'Hệ thống metro Madrid thuộc nhóm lớn nhất châu Âu về chiều dài tuyến, và mở rộng rất nhanh trong hai thập niên gần đây.',
  extra:'Một ga metro Madrid còn giữ nguyên trạng ga cũ đầu thế kỷ XX làm bảo tàng. Barcelona thì có ga nằm dưới một khu khảo cổ, nên hành khách đi qua vách đất có hiện vật.',
  word:{ t:'el metro', r:'me.tɾo', vi:'tàu điện ngầm' } },

{ lang:'es', cat:'Địa lý', art:'map', title:'Tây Ban Nha nằm ở múi giờ không khớp với vị trí thực',
  body:'Về kinh độ, phần lớn Tây Ban Nha nên dùng cùng giờ với Bồ Đào Nha và Anh, nhưng nước này dùng giờ Trung Âu từ những năm 1940.',
  extra:'Đó là lý do mặt trời ở Madrid lặn rất muộn vào mùa hè, và cũng là một lời giải thích cho nhịp sinh hoạt muộn của người Tây Ban Nha. Việc đổi lại múi giờ được bàn nhiều lần nhưng chưa làm.',
  word:{ t:'la hora', r:'o.ɾa', vi:'giờ' } },

{ lang:'es', cat:'Địa lý', art:'volcano', title:'Quần đảo Canaria có bảy đảo lớn, mỗi đảo một kiểu cảnh quan',
  body:'Lanzarote là đá núi lửa trơ trọi, La Gomera có rừng ẩm cổ, Fuerteventura toàn cồn cát, Tenerife thì có đỉnh cao nhất nước.',
  extra:'Rừng laurisilva ở La Gomera là dấu tích của loại rừng từng phủ khắp vùng Địa Trung Hải hàng triệu năm trước. Nó sống được nhờ lớp mây biển thường xuyên bám vào sườn núi.',
  word:{ t:'la isla', r:'is.la', vi:'hòn đảo' } },

/* ---------------- Động vật (8) ---------------- */
{ lang:'es', cat:'Động vật', art:'bull', title:'Bò đấu không phản ứng với màu đỏ',
  body:'Bò nhìn màu kém, nên chuyển động của tấm vải mới là thứ khiến nó xông tới. Màu đỏ là để khán giả dễ nhìn và để che vết máu.',
  extra:'Tấm vải lớn dùng đoạn đầu thực ra màu hồng và vàng, chỉ tấm nhỏ đoạn cuối mới màu đỏ. Nên ngay trong chính cuộc đấu, màu đỏ cũng không phải yếu tố chính.',
  word:{ t:'el toro', r:'to.ɾo', vi:'con bò đực' } },

{ lang:'es', cat:'Động vật', art:'wolf', title:'Linh miêu Iberia từng chỉ còn vài trăm con',
  body:'Loài mèo lớn này gần như tuyệt chủng vào đầu những năm 2000. Một chương trình nhân giống và phục hồi con mồi đã đưa số lượng tăng lên nhiều lần.',
  extra:'Thức ăn chính của nó là thỏ rừng, nên cứu linh miêu trước hết là cứu đàn thỏ khỏi bệnh dịch. Đây là một trong những câu chuyện bảo tồn thành công nhất ở châu Âu.',
  word:{ t:'el lince', r:'lin.θe', vi:'linh miêu' } },

{ lang:'es', cat:'Động vật', art:'rooster', title:'Tây Ban Nha có giống gà lấy thịt nuôi chậm rất nổi tiếng',
  body:'Nhiều vùng giữ giống gia cầm và gia súc bản địa riêng, nuôi thả lâu ngày thay vì nuôi công nghiệp, và bán dưới tên vùng.',
  extra:'Cách bảo tồn này gắn với hệ thống chỉ dẫn địa lý của Liên minh châu Âu: muốn dùng tên vùng thì phải nuôi đúng giống, đúng cách, đúng nơi. Nhờ đó nhiều giống cũ không biến mất.',
  word:{ t:'la gallina', r:'ɡa.ʎi.na', vi:'con gà (mái)' } },

{ lang:'es', cat:'Động vật', art:'stork', title:'Hạc trắng ở Tây Ban Nha nhiều nơi không còn di cư nữa',
  body:'Vốn bay sang châu Phi tránh đông, nhiều đàn hạc nay ở lại quanh năm vì tìm được thức ăn ổn định ở các bãi rác lớn.',
  extra:'Đây là thay đổi hành vi được ghi nhận rõ trong mấy thập niên gần đây. Khi các bãi rác lộ thiên bị đóng theo quy định môi trường, tập tính của chúng lại đang thay đổi lần nữa.',
  word:{ t:'la cigüeña', r:'θi.ɣwe.ɲa', vi:'con hạc' } },

{ lang:'es', cat:'Động vật', art:'pig', title:'Lợn đen Iberia được thả trong rừng sồi thưa',
  body:'Hệ thống chăn nuôi này gọi là dehesa: rừng sồi thưa được giữ lại để lợn, bò và cừu cùng ăn dưới tán cây.',
  extra:'Dehesa là một trong những kiểu canh tác có tuổi đời rất dài ở châu Âu, và được coi là mẫu mực về cân bằng giữa sản xuất và giữ rừng. Nó phụ thuộc vào việc không nuôi quá số con trên một diện tích.',
  word:{ t:'el cerdo', r:'θeɾ.ðo', vi:'con lợn' } },

{ lang:'es', cat:'Động vật', art:'bear', title:'Gấu nâu vẫn còn sống hoang dã ở bắc Tây Ban Nha',
  body:'Dãy Cantabria có một quần thể gấu nâu nhỏ, từng giảm xuống rất thấp và nay đang hồi phục dần.',
  extra:'Gấu cũng là con vật trên huy hiệu thành phố Madrid — một con gấu vươn lên cây dâu. Nghĩa là gấu từng sống gần thủ đô, dù nay đã hoàn toàn biến mất khỏi vùng đó.',
  word:{ t:'el oso', r:'o.so', vi:'con gấu' } },

{ lang:'es', cat:'Động vật', art:'crow', title:'Kền kền ở Tây Ban Nha được luật bảo vệ và được cho ăn',
  body:'Có những khu vực gọi là «nhà ăn kền kền», nơi xác gia súc được đưa tới để đàn kền kền có nguồn thức ăn ổn định.',
  extra:'Việc này thành cần thiết sau khi quy định vệ sinh yêu cầu thu gom xác gia súc, làm đàn kền kền mất nguồn ăn tự nhiên. Tây Ban Nha hiện giữ phần lớn số kền kền của châu Âu.',
  word:{ t:'el buitre', r:'bwi.tɾe', vi:'con kền kền' } },

{ lang:'es', cat:'Động vật', art:'chameleon', title:'Tây Ban Nha có loài tắc kè hoa châu Âu duy nhất',
  body:'Tắc kè hoa chung sống ở vùng ven biển phía nam, là một trong rất ít nơi ở châu Âu có loài này trong tự nhiên.',
  extra:'Chúng đổi màu không phải để hoà lẫn vào cảnh vật như nhiều người tưởng, mà chủ yếu để điều hoà nhiệt và báo hiệu tâm trạng với đồng loại. Màu tối thì hút nhiệt, màu nhạt thì phản nhiệt.',
  word:{ t:'el camaleón', r:'ka.ma.le.on', vi:'tắc kè hoa' } },

/* ---------------- Lịch sử (10) ---------------- */
{ lang:'es', cat:'Lịch sử', art:'monument', title:'Cung Alhambra được giữ lại vì các vua Công giáo không phá',
  body:'Sau khi Granada thất thủ năm 1492, cung điện Hồi giáo này không bị dỡ mà được dùng làm nơi ở của hoàng gia, nên tồn tại tới nay.',
  extra:'Nhờ đó Alhambra là kiến trúc Hồi giáo trung cổ được bảo tồn tốt nhất ở châu Âu. Một phần cung sau đó bị phá để xây một dinh kiểu Phục hưng chen vào giữa — và dinh đó thì đến nay vẫn chưa có mái.',
  word:{ t:'el palacio', r:'pa.la.θjo', vi:'cung điện' } },

{ lang:'es', cat:'Lịch sử', art:'mosque', title:'Nhà thờ lớn ở Córdoba từng là một đền thờ Hồi giáo',
  body:'Công trình có rừng cột với vòm sọc đỏ trắng của thời Hồi giáo, và ở giữa là một nhà thờ Công giáo được dựng lên vào thế kỷ XVI.',
  extra:'Tương truyền vua Carlos V khi thấy công trình đã bị cắt vào giữa đã tỏ ý hối tiếc. Câu chuyện có thể là truyền khẩu, nhưng hình ảnh hai lối kiến trúc lồng vào nhau thì là thật và rất khác thường.',
  word:{ t:'la mezquita', r:'meθ.ki.ta', vi:'đền thờ Hồi giáo' } },

{ lang:'es', cat:'Lịch sử', art:'passport', title:'Năm 1492 là một năm có ba việc lớn cùng xảy ra',
  body:'Granada thất thủ, Colombo tới châu Mỹ, và cuốn ngữ pháp tiếng Tây Ban Nha đầu tiên được in — cuốn ngữ pháp đầu tiên của một ngôn ngữ châu Âu hiện đại.',
  extra:'Cùng năm đó cũng là sắc lệnh trục xuất người Do Thái khỏi Tây Ban Nha. Nên 1492 là một mốc vừa được ghi nhớ như khởi đầu vừa gắn với một quyết định để lại hậu quả rất dài.',
  word:{ t:'la gramática', r:'ɡɾa.ma.ti.ka', vi:'ngữ pháp' } },

{ lang:'es', cat:'Lịch sử', art:'coin', title:'Đồng bạc Tây Ban Nha từng là tiền tệ thế giới',
  body:'Đồng real de a ocho được dùng ở châu Âu, châu Mỹ và cả châu Á suốt mấy trăm năm, và là tiền pháp định ở Mỹ tới giữa thế kỷ XIX.',
  extra:'Ký hiệu đô la $ được cho là bắt nguồn từ hình hai cột Hercules trên đồng bạc này. Giả thuyết này phổ biến nhưng vẫn còn tranh luận giữa các nhà nghiên cứu.',
  word:{ t:'la moneda', r:'mo.ne.ða', vi:'đồng tiền' } },

{ lang:'es', cat:'Lịch sử', art:'map', title:'Tây Ban Nha và Bồ Đào Nha từng chia thế giới bằng một đường kẻ',
  body:'Hiệp ước Tordesillas năm 1494 vạch một kinh tuyến giữa Đại Tây Dương: phía tây thuộc Tây Ban Nha, phía đông thuộc Bồ Đào Nha.',
  extra:'Đó là lý do Brazil nói tiếng Bồ Đào Nha còn cả phần còn lại của Nam Mỹ nói tiếng Tây Ban Nha. Hai nước tự thoả thuận với nhau, không hỏi ý bất kỳ dân tộc nào đang sống ở đó.',
  word:{ t:'el tratado', r:'tɾa.ta.ðo', vi:'hiệp ước' } },

{ lang:'es', cat:'Lịch sử', art:'coast', title:'Chuyến đi vòng quanh thế giới đầu tiên khởi hành từ Tây Ban Nha',
  body:'Đoàn thuyền do Magellan dẫn đầu rời Sevilla năm 1519. Magellan chết giữa đường, và Elcano là người đưa con thuyền còn lại về đích năm 1522.',
  extra:'Khi về tới nhà, họ phát hiện nhật ký trên thuyền lệch một ngày so với trên bờ — bằng chứng thực nghiệm đầu tiên cho thấy đi vòng quanh Trái Đất thì mất hoặc được một ngày.',
  word:{ t:'el viaje', r:'bja.xe', vi:'chuyến đi' } },

{ lang:'es', cat:'Lịch sử', art:'book', title:'Don Quijote thường được coi là tiểu thuyết hiện đại đầu tiên',
  body:'Cervantes xuất bản phần đầu năm 1605. Sách nhại lại truyện hiệp sĩ, nhưng làm điều mới: nhân vật tự ý thức mình đang ở trong một câu chuyện.',
  extra:'Ở phần hai, các nhân vật đã đọc phần một và biết mình nổi tiếng. Cerventes còn cho họ phản ứng với một bản nhại do người khác viết trong lúc ông chưa xong sách của mình.',
  word:{ t:'la novela', r:'no.βe.la', vi:'tiểu thuyết' } },

{ lang:'es', cat:'Lịch sử', art:'letter', title:'Tây Ban Nha giữ toàn bộ hồ sơ về châu Mỹ trong một toà nhà ở Sevilla',
  body:'Archivo General de Indias lưu hàng chục nghìn mét giá tài liệu về thuộc địa, từ thư từ hành chính tới bản đồ và sổ tàu.',
  extra:'Đây là nguồn tài liệu gốc không thể thay thế cho sử học toàn bộ Mỹ Latinh. Nhiều nhà nghiên cứu từ khắp châu Mỹ vẫn phải sang Sevilla để tra chính sử nước mình.',
  word:{ t:'el archivo', r:'aɾ.tʃi.βo', vi:'văn khố' } },

{ lang:'es', cat:'Lịch sử', art:'podium', title:'Tây Ban Nha có một cuộc nội chiến mà cả thế giới tham gia',
  body:'Cuộc chiến 1936–1939 thu hút tình nguyện viên từ hàng chục nước ở cả hai phía, và được nhiều bên dùng làm nơi thử nghiệm vũ khí, chiến thuật.',
  extra:'Bức Guernica của Picasso vẽ về vụ oanh tạc một thị trấn Basque trong cuộc chiến này. Tranh được giữ ở New York nhiều năm và chỉ về Tây Ban Nha sau khi nước này trở lại chế độ dân chủ.',
  word:{ t:'la guerra', r:'ɡe.ra', vi:'chiến tranh' } },

{ lang:'es', cat:'Lịch sử', art:'library', title:'Một số học giả Tây Ban Nha thế kỷ XVI đã tranh luận về quyền của người bản địa',
  body:'Cuộc tranh luận ở Valladolid giữa Las Casas và Sepúlveda bàn đúng câu hỏi: người bản địa châu Mỹ có quyền tự nhiên như mọi người khác hay không.',
  extra:'Las Casas lập luận là có. Cuộc tranh luận không thay đổi ngay thực tế trên thuộc địa, nhưng được nhiều nhà nghiên cứu xem là một trong những gốc rễ xa của tư tưởng nhân quyền và luật quốc tế.',
  word:{ t:'el derecho', r:'de.ɾe.tʃo', vi:'quyền; luật' } },

/* ---------------- Văn hoá (12) ---------------- */
{ lang:'es', cat:'Văn hoá', art:'guitar', title:'Flamenco không chỉ là múa mà là ba thứ hợp lại',
  body:'Hát, đàn ghi ta và múa. Trong ba phần đó, hát mới là cốt lõi, còn múa là thứ khán giả nước ngoài để ý nhất.',
  extra:'Tiếng vỗ tay theo nhịp gọi là palmas, và nó là một vai trò thật sự, không phải cổ vũ. Flamenco được UNESCO ghi vào danh sách di sản phi vật thể.',
  word:{ t:'el flamenco', r:'fla.meŋ.ko', vi:'nghệ thuật flamenco' } },

{ lang:'es', cat:'Văn hoá', art:'guitar', title:'Đàn ghi ta hiện đại có hình dáng do một người thợ Tây Ban Nha định ra',
  body:'Antonio de Torres vào thế kỷ XIX đã chuẩn hoá kích thước thùng đàn và cách đặt nan bên trong. Ghi ta cổ điển ngày nay vẫn theo mẫu đó.',
  extra:'Thay đổi lớn của ông là làm thùng to hơn và mặt đàn mỏng hơn, cho tiếng vang đủ lớn để chơi trong phòng hoà nhạc. Trước đó ghi ta là nhạc cụ chỉ chơi trong phòng nhỏ.',
  word:{ t:'la guitarra', r:'ɡi.ta.ra', vi:'đàn ghi ta' } },

{ lang:'es', cat:'Văn hoá', art:'library', title:'Bảo tàng Prado giữ bức tranh có người xem đứng ở đâu cũng khó nói',
  body:'Bức Las Meninas của Velázquez đặt người xem vào đúng vị trí của cặp vua và hoàng hậu đang được vẽ — nhưng ta chỉ thấy họ qua một tấm gương ở phía sau.',
  extra:'Chính hoạ sĩ cũng đứng trong tranh, trước giá vẽ, nhìn ra phía ta. Bức này được bàn luận không dứt suốt mấy trăm năm, và là một trong những tranh được phân tích nhiều nhất trong lịch sử hội hoạ.',
  word:{ t:'el cuadro', r:'kwa.ðɾo', vi:'bức tranh' } },

{ lang:'es', cat:'Văn hoá', art:'football', title:'Trận Real Madrid gặp Barcelona được gọi là «kinh điển»',
  body:'El Clásico là một trong những trận đấu được xem nhiều nhất thế giới, và mang theo cả một lịch sử đối đầu vượt ra ngoài bóng đá.',
  extra:'Barça có khẩu hiệu «hơn cả một câu lạc bộ», gắn với bản sắc Catalonia. Điểm lạ của cả hai đội là chúng thuộc sở hữu của hội viên, chứ không có chủ tư nhân — các hội viên bầu ra chủ tịch.',
  word:{ t:'el partido', r:'paɾ.ti.ðo', vi:'trận đấu' } },

{ lang:'es', cat:'Văn hoá', art:'football', title:'Bóng đá Tây Ban Nha có một lối chơi được gọi tên riêng',
  body:'Tiki-taka là lối chơi dựa trên chuỗi đường ban ngắn liên tục để giữ bóng, được gắn với Barcelona và đội tuyển Tây Ban Nha giai đoạn 2008–2012.',
  extra:'Nền tảng của nó là lò đào tạo La Masia, nơi cầu thủ được dạy cùng một triết lý từ nhỏ. Nhiều nước sau đó cố sao chép, nhưng phần khó nhất lại là hệ thống đào tạo, không phải chiến thuật.',
  word:{ t:'el balón', r:'ba.lon', vi:'quả bóng' } },

{ lang:'es', cat:'Văn hoá', art:'book', title:'Tây Ban Nha có ngày tặng sách và tặng hoa hồng',
  body:'Ngày 23 tháng 4 ở Catalonia, người ta tặng nhau sách và hoa hồng. Đường phố Barcelona kín sạp sách suốt ngày đó.',
  extra:'Ngày này trùng với ngày mất của Cervantes và của Shakespeare, và chính từ đó mà UNESCO chọn 23 tháng 4 làm Ngày Sách Thế giới. Nghĩa là một tục lệ địa phương đã thành ngày kỷ niệm toàn cầu.',
  word:{ t:'el libro', r:'li.βɾo', vi:'quyển sách' } },

{ lang:'es', cat:'Văn hoá', art:'podium', title:'Điện ảnh Tây Ban Nha có đạo diễn dựng cả một tông màu riêng',
  body:'Phim của Almodóvar nổi tiếng vì màu đỏ rực, bối cảnh Madrid và những nhân vật nữ ở trung tâm câu chuyện.',
  extra:'Giải thưởng điện ảnh quốc gia của Tây Ban Nha là giải Goya, đặt theo tên hoạ sĩ Francisco de Goya. Điện ảnh Tây Ban Nha còn nổi bật ở dòng phim kinh dị và phim tâm lý.',
  word:{ t:'la película', r:'pe.li.ku.la', vi:'bộ phim' } },

{ lang:'es', cat:'Văn hoá', art:'monument', title:'Gaudí gần như không dùng đường thẳng',
  body:'Kiến trúc của ông dựa trên hình dạng tìm thấy trong tự nhiên: cột như thân cây, mái như vảy, vòm theo dạng dây treo lộn ngược.',
  extra:'Ông thiết kế bằng mô hình dây và túi cát treo ngược, rồi soi gương để thấy hình vòm chịu lực. Cách làm này cho ra những vòm chỉ chịu nén, không cần trụ đỡ bên ngoài.',
  word:{ t:'la arquitectura', r:'aɾ.ki.tek.tu.ɾa', vi:'kiến trúc' } },

{ lang:'es', cat:'Văn hoá', art:'nametag', title:'Giải văn học tiếng Tây Ban Nha lớn nhất mang tên Cervantes',
  body:'Giải Cervantes được trao cho một nhà văn viết bằng tiếng Tây Ban Nha, không phân biệt quốc tịch, và được xem là giải cao nhất của cả không gian ngôn ngữ này.',
  extra:'Giải thường được trao luân phiên giữa nhà văn Tây Ban Nha và nhà văn Mỹ Latinh, dù đó là thông lệ chứ không phải quy định. Lễ trao diễn ra ở Alcalá de Henares, quê Cervantes.',
  word:{ t:'el escritor', r:'es.kɾi.toɾ', vi:'nhà văn' } },

{ lang:'es', cat:'Văn hoá', art:'terrace', title:'Tây Ban Nha có nhà hàng liên tục hoạt động lâu nhất thế giới',
  body:'Một nhà hàng ở Madrid mở từ năm 1725 và được ghi nhận là nhà hàng cổ nhất còn hoạt động không ngắt quãng.',
  extra:'Lò nướng củi trong đó được nói là chưa từng tắt lửa. Bếp lò thường xuyên duy trì là chuyện có thật ở các lò nướng cũ, vì làm nguội rồi nhóm lại làm nứt gạch chịu nhiệt.',
  word:{ t:'el restaurante', r:'res.tau̯.ɾan.te', vi:'nhà hàng' } },

{ lang:'es', cat:'Văn hoá', art:'map', title:'Đường hành hương Santiago có từ thời trung cổ và vẫn đông người đi',
  body:'Camino de Santiago gồm nhiều tuyến dẫn về Santiago de Compostela ở tây bắc. Nhiều người đi vì tôn giáo, nhiều người đi vì muốn đi bộ dài ngày.',
  extra:'Muốn nhận giấy chứng nhận thì phải đi bộ ít nhất một trăm cây số cuối và đóng dấu vào sổ dọc đường. Vỏ sò là dấu hiệu nhận biết của người hành hương từ xưa.',
  word:{ t:'el camino', r:'ka.mi.no', vi:'con đường' } },

{ lang:'es', cat:'Văn hoá', art:'stamp', title:'Tây Ban Nha có mạng lưới nhà nghỉ đặt trong lâu đài và tu viện cũ',
  body:'Hệ thống parador do nhà nước lập, biến các công trình lịch sử thành khách sạn để có tiền duy tu chúng.',
  extra:'Mô hình này giải được bài toán khó: công trình cổ cần tiền bảo dưỡng liên tục, mà để trống thì hỏng nhanh hơn. Một số parador nằm trong lâu đài thời trung cổ thật, không phải bản dựng lại.',
  word:{ t:'el parador', r:'pa.ɾa.ðoɾ', vi:'nhà nghỉ lịch sử' } },

/* ---------------- Thói quen (12) ---------------- */
{ lang:'es', cat:'Thói quen', art:'kissgreet', title:'Người Tây Ban Nha chào nhau bằng hai nụ hôn lên má',
  body:'Giữa nữ với nữ, và nam với nữ, hai bên chạm má phải rồi má trái. Nam với nam thì bắt tay hoặc vỗ vai.',
  extra:'Thứ tự bên má cũng có quy ước: bắt đầu từ bên phải của mình. Người Pháp thì tuỳ vùng mà hai, ba hay bốn cái, còn Tây Ban Nha thì rất nhất quán là hai.',
  word:{ t:'el beso', r:'be.so', vi:'nụ hôn (chào)' } },

{ lang:'es', cat:'Thói quen', art:'loudvoice', title:'Người Tây Ban Nha nói to và đó không phải là tranh cãi',
  body:'Âm lượng trong quán và ngoài phố rất lớn, nhiều người nói cùng lúc, chen ngang là bình thường. Đây là cách trò chuyện, không phải xung đột.',
  extra:'Chen lời ở Tây Ban Nha thường được hiểu là dấu hiệu bạn đang hào hứng tham gia. Người Bắc Âu và người Á Đông thường mất một thời gian mới quen được với nhịp này.',
  word:{ t:'la conversación', r:'kom.beɾ.sa.θjon', vi:'cuộc trò chuyện' } },

{ lang:'es', cat:'Thói quen', art:'square', title:'Người Tây Ban Nha đi bộ buổi tối như một hoạt động riêng',
  body:'Dar un paseo — đi dạo không có mục đích gì cụ thể, thường sau bữa ăn, quanh quảng trường hoặc dọc phố chính.',
  extra:'Ở thị trấn nhỏ thì đây là dịp gặp cả làng. Kiến trúc thành phố Tây Ban Nha cũng phục vụ việc này: quảng trường trung tâm luôn có ghế, có bóng mát và có quán mở ra phía đó.',
  word:{ t:'el paseo', r:'pa.se.o', vi:'cuộc đi dạo' } },

{ lang:'es', cat:'Thói quen', art:'coin', title:'Ở Tây Ban Nha, cả nhóm thường chia đều tiền chứ không tính riêng',
  body:'Cuối bữa người ta chia tổng hoá đơn cho số người, không cộng riêng phần ai gọi gì. Cách này gọi là pagar a escote.',
  extra:'Cũng có thói quen một người trả cả bàn rồi lần sau người khác trả — invitar. Đòi tính riêng từng món có thể bị coi là khô khan, dù ở thành phố lớn ngày nay chuyện này dễ chấp nhận hơn.',
  word:{ t:'la cuenta', r:'kwen.ta', vi:'hoá đơn' } },

{ lang:'es', cat:'Thói quen', art:'mealorder', title:'Bữa trưa là bữa chính trong ngày ở Tây Ban Nha',
  body:'La comida ăn vào khoảng hai, ba giờ chiều, gồm nhiều món và là bữa nặng nhất. Bữa tối thì nhẹ hơn dù ăn muộn.',
  extra:'Nhiều nhà hàng có menú del día: một bữa trưa cố định gồm món đầu, món chính, bánh ngọt và đồ uống, với giá rất phải chăng. Đây là cách ăn trưa của người đi làm, không phải món dành cho khách du lịch.',
  word:{ t:'la comida', r:'ko.mi.ða', vi:'bữa trưa; đồ ăn' } },

{ lang:'es', cat:'Thói quen', art:'apartment', title:'Người Tây Ban Nha phần lớn sống trong chung cư',
  body:'Tỷ lệ sống trong nhà căn hộ ở Tây Ban Nha thuộc nhóm cao nhất châu Âu, kể cả ở thị trấn nhỏ. Nhà riêng lẻ ít phổ biến hơn nhiều so với Bắc Âu hay Mỹ.',
  extra:'Điều đó khiến đời sống diễn ra nhiều ngoài đường: quảng trường và quán là phòng khách nối dài. Ban công cũng là một không gian sống thật, không chỉ để phơi đồ.',
  word:{ t:'el piso', r:'pi.so', vi:'căn hộ; sàn nhà' } },

{ lang:'es', cat:'Thói quen', art:'coffee', title:'Cà phê sữa ở Tây Ban Nha có tên riêng theo tỷ lệ sữa',
  body:'Café solo là espresso không sữa, cortado là thêm chút sữa, café con leche là nửa nửa, và manchada thì gần như toàn sữa.',
  extra:'Gọi đúng tên là cách nhanh nhất để không bị nhận ra là người mới. Ở miền nam còn có thêm vài mức nữa, và ở Valencia người ta gọi tên khác hẳn — nên phải hỏi tại chỗ.',
  word:{ t:'el cortado', r:'koɾ.ta.ðo', vi:'cà phê thêm chút sữa' } },

{ lang:'es', cat:'Thói quen', art:'letter', title:'Người Tây Ban Nha hay hẹn giờ rộng và đến muộn một chút',
  body:'Với hẹn gặp bạn bè, tới sau giờ hẹn mươi mười lăm phút là bình thường. Nhưng hẹn công việc và hẹn bác sĩ thì đúng giờ.',
  extra:'Ranh giới giữa hai loại hẹn này chặt hơn nhiều người nghĩ. Đi trễ vào cuộc họp hay lớp học ở Tây Ban Nha vẫn bị coi là thiếu chuyên nghiệp như mọi nơi khác.',
  word:{ t:'la cita', r:'θi.ta', vi:'cuộc hẹn' } },

{ lang:'es', cat:'Thói quen', art:'nametag', title:'Người Tây Ban Nha gọi người lớn tuổi bằng tên riêng',
  body:'Cách gọi don hay doña kèm tên vẫn còn nhưng đã rất trang trọng và ít dùng trong đời thường. Phần lớn người ta gọi thẳng tên riêng.',
  extra:'Trong trường, học sinh nhiều nơi gọi giáo viên bằng tên riêng chứ không kèm họ. Với người Việt thì đây là điểm cần thời gian để quen, vì thang bậc xưng hô của ta chi tiết hơn nhiều.',
  word:{ t:'don / doña', r:'don / do.ɲa', vi:'ông / bà (trang trọng)' } },

{ lang:'es', cat:'Thói quen', art:'phone', title:'Người Tây Ban Nha bắt điện thoại bằng chữ «¿Diga?»',
  body:'Nghĩa đúng là «nói đi». Cũng có người nói «¿Dígame?» — «hãy nói cho tôi». Cả hai đều là cách bắt máy thông thường.',
  extra:'Mỗi ngôn ngữ có một quy ước riêng cho việc này: người Ý nói «pronto» (sẵn rồi), người Nga nói «слушаю» (tôi đang nghe). Không cái nào dịch thẳng thành «xin chào».',
  word:{ t:'¿Diga?', r:'di.ɣa', vi:'a-lô (nghe điện thoại)' } },

{ lang:'es', cat:'Thói quen', art:'trash', title:'Ở nhiều thị trấn Tây Ban Nha, rác được đổ vào thùng chung ngoài phố',
  body:'Thay vì thu gom tận cửa, người dân mang rác ra các thùng lớn phân loại đặt ở đầu phố, thường vào buổi tối.',
  extra:'Mỗi màu thùng một loại: vàng cho nhựa và vỏ hộp, xanh dương cho giấy, xanh lá cho thuỷ tinh. Đổ sai màu ở một số nơi có thể bị nhắc hoặc bị phạt.',
  word:{ t:'la basura', r:'ba.su.ɾa', vi:'rác' } },

{ lang:'es', cat:'Thói quen', art:'apartment', title:'Người Tây Ban Nha thường không cởi giày khi vào nhà',
  body:'Khác với Việt Nam, Nhật hay Nga, ở Tây Ban Nha vào nhà vẫn để giày là bình thường, dù mỗi gia đình có thể có lệ riêng.',
  extra:'Nhưng đi chân đất trong nhà lại bị nhiều người coi là không tốt cho sức khoẻ, nên thường có dép trong nhà. Cách an toàn nhất khi được mời tới nhà là quan sát chủ nhà rồi làm theo.',
  word:{ t:'los zapatos', r:'θa.pa.tos', vi:'đôi giày' } },

/* ---------------- Lễ hội (10) ---------------- */
{ lang:'es', cat:'Lễ hội', art:'bull', title:'Hội chạy bò ở Pamplona chỉ kéo dài vài phút mỗi buổi',
  body:'Đường chạy dài chưa tới một cây số và thường xong trong vòng ba, bốn phút. Hội San Fermín diễn ra vào tháng 7, mỗi sáng một lượt chạy.',
  extra:'Hemingway đã viết về hội này và làm nó nổi tiếng toàn thế giới. Mỗi năm đều có người bị thương, và có nhiều quy định về ai được vào đường chạy.',
  word:{ t:'el encierro', r:'en.θje.ro', vi:'cuộc chạy bò' } },

{ lang:'es', cat:'Lễ hội', art:'bonfire', title:'Ở Valencia, lễ hội kết thúc bằng việc đốt các tượng khổng lồ',
  body:'Hội Fallas dựng những tượng giấy bồi cao như nhà nhiều tầng ở khắp các khu phố, rồi vào đêm cuối tháng 3 đốt hết.',
  extra:'Tượng thường châm biếm chuyện thời sự trong năm. Mỗi khu phố làm một tượng và cạnh tranh nhau, chỉ một tượng thắng giải được giữ lại cho bảo tàng, còn lại cháy hết.',
  word:{ t:'la fiesta', r:'fjes.ta', vi:'lễ hội' } },

{ lang:'es', cat:'Lễ hội', art:'paella', title:'Có một lễ hội ở Tây Ban Nha mà cả thị trấn ném cà chua vào nhau',
  body:'La Tomatina diễn ra ở Buñol vào tháng 8. Nhiều tấn cà chua chín quá không bán được sẽ được dùng để ném trong khoảng một giờ.',
  extra:'Có luật riêng: phải bóp nát quả trước khi ném, và dừng ngay khi có tín hiệu kết thúc. Sau đó xe cứu hoả xịt rửa cả phố, và đường đá được cho là sạch hơn trước nhờ axit trong cà chua.',
  word:{ t:'el tomate', r:'to.ma.te', vi:'quả cà chua' } },

{ lang:'es', cat:'Lễ hội', art:'crown', title:'Ở Tây Ban Nha, quà Giáng sinh do Ba Vua mang tới, không phải ông già Noel',
  body:'Trẻ em nhận quà vào sáng mùng 6 tháng 1, sau đêm Ba Vua. Tối mùng 5 có đoàn diễu hành ném bánh kẹo xuống hai bên đường.',
  extra:'Trẻ để giày ra ngoài cửa hoặc ngoài ban công cho Ba Vua đặt quà vào. Ai không ngoan thì theo lệ sẽ nhận được than — nay thay bằng một cục kẹo đen hình than.',
  word:{ t:'los Reyes Magos', r:'re.jes ma.ɣos', vi:'Ba Vua' } },

{ lang:'es', cat:'Lễ hội', art:'lotterydraw', title:'Xổ số Giáng sinh Tây Ban Nha do trẻ em xướng số bằng cách hát',
  body:'Học sinh một trường ở Madrid lần lượt hát lên số vé và số tiền trúng. Buổi rút thăm kéo dài nhiều giờ và được truyền hình trực tiếp.',
  extra:'Cách chơi cũng khác: nhiều người mua chung một vé rồi chia nhau, nên cả một cơ quan hay cả một làng có thể cùng trúng. Giải lớn nhất gọi là El Gordo — «cái béo».',
  word:{ t:'la lotería', r:'lo.te.ɾi.a', vi:'xổ số' } },

{ lang:'es', cat:'Lễ hội', art:'ring', title:'Tuần Thánh ở Sevilla có các đoàn rước kéo dài suốt đêm',
  body:'Semana Santa gồm những đoàn rước tượng trên bệ nặng hàng tấn, do mấy chục người đội trên vai, đi qua phố suốt nhiều giờ.',
  extra:'Người đội bệ gọi là costalero và đi trong tối, không thấy đường, chỉ theo tiếng gõ chỉ huy. Đây là dịp nghiêm trang, khác hẳn không khí vui nhộn của các hội khác trong năm.',
  word:{ t:'la procesión', r:'pɾo.θe.sjon', vi:'đoàn rước' } },

{ lang:'es', cat:'Lễ hội', art:'tent', title:'Hội tháng Tư ở Sevilla diễn ra trong một thành phố lều dựng tạm',
  body:'Feria de Abril dựng cả một khu hàng nghìn lều bạt sọc, nơi các gia đình và hội nhóm tiếp khách, ăn uống và múa sevillanas cả tuần.',
  extra:'Phần lớn lều là của riêng từng nhóm, phải có người quen mới vào được. Khách du lịch thường không biết điều này và bất ngờ khi thấy mình không tự nhiên bước vào được.',
  word:{ t:'la feria', r:'fe.ɾja', vi:'hội chợ, hội làng' } },

{ lang:'es', cat:'Lễ hội', art:'bonfire', title:'Ở Tây Ban Nha có lễ hội nhảy qua lửa vào đêm hè',
  body:'Đêm San Juan cuối tháng 6, người ta đốt lửa trên bãi biển, nhảy qua đống lửa và nhảy qua sóng biển để cầu may.',
  extra:'Đây là một trong nhiều lễ hội châu Âu quanh ngày hạ chí, có gốc xa hơn cả Cơ Đốc giáo. Người ta cũng viết điều muốn bỏ lại vào giấy rồi đốt trong lửa.',
  word:{ t:'la hoguera', r:'o.ɣe.ɾa', vi:'đống lửa' } },

{ lang:'es', cat:'Lễ hội', art:'carnival', title:'Bilbao có hội hoá trang tháng Hai với những nhân vật đầu to',
  body:'Ở Carnaval nhiều nơi có gigantes y cabezudos — người khổng lồ và người đầu to, những hình nộm được người mặc vào rồi đi trong đám rước.',
  extra:'Truyền thống này có ở cả Tây Ban Nha và Bồ Đào Nha, và mỗi thị trấn giữ những hình nộm riêng, đôi khi cả trăm năm tuổi. Người đầu to thường có nhiệm vụ trêu và đuổi trẻ con trong đám rước.',
  word:{ t:'el carnaval', r:'kaɾ.na.βal', vi:'hội hoá trang' } },

{ lang:'es', cat:'Lễ hội', art:'volcano', title:'Quần đảo Canaria có hội hoá trang lớn ngang Rio',
  body:'Carnaval ở Santa Cruz de Tenerife và Las Palmas là những hội hoá trang lớn nhất châu Âu, với trang phục và sân khấu quy mô lớn.',
  extra:'Có cả một nghi thức kết thúc gọi là «chôn cá mòi»: một hình cá khổng lồ được rước đi rồi đốt, đánh dấu hết hội. Các đảo kết nối với Mỹ Latinh rất chặt, và hội hoá trang ở đây mang rõ dấu ấn đó.',
  word:{ t:'el disfraz', r:'dis.fɾaθ', vi:'trang phục hoá trang' } }
  );
})();
