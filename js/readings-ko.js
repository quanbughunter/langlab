/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG HÀN (mở rộng)
   ------------------------------------------------------------
   Chỉ giữ mức Sơ cấp 1 · Sơ cấp 2 · Trung cấp 1 (tương đương A1–B1):
   bài đọc là để học từ trong ngữ cảnh, không phải để thử thách.
   Đẩy thêm vào mảng READINGS của js/readings.js (nạp SAU tệp đó).
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'편의점에서', vi:'Ở cửa hàng tiện lợi',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: mua đồ, giá tiền, câu hỏi lịch sự thường ngày.',
  text:[
    '저는 매일 아침 편의점에 갑니다. 집에서 아주 가깝습니다.',
    '오늘은 우유하고 삼각김밥을 샀습니다. 다 해서 삼천 원입니다.',
    '직원이 “봉투 필요하세요?”라고 물었습니다. 저는 “아니요, 괜찮습니다”라고 대답했습니다.',
    '학교까지 걸어가면서 김밥을 먹습니다. 아침이 아주 짧지만 기분은 좋습니다.'
  ],
  tr:[
    'Tôi đến cửa hàng tiện lợi mỗi sáng. Nó rất gần nhà tôi.',
    'Hôm nay tôi mua sữa và cơm nắm tam giác. Tất cả là ba nghìn won.',
    'Nhân viên hỏi: “Anh có cần túi không ạ?” Tôi trả lời: “Không, không cần đâu ạ.”',
    'Tôi vừa đi bộ đến trường vừa ăn cơm nắm. Buổi sáng rất ngắn nhưng tâm trạng thì tốt.'
  ],
  keys:[
    { w:'편의점', r:'pyeon-ui-jeom', vi:'cửa hàng tiện lợi' },
    { w:'가깝다', r:'gakkapda', vi:'gần' },
    { w:'다 해서', r:'da haeseo', vi:'tất cả là' },
    { w:'직원', r:'jigwon', vi:'nhân viên' },
    { w:'봉투', r:'bongtu', vi:'túi đựng' },
    { w:'괜찮다', r:'gwaenchanta', vi:'không sao, ổn' },
    { w:'-(으)면서', r:'-(eu)myeonseo', vi:'vừa… vừa…', note:'걸어가면서 먹다 — vừa đi vừa ăn' },
    { w:'기분', r:'gibun', vi:'tâm trạng' }
  ],
  qs:[
    { q:'Người viết mua gì?', o:['Cà phê và bánh mì','Sữa và cơm nắm tam giác','Mì ly','Nước và kẹo'], c:1, e:'우유하고 삼각김밥을 샀습니다.' },
    { q:'Hết bao nhiêu tiền?', o:['1.000 won','2.000 won','3.000 won','5.000 won'], c:2, e:'다 해서 삼천 원입니다.' },
    { q:'Người viết trả lời nhân viên thế nào?', o:['Xin một cái túi','Không cần túi','Xin hai cái túi','Không trả lời'], c:1, e:'아니요, 괜찮습니다.' }
  ],
  after:'Viết 4 câu về buổi sáng của bạn, dùng -(으)면서 ít nhất một lần.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Gia đình', title:'우리 가족', vi:'Gia đình tôi',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: thành viên gia đình, nghề nghiệp, 있다/없다.',
  text:[
    '우리 가족은 네 명입니다. 아버지, 어머니, 남동생 그리고 저입니다.',
    '아버지는 회사원이고 어머니는 간호사입니다. 두 분 다 아주 바쁩니다.',
    '남동생은 고등학생입니다. 축구를 아주 좋아해서 주말마다 운동장에 갑니다.',
    '저는 형이나 누나가 없습니다. 그래서 가끔 심심하지만 가족이 모이면 집이 시끄럽습니다.'
  ],
  tr:[
    'Gia đình tôi có bốn người. Bố, mẹ, em trai và tôi.',
    'Bố là nhân viên công ty còn mẹ là y tá. Cả hai đều rất bận.',
    'Em trai tôi là học sinh cấp ba. Em rất thích bóng đá nên cuối tuần nào cũng ra sân vận động.',
    'Tôi không có anh trai hay chị gái. Vì thế thỉnh thoảng thấy buồn chán, nhưng khi cả nhà tụ họp thì nhà lại ồn ào.'
  ],
  keys:[
    { w:'가족', r:'gajok', vi:'gia đình' },
    { w:'회사원', r:'hoesawon', vi:'nhân viên công ty' },
    { w:'간호사', r:'ganhosa', vi:'y tá' },
    { w:'고등학생', r:'godeunghaksaeng', vi:'học sinh cấp ba' },
    { w:'-마다', r:'-mada', vi:'mỗi', note:'주말마다 — cuối tuần nào cũng' },
    { w:'없다', r:'eopda', vi:'không có' },
    { w:'심심하다', r:'simsimhada', vi:'buồn chán' },
    { w:'시끄럽다', r:'sikkeureopda', vi:'ồn ào' }
  ],
  qs:[
    { q:'Gia đình có mấy người?', o:['Ba','Bốn','Năm','Sáu'], c:1, e:'우리 가족은 네 명입니다.' },
    { q:'Mẹ làm nghề gì?', o:['Giáo viên','Y tá','Nhân viên công ty','Bác sĩ'], c:1, e:'어머니는 간호사입니다.' },
    { q:'Em trai thích gì?', o:['Bóng rổ','Bóng đá','Bơi lội','Chơi game'], c:1, e:'축구를 아주 좋아해서…' }
  ],
  after:'Giới thiệu gia đình bạn bằng 4 câu, dùng -이고 để nối hai câu.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'주말에 뭐 해요?', vi:'Cuối tuần bạn làm gì?',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: hoạt động cuối tuần, thì tương lai -(으)ㄹ 거예요.',
  text:[
    '토요일 아침에는 늦게 일어나요. 보통 열 시쯤 일어나요.',
    '오후에는 친구를 만나요. 같이 커피를 마시고 이야기를 많이 해요.',
    '일요일에는 방을 청소하고 빨래를 해요. 그리고 다음 주 수업을 준비해요.',
    '이번 주말에는 한강에 갈 거예요. 날씨가 좋으면 자전거도 탈 거예요.'
  ],
  tr:[
    'Sáng thứ bảy tôi dậy muộn. Thường thì khoảng mười giờ mới dậy.',
    'Buổi chiều tôi gặp bạn. Chúng tôi cùng uống cà phê và nói chuyện nhiều.',
    'Chủ nhật tôi dọn phòng và giặt đồ. Rồi chuẩn bị bài cho tuần sau.',
    'Cuối tuần này tôi sẽ đi sông Hàn. Nếu thời tiết đẹp thì tôi sẽ đạp xe nữa.'
  ],
  keys:[
    { w:'늦게', r:'neutge', vi:'muộn' },
    { w:'-쯤', r:'-jjeum', vi:'khoảng', note:'열 시쯤 — khoảng mười giờ' },
    { w:'만나다', r:'mannada', vi:'gặp' },
    { w:'청소하다', r:'cheongsohada', vi:'dọn dẹp' },
    { w:'빨래', r:'ppallae', vi:'việc giặt giũ' },
    { w:'준비하다', r:'junbihada', vi:'chuẩn bị' },
    { w:'-(으)ㄹ 거예요', r:'-(eu)l geoyeyo', vi:'sẽ…', note:'갈 거예요 — sẽ đi' },
    { w:'-(으)면', r:'-(eu)myeon', vi:'nếu' }
  ],
  qs:[
    { q:'Sáng thứ bảy người viết dậy lúc nào?', o:['7 giờ','8 giờ','Khoảng 10 giờ','12 giờ'], c:2, e:'보통 열 시쯤 일어나요.' },
    { q:'Chủ nhật làm những việc gì?', o:['Gặp bạn','Dọn phòng, giặt đồ, chuẩn bị bài','Đi làm thêm','Đi sông Hàn'], c:1, e:'방을 청소하고 빨래를 해요…' },
    { q:'Cuối tuần này định đi đâu?', o:['Rạp phim','Sông Hàn','Siêu thị','Về quê'], c:1, e:'이번 주말에는 한강에 갈 거예요.' }
  ],
  after:'Viết 4 câu về kế hoạch cuối tuần của bạn, dùng -(으)ㄹ 거예요 và -(으)면.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Giao thông', title:'버스를 잘못 탔어요', vi:'Tôi lên nhầm xe buýt',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: đi lại, hỏi đường, kể chuyện quá khứ.',
  text:[
    '어제 약속에 늦을까 봐 서둘러서 버스에 탔어요. 그런데 버스가 이상한 방향으로 갔어요.',
    '옆에 앉은 아주머니께 여쭤봤어요. “이 버스 시청에 가요?” 아주머니께서 “아니요, 반대예요”라고 하셨어요.',
    '저는 다음 정류장에서 내려서 길을 건넜어요. 그리고 반대쪽에서 다시 버스를 탔어요.',
    '약속에 삼십 분 늦었지만 친구가 웃으면서 기다려 줬어요. 이제 버스 번호를 꼭 확인해요.'
  ],
  tr:[
    'Hôm qua sợ trễ hẹn nên tôi vội vàng lên xe buýt. Thế mà xe lại chạy về hướng lạ.',
    'Tôi hỏi bác gái ngồi bên cạnh: “Xe này có đi Toà thị chính không ạ?” Bác nói: “Không, ngược hướng rồi.”',
    'Tôi xuống ở bến tiếp theo rồi qua đường. Sau đó bắt lại xe buýt ở phía đối diện.',
    'Tuy trễ hẹn ba mươi phút nhưng bạn tôi vẫn cười và đợi. Từ giờ tôi luôn kiểm tra số xe thật kỹ.'
  ],
  keys:[
    { w:'-(으)ㄹ까 봐', r:'-(eu)lkka bwa', vi:'sợ rằng…', note:'늦을까 봐 — sợ bị muộn' },
    { w:'서두르다', r:'seodureuda', vi:'vội vàng' },
    { w:'방향', r:'banghyang', vi:'phương hướng' },
    { w:'여쭤보다', r:'yeojjwoboda', vi:'hỏi (kính ngữ)' },
    { w:'반대', r:'bandae', vi:'ngược lại' },
    { w:'정류장', r:'jeongnyujang', vi:'bến xe buýt' },
    { w:'건너다', r:'geonneoda', vi:'băng qua' },
    { w:'확인하다', r:'hwaginhada', vi:'kiểm tra, xác nhận' }
  ],
  qs:[
    { q:'Vì sao người viết vội?', o:['Trời mưa','Sợ trễ hẹn','Xe sắp chạy','Quên đồ'], c:1, e:'약속에 늦을까 봐 서둘러서…' },
    { q:'Bác gái nói gì?', o:['Xe đi đúng','Xe đi ngược hướng','Không biết','Phải đi tàu'], c:1, e:'아니요, 반대예요.' },
    { q:'Bài học rút ra?', o:['Không đi xe buýt nữa','Luôn kiểm tra số xe','Đi taxi cho nhanh','Ra khỏi nhà sớm hơn'], c:1, e:'이제 버스 번호를 꼭 확인해요.' }
  ],
  after:'Kể một lần bạn đi nhầm đường bằng 5 câu, dùng -(으)ㄹ까 봐 và -아/어서.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Ẩm thực', title:'한국 음식 처음 먹은 날', vi:'Ngày đầu ăn món Hàn',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: vị giác, món ăn, cảm nhận.',
  text:[
    '한국에 온 첫날, 친구가 저를 식당에 데려갔어요. 김치찌개를 주문했어요.',
    '한 숟가락 먹고 깜짝 놀랐어요. 너무 매워서 눈물이 났어요.',
    '친구가 웃으면서 물을 줬어요. “처음에는 다 그래요. 조금씩 익숙해질 거예요.”',
    '지금은 매운 음식을 잘 먹어요. 오히려 매운 게 없으면 뭔가 부족한 느낌이에요.'
  ],
  tr:[
    'Ngày đầu tiên đến Hàn Quốc, bạn tôi dẫn tôi đến quán ăn. Chúng tôi gọi canh kimchi.',
    'Ăn một thìa là tôi giật mình. Cay quá nên chảy cả nước mắt.',
    'Bạn tôi cười rồi đưa nước cho tôi. “Lúc đầu ai cũng vậy. Dần dần sẽ quen thôi.”',
    'Bây giờ tôi ăn được đồ cay. Ngược lại, không có món cay là thấy thiếu thiếu.'
  ],
  keys:[
    { w:'데려가다', r:'deryeogada', vi:'dẫn ai đi' },
    { w:'주문하다', r:'jumunhada', vi:'gọi món' },
    { w:'숟가락', r:'sutgarak', vi:'cái thìa' },
    { w:'깜짝 놀라다', r:'kkamjjak nollada', vi:'giật mình' },
    { w:'맵다', r:'maepda', vi:'cay' },
    { w:'익숙해지다', r:'iksukhaejida', vi:'trở nên quen' },
    { w:'오히려', r:'ohiryeo', vi:'ngược lại' },
    { w:'부족하다', r:'bujokhada', vi:'thiếu' }
  ],
  qs:[
    { q:'Món đầu tiên người viết ăn là gì?', o:['Bibimbap','Canh kimchi','Mì lạnh','Gà rán'], c:1, e:'김치찌개를 주문했어요.' },
    { q:'Phản ứng lúc đầu ra sao?', o:['Rất thích','Cay đến chảy nước mắt','Không ăn được vì mặn','Thấy nhạt'], c:1, e:'너무 매워서 눈물이 났어요.' },
    { q:'Bây giờ thì sao?', o:['Vẫn không ăn được cay','Ăn cay tốt, thiếu cay lại thấy thiếu','Chỉ ăn món Việt','Không ăn ngoài nữa'], c:1, e:'지금은 매운 음식을 잘 먹어요.' }
  ],
  after:'Tả món ăn bạn ấn tượng nhất bằng 5 câu, dùng -아/어서 và -(으)ㄹ 거예요.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Sức khoẻ', title:'병원에 갔어요', vi:'Tôi đã đi bệnh viện',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: triệu chứng, lời khuyên của bác sĩ.',
  text:[
    '지난주에 감기에 걸려서 병원에 갔어요. 머리가 아프고 열도 조금 있었어요.',
    '의사 선생님이 목을 보시고 말씀하셨어요. “심하지 않아요. 약을 사흘 드세요.”',
    '그리고 이렇게 말씀하셨어요. “따뜻한 물을 많이 마시고 일찍 주무세요.”',
    '약을 먹고 이틀 쉬었더니 많이 좋아졌어요. 건강이 제일 중요하다는 걸 다시 느꼈어요.'
  ],
  tr:[
    'Tuần trước tôi bị cảm nên đi bệnh viện. Đầu đau và cũng hơi sốt.',
    'Bác sĩ xem cổ họng rồi nói: “Không nặng đâu. Uống thuốc ba ngày nhé.”',
    'Rồi bác dặn thêm: “Uống nhiều nước ấm và đi ngủ sớm.”',
    'Uống thuốc và nghỉ hai ngày thì đỡ hẳn. Tôi lại thấy sức khoẻ là quan trọng nhất.'
  ],
  keys:[
    { w:'감기에 걸리다', r:'gamgie geollida', vi:'bị cảm' },
    { w:'열', r:'yeol', vi:'sốt' },
    { w:'심하다', r:'simhada', vi:'nghiêm trọng' },
    { w:'약을 먹다', r:'yageul meokda', vi:'uống thuốc', note:'tiếng Hàn dùng «ăn» thuốc' },
    { w:'따뜻하다', r:'ttatteuthada', vi:'ấm' },
    { w:'주무시다', r:'jumusida', vi:'ngủ (kính ngữ)' },
    { w:'-았/었더니', r:'-at/eotdeoni', vi:'làm… thì kết quả là…' },
    { w:'건강', r:'geongang', vi:'sức khoẻ' }
  ],
  qs:[
    { q:'Triệu chứng là gì?', o:['Đau bụng','Đau đầu và hơi sốt','Ho nhiều','Đau chân'], c:1, e:'머리가 아프고 열도 조금 있었어요.' },
    { q:'Bác sĩ dặn gì?', o:['Nhập viện','Uống thuốc 3 ngày, uống nước ấm, ngủ sớm','Tiêm thuốc','Nghỉ một tuần'], c:1, e:'약을 사흘 드세요… 따뜻한 물을 많이 마시고 일찍 주무세요.' },
    { q:'Sau hai ngày thì sao?', o:['Nặng hơn','Đỡ hẳn','Không đổi','Phải đi khám lại'], c:1, e:'이틀 쉬었더니 많이 좋아졌어요.' }
  ],
  after:'Viết đoạn hội thoại với bác sĩ 6 câu, dùng kính ngữ -(으)세요.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Đời sống', title:'자취방 구하기', vi:'Tìm phòng trọ',
  intro:'Trung cấp 1. Chùm từ trọng tâm: thuê nhà, tiền đặt cọc, so sánh lựa chọn.',
  text:[
    '학교 근처에서 자취방을 구하는 일은 생각보다 어려웠습니다. 방은 많지만 조건이 다 달랐습니다.',
    '첫 번째 방은 넓었지만 학교에서 걸어서 삼십 분이나 걸렸습니다. 두 번째 방은 가까운 대신 창문이 작았습니다.',
    '결국 세 번째 방으로 정했습니다. 보증금은 조금 비쌌지만 월세가 싸고 햇빛이 잘 들어왔습니다.',
    '계약할 때 집주인이 말했습니다. “나갈 때 방 상태를 확인합니다.” 저는 그 말을 적어 두었습니다.'
  ],
  tr:[
    'Việc tìm phòng trọ gần trường khó hơn tôi tưởng. Phòng thì nhiều nhưng điều kiện lại khác nhau cả.',
    'Phòng thứ nhất rộng nhưng đi bộ từ trường mất những ba mươi phút. Phòng thứ hai gần, bù lại cửa sổ nhỏ.',
    'Cuối cùng tôi chọn phòng thứ ba. Tiền cọc hơi đắt nhưng tiền thuê tháng rẻ và nắng vào rất tốt.',
    'Lúc ký hợp đồng chủ nhà nói: “Khi dọn đi sẽ kiểm tra tình trạng phòng.” Tôi đã ghi lại câu đó.'
  ],
  keys:[
    { w:'자취방', r:'jachwibang', vi:'phòng trọ tự nấu ăn' },
    { w:'구하다', r:'guhada', vi:'tìm kiếm (nhà, việc)' },
    { w:'조건', r:'jogeon', vi:'điều kiện' },
    { w:'-(으)ㄴ 대신', r:'-(eu)n daesin', vi:'bù lại, đổi lấy' },
    { w:'보증금', r:'bojeunggeum', vi:'tiền đặt cọc' },
    { w:'월세', r:'wolse', vi:'tiền thuê hằng tháng' },
    { w:'햇빛이 들다', r:'haetbichi deulda', vi:'nắng chiếu vào' },
    { w:'계약하다', r:'gyeyakhada', vi:'ký hợp đồng' }
  ],
  qs:[
    { q:'Nhược điểm của phòng thứ nhất?', o:['Nhỏ','Xa trường ba mươi phút đi bộ','Đắt','Tối'], c:1, e:'학교에서 걸어서 삼십 분이나 걸렸습니다.' },
    { q:'Vì sao chọn phòng thứ ba?', o:['Rẻ nhất mọi mặt','Tiền thuê tháng rẻ và nhiều nắng','Gần nhất','Chủ nhà tốt'], c:1, e:'월세가 싸고 햇빛이 잘 들어왔습니다.' },
    { q:'Chủ nhà dặn gì?', o:['Trả tiền sớm','Khi dọn đi sẽ kiểm tra tình trạng phòng','Không nuôi thú','Không mời khách'], c:1, e:'나갈 때 방 상태를 확인합니다.' }
  ],
  after:'Viết 6 câu so sánh hai chỗ ở, dùng -(으)ㄴ 대신 và -지만.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Công việc', title:'아르바이트 첫날', vi:'Ngày đầu làm thêm',
  intro:'Trung cấp 1. Chùm từ trọng tâm: công việc bán thời gian, học nghề, mắc lỗi và sửa.',
  text:[
    '카페에서 아르바이트를 시작한 첫날, 저는 아무것도 몰랐습니다. 기계 이름도 어려웠습니다.',
    '손님이 “아이스 아메리카노 한 잔이요”라고 하셨는데 저는 뜨거운 커피를 만들었습니다.',
    '사장님이 화를 내지 않고 다시 알려 주셨습니다. “처음에는 다 실수해요. 천천히 배우면 됩니다.”',
    '세 시간 뒤에는 혼자서도 주문을 받을 수 있었습니다. 집에 가는 길에 다리는 아팠지만 마음은 뿌듯했습니다.'
  ],
  tr:[
    'Ngày đầu bắt đầu làm thêm ở quán cà phê, tôi chẳng biết gì cả. Tên máy móc cũng khó.',
    'Khách nói “Cho một ly americano đá” mà tôi lại pha cà phê nóng.',
    'Ông chủ không nổi giận mà chỉ lại cho tôi. “Lúc đầu ai cũng sai. Cứ học từ từ là được.”',
    'Ba tiếng sau tôi đã tự nhận đơn được một mình. Trên đường về chân thì mỏi nhưng trong lòng thấy tự hào.'
  ],
  keys:[
    { w:'아르바이트', r:'areubaiteu', vi:'việc làm thêm' },
    { w:'아무것도', r:'amugeotdo', vi:'không gì cả' },
    { w:'실수하다', r:'silsuhada', vi:'mắc lỗi' },
    { w:'화를 내다', r:'hwareul naeda', vi:'nổi giận' },
    { w:'알려 주다', r:'allyeo juda', vi:'chỉ bảo cho' },
    { w:'-(으)면 되다', r:'-(eu)myeon doeda', vi:'chỉ cần… là được' },
    { w:'주문을 받다', r:'jumuneul batda', vi:'nhận đơn gọi món' },
    { w:'뿌듯하다', r:'ppudeutada', vi:'thấy tự hào, ấm lòng' }
  ],
  qs:[
    { q:'Người viết mắc lỗi gì?', o:['Tính nhầm tiền','Pha cà phê nóng thay vì đá','Làm vỡ ly','Đến muộn'], c:1, e:'저는 뜨거운 커피를 만들었습니다.' },
    { q:'Ông chủ phản ứng ra sao?', o:['Nổi giận','Không giận, chỉ lại cho','Trừ lương','Cho nghỉ việc'], c:1, e:'화를 내지 않고 다시 알려 주셨습니다.' },
    { q:'Sau ba tiếng thì sao?', o:['Vẫn không làm được','Tự nhận đơn được một mình','Xin nghỉ','Đổi sang việc khác'], c:1, e:'혼자서도 주문을 받을 수 있었습니다.' }
  ],
  after:'Kể ngày đầu tiên làm một việc mới bằng 6 câu, dùng -(으)면 되다 và -(으)ㄹ 수 있다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Văn hoá', title:'시장과 마트 사이', vi:'Giữa chợ và siêu thị',
  intro:'Trung cấp 1. Chùm từ trọng tâm: so sánh hai nơi mua sắm, thói quen tiêu dùng.',
  text:[
    '집 근처에는 전통 시장과 큰 마트가 모두 있습니다. 저는 두 곳을 다 이용합니다.',
    '마트는 깨끗하고 가격표가 분명합니다. 늦게까지 열고 카드도 됩니다.',
    '시장은 조금 복잡하지만 채소가 싱싱하고 값도 쌉니다. 무엇보다 아주머니들이 덤을 주십니다.',
    '급할 때는 마트에 가고 시간이 있을 때는 시장에 갑니다. 편리함과 정, 둘 다 필요한 것 같습니다.'
  ],
  tr:[
    'Gần nhà tôi có cả chợ truyền thống lẫn siêu thị lớn. Tôi dùng cả hai nơi.',
    'Siêu thị sạch sẽ và bảng giá rõ ràng. Mở đến muộn và cũng nhận thẻ.',
    'Chợ thì hơi lộn xộn nhưng rau tươi và giá cũng rẻ. Hơn hết là các cô các bác hay cho thêm.',
    'Khi vội thì tôi đi siêu thị, khi có thời gian thì đi chợ. Sự tiện lợi và cái tình, hình như cần cả hai.'
  ],
  keys:[
    { w:'전통 시장', r:'jeontong sijang', vi:'chợ truyền thống' },
    { w:'이용하다', r:'iyonghada', vi:'sử dụng' },
    { w:'가격표', r:'gagyeokpyo', vi:'bảng giá' },
    { w:'분명하다', r:'bunmyeonghada', vi:'rõ ràng' },
    { w:'싱싱하다', r:'singsinghada', vi:'tươi' },
    { w:'덤', r:'deom', vi:'phần cho thêm' },
    { w:'급하다', r:'geupada', vi:'gấp, vội' },
    { w:'정', r:'jeong', vi:'cái tình, sự gắn bó' }
  ],
  qs:[
    { q:'Ưu điểm của siêu thị?', o:['Rau tươi hơn','Sạch, giá rõ ràng, mở muộn','Rẻ hơn chợ','Được cho thêm'], c:1, e:'마트는 깨끗하고 가격표가 분명합니다.' },
    { q:'Điều gì chỉ chợ mới có?', o:['Nhận thẻ','Được cho thêm (덤)','Mở 24 giờ','Có bãi đỗ xe'], c:1, e:'아주머니들이 덤을 주십니다.' },
    { q:'Kết luận của người viết?', o:['Chỉ nên đi chợ','Cần cả tiện lợi lẫn cái tình','Siêu thị tốt hơn hẳn','Không nên đi chợ khi vội'], c:1, e:'편리함과 정, 둘 다 필요한 것 같습니다.' }
  ],
  after:'So sánh chợ và siêu thị ở Việt Nam bằng 6 câu, dùng -지만 và -(으)ㄴ 것 같다.' }

  );
})();
