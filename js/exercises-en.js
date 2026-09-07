/* ============================================================
   LangLab — Bài tập tiếng Anh
   EN_EXERCISES: mỗi câu có
     lv    — cấp: a1 · a2 · b1 · b2
     type  — dạng bài:
             mc      trắc nghiệm 1/4
             gap     điền dạng đúng của từ trong ngoặc
             prep    chọn giới từ
             order   sắp xếp câu
             rewrite viết lại câu theo gợi ý
             match   ghép nghĩa (cụm động từ, thành ngữ)
             error   tìm lỗi sai
             word    chọn từ đúng trong cặp dễ nhầm
     tag   — nhãn chủ đề để lọc
     q     — đề bài (dấu ___ là chỗ trống)
     o     — lựa chọn (mc, prep, word, match)
     c     — chỉ số đáp án đúng, hoặc chuỗi đáp án (gap, order, rewrite)
     e     — giải thích tiếng Việt
   Nội dung do LangLab biên soạn.
   ============================================================ */

const EN_EXERCISES = [

/* ---------- A1 ---------- */
{ lv:'a1', type:'mc', tag:'to be', q:'She ___ a teacher at a primary school.', o:['am','is','are','be'], c:1, e:'Chủ ngữ «she» đi với «is». Nhớ bảng: I am · he/she/it is · you/we/they are.' },
{ lv:'a1', type:'mc', tag:'mạo từ', q:'My brother wants to be ___ engineer.', o:['a','an','the','—'], c:1, e:'«engineer» bắt đầu bằng ÂM nguyên âm /e/ nên dùng «an».' },
{ lv:'a1', type:'mc', tag:'mạo từ', q:'She studies at ___ university in Hanoi.', o:['a','an','the','—'], c:0, e:'«university» đọc là /ˌjuːnɪˈvɜːsəti/, bắt đầu bằng ÂM /j/ nên dùng «a», không dùng «an».' },
{ lv:'a1', type:'gap', tag:'hiện tại đơn', q:'He ___ (work) in a bank.', c:'works', e:'Ngôi thứ ba số ít ở hiện tại đơn thêm -s: he works.' },
{ lv:'a1', type:'gap', tag:'hiện tại đơn', q:'My sister ___ (study) English every evening.', c:'studies', e:'Động từ kết thúc bằng phụ âm + y thì đổi y thành i rồi thêm -es: study → studies.' },
{ lv:'a1', type:'mc', tag:'hiện tại đơn', q:'___ she like coffee?', o:['Do','Does','Is','Has'], c:1, e:'Ngôi thứ ba số ít dùng trợ động từ «does», và động từ chính trở về nguyên thể.' },
{ lv:'a1', type:'error', tag:'hiện tại đơn', q:'Tìm lỗi: «He doesn’t works on Saturday.»', o:['He','doesn’t','works','on Saturday'], c:2, e:'Sau «does/doesn’t», động từ phải ở dạng nguyên thể: He doesn’t WORK.' },
{ lv:'a1', type:'prep', tag:'giới từ thời gian', q:'The class starts ___ eight o’clock.', o:['in','on','at','to'], c:2, e:'at + giờ cụ thể · on + ngày, thứ · in + tháng, năm, buổi.' },
{ lv:'a1', type:'prep', tag:'giới từ thời gian', q:'My birthday is ___ April.', o:['at','on','in','from'], c:2, e:'in + tháng: in April. Nếu có ngày cụ thể thì dùng on: on 3 April.' },
{ lv:'a1', type:'prep', tag:'giới từ nơi chốn', q:'The keys are ___ the table.', o:['in','on','at','under'], c:1, e:'on = trên bề mặt. «in the table» sẽ là bên trong cái bàn.' },
{ lv:'a1', type:'mc', tag:'số nhiều', q:'There are three ___ in my family.', o:['child','childs','children','childrens'], c:2, e:'child → children là số nhiều bất quy tắc; không bao giờ có «childrens».' },
{ lv:'a1', type:'mc', tag:'sở hữu', q:'This is ___ bike.', o:['my brother','my brothers','my brother’s','my brothers’s'], c:2, e:'Sở hữu cách của danh từ số ít: thêm ’s.' },
{ lv:'a1', type:'mc', tag:'there is/are', q:'___ a market in front of the building.', o:['There is','There are','It is','They are'], c:0, e:'«a market» là số ít nên dùng There is.' },
{ lv:'a1', type:'gap', tag:'tiếp diễn', q:'Look! It ___ (rain).', c:'is raining', e:'«Look!» báo hiệu việc đang diễn ra ngay lúc nói → hiện tại tiếp diễn.' },
{ lv:'a1', type:'word', tag:'từ dễ nhầm', q:'I ___ my phone at home this morning.', o:['left','let','lost','loose'], c:0, e:'left = đã để quên (quá khứ của leave). lost = mất hẳn, không tìm thấy.' },
{ lv:'a1', type:'mc', tag:'can', q:'She ___ swim, but she can’t drive.', o:['can to','cans','can','is can'], c:2, e:'Sau «can» là động từ nguyên thể KHÔNG «to», và «can» không chia theo ngôi.' },
{ lv:'a1', type:'gap', tag:'quá khứ đơn', q:'We ___ (go) to the cinema last night.', c:'went', e:'go → went (bất quy tắc). Có «last night» nên bắt buộc dùng quá khứ đơn.' },
{ lv:'a1', type:'gap', tag:'quá khứ đơn', q:'She ___ (not / come) to the party.', c:"did not come", e:'Phủ định quá khứ: did not + động từ nguyên thể. Rút gọn: didn’t come.' },
{ lv:'a1', type:'order', tag:'trật tự câu', q:'Sắp xếp: usually / I / at / get up / six', c:'I usually get up at six', e:'Trạng từ tần suất đứng TRƯỚC động từ thường: I usually get up.' },
{ lv:'a1', type:'order', tag:'trật tự câu', q:'Sắp xếp: is / where / from / she / ?', c:'Where is she from', e:'Câu hỏi Wh-: từ hỏi + động từ be + chủ ngữ.' },
{ lv:'a1', type:'mc', tag:'so sánh', q:'This shop is ___ than that one.', o:['cheap','cheaper','cheapest','more cheap'], c:1, e:'Tính từ ngắn thêm -er + than. Không dùng «more» với tính từ một âm tiết.' },
{ lv:'a1', type:'mc', tag:'so sánh', q:'It is ___ restaurant in the city.', o:['the good','the better','the best','best'], c:2, e:'So sánh nhất bất quy tắc: good → better → the best, luôn có «the».' },
{ lv:'a1', type:'rewrite', tag:'viết lại', q:'Viết lại dùng «going to»: I have decided to look for a job. → I ___ look for a job.', c:'am going to', e:'Dự định đã quyết định trước thì dùng «be going to».' },
{ lv:'a1', type:'match', tag:'cụm động từ', q:'«get up» nghĩa là gì?', o:['ra khỏi giường','bỏ cuộc','gặp gỡ','hồi phục'], c:0, e:'get up = ra khỏi giường, đứng dậy. «bỏ cuộc» là give up.' },
{ lv:'a1', type:'prep', tag:'giới từ', q:'I go to work ___ bus.', o:['in','by','on','with'], c:1, e:'by + phương tiện không có mạo từ: by bus, by train. Nhưng «on the bus» khi nói vị trí.' },
{ lv:'a1', type:'error', tag:'lỗi thường gặp', q:'Tìm lỗi: «I have twenty years old.»', o:['I','have','twenty','years old'], c:1, e:'Tuổi dùng động từ «be»: I AM twenty years old. Đây là lỗi dịch từ tiếng Việt.' },
{ lv:'a1', type:'word', tag:'much/many', q:'How ___ money do you need?', o:['many','much','some','few'], c:1, e:'money là danh từ không đếm được nên dùng «much».' },
{ lv:'a1', type:'mc', tag:'tính từ sở hữu', q:'That is Linh and this is ___ bag.', o:['she','her','hers','she’s'], c:1, e:'Trước danh từ dùng tính từ sở hữu «her». «hers» đứng một mình, không có danh từ theo sau.' },

/* ---------- A2 ---------- */
{ lv:'a2', type:'gap', tag:'quá khứ tiếp diễn', q:'While I ___ (cook), the phone rang.', c:'was cooking', e:'while + quá khứ tiếp diễn làm nền, when + quá khứ đơn cắt ngang.' },
{ lv:'a2', type:'mc', tag:'hiện tại hoàn thành', q:'I ___ never ___ to Japan.', o:['have / been','have / gone','did / go','am / been'], c:0, e:'have been to = đã từng tới (và đã về). have gone to = đã đi và còn đang ở đó.' },
{ lv:'a2', type:'error', tag:'hoàn thành', q:'Tìm lỗi: «I have seen that film yesterday.»', o:['I','have seen','that film','yesterday'], c:1, e:'Có mốc thời gian cụ thể (yesterday) thì BẮT BUỘC dùng quá khứ đơn: I SAW that film yesterday.' },
{ lv:'a2', type:'word', tag:'for/since', q:'She has worked here ___ 2021.', o:['for','since','from','during'], c:1, e:'since + mốc thời gian bắt đầu · for + khoảng thời gian (for three years).' },
{ lv:'a2', type:'word', tag:'yet/already', q:'Have you finished the report ___?', o:['already','yet','still','just'], c:1, e:'yet đứng cuối câu hỏi và câu phủ định; already đứng giữa câu khẳng định.' },
{ lv:'a2', type:'gap', tag:'điều kiện 1', q:'If it ___ (rain) tomorrow, we will stay at home.', c:'rains', e:'Mệnh đề «if» của câu điều kiện loại 1 dùng HIỆN TẠI ĐƠN, không dùng «will».' },
{ lv:'a2', type:'gap', tag:'điều kiện 2', q:'If I ___ (be) you, I would take the job.', c:'were', e:'Điều kiện loại 2 dùng «were» cho mọi ngôi: If I were you…' },
{ lv:'a2', type:'mc', tag:'must/have to', q:'You ___ smoke here — it is a hospital.', o:['do not have to','mustn’t','need not','should not have'], c:1, e:'mustn’t = cấm. «do not have to» chỉ nghĩa là không cần, hoàn toàn khác.' },
{ lv:'a2', type:'mc', tag:'lượng từ', q:'There is ___ traffic in the city centre.', o:['too many','too much','too','many'], c:1, e:'traffic không đếm được nên dùng «too much».' },
{ lv:'a2', type:'mc', tag:'lượng từ', q:'He is not old ___ to drive.', o:['enough','too','so','very'], c:0, e:'Vị trí của enough: tính từ + enough (old enough) nhưng enough + danh từ (enough money).' },
{ lv:'a2', type:'mc', tag:'mệnh đề quan hệ', q:'The woman ___ lives next door is a doctor.', o:['which','who','whom','whose'], c:1, e:'Đại từ quan hệ thay cho chủ ngữ chỉ người: who (hoặc that).' },
{ lv:'a2', type:'mc', tag:'mệnh đề quan hệ', q:'That is the student ___ father is a teacher.', o:['who','which','whose','that'], c:2, e:'whose chỉ quan hệ sở hữu: người mà bố của người đó…' },
{ lv:'a2', type:'rewrite', tag:'tường thuật', q:'Tường thuật: «I am busy,» she said. → She said she ___ busy.', c:'was', e:'Tường thuật thì lùi thì: am → was, và đổi đại từ I → she.' },
{ lv:'a2', type:'error', tag:'say/tell', q:'Tìm lỗi: «He said me that he was late.»', o:['He','said me','that','he was late'], c:1, e:'say something TO someone hoặc tell someone something. Phải là «He TOLD me» hoặc «He said TO me».' },
{ lv:'a2', type:'gap', tag:'bị động', q:'This bridge ___ (build) in 1902.', c:'was built', e:'Bị động quá khứ: was/were + phân từ ba. build → built.' },
{ lv:'a2', type:'gap', tag:'bị động', q:'The room ___ (can / book) online.', c:'can be booked', e:'Bị động với động từ khuyết thiếu: modal + be + V3.' },
{ lv:'a2', type:'gap', tag:'gerund/infinitive', q:'She avoided ___ (answer) the question.', c:'answering', e:'avoid luôn theo sau bởi V-ing. Nhóm này còn có enjoy, finish, mind, suggest, practise.' },
{ lv:'a2', type:'gap', tag:'gerund/infinitive', q:'They decided ___ (move) to Da Nang.', c:'to move', e:'decide luôn theo sau bởi to + V. Nhóm này còn có want, hope, plan, promise, agree.' },
{ lv:'a2', type:'mc', tag:'gerund/infinitive', q:'I remember ___ the door — I am sure I did it.', o:['to lock','locking','lock','locked'], c:1, e:'remember + V-ing = nhớ là ĐÃ làm. remember + to V = nhớ mà làm (việc chưa làm).' },
{ lv:'a2', type:'mc', tag:'used to', q:'I ___ walk to school when I was a child.', o:['use to','used to','am used to','was used to'], c:1, e:'used to + V = thói quen trong quá khứ nay không còn. «be used to + V-ing» nghĩa hoàn toàn khác: đã quen với.' },
{ lv:'a2', type:'prep', tag:'giới từ', q:'She is very good ___ maths.', o:['in','at','on','with'], c:1, e:'good AT something. Cụm cố định, phải học thuộc.' },
{ lv:'a2', type:'prep', tag:'giới từ', q:'I am looking forward ___ hearing from you.', o:['to','for','at','on'], c:0, e:'look forward TO + V-ing. «to» ở đây là giới từ nên KHÔNG dùng động từ nguyên thể.' },
{ lv:'a2', type:'prep', tag:'giới từ', q:'He apologised ___ being late.', o:['of','for','about','with'], c:1, e:'apologise TO someone FOR something.' },
{ lv:'a2', type:'order', tag:'trật tự câu', q:'Sắp xếp: know / do / you / where / lives / she / ?', c:'Do you know where she lives', e:'Câu hỏi gián tiếp: phần sau giữ trật tự CÂU KỂ, không đảo.' },
{ lv:'a2', type:'order', tag:'trật tự tính từ', q:'Sắp xếp: a / leather / black / nice / jacket', c:'a nice black leather jacket', e:'Trật tự: ý kiến → màu → chất liệu → danh từ.' },
{ lv:'a2', type:'match', tag:'cụm động từ', q:'«put up with» nghĩa là gì?', o:['sắp xếp lại','chịu đựng','đề xuất','hoãn lại'], c:1, e:'put up with = chịu đựng. «hoãn lại» là put off.' },
{ lv:'a2', type:'match', tag:'cụm động từ', q:'«run out of» nghĩa là gì?', o:['chạy ra ngoài','hết, cạn','vượt qua','tình cờ gặp'], c:1, e:'run out of = hết (thứ gì). «tình cờ gặp» là run into.' },
{ lv:'a2', type:'match', tag:'thành ngữ', q:'«once in a blue moon» nghĩa là gì?', o:['rất thường xuyên','hoạ hoằn lắm','vào ban đêm','một cách buồn bã'], c:1, e:'once in a blue moon = rất hiếm khi, hoạ hoằn lắm mới một lần.' },
{ lv:'a2', type:'match', tag:'thành ngữ', q:'«under the weather» nghĩa là gì?', o:['trời đang xấu','không khoẻ trong người','bị ướt','đang buồn'], c:1, e:'under the weather = thấy hơi ốm, không khoẻ. Không liên quan tới thời tiết thật.' },
{ lv:'a2', type:'word', tag:'từ dễ nhầm', q:'The price of rice will ___ next month.', o:['raise','rise','arise','rouse'], c:1, e:'rise = tự tăng lên, không có tân ngữ. raise = nâng cái gì lên, phải có tân ngữ.' },
{ lv:'a2', type:'word', tag:'từ dễ nhầm', q:'Please ___ me the salt.', o:['borrow','lend','pass','bring up'], c:2, e:'pass = chuyền, đưa qua. borrow = mượn của ai; lend = cho ai mượn.' },
{ lv:'a2', type:'rewrite', tag:'viết lại', q:'Viết lại dùng «too»: The coffee is so hot that I cannot drink it. → The coffee is ___ hot ___ drink.', c:'too / to', e:'Cấu trúc: too + tính từ + to + V.' },
{ lv:'a2', type:'rewrite', tag:'viết lại', q:'Viết lại bị động: They built the school in 1990. → The school ___ in 1990.', c:'was built', e:'Bị động quá khứ đơn: was/were + V3, bỏ chủ ngữ «they» vì không quan trọng.' },

/* ---------- B1 ---------- */
{ lv:'b1', type:'gap', tag:'hoàn thành tiếp diễn', q:'She ___ (work) here since March.', c:'has been working', e:'Nhấn vào quá trình kéo dài từ quá khứ tới hiện tại: have/has been + V-ing.' },
{ lv:'b1', type:'gap', tag:'quá khứ hoàn thành', q:'When I arrived, the film ___ (already / start).', c:'had already started', e:'Việc xảy ra TRƯỚC một mốc quá khứ khác: had + V3.' },
{ lv:'b1', type:'gap', tag:'điều kiện 3', q:'If she ___ (study) harder, she would have passed.', c:'had studied', e:'Điều kiện loại 3 (trái với quá khứ): If + had + V3, would have + V3.' },
{ lv:'b1', type:'mc', tag:'wish', q:'I wish I ___ more free time.', o:['have','had','will have','would have'], c:1, e:'wish + quá khứ đơn để ước điều trái với hiện tại.' },
{ lv:'b1', type:'mc', tag:'suy đoán', q:'He ___ be at home — his car is outside.', o:['must','can’t','might not','should'], c:0, e:'must = suy đoán chắc chắn có căn cứ. Suy đoán chắc chắn KHÔNG thì dùng «can’t».' },
{ lv:'b1', type:'mc', tag:'suy đoán quá khứ', q:'She ___ have missed the bus — she is never late.', o:['must','can’t','should','would'], c:1, e:'can’t have + V3 = chắc chắn đã không xảy ra.' },
{ lv:'b1', type:'gap', tag:'bị động', q:'The report ___ (send) to all staff yesterday.', c:'was sent', e:'send → sent → sent. Bị động quá khứ đơn.' },
{ lv:'b1', type:'rewrite', tag:'bị động cá nhân', q:'Viết lại: People say that he is a genius. → He ___ to be a genius.', c:'is said', e:'Bị động với động từ tường thuật: S + be + V3 + to V.' },
{ lv:'b1', type:'mc', tag:'mệnh đề quan hệ', q:'Hanoi, ___ is the capital, has over eight million people.', o:['that','which','who','where'], c:1, e:'Mệnh đề bổ sung thông tin (có dấu phẩy) KHÔNG dùng «that».' },
{ lv:'b1', type:'order', tag:'đảo ngữ nhẹ', q:'Sắp xếp: had / I / known / if / , / would / I / helped / have', c:'If I had known, I would have helped', e:'Điều kiện loại 3 đầy đủ; mệnh đề if đứng trước thì có dấu phẩy.' },
{ lv:'b1', type:'prep', tag:'giới từ', q:'The result depends ___ several factors.', o:['of','on','from','to'], c:1, e:'depend ON. Đây là một trong những collocation hay sai nhất.' },
{ lv:'b1', type:'prep', tag:'giới từ', q:'She is responsible ___ training new staff.', o:['of','to','for','with'], c:2, e:'responsible FOR + V-ing hoặc danh từ.' },
{ lv:'b1', type:'error', tag:'lỗi thường gặp', q:'Tìm lỗi: «We discussed about the problem for an hour.»', o:['We','discussed about','the problem','for an hour'], c:1, e:'discuss là ngoại động từ, KHÔNG có «about»: discuss the problem.' },
{ lv:'b1', type:'error', tag:'lỗi thường gặp', q:'Tìm lỗi: «Despite of the rain, we went out.»', o:['Despite of','the rain','we','went out'], c:0, e:'despite KHÔNG có «of». Đúng là «Despite the rain» hoặc «In spite of the rain».' },
{ lv:'b1', type:'word', tag:'từ dễ nhầm', q:'The company was ___ by two engineers in 2015.', o:['found','founded','finded','founding'], c:1, e:'found (thành lập) là động từ có quy tắc: found – founded – founded. Đừng nhầm với «found» là quá khứ của «find».' },
{ lv:'b1', type:'word', tag:'từ dễ nhầm', q:'The two brothers ___ the room quietly.', o:['lied','laid','lay','left'], c:3, e:'Trong ngữ cảnh này chỉ «left» hợp nghĩa. lie–lay–lain (nằm) ≠ lay–laid–laid (đặt).' },
{ lv:'b1', type:'match', tag:'cụm động từ', q:'«come up with» nghĩa là gì?', o:['tình cờ gặp','nghĩ ra','đi cùng','bù đắp'], c:1, e:'come up with = nghĩ ra (ý tưởng, giải pháp).' },
{ lv:'b1', type:'match', tag:'thành ngữ', q:'«a blessing in disguise» nghĩa là gì?', o:['một lời chúc giả tạo','trong cái rủi có cái may','một bí mật lớn','một món quà bất ngờ'], c:1, e:'a blessing in disguise = tưởng xui mà hoá may.' },
{ lv:'b1', type:'mc', tag:'liên từ', q:'___ he was tired, he finished the report.', o:['Despite','Although','However','Because'], c:1, e:'although + MỆNH ĐỀ · despite + danh từ · however đứng riêng và có dấu phẩy.' },
{ lv:'b1', type:'rewrite', tag:'viết lại', q:'Viết lại dùng «although»: In spite of the noise, I slept well. → ___ it was noisy, I slept well.', c:'Although', e:'Chuyển từ giới từ + danh từ sang liên từ + mệnh đề.' },
{ lv:'b1', type:'gap', tag:'gerund/infinitive', q:'He stopped ___ (smoke) two years ago.', c:'smoking', e:'stop + V-ing = bỏ hẳn việc đó. stop + to V = dừng lại ĐỂ làm việc khác.' },
{ lv:'b1', type:'mc', tag:'lượng từ', q:'___ students in the class have finished.', o:['Almost','Most of','Most','The most'], c:2, e:'Most + danh từ số nhiều (nói chung). «Most of» phải có «the»: most of the students.' },

/* ---------- B2 ---------- */
{ lv:'b2', type:'mc', tag:'đảo ngữ', q:'___ had he arrived when the meeting started.', o:['No sooner','Hardly','Scarcely','Not only'], c:1, e:'Hardly … when… là cặp cố định. «No sooner … than…» mới đi với «than».' },
{ lv:'b2', type:'gap', tag:'đảo ngữ', q:'Not only ___ (she / speak) French, but she also writes it well.', c:'does she speak', e:'Sau «Not only» đầu câu phải đảo trợ động từ lên trước chủ ngữ.' },
{ lv:'b2', type:'mc', tag:'giả định', q:'The manager insisted that the report ___ submitted by Friday.', o:['is','was','be','will be'], c:2, e:'Thức giả định sau insist, suggest, demand, recommend: dùng động từ NGUYÊN THỂ, không chia.' },
{ lv:'b2', type:'gap', tag:'phân từ', q:'___ (finish) the report, she went home.', c:'Having finished', e:'Mệnh đề phân từ hoàn thành: Having + V3, dùng khi việc trước xảy ra trước việc sau.' },
{ lv:'b2', type:'mc', tag:'mệnh đề', q:'It was the noise ___ kept me awake all night.', o:['what','that','which is','who'], c:1, e:'Câu chẻ nhấn mạnh: It was + phần nhấn mạnh + that…' },
{ lv:'b2', type:'rewrite', tag:'viết lại', q:'Viết lại nhấn mạnh: I need your advice, not your money. → It is your ___ that I need.', c:'advice', e:'Cấu trúc câu chẻ «It is … that …» để nhấn mạnh một thành phần.' },
{ lv:'b2', type:'error', tag:'lỗi tinh vi', q:'Tìm lỗi: «The amount of students has increased.»', o:['The amount of','students','has','increased'], c:0, e:'amount + không đếm được · number + đếm được. Đúng là «The NUMBER of students».' },
{ lv:'b2', type:'error', tag:'lỗi tinh vi', q:'Tìm lỗi: «She is one of the students who is always late.»', o:['one of','the students','who','is always late'], c:3, e:'«who» thay cho «the students» (số nhiều) nên động từ phải là ARE always late.' },
{ lv:'b2', type:'word', tag:'sắc thái', q:'The evidence strongly ___ that the theory is wrong.', o:['tells','says','suggests','speaks'], c:2, e:'suggest là động từ chuẩn học thuật khi nói dữ liệu «cho thấy». «tell/say» không dùng cho evidence.' },
{ lv:'b2', type:'word', tag:'sắc thái', q:'The government has ___ new measures to reduce pollution.', o:['done','made','introduced','put'], c:2, e:'introduce measures là collocation chuẩn. «do measures» hay «make measures» đều sai.' },
{ lv:'b2', type:'match', tag:'thành ngữ', q:'«the elephant in the room» nghĩa là gì?', o:['một vật quá to','vấn đề ai cũng thấy mà không ai nói','một người quan trọng','một sai lầm nhỏ'], c:1, e:'Chỉ vấn đề hiển nhiên nhưng mọi người tránh nhắc tới.' },
{ lv:'b2', type:'match', tag:'cụm động từ', q:'«carry out» nghĩa là gì?', o:['mang ra ngoài','thực hiện (nghiên cứu, kế hoạch)','tiếp tục','chịu đựng'], c:1, e:'carry out research / a survey / an experiment — rất thông dụng trong văn học thuật.' },
{ lv:'b2', type:'prep', tag:'giới từ', q:'There has been a sharp increase ___ house prices.', o:['of','in','on','for'], c:1, e:'an increase IN + thứ tăng lên. «increase of» dùng cho mức tăng: an increase of 5%.' },
{ lv:'b2', type:'mc', tag:'liên kết', q:'The plan is cheap; ___, it is risky.', o:['moreover','therefore','however','thus'], c:2, e:'however nối hai ý TRÁI ngược. moreover và thus đều nối ý cùng chiều.' },
{ lv:'b2', type:'order', tag:'trật tự câu', q:'Sắp xếp: only / after / did / the meeting / he / speak', c:'Only after the meeting did he speak', e:'«Only + trạng ngữ» đầu câu bắt buộc đảo ngữ.' },
{ lv:'b2', type:'gap', tag:'bị động', q:'The building ___ (renovate) at the moment.', c:'is being renovated', e:'Bị động hiện tại tiếp diễn: is/are being + V3.' },
{ lv:'b2', type:'mc', tag:'mạo từ', q:'___ poverty remains a serious problem in many regions.', o:['A','An','The','—'], c:3, e:'Danh từ trừu tượng không đếm được nói chung thì KHÔNG dùng mạo từ.' },
{ lv:'b2', type:'rewrite', tag:'viết lại', q:'Viết lại trang trọng: The results show clearly that the method works. → The results clearly ___ the effectiveness of the method.', c:'demonstrate', e:'demonstrate là động từ học thuật thay cho «show clearly».' }

];

if (typeof module !== 'undefined'){ module.exports = { EN_EXERCISES }; }
