/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG TRUNG (mở rộng)
   ------------------------------------------------------------
   Đẩy thêm bài vào mảng READINGS của js/readings.js (nạp SAU tệp đó).
   Shape xem js/readings.js; text và tr phải cùng số đoạn, keys ≥6, qs ≥3.
   Nội dung tự biên soạn, viết quanh một chùm từ để mỗi từ được gặp lại
   vài lần trong các câu khác nhau.
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'在食堂', vi:'Ở nhà ăn',
  intro:'HSK1. Chùm từ trọng tâm: gọi món, số lượng, tiền nong trong bữa ăn hằng ngày.',
  text:[
    '中午十二点，我和小林去学校的食堂。人很多，我们要等一会儿。',
    '我想吃米饭和鸡蛋。小林不吃肉，她要青菜和豆腐。',
    '我问她：“你要喝什么？”她说：“一杯水就行。”',
    '我们一共花了十八块钱。饭很好吃，也不贵。小林说：“明天我们还来这儿吃吧。”'
  ],
  tr:[
    'Mười hai giờ trưa, tôi và Tiểu Lâm đi nhà ăn của trường. Đông người lắm, chúng tôi phải đợi một lát.',
    'Tôi muốn ăn cơm và trứng gà. Tiểu Lâm không ăn thịt, cô ấy lấy rau xanh và đậu phụ.',
    'Tôi hỏi cô ấy: “Cậu uống gì?” Cô ấy nói: “Một cốc nước là được.”',
    'Chúng tôi tiêu tất cả mười tám tệ. Cơm rất ngon, cũng không đắt. Tiểu Lâm nói: “Mai mình lại đến đây ăn nhé.”'
  ],
  keys:[
    { w:'食堂', r:'shítáng', vi:'nhà ăn, căng tin' },
    { w:'等', r:'děng', vi:'đợi' },
    { w:'一会儿', r:'yíhuìr', vi:'một lát' },
    { w:'鸡蛋', r:'jīdàn', vi:'trứng gà' },
    { w:'青菜', r:'qīngcài', vi:'rau xanh' },
    { w:'一共', r:'yígòng', vi:'tất cả, tổng cộng' },
    { w:'花', r:'huā', vi:'tiêu (tiền)', note:'花钱 — tiêu tiền; 花时间 — tốn thời gian' },
    { w:'就行', r:'jiù xíng', vi:'là được rồi' }
  ],
  qs:[
    { q:'Vì sao hai người phải đợi?', o:['Nhà ăn chưa mở','Người rất đông','Chưa có tiền','Bạn đến muộn'], c:1, e:'人很多，我们要等一会儿.' },
    { q:'Tiểu Lâm gọi món gì?', o:['Cơm và thịt','Rau xanh và đậu phụ','Mì và trứng','Chỉ uống nước'], c:1, e:'她不吃肉，要青菜和豆腐.' },
    { q:'Bữa ăn hết bao nhiêu tiền?', o:['8 tệ','12 tệ','18 tệ','80 tệ'], c:2, e:'我们一共花了十八块钱.' }
  ],
  after:'Kể lại bữa trưa hôm nay của bạn bằng 4 câu, dùng 一共 · 花 · 就行.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Gia đình', title:'我的家', vi:'Gia đình tôi',
  intro:'HSK1. Chùm từ trọng tâm: thành viên gia đình, nghề nghiệp, 有 và lượng từ 口.',
  text:[
    '我家有五口人：爸爸、妈妈、哥哥、妹妹和我。',
    '爸爸是医生，在医院工作，每天很忙。妈妈是老师，她教汉语。',
    '哥哥二十五岁，已经工作了。妹妹还小，今年上小学。',
    '我们家有一只猫，叫小白。晚上一家人在一起看电视，我觉得很幸福。'
  ],
  tr:[
    'Nhà tôi có năm người: bố, mẹ, anh trai, em gái và tôi.',
    'Bố là bác sĩ, làm việc ở bệnh viện, ngày nào cũng rất bận. Mẹ là giáo viên, mẹ dạy tiếng Trung.',
    'Anh trai hai mươi lăm tuổi, đã đi làm rồi. Em gái còn nhỏ, năm nay học tiểu học.',
    'Nhà tôi có một con mèo, tên là Tiểu Bạch. Buổi tối cả nhà cùng xem tivi, tôi thấy rất hạnh phúc.'
  ],
  keys:[
    { w:'口', r:'kǒu', vi:'lượng từ đếm nhân khẩu', note:'五口人 — năm người trong nhà' },
    { w:'医院', r:'yīyuàn', vi:'bệnh viện' },
    { w:'教', r:'jiāo', vi:'dạy' },
    { w:'已经', r:'yǐjīng', vi:'đã… rồi' },
    { w:'上小学', r:'shàng xiǎoxué', vi:'học tiểu học' },
    { w:'只', r:'zhī', vi:'lượng từ cho con vật nhỏ' },
    { w:'一起', r:'yìqǐ', vi:'cùng nhau' },
    { w:'幸福', r:'xìngfú', vi:'hạnh phúc' }
  ],
  qs:[
    { q:'Nhà người viết có mấy người?', o:['Ba','Bốn','Năm','Sáu'], c:2, e:'我家有五口人.' },
    { q:'Mẹ làm nghề gì?', o:['Bác sĩ','Giáo viên','Y tá','Nhân viên bán hàng'], c:1, e:'妈妈是老师，她教汉语.' },
    { q:'Con mèo tên gì?', o:['小林','小白','小明','小黑'], c:1, e:'有一只猫，叫小白.' }
  ],
  after:'Giới thiệu gia đình bạn bằng 4 câu, nhớ dùng đúng lượng từ 口 và 只.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Mua sắm', title:'在水果店', vi:'Ở quầy hoa quả',
  intro:'HSK2. Chùm từ trọng tâm: mặc cả, cân đong, so sánh giá — ngữ cảnh chợ và cửa hàng.',
  text:[
    '星期天早上，我去家附近的水果店买水果。老板是个热情的中年人。',
    '我问：“苹果多少钱一斤？”老板说：“八块。很甜，你尝一个。”',
    '我尝了一口，真的不错，就买了两斤。我又看了看香蕉，比苹果便宜一点儿。',
    '老板说：“再拿一把香蕉吧，给你算十五。”我笑着说好。回家的路上，我觉得今天买得很值。'
  ],
  tr:[
    'Sáng chủ nhật, tôi đi cửa hàng hoa quả gần nhà mua trái cây. Ông chủ là một người trung niên niềm nở.',
    'Tôi hỏi: “Táo bao nhiêu tiền một cân?” Ông chủ nói: “Tám tệ. Ngọt lắm, cô nếm thử một quả.”',
    'Tôi nếm một miếng, đúng là ngon thật, thế là mua hai cân. Tôi lại ngó sang chuối, rẻ hơn táo một chút.',
    'Ông chủ nói: “Lấy thêm một nải chuối đi, tính cô mười lăm.” Tôi cười nói được. Trên đường về, tôi thấy hôm nay mua rất hời.'
  ],
  keys:[
    { w:'附近', r:'fùjìn', vi:'gần đây' },
    { w:'老板', r:'lǎobǎn', vi:'ông chủ' },
    { w:'斤', r:'jīn', vi:'cân (500 g)' },
    { w:'尝', r:'cháng', vi:'nếm thử' },
    { w:'比', r:'bǐ', vi:'hơn (so sánh)', note:'A 比 B + tính từ: 香蕉比苹果便宜' },
    { w:'便宜', r:'piányi', vi:'rẻ' },
    { w:'一把', r:'yì bǎ', vi:'một nắm, một nải' },
    { w:'值', r:'zhí', vi:'đáng, hời' }
  ],
  qs:[
    { q:'Táo giá bao nhiêu một cân?', o:['5 tệ','8 tệ','15 tệ','18 tệ'], c:1, e:'苹果八块一斤.' },
    { q:'Chuối so với táo thì thế nào?', o:['Đắt hơn','Rẻ hơn một chút','Bằng giá','Không bán'], c:1, e:'香蕉比苹果便宜一点儿.' },
    { q:'Vì sao người viết quyết định mua táo?', o:['Vì rẻ nhất','Vì nếm thử thấy ngon','Vì ông chủ quen','Vì không còn quả khác'], c:1, e:'我尝了一口，真的不错，就买了两斤.' }
  ],
  after:'Viết đoạn hội thoại mua đồ 6 câu, dùng 多少钱 · 比 · 便宜 · 尝.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Giao thông', title:'坐错了车', vi:'Lên nhầm xe',
  intro:'HSK2. Chùm từ trọng tâm: hỏi đường, phương hướng, xử lý khi đi nhầm.',
  text:[
    '昨天下午我要去图书馆，可是上错了公交车。车开了十分钟，我才发现窗外的路不对。',
    '我问旁边的阿姨：“请问，这辆车到图书馆吗？”她说：“不到，你坐反了。”',
    '我很着急。阿姨告诉我：“下一站下车，过马路，坐三路车就行。”',
    '我照她说的做，二十分钟以后终于到了。虽然迟到了，但是我学会了看站牌。'
  ],
  tr:[
    'Chiều hôm qua tôi định đi thư viện, nhưng lên nhầm xe buýt. Xe chạy được mười phút, tôi mới phát hiện đường bên ngoài cửa sổ không đúng.',
    'Tôi hỏi bác gái ngồi bên: “Cho hỏi, xe này có đến thư viện không ạ?” Bác nói: “Không đến, cháu đi ngược rồi.”',
    'Tôi rất sốt ruột. Bác bảo tôi: “Bến sau xuống xe, qua đường, bắt xe số 3 là được.”',
    'Tôi làm theo lời bác, hai mươi phút sau cuối cùng cũng tới. Tuy đến muộn, nhưng tôi đã biết cách xem bảng chỉ bến.'
  ],
  keys:[
    { w:'上错', r:'shàng cuò', vi:'lên nhầm', note:'动词 + 错 = làm nhầm: 说错, 写错, 坐错' },
    { w:'发现', r:'fāxiàn', vi:'phát hiện' },
    { w:'反', r:'fǎn', vi:'ngược' },
    { w:'着急', r:'zháojí', vi:'sốt ruột, lo' },
    { w:'过马路', r:'guò mǎlù', vi:'qua đường' },
    { w:'终于', r:'zhōngyú', vi:'cuối cùng thì' },
    { w:'迟到', r:'chídào', vi:'đến muộn' },
    { w:'站牌', r:'zhànpái', vi:'bảng tên bến xe' }
  ],
  qs:[
    { q:'Người viết định đi đâu?', o:['Trường học','Thư viện','Bệnh viện','Chợ'], c:1, e:'我要去图书馆.' },
    { q:'Bác gái khuyên làm gì?', o:['Đi bộ tiếp','Xuống bến sau, qua đường, bắt xe số 3','Gọi taxi','Quay về nhà'], c:1, e:'下一站下车，过马路，坐三路车就行.' },
    { q:'Kết quả cuối cùng?', o:['Không đến được','Đến nơi, chỉ bị muộn','Mất ví','Lên nhầm lần nữa'], c:1, e:'终于到了。虽然迟到了…' }
  ],
  after:'Kể một lần bạn đi nhầm đường, dùng 上错 · 发现 · 着急 · 终于.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'我的房间', vi:'Căn phòng của tôi',
  intro:'HSK2. Chùm từ trọng tâm: đồ đạc trong nhà và cách nói vị trí (在…上/里/旁边).',
  text:[
    '我的房间不大，可是很干净。门的右边是一张床，床上有两个枕头。',
    '床的旁边有一张桌子。桌子上放着电脑、几本书和一杯茶。',
    '桌子下面是我的书包。窗户旁边有一把椅子，我常常坐在那儿看书。',
    '墙上挂着一张中国地图。每次看见它，我就想去北京、上海和西安看看。'
  ],
  tr:[
    'Phòng tôi không to, nhưng rất sạch. Bên phải cửa là một cái giường, trên giường có hai cái gối.',
    'Cạnh giường có một cái bàn. Trên bàn đặt máy tính, mấy quyển sách và một cốc trà.',
    'Dưới bàn là cặp sách của tôi. Cạnh cửa sổ có một cái ghế, tôi hay ngồi đó đọc sách.',
    'Trên tường treo một tấm bản đồ Trung Quốc. Mỗi lần nhìn thấy nó, tôi lại muốn đi Bắc Kinh, Thượng Hải và Tây An xem thử.'
  ],
  keys:[
    { w:'干净', r:'gānjìng', vi:'sạch sẽ' },
    { w:'右边', r:'yòubian', vi:'bên phải' },
    { w:'枕头', r:'zhěntou', vi:'cái gối' },
    { w:'放着', r:'fàngzhe', vi:'đang đặt', note:'着 chỉ trạng thái kéo dài: 放着, 挂着, 开着' },
    { w:'下面', r:'xiàmiàn', vi:'bên dưới' },
    { w:'窗户', r:'chuānghu', vi:'cửa sổ' },
    { w:'挂', r:'guà', vi:'treo' },
    { w:'地图', r:'dìtú', vi:'bản đồ' }
  ],
  qs:[
    { q:'Trên bàn có gì?', o:['Cặp sách','Máy tính, sách và một cốc trà','Bản đồ','Cái gối'], c:1, e:'桌子上放着电脑、几本书和一杯茶.' },
    { q:'Cặp sách để ở đâu?', o:['Trên giường','Dưới bàn','Trên ghế','Cạnh cửa sổ'], c:1, e:'桌子下面是我的书包.' },
    { q:'Tấm bản đồ khiến người viết nghĩ đến điều gì?', o:['Về quê','Đi Bắc Kinh, Thượng Hải, Tây An','Mua nhà mới','Học địa lý'], c:1, e:'我就想去北京、上海和西安看看.' }
  ],
  after:'Tả phòng bạn bằng 5 câu, mỗi câu dùng một từ chỉ vị trí khác nhau.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Sức khoẻ', title:'看医生', vi:'Đi khám bệnh',
  intro:'HSK3. Chùm từ trọng tâm: triệu chứng, lời dặn của bác sĩ, cách nói mức độ.',
  text:[
    '上个星期我感冒了，头疼、嗓子也不舒服，晚上咳嗽得睡不着。',
    '妈妈让我去医院看看。医生先问我：“这样几天了？有没有发烧？”我说三天了，不太严重。',
    '医生检查以后说：“不用打针，吃点儿药就行。记住：多喝热水，早点儿休息，别吃辣的。”',
    '回家以后我按时吃药，两天就好多了。我这才明白，小病也不能拖。'
  ],
  tr:[
    'Tuần trước tôi bị cảm, đau đầu, họng cũng khó chịu, buổi tối ho đến mức không ngủ được.',
    'Mẹ bảo tôi đi bệnh viện khám. Bác sĩ hỏi trước: “Thế này mấy ngày rồi? Có sốt không?” Tôi nói ba ngày rồi, không nặng lắm.',
    'Khám xong bác sĩ nói: “Không cần tiêm, uống chút thuốc là được. Nhớ nhé: uống nhiều nước ấm, nghỉ sớm một chút, đừng ăn đồ cay.”',
    'Về nhà tôi uống thuốc đúng giờ, hai ngày là đỡ hẳn. Lúc ấy tôi mới hiểu, bệnh nhẹ cũng không nên để lâu.'
  ],
  keys:[
    { w:'感冒', r:'gǎnmào', vi:'cảm lạnh' },
    { w:'嗓子', r:'sǎngzi', vi:'cổ họng' },
    { w:'咳嗽', r:'késou', vi:'ho' },
    { w:'发烧', r:'fāshāo', vi:'sốt' },
    { w:'严重', r:'yánzhòng', vi:'nghiêm trọng' },
    { w:'打针', r:'dǎzhēn', vi:'tiêm thuốc' },
    { w:'按时', r:'ànshí', vi:'đúng giờ, đúng cữ' },
    { w:'拖', r:'tuō', vi:'kéo dài, để lâu' }
  ],
  qs:[
    { q:'Triệu chứng nào KHÔNG được nhắc tới?', o:['Đau đầu','Ho','Đau bụng','Khó chịu ở họng'], c:2, e:'头疼、嗓子不舒服、咳嗽 — không nói đau bụng.' },
    { q:'Bác sĩ dặn gì?', o:['Phải tiêm','Uống thuốc, uống nước ấm, nghỉ sớm, kiêng cay','Nhập viện','Không cần làm gì'], c:1, e:'不用打针，吃点儿药…多喝热水，早点儿休息，别吃辣的.' },
    { q:'Bài học rút ra là gì?', o:['Nên tự mua thuốc','Bệnh nhẹ cũng không nên để lâu','Không nên đi bệnh viện','Phải nghỉ học một tuần'], c:1, e:'小病也不能拖.' }
  ],
  after:'Đóng vai bệnh nhân, viết 6 câu kể triệu chứng, dùng 得 (咳嗽得睡不着) ít nhất một lần.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Văn hoá', title:'春节的年夜饭', vi:'Bữa cơm tất niên',
  intro:'HSK3. Chùm từ trọng tâm: phong tục Tết, ý nghĩa món ăn, không khí gia đình.',
  text:[
    '春节是中国最重要的节日。不管走多远，人们都想回家过年。',
    '除夕那天，一家人一起做年夜饭。北方常常包饺子，南方多吃年糕和鱼。',
    '鱼一般不吃完，因为“年年有鱼”和“年年有余”听起来一样，意思是每年都有富余。',
    '吃完饭，长辈会给孩子红包。外面放烟花，屋里说说笑笑，这就是中国人心里的新年。'
  ],
  tr:[
    'Tết Nguyên đán là ngày lễ quan trọng nhất của Trung Quốc. Dù đi xa đến đâu, người ta đều muốn về nhà ăn Tết.',
    'Ngày ba mươi, cả nhà cùng làm bữa cơm tất niên. Miền Bắc thường gói sủi cảo, miền Nam hay ăn bánh tổ và cá.',
    'Cá thường không ăn hết, vì “năm nào cũng có cá” và “năm nào cũng dư dả” nghe giống nhau, ý là mỗi năm đều có của để dành.',
    'Ăn xong, người lớn mừng tuổi cho trẻ con. Bên ngoài đốt pháo hoa, trong nhà cười nói, đó chính là năm mới trong lòng người Trung Quốc.'
  ],
  keys:[
    { w:'节日', r:'jiérì', vi:'ngày lễ' },
    { w:'不管…都', r:'bùguǎn…dōu', vi:'dù… thì cũng…' },
    { w:'过年', r:'guònián', vi:'ăn Tết' },
    { w:'除夕', r:'chúxī', vi:'đêm giao thừa' },
    { w:'包饺子', r:'bāo jiǎozi', vi:'gói sủi cảo' },
    { w:'余', r:'yú', vi:'dư, thừa', note:'鱼 yú và 余 yú đồng âm — gốc của tục để lại con cá' },
    { w:'长辈', r:'zhǎngbèi', vi:'người bậc trên' },
    { w:'红包', r:'hóngbāo', vi:'bao lì xì' }
  ],
  qs:[
    { q:'Vì sao người ta không ăn hết con cá?', o:['Vì cá to quá','Vì 鱼 đồng âm với 余 — mong dư dả','Vì để dành mai ăn','Vì kiêng thịt'], c:1, e:'“年年有鱼”和“年年有余”听起来一样.' },
    { q:'Miền Bắc thường làm món gì?', o:['Bánh tổ','Sủi cảo','Cá kho','Mì trường thọ'], c:1, e:'北方常常包饺子.' },
    { q:'Ai là người mừng tuổi?', o:['Trẻ con','Người bậc trên','Khách đến chơi','Hàng xóm'], c:1, e:'长辈会给孩子红包.' }
  ],
  after:'So sánh Tết Việt Nam và Tết Trung Quốc bằng 5 câu, dùng 不管…都 và 因为.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Dịch vụ', title:'在银行办卡', vi:'Làm thẻ ở ngân hàng',
  intro:'HSK3. Chùm từ trọng tâm: giấy tờ, thủ tục, câu hỏi lịch sự nơi công sở.',
  text:[
    '来中国的第一个星期，我去银行办了一张银行卡。进门的时候要先取号，然后坐着等。',
    '轮到我的时候，工作人员问：“您带护照了吗？还需要填一张表。”',
    '表上要写姓名、国籍、电话和地址。有一栏我看不懂，就请她帮忙。她很耐心地解释了一遍。',
    '十几分钟以后，卡就办好了。她还提醒我：“密码别告诉别人，手机银行记得下载。”'
  ],
  tr:[
    'Tuần đầu tiên sang Trung Quốc, tôi đến ngân hàng làm một chiếc thẻ. Vào cửa phải lấy số trước, rồi ngồi đợi.',
    'Đến lượt tôi, nhân viên hỏi: “Anh mang hộ chiếu chưa ạ? Còn cần điền một tờ khai nữa.”',
    'Trên tờ khai phải ghi họ tên, quốc tịch, điện thoại và địa chỉ. Có một ô tôi không hiểu, liền nhờ cô ấy giúp. Cô kiên nhẫn giải thích lại một lượt.',
    'Hơn mười phút sau là làm xong thẻ. Cô còn nhắc tôi: “Mật khẩu đừng nói cho ai, nhớ tải ứng dụng ngân hàng trên điện thoại nhé.”'
  ],
  keys:[
    { w:'办', r:'bàn', vi:'làm (thủ tục)', note:'办卡, 办手续, 办护照' },
    { w:'取号', r:'qǔhào', vi:'lấy số thứ tự' },
    { w:'轮到', r:'lúndào', vi:'đến lượt' },
    { w:'护照', r:'hùzhào', vi:'hộ chiếu' },
    { w:'填表', r:'tián biǎo', vi:'điền đơn' },
    { w:'国籍', r:'guójí', vi:'quốc tịch' },
    { w:'耐心', r:'nàixīn', vi:'kiên nhẫn' },
    { w:'密码', r:'mìmǎ', vi:'mật khẩu' }
  ],
  qs:[
    { q:'Việc đầu tiên khi vào ngân hàng là gì?', o:['Điền đơn','Lấy số thứ tự','Đưa hộ chiếu','Gọi điện'], c:1, e:'进门的时候要先取号.' },
    { q:'Giấy tờ nào bắt buộc phải mang?', o:['Bằng lái','Hộ chiếu','Thẻ sinh viên','Ảnh thẻ'], c:1, e:'您带护照了吗？' },
    { q:'Nhân viên nhắc điều gì?', o:['Nhớ giữ hoá đơn','Đừng nói mật khẩu cho ai','Một tháng phải đến một lần','Không dùng thẻ ở nước ngoài'], c:1, e:'密码别告诉别人.' }
  ],
  after:'Viết 5 câu về một lần bạn làm thủ tục giấy tờ, dùng 先…然后… và 提醒.' },

