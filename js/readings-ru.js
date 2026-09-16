/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG NGA (mở rộng)
   ------------------------------------------------------------
   Mức A1 · A2 · B1. Thân bài viết không dấu nhấn; dấu nhấn (U+0301)
   chỉ đặt trong phần "keys" để người học biết trọng âm.
   Đẩy thêm vào mảng READINGS của js/readings.js (nạp SAU tệp đó).
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'ru', lv:'a1', mins:3, cat:'Mua sắm', title:'В магазине', vi:'Trong cửa hàng',
  intro:'A1. Chùm từ trọng tâm: mua đồ, giá tiền, cách hỏi lịch sự.',
  text:[
    'Утром я иду в магазин. Магазин находится рядом с домом.',
    'Я покупаю хлеб, молоко и два яблока. Всё стоит сто пятьдесят рублей.',
    'Продавщица спрашивает: «Вам пакет нужен?» Я отвечаю: «Нет, спасибо, у меня есть сумка».',
    'Дома я делаю завтрак. Хлеб очень свежий и вкусный.'
  ],
  tr:[
    'Buổi sáng tôi đi ra cửa hàng. Cửa hàng nằm ngay cạnh nhà.',
    'Tôi mua bánh mì, sữa và hai quả táo. Tất cả là một trăm năm mươi rúp.',
    'Cô bán hàng hỏi: “Anh có cần túi không?” Tôi trả lời: “Không, cảm ơn, tôi có túi rồi.”',
    'Ở nhà tôi làm bữa sáng. Bánh mì rất tươi và ngon.'
  ],
  keys:[
    { w:'магази́н', r:'magazín', vi:'cửa hàng' },
    { w:'ря́дом с', r:'ryádom s', vi:'bên cạnh' },
    { w:'покупа́ть', r:'pokupát\'', vi:'mua' },
    { w:'сто́ить', r:'stóit\'', vi:'có giá là' },
    { w:'продавщи́ца', r:'prodavshchítsa', vi:'nữ nhân viên bán hàng' },
    { w:'паке́т', r:'pakét', vi:'túi ni lông' },
    { w:'су́мка', r:'súmka', vi:'túi xách' },
    { w:'све́жий', r:'svézhiy', vi:'tươi' }
  ],
  qs:[
    { q:'Người viết mua gì?', o:['Bánh mì, sữa, táo','Thịt và cá','Trà và đường','Rau'], c:0, e:'Я покупаю хлеб, молоко и два яблока.' },
    { q:'Hết bao nhiêu tiền?', o:['100 rúp','150 rúp','200 rúp','250 rúp'], c:1, e:'Всё стоит сто пятьдесят рублей.' },
    { q:'Vì sao không lấy túi?', o:['Đắt quá','Đã có túi xách','Mua ít','Quên'], c:1, e:'у меня есть сумка.' }
  ],
  after:'Viết 5 câu đi mua đồ, dùng покупать · стоить · рядом с.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Gia đình', title:'Моя семья', vi:'Gia đình tôi',
  intro:'A1. Chùm từ trọng tâm: thành viên gia đình, nghề nghiệp, tuổi.',
  text:[
    'У меня большая семья. Мы живём в Ханое.',
    'Мой отец — врач. Он работает в больнице. Моя мама — учительница.',
    'У меня есть младший брат. Ему пятнадцать лет. Он учится в школе.',
    'По воскресеньям мы обедаем вместе. Мама готовит суп, а я мою посуду.'
  ],
  tr:[
    'Tôi có một gia đình đông. Chúng tôi sống ở Hà Nội.',
    'Bố tôi là bác sĩ. Bố làm ở bệnh viện. Mẹ tôi là giáo viên.',
    'Tôi có một em trai. Em ấy mười lăm tuổi. Em đang học phổ thông.',
    'Chủ nhật hằng tuần cả nhà ăn trưa cùng nhau. Mẹ nấu canh, còn tôi rửa bát.'
  ],
  keys:[
    { w:'семья́', r:'sem\'yá', vi:'gia đình' },
    { w:'оте́ц', r:'otéts', vi:'cha' },
    { w:'больни́ца', r:'bol\'nítsa', vi:'bệnh viện' },
    { w:'учи́тельница', r:'uchítel\'nitsa', vi:'cô giáo' },
    { w:'мла́дший', r:'mládshiy', vi:'nhỏ tuổi hơn' },
    { w:'обе́дать', r:'obédat\'', vi:'ăn trưa' },
    { w:'гото́вить', r:'gotóvit\'', vi:'nấu ăn' },
    { w:'мыть посу́ду', r:'myt\' posúdu', vi:'rửa bát' }
  ],
  qs:[
    { q:'Bố làm nghề gì?', o:['Giáo viên','Bác sĩ','Kỹ sư','Lái xe'], c:1, e:'Мой отец — врач.' },
    { q:'Em trai bao nhiêu tuổi?', o:['12','15','18','20'], c:1, e:'Ему пятнадцать лет.' },
    { q:'Chủ nhật cả nhà làm gì?', o:['Đi chơi','Ăn trưa cùng nhau','Dọn nhà','Về quê'], c:1, e:'По воскресеньям мы обедаем вместе.' }
  ],
  after:'Giới thiệu gia đình bạn bằng 5 câu, dùng У меня есть… và Мой/Моя… — …' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Погода сегодня', vi:'Thời tiết hôm nay',
  intro:'A1. Chùm từ trọng tâm: thời tiết, mùa, quần áo.',
  text:[
    'Сегодня холодно. На улице минус пять градусов.',
    'Идёт снег. Дети играют во дворе и смеются.',
    'Я надеваю тёплую куртку, шапку и перчатки. Потом я иду на работу.',
    'Зимой в России очень красиво, но я скучаю по солнцу Вьетнама.'
  ],
  tr:[
    'Hôm nay trời lạnh. Ngoài trời âm năm độ.',
    'Tuyết đang rơi. Lũ trẻ chơi ngoài sân và cười vang.',
    'Tôi mặc áo khoác ấm, đội mũ len và đeo găng tay. Rồi tôi đi làm.',
    'Mùa đông ở Nga rất đẹp, nhưng tôi nhớ nắng Việt Nam.'
  ],
  keys:[
    { w:'хо́лодно', r:'khólodno', vi:'trời lạnh' },
    { w:'гра́дус', r:'grádus', vi:'độ' },
    { w:'снег', r:'sneg', vi:'tuyết' },
    { w:'двор', r:'dvor', vi:'sân' },
    { w:'надева́ть', r:'nadevát\'', vi:'mặc vào' },
    { w:'ку́ртка', r:'kúrtka', vi:'áo khoác' },
    { w:'перча́тки', r:'perchátki', vi:'găng tay' },
    { w:'скуча́ть по', r:'skuchát\' po', vi:'nhớ (ai/cái gì)' }
  ],
  qs:[
    { q:'Ngoài trời bao nhiêu độ?', o:['0','−5','−10','+5'], c:1, e:'минус пять градусов.' },
    { q:'Lũ trẻ làm gì?', o:['Ở trong nhà','Chơi ngoài sân','Đi học','Ngủ'], c:1, e:'Дети играют во дворе.' },
    { q:'Người viết nhớ gì?', o:['Gia đình','Nắng Việt Nam','Món ăn quê','Bạn bè'], c:1, e:'я скучаю по солнцу Вьетнама.' }
  ],
  after:'Tả thời tiết hôm nay bằng 5 câu, dùng Идёт снег/дождь và надевать.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Ẩm thực', title:'В кафе', vi:'Trong quán cà phê',
  intro:'A1. Chùm từ trọng tâm: gọi món, hoá đơn, lịch sự.',
  text:[
    'После работы я иду в кафе. Там тихо и тепло.',
    'Официант даёт мне меню. Я заказываю чай с лимоном и пирог.',
    'Чай стоит восемьдесят рублей, пирог — сто двадцать.',
    'Я сижу у окна и читаю книгу. Это моё любимое место в городе.'
  ],
  tr:[
    'Sau giờ làm tôi đi quán cà phê. Ở đó yên tĩnh và ấm áp.',
    'Bồi bàn đưa tôi thực đơn. Tôi gọi trà chanh và một miếng bánh.',
    'Trà giá tám mươi rúp, bánh một trăm hai mươi.',
    'Tôi ngồi cạnh cửa sổ và đọc sách. Đây là chỗ tôi thích nhất trong thành phố.'
  ],
  keys:[
    { w:'по́сле', r:'pósle', vi:'sau khi' },
    { w:'ти́хо', r:'tíkho', vi:'yên tĩnh' },
    { w:'официа́нт', r:'ofitsiánt', vi:'bồi bàn' },
    { w:'меню́', r:'menyú', vi:'thực đơn' },
    { w:'зака́зывать', r:'zakázyvat\'', vi:'gọi món, đặt' },
    { w:'пиро́г', r:'piróg', vi:'bánh nướng' },
    { w:'у окна́', r:'u okná', vi:'cạnh cửa sổ' },
    { w:'люби́мый', r:'lyubímyy', vi:'yêu thích' }
  ],
  qs:[
    { q:'Người viết gọi gì?', o:['Cà phê và bánh','Trà chanh và bánh','Nước cam','Súp'], c:1, e:'Я заказываю чай с лимоном и пирог.' },
    { q:'Bánh giá bao nhiêu?', o:['80 rúp','100 rúp','120 rúp','150 rúp'], c:2, e:'пирог — сто двадцать.' },
    { q:'Người viết ngồi ở đâu?', o:['Cạnh cửa ra vào','Cạnh cửa sổ','Ở quầy','Ngoài sân'], c:1, e:'Я сижу у окна.' }
  ],
  after:'Viết 5 câu gọi món ở quán, dùng заказывать · стоить · любимый.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Моя комната', vi:'Căn phòng của tôi',
  intro:'A1. Chùm từ trọng tâm: đồ đạc, giới từ chỉ vị trí.',
  text:[
    'Моя комната небольшая, но светлая. Окно выходит во двор.',
    'Слева стоит кровать, справа — письменный стол. На столе лежат книги и ноутбук.',
    'На стене висит карта России. Я смотрю на неё каждый день.',
    'Вечером я включаю лампу и занимаюсь. В комнате тихо, и я хорошо работаю.'
  ],
  tr:[
    'Phòng tôi không lớn nhưng sáng. Cửa sổ nhìn ra sân.',
    'Bên trái là cái giường, bên phải là bàn viết. Trên bàn có sách và máy tính xách tay.',
    'Trên tường treo bản đồ nước Nga. Ngày nào tôi cũng nhìn nó.',
    'Buổi tối tôi bật đèn bàn và học. Trong phòng yên tĩnh, tôi làm việc rất tốt.'
  ],
  keys:[
    { w:'све́тлый', r:'svétlyy', vi:'sáng sủa' },
    { w:'сле́ва', r:'sléva', vi:'bên trái' },
    { w:'спра́ва', r:'správa', vi:'bên phải' },
    { w:'крова́ть', r:'krovát\'', vi:'giường' },
    { w:'лежа́ть', r:'lezhát\'', vi:'nằm, đặt nằm' },
    { w:'висе́ть', r:'visét\'', vi:'treo' },
    { w:'стена́', r:'stená', vi:'bức tường' },
    { w:'занима́ться', r:'zanimát\'sya', vi:'học bài' }
  ],
  qs:[
    { q:'Cửa sổ nhìn ra đâu?', o:['Ra phố','Ra sân','Ra vườn','Ra hồ'], c:1, e:'Окно выходит во двор.' },
    { q:'Bên phải có gì?', o:['Giường','Bàn viết','Tủ','Ghế'], c:1, e:'справа — письменный стол.' },
    { q:'Trên tường treo gì?', o:['Tranh','Bản đồ nước Nga','Đồng hồ','Ảnh'], c:1, e:'На стене висит карта России.' }
  ],
  after:'Tả phòng bạn bằng 5 câu, dùng слева/справа · на столе · висит/лежит/стоит.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Giao thông', title:'В метро', vi:'Trong tàu điện ngầm',
  intro:'A1. Chùm từ trọng tâm: đi tàu, đổi tuyến, hỏi đường.',
  text:[
    'Я еду на работу на метро. Это быстро и недорого.',
    'Утром в вагоне много людей. Иногда я стою всю дорогу.',
    'Мне нужно сделать пересадку на станции «Библиотека». Там всегда шумно.',
    'Я слушаю музыку и смотрю в окно. Через двадцать минут я на месте.'
  ],
  tr:[
    'Tôi đi làm bằng tàu điện ngầm. Vừa nhanh vừa rẻ.',
    'Buổi sáng trong toa rất đông người. Đôi khi tôi đứng suốt chặng đường.',
    'Tôi phải đổi tuyến ở ga “Thư viện”. Chỗ đó lúc nào cũng ồn.',
    'Tôi nghe nhạc và nhìn ra cửa. Hai mươi phút sau là tới nơi.'
  ],
  keys:[
    { w:'метро́', r:'metró', vi:'tàu điện ngầm' },
    { w:'бы́стро', r:'býstro', vi:'nhanh' },
    { w:'ваго́н', r:'vagón', vi:'toa tàu' },
    { w:'стоя́ть', r:'stoyát\'', vi:'đứng' },
    { w:'переса́дка', r:'peresádka', vi:'việc đổi tuyến' },
    { w:'ста́нция', r:'stántsiya', vi:'ga, trạm' },
    { w:'шу́мно', r:'shúmno', vi:'ồn ào' },
    { w:'на ме́сте', r:'na méste', vi:'đến nơi' }
  ],
  qs:[
    { q:'Người viết đi làm bằng gì?', o:['Xe buýt','Tàu điện ngầm','Đi bộ','Taxi'], c:1, e:'Я еду на работу на метро.' },
    { q:'Đổi tuyến ở ga nào?', o:['«Парк»','«Библиотека»','«Центр»','«Университет»'], c:1, e:'пересадку на станции «Библиотека».' },
    { q:'Mất bao lâu?', o:['10 phút','20 phút','30 phút','1 tiếng'], c:1, e:'Через двадцать минут я на месте.' }
  ],
  after:'Viết 5 câu về đường đi làm, dùng ехать на … · нужно · через + thời gian.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Học tập', title:'Я учу русский язык', vi:'Tôi học tiếng Nga',
  intro:'A1. Chùm từ trọng tâm: học ngoại ngữ, khó khăn, tiến bộ.',
  text:[
    'Я изучаю русский язык два года. Сначала было очень трудно.',
    'Алфавит я выучил за неделю. Но падежи — это другое дело.',
    'Каждый день я читаю вслух десять минут и пишу пять предложений.',
    'Теперь я понимаю простые тексты. Я говорю медленно, но говорю.'
  ],
  tr:[
    'Tôi học tiếng Nga được hai năm. Lúc đầu rất khó.',
    'Bảng chữ cái tôi thuộc trong một tuần. Nhưng các cách thì lại là chuyện khác.',
    'Mỗi ngày tôi đọc to mười phút và viết năm câu.',
    'Bây giờ tôi hiểu được những bài đơn giản. Tôi nói chậm, nhưng tôi nói được.'
  ],
  keys:[
    { w:'изуча́ть', r:'izuchát\'', vi:'nghiên cứu, học' },
    { w:'снача́ла', r:'snachála', vi:'lúc đầu' },
    { w:'тру́дно', r:'trúdno', vi:'khó' },
    { w:'алфави́т', r:'alfavít', vi:'bảng chữ cái' },
    { w:'вы́учить', r:'výuchit\'', vi:'học thuộc' },
    { w:'паде́ж', r:'padézh', vi:'cách (ngữ pháp)' },
    { w:'вслух', r:'vslukh', vi:'to thành tiếng' },
    { w:'предложе́ние', r:'predlozhéniye', vi:'câu' }
  ],
  qs:[
    { q:'Học tiếng Nga bao lâu rồi?', o:['Một năm','Hai năm','Ba năm','Sáu tháng'], c:1, e:'Я изучаю русский язык два года.' },
    { q:'Bảng chữ cái học mất bao lâu?', o:['Một ngày','Một tuần','Một tháng','Ba tháng'], c:1, e:'Алфавит я выучил за неделю.' },
    { q:'Mỗi ngày làm gì?', o:['Xem phim','Đọc to 10 phút, viết 5 câu','Học 50 từ','Nghe đài'], c:1, e:'я читаю вслух десять минут и пишу пять предложений.' }
  ],
  after:'Viết 5 câu về cách bạn học tiếng, dùng изучать · трудно · каждый день.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Sức khoẻ', title:'В аптеке', vi:'Trong hiệu thuốc',
  intro:'A1. Chùm từ trọng tâm: ốm, mua thuốc, lời khuyên.',
  text:[
    'Вчера у меня болела голова. Ещё был небольшой кашель.',
    'Я пошёл в аптеку рядом с домом. Аптекарь спросил: «Что у вас болит?»',
    'Он дал мне таблетки и сказал пить чай с мёдом.',
    'Сегодня мне лучше. Я думаю, завтра я пойду на работу.'
  ],
  tr:[
    'Hôm qua tôi đau đầu. Lại còn ho nhẹ nữa.',
    'Tôi đi đến hiệu thuốc gần nhà. Dược sĩ hỏi: “Anh đau chỗ nào?”',
    'Anh ấy đưa tôi mấy viên thuốc và dặn uống trà mật ong.',
    'Hôm nay tôi thấy đỡ hơn. Chắc mai tôi đi làm được.'
  ],
  keys:[
    { w:'боле́ть', r:'bolét\'', vi:'đau, ốm' },
    { w:'голова́', r:'golová', vi:'đầu' },
    { w:'ка́шель', r:'káshel\'', vi:'ho' },
    { w:'апте́ка', r:'aptéka', vi:'hiệu thuốc' },
    { w:'апте́карь', r:'aptékar\'', vi:'dược sĩ' },
    { w:'табле́тки', r:'tablétki', vi:'viên thuốc' },
    { w:'мёд', r:'myod', vi:'mật ong' },
    { w:'лу́чше', r:'lúchshe', vi:'đỡ hơn, tốt hơn' }
  ],
  qs:[
    { q:'Hôm qua người viết bị gì?', o:['Đau bụng','Đau đầu và ho nhẹ','Sốt cao','Đau răng'], c:1, e:'у меня болела голова. Ещё был небольшой кашель.' },
    { q:'Dược sĩ dặn gì?', o:['Đi khám','Uống trà mật ong','Nghỉ ba ngày','Uống nhiều nước'], c:1, e:'сказал пить чай с мёдом.' },
    { q:'Hôm nay thế nào?', o:['Tệ hơn','Đỡ hơn','Như cũ','Phải nhập viện'], c:1, e:'Сегодня мне лучше.' }
  ],
  after:'Viết 5 câu ở hiệu thuốc, dùng у меня болит… · дать · лучше.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'На почте', vi:'Ở bưu điện',
  intro:'A1. Chùm từ trọng tâm: gửi bưu kiện, cân, thời gian giao.',
  text:[
    'Я хочу отправить посылку домой, во Вьетнам.',
    'На почте я беру бланк и пишу адрес. Посылка весит три килограмма.',
    'Сотрудница говорит: «Самолётом — две недели, но дорого».',
    'Я выбираю самолёт. Мама ждёт подарок к празднику.'
  ],
  tr:[
    'Tôi muốn gửi một kiện hàng về nhà, về Việt Nam.',
    'Ở bưu điện tôi lấy tờ khai và viết địa chỉ. Kiện hàng nặng ba ki-lô.',
    'Nhân viên nói: “Đi máy bay thì hai tuần, nhưng đắt.”',
    'Tôi chọn máy bay. Mẹ đang đợi quà cho dịp lễ.'
  ],
  keys:[
    { w:'отпра́вить', r:'otprávit\'', vi:'gửi đi' },
    { w:'посы́лка', r:'posýlka', vi:'bưu kiện' },
    { w:'бланк', r:'blank', vi:'tờ khai, mẫu' },
    { w:'а́дрес', r:'ádres', vi:'địa chỉ' },
    { w:'ве́сить', r:'vésit\'', vi:'nặng bao nhiêu' },
    { w:'сотру́дница', r:'sotrúdnitsa', vi:'nữ nhân viên' },
    { w:'самолётом', r:'samolyótom', vi:'bằng máy bay' },
    { w:'пра́здник', r:'prázdnik', vi:'ngày lễ' }
  ],
  qs:[
    { q:'Kiện hàng nặng bao nhiêu?', o:['1 kg','2 kg','3 kg','5 kg'], c:2, e:'Посылка весит три килограмма.' },
    { q:'Gửi máy bay mất bao lâu?', o:['Một tuần','Hai tuần','Một tháng','Hai tháng'], c:1, e:'Самолётом — две недели.' },
    { q:'Vì sao chọn máy bay?', o:['Rẻ hơn','Mẹ đang đợi quà dịp lễ','An toàn hơn','Không có lựa chọn khác'], c:1, e:'Мама ждёт подарок к празднику.' }
  ],
  after:'Viết 5 câu gửi đồ về nhà, dùng отправить · весить · выбирать.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Мой друг Нам', vi:'Bạn tôi tên Nam',
  intro:'A1. Chùm từ trọng tâm: miêu tả người, sở thích, tính cách.',
  text:[
    'Моего лучшего друга зовут Нам. Мы вместе учились в школе.',
    'Он высокий и весёлый. Он всегда шутит, даже когда устал.',
    'Нам любит футбол. По субботам он играет в парке с друзьями.',
    'Сейчас он живёт в другом городе. Мы говорим по телефону каждую неделю.'
  ],
  tr:[
    'Người bạn thân nhất của tôi tên là Nam. Chúng tôi học chung phổ thông.',
    'Cậu ấy cao và vui tính. Lúc nào cũng đùa, ngay cả khi mệt.',
    'Nam thích bóng đá. Thứ Bảy nào cậu ấy cũng đá bóng trong công viên với bạn bè.',
    'Bây giờ cậu ấy sống ở thành phố khác. Chúng tôi gọi điện cho nhau mỗi tuần.'
  ],
  keys:[
    { w:'лу́чший', r:'lúchshiy', vi:'tốt nhất, thân nhất' },
    { w:'вме́сте', r:'vméste', vi:'cùng nhau' },
    { w:'высо́кий', r:'vysókiy', vi:'cao' },
    { w:'весёлый', r:'vesyólyy', vi:'vui tính' },
    { w:'шути́ть', r:'shutít\'', vi:'đùa' },
    { w:'уста́ть', r:'ustát\'', vi:'mệt' },
    { w:'друго́й', r:'drugóy', vi:'khác' },
    { w:'ка́ждую неде́лю', r:'kázhduyu nedélyu', vi:'mỗi tuần' }
  ],
  qs:[
    { q:'Họ quen nhau từ đâu?', o:['Đại học','Trường phổ thông','Chỗ làm','Hàng xóm'], c:1, e:'Мы вместе учились в школе.' },
    { q:'Nam thích gì?', o:['Bóng rổ','Bóng đá','Bơi','Cờ vua'], c:1, e:'Нам любит футбол.' },
    { q:'Bây giờ họ liên lạc thế nào?', o:['Gặp hằng ngày','Gọi điện mỗi tuần','Viết thư','Không liên lạc'], c:1, e:'Мы говорим по телефону каждую неделю.' }
  ],
  after:'Tả một người bạn bằng 5 câu, dùng Его зовут… · любит · каждую неделю.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Выходной день', vi:'Ngày nghỉ',
  intro:'A1. Chùm từ trọng tâm: cuối tuần, việc nhà, nghỉ ngơi.',
  text:[
    'В воскресенье я не работаю. Я встаю поздно, в девять часов.',
    'Сначала я убираю квартиру, потом иду в магазин.',
    'Днём я готовлю обед и звоню родителям. Мы говорим полчаса.',
    'Вечером я смотрю фильм. Выходной короткий, но нужный.'
  ],
  tr:[
    'Chủ nhật tôi không đi làm. Tôi dậy muộn, lúc chín giờ.',
    'Trước tiên tôi dọn căn hộ, sau đó đi ra cửa hàng.',
    'Ban ngày tôi nấu bữa trưa và gọi điện cho bố mẹ. Chúng tôi nói chuyện nửa tiếng.',
    'Buổi tối tôi xem phim. Ngày nghỉ ngắn thật, nhưng cần thiết.'
  ],
  keys:[
    { w:'выходно́й', r:'vykhodnóy', vi:'ngày nghỉ' },
    { w:'по́здно', r:'pózdno', vi:'muộn' },
    { w:'убира́ть', r:'ubirát\'', vi:'dọn dẹp' },
    { w:'кварти́ра', r:'kvartíra', vi:'căn hộ' },
    { w:'звони́ть', r:'zvonít\'', vi:'gọi điện' },
    { w:'роди́тели', r:'rodíteli', vi:'bố mẹ' },
    { w:'полчаса́', r:'polchasá', vi:'nửa tiếng' },
    { w:'ну́жный', r:'núzhnyy', vi:'cần thiết' }
  ],
  qs:[
    { q:'Chủ nhật dậy lúc mấy giờ?', o:['7h','8h','9h','10h'], c:2, e:'Я встаю поздно, в девять часов.' },
    { q:'Việc đầu tiên là gì?', o:['Đi chợ','Dọn căn hộ','Nấu ăn','Gọi điện'], c:1, e:'Сначала я убираю квартиру.' },
    { q:'Nói chuyện với bố mẹ bao lâu?', o:['10 phút','Nửa tiếng','Một tiếng','Hai tiếng'], c:1, e:'Мы говорим полчаса.' }
  ],
  after:'Viết 5 câu về ngày nghỉ của bạn, dùng сначала · потом · вечером.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Học tập', title:'В университете', vi:'Ở trường đại học',
  intro:'A1. Chùm từ trọng tâm: lớp học, thầy cô, thời khoá biểu.',
  text:[
    'Я учусь на втором курсе. Занятия начинаются в восемь тридцать.',
    'Сегодня у нас три пары: русский язык, история и математика.',
    'Наш преподаватель по русскому говорит медленно и понятно.',
    'После занятий я иду в библиотеку. Там я делаю домашнее задание.'
  ],
  tr:[
    'Tôi học năm thứ hai. Giờ học bắt đầu lúc tám giờ ba mươi.',
    'Hôm nay chúng tôi có ba tiết: tiếng Nga, lịch sử và toán.',
    'Thầy dạy tiếng Nga của chúng tôi nói chậm và dễ hiểu.',
    'Sau giờ học tôi đến thư viện. Ở đó tôi làm bài tập về nhà.'
  ],
  keys:[
    { w:'курс', r:'kurs', vi:'năm học (đại học)' },
    { w:'заня́тия', r:'zanyátiya', vi:'giờ học' },
    { w:'начина́ться', r:'nachinát\'sya', vi:'bắt đầu' },
    { w:'па́ра', r:'pára', vi:'tiết học đôi' },
    { w:'исто́рия', r:'istóriya', vi:'lịch sử' },
    { w:'преподава́тель', r:'prepodavátel\'', vi:'giảng viên' },
    { w:'поня́тно', r:'ponyátno', vi:'dễ hiểu' },
    { w:'библиоте́ка', r:'bibliotéka', vi:'thư viện' }
  ],
  qs:[
    { q:'Người viết học năm mấy?', o:['Năm nhất','Năm hai','Năm ba','Năm tư'], c:1, e:'Я учусь на втором курсе.' },
    { q:'Hôm nay có mấy tiết?', o:['Hai','Ba','Bốn','Năm'], c:1, e:'у нас три пары.' },
    { q:'Sau giờ học đi đâu?', o:['Về nhà','Thư viện','Căng tin','Công viên'], c:1, e:'я иду в библиотеку.' }
  ],
  after:'Viết 5 câu về một ngày học, dùng начинаться · у нас … пары · после занятий.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Мой кот', vi:'Con mèo của tôi',
  intro:'A1. Chùm từ trọng tâm: thú cưng, thói quen, miêu tả.',
  text:[
    'У меня есть кот. Его зовут Барсик. Ему четыре года.',
    'Он серый, с белыми лапами. Он очень любит спать на окне.',
    'Утром Барсик будит меня. Он садится на грудь и громко мяукает.',
    'Когда мне грустно, он приходит и ложится рядом. Он знает всё без слов.'
  ],
  tr:[
    'Tôi có một con mèo. Tên nó là Barsik. Nó bốn tuổi.',
    'Nó màu xám, chân trắng. Nó rất thích ngủ trên bệ cửa sổ.',
    'Buổi sáng Barsik đánh thức tôi. Nó ngồi lên ngực tôi và kêu meo rất to.',
    'Khi tôi buồn, nó đến nằm cạnh. Nó biết hết mà chẳng cần lời nào.'
  ],
  keys:[
    { w:'кот', r:'kot', vi:'mèo đực' },
    { w:'се́рый', r:'séryy', vi:'màu xám' },
    { w:'ла́па', r:'lápa', vi:'bàn chân (thú)' },
    { w:'буди́ть', r:'budít\'', vi:'đánh thức' },
    { w:'грудь', r:'grud\'', vi:'ngực' },
    { w:'мяу́кать', r:'myaúkat\'', vi:'kêu meo meo' },
    { w:'гру́стно', r:'grústno', vi:'buồn' },
    { w:'ложи́ться', r:'lozhít\'sya', vi:'nằm xuống' }
  ],
  qs:[
    { q:'Con mèo bao nhiêu tuổi?', o:['Hai','Ba','Bốn','Năm'], c:2, e:'Ему четыре года.' },
    { q:'Nó thích ngủ ở đâu?', o:['Trên giường','Trên bệ cửa sổ','Dưới bàn','Trên ghế'], c:1, e:'Он очень любит спать на окне.' },
    { q:'Khi người viết buồn thì sao?', o:['Nó bỏ đi','Nó đến nằm cạnh','Nó kêu to','Nó ngủ'], c:1, e:'он приходит и ложится рядом.' }
  ],
  after:'Tả con vật bạn nuôi bằng 5 câu, dùng У меня есть… · Его зовут… · когда…' },

