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
      vi:'Tôi tên Quân, hai mươi tuổi. Tôi sống ở Hà Nội cùng bố mẹ, bà và em gái Mai. Tôi là sinh viên một trường đại học ở đây và đang học ngành khoa học máy tính. Lúc rảnh tôi chơi ghi-ta, đọc truyện ngắn và chụp ảnh cùng bạn tôi, Linh. Tôi bắt đầu học tiếng Anh từ hồi phổ thông, nhưng chỉ thực sự nghiêm túc từ năm ngoái, vì tôi muốn làm việc cho một công ty quốc tế. Tiếng Anh của tôi chưa hoàn hảo và tôi vẫn mắc nhiều lỗi, nhưng tôi đang tiến bộ. Năm sau tôi sẽ thi một kỳ thi quốc tế, và sau khi tốt nghiệp tôi hy vọng sẽ đi du học.' } }

  ]
};

if (typeof module !== 'undefined') module.exports = { COURSE_EN };
