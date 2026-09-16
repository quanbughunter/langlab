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
  after:'So sánh chợ và siêu thị ở Việt Nam bằng 6 câu, dùng -지만 và -(으)ㄴ 것 같다.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'학교 가는 길', vi:'Đường đến trường',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: phương tiện, thời gian, trợ từ 에서 và 까지.',
  text:[
    '우리 집에서 학교까지 삼십 분쯤 걸립니다.',
    '먼저 버스를 타고, 시청에서 지하철로 갈아탑니다.',
    '아침에는 사람이 많아서 자리가 없습니다. 그래서 보통 서서 갑니다.',
    '지하철에서 저는 한국어 단어를 외웁니다. 짧은 시간이지만 아주 좋은 공부 시간입니다.'
  ],
  tr:[
    'Từ nhà tôi đến trường mất khoảng ba mươi phút.',
    'Trước tiên tôi đi xe buýt, rồi đổi sang tàu điện ngầm ở Toà thị chính.',
    'Buổi sáng đông người nên không có chỗ ngồi. Vì thế tôi thường đứng suốt.',
    'Trên tàu tôi học thuộc từ vựng tiếng Hàn. Tuy là khoảng thời gian ngắn nhưng lại rất tốt để học.'
  ],
  keys:[
    { w:'-에서 -까지', r:'-eseo -kkaji', vi:'từ… đến…' },
    { w:'걸리다', r:'geollida', vi:'mất (thời gian)' },
    { w:'갈아타다', r:'garatada', vi:'đổi tuyến, chuyển xe' },
    { w:'자리', r:'jari', vi:'chỗ ngồi' },
    { w:'서서 가다', r:'seoseo gada', vi:'đứng mà đi' },
    { w:'외우다', r:'oeuda', vi:'học thuộc' },
    { w:'짧다', r:'jjalda', vi:'ngắn' },
    { w:'보통', r:'botong', vi:'thường thì' }
  ],
  qs:[
    { q:'Đi từ nhà đến trường mất bao lâu?', o:['15 phút','Khoảng 30 phút','1 tiếng','10 phút'], c:1, e:'삼십 분쯤 걸립니다.' },
    { q:'Đổi sang tàu điện ngầm ở đâu?', o:['Trước cổng trường','Toà thị chính','Bến cuối','Gần nhà'], c:1, e:'시청에서 지하철로 갈아탑니다.' },
    { q:'Trên tàu người viết làm gì?', o:['Ngủ','Học thuộc từ vựng','Nghe nhạc','Đọc báo'], c:1, e:'한국어 단어를 외웁니다.' }
  ],
  after:'Tả đường đi học của bạn bằng 4 câu, dùng -에서 -까지 và 걸리다.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'커피숍에서', vi:'Ở quán cà phê',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: gọi đồ uống, chọn nóng lạnh, câu hỏi -(으)ㄹ까요?',
  text:[
    '수업이 끝나고 친구하고 커피숍에 갔습니다.',
    '저는 따뜻한 아메리카노를 시키고 친구는 아이스 라테를 시켰습니다.',
    '친구가 물었습니다. “케이크도 시킬까요?” 저는 “좋아요”라고 했습니다.',
    '창가 자리에 앉아서 두 시간 동안 이야기했습니다. 밖에는 비가 왔지만 안은 따뜻했습니다.'
  ],
  tr:[
    'Tan học xong tôi đi quán cà phê với bạn.',
    'Tôi gọi americano nóng còn bạn tôi gọi latte đá.',
    'Bạn hỏi: “Gọi cả bánh nữa nhé?” Tôi nói: “Được đấy.”',
    'Chúng tôi ngồi chỗ cạnh cửa sổ và nói chuyện suốt hai tiếng. Bên ngoài trời mưa nhưng bên trong thì ấm.'
  ],
  keys:[
    { w:'끝나다', r:'kkeutnada', vi:'kết thúc' },
    { w:'시키다', r:'sikida', vi:'gọi (món)' },
    { w:'따뜻하다', r:'ttatteuthada', vi:'ấm' },
    { w:'-(으)ㄹ까요?', r:'-(eu)lkkayo', vi:'…nhé? (rủ rê, hỏi ý)' },
    { w:'창가', r:'changga', vi:'cạnh cửa sổ' },
    { w:'-동안', r:'-dongan', vi:'trong suốt (khoảng thời gian)' },
    { w:'밖', r:'bak', vi:'bên ngoài' },
    { w:'안', r:'an', vi:'bên trong' }
  ],
  qs:[
    { q:'Người viết gọi gì?', o:['Latte đá','Americano nóng','Trà sữa','Nước cam'], c:1, e:'따뜻한 아메리카노를 시키고…' },
    { q:'Bạn rủ gọi thêm gì?', o:['Bánh','Nước','Kem','Cà phê nữa'], c:0, e:'케이크도 시킬까요?' },
    { q:'Hai người ngồi bao lâu?', o:['30 phút','1 tiếng','2 tiếng','3 tiếng'], c:2, e:'두 시간 동안 이야기했습니다.' }
  ],
  after:'Viết hội thoại gọi đồ uống 6 câu, dùng -(으)ㄹ까요? ít nhất hai lần.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'오늘 날씨', vi:'Thời tiết hôm nay',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: bốn mùa, thời tiết, tính từ tả cảm giác.',
  text:[
    '한국의 사계절은 아주 다릅니다. 저는 가을을 제일 좋아합니다.',
    '여름에는 덥고 비가 많이 옵니다. 겨울에는 춥고 눈이 옵니다.',
    '오늘은 바람이 조금 불지만 하늘이 아주 맑습니다.',
    '이런 날에는 공원에 가고 싶습니다. 그런데 오늘은 숙제가 많아서 집에 있어야 합니다.'
  ],
  tr:[
    'Bốn mùa ở Hàn Quốc rất khác nhau. Tôi thích mùa thu nhất.',
    'Mùa hè thì nóng và mưa nhiều. Mùa đông thì lạnh và có tuyết.',
    'Hôm nay gió thổi hơi nhiều nhưng bầu trời rất trong.',
    'Ngày như thế này tôi muốn ra công viên. Nhưng hôm nay nhiều bài tập quá nên phải ở nhà.'
  ],
  keys:[
    { w:'사계절', r:'sagyejeol', vi:'bốn mùa' },
    { w:'다르다', r:'dareuda', vi:'khác nhau' },
    { w:'덥다', r:'deopda', vi:'nóng' },
    { w:'춥다', r:'chupda', vi:'lạnh' },
    { w:'바람이 불다', r:'barami bulda', vi:'gió thổi' },
    { w:'맑다', r:'makda', vi:'trong, quang' },
    { w:'-고 싶다', r:'-go sipda', vi:'muốn…' },
    { w:'-아/어야 하다', r:'-a/eoya hada', vi:'phải…' }
  ],
  qs:[
    { q:'Người viết thích mùa nào nhất?', o:['Xuân','Hè','Thu','Đông'], c:2, e:'저는 가을을 제일 좋아합니다.' },
    { q:'Hôm nay trời thế nào?', o:['Mưa','Có gió, trời trong','Có tuyết','Rất nóng'], c:1, e:'바람이 조금 불지만 하늘이 아주 맑습니다.' },
    { q:'Vì sao không ra công viên?', o:['Trời mưa','Nhiều bài tập','Bạn bận','Xa quá'], c:1, e:'숙제가 많아서 집에 있어야 합니다.' }
  ],
  after:'Tả thời tiết bốn mùa ở Việt Nam bằng 4 câu, dùng -고 và -지만.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Gia đình', title:'친구 생일', vi:'Sinh nhật bạn',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: quà, lời chúc, thì quá khứ -았/었-.',
  text:[
    '어제는 민수 씨의 생일이었습니다. 친구들이 다 모였습니다.',
    '저는 작은 선물을 준비했습니다. 한국어 책하고 예쁜 볼펜을 샀습니다.',
    '민수 씨가 “고마워요. 정말 마음에 들어요”라고 말했습니다.',
    '우리는 케이크를 먹고 노래를 불렀습니다. 아주 즐거운 저녁이었습니다.'
  ],
  tr:[
    'Hôm qua là sinh nhật anh Min-su. Bạn bè tụ họp đông đủ.',
    'Tôi chuẩn bị một món quà nhỏ. Tôi mua một quyển sách tiếng Hàn và một cây bút bi xinh.',
    'Anh Min-su nói: “Cảm ơn nhé. Mình thích lắm.”',
    'Chúng tôi ăn bánh và hát. Đó là một buổi tối rất vui.'
  ],
  keys:[
    { w:'생일', r:'saengil', vi:'sinh nhật' },
    { w:'모이다', r:'moida', vi:'tụ họp' },
    { w:'선물', r:'seonmul', vi:'món quà' },
    { w:'준비하다', r:'junbihada', vi:'chuẩn bị' },
    { w:'마음에 들다', r:'maeume deulda', vi:'vừa ý, ưng' },
    { w:'노래를 부르다', r:'noraereul bureuda', vi:'hát' },
    { w:'즐겁다', r:'jeulgeopda', vi:'vui vẻ' },
    { w:'-았/었-', r:'-at/eot-', vi:'đuôi quá khứ' }
  ],
  qs:[
    { q:'Người viết mua quà gì?', o:['Bánh','Sách tiếng Hàn và bút bi','Hoa','Áo'], c:1, e:'한국어 책하고 예쁜 볼펜을 샀습니다.' },
    { q:'Min-su nói gì?', o:['Không cần đâu','Cảm ơn, mình thích lắm','Đắt quá','Mình có rồi'], c:1, e:'고마워요. 정말 마음에 들어요.' },
    { q:'Buổi tối đó thế nào?', o:['Buồn tẻ','Rất vui','Ngắn ngủi','Ồn ào quá'], c:1, e:'아주 즐거운 저녁이었습니다.' }
  ],
  after:'Kể một buổi sinh nhật bằng 5 câu, toàn bộ dùng thì quá khứ.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Ẩm thực', title:'요리를 배워요', vi:'Học nấu ăn',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: các bước nấu ăn, trình tự, -기 전에 / -(으)ㄴ 후에.',
  text:[
    '지난 주말에 친구한테서 김밥 만드는 법을 배웠어요.',
    '먼저 밥에 소금하고 참기름을 넣고 잘 섞어요. 김을 놓기 전에 밥을 식혀야 해요.',
    '그 다음에 김 위에 밥을 얇게 펴고 당근, 계란, 햄을 올려요. 그리고 천천히 말아요.',
    '다 만든 후에 칼에 물을 조금 묻혀서 자르면 잘 잘려요. 처음이라서 모양은 별로였지만 맛은 괜찮았어요.'
  ],
  tr:[
    'Cuối tuần trước tôi học cách làm gimbap từ một người bạn.',
    'Trước tiên cho muối và dầu mè vào cơm rồi trộn đều. Trước khi đặt lá rong biển xuống thì phải để cơm nguội.',
    'Sau đó trải cơm thật mỏng lên lá rong biển rồi đặt cà rốt, trứng, giăm bông lên. Rồi cuộn từ từ.',
    'Làm xong, thấm chút nước vào dao rồi cắt thì cắt rất ngọt. Vì là lần đầu nên hình thức hơi xấu, nhưng vị thì tạm được.'
  ],
  keys:[
    { w:'-는 법', r:'-neun beop', vi:'cách làm…' },
    { w:'넣다', r:'neota', vi:'cho vào' },
    { w:'섞다', r:'seokda', vi:'trộn' },
    { w:'-기 전에', r:'-gi jeone', vi:'trước khi…' },
    { w:'식히다', r:'sikhida', vi:'để nguội' },
    { w:'펴다', r:'pyeoda', vi:'trải ra' },
    { w:'말다', r:'malda', vi:'cuộn' },
    { w:'-(으)ㄴ 후에', r:'-(eu)n hue', vi:'sau khi…' }
  ],
  qs:[
    { q:'Cho gì vào cơm?', o:['Đường và giấm','Muối và dầu mè','Nước tương','Ớt bột'], c:1, e:'밥에 소금하고 참기름을 넣고…' },
    { q:'Phải làm gì trước khi đặt lá rong biển?', o:['Rửa tay','Để cơm nguội','Cắt cà rốt','Đun nóng chảo'], c:1, e:'김을 놓기 전에 밥을 식혀야 해요.' },
    { q:'Mẹo để cắt đẹp là gì?', o:['Dùng kéo','Thấm chút nước vào dao','Cắt thật nhanh','Để lạnh rồi cắt'], c:1, e:'칼에 물을 조금 묻혀서 자르면 잘 잘려요.' }
  ],
  after:'Viết 6 bước nấu một món bạn biết, dùng -기 전에 và -(으)ㄴ 후에.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Dịch vụ', title:'은행에서', vi:'Ở ngân hàng',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: mở tài khoản, giấy tờ, câu hỏi lịch sự.',
  text:[
    '한국에 온 지 일주일 만에 은행에 가서 통장을 만들었어요.',
    '번호표를 뽑고 십 분쯤 기다렸어요. 제 차례가 되니까 직원이 여권을 보여 달라고 했어요.',
    '신청서에 이름, 주소, 전화번호를 썼어요. 한 칸은 무슨 뜻인지 몰라서 물어봤어요.',
    '직원이 친절하게 알려 줬어요. 마지막에 “비밀번호는 다른 사람한테 말하지 마세요”라고 했어요.'
  ],
  tr:[
    'Sang Hàn được đúng một tuần thì tôi ra ngân hàng làm sổ tài khoản.',
    'Tôi rút số thứ tự rồi đợi khoảng mười phút. Đến lượt tôi, nhân viên bảo cho xem hộ chiếu.',
    'Tôi điền tên, địa chỉ, số điện thoại vào đơn. Có một ô tôi không hiểu nghĩa nên đã hỏi.',
    'Nhân viên chỉ dẫn rất tận tình. Cuối cùng cô nói: “Đừng nói mật khẩu cho người khác nhé.”'
  ],
  keys:[
    { w:'통장', r:'tongjang', vi:'sổ tài khoản' },
    { w:'번호표를 뽑다', r:'beonhopyoreul ppopda', vi:'rút số thứ tự' },
    { w:'차례', r:'charye', vi:'lượt' },
    { w:'여권', r:'yeogwon', vi:'hộ chiếu' },
    { w:'신청서', r:'sincheongseo', vi:'đơn đăng ký' },
    { w:'-(으)ㄴ 지 -만에', r:'-(eu)n ji -mane', vi:'sau khi… được đúng…' },
    { w:'비밀번호', r:'bimilbeonho', vi:'mật khẩu' },
    { w:'-지 마세요', r:'-ji maseyo', vi:'xin đừng…' }
  ],
  qs:[
    { q:'Việc đầu tiên khi vào ngân hàng?', o:['Điền đơn','Rút số thứ tự','Đưa hộ chiếu','Gọi nhân viên'], c:1, e:'번호표를 뽑고 십 분쯤 기다렸어요.' },
    { q:'Nhân viên yêu cầu giấy tờ gì?', o:['Thẻ cư trú','Hộ chiếu','Bằng lái','Thẻ sinh viên'], c:1, e:'여권을 보여 달라고 했어요.' },
    { q:'Lời dặn cuối là gì?', o:['Giữ sổ cẩn thận','Đừng nói mật khẩu cho người khác','Đến lại sau một tuần','Không rút quá nhiều'], c:1, e:'비밀번호는 다른 사람한테 말하지 마세요.' }
  ],
  after:'Viết 6 câu về một lần làm thủ tục, dùng -지 마세요 và -아/어 주다.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Học tập', title:'도서관 자리', vi:'Chỗ ngồi trong thư viện',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: học bài, quy tắc nơi công cộng, than phiền nhẹ.',
  text:[
    '시험 기간에는 도서관에 자리가 없어요. 아침 여덟 시에 가도 벌써 사람이 많아요.',
    '어떤 사람은 책만 놓고 몇 시간씩 자리를 비워요. 그래서 다른 사람이 앉을 수 없어요.',
    '요즘은 도서관에서 앱으로 자리를 예약해요. 시간이 끝나면 자리가 자동으로 풀려요.',
    '규칙이 생기니까 훨씬 공평해졌어요. 저도 이제 마음 편하게 공부해요.'
  ],
  tr:[
    'Vào mùa thi thì thư viện không còn chỗ. Tám giờ sáng đến cũng đã đông người rồi.',
    'Có người chỉ đặt sách rồi bỏ chỗ trống mấy tiếng liền. Thế nên người khác không ngồi được.',
    'Dạo này thư viện cho đặt chỗ bằng ứng dụng. Hết giờ là chỗ tự động được nhả ra.',
    'Có quy định rồi nên công bằng hơn hẳn. Tôi giờ cũng học hành thoải mái hơn.'
  ],
  keys:[
    { w:'시험 기간', r:'siheom gigan', vi:'mùa thi' },
    { w:'벌써', r:'beolsseo', vi:'đã… rồi' },
    { w:'자리를 비우다', r:'jarireul biuda', vi:'bỏ trống chỗ' },
    { w:'-(으)ㄹ 수 없다', r:'-(eu)l su eopda', vi:'không thể…' },
    { w:'예약하다', r:'yeyakhada', vi:'đặt trước' },
    { w:'자동으로', r:'jadongeuro', vi:'tự động' },
    { w:'규칙', r:'gyuchik', vi:'quy tắc' },
    { w:'공평하다', r:'gongpyeonghada', vi:'công bằng' }
  ],
  qs:[
    { q:'Vấn đề cũ là gì?', o:['Thư viện đóng sớm','Có người đặt sách giữ chỗ rồi bỏ đi','Không có ổ điện','Quá ồn'], c:1, e:'책만 놓고 몇 시간씩 자리를 비워요.' },
    { q:'Cách giải quyết?', o:['Thuê bảo vệ','Đặt chỗ bằng ứng dụng','Cấm mang sách','Mở thêm phòng'], c:1, e:'앱으로 자리를 예약해요.' },
    { q:'Kết quả ra sao?', o:['Tệ hơn','Công bằng hơn hẳn','Không đổi','Ít người đến hơn'], c:1, e:'훨씬 공평해졌어요.' }
  ],
  after:'Viết 6 câu về một quy định ở trường bạn, dùng -(으)ㄹ 수 있다/없다.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Đời sống', title:'택배를 보냈어요', vi:'Tôi đã gửi bưu kiện',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: bưu điện, gói hàng, số đo và giá.',
  text:[
    '고향에 있는 가족한테 선물을 보내려고 우체국에 갔어요.',
    '상자에 김하고 과자를 넣고 테이프로 잘 붙였어요. 무게는 삼 킬로쯤 됐어요.',
    '직원이 “배편은 한 달, 항공편은 일주일 걸려요”라고 했어요. 저는 항공편으로 보냈어요.',
    '요금은 조금 비쌌지만 어머니가 빨리 받으시면 좋겠어요. 그래서 하나도 아깝지 않아요.'
  ],
  tr:[
    'Tôi ra bưu điện để gửi quà cho gia đình ở quê.',
    'Tôi cho rong biển và bánh kẹo vào hộp rồi dán băng dính cẩn thận. Cân nặng khoảng ba ký.',
    'Nhân viên nói: “Đường biển mất một tháng, đường bay mất một tuần.” Tôi gửi đường bay.',
    'Cước hơi đắt nhưng mong mẹ nhận được sớm. Vì thế tôi chẳng thấy tiếc chút nào.'
  ],
  keys:[
    { w:'택배', r:'taekbae', vi:'bưu kiện, chuyển phát' },
    { w:'우체국', r:'ucheguk', vi:'bưu điện' },
    { w:'상자', r:'sangja', vi:'cái hộp' },
    { w:'붙이다', r:'buchida', vi:'dán' },
    { w:'무게', r:'muge', vi:'cân nặng' },
    { w:'항공편', r:'hanggongpyeon', vi:'đường hàng không' },
    { w:'요금', r:'yogeum', vi:'cước phí' },
    { w:'아깝다', r:'akkapda', vi:'tiếc' }
  ],
  qs:[
    { q:'Trong hộp có gì?', o:['Quần áo','Rong biển và bánh kẹo','Sách','Thuốc'], c:1, e:'상자에 김하고 과자를 넣고…' },
    { q:'Gửi đường bay mất bao lâu?', o:['Một tuần','Hai tuần','Một tháng','Ba ngày'], c:0, e:'항공편은 일주일 걸려요.' },
    { q:'Người viết cảm thấy thế nào về cước phí?', o:['Rất tiếc tiền','Không tiếc chút nào','Sẽ gửi đường biển lần sau','Quá rẻ'], c:1, e:'하나도 아깝지 않아요.' }
  ],
  after:'Viết hội thoại ở bưu điện 6 câu, dùng -(으)려고 và -았/었으면 좋겠다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Học tập', title:'한국어가 어려운 이유', vi:'Vì sao tiếng Hàn khó',
  intro:'Trung cấp 1. Chùm từ trọng tâm: kính ngữ, sắc thái, lý do khiến người học vất vả.',
  text:[
    '한국어를 배우면서 가장 어려웠던 것은 문법이 아니라 말투였습니다.',
    '같은 내용이라도 상대가 누구냐에 따라 “먹어”, “먹어요”, “드세요”가 달라집니다.',
    '처음에는 친한 친구한테 너무 높은 말을 써서 오히려 어색해진 적도 있었습니다.',
    '지금은 실수를 두려워하지 않습니다. 틀리면서 배우는 것이 가장 빠른 길이라고 생각하기 때문입니다.'
  ],
  tr:[
    'Học tiếng Hàn, thứ khó nhất với tôi không phải ngữ pháp mà là cách xưng hô.',
    'Cùng một nội dung nhưng tuỳ đối phương là ai mà thành “먹어”, “먹어요”, “드세요”.',
    'Lúc đầu tôi từng dùng lối nói quá trang trọng với bạn thân, hoá ra lại thành gượng gạo.',
    'Giờ tôi không sợ sai nữa. Vì tôi nghĩ sai rồi học mới là con đường nhanh nhất.'
  ],
  keys:[
    { w:'말투', r:'maltu', vi:'lối nói, giọng điệu' },
    { w:'상대', r:'sangdae', vi:'đối phương' },
    { w:'-에 따라', r:'-e ttara', vi:'tuỳ theo…' },
    { w:'높임말', r:'nopimmal', vi:'kính ngữ' },
    { w:'어색하다', r:'eosaekhada', vi:'gượng gạo' },
    { w:'두려워하다', r:'duryeowohada', vi:'sợ hãi' },
    { w:'틀리다', r:'teullida', vi:'sai' },
    { w:'-기 때문에', r:'-gi ttaemune', vi:'bởi vì…' }
  ],
  qs:[
    { q:'Cái khó nhất là gì?', o:['Ngữ pháp','Cách xưng hô, lối nói','Phát âm','Chữ viết'], c:1, e:'문법이 아니라 말투였습니다.' },
    { q:'Người viết từng mắc lỗi gì?', o:['Nói trống không với người lớn','Dùng lối quá trang trọng với bạn thân','Dùng sai thì','Phát âm sai'], c:1, e:'친한 친구한테 너무 높은 말을 써서…' },
    { q:'Quan điểm hiện tại?', o:['Phải học kỹ rồi mới nói','Sai rồi học là con đường nhanh nhất','Chỉ nên nói với người quen','Nên tránh kính ngữ'], c:1, e:'틀리면서 배우는 것이 가장 빠른 길…' }
  ],
  after:'Viết 6 câu về cái khó nhất khi bạn học ngoại ngữ, dùng -기 때문에 và -(으)ㄴ 적이 있다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Đời sống', title:'분리수거 하는 날', vi:'Ngày phân loại rác',
  intro:'Trung cấp 1. Chùm từ trọng tâm: phân loại rác, quy định chung cư, thói quen mới.',
  text:[
    '한국에 와서 가장 낯설었던 일 중 하나가 분리수거였습니다.',
    '종이, 플라스틱, 캔, 유리병을 따로 모아야 하고, 음식물 쓰레기는 전용 봉투에 버립니다.',
    '처음에는 어느 통에 넣어야 할지 몰라서 한참 서 있었습니다. 옆집 아주머니가 하나씩 알려 주셨습니다.',
    '이제는 습관이 되었습니다. 귀찮을 때도 있지만, 이렇게 모은 것들이 다시 쓰인다고 생각하면 기분이 좋습니다.'
  ],
  tr:[
    'Một trong những việc lạ lẫm nhất khi sang Hàn là phân loại rác.',
    'Giấy, nhựa, lon, chai thuỷ tinh phải gom riêng, còn rác thực phẩm thì bỏ vào túi chuyên dụng.',
    'Lúc đầu tôi không biết phải cho vào thùng nào nên đứng ngẩn ra một hồi. Bác hàng xóm đã chỉ cho tôi từng thứ.',
    'Giờ thì thành thói quen rồi. Cũng có lúc thấy phiền, nhưng nghĩ đến việc những thứ gom lại sẽ được dùng tiếp thì lại thấy vui.'
  ],
  keys:[
    { w:'분리수거', r:'bullisugeo', vi:'phân loại rác' },
    { w:'낯설다', r:'natseolda', vi:'lạ lẫm' },
    { w:'따로', r:'ttaro', vi:'riêng ra' },
    { w:'음식물 쓰레기', r:'eumsingmul sseuregi', vi:'rác thực phẩm' },
    { w:'전용', r:'jeonyong', vi:'chuyên dụng' },
    { w:'한참', r:'hancham', vi:'một hồi lâu' },
    { w:'습관이 되다', r:'seupgwani doeda', vi:'thành thói quen' },
    { w:'귀찮다', r:'gwichanta', vi:'phiền, ngại' }
  ],
  qs:[
    { q:'Rác thực phẩm bỏ vào đâu?', o:['Thùng giấy','Túi chuyên dụng','Thùng nhựa','Chung với rác khác'], c:1, e:'음식물 쓰레기는 전용 봉투에 버립니다.' },
    { q:'Ai chỉ cho người viết?', o:['Nhân viên chung cư','Bác hàng xóm','Bạn cùng phòng','Không ai'], c:1, e:'옆집 아주머니가 하나씩 알려 주셨습니다.' },
    { q:'Bây giờ người viết thấy thế nào?', o:['Vẫn rất khó','Thành thói quen, thấy vui','Không làm nữa','Nhờ người khác làm'], c:1, e:'이제는 습관이 되었습니다.' }
  ],
  after:'Viết 6 câu về cách phân loại rác ở nhà bạn, dùng -아/어야 하다 và -게 되다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Văn hoá', title:'명절의 고속도로', vi:'Đường cao tốc ngày lễ',
  intro:'Trung cấp 1. Chùm từ trọng tâm: về quê ngày lễ, tắc đường, tình cảm gia đình.',
  text:[
    '설이나 추석이 되면 한국의 고속도로는 아침부터 밤까지 막힙니다.',
    '평소에 네 시간이면 가는 길이 열 시간 넘게 걸리기도 합니다.',
    '그래도 사람들은 고향으로 갑니다. 차 안에서 지치지만 부모님을 뵙는 순간 피로가 사라진다고 합니다.',
    '요즘은 명절에 여행을 가는 사람도 늘었습니다. 형태는 변해도, 쉬고 싶고 가까운 사람과 있고 싶은 마음은 같은 것 같습니다.'
  ],
  tr:[
    'Cứ đến Tết Nguyên đán hay Trung thu là đường cao tốc Hàn Quốc tắc từ sáng đến đêm.',
    'Quãng đường ngày thường đi bốn tiếng có khi mất hơn mười tiếng.',
    'Vậy mà người ta vẫn về quê. Ngồi trên xe thì mệt, nhưng nghe nói khoảnh khắc gặp bố mẹ là mệt mỏi tan biến.',
    'Dạo này cũng nhiều người đi du lịch vào dịp lễ hơn. Hình thức có đổi, nhưng cái lòng muốn nghỉ ngơi và ở bên người thân thì hình như vẫn thế.'
  ],
  keys:[
    { w:'명절', r:'myeongjeol', vi:'ngày lễ truyền thống' },
    { w:'고속도로', r:'gosokdoro', vi:'đường cao tốc' },
    { w:'막히다', r:'makhida', vi:'bị tắc' },
    { w:'평소', r:'pyeongso', vi:'ngày thường' },
    { w:'지치다', r:'jichida', vi:'kiệt sức' },
    { w:'뵙다', r:'boepda', vi:'gặp (kính ngữ)' },
    { w:'사라지다', r:'sarajida', vi:'tan biến' },
    { w:'늘다', r:'neulda', vi:'tăng lên' }
  ],
  qs:[
    { q:'Ngày lễ thì đường cao tốc ra sao?', o:['Vắng','Tắc từ sáng đến đêm','Đóng cửa','Thu phí cao'], c:1, e:'아침부터 밤까지 막힙니다.' },
    { q:'Quãng đường 4 tiếng có thể mất bao lâu?', o:['5 tiếng','7 tiếng','Hơn 10 tiếng','Một ngày'], c:2, e:'열 시간 넘게 걸리기도 합니다.' },
    { q:'Nhận xét cuối của người viết?', o:['Nên bỏ tục về quê','Hình thức đổi nhưng tấm lòng vẫn thế','Du lịch tốt hơn về quê','Nên đi tàu'], c:1, e:'형태는 변해도… 마음은 같은 것 같습니다.' }
  ],
  after:'Viết 6 câu về ngày Tết ở Việt Nam, dùng -아/어도 và -(으)ㄴ/는 것 같다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Công việc', title:'첫 월급', vi:'Tháng lương đầu tiên',
  intro:'Trung cấp 1. Chùm từ trọng tâm: lương, chi tiêu, kế hoạch tiết kiệm.',
  text:[
    '아르바이트를 시작한 지 한 달 만에 첫 월급을 받았습니다. 생각보다 적었지만 기뻤습니다.',
    '제일 먼저 부모님께 작은 선물을 보내 드렸습니다. 그 다음에 친구들에게 밥을 샀습니다.',
    '남은 돈의 절반은 통장에 넣었습니다. 쓰기는 쉽지만 모으기는 어렵다는 걸 알았기 때문입니다.',
    '한 달 동안 서서 일한 시간을 생각하면, 돈의 무게가 전과는 다르게 느껴집니다.'
  ],
  tr:[
    'Làm thêm được đúng một tháng thì tôi nhận tháng lương đầu tiên. Ít hơn tôi tưởng nhưng vẫn vui.',
    'Đầu tiên tôi gửi cho bố mẹ một món quà nhỏ. Sau đó tôi mời bạn bè ăn.',
    'Nửa số tiền còn lại tôi gửi vào sổ tiết kiệm. Vì tôi hiểu ra rằng tiêu thì dễ mà dành dụm thì khó.',
    'Nghĩ đến những giờ đứng làm việc suốt một tháng, sức nặng của đồng tiền cảm thấy khác hẳn trước.'
  ],
  keys:[
    { w:'월급', r:'wolgeup', vi:'tiền lương tháng' },
    { w:'적다', r:'jeokda', vi:'ít' },
    { w:'-아/어 드리다', r:'-a/eo deurida', vi:'làm cho (kính ngữ)' },
    { w:'밥을 사다', r:'babeul sada', vi:'mời ăn' },
    { w:'절반', r:'jeolban', vi:'một nửa' },
    { w:'모으다', r:'moeuda', vi:'dành dụm, gom' },
    { w:'무게', r:'muge', vi:'sức nặng' },
    { w:'느껴지다', r:'neukkyeojida', vi:'cảm thấy' }
  ],
  qs:[
    { q:'Việc đầu tiên làm với lương?', o:['Mua điện thoại','Gửi quà cho bố mẹ','Gửi hết vào ngân hàng','Mời bạn ăn'], c:1, e:'제일 먼저 부모님께 작은 선물을 보내 드렸습니다.' },
    { q:'Bao nhiêu tiền được để dành?', o:['Toàn bộ','Một nửa số còn lại','Một phần ba','Không để dành'], c:1, e:'남은 돈의 절반은 통장에 넣었습니다.' },
    { q:'Người viết nhận ra điều gì?', o:['Lương quá thấp','Tiêu thì dễ, dành dụm thì khó','Không nên làm thêm','Nên đổi việc'], c:1, e:'쓰기는 쉽지만 모으기는 어렵다…' }
  ],
  after:'Viết 6 câu về kế hoạch chi tiêu của bạn, dùng -기는 쉽지만 -기는 어렵다.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Giao thông', title:'지하철에서', vi:'Trên tàu điện ngầm',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: đi tàu, đổi tuyến, nhường ghế.',
  text:[
    '저는 매일 지하철로 학교에 갑니다. 이 호선에서 저 호선으로 한 번 갈아탑니다.',
    '아침에는 사람이 아주 많습니다. 자리가 없어서 보통 서서 갑니다.',
    '오늘은 할머니 한 분이 타셨습니다. 그래서 저는 자리를 양보했습니다.',
    '할머니께서 “고마워요, 학생”이라고 말씀하셨습니다. 저는 하루 종일 기분이 좋았습니다.'
  ],
  tr:[
    'Tôi đi tàu điện ngầm đến trường mỗi ngày. Tôi đổi từ tuyến số 2 sang tuyến số 4 một lần.',
    'Buổi sáng người rất đông. Vì không có chỗ nên tôi thường đứng.',
    'Hôm nay có một bà cụ lên tàu. Vì vậy tôi đã nhường chỗ.',
    'Bà cụ nói: “Cảm ơn cháu nhé.” Cả ngày hôm đó tôi thấy vui.'
  ],
  keys:[
    { w:'지하철', r:'jihacheol', vi:'tàu điện ngầm' },
    { w:'호선', r:'hoseon', vi:'tuyến (số)' },
    { w:'갈아타다', r:'garatada', vi:'đổi tuyến' },
    { w:'자리', r:'jari', vi:'chỗ ngồi' },
    { w:'서서 가다', r:'seoseo gada', vi:'đứng mà đi' },
    { w:'양보하다', r:'yangbohada', vi:'nhường' },
    { w:'-(으)셨습니다', r:'-(eu)syeotseumnida', vi:'đuôi kính ngữ quá khứ', note:'타셨습니다 — cụ ấy đã lên' },
    { w:'하루 종일', r:'haru jongil', vi:'cả ngày' }
  ],
  qs:[
    { q:'Người viết đổi tuyến mấy lần?', o:['Không lần nào','Một lần','Hai lần','Ba lần'], c:1, e:'한 번 갈아탑니다.' },
    { q:'Buổi sáng người viết thường làm gì trên tàu?', o:['Ngồi đọc sách','Đứng vì hết chỗ','Ngủ','Nghe nhạc'], c:1, e:'자리가 없어서 보통 서서 갑니다.' },
    { q:'Hôm nay có chuyện gì?', o:['Trễ tàu','Nhường chỗ cho một bà cụ','Mất thẻ','Đi nhầm tuyến'], c:1, e:'저는 자리를 양보했습니다.' }
  ],
  after:'Viết 5 câu về đường đi làm/đi học của bạn, dùng -(으)로 · -아서/어서 · 보통.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Ẩm thực', title:'식당에서 주문하기', vi:'Gọi món ở quán ăn',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: gọi món, cay, thêm cơm.',
  text:[
    '친구와 저는 점심에 한식당에 갔습니다. 메뉴가 아주 많았습니다.',
    '저는 비빔밥을, 친구는 김치찌개를 주문했습니다.',
    '저는 매운 음식을 잘 못 먹습니다. 그래서 “조금만 맵게 해 주세요”라고 부탁했습니다.',
    '밥이 부족해서 한 공기 더 시켰습니다. 반찬은 공짜라서 정말 좋았습니다.'
  ],
  tr:[
    'Bạn tôi và tôi đi quán ăn Hàn vào buổi trưa. Thực đơn rất nhiều món.',
    'Tôi gọi bibimbap, bạn tôi gọi canh kimchi.',
    'Tôi không ăn cay giỏi. Nên tôi nhờ: “Cho tôi ít cay thôi ạ.”',
    'Vì cơm không đủ nên tôi gọi thêm một bát. Món phụ thì miễn phí nên thật là thích.'
  ],
  keys:[
    { w:'주문하다', r:'jumunhada', vi:'gọi món, đặt' },
    { w:'메뉴', r:'menyu', vi:'thực đơn' },
    { w:'맵다', r:'maepda', vi:'cay' },
    { w:'잘 못 -', r:'jal mot', vi:'không… giỏi' },
    { w:'-아/어 주세요', r:'-a/eo juseyo', vi:'làm ơn… giúp', note:'맵게 해 주세요 — làm cay giúp tôi' },
    { w:'공기', r:'gonggi', vi:'bát (cơm)' },
    { w:'반찬', r:'banchan', vi:'món phụ' },
    { w:'공짜', r:'gongjja', vi:'miễn phí' }
  ],
  qs:[
    { q:'Người viết gọi món gì?', o:['Canh kimchi','Bibimbap','Mì lạnh','Gà rán'], c:1, e:'저는 비빔밥을… 주문했습니다.' },
    { q:'Người viết nhờ gì?', o:['Cho thêm cay','Làm ít cay thôi','Không cho hành','Mang nhanh lên'], c:1, e:'조금만 맵게 해 주세요.' },
    { q:'Món phụ thì sao?', o:['Tính thêm tiền','Miễn phí','Không có','Phải chọn trước'], c:1, e:'반찬은 공짜라서 정말 좋았습니다.' }
  ],
  after:'Viết 5 câu gọi món ở quán, dùng -을/를 주문하다 · -아/어 주세요 · 더.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'우리 집 고양이', vi:'Con mèo nhà tôi',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: thú cưng, thói quen, tính cách.',
  text:[
    '우리 집에는 고양이가 한 마리 있습니다. 이름은 “구름”입니다.',
    '털이 하얗고 눈이 큽니다. 낮에는 거의 잠만 잡니다.',
    '제가 집에 오면 문 앞에 나옵니다. 하지만 안아 주면 곧 도망갑니다.',
    '구름은 조용하지만 외로울 때 옆에 앉아 있습니다. 저는 구름이 정말 좋습니다.'
  ],
  tr:[
    'Nhà tôi có một con mèo. Tên nó là “Gureum” (Mây).',
    'Lông trắng và mắt to. Ban ngày hầu như chỉ ngủ.',
    'Khi tôi về nhà, nó ra trước cửa. Nhưng bế lên thì nó chạy mất ngay.',
    'Gureum im lặng, nhưng lúc tôi cô đơn thì nó ngồi bên cạnh. Tôi rất quý Gureum.'
  ],
  keys:[
    { w:'마리', r:'mari', vi:'con (đếm động vật)' },
    { w:'털', r:'teol', vi:'lông' },
    { w:'하얗다', r:'hayata', vi:'trắng' },
    { w:'거의', r:'geoui', vi:'hầu như' },
    { w:'안다', r:'anda', vi:'ôm, bế' },
    { w:'도망가다', r:'domangada', vi:'chạy trốn' },
    { w:'외롭다', r:'oeropda', vi:'cô đơn' },
    { w:'-(으)면', r:'-(eu)myeon', vi:'nếu, khi', note:'집에 오면 — khi về nhà' }
  ],
  qs:[
    { q:'Con mèo tên gì?', o:['Haneul','Gureum','Nunmul','Byeol'], c:1, e:'이름은 “구름”입니다.' },
    { q:'Ban ngày nó làm gì?', o:['Chạy nhảy','Hầu như chỉ ngủ','Ăn suốt','Kêu nhiều'], c:1, e:'낮에는 거의 잠만 잡니다.' },
    { q:'Khi được bế thì sao?', o:['Nằm yên','Chạy mất ngay','Kêu to','Ngủ luôn'], c:1, e:'안아 주면 곧 도망갑니다.' }
  ],
  after:'Tả một con vật bạn thích bằng 5 câu, dùng -고 · 거의 · -(으)면.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Sức khoẻ', title:'아침 운동', vi:'Tập thể dục buổi sáng',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: thói quen buổi sáng, công viên, cảm giác.',
  text:[
    '저는 요즘 아침마다 공원에서 운동을 합니다. 여섯 시 반에 일어납니다.',
    '처음에는 너무 힘들었습니다. 십 분만 뛰어도 숨이 찼습니다.',
    '지금은 삼십 분 정도 뛸 수 있습니다. 몸이 가벼워졌습니다.',
    '공원에는 할아버지들도 많이 나오십니다. 매일 인사를 하니까 이제 친해졌습니다.'
  ],
  tr:[
    'Dạo này sáng nào tôi cũng tập thể dục ở công viên. Tôi dậy lúc sáu giờ rưỡi.',
    'Lúc đầu rất mệt. Chạy mười phút thôi cũng đã hụt hơi.',
    'Bây giờ tôi chạy được khoảng ba mươi phút. Người nhẹ hẳn đi.',
    'Ở công viên cũng có nhiều cụ ông ra tập. Vì ngày nào cũng chào nhau nên giờ đã thân.'
  ],
  keys:[
    { w:'-마다', r:'-mada', vi:'mỗi', note:'아침마다 — sáng nào cũng' },
    { w:'힘들다', r:'himdeulda', vi:'mệt, vất vả' },
    { w:'숨이 차다', r:'sumi chada', vi:'hụt hơi' },
    { w:'-(으)ㄹ 수 있다', r:'-(eu)l su itda', vi:'có thể' },
    { w:'가볍다', r:'gabyeopda', vi:'nhẹ' },
    { w:'-아/어지다', r:'-a/eojida', vi:'trở nên', note:'가벼워졌습니다 — đã nhẹ đi' },
    { w:'인사하다', r:'insahada', vi:'chào hỏi' },
    { w:'친해지다', r:'chinhaejida', vi:'trở nên thân' }
  ],
  qs:[
    { q:'Người viết dậy lúc mấy giờ?', o:['5h','6h','6h30','7h'], c:2, e:'여섯 시 반에 일어납니다.' },
    { q:'Lúc đầu chạy bao lâu đã hụt hơi?', o:['5 phút','10 phút','20 phút','30 phút'], c:1, e:'십 분만 뛰어도 숨이 찼습니다.' },
    { q:'Vì sao thân với các cụ ông?', o:['Cùng câu lạc bộ','Vì ngày nào cũng chào nhau','Là hàng xóm','Cùng chạy nhóm'], c:1, e:'매일 인사를 하니까 이제 친해졌습니다.' }
  ],
  after:'Viết 5 câu về thói quen buổi sáng, dùng -마다 · -(으)ㄹ 수 있다 · -아/어지다.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Mua sắm', title:'옷 가게에서', vi:'Ở cửa hàng quần áo',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: thử đồ, cỡ, màu sắc, đổi hàng.',
  text:[
    '주말에 친구와 옷 가게에 갔습니다. 파란색 셔츠가 마음에 들었습니다.',
    '“입어 봐도 돼요?”라고 물어보고 탈의실에 들어갔습니다.',
    '조금 작아서 한 사이즈 큰 것을 부탁했습니다. 그게 딱 맞았습니다.',
    '값은 삼만 오천 원이었습니다. 조금 비쌌지만 오래 입을 수 있을 것 같습니다.'
  ],
  tr:[
    'Cuối tuần tôi đi cửa hàng quần áo với bạn. Tôi thích cái áo sơ mi màu xanh.',
    'Tôi hỏi “Tôi mặc thử được không ạ?” rồi vào phòng thử đồ.',
    'Hơi chật nên tôi xin cỡ to hơn một số. Cái đó thì vừa in.',
    'Giá là ba mươi lăm nghìn won. Hơi đắt nhưng chắc mặc được lâu.'
  ],
  keys:[
    { w:'마음에 들다', r:'maeume deulda', vi:'vừa ý, ưng' },
    { w:'입어 보다', r:'ibeo boda', vi:'mặc thử' },
    { w:'-아/어도 되다', r:'-a/eodo doeda', vi:'được phép' },
    { w:'탈의실', r:'taruisil', vi:'phòng thử đồ' },
    { w:'사이즈', r:'saijeu', vi:'cỡ' },
    { w:'딱 맞다', r:'ttak matda', vi:'vừa in' },
    { w:'값', r:'gap', vi:'giá' },
    { w:'-(으)ㄹ 것 같다', r:'-(eu)l geot gatda', vi:'chắc là, có vẻ' }
  ],
  qs:[
    { q:'Người viết thích món gì?', o:['Quần jean','Áo sơ mi xanh','Áo khoác','Váy'], c:1, e:'파란색 셔츠가 마음에 들었습니다.' },
    { q:'Vấn đề với cái đầu tiên?', o:['Màu xấu','Hơi chật','Bị bẩn','Quá đắt'], c:1, e:'조금 작아서 한 사이즈 큰 것을 부탁했습니다.' },
    { q:'Giá bao nhiêu?', o:['25.000 won','35.000 won','45.000 won','55.000 won'], c:1, e:'삼만 오천 원이었습니다.' }
  ],
  after:'Viết 5 câu mua quần áo, dùng 마음에 들다 · -아/어 보다 · -(으)ㄹ 것 같다.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'방 청소', vi:'Dọn phòng',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: việc nhà, thứ tự công việc, cảm giác sau khi xong.',
  text:[
    '한 달 동안 방을 청소하지 않았습니다. 그래서 오늘 아침에 시작했습니다.',
    '먼저 옷을 정리하고, 그 다음에 책상을 닦았습니다.',
    '침대 밑에서 잃어버린 열쇠를 찾았습니다. 정말 놀랐습니다.',
    '세 시간 걸렸지만 방이 아주 깨끗해졌습니다. 마음도 가벼워졌습니다.'
  ],
  tr:[
    'Suốt một tháng tôi không dọn phòng. Nên sáng nay tôi bắt tay vào làm.',
    'Đầu tiên tôi xếp quần áo, sau đó lau bàn học.',
    'Dưới gầm giường tôi tìm thấy cái chìa khoá bị mất. Tôi thật sự giật mình.',
    'Mất ba tiếng nhưng phòng sạch hẳn ra. Lòng cũng nhẹ đi.'
  ],
  keys:[
    { w:'청소하다', r:'cheongsohada', vi:'dọn dẹp' },
    { w:'먼저', r:'meonjeo', vi:'trước tiên' },
    { w:'정리하다', r:'jeongnihada', vi:'sắp xếp' },
    { w:'그 다음에', r:'geu daeume', vi:'sau đó' },
    { w:'닦다', r:'dakda', vi:'lau' },
    { w:'밑', r:'mit', vi:'phía dưới' },
    { w:'잃어버리다', r:'ireobeorida', vi:'đánh mất' },
    { w:'깨끗해지다', r:'kkaekkeutaejida', vi:'trở nên sạch' }
  ],
  qs:[
    { q:'Bao lâu rồi chưa dọn phòng?', o:['Một tuần','Một tháng','Hai tháng','Nửa năm'], c:1, e:'한 달 동안 방을 청소하지 않았습니다.' },
    { q:'Tìm thấy gì dưới gầm giường?', o:['Ví','Chìa khoá đã mất','Điện thoại','Sách'], c:1, e:'침대 밑에서 잃어버린 열쇠를 찾았습니다.' },
    { q:'Mất bao lâu?', o:['Một tiếng','Hai tiếng','Ba tiếng','Cả ngày'], c:2, e:'세 시간 걸렸지만…' }
  ],
  after:'Viết 5 câu về việc nhà bạn làm, dùng 먼저 · 그 다음에 · -아/어지다.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'우체국에서', vi:'Ở bưu điện',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: gửi thư, cân, phí, thời gian.',
  text:[
    '고향에 있는 동생에게 소포를 보내려고 우체국에 갔습니다.',
    '직원이 상자를 저울에 올렸습니다. 이 킬로그램이었습니다.',
    '“베트남까지 얼마나 걸려요?”라고 물었더니 “보통 십 일쯤 걸립니다”라고 했습니다.',
    '값은 삼만 원이었습니다. 동생이 상자를 열 때의 얼굴이 벌써 보이는 것 같습니다.'
  ],
  tr:[
    'Tôi đến bưu điện để gửi bưu kiện cho em trai đang ở quê.',
    'Nhân viên đặt cái hộp lên cân. Được hai ki-lô-gam.',
    'Tôi hỏi “Gửi về Việt Nam mất bao lâu ạ?” thì được trả lời “Thường mất khoảng mười ngày.”',
    'Giá là ba mươi nghìn won. Tôi như đã thấy trước gương mặt em tôi lúc mở hộp.'
  ],
  keys:[
    { w:'우체국', r:'ucheguk', vi:'bưu điện' },
    { w:'소포', r:'sopo', vi:'bưu kiện' },
    { w:'-(으)려고', r:'-(eu)ryeogo', vi:'để mà (mục đích)' },
    { w:'저울', r:'jeoul', vi:'cân' },
    { w:'걸리다', r:'geollida', vi:'mất (thời gian)' },
    { w:'-았/었더니', r:'-at/eotdeoni', vi:'khi tôi… thì' },
    { w:'쯤', r:'jjeum', vi:'khoảng' },
    { w:'벌써', r:'beolsseo', vi:'đã, sớm rồi' }
  ],
  qs:[
    { q:'Người viết gửi gì?', o:['Một lá thư','Một bưu kiện','Tiền','Hoa'], c:1, e:'소포를 보내려고…' },
    { q:'Hộp nặng bao nhiêu?', o:['1 kg','2 kg','3 kg','5 kg'], c:1, e:'이 킬로그램이었습니다.' },
    { q:'Gửi về Việt Nam mất bao lâu?', o:['3 ngày','5 ngày','10 ngày','1 tháng'], c:2, e:'보통 십 일쯤 걸립니다.' }
  ],
  after:'Viết 5 câu gửi đồ về quê, dùng -(으)려고 · 걸리다 · 쯤.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Học tập', title:'한국어 수업 첫날', vi:'Ngày đầu lớp tiếng Hàn',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: lớp học, tự giới thiệu, bạn cùng lớp.',
  text:[
    '오늘은 한국어 수업 첫날이었습니다. 저는 조금 긴장했습니다.',
    '선생님께서 “이름이 뭐예요?”라고 물으셨습니다. 저는 “저는 흐엔입니다”라고 대답했습니다.',
    '교실에는 여덟 명이 있었습니다. 중국, 일본, 몽골에서 온 친구들입니다.',
    '수업이 끝난 후에 같이 커피를 마셨습니다. 한국어로만 이야기했는데 재미있었습니다.'
  ],
  tr:[
    'Hôm nay là ngày đầu tiên của lớp tiếng Hàn. Tôi hơi hồi hộp.',
    'Cô giáo hỏi: “Em tên gì?” Tôi trả lời: “Em là Huyền ạ.”',
    'Trong lớp có tám người. Là các bạn đến từ Trung Quốc, Nhật Bản, Mông Cổ.',
    'Sau khi tan lớp chúng tôi cùng đi uống cà phê. Chỉ nói bằng tiếng Hàn thôi mà vui lắm.'
  ],
  keys:[
    { w:'첫날', r:'cheonnal', vi:'ngày đầu tiên' },
    { w:'긴장하다', r:'ginjanghada', vi:'hồi hộp' },
    { w:'-께서', r:'-kkeseo', vi:'trợ từ chủ ngữ kính ngữ' },
    { w:'대답하다', r:'daedaphada', vi:'trả lời' },
    { w:'교실', r:'gyosil', vi:'lớp học' },
    { w:'-에서 오다', r:'-eseo oda', vi:'đến từ' },
    { w:'-(으)ㄴ 후에', r:'-(eu)n hue', vi:'sau khi' },
    { w:'-(으)로만', r:'-(eu)roman', vi:'chỉ bằng' }
  ],
  qs:[
    { q:'Trong lớp có bao nhiêu người?', o:['Sáu','Bảy','Tám','Mười'], c:2, e:'교실에는 여덟 명이 있었습니다.' },
    { q:'Các bạn đến từ đâu?', o:['Trung Quốc, Nhật Bản, Mông Cổ','Mỹ, Anh, Pháp','Thái, Lào, Campuchia','Nga, Đức, Ý'], c:0, e:'중국, 일본, 몽골에서 온 친구들입니다.' },
    { q:'Sau giờ học họ làm gì?', o:['Về nhà ngay','Cùng uống cà phê','Đi thư viện','Làm bài tập'], c:1, e:'수업이 끝난 후에 같이 커피를 마셨습니다.' }
  ],
  after:'Viết 5 câu tự giới thiệu, dùng 저는 …입니다 · -에서 오다 · -(으)ㄴ 후에.' },