{ lang:'ru', lv:'a1', mins:3, cat:'Ẩm thực', title:'Завтрак', vi:'Bữa sáng',
  intro:'A1. Chùm từ trọng tâm: đồ ăn sáng, thói quen, so sánh hai nước.',
  text:[
    'Во Вьетнаме на завтрак я ел суп фо. Это горячо и вкусно.',
    'В России утром часто едят кашу, бутерброд или яйца.',
    'Сначала мне было странно. Теперь я люблю гречневую кашу с маслом.',
    'Но по воскресеньям я всё равно варю фо. Это вкус дома.'
  ],
  tr:[
    'Ở Việt Nam bữa sáng tôi ăn phở. Vừa nóng vừa ngon.',
    'Ở Nga buổi sáng người ta hay ăn cháo đặc, bánh mì kẹp hoặc trứng.',
    'Lúc đầu tôi thấy lạ. Bây giờ tôi thích cháo kiều mạch với bơ.',
    'Nhưng chủ nhật thì tôi vẫn nấu phở. Đó là vị của nhà.'
  ],
  keys:[
    { w:'за́втрак', r:'závtrak', vi:'bữa sáng' },
    { w:'горячо́', r:'goryachó', vi:'nóng' },
    { w:'ка́ша', r:'kásha', vi:'cháo đặc' },
    { w:'бутербро́д', r:'buterbród', vi:'bánh mì kẹp' },
    { w:'стра́нно', r:'stránno', vi:'lạ lùng' },
    { w:'гре́чневый', r:'gréchnevyy', vi:'(thuộc) kiều mạch' },
    { w:'вари́ть', r:'varít\'', vi:'nấu, ninh' },
    { w:'вкус', r:'vkus', vi:'vị' }
  ],
  qs:[
    { q:'Ở Nga buổi sáng hay ăn gì?', o:['Phở','Cháo, bánh mì kẹp, trứng','Cơm','Mì'], c:1, e:'часто едят кашу, бутерброд или яйца.' },
    { q:'Bây giờ người viết thích món gì?', o:['Bánh mì kẹp','Cháo kiều mạch với bơ','Trứng ốp la','Trà'], c:1, e:'Теперь я люблю гречневую кашу с маслом.' },
    { q:'Chủ nhật người viết làm gì?', o:['Nhịn sáng','Nấu phở','Ra quán','Ăn cháo'], c:1, e:'по воскресеньям я всё равно варю фо.' }
  ],
  after:'So sánh bữa sáng hai nước bằng 5 câu, dùng сначала · теперь · всё равно.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Đời sống', title:'Соседи', vi:'Hàng xóm',
  intro:'A1. Chùm từ trọng tâm: hàng xóm, giúp đỡ, chào hỏi.',
  text:[
    'Я живу на пятом этаже. Мои соседи — пожилая пара.',
    'Каждое утро мы встречаемся в лифте и здороваемся.',
    'Однажды я забыл ключи. Соседка пригласила меня на чай.',
    'Теперь я помогаю им носить сумки. Это маленькое дело, но приятное.'
  ],
  tr:[
    'Tôi sống ở tầng năm. Hàng xóm của tôi là một cặp vợ chồng già.',
    'Sáng nào chúng tôi cũng gặp nhau trong thang máy và chào hỏi.',
    'Có lần tôi quên chìa khoá. Bà hàng xóm mời tôi vào uống trà.',
    'Bây giờ tôi giúp ông bà xách túi. Việc nhỏ thôi, nhưng dễ chịu.'
  ],
  keys:[
    { w:'сосе́д', r:'soséd', vi:'hàng xóm' },
    { w:'эта́ж', r:'etázh', vi:'tầng' },
    { w:'пожило́й', r:'pozhilóy', vi:'lớn tuổi' },
    { w:'лифт', r:'lift', vi:'thang máy' },
    { w:'здоро́ваться', r:'zdoróvat\'sya', vi:'chào hỏi' },
    { w:'одна́жды', r:'odnázhdy', vi:'có một lần' },
    { w:'пригласи́ть', r:'priglasít\'', vi:'mời' },
    { w:'носи́ть', r:'nosít\'', vi:'mang, xách' }
  ],
  qs:[
    { q:'Người viết sống tầng mấy?', o:['Ba','Bốn','Năm','Sáu'], c:2, e:'Я живу на пятом этаже.' },
    { q:'Họ gặp nhau ở đâu mỗi sáng?', o:['Ngoài sân','Trong thang máy','Ở cửa hàng','Trên phố'], c:1, e:'мы встречаемся в лифте.' },
    { q:'Bây giờ người viết làm gì?', o:['Nấu ăn cho họ','Giúp xách túi','Dọn hành lang','Trông nhà'], c:1, e:'я помогаю им носить сумки.' }
  ],
  after:'Viết 5 câu về hàng xóm, dùng каждое утро · однажды · помогать + Дат.' },