{ lang:'zh', lv:'hsk4', mins:6, cat:'Công việc', title:'第一次面试', vi:'Lần phỏng vấn đầu tiên',
  intro:'HSK4. Chùm từ trọng tâm: xin việc, tự giới thiệu, điểm mạnh điểm yếu.',
  text:[
    '毕业前一个月，我去一家公司面试。出门前我把简历检查了三遍，心里还是有点儿紧张。',
    '面试官问的第一个问题很普通：“请简单介绍一下你自己。”我按照准备好的内容说了两分钟。',
    '接着他问：“你觉得自己最大的缺点是什么？”这个问题不好回答。我想了想，说我做事太慢，但是在慢慢改。',
    '出来以后，我觉得表现一般。没想到三天后接到了电话——我被录取了。原来诚实比完美更重要。'
  ],
  tr:[
    'Một tháng trước khi tốt nghiệp, tôi đi phỏng vấn ở một công ty. Trước khi ra khỏi nhà tôi kiểm tra CV ba lượt, trong lòng vẫn hơi căng thẳng.',
    'Câu hỏi đầu tiên của người phỏng vấn rất bình thường: “Bạn giới thiệu ngắn gọn về mình đi.” Tôi nói theo nội dung đã chuẩn bị trong hai phút.',
    'Tiếp đó anh ấy hỏi: “Bạn thấy khuyết điểm lớn nhất của mình là gì?” Câu này không dễ trả lời. Tôi nghĩ một lát rồi nói mình làm việc hơi chậm, nhưng đang dần sửa.',
    'Ra ngoài, tôi thấy mình thể hiện cũng thường. Không ngờ ba ngày sau nhận được điện thoại — tôi được nhận. Hoá ra thành thật còn quan trọng hơn hoàn hảo.'
  ],
  keys:[
    { w:'面试', r:'miànshì', vi:'phỏng vấn' },
    { w:'简历', r:'jiǎnlì', vi:'sơ yếu lý lịch, CV' },
    { w:'紧张', r:'jǐnzhāng', vi:'căng thẳng' },
    { w:'按照', r:'ànzhào', vi:'theo, dựa theo' },
    { w:'缺点', r:'quēdiǎn', vi:'khuyết điểm', note:'trái nghĩa: 优点' },
    { w:'表现', r:'biǎoxiàn', vi:'thể hiện' },
    { w:'录取', r:'lùqǔ', vi:'được nhận, trúng tuyển' },
    { w:'诚实', r:'chéngshí', vi:'thành thật' }
  ],
  qs:[
    { q:'Người viết chuẩn bị thế nào trước khi đi?', o:['Không chuẩn bị gì','Kiểm tra CV ba lượt','Học thuộc câu trả lời','Nhờ bạn đi cùng'], c:1, e:'把简历检查了三遍.' },
    { q:'Câu hỏi khó là câu nào?', o:['Giới thiệu bản thân','Khuyết điểm lớn nhất là gì','Lương mong muốn','Vì sao chọn công ty'], c:1, e:'这个问题不好回答.' },
    { q:'Kết luận của người viết?', o:['Phải tỏ ra hoàn hảo','Thành thật quan trọng hơn hoàn hảo','Không nên đi phỏng vấn sớm','Nên nói dối về khuyết điểm'], c:1, e:'原来诚实比完美更重要.' }
  ],
  after:'Viết phần tự giới thiệu 2 phút của bạn, dùng 按照 · 表现 · 优点 và 缺点.' },

