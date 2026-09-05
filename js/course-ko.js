/* ============================================================
   LangLab — Khoá tiếng Hàn
   ------------------------------------------------------------
   Khung chương trình bám theo bộ giáo trình
   « Tiếng Hàn Quốc tổng hợp dành cho người Việt Nam »
   (베트남인을 위한 종합 한국어 — KF & KB Kookmin Bank).

   Tên bài, chủ điểm ngữ pháp, chủ đề phát âm và văn hoá được
   dùng làm KHUNG chương trình. Toàn bộ từ vựng, câu ví dụ và
   hội thoại trong tệp này do LangLab tự biên soạn.
   ============================================================ */

const COURSE_KO = {
  code: 'ko',
  name: 'Tiếng Hàn',
  nativeName: '한국어',
  flag: '한',
  levels: [
    { id:'so-cap-1',   ko:'초급 1', vi:'Sơ cấp 1',   lessons:15, status:'active' },
    { id:'so-cap-2',   ko:'초급 2', vi:'Sơ cấp 2',   lessons:15, status:'planned' },
    { id:'trung-cap-1',ko:'중급 1', vi:'Trung cấp 1',lessons:15, status:'planned' },
    { id:'trung-cap-2',ko:'중급 2', vi:'Trung cấp 2',lessons:15, status:'planned' },
    { id:'cao-cap-1',  ko:'고급 1', vi:'Cao cấp 1',  lessons:15, status:'planned' },
    { id:'cao-cap-2',  ko:'고급 2', vi:'Cao cấp 2',  lessons:15, status:'planned' }
  ],

  lessons: [
    {
      no:1, ko:'소개', vi:'Giới thiệu', rom:'sogae',
      skill:'Chào hỏi và tự giới thiệu bản thân',
      pron:'Âm dài hơi (거센소리)',
      culture:'Cách chào hỏi của người Hàn Quốc — cúi đầu, kính ngữ và cách gọi tên',
      grammar:[
        { form:'N + 입니다 / 입니까?', vi:'là N / có phải là N không?',
          note:'Đuôi câu trang trọng nhất, dùng khi gặp lần đầu, trong lớp học hay nơi công sở.',
          ex:{ko:'저는 응우옌 딘 꾸언입니다.', vi:'Tôi là Nguyễn Đình Quân.'} },
        { form:'N + 은 / 는', vi:'trợ từ chủ đề',
          note:'Danh từ có patchim dùng 은, không có patchim dùng 는. Nêu chủ đề đang nói tới.',
          ex:{ko:'저는 베트남 사람입니다.', vi:'Tôi là người Việt Nam.'} }
      ],
      vocab:[
        {ko:'안녕하세요', rom:'annyeonghaseyo', vi:'xin chào', pos:'chào hỏi'},
        {ko:'이름', rom:'ireum', vi:'tên', pos:'danh từ'},
        {ko:'나라', rom:'nara', vi:'đất nước', pos:'danh từ'},
        {ko:'사람', rom:'saram', vi:'người', pos:'danh từ'},
        {ko:'한국', rom:'hanguk', vi:'Hàn Quốc', pos:'danh từ', hanja:'韓國', hv:'Hàn Quốc'},
        {ko:'베트남', rom:'beteunam', vi:'Việt Nam', pos:'danh từ'},
        {ko:'학생', rom:'haksaeng', vi:'học sinh, sinh viên', pos:'danh từ', hanja:'學生', hv:'học sinh'},
        {ko:'선생님', rom:'seonsaengnim', vi:'thầy/cô giáo', pos:'danh từ', hanja:'先生—', hv:'tiên sinh'},
        {ko:'회사원', rom:'hoesawon', vi:'nhân viên công ty', pos:'danh từ', hanja:'會社員', hv:'hội xã viên'},
        {ko:'친구', rom:'chingu', vi:'bạn, bạn bè', pos:'danh từ', hanja:'親舊', hv:'thân cựu'},
        {ko:'반갑습니다', rom:'bangapseumnida', vi:'rất vui được gặp', pos:'chào hỏi'},
        {ko:'저', rom:'jeo', vi:'tôi (khiêm tốn)', pos:'đại từ'},
        {ko:'씨', rom:'ssi', vi:'anh/chị (sau tên)', pos:'hậu tố'}
      ],
      dialogue:[
        {sp:'민수', ko:'안녕하세요? 저는 김민수입니다.', vi:'Xin chào. Tôi là Kim Min-su.'},
        {sp:'꾸언', ko:'안녕하세요? 저는 꾸언입니다.', vi:'Xin chào. Tôi là Quân.'},
        {sp:'민수', ko:'꾸언 씨는 어느 나라 사람입니까?', vi:'Quân là người nước nào ạ?'},
        {sp:'꾸언', ko:'저는 베트남 사람입니다. 반갑습니다.', vi:'Tôi là người Việt Nam. Rất vui được gặp anh.'}
      ]
    },
    {
      no:2, ko:'학교', vi:'Trường học', rom:'hakgyo',
      skill:'Gọi tên đồ vật, giới thiệu về trường học',
      pron:'Âm thanh hầu (1)',
      culture:'Chế độ giáo dục của Hàn Quốc — 6·3·3·4 và kỳ thi 수능',
      grammar:[
        { form:'이것 · 그것 · 저것', vi:'cái này · cái đó · cái kia',
          note:'이 = gần người nói, 그 = gần người nghe, 저 = xa cả hai. Cùng quy tắc với 여기·거기·저기.',
          ex:{ko:'이것은 한국어 책입니다.', vi:'Cái này là sách tiếng Hàn.'} },
        { form:'N + 이/가 있습니다 / 없습니다', vi:'có / không có N',
          note:'Danh từ có patchim dùng 이, không patchim dùng 가.',
          ex:{ko:'교실에 칠판이 있습니다.', vi:'Trong lớp học có bảng.'} },
        { form:'N + 이/가 아닙니다', vi:'không phải là N',
          note:'Dạng phủ định của 입니다.',
          ex:{ko:'저것은 공책이 아닙니다.', vi:'Cái kia không phải là vở.'} }
      ],
      vocab:[
        {ko:'학교', rom:'hakgyo', vi:'trường học', pos:'danh từ', hanja:'學校', hv:'học hiệu'},
        {ko:'교실', rom:'gyosil', vi:'lớp học', pos:'danh từ', hanja:'敎室', hv:'giáo thất'},
        {ko:'책', rom:'chaek', vi:'sách', pos:'danh từ', hanja:'冊', hv:'sách'},
        {ko:'공책', rom:'gongchaek', vi:'vở', pos:'danh từ', hanja:'空冊', hv:'không sách'},
        {ko:'연필', rom:'yeonpil', vi:'bút chì', pos:'danh từ', hanja:'鉛筆', hv:'diên bút'},
        {ko:'가방', rom:'gabang', vi:'cặp, túi xách', pos:'danh từ'},
        {ko:'의자', rom:'uija', vi:'ghế', pos:'danh từ', hanja:'椅子', hv:'ỷ tử'},
        {ko:'책상', rom:'chaeksang', vi:'bàn học', pos:'danh từ', hanja:'冊床', hv:'sách sàng'},
        {ko:'칠판', rom:'chilpan', vi:'bảng', pos:'danh từ', hanja:'漆板', hv:'tất bản'},
        {ko:'도서관', rom:'doseogwan', vi:'thư viện', pos:'danh từ', hanja:'圖書館', hv:'đồ thư quán'},
        {ko:'여기', rom:'yeogi', vi:'ở đây', pos:'đại từ'},
        {ko:'저것', rom:'jeogeot', vi:'cái kia', pos:'đại từ'}
      ],
      dialogue:[
        {sp:'수진', ko:'여기가 우리 교실이에요.', vi:'Đây là lớp học của chúng mình.'},
        {sp:'꾸언', ko:'그것은 무엇입니까?', vi:'Cái đó là cái gì vậy?'},
        {sp:'수진', ko:'이것은 한국어 책입니다.', vi:'Cái này là sách tiếng Hàn.'},
        {sp:'꾸언', ko:'도서관도 학교 안에 있습니까?', vi:'Thư viện cũng ở trong trường phải không?'}
      ]
    },
    {
      no:3, ko:'일상생활', vi:'Sinh hoạt hàng ngày', rom:'ilsangsaenghwal',
      skill:'Kể về sinh hoạt thường ngày, nói điều mình thích',
      pron:'Phụ âm: âm mũi (1)',
      culture:'Những điều người Hàn Quốc yêu thích',
      grammar:[
        { form:'-ㅂ니다 / -습니다', vi:'đuôi câu trần thuật trang trọng',
          note:'Gốc động từ hết bằng nguyên âm → -ㅂ니다; hết bằng patchim → -습니다.',
          ex:{ko:'저는 매일 한국어를 공부합니다.', vi:'Tôi học tiếng Hàn mỗi ngày.'} },
        { form:'N + 을 / 를', vi:'trợ từ tân ngữ',
          note:'Có patchim dùng 을, không patchim dùng 를.',
          ex:{ko:'친구가 커피를 마십니다.', vi:'Bạn tôi uống cà phê.'} },
        { form:'N + 에서', vi:'ở, tại (nơi diễn ra hành động)',
          note:'Khác 에 — 에서 luôn đi với động từ hành động, 에 đi với động từ di chuyển hoặc tồn tại.',
          ex:{ko:'도서관에서 책을 읽습니다.', vi:'Tôi đọc sách ở thư viện.'} }
      ],
      vocab:[
        {ko:'가다', rom:'gada', vi:'đi', pos:'động từ'},
        {ko:'오다', rom:'oda', vi:'đến', pos:'động từ'},
        {ko:'먹다', rom:'meokda', vi:'ăn', pos:'động từ'},
        {ko:'마시다', rom:'masida', vi:'uống', pos:'động từ'},
        {ko:'보다', rom:'boda', vi:'xem, nhìn', pos:'động từ'},
        {ko:'읽다', rom:'ikda', vi:'đọc', pos:'động từ'},
        {ko:'자다', rom:'jada', vi:'ngủ', pos:'động từ'},
        {ko:'사다', rom:'sada', vi:'mua', pos:'động từ'},
        {ko:'좋다', rom:'jota', vi:'tốt, thích', pos:'tính từ'},
        {ko:'많다', rom:'manta', vi:'nhiều', pos:'tính từ'},
        {ko:'식당', rom:'sikdang', vi:'quán ăn', pos:'danh từ', hanja:'食堂', hv:'thực đường'},
        {ko:'커피', rom:'keopi', vi:'cà phê', pos:'danh từ'}
      ],
      dialogue:[
        {sp:'민수', ko:'꾸언 씨는 아침에 무엇을 합니까?', vi:'Buổi sáng Quân làm gì?'},
        {sp:'꾸언', ko:'저는 도서관에서 한국어를 공부합니다.', vi:'Tôi học tiếng Hàn ở thư viện.'},
        {sp:'민수', ko:'점심에는 어디에서 밥을 먹습니까?', vi:'Buổi trưa bạn ăn cơm ở đâu?'},
        {sp:'꾸언', ko:'학교 식당에서 먹습니다.', vi:'Tôi ăn ở nhà ăn của trường.'}
      ]
    },
    {
      no:4, ko:'날짜와 요일', vi:'Ngày và thứ', rom:'naljjawa yoil',
      skill:'Nói về ngày tháng, thứ trong tuần và cách tính thời gian',
      pron:'Phát âm phụ âm cuối — patchim (1)',
      culture:'Cách biểu đạt con số trong tiếng Hàn',
      grammar:[
        { form:'Số Hán-Hàn (한자어 수)', vi:'일 이 삼 사 오 육 칠 팔 구 십',
          note:'Dùng cho ngày, tháng, phút, tiền, số điện thoại. Người Việt học rất nhanh vì trùng âm Hán-Việt: nhất nhị tam tứ ngũ lục thất bát cửu thập.',
          ex:{ko:'오늘은 십일 월 이십오 일입니다.', vi:'Hôm nay là ngày 25 tháng 11.'} },
        { form:'N + 와 / 과', vi:'và (nối hai danh từ)',
          note:'Không patchim dùng 와, có patchim dùng 과. Trong văn nói thường thay bằng 하고.',
          ex:{ko:'토요일과 일요일에 쉽니다.', vi:'Tôi nghỉ vào thứ Bảy và Chủ nhật.'} },
        { form:'N + 에 (thời gian)', vi:'vào lúc…',
          note:'Gắn sau mốc thời gian. Lưu ý: 오늘, 어제, 내일 KHÔNG đi với 에.',
          ex:{ko:'금요일에 시험이 있습니다.', vi:'Thứ Sáu có bài kiểm tra.'} }
      ],
      vocab:[
        {ko:'오늘', rom:'oneul', vi:'hôm nay', pos:'danh từ'},
        {ko:'내일', rom:'naeil', vi:'ngày mai', pos:'danh từ', hanja:'來日', hv:'lai nhật'},
        {ko:'어제', rom:'eoje', vi:'hôm qua', pos:'danh từ'},
        {ko:'월요일', rom:'woryoil', vi:'thứ Hai', pos:'danh từ', hanja:'月曜日', hv:'nguyệt diệu nhật'},
        {ko:'화요일', rom:'hwayoil', vi:'thứ Ba', pos:'danh từ', hanja:'火曜日', hv:'hoả diệu nhật'},
        {ko:'수요일', rom:'suyoil', vi:'thứ Tư', pos:'danh từ', hanja:'水曜日', hv:'thuỷ diệu nhật'},
        {ko:'목요일', rom:'mogyoil', vi:'thứ Năm', pos:'danh từ', hanja:'木曜日', hv:'mộc diệu nhật'},
        {ko:'금요일', rom:'geumyoil', vi:'thứ Sáu', pos:'danh từ', hanja:'金曜日', hv:'kim diệu nhật'},
        {ko:'토요일', rom:'toyoil', vi:'thứ Bảy', pos:'danh từ', hanja:'土曜日', hv:'thổ diệu nhật'},
        {ko:'일요일', rom:'iryoil', vi:'Chủ nhật', pos:'danh từ', hanja:'日曜日', hv:'nhật diệu nhật'},
        {ko:'생일', rom:'saengil', vi:'sinh nhật', pos:'danh từ', hanja:'生日', hv:'sinh nhật'},
        {ko:'시험', rom:'siheom', vi:'kỳ thi', pos:'danh từ', hanja:'試驗', hv:'thí nghiệm'}
      ],
      dialogue:[
        {sp:'수진', ko:'오늘이 며칠입니까?', vi:'Hôm nay là ngày mấy?'},
        {sp:'꾸언', ko:'십일 월 이십오 일입니다.', vi:'Là ngày 25 tháng 11.'},
        {sp:'수진', ko:'그럼 무슨 요일입니까?', vi:'Vậy là thứ mấy?'},
        {sp:'꾸언', ko:'화요일입니다. 내일은 수요일입니다.', vi:'Thứ Ba. Ngày mai là thứ Tư.'}
      ]
    },
    {
      no:5, ko:'하루 일과', vi:'Công việc trong ngày', rom:'haru ilgwa',
      skill:'Nói về giờ giấc và lịch trình một ngày',
      pron:'Âm nhẹ ㅎ (ㅎ 약화)',
      culture:'Sinh hoạt ở trường đại học của sinh viên Hàn Quốc và Việt Nam',
      grammar:[
        { form:'Số thuần Hàn (고유어 수)', vi:'하나 둘 셋 넷 다섯…',
          note:'Dùng cho giờ, tuổi, đếm đồ vật. Giờ dùng số thuần Hàn, phút dùng số Hán-Hàn: 세 시 삼십 분.',
          ex:{ko:'저는 일곱 시에 일어납니다.', vi:'Tôi thức dậy lúc 7 giờ.'} },
        { form:'-아요 / -어요', vi:'đuôi câu lịch sự thân mật',
          note:'Gốc có ㅏ hoặc ㅗ → -아요; còn lại → -어요; 하다 → 해요. Đây là đuôi dùng nhiều nhất trong đời sống.',
          ex:{ko:'아홉 시에 수업이 시작해요.', vi:'Chín giờ lớp học bắt đầu.'} },
        { form:'안 + động từ', vi:'không (phủ định)',
          note:'Đặt trước động từ. Với động từ 하다 thì tách ra: 공부 안 해요.',
          ex:{ko:'주말에는 학교에 안 가요.', vi:'Cuối tuần tôi không đến trường.'} }
      ],
      vocab:[
        {ko:'아침', rom:'achim', vi:'buổi sáng; bữa sáng', pos:'danh từ'},
        {ko:'점심', rom:'jeomsim', vi:'buổi trưa; bữa trưa', pos:'danh từ', hanja:'點心', hv:'điểm tâm'},
        {ko:'저녁', rom:'jeonyeok', vi:'buổi tối; bữa tối', pos:'danh từ'},
        {ko:'시간', rom:'sigan', vi:'thời gian; tiếng (đơn vị)', pos:'danh từ', hanja:'時間', hv:'thời gian'},
        {ko:'시', rom:'si', vi:'giờ', pos:'danh từ', hanja:'時', hv:'thời'},
        {ko:'분', rom:'bun', vi:'phút', pos:'danh từ', hanja:'分', hv:'phân'},
        {ko:'일어나다', rom:'ireonada', vi:'thức dậy', pos:'động từ'},
        {ko:'씻다', rom:'ssitda', vi:'rửa, tắm', pos:'động từ'},
        {ko:'출발하다', rom:'chulbalhada', vi:'xuất phát', pos:'động từ', hanja:'出發—', hv:'xuất phát'},
        {ko:'도착하다', rom:'dochakhada', vi:'đến nơi', pos:'động từ', hanja:'到着—', hv:'đáo trước'},
        {ko:'시작하다', rom:'sijakhada', vi:'bắt đầu', pos:'động từ', hanja:'始作—', hv:'thuỷ tác'},
        {ko:'끝나다', rom:'kkeutnada', vi:'kết thúc', pos:'động từ'},
        {ko:'쉬다', rom:'swida', vi:'nghỉ ngơi', pos:'động từ'}
      ],
      dialogue:[
        {sp:'민수', ko:'보통 몇 시에 일어나요?', vi:'Bạn thường dậy lúc mấy giờ?'},
        {sp:'꾸언', ko:'일곱 시에 일어나요.', vi:'Tôi dậy lúc 7 giờ.'},
        {sp:'민수', ko:'수업은 몇 시에 끝나요?', vi:'Mấy giờ thì hết tiết?'},
        {sp:'꾸언', ko:'네 시 삼십 분에 끝나요.', vi:'Kết thúc lúc 4 giờ 30.'}
      ]
    },
    {
      no:6, ko:'주말', vi:'Cuối tuần', rom:'jumal',
      skill:'Kể chuyện quá khứ, rủ rê và đề nghị',
      pron:'Âm bật hơi (1)',
      culture:'Người Hàn Quốc làm gì vào cuối tuần',
      grammar:[
        { form:'-았 / 었 -', vi:'thì quá khứ',
          note:'Gốc có ㅏ/ㅗ → -았어요; còn lại → -었어요; 하다 → 했어요.',
          ex:{ko:'지난 주말에 영화를 봤어요.', vi:'Cuối tuần trước tôi đã xem phim.'} },
        { form:'N + 하고', vi:'và; với',
          note:'Dùng trong văn nói, thay cho 와/과. Vừa nối danh từ vừa mang nghĩa "cùng với".',
          ex:{ko:'친구하고 등산을 했어요.', vi:'Tôi đã đi leo núi với bạn.'} },
        { form:'-(으)ㅂ시다', vi:'chúng ta hãy…',
          note:'Lời rủ rê trang trọng. Không dùng với người trên tuổi — khi đó nói -(으)ㄹ까요?',
          ex:{ko:'토요일에 같이 만납시다.', vi:'Thứ Bảy chúng ta gặp nhau nhé.'} }
      ],
      vocab:[
        {ko:'주말', rom:'jumal', vi:'cuối tuần', pos:'danh từ', hanja:'週末', hv:'chu mạt'},
        {ko:'영화', rom:'yeonghwa', vi:'phim', pos:'danh từ', hanja:'映畵', hv:'ánh hoạ'},
        {ko:'등산', rom:'deungsan', vi:'leo núi', pos:'danh từ', hanja:'登山', hv:'đăng sơn'},
        {ko:'여행', rom:'yeohaeng', vi:'du lịch', pos:'danh từ', hanja:'旅行', hv:'lữ hành'},
        {ko:'만나다', rom:'mannada', vi:'gặp', pos:'động từ'},
        {ko:'놀다', rom:'nolda', vi:'chơi', pos:'động từ'},
        {ko:'청소하다', rom:'cheongsohada', vi:'dọn dẹp', pos:'động từ', hanja:'淸掃—', hv:'thanh tảo'},
        {ko:'운동하다', rom:'undonghada', vi:'tập thể dục', pos:'động từ', hanja:'運動—', hv:'vận động'},
        {ko:'어디', rom:'eodi', vi:'ở đâu', pos:'từ để hỏi'},
        {ko:'무엇', rom:'mueot', vi:'cái gì', pos:'từ để hỏi'},
        {ko:'누구', rom:'nugu', vi:'ai', pos:'từ để hỏi'},
        {ko:'왜', rom:'wae', vi:'tại sao', pos:'từ để hỏi'}
      ],
      dialogue:[
        {sp:'수진', ko:'지난 주말에 뭐 했어요?', vi:'Cuối tuần trước bạn làm gì?'},
        {sp:'꾸언', ko:'친구하고 영화를 봤어요.', vi:'Tôi đi xem phim với bạn.'},
        {sp:'수진', ko:'재미있었어요?', vi:'Có hay không?'},
        {sp:'꾸언', ko:'네, 아주 좋았어요. 이번 주말에 같이 봅시다.', vi:'Vâng, rất hay. Cuối tuần này chúng ta cùng xem nhé.'}
      ]
    },
    {
      no:7, ko:'물건 사기 (1)', vi:'Mua hàng (1)', rom:'mulgeon sagi',
      skill:'Hỏi giá, mặc cả và nói điều mình muốn',
      pron:'Đối chiếu âm thanh hầu và âm bật hơi',
      culture:'Tiền tệ Hàn Quốc — đồng 원 và mệnh giá thường gặp',
      grammar:[
        { form:'-고 싶다', vi:'muốn làm gì',
          note:'Chỉ dùng cho ngôi thứ nhất và thứ hai. Ngôi thứ ba phải dùng -고 싶어하다.',
          ex:{ko:'저는 김치를 사고 싶어요.', vi:'Tôi muốn mua kimchi.'} },
        { form:'N + 은/는 (đối chiếu)', vi:'còn… thì…',
          note:'Ngoài vai trò nêu chủ đề, 은/는 còn dùng để so sánh hai vế.',
          ex:{ko:'이것은 싸요. 그런데 저것은 비싸요.', vi:'Cái này rẻ. Nhưng cái kia thì đắt.'} },
        { form:'Giản lược ㅡ (으 탈락)', vi:'quy tắc rụng ㅡ',
          note:'Gốc kết thúc bằng ㅡ thì rụng khi gặp -아/어: 바쁘다 → 바빠요, 크다 → 커요.',
          ex:{ko:'가격이 너무 비싸요.', vi:'Giá đắt quá.'} }
      ],
      vocab:[
        {ko:'얼마', rom:'eolma', vi:'bao nhiêu (tiền)', pos:'từ để hỏi'},
        {ko:'원', rom:'won', vi:'won (tiền Hàn)', pos:'đơn vị'},
        {ko:'개', rom:'gae', vi:'cái (đếm đồ vật)', pos:'đơn vị', hanja:'個', hv:'cá'},
        {ko:'병', rom:'byeong', vi:'chai', pos:'đơn vị', hanja:'甁', hv:'bình'},
        {ko:'권', rom:'gwon', vi:'quyển', pos:'đơn vị', hanja:'卷', hv:'quyển'},
        {ko:'가격', rom:'gagyeok', vi:'giá cả', pos:'danh từ', hanja:'價格', hv:'giá cách'},
        {ko:'싸다', rom:'ssada', vi:'rẻ', pos:'tính từ'},
        {ko:'비싸다', rom:'bissada', vi:'đắt', pos:'tính từ'},
        {ko:'주세요', rom:'juseyo', vi:'cho tôi…', pos:'biểu hiện'},
        {ko:'시장', rom:'sijang', vi:'chợ', pos:'danh từ', hanja:'市場', hv:'thị trường'},
        {ko:'가게', rom:'gage', vi:'cửa hàng', pos:'danh từ'},
        {ko:'돈', rom:'don', vi:'tiền', pos:'danh từ'}
      ],
      dialogue:[
        {sp:'꾸언', ko:'이 사과는 얼마예요?', vi:'Táo này bao nhiêu tiền ạ?'},
        {sp:'주인', ko:'한 개에 이천 원이에요.', vi:'Hai nghìn won một quả.'},
        {sp:'꾸언', ko:'조금 비싸요. 세 개 주세요.', vi:'Hơi đắt ạ. Cho tôi ba quả.'},
        {sp:'주인', ko:'네, 육천 원입니다.', vi:'Vâng, sáu nghìn won.'}
      ]
    },
    {
      no:8, ko:'음식', vi:'Thức ăn', rom:'eumsik',
      skill:'Gọi món, đưa ra yêu cầu trong quán ăn',
      pron:'Âm thanh hầu (2)',
      culture:'Văn hoá ẩm thực Hàn Quốc — bàn ăn chung và các món phụ 반찬',
      grammar:[
        { form:'-(으)세요', vi:'mời/đề nghị lịch sự',
          note:'Vừa là câu mệnh lệnh lịch sự, vừa là kính ngữ với chủ ngữ đáng kính.',
          ex:{ko:'여기 앉으세요.', vi:'Mời ngồi ở đây ạ.'} },
        { form:'-지 않다', vi:'không… (phủ định dài)',
          note:'Trang trọng hơn 안. Gắn vào gốc động từ: 맵지 않아요.',
          ex:{ko:'이 음식은 맵지 않아요.', vi:'Món này không cay.'} },
        { form:'-겠-', vi:'ý định, dự đoán',
          note:'Trong quán ăn, 먹겠습니다 nghĩa là "tôi sẽ ăn / tôi gọi món này".',
          ex:{ko:'저는 비빔밥을 먹겠습니다.', vi:'Tôi sẽ dùng cơm trộn.'} }
      ],
      vocab:[
        {ko:'밥', rom:'bap', vi:'cơm', pos:'danh từ'},
        {ko:'김치', rom:'gimchi', vi:'kimchi', pos:'danh từ'},
        {ko:'불고기', rom:'bulgogi', vi:'thịt nướng bulgogi', pos:'danh từ'},
        {ko:'비빔밥', rom:'bibimbap', vi:'cơm trộn', pos:'danh từ'},
        {ko:'냉면', rom:'naengmyeon', vi:'mì lạnh', pos:'danh từ', hanja:'冷麵', hv:'lãnh diện'},
        {ko:'물', rom:'mul', vi:'nước', pos:'danh từ'},
        {ko:'맵다', rom:'maepda', vi:'cay', pos:'tính từ'},
        {ko:'짜다', rom:'jjada', vi:'mặn', pos:'tính từ'},
        {ko:'달다', rom:'dalda', vi:'ngọt', pos:'tính từ'},
        {ko:'맛있다', rom:'masitda', vi:'ngon', pos:'tính từ'},
        {ko:'주문하다', rom:'jumunhada', vi:'gọi món, đặt hàng', pos:'động từ', hanja:'注文—', hv:'chú văn'},
        {ko:'식사하다', rom:'siksahada', vi:'dùng bữa', pos:'động từ', hanja:'食事—', hv:'thực sự'}
      ],
      dialogue:[
        {sp:'점원', ko:'어서 오세요. 뭘 드시겠어요?', vi:'Mời vào ạ. Anh dùng gì ạ?'},
        {sp:'꾸언', ko:'비빔밥 하나 주세요.', vi:'Cho tôi một suất cơm trộn.'},
        {sp:'점원', ko:'맵게 해 드릴까요?', vi:'Anh có ăn cay được không ạ?'},
        {sp:'꾸언', ko:'아니요, 맵지 않게 해 주세요.', vi:'Không ạ, làm giúp tôi ít cay thôi.'}
      ]
    },
    {
      no:9, ko:'집', vi:'Nhà cửa', rom:'jip',
      skill:'Mời khách đến nhà và chỉ đường',
      pron:'Phát âm ㄹ',
      culture:'Nhà ở Hàn Quốc — 아파트, 원룸 và hệ thống 전세',
      grammar:[
        { form:'N + (으)로', vi:'về phía, theo hướng',
          note:'Có patchim dùng 으로, không patchim dùng 로. Riêng patchim ㄹ dùng 로.',
          ex:{ko:'오른쪽으로 가세요.', vi:'Anh đi về phía bên phải.'} },
        { form:'-(으)ㄹ래요?', vi:'bạn có muốn… không?',
          note:'Lời rủ nhẹ nhàng, thân mật hơn -(으)ㅂ시다.',
          ex:{ko:'우리 집에 올래요?', vi:'Bạn đến nhà mình chơi nhé?'} },
        { form:'N + 도', vi:'cũng',
          note:'Thay thế 은/는, 이/가, 을/를 chứ không đứng cùng chúng.',
          ex:{ko:'제 방에는 책상도 있어요.', vi:'Trong phòng tôi cũng có bàn học.'} }
      ],
      vocab:[
        {ko:'집', rom:'jip', vi:'nhà', pos:'danh từ'},
        {ko:'방', rom:'bang', vi:'phòng', pos:'danh từ', hanja:'房', hv:'phòng'},
        {ko:'부엌', rom:'bueok', vi:'bếp', pos:'danh từ'},
        {ko:'화장실', rom:'hwajangsil', vi:'nhà vệ sinh', pos:'danh từ', hanja:'化粧室', hv:'hoá trang thất'},
        {ko:'거실', rom:'geosil', vi:'phòng khách', pos:'danh từ', hanja:'居室', hv:'cư thất'},
        {ko:'침대', rom:'chimdae', vi:'giường', pos:'danh từ', hanja:'寢臺', hv:'tẩm đài'},
        {ko:'냉장고', rom:'naengjanggo', vi:'tủ lạnh', pos:'danh từ', hanja:'冷藏庫', hv:'lãnh tàng khố'},
        {ko:'오른쪽', rom:'oreunjjok', vi:'bên phải', pos:'danh từ'},
        {ko:'왼쪽', rom:'oenjjok', vi:'bên trái', pos:'danh từ'},
        {ko:'앞', rom:'ap', vi:'phía trước', pos:'danh từ'},
        {ko:'뒤', rom:'dwi', vi:'phía sau', pos:'danh từ'},
        {ko:'옆', rom:'yeop', vi:'bên cạnh', pos:'danh từ'}
      ],
      dialogue:[
        {sp:'꾸언', ko:'수진 씨, 우리 집에 올래요?', vi:'Su-jin ơi, đến nhà mình chơi nhé?'},
        {sp:'수진', ko:'좋아요. 집이 어디예요?', vi:'Được đấy. Nhà bạn ở đâu?'},
        {sp:'꾸언', ko:'학교 앞에서 왼쪽으로 가세요.', vi:'Từ trước cổng trường bạn rẽ trái.'},
        {sp:'수진', ko:'은행 옆에 있는 아파트예요?', vi:'Là chung cư cạnh ngân hàng phải không?'}
      ]
    },
    {
      no:10, ko:'가족', vi:'Gia đình', rom:'gajok',
      skill:'Giới thiệu gia đình, hỏi và cung cấp thông tin',
      pron:'Phụ âm (2)',
      culture:'Cách xưng hô trong gia đình người Hàn Quốc',
      grammar:[
        { form:'-(으)시-', vi:'kính ngữ với chủ ngữ',
          note:'Gắn vào động từ khi chủ ngữ đáng kính: 가다 → 가세요, 있다 → 계세요.',
          ex:{ko:'할아버지께서 신문을 읽으세요.', vi:'Ông đang đọc báo.'} },
        { form:'N + 께서', vi:'dạng kính ngữ của 이/가',
          note:'Dùng cho ông bà, cha mẹ, thầy cô. Đi kèm với -(으)시-.',
          ex:{ko:'어머니께서 요리를 하세요.', vi:'Mẹ tôi đang nấu ăn.'} },
        { form:'Định từ số (2)', vi:'đếm người: 한 명, 두 분',
          note:'명 dùng bình thường, 분 là kính ngữ, 사람 dùng khi nói suồng sã.',
          ex:{ko:'우리 가족은 네 명이에요.', vi:'Gia đình tôi có bốn người.'} }
      ],
      vocab:[
        {ko:'가족', rom:'gajok', vi:'gia đình', pos:'danh từ', hanja:'家族', hv:'gia tộc'},
        {ko:'아버지', rom:'abeoji', vi:'bố', pos:'danh từ'},
        {ko:'어머니', rom:'eomeoni', vi:'mẹ', pos:'danh từ'},
        {ko:'형', rom:'hyeong', vi:'anh trai (em trai gọi)', pos:'danh từ', hanja:'兄', hv:'huynh'},
        {ko:'오빠', rom:'oppa', vi:'anh trai (em gái gọi)', pos:'danh từ'},
        {ko:'누나', rom:'nuna', vi:'chị gái (em trai gọi)', pos:'danh từ'},
        {ko:'언니', rom:'eonni', vi:'chị gái (em gái gọi)', pos:'danh từ'},
        {ko:'동생', rom:'dongsaeng', vi:'em', pos:'danh từ', hanja:'同生', hv:'đồng sinh'},
        {ko:'할아버지', rom:'harabeoji', vi:'ông', pos:'danh từ'},
        {ko:'할머니', rom:'halmeoni', vi:'bà', pos:'danh từ'},
        {ko:'계시다', rom:'gyesida', vi:'có, ở (kính ngữ của 있다)', pos:'động từ'},
        {ko:'연세', rom:'yeonse', vi:'tuổi (kính ngữ)', pos:'danh từ', hanja:'年歲', hv:'niên tuế'}
      ],
      dialogue:[
        {sp:'수진', ko:'가족이 몇 명이에요?', vi:'Gia đình bạn có mấy người?'},
        {sp:'꾸언', ko:'네 명이에요. 부모님하고 여동생이 있어요.', vi:'Bốn người. Có bố mẹ và em gái tôi.'},
        {sp:'수진', ko:'부모님께서는 무슨 일을 하세요?', vi:'Bố mẹ bạn làm nghề gì ạ?'},
        {sp:'꾸언', ko:'아버지께서는 선생님이세요.', vi:'Bố tôi là giáo viên ạ.'}
      ]
    },
    {
      no:11, ko:'날씨', vi:'Thời tiết', rom:'nalssi',
      skill:'Miêu tả thời tiết và nói về dự định',
      pron:'Âm thanh môn (3)',
      culture:'Bốn mùa ở Hàn Quốc và những trải nghiệm đi kèm',
      grammar:[
        { form:'-(으)ㄹ 거예요', vi:'sẽ… (dự định, dự đoán)',
          note:'Thì tương lai thông dụng nhất trong văn nói.',
          ex:{ko:'내일은 비가 올 거예요.', vi:'Ngày mai chắc sẽ mưa.'} },
        { form:'N부터 N까지', vi:'từ… đến… (thời gian)',
          note:'Với địa điểm thì dùng 에서…까지.',
          ex:{ko:'유월부터 팔월까지 아주 더워요.', vi:'Từ tháng Sáu đến tháng Tám rất nóng.'} },
        { form:'Bất quy tắc ㅂ', vi:'ㅂ biến thành 우',
          note:'춥다 → 추워요, 덥다 → 더워요, 어렵다 → 어려워요. Rất hay gặp ở tính từ.',
          ex:{ko:'한국의 겨울은 정말 추워요.', vi:'Mùa đông Hàn Quốc lạnh thật.'} }
      ],
      vocab:[
        {ko:'날씨', rom:'nalssi', vi:'thời tiết', pos:'danh từ'},
        {ko:'봄', rom:'bom', vi:'mùa xuân', pos:'danh từ'},
        {ko:'여름', rom:'yeoreum', vi:'mùa hè', pos:'danh từ'},
        {ko:'가을', rom:'gaeul', vi:'mùa thu', pos:'danh từ'},
        {ko:'겨울', rom:'gyeoul', vi:'mùa đông', pos:'danh từ'},
        {ko:'덥다', rom:'deopda', vi:'nóng', pos:'tính từ'},
        {ko:'춥다', rom:'chupda', vi:'lạnh', pos:'tính từ'},
        {ko:'따뜻하다', rom:'ttatteutada', vi:'ấm áp', pos:'tính từ'},
        {ko:'시원하다', rom:'siwonhada', vi:'mát mẻ', pos:'tính từ'},
        {ko:'비', rom:'bi', vi:'mưa', pos:'danh từ'},
        {ko:'눈', rom:'nun', vi:'tuyết', pos:'danh từ'},
        {ko:'바람', rom:'baram', vi:'gió', pos:'danh từ'}
      ],
      dialogue:[
        {sp:'민수', ko:'오늘 날씨가 어때요?', vi:'Hôm nay thời tiết thế nào?'},
        {sp:'꾸언', ko:'바람이 불고 조금 추워요.', vi:'Có gió và hơi lạnh.'},
        {sp:'민수', ko:'베트남 겨울도 추워요?', vi:'Mùa đông ở Việt Nam cũng lạnh chứ?'},
        {sp:'꾸언', ko:'하노이는 춥지만 눈은 안 와요.', vi:'Hà Nội lạnh nhưng không có tuyết.'}
      ]
    },
    {
      no:12, ko:'전화 (1)', vi:'Điện thoại (1)', rom:'jeonhwa',
      skill:'Gọi điện và nói rõ mục đích cuộc gọi',
      pron:'Phụ âm (3): âm lướt',
      culture:'Những con số điện thoại thú vị ở Hàn Quốc',
      grammar:[
        { form:'N + 에게 / 한테 / 께', vi:'cho, tới (người nhận)',
          note:'한테 dùng trong văn nói, 에게 trong văn viết, 께 là kính ngữ.',
          ex:{ko:'친구한테 전화했어요.', vi:'Tôi đã gọi điện cho bạn.'} },
        { form:'-지만', vi:'nhưng',
          note:'Nối hai vế đối lập trong cùng một câu.',
          ex:{ko:'전화했지만 안 받았어요.', vi:'Tôi đã gọi nhưng không ai nghe máy.'} },
        { form:'-(으)려고 하다', vi:'định làm gì',
          note:'Nhấn mạnh ý định đã cân nhắc, khác với -(으)ㄹ 거예요 mang tính dự đoán.',
          ex:{ko:'내일 선생님께 연락하려고 해요.', vi:'Ngày mai tôi định liên lạc với thầy.'} }
      ],
      vocab:[
        {ko:'전화', rom:'jeonhwa', vi:'điện thoại', pos:'danh từ', hanja:'電話', hv:'điện thoại'},
        {ko:'전화번호', rom:'jeonhwabeonho', vi:'số điện thoại', pos:'danh từ', hanja:'電話番號', hv:'điện thoại phiên hiệu'},
        {ko:'걸다', rom:'geolda', vi:'gọi (điện)', pos:'động từ'},
        {ko:'받다', rom:'batda', vi:'nhận, nghe máy', pos:'động từ'},
        {ko:'바꾸다', rom:'bakkuda', vi:'đổi, chuyển máy', pos:'động từ'},
        {ko:'통화', rom:'tonghwa', vi:'cuộc gọi', pos:'danh từ', hanja:'通話', hv:'thông thoại'},
        {ko:'문자', rom:'munja', vi:'tin nhắn', pos:'danh từ', hanja:'文字', hv:'văn tự'},
        {ko:'여보세요', rom:'yeoboseyo', vi:'a lô', pos:'biểu hiện'},
        {ko:'잠깐만요', rom:'jamkkanmanyo', vi:'đợi một chút', pos:'biểu hiện'},
        {ko:'끊다', rom:'kkeunta', vi:'cúp máy', pos:'động từ'},
        {ko:'연락하다', rom:'yeollakhada', vi:'liên lạc', pos:'động từ', hanja:'連絡—', hv:'liên lạc'},
        {ko:'부탁하다', rom:'butakhada', vi:'nhờ vả', pos:'động từ', hanja:'付託—', hv:'phó thác'}
      ],
      dialogue:[
        {sp:'꾸언', ko:'여보세요, 거기 민수 씨 집이지요?', vi:'A lô, đây có phải nhà anh Min-su không ạ?'},
        {sp:'민수', ko:'네, 제가 민수인데요.', vi:'Vâng, Min-su đây ạ.'},
        {sp:'꾸언', ko:'내일 같이 공부하려고 전화했어요.', vi:'Tôi gọi vì định mai cùng học với anh.'},
        {sp:'민수', ko:'좋아요. 그럼 두 시에 만나요.', vi:'Được thôi. Vậy hai giờ gặp nhau nhé.'}
      ]
    },
    {
      no:13, ko:'생일', vi:'Sinh nhật', rom:'saengil',
      skill:'Chúc mừng và giải thích lý do',
      pron:'Âm thanh vòm (구개음화)',
      culture:'Tiệc thôi nôi 돌잔치 — sinh nhật đầu tiên của trẻ Hàn Quốc',
      grammar:[
        { form:'-아 / 어서', vi:'vì… nên…; …rồi…',
          note:'Vừa chỉ nguyên nhân, vừa chỉ trình tự hành động. Không dùng với câu mệnh lệnh.',
          ex:{ko:'생일이어서 친구들을 초대했어요.', vi:'Vì là sinh nhật nên tôi đã mời các bạn.'} },
        { form:'-(으)ㄹ까요?', vi:'chúng ta… nhé? / liệu có… không?',
          note:'Vừa để rủ rê, vừa để hỏi ý kiến hoặc phỏng đoán.',
          ex:{ko:'무슨 선물을 살까요?', vi:'Chúng ta mua quà gì nhỉ?'} },
        { form:'못 + động từ', vi:'không thể (do hoàn cảnh)',
          note:'Khác 안 (không muốn). 못 nghĩa là muốn nhưng không làm được.',
          ex:{ko:'바빠서 파티에 못 갔어요.', vi:'Vì bận nên tôi đã không đi được tiệc.'} }
      ],
      vocab:[
        {ko:'생일', rom:'saengil', vi:'sinh nhật', pos:'danh từ', hanja:'生日', hv:'sinh nhật'},
        {ko:'선물', rom:'seonmul', vi:'quà', pos:'danh từ', hanja:'膳物', hv:'thiện vật'},
        {ko:'축하하다', rom:'chukhahada', vi:'chúc mừng', pos:'động từ', hanja:'祝賀—', hv:'chúc hạ'},
        {ko:'파티', rom:'pati', vi:'bữa tiệc', pos:'danh từ'},
        {ko:'케이크', rom:'keikeu', vi:'bánh kem', pos:'danh từ'},
        {ko:'초대하다', rom:'chodaehada', vi:'mời', pos:'động từ', hanja:'招待—', hv:'chiêu đãi'},
        {ko:'촛불', rom:'chotbul', vi:'nến', pos:'danh từ'},
        {ko:'카드', rom:'kadeu', vi:'thiệp', pos:'danh từ'},
        {ko:'꽃', rom:'kkot', vi:'hoa', pos:'danh từ'},
        {ko:'노래하다', rom:'noraehada', vi:'hát', pos:'động từ'},
        {ko:'나이', rom:'nai', vi:'tuổi', pos:'danh từ'},
        {ko:'돌', rom:'dol', vi:'thôi nôi (sinh nhật 1 tuổi)', pos:'danh từ'}
      ],
      dialogue:[
        {sp:'수진', ko:'꾸언 씨, 생일 축하해요!', vi:'Quân ơi, chúc mừng sinh nhật!'},
        {sp:'꾸언', ko:'고마워요. 와 주셔서 감사합니다.', vi:'Cảm ơn bạn. Cảm ơn vì đã đến.'},
        {sp:'수진', ko:'이거 작은 선물이에요.', vi:'Đây là món quà nhỏ.'},
        {sp:'꾸언', ko:'민수 씨는 바빠서 못 왔어요.', vi:'Anh Min-su bận nên không đến được.'}
      ]
    },
    {
      no:14, ko:'취미', vi:'Sở thích', rom:'chwimi',
      skill:'Nói về khả năng và sở thích của mình',
      pron:'Phụ âm (4): âm mũi',
      culture:'Thú vui của người Hàn Quốc — từ 등산 đến 노래방',
      grammar:[
        { form:'-(으)ㄹ 수 있다 / 없다', vi:'có thể / không thể',
          note:'Nói về khả năng. Khác 못 ở chỗ đây là năng lực chứ không phải hoàn cảnh.',
          ex:{ko:'저는 수영할 수 있어요.', vi:'Tôi biết bơi.'} },
        { form:'-기 / -는 것', vi:'danh từ hoá động từ',
          note:'취미는 + V-기 + 예요 là mẫu câu nói sở thích chuẩn nhất.',
          ex:{ko:'제 취미는 사진 찍기예요.', vi:'Sở thích của tôi là chụp ảnh.'} },
        { form:'Bất quy tắc ㄷ', vi:'ㄷ biến thành ㄹ',
          note:'듣다 → 들어요, 걷다 → 걸어요. Nhưng 받다, 닫다 thì không đổi.',
          ex:{ko:'저는 음악을 자주 들어요.', vi:'Tôi hay nghe nhạc.'} }
      ],
      vocab:[
        {ko:'취미', rom:'chwimi', vi:'sở thích', pos:'danh từ', hanja:'趣味', hv:'thú vị'},
        {ko:'운동', rom:'undong', vi:'thể thao', pos:'danh từ', hanja:'運動', hv:'vận động'},
        {ko:'수영', rom:'suyeong', vi:'bơi lội', pos:'danh từ', hanja:'水泳', hv:'thuỷ vịnh'},
        {ko:'축구', rom:'chukgu', vi:'bóng đá', pos:'danh từ', hanja:'蹴球', hv:'xúc cầu'},
        {ko:'노래', rom:'norae', vi:'bài hát', pos:'danh từ'},
        {ko:'그림', rom:'geurim', vi:'tranh vẽ', pos:'danh từ'},
        {ko:'자주', rom:'jaju', vi:'thường xuyên', pos:'phó từ'},
        {ko:'가끔', rom:'gakkeum', vi:'thỉnh thoảng', pos:'phó từ'},
        {ko:'보통', rom:'botong', vi:'thường thì', pos:'phó từ', hanja:'普通', hv:'phổ thông'},
        {ko:'잘하다', rom:'jalhada', vi:'giỏi', pos:'động từ'},
        {ko:'못하다', rom:'motada', vi:'kém, không giỏi', pos:'động từ'},
        {ko:'듣다', rom:'deutda', vi:'nghe', pos:'động từ'}
      ],
      dialogue:[
        {sp:'민수', ko:'취미가 뭐예요?', vi:'Sở thích của bạn là gì?'},
        {sp:'꾸언', ko:'제 취미는 음악 듣기예요.', vi:'Sở thích của tôi là nghe nhạc.'},
        {sp:'민수', ko:'악기도 연주할 수 있어요?', vi:'Bạn chơi được nhạc cụ nào không?'},
        {sp:'꾸언', ko:'기타를 조금 칠 수 있어요.', vi:'Tôi chơi guitar được một chút.'}
      ]
    },
    {
      no:15, ko:'교통 (1)', vi:'Giao thông (1)', rom:'gyotong',
      skill:'Sử dụng phương tiện công cộng, hỏi đường đi',
      pron:'Âm bật hơi (2)',
      culture:'Giao thông công cộng Hàn Quốc — thẻ T-money và hệ thống tàu điện ngầm',
      grammar:[
        { form:'N에서 N까지', vi:'từ… đến… (địa điểm)',
          note:'Thường đi kèm 얼마나 걸려요? để hỏi mất bao lâu.',
          ex:{ko:'집에서 학교까지 삼십 분 걸려요.', vi:'Từ nhà đến trường mất 30 phút.'} },
        { form:'N + (으)로 (phương tiện)', vi:'bằng, đi bằng',
          note:'지하철로, 버스로, 자전거로. Riêng "đi bộ" là 걸어서.',
          ex:{ko:'저는 지하철로 학교에 가요.', vi:'Tôi đến trường bằng tàu điện ngầm.'} },
        { form:'-(으)러 가다 / 오다', vi:'đi/đến để làm gì',
          note:'Chỉ dùng với động từ di chuyển: 가다, 오다, 다니다.',
          ex:{ko:'책을 빌리러 도서관에 가요.', vi:'Tôi đến thư viện để mượn sách.'} }
      ],
      vocab:[
        {ko:'버스', rom:'beoseu', vi:'xe buýt', pos:'danh từ'},
        {ko:'지하철', rom:'jihacheol', vi:'tàu điện ngầm', pos:'danh từ', hanja:'地下鐵', hv:'địa hạ thiết'},
        {ko:'택시', rom:'taeksi', vi:'taxi', pos:'danh từ'},
        {ko:'기차', rom:'gicha', vi:'tàu hoả', pos:'danh từ', hanja:'汽車', hv:'khí xa'},
        {ko:'자전거', rom:'jajeongeo', vi:'xe đạp', pos:'danh từ', hanja:'自轉車', hv:'tự chuyển xa'},
        {ko:'정류장', rom:'jeongnyujang', vi:'bến xe buýt', pos:'danh từ', hanja:'停留場', hv:'đình lưu trường'},
        {ko:'역', rom:'yeok', vi:'ga, nhà ga', pos:'danh từ', hanja:'驛', hv:'dịch'},
        {ko:'타다', rom:'tada', vi:'lên xe, đi (phương tiện)', pos:'động từ'},
        {ko:'내리다', rom:'naerida', vi:'xuống xe', pos:'động từ'},
        {ko:'갈아타다', rom:'garatada', vi:'đổi tuyến, chuyển xe', pos:'động từ'},
        {ko:'얼마나', rom:'eolmana', vi:'bao lâu, bao nhiêu', pos:'phó từ'},
        {ko:'걸리다', rom:'geollida', vi:'mất (thời gian)', pos:'động từ'}
      ],
      dialogue:[
        {sp:'꾸언', ko:'명동에 어떻게 가요?', vi:'Đi Myeongdong thế nào ạ?'},
        {sp:'행인', ko:'지하철 사호선을 타세요.', vi:'Anh đi tàu điện ngầm tuyến số 4.'},
        {sp:'꾸언', ko:'여기에서 명동까지 얼마나 걸려요?', vi:'Từ đây đến Myeongdong mất bao lâu ạ?'},
        {sp:'행인', ko:'이십 분쯤 걸려요. 서울역에서 갈아타세요.', vi:'Khoảng 20 phút. Anh đổi tuyến ở ga Seoul.'}
      ]
    }
  ]
};

/* ---- Đánh dấu cấp cho các bài hiện có (Sơ cấp 1) ---- */
COURSE_KO.lessons.forEach(l => { if (!l.level) l.level = 'so-cap-1'; });

/* ============================================================
   Sơ cấp 2 (초급 2) — 15 bài. Khung chương trình bám bộ giáo trình
   « Tiếng Hàn Quốc tổng hợp dành cho người Việt Nam », phần từ vựng,
   câu ví dụ và hội thoại do LangLab tự biên soạn (bậc A2).
   ============================================================ */
COURSE_KO.lessons.push(
  {
    no:1, level:'so-cap-2', ko:'한국 생활', vi:'Cuộc sống ở Hàn Quốc', rom:'hanguk saenghwal',
    skill:'Nói về việc thích nghi với cuộc sống ở Hàn', pron:'Nối âm (연음)',
    culture:'Những khác biệt trong nếp sống thường ngày ở Hàn Quốc',
    grammar:[
      { form:'N + 보다 (더)', vi:'hơn (so sánh)', note:'So sánh hai đối tượng; 더 (hơn) có thể lược bỏ.',
        ex:{ko:'서울은 하노이보다 추워요.', vi:'Seoul lạnh hơn Hà Nội.'} },
      { form:'V + (으)ㄹ 수 있다 / 없다', vi:'có thể / không thể', note:'있다 = làm được, 없다 = không làm được.',
        ex:{ko:'저는 매운 음식을 먹을 수 있어요.', vi:'Tôi ăn được đồ cay.'} }
    ],
    vocab:[
      {ko:'생활', rom:'saenghwal', vi:'cuộc sống, sinh hoạt', pos:'danh từ', hanja:'生活', hv:'sinh hoạt'},
      {ko:'적응하다', rom:'jeogeunghada', vi:'thích nghi', pos:'động từ', hanja:'適應—', hv:'thích ứng'},
      {ko:'익숙하다', rom:'iksukhada', vi:'quen thuộc', pos:'tính từ'},
      {ko:'낯설다', rom:'natseolda', vi:'lạ lẫm', pos:'tính từ'},
      {ko:'다르다', rom:'dareuda', vi:'khác', pos:'tính từ'},
      {ko:'비슷하다', rom:'biseutada', vi:'giống, tương tự', pos:'tính từ'},
      {ko:'편하다', rom:'pyeonhada', vi:'thoải mái, tiện', pos:'tính từ', hanja:'便—', hv:'tiện'},
      {ko:'불편하다', rom:'bulpyeonhada', vi:'bất tiện', pos:'tính từ', hanja:'不便—', hv:'bất tiện'},
      {ko:'물가', rom:'mulga', vi:'vật giá', pos:'danh từ', hanja:'物價', hv:'vật giá'},
      {ko:'외국', rom:'oeguk', vi:'nước ngoài', pos:'danh từ', hanja:'外國', hv:'ngoại quốc'}
    ],
    dialogue:[
      {sp:'민수', ko:'꾸언 씨, 한국 생활은 어때요?', vi:'Quân ơi, cuộc sống ở Hàn thế nào?'},
      {sp:'꾸언', ko:'처음에는 불편했는데 이제 익숙해졌어요.', vi:'Lúc đầu bất tiện nhưng giờ quen rồi.'},
      {sp:'민수', ko:'뭐가 제일 다르다고 생각해요?', vi:'Bạn thấy khác nhất là gì?'},
      {sp:'꾸언', ko:'한국은 베트남보다 겨울이 훨씬 추워요.', vi:'Mùa đông Hàn Quốc lạnh hơn Việt Nam nhiều.'}
    ]
  },
  {
    no:2, level:'so-cap-2', ko:'시장과 쇼핑', vi:'Chợ và mua sắm', rom:'sijang-gwa syoping',
    skill:'Hỏi giá và mặc cả khi mua đồ', pron:'Âm căng sau phụ âm cuối',
    culture:'Chợ truyền thống và văn hoá mặc cả ở Hàn Quốc',
    grammar:[
      { form:'V + 아/어 주세요', vi:'làm ơn ... cho', note:'Nhờ người khác làm việc gì một cách lịch sự.',
        ex:{ko:'조금만 깎아 주세요.', vi:'Bớt một chút cho tôi nhé.'} },
      { form:'A/V + 지만', vi:'nhưng', note:'Nối hai vế trái ngược nhau.',
        ex:{ko:'비싸지만 사고 싶어요.', vi:'Đắt nhưng tôi vẫn muốn mua.'} }
    ],
    vocab:[
      {ko:'시장', rom:'sijang', vi:'chợ', pos:'danh từ', hanja:'市場', hv:'thị trường'},
      {ko:'가격', rom:'gagyeok', vi:'giá', pos:'danh từ', hanja:'價格', hv:'giá cách'},
      {ko:'값', rom:'gap', vi:'giá tiền', pos:'danh từ'},
      {ko:'깎다', rom:'kkakda', vi:'mặc cả, giảm giá', pos:'động từ'},
      {ko:'싸다', rom:'ssada', vi:'rẻ', pos:'tính từ'},
      {ko:'비싸다', rom:'bissada', vi:'đắt', pos:'tính từ'},
      {ko:'현금', rom:'hyeongeum', vi:'tiền mặt', pos:'danh từ', hanja:'現金', hv:'hiện kim'},
      {ko:'카드', rom:'kadeu', vi:'thẻ', pos:'danh từ'},
      {ko:'봉투', rom:'bongtu', vi:'túi, bao', pos:'danh từ', hanja:'封套', hv:'phong sáo'},
      {ko:'손님', rom:'sonnim', vi:'khách', pos:'danh từ'}
    ],
    dialogue:[
      {sp:'손님', ko:'이 사과 한 개에 얼마예요?', vi:'Táo này bao nhiêu một quả?'},
      {sp:'주인', ko:'하나에 천 원이에요.', vi:'Một nghìn won một quả.'},
      {sp:'손님', ko:'조금 비싸요. 깎아 주세요.', vi:'Hơi đắt. Bớt cho tôi chút.'},
      {sp:'주인', ko:'그럼 세 개에 이천오백 원 하세요.', vi:'Vậy ba quả 2500 won nhé.'}
    ]
  },
  {
    no:3, level:'so-cap-2', ko:'교통 (2)', vi:'Giao thông (2)', rom:'gyotong',
    skill:'Hỏi đường và đổi tuyến xe', pron:'Nối âm ㄴ / ㄹ',
    culture:'Hệ thống tàu điện ngầm ở Seoul',
    grammar:[
      { form:'N + (으)로', vi:'bằng (phương tiện), hướng', note:'Chỉ phương tiện di chuyển hoặc phương hướng.',
        ex:{ko:'지하철로 가세요.', vi:'Hãy đi bằng tàu điện ngầm.'} },
      { form:'V + 아/어서 (trình tự)', vi:'... rồi ...', note:'Hành động trước làm nền cho hành động sau, cùng chủ ngữ.',
        ex:{ko:'서울역에서 내려서 갈아타세요.', vi:'Xuống ở ga Seoul rồi đổi tuyến.'} }
    ],
    vocab:[
      {ko:'지하철', rom:'jihacheol', vi:'tàu điện ngầm', pos:'danh từ', hanja:'地下鐵', hv:'địa hạ thiết'},
      {ko:'버스', rom:'beoseu', vi:'xe buýt', pos:'danh từ'},
      {ko:'택시', rom:'taeksi', vi:'taxi', pos:'danh từ'},
      {ko:'갈아타다', rom:'garatada', vi:'đổi tuyến, chuyển xe', pos:'động từ'},
      {ko:'내리다', rom:'naerida', vi:'xuống (xe)', pos:'động từ'},
      {ko:'타다', rom:'tada', vi:'lên (xe)', pos:'động từ'},
      {ko:'정류장', rom:'jeongnyujang', vi:'trạm dừng', pos:'danh từ', hanja:'停留場', hv:'đình lưu trường'},
      {ko:'방향', rom:'banghyang', vi:'hướng', pos:'danh từ', hanja:'方向', hv:'phương hướng'},
      {ko:'표', rom:'pyo', vi:'vé', pos:'danh từ', hanja:'票', hv:'phiếu'},
      {ko:'지도', rom:'jido', vi:'bản đồ', pos:'danh từ', hanja:'地圖', hv:'địa đồ'}
    ],
    dialogue:[
      {sp:'꾸언', ko:'실례합니다. 명동에 어떻게 가요?', vi:'Xin lỗi, đi Myeongdong thế nào ạ?'},
      {sp:'행인', ko:'여기에서 지하철을 타세요.', vi:'Anh lên tàu điện ngầm ở đây.'},
      {sp:'꾸언', ko:'갈아타야 해요?', vi:'Có phải đổi tuyến không ạ?'},
      {sp:'행인', ko:'네, 충무로역에서 갈아타세요.', vi:'Vâng, đổi tuyến ở ga Chungmuro.'}
    ]
  },
  {
    no:4, level:'so-cap-2', ko:'몸과 건강', vi:'Cơ thể và sức khoẻ', rom:'mom-gwa geongang',
    skill:'Nói về triệu chứng và đi khám bệnh', pron:'Âm bật hơi (거센소리)',
    culture:'Hiệu thuốc và bệnh viện ở Hàn Quốc',
    grammar:[
      { form:'V + 아/어야 하다 / 되다', vi:'phải', note:'Diễn tả việc bắt buộc phải làm.',
        ex:{ko:'약을 먹어야 해요.', vi:'Bạn phải uống thuốc.'} },
      { form:'V + 지 마세요', vi:'đừng', note:'Câu cấm hoặc khuyên không nên làm.',
        ex:{ko:'너무 무리하지 마세요.', vi:'Đừng làm quá sức.'} }
    ],
    vocab:[
      {ko:'몸', rom:'mom', vi:'cơ thể', pos:'danh từ'},
      {ko:'머리', rom:'meori', vi:'đầu', pos:'danh từ'},
      {ko:'배', rom:'bae', vi:'bụng', pos:'danh từ'},
      {ko:'감기', rom:'gamgi', vi:'cảm cúm', pos:'danh từ', hanja:'感氣', hv:'cảm khí'},
      {ko:'열', rom:'yeol', vi:'sốt', pos:'danh từ', hanja:'熱', hv:'nhiệt'},
      {ko:'기침', rom:'gichim', vi:'ho', pos:'danh từ'},
      {ko:'아프다', rom:'apeuda', vi:'đau, ốm', pos:'tính từ'},
      {ko:'병원', rom:'byeongwon', vi:'bệnh viện', pos:'danh từ', hanja:'病院', hv:'bệnh viện'},
      {ko:'약', rom:'yak', vi:'thuốc', pos:'danh từ', hanja:'藥', hv:'dược'},
      {ko:'약국', rom:'yakguk', vi:'hiệu thuốc', pos:'danh từ', hanja:'藥局', hv:'dược cục'}
    ],
    dialogue:[
      {sp:'의사', ko:'어디가 아파요?', vi:'Anh đau ở đâu?'},
      {sp:'꾸언', ko:'어제부터 머리가 아프고 열이 나요.', vi:'Từ hôm qua tôi đau đầu và bị sốt.'},
      {sp:'의사', ko:'감기예요. 약을 먹고 푹 쉬어야 해요.', vi:'Cảm cúm thôi. Phải uống thuốc và nghỉ ngơi cho khoẻ.'},
      {sp:'꾸언', ko:'네, 알겠습니다. 감사합니다.', vi:'Vâng, tôi hiểu rồi. Cảm ơn bác sĩ.'}
    ]
  },
  {
    no:5, level:'so-cap-2', ko:'약속과 초대', vi:'Hẹn và mời', rom:'yaksok-gwa chodae',
    skill:'Hẹn gặp, mời và nhận lời', pron:'Ngữ điệu câu hỏi',
    culture:'Văn hoá mời khách đến nhà ở Hàn Quốc',
    grammar:[
      { form:'V + (으)ㄹ까요?', vi:'... nhé? / cùng ... không?', note:'Đề nghị hoặc rủ rê làm việc gì cùng nhau.',
        ex:{ko:'같이 저녁 먹을까요?', vi:'Cùng ăn tối nhé?'} },
      { form:'V + 기로 하다', vi:'quyết định / hẹn sẽ', note:'Hẹn ước hoặc quyết định làm gì.',
        ex:{ko:'토요일에 만나기로 했어요.', vi:'Chúng tôi hẹn gặp vào thứ Bảy.'} }
    ],
    vocab:[
      {ko:'약속', rom:'yaksok', vi:'cuộc hẹn', pos:'danh từ', hanja:'約束', hv:'ước thúc'},
      {ko:'초대하다', rom:'chodaehada', vi:'mời', pos:'động từ', hanja:'招待—', hv:'chiêu đãi'},
      {ko:'시간', rom:'sigan', vi:'thời gian', pos:'danh từ', hanja:'時間', hv:'thời gian'},
      {ko:'늦다', rom:'neutda', vi:'muộn, trễ', pos:'động từ'},
      {ko:'일찍', rom:'iljjik', vi:'sớm', pos:'trạng từ'},
      {ko:'만나다', rom:'mannada', vi:'gặp', pos:'động từ'},
      {ko:'취소하다', rom:'chwisohada', vi:'huỷ', pos:'động từ', hanja:'取消—', hv:'thủ tiêu'},
      {ko:'준비하다', rom:'junbihada', vi:'chuẩn bị', pos:'động từ', hanja:'準備—', hv:'chuẩn bị'},
      {ko:'파티', rom:'pati', vi:'tiệc', pos:'danh từ'},
      {ko:'선물', rom:'seonmul', vi:'quà', pos:'danh từ', hanja:'膳物', hv:'thiện vật'}
    ],
    dialogue:[
      {sp:'수진', ko:'이번 주말에 시간 있어요?', vi:'Cuối tuần này bạn có thời gian không?'},
      {sp:'꾸언', ko:'네, 괜찮아요. 왜요?', vi:'Có, ổn mà. Sao thế?'},
      {sp:'수진', ko:'우리 집에서 파티를 할까요?', vi:'Mình tổ chức tiệc ở nhà mình nhé?'},
      {sp:'꾸언', ko:'좋아요! 그럼 토요일에 만나기로 해요.', vi:'Hay đó! Vậy hẹn gặp thứ Bảy nhé.'}
    ]
  },
  {
    no:6, level:'so-cap-2', ko:'여행', vi:'Du lịch', rom:'yeohaeng',
    skill:'Nói về kinh nghiệm và kế hoạch du lịch', pron:'Trọng âm câu',
    culture:'Các điểm du lịch nổi tiếng ở Hàn (Jeju, Busan)',
    grammar:[
      { form:'V + 아/어 봤다', vi:'đã từng ...', note:'Kinh nghiệm đã thử hoặc đã làm.',
        ex:{ko:'제주도에 가 봤어요.', vi:'Tôi đã từng đến đảo Jeju.'} },
      { form:'V + (으)ㄹ 거예요', vi:'sẽ (dự định)', note:'Kế hoạch, dự định trong tương lai.',
        ex:{ko:'다음 달에 부산에 갈 거예요.', vi:'Tháng sau tôi sẽ đi Busan.'} }
    ],
    vocab:[
      {ko:'여행', rom:'yeohaeng', vi:'du lịch', pos:'danh từ', hanja:'旅行', hv:'lữ hành'},
      {ko:'계획', rom:'gyehoek', vi:'kế hoạch', pos:'danh từ', hanja:'計劃', hv:'kế hoạch'},
      {ko:'예약하다', rom:'yeyakhada', vi:'đặt trước', pos:'động từ', hanja:'豫約—', hv:'dự ước'},
      {ko:'짐', rom:'jim', vi:'hành lý', pos:'danh từ'},
      {ko:'바다', rom:'bada', vi:'biển', pos:'danh từ'},
      {ko:'산', rom:'san', vi:'núi', pos:'danh từ', hanja:'山', hv:'sơn'},
      {ko:'구경하다', rom:'gugyeonghada', vi:'tham quan, ngắm', pos:'động từ'},
      {ko:'사진', rom:'sajin', vi:'ảnh', pos:'danh từ', hanja:'寫眞', hv:'tả chân'},
      {ko:'유명하다', rom:'yumyeonghada', vi:'nổi tiếng', pos:'tính từ', hanja:'有名—', hv:'hữu danh'},
      {ko:'출발하다', rom:'chulbalhada', vi:'khởi hành', pos:'động từ', hanja:'出發—', hv:'xuất phát'}
    ],
    dialogue:[
      {sp:'민수', ko:'방학에 뭐 할 거예요?', vi:'Kỳ nghỉ bạn sẽ làm gì?'},
      {sp:'꾸언', ko:'제주도에 갈 거예요.', vi:'Tôi sẽ đi đảo Jeju.'},
      {sp:'민수', ko:'제주도에 가 봤어요?', vi:'Bạn từng đến Jeju chưa?'},
      {sp:'꾸언', ko:'아니요, 이번이 처음이에요.', vi:'Chưa, lần này là lần đầu.'}
    ]
  },
  {
    no:7, level:'so-cap-2', ko:'우체국과 은행', vi:'Bưu điện và ngân hàng', rom:'ucheguk-gwa eunhaeng',
    skill:'Gửi bưu phẩm và giao dịch ngân hàng', pron:'Nối âm với ㅎ',
    culture:'Dịch vụ hành chính công ở Hàn Quốc',
    grammar:[
      { form:'V + (으)려고 하다', vi:'định (làm gì)', note:'Ý định của người nói.',
        ex:{ko:'소포를 보내려고 해요.', vi:'Tôi định gửi bưu kiện.'} },
      { form:'N + 에게 / 한테', vi:'cho, đến (ai)', note:'Chỉ đối tượng nhận; 한테 dùng khi nói thân mật.',
        ex:{ko:'친구에게 편지를 써요.', vi:'Tôi viết thư cho bạn.'} }
    ],
    vocab:[
      {ko:'우체국', rom:'ucheguk', vi:'bưu điện', pos:'danh từ', hanja:'郵遞局', hv:'bưu đệ cục'},
      {ko:'편지', rom:'pyeonji', vi:'thư', pos:'danh từ', hanja:'便紙', hv:'tiện chỉ'},
      {ko:'소포', rom:'sopo', vi:'bưu kiện', pos:'danh từ', hanja:'小包', hv:'tiểu bao'},
      {ko:'보내다', rom:'bonaeda', vi:'gửi', pos:'động từ'},
      {ko:'우표', rom:'upyo', vi:'tem', pos:'danh từ', hanja:'郵票', hv:'bưu phiếu'},
      {ko:'은행', rom:'eunhaeng', vi:'ngân hàng', pos:'danh từ', hanja:'銀行', hv:'ngân hàng'},
      {ko:'통장', rom:'tongjang', vi:'sổ tài khoản', pos:'danh từ', hanja:'通帳', hv:'thông trướng'},
      {ko:'돈', rom:'don', vi:'tiền', pos:'danh từ'},
      {ko:'바꾸다', rom:'bakkuda', vi:'đổi', pos:'động từ'},
      {ko:'계좌', rom:'gyejwa', vi:'tài khoản', pos:'danh từ', hanja:'計座', hv:'kế toạ'}
    ],
    dialogue:[
      {sp:'직원', ko:'어서 오세요. 뭘 도와드릴까요?', vi:'Xin chào. Tôi giúp gì được ạ?'},
      {sp:'꾸언', ko:'베트남에 소포를 보내려고 해요.', vi:'Tôi muốn gửi bưu kiện về Việt Nam.'},
      {sp:'직원', ko:'안에 뭐가 들어 있어요?', vi:'Bên trong có gì ạ?'},
      {sp:'꾸언', ko:'책하고 옷이 들어 있어요.', vi:'Có sách và quần áo.'}
    ]
  },
  {
    no:8, level:'so-cap-2', ko:'방학과 계획', vi:'Kỳ nghỉ và kế hoạch', rom:'banghak-gwa gyehoek',
    skill:'Nói về dự định trong kỳ nghỉ', pron:'Âm dài (장음)',
    culture:'Kỳ nghỉ của sinh viên Hàn Quốc',
    grammar:[
      { form:'V + 겠', vi:'sẽ, quyết tâm', note:'Ý chí mạnh của người nói hoặc lời phỏng đoán.',
        ex:{ko:'열심히 공부하겠어요.', vi:'Tôi sẽ học thật chăm chỉ.'} },
      { form:'N + 동안', vi:'trong (khoảng thời gian)', note:'Khoảng thời gian một việc diễn ra.',
        ex:{ko:'방학 동안 아르바이트를 했어요.', vi:'Trong kỳ nghỉ tôi đã làm thêm.'} }
    ],
    vocab:[
      {ko:'방학', rom:'banghak', vi:'kỳ nghỉ (học)', pos:'danh từ', hanja:'放學', hv:'phóng học'},
      {ko:'고향', rom:'gohyang', vi:'quê hương', pos:'danh từ', hanja:'故鄕', hv:'cố hương'},
      {ko:'아르바이트', rom:'areubaiteu', vi:'việc làm thêm', pos:'danh từ'},
      {ko:'쉬다', rom:'swida', vi:'nghỉ ngơi', pos:'động từ'},
      {ko:'준비', rom:'junbi', vi:'sự chuẩn bị', pos:'danh từ', hanja:'準備', hv:'chuẩn bị'},
      {ko:'배우다', rom:'baeuda', vi:'học', pos:'động từ'},
      {ko:'운동', rom:'undong', vi:'thể dục', pos:'danh từ', hanja:'運動', hv:'vận động'},
      {ko:'푹', rom:'puk', vi:'(nghỉ) thật kỹ', pos:'trạng từ'},
      {ko:'다녀오다', rom:'danyeooda', vi:'đi (rồi về)', pos:'động từ'},
      {ko:'계속', rom:'gyesok', vi:'liên tục', pos:'trạng từ', hanja:'繼續', hv:'kế tục'}
    ],
    dialogue:[
      {sp:'수진', ko:'방학 동안 뭐 할 거예요?', vi:'Trong kỳ nghỉ bạn định làm gì?'},
      {sp:'꾸언', ko:'고향에 다녀오겠어요.', vi:'Tôi sẽ về quê một chuyến.'},
      {sp:'수진', ko:'좋겠어요! 얼마 동안 있을 거예요?', vi:'Thích nhỉ! Bạn ở bao lâu?'},
      {sp:'꾸언', ko:'이 주 동안 있을 거예요.', vi:'Tôi sẽ ở hai tuần.'}
    ]
  },
  {
    no:9, level:'so-cap-2', ko:'부탁', vi:'Nhờ vả', rom:'butak',
    skill:'Nhờ giúp đỡ và xin phép', pron:'Ngữ điệu khi nhờ vả',
    culture:'Cách nhờ vả lịch sự trong tiếng Hàn',
    grammar:[
      { form:'V + 아/어 주다', vi:'làm (giúp)', note:'Làm việc gì cho người khác; 주세요 là dạng lịch sự.',
        ex:{ko:'사진 좀 찍어 주세요.', vi:'Chụp giúp tôi tấm ảnh nhé.'} },
      { form:'V + 아/어도 되다', vi:'được phép', note:'Xin phép hoặc cho phép làm việc gì.',
        ex:{ko:'여기 앉아도 돼요?', vi:'Tôi ngồi đây được không?'} }
    ],
    vocab:[
      {ko:'부탁하다', rom:'butakhada', vi:'nhờ vả', pos:'động từ', hanja:'付託—', hv:'phó thác'},
      {ko:'돕다', rom:'dopda', vi:'giúp', pos:'động từ'},
      {ko:'빌리다', rom:'billida', vi:'mượn', pos:'động từ'},
      {ko:'빌려주다', rom:'billyeojuda', vi:'cho mượn', pos:'động từ'},
      {ko:'창문', rom:'changmun', vi:'cửa sổ', pos:'danh từ', hanja:'窓門', hv:'song môn'},
      {ko:'열다', rom:'yeolda', vi:'mở', pos:'động từ'},
      {ko:'닫다', rom:'datda', vi:'đóng', pos:'động từ'},
      {ko:'켜다', rom:'kyeoda', vi:'bật', pos:'động từ'},
      {ko:'끄다', rom:'kkeuda', vi:'tắt', pos:'động từ'},
      {ko:'잠깐', rom:'jamkkan', vi:'một lát', pos:'trạng từ'}
    ],
    dialogue:[
      {sp:'꾸언', ko:'미안하지만 부탁 하나 해도 돼요?', vi:'Xin lỗi, mình nhờ một việc được không?'},
      {sp:'수진', ko:'네, 뭔데요?', vi:'Được, việc gì thế?'},
      {sp:'꾸언', ko:'이 책 좀 빌려줄 수 있어요?', vi:'Cho mình mượn quyển sách này được không?'},
      {sp:'수진', ko:'그럼요. 여기 있어요.', vi:'Tất nhiên rồi. Đây.'}
    ]
  },
  {
    no:10, level:'so-cap-2', ko:'경험', vi:'Kinh nghiệm', rom:'gyeongheom',
    skill:'Kể lại một trải nghiệm', pron:'Nối âm ㅇ',
    culture:'Trải nghiệm văn hoá Hàn (hanbok, tắm hơi jjimjilbang)',
    grammar:[
      { form:'V + (으)ㄴ 적이 있다 / 없다', vi:'đã từng / chưa từng', note:'Nói về kinh nghiệm trong quá khứ.',
        ex:{ko:'한복을 입은 적이 있어요.', vi:'Tôi đã từng mặc hanbok.'} },
      { form:'A/V + 는데 / (으)ㄴ데', vi:'... mà, (nêu bối cảnh)', note:'Đưa bối cảnh trước khi nói tiếp.',
        ex:{ko:'한국에 왔는데 아직 친구가 없어요.', vi:'Tôi đến Hàn rồi mà vẫn chưa có bạn.'} }
    ],
    vocab:[
      {ko:'경험', rom:'gyeongheom', vi:'kinh nghiệm', pos:'danh từ', hanja:'經驗', hv:'kinh nghiệm'},
      {ko:'처음', rom:'cheoeum', vi:'lần đầu', pos:'danh từ'},
      {ko:'다시', rom:'dasi', vi:'lại', pos:'trạng từ'},
      {ko:'잊다', rom:'itda', vi:'quên', pos:'động từ'},
      {ko:'기억하다', rom:'gieokhada', vi:'nhớ', pos:'động từ', hanja:'記憶—', hv:'kí ức'},
      {ko:'재미있다', rom:'jaemiitda', vi:'thú vị', pos:'tính từ'},
      {ko:'무섭다', rom:'museopda', vi:'đáng sợ', pos:'tính từ'},
      {ko:'신기하다', rom:'singihada', vi:'kỳ lạ, thú vị', pos:'tính từ', hanja:'神奇—', hv:'thần kỳ'},
      {ko:'실수하다', rom:'silsuhada', vi:'nhầm lẫn', pos:'động từ', hanja:'失手—', hv:'thất thủ'},
      {ko:'한복', rom:'hanbok', vi:'hanbok (trang phục Hàn)', pos:'danh từ', hanja:'韓服', hv:'Hàn phục'}
    ],
    dialogue:[
      {sp:'수진', ko:'꾸언 씨, 한복을 입어 봤어요?', vi:'Quân ơi, bạn thử mặc hanbok chưa?'},
      {sp:'꾸언', ko:'네, 작년에 입은 적이 있어요.', vi:'Rồi, năm ngoái mình đã mặc một lần.'},
      {sp:'수진', ko:'어땠어요?', vi:'Thấy thế nào?'},
      {sp:'꾸언', ko:'조금 불편했는데 정말 예뻤어요.', vi:'Hơi bất tiện nhưng rất đẹp.'}
    ]
  },
  {
    no:11, level:'so-cap-2', ko:'요리와 음식', vi:'Nấu ăn và món ăn', rom:'yori-wa eumsik',
    skill:'Nói về cách nấu và khẩu vị', pron:'Âm căng (된소리)',
    culture:'Món ăn Hàn Quốc và cách dùng bữa',
    grammar:[
      { form:'V + (으)ㄴ 후에 / 기 전에', vi:'sau khi / trước khi', note:'Chỉ trình tự thời gian giữa hai việc.',
        ex:{ko:'손을 씻은 후에 드세요.', vi:'Rửa tay xong rồi hãy ăn.'} },
      { form:'A/V + (으)면', vi:'nếu', note:'Nêu điều kiện.',
        ex:{ko:'매우면 물을 드세요.', vi:'Nếu cay thì hãy uống nước.'} }
    ],
    vocab:[
      {ko:'요리하다', rom:'yorihada', vi:'nấu ăn', pos:'động từ', hanja:'料理—', hv:'liệu lý'},
      {ko:'재료', rom:'jaeryo', vi:'nguyên liệu', pos:'danh từ', hanja:'材料', hv:'tài liệu'},
      {ko:'넣다', rom:'neota', vi:'cho vào', pos:'động từ'},
      {ko:'썰다', rom:'sseolda', vi:'thái, cắt', pos:'động từ'},
      {ko:'끓이다', rom:'kkeurida', vi:'nấu sôi', pos:'động từ'},
      {ko:'볶다', rom:'bokda', vi:'xào', pos:'động từ'},
      {ko:'맛', rom:'mat', vi:'vị', pos:'danh từ'},
      {ko:'싱겁다', rom:'singgeopda', vi:'nhạt', pos:'tính từ'},
      {ko:'짜다', rom:'jjada', vi:'mặn', pos:'tính từ'},
      {ko:'달다', rom:'dalda', vi:'ngọt', pos:'tính từ'}
    ],
    dialogue:[
      {sp:'수진', ko:'이 김치찌개 어때요?', vi:'Món canh kimchi này thế nào?'},
      {sp:'꾸언', ko:'맛있어요! 그런데 조금 짜요.', vi:'Ngon! Nhưng hơi mặn.'},
      {sp:'수진', ko:'그럼 물을 조금 넣으면 돼요.', vi:'Vậy cho thêm chút nước là được.'},
      {sp:'꾸언', ko:'아, 이제 딱 좋아요.', vi:'À, giờ vừa miệng rồi.'}
    ]
  },
  {
    no:12, level:'so-cap-2', ko:'전화 (2)', vi:'Điện thoại (2)', rom:'jeonhwa',
    skill:'Nhắn lại lời và hẹn qua điện thoại', pron:'Ngữ điệu khi gọi điện',
    culture:'Cách nói chuyện điện thoại lịch sự',
    grammar:[
      { form:'V + (으)ㄹ게요', vi:'tôi sẽ (hứa)', note:'Lời hứa hoặc ý định gắn với người nghe.',
        ex:{ko:'제가 다시 전화할게요.', vi:'Tôi sẽ gọi lại.'} },
      { form:'V + 고 있다', vi:'đang', note:'Hành động đang tiếp diễn.',
        ex:{ko:'지금 통화하고 있어요.', vi:'Bây giờ tôi đang nói chuyện điện thoại.'} }
    ],
    vocab:[
      {ko:'전화하다', rom:'jeonhwahada', vi:'gọi điện', pos:'động từ', hanja:'電話—', hv:'điện thoại'},
      {ko:'받다', rom:'batda', vi:'nhận, nghe (máy)', pos:'động từ'},
      {ko:'걸다', rom:'geolda', vi:'gọi (điện)', pos:'động từ'},
      {ko:'통화', rom:'tonghwa', vi:'cuộc gọi', pos:'danh từ', hanja:'通話', hv:'thông thoại'},
      {ko:'문자', rom:'munja', vi:'tin nhắn', pos:'danh từ', hanja:'文字', hv:'văn tự'},
      {ko:'메시지', rom:'mesiji', vi:'lời nhắn', pos:'danh từ'},
      {ko:'남기다', rom:'namgida', vi:'để lại (lời nhắn)', pos:'động từ'},
      {ko:'끊다', rom:'kkeunta', vi:'cúp máy', pos:'động từ'},
      {ko:'번호', rom:'beonho', vi:'số', pos:'danh từ', hanja:'番號', hv:'phiên hiệu'},
      {ko:'잠시', rom:'jamsi', vi:'chốc lát', pos:'danh từ', hanja:'暫時', hv:'tạm thời'}
    ],
    dialogue:[
      {sp:'꾸언', ko:'여보세요, 수진 씨 있어요?', vi:'A lô, có Su-jin ở đó không ạ?'},
      {sp:'민수', ko:'지금 없는데요. 메시지를 남기시겠어요?', vi:'Bây giờ không có ạ. Anh để lại lời nhắn nhé?'},
      {sp:'꾸언', ko:'그럼 이따가 다시 전화할게요.', vi:'Vậy lát nữa tôi gọi lại.'},
      {sp:'민수', ko:'네, 알겠습니다.', vi:'Vâng, được ạ.'}
    ]
  },
  {
    no:13, level:'so-cap-2', ko:'성격과 외모', vi:'Tính cách và ngoại hình', rom:'seonggyeok-gwa oemo',
    skill:'Miêu tả tính cách và ngoại hình của người', pron:'Định ngữ tính từ',
    culture:'Cách khen ngợi trong văn hoá Hàn',
    grammar:[
      { form:'A + (으)ㄴ + N', vi:'(định ngữ tính từ)', note:'Tính từ bổ nghĩa trực tiếp cho danh từ đứng sau.',
        ex:{ko:'친절한 사람을 좋아해요.', vi:'Tôi thích người tử tế.'} },
      { form:'A + 게', vi:'(biến tính từ thành trạng từ)', note:'Diễn tả cách thức của hành động.',
        ex:{ko:'예쁘게 웃어요.', vi:'Cô ấy cười rất xinh.'} }
    ],
    vocab:[
      {ko:'성격', rom:'seonggyeok', vi:'tính cách', pos:'danh từ', hanja:'性格', hv:'tính cách'},
      {ko:'친절하다', rom:'chinjeolhada', vi:'tử tế', pos:'tính từ', hanja:'親切—', hv:'thân thiết'},
      {ko:'조용하다', rom:'joyonghada', vi:'trầm lặng, yên tĩnh', pos:'tính từ'},
      {ko:'활발하다', rom:'hwalbalhada', vi:'năng động', pos:'tính từ', hanja:'活潑—', hv:'hoạt bát'},
      {ko:'외모', rom:'oemo', vi:'ngoại hình', pos:'danh từ', hanja:'外貌', hv:'ngoại mạo'},
      {ko:'키', rom:'ki', vi:'chiều cao', pos:'danh từ'},
      {ko:'크다', rom:'keuda', vi:'to, cao', pos:'tính từ'},
      {ko:'작다', rom:'jakda', vi:'nhỏ, thấp', pos:'tính từ'},
      {ko:'멋있다', rom:'meositda', vi:'ngầu, phong độ', pos:'tính từ'},
      {ko:'닮다', rom:'damda', vi:'giống (người)', pos:'động từ'}
    ],
    dialogue:[
      {sp:'민수', ko:'새 룸메이트는 어때요?', vi:'Bạn cùng phòng mới thế nào?'},
      {sp:'꾸언', ko:'아주 친절하고 활발한 사람이에요.', vi:'Là người rất tử tế và năng động.'},
      {sp:'민수', ko:'키가 커요?', vi:'Cậu ấy cao không?'},
      {sp:'꾸언', ko:'네, 키가 크고 멋있어요.', vi:'Ừ, cao và ngầu lắm.'}
    ]
  },
  {
    no:14, level:'so-cap-2', ko:'한국의 명절', vi:'Ngày lễ Hàn Quốc', rom:'hangug-ui myeongjeol',
    skill:'Nói về ngày lễ và phong tục', pron:'Nối âm ㄱ',
    culture:'Tết Seollal và Trung thu Chuseok',
    grammar:[
      { form:'V + (으)ㄹ 때', vi:'khi', note:'Thời điểm một việc diễn ra.',
        ex:{ko:'설날 때 세배를 해요.', vi:'Khi Tết thì cúi lạy chúc thọ.'} },
      { form:'N + 처럼', vi:'như, giống', note:'So sánh giống như đối tượng khác.',
        ex:{ko:'가족처럼 지내요.', vi:'Chúng tôi sống như người một nhà.'} }
    ],
    vocab:[
      {ko:'명절', rom:'myeongjeol', vi:'ngày lễ tết', pos:'danh từ', hanja:'名節', hv:'danh tiết'},
      {ko:'설날', rom:'seollal', vi:'Tết (âm lịch)', pos:'danh từ'},
      {ko:'추석', rom:'chuseok', vi:'Trung thu', pos:'danh từ', hanja:'秋夕', hv:'thu tịch'},
      {ko:'차례', rom:'charye', vi:'lễ cúng tổ tiên', pos:'danh từ', hanja:'茶禮', hv:'trà lễ'},
      {ko:'세배', rom:'sebae', vi:'lạy chúc thọ đầu năm', pos:'danh từ', hanja:'歲拜', hv:'tuế bái'},
      {ko:'떡국', rom:'tteokguk', vi:'canh bánh gạo', pos:'danh từ'},
      {ko:'송편', rom:'songpyeon', vi:'bánh songpyeon', pos:'danh từ'},
      {ko:'선물', rom:'seonmul', vi:'quà', pos:'danh từ', hanja:'膳物', hv:'thiện vật'},
      {ko:'모이다', rom:'moida', vi:'tụ họp', pos:'động từ'},
      {ko:'지내다', rom:'jinaeda', vi:'trải qua, sống', pos:'động từ'}
    ],
    dialogue:[
      {sp:'수진', ko:'한국에서 제일 큰 명절이 뭔지 알아요?', vi:'Bạn biết ngày lễ lớn nhất ở Hàn là gì không?'},
      {sp:'꾸언', ko:'설날하고 추석이지요?', vi:'Là Seollal và Chuseok phải không?'},
      {sp:'수진', ko:'맞아요. 설날 때 떡국을 먹어요.', vi:'Đúng rồi. Tết thì ăn canh bánh gạo.'},
      {sp:'꾸언', ko:'베트남 설날하고 비슷하네요.', vi:'Giống Tết Việt Nam nhỉ.'}
    ]
  },
  {
    no:15, level:'so-cap-2', ko:'꿈과 미래', vi:'Ước mơ và tương lai', rom:'kkum-gwa mirae',
    skill:'Nói về ước mơ và dự định tương lai', pron:'Ôn tập tổng hợp',
    culture:'Quan niệm về nghề nghiệp của giới trẻ Hàn Quốc',
    grammar:[
      { form:'V + 고 싶어 하다', vi:'(người khác) muốn', note:'Diễn tả mong muốn của ngôi thứ ba.',
        ex:{ko:'동생은 의사가 되고 싶어 해요.', vi:'Em tôi muốn trở thành bác sĩ.'} },
      { form:'V + 기 위해서', vi:'để (mục đích)', note:'Nêu mục đích của hành động.',
        ex:{ko:'꿈을 이루기 위해서 노력해요.', vi:'Tôi nỗ lực để thực hiện ước mơ.'} }
    ],
    vocab:[
      {ko:'꿈', rom:'kkum', vi:'ước mơ', pos:'danh từ'},
      {ko:'미래', rom:'mirae', vi:'tương lai', pos:'danh từ', hanja:'未來', hv:'vị lai'},
      {ko:'되다', rom:'doeda', vi:'trở thành', pos:'động từ'},
      {ko:'취직하다', rom:'chwijikhada', vi:'xin được việc', pos:'động từ', hanja:'就職—', hv:'tựu chức'},
      {ko:'유학', rom:'yuhak', vi:'du học', pos:'danh từ', hanja:'留學', hv:'lưu học'},
      {ko:'통역사', rom:'tongyeoksa', vi:'phiên dịch viên', pos:'danh từ', hanja:'通譯士', hv:'thông dịch sĩ'},
      {ko:'노력하다', rom:'noryeokhada', vi:'nỗ lực', pos:'động từ', hanja:'努力—', hv:'nỗ lực'},
      {ko:'목표', rom:'mokpyo', vi:'mục tiêu', pos:'danh từ', hanja:'目標', hv:'mục tiêu'},
      {ko:'이루다', rom:'iruda', vi:'thực hiện, đạt được', pos:'động từ'},
      {ko:'성공하다', rom:'seonggonghada', vi:'thành công', pos:'động từ', hanja:'成功—', hv:'thành công'}
    ],
    dialogue:[
      {sp:'민수', ko:'꾸언 씨의 꿈은 뭐예요?', vi:'Ước mơ của Quân là gì?'},
      {sp:'꾸언', ko:'저는 통역사가 되고 싶어요.', vi:'Tôi muốn trở thành phiên dịch viên.'},
      {sp:'민수', ko:'그래서 한국어를 열심히 공부하는군요.', vi:'Thì ra vì thế mà bạn học tiếng Hàn chăm chỉ.'},
      {sp:'꾸언', ko:'네, 꿈을 이루기 위해서 노력할 거예요.', vi:'Vâng, tôi sẽ cố gắng để đạt được ước mơ.'}
    ]
  }
);

/* Cập nhật trạng thái: Sơ cấp 2 đã có nội dung */
(COURSE_KO.levels.find(x => x.id === 'so-cap-2') || {}).status = 'active';

/* ============================================================
   Trung cấp 1 (중급 1) — 15 bài (bậc B1). Khung bám bộ giáo trình
   « Tiếng Hàn tổng hợp »; từ vựng, câu ví dụ, hội thoại do LangLab soạn.
   ============================================================ */
COURSE_KO.lessons.push(
  {
    no:1, level:'trung-cap-1', ko:'새로운 시작', vi:'Khởi đầu mới', rom:'saeroun sijak',
    skill:'Kể về một thay đổi, khởi đầu mới trong cuộc sống', pron:'Nối âm và lược âm',
    culture:'Văn hoá nhảy việc và học lại của người Hàn',
    grammar:[
      { form:'V + 게 되다', vi:'(hoàn cảnh đưa đẩy) trở nên, được', note:'Kết quả do hoàn cảnh chứ không do chủ ý.',
        ex:{ko:'한국에서 일하게 됐어요.', vi:'Tôi (rốt cuộc) được làm việc ở Hàn Quốc.'} },
      { form:'A/V + 잖아요', vi:'... mà, còn gì', note:'Nhắc lại điều người nghe vốn đã biết.',
        ex:{ko:'어제 말했잖아요.', vi:'Hôm qua tôi nói rồi mà.'} }
    ],
    vocab:[
      {ko:'시작', rom:'sijak', vi:'sự khởi đầu', pos:'danh từ', hanja:'始作', hv:'thuỷ tác'},
      {ko:'새롭다', rom:'saeropda', vi:'mới mẻ', pos:'tính từ'},
      {ko:'기회', rom:'gihoe', vi:'cơ hội', pos:'danh từ', hanja:'機會', hv:'cơ hội'},
      {ko:'도전하다', rom:'dojeonhada', vi:'thử thách, thử sức', pos:'động từ', hanja:'挑戰—', hv:'khiêu chiến'},
      {ko:'낯설다', rom:'natseolda', vi:'lạ lẫm', pos:'tính từ'},
      {ko:'소개하다', rom:'sogaehada', vi:'giới thiệu', pos:'động từ', hanja:'紹介—', hv:'thiệu giới'},
      {ko:'이사하다', rom:'isahada', vi:'chuyển nhà', pos:'động từ', hanja:'移徙—', hv:'di tỉ'},
      {ko:'환경', rom:'hwangyeong', vi:'môi trường', pos:'danh từ', hanja:'環境', hv:'hoàn cảnh'},
      {ko:'만족하다', rom:'manjokhada', vi:'hài lòng', pos:'tính từ', hanja:'滿足—', hv:'mãn túc'},
      {ko:'기대하다', rom:'gidaehada', vi:'mong đợi', pos:'động từ', hanja:'期待—', hv:'kỳ đãi'}
    ],
    dialogue:[
      {sp:'민수', ko:'꾸언 씨, 요즘 어떻게 지내요?', vi:'Quân ơi, dạo này sống thế nào?'},
      {sp:'꾸언', ko:'새 회사에 다니게 됐어요.', vi:'Tôi được vào làm ở công ty mới rồi.'},
      {sp:'민수', ko:'정말요? 축하해요!', vi:'Thật à? Chúc mừng nhé!'},
      {sp:'꾸언', ko:'고마워요. 지난번에 도전하고 싶다고 말했잖아요.', vi:'Cảm ơn. Lần trước tôi nói muốn thử sức rồi mà.'}
    ]
  },
  {
    no:2, level:'trung-cap-1', ko:'성격과 인간관계', vi:'Tính cách và quan hệ', rom:'seonggyeok-gwa ingan-gwangye',
    skill:'Nhận xét tính cách, nói về quan hệ với người khác', pron:'Trọng âm nhấn',
    culture:'Cách xưng hô theo tuổi và thứ bậc ở Hàn Quốc',
    grammar:[
      { form:'A/V + 은/는 편이다', vi:'thuộc kiểu, thiên về', note:'Không khẳng định tuyệt đối, chỉ nghiêng về một tính chất.',
        ex:{ko:'저는 조용한 편이에요.', vi:'Tôi thuộc kiểu trầm tính.'} },
      { form:'A/V + (으)ㄴ/는 것 같다', vi:'có vẻ, hình như', note:'Phỏng đoán dựa trên quan sát.',
        ex:{ko:'그 사람은 착한 것 같아요.', vi:'Người đó có vẻ hiền.'} }
    ],
    vocab:[
      {ko:'성격', rom:'seonggyeok', vi:'tính cách', pos:'danh từ', hanja:'性格', hv:'tính cách'},
      {ko:'관계', rom:'gwangye', vi:'quan hệ', pos:'danh từ', hanja:'關係', hv:'quan hệ'},
      {ko:'사이', rom:'sai', vi:'mối quan hệ, khoảng', pos:'danh từ'},
      {ko:'솔직하다', rom:'soljikhada', vi:'thẳng thắn', pos:'tính từ', hanja:'率直—', hv:'suất trực'},
      {ko:'이해하다', rom:'ihaehada', vi:'hiểu, thông cảm', pos:'động từ', hanja:'理解—', hv:'lý giải'},
      {ko:'오해하다', rom:'ohaehada', vi:'hiểu lầm', pos:'động từ', hanja:'誤解—', hv:'ngộ giải'},
      {ko:'친해지다', rom:'chinhaejida', vi:'trở nên thân', pos:'động từ'},
      {ko:'다투다', rom:'datuda', vi:'cãi nhau', pos:'động từ'},
      {ko:'화해하다', rom:'hwahaehada', vi:'làm hoà', pos:'động từ', hanja:'和解—', hv:'hoà giải'},
      {ko:'성실하다', rom:'seongsilhada', vi:'thành thật, chăm chỉ', pos:'tính từ', hanja:'誠實—', hv:'thành thực'}
    ],
    dialogue:[
      {sp:'수진', ko:'새 동료는 어때요?', vi:'Đồng nghiệp mới thế nào?'},
      {sp:'꾸언', ko:'좀 조용한 편인데 성실한 것 같아요.', vi:'Hơi trầm nhưng có vẻ chăm chỉ.'},
      {sp:'수진', ko:'그럼 금방 친해지겠네요.', vi:'Vậy chắc sớm thân thôi.'},
      {sp:'꾸언', ko:'네, 오해만 없으면 좋겠어요.', vi:'Vâng, chỉ mong đừng có hiểu lầm.'}
    ]
  },
  {
    no:3, level:'trung-cap-1', ko:'실수와 후회', vi:'Sai lầm và hối tiếc', rom:'silsu-wa huhoe',
    skill:'Nói về lỗi lầm, bày tỏ hối tiếc', pron:'Ngữ điệu tiếc nuối',
    culture:'Cách xin lỗi và nhận lỗi trong văn hoá Hàn',
    grammar:[
      { form:'V + 았/었어야 했다', vi:'đáng lẽ phải ...', note:'Hối tiếc vì đã không làm việc gì.',
        ex:{ko:'미리 준비했어야 했어요.', vi:'Đáng lẽ tôi phải chuẩn bị trước.'} },
      { form:'V + 는 바람에', vi:'vì (nguyên nhân ngoài ý muốn)', note:'Nguyên nhân dẫn tới kết quả xấu.',
        ex:{ko:'늦게 일어나는 바람에 지각했어요.', vi:'Vì dậy muộn nên tôi đi trễ.'} }
    ],
    vocab:[
      {ko:'실수', rom:'silsu', vi:'sai sót', pos:'danh từ', hanja:'失手', hv:'thất thủ'},
      {ko:'후회하다', rom:'huhoehada', vi:'hối tiếc', pos:'động từ', hanja:'後悔—', hv:'hậu hối'},
      {ko:'잘못', rom:'jalmot', vi:'lỗi, sai', pos:'danh từ'},
      {ko:'사과하다', rom:'sagwahada', vi:'xin lỗi', pos:'động từ', hanja:'謝過—', hv:'tạ quá'},
      {ko:'용서하다', rom:'yongseohada', vi:'tha thứ', pos:'động từ', hanja:'容恕—', hv:'dung thứ'},
      {ko:'반성하다', rom:'banseonghada', vi:'tự kiểm điểm', pos:'động từ', hanja:'反省—', hv:'phản tỉnh'},
      {ko:'깜빡하다', rom:'kkamppakhada', vi:'lỡ quên', pos:'động từ'},
      {ko:'놓치다', rom:'nochida', vi:'bỏ lỡ', pos:'động từ'},
      {ko:'조심하다', rom:'josimhada', vi:'cẩn thận', pos:'động từ', hanja:'操心—', hv:'thao tâm'},
      {ko:'다행이다', rom:'dahaengida', vi:'may là', pos:'tính từ', hanja:'多幸—', hv:'đa hạnh'}
    ],
    dialogue:[
      {sp:'민수', ko:'시험 잘 봤어요?', vi:'Thi tốt không?'},
      {sp:'꾸언', ko:'아니요, 미리 공부했어야 했어요.', vi:'Không, đáng lẽ tôi phải học trước.'},
      {sp:'민수', ko:'무슨 일 있었어요?', vi:'Có chuyện gì à?'},
      {sp:'꾸언', ko:'늦게 자는 바람에 시험에 늦었어요.', vi:'Vì ngủ muộn nên tôi đến thi trễ.'}
    ]
  },
  {
    no:4, level:'trung-cap-1', ko:'건강 관리', vi:'Chăm sóc sức khoẻ', rom:'geongang gwalli',
    skill:'Nói về thói quen giữ gìn sức khoẻ', pron:'Âm căng',
    culture:'Văn hoá tập thể dục và ăn uống lành mạnh ở Hàn',
    grammar:[
      { form:'V + 다가', vi:'đang ... thì (chuyển sang việc khác)', note:'Ngắt một hành động để chuyển sang hành động/kết quả khác.',
        ex:{ko:'운동하다가 다쳤어요.', vi:'Đang tập thể dục thì bị thương.'} },
      { form:'V + 지 않으면 안 되다', vi:'nhất định phải', note:'Nhấn mạnh sự bắt buộc (không làm thì không được).',
        ex:{ko:'약을 먹지 않으면 안 돼요.', vi:'Nhất định phải uống thuốc.'} }
    ],
    vocab:[
      {ko:'건강', rom:'geongang', vi:'sức khoẻ', pos:'danh từ', hanja:'健康', hv:'kiện khang'},
      {ko:'관리하다', rom:'gwallihada', vi:'quản lý, chăm lo', pos:'động từ', hanja:'管理—', hv:'quản lý'},
      {ko:'규칙적', rom:'gyuchikjeok', vi:'đều đặn, có quy tắc', pos:'tính từ', hanja:'規則的', hv:'quy tắc đích'},
      {ko:'식습관', rom:'sikseupgwan', vi:'thói quen ăn uống', pos:'danh từ', hanja:'食習慣', hv:'thực tập quán'},
      {ko:'살이 찌다', rom:'sari jjida', vi:'tăng cân', pos:'động từ'},
      {ko:'살을 빼다', rom:'sareul ppaeda', vi:'giảm cân', pos:'động từ'},
      {ko:'스트레스', rom:'seuteureseu', vi:'căng thẳng', pos:'danh từ'},
      {ko:'피로', rom:'piro', vi:'sự mệt mỏi', pos:'danh từ', hanja:'疲勞', hv:'bì lao'},
      {ko:'챙기다', rom:'chaenggida', vi:'chăm lo, để ý', pos:'động từ'},
      {ko:'무리하다', rom:'murihada', vi:'làm quá sức', pos:'động từ', hanja:'無理—', hv:'vô lý'}
    ],
    dialogue:[
      {sp:'의사', ko:'요즘 건강은 어때요?', vi:'Sức khoẻ dạo này thế nào?'},
      {sp:'꾸언', ko:'운동하다가 허리를 다쳤어요.', vi:'Đang tập thì tôi bị đau lưng.'},
      {sp:'의사', ko:'당분간 무리하면 안 돼요.', vi:'Thời gian tới đừng làm quá sức.'},
      {sp:'꾸언', ko:'네, 규칙적으로 쉬도록 할게요.', vi:'Vâng, tôi sẽ nghỉ ngơi đều đặn.'}
    ]
  },
  {
    no:5, level:'trung-cap-1', ko:'취미와 여가', vi:'Sở thích và giải trí', rom:'chwimi-wa yeoga',
    skill:'Nói về sở thích, cách dùng thời gian rảnh', pron:'Nối âm ㄹ',
    culture:'Các câu lạc bộ sở thích (동호회) ở Hàn Quốc',
    grammar:[
      { form:'V + (으)ㄹ 줄 알다 / 모르다', vi:'biết / không biết cách', note:'Nói về khả năng làm một việc gì.',
        ex:{ko:'피아노를 칠 줄 알아요.', vi:'Tôi biết chơi piano.'} },
      { form:'V + 곤 하다', vi:'thường (làm) ', note:'Thói quen lặp lại trong quá khứ hoặc hiện tại.',
        ex:{ko:'주말에 등산을 하곤 해요.', vi:'Cuối tuần tôi hay leo núi.'} }
    ],
    vocab:[
      {ko:'취미', rom:'chwimi', vi:'sở thích', pos:'danh từ', hanja:'趣味', hv:'thú vị'},
      {ko:'여가', rom:'yeoga', vi:'thời gian rảnh', pos:'danh từ', hanja:'餘暇', hv:'dư hạ'},
      {ko:'즐기다', rom:'jeulgida', vi:'tận hưởng', pos:'động từ'},
      {ko:'관심', rom:'gwansim', vi:'sự quan tâm', pos:'danh từ', hanja:'關心', hv:'quan tâm'},
      {ko:'동호회', rom:'donghohoe', vi:'câu lạc bộ (cùng sở thích)', pos:'danh từ', hanja:'同好會', hv:'đồng hảo hội'},
      {ko:'악기', rom:'akgi', vi:'nhạc cụ', pos:'danh từ', hanja:'樂器', hv:'nhạc khí'},
      {ko:'그림', rom:'geurim', vi:'tranh', pos:'danh từ'},
      {ko:'모으다', rom:'moeuda', vi:'sưu tầm, gom', pos:'động từ'},
      {ko:'연습하다', rom:'yeonseuphada', vi:'luyện tập', pos:'động từ', hanja:'練習—', hv:'luyện tập'},
      {ko:'등산', rom:'deungsan', vi:'leo núi', pos:'danh từ', hanja:'登山', hv:'đăng sơn'}
    ],
    dialogue:[
      {sp:'수진', ko:'꾸언 씨는 취미가 뭐예요?', vi:'Sở thích của Quân là gì?'},
      {sp:'꾸언', ko:'저는 기타를 칠 줄 알아요.', vi:'Tôi biết chơi guitar.'},
      {sp:'수진', ko:'멋있네요! 자주 쳐요?', vi:'Ngầu ghê! Chơi thường không?'},
      {sp:'꾸언', ko:'주말마다 연습하곤 해요.', vi:'Cuối tuần nào tôi cũng hay tập.'}
    ]
  },
  {
    no:6, level:'trung-cap-1', ko:'여행과 계획', vi:'Du lịch và kế hoạch', rom:'yeohaeng-gwa gyehoek',
    skill:'Lập kế hoạch du lịch, kết hợp nhiều việc', pron:'Trọng âm câu',
    culture:'Du lịch trong nước của người Hàn',
    grammar:[
      { form:'V + 는 김에', vi:'nhân tiện', note:'Nhân dịp làm việc này thì làm luôn việc kia.',
        ex:{ko:'서울에 가는 김에 친구를 만났어요.', vi:'Nhân tiện đi Seoul, tôi gặp bạn luôn.'} },
      { form:'V + (으)ㄹ 겸', vi:'kết hợp (mục đích)', note:'Làm việc gì với nhiều mục đích cùng lúc.',
        ex:{ko:'바람도 쐴 겸 산책했어요.', vi:'Tôi đi dạo, tiện thể hóng gió luôn.'} }
    ],
    vocab:[
      {ko:'여행', rom:'yeohaeng', vi:'du lịch', pos:'danh từ', hanja:'旅行', hv:'lữ hành'},
      {ko:'일정', rom:'iljeong', vi:'lịch trình', pos:'danh từ', hanja:'日程', hv:'nhật trình'},
      {ko:'숙소', rom:'sukso', vi:'chỗ ở', pos:'danh từ', hanja:'宿所', hv:'túc sở'},
      {ko:'예매하다', rom:'yemaehada', vi:'đặt (vé) trước', pos:'động từ', hanja:'豫賣—', hv:'dự mại'},
      {ko:'출발', rom:'chulbal', vi:'sự khởi hành', pos:'danh từ', hanja:'出發', hv:'xuất phát'},
      {ko:'도착', rom:'dochak', vi:'sự đến nơi', pos:'danh từ', hanja:'到着', hv:'đáo trước'},
      {ko:'관광지', rom:'gwangwangji', vi:'điểm tham quan', pos:'danh từ', hanja:'觀光地', hv:'quan quang địa'},
      {ko:'경치', rom:'gyeongchi', vi:'cảnh, phong cảnh', pos:'danh từ', hanja:'景致', hv:'cảnh trí'},
      {ko:'추억', rom:'chueok', vi:'kỷ niệm', pos:'danh từ', hanja:'追憶', hv:'truy ức'},
      {ko:'챙기다', rom:'chaenggida', vi:'mang theo, chuẩn bị', pos:'động từ'}
    ],
    dialogue:[
      {sp:'민수', ko:'이번 휴가에 뭐 할 거예요?', vi:'Kỳ nghỉ này định làm gì?'},
      {sp:'꾸언', ko:'부산에 가는 김에 바다도 볼 거예요.', vi:'Nhân tiện đi Busan, tôi sẽ ngắm biển luôn.'},
      {sp:'민수', ko:'좋네요. 숙소는 예매했어요?', vi:'Hay đó. Đặt chỗ ở chưa?'},
      {sp:'꾸언', ko:'네, 쉴 겸 좋은 호텔로 예매했어요.', vi:'Rồi, tiện nghỉ ngơi nên tôi đặt khách sạn tốt.'}
    ]
  },
  {
    no:7, level:'trung-cap-1', ko:'직장 생활', vi:'Cuộc sống công sở', rom:'jikjang saenghwal',
    skill:'Nói về công việc, đồng nghiệp, deadline', pron:'Nối âm ㄱ',
    culture:'Văn hoá công sở và làm thêm giờ ở Hàn',
    grammar:[
      { form:'V + 느라고', vi:'vì mải (nên không được)', note:'Nguyên nhân khiến không làm được việc khác; hai vế cùng chủ ngữ.',
        ex:{ko:'일하느라고 전화를 못 받았어요.', vi:'Vì mải làm nên tôi không nghe máy được.'} },
      { form:'V + 아/어 놓다 / 두다', vi:'làm sẵn (để đó)', note:'Hoàn tất việc gì và giữ nguyên trạng thái đó.',
        ex:{ko:'자료를 준비해 놓았어요.', vi:'Tôi đã chuẩn bị sẵn tài liệu.'} }
    ],
    vocab:[
      {ko:'직장', rom:'jikjang', vi:'nơi làm việc', pos:'danh từ', hanja:'職場', hv:'chức trường'},
      {ko:'회의', rom:'hoeui', vi:'cuộc họp', pos:'danh từ', hanja:'會議', hv:'hội nghị'},
      {ko:'업무', rom:'eommu', vi:'nghiệp vụ, công việc', pos:'danh từ', hanja:'業務', hv:'nghiệp vụ'},
      {ko:'동료', rom:'dongnyo', vi:'đồng nghiệp', pos:'danh từ', hanja:'同僚', hv:'đồng liêu'},
      {ko:'상사', rom:'sangsa', vi:'cấp trên', pos:'danh từ', hanja:'上司', hv:'thượng ty'},
      {ko:'야근', rom:'yageun', vi:'làm ca đêm, tăng ca', pos:'danh từ', hanja:'夜勤', hv:'dạ cần'},
      {ko:'서류', rom:'seoryu', vi:'giấy tờ, tài liệu', pos:'danh từ', hanja:'書類', hv:'thư loại'},
      {ko:'마감', rom:'magam', vi:'hạn chót', pos:'danh từ'},
      {ko:'승진하다', rom:'seungjinhada', vi:'thăng chức', pos:'động từ', hanja:'昇進—', hv:'thăng tiến'},
      {ko:'맡다', rom:'matda', vi:'đảm nhận', pos:'động từ'}
    ],
    dialogue:[
      {sp:'수진', ko:'어제 왜 전화 안 받았어요?', vi:'Hôm qua sao không nghe máy?'},
      {sp:'꾸언', ko:'회의 준비하느라고 못 받았어요.', vi:'Vì mải chuẩn bị họp nên không nghe được.'},
      {sp:'수진', ko:'자료는 다 됐어요?', vi:'Tài liệu xong chưa?'},
      {sp:'꾸언', ko:'네, 어제 미리 만들어 놓았어요.', vi:'Rồi, hôm qua tôi làm sẵn rồi.'}
    ]
  },
  {
    no:8, level:'trung-cap-1', ko:'감정 표현', vi:'Biểu đạt cảm xúc', rom:'gamjeong pyohyeon',
    skill:'Diễn tả mong muốn, phỏng đoán tiếc nuối', pron:'Ngữ điệu cảm xúc',
    culture:'Cách bộc lộ cảm xúc trong giao tiếp Hàn',
    grammar:[
      { form:'V + 았/었으면 좋겠다', vi:'ước gì, mong rằng', note:'Bày tỏ mong muốn về điều chưa thành.',
        ex:{ko:'시험에 합격했으면 좋겠어요.', vi:'Ước gì tôi đỗ kỳ thi.'} },
      { form:'A/V + (으)ㄹ 텐데', vi:'chắc là ... (mà)', note:'Phỏng đoán kèm tiếc nuối hoặc lo lắng.',
        ex:{ko:'지금쯤 도착했을 텐데요.', vi:'Chắc giờ đã đến nơi rồi mà.'} }
    ],
    vocab:[
      {ko:'감정', rom:'gamjeong', vi:'cảm xúc', pos:'danh từ', hanja:'感情', hv:'cảm tình'},
      {ko:'기쁘다', rom:'gippeuda', vi:'vui mừng', pos:'tính từ'},
      {ko:'슬프다', rom:'seulpeuda', vi:'buồn', pos:'tính từ'},
      {ko:'화나다', rom:'hwanada', vi:'tức giận', pos:'động từ'},
      {ko:'놀라다', rom:'nollada', vi:'ngạc nhiên', pos:'động từ'},
      {ko:'두렵다', rom:'duryeopda', vi:'sợ hãi', pos:'tính từ'},
      {ko:'그립다', rom:'geuripda', vi:'nhớ nhung', pos:'tính từ'},
      {ko:'답답하다', rom:'dapdapada', vi:'bức bối', pos:'tính từ'},
      {ko:'위로하다', rom:'wirohada', vi:'an ủi', pos:'động từ', hanja:'慰勞—', hv:'uý lao'},
      {ko:'참다', rom:'chamda', vi:'chịu đựng, nhịn', pos:'động từ'}
    ],
    dialogue:[
      {sp:'민수', ko:'표정이 안 좋네요. 무슨 일이에요?', vi:'Sắc mặt không tốt. Có chuyện gì thế?'},
      {sp:'꾸언', ko:'시험 결과가 곧 나와요. 합격했으면 좋겠어요.', vi:'Sắp có kết quả thi. Ước gì tôi đỗ.'},
      {sp:'민수', ko:'열심히 했으니까 잘됐을 텐데요.', vi:'Cậu học chăm mà, chắc ổn thôi.'},
      {sp:'꾸언', ko:'고마워요. 조금 떨려요.', vi:'Cảm ơn. Tôi hơi run.'}
    ]
  },
  {
    no:9, level:'trung-cap-1', ko:'한국의 전통', vi:'Truyền thống Hàn Quốc', rom:'hangug-ui jeontong',
    skill:'Thuật lại lời người khác, so sánh mức độ', pron:'Nối âm ㄴ',
    culture:'Lễ nghi và kính ngữ truyền thống',
    grammar:[
      { form:'A/V + 다고 하다', vi:'nghe nói, bảo rằng', note:'Thuật lại gián tiếp lời của người khác.',
        ex:{ko:'친구가 온다고 했어요.', vi:'Bạn tôi bảo là sẽ đến.'} },
      { form:'N/V + 만큼', vi:'bằng, đến mức', note:'So sánh mức độ ngang bằng.',
        ex:{ko:'노력한 만큼 성공해요.', vi:'Nỗ lực đến đâu thành công đến đó.'} }
    ],
    vocab:[
      {ko:'전통', rom:'jeontong', vi:'truyền thống', pos:'danh từ', hanja:'傳統', hv:'truyền thống'},
      {ko:'예절', rom:'yejeol', vi:'lễ nghi', pos:'danh từ', hanja:'禮節', hv:'lễ tiết'},
      {ko:'조상', rom:'josang', vi:'tổ tiên', pos:'danh từ', hanja:'祖上', hv:'tổ thượng'},
      {ko:'세대', rom:'sedae', vi:'thế hệ', pos:'danh từ', hanja:'世代', hv:'thế đại'},
      {ko:'풍습', rom:'pungseup', vi:'phong tục', pos:'danh từ', hanja:'風習', hv:'phong tập'},
      {ko:'존댓말', rom:'jondaenmal', vi:'kính ngữ', pos:'danh từ'},
      {ko:'차이', rom:'chai', vi:'sự khác biệt', pos:'danh từ', hanja:'差異', hv:'sai dị'},
      {ko:'지키다', rom:'jikida', vi:'giữ gìn, tuân thủ', pos:'động từ'},
      {ko:'물려받다', rom:'mullyeobatda', vi:'thừa kế', pos:'động từ'},
      {ko:'한복', rom:'hanbok', vi:'hanbok', pos:'danh từ', hanja:'韓服', hv:'Hàn phục'}
    ],
    dialogue:[
      {sp:'수진', ko:'이번 설에 뭐 할 거예요?', vi:'Tết này định làm gì?'},
      {sp:'꾸언', ko:'친구가 한복을 빌려준다고 했어요.', vi:'Bạn tôi bảo sẽ cho mượn hanbok.'},
      {sp:'수진', ko:'좋겠어요. 한국 예절도 배워요?', vi:'Thích nhỉ. Có học cả lễ nghi Hàn không?'},
      {sp:'꾸언', ko:'네, 배운 만큼 재미있어요.', vi:'Có, học đến đâu thú vị đến đó.'}
    ]
  },
  {
    no:10, level:'trung-cap-1', ko:'도시와 시골', vi:'Thành thị và nông thôn', rom:'dosi-wa sigol',
    skill:'So sánh thành thị và nông thôn', pron:'Trọng âm nhấn',
    culture:'Xu hướng về quê sống của giới trẻ Hàn',
    grammar:[
      { form:'A/V + (으)ㄹ수록', vi:'càng ... càng', note:'Mức độ tăng theo nhau; hay đi với 을수록.',
        ex:{ko:'도시가 클수록 복잡해요.', vi:'Thành phố càng lớn càng phức tạp.'} },
      { form:'A/V + 는 반면에', vi:'trái lại, ngược lại', note:'Nêu hai mặt trái ngược của một đối tượng.',
        ex:{ko:'도시는 편리한 반면에 복잡해요.', vi:'Thành phố tiện lợi nhưng lại phức tạp.'} }
    ],
    vocab:[
      {ko:'도시', rom:'dosi', vi:'đô thị', pos:'danh từ', hanja:'都市', hv:'đô thị'},
      {ko:'시골', rom:'sigol', vi:'nông thôn', pos:'danh từ'},
      {ko:'인구', rom:'ingu', vi:'dân số', pos:'danh từ', hanja:'人口', hv:'nhân khẩu'},
      {ko:'복잡하다', rom:'bokjapada', vi:'phức tạp, đông đúc', pos:'tính từ', hanja:'複雜—', hv:'phức tạp'},
      {ko:'조용하다', rom:'joyonghada', vi:'yên tĩnh', pos:'tính từ'},
      {ko:'공기', rom:'gonggi', vi:'không khí', pos:'danh từ', hanja:'空氣', hv:'không khí'},
      {ko:'편리하다', rom:'pyeollihada', vi:'tiện lợi', pos:'tính từ', hanja:'便利—', hv:'tiện lợi'},
      {ko:'발전하다', rom:'baljeonhada', vi:'phát triển', pos:'động từ', hanja:'發展—', hv:'phát triển'},
      {ko:'여유', rom:'yeoyu', vi:'sự thư thả, dư dả', pos:'danh từ', hanja:'餘裕', hv:'dư dụ'},
      {ko:'이사', rom:'isa', vi:'sự chuyển nhà', pos:'danh từ', hanja:'移徙', hv:'di tỉ'}
    ],
    dialogue:[
      {sp:'민수', ko:'서울 생활은 어때요?', vi:'Cuộc sống ở Seoul thế nào?'},
      {sp:'꾸언', ko:'편리한 반면에 좀 복잡해요.', vi:'Tiện lợi nhưng hơi phức tạp.'},
      {sp:'민수', ko:'시골이 그리워요?', vi:'Nhớ quê không?'},
      {sp:'꾸언', ko:'네, 도시가 클수록 고향이 생각나요.', vi:'Ừ, thành phố càng lớn tôi càng nhớ quê.'}
    ]
  },
  {
    no:11, level:'trung-cap-1', ko:'뉴스와 사회', vi:'Tin tức và xã hội', rom:'nyuseu-wa sahoe',
    skill:'Trích dẫn nguồn tin, nói về vấn đề xã hội', pron:'Âm dài',
    culture:'Thói quen xem tin tức của người Hàn',
    grammar:[
      { form:'N + 에 따르면', vi:'theo (nguồn)', note:'Trích dẫn nguồn thông tin; thường kết với 다고 하다/대요.',
        ex:{ko:'뉴스에 따르면 내일 비가 온대요.', vi:'Theo tin tức thì ngày mai trời mưa.'} },
      { form:'A/V + 다는 것', vi:'việc, điều rằng', note:'Danh từ hoá một mệnh đề để làm chủ/tân ngữ.',
        ex:{ko:'담배가 몸에 나쁘다는 것을 알아요.', vi:'Tôi biết rằng thuốc lá có hại cho cơ thể.'} }
    ],
    vocab:[
      {ko:'뉴스', rom:'nyuseu', vi:'tin tức', pos:'danh từ'},
      {ko:'사회', rom:'sahoe', vi:'xã hội', pos:'danh từ', hanja:'社會', hv:'xã hội'},
      {ko:'사건', rom:'sageon', vi:'sự việc, vụ việc', pos:'danh từ', hanja:'事件', hv:'sự kiện'},
      {ko:'문제', rom:'munje', vi:'vấn đề', pos:'danh từ', hanja:'問題', hv:'vấn đề'},
      {ko:'해결하다', rom:'haegyeolhada', vi:'giải quyết', pos:'động từ', hanja:'解決—', hv:'giải quyết'},
      {ko:'발생하다', rom:'balsaenghada', vi:'xảy ra, phát sinh', pos:'động từ', hanja:'發生—', hv:'phát sinh'},
      {ko:'보도하다', rom:'bodohada', vi:'đưa tin', pos:'động từ', hanja:'報道—', hv:'báo đạo'},
      {ko:'여론', rom:'yeoron', vi:'dư luận', pos:'danh từ', hanja:'輿論', hv:'dư luận'},
      {ko:'영향', rom:'yeonghyang', vi:'ảnh hưởng', pos:'danh từ', hanja:'影響', hv:'ảnh hưởng'},
      {ko:'심각하다', rom:'simgakada', vi:'nghiêm trọng', pos:'tính từ', hanja:'深刻—', hv:'thâm khắc'}
    ],
    dialogue:[
      {sp:'수진', ko:'내일 날씨 어때요?', vi:'Ngày mai thời tiết thế nào?'},
      {sp:'꾸언', ko:'뉴스에 따르면 비가 온대요.', vi:'Theo tin tức thì trời mưa.'},
      {sp:'수진', ko:'요즘 미세먼지도 심하죠?', vi:'Dạo này bụi mịn cũng nặng nhỉ?'},
      {sp:'꾸언', ko:'네, 환경 문제가 심각하다는 것을 느껴요.', vi:'Ừ, tôi cảm nhận vấn đề môi trường thật nghiêm trọng.'}
    ]
  },
  {
    no:12, level:'trung-cap-1', ko:'환경 보호', vi:'Bảo vệ môi trường', rom:'hwangyeong boho',
    skill:'Nói về bảo vệ môi trường, khuyến khích hành động', pron:'Nối âm',
    culture:'Phân loại rác và tái chế ở Hàn Quốc',
    grammar:[
      { form:'V + 도록', vi:'để, sao cho, đến mức', note:'Chỉ mục đích hoặc mức độ của hành động.',
        ex:{ko:'쓰레기를 줄이도록 노력해요.', vi:'Tôi cố gắng để giảm rác.'} },
      { form:'V + 게 하다', vi:'làm cho, khiến', note:'Câu sai khiến: bắt/để ai đó làm gì.',
        ex:{ko:'아이에게 채소를 먹게 해요.', vi:'Tôi cho bọn trẻ ăn rau.'} }
    ],
    vocab:[
      {ko:'환경', rom:'hwangyeong', vi:'môi trường', pos:'danh từ', hanja:'環境', hv:'hoàn cảnh'},
      {ko:'보호하다', rom:'bohohada', vi:'bảo vệ', pos:'động từ', hanja:'保護—', hv:'bảo hộ'},
      {ko:'오염', rom:'oyeom', vi:'ô nhiễm', pos:'danh từ', hanja:'汚染', hv:'ô nhiễm'},
      {ko:'쓰레기', rom:'sseuregi', vi:'rác', pos:'danh từ'},
      {ko:'재활용', rom:'jaehwaryong', vi:'tái chế', pos:'danh từ', hanja:'再活用', hv:'tái hoạt dụng'},
      {ko:'줄이다', rom:'jurida', vi:'giảm bớt', pos:'động từ'},
      {ko:'에너지', rom:'eneoji', vi:'năng lượng', pos:'danh từ'},
      {ko:'절약하다', rom:'jeoryakhada', vi:'tiết kiệm', pos:'động từ', hanja:'節約—', hv:'tiết ước'},
      {ko:'지구', rom:'jigu', vi:'trái đất', pos:'danh từ', hanja:'地球', hv:'địa cầu'},
      {ko:'실천하다', rom:'silcheonhada', vi:'thực hiện (bằng hành động)', pos:'động từ', hanja:'實踐—', hv:'thực tiễn'}
    ],
    dialogue:[
      {sp:'민수', ko:'분리수거 어떻게 해요?', vi:'Phân loại rác thế nào?'},
      {sp:'꾸언', ko:'쓰레기를 줄이도록 노력하고 있어요.', vi:'Tôi đang cố gắng để giảm rác.'},
      {sp:'민수', ko:'좋은 습관이네요.', vi:'Thói quen tốt đó.'},
      {sp:'꾸언', ko:'네, 아이들도 절약하게 하고 있어요.', vi:'Vâng, tôi cũng tập cho bọn trẻ tiết kiệm.'}
    ]
  },
  {
    no:13, level:'trung-cap-1', ko:'부탁과 조언', vi:'Nhờ vả và lời khuyên', rom:'butak-gwa joeon',
    skill:'Đưa ra lời khuyên, gợi ý cho người khác', pron:'Ngữ điệu khuyên nhủ',
    culture:'Cách khuyên bảo tế nhị trong tiếng Hàn',
    grammar:[
      { form:'V + 는 게 어때요?', vi:'... thì thế nào?', note:'Gợi ý một cách nhẹ nhàng.',
        ex:{ko:'좀 쉬는 게 어때요?', vi:'Nghỉ một chút thì thế nào?'} },
      { form:'V + 지 그래요?', vi:'sao không thử ...?', note:'Khuyên người nghe nên làm việc gì.',
        ex:{ko:'병원에 가 보지 그래요?', vi:'Sao không thử đi khám xem?'} }
    ],
    vocab:[
      {ko:'조언', rom:'joeon', vi:'lời khuyên', pos:'danh từ', hanja:'助言', hv:'trợ ngôn'},
      {ko:'추천하다', rom:'chucheonhada', vi:'giới thiệu, gợi ý', pos:'động từ', hanja:'推薦—', hv:'thôi tiến'},
      {ko:'권하다', rom:'gwonhada', vi:'khuyên, mời', pos:'động từ', hanja:'勸—', hv:'khuyến'},
      {ko:'도움', rom:'doum', vi:'sự giúp đỡ', pos:'danh từ'},
      {ko:'방법', rom:'bangbeop', vi:'phương pháp, cách', pos:'danh từ', hanja:'方法', hv:'phương pháp'},
      {ko:'의견', rom:'uigyeon', vi:'ý kiến', pos:'danh từ', hanja:'意見', hv:'ý kiến'},
      {ko:'결정하다', rom:'gyeoljeonghada', vi:'quyết định', pos:'động từ', hanja:'決定—', hv:'quyết định'},
      {ko:'고민', rom:'gomin', vi:'nỗi lo, trăn trở', pos:'danh từ', hanja:'苦悶', hv:'khổ muộn'},
      {ko:'상담하다', rom:'sangdamhada', vi:'tư vấn, trao đổi', pos:'động từ', hanja:'相談—', hv:'tương đàm'},
      {ko:'피곤하다', rom:'pigonhada', vi:'mệt mỏi', pos:'tính từ', hanja:'疲困—', hv:'bì khốn'}
    ],
    dialogue:[
      {sp:'꾸언', ko:'요즘 너무 피곤한데 어떡하죠?', vi:'Dạo này tôi mệt quá, làm sao đây?'},
      {sp:'수진', ko:'좀 쉬는 게 어때요?', vi:'Nghỉ một chút thì thế nào?'},
      {sp:'꾸언', ko:'일이 많아서요.', vi:'Vì nhiều việc quá.'},
      {sp:'수진', ko:'그래도 병원에 가 보지 그래요?', vi:'Dù vậy sao không thử đi khám xem?'}
    ]
  },
  {
    no:14, level:'trung-cap-1', ko:'경험에서 배우기', vi:'Học từ trải nghiệm', rom:'gyeongheom-eseo baeugi',
    skill:'Nói về sự tiến bộ nhờ trải nghiệm', pron:'Ôn nối âm',
    culture:'Tinh thần kiên trì (끈기) trong học tập của người Hàn',
    grammar:[
      { form:'V + 다 보니', vi:'do làm mãi mà, làm riết thành', note:'Trải nghiệm lặp lại dẫn tới nhận ra/kết quả.',
        ex:{ko:'자꾸 하다 보니 익숙해졌어요.', vi:'Làm mãi nên tôi quen dần.'} },
      { form:'V + 는 대로', vi:'ngay khi, theo', note:'Làm việc kia ngay sau khi việc này xong.',
        ex:{ko:'도착하는 대로 연락할게요.', vi:'Đến nơi là tôi liên lạc ngay.'} }
    ],
    vocab:[
      {ko:'경험', rom:'gyeongheom', vi:'kinh nghiệm', pos:'danh từ', hanja:'經驗', hv:'kinh nghiệm'},
      {ko:'익숙하다', rom:'iksukhada', vi:'quen thuộc', pos:'tính từ'},
      {ko:'습관', rom:'seupgwan', vi:'thói quen', pos:'danh từ', hanja:'習慣', hv:'tập quán'},
      {ko:'노력', rom:'noryeok', vi:'nỗ lực', pos:'danh từ', hanja:'努力', hv:'nỗ lực'},
      {ko:'발전', rom:'baljeon', vi:'sự tiến bộ', pos:'danh từ', hanja:'發展', hv:'phát triển'},
      {ko:'실력', rom:'sillyeok', vi:'thực lực', pos:'danh từ', hanja:'實力', hv:'thực lực'},
      {ko:'꾸준히', rom:'kkujunhi', vi:'đều đặn, bền bỉ', pos:'trạng từ'},
      {ko:'포기하다', rom:'pogihada', vi:'bỏ cuộc', pos:'động từ', hanja:'抛棄—', hv:'phao khí'},
      {ko:'극복하다', rom:'geukbokhada', vi:'vượt qua', pos:'động từ', hanja:'克服—', hv:'khắc phục'},
      {ko:'성장하다', rom:'seongjanghada', vi:'trưởng thành, phát triển', pos:'động từ', hanja:'成長—', hv:'thành trưởng'}
    ],
    dialogue:[
      {sp:'민수', ko:'한국어 실력이 많이 늘었네요!', vi:'Tiếng Hàn tiến bộ nhiều nhỉ!'},
      {sp:'꾸언', ko:'매일 연습하다 보니 익숙해졌어요.', vi:'Ngày nào cũng luyện nên tôi quen dần.'},
      {sp:'민수', ko:'정말 대단해요.', vi:'Giỏi thật đấy.'},
      {sp:'꾸언', ko:'집에 도착하는 대로 또 공부할 거예요.', vi:'Về đến nhà là tôi lại học tiếp.'}
    ]
  },
  {
    no:15, level:'trung-cap-1', ko:'미래와 목표', vi:'Tương lai và mục tiêu', rom:'mirae-wa mokpyo',
    skill:'Trình bày dự định, mục tiêu một cách trang trọng', pron:'Ôn tập tổng hợp',
    culture:'Quan niệm về học lên cao và du học của người Hàn',
    grammar:[
      { form:'V + 고자 하다', vi:'nhằm, muốn (trang trọng)', note:'Ý định, mục đích trong văn phong trang trọng.',
        ex:{ko:'통역사가 되고자 합니다.', vi:'Tôi mong trở thành phiên dịch viên.'} },
      { form:'V + (으)ㄹ 계획이다', vi:'có kế hoạch, dự định', note:'Nói về kế hoạch cụ thể sắp tới.',
        ex:{ko:'대학원에 갈 계획이에요.', vi:'Tôi dự định học cao học.'} }
    ],
    vocab:[
      {ko:'미래', rom:'mirae', vi:'tương lai', pos:'danh từ', hanja:'未來', hv:'vị lai'},
      {ko:'목표', rom:'mokpyo', vi:'mục tiêu', pos:'danh từ', hanja:'目標', hv:'mục tiêu'},
      {ko:'계획', rom:'gyehoek', vi:'kế hoạch', pos:'danh từ', hanja:'計劃', hv:'kế hoạch'},
      {ko:'성공', rom:'seonggong', vi:'thành công', pos:'danh từ', hanja:'成功', hv:'thành công'},
      {ko:'이루다', rom:'iruda', vi:'đạt được, thực hiện', pos:'động từ'},
      {ko:'도전', rom:'dojeon', vi:'thử thách', pos:'danh từ', hanja:'挑戰', hv:'khiêu chiến'},
      {ko:'자격증', rom:'jagyeokjeung', vi:'chứng chỉ', pos:'danh từ', hanja:'資格證', hv:'tư cách chứng'},
      {ko:'취업', rom:'chwieop', vi:'việc làm, xin việc', pos:'danh từ', hanja:'就業', hv:'tựu nghiệp'},
      {ko:'유학', rom:'yuhak', vi:'du học', pos:'danh từ', hanja:'留學', hv:'lưu học'},
      {ko:'대학원', rom:'daehagwon', vi:'cao học, sau đại học', pos:'danh từ', hanja:'大學院', hv:'đại học viện'}
    ],
    dialogue:[
      {sp:'수진', ko:'앞으로 계획이 어떻게 돼요?', vi:'Kế hoạch sắp tới của bạn thế nào?'},
      {sp:'꾸언', ko:'통역사가 되고자 합니다.', vi:'Tôi muốn trở thành phiên dịch viên.'},
      {sp:'수진', ko:'그럼 유학도 갈 거예요?', vi:'Vậy có đi du học không?'},
      {sp:'꾸언', ko:'네, 대학원에 갈 계획이에요.', vi:'Vâng, tôi dự định học cao học.'}
    ]
  }
);

/* Cập nhật trạng thái: Trung cấp 1 đã có nội dung */
(COURSE_KO.levels.find(x => x.id === 'trung-cap-1') || {}).status = 'active';

/* ============================================================
   Bổ sung từ vựng + ngữ pháp cho Sơ cấp 1 (bám sát chủ đề giáo trình).
   Gộp thêm vào các bài đã có, khử trùng lặp theo chữ Hàn.
   ============================================================ */
const SC1_EXTRA = {
  1: {
    grammar:[
      { form:'N + 이/가', vi:'trợ từ chủ ngữ', note:'Đánh dấu chủ ngữ; có patchim dùng 이, không patchim dùng 가.',
        ex:{ko:'친구가 학생입니다.', vi:'Bạn tôi là học sinh.'} },
      { form:'N + 도', vi:'cũng', note:'Thêm một đối tượng có cùng tính chất.',
        ex:{ko:'저도 베트남 사람입니다.', vi:'Tôi cũng là người Việt Nam.'} }
    ],
    vocab:[
      {ko:'나이', rom:'nai', vi:'tuổi', pos:'danh từ'},
      {ko:'직업', rom:'jigeop', vi:'nghề nghiệp', pos:'danh từ', hanja:'職業', hv:'chức nghiệp'},
      {ko:'전공', rom:'jeongong', vi:'chuyên ngành', pos:'danh từ', hanja:'專攻', hv:'chuyên công'},
      {ko:'국적', rom:'gukjeok', vi:'quốc tịch', pos:'danh từ', hanja:'國籍', hv:'quốc tịch'},
      {ko:'만나다', rom:'mannada', vi:'gặp', pos:'động từ'},
      {ko:'알다', rom:'alda', vi:'biết', pos:'động từ'},
      {ko:'모르다', rom:'moreuda', vi:'không biết', pos:'động từ'},
      {ko:'인사하다', rom:'insahada', vi:'chào hỏi', pos:'động từ', hanja:'人事—', hv:'nhân sự'}
    ]
  },
  2: {
    grammar:[
      { form:'N + 에 있다 / 없다', vi:'có / không có ở (nơi)', note:'Diễn tả sự tồn tại tại một vị trí.',
        ex:{ko:'교실에 학생이 있습니다.', vi:'Trong lớp có học sinh.'} },
      { form:'N + 하고', vi:'và, với', note:'Nối hai danh từ hoặc chỉ đối tượng cùng làm.',
        ex:{ko:'책하고 공책이 있어요.', vi:'Có sách và vở.'} }
    ],
    vocab:[
      {ko:'교실', rom:'gyosil', vi:'lớp học', pos:'danh từ', hanja:'敎室', hv:'giáo thất'},
      {ko:'칠판', rom:'chilpan', vi:'bảng', pos:'danh từ', hanja:'漆板', hv:'tất bản'},
      {ko:'책상', rom:'chaeksang', vi:'bàn học', pos:'danh từ', hanja:'冊床', hv:'sách sàng'},
      {ko:'의자', rom:'uija', vi:'ghế', pos:'danh từ', hanja:'椅子', hv:'ỷ tử'},
      {ko:'공책', rom:'gongchaek', vi:'vở', pos:'danh từ', hanja:'空冊', hv:'không sách'},
      {ko:'연필', rom:'yeonpil', vi:'bút chì', pos:'danh từ', hanja:'鉛筆', hv:'duyên bút'},
      {ko:'지우개', rom:'jiugae', vi:'cục tẩy', pos:'danh từ'},
      {ko:'가방', rom:'gabang', vi:'cặp, túi', pos:'danh từ'}
    ]
  },
  3: {
    grammar:[
      { form:'N + 을/를', vi:'trợ từ tân ngữ', note:'Đánh dấu tân ngữ; có patchim dùng 을, không patchim dùng 를.',
        ex:{ko:'저는 밥을 먹어요.', vi:'Tôi ăn cơm.'} },
      { form:'V + 아/어요', vi:'đuôi câu thân mật lịch sự', note:'Dạng nói thông dụng hằng ngày.',
        ex:{ko:'학교에 가요.', vi:'Tôi đi học.'} }
    ],
    vocab:[
      {ko:'일어나다', rom:'ireonada', vi:'thức dậy', pos:'động từ'},
      {ko:'씻다', rom:'ssitda', vi:'rửa', pos:'động từ'},
      {ko:'입다', rom:'ipda', vi:'mặc', pos:'động từ'},
      {ko:'자다', rom:'jada', vi:'ngủ', pos:'động từ'},
      {ko:'쉬다', rom:'swida', vi:'nghỉ ngơi', pos:'động từ'},
      {ko:'청소하다', rom:'cheongsohada', vi:'dọn dẹp', pos:'động từ', hanja:'淸掃—', hv:'thanh tảo'},
      {ko:'세수하다', rom:'sesuhada', vi:'rửa mặt', pos:'động từ', hanja:'洗手—', hv:'tẩy thủ'},
      {ko:'매일', rom:'maeil', vi:'mỗi ngày', pos:'trạng từ', hanja:'每日', hv:'mỗi nhật'}
    ]
  },
  4: {
    grammar:[
      { form:'N + 에 (thời gian)', vi:'vào (lúc)', note:'Gắn với mốc thời gian: giờ, ngày, thứ, tháng.',
        ex:{ko:'월요일에 만나요.', vi:'Gặp nhau vào thứ Hai.'} },
      { form:'무슨 / 며칠 / 언제', vi:'gì / ngày mấy / khi nào', note:'Từ để hỏi về ngày tháng, thời gian.',
        ex:{ko:'생일이 며칠이에요?', vi:'Sinh nhật là ngày mấy?'} }
    ],
    vocab:[
      {ko:'달력', rom:'dallyeok', vi:'lịch (tờ)', pos:'danh từ'},
      {ko:'오늘', rom:'oneul', vi:'hôm nay', pos:'danh từ'},
      {ko:'내일', rom:'naeil', vi:'ngày mai', pos:'danh từ', hanja:'來日', hv:'lai nhật'},
      {ko:'어제', rom:'eoje', vi:'hôm qua', pos:'danh từ'},
      {ko:'그저께', rom:'geujeokke', vi:'hôm kia', pos:'danh từ'},
      {ko:'평일', rom:'pyeongil', vi:'ngày thường', pos:'danh từ', hanja:'平日', hv:'bình nhật'},
      {ko:'지난주', rom:'jinanju', vi:'tuần trước', pos:'danh từ'},
      {ko:'다음 주', rom:'daeum ju', vi:'tuần sau', pos:'danh từ'}
    ]
  },
  5: {
    grammar:[
      { form:'V + 고 (nối tiếp)', vi:'và, rồi', note:'Nối hai hành động theo trình tự hoặc liệt kê.',
        ex:{ko:'밥을 먹고 학교에 가요.', vi:'Ăn cơm rồi đi học.'} },
      { form:'N + 부터 ~ N + 까지', vi:'từ ~ đến', note:'Chỉ khoảng thời gian bắt đầu và kết thúc.',
        ex:{ko:'아홉 시부터 여섯 시까지 일해요.', vi:'Làm việc từ 9 giờ đến 6 giờ.'} }
    ],
    vocab:[
      {ko:'출근하다', rom:'chulgeunhada', vi:'đi làm', pos:'động từ', hanja:'出勤—', hv:'xuất cần'},
      {ko:'퇴근하다', rom:'toegeunhada', vi:'tan làm', pos:'động từ', hanja:'退勤—', hv:'thoái cần'},
      {ko:'수업', rom:'sueop', vi:'tiết học, giờ học', pos:'danh từ', hanja:'授業', hv:'thụ nghiệp'},
      {ko:'시작하다', rom:'sijakhada', vi:'bắt đầu', pos:'động từ', hanja:'始作—', hv:'thuỷ tác'},
      {ko:'끝나다', rom:'kkeunnada', vi:'kết thúc', pos:'động từ'},
      {ko:'점심', rom:'jeomsim', vi:'bữa trưa', pos:'danh từ', hanja:'點心', hv:'điểm tâm'},
      {ko:'저녁', rom:'jeonyeok', vi:'bữa tối, buổi tối', pos:'danh từ'},
      {ko:'보통', rom:'botong', vi:'thường, thông thường', pos:'trạng từ', hanja:'普通', hv:'phổ thông'}
    ]
  },
  6: {
    grammar:[
      { form:'V/A + 았/었어요', vi:'(thì quá khứ)', note:'Diễn tả việc đã xảy ra; chọn 았/었 theo nguyên âm gốc.',
        ex:{ko:'주말에 영화를 봤어요.', vi:'Cuối tuần tôi đã xem phim.'} },
      { form:'V + 아/어서 (trình tự)', vi:'... rồi ...', note:'Hành động trước nối tiếp hành động sau, cùng chủ ngữ.',
        ex:{ko:'친구를 만나서 밥을 먹었어요.', vi:'Gặp bạn rồi đi ăn cơm.'} }
    ],
    vocab:[
      {ko:'영화', rom:'yeonghwa', vi:'phim', pos:'danh từ', hanja:'映畵', hv:'ánh hoạ'},
      {ko:'공원', rom:'gongwon', vi:'công viên', pos:'danh từ', hanja:'公園', hv:'công viên'},
      {ko:'산책하다', rom:'sanchaekhada', vi:'đi dạo', pos:'động từ', hanja:'散策—', hv:'tản sách'},
      {ko:'놀다', rom:'nolda', vi:'chơi', pos:'động từ'},
      {ko:'쇼핑하다', rom:'syopinghada', vi:'mua sắm', pos:'động từ'},
      {ko:'여행하다', rom:'yeohaenghada', vi:'du lịch', pos:'động từ', hanja:'旅行—', hv:'lữ hành'},
      {ko:'즐겁다', rom:'jeulgeopda', vi:'vui vẻ', pos:'tính từ'},
      {ko:'특별하다', rom:'teukbyeolhada', vi:'đặc biệt', pos:'tính từ', hanja:'特別—', hv:'đặc biệt'}
    ]
  },
  7: {
    grammar:[
      { form:'이 / 그 / 저 + N', vi:'này / đó / kia', note:'이 (gần người nói), 그 (gần người nghe), 저 (xa cả hai).',
        ex:{ko:'이 사과 주세요.', vi:'Cho tôi quả táo này.'} },
      { form:'N + 주세요', vi:'cho tôi ...', note:'Yêu cầu, mua hàng một cách lịch sự.',
        ex:{ko:'물 한 병 주세요.', vi:'Cho tôi một chai nước.'} }
    ],
    vocab:[
      {ko:'가게', rom:'gage', vi:'cửa hàng', pos:'danh từ'},
      {ko:'물건', rom:'mulgeon', vi:'đồ vật, hàng hoá', pos:'danh từ', hanja:'物件', hv:'vật kiện'},
      {ko:'돈', rom:'don', vi:'tiền', pos:'danh từ'},
      {ko:'값', rom:'gap', vi:'giá tiền', pos:'danh từ'},
      {ko:'원', rom:'won', vi:'won (tiền Hàn)', pos:'danh từ'},
      {ko:'모두', rom:'modu', vi:'tất cả', pos:'danh từ'},
      {ko:'그리고', rom:'geurigo', vi:'và, với lại', pos:'trạng từ'},
      {ko:'얼마', rom:'eolma', vi:'bao nhiêu (tiền)', pos:'danh từ'}
    ]
  },
  8: {
    grammar:[
      { form:'V + 고 싶다', vi:'muốn (làm)', note:'Diễn tả mong muốn của bản thân.',
        ex:{ko:'불고기를 먹고 싶어요.', vi:'Tôi muốn ăn thịt nướng.'} },
      { form:'V/A + 지 않다', vi:'không (phủ định dài)', note:'Cách phủ định trang trọng hơn 안.',
        ex:{ko:'저는 맵지 않아요.', vi:'Tôi không (ăn) cay.'} }
    ],
    vocab:[
      {ko:'식당', rom:'sikdang', vi:'nhà hàng, quán ăn', pos:'danh từ', hanja:'食堂', hv:'thực đường'},
      {ko:'메뉴', rom:'menyu', vi:'thực đơn', pos:'danh từ'},
      {ko:'주문하다', rom:'jumunhada', vi:'gọi món, đặt hàng', pos:'động từ', hanja:'注文—', hv:'chú văn'},
      {ko:'배고프다', rom:'baegopeuda', vi:'đói', pos:'tính từ'},
      {ko:'배부르다', rom:'baebureuda', vi:'no', pos:'tính từ'},
      {ko:'맛있다', rom:'masitda', vi:'ngon', pos:'tính từ'},
      {ko:'맛없다', rom:'madeopda', vi:'dở, không ngon', pos:'tính từ'},
      {ko:'시키다', rom:'sikida', vi:'gọi món', pos:'động từ'}
    ]
  },
  9: {
    grammar:[
      { form:'N + 에 (vị trí)', vi:'ở (nơi tồn tại)', note:'Chỉ nơi có/đặt vật gì, đi với 있다/없다.',
        ex:{ko:'책이 책상 위에 있어요.', vi:'Sách ở trên bàn.'} },
      { form:'N + 만', vi:'chỉ, chỉ mỗi', note:'Giới hạn duy nhất một đối tượng.',
        ex:{ko:'방에 저만 있어요.', vi:'Trong phòng chỉ có mình tôi.'} }
    ],
    vocab:[
      {ko:'방', rom:'bang', vi:'phòng', pos:'danh từ', hanja:'房', hv:'phòng'},
      {ko:'거실', rom:'geosil', vi:'phòng khách', pos:'danh từ', hanja:'居室', hv:'cư thất'},
      {ko:'부엌', rom:'bueok', vi:'nhà bếp', pos:'danh từ'},
      {ko:'화장실', rom:'hwajangsil', vi:'nhà vệ sinh', pos:'danh từ', hanja:'化粧室', hv:'hoá trang thất'},
      {ko:'위', rom:'wi', vi:'trên', pos:'danh từ'},
      {ko:'아래', rom:'arae', vi:'dưới', pos:'danh từ'},
      {ko:'앞', rom:'ap', vi:'phía trước', pos:'danh từ'},
      {ko:'뒤', rom:'dwi', vi:'phía sau', pos:'danh từ'}
    ]
  },
  10: {
    grammar:[
      { form:'N + 께서', vi:'trợ từ chủ ngữ kính ngữ', note:'Thay cho 이/가 khi chủ ngữ là người đáng kính.',
        ex:{ko:'아버지께서 오세요.', vi:'Bố tôi đến.'} },
      { form:'Số đếm + 명 / 분', vi:'(đơn vị đếm người)', note:'명 dùng thường, 분 dùng kính trọng.',
        ex:{ko:'가족이 네 명이에요.', vi:'Gia đình tôi có bốn người.'} }
    ],
    vocab:[
      {ko:'부모님', rom:'bumonim', vi:'bố mẹ', pos:'danh từ', hanja:'父母—', hv:'phụ mẫu'},
      {ko:'아버지', rom:'abeoji', vi:'bố', pos:'danh từ'},
      {ko:'어머니', rom:'eomeoni', vi:'mẹ', pos:'danh từ'},
      {ko:'형', rom:'hyeong', vi:'anh trai (của nam)', pos:'danh từ'},
      {ko:'누나', rom:'nuna', vi:'chị gái (của nam)', pos:'danh từ'},
      {ko:'오빠', rom:'oppa', vi:'anh trai (của nữ)', pos:'danh từ'},
      {ko:'언니', rom:'eonni', vi:'chị gái (của nữ)', pos:'danh từ'},
      {ko:'동생', rom:'dongsaeng', vi:'em', pos:'danh từ'}
    ]
  },
  11: {
    grammar:[
      { form:'A/V + 지요? (죠?)', vi:'... nhỉ? / phải không?', note:'Xác nhận điều mình cho là đúng.',
        ex:{ko:'오늘 춥지요?', vi:'Hôm nay lạnh nhỉ?'} },
      { form:'V/A + 겠 (dự đoán)', vi:'chắc là, sẽ', note:'Phỏng đoán hoặc dự báo.',
        ex:{ko:'내일 비가 오겠어요.', vi:'Ngày mai chắc trời mưa.'} }
    ],
    vocab:[
      {ko:'맑다', rom:'makda', vi:'quang, trong', pos:'tính từ'},
      {ko:'흐리다', rom:'heurida', vi:'âm u', pos:'tính từ'},
      {ko:'덥다', rom:'deopda', vi:'nóng', pos:'tính từ'},
      {ko:'춥다', rom:'chupda', vi:'lạnh', pos:'tính từ'},
      {ko:'따뜻하다', rom:'ttatteutada', vi:'ấm áp', pos:'tính từ'},
      {ko:'시원하다', rom:'siwonhada', vi:'mát mẻ', pos:'tính từ'},
      {ko:'바람', rom:'baram', vi:'gió', pos:'danh từ'},
      {ko:'구름', rom:'gureum', vi:'mây', pos:'danh từ'}
    ]
  },
  12: {
    grammar:[
      { form:'V + (으)ㄹ까요?', vi:'... nhé? / có nên ... không?', note:'Rủ rê hoặc hỏi ý người nghe.',
        ex:{ko:'내일 만날까요?', vi:'Mai gặp nhau nhé?'} },
      { form:'V + 아/어 주세요', vi:'làm ơn ... giúp', note:'Nhờ người khác làm việc gì lịch sự.',
        ex:{ko:'다시 전화해 주세요.', vi:'Làm ơn gọi lại giúp tôi.'} }
    ],
    vocab:[
      {ko:'여보세요', rom:'yeoboseyo', vi:'a lô', pos:'thán từ'},
      {ko:'통화', rom:'tonghwa', vi:'cuộc gọi', pos:'danh từ', hanja:'通話', hv:'thông thoại'},
      {ko:'번호', rom:'beonho', vi:'số', pos:'danh từ', hanja:'番號', hv:'phiên hiệu'},
      {ko:'바쁘다', rom:'bappeuda', vi:'bận', pos:'tính từ'},
      {ko:'나중에', rom:'najunge', vi:'lát nữa, sau này', pos:'trạng từ'},
      {ko:'다시', rom:'dasi', vi:'lại, lần nữa', pos:'trạng từ'},
      {ko:'연락하다', rom:'yeollakhada', vi:'liên lạc', pos:'động từ', hanja:'連絡—', hv:'liên lạc'},
      {ko:'약속', rom:'yaksok', vi:'cuộc hẹn', pos:'danh từ', hanja:'約束', hv:'ước thúc'}
    ]
  },
  13: {
    grammar:[
      { form:'N + 에게 / 한테', vi:'cho, đến (ai)', note:'Chỉ người nhận; 한테 dùng thân mật.',
        ex:{ko:'친구에게 선물을 줘요.', vi:'Tôi tặng quà cho bạn.'} },
      { form:'V + (으)ㄹ 거예요', vi:'sẽ (dự định)', note:'Kế hoạch, dự định trong tương lai.',
        ex:{ko:'생일 파티를 할 거예요.', vi:'Tôi sẽ tổ chức tiệc sinh nhật.'} }
    ],
    vocab:[
      {ko:'축하하다', rom:'chukhahada', vi:'chúc mừng', pos:'động từ', hanja:'祝賀—', hv:'chúc hạ'},
      {ko:'선물', rom:'seonmul', vi:'quà', pos:'danh từ', hanja:'膳物', hv:'thiện vật'},
      {ko:'케이크', rom:'keikeu', vi:'bánh kem', pos:'danh từ'},
      {ko:'파티', rom:'pati', vi:'tiệc', pos:'danh từ'},
      {ko:'초', rom:'cho', vi:'nến', pos:'danh từ'},
      {ko:'노래', rom:'norae', vi:'bài hát', pos:'danh từ'},
      {ko:'준비하다', rom:'junbihada', vi:'chuẩn bị', pos:'động từ', hanja:'準備—', hv:'chuẩn bị'},
      {ko:'초대하다', rom:'chodaehada', vi:'mời', pos:'động từ', hanja:'招待—', hv:'chiêu đãi'}
    ]
  },
  14: {
    grammar:[
      { form:'V + 거나', vi:'hoặc (làm gì)', note:'Nối hai hành động để chọn một.',
        ex:{ko:'주말에 책을 읽거나 영화를 봐요.', vi:'Cuối tuần tôi đọc sách hoặc xem phim.'} },
      { form:'A/V + 지만', vi:'nhưng', note:'Nối hai vế trái ngược.',
        ex:{ko:'운동을 좋아하지만 잘 못해요.', vi:'Tôi thích vận động nhưng không giỏi.'} }
    ],
    vocab:[
      {ko:'운동', rom:'undong', vi:'thể thao', pos:'danh từ', hanja:'運動', hv:'vận động'},
      {ko:'음악', rom:'eumak', vi:'âm nhạc', pos:'danh từ', hanja:'音樂', hv:'âm nhạc'},
      {ko:'독서', rom:'dokseo', vi:'đọc sách', pos:'danh từ', hanja:'讀書', hv:'độc thư'},
      {ko:'그림', rom:'geurim', vi:'tranh, vẽ', pos:'danh từ'},
      {ko:'사진', rom:'sajin', vi:'ảnh', pos:'danh từ', hanja:'寫眞', hv:'tả chân'},
      {ko:'게임', rom:'geim', vi:'trò chơi', pos:'danh từ'},
      {ko:'좋아하다', rom:'joahada', vi:'thích', pos:'động từ'},
      {ko:'관심', rom:'gwansim', vi:'sự quan tâm', pos:'danh từ', hanja:'關心', hv:'quan tâm'}
    ]
  },
  15: {
    grammar:[
      { form:'N + (으)로 (phương tiện)', vi:'bằng (phương tiện)', note:'Chỉ phương tiện di chuyển.',
        ex:{ko:'버스로 학교에 가요.', vi:'Tôi đi học bằng xe buýt.'} },
      { form:'N + 에서 ~ N + 까지', vi:'từ ~ đến (nơi chốn)', note:'Chỉ điểm đầu và điểm cuối của quãng đường.',
        ex:{ko:'집에서 회사까지 멀어요.', vi:'Từ nhà đến công ty xa.'} }
    ],
    vocab:[
      {ko:'버스', rom:'beoseu', vi:'xe buýt', pos:'danh từ'},
      {ko:'지하철', rom:'jihacheol', vi:'tàu điện ngầm', pos:'danh từ', hanja:'地下鐵', hv:'địa hạ thiết'},
      {ko:'자동차', rom:'jadongcha', vi:'ô tô', pos:'danh từ', hanja:'自動車', hv:'tự động xa'},
      {ko:'자전거', rom:'jajeongeo', vi:'xe đạp', pos:'danh từ', hanja:'自轉車', hv:'tự chuyển xa'},
      {ko:'걸어서', rom:'georeoseo', vi:'đi bộ', pos:'trạng từ'},
      {ko:'빠르다', rom:'ppareuda', vi:'nhanh', pos:'tính từ'},
      {ko:'느리다', rom:'neurida', vi:'chậm', pos:'tính từ'},
      {ko:'걸리다', rom:'geollida', vi:'mất, tốn (thời gian)', pos:'động từ'}
    ]
  }
};
/* ============ Trung cấp 2 (중급 2) — 15 bài, tự soạn theo khung 종합 한국어 중급2 ============ */
COURSE_KO.lessons.push(
  {
    no:1, level:'trung-cap-2', ko:'언어와 소통', vi:'Ngôn ngữ và giao tiếp', rom:'eoneo-wa sotong',
    skill:'Bàn về việc học ngôn ngữ và cách giao tiếp hiệu quả', pron:'Ngữ điệu trong câu kể lại',
    culture:'Văn hoá "nói giảm nói tránh" (완곡어법) của người Hàn',
    grammar:[
      { form:'A/V + 더라고요', vi:'(kể lại điều mình trực tiếp thấy) ... đấy', note:'Thuật lại trải nghiệm bản thân vừa nhận ra.',
        ex:{ko:'직접 말해 보니 생각보다 어렵더라고요.', vi:'Thử nói trực tiếp mới thấy khó hơn tưởng đấy.'} },
      { form:'A/V + (으)ㄹ 뿐만 아니라', vi:'không những ... mà còn', note:'Bổ sung thêm ý, nâng mức độ.',
        ex:{ko:'그는 한국어뿐만 아니라 영어도 잘해요.', vi:'Anh ấy không chỉ giỏi tiếng Hàn mà còn giỏi tiếng Anh.'} },
      { form:'A/V + 는 반면에', vi:'trong khi đó, ngược lại', note:'Đối lập hai mặt.',
        ex:{ko:'말하기는 쉬운 반면에 쓰기는 어려워요.', vi:'Nói thì dễ, ngược lại viết thì khó.'} },
      { form:'V + 도록', vi:'sao cho, để mà', note:'Chỉ mục đích hoặc mức độ.',
        ex:{ko:'모두 알아듣도록 천천히 설명했어요.', vi:'Tôi giải thích chậm để mọi người đều hiểu.'} }
    ],
    vocab:[
      {ko:'소통', rom:'sotong', vi:'sự giao tiếp, thông hiểu', pos:'danh từ', hanja:'疏通', hv:'sơ thông', examples:[{ko:'세대 간 소통이 중요해요.', vi:'Giao tiếp giữa các thế hệ rất quan trọng.'}]},
      {ko:'표현', rom:'pyohyeon', vi:'sự biểu đạt, cách nói', pos:'danh từ', hanja:'表現', hv:'biểu hiện', examples:[{ko:'이 표현은 너무 직접적이에요.', vi:'Cách nói này quá thẳng.'}]},
      {ko:'억양', rom:'eogyang', vi:'ngữ điệu', pos:'danh từ', hanja:'抑揚', hv:'ức dương', examples:[{ko:'억양에 따라 뜻이 달라져요.', vi:'Nghĩa thay đổi tuỳ theo ngữ điệu.'}]},
      {ko:'오해', rom:'ohae', vi:'sự hiểu lầm', pos:'danh từ', hanja:'誤解', hv:'ngộ giải', examples:[{ko:'작은 오해가 큰 싸움이 됐어요.', vi:'Hiểu lầm nhỏ thành cãi vã lớn.'}]},
      {ko:'설득하다', rom:'seoldeukhada', vi:'thuyết phục', pos:'động từ', hanja:'說得—', hv:'thuyết đắc', examples:[{ko:'부모님을 겨우 설득했어요.', vi:'Tôi phải chật vật thuyết phục bố mẹ.'}]},
      {ko:'전달하다', rom:'jeondalhada', vi:'truyền đạt', pos:'động từ', hanja:'傳達—', hv:'truyền đạt', examples:[{ko:'제 뜻을 정확히 전달하고 싶어요.', vi:'Tôi muốn truyền đạt ý mình cho chính xác.'}]},
      {ko:'표정', rom:'pyojeong', vi:'nét mặt', pos:'danh từ', hanja:'表情', hv:'biểu tình', examples:[{ko:'표정만 봐도 기분을 알 수 있어요.', vi:'Chỉ nhìn nét mặt cũng biết tâm trạng.'}]},
      {ko:'몸짓', rom:'momjit', vi:'cử chỉ, điệu bộ', pos:'danh từ', examples:[{ko:'말이 안 통해서 몸짓으로 설명했어요.', vi:'Không nói được nên tôi diễn tả bằng cử chỉ.'}]},
      {ko:'대화', rom:'daehwa', vi:'cuộc đối thoại', pos:'danh từ', hanja:'對話', hv:'đối thoại', examples:[{ko:'솔직한 대화가 필요해요.', vi:'Cần một cuộc trò chuyện thẳng thắn.'}]},
      {ko:'말투', rom:'maltu', vi:'giọng điệu, cách ăn nói', pos:'danh từ', examples:[{ko:'그 사람 말투가 좀 차가워요.', vi:'Giọng điệu người đó hơi lạnh lùng.'}]},
      {ko:'통역', rom:'tongyeok', vi:'sự phiên dịch', pos:'danh từ', hanja:'通譯', hv:'thông dịch', examples:[{ko:'회의에 통역이 필요해요.', vi:'Cuộc họp cần có phiên dịch.'}]},
      {ko:'모국어', rom:'mogugeo', vi:'tiếng mẹ đẻ', pos:'danh từ', hanja:'母國語', hv:'mẫu quốc ngữ', examples:[{ko:'모국어처럼 자연스럽게 말해요.', vi:'Nói tự nhiên như tiếng mẹ đẻ.'}]},
      {ko:'유창하다', rom:'yuchanghada', vi:'lưu loát', pos:'tính từ', hanja:'流暢—', hv:'lưu sướng', examples:[{ko:'그녀는 한국어가 아주 유창해요.', vi:'Cô ấy nói tiếng Hàn rất lưu loát.'}]},
      {ko:'서투르다', rom:'seotureuda', vi:'vụng, chưa thạo', pos:'tính từ', examples:[{ko:'아직 발음이 서툴러요.', vi:'Phát âm của tôi vẫn còn vụng.'}]},
      {ko:'알아듣다', rom:'aradeutda', vi:'nghe hiểu', pos:'động từ', examples:[{ko:'빠르게 말하면 못 알아들어요.', vi:'Nói nhanh thì tôi nghe không hiểu.'}]},
      {ko:'주고받다', rom:'jugobatda', vi:'trao đổi qua lại', pos:'động từ', examples:[{ko:'의견을 자유롭게 주고받았어요.', vi:'Chúng tôi trao đổi ý kiến thoải mái.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'꾸언 씨, 한국어 실력이 많이 늘었더라고요.', vi:'Quân này, trình tiếng Hàn của cậu lên nhiều đấy.'},
      {sp:'꾸언', ko:'듣기는 늘었는데 말하기는 아직 서툴러요.', vi:'Nghe thì khá lên mà nói vẫn còn vụng.'},
      {sp:'수진', ko:'꾸언 씨는 발음뿐만 아니라 억양도 자연스러워요.', vi:'Cậu không chỉ phát âm mà ngữ điệu cũng tự nhiên.'},
      {sp:'꾸언', ko:'상대가 알아듣도록 천천히 말하려고 노력해요.', vi:'Tôi cố nói chậm để người nghe hiểu được.'},
      {sp:'수진', ko:'그렇게 하면 오해도 줄어들겠네요.', vi:'Làm vậy chắc cũng bớt hiểu lầm nhỉ.'}
    ]
  },
  {
    no:2, level:'trung-cap-2', ko:'뉴스와 사회 문제', vi:'Tin tức và vấn đề xã hội', rom:'nyuseu-wa sahoe munje',
    skill:'Đọc hiểu tin tức, bàn về vấn đề xã hội', pron:'Đọc số liệu và tỉ lệ',
    culture:'Thói quen đọc báo và mạng xã hội của giới trẻ Hàn',
    grammar:[
      { form:'A/V + (으)ㄴ/는 셈이다', vi:'coi như là, xem như', note:'Kết luận tương đương sau khi tính toán.',
        ex:{ko:'거의 다 끝났으니 성공한 셈이에요.', vi:'Gần xong hết rồi nên coi như thành công.'} },
      { form:'N + 에 따르면', vi:'theo (nguồn tin)', note:'Dẫn nguồn thông tin.',
        ex:{ko:'뉴스에 따르면 물가가 올랐대요.', vi:'Theo tin tức thì vật giá đã tăng.'} },
      { form:'A/V + 다고 하다', vi:'nghe nói rằng (dẫn gián tiếp)', note:'Thuật lại lời/ thông tin.',
        ex:{ko:'내일 비가 온다고 해요.', vi:'Nghe nói mai trời mưa.'} },
      { form:'V + (으)ㄹ 수밖에 없다', vi:'không còn cách nào khác ngoài', note:'Kết quả tất yếu, bị buộc.',
        ex:{ko:'증거가 있으니 믿을 수밖에 없어요.', vi:'Có bằng chứng nên đành phải tin.'} }
    ],
    vocab:[
      {ko:'사회', rom:'sahoe', vi:'xã hội', pos:'danh từ', hanja:'社會', hv:'xã hội', examples:[{ko:'사회 문제에 관심이 많아요.', vi:'Tôi quan tâm nhiều đến vấn đề xã hội.'}]},
      {ko:'문제', rom:'munje', vi:'vấn đề', pos:'danh từ', hanja:'問題', hv:'vấn đề', examples:[{ko:'이 문제를 해결해야 해요.', vi:'Phải giải quyết vấn đề này.'}]},
      {ko:'기사', rom:'gisa', vi:'bài báo', pos:'danh từ', hanja:'記事', hv:'ký sự', examples:[{ko:'그 기사를 읽어 봤어요?', vi:'Bạn đọc bài báo đó chưa?'}]},
      {ko:'언론', rom:'eollon', vi:'giới truyền thông', pos:'danh từ', hanja:'言論', hv:'ngôn luận', examples:[{ko:'언론의 역할이 중요해요.', vi:'Vai trò của truyền thông rất quan trọng.'}]},
      {ko:'여론', rom:'yeoron', vi:'dư luận', pos:'danh từ', hanja:'輿論', hv:'dư luận', examples:[{ko:'여론이 정부를 움직였어요.', vi:'Dư luận đã tác động đến chính phủ.'}]},
      {ko:'보도하다', rom:'bodohada', vi:'đưa tin', pos:'động từ', hanja:'報道—', hv:'báo đạo', examples:[{ko:'사고 소식을 크게 보도했어요.', vi:'Họ đưa tin lớn về vụ tai nạn.'}]},
      {ko:'사건', rom:'sageon', vi:'sự kiện, vụ việc', pos:'danh từ', hanja:'事件', hv:'sự kiện', examples:[{ko:'그 사건이 온 나라를 놀라게 했어요.', vi:'Vụ việc đó làm cả nước bàng hoàng.'}]},
      {ko:'통계', rom:'tonggye', vi:'thống kê', pos:'danh từ', hanja:'統計', hv:'thống kế', examples:[{ko:'통계에 따르면 인구가 줄었어요.', vi:'Theo thống kê, dân số đã giảm.'}]},
      {ko:'증가하다', rom:'jeunggahada', vi:'tăng lên', pos:'động từ', hanja:'增加—', hv:'tăng gia', examples:[{ko:'실업률이 증가했어요.', vi:'Tỉ lệ thất nghiệp đã tăng.'}]},
      {ko:'감소하다', rom:'gamsohada', vi:'giảm xuống', pos:'động từ', hanja:'減少—', hv:'giảm thiểu', examples:[{ko:'출산율이 계속 감소해요.', vi:'Tỉ lệ sinh liên tục giảm.'}]},
      {ko:'심각하다', rom:'simgakhada', vi:'nghiêm trọng', pos:'tính từ', hanja:'深刻—', hv:'thâm khắc', examples:[{ko:'환경 오염이 심각해요.', vi:'Ô nhiễm môi trường rất nghiêm trọng.'}]},
      {ko:'해결하다', rom:'haegyeolhada', vi:'giải quyết', pos:'động từ', hanja:'解決—', hv:'giải quyết', examples:[{ko:'모두 함께 해결합시다.', vi:'Cùng nhau giải quyết nào.'}]},
      {ko:'영향', rom:'yeonghyang', vi:'ảnh hưởng', pos:'danh từ', hanja:'影響', hv:'ảnh hưởng', examples:[{ko:'날씨가 농사에 영향을 줘요.', vi:'Thời tiết ảnh hưởng đến mùa màng.'}]},
      {ko:'대책', rom:'daechaek', vi:'biện pháp đối phó', pos:'danh từ', hanja:'對策', hv:'đối sách', examples:[{ko:'정부가 대책을 마련했어요.', vi:'Chính phủ đã đưa ra biện pháp.'}]},
      {ko:'현상', rom:'hyeonsang', vi:'hiện tượng', pos:'danh từ', hanja:'現象', hv:'hiện tượng', examples:[{ko:'고령화 현상이 뚜렷해요.', vi:'Hiện tượng già hoá dân số rõ rệt.'}]},
      {ko:'논란', rom:'nollan', vi:'sự tranh cãi', pos:'danh từ', hanja:'論難', hv:'luận nan', examples:[{ko:'그 발언이 논란이 됐어요.', vi:'Phát ngôn đó gây tranh cãi.'}]}
    ],
    dialogue:[
      {sp:'민수', ko:'오늘 뉴스 봤어요? 물가가 또 올랐대요.', vi:'Xem tin hôm nay chưa? Nghe nói vật giá lại tăng.'},
      {sp:'꾸언', ko:'통계에 따르면 작년보다 많이 올랐다고 해요.', vi:'Theo thống kê thì tăng nhiều so với năm ngoái.'},
      {sp:'민수', ko:'월급은 그대로인데 지출만 늘어난 셈이에요.', vi:'Lương thì giữ nguyên mà chi tiêu chỉ có tăng.'},
      {sp:'꾸언', ko:'허리띠를 졸라맬 수밖에 없네요.', vi:'Đành phải thắt lưng buộc bụng thôi.'},
      {sp:'민수', ko:'정부가 빨리 대책을 세워야 할 텐데요.', vi:'Chính phủ phải sớm có biện pháp mới được.'}
    ]
  },
  {
    no:3, level:'trung-cap-2', ko:'광고와 소비', vi:'Quảng cáo và tiêu dùng', rom:'gwanggo-wa sobi',
    skill:'Nói về thói quen tiêu dùng, phân tích quảng cáo', pron:'Nhấn từ khoá trong khẩu hiệu',
    culture:'Văn hoá mua sắm trực tuyến và "9,900원" ở Hàn',
    grammar:[
      { form:'A/V + (으)ㄹ 정도로', vi:'đến mức', note:'Diễn tả mức độ cao.',
        ex:{ko:'믿을 수 없을 정도로 쌌어요.', vi:'Rẻ đến mức không thể tin nổi.'} },
      { form:'V + 게 만들다', vi:'khiến cho, làm cho', note:'Gây ra hành động/ trạng thái ở đối tượng.',
        ex:{ko:'광고가 물건을 사게 만들어요.', vi:'Quảng cáo khiến người ta mua hàng.'} },
      { form:'N + 에 비해(서)', vi:'so với', note:'So sánh đối chiếu.',
        ex:{ko:'가격에 비해 품질이 좋아요.', vi:'So với giá thì chất lượng tốt.'} },
      { form:'A/V + 기 마련이다', vi:'tất nhiên sẽ, đương nhiên', note:'Quy luật hiển nhiên.',
        ex:{ko:'싼 물건은 금방 고장 나기 마련이에요.', vi:'Đồ rẻ thì đương nhiên mau hỏng.'} }
    ],
    vocab:[
      {ko:'광고', rom:'gwanggo', vi:'quảng cáo', pos:'danh từ', hanja:'廣告', hv:'quảng cáo', examples:[{ko:'그 광고가 정말 인상적이에요.', vi:'Quảng cáo đó thật ấn tượng.'}]},
      {ko:'소비', rom:'sobi', vi:'sự tiêu dùng', pos:'danh từ', hanja:'消費', hv:'tiêu phí', examples:[{ko:'과소비를 줄여야 해요.', vi:'Phải giảm chi tiêu quá mức.'}]},
      {ko:'소비자', rom:'sobija', vi:'người tiêu dùng', pos:'danh từ', hanja:'消費者', hv:'tiêu phí giả', examples:[{ko:'소비자의 권리를 지켜야 해요.', vi:'Phải bảo vệ quyền của người tiêu dùng.'}]},
      {ko:'광고하다', rom:'gwanggohada', vi:'quảng cáo (đt)', pos:'động từ', examples:[{ko:'신제품을 텔레비전에 광고해요.', vi:'Họ quảng cáo sản phẩm mới trên TV.'}]},
      {ko:'홍보', rom:'hongbo', vi:'sự quảng bá', pos:'danh từ', hanja:'弘報', hv:'hoằng báo', examples:[{ko:'회사가 홍보에 힘써요.', vi:'Công ty đẩy mạnh quảng bá.'}]},
      {ko:'유혹', rom:'yuhok', vi:'sự cám dỗ', pos:'danh từ', hanja:'誘惑', hv:'dụ hoặc', examples:[{ko:'세일의 유혹을 참기 힘들어요.', vi:'Khó cưỡng lại cám dỗ giảm giá.'}]},
      {ko:'충동구매', rom:'chungdonggumae', vi:'mua sắm bốc đồng', pos:'danh từ', hanja:'衝動購買', hv:'xung động cấu mãi', examples:[{ko:'충동구매를 자주 후회해요.', vi:'Tôi hay hối hận vì mua bốc đồng.'}]},
      {ko:'품질', rom:'pumjil', vi:'chất lượng', pos:'danh từ', hanja:'品質', hv:'phẩm chất', examples:[{ko:'가격보다 품질이 더 중요해요.', vi:'Chất lượng quan trọng hơn giá.'}]},
      {ko:'가격', rom:'gagyeok', vi:'giá cả', pos:'danh từ', hanja:'價格', hv:'giá cách', examples:[{ko:'가격이 부담스러워요.', vi:'Giá hơi nặng túi.'}]},
      {ko:'할인하다', rom:'harinhada', vi:'giảm giá', pos:'động từ', hanja:'割引—', hv:'cát dẫn', examples:[{ko:'오늘만 반값으로 할인해요.', vi:'Chỉ hôm nay giảm còn nửa giá.'}]},
      {ko:'절약하다', rom:'jeoryakhada', vi:'tiết kiệm', pos:'động từ', hanja:'節約—', hv:'tiết ước', examples:[{ko:'생활비를 절약하고 있어요.', vi:'Tôi đang tiết kiệm chi phí sinh hoạt.'}]},
      {ko:'낭비하다', rom:'nangbihada', vi:'lãng phí', pos:'động từ', hanja:'浪費—', hv:'lãng phí', examples:[{ko:'돈을 낭비하지 마세요.', vi:'Đừng lãng phí tiền.'}]},
      {ko:'후기', rom:'hugi', vi:'đánh giá, review', pos:'danh từ', hanja:'後記', hv:'hậu ký', examples:[{ko:'구매 후기를 꼭 읽어요.', vi:'Tôi luôn đọc review trước khi mua.'}]},
      {ko:'가성비', rom:'gaseongbi', vi:'giá trên hiệu năng', pos:'danh từ', examples:[{ko:'이 제품은 가성비가 좋아요.', vi:'Sản phẩm này đáng đồng tiền.'}]},
      {ko:'유행하다', rom:'yuhaenghada', vi:'thịnh hành', pos:'động từ', hanja:'流行—', hv:'lưu hành', examples:[{ko:'요즘 이 스타일이 유행해요.', vi:'Dạo này kiểu này đang thịnh hành.'}]},
      {ko:'속다', rom:'sokda', vi:'bị lừa', pos:'động từ', examples:[{ko:'과장 광고에 속았어요.', vi:'Tôi bị lừa bởi quảng cáo thổi phồng.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'또 택배가 왔네요? 이번 주에 벌써 세 번째예요.', vi:'Lại có hàng à? Tuần này là lần thứ ba rồi đấy.'},
      {sp:'꾸언', ko:'광고를 보면 사고 싶어지게 만들더라고요.', vi:'Cứ xem quảng cáo là lại thấy muốn mua.'},
      {sp:'수진', ko:'충동구매는 후회하기 마련이에요.', vi:'Mua bốc đồng thì kiểu gì cũng hối hận.'},
      {sp:'꾸언', ko:'맞아요. 가격에 비해 품질이 별로였어요.', vi:'Đúng vậy. So với giá thì chất lượng cũng thường.'},
      {sp:'수진', ko:'다음부터는 후기를 꼭 읽고 사세요.', vi:'Lần sau nhớ đọc review rồi hãy mua.'}
    ]
  },
  {
    no:4, level:'trung-cap-2', ko:'성공과 실패', vi:'Thành công và thất bại', rom:'seonggong-gwa silpae',
    skill:'Kể về trải nghiệm thành công/ thất bại, động viên người khác', pron:'Ngữ điệu khích lệ',
    culture:'Câu chuyện khởi nghiệp và tinh thần "빨리빨리"',
    grammar:[
      { form:'V + 고 말다', vi:'rốt cuộc đã (ngoài ý muốn)', note:'Kết cục đáng tiếc hoặc dứt khoát.',
        ex:{ko:'결국 포기하고 말았어요.', vi:'Rốt cuộc tôi đã bỏ cuộc.'} },
      { form:'A/V + 았/었더라면', vi:'giá như đã ... thì', note:'Giả định trái với quá khứ, tiếc nuối.',
        ex:{ko:'조금만 더 노력했더라면 됐을 거예요.', vi:'Giá cố thêm chút nữa thì đã được rồi.'} },
      { form:'V + (으)ㄹ 뻔하다', vi:'suýt nữa thì', note:'Việc gần xảy ra nhưng đã tránh được.',
        ex:{ko:'포기할 뻔했지만 참았어요.', vi:'Suýt bỏ cuộc nhưng tôi đã cố.'} },
      { form:'A/V + 더라도', vi:'dù cho, cho dù', note:'Nhượng bộ mạnh, giả định.',
        ex:{ko:'실패하더라도 다시 도전할 거예요.', vi:'Dù thất bại tôi vẫn sẽ thử lại.'} }
    ],
    vocab:[
      {ko:'성공', rom:'seonggong', vi:'thành công', pos:'danh từ', hanja:'成功', hv:'thành công', examples:[{ko:'성공에는 노력이 필요해요.', vi:'Thành công cần sự nỗ lực.'}]},
      {ko:'실패', rom:'silpae', vi:'thất bại', pos:'danh từ', hanja:'失敗', hv:'thất bại', examples:[{ko:'실패는 성공의 어머니예요.', vi:'Thất bại là mẹ thành công.'}]},
      {ko:'도전', rom:'dojeon', vi:'sự thử thách', pos:'danh từ', hanja:'挑戰', hv:'khiêu chiến', examples:[{ko:'새로운 도전을 시작했어요.', vi:'Tôi bắt đầu một thử thách mới.'}]},
      {ko:'노력', rom:'noryeok', vi:'nỗ lực', pos:'danh từ', hanja:'努力', hv:'nỗ lực', examples:[{ko:'노력은 배신하지 않아요.', vi:'Nỗ lực không phản bội ai cả.'}]},
      {ko:'포기하다', rom:'pogihada', vi:'từ bỏ', pos:'động từ', hanja:'抛棄—', hv:'phao khí', examples:[{ko:'끝까지 포기하지 마세요.', vi:'Đừng bỏ cuộc đến cùng.'}]},
      {ko:'이루다', rom:'iruda', vi:'đạt được, thực hiện', pos:'động từ', examples:[{ko:'드디어 꿈을 이루었어요.', vi:'Cuối cùng tôi đã thực hiện được ước mơ.'}]},
      {ko:'견디다', rom:'gyeondida', vi:'chịu đựng, trụ vững', pos:'động từ', examples:[{ko:'힘든 시기를 잘 견뎠어요.', vi:'Tôi đã trụ vững qua giai đoạn khó.'}]},
      {ko:'극복하다', rom:'geukbokhada', vi:'khắc phục, vượt qua', pos:'động từ', hanja:'克服—', hv:'khắc phục', examples:[{ko:'어려움을 극복했어요.', vi:'Tôi đã vượt qua khó khăn.'}]},
      {ko:'좌절하다', rom:'jwajeolhada', vi:'nản lòng, gục ngã', pos:'động từ', hanja:'挫折—', hv:'toả chiết', examples:[{ko:'한 번 실패했다고 좌절하지 마요.', vi:'Đừng nản chỉ vì một lần thất bại.'}]},
      {ko:'격려하다', rom:'gyeongnyeohada', vi:'động viên', pos:'động từ', hanja:'激勵—', hv:'kích lệ', examples:[{ko:'친구가 저를 격려해 줬어요.', vi:'Bạn tôi đã động viên tôi.'}]},
      {ko:'자신감', rom:'jasingam', vi:'sự tự tin', pos:'danh từ', hanja:'自信感', hv:'tự tín cảm', examples:[{ko:'자신감을 잃지 마세요.', vi:'Đừng đánh mất sự tự tin.'}]},
      {ko:'끈기', rom:'kkeungi', vi:'sự kiên trì', pos:'danh từ', examples:[{ko:'끈기가 있으면 이길 수 있어요.', vi:'Có kiên trì thì sẽ thắng.'}]},
      {ko:'결과', rom:'gyeolgwa', vi:'kết quả', pos:'danh từ', hanja:'結果', hv:'kết quả', examples:[{ko:'과정이 결과보다 중요해요.', vi:'Quá trình quan trọng hơn kết quả.'}]},
      {ko:'기회', rom:'gihoe', vi:'cơ hội', pos:'danh từ', hanja:'機會', hv:'cơ hội', examples:[{ko:'이건 좋은 기회예요.', vi:'Đây là một cơ hội tốt.'}]},
      {ko:'뿌듯하다', rom:'ppudeutada', vi:'mãn nguyện, tự hào', pos:'tính từ', examples:[{ko:'해내고 나니 뿌듯해요.', vi:'Làm được rồi thấy thật mãn nguyện.'}]},
      {ko:'아쉽다', rom:'aswipda', vi:'tiếc, nuối tiếc', pos:'tính từ', examples:[{ko:'조금 아쉽지만 괜찮아요.', vi:'Hơi tiếc nhưng không sao.'}]}
    ],
    dialogue:[
      {sp:'민수', ko:'창업 준비는 잘돼 가요?', vi:'Việc chuẩn bị khởi nghiệp ổn chứ?'},
      {sp:'꾸언', ko:'사실 첫 사업은 실패하고 말았어요.', vi:'Thật ra dự án đầu tiên đã thất bại.'},
      {sp:'민수', ko:'많이 힘들었겠어요. 그래도 좌절하지 마세요.', vi:'Chắc vất vả lắm. Nhưng đừng nản nhé.'},
      {sp:'꾸언', ko:'네, 실패하더라도 다시 도전하려고요.', vi:'Vâng, dù thất bại tôi vẫn sẽ thử lại.'},
      {sp:'민수', ko:'그 끈기라면 꼭 성공할 거예요.', vi:'Với sự kiên trì đó nhất định cậu sẽ thành công.'}
    ]
  },
  {
    no:5, level:'trung-cap-2', ko:'과학과 기술', vi:'Khoa học và công nghệ', rom:'gwahak-gwa gisul',
    skill:'Nói về công nghệ mới, ưu nhược điểm của máy móc', pron:'Đọc thuật ngữ khoa học',
    culture:'Hàn Quốc và văn hoá công nghệ, 5G, robot',
    grammar:[
      { form:'V + (으)ㄴ/는 데다가', vi:'thêm vào đó, vừa ... vừa', note:'Chồng thêm một tính chất/ việc nữa.',
        ex:{ko:'편리한 데다가 값도 싸요.', vi:'Vừa tiện lại vừa rẻ.'} },
      { form:'V + (으)ㅁ에 따라', vi:'theo (đà, mức độ)', note:'Cùng biến đổi theo.',
        ex:{ko:'기술이 발전함에 따라 생활이 편해졌어요.', vi:'Khi công nghệ phát triển, cuộc sống tiện hơn.'} },
      { form:'A/V + (으)ㄹ지도 모르다', vi:'có thể, biết đâu', note:'Suy đoán khả năng không chắc.',
        ex:{ko:'미래에는 로봇이 대신할지도 몰라요.', vi:'Biết đâu tương lai robot sẽ làm thay.'} },
      { form:'V + 는 데(에)', vi:'trong việc, để', note:'Chỉ mục đích/ phạm vi của việc.',
        ex:{ko:'이 앱은 공부하는 데 도움이 돼요.', vi:'App này có ích cho việc học.'} }
    ],
    vocab:[
      {ko:'과학', rom:'gwahak', vi:'khoa học', pos:'danh từ', hanja:'科學', hv:'khoa học', examples:[{ko:'과학은 세상을 바꿔요.', vi:'Khoa học thay đổi thế giới.'}]},
      {ko:'기술', rom:'gisul', vi:'kỹ thuật, công nghệ', pos:'danh từ', hanja:'技術', hv:'kỹ thuật', examples:[{ko:'새 기술을 배우고 있어요.', vi:'Tôi đang học công nghệ mới.'}]},
      {ko:'발전하다', rom:'baljeonhada', vi:'phát triển', pos:'động từ', hanja:'發展—', hv:'phát triển', examples:[{ko:'인공지능이 빠르게 발전해요.', vi:'Trí tuệ nhân tạo phát triển nhanh.'}]},
      {ko:'개발하다', rom:'gaebalhada', vi:'phát triển, chế tạo', pos:'động từ', hanja:'開發—', hv:'khai phát', examples:[{ko:'새로운 백신을 개발했어요.', vi:'Họ đã phát triển vắc-xin mới.'}]},
      {ko:'인공지능', rom:'ingongjineung', vi:'trí tuệ nhân tạo', pos:'danh từ', hanja:'人工知能', hv:'nhân công trí năng', examples:[{ko:'인공지능이 번역을 도와줘요.', vi:'AI hỗ trợ việc dịch.'}]},
      {ko:'기계', rom:'gigye', vi:'máy móc', pos:'danh từ', hanja:'機械', hv:'cơ giới', examples:[{ko:'기계가 사람 일을 대신해요.', vi:'Máy móc làm thay việc con người.'}]},
      {ko:'로봇', rom:'robot', vi:'robot', pos:'danh từ', examples:[{ko:'식당에서 로봇이 음식을 날라요.', vi:'Ở nhà hàng robot bưng đồ ăn.'}]},
      {ko:'편리하다', rom:'pyeollihada', vi:'tiện lợi', pos:'tính từ', hanja:'便利—', hv:'tiện lợi', examples:[{ko:'스마트폰은 정말 편리해요.', vi:'Điện thoại thông minh thật tiện.'}]},
      {ko:'기능', rom:'gineung', vi:'chức năng', pos:'danh từ', hanja:'機能', hv:'cơ năng', examples:[{ko:'이 기능은 처음 써 봐요.', vi:'Chức năng này tôi mới dùng lần đầu.'}]},
      {ko:'정보', rom:'jeongbo', vi:'thông tin', pos:'danh từ', hanja:'情報', hv:'tình báo', examples:[{ko:'정보를 검색해 봤어요.', vi:'Tôi đã tìm kiếm thông tin.'}]},
      {ko:'자료', rom:'jaryo', vi:'tài liệu, dữ liệu', pos:'danh từ', hanja:'資料', hv:'tư liệu', examples:[{ko:'자료를 정리하고 있어요.', vi:'Tôi đang sắp xếp tài liệu.'}]},
      {ko:'저장하다', rom:'jeojanghada', vi:'lưu trữ', pos:'động từ', hanja:'貯藏—', hv:'trữ tàng', examples:[{ko:'파일을 클라우드에 저장했어요.', vi:'Tôi lưu file lên đám mây.'}]},
      {ko:'연결하다', rom:'yeongyeolhada', vi:'kết nối', pos:'động từ', hanja:'連結—', hv:'liên kết', examples:[{ko:'인터넷에 연결해 주세요.', vi:'Hãy kết nối internet giúp tôi.'}]},
      {ko:'대신하다', rom:'daesinhada', vi:'thay thế', pos:'động từ', hanja:'代身—', hv:'đại thân', examples:[{ko:'기계가 사람을 대신할 수 있어요.', vi:'Máy móc có thể thay con người.'}]},
      {ko:'부작용', rom:'bujagyong', vi:'tác dụng phụ, hệ luỵ', pos:'danh từ', hanja:'副作用', hv:'phó tác dụng', examples:[{ko:'기술에도 부작용이 있어요.', vi:'Công nghệ cũng có mặt trái.'}]},
      {ko:'첨단', rom:'cheomdan', vi:'tối tân, tiên tiến', pos:'danh từ', hanja:'尖端', hv:'tiêm đoan', examples:[{ko:'첨단 기술이 적용됐어요.', vi:'Công nghệ tối tân đã được áp dụng.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'요즘 번역 앱이 정말 좋아졌더라고요.', vi:'Dạo này app dịch tốt lên hẳn.'},
      {sp:'꾸언', ko:'인공지능이 발전함에 따라 더 정확해졌어요.', vi:'AI phát triển nên ngày càng chính xác.'},
      {sp:'수진', ko:'편리한 데다가 무료라서 자주 써요.', vi:'Vừa tiện lại miễn phí nên tôi hay dùng.'},
      {sp:'꾸언', ko:'그래도 부작용으로 실력이 안 늘지도 몰라요.', vi:'Nhưng biết đâu mặt trái là trình không lên.'},
      {sp:'수진', ko:'맞아요. 공부하는 데는 스스로 하는 게 최고예요.', vi:'Đúng. Để học thì tự làm vẫn là nhất.'}
    ]
  },
  {
    no:6, level:'trung-cap-2', ko:'환경 보호', vi:'Bảo vệ môi trường', rom:'hwangyeong boho',
    skill:'Bàn về ô nhiễm, đề xuất cách bảo vệ môi trường', pron:'Nhấn mạnh lời kêu gọi',
    culture:'Phân loại rác và văn hoá 제로웨이스트 ở Hàn',
    grammar:[
      { form:'V + 도록 하다', vi:'hãy (làm cho được), quy định', note:'Đưa ra chỉ dẫn/ quyết tâm nhẹ.',
        ex:{ko:'물을 아껴 쓰도록 합시다.', vi:'Hãy tiết kiệm nước nào.'} },
      { form:'A/V + (으)ㄴ/는 한', vi:'chừng nào còn, miễn là', note:'Điều kiện duy trì.',
        ex:{ko:'노력하는 한 희망이 있어요.', vi:'Chừng nào còn cố gắng thì còn hy vọng.'} },
      { form:'V + 지 않으면 안 되다', vi:'nhất định phải, không thể không', note:'Nhấn mạnh tính bắt buộc.',
        ex:{ko:'지금 행동하지 않으면 안 돼요.', vi:'Không thể không hành động ngay bây giờ.'} },
      { form:'N + (으)로 인해', vi:'do, bởi vì', note:'Nêu nguyên nhân (văn viết).',
        ex:{ko:'환경오염으로 인해 병이 늘었어요.', vi:'Do ô nhiễm mà bệnh tật tăng lên.'} }
    ],
    vocab:[
      {ko:'환경', rom:'hwangyeong', vi:'môi trường', pos:'danh từ', hanja:'環境', hv:'hoàn cảnh', examples:[{ko:'환경을 지키는 건 우리 몫이에요.', vi:'Giữ gìn môi trường là trách nhiệm của ta.'}]},
      {ko:'오염', rom:'oyeom', vi:'sự ô nhiễm', pos:'danh từ', hanja:'汚染', hv:'ô nhiễm', examples:[{ko:'대기 오염이 심해요.', vi:'Ô nhiễm không khí nghiêm trọng.'}]},
      {ko:'보호하다', rom:'bohohada', vi:'bảo vệ', pos:'động từ', hanja:'保護—', hv:'bảo hộ', examples:[{ko:'자연을 보호해야 해요.', vi:'Phải bảo vệ thiên nhiên.'}]},
      {ko:'쓰레기', rom:'sseuregi', vi:'rác', pos:'danh từ', examples:[{ko:'쓰레기를 함부로 버리지 마세요.', vi:'Đừng vứt rác bừa bãi.'}]},
      {ko:'분리수거', rom:'bullisugeo', vi:'phân loại rác', pos:'danh từ', hanja:'分離收去', hv:'phân ly thu khứ', examples:[{ko:'분리수거를 철저히 해요.', vi:'Tôi phân loại rác kỹ càng.'}]},
      {ko:'재활용', rom:'jaehwaryong', vi:'tái chế', pos:'danh từ', hanja:'再活用', hv:'tái hoạt dụng', examples:[{ko:'플라스틱을 재활용해요.', vi:'Tôi tái chế nhựa.'}]},
      {ko:'절약', rom:'jeoryak', vi:'sự tiết kiệm', pos:'danh từ', hanja:'節約', hv:'tiết ước', examples:[{ko:'에너지 절약이 필요해요.', vi:'Cần tiết kiệm năng lượng.'}]},
      {ko:'낭비', rom:'nangbi', vi:'sự lãng phí', pos:'danh từ', hanja:'浪費', hv:'lãng phí', examples:[{ko:'자원 낭비를 줄여요.', vi:'Giảm lãng phí tài nguyên.'}]},
      {ko:'지구', rom:'jigu', vi:'trái đất', pos:'danh từ', hanja:'地球', hv:'địa cầu', examples:[{ko:'지구가 점점 더워져요.', vi:'Trái đất đang nóng dần lên.'}]},
      {ko:'기후', rom:'gihu', vi:'khí hậu', pos:'danh từ', hanja:'氣候', hv:'khí hậu', examples:[{ko:'기후 변화가 큰 문제예요.', vi:'Biến đổi khí hậu là vấn đề lớn.'}]},
      {ko:'미세먼지', rom:'misemeonji', vi:'bụi mịn', pos:'danh từ', examples:[{ko:'미세먼지 때문에 마스크를 써요.', vi:'Vì bụi mịn nên tôi đeo khẩu trang.'}]},
      {ko:'자원', rom:'jawon', vi:'tài nguyên', pos:'danh từ', hanja:'資源', hv:'tư nguyên', examples:[{ko:'자원은 한정되어 있어요.', vi:'Tài nguyên là hữu hạn.'}]},
      {ko:'배출하다', rom:'baechulhada', vi:'thải ra', pos:'động từ', hanja:'排出—', hv:'bài xuất', examples:[{ko:'공장이 매연을 배출해요.', vi:'Nhà máy thải khói.'}]},
      {ko:'심각하다', rom:'simgakhada', vi:'nghiêm trọng', pos:'tính từ', hanja:'深刻—', hv:'thâm khắc', examples:[{ko:'상황이 심각해요.', vi:'Tình hình nghiêm trọng.'}]},
      {ko:'실천하다', rom:'silcheonhada', vi:'thực hiện, thực hành', pos:'động từ', hanja:'實踐—', hv:'thực tiễn', examples:[{ko:'작은 것부터 실천해요.', vi:'Hãy thực hành từ việc nhỏ.'}]},
      {ko:'친환경', rom:'chinhwangyeong', vi:'thân thiện môi trường', pos:'danh từ', hanja:'親環境', hv:'thân hoàn cảnh', examples:[{ko:'친환경 제품을 골라요.', vi:'Tôi chọn sản phẩm thân thiện môi trường.'}]}
    ],
    dialogue:[
      {sp:'민수', ko:'요즘 미세먼지 때문에 밖에 나가기 무서워요.', vi:'Dạo này bụi mịn khiến tôi ngại ra ngoài.'},
      {sp:'꾸언', ko:'환경오염으로 인해 이런 문제가 생긴 거예요.', vi:'Chính ô nhiễm gây ra những vấn đề này.'},
      {sp:'민수', ko:'우리라도 분리수거를 잘하도록 해요.', vi:'Ít ra thì mình cứ phân loại rác cho tốt.'},
      {sp:'꾸언', ko:'맞아요. 지금 실천하지 않으면 안 돼요.', vi:'Đúng. Không thể không thực hành ngay bây giờ.'},
      {sp:'민수', ko:'모두가 노력하는 한 지구는 나아질 거예요.', vi:'Chừng nào mọi người còn cố thì trái đất sẽ tốt hơn.'}
    ]
  },
  {
    no:7, level:'trung-cap-2', ko:'예술과 공연', vi:'Nghệ thuật và biểu diễn', rom:'yesul-gwa gongyeon',
    skill:'Cảm nhận, đánh giá tác phẩm nghệ thuật, buổi biểu diễn', pron:'Ngữ điệu cảm thán',
    culture:'Văn hoá xem kịch, hoà nhạc và 뮤지컬 ở Hàn',
    grammar:[
      { form:'A/V + (으)ㄴ/는 만큼', vi:'chừng nào, tương xứng với việc', note:'Mức độ/ lý do tương ứng.',
        ex:{ko:'표가 비싼 만큼 공연이 훌륭했어요.', vi:'Vé đắt tương xứng với buổi diễn tuyệt vời.'} },
      { form:'V + 다 보니(까)', vi:'làm mãi rồi thì, cứ làm thì', note:'Kết quả nhận ra sau quá trình.',
        ex:{ko:'자주 보다 보니 클래식이 좋아졌어요.', vi:'Xem nhiều rồi tôi thấy thích nhạc cổ điển.'} },
      { form:'A + 아/어하다', vi:'(biểu lộ cảm xúc ra ngoài)', note:'Chuyển tính từ cảm xúc sang ngôi thứ ba.',
        ex:{ko:'관객들이 무척 즐거워했어요.', vi:'Khán giả tỏ ra rất vui thích.'} },
      { form:'V + (으)ㄹ 만하다', vi:'đáng để, có giá trị', note:'Đáng làm/ đáng trải nghiệm.',
        ex:{ko:'이 전시회는 볼 만해요.', vi:'Triển lãm này đáng để xem.'} }
    ],
    vocab:[
      {ko:'예술', rom:'yesul', vi:'nghệ thuật', pos:'danh từ', hanja:'藝術', hv:'nghệ thuật', examples:[{ko:'예술은 삶을 풍요롭게 해요.', vi:'Nghệ thuật làm cuộc sống phong phú.'}]},
      {ko:'공연', rom:'gongyeon', vi:'buổi biểu diễn', pos:'danh từ', hanja:'公演', hv:'công diễn', examples:[{ko:'오늘 공연이 매진됐어요.', vi:'Buổi diễn hôm nay đã cháy vé.'}]},
      {ko:'관객', rom:'gwangaek', vi:'khán giả', pos:'danh từ', hanja:'觀客', hv:'quan khách', examples:[{ko:'관객이 열광했어요.', vi:'Khán giả cuồng nhiệt.'}]},
      {ko:'작품', rom:'jakpum', vi:'tác phẩm', pos:'danh từ', hanja:'作品', hv:'tác phẩm', examples:[{ko:'이 작품이 제일 인상적이에요.', vi:'Tác phẩm này ấn tượng nhất.'}]},
      {ko:'전시회', rom:'jeonsihoe', vi:'triển lãm', pos:'danh từ', hanja:'展示會', hv:'triển thị hội', examples:[{ko:'미술 전시회에 다녀왔어요.', vi:'Tôi vừa đi xem triển lãm mỹ thuật.'}]},
      {ko:'감상하다', rom:'gamsanghada', vi:'thưởng thức, cảm thụ', pos:'động từ', hanja:'鑑賞—', hv:'giám thưởng', examples:[{ko:'음악을 감상했어요.', vi:'Tôi đã thưởng thức âm nhạc.'}]},
      {ko:'연주하다', rom:'yeonjuhada', vi:'chơi (nhạc cụ)', pos:'động từ', hanja:'演奏—', hv:'diễn tấu', examples:[{ko:'피아노를 아름답게 연주해요.', vi:'Cô ấy chơi piano rất hay.'}]},
      {ko:'무대', rom:'mudae', vi:'sân khấu', pos:'danh từ', hanja:'舞臺', hv:'vũ đài', examples:[{ko:'무대가 화려했어요.', vi:'Sân khấu lộng lẫy.'}]},
      {ko:'배우', rom:'baeu', vi:'diễn viên', pos:'danh từ', hanja:'俳優', hv:'bài ưu', examples:[{ko:'그 배우의 연기가 뛰어났어요.', vi:'Diễn xuất của diễn viên đó xuất sắc.'}]},
      {ko:'연기', rom:'yeongi', vi:'diễn xuất', pos:'danh từ', hanja:'演技', hv:'diễn kỹ', examples:[{ko:'연기가 정말 자연스러웠어요.', vi:'Diễn xuất rất tự nhiên.'}]},
      {ko:'감동', rom:'gamdong', vi:'sự cảm động', pos:'danh từ', hanja:'感動', hv:'cảm động', examples:[{ko:'큰 감동을 받았어요.', vi:'Tôi rất cảm động.'}]},
      {ko:'인상적', rom:'insangjeok', vi:'ấn tượng', pos:'danh từ', hanja:'印象的', hv:'ấn tượng đích', examples:[{ko:'마지막 장면이 인상적이었어요.', vi:'Cảnh cuối thật ấn tượng.'}]},
      {ko:'예매하다', rom:'yemaehada', vi:'đặt vé trước', pos:'động từ', hanja:'豫買—', hv:'dự mãi', examples:[{ko:'표를 미리 예매했어요.', vi:'Tôi đã đặt vé trước.'}]},
      {ko:'매진되다', rom:'maejindoeda', vi:'bán hết vé', pos:'động từ', hanja:'賣盡—', hv:'mại tận', examples:[{ko:'인기 공연은 금방 매진돼요.', vi:'Buổi diễn hot mau hết vé.'}]},
      {ko:'뛰어나다', rom:'ttwieonada', vi:'xuất sắc, vượt trội', pos:'tính từ', examples:[{ko:'실력이 뛰어나요.', vi:'Thực lực xuất sắc.'}]},
      {ko:'화려하다', rom:'hwaryeohada', vi:'lộng lẫy, hoa lệ', pos:'tính từ', hanja:'華麗—', hv:'hoa lệ', examples:[{ko:'의상이 화려해요.', vi:'Trang phục lộng lẫy.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'어제 뮤지컬 어땠어요?', vi:'Buổi nhạc kịch hôm qua thế nào?'},
      {sp:'꾸언', ko:'표가 비싼 만큼 정말 볼 만했어요.', vi:'Vé đắt nhưng thật sự đáng xem.'},
      {sp:'수진', ko:'배우들 연기가 좋았어요?', vi:'Diễn xuất của các diễn viên tốt chứ?'},
      {sp:'꾸언', ko:'네, 관객들이 다 감동해서 눈물을 흘렸어요.', vi:'Vâng, khán giả đều xúc động rơi nước mắt.'},
      {sp:'수진', ko:'저도 자주 보다 보니 뮤지컬을 좋아하게 됐어요.', vi:'Tôi cũng xem nhiều rồi đâm ra thích nhạc kịch.'}
    ]
  },
  {
    no:8, level:'trung-cap-2', ko:'직업과 진로', vi:'Nghề nghiệp và định hướng', rom:'jigeop-gwa jinro',
    skill:'Nói về nghề nghiệp mơ ước, phỏng vấn xin việc', pron:'Ngữ điệu trang trọng khi phỏng vấn',
    culture:'Văn hoá tìm việc (취업) và 스펙 ở Hàn',
    grammar:[
      { form:'V + 기 위해(서)', vi:'để mà, nhằm', note:'Mục đích rõ ràng.',
        ex:{ko:'취직하기 위해 자격증을 땄어요.', vi:'Để xin việc tôi đã lấy chứng chỉ.'} },
      { form:'N + 든지 N + 든지', vi:'... hay ... đều', note:'Liệt kê lựa chọn không phân biệt.',
        ex:{ko:'대기업이든지 중소기업이든지 상관없어요.', vi:'Công ty lớn hay nhỏ đều không sao.'} },
      { form:'A/V + (으)ㄴ/는 편이다', vi:'thuộc kiểu, thiên về', note:'Nhận định nghiêng về một tính chất.',
        ex:{ko:'저는 꼼꼼한 편이에요.', vi:'Tôi thuộc kiểu tỉ mỉ.'} },
      { form:'V + 게 되다', vi:'trở nên, được (do hoàn cảnh)', note:'Kết quả do hoàn cảnh dẫn tới.',
        ex:{ko:'결국 그 회사에 들어가게 됐어요.', vi:'Rốt cuộc tôi vào được công ty đó.'} }
    ],
    vocab:[
      {ko:'직업', rom:'jigeop', vi:'nghề nghiệp', pos:'danh từ', hanja:'職業', hv:'chức nghiệp', examples:[{ko:'어떤 직업을 갖고 싶어요?', vi:'Bạn muốn làm nghề gì?'}]},
      {ko:'진로', rom:'jinro', vi:'định hướng, con đường sự nghiệp', pos:'danh từ', hanja:'進路', hv:'tiến lộ', examples:[{ko:'진로 때문에 고민이에요.', vi:'Tôi trăn trở về định hướng.'}]},
      {ko:'취업', rom:'chwieop', vi:'sự xin việc', pos:'danh từ', hanja:'就業', hv:'tựu nghiệp', examples:[{ko:'취업 준비를 하고 있어요.', vi:'Tôi đang chuẩn bị xin việc.'}]},
      {ko:'면접', rom:'myeonjeop', vi:'phỏng vấn', pos:'danh từ', hanja:'面接', hv:'diện tiếp', examples:[{ko:'내일 면접이 있어요.', vi:'Mai tôi có buổi phỏng vấn.'}]},
      {ko:'이력서', rom:'iryeokseo', vi:'sơ yếu lý lịch', pos:'danh từ', hanja:'履歷書', hv:'lý lịch thư', examples:[{ko:'이력서를 제출했어요.', vi:'Tôi đã nộp sơ yếu lý lịch.'}]},
      {ko:'지원하다', rom:'jiwonhada', vi:'ứng tuyển', pos:'động từ', hanja:'志願—', hv:'chí nguyện', examples:[{ko:'그 회사에 지원했어요.', vi:'Tôi đã ứng tuyển công ty đó.'}]},
      {ko:'합격하다', rom:'hapgyeokhada', vi:'đỗ, trúng tuyển', pos:'động từ', hanja:'合格—', hv:'hợp cách', examples:[{ko:'드디어 합격했어요!', vi:'Cuối cùng tôi đã trúng tuyển!'}]},
      {ko:'경력', rom:'gyeongnyeok', vi:'kinh nghiệm làm việc', pos:'danh từ', hanja:'經歷', hv:'kinh lịch', examples:[{ko:'경력이 삼 년이에요.', vi:'Tôi có ba năm kinh nghiệm.'}]},
      {ko:'능력', rom:'neungnyeok', vi:'năng lực', pos:'danh từ', hanja:'能力', hv:'năng lực', examples:[{ko:'능력을 인정받았어요.', vi:'Năng lực của tôi được công nhận.'}]},
      {ko:'적성', rom:'jeokseong', vi:'sở trường, năng khiếu', pos:'danh từ', hanja:'適性', hv:'thích tính', examples:[{ko:'적성에 맞는 일을 찾아요.', vi:'Tôi tìm việc hợp năng khiếu.'}]},
      {ko:'연봉', rom:'yeonbong', vi:'lương năm', pos:'danh từ', hanja:'年俸', hv:'niên bổng', examples:[{ko:'연봉이 높은 편이에요.', vi:'Lương năm thuộc dạng cao.'}]},
      {ko:'승진하다', rom:'seungjinhada', vi:'thăng chức', pos:'động từ', hanja:'昇進—', hv:'thăng tiến', examples:[{ko:'부장으로 승진했어요.', vi:'Tôi được lên trưởng phòng.'}]},
      {ko:'전문가', rom:'jeonmunga', vi:'chuyên gia', pos:'danh từ', hanja:'專門家', hv:'chuyên môn gia', examples:[{ko:'그 분야 전문가예요.', vi:'Anh ấy là chuyên gia lĩnh vực đó.'}]},
      {ko:'꼼꼼하다', rom:'kkomkkomhada', vi:'tỉ mỉ, cẩn thận', pos:'tính từ', examples:[{ko:'일을 꼼꼼하게 처리해요.', vi:'Tôi xử lý công việc tỉ mỉ.'}]},
      {ko:'책임감', rom:'chaegimgam', vi:'tinh thần trách nhiệm', pos:'danh từ', hanja:'責任感', hv:'trách nhiệm cảm', examples:[{ko:'책임감이 강해요.', vi:'Tôi có tinh thần trách nhiệm cao.'}]},
      {ko:'분야', rom:'bunya', vi:'lĩnh vực', pos:'danh từ', hanja:'分野', hv:'phân dã', examples:[{ko:'IT 분야에서 일해요.', vi:'Tôi làm trong lĩnh vực IT.'}]}
    ],
    dialogue:[
      {sp:'면접관', ko:'왜 우리 회사에 지원하게 됐어요?', vi:'Vì sao bạn ứng tuyển công ty chúng tôi?'},
      {sp:'꾸언', ko:'제 적성에 맞는 일이라고 생각했기 때문입니다.', vi:'Vì tôi nghĩ đây là công việc hợp với mình.'},
      {sp:'면접관', ko:'본인의 장점은 무엇입니까?', vi:'Điểm mạnh của bạn là gì?'},
      {sp:'꾸언', ko:'저는 꼼꼼한 편이고 책임감이 강합니다.', vi:'Tôi thuộc kiểu tỉ mỉ và có trách nhiệm cao.'},
      {sp:'면접관', ko:'좋습니다. 결과는 다음 주에 알려 드리겠습니다.', vi:'Tốt. Kết quả sẽ báo cho bạn tuần sau.'}
    ]
  },
  {
    no:9, level:'trung-cap-2', ko:'대인 관계와 갈등', vi:'Quan hệ và mâu thuẫn', rom:'daein gwangye-wa galdeung',
    skill:'Xử lý mâu thuẫn, khuyên nhủ, hoà giải', pron:'Ngữ điệu ôn hoà khi khuyên',
    culture:'Văn hoá "정" (tình cảm) và cách giữ thể diện',
    grammar:[
      { form:'V + 는 척하다', vi:'giả vờ, làm bộ', note:'Giả vờ như đang làm/ ở trạng thái nào đó.',
        ex:{ko:'못 들은 척했어요.', vi:'Tôi giả vờ như không nghe thấy.'} },
      { form:'A/V + 았/었으면 좋겠다', vi:'mong rằng, giá mà', note:'Bày tỏ mong muốn.',
        ex:{ko:'우리가 화해했으면 좋겠어요.', vi:'Mong là chúng ta làm hoà.'} },
      { form:'V + 는 대신(에)', vi:'thay vì', note:'Thay thế lựa chọn/ bù lại.',
        ex:{ko:'화내는 대신에 대화를 하세요.', vi:'Thay vì nổi giận hãy trò chuyện.'} },
      { form:'A/V + (으)ㄹ 텐데', vi:'chắc là ... mà (tiếc/ lo)', note:'Suy đoán kèm nuối tiếc hoặc lo lắng.',
        ex:{ko:'사과하면 풀릴 텐데요.', vi:'Xin lỗi thì chắc sẽ ổn thôi mà.'} }
    ],
    vocab:[
      {ko:'갈등', rom:'galdeung', vi:'mâu thuẫn, xung đột', pos:'danh từ', hanja:'葛藤', hv:'cát đằng', examples:[{ko:'세대 간 갈등이 있어요.', vi:'Có mâu thuẫn giữa các thế hệ.'}]},
      {ko:'다툼', rom:'datum', vi:'sự cãi vã', pos:'danh từ', examples:[{ko:'사소한 다툼이었어요.', vi:'Chỉ là cãi vã vặt vãnh.'}]},
      {ko:'오해하다', rom:'ohaehada', vi:'hiểu lầm', pos:'động từ', hanja:'誤解—', hv:'ngộ giải', examples:[{ko:'제 말을 오해했어요.', vi:'Bạn đã hiểu lầm lời tôi.'}]},
      {ko:'화해하다', rom:'hwahaehada', vi:'làm hoà', pos:'động từ', hanja:'和解—', hv:'hoà giải', examples:[{ko:'친구와 화해했어요.', vi:'Tôi đã làm hoà với bạn.'}]},
      {ko:'양보하다', rom:'yangbohada', vi:'nhường nhịn', pos:'động từ', hanja:'讓步—', hv:'nhượng bộ', examples:[{ko:'서로 조금씩 양보해요.', vi:'Hãy nhường nhau một chút.'}]},
      {ko:'배려하다', rom:'baeryeohada', vi:'quan tâm, để ý đến', pos:'động từ', hanja:'配慮—', hv:'phối lự', examples:[{ko:'남을 배려하는 마음이 중요해요.', vi:'Tấm lòng quan tâm người khác rất quan trọng.'}]},
      {ko:'솔직하다', rom:'soljikhada', vi:'thẳng thắn', pos:'tính từ', hanja:'率直—', hv:'suất trực', examples:[{ko:'솔직하게 말해 주세요.', vi:'Hãy nói thẳng với tôi.'}]},
      {ko:'참다', rom:'chamda', vi:'nhịn, chịu đựng', pos:'động từ', examples:[{ko:'화를 참기 힘들었어요.', vi:'Tôi khó nhịn được cơn giận.'}]},
      {ko:'풀리다', rom:'pullida', vi:'được giải toả, làm lành', pos:'động từ', examples:[{ko:'오해가 다 풀렸어요.', vi:'Hiểu lầm đã được giải toả hết.'}]},
      {ko:'사과하다', rom:'sagwahada', vi:'xin lỗi', pos:'động từ', hanja:'謝過—', hv:'tạ quá', examples:[{ko:'먼저 사과하는 게 좋겠어요.', vi:'Nên xin lỗi trước thì hơn.'}]},
      {ko:'입장', rom:'ipjang', vi:'lập trường, hoàn cảnh', pos:'danh từ', hanja:'立場', hv:'lập trường', examples:[{ko:'상대방 입장도 생각해요.', vi:'Hãy nghĩ cho cả lập trường đối phương.'}]},
      {ko:'믿음', rom:'mideum', vi:'niềm tin', pos:'danh từ', examples:[{ko:'믿음이 무너졌어요.', vi:'Niềm tin đã sụp đổ.'}]},
      {ko:'섭섭하다', rom:'seopseophada', vi:'chạnh lòng, hụt hẫng', pos:'tính từ', examples:[{ko:'연락이 없어서 섭섭했어요.', vi:'Không liên lạc nên tôi chạnh lòng.'}]},
      {ko:'서운하다', rom:'seounhada', vi:'buồn tủi, phật ý', pos:'tính từ', examples:[{ko:'그 말에 좀 서운했어요.', vi:'Câu nói đó khiến tôi hơi buồn.'}]},
      {ko:'사이가 나쁘다', rom:'saiga nappeuda', vi:'quan hệ xấu', pos:'cụm từ', examples:[{ko:'요즘 둘 사이가 나빠요.', vi:'Dạo này quan hệ hai người xấu đi.'}]},
      {ko:'화가 나다', rom:'hwaga nada', vi:'nổi giận', pos:'cụm từ', examples:[{ko:'그 말에 화가 났어요.', vi:'Câu đó khiến tôi nổi giận.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'민수 씨랑 아직도 말을 안 해요?', vi:'Cậu vẫn chưa nói chuyện với Minsu à?'},
      {sp:'꾸언', ko:'서로 오해가 있어서 좀 어색해요.', vi:'Có chút hiểu lầm nên hơi ngại.'},
      {sp:'수진', ko:'화내는 대신에 솔직하게 이야기해 보세요.', vi:'Thay vì giận, hãy nói chuyện thẳng thắn xem.'},
      {sp:'꾸언', ko:'먼저 사과하면 오해가 풀릴 텐데요.', vi:'Nếu xin lỗi trước chắc hiểu lầm sẽ tan.'},
      {sp:'수진', ko:'맞아요. 두 사람이 화해했으면 좋겠어요.', vi:'Đúng vậy. Mong hai người làm hoà.'}
    ]
  },
  {
    no:10, level:'trung-cap-2', ko:'건강한 생활 습관', vi:'Thói quen sống lành mạnh', rom:'geonganghan saenghwal seupgwan',
    skill:'Khuyên về sức khoẻ, chia sẻ thói quen tốt', pron:'Ngữ điệu khuyên bảo',
    culture:'Văn hoá 등산, 헬스 và ăn uống cân bằng ở Hàn',
    grammar:[
      { form:'V + 곤 하다', vi:'thường hay (lặp lại)', note:'Hành động lặp đi lặp lại thành thói quen.',
        ex:{ko:'주말마다 등산을 하곤 해요.', vi:'Cuối tuần tôi thường đi leo núi.'} },
      { form:'A/V + 아/어야', vi:'phải ... thì mới', note:'Điều kiện cần thiết.',
        ex:{ko:'잘 자야 건강해져요.', vi:'Phải ngủ đủ thì mới khoẻ.'} },
      { form:'V + 는 게 좋다', vi:'nên (làm)', note:'Đưa lời khuyên.',
        ex:{ko:'물을 자주 마시는 게 좋아요.', vi:'Nên uống nước thường xuyên.'} },
      { form:'V + 지 않도록', vi:'để không, tránh cho khỏi', note:'Mục đích phủ định.',
        ex:{ko:'살이 찌지 않도록 조심해요.', vi:'Tôi giữ ý để không tăng cân.'} }
    ],
    vocab:[
      {ko:'건강', rom:'geongang', vi:'sức khoẻ', pos:'danh từ', hanja:'健康', hv:'kiện khang', examples:[{ko:'건강이 제일 중요해요.', vi:'Sức khoẻ là quan trọng nhất.'}]},
      {ko:'습관', rom:'seupgwan', vi:'thói quen', pos:'danh từ', hanja:'習慣', hv:'tập quán', examples:[{ko:'좋은 습관을 길러요.', vi:'Hãy rèn thói quen tốt.'}]},
      {ko:'규칙적', rom:'gyuchikjeok', vi:'điều độ, đều đặn', pos:'danh từ', hanja:'規則的', hv:'quy tắc đích', examples:[{ko:'규칙적으로 운동해요.', vi:'Tôi tập thể dục đều đặn.'}]},
      {ko:'영양', rom:'yeongyang', vi:'dinh dưỡng', pos:'danh từ', hanja:'營養', hv:'dinh dưỡng', examples:[{ko:'영양을 골고루 섭취해요.', vi:'Tôi ăn đủ chất dinh dưỡng.'}]},
      {ko:'식습관', rom:'sikseupgwan', vi:'thói quen ăn uống', pos:'danh từ', hanja:'食習慣', hv:'thực tập quán', examples:[{ko:'식습관을 바꿨어요.', vi:'Tôi đã đổi thói quen ăn uống.'}]},
      {ko:'스트레스', rom:'seuteureseu', vi:'căng thẳng', pos:'danh từ', examples:[{ko:'스트레스를 풀어야 해요.', vi:'Phải giải toả căng thẳng.'}]},
      {ko:'피로', rom:'piro', vi:'sự mệt mỏi', pos:'danh từ', hanja:'疲勞', hv:'bì lao', examples:[{ko:'피로가 쌓였어요.', vi:'Sự mệt mỏi tích tụ lại.'}]},
      {ko:'면역력', rom:'myeonyeongnyeok', vi:'sức đề kháng', pos:'danh từ', hanja:'免疫力', hv:'miễn dịch lực', examples:[{ko:'면역력을 키워야 해요.', vi:'Phải tăng sức đề kháng.'}]},
      {ko:'예방하다', rom:'yebanghada', vi:'phòng ngừa', pos:'động từ', hanja:'豫防—', hv:'dự phòng', examples:[{ko:'병을 예방해요.', vi:'Phòng ngừa bệnh tật.'}]},
      {ko:'충분하다', rom:'chungbunhada', vi:'đầy đủ', pos:'tính từ', hanja:'充分—', hv:'sung phân', examples:[{ko:'수면이 충분해야 해요.', vi:'Giấc ngủ phải đầy đủ.'}]},
      {ko:'꾸준하다', rom:'kkujunhada', vi:'đều đặn, bền bỉ', pos:'tính từ', examples:[{ko:'꾸준한 운동이 중요해요.', vi:'Tập luyện bền bỉ rất quan trọng.'}]},
      {ko:'섭취하다', rom:'seopchwihada', vi:'nạp, hấp thụ', pos:'động từ', hanja:'攝取—', hv:'nhiếp thủ', examples:[{ko:'비타민을 섭취해요.', vi:'Tôi bổ sung vitamin.'}]},
      {ko:'조절하다', rom:'jojeolhada', vi:'điều chỉnh', pos:'động từ', hanja:'調節—', hv:'điều tiết', examples:[{ko:'식사량을 조절해요.', vi:'Tôi điều chỉnh khẩu phần ăn.'}]},
      {ko:'채소', rom:'chaeso', vi:'rau củ', pos:'danh từ', hanja:'菜蔬', hv:'thái sơ', examples:[{ko:'채소를 많이 먹어요.', vi:'Tôi ăn nhiều rau.'}]},
      {ko:'수면', rom:'sumyeon', vi:'giấc ngủ', pos:'danh từ', hanja:'睡眠', hv:'thuỵ miên', examples:[{ko:'수면 시간이 부족해요.', vi:'Thời gian ngủ thiếu.'}]},
      {ko:'꾸준히', rom:'kkujunhi', vi:'một cách bền bỉ', pos:'trạng từ', examples:[{ko:'꾸준히 노력하세요.', vi:'Hãy nỗ lực bền bỉ.'}]}
    ],
    dialogue:[
      {sp:'민수', ko:'요즘 피곤해 보여요. 잠은 잘 자요?', vi:'Dạo này trông cậu mệt. Ngủ có ngon không?'},
      {sp:'꾸언', ko:'스트레스 때문에 수면이 부족해요.', vi:'Vì căng thẳng nên tôi ngủ không đủ.'},
      {sp:'민수', ko:'규칙적으로 운동하는 게 좋아요.', vi:'Nên tập thể dục đều đặn.'},
      {sp:'꾸언', ko:'맞아요. 저도 주말마다 등산을 하곤 해요.', vi:'Đúng vậy. Cuối tuần tôi cũng hay leo núi.'},
      {sp:'민수', ko:'잘 자야 면역력도 좋아지니까 꼭 챙기세요.', vi:'Ngủ đủ thì đề kháng cũng tốt, nhớ giữ gìn nhé.'}
    ]
  },
  {
    no:11, level:'trung-cap-2', ko:'정보화 사회', vi:'Xã hội thông tin', rom:'jeongbohwa sahoe',
    skill:'Bàn về Internet, mạng xã hội, mặt lợi hại', pron:'Đọc thuật ngữ mạng',
    culture:'Văn hoá SNS và "댓글" (bình luận) ở Hàn',
    grammar:[
      { form:'A/V + (으)ㄴ/는 데 반해', vi:'trái lại, ngược với', note:'Đối lập rõ hai vế.',
        ex:{ko:'편리한 데 반해 개인정보가 걱정돼요.', vi:'Tiện thì tiện nhưng lo về thông tin cá nhân.'} },
      { form:'V + 다 보면', vi:'nếu cứ ... thì (sẽ)', note:'Giả định kết quả sau quá trình.',
        ex:{ko:'계속 쓰다 보면 익숙해져요.', vi:'Cứ dùng mãi thì sẽ quen.'} },
      { form:'N + 을/를 통해(서)', vi:'thông qua, qua', note:'Phương tiện/ trung gian.',
        ex:{ko:'인터넷을 통해 정보를 얻어요.', vi:'Tôi lấy thông tin qua Internet.'} },
      { form:'A/V + (으)ㄹ까 봐', vi:'sợ rằng, e là', note:'Lo lắng điều xấu có thể xảy ra.',
        ex:{ko:'개인정보가 샐까 봐 걱정이에요.', vi:'Tôi lo thông tin cá nhân bị lộ.'} }
    ],
    vocab:[
      {ko:'정보', rom:'jeongbo', vi:'thông tin', pos:'danh từ', hanja:'情報', hv:'tình báo', examples:[{ko:'정보가 넘쳐나요.', vi:'Thông tin tràn ngập.'}]},
      {ko:'인터넷', rom:'inteonet', vi:'Internet', pos:'danh từ', examples:[{ko:'인터넷 속도가 빨라요.', vi:'Tốc độ Internet nhanh.'}]},
      {ko:'검색하다', rom:'geomsaekhada', vi:'tìm kiếm', pos:'động từ', hanja:'檢索—', hv:'kiểm tác', examples:[{ko:'맛집을 검색했어요.', vi:'Tôi tìm quán ăn ngon.'}]},
      {ko:'누리소통망', rom:'nurisotongmang', vi:'mạng xã hội (SNS)', pos:'danh từ', examples:[{ko:'누리소통망에 사진을 올려요.', vi:'Tôi đăng ảnh lên mạng xã hội.'}]},
      {ko:'댓글', rom:'daetgeul', vi:'bình luận', pos:'danh từ', examples:[{ko:'악성 댓글이 문제예요.', vi:'Bình luận ác ý là vấn đề.'}]},
      {ko:'게시물', rom:'gesimul', vi:'bài đăng', pos:'danh từ', hanja:'揭示物', hv:'yết thị vật', examples:[{ko:'게시물을 삭제했어요.', vi:'Tôi đã xoá bài đăng.'}]},
      {ko:'개인정보', rom:'gaeinjeongbo', vi:'thông tin cá nhân', pos:'danh từ', hanja:'個人情報', hv:'cá nhân tình báo', examples:[{ko:'개인정보를 조심하세요.', vi:'Hãy cẩn thận thông tin cá nhân.'}]},
      {ko:'유출되다', rom:'yuchuldoeda', vi:'bị rò rỉ', pos:'động từ', hanja:'流出—', hv:'lưu xuất', examples:[{ko:'정보가 유출됐어요.', vi:'Thông tin đã bị rò rỉ.'}]},
      {ko:'중독', rom:'jungdok', vi:'sự nghiện', pos:'danh từ', hanja:'中毒', hv:'trúng độc', examples:[{ko:'게임 중독이 심각해요.', vi:'Nghiện game rất nghiêm trọng.'}]},
      {ko:'가짜뉴스', rom:'gajjanyuseu', vi:'tin giả', pos:'danh từ', examples:[{ko:'가짜뉴스에 속지 마세요.', vi:'Đừng bị lừa bởi tin giả.'}]},
      {ko:'공유하다', rom:'gongyuhada', vi:'chia sẻ', pos:'động từ', hanja:'共有—', hv:'cộng hữu', examples:[{ko:'파일을 공유했어요.', vi:'Tôi đã chia sẻ file.'}]},
      {ko:'접속하다', rom:'jeopsokhada', vi:'truy cập', pos:'động từ', hanja:'接續—', hv:'tiếp tục', examples:[{ko:'사이트에 접속했어요.', vi:'Tôi đã truy cập trang web.'}]},
      {ko:'편리하다', rom:'pyeollihada', vi:'tiện lợi', pos:'tính từ', hanja:'便利—', hv:'tiện lợi', examples:[{ko:'온라인 쇼핑이 편리해요.', vi:'Mua sắm online tiện lợi.'}]},
      {ko:'익숙하다', rom:'iksukhada', vi:'quen thuộc, thành thạo', pos:'tính từ', examples:[{ko:'이 프로그램에 익숙해요.', vi:'Tôi thạo chương trình này.'}]},
      {ko:'예의', rom:'yeui', vi:'phép lịch sự', pos:'danh từ', hanja:'禮儀', hv:'lễ nghi', examples:[{ko:'온라인에서도 예의를 지켜요.', vi:'Trên mạng cũng giữ phép lịch sự.'}]},
      {ko:'주의하다', rom:'juuihada', vi:'chú ý, lưu ý', pos:'động từ', hanja:'注意—', hv:'chú ý', examples:[{ko:'개인정보에 주의하세요.', vi:'Hãy lưu ý thông tin cá nhân.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'요즘 SNS 안 하는 사람이 없더라고요.', vi:'Dạo này không ai là không dùng mạng xã hội.'},
      {sp:'꾸언', ko:'편리한 데 반해 개인정보가 걱정돼요.', vi:'Tiện thì tiện nhưng lo về thông tin cá nhân.'},
      {sp:'수진', ko:'맞아요. 정보가 유출될까 봐 저도 조심해요.', vi:'Đúng. Tôi cũng cẩn thận sợ bị lộ thông tin.'},
      {sp:'꾸언', ko:'그리고 가짜뉴스가 너무 많아서 조심해야 해요.', vi:'Với lại tin giả nhiều quá nên phải cẩn thận.'},
      {sp:'수진', ko:'온라인에서도 예의를 지키는 게 중요해요.', vi:'Trên mạng cũng cần giữ phép lịch sự.'}
    ]
  },
  {
    no:12, level:'trung-cap-2', ko:'여행과 문화 체험', vi:'Du lịch và trải nghiệm văn hoá', rom:'yeohaeng-gwa munhwa cheheom',
    skill:'Kể chuyến đi, so sánh văn hoá, gợi ý điểm đến', pron:'Ngữ điệu kể chuyện',
    culture:'Du lịch nội địa Hàn: 한옥마을, 시장, 축제',
    grammar:[
      { form:'V + 았/었더니', vi:'(tôi đã làm) và rồi thì', note:'Kết quả phát hiện sau hành động của người nói.',
        ex:{ko:'일찍 갔더니 사람이 없었어요.', vi:'Tôi đi sớm nên vắng người.'} },
      { form:'A/V + 던', vi:'(hồi) từng ... (hồi tưởng)', note:'Nhớ lại điều đã/ đang diễn ra trong quá khứ.',
        ex:{ko:'예전에 자주 가던 카페예요.', vi:'Là quán café tôi hay tới trước kia.'} },
      { form:'N + 만 하다', vi:'to bằng, cỡ như', note:'So sánh kích cỡ.',
        ex:{ko:'그 시장은 도시만 해요.', vi:'Chợ đó to như cả thành phố.'} },
      { form:'V + (으)ㄹ 겸', vi:'nhân tiện, tiện thể', note:'Kết hợp hai mục đích.',
        ex:{ko:'구경도 할 겸 산책했어요.', vi:'Tôi đi dạo tiện thể ngắm cảnh.'} }
    ],
    vocab:[
      {ko:'여행', rom:'yeohaeng', vi:'du lịch', pos:'danh từ', hanja:'旅行', hv:'lữ hành', examples:[{ko:'배낭여행을 떠났어요.', vi:'Tôi đi du lịch bụi.'}]},
      {ko:'체험', rom:'cheheom', vi:'sự trải nghiệm', pos:'danh từ', hanja:'體驗', hv:'thể nghiệm', examples:[{ko:'한복 체험을 했어요.', vi:'Tôi đã trải nghiệm mặc hanbok.'}]},
      {ko:'명소', rom:'myeongso', vi:'danh lam, điểm nổi tiếng', pos:'danh từ', hanja:'名所', hv:'danh sở', examples:[{ko:'유명한 명소를 방문했어요.', vi:'Tôi thăm điểm du lịch nổi tiếng.'}]},
      {ko:'전통', rom:'jeontong', vi:'truyền thống', pos:'danh từ', hanja:'傳統', hv:'truyền thống', examples:[{ko:'전통 문화를 배웠어요.', vi:'Tôi học văn hoá truyền thống.'}]},
      {ko:'풍습', rom:'pungseup', vi:'phong tục', pos:'danh từ', hanja:'風習', hv:'phong tập', examples:[{ko:'지역마다 풍습이 달라요.', vi:'Mỗi vùng phong tục khác nhau.'}]},
      {ko:'축제', rom:'chukje', vi:'lễ hội', pos:'danh từ', hanja:'祝祭', hv:'chúc tế', examples:[{ko:'벚꽃 축제가 열려요.', vi:'Lễ hội hoa anh đào được tổ chức.'}]},
      {ko:'경치', rom:'gyeongchi', vi:'phong cảnh', pos:'danh từ', hanja:'景致', hv:'cảnh trí', examples:[{ko:'경치가 아름다워요.', vi:'Phong cảnh đẹp.'}]},
      {ko:'숙소', rom:'sukso', vi:'chỗ ở, nơi lưu trú', pos:'danh từ', hanja:'宿所', hv:'túc sở', examples:[{ko:'숙소를 예약했어요.', vi:'Tôi đã đặt chỗ ở.'}]},
      {ko:'일정', rom:'iljeong', vi:'lịch trình', pos:'danh từ', hanja:'日程', hv:'nhật trình', examples:[{ko:'일정이 빡빡해요.', vi:'Lịch trình dày đặc.'}]},
      {ko:'구경하다', rom:'gugyeonghada', vi:'tham quan, ngắm', pos:'động từ', examples:[{ko:'시장을 구경했어요.', vi:'Tôi đi ngắm chợ.'}]},
      {ko:'즐기다', rom:'jeulgida', vi:'tận hưởng', pos:'động từ', examples:[{ko:'여행을 마음껏 즐겼어요.', vi:'Tôi tận hưởng chuyến đi thoả thích.'}]},
      {ko:'추억', rom:'chueok', vi:'kỷ niệm', pos:'danh từ', hanja:'追憶', hv:'truy ức', examples:[{ko:'좋은 추억을 만들었어요.', vi:'Tôi tạo được kỷ niệm đẹp.'}]},
      {ko:'현지', rom:'hyeonji', vi:'bản địa, tại chỗ', pos:'danh từ', hanja:'現地', hv:'hiện địa', examples:[{ko:'현지 음식을 맛봤어요.', vi:'Tôi nếm thử món ăn bản địa.'}]},
      {ko:'다양하다', rom:'dayanghada', vi:'đa dạng', pos:'tính từ', hanja:'多樣—', hv:'đa dạng', examples:[{ko:'음식이 다양해요.', vi:'Món ăn đa dạng.'}]},
      {ko:'낯설다', rom:'natseolda', vi:'xa lạ', pos:'tính từ', examples:[{ko:'낯선 곳이 설레요.', vi:'Nơi xa lạ khiến tôi háo hức.'}]},
      {ko:'인상 깊다', rom:'insang gipda', vi:'ấn tượng sâu sắc', pos:'cụm từ', examples:[{ko:'야경이 인상 깊었어요.', vi:'Cảnh đêm để lại ấn tượng sâu.'}]}
    ],
    dialogue:[
      {sp:'민수', ko:'지난 주말에 전주에 다녀왔다면서요?', vi:'Nghe nói cuối tuần cậu đi Jeonju à?'},
      {sp:'꾸언', ko:'네, 한옥마을에서 한복 체험도 했어요.', vi:'Vâng, tôi còn trải nghiệm hanbok ở làng cổ.'},
      {sp:'민수', ko:'사람 많지 않았어요?', vi:'Đông người không?'},
      {sp:'꾸언', ko:'일찍 갔더니 사람이 별로 없었어요.', vi:'Tôi đi sớm nên khá vắng.'},
      {sp:'민수', ko:'구경도 할 겸 저도 한번 가 보고 싶네요.', vi:'Tôi cũng muốn đi một lần, tiện thể ngắm cảnh.'}
    ]
  },
  {
    no:13, level:'trung-cap-2', ko:'감정과 심리', vi:'Cảm xúc và tâm lý', rom:'gamjeong-gwa simni',
    skill:'Diễn tả cảm xúc phức tạp, an ủi người khác', pron:'Ngữ điệu đồng cảm',
    culture:'Cách người Hàn nói về 스트레스 và chăm sóc tinh thần',
    grammar:[
      { form:'A/V + 기는(요)', vi:'đâu có, gì mà (phủ nhận nhẹ)', note:'Phủ nhận lời khen/ nhận xét.',
        ex:{ko:'괜찮기는요, 아직 힘들어요.', vi:'Ổn gì đâu, tôi vẫn còn mệt.'} },
      { form:'V + 느라(고)', vi:'vì mải, do bận', note:'Lý do khiến không làm được việc khác (bất lợi).',
        ex:{ko:'걱정하느라 잠을 못 잤어요.', vi:'Vì lo lắng nên tôi mất ngủ.'} },
      { form:'A/V + (으)ㄴ/는지', vi:'không biết có ... hay không', note:'Nghi vấn gián tiếp lồng trong câu.',
        ex:{ko:'왜 슬픈지 모르겠어요.', vi:'Tôi không biết vì sao mình buồn.'} },
      { form:'A/V + 잖아요', vi:'... còn gì, ... mà', note:'Nhắc lại điều hiển nhiên/ đã biết.',
        ex:{ko:'누구나 힘들 때가 있잖아요.', vi:'Ai cũng có lúc khó khăn mà.'} }
    ],
    vocab:[
      {ko:'감정', rom:'gamjeong', vi:'cảm xúc', pos:'danh từ', hanja:'感情', hv:'cảm tình', examples:[{ko:'감정을 솔직히 표현해요.', vi:'Tôi bày tỏ cảm xúc thật.'}]},
      {ko:'심리', rom:'simni', vi:'tâm lý', pos:'danh từ', hanja:'心理', hv:'tâm lý', examples:[{ko:'심리 상담을 받았어요.', vi:'Tôi đã đi tư vấn tâm lý.'}]},
      {ko:'우울하다', rom:'uulhada', vi:'u sầu, trầm cảm', pos:'tính từ', hanja:'憂鬱—', hv:'ưu uất', examples:[{ko:'날씨가 흐리면 우울해요.', vi:'Trời âm u thì tôi thấy buồn.'}]},
      {ko:'불안하다', rom:'buranhada', vi:'bất an, lo lắng', pos:'tính từ', hanja:'不安—', hv:'bất an', examples:[{ko:'시험 전이라 불안해요.', vi:'Trước kỳ thi nên tôi bất an.'}]},
      {ko:'외롭다', rom:'oeropda', vi:'cô đơn', pos:'tính từ', examples:[{ko:'혼자 있으면 외로워요.', vi:'Ở một mình thì cô đơn.'}]},
      {ko:'그립다', rom:'geuripda', vi:'nhớ nhung', pos:'tính từ', examples:[{ko:'고향이 그리워요.', vi:'Tôi nhớ quê hương.'}]},
      {ko:'후련하다', rom:'huryeonhada', vi:'nhẹ nhõm', pos:'tính từ', examples:[{ko:'다 말하고 나니 후련해요.', vi:'Nói hết ra rồi thấy nhẹ nhõm.'}]},
      {ko:'답답하다', rom:'dapdaphada', vi:'bức bối, ngột ngạt', pos:'tính từ', examples:[{ko:'말이 안 통해서 답답해요.', vi:'Không nói được nên bức bối.'}]},
      {ko:'위로하다', rom:'wirohada', vi:'an ủi', pos:'động từ', hanja:'慰勞—', hv:'uỷ lao', examples:[{ko:'친구를 위로해 줬어요.', vi:'Tôi đã an ủi bạn.'}]},
      {ko:'참다', rom:'chamda', vi:'kìm nén, chịu đựng', pos:'động từ', examples:[{ko:'눈물을 참았어요.', vi:'Tôi cố kìm nước mắt.'}]},
      {ko:'견디다', rom:'gyeondida', vi:'chịu đựng', pos:'động từ', examples:[{ko:'외로움을 견디기 힘들어요.', vi:'Khó chịu đựng sự cô đơn.'}]},
      {ko:'표현하다', rom:'pyohyeonhada', vi:'biểu đạt, bày tỏ', pos:'động từ', hanja:'表現—', hv:'biểu hiện', examples:[{ko:'감정을 말로 표현해요.', vi:'Tôi bày tỏ cảm xúc bằng lời.'}]},
      {ko:'극복하다', rom:'geukbokhada', vi:'vượt qua', pos:'động từ', hanja:'克服—', hv:'khắc phục', examples:[{ko:'우울함을 극복했어요.', vi:'Tôi đã vượt qua nỗi buồn.'}]},
      {ko:'공감하다', rom:'gonggamhada', vi:'đồng cảm', pos:'động từ', hanja:'共感—', hv:'cộng cảm', examples:[{ko:'그 마음에 공감해요.', vi:'Tôi đồng cảm với tâm trạng đó.'}]},
      {ko:'긍정적', rom:'geungjeongjeok', vi:'tích cực', pos:'danh từ', hanja:'肯定的', hv:'khẳng định đích', examples:[{ko:'긍정적으로 생각하세요.', vi:'Hãy nghĩ tích cực.'}]},
      {ko:'부정적', rom:'bujeongjeok', vi:'tiêu cực', pos:'danh từ', hanja:'否定的', hv:'phủ định đích', examples:[{ko:'부정적인 생각을 버려요.', vi:'Hãy bỏ suy nghĩ tiêu cực.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'요즘 표정이 안 좋아요. 무슨 일 있어요?', vi:'Dạo này trông cậu không vui. Có chuyện gì à?'},
      {sp:'꾸언', ko:'그냥 좀 우울하고 답답해요.', vi:'Chỉ là hơi buồn và bức bối.'},
      {sp:'수진', ko:'괜찮아요. 누구나 힘들 때가 있잖아요.', vi:'Không sao. Ai cũng có lúc khó khăn mà.'},
      {sp:'꾸언', ko:'이렇게 이야기하니까 좀 후련해요.', vi:'Nói ra thế này thấy nhẹ nhõm hơn.'},
      {sp:'수진', ko:'언제든지 이야기하세요. 제가 들어 줄게요.', vi:'Có gì cứ nói nhé. Tôi sẽ lắng nghe.'}
    ]
  },
  {
    no:14, level:'trung-cap-2', ko:'전통과 현대', vi:'Truyền thống và hiện đại', rom:'jeontong-gwa hyeondae',
    skill:'So sánh xưa và nay, bàn về giữ gìn truyền thống', pron:'Đọc từ Hán-Hàn trang trọng',
    culture:'Sự dung hợp truyền thống - hiện đại trong đời sống Hàn',
    grammar:[
      { form:'A/V + 던 N', vi:'N (từng) ... hồi trước', note:'Hồi tưởng sự việc trong quá khứ chưa hoàn tất.',
        ex:{ko:'할머니가 쓰시던 물건이에요.', vi:'Là món đồ bà tôi từng dùng.'} },
      { form:'V + (으)ㄴ 채(로)', vi:'trong tình trạng, để nguyên', note:'Giữ nguyên trạng thái khi làm việc khác.',
        ex:{ko:'전통을 지킨 채 발전했어요.', vi:'Vẫn phát triển mà giữ nguyên truyền thống.'} },
      { form:'A/V + 는 반면', vi:'trong khi (đối lập)', note:'Đối chiếu hai mặt (văn viết).',
        ex:{ko:'전통은 소중한 반면 불편할 때도 있어요.', vi:'Truyền thống quý giá nhưng đôi khi bất tiện.'} },
      { form:'N + 에 비하면', vi:'so với ... thì', note:'Đối chiếu làm chuẩn so sánh.',
        ex:{ko:'옛날에 비하면 많이 편해졌어요.', vi:'So với xưa thì tiện hơn nhiều.'} }
    ],
    vocab:[
      {ko:'전통', rom:'jeontong', vi:'truyền thống', pos:'danh từ', hanja:'傳統', hv:'truyền thống', examples:[{ko:'전통을 이어 가요.', vi:'Nối tiếp truyền thống.'}]},
      {ko:'현대', rom:'hyeondae', vi:'hiện đại', pos:'danh từ', hanja:'現代', hv:'hiện đại', examples:[{ko:'현대 사회는 빠르게 변해요.', vi:'Xã hội hiện đại thay đổi nhanh.'}]},
      {ko:'세대', rom:'sedae', vi:'thế hệ', pos:'danh từ', hanja:'世代', hv:'thế đại', examples:[{ko:'세대 차이가 커요.', vi:'Khoảng cách thế hệ lớn.'}]},
      {ko:'조상', rom:'josang', vi:'tổ tiên', pos:'danh từ', hanja:'祖上', hv:'tổ thượng', examples:[{ko:'조상을 기려요.', vi:'Tưởng nhớ tổ tiên.'}]},
      {ko:'후손', rom:'huson', vi:'hậu duệ, con cháu', pos:'danh từ', hanja:'後孫', hv:'hậu tôn', examples:[{ko:'후손에게 물려줘요.', vi:'Truyền lại cho con cháu.'}]},
      {ko:'계승하다', rom:'gyeseunghada', vi:'kế thừa', pos:'động từ', hanja:'繼承—', hv:'kế thừa', examples:[{ko:'문화를 계승해요.', vi:'Kế thừa văn hoá.'}]},
      {ko:'변화하다', rom:'byeonhwahada', vi:'biến đổi', pos:'động từ', hanja:'變化—', hv:'biến hoá', examples:[{ko:'생활 방식이 변화했어요.', vi:'Lối sống đã thay đổi.'}]},
      {ko:'유지하다', rom:'yujihada', vi:'duy trì', pos:'động từ', hanja:'維持—', hv:'duy trì', examples:[{ko:'전통을 유지해요.', vi:'Duy trì truyền thống.'}]},
      {ko:'조화', rom:'johwa', vi:'sự hài hoà', pos:'danh từ', hanja:'調和', hv:'điều hoà', examples:[{ko:'전통과 현대의 조화가 멋져요.', vi:'Sự hài hoà xưa - nay thật đẹp.'}]},
      {ko:'가치', rom:'gachi', vi:'giá trị', pos:'danh từ', hanja:'價値', hv:'giá trị', examples:[{ko:'전통의 가치를 알아요.', vi:'Tôi hiểu giá trị của truyền thống.'}]},
      {ko:'소중하다', rom:'sojunghada', vi:'quý giá', pos:'tính từ', hanja:'所重—', hv:'sở trọng', examples:[{ko:'소중한 문화유산이에요.', vi:'Là di sản văn hoá quý giá.'}]},
      {ko:'낡다', rom:'nakda', vi:'cũ kỹ, lạc hậu', pos:'tính từ', examples:[{ko:'낡은 사고방식을 버려요.', vi:'Bỏ lối nghĩ cũ kỹ.'}]},
      {ko:'명절', rom:'myeongjeol', vi:'ngày lễ tết', pos:'danh từ', hanja:'名節', hv:'danh tiết', examples:[{ko:'명절에 가족이 모여요.', vi:'Ngày lễ cả nhà tụ họp.'}]},
      {ko:'예절', rom:'yejeol', vi:'lễ nghi, lễ phép', pos:'danh từ', hanja:'禮節', hv:'lễ tiết', examples:[{ko:'예절을 잘 지켜요.', vi:'Giữ đúng lễ nghi.'}]},
      {ko:'문화유산', rom:'munhwayusan', vi:'di sản văn hoá', pos:'danh từ', hanja:'文化遺産', hv:'văn hoá di sản', examples:[{ko:'문화유산을 보존해요.', vi:'Bảo tồn di sản văn hoá.'}]},
      {ko:'물려주다', rom:'mullyeojuda', vi:'truyền lại, để lại', pos:'động từ', examples:[{ko:'전통을 다음 세대에 물려줘요.', vi:'Truyền truyền thống cho đời sau.'}]}
    ],
    dialogue:[
      {sp:'민수', ko:'요즘 젊은 사람들은 명절을 잘 안 지키는 것 같아요.', vi:'Dạo này người trẻ hình như ít giữ lễ tết.'},
      {sp:'꾸언', ko:'옛날에 비하면 많이 간소해진 건 사실이에요.', vi:'So với xưa thì quả là đơn giản đi nhiều.'},
      {sp:'민수', ko:'그래도 전통의 가치는 소중하잖아요.', vi:'Nhưng giá trị truyền thống vẫn quý mà.'},
      {sp:'꾸언', ko:'맞아요. 전통을 지킨 채 현대에 맞게 바꾸면 좋겠어요.', vi:'Đúng. Mong giữ truyền thống mà đổi cho hợp thời.'},
      {sp:'민수', ko:'전통과 현대의 조화가 제일 중요한 것 같아요.', vi:'Tôi thấy sự hài hoà xưa - nay là quan trọng nhất.'}
    ]
  },
  {
    no:15, level:'trung-cap-2', ko:'꿈과 계획', vi:'Ước mơ và kế hoạch', rom:'kkum-gwa gyehoek',
    skill:'Trình bày ước mơ, lập kế hoạch dài hạn', pron:'Ngữ điệu quả quyết',
    culture:'Quan niệm về 자기계발 (phát triển bản thân) ở Hàn',
    grammar:[
      { form:'V + 고자 하다', vi:'muốn, dự định (trang trọng)', note:'Ý định/ mục tiêu, văn phong nghiêm túc.',
        ex:{ko:'통역사가 되고자 합니다.', vi:'Tôi muốn trở thành phiên dịch viên.'} },
      { form:'V + (으)ㄹ 뿐이다', vi:'chỉ ... mà thôi', note:'Giới hạn duy nhất một điều.',
        ex:{ko:'최선을 다할 뿐이에요.', vi:'Tôi chỉ cố hết sức mà thôi.'} },
      { form:'A/V + 든지 간에', vi:'bất kể ... thế nào', note:'Không phân biệt lựa chọn.',
        ex:{ko:'무슨 일이 있든지 간에 포기 안 해요.', vi:'Bất kể chuyện gì tôi cũng không bỏ cuộc.'} },
      { form:'V + 다 보면', vi:'cứ làm rồi thì (sẽ)', note:'Kết quả tích luỹ qua quá trình.',
        ex:{ko:'노력하다 보면 이루어질 거예요.', vi:'Cứ cố gắng thì sẽ đạt được.'} }
    ],
    vocab:[
      {ko:'꿈', rom:'kkum', vi:'ước mơ, giấc mơ', pos:'danh từ', examples:[{ko:'제 꿈은 선생님이 되는 거예요.', vi:'Ước mơ của tôi là làm giáo viên.'}]},
      {ko:'목표', rom:'mokpyo', vi:'mục tiêu', pos:'danh từ', hanja:'目標', hv:'mục tiêu', examples:[{ko:'목표를 정했어요.', vi:'Tôi đã đặt mục tiêu.'}]},
      {ko:'계획', rom:'gyehoek', vi:'kế hoạch', pos:'danh từ', hanja:'計劃', hv:'kế hoạch', examples:[{ko:'구체적인 계획을 세워요.', vi:'Lập kế hoạch cụ thể.'}]},
      {ko:'이상', rom:'isang', vi:'lý tưởng', pos:'danh từ', hanja:'理想', hv:'lý tưởng', examples:[{ko:'이상과 현실은 달라요.', vi:'Lý tưởng và thực tế khác nhau.'}]},
      {ko:'실현하다', rom:'silhyeonhada', vi:'thực hiện, biến thành hiện thực', pos:'động từ', hanja:'實現—', hv:'thực hiện', examples:[{ko:'꿈을 실현하고 싶어요.', vi:'Tôi muốn biến ước mơ thành hiện thực.'}]},
      {ko:'노력하다', rom:'noryeokhada', vi:'nỗ lực', pos:'động từ', hanja:'努力—', hv:'nỗ lực', examples:[{ko:'매일 노력하고 있어요.', vi:'Tôi nỗ lực mỗi ngày.'}]},
      {ko:'준비하다', rom:'junbihada', vi:'chuẩn bị', pos:'động từ', hanja:'準備—', hv:'chuẩn bị', examples:[{ko:'미래를 준비해요.', vi:'Tôi chuẩn bị cho tương lai.'}]},
      {ko:'도전하다', rom:'dojeonhada', vi:'thử thách, dấn thân', pos:'động từ', hanja:'挑戰—', hv:'khiêu chiến', examples:[{ko:'새로운 일에 도전해요.', vi:'Tôi thử sức việc mới.'}]},
      {ko:'자기계발', rom:'jagigyebal', vi:'phát triển bản thân', pos:'danh từ', hanja:'自己啓發', hv:'tự kỷ khải phát', examples:[{ko:'자기계발에 투자해요.', vi:'Tôi đầu tư phát triển bản thân.'}]},
      {ko:'미래', rom:'mirae', vi:'tương lai', pos:'danh từ', hanja:'未來', hv:'vị lai', examples:[{ko:'밝은 미래를 꿈꿔요.', vi:'Tôi mơ về tương lai tươi sáng.'}]},
      {ko:'성취하다', rom:'seongchwihada', vi:'đạt được, giành được', pos:'động từ', hanja:'成就—', hv:'thành tựu', examples:[{ko:'목표를 성취했어요.', vi:'Tôi đã đạt được mục tiêu.'}]},
      {ko:'포부', rom:'pobu', vi:'hoài bão', pos:'danh từ', hanja:'抱負', hv:'bão phụ', examples:[{ko:'큰 포부를 가지고 있어요.', vi:'Tôi mang hoài bão lớn.'}]},
      {ko:'구체적', rom:'guchejeok', vi:'cụ thể', pos:'danh từ', hanja:'具體的', hv:'cụ thể đích', examples:[{ko:'구체적으로 설명해 주세요.', vi:'Hãy giải thích cụ thể.'}]},
      {ko:'꾸준히', rom:'kkujunhi', vi:'bền bỉ, đều đặn', pos:'trạng từ', examples:[{ko:'꾸준히 실천해요.', vi:'Tôi thực hành đều đặn.'}]},
      {ko:'최선', rom:'choeseon', vi:'sự cố gắng hết mình', pos:'danh từ', hanja:'最善', hv:'tối thiện', examples:[{ko:'최선을 다하겠습니다.', vi:'Tôi sẽ cố gắng hết mình.'}]},
      {ko:'이루어지다', rom:'irueojida', vi:'được thực hiện, thành hiện thực', pos:'động từ', examples:[{ko:'소원이 이루어졌어요.', vi:'Điều ước đã thành sự thật.'}]}
    ],
    dialogue:[
      {sp:'수진', ko:'꾸언 씨는 앞으로 꿈이 뭐예요?', vi:'Ước mơ sắp tới của cậu là gì?'},
      {sp:'꾸언', ko:'저는 한국어 통역사가 되고자 해요.', vi:'Tôi muốn trở thành phiên dịch tiếng Hàn.'},
      {sp:'수진', ko:'멋진 목표네요! 계획은 세웠어요?', vi:'Mục tiêu tuyệt đấy! Đã có kế hoạch chưa?'},
      {sp:'꾸언', ko:'네, 구체적으로 세웠어요. 최선을 다할 뿐이에요.', vi:'Rồi, tôi lên cụ thể rồi. Chỉ cần cố hết sức thôi.'},
      {sp:'수진', ko:'꾸준히 노력하다 보면 꼭 이루어질 거예요.', vi:'Cứ nỗ lực bền bỉ thì nhất định sẽ thành.'}
    ]
  }
);
(COURSE_KO.levels.find(x => x.id === 'trung-cap-2') || {}).status = 'active';

function mergeExtra(levelId, extraMap){
  COURSE_KO.lessons.forEach(l => {
    if (l.level === levelId && extraMap && extraMap[l.no]){
      const ex = extraMap[l.no];
      (ex.grammar || []).forEach(g => { if (!l.grammar.some(x => x.form === g.form)) l.grammar.push(g); });
      (ex.vocab || []).forEach(v => { if (!l.vocab.some(x => x.ko === v.ko)) l.vocab.push(v); });
    }
  });
}
mergeExtra('so-cap-1', SC1_EXTRA);
/* ---- Sơ cấp 1: bổ sung đợt 2 (thêm ~8 từ vựng mỗi bài) ---- */
const SC1_EXTRA2 = {
  1:{vocab:[{ko:'회사',rom:'hoesa',vi:'công ty',pos:'danh từ',hanja:'會社',hv:'hội xã'},{ko:'대학교',rom:'daehakgyo',vi:'trường đại học',pos:'danh từ',hanja:'大學校',hv:'đại học hiệu'},{ko:'남자',rom:'namja',vi:'đàn ông',pos:'danh từ',hanja:'男子',hv:'nam tử'},{ko:'여자',rom:'yeoja',vi:'phụ nữ',pos:'danh từ',hanja:'女子',hv:'nữ tử'},{ko:'아이',rom:'ai',vi:'đứa trẻ',pos:'danh từ'},{ko:'이분',rom:'ibun',vi:'vị này',pos:'đại từ'},{ko:'그분',rom:'geubun',vi:'vị đó',pos:'đại từ'},{ko:'분',rom:'bun',vi:'vị (người, kính ngữ)',pos:'danh từ'}]},
  2:{vocab:[{ko:'교과서',rom:'gyogwaseo',vi:'sách giáo khoa',pos:'danh từ',hanja:'敎科書',hv:'giáo khoa thư'},{ko:'사전',rom:'sajeon',vi:'từ điển',pos:'danh từ',hanja:'辭典',hv:'từ điển'},{ko:'시험',rom:'siheom',vi:'kỳ thi',pos:'danh từ',hanja:'試驗',hv:'thí nghiệm'},{ko:'숙제',rom:'sukje',vi:'bài tập về nhà',pos:'danh từ',hanja:'宿題',hv:'túc đề'},{ko:'질문',rom:'jilmun',vi:'câu hỏi',pos:'danh từ',hanja:'質問',hv:'chất vấn'},{ko:'대답',rom:'daedap',vi:'câu trả lời',pos:'danh từ',hanja:'對答',hv:'đối đáp'},{ko:'배우다',rom:'baeuda',vi:'học',pos:'động từ'},{ko:'가르치다',rom:'gareuchida',vi:'dạy',pos:'động từ'}]},
  3:{vocab:[{ko:'아침',rom:'achim',vi:'buổi sáng, bữa sáng',pos:'danh từ'},{ko:'낮',rom:'nat',vi:'ban ngày',pos:'danh từ'},{ko:'밤',rom:'bam',vi:'ban đêm',pos:'danh từ'},{ko:'하루',rom:'haru',vi:'một ngày',pos:'danh từ'},{ko:'양치하다',rom:'yangchihada',vi:'đánh răng',pos:'động từ'},{ko:'밥',rom:'bap',vi:'cơm',pos:'danh từ'},{ko:'옷',rom:'ot',vi:'quần áo',pos:'danh từ'},{ko:'텔레비전',rom:'tellebijeon',vi:'ti vi',pos:'danh từ'}]},
  4:{vocab:[{ko:'요일',rom:'yoil',vi:'thứ (trong tuần)',pos:'danh từ',hanja:'曜日',hv:'diệu nhật'},{ko:'월요일',rom:'woryoil',vi:'thứ Hai',pos:'danh từ'},{ko:'화요일',rom:'hwayoil',vi:'thứ Ba',pos:'danh từ'},{ko:'수요일',rom:'suyoil',vi:'thứ Tư',pos:'danh từ'},{ko:'목요일',rom:'mogyoil',vi:'thứ Năm',pos:'danh từ'},{ko:'금요일',rom:'geumyoil',vi:'thứ Sáu',pos:'danh từ'},{ko:'토요일',rom:'toyoil',vi:'thứ Bảy',pos:'danh từ'},{ko:'일요일',rom:'iryoil',vi:'Chủ nhật',pos:'danh từ'}]},
  5:{vocab:[{ko:'시간',rom:'sigan',vi:'thời gian, tiếng',pos:'danh từ',hanja:'時間',hv:'thời gian'},{ko:'오전',rom:'ojeon',vi:'buổi sáng (AM)',pos:'danh từ',hanja:'午前',hv:'ngọ tiền'},{ko:'오후',rom:'ohu',vi:'buổi chiều (PM)',pos:'danh từ',hanja:'午後',hv:'ngọ hậu'},{ko:'아까',rom:'akka',vi:'khi nãy',pos:'trạng từ'},{ko:'먼저',rom:'meonjeo',vi:'trước tiên',pos:'trạng từ'},{ko:'그다음',rom:'geudaeum',vi:'sau đó, kế tiếp',pos:'danh từ'},{ko:'일찍',rom:'iljjik',vi:'sớm',pos:'trạng từ'},{ko:'늦게',rom:'neutge',vi:'muộn',pos:'trạng từ'}]},
  6:{vocab:[{ko:'등산',rom:'deungsan',vi:'leo núi',pos:'danh từ',hanja:'登山',hv:'đăng sơn'},{ko:'낚시',rom:'naksi',vi:'câu cá',pos:'danh từ'},{ko:'박물관',rom:'bangmulgwan',vi:'bảo tàng',pos:'danh từ',hanja:'博物館',hv:'bác vật quán'},{ko:'놀이공원',rom:'norigongwon',vi:'công viên giải trí',pos:'danh từ'},{ko:'바다',rom:'bada',vi:'biển',pos:'danh từ'},{ko:'산',rom:'san',vi:'núi',pos:'danh từ',hanja:'山',hv:'sơn'},{ko:'구경하다',rom:'gugyeonghada',vi:'tham quan, ngắm',pos:'động từ'},{ko:'재미있다',rom:'jaemiitda',vi:'thú vị',pos:'tính từ'}]},
  7:{vocab:[{ko:'백화점',rom:'baekhwajeom',vi:'trung tâm thương mại',pos:'danh từ',hanja:'百貨店',hv:'bách hoá điếm'},{ko:'편의점',rom:'pyeonuijeom',vi:'cửa hàng tiện lợi',pos:'danh từ',hanja:'便宜店',hv:'tiện nghi điếm'},{ko:'과일',rom:'gwail',vi:'hoa quả',pos:'danh từ'},{ko:'채소',rom:'chaeso',vi:'rau',pos:'danh từ',hanja:'菜蔬',hv:'thái sơ'},{ko:'우유',rom:'uyu',vi:'sữa',pos:'danh từ',hanja:'牛乳',hv:'ngưu nhũ'},{ko:'빵',rom:'ppang',vi:'bánh mì',pos:'danh từ'},{ko:'봉투',rom:'bongtu',vi:'túi, bao',pos:'danh từ',hanja:'封套',hv:'phong sáo'},{ko:'계산하다',rom:'gyesanhada',vi:'tính tiền',pos:'động từ',hanja:'計算—',hv:'kế toán'}]},
  8:{vocab:[{ko:'국',rom:'guk',vi:'canh',pos:'danh từ'},{ko:'반찬',rom:'banchan',vi:'món phụ',pos:'danh từ',hanja:'飯饌',hv:'phạn soạn'},{ko:'고기',rom:'gogi',vi:'thịt',pos:'danh từ'},{ko:'생선',rom:'saengseon',vi:'cá (để ăn)',pos:'danh từ',hanja:'生鮮',hv:'sinh tiên'},{ko:'달걀',rom:'dalgyal',vi:'trứng gà',pos:'danh từ'},{ko:'김치',rom:'gimchi',vi:'kim chi',pos:'danh từ'},{ko:'라면',rom:'ramyeon',vi:'mì ăn liền',pos:'danh từ'},{ko:'물',rom:'mul',vi:'nước',pos:'danh từ'}]},
  9:{vocab:[{ko:'침대',rom:'chimdae',vi:'giường',pos:'danh từ',hanja:'寢臺',hv:'tẩm đài'},{ko:'옷장',rom:'otjang',vi:'tủ quần áo',pos:'danh từ'},{ko:'냉장고',rom:'naengjanggo',vi:'tủ lạnh',pos:'danh từ',hanja:'冷藏庫',hv:'lãnh tàng khố'},{ko:'창문',rom:'changmun',vi:'cửa sổ',pos:'danh từ',hanja:'窓門',hv:'song môn'},{ko:'문',rom:'mun',vi:'cửa',pos:'danh từ',hanja:'門',hv:'môn'},{ko:'벽',rom:'byeok',vi:'tường',pos:'danh từ',hanja:'壁',hv:'bích'},{ko:'마당',rom:'madang',vi:'sân',pos:'danh từ'},{ko:'계단',rom:'gyedan',vi:'cầu thang',pos:'danh từ',hanja:'階段',hv:'giai đoạn'}]},
  10:{vocab:[{ko:'할아버지',rom:'harabeoji',vi:'ông',pos:'danh từ'},{ko:'할머니',rom:'halmeoni',vi:'bà',pos:'danh từ'},{ko:'아들',rom:'adeul',vi:'con trai',pos:'danh từ'},{ko:'딸',rom:'ttal',vi:'con gái',pos:'danh từ'},{ko:'남편',rom:'nampyeon',vi:'chồng',pos:'danh từ',hanja:'男便',hv:'nam tiện'},{ko:'아내',rom:'anae',vi:'vợ',pos:'danh từ'},{ko:'조카',rom:'joka',vi:'cháu (con của anh chị em)',pos:'danh từ'},{ko:'친척',rom:'chincheok',vi:'họ hàng',pos:'danh từ',hanja:'親戚',hv:'thân thích'}]},
  11:{vocab:[{ko:'비',rom:'bi',vi:'mưa',pos:'danh từ'},{ko:'눈',rom:'nun',vi:'tuyết',pos:'danh từ'},{ko:'우산',rom:'usan',vi:'ô, dù',pos:'danh từ',hanja:'雨傘',hv:'vũ tản'},{ko:'계절',rom:'gyejeol',vi:'mùa',pos:'danh từ',hanja:'季節',hv:'quý tiết'},{ko:'봄',rom:'bom',vi:'mùa xuân',pos:'danh từ'},{ko:'여름',rom:'yeoreum',vi:'mùa hè',pos:'danh từ'},{ko:'가을',rom:'gaeul',vi:'mùa thu',pos:'danh từ'},{ko:'겨울',rom:'gyeoul',vi:'mùa đông',pos:'danh từ'}]},
  12:{vocab:[{ko:'휴대폰',rom:'hyudaepon',vi:'điện thoại di động',pos:'danh từ',hanja:'携帶—',hv:'huề đới'},{ko:'문자',rom:'munja',vi:'tin nhắn',pos:'danh từ',hanja:'文字',hv:'văn tự'},{ko:'메시지',rom:'mesiji',vi:'lời nhắn',pos:'danh từ'},{ko:'목소리',rom:'moksori',vi:'giọng nói',pos:'danh từ'},{ko:'급하다',rom:'geupada',vi:'gấp, vội',pos:'tính từ',hanja:'急—',hv:'cấp'},{ko:'끊다',rom:'kkeunta',vi:'cúp máy',pos:'động từ'},{ko:'받다',rom:'batda',vi:'nghe máy, nhận',pos:'động từ'},{ko:'걸다',rom:'geolda',vi:'gọi (điện)',pos:'động từ'}]},
  13:{vocab:[{ko:'잔치',rom:'janchi',vi:'tiệc, buổi liên hoan',pos:'danh từ'},{ko:'풍선',rom:'pungseon',vi:'bóng bay',pos:'danh từ',hanja:'風船',hv:'phong thuyền'},{ko:'카드',rom:'kadeu',vi:'thiệp, thẻ',pos:'danh từ'},{ko:'꽃',rom:'kkot',vi:'hoa',pos:'danh từ'},{ko:'손님',rom:'sonnim',vi:'khách',pos:'danh từ'},{ko:'모이다',rom:'moida',vi:'tụ họp',pos:'động từ'},{ko:'기쁘다',rom:'gippeuda',vi:'vui mừng',pos:'tính từ'},{ko:'웃다',rom:'utda',vi:'cười',pos:'động từ'}]},
  14:{vocab:[{ko:'노래하다',rom:'noraehada',vi:'hát',pos:'động từ'},{ko:'춤추다',rom:'chumchuda',vi:'nhảy, múa',pos:'động từ'},{ko:'요가',rom:'yoga',vi:'yoga',pos:'danh từ'},{ko:'수영',rom:'suyeong',vi:'bơi lội',pos:'danh từ',hanja:'水泳',hv:'thuỷ vịnh'},{ko:'피아노',rom:'piano',vi:'piano',pos:'danh từ'},{ko:'기타',rom:'gita',vi:'ghi ta',pos:'danh từ'},{ko:'여가',rom:'yeoga',vi:'thời gian rảnh',pos:'danh từ',hanja:'餘暇',hv:'dư hạ'},{ko:'즐기다',rom:'jeulgida',vi:'tận hưởng',pos:'động từ'}]},
  15:{vocab:[{ko:'택시',rom:'taeksi',vi:'taxi',pos:'danh từ'},{ko:'기차',rom:'gicha',vi:'tàu hoả',pos:'danh từ',hanja:'汽車',hv:'khí xa'},{ko:'비행기',rom:'bihaenggi',vi:'máy bay',pos:'danh từ',hanja:'飛行機',hv:'phi hành cơ'},{ko:'배',rom:'bae',vi:'thuyền, tàu',pos:'danh từ'},{ko:'정류장',rom:'jeongnyujang',vi:'trạm (xe buýt)',pos:'danh từ',hanja:'停留場',hv:'đình lưu trường'},{ko:'역',rom:'yeok',vi:'ga, bến',pos:'danh từ',hanja:'驛',hv:'dịch'},{ko:'길',rom:'gil',vi:'đường',pos:'danh từ'},{ko:'횡단보도',rom:'hoengdanbodo',vi:'vạch sang đường',pos:'danh từ',hanja:'橫斷步道',hv:'hoành đoạn bộ đạo'}]}
};

/* ---- Sơ cấp 2: bổ sung (thêm ~13 từ vựng + ~3 ngữ pháp mỗi bài) ---- */
const SC2_EXTRA = {
  1:{grammar:[
      {form:'A/V + (으)ㄴ/는 것 같다',vi:'có vẻ, hình như',note:'Phỏng đoán dựa trên quan sát.',ex:{ko:'한국 생활이 이제 편한 것 같아요.',vi:'Cuộc sống ở Hàn giờ có vẻ thoải mái.'}},
      {form:'N + 처럼',vi:'như, giống',note:'So sánh giống như đối tượng khác.',ex:{ko:'저도 한국 사람처럼 말하고 싶어요.',vi:'Tôi cũng muốn nói như người Hàn.'}},
      {form:'A/V + 아/어지다',vi:'trở nên (biến đổi)',note:'Diễn tả sự thay đổi trạng thái dần dần.',ex:{ko:'한국어가 점점 재미있어졌어요.',vi:'Tiếng Hàn dần trở nên thú vị.'}}],
    vocab:[{ko:'환경',rom:'hwangyeong',vi:'môi trường',pos:'danh từ',hanja:'環境',hv:'hoàn cảnh'},{ko:'변화',rom:'byeonhwa',vi:'sự thay đổi',pos:'danh từ',hanja:'變化',hv:'biến hoá'},{ko:'문화',rom:'munhwa',vi:'văn hoá',pos:'danh từ',hanja:'文化',hv:'văn hoá'},{ko:'예절',rom:'yejeol',vi:'lễ nghi',pos:'danh từ',hanja:'禮節',hv:'lễ tiết'},{ko:'습관',rom:'seupgwan',vi:'thói quen',pos:'danh từ',hanja:'習慣',hv:'tập quán'},{ko:'차이',rom:'chai',vi:'sự khác biệt',pos:'danh từ',hanja:'差異',hv:'sai dị'},{ko:'경험',rom:'gyeongheom',vi:'kinh nghiệm',pos:'danh từ',hanja:'經驗',hv:'kinh nghiệm'},{ko:'적응',rom:'jeogeung',vi:'sự thích nghi',pos:'danh từ',hanja:'適應',hv:'thích ứng'},{ko:'생활비',rom:'saenghwalbi',vi:'chi phí sinh hoạt',pos:'danh từ',hanja:'生活費',hv:'sinh hoạt phí'},{ko:'월세',rom:'wolse',vi:'tiền thuê nhà tháng',pos:'danh từ',hanja:'月貰',hv:'nguyệt thải'},{ko:'이웃',rom:'iut',vi:'hàng xóm',pos:'danh từ'},{ko:'그립다',rom:'geuripda',vi:'nhớ nhung',pos:'tính từ'},{ko:'낫다',rom:'natda',vi:'tốt hơn, khá hơn',pos:'tính từ'}]},
  2:{grammar:[
      {form:'A/V + (으)ㄴ/는데',vi:'... mà, thì (nêu bối cảnh)',note:'Đưa bối cảnh trước khi nói tiếp.',ex:{ko:'이 옷은 예쁜데 좀 비싸요.',vi:'Bộ này đẹp mà hơi đắt.'}},
      {form:'N + 밖에 + (phủ định)',vi:'chỉ có ... (ngoài ra không)',note:'Luôn đi với vị ngữ phủ định.',ex:{ko:'천 원밖에 없어요.',vi:'Tôi chỉ có 1000 won.'}},
      {form:'V + (으)ㄹ게요',vi:'tôi sẽ (hứa)',note:'Ý định gắn với người nghe.',ex:{ko:'제가 계산할게요.',vi:'Để tôi trả tiền.'}}],
    vocab:[{ko:'물건',rom:'mulgeon',vi:'đồ vật, hàng hoá',pos:'danh từ',hanja:'物件',hv:'vật kiện'},{ko:'세일',rom:'seil',vi:'giảm giá (sale)',pos:'danh từ'},{ko:'할인',rom:'harin',vi:'sự chiết khấu',pos:'danh từ',hanja:'割引',hv:'cát dẫn'},{ko:'교환',rom:'gyohwan',vi:'sự đổi (hàng)',pos:'danh từ',hanja:'交換',hv:'giao hoán'},{ko:'환불',rom:'hwanbul',vi:'hoàn tiền',pos:'danh từ',hanja:'還拂',hv:'hoàn phất'},{ko:'영수증',rom:'yeongsujeung',vi:'hoá đơn',pos:'danh từ',hanja:'領收證',hv:'lĩnh thu chứng'},{ko:'품질',rom:'pumjil',vi:'chất lượng',pos:'danh từ',hanja:'品質',hv:'phẩm chất'},{ko:'색깔',rom:'saekkkal',vi:'màu sắc',pos:'danh từ'},{ko:'크기',rom:'keugi',vi:'kích cỡ',pos:'danh từ'},{ko:'신다',rom:'sinda',vi:'đi (giày, tất)',pos:'động từ'},{ko:'입어 보다',rom:'ibeo boda',vi:'mặc thử',pos:'động từ'},{ko:'고르다',rom:'goreuda',vi:'chọn',pos:'động từ'},{ko:'맞다',rom:'matda',vi:'vừa, đúng',pos:'động từ'}]},
  3:{grammar:[
      {form:'V + 아/어야 하다',vi:'phải',note:'Việc bắt buộc phải làm.',ex:{ko:'다음 역에서 내려야 해요.',vi:'Phải xuống ở ga tiếp theo.'}},
      {form:'V + 는 게 좋다',vi:'nên (làm)',note:'Đưa lời khuyên nhẹ nhàng.',ex:{ko:'택시를 타는 게 좋아요.',vi:'Nên đi taxi thì hơn.'}},
      {form:'(으)면 되다',vi:'chỉ cần ... là được',note:'Diễn tả điều kiện đủ.',ex:{ko:'저기에서 갈아타면 돼요.',vi:'Chỉ cần đổi tuyến ở đằng kia là được.'}}],
    vocab:[{ko:'출구',rom:'chulgu',vi:'lối ra',pos:'danh từ',hanja:'出口',hv:'xuất khẩu'},{ko:'입구',rom:'ipgu',vi:'lối vào',pos:'danh từ',hanja:'入口',hv:'nhập khẩu'},{ko:'노선',rom:'noseon',vi:'tuyến (đường)',pos:'danh từ',hanja:'路線',hv:'lộ tuyến'},{ko:'요금',rom:'yogeum',vi:'cước phí',pos:'danh từ',hanja:'料金',hv:'liệu kim'},{ko:'신호등',rom:'sinhodeung',vi:'đèn giao thông',pos:'danh từ',hanja:'信號燈',hv:'tín hiệu đăng'},{ko:'횡단보도',rom:'hoengdanbodo',vi:'vạch sang đường',pos:'danh từ'},{ko:'막히다',rom:'makhida',vi:'tắc, kẹt',pos:'động từ'},{ko:'세우다',rom:'seuda',vi:'dừng (xe)',pos:'động từ'},{ko:'똑바로',rom:'ttokbaro',vi:'thẳng',pos:'trạng từ'},{ko:'건너다',rom:'geonneoda',vi:'băng qua',pos:'động từ'},{ko:'돌아가다',rom:'doraagada',vi:'đi vòng, quay về',pos:'động từ'},{ko:'가깝다',rom:'gakkapda',vi:'gần',pos:'tính từ'},{ko:'멀다',rom:'meolda',vi:'xa',pos:'tính từ'}]},
  4:{grammar:[
      {form:'V + 다가',vi:'đang ... thì',note:'Ngắt hành động để chuyển sang việc khác.',ex:{ko:'자다가 전화를 받았어요.',vi:'Đang ngủ thì nghe điện thoại.'}},
      {form:'A/V + 기 때문에',vi:'vì, do',note:'Nêu lý do (văn phong rõ ràng).',ex:{ko:'열이 나기 때문에 병원에 가요.',vi:'Vì bị sốt nên đi bệnh viện.'}},
      {form:'V + (으)면',vi:'nếu, khi',note:'Điều kiện.',ex:{ko:'많이 아프면 약을 드세요.',vi:'Nếu đau nhiều thì uống thuốc.'}}],
    vocab:[{ko:'목',rom:'mok',vi:'cổ, họng',pos:'danh từ'},{ko:'이',rom:'i',vi:'răng',pos:'danh từ'},{ko:'다리',rom:'dari',vi:'chân',pos:'danh từ'},{ko:'팔',rom:'pal',vi:'cánh tay',pos:'danh từ'},{ko:'콧물',rom:'konmul',vi:'nước mũi, sổ mũi',pos:'danh từ'},{ko:'몸살',rom:'momsal',vi:'ốm mệt, cảm mỏi',pos:'danh từ'},{ko:'환자',rom:'hwanja',vi:'bệnh nhân',pos:'danh từ',hanja:'患者',hv:'hoạn giả'},{ko:'주사',rom:'jusa',vi:'tiêm',pos:'danh từ',hanja:'注射',hv:'chú xạ'},{ko:'낫다',rom:'natda',vi:'khỏi (bệnh)',pos:'động từ'},{ko:'다치다',rom:'dachida',vi:'bị thương',pos:'động từ'},{ko:'참다',rom:'chamda',vi:'chịu đựng',pos:'động từ'},{ko:'건강하다',rom:'geonganghada',vi:'khoẻ mạnh',pos:'tính từ',hanja:'健康—',hv:'kiện khang'},{ko:'피곤하다',rom:'pigonhada',vi:'mệt mỏi',pos:'tính từ',hanja:'疲困—',hv:'bì khốn'}]},
  5:{grammar:[
      {form:'V + (으)ㄹ래요?',vi:'... không? (rủ, hỏi ý)',note:'Hỏi ý muốn của người nghe, thân mật.',ex:{ko:'주말에 같이 영화 볼래요?',vi:'Cuối tuần cùng xem phim không?'}},
      {form:'V + 는 게 어때요?',vi:'... thì thế nào?',note:'Gợi ý nhẹ nhàng.',ex:{ko:'토요일에 만나는 게 어때요?',vi:'Gặp nhau thứ Bảy thì sao?'}},
      {form:'V + 아/어도 되다',vi:'được phép',note:'Xin/cho phép.',ex:{ko:'친구를 데려와도 돼요?',vi:'Dẫn bạn đến có được không?'}}],
    vocab:[{ko:'초대장',rom:'chodaejang',vi:'thiệp mời',pos:'danh từ',hanja:'招待狀',hv:'chiêu đãi trạng'},{ko:'모임',rom:'moim',vi:'buổi họp mặt',pos:'danh từ'},{ko:'약속 시간',rom:'yaksok sigan',vi:'giờ hẹn',pos:'danh từ'},{ko:'장소',rom:'jangso',vi:'địa điểm',pos:'danh từ',hanja:'場所',hv:'trường sở'},{ko:'참석하다',rom:'chamseokhada',vi:'tham dự',pos:'động từ',hanja:'參席—',hv:'tham tịch'},{ko:'미루다',rom:'miruda',vi:'hoãn, dời',pos:'động từ'},{ko:'기다리다',rom:'gidarida',vi:'chờ',pos:'động từ'},{ko:'데리다',rom:'derida',vi:'dẫn (ai) đi',pos:'động từ'},{ko:'약속을 지키다',rom:'yaksogeul jikida',vi:'giữ lời hẹn',pos:'động từ'},{ko:'즐겁다',rom:'jeulgeopda',vi:'vui vẻ',pos:'tính từ'},{ko:'심심하다',rom:'simsimhada',vi:'buồn chán',pos:'tính từ'},{ko:'반갑다',rom:'bangapda',vi:'vui khi gặp',pos:'tính từ'},{ko:'괜찮다',rom:'gwaenchanta',vi:'ổn, không sao',pos:'tính từ'}]},
  6:{grammar:[
      {form:'V + (으)려고 하다',vi:'định (làm)',note:'Ý định của người nói.',ex:{ko:'여름에 제주도에 가려고 해요.',vi:'Mùa hè tôi định đi Jeju.'}},
      {form:'V + 기 전에',vi:'trước khi',note:'Trình tự thời gian.',ex:{ko:'여행 가기 전에 표를 예매해요.',vi:'Trước khi đi du lịch thì đặt vé.'}},
      {form:'N + 동안',vi:'trong (khoảng thời gian)',note:'Khoảng thời gian diễn ra.',ex:{ko:'방학 동안 여행을 했어요.',vi:'Trong kỳ nghỉ tôi đã đi du lịch.'}}],
    vocab:[{ko:'여권',rom:'yeogwon',vi:'hộ chiếu',pos:'danh từ',hanja:'旅券',hv:'lữ khoán'},{ko:'비자',rom:'bija',vi:'visa',pos:'danh từ'},{ko:'항공권',rom:'hanggonggwon',vi:'vé máy bay',pos:'danh từ',hanja:'航空券',hv:'hàng không khoán'},{ko:'호텔',rom:'hotel',vi:'khách sạn',pos:'danh từ'},{ko:'지도',rom:'jido',vi:'bản đồ',pos:'danh từ',hanja:'地圖',hv:'địa đồ'},{ko:'기념품',rom:'ginyeompum',vi:'quà lưu niệm',pos:'danh từ',hanja:'記念品',hv:'kỷ niệm phẩm'},{ko:'풍경',rom:'punggyeong',vi:'phong cảnh',pos:'danh từ',hanja:'風景',hv:'phong cảnh'},{ko:'구경',rom:'gugyeong',vi:'sự tham quan',pos:'danh từ'},{ko:'떠나다',rom:'tteonada',vi:'rời đi, lên đường',pos:'động từ'},{ko:'도착하다',rom:'dochakhada',vi:'đến nơi',pos:'động từ',hanja:'到着—',hv:'đáo trước'},{ko:'머물다',rom:'meomulda',vi:'lưu lại',pos:'động từ'},{ko:'즐겁다',rom:'jeulgeopda',vi:'vui vẻ',pos:'tính từ'},{ko:'유명하다',rom:'yumyeonghada',vi:'nổi tiếng',pos:'tính từ',hanja:'有名—',hv:'hữu danh'}]},
  7:{grammar:[
      {form:'V + 아/어 주시겠어요?',vi:'anh/chị làm ... giúp được không?',note:'Nhờ vả rất lịch sự.',ex:{ko:'천천히 말해 주시겠어요?',vi:'Anh nói chậm giúp tôi được không?'}},
      {form:'V + 는 중이다',vi:'đang trong quá trình',note:'Hành động đang diễn ra.',ex:{ko:'지금 소포를 부치는 중이에요.',vi:'Bây giờ tôi đang gửi bưu kiện.'}},
      {form:'N + 짜리',vi:'loại (mệnh giá, cỡ)',note:'Chỉ đơn vị giá trị hoặc kích cỡ.',ex:{ko:'만 원짜리 지폐가 있어요?',vi:'Có tờ mệnh giá 10000 won không?'}}],
    vocab:[{ko:'창구',rom:'changgu',vi:'quầy giao dịch',pos:'danh từ',hanja:'窓口',hv:'song khẩu'},{ko:'번호표',rom:'beonhopyo',vi:'phiếu số thứ tự',pos:'danh từ',hanja:'番號票',hv:'phiên hiệu phiếu'},{ko:'신청서',rom:'sincheongseo',vi:'đơn đăng ký',pos:'danh từ',hanja:'申請書',hv:'thân thỉnh thư'},{ko:'수수료',rom:'susuryo',vi:'phí dịch vụ',pos:'danh từ',hanja:'手數料',hv:'thủ số liệu'},{ko:'지폐',rom:'jipye',vi:'tiền giấy',pos:'danh từ',hanja:'紙幣',hv:'chỉ tệ'},{ko:'동전',rom:'dongjeon',vi:'tiền xu',pos:'danh từ',hanja:'銅錢',hv:'đồng tiền'},{ko:'주소',rom:'juso',vi:'địa chỉ',pos:'danh từ',hanja:'住所',hv:'trú sở'},{ko:'입금하다',rom:'ipgeumhada',vi:'nộp tiền vào',pos:'động từ',hanja:'入金—',hv:'nhập kim'},{ko:'출금하다',rom:'chulgeumhada',vi:'rút tiền',pos:'động từ',hanja:'出金—',hv:'xuất kim'},{ko:'부치다',rom:'buchida',vi:'gửi (thư, hàng)',pos:'động từ'},{ko:'맡기다',rom:'matgida',vi:'gửi giữ, giao phó',pos:'động từ'},{ko:'찾다',rom:'chatda',vi:'rút, tìm',pos:'động từ'},{ko:'무겁다',rom:'mugeopda',vi:'nặng',pos:'tính từ'}]},
  8:{grammar:[
      {form:'V + (으)ㄹ 계획이다',vi:'có kế hoạch, dự định',note:'Kế hoạch cụ thể.',ex:{ko:'방학에 한국어를 배울 계획이에요.',vi:'Kỳ nghỉ tôi định học tiếng Hàn.'}},
      {form:'V + 자마자',vi:'ngay khi, vừa ... là',note:'Việc sau xảy ra ngay sau việc trước.',ex:{ko:'방학이 시작되자마자 고향에 갔어요.',vi:'Kỳ nghỉ vừa bắt đầu là tôi về quê.'}},
      {form:'V + 는 게 좋겠다',vi:'nên (làm) thì hơn',note:'Lời khuyên/quyết định.',ex:{ko:'좀 쉬는 게 좋겠어요.',vi:'Nên nghỉ một chút thì hơn.'}}],
    vocab:[{ko:'방학',rom:'banghak',vi:'kỳ nghỉ học',pos:'danh từ',hanja:'放學',hv:'phóng học'},{ko:'휴가',rom:'hyuga',vi:'kỳ nghỉ phép',pos:'danh từ',hanja:'休暇',hv:'hưu hạ'},{ko:'계획표',rom:'gyehoekpyo',vi:'bảng kế hoạch',pos:'danh từ'},{ko:'목표',rom:'mokpyo',vi:'mục tiêu',pos:'danh từ',hanja:'目標',hv:'mục tiêu'},{ko:'봉사활동',rom:'bongsahwaldong',vi:'hoạt động tình nguyện',pos:'danh từ',hanja:'奉仕活動',hv:'phụng sĩ hoạt động'},{ko:'학원',rom:'hagwon',vi:'trung tâm (dạy thêm)',pos:'danh từ',hanja:'學院',hv:'học viện'},{ko:'자격증',rom:'jagyeokjeung',vi:'chứng chỉ',pos:'danh từ',hanja:'資格證',hv:'tư cách chứng'},{ko:'계획을 세우다',rom:'gyehoegeul seuda',vi:'lập kế hoạch',pos:'động từ'},{ko:'미루다',rom:'miruda',vi:'trì hoãn',pos:'động từ'},{ko:'실천하다',rom:'silcheonhada',vi:'thực hiện',pos:'động từ',hanja:'實踐—',hv:'thực tiễn'},{ko:'게으르다',rom:'geeureuda',vi:'lười biếng',pos:'tính từ'},{ko:'부지런하다',rom:'bujireonhada',vi:'chăm chỉ, siêng',pos:'tính từ'},{ko:'심심하다',rom:'simsimhada',vi:'buồn chán',pos:'tính từ'}]},
  9:{grammar:[
      {form:'V + 지 말고',vi:'đừng ... mà (hãy)',note:'Phủ định một lựa chọn để chọn cái khác.',ex:{ko:'택시를 타지 말고 지하철을 타세요.',vi:'Đừng đi taxi mà hãy đi tàu điện.'}},
      {form:'V + (으)면 안 되다',vi:'không được (làm)',note:'Cấm, không cho phép.',ex:{ko:'여기에서 사진을 찍으면 안 돼요.',vi:'Không được chụp ảnh ở đây.'}},
      {form:'V + 아/어 보다',vi:'thử (làm)',note:'Thử làm việc gì.',ex:{ko:'이 음식을 한번 먹어 보세요.',vi:'Hãy thử ăn món này một lần.'}}],
    vocab:[{ko:'도움',rom:'doum',vi:'sự giúp đỡ',pos:'danh từ'},{ko:'부탁',rom:'butak',vi:'điều nhờ vả',pos:'danh từ',hanja:'付託',hv:'phó thác'},{ko:'짐',rom:'jim',vi:'hành lý, đồ nặng',pos:'danh từ'},{ko:'들다',rom:'deulda',vi:'nâng, cầm',pos:'động từ'},{ko:'옮기다',rom:'omgida',vi:'chuyển, dời',pos:'động từ'},{ko:'맡기다',rom:'matgida',vi:'nhờ giữ, giao',pos:'động từ'},{ko:'거절하다',rom:'geojeolhada',vi:'từ chối',pos:'động từ',hanja:'拒絶—',hv:'cự tuyệt'},{ko:'허락하다',rom:'heorakhada',vi:'cho phép',pos:'động từ',hanja:'許諾—',hv:'hứa nặc'},{ko:'미안하다',rom:'mianhada',vi:'áy náy, xin lỗi',pos:'tính từ',hanja:'未安—',hv:'vị an'},{ko:'고맙다',rom:'gomapda',vi:'cảm ơn, biết ơn',pos:'tính từ'},{ko:'급하다',rom:'geupada',vi:'gấp',pos:'tính từ',hanja:'急—',hv:'cấp'},{ko:'조용히',rom:'joyonghi',vi:'khẽ, yên lặng',pos:'trạng từ'},{ko:'천천히',rom:'cheoncheonhi',vi:'từ từ, chậm',pos:'trạng từ'}]},
  10:{grammar:[
      {form:'V + (으)ㄴ 지 + (thời gian) + 되다',vi:'đã ... được (bao lâu)',note:'Tính thời gian từ khi bắt đầu một việc.',ex:{ko:'한국에 온 지 이 년이 됐어요.',vi:'Tôi đến Hàn được hai năm rồi.'}},
      {form:'A/V + 게',vi:'(biến thành trạng từ)',note:'Diễn tả cách thức.',ex:{ko:'재미있게 놀았어요.',vi:'Tôi đã chơi rất vui.'}},
      {form:'V + 아/어 보이다',vi:'trông có vẻ',note:'Nhận xét vẻ bề ngoài.',ex:{ko:'오늘 기분이 좋아 보여요.',vi:'Hôm nay trông bạn có vẻ vui.'}}],
    vocab:[{ko:'추억',rom:'chueok',vi:'kỷ niệm',pos:'danh từ',hanja:'追憶',hv:'truy ức'},{ko:'실수',rom:'silsu',vi:'sai sót',pos:'danh từ',hanja:'失手',hv:'thất thủ'},{ko:'기회',rom:'gihoe',vi:'cơ hội',pos:'danh từ',hanja:'機會',hv:'cơ hội'},{ko:'느낌',rom:'neukkim',vi:'cảm giác',pos:'danh từ'},{ko:'감동',rom:'gamdong',vi:'sự xúc động',pos:'danh từ',hanja:'感動',hv:'cảm động'},{ko:'놀랍다',rom:'nollapda',vi:'đáng ngạc nhiên',pos:'tính từ'},{ko:'특별하다',rom:'teukbyeolhada',vi:'đặc biệt',pos:'tính từ',hanja:'特別—',hv:'đặc biệt'},{ko:'즐겁다',rom:'jeulgeopda',vi:'vui vẻ',pos:'tính từ'},{ko:'후회하다',rom:'huhoehada',vi:'hối tiếc',pos:'động từ',hanja:'後悔—',hv:'hậu hối'},{ko:'경험하다',rom:'gyeongheomhada',vi:'trải nghiệm',pos:'động từ',hanja:'經驗—',hv:'kinh nghiệm'},{ko:'잊어버리다',rom:'ijeobeorida',vi:'quên mất',pos:'động từ'},{ko:'느끼다',rom:'neukkida',vi:'cảm thấy',pos:'động từ'},{ko:'처음',rom:'cheoeum',vi:'lần đầu',pos:'danh từ'}]},
  11:{grammar:[
      {form:'V + (으)ㄴ 다음에',vi:'sau khi',note:'Trình tự thời gian (như 은 후에).',ex:{ko:'재료를 씻은 다음에 썰어요.',vi:'Rửa nguyên liệu xong rồi thái.'}},
      {form:'V + 아/어 놓다',vi:'làm sẵn (để đó)',note:'Hoàn tất và giữ trạng thái.',ex:{ko:'국을 미리 끓여 놓았어요.',vi:'Tôi đã nấu sẵn canh.'}},
      {form:'A/V + 는/(으)ㄴ 것 같다',vi:'có vẻ, hình như',note:'Phỏng đoán.',ex:{ko:'조금 싱거운 것 같아요.',vi:'Hình như hơi nhạt.'}}],
    vocab:[{ko:'요리사',rom:'yorisa',vi:'đầu bếp',pos:'danh từ',hanja:'料理師',hv:'liệu lý sư'},{ko:'그릇',rom:'geureut',vi:'bát, đồ đựng',pos:'danh từ'},{ko:'숟가락',rom:'sutgarak',vi:'thìa',pos:'danh từ'},{ko:'젓가락',rom:'jeotgarak',vi:'đũa',pos:'danh từ'},{ko:'냄비',rom:'naembi',vi:'nồi',pos:'danh từ'},{ko:'양념',rom:'yangnyeom',vi:'gia vị',pos:'danh từ'},{ko:'소금',rom:'sogeum',vi:'muối',pos:'danh từ'},{ko:'설탕',rom:'seoltang',vi:'đường',pos:'danh từ',hanja:'雪糖',hv:'tuyết đường'},{ko:'굽다',rom:'gupda',vi:'nướng',pos:'động từ'},{ko:'튀기다',rom:'twigida',vi:'chiên, rán',pos:'động từ'},{ko:'섞다',rom:'seokda',vi:'trộn',pos:'động từ'},{ko:'맵다',rom:'maepda',vi:'cay',pos:'tính từ'},{ko:'뜨겁다',rom:'tteugeopda',vi:'nóng (chạm)',pos:'tính từ'}]},
  12:{grammar:[
      {form:'V + 는데요 / A + (으)ㄴ데요',vi:'... đấy ạ (nói lửng, mềm)',note:'Kết câu mềm mại, để ngỏ.',ex:{ko:'지금 자리에 안 계시는데요.',vi:'Bây giờ (người đó) không có ở chỗ ạ.'}},
      {form:'V + (으)ㄹ까 하다',vi:'định, đang tính (làm)',note:'Ý định chưa chắc chắn.',ex:{ko:'내일 다시 전화할까 해요.',vi:'Tôi đang tính mai gọi lại.'}},
      {form:'A/V + 다고 하다',vi:'nghe nói, bảo rằng',note:'Thuật lại lời người khác.',ex:{ko:'민수 씨가 늦는다고 했어요.',vi:'Min-su bảo sẽ đến muộn.'}}],
    vocab:[{ko:'통화 중',rom:'tonghwa jung',vi:'đang bận máy',pos:'danh từ'},{ko:'부재중',rom:'bujaejung',vi:'cuộc gọi nhỡ',pos:'danh từ',hanja:'不在中',hv:'bất tại trung'},{ko:'음성 메시지',rom:'eumseong mesiji',vi:'tin nhắn thoại',pos:'danh từ'},{ko:'벨소리',rom:'belsori',vi:'nhạc chuông',pos:'danh từ'},{ko:'충전하다',rom:'chungjeonhada',vi:'sạc pin',pos:'động từ',hanja:'充電—',hv:'sung điện'},{ko:'울리다',rom:'ullida',vi:'reo, kêu',pos:'động từ'},{ko:'연결하다',rom:'yeongyeolhada',vi:'kết nối',pos:'động từ',hanja:'連結—',hv:'liên kết'},{ko:'전하다',rom:'jeonhada',vi:'chuyển lời, nhắn',pos:'động từ',hanja:'傳—',hv:'truyền'},{ko:'급하다',rom:'geupada',vi:'gấp',pos:'tính từ',hanja:'急—',hv:'cấp'},{ko:'죄송하다',rom:'joesonghada',vi:'xin lỗi (lịch sự)',pos:'tính từ',hanja:'罪悚—',hv:'tội tủng'},{ko:'잠깐',rom:'jamkkan',vi:'một lát',pos:'trạng từ'},{ko:'이따가',rom:'ittaga',vi:'lát nữa',pos:'trạng từ'},{ko:'혹시',rom:'hoksi',vi:'không biết chừng, liệu',pos:'trạng từ',hanja:'或是',hv:'hoặc thị'}]},
  13:{grammar:[
      {form:'A/V + 는/(으)ㄴ 편이다',vi:'thuộc kiểu, thiên về',note:'Nghiêng về một tính chất.',ex:{ko:'제 동생은 키가 큰 편이에요.',vi:'Em tôi thuộc kiểu cao.'}},
      {form:'A + 아/어 보이다',vi:'trông có vẻ',note:'Nhận xét ngoại hình.',ex:{ko:'그 사람은 친절해 보여요.',vi:'Người đó trông có vẻ tử tế.'}},
      {form:'N + 을/를 닮다',vi:'giống (ai)',note:'Giống nhau về ngoại hình/tính cách.',ex:{ko:'저는 아버지를 닮았어요.',vi:'Tôi giống bố.'}}],
    vocab:[{ko:'얼굴',rom:'eolgul',vi:'khuôn mặt',pos:'danh từ'},{ko:'눈',rom:'nun',vi:'mắt',pos:'danh từ'},{ko:'코',rom:'ko',vi:'mũi',pos:'danh từ'},{ko:'입',rom:'ip',vi:'miệng',pos:'danh từ'},{ko:'머리카락',rom:'meorikarak',vi:'tóc',pos:'danh từ'},{ko:'수염',rom:'suyeom',vi:'râu',pos:'danh từ'},{ko:'뚱뚱하다',rom:'ttungttunghada',vi:'mập',pos:'tính từ'},{ko:'날씬하다',rom:'nalssinhada',vi:'thon thả',pos:'tính từ'},{ko:'귀엽다',rom:'gwiyeopda',vi:'dễ thương',pos:'tính từ'},{ko:'잘생기다',rom:'jalsaenggida',vi:'đẹp trai',pos:'tính từ'},{ko:'성실하다',rom:'seongsilhada',vi:'chăm chỉ, thành thật',pos:'tính từ',hanja:'誠實—',hv:'thành thực'},{ko:'게으르다',rom:'geeureuda',vi:'lười',pos:'tính từ'},{ko:'부지런하다',rom:'bujireonhada',vi:'siêng năng',pos:'tính từ'}]},
  14:{grammar:[
      {form:'N + 마다',vi:'mỗi, cứ (đến)',note:'Sự lặp lại đều đặn.',ex:{ko:'설날마다 고향에 가요.',vi:'Cứ đến Tết là tôi về quê.'}},
      {form:'V + 곤 하다',vi:'thường (làm)',note:'Thói quen lặp lại.',ex:{ko:'명절에 친척들이 모이곤 해요.',vi:'Vào lễ tết họ hàng thường tụ họp.'}},
      {form:'A/V + 는군요 / (으)ㄴ군요',vi:'... thật nhỉ (cảm thán)',note:'Bày tỏ nhận ra, cảm thán.',ex:{ko:'한국 명절이 참 재미있군요.',vi:'Lễ tết Hàn Quốc thú vị thật nhỉ.'}}],
    vocab:[{ko:'명절',rom:'myeongjeol',vi:'ngày lễ tết',pos:'danh từ',hanja:'名節',hv:'danh tiết'},{ko:'전통',rom:'jeontong',vi:'truyền thống',pos:'danh từ',hanja:'傳統',hv:'truyền thống'},{ko:'한복',rom:'hanbok',vi:'hanbok',pos:'danh từ',hanja:'韓服',hv:'Hàn phục'},{ko:'풍습',rom:'pungseup',vi:'phong tục',pos:'danh từ',hanja:'風習',hv:'phong tập'},{ko:'조상',rom:'josang',vi:'tổ tiên',pos:'danh từ',hanja:'祖上',hv:'tổ thượng'},{ko:'예의',rom:'yeui',vi:'lễ nghĩa',pos:'danh từ',hanja:'禮儀',hv:'lễ nghi'},{ko:'선물',rom:'seonmul',vi:'quà',pos:'danh từ',hanja:'膳物',hv:'thiện vật'},{ko:'차리다',rom:'charida',vi:'bày (mâm cỗ)',pos:'động từ'},{ko:'모이다',rom:'moida',vi:'tụ họp',pos:'động từ'},{ko:'지내다',rom:'jinaeda',vi:'trải qua, sống',pos:'động từ'},{ko:'절하다',rom:'jeolhada',vi:'lạy, cúi chào',pos:'động từ'},{ko:'즐기다',rom:'jeulgida',vi:'tận hưởng',pos:'động từ'},{ko:'풍성하다',rom:'pungseonghada',vi:'đầy đủ, sung túc',pos:'tính từ',hanja:'豐盛—',hv:'phong thịnh'}]},
  15:{grammar:[
      {form:'V + 았/었으면 좋겠다',vi:'ước gì, mong rằng',note:'Bày tỏ mong muốn.',ex:{ko:'꿈을 이뤘으면 좋겠어요.',vi:'Ước gì thực hiện được ước mơ.'}},
      {form:'V + (으)려고',vi:'để, nhằm',note:'Mục đích của hành động.',ex:{ko:'통역사가 되려고 한국어를 배워요.',vi:'Tôi học tiếng Hàn để làm phiên dịch.'}},
      {form:'V + 게 되다',vi:'(rốt cuộc) trở nên, được',note:'Kết quả do hoàn cảnh.',ex:{ko:'한국 회사에서 일하게 됐어요.',vi:'Tôi được làm ở công ty Hàn.'}}],
    vocab:[{ko:'장래',rom:'jangnae',vi:'tương lai (sự nghiệp)',pos:'danh từ',hanja:'將來',hv:'tương lai'},{ko:'희망',rom:'huimang',vi:'hy vọng',pos:'danh từ',hanja:'希望',hv:'hi vọng'},{ko:'직장',rom:'jikjang',vi:'nơi làm việc',pos:'danh từ',hanja:'職場',hv:'chức trường'},{ko:'회사원',rom:'hoesawon',vi:'nhân viên công ty',pos:'danh từ',hanja:'會社員',hv:'hội xã viên'},{ko:'의사',rom:'uisa',vi:'bác sĩ',pos:'danh từ',hanja:'醫師',hv:'y sư'},{ko:'선생님',rom:'seonsaengnim',vi:'giáo viên',pos:'danh từ'},{ko:'꿈꾸다',rom:'kkumkkuda',vi:'mơ ước',pos:'động từ'},{ko:'준비하다',rom:'junbihada',vi:'chuẩn bị',pos:'động từ',hanja:'準備—',hv:'chuẩn bị'},{ko:'포기하다',rom:'pogihada',vi:'từ bỏ',pos:'động từ',hanja:'抛棄—',hv:'phao khí'},{ko:'열심히',rom:'yeolsimhi',vi:'chăm chỉ',pos:'trạng từ',hanja:'熱心—',hv:'nhiệt tâm'},{ko:'반드시',rom:'bandeusi',vi:'nhất định',pos:'trạng từ'},{ko:'꾸준히',rom:'kkujunhi',vi:'đều đặn, bền bỉ',pos:'trạng từ'},{ko:'멋지다',rom:'meotjida',vi:'tuyệt, ngầu',pos:'tính từ'}]}
};

/* ---- Trung cấp 1: bổ sung (thêm ~13 từ vựng + ~3 ngữ pháp mỗi bài) ---- */
const TC1_EXTRA = {
  1:{grammar:[
      {form:'V + 다 보면',vi:'nếu cứ (làm) thì',note:'Lặp lại hành động dẫn tới kết quả.',ex:{ko:'살다 보면 좋은 일도 생겨요.',vi:'Sống rồi thì việc tốt cũng đến.'}},
      {form:'A/V + 잖아요',vi:'... mà, còn gì',note:'Nhắc điều đối phương đã biết.',ex:{ko:'새로 시작하는 게 쉽지 않잖아요.',vi:'Bắt đầu lại đâu có dễ.'}},
      {form:'N + 을/를 통해',vi:'thông qua',note:'Phương tiện, con đường.',ex:{ko:'친구를 통해 그 소식을 들었어요.',vi:'Tôi nghe tin đó qua bạn.'}}],
    vocab:[{ko:'변화',rom:'byeonhwa',vi:'sự thay đổi',pos:'danh từ',hanja:'變化',hv:'biến hoá'},{ko:'적응',rom:'jeogeung',vi:'sự thích nghi',pos:'danh từ',hanja:'適應',hv:'thích ứng'},{ko:'긴장',rom:'ginjang',vi:'sự căng thẳng',pos:'danh từ',hanja:'緊張',hv:'khẩn trương'},{ko:'용기',rom:'yonggi',vi:'dũng khí',pos:'danh từ',hanja:'勇氣',hv:'dũng khí'},{ko:'결심',rom:'gyeolsim',vi:'quyết tâm',pos:'danh từ',hanja:'決心',hv:'quyết tâm'},{ko:'출발',rom:'chulbal',vi:'sự khởi đầu, xuất phát',pos:'danh từ',hanja:'出發',hv:'xuất phát'},{ko:'적극적',rom:'jeokgeukjeok',vi:'tích cực',pos:'tính từ',hanja:'積極的',hv:'tích cực đích'},{ko:'익숙해지다',rom:'iksukhaejida',vi:'trở nên quen',pos:'động từ'},{ko:'결심하다',rom:'gyeolsimhada',vi:'quyết tâm',pos:'động từ',hanja:'決心—',hv:'quyết tâm'},{ko:'적응하다',rom:'jeogeunghada',vi:'thích nghi',pos:'động từ',hanja:'適應—',hv:'thích ứng'},{ko:'긴장되다',rom:'ginjangdoeda',vi:'bị căng thẳng',pos:'động từ'},{ko:'설레다',rom:'seolleda',vi:'hồi hộp, xao xuyến',pos:'động từ'},{ko:'낯설다',rom:'natseolda',vi:'lạ lẫm',pos:'tính từ'}]},
  2:{grammar:[
      {form:'A/V + 든지',vi:'dù ... hay',note:'Liệt kê các khả năng, chọn tự do.',ex:{ko:'조용하든지 활발하든지 다 좋아요.',vi:'Trầm hay năng động đều tốt cả.'}},
      {form:'V + 는 척하다',vi:'giả vờ, làm ra vẻ',note:'Hành động giả tạo.',ex:{ko:'모르면서 아는 척해요.',vi:'Không biết mà làm ra vẻ biết.'}},
      {form:'A/V + 기는 하지만',vi:'thì có ... nhưng',note:'Thừa nhận rồi phản bác.',ex:{ko:'착하기는 하지만 좀 느려요.',vi:'Hiền thì có hiền nhưng hơi chậm.'}}],
    vocab:[{ko:'인상',rom:'insang',vi:'ấn tượng',pos:'danh từ',hanja:'印象',hv:'ấn tượng'},{ko:'배려',rom:'baeryo',vi:'sự quan tâm, để ý',pos:'danh từ',hanja:'配慮',hv:'phối lự'},{ko:'예의',rom:'yeui',vi:'lễ nghĩa',pos:'danh từ',hanja:'禮儀',hv:'lễ nghi'},{ko:'거짓말',rom:'geojinmal',vi:'lời nói dối',pos:'danh từ'},{ko:'믿음',rom:'mideum',vi:'sự tin tưởng',pos:'danh từ'},{ko:'솔직하다',rom:'soljikhada',vi:'thẳng thắn',pos:'tính từ',hanja:'率直—',hv:'suất trực'},{ko:'느긋하다',rom:'neugeutada',vi:'điềm tĩnh, thong thả',pos:'tính từ'},{ko:'급하다',rom:'geupada',vi:'nóng vội',pos:'tính từ',hanja:'急—',hv:'cấp'},{ko:'예민하다',rom:'yeminhada',vi:'nhạy cảm',pos:'tính từ',hanja:'銳敏—',hv:'nhuệ mẫn'},{ko:'배려하다',rom:'baeryohada',vi:'quan tâm, để ý',pos:'động từ',hanja:'配慮—',hv:'phối lự'},{ko:'믿다',rom:'mitda',vi:'tin',pos:'động từ'},{ko:'존경하다',rom:'jongyeonghada',vi:'kính trọng',pos:'động từ',hanja:'尊敬—',hv:'tôn kính'},{ko:'대하다',rom:'daehada',vi:'đối xử',pos:'động từ',hanja:'對—',hv:'đối'}]},
  3:{grammar:[
      {form:'V + 았/었어야 했다',vi:'đáng lẽ phải',note:'Hối tiếc vì đã không làm.',ex:{ko:'좀 더 조심했어야 했어요.',vi:'Đáng lẽ phải cẩn thận hơn.'}},
      {form:'A/V + (으)ㄹ 뻔하다',vi:'suýt nữa thì',note:'Việc xấu suýt xảy ra.',ex:{ko:'늦어서 기차를 놓칠 뻔했어요.',vi:'Vì muộn nên suýt lỡ tàu.'}},
      {form:'V + 고 말다',vi:'rốt cuộc đã (ngoài ý muốn)',note:'Kết cục không mong muốn.',ex:{ko:'약속을 잊어버리고 말았어요.',vi:'Rốt cuộc tôi đã quên mất cuộc hẹn.'}}],
    vocab:[{ko:'잘못',rom:'jalmot',vi:'lỗi, sai',pos:'danh từ'},{ko:'반성',rom:'banseong',vi:'sự tự kiểm điểm',pos:'danh từ',hanja:'反省',hv:'phản tỉnh'},{ko:'변명',rom:'byeonmyeong',vi:'sự biện minh',pos:'danh từ',hanja:'辨明',hv:'biện minh'},{ko:'책임',rom:'chaegim',vi:'trách nhiệm',pos:'danh từ',hanja:'責任',hv:'trách nhiệm'},{ko:'오해',rom:'ohae',vi:'sự hiểu lầm',pos:'danh từ',hanja:'誤解',hv:'ngộ giải'},{ko:'후회',rom:'huhoe',vi:'sự hối tiếc',pos:'danh từ',hanja:'後悔',hv:'hậu hối'},{ko:'사과하다',rom:'sagwahada',vi:'xin lỗi',pos:'động từ',hanja:'謝過—',hv:'tạ quá'},{ko:'용서하다',rom:'yongseohada',vi:'tha thứ',pos:'động từ',hanja:'容恕—',hv:'dung thứ'},{ko:'반성하다',rom:'banseonghada',vi:'kiểm điểm',pos:'động từ',hanja:'反省—',hv:'phản tỉnh'},{ko:'실망하다',rom:'silmanghada',vi:'thất vọng',pos:'động từ',hanja:'失望—',hv:'thất vọng'},{ko:'창피하다',rom:'changpihada',vi:'xấu hổ',pos:'tính từ'},{ko:'억울하다',rom:'eogulhada',vi:'oan ức',pos:'tính từ'},{ko:'다행이다',rom:'dahaengida',vi:'may là',pos:'tính từ',hanja:'多幸—',hv:'đa hạnh'}]},
  4:{grammar:[
      {form:'V + 도록 하다',vi:'hãy (cố) làm cho',note:'Khuyên/yêu cầu làm việc gì.',ex:{ko:'매일 운동하도록 하세요.',vi:'Hãy tập thể dục mỗi ngày.'}},
      {form:'A/V + (으)ㄹ수록',vi:'càng ... càng',note:'Mức độ tăng theo nhau.',ex:{ko:'나이가 들수록 건강이 중요해요.',vi:'Càng có tuổi sức khoẻ càng quan trọng.'}},
      {form:'V + 지 않도록',vi:'để không (bị)',note:'Mục đích phòng tránh.',ex:{ko:'감기에 걸리지 않도록 조심하세요.',vi:'Hãy cẩn thận để không bị cảm.'}}],
    vocab:[{ko:'식습관',rom:'sikseupgwan',vi:'thói quen ăn uống',pos:'danh từ',hanja:'食習慣',hv:'thực tập quán'},{ko:'영양',rom:'yeongyang',vi:'dinh dưỡng',pos:'danh từ',hanja:'營養',hv:'dinh dưỡng'},{ko:'체중',rom:'chejung',vi:'cân nặng',pos:'danh từ',hanja:'體重',hv:'thể trọng'},{ko:'질병',rom:'jilbyeong',vi:'bệnh tật',pos:'danh từ',hanja:'疾病',hv:'tật bệnh'},{ko:'예방',rom:'yebang',vi:'sự phòng ngừa',pos:'danh từ',hanja:'豫防',hv:'dự phòng'},{ko:'규칙적',rom:'gyuchikjeok',vi:'đều đặn',pos:'tính từ',hanja:'規則的',hv:'quy tắc đích'},{ko:'꾸준하다',rom:'kkujunhada',vi:'bền bỉ, đều',pos:'tính từ'},{ko:'관리하다',rom:'gwallihada',vi:'quản lý, chăm sóc',pos:'động từ',hanja:'管理—',hv:'quản lý'},{ko:'예방하다',rom:'yebanghada',vi:'phòng ngừa',pos:'động từ',hanja:'豫防—',hv:'dự phòng'},{ko:'회복하다',rom:'hoebokhada',vi:'hồi phục',pos:'động từ',hanja:'回復—',hv:'hồi phục'},{ko:'붓다',rom:'butda',vi:'sưng',pos:'động từ'},{ko:'어지럽다',rom:'eojireopda',vi:'chóng mặt',pos:'tính từ'},{ko:'심하다',rom:'simhada',vi:'nặng, trầm trọng',pos:'tính từ',hanja:'甚—',hv:'thậm'}]},
  5:{grammar:[
      {form:'V + 는 김에',vi:'nhân tiện',note:'Nhân dịp làm việc này thì làm luôn.',ex:{ko:'나가는 김에 편지도 부쳤어요.',vi:'Nhân tiện ra ngoài tôi gửi luôn thư.'}},
      {form:'V + 다가는',vi:'cứ ... thì (sẽ hỏng)',note:'Cảnh báo hậu quả xấu.',ex:{ko:'그렇게 놀다가는 시험에 떨어져요.',vi:'Cứ chơi thế thì trượt thi đấy.'}},
      {form:'A/V + 는 대신에',vi:'thay vì',note:'Thay thế bằng cái khác.',ex:{ko:'게임을 하는 대신에 책을 읽어요.',vi:'Thay vì chơi game thì đọc sách.'}}],
    vocab:[{ko:'취미 생활',rom:'chwimi saenghwal',vi:'đời sống sở thích',pos:'danh từ'},{ko:'동아리',rom:'donari',vi:'câu lạc bộ (trường)',pos:'danh từ'},{ko:'공연',rom:'gongyeon',vi:'buổi biểu diễn',pos:'danh từ',hanja:'公演',hv:'công diễn'},{ko:'전시회',rom:'jeonsihoe',vi:'triển lãm',pos:'danh từ',hanja:'展示會',hv:'triển thị hội'},{ko:'악기',rom:'akgi',vi:'nhạc cụ',pos:'danh từ',hanja:'樂器',hv:'nhạc khí'},{ko:'실력',rom:'sillyeok',vi:'thực lực',pos:'danh từ',hanja:'實力',hv:'thực lực'},{ko:'열중하다',rom:'yeoljunghada',vi:'say mê, tập trung',pos:'động từ',hanja:'熱中—',hv:'nhiệt trung'},{ko:'참여하다',rom:'chamyeohada',vi:'tham gia',pos:'động từ',hanja:'參與—',hv:'tham dự'},{ko:'모으다',rom:'moeuda',vi:'sưu tầm',pos:'động từ'},{ko:'빠지다',rom:'ppajida',vi:'mê mẩn, chìm đắm',pos:'động từ'},{ko:'다양하다',rom:'dayanghada',vi:'đa dạng',pos:'tính từ',hanja:'多樣—',hv:'đa dạng'},{ko:'독특하다',rom:'dokteukhada',vi:'độc đáo',pos:'tính từ',hanja:'獨特—',hv:'độc đặc'},{ko:'지루하다',rom:'jiruhada',vi:'nhàm chán',pos:'tính từ'}]},
  6:{grammar:[
      {form:'V + (으)ㄹ 겸',vi:'kết hợp (mục đích)',note:'Nhiều mục đích cùng lúc.',ex:{ko:'바람도 쐴 겸 산책했어요.',vi:'Tiện hóng gió, tôi đi dạo.'}},
      {form:'N + 에 비해',vi:'so với',note:'So sánh với đối tượng.',ex:{ko:'작년에 비해 물가가 올랐어요.',vi:'So với năm ngoái, vật giá tăng.'}},
      {form:'V + 아/어 있다',vi:'(đang ở trạng thái)',note:'Trạng thái duy trì sau hành động.',ex:{ko:'문이 열려 있어요.',vi:'Cửa đang mở.'}}],
    vocab:[{ko:'일정',rom:'iljeong',vi:'lịch trình',pos:'danh từ',hanja:'日程',hv:'nhật trình'},{ko:'예산',rom:'yesan',vi:'ngân sách',pos:'danh từ',hanja:'豫算',hv:'dự toán'},{ko:'항공편',rom:'hanggongpyeon',vi:'chuyến bay',pos:'danh từ',hanja:'航空便',hv:'hàng không tiện'},{ko:'숙박',rom:'sukbak',vi:'sự lưu trú',pos:'danh từ',hanja:'宿泊',hv:'túc bạc'},{ko:'명소',rom:'myeongso',vi:'danh thắng',pos:'danh từ',hanja:'名所',hv:'danh sở'},{ko:'현지',rom:'hyeonji',vi:'bản địa, tại chỗ',pos:'danh từ',hanja:'現地',hv:'hiện địa'},{ko:'예매하다',rom:'yemaehada',vi:'đặt vé trước',pos:'động từ',hanja:'豫賣—',hv:'dự mại'},{ko:'취소하다',rom:'chwisohada',vi:'huỷ',pos:'động từ',hanja:'取消—',hv:'thủ tiêu'},{ko:'둘러보다',rom:'dulleoboda',vi:'ngắm quanh, dạo xem',pos:'động từ'},{ko:'붐비다',rom:'bumbida',vi:'chật kín, đông nghịt',pos:'động từ'},{ko:'한적하다',rom:'hanjeokhada',vi:'vắng vẻ',pos:'tính từ',hanja:'閑寂—',hv:'nhàn tịch'},{ko:'편리하다',rom:'pyeollihada',vi:'tiện lợi',pos:'tính từ',hanja:'便利—',hv:'tiện lợi'},{ko:'설레다',rom:'seolleda',vi:'háo hức',pos:'động từ'}]},
  7:{grammar:[
      {form:'V + 느라고',vi:'vì mải (nên không)',note:'Nguyên nhân cản trở việc khác.',ex:{ko:'보고서를 쓰느라고 밤을 새웠어요.',vi:'Vì mải viết báo cáo nên tôi thức trắng đêm.'}},
      {form:'V + 아/어 두다',vi:'làm sẵn để đó',note:'Chuẩn bị trước và giữ nguyên.',ex:{ko:'회의 자료를 미리 준비해 뒀어요.',vi:'Tôi đã chuẩn bị sẵn tài liệu họp.'}},
      {form:'A/V + 는 반면에',vi:'trái lại, ngược lại',note:'Hai mặt trái ngược.',ex:{ko:'월급은 많은 반면에 일이 힘들어요.',vi:'Lương cao nhưng công việc lại vất vả.'}}],
    vocab:[{ko:'부서',rom:'buseo',vi:'bộ phận, phòng ban',pos:'danh từ',hanja:'部署',hv:'bộ thự'},{ko:'회의실',rom:'hoeuisil',vi:'phòng họp',pos:'danh từ',hanja:'會議室',hv:'hội nghị thất'},{ko:'보고서',rom:'bogoseo',vi:'báo cáo',pos:'danh từ',hanja:'報告書',hv:'báo cáo thư'},{ko:'출장',rom:'chuljang',vi:'công tác',pos:'danh từ',hanja:'出張',hv:'xuất trương'},{ko:'월급',rom:'wolgeup',vi:'lương tháng',pos:'danh từ',hanja:'月給',hv:'nguyệt cấp'},{ko:'면접',rom:'myeonjeop',vi:'phỏng vấn',pos:'danh từ',hanja:'面接',hv:'diện tiếp'},{ko:'맡다',rom:'matda',vi:'đảm nhận',pos:'động từ'},{ko:'처리하다',rom:'cheorihada',vi:'xử lý',pos:'động từ',hanja:'處理—',hv:'xử lý'},{ko:'제출하다',rom:'jechulhada',vi:'nộp',pos:'động từ',hanja:'提出—',hv:'đề xuất'},{ko:'퇴근하다',rom:'toegeunhada',vi:'tan làm',pos:'động từ',hanja:'退勤—',hv:'thoái cần'},{ko:'바쁘다',rom:'bappeuda',vi:'bận',pos:'tính từ'},{ko:'꼼꼼하다',rom:'kkomkkomhada',vi:'tỉ mỉ',pos:'tính từ'},{ko:'유능하다',rom:'yuneunghada',vi:'có năng lực',pos:'tính từ',hanja:'有能—',hv:'hữu năng'}]},
  8:{grammar:[
      {form:'V + 았/었으면 좋겠다',vi:'ước gì',note:'Bày tỏ mong muốn.',ex:{ko:'빨리 나았으면 좋겠어요.',vi:'Ước gì mau khỏi.'}},
      {form:'A/V + (으)ㄹ 텐데',vi:'chắc là ... (mà)',note:'Phỏng đoán kèm tiếc nuối.',ex:{ko:'지금쯤 도착했을 텐데요.',vi:'Chắc giờ đã đến rồi mà.'}},
      {form:'V + 는 바람에',vi:'vì (ngoài ý muốn)',note:'Nguyên nhân dẫn tới kết quả xấu.',ex:{ko:'갑자기 비가 오는 바람에 늦었어요.',vi:'Vì trời mưa bất chợt nên tôi đến muộn.'}}],
    vocab:[{ko:'감정',rom:'gamjeong',vi:'cảm xúc',pos:'danh từ',hanja:'感情',hv:'cảm tình'},{ko:'기분',rom:'gibun',vi:'tâm trạng',pos:'danh từ',hanja:'氣分',hv:'khí phân'},{ko:'스트레스',rom:'seuteureseu',vi:'căng thẳng',pos:'danh từ'},{ko:'외로움',rom:'oeroum',vi:'sự cô đơn',pos:'danh từ'},{ko:'위로',rom:'wiro',vi:'sự an ủi',pos:'danh từ',hanja:'慰勞',hv:'uý lao'},{ko:'감동하다',rom:'gamdonghada',vi:'xúc động',pos:'động từ',hanja:'感動—',hv:'cảm động'},{ko:'실망하다',rom:'silmanghada',vi:'thất vọng',pos:'động từ',hanja:'失望—',hv:'thất vọng'},{ko:'짜증나다',rom:'jjajeungnada',vi:'bực bội',pos:'động từ'},{ko:'긴장하다',rom:'ginjanghada',vi:'căng thẳng, hồi hộp',pos:'động từ',hanja:'緊張—',hv:'khẩn trương'},{ko:'참다',rom:'chamda',vi:'chịu đựng, nhịn',pos:'động từ'},{ko:'우울하다',rom:'uulhada',vi:'u sầu',pos:'tính từ',hanja:'憂鬱—',hv:'ưu uất'},{ko:'뿌듯하다',rom:'ppudeutada',vi:'mãn nguyện, tự hào',pos:'tính từ'},{ko:'서운하다',rom:'seounhada',vi:'chạnh lòng, tủi',pos:'tính từ'}]},
  9:{grammar:[
      {form:'A/V + 다면서요?',vi:'nghe nói ... phải không?',note:'Xác nhận điều nghe được.',ex:{ko:'한복을 빌려준다면서요?',vi:'Nghe nói bạn cho mượn hanbok phải không?'}},
      {form:'N + 만큼',vi:'bằng, đến mức',note:'So sánh ngang bằng.',ex:{ko:'노력한 만큼 결과가 나와요.',vi:'Nỗ lực đến đâu kết quả đến đó.'}},
      {form:'V + 곤 하다',vi:'thường (làm)',note:'Thói quen lặp lại.',ex:{ko:'설날에 세배를 하곤 해요.',vi:'Tết thường cúi lạy chúc thọ.'}}],
    vocab:[{ko:'세대',rom:'sedae',vi:'thế hệ',pos:'danh từ',hanja:'世代',hv:'thế đại'},{ko:'예절',rom:'yejeol',vi:'lễ nghi',pos:'danh từ',hanja:'禮節',hv:'lễ tiết'},{ko:'풍습',rom:'pungseup',vi:'phong tục',pos:'danh từ',hanja:'風習',hv:'phong tập'},{ko:'전통문화',rom:'jeontongmunhwa',vi:'văn hoá truyền thống',pos:'danh từ',hanja:'傳統文化',hv:'truyền thống văn hoá'},{ko:'유산',rom:'yusan',vi:'di sản',pos:'danh từ',hanja:'遺産',hv:'di sản'},{ko:'존댓말',rom:'jondaenmal',vi:'kính ngữ',pos:'danh từ'},{ko:'물려받다',rom:'mullyeobatda',vi:'thừa kế',pos:'động từ'},{ko:'지키다',rom:'jikida',vi:'giữ gìn',pos:'động từ'},{ko:'전하다',rom:'jeonhada',vi:'truyền lại',pos:'động từ',hanja:'傳—',hv:'truyền'},{ko:'사라지다',rom:'sarajida',vi:'biến mất',pos:'động từ'},{ko:'소중하다',rom:'sojunghada',vi:'quý giá',pos:'tính từ',hanja:'所重—',hv:'sở trọng'},{ko:'다양하다',rom:'dayanghada',vi:'đa dạng',pos:'tính từ',hanja:'多樣—',hv:'đa dạng'},{ko:'독특하다',rom:'dokteukhada',vi:'độc đáo',pos:'tính từ',hanja:'獨特—',hv:'độc đặc'}]},
  10:{grammar:[
      {form:'A/V + 는/(으)ㄴ 데다가',vi:'vừa ... lại còn',note:'Thêm một tính chất cùng chiều.',ex:{ko:'도시는 복잡한 데다가 공기도 나빠요.',vi:'Thành phố vừa đông lại vừa không khí xấu.'}},
      {form:'A/V + 기 마련이다',vi:'lẽ dĩ nhiên, tất nhiên sẽ',note:'Điều đương nhiên xảy ra.',ex:{ko:'사람은 누구나 실수하기 마련이에요.',vi:'Ai cũng có lúc mắc lỗi thôi.'}},
      {form:'N + 에 따라',vi:'tuỳ theo, theo',note:'Phụ thuộc vào yếu tố nào.',ex:{ko:'지역에 따라 문화가 달라요.',vi:'Văn hoá khác nhau tuỳ vùng.'}}],
    vocab:[{ko:'인구',rom:'ingu',vi:'dân số',pos:'danh từ',hanja:'人口',hv:'nhân khẩu'},{ko:'교외',rom:'gyooe',vi:'ngoại ô',pos:'danh từ',hanja:'郊外',hv:'giao ngoại'},{ko:'환경',rom:'hwangyeong',vi:'môi trường',pos:'danh từ',hanja:'環境',hv:'hoàn cảnh'},{ko:'소음',rom:'soeum',vi:'tiếng ồn',pos:'danh từ',hanja:'騷音',hv:'tao âm'},{ko:'여유',rom:'yeoyu',vi:'sự thư thả',pos:'danh từ',hanja:'餘裕',hv:'dư dụ'},{ko:'혜택',rom:'hyetaek',vi:'phúc lợi, ưu đãi',pos:'danh từ',hanja:'惠澤',hv:'huệ trạch'},{ko:'발달하다',rom:'baldalhada',vi:'phát triển',pos:'động từ',hanja:'發達—',hv:'phát đạt'},{ko:'이사하다',rom:'isahada',vi:'chuyển nhà',pos:'động từ',hanja:'移徙—',hv:'di tỉ'},{ko:'붐비다',rom:'bumbida',vi:'chật kín',pos:'động từ'},{ko:'한적하다',rom:'hanjeokhada',vi:'vắng vẻ',pos:'tính từ',hanja:'閑寂—',hv:'nhàn tịch'},{ko:'쾌적하다',rom:'kwaejeokhada',vi:'dễ chịu, thoáng đãng',pos:'tính từ',hanja:'快適—',hv:'khoái thích'},{ko:'복잡하다',rom:'bokjapada',vi:'phức tạp, đông đúc',pos:'tính từ',hanja:'複雜—',hv:'phức tạp'},{ko:'조용하다',rom:'joyonghada',vi:'yên tĩnh',pos:'tính từ'}]},
  11:{grammar:[
      {form:'N + 에 따르면',vi:'theo (nguồn)',note:'Trích dẫn nguồn tin.',ex:{ko:'뉴스에 따르면 내일 눈이 온대요.',vi:'Theo tin thì mai có tuyết.'}},
      {form:'A/V + 는다고 하다',vi:'nghe nói, cho rằng',note:'Thuật lại gián tiếp.',ex:{ko:'경제가 어렵다고 해요.',vi:'Nghe nói kinh tế khó khăn.'}},
      {form:'V + (으)ㄴ/는 데다가',vi:'vừa ... lại còn',note:'Bổ sung thông tin cùng chiều.',ex:{ko:'사건이 복잡한 데다가 심각해요.',vi:'Vụ việc vừa phức tạp lại nghiêm trọng.'}}],
    vocab:[{ko:'기사',rom:'gisa',vi:'bài báo',pos:'danh từ',hanja:'記事',hv:'ký sự'},{ko:'언론',rom:'eollon',vi:'báo chí, truyền thông',pos:'danh từ',hanja:'言論',hv:'ngôn luận'},{ko:'정보',rom:'jeongbo',vi:'thông tin',pos:'danh từ',hanja:'情報',hv:'tình báo'},{ko:'사실',rom:'sasil',vi:'sự thật',pos:'danh từ',hanja:'事實',hv:'sự thực'},{ko:'경제',rom:'gyeongje',vi:'kinh tế',pos:'danh từ',hanja:'經濟',hv:'kinh tế'},{ko:'정치',rom:'jeongchi',vi:'chính trị',pos:'danh từ',hanja:'政治',hv:'chính trị'},{ko:'전하다',rom:'jeonhada',vi:'đưa (tin), truyền',pos:'động từ',hanja:'傳—',hv:'truyền'},{ko:'조사하다',rom:'josahada',vi:'điều tra',pos:'động từ',hanja:'調査—',hv:'điều tra'},{ko:'해결하다',rom:'haegyeolhada',vi:'giải quyết',pos:'động từ',hanja:'解決—',hv:'giải quyết'},{ko:'발생하다',rom:'balsaenghada',vi:'phát sinh',pos:'động từ',hanja:'發生—',hv:'phát sinh'},{ko:'심각하다',rom:'simgakada',vi:'nghiêm trọng',pos:'tính từ',hanja:'深刻—',hv:'thâm khắc'},{ko:'다양하다',rom:'dayanghada',vi:'đa dạng',pos:'tính từ',hanja:'多樣—',hv:'đa dạng'},{ko:'정확하다',rom:'jeonghwakhada',vi:'chính xác',pos:'tính từ',hanja:'正確—',hv:'chính xác'}]},
  12:{grammar:[
      {form:'V + 게 하다',vi:'làm cho, khiến',note:'Câu sai khiến.',ex:{ko:'아이에게 채소를 먹게 해요.',vi:'Cho bọn trẻ ăn rau.'}},
      {form:'V + 도록',vi:'để, sao cho',note:'Mục đích hoặc mức độ.',ex:{ko:'쓰레기를 줄이도록 노력해요.',vi:'Cố gắng để giảm rác.'}},
      {form:'A/V + 기는요',vi:'... gì đâu (phủ nhận nhẹ)',note:'Khiêm tốn phủ nhận lời khen.',ex:{ko:'잘하기는요, 아직 멀었어요.',vi:'Giỏi gì đâu, còn kém lắm.'}}],
    vocab:[{ko:'오염',rom:'oyeom',vi:'ô nhiễm',pos:'danh từ',hanja:'汚染',hv:'ô nhiễm'},{ko:'재활용',rom:'jaehwaryong',vi:'tái chế',pos:'danh từ',hanja:'再活用',hv:'tái hoạt dụng'},{ko:'일회용품',rom:'ilhoeyongpum',vi:'đồ dùng một lần',pos:'danh từ',hanja:'一回用品',hv:'nhất hồi dụng phẩm'},{ko:'분리수거',rom:'bullisugeo',vi:'phân loại rác',pos:'danh từ',hanja:'分離收去',hv:'phân ly thu khứ'},{ko:'대기',rom:'daegi',vi:'không khí, khí quyển',pos:'danh từ',hanja:'大氣',hv:'đại khí'},{ko:'자원',rom:'jawon',vi:'tài nguyên',pos:'danh từ',hanja:'資源',hv:'tư nguyên'},{ko:'절약하다',rom:'jeoryakhada',vi:'tiết kiệm',pos:'động từ',hanja:'節約—',hv:'tiết ước'},{ko:'줄이다',rom:'jurida',vi:'giảm',pos:'động từ'},{ko:'보호하다',rom:'bohohada',vi:'bảo vệ',pos:'động từ',hanja:'保護—',hv:'bảo hộ'},{ko:'실천하다',rom:'silcheonhada',vi:'thực hiện',pos:'động từ',hanja:'實踐—',hv:'thực tiễn'},{ko:'심각하다',rom:'simgakada',vi:'nghiêm trọng',pos:'tính từ',hanja:'深刻—',hv:'thâm khắc'},{ko:'깨끗하다',rom:'kkaekkeutada',vi:'sạch sẽ',pos:'tính từ'},{ko:'친환경',rom:'chinhwangyeong',vi:'thân thiện môi trường',pos:'danh từ',hanja:'親環境',hv:'thân hoàn cảnh'}]},
  13:{grammar:[
      {form:'V + 지 그래요?',vi:'sao không thử ...?',note:'Khuyên nhủ.',ex:{ko:'힘들면 좀 쉬지 그래요?',vi:'Mệt thì sao không nghỉ chút?'}},
      {form:'V + 는 게 낫다',vi:'nên ... thì hơn',note:'So sánh và khuyên.',ex:{ko:'혼자 고민하는 것보다 상담하는 게 나아요.',vi:'Thay vì lo một mình thì nên đi tư vấn.'}},
      {form:'V + 아/어 봤자',vi:'có ... cũng vô ích',note:'Dù làm cũng không thay đổi.',ex:{ko:'지금 후회해 봤자 소용없어요.',vi:'Giờ hối cũng vô ích.'}}],
    vocab:[{ko:'조언',rom:'joeon',vi:'lời khuyên',pos:'danh từ',hanja:'助言',hv:'trợ ngôn'},{ko:'해결책',rom:'haegyeolchaek',vi:'giải pháp',pos:'danh từ',hanja:'解決策',hv:'giải quyết sách'},{ko:'고민거리',rom:'gomingeori',vi:'điều trăn trở',pos:'danh từ'},{ko:'의견',rom:'uigyeon',vi:'ý kiến',pos:'danh từ',hanja:'意見',hv:'ý kiến'},{ko:'입장',rom:'ipjang',vi:'lập trường, quan điểm',pos:'danh từ',hanja:'立場',hv:'lập trường'},{ko:'추천하다',rom:'chucheonhada',vi:'giới thiệu, gợi ý',pos:'động từ',hanja:'推薦—',hv:'thôi tiến'},{ko:'권하다',rom:'gwonhada',vi:'khuyên',pos:'động từ',hanja:'勸—',hv:'khuyến'},{ko:'상담하다',rom:'sangdamhada',vi:'tư vấn',pos:'động từ',hanja:'相談—',hv:'tương đàm'},{ko:'결정하다',rom:'gyeoljeonghada',vi:'quyết định',pos:'động từ',hanja:'決定—',hv:'quyết định'},{ko:'망설이다',rom:'mangseorida',vi:'do dự',pos:'động từ'},{ko:'답답하다',rom:'dapdapada',vi:'bức bối',pos:'tính từ'},{ko:'현명하다',rom:'hyeonmyeonghada',vi:'sáng suốt',pos:'tính từ',hanja:'賢明—',hv:'hiền minh'},{ko:'신중하다',rom:'sinjunghada',vi:'thận trọng',pos:'tính từ',hanja:'愼重—',hv:'thận trọng'}]},
  14:{grammar:[
      {form:'V + 는 대로',vi:'ngay khi, theo',note:'Ngay sau khi việc kia xong.',ex:{ko:'집에 도착하는 대로 연락할게요.',vi:'Đến nhà là tôi liên lạc ngay.'}},
      {form:'A/V + 든지 ... 든지',vi:'dù ... hay ...',note:'Chọn tự do giữa các khả năng.',ex:{ko:'성공하든지 실패하든지 도전할 거예요.',vi:'Dù thành công hay thất bại tôi cũng sẽ thử.'}},
      {form:'V + (으)ㄴ 채로',vi:'giữ nguyên (trạng thái) mà',note:'Duy trì trạng thái khi làm việc khác.',ex:{ko:'불을 켠 채로 잤어요.',vi:'Tôi ngủ mà vẫn để đèn sáng.'}}],
    vocab:[{ko:'노력',rom:'noryeok',vi:'nỗ lực',pos:'danh từ',hanja:'努力',hv:'nỗ lực'},{ko:'과정',rom:'gwajeong',vi:'quá trình',pos:'danh từ',hanja:'過程',hv:'quá trình'},{ko:'결과',rom:'gyeolgwa',vi:'kết quả',pos:'danh từ',hanja:'結果',hv:'kết quả'},{ko:'실패',rom:'silpae',vi:'thất bại',pos:'danh từ',hanja:'失敗',hv:'thất bại'},{ko:'끈기',rom:'kkeungi',vi:'sự kiên trì',pos:'danh từ'},{ko:'교훈',rom:'gyohun',vi:'bài học',pos:'danh từ',hanja:'敎訓',hv:'giáo huấn'},{ko:'극복하다',rom:'geukbokhada',vi:'vượt qua',pos:'động từ',hanja:'克服—',hv:'khắc phục'},{ko:'성장하다',rom:'seongjanghada',vi:'trưởng thành',pos:'động từ',hanja:'成長—',hv:'thành trưởng'},{ko:'포기하다',rom:'pogihada',vi:'bỏ cuộc',pos:'động từ',hanja:'抛棄—',hv:'phao khí'},{ko:'깨닫다',rom:'kkaedatda',vi:'nhận ra',pos:'động từ'},{ko:'꾸준하다',rom:'kkujunhada',vi:'bền bỉ',pos:'tính từ'},{ko:'대단하다',rom:'daedanhada',vi:'phi thường, giỏi',pos:'tính từ'},{ko:'귀중하다',rom:'gwijunghada',vi:'quý báu',pos:'tính từ',hanja:'貴重—',hv:'quý trọng'}]},
  15:{grammar:[
      {form:'V + 고자 하다',vi:'nhằm, muốn (trang trọng)',note:'Ý định, mục đích trang trọng.',ex:{ko:'전문가가 되고자 합니다.',vi:'Tôi mong trở thành chuyên gia.'}},
      {form:'V + (으)ㄹ 뿐만 아니라',vi:'không những ... mà còn',note:'Bổ sung thêm ý.',ex:{ko:'실력이 좋을 뿐만 아니라 성실해요.',vi:'Không những giỏi mà còn chăm chỉ.'}},
      {form:'V + 기로 결심하다',vi:'quyết tâm (làm)',note:'Nhấn mạnh quyết tâm.',ex:{ko:'유학을 가기로 결심했어요.',vi:'Tôi đã quyết tâm đi du học.'}}],
    vocab:[{ko:'목표',rom:'mokpyo',vi:'mục tiêu',pos:'danh từ',hanja:'目標',hv:'mục tiêu'},{ko:'전문가',rom:'jeonmunga',vi:'chuyên gia',pos:'danh từ',hanja:'專門家',hv:'chuyên môn gia'},{ko:'진로',rom:'jillo',vi:'con đường (nghề nghiệp)',pos:'danh từ',hanja:'進路',hv:'tiến lộ'},{ko:'분야',rom:'bunya',vi:'lĩnh vực',pos:'danh từ',hanja:'分野',hv:'phân dã'},{ko:'능력',rom:'neungnyeok',vi:'năng lực',pos:'danh từ',hanja:'能力',hv:'năng lực'},{ko:'취업',rom:'chwieop',vi:'việc làm, xin việc',pos:'danh từ',hanja:'就業',hv:'tựu nghiệp'},{ko:'대학원',rom:'daehagwon',vi:'cao học',pos:'danh từ',hanja:'大學院',hv:'đại học viện'},{ko:'이루다',rom:'iruda',vi:'đạt được',pos:'động từ'},{ko:'준비하다',rom:'junbihada',vi:'chuẩn bị',pos:'động từ',hanja:'準備—',hv:'chuẩn bị'},{ko:'도전하다',rom:'dojeonhada',vi:'thử thách',pos:'động từ',hanja:'挑戰—',hv:'khiêu chiến'},{ko:'꾸준하다',rom:'kkujunhada',vi:'bền bỉ',pos:'tính từ'},{ko:'구체적',rom:'guchejeok',vi:'cụ thể',pos:'tính từ',hanja:'具體的',hv:'cụ thể đích'},{ko:'긍정적',rom:'geungjeongjeok',vi:'tích cực, lạc quan',pos:'tính từ',hanja:'肯定的',hv:'khẳng định đích'}]}
};

mergeExtra('so-cap-1', SC1_EXTRA2);
mergeExtra('so-cap-2', SC2_EXTRA);
mergeExtra('trung-cap-1', TC1_EXTRA);

/* ============================================================
   Câu ví dụ cho các từ chưa có 용례 (LangLab tự soạn, A1–B1).
   Gộp vào từ vựng khoá học: nếu từ chưa có examples thì thêm vào.
   ============================================================ */
const WORD_EXAMPLES = {
  '회사원':[{ko:'저는 회사원입니다.',vi:'Tôi là nhân viên công ty.'}],
  '알다':[{ko:'저는 그 사람을 잘 알아요.',vi:'Tôi biết rõ người đó.'}],
  '인사하다':[{ko:'선생님을 만나면 먼저 인사해요.',vi:'Gặp thầy cô thì chào trước.'}],
  '연필':[{ko:'연필로 이름을 쓰세요.',vi:'Hãy viết tên bằng bút chì.'}],
  '지우개':[{ko:'지우개로 틀린 글자를 지워요.',vi:'Tôi tẩy chữ sai bằng cục tẩy.'}],
  '배우다':[{ko:'저는 한국어를 배워요.',vi:'Tôi học tiếng Hàn.'}],
  '가르치다':[{ko:'선생님이 우리에게 문법을 가르쳐요.',vi:'Thầy dạy chúng tôi ngữ pháp.'}],
  '가다':[{ko:'아침에 학교에 가요.',vi:'Buổi sáng tôi đi học.'}],
  '오다':[{ko:'친구가 우리 집에 왔어요.',vi:'Bạn tôi đã đến nhà tôi.'}],
  '먹다':[{ko:'점심에 비빔밥을 먹었어요.',vi:'Buổi trưa tôi đã ăn cơm trộn.'}],
  '읽다':[{ko:'저는 매일 책을 읽어요.',vi:'Tôi đọc sách mỗi ngày.'}],
  '사다':[{ko:'시장에서 과일을 샀어요.',vi:'Tôi đã mua hoa quả ở chợ.'}],
  '좋다':[{ko:'오늘 날씨가 정말 좋아요.',vi:'Hôm nay thời tiết rất đẹp.'}],
  '많다':[{ko:'주말에는 사람이 많아요.',vi:'Cuối tuần thì đông người.'}],
  '씻다':[{ko:'밥 먹기 전에 손을 씻어요.',vi:'Trước khi ăn thì rửa tay.'}],
  '입다':[{ko:'날씨가 추워서 코트를 입었어요.',vi:'Trời lạnh nên tôi mặc áo khoác.'}],
  '쉬다':[{ko:'일요일에는 집에서 쉬어요.',vi:'Chủ nhật tôi nghỉ ở nhà.'}],
  '청소하다':[{ko:'주말마다 방을 청소해요.',vi:'Cuối tuần nào tôi cũng dọn phòng.'}],
  '세수하다':[{ko:'일어나서 세수를 해요.',vi:'Ngủ dậy tôi rửa mặt.'}],
  '양치하다':[{ko:'밥을 먹은 후에 양치해요.',vi:'Ăn cơm xong thì đánh răng.'}],
  '텔레비전':[{ko:'저녁에 텔레비전을 봐요.',vi:'Buổi tối tôi xem ti vi.'}],
  '달력':[{ko:'벽에 달력이 걸려 있어요.',vi:'Trên tường có treo tờ lịch.'}],
  '그저께':[{ko:'그저께 친구를 만났어요.',vi:'Hôm kia tôi đã gặp bạn.'}],
  '평일':[{ko:'평일에는 회사에 가요.',vi:'Ngày thường tôi đi làm.'}],
  '지난주':[{ko:'지난주에 시험을 봤어요.',vi:'Tuần trước tôi đã thi.'}],
  '다음 주':[{ko:'다음 주에 여행을 갈 거예요.',vi:'Tuần sau tôi sẽ đi du lịch.'}],
  '출발하다':[{ko:'기차가 아홉 시에 출발해요.',vi:'Tàu khởi hành lúc 9 giờ.'}],
  '시작하다':[{ko:'수업이 여덟 시에 시작해요.',vi:'Tiết học bắt đầu lúc 8 giờ.'}],
  '출근하다':[{ko:'아버지는 아침 일찍 출근하세요.',vi:'Bố tôi đi làm từ sáng sớm.'}],
  '퇴근하다':[{ko:'보통 여섯 시에 퇴근해요.',vi:'Tôi thường tan làm lúc 6 giờ.'}],
  '그다음':[{ko:'숙제를 하고 그다음에 잤어요.',vi:'Tôi làm bài tập rồi sau đó đi ngủ.'}],
  '산책하다':[{ko:'저녁에 공원에서 산책해요.',vi:'Buổi tối tôi đi dạo ở công viên.'}],
  '쇼핑하다':[{ko:'주말에 친구하고 쇼핑했어요.',vi:'Cuối tuần tôi đi mua sắm với bạn.'}],
  '여행하다':[{ko:'방학에 부산을 여행했어요.',vi:'Kỳ nghỉ tôi đã đi du lịch Busan.'}],
  '즐겁다':[{ko:'친구들과 즐겁게 놀았어요.',vi:'Tôi đã chơi vui vẻ với bạn bè.'}],
  '특별하다':[{ko:'오늘은 특별한 날이에요.',vi:'Hôm nay là một ngày đặc biệt.'}],
  '놀이공원':[{ko:'아이들은 놀이공원을 좋아해요.',vi:'Bọn trẻ thích công viên giải trí.'}],
  '구경하다':[{ko:'시장에서 여러 가지 물건을 구경했어요.',vi:'Tôi ngắm nhiều thứ đồ ở chợ.'}],
  '싸다':[{ko:'이 가게는 값이 싸요.',vi:'Cửa hàng này giá rẻ.'}],
  '봉투':[{ko:'물건을 봉투에 넣어 주세요.',vi:'Cho đồ vào túi giúp tôi.'}],
  '계산하다':[{ko:'카드로 계산할게요.',vi:'Tôi sẽ thanh toán bằng thẻ.'}],
  '냉면':[{ko:'여름에는 냉면이 시원해요.',vi:'Mùa hè ăn mì lạnh rất mát.'}],
  '맵다':[{ko:'이 음식은 너무 매워요.',vi:'Món này cay quá.'}],
  '짜다':[{ko:'국이 조금 짜요.',vi:'Canh hơi mặn.'}],
  '달다':[{ko:'이 케이크는 아주 달아요.',vi:'Cái bánh này rất ngọt.'}],
  '주문하다':[{ko:'식당에서 불고기를 주문했어요.',vi:'Tôi đã gọi món thịt nướng ở quán.'}],
  '식사하다':[{ko:'가족과 함께 식사해요.',vi:'Tôi dùng bữa cùng gia đình.'}],
  '배고프다':[{ko:'아침을 안 먹어서 배고파요.',vi:'Không ăn sáng nên tôi đói.'}],
  '배부르다':[{ko:'많이 먹어서 배불러요.',vi:'Ăn nhiều nên tôi no.'}],
  '맛없다':[{ko:'이 라면은 맛없어요.',vi:'Mì này không ngon.'}],
  '시키다':[{ko:'커피 두 잔을 시켰어요.',vi:'Tôi đã gọi hai ly cà phê.'}],
  '반찬':[{ko:'한국 식당에는 반찬이 많아요.',vi:'Quán ăn Hàn có nhiều món phụ.'}],
  '생선':[{ko:'저는 고기보다 생선을 좋아해요.',vi:'Tôi thích cá hơn thịt.'}],
  '달걀':[{ko:'아침에 달걀을 두 개 먹었어요.',vi:'Sáng nay tôi ăn hai quả trứng.'}],
  '부엌':[{ko:'어머니가 부엌에서 요리하세요.',vi:'Mẹ tôi nấu ăn trong bếp.'}],
  '거실':[{ko:'가족이 거실에서 텔레비전을 봐요.',vi:'Gia đình xem ti vi ở phòng khách.'}],
  '옷장':[{ko:'옷을 옷장에 넣었어요.',vi:'Tôi để quần áo vào tủ.'}],
  '연세':[{ko:'할머니는 연세가 많으세요.',vi:'Bà tôi đã lớn tuổi.'}],
  '덥다':[{ko:'여름에는 날씨가 더워요.',vi:'Mùa hè thời tiết nóng.'}],
  '춥다':[{ko:'겨울에는 아주 추워요.',vi:'Mùa đông rất lạnh.'}],
  '따뜻하다':[{ko:'봄에는 날씨가 따뜻해요.',vi:'Mùa xuân thời tiết ấm áp.'}],
  '시원하다':[{ko:'바람이 불어서 시원해요.',vi:'Có gió nên mát mẻ.'}],
  '맑다':[{ko:'오늘 하늘이 맑아요.',vi:'Hôm nay trời quang.'}],
  '흐리다':[{ko:'하늘이 흐리고 곧 비가 올 것 같아요.',vi:'Trời âm u, chắc sắp mưa.'}],
  '우산':[{ko:'비가 오니까 우산을 가져가세요.',vi:'Trời mưa nên hãy mang ô đi.'}],
  '전화번호':[{ko:'전화번호를 알려 주세요.',vi:'Cho tôi số điện thoại nhé.'}],
  '걸다':[{ko:'친구에게 전화를 걸었어요.',vi:'Tôi đã gọi điện cho bạn.'}],
  '받다':[{ko:'전화를 받으세요.',vi:'Hãy nghe điện thoại.'}],
  '바꾸다':[{ko:'돈을 한국 돈으로 바꿨어요.',vi:'Tôi đã đổi tiền sang tiền Hàn.'}],
  '잠깐만요':[{ko:'잠깐만요, 금방 갈게요.',vi:'Chờ một chút, tôi đến ngay.'}],
  '끊다':[{ko:'통화가 끝나서 전화를 끊었어요.',vi:'Nói xong tôi cúp máy.'}],
  '부탁하다':[{ko:'선생님께 부탁을 하나 했어요.',vi:'Tôi nhờ thầy một việc.'}],
  '바쁘다':[{ko:'요즘 일이 많아서 바빠요.',vi:'Dạo này nhiều việc nên tôi bận.'}],
  '나중에':[{ko:'지금 바쁘니까 나중에 이야기해요.',vi:'Giờ bận nên nói chuyện sau nhé.'}],
  '급하다':[{ko:'급한 일이 생겼어요.',vi:'Có việc gấp xảy ra.'}],
  '축하하다':[{ko:'생일을 축하해요!',vi:'Chúc mừng sinh nhật!'}],
  '초대하다':[{ko:'친구들을 집에 초대했어요.',vi:'Tôi đã mời bạn bè đến nhà.'}],
  '노래하다':[{ko:'우리는 함께 노래했어요.',vi:'Chúng tôi cùng hát.'}],
  '잔치':[{ko:'생일 잔치에 사람이 많이 왔어요.',vi:'Tiệc sinh nhật có nhiều người đến.'}],
  '풍선':[{ko:'파티를 위해 풍선을 준비했어요.',vi:'Tôi chuẩn bị bóng bay cho bữa tiệc.'}],
  '기쁘다':[{ko:'시험에 합격해서 기뻐요.',vi:'Tôi vui vì đã đỗ kỳ thi.'}],
  '웃다':[{ko:'그 이야기를 듣고 모두 웃었어요.',vi:'Nghe chuyện đó ai cũng cười.'}],
  '못하다':[{ko:'저는 수영을 못해요.',vi:'Tôi không biết bơi.'}],
  '듣다':[{ko:'음악을 들으면서 공부해요.',vi:'Tôi vừa nghe nhạc vừa học.'}],
  '독서':[{ko:'제 취미는 독서예요.',vi:'Sở thích của tôi là đọc sách.'}],
  '춤추다':[{ko:'파티에서 신나게 춤췄어요.',vi:'Ở bữa tiệc tôi nhảy rất vui.'}],
  '요가':[{ko:'아침마다 요가를 해요.',vi:'Sáng nào tôi cũng tập yoga.'}],
  '여가':[{ko:'여가 시간에 영화를 봐요.',vi:'Lúc rảnh tôi xem phim.'}],
  '즐기다':[{ko:'저는 여행을 즐겨요.',vi:'Tôi thích tận hưởng du lịch.'}],
  '정류장':[{ko:'버스 정류장에서 기다렸어요.',vi:'Tôi chờ ở trạm xe buýt.'}],
  '타다':[{ko:'저는 지하철을 타고 학교에 가요.',vi:'Tôi đi tàu điện đến trường.'}],
  '내리다':[{ko:'다음 역에서 내리세요.',vi:'Hãy xuống ở ga tiếp theo.'}],
  '걸어서':[{ko:'학교가 가까워서 걸어서 가요.',vi:'Trường gần nên tôi đi bộ.'}],
  '빠르다':[{ko:'지하철이 버스보다 빨라요.',vi:'Tàu điện nhanh hơn xe buýt.'}],
  '느리다':[{ko:'이 컴퓨터는 너무 느려요.',vi:'Máy tính này chậm quá.'}],
  '횡단보도':[{ko:'횡단보도에서 길을 건너세요.',vi:'Hãy sang đường ở vạch qua đường.'}],
  '적응하다':[{ko:'한국 생활에 잘 적응했어요.',vi:'Tôi đã thích nghi tốt với cuộc sống ở Hàn.'}],
  '익숙하다':[{ko:'이제 이 일이 익숙해요.',vi:'Giờ tôi đã quen công việc này.'}],
  '낯설다':[{ko:'처음에는 모든 것이 낯설었어요.',vi:'Lúc đầu mọi thứ đều lạ lẫm.'}],
  '편하다':[{ko:'이 신발이 아주 편해요.',vi:'Đôi giày này rất thoải mái.'}],
  '불편하다':[{ko:'교통이 불편해서 힘들어요.',vi:'Giao thông bất tiện nên vất vả.'}],
  '생활비':[{ko:'서울은 생활비가 비싸요.',vi:'Seoul chi phí sinh hoạt đắt.'}],
  '월세':[{ko:'매달 월세를 내요.',vi:'Hằng tháng tôi trả tiền thuê nhà.'}],
  '그립다':[{ko:'고향이 정말 그리워요.',vi:'Tôi rất nhớ quê hương.'}],
  '낫다':[{ko:'약을 먹고 감기가 나았어요.',vi:'Uống thuốc rồi tôi khỏi cảm.'}],
  '깎다':[{ko:'값을 조금 깎아 주세요.',vi:'Bớt giá cho tôi một chút.'}],
  '세일':[{ko:'백화점에서 세일을 해요.',vi:'Trung tâm thương mại đang giảm giá.'}],
  '환불':[{ko:'옷이 작아서 환불했어요.',vi:'Áo nhỏ nên tôi đã hoàn tiền.'}],
  '영수증':[{ko:'영수증을 꼭 챙기세요.',vi:'Nhớ giữ hoá đơn nhé.'}],
  '고르다':[{ko:'마음에 드는 것을 고르세요.',vi:'Hãy chọn cái bạn thích.'}],
  '맞다':[{ko:'이 답이 맞아요.',vi:'Đáp án này đúng.'}],
  '신호등':[{ko:'신호등이 빨간색이면 멈추세요.',vi:'Đèn đỏ thì hãy dừng lại.'}],
  '막히다':[{ko:'출근 시간에는 길이 막혀요.',vi:'Giờ đi làm thì đường tắc.'}],
  '세우다':[{ko:'여기에 차를 세우지 마세요.',vi:'Đừng đỗ xe ở đây.'}],
  '똑바로':[{ko:'이 길로 똑바로 가세요.',vi:'Hãy đi thẳng theo đường này.'}],
  '건너다':[{ko:'조심해서 길을 건너세요.',vi:'Hãy cẩn thận khi qua đường.'}],
  '돌아가다':[{ko:'길이 막혀서 돌아갔어요.',vi:'Đường tắc nên tôi đi vòng.'}],
  '가깝다':[{ko:'우리 집은 학교에서 가까워요.',vi:'Nhà tôi gần trường.'}],
  '멀다':[{ko:'회사가 집에서 멀어요.',vi:'Công ty xa nhà tôi.'}],
  '기침':[{ko:'감기에 걸려서 기침이 나요.',vi:'Bị cảm nên tôi ho.'}],
  '약국':[{ko:'약국에서 감기약을 샀어요.',vi:'Tôi mua thuốc cảm ở hiệu thuốc.'}],
  '콧물':[{ko:'콧물이 나고 목이 아파요.',vi:'Tôi sổ mũi và đau họng.'}],
  '몸살':[{ko:'몸살이 나서 하루 종일 쉬었어요.',vi:'Bị ốm mệt nên tôi nghỉ cả ngày.'}],
  '다치다':[{ko:'운동하다가 다리를 다쳤어요.',vi:'Đang tập thể dục thì tôi bị đau chân.'}],
  '참다':[{ko:'아파도 잘 참았어요.',vi:'Dù đau tôi vẫn chịu đựng tốt.'}],
  '건강하다':[{ko:'운동을 해서 건강해요.',vi:'Nhờ tập thể dục nên tôi khoẻ.'}],
  '피곤하다':[{ko:'일이 많아서 피곤해요.',vi:'Nhiều việc nên tôi mệt.'}],
  '늦다':[{ko:'버스를 놓쳐서 늦었어요.',vi:'Lỡ xe buýt nên tôi đến muộn.'}],
  '취소하다':[{ko:'약속을 취소했어요.',vi:'Tôi đã huỷ cuộc hẹn.'}],
  '초대장':[{ko:'결혼식 초대장을 받았어요.',vi:'Tôi nhận được thiệp mời đám cưới.'}],
  '약속':[{ko:'오후에 친구와 약속이 있어요.',vi:'Chiều tôi có hẹn với bạn.'}],
  '시간':[{ko:'지금 시간이 없어요.',vi:'Bây giờ tôi không có thời gian.'}],
  '참석하다':[{ko:'회의에 참석했어요.',vi:'Tôi đã tham dự cuộc họp.'}],
  '미루다':[{ko:'숙제를 내일로 미뤘어요.',vi:'Tôi hoãn bài tập đến ngày mai.'}],
  '기다리다':[{ko:'역에서 친구를 기다려요.',vi:'Tôi chờ bạn ở ga.'}],
  '데리다':[{ko:'동생을 학교에 데려다줬어요.',vi:'Tôi đưa em đến trường.'}],
  '약속을 지키다':[{ko:'약속을 꼭 지키세요.',vi:'Hãy giữ đúng lời hẹn.'}],
  '심심하다':[{ko:'혼자 있으니까 심심해요.',vi:'Ở một mình nên tôi buồn chán.'}],
  '예약하다':[{ko:'식당을 미리 예약했어요.',vi:'Tôi đã đặt bàn trước ở quán.'}],
  '유명하다':[{ko:'이 식당은 아주 유명해요.',vi:'Quán này rất nổi tiếng.'}],
  '비자':[{ko:'유학 비자를 받았어요.',vi:'Tôi đã nhận được visa du học.'}],
  '항공권':[{ko:'인터넷으로 항공권을 샀어요.',vi:'Tôi mua vé máy bay qua mạng.'}],
  '기념품':[{ko:'여행지에서 기념품을 샀어요.',vi:'Tôi mua quà lưu niệm ở nơi du lịch.'}],
  '떠나다':[{ko:'내일 아침에 여행을 떠나요.',vi:'Sáng mai tôi lên đường du lịch.'}],
  '머물다':[{ko:'호텔에서 삼 일 동안 머물렀어요.',vi:'Tôi ở khách sạn ba ngày.'}],
  '우체국':[{ko:'우체국에서 편지를 부쳤어요.',vi:'Tôi gửi thư ở bưu điện.'}],
  '우표':[{ko:'편지에 우표를 붙였어요.',vi:'Tôi dán tem lên thư.'}],
  '통장':[{ko:'은행에서 통장을 만들었어요.',vi:'Tôi mở sổ tài khoản ở ngân hàng.'}],
  '창구':[{ko:'삼 번 창구로 가세요.',vi:'Hãy đến quầy số 3.'}],
  '번호표':[{ko:'번호표를 뽑고 기다리세요.',vi:'Hãy lấy số thứ tự rồi chờ.'}],
  '신청서':[{ko:'여기에 신청서를 쓰세요.',vi:'Hãy điền đơn đăng ký ở đây.'}],
  '수수료':[{ko:'송금하면 수수료가 있어요.',vi:'Chuyển tiền thì có phí.'}],
  '동전':[{ko:'주머니에 동전이 있어요.',vi:'Trong túi tôi có tiền xu.'}],
  '입금하다':[{ko:'통장에 돈을 입금했어요.',vi:'Tôi đã nộp tiền vào tài khoản.'}],
  '출금하다':[{ko:'현금을 조금 출금했어요.',vi:'Tôi rút một ít tiền mặt.'}],
  '맡기다':[{ko:'가방을 잠깐 맡겼어요.',vi:'Tôi gửi túi một lát.'}],
  '찾다':[{ko:'은행에서 돈을 찾았어요.',vi:'Tôi rút tiền ở ngân hàng.'}],
  '무겁다':[{ko:'가방이 너무 무거워요.',vi:'Cái túi nặng quá.'}],
  '계획표':[{ko:'방학 계획표를 만들었어요.',vi:'Tôi lập bảng kế hoạch kỳ nghỉ.'}],
  '봉사활동':[{ko:'주말에 봉사활동을 해요.',vi:'Cuối tuần tôi làm tình nguyện.'}],
  '자격증':[{ko:'한국어 자격증을 따고 싶어요.',vi:'Tôi muốn lấy chứng chỉ tiếng Hàn.'}],
  '계획을 세우다':[{ko:'여행 계획을 세웠어요.',vi:'Tôi đã lên kế hoạch du lịch.'}],
  '실천하다':[{ko:'계획을 꾸준히 실천해요.',vi:'Tôi thực hiện kế hoạch đều đặn.'}],
  '게으르다':[{ko:'저는 가끔 게을러요.',vi:'Thỉnh thoảng tôi lười.'}],
  '부지런하다':[{ko:'그 사람은 아주 부지런해요.',vi:'Người đó rất siêng năng.'}],
  '돕다':[{ko:'친구가 이사를 도와줬어요.',vi:'Bạn tôi giúp tôi chuyển nhà.'}],
  '빌려주다':[{ko:'책을 좀 빌려주세요.',vi:'Cho tôi mượn sách nhé.'}],
  '열다':[{ko:'창문을 좀 열어 주세요.',vi:'Mở cửa sổ giúp tôi nhé.'}],
  '닫다':[{ko:'추우니까 문을 닫으세요.',vi:'Lạnh nên hãy đóng cửa.'}],
  '켜다':[{ko:'어두우니까 불을 켜세요.',vi:'Tối nên hãy bật đèn.'}],
  '끄다':[{ko:'나갈 때 불을 꺼요.',vi:'Khi ra ngoài thì tắt đèn.'}],
  '들다':[{ko:'무거운 짐을 들었어요.',vi:'Tôi xách hành lý nặng.'}],
  '옮기다':[{ko:'책상을 창문 옆으로 옮겼어요.',vi:'Tôi chuyển bàn sang cạnh cửa sổ.'}],
  '거절하다':[{ko:'미안하지만 부탁을 거절했어요.',vi:'Xin lỗi nhưng tôi đã từ chối lời nhờ.'}],
  '허락하다':[{ko:'부모님이 여행을 허락하셨어요.',vi:'Bố mẹ cho phép tôi đi du lịch.'}],
  '고맙다':[{ko:'도와주셔서 고맙습니다.',vi:'Cảm ơn vì đã giúp đỡ.'}],
  '잊다':[{ko:'약속을 깜빡 잊었어요.',vi:'Tôi lỡ quên mất cuộc hẹn.'}],
  '기억하다':[{ko:'그 날을 아직도 기억해요.',vi:'Tôi vẫn nhớ ngày hôm đó.'}],
  '무섭다':[{ko:'이 영화는 조금 무서워요.',vi:'Phim này hơi đáng sợ.'}],
  '신기하다':[{ko:'한국의 지하철이 신기했어요.',vi:'Tàu điện ở Hàn thật thú vị.'}],
  '놀라다':[{ko:'갑작스러운 소식에 놀랐어요.',vi:'Tôi ngạc nhiên vì tin bất ngờ.'}],
  '후회하다':[{ko:'공부를 안 해서 후회해요.',vi:'Tôi hối tiếc vì đã không học.'}],
  '경험하다':[{ko:'한국에서 많은 것을 경험했어요.',vi:'Tôi đã trải nghiệm nhiều điều ở Hàn.'}],
  '느끼다':[{ko:'따뜻한 정을 느꼈어요.',vi:'Tôi cảm nhận được tình cảm ấm áp.'}],
  '요리하다':[{ko:'주말에 직접 요리해요.',vi:'Cuối tuần tôi tự nấu ăn.'}],
  '넣다':[{ko:'커피에 설탕을 넣었어요.',vi:'Tôi cho đường vào cà phê.'}],
  '썰다':[{ko:'채소를 잘게 썰었어요.',vi:'Tôi thái rau nhỏ.'}],
  '끓이다':[{ko:'물을 끓여서 차를 만들어요.',vi:'Đun nước sôi để pha trà.'}],
  '볶다':[{ko:'밥을 볶아서 볶음밥을 만들어요.',vi:'Tôi xào cơm thành cơm rang.'}],
  '싱겁다':[{ko:'국이 조금 싱거워요.',vi:'Canh hơi nhạt.'}],
  '요리사':[{ko:'그는 유명한 요리사예요.',vi:'Anh ấy là đầu bếp nổi tiếng.'}],
  '숟가락':[{ko:'숟가락으로 밥을 먹어요.',vi:'Tôi ăn cơm bằng thìa.'}],
  '젓가락':[{ko:'젓가락으로 반찬을 집어요.',vi:'Tôi gắp món ăn bằng đũa.'}],
  '냄비':[{ko:'냄비에 국을 끓여요.',vi:'Tôi nấu canh trong nồi.'}],
  '양념':[{ko:'양념을 넣으니까 더 맛있어요.',vi:'Cho gia vị vào thì ngon hơn.'}],
  '굽다':[{ko:'고기를 맛있게 구웠어요.',vi:'Tôi nướng thịt rất ngon.'}],
  '튀기다':[{ko:'감자를 기름에 튀겼어요.',vi:'Tôi chiên khoai tây trong dầu.'}],
  '섞다':[{ko:'재료를 잘 섞으세요.',vi:'Hãy trộn đều nguyên liệu.'}],
  '뜨겁다':[{ko:'국이 뜨거우니까 조심하세요.',vi:'Canh nóng nên hãy cẩn thận.'}],
  '전화하다':[{ko:'저녁에 어머니께 전화했어요.',vi:'Buổi tối tôi gọi điện cho mẹ.'}],
  '통화 중':[{ko:'지금 통화 중이라서 못 받아요.',vi:'Giờ đang bận máy nên không nghe được.'}],
  '부재중':[{ko:'부재중 전화가 세 통 있어요.',vi:'Có ba cuộc gọi nhỡ.'}],
  '음성 메시지':[{ko:'음성 메시지를 남겼어요.',vi:'Tôi đã để lại tin nhắn thoại.'}],
  '벨소리':[{ko:'벨소리가 크게 울렸어요.',vi:'Nhạc chuông reo to.'}],
  '충전하다':[{ko:'휴대폰을 충전해야 해요.',vi:'Tôi phải sạc điện thoại.'}],
  '울리다':[{ko:'전화벨이 울려요.',vi:'Chuông điện thoại reo.'}],
  '연결하다':[{ko:'담당자에게 전화를 연결해 드릴게요.',vi:'Tôi sẽ nối máy đến người phụ trách.'}],
  '죄송하다':[{ko:'늦어서 죄송합니다.',vi:'Xin lỗi vì đã đến muộn.'}],
  '크다':[{ko:'이 집은 아주 커요.',vi:'Ngôi nhà này rất to.'}],
  '작다':[{ko:'신발이 조금 작아요.',vi:'Đôi giày hơi nhỏ.'}],
  '닮다':[{ko:'저는 어머니를 닮았어요.',vi:'Tôi giống mẹ.'}],
  '뚱뚱하다':[{ko:'요즘 살이 쪄서 조금 뚱뚱해요.',vi:'Dạo này lên cân nên tôi hơi mập.'}],
  '날씬하다':[{ko:'그 사람은 키가 크고 날씬해요.',vi:'Người đó cao và thon thả.'}],
  '귀엽다':[{ko:'강아지가 정말 귀여워요.',vi:'Con cún dễ thương quá.'}],
  '잘생기다':[{ko:'그 배우는 아주 잘생겼어요.',vi:'Diễn viên đó rất đẹp trai.'}],
  '성실하다':[{ko:'그는 성실해서 일을 잘해요.',vi:'Anh ấy chăm chỉ nên làm việc tốt.'}],
  '송편':[{ko:'추석에는 송편을 먹어요.',vi:'Trung thu thì ăn bánh songpyeon.'}],
  '풍습':[{ko:'나라마다 풍습이 달라요.',vi:'Mỗi nước có phong tục khác nhau.'}],
  '조상':[{ko:'명절에 조상에게 차례를 지내요.',vi:'Ngày lễ thì cúng tổ tiên.'}],
  '차리다':[{ko:'명절에 음식을 많이 차렸어요.',vi:'Ngày lễ tôi bày nhiều món ăn.'}],
  '풍성하다':[{ko:'추석에는 음식이 풍성해요.',vi:'Trung thu thì đồ ăn dồi dào.'}],
  '되다':[{ko:'저는 의사가 되고 싶어요.',vi:'Tôi muốn trở thành bác sĩ.'}],
  '취직하다':[{ko:'졸업 후에 회사에 취직했어요.',vi:'Sau khi tốt nghiệp tôi xin được việc.'}],
  '장래':[{ko:'장래에 통역사가 되고 싶어요.',vi:'Sau này tôi muốn làm phiên dịch.'}],
  '꿈꾸다':[{ko:'저는 큰 꿈을 꿔요.',vi:'Tôi mơ một ước mơ lớn.'}],
  '포기하다':[{ko:'힘들어도 포기하지 마세요.',vi:'Dù khó cũng đừng bỏ cuộc.'}],
  '멋지다':[{ko:'경치가 정말 멋져요.',vi:'Phong cảnh thật tuyệt.'}],
  '새롭다':[{ko:'새로운 친구를 사귀었어요.',vi:'Tôi kết bạn mới.'}],
  '소개하다':[{ko:'친구를 소개해 줄게요.',vi:'Tôi sẽ giới thiệu bạn cho.'}],
  '이사하다':[{ko:'다음 달에 서울로 이사해요.',vi:'Tháng sau tôi chuyển đến Seoul.'}],
  '만족하다':[{ko:'지금 생활에 만족해요.',vi:'Tôi hài lòng với cuộc sống hiện tại.'}],
  '기대하다':[{ko:'여행을 많이 기대하고 있어요.',vi:'Tôi rất mong chờ chuyến đi.'}],
  '적극적':[{ko:'그는 매사에 적극적이에요.',vi:'Anh ấy tích cực trong mọi việc.'}],
  '익숙해지다':[{ko:'매일 하다 보니 익숙해졌어요.',vi:'Làm mỗi ngày nên tôi quen dần.'}],
  '결심하다':[{ko:'담배를 끊기로 결심했어요.',vi:'Tôi quyết tâm bỏ thuốc.'}],
  '긴장되다':[{ko:'면접 때문에 긴장돼요.',vi:'Tôi hồi hộp vì buổi phỏng vấn.'}],
  '설레다':[{ko:'여행 생각에 마음이 설레요.',vi:'Nghĩ đến chuyến đi lòng tôi xao xuyến.'}],
  '솔직하다':[{ko:'그는 언제나 솔직해요.',vi:'Anh ấy lúc nào cũng thẳng thắn.'}],
  '이해하다':[{ko:'선생님 설명을 잘 이해했어요.',vi:'Tôi hiểu rõ lời thầy giảng.'}],
  '오해하다':[{ko:'제 말을 오해하지 마세요.',vi:'Đừng hiểu lầm lời tôi.'}],
  '다투다':[{ko:'친구와 사소한 일로 다퉜어요.',vi:'Tôi cãi nhau với bạn vì chuyện nhỏ.'}],
  '화해하다':[{ko:'다음 날 친구와 화해했어요.',vi:'Hôm sau tôi làm hoà với bạn.'}],
  '느긋하다':[{ko:'그는 성격이 느긋해요.',vi:'Tính anh ấy thong thả.'}],
  '예민하다':[{ko:'저는 소리에 예민해요.',vi:'Tôi nhạy cảm với tiếng động.'}],
  '배려하다':[{ko:'항상 다른 사람을 배려해요.',vi:'Tôi luôn quan tâm đến người khác.'}],
  '믿다':[{ko:'저는 친구를 믿어요.',vi:'Tôi tin bạn mình.'}],
  '존경하다':[{ko:'저는 부모님을 존경해요.',vi:'Tôi kính trọng bố mẹ.'}],
  '대하다':[{ko:'손님을 친절하게 대해요.',vi:'Tôi đối xử tử tế với khách.'}],
  '사과하다':[{ko:'잘못을 하고 바로 사과했어요.',vi:'Làm sai tôi liền xin lỗi.'}],
  '용서하다':[{ko:'친구의 실수를 용서했어요.',vi:'Tôi tha thứ lỗi của bạn.'}],
  '반성하다':[{ko:'제 잘못을 반성했어요.',vi:'Tôi tự kiểm điểm lỗi của mình.'}],
  '깜빡하다':[{ko:'우산을 깜빡하고 안 가져왔어요.',vi:'Tôi lỡ quên không mang ô.'}],
  '놓치다':[{ko:'버스를 놓쳐서 늦었어요.',vi:'Lỡ xe buýt nên tôi trễ.'}],
  '다행이다':[{ko:'크게 안 다쳐서 다행이에요.',vi:'May là không bị thương nặng.'}],
  '변명':[{ko:'변명하지 말고 사실대로 말하세요.',vi:'Đừng biện minh mà hãy nói thật.'}],
  '실망하다':[{ko:'결과를 보고 실망했어요.',vi:'Xem kết quả tôi thất vọng.'}],
  '창피하다':[{ko:'사람들 앞에서 넘어져서 창피했어요.',vi:'Ngã trước mọi người nên tôi xấu hổ.'}],
  '억울하다':[{ko:'제 잘못이 아닌데 억울해요.',vi:'Không phải lỗi tôi mà tôi thấy oan.'}],
  '관리하다':[{ko:'건강을 잘 관리하세요.',vi:'Hãy chăm sóc sức khoẻ tốt.'}],
  '식습관':[{ko:'좋은 식습관을 가지세요.',vi:'Hãy có thói quen ăn uống tốt.'}],
  '살이 찌다':[{ko:'요즘 살이 많이 쪘어요.',vi:'Dạo này tôi tăng cân nhiều.'}],
  '살을 빼다':[{ko:'운동해서 살을 뺐어요.',vi:'Tôi tập thể dục để giảm cân.'}],
  '피로':[{ko:'푹 자면 피로가 풀려요.',vi:'Ngủ đủ thì hết mệt mỏi.'}],
  '챙기다':[{ko:'출발 전에 짐을 챙기세요.',vi:'Trước khi đi hãy chuẩn bị hành lý.'}],
  '체중':[{ko:'매주 체중을 재요.',vi:'Mỗi tuần tôi cân nặng một lần.'}],
  '꾸준하다':[{ko:'꾸준하게 운동하는 게 중요해요.',vi:'Tập thể dục đều đặn là quan trọng.'}],
  '예방하다':[{ko:'손을 씻으면 병을 예방할 수 있어요.',vi:'Rửa tay thì phòng được bệnh.'}],
  '회복하다':[{ko:'푹 쉬어서 건강을 회복했어요.',vi:'Nghỉ ngơi kỹ nên tôi hồi phục sức khoẻ.'}],
  '붓다':[{ko:'다리가 조금 부었어요.',vi:'Chân tôi hơi sưng.'}],
  '어지럽다':[{ko:'아침을 안 먹어서 어지러워요.',vi:'Không ăn sáng nên tôi chóng mặt.'}],
  '동호회':[{ko:'저는 사진 동호회에 들었어요.',vi:'Tôi tham gia câu lạc bộ nhiếp ảnh.'}],
  '모으다':[{ko:'저는 우표를 모아요.',vi:'Tôi sưu tầm tem.'}],
  '취미 생활':[{ko:'취미 생활로 스트레스를 풀어요.',vi:'Tôi giải toả stress bằng sở thích.'}],
  '열중하다':[{ko:'그는 게임에 열중하고 있어요.',vi:'Anh ấy đang mê chơi game.'}],
  '참여하다':[{ko:'행사에 많은 사람이 참여했어요.',vi:'Nhiều người đã tham gia sự kiện.'}],
  '빠지다':[{ko:'요즘 드라마에 푹 빠졌어요.',vi:'Dạo này tôi mê phim truyền hình.'}],
  '다양하다':[{ko:'취미가 아주 다양해요.',vi:'Sở thích rất đa dạng.'}],
  '독특하다':[{ko:'이 음식은 맛이 독특해요.',vi:'Món này có vị độc đáo.'}],
  '지루하다':[{ko:'영화가 길고 지루했어요.',vi:'Phim dài và nhàm chán.'}],
  '예매하다':[{ko:'영화표를 미리 예매했어요.',vi:'Tôi đặt vé phim trước.'}],
  '관광지':[{ko:'이곳은 유명한 관광지예요.',vi:'Nơi này là điểm tham quan nổi tiếng.'}],
  '경치':[{ko:'산 위에서 보는 경치가 아름다워요.',vi:'Cảnh nhìn từ trên núi rất đẹp.'}],
  '항공편':[{ko:'오전 항공편으로 갈 거예요.',vi:'Tôi sẽ đi chuyến bay buổi sáng.'}],
  '숙박':[{ko:'숙박은 호텔에서 할 거예요.',vi:'Tôi sẽ lưu trú ở khách sạn.'}],
  '명소':[{ko:'서울의 명소를 구경했어요.',vi:'Tôi tham quan các danh thắng của Seoul.'}],
  '둘러보다':[{ko:'시장을 천천히 둘러봤어요.',vi:'Tôi thong thả dạo xem khu chợ.'}],
  '붐비다':[{ko:'주말이라서 거리가 붐벼요.',vi:'Cuối tuần nên phố xá đông nghịt.'}],
  '한적하다':[{ko:'시골은 조용하고 한적해요.',vi:'Nông thôn yên tĩnh và vắng vẻ.'}],
  '편리하다':[{ko:'지하철이 있어서 편리해요.',vi:'Có tàu điện nên tiện lợi.'}],
  '야근':[{ko:'오늘도 야근을 했어요.',vi:'Hôm nay tôi lại tăng ca.'}],
  '승진하다':[{ko:'열심히 일해서 승진했어요.',vi:'Làm việc chăm nên tôi được thăng chức.'}],
  '맡다':[{ko:'이번 일을 제가 맡았어요.',vi:'Việc lần này tôi đảm nhận.'}],
  '회의실':[{ko:'회의실에서 회의를 해요.',vi:'Chúng tôi họp trong phòng họp.'}],
  '처리하다':[{ko:'일을 빨리 처리했어요.',vi:'Tôi xử lý công việc nhanh.'}],
  '제출하다':[{ko:'보고서를 제때 제출했어요.',vi:'Tôi nộp báo cáo đúng hạn.'}],
  '꼼꼼하다':[{ko:'그는 일을 꼼꼼하게 해요.',vi:'Anh ấy làm việc tỉ mỉ.'}],
  '유능하다':[{ko:'그 직원은 아주 유능해요.',vi:'Nhân viên đó rất có năng lực.'}],
  '슬프다':[{ko:'그 영화는 너무 슬퍼요.',vi:'Phim đó buồn quá.'}],
  '화나다':[{ko:'약속을 어겨서 화가 났어요.',vi:'Vì thất hứa nên tôi tức giận.'}],
  '놀라다':[{ko:'큰 소리에 깜짝 놀랐어요.',vi:'Tôi giật mình vì tiếng động lớn.'}],
  '두렵다':[{ko:'혼자 가는 것이 조금 두려워요.',vi:'Đi một mình tôi hơi sợ.'}],
  '답답하다':[{ko:'말이 안 통해서 답답해요.',vi:'Không hiểu nhau nên tôi bức bối.'}],
  '위로하다':[{ko:'슬퍼하는 친구를 위로했어요.',vi:'Tôi an ủi người bạn đang buồn.'}],
  '외로움':[{ko:'외국 생활은 가끔 외로움을 느껴요.',vi:'Sống ở nước ngoài đôi khi thấy cô đơn.'}],
  '감동하다':[{ko:'그의 이야기에 감동했어요.',vi:'Tôi xúc động vì câu chuyện của anh ấy.'}],
  '짜증나다':[{ko:'일이 안 풀려서 짜증나요.',vi:'Việc không suôn sẻ nên tôi bực.'}],
  '긴장하다':[{ko:'발표 전에 많이 긴장했어요.',vi:'Trước khi thuyết trình tôi rất hồi hộp.'}],
  '우울하다':[{ko:'비가 오면 우울해요.',vi:'Trời mưa thì tôi thấy u sầu.'}],
  '뿌듯하다':[{ko:'목표를 이뤄서 뿌듯해요.',vi:'Đạt được mục tiêu nên tôi mãn nguyện.'}],
  '서운하다':[{ko:'친구가 안 와서 조금 서운했어요.',vi:'Bạn không đến nên tôi hơi chạnh lòng.'}],
  '존댓말':[{ko:'어른에게는 존댓말을 써요.',vi:'Với người lớn thì dùng kính ngữ.'}],
  '지키다':[{ko:'교통 규칙을 잘 지키세요.',vi:'Hãy tuân thủ luật giao thông.'}],
  '물려받다':[{ko:'전통을 후손에게 물려줘요.',vi:'Truyền lại truyền thống cho con cháu.'}],
  '전통문화':[{ko:'한국의 전통문화를 배우고 싶어요.',vi:'Tôi muốn học văn hoá truyền thống Hàn.'}],
  '사라지다':[{ko:'옛날 풍습이 점점 사라져요.',vi:'Phong tục xưa dần biến mất.'}],
  '소중하다':[{ko:'가족은 정말 소중해요.',vi:'Gia đình thật quý giá.'}],
  '복잡하다':[{ko:'도시는 길이 복잡해요.',vi:'Thành phố đường xá phức tạp.'}],
  '발전하다':[{ko:'그 도시는 빠르게 발전했어요.',vi:'Thành phố đó phát triển nhanh.'}],
  '교외':[{ko:'교외는 공기가 맑아요.',vi:'Ngoại ô không khí trong lành.'}],
  '소음':[{ko:'밤에는 소음이 문제예요.',vi:'Ban đêm tiếng ồn là vấn đề.'}],
  '발달하다':[{ko:'교통이 발달해서 이동이 편해요.',vi:'Giao thông phát triển nên đi lại tiện.'}],
  '쾌적하다':[{ko:'집이 넓고 쾌적해요.',vi:'Nhà rộng và thoáng đãng.'}],
  '해결하다':[{ko:'문제를 함께 해결했어요.',vi:'Chúng tôi cùng giải quyết vấn đề.'}],
  '발생하다':[{ko:'어제 사고가 발생했어요.',vi:'Hôm qua đã xảy ra tai nạn.'}],
  '보도하다':[{ko:'뉴스에서 그 사건을 보도했어요.',vi:'Bản tin đã đưa tin vụ việc đó.'}],
  '조사하다':[{ko:'원인을 자세히 조사했어요.',vi:'Người ta điều tra kỹ nguyên nhân.'}],
  '정확하다':[{ko:'정보가 정확해요.',vi:'Thông tin chính xác.'}],
  '보호하다':[{ko:'환경을 보호합시다.',vi:'Hãy cùng bảo vệ môi trường.'}],
  '재활용':[{ko:'종이는 재활용을 해요.',vi:'Giấy thì đem tái chế.'}],
  '일회용품':[{ko:'일회용품 사용을 줄여요.',vi:'Hãy giảm dùng đồ dùng một lần.'}],
  '깨끗하다':[{ko:'방을 깨끗하게 청소했어요.',vi:'Tôi dọn phòng sạch sẽ.'}],
  '친환경':[{ko:'친환경 제품을 사용해요.',vi:'Tôi dùng sản phẩm thân thiện môi trường.'}],
  '추천하다':[{ko:'좋은 책을 추천해 주세요.',vi:'Giới thiệu cho tôi cuốn sách hay nhé.'}],
  '권하다':[{ko:'의사가 운동을 권했어요.',vi:'Bác sĩ khuyên tôi nên vận động.'}],
  '결정하다':[{ko:'여행 날짜를 결정했어요.',vi:'Tôi đã quyết định ngày đi du lịch.'}],
  '해결책':[{ko:'좋은 해결책을 찾았어요.',vi:'Tôi đã tìm ra giải pháp tốt.'}],
  '고민거리':[{ko:'요즘 고민거리가 많아요.',vi:'Dạo này tôi có nhiều điều trăn trở.'}],
  '망설이다':[{ko:'살까 말까 망설였어요.',vi:'Tôi do dự không biết mua hay không.'}],
  '현명하다':[{ko:'그는 현명한 결정을 했어요.',vi:'Anh ấy đã có quyết định sáng suốt.'}],
  '신중하다':[{ko:'중요한 일은 신중하게 결정해요.',vi:'Việc quan trọng thì quyết định thận trọng.'}],
  '극복하다':[{ko:'어려움을 잘 극복했어요.',vi:'Tôi đã vượt qua khó khăn.'}],
  '성장하다':[{ko:'경험을 통해 많이 성장했어요.',vi:'Qua trải nghiệm tôi trưởng thành nhiều.'}],
  '끈기':[{ko:'끈기를 가지고 노력하세요.',vi:'Hãy kiên trì nỗ lực.'}],
  '교훈':[{ko:'그 일에서 큰 교훈을 얻었어요.',vi:'Tôi rút ra bài học lớn từ việc đó.'}],
  '깨닫다':[{ko:'건강이 중요하다는 것을 깨달았어요.',vi:'Tôi nhận ra sức khoẻ là quan trọng.'}],
  '대단하다':[{ko:'혼자 해내다니 정말 대단해요.',vi:'Tự làm được, giỏi thật đấy.'}],
  '귀중하다':[{ko:'귀중한 시간을 낭비하지 마세요.',vi:'Đừng lãng phí thời gian quý báu.'}],
  '진로':[{ko:'졸업 후 진로를 고민하고 있어요.',vi:'Tôi đang băn khoăn về hướng đi sau khi tốt nghiệp.'}],
  '구체적':[{ko:'계획을 구체적으로 세우세요.',vi:'Hãy lập kế hoạch một cách cụ thể.'}],
  '긍정적':[{ko:'그는 항상 긍정적으로 생각해요.',vi:'Anh ấy luôn nghĩ tích cực.'}],
  '약속 시간':[{ko:'약속 시간에 늦지 마세요.',vi:'Đừng trễ giờ hẹn.'}],
  '놀랍다':[{ko:'그 소식은 정말 놀라워요.',vi:'Tin đó thật đáng ngạc nhiên.'}]
};

/* Gộp ví dụ vào từ vựng: từ nào chưa có examples thì thêm. */
COURSE_KO.lessons.forEach(l => {
  l.vocab.forEach(v => {
    if ((!v.examples || !v.examples.length) && WORD_EXAMPLES[v.ko]) v.examples = WORD_EXAMPLES[v.ko];
  });
});

/* Các ngôn ngữ sẽ mở tiếp — khung dữ liệu giống hệt COURSE_KO */
const LANGUAGES = [
  { code:'ko', label:'Tiếng Hàn',  native:'한국어',   mark:'한', status:'active',  note:'Sơ cấp 1 · 15 bài' },
  { code:'ja', label:'Tiếng Nhật', native:'日本語',   mark:'あ', status:'planned', note:'Cần thêm bộ nét kana và kanji' },
  { code:'zh', label:'Tiếng Trung',native:'中文',     mark:'中', status:'planned', note:'Dùng chung engine nét viết với Hanja' },
  { code:'en', label:'Tiếng Anh',  native:'English',  mark:'A',  status:'planned', note:'Không cần module tập viết' }
];
