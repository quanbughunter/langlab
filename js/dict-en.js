/* ============================================================
   LangLab — Từ điển Anh–Việt cho người học
   Mỗi mục từ: phiên âm Anh/Mỹ, từ loại, các nghĩa xếp theo tần suất,
   ví dụ có dịch, dạng biến đổi, họ từ, collocation, cụm động từ,
   thành ngữ, từ đồng/trái nghĩa, nguồn gốc và ghi chú dùng từ.
   Những từ chỉ có trong bài học mà chưa có mục chi tiết sẽ được
   sinh mục cơ bản tự động từ COURSE_EN.
   Nội dung do LangLab tự biên soạn.
   ============================================================ */

const EN_DICT = [

/* ---------- ĐỘNG TỪ LÕI ---------- */
{ w:'be', uk:'biː', us:'biː', pos:'động từ', reg:'trung tính',
  forms:{ v:['be','am/is/are','was/were','been','being'] },
  senses:[
    { vi:'thì, là, ở — nối chủ ngữ với danh từ hoặc tính từ', ex:['She is a doctor.','Cô ấy là bác sĩ.'] },
    { vi:'ở, nằm ở (chỉ vị trí)', ex:['The keys are on the table.','Chìa khoá ở trên bàn.'] },
    { vi:'tồn tại, có (trong there is / there are)', ex:['There is a problem.','Có một vấn đề.'] },
    { vi:'trợ động từ tạo thì tiếp diễn và bị động', ex:['The house is being painted.','Ngôi nhà đang được sơn.'] }
  ],
  colloc:['be about to (sắp sửa)','be able to (có thể)','be supposed to (lẽ ra phải)','be used to (đã quen với)'],
  phrasal:[['be over','kết thúc — The meeting is over.'],['be up to','tuỳ vào ai / đang làm gì mờ ám'],['be off','đi khỏi; (đồ ăn) hỏng']],
  idiom:[['be in the same boat','cùng cảnh ngộ'],['be on the ball','nhanh nhạy, bắt nhịp tốt']],
  family:[['being','danh từ','sinh vật, sự tồn tại']],
  note:'Người Việt hay bỏ «be» vì tiếng Việt không cần: «I happy» là lỗi phổ biến nhất của người mới học.' },

{ w:'have', uk:'hæv', us:'hæv', pos:'động từ', reg:'trung tính',
  forms:{ v:['have','has','had','had','having'] },
  senses:[
    { vi:'có, sở hữu', ex:['I have two brothers.','Tôi có hai anh em trai.'] },
    { vi:'ăn, uống, dùng (bữa)', ex:['We had lunch at noon.','Chúng tôi ăn trưa lúc mười hai giờ.'] },
    { vi:'trải qua, gặp phải', ex:['She had an accident.','Cô ấy gặp tai nạn.'] },
    { vi:'trợ động từ tạo thì hoàn thành', ex:['They have finished.','Họ đã xong.'] },
    { vi:'have something done — nhờ ai làm gì', ex:['I had my hair cut.','Tôi đi cắt tóc.'] }
  ],
  colloc:['have a shower','have a look','have a good time','have breakfast','have an idea','have a go (thử)'],
  phrasal:[['have on','đang mặc; có lịch hẹn'],['have someone over','mời ai đến nhà']],
  idiom:[['have a lot on your plate','có quá nhiều việc phải lo'],['have second thoughts','đổi ý, do dự']],
  note:'Khi «have» nghĩa là sở hữu, người Anh hay thêm got: I have got a car. Khi là hành động (ăn, tắm) thì KHÔNG dùng got.' },

{ w:'do', uk:'duː', us:'duː', pos:'động từ', reg:'trung tính',
  forms:{ v:['do','does','did','done','doing'] },
  senses:[
    { vi:'làm, thực hiện (việc chung chung)', ex:['What do you do at the weekend?','Cuối tuần bạn làm gì?'] },
    { vi:'trợ động từ tạo câu hỏi và phủ định', ex:['Do you like coffee?','Bạn có thích cà phê không?'] },
    { vi:'dùng để nhấn mạnh', ex:['I do believe you.','Tôi thật sự tin bạn.'] }
  ],
  colloc:['do homework','do the washing-up','do business','do exercise','do research','do your best'],
  phrasal:[['do up','cài, buộc; sửa sang lại'],['do without','xoay xở không cần'],['do away with','bãi bỏ']],
  idiom:[['do the trick','có tác dụng, giải quyết được việc'],['easier said than done','nói dễ hơn làm']],
  note:'DO hay MAKE? DO thiên về hành động, nhiệm vụ, công việc; MAKE thiên về tạo ra sản phẩm hoặc kết quả.' },

{ w:'get', uk:'ɡet', us:'ɡet', pos:'động từ', reg:'thân mật hơn receive/become',
  forms:{ v:['get','gets','got','got / gotten (Mỹ)','getting'] },
  senses:[
    { vi:'nhận được, có được', ex:['I got a letter yesterday.','Hôm qua tôi nhận được một lá thư.'] },
    { vi:'mua, kiếm', ex:['Can you get some milk?','Bạn mua ít sữa được không?'] },
    { vi:'trở nên (+ tính từ)', ex:['It is getting cold.','Trời đang lạnh dần.'] },
    { vi:'đến nơi', ex:['We got to Hanoi at six.','Chúng tôi đến Hà Nội lúc sáu giờ.'] },
    { vi:'hiểu (thân mật)', ex:['Sorry, I do not get it.','Xin lỗi, tôi không hiểu.'] }
  ],
  colloc:['get married','get dressed','get lost','get a job','get ready','get better'],
  phrasal:[['get up','ra khỏi giường'],['get on with','hoà hợp với ai; tiếp tục làm'],['get over','vượt qua (nỗi buồn, bệnh)'],['get away with','thoát tội, không bị phạt'],['get across','truyền đạt được ý'],['get by','xoay xở đủ sống'],['get through','vượt qua; liên lạc được'],['get around to','rốt cuộc cũng làm được']],
  idiom:[['get the hang of it','quen tay, nắm được cách làm'],['get cold feet','chùn bước phút chót']],
  note:'GET là động từ nhiều nghĩa nhất trong tiếng Anh nói. Trong văn viết học thuật nên thay bằng receive, obtain, become tuỳ nghĩa.' },

{ w:'take', uk:'teɪk', us:'teɪk', pos:'động từ',
  forms:{ v:['take','takes','took','taken','taking'] },
  senses:[
    { vi:'cầm, lấy, mang đi', ex:['Take an umbrella with you.','Mang theo ô nhé.'] },
    { vi:'mất (thời gian)', ex:['It takes two hours by train.','Đi tàu mất hai tiếng.'] },
    { vi:'đi bằng (phương tiện)', ex:['I take the bus to work.','Tôi đi làm bằng xe buýt.'] },
    { vi:'uống (thuốc); làm (bài thi)', ex:['She is taking the IELTS test.','Cô ấy đang thi IELTS.'] }
  ],
  colloc:['take a photo','take a break','take notes','take care','take part in','take place (diễn ra)'],
  phrasal:[['take off','cất cánh; cởi ra; ăn nên làm ra'],['take up','bắt đầu một sở thích; chiếm chỗ'],['take after','giống ai trong nhà'],['take over','tiếp quản'],['take back','rút lại lời'],['take in','tiếp thu; lừa ai']],
  idiom:[['take it easy','thư giãn đi'],['take something for granted','coi là đương nhiên']],
  note:'take place = diễn ra (sự kiện), KHÔNG phải «lấy chỗ». Lấy chỗ là take up space.' },

{ w:'make', uk:'meɪk', us:'meɪk', pos:'động từ',
  forms:{ v:['make','makes','made','made','making'] },
  senses:[
    { vi:'làm ra, chế tạo', ex:['She made a cake.','Cô ấy làm một cái bánh.'] },
    { vi:'khiến ai làm gì / trở nên thế nào', ex:['The film made me cry.','Bộ phim làm tôi khóc.'] },
    { vi:'kiếm được (tiền)', ex:['He makes a good living.','Anh ấy kiếm sống khá tốt.'] }
  ],
  colloc:['make a decision','make a mistake','make friends','make progress','make sense','make an effort','make money'],
  phrasal:[['make up','bịa ra; làm hoà; trang điểm'],['make out','nhìn/nghe ra được'],['make up for','bù đắp cho']],
  idiom:[['make ends meet','kiếm đủ sống'],['make a fuss','làm om sòm']],
  note:'Sau make (khiến) dùng động từ nguyên thể KHÔNG to: make me laugh. Nhưng ở bị động thì có to: I was made to wait.' },

{ w:'go', uk:'ɡəʊ', us:'ɡoʊ', pos:'động từ',
  forms:{ v:['go','goes','went','gone','going'] },
  senses:[
    { vi:'đi, đi tới', ex:['I go to school by bike.','Tôi đi học bằng xe đạp.'] },
    { vi:'diễn ra, tiến triển', ex:['How did the interview go?','Buổi phỏng vấn thế nào?'] },
    { vi:'trở nên (theo hướng xấu)', ex:['The milk has gone bad.','Sữa hỏng rồi.'] },
    { vi:'be going to — sắp, dự định', ex:['It is going to rain.','Trời sắp mưa.'] }
  ],
  colloc:['go home','go shopping','go swimming','go abroad','go wrong','go online'],
  phrasal:[['go on','tiếp tục; xảy ra'],['go out','ra ngoài chơi; (lửa, đèn) tắt'],['go through','trải qua; xem xét kỹ'],['go over','xem lại'],['go off','(chuông) reo; (đồ ăn) hỏng'],['go back','quay lại']],
  idiom:[['go the extra mile','làm hơn mức được yêu cầu'],['go with the flow','thuận theo hoàn cảnh']],
  note:'gone vs been: He has gone to Paris (vẫn đang ở đó) ≠ He has been to Paris (đã đi và về rồi).' },

{ w:'come', uk:'kʌm', us:'kʌm', pos:'động từ',
  forms:{ v:['come','comes','came','come','coming'] },
  senses:[
    { vi:'đến, tới (về phía người nói)', ex:['Come here, please.','Lại đây đi.'] },
    { vi:'xuất xứ, đến từ', ex:['This tea comes from India.','Loại trà này đến từ Ấn Độ.'] },
    { vi:'trở nên, xảy đến', ex:['His dream came true.','Giấc mơ của anh ấy thành sự thật.'] }
  ],
  colloc:['come first','come true','come to an end','come into effect'],
  phrasal:[['come across','tình cờ gặp; gây ấn tượng là'],['come up with','nghĩ ra'],['come back','quay lại'],['come along','đi cùng; tiến triển'],['come down with','bị nhiễm (bệnh nhẹ)'],['come round','tỉnh lại; ghé chơi']],
  idiom:[['come rain or shine','dù thế nào đi nữa'],['come out of the blue','đến bất ngờ']],
  note:'come = đi về phía người nghe/người nói; go = đi khỏi. «I am coming» khi ai đó gọi bạn, không phải «I am going».' },

{ w:'put', uk:'pʊt', us:'pʊt', pos:'động từ',
  forms:{ v:['put','puts','put','put','putting'] },
  senses:[
    { vi:'đặt, để', ex:['Put the book on the shelf.','Đặt quyển sách lên giá.'] },
    { vi:'diễn đạt bằng lời', ex:['How should I put it?','Tôi nên nói thế nào nhỉ?'] }
  ],
  colloc:['put pressure on','put an end to','put someone at ease'],
  phrasal:[['put off','hoãn lại; làm mất hứng'],['put up with','chịu đựng'],['put on','mặc vào; bật lên; tăng cân'],['put out','dập tắt; gây phiền'],['put away','cất đi'],['put down','đặt xuống; chê bai'],['put forward','đề xuất']],
  idiom:[['put your foot in it','lỡ miệng nói hớ'],['put two and two together','suy ra được']],
  note:'put là động từ bất quy tắc «ba dạng như nhau»: put – put – put.' },

{ w:'look', uk:'lʊk', us:'lʊk', pos:'động từ, danh từ',
  forms:{ v:['look','looks','looked','looked','looking'] },
  senses:[
    { vi:'nhìn (chủ động hướng mắt về)', ex:['Look at this photo.','Nhìn tấm ảnh này xem.'] },
    { vi:'trông có vẻ', ex:['You look tired.','Trông bạn có vẻ mệt.'] },
    { vi:'cái nhìn, vẻ ngoài (danh từ)', ex:['Have a look at this.','Xem cái này đi.'] }
  ],
  colloc:['look carefully','have a quick look','good looks (ngoại hình đẹp)'],
  phrasal:[['look for','tìm kiếm'],['look after','chăm sóc'],['look forward to','mong chờ (+ V-ing)'],['look up','tra từ; khá lên'],['look into','điều tra'],['look down on','coi thường'],['look up to','ngưỡng mộ']],
  idiom:[['look on the bright side','nhìn vào mặt tích cực']],
  note:'Ba động từ dễ lẫn: look (chủ động nhìn) · see (thấy, vô tình) · watch (theo dõi có chuyển động).' },

{ w:'work', uk:'wɜːk', us:'wɜːrk', pos:'động từ, danh từ',
  forms:{ v:['work','works','worked','worked','working'] },
  senses:[
    { vi:'làm việc', ex:['She works in a hospital.','Cô ấy làm việc trong bệnh viện.'] },
    { vi:'(máy móc) chạy được, hoạt động', ex:['The lift is not working.','Thang máy không chạy.'] },
    { vi:'(cách làm) có tác dụng', ex:['That idea will not work.','Ý đó sẽ không hiệu quả.'] },
    { vi:'công việc, việc làm (danh từ không đếm được)', ex:['I have a lot of work today.','Hôm nay tôi có nhiều việc.'] }
  ],
  colloc:['work hard','work overtime','get to work','out of work (thất nghiệp)','work experience'],
  phrasal:[['work out','tập thể dục; tính ra; ổn thoả'],['work on','đang làm dở việc gì']],
  idiom:[['work like a charm','hiệu nghiệm ngay']],
  family:[['worker','danh từ','người lao động'],['workshop','danh từ','xưởng; buổi tập huấn'],['workload','danh từ','khối lượng công việc']],
  note:'work không đếm được — không nói «a work» hay «works» khi nói về công việc. Việc làm cụ thể là a job.' },

{ w:'run', uk:'rʌn', us:'rʌn', pos:'động từ',
  forms:{ v:['run','runs','ran','run','running'] },
  senses:[
    { vi:'chạy', ex:['He runs every morning.','Anh ấy chạy bộ mỗi sáng.'] },
    { vi:'điều hành, quản lý', ex:['She runs a small business.','Cô ấy điều hành một doanh nghiệp nhỏ.'] },
    { vi:'(máy, phần mềm) chạy', ex:['The program runs on any computer.','Chương trình chạy được trên mọi máy.'] }
  ],
  colloc:['run a business','run a risk','run late','run a test'],
  phrasal:[['run out of','hết, cạn'],['run into','tình cờ gặp; đâm vào'],['run over','cán qua; đọc lướt'],['run after','đuổi theo']],
  idiom:[['in the long run','xét về lâu dài'],['run in the family','có tính di truyền trong nhà']] },

{ w:'turn', uk:'tɜːn', us:'tɜːrn', pos:'động từ, danh từ',
  forms:{ v:['turn','turns','turned','turned','turning'] },
  senses:[
    { vi:'quay, rẽ', ex:['Turn left at the corner.','Rẽ trái ở góc phố.'] },
    { vi:'trở nên, biến thành', ex:['The leaves turn yellow in autumn.','Lá chuyển vàng vào mùa thu.'] },
    { vi:'lượt (danh từ)', ex:['It is your turn.','Đến lượt bạn.'] }
  ],
  colloc:['take turns','turn a corner','turn a profit'],
  phrasal:[['turn on / off','bật / tắt'],['turn up','xuất hiện; vặn to'],['turn down','từ chối; vặn nhỏ'],['turn out','hoá ra là'],['turn into','biến thành']],
  idiom:[['turn over a new leaf','làm lại từ đầu']] },

{ w:'bring', uk:'brɪŋ', us:'brɪŋ', pos:'động từ',
  forms:{ v:['bring','brings','brought','brought','bringing'] },
  senses:[
    { vi:'mang đến (về phía người nói)', ex:['Bring your passport tomorrow.','Mai mang hộ chiếu theo nhé.'] },
    { vi:'gây ra, đem lại', ex:['The rain brought relief.','Cơn mưa mang lại sự dễ chịu.'] }
  ],
  phrasal:[['bring up','nuôi dạy; nêu ra chủ đề'],['bring about','gây ra, dẫn tới'],['bring back','gợi lại; trả lại']],
  note:'bring (mang tới đây) ≠ take (mang đi chỗ khác) — cặp này song song với come/go.' },

{ w:'break', uk:'breɪk', us:'breɪk', pos:'động từ, danh từ',
  forms:{ v:['break','breaks','broke','broken','breaking'] },
  senses:[
    { vi:'làm vỡ, làm gãy', ex:['He broke his phone.','Anh ấy làm vỡ điện thoại.'] },
    { vi:'vi phạm (luật, lời hứa)', ex:['Do not break the rules.','Đừng vi phạm quy định.'] },
    { vi:'giờ nghỉ (danh từ)', ex:['Let us take a short break.','Nghỉ một chút nhé.'] }
  ],
  colloc:['break a record','break the news','break a habit','a lunch break'],
  phrasal:[['break down','hỏng máy; suy sụp'],['break up','chia tay; tan (lớp học)'],['break into','đột nhập'],['break out','bùng nổ (chiến tranh, dịch)']],
  idiom:[['break the ice','phá tan không khí ngượng ngùng'],['give someone a break','tha cho ai đi']] },

{ w:'give', uk:'ɡɪv', us:'ɡɪv', pos:'động từ',
  forms:{ v:['give','gives','gave','given','giving'] },
  senses:[
    { vi:'cho, đưa, tặng', ex:['She gave me a book.','Cô ấy tặng tôi một quyển sách.'] },
    { vi:'tổ chức, thực hiện (bài nói, buổi tiệc)', ex:['He gave a talk on climate.','Anh ấy có một bài nói về khí hậu.'] }
  ],
  colloc:['give advice','give a hand (giúp một tay)','give permission','give an example'],
  phrasal:[['give up','bỏ cuộc; từ bỏ (thói quen)'],['give in','nhượng bộ'],['give away','cho không; để lộ'],['give back','trả lại']],
  idiom:[['give someone the benefit of the doubt','tin tưởng dù chưa chắc']] },

{ w:'see', uk:'siː', us:'siː', pos:'động từ',
  forms:{ v:['see','sees','saw','seen','seeing'] },
  senses:[
    { vi:'nhìn thấy (không chủ đích)', ex:['I saw her at the station.','Tôi thấy cô ấy ở ga.'] },
    { vi:'hiểu', ex:['I see what you mean.','Tôi hiểu ý bạn.'] },
    { vi:'gặp, hẹn gặp', ex:['I am seeing the doctor at four.','Tôi có hẹn bác sĩ lúc bốn giờ.'] }
  ],
  phrasal:[['see off','tiễn ai'],['see through','nhìn thấu; theo tới cùng'],['see to','lo liệu việc gì']],
  idiom:[['see eye to eye','đồng quan điểm']],
  note:'see là động từ tri giác nên thường KHÔNG chia tiếp diễn khi mang nghĩa «nhìn thấy»; chia được khi nghĩa là «gặp, hẹn hò».' },

{ w:'know', uk:'nəʊ', us:'noʊ', pos:'động từ',
  forms:{ v:['know','knows','knew','known','knowing'] },
  senses:[
    { vi:'biết (thông tin)', ex:['I know the answer.','Tôi biết câu trả lời.'] },
    { vi:'quen biết (người, nơi chốn)', ex:['Do you know Linh?','Bạn có quen Linh không?'] }
  ],
  family:[['knowledge','danh từ','kiến thức'],['knowledgeable','tính từ','hiểu biết rộng'],['known','tính từ','được biết đến']],
  idiom:[['know something inside out','thuộc như lòng bàn tay'],['for all I know','theo chỗ tôi biết thì']],
  note:'k câm. know không chia tiếp diễn: «I am knowing» là sai.' },

/* ---------- DANH TỪ THÔNG DỤNG ---------- */
{ w:'time', uk:'taɪm', us:'taɪm', pos:'danh từ',
  senses:[
    { vi:'thời gian (không đếm được)', ex:['I do not have much time.','Tôi không có nhiều thời gian.'] },
    { vi:'lần (đếm được)', ex:['I have been there three times.','Tôi đã đến đó ba lần.'] },
    { vi:'giờ', ex:['What time is it?','Mấy giờ rồi?'] },
    { vi:'thời kỳ, thời đại', ex:['in Shakespeare’s time','vào thời Shakespeare'] }
  ],
  colloc:['spend time','waste time','save time','have a good time','in time','on time','from time to time'],
  idiom:[['time flies','thời gian trôi nhanh'],['kill time','giết thời gian'],['in the nick of time','vừa kịp lúc']],
  family:[['timely','tính từ','đúng lúc'],['timetable','danh từ','thời khoá biểu']] },

{ w:'way', uk:'weɪ', us:'weɪ', pos:'danh từ',
  senses:[
    { vi:'cách, phương pháp', ex:['This is the best way to learn.','Đây là cách học tốt nhất.'] },
    { vi:'đường đi, lối', ex:['Do you know the way to the station?','Bạn có biết đường ra ga không?'] },
    { vi:'khoảng cách', ex:['It is a long way from here.','Chỗ đó cách đây khá xa.'] }
  ],
  colloc:['by the way','in a way','no way','on the way','get in the way (cản trở)'],
  idiom:[['go out of your way','cố gắng hết sức để giúp'],['rub someone up the wrong way','làm ai khó chịu']] },

{ w:'thing', uk:'θɪŋ', us:'θɪŋ', pos:'danh từ',
  senses:[
    { vi:'thứ, vật', ex:['What is that thing on the table?','Cái thứ trên bàn kia là gì vậy?'] },
    { vi:'việc, chuyện', ex:['One thing at a time.','Từng việc một thôi.'] },
    { vi:'things — tình hình, đồ đạc', ex:['How are things?','Mọi việc thế nào?'] }
  ],
  idiom:[['first things first','việc quan trọng làm trước'],['for one thing','trước hết là']],
  note:'Trong văn viết học thuật, «thing» quá mơ hồ — hãy thay bằng factor, aspect, issue, element.' },

{ w:'people', uk:'ˈpiːpl', us:'ˈpiːpl', pos:'danh từ',
  senses:[
    { vi:'người, mọi người (số nhiều của person)', ex:['Many people were waiting.','Nhiều người đang đợi.'] },
    { vi:'dân tộc (đếm được, số nhiều: peoples)', ex:['the peoples of Asia','các dân tộc châu Á'] }
  ],
  note:'people luôn đi với động từ số nhiều: People ARE, không phải People IS.' },

{ w:'money', uk:'ˈmʌni', us:'ˈmʌni', pos:'danh từ',
  senses:[{ vi:'tiền (không đếm được)', ex:['How much money do you need?','Bạn cần bao nhiêu tiền?'] }],
  colloc:['earn money','spend money','save money','waste money','make money'],
  idiom:[['money does not grow on trees','tiền không tự nhiên mà có'],['be worth every penny','đáng đồng tiền bát gạo']],
  note:'Không đếm được: dùng «how much», không dùng «how many» hay «moneys».' },

{ w:'problem', uk:'ˈprɒbləm', us:'ˈprɑːbləm', pos:'danh từ',
  senses:[{ vi:'vấn đề, rắc rối', ex:['We have a small problem.','Chúng ta có một rắc rối nhỏ.'] }],
  colloc:['solve a problem','cause a problem','face a problem','a serious problem'],
  family:[['problematic','tính từ','có vấn đề, rắc rối']],
  idiom:[['no problem','không sao đâu']] },

{ w:'life', uk:'laɪf', us:'laɪf', pos:'danh từ', forms:{ pl:'lives /laɪvz/' },
  senses:[
    { vi:'cuộc sống, đời sống', ex:['City life is busy.','Cuộc sống thành phố bận rộn.'] },
    { vi:'sinh mạng, mạng sống', ex:['The doctor saved his life.','Bác sĩ đã cứu mạng anh ấy.'] }
  ],
  colloc:['daily life','way of life','quality of life','make a living'],
  family:[['live','động từ','sống'],['alive','tính từ','còn sống'],['lively','tính từ','sôi nổi'],['lifetime','danh từ','đời người']] },

{ w:'water', uk:'ˈwɔːtə', us:'ˈwɑːtər', pos:'danh từ, động từ',
  senses:[
    { vi:'nước', ex:['A glass of water, please.','Cho tôi một cốc nước.'] },
    { vi:'tưới (động từ)', ex:['She waters the plants every day.','Cô ấy tưới cây mỗi ngày.'] }
  ],
  colloc:['drinking water','fresh water','running water','water the plants'],
  note:'Giọng Mỹ đọc chữ t giữa hai nguyên âm thành âm vỗ, nghe gần như «wader».' },

/* ---------- TÍNH TỪ THÔNG DỤNG ---------- */
{ w:'good', uk:'ɡʊd', us:'ɡʊd', pos:'tính từ', forms:{ cmp:'better', sup:'best' },
  senses:[
    { vi:'tốt, hay, giỏi', ex:['She is good at maths.','Cô ấy giỏi toán.'] },
    { vi:'ngoan (về hành vi)', ex:['Be a good boy.','Ngoan nhé con.'] },
    { vi:'có lợi cho sức khoẻ', ex:['Fruit is good for you.','Hoa quả tốt cho bạn.'] }
  ],
  colloc:['good at (giỏi việc gì)','good for (tốt cho)','good with (khéo với ai)','a good deal'],
  family:[['goodness','danh từ','sự tốt lành'],['well','trạng từ','một cách tốt']],
  note:'good là TÍNH TỪ, well là TRẠNG TỪ: He plays well, không phải «He plays good».' },

{ w:'big', uk:'bɪɡ', us:'bɪɡ', pos:'tính từ', forms:{ cmp:'bigger', sup:'biggest' },
  senses:[
    { vi:'to, lớn (kích thước)', ex:['They live in a big house.','Họ sống trong một ngôi nhà lớn.'] },
    { vi:'quan trọng, hệ trọng', ex:['This is a big decision.','Đây là một quyết định lớn.'] }
  ],
  note:'big thiên về đời thường, large trung tính hơn, great mang nghĩa vĩ đại hoặc rất nhiều.' },

{ w:'happy', uk:'ˈhæpi', us:'ˈhæpi', pos:'tính từ', forms:{ cmp:'happier', sup:'happiest' },
  senses:[
    { vi:'vui, hạnh phúc', ex:['I am happy to see you.','Tôi vui khi gặp bạn.'] },
    { vi:'hài lòng, sẵn lòng', ex:['I am happy to help.','Tôi sẵn lòng giúp.'] }
  ],
  family:[['happiness','danh từ','hạnh phúc'],['happily','trạng từ','một cách vui vẻ'],['unhappy','tính từ','không vui']],
  colloc:['happy about / with (hài lòng về)','happy to do something'] },

{ w:'difficult', uk:'ˈdɪfɪkəlt', us:'ˈdɪfɪkəlt', pos:'tính từ',
  senses:[
    { vi:'khó, gian nan', ex:['This exercise is difficult.','Bài tập này khó.'] },
    { vi:'khó tính (về người)', ex:['He can be difficult.','Anh ấy đôi khi khó chiều.'] }
  ],
  family:[['difficulty','danh từ','sự khó khăn']],
  colloc:['find it difficult to','a difficult decision','difficult to understand'],
  note:'Cấu trúc quen dùng: It is difficult TO do something (không dùng V-ing sau difficult).' },

/* ---------- TỪ CHỨC NĂNG ---------- */
{ w:'can', uk:'kæn', us:'kæn', pos:'động từ khuyết thiếu',
  forms:{ v:['can','can','could','been able to','—'] },
  senses:[
    { vi:'có thể (năng lực)', ex:['I can swim.','Tôi biết bơi.'] },
    { vi:'được phép (xin phép, cho phép)', ex:['Can I come in?','Tôi vào được không?'] },
    { vi:'có khả năng xảy ra', ex:['It can be very cold here.','Ở đây có thể rất lạnh.'] }
  ],
  note:'Sau can dùng động từ nguyên thể không «to»: I can go. Dạng yếu trong câu đọc là /kən/.' },

{ w:'should', uk:'ʃʊd', us:'ʃʊd', pos:'động từ khuyết thiếu',
  senses:[
    { vi:'nên (lời khuyên)', ex:['You should see a doctor.','Bạn nên đi khám.'] },
    { vi:'lẽ ra (should have + V3)', ex:['I should have called you.','Lẽ ra tôi nên gọi bạn.'] }
  ],
  note:'should nhẹ hơn must. must = bắt buộc, should = khuyên nhủ, ought to ≈ should nhưng trang trọng hơn.' },

{ w:'because', uk:'bɪˈkɒz', us:'bɪˈkɔːz', pos:'liên từ',
  senses:[{ vi:'bởi vì — nối mệnh đề nguyên nhân', ex:['I stayed home because it was raining.','Tôi ở nhà vì trời mưa.'] }],
  note:'because + MỆNH ĐỀ (có chủ ngữ + động từ); because of + DANH TỪ: because of the rain.' },

{ w:'about', uk:'əˈbaʊt', us:'əˈbaʊt', pos:'giới từ, trạng từ',
  senses:[
    { vi:'về, liên quan tới', ex:['a book about history','một cuốn sách về lịch sử'] },
    { vi:'khoảng chừng', ex:['about twenty people','khoảng hai mươi người'] }
  ],
  colloc:['talk about','think about','worry about','be about to (sắp)'],
  note:'Cả hai âm tiết đều có schwa hoặc nguyên âm đôi — đây là từ mẫu để luyện /ə/.' },
/* ---------- ĐẠI TỪ ---------- */
{ w:'i', uk:'aɪ', us:'aɪ', pos:'đại từ', senses:[{ vi:'tôi (chủ ngữ)', ex:['I live in Hanoi.','Tôi sống ở Hà Nội.'] }],
  forms:{ v:['I','me (tân ngữ)','my (sở hữu)','mine','myself'] }, note:'Luôn viết hoa dù đứng giữa câu.' },
{ w:'you', uk:'juː', us:'juː', pos:'đại từ', senses:[{ vi:'bạn, các bạn — dùng cho cả số ít và số nhiều', ex:['Are you ready?','Bạn sẵn sàng chưa?'] },{ vi:'người ta nói chung (nghĩa khái quát)', ex:['You cannot smoke here.','Ở đây không được hút thuốc.'] }],
  forms:{ v:['you','you','your','yours','yourself / yourselves'] }, note:'Dạng yếu trong câu đọc là /jə/ hoặc /ju/.' },
{ w:'he', uk:'hiː', us:'hiː', pos:'đại từ', senses:[{ vi:'anh ấy, ông ấy, cậu ấy', ex:['He works in a bank.','Anh ấy làm ở ngân hàng.'] }], forms:{ v:['he','him','his','his','himself'] } },
{ w:'she', uk:'ʃiː', us:'ʃiː', pos:'đại từ', senses:[{ vi:'cô ấy, chị ấy, bà ấy', ex:['She is my sister.','Cô ấy là em gái tôi.'] }], forms:{ v:['she','her','her','hers','herself'] } },
{ w:'it', uk:'ɪt', us:'ɪt', pos:'đại từ', senses:[{ vi:'nó (vật, con vật, khái niệm)', ex:['It is very cold today.','Hôm nay trời rất lạnh.'] },{ vi:'chủ ngữ giả cho thời tiết, giờ giấc, khoảng cách', ex:['It takes ten minutes.','Mất mười phút.'] }], forms:{ v:['it','it','its','—','itself'] }, note:'its (sở hữu) KHÔNG có dấu phẩy trên; it’s = it is hoặc it has.' },
{ w:'we', uk:'wiː', us:'wiː', pos:'đại từ', senses:[{ vi:'chúng tôi, chúng ta', ex:['We are in the same class.','Chúng tôi học cùng lớp.'] }], forms:{ v:['we','us','our','ours','ourselves'] } },
{ w:'they', uk:'ðeɪ', us:'ðeɪ', pos:'đại từ', senses:[{ vi:'họ, chúng nó', ex:['They live near here.','Họ sống gần đây.'] },{ vi:'dùng thay he/she khi chưa rõ giới tính', ex:['Someone left their bag.','Ai đó để quên túi.'] }], forms:{ v:['they','them','their','theirs','themselves'] } },
{ w:'me', uk:'miː', us:'miː', pos:'đại từ', senses:[{ vi:'tôi (tân ngữ)', ex:['She called me yesterday.','Hôm qua cô ấy gọi tôi.'] }], note:'«Me too» là cách nói tự nhiên; «I too» rất trang trọng và hiếm.' },
{ w:'my', uk:'maɪ', us:'maɪ', pos:'tính từ sở hữu', senses:[{ vi:'của tôi', ex:['My name is Quan.','Tên tôi là Quân.'] }] },
{ w:'your', uk:'jɔː', us:'jʊr', pos:'tính từ sở hữu', senses:[{ vi:'của bạn', ex:['What is your name?','Bạn tên gì?'] }], note:'your (của bạn) ≠ you’re (you are) — lỗi chính tả phổ biến nhất của người bản ngữ.' },
{ w:'his', uk:'hɪz', us:'hɪz', pos:'tính từ sở hữu, đại từ', senses:[{ vi:'của anh ấy', ex:['His father is a doctor.','Bố anh ấy là bác sĩ.'] }] },
{ w:'her', uk:'hɜː', us:'hɜːr', pos:'tính từ sở hữu, đại từ', senses:[{ vi:'của cô ấy; cô ấy (tân ngữ)', ex:['I saw her at the library.','Tôi thấy cô ấy ở thư viện.'] }] },
{ w:'our', uk:'ˈaʊə', us:'ˈaʊər', pos:'tính từ sở hữu', senses:[{ vi:'của chúng tôi', ex:['Our teacher is from London.','Thầy giáo chúng tôi đến từ London.'] }] },
{ w:'this', uk:'ðɪs', us:'ðɪs', pos:'từ chỉ định', senses:[{ vi:'này, cái này (gần)', ex:['This is my room.','Đây là phòng tôi.'] }], forms:{ pl:'these /ðiːz/' }, note:'Trên điện thoại: «This is Quan speaking» — không nói «I am Quan speaking».' },
{ w:'that', uk:'ðæt', us:'ðæt', pos:'từ chỉ định, liên từ, đại từ quan hệ', senses:[{ vi:'kia, đó (xa)', ex:['That is my bike.','Kia là xe của tôi.'] },{ vi:'rằng (nối mệnh đề)', ex:['I think that he is right.','Tôi nghĩ rằng anh ấy đúng.'] }], forms:{ pl:'those /ðəʊz/' }, note:'Liên từ «that» thường lược bỏ được trong lời nói: I think he is right.' },
{ w:'who', uk:'huː', us:'huː', pos:'từ để hỏi, đại từ quan hệ', senses:[{ vi:'ai', ex:['Who is that man?','Người đàn ông kia là ai?'] }], note:'h câm ở đây.' },
{ w:'what', uk:'wɒt', us:'wʌt', pos:'từ để hỏi', senses:[{ vi:'cái gì, gì', ex:['What do you do?','Bạn làm nghề gì?'] }] },
{ w:'where', uk:'weə', us:'wer', pos:'từ để hỏi', senses:[{ vi:'ở đâu', ex:['Where are you from?','Bạn đến từ đâu?'] }] },
{ w:'when', uk:'wen', us:'wen', pos:'từ để hỏi, liên từ', senses:[{ vi:'khi nào; khi', ex:['When does the class start?','Lớp bắt đầu khi nào?'] }] },
{ w:'why', uk:'waɪ', us:'waɪ', pos:'từ để hỏi', senses:[{ vi:'tại sao', ex:['Why are you late?','Sao bạn đến muộn?'] }] },
{ w:'how', uk:'haʊ', us:'haʊ', pos:'từ để hỏi', senses:[{ vi:'như thế nào; bao nhiêu (how many/much)', ex:['How do you go to work?','Bạn đi làm bằng gì?'] }],
  colloc:['how much (không đếm được)','how many (đếm được)','how often','how long','how far'] },

/* ---------- MẠO TỪ, LƯỢNG TỪ, LIÊN TỪ ---------- */
{ w:'a', uk:'ə', us:'ə', pos:'mạo từ', senses:[{ vi:'một (danh từ đếm được số ít, nhắc lần đầu)', ex:['I am a student.','Tôi là sinh viên.'] }], note:'Dạng mạnh /eɪ/ chỉ dùng khi nhấn mạnh. Chọn a/an theo ÂM chứ không theo chữ: a university, an hour.' },
{ w:'an', uk:'ən', us:'ən', pos:'mạo từ', senses:[{ vi:'một — đứng trước âm nguyên âm', ex:['She is an engineer.','Cô ấy là kỹ sư.'] }] },
{ w:'the', uk:'ðə', us:'ðə', pos:'mạo từ', senses:[{ vi:'cái, con, người… — chỉ vật đã xác định', ex:['Close the door, please.','Làm ơn đóng cửa lại.'] }], note:'Đọc /ðiː/ trước âm nguyên âm: the apple /ði ˈæpl/. Người Việt hay bỏ mạo từ vì tiếng Việt không có.' },
{ w:'some', uk:'sʌm', us:'sʌm', pos:'lượng từ', senses:[{ vi:'một vài, một ít — câu khẳng định', ex:['There are some books on the desk.','Có mấy quyển sách trên bàn.'] }], note:'Dùng some trong câu hỏi khi mời hoặc đề nghị: Would you like some tea?' },
{ w:'any', uk:'ˈeni', us:'ˈeni', pos:'lượng từ', senses:[{ vi:'nào, chút nào — câu phủ định và câu hỏi', ex:['Do you have any questions?','Bạn có câu hỏi nào không?'] }] },
{ w:'many', uk:'ˈmeni', us:'ˈmeni', pos:'lượng từ', senses:[{ vi:'nhiều — đi với danh từ đếm được', ex:['Many people were there.','Nhiều người đã ở đó.'] }], note:'many + đếm được · much + không đếm được · a lot of + cả hai.' },
{ w:'much', uk:'mʌtʃ', us:'mʌtʃ', pos:'lượng từ', senses:[{ vi:'nhiều — đi với danh từ không đếm được', ex:['I do not have much time.','Tôi không có nhiều thời gian.'] }], forms:{ cmp:'more', sup:'most' } },
{ w:'and', uk:'ænd', us:'ænd', pos:'liên từ', senses:[{ vi:'và', ex:['Linh and Quan are friends.','Linh và Quân là bạn.'] }], note:'Dạng yếu /ən/ hoặc /n/: fish and chips nghe như «fish’n chips».' },
{ w:'but', uk:'bʌt', us:'bʌt', pos:'liên từ', senses:[{ vi:'nhưng', ex:['It is small but comfortable.','Nó nhỏ nhưng thoải mái.'] }] },
{ w:'or', uk:'ɔː', us:'ɔːr', pos:'liên từ', senses:[{ vi:'hoặc, hay', ex:['Tea or coffee?','Trà hay cà phê?'] }] },
{ w:'so', uk:'səʊ', us:'soʊ', pos:'liên từ, trạng từ', senses:[{ vi:'vì thế, nên', ex:['It was late, so we went home.','Muộn rồi nên chúng tôi về nhà.'] },{ vi:'rất, đến mức', ex:['It is so hot today.','Hôm nay nóng quá.'] }] },
{ w:'also', uk:'ˈɔːlsəʊ', us:'ˈɔːlsoʊ', pos:'trạng từ', senses:[{ vi:'cũng — đứng giữa câu', ex:['She also speaks French.','Cô ấy cũng nói được tiếng Pháp.'] }], note:'also đứng trước động từ thường, sau «be»; too và as well đứng cuối câu.' },
{ w:'too', uk:'tuː', us:'tuː', pos:'trạng từ', senses:[{ vi:'cũng — cuối câu', ex:['I am a student too.','Tôi cũng là sinh viên.'] },{ vi:'quá (mức chấp nhận được)', ex:['This coffee is too hot.','Cà phê này nóng quá.'] }], note:'too = quá mức tiêu cực; very = rất, trung tính.' },

/* ---------- GIỚI TỪ ---------- */
{ w:'in', uk:'ɪn', us:'ɪn', pos:'giới từ', senses:[{ vi:'trong (không gian ba chiều)', ex:['The keys are in my bag.','Chìa khoá ở trong túi tôi.'] },{ vi:'vào (tháng, năm, mùa, buổi)', ex:['in July, in 2026, in the morning','vào tháng Bảy, năm 2026, buổi sáng'] }],
  colloc:['in time (kịp)','in the end (rốt cuộc)','in fact','interested in'] },
{ w:'on', uk:'ɒn', us:'ɑːn', pos:'giới từ', senses:[{ vi:'trên (bề mặt)', ex:['The book is on the table.','Quyển sách ở trên bàn.'] },{ vi:'vào (ngày, thứ)', ex:['on Monday, on 5 May','vào thứ Hai, ngày 5 tháng Năm'] }],
  colloc:['on time (đúng giờ)','on foot','on the phone','depend on'] },
{ w:'at', uk:'æt', us:'æt', pos:'giới từ', senses:[{ vi:'tại (điểm cụ thể)', ex:['We met at the station.','Chúng tôi gặp nhau ở ga.'] },{ vi:'lúc (giờ)', ex:['at eight o’clock','lúc tám giờ'] }],
  colloc:['at home','at work','at night','good at','look at'] },
{ w:'to', uk:'tuː', us:'tuː', pos:'giới từ', senses:[{ vi:'đến, tới (hướng)', ex:['I go to school every day.','Tôi đi học mỗi ngày.'] },{ vi:'dấu hiệu động từ nguyên thể', ex:['I want to learn English.','Tôi muốn học tiếng Anh.'] }], note:'Không dùng «to» trước home: go home, không phải «go to home».' },
{ w:'for', uk:'fɔː', us:'fɔːr', pos:'giới từ', senses:[{ vi:'cho, dành cho', ex:['This is for you.','Cái này cho bạn.'] },{ vi:'trong (khoảng thời gian)', ex:['I studied for two hours.','Tôi học trong hai tiếng.'] }], note:'for + khoảng thời gian · since + mốc thời gian.' },
{ w:'with', uk:'wɪð', us:'wɪð', pos:'giới từ', senses:[{ vi:'với, cùng với', ex:['I live with my family.','Tôi sống cùng gia đình.'] },{ vi:'bằng (công cụ)', ex:['Cut it with a knife.','Cắt nó bằng dao.'] }] },
{ w:'of', uk:'ɒv', us:'ʌv', pos:'giới từ', senses:[{ vi:'của, thuộc về', ex:['the capital of Vietnam','thủ đô của Việt Nam'] }], note:'Với người thì ưu tiên ’s: my brother’s car, không phải «the car of my brother».' },
{ w:'by', uk:'baɪ', us:'baɪ', pos:'giới từ', senses:[{ vi:'bằng (phương tiện, cách thức)', ex:['I go by bus.','Tôi đi bằng xe buýt.'] },{ vi:'bởi (trong câu bị động)', ex:['The book was written by Quan.','Cuốn sách do Quân viết.'] }] },
{ w:'about', uk:'əˈbaʊt', us:'əˈbaʊt', pos:'giới từ, trạng từ', senses:[{ vi:'về, liên quan tới', ex:['a book about history','một cuốn sách về lịch sử'] },{ vi:'khoảng chừng', ex:['about twenty people','khoảng hai mươi người'] }], colloc:['talk about','think about','be about to'] },

/* ---------- ĐỘNG TỪ THÔNG DỤNG KHÁC ---------- */
{ w:'like', uk:'laɪk', us:'laɪk', pos:'động từ, giới từ', senses:[{ vi:'thích', ex:['I like coffee.','Tôi thích cà phê.'] },{ vi:'giống như', ex:['He looks like his father.','Anh ấy trông giống bố.'] }],
  colloc:['would like (muốn — lịch sự)','feel like (thấy muốn + V-ing)','What is it like? (nó thế nào?)'],
  note:'like + V-ing (thích nói chung) · would like + to V (muốn ngay lúc này).' },
{ w:'want', uk:'wɒnt', us:'wɑːnt', pos:'động từ', senses:[{ vi:'muốn', ex:['I want to learn English.','Tôi muốn học tiếng Anh.'] }], note:'want + to + động từ. «I want learn» là lỗi thường gặp.' },
{ w:'need', uk:'niːd', us:'niːd', pos:'động từ, danh từ', senses:[{ vi:'cần', ex:['You need a visa.','Bạn cần visa.'] },{ vi:'nhu cầu (danh từ)', ex:['the needs of students','nhu cầu của sinh viên'] }] },
{ w:'think', uk:'θɪŋk', us:'θɪŋk', pos:'động từ', forms:{ v:['think','thinks','thought','thought','thinking'] },
  senses:[{ vi:'nghĩ, cho rằng', ex:['I think it will rain.','Tôi nghĩ trời sắp mưa.'] },{ vi:'suy nghĩ, cân nhắc', ex:['I am thinking about it.','Tôi đang cân nhắc.'] }],
  phrasal:[['think over','cân nhắc kỹ'],['think up','nghĩ ra']],
  note:'Nghĩa «cho rằng» không chia tiếp diễn; nghĩa «đang suy nghĩ» thì chia được.' },
{ w:'say', uk:'seɪ', us:'seɪ', pos:'động từ', forms:{ v:['say','says /sez/','said /sed/','said','saying'] },
  senses:[{ vi:'nói (nội dung lời nói)', ex:['She said hello.','Cô ấy nói xin chào.'] }],
  note:'say something (to someone) · tell someone something. «Say me» là sai.' },
{ w:'tell', uk:'tel', us:'tel', pos:'động từ', forms:{ v:['tell','tells','told','told','telling'] },
  senses:[{ vi:'kể, bảo (luôn có người nghe)', ex:['Tell me the truth.','Hãy nói thật với tôi.'] }],
  colloc:['tell a story','tell a lie','tell the time','tell the difference'] },
{ w:'live', uk:'lɪv', us:'lɪv', pos:'động từ', senses:[{ vi:'sống, cư trú', ex:['They live in Hue.','Họ sống ở Huế.'] }],
  family:[['life','danh từ','cuộc sống'],['living','danh từ','sinh kế'],['alive','tính từ','còn sống']],
  note:'Động từ live đọc /lɪv/, tính từ live (trực tiếp) đọc /laɪv/.' },
{ w:'start', uk:'stɑːt', us:'stɑːrt', pos:'động từ, danh từ', senses:[{ vi:'bắt đầu', ex:['The class starts at eight.','Lớp bắt đầu lúc tám giờ.'] }],
  note:'start / begin theo sau được cả to V và V-ing, nghĩa gần như nhau.' },
{ w:'speak', uk:'spiːk', us:'spiːk', pos:'động từ', forms:{ v:['speak','speaks','spoke','spoken','speaking'] },
  senses:[{ vi:'nói (một ngôn ngữ); phát biểu', ex:['Do you speak English?','Bạn có nói được tiếng Anh không?'] }],
  phrasal:[['speak up','nói to lên'],['speak out','lên tiếng phản đối']] },
{ w:'study', uk:'ˈstʌdi', us:'ˈstʌdi', pos:'động từ, danh từ', forms:{ v:['study','studies','studied','studied','studying'] },
  senses:[{ vi:'học, nghiên cứu', ex:['She studies medicine.','Cô ấy học ngành y.'] },{ vi:'công trình nghiên cứu (danh từ)', ex:['a recent study','một nghiên cứu gần đây'] }],
  family:[['student','danh từ','sinh viên'],['studious','tính từ','chăm học']],
  note:'study = học có chủ đích một môn · learn = tiếp thu được kiến thức, kỹ năng.' },
{ w:'learn', uk:'lɜːn', us:'lɜːrn', pos:'động từ', forms:{ v:['learn','learns','learned / learnt (Anh)','learned / learnt','learning'] },
  senses:[{ vi:'học được, nắm được', ex:['I learned a lot from her.','Tôi học được nhiều từ cô ấy.'] }],
  colloc:['learn by heart (học thuộc lòng)','learn from mistakes'] },
{ w:'help', uk:'help', us:'help', pos:'động từ, danh từ', senses:[{ vi:'giúp đỡ', ex:['Can you help me?','Bạn giúp tôi được không?'] }],
  colloc:['help someone with something','help yourself (cứ tự nhiên)'],
  note:'Sau help dùng được cả to V và V nguyên: help me (to) carry this.' },
{ w:'use', uk:'juːz', us:'juːz', pos:'động từ', senses:[{ vi:'dùng, sử dụng', ex:['I use my phone to study.','Tôi dùng điện thoại để học.'] }],
  family:[['useful','tính từ','hữu ích'],['useless','tính từ','vô dụng'],['user','danh từ','người dùng']],
  note:'Động từ use đọc /juːz/ (âm z), danh từ use đọc /juːs/ (âm s).' },

/* ---------- DANH TỪ, TÍNH TỪ, TRẠNG TỪ BỔ SUNG ---------- */
{ w:'class', uk:'klɑːs', us:'klæs', pos:'danh từ', senses:[{ vi:'lớp học, tiết học', ex:['We are in the same class.','Chúng tôi học cùng lớp.'] },{ vi:'hạng, tầng lớp', ex:['business class','hạng thương gia'] }] },
{ w:'here', uk:'hɪə', us:'hɪr', pos:'trạng từ', senses:[{ vi:'ở đây', ex:['I am a student here.','Tôi là sinh viên ở đây.'] }], colloc:['come here','over here','Here you are (đây, mời bạn)'] },
{ w:'there', uk:'ðeə', us:'ðer', pos:'trạng từ', senses:[{ vi:'ở đó, ở kia', ex:['She lives there.','Cô ấy sống ở đó.'] },{ vi:'trong cấu trúc there is / there are', ex:['There are five people.','Có năm người.'] }], note:'there ≠ their (của họ) ≠ they’re (they are) — ba từ đồng âm.' },
{ w:'now', uk:'naʊ', us:'naʊ', pos:'trạng từ', senses:[{ vi:'bây giờ', ex:['Where do you live now?','Bây giờ bạn sống ở đâu?'] }], colloc:['right now','from now on','for now'] },
{ w:'very', uk:'ˈveri', us:'ˈveri', pos:'trạng từ', senses:[{ vi:'rất', ex:['It is very cold.','Trời rất lạnh.'] }], note:'Không dùng very với tính từ tuyệt đối: nói absolutely perfect, không nói «very perfect».' },
{ w:'really', uk:'ˈrɪəli', us:'ˈriːəli', pos:'trạng từ', senses:[{ vi:'thật sự, thực ra', ex:['I really like it.','Tôi thật sự thích nó.'] },{ vi:'thật à? (đáp lời)', ex:['Really? That is great.','Thật à? Tuyệt quá.'] }] },
{ w:'well', uk:'wel', us:'wel', pos:'trạng từ, thán từ', forms:{ cmp:'better', sup:'best' },
  senses:[{ vi:'tốt, giỏi (bổ nghĩa động từ)', ex:['She sings well.','Cô ấy hát hay.'] },{ vi:'à, ừ thì (từ đệm mở lời)', ex:['Well, I am not sure.','À, tôi không chắc lắm.'] },{ vi:'khoẻ (tính từ)', ex:['I do not feel well.','Tôi thấy không khoẻ.'] }] },
{ w:'new', uk:'njuː', us:'nuː', pos:'tính từ', senses:[{ vi:'mới', ex:['I bought a new phone.','Tôi mua điện thoại mới.'] }], note:'Anh có /j/ (/njuː/), Mỹ không (/nuː/) — dấu hiệu nhận diện giọng rõ nhất.' },
{ w:'small', uk:'smɔːl', us:'smɔːl', pos:'tính từ', senses:[{ vi:'nhỏ', ex:['I live in a small flat.','Tôi ở một căn hộ nhỏ.'] }], note:'small = nhỏ về kích thước · little có thêm sắc thái tình cảm (bé bỏng, đáng yêu).' },
{ w:'first', uk:'fɜːst', us:'fɜːrst', pos:'số thứ tự, trạng từ', senses:[{ vi:'thứ nhất, đầu tiên', ex:['My first class starts at eight.','Tiết đầu bắt đầu lúc tám giờ.'] }], colloc:['at first (thoạt đầu)','first of all','for the first time'] },
{ w:'day', uk:'deɪ', us:'deɪ', pos:'danh từ', senses:[{ vi:'ngày', ex:['I study every day.','Tôi học mỗi ngày.'] }], colloc:['all day','the other day (hôm nọ)','these days','one day (một ngày nào đó)'],
  note:'every day (hai từ, trạng ngữ) ≠ everyday (một từ, tính từ: everyday life).' },
{ w:'home', uk:'həʊm', us:'hoʊm', pos:'danh từ, trạng từ', senses:[{ vi:'nhà, tổ ấm', ex:['He gets home at seven.','Cậu ấy về nhà lúc bảy giờ.'] }],
  colloc:['at home','go home','stay home','make yourself at home'],
  note:'home nhấn vào cảm giác thuộc về; house chỉ toà nhà.' },
{ w:'school', uk:'skuːl', us:'skuːl', pos:'danh từ', senses:[{ vi:'trường học', ex:['She is still at school.','Em ấy vẫn đang đi học.'] }],
  note:'go to school (đi học, với tư cách học sinh) ≠ go to the school (tới toà nhà trường vì việc khác).' },
{ w:'university', uk:'ˌjuːnɪˈvɜːsəti', us:'ˌjuːnɪˈvɜːrsəti', pos:'danh từ', senses:[{ vi:'trường đại học', ex:['I study at a university in Hanoi.','Tôi học đại học ở Hà Nội.'] }],
  note:'Bắt đầu bằng âm /j/ nên dùng «a university», không dùng «an».' },
{ w:'photo', uk:'ˈfəʊtəʊ', us:'ˈfoʊtoʊ', pos:'danh từ', senses:[{ vi:'bức ảnh', ex:['Is this a photo of your family?','Đây là ảnh gia đình bạn à?'] }], colloc:['take a photo','a photo of someone'] },
{ w:'doctor', uk:'ˈdɒktə', us:'ˈdɑːktər', pos:'danh từ', senses:[{ vi:'bác sĩ; tiến sĩ', ex:['My father is a doctor.','Bố tôi là bác sĩ.'] }], colloc:['see a doctor','go to the doctor’s'] },
{ w:'left', uk:'left', us:'left', pos:'danh từ, tính từ, trạng từ', senses:[{ vi:'bên trái', ex:['Turn left at the corner.','Rẽ trái ở góc phố.'] },{ vi:'quá khứ của leave — đã rời đi', ex:['He left at seven.','Anh ấy đi lúc bảy giờ.'] }] },
{ w:'convenient', uk:'kənˈviːniənt', us:'kənˈviːniənt', pos:'tính từ', senses:[{ vi:'tiện lợi, thuận tiện', ex:['The location is very convenient.','Vị trí rất thuận tiện.'] }],
  family:[['convenience','danh từ','sự tiện lợi'],['conveniently','trạng từ','một cách thuận tiện']],
  note:'Nói về người thì dùng «It is convenient FOR me», không nói «I am convenient».' },
{ w:'test', uk:'test', us:'test', pos:'danh từ, động từ', senses:[{ vi:'bài kiểm tra, bài thi', ex:['When is the test?','Bài kiểm tra khi nào?'] }],
  colloc:['take a test (làm bài thi)','pass a test','fail a test'],
  note:'take a test = đi thi · pass a test = thi đỗ. «Pass the test» KHÔNG có nghĩa là «làm bài thi».' },
{ w:'library', uk:'ˈlaɪbrəri', us:'ˈlaɪbreri', pos:'danh từ', senses:[{ vi:'thư viện', ex:['I go to the library every morning.','Sáng nào tôi cũng tới thư viện.'] }],
  note:'Không nhầm với bookshop (hiệu sách) — lỗi «false friend» quen thuộc.' },
{ w:'market', uk:'ˈmɑːkɪt', us:'ˈmɑːrkɪt', pos:'danh từ', senses:[{ vi:'chợ', ex:['There is a market in front of the building.','Trước toà nhà có một cái chợ.'] },{ vi:'thị trường', ex:['the job market','thị trường việc làm'] }] },
{ w:'building', uk:'ˈbɪldɪŋ', us:'ˈbɪldɪŋ', pos:'danh từ', senses:[{ vi:'toà nhà', ex:['She lives in an old building.','Cô ấy sống trong một toà nhà cũ.'] }], family:[['build','động từ','xây dựng'],['builder','danh từ','thợ xây']] },
{ w:'park', uk:'pɑːk', us:'pɑːrk', pos:'danh từ, động từ', senses:[{ vi:'công viên', ex:['There is a park opposite the building.','Đối diện toà nhà có công viên.'] },{ vi:'đỗ xe (động từ)', ex:['You cannot park here.','Bạn không được đỗ xe ở đây.'] }] },
{ w:'cheap', uk:'tʃiːp', us:'tʃiːp', pos:'tính từ', senses:[{ vi:'rẻ', ex:['The rent is cheap.','Tiền thuê rẻ.'] }],
  note:'cheap đôi khi hàm ý rẻ tiền, kém chất lượng; muốn khen giá tốt thì dùng «inexpensive» hoặc «good value».' },
{ w:'expensive', uk:'ɪkˈspensɪv', us:'ɪkˈspensɪv', pos:'tính từ', senses:[{ vi:'đắt', ex:['This phone is too expensive.','Điện thoại này đắt quá.'] }], family:[['expense','danh từ','chi phí']] },
{ w:'coffee', uk:'ˈkɒfi', us:'ˈkɔːfi', pos:'danh từ', senses:[{ vi:'cà phê', ex:['I work at a coffee shop.','Tôi làm ở quán cà phê.'] }], colloc:['a cup of coffee','coffee shop','black coffee'] },
{ w:'bus', uk:'bʌs', us:'bʌs', pos:'danh từ', senses:[{ vi:'xe buýt', ex:['I take the bus to work.','Tôi đi làm bằng xe buýt.'] }], colloc:['take the bus','catch a bus','miss the bus','by bus'] },
{ w:'train', uk:'treɪn', us:'treɪn', pos:'danh từ, động từ', senses:[{ vi:'tàu hoả', ex:['It takes two hours by train.','Đi tàu mất hai tiếng.'] },{ vi:'huấn luyện, tập luyện', ex:['She trains every day.','Cô ấy tập luyện mỗi ngày.'] }], family:[['training','danh từ','sự đào tạo'],['trainer','danh từ','huấn luyện viên']] },
{ w:'capital', uk:'ˈkæpɪtl', us:'ˈkæpɪtl', pos:'danh từ', senses:[{ vi:'thủ đô', ex:['Hanoi is the capital of Vietnam.','Hà Nội là thủ đô của Việt Nam.'] },{ vi:'chữ in hoa; vốn', ex:['Write your name in capitals.','Viết tên bằng chữ in hoa.'] }] },
{ w:'same', uk:'seɪm', us:'seɪm', pos:'tính từ', senses:[{ vi:'giống nhau, cùng một', ex:['We are in the same class.','Chúng tôi học cùng lớp.'] }], note:'Luôn đi với «the»: the same as… Không nói «a same».' },
{ w:'still', uk:'stɪl', us:'stɪl', pos:'trạng từ, tính từ', senses:[{ vi:'vẫn còn', ex:['She is still at school.','Em ấy vẫn đang đi học.'] },{ vi:'yên lặng, tĩnh (tính từ)', ex:['Sit still!','Ngồi yên nào!'] }], note:'still (vẫn còn) · yet (chưa, trong câu hỏi và phủ định) · already (đã rồi).' },
{ w:'only', uk:'ˈəʊnli', us:'ˈoʊnli', pos:'trạng từ, tính từ', senses:[{ vi:'chỉ, duy nhất', ex:['The university is only ten minutes away.','Trường chỉ cách mười phút.'] }], note:'Vị trí của only đổi nghĩa cả câu: I only saw her ≠ Only I saw her.' }

];

/* ------------------------------------------------------------
   Bảng tra: gộp từ vựng trong khoá học với các mục từ chi tiết
   ------------------------------------------------------------ */
const EN_LOOKUP = {};
(function(){
  if (typeof COURSE_EN !== 'undefined' && COURSE_EN.lessons){
    COURSE_EN.lessons.forEach(l => (l.vocab || []).forEach(w => {
      const k = String(w.en).toLowerCase();
      if (!EN_LOOKUP[k]) EN_LOOKUP[k] = { w:w.en, uk:w.uk, us:w.us, pos:w.pos, senses:[{ vi:w.vi, note:w.note || '' }], src:'course' };
    }));
  }
  EN_DICT.forEach(e => {
    const k = String(e.w).toLowerCase();
    EN_LOOKUP[k] = Object.assign({}, EN_LOOKUP[k] || {}, e, { src:'dict' });
  });
})();

if (typeof module !== 'undefined'){ module.exports = { EN_DICT, EN_LOOKUP }; }
