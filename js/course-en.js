/* ============================================================
   LangLab — Khoá tiếng Anh theo khung CEFR
   Nhân vật xuyên suốt: Quan — sinh viên Hà Nội, học tiếng Anh rồi
   đi làm, du học và làm việc quốc tế.
   Mỗi unit: mục tiêu giao tiếp · ngữ pháp · từ vựng (IPA Anh/Mỹ) ·
   collocation · hội thoại · bài đọc.
   Nội dung do LangLab tự biên soạn.
   ============================================================ */

const COURSE_EN = {
  levels: [
    { id:'a1', vi:'A1 · Sơ cấp',        en:'Beginner',           lessons:20, status:'active' },
    { id:'a2', vi:'A2 · Sơ trung cấp',  en:'Elementary',         lessons:20, status:'active' },
    { id:'b1', vi:'B1 · Trung cấp',     en:'Intermediate',       lessons:20, status:'soon' },
    { id:'b2', vi:'B2 · Trung cao cấp', en:'Upper-Intermediate', lessons:20, status:'soon' },
    { id:'c1', vi:'C1 · Cao cấp',       en:'Advanced',           lessons:20, status:'soon' },
    { id:'c2', vi:'C2 · Thành thạo',    en:'Proficiency',        lessons:20, status:'soon' }
  ],

  lessons: [
  /* ==================== A1 ==================== */
  { level:'a1', no:1, en:'Hello! Nice to meet you', vi:'Chào hỏi và giới thiệu bản thân', skill:'Giao tiếp',
    grammar:[
      { form:'I am / You are / He is — động từ «to be»', vi:'Động từ «be» nối chủ ngữ với tên, nghề, quốc tịch, tính chất.', note:'Dạng rút gọn dùng trong nói: I am → I’m, you are → you’re, he is → he’s.', ex:{ en:'I am Quan. I am from Hanoi.', vi:'Tôi là Quân. Tôi đến từ Hà Nội.' } },
      { form:'Am I…? / Are you…? / Is he…? — câu hỏi Yes/No', vi:'Đảo «be» lên trước chủ ngữ để hỏi.', note:'Trả lời ngắn: Yes, I am. / No, I’m not. Không nói «Yes, I’m».', ex:{ en:'Are you a student? Yes, I am.', vi:'Bạn là sinh viên phải không? Vâng, đúng vậy.' } },
      { form:'My / your / his / her — tính từ sở hữu', vi:'Đứng trước danh từ để chỉ ai sở hữu.', note:'Không đổi theo số nhiều: my book, my books.', ex:{ en:'My name is Quan. Her name is Linh.', vi:'Tên tôi là Quân. Tên cô ấy là Linh.' } },
      { form:'a / an — mạo từ không xác định', vi:'Dùng trước danh từ đếm được số ít khi nhắc lần đầu.', note:'«an» đứng trước ÂM nguyên âm chứ không phải chữ cái: an hour, a university.', ex:{ en:'I am a student. She is an engineer.', vi:'Tôi là sinh viên. Cô ấy là kỹ sư.' } }
    ],
    vocab:[
      { en:'hello', uk:'həˈləʊ', us:'həˈloʊ', vi:'xin chào', pos:'thán từ' },
      { en:'name', uk:'neɪm', us:'neɪm', vi:'tên', pos:'danh từ' },
      { en:'student', uk:'ˈstjuːdnt', us:'ˈstuːdnt', vi:'sinh viên, học sinh', pos:'danh từ', note:'Anh có /j/, Mỹ không.' },
      { en:'teacher', uk:'ˈtiːtʃə', us:'ˈtiːtʃər', vi:'giáo viên', pos:'danh từ' },
      { en:'engineer', uk:'ˌendʒɪˈnɪə', us:'ˌendʒɪˈnɪr', vi:'kỹ sư', pos:'danh từ', note:'Trọng âm ở đuôi -eer.' },
      { en:'country', uk:'ˈkʌntri', us:'ˈkʌntri', vi:'đất nước', pos:'danh từ' },
      { en:'city', uk:'ˈsɪti', us:'ˈsɪti', vi:'thành phố', pos:'danh từ' },
      { en:'friend', uk:'frend', us:'frend', vi:'bạn', pos:'danh từ' },
      { en:'nice', uk:'naɪs', us:'naɪs', vi:'dễ chịu, tốt', pos:'tính từ' },
      { en:'meet', uk:'miːt', us:'miːt', vi:'gặp', pos:'động từ', note:'met — met' },
      { en:'from', uk:'frɒm', us:'frɑːm', vi:'từ', pos:'giới từ' },
      { en:'welcome', uk:'ˈwelkəm', us:'ˈwelkəm', vi:'chào mừng', pos:'thán từ, động từ' },
      { en:'morning', uk:'ˈmɔːnɪŋ', us:'ˈmɔːrnɪŋ', vi:'buổi sáng', pos:'danh từ' },
      { en:'afternoon', uk:'ˌɑːftəˈnuːn', us:'ˌæftərˈnuːn', vi:'buổi chiều', pos:'danh từ' },
      { en:'evening', uk:'ˈiːvnɪŋ', us:'ˈiːvnɪŋ', vi:'buổi tối', pos:'danh từ' },
      { en:'thanks', uk:'θæŋks', us:'θæŋks', vi:'cảm ơn', pos:'thán từ' },
      { en:'sorry', uk:'ˈsɒri', us:'ˈsɑːri', vi:'xin lỗi', pos:'tính từ' },
      { en:'please', uk:'pliːz', us:'pliːz', vi:'làm ơn', pos:'trạng từ' },
      { en:'excuse', uk:'ɪkˈskjuːz', us:'ɪkˈskjuːz', vi:'thứ lỗi', pos:'động từ', note:'Excuse me — xin phép, làm phiền.' },
      { en:'goodbye', uk:'ˌɡʊdˈbaɪ', us:'ˌɡʊdˈbaɪ', vi:'tạm biệt', pos:'thán từ' }
    ],
    colloc:[
      { p:'Nice to meet you.', vi:'Rất vui được gặp bạn — câu chuẩn khi gặp lần đầu.', ex:'Nice to meet you, Linh.' },
      { p:'Excuse me, …', vi:'Xin lỗi cho hỏi — mở lời với người lạ, KHÔNG phải xin lỗi vì lỗi.', ex:'Excuse me, are you Mr Brown?' },
      { p:'How do you do?', vi:'Lối chào rất trang trọng; câu đáp cũng là How do you do?', ex:'How do you do? — How do you do?' }
    ],
    dialogue:[
      { sp:'Linh', en:'Good morning. Are you Quan?', vi:'Chào buổi sáng. Bạn là Quân phải không?' },
      { sp:'Quan', en:'Yes, I am. Nice to meet you.', vi:'Vâng, đúng vậy. Rất vui được gặp bạn.' },
      { sp:'Linh', en:'Nice to meet you too. My name is Linh.', vi:'Tôi cũng vậy. Tên tôi là Linh.' },
      { sp:'Quan', en:'Where are you from, Linh?', vi:'Bạn đến từ đâu vậy, Linh?' },
      { sp:'Linh', en:'I am from Hue. And you?', vi:'Tôi đến từ Huế. Còn bạn?' },
      { sp:'Quan', en:'I am from Hanoi. I am a student here.', vi:'Tôi đến từ Hà Nội. Tôi là sinh viên ở đây.' },
      { sp:'Linh', en:'Me too. See you in class!', vi:'Tôi cũng thế. Hẹn gặp trong lớp nhé!' }
    ],
    reading:{ en:'My name is Quan. I am twenty years old and I am from Hanoi, the capital of Vietnam. I am a student at a university in the city. My friend Linh is from Hue. She is a student too. We are in the same English class. Our teacher is Mr Brown. He is from London.',
      vi:'Tôi tên là Quân. Tôi hai mươi tuổi và đến từ Hà Nội, thủ đô của Việt Nam. Tôi là sinh viên một trường đại học trong thành phố. Bạn tôi, Linh, đến từ Huế. Cô ấy cũng là sinh viên. Chúng tôi học chung lớp tiếng Anh. Thầy giáo của chúng tôi là thầy Brown. Thầy đến từ London.' } },

  { level:'a1', no:2, en:'Numbers, time and dates', vi:'Số đếm, giờ giấc và ngày tháng', skill:'Thông tin cơ bản',
    grammar:[
      { form:'Số đếm và số thứ tự', vi:'one, two, three… / first, second, third…', note:'Số thứ tự thêm -th trừ 1st, 2nd, 3rd và các số kết thúc bằng chúng.', ex:{ en:'She lives on the third floor.', vi:'Cô ấy sống ở tầng ba.' } },
      { form:'What time is it? — It’s half past seven.', vi:'Cách nói giờ kiểu Anh: past (hơn) và to (kém).', note:'Kiểu Mỹ nói thẳng số: It’s seven thirty. Cả hai đều đúng.', ex:{ en:'It is a quarter to nine.', vi:'Bây giờ là chín giờ kém mười lăm.' } },
      { form:'at / on / in — giới từ thời gian', vi:'at + giờ · on + ngày, thứ · in + tháng, mùa, năm.', note:'Ngoại lệ: at night, at the weekend (Anh) / on the weekend (Mỹ).', ex:{ en:'The class starts at eight on Monday.', vi:'Lớp bắt đầu lúc tám giờ vào thứ Hai.' } },
      { form:'How old are you? — I am twenty.', vi:'Hỏi tuổi bằng «be», không dùng «have».', note:'Không nói «I have twenty years» — đó là lối tiếng Pháp/Việt.', ex:{ en:'My sister is fifteen years old.', vi:'Em gái tôi mười lăm tuổi.' } }
    ],
    vocab:[
      { en:'number', uk:'ˈnʌmbə', us:'ˈnʌmbər', vi:'số', pos:'danh từ' },
      { en:'one', uk:'wʌn', us:'wʌn', vi:'một', pos:'số' },
      { en:'twelve', uk:'twelv', us:'twelv', vi:'mười hai', pos:'số' },
      { en:'thirteen', uk:'ˌθɜːˈtiːn', us:'ˌθɜːrˈtiːn', vi:'mười ba', pos:'số', note:'Trọng âm cuối, khác thirty ˈθɜːti.' },
      { en:'thirty', uk:'ˈθɜːti', us:'ˈθɜːrti', vi:'ba mươi', pos:'số' },
      { en:'hundred', uk:'ˈhʌndrəd', us:'ˈhʌndrəd', vi:'trăm', pos:'số' },
      { en:'thousand', uk:'ˈθaʊznd', us:'ˈθaʊznd', vi:'nghìn', pos:'số' },
      { en:'clock', uk:'klɒk', us:'klɑːk', vi:'đồng hồ (treo)', pos:'danh từ' },
      { en:'hour', uk:'ˈaʊə', us:'ˈaʊər', vi:'giờ', pos:'danh từ', note:'h câm — dùng «an hour».' },
      { en:'minute', uk:'ˈmɪnɪt', us:'ˈmɪnɪt', vi:'phút', pos:'danh từ' },
      { en:'quarter', uk:'ˈkwɔːtə', us:'ˈkwɔːrtər', vi:'một phần tư, mười lăm phút', pos:'danh từ' },
      { en:'half', uk:'hɑːf', us:'hæf', vi:'một nửa', pos:'danh từ', note:'l câm.' },
      { en:'Monday', uk:'ˈmʌndeɪ', us:'ˈmʌndeɪ', vi:'thứ Hai', pos:'danh từ' },
      { en:'weekend', uk:'ˌwiːkˈend', us:'ˈwiːkend', vi:'cuối tuần', pos:'danh từ' },
      { en:'month', uk:'mʌnθ', us:'mʌnθ', vi:'tháng', pos:'danh từ' },
      { en:'January', uk:'ˈdʒænjuəri', us:'ˈdʒænjueri', vi:'tháng Một', pos:'danh từ' },
      { en:'birthday', uk:'ˈbɜːθdeɪ', us:'ˈbɜːrθdeɪ', vi:'sinh nhật', pos:'danh từ' },
      { en:'year', uk:'jɪə', us:'jɪr', vi:'năm', pos:'danh từ' },
      { en:'today', uk:'təˈdeɪ', us:'təˈdeɪ', vi:'hôm nay', pos:'trạng từ' },
      { en:'tomorrow', uk:'təˈmɒrəʊ', us:'təˈmɑːroʊ', vi:'ngày mai', pos:'trạng từ' }
    ],
    colloc:[
      { p:'What time is it?', vi:'Mấy giờ rồi? — câu hỏi giờ thông dụng nhất.', ex:'Excuse me, what time is it?' },
      { p:'on time / in time', vi:'on time = đúng giờ · in time = kịp lúc. Hai nghĩa khác nhau.', ex:'The train was on time, and we arrived in time for dinner.' },
      { p:'What is the date today?', vi:'Hôm nay ngày mấy?', ex:'What is the date today? — It is the fifth of March.' }
    ],
    dialogue:[
      { sp:'Quan', en:'Excuse me, what time is it?', vi:'Xin lỗi, mấy giờ rồi ạ?' },
      { sp:'Linh', en:'It is half past seven.', vi:'Bảy giờ rưỡi.' },
      { sp:'Quan', en:'Thanks. What time does the class start?', vi:'Cảm ơn. Lớp bắt đầu lúc mấy giờ?' },
      { sp:'Linh', en:'At eight o’clock, in room twelve.', vi:'Lúc tám giờ, ở phòng mười hai.' },
      { sp:'Quan', en:'And when is the test?', vi:'Còn bài kiểm tra khi nào?' },
      { sp:'Linh', en:'On Friday, the tenth of May.', vi:'Vào thứ Sáu, ngày mười tháng Năm.' }
    ],
    reading:{ en:'Quan gets up at six o’clock every morning. He has breakfast at half past six and leaves home at seven. His first class starts at eight and finishes at half past nine. On Saturday he does not go to school. His birthday is on the third of April. This year it is on a Sunday, so his family will have lunch together at twelve.',
      vi:'Quân dậy lúc sáu giờ mỗi sáng. Cậu ăn sáng lúc sáu rưỡi và rời nhà lúc bảy giờ. Lớp đầu tiên bắt đầu lúc tám giờ và kết thúc lúc chín rưỡi. Thứ Bảy cậu không đi học. Sinh nhật cậu vào ngày ba tháng Tư. Năm nay rơi vào Chủ nhật, nên cả nhà sẽ ăn trưa cùng nhau lúc mười hai giờ.' } },

  { level:'a1', no:3, en:'My family', vi:'Gia đình và người thân', skill:'Miêu tả',
    grammar:[
      { form:'have got / have — sở hữu', vi:'Anh dùng «have got», Mỹ dùng «have». Nghĩa như nhau.', note:'I have got = I’ve got. Câu hỏi: Have you got…? / Do you have…?', ex:{ en:'I have got two sisters.', vi:'Tôi có hai chị em gái.' } },
      { form:'’s sở hữu cách', vi:'Thêm ’s vào người sở hữu: my mother’s name.', note:'Danh từ số nhiều đã có -s thì chỉ thêm dấu phẩy trên: my parents’ house.', ex:{ en:'This is my brother’s bike.', vi:'Đây là xe đạp của anh trai tôi.' } },
      { form:'Danh từ số nhiều', vi:'Thêm -s; -es sau ch, sh, s, x, o; -ies sau phụ âm + y.', note:'Bất quy tắc: child–children, man–men, woman–women, foot–feet, person–people.', ex:{ en:'I have three brothers and two babies at home.', vi:'Tôi có ba anh em trai và hai em bé ở nhà.' } },
      { form:'There is / There are', vi:'Dùng để nói «có» cái gì ở đâu.', note:'Số ít → is, số nhiều → are. Phủ định: There isn’t / There aren’t.', ex:{ en:'There are five people in my family.', vi:'Gia đình tôi có năm người.' } }
    ],
    vocab:[
      { en:'family', uk:'ˈfæməli', us:'ˈfæməli', vi:'gia đình', pos:'danh từ' },
      { en:'parents', uk:'ˈpeərənts', us:'ˈperənts', vi:'bố mẹ', pos:'danh từ' },
      { en:'father', uk:'ˈfɑːðə', us:'ˈfɑːðər', vi:'bố', pos:'danh từ' },
      { en:'mother', uk:'ˈmʌðə', us:'ˈmʌðər', vi:'mẹ', pos:'danh từ' },
      { en:'brother', uk:'ˈbrʌðə', us:'ˈbrʌðər', vi:'anh, em trai', pos:'danh từ' },
      { en:'sister', uk:'ˈsɪstə', us:'ˈsɪstər', vi:'chị, em gái', pos:'danh từ' },
      { en:'son', uk:'sʌn', us:'sʌn', vi:'con trai', pos:'danh từ' },
      { en:'daughter', uk:'ˈdɔːtə', us:'ˈdɔːtər', vi:'con gái', pos:'danh từ', note:'gh câm.' },
      { en:'grandmother', uk:'ˈɡrænmʌðə', us:'ˈɡrænmʌðər', vi:'bà', pos:'danh từ' },
      { en:'uncle', uk:'ˈʌŋkl', us:'ˈʌŋkl', vi:'chú, bác, cậu', pos:'danh từ' },
      { en:'aunt', uk:'ɑːnt', us:'ænt', vi:'cô, dì, bác gái', pos:'danh từ' },
      { en:'cousin', uk:'ˈkʌzn', us:'ˈkʌzn', vi:'anh chị em họ', pos:'danh từ' },
      { en:'husband', uk:'ˈhʌzbənd', us:'ˈhʌzbənd', vi:'chồng', pos:'danh từ' },
      { en:'wife', uk:'waɪf', us:'waɪf', vi:'vợ', pos:'danh từ', note:'số nhiều: wives' },
      { en:'child', uk:'tʃaɪld', us:'tʃaɪld', vi:'đứa trẻ', pos:'danh từ', note:'số nhiều: children ˈtʃɪldrən' },
      { en:'married', uk:'ˈmærid', us:'ˈmerid', vi:'đã kết hôn', pos:'tính từ' },
      { en:'single', uk:'ˈsɪŋɡl', us:'ˈsɪŋɡl', vi:'độc thân', pos:'tính từ' },
      { en:'young', uk:'jʌŋ', us:'jʌŋ', vi:'trẻ', pos:'tính từ' },
      { en:'old', uk:'əʊld', us:'oʊld', vi:'già, cũ', pos:'tính từ' },
      { en:'together', uk:'təˈɡeðə', us:'təˈɡeðər', vi:'cùng nhau', pos:'trạng từ' }
    ],
    colloc:[
      { p:'get married', vi:'kết hôn — «marry» dùng thẳng với tân ngữ: marry someone.', ex:'They got married last year.' },
      { p:'look after someone', vi:'chăm sóc ai đó', ex:'She looks after her grandmother.' },
      { p:'take after someone', vi:'giống ai (về ngoại hình, tính cách) — người trong họ', ex:'He takes after his father.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Is this a photo of your family?', vi:'Đây là ảnh gia đình bạn à?' },
      { sp:'Quan', en:'Yes. There are five of us.', vi:'Ừ. Nhà tớ có năm người.' },
      { sp:'Linh', en:'Who is the man on the left?', vi:'Người đàn ông bên trái là ai vậy?' },
      { sp:'Quan', en:'That is my father. He is a doctor.', vi:'Đó là bố tớ. Bố tớ là bác sĩ.' },
      { sp:'Linh', en:'Have you got any brothers or sisters?', vi:'Bạn có anh chị em không?' },
      { sp:'Quan', en:'I have got one sister. She is sixteen.', vi:'Tớ có một em gái. Em ấy mười sáu tuổi.' },
      { sp:'Linh', en:'She takes after your mother!', vi:'Em ấy giống mẹ bạn ghê!' }
    ],
    reading:{ en:'There are five people in Quan’s family: his parents, his grandmother, his sister and him. His father is a doctor and his mother is a teacher. His grandmother is seventy-eight years old and she lives with them. His sister’s name is Mai. She is sixteen and she is still at school. At the weekend the family often has dinner together and his father cooks.',
      vi:'Gia đình Quân có năm người: bố mẹ, bà, em gái và cậu. Bố cậu là bác sĩ còn mẹ là giáo viên. Bà cậu bảy mươi tám tuổi và sống cùng gia đình. Em gái cậu tên Mai. Em ấy mười sáu tuổi và vẫn đang đi học. Cuối tuần cả nhà thường ăn tối cùng nhau và bố cậu nấu ăn.' } },

  { level:'a1', no:4, en:'Daily routine', vi:'Thói quen hằng ngày', skill:'Kể việc thường làm',
    grammar:[
      { form:'Thì hiện tại đơn — khẳng định', vi:'Diễn tả thói quen, sự thật hiển nhiên.', note:'Ngôi thứ ba số ít (he/she/it) thêm -s: he works, she studies, it goes.', ex:{ en:'Quan studies English every day.', vi:'Quân học tiếng Anh mỗi ngày.' } },
      { form:'do / does — phủ định và câu hỏi', vi:'Dùng trợ động từ do/does; động từ chính trở về nguyên thể.', note:'He doesn’t workS là sai — sau does, động từ KHÔNG thêm -s.', ex:{ en:'Does he work on Saturday? No, he doesn’t.', vi:'Anh ấy có làm việc thứ Bảy không? Không.' } },
      { form:'Trạng từ tần suất', vi:'always > usually > often > sometimes > rarely > never.', note:'Đứng TRƯỚC động từ thường nhưng SAU động từ «be»: He is always late.', ex:{ en:'I usually get up at six.', vi:'Tôi thường dậy lúc sáu giờ.' } },
      { form:'How often…? — every / once / twice', vi:'Hỏi và trả lời về mức độ thường xuyên.', note:'once a week, twice a month, three times a year.', ex:{ en:'How often do you go to the gym? Twice a week.', vi:'Bạn đi tập bao lâu một lần? Hai lần một tuần.' } }
    ],
    vocab:[
      { en:'wake', uk:'weɪk', us:'weɪk', vi:'thức dậy', pos:'động từ', note:'wake up — woke — woken' },
      { en:'breakfast', uk:'ˈbrekfəst', us:'ˈbrekfəst', vi:'bữa sáng', pos:'danh từ' },
      { en:'shower', uk:'ˈʃaʊə', us:'ˈʃaʊər', vi:'vòi sen, tắm', pos:'danh từ' },
      { en:'brush', uk:'brʌʃ', us:'brʌʃ', vi:'chải, đánh (răng)', pos:'động từ' },
      { en:'leave', uk:'liːv', us:'liːv', vi:'rời đi', pos:'động từ', note:'left — left' },
      { en:'arrive', uk:'əˈraɪv', us:'əˈraɪv', vi:'đến nơi', pos:'động từ', note:'arrive at / in, không dùng «arrive to».' },
      { en:'work', uk:'wɜːk', us:'wɜːrk', vi:'làm việc', pos:'động từ, danh từ' },
      { en:'study', uk:'ˈstʌdi', us:'ˈstʌdi', vi:'học', pos:'động từ' },
      { en:'lunch', uk:'lʌntʃ', us:'lʌntʃ', vi:'bữa trưa', pos:'danh từ' },
      { en:'dinner', uk:'ˈdɪnə', us:'ˈdɪnər', vi:'bữa tối', pos:'danh từ' },
      { en:'finish', uk:'ˈfɪnɪʃ', us:'ˈfɪnɪʃ', vi:'kết thúc', pos:'động từ' },
      { en:'always', uk:'ˈɔːlweɪz', us:'ˈɔːlweɪz', vi:'luôn luôn', pos:'trạng từ' },
      { en:'usually', uk:'ˈjuːʒuəli', us:'ˈjuːʒuəli', vi:'thường', pos:'trạng từ' },
      { en:'often', uk:'ˈɒfn', us:'ˈɔːfn', vi:'hay, thường xuyên', pos:'trạng từ', note:'t thường câm.' },
      { en:'sometimes', uk:'ˈsʌmtaɪmz', us:'ˈsʌmtaɪmz', vi:'thỉnh thoảng', pos:'trạng từ' },
      { en:'never', uk:'ˈnevə', us:'ˈnevər', vi:'không bao giờ', pos:'trạng từ' },
      { en:'early', uk:'ˈɜːli', us:'ˈɜːrli', vi:'sớm', pos:'trạng từ, tính từ' },
      { en:'late', uk:'leɪt', us:'leɪt', vi:'muộn', pos:'trạng từ, tính từ' },
      { en:'busy', uk:'ˈbɪzi', us:'ˈbɪzi', vi:'bận', pos:'tính từ', note:'u đọc /ɪ/.' },
      { en:'free', uk:'friː', us:'friː', vi:'rảnh, miễn phí', pos:'tính từ' }
    ],
    colloc:[
      { p:'get up / wake up', vi:'wake up = tỉnh giấc · get up = ra khỏi giường. Hai việc khác nhau.', ex:'I wake up at six but I get up at half past six.' },
      { p:'have breakfast / lunch / dinner', vi:'dùng «have», không dùng «eat» trong lối nói chuẩn.', ex:'We usually have dinner at seven.' },
      { p:'go to bed / go to sleep', vi:'go to bed = lên giường · go to sleep = ngủ thiếp đi.', ex:'He goes to bed at ten and goes to sleep at half past ten.' }
    ],
    dialogue:[
      { sp:'Linh', en:'What time do you usually get up?', vi:'Bạn thường dậy lúc mấy giờ?' },
      { sp:'Quan', en:'At six. I never get up late.', vi:'Sáu giờ. Tớ không bao giờ dậy muộn.' },
      { sp:'Linh', en:'Really? What do you do after breakfast?', vi:'Thật à? Sau bữa sáng bạn làm gì?' },
      { sp:'Quan', en:'I go to the library and study for two hours.', vi:'Tớ tới thư viện và học hai tiếng.' },
      { sp:'Linh', en:'Do you work in the afternoon?', vi:'Buổi chiều bạn có đi làm không?' },
      { sp:'Quan', en:'Yes, I do. I work at a coffee shop three times a week.', vi:'Có. Tớ làm ở quán cà phê ba buổi một tuần.' }
    ],
    reading:{ en:'Quan has a busy week. He wakes up at six, has a quick breakfast and leaves home at seven. He arrives at university at half past seven and his first class starts at eight. He usually has lunch with Linh at twelve. Three times a week he works at a coffee shop from two to six. He gets home at seven, has dinner with his family and studies until ten. He never goes to bed after eleven.',
      vi:'Quân có một tuần bận rộn. Cậu dậy lúc sáu giờ, ăn sáng nhanh và rời nhà lúc bảy giờ. Cậu tới trường lúc bảy rưỡi và lớp đầu tiên bắt đầu lúc tám giờ. Cậu thường ăn trưa với Linh lúc mười hai giờ. Ba buổi một tuần cậu làm ở quán cà phê từ hai đến sáu giờ. Cậu về nhà lúc bảy giờ, ăn tối cùng gia đình và học đến mười giờ. Cậu không bao giờ đi ngủ sau mười một giờ.' } },

  { level:'a1', no:5, en:'Where I live', vi:'Nhà cửa và nơi ở', skill:'Miêu tả nơi chốn',
    grammar:[
      { form:'There is / There are + a, some, any', vi:'a + số ít · some trong câu khẳng định · any trong phủ định và câu hỏi.', note:'There isn’t any milk. Is there any bread?', ex:{ en:'There are some chairs but there isn’t any table.', vi:'Có mấy cái ghế nhưng không có cái bàn nào.' } },
      { form:'Giới từ nơi chốn', vi:'in (trong) · on (trên bề mặt) · under · next to · between · behind · in front of · opposite.', note:'in the picture, on the wall, at the corner — mỗi cụm có giới từ cố định.', ex:{ en:'The lamp is next to the bed.', vi:'Cái đèn ở cạnh giường.' } },
      { form:'this / that / these / those', vi:'this–these (gần) · that–those (xa).', note:'Dùng cả khi nghe điện thoại: This is Quan speaking.', ex:{ en:'This is my room and those are my books.', vi:'Đây là phòng tôi và kia là sách của tôi.' } },
      { form:'Câu hỏi Wh-', vi:'What, Where, When, Who, Why, How, How many, How much.', note:'Trật tự: Wh- + trợ động từ + chủ ngữ + động từ.', ex:{ en:'How many rooms are there in your house?', vi:'Nhà bạn có mấy phòng?' } }
    ],
    vocab:[
      { en:'house', uk:'haʊs', us:'haʊs', vi:'ngôi nhà', pos:'danh từ' },
      { en:'flat', uk:'flæt', us:'flæt', vi:'căn hộ (Anh)', pos:'danh từ', note:'Mỹ: apartment' },
      { en:'room', uk:'ruːm', us:'ruːm', vi:'phòng', pos:'danh từ' },
      { en:'kitchen', uk:'ˈkɪtʃɪn', us:'ˈkɪtʃɪn', vi:'bếp', pos:'danh từ' },
      { en:'bedroom', uk:'ˈbedruːm', us:'ˈbedruːm', vi:'phòng ngủ', pos:'danh từ' },
      { en:'bathroom', uk:'ˈbɑːθruːm', us:'ˈbæθruːm', vi:'phòng tắm', pos:'danh từ' },
      { en:'garden', uk:'ˈɡɑːdn', us:'ˈɡɑːrdn', vi:'vườn', pos:'danh từ' },
      { en:'floor', uk:'flɔː', us:'flɔːr', vi:'sàn, tầng', pos:'danh từ' },
      { en:'wall', uk:'wɔːl', us:'wɔːl', vi:'tường', pos:'danh từ' },
      { en:'window', uk:'ˈwɪndəʊ', us:'ˈwɪndoʊ', vi:'cửa sổ', pos:'danh từ' },
      { en:'door', uk:'dɔː', us:'dɔːr', vi:'cửa', pos:'danh từ' },
      { en:'table', uk:'ˈteɪbl', us:'ˈteɪbl', vi:'bàn', pos:'danh từ' },
      { en:'chair', uk:'tʃeə', us:'tʃer', vi:'ghế', pos:'danh từ' },
      { en:'sofa', uk:'ˈsəʊfə', us:'ˈsoʊfə', vi:'ghế sofa', pos:'danh từ' },
      { en:'lamp', uk:'læmp', us:'læmp', vi:'đèn', pos:'danh từ' },
      { en:'quiet', uk:'ˈkwaɪət', us:'ˈkwaɪət', vi:'yên tĩnh', pos:'tính từ' },
      { en:'noisy', uk:'ˈnɔɪzi', us:'ˈnɔɪzi', vi:'ồn ào', pos:'tính từ' },
      { en:'comfortable', uk:'ˈkʌmftəbl', us:'ˈkʌmfərtəbl', vi:'thoải mái', pos:'tính từ' },
      { en:'near', uk:'nɪə', us:'nɪr', vi:'gần', pos:'giới từ' },
      { en:'between', uk:'bɪˈtwiːn', us:'bɪˈtwiːn', vi:'giữa (hai)', pos:'giới từ' }
    ],
    colloc:[
      { p:'live in / live at', vi:'live in + thành phố, nước, phố · live at + số nhà cụ thể.', ex:'I live in Hanoi, at 25 Le Duan Street.' },
      { p:'move house / move in', vi:'move house = chuyển nhà · move in = dọn vào ở.', ex:'They moved house last month and moved in on Sunday.' },
      { p:'share a flat with someone', vi:'ở ghép, thuê chung căn hộ', ex:'He shares a flat with two friends.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Where do you live now?', vi:'Bây giờ bạn sống ở đâu?' },
      { sp:'Quan', en:'I live in a small flat near the university.', vi:'Tớ ở một căn hộ nhỏ gần trường.' },
      { sp:'Linh', en:'How many rooms are there?', vi:'Có mấy phòng vậy?' },
      { sp:'Quan', en:'There are two: a bedroom and a kitchen.', vi:'Có hai: một phòng ngủ và một bếp.' },
      { sp:'Linh', en:'Is it quiet?', vi:'Ở đó có yên tĩnh không?' },
      { sp:'Quan', en:'Not really. There is a market in front of the building.', vi:'Không hẳn. Trước toà nhà có một cái chợ.' },
      { sp:'Linh', en:'But it is convenient!', vi:'Nhưng mà tiện chứ!' }
    ],
    reading:{ en:'Quan lives in a small flat on the fourth floor of an old building. There is one bedroom, a small kitchen and a bathroom. In the bedroom there is a bed, a desk and a chair next to the window. There are some books on the desk and a lamp between the books and the computer. There is no garden, but there is a park opposite the building. It is not quiet, but the rent is cheap and the university is only ten minutes away.',
      vi:'Quân sống trong một căn hộ nhỏ ở tầng bốn của một toà nhà cũ. Có một phòng ngủ, một bếp nhỏ và một phòng tắm. Trong phòng ngủ có một cái giường, một cái bàn học và một cái ghế cạnh cửa sổ. Trên bàn có mấy quyển sách và một cái đèn nằm giữa chồng sách với máy tính. Không có vườn, nhưng đối diện toà nhà có một công viên. Chỗ này không yên tĩnh, nhưng tiền thuê rẻ và trường chỉ cách mười phút.' } }

  ]
};

if (typeof module !== 'undefined') module.exports = { COURSE_EN };