{ lang:'ru', lv:'a1', mins:3, cat:'Công việc', title:'Моя работа', vi:'Công việc của tôi',
  intro:'A1. Chùm từ trọng tâm: nơi làm việc, giờ giấc, đồng nghiệp.',
  text:[
    'Я работаю в маленькой фирме. Мы делаем сайты.',
    'Рабочий день начинается в девять и заканчивается в шесть.',
    'В офисе нас восемь человек. Все молодые, только директору сорок пять.',
    'В обед мы вместе пьём кофе и говорим о фильмах. Работа трудная, но коллеги хорошие.'
  ],
  tr:[
    'Tôi làm ở một công ty nhỏ. Chúng tôi làm website.',
    'Ngày làm việc bắt đầu lúc chín giờ và kết thúc lúc sáu giờ.',
    'Trong văn phòng có tám người. Ai cũng trẻ, chỉ có giám đốc là bốn mươi lăm.',
    'Giờ trưa chúng tôi cùng uống cà phê và nói chuyện phim. Công việc vất vả, nhưng đồng nghiệp thì tốt.'
  ],
  keys:[
    { w:'фи́рма', r:'fírma', vi:'công ty' },
    { w:'сайт', r:'sayt', vi:'trang web' },
    { w:'рабо́чий день', r:'rabóchiy den\'', vi:'ngày làm việc' },
    { w:'зака́нчиваться', r:'zakánchivat\'sya', vi:'kết thúc' },
    { w:'о́фис', r:'ófis', vi:'văn phòng' },
    { w:'молодо́й', r:'molodóy', vi:'trẻ' },
    { w:'дире́ктор', r:'diréktor', vi:'giám đốc' },
    { w:'колле́га', r:'kolléga', vi:'đồng nghiệp' }
  ],
  qs:[
    { q:'Công ty làm gì?', o:['Bán hàng','Làm website','Dạy học','Xây dựng'], c:1, e:'Мы делаем сайты.' },
    { q:'Giờ làm là mấy giờ đến mấy giờ?', o:['8–5','9–6','10–7','8–6'], c:1, e:'начинается в девять и заканчивается в шесть.' },
    { q:'Giám đốc bao nhiêu tuổi?', o:['35','40','45','50'], c:2, e:'только директору сорок пять.' }
  ],
  after:'Viết 5 câu về công việc của bạn, dùng работать в… · начинаться/заканчиваться.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Đời sống', title:'Первый снег', vi:'Tuyết đầu mùa',
  intro:'A2. Chùm từ trọng tâm: mùa đông đầu tiên, cảm xúc, thực tế.',
  text:[
    'Я никогда не видел снега, пока не приехал в Россию.',
    'В ноябре, рано утром, я открыл штору — и весь двор был белым. Я стоял у окна минут десять.',
    'Я сразу вышел на улицу без шапки. Через пять минут я понял свою ошибку: уши болели от холода.',
    'Теперь снег для меня не чудо, а работа: надо чистить дорожку. Но каждый первый снег я всё равно фотографирую.'
  ],
  tr:[
    'Tôi chưa từng thấy tuyết cho đến khi sang Nga.',
    'Tháng Mười một, sáng sớm, tôi kéo rèm ra — cả cái sân trắng xoá. Tôi đứng bên cửa sổ chừng mười phút.',
    'Tôi lao ngay ra ngoài mà không đội mũ. Năm phút sau tôi hiểu ra sai lầm của mình: tai buốt vì lạnh.',
    'Giờ tuyết với tôi không còn là phép màu mà là việc phải làm: phải xúc lối đi. Nhưng trận tuyết đầu mùa nào tôi cũng vẫn chụp ảnh.'
  ],
  keys:[
    { w:'никогда́ не', r:'nikogdá ne', vi:'chưa bao giờ' },
    { w:'пока́ не', r:'poká ne', vi:'cho đến khi' },
    { w:'што́ра', r:'shtóra', vi:'rèm cửa' },
    { w:'сра́зу', r:'srázu', vi:'ngay lập tức' },
    { w:'оши́бка', r:'oshíbka', vi:'sai lầm' },
    { w:'у́ши', r:'úshi', vi:'tai' },
    { w:'чу́до', r:'chúdo', vi:'phép màu' },
    { w:'чи́стить', r:'chístit\'', vi:'dọn, cào sạch' }
  ],
  qs:[
    { q:'Người viết thấy tuyết lần đầu khi nào?', o:['Tháng Chín','Tháng Mười một','Tháng Một','Tháng Ba'], c:1, e:'В ноябре, рано утром…' },
    { q:'Sai lầm là gì?', o:['Ra ngoài quá muộn','Ra ngoài không đội mũ','Đi giày mỏng','Không mang găng'], c:1, e:'вышел на улицу без шапки… уши болели.' },
    { q:'Bây giờ tuyết nghĩa là gì với người viết?', o:['Vẫn là phép màu','Là việc phải làm, phải xúc lối đi','Là nỗi sợ','Không quan tâm'], c:1, e:'не чудо, а работа: надо чистить дорожку.' }
  ],
  after:'Viết 6 câu về lần đầu gặp một hiện tượng lạ, dùng никогда не · пока не · сразу.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Du lịch', title:'Поездка в Петербург', vi:'Chuyến đi Saint Petersburg',
  intro:'A2. Chùm từ trọng tâm: tàu đêm, thành phố, ấn tượng.',
  text:[
    'На майские праздники мы с другом поехали в Петербург на ночном поезде.',
    'Билеты мы купили за месяц, поэтому было недорого. В вагоне мы пили чай и почти не спали.',
    'Утром город встретил нас дождём. Но даже под дождём набережная была красивой.',
    'За два дня мы прошли двадцать километров пешком. Ноги болели, но никто не жалел.'
  ],
  tr:[
    'Dịp lễ tháng Năm, tôi và bạn đi Saint Petersburg bằng chuyến tàu đêm.',
    'Vé chúng tôi mua trước một tháng nên không đắt. Trên toa chúng tôi uống trà và gần như không ngủ.',
    'Buổi sáng thành phố đón chúng tôi bằng cơn mưa. Nhưng ngay cả dưới mưa, bờ kè vẫn rất đẹp.',
    'Trong hai ngày chúng tôi đi bộ hai mươi cây số. Chân đau nhừ, nhưng chẳng ai tiếc cả.'
  ],
  keys:[
    { w:'пое́здка', r:'poyézdka', vi:'chuyến đi' },
    { w:'ночно́й', r:'nochnóy', vi:'ban đêm' },
    { w:'по́езд', r:'póyezd', vi:'tàu hoả' },
    { w:'биле́т', r:'bilét', vi:'vé' },
    { w:'поэ́тому', r:'poétomu', vi:'vì thế' },
    { w:'встре́тить', r:'vstrétit\'', vi:'đón, gặp' },
    { w:'на́бережная', r:'náberezhnaya', vi:'bờ kè' },
    { w:'жале́ть', r:'zhalét\'', vi:'tiếc' }
  ],
  qs:[
    { q:'Họ đi bằng gì?', o:['Máy bay','Tàu đêm','Ô tô','Xe buýt'], c:1, e:'поехали в Петербург на ночном поезде.' },
    { q:'Vì sao vé không đắt?', o:['Có giảm giá sinh viên','Mua trước một tháng','Đi ngày thường','Ghế xấu'], c:1, e:'Билеты мы купили за месяц, поэтому было недорого.' },
    { q:'Hai ngày đi bộ bao nhiêu?', o:['5 km','10 km','20 km','30 km'], c:2, e:'мы прошли двадцать километров пешком.' }
  ],
  after:'Kể một chuyến đi bằng 6 câu, dùng поэтому · даже · за + thời gian.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Văn hoá', title:'Русская баня', vi:'Nhà tắm hơi kiểu Nga',
  intro:'A2. Chùm từ trọng tâm: banya, phong tục, cảm giác.',
  text:[
    'Друзья пригласили меня в баню. Я не очень хотел, но согласился.',
    'В парилке было около восьмидесяти градусов. Через две минуты мне казалось, что я не могу дышать.',
    'Потом все выбежали на улицу и прыгнули в снег. Я сначала смотрел, а во второй раз прыгнул тоже.',
    'После бани мы пили чай и молчали. Я никогда не чувствовал себя таким лёгким.'
  ],
  tr:[
    'Bạn bè rủ tôi đi banya. Tôi không thích lắm nhưng vẫn đồng ý.',
    'Trong phòng xông khoảng tám mươi độ. Sau hai phút tôi có cảm giác mình không thở nổi.',
    'Rồi mọi người chạy ào ra ngoài và nhảy xuống tuyết. Lần đầu tôi chỉ đứng nhìn, lần thứ hai thì tôi cũng nhảy.',
    'Sau khi tắm xong chúng tôi uống trà và im lặng. Chưa bao giờ tôi thấy mình nhẹ nhõm đến thế.'
  ],
  keys:[
    { w:'ба́ня', r:'bánya', vi:'nhà tắm hơi Nga' },
    { w:'согласи́ться', r:'soglasít\'sya', vi:'đồng ý' },
    { w:'пари́лка', r:'parílka', vi:'phòng xông hơi' },
    { w:'каза́ться', r:'kazát\'sya', vi:'có vẻ như' },
    { w:'дыша́ть', r:'dyshát\'', vi:'thở' },
    { w:'вы́бежать', r:'výbezhat\'', vi:'chạy ào ra' },
    { w:'пры́гнуть', r:'prýgnut\'', vi:'nhảy' },
    { w:'молча́ть', r:'molchát\'', vi:'im lặng' }
  ],
  qs:[
    { q:'Trong phòng xông bao nhiêu độ?', o:['60','70','80','100'], c:2, e:'около восьмидесяти градусов.' },
    { q:'Lần đầu người viết làm gì khi mọi người nhảy xuống tuyết?', o:['Nhảy cùng','Chỉ đứng nhìn','Bỏ về','Chụp ảnh'], c:1, e:'Я сначала смотрел, а во второй раз прыгнул тоже.' },
    { q:'Sau khi tắm, cảm giác thế nào?', o:['Mệt lử','Nhẹ nhõm chưa từng thấy','Chóng mặt','Đói'], c:1, e:'Я никогда не чувствовал себя таким лёгким.' }
  ],
  after:'Kể một trải nghiệm văn hoá lạ bằng 6 câu, dùng казаться · сначала… а потом… · никогда не.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Đời sống', title:'Переезд', vi:'Chuyển nhà',
  intro:'A2. Chùm từ trọng tâm: dọn nhà, đồ đạc, bắt đầu lại.',
  text:[
    'В прошлом месяце я переехал в другую квартиру. Она дальше от центра, но дешевле.',
    'Вещей оказалось намного больше, чем я думал. Одних только книг было шесть коробок.',
    'Друзья помогли мне с мебелью. Мы работали весь день и закончили поздно вечером.',
    'Первую ночь на новом месте я почти не спал. Утром я открыл окно и подумал: здесь будет хорошо.'
  ],
  tr:[
    'Tháng trước tôi chuyển sang căn hộ khác. Nó xa trung tâm hơn nhưng rẻ hơn.',
    'Đồ đạc hoá ra nhiều hơn tôi tưởng rất nhiều. Riêng sách thôi đã sáu thùng.',
    'Bạn bè giúp tôi khuân đồ gỗ. Chúng tôi làm suốt ngày và xong lúc tối muộn.',
    'Đêm đầu ở chỗ mới tôi gần như không ngủ. Sáng ra tôi mở cửa sổ và nghĩ: ở đây rồi sẽ ổn.'
  ],
  keys:[
    { w:'перее́хать', r:'pereyékhat\'', vi:'chuyển nhà' },
    { w:'да́льше', r:'dál\'she', vi:'xa hơn' },
    { w:'деше́вле', r:'deshévle', vi:'rẻ hơn' },
    { w:'ве́щи', r:'véshchi', vi:'đồ đạc' },
    { w:'оказа́ться', r:'okazát\'sya', vi:'hoá ra là' },
    { w:'коро́бка', r:'koróbka', vi:'thùng, hộp' },
    { w:'ме́бель', r:'mébel\'', vi:'đồ gỗ, nội thất' },
    { w:'зако́нчить', r:'zakónchit\'', vi:'hoàn thành' }
  ],
  qs:[
    { q:'Căn hộ mới thế nào?', o:['Gần trung tâm, đắt hơn','Xa trung tâm, rẻ hơn','Rộng hơn','Nhỏ hơn'], c:1, e:'дальше от центра, но дешевле.' },
    { q:'Riêng sách có bao nhiêu thùng?', o:['Ba','Bốn','Năm','Sáu'], c:3, e:'Одних только книг было шесть коробок.' },
    { q:'Sáng hôm sau người viết nghĩ gì?', o:['Muốn chuyển lại','“Ở đây rồi sẽ ổn”','Tiếc nhà cũ','Cần mua thêm đồ'], c:1, e:'здесь будет хорошо.' }
  ],
  after:'Kể một lần chuyển nhà bằng 6 câu, dùng оказаться · намного больше · помочь + Дат.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Công việc', title:'Собеседование', vi:'Buổi phỏng vấn',
  intro:'A2. Chùm từ trọng tâm: xin việc, hồi hộp, câu hỏi khó.',
  text:[
    'Вчера у меня было собеседование в новой компании. Я готовился три дня.',
    'Меня спросили, почему я хочу работать именно здесь. Я ответил честно: мне нравятся их проекты.',
    'Потом спросили про мои слабые стороны. Это был самый трудный вопрос.',
    'Через час мне написали: «Мы вас берём». Я перечитал сообщение три раза.'
  ],
  tr:[
    'Hôm qua tôi có buổi phỏng vấn ở một công ty mới. Tôi chuẩn bị ba ngày.',
    'Người ta hỏi tôi vì sao lại muốn làm đúng ở đây. Tôi trả lời thật lòng: tôi thích các dự án của họ.',
    'Sau đó họ hỏi về điểm yếu của tôi. Đó là câu hỏi khó nhất.',
    'Một tiếng sau họ nhắn: “Chúng tôi nhận bạn.” Tôi đọc lại tin nhắn ba lần.'
  ],
  keys:[
    { w:'собесе́дование', r:'sobesédovaniye', vi:'buổi phỏng vấn' },
    { w:'гото́виться', r:'gotóvit\'sya', vi:'chuẩn bị' },
    { w:'и́менно', r:'ímenno', vi:'chính là, đúng là' },
    { w:'че́стно', r:'chéstno', vi:'thật lòng' },
    { w:'прое́кт', r:'proyékt', vi:'dự án' },
    { w:'сла́бые сто́роны', r:'slábyye stórony', vi:'điểm yếu' },
    { w:'вопро́с', r:'voprós', vi:'câu hỏi' },
    { w:'перечита́ть', r:'perechitát\'', vi:'đọc lại' }
  ],
  qs:[
    { q:'Chuẩn bị bao lâu?', o:['Một ngày','Hai ngày','Ba ngày','Một tuần'], c:2, e:'Я готовился три дня.' },
    { q:'Câu hỏi khó nhất là gì?', o:['Về lương','Về điểm yếu','Về kinh nghiệm','Về thời gian rảnh'], c:1, e:'спросили про мои слабые стороны.' },
    { q:'Kết quả thế nào?', o:['Bị từ chối','Được nhận','Phải phỏng vấn vòng hai','Chưa rõ'], c:1, e:'«Мы вас берём».' }
  ],
  after:'Viết 6 câu về một buổi phỏng vấn, dùng готовиться · именно · честно.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Ngôn ngữ', title:'Русские имена', vi:'Tên người Nga',
  intro:'A2. Chùm từ trọng tâm: tên gọi thân mật, phụ danh, cách xưng hô.',
  text:[
    'Сначала русские имена меня пугали. Один человек — и пять разных имён.',
    'Александр может быть Саша, Сашенька, Шура или Санёк. Всё зависит от того, кто говорит.',
    'В университете к преподавателю обращаются по имени и отчеству: Анна Ивановна.',
    'Когда коллега впервые сказал мне «Куан, зови меня просто Миша», я понял, что мы стали ближе.'
  ],
  tr:[
    'Ban đầu tên người Nga làm tôi hoảng. Một người mà có tới năm cái tên khác nhau.',
    'Aleksandr có thể là Sasha, Sashenka, Shura hay Sanyok. Tất cả tuỳ vào ai đang nói.',
    'Ở trường đại học, gọi giảng viên thì phải gọi cả tên và phụ danh: Anna Ivanovna.',
    'Khi một đồng nghiệp lần đầu nói với tôi “Quân này, cứ gọi tớ là Misha thôi”, tôi hiểu là chúng tôi đã thân hơn.'
  ],
  keys:[
    { w:'пуга́ть', r:'pugát\'', vi:'làm sợ' },
    { w:'ра́зный', r:'ráznyy', vi:'khác nhau' },
    { w:'зави́сеть от', r:'zavíset\' ot', vi:'phụ thuộc vào' },
    { w:'обраща́ться к', r:'obrashchát\'sya k', vi:'xưng hô với' },
    { w:'о́тчество', r:'ótchestvo', vi:'phụ danh (theo tên cha)' },
    { w:'впервы́е', r:'vpervýye', vi:'lần đầu tiên' },
    { w:'про́сто', r:'prósto', vi:'chỉ đơn giản là' },
    { w:'бли́же', r:'blízhe', vi:'gần hơn' }
  ],
  qs:[
    { q:'Aleksandr có thể gọi là gì?', o:['Sasha, Shura, Sanyok','Vanya, Petya','Kolya, Tolya','Misha, Grisha'], c:0, e:'Александр может быть Саша, Сашенька, Шура или Санёк.' },
    { q:'Gọi giảng viên thế nào?', o:['Chỉ tên','Tên + phụ danh','Chỉ họ','Thầy/cô + họ'], c:1, e:'обращаются по имени и отчеству.' },
    { q:'Câu “zovi menya prosto Misha” nghĩa là gì?', o:['Anh ấy đổi tên','Quan hệ đã thân hơn','Anh ấy không thích tên đầy đủ','Đó là biệt danh công việc'], c:1, e:'я понял, что мы стали ближе.' }
  ],
  after:'Viết 6 câu về cách xưng hô tiếng Việt, dùng зависеть от · обращаться к · впервые.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Đời sống', title:'Общежитие', vi:'Ký túc xá',
  intro:'A2. Chùm từ trọng tâm: ở chung, bếp chung, quy tắc ngầm.',
  text:[
    'Первый год я жил в общежитии. В комнате нас было трое: я, парень из Казахстана и студент из Нигерии.',
    'Кухня была общая, на весь этаж. Вечером там всегда пахло сразу пятью разными кухнями мира.',
    'Иногда было шумно, и я не мог заниматься. Тогда я уходил в библиотеку.',
    'Сейчас я живу один, и у меня тихо. Но иногда мне не хватает того шума.'
  ],
  tr:[
    'Năm đầu tôi ở ký túc xá. Trong phòng có ba người: tôi, một cậu người Kazakhstan và một sinh viên Nigeria.',
    'Bếp thì dùng chung cả tầng. Buổi tối ở đó lúc nào cũng thơm mùi của năm nền ẩm thực khác nhau cùng lúc.',
    'Có lúc ồn quá, tôi không học được. Những lúc ấy tôi lên thư viện.',
    'Bây giờ tôi ở một mình, nhà rất yên. Nhưng đôi khi tôi lại thấy thiếu cái ồn ào đó.'
  ],
  keys:[
    { w:'общежи́тие', r:'obshchezhítiye', vi:'ký túc xá' },
    { w:'па́рень', r:'páren\'', vi:'chàng trai' },
    { w:'о́бщий', r:'óbshchiy', vi:'chung' },
    { w:'эта́ж', r:'etázh', vi:'tầng' },
    { w:'па́хнуть', r:'pákhnut\'', vi:'toả mùi' },
    { w:'шу́мно', r:'shúmno', vi:'ồn ào' },
    { w:'уходи́ть', r:'ukhodít\'', vi:'đi khỏi' },
    { w:'не хвата́ть', r:'ne khvatát\'', vi:'thiếu, nhớ' }
  ],
  qs:[
    { q:'Trong phòng có mấy người?', o:['Hai','Ba','Bốn','Năm'], c:1, e:'В комнате нас было трое.' },
    { q:'Bếp dùng thế nào?', o:['Riêng mỗi phòng','Chung cả tầng','Không có bếp','Phải đăng ký'], c:1, e:'Кухня была общая, на весь этаж.' },
    { q:'Bây giờ người viết cảm thấy gì?', o:['Rất hài lòng','Đôi khi thấy thiếu cái ồn ào đó','Muốn quay lại ký túc','Không nhớ gì'], c:1, e:'иногда мне не хватает того шума.' }
  ],
  after:'Viết 6 câu về nơi ở đầu tiên khi xa nhà, dùng общий · иногда · не хватать + Род.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Mua sắm', title:'Рынок и супермаркет', vi:'Chợ và siêu thị',
  intro:'A2. Chùm từ trọng tâm: so sánh, mặc cả, chất lượng.',
  text:[
    'Рядом с домом есть и рынок, и супермаркет. Я хожу и туда, и туда.',
    'В супермаркете всё быстро: взял корзину, набрал продуктов, заплатил картой.',
    'На рынке дольше, но интереснее. Продавцы дают попробовать и рассказывают, откуда овощи.',
    'Цены примерно одинаковые. Но на рынке я знаю имя женщины, которая продаёт мне помидоры.'
  ],
  tr:[
    'Gần nhà tôi có cả chợ lẫn siêu thị. Tôi đi cả hai nơi.',
    'Ở siêu thị mọi thứ đều nhanh: lấy giỏ, nhặt đồ, quẹt thẻ thanh toán.',
    'Ở chợ thì lâu hơn nhưng thú vị hơn. Người bán cho nếm thử và kể rau từ đâu về.',
    'Giá thì na ná nhau. Nhưng ở chợ tôi biết tên người phụ nữ vẫn bán cà chua cho tôi.'
  ],
  keys:[
    { w:'ры́нок', r:'rýnok', vi:'chợ' },
    { w:'корзи́на', r:'korzína', vi:'giỏ hàng' },
    { w:'проду́кты', r:'prodúkty', vi:'thực phẩm' },
    { w:'заплати́ть', r:'zaplatít\'', vi:'thanh toán' },
    { w:'попро́бовать', r:'popróbovat\'', vi:'nếm thử' },
    { w:'о́вощи', r:'óvoshchi', vi:'rau củ' },
    { w:'цена́', r:'tsená', vi:'giá' },
    { w:'одина́ковый', r:'odinákovyy', vi:'giống nhau' }
  ],
  qs:[
    { q:'Ở siêu thị thì sao?', o:['Rẻ hơn hẳn','Mọi thứ đều nhanh','Ít lựa chọn','Chỉ nhận tiền mặt'], c:1, e:'В супермаркете всё быстро.' },
    { q:'Người bán ở chợ làm gì?', o:['Giảm giá','Cho nếm thử và kể nguồn gốc','Giao hàng tận nhà','Bán theo thùng'], c:1, e:'Продавцы дают попробовать и рассказывают, откуда овощи.' },
    { q:'Khác biệt lớn nhất theo người viết?', o:['Giá cả','Ở chợ có quan hệ con người','Chất lượng','Giờ mở cửa'], c:1, e:'на рынке я знаю имя женщины…' }
  ],
  after:'So sánh chợ và siêu thị bằng 6 câu, dùng и…, и… · примерно · который.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Học tập', title:'Как я учил падежи', vi:'Tôi đã học các cách thế nào',
  intro:'A2. Chùm từ trọng tâm: ngữ pháp, phương pháp, kiên nhẫn.',
  text:[
    'Шесть падежей — это то, чего боятся все, кто начинает учить русский.',
    'Я пробовал учить таблицы наизусть, но через неделю всё забывал.',
    'Потом преподаватель сказал: «Не учи таблицы. Учи фразы». Я начал запоминать целые выражения: «в школе», «к врачу», «с другом».',
    'Через полгода я перестал думать о падежах и просто говорил. Ошибки остались, но страх ушёл.'
  ],
  tr:[
    'Sáu cách — đó là thứ mà ai bắt đầu học tiếng Nga cũng sợ.',
    'Tôi thử học thuộc lòng các bảng, nhưng một tuần sau là quên sạch.',
    'Rồi cô giáo bảo: “Đừng học bảng. Học cụm.” Tôi bắt đầu nhớ nguyên cả cụm: “ở trường”, “đến chỗ bác sĩ”, “với bạn”.',
    'Nửa năm sau tôi thôi nghĩ về các cách và cứ thế nói. Lỗi thì vẫn còn, nhưng nỗi sợ đã đi mất.'
  ],
  keys:[
    { w:'боя́ться', r:'boyát\'sya', vi:'sợ' },
    { w:'про́бовать', r:'próbovat\'', vi:'thử' },
    { w:'табли́ца', r:'tablítsa', vi:'bảng biểu' },
    { w:'наизу́сть', r:'naizúst\'', vi:'thuộc lòng' },
    { w:'забыва́ть', r:'zabyvát\'', vi:'quên' },
    { w:'запомина́ть', r:'zapominát\'', vi:'ghi nhớ' },
    { w:'выраже́ние', r:'vyrazhéniye', vi:'cụm từ, cách diễn đạt' },
    { w:'страх', r:'strakh', vi:'nỗi sợ' }
  ],
  qs:[
    { q:'Cách học đầu tiên là gì?', o:['Học cụm từ','Học thuộc bảng biểu','Xem phim','Nói với người bản xứ'], c:1, e:'Я пробовал учить таблицы наизусть.' },
    { q:'Cô giáo khuyên gì?', o:['Học bảng kỹ hơn','Đừng học bảng, học cụm','Học chậm lại','Học từ vựng trước'], c:1, e:'«Не учи таблицы. Учи фразы».' },
    { q:'Sau nửa năm thì sao?', o:['Hết lỗi','Lỗi còn nhưng hết sợ','Bỏ cuộc','Học lại từ đầu'], c:1, e:'Ошибки остались, но страх ушёл.' }
  ],
  after:'Viết 6 câu về cách bạn học ngữ pháp, dùng пробовать · через + thời gian · перестать.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Thể thao', title:'Зимний спорт', vi:'Thể thao mùa đông',
  intro:'A2. Chùm từ trọng tâm: trượt băng, thất bại, kiên trì.',
  text:[
    'Зимой во дворе заливают каток. Дети катаются там с утра до вечера.',
    'В декабре я впервые встал на коньки. Я упал раз десять за полчаса.',
    'Мальчик лет семи подъехал и сказал: «Смотрите на меня, а не на лёд». Это был лучший совет.',
    'Теперь я катаюсь каждую субботу. Красиво я не умею, но падаю уже редко.'
  ],
  tr:[
    'Mùa đông người ta đổ nước làm sân trượt băng ngoài sân. Bọn trẻ trượt ở đó từ sáng đến tối.',
    'Tháng Mười hai tôi lần đầu xỏ giày trượt. Nửa tiếng tôi ngã chừng mười lần.',
    'Một cậu bé chừng bảy tuổi trượt tới bảo: “Chú nhìn cháu này, đừng nhìn xuống băng.” Đó là lời khuyên hay nhất.',
    'Giờ thứ Bảy nào tôi cũng đi trượt. Trượt đẹp thì tôi không biết, nhưng ngã thì đã hiếm.'
  ],
  keys:[
    { w:'като́к', r:'katók', vi:'sân trượt băng' },
    { w:'ката́ться', r:'katát\'sya', vi:'trượt, đi chơi (xe)' },
    { w:'коньки́', r:'kon\'kí', vi:'giày trượt băng' },
    { w:'упа́сть', r:'upást\'', vi:'ngã' },
    { w:'подъе́хать', r:'pod\'\'yékhat\'', vi:'trượt/đi lại gần' },
    { w:'лёд', r:'lyod', vi:'băng' },
    { w:'сове́т', r:'sovét', vi:'lời khuyên' },
    { w:'ре́дко', r:'rédko', vi:'hiếm khi' }
  ],
  qs:[
    { q:'Nửa tiếng đầu ngã bao nhiêu lần?', o:['Ba','Năm','Khoảng mười','Hai mươi'], c:2, e:'Я упал раз десять за полчаса.' },
    { q:'Lời khuyên của cậu bé là gì?', o:['Đi chậm lại','Nhìn về phía trước, đừng nhìn băng','Bám vào thành','Mang mũ bảo hiểm'], c:1, e:'«Смотрите на меня, а не на лёд».' },
    { q:'Bây giờ thế nào?', o:['Trượt rất đẹp','Vẫn hay ngã','Trượt không đẹp nhưng ít ngã','Bỏ rồi'], c:2, e:'Красиво я не умею, но падаю уже редко.' }
  ],
  after:'Kể một lần học kỹ năng mới bằng 6 câu, dùng впервые · раз десять · уже редко.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Văn hoá', title:'Новый год', vi:'Tết dương lịch',
  intro:'A2. Chùm từ trọng tâm: đêm giao thừa, mâm cỗ, phong tục.',
  text:[
    'Новый год в России — главный праздник года, важнее, чем Рождество.',
    'Тридцать первого декабря все готовят салаты, а вечером садятся за стол.',
    'Без пяти двенадцать по телевизору выступает президент, потом бьют куранты.',
    'Мои друзья научили меня одному обычаю: пока бьют часы, нужно успеть загадать желание. Я успел.'
  ],
  tr:[
    'Tết dương lịch ở Nga là ngày lễ lớn nhất năm, quan trọng hơn cả lễ Giáng sinh.',
    'Ngày ba mươi mốt tháng Mười hai ai cũng làm salad, đến tối thì ngồi vào bàn.',
    'Mười hai giờ kém năm, tổng thống phát biểu trên tivi, rồi chuông đồng hồ Kremlin điểm.',
    'Bạn bè dạy tôi một tục lệ: trong lúc chuông điểm phải kịp ước một điều. Tôi đã kịp.'
  ],
  keys:[
    { w:'гла́вный', r:'glávnyy', vi:'chính, quan trọng nhất' },
    { w:'ва́жный', r:'vázhnyy', vi:'quan trọng' },
    { w:'сала́т', r:'salát', vi:'salad' },
    { w:'выступа́ть', r:'vystupát\'', vi:'phát biểu' },
    { w:'кура́нты', r:'kuránty', vi:'chuông đồng hồ điện Kremlin' },
    { w:'обы́чай', r:'obýchay', vi:'phong tục' },
    { w:'успе́ть', r:'uspét\'', vi:'kịp' },
    { w:'загада́ть жела́ние', r:'zagadát\' zhelániye', vi:'ước một điều' }
  ],
  qs:[
    { q:'Ngày lễ nào lớn nhất ở Nga?', o:['Giáng sinh','Tết dương lịch','9/5','Lễ Phục sinh'], c:1, e:'Новый год в России — главный праздник года.' },
    { q:'Trước nửa đêm năm phút có gì?', o:['Bắn pháo hoa','Tổng thống phát biểu','Hát quốc ca','Tặng quà'], c:1, e:'Без пяти двенадцать по телевизору выступает президент.' },
    { q:'Tục lệ bạn bè dạy là gì?', o:['Uống cạn ly','Ước một điều khi chuông điểm','Mở cửa sổ','Gọi điện cho bố mẹ'], c:1, e:'нужно успеть загадать желание.' }
  ],
  after:'Tả Tết Việt Nam bằng 6 câu, dùng главный · важнее, чем… · успеть.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Sức khoẻ', title:'В поликлинике', vi:'Ở phòng khám',
  intro:'A2. Chùm từ trọng tâm: đặt lịch, khám bệnh, đơn thuốc.',
  text:[
    'Я записался к врачу через интернет. Талон я получил на среду, на десять утра.',
    'В коридоре сидели пять человек. Все ждали молча.',
    'Врач померил давление, послушал лёгкие и спросил, давно ли у меня кашель.',
    'Он выписал рецепт и сказал: «Три дня дома, никакой улицы». Я послушался.'
  ],
  tr:[
    'Tôi đặt lịch khám qua mạng. Tôi lấy được phiếu vào thứ Tư, mười giờ sáng.',
    'Ngoài hành lang có năm người ngồi. Ai cũng đợi trong im lặng.',
    'Bác sĩ đo huyết áp, nghe phổi và hỏi tôi ho lâu chưa.',
    'Ông kê đơn và dặn: “Ba ngày ở nhà, cấm ra đường.” Tôi nghe lời.'
  ],
  keys:[
    { w:'записа́ться', r:'zapisát\'sya', vi:'đăng ký, đặt lịch' },
    { w:'тало́н', r:'talón', vi:'phiếu khám' },
    { w:'коридо́р', r:'koridór', vi:'hành lang' },
    { w:'померя́ть давле́ние', r:'pomeryát\' davléniye', vi:'đo huyết áp' },
    { w:'лёгкие', r:'lyógkiye', vi:'phổi' },
    { w:'вы́писать реце́пт', r:'výpisat\' retsépt', vi:'kê đơn' },
    { w:'никако́й', r:'nikakóy', vi:'không… nào cả' },
    { w:'послу́шаться', r:'poslúshat\'sya', vi:'nghe lời' }
  ],
  qs:[
    { q:'Đặt lịch bằng cách nào?', o:['Gọi điện','Qua mạng','Đến xếp hàng','Nhờ người quen'], c:1, e:'Я записался к врачу через интернет.' },
    { q:'Bác sĩ làm gì?', o:['Chụp X-quang','Đo huyết áp, nghe phổi','Xét nghiệm máu','Tiêm'], c:1, e:'Врач померил давление, послушал лёгкие.' },
    { q:'Bác sĩ dặn gì?', o:['Uống nhiều nước','Ba ngày ở nhà','Đi khám lại','Tập thể dục'], c:1, e:'«Три дня дома, никакой улицы».' }
  ],
  after:'Viết 6 câu về một lần đi khám, dùng записаться · спросить, давно ли… · выписать.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Xã hội', title:'Волонтёры', vi:'Những người tình nguyện',
  intro:'A2. Chùm từ trọng tâm: tình nguyện, giúp đỡ, động lực.',
  text:[
    'В нашем городе есть группа волонтёров. Они помогают пожилым людям.',
    'Зимой они чистят снег у подъездов, а летом красят скамейки.',
    'Я пришёл к ним в октябре. Сначала мне было неловко: я плохо говорил по-русски.',
    'Но бабушка, которой я носил продукты, сказала: «Главное не слова, а что ты пришёл».'
  ],
  tr:[
    'Ở thành phố chúng tôi có một nhóm tình nguyện. Họ giúp đỡ người cao tuổi.',
    'Mùa đông họ xúc tuyết trước cửa các sảnh chung cư, mùa hè thì sơn ghế đá.',
    'Tôi đến với họ vào tháng Mười. Lúc đầu tôi ngượng: tôi nói tiếng Nga còn kém.',
    'Nhưng bà cụ mà tôi mang thực phẩm đến bảo: “Quan trọng không phải lời nói, mà là cháu đã đến.”'
  ],
  keys:[
    { w:'волонтёр', r:'volontyór', vi:'tình nguyện viên' },
    { w:'помога́ть', r:'pomogát\'', vi:'giúp đỡ' },
    { w:'подъе́зд', r:'pod\'\'yézd', vi:'sảnh vào chung cư' },
    { w:'кра́сить', r:'krásit\'', vi:'sơn' },
    { w:'скаме́йка', r:'skaméyka', vi:'ghế băng' },
    { w:'нело́вко', r:'nelóvko', vi:'ngượng ngùng' },
    { w:'носи́ть', r:'nosít\'', vi:'mang đến' },
    { w:'гла́вное', r:'glávnoye', vi:'điều quan trọng nhất' }
  ],
  qs:[
    { q:'Nhóm tình nguyện giúp ai?', o:['Trẻ em','Người cao tuổi','Sinh viên','Người vô gia cư'], c:1, e:'Они помогают пожилым людям.' },
    { q:'Mùa hè họ làm gì?', o:['Xúc tuyết','Sơn ghế đá','Trồng cây','Dạy học'], c:1, e:'летом красят скамейки.' },
    { q:'Bà cụ nói gì?', o:['Cần học tiếng tốt hơn','Quan trọng là cháu đã đến','Đừng đến nữa','Cảm ơn nhiều'], c:1, e:'«Главное не слова, а что ты пришёл».' }
  ],
  after:'Viết 6 câu về một hoạt động thiện nguyện, dùng помогать + Дат · сначала · главное.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Đời sống', title:'Мой район', vi:'Khu phố của tôi',
  intro:'A2. Chùm từ trọng tâm: khu dân cư, tiện ích, thay đổi.',
  text:[
    'Мой район не в центре, но мне здесь нравится. До метро идти семь минут.',
    'Рядом есть парк, две школы и небольшая библиотека.',
    'Раньше на углу был старый кинотеатр. Два года назад его закрыли, а теперь там спортзал.',
    'Люди в районе разные, но почти все здороваются. Это делает большой город меньше.'
  ],
  tr:[
    'Khu tôi ở không nằm ở trung tâm, nhưng tôi thích nơi này. Đi bộ ra ga tàu điện ngầm mất bảy phút.',
    'Gần đó có công viên, hai trường học và một thư viện nhỏ.',
    'Trước kia ở góc phố có một rạp chiếu phim cũ. Hai năm trước người ta đóng cửa nó, giờ chỗ đó là phòng tập.',
    'Người trong khu thì đủ kiểu, nhưng hầu như ai cũng chào nhau. Điều đó làm thành phố lớn nhỏ lại.'
  ],
  keys:[
    { w:'райо́н', r:'rayón', vi:'quận, khu' },
    { w:'центр', r:'tsentr', vi:'trung tâm' },
    { w:'у́гол', r:'úgol', vi:'góc phố' },
    { w:'кинотеа́тр', r:'kinoteátr', vi:'rạp chiếu phim' },
    { w:'закры́ть', r:'zakrýt\'', vi:'đóng cửa' },
    { w:'спортза́л', r:'sportzál', vi:'phòng tập' },
    { w:'ра́зные', r:'ráznyye', vi:'khác nhau, đủ kiểu' },
    { w:'ме́ньше', r:'mén\'she', vi:'nhỏ hơn' }
  ],
  qs:[
    { q:'Đi bộ ra ga mất bao lâu?', o:['Ba phút','Năm phút','Bảy phút','Mười phút'], c:2, e:'До метро идти семь минут.' },
    { q:'Ở góc phố giờ là gì?', o:['Rạp chiếu phim','Phòng tập','Siêu thị','Quán cà phê'], c:1, e:'а теперь там спортзал.' },
    { q:'Điều gì làm thành phố lớn “nhỏ lại”?', o:['Giao thông tốt','Việc mọi người chào nhau','Công viên','Thư viện'], c:1, e:'почти все здороваются. Это делает большой город меньше.' }
  ],
  after:'Tả khu bạn ở bằng 6 câu, dùng раньше… а теперь… · до + Род · почти все.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Mua sắm', title:'Онлайн-покупки', vi:'Mua hàng trên mạng',
  intro:'A2. Chùm từ trọng tâm: đặt hàng, giao hàng, đổi trả.',
  text:[
    'В прошлом месяце я заказал куртку в интернет-магазине. Она стоила три тысячи рублей.',
    'Курьер привёз её через два дня прямо к двери.',
    'Но размер не подошёл: рукава были слишком длинные.',
    'Я оформил возврат, и деньги вернули за неделю. Теперь я всегда смотрю таблицу размеров.'
  ],
  tr:[
    'Tháng trước tôi đặt một cái áo khoác ở cửa hàng trên mạng. Nó giá ba nghìn rúp.',
    'Người giao hàng mang tới tận cửa sau hai ngày.',
    'Nhưng cỡ không vừa: tay áo dài quá.',
    'Tôi làm thủ tục trả hàng, một tuần thì được hoàn tiền. Giờ lúc nào tôi cũng xem bảng cỡ.'
  ],
  keys:[
    { w:'заказа́ть', r:'zakazát\'', vi:'đặt hàng' },
    { w:'интерне́т-магази́н', r:'internét-magazín', vi:'cửa hàng online' },
    { w:'курье́р', r:'kur\'yér', vi:'người giao hàng' },
    { w:'привезти́', r:'privestí', vi:'chở đến' },
    { w:'разме́р', r:'razmér', vi:'cỡ, kích thước' },
    { w:'рука́в', r:'rukáv', vi:'tay áo' },
    { w:'возвра́т', r:'vozvrát', vi:'việc trả hàng' },
    { w:'верну́ть', r:'vernút\'', vi:'trả lại' }
  ],
  qs:[
    { q:'Áo khoác giá bao nhiêu?', o:['1.000 rúp','2.000 rúp','3.000 rúp','5.000 rúp'], c:2, e:'Она стоила три тысячи рублей.' },
    { q:'Vấn đề là gì?', o:['Màu sai','Tay áo quá dài','Bị rách','Giao nhầm'], c:1, e:'рукава были слишком длинные.' },
    { q:'Hoàn tiền mất bao lâu?', o:['Hai ngày','Một tuần','Hai tuần','Một tháng'], c:1, e:'деньги вернули за неделю.' }
  ],
  after:'Viết 6 câu về một lần mua hàng online, dùng заказать · слишком · за + thời gian.' },

