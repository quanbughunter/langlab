/* ============================================================
   LangLab — Kho cụm động từ và thành ngữ tiếng Anh
   PHRASAL_EN : cụm động từ xếp theo động từ gốc
     p    — cụm động từ
     vi   — nghĩa tiếng Việt
     sep  — true nếu tách được (turn the light off), false nếu không
     obj  — 'yes' cần tân ngữ · 'no' không có tân ngữ · 'opt' tuỳ
     reg  — sắc thái: thân mật / trung tính / trang trọng
     ex   — [câu ví dụ, bản dịch]
     note — mẹo dùng, bẫy thường gặp
   IDIOMS_EN : thành ngữ xếp theo chủ đề
     p, mean (nghĩa đen nếu có), vi, reg, ex, note
   Nội dung do LangLab biên soạn cho người học Việt Nam.
   ============================================================ */

const PHRASAL_EN = [
{ v:'get', vi:'lấy, trở nên, đến', items:[
  { p:'get up', vi:'ra khỏi giường, đứng dậy', sep:false, obj:'no', reg:'trung tính', ex:['I get up at six every morning.','Sáng nào tôi cũng dậy lúc sáu giờ.'], note:'wake up = tỉnh giấc; get up = rời khỏi giường. Hai việc khác nhau.' },
  { p:'get on', vi:'lên (xe buýt, tàu, máy bay)', sep:false, obj:'opt', reg:'trung tính', ex:['We got on the bus at the last stop.','Chúng tôi lên xe ở bến cuối.'], note:'Lên phương tiện lớn dùng get on; lên xe con dùng get in.' },
  { p:'get off', vi:'xuống (xe buýt, tàu)', sep:false, obj:'opt', reg:'trung tính', ex:['Get off at the next stop.','Xuống ở bến sau nhé.'], note:'Xuống xe con thì dùng get out of.' },
  { p:'get on with', vi:'hoà hợp với ai; tiếp tục làm việc gì', sep:false, obj:'yes', reg:'thân mật', ex:['I get on well with my colleagues.','Tôi hợp với đồng nghiệp.'], note:'Kiểu Mỹ nói get along with.' },
  { p:'get over', vi:'vượt qua (nỗi buồn, bệnh, cú sốc)', sep:false, obj:'yes', reg:'trung tính', ex:['It took her months to get over the news.','Cô ấy mất mấy tháng mới nguôi ngoai chuyện đó.'], note:'Cũng dùng cho bệnh: get over a cold.' },
  { p:'get by', vi:'xoay xở đủ sống, tạm đủ dùng', sep:false, obj:'no', reg:'thân mật', ex:['She gets by on a small salary.','Cô ấy xoay xở sống với đồng lương ít ỏi.'], note:'Hàm ý vừa đủ, không dư dả.' },
  { p:'get through', vi:'vượt qua giai đoạn khó; liên lạc được', sep:false, obj:'yes', reg:'trung tính', ex:['I could not get through to the office.','Tôi không gọi được vào văn phòng.'], note:'Nghĩa liên lạc thường đi với «to».' },
  { p:'get away with', vi:'làm sai mà không bị phạt', sep:false, obj:'yes', reg:'thân mật', ex:['He cheated and got away with it.','Cậu ta gian lận mà không bị gì.'], note:'Luôn có tân ngữ, thường là «it».' },
  { p:'get across', vi:'truyền đạt được ý', sep:true, obj:'opt', reg:'trung tính', ex:['She got her point across clearly.','Cô ấy trình bày ý rất rõ.'], note:'Nhấn vào việc người nghe HIỂU được.' },
  { p:'get around to', vi:'rốt cuộc cũng làm được việc đã hoãn', sep:false, obj:'yes', reg:'thân mật', ex:['I finally got around to writing the report.','Cuối cùng tôi cũng viết được cái báo cáo.'], note:'Theo sau là V-ing vì «to» là giới từ.' },
  { p:'get rid of', vi:'vứt bỏ, tống khứ', sep:false, obj:'yes', reg:'thân mật', ex:['We got rid of the old sofa.','Chúng tôi bỏ cái ghế sofa cũ đi rồi.'], note:'Rất thông dụng trong nói, thay cho «throw away».' },
  { p:'get back to', vi:'liên lạc lại với ai', sep:false, obj:'yes', reg:'trung tính', ex:['I will get back to you tomorrow.','Mai tôi sẽ liên lạc lại với bạn.'], note:'Mẫu email công việc rất chuẩn.' }
]},

{ v:'take', vi:'lấy, mang', items:[
  { p:'take off', vi:'cất cánh; cởi ra; ăn nên làm ra', sep:true, obj:'opt', reg:'trung tính', ex:['The plane took off on time.','Máy bay cất cánh đúng giờ.'], note:'Ba nghĩa rất khác nhau, phải nhìn ngữ cảnh.' },
  { p:'take up', vi:'bắt đầu một sở thích; chiếm chỗ, chiếm thời gian', sep:true, obj:'yes', reg:'trung tính', ex:['He took up photography last year.','Năm ngoái anh ấy bắt đầu chơi ảnh.'], note:'take up space = chiếm chỗ.' },
  { p:'take after', vi:'giống ai trong nhà (ngoại hình, tính cách)', sep:false, obj:'yes', reg:'trung tính', ex:['She takes after her mother.','Cô ấy giống mẹ.'], note:'Chỉ dùng với người trong họ hàng, không dùng với bạn bè.' },
  { p:'take over', vi:'tiếp quản, nắm quyền', sep:true, obj:'opt', reg:'trung tính', ex:['A larger company took over the business.','Một công ty lớn hơn đã thâu tóm doanh nghiệp này.'] },
  { p:'take back', vi:'rút lại lời; trả lại hàng', sep:true, obj:'yes', reg:'trung tính', ex:['I take back what I said.','Tôi rút lại lời đã nói.'] },
  { p:'take in', vi:'tiếp thu thông tin; lừa ai', sep:true, obj:'yes', reg:'trung tính', ex:['There was too much information to take in.','Nhiều thông tin quá, tôi không tiếp thu hết.'], note:'Bị động «be taken in» nghĩa là bị lừa.' },
  { p:'take on', vi:'nhận thêm việc; tuyển thêm người', sep:true, obj:'yes', reg:'trung tính', ex:['She took on two new projects.','Cô ấy nhận thêm hai dự án.'] },
  { p:'take out', vi:'lấy ra; mời ai đi chơi', sep:true, obj:'yes', reg:'trung tính', ex:['He took out his phone.','Cậu ấy lấy điện thoại ra.'] },
  { p:'take part in', vi:'tham gia vào', sep:false, obj:'yes', reg:'trung tính', ex:['Fifty students took part in the survey.','Năm mươi sinh viên tham gia khảo sát.'], note:'Đồng nghĩa participate in nhưng thân mật hơn.' },
  { p:'take care of', vi:'chăm sóc; lo liệu việc gì', sep:false, obj:'yes', reg:'trung tính', ex:['Who takes care of the children?','Ai chăm bọn trẻ?'] }
]},

{ v:'put', vi:'đặt, để', items:[
  { p:'put off', vi:'hoãn lại; làm mất hứng', sep:true, obj:'yes', reg:'trung tính', ex:['They put off the meeting until Friday.','Họ hoãn cuộc họp tới thứ Sáu.'], note:'Nghĩa «làm mất hứng»: The smell put me off.' },
  { p:'put up with', vi:'chịu đựng', sep:false, obj:'yes', reg:'thân mật', ex:['I cannot put up with this noise.','Tôi không chịu nổi tiếng ồn này.'], note:'Ba từ, không tách được.' },
  { p:'put on', vi:'mặc vào; bật lên; tăng cân', sep:true, obj:'yes', reg:'trung tính', ex:['Put on your coat, it is cold.','Mặc áo khoác vào, lạnh đấy.'], note:'put on weight = tăng cân.' },
  { p:'put out', vi:'dập tắt (lửa); gây phiền', sep:true, obj:'yes', reg:'trung tính', ex:['Firefighters put out the fire in an hour.','Lính cứu hoả dập tắt đám cháy trong một tiếng.'] },
  { p:'put away', vi:'cất đi đúng chỗ', sep:true, obj:'yes', reg:'trung tính', ex:['Put your books away, please.','Cất sách đi nào.'] },
  { p:'put down', vi:'đặt xuống; chê bai ai', sep:true, obj:'yes', reg:'trung tính', ex:['He put the box down carefully.','Anh ấy đặt cái hộp xuống cẩn thận.'] },
  { p:'put forward', vi:'đề xuất (ý tưởng, kế hoạch)', sep:true, obj:'yes', reg:'trang trọng', ex:['She put forward an interesting proposal.','Cô ấy đưa ra một đề xuất thú vị.'] },
  { p:'put through', vi:'nối máy điện thoại', sep:true, obj:'yes', reg:'trung tính', ex:['I will put you through to reception.','Tôi nối máy cho anh tới lễ tân.'] },
  { p:'put aside', vi:'để dành; gác lại', sep:true, obj:'yes', reg:'trung tính', ex:['He puts aside some money every month.','Tháng nào cậu ấy cũng để dành một khoản.'] }
]},

{ v:'look', vi:'nhìn', items:[
  { p:'look for', vi:'tìm kiếm', sep:false, obj:'yes', reg:'trung tính', ex:['I am looking for my keys.','Tôi đang tìm chìa khoá.'], note:'look for = quá trình tìm · find = kết quả tìm thấy.' },
  { p:'look after', vi:'chăm sóc, trông nom', sep:false, obj:'yes', reg:'trung tính', ex:['She looks after her grandmother.','Cô ấy chăm bà.'] },
  { p:'look forward to', vi:'mong chờ', sep:false, obj:'yes', reg:'trung tính', ex:['I look forward to meeting you.','Tôi mong được gặp bạn.'], note:'«to» là giới từ nên theo sau là V-ing, KHÔNG phải V nguyên.' },
  { p:'look up', vi:'tra (từ điển); khá lên', sep:true, obj:'opt', reg:'trung tính', ex:['Look the word up in a dictionary.','Tra từ đó trong từ điển đi.'], note:'Tách được: look it up (bắt buộc tách khi tân ngữ là đại từ).' },
  { p:'look up to', vi:'ngưỡng mộ, kính trọng', sep:false, obj:'yes', reg:'trung tính', ex:['He looks up to his older brother.','Cậu ấy ngưỡng mộ anh trai.'] },
  { p:'look down on', vi:'coi thường', sep:false, obj:'yes', reg:'trung tính', ex:['Do not look down on people who work with their hands.','Đừng coi thường người lao động chân tay.'] },
  { p:'look into', vi:'điều tra, xem xét kỹ', sep:false, obj:'yes', reg:'trang trọng', ex:['We will look into the problem.','Chúng tôi sẽ xem xét vấn đề này.'] },
  { p:'look out', vi:'coi chừng, cẩn thận', sep:false, obj:'no', reg:'thân mật', ex:['Look out! There is a car.','Cẩn thận! Có xe kìa.'], note:'Cùng nghĩa với «watch out».' },
  { p:'look through', vi:'xem lướt qua', sep:false, obj:'yes', reg:'trung tính', ex:['I looked through the report quickly.','Tôi xem lướt bản báo cáo.'] }
]},

{ v:'come', vi:'đến', items:[
  { p:'come across', vi:'tình cờ gặp, tình cờ thấy; gây ấn tượng là', sep:false, obj:'yes', reg:'trung tính', ex:['I came across an old photo yesterday.','Hôm qua tôi tình cờ thấy một tấm ảnh cũ.'], note:'Nghĩa hai: He comes across as arrogant = anh ta trông có vẻ kiêu.' },
  { p:'come up with', vi:'nghĩ ra (ý tưởng, giải pháp)', sep:false, obj:'yes', reg:'trung tính', ex:['She came up with a brilliant idea.','Cô ấy nghĩ ra một ý tưởng tuyệt vời.'] },
  { p:'come back', vi:'quay lại', sep:false, obj:'no', reg:'trung tính', ex:['He came back at midnight.','Cậu ấy về lúc nửa đêm.'] },
  { p:'come along', vi:'đi cùng; tiến triển', sep:false, obj:'no', reg:'thân mật', ex:['How is the project coming along?','Dự án tiến triển thế nào?'] },
  { p:'come down with', vi:'nhiễm bệnh nhẹ', sep:false, obj:'yes', reg:'thân mật', ex:['I think I am coming down with a cold.','Chắc tôi sắp bị cảm.'] },
  { p:'come round', vi:'ghé chơi; tỉnh lại', sep:false, obj:'no', reg:'thân mật', ex:['Come round for dinner on Sunday.','Chủ nhật ghé nhà ăn tối nhé.'], note:'Kiểu Mỹ là come around.' },
  { p:'come up', vi:'nảy sinh, xuất hiện (vấn đề, cơ hội)', sep:false, obj:'no', reg:'trung tính', ex:['Something came up, so I cannot join.','Có việc phát sinh nên tôi không tham gia được.'] },
  { p:'come out', vi:'ra mắt, được công bố', sep:false, obj:'no', reg:'trung tính', ex:['The results come out on the twentieth.','Kết quả công bố ngày hai mươi.'] }
]},

{ v:'go', vi:'đi', items:[
  { p:'go on', vi:'tiếp tục; xảy ra', sep:false, obj:'no', reg:'trung tính', ex:['What is going on here?','Ở đây đang có chuyện gì vậy?'] },
  { p:'go out', vi:'ra ngoài chơi; (đèn, lửa) tắt', sep:false, obj:'no', reg:'trung tính', ex:['The lights went out suddenly.','Đèn phụt tắt.'] },
  { p:'go through', vi:'trải qua (khó khăn); xem xét kỹ', sep:false, obj:'yes', reg:'trung tính', ex:['She has gone through a lot this year.','Năm nay cô ấy trải qua nhiều chuyện.'] },
  { p:'go over', vi:'xem lại, ôn lại', sep:false, obj:'yes', reg:'trung tính', ex:['Let us go over the plan once more.','Ta xem lại kế hoạch một lần nữa nhé.'] },
  { p:'go off', vi:'(chuông) reo; (đồ ăn) hỏng; nổ', sep:false, obj:'no', reg:'trung tính', ex:['My alarm went off at five.','Chuông báo thức reo lúc năm giờ.'] },
  { p:'go ahead', vi:'cứ tiến hành', sep:false, obj:'no', reg:'thân mật', ex:['Go ahead, I am listening.','Cứ nói đi, tôi đang nghe.'] },
  { p:'go without', vi:'chịu thiếu, xoay xở không có', sep:false, obj:'yes', reg:'trung tính', ex:['They went without electricity for a week.','Họ sống một tuần không có điện.'] },
  { p:'go up / go down', vi:'tăng lên / giảm xuống', sep:false, obj:'no', reg:'trung tính', ex:['Prices have gone up again.','Giá lại tăng rồi.'] }
]},

{ v:'turn', vi:'quay', items:[
  { p:'turn on / turn off', vi:'bật / tắt', sep:true, obj:'yes', reg:'trung tính', ex:['Turn off the lights when you leave.','Ra khỏi phòng thì tắt đèn.'], note:'Với đại từ phải tách: turn it off.' },
  { p:'turn up', vi:'xuất hiện, có mặt; vặn to', sep:true, obj:'opt', reg:'thân mật', ex:['He turned up an hour late.','Cậu ta xuất hiện muộn một tiếng.'] },
  { p:'turn down', vi:'từ chối; vặn nhỏ', sep:true, obj:'yes', reg:'trung tính', ex:['She turned down the offer.','Cô ấy từ chối lời mời làm việc.'] },
  { p:'turn out', vi:'hoá ra là; kết cục là', sep:false, obj:'no', reg:'trung tính', ex:['It turned out to be a good decision.','Hoá ra đó là quyết định đúng.'] },
  { p:'turn into', vi:'biến thành', sep:false, obj:'yes', reg:'trung tính', ex:['The rain turned into a storm.','Cơn mưa biến thành bão.'] },
  { p:'turn back', vi:'quay đầu lại', sep:false, obj:'no', reg:'trung tính', ex:['It was too dark, so we turned back.','Trời tối quá nên chúng tôi quay lại.'] }
]},

{ v:'break', vi:'vỡ, gãy', items:[
  { p:'break down', vi:'hỏng máy; suy sụp tinh thần', sep:false, obj:'no', reg:'trung tính', ex:['My motorbike broke down on the way.','Xe tôi hỏng giữa đường.'] },
  { p:'break up', vi:'chia tay; tan (lớp, buổi họp)', sep:false, obj:'no', reg:'thân mật', ex:['They broke up after three years.','Họ chia tay sau ba năm.'] },
  { p:'break into', vi:'đột nhập', sep:false, obj:'yes', reg:'trung tính', ex:['Someone broke into the shop last night.','Đêm qua có người đột nhập cửa hàng.'] },
  { p:'break out', vi:'bùng phát (chiến tranh, dịch, cháy)', sep:false, obj:'no', reg:'trung tính', ex:['A fire broke out in the kitchen.','Đám cháy bùng lên trong bếp.'] },
  { p:'break off', vi:'ngừng đột ngột; cắt đứt quan hệ', sep:true, obj:'opt', reg:'trang trọng', ex:['The two countries broke off talks.','Hai nước ngừng đàm phán.'] }
]},

{ v:'bring', vi:'mang tới', items:[
  { p:'bring up', vi:'nuôi dạy; nêu ra chủ đề', sep:true, obj:'yes', reg:'trung tính', ex:['She was brought up by her grandparents.','Cô ấy do ông bà nuôi lớn.'] },
  { p:'bring about', vi:'gây ra, dẫn tới', sep:true, obj:'yes', reg:'trang trọng', ex:['The law brought about big changes.','Đạo luật dẫn tới nhiều thay đổi lớn.'] },
  { p:'bring back', vi:'gợi lại (kỷ niệm); trả lại', sep:true, obj:'yes', reg:'trung tính', ex:['That song brings back memories.','Bài hát đó gợi lại nhiều kỷ niệm.'] },
  { p:'bring in', vi:'mang lại (doanh thu); đưa ra (quy định)', sep:true, obj:'yes', reg:'trung tính', ex:['The shop brings in a good income.','Cửa hàng mang lại thu nhập tốt.'] }
]},

{ v:'give', vi:'cho', items:[
  { p:'give up', vi:'bỏ cuộc; từ bỏ thói quen', sep:true, obj:'opt', reg:'trung tính', ex:['He gave up smoking last year.','Năm ngoái anh ấy bỏ thuốc.'], note:'Theo sau là V-ing chứ không phải to V.' },
  { p:'give in', vi:'nhượng bộ, chịu thua', sep:false, obj:'no', reg:'trung tính', ex:['After an hour, she gave in.','Sau một tiếng, cô ấy chịu nhượng bộ.'] },
  { p:'give away', vi:'cho không; để lộ bí mật', sep:true, obj:'yes', reg:'trung tính', ex:['He gave away all his old books.','Anh ấy cho hết sách cũ.'] },
  { p:'give back', vi:'trả lại', sep:true, obj:'yes', reg:'trung tính', ex:['Give me back my pen, please.','Trả tớ cái bút đi.'] },
  { p:'give out', vi:'phát ra, phân phát', sep:true, obj:'yes', reg:'trung tính', ex:['They gave out free samples.','Họ phát hàng mẫu miễn phí.'] }
]},

{ v:'run', vi:'chạy', items:[
  { p:'run out of', vi:'hết, cạn', sep:false, obj:'yes', reg:'trung tính', ex:['We have run out of milk.','Nhà hết sữa rồi.'] },
  { p:'run into', vi:'tình cờ gặp; đâm vào', sep:false, obj:'yes', reg:'thân mật', ex:['I ran into an old friend at the market.','Tôi tình cờ gặp một người bạn cũ ở chợ.'] },
  { p:'run over', vi:'cán qua (xe); đọc lướt lại', sep:false, obj:'yes', reg:'trung tính', ex:['Let us run over the details once more.','Ta lướt lại chi tiết một lần nữa nhé.'] },
  { p:'run after', vi:'đuổi theo', sep:false, obj:'yes', reg:'trung tính', ex:['The dog ran after the bike.','Con chó đuổi theo xe đạp.'] }
]},

{ v:'set', vi:'đặt, cài', items:[
  { p:'set up', vi:'thành lập; lắp đặt', sep:true, obj:'yes', reg:'trung tính', ex:['They set up the company in 2019.','Họ thành lập công ty năm 2019.'] },
  { p:'set off', vi:'khởi hành; kích hoạt', sep:true, obj:'opt', reg:'trung tính', ex:['We set off at dawn.','Chúng tôi khởi hành lúc rạng sáng.'] },
  { p:'set out', vi:'lên đường; trình bày rõ ràng', sep:false, obj:'no', reg:'trang trọng', ex:['The report sets out three options.','Bản báo cáo trình bày ba phương án.'] },
  { p:'set aside', vi:'dành riêng ra', sep:true, obj:'yes', reg:'trung tính', ex:['Set aside an hour for revision.','Dành riêng một tiếng để ôn bài.'] }
]},

{ v:'carry / call / cut', vi:'nhóm khác', items:[
  { p:'carry on', vi:'tiếp tục', sep:false, obj:'no', reg:'trung tính', ex:['Carry on, you are doing well.','Cứ tiếp tục đi, bạn làm tốt lắm.'] },
  { p:'carry out', vi:'thực hiện (nghiên cứu, kế hoạch)', sep:true, obj:'yes', reg:'trang trọng', ex:['They carried out a survey last year.','Họ thực hiện một khảo sát năm ngoái.'] },
  { p:'call off', vi:'huỷ bỏ', sep:true, obj:'yes', reg:'trung tính', ex:['The match was called off because of rain.','Trận đấu bị huỷ vì mưa.'] },
  { p:'call back', vi:'gọi lại', sep:true, obj:'opt', reg:'trung tính', ex:['I will call you back in ten minutes.','Mười phút nữa tôi gọi lại cho bạn.'] },
  { p:'cut down on', vi:'cắt giảm', sep:false, obj:'yes', reg:'trung tính', ex:['You should cut down on sugar.','Bạn nên giảm đường.'] },
  { p:'cut off', vi:'ngắt, cắt đứt', sep:true, obj:'yes', reg:'trung tính', ex:['The village was cut off by the flood.','Ngôi làng bị cô lập vì lũ.'] }
]},

{ v:'work / find / keep', vi:'nhóm khác', items:[
  { p:'work out', vi:'tập thể dục; tính ra; ổn thoả', sep:true, obj:'opt', reg:'trung tính', ex:['Everything worked out in the end.','Cuối cùng mọi chuyện cũng ổn.'] },
  { p:'work on', vi:'đang làm dở việc gì', sep:false, obj:'yes', reg:'trung tính', ex:['She is working on her thesis.','Cô ấy đang làm luận văn.'] },
  { p:'find out', vi:'tìm ra, phát hiện thông tin', sep:true, obj:'yes', reg:'trung tính', ex:['I found out the truth later.','Sau đó tôi biết được sự thật.'], note:'find = tìm thấy vật · find out = biết được thông tin.' },
  { p:'keep up with', vi:'theo kịp', sep:false, obj:'yes', reg:'trung tính', ex:['It is hard to keep up with the news.','Khó mà theo kịp tin tức.'] },
  { p:'keep on', vi:'cứ tiếp tục làm', sep:false, obj:'yes', reg:'thân mật', ex:['He kept on asking the same question.','Cậu ta cứ hỏi mãi một câu.'] }
]}
];