{ lang:'zh', lv:'hsk4', mins:6, cat:'Đời sống', title:'租房记', vi:'Chuyện thuê nhà',
  intro:'HSK4. Chùm từ trọng tâm: hợp đồng, tiền đặt cọc, điều kiện nhà cửa.',
  text:[
    '来北京工作以后，第一件麻烦事就是租房子。网上的照片总是比实际好看得多。',
    '看了五六套，我才找到合适的：离地铁站走路十分钟，房租一个月三千五，包物业费。',
    '签合同的时候要交一个月押金。房东提醒我：“退房的时候，家具坏了要照价赔。”',
    '搬进去的第一个晚上，屋子还很空，可是我躺在床上想：从今天起，这就是我在这座城市的家了。'
  ],
  tr:[
    'Sau khi lên Bắc Kinh làm việc, chuyện phiền phức đầu tiên chính là thuê nhà. Ảnh trên mạng bao giờ cũng đẹp hơn thực tế nhiều.',
    'Xem năm sáu căn, tôi mới tìm được căn vừa ý: đi bộ mười phút là tới ga tàu điện ngầm, tiền nhà ba nghìn rưỡi một tháng, bao phí quản lý.',
    'Lúc ký hợp đồng phải đóng một tháng tiền cọc. Chủ nhà nhắc tôi: “Khi trả nhà, đồ đạc hỏng thì phải đền theo giá.”',
    'Đêm đầu tiên dọn vào, căn phòng còn trống trải, nhưng nằm trên giường tôi nghĩ: từ hôm nay, đây chính là nhà của mình ở thành phố này.'
  ],
  keys:[
    { w:'租', r:'zū', vi:'thuê' },
    { w:'麻烦', r:'máfan', vi:'phiền phức' },
    { w:'实际', r:'shíjì', vi:'thực tế' },
    { w:'合适', r:'héshì', vi:'vừa ý, phù hợp' },
    { w:'房租', r:'fángzū', vi:'tiền thuê nhà' },
    { w:'签合同', r:'qiān hétong', vi:'ký hợp đồng' },
    { w:'押金', r:'yājīn', vi:'tiền đặt cọc' },
    { w:'赔', r:'péi', vi:'đền, bồi thường' }
  ],
  qs:[
    { q:'Người viết xem bao nhiêu căn mới chọn được?', o:['Một hai căn','Năm sáu căn','Mười căn','Không xem căn nào'], c:1, e:'看了五六套，我才找到合适的.' },
    { q:'Tiền nhà một tháng là bao nhiêu?', o:['1500','2500','3500','5000'], c:2, e:'房租一个月三千五.' },
    { q:'Chủ nhà nhắc điều gì?', o:['Không được nuôi mèo','Đồ đạc hỏng phải đền theo giá','Trả tiền trước ba tháng','Không được về muộn'], c:1, e:'家具坏了要照价赔.' }
  ],
  after:'Viết 6 câu hỏi bạn sẽ hỏi chủ nhà trước khi ký hợp đồng.' },

