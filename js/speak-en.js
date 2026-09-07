/* ============================================================
   LangLab — Luyện nói tiếng Anh
   SPEAK_EN.ielts : IELTS Speaking — Part 1 (4–5′), Part 2 (cue card 1′ chuẩn bị
                    + 1–2′ nói), Part 3 (4–5′ thảo luận sâu)
   SPEAK_EN.toefl : TOEFL iBT Speaking — 4 task, mỗi task có thời gian chuẩn bị
                    và thời gian nói cố định
   SPEAK_EN.bands : tiêu chí chấm và những lỗi làm mất điểm nhiều nhất
   Mỗi chủ đề có: câu hỏi, từ khoá nên dùng, dàn ý, bài mẫu và phần bình luận
   vì sao bài mẫu đạt band đó. Nội dung do LangLab biên soạn.
   ============================================================ */

const SPEAK_EN = {

bands: [
  { t:'Fluency and Coherence — Trôi chảy và mạch lạc', d:'Nói liên tục, ít ngập ngừng vô nghĩa, ý nối được với nhau.',
    tips:['Ngập ngừng để TÌM Ý thì chấp nhận được; ngập ngừng để tìm TỪ thì bị trừ.','Dùng từ nối tự nhiên: well, actually, the thing is, to be honest.','Thà nói một ý dài có triển khai còn hơn ba ý cụt.'] },
  { t:'Lexical Resource — Vốn từ', d:'Dùng từ chính xác, có collocation và cách diễn đạt ít gặp.',
    tips:['Một cụm đúng chỗ (a knock-on effect) ăn điểm hơn năm từ hiếm dùng sai.','Biết diễn giải khi quên từ: «the thing you use to…» — đó là kỹ năng được tính điểm.','Tránh lặp một tính từ chung chung như «good» hay «very interesting».'] },
  { t:'Grammatical Range and Accuracy — Ngữ pháp', d:'Có câu phức, thì đúng, và lỗi không gây hiểu sai.',
    tips:['Band 7 cần «a majority of error-free sentences» chứ không cần hoàn hảo.','Chủ động dùng ít nhất một câu điều kiện và một mệnh đề quan hệ trong Part 3.','Lỗi hay bị trừ nhất của người Việt: thiếu -s ngôi ba, thiếu mạo từ, sai thì quá khứ.'] },
  { t:'Pronunciation — Phát âm', d:'Người nghe hiểu được mà không phải cố gắng; có trọng âm từ và ngữ điệu.',
    tips:['Trọng âm SAI làm mất điểm nhiều hơn âm cuối sai.','Nói chậm hơn 10% thường làm điểm phát âm tăng.','Giữ đuôi -s và -ed: chúng thuộc phần phát âm chứ không chỉ ngữ pháp.'] }
],

ielts: [
  { part:1, topic:'Work and study', vi:'Công việc và học tập',
    qs:['Do you work or are you a student?','What do you like most about your job or your course?','Is it a popular subject in your country?','Do you think you will change your field in the future?'],
    words:['field','demanding','rewarding','hands-on','stick with'],
    outline:'Trả lời thẳng (1 câu) → lý do (1 câu) → chi tiết hoặc ví dụ (1 câu). Đừng dừng ở một câu, cũng đừng nói quá 4–5 câu ở Part 1.',
    model:'I am a final-year student, majoring in computer science. What I enjoy most is that it is very hands-on — we spend more time building things than reading about them, and you can see straight away whether your idea works. It is quite a popular field here, mainly because the job market is good, though I think a lot of people choose it for that reason alone and then find it too demanding. As for changing field, probably not entirely, but I would like to move towards data work rather than pure programming.',
    note:'Điểm mạnh: mỗi câu hỏi đều được trả lời rồi mở rộng thêm một ý; có collocation tự nhiên (hands-on, job market, too demanding); câu cuối dùng «rather than» để so sánh. Không cần nói dài hơn ở Part 1.' },

  { part:1, topic:'Hometown', vi:'Quê hương',
    qs:['Where are you from?','What is your hometown like?','Has it changed much in recent years?','Would you like to live there in the future?'],
    words:['grow up','get around','be built up','pace of life','settle down'],
    outline:'Nêu tên nơi ở + một chi tiết riêng (không chỉ «it is big»). Khi được hỏi về thay đổi, so sánh xưa và nay bằng «used to».',
    model:'I grew up in Hanoi, in a district about four kilometres from the centre. It is not the postcard part of the city — no lake, no old quarter — but it is very liveable: everything you need is within a ten-minute walk. It has changed a lot, actually. When I was small there were still rice fields behind our street, and now there are two apartment blocks and a supermarket. I would like to settle down there eventually, although I would rather work abroad for a few years first.',
    note:'Điểm mạnh: chi tiết cụ thể (bốn cây số, hai toà chung cư) làm câu trả lời đáng tin; dùng «used to» ngầm qua «When I was small there were…»; kết bằng một câu có «although» thể hiện ngữ pháp phức.' },

  { part:2, topic:'Describe a skill you learned that took a long time', vi:'Kể về một kỹ năng bạn mất nhiều thời gian để học',
    qs:['You should say: what the skill is · how you learned it · how long it took · and explain why it took so long.'],
    words:['pick up','get the hang of','plateau','stick at it','pay off'],
    outline:'1 phút chuẩn bị: ghi 4 từ khoá theo đúng 4 gạch đầu dòng của đề, KHÔNG viết câu. Nói 2 phút: mỗi gạch đầu dòng khoảng 25–30 giây, dành phần «explain» dài nhất.',
    model:'The skill I want to talk about is touch typing — typing without looking at the keyboard. I picked it up in my second year at university, mostly because I was embarrassed at how slowly I was taking notes compared with everyone else. I learned it from a free website that gives you drills for fifteen minutes a day. There is no teacher, no theory; you just repeat the same rows of letters until your fingers stop needing your eyes. It took me around four months to get to a usable speed, and probably a year before I stopped thinking about it at all. The reason it took so long is that progress is not smooth. You improve quickly for two weeks, then you hit a plateau where nothing changes for a fortnight, and that is exactly when most people give up. I nearly did, twice. What kept me going was measuring it: the website shows your speed every session, so even on a bad day you can see that the line is still going up over the month. Looking back, it is the single most useful hour I have ever invested, because it saves me a few minutes every single day.',
    note:'Điểm mạnh: nói đủ 2 phút mà không lạc đề; trả lời cả bốn gạch đầu dòng theo thứ tự; phần «why» được triển khai sâu nhất (plateau, đo tiến độ); có cụm tự nhiên (pick up, hit a plateau, kept me going) và một câu kết mang tính đánh giá.' },

  { part:2, topic:'Describe a place you go to relax', vi:'Kể về một nơi bạn tới để thư giãn',
    qs:['You should say: where it is · how often you go there · what you do there · and explain why it helps you relax.'],
    words:['unwind','get away from it all','peaceful','routine','clear your head'],
    outline:'Chọn một nơi CỤ THỂ và có thật, không chọn «my bedroom» vì rất khó nói đủ hai phút. Dành 40 giây cuối cho phần «why».',
    model:'The place I go to unwind is a small second-hand bookshop about twenty minutes from my flat. It is on the ground floor of an old building, so it is dark even at midday, and it smells of paper and dust. I go maybe twice a month, usually on a Sunday morning when the streets are still quiet. I do not always buy anything. Mostly I work along the shelves, pick up whatever has an interesting cover, and read the first page standing up. If something holds me for three pages I buy it. The owner has never once tried to sell me anything, which I appreciate. Why does it relax me? Two reasons, I think. The first is that there is no screen and no notification — an hour there is the only hour in my week when nobody can reach me. The second is that it is completely without purpose. Everything else I do has a deadline attached, and this does not. I come out feeling like my head has been cleared, even though objectively I have done nothing at all.',
    note:'Điểm mạnh: chi tiết giác quan (tối, mùi giấy và bụi) làm bài sinh động; có câu hỏi tu từ để chuyển sang phần «why»; hai lý do được đánh số rõ ràng; câu cuối có mệnh đề nhượng bộ «even though».' },

  { part:3, topic:'Learning and technology', vi:'Học tập và công nghệ (nối tiếp Part 2)',
    qs:['Do you think technology has made learning easier or just faster?','Should schools teach skills like typing, or leave them to students?','Is it still worth learning something that a machine can do for you?','How might the skills people need change in the next twenty years?'],
    words:['arguably','it depends on','in the long run','to some extent','a double-edged sword'],
    outline:'Part 3 chấm khả năng LẬP LUẬN chứ không chỉ từ vựng. Công thức an toàn: nêu quan điểm → «because» → ví dụ hoặc so sánh → thừa nhận mặt kia bằng «that said» hoặc «although».',
    model:'That is an interesting distinction. I would say technology has definitely made learning faster, but easier is less clear. It is easier to find information — everything is a search away — but it is arguably harder to concentrate long enough to actually learn it, because the same device that gives you the lecture also gives you fifty notifications. As for whether schools should teach things like typing, I think they should, precisely because they look too basic to bother with. Nobody plans to learn them, so nobody does. On whether it is worth learning something a machine can do — I would separate two cases. If the machine is reliable and always available, like a calculator, then no, spending years on mental arithmetic is a poor use of time. But if the skill also builds something else, like handwriting builds memory, then the fact that a machine can do it is not the whole argument. In the long run I suspect the valuable skills will be the ones machines are worst at: deciding what question to ask, and judging whether an answer is plausible.',
    note:'Điểm mạnh: mở bằng cách nhận xét chính câu hỏi («That is an interesting distinction») thay vì nhắc lại đề; có phân loại («I would separate two cases»); dùng ngôn ngữ giảm nhẹ (arguably, I suspect) đúng chất band 7–8; kết bằng một dự đoán có lý lẽ.' },

  { part:3, topic:'Cities and change', vi:'Đô thị và sự thay đổi',
    qs:['Why do people move from the countryside to cities?','What problems does rapid urban growth create?','Should governments try to slow this movement?','Do you think cities will be more or less crowded in the future?'],
    words:['pull factor','infrastructure','strain','sprawl','trade-off'],
    outline:'Với câu hỏi chính sách, luôn nêu đánh đổi (trade-off) — giám khảo tìm khả năng nhìn hai mặt, không tìm câu trả lời đúng.',
    model:'The main pull factor is simply work — wages in the city can be three or four times higher, and that gap outweighs almost everything else. There are push factors too, of course: fewer opportunities at home, and in some regions the land itself is becoming harder to farm. The obvious problem is that infrastructure never keeps up. Housing, drainage and public transport are planned on the population you have, not the population arriving next year, so cities end up permanently five years behind. Should governments slow it down? I am sceptical. Restricting movement tends to punish exactly the people who have the least, and it treats the symptom rather than the cause. I would rather see the money spent on making smaller cities genuinely liveable, so that people have a real alternative. That is slower and much less visible politically, which is probably why it rarely happens.',
    note:'Điểm mạnh: dùng thuật ngữ đúng lĩnh vực (pull factor, infrastructure, symptom vs cause); nêu rõ lập trường rồi bảo vệ; câu cuối có nhận xét sắc về mặt chính trị — kiểu mở rộng làm giám khảo thấy chiều sâu.' }
],

toefl: [
  { task:1, name:'Independent Speaking — Task 1', vi:'Nêu và bảo vệ ý kiến',
    time:'Chuẩn bị 15 giây · Nói 45 giây',
    qs:['Some students prefer to study alone. Others prefer to study in a group. Which do you prefer, and why? Include reasons and examples in your response.'],
    words:['personally','for one thing','in my experience','that way'],
    outline:'45 giây chỉ đủ cho: 1 câu nêu lựa chọn → 2 lý do, mỗi lý do 1 câu giải thích + 1 ví dụ ngắn. KHÔNG mở bài dài, KHÔNG kết luận.',
    model:'Personally I prefer studying alone, for two reasons. First, I can control the pace. When I study in a group we always move at the speed of the discussion, and I either get bored or get left behind. On my own I can spend twenty minutes on one difficult page if I need to. Second, I remember more when I have to explain something to myself rather than listen to someone else explain it. For example, last term I revised statistics alone and physics in a group, and my statistics result was much better, even though I found the subject harder.',
    note:'Đúng 45 giây khi nói ở tốc độ bình thường. Cấu trúc lộ rõ («for two reasons… First… Second…») nên máy chấm và giám khảo đều bám được. Ví dụ cụ thể ở cuối là điểm cộng lớn.' },

  { task:2, name:'Integrated — Campus Announcement', vi:'Thông báo trong trường + phản ứng của sinh viên',
    time:'Đọc 45 giây · Nghe hội thoại · Chuẩn bị 30 giây · Nói 60 giây',
    qs:['READING: The university will close the 24-hour study room in the library and replace it with a café, citing low overnight usage and high heating costs.\n\nLISTENING: A student disagrees — she says usage is low only because the room was never advertised, and that the nearest alternative study space closes at ten, which will hurt students who work evening shifts.\n\nSummarise the announcement and explain the woman’s opinion and her reasons.'],
    words:['according to the announcement','the woman disagrees','she points out that','her second reason is'],
    outline:'Task 2 KHÔNG hỏi ý kiến bạn. Công thức: 1 câu tóm tắt thông báo → «The woman disagrees for two reasons» → lý do 1 → lý do 2. Hết 60 giây.',
    model:'According to the announcement, the university plans to close the twenty-four-hour study room and open a café there instead, because very few students use it overnight and heating it is expensive. The woman disagrees with this decision for two reasons. First, she argues that the low usage figures are misleading: the room was never advertised, so most students simply do not know it exists, and a space nobody knows about will obviously look empty. Second, she points out that the alternatives are not equivalent. The nearest study space closes at ten in the evening, which is a serious problem for students who work evening shifts and can only start studying after that. For them, she says, this is not an inconvenience but the difference between studying and not studying.',
    note:'Không có một câu nào nêu ý kiến người nói — đúng yêu cầu. Dùng đúng động từ tường thuật (argues, points out, says). Câu cuối diễn đạt lại ý người nữ bằng lời khác, thể hiện hiểu chứ không chép.' },

  { task:3, name:'Integrated — Academic Concept', vi:'Khái niệm học thuật + ví dụ trong bài giảng',
    time:'Đọc 45 giây · Nghe bài giảng · Chuẩn bị 30 giây · Nói 60 giây',
    qs:['READING: «Anchoring» is a cognitive bias in which the first piece of information a person receives strongly influences later judgements, even when that information is irrelevant.\n\nLISTENING: A professor describes an experiment in which two groups estimated the population of a city after first being shown either a low or a high random number; the group shown the high number gave estimates almost twice as large.\n\nExplain anchoring using the example from the lecture.'],
    words:['the professor illustrates this with','which shows that','even though'],
    outline:'1 câu định nghĩa bằng lời của bạn → «The professor illustrates this with an experiment» → mô tả thí nghiệm → 1 câu nối lại với định nghĩa.',
    model:'Anchoring is a bias in which the first number or fact somebody sees shapes the judgement they make afterwards, even when that first piece of information has nothing to do with the question. The professor illustrates this with a simple experiment. Two groups of participants were asked to estimate the population of a city. Before answering, one group was shown a low random number and the other was shown a high one, and everybody was told that the number was randomly generated. Nevertheless, the group that saw the high number gave estimates that were almost twice as large as the other group. This shows anchoring clearly, because the two groups had exactly the same information about the city; the only difference was the irrelevant number they happened to see first, and that alone moved their answers.',
    note:'Định nghĩa được diễn đạt lại chứ không chép nguyên bài đọc. Câu cuối nói RÕ vì sao thí nghiệm minh hoạ đúng khái niệm — đó là phần thí sinh hay bỏ sót và bị trừ điểm.' },

  { task:4, name:'Integrated — Academic Lecture Summary', vi:'Tóm tắt bài giảng học thuật',
    time:'Nghe bài giảng · Chuẩn bị 20 giây · Nói 60 giây',
    qs:['LISTENING: A biology lecture describes two strategies animals use to survive cold winters: migration, moving to a warmer region, and torpor, lowering body temperature and metabolism to save energy. The professor gives the Arctic tern and the ground squirrel as examples.\n\nUsing the points and examples from the lecture, describe the two strategies.'],
    words:['the first strategy','by contrast','as an example','the trade-off'],
    outline:'Task 4 không có phần đọc, nên ghi chú lúc nghe là tất cả. Ghi theo cột: chiến lược 1 / ví dụ · chiến lược 2 / ví dụ. Nói 25 giây cho mỗi chiến lược.',
    model:'The professor describes two ways animals survive the winter. The first strategy is migration, which means simply leaving the cold region and travelling to somewhere warmer. As an example, she mentions the Arctic tern, which flies from the Arctic to the Antarctic and back every year, covering an enormous distance. The advantage is that the animal never has to endure the cold at all; the cost is the energy and the risk of the journey itself. The second strategy is torpor. By contrast, animals using torpor stay where they are but lower their body temperature and slow their metabolism dramatically, so they need far less food. The professor gives the ground squirrel as the example here: it spends the winter underground with its body temperature close to freezing, waking only occasionally. The trade-off is that it is vulnerable while it is inactive.',
    note:'Hai chiến lược được tách rõ bằng «The first… By contrast, the second…»; mỗi cái có ví dụ đúng của bài giảng và một câu về đánh đổi. Không thêm kiến thức ngoài bài — Task 4 chỉ chấm việc bạn nghe và thuật lại được.' }
]

};

if (typeof module !== 'undefined'){ module.exports = { SPEAK_EN }; }
