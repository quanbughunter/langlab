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
  after:'Viết 6 câu về kế hoạch chi tiêu của bạn, dùng -기는 쉽지만 -기는 어렵다.' }

  );
})();