{ lang:'ru', lv:'a2', mins:4, cat:'Giao thông', title:'Разговор с таксистом', vi:'Nói chuyện với bác tài',
  intro:'A2. Chùm từ trọng tâm: taxi, trò chuyện, hiểu về một thành phố.',
  text:[
    'Было поздно, автобусы уже не ходили, и я вызвал такси.',
    'Водитель спросил, откуда я. Я ответил: «Из Вьетнама». Он обрадовался: его отец работал в Ханое в восьмидесятых.',
    'Всю дорогу он рассказывал, каким был этот город тридцать лет назад.',
    'Поездка заняла двадцать минут, а я узнал больше, чем из путеводителя.'
  ],
  tr:[
    'Đã muộn, xe buýt không chạy nữa, nên tôi gọi taxi.',
    'Bác tài hỏi tôi từ đâu đến. Tôi trả lời: “Từ Việt Nam.” Bác mừng ra mặt: bố bác từng làm việc ở Hà Nội những năm tám mươi.',
    'Suốt chặng đường bác kể thành phố này ba mươi năm trước từng như thế nào.',
    'Chuyến đi mất hai mươi phút, mà tôi biết được nhiều hơn cả đọc sách hướng dẫn du lịch.'
  ],
  keys:[
    { w:'вы́звать такси́', r:'výzvat\' taksí', vi:'gọi taxi' },
    { w:'води́тель', r:'vodítel\'', vi:'tài xế' },
    { w:'отку́да', r:'otkúda', vi:'từ đâu' },
    { w:'обра́доваться', r:'obrádovat\'sya', vi:'mừng rỡ' },
    { w:'расска́зывать', r:'rasskázyvat\'', vi:'kể' },
    { w:'заня́ть', r:'zanyát\'', vi:'mất (thời gian)' },
    { w:'узна́ть', r:'uznát\'', vi:'biết được' },
    { w:'путеводи́тель', r:'putevodítel\'', vi:'sách hướng dẫn du lịch' }
  ],
  qs:[
    { q:'Vì sao phải gọi taxi?', o:['Trời mưa','Xe buýt không chạy nữa','Xa quá','Mang nhiều đồ'], c:1, e:'автобусы уже не ходили.' },
    { q:'Vì sao bác tài vui?', o:['Được trả nhiều','Bố bác từng làm ở Hà Nội','Cùng quê','Biết tiếng Việt'], c:1, e:'его отец работал в Ханое в восьмидесятых.' },
    { q:'Chuyến đi mất bao lâu?', o:['10 phút','20 phút','30 phút','1 tiếng'], c:1, e:'Поездка заняла двадцать минут.' }
  ],
  after:'Kể một cuộc trò chuyện tình cờ bằng 6 câu, dùng вызвать · всю дорогу · больше, чем.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Xã hội', title:'Почему здесь редко улыбаются', vi:'Vì sao ở đây người ta ít cười',
  intro:'B1. Chùm từ trọng tâm: khác biệt văn hoá, nụ cười, sự chân thành.',
  text:[
    'В первые недели в России мне казалось, что все на меня сердятся. Никто не улыбался в магазине, в метро, на улице.',
    'Потом мне объяснили: здесь улыбка без причины считается странной. Улыбаются тому, кого знают, и тогда, когда действительно рады.',
    'Постепенно я понял разницу. Вежливая улыбка не означает тепла, а её отсутствие не означает злости.',
    'Зато когда русский друг улыбается тебе, ты точно знаешь, что это не формальность. Я перестал считать это холодностью и начал считать честностью.'
  ],
  tr:[
    'Những tuần đầu ở Nga tôi cứ tưởng ai cũng đang giận mình. Chẳng ai cười trong cửa hàng, trên tàu điện ngầm, ngoài phố.',
    'Sau đó người ta giải thích cho tôi: ở đây cười mà không có lý do bị coi là kỳ lạ. Người ta cười với người mình quen, và khi thật sự vui.',
    'Dần dần tôi hiểu ra sự khác biệt. Một nụ cười xã giao không có nghĩa là ấm áp, và việc thiếu nó cũng không có nghĩa là ác ý.',
    'Bù lại, khi một người bạn Nga cười với bạn, bạn biết chắc đó không phải hình thức. Tôi thôi coi đó là sự lạnh lùng và bắt đầu coi đó là sự thành thật.'
  ],
  keys:[
    { w:'серди́ться', r:'serdít\'sya', vi:'giận' },
    { w:'улы́бка', r:'ulýbka', vi:'nụ cười' },
    { w:'причи́на', r:'prichína', vi:'lý do' },
    { w:'счита́ться', r:'schitát\'sya', vi:'được coi là' },
    { w:'постепе́нно', r:'postepénno', vi:'dần dần' },
    { w:'ра́зница', r:'ráznitsa', vi:'sự khác biệt' },
    { w:'отсу́тствие', r:'otsútstviye', vi:'sự vắng mặt, thiếu' },
    { w:'форма́льность', r:'formál\'nost\'', vi:'hình thức' }
  ],
  qs:[
    { q:'Cảm giác ban đầu của người viết?', o:['Được chào đón','Tưởng ai cũng đang giận mình','Thấy bình thường','Thấy vui'], c:1, e:'мне казалось, что все на меня сердятся.' },
    { q:'Ở Nga người ta cười khi nào?', o:['Với mọi người','Với người quen và khi thật sự vui','Khi bán hàng','Khi gặp người lạ'], c:1, e:'Улыбаются тому, кого знают, и тогда, когда действительно рады.' },
    { q:'Kết luận của người viết?', o:['Đó là sự lạnh lùng','Đó là sự thành thật','Nên thay đổi thói quen đó','Khó hoà nhập'], c:1, e:'начал считать честностью.' }
  ],
  after:'Viết 7 câu so sánh cách cười ở hai nền văn hoá, dùng считаться · постепенно · зато.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Xã hội', title:'Дружба по-русски', vi:'Tình bạn kiểu Nga',
  intro:'B1. Chùm từ trọng tâm: bạn bè, ranh giới, sự giúp đỡ.',
  text:[
    'В русском языке есть разница между «знакомый», «приятель» и «друг». По-английски всё это может быть friend.',
    'Друг — это тот, кому можно позвонить в три часа ночи. Таких людей у человека обычно не больше трёх.',
    'Зато если ты стал другом, помощь придёт без вопросов. Однажды я заболел, и сосед по общежитию просто отменил свои планы.',
    'Возможно, дружба здесь медленнее. Но она и крепче — как всё, что строится долго.'
  ],
  tr:[
    'Trong tiếng Nga có sự khác nhau giữa “người quen”, “bạn thường” và “bạn thân”. Trong tiếng Anh tất cả đều có thể là friend.',
    'Bạn thân là người mà ba giờ sáng bạn vẫn gọi được. Người như thế thường mỗi người có không quá ba.',
    'Bù lại, nếu bạn đã thành bạn thân, sự giúp đỡ sẽ đến mà không cần hỏi han gì. Có lần tôi ốm, và người bạn cùng ký túc chỉ đơn giản là huỷ hết kế hoạch của cậu ấy.',
    'Có lẽ tình bạn ở đây chậm hơn. Nhưng nó cũng bền hơn — như mọi thứ được dựng lên lâu dài.'
  ],
  keys:[
    { w:'знако́мый', r:'znakómyy', vi:'người quen' },
    { w:'прия́тель', r:'priyátel\'', vi:'bạn thường' },
    { w:'ра́зница ме́жду', r:'ráznitsa mézhdu', vi:'khác biệt giữa' },
    { w:'по́мощь', r:'pómoshch\'', vi:'sự giúp đỡ' },
    { w:'отмени́ть', r:'otmenít\'', vi:'huỷ bỏ' },
    { w:'возмо́жно', r:'vozmózhno', vi:'có lẽ' },
    { w:'кре́пче', r:'krépche', vi:'bền hơn, chắc hơn' },
    { w:'стро́иться', r:'stróit\'sya', vi:'được xây dựng' }
  ],
  qs:[
    { q:'Ba mức quan hệ trong tiếng Nga là gì?', o:['знакомый, приятель, друг','сосед, коллега, друг','брат, друг, товарищ','гость, друг, родственник'], c:0, e:'«знакомый», «приятель» и «друг».' },
    { q:'Bạn thân là người thế nào?', o:['Gặp hằng ngày','Có thể gọi lúc ba giờ sáng','Cùng chỗ làm','Quen lâu năm'], c:1, e:'тот, кому можно позвонить в три часа ночи.' },
    { q:'Ý cuối của bài?', o:['Khó kết bạn ở Nga','Tình bạn chậm hơn nhưng bền hơn','Nên có nhiều bạn','Tình bạn giống nhau ở mọi nơi'], c:1, e:'Возможно, дружба здесь медленнее. Но она и крепче.' }
  ],
  after:'Viết 7 câu về ý nghĩa của tình bạn, dùng разница между · зато · возможно.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Văn hoá', title:'Книги в метро', vi:'Sách trên tàu điện ngầm',
  intro:'B1. Chùm từ trọng tâm: thói quen đọc, thay đổi thời đại, quan sát.',
  text:[
    'Говорят, что раньше в московском метро читали все. Сейчас в руках у большинства телефон.',
    'Но книга не исчезла. Почти в каждом вагоне я вижу двух-трёх человек с бумажной книгой.',
    'Однажды девушка напротив читала «Преступление и наказание». Она так хмурилась, что я улыбнулся.',
    'Мне кажется, чтение в дороге — это способ побыть одному в толпе. Телефон этого не даёт.'
  ],
  tr:[
    'Người ta bảo ngày trước ở tàu điện ngầm Moskva ai cũng đọc sách. Bây giờ phần lớn cầm điện thoại trên tay.',
    'Nhưng sách thì chưa biến mất. Gần như toa nào tôi cũng thấy hai ba người cầm sách giấy.',
    'Có lần cô gái ngồi đối diện đọc “Tội ác và trừng phạt”. Cô ấy chau mày đến mức tôi phải bật cười.',
    'Tôi nghĩ đọc sách trên đường là một cách ở một mình giữa đám đông. Điện thoại không cho ta điều đó.'
  ],
  keys:[
    { w:'большинство́', r:'bol\'shinstvó', vi:'phần lớn' },
    { w:'исче́знуть', r:'ischéznut\'', vi:'biến mất' },
    { w:'бума́жный', r:'bumázhnyy', vi:'bằng giấy' },
    { w:'напро́тив', r:'naprótiv', vi:'đối diện' },
    { w:'хму́риться', r:'khmúrit\'sya', vi:'chau mày' },
    { w:'спо́соб', r:'spósob', vi:'cách thức' },
    { w:'побы́ть', r:'pobýt\'', vi:'ở lại một lúc' },
    { w:'толпа́', r:'tolpá', vi:'đám đông' }
  ],
  qs:[
    { q:'Bây giờ phần lớn hành khách cầm gì?', o:['Sách','Điện thoại','Báo','Không gì cả'], c:1, e:'Сейчас в руках у большинства телефон.' },
    { q:'Mỗi toa thường có mấy người đọc sách giấy?', o:['Không ai','Một','Hai đến ba','Mười'], c:2, e:'двух-трёх человек с бумажной книгой.' },
    { q:'Theo người viết, đọc trên đường là gì?', o:['Cách giết thời gian','Cách ở một mình giữa đám đông','Thói quen cũ','Cách học'], c:1, e:'способ побыть одному в толпе.' }
  ],
  after:'Viết 7 câu về thói quen đọc của bạn, dùng большинство · мне кажется · способ + инф.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Đời sống', title:'Отпуск на даче', vi:'Kỳ nghỉ ở nhà vườn',
  intro:'B1. Chùm từ trọng tâm: nghỉ phép, lao động chân tay, nghỉ ngơi thật sự.',
  text:[
    'Многие мои коллеги проводят отпуск не на море, а на даче. Сначала я этого не понимал.',
    'Летом друг позвал меня к себе. Мы копали грядки, носили воду, чинили забор.',
    'Я устал физически, но голова была абсолютно пустой — в хорошем смысле.',
    'Оказалось, что отдых — это не обязательно ничего не делать. Иногда это делать что-то совсем другое.'
  ],
  tr:[
    'Nhiều đồng nghiệp của tôi nghỉ phép không phải ở biển mà ở nhà vườn. Ban đầu tôi không hiểu nổi.',
    'Mùa hè một người bạn rủ tôi về chỗ cậu ấy. Chúng tôi xới luống, xách nước, sửa hàng rào.',
    'Tôi mệt rã người, nhưng đầu thì trống rỗng hoàn toàn — theo nghĩa tốt.',
    'Hoá ra nghỉ ngơi không nhất thiết là không làm gì. Đôi khi nó là làm một việc hoàn toàn khác.'
  ],
  keys:[
    { w:'о́тпуск', r:'ótpusk', vi:'kỳ nghỉ phép' },
    { w:'проводи́ть', r:'provodít\'', vi:'trải qua (thời gian)' },
    { w:'копа́ть', r:'kopát\'', vi:'đào, xới' },
    { w:'гря́дка', r:'gryádka', vi:'luống rau' },
    { w:'чини́ть', r:'chinít\'', vi:'sửa' },
    { w:'забо́р', r:'zabór', vi:'hàng rào' },
    { w:'физи́чески', r:'fizícheski', vi:'về thể chất' },
    { w:'обяза́тельно', r:'obyazátel\'no', vi:'nhất thiết' }
  ],
  qs:[
    { q:'Đồng nghiệp nghỉ phép ở đâu?', o:['Ở biển','Ở nhà vườn','Ở nước ngoài','Ở nhà'], c:1, e:'проводят отпуск не на море, а на даче.' },
    { q:'Họ làm những việc gì?', o:['Nấu ăn, đọc sách','Xới luống, xách nước, sửa hàng rào','Câu cá','Đi dạo'], c:1, e:'Мы копали грядки, носили воду, чинили забор.' },
    { q:'Kết luận về nghỉ ngơi?', o:['Phải nằm yên','Đôi khi là làm một việc hoàn toàn khác','Phải đi xa','Phải tốn tiền'], c:1, e:'Иногда это делать что-то совсем другое.' }
  ],
  after:'Viết 7 câu về kỳ nghỉ của bạn, dùng не…, а… · оказалось, что… · не обязательно.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Ngôn ngữ', title:'Вежливость и прямота', vi:'Lịch sự và thẳng thắn',
  intro:'B1. Chùm từ trọng tâm: cách nói thẳng, hiểu lầm, thích nghi.',
  text:[
    'Однажды я показал коллеге свой текст. Он прочитал и сказал: «Здесь плохо. Перепиши».',
    'Дома я долго думал, обидел ли он меня специально. Позже я понял, что нет.',
    'В русской рабочей культуре прямая критика часто считается уважением: тебе не говорят «неплохо», если это плохо.',
    'Сначала мне было тяжело. Теперь я ценю это: я всегда знаю, где я на самом деле нахожусь.'
  ],
  tr:[
    'Có lần tôi đưa đồng nghiệp xem bài viết của mình. Anh ấy đọc rồi nói: “Chỗ này tệ. Viết lại đi.”',
    'Về nhà tôi nghĩ mãi, không biết anh ấy có cố ý làm tôi tổn thương không. Sau này tôi hiểu là không.',
    'Trong văn hoá làm việc của người Nga, phê bình thẳng thường được coi là sự tôn trọng: người ta không nói “cũng được” nếu nó tệ.',
    'Ban đầu tôi thấy nặng nề. Giờ tôi lại quý điều đó: tôi luôn biết mình thật sự đang ở đâu.'
  ],
  keys:[
    { w:'пока́зывать', r:'pokázyvat\'', vi:'cho xem' },
    { w:'переписа́ть', r:'perepisát\'', vi:'viết lại' },
    { w:'оби́деть', r:'obídet\'', vi:'làm phật lòng' },
    { w:'специа́льно', r:'spetsiál\'no', vi:'cố ý' },
    { w:'пряма́я кри́тика', r:'pryamáya krítika', vi:'phê bình thẳng' },
    { w:'уваже́ние', r:'uvazhéniye', vi:'sự tôn trọng' },
    { w:'цени́ть', r:'tsenít\'', vi:'trân trọng' },
    { w:'на са́мом де́ле', r:'na sámom déle', vi:'thật ra' }
  ],
  qs:[
    { q:'Đồng nghiệp nói gì về bài viết?', o:['“Khá ổn”','“Chỗ này tệ, viết lại đi”','“Để tôi sửa”','Không nói gì'], c:1, e:'«Здесь плохо. Перепиши».' },
    { q:'Phê bình thẳng được coi là gì?', o:['Thô lỗ','Sự tôn trọng','Thói quen xấu','Cạnh tranh'], c:1, e:'прямая критика часто считается уважением.' },
    { q:'Bây giờ người viết nghĩ sao?', o:['Vẫn thấy nặng nề','Trân trọng vì luôn biết mình đang ở đâu','Tránh xin góp ý','Chỉ hỏi bạn thân'], c:1, e:'я всегда знаю, где я на самом деле нахожусь.' }
  ],
  after:'Viết 7 câu về cách nhận góp ý, dùng считаться · сначала… теперь… · на самом деле.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Đời sống', title:'Старый двор', vi:'Cái sân cũ',
  intro:'B1. Chùm từ trọng tâm: khu tập thể, ký ức đô thị, thay đổi.',
  text:[
    'Наш двор построили в шестидесятые годы. Дома невысокие, между ними растут старые тополя.',
    'Здесь всё ещё есть скамейки, на которых сидят бабушки, и стол, за которым мужчины играют в домино.',
    'Новые районы строят иначе: там красиво, но никто не знает соседей.',
    'Мне кажется, двор — это маленькая деревня внутри большого города. Когда исчезают дворы, исчезает и что-то ещё.'
  ],
  tr:[
    'Cái sân khu chúng tôi được xây vào những năm sáu mươi. Nhà thấp, giữa các dãy nhà mọc lên những cây bạch dương già.',
    'Ở đây vẫn còn những băng ghế cho các bà cụ ngồi, và cái bàn cho cánh đàn ông chơi domino.',
    'Những khu mới thì xây khác: ở đó đẹp, nhưng chẳng ai biết hàng xóm là ai.',
    'Tôi nghĩ cái sân là một ngôi làng nhỏ bên trong thành phố lớn. Khi những cái sân biến mất, có thứ gì đó nữa cũng biến mất theo.'
  ],
  keys:[
    { w:'постро́ить', r:'postróit\'', vi:'xây' },
    { w:'невысо́кий', r:'nevysókiy', vi:'không cao' },
    { w:'расти́', r:'rastí', vi:'mọc, lớn lên' },
    { w:'то́поль', r:'tópol\'', vi:'cây dương' },
    { w:'всё ещё', r:'vsyo yeshchyó', vi:'vẫn còn' },
    { w:'ина́че', r:'ináche', vi:'khác đi' },
    { w:'дере́вня', r:'derévnya', vi:'làng' },
    { w:'исчеза́ть', r:'ischezát\'', vi:'biến mất' }
  ],
  qs:[
    { q:'Khu sân được xây khi nào?', o:['Những năm 50','Những năm 60','Những năm 80','Sau 2000'], c:1, e:'Наш двор построили в шестидесятые годы.' },
    { q:'Cánh đàn ông làm gì ở sân?', o:['Đánh cờ','Chơi domino','Sửa xe','Đọc báo'], c:1, e:'стол, за которым мужчины играют в домино.' },
    { q:'Nhược điểm của khu mới?', o:['Nhà quá cao','Không ai biết hàng xóm','Xa trung tâm','Không có cây'], c:1, e:'там красиво, но никто не знает соседей.' }
  ],
  after:'Tả một nơi đang biến mất ở thành phố bạn, dùng всё ещё · иначе · когда…, …' },

