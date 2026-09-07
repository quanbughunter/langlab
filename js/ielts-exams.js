/* ============================================================
   LangLab — Đề thi thử IELTS
   Do LangLab tự biên soạn theo dạng thức IELTS Academic (ielts.org),
   KHÔNG phải đề thi chính thức của British Council / IDP / Cambridge.

   Cấu trúc đề đầy đủ trong app (phần làm trên giấy/máy):
     Listening  40 câu · 30 phút · nghe 1 lần
     Reading    40 câu · 60 phút · 3 bài đọc
     Writing     2 task · 60 phút (Task 1 ≥150 từ · Task 2 ≥250 từ)
   Phần Speaking là buổi vấn đáp riêng ngoài đề giấy — xem màn «Luyện nói».

   Quy đổi band: bảng IELTS_BAND (raw 0–40 → band) áp cho Listening và
   Reading Academic; Writing chấm tự động theo độ dài và từ khoá bắt buộc,
   chỉ mang tính ước lượng, cần tự đối chiếu bài mẫu.
   ============================================================ */

/* Bảng quy đổi điểm thô (0–40) sang band — theo thang công bố của IELTS */
const IELTS_BAND = {
  listening: [[39,9],[37,8.5],[35,8],[32,7.5],[30,7],[26,6.5],[23,6],[18,5.5],[16,5],[13,4.5],[11,4],[8,3.5],[6,3]],
  academic:  [[39,9],[37,8.5],[35,8],[33,7.5],[30,7],[27,6.5],[23,6],[19,5.5],[15,5],[13,4.5],[10,4],[8,3.5],[6,3]]
};
function ieltsBand(raw, kind){
  const table = IELTS_BAND[kind === 'listening' ? 'listening' : 'academic'];
  for (let i = 0; i < table.length; i++) if (raw >= table[i][0]) return table[i][1];
  return 2.5;
}
/* Làm tròn band tổng theo quy tắc IELTS: .25 → làm tròn lên .5 · .75 → lên 1 */
function ieltsRound(x){
  const f = Math.floor(x), d = x - f;
  if (d < 0.25) return f;
  if (d < 0.75) return f + 0.5;
  return f + 1;
}

