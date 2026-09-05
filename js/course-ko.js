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

/* Các ngôn ngữ sẽ mở tiếp — khung dữ liệu giống hệt COURSE_KO */
const LANGUAGES = [
  { code:'ko', label:'Tiếng Hàn',  native:'한국어',   mark:'한', status:'active',  note:'Sơ cấp 1 · 15 bài' },
  { code:'ja', label:'Tiếng Nhật', native:'日本語',   mark:'あ', status:'planned', note:'Cần thêm bộ nét kana và kanji' },
  { code:'zh', label:'Tiếng Trung',native:'中文',     mark:'中', status:'planned', note:'Dùng chung engine nét viết với Hanja' },
  { code:'en', label:'Tiếng Anh',  native:'English',  mark:'A',  status:'planned', note:'Không cần module tập viết' }
];