{ lang:'ru', lv:'b1', mins:5, cat:'Xã hội', title:'Электронная очередь', vi:'Xếp hàng điện tử',
  intro:'B1. Chùm từ trọng tâm: thủ tục hành chính, số hoá, kiên nhẫn.',
  text:[
    'Раньше в государственных учреждениях стояли живые очереди. Люди приходили в семь утра и ждали часами.',
    'Сейчас почти везде есть терминал: берёшь талон, садишься и ждёшь свой номер на экране.',
    'Стало быстрее и спокойнее. Но у пожилых людей часто возникают трудности: они не понимают, какую кнопку нажать.',
    'Поэтому у входа обычно стоит сотрудник и помогает. Технология работает только тогда, когда рядом есть человек.'
  ],
  tr:[
    'Trước kia ở các cơ quan nhà nước người ta xếp hàng thật. Người dân đến từ bảy giờ sáng và đợi hàng tiếng.',
    'Bây giờ hầu như chỗ nào cũng có máy: lấy phiếu, ngồi xuống và đợi số của mình trên màn hình.',
    'Nhanh hơn và bớt căng thẳng hơn. Nhưng người lớn tuổi thường gặp khó: họ không biết phải bấm nút nào.',
    'Vì thế ở cửa thường có một nhân viên đứng giúp. Công nghệ chỉ hoạt động khi bên cạnh có một con người.'
  ],
  keys:[
    { w:'госуда́рственный', r:'gosudárstvennyy', vi:'thuộc nhà nước' },
    { w:'учрежде́ние', r:'uchrezhdéniye', vi:'cơ quan' },
    { w:'о́чередь', r:'óchered\'', vi:'hàng đợi' },
    { w:'термина́л', r:'terminál', vi:'máy lấy số' },
    { w:'экра́н', r:'ekrán', vi:'màn hình' },
    { w:'возника́ть', r:'voznikát\'', vi:'nảy sinh' },
    { w:'тру́дности', r:'trúdnosti', vi:'khó khăn' },
    { w:'нажа́ть', r:'nazhát\'', vi:'bấm, nhấn' }
  ],
  qs:[
    { q:'Trước kia người ta đến từ mấy giờ?', o:['6 giờ','7 giờ','8 giờ','9 giờ'], c:1, e:'Люди приходили в семь утра.' },
    { q:'Ai gặp khó với máy lấy số?', o:['Sinh viên','Người lớn tuổi','Người nước ngoài','Trẻ em'], c:1, e:'у пожилых людей часто возникают трудности.' },
    { q:'Kết luận của bài?', o:['Nên bỏ máy đi','Công nghệ chỉ hiệu quả khi có người hỗ trợ','Nên đào tạo người già','Xếp hàng thật vẫn tốt hơn'], c:1, e:'Технология работает только тогда, когда рядом есть человек.' }
  ],
  after:'Viết 7 câu về một thủ tục hành chính bạn từng làm, dùng раньше… сейчас… · возникать · только тогда, когда.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Truyền thông', title:'Как я читаю новости', vi:'Tôi đọc tin tức thế nào',
  intro:'B1. Chùm từ trọng tâm: nguồn tin, kiểm chứng, thói quen lành mạnh.',
  text:[
    'Раньше я читал новости весь день: утром, в метро, перед сном. К вечеру я чувствовал себя уставшим, хотя ничего не делал.',
    'Теперь у меня правило: новости два раза в день, по пятнадцать минут.',
    'Я стараюсь смотреть один и тот же сюжет в двух разных источниках. Часто заголовки говорят больше, чем сам текст.',
    'Это не делает меня экспертом. Но я меньше пугаюсь и больше понимаю.'
  ],
  tr:[
    'Trước kia tôi đọc tin cả ngày: buổi sáng, trên tàu, trước khi ngủ. Đến tối tôi thấy kiệt sức dù chẳng làm gì.',
    'Bây giờ tôi có quy tắc: tin tức hai lần một ngày, mỗi lần mười lăm phút.',
    'Tôi cố xem cùng một sự việc ở hai nguồn khác nhau. Nhiều khi cái tít nói nhiều hơn cả bài viết.',
    'Điều đó không biến tôi thành chuyên gia. Nhưng tôi bớt hoảng và hiểu nhiều hơn.'
  ],
  keys:[
    { w:'пра́вило', r:'právilo', vi:'quy tắc' },
    { w:'стара́ться', r:'starát\'sya', vi:'cố gắng' },
    { w:'оди́н и тот же', r:'odín i tot zhe', vi:'cùng một' },
    { w:'сюже́т', r:'syuzhét', vi:'sự việc, phóng sự' },
    { w:'исто́чник', r:'istóchnik', vi:'nguồn tin' },
    { w:'заголо́вок', r:'zagolóvok', vi:'tiêu đề' },
    { w:'экспе́рт', r:'ekspért', vi:'chuyên gia' },
    { w:'пуга́ться', r:'pugát\'sya', vi:'hoảng sợ' }
  ],
  qs:[
    { q:'Quy tắc mới là gì?', o:['Không đọc tin','Hai lần/ngày, mỗi lần 15 phút','Chỉ đọc buổi sáng','Chỉ đọc báo giấy'], c:1, e:'новости два раза в день, по пятнадцать минут.' },
    { q:'Người viết làm gì để kiểm chứng?', o:['Hỏi bạn bè','Xem cùng sự việc ở hai nguồn','Chỉ đọc nguồn chính thống','Đọc bình luận'], c:1, e:'смотреть один и тот же сюжет в двух разных источниках.' },
    { q:'Kết quả?', o:['Trở thành chuyên gia','Bớt hoảng và hiểu nhiều hơn','Không quan tâm nữa','Đọc nhiều hơn trước'], c:1, e:'я меньше пугаюсь и больше понимаю.' }
  ],
  after:'Viết 7 câu về cách bạn đọc tin, dùng раньше… теперь… · стараться · один и тот же.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Ngôn ngữ', title:'Что нельзя перевести', vi:'Những thứ không dịch được',
  intro:'B1. Chùm từ trọng tâm: dịch thuật, từ không tương đương, văn hoá trong ngôn ngữ.',
  text:[
    'Есть слова, которые невозможно перевести одним словом. «Тоска» — одно из них.',
    'Это не грусть и не скука. Это что-то среднее, с оттенком времени и пространства.',
    'Во вьетнамском тоже есть такие слова. Когда я пытаюсь объяснить их по-русски, получается целый абзац.',
    'Может быть, именно эти слова и есть настоящая граница между языками. Всё остальное переводится.'
  ],
  tr:[
    'Có những từ không thể dịch bằng một từ. “Toska” là một trong số đó.',
    'Nó không phải nỗi buồn, cũng không phải sự chán chường. Nó là cái gì đó ở giữa, mang cả sắc thái thời gian lẫn không gian.',
    'Trong tiếng Việt cũng có những từ như thế. Khi tôi thử giải thích chúng bằng tiếng Nga, thành ra cả một đoạn văn.',
    'Có lẽ chính những từ ấy mới là ranh giới thật giữa các ngôn ngữ. Tất cả phần còn lại thì dịch được hết.'
  ],
  keys:[
    { w:'невозмо́жно', r:'nevozmózhno', vi:'không thể' },
    { w:'перевести́', r:'perevestí', vi:'dịch' },
    { w:'грусть', r:'grust\'', vi:'nỗi buồn' },
    { w:'ску́ка', r:'skúka', vi:'sự chán' },
    { w:'отте́нок', r:'otténok', vi:'sắc thái' },
    { w:'простра́нство', r:'prostránstvo', vi:'không gian' },
    { w:'абза́ц', r:'abzáts', vi:'đoạn văn' },
    { w:'грани́ца', r:'granítsa', vi:'ranh giới' }
  ],
  qs:[
    { q:'“Тоска” là gì?', o:['Nỗi buồn thuần tuý','Cái gì đó ở giữa buồn và chán','Sự chán chường','Sự cô đơn'], c:1, e:'Это не грусть и не скука. Это что-то среднее.' },
    { q:'Khi giải thích từ Việt bằng tiếng Nga thì sao?', o:['Chỉ cần một từ','Thành cả một đoạn văn','Không giải thích được','Dùng tiếng Anh'], c:1, e:'получается целый абзац.' },
    { q:'Ý cuối của bài?', o:['Không nên dịch','Chính những từ đó là ranh giới thật giữa các ngôn ngữ','Dịch máy tốt hơn','Mọi thứ đều dịch được'], c:1, e:'именно эти слова и есть настоящая граница между языками.' }
  ],
  after:'Viết 7 câu về một từ tiếng Việt khó dịch, dùng невозможно · что-то среднее · может быть.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Đời sống', title:'Зимний свет', vi:'Ánh sáng mùa đông',
  intro:'B1. Chùm từ trọng tâm: ngày ngắn, thích nghi, thói quen giữ nhịp sống.',
  text:[
    'В декабре здесь светло всего часов шесть. Ты уходишь на работу в темноте и возвращаешься в темноте.',
    'Первую зиму я переносил тяжело. Мне всё время хотелось спать.',
    'Коллега посоветовала простую вещь: выходить на улицу в обед, даже на пятнадцать минут.',
    'Это помогло больше, чем я ожидал. Зимой свет здесь — не фон, а ресурс, который нужно ловить.'
  ],
  tr:[
    'Tháng Mười hai ở đây trời chỉ sáng chừng sáu tiếng. Bạn đi làm trong bóng tối và trở về cũng trong bóng tối.',
    'Mùa đông đầu tiên tôi chịu đựng khá chật vật. Lúc nào tôi cũng buồn ngủ.',
    'Một đồng nghiệp khuyên tôi một điều đơn giản: giờ trưa hãy ra ngoài, dù chỉ mười lăm phút.',
    'Điều đó giúp nhiều hơn tôi tưởng. Mùa đông ở đây, ánh sáng không phải là phông nền mà là một nguồn lực phải biết chộp lấy.'
  ],
  keys:[
    { w:'светло́', r:'svetló', vi:'trời sáng' },
    { w:'темнота́', r:'temnotá', vi:'bóng tối' },
    { w:'переноси́ть', r:'perenosít\'', vi:'chịu đựng' },
    { w:'посове́товать', r:'posovétovat\'', vi:'khuyên' },
    { w:'да́же', r:'dázhe', vi:'thậm chí, dù chỉ' },
    { w:'ожида́ть', r:'ozhidát\'', vi:'mong đợi' },
    { w:'фон', r:'fon', vi:'phông nền' },
    { w:'лови́ть', r:'lovít\'', vi:'chộp, bắt lấy' }
  ],
  qs:[
    { q:'Tháng Mười hai trời sáng bao lâu?', o:['Bốn tiếng','Sáu tiếng','Tám tiếng','Mười tiếng'], c:1, e:'светло всего часов шесть.' },
    { q:'Đồng nghiệp khuyên gì?', o:['Ngủ sớm hơn','Ra ngoài trời vào giờ trưa','Uống cà phê','Bật nhiều đèn'], c:1, e:'выходить на улицу в обед, даже на пятнадцать минут.' },
    { q:'Ánh sáng mùa đông được ví như gì?', o:['Phông nền','Một nguồn lực phải chộp lấy','Một thứ xa xỉ','Một vấn đề'], c:1, e:'не фон, а ресурс, который нужно ловить.' }
  ],
  after:'Viết 7 câu về cách bạn thích nghi với một mùa khó chịu, dùng переносить · посоветовать · больше, чем я ожидал.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Học tập', title:'Учитель, которого я помню', vi:'Người thầy tôi còn nhớ',
  intro:'B1. Chùm từ trọng tâm: ký ức học đường, ảnh hưởng, lòng biết ơn.',
  text:[
    'В девятом классе у нас появился новый учитель литературы. Он был странный: никогда не повышал голос.',
    'Он не заставлял нас любить книги. Он просто читал вслух — и мы замолкали сами.',
    'Однажды он сказал мне: «У тебя неплохо получается писать. Только не торопись быть умным».',
    'Прошло десять лет. Я до сих пор вспоминаю эту фразу каждый раз, когда сажусь писать.'
  ],
  tr:[
    'Năm lớp chín chúng tôi có một thầy dạy văn mới. Thầy hơi lạ: không bao giờ lớn tiếng.',
    'Thầy không bắt chúng tôi phải yêu sách. Thầy chỉ đọc to lên — và chúng tôi tự im lặng.',
    'Có lần thầy nói với tôi: “Em viết cũng được đấy. Chỉ đừng vội tỏ ra thông minh.”',
    'Mười năm đã trôi qua. Đến giờ tôi vẫn nhớ câu ấy mỗi lần ngồi xuống viết.'
  ],
  keys:[
    { w:'появи́ться', r:'poyavít\'sya', vi:'xuất hiện' },
    { w:'литерату́ра', r:'literatúra', vi:'văn học' },
    { w:'повыша́ть го́лос', r:'povyshát\' gólos', vi:'lớn tiếng' },
    { w:'заставля́ть', r:'zastavlyát\'', vi:'bắt buộc' },
    { w:'замолча́ть', r:'zamolchát\'', vi:'im bặt' },
    { w:'получа́ться', r:'poluchát\'sya', vi:'làm được, thành công' },
    { w:'торопи́ться', r:'toropít\'sya', vi:'vội' },
    { w:'до сих пор', r:'do sikh por', vi:'đến tận bây giờ' }
  ],
  qs:[
    { q:'Thầy dạy môn gì?', o:['Lịch sử','Văn học','Tiếng Nga','Toán'], c:1, e:'новый учитель литературы.' },
    { q:'Thầy làm gì để học sinh im lặng?', o:['Quát to','Đọc to sách lên','Phạt','Cho điểm'], c:1, e:'Он просто читал вслух — и мы замолкали сами.' },
    { q:'Thầy khuyên gì?', o:['Đọc nhiều hơn','Đừng vội tỏ ra thông minh','Viết ngắn lại','Học thuộc thơ'], c:1, e:'«Только не торопись быть умным».' }
  ],
  after:'Viết 7 câu về một người thầy bạn nhớ, dùng появиться · заставлять · до сих пор.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Xã hội', title:'Библиотека в маленьком городе', vi:'Thư viện ở thị trấn nhỏ',
  intro:'B1. Chùm từ trọng tâm: thư viện, vai trò xã hội, thay đổi.',
  text:[
    'Прошлым летом я был в городе с населением двадцать тысяч человек. Там одна библиотека на весь город.',
    'Я думал, что она пустая. Но внутри шли курсы компьютерной грамотности для пенсионеров.',
    'Библиотекарь объяснила: книги выдают не так часто, зато сюда приходят за интернетом, за помощью с документами, просто поговорить.',
    'Библиотека давно перестала быть только складом книг. Она стала местом, где город встречается сам с собой.'
  ],
  tr:[
    'Mùa hè năm ngoái tôi ở một thị trấn hai mươi nghìn dân. Cả thị trấn có đúng một thư viện.',
    'Tôi cứ tưởng nó vắng. Nhưng bên trong đang có lớp dạy tin học cho người về hưu.',
    'Cô thủ thư giải thích: sách thì không mượn nhiều nữa, bù lại người ta đến vì internet, vì cần giúp làm giấy tờ, hoặc chỉ để trò chuyện.',
    'Thư viện từ lâu đã thôi chỉ là kho sách. Nó thành nơi mà cả thị trấn gặp lại chính mình.'
  ],
  keys:[
    { w:'населе́ние', r:'naseléniye', vi:'dân số' },
    { w:'пусто́й', r:'pustóy', vi:'trống rỗng' },
    { w:'гра́мотность', r:'grámotnost\'', vi:'sự biết chữ, kỹ năng cơ bản' },
    { w:'пенсионе́р', r:'pensionér', vi:'người về hưu' },
    { w:'выдава́ть', r:'vydavát\'', vi:'cấp, cho mượn' },
    { w:'докуме́нты', r:'dokuménty', vi:'giấy tờ' },
    { w:'склад', r:'sklad', vi:'kho' },
    { w:'встреча́ться', r:'vstrechát\'sya', vi:'gặp gỡ' }
  ],
  qs:[
    { q:'Thị trấn có bao nhiêu dân?', o:['Hai nghìn','Mười nghìn','Hai mươi nghìn','Năm mươi nghìn'], c:2, e:'с населением двадцать тысяч человек.' },
    { q:'Trong thư viện đang diễn ra gì?', o:['Triển lãm sách','Lớp tin học cho người về hưu','Buổi đọc thơ','Họp phụ huynh'], c:1, e:'шли курсы компьютерной грамотности для пенсионеров.' },
    { q:'Thư viện bây giờ là gì?', o:['Kho sách','Nơi cả thị trấn gặp lại chính mình','Quán cà phê','Trung tâm hành chính'], c:1, e:'место, где город встречается сам с собой.' }
  ],
  after:'Viết 7 câu về vai trò của thư viện, dùng зато · перестать быть · стать + Твор.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Công việc', title:'Работа из дома', vi:'Làm việc từ nhà',
  intro:'B1. Chùm từ trọng tâm: làm từ xa, ranh giới, kỷ luật.',
  text:[
    'Уже год я работаю из дома два дня в неделю. Сначала это казалось идеальным.',
    'Но скоро я заметил проблему: рабочий день не заканчивается. Компьютер стоит в той же комнате, где ты спишь.',
    'Тогда я ввёл правило: в семь вечера ноутбук закрывается и уходит в шкаф.',
    'Свобода без границ быстро превращается в работу без конца. Границы приходится ставить самому.'
  ],
  tr:[
    'Đã một năm nay tôi làm việc ở nhà hai ngày một tuần. Ban đầu điều đó có vẻ hoàn hảo.',
    'Nhưng chẳng bao lâu tôi nhận ra vấn đề: ngày làm việc không chịu kết thúc. Máy tính đặt ngay trong căn phòng mình ngủ.',
    'Thế là tôi đặt ra quy tắc: bảy giờ tối là gập máy lại và cất vào tủ.',
    'Tự do mà không có ranh giới thì rất nhanh biến thành công việc không có điểm dừng. Ranh giới ấy mình phải tự đặt.'
  ],
  keys:[
    { w:'идеа́льный', r:'ideál\'nyy', vi:'lý tưởng' },
    { w:'заме́тить', r:'zamétit\'', vi:'nhận ra' },
    { w:'тот же', r:'tot zhe', vi:'cùng một' },
    { w:'ввести́ пра́вило', r:'vvestí právilo', vi:'đặt ra quy tắc' },
    { w:'шкаф', r:'shkaf', vi:'tủ' },
    { w:'свобо́да', r:'svobóda', vi:'tự do' },
    { w:'превраща́ться в', r:'prevrashchát\'sya v', vi:'biến thành' },
    { w:'ста́вить грани́цы', r:'stávit\' granítsy', vi:'đặt ranh giới' }
  ],
  qs:[
    { q:'Làm ở nhà mấy ngày một tuần?', o:['Một','Hai','Ba','Cả tuần'], c:1, e:'два дня в неделю.' },
    { q:'Vấn đề là gì?', o:['Mạng yếu','Ngày làm việc không kết thúc','Bị cô lập','Thiếu thiết bị'], c:1, e:'рабочий день не заканчивается.' },
    { q:'Quy tắc người viết đặt ra?', o:['Không làm buổi tối cuối tuần','7 giờ tối gập máy, cất vào tủ','Chỉ làm ở quán cà phê','Tắt thông báo'], c:1, e:'в семь вечера ноутбук закрывается и уходит в шкаф.' }
  ],
  after:'Viết 7 câu về ranh giới công việc và nghỉ ngơi, dùng казаться · тогда я… · превращаться в.' },