const IELTS_EXAMS = [

{
  id:'ielts-academic-1', lang:'en', level:'ielts', badge:'IELTS · Academic', title:'Đề thi thử IELTS Academic — Đề 1',
  official:'Đúng cấu trúc phần giấy: Listening 40 câu (30′, nghe 1 lần) · Reading 40 câu (60′, 3 bài) · Writing 2 task (60′). Speaking là buổi vấn đáp riêng 11–14 phút — luyện ở màn «Luyện nói».',
  minutes:150, maxScore:300, pass:180, passEach:0, plays:1,
  sections:[
    { id:'L', name:'Listening', vi:'Nghe · 40 câu · 30 phút', parts:[
      { title:'Part 1 — Questions 1–10', ins:'Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.', vi:'Câu 1–10: Nghe cuộc gọi hỏi thuê nhà. Điền MỘT TỪ VÀ/HOẶC MỘT SỐ vào mỗi chỗ trống.',
        qs:[
          { k:'listen', t:'char', q:'STUDENT ACCOMMODATION — Enquiry form\nName of caller: Quan Nguyen\nType of accommodation wanted: a ___ (1) room', ans:'single', alt:['a single'], e:'«I am looking for a single room, not a shared one.» → single.',
            a:'Good morning, Riverside Student Housing. How can I help you? — Good morning. My name is Quan Nguyen. I am looking for a single room, not a shared one.' },
          { k:'listen', t:'char', q:'Preferred area: near the ___ (2)', ans:'library', alt:['the library','main library'], e:'«somewhere near the library» → library.',
            a:'And which part of the city would you prefer? — Somewhere near the library if possible, because I study late.' },
          { k:'listen', t:'char', q:'Maximum rent per month: £ ___ (3)', ans:'480', alt:['480 pounds','£480'], e:'«my limit is four hundred and eighty pounds» → 480.',
            a:'What is your budget? — Well, my limit is four hundred and eighty pounds a month, including bills if possible.' },
          { k:'listen', t:'char', q:'Length of stay: ___ (4) months', ans:'nine', alt:['9'], e:'«for nine months, from September» → nine.',
            a:'How long would you like to stay? — For nine months, from September until the end of May.' },
          { k:'listen', t:'char', q:'Must have: a desk and good ___ (5)', ans:'internet', alt:['wifi','wi-fi'], e:'«a proper desk and good internet» → internet.',
            a:'Any special requirements? — Just two things really: a proper desk and good internet. I have online classes twice a week.' },
          { k:'listen', t:'char', q:'Room 12A: on the ___ (6) floor', ans:'third', alt:['3rd'], e:'«on the third floor» → third.',
            a:'I have one room that might suit you. Room twelve A, on the third floor. There is a lift, so the stairs are not a problem.' },
          { k:'listen', t:'char', q:'Rent includes electricity but NOT ___ (7)', ans:'water', alt:['the water'], e:'«everything except water» → water.',
            a:'Does the rent include bills? — It includes electricity, heating and internet. Everything except water, which is billed separately every three months.' },
          { k:'listen', t:'char', q:'Deposit: ___ (8) weeks’ rent', ans:'two', alt:['2'], e:'«a deposit of two weeks’ rent» → two.',
            a:'Is there a deposit? — Yes, a deposit of two weeks’ rent, returned when you leave if there is no damage.' },
          { k:'listen', t:'char', q:'Viewing arranged for: ___ (9) at 4 p.m.', ans:'Thursday', alt:['thursday'], e:'«Thursday at four» → Thursday.',
            a:'When could I see it? — I could show you the room on Wednesday or Thursday afternoon. — Thursday at four would be better for me.' },
          { k:'listen', t:'char', q:'Contact name at reception: Ms ___ (10)', ans:'Palmer', alt:['palmer'], e:'«ask for Ms Palmer, P-A-L-M-E-R» → Palmer.',
            a:'When you arrive, ask for Ms Palmer at reception. That is P-A-L-M-E-R.' }
        ] },
      { title:'Part 2 — Questions 11–20', ins:'Choose the correct letter, A, B or C.', vi:'Câu 11–20: Nghe bài giới thiệu về một trung tâm cộng đồng. Chọn A, B hoặc C.',
        qs:[
          { k:'listen', t:'mc', q:'11. The community centre was originally built as', o:['a school.','a factory.','a hospital.'], c:1, e:'«the building was a shoe factory» → nhà máy.',
            a:'Welcome to Eastgate Community Centre. Before I show you round, a word about the building. It looks like a school, but in fact it was a shoe factory until nineteen sixty-eight.' },
          { k:'listen', t:'mc', q:'12. The centre is busiest', o:['on weekday mornings.','on weekday evenings.','at weekends.'], c:1, e:'«weekday evenings are the busiest» → tối các ngày trong tuần.',
            a:'People often assume weekends are busiest, but actually weekday evenings are the busiest time here, between six and nine.' },
          { k:'listen', t:'mc', q:'13. The cookery classes are aimed mainly at', o:['complete beginners.','experienced cooks.','professional chefs.'], c:0, e:'«you do not need any experience at all» → người mới hoàn toàn.',
            a:'Our cookery classes run on Tuesdays. You do not need any experience at all — most people who come have never cooked anything more complicated than pasta.' },
          { k:'listen', t:'mc', q:'14. To use the sports hall, members must', o:['book online in advance.','pay an extra monthly fee.','bring their own equipment.'], c:0, e:'«you have to book it online» → đặt trước trên mạng.',
            a:'The sports hall is included in your membership, but you have to book it online in advance. We stopped taking bookings by phone last year.' },
          { k:'listen', t:'mc', q:'15. The garden project is run by', o:['paid staff.','local volunteers.','students from the college.'], c:1, e:'«entirely by volunteers from the neighbourhood» → tình nguyện viên địa phương.',
            a:'Behind the hall is our garden, which is run entirely by volunteers from the neighbourhood. The centre provides the tools and the seeds.' },
          { k:'listen', t:'mc', q:'16. The café is closed on', o:['Mondays.','Wednesdays.','Sundays.'], c:2, e:'«closed on Sundays» → Chủ nhật.',
            a:'The café is open every day except Sundays, from eight in the morning until five.' },
          { k:'listen', t:'mc', q:'17. What has recently changed about the library corner?', o:['It has moved upstairs.','It has longer opening hours.','It now lends laptops.'], c:2, e:'«you can now borrow a laptop» → cho mượn laptop.',
            a:'The library corner is still on the ground floor with the same hours, but there is one new thing: you can now borrow a laptop for up to four hours.' },
          { k:'listen', t:'mc', q:'18. Parking at the centre is', o:['free for two hours.','free for members only.','not available.'], c:0, e:'«free for the first two hours» → miễn phí hai tiếng đầu.',
            a:'There is a small car park at the back. It is free for the first two hours; after that there is a charge of one pound an hour.' },
          { k:'listen', t:'mc', q:'19. The speaker advises new members to', o:['come to the open day.','join a committee.','fill in a feedback form.'], c:0, e:'«do come to the open day» → tới ngày hội mở cửa.',
            a:'If you are new, do come to the open day on the fifteenth. Every group gives a short demonstration, so you can try before you commit.' },
          { k:'listen', t:'mc', q:'20. Membership currently costs', o:['£25 a year.','£35 a year.','£45 a year.'], c:1, e:'«thirty-five pounds a year» → 35 bảng.',
            a:'And finally, the cost. Membership is thirty-five pounds a year, or twenty for students and pensioners.' }
        ] },
      { title:'Part 3 — Questions 21–30', ins:'Choose the correct letter, A, B or C.', vi:'Câu 21–30: Nghe hai sinh viên trao đổi với giảng viên về một bài nghiên cứu. Chọn A, B hoặc C.',
        qs:[
          { k:'listen', t:'mc', q:'21. What is the main topic of the students’ project?', o:['Air quality in schools','Noise levels in classrooms','Lighting in libraries'], c:1, e:'«how noise affects concentration in classrooms» → tiếng ồn trong lớp học.',
            a:'So, Maya, Quan — remind me what your project is on. — It is about how noise affects concentration in classrooms, especially in older buildings.' },
          { k:'listen', t:'mc', q:'22. Quan says their biggest problem so far has been', o:['finding participants.','borrowing equipment.','analysing the data.'], c:0, e:'«getting enough schools to agree» → tìm người tham gia.',
            a:'What has been hardest? — Honestly, getting enough schools to agree. We wrote to fourteen and only three replied.' },
          { k:'listen', t:'mc', q:'23. The tutor suggests they should', o:['reduce the number of schools.','contact schools by phone.','change the research question.'], c:1, e:'«ring them» → gọi điện.',
            a:'A letter is easy to ignore. My advice would be to ring them — a two-minute phone call is worth ten emails.' },
          { k:'listen', t:'mc', q:'24. Maya is worried that their sample is', o:['too small.','too varied.','too expensive.'], c:0, e:'«three schools is not many» → mẫu quá nhỏ.',
            a:'I am a bit worried, though. Three schools is not many. Can we really say anything from that?' },
          { k:'listen', t:'mc', q:'25. The tutor says a small sample is acceptable if the students', o:['repeat the measurements.','explain the limitation clearly.','use published data as well.'], c:1, e:'«say so openly in your discussion» → nêu rõ hạn chế.',
            a:'A small sample is fine at this level, provided you say so openly in your discussion. Examiners forgive small samples; they do not forgive pretending the problem is not there.' },
          { k:'listen', t:'mc', q:'26. The students will measure noise levels', o:['once a day.','three times a day.','continuously for a week.'], c:1, e:'«morning, midday and late afternoon» → ba lần một ngày.',
            a:'How often will you record? — Three times a day: morning, midday and late afternoon, so we catch the quiet and busy periods.' },
          { k:'listen', t:'mc', q:'27. Quan is responsible for', o:['designing the questionnaire.','operating the equipment.','writing the introduction.'], c:1, e:'«I am doing the meter readings» → vận hành thiết bị đo.',
            a:'Who is doing what? — Maya is writing the questionnaire, and I am doing the meter readings and the spreadsheets.' },
          { k:'listen', t:'mc', q:'28. The tutor warns them not to', o:['use too many graphs.','interview the teachers.','collect data during exams.'], c:2, e:'«avoid the exam weeks» → tránh tuần thi.',
            a:'One warning: avoid the exam weeks. The schools will be under pressure and the noise pattern will be completely unrepresentative.' },
          { k:'listen', t:'mc', q:'29. The deadline for the first draft is', o:['the end of March.','the middle of April.','the start of May.'], c:1, e:'«the fifteenth of April» → giữa tháng Tư.',
            a:'When do you need the first draft? — By the fifteenth of April, please. That gives me two weeks to comment before the final version.' },
          { k:'listen', t:'mc', q:'30. Maya offers to', o:['book the meeting room.','borrow a second meter.','write to the head teachers.'], c:2, e:'«I will write to the head teachers» → viết thư cho hiệu trưởng.',
            a:'Shall I write to the head teachers this week? — That would be very helpful, Maya, thank you.' }
        ] },
      { title:'Part 4 — Questions 31–40', ins:'Complete the notes below. Write ONE WORD ONLY for each answer.', vi:'Câu 31–40: Nghe bài giảng về lịch sử đèn đường. Điền MỘT TỪ vào mỗi chỗ trống.',
        qs:[
          { k:'listen', t:'char', q:'STREET LIGHTING — lecture notes\nEarly lamps in London burned ___ (31)', ans:'oil', alt:['whale oil'], e:'«lamps burned oil» → oil.',
            a:'Good afternoon. Today I want to look at street lighting. The first organised system in London used lamps that burned oil, and each one had to be lit by hand.' },
          { k:'listen', t:'char', q:'Each lamp had to be lit by ___ (32)', ans:'hand', alt:['a lamplighter'], e:'«lit by hand» → hand.',
            a:'Each one had to be lit by hand, by a lamplighter who walked a fixed route every evening.' },
          { k:'listen', t:'char', q:'Gas lighting first appeared in the year ___ (33)', ans:'1807', alt:['eighteen o seven'], e:'«in eighteen o seven» → 1807.',
            a:'Gas changed everything. The first gas-lit street appeared in eighteen o seven, and within twenty years most large cities had followed.' },
          { k:'listen', t:'char', q:'Gas lamps were about ___ (34) times brighter than oil', ans:'twelve', alt:['12'], e:'«twelve times brighter» → twelve.',
            a:'A gas lamp was roughly twelve times brighter than an oil lamp, which transformed what people could do after dark.' },
          { k:'listen', t:'char', q:'Shops began to stay open later, which increased ___ (35)', ans:'trade', alt:['business'], e:'«increased trade» → trade.',
            a:'Shops began to stay open later, which increased trade, and evening entertainment became possible for ordinary people.' },
          { k:'listen', t:'char', q:'Critics at the time argued that bright streets damaged people’s ___ (36)', ans:'health', alt:['sleep'], e:'«damaged their health» → health.',
            a:'Not everyone approved. Critics argued that unnaturally bright streets damaged people’s health and disturbed the natural rhythm of sleep.' },
          { k:'listen', t:'char', q:'Electric lighting spread quickly after ___ (37) was improved', ans:'generation', alt:['the generator','generators'], e:'«once generation improved» → generation.',
            a:'Electric arc lamps existed from the eighteen seventies, but they only spread once generation and distribution were improved.' },
          { k:'listen', t:'char', q:'Modern LED lamps use about ___ (38) per cent less energy', ans:'fifty', alt:['50'], e:'«about fifty per cent less» → fifty.',
            a:'Today most councils are switching to LEDs, which use about fifty per cent less energy than the sodium lamps they replace.' },
          { k:'listen', t:'char', q:'A disadvantage of LEDs is the effect of blue light on ___ (39)', ans:'wildlife', alt:['animals','insects'], e:'«the effect on wildlife» → wildlife.',
            a:'There is a cost, though. The blue part of the LED spectrum has a measurable effect on wildlife, particularly insects and night-flying birds.' },
          { k:'listen', t:'char', q:'Some cities now dim their lights after ___ (40)', ans:'midnight', alt:['12','twelve'], e:'«dim the lights after midnight» → midnight.',
            a:'For that reason a number of cities now dim the lights after midnight, when very few people are on the streets. And that is where I will stop today.' }
        ] }
    ]},
    { id:'R', name:'Reading', vi:'Đọc · 40 câu · 60 phút', parts:[
      { title:'Reading Passage 1 — Questions 1–13', ins:'Read the passage and answer Questions 1–13.', vi:'Câu 41–53: Đọc bài về nghề nuôi ong đô thị rồi trả lời.',
        qs:[
          { t:'mc', q:'1. According to the passage, urban beekeeping in London grew mainly because of', o:['a change in the law.','media attention after 2008.','a shortage of rural land.','a fall in the price of hives.'], c:1,
            p:'URBAN BEEKEEPING\n\nTwenty years ago, keeping bees on a city roof was an eccentric hobby. Today London alone has more than five thousand registered hives, and similar increases have been recorded in Paris, Berlin and Melbourne. The trigger was not legislation but publicity: after 2008, widespread reporting of colony losses persuaded thousands of city dwellers that keeping bees was a practical way of helping the environment.\n\nThe results have been mixed. Cities turn out to be surprisingly good places for bees. Parks, gardens, railway embankments and even window boxes provide a long and varied flowering season, and urban temperatures are slightly higher, which extends foraging into the autumn. Studies in several European capitals have found that city colonies often produce more honey than rural ones, where large fields of a single crop offer an intense but very short supply of food.\n\nHowever, the enthusiasm has created a new problem. Honeybees are livestock, not wildlife. A single hive contains up to sixty thousand insects, all competing for the same flowers as wild bees, hoverflies and butterflies. Research published in 2019 found that in districts with more than seven hives per square kilometre, wild bee numbers were measurably lower. The authors were careful not to blame beekeepers, but they argued that the popular slogan «save the bees» had been interpreted in exactly the wrong way.\n\nA further difficulty is skill. Beekeeping is not difficult to start but is hard to do well. Colonies need inspecting every week during the season, and an untreated disease can spread to hives several kilometres away. Surveys by beekeeping associations suggest that roughly a third of new urban beekeepers give up within two years, sometimes abandoning equipment that then becomes a source of infection.\n\nWhat, then, should a city do? Most specialists now give the same three-part answer. First, plant more flowers: nectar-rich planting on roadsides, in parks and on roofs benefits every pollinator and costs relatively little. Second, regulate hive density rather than hive numbers, so that colonies are spread across a city instead of concentrating in fashionable central districts. Third, invest in training, since a small number of competent beekeepers does far less harm than a large number of beginners.\n\nNone of this means that urban beekeeping is a mistake. Hives on the roofs of hospitals, schools and offices have introduced hundreds of thousands of people to the workings of an insect colony, and that kind of attention has real value. But the honeybee is not endangered; it is farmed. The insects that need help are the two hundred and fifty or so wild species that share the same city, and they cannot be helped by adding more hives.',
            e:'Đoạn 1: «The trigger was not legislation but publicity: after 2008, widespread reporting…» → do truyền thông đưa tin sau 2008.' },
          { t:'mc', q:'2. The passage says that city bees often produce more honey than rural bees because cities offer', o:['fewer predators.','warmer winters.','a longer and more varied flowering season.','larger areas of a single crop.'], c:2, e:'Đoạn 2: «a long and varied flowering season».' },
          { t:'mc', q:'3. The 2019 research found that wild bee numbers fell where hive density exceeded', o:['three hives per square kilometre.','five hives per square kilometre.','seven hives per square kilometre.','ten hives per square kilometre.'], c:2, e:'Đoạn 3: «more than seven hives per square kilometre».' },
          { t:'mc', q:'4. The authors of the 2019 study', o:['criticised individual beekeepers.','avoided blaming beekeepers.','called for a ban on urban hives.','were funded by beekeeping associations.'], c:1, e:'«The authors were careful not to blame beekeepers».' },
          { t:'mc', q:'5. According to the passage, roughly what proportion of new urban beekeepers stop within two years?', o:['A tenth','A quarter','A third','A half'], c:2, e:'«roughly a third of new urban beekeepers give up within two years».' },
          { t:'mc', q:'6. Abandoned equipment is a problem because it can', o:['attract wild bees.','spread disease.','be expensive to remove.','damage roofs.'], c:1, e:'«equipment that then becomes a source of infection».' },
          { t:'mc', q:'7. Which of the three recommendations does the passage describe as inexpensive?', o:['Planting nectar-rich flowers','Regulating hive density','Training new beekeepers','Removing hives from central districts'], c:0, e:'«benefits every pollinator and costs relatively little».' },
          { t:'mc', q:'8. The writer’s attitude to urban beekeeping is best described as', o:['strongly opposed.','entirely enthusiastic.','qualified and balanced.','indifferent.'], c:2, e:'Bài nêu cả lợi ích lẫn tác hại và kết luận có điều kiện → cân bằng, có bảo lưu.' },
          { t:'mc', q:'9. TRUE / FALSE / NOT GIVEN — Urban beekeeping became popular because governments passed new laws.', o:['TRUE','FALSE','NOT GIVEN'], c:1, e:'Bài nói rõ «not legislation but publicity» → SAI.' },
          { t:'mc', q:'10. TRUE / FALSE / NOT GIVEN — Honeybees are classified in the passage as a form of livestock.', o:['TRUE','FALSE','NOT GIVEN'], c:0, e:'«Honeybees are livestock, not wildlife.» → ĐÚNG.' },
          { t:'mc', q:'11. TRUE / FALSE / NOT GIVEN — Melbourne has more registered hives than London.', o:['TRUE','FALSE','NOT GIVEN'], c:2, e:'Bài chỉ nói Melbourne cũng tăng, không so sánh số lượng → KHÔNG ĐỀ CẬP.' },
          { t:'char', q:'12. Complete the sentence with ONE WORD from the passage: Colonies must be inspected every ___ during the season.', ans:'week', alt:['week.'], e:'«Colonies need inspecting every week during the season.»' },
          { t:'char', q:'13. Complete the sentence with ONE NUMBER from the passage: About ___ wild bee species share the same city.', ans:'250', alt:['two hundred and fifty'], e:'«the two hundred and fifty or so wild species».' }
        ] },
      { title:'Reading Passage 2 — Questions 14–26', ins:'Read the passage and answer Questions 14–26.', vi:'Câu 54–66: Đọc bài về giấc ngủ hai giai đoạn rồi trả lời.',
        qs:[
          { t:'mc', q:'14. The main purpose of the passage is to', o:['prove that modern sleep patterns are unhealthy.','describe how historical evidence changed a scientific assumption.','recommend a new sleep schedule.','compare sleep in different countries.'], c:1,
            p:'SEGMENTED SLEEP\n\nFor most of the twentieth century, researchers assumed that human beings had always slept as they do now: one continuous block of seven or eight hours. That assumption was rarely examined, largely because there seemed to be no reason to examine it.\n\nIn the early 1990s a psychiatrist named Thomas Wehr carried out an unusual experiment. He placed a group of volunteers in darkness for fourteen hours a night, roughly the length of a winter night before artificial light. For the first few weeks the participants simply caught up on lost sleep. After about a month, however, a pattern emerged. They slept for around four hours, woke for one or two hours, and then slept for another four. During the waking period they were neither anxious nor bored; blood tests showed high levels of prolactin, a hormone associated with calm.\n\nAt about the same time, the historian Roger Ekirch was working through court records, diaries and medical texts from before the industrial era. He found hundreds of casual references to a «first sleep» and a «second sleep», separated by an ordinary waking hour. People used that hour to pray, to talk quietly, to check animals, or simply to lie still and think. Crucially, none of the sources treated the pattern as unusual. It was mentioned the way we might mention breakfast.\n\nTaken together, the two lines of evidence suggested that segmented sleep was not a disorder but a normal response to long nights. What changed was light. As lighting became cheap, evenings became longer, bedtimes moved later, and the available hours of darkness shrank until they could hold only one sleep.\n\nThe conclusion is easy to overstate. Ekirch himself has warned against the idea that modern people are «sleeping wrongly». There is no evidence that eight continuous hours are harmful, and segmented sleep appears wherever nights are long, not wherever people are healthy. Some anthropologists studying communities without electricity have found consolidated sleep rather than divided sleep, which suggests the pattern depends on latitude and season as much as on technology.\n\nWhat the research does offer is reassurance. A person who wakes at three in the morning and cannot immediately return to sleep is often told that something is wrong. The historical record suggests otherwise. Anxiety about the waking itself may do more damage than the waking, and the most useful advice may be the least medical: get out of bed, keep the lights low, do something quiet, and go back when you are sleepy again.',
            e:'Bài dùng thí nghiệm của Wehr và tư liệu lịch sử của Ekirch để lật lại giả định khoa học → mô tả cách chứng cứ lịch sử thay đổi một giả định.' },
          { t:'mc', q:'15. In Wehr’s experiment, the segmented pattern appeared', o:['immediately.','after about a week.','after about a month.','only in winter.'], c:2, e:'«After about a month, however, a pattern emerged.»' },
          { t:'mc', q:'16. During the waking period, the volunteers', o:['felt anxious.','were bored.','were calm.','could not stay awake.'], c:2, e:'«neither anxious nor bored; … prolactin, a hormone associated with calm».' },
          { t:'mc', q:'17. Ekirch’s sources are significant mainly because they', o:['were written by doctors.','described the pattern as ordinary.','came from a single country.','contradicted Wehr’s findings.'], c:1, e:'«none of the sources treated the pattern as unusual».' },
          { t:'mc', q:'18. According to the passage, the change in sleep patterns was caused chiefly by', o:['longer working hours.','cheaper lighting.','changes in diet.','urban noise.'], c:1, e:'«What changed was light. As lighting became cheap…».' },
          { t:'mc', q:'19. Anthropological studies of communities without electricity have found', o:['segmented sleep everywhere.','consolidated sleep in some cases.','no consistent pattern of any kind.','shorter total sleep than in cities.'], c:1, e:'«have found consolidated sleep rather than divided sleep».' },
          { t:'mc', q:'20. The passage suggests that the pattern of sleep depends on', o:['technology alone.','latitude and season as well as technology.','age more than anything else.','diet and exercise.'], c:1, e:'«depends on latitude and season as much as on technology».' },
          { t:'mc', q:'21. YES / NO / NOT GIVEN — The writer believes modern people sleep incorrectly.', o:['YES','NO','NOT GIVEN'], c:1, e:'Bài dẫn Ekirch cảnh báo chống lại chính ý đó → KHÔNG.' },
          { t:'mc', q:'22. YES / NO / NOT GIVEN — Worrying about waking may be more harmful than the waking itself.', o:['YES','NO','NOT GIVEN'], c:0, e:'«Anxiety about the waking itself may do more damage than the waking».' },
          { t:'mc', q:'23. YES / NO / NOT GIVEN — Wehr’s volunteers were paid for taking part.', o:['YES','NO','NOT GIVEN'], c:2, e:'Bài không nhắc tới thù lao → KHÔNG ĐỀ CẬP.' },
          { t:'char', q:'24. Complete with ONE WORD: The hormone found at high levels during the waking period was ___.', ans:'prolactin', e:'«high levels of prolactin».' },
          { t:'char', q:'25. Complete with ONE NUMBER: Volunteers were kept in darkness for ___ hours a night.', ans:'14', alt:['fourteen'], e:'«in darkness for fourteen hours a night».' },
          { t:'char', q:'26. Complete with TWO WORDS: Before the industrial era people referred to a first sleep and a ___ ___.', ans:'second sleep', e:'«a «first sleep» and a «second sleep»».' }
        ] },
      { title:'Reading Passage 3 — Questions 27–40', ins:'Read the passage and answer Questions 27–40.', vi:'Câu 67–80: Đọc bài về ngôn ngữ nguy cấp và công nghệ rồi trả lời.',
        qs:[
          { t:'mc', q:'27. Which heading best fits the first paragraph?', o:['A problem of scale','An unexpected solution','The history of writing','A failed experiment'], c:0,
            p:'DOCUMENTING ENDANGERED LANGUAGES\n\nOf the seven thousand or so languages spoken today, linguists estimate that around forty per cent have fewer than a thousand speakers, and that one disappears roughly every fortnight. The arithmetic is stark. There are perhaps a few thousand trained field linguists in the world, and documenting a single language properly — a grammar, a dictionary, a body of recorded texts — takes years. On present numbers the work cannot be finished.\n\nFor a long time the response was to prioritise. Funders concentrated on languages judged to be linguistically unusual, on the reasonable grounds that these carry the most information about what human language can do. The approach produced excellent scholarship and a good deal of resentment, since it treated communities as data sources ranked by academic interest rather than as people with a claim on their own heritage.\n\nThe last fifteen years have changed the picture in two ways. The first is technical. A smartphone now records audio and video at a quality that would have required a suitcase of equipment in 1995, and cheap storage means recordings need not be selected in advance. The second is social. Software designed for community use allows speakers to transcribe, translate and annotate recordings themselves, without a linguist present. Several projects have shifted from producing academic grammars to producing materials the community actually asked for: story collections, school books, dictionaries with audio.\n\nThe shift has not been painless. Community-led documentation is uneven in quality; recordings may lack the metadata that makes them useful for comparison, and enthusiasm can fade when funding does. Academic linguists sometimes complain, with justification, that a corpus without careful transcription is of limited scientific value. Communities reply, also with justification, that a scientifically perfect archive held in a foreign university is of limited value to a grandchild who wants to speak to a grandmother.\n\nThe most successful projects have found a middle position. Linguists provide training, equipment and archiving; communities decide what is recorded and control access to it. The output is deposited in an international archive but a copy stays locally, in a format that people can actually open. Where this has been done well — in parts of Australia, Nepal and the Pacific — the number of hours recorded per year has increased by an order of magnitude compared with the researcher-led model.\n\nNone of this halts language shift. Documentation is not revitalisation; an archive is a record, not a speaker. But the two are connected. Almost every successful revival programme of the past thirty years has drawn on materials recorded decades earlier by someone who did not expect them to be used. That is the strongest argument for recording widely and quickly, even imperfectly: the value of a recording is often decided long after the recording is made.',
            e:'Đoạn 1 nói về số lượng ngôn ngữ, tốc độ biến mất và số nhà nghiên cứu quá ít → vấn đề về quy mô.' },
          { t:'mc', q:'28. According to the passage, a language disappears roughly every', o:['week.','fortnight.','month.','year.'], c:1, e:'«one disappears roughly every fortnight».' },
          { t:'mc', q:'29. The traditional approach of funders was to prioritise languages that were', o:['most widely spoken.','linguistically unusual.','geographically remote.','already partly documented.'], c:1, e:'«languages judged to be linguistically unusual».' },
          { t:'mc', q:'30. The passage says this approach caused resentment because it', o:['produced poor scholarship.','was too expensive.','ranked communities by academic interest.','excluded local languages entirely.'], c:2, e:'«ranked by academic interest rather than as people with a claim on their own heritage».' },
          { t:'mc', q:'31. One technical change described is that recordings', o:['no longer need to be selected in advance.','are now made only in video.','must be approved by an archive.','require specialist microphones.'], c:0, e:'«cheap storage means recordings need not be selected in advance».' },
          { t:'mc', q:'32. Community-produced materials mentioned in the passage include', o:['academic grammars.','story collections and school books.','translations of foreign novels.','maps and census data.'], c:1, e:'«story collections, school books, dictionaries with audio».' },
          { t:'mc', q:'33. A criticism made by academic linguists is that community corpora may lack', o:['sound quality.','careful transcription.','sufficient length.','copyright clearance.'], c:1, e:'«a corpus without careful transcription is of limited scientific value».' },
          { t:'mc', q:'34. The reply made by communities is that a perfect archive abroad', o:['costs too much to maintain.','is of limited use to family members at home.','cannot be copied.','will eventually be lost.'], c:1, e:'«of limited value to a grandchild who wants to speak to a grandmother».' },
          { t:'mc', q:'35. In the most successful projects, decisions about what to record are made by', o:['linguists.','funders.','communities.','archives.'], c:2, e:'«communities decide what is recorded and control access to it».' },
          { t:'mc', q:'36. Compared with the researcher-led model, the collaborative model has increased', o:['the number of trained linguists.','the hours recorded each year.','the number of published grammars.','the accuracy of transcription.'], c:1, e:'«the number of hours recorded per year has increased by an order of magnitude».' },
          { t:'mc', q:'37. The writer distinguishes documentation from revitalisation in order to argue that', o:['documentation is a waste of money.','an archive alone does not save a language.','revitalisation should come first.','linguists should not be involved.'], c:1, e:'«Documentation is not revitalisation; an archive is a record, not a speaker.»' },
          { t:'mc', q:'38. The writer’s main argument for recording quickly is that', o:['funding is about to end.','equipment will become more expensive.','the future value of a recording is unpredictable.','communities are losing interest.'], c:2, e:'«the value of a recording is often decided long after the recording is made».' },
          { t:'char', q:'39. Complete with ONE NUMBER: Around ___ per cent of languages have fewer than a thousand speakers.', ans:'40', alt:['forty'], e:'«around forty per cent».' },
          { t:'char', q:'40. Complete with ONE WORD: Linguists provide training, equipment and ___.', ans:'archiving', alt:['archives'], e:'«Linguists provide training, equipment and archiving».' }
        ] }
    ]},
    { id:'W', name:'Writing', vi:'Viết · 2 task · 60 phút', parts:[
      { title:'Writing Task 1 — 20 minutes', ins:'You should spend about 20 minutes on this task. Write at least 150 words.', vi:'Task 1 (khoảng 20 phút, tối thiểu 150 từ): mô tả biểu đồ. Bài chấm tự động theo độ dài và các từ khoá bắt buộc — hãy đối chiếu thêm với bài mẫu trong phần giải thích.',
        qs:[
          { t:'essay', min:150, words:['overall','increase'],
            q:'The chart below shows the number of international students enrolled at four universities in Vietnam between 2015 and 2024 (in thousands).\n\nUniversity A: 2015 — 1.2 · 2018 — 2.6 · 2021 — 4.1 · 2024 — 5.8\nUniversity B: 2015 — 3.0 · 2018 — 3.4 · 2021 — 3.3 · 2024 — 3.6\nUniversity C: 2015 — 0.4 · 2018 — 0.9 · 2021 — 2.2 · 2024 — 4.9\nUniversity D: 2015 — 2.8 · 2018 — 2.1 · 2021 — 1.5 · 2024 — 1.1\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\n(Bài viết BẮT BUỘC có từ «overall» và «increase».)',
            e:'BÀI MẪU (band ~7):\n\nThe chart shows how many international students were enrolled at four Vietnamese universities over a nine-year period from 2015 to 2024.\n\nOverall, three of the four institutions saw growth, but at very different rates, while only University D recorded a continuous decline. By the end of the period, University A had overtaken all the others.\n\nUniversity A began with 1,200 international students, the second lowest figure in 2015, but numbers rose steadily throughout, reaching 5,800 in 2024 — almost a fivefold increase. University C followed a similar but even steeper path from a much lower base, climbing from just 400 students to 4,900, with the sharpest growth occurring after 2018.\n\nBy contrast, University B remained almost flat. Its figure of 3,000 in 2015 had risen only marginally to 3,600 by 2024, and there was even a slight dip in 2021. University D showed the opposite trend, falling consistently from 2,800 to 1,100, a loss of more than half its original intake.\n\nĐIỂM CẦN CÓ: câu mở bài viết lại đề bằng từ khác; một đoạn Overview nêu xu hướng chung (bắt buộc, thiếu là mất điểm nặng); hai đoạn thân bài nhóm các đối tượng giống nhau; số liệu chọn lọc chứ không liệt kê hết; KHÔNG nêu ý kiến cá nhân và KHÔNG có kết luận.' }
        ] },
      { title:'Writing Task 2 — 40 minutes', ins:'You should spend about 40 minutes on this task. Write at least 250 words.', vi:'Task 2 (khoảng 40 phút, tối thiểu 250 từ): bài luận nêu quan điểm. Bài chấm tự động theo độ dài và các từ khoá bắt buộc.',
        qs:[
          { t:'essay', min:250, words:['opinion','however'],
            q:'Some people believe that governments should spend money on preserving traditional buildings and monuments, while others argue that this money would be better spent on new housing and roads.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\n(Bài viết BẮT BUỘC có từ «opinion» và «however».)',
            e:'DÀN Ý VÀ BÀI MẪU (band ~7):\n\nMở bài (2 câu): diễn giải lại đề + nêu lập trường.\nThân bài 1: lập luận của phe ủng hộ chi cho hạ tầng mới.\nThân bài 2: lập luận của phe bảo tồn + vì sao tôi nghiêng về phía này.\nKết bài: tóm lại, không nêu ý mới.\n\nBÀI MẪU:\nIt is sometimes argued that public money is better spent on new infrastructure than on the preservation of historic buildings. While I understand the practical appeal of this position, my own opinion is that conservation and development are not genuine alternatives.\n\nThose who favour spending on housing and transport point to immediate need. A city with a severe housing shortage cannot reasonably justify restoring a disused palace while families are living in overcrowded flats, and roads and hospitals produce measurable benefits for large numbers of people. From this perspective, heritage spending looks like a luxury paid for by those who can least afford it.\n\nHowever, this argument underestimates what historic districts actually contribute. In many cities the old quarter is the single largest source of tourist revenue, and that revenue funds precisely the services the first argument prioritises. Hanoi is a clear example: the narrow streets of the old quarter attract millions of visitors a year, supporting tens of thousands of jobs that would not exist if the area had been cleared for apartment blocks in the 1990s. Preservation, in other words, is often an investment rather than an expense.\n\nThere is also a less measurable point. A city that demolishes its past loses the physical evidence of how its people once lived, and no amount of new construction restores that. Modern housing can be built anywhere; a two-hundred-year-old street cannot be rebuilt once it has gone.\n\nIn conclusion, while the need for housing and transport is urgent and real, I believe that treating heritage as a competing expense is a mistake. The better approach is to protect what is irreplaceable and build the new around it.\n\nĐIỂM CẦN CÓ: trả lời ĐỦ cả ba phần của đề (view 1, view 2, ý kiến của mình); mỗi đoạn một ý chính; có ví dụ cụ thể; lập trường nhất quán từ mở bài tới kết bài.' }
        ] }
    ]}
  ]
}

];

if (typeof module !== 'undefined'){ module.exports = { IELTS_EXAMS, IELTS_BAND, ieltsBand, ieltsRound }; }
