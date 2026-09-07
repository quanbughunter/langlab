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
      vi:'Quân sống trong một căn hộ nhỏ ở tầng bốn của một toà nhà cũ. Có một phòng ngủ, một bếp nhỏ và một phòng tắm. Trong phòng ngủ có một cái giường, một cái bàn học và một cái ghế cạnh cửa sổ. Trên bàn có mấy quyển sách và một cái đèn nằm giữa chồng sách với máy tính. Không có vườn, nhưng đối diện toà nhà có một công viên. Chỗ này không yên tĩnh, nhưng tiền thuê rẻ và trường chỉ cách mười phút.' } },

  { level:'a1', no:6, en:'Food and drink', vi:'Đồ ăn thức uống', skill:'Gọi món, nói sở thích',
    grammar:[
      { form:'Danh từ đếm được và không đếm được', vi:'Đếm được có số nhiều (apples); không đếm được thì không (rice, water, bread).', note:'Muốn đếm thứ không đếm được, thêm đơn vị: a slice of bread, a cup of tea, a bottle of water.', ex:{ en:'I would like two coffees and some bread.', vi:'Tôi muốn hai cà phê và một ít bánh mì.' } },
      { form:'How much…? / How many…?', vi:'much + không đếm được · many + đếm được.', note:'a lot of dùng được cho cả hai; trong câu phủ định và câu hỏi hay dùng much/many hơn.', ex:{ en:'How much sugar do you want?', vi:'Bạn muốn bao nhiêu đường?' } },
      { form:'would like — muốn (lịch sự)', vi:'Dùng khi gọi món hoặc mời, lịch sự hơn «want».', note:'Rút gọn: I’d like. Sau would like luôn là to + động từ hoặc danh từ.', ex:{ en:'I would like to order, please.', vi:'Tôi muốn gọi món ạ.' } },
      { form:'like / love / hate + V-ing', vi:'Nói sở thích chung chung dùng danh động từ.', note:'like doing = thích làm nói chung; would like to do = muốn làm lúc này.', ex:{ en:'She loves cooking Vietnamese food.', vi:'Cô ấy rất thích nấu món Việt.' } }
    ],
    vocab:[
      { en:'food', uk:'fuːd', us:'fuːd', vi:'thức ăn', pos:'danh từ' },
      { en:'rice', uk:'raɪs', us:'raɪs', vi:'cơm, gạo', pos:'danh từ', note:'không đếm được' },
      { en:'bread', uk:'bred', us:'bred', vi:'bánh mì', pos:'danh từ', note:'ea đọc /e/, không đếm được' },
      { en:'meat', uk:'miːt', us:'miːt', vi:'thịt', pos:'danh từ' },
      { en:'chicken', uk:'ˈtʃɪkɪn', us:'ˈtʃɪkɪn', vi:'gà, thịt gà', pos:'danh từ' },
      { en:'fish', uk:'fɪʃ', us:'fɪʃ', vi:'cá', pos:'danh từ', note:'số nhiều cũng là fish' },
      { en:'vegetable', uk:'ˈvedʒtəbl', us:'ˈvedʒtəbl', vi:'rau củ', pos:'danh từ', note:'3 âm tiết trong lời nói' },
      { en:'fruit', uk:'fruːt', us:'fruːt', vi:'hoa quả', pos:'danh từ' },
      { en:'egg', uk:'eɡ', us:'eɡ', vi:'trứng', pos:'danh từ' },
      { en:'soup', uk:'suːp', us:'suːp', vi:'súp, canh', pos:'danh từ' },
      { en:'sugar', uk:'ˈʃʊɡə', us:'ˈʃʊɡər', vi:'đường', pos:'danh từ', note:'s đọc /ʃ/' },
      { en:'salt', uk:'sɔːlt', us:'sɔːlt', vi:'muối', pos:'danh từ' },
      { en:'tea', uk:'tiː', us:'tiː', vi:'trà', pos:'danh từ' },
      { en:'juice', uk:'dʒuːs', us:'dʒuːs', vi:'nước ép', pos:'danh từ' },
      { en:'delicious', uk:'dɪˈlɪʃəs', us:'dɪˈlɪʃəs', vi:'ngon', pos:'tính từ' },
      { en:'hungry', uk:'ˈhʌŋɡri', us:'ˈhʌŋɡri', vi:'đói', pos:'tính từ' },
      { en:'thirsty', uk:'ˈθɜːsti', us:'ˈθɜːrsti', vi:'khát', pos:'tính từ' },
      { en:'menu', uk:'ˈmenjuː', us:'ˈmenjuː', vi:'thực đơn', pos:'danh từ' },
      { en:'order', uk:'ˈɔːdə', us:'ˈɔːrdər', vi:'gọi món; đặt hàng', pos:'động từ, danh từ' },
      { en:'bill', uk:'bɪl', us:'bɪl', vi:'hoá đơn (Anh)', pos:'danh từ', note:'Mỹ: check' }
    ],
    colloc:[
      { p:'a cup of tea / a glass of water / a bottle of juice', vi:'đơn vị đếm cho đồ uống', ex:'Could I have a glass of water, please?' },
      { p:'eat out', vi:'ăn ngoài, ăn ở nhà hàng', ex:'We eat out twice a month.' },
      { p:'Are you ready to order?', vi:'Anh chị gọi món chưa ạ? — câu chuẩn của phục vụ', ex:'Are you ready to order, or do you need a minute?' }
    ],
    dialogue:[
      { sp:'Waiter', en:'Good evening. Are you ready to order?', vi:'Chào buổi tối. Anh chị gọi món chưa ạ?' },
      { sp:'Quan', en:'Yes. I would like the chicken soup, please.', vi:'Rồi ạ. Cho tôi món súp gà.' },
      { sp:'Waiter', en:'And for you?', vi:'Còn quý khách?' },
      { sp:'Linh', en:'I do not eat meat. Do you have any vegetable dishes?', vi:'Tôi không ăn thịt. Nhà hàng có món rau nào không?' },
      { sp:'Waiter', en:'Of course. The fried rice with vegetables is very good.', vi:'Dạ có. Cơm rang rau củ rất ngon ạ.' },
      { sp:'Linh', en:'Perfect. And two glasses of water, please.', vi:'Tuyệt. Cho thêm hai cốc nước nữa ạ.' },
      { sp:'Waiter', en:'Certainly. I will bring the bill later.', vi:'Vâng ạ. Lát nữa tôi mang hoá đơn ra.' }
    ],
    reading:{ en:'Quan likes Vietnamese food very much. For breakfast he usually has a bowl of pho or some bread with eggs. He does not drink coffee in the evening because he cannot sleep after it. Linh does not eat meat, so when they eat out they choose a restaurant with a lot of vegetable dishes. Their favourite place is a small shop near the university. The food there is cheap and delicious, and the bill is never more than a hundred thousand dong.',
      vi:'Quân rất thích món Việt. Bữa sáng cậu thường ăn một bát phở hoặc bánh mì với trứng. Cậu không uống cà phê buổi tối vì uống xong sẽ mất ngủ. Linh không ăn thịt, nên khi đi ăn ngoài hai người chọn quán có nhiều món rau. Chỗ ưa thích của họ là một quán nhỏ gần trường. Đồ ăn ở đó rẻ và ngon, hoá đơn không bao giờ quá một trăm nghìn đồng.' } },

  { level:'a1', no:7, en:'Shopping and prices', vi:'Mua sắm và giá cả', skill:'Hỏi giá, mặc cả lịch sự',
    grammar:[
      { form:'How much is it? / How much are they?', vi:'Hỏi giá — is cho số ít, are cho số nhiều.', note:'Cũng dùng «How much does it cost?» — trang trọng hơn một chút.', ex:{ en:'How much are these shoes?', vi:'Đôi giày này bao nhiêu tiền?' } },
      { form:'this / that / these / those trong cửa hàng', vi:'Chỉ vật gần và xa khi mua bán.', note:'Kèm cử chỉ tay, người bán sẽ hiểu ngay.', ex:{ en:'I will take this one, not that one.', vi:'Tôi lấy cái này, không phải cái kia.' } },
      { form:'Can I…? / Could I…? — xin phép lịch sự', vi:'Could lịch sự hơn Can.', note:'Trong cửa hàng, «Could I have…?» là mẫu an toàn nhất.', ex:{ en:'Could I try this on, please?', vi:'Tôi mặc thử cái này được không ạ?' } },
      { form:'too + tính từ / not + tính từ + enough', vi:'too = quá mức · not enough = chưa đủ.', note:'too expensive (đắt quá) ≠ not cheap enough (chưa đủ rẻ).', ex:{ en:'It is too big and it is not cheap enough.', vi:'Nó to quá và cũng chưa đủ rẻ.' } }
    ],
    vocab:[
      { en:'shop', uk:'ʃɒp', us:'ʃɑːp', vi:'cửa hàng; mua sắm', pos:'danh từ, động từ', note:'Mỹ hay dùng store' },
      { en:'price', uk:'praɪs', us:'praɪs', vi:'giá', pos:'danh từ' },
      { en:'money', uk:'ˈmʌni', us:'ˈmʌni', vi:'tiền', pos:'danh từ' },
      { en:'cash', uk:'kæʃ', us:'kæʃ', vi:'tiền mặt', pos:'danh từ' },
      { en:'card', uk:'kɑːd', us:'kɑːrd', vi:'thẻ', pos:'danh từ' },
      { en:'change', uk:'tʃeɪndʒ', us:'tʃeɪndʒ', vi:'tiền thừa; thay đổi', pos:'danh từ, động từ' },
      { en:'size', uk:'saɪz', us:'saɪz', vi:'cỡ, kích thước', pos:'danh từ' },
      { en:'colour', uk:'ˈkʌlə', us:'ˈkʌlər', vi:'màu sắc', pos:'danh từ', note:'Mỹ viết color' },
      { en:'cheap', uk:'tʃiːp', us:'tʃiːp', vi:'rẻ', pos:'tính từ' },
      { en:'expensive', uk:'ɪkˈspensɪv', us:'ɪkˈspensɪv', vi:'đắt', pos:'tính từ' },
      { en:'buy', uk:'baɪ', us:'baɪ', vi:'mua', pos:'động từ', note:'bought — bought' },
      { en:'sell', uk:'sel', us:'sel', vi:'bán', pos:'động từ', note:'sold — sold' },
      { en:'pay', uk:'peɪ', us:'peɪ', vi:'trả tiền', pos:'động từ', note:'paid — paid' },
      { en:'cost', uk:'kɒst', us:'kɔːst', vi:'có giá là', pos:'động từ', note:'cost — cost' },
      { en:'discount', uk:'ˈdɪskaʊnt', us:'ˈdɪskaʊnt', vi:'giảm giá', pos:'danh từ' },
      { en:'receipt', uk:'rɪˈsiːt', us:'rɪˈsiːt', vi:'hoá đơn, biên lai', pos:'danh từ', note:'p câm' },
      { en:'customer', uk:'ˈkʌstəmə', us:'ˈkʌstəmər', vi:'khách hàng', pos:'danh từ' },
      { en:'try', uk:'traɪ', us:'traɪ', vi:'thử', pos:'động từ' },
      { en:'clothes', uk:'kləʊðz', us:'kloʊðz', vi:'quần áo', pos:'danh từ', note:'luôn số nhiều' },
      { en:'shoes', uk:'ʃuːz', us:'ʃuːz', vi:'giày', pos:'danh từ' }
    ],
    colloc:[
      { p:'pay by card / pay in cash', vi:'trả bằng thẻ / trả tiền mặt', ex:'Can I pay by card?' },
      { p:'on sale / for sale', vi:'on sale = đang giảm giá · for sale = đang được bán', ex:'The house is for sale, and the furniture is on sale.' },
      { p:'a good deal / value for money', vi:'món hời / đáng đồng tiền', ex:'Fifty thousand for this? That is a good deal.' }
    ],
    dialogue:[
      { sp:'Quan', en:'Excuse me, how much is this shirt?', vi:'Xin lỗi, cái áo này bao nhiêu ạ?' },
      { sp:'Seller', en:'It is three hundred thousand dong.', vi:'Ba trăm nghìn ạ.' },
      { sp:'Quan', en:'That is a bit expensive. Is there a discount?', vi:'Hơi đắt. Có giảm giá không ạ?' },
      { sp:'Seller', en:'For you, two hundred and eighty.', vi:'Với anh thì hai trăm tám mươi.' },
      { sp:'Quan', en:'Could I try it on first?', vi:'Tôi mặc thử trước được không?' },
      { sp:'Seller', en:'Of course. What size are you?', vi:'Được ạ. Anh mặc cỡ nào?' },
      { sp:'Quan', en:'Medium, I think. Can I pay by card?', vi:'Chắc là cỡ M. Tôi trả bằng thẻ được không ạ?' }
    ],
    reading:{ en:'Last Sunday Quan went shopping with Linh. He wanted a new shirt for a job interview. The first shop was very expensive, so they went to a small market near the river. There the prices were much lower, but the shop did not take cards. Quan paid in cash and the seller gave him the change and a receipt. Linh bought nothing, but she said the trip was fun.',
      vi:'Chủ nhật trước Quân đi mua sắm cùng Linh. Cậu muốn mua áo sơ mi mới cho buổi phỏng vấn. Cửa hàng đầu tiên rất đắt nên hai người tới một khu chợ nhỏ gần sông. Ở đó giá thấp hơn nhiều, nhưng quán không nhận thẻ. Quân trả tiền mặt, người bán trả lại tiền thừa và một tờ biên lai. Linh không mua gì cả, nhưng cô ấy bảo chuyến đi vui.' } },

  { level:'a1', no:8, en:'What are you doing now?', vi:'Thì hiện tại tiếp diễn', skill:'Kể việc đang xảy ra',
    grammar:[
      { form:'be + V-ing — hiện tại tiếp diễn', vi:'Diễn tả việc đang xảy ra ngay lúc nói hoặc quanh thời điểm này.', note:'Quy tắc thêm -ing: make → making · run → running · lie → lying.', ex:{ en:'I am waiting for the bus.', vi:'Tôi đang đợi xe buýt.' } },
      { form:'Hiện tại đơn hay tiếp diễn?', vi:'Đơn = thói quen, sự thật; tiếp diễn = đang diễn ra, tạm thời.', note:'She works in a bank (nghề nghiệp) ≠ She is working late today (hôm nay thôi).', ex:{ en:'He usually walks, but today he is taking a taxi.', vi:'Anh ấy thường đi bộ, nhưng hôm nay đi taxi.' } },
      { form:'Động từ không chia tiếp diễn', vi:'know, like, want, need, believe, understand, belong, seem…', note:'Chúng chỉ trạng thái chứ không phải hành động.', ex:{ en:'I know the answer. (không nói «I am knowing»)', vi:'Tôi biết câu trả lời.' } },
      { form:'right now · at the moment · these days', vi:'Trạng ngữ đi kèm hiện tại tiếp diễn.', note:'these days dùng cho việc tạm thời kéo dài: I am living with my aunt these days.', ex:{ en:'What are you doing at the moment?', vi:'Bạn đang làm gì đấy?' } }
    ],
    vocab:[
      { en:'wait', uk:'weɪt', us:'weɪt', vi:'đợi', pos:'động từ', note:'wait FOR someone' },
      { en:'watch', uk:'wɒtʃ', us:'wɑːtʃ', vi:'xem, theo dõi', pos:'động từ' },
      { en:'listen', uk:'ˈlɪsn', us:'ˈlɪsn', vi:'nghe', pos:'động từ', note:'t câm; listen TO music' },
      { en:'read', uk:'riːd', us:'riːd', vi:'đọc', pos:'động từ', note:'quá khứ read /red/' },
      { en:'write', uk:'raɪt', us:'raɪt', vi:'viết', pos:'động từ', note:'w câm; wrote — written' },
      { en:'cook', uk:'kʊk', us:'kʊk', vi:'nấu ăn', pos:'động từ' },
      { en:'clean', uk:'kliːn', us:'kliːn', vi:'dọn dẹp; sạch', pos:'động từ, tính từ' },
      { en:'wash', uk:'wɒʃ', us:'wɑːʃ', vi:'rửa, giặt', pos:'động từ' },
      { en:'drive', uk:'draɪv', us:'draɪv', vi:'lái xe', pos:'động từ', note:'drove — driven' },
      { en:'walk', uk:'wɔːk', us:'wɔːk', vi:'đi bộ', pos:'động từ', note:'l câm' },
      { en:'sit', uk:'sɪt', us:'sɪt', vi:'ngồi', pos:'động từ' },
      { en:'stand', uk:'stænd', us:'stænd', vi:'đứng', pos:'động từ' },
      { en:'sleep', uk:'sliːp', us:'sliːp', vi:'ngủ', pos:'động từ', note:'slept — slept' },
      { en:'play', uk:'pleɪ', us:'pleɪ', vi:'chơi', pos:'động từ' },
      { en:'call', uk:'kɔːl', us:'kɔːl', vi:'gọi (điện)', pos:'động từ' },
      { en:'rain', uk:'reɪn', us:'reɪn', vi:'mưa', pos:'động từ, danh từ' },
      { en:'noise', uk:'nɔɪz', us:'nɔɪz', vi:'tiếng ồn', pos:'danh từ' },
      { en:'moment', uk:'ˈməʊmənt', us:'ˈmoʊmənt', vi:'khoảnh khắc', pos:'danh từ' },
      { en:'outside', uk:'ˌaʊtˈsaɪd', us:'ˌaʊtˈsaɪd', vi:'bên ngoài', pos:'trạng từ' },
      { en:'inside', uk:'ˌɪnˈsaɪd', us:'ˌɪnˈsaɪd', vi:'bên trong', pos:'trạng từ' }
    ],
    colloc:[
      { p:'wait for / listen to / look at', vi:'Ba động từ này bắt buộc có giới từ riêng.', ex:'I am waiting for Linh and listening to music.' },
      { p:'do the washing-up / do the cleaning', vi:'việc nhà — dùng «do» chứ không dùng «make»', ex:'He is doing the washing-up now.' },
      { p:'be on the phone', vi:'đang nói chuyện điện thoại', ex:'She is on the phone at the moment.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Hi Quan. What are you doing?', vi:'Chào Quân. Bạn đang làm gì đấy?' },
      { sp:'Quan', en:'I am waiting for the bus. It is raining here.', vi:'Tớ đang đợi xe buýt. Ở đây đang mưa.' },
      { sp:'Linh', en:'Really? It is not raining in my area.', vi:'Thật à? Chỗ tớ không mưa.' },
      { sp:'Quan', en:'Where are you? I can hear a lot of noise.', vi:'Bạn đang ở đâu? Tớ nghe thấy ồn lắm.' },
      { sp:'Linh', en:'I am sitting in a coffee shop. Some people are playing music.', vi:'Tớ đang ngồi trong quán cà phê. Có mấy người đang chơi nhạc.' },
      { sp:'Quan', en:'Sounds nice. I am coming. Wait for me!', vi:'Nghe hay đấy. Tớ đến ngay. Đợi tớ nhé!' }
    ],
    reading:{ en:'It is seven o’clock on Tuesday evening. Quan is sitting at his desk and writing an email. His sister Mai is in the kitchen. She is cooking dinner and listening to music at the same time. Their father is not at home; he is still working at the hospital. Outside it is raining hard and a lot of people are waiting under the roof of the shop opposite. Quan is not going out tonight. He is staying at home and studying for his English test.',
      vi:'Bảy giờ tối thứ Ba. Quân đang ngồi ở bàn và viết email. Em gái cậu, Mai, đang ở trong bếp. Em ấy vừa nấu bữa tối vừa nghe nhạc. Bố họ không có nhà; ông vẫn đang làm ở bệnh viện. Bên ngoài mưa to và nhiều người đang trú dưới mái hiên quán đối diện. Tối nay Quân không ra ngoài. Cậu ở nhà và ôn cho bài kiểm tra tiếng Anh.' } },

  { level:'a1', no:9, en:'Things I can do', vi:'Khả năng và cho phép', skill:'Nói về khả năng',
    grammar:[
      { form:'can / cannot (can’t) — khả năng', vi:'Sau can luôn là động từ nguyên thể KHÔNG «to».', note:'Đọc: dạng yếu /kən/ trong câu khẳng định; can’t đọc /kɑːnt/ (Anh) hoặc /kænt/ (Mỹ).', ex:{ en:'I can swim but I cannot drive.', vi:'Tôi biết bơi nhưng không biết lái xe.' } },
      { form:'can — xin phép và đề nghị', vi:'Can I…? (xin phép) · Can you…? (nhờ vả) · Shall I…? (đề nghị giúp).', note:'Could lịch sự hơn can trong cả hai trường hợp.', ex:{ en:'Can you help me with this, please?', vi:'Bạn giúp tôi cái này được không?' } },
      { form:'Trạng từ chỉ cách thức', vi:'Thường thêm -ly vào tính từ: slow → slowly, careful → carefully.', note:'Bất quy tắc: good → well, fast → fast, hard → hard (hardly nghĩa khác hẳn: hầu như không).', ex:{ en:'She speaks English very well.', vi:'Cô ấy nói tiếng Anh rất giỏi.' } },
      { form:'be good at + V-ing / danh từ', vi:'Giỏi việc gì.', note:'Cùng nhóm: be bad at, be interested in, be afraid of — đều theo sau bởi V-ing.', ex:{ en:'He is good at playing the guitar.', vi:'Anh ấy chơi ghi-ta giỏi.' } }
    ],
    vocab:[
      { en:'swim', uk:'swɪm', us:'swɪm', vi:'bơi', pos:'động từ', note:'swam — swum' },
      { en:'sing', uk:'sɪŋ', us:'sɪŋ', vi:'hát', pos:'động từ', note:'sang — sung' },
      { en:'dance', uk:'dɑːns', us:'dæns', vi:'nhảy, khiêu vũ', pos:'động từ' },
      { en:'draw', uk:'drɔː', us:'drɔː', vi:'vẽ', pos:'động từ', note:'drew — drawn' },
      { en:'ride', uk:'raɪd', us:'raɪd', vi:'đi (xe đạp, xe máy, ngựa)', pos:'động từ', note:'rode — ridden' },
      { en:'cook', uk:'kʊk', us:'kʊk', vi:'nấu ăn', pos:'động từ' },
      { en:'guitar', uk:'ɡɪˈtɑː', us:'ɡɪˈtɑːr', vi:'đàn ghi-ta', pos:'danh từ', note:'trọng âm âm tiết sau' },
      { en:'language', uk:'ˈlæŋɡwɪdʒ', us:'ˈlæŋɡwɪdʒ', vi:'ngôn ngữ', pos:'danh từ' },
      { en:'computer', uk:'kəmˈpjuːtə', us:'kəmˈpjuːtər', vi:'máy tính', pos:'danh từ' },
      { en:'able', uk:'ˈeɪbl', us:'ˈeɪbl', vi:'có thể', pos:'tính từ', note:'be able to = can' },
      { en:'well', uk:'wel', us:'wel', vi:'giỏi, tốt', pos:'trạng từ' },
      { en:'badly', uk:'ˈbædli', us:'ˈbædli', vi:'tệ, kém', pos:'trạng từ' },
      { en:'slowly', uk:'ˈsləʊli', us:'ˈsloʊli', vi:'chậm rãi', pos:'trạng từ' },
      { en:'quickly', uk:'ˈkwɪkli', us:'ˈkwɪkli', vi:'nhanh chóng', pos:'trạng từ' },
      { en:'carefully', uk:'ˈkeəfəli', us:'ˈkerfəli', vi:'cẩn thận', pos:'trạng từ' },
      { en:'fluently', uk:'ˈfluːəntli', us:'ˈfluːəntli', vi:'trôi chảy', pos:'trạng từ' },
      { en:'easy', uk:'ˈiːzi', us:'ˈiːzi', vi:'dễ', pos:'tính từ' },
      { en:'hard', uk:'hɑːd', us:'hɑːrd', vi:'khó; chăm chỉ', pos:'tính từ, trạng từ' },
      { en:'practise', uk:'ˈpræktɪs', us:'ˈpræktɪs', vi:'luyện tập', pos:'động từ', note:'Mỹ viết practice' },
      { en:'lesson', uk:'ˈlesn', us:'ˈlesn', vi:'bài học', pos:'danh từ' }
    ],
    colloc:[
      { p:'speak a language fluently', vi:'nói một ngôn ngữ trôi chảy', ex:'She speaks three languages fluently.' },
      { p:'play the guitar / play football', vi:'Nhạc cụ có «the», môn thể thao thì không.', ex:'He plays the piano and plays football.' },
      { p:'be able to', vi:'thay cho can ở những thì mà can không có', ex:'I will be able to help you tomorrow.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Can you play any musical instruments?', vi:'Bạn chơi được nhạc cụ nào không?' },
      { sp:'Quan', en:'I can play the guitar, but not very well.', vi:'Tớ chơi được ghi-ta, nhưng không giỏi lắm.' },
      { sp:'Linh', en:'That is still good. Can you sing too?', vi:'Thế cũng giỏi rồi. Bạn hát được không?' },
      { sp:'Quan', en:'No, I sing badly. What about you?', vi:'Không, tớ hát dở lắm. Còn bạn?' },
      { sp:'Linh', en:'I cannot play anything, but I can dance.', vi:'Tớ không chơi được nhạc cụ nào, nhưng tớ nhảy được.' },
      { sp:'Quan', en:'Really? Can you teach me?', vi:'Thật à? Bạn dạy tớ được không?' },
      { sp:'Linh', en:'Of course, but you have to practise every day.', vi:'Được chứ, nhưng bạn phải tập mỗi ngày đấy.' }
    ],
    reading:{ en:'Quan can do a lot of things, but not all of them well. He can cook simple meals and he can ride a motorbike very carefully. He can speak Vietnamese and English, and he can read a little Chinese. He cannot swim, and this is a problem because his friends often go to the beach in summer. This year he is taking swimming lessons twice a week. His teacher says he learns quickly, so he will probably be able to swim by August.',
      vi:'Quân làm được nhiều việc, nhưng không phải việc nào cũng giỏi. Cậu nấu được vài món đơn giản và đi xe máy rất cẩn thận. Cậu nói được tiếng Việt và tiếng Anh, đọc được một chút tiếng Trung. Cậu không biết bơi, và đó là vấn đề vì bạn bè hay đi biển vào mùa hè. Năm nay cậu học bơi hai buổi một tuần. Thầy dạy bảo cậu tiếp thu nhanh, nên chắc tới tháng Tám cậu sẽ bơi được.' } },

  { level:'a1', no:10, en:'Yesterday: was and were', vi:'Quá khứ của động từ «be»', skill:'Kể chuyện đã qua',
    grammar:[
      { form:'was / were — quá khứ của «be»', vi:'I/he/she/it → was · you/we/they → were.', note:'Phủ định: wasn’t, weren’t. Câu hỏi đảo lên đầu: Were you at home?', ex:{ en:'I was at home and they were at work.', vi:'Tôi ở nhà còn họ đi làm.' } },
      { form:'There was / There were', vi:'Quá khứ của there is / there are.', note:'was + số ít hoặc không đếm được · were + số nhiều.', ex:{ en:'There were a lot of people at the party.', vi:'Bữa tiệc có rất đông người.' } },
      { form:'Trạng ngữ chỉ quá khứ', vi:'yesterday, last night, last week, two days ago, in 2020.', note:'ago đứng SAU khoảng thời gian: three years ago, không phải «ago three years».', ex:{ en:'We met two years ago.', vi:'Chúng tôi gặp nhau cách đây hai năm.' } },
      { form:'born — được sinh ra', vi:'Luôn ở dạng bị động: was/were born.', note:'Không nói «I borned» hay «I was borned».', ex:{ en:'She was born in Hue in 2004.', vi:'Cô ấy sinh ở Huế năm 2004.' } }
    ],
    vocab:[
      { en:'yesterday', uk:'ˈjestədeɪ', us:'ˈjestərdeɪ', vi:'hôm qua', pos:'trạng từ' },
      { en:'ago', uk:'əˈɡəʊ', us:'əˈɡoʊ', vi:'cách đây', pos:'trạng từ' },
      { en:'last', uk:'lɑːst', us:'læst', vi:'vừa qua; cuối cùng', pos:'tính từ' },
      { en:'born', uk:'bɔːn', us:'bɔːrn', vi:'được sinh ra', pos:'phân từ' },
      { en:'party', uk:'ˈpɑːti', us:'ˈpɑːrti', vi:'bữa tiệc', pos:'danh từ' },
      { en:'holiday', uk:'ˈhɒlədeɪ', us:'ˈhɑːlədeɪ', vi:'kỳ nghỉ', pos:'danh từ', note:'Mỹ hay dùng vacation' },
      { en:'trip', uk:'trɪp', us:'trɪp', vi:'chuyến đi', pos:'danh từ' },
      { en:'beach', uk:'biːtʃ', us:'biːtʃ', vi:'bãi biển', pos:'danh từ' },
      { en:'weather', uk:'ˈweðə', us:'ˈweðər', vi:'thời tiết', pos:'danh từ', note:'không đếm được' },
      { en:'crowded', uk:'ˈkraʊdɪd', us:'ˈkraʊdɪd', vi:'đông đúc', pos:'tính từ' },
      { en:'empty', uk:'ˈempti', us:'ˈempti', vi:'trống, vắng', pos:'tính từ' },
      { en:'tired', uk:'ˈtaɪəd', us:'ˈtaɪərd', vi:'mệt', pos:'tính từ' },
      { en:'excited', uk:'ɪkˈsaɪtɪd', us:'ɪkˈsaɪtɪd', vi:'hào hứng', pos:'tính từ' },
      { en:'boring', uk:'ˈbɔːrɪŋ', us:'ˈbɔːrɪŋ', vi:'chán (gây chán)', pos:'tính từ', note:'bored = cảm thấy chán' },
      { en:'interesting', uk:'ˈɪntrəstɪŋ', us:'ˈɪntrəstɪŋ', vi:'thú vị', pos:'tính từ' },
      { en:'wonderful', uk:'ˈwʌndəfl', us:'ˈwʌndərfl', vi:'tuyệt vời', pos:'tính từ' },
      { en:'terrible', uk:'ˈterəbl', us:'ˈterəbl', vi:'tệ hại', pos:'tính từ' },
      { en:'weekend', uk:'ˌwiːkˈend', us:'ˈwiːkend', vi:'cuối tuần', pos:'danh từ' },
      { en:'ready', uk:'ˈredi', us:'ˈredi', vi:'sẵn sàng', pos:'tính từ' },
      { en:'sure', uk:'ʃʊə', us:'ʃʊr', vi:'chắc chắn', pos:'tính từ' }
    ],
    colloc:[
      { p:'How was your weekend?', vi:'Cuối tuần của bạn thế nào? — câu mở lời thứ Hai đầu tuần', ex:'Morning! How was your weekend?' },
      { p:'bored vs boring', vi:'-ed = cảm giác của người · -ing = tính chất của vật', ex:'I was bored because the film was boring.' },
      { p:'be born in / on', vi:'in + năm, tháng, nơi chốn · on + ngày cụ thể', ex:'He was born on 3 April 2004 in Hanoi.' }
    ],
    dialogue:[
      { sp:'Linh', en:'How was your weekend?', vi:'Cuối tuần của bạn thế nào?' },
      { sp:'Quan', en:'It was great. I was at the beach with my family.', vi:'Tuyệt lắm. Tớ đi biển cùng gia đình.' },
      { sp:'Linh', en:'Was the weather good?', vi:'Thời tiết có đẹp không?' },
      { sp:'Quan', en:'On Saturday it was terrible, but Sunday was sunny.', vi:'Thứ Bảy thì tệ, nhưng Chủ nhật nắng đẹp.' },
      { sp:'Linh', en:'Were there many people?', vi:'Có đông người không?' },
      { sp:'Quan', en:'Yes, it was very crowded. And your weekend?', vi:'Có, đông lắm. Còn cuối tuần của bạn?' },
      { sp:'Linh', en:'Nothing special. I was at home and I was quite bored.', vi:'Không có gì đặc biệt. Tớ ở nhà và khá chán.' }
    ],
    reading:{ en:'Quan was born in Hanoi in 2006. When he was a child, his family was not rich, but he was happy. There was a small garden behind their house and there were three big trees in it. His grandmother was a teacher and she was very kind to him. Last summer he was at the beach in Da Nang for a week. The hotel was cheap, the food was delicious and the weather was wonderful. It was the best holiday of his life so far.',
      vi:'Quân sinh ở Hà Nội năm 2006. Hồi nhỏ, gia đình cậu không giàu, nhưng cậu hạnh phúc. Sau nhà có một khu vườn nhỏ, trong đó có ba cây to. Bà cậu là giáo viên và rất thương cậu. Hè năm ngoái cậu ở biển Đà Nẵng một tuần. Khách sạn rẻ, đồ ăn ngon và thời tiết tuyệt vời. Đó là kỳ nghỉ đẹp nhất đời cậu cho tới giờ.' } },

  { level:'a1', no:11, en:'What happened last week?', vi:'Thì quá khứ đơn', skill:'Kể lại sự việc',
    grammar:[
      { form:'Động từ có quy tắc: thêm -ed', vi:'work → worked · study → studied · stop → stopped.', note:'Cách đọc đuôi -ed: /ɪd/ sau t, d · /t/ sau âm vô thanh · /d/ sau âm hữu thanh.', ex:{ en:'She studied English for three years.', vi:'Cô ấy học tiếng Anh ba năm.' } },
      { form:'Động từ bất quy tắc', vi:'go → went · see → saw · buy → bought · have → had.', note:'Phải học thuộc; khoảng 100 động từ bất quy tắc phủ hầu hết văn nói.', ex:{ en:'We went to the cinema and saw a good film.', vi:'Chúng tôi đi rạp và xem một phim hay.' } },
      { form:'did / did not — câu hỏi và phủ định', vi:'Dùng did, động từ chính trở về nguyên thể.', note:'«Did you went» là lỗi rất phổ biến — phải là «Did you go».', ex:{ en:'Did you go out last night? No, I did not.', vi:'Tối qua bạn có ra ngoài không? Không.' } },
      { form:'Nối câu chuyện: and, but, so, because, then', vi:'Các liên từ cơ bản để kể một chuỗi sự việc.', note:'Thứ tự thời gian: First… Then… After that… Finally…', ex:{ en:'It rained, so we stayed at home and watched a film.', vi:'Trời mưa nên chúng tôi ở nhà xem phim.' } }
    ],
    vocab:[
      { en:'happen', uk:'ˈhæpən', us:'ˈhæpən', vi:'xảy ra', pos:'động từ' },
      { en:'travel', uk:'ˈtrævl', us:'ˈtrævl', vi:'đi lại, du lịch', pos:'động từ', note:'Anh: travelled · Mỹ: traveled' },
      { en:'visit', uk:'ˈvɪzɪt', us:'ˈvɪzɪt', vi:'thăm', pos:'động từ' },
      { en:'stay', uk:'steɪ', us:'steɪ', vi:'ở lại', pos:'động từ' },
      { en:'move', uk:'muːv', us:'muːv', vi:'di chuyển, chuyển nhà', pos:'động từ' },
      { en:'begin', uk:'bɪˈɡɪn', us:'bɪˈɡɪn', vi:'bắt đầu', pos:'động từ', note:'began — begun' },
      { en:'forget', uk:'fəˈɡet', us:'fərˈɡet', vi:'quên', pos:'động từ', note:'forgot — forgotten' },
      { en:'remember', uk:'rɪˈmembə', us:'rɪˈmembər', vi:'nhớ', pos:'động từ' },
      { en:'lose', uk:'luːz', us:'luːz', vi:'mất, thua', pos:'động từ', note:'lost — lost' },
      { en:'find', uk:'faɪnd', us:'faɪnd', vi:'tìm thấy', pos:'động từ', note:'found — found' },
      { en:'send', uk:'send', us:'send', vi:'gửi', pos:'động từ', note:'sent — sent' },
      { en:'receive', uk:'rɪˈsiːv', us:'rɪˈsiːv', vi:'nhận', pos:'động từ' },
      { en:'answer', uk:'ˈɑːnsə', us:'ˈænsər', vi:'trả lời', pos:'động từ, danh từ', note:'w câm' },
      { en:'ask', uk:'ɑːsk', us:'æsk', vi:'hỏi; nhờ', pos:'động từ' },
      { en:'letter', uk:'ˈletə', us:'ˈletər', vi:'lá thư; chữ cái', pos:'danh từ' },
      { en:'ticket', uk:'ˈtɪkɪt', us:'ˈtɪkɪt', vi:'vé', pos:'danh từ' },
      { en:'cinema', uk:'ˈsɪnəmə', us:'ˈsɪnəmə', vi:'rạp chiếu phim', pos:'danh từ', note:'Mỹ: movie theater' },
      { en:'film', uk:'fɪlm', us:'fɪlm', vi:'phim', pos:'danh từ', note:'Mỹ: movie' },
      { en:'story', uk:'ˈstɔːri', us:'ˈstɔːri', vi:'câu chuyện', pos:'danh từ' },
      { en:'finally', uk:'ˈfaɪnəli', us:'ˈfaɪnəli', vi:'cuối cùng', pos:'trạng từ' }
    ],
    colloc:[
      { p:'What happened?', vi:'Chuyện gì đã xảy ra? — không dùng did: «What did happen» chỉ để nhấn mạnh.', ex:'You look upset. What happened?' },
      { p:'go to the cinema / see a film', vi:'đi xem phim — dùng «see» chứ không dùng «look»', ex:'We went to the cinema and saw a French film.' },
      { p:'make a mistake', vi:'phạm sai lầm — dùng make, không dùng do', ex:'I made a mistake in the test.' }
    ],
    dialogue:[
      { sp:'Linh', en:'You did not answer my message yesterday. What happened?', vi:'Hôm qua bạn không trả lời tin nhắn. Có chuyện gì thế?' },
      { sp:'Quan', en:'Sorry! I lost my phone in the morning.', vi:'Xin lỗi! Buổi sáng tớ làm mất điện thoại.' },
      { sp:'Linh', en:'Oh no. Did you find it?', vi:'Trời ạ. Bạn tìm thấy chưa?' },
      { sp:'Quan', en:'Yes. I went back to the coffee shop and it was still on the table.', vi:'Rồi. Tớ quay lại quán cà phê và nó vẫn ở trên bàn.' },
      { sp:'Linh', en:'You were lucky. What did you do after that?', vi:'Bạn may đấy. Sau đó bạn làm gì?' },
      { sp:'Quan', en:'I bought a ticket and went to the cinema alone.', vi:'Tớ mua vé rồi đi xem phim một mình.' },
      { sp:'Linh', en:'Was the film good?', vi:'Phim có hay không?' },
      { sp:'Quan', en:'Not really. I nearly fell asleep!', vi:'Không hay lắm. Tớ suýt ngủ gật!' }
    ],
    reading:{ en:'Last week was very busy for Quan. On Monday he studied at the library until nine. On Tuesday he lost his phone but he found it again in a coffee shop. On Wednesday he sent an email to a company and two days later they answered and invited him to an interview. On Friday he did not go out because he wanted to prepare. On Saturday he visited his grandmother, and she cooked his favourite soup. Finally, on Sunday he slept until eleven.',
      vi:'Tuần trước Quân rất bận. Thứ Hai cậu học ở thư viện tới chín giờ. Thứ Ba cậu mất điện thoại nhưng lại tìm thấy trong một quán cà phê. Thứ Tư cậu gửi email cho một công ty, hai ngày sau họ trả lời và mời cậu tới phỏng vấn. Thứ Sáu cậu không đi chơi vì muốn chuẩn bị. Thứ Bảy cậu tới thăm bà, bà nấu món canh cậu thích nhất. Cuối cùng, Chủ nhật cậu ngủ tới mười một giờ.' } },

  { level:'a1', no:12, en:'Weather and seasons', vi:'Thời tiết và mùa', skill:'Nói chuyện xã giao',
    grammar:[
      { form:'It is + thời tiết', vi:'«It» là chủ ngữ giả bắt buộc khi nói về thời tiết.', note:'Không nói «Is raining» — phải có It: It is raining.', ex:{ en:'It is cloudy and quite windy today.', vi:'Hôm nay trời nhiều mây và khá gió.' } },
      { form:'Danh từ hay tính từ?', vi:'rain (danh/động từ) · rainy (tính từ) · sun → sunny · wind → windy · cloud → cloudy.', note:'It is raining (đang mưa) ≠ It is rainy (trời mưa nhiều, nói chung).', ex:{ en:'In summer it is often rainy in the north.', vi:'Mùa hè miền Bắc hay mưa.' } },
      { form:'Câu hỏi đuôi đơn giản', vi:'…, isn’t it? · …, is it? — dùng để mở lời hoặc xác nhận.', note:'Khẳng định thì đuôi phủ định và ngược lại: It is cold, isn’t it?', ex:{ en:'Lovely day, isn’t it?', vi:'Hôm nay đẹp trời nhỉ?' } },
      { form:'so / such', vi:'so + tính từ · such a + tính từ + danh từ.', note:'It is so hot ≠ It is such a hot day.', ex:{ en:'It was such a cold night that we could not sleep.', vi:'Đêm lạnh đến mức chúng tôi không ngủ được.' } }
    ],
    vocab:[
      { en:'weather', uk:'ˈweðə', us:'ˈweðər', vi:'thời tiết', pos:'danh từ' },
      { en:'sunny', uk:'ˈsʌni', us:'ˈsʌni', vi:'nắng', pos:'tính từ' },
      { en:'cloudy', uk:'ˈklaʊdi', us:'ˈklaʊdi', vi:'nhiều mây', pos:'tính từ' },
      { en:'windy', uk:'ˈwɪndi', us:'ˈwɪndi', vi:'nhiều gió', pos:'tính từ' },
      { en:'rainy', uk:'ˈreɪni', us:'ˈreɪni', vi:'mưa nhiều', pos:'tính từ' },
      { en:'snow', uk:'snəʊ', us:'snoʊ', vi:'tuyết', pos:'danh từ, động từ' },
      { en:'storm', uk:'stɔːm', us:'stɔːrm', vi:'bão', pos:'danh từ' },
      { en:'fog', uk:'fɒɡ', us:'fɑːɡ', vi:'sương mù', pos:'danh từ' },
      { en:'hot', uk:'hɒt', us:'hɑːt', vi:'nóng', pos:'tính từ' },
      { en:'warm', uk:'wɔːm', us:'wɔːrm', vi:'ấm', pos:'tính từ' },
      { en:'cool', uk:'kuːl', us:'kuːl', vi:'mát', pos:'tính từ' },
      { en:'cold', uk:'kəʊld', us:'koʊld', vi:'lạnh', pos:'tính từ' },
      { en:'wet', uk:'wet', us:'wet', vi:'ướt', pos:'tính từ' },
      { en:'dry', uk:'draɪ', us:'draɪ', vi:'khô', pos:'tính từ' },
      { en:'spring', uk:'sprɪŋ', us:'sprɪŋ', vi:'mùa xuân', pos:'danh từ' },
      { en:'summer', uk:'ˈsʌmə', us:'ˈsʌmər', vi:'mùa hè', pos:'danh từ' },
      { en:'autumn', uk:'ˈɔːtəm', us:'ˈɔːtəm', vi:'mùa thu', pos:'danh từ', note:'Mỹ: fall; n câm' },
      { en:'winter', uk:'ˈwɪntə', us:'ˈwɪntər', vi:'mùa đông', pos:'danh từ' },
      { en:'temperature', uk:'ˈtemprətʃə', us:'ˈtemprətʃər', vi:'nhiệt độ', pos:'danh từ' },
      { en:'degree', uk:'dɪˈɡriː', us:'dɪˈɡriː', vi:'độ', pos:'danh từ' }
    ],
    colloc:[
      { p:'What is the weather like?', vi:'Thời tiết thế nào? — «like» ở đây nghĩa là «ra sao», không phải «thích».', ex:'What is the weather like in Hanoi in July?' },
      { p:'It looks like rain.', vi:'Trời có vẻ sắp mưa.', ex:'Take an umbrella — it looks like rain.' },
      { p:'be freezing / be boiling', vi:'lạnh cóng / nóng như thiêu — cách nói phóng đại rất thường gặp', ex:'It is absolutely freezing out there.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Lovely day, isn’t it?', vi:'Hôm nay đẹp trời nhỉ?' },
      { sp:'Quan', en:'Yes, but it was terrible yesterday.', vi:'Ừ, nhưng hôm qua tệ lắm.' },
      { sp:'Linh', en:'I know. There was a storm in the evening.', vi:'Tớ biết. Buổi tối có bão.' },
      { sp:'Quan', en:'What is the weather like in Hue in winter?', vi:'Mùa đông ở Huế thời tiết thế nào?' },
      { sp:'Linh', en:'It is cool and very rainy. Sometimes it rains for a week.', vi:'Trời mát và mưa nhiều. Có khi mưa cả tuần.' },
      { sp:'Quan', en:'Here it is cold and dry. Last January it was only eight degrees.', vi:'Ở đây lạnh và khô. Tháng Giêng năm ngoái chỉ tám độ.' },
      { sp:'Linh', en:'That is freezing for us!', vi:'Với bọn tớ thì lạnh cóng luôn!' }
    ],
    reading:{ en:'Vietnam has very different weather from north to south. In Hanoi there are four seasons. Spring is warm and wet, summer is hot with a lot of rain, autumn is dry and comfortable, and winter is cold — sometimes only ten degrees. In Ho Chi Minh City there are only two seasons: the dry season and the rainy season. In the rainy season it often rains hard for half an hour in the afternoon and then the sun comes out again. Most people say autumn is the best season in the north.',
      vi:'Thời tiết Việt Nam khác nhau rất nhiều từ Bắc vào Nam. Ở Hà Nội có bốn mùa. Mùa xuân ấm và ẩm, mùa hè nóng và mưa nhiều, mùa thu khô ráo dễ chịu, mùa đông lạnh — có khi chỉ mười độ. Ở Thành phố Hồ Chí Minh chỉ có hai mùa: mùa khô và mùa mưa. Mùa mưa thường mưa to nửa tiếng vào buổi chiều rồi nắng lại. Phần lớn mọi người nói mùa thu là mùa đẹp nhất ở miền Bắc.' } },

  { level:'a1', no:13, en:'Clothes and colours', vi:'Quần áo và màu sắc', skill:'Miêu tả người',
    grammar:[
      { form:'Trật tự tính từ', vi:'Ý kiến → kích thước → tuổi → hình dáng → màu → nguồn gốc → chất liệu → danh từ.', note:'a nice long black leather coat — đảo thứ tự sẽ nghe rất sai với người bản ngữ.', ex:{ en:'She has a beautiful old silk dress.', vi:'Cô ấy có một chiếc váy lụa cũ rất đẹp.' } },
      { form:'wear / put on / dress', vi:'wear = đang mặc (trạng thái) · put on = mặc vào (hành động) · get dressed = mặc quần áo.', note:'wear cũng dùng cho kính, giày, nước hoa, kiểu tóc.', ex:{ en:'He is wearing glasses today.', vi:'Hôm nay anh ấy đeo kính.' } },
      { form:'Câu hỏi miêu tả người', vi:'What does he look like? (ngoại hình) · What is he like? (tính cách).', note:'Hai câu rất giống nhau nhưng trả lời hoàn toàn khác nhau.', ex:{ en:'What does she look like? She is tall with long hair.', vi:'Cô ấy trông thế nào? Cô ấy cao, tóc dài.' } },
      { form:'have got + đặc điểm', vi:'Miêu tả tóc, mắt, chiều cao.', note:'She has got blue eyes / She has blue eyes — cả hai đều đúng.', ex:{ en:'He has got short black hair.', vi:'Anh ấy tóc đen ngắn.' } }
    ],
    vocab:[
      { en:'shirt', uk:'ʃɜːt', us:'ʃɜːrt', vi:'áo sơ mi', pos:'danh từ' },
      { en:'trousers', uk:'ˈtraʊzəz', us:'ˈtraʊzərz', vi:'quần dài (Anh)', pos:'danh từ', note:'Mỹ: pants; luôn số nhiều' },
      { en:'dress', uk:'dres', us:'dres', vi:'váy liền', pos:'danh từ' },
      { en:'skirt', uk:'skɜːt', us:'skɜːrt', vi:'chân váy', pos:'danh từ' },
      { en:'jacket', uk:'ˈdʒækɪt', us:'ˈdʒækɪt', vi:'áo khoác ngắn', pos:'danh từ' },
      { en:'coat', uk:'kəʊt', us:'koʊt', vi:'áo khoác dài', pos:'danh từ' },
      { en:'hat', uk:'hæt', us:'hæt', vi:'mũ', pos:'danh từ' },
      { en:'glasses', uk:'ˈɡlɑːsɪz', us:'ˈɡlæsɪz', vi:'kính', pos:'danh từ', note:'luôn số nhiều' },
      { en:'wear', uk:'weə', us:'wer', vi:'mặc, đeo', pos:'động từ', note:'wore — worn' },
      { en:'white', uk:'waɪt', us:'waɪt', vi:'trắng', pos:'tính từ' },
      { en:'black', uk:'blæk', us:'blæk', vi:'đen', pos:'tính từ' },
      { en:'red', uk:'red', us:'red', vi:'đỏ', pos:'tính từ' },
      { en:'blue', uk:'bluː', us:'bluː', vi:'xanh dương', pos:'tính từ' },
      { en:'green', uk:'ɡriːn', us:'ɡriːn', vi:'xanh lá', pos:'tính từ' },
      { en:'yellow', uk:'ˈjeləʊ', us:'ˈjeloʊ', vi:'vàng', pos:'tính từ' },
      { en:'brown', uk:'braʊn', us:'braʊn', vi:'nâu', pos:'tính từ' },
      { en:'grey', uk:'ɡreɪ', us:'ɡreɪ', vi:'xám', pos:'tính từ', note:'Mỹ viết gray' },
      { en:'tall', uk:'tɔːl', us:'tɔːl', vi:'cao', pos:'tính từ' },
      { en:'short', uk:'ʃɔːt', us:'ʃɔːrt', vi:'thấp, ngắn', pos:'tính từ' },
      { en:'hair', uk:'heə', us:'her', vi:'tóc', pos:'danh từ', note:'không đếm được khi nói về mái tóc' }
    ],
    colloc:[
      { p:'get dressed / get changed', vi:'mặc đồ vào / thay đồ', ex:'Give me five minutes to get changed.' },
      { p:'It suits you. / It fits you.', vi:'suit = hợp với bạn (kiểu, màu) · fit = vừa cỡ', ex:'The colour suits you but the size does not fit.' },
      { p:'a pair of trousers / shoes / glasses', vi:'Danh từ số nhiều cố định phải đếm bằng «a pair of».', ex:'I bought two pairs of shoes.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Do you know Mr Brown?', vi:'Bạn có biết thầy Brown không?' },
      { sp:'Quan', en:'I am not sure. What does he look like?', vi:'Tớ không chắc. Thầy ấy trông thế nào?' },
      { sp:'Linh', en:'He is quite tall and he has got short grey hair.', vi:'Thầy khá cao, tóc bạc ngắn.' },
      { sp:'Quan', en:'Does he wear glasses?', vi:'Thầy có đeo kính không?' },
      { sp:'Linh', en:'Yes, and today he is wearing a blue shirt and brown trousers.', vi:'Có, hôm nay thầy mặc áo xanh và quần nâu.' },
      { sp:'Quan', en:'Now I know him! What is he like?', vi:'Giờ thì tớ biết rồi! Thầy ấy tính thế nào?' },
      { sp:'Linh', en:'Very friendly, but he is strict about homework.', vi:'Rất thân thiện, nhưng nghiêm về bài tập.' }
    ],
    reading:{ en:'Tomorrow Quan has a job interview, so tonight he is choosing his clothes. He has a white shirt, a dark blue jacket and black trousers. His sister says the jacket is too big for him, but he likes it. He is not going to wear a hat. He also has a pair of old brown shoes, but they are not clean, so he is going to wear his new black ones. His mother says a simple, tidy style is always the best choice for an interview.',
      vi:'Ngày mai Quân có buổi phỏng vấn nên tối nay cậu đang chọn đồ. Cậu có một áo sơ mi trắng, một áo khoác xanh đậm và quần đen. Em gái bảo áo khoác rộng quá, nhưng cậu thích nó. Cậu sẽ không đội mũ. Cậu còn một đôi giày nâu cũ nhưng không sạch, nên sẽ đi đôi đen mới. Mẹ cậu bảo phong cách đơn giản, gọn gàng luôn là lựa chọn tốt nhất cho buổi phỏng vấn.' } },

  { level:'a1', no:14, en:'Getting around town', vi:'Đi lại và chỉ đường', skill:'Hỏi và chỉ đường',
    grammar:[
      { form:'Câu mệnh lệnh', vi:'Dùng động từ nguyên thể, không có chủ ngữ.', note:'Phủ định: Do not turn left. Thêm «please» cho lịch sự.', ex:{ en:'Go straight on and turn right at the lights.', vi:'Đi thẳng rồi rẽ phải ở chỗ đèn.' } },
      { form:'Giới từ chỉ chuyển động', vi:'along, across, through, past, into, out of, up, down.', note:'go past the bank (đi qua) ≠ go through the park (xuyên qua).', ex:{ en:'Walk along this street and go past the market.', vi:'Đi dọc phố này rồi đi qua khỏi chợ.' } },
      { form:'Phương tiện đi lại', vi:'by bus / by car / by train / on foot.', note:'«on foot» chứ không phải «by foot». Có mạo từ thì đổi: in my car, on the bus.', ex:{ en:'I usually go to work by bus, but today I am on foot.', vi:'Tôi thường đi làm bằng xe buýt, nhưng hôm nay đi bộ.' } },
      { form:'How far…? / How long does it take?', vi:'Hỏi khoảng cách và thời gian đi.', note:'It takes + (người) + thời gian + to + động từ.', ex:{ en:'How long does it take to get there?', vi:'Đến đó mất bao lâu?' } }
    ],
    vocab:[
      { en:'street', uk:'striːt', us:'striːt', vi:'phố', pos:'danh từ' },
      { en:'road', uk:'rəʊd', us:'roʊd', vi:'đường', pos:'danh từ' },
      { en:'corner', uk:'ˈkɔːnə', us:'ˈkɔːrnər', vi:'góc phố', pos:'danh từ' },
      { en:'bridge', uk:'brɪdʒ', us:'brɪdʒ', vi:'cây cầu', pos:'danh từ' },
      { en:'station', uk:'ˈsteɪʃn', us:'ˈsteɪʃn', vi:'nhà ga, bến', pos:'danh từ' },
      { en:'airport', uk:'ˈeəpɔːt', us:'ˈerpɔːrt', vi:'sân bay', pos:'danh từ' },
      { en:'bank', uk:'bæŋk', us:'bæŋk', vi:'ngân hàng; bờ sông', pos:'danh từ' },
      { en:'hospital', uk:'ˈhɒspɪtl', us:'ˈhɑːspɪtl', vi:'bệnh viện', pos:'danh từ' },
      { en:'post office', uk:'ˈpəʊst ɒfɪs', us:'ˈpoʊst ɔːfɪs', vi:'bưu điện', pos:'danh từ' },
      { en:'traffic', uk:'ˈtræfɪk', us:'ˈtræfɪk', vi:'giao thông', pos:'danh từ', note:'không đếm được' },
      { en:'straight', uk:'streɪt', us:'streɪt', vi:'thẳng', pos:'trạng từ', note:'gh câm' },
      { en:'right', uk:'raɪt', us:'raɪt', vi:'phải; đúng', pos:'danh từ, tính từ' },
      { en:'opposite', uk:'ˈɒpəzɪt', us:'ˈɑːpəzɪt', vi:'đối diện', pos:'giới từ' },
      { en:'behind', uk:'bɪˈhaɪnd', us:'bɪˈhaɪnd', vi:'phía sau', pos:'giới từ' },
      { en:'far', uk:'fɑː', us:'fɑːr', vi:'xa', pos:'tính từ', note:'so sánh: farther / further' },
      { en:'lost', uk:'lɒst', us:'lɔːst', vi:'lạc đường', pos:'tính từ' },
      { en:'map', uk:'mæp', us:'mæp', vi:'bản đồ', pos:'danh từ' },
      { en:'taxi', uk:'ˈtæksi', us:'ˈtæksi', vi:'xe taxi', pos:'danh từ' },
      { en:'bike', uk:'baɪk', us:'baɪk', vi:'xe đạp', pos:'danh từ' },
      { en:'cross', uk:'krɒs', us:'krɔːs', vi:'băng qua', pos:'động từ' }
    ],
    colloc:[
      { p:'Excuse me, how do I get to…?', vi:'Cho hỏi đường tới… đi thế nào ạ? — mẫu hỏi đường chuẩn nhất', ex:'Excuse me, how do I get to the station?' },
      { p:'It is just around the corner.', vi:'Ngay chỗ góc phố thôi.', ex:'The post office? It is just around the corner.' },
      { p:'get stuck in traffic', vi:'kẹt xe', ex:'Sorry I am late — I got stuck in traffic.' }
    ],
    dialogue:[
      { sp:'Quan', en:'Excuse me, how do I get to the train station?', vi:'Xin lỗi, cho hỏi tới ga tàu đi thế nào ạ?' },
      { sp:'Woman', en:'Go straight on for about two hundred metres.', vi:'Anh đi thẳng chừng hai trăm mét.' },
      { sp:'Quan', en:'And then?', vi:'Rồi sao ạ?' },
      { sp:'Woman', en:'Turn left at the traffic lights and cross the bridge.', vi:'Rẽ trái ở đèn giao thông rồi qua cầu.' },
      { sp:'Quan', en:'Is it far?', vi:'Có xa không ạ?' },
      { sp:'Woman', en:'No, about ten minutes on foot. It is opposite a big hospital.', vi:'Không, đi bộ khoảng mười phút. Nó đối diện một bệnh viện lớn.' },
      { sp:'Quan', en:'Thank you very much!', vi:'Cảm ơn cô nhiều ạ!' }
    ],
    reading:{ en:'Quan lives about four kilometres from the university. There are three ways to get there. He can take the bus, which costs seven thousand dong and takes twenty-five minutes, but in the morning the traffic is terrible. He can ride his bike, which takes about the same time and is free, but not when it rains. Or he can walk, which takes almost an hour. On sunny days he usually rides his bike along the river, past the old bridge and through the small park behind the library.',
      vi:'Quân sống cách trường khoảng bốn cây số. Có ba cách để tới đó. Cậu có thể đi xe buýt, giá bảy nghìn đồng và mất hai mươi lăm phút, nhưng buổi sáng tắc đường kinh khủng. Cậu có thể đạp xe, mất chừng ấy thời gian và không tốn tiền, nhưng không đi được khi trời mưa. Hoặc cậu đi bộ, mất gần một tiếng. Những ngày nắng cậu thường đạp xe dọc sông, qua cây cầu cũ và xuyên qua công viên nhỏ sau thư viện.' } },

  { level:'a1', no:15, en:'Health and the body', vi:'Sức khoẻ và cơ thể', skill:'Nói về vấn đề sức khoẻ',
    grammar:[
      { form:'should / shouldn’t — lời khuyên', vi:'Khuyên nên hay không nên làm gì.', note:'Sau should là động từ nguyên thể không «to».', ex:{ en:'You should drink more water.', vi:'Bạn nên uống nhiều nước hơn.' } },
      { form:'have got a + bệnh', vi:'have got a cold / a headache / a temperature.', note:'Một số bệnh không có mạo từ: have flu, have toothache (Anh).', ex:{ en:'I have got a bad cold.', vi:'Tôi bị cảm nặng.' } },
      { form:'What is the matter? / What is wrong?', vi:'Hỏi ai đó có chuyện gì, đang khó chịu ở đâu.', note:'Trả lời: My throat hurts. / I have got a headache.', ex:{ en:'What is the matter? You look pale.', vi:'Có chuyện gì thế? Trông bạn xanh quá.' } },
      { form:'must / mustn’t', vi:'must = bắt buộc · mustn’t = cấm.', note:'Cẩn thận: don’t have to = không cần, khác hẳn mustn’t = không được phép.', ex:{ en:'You must take the medicine, but you mustn’t drink coffee.', vi:'Bạn phải uống thuốc, nhưng không được uống cà phê.' } }
    ],
    vocab:[
      { en:'head', uk:'hed', us:'hed', vi:'đầu', pos:'danh từ' },
      { en:'eye', uk:'aɪ', us:'aɪ', vi:'mắt', pos:'danh từ' },
      { en:'ear', uk:'ɪə', us:'ɪr', vi:'tai', pos:'danh từ' },
      { en:'nose', uk:'nəʊz', us:'noʊz', vi:'mũi', pos:'danh từ' },
      { en:'mouth', uk:'maʊθ', us:'maʊθ', vi:'miệng', pos:'danh từ' },
      { en:'tooth', uk:'tuːθ', us:'tuːθ', vi:'răng', pos:'danh từ', note:'số nhiều: teeth' },
      { en:'throat', uk:'θrəʊt', us:'θroʊt', vi:'cổ họng', pos:'danh từ' },
      { en:'stomach', uk:'ˈstʌmək', us:'ˈstʌmək', vi:'dạ dày, bụng', pos:'danh từ', note:'ch đọc /k/' },
      { en:'arm', uk:'ɑːm', us:'ɑːrm', vi:'cánh tay', pos:'danh từ' },
      { en:'leg', uk:'leɡ', us:'leɡ', vi:'chân', pos:'danh từ' },
      { en:'hand', uk:'hænd', us:'hænd', vi:'bàn tay', pos:'danh từ' },
      { en:'back', uk:'bæk', us:'bæk', vi:'lưng; phía sau', pos:'danh từ' },
      { en:'ill', uk:'ɪl', us:'ɪl', vi:'ốm (Anh)', pos:'tính từ', note:'Mỹ hay dùng sick' },
      { en:'pain', uk:'peɪn', us:'peɪn', vi:'cơn đau', pos:'danh từ' },
      { en:'hurt', uk:'hɜːt', us:'hɜːrt', vi:'đau, làm đau', pos:'động từ', note:'hurt — hurt' },
      { en:'medicine', uk:'ˈmedsn', us:'ˈmedɪsn', vi:'thuốc', pos:'danh từ' },
      { en:'headache', uk:'ˈhedeɪk', us:'ˈhedeɪk', vi:'đau đầu', pos:'danh từ', note:'ache đọc /eɪk/' },
      { en:'temperature', uk:'ˈtemprətʃə', us:'ˈtemprətʃər', vi:'nhiệt độ; sốt', pos:'danh từ' },
      { en:'healthy', uk:'ˈhelθi', us:'ˈhelθi', vi:'khoẻ mạnh, lành mạnh', pos:'tính từ' },
      { en:'rest', uk:'rest', us:'rest', vi:'nghỉ ngơi', pos:'động từ, danh từ' }
    ],
    colloc:[
      { p:'catch a cold', vi:'bị cảm — dùng catch, không dùng get hay take', ex:'Wear a coat or you will catch a cold.' },
      { p:'take medicine', vi:'uống thuốc — dùng take, không dùng drink hay eat', ex:'Take this medicine twice a day.' },
      { p:'feel better / get better', vi:'thấy khá hơn / hồi phục', ex:'I hope you get better soon.' }
    ],
    dialogue:[
      { sp:'Linh', en:'You do not look well. What is the matter?', vi:'Trông bạn không khoẻ. Có chuyện gì thế?' },
      { sp:'Quan', en:'I have got a headache and my throat hurts.', vi:'Tớ đau đầu và đau họng.' },
      { sp:'Linh', en:'Have you got a temperature?', vi:'Bạn có sốt không?' },
      { sp:'Quan', en:'A little. I think I caught a cold yesterday.', vi:'Hơi hơi. Chắc hôm qua tớ bị cảm.' },
      { sp:'Linh', en:'You should go home and rest. You mustn’t go to the gym today.', vi:'Bạn nên về nhà nghỉ. Hôm nay không được đi tập đâu.' },
      { sp:'Quan', en:'You are right. Maybe I should see a doctor.', vi:'Bạn nói đúng. Có lẽ tớ nên đi khám.' },
      { sp:'Linh', en:'Drink a lot of water and get better soon!', vi:'Uống nhiều nước và mau khoẻ nhé!' }
    ],
    reading:{ en:'Quan is usually healthy, but last week he was ill for three days. It started with a sore throat on Monday. On Tuesday he had a headache and a high temperature, so he did not go to class. His mother made him a hot soup and told him to rest. He took some medicine and slept a lot. On Thursday he felt better and on Friday he went back to university. Now he walks more, eats more vegetables and goes to bed before eleven.',
      vi:'Quân thường khoẻ, nhưng tuần trước cậu ốm ba ngày. Bắt đầu là đau họng hôm thứ Hai. Thứ Ba cậu đau đầu và sốt cao nên không đi học. Mẹ nấu cho cậu một bát canh nóng và bảo cậu nghỉ ngơi. Cậu uống thuốc và ngủ nhiều. Thứ Năm cậu thấy khá hơn và thứ Sáu quay lại trường. Giờ cậu đi bộ nhiều hơn, ăn nhiều rau hơn và đi ngủ trước mười một giờ.' } },

  { level:'a1', no:16, en:'Free time and hobbies', vi:'Thời gian rảnh và sở thích', skill:'Nói sở thích, rủ rê',
    grammar:[
      { form:'like / enjoy / hate + V-ing', vi:'Sau các động từ chỉ sở thích thường là danh động từ.', note:'enjoy BẮT BUỘC + V-ing, không bao giờ + to V.', ex:{ en:'I enjoy reading before bed.', vi:'Tôi thích đọc sách trước khi ngủ.' } },
      { form:'Mức độ yêu thích', vi:'love > really like > like > do not mind > do not like > hate.', note:'«I do not mind» nghĩa là không phản đối, không phải là thích.', ex:{ en:'I do not mind cooking, but I hate washing up.', vi:'Tôi không ngại nấu ăn, nhưng ghét rửa bát.' } },
      { form:'Rủ rê và đáp lời', vi:'Would you like to…? · How about…? · Let us…', note:'How about / What about luôn theo sau bởi V-ing hoặc danh từ.', ex:{ en:'How about going to the cinema tonight?', vi:'Tối nay đi xem phim nhé?' } },
      { form:'go + V-ing cho hoạt động', vi:'go swimming, go shopping, go running, go fishing.', note:'Chỉ dùng cho hoạt động, không nói «go studying».', ex:{ en:'We go swimming every Sunday.', vi:'Chủ nhật nào chúng tôi cũng đi bơi.' } }
    ],
    vocab:[
      { en:'hobby', uk:'ˈhɒbi', us:'ˈhɑːbi', vi:'sở thích', pos:'danh từ', note:'số nhiều: hobbies' },
      { en:'music', uk:'ˈmjuːzɪk', us:'ˈmjuːzɪk', vi:'âm nhạc', pos:'danh từ' },
      { en:'song', uk:'sɒŋ', us:'sɔːŋ', vi:'bài hát', pos:'danh từ' },
      { en:'game', uk:'ɡeɪm', us:'ɡeɪm', vi:'trò chơi', pos:'danh từ' },
      { en:'football', uk:'ˈfʊtbɔːl', us:'ˈfʊtbɔːl', vi:'bóng đá', pos:'danh từ', note:'Mỹ: soccer' },
      { en:'team', uk:'tiːm', us:'tiːm', vi:'đội', pos:'danh từ' },
      { en:'photograph', uk:'ˈfəʊtəɡrɑːf', us:'ˈfoʊtəɡræf', vi:'bức ảnh', pos:'danh từ' },
      { en:'travel', uk:'ˈtrævl', us:'ˈtrævl', vi:'đi du lịch', pos:'động từ' },
      { en:'garden', uk:'ˈɡɑːdn', us:'ˈɡɑːrdn', vi:'làm vườn; khu vườn', pos:'danh từ, động từ' },
      { en:'paint', uk:'peɪnt', us:'peɪnt', vi:'vẽ (sơn màu)', pos:'động từ' },
      { en:'collect', uk:'kəˈlekt', us:'kəˈlekt', vi:'sưu tầm', pos:'động từ' },
      { en:'join', uk:'dʒɔɪn', us:'dʒɔɪn', vi:'tham gia', pos:'động từ' },
      { en:'club', uk:'klʌb', us:'klʌb', vi:'câu lạc bộ', pos:'danh từ' },
      { en:'together', uk:'təˈɡeðə', us:'təˈɡeðər', vi:'cùng nhau', pos:'trạng từ' },
      { en:'favourite', uk:'ˈfeɪvərɪt', us:'ˈfeɪvərɪt', vi:'yêu thích nhất', pos:'tính từ', note:'Mỹ viết favorite' },
      { en:'boring', uk:'ˈbɔːrɪŋ', us:'ˈbɔːrɪŋ', vi:'chán', pos:'tính từ' },
      { en:'exciting', uk:'ɪkˈsaɪtɪŋ', us:'ɪkˈsaɪtɪŋ', vi:'hấp dẫn, thú vị', pos:'tính từ' },
      { en:'relax', uk:'rɪˈlæks', us:'rɪˈlæks', vi:'thư giãn', pos:'động từ' },
      { en:'enjoy', uk:'ɪnˈdʒɔɪ', us:'ɪnˈdʒɔɪ', vi:'thích thú, tận hưởng', pos:'động từ' },
      { en:'mind', uk:'maɪnd', us:'maɪnd', vi:'ngại, phiền', pos:'động từ' }
    ],
    colloc:[
      { p:'in my free time / in my spare time', vi:'lúc rảnh rỗi', ex:'In my free time I play the guitar.' },
      { p:'be into something', vi:'mê, thích thú với cái gì (thân mật)', ex:'He is really into photography.' },
      { p:'hang out with friends', vi:'đi chơi với bạn bè', ex:'We hang out at the coffee shop every Friday.' }
    ],
    dialogue:[
      { sp:'Linh', en:'What do you do in your free time?', vi:'Lúc rảnh bạn làm gì?' },
      { sp:'Quan', en:'I love playing the guitar and I enjoy reading.', vi:'Tớ thích chơi ghi-ta và thích đọc sách.' },
      { sp:'Linh', en:'Do you like sport?', vi:'Bạn có thích thể thao không?' },
      { sp:'Quan', en:'I do not mind football, but I hate running.', vi:'Bóng đá thì không ngại, nhưng tớ ghét chạy bộ.' },
      { sp:'Linh', en:'How about joining the photography club with me?', vi:'Hay là tham gia câu lạc bộ nhiếp ảnh với tớ đi?' },
      { sp:'Quan', en:'That sounds exciting. When do they meet?', vi:'Nghe hay đấy. Họ sinh hoạt khi nào?' },
      { sp:'Linh', en:'Every Saturday afternoon. Would you like to come this week?', vi:'Chiều thứ Bảy hằng tuần. Tuần này bạn đi cùng nhé?' }
    ],
    reading:{ en:'Quan has three hobbies. The first is the guitar: he practises for half an hour almost every evening, and he can play about twenty songs. The second is reading; he likes short stories more than long novels. The third is photography, but it is new — he joined a club with Linh two months ago. They go out on Saturday afternoons and take photographs of old streets in the city. Quan does not like sport very much, but he does not mind watching football with his father.',
      vi:'Quân có ba sở thích. Thứ nhất là ghi-ta: cậu tập nửa tiếng gần như mỗi tối và chơi được chừng hai mươi bài. Thứ hai là đọc sách; cậu thích truyện ngắn hơn tiểu thuyết dài. Thứ ba là nhiếp ảnh, nhưng mới thôi — cậu tham gia câu lạc bộ cùng Linh hai tháng trước. Chiều thứ Bảy hai người đi chụp ảnh những con phố cũ trong thành phố. Quân không thích thể thao lắm, nhưng không ngại xem bóng đá cùng bố.' } },

  { level:'a1', no:17, en:'Comparing things', vi:'So sánh hơn và so sánh nhất', skill:'So sánh, lựa chọn',
    grammar:[
      { form:'So sánh hơn — tính từ ngắn', vi:'Thêm -er + than: cheap → cheaper than.', note:'Gấp đôi phụ âm cuối nếu là 1 nguyên âm + 1 phụ âm: big → bigger. Đổi y thành i: easy → easier.', ex:{ en:'This shop is cheaper than that one.', vi:'Cửa hàng này rẻ hơn cửa hàng kia.' } },
      { form:'So sánh hơn — tính từ dài', vi:'more + tính từ + than: expensive → more expensive than.', note:'Tính từ từ 3 âm tiết trở lên và phần lớn tính từ 2 âm tiết dùng more.', ex:{ en:'Hanoi is more crowded than Hue.', vi:'Hà Nội đông đúc hơn Huế.' } },
      { form:'So sánh nhất', vi:'the + tính từ + -est · the most + tính từ.', note:'Luôn có «the»: the biggest, the most interesting.', ex:{ en:'It is the best restaurant in the city.', vi:'Đó là nhà hàng ngon nhất thành phố.' } },
      { form:'as … as — bằng nhau', vi:'as + tính từ + as · not as … as (không bằng).', note:'Bất quy tắc cần thuộc: good → better → best · bad → worse → worst · far → further → furthest.', ex:{ en:'My phone is not as expensive as yours.', vi:'Điện thoại tôi không đắt bằng của bạn.' } }
    ],
    vocab:[
      { en:'better', uk:'ˈbetə', us:'ˈbetər', vi:'tốt hơn', pos:'tính từ' },
      { en:'best', uk:'best', us:'best', vi:'tốt nhất', pos:'tính từ' },
      { en:'worse', uk:'wɜːs', us:'wɜːrs', vi:'tệ hơn', pos:'tính từ' },
      { en:'worst', uk:'wɜːst', us:'wɜːrst', vi:'tệ nhất', pos:'tính từ' },
      { en:'large', uk:'lɑːdʒ', us:'lɑːrdʒ', vi:'lớn', pos:'tính từ' },
      { en:'popular', uk:'ˈpɒpjələ', us:'ˈpɑːpjələr', vi:'phổ biến', pos:'tính từ' },
      { en:'famous', uk:'ˈfeɪməs', us:'ˈfeɪməs', vi:'nổi tiếng', pos:'tính từ' },
      { en:'important', uk:'ɪmˈpɔːtnt', us:'ɪmˈpɔːrtnt', vi:'quan trọng', pos:'tính từ' },
      { en:'beautiful', uk:'ˈbjuːtɪfl', us:'ˈbjuːtɪfl', vi:'đẹp', pos:'tính từ' },
      { en:'modern', uk:'ˈmɒdn', us:'ˈmɑːdərn', vi:'hiện đại', pos:'tính từ' },
      { en:'traditional', uk:'trəˈdɪʃənl', us:'trəˈdɪʃənl', vi:'truyền thống', pos:'tính từ' },
      { en:'safe', uk:'seɪf', us:'seɪf', vi:'an toàn', pos:'tính từ' },
      { en:'dangerous', uk:'ˈdeɪndʒərəs', us:'ˈdeɪndʒərəs', vi:'nguy hiểm', pos:'tính từ' },
      { en:'friendly', uk:'ˈfrendli', us:'ˈfrendli', vi:'thân thiện', pos:'tính từ' },
      { en:'clean', uk:'kliːn', us:'kliːn', vi:'sạch', pos:'tính từ' },
      { en:'dirty', uk:'ˈdɜːti', us:'ˈdɜːrti', vi:'bẩn', pos:'tính từ' },
      { en:'fast', uk:'fɑːst', us:'fæst', vi:'nhanh', pos:'tính từ, trạng từ' },
      { en:'slow', uk:'sləʊ', us:'sloʊ', vi:'chậm', pos:'tính từ' },
      { en:'high', uk:'haɪ', us:'haɪ', vi:'cao (vật)', pos:'tính từ', note:'gh câm' },
      { en:'low', uk:'ləʊ', us:'loʊ', vi:'thấp', pos:'tính từ' }
    ],
    colloc:[
      { p:'much / far / a lot + so sánh hơn', vi:'Nhấn mạnh mức chênh lệch: much cheaper, far better.', ex:'This one is much cheaper than that one.' },
      { p:'one of the + so sánh nhất + danh từ số nhiều', vi:'một trong những… nhất', ex:'It is one of the most beautiful cities in Asia.' },
      { p:'the same as / different from', vi:'giống như / khác với', ex:'My phone is the same as yours but different from his.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Which city do you like more, Hanoi or Hue?', vi:'Bạn thích thành phố nào hơn, Hà Nội hay Huế?' },
      { sp:'Quan', en:'Hanoi is more exciting, but Hue is quieter.', vi:'Hà Nội sôi động hơn, nhưng Huế yên tĩnh hơn.' },
      { sp:'Linh', en:'Is life in Hanoi more expensive?', vi:'Sống ở Hà Nội có đắt đỏ hơn không?' },
      { sp:'Quan', en:'Much more expensive. But the salaries are higher too.', vi:'Đắt hơn nhiều. Nhưng lương cũng cao hơn.' },
      { sp:'Linh', en:'For me, Hue has the best food in the country.', vi:'Với tớ, Huế có đồ ăn ngon nhất nước.' },
      { sp:'Quan', en:'It is not as cheap as before, though.', vi:'Nhưng giờ không còn rẻ như trước nữa.' },
      { sp:'Linh', en:'True. Still, it is one of my favourite places.', vi:'Đúng thật. Dù vậy đó vẫn là một trong những nơi tớ thích nhất.' }
    ],
    reading:{ en:'Quan is looking for a new place to live. The first flat is cheaper, but it is smaller and much further from the university. The second one is more modern and it has a bigger kitchen, but the rent is almost twice as high. The third is the closest to the university and the cleanest of the three, and the neighbours are friendly. It is not the cheapest, but Quan thinks it is the best choice, because he will save an hour of travelling every day.',
      vi:'Quân đang tìm chỗ ở mới. Căn thứ nhất rẻ hơn, nhưng nhỏ hơn và xa trường hơn nhiều. Căn thứ hai hiện đại hơn và có bếp rộng hơn, nhưng tiền thuê gần gấp đôi. Căn thứ ba gần trường nhất và sạch nhất trong ba căn, hàng xóm cũng thân thiện. Nó không phải rẻ nhất, nhưng Quân nghĩ đó là lựa chọn tốt nhất, vì cậu sẽ tiết kiệm được một tiếng đi lại mỗi ngày.' } },

  { level:'a1', no:18, en:'Plans for the future', vi:'Dự định tương lai', skill:'Nói về kế hoạch',
    grammar:[
      { form:'be going to — dự định đã có', vi:'Diễn tả kế hoạch đã quyết định trước.', note:'Cũng dùng để dự đoán khi có dấu hiệu rõ ràng: Look at the sky — it is going to rain.', ex:{ en:'I am going to look for a job next month.', vi:'Tháng sau tôi sẽ tìm việc.' } },
      { form:'will — quyết định tức thì, dự đoán', vi:'Quyết định ngay lúc nói hoặc dự đoán chung chung.', note:'Rút gọn: I’ll, won’t. Cũng dùng để hứa và đề nghị giúp.', ex:{ en:'It is heavy — I will help you.', vi:'Nặng đấy — để tôi giúp cho.' } },
      { form:'Hiện tại tiếp diễn chỉ tương lai', vi:'Dùng cho lịch hẹn đã sắp xếp chắc chắn.', note:'I am meeting the manager at three (đã hẹn rồi) — tự nhiên hơn «I will meet».', ex:{ en:'We are flying to Da Nang on Friday.', vi:'Thứ Sáu chúng tôi bay đi Đà Nẵng.' } },
      { form:'Trạng ngữ tương lai', vi:'tomorrow, next week, in two days, soon, later.', note:'in + khoảng thời gian nghĩa là «sau bao lâu nữa»: in an hour = một tiếng nữa.', ex:{ en:'The train leaves in twenty minutes.', vi:'Hai mươi phút nữa tàu chạy.' } }
    ],
    vocab:[
      { en:'plan', uk:'plæn', us:'plæn', vi:'kế hoạch; dự định', pos:'danh từ, động từ' },
      { en:'future', uk:'ˈfjuːtʃə', us:'ˈfjuːtʃər', vi:'tương lai', pos:'danh từ' },
      { en:'job', uk:'dʒɒb', us:'dʒɑːb', vi:'công việc', pos:'danh từ' },
      { en:'interview', uk:'ˈɪntəvjuː', us:'ˈɪntərvjuː', vi:'phỏng vấn', pos:'danh từ, động từ' },
      { en:'company', uk:'ˈkʌmpəni', us:'ˈkʌmpəni', vi:'công ty', pos:'danh từ' },
      { en:'salary', uk:'ˈsæləri', us:'ˈsæləri', vi:'lương', pos:'danh từ' },
      { en:'abroad', uk:'əˈbrɔːd', us:'əˈbrɔːd', vi:'ở nước ngoài', pos:'trạng từ', note:'không có giới từ: go abroad' },
      { en:'course', uk:'kɔːs', us:'kɔːrs', vi:'khoá học', pos:'danh từ' },
      { en:'degree', uk:'dɪˈɡriː', us:'dɪˈɡriː', vi:'bằng đại học; độ', pos:'danh từ' },
      { en:'graduate', uk:'ˈɡrædʒueɪt', us:'ˈɡrædʒueɪt', vi:'tốt nghiệp', pos:'động từ' },
      { en:'apply', uk:'əˈplaɪ', us:'əˈplaɪ', vi:'nộp đơn', pos:'động từ', note:'apply FOR a job' },
      { en:'hope', uk:'həʊp', us:'hoʊp', vi:'hy vọng', pos:'động từ' },
      { en:'decide', uk:'dɪˈsaɪd', us:'dɪˈsaɪd', vi:'quyết định', pos:'động từ' },
      { en:'save', uk:'seɪv', us:'seɪv', vi:'tiết kiệm; cứu', pos:'động từ' },
      { en:'move', uk:'muːv', us:'muːv', vi:'chuyển đi', pos:'động từ' },
      { en:'change', uk:'tʃeɪndʒ', us:'tʃeɪndʒ', vi:'thay đổi', pos:'động từ' },
      { en:'soon', uk:'suːn', us:'suːn', vi:'sớm', pos:'trạng từ' },
      { en:'later', uk:'ˈleɪtə', us:'ˈleɪtər', vi:'lát nữa, sau này', pos:'trạng từ' },
      { en:'maybe', uk:'ˈmeɪbi', us:'ˈmeɪbi', vi:'có lẽ', pos:'trạng từ' },
      { en:'probably', uk:'ˈprɒbəbli', us:'ˈprɑːbəbli', vi:'chắc là', pos:'trạng từ' }
    ],
    colloc:[
      { p:'apply for a job / a course / a visa', vi:'nộp đơn xin việc, xin học, xin visa — luôn có «for»', ex:'She applied for three jobs last week.' },
      { p:'make plans / change your mind', vi:'lên kế hoạch / đổi ý', ex:'We made plans, but then he changed his mind.' },
      { p:'look forward to + V-ing', vi:'mong chờ — «to» ở đây là giới từ nên theo sau là V-ing', ex:'I am looking forward to hearing from you.' }
    ],
    dialogue:[
      { sp:'Linh', en:'What are you going to do after you graduate?', vi:'Tốt nghiệp xong bạn định làm gì?' },
      { sp:'Quan', en:'I am going to look for a job in a tech company.', vi:'Tớ sẽ tìm việc ở một công ty công nghệ.' },
      { sp:'Linh', en:'Here in Hanoi?', vi:'Ở Hà Nội à?' },
      { sp:'Quan', en:'Probably. But maybe I will study abroad later.', vi:'Chắc vậy. Nhưng có lẽ sau này tớ sẽ đi du học.' },
      { sp:'Linh', en:'That sounds great. When is your interview?', vi:'Nghe hay đấy. Buổi phỏng vấn của bạn khi nào?' },
      { sp:'Quan', en:'I am meeting the manager on Thursday at ten.', vi:'Tớ gặp quản lý vào thứ Năm lúc mười giờ.' },
      { sp:'Linh', en:'Good luck! I am sure you will do well.', vi:'Chúc may mắn! Tớ tin bạn sẽ làm tốt.' }
    ],
    reading:{ en:'Quan is going to finish university next June. He is not going to take a holiday straight away, because he wants to start working as soon as possible. He is going to apply for jobs in three or four companies in Hanoi. If he gets a good salary, he is going to save money for two years and then study abroad. His parents hope he will stay in Vietnam, but they say the decision is his. On Thursday he is meeting a manager for his first interview, and tonight he is preparing his answers.',
      vi:'Tháng Sáu tới Quân sẽ tốt nghiệp đại học. Cậu sẽ không đi nghỉ ngay vì muốn bắt đầu đi làm càng sớm càng tốt. Cậu sẽ nộp đơn vào ba bốn công ty ở Hà Nội. Nếu được mức lương tốt, cậu sẽ tiết kiệm hai năm rồi đi du học. Bố mẹ hy vọng cậu ở lại Việt Nam, nhưng nói rằng quyết định là của cậu. Thứ Năm cậu gặp một quản lý cho buổi phỏng vấn đầu tiên, và tối nay cậu đang chuẩn bị câu trả lời.' } },

  { level:'a1', no:19, en:'At the hotel and on the phone', vi:'Khách sạn và điện thoại', skill:'Giao tiếp dịch vụ',
    grammar:[
      { form:'Câu hỏi lịch sự gián tiếp', vi:'Could you tell me…? · Do you know…? — trật tự bên trong là câu kể.', note:'Do you know where the lift is? — KHÔNG đảo «where is the lift».', ex:{ en:'Could you tell me when breakfast starts?', vi:'Cho tôi hỏi mấy giờ có bữa sáng ạ?' } },
      { form:'Mẫu câu điện thoại', vi:'This is… speaking · Can I speak to…? · Hold on, please · I will put you through.', note:'Không nói «I am Quan» khi gọi điện — phải là «This is Quan».', ex:{ en:'Hello, this is Quan speaking. Can I speak to Ms Ha?', vi:'A lô, tôi là Quân. Cho tôi gặp chị Hà ạ.' } },
      { form:'Would you like…? / Shall I…?', vi:'Mời và đề nghị giúp đỡ.', note:'Would you like a room with a view? · Shall I carry your bag?', ex:{ en:'Shall I book a taxi for you?', vi:'Tôi đặt taxi cho anh nhé?' } },
      { form:'Số thứ tự và số phòng', vi:'Đọc số phòng theo từng chữ số hoặc theo cặp: 305 = three oh five.', note:'Số 0 trong số phòng và số điện thoại đọc là «oh» (Anh) hoặc «zero» (Mỹ).', ex:{ en:'Your room is on the fourth floor, room four oh two.', vi:'Phòng của anh ở tầng bốn, phòng 402.' } }
    ],
    vocab:[
      { en:'hotel', uk:'həʊˈtel', us:'hoʊˈtel', vi:'khách sạn', pos:'danh từ', note:'trọng âm âm tiết sau' },
      { en:'book', uk:'bʊk', us:'bʊk', vi:'đặt chỗ', pos:'động từ' },
      { en:'reception', uk:'rɪˈsepʃn', us:'rɪˈsepʃn', vi:'quầy lễ tân', pos:'danh từ' },
      { en:'guest', uk:'ɡest', us:'ɡest', vi:'khách', pos:'danh từ' },
      { en:'key', uk:'kiː', us:'kiː', vi:'chìa khoá', pos:'danh từ' },
      { en:'lift', uk:'lɪft', us:'lɪft', vi:'thang máy (Anh)', pos:'danh từ', note:'Mỹ: elevator' },
      { en:'luggage', uk:'ˈlʌɡɪdʒ', us:'ˈlʌɡɪdʒ', vi:'hành lý', pos:'danh từ', note:'không đếm được' },
      { en:'single', uk:'ˈsɪŋɡl', us:'ˈsɪŋɡl', vi:'phòng đơn; độc thân', pos:'tính từ' },
      { en:'double', uk:'ˈdʌbl', us:'ˈdʌbl', vi:'phòng đôi', pos:'tính từ' },
      { en:'night', uk:'naɪt', us:'naɪt', vi:'đêm', pos:'danh từ' },
      { en:'view', uk:'vjuː', us:'vjuː', vi:'tầm nhìn, cảnh', pos:'danh từ' },
      { en:'noisy', uk:'ˈnɔɪzi', us:'ˈnɔɪzi', vi:'ồn', pos:'tính từ' },
      { en:'available', uk:'əˈveɪləbl', us:'əˈveɪləbl', vi:'còn trống, có sẵn', pos:'tính từ' },
      { en:'message', uk:'ˈmesɪdʒ', us:'ˈmesɪdʒ', vi:'tin nhắn, lời nhắn', pos:'danh từ' },
      { en:'phone', uk:'fəʊn', us:'foʊn', vi:'điện thoại; gọi điện', pos:'danh từ, động từ' },
      { en:'number', uk:'ˈnʌmbə', us:'ˈnʌmbər', vi:'số', pos:'danh từ' },
      { en:'wait', uk:'weɪt', us:'weɪt', vi:'đợi', pos:'động từ' },
      { en:'sign', uk:'saɪn', us:'saɪn', vi:'ký; biển báo', pos:'động từ, danh từ', note:'g câm' },
      { en:'passport', uk:'ˈpɑːspɔːt', us:'ˈpæspɔːrt', vi:'hộ chiếu', pos:'danh từ' },
      { en:'breakfast', uk:'ˈbrekfəst', us:'ˈbrekfəst', vi:'bữa sáng', pos:'danh từ' }
    ],
    colloc:[
      { p:'check in / check out', vi:'nhận phòng / trả phòng', ex:'We check in at two and check out at eleven.' },
      { p:'book a room / make a reservation', vi:'đặt phòng — book thân mật hơn, reservation trang trọng hơn', ex:'I would like to make a reservation for two nights.' },
      { p:'Hold on, please. / I will put you through.', vi:'Xin chờ máy. / Tôi nối máy cho anh.', ex:'Hold on, please — I will put you through to reception.' }
    ],
    dialogue:[
      { sp:'Receptionist', en:'Good afternoon. How can I help you?', vi:'Chào buổi chiều. Tôi giúp gì được ạ?' },
      { sp:'Quan', en:'Hello. I booked a single room for two nights.', vi:'Xin chào. Tôi đã đặt một phòng đơn hai đêm.' },
      { sp:'Receptionist', en:'May I have your name and passport, please?', vi:'Cho tôi xin tên và hộ chiếu ạ?' },
      { sp:'Quan', en:'Here you are. Is breakfast included?', vi:'Đây ạ. Có bao gồm bữa sáng không ạ?' },
      { sp:'Receptionist', en:'Yes, from six thirty to nine on the ground floor.', vi:'Có ạ, từ sáu rưỡi đến chín giờ ở tầng trệt.' },
      { sp:'Quan', en:'Could you tell me if there is a quieter room available?', vi:'Cho tôi hỏi có phòng nào yên tĩnh hơn không ạ?' },
      { sp:'Receptionist', en:'Certainly. Room four oh two has a view of the garden.', vi:'Chắc chắn rồi ạ. Phòng 402 nhìn ra vườn.' }
    ],
    reading:{ en:'Last month Quan travelled to Da Nang for a conference. He booked a small hotel near the beach on the internet. When he arrived, the receptionist told him that his room was not ready, so he left his luggage at reception and went for a walk. The room was on the fifth floor and it was very quiet, but the lift was broken on the second day. Breakfast was included and it started at six thirty. Before he checked out, he phoned the company and left a message for his manager.',
      vi:'Tháng trước Quân đi Đà Nẵng dự hội thảo. Cậu đặt một khách sạn nhỏ gần biển trên mạng. Khi tới nơi, lễ tân bảo phòng chưa sẵn sàng, nên cậu gửi hành lý ở quầy rồi đi dạo. Phòng ở tầng năm và rất yên tĩnh, nhưng ngày thứ hai thang máy hỏng. Bữa sáng có sẵn và bắt đầu từ sáu rưỡi. Trước khi trả phòng, cậu gọi điện tới công ty và để lại lời nhắn cho quản lý.' } },

  { level:'a1', no:20, en:'Telling your story', vi:'Kể chuyện về mình — ôn tập A1', skill:'Tổng hợp',
    grammar:[
      { form:'Ôn: bốn thì cơ bản của A1', vi:'Hiện tại đơn (thói quen) · hiện tại tiếp diễn (đang xảy ra) · quá khứ đơn (đã xong) · be going to / will (tương lai).', note:'Nhận diện thì qua trạng ngữ: every day / now / yesterday / next week.', ex:{ en:'I live in Hanoi, I am studying English now, I started last year and I am going to take an exam.', vi:'Tôi sống ở Hà Nội, giờ đang học tiếng Anh, tôi bắt đầu từ năm ngoái và sắp thi.' } },
      { form:'Nối câu thành đoạn', vi:'and, but, so, because, then, after that, however (trang trọng hơn).', note:'Đừng bắt đầu quá nhiều câu bằng «And» hoặc «But» trong văn viết.', ex:{ en:'I was tired, so I went home early, but I could not sleep.', vi:'Tôi mệt nên về sớm, nhưng lại không ngủ được.' } },
      { form:'Mẫu tự giới thiệu 60 giây', vi:'Tên → quê quán → hiện tại đang làm gì → sở thích → kế hoạch.', note:'Đây chính là khung của IELTS Speaking Part 1 và của mọi buổi phỏng vấn.', ex:{ en:'My name is Quan. I am from Hanoi and I am studying computer science.', vi:'Tôi tên Quân. Tôi đến từ Hà Nội và đang học ngành khoa học máy tính.' } },
      { form:'Hỏi lại khi chưa hiểu', vi:'Sorry? · Could you say that again, please? · What does «…» mean? · How do you spell it?', note:'Biết hỏi lại quan trọng hơn nhiều so với việc gật đầu mà không hiểu.', ex:{ en:'Sorry, could you speak more slowly, please?', vi:'Xin lỗi, bạn nói chậm hơn được không ạ?' } }
    ],
    vocab:[
      { en:'introduce', uk:'ˌɪntrəˈdjuːs', us:'ˌɪntrəˈduːs', vi:'giới thiệu', pos:'động từ' },
      { en:'spell', uk:'spel', us:'spel', vi:'đánh vần', pos:'động từ' },
      { en:'repeat', uk:'rɪˈpiːt', us:'rɪˈpiːt', vi:'nhắc lại', pos:'động từ' },
      { en:'mean', uk:'miːn', us:'miːn', vi:'có nghĩa là', pos:'động từ', note:'meant — meant /ment/' },
      { en:'understand', uk:'ˌʌndəˈstænd', us:'ˌʌndərˈstænd', vi:'hiểu', pos:'động từ', note:'understood — understood' },
      { en:'explain', uk:'ɪkˈspleɪn', us:'ɪkˈspleɪn', vi:'giải thích', pos:'động từ' },
      { en:'example', uk:'ɪɡˈzɑːmpl', us:'ɪɡˈzæmpl', vi:'ví dụ', pos:'danh từ' },
      { en:'word', uk:'wɜːd', us:'wɜːrd', vi:'từ', pos:'danh từ' },
      { en:'sentence', uk:'ˈsentəns', us:'ˈsentəns', vi:'câu', pos:'danh từ' },
      { en:'mistake', uk:'mɪˈsteɪk', us:'mɪˈsteɪk', vi:'lỗi sai', pos:'danh từ' },
      { en:'correct', uk:'kəˈrekt', us:'kəˈrekt', vi:'đúng; sửa', pos:'tính từ, động từ' },
      { en:'improve', uk:'ɪmˈpruːv', us:'ɪmˈpruːv', vi:'cải thiện', pos:'động từ' },
      { en:'progress', uk:'ˈprəʊɡres', us:'ˈprɑːɡres', vi:'sự tiến bộ', pos:'danh từ', note:'động từ đọc /prəˈɡres/' },
      { en:'level', uk:'ˈlevl', us:'ˈlevl', vi:'trình độ', pos:'danh từ' },
      { en:'confident', uk:'ˈkɒnfɪdənt', us:'ˈkɑːnfɪdənt', vi:'tự tin', pos:'tính từ' },
      { en:'nervous', uk:'ˈnɜːvəs', us:'ˈnɜːrvəs', vi:'hồi hộp, lo lắng', pos:'tính từ' },
      { en:'proud', uk:'praʊd', us:'praʊd', vi:'tự hào', pos:'tính từ', note:'proud OF something' },
      { en:'dream', uk:'driːm', us:'driːm', vi:'giấc mơ; mơ ước', pos:'danh từ, động từ' },
      { en:'reason', uk:'ˈriːzn', us:'ˈriːzn', vi:'lý do', pos:'danh từ' },
      { en:'goal', uk:'ɡəʊl', us:'ɡoʊl', vi:'mục tiêu', pos:'danh từ' }
    ],
    colloc:[
      { p:'make progress', vi:'tiến bộ — dùng make, không dùng do', ex:'You have made a lot of progress this year.' },
      { p:'How do you spell it?', vi:'Đánh vần thế nào ạ? — câu cực kỳ hữu ích khi nghe tên riêng', ex:'Quan. Q-U-A-N. — How do you spell it again?' },
      { p:'What does it mean?', vi:'Nó nghĩa là gì? — không nói «What means it?»', ex:'Sorry, what does «collocation» mean?' }
    ],
    dialogue:[
      { sp:'Teacher', en:'Quan, could you introduce yourself to the class?', vi:'Quân, em giới thiệu bản thân với lớp được không?' },
      { sp:'Quan', en:'Of course. My name is Quan. I am from Hanoi.', vi:'Vâng ạ. Em tên Quân. Em đến từ Hà Nội.' },
      { sp:'Teacher', en:'How do you spell your name?', vi:'Tên em đánh vần thế nào?' },
      { sp:'Quan', en:'Q-U-A-N. I am studying computer science.', vi:'Q-U-A-N ạ. Em học ngành khoa học máy tính.' },
      { sp:'Teacher', en:'And why are you learning English?', vi:'Vì sao em học tiếng Anh?' },
      { sp:'Quan', en:'Because I want to work for an international company.', vi:'Vì em muốn làm cho một công ty quốc tế.' },
      { sp:'Teacher', en:'Very good. Anything else?', vi:'Rất tốt. Còn gì nữa không?' },
      { sp:'Quan', en:'Sorry, could you repeat the question, please?', vi:'Xin lỗi cô, cô nhắc lại câu hỏi được không ạ?' }
    ],
    reading:{ en:'My name is Quan and I am twenty years old. I live in Hanoi with my parents, my grandmother and my sister Mai. I am a student at a university here and I am studying computer science. In my free time I play the guitar, read short stories and take photographs with my friend Linh. I started learning English at school, but I only became serious about it last year, because I want to work for an international company. My English is not perfect yet and I still make a lot of mistakes, but I am making progress. Next year I am going to take an international exam, and after I graduate I hope I will study abroad.',
      vi:'Tôi tên Quân, hai mươi tuổi. Tôi sống ở Hà Nội cùng bố mẹ, bà và em gái Mai. Tôi là sinh viên một trường đại học ở đây và đang học ngành khoa học máy tính. Lúc rảnh tôi chơi ghi-ta, đọc truyện ngắn và chụp ảnh cùng bạn tôi, Linh. Tôi bắt đầu học tiếng Anh từ hồi phổ thông, nhưng chỉ thực sự nghiêm túc từ năm ngoái, vì tôi muốn làm việc cho một công ty quốc tế. Tiếng Anh của tôi chưa hoàn hảo và tôi vẫn mắc nhiều lỗi, nhưng tôi đang tiến bộ. Năm sau tôi sẽ thi một kỳ thi quốc tế, và sau khi tốt nghiệp tôi hy vọng sẽ đi du học.' } },

  /* ==================== A2 ==================== */
  { level:'a2', no:1, en:'What were you doing?', vi:'Thì quá khứ tiếp diễn', skill:'Kể bối cảnh',
    grammar:[
      { form:'was / were + V-ing', vi:'Việc đang diễn ra tại một thời điểm trong quá khứ.', note:'Dùng để dựng bối cảnh cho câu chuyện: At eight o’clock I was still working.', ex:{ en:'At nine last night I was studying.', vi:'Chín giờ tối qua tôi đang học.' } },
      { form:'while / when', vi:'while + quá khứ tiếp diễn (nền) · when + quá khứ đơn (việc cắt ngang).', note:'While I was cooking, the phone rang. Hai vế đảo được nhưng dấu phẩy đổi chỗ.', ex:{ en:'While she was walking home, it started to rain.', vi:'Khi cô ấy đang đi bộ về nhà thì trời bắt đầu mưa.' } },
      { form:'Quá khứ đơn hay tiếp diễn?', vi:'Đơn = việc trọn vẹn, nối tiếp nhau · Tiếp diễn = nền, chưa xong.', note:'He ate and left (hai việc nối nhau) ≠ He was eating when I arrived (một việc làm nền).', ex:{ en:'I was reading when the lights went out.', vi:'Tôi đang đọc thì mất điện.' } },
      { form:'Trạng ngữ nối chuyện', vi:'suddenly, at that moment, just then, meanwhile, in the end.', note:'Dùng chúng để câu chuyện trôi tự nhiên thay vì chỉ «and then… and then…».', ex:{ en:'Suddenly, someone knocked at the door.', vi:'Đột nhiên có người gõ cửa.' } }
    ],
    vocab:[
      { en:'suddenly', uk:'ˈsʌdənli', us:'ˈsʌdənli', vi:'đột nhiên', pos:'trạng từ' },
      { en:'meanwhile', uk:'ˈmiːnwaɪl', us:'ˈmiːnwaɪl', vi:'trong khi đó', pos:'trạng từ' },
      { en:'while', uk:'waɪl', us:'waɪl', vi:'trong khi', pos:'liên từ' },
      { en:'knock', uk:'nɒk', us:'nɑːk', vi:'gõ (cửa)', pos:'động từ', note:'k đầu câm' },
      { en:'ring', uk:'rɪŋ', us:'rɪŋ', vi:'reo, đổ chuông', pos:'động từ', note:'rang — rung' },
      { en:'shout', uk:'ʃaʊt', us:'ʃaʊt', vi:'hét, gọi to', pos:'động từ' },
      { en:'notice', uk:'ˈnəʊtɪs', us:'ˈnoʊtɪs', vi:'để ý thấy', pos:'động từ' },
      { en:'realise', uk:'ˈrɪəlaɪz', us:'ˈriːəlaɪz', vi:'nhận ra', pos:'động từ', note:'Mỹ viết realize' },
      { en:'happen', uk:'ˈhæpən', us:'ˈhæpən', vi:'xảy ra', pos:'động từ' },
      { en:'accident', uk:'ˈæksɪdənt', us:'ˈæksɪdənt', vi:'tai nạn', pos:'danh từ' },
      { en:'lucky', uk:'ˈlʌki', us:'ˈlʌki', vi:'may mắn', pos:'tính từ' },
      { en:'dangerous', uk:'ˈdeɪndʒərəs', us:'ˈdeɪndʒərəs', vi:'nguy hiểm', pos:'tính từ' },
      { en:'careful', uk:'ˈkeəfl', us:'ˈkerfl', vi:'cẩn thận', pos:'tính từ' },
      { en:'darkness', uk:'ˈdɑːknəs', us:'ˈdɑːrknəs', vi:'bóng tối', pos:'danh từ' },
      { en:'electricity', uk:'ɪˌlekˈtrɪsəti', us:'ɪˌlekˈtrɪsəti', vi:'điện', pos:'danh từ' },
      { en:'neighbour', uk:'ˈneɪbə', us:'ˈneɪbər', vi:'hàng xóm', pos:'danh từ' },
      { en:'candle', uk:'ˈkændl', us:'ˈkændl', vi:'nến', pos:'danh từ' },
      { en:'floor', uk:'flɔː', us:'flɔːr', vi:'sàn nhà; tầng', pos:'danh từ' },
      { en:'break', uk:'breɪk', us:'breɪk', vi:'làm vỡ', pos:'động từ', note:'broke — broken' },
      { en:'drop', uk:'drɒp', us:'drɑːp', vi:'đánh rơi', pos:'động từ' }
    ],
    colloc:[
      { p:'It all happened so fast.', vi:'Mọi chuyện diễn ra nhanh quá — câu quen thuộc khi kể tai nạn.', ex:'I did not see the car. It all happened so fast.' },
      { p:'in the middle of + V-ing', vi:'đang giữa chừng làm gì', ex:'I was in the middle of cooking when he called.' },
      { p:'at that moment / just then', vi:'ngay lúc đó', ex:'Just then, the lights went out.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Where were you last night? I called three times.', vi:'Tối qua bạn ở đâu? Tớ gọi ba lần.' },
      { sp:'Quan', en:'Sorry, I was helping my neighbour. There was no electricity.', vi:'Xin lỗi, tớ đang giúp hàng xóm. Cả khu mất điện.' },
      { sp:'Linh', en:'What happened?', vi:'Chuyện gì xảy ra vậy?' },
      { sp:'Quan', en:'She was cooking when the lights suddenly went out.', vi:'Bà ấy đang nấu ăn thì đèn tắt phụt.' },
      { sp:'Linh', en:'Was she all right?', vi:'Bà ấy có sao không?' },
      { sp:'Quan', en:'Yes, but she dropped a bowl in the darkness and it broke.', vi:'Không sao, nhưng bà làm rơi một cái bát trong bóng tối và nó vỡ.' },
      { sp:'Linh', en:'She was lucky. And what were you doing before that?', vi:'Bà ấy may thật. Thế trước đó bạn đang làm gì?' },
      { sp:'Quan', en:'I was studying, so I did not notice anything.', vi:'Tớ đang học nên chẳng để ý gì cả.' }
    ],
    reading:{ en:'Last Friday evening the whole street lost its electricity. At that time Quan was studying in his room and his sister was watching a film on her laptop. Their neighbour, an old woman who lives alone, was cooking dinner when everything went dark. She shouted and Quan ran downstairs with his phone. While he was looking for candles, his sister called the electricity company. In the end the power came back after two hours, but by then the neighbour had already gone to bed. Quan says he now keeps a torch next to his desk.',
      vi:'Tối thứ Sáu tuần trước cả con phố mất điện. Lúc đó Quân đang học trong phòng còn em gái đang xem phim trên laptop. Hàng xóm của họ, một bà cụ sống một mình, đang nấu bữa tối thì mọi thứ tối om. Bà kêu lên và Quân chạy xuống nhà cùng chiếc điện thoại. Trong lúc cậu tìm nến, em gái gọi cho công ty điện. Cuối cùng điện có lại sau hai tiếng, nhưng lúc đó bà cụ đã đi ngủ rồi. Quân bảo giờ cậu luôn để một cái đèn pin cạnh bàn học.' } },

  { level:'a2', no:2, en:'Have you ever…?', vi:'Hiện tại hoàn thành — trải nghiệm', skill:'Kể trải nghiệm',
    grammar:[
      { form:'have / has + phân từ ba (V3)', vi:'Nói về trải nghiệm trong đời, không nêu thời điểm cụ thể.', note:'Cột thứ ba của bảng động từ bất quy tắc: go–went–gone, see–saw–seen.', ex:{ en:'I have visited Japan twice.', vi:'Tôi đã tới Nhật hai lần.' } },
      { form:'ever / never', vi:'ever trong câu hỏi · never trong câu khẳng định mang nghĩa phủ định.', note:'Have you ever…? là câu hỏi mở đầu hội thoại rất tự nhiên.', ex:{ en:'Have you ever eaten Korean food? No, never.', vi:'Bạn đã ăn món Hàn bao giờ chưa? Chưa bao giờ.' } },
      { form:'been vs gone', vi:'has been to = đã đi và đã về · has gone to = đã đi và còn đang ở đó.', note:'Đây là điểm phân biệt hay bị hỏi trong bài thi.', ex:{ en:'He has gone to Da Nang, so he is not here.', vi:'Anh ấy đi Đà Nẵng rồi nên không có ở đây.' } },
      { form:'Hoàn thành hay quá khứ đơn?', vi:'Có thời điểm cụ thể (yesterday, in 2020, last week) thì BẮT BUỘC dùng quá khứ đơn.', note:'I have seen it yesterday là SAI — phải là I saw it yesterday.', ex:{ en:'I have been to Hue. I went there in 2023.', vi:'Tôi từng tới Huế. Tôi đến đó năm 2023.' } }
    ],
    vocab:[
      { en:'experience', uk:'ɪkˈspɪəriəns', us:'ɪkˈspɪriəns', vi:'trải nghiệm; kinh nghiệm', pos:'danh từ' },
      { en:'abroad', uk:'əˈbrɔːd', us:'əˈbrɔːd', vi:'ở nước ngoài', pos:'trạng từ' },
      { en:'flight', uk:'flaɪt', us:'flaɪt', vi:'chuyến bay', pos:'danh từ' },
      { en:'passport', uk:'ˈpɑːspɔːt', us:'ˈpæspɔːrt', vi:'hộ chiếu', pos:'danh từ' },
      { en:'visa', uk:'ˈviːzə', us:'ˈviːzə', vi:'thị thực', pos:'danh từ' },
      { en:'foreign', uk:'ˈfɒrən', us:'ˈfɔːrən', vi:'nước ngoài', pos:'tính từ', note:'g câm' },
      { en:'culture', uk:'ˈkʌltʃə', us:'ˈkʌltʃər', vi:'văn hoá', pos:'danh từ' },
      { en:'tradition', uk:'trəˈdɪʃn', us:'trəˈdɪʃn', vi:'truyền thống', pos:'danh từ' },
      { en:'festival', uk:'ˈfestɪvl', us:'ˈfestɪvl', vi:'lễ hội', pos:'danh từ' },
      { en:'try', uk:'traɪ', us:'traɪ', vi:'thử', pos:'động từ' },
      { en:'taste', uk:'teɪst', us:'teɪst', vi:'nếm; vị', pos:'động từ, danh từ' },
      { en:'amazing', uk:'əˈmeɪzɪŋ', us:'əˈmeɪzɪŋ', vi:'tuyệt vời, kinh ngạc', pos:'tính từ' },
      { en:'strange', uk:'streɪndʒ', us:'streɪndʒ', vi:'lạ, kỳ lạ', pos:'tính từ' },
      { en:'similar', uk:'ˈsɪmələ', us:'ˈsɪmələr', vi:'giống, tương tự', pos:'tính từ', note:'similar TO' },
      { en:'already', uk:'ɔːlˈredi', us:'ɔːlˈredi', vi:'đã rồi', pos:'trạng từ' },
      { en:'twice', uk:'twaɪs', us:'twaɪs', vi:'hai lần', pos:'trạng từ' },
      { en:'several', uk:'ˈsevrəl', us:'ˈsevrəl', vi:'vài, một số', pos:'hạn định từ' },
      { en:'recently', uk:'ˈriːsntli', us:'ˈriːsntli', vi:'gần đây', pos:'trạng từ' },
      { en:'memory', uk:'ˈmeməri', us:'ˈmeməri', vi:'kỷ niệm; trí nhớ', pos:'danh từ' },
      { en:'photograph', uk:'ˈfəʊtəɡrɑːf', us:'ˈfoʊtəɡræf', vi:'bức ảnh', pos:'danh từ' }
    ],
    colloc:[
      { p:'Have you ever been to…?', vi:'Bạn từng tới… chưa? — dùng «been to», không dùng «gone to» khi hỏi trải nghiệm.', ex:'Have you ever been to Japan?' },
      { p:'It was the best experience of my life.', vi:'Đó là trải nghiệm đẹp nhất đời tôi.', ex:'Living abroad was the best experience of my life.' },
      { p:'try something new / try doing something', vi:'thử một thứ mới / thử làm gì đó xem sao', ex:'You should try eating with chopsticks.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Have you ever travelled abroad?', vi:'Bạn từng đi nước ngoài chưa?' },
      { sp:'Quan', en:'Yes, I have been to Thailand once.', vi:'Rồi, tớ đến Thái Lan một lần.' },
      { sp:'Linh', en:'When was that?', vi:'Hồi nào vậy?' },
      { sp:'Quan', en:'Two years ago, with my family.', vi:'Cách đây hai năm, đi cùng gia đình.' },
      { sp:'Linh', en:'Have you tried their street food?', vi:'Bạn thử đồ ăn đường phố ở đó chưa?' },
      { sp:'Quan', en:'Of course. It was amazing but very spicy!', vi:'Tất nhiên rồi. Ngon tuyệt nhưng cay lắm!' },
      { sp:'Linh', en:'I have never been outside Vietnam.', vi:'Tớ thì chưa ra khỏi Việt Nam bao giờ.' },
      { sp:'Quan', en:'You should go. It changes the way you see things.', vi:'Bạn nên đi. Nó thay đổi cách mình nhìn mọi thứ.' }
    ],
    reading:{ en:'Quan has not travelled much, but he has already had a few memorable experiences. He has been to Thailand once and to Cambodia for a school trip. He has never taken a long flight, and he has never seen snow. He has tried food from six or seven countries, and his favourite is still Vietnamese. Recently he has started saving money for a trip to Japan in the spring. He has already looked at flights, but he has not applied for a visa yet.',
      vi:'Quân chưa đi đây đó nhiều, nhưng cũng đã có vài trải nghiệm đáng nhớ. Cậu tới Thái Lan một lần và tới Campuchia trong một chuyến đi của trường. Cậu chưa bao giờ đi chuyến bay dài, cũng chưa từng thấy tuyết. Cậu đã thử món ăn của sáu bảy nước, và món cậu thích nhất vẫn là món Việt. Gần đây cậu bắt đầu tiết kiệm cho chuyến đi Nhật vào mùa xuân. Cậu đã xem vé máy bay rồi, nhưng chưa xin visa.' } },

  { level:'a2', no:3, en:'How long have you…?', vi:'Hoàn thành với for / since, just / already / yet', skill:'Nói về quá trình',
    grammar:[
      { form:'for / since', vi:'for + khoảng thời gian (for three years) · since + mốc bắt đầu (since 2020).', note:'Cả hai đi với hiện tại hoàn thành, không dùng với hiện tại đơn.', ex:{ en:'I have lived here for five years.', vi:'Tôi sống ở đây được năm năm rồi.' } },
      { form:'How long…?', vi:'Hỏi việc đã kéo dài bao lâu và vẫn đang tiếp tục.', note:'How long have you been in Hanoi? — chứ không phải «How long are you…».', ex:{ en:'How long have you known each other?', vi:'Hai bạn quen nhau bao lâu rồi?' } },
      { form:'just / already / yet', vi:'just = vừa mới · already = đã rồi (sớm hơn dự kiến) · yet = chưa (phủ định) hoặc đã… chưa (hỏi).', note:'just và already đứng giữa câu; yet đứng cuối câu.', ex:{ en:'I have just finished. Have you started yet?', vi:'Tôi vừa xong. Bạn bắt đầu chưa?' } },
      { form:'Hiện tại hoàn thành tiếp diễn', vi:'have been + V-ing — nhấn vào quá trình kéo dài, có thể còn dở dang.', note:'I have been studying all day (nhấn quá trình) ≠ I have studied three units (nhấn kết quả).', ex:{ en:'She has been working here since March.', vi:'Cô ấy làm ở đây từ tháng Ba.' } }
    ],
    vocab:[
      { en:'since', uk:'sɪns', us:'sɪns', vi:'từ khi', pos:'giới từ' },
      { en:'finish', uk:'ˈfɪnɪʃ', us:'ˈfɪnɪʃ', vi:'hoàn thành', pos:'động từ' },
      { en:'continue', uk:'kənˈtɪnjuː', us:'kənˈtɪnjuː', vi:'tiếp tục', pos:'động từ' },
      { en:'stay', uk:'steɪ', us:'steɪ', vi:'ở lại', pos:'động từ' },
      { en:'wait', uk:'weɪt', us:'weɪt', vi:'đợi', pos:'động từ' },
      { en:'result', uk:'rɪˈzʌlt', us:'rɪˈzʌlt', vi:'kết quả', pos:'danh từ' },
      { en:'progress', uk:'ˈprəʊɡres', us:'ˈprɑːɡres', vi:'sự tiến bộ', pos:'danh từ' },
      { en:'improve', uk:'ɪmˈpruːv', us:'ɪmˈpruːv', vi:'cải thiện', pos:'động từ' },
      { en:'change', uk:'tʃeɪndʒ', us:'tʃeɪndʒ', vi:'thay đổi', pos:'động từ' },
      { en:'grow', uk:'ɡrəʊ', us:'ɡroʊ', vi:'lớn lên, phát triển', pos:'động từ', note:'grew — grown' },
      { en:'lately', uk:'ˈleɪtli', us:'ˈleɪtli', vi:'dạo này', pos:'trạng từ' },
      { en:'busy', uk:'ˈbɪzi', us:'ˈbɪzi', vi:'bận', pos:'tính từ' },
      { en:'tired', uk:'ˈtaɪəd', us:'ˈtaɪərd', vi:'mệt', pos:'tính từ' },
      { en:'difficult', uk:'ˈdɪfɪkəlt', us:'ˈdɪfɪkəlt', vi:'khó', pos:'tính từ' },
      { en:'patient', uk:'ˈpeɪʃnt', us:'ˈpeɪʃnt', vi:'kiên nhẫn', pos:'tính từ' },
      { en:'effort', uk:'ˈefət', us:'ˈefərt', vi:'nỗ lực', pos:'danh từ' },
      { en:'habit', uk:'ˈhæbɪt', us:'ˈhæbɪt', vi:'thói quen', pos:'danh từ' },
      { en:'goal', uk:'ɡəʊl', us:'ɡoʊl', vi:'mục tiêu', pos:'danh từ' },
      { en:'so far', uk:'səʊ fɑː', us:'soʊ fɑːr', vi:'cho tới giờ', pos:'cụm trạng từ' },
      { en:'ready', uk:'ˈredi', us:'ˈredi', vi:'sẵn sàng', pos:'tính từ' }
    ],
    colloc:[
      { p:'make an effort', vi:'nỗ lực — dùng make, không dùng do', ex:'She has made a real effort this term.' },
      { p:'How long have you been learning English?', vi:'Bạn học tiếng Anh bao lâu rồi? — câu hỏi kinh điển ở buổi học đầu tiên', ex:'How long have you been learning English? — For about six years.' },
      { p:'so far, so good', vi:'tới giờ vẫn ổn', ex:'The new job? So far, so good.' }
    ],
    dialogue:[
      { sp:'Teacher', en:'How long have you been learning English, Quan?', vi:'Quân, em học tiếng Anh bao lâu rồi?' },
      { sp:'Quan', en:'For about six years, but seriously only since last year.', vi:'Khoảng sáu năm ạ, nhưng nghiêm túc thì chỉ từ năm ngoái.' },
      { sp:'Teacher', en:'Have you taken an international exam yet?', vi:'Em đã thi kỳ thi quốc tế nào chưa?' },
      { sp:'Quan', en:'No, not yet. I have just started preparing.', vi:'Chưa ạ. Em vừa mới bắt đầu ôn.' },
      { sp:'Teacher', en:'Have you decided which one?', vi:'Em đã chọn thi kỳ nào chưa?' },
      { sp:'Quan', en:'I have already chosen IELTS. My goal is band seven.', vi:'Em chọn IELTS rồi ạ. Mục tiêu của em là band bảy.' },
      { sp:'Teacher', en:'Then you should read every day. Your writing has improved a lot.', vi:'Vậy em nên đọc mỗi ngày. Bài viết của em đã tiến bộ nhiều.' }
    ],
    reading:{ en:'Quan has been learning English since he was fourteen, but he has only been serious about it for a year. Since last September he has read twenty short books, watched a lot of films without subtitles and joined a speaking club. He has already learned about two thousand new words, but he has not started writing essays yet. His teacher says his listening has improved a lot lately. Quan is not ready for the exam yet, but he has made real progress, and he has not missed a single class so far.',
      vi:'Quân học tiếng Anh từ năm mười bốn tuổi, nhưng chỉ nghiêm túc được một năm nay. Từ tháng Chín năm ngoái cậu đã đọc hai mươi cuốn sách mỏng, xem nhiều phim không phụ đề và tham gia câu lạc bộ nói. Cậu đã học được khoảng hai nghìn từ mới, nhưng chưa bắt đầu viết luận. Cô giáo bảo dạo này kỹ năng nghe của cậu tiến bộ nhiều. Quân chưa sẵn sàng cho kỳ thi, nhưng cậu đã tiến bộ thật sự, và tới giờ chưa nghỉ buổi học nào.' } },

  { level:'a2', no:4, en:'If it rains, we will stay in', vi:'Câu điều kiện loại 1 và các cách nói tương lai', skill:'Dự đoán, đặt điều kiện',
    grammar:[
      { form:'If + hiện tại đơn, will + V', vi:'Điều kiện có thật, có khả năng xảy ra trong tương lai.', note:'KHÔNG dùng will trong mệnh đề if: «If it will rain» là sai.', ex:{ en:'If it rains, we will stay at home.', vi:'Nếu trời mưa, chúng ta sẽ ở nhà.' } },
      { form:'when / as soon as / until + hiện tại', vi:'Sau các liên từ thời gian, dùng hiện tại để nói về tương lai.', note:'I will call you when I arrive — không phải «when I will arrive».', ex:{ en:'As soon as I get home, I will send the file.', vi:'Vừa về tới nhà tôi sẽ gửi tệp ngay.' } },
      { form:'may / might — khả năng', vi:'Ít chắc chắn hơn will: có lẽ, có thể.', note:'might nhẹ hơn may một chút; cả hai không thêm «to».', ex:{ en:'It might rain later, so take an umbrella.', vi:'Lát nữa có thể mưa, mang ô theo nhé.' } },
      { form:'unless = if… not', vi:'Trừ khi, nếu không.', note:'Unless you hurry, you will miss the bus. = If you do not hurry…', ex:{ en:'Unless we leave now, we will be late.', vi:'Trừ khi đi ngay, chúng ta sẽ muộn.' } }
    ],
    vocab:[
      { en:'chance', uk:'tʃɑːns', us:'tʃæns', vi:'cơ hội; khả năng', pos:'danh từ' },
      { en:'risk', uk:'rɪsk', us:'rɪsk', vi:'rủi ro', pos:'danh từ' },
      { en:'careful', uk:'ˈkeəfl', us:'ˈkerfl', vi:'cẩn thận', pos:'tính từ' },
      { en:'hurry', uk:'ˈhʌri', us:'ˈhɜːri', vi:'vội, gấp', pos:'động từ' },
      { en:'miss', uk:'mɪs', us:'mɪs', vi:'lỡ, nhớ', pos:'động từ' },
      { en:'arrive', uk:'əˈraɪv', us:'əˈraɪv', vi:'đến nơi', pos:'động từ' },
      { en:'delay', uk:'dɪˈleɪ', us:'dɪˈleɪ', vi:'trì hoãn; sự chậm trễ', pos:'động từ, danh từ' },
      { en:'cancel', uk:'ˈkænsl', us:'ˈkænsl', vi:'huỷ', pos:'động từ' },
      { en:'unless', uk:'ənˈles', us:'ənˈles', vi:'trừ khi', pos:'liên từ' },
      { en:'probably', uk:'ˈprɒbəbli', us:'ˈprɑːbəbli', vi:'chắc là', pos:'trạng từ' },
      { en:'certainly', uk:'ˈsɜːtnli', us:'ˈsɜːrtnli', vi:'chắc chắn', pos:'trạng từ' },
      { en:'perhaps', uk:'pəˈhæps', us:'pərˈhæps', vi:'có lẽ', pos:'trạng từ' },
      { en:'forecast', uk:'ˈfɔːkɑːst', us:'ˈfɔːrkæst', vi:'dự báo', pos:'danh từ' },
      { en:'umbrella', uk:'ʌmˈbrelə', us:'ʌmˈbrelə', vi:'cái ô', pos:'danh từ' },
      { en:'flood', uk:'flʌd', us:'flʌd', vi:'lụt', pos:'danh từ', note:'oo đọc /ʌ/' },
      { en:'traffic', uk:'ˈtræfɪk', us:'ˈtræfɪk', vi:'giao thông', pos:'danh từ' },
      { en:'plan', uk:'plæn', us:'plæn', vi:'kế hoạch', pos:'danh từ' },
      { en:'instead', uk:'ɪnˈsted', us:'ɪnˈsted', vi:'thay vào đó', pos:'trạng từ', note:'instead OF + V-ing' },
      { en:'anyway', uk:'ˈeniweɪ', us:'ˈeniweɪ', vi:'dù sao thì', pos:'trạng từ' },
      { en:'sure', uk:'ʃʊə', us:'ʃʊr', vi:'chắc chắn', pos:'tính từ' }
    ],
    colloc:[
      { p:'take a risk / take a chance', vi:'chấp nhận rủi ro / thử vận may', ex:'We took a chance and it worked.' },
      { p:'be in a hurry', vi:'đang vội', ex:'Sorry, I am in a hurry.' },
      { p:'instead of + V-ing', vi:'thay vì làm gì', ex:'Let us take a taxi instead of waiting for the bus.' }
    ],
    dialogue:[
      { sp:'Linh', en:'The forecast says it will rain tomorrow.', vi:'Dự báo bảo mai trời mưa.' },
      { sp:'Quan', en:'If it rains, we will cancel the photo trip.', vi:'Nếu mưa thì mình huỷ buổi chụp ảnh.' },
      { sp:'Linh', en:'Or we might go to the museum instead.', vi:'Hoặc mình đi bảo tàng thay vào đó cũng được.' },
      { sp:'Quan', en:'Good idea. I will check the weather again tonight.', vi:'Ý hay. Tối nay tớ xem lại thời tiết.' },
      { sp:'Linh', en:'Unless it is very heavy, I would still like to go out.', vi:'Trừ khi mưa to lắm, tớ vẫn muốn ra ngoài.' },
      { sp:'Quan', en:'All right. As soon as I wake up, I will message you.', vi:'Được. Vừa dậy tớ sẽ nhắn cho bạn.' }
    ],
    reading:{ en:'Every summer the streets near Quan’s flat flood after heavy rain. If the rain continues for more than an hour, the water rises above the wheels of the motorbikes and nobody can pass. When that happens, the shops close early and the buses stop running. Quan has learned to check the forecast in the morning. If there is a warning, he leaves earlier or works from the library. Unless the flooding is really bad, he still goes to class, but he always takes an extra pair of shoes in his bag.',
      vi:'Mùa hè nào các con phố gần nhà Quân cũng ngập sau mưa lớn. Nếu mưa kéo dài hơn một tiếng, nước dâng lên quá bánh xe máy và không ai đi qua được. Khi đó, các cửa hàng đóng sớm và xe buýt ngừng chạy. Quân đã học được cách xem dự báo vào buổi sáng. Nếu có cảnh báo, cậu đi sớm hơn hoặc ngồi học ở thư viện. Trừ khi ngập quá nặng, cậu vẫn tới lớp, nhưng luôn mang thêm một đôi giày trong cặp.' } },

  { level:'a2', no:5, en:'Rules and obligations', vi:'have to, must, be allowed to', skill:'Nói về quy định',
    grammar:[
      { form:'have to / has to', vi:'Bắt buộc do hoàn cảnh hoặc quy định bên ngoài.', note:'Câu hỏi và phủ định dùng do/does: Do you have to work on Saturday?', ex:{ en:'I have to wear a uniform at work.', vi:'Ở chỗ làm tôi phải mặc đồng phục.' } },
      { form:'must vs have to', vi:'must nghiêng về ý chí người nói · have to nghiêng về quy định bên ngoài.', note:'Trong biển báo và văn bản, must rất phổ biến: Passengers must not smoke.', ex:{ en:'I must call my mother tonight.', vi:'Tối nay tôi phải gọi cho mẹ.' } },
      { form:'don’t have to ≠ mustn’t', vi:'don’t have to = không cần · mustn’t = không được phép.', note:'Đây là một trong những lỗi nghĩa nghiêm trọng nhất của người học.', ex:{ en:'You do not have to come, but you must not be late.', vi:'Bạn không nhất thiết phải đến, nhưng không được đến muộn.' } },
      { form:'be allowed to / can', vi:'Được phép làm gì.', note:'Bị động: Smoking is not allowed here.', ex:{ en:'Students are not allowed to use phones in the exam.', vi:'Thí sinh không được dùng điện thoại trong phòng thi.' } }
    ],
    vocab:[
      { en:'rule', uk:'ruːl', us:'ruːl', vi:'quy tắc, quy định', pos:'danh từ' },
      { en:'law', uk:'lɔː', us:'lɔː', vi:'luật', pos:'danh từ' },
      { en:'allow', uk:'əˈlaʊ', us:'əˈlaʊ', vi:'cho phép', pos:'động từ' },
      { en:'forbid', uk:'fəˈbɪd', us:'fərˈbɪd', vi:'cấm', pos:'động từ', note:'forbade — forbidden' },
      { en:'permission', uk:'pəˈmɪʃn', us:'pərˈmɪʃn', vi:'sự cho phép', pos:'danh từ' },
      { en:'uniform', uk:'ˈjuːnɪfɔːm', us:'ˈjuːnɪfɔːrm', vi:'đồng phục', pos:'danh từ' },
      { en:'sign', uk:'saɪn', us:'saɪn', vi:'biển báo', pos:'danh từ' },
      { en:'fine', uk:'faɪn', us:'faɪn', vi:'tiền phạt; ổn', pos:'danh từ, tính từ' },
      { en:'smoke', uk:'sməʊk', us:'smoʊk', vi:'hút thuốc', pos:'động từ' },
      { en:'noise', uk:'nɔɪz', us:'nɔɪz', vi:'tiếng ồn', pos:'danh từ' },
      { en:'quiet', uk:'ˈkwaɪət', us:'ˈkwaɪət', vi:'yên tĩnh', pos:'tính từ' },
      { en:'safety', uk:'ˈseɪfti', us:'ˈseɪfti', vi:'sự an toàn', pos:'danh từ' },
      { en:'helmet', uk:'ˈhelmɪt', us:'ˈhelmɪt', vi:'mũ bảo hiểm', pos:'danh từ' },
      { en:'licence', uk:'ˈlaɪsns', us:'ˈlaɪsns', vi:'giấy phép', pos:'danh từ', note:'Mỹ viết license' },
      { en:'punish', uk:'ˈpʌnɪʃ', us:'ˈpʌnɪʃ', vi:'phạt', pos:'động từ' },
      { en:'obey', uk:'əˈbeɪ', us:'oʊˈbeɪ', vi:'tuân theo', pos:'động từ' },
      { en:'break', uk:'breɪk', us:'breɪk', vi:'vi phạm (luật)', pos:'động từ' },
      { en:'strict', uk:'strɪkt', us:'strɪkt', vi:'nghiêm khắc', pos:'tính từ' },
      { en:'polite', uk:'pəˈlaɪt', us:'pəˈlaɪt', vi:'lịch sự', pos:'tính từ' },
      { en:'behave', uk:'bɪˈheɪv', us:'bɪˈheɪv', vi:'cư xử', pos:'động từ' }
    ],
    colloc:[
      { p:'break the rules / obey the law', vi:'vi phạm quy định / tuân thủ pháp luật', ex:'If you break the rules, you will pay a fine.' },
      { p:'be allowed to do something', vi:'được phép làm gì', ex:'We are not allowed to eat in the library.' },
      { p:'ask for permission', vi:'xin phép', ex:'You have to ask for permission first.' }
    ],
    dialogue:[
      { sp:'Quan', en:'What are the rules in your company?', vi:'Ở công ty bạn có những quy định gì?' },
      { sp:'Linh', en:'We have to arrive before nine and sign in.', vi:'Bọn tớ phải đến trước chín giờ và ký tên.' },
      { sp:'Quan', en:'Do you have to wear a uniform?', vi:'Có phải mặc đồng phục không?' },
      { sp:'Linh', en:'No, we do not. But we must not wear shorts.', vi:'Không. Nhưng không được mặc quần đùi.' },
      { sp:'Quan', en:'Are you allowed to work from home?', vi:'Bạn được làm việc ở nhà không?' },
      { sp:'Linh', en:'Twice a week, but we have to tell the manager first.', vi:'Hai buổi một tuần, nhưng phải báo quản lý trước.' },
      { sp:'Quan', en:'That sounds quite flexible.', vi:'Nghe cũng linh hoạt đấy.' }
    ],
    reading:{ en:'The university library has clear rules. Students must show their card at the door and they have to leave big bags in the lockers. They are not allowed to bring food inside, although water is fine. Phones must be silent, and anyone who makes noise twice has to leave for the day. Students do not have to return books on the same day, but if a book is late, they have to pay a small fine. Quan thinks the rules are strict but fair, because the library is always quiet.',
      vi:'Thư viện trường có quy định rõ ràng. Sinh viên phải trình thẻ ở cửa và gửi túi lớn vào tủ. Không được mang đồ ăn vào trong, riêng nước thì được. Điện thoại phải để im lặng, ai gây ồn hai lần thì phải rời khỏi thư viện ngày hôm đó. Sinh viên không nhất thiết phải trả sách trong ngày, nhưng nếu trả muộn thì phải nộp một khoản phạt nhỏ. Quân thấy quy định nghiêm nhưng công bằng, vì thư viện lúc nào cũng yên tĩnh.' } },

  { level:'a2', no:6, en:'Too much, too many, enough', vi:'Lượng từ và mức độ', skill:'Nhận xét, phàn nàn',
    grammar:[
      { form:'too much / too many / too + tính từ', vi:'too much + không đếm được · too many + đếm được · too + tính từ.', note:'«too» luôn mang nghĩa tiêu cực: quá mức chấp nhận được.', ex:{ en:'There is too much traffic and too many people.', vi:'Xe cộ quá đông và người cũng quá đông.' } },
      { form:'enough', vi:'enough + danh từ · tính từ + enough.', note:'Vị trí đảo nhau: enough money nhưng old enough.', ex:{ en:'He is not old enough to drive.', vi:'Cậu ấy chưa đủ tuổi lái xe.' } },
      { form:'a lot of / lots of / plenty of', vi:'Dùng cho cả đếm được và không đếm được, mang sắc thái trung tính hoặc tích cực.', note:'Trong câu phủ định và nghi vấn trang trọng thì dùng much/many.', ex:{ en:'We have plenty of time.', vi:'Chúng ta còn thừa thời gian.' } },
      { form:'a little / a few / hardly any', vi:'a little + không đếm được · a few + đếm được · hardly any = gần như không có.', note:'little và few (không có «a») mang nghĩa tiêu cực: ít đến mức không đủ.', ex:{ en:'There are a few seats left.', vi:'Còn vài chỗ trống.' } }
    ],
    vocab:[
      { en:'enough', uk:'ɪˈnʌf', us:'ɪˈnʌf', vi:'đủ', pos:'hạn định từ, trạng từ', note:'gh đọc /f/' },
      { en:'plenty', uk:'ˈplenti', us:'ˈplenti', vi:'nhiều, dư dả', pos:'danh từ', note:'plenty OF' },
      { en:'crowd', uk:'kraʊd', us:'kraʊd', vi:'đám đông', pos:'danh từ' },
      { en:'space', uk:'speɪs', us:'speɪs', vi:'không gian, chỗ trống', pos:'danh từ' },
      { en:'noise', uk:'nɔɪz', us:'nɔɪz', vi:'tiếng ồn', pos:'danh từ' },
      { en:'pollution', uk:'pəˈluːʃn', us:'pəˈluːʃn', vi:'ô nhiễm', pos:'danh từ' },
      { en:'rubbish', uk:'ˈrʌbɪʃ', us:'ˈrʌbɪʃ', vi:'rác (Anh)', pos:'danh từ', note:'Mỹ: trash, garbage' },
      { en:'complain', uk:'kəmˈpleɪn', us:'kəmˈpleɪn', vi:'phàn nàn', pos:'động từ', note:'complain ABOUT' },
      { en:'solve', uk:'sɒlv', us:'sɑːlv', vi:'giải quyết', pos:'động từ' },
      { en:'reduce', uk:'rɪˈdjuːs', us:'rɪˈduːs', vi:'giảm', pos:'động từ' },
      { en:'increase', uk:'ɪnˈkriːs', us:'ɪnˈkriːs', vi:'tăng', pos:'động từ', note:'danh từ đọc ˈɪŋkriːs' },
      { en:'waste', uk:'weɪst', us:'weɪst', vi:'lãng phí', pos:'động từ, danh từ' },
      { en:'save', uk:'seɪv', us:'seɪv', vi:'tiết kiệm', pos:'động từ' },
      { en:'quality', uk:'ˈkwɒləti', us:'ˈkwɑːləti', vi:'chất lượng', pos:'danh từ' },
      { en:'quantity', uk:'ˈkwɒntəti', us:'ˈkwɑːntəti', vi:'số lượng', pos:'danh từ' },
      { en:'average', uk:'ˈævərɪdʒ', us:'ˈævərɪdʒ', vi:'trung bình', pos:'tính từ, danh từ' },
      { en:'percent', uk:'pəˈsent', us:'pərˈsent', vi:'phần trăm', pos:'danh từ' },
      { en:'stress', uk:'stres', us:'stres', vi:'căng thẳng', pos:'danh từ' },
      { en:'sleep', uk:'sliːp', us:'sliːp', vi:'giấc ngủ; ngủ', pos:'danh từ, động từ' },
      { en:'balance', uk:'ˈbæləns', us:'ˈbæləns', vi:'sự cân bằng', pos:'danh từ' }
    ],
    colloc:[
      { p:'waste time / waste money', vi:'lãng phí thời gian, tiền bạc', ex:'Do not waste time on that.' },
      { p:'work–life balance', vi:'cân bằng công việc và cuộc sống', ex:'She left the job for a better work–life balance.' },
      { p:'complain about something to someone', vi:'phàn nàn với ai về việc gì', ex:'They complained to the manager about the noise.' }
    ],
    dialogue:[
      { sp:'Linh', en:'You look tired. Are you all right?', vi:'Trông bạn mệt. Ổn không?' },
      { sp:'Quan', en:'I have too much work and not enough sleep.', vi:'Tớ nhiều việc quá mà ngủ không đủ.' },
      { sp:'Linh', en:'How many hours do you sleep?', vi:'Bạn ngủ mấy tiếng?' },
      { sp:'Quan', en:'About five. There is never enough time.', vi:'Khoảng năm tiếng. Chẳng bao giờ đủ thời gian.' },
      { sp:'Linh', en:'You spend too much time on your phone at night.', vi:'Buổi tối bạn dùng điện thoại nhiều quá đấy.' },
      { sp:'Quan', en:'That is true. I waste at least an hour every evening.', vi:'Đúng thật. Tối nào tớ cũng phí ít nhất một tiếng.' },
      { sp:'Linh', en:'Try leaving it in another room. It works for me.', vi:'Thử để nó ở phòng khác xem. Tớ làm thế thấy hiệu quả.' }
    ],
    reading:{ en:'Many students in big cities say they have too much to do and not enough time to rest. On average they sleep only six hours a night, which is not enough for people of their age. There is also too much noise near the university and too many motorbikes on the roads, so the air quality is poor. The university has tried to solve part of the problem: it has opened a quiet study room and reduced the number of evening classes. Most students say there is still not enough space in the library.',
      vi:'Nhiều sinh viên ở thành phố lớn nói họ có quá nhiều việc phải làm mà không đủ thời gian nghỉ. Trung bình họ chỉ ngủ sáu tiếng một đêm, chưa đủ với lứa tuổi này. Gần trường cũng quá ồn và quá nhiều xe máy trên đường nên chất lượng không khí kém. Nhà trường đã cố giải quyết một phần: mở một phòng tự học yên tĩnh và giảm bớt số lớp buổi tối. Phần lớn sinh viên nói thư viện vẫn chưa đủ chỗ.' } },

  { level:'a2', no:7, en:'The man who lives next door', vi:'Mệnh đề quan hệ', skill:'Miêu tả chi tiết',
    grammar:[
      { form:'who / which / that', vi:'who cho người · which cho vật · that dùng được cho cả hai (thân mật hơn).', note:'Đại từ quan hệ thay cho chủ ngữ thì KHÔNG lặp lại chủ ngữ: «the man who he lives» là sai.', ex:{ en:'The woman who lives next door is a doctor.', vi:'Người phụ nữ sống nhà bên là bác sĩ.' } },
      { form:'where / whose', vi:'where cho nơi chốn · whose chỉ sở hữu.', note:'This is the café where we met. · That is the student whose father is a teacher.', ex:{ en:'This is the shop where I bought my bike.', vi:'Đây là cửa hàng nơi tôi mua xe đạp.' } },
      { form:'Lược bỏ đại từ quan hệ', vi:'Bỏ được khi nó là TÂN NGỮ của mệnh đề.', note:'The film (that) we saw was great. — nhưng không bỏ được nếu nó là chủ ngữ.', ex:{ en:'The book I am reading is very good.', vi:'Cuốn sách tôi đang đọc rất hay.' } },
      { form:'Mệnh đề bổ sung thông tin', vi:'Có dấu phẩy, chỉ thêm thông tin phụ; không dùng «that».', note:'My brother, who lives in Hue, is a teacher. Bỏ mệnh đề đi câu vẫn đủ nghĩa.', ex:{ en:'Hanoi, which is the capital, has eight million people.', vi:'Hà Nội, thủ đô của nước ta, có tám triệu dân.' } }
    ],
    vocab:[
      { en:'neighbour', uk:'ˈneɪbə', us:'ˈneɪbər', vi:'hàng xóm', pos:'danh từ' },
      { en:'colleague', uk:'ˈkɒliːɡ', us:'ˈkɑːliːɡ', vi:'đồng nghiệp', pos:'danh từ' },
      { en:'owner', uk:'ˈəʊnə', us:'ˈoʊnər', vi:'chủ sở hữu', pos:'danh từ' },
      { en:'author', uk:'ˈɔːθə', us:'ˈɔːθər', vi:'tác giả', pos:'danh từ' },
      { en:'artist', uk:'ˈɑːtɪst', us:'ˈɑːrtɪst', vi:'nghệ sĩ', pos:'danh từ' },
      { en:'inventor', uk:'ɪnˈventə', us:'ɪnˈventər', vi:'nhà phát minh', pos:'danh từ' },
      { en:'building', uk:'ˈbɪldɪŋ', us:'ˈbɪldɪŋ', vi:'toà nhà', pos:'danh từ' },
      { en:'museum', uk:'mjuˈziːəm', us:'mjuˈziːəm', vi:'bảo tàng', pos:'danh từ' },
      { en:'village', uk:'ˈvɪlɪdʒ', us:'ˈvɪlɪdʒ', vi:'làng', pos:'danh từ' },
      { en:'island', uk:'ˈaɪlənd', us:'ˈaɪlənd', vi:'hòn đảo', pos:'danh từ', note:'s câm' },
      { en:'invent', uk:'ɪnˈvent', us:'ɪnˈvent', vi:'phát minh', pos:'động từ' },
      { en:'discover', uk:'dɪˈskʌvə', us:'dɪˈskʌvər', vi:'khám phá', pos:'động từ' },
      { en:'build', uk:'bɪld', us:'bɪld', vi:'xây', pos:'động từ', note:'built — built' },
      { en:'design', uk:'dɪˈzaɪn', us:'dɪˈzaɪn', vi:'thiết kế', pos:'động từ, danh từ', note:'g câm' },
      { en:'famous', uk:'ˈfeɪməs', us:'ˈfeɪməs', vi:'nổi tiếng', pos:'tính từ', note:'famous FOR' },
      { en:'unusual', uk:'ʌnˈjuːʒuəl', us:'ʌnˈjuːʒuəl', vi:'khác thường', pos:'tính từ' },
      { en:'typical', uk:'ˈtɪpɪkl', us:'ˈtɪpɪkl', vi:'điển hình', pos:'tính từ' },
      { en:'century', uk:'ˈsentʃəri', us:'ˈsentʃəri', vi:'thế kỷ', pos:'danh từ' },
      { en:'history', uk:'ˈhɪstri', us:'ˈhɪstri', vi:'lịch sử', pos:'danh từ' },
      { en:'local', uk:'ˈləʊkl', us:'ˈloʊkl', vi:'địa phương', pos:'tính từ' }
    ],
    colloc:[
      { p:'be famous for something', vi:'nổi tiếng vì cái gì — dùng «for», không dùng «about»', ex:'Hue is famous for its royal food.' },
      { p:'the place where I grew up', vi:'nơi tôi lớn lên', ex:'This is the village where I grew up.' },
      { p:'the reason why', vi:'lý do vì sao', ex:'That is the reason why I moved here.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Who is the man who is talking to your father?', vi:'Người đàn ông đang nói chuyện với bố bạn là ai vậy?' },
      { sp:'Quan', en:'That is Mr Hai, the neighbour who fixed our roof last year.', vi:'Đó là bác Hải, người hàng xóm đã sửa mái nhà cho bọn tớ năm ngoái.' },
      { sp:'Linh', en:'And the woman whose bike is in the garden?', vi:'Còn người phụ nữ có cái xe đạp để trong vườn?' },
      { sp:'Quan', en:'His wife. She owns the shop where we buy bread.', vi:'Vợ bác ấy. Cô ấy là chủ tiệm bánh mì bọn tớ hay mua.' },
      { sp:'Linh', en:'The one that opens at five in the morning?', vi:'Cái tiệm mở cửa từ năm giờ sáng ấy hả?' },
      { sp:'Quan', en:'Exactly. It is the only bakery which is open that early.', vi:'Chính nó. Đó là tiệm bánh duy nhất mở sớm như vậy.' }
    ],
    reading:{ en:'The old quarter is the part of Hanoi which tourists like most. It is a place where every street once sold a single kind of product, and many of the names, which are still used today, come from those old trades. The house that Quan’s grandmother grew up in is on a narrow street near the market. The family who lives there now has kept the wooden front, but they have opened a small café inside. Quan often takes photographs of the doors, which are more than a hundred years old.',
      vi:'Khu phố cổ là phần Hà Nội mà du khách thích nhất. Đó là nơi mỗi con phố xưa kia chỉ bán một loại hàng, và nhiều cái tên vẫn dùng đến hôm nay đều bắt nguồn từ những nghề cũ ấy. Ngôi nhà bà của Quân lớn lên nằm trên một con phố nhỏ gần chợ. Gia đình hiện sống ở đó vẫn giữ mặt tiền gỗ, nhưng đã mở một quán cà phê nhỏ bên trong. Quân hay chụp ảnh những cánh cửa, thứ đã hơn một trăm tuổi.' } },

  { level:'a2', no:8, en:'She said she was busy', vi:'Câu tường thuật cơ bản', skill:'Thuật lại lời nói',
    grammar:[
      { form:'say / tell', vi:'say something (to someone) · tell someone something.', note:'«He said me» là sai. Phải là «He told me» hoặc «He said to me».', ex:{ en:'She told me she was busy.', vi:'Cô ấy bảo tôi rằng cô ấy bận.' } },
      { form:'Lùi thì', vi:'am/is → was · are → were · V(s) → V-ed · will → would · can → could.', note:'Nếu điều đó vẫn đúng ở hiện tại, có thể giữ nguyên thì.', ex:{ en:'He said he would call me later.', vi:'Anh ấy nói sẽ gọi tôi sau.' } },
      { form:'Đổi đại từ và trạng ngữ', vi:'I → he/she · today → that day · tomorrow → the next day · here → there.', note:'Nhớ đổi cả cách xưng hô cho hợp lô-gic người kể.', ex:{ en:'«I will come tomorrow.» → He said he would come the next day.', vi:'«Mai tôi sẽ đến.» → Anh ấy nói hôm sau anh ấy sẽ đến.' } },
      { form:'Tường thuật câu hỏi và mệnh lệnh', vi:'Câu hỏi: ask + (if/whether hoặc từ hỏi) + trật tự câu kể · Mệnh lệnh: tell/ask someone to + V.', note:'Không giữ trợ động từ do/does trong câu tường thuật.', ex:{ en:'She asked me where I lived and told me to wait.', vi:'Cô ấy hỏi tôi sống ở đâu và bảo tôi đợi.' } }
    ],
    vocab:[
      { en:'mention', uk:'ˈmenʃn', us:'ˈmenʃn', vi:'nhắc tới', pos:'động từ' },
      { en:'explain', uk:'ɪkˈspleɪn', us:'ɪkˈspleɪn', vi:'giải thích', pos:'động từ', note:'explain TO someone' },
      { en:'admit', uk:'ədˈmɪt', us:'ədˈmɪt', vi:'thừa nhận', pos:'động từ' },
      { en:'promise', uk:'ˈprɒmɪs', us:'ˈprɑːmɪs', vi:'hứa', pos:'động từ, danh từ' },
      { en:'suggest', uk:'səˈdʒest', us:'səɡˈdʒest', vi:'đề xuất', pos:'động từ', note:'suggest + V-ing hoặc that-clause' },
      { en:'advise', uk:'ədˈvaɪz', us:'ədˈvaɪz', vi:'khuyên', pos:'động từ', note:'danh từ advice đọc /ədˈvaɪs/' },
      { en:'warn', uk:'wɔːn', us:'wɔːrn', vi:'cảnh báo', pos:'động từ' },
      { en:'refuse', uk:'rɪˈfjuːz', us:'rɪˈfjuːz', vi:'từ chối', pos:'động từ' },
      { en:'agree', uk:'əˈɡriː', us:'əˈɡriː', vi:'đồng ý', pos:'động từ', note:'agree WITH someone, agree TO do' },
      { en:'disagree', uk:'ˌdɪsəˈɡriː', us:'ˌdɪsəˈɡriː', vi:'không đồng ý', pos:'động từ' },
      { en:'complain', uk:'kəmˈpleɪn', us:'kəmˈpleɪn', vi:'phàn nàn', pos:'động từ' },
      { en:'apologise', uk:'əˈpɒlədʒaɪz', us:'əˈpɑːlədʒaɪz', vi:'xin lỗi', pos:'động từ', note:'Mỹ viết apologize' },
      { en:'news', uk:'njuːz', us:'nuːz', vi:'tin tức', pos:'danh từ', note:'không đếm được, đi với động từ số ít' },
      { en:'message', uk:'ˈmesɪdʒ', us:'ˈmesɪdʒ', vi:'tin nhắn', pos:'danh từ' },
      { en:'conversation', uk:'ˌkɒnvəˈseɪʃn', us:'ˌkɑːnvərˈseɪʃn', vi:'cuộc trò chuyện', pos:'danh từ' },
      { en:'truth', uk:'truːθ', us:'truːθ', vi:'sự thật', pos:'danh từ' },
      { en:'lie', uk:'laɪ', us:'laɪ', vi:'nói dối; lời nói dối', pos:'động từ, danh từ' },
      { en:'secret', uk:'ˈsiːkrət', us:'ˈsiːkrət', vi:'bí mật', pos:'danh từ' },
      { en:'opinion', uk:'əˈpɪnjən', us:'əˈpɪnjən', vi:'ý kiến', pos:'danh từ' },
      { en:'excuse', uk:'ɪkˈskjuːs', us:'ɪkˈskjuːs', vi:'lời bào chữa', pos:'danh từ', note:'động từ đọc /ɪkˈskjuːz/' }
    ],
    colloc:[
      { p:'tell the truth / tell a lie', vi:'nói thật / nói dối — luôn dùng «tell», không dùng «say»', ex:'Just tell the truth.' },
      { p:'keep a secret / keep a promise', vi:'giữ bí mật / giữ lời hứa', ex:'Can you keep a secret?' },
      { p:'in my opinion', vi:'theo ý tôi — mở đầu câu nêu quan điểm trong bài viết', ex:'In my opinion, the rule is unfair.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Did you speak to the manager?', vi:'Bạn nói chuyện với quản lý chưa?' },
      { sp:'Quan', en:'Yes. He said the interview went well.', vi:'Rồi. Anh ấy nói buổi phỏng vấn tốt.' },
      { sp:'Linh', en:'Did he say anything about the salary?', vi:'Anh ấy có nói gì về lương không?' },
      { sp:'Quan', en:'He told me they would send an offer next week.', vi:'Anh ấy bảo tuần sau họ sẽ gửi thư mời.' },
      { sp:'Linh', en:'Did he ask you when you could start?', vi:'Anh ấy có hỏi bạn khi nào bắt đầu được không?' },
      { sp:'Quan', en:'Yes, and I said I could start after my exams.', vi:'Có, và tớ nói sau kỳ thi là bắt đầu được.' },
      { sp:'Linh', en:'He also suggested learning some Japanese, didn’t he?', vi:'Anh ấy còn gợi ý học chút tiếng Nhật đúng không?' },
      { sp:'Quan', en:'He did. He warned me that the clients are all Japanese.', vi:'Đúng vậy. Anh ấy dặn là khách hàng toàn người Nhật.' }
    ],
    reading:{ en:'After the interview Quan called his mother and told her everything. He said the office was small but modern and that the manager had been friendly. He explained that the company worked with clients in Japan, so they had asked him whether he could learn some Japanese. He admitted that he had been nervous at the beginning, but he promised that he would not give up. His mother advised him not to accept the first offer immediately, and told him to ask about training. Quan agreed that this was good advice.',
      vi:'Sau buổi phỏng vấn, Quân gọi cho mẹ và kể lại tất cả. Cậu nói văn phòng nhỏ nhưng hiện đại và quản lý rất thân thiện. Cậu giải thích rằng công ty làm việc với khách hàng ở Nhật, nên họ hỏi cậu có học được chút tiếng Nhật không. Cậu thừa nhận lúc đầu mình hồi hộp, nhưng hứa sẽ không bỏ cuộc. Mẹ khuyên cậu đừng nhận lời mời đầu tiên ngay, và bảo cậu hỏi về chế độ đào tạo. Quân đồng ý đó là lời khuyên hay.' } },

  { level:'a2', no:9, en:'It was built in 1990', vi:'Câu bị động', skill:'Miêu tả quy trình, sự việc',
    grammar:[
      { form:'be + phân từ ba', vi:'Dùng khi việc gì được làm quan trọng hơn ai làm.', note:'Hiện tại: is/are + V3 · Quá khứ: was/were + V3.', ex:{ en:'This bridge was built in 1902.', vi:'Cây cầu này được xây năm 1902.' } },
      { form:'by + tác nhân', vi:'Chỉ thêm «by…» khi người thực hiện thật sự quan trọng.', note:'Phần lớn câu bị động trong thực tế KHÔNG có «by».', ex:{ en:'The email was sent by the manager.', vi:'Email do quản lý gửi.' } },
      { form:'Khi nào dùng bị động', vi:'Khi không biết ai làm, khi ai làm không quan trọng, hoặc trong văn viết khoa học, tin tức.', note:'Lạm dụng bị động làm câu nặng nề — trong bài IELTS Writing chỉ nên dùng khi thật cần.', ex:{ en:'My phone was stolen yesterday.', vi:'Hôm qua điện thoại tôi bị lấy mất.' } },
      { form:'Bị động với động từ khuyết thiếu', vi:'can/must/should + be + V3.', note:'This form must be signed before Friday.', ex:{ en:'The room can be booked online.', vi:'Có thể đặt phòng trực tuyến.' } }
    ],
    vocab:[
      { en:'produce', uk:'prəˈdjuːs', us:'prəˈduːs', vi:'sản xuất', pos:'động từ', note:'danh từ đọc ˈprɒdjuːs' },
      { en:'export', uk:'ɪkˈspɔːt', us:'ɪkˈspɔːrt', vi:'xuất khẩu', pos:'động từ', note:'danh từ nhấn âm đầu' },
      { en:'import', uk:'ɪmˈpɔːt', us:'ɪmˈpɔːrt', vi:'nhập khẩu', pos:'động từ' },
      { en:'factory', uk:'ˈfæktri', us:'ˈfæktri', vi:'nhà máy', pos:'danh từ' },
      { en:'material', uk:'məˈtɪəriəl', us:'məˈtɪriəl', vi:'nguyên liệu', pos:'danh từ' },
      { en:'process', uk:'ˈprəʊses', us:'ˈprɑːses', vi:'quy trình', pos:'danh từ' },
      { en:'machine', uk:'məˈʃiːn', us:'məˈʃiːn', vi:'máy móc', pos:'danh từ' },
      { en:'repair', uk:'rɪˈpeə', us:'rɪˈper', vi:'sửa chữa', pos:'động từ' },
      { en:'deliver', uk:'dɪˈlɪvə', us:'dɪˈlɪvər', vi:'giao hàng', pos:'động từ' },
      { en:'steal', uk:'stiːl', us:'stiːl', vi:'ăn trộm', pos:'động từ', note:'stole — stolen' },
      { en:'destroy', uk:'dɪˈstrɔɪ', us:'dɪˈstrɔɪ', vi:'phá huỷ', pos:'động từ' },
      { en:'protect', uk:'prəˈtekt', us:'prəˈtekt', vi:'bảo vệ', pos:'động từ' },
      { en:'invent', uk:'ɪnˈvent', us:'ɪnˈvent', vi:'phát minh', pos:'động từ' },
      { en:'publish', uk:'ˈpʌblɪʃ', us:'ˈpʌblɪʃ', vi:'xuất bản', pos:'động từ' },
      { en:'translate', uk:'trænzˈleɪt', us:'ˈtrænsleɪt', vi:'dịch', pos:'động từ' },
      { en:'grow', uk:'ɡrəʊ', us:'ɡroʊ', vi:'trồng; mọc', pos:'động từ' },
      { en:'harvest', uk:'ˈhɑːvɪst', us:'ˈhɑːrvɪst', vi:'thu hoạch', pos:'động từ, danh từ' },
      { en:'product', uk:'ˈprɒdʌkt', us:'ˈprɑːdʌkt', vi:'sản phẩm', pos:'danh từ' },
      { en:'company', uk:'ˈkʌmpəni', us:'ˈkʌmpəni', vi:'công ty', pos:'danh từ' },
      { en:'worker', uk:'ˈwɜːkə', us:'ˈwɜːrkər', vi:'công nhân', pos:'danh từ' }
    ],
    colloc:[
      { p:'be made of / be made from / be made in', vi:'of = còn thấy chất liệu · from = đã biến đổi · in = nơi sản xuất', ex:'The table is made of wood. Paper is made from trees. It was made in Vietnam.' },
      { p:'be known as / be known for', vi:'được gọi là / nổi tiếng vì', ex:'He is known as «the coffee king» and known for his generosity.' },
      { p:'be based in / be based on', vi:'đặt trụ sở tại / dựa trên', ex:'The company is based in Hanoi. The film is based on a novel.' }
    ],
    dialogue:[
      { sp:'Guide', en:'This temple was built in the eleventh century.', vi:'Ngôi đền này được xây vào thế kỷ mười một.' },
      { sp:'Quan', en:'Was it destroyed during the war?', vi:'Nó có bị phá trong chiến tranh không ạ?' },
      { sp:'Guide', en:'Part of it was. It was repaired in the 1950s.', vi:'Một phần thì có. Nó được sửa lại vào những năm 1950.' },
      { sp:'Linh', en:'What is the roof made of?', vi:'Mái làm bằng gì vậy ạ?' },
      { sp:'Guide', en:'It is made of wood and old tiles.', vi:'Bằng gỗ và ngói cũ ạ.' },
      { sp:'Quan', en:'Are photographs allowed inside?', vi:'Bên trong có được chụp ảnh không ạ?' },
      { sp:'Guide', en:'Yes, but flash must not be used.', vi:'Được ạ, nhưng không được dùng đèn flash.' }
    ],
    reading:{ en:'Coffee has been grown in the Central Highlands of Vietnam for more than a century. The first trees were brought by French planters in the nineteenth century, and today the country is known as one of the largest exporters in the world. Most of the beans are harvested between November and February. After they are dried, they are sold to companies which are based in Ho Chi Minh City or Buon Ma Thuot, and from there they are exported to Europe, the United States and Japan. Only a small part of the harvest is used inside the country.',
      vi:'Cà phê đã được trồng ở Tây Nguyên hơn một thế kỷ. Những cây đầu tiên do người Pháp mang tới vào thế kỷ mười chín, và ngày nay Việt Nam được biết đến là một trong những nước xuất khẩu lớn nhất thế giới. Phần lớn hạt được thu hoạch từ tháng Mười một đến tháng Hai. Sau khi phơi khô, hạt được bán cho các công ty đặt tại Thành phố Hồ Chí Minh hoặc Buôn Ma Thuột, rồi từ đó xuất sang châu Âu, Mỹ và Nhật. Chỉ một phần nhỏ vụ mùa được dùng trong nước.' } },

  { level:'a2', no:10, en:'I enjoy learning, I want to learn', vi:'Danh động từ và động từ nguyên thể', skill:'Dùng đúng dạng động từ',
    grammar:[
      { form:'Động từ + V-ing', vi:'enjoy, finish, avoid, mind, suggest, practise, keep, miss, imagine.', note:'Cũng dùng V-ing sau MỌI giới từ: good at swimming, interested in learning.', ex:{ en:'She avoided answering the question.', vi:'Cô ấy né trả lời câu hỏi.' } },
      { form:'Động từ + to + V', vi:'want, need, decide, hope, plan, promise, agree, learn, offer, refuse, manage.', note:'Nhóm này thường chỉ ý định, kế hoạch hoặc điều chưa xảy ra.', ex:{ en:'They decided to move to Da Nang.', vi:'Họ quyết định chuyển vào Đà Nẵng.' } },
      { form:'Đổi dạng, đổi nghĩa', vi:'stop / remember / forget / try đổi nghĩa hẳn khi đổi dạng.', note:'stop smoking (bỏ thuốc) ≠ stop to smoke (dừng lại để hút). remember to lock (nhớ mà khoá) ≠ remember locking (nhớ là đã khoá).', ex:{ en:'I remember meeting her, but I forgot to call her.', vi:'Tôi nhớ là đã gặp cô ấy, nhưng lại quên gọi cho cô ấy.' } },
      { form:'Danh động từ làm chủ ngữ', vi:'Đứng đầu câu như một danh từ.', note:'Learning English takes time. — động từ chia số ít.', ex:{ en:'Reading in English every day helps a lot.', vi:'Đọc tiếng Anh mỗi ngày giúp ích rất nhiều.' } }
    ],
    vocab:[
      { en:'avoid', uk:'əˈvɔɪd', us:'əˈvɔɪd', vi:'tránh', pos:'động từ', note:'avoid + V-ing' },
      { en:'imagine', uk:'ɪˈmædʒɪn', us:'ɪˈmædʒɪn', vi:'tưởng tượng', pos:'động từ' },
      { en:'consider', uk:'kənˈsɪdə', us:'kənˈsɪdər', vi:'cân nhắc', pos:'động từ', note:'consider + V-ing' },
      { en:'manage', uk:'ˈmænɪdʒ', us:'ˈmænɪdʒ', vi:'xoay xở làm được', pos:'động từ', note:'manage TO do' },
      { en:'offer', uk:'ˈɒfə', us:'ˈɔːfər', vi:'đề nghị, mời', pos:'động từ' },
      { en:'refuse', uk:'rɪˈfjuːz', us:'rɪˈfjuːz', vi:'từ chối', pos:'động từ' },
      { en:'expect', uk:'ɪkˈspekt', us:'ɪkˈspekt', vi:'mong đợi, dự kiến', pos:'động từ' },
      { en:'prefer', uk:'prɪˈfɜː', us:'prɪˈfɜːr', vi:'thích hơn', pos:'động từ', note:'prefer A to B' },
      { en:'admit', uk:'ədˈmɪt', us:'ədˈmɪt', vi:'thừa nhận', pos:'động từ' },
      { en:'practise', uk:'ˈpræktɪs', us:'ˈpræktɪs', vi:'luyện tập', pos:'động từ' },
      { en:'keep', uk:'kiːp', us:'kiːp', vi:'giữ; tiếp tục', pos:'động từ', note:'keep + V-ing = cứ tiếp tục' },
      { en:'give up', uk:'ɡɪv ʌp', us:'ɡɪv ʌp', vi:'bỏ cuộc', pos:'cụm động từ', note:'give up + V-ing' },
      { en:'succeed', uk:'səkˈsiːd', us:'səkˈsiːd', vi:'thành công', pos:'động từ', note:'succeed IN + V-ing' },
      { en:'fail', uk:'feɪl', us:'feɪl', vi:'thất bại; trượt', pos:'động từ', note:'fail TO do' },
      { en:'method', uk:'ˈmeθəd', us:'ˈmeθəd', vi:'phương pháp', pos:'danh từ' },
      { en:'advice', uk:'ədˈvaɪs', us:'ədˈvaɪs', vi:'lời khuyên', pos:'danh từ', note:'không đếm được: a piece of advice' },
      { en:'mistake', uk:'mɪˈsteɪk', us:'mɪˈsteɪk', vi:'lỗi sai', pos:'danh từ' },
      { en:'routine', uk:'ruːˈtiːn', us:'ruːˈtiːn', vi:'thói quen hằng ngày', pos:'danh từ' },
      { en:'motivation', uk:'ˌməʊtɪˈveɪʃn', us:'ˌmoʊtɪˈveɪʃn', vi:'động lực', pos:'danh từ' },
      { en:'confidence', uk:'ˈkɒnfɪdəns', us:'ˈkɑːnfɪdəns', vi:'sự tự tin', pos:'danh từ' }
    ],
    colloc:[
      { p:'be worth + V-ing', vi:'đáng để làm gì', ex:'That film is worth watching twice.' },
      { p:'look forward to + V-ing', vi:'mong chờ — «to» là giới từ nên theo sau là V-ing', ex:'I look forward to hearing from you.' },
      { p:'It is no use + V-ing', vi:'vô ích khi làm gì', ex:'It is no use worrying about it now.' }
    ],
    dialogue:[
      { sp:'Linh', en:'How do you practise speaking?', vi:'Bạn luyện nói kiểu gì?' },
      { sp:'Quan', en:'I have decided to record myself every evening.', vi:'Tớ quyết định tối nào cũng tự thu âm.' },
      { sp:'Linh', en:'Do you mind listening to your own voice?', vi:'Bạn có ngại nghe giọng của chính mình không?' },
      { sp:'Quan', en:'At first I hated it, but I kept doing it.', vi:'Ban đầu tớ ghét lắm, nhưng cứ làm tiếp.' },
      { sp:'Linh', en:'Have you managed to fix your pronunciation?', vi:'Bạn sửa được phát âm chưa?' },
      { sp:'Quan', en:'Some sounds, yes. I still avoid using the th sound.', vi:'Vài âm thì được. Tớ vẫn né âm th.' },
      { sp:'Linh', en:'Do not give up practising. It is worth doing.', vi:'Đừng bỏ tập nhé. Đáng để làm lắm.' }
    ],
    reading:{ en:'Quan has tried many methods of learning English. He started by memorising long word lists, but he soon stopped doing that, because he forgot most of the words after a week. Then he decided to change his routine. Now he spends twenty minutes reading an article, ten minutes writing a short summary and ten minutes recording himself. He admits that recording his voice was uncomfortable at the beginning, but he has kept doing it for four months. He says the most useful advice he ever received was simple: do not avoid speaking just because you are afraid of making mistakes.',
      vi:'Quân đã thử nhiều cách học tiếng Anh. Cậu bắt đầu bằng việc học thuộc danh sách từ dài, nhưng sớm bỏ vì sau một tuần cậu quên gần hết. Rồi cậu quyết định đổi thói quen. Giờ cậu dành hai mươi phút đọc một bài báo, mười phút viết tóm tắt và mười phút tự thu âm. Cậu thừa nhận thu âm giọng mình lúc đầu rất khó chịu, nhưng cậu đã duy trì được bốn tháng. Cậu bảo lời khuyên hữu ích nhất từng nhận được rất đơn giản: đừng né nói chỉ vì sợ mắc lỗi.' } },

  { level:'a2', no:11, en:'I used to live there', vi:'used to và thói quen trong quá khứ', skill:'So sánh xưa và nay',
    grammar:[
      { form:'used to + V', vi:'Thói quen hoặc trạng thái trong quá khứ nay không còn.', note:'Câu hỏi và phủ định: Did you use to…? / I did not use to… (bỏ chữ d).', ex:{ en:'I used to walk to school every day.', vi:'Trước đây ngày nào tôi cũng đi bộ tới trường.' } },
      { form:'be used to + V-ing ≠ used to + V', vi:'be used to = đã quen với (hiện tại) · used to = từng (quá khứ).', note:'I am used to getting up early (giờ đã quen) ≠ I used to get up early (trước kia hay dậy sớm).', ex:{ en:'She is used to working at night now.', vi:'Giờ cô ấy đã quen làm ca đêm.' } },
      { form:'would cho thói quen quá khứ', vi:'Dùng trong hồi tưởng, chỉ cho hành động lặp lại, KHÔNG cho trạng thái.', note:'Every summer we would go to the beach. — nhưng không nói «I would have a bike».', ex:{ en:'When I was a child, my father would tell me stories.', vi:'Hồi nhỏ, bố hay kể chuyện cho tôi nghe.' } },
      { form:'So sánh xưa và nay', vi:'These days… / Nowadays… / In the past… / Back then…', note:'nowadays và these days luôn đi với hiện tại đơn.', ex:{ en:'In the past people wrote letters; nowadays they send messages.', vi:'Ngày xưa người ta viết thư; giờ thì nhắn tin.' } }
    ],
    vocab:[
      { en:'childhood', uk:'ˈtʃaɪldhʊd', us:'ˈtʃaɪldhʊd', vi:'thời thơ ấu', pos:'danh từ' },
      { en:'memory', uk:'ˈmeməri', us:'ˈmeməri', vi:'kỷ niệm', pos:'danh từ' },
      { en:'nowadays', uk:'ˈnaʊədeɪz', us:'ˈnaʊədeɪz', vi:'ngày nay', pos:'trạng từ' },
      { en:'modern', uk:'ˈmɒdn', us:'ˈmɑːdərn', vi:'hiện đại', pos:'tính từ' },
      { en:'traditional', uk:'trəˈdɪʃənl', us:'trəˈdɪʃənl', vi:'truyền thống', pos:'tính từ' },
      { en:'generation', uk:'ˌdʒenəˈreɪʃn', us:'ˌdʒenəˈreɪʃn', vi:'thế hệ', pos:'danh từ' },
      { en:'develop', uk:'dɪˈveləp', us:'dɪˈveləp', vi:'phát triển', pos:'động từ' },
      { en:'disappear', uk:'ˌdɪsəˈpɪə', us:'ˌdɪsəˈpɪr', vi:'biến mất', pos:'động từ' },
      { en:'remain', uk:'rɪˈmeɪn', us:'rɪˈmeɪn', vi:'vẫn còn', pos:'động từ' },
      { en:'countryside', uk:'ˈkʌntrisaɪd', us:'ˈkʌntrisaɪd', vi:'vùng quê', pos:'danh từ' },
      { en:'field', uk:'fiːld', us:'fiːld', vi:'cánh đồng', pos:'danh từ' },
      { en:'well', uk:'wel', us:'wel', vi:'cái giếng', pos:'danh từ' },
      { en:'lamp', uk:'læmp', us:'læmp', vi:'đèn dầu, đèn', pos:'danh từ' },
      { en:'letter', uk:'ˈletə', us:'ˈletər', vi:'lá thư', pos:'danh từ' },
      { en:'radio', uk:'ˈreɪdiəʊ', us:'ˈreɪdioʊ', vi:'đài phát thanh', pos:'danh từ' },
      { en:'bicycle', uk:'ˈbaɪsɪkl', us:'ˈbaɪsɪkl', vi:'xe đạp', pos:'danh từ' },
      { en:'poor', uk:'pʊə', us:'pʊr', vi:'nghèo', pos:'tính từ' },
      { en:'simple', uk:'ˈsɪmpl', us:'ˈsɪmpl', vi:'đơn giản', pos:'tính từ' },
      { en:'miss', uk:'mɪs', us:'mɪs', vi:'nhớ, tiếc', pos:'động từ' },
      { en:'grandparents', uk:'ˈɡrænpeərənts', us:'ˈɡrænperənts', vi:'ông bà', pos:'danh từ' }
    ],
    colloc:[
      { p:'when I was a child / back then', vi:'hồi tôi còn nhỏ / hồi đó', ex:'Back then, we did not have a fridge.' },
      { p:'things have changed a lot', vi:'mọi thứ đã thay đổi nhiều', ex:'Things have changed a lot since 2010.' },
      { p:'get used to + V-ing', vi:'dần quen với việc gì', ex:'It took me a month to get used to living alone.' }
    ],
    dialogue:[
      { sp:'Quan', en:'Did you use to live in the countryside?', vi:'Trước đây bà từng sống ở quê à?' },
      { sp:'Grandmother', en:'Yes, until I was twenty. We used to get water from a well.', vi:'Ừ, tới năm hai mươi tuổi. Hồi ấy bà lấy nước từ giếng.' },
      { sp:'Quan', en:'Was there electricity?', vi:'Có điện không ạ?' },
      { sp:'Grandmother', en:'Not at first. We would study by an oil lamp.', vi:'Ban đầu thì không. Bọn bà học dưới ngọn đèn dầu.' },
      { sp:'Quan', en:'Do you miss those days?', vi:'Bà có nhớ những ngày đó không?' },
      { sp:'Grandmother', en:'Sometimes. Life was simple, but it was hard.', vi:'Thỉnh thoảng. Cuộc sống đơn giản, nhưng vất vả.' },
      { sp:'Quan', en:'Are you used to city life now?', vi:'Giờ bà quen với cuộc sống thành phố chưa ạ?' },
      { sp:'Grandmother', en:'After forty years, yes. But I still wake up at five.', vi:'Sau bốn mươi năm thì quen rồi. Nhưng bà vẫn dậy lúc năm giờ.' }
    ],
    reading:{ en:'Quan’s grandmother grew up in a small village about eighty kilometres from Hanoi. There used to be rice fields on both sides of the road, and the family used to keep chickens behind the house. There was no electricity until she was fifteen, so in the evening the children would study by an oil lamp. She did not use to travel much: she went to the city for the first time when she was nineteen. Nowadays the village has a paved road, a school and internet, and the young people have moved away. She says she is used to Hanoi now, but she still misses the sound of the fields at night.',
      vi:'Bà của Quân lớn lên ở một ngôi làng nhỏ cách Hà Nội chừng tám mươi cây số. Hai bên đường ngày xưa là ruộng lúa, và gia đình nuôi gà sau nhà. Mãi tới năm bà mười lăm tuổi mới có điện, nên buổi tối bọn trẻ học dưới ngọn đèn dầu. Hồi ấy bà ít đi đâu: lần đầu lên thành phố là năm mười chín tuổi. Ngày nay làng đã có đường bê tông, trường học và internet, còn người trẻ thì đi hết. Bà bảo giờ đã quen Hà Nội, nhưng vẫn nhớ tiếng đồng ruộng ban đêm.' } },

  { level:'a2', no:12, en:'If I had more time…', vi:'Câu điều kiện loại 2', skill:'Nói về giả định',
    grammar:[
      { form:'If + quá khứ đơn, would + V', vi:'Tình huống không có thật hoặc rất khó xảy ra ở hiện tại.', note:'Không dùng would trong mệnh đề if.', ex:{ en:'If I had more time, I would learn the piano.', vi:'Nếu có thêm thời gian, tôi sẽ học piano.' } },
      { form:'If I were you…', vi:'Với «be» ở điều kiện loại 2, dùng «were» cho mọi ngôi.', note:'Đây là mẫu đưa lời khuyên tự nhiên nhất trong tiếng Anh.', ex:{ en:'If I were you, I would take the job.', vi:'Nếu tôi là bạn, tôi sẽ nhận việc đó.' } },
      { form:'could / might trong mệnh đề chính', vi:'would = chắc chắn sẽ · could = có thể · might = có lẽ.', note:'If we left now, we might catch the last bus.', ex:{ en:'If she studied harder, she could pass easily.', vi:'Nếu chăm hơn, cô ấy có thể đỗ dễ dàng.' } },
      { form:'I wish + quá khứ đơn', vi:'Ước điều trái với hiện tại.', note:'I wish I knew = tôi ước mình biết (thực tế là không biết).', ex:{ en:'I wish I lived closer to the centre.', vi:'Ước gì tôi sống gần trung tâm hơn.' } }
    ],
    vocab:[
      { en:'wish', uk:'wɪʃ', us:'wɪʃ', vi:'ước', pos:'động từ' },
      { en:'imagine', uk:'ɪˈmædʒɪn', us:'ɪˈmædʒɪn', vi:'tưởng tượng', pos:'động từ' },
      { en:'choice', uk:'tʃɔɪs', us:'tʃɔɪs', vi:'lựa chọn', pos:'danh từ' },
      { en:'opportunity', uk:'ˌɒpəˈtjuːnəti', us:'ˌɑːpərˈtuːnəti', vi:'cơ hội', pos:'danh từ' },
      { en:'situation', uk:'ˌsɪtʃuˈeɪʃn', us:'ˌsɪtʃuˈeɪʃn', vi:'tình huống', pos:'danh từ' },
      { en:'advice', uk:'ədˈvaɪs', us:'ədˈvaɪs', vi:'lời khuyên', pos:'danh từ' },
      { en:'decision', uk:'dɪˈsɪʒn', us:'dɪˈsɪʒn', vi:'quyết định', pos:'danh từ' },
      { en:'afford', uk:'əˈfɔːd', us:'əˈfɔːrd', vi:'đủ tiền mua', pos:'động từ', note:'can afford to do' },
      { en:'borrow', uk:'ˈbɒrəʊ', us:'ˈbɑːroʊ', vi:'mượn', pos:'động từ' },
      { en:'lend', uk:'lend', us:'lend', vi:'cho mượn', pos:'động từ', note:'lent — lent' },
      { en:'earn', uk:'ɜːn', us:'ɜːrn', vi:'kiếm (tiền)', pos:'động từ' },
      { en:'spend', uk:'spend', us:'spend', vi:'tiêu; dành (thời gian)', pos:'động từ', note:'spent — spent' },
      { en:'invest', uk:'ɪnˈvest', us:'ɪnˈvest', vi:'đầu tư', pos:'động từ' },
      { en:'regret', uk:'rɪˈɡret', us:'rɪˈɡret', vi:'hối tiếc', pos:'động từ' },
      { en:'worry', uk:'ˈwʌri', us:'ˈwɜːri', vi:'lo lắng', pos:'động từ', note:'worry ABOUT' },
      { en:'dream', uk:'driːm', us:'driːm', vi:'mơ ước', pos:'danh từ, động từ' },
      { en:'freedom', uk:'ˈfriːdəm', us:'ˈfriːdəm', vi:'tự do', pos:'danh từ' },
      { en:'salary', uk:'ˈsæləri', us:'ˈsæləri', vi:'lương', pos:'danh từ' },
      { en:'abroad', uk:'əˈbrɔːd', us:'əˈbrɔːd', vi:'ở nước ngoài', pos:'trạng từ' },
      { en:'possible', uk:'ˈpɒsəbl', us:'ˈpɑːsəbl', vi:'khả thi', pos:'tính từ' }
    ],
    colloc:[
      { p:'If I were you, I would…', vi:'Nếu tôi là bạn, tôi sẽ… — mẫu khuyên nhủ chuẩn', ex:'If I were you, I would ask for more time.' },
      { p:'can afford to do something', vi:'đủ khả năng tài chính để làm gì', ex:'We cannot afford to move now.' },
      { p:'borrow from / lend to', vi:'mượn của ai / cho ai mượn — hai chiều ngược nhau', ex:'I borrowed it from Linh; she lent it to me.' }
    ],
    dialogue:[
      { sp:'Quan', en:'They offered me the job, but the salary is low.', vi:'Họ mời tớ vào làm, nhưng lương thấp.' },
      { sp:'Linh', en:'If I were you, I would ask about training.', vi:'Nếu là tớ, tớ sẽ hỏi về chế độ đào tạo.' },
      { sp:'Quan', en:'If they paid more, I would say yes immediately.', vi:'Nếu họ trả cao hơn, tớ nhận ngay.' },
      { sp:'Linh', en:'What would you do if they refused?', vi:'Nếu họ từ chối thì bạn sẽ làm gì?' },
      { sp:'Quan', en:'I might keep looking. But I wish I had more experience.', vi:'Chắc tớ tìm tiếp. Nhưng ước gì tớ có nhiều kinh nghiệm hơn.' },
      { sp:'Linh', en:'Everyone starts somewhere. If you waited for the perfect job, you would wait forever.', vi:'Ai chẳng phải bắt đầu từ đâu đó. Nếu cứ đợi công việc hoàn hảo, bạn sẽ đợi mãi.' }
    ],
    reading:{ en:'Quan often thinks about what he would do if his situation were different. If he had more money, he would study abroad next year instead of working. If he lived closer to the centre, he would not spend two hours a day travelling. He sometimes wishes he had started learning English earlier, because then he could apply for international programmes now. But he also knows that if everything were easy, he would probably not try so hard. His mother says that if he keeps working like this, the opportunities will come.',
      vi:'Quân hay nghĩ nếu hoàn cảnh khác đi thì cậu sẽ làm gì. Nếu có nhiều tiền hơn, năm sau cậu sẽ đi du học thay vì đi làm. Nếu sống gần trung tâm hơn, cậu đã không mất hai tiếng mỗi ngày để đi lại. Đôi khi cậu ước mình bắt đầu học tiếng Anh sớm hơn, vì như thế giờ đã nộp được vào các chương trình quốc tế. Nhưng cậu cũng biết nếu mọi thứ dễ dàng, có lẽ cậu đã không cố gắng đến vậy. Mẹ cậu bảo nếu cứ chăm chỉ thế này, cơ hội sẽ tới.' } },

  { level:'a2', no:13, en:'At work', vi:'Nghề nghiệp và nơi làm việc', skill:'Giao tiếp công sở',
    grammar:[
      { form:'Câu hỏi về công việc', vi:'What do you do? (nghề gì) · What are you working on? (đang làm việc gì) · Who do you work for? (làm cho ai).', note:'«What is your job?» đúng ngữ pháp nhưng nghe cứng hơn «What do you do?».', ex:{ en:'What do you do for a living?', vi:'Bạn làm nghề gì để sống?' } },
      { form:'Email công việc: mở và kết', vi:'Dear Mr/Ms + họ … Best regards · Dear Sir or Madam … Yours faithfully.', note:'Biết tên thì kết bằng «Yours sincerely»; không biết tên thì «Yours faithfully» (kiểu Anh).', ex:{ en:'Dear Ms Ha, I am writing to confirm our meeting.', vi:'Kính gửi chị Hà, tôi viết thư để xác nhận cuộc họp.' } },
      { form:'Lời đề nghị và yêu cầu lịch sự', vi:'Could you possibly…? · Would you mind + V-ing? · I was wondering if you could…', note:'Would you mind opening the window? — trả lời «No, not at all» nghĩa là đồng ý.', ex:{ en:'Would you mind sending me the file?', vi:'Bạn gửi giúp tôi tệp đó được không?' } },
      { form:'Từ nối trong văn viết', vi:'however, therefore, in addition, for example, on the other hand.', note:'Sau however luôn có dấu phẩy khi đứng đầu câu.', ex:{ en:'The plan is good; however, it is expensive.', vi:'Kế hoạch hay; tuy nhiên nó tốn kém.' } }
    ],
    vocab:[
      { en:'colleague', uk:'ˈkɒliːɡ', us:'ˈkɑːliːɡ', vi:'đồng nghiệp', pos:'danh từ' },
      { en:'employee', uk:'ɪmˈplɔɪiː', us:'ɪmˈplɔɪiː', vi:'nhân viên', pos:'danh từ' },
      { en:'employer', uk:'ɪmˈplɔɪə', us:'ɪmˈplɔɪər', vi:'người sử dụng lao động', pos:'danh từ' },
      { en:'staff', uk:'stɑːf', us:'stæf', vi:'nhân sự, đội ngũ', pos:'danh từ', note:'số nhiều tập hợp' },
      { en:'department', uk:'dɪˈpɑːtmənt', us:'dɪˈpɑːrtmənt', vi:'phòng ban', pos:'danh từ' },
      { en:'meeting', uk:'ˈmiːtɪŋ', us:'ˈmiːtɪŋ', vi:'cuộc họp', pos:'danh từ' },
      { en:'deadline', uk:'ˈdedlaɪn', us:'ˈdedlaɪn', vi:'hạn chót', pos:'danh từ' },
      { en:'project', uk:'ˈprɒdʒekt', us:'ˈprɑːdʒekt', vi:'dự án', pos:'danh từ' },
      { en:'report', uk:'rɪˈpɔːt', us:'rɪˈpɔːrt', vi:'báo cáo', pos:'danh từ, động từ' },
      { en:'schedule', uk:'ˈʃedjuːl', us:'ˈskedʒuːl', vi:'lịch trình', pos:'danh từ', note:'Anh và Mỹ đọc khác hẳn nhau' },
      { en:'overtime', uk:'ˈəʊvətaɪm', us:'ˈoʊvərtaɪm', vi:'làm thêm giờ', pos:'danh từ' },
      { en:'promotion', uk:'prəˈməʊʃn', us:'prəˈmoʊʃn', vi:'thăng chức', pos:'danh từ' },
      { en:'contract', uk:'ˈkɒntrækt', us:'ˈkɑːntrækt', vi:'hợp đồng', pos:'danh từ' },
      { en:'interview', uk:'ˈɪntəvjuː', us:'ˈɪntərvjuː', vi:'phỏng vấn', pos:'danh từ' },
      { en:'skill', uk:'skɪl', us:'skɪl', vi:'kỹ năng', pos:'danh từ' },
      { en:'experience', uk:'ɪkˈspɪəriəns', us:'ɪkˈspɪriəns', vi:'kinh nghiệm', pos:'danh từ' },
      { en:'responsible', uk:'rɪˈspɒnsəbl', us:'rɪˈspɑːnsəbl', vi:'chịu trách nhiệm', pos:'tính từ', note:'responsible FOR' },
      { en:'reliable', uk:'rɪˈlaɪəbl', us:'rɪˈlaɪəbl', vi:'đáng tin cậy', pos:'tính từ' },
      { en:'confirm', uk:'kənˈfɜːm', us:'kənˈfɜːrm', vi:'xác nhận', pos:'động từ' },
      { en:'attach', uk:'əˈtætʃ', us:'əˈtætʃ', vi:'đính kèm', pos:'động từ' }
    ],
    colloc:[
      { p:'meet a deadline / miss a deadline', vi:'kịp hạn / trễ hạn', ex:'We met the deadline by two hours.' },
      { p:'be responsible for + V-ing', vi:'chịu trách nhiệm về việc gì', ex:'She is responsible for training new staff.' },
      { p:'Please find attached…', vi:'Vui lòng xem tệp đính kèm — mẫu email chuẩn', ex:'Please find attached my CV and cover letter.' }
    ],
    dialogue:[
      { sp:'Ms Ha', en:'Welcome, Quan. Let me introduce the team.', vi:'Chào mừng Quân. Để tôi giới thiệu đội nhóm.' },
      { sp:'Quan', en:'Thank you. What am I responsible for?', vi:'Cảm ơn chị. Em phụ trách phần nào ạ?' },
      { sp:'Ms Ha', en:'You will work on the website project with Nam.', vi:'Em sẽ làm dự án website cùng Nam.' },
      { sp:'Quan', en:'When is the deadline?', vi:'Hạn chót khi nào ạ?' },
      { sp:'Ms Ha', en:'The first version is due on the fifteenth.', vi:'Bản đầu tiên phải xong ngày mười lăm.' },
      { sp:'Quan', en:'Would you mind sending me the old report?', vi:'Chị gửi giúp em bản báo cáo cũ được không ạ?' },
      { sp:'Ms Ha', en:'Not at all. I will attach it to an email this afternoon.', vi:'Không vấn đề gì. Chiều nay chị đính kèm vào email cho em.' }
    ],
    reading:{ en:'Dear Ms Ha,\n\nThank you for the interview last Thursday. I am writing to confirm that I would like to accept the position of junior developer. As we discussed, I can start on the first of July, after my final exams.\n\nPlease find attached the documents you asked for. If you need anything else, do not hesitate to contact me. I am looking forward to working with the team.\n\nBest regards,\nQuan',
      vi:'Kính gửi chị Hà,\n\nCảm ơn chị đã phỏng vấn em thứ Năm tuần trước. Em viết thư để xác nhận rằng em muốn nhận vị trí lập trình viên tập sự. Như đã trao đổi, em có thể bắt đầu từ ngày một tháng Bảy, sau kỳ thi cuối.\n\nEm gửi kèm các giấy tờ chị yêu cầu. Nếu cần thêm gì, chị cứ liên hệ với em. Em rất mong được làm việc cùng cả nhóm.\n\nTrân trọng,\nQuân' } },

  { level:'a2', no:14, en:'Technology in daily life', vi:'Công nghệ và internet', skill:'Bàn về công nghệ',
    grammar:[
      { form:'Từ ghép công nghệ', vi:'smartphone, laptop, password, download, upload, username, software.', note:'Phần lớn là danh từ ghép, nhấn vào phần đầu: PASSword, DOWNload.', ex:{ en:'I forgot my password again.', vi:'Tôi lại quên mật khẩu.' } },
      { form:'Động từ + giới từ trong công nghệ', vi:'log in to, sign up for, connect to, click on, search for, turn on/off.', note:'log in (viết rời, động từ) ≠ login (viết liền, danh từ).', ex:{ en:'You have to sign up for an account first.', vi:'Bạn phải đăng ký tài khoản trước.' } },
      { form:'So sánh lợi và hại', vi:'One advantage is that… · The main disadvantage is that… · On the one hand… on the other hand…', note:'Đây là bộ khung của bài IELTS Writing Task 2 dạng «advantages and disadvantages».', ex:{ en:'One advantage of online learning is that it saves time.', vi:'Một lợi ích của học trực tuyến là tiết kiệm thời gian.' } },
      { form:'make / let / allow someone do', vi:'make + V nguyên · let + V nguyên · allow + to + V.', note:'The app lets you save articles = The app allows you to save articles.', ex:{ en:'This app lets you learn offline.', vi:'Ứng dụng này cho phép bạn học ngoại tuyến.' } }
    ],
    vocab:[
      { en:'device', uk:'dɪˈvaɪs', us:'dɪˈvaɪs', vi:'thiết bị', pos:'danh từ' },
      { en:'screen', uk:'skriːn', us:'skriːn', vi:'màn hình', pos:'danh từ' },
      { en:'battery', uk:'ˈbætri', us:'ˈbætəri', vi:'pin', pos:'danh từ' },
      { en:'charger', uk:'ˈtʃɑːdʒə', us:'ˈtʃɑːrdʒər', vi:'củ sạc', pos:'danh từ' },
      { en:'password', uk:'ˈpɑːswɜːd', us:'ˈpæswɜːrd', vi:'mật khẩu', pos:'danh từ' },
      { en:'account', uk:'əˈkaʊnt', us:'əˈkaʊnt', vi:'tài khoản', pos:'danh từ' },
      { en:'download', uk:'ˌdaʊnˈləʊd', us:'ˈdaʊnloʊd', vi:'tải xuống', pos:'động từ' },
      { en:'upload', uk:'ˌʌpˈləʊd', us:'ˈʌploʊd', vi:'tải lên', pos:'động từ' },
      { en:'app', uk:'æp', us:'æp', vi:'ứng dụng', pos:'danh từ' },
      { en:'software', uk:'ˈsɒftweə', us:'ˈsɔːftwer', vi:'phần mềm', pos:'danh từ', note:'không đếm được' },
      { en:'network', uk:'ˈnetwɜːk', us:'ˈnetwɜːrk', vi:'mạng lưới', pos:'danh từ' },
      { en:'search', uk:'sɜːtʃ', us:'sɜːrtʃ', vi:'tìm kiếm', pos:'động từ', note:'search FOR something' },
      { en:'share', uk:'ʃeə', us:'ʃer', vi:'chia sẻ', pos:'động từ' },
      { en:'delete', uk:'dɪˈliːt', us:'dɪˈliːt', vi:'xoá', pos:'động từ' },
      { en:'update', uk:'ˌʌpˈdeɪt', us:'ˌʌpˈdeɪt', vi:'cập nhật', pos:'động từ' },
      { en:'advantage', uk:'ədˈvɑːntɪdʒ', us:'ədˈvæntɪdʒ', vi:'lợi thế', pos:'danh từ' },
      { en:'disadvantage', uk:'ˌdɪsədˈvɑːntɪdʒ', us:'ˌdɪsədˈvæntɪdʒ', vi:'bất lợi', pos:'danh từ' },
      { en:'convenient', uk:'kənˈviːniənt', us:'kənˈviːniənt', vi:'tiện lợi', pos:'tính từ' },
      { en:'addicted', uk:'əˈdɪktɪd', us:'əˈdɪktɪd', vi:'nghiện', pos:'tính từ', note:'addicted TO' },
      { en:'privacy', uk:'ˈprɪvəsi', us:'ˈpraɪvəsi', vi:'quyền riêng tư', pos:'danh từ', note:'Anh và Mỹ đọc khác nhau' }
    ],
    colloc:[
      { p:'run out of battery', vi:'hết pin', ex:'My phone ran out of battery on the bus.' },
      { p:'be addicted to your phone', vi:'nghiện điện thoại', ex:'A lot of students are addicted to their phones.' },
      { p:'in my view / from my point of view', vi:'theo quan điểm của tôi — cụm thay cho «in my opinion» trong bài viết', ex:'From my point of view, the benefits outweigh the risks.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Have you tried that new study app?', vi:'Bạn thử ứng dụng học mới chưa?' },
      { sp:'Quan', en:'Yes. It lets you download lessons and study offline.', vi:'Rồi. Nó cho phép tải bài về và học ngoại tuyến.' },
      { sp:'Linh', en:'Do you have to pay?', vi:'Có phải trả tiền không?' },
      { sp:'Quan', en:'You sign up for free, but the tests cost money.', vi:'Đăng ký thì miễn phí, nhưng làm đề thì mất tiền.' },
      { sp:'Linh', en:'What is the main disadvantage?', vi:'Nhược điểm chính là gì?' },
      { sp:'Quan', en:'It asks for too much personal information.', vi:'Nó hỏi quá nhiều thông tin cá nhân.' },
      { sp:'Linh', en:'That is a privacy problem. I would use a different email.', vi:'Đó là vấn đề riêng tư. Nếu là tớ, tớ sẽ dùng email khác.' }
    ],
    reading:{ en:'Ten years ago most students in Quan’s university used paper notebooks. Nowadays almost everybody takes notes on a laptop or a tablet. On the one hand, this is convenient: files can be shared in seconds, and nothing is lost if you forget your bag. On the other hand, many students admit that they are addicted to their devices and that they check social media during class. Some teachers have started asking students to turn off their screens for the first twenty minutes. Quan says the rule is annoying, but he remembers more when he writes by hand.',
      vi:'Mười năm trước, phần lớn sinh viên trường Quân dùng vở giấy. Ngày nay gần như ai cũng ghi chép trên laptop hoặc máy tính bảng. Một mặt, điều này rất tiện: tệp chia sẻ trong vài giây, và không mất gì nếu quên cặp. Mặt khác, nhiều sinh viên thừa nhận họ nghiện thiết bị và hay lướt mạng xã hội trong giờ. Một số thầy cô bắt đầu yêu cầu sinh viên tắt màn hình trong hai mươi phút đầu. Quân bảo quy định đó khó chịu, nhưng cậu nhớ bài hơn khi viết tay.' } },

  { level:'a2', no:15, en:'Travel and holidays', vi:'Du lịch và kỳ nghỉ', skill:'Kể chuyến đi',
    grammar:[
      { form:'Ôn: hoàn thành và quá khứ đơn khi kể chuyến đi', vi:'Mở đầu bằng hoàn thành (I have been to…), kể chi tiết bằng quá khứ đơn.', note:'Đây là cách kể tự nhiên nhất trong IELTS Speaking Part 2.', ex:{ en:'I have been to Sapa twice. Last time I went in December.', vi:'Tôi tới Sa Pa hai lần rồi. Lần gần nhất là tháng Mười hai.' } },
      { form:'Tính từ đuôi -ed và -ing', vi:'-ed tả cảm giác của người · -ing tả tính chất của vật, việc.', note:'I was excited because the trip was exciting.', ex:{ en:'The journey was tiring and I was exhausted.', vi:'Chuyến đi mệt và tôi kiệt sức.' } },
      { form:'Giới từ đi với du lịch', vi:'go on holiday, go by plane, arrive in a city, arrive at the airport, stay at a hotel, travel around.', note:'arrive IN + thành phố, nước · arrive AT + địa điểm cụ thể.', ex:{ en:'We arrived in Da Lat at midnight.', vi:'Chúng tôi tới Đà Lạt lúc nửa đêm.' } },
      { form:'Kể chuyện có cao trào', vi:'First… Then… After that… Unfortunately… In the end…', note:'Một câu «Unfortunately» hoặc «Suddenly» làm câu chuyện hấp dẫn hơn hẳn.', ex:{ en:'Unfortunately, we missed the last bus.', vi:'Không may là chúng tôi lỡ chuyến xe cuối.' } }
    ],
    vocab:[
      { en:'journey', uk:'ˈdʒɜːni', us:'ˈdʒɜːrni', vi:'hành trình', pos:'danh từ' },
      { en:'trip', uk:'trɪp', us:'trɪp', vi:'chuyến đi ngắn', pos:'danh từ' },
      { en:'tour', uk:'tʊə', us:'tʊr', vi:'tour, chuyến tham quan', pos:'danh từ' },
      { en:'luggage', uk:'ˈlʌɡɪdʒ', us:'ˈlʌɡɪdʒ', vi:'hành lý', pos:'danh từ' },
      { en:'suitcase', uk:'ˈsuːtkeɪs', us:'ˈsuːtkeɪs', vi:'va li', pos:'danh từ' },
      { en:'departure', uk:'dɪˈpɑːtʃə', us:'dɪˈpɑːrtʃər', vi:'sự khởi hành', pos:'danh từ' },
      { en:'arrival', uk:'əˈraɪvl', us:'əˈraɪvl', vi:'sự đến nơi', pos:'danh từ' },
      { en:'delay', uk:'dɪˈleɪ', us:'dɪˈleɪ', vi:'sự chậm trễ', pos:'danh từ' },
      { en:'guide', uk:'ɡaɪd', us:'ɡaɪd', vi:'hướng dẫn viên', pos:'danh từ' },
      { en:'sightseeing', uk:'ˈsaɪtsiːɪŋ', us:'ˈsaɪtsiːɪŋ', vi:'tham quan', pos:'danh từ' },
      { en:'souvenir', uk:'ˌsuːvəˈnɪə', us:'ˌsuːvəˈnɪr', vi:'quà lưu niệm', pos:'danh từ' },
      { en:'accommodation', uk:'əˌkɒməˈdeɪʃn', us:'əˌkɑːməˈdeɪʃn', vi:'chỗ ở', pos:'danh từ', note:'Anh không đếm được' },
      { en:'view', uk:'vjuː', us:'vjuː', vi:'quang cảnh', pos:'danh từ' },
      { en:'mountain', uk:'ˈmaʊntɪn', us:'ˈmaʊntn', vi:'núi', pos:'danh từ' },
      { en:'valley', uk:'ˈvæli', us:'ˈvæli', vi:'thung lũng', pos:'danh từ' },
      { en:'exhausted', uk:'ɪɡˈzɔːstɪd', us:'ɪɡˈzɔːstɪd', vi:'kiệt sức', pos:'tính từ' },
      { en:'relaxing', uk:'rɪˈlæksɪŋ', us:'rɪˈlæksɪŋ', vi:'thư giãn (gây thư giãn)', pos:'tính từ' },
      { en:'crowded', uk:'ˈkraʊdɪd', us:'ˈkraʊdɪd', vi:'đông đúc', pos:'tính từ' },
      { en:'unforgettable', uk:'ˌʌnfəˈɡetəbl', us:'ˌʌnfərˈɡetəbl', vi:'khó quên', pos:'tính từ' },
      { en:'book', uk:'bʊk', us:'bʊk', vi:'đặt chỗ', pos:'động từ' }
    ],
    colloc:[
      { p:'go on holiday / go on a trip', vi:'đi nghỉ / đi một chuyến — dùng «on», không dùng «to»', ex:'We go on holiday every August.' },
      { p:'take photos / do some sightseeing', vi:'chụp ảnh / đi tham quan', ex:'We did some sightseeing in the morning.' },
      { p:'a once-in-a-lifetime experience', vi:'trải nghiệm cả đời chỉ có một lần', ex:'Seeing the sunrise there was a once-in-a-lifetime experience.' }
    ],
    dialogue:[
      { sp:'Linh', en:'How was your trip to Sapa?', vi:'Chuyến đi Sa Pa của bạn thế nào?' },
      { sp:'Quan', en:'Unforgettable, but the journey was tiring.', vi:'Khó quên lắm, nhưng đường đi mệt.' },
      { sp:'Linh', en:'How long did it take?', vi:'Đi mất bao lâu?' },
      { sp:'Quan', en:'Six hours by bus, and there was a two-hour delay.', vi:'Sáu tiếng xe khách, lại còn trễ hai tiếng nữa.' },
      { sp:'Linh', en:'Where did you stay?', vi:'Bạn ở đâu?' },
      { sp:'Quan', en:'At a small homestay with an amazing view of the valley.', vi:'Ở một homestay nhỏ nhìn ra thung lũng cực đẹp.' },
      { sp:'Linh', en:'Was it crowded?', vi:'Có đông không?' },
      { sp:'Quan', en:'The town was, but the paths were quiet and relaxing.', vi:'Thị trấn thì đông, nhưng các con đường mòn yên tĩnh và thư thái.' }
    ],
    reading:{ en:'Last December Quan and three friends went to Sapa for four days. They booked a night bus because it was cheaper, but it arrived two hours late and everybody was exhausted. On the first morning the weather was terrible: there was so much fog that they could not see the mountains at all. They did some sightseeing in the town instead and bought souvenirs. Fortunately, on the second day the sky cleared. They walked down into the valley, took hundreds of photographs and had lunch with a local family. Quan says it was one of the best trips of his life, although he would never take a night bus again.',
      vi:'Tháng Mười hai năm ngoái, Quân cùng ba người bạn đi Sa Pa bốn ngày. Họ đặt xe giường nằm ban đêm vì rẻ hơn, nhưng xe tới trễ hai tiếng và ai cũng kiệt sức. Sáng đầu tiên thời tiết tệ: sương mù dày đến mức không nhìn thấy núi. Thay vào đó họ đi loanh quanh thị trấn và mua quà lưu niệm. May thay, ngày thứ hai trời quang. Họ đi bộ xuống thung lũng, chụp hàng trăm bức ảnh và ăn trưa cùng một gia đình bản địa. Quân bảo đó là một trong những chuyến đi đẹp nhất đời cậu, dù cậu sẽ không bao giờ đi xe đêm nữa.' } },

  { level:'a2', no:16, en:'Nature and the environment', vi:'Thiên nhiên và môi trường', skill:'Nêu vấn đề, đề xuất',
    grammar:[
      { form:'Nguyên nhân và kết quả', vi:'because of + danh từ · due to + danh từ · so / therefore + mệnh đề.', note:'because + mệnh đề · because of + danh từ. Đây là lỗi rất hay gặp.', ex:{ en:'The river is dirty because of the factories.', vi:'Con sông bẩn vì các nhà máy.' } },
      { form:'should / ought to / had better', vi:'Đề xuất giải pháp với mức độ mạnh dần.', note:'had better mang ý cảnh báo: You had better hurry (nếu không thì hỏng).', ex:{ en:'We should use less plastic.', vi:'Chúng ta nên dùng ít nhựa hơn.' } },
      { form:'more / less / fewer', vi:'more cho cả hai · less + không đếm được · fewer + đếm được.', note:'less plastic nhưng fewer bottles.', ex:{ en:'We need fewer cars and less pollution.', vi:'Chúng ta cần ít xe hơn và ít ô nhiễm hơn.' } },
      { form:'Cấu trúc nêu vấn đề trong bài viết', vi:'One of the biggest problems is… · A possible solution is to… · If we do not act, …', note:'Bộ khung này dùng thẳng được cho IELTS Writing Task 2 dạng «problem and solution».', ex:{ en:'A possible solution is to improve public transport.', vi:'Một giải pháp khả thi là cải thiện giao thông công cộng.' } }
    ],
    vocab:[
      { en:'environment', uk:'ɪnˈvaɪrənmənt', us:'ɪnˈvaɪrənmənt', vi:'môi trường', pos:'danh từ' },
      { en:'nature', uk:'ˈneɪtʃə', us:'ˈneɪtʃər', vi:'thiên nhiên', pos:'danh từ' },
      { en:'climate', uk:'ˈklaɪmət', us:'ˈklaɪmət', vi:'khí hậu', pos:'danh từ' },
      { en:'pollution', uk:'pəˈluːʃn', us:'pəˈluːʃn', vi:'ô nhiễm', pos:'danh từ' },
      { en:'plastic', uk:'ˈplæstɪk', us:'ˈplæstɪk', vi:'nhựa', pos:'danh từ' },
      { en:'waste', uk:'weɪst', us:'weɪst', vi:'rác thải; lãng phí', pos:'danh từ, động từ' },
      { en:'recycle', uk:'ˌriːˈsaɪkl', us:'ˌriːˈsaɪkl', vi:'tái chế', pos:'động từ' },
      { en:'energy', uk:'ˈenədʒi', us:'ˈenərdʒi', vi:'năng lượng', pos:'danh từ' },
      { en:'forest', uk:'ˈfɒrɪst', us:'ˈfɔːrɪst', vi:'rừng', pos:'danh từ' },
      { en:'wildlife', uk:'ˈwaɪldlaɪf', us:'ˈwaɪldlaɪf', vi:'động vật hoang dã', pos:'danh từ' },
      { en:'species', uk:'ˈspiːʃiːz', us:'ˈspiːʃiːz', vi:'loài', pos:'danh từ', note:'số ít và số nhiều viết như nhau' },
      { en:'protect', uk:'prəˈtekt', us:'prəˈtekt', vi:'bảo vệ', pos:'động từ' },
      { en:'damage', uk:'ˈdæmɪdʒ', us:'ˈdæmɪdʒ', vi:'gây hại; thiệt hại', pos:'động từ, danh từ' },
      { en:'destroy', uk:'dɪˈstrɔɪ', us:'dɪˈstrɔɪ', vi:'phá huỷ', pos:'động từ' },
      { en:'disappear', uk:'ˌdɪsəˈpɪə', us:'ˌdɪsəˈpɪr', vi:'biến mất', pos:'động từ' },
      { en:'solution', uk:'səˈluːʃn', us:'səˈluːʃn', vi:'giải pháp', pos:'danh từ' },
      { en:'government', uk:'ˈɡʌvənmənt', us:'ˈɡʌvərnmənt', vi:'chính phủ', pos:'danh từ' },
      { en:'campaign', uk:'kæmˈpeɪn', us:'kæmˈpeɪn', vi:'chiến dịch', pos:'danh từ', note:'g câm' },
      { en:'serious', uk:'ˈsɪəriəs', us:'ˈsɪriəs', vi:'nghiêm trọng', pos:'tính từ' },
      { en:'responsible', uk:'rɪˈspɒnsəbl', us:'rɪˈspɑːnsəbl', vi:'có trách nhiệm', pos:'tính từ' }
    ],
    colloc:[
      { p:'do harm to / be harmful to', vi:'gây hại cho', ex:'Plastic bags are harmful to sea animals.' },
      { p:'raise awareness of something', vi:'nâng cao nhận thức về vấn đề gì', ex:'The campaign raised awareness of air pollution.' },
      { p:'cut down on something', vi:'cắt giảm cái gì', ex:'We should cut down on single-use plastic.' }
    ],
    dialogue:[
      { sp:'Teacher', en:'What is the biggest environmental problem in your city?', vi:'Vấn đề môi trường lớn nhất ở thành phố em là gì?' },
      { sp:'Quan', en:'Air pollution, mainly because of the traffic.', vi:'Ô nhiễm không khí, chủ yếu do giao thông ạ.' },
      { sp:'Teacher', en:'What could the government do?', vi:'Chính quyền có thể làm gì?' },
      { sp:'Quan', en:'They should improve public transport and plant more trees.', vi:'Họ nên cải thiện giao thông công cộng và trồng thêm cây.' },
      { sp:'Teacher', en:'And what can individuals do?', vi:'Còn từng cá nhân thì sao?' },
      { sp:'Quan', en:'We can cut down on plastic and recycle more.', vi:'Chúng ta có thể giảm dùng nhựa và tái chế nhiều hơn.' },
      { sp:'Teacher', en:'Do you think small actions really matter?', vi:'Em có nghĩ những hành động nhỏ thật sự có ý nghĩa không?' },
      { sp:'Quan', en:'Yes. If everybody used one bag less a day, it would be millions of bags.', vi:'Có ạ. Nếu mỗi người dùng ít đi một cái túi mỗi ngày, sẽ là hàng triệu cái túi.' }
    ],
    reading:{ en:'One of the biggest problems in Vietnamese cities is air pollution. On bad days the air quality index in Hanoi is among the worst in the world, mainly because of traffic, construction and factories outside the city. The problem is serious for children and old people, and hospitals report more cases of breathing illnesses in winter. A possible solution is to improve public transport so that fewer people use motorbikes, but this takes years. In the meantime, many schools have started campaigns to raise awareness, and some families have bought air filters. If nothing is done, the situation will get worse.',
      vi:'Một trong những vấn đề lớn nhất ở các thành phố Việt Nam là ô nhiễm không khí. Vào những ngày xấu, chỉ số chất lượng không khí ở Hà Nội thuộc hàng tệ nhất thế giới, chủ yếu do giao thông, xây dựng và các nhà máy ngoại thành. Vấn đề này nghiêm trọng với trẻ em và người già, các bệnh viện ghi nhận nhiều ca bệnh hô hấp hơn vào mùa đông. Một giải pháp khả thi là cải thiện giao thông công cộng để ít người đi xe máy hơn, nhưng việc này mất nhiều năm. Trong lúc đó, nhiều trường học đã mở chiến dịch nâng cao nhận thức, và một số gia đình mua máy lọc không khí. Nếu không làm gì, tình hình sẽ tệ hơn.' } },

  { level:'a2', no:17, en:'Education and studying', vi:'Học hành và thi cử', skill:'Nói về việc học',
    grammar:[
      { form:'Câu hỏi gián tiếp', vi:'Do you know…? · Could you tell me…? — bên trong là trật tự câu kể.', note:'Could you tell me where the office is? — không đảo «where is the office».', ex:{ en:'Do you know when the results come out?', vi:'Bạn có biết khi nào có kết quả không?' } },
      { form:'so / such … that', vi:'so + tính từ + that · such a + tính từ + danh từ + that.', note:'The test was so hard that half the class failed.', ex:{ en:'It was such a difficult question that nobody answered.', vi:'Câu hỏi khó đến mức không ai trả lời được.' } },
      { form:'Cấu trúc mục đích', vi:'to + V · in order to + V · so that + mệnh đề.', note:'so that đi với mệnh đề có chủ ngữ riêng: I left early so that I could catch the bus.', ex:{ en:'She studies at night in order to finish her degree.', vi:'Cô ấy học buổi tối để hoàn thành tấm bằng.' } },
      { form:'Từ vựng thi cử: take / pass / fail / retake', vi:'take an exam = đi thi · pass = đỗ · fail = trượt · retake = thi lại.', note:'«take an exam» KHÔNG có nghĩa là đỗ — đây là lỗi dịch từ tiếng Việt.', ex:{ en:'He took the test twice and passed the second time.', vi:'Cậu ấy thi hai lần và đỗ ở lần thứ hai.' } }
    ],
    vocab:[
      { en:'subject', uk:'ˈsʌbdʒɪkt', us:'ˈsʌbdʒɪkt', vi:'môn học', pos:'danh từ' },
      { en:'lecture', uk:'ˈlektʃə', us:'ˈlektʃər', vi:'bài giảng', pos:'danh từ' },
      { en:'seminar', uk:'ˈsemɪnɑː', us:'ˈsemɪnɑːr', vi:'buổi thảo luận', pos:'danh từ' },
      { en:'assignment', uk:'əˈsaɪnmənt', us:'əˈsaɪnmənt', vi:'bài tập lớn', pos:'danh từ' },
      { en:'essay', uk:'ˈeseɪ', us:'ˈeseɪ', vi:'bài luận', pos:'danh từ' },
      { en:'research', uk:'rɪˈsɜːtʃ', us:'ˈriːsɜːrtʃ', vi:'nghiên cứu', pos:'danh từ', note:'không đếm được' },
      { en:'note', uk:'nəʊt', us:'noʊt', vi:'ghi chú', pos:'danh từ' },
      { en:'revise', uk:'rɪˈvaɪz', us:'rɪˈvaɪz', vi:'ôn tập (Anh)', pos:'động từ', note:'Mỹ: review' },
      { en:'memorise', uk:'ˈmeməraɪz', us:'ˈmeməraɪz', vi:'học thuộc', pos:'động từ' },
      { en:'concentrate', uk:'ˈkɒnsntreɪt', us:'ˈkɑːnsntreɪt', vi:'tập trung', pos:'động từ', note:'concentrate ON' },
      { en:'understand', uk:'ˌʌndəˈstænd', us:'ˌʌndərˈstænd', vi:'hiểu', pos:'động từ' },
      { en:'explain', uk:'ɪkˈspleɪn', us:'ɪkˈspleɪn', vi:'giải thích', pos:'động từ' },
      { en:'mark', uk:'mɑːk', us:'mɑːrk', vi:'điểm (Anh); chấm điểm', pos:'danh từ, động từ', note:'Mỹ: grade' },
      { en:'result', uk:'rɪˈzʌlt', us:'rɪˈzʌlt', vi:'kết quả', pos:'danh từ' },
      { en:'certificate', uk:'səˈtɪfɪkət', us:'sərˈtɪfɪkət', vi:'chứng chỉ', pos:'danh từ' },
      { en:'scholarship', uk:'ˈskɒləʃɪp', us:'ˈskɑːlərʃɪp', vi:'học bổng', pos:'danh từ' },
      { en:'deadline', uk:'ˈdedlaɪn', us:'ˈdedlaɪn', vi:'hạn nộp', pos:'danh từ' },
      { en:'pressure', uk:'ˈpreʃə', us:'ˈpreʃər', vi:'áp lực', pos:'danh từ' },
      { en:'fail', uk:'feɪl', us:'feɪl', vi:'trượt', pos:'động từ' },
      { en:'succeed', uk:'səkˈsiːd', us:'səkˈsiːd', vi:'thành công', pos:'động từ' }
    ],
    colloc:[
      { p:'take notes / go over your notes', vi:'ghi chép / xem lại ghi chép', ex:'I take notes in class and go over them at night.' },
      { p:'apply for a scholarship', vi:'nộp hồ sơ xin học bổng', ex:'She applied for a scholarship to study in Australia.' },
      { p:'be under pressure', vi:'chịu áp lực', ex:'Students are under a lot of pressure before exams.' }
    ],
    dialogue:[
      { sp:'Quan', en:'Do you know when the results come out?', vi:'Bạn có biết khi nào có kết quả không?' },
      { sp:'Linh', en:'On the twentieth, I think. Are you worried?', vi:'Tớ nghĩ là ngày hai mươi. Bạn lo à?' },
      { sp:'Quan', en:'A bit. The last question was so difficult that I ran out of time.', vi:'Hơi hơi. Câu cuối khó đến mức tớ hết giờ.' },
      { sp:'Linh', en:'Could you tell me what it was about?', vi:'Cho tớ hỏi câu đó về cái gì?' },
      { sp:'Quan', en:'A long essay on climate change.', vi:'Một bài luận dài về biến đổi khí hậu.' },
      { sp:'Linh', en:'If you fail, can you retake it?', vi:'Nếu trượt thì thi lại được không?' },
      { sp:'Quan', en:'Yes, in July, but I would lose the scholarship.', vi:'Được, vào tháng Bảy, nhưng tớ sẽ mất học bổng.' }
    ],
    reading:{ en:'Quan is applying for a scholarship, so this term is the busiest of his university life. He has four subjects, two assignments and an essay of two thousand words. He goes to the library at seven every morning in order to find a quiet seat, because after nine there is never any space. He takes notes by hand during lectures and types them up at night so that he does not forget the details. Last week the pressure was so high that he slept only four hours a night. His teacher told him that resting is part of studying, and advised him to take one afternoon off every week.',
      vi:'Quân đang nộp hồ sơ xin học bổng, nên kỳ này là kỳ bận nhất đời sinh viên của cậu. Cậu học bốn môn, hai bài tập lớn và một bài luận hai nghìn từ. Sáng nào cậu cũng tới thư viện lúc bảy giờ để kiếm chỗ ngồi yên tĩnh, vì sau chín giờ là không còn chỗ. Cậu ghi chép tay trong giờ giảng rồi buổi tối gõ lại để không quên chi tiết. Tuần trước áp lực lớn tới mức cậu chỉ ngủ bốn tiếng mỗi đêm. Cô giáo bảo nghỉ ngơi cũng là một phần của việc học, và khuyên cậu nghỉ hẳn một buổi chiều mỗi tuần.' } },

  { level:'a2', no:18, en:'News and media', vi:'Tin tức và truyền thông', skill:'Tóm tắt tin, nêu ý kiến',
    grammar:[
      { form:'Trật tự tin tức: tiêu đề và thân bài', vi:'Tiêu đề lược bỏ mạo từ và động từ «be»; thân bài dùng câu đầy đủ.', note:'«Bridge closed after storm» = The bridge was closed after the storm.', ex:{ en:'Two schools closed because of the flood.', vi:'Hai trường học đóng cửa vì lũ.' } },
      { form:'Trích dẫn nguồn tin', vi:'According to… · Sources say… · It is reported that…', note:'Sau «according to» KHÔNG dùng «me»: According to me là sai, hãy nói «In my opinion».', ex:{ en:'According to the newspaper, prices will rise.', vi:'Theo tờ báo, giá sẽ tăng.' } },
      { form:'Đồng ý và phản đối', vi:'I agree with you up to a point · I see what you mean, but… · I am afraid I disagree.', note:'Người Anh hiếm khi phản đối thẳng; họ thường mở đầu bằng một câu đồng tình.', ex:{ en:'I see your point, but I do not completely agree.', vi:'Tôi hiểu ý bạn, nhưng tôi không hoàn toàn đồng ý.' } },
      { form:'Số liệu và xu hướng', vi:'rise / increase · fall / drop / decrease · remain stable · reach a peak.', note:'Bộ từ này là cốt lõi của IELTS Writing Task 1.', ex:{ en:'The number of readers fell by ten percent.', vi:'Số độc giả giảm mười phần trăm.' } }
    ],
    vocab:[
      { en:'newspaper', uk:'ˈnjuːspeɪpə', us:'ˈnuːzpeɪpər', vi:'báo giấy', pos:'danh từ' },
      { en:'article', uk:'ˈɑːtɪkl', us:'ˈɑːrtɪkl', vi:'bài báo', pos:'danh từ' },
      { en:'headline', uk:'ˈhedlaɪn', us:'ˈhedlaɪn', vi:'tiêu đề', pos:'danh từ' },
      { en:'journalist', uk:'ˈdʒɜːnəlɪst', us:'ˈdʒɜːrnəlɪst', vi:'nhà báo', pos:'danh từ' },
      { en:'report', uk:'rɪˈpɔːt', us:'rɪˈpɔːrt', vi:'đưa tin; bản tin', pos:'động từ, danh từ' },
      { en:'source', uk:'sɔːs', us:'sɔːrs', vi:'nguồn tin', pos:'danh từ' },
      { en:'fact', uk:'fækt', us:'fækt', vi:'sự thật, dữ kiện', pos:'danh từ' },
      { en:'rumour', uk:'ˈruːmə', us:'ˈruːmər', vi:'tin đồn', pos:'danh từ', note:'Mỹ viết rumor' },
      { en:'social media', uk:'ˈsəʊʃl ˈmiːdiə', us:'ˈsoʊʃl ˈmiːdiə', vi:'mạng xã hội', pos:'danh từ' },
      { en:'channel', uk:'ˈtʃænl', us:'ˈtʃænl', vi:'kênh', pos:'danh từ' },
      { en:'audience', uk:'ˈɔːdiəns', us:'ˈɔːdiəns', vi:'khán giả, độc giả', pos:'danh từ' },
      { en:'advertisement', uk:'ədˈvɜːtɪsmənt', us:'ˌædvərˈtaɪzmənt', vi:'quảng cáo', pos:'danh từ', note:'Anh và Mỹ nhấn khác nhau' },
      { en:'influence', uk:'ˈɪnfluəns', us:'ˈɪnfluəns', vi:'ảnh hưởng', pos:'danh từ, động từ' },
      { en:'trust', uk:'trʌst', us:'trʌst', vi:'tin tưởng', pos:'động từ' },
      { en:'reliable', uk:'rɪˈlaɪəbl', us:'rɪˈlaɪəbl', vi:'đáng tin', pos:'tính từ' },
      { en:'increase', uk:'ɪnˈkriːs', us:'ɪnˈkriːs', vi:'tăng', pos:'động từ' },
      { en:'decrease', uk:'dɪˈkriːs', us:'dɪˈkriːs', vi:'giảm', pos:'động từ' },
      { en:'according to', uk:'əˈkɔːdɪŋ tə', us:'əˈkɔːrdɪŋ tə', vi:'theo (nguồn nào đó)', pos:'giới từ' },
      { en:'recent', uk:'ˈriːsnt', us:'ˈriːsnt', vi:'gần đây', pos:'tính từ' },
      { en:'popular', uk:'ˈpɒpjələ', us:'ˈpɑːpjələr', vi:'phổ biến', pos:'tính từ' }
    ],
    colloc:[
      { p:'in the news / make the news', vi:'đang được đưa tin / trở thành tin tức', ex:'Her story made the news last week.' },
      { p:'a reliable source', vi:'nguồn tin đáng tin cậy', ex:'Always check whether it comes from a reliable source.' },
      { p:'according to a recent study', vi:'theo một nghiên cứu gần đây — mở đầu rất tốt cho bài viết', ex:'According to a recent study, teenagers read less than before.' }
    ],
    dialogue:[
      { sp:'Linh', en:'Did you see the news about the bridge?', vi:'Bạn xem tin về cây cầu chưa?' },
      { sp:'Quan', en:'Only the headline. What happened?', vi:'Mới đọc tiêu đề. Có chuyện gì vậy?' },
      { sp:'Linh', en:'It was closed for repairs. According to the article, it will reopen in June.', vi:'Nó bị đóng để sửa. Theo bài báo thì tháng Sáu mở lại.' },
      { sp:'Quan', en:'Where did you read that? Some pages are not reliable.', vi:'Bạn đọc ở đâu vậy? Có mấy trang không đáng tin đâu.' },
      { sp:'Linh', en:'It was the city newspaper, not social media.', vi:'Báo thành phố, không phải mạng xã hội.' },
      { sp:'Quan', en:'Good. Yesterday a rumour said it had collapsed.', vi:'Vậy thì tốt. Hôm qua có tin đồn bảo nó sập rồi.' },
      { sp:'Linh', en:'I see what you mean, but I still check two sources.', vi:'Tớ hiểu ý bạn, nhưng tớ vẫn kiểm tra hai nguồn.' }
    ],
    reading:{ en:'According to a recent study, the number of young people in Vietnam who read printed newspapers has fallen sharply over the last ten years, while the number who get their news from social media has increased every year. The main advantage of social media is speed: a story can reach millions of readers in minutes. However, journalists warn that speed also spreads rumours, and that many popular pages do not check their sources. Some schools have therefore started teaching students how to compare reports and how to recognise an advertisement that looks like news.',
      vi:'Theo một nghiên cứu gần đây, số người trẻ ở Việt Nam đọc báo giấy đã giảm mạnh trong mười năm qua, trong khi số người lấy tin từ mạng xã hội tăng đều mỗi năm. Ưu điểm chính của mạng xã hội là tốc độ: một câu chuyện có thể tới hàng triệu người đọc trong vài phút. Tuy nhiên, các nhà báo cảnh báo rằng tốc độ cũng làm lan tin đồn, và nhiều trang nổi tiếng không kiểm chứng nguồn. Vì thế một số trường đã bắt đầu dạy học sinh cách đối chiếu các bản tin và cách nhận ra quảng cáo trá hình dưới dạng tin tức.' } },

  { level:'a2', no:19, en:'Feelings and friendship', vi:'Cảm xúc và quan hệ', skill:'Nói về cảm xúc',
    grammar:[
      { form:'Tính từ + giới từ cố định', vi:'afraid of, interested in, worried about, proud of, good at, angry with someone / about something.', note:'Sau giới từ luôn là danh từ hoặc V-ing.', ex:{ en:'She is worried about her results.', vi:'Cô ấy lo về kết quả của mình.' } },
      { form:'Diễn tả mức độ cảm xúc', vi:'a bit / quite / really / absolutely.', note:'absolutely đi với tính từ tuyệt đối: absolutely exhausted, không nói «very exhausted».', ex:{ en:'I was absolutely delighted with the news.', vi:'Tôi vui mừng khôn xiết với tin đó.' } },
      { form:'Đồng cảm và động viên', vi:'That is a shame · Never mind · Cheer up · It will be all right.', note:'«That is a pity» và «What a shame» đều dùng khi chia sẻ chuyện không may.', ex:{ en:'Never mind. You will do better next time.', vi:'Không sao đâu. Lần sau bạn sẽ làm tốt hơn.' } },
      { form:'Mệnh đề chỉ nguyên nhân của cảm xúc', vi:'I am happy that… · It makes me feel… · The reason why I am upset is…', note:'Cấu trúc «It makes me + tính từ» rất tiện: It makes me nervous.', ex:{ en:'Talking to strangers makes me nervous.', vi:'Nói chuyện với người lạ khiến tôi hồi hộp.' } }
    ],
    vocab:[
      { en:'feeling', uk:'ˈfiːlɪŋ', us:'ˈfiːlɪŋ', vi:'cảm xúc', pos:'danh từ' },
      { en:'mood', uk:'muːd', us:'muːd', vi:'tâm trạng', pos:'danh từ' },
      { en:'happy', uk:'ˈhæpi', us:'ˈhæpi', vi:'vui', pos:'tính từ' },
      { en:'upset', uk:'ʌpˈset', us:'ʌpˈset', vi:'buồn bực', pos:'tính từ' },
      { en:'angry', uk:'ˈæŋɡri', us:'ˈæŋɡri', vi:'giận', pos:'tính từ' },
      { en:'nervous', uk:'ˈnɜːvəs', us:'ˈnɜːrvəs', vi:'hồi hộp', pos:'tính từ' },
      { en:'proud', uk:'praʊd', us:'praʊd', vi:'tự hào', pos:'tính từ' },
      { en:'jealous', uk:'ˈdʒeləs', us:'ˈdʒeləs', vi:'ghen tị', pos:'tính từ' },
      { en:'lonely', uk:'ˈləʊnli', us:'ˈloʊnli', vi:'cô đơn', pos:'tính từ' },
      { en:'grateful', uk:'ˈɡreɪtfl', us:'ˈɡreɪtfl', vi:'biết ơn', pos:'tính từ', note:'grateful TO someone FOR something' },
      { en:'disappointed', uk:'ˌdɪsəˈpɔɪntɪd', us:'ˌdɪsəˈpɔɪntɪd', vi:'thất vọng', pos:'tính từ' },
      { en:'surprised', uk:'səˈpraɪzd', us:'sərˈpraɪzd', vi:'ngạc nhiên', pos:'tính từ' },
      { en:'relationship', uk:'rɪˈleɪʃnʃɪp', us:'rɪˈleɪʃnʃɪp', vi:'mối quan hệ', pos:'danh từ' },
      { en:'trust', uk:'trʌst', us:'trʌst', vi:'lòng tin', pos:'danh từ' },
      { en:'argument', uk:'ˈɑːɡjumənt', us:'ˈɑːrɡjumənt', vi:'cuộc cãi vã', pos:'danh từ' },
      { en:'apologise', uk:'əˈpɒlədʒaɪz', us:'əˈpɑːlədʒaɪz', vi:'xin lỗi', pos:'động từ' },
      { en:'forgive', uk:'fəˈɡɪv', us:'fərˈɡɪv', vi:'tha thứ', pos:'động từ', note:'forgave — forgiven' },
      { en:'support', uk:'səˈpɔːt', us:'səˈpɔːrt', vi:'ủng hộ, hỗ trợ', pos:'động từ' },
      { en:'care', uk:'keə', us:'ker', vi:'quan tâm', pos:'động từ', note:'care ABOUT someone' },
      { en:'miss', uk:'mɪs', us:'mɪs', vi:'nhớ ai đó', pos:'động từ' }
    ],
    colloc:[
      { p:'have an argument with someone', vi:'cãi nhau với ai', ex:'They had an argument about money.' },
      { p:'get on well with someone', vi:'hợp, hoà thuận với ai', ex:'I get on well with my colleagues.' },
      { p:'be there for someone', vi:'ở bên cạnh ai lúc khó khăn', ex:'She was always there for me.' }
    ],
    dialogue:[
      { sp:'Linh', en:'You have been very quiet today. Are you all right?', vi:'Hôm nay bạn ít nói quá. Ổn không?' },
      { sp:'Quan', en:'I had an argument with my father last night.', vi:'Tối qua tớ cãi nhau với bố.' },
      { sp:'Linh', en:'That is a shame. What about?', vi:'Tiếc quá. Chuyện gì vậy?' },
      { sp:'Quan', en:'He is worried about my new job. He thinks the salary is too low.', vi:'Bố lo về công việc mới của tớ. Bố nghĩ lương thấp quá.' },
      { sp:'Linh', en:'He probably just cares about you.', vi:'Chắc bác ấy chỉ lo cho bạn thôi.' },
      { sp:'Quan', en:'I know. I was angry, but now I feel bad about it.', vi:'Tớ biết. Lúc đó tớ giận, giờ lại thấy áy náy.' },
      { sp:'Linh', en:'Then apologise. He will forgive you immediately.', vi:'Vậy thì xin lỗi đi. Bác ấy sẽ tha thứ ngay thôi.' }
    ],
    reading:{ en:'Quan and Linh have been friends since their first week at university. At the beginning they were not close: Quan thought Linh was too serious, and Linh was surprised that he never asked questions in class. They had their first real conversation while they were waiting for a delayed bus. Since then they have supported each other through exams, family problems and one big argument about a group project. Quan says the argument actually made the friendship stronger, because both of them apologised and explained how they felt. He is grateful to her for being honest with him even when it is uncomfortable.',
      vi:'Quân và Linh làm bạn từ tuần đầu tiên ở đại học. Ban đầu hai người không thân: Quân nghĩ Linh quá nghiêm túc, còn Linh ngạc nhiên vì cậu chẳng bao giờ hỏi bài. Cuộc trò chuyện thật sự đầu tiên diễn ra khi cả hai đang đợi một chuyến xe buýt bị trễ. Từ đó tới nay họ đã cùng nhau vượt qua các kỳ thi, chuyện gia đình và một trận cãi vã lớn về bài tập nhóm. Quân bảo trận cãi ấy thật ra làm tình bạn bền hơn, vì cả hai đều xin lỗi và nói rõ cảm xúc của mình. Cậu biết ơn Linh vì đã thẳng thắn với cậu ngay cả khi điều đó khó nghe.' } },

  { level:'a2', no:20, en:'Telling a longer story', vi:'Ôn tập A2 — viết và kể chuyện', skill:'Tổng hợp',
    grammar:[
      { form:'Ôn: chọn thì khi kể chuyện', vi:'Quá khứ đơn cho chuỗi sự việc · quá khứ tiếp diễn cho bối cảnh · hiện tại hoàn thành cho kết quả tới hôm nay.', note:'Một đoạn kể hay thường trộn cả ba thì này.', ex:{ en:'I was walking home when I met her. Since then we have been friends.', vi:'Tôi đang đi bộ về thì gặp cô ấy. Từ đó chúng tôi thành bạn.' } },
      { form:'Cấu trúc một email cá nhân', vi:'Chào hỏi → lý do viết → nội dung chính → lời kết → ký tên.', note:'Thân mật: Hi Linh / Best wishes. Trang trọng: Dear Ms Ha / Best regards.', ex:{ en:'Hi Linh, I am writing to tell you about my new job.', vi:'Chào Linh, mình viết thư để kể cho bạn về công việc mới.' } },
      { form:'Nối câu cho mượt', vi:'and, but, so, because, although, after that, in the end, luckily, unfortunately.', note:'although + mệnh đề · despite / in spite of + danh từ hoặc V-ing.', ex:{ en:'Although it was raining, we went out.', vi:'Mặc dù trời mưa, chúng tôi vẫn ra ngoài.' } },
      { form:'Kết thúc câu chuyện', vi:'In the end… · Looking back… · It turned out that… · That is how I…', note:'«It turned out that…» rất tự nhiên khi kết quả khác dự đoán.', ex:{ en:'It turned out that the bus was not late at all.', vi:'Hoá ra xe buýt không hề trễ.' } }
    ],
    vocab:[
      { en:'although', uk:'ɔːlˈðəʊ', us:'ɔːlˈðoʊ', vi:'mặc dù', pos:'liên từ' },
      { en:'despite', uk:'dɪˈspaɪt', us:'dɪˈspaɪt', vi:'bất chấp', pos:'giới từ', note:'despite + danh từ / V-ing, không có «of»' },
      { en:'luckily', uk:'ˈlʌkɪli', us:'ˈlʌkɪli', vi:'may thay', pos:'trạng từ' },
      { en:'unfortunately', uk:'ʌnˈfɔːtʃənətli', us:'ʌnˈfɔːrtʃənətli', vi:'không may là', pos:'trạng từ' },
      { en:'eventually', uk:'ɪˈventʃuəli', us:'ɪˈventʃuəli', vi:'cuối cùng thì', pos:'trạng từ' },
      { en:'immediately', uk:'ɪˈmiːdiətli', us:'ɪˈmiːdiətli', vi:'ngay lập tức', pos:'trạng từ' },
      { en:'suddenly', uk:'ˈsʌdənli', us:'ˈsʌdənli', vi:'đột nhiên', pos:'trạng từ' },
      { en:'describe', uk:'dɪˈskraɪb', us:'dɪˈskraɪb', vi:'miêu tả', pos:'động từ' },
      { en:'summarise', uk:'ˈsʌməraɪz', us:'ˈsʌməraɪz', vi:'tóm tắt', pos:'động từ', note:'Mỹ viết summarize' },
      { en:'paragraph', uk:'ˈpærəɡrɑːf', us:'ˈpærəɡræf', vi:'đoạn văn', pos:'danh từ' },
      { en:'draft', uk:'drɑːft', us:'dræft', vi:'bản nháp', pos:'danh từ' },
      { en:'correct', uk:'kəˈrekt', us:'kəˈrekt', vi:'sửa; đúng', pos:'động từ, tính từ' },
      { en:'checklist', uk:'ˈtʃeklɪst', us:'ˈtʃeklɪst', vi:'danh sách kiểm tra', pos:'danh từ' },
      { en:'reply', uk:'rɪˈplaɪ', us:'rɪˈplaɪ', vi:'trả lời', pos:'động từ, danh từ', note:'reply TO an email' },
      { en:'attach', uk:'əˈtætʃ', us:'əˈtætʃ', vi:'đính kèm', pos:'động từ' },
      { en:'apologise', uk:'əˈpɒlədʒaɪz', us:'əˈpɑːlədʒaɪz', vi:'xin lỗi', pos:'động từ' },
      { en:'invite', uk:'ɪnˈvaɪt', us:'ɪnˈvaɪt', vi:'mời', pos:'động từ' },
      { en:'suggest', uk:'səˈdʒest', us:'səɡˈdʒest', vi:'gợi ý', pos:'động từ' },
      { en:'looking back', uk:'ˈlʊkɪŋ bæk', us:'ˈlʊkɪŋ bæk', vi:'nhìn lại', pos:'cụm trạng từ' },
      { en:'turn out', uk:'tɜːn aʊt', us:'tɜːrn aʊt', vi:'hoá ra là', pos:'cụm động từ' }
    ],
    colloc:[
      { p:'to cut a long story short', vi:'nói ngắn gọn thì — dùng để tóm tắt trước khi kết', ex:'To cut a long story short, we missed the flight.' },
      { p:'looking back on it now', vi:'nhìn lại chuyện đó bây giờ', ex:'Looking back on it now, I was too nervous.' },
      { p:'it turned out that…', vi:'hoá ra là…', ex:'It turned out that the file had been sent twice.' }
    ],
    dialogue:[
      { sp:'Teacher', en:'Quan, tell us about a day you will never forget.', vi:'Quân, kể cho lớp nghe một ngày em không bao giờ quên.' },
      { sp:'Quan', en:'It was the day of my first interview, last April.', vi:'Đó là ngày em phỏng vấn lần đầu, tháng Tư năm ngoái ạ.' },
      { sp:'Teacher', en:'What happened?', vi:'Chuyện gì xảy ra?' },
      { sp:'Quan', en:'I was riding to the office when my bike broke down.', vi:'Em đang đi tới văn phòng thì xe hỏng.' },
      { sp:'Teacher', en:'That sounds stressful. What did you do?', vi:'Nghe căng thẳng thật. Rồi em làm gì?' },
      { sp:'Quan', en:'I called a taxi, but the traffic was terrible.', vi:'Em gọi taxi, nhưng đường tắc kinh khủng.' },
      { sp:'Teacher', en:'Were you late?', vi:'Em có muộn không?' },
      { sp:'Quan', en:'Twenty minutes. Luckily the manager was late too, so it turned out fine.', vi:'Hai mươi phút ạ. May là quản lý cũng tới muộn, nên hoá ra lại ổn.' }
    ],
    reading:{ en:'Hi Linh,\n\nI am writing to tell you about my first day at work, because I know you will laugh. I got up at five, although I did not have to be there until nine. I was so nervous that I could not eat breakfast. While I was waiting for the bus, it started to rain and I did not have an umbrella, so I arrived with wet shoes.\n\nUnfortunately, that was not the end. During the morning meeting my computer stopped working and somebody had to help me twice. Luckily everyone was friendly, and my manager said her first day had been worse.\n\nTo cut a long story short, I survived. Looking back on it now, I am glad it happened, because after that day nothing at the office has frightened me.\n\nWrite back and tell me about your week!\n\nBest wishes,\nQuan',
      vi:'Chào Linh,\n\nMình viết thư kể cho bạn nghe về ngày đầu đi làm, vì mình biết thế nào bạn cũng cười. Mình dậy từ năm giờ, dù chín giờ mới phải có mặt. Mình hồi hộp tới mức không ăn nổi bữa sáng. Trong lúc đợi xe buýt thì trời đổ mưa mà mình lại không mang ô, nên tới nơi với đôi giày ướt sũng.\n\nKhông may là chuyện chưa dừng ở đó. Trong buổi họp sáng, máy tính của mình hỏng và có người phải giúp mình tới hai lần. May là mọi người đều thân thiện, và chị quản lý bảo ngày đầu của chị còn tệ hơn.\n\nNói ngắn gọn thì mình sống sót. Nhìn lại bây giờ, mình mừng vì chuyện đó đã xảy ra, bởi sau ngày hôm ấy chẳng còn gì ở văn phòng làm mình sợ nữa.\n\nViết thư lại kể cho mình nghe tuần của bạn nhé!\n\nThân mến,\nQuân' } }

  ]
};

if (typeof module !== 'undefined') module.exports = { COURSE_EN };