{ lang:'ru', lv:'b1', mins:5, cat:'Văn hoá', title:'Музыка и память', vi:'Âm nhạc và ký ức',
  intro:'B1. Chùm từ trọng tâm: bài hát, ký ức, sự gắn bó với nơi chốn.',
  text:[
    'Есть песня, которую я впервые услышал в поезде между Москвой и Казанью.',
    'Я не понимал ни слова, но почему-то записал мелодию на телефон.',
    'Через год я нашёл текст и перевёл его. Песня оказалась о человеке, который возвращается домой поздно.',
    'Теперь, когда я слышу её, я вижу окно поезда и снег. Музыка хранит не смысл, а место и время.'
  ],
  tr:[
    'Có một bài hát tôi nghe lần đầu trên chuyến tàu giữa Moskva và Kazan.',
    'Tôi chẳng hiểu một chữ nào, nhưng không hiểu sao vẫn ghi lại giai điệu vào điện thoại.',
    'Một năm sau tôi tìm được lời và dịch ra. Hoá ra bài hát kể về một người trở về nhà muộn.',
    'Bây giờ mỗi lần nghe nó, tôi lại thấy khung cửa sổ toa tàu và tuyết. Âm nhạc giữ lại không phải ý nghĩa, mà là nơi chốn và thời gian.'
  ],
  keys:[
    { w:'впервы́е', r:'vpervýye', vi:'lần đầu tiên' },
    { w:'ни сло́ва', r:'ni slóva', vi:'không một chữ nào' },
    { w:'почему́-то', r:'pochemú-to', vi:'không hiểu sao' },
    { w:'мело́дия', r:'melódiya', vi:'giai điệu' },
    { w:'текст', r:'tekst', vi:'lời (bài hát)' },
    { w:'возвраща́ться', r:'vozvrashchát\'sya', vi:'trở về' },
    { w:'храни́ть', r:'khranít\'', vi:'gìn giữ' },
    { w:'смысл', r:'smysl', vi:'ý nghĩa' }
  ],
  qs:[
    { q:'Nghe bài hát lần đầu ở đâu?', o:['Trong quán','Trên tàu Moskva–Kazan','Ở nhà bạn','Trên radio'], c:1, e:'в поезде между Москвой и Казанью.' },
    { q:'Bài hát nói về gì?', o:['Tình yêu','Một người trở về nhà muộn','Mùa đông','Thành phố'], c:1, e:'о человеке, который возвращается домой поздно.' },
    { q:'Theo người viết, âm nhạc giữ lại gì?', o:['Ý nghĩa','Nơi chốn và thời gian','Cảm xúc','Giai điệu'], c:1, e:'Музыка хранит не смысл, а место и время.' }
  ],
  after:'Viết 7 câu về một bài hát gắn với ký ức, dùng впервые · почему-то · не…, а…' },