{ lang:'zh', lv:'hsk4', mins:6, cat:'Du lịch', title:'高铁上的三个小时', vi:'Ba tiếng trên tàu cao tốc',
  intro:'HSK4. Chùm từ trọng tâm: đi tàu, quan sát bạn đồng hành, cảm nhận về tốc độ đổi thay.',
  text:[
    '从上海到北京，高铁只要四个多小时。车厢里很安静，大部分人都在看手机或者睡觉。',
    '我旁边坐着一位老人，他说自己年轻的时候坐绿皮车，同样的路要走一天一夜。',
    '“那时候窗户能打开，风吹进来，饭是自己带的。”他笑着说，“现在快是快，可是少了点儿味道。”',
    '窗外的田野一片片往后退。我忽然明白，速度让我们省下时间，可是省下的时间用来做什么，才是更难的问题。'
  ],
  tr:[
    'Từ Thượng Hải đến Bắc Kinh, tàu cao tốc chỉ mất hơn bốn tiếng. Trong toa rất yên tĩnh, phần lớn mọi người đều xem điện thoại hoặc ngủ.',
    'Ngồi cạnh tôi là một cụ già, cụ kể hồi trẻ đi tàu vỏ xanh, cùng quãng đường ấy phải đi một ngày một đêm.',
    '“Hồi đó cửa sổ mở được, gió thổi vào, cơm thì tự mang theo.” Cụ cười nói, “Bây giờ nhanh thì nhanh thật, nhưng thiếu đi chút hương vị.”',
    'Đồng ruộng ngoài cửa sổ lùi lại từng mảng. Tôi chợt hiểu, tốc độ giúp ta tiết kiệm thời gian, nhưng thời gian tiết kiệm được dùng để làm gì mới là câu hỏi khó hơn.'
  ],
  keys:[
    { w:'高铁', r:'gāotiě', vi:'tàu cao tốc' },
    { w:'车厢', r:'chēxiāng', vi:'toa tàu' },
    { w:'大部分', r:'dàbùfen', vi:'phần lớn' },
    { w:'同样', r:'tóngyàng', vi:'cùng, như nhau' },
    { w:'味道', r:'wèidao', vi:'hương vị; cái chất riêng' },
    { w:'田野', r:'tiányě', vi:'đồng ruộng' },
    { w:'忽然', r:'hūrán', vi:'chợt, bỗng' },
    { w:'速度', r:'sùdù', vi:'tốc độ' }
  ],
  qs:[
    { q:'Ngày xưa đi tàu vỏ xanh mất bao lâu?', o:['Bốn tiếng','Một ngày một đêm','Hai ngày','Nửa ngày'], c:1, e:'同样的路要走一天一夜.' },
    { q:'Cụ già tiếc điều gì?', o:['Vé đắt hơn','Thiếu đi chút hương vị','Tàu chạy ồn','Không có chỗ ngồi'], c:1, e:'现在快是快，可是少了点儿味道.' },
    { q:'Suy nghĩ cuối của người viết là gì?', o:['Nên đi tàu chậm','Câu hỏi khó là dùng thời gian tiết kiệm được vào việc gì','Tàu cao tốc quá đắt','Nên nói chuyện với người lạ nhiều hơn'], c:1, e:'省下的时间用来做什么，才是更难的问题.' }
  ],
  after:'Viết 6 câu so sánh một việc «ngày xưa» và «bây giờ», dùng 同样 · 可是 · 忽然.' },