{ lang:'ko', lv:'so-cap-1', mins:3, cat:'Đời sống', title:'비 오는 날', vi:'Ngày trời mưa',
  intro:'Sơ cấp 1. Chùm từ trọng tâm: thời tiết, ô, muộn giờ.',
  text:[
    '오늘 아침에 비가 많이 왔습니다. 저는 우산이 없었습니다.',
    '그래서 버스 정류장까지 뛰어갔습니다. 옷이 다 젖었습니다.',
    '회사에 십 분 늦게 도착했습니다. 부장님께서 웃으면서 “괜찮아요”라고 하셨습니다.',
    '점심시간에 편의점에서 우산을 하나 샀습니다. 이제 가방에 항상 넣어 둡니다.'
  ],
  tr:[
    'Sáng nay mưa rất to. Tôi thì không có ô.',
    'Nên tôi chạy đến bến xe buýt. Quần áo ướt hết.',
    'Tôi đến công ty muộn mười phút. Trưởng phòng cười bảo: “Không sao đâu.”',
    'Giờ nghỉ trưa tôi mua một cái ô ở cửa hàng tiện lợi. Giờ thì lúc nào cũng để sẵn trong cặp.'
  ],
  keys:[
    { w:'비가 오다', r:'biga oda', vi:'trời mưa' },
    { w:'우산', r:'usan', vi:'ô, dù' },
    { w:'뛰어가다', r:'ttwieogada', vi:'chạy đến' },
    { w:'젖다', r:'jeotda', vi:'ướt' },
    { w:'늦게', r:'neutge', vi:'muộn' },
    { w:'도착하다', r:'dochakada', vi:'đến nơi' },
    { w:'부장님', r:'bujangnim', vi:'trưởng phòng' },
    { w:'-아/어 두다', r:'-a/eo duda', vi:'để sẵn', note:'넣어 둡니다 — để sẵn vào' }
  ],
  qs:[
    { q:'Vì sao quần áo ướt?', o:['Làm đổ nước','Không có ô, chạy dưới mưa','Rơi xuống nước','Giặt chưa khô'], c:1, e:'우산이 없었습니다… 옷이 다 젖었습니다.' },
    { q:'Đến công ty muộn bao lâu?', o:['5 phút','10 phút','20 phút','30 phút'], c:1, e:'회사에 십 분 늦게 도착했습니다.' },
    { q:'Bây giờ người viết làm gì?', o:['Đi taxi','Luôn để ô sẵn trong cặp','Dậy sớm hơn','Xem dự báo'], c:1, e:'이제 가방에 항상 넣어 둡니다.' }
  ],
  after:'Viết 5 câu về một ngày mưa, dùng -아/어서 · 늦게 · -아/어 두다.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Đời sống', title:'미용실에서', vi:'Ở tiệm cắt tóc',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: cắt tóc, yêu cầu cụ thể, hiểu lầm nhỏ.',
  text:[
    '한국에 온 지 반년이 됐는데 아직 미용실에 간 적이 없었습니다.',
    '오늘 용기를 내서 집 근처 미용실에 갔습니다. 미용사가 “어떻게 해 드릴까요?”라고 물었습니다.',
    '저는 “조금만 잘라 주세요”라고 했는데, 생각보다 많이 짧아졌습니다.',
    '거울을 보고 조금 놀랐지만, 친구들은 오히려 잘 어울린다고 했습니다. 다음에는 사진을 보여 줘야겠습니다.'
  ],
  tr:[
    'Tôi sang Hàn Quốc được nửa năm rồi mà chưa bao giờ đi tiệm cắt tóc.',
    'Hôm nay tôi lấy hết can đảm đến tiệm gần nhà. Thợ hỏi: “Anh muốn cắt thế nào ạ?”',
    'Tôi bảo “Cắt ngắn một chút thôi ạ”, thế mà nó ngắn hơn tôi tưởng nhiều.',
    'Nhìn gương tôi hơi hoảng, nhưng bạn bè lại bảo là hợp. Lần sau chắc phải cho xem ảnh.'
  ],
  keys:[
    { w:'-(으)ㄴ 지 …이/가 되다', r:'-(eu)n ji … i/ga doeda', vi:'đã được bao lâu kể từ khi' },
    { w:'-(으)ㄴ 적이 없다', r:'-(eu)n jeogi eopda', vi:'chưa từng' },
    { w:'용기를 내다', r:'yonggireul naeda', vi:'lấy can đảm' },
    { w:'미용사', r:'miyongsa', vi:'thợ làm tóc' },
    { w:'자르다', r:'jareuda', vi:'cắt' },
    { w:'생각보다', r:'saenggakboda', vi:'hơn tưởng tượng' },
    { w:'오히려', r:'ohiryeo', vi:'ngược lại' },
    { w:'어울리다', r:'eoullida', vi:'hợp, phù hợp' }
  ],
  qs:[
    { q:'Người viết sang Hàn bao lâu rồi?', o:['Ba tháng','Nửa năm','Một năm','Hai năm'], c:1, e:'한국에 온 지 반년이 됐는데…' },
    { q:'Kết quả cắt tóc thế nào?', o:['Đúng như mong muốn','Ngắn hơn tưởng nhiều','Bị hỏng hẳn','Không cắt được'], c:1, e:'생각보다 많이 짧아졌습니다.' },
    { q:'Bạn bè nói gì?', o:['Xấu quá','Ngược lại, bảo là hợp','Không nhận ra','Nên nuôi dài'], c:1, e:'친구들은 오히려 잘 어울린다고 했습니다.' }
  ],
  after:'Viết 6 câu về một lần đi cắt tóc, dùng -(으)ㄴ 적이 없다 · 생각보다 · 오히려.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Đời sống', title:'휴대폰을 바꿨어요', vi:'Tôi đổi điện thoại',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: mua điện thoại, hợp đồng, so sánh giá.',
  text:[
    '삼 년 쓴 휴대폰이 자꾸 꺼져서 새것으로 바꾸기로 했습니다.',
    '매장 세 군데를 돌아다니면서 가격을 비교했습니다. 같은 모델인데 가격이 달랐습니다.',
    '직원이 “요금제를 바꾸시면 더 싸집니다”라고 설명해 줬습니다.',
    '결국 할부로 샀습니다. 매달 조금씩 내니까 부담이 크지 않습니다.'
  ],
  tr:[
    'Cái điện thoại dùng ba năm cứ tự tắt nên tôi quyết định đổi máy mới.',
    'Tôi đi ba cửa hàng để so giá. Cùng một mẫu mà giá lại khác nhau.',
    'Nhân viên giải thích: “Nếu anh đổi gói cước thì sẽ rẻ hơn.”',
    'Cuối cùng tôi mua trả góp. Mỗi tháng trả một ít nên không nặng gánh lắm.'
  ],
  keys:[
    { w:'자꾸', r:'jakku', vi:'cứ, liên tục' },
    { w:'꺼지다', r:'kkeojida', vi:'tắt (máy)' },
    { w:'-기로 하다', r:'-giro hada', vi:'quyết định làm' },
    { w:'매장', r:'maejang', vi:'cửa hàng' },
    { w:'비교하다', r:'bigyohada', vi:'so sánh' },
    { w:'요금제', r:'yogeumje', vi:'gói cước' },
    { w:'할부', r:'halbu', vi:'trả góp' },
    { w:'부담', r:'budam', vi:'gánh nặng' }
  ],
  qs:[
    { q:'Vì sao phải đổi máy?', o:['Máy vỡ','Máy cứ tự tắt','Mất máy','Muốn mẫu mới'], c:1, e:'자꾸 꺼져서 새것으로 바꾸기로 했습니다.' },
    { q:'Người viết đi mấy cửa hàng?', o:['Một','Hai','Ba','Bốn'], c:2, e:'매장 세 군데를 돌아다니면서…' },
    { q:'Cuối cùng mua thế nào?', o:['Trả một lần','Trả góp','Mua cũ','Vay bạn'], c:1, e:'결국 할부로 샀습니다.' }
  ],
  after:'Viết 6 câu về một lần mua đồ điện tử, dùng -기로 하다 · 비교하다 · 결국.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Văn hoá', title:'집들이에 초대받았어요', vi:'Được mời tân gia',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: tân gia, quà tặng, phép lịch sự khi đến nhà.',
  text:[
    '한국 친구가 이사를 해서 집들이에 저를 초대했습니다.',
    '한국에서는 집들이에 휴지나 세제를 선물합니다. 잘 풀리고 깨끗하라는 뜻이라고 합니다.',
    '저는 휴지 한 묶음을 사 갔습니다. 친구가 웃으면서 “한국 사람 다 됐네”라고 했습니다.',
    '그날 우리는 늦게까지 이야기했습니다. 남의 나라에서도 집 같은 곳이 생겼습니다.'
  ],
  tr:[
    'Bạn người Hàn của tôi chuyển nhà nên mời tôi đến mừng tân gia.',
    'Ở Hàn Quốc, người ta tặng giấy vệ sinh hoặc bột giặt khi mừng tân gia. Nghe nói mang ý nghĩa mọi việc trôi chảy và sạch sẽ.',
    'Tôi mua một lốc giấy mang đi. Bạn tôi cười bảo: “Thành người Hàn hẳn rồi đấy.”',
    'Hôm đó chúng tôi nói chuyện đến khuya. Ở xứ người mà tôi cũng có một nơi giống như nhà.'
  ],
  keys:[
    { w:'집들이', r:'jipdeuri', vi:'tiệc tân gia' },
    { w:'초대하다', r:'chodaehada', vi:'mời' },
    { w:'휴지', r:'hyuji', vi:'giấy vệ sinh' },
    { w:'세제', r:'seje', vi:'bột giặt' },
    { w:'풀리다', r:'pullida', vi:'được gỡ ra, trôi chảy' },
    { w:'-(으)라는 뜻', r:'-(eu)raneun tteut', vi:'mang ý nghĩa là hãy…' },
    { w:'묶음', r:'mukkeum', vi:'lốc, bó' },
    { w:'남의 나라', r:'namui nara', vi:'xứ người' }
  ],
  qs:[
    { q:'Ở Hàn thường tặng gì khi tân gia?', o:['Hoa và rượu','Giấy vệ sinh hoặc bột giặt','Tiền mặt','Tranh treo tường'], c:1, e:'집들이에 휴지나 세제를 선물합니다.' },
    { q:'Ý nghĩa của món quà đó?', o:['Giàu sang','Mọi việc trôi chảy và sạch sẽ','Sống lâu','Đông con'], c:1, e:'잘 풀리고 깨끗하라는 뜻…' },
    { q:'Bạn người Hàn nói gì?', o:['Không cần quà','“Thành người Hàn hẳn rồi”','Quà sai rồi','Đắt quá'], c:1, e:'“한국 사람 다 됐네”라고 했습니다.' }
  ],
  after:'Viết 6 câu về phong tục tặng quà ở Việt Nam, dùng -(으)ㄴ다고 하다 và -(으)라는 뜻.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Thể thao', title:'주말 등산', vi:'Leo núi cuối tuần',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: leo núi, chuẩn bị, kimbap trên đỉnh núi.',
  text:[
    '한국 사람들은 등산을 정말 좋아합니다. 주말마다 산에 사람이 가득합니다.',
    '지난 토요일에 저도 동료들과 북한산에 갔습니다. 새벽 여섯 시에 만났습니다.',
    '처음 한 시간은 괜찮았는데 그 다음부터 다리가 떨렸습니다.',
    '정상에서 먹은 김밥은 지금까지 먹은 김밥 중에서 제일 맛있었습니다. 힘들어야 맛있다는 말이 맞는 것 같습니다.'
  ],
  tr:[
    'Người Hàn Quốc rất thích leo núi. Cuối tuần nào trên núi cũng đầy người.',
    'Thứ Bảy vừa rồi tôi cũng đi núi Bukhan với các đồng nghiệp. Chúng tôi hẹn nhau lúc sáu giờ sáng.',
    'Một tiếng đầu thì ổn, từ sau đó chân tôi run lẩy bẩy.',
    'Món kimbap ăn trên đỉnh núi là kimbap ngon nhất tôi từng ăn. Câu “phải vất vả mới ngon” xem ra là đúng.'
  ],
  keys:[
    { w:'등산', r:'deungsan', vi:'leo núi' },
    { w:'가득하다', r:'gadeukada', vi:'đầy' },
    { w:'동료', r:'dongnyo', vi:'đồng nghiệp' },
    { w:'새벽', r:'saebyeok', vi:'rạng sáng' },
    { w:'떨리다', r:'tteollida', vi:'run' },
    { w:'정상', r:'jeongsang', vi:'đỉnh núi' },
    { w:'-(으)ㄴ 것 중에서', r:'-(eu)n geot jungeseo', vi:'trong số những cái đã…' },
    { w:'-아/어야', r:'-a/eoya', vi:'phải… thì mới' }
  ],
  qs:[
    { q:'Họ hẹn nhau lúc mấy giờ?', o:['5h','6h','7h','8h'], c:1, e:'새벽 여섯 시에 만났습니다.' },
    { q:'Sau một tiếng thì thế nào?', o:['Vẫn khoẻ','Chân run lẩy bẩy','Bỏ cuộc','Lên tới đỉnh'], c:1, e:'그 다음부터 다리가 떨렸습니다.' },
    { q:'Kimbap trên đỉnh thế nào?', o:['Bình thường','Ngon nhất từng ăn','Bị nguội','Không ăn nổi'], c:1, e:'지금까지 먹은 김밥 중에서 제일 맛있었습니다.' }
  ],
  after:'Kể một lần bạn leo núi hoặc đi bộ đường dài, dùng -마다 · -아/어야 · 제일.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Sức khoẻ', title:'감기에 걸렸어요', vi:'Tôi bị cảm',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: bị cảm, nghỉ ngơi, lời khuyên của bạn.',
  text:[
    '어제부터 목이 아프고 콧물이 났습니다. 감기에 걸린 것 같습니다.',
    '약국에서 약을 사 먹었지만 밤에 열이 났습니다.',
    '룸메이트가 따뜻한 죽을 끓여 줬습니다. “푹 쉬어야 빨리 나아”라고 했습니다.',
    '이틀 쉬고 나니까 많이 좋아졌습니다. 아플 때 옆에 누가 있다는 것이 큰 힘이 됩니다.'
  ],
  tr:[
    'Từ hôm qua tôi bị đau họng và chảy nước mũi. Hình như tôi bị cảm.',
    'Tôi mua thuốc ở hiệu thuốc uống nhưng đêm lại sốt.',
    'Bạn cùng phòng nấu cho tôi bát cháo nóng. Bạn ấy bảo: “Phải nghỉ cho đã thì mới nhanh khỏi.”',
    'Nghỉ hai ngày thì đỡ hẳn. Lúc ốm mà có người bên cạnh thì thật là một chỗ dựa lớn.'
  ],
  keys:[
    { w:'감기에 걸리다', r:'gamgie geollida', vi:'bị cảm' },
    { w:'콧물이 나다', r:'konmuri nada', vi:'chảy nước mũi' },
    { w:'약국', r:'yakguk', vi:'hiệu thuốc' },
    { w:'열이 나다', r:'yeori nada', vi:'bị sốt' },
    { w:'끓이다', r:'kkeurida', vi:'nấu, đun' },
    { w:'푹 쉬다', r:'puk swida', vi:'nghỉ cho đã' },
    { w:'낫다', r:'natda', vi:'khỏi bệnh' },
    { w:'-고 나니까', r:'-go nanikka', vi:'sau khi… thì' }
  ],
  qs:[
    { q:'Triệu chứng đầu tiên là gì?', o:['Đau bụng','Đau họng và chảy nước mũi','Đau đầu','Ho'], c:1, e:'목이 아프고 콧물이 났습니다.' },
    { q:'Bạn cùng phòng làm gì?', o:['Đưa đi viện','Nấu cháo nóng','Mua thuốc','Gọi bác sĩ'], c:1, e:'따뜻한 죽을 끓여 줬습니다.' },
    { q:'Sau mấy ngày thì đỡ?', o:['Một ngày','Hai ngày','Ba ngày','Một tuần'], c:1, e:'이틀 쉬고 나니까 많이 좋아졌습니다.' }
  ],
  after:'Viết 6 câu về một lần bị ốm, dùng -에 걸리다 · -아/어 주다 · -고 나니까.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Du lịch', title:'여행 계획 세우기', vi:'Lên kế hoạch du lịch',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: đặt vé, chỗ ở, ngân sách.',
  text:[
    '다음 달에 부산에 가기로 했습니다. 친구 두 명과 같이 갑니다.',
    '먼저 기차표를 예매했습니다. 미리 사면 훨씬 쌉니다.',
    '숙소는 바다가 보이는 곳으로 정했습니다. 조금 비싸지만 하루쯤은 괜찮다고 생각했습니다.',
    '예산은 한 사람당 이십만 원입니다. 계획을 세우는 것도 여행의 절반인 것 같습니다.'
  ],
  tr:[
    'Tháng sau tôi quyết định đi Busan. Tôi đi cùng hai người bạn.',
    'Trước tiên tôi đặt vé tàu. Mua trước thì rẻ hơn nhiều.',
    'Chỗ ở thì chọn nơi nhìn ra biển. Hơi đắt nhưng tôi nghĩ một ngày thì cũng được.',
    'Ngân sách là hai trăm nghìn won mỗi người. Xem ra lên kế hoạch cũng đã là một nửa chuyến đi.'
  ],
  keys:[
    { w:'계획을 세우다', r:'gyehoegeul seuda', vi:'lập kế hoạch' },
    { w:'예매하다', r:'yemaehada', vi:'đặt vé trước' },
    { w:'미리', r:'miri', vi:'trước' },
    { w:'훨씬', r:'hwolssin', vi:'hơn nhiều' },
    { w:'숙소', r:'sukso', vi:'chỗ ở' },
    { w:'정하다', r:'jeonghada', vi:'quyết định, chọn' },
    { w:'예산', r:'yesan', vi:'ngân sách' },
    { w:'-당', r:'-dang', vi:'mỗi (đơn vị)', note:'한 사람당 — mỗi người' }
  ],
  qs:[
    { q:'Đi đâu, với mấy người?', o:['Seoul, một người','Busan, hai người bạn','Jeju, ba người','Gyeongju, một mình'], c:1, e:'부산에… 친구 두 명과 같이 갑니다.' },
    { q:'Vì sao đặt vé sớm?', o:['Hết vé nhanh','Mua trước rẻ hơn nhiều','Được chọn ghế','Có bảo hiểm'], c:1, e:'미리 사면 훨씬 쌉니다.' },
    { q:'Ngân sách mỗi người?', o:['100.000 won','150.000 won','200.000 won','300.000 won'], c:2, e:'한 사람당 이십만 원입니다.' }
  ],
  after:'Lập kế hoạch một chuyến đi bằng 6 câu, dùng -기로 하다 · 미리 · -당.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Mua sắm', title:'중고 거래', vi:'Mua bán đồ cũ',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: app đồ cũ, hẹn gặp, kiểm tra hàng.',
  text:[
    '한국에는 중고 물건을 사고파는 앱이 있습니다. 저도 책상을 하나 샀습니다.',
    '판매자와 채팅으로 약속을 정하고 지하철역 앞에서 만났습니다.',
    '직접 보니까 사진보다 상태가 좋았습니다. 값도 새것의 삼분의 일이었습니다.',
    '무거워서 택시를 탔는데, 택시비가 책상값의 절반이었습니다. 그래도 후회하지 않습니다.'
  ],
  tr:[
    'Ở Hàn Quốc có ứng dụng mua bán đồ cũ. Tôi cũng mua một cái bàn học.',
    'Tôi nhắn tin hẹn với người bán rồi gặp nhau trước ga tàu điện ngầm.',
    'Nhìn tận mắt thì tình trạng còn tốt hơn ảnh. Giá cũng chỉ bằng một phần ba đồ mới.',
    'Vì nặng nên tôi đi taxi, mà tiền taxi bằng nửa tiền cái bàn. Dù vậy tôi không hối hận.'
  ],
  keys:[
    { w:'중고', r:'junggo', vi:'đồ cũ, second-hand' },
    { w:'사고팔다', r:'sagopalda', vi:'mua bán' },
    { w:'판매자', r:'panmaeja', vi:'người bán' },
    { w:'약속을 정하다', r:'yaksogeul jeonghada', vi:'hẹn gặp' },
    { w:'직접', r:'jikjeop', vi:'trực tiếp' },
    { w:'상태', r:'sangtae', vi:'tình trạng' },
    { w:'삼분의 일', r:'sambunui il', vi:'một phần ba' },
    { w:'후회하다', r:'huhoehada', vi:'hối hận' }
  ],
  qs:[
    { q:'Người viết mua gì?', o:['Ghế','Bàn học','Tủ lạnh','Xe đạp'], c:1, e:'저도 책상을 하나 샀습니다.' },
    { q:'Tình trạng hàng thế nào?', o:['Xấu hơn ảnh','Tốt hơn ảnh','Đúng như ảnh','Bị hỏng'], c:1, e:'사진보다 상태가 좋았습니다.' },
    { q:'Tiền taxi bằng bao nhiêu?', o:['Một phần ba tiền bàn','Một nửa tiền bàn','Bằng tiền bàn','Không đáng kể'], c:1, e:'택시비가 책상값의 절반이었습니다.' }
  ],
  after:'Viết 6 câu về một lần mua đồ cũ, dùng 직접 · -보다 · 그래도.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Giải trí', title:'영화관에서', vi:'Ở rạp chiếu phim',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: đặt ghế, phụ đề, cảm nhận sau phim.',
  text:[
    '어제 한국 영화를 자막 없이 봤습니다. 처음으로 시도해 봤습니다.',
    '앱으로 자리를 예매했습니다. 가운데 자리가 제일 인기가 많아서 일찍 예매해야 합니다.',
    '대사를 다 알아듣지는 못했지만 이야기는 이해했습니다.',
    '나오면서 친구에게 줄거리를 한국어로 설명해 봤습니다. 반년 전의 저는 못 했을 일입니다.'
  ],
  tr:[
    'Hôm qua tôi xem một bộ phim Hàn không phụ đề. Lần đầu tiên tôi thử như thế.',
    'Tôi đặt ghế bằng ứng dụng. Ghế giữa được ưa chuộng nhất nên phải đặt sớm.',
    'Tôi không nghe hiểu hết lời thoại, nhưng câu chuyện thì tôi hiểu.',
    'Lúc đi ra tôi thử kể lại nội dung cho bạn bằng tiếng Hàn. Tôi của nửa năm trước thì chưa làm nổi.'
  ],
  keys:[
    { w:'자막', r:'jamak', vi:'phụ đề' },
    { w:'시도하다', r:'sidohada', vi:'thử, thử sức' },
    { w:'예매하다', r:'yemaehada', vi:'đặt trước' },
    { w:'인기가 많다', r:'ingiga manta', vi:'được ưa chuộng' },
    { w:'대사', r:'daesa', vi:'lời thoại' },
    { w:'알아듣다', r:'aradeutda', vi:'nghe hiểu' },
    { w:'줄거리', r:'julgeori', vi:'nội dung, cốt truyện' },
    { w:'-(으)ㄹ 일', r:'-(eu)l il', vi:'việc mà…', note:'못 했을 일 — việc đã không làm nổi' }
  ],
  qs:[
    { q:'Người viết xem phim thế nào?', o:['Có phụ đề Việt','Không có phụ đề','Phụ đề tiếng Anh','Có lồng tiếng'], c:1, e:'한국 영화를 자막 없이 봤습니다.' },
    { q:'Vì sao phải đặt ghế sớm?', o:['Rạp nhỏ','Ghế giữa được ưa chuộng nhất','Giá tăng theo giờ','Hay hết vé cuối tuần'], c:1, e:'가운데 자리가 제일 인기가 많아서…' },
    { q:'Sau phim người viết làm gì?', o:['Viết đánh giá','Kể lại nội dung bằng tiếng Hàn','Xem lại lần nữa','Tra từ điển'], c:1, e:'줄거리를 한국어로 설명해 봤습니다.' }
  ],
  after:'Viết 6 câu về một bộ phim bạn xem, dùng -아/어 보다 · -지는 못하다 · -(으)ㄹ 일.' },