const IDIOMS_EN = [
{ cat:'Thời gian', items:[
  { p:'once in a blue moon', vi:'hoạ hoằn lắm mới có một lần', reg:'thân mật', ex:['We only meet once in a blue moon.','Hoạ hoằn lắm chúng tôi mới gặp nhau.'] },
  { p:'in the nick of time', vi:'vừa kịp lúc, sát nút', reg:'trung tính', ex:['The ambulance arrived in the nick of time.','Xe cứu thương đến vừa kịp lúc.'] },
  { p:'call it a day', vi:'nghỉ tay, dừng công việc hôm nay', reg:'thân mật', ex:['It is nine o’clock — let us call it a day.','Chín giờ rồi, nghỉ thôi.'] },
  { p:'better late than never', vi:'muộn còn hơn không', reg:'trung tính', ex:['He apologised after a year, but better late than never.','Một năm sau anh ta mới xin lỗi, nhưng muộn còn hơn không.'] },
  { p:'time flies', vi:'thời gian trôi nhanh', reg:'trung tính', ex:['Time flies when you are busy.','Bận rộn thì thời gian trôi vèo.'] },
  { p:'in the long run', vi:'xét về lâu dài', reg:'trung tính', ex:['Learning grammar pays off in the long run.','Học ngữ pháp về lâu dài rất đáng.'] },
  { p:'around the clock', vi:'suốt ngày đêm', reg:'trung tính', ex:['The hospital works around the clock.','Bệnh viện hoạt động suốt ngày đêm.'] },
  { p:'kill time', vi:'giết thời gian', reg:'thân mật', ex:['I read a magazine to kill time.','Tôi đọc tạp chí cho qua thời gian.'] },
  { p:'beat the clock', vi:'hoàn thành trước hạn', reg:'thân mật', ex:['We beat the clock and finished early.','Chúng tôi làm xong trước hạn.'] },
  { p:'at the eleventh hour', vi:'vào phút chót', reg:'trang trọng', ex:['The deal was saved at the eleventh hour.','Thoả thuận được cứu vào phút chót.'] }
]},
{ cat:'Tiền bạc', items:[
  { p:'cost an arm and a leg', vi:'đắt cắt cổ', reg:'thân mật', ex:['That laptop cost an arm and a leg.','Cái laptop đó đắt cắt cổ.'] },
  { p:'make ends meet', vi:'kiếm đủ sống, chật vật xoay xở', reg:'trung tính', ex:['They work two jobs to make ends meet.','Họ làm hai việc để đủ sống.'] },
  { p:'break the bank', vi:'tốn quá nhiều tiền', reg:'thân mật', ex:['A short trip will not break the bank.','Một chuyến đi ngắn thì không tốn kém lắm đâu.'] },
  { p:'tighten your belt', vi:'thắt lưng buộc bụng', reg:'trung tính', ex:['We had to tighten our belts last year.','Năm ngoái nhà tôi phải thắt lưng buộc bụng.'] },
  { p:'a rip-off', vi:'giá cắt cổ, bị chặt chém', reg:'thân mật', ex:['Fifty dollars for a coffee? What a rip-off!','Năm mươi đô một ly cà phê? Chặt chém quá!'] },
  { p:'worth every penny', vi:'đáng đồng tiền bát gạo', reg:'trung tính', ex:['The course was expensive but worth every penny.','Khoá học đắt nhưng đáng từng đồng.'] },
  { p:'save for a rainy day', vi:'để dành phòng khi khó khăn', reg:'trung tính', ex:['She always saves for a rainy day.','Cô ấy luôn để dành phòng lúc khó khăn.'] },
  { p:'money does not grow on trees', vi:'tiền không tự nhiên mà có', reg:'thân mật', ex:['Be careful — money does not grow on trees.','Cẩn thận đấy, tiền không tự nhiên mà có đâu.'] },
  { p:'foot the bill', vi:'chi trả toàn bộ hoá đơn', reg:'trung tính', ex:['The company footed the bill for the trip.','Công ty chi trả toàn bộ chuyến đi.'] }
]},
{ cat:'Công việc', items:[
  { p:'go the extra mile', vi:'làm hơn cả mức được yêu cầu', reg:'trung tính', ex:['She always goes the extra mile for clients.','Cô ấy luôn làm hơn mức yêu cầu vì khách hàng.'] },
  { p:'think outside the box', vi:'nghĩ khác lối mòn', reg:'trung tính', ex:['We need someone who thinks outside the box.','Chúng tôi cần người biết nghĩ khác lối mòn.'] },
  { p:'get the ball rolling', vi:'khởi động, bắt đầu triển khai', reg:'thân mật', ex:['Let us get the ball rolling with a short meeting.','Ta khởi động bằng một cuộc họp ngắn nhé.'] },
  { p:'be snowed under', vi:'ngập trong công việc', reg:'thân mật', ex:['I am snowed under with reports this week.','Tuần này tôi ngập trong báo cáo.'] },
  { p:'learn the ropes', vi:'học việc, nắm quy trình', reg:'thân mật', ex:['It takes a month to learn the ropes.','Mất một tháng để nắm được việc.'] },
  { p:'a ballpark figure', vi:'con số ước chừng', reg:'thân mật', ex:['Can you give me a ballpark figure?','Cho tôi một con số ước chừng được không?'] },
  { p:'touch base', vi:'trao đổi nhanh, cập nhật tình hình', reg:'thân mật', ex:['Let us touch base on Friday.','Thứ Sáu ta trao đổi nhanh nhé.'] },
  { p:'back to square one', vi:'quay về vạch xuất phát', reg:'trung tính', ex:['The client changed his mind, so we are back to square one.','Khách đổi ý nên chúng tôi phải làm lại từ đầu.'] },
  { p:'pull your weight', vi:'gánh phần việc của mình', reg:'trung tính', ex:['Everyone has to pull their weight in a team.','Trong nhóm ai cũng phải gánh phần việc của mình.'] },
  { p:'cut corners', vi:'làm ẩu, cắt bớt công đoạn', reg:'trung tính', ex:['Do not cut corners on safety.','Đừng làm ẩu ở khâu an toàn.'] }
]},
{ cat:'Cảm xúc', items:[
  { p:'over the moon', vi:'vui sướng tột độ', reg:'thân mật', ex:['She was over the moon about the results.','Cô ấy mừng phát điên với kết quả.'] },
  { p:'down in the dumps', vi:'buồn bã, chán nản', reg:'thân mật', ex:['He has been down in the dumps all week.','Cả tuần nay cậu ấy ỉu xìu.'] },
  { p:'get cold feet', vi:'chùn bước vào phút chót', reg:'thân mật', ex:['He got cold feet before the presentation.','Cậu ấy chùn bước ngay trước buổi thuyết trình.'] },
  { p:'on cloud nine', vi:'lâng lâng hạnh phúc', reg:'thân mật', ex:['They were on cloud nine after the wedding.','Sau đám cưới họ lâng lâng hạnh phúc.'] },
  { p:'have butterflies in your stomach', vi:'hồi hộp bồn chồn', reg:'thân mật', ex:['I had butterflies in my stomach before the interview.','Trước buổi phỏng vấn tôi hồi hộp lắm.'] },
  { p:'blow off steam', vi:'xả stress', reg:'thân mật', ex:['He runs to blow off steam.','Cậu ấy chạy bộ để xả stress.'] },
  { p:'lose your temper', vi:'nổi nóng', reg:'trung tính', ex:['I lost my temper and I regret it.','Tôi đã nổi nóng và giờ thấy hối hận.'] },
  { p:'a weight off your shoulders', vi:'trút được gánh nặng', reg:'trung tính', ex:['Handing in the essay was a weight off my shoulders.','Nộp xong bài luận là trút được gánh nặng.'] }
]},
{ cat:'Học tập', items:[
  { p:'hit the books', vi:'cắm đầu vào học', reg:'thân mật', ex:['I have to hit the books this weekend.','Cuối tuần này tôi phải cắm đầu vào học.'] },
  { p:'learn something by heart', vi:'học thuộc lòng', reg:'trung tính', ex:['We had to learn the poem by heart.','Chúng tôi phải học thuộc lòng bài thơ.'] },
  { p:'a steep learning curve', vi:'giai đoạn đầu học rất vất vả', reg:'trung tính', ex:['The new software has a steep learning curve.','Phần mềm mới lúc đầu học khá vất vả.'] },
  { p:'get the hang of something', vi:'quen tay, nắm được cách làm', reg:'thân mật', ex:['After a week I got the hang of it.','Sau một tuần thì tôi quen tay.'] },
  { p:'pass with flying colours', vi:'đỗ với điểm rất cao', reg:'trung tính', ex:['She passed the exam with flying colours.','Cô ấy đỗ với điểm rất cao.'] },
  { p:'brainstorm ideas', vi:'động não tìm ý tưởng', reg:'trung tính', ex:['Let us brainstorm ideas for the essay.','Cùng động não tìm ý cho bài luận nào.'] },
  { p:'it is not rocket science', vi:'có gì mà khó, đâu phải chuyện cao siêu', reg:'thân mật', ex:['Come on, it is not rocket science.','Thôi nào, có gì mà khó đâu.'] },
  { p:'burn the midnight oil', vi:'thức khuya làm việc, học bài', reg:'trung tính', ex:['He burned the midnight oil before the test.','Cậu ấy thức khuya ôn trước kỳ thi.'] }
]},
{ cat:'Giao tiếp', items:[
  { p:'break the ice', vi:'phá tan không khí ngượng ngùng', reg:'trung tính', ex:['A simple question can break the ice.','Một câu hỏi đơn giản có thể phá tan bầu không khí ngại ngùng.'] },
  { p:'get to the point', vi:'vào thẳng vấn đề', reg:'trung tính', ex:['Please get to the point.','Xin hãy vào thẳng vấn đề.'] },
  { p:'beat about the bush', vi:'nói vòng vo', reg:'thân mật', ex:['Stop beating about the bush.','Đừng vòng vo nữa.'], note:'Kiểu Mỹ: beat around the bush.' },
  { p:'see eye to eye', vi:'đồng quan điểm', reg:'trung tính', ex:['We do not see eye to eye on this.','Chuyện này chúng tôi không đồng quan điểm.'] },
  { p:'agree to disagree', vi:'chấp nhận là mỗi người một ý', reg:'trung tính', ex:['Let us agree to disagree.','Thôi thì mỗi người một ý vậy.'] },
  { p:'put your foot in it', vi:'lỡ miệng nói hớ', reg:'thân mật', ex:['I really put my foot in it at dinner.','Bữa tối tôi lỡ miệng thật sự.'] },
  { p:'read between the lines', vi:'hiểu ý ngầm', reg:'trung tính', ex:['Read between the lines of her email.','Đọc kỹ ý ngầm trong email của cô ấy.'] },
  { p:'on the same page', vi:'cùng chung cách hiểu', reg:'thân mật', ex:['Let us make sure we are on the same page.','Ta thống nhất cách hiểu đã nhé.'] }
]},
{ cat:'Khó khăn', items:[
  { p:'bite the bullet', vi:'cắn răng chịu đựng, làm việc khó', reg:'trung tính', ex:['I bit the bullet and told my boss.','Tôi cắn răng nói với sếp.'] },
  { p:'face the music', vi:'đối mặt với hậu quả', reg:'trung tính', ex:['He has to face the music tomorrow.','Ngày mai cậu ta phải đối mặt với hậu quả.'] },
  { p:'a blessing in disguise', vi:'trong cái rủi có cái may', reg:'trung tính', ex:['Losing that job was a blessing in disguise.','Mất việc đó hoá ra lại may.'] },
  { p:'the last straw', vi:'giọt nước tràn ly', reg:'trung tính', ex:['That comment was the last straw.','Câu nói đó là giọt nước tràn ly.'] },
  { p:'between a rock and a hard place', vi:'tiến thoái lưỡng nan', reg:'trung tính', ex:['I am between a rock and a hard place.','Tôi đang tiến thoái lưỡng nan.'] },
  { p:'when it rains, it pours', vi:'hoạ vô đơn chí', reg:'thân mật', ex:['My phone broke and then my bike. When it rains, it pours.','Điện thoại hỏng rồi tới xe. Hoạ vô đơn chí.'] },
  { p:'in hot water', vi:'gặp rắc rối', reg:'thân mật', ex:['He is in hot water with the manager.','Cậu ta đang gặp rắc rối với quản lý.'] },
  { p:'a storm in a teacup', vi:'chuyện bé xé ra to', reg:'trung tính', ex:['It was just a storm in a teacup.','Chuyện bé xé ra to thôi mà.'], note:'Kiểu Mỹ: a tempest in a teapot.' }
]},
{ cat:'Thành công và may mắn', items:[
  { p:'hit the nail on the head', vi:'nói trúng phóc', reg:'trung tính', ex:['You hit the nail on the head.','Bạn nói trúng phóc.'] },
  { p:'a piece of cake', vi:'dễ như ăn bánh', reg:'thân mật', ex:['The test was a piece of cake.','Bài kiểm tra dễ ợt.'] },
  { p:'break a leg', vi:'chúc may mắn (sân khấu, thi cử)', reg:'thân mật', ex:['Break a leg tomorrow!','Chúc may mắn ngày mai nhé!'] },
  { p:'the best of both worlds', vi:'được cả đôi đường', reg:'trung tính', ex:['Working from home gives me the best of both worlds.','Làm việc ở nhà cho tôi cả đôi đường.'] },
  { p:'a golden opportunity', vi:'cơ hội vàng', reg:'trung tính', ex:['This is a golden opportunity for you.','Đây là cơ hội vàng cho bạn.'] },
  { p:'pay off', vi:'mang lại kết quả xứng đáng', reg:'trung tính', ex:['All that practice paid off.','Bao công luyện tập đã được đền đáp.'] },
  { p:'on the ball', vi:'nhanh nhạy, bắt nhịp tốt', reg:'thân mật', ex:['The new assistant is really on the ball.','Trợ lý mới nhanh nhạy lắm.'] }
]},
{ cat:'Con người và tính cách', items:[
  { p:'a couch potato', vi:'người lười, cả ngày nằm xem tivi', reg:'thân mật', ex:['Do not be a couch potato all weekend.','Đừng nằm ườn xem tivi cả cuối tuần.'] },
  { p:'a people person', vi:'người khéo giao tiếp', reg:'thân mật', ex:['She is a real people person.','Cô ấy rất khéo giao tiếp.'] },
  { p:'have a heart of gold', vi:'có tấm lòng vàng', reg:'trung tính', ex:['He has a heart of gold.','Anh ấy có tấm lòng vàng.'] },
  { p:'as stubborn as a mule', vi:'bướng như con la', reg:'thân mật', ex:['My brother is as stubborn as a mule.','Anh tôi bướng kinh khủng.'] },
  { p:'the black sheep of the family', vi:'người khác biệt, bị coi là cá biệt trong nhà', reg:'trung tính', ex:['He was the black sheep of the family.','Cậu ấy bị coi là cá biệt trong nhà.'] },
  { p:'wear your heart on your sleeve', vi:'để lộ hết cảm xúc ra ngoài', reg:'trung tính', ex:['She wears her heart on her sleeve.','Cô ấy để lộ hết cảm xúc.'] },
  { p:'have a sweet tooth', vi:'hảo ngọt', reg:'thân mật', ex:['I have a sweet tooth.','Tôi hảo ngọt lắm.'] }
]},
{ cat:'Thời tiết và thiên nhiên', items:[
  { p:'under the weather', vi:'không khoẻ trong người', reg:'thân mật', ex:['I am feeling a bit under the weather.','Tôi thấy trong người hơi mệt.'], note:'Không liên quan tới thời tiết thật.' },
  { p:'it is raining cats and dogs', vi:'mưa như trút nước', reg:'thân mật', ex:['We stayed in — it was raining cats and dogs.','Chúng tôi ở nhà, ngoài kia mưa như trút.'], note:'Hơi cũ; người bản ngữ ngày nay hay nói «it is pouring».' },
  { p:'a ray of sunshine', vi:'tia nắng, người mang lại niềm vui', reg:'trung tính', ex:['She is a ray of sunshine in the office.','Cô ấy là tia nắng của văn phòng.'] },
  { p:'take a rain check', vi:'hẹn dịp khác', reg:'thân mật', ex:['Can I take a rain check on dinner?','Bữa tối để hôm khác được không?'] },
  { p:'the calm before the storm', vi:'sự yên ắng trước cơn bão', reg:'trung tính', ex:['This week is the calm before the storm.','Tuần này là sự yên ắng trước cơn bão.'] },
  { p:'go with the flow', vi:'thuận theo hoàn cảnh', reg:'thân mật', ex:['Just go with the flow.','Cứ thuận theo tự nhiên đi.'] }
]},
{ cat:'Cơ thể', items:[
  { p:'give someone a hand', vi:'giúp ai một tay', reg:'thân mật', ex:['Could you give me a hand with this box?','Giúp tôi một tay cái hộp này được không?'] },
  { p:'keep an eye on', vi:'trông chừng', reg:'thân mật', ex:['Keep an eye on my bag, please.','Trông giúp tôi cái túi nhé.'] },
  { p:'pull someone’s leg', vi:'trêu ai, đùa ai', reg:'thân mật', ex:['Relax, I am just pulling your leg.','Bình tĩnh, tôi đùa thôi mà.'] },
  { p:'get something off your chest', vi:'nói ra cho nhẹ lòng', reg:'thân mật', ex:['I needed to get it off my chest.','Tôi cần nói ra cho nhẹ lòng.'] },
  { p:'play it by ear', vi:'tuỳ cơ ứng biến', reg:'thân mật', ex:['We have no plan — let us play it by ear.','Chưa có kế hoạch, cứ tuỳ cơ ứng biến thôi.'] },
  { p:'cost someone their head', vi:'khiến ai mất chức', reg:'trung tính', ex:['The scandal cost the minister his job.','Vụ bê bối khiến vị bộ trưởng mất chức.'] },
  { p:'be all ears', vi:'lắng nghe chăm chú', reg:'thân mật', ex:['Tell me what happened — I am all ears.','Kể tôi nghe đi, tôi đang rất muốn nghe.'] }
]},
{ cat:'Động vật', items:[
  { p:'let the cat out of the bag', vi:'lỡ để lộ bí mật', reg:'thân mật', ex:['He let the cat out of the bag about the party.','Cậu ta lỡ miệng làm lộ bữa tiệc bất ngờ.'] },
  { p:'kill two birds with one stone', vi:'một công đôi việc', reg:'trung tính', ex:['I study on the bus and kill two birds with one stone.','Tôi học trên xe buýt, một công đôi việc.'] },
  { p:'the elephant in the room', vi:'vấn đề ai cũng thấy nhưng không ai nói', reg:'trung tính', ex:['Nobody mentioned the elephant in the room.','Không ai nhắc tới cái vấn đề rành rành đó.'] },
  { p:'a dark horse', vi:'ẩn số, người có tài mà giấu kín', reg:'trung tính', ex:['He is a bit of a dark horse.','Cậu ấy là một ẩn số.'] },
  { p:'straight from the horse’s mouth', vi:'tin từ chính người trong cuộc', reg:'thân mật', ex:['I heard it straight from the horse’s mouth.','Tôi nghe trực tiếp từ người trong cuộc.'] },
  { p:'a fish out of water', vi:'lạc lõng, không hợp môi trường', reg:'trung tính', ex:['I felt like a fish out of water at the party.','Ở bữa tiệc tôi thấy lạc lõng.'] },
  { p:'hold your horses', vi:'từ từ đã, khoan đã', reg:'thân mật', ex:['Hold your horses, we have not decided yet.','Khoan đã, mình chưa quyết mà.'] }
]}
];

if (typeof module !== 'undefined'){ module.exports = { PHRASAL_EN, IDIOMS_EN }; }
