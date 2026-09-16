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

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'今天天气怎么样', vi:'Hôm nay thời tiết thế nào',
  intro:'HSK1. Chùm từ trọng tâm: thời tiết, nóng lạnh, câu hỏi 怎么样.',
  text:[
    '今天上午下雨了，很冷。我穿了一件大衣才出门。',
    '中午雨停了，太阳出来了，天气很好。',
    '下午我和朋友去公园。人不多，我们走了一个小时。',
    '朋友问我：“明天天气怎么样？”我说：“我不知道，看手机吧。”'
  ],
  tr:[
    'Sáng nay trời mưa, rất lạnh. Tôi mặc một chiếc áo khoác dài mới ra khỏi nhà.',
    'Buổi trưa mưa tạnh, mặt trời ló ra, thời tiết rất đẹp.',
    'Buổi chiều tôi và bạn đi công viên. Người không đông, chúng tôi đi bộ một tiếng.',
    'Bạn hỏi tôi: “Mai thời tiết thế nào?” Tôi nói: “Tớ không biết, xem điện thoại đi.”'
  ],
  keys:[
    { w:'下雨', r:'xiàyǔ', vi:'trời mưa' },
    { w:'冷', r:'lěng', vi:'lạnh' },
    { w:'穿', r:'chuān', vi:'mặc' },
    { w:'大衣', r:'dàyī', vi:'áo khoác dài' },
    { w:'停', r:'tíng', vi:'dừng, tạnh' },
    { w:'太阳', r:'tàiyáng', vi:'mặt trời' },
    { w:'公园', r:'gōngyuán', vi:'công viên' },
    { w:'怎么样', r:'zěnmeyàng', vi:'thế nào' }
  ],
  qs:[
    { q:'Buổi sáng trời thế nào?', o:['Nắng','Mưa và lạnh','Có tuyết','Nhiều gió'], c:1, e:'今天上午下雨了，很冷.' },
    { q:'Buổi chiều hai người làm gì?', o:['Ở nhà','Đi công viên','Đi mua sắm','Đi học'], c:1, e:'下午我和朋友去公园.' },
    { q:'Người viết trả lời câu hỏi về thời tiết ngày mai ra sao?', o:['Sẽ mưa','Sẽ nắng','Không biết, xem điện thoại','Rất lạnh'], c:2, e:'我不知道，看手机吧.' }
  ],
  after:'Viết 4 câu về thời tiết hôm nay ở chỗ bạn, dùng 下雨 · 太阳 · 怎么样.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'打电话给妈妈', vi:'Gọi điện cho mẹ',
  intro:'HSK1. Chùm từ trọng tâm: gọi điện, hỏi thăm, câu hỏi có 吗 và 呢.',
  text:[
    '每个星期天晚上，我都给妈妈打电话。',
    '妈妈问：“你吃饭了吗？身体好吗？”我说：“吃了，我很好。你呢？”',
    '妈妈说家里都好，爸爸在看电视，猫在睡觉。',
    '我们说了二十分钟。挂了电话，我有点儿想家，可是心里很暖。'
  ],
  tr:[
    'Tối chủ nhật nào tôi cũng gọi điện cho mẹ.',
    'Mẹ hỏi: “Con ăn cơm chưa? Sức khoẻ có tốt không?” Tôi nói: “Ăn rồi ạ, con khoẻ. Còn mẹ?”',
    'Mẹ nói ở nhà đều ổn, bố đang xem tivi, con mèo đang ngủ.',
    'Chúng tôi nói chuyện hai mươi phút. Cúp máy xong, tôi hơi nhớ nhà, nhưng trong lòng rất ấm.'
  ],
  keys:[
    { w:'打电话', r:'dǎ diànhuà', vi:'gọi điện thoại' },
    { w:'身体', r:'shēntǐ', vi:'sức khoẻ, cơ thể' },
    { w:'呢', r:'ne', vi:'còn… thì sao', note:'你呢？— còn bạn thì sao?' },
    { w:'在', r:'zài', vi:'đang', note:'在 + động từ: 在看电视 — đang xem tivi' },
    { w:'睡觉', r:'shuìjiào', vi:'ngủ' },
    { w:'挂', r:'guà', vi:'cúp (máy)', note:'挂电话 — cúp điện thoại' },
    { w:'想家', r:'xiǎng jiā', vi:'nhớ nhà' },
    { w:'暖', r:'nuǎn', vi:'ấm' }
  ],
  qs:[
    { q:'Bao lâu gọi một lần?', o:['Mỗi ngày','Tối chủ nhật hằng tuần','Mỗi tháng','Rất hiếm khi'], c:1, e:'每个星期天晚上，我都给妈妈打电话.' },
    { q:'Bố đang làm gì?', o:['Ngủ','Xem tivi','Nấu cơm','Đi làm'], c:1, e:'爸爸在看电视.' },
    { q:'Cúp máy xong người viết cảm thấy thế nào?', o:['Buồn hẳn','Hơi nhớ nhà nhưng lòng ấm','Rất vui','Không cảm thấy gì'], c:1, e:'我有点儿想家，可是心里很暖.' }
  ],
  after:'Viết lại cuộc gọi về nhà bằng 5 câu, dùng 在 + động từ và 呢.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Học tập', title:'学汉字真难吗', vi:'Học chữ Hán có khó không',
  intro:'HSK2. Chùm từ trọng tâm: khó dễ, cách học, động từ + 得 chỉ mức độ.',
  text:[
    '刚开始学汉语的时候，我觉得汉字太难了，写得很慢，也记不住。',
    '老师说：“别着急。汉字有部首，一个部首就是一个意思。”',
    '比如“氵”跟水有关系：河、海、洗。我一下子明白了很多字。',
    '现在我每天写十个字，写得比以前好了。难还是难，但是不那么怕了。'
  ],
  tr:[
    'Lúc mới bắt đầu học tiếng Trung, tôi thấy chữ Hán khó quá, viết rất chậm, cũng không nhớ nổi.',
    'Cô giáo nói: “Đừng sốt ruột. Chữ Hán có bộ thủ, mỗi bộ thủ là một ý nghĩa.”',
    'Ví dụ “氵” liên quan đến nước: sông, biển, rửa. Tôi hiểu ra nhiều chữ cùng một lúc.',
    'Bây giờ mỗi ngày tôi viết mười chữ, viết khá hơn trước. Khó thì vẫn khó, nhưng không còn sợ như thế nữa.'
  ],
  keys:[
    { w:'刚', r:'gāng', vi:'vừa mới' },
    { w:'记不住', r:'jì bu zhù', vi:'không nhớ nổi' },
    { w:'别着急', r:'bié zháojí', vi:'đừng sốt ruột' },
    { w:'部首', r:'bùshǒu', vi:'bộ thủ' },
    { w:'比如', r:'bǐrú', vi:'ví dụ' },
    { w:'有关系', r:'yǒu guānxi', vi:'có liên quan' },
    { w:'一下子', r:'yíxiàzi', vi:'một lúc, bỗng chốc' },
    { w:'怕', r:'pà', vi:'sợ' }
  ],
  qs:[
    { q:'Lúc đầu người viết gặp khó ở chỗ nào?', o:['Nghe','Viết chậm và không nhớ chữ','Phát âm','Ngữ pháp'], c:1, e:'写得很慢，也记不住.' },
    { q:'Cô giáo mách cách gì?', o:['Viết thật nhiều','Nhìn vào bộ thủ để hiểu nghĩa','Học thuộc từ điển','Xem phim'], c:1, e:'汉字有部首，一个部首就是一个意思.' },
    { q:'Bộ 氵 liên quan đến gì?', o:['Lửa','Nước','Cây cối','Tay'], c:1, e:'“氵”跟水有关系：河、海、洗.' }
  ],
  after:'Viết 5 câu kể cách bạn học chữ Hán, dùng 动词 + 得 (写得慢 / 写得好).' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Giao thông', title:'第一次坐地铁', vi:'Lần đầu đi tàu điện ngầm',
  intro:'HSK3. Chùm từ trọng tâm: mua vé, đổi tuyến, giờ cao điểm.',
  text:[
    '刚到北京的第二天，我第一次坐地铁。站里人来人往，我站在自动售票机前面看了半天。',
    '一个学生帮我买了票，还告诉我：“你要坐二号线，然后在西直门换四号线。”',
    '车上很挤，大家都站着看手机。到站的时候，广播说“请注意脚下”。',
    '虽然有点儿紧张，但是我一次也没坐错。下车以后我想：原来看懂地图并不难。'
  ],
  tr:[
    'Ngày thứ hai vừa đến Bắc Kinh, tôi lần đầu đi tàu điện ngầm. Trong ga người qua kẻ lại, tôi đứng trước máy bán vé tự động nhìn mãi.',
    'Một bạn sinh viên giúp tôi mua vé, còn bảo tôi: “Cậu phải đi tuyến số 2, rồi đổi sang tuyến số 4 ở Tây Trực Môn.”',
    'Trên tàu rất chật, ai cũng đứng xem điện thoại. Lúc đến bến, loa phát thanh nói “xin chú ý dưới chân”.',
    'Tuy hơi căng thẳng, nhưng tôi không đi nhầm lần nào. Xuống tàu rồi tôi nghĩ: hoá ra xem hiểu bản đồ cũng không khó.'
  ],
  keys:[
    { w:'地铁', r:'dìtiě', vi:'tàu điện ngầm' },
    { w:'人来人往', r:'rén lái rén wǎng', vi:'người qua kẻ lại' },
    { w:'售票机', r:'shòupiàojī', vi:'máy bán vé' },
    { w:'半天', r:'bàntiān', vi:'hồi lâu', note:'nghĩa bóng: một lúc lâu, không phải nửa ngày' },
    { w:'换', r:'huàn', vi:'đổi', note:'换线 — đổi tuyến; 换车 — đổi xe' },
    { w:'挤', r:'jǐ', vi:'chật, chen chúc' },
    { w:'广播', r:'guǎngbō', vi:'loa phát thanh' },
    { w:'并不', r:'bìng bù', vi:'không hề', note:'nhấn mạnh phủ định: 并不难 — không hề khó' }
  ],
  qs:[
    { q:'Ai giúp người viết mua vé?', o:['Nhân viên nhà ga','Một bạn sinh viên','Bạn cùng phòng','Không ai'], c:1, e:'一个学生帮我买了票.' },
    { q:'Phải đổi tuyến ở đâu?', o:['Tuyến 2 ở Tây Trực Môn sang tuyến 4','Tuyến 4 sang tuyến 1','Không phải đổi','Ở bến cuối'], c:0, e:'坐二号线，然后在西直门换四号线.' },
    { q:'Kết luận của người viết?', o:['Tàu điện ngầm quá phức tạp','Xem hiểu bản đồ không hề khó','Nên đi taxi hơn','Lần sau sẽ đi bộ'], c:1, e:'原来看懂地图并不难.' }
  ],
  after:'Viết 5 câu chỉ đường cho bạn đi từ nhà bạn tới trường, dùng 先 · 然后 · 换.' }

  );
})();