{ lang:'zh', lv:'hsk5', mins:7, cat:'Xã hội', title:'共享单车的最后一公里', vi:'Cây số cuối cùng của xe đạp công cộng',
  intro:'HSK5. Chùm từ trọng tâm: kinh tế chia sẻ, quản lý đô thị, lợi và hại của một tiện ích.',
  text:[
    '几年前，共享单车几乎在一夜之间铺满了中国的城市。扫码就能骑走，一块钱解决从地铁站到家的“最后一公里”。',
    '它确实方便，也让不少人重新回到自行车上。可是问题很快出现：车被随意停在人行道上，有的甚至堆成小山。',
    '后来政府划出专门的停车区，企业也用技术手段限制乱停：停错地方就多收钱。秩序慢慢好了一些。',
    '这件事给人的启发不只是关于自行车。一个新东西出现的时候，方便往往先到，规则总是后到；而能不能长久，就看规则追不追得上。'
  ],
  tr:[
    'Vài năm trước, xe đạp công cộng gần như phủ kín các thành phố Trung Quốc chỉ sau một đêm. Quét mã là đạp đi được, một tệ giải quyết “cây số cuối cùng” từ ga tàu điện ngầm về nhà.',
    'Nó quả thật tiện lợi, cũng khiến không ít người quay lại với xe đạp. Nhưng vấn đề nhanh chóng xuất hiện: xe bị để bừa trên vỉa hè, có chỗ còn chất thành đống như núi nhỏ.',
    'Về sau chính quyền vạch ra khu đỗ riêng, doanh nghiệp cũng dùng biện pháp kỹ thuật để hạn chế đỗ bừa: đỗ sai chỗ thì bị thu thêm tiền. Trật tự dần khá lên.',
    'Điều chuyện này gợi ra không chỉ là về xe đạp. Khi một thứ mới xuất hiện, sự tiện lợi thường đến trước, quy tắc bao giờ cũng đến sau; còn có bền được hay không thì tuỳ vào việc quy tắc có đuổi kịp hay không.'
  ],
  keys:[
    { w:'共享', r:'gòngxiǎng', vi:'chia sẻ chung' },
    { w:'扫码', r:'sǎomǎ', vi:'quét mã' },
    { w:'确实', r:'quèshí', vi:'quả thật' },
    { w:'随意', r:'suíyì', vi:'tuỳ tiện, bừa bãi' },
    { w:'人行道', r:'rénxíngdào', vi:'vỉa hè' },
    { w:'限制', r:'xiànzhì', vi:'hạn chế' },
    { w:'秩序', r:'zhìxù', vi:'trật tự' },
    { w:'启发', r:'qǐfā', vi:'gợi mở, điều rút ra' }
  ],
  qs:[
    { q:'“Cây số cuối cùng” chỉ điều gì?', o:['Quãng đường dài nhất','Quãng từ ga tàu điện ngầm về nhà','Đường đua xe đạp','Cây số đầu tiên của chuyến đi'], c:1, e:'一块钱解决从地铁站到家的“最后一公里”.' },
    { q:'Vấn đề lớn nhất là gì?', o:['Xe quá đắt','Xe bị để bừa trên vỉa hè','Không ai biết đi xe đạp','Xe hay hỏng'], c:1, e:'车被随意停在人行道上.' },
    { q:'Bài rút ra kết luận nào?', o:['Nên cấm xe đạp công cộng','Tiện lợi đến trước, quy tắc đến sau — bền hay không tuỳ quy tắc có đuổi kịp','Công nghệ giải quyết mọi thứ','Chính quyền không nên can thiệp'], c:1, e:'方便往往先到，规则总是后到.' }
  ],
  after:'Viết 8 câu bàn về một tiện ích mới ở Việt Nam, dùng 确实 · 限制 · 秩序 · 启发.' }

  );
})();