{ lang:'ru', lv:'b1', mins:5, cat:'Đời sống', title:'Письмо самому себе', vi:'Bức thư gửi chính mình',
  intro:'B1. Chùm từ trọng tâm: nhìn lại, tiến bộ, tự đối thoại.',
  text:[
    'Год назад преподаватель попросила нас написать письмо самим себе и запечатать конверт.',
    'На прошлой неделе она раздала конверты обратно. Я читал свой текст и не узнавал автора.',
    'Тот человек боялся говорить на уроке и считал, что никогда не сдаст экзамен.',
    'Я сдал. И теперь я знаю: прогресс почти невидим изнутри. Его замечаешь только тогда, когда смотришь назад.'
  ],
  tr:[
    'Một năm trước, cô giáo bảo chúng tôi viết một bức thư cho chính mình rồi dán phong bì lại.',
    'Tuần trước cô phát lại những chiếc phong bì đó. Tôi đọc bài của mình mà không nhận ra tác giả.',
    'Con người ấy sợ nói trong giờ học và tin rằng mình sẽ chẳng bao giờ thi đỗ.',
    'Tôi đã đỗ. Và giờ tôi biết: sự tiến bộ gần như vô hình khi nhìn từ bên trong. Chỉ khi ngoái lại ta mới thấy.'
  ],
  keys:[
    { w:'попроси́ть', r:'poprosít\'', vi:'yêu cầu, nhờ' },
    { w:'запеча́тать', r:'zapechátat\'', vi:'dán kín' },
    { w:'конве́рт', r:'konvért', vi:'phong bì' },
    { w:'разда́ть', r:'razdát\'', vi:'phát ra' },
    { w:'узнава́ть', r:'uznavát\'', vi:'nhận ra' },
    { w:'сдать экза́мен', r:'sdat\' ekzámen', vi:'thi đỗ' },
    { w:'неви́димый', r:'nevídimyy', vi:'vô hình' },
    { w:'изнутри́', r:'iznutrí', vi:'từ bên trong' }
  ],
  qs:[
    { q:'Cô giáo yêu cầu gì một năm trước?', o:['Viết nhật ký','Viết thư cho chính mình và dán kín','Ghi mục tiêu lên bảng','Quay video'], c:1, e:'написать письмо самим себе и запечатать конверт.' },
    { q:'Người viết cảm thấy gì khi đọc lại?', o:['Tự hào','Không nhận ra tác giả','Xấu hổ','Buồn cười'], c:1, e:'не узнавал автора.' },
    { q:'Kết luận về sự tiến bộ?', o:['Phải đo bằng điểm số','Gần như vô hình khi nhìn từ bên trong','Đến rất nhanh','Cần người khác đánh giá'], c:1, e:'прогресс почти невидим изнутри.' }
  ],
  after:'Viết một bức thư 7 câu cho chính bạn một năm sau, dùng попросить · считать, что… · только тогда, когда.' }

  );
})();
