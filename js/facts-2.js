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
  word:{ t:'ликбе́з', r:'likbéz', vi:'xoá mù chữ; lớp vỡ lòng' } }

  );
})();