{ lang:'ko', lv:'so-cap-2', mins:4, cat:'Đời sống', title:'분실물 센터', vi:'Trung tâm đồ thất lạc',
  intro:'Sơ cấp 2. Chùm từ trọng tâm: mất đồ, khai báo, tìm lại được.',
  text:[
    '지난주에 지하철에서 가방을 놓고 내렸습니다. 안에 지갑과 노트북이 있었습니다.',
    '역무원에게 말했더니 “분실물 센터에 연락해 보세요”라고 했습니다.',
    '다음 날 전화가 왔습니다. 누군가 가방을 그대로 맡겨 놓았다고 했습니다.',
    '하나도 없어진 것이 없었습니다. 이름도 모르는 그분께 아직도 고맙습니다.'
  ],
  tr:[
    'Tuần trước tôi để quên cái cặp trên tàu điện ngầm rồi xuống. Bên trong có ví và máy tính xách tay.',
    'Tôi báo cho nhân viên nhà ga thì được bảo: “Anh thử liên hệ trung tâm đồ thất lạc xem.”',
    'Hôm sau có điện thoại. Họ nói có người đã gửi lại nguyên cái cặp.',
    'Không mất thứ gì cả. Tôi vẫn còn biết ơn người ấy dù không biết tên.'
  ],
  keys:[
    { w:'놓고 내리다', r:'noko naerida', vi:'để quên rồi xuống xe' },
    { w:'지갑', r:'jigap', vi:'ví' },
    { w:'역무원', r:'yeongmuwon', vi:'nhân viên nhà ga' },
    { w:'분실물', r:'bunsilmul', vi:'đồ thất lạc' },
    { w:'연락하다', r:'yeollakada', vi:'liên hệ' },
    { w:'그대로', r:'geudaero', vi:'nguyên như vậy' },
    { w:'맡기다', r:'matgida', vi:'gửi lại, giao cho giữ' },
    { w:'없어지다', r:'eopseojida', vi:'biến mất' }
  ],
  qs:[
    { q:'Trong cặp có gì?', o:['Sách vở','Ví và máy tính xách tay','Quần áo','Điện thoại'], c:1, e:'안에 지갑과 노트북이 있었습니다.' },
    { q:'Nhân viên nhà ga khuyên gì?', o:['Đợi ở ga','Liên hệ trung tâm đồ thất lạc','Báo công an','Đăng lên mạng'], c:1, e:'분실물 센터에 연락해 보세요.' },
    { q:'Kết quả ra sao?', o:['Mất ví','Tìm lại đủ, không mất gì','Chỉ còn cặp','Không tìm thấy'], c:1, e:'하나도 없어진 것이 없었습니다.' }
  ],
  after:'Kể một lần mất và tìm lại đồ, dùng -았/었더니 · 그대로 · 하나도 -지 않다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Ngôn ngữ', title:'존댓말과 반말', vi:'Kính ngữ và lối nói thân mật',
  intro:'Trung cấp 1. Chùm từ trọng tâm: kính ngữ, khoảng cách, khi nào được nói thân mật.',
  text:[
    '한국어를 배우면서 가장 어려운 것은 문법이 아니라 존댓말과 반말의 경계였습니다.',
    '처음 만난 사람에게는 당연히 존댓말을 씁니다. 그런데 언제부터 반말을 해도 되는지 아무도 알려 주지 않습니다.',
    '한 친구가 말했습니다. “말 놓자”라는 말이 나오면 그때부터야.',
    '결국 언어의 문제가 아니라 관계의 문제였습니다. 말이 바뀌는 순간, 사이도 조금 가까워집니다.'
  ],
  tr:[
    'Học tiếng Hàn, thứ khó nhất với tôi không phải ngữ pháp mà là ranh giới giữa kính ngữ và lối nói thân mật.',
    'Với người mới gặp thì đương nhiên dùng kính ngữ. Nhưng từ lúc nào mới được nói thân mật thì chẳng ai chỉ cho cả.',
    'Một người bạn bảo tôi: “Khi nào có người nói ‘bỏ kính ngữ đi’ thì từ đó mới được.”',
    'Hoá ra đó không phải chuyện ngôn ngữ mà là chuyện quan hệ. Ngay lúc cách nói đổi đi, khoảng cách giữa hai người cũng gần lại một chút.'
  ],
  keys:[
    { w:'존댓말', r:'jondaenmal', vi:'kính ngữ' },
    { w:'반말', r:'banmal', vi:'lối nói thân mật' },
    { w:'경계', r:'gyeonggye', vi:'ranh giới' },
    { w:'당연히', r:'dangyeonhi', vi:'đương nhiên' },
    { w:'-아/어도 되다', r:'-a/eodo doeda', vi:'được phép' },
    { w:'말을 놓다', r:'mareul nota', vi:'bỏ kính ngữ, nói thân mật' },
    { w:'관계', r:'gwangye', vi:'quan hệ' },
    { w:'사이', r:'sai', vi:'khoảng cách, tình thân' }
  ],
  qs:[
    { q:'Điều khó nhất với người viết là gì?', o:['Ngữ pháp','Ranh giới kính ngữ / thân mật','Phát âm','Từ vựng'], c:1, e:'문법이 아니라 존댓말과 반말의 경계였습니다.' },
    { q:'Khi nào được nói thân mật?', o:['Sau một tháng','Khi có người đề nghị “말 놓자”','Khi cùng tuổi','Bất cứ lúc nào'], c:1, e:'“말 놓자”라는 말이 나오면 그때부터야.' },
    { q:'Kết luận của bài?', o:['Nên luôn dùng kính ngữ','Đó là chuyện quan hệ chứ không phải ngôn ngữ','Nên học thuộc quy tắc','Người Hàn hay đổi ý'], c:1, e:'언어의 문제가 아니라 관계의 문제였습니다.' }
  ],
  after:'Viết 6 câu so sánh cách xưng hô tiếng Việt và tiếng Hàn, dùng -이/가 아니라 và -(으)면서.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Xã hội', title:'배달 문화', vi:'Văn hoá giao đồ ăn',
  intro:'Trung cấp 1. Chùm từ trọng tâm: giao hàng tận nơi, tiện lợi, mặt trái.',
  text:[
    '한국의 배달 문화는 세계에서 손꼽힐 만큼 발달했습니다. 한강 공원에서도 치킨을 시킬 수 있습니다.',
    '앱을 열고 몇 번만 누르면 삼십 분 안에 음식이 도착합니다.',
    '하지만 그만큼 일회용 쓰레기도 늘었습니다. 한 끼를 먹고 나면 플라스틱 그릇이 다섯 개나 나옵니다.',
    '요즘은 다회용 용기를 쓰는 가게도 생기고 있습니다. 편리함과 책임 사이에서 균형을 찾는 중인 것 같습니다.'
  ],
  tr:[
    'Văn hoá giao đồ ăn của Hàn Quốc phát triển đến mức đứng vào hàng đầu thế giới. Ngồi ở công viên sông Hàn cũng gọi được gà rán.',
    'Mở ứng dụng, bấm vài lần là trong ba mươi phút đồ ăn đã tới.',
    'Nhưng rác dùng một lần cũng tăng lên chừng ấy. Ăn xong một bữa là có tới năm cái hộp nhựa.',
    'Dạo này đã có những quán dùng hộp tái sử dụng. Xem ra người ta đang đi tìm điểm cân bằng giữa tiện lợi và trách nhiệm.'
  ],
  keys:[
    { w:'배달', r:'baedal', vi:'giao hàng tận nơi' },
    { w:'손꼽히다', r:'sonkkopida', vi:'được xếp vào hàng đầu' },
    { w:'-(으)ㄹ 만큼', r:'-(eu)l mankeum', vi:'đến mức' },
    { w:'시키다', r:'sikida', vi:'gọi (món)' },
    { w:'일회용', r:'ilhoeyong', vi:'dùng một lần' },
    { w:'-이나', r:'-ina', vi:'những (nhấn số lượng nhiều)' },
    { w:'다회용 용기', r:'dahoeyong yonggi', vi:'hộp tái sử dụng' },
    { w:'균형', r:'gyunhyeong', vi:'cân bằng' }
  ],
  qs:[
    { q:'Ở đâu cũng gọi được đồ ăn, ví dụ?', o:['Trên tàu','Công viên sông Hàn','Trong rạp phim','Trên núi'], c:1, e:'한강 공원에서도 치킨을 시킬 수 있습니다.' },
    { q:'Mặt trái là gì?', o:['Giá cao','Rác dùng một lần tăng','Đồ ăn nguội','Nhân viên ít'], c:1, e:'일회용 쓰레기도 늘었습니다.' },
    { q:'Giải pháp đang xuất hiện?', o:['Cấm giao hàng','Quán dùng hộp tái sử dụng','Giao bằng xe điện','Thu phí rác'], c:1, e:'다회용 용기를 쓰는 가게도 생기고 있습니다.' }
  ],
  after:'Viết 6 câu về dịch vụ giao đồ ăn ở Việt Nam, dùng -(으)ㄹ 만큼 · -이나 · -는 중이다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Công việc', title:'회식', vi:'Tiệc liên hoan công ty',
  intro:'Trung cấp 1. Chùm từ trọng tâm: liên hoan, rượu, thay đổi của thế hệ mới.',
  text:[
    '입사한 지 한 달쯤 됐을 때 첫 회식이 있었습니다. 저는 술을 잘 못 마십니다.',
    '예전에는 술을 거절하기가 어려웠다고 합니다. 하지만 요즘은 분위기가 많이 달라졌습니다.',
    '부장님이 먼저 “안 마셔도 괜찮아요”라고 말씀하셨습니다. 저는 사이다를 마셨습니다.',
    '중요한 것은 술이 아니라 같이 앉아 있는 시간이었습니다. 그날 저는 동료들의 다른 얼굴을 봤습니다.'
  ],
  tr:[
    'Khi vào công ty được khoảng một tháng thì có buổi liên hoan đầu tiên. Tôi thì không uống được rượu.',
    'Nghe nói ngày trước từ chối rượu rất khó. Nhưng dạo này không khí đã khác đi nhiều.',
    'Trưởng phòng chủ động nói trước: “Không uống cũng không sao đâu.” Tôi uống nước ngọt.',
    'Điều quan trọng không phải là rượu mà là khoảng thời gian ngồi cùng nhau. Hôm ấy tôi nhìn thấy một gương mặt khác của các đồng nghiệp.'
  ],
  keys:[
    { w:'입사하다', r:'ipsahada', vi:'vào công ty làm' },
    { w:'회식', r:'hoesik', vi:'tiệc liên hoan công ty' },
    { w:'거절하다', r:'geojeolhada', vi:'từ chối' },
    { w:'-다고 하다', r:'-dago hada', vi:'nghe nói rằng' },
    { w:'분위기', r:'bunwigi', vi:'không khí' },
    { w:'달라지다', r:'dallajida', vi:'thay đổi, khác đi' },
    { w:'말씀하시다', r:'malsseumhasida', vi:'nói (kính ngữ)' },
    { w:'-이/가 아니라', r:'-i/ga anira', vi:'không phải… mà là' }
  ],
  qs:[
    { q:'Buổi liên hoan đầu diễn ra khi nào?', o:['Ngày đầu đi làm','Khoảng một tháng sau khi vào','Sau nửa năm','Cuối năm'], c:1, e:'입사한 지 한 달쯤 됐을 때…' },
    { q:'Trưởng phòng nói gì?', o:['Phải uống một ly','“Không uống cũng không sao”','Về sớm đi','Uống thay bằng bia'], c:1, e:'“안 마셔도 괜찮아요”라고 말씀하셨습니다.' },
    { q:'Điều quan trọng theo người viết?', o:['Rượu','Thời gian ngồi cùng nhau','Đồ ăn','Ai trả tiền'], c:1, e:'술이 아니라 같이 앉아 있는 시간이었습니다.' }
  ],
  after:'Viết 6 câu về văn hoá liên hoan ở nơi bạn làm, dùng -다고 하다 · 달라지다 · -이/가 아니라.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Xã hội', title:'층간 소음', vi:'Tiếng ồn giữa các tầng',
  intro:'Trung cấp 1. Chùm từ trọng tâm: chung cư, tiếng ồn, cách nói chuyện với hàng xóm.',
  text:[
    '아파트에 살면 층간 소음 문제를 한 번쯤 겪게 됩니다.',
    '저희 윗집에는 어린아이가 둘 있습니다. 밤 아홉 시가 넘어도 뛰는 소리가 들립니다.',
    '처음에는 화가 났지만, 곧바로 올라가지 않고 며칠 더 지켜봤습니다.',
    '나중에 엘리베이터에서 만났을 때 웃으면서 이야기했습니다. 그 뒤로 소리가 많이 줄었습니다. 화를 내기 전에 말을 거는 편이 낫습니다.'
  ],
  tr:[
    'Sống ở chung cư thì thế nào cũng có lần gặp chuyện tiếng ồn giữa các tầng.',
    'Nhà tầng trên chúng tôi có hai đứa nhỏ. Quá chín giờ tối vẫn nghe tiếng chạy nhảy.',
    'Lúc đầu tôi bực, nhưng không lên ngay mà theo dõi thêm mấy hôm.',
    'Sau đó gặp nhau trong thang máy, tôi cười rồi nói chuyện. Từ sau đó tiếng ồn giảm hẳn. Trước khi nổi giận thì bắt chuyện vẫn hơn.'
  ],
  keys:[
    { w:'층간 소음', r:'cheunggan soeum', vi:'tiếng ồn giữa các tầng' },
    { w:'겪다', r:'gyeokda', vi:'trải qua, gặp phải' },
    { w:'윗집', r:'witjip', vi:'nhà tầng trên' },
    { w:'화가 나다', r:'hwaga nada', vi:'nổi giận' },
    { w:'곧바로', r:'gotbaro', vi:'ngay lập tức' },
    { w:'지켜보다', r:'jikyeoboda', vi:'quan sát, theo dõi' },
    { w:'말을 걸다', r:'mareul geolda', vi:'bắt chuyện' },
    { w:'-는 편이 낫다', r:'-neun pyeoni natda', vi:'thà… thì hơn' }
  ],
  qs:[
    { q:'Nhà tầng trên có gì?', o:['Một con chó','Hai đứa trẻ nhỏ','Người tập đàn','Ba sinh viên'], c:1, e:'저희 윗집에는 어린아이가 둘 있습니다.' },
    { q:'Người viết phản ứng thế nào lúc đầu?', o:['Lên ngay','Bực nhưng theo dõi thêm mấy hôm','Gọi bảo vệ','Chuyển nhà'], c:1, e:'곧바로 올라가지 않고 며칠 더 지켜봤습니다.' },
    { q:'Bài học rút ra?', o:['Nên báo ban quản lý','Bắt chuyện tốt hơn nổi giận','Nên chuyển đi','Đeo nút tai'], c:1, e:'화를 내기 전에 말을 거는 편이 낫습니다.' }
  ],
  after:'Viết 6 câu về một mâu thuẫn nhỏ với hàng xóm, dùng -게 되다 · -기 전에 · -는 편이 낫다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Đời sống', title:'고향 생각', vi:'Nhớ quê',
  intro:'Trung cấp 1. Chùm từ trọng tâm: nhớ nhà, mùi vị quê hương, gọi điện về.',
  text:[
    '외국에 살면 사소한 것에서 고향이 떠오릅니다.',
    '저는 비 냄새를 맡을 때마다 하노이의 골목이 생각납니다. 비 오는 날이면 어머니가 항상 국수를 끓여 주셨습니다.',
    '지난주에는 한국 마트에서 베트남 쌀국수를 발견했습니다. 맛은 비슷했지만 같지는 않았습니다.',
    '그날 밤 어머니께 영상 통화를 걸었습니다. 화면 너머의 부엌이, 제가 아는 그대로였습니다.'
  ],
  tr:[
    'Sống ở nước ngoài, quê hương hiện lên từ những thứ rất vặt vãnh.',
    'Mỗi lần ngửi thấy mùi mưa là tôi lại nhớ những con ngõ Hà Nội. Ngày mưa mẹ tôi luôn nấu cho tôi bát phở.',
    'Tuần trước tôi tìm thấy phở Việt Nam trong siêu thị Hàn. Vị thì giống, nhưng không phải là một.',
    'Đêm đó tôi gọi video cho mẹ. Căn bếp bên kia màn hình vẫn y như tôi vẫn biết.'
  ],
  keys:[
    { w:'사소하다', r:'sasohada', vi:'vặt vãnh, nhỏ nhặt' },
    { w:'떠오르다', r:'tteooreuda', vi:'hiện lên (trong đầu)' },
    { w:'냄새를 맡다', r:'naemsaereul matda', vi:'ngửi thấy mùi' },
    { w:'-(으)ㄹ 때마다', r:'-(eu)l ttaemada', vi:'mỗi lần' },
    { w:'골목', r:'golmok', vi:'ngõ, hẻm' },
    { w:'발견하다', r:'balgyeonhada', vi:'phát hiện, tìm thấy' },
    { w:'영상 통화', r:'yeongsang tonghwa', vi:'gọi video' },
    { w:'너머', r:'neomeo', vi:'bên kia, phía sau' }
  ],
  qs:[
    { q:'Điều gì gợi nhớ quê nhất?', o:['Tiếng nhạc','Mùi mưa','Ánh đèn','Giọng nói'], c:1, e:'비 냄새를 맡을 때마다…' },
    { q:'Ngày mưa mẹ thường làm gì?', o:['Gọi điện','Nấu phở','Đóng cửa sổ','Đi chợ'], c:1, e:'어머니가 항상 국수를 끓여 주셨습니다.' },
    { q:'Phở mua ở siêu thị Hàn thế nào?', o:['Ngon hơn','Giống nhưng không phải là một','Dở','Không ăn được'], c:1, e:'맛은 비슷했지만 같지는 않았습니다.' }
  ],
  after:'Viết 6 câu về thứ khiến bạn nhớ nhà, dùng -(으)ㄹ 때마다 · -지만 · 그대로.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Học tập', title:'한국어 실력이 늘지 않을 때', vi:'Khi tiếng Hàn mãi không tiến bộ',
  intro:'Trung cấp 1. Chùm từ trọng tâm: chững lại, cách vượt qua, kiên trì.',
  text:[
    '공부를 시작하고 여섯 달쯤 되면 실력이 멈춘 것 같은 시기가 옵니다.',
    '단어는 아는데 입에서 안 나오고, 드라마는 여전히 반밖에 안 들립니다.',
    '선생님께서 말씀하셨습니다. “그건 느는 게 멈춘 게 아니라, 안에서 쌓이고 있는 겁니다.”',
    '저는 매일 다섯 문장씩 소리 내어 읽기로 했습니다. 두 달 뒤, 어느 날 갑자기 문장이 그냥 나왔습니다.'
  ],
  tr:[
    'Học được khoảng sáu tháng thì sẽ đến một giai đoạn tưởng như trình độ đứng yên.',
    'Từ thì biết mà miệng không bật ra được, phim thì vẫn chỉ nghe được một nửa.',
    'Cô giáo bảo tôi: “Đó không phải là ngừng tiến bộ, mà là đang tích lại bên trong.”',
    'Tôi quyết định mỗi ngày đọc to năm câu. Hai tháng sau, một hôm bỗng nhiên câu cứ thế bật ra.'
  ],
  keys:[
    { w:'실력', r:'sillyeok', vi:'trình độ, thực lực' },
    { w:'늘다', r:'neulda', vi:'tăng lên, tiến bộ' },
    { w:'멈추다', r:'meomchuda', vi:'dừng lại' },
    { w:'시기', r:'sigi', vi:'giai đoạn' },
    { w:'여전히', r:'yeojeonhi', vi:'vẫn còn' },
    { w:'-밖에 안', r:'-bakke an', vi:'chỉ… mà thôi' },
    { w:'쌓이다', r:'ssahida', vi:'tích lại' },
    { w:'소리 내어 읽다', r:'sori naeeo ikda', vi:'đọc to thành tiếng' }
  ],
  qs:[
    { q:'Giai đoạn chững lại đến khi nào?', o:['Sau một tháng','Khoảng sáu tháng','Sau một năm','Sau hai năm'], c:1, e:'여섯 달쯤 되면 실력이 멈춘 것 같은 시기가 옵니다.' },
    { q:'Cô giáo giải thích thế nào?', o:['Phải học thêm giờ','Đang tích lại bên trong','Nên đổi giáo trình','Nên nghỉ một thời gian'], c:1, e:'안에서 쌓이고 있는 겁니다.' },
    { q:'Người viết làm gì?', o:['Học thuộc 50 từ/ngày','Mỗi ngày đọc to 5 câu','Xem phim không phụ đề','Viết nhật ký'], c:1, e:'매일 다섯 문장씩 소리 내어 읽기로 했습니다.' }
  ],
  after:'Viết 6 câu về cách bạn vượt qua lúc nản, dùng -는 것 같다 · -밖에 안 · -기로 하다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Xã hội', title:'노약자석', vi:'Ghế ưu tiên',
  intro:'Trung cấp 1. Chùm từ trọng tâm: ghế ưu tiên, quy tắc bất thành văn, tranh luận.',
  text:[
    '지하철에는 노약자석이 있습니다. 노인, 임산부, 몸이 불편한 분을 위한 자리입니다.',
    '자리가 비어 있어도 젊은 사람들은 대부분 앉지 않습니다. 법이 아니라 습관입니다.',
    '어떤 사람은 “비어 있으면 앉았다가 필요할 때 비켜 주면 된다”고 말합니다.',
    '정답은 없을지도 모릅니다. 다만 누군가를 위해 자리를 남겨 두는 마음은, 어느 나라에서나 배울 만합니다.'
  ],
  tr:[
    'Trên tàu điện ngầm có ghế ưu tiên. Là chỗ dành cho người già, phụ nữ mang thai, người đi lại khó khăn.',
    'Dù ghế trống thì phần lớn người trẻ cũng không ngồi. Không phải luật, mà là thói quen.',
    'Có người nói: “Trống thì cứ ngồi, lúc cần thì đứng dậy nhường là được.”',
    'Có lẽ không có đáp án đúng. Chỉ có điều cái tâm để dành một chỗ cho ai đó thì ở nước nào cũng đáng học.'
  ],
  keys:[
    { w:'노약자석', r:'noyakjaseok', vi:'ghế ưu tiên' },
    { w:'임산부', r:'imsanbu', vi:'phụ nữ mang thai' },
    { w:'-을/를 위한', r:'-eul/reul wihan', vi:'dành cho' },
    { w:'비어 있다', r:'bieo itda', vi:'đang trống' },
    { w:'대부분', r:'daebubun', vi:'phần lớn' },
    { w:'비켜 주다', r:'bikyeo juda', vi:'nhường chỗ, tránh ra' },
    { w:'-(으)ㄹ지도 모르다', r:'-(eu)ljido moreuda', vi:'có lẽ' },
    { w:'-(으)ㄹ 만하다', r:'-(eu)l manhada', vi:'đáng để' }
  ],
  qs:[
    { q:'Ghế ưu tiên dành cho ai?', o:['Trẻ em','Người già, phụ nữ mang thai, người đi lại khó khăn','Nhân viên nhà ga','Người mua vé tháng'], c:1, e:'노인, 임산부, 몸이 불편한 분을 위한 자리입니다.' },
    { q:'Người trẻ thường làm gì khi ghế trống?', o:['Ngồi ngay','Phần lớn vẫn không ngồi','Đặt đồ lên','Xin phép rồi ngồi'], c:1, e:'젊은 사람들은 대부분 앉지 않습니다.' },
    { q:'Kết luận của bài?', o:['Nên bỏ ghế ưu tiên','Cái tâm để dành chỗ cho người khác đáng học','Nên phạt tiền','Nên tăng số ghế'], c:1, e:'자리를 남겨 두는 마음은… 배울 만합니다.' }
  ],
  after:'Viết 6 câu nêu ý kiến về ghế ưu tiên, dùng -(으)ㄹ지도 모르다 · 다만 · -(으)ㄹ 만하다.' },

{ lang:'ko', lv:'trung-cap-1', mins:5, cat:'Công việc', title:'이력서를 쓰는 날', vi:'Ngày viết hồ sơ xin việc',
  intro:'Trung cấp 1. Chùm từ trọng tâm: hồ sơ, thư giới thiệu bản thân, phỏng vấn.',
  text:[
    '한국 회사에 지원하려면 이력서와 자기소개서를 써야 합니다.',
    '자기소개서가 제일 어렵습니다. 자기 이야기를 한국어로, 그것도 겸손하게 써야 하기 때문입니다.',
    '저는 “외국인이라서 부족하다”라고 쓰려다가 지웠습니다. 대신 두 나라 말을 할 수 있다는 점을 썼습니다.',
    '면접에서 면접관이 그 부분을 물었습니다. 약점처럼 보이던 것이 사실은 제 이야기의 시작이었습니다.'
  ],
  tr:[
    'Muốn ứng tuyển vào công ty Hàn thì phải viết sơ yếu lý lịch và thư giới thiệu bản thân.',
    'Thư giới thiệu bản thân là khó nhất. Vì phải kể chuyện của mình bằng tiếng Hàn, mà lại còn phải khiêm tốn.',
    'Tôi định viết “vì là người nước ngoài nên tôi còn thiếu sót” rồi lại xoá đi. Thay vào đó tôi viết về việc mình nói được hai thứ tiếng.',
    'Khi phỏng vấn, người phỏng vấn hỏi đúng đoạn ấy. Cái tưởng như điểm yếu hoá ra lại là chỗ bắt đầu câu chuyện của tôi.'
  ],
  keys:[
    { w:'지원하다', r:'jiwonhada', vi:'ứng tuyển' },
    { w:'이력서', r:'iryeokseo', vi:'sơ yếu lý lịch' },
    { w:'자기소개서', r:'jagisogaeseo', vi:'thư giới thiệu bản thân' },
    { w:'겸손하다', r:'gyeomsonhada', vi:'khiêm tốn' },
    { w:'-(으)려다가', r:'-(eu)ryeodaga', vi:'định… rồi lại' },
    { w:'지우다', r:'jiuda', vi:'xoá' },
    { w:'면접', r:'myeonjeop', vi:'phỏng vấn' },
    { w:'약점', r:'yakjeom', vi:'điểm yếu' }
  ],
  qs:[
    { q:'Phần nào khó nhất?', o:['Sơ yếu lý lịch','Thư giới thiệu bản thân','Bảng điểm','Ảnh thẻ'], c:1, e:'자기소개서가 제일 어렵습니다.' },
    { q:'Người viết đã xoá câu nào?', o:['Về kinh nghiệm làm thêm','“Vì là người nước ngoài nên còn thiếu sót”','Về điểm số','Về sở thích'], c:1, e:'“외국인이라서 부족하다”라고 쓰려다가 지웠습니다.' },
    { q:'Kết quả ở buổi phỏng vấn?', o:['Không ai hỏi','Người phỏng vấn hỏi đúng đoạn đó','Bị đánh trượt','Phải viết lại'], c:1, e:'면접관이 그 부분을 물었습니다.' }
  ],
  after:'Viết 6 câu giới thiệu bản thân cho nhà tuyển dụng, dùng -(으)려면 · -기 때문이다 · 대신.' }

  );
})();
