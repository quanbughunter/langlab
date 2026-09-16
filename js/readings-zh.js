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
  after:'Viết 5 câu chỉ đường cho bạn đi từ nhà bạn tới trường, dùng 先 · 然后 · 换.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Học tập', title:'我的学校', vi:'Trường của tôi',
  intro:'HSK1. Chùm từ trọng tâm: trường lớp, thầy cô, con số.',
  text:[
    '我的学校不大，可是很漂亮。学校里有很多树。',
    '我们班有二十个学生。老师姓王，是北京人。',
    '上午我们有四节课，下午有两节。',
    '我最喜欢汉语课。王老师说：“你们都很努力。”我听了很高兴。'
  ],
  tr:[
    'Trường tôi không to, nhưng rất đẹp. Trong trường có nhiều cây.',
    'Lớp tôi có hai mươi học sinh. Cô giáo họ Vương, là người Bắc Kinh.',
    'Buổi sáng chúng tôi có bốn tiết, buổi chiều có hai tiết.',
    'Tôi thích nhất tiết tiếng Trung. Cô Vương nói: “Các em đều rất chăm.” Nghe xong tôi rất vui.'
  ],
  keys:[
    { w:'漂亮', r:'piàoliang', vi:'đẹp' },
    { w:'树', r:'shù', vi:'cây' },
    { w:'班', r:'bān', vi:'lớp' },
    { w:'姓', r:'xìng', vi:'họ là' },
    { w:'节', r:'jié', vi:'lượng từ cho tiết học' },
    { w:'最', r:'zuì', vi:'nhất' },
    { w:'努力', r:'nǔlì', vi:'chăm chỉ' },
    { w:'高兴', r:'gāoxìng', vi:'vui' }
  ],
  qs:[
    { q:'Lớp có bao nhiêu học sinh?', o:['Mười','Hai mươi','Ba mươi','Bốn mươi'], c:1, e:'我们班有二十个学生.' },
    { q:'Buổi sáng có mấy tiết?', o:['Hai','Ba','Bốn','Sáu'], c:2, e:'上午我们有四节课.' },
    { q:'Người viết thích tiết nào nhất?', o:['Toán','Tiếng Trung','Thể dục','Âm nhạc'], c:1, e:'我最喜欢汉语课.' }
  ],
  after:'Giới thiệu trường bạn bằng 4 câu, dùng 有 · 最 · 节.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Mua sắm', title:'买衣服', vi:'Mua quần áo',
  intro:'HSK1. Chùm từ trọng tâm: màu sắc, cỡ, thử đồ.',
  text:[
    '星期六我和妈妈去买衣服。商店里人很多。',
    '我看见一件白色的衣服，很好看。妈妈说：“你试试吧。”',
    '衣服有点儿大。我又试了一件小的，正好。',
    '这件衣服一百二十块。妈妈买了，我很高兴。'
  ],
  tr:[
    'Thứ bảy tôi và mẹ đi mua quần áo. Trong cửa hàng rất đông người.',
    'Tôi nhìn thấy một chiếc áo màu trắng, rất đẹp. Mẹ nói: “Con thử đi.”',
    'Áo hơi rộng. Tôi thử thêm một chiếc nhỏ hơn, vừa in.',
    'Chiếc áo này một trăm hai mươi tệ. Mẹ mua cho, tôi rất vui.'
  ],
  keys:[
    { w:'白色', r:'báisè', vi:'màu trắng' },
    { w:'好看', r:'hǎokàn', vi:'đẹp mắt' },
    { w:'试', r:'shì', vi:'thử' },
    { w:'有点儿', r:'yǒudiǎnr', vi:'hơi (ý chê)' },
    { w:'又', r:'yòu', vi:'lại (việc đã xảy ra)' },
    { w:'正好', r:'zhènghǎo', vi:'vừa vặn' },
    { w:'件', r:'jiàn', vi:'lượng từ cho áo' },
    { w:'块', r:'kuài', vi:'tệ (tiền)' }
  ],
  qs:[
    { q:'Chiếc áo màu gì?', o:['Đen','Trắng','Đỏ','Xanh'], c:1, e:'一件白色的衣服.' },
    { q:'Chiếc đầu tiên bị sao?', o:['Nhỏ quá','Hơi rộng','Đắt quá','Bẩn'], c:1, e:'衣服有点儿大.' },
    { q:'Giá bao nhiêu?', o:['12 tệ','20 tệ','120 tệ','200 tệ'], c:2, e:'一百二十块.' }
  ],
  after:'Viết 4 câu mua một món đồ, dùng 试 · 有点儿 · 正好.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'我的猫', vi:'Con mèo của tôi',
  intro:'HSK1. Chùm từ trọng tâm: con vật, thói quen, tính từ đơn giản.',
  text:[
    '我有一只猫，它叫小花。今年三岁了。',
    '小花很喜欢睡觉。它每天睡十几个小时。',
    '我回家的时候，它在门口等我。',
    '晚上它坐在我旁边，看我写作业。有它在，家里不冷。'
  ],
  tr:[
    'Tôi có một con mèo, nó tên là Tiểu Hoa. Năm nay ba tuổi rồi.',
    'Tiểu Hoa rất thích ngủ. Mỗi ngày nó ngủ hơn mười tiếng.',
    'Lúc tôi về nhà, nó đợi tôi ở cửa.',
    'Buổi tối nó ngồi cạnh tôi, nhìn tôi làm bài. Có nó ở đó, nhà không lạnh.'
  ],
  keys:[
    { w:'只', r:'zhī', vi:'lượng từ cho con vật' },
    { w:'它', r:'tā', vi:'nó (con vật, đồ vật)' },
    { w:'睡觉', r:'shuìjiào', vi:'ngủ' },
    { w:'小时', r:'xiǎoshí', vi:'tiếng đồng hồ' },
    { w:'门口', r:'ménkǒu', vi:'cửa ra vào' },
    { w:'等', r:'děng', vi:'đợi' },
    { w:'旁边', r:'pángbiān', vi:'bên cạnh' },
    { w:'作业', r:'zuòyè', vi:'bài tập' }
  ],
  qs:[
    { q:'Mèo tên gì?', o:['小白','小花','小黑','小明'], c:1, e:'它叫小花.' },
    { q:'Mèo thích làm gì?', o:['Chạy nhảy','Ngủ','Ăn cá','Ra ngoài'], c:1, e:'小花很喜欢睡觉.' },
    { q:'Lúc người viết về nhà, mèo ở đâu?', o:['Trên giường','Ở cửa đợi','Ngoài sân','Dưới bàn'], c:1, e:'它在门口等我.' }
  ],
  after:'Tả một con vật bạn thích bằng 4 câu, dùng 只 · 它 · 的时候.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'起床以后', vi:'Sau khi ngủ dậy',
  intro:'HSK1. Chùm từ trọng tâm: trình tự buổi sáng, 先…再…, giờ giấc.',
  text:[
    '我每天六点起床。起床以后先洗脸，再刷牙。',
    '然后我喝一杯水，吃早饭。',
    '七点我出门。学校离我家不远，走路十分钟。',
    '到了学校，同学们已经在教室里了。我说：“早上好！”'
  ],
  tr:[
    'Mỗi ngày tôi dậy lúc sáu giờ. Dậy xong thì rửa mặt trước, rồi đánh răng.',
    'Sau đó tôi uống một cốc nước, ăn sáng.',
    'Bảy giờ tôi ra khỏi nhà. Trường cách nhà tôi không xa, đi bộ mười phút.',
    'Đến trường, các bạn đã ở trong lớp rồi. Tôi nói: “Chào buổi sáng!”'
  ],
  keys:[
    { w:'起床', r:'qǐchuáng', vi:'ngủ dậy' },
    { w:'以后', r:'yǐhòu', vi:'sau khi' },
    { w:'洗脸', r:'xǐliǎn', vi:'rửa mặt' },
    { w:'刷牙', r:'shuāyá', vi:'đánh răng' },
    { w:'先…再…', r:'xiān…zài…', vi:'trước… rồi…' },
    { w:'出门', r:'chūmén', vi:'ra khỏi nhà' },
    { w:'离', r:'lí', vi:'cách (khoảng cách)' },
    { w:'教室', r:'jiàoshì', vi:'phòng học' }
  ],
  qs:[
    { q:'Người viết dậy lúc mấy giờ?', o:['5 giờ','6 giờ','7 giờ','8 giờ'], c:1, e:'我每天六点起床.' },
    { q:'Việc nào làm trước?', o:['Đánh răng','Rửa mặt','Ăn sáng','Uống nước'], c:1, e:'先洗脸，再刷牙.' },
    { q:'Đi bộ đến trường mất bao lâu?', o:['5 phút','10 phút','20 phút','30 phút'], c:1, e:'走路十分钟.' }
  ],
  after:'Kể buổi sáng của bạn bằng 4 câu, dùng 先…再… và 以后.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Mua sắm', title:'在书店', vi:'Ở hiệu sách',
  intro:'HSK1. Chùm từ trọng tâm: sách vở, hỏi giá, 太…了.',
  text:[
    '下午我去书店买书。书店在学校旁边。',
    '我想买一本汉语词典。我问：“这本多少钱？”',
    '服务员说：“九十块。”我觉得太贵了。',
    '后来我买了一本小的，四十块。回家的时候我很高兴。'
  ],
  tr:[
    'Buổi chiều tôi đi hiệu sách mua sách. Hiệu sách ở cạnh trường.',
    'Tôi muốn mua một quyển từ điển tiếng Trung. Tôi hỏi: “Quyển này bao nhiêu tiền?”',
    'Nhân viên nói: “Chín mươi tệ.” Tôi thấy đắt quá.',
    'Sau đó tôi mua một quyển nhỏ, bốn mươi tệ. Lúc về nhà tôi rất vui.'
  ],
  keys:[
    { w:'书店', r:'shūdiàn', vi:'hiệu sách' },
    { w:'本', r:'běn', vi:'lượng từ cho sách' },
    { w:'词典', r:'cídiǎn', vi:'từ điển' },
    { w:'多少钱', r:'duōshao qián', vi:'bao nhiêu tiền' },
    { w:'服务员', r:'fúwùyuán', vi:'nhân viên' },
    { w:'太…了', r:'tài…le', vi:'quá…' },
    { w:'贵', r:'guì', vi:'đắt' },
    { w:'后来', r:'hòulái', vi:'sau đó' }
  ],
  qs:[
    { q:'Người viết muốn mua gì?', o:['Vở','Từ điển tiếng Trung','Truyện','Bút'], c:1, e:'我想买一本汉语词典.' },
    { q:'Quyển đầu giá bao nhiêu?', o:['40 tệ','60 tệ','90 tệ','190 tệ'], c:2, e:'九十块.' },
    { q:'Cuối cùng mua gì?', o:['Không mua gì','Quyển nhỏ 40 tệ','Quyển to 90 tệ','Hai quyển'], c:1, e:'我买了一本小的，四十块.' }
  ],
  after:'Viết 4 câu mua sách, dùng 多少钱 · 太…了 · 后来.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'星期六', vi:'Ngày thứ bảy',
  intro:'HSK1. Chùm từ trọng tâm: ngày trong tuần, hoạt động rảnh rỗi.',
  text:[
    '星期六我不上课。我睡到九点才起床。',
    '上午我在家看书，听音乐。',
    '中午朋友来我家，我们一起做饭。',
    '下午我们去公园走走，看见很多人在打球。'
  ],
  tr:[
    'Thứ bảy tôi không đi học. Tôi ngủ đến chín giờ mới dậy.',
    'Buổi sáng tôi ở nhà đọc sách, nghe nhạc.',
    'Buổi trưa bạn đến nhà tôi, chúng tôi cùng nấu cơm.',
    'Buổi chiều chúng tôi ra công viên đi dạo, thấy nhiều người đang chơi bóng.'
  ],
  keys:[
    { w:'上课', r:'shàngkè', vi:'đi học, lên lớp' },
    { w:'才', r:'cái', vi:'mãi mới' },
    { w:'音乐', r:'yīnyuè', vi:'âm nhạc' },
    { w:'做饭', r:'zuòfàn', vi:'nấu cơm' },
    { w:'公园', r:'gōngyuán', vi:'công viên' },
    { w:'走走', r:'zǒuzou', vi:'đi dạo một chút' },
    { w:'打球', r:'dǎqiú', vi:'chơi bóng' },
    { w:'一起', r:'yìqǐ', vi:'cùng nhau' }
  ],
  qs:[
    { q:'Thứ bảy người viết dậy lúc mấy giờ?', o:['6 giờ','7 giờ','9 giờ','11 giờ'], c:2, e:'我睡到九点才起床.' },
    { q:'Buổi trưa làm gì?', o:['Ngủ','Cùng bạn nấu cơm','Ra ngoài ăn','Đọc sách'], c:1, e:'朋友来我家，我们一起做饭.' },
    { q:'Ở công viên thấy gì?', o:['Nhiều cây','Nhiều người chơi bóng','Nhiều chó','Không có ai'], c:1, e:'看见很多人在打球.' }
  ],
  after:'Kể ngày nghỉ của bạn bằng 4 câu, dùng 才 · 一起 · 在 + động từ.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Ẩm thực', title:'我会做菜', vi:'Tôi biết nấu ăn',
  intro:'HSK1. Chùm từ trọng tâm: nấu nướng đơn giản, 会 chỉ kỹ năng.',
  text:[
    '我会做几个菜。最简单的是西红柿炒鸡蛋。',
    '先打两个鸡蛋，再切西红柿。',
    '锅热了以后，放油，炒鸡蛋，然后放西红柿。',
    '五分钟就好了。妈妈吃了说：“不错！”我很高兴。'
  ],
  tr:[
    'Tôi biết nấu vài món. Đơn giản nhất là trứng xào cà chua.',
    'Trước tiên đập hai quả trứng, rồi thái cà chua.',
    'Chảo nóng rồi thì cho dầu, xào trứng, sau đó cho cà chua vào.',
    'Năm phút là xong. Mẹ ăn xong nói: “Ngon đấy!” Tôi rất vui.'
  ],
  keys:[
    { w:'会', r:'huì', vi:'biết làm' },
    { w:'简单', r:'jiǎndān', vi:'đơn giản' },
    { w:'鸡蛋', r:'jīdàn', vi:'trứng gà' },
    { w:'切', r:'qiē', vi:'thái, cắt' },
    { w:'锅', r:'guō', vi:'cái chảo, nồi' },
    { w:'油', r:'yóu', vi:'dầu ăn' },
    { w:'炒', r:'chǎo', vi:'xào' },
    { w:'不错', r:'búcuò', vi:'khá đấy, ngon đấy' }
  ],
  qs:[
    { q:'Món đơn giản nhất là gì?', o:['Cơm rang','Trứng xào cà chua','Canh','Mì'], c:1, e:'最简单的是西红柿炒鸡蛋.' },
    { q:'Việc nào làm trước?', o:['Thái cà chua','Đập trứng','Cho dầu','Bật bếp'], c:1, e:'先打两个鸡蛋，再切西红柿.' },
    { q:'Mất bao lâu?', o:['2 phút','5 phút','10 phút','20 phút'], c:1, e:'五分钟就好了.' }
  ],
  after:'Viết 4 câu nấu một món, dùng 先…再… · 以后 · 会.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Sức khoẻ', title:'我生病了', vi:'Tôi bị ốm',
  intro:'HSK1. Chùm từ trọng tâm: ốm đau đơn giản, nghỉ ngơi.',
  text:[
    '昨天我生病了，头很疼。',
    '妈妈让我在家休息，不要去学校。',
    '我睡了一天，喝了很多水。',
    '今天我觉得好多了。明天我可以上课了。'
  ],
  tr:[
    'Hôm qua tôi bị ốm, đầu rất đau.',
    'Mẹ bảo tôi ở nhà nghỉ, đừng đến trường.',
    'Tôi ngủ cả ngày, uống rất nhiều nước.',
    'Hôm nay tôi thấy đỡ nhiều rồi. Mai tôi có thể đi học được.'
  ],
  keys:[
    { w:'生病', r:'shēngbìng', vi:'bị ốm' },
    { w:'疼', r:'téng', vi:'đau' },
    { w:'让', r:'ràng', vi:'bảo, để cho' },
    { w:'休息', r:'xiūxi', vi:'nghỉ ngơi' },
    { w:'不要', r:'búyào', vi:'đừng' },
    { w:'好多了', r:'hǎo duō le', vi:'đỡ nhiều rồi' },
    { w:'可以', r:'kěyǐ', vi:'có thể' },
    { w:'觉得', r:'juéde', vi:'cảm thấy' }
  ],
  qs:[
    { q:'Người viết bị làm sao?', o:['Đau bụng','Đau đầu','Sốt','Ho'], c:1, e:'头很疼.' },
    { q:'Mẹ bảo làm gì?', o:['Đi bệnh viện','Ở nhà nghỉ','Uống thuốc','Gọi bác sĩ'], c:1, e:'妈妈让我在家休息.' },
    { q:'Hôm nay thế nào?', o:['Nặng hơn','Đỡ nhiều rồi','Như cũ','Phải đi viện'], c:1, e:'今天我觉得好多了.' }
  ],
  after:'Viết 4 câu khi bạn bị ốm, dùng 让 · 不要 · 好多了.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'我的手机', vi:'Điện thoại của tôi',
  intro:'HSK1. Chùm từ trọng tâm: đồ dùng, công dụng, 用.',
  text:[
    '我有一个手机，是去年买的。',
    '我用手机打电话、看电影，也学汉语。',
    '手机里有很多照片，都是我和朋友的。',
    '妈妈说：“别看太久，对眼睛不好。”她说得对。'
  ],
  tr:[
    'Tôi có một chiếc điện thoại, mua từ năm ngoái.',
    'Tôi dùng điện thoại để gọi điện, xem phim, cũng học tiếng Trung.',
    'Trong máy có rất nhiều ảnh, đều là của tôi và bạn bè.',
    'Mẹ nói: “Đừng xem lâu quá, hại mắt.” Mẹ nói đúng.'
  ],
  keys:[
    { w:'手机', r:'shǒujī', vi:'điện thoại di động' },
    { w:'去年', r:'qùnián', vi:'năm ngoái' },
    { w:'用', r:'yòng', vi:'dùng' },
    { w:'照片', r:'zhàopiàn', vi:'bức ảnh' },
    { w:'别', r:'bié', vi:'đừng' },
    { w:'久', r:'jiǔ', vi:'lâu' },
    { w:'对…不好', r:'duì…bù hǎo', vi:'không tốt cho…' },
    { w:'眼睛', r:'yǎnjing', vi:'mắt' }
  ],
  qs:[
    { q:'Điện thoại mua khi nào?', o:['Tháng trước','Năm ngoái','Tuần trước','Hôm qua'], c:1, e:'是去年买的.' },
    { q:'Trong máy có nhiều gì?', o:['Trò chơi','Ảnh','Nhạc','Sách'], c:1, e:'手机里有很多照片.' },
    { q:'Mẹ nhắc gì?', o:['Đừng làm mất','Đừng xem lâu quá','Đừng dùng lúc ăn','Tắt máy khi học'], c:1, e:'别看太久，对眼睛不好.' }
  ],
  after:'Viết 4 câu về một món đồ bạn hay dùng, dùng 用 · 别 · 对…不好.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Gia đình', title:'爸爸的车', vi:'Xe của bố',
  intro:'HSK1. Chùm từ trọng tâm: phương tiện, sở hữu 的, thời gian.',
  text:[
    '我爸爸有一辆车，是白色的。',
    '每天早上他开车去公司，要半个小时。',
    '星期天他开车带我们去玩儿。',
    '我很喜欢坐爸爸的车，因为在车里可以听音乐。'
  ],
  tr:[
    'Bố tôi có một chiếc xe, màu trắng.',
    'Sáng nào bố cũng lái xe đi công ty, mất nửa tiếng.',
    'Chủ nhật bố lái xe đưa cả nhà đi chơi.',
    'Tôi rất thích ngồi xe của bố, vì trong xe có thể nghe nhạc.'
  ],
  keys:[
    { w:'辆', r:'liàng', vi:'lượng từ cho xe' },
    { w:'开车', r:'kāichē', vi:'lái xe' },
    { w:'公司', r:'gōngsī', vi:'công ty' },
    { w:'半个小时', r:'bàn ge xiǎoshí', vi:'nửa tiếng' },
    { w:'带', r:'dài', vi:'dẫn, đưa đi' },
    { w:'玩儿', r:'wánr', vi:'chơi' },
    { w:'因为', r:'yīnwèi', vi:'vì' },
    { w:'坐', r:'zuò', vi:'ngồi; đi (phương tiện)' }
  ],
  qs:[
    { q:'Xe màu gì?', o:['Đen','Trắng','Đỏ','Xanh'], c:1, e:'是白色的.' },
    { q:'Đi công ty mất bao lâu?', o:['15 phút','Nửa tiếng','1 tiếng','2 tiếng'], c:1, e:'要半个小时.' },
    { q:'Vì sao thích ngồi xe của bố?', o:['Xe mới','Trong xe nghe nhạc được','Đi nhanh','Có điều hoà'], c:1, e:'因为在车里可以听音乐.' }
  ],
  after:'Viết 4 câu về phương tiện nhà bạn, dùng 辆 · 带 · 因为.' },

{ lang:'zh', lv:'hsk1', mins:3, cat:'Đời sống', title:'去公园', vi:'Đi công viên',
  intro:'HSK1. Chùm từ trọng tâm: hoạt động ngoài trời, 在 + nơi chốn.',
  text:[
    '今天天气很好，我和妈妈去公园。',
    '公园里有很多花，也有一个小湖。',
    '几个老人在跳舞，孩子们在跑。',
    '我们坐在椅子上休息，喝水，说话。两个小时以后才回家。'
  ],
  tr:[
    'Hôm nay thời tiết đẹp, tôi và mẹ đi công viên.',
    'Trong công viên có nhiều hoa, cũng có một cái hồ nhỏ.',
    'Mấy cụ già đang nhảy múa, bọn trẻ thì đang chạy.',
    'Chúng tôi ngồi trên ghế nghỉ, uống nước, nói chuyện. Hai tiếng sau mới về nhà.'
  ],
  keys:[
    { w:'天气', r:'tiānqì', vi:'thời tiết' },
    { w:'花', r:'huā', vi:'hoa' },
    { w:'湖', r:'hú', vi:'hồ' },
    { w:'老人', r:'lǎorén', vi:'người già' },
    { w:'跳舞', r:'tiàowǔ', vi:'nhảy múa' },
    { w:'跑', r:'pǎo', vi:'chạy' },
    { w:'椅子', r:'yǐzi', vi:'cái ghế' },
    { w:'说话', r:'shuōhuà', vi:'nói chuyện' }
  ],
  qs:[
    { q:'Trong công viên có gì?', o:['Nhiều cây và núi','Nhiều hoa và một hồ nhỏ','Sân bóng','Cửa hàng'], c:1, e:'有很多花，也有一个小湖.' },
    { q:'Các cụ già đang làm gì?', o:['Đi bộ','Nhảy múa','Đánh cờ','Nghỉ'], c:1, e:'几个老人在跳舞.' },
    { q:'Ở lại bao lâu?', o:['Nửa tiếng','1 tiếng','2 tiếng','Cả ngày'], c:2, e:'两个小时以后才回家.' }
  ],
  after:'Tả một lần đi công viên bằng 4 câu, dùng 在 + nơi chốn và 以后.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'搬家', vi:'Chuyển nhà',
  intro:'HSK2. Chùm từ trọng tâm: dọn nhà, giúp đỡ, 把 câu đơn giản.',
  text:[
    '上个月我搬家了。新房子比旧的大一点儿。',
    '两个朋友来帮忙。我们把桌子、椅子和书都搬上去。',
    '东西太多了，我们搬了一个下午才搬完。',
    '晚上我请他们吃饭。虽然很累，但是大家都很开心。'
  ],
  tr:[
    'Tháng trước tôi chuyển nhà. Nhà mới rộng hơn nhà cũ một chút.',
    'Hai người bạn đến giúp. Chúng tôi khiêng bàn, ghế và sách lên hết.',
    'Đồ nhiều quá, chúng tôi khiêng cả buổi chiều mới xong.',
    'Buổi tối tôi mời họ ăn cơm. Tuy rất mệt nhưng ai cũng vui.'
  ],
  keys:[
    { w:'搬家', r:'bānjiā', vi:'chuyển nhà' },
    { w:'旧', r:'jiù', vi:'cũ' },
    { w:'帮忙', r:'bāngmáng', vi:'giúp đỡ' },
    { w:'把', r:'bǎ', vi:'đem (đưa tân ngữ lên trước)', note:'把桌子搬上去 — khiêng cái bàn lên' },
    { w:'搬', r:'bān', vi:'khiêng, dọn' },
    { w:'完', r:'wán', vi:'xong', note:'动词 + 完: 搬完, 吃完' },
    { w:'请', r:'qǐng', vi:'mời' },
    { w:'开心', r:'kāixīn', vi:'vui' }
  ],
  qs:[
    { q:'Nhà mới thế nào?', o:['Nhỏ hơn','Rộng hơn một chút','Bằng nhau','Xa hơn'], c:1, e:'新房子比旧的大一点儿.' },
    { q:'Ai đến giúp?', o:['Gia đình','Hai người bạn','Hàng xóm','Nhân viên chuyển nhà'], c:1, e:'两个朋友来帮忙.' },
    { q:'Mất bao lâu?', o:['Một tiếng','Cả buổi chiều','Cả ngày','Hai ngày'], c:1, e:'我们搬了一个下午才搬完.' }
  ],
  after:'Kể một lần chuyển nhà bằng 5 câu, dùng 把 và 动词 + 完.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Học tập', title:'借书', vi:'Mượn sách',
  intro:'HSK2. Chùm từ trọng tâm: thư viện, mượn trả, thời hạn.',
  text:[
    '我常常去学校图书馆借书。用学生卡就可以借。',
    '一次可以借五本，时间是两个星期。',
    '上次我忘了还，晚了三天，交了一点儿钱。',
    '现在我在手机上记着还书的日子，再也没晚过。'
  ],
  tr:[
    'Tôi hay đến thư viện trường mượn sách. Dùng thẻ sinh viên là mượn được.',
    'Một lần mượn được năm quyển, thời hạn là hai tuần.',
    'Lần trước tôi quên trả, muộn ba ngày, phải nộp chút tiền.',
    'Bây giờ tôi ghi ngày trả sách trong điện thoại, không bao giờ muộn nữa.'
  ],
  keys:[
    { w:'借', r:'jiè', vi:'mượn' },
    { w:'学生卡', r:'xuéshēngkǎ', vi:'thẻ sinh viên' },
    { w:'一次', r:'yí cì', vi:'một lần' },
    { w:'还', r:'huán', vi:'trả lại' },
    { w:'忘', r:'wàng', vi:'quên' },
    { w:'晚', r:'wǎn', vi:'muộn' },
    { w:'交', r:'jiāo', vi:'nộp' },
    { w:'再也没…过', r:'zài yě méi…guo', vi:'không bao giờ… nữa' }
  ],
  qs:[
    { q:'Một lần mượn được mấy quyển?', o:['Ba','Năm','Bảy','Mười'], c:1, e:'一次可以借五本.' },
    { q:'Thời hạn bao lâu?', o:['Một tuần','Hai tuần','Một tháng','Ba ngày'], c:1, e:'时间是两个星期.' },
    { q:'Lần trước xảy ra chuyện gì?', o:['Mất sách','Trả muộn ba ngày, phải nộp tiền','Mượn quá số','Quên thẻ'], c:1, e:'上次我忘了还，晚了三天，交了一点儿钱.' }
  ],
  after:'Viết 5 câu về thư viện trường bạn, dùng 可以 · 忘 · 再也没…过.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Công việc', title:'请假', vi:'Xin nghỉ',
  intro:'HSK2. Chùm từ trọng tâm: xin phép, lý do, lời hứa bù.',
  text:[
    '昨天早上我肚子疼，不能上班。我给经理打了电话。',
    '我说：“对不起，我今天想请一天假。”经理问我怎么了。',
    '我告诉他我生病了，下午要去医院。他说：“好好休息吧。”',
    '今天我早点儿到公司，把昨天的工作做完了。'
  ],
  tr:[
    'Sáng hôm qua tôi đau bụng, không đi làm được. Tôi gọi điện cho quản lý.',
    'Tôi nói: “Xin lỗi anh, hôm nay em muốn xin nghỉ một ngày.” Quản lý hỏi tôi bị sao.',
    'Tôi bảo anh ấy là tôi bị ốm, chiều phải đi bệnh viện. Anh nói: “Nghỉ cho khoẻ nhé.”',
    'Hôm nay tôi đến công ty sớm hơn, làm nốt phần việc hôm qua.'
  ],
  keys:[
    { w:'肚子', r:'dùzi', vi:'bụng' },
    { w:'上班', r:'shàngbān', vi:'đi làm' },
    { w:'经理', r:'jīnglǐ', vi:'quản lý' },
    { w:'请假', r:'qǐngjià', vi:'xin nghỉ phép' },
    { w:'怎么了', r:'zěnme le', vi:'bị làm sao' },
    { w:'告诉', r:'gàosu', vi:'nói cho biết' },
    { w:'好好', r:'hǎohāo', vi:'cho tử tế, cho đàng hoàng' },
    { w:'早点儿', r:'zǎo diǎnr', vi:'sớm hơn một chút' }
  ],
  qs:[
    { q:'Người viết bị gì?', o:['Đau đầu','Đau bụng','Sốt','Cảm'], c:1, e:'我肚子疼.' },
    { q:'Xin nghỉ mấy ngày?', o:['Nửa ngày','Một ngày','Hai ngày','Một tuần'], c:1, e:'我今天想请一天假.' },
    { q:'Hôm nay người viết làm gì?', o:['Nghỉ tiếp','Đến sớm hơn, làm nốt việc','Xin nghỉ nữa','Đi bệnh viện'], c:1, e:'我早点儿到公司，把昨天的工作做完了.' }
  ],
  after:'Viết đoạn hội thoại xin nghỉ 6 câu, dùng 请假 · 怎么了 · 把.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Thể thao', title:'学游泳', vi:'Học bơi',
  intro:'HSK2. Chùm từ trọng tâm: học kỹ năng mới, sợ hãi, tiến bộ.',
  text:[
    '去年夏天我开始学游泳。第一次下水的时候我很怕。',
    '老师说：“别紧张，先学呼吸。”我试了很多次。',
    '一个星期以后，我可以游十米了。两个月以后，我能游一百米。',
    '现在游泳是我最喜欢的运动。累的时候游一会儿，心情就好了。'
  ],
  tr:[
    'Mùa hè năm ngoái tôi bắt đầu học bơi. Lần đầu xuống nước tôi rất sợ.',
    'Thầy nói: “Đừng căng thẳng, học thở trước đã.” Tôi thử rất nhiều lần.',
    'Một tuần sau, tôi bơi được mười mét. Hai tháng sau, tôi bơi được một trăm mét.',
    'Bây giờ bơi là môn tôi thích nhất. Lúc mệt bơi một lát là tâm trạng tốt hẳn.'
  ],
  keys:[
    { w:'游泳', r:'yóuyǒng', vi:'bơi' },
    { w:'下水', r:'xiàshuǐ', vi:'xuống nước' },
    { w:'怕', r:'pà', vi:'sợ' },
    { w:'紧张', r:'jǐnzhāng', vi:'căng thẳng' },
    { w:'呼吸', r:'hūxī', vi:'hít thở' },
    { w:'米', r:'mǐ', vi:'mét' },
    { w:'运动', r:'yùndòng', vi:'thể thao' },
    { w:'心情', r:'xīnqíng', vi:'tâm trạng' }
  ],
  qs:[
    { q:'Lần đầu xuống nước cảm thấy thế nào?', o:['Vui','Rất sợ','Bình thường','Lạnh'], c:1, e:'第一次下水的时候我很怕.' },
    { q:'Thầy bảo học gì trước?', o:['Đạp chân','Hít thở','Quạt tay','Nổi'], c:1, e:'先学呼吸.' },
    { q:'Sau hai tháng bơi được bao xa?', o:['10 mét','50 mét','100 mét','500 mét'], c:2, e:'两个月以后，我能游一百米.' }
  ],
  after:'Kể một kỹ năng bạn học được bằng 5 câu, dùng 以后 · 可以 · 能.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'丢了钱包', vi:'Mất ví',
  intro:'HSK2. Chùm từ trọng tâm: mất đồ, tìm lại, cảm ơn.',
  text:[
    '上个星期我在公交车上把钱包丢了。里面有学生卡和一些钱。',
    '我又着急又难过，一个晚上没睡好。',
    '第二天早上，学校办公室给我打电话，说有人送来了我的钱包。',
    '钱包回来了，东西一样也没少。我想找那个人说谢谢，可是他没留名字。'
  ],
  tr:[
    'Tuần trước tôi làm mất ví trên xe buýt. Trong ví có thẻ sinh viên và ít tiền.',
    'Tôi vừa lo vừa buồn, cả đêm ngủ không ngon.',
    'Sáng hôm sau, văn phòng trường gọi điện, nói có người mang ví của tôi đến.',
    'Ví về rồi, đồ đạc không thiếu một thứ. Tôi muốn tìm người đó để cảm ơn, nhưng anh ấy không để lại tên.'
  ],
  keys:[
    { w:'丢', r:'diū', vi:'đánh mất' },
    { w:'钱包', r:'qiánbāo', vi:'cái ví' },
    { w:'又…又…', r:'yòu…yòu…', vi:'vừa… vừa…' },
    { w:'难过', r:'nánguò', vi:'buồn' },
    { w:'办公室', r:'bàngōngshì', vi:'văn phòng' },
    { w:'送', r:'sòng', vi:'mang đến, đưa' },
    { w:'少', r:'shǎo', vi:'thiếu, ít' },
    { w:'留', r:'liú', vi:'để lại' }
  ],
  qs:[
    { q:'Mất ví ở đâu?', o:['Ở trường','Trên xe buýt','Ở chợ','Ở nhà'], c:1, e:'在公交车上把钱包丢了.' },
    { q:'Ai báo tin?', o:['Cảnh sát','Văn phòng trường','Tài xế','Bạn cùng lớp'], c:1, e:'学校办公室给我打电话.' },
    { q:'Đồ trong ví thế nào?', o:['Mất tiền','Không thiếu thứ gì','Mất thẻ','Mất hết'], c:1, e:'东西一样也没少.' }
  ],
  after:'Kể một lần mất đồ bằng 5 câu, dùng 把 · 又…又… · 一样也没…' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'生日礼物', vi:'Quà sinh nhật',
  intro:'HSK2. Chùm từ trọng tâm: chọn quà, băn khoăn, 觉得.',
  text:[
    '下个星期是我妈妈的生日。我想送她一个礼物，可是不知道送什么好。',
    '我问爸爸。爸爸说：“你妈妈最近常说腰疼。”',
    '于是我买了一个软软的靠枕，颜色是她喜欢的绿色。',
    '生日那天她打开礼物，笑着说：“你比爸爸细心。”爸爸在旁边不说话。'
  ],
  tr:[
    'Tuần sau là sinh nhật mẹ tôi. Tôi muốn tặng mẹ một món quà, nhưng không biết tặng gì cho phải.',
    'Tôi hỏi bố. Bố nói: “Dạo này mẹ con hay kêu đau lưng.”',
    'Thế là tôi mua một cái gối tựa thật mềm, màu xanh lá mà mẹ thích.',
    'Hôm sinh nhật mẹ mở quà, cười nói: “Con để ý hơn bố.” Bố đứng cạnh không nói gì.'
  ],
  keys:[
    { w:'送', r:'sòng', vi:'tặng' },
    { w:'礼物', r:'lǐwù', vi:'món quà' },
    { w:'最近', r:'zuìjìn', vi:'dạo này' },
    { w:'腰', r:'yāo', vi:'lưng, eo' },
    { w:'于是', r:'yúshì', vi:'thế là' },
    { w:'软', r:'ruǎn', vi:'mềm' },
    { w:'颜色', r:'yánsè', vi:'màu sắc' },
    { w:'细心', r:'xìxīn', vi:'chu đáo, để ý' }
  ],
  qs:[
    { q:'Bố gợi ý điều gì?', o:['Mẹ thích hoa','Mẹ hay kêu đau lưng','Mẹ cần áo mới','Mẹ thích sách'], c:1, e:'你妈妈最近常说腰疼.' },
    { q:'Người viết mua gì?', o:['Khăn','Gối tựa mềm','Thuốc','Áo'], c:1, e:'我买了一个软软的靠枕.' },
    { q:'Mẹ nói gì?', o:['Đắt quá','Con để ý hơn bố','Mẹ không cần','Màu không hợp'], c:1, e:'你比爸爸细心.' }
  ],
  after:'Viết 5 câu chọn quà cho người thân, dùng 于是 · 觉得 · 比.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Giải trí', title:'看电影', vi:'Đi xem phim',
  intro:'HSK2. Chùm từ trọng tâm: rạp phim, mua vé, nhận xét.',
  text:[
    '昨天晚上我和同屋去看电影。票是在手机上买的，一张四十五块。',
    '电影七点开始，我们六点半就到了，还买了一桶爆米花。',
    '这是一部中国电影，说的是一家人的故事。有的地方我听不懂，可是能看懂。',
    '出来的时候同屋问我：“怎么样？”我说：“比我想的好。”'
  ],
  tr:[
    'Tối qua tôi và bạn cùng phòng đi xem phim. Vé mua trên điện thoại, một vé bốn mươi lăm tệ.',
    'Phim bảy giờ bắt đầu, sáu giờ rưỡi chúng tôi đã đến, còn mua một thùng bỏng ngô.',
    'Đây là một bộ phim Trung Quốc, kể chuyện một gia đình. Có chỗ tôi nghe không hiểu, nhưng xem thì hiểu được.',
    'Lúc đi ra bạn hỏi tôi: “Thế nào?” Tôi nói: “Hay hơn mình tưởng.”'
  ],
  keys:[
    { w:'同屋', r:'tóngwū', vi:'bạn cùng phòng' },
    { w:'票', r:'piào', vi:'vé' },
    { w:'张', r:'zhāng', vi:'lượng từ cho vé, giấy' },
    { w:'部', r:'bù', vi:'lượng từ cho phim' },
    { w:'故事', r:'gùshi', vi:'câu chuyện' },
    { w:'听不懂', r:'tīng bu dǒng', vi:'nghe không hiểu' },
    { w:'看懂', r:'kàndǒng', vi:'xem mà hiểu' },
    { w:'比', r:'bǐ', vi:'hơn (so sánh)' }
  ],
  qs:[
    { q:'Vé bao nhiêu một chiếc?', o:['25 tệ','35 tệ','45 tệ','55 tệ'], c:2, e:'一张四十五块.' },
    { q:'Đến rạp lúc mấy giờ?', o:['6 giờ','6 giờ rưỡi','7 giờ','7 giờ rưỡi'], c:1, e:'我们六点半就到了.' },
    { q:'Nhận xét của người viết?', o:['Chán','Hay hơn mình tưởng','Khó hiểu quá','Bình thường'], c:1, e:'比我想的好.' }
  ],
  after:'Viết 5 câu nhận xét một bộ phim, dùng 部 · 听不懂 · 比.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'打扫房间', vi:'Dọn phòng',
  intro:'HSK2. Chùm từ trọng tâm: việc nhà, thứ tự, kết quả.',
  text:[
    '房间太乱了，今天我决定好好打扫一下。',
    '我先把地上的衣服收起来，再擦桌子和窗户。',
    '床下面有很多灰，我用吸尘器打扫了两次。',
    '两个小时以后，房间干净多了。坐在这样的房间里，学习都比以前快。'
  ],
  tr:[
    'Phòng bừa quá, hôm nay tôi quyết định dọn cho tử tế.',
    'Tôi cất quần áo dưới sàn lên trước, rồi lau bàn và cửa sổ.',
    'Dưới gầm giường nhiều bụi lắm, tôi hút bụi hai lượt.',
    'Hai tiếng sau, phòng sạch hơn hẳn. Ngồi trong căn phòng như thế, học cũng nhanh hơn trước.'
  ],
  keys:[
    { w:'乱', r:'luàn', vi:'bừa bộn' },
    { w:'决定', r:'juédìng', vi:'quyết định' },
    { w:'打扫', r:'dǎsǎo', vi:'dọn dẹp' },
    { w:'收起来', r:'shōu qǐlai', vi:'cất đi' },
    { w:'擦', r:'cā', vi:'lau' },
    { w:'灰', r:'huī', vi:'bụi' },
    { w:'吸尘器', r:'xīchénqì', vi:'máy hút bụi' },
    { w:'干净', r:'gānjìng', vi:'sạch' }
  ],
  qs:[
    { q:'Việc đầu tiên là gì?', o:['Lau bàn','Cất quần áo dưới sàn','Hút bụi','Lau cửa sổ'], c:1, e:'我先把地上的衣服收起来.' },
    { q:'Dưới gầm giường có gì?', o:['Sách','Nhiều bụi','Giày','Không có gì'], c:1, e:'床下面有很多灰.' },
    { q:'Mất bao lâu?', o:['Nửa tiếng','1 tiếng','2 tiếng','Cả ngày'], c:2, e:'两个小时以后，房间干净多了.' }
  ],
  after:'Kể một lần dọn phòng bằng 5 câu, dùng 把 · 先…再… · 多了.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Dịch vụ', title:'寄快递', vi:'Gửi bưu kiện',
  intro:'HSK2. Chùm từ trọng tâm: gửi hàng, cân nặng, thời gian đến.',
  text:[
    '我要给家里寄一些东西。我把茶叶和糖放进一个箱子里。',
    '快递员来了，他称了一下，说：“三公斤，二十八块。”',
    '我问：“几天能到？”他说：“三四天吧。”',
    '第四天妈妈发信息说收到了。她说茶叶很香，问我什么时候回家。'
  ],
  tr:[
    'Tôi muốn gửi ít đồ về nhà. Tôi cho trà và đường vào một cái hộp.',
    'Nhân viên chuyển phát đến, anh cân thử rồi nói: “Ba ký, hai mươi tám tệ.”',
    'Tôi hỏi: “Mấy ngày thì đến?” Anh nói: “Ba bốn ngày thôi.”',
    'Ngày thứ tư mẹ nhắn tin nói đã nhận được. Mẹ bảo trà thơm lắm, rồi hỏi bao giờ tôi về.'
  ],
  keys:[
    { w:'寄', r:'jì', vi:'gửi' },
    { w:'快递', r:'kuàidì', vi:'chuyển phát nhanh' },
    { w:'箱子', r:'xiāngzi', vi:'cái hộp, thùng' },
    { w:'称', r:'chēng', vi:'cân' },
    { w:'公斤', r:'gōngjīn', vi:'kilôgam' },
    { w:'到', r:'dào', vi:'đến nơi' },
    { w:'发信息', r:'fā xìnxī', vi:'nhắn tin' },
    { w:'收到', r:'shōudào', vi:'nhận được' }
  ],
  qs:[
    { q:'Trong hộp có gì?', o:['Quần áo','Trà và đường','Sách','Thuốc'], c:1, e:'我把茶叶和糖放进一个箱子里.' },
    { q:'Cước bao nhiêu?', o:['18 tệ','28 tệ','38 tệ','80 tệ'], c:1, e:'三公斤，二十八块.' },
    { q:'Mấy ngày thì đến?', o:['Một ngày','Hai ngày','Ngày thứ tư','Một tuần'], c:2, e:'第四天妈妈发信息说收到了.' }
  ],
  after:'Viết 5 câu gửi đồ về nhà, dùng 把 · 几天能到 · 收到.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Ẩm thực', title:'第一次做饭', vi:'Lần đầu nấu cơm',
  intro:'HSK2. Chùm từ trọng tâm: thất bại nhỏ, rút kinh nghiệm.',
  text:[
    '刚来中国的时候，我第一次自己做饭。我想做面条。',
    '水开了以后我放面，可是忘了看时间。面煮得太久，都烂了。',
    '我又放了一点儿盐，味道还是不好。最后我全吃完了，因为不想浪费。',
    '现在我做面条只要三分钟。做得多了，就会了。'
  ],
  tr:[
    'Vừa sang Trung Quốc, lần đầu tôi tự nấu cơm. Tôi định nấu mì.',
    'Nước sôi thì tôi cho mì vào, nhưng quên xem giờ. Mì luộc lâu quá, nát bét.',
    'Tôi cho thêm chút muối, vị vẫn không ngon. Cuối cùng tôi ăn hết, vì không muốn phí.',
    'Bây giờ tôi nấu mì chỉ mất ba phút. Làm nhiều thì thành quen.'
  ],
  keys:[
    { w:'自己', r:'zìjǐ', vi:'tự mình' },
    { w:'面条', r:'miàntiáo', vi:'mì sợi' },
    { w:'水开', r:'shuǐ kāi', vi:'nước sôi' },
    { w:'煮', r:'zhǔ', vi:'luộc, nấu' },
    { w:'烂', r:'làn', vi:'nát' },
    { w:'味道', r:'wèidao', vi:'mùi vị' },
    { w:'浪费', r:'làngfèi', vi:'lãng phí' },
    { w:'只要', r:'zhǐyào', vi:'chỉ cần, chỉ mất' }
  ],
  qs:[
    { q:'Mì bị sao?', o:['Chưa chín','Luộc lâu quá, nát','Cháy','Mặn quá'], c:1, e:'面煮得太久，都烂了.' },
    { q:'Vì sao vẫn ăn hết?', o:['Vì ngon','Vì không muốn lãng phí','Vì đói','Vì bạn bảo ăn'], c:1, e:'因为不想浪费.' },
    { q:'Bây giờ nấu mì mất bao lâu?', o:['3 phút','10 phút','20 phút','Nửa tiếng'], c:0, e:'现在我做面条只要三分钟.' }
  ],
  after:'Kể một lần nấu hỏng bằng 5 câu, dùng 动词 + 得 và 因为.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Giao thông', title:'问路', vi:'Hỏi đường',
  intro:'HSK2. Chùm từ trọng tâm: chỉ đường, phương hướng, khoảng cách.',
  text:[
    '我要去火车站，可是不认识路。我问路边的一个大哥。',
    '他说：“一直走，到第二个红绿灯往左拐。”',
    '我又问：“远吗？”他说：“不远，走十分钟就到。”',
    '我照他说的走，果然看见了火车站。中国人很热情，问路一点儿也不难。'
  ],
  tr:[
    'Tôi muốn đến ga tàu, nhưng không biết đường. Tôi hỏi một anh bên đường.',
    'Anh nói: “Cứ đi thẳng, đến đèn giao thông thứ hai thì rẽ trái.”',
    'Tôi hỏi thêm: “Có xa không ạ?” Anh nói: “Không xa, đi mười phút là tới.”',
    'Tôi đi theo lời anh, quả nhiên thấy ga tàu. Người Trung Quốc rất nhiệt tình, hỏi đường chẳng khó chút nào.'
  ],
  keys:[
    { w:'认识路', r:'rènshi lù', vi:'biết đường' },
    { w:'一直', r:'yìzhí', vi:'thẳng; liên tục' },
    { w:'红绿灯', r:'hónglǜdēng', vi:'đèn giao thông' },
    { w:'往左拐', r:'wǎng zuǒ guǎi', vi:'rẽ trái' },
    { w:'远', r:'yuǎn', vi:'xa' },
    { w:'照…说的', r:'zhào…shuō de', vi:'theo lời… nói' },
    { w:'果然', r:'guǒrán', vi:'quả nhiên' },
    { w:'热情', r:'rèqíng', vi:'nhiệt tình' }
  ],
  qs:[
    { q:'Phải rẽ ở đâu?', o:['Đèn thứ nhất','Đèn thứ hai, rẽ trái','Ngã tư đầu, rẽ phải','Cuối đường'], c:1, e:'到第二个红绿灯往左拐.' },
    { q:'Đi bộ mất bao lâu?', o:['5 phút','10 phút','20 phút','Nửa tiếng'], c:1, e:'走十分钟就到.' },
    { q:'Nhận xét cuối?', o:['Hỏi đường rất khó','Người Trung Quốc nhiệt tình','Nên đi taxi','Bản đồ tiện hơn'], c:1, e:'中国人很热情，问路一点儿也不难.' }
  ],
  after:'Viết đoạn hỏi đường 6 câu, dùng 一直走 · 往左/右拐 · 就到.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'养花', vi:'Trồng hoa',
  intro:'HSK2. Chùm từ trọng tâm: chăm cây, kiên nhẫn, thay đổi nhỏ.',
  text:[
    '去年朋友送我一盆花。我以前从来没养过花。',
    '开始的时候我天天浇水，结果叶子都黄了。',
    '朋友说：“水太多了，三四天浇一次就行。”',
    '我照他说的做，花慢慢好了起来。今年春天，它开了五朵白花。'
  ],
  tr:[
    'Năm ngoái bạn tặng tôi một chậu hoa. Trước đây tôi chưa từng trồng hoa bao giờ.',
    'Lúc đầu ngày nào tôi cũng tưới, kết quả là lá vàng hết.',
    'Bạn nói: “Nhiều nước quá rồi, ba bốn ngày tưới một lần là được.”',
    'Tôi làm theo lời bạn, cây dần khoẻ lại. Mùa xuân năm nay, nó nở năm bông hoa trắng.'
  ],
  keys:[
    { w:'盆', r:'pén', vi:'chậu (lượng từ)' },
    { w:'养', r:'yǎng', vi:'nuôi, trồng' },
    { w:'从来没…过', r:'cónglái méi…guo', vi:'chưa từng… bao giờ' },
    { w:'浇水', r:'jiāo shuǐ', vi:'tưới nước' },
    { w:'结果', r:'jiéguǒ', vi:'kết quả là' },
    { w:'黄', r:'huáng', vi:'vàng (úa)' },
    { w:'起来', r:'qǐlai', vi:'bắt đầu…', note:'好起来 — khá dần lên' },
    { w:'朵', r:'duǒ', vi:'lượng từ cho bông hoa' }
  ],
  qs:[
    { q:'Sai lầm ban đầu là gì?', o:['Để chỗ tối','Tưới nước quá nhiều','Quên tưới','Chậu quá nhỏ'], c:1, e:'我天天浇水，结果叶子都黄了.' },
    { q:'Bạn khuyên tưới thế nào?', o:['Mỗi ngày','Ba bốn ngày một lần','Một tuần một lần','Không cần tưới'], c:1, e:'三四天浇一次就行.' },
    { q:'Mùa xuân năm nay nở mấy bông?', o:['Ba','Năm','Bảy','Mười'], c:1, e:'它开了五朵白花.' }
  ],
  after:'Viết 5 câu về một cây bạn trồng, dùng 从来没…过 và 起来.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Học tập', title:'考试以前', vi:'Trước kỳ thi',
  intro:'HSK2. Chùm từ trọng tâm: ôn thi, lo lắng, lời khuyên.',
  text:[
    '下星期我们有汉语考试。这几天大家都很忙。',
    '我每天复习两个小时，把生词都写在本子上。',
    '同屋说：“别看太晚，睡不好考试的时候更累。”',
    '考试那天我有点儿紧张，可是题不太难。出来以后我觉得可以。'
  ],
  tr:[
    'Tuần sau chúng tôi có bài thi tiếng Trung. Mấy hôm nay ai cũng bận.',
    'Mỗi ngày tôi ôn hai tiếng, chép hết từ mới vào vở.',
    'Bạn cùng phòng nói: “Đừng học khuya quá, ngủ không ngon thì lúc thi càng mệt.”',
    'Hôm thi tôi hơi căng thẳng, nhưng đề không khó lắm. Ra khỏi phòng tôi thấy cũng ổn.'
  ],
  keys:[
    { w:'考试', r:'kǎoshì', vi:'kỳ thi' },
    { w:'复习', r:'fùxí', vi:'ôn tập' },
    { w:'生词', r:'shēngcí', vi:'từ mới' },
    { w:'本子', r:'běnzi', vi:'quyển vở' },
    { w:'太晚', r:'tài wǎn', vi:'quá khuya' },
    { w:'更', r:'gèng', vi:'càng' },
    { w:'题', r:'tí', vi:'đề, câu hỏi' },
    { w:'紧张', r:'jǐnzhāng', vi:'căng thẳng' }
  ],
  qs:[
    { q:'Mỗi ngày ôn bao lâu?', o:['1 tiếng','2 tiếng','3 tiếng','Cả ngày'], c:1, e:'我每天复习两个小时.' },
    { q:'Bạn cùng phòng khuyên gì?', o:['Ôn thêm','Đừng học khuya quá','Nghỉ hẳn','Chép nhiều hơn'], c:1, e:'别看太晚，睡不好考试的时候更累.' },
    { q:'Đề thi thế nào?', o:['Rất khó','Không khó lắm','Không làm được','Quá dài'], c:1, e:'可是题不太难.' }
  ],
  after:'Viết 5 câu về cách bạn ôn thi, dùng 把 · 别 · 更.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Đời sống', title:'早市', vi:'Chợ sớm',
  intro:'HSK3. Chùm từ trọng tâm: chợ buổi sáng, mặc cả, không khí đời thường.',
  text:[
    '我住的小区旁边有一个早市，每天六点开始，九点就收摊了。',
    '卖菜的阿姨总是笑着说：“今天的青菜刚摘的，新鲜得很。”',
    '这里的东西比超市便宜，而且可以商量价钱。买得多了，阿姨还会多送两根葱。',
    '虽然要早起，但是我喜欢这种热闹。一个城市最真实的样子，往往在早市上。'
  ],
  tr:[
    'Cạnh khu nhà tôi ở có một chợ sớm, sáu giờ sáng bắt đầu, chín giờ là dọn hàng.',
    'Cô bán rau lúc nào cũng cười nói: “Rau hôm nay vừa hái đấy, tươi lắm.”',
    'Đồ ở đây rẻ hơn siêu thị, mà lại mặc cả được. Mua nhiều thì cô còn cho thêm mấy cọng hành.',
    'Tuy phải dậy sớm, nhưng tôi thích cái náo nhiệt ấy. Bộ mặt thật nhất của một thành phố thường nằm ở chợ sớm.'
  ],
  keys:[
    { w:'小区', r:'xiǎoqū', vi:'khu dân cư' },
    { w:'收摊', r:'shōutān', vi:'dọn hàng' },
    { w:'摘', r:'zhāi', vi:'hái' },
    { w:'新鲜', r:'xīnxiān', vi:'tươi' },
    { w:'商量', r:'shāngliang', vi:'bàn bạc, mặc cả' },
    { w:'价钱', r:'jiàqian', vi:'giá cả' },
    { w:'热闹', r:'rènao', vi:'náo nhiệt' },
    { w:'真实', r:'zhēnshí', vi:'chân thực' }
  ],
  qs:[
    { q:'Chợ sớm mở mấy giờ?', o:['5–8 giờ','6–9 giờ','7–10 giờ','Cả ngày'], c:1, e:'每天六点开始，九点就收摊了.' },
    { q:'Ưu điểm so với siêu thị?', o:['Sạch hơn','Rẻ hơn và mặc cả được','Mở muộn hơn','Nhận thẻ'], c:1, e:'比超市便宜，而且可以商量价钱.' },
    { q:'Người viết thích điều gì?', o:['Được dậy sớm','Cái náo nhiệt rất thật','Gặp hàng xóm','Không khí trong lành'], c:1, e:'我喜欢这种热闹.' }
  ],
  after:'Tả một khu chợ ở Việt Nam bằng 6 câu, dùng 而且 · 虽然…但是… · 往往.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Mua sắm', title:'网上买东西', vi:'Mua hàng trên mạng',
  intro:'HSK3. Chùm từ trọng tâm: mua online, đánh giá, đổi trả.',
  text:[
    '现在很多人习惯在网上买东西，我也是。手机点几下，第二天就送到门口。',
    '不过网上的照片和实物有时候不一样。上次我买了一双鞋，收到以后发现小了一号。',
    '我申请了退换，客服很快就同意了，还说运费他们出。',
    '方便是真方便，可是我也学会了一件事：买之前一定要看别人的评价。'
  ],
  tr:[
    'Bây giờ nhiều người quen mua đồ trên mạng, tôi cũng vậy. Bấm mấy cái trên điện thoại, hôm sau là hàng đến tận cửa.',
    'Có điều ảnh trên mạng và hàng thật đôi khi không giống nhau. Lần trước tôi mua một đôi giày, nhận rồi mới thấy nhỏ mất một cỡ.',
    'Tôi xin đổi trả, chăm sóc khách hàng đồng ý rất nhanh, còn nói phí vận chuyển bên họ chịu.',
    'Tiện thì đúng là tiện, nhưng tôi cũng học được một điều: trước khi mua nhất định phải xem đánh giá của người khác.'
  ],
  keys:[
    { w:'习惯', r:'xíguàn', vi:'quen, thói quen' },
    { w:'实物', r:'shíwù', vi:'hàng thật' },
    { w:'一号', r:'yí hào', vi:'một cỡ (số)' },
    { w:'申请', r:'shēnqǐng', vi:'xin, đăng ký' },
    { w:'退换', r:'tuìhuàn', vi:'đổi trả' },
    { w:'客服', r:'kèfú', vi:'chăm sóc khách hàng' },
    { w:'运费', r:'yùnfèi', vi:'phí vận chuyển' },
    { w:'评价', r:'píngjià', vi:'đánh giá' }
  ],
  qs:[
    { q:'Vấn đề với đôi giày là gì?', o:['Màu sai','Nhỏ một cỡ','Bị rách','Đến muộn'], c:1, e:'发现小了一号.' },
    { q:'Ai chịu phí vận chuyển đổi trả?', o:['Người mua','Bên bán','Chia đôi','Không ai'], c:1, e:'还说运费他们出.' },
    { q:'Bài học rút ra?', o:['Không mua online nữa','Trước khi mua phải xem đánh giá','Chỉ mua hàng đắt','Mua ở cửa hàng tốt hơn'], c:1, e:'买之前一定要看别人的评价.' }
  ],
  after:'Viết 6 câu về một lần mua hàng online, dùng 不过 · 一定要 · 之前.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Sức khoẻ', title:'每天走一万步', vi:'Mỗi ngày mười nghìn bước',
  intro:'HSK3. Chùm từ trọng tâm: vận động, thói quen mới, kiên trì.',
  text:[
    '医生说我坐得太久，让我每天至少走一万步。刚开始我觉得不可能。',
    '后来我想了个办法：把一站地的路改成走路，回家的时候提前一站下车。',
    '第一个星期腿很酸，第二个星期就习惯了。现在不走反而不舒服。',
    '三个月过去，我瘦了四公斤，睡觉也好多了。原来最难的只是开始。'
  ],
  tr:[
    'Bác sĩ nói tôi ngồi lâu quá, bảo mỗi ngày phải đi ít nhất mười nghìn bước. Lúc đầu tôi thấy không thể nào.',
    'Sau đó tôi nghĩ ra một cách: đổi một chặng xe thành đi bộ, lúc về xuống sớm một bến.',
    'Tuần đầu chân mỏi nhừ, tuần thứ hai là quen. Bây giờ không đi lại thấy khó chịu.',
    'Ba tháng trôi qua, tôi giảm bốn ký, ngủ cũng ngon hơn hẳn. Hoá ra khó nhất chỉ là lúc bắt đầu.'
  ],
  keys:[
    { w:'至少', r:'zhìshǎo', vi:'ít nhất' },
    { w:'步', r:'bù', vi:'bước' },
    { w:'办法', r:'bànfǎ', vi:'cách, biện pháp' },
    { w:'提前', r:'tíqián', vi:'sớm hơn dự định' },
    { w:'酸', r:'suān', vi:'mỏi (cơ)' },
    { w:'反而', r:'fǎn\'ér', vi:'ngược lại' },
    { w:'瘦', r:'shòu', vi:'gầy đi' },
    { w:'原来', r:'yuánlái', vi:'hoá ra' }
  ],
  qs:[
    { q:'Bác sĩ khuyên gì?', o:['Ăn ít lại','Mỗi ngày đi ít nhất 10.000 bước','Bơi ba lần một tuần','Ngủ sớm'], c:1, e:'让我每天至少走一万步.' },
    { q:'Cách người viết nghĩ ra là gì?', o:['Dậy sớm chạy','Xuống xe sớm một bến, đi bộ','Mua máy chạy','Đi cầu thang bộ'], c:1, e:'回家的时候提前一站下车.' },
    { q:'Sau ba tháng?', o:['Không đổi','Giảm 4 ký, ngủ ngon hơn','Bị đau chân','Bỏ cuộc'], c:1, e:'我瘦了四公斤，睡觉也好多了.' }
  ],
  after:'Viết 6 câu về một thói quen bạn muốn tạo, dùng 至少 · 反而 · 原来.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Đời sống', title:'修自行车', vi:'Sửa xe đạp',
  intro:'HSK3. Chùm từ trọng tâm: hỏng hóc, thợ sửa, giá cả phải chăng.',
  text:[
    '我的自行车骑了三年，上个星期后轮没气了。',
    '小区门口有个修车的师傅，六十多岁，每天都在那儿。',
    '他看了看说：“里面破了个小口，换个内胎就行，十五块。”十分钟就修好了。',
    '我问他为什么这么便宜，他笑着说：“街坊邻居的，挣那么多干什么。”'
  ],
  tr:[
    'Xe đạp của tôi đi ba năm rồi, tuần trước bánh sau hết hơi.',
    'Ở cổng khu nhà có một bác thợ sửa xe, ngoài sáu mươi, ngày nào cũng ngồi đó.',
    'Bác nhìn qua rồi nói: “Bên trong thủng một lỗ nhỏ, thay cái săm là được, mười lăm tệ.” Mười phút là xong.',
    'Tôi hỏi sao rẻ thế, bác cười nói: “Hàng xóm láng giềng cả, kiếm nhiều làm gì.”'
  ],
  keys:[
    { w:'骑', r:'qí', vi:'đi (xe đạp, ngựa)' },
    { w:'后轮', r:'hòulún', vi:'bánh sau' },
    { w:'没气', r:'méi qì', vi:'hết hơi' },
    { w:'师傅', r:'shīfu', vi:'bác thợ' },
    { w:'破', r:'pò', vi:'thủng, rách' },
    { w:'内胎', r:'nèitāi', vi:'săm xe' },
    { w:'街坊邻居', r:'jiēfang línjū', vi:'hàng xóm láng giềng' },
    { w:'挣', r:'zhèng', vi:'kiếm (tiền)' }
  ],
  qs:[
    { q:'Xe bị làm sao?', o:['Đứt xích','Bánh sau hết hơi','Gãy phanh','Mất yên'], c:1, e:'后轮没气了.' },
    { q:'Sửa hết bao nhiêu?', o:['5 tệ','15 tệ','50 tệ','150 tệ'], c:1, e:'换个内胎就行，十五块.' },
    { q:'Bác thợ giải thích thế nào?', o:['Vì xe dễ sửa','Vì là hàng xóm, kiếm nhiều làm gì','Vì đang khuyến mãi','Vì quen biết'], c:1, e:'街坊邻居的，挣那么多干什么.' }
  ],
  after:'Viết 6 câu về một lần sửa đồ, dùng 就行 · 为什么 · 笑着说.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Xã hội', title:'我的邻居', vi:'Hàng xóm của tôi',
  intro:'HSK3. Chùm từ trọng tâm: quan hệ hàng xóm, giúp đỡ, cảm nhận.',
  text:[
    '我住在六楼，隔壁是一对退休的老夫妻。',
    '刚搬来的时候，我们只是点点头。有一天我忘带钥匙，在楼道里等了两个小时。',
    '老爷爷看见了，请我进屋喝茶，还给我拿了一块点心。从那以后我们熟了起来。',
    '现在我出差的时候，会请他们帮我浇花。一个城市能不能住得下去，有时候就看有没有这样的邻居。'
  ],
  tr:[
    'Tôi ở tầng sáu, sát vách là một cặp vợ chồng già đã về hưu.',
    'Hồi mới dọn đến, chúng tôi chỉ gật đầu chào. Có hôm tôi quên mang chìa khoá, đứng đợi ngoài hành lang hai tiếng.',
    'Ông cụ nhìn thấy, mời tôi vào nhà uống trà, còn lấy cho tôi một miếng bánh. Từ đó chúng tôi thân dần.',
    'Bây giờ mỗi lần đi công tác, tôi nhờ ông bà tưới hoa giúp. Một thành phố có ở lại được hay không, đôi khi chỉ tuỳ vào việc có được người hàng xóm như thế.'
  ],
  keys:[
    { w:'隔壁', r:'gébì', vi:'sát vách' },
    { w:'退休', r:'tuìxiū', vi:'về hưu' },
    { w:'点头', r:'diǎntóu', vi:'gật đầu' },
    { w:'楼道', r:'lóudào', vi:'hành lang chung cư' },
    { w:'点心', r:'diǎnxin', vi:'bánh ngọt' },
    { w:'熟', r:'shú', vi:'thân quen' },
    { w:'出差', r:'chūchāi', vi:'đi công tác' },
    { w:'住得下去', r:'zhù de xiàqu', vi:'ở lại được' }
  ],
  qs:[
    { q:'Hàng xóm là ai?', o:['Một gia đình trẻ','Cặp vợ chồng già về hưu','Một sinh viên','Không ai ở'], c:1, e:'隔壁是一对退休的老夫妻.' },
    { q:'Chuyện gì khiến hai bên thân nhau?', o:['Cùng đi chợ','Quên chìa khoá, được mời vào uống trà','Cùng nuôi mèo','Sửa nhà'], c:1, e:'请我进屋喝茶… 从那以后我们熟了起来.' },
    { q:'Bây giờ người viết nhờ gì?', o:['Trông nhà','Tưới hoa khi đi công tác','Nhận hàng','Đón con'], c:1, e:'会请他们帮我浇花.' }
  ],
  after:'Viết 6 câu về hàng xóm của bạn, dùng 从那以后 · 起来 · 请…帮.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Đời sống', title:'手机没电了', vi:'Điện thoại hết pin',
  intro:'HSK3. Chùm từ trọng tâm: sự cố nhỏ, xoay xở, suy nghĩ về công nghệ.',
  text:[
    '那天我出门忘了带充电宝，下午三点手机就没电了。',
    '没有地图，我不知道怎么回去；没有支付码，我连一瓶水都买不了。',
    '最后我问了三个人，走了半个小时，才找到地铁站。口袋里有二十块现金，正好够。',
    '那天晚上我想了很久：手机让生活方便，也让我们忘了怎么自己解决问题。'
  ],
  tr:[
    'Hôm đó tôi ra khỏi nhà quên mang sạc dự phòng, ba giờ chiều điện thoại hết pin.',
    'Không có bản đồ, tôi không biết đường về; không có mã thanh toán, đến một chai nước cũng không mua nổi.',
    'Cuối cùng tôi hỏi ba người, đi bộ nửa tiếng mới tìm được ga tàu điện ngầm. Trong túi có hai mươi tệ tiền mặt, vừa đủ.',
    'Tối đó tôi nghĩ rất lâu: điện thoại làm cuộc sống tiện lợi, cũng khiến chúng ta quên mất cách tự xoay xở.'
  ],
  keys:[
    { w:'充电宝', r:'chōngdiànbǎo', vi:'sạc dự phòng' },
    { w:'没电', r:'méi diàn', vi:'hết pin' },
    { w:'支付码', r:'zhīfùmǎ', vi:'mã thanh toán' },
    { w:'连…都…', r:'lián…dōu…', vi:'đến cả… cũng…' },
    { w:'现金', r:'xiànjīn', vi:'tiền mặt' },
    { w:'正好', r:'zhènghǎo', vi:'vừa đủ, vừa vặn' },
    { w:'解决', r:'jiějué', vi:'giải quyết' },
    { w:'问题', r:'wèntí', vi:'vấn đề' }
  ],
  qs:[
    { q:'Vì sao điện thoại hết pin?', o:['Máy hỏng','Quên mang sạc dự phòng','Dùng quá nhiều','Pin chai'], c:1, e:'出门忘了带充电宝.' },
    { q:'Hết pin thì không làm được gì?', o:['Gọi điện','Xem bản đồ và thanh toán','Nghe nhạc','Chụp ảnh'], c:1, e:'没有地图… 没有支付码…' },
    { q:'Suy nghĩ cuối cùng?', o:['Nên mua pin to hơn','Điện thoại tiện nhưng khiến ta quên tự xoay xở','Nên bỏ điện thoại','Luôn mang tiền mặt'], c:1, e:'也让我们忘了怎么自己解决问题.' }
  ],
  after:'Viết 6 câu về một lần gặp sự cố, dùng 连…都… · 才 · 让.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Ẩm thực', title:'学做中国菜', vi:'Học nấu món Trung',
  intro:'HSK3. Chùm từ trọng tâm: học nấu, lửa lớn nhỏ, hương vị.',
  text:[
    '来中国以后我最想学的不是汉语，而是做菜。',
    '房东阿姨教我做红烧肉。她说：“火候最重要，火大了肉就老了。”',
    '第一次我放的糖太多，太甜；第二次盐放多了。第三次才差不多。',
    '阿姨尝了一口说：“可以了。”那一刻我比考试得了高分还高兴。'
  ],
  tr:[
    'Sang Trung Quốc rồi, thứ tôi muốn học nhất không phải tiếng Trung mà là nấu ăn.',
    'Bác chủ nhà dạy tôi làm thịt kho tàu. Bác nói: “Lửa là quan trọng nhất, lửa to thì thịt dai.”',
    'Lần đầu tôi cho đường nhiều quá, ngọt khé; lần hai thì mặn. Lần ba mới tàm tạm.',
    'Bác nếm một miếng rồi nói: “Được rồi đấy.” Khoảnh khắc ấy tôi còn vui hơn cả được điểm cao.'
  ],
  keys:[
    { w:'而是', r:'érshì', vi:'mà là', note:'不是…而是… — không phải… mà là…' },
    { w:'房东', r:'fángdōng', vi:'chủ nhà' },
    { w:'红烧肉', r:'hóngshāoròu', vi:'thịt kho tàu' },
    { w:'火候', r:'huǒhou', vi:'độ lửa' },
    { w:'老', r:'lǎo', vi:'dai, quá lửa' },
    { w:'差不多', r:'chàbuduō', vi:'tàm tạm, gần được' },
    { w:'尝', r:'cháng', vi:'nếm' },
    { w:'那一刻', r:'nà yí kè', vi:'khoảnh khắc ấy' }
  ],
  qs:[
    { q:'Bác chủ nhà dạy món gì?', o:['Sủi cảo','Thịt kho tàu','Mì','Trứng xào'], c:1, e:'教我做红烧肉.' },
    { q:'Theo bác, điều gì quan trọng nhất?', o:['Nguyên liệu','Độ lửa','Gia vị','Thời gian'], c:1, e:'火候最重要.' },
    { q:'Lần thứ hai sai ở đâu?', o:['Ngọt quá','Mặn quá','Cháy','Sống'], c:1, e:'第二次盐放多了.' }
  ],
  after:'Viết 6 câu dạy người khác nấu một món, dùng 不是…而是… và 最重要.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Xã hội', title:'快递柜', vi:'Tủ nhận hàng',
  intro:'HSK3. Chùm từ trọng tâm: tiện ích khu dân cư, mã lấy hàng, mặt trái nhỏ.',
  text:[
    '小区门口装了一排快递柜。快递员把包裹放进去，手机上就收到一个取件码。',
    '这样上班的人不用在家等，晚上回来随时能拿。',
    '不过也有麻烦：柜子满了，快递员只好把东西放在门卫室；有时候超过一天还要交钱。',
    '一个小小的柜子，看起来是技术问题，其实是怎么安排时间的问题。'
  ],
  tr:[
    'Ở cổng khu nhà lắp một dãy tủ nhận hàng. Nhân viên chuyển phát bỏ bưu kiện vào, điện thoại liền nhận được một mã lấy hàng.',
    'Như vậy người đi làm không phải ở nhà chờ, tối về lúc nào lấy cũng được.',
    'Có điều cũng phiền: tủ đầy thì nhân viên đành để đồ ở phòng bảo vệ; đôi khi quá một ngày còn phải nộp tiền.',
    'Một cái tủ bé tí, nhìn thì tưởng là chuyện công nghệ, thật ra là chuyện sắp xếp thời gian.'
  ],
  keys:[
    { w:'装', r:'zhuāng', vi:'lắp đặt' },
    { w:'包裹', r:'bāoguǒ', vi:'bưu kiện' },
    { w:'取件码', r:'qǔjiànmǎ', vi:'mã lấy hàng' },
    { w:'随时', r:'suíshí', vi:'bất cứ lúc nào' },
    { w:'满', r:'mǎn', vi:'đầy' },
    { w:'只好', r:'zhǐhǎo', vi:'đành phải' },
    { w:'门卫室', r:'ménwèishì', vi:'phòng bảo vệ' },
    { w:'超过', r:'chāoguò', vi:'quá, vượt' }
  ],
  qs:[
    { q:'Sau khi bỏ hàng vào tủ, người nhận được gì?', o:['Cuộc gọi','Một mã lấy hàng','Chìa khoá','Phiếu giấy'], c:1, e:'手机上就收到一个取件码.' },
    { q:'Tủ đầy thì sao?', o:['Trả hàng về','Để ở phòng bảo vệ','Giao lại hôm sau','Gọi cho chủ nhà'], c:1, e:'快递员只好把东西放在门卫室.' },
    { q:'Kết luận của bài?', o:['Nên bỏ tủ đi','Nhìn là chuyện công nghệ, thật ra là chuyện sắp xếp thời gian','Nên lắp nhiều tủ hơn','Nên thu tiền cao hơn'], c:1, e:'其实是怎么安排时间的问题.' }
  ],
  after:'Viết 6 câu về một tiện ích ở khu bạn ở, dùng 不过 · 只好 · 其实.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Thể thao', title:'一起爬山', vi:'Cùng nhau leo núi',
  intro:'HSK3. Chùm từ trọng tâm: leo núi, mệt mỏi, đồng đội.',
  text:[
    '上个周末，我和三个同学去爬香山。早上七点出发，人已经不少了。',
    '走到一半的时候我特别累，腿像不是自己的。我想停下来，可是同学在前面等我。',
    '他们没有催我，只是说：“慢慢来，到了再说。”',
    '两个小时后我们到了山顶。风很大，看得很远。那一刻我明白，很多事不是一个人走不完，而是一个人不想走。'
  ],
  tr:[
    'Cuối tuần trước, tôi và ba người bạn đi leo núi Hương Sơn. Bảy giờ sáng xuất phát, người đã khá đông.',
    'Đi được nửa đường tôi mệt lả, chân như không phải của mình. Tôi muốn dừng lại, nhưng các bạn đứng phía trước đợi.',
    'Họ không giục tôi, chỉ nói: “Từ từ thôi, lên tới rồi tính.”',
    'Hai tiếng sau chúng tôi lên tới đỉnh. Gió rất to, nhìn được rất xa. Khoảnh khắc ấy tôi hiểu, nhiều việc không phải một mình đi không nổi, mà là một mình thì không muốn đi.'
  ],
  keys:[
    { w:'爬山', r:'páshān', vi:'leo núi' },
    { w:'出发', r:'chūfā', vi:'xuất phát' },
    { w:'一半', r:'yíbàn', vi:'một nửa' },
    { w:'像', r:'xiàng', vi:'giống như' },
    { w:'催', r:'cuī', vi:'giục' },
    { w:'山顶', r:'shāndǐng', vi:'đỉnh núi' },
    { w:'慢慢来', r:'mànmàn lái', vi:'từ từ thôi' },
    { w:'明白', r:'míngbai', vi:'hiểu ra' }
  ],
  qs:[
    { q:'Mấy người cùng đi?', o:['Hai','Ba','Bốn','Năm'], c:2, e:'我和三个同学 — tổng cộng bốn người.' },
    { q:'Bạn bè phản ứng thế nào khi người viết mệt?', o:['Giục đi nhanh','Không giục, bảo từ từ','Quay xuống','Đi trước'], c:1, e:'他们没有催我，只是说：“慢慢来”.' },
    { q:'Người viết hiểu ra điều gì?', o:['Nên tập thể lực','Một mình thì không muốn đi chứ không phải không đi nổi','Leo núi quá khó','Nên đi ít người'], c:1, e:'不是一个人走不完，而是一个人不想走.' }
  ],
  after:'Kể một lần bạn cố gắng cùng người khác, dùng 不是…而是… và 那一刻.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Văn hoá', title:'送礼的讲究', vi:'Cái lệ khi tặng quà',
  intro:'HSK3. Chùm từ trọng tâm: phong tục tặng quà, điều kiêng, cách từ chối lịch sự.',
  text:[
    '在中国送礼有一些讲究，刚来的外国人常常不知道。',
    '比如不能送钟，因为“送钟”和“送终”听起来一样；也不送伞，“伞”和“散”同音。',
    '收礼的人一般会先客气两句：“太破费了。”这不是拒绝，是礼貌。',
    '我第一次送礼的时候紧张得很。后来我明白了：心意比东西重要，但知道这些讲究，是尊重。'
  ],
  tr:[
    'Ở Trung Quốc tặng quà có vài cái lệ, người nước ngoài mới sang thường không biết.',
    'Ví dụ không tặng đồng hồ treo, vì “tặng đồng hồ” nghe giống “đưa tang”; cũng không tặng ô, vì “ô” đồng âm với “chia lìa”.',
    'Người nhận thường khách sáo vài câu trước: “Bày vẽ quá.” Đó không phải từ chối, mà là phép lịch sự.',
    'Lần đầu tặng quà tôi căng thẳng lắm. Sau này tôi hiểu: tấm lòng quan trọng hơn món đồ, nhưng biết những cái lệ ấy chính là sự tôn trọng.'
  ],
  keys:[
    { w:'送礼', r:'sònglǐ', vi:'tặng quà' },
    { w:'讲究', r:'jiǎngjiu', vi:'cái lệ, sự cầu kỳ' },
    { w:'钟', r:'zhōng', vi:'đồng hồ treo' },
    { w:'同音', r:'tóngyīn', vi:'đồng âm' },
    { w:'客气', r:'kèqi', vi:'khách sáo' },
    { w:'破费', r:'pòfèi', vi:'tốn kém (lời khách sáo)' },
    { w:'拒绝', r:'jùjué', vi:'từ chối' },
    { w:'尊重', r:'zūnzhòng', vi:'tôn trọng' }
  ],
  qs:[
    { q:'Vì sao không tặng đồng hồ treo?', o:['Vì đắt','Vì 送钟 đồng âm với 送终','Vì dễ hỏng','Vì nhà nào cũng có'], c:1, e:'“送钟”和“送终”听起来一样.' },
    { q:'Câu “太破费了” nghĩa là gì?', o:['Từ chối quà','Lời khách sáo lịch sự','Chê quà rẻ','Đòi quà khác'], c:1, e:'这不是拒绝，是礼貌.' },
    { q:'Kết luận của người viết?', o:['Không nên tặng quà','Tấm lòng quan trọng hơn, nhưng biết lệ là tôn trọng','Nên tặng tiền','Lệ này đã lỗi thời'], c:1, e:'心意比东西重要，但知道这些讲究，是尊重.' }
  ],
  after:'Viết 6 câu về phong tục tặng quà ở Việt Nam, dùng 比如 · 因为 · 比…重要.' },

{ lang:'zh', lv:'hsk3', mins:5, cat:'Văn hoá', title:'中秋节的月亮', vi:'Vầng trăng Trung thu',
  intro:'HSK3. Chùm từ trọng tâm: Tết Trung thu, đoàn viên, bánh trung thu.',
  text:[
    '农历八月十五是中秋节，中国人叫它“团圆节”。',
    '这一天，不管离家多远，人们都想办法回去，一家人坐在一起吃月饼、赏月。',
    '月饼有很多种：豆沙的、莲蓉的、五仁的。年轻人常说五仁太难吃，可是每年还是有人买。',
    '我在中国过的第一个中秋，同屋把他家寄来的月饼分给我一半。那天的月亮很圆，我却想起了河内的家。'
  ],
  tr:[
    'Ngày rằm tháng Tám âm lịch là Tết Trung thu, người Trung Quốc gọi là “tết đoàn viên”.',
    'Ngày này, dù xa nhà đến đâu người ta cũng tìm cách về, cả nhà ngồi cùng nhau ăn bánh trung thu, ngắm trăng.',
    'Bánh trung thu có nhiều loại: nhân đậu đỏ, nhân hạt sen, nhân thập cẩm. Người trẻ hay chê thập cẩm khó ăn, vậy mà năm nào cũng có người mua.',
    'Trung thu đầu tiên tôi ở Trung Quốc, bạn cùng phòng chia cho tôi một nửa chiếc bánh nhà gửi lên. Trăng hôm ấy rất tròn, còn tôi thì nhớ nhà ở Hà Nội.'
  ],
  keys:[
    { w:'农历', r:'nónglì', vi:'âm lịch' },
    { w:'团圆', r:'tuányuán', vi:'đoàn viên' },
    { w:'想办法', r:'xiǎng bànfǎ', vi:'tìm cách' },
    { w:'月饼', r:'yuèbǐng', vi:'bánh trung thu' },
    { w:'赏月', r:'shǎngyuè', vi:'ngắm trăng' },
    { w:'豆沙', r:'dòushā', vi:'nhân đậu đỏ' },
    { w:'分', r:'fēn', vi:'chia' },
    { w:'却', r:'què', vi:'vậy mà, thế nhưng' }
  ],
  qs:[
    { q:'Trung thu là ngày nào?', o:['Rằm tháng Bảy','Rằm tháng Tám âm lịch','Mùng một tháng Tám','Rằm tháng Chín'], c:1, e:'农历八月十五是中秋节.' },
    { q:'Người trẻ hay chê loại bánh nào?', o:['Đậu đỏ','Hạt sen','Thập cẩm','Trứng muối'], c:2, e:'年轻人常说五仁太难吃.' },
    { q:'Cảm xúc của người viết hôm đó?', o:['Rất vui','Trăng tròn mà lại nhớ nhà','Thấy cô đơn hẳn','Không cảm thấy gì'], c:1, e:'那天的月亮很圆，我却想起了河内的家.' }
  ],
  after:'So sánh Trung thu Việt Nam và Trung Quốc bằng 6 câu, dùng 不管…都… và 却.' },

{ lang:'zh', lv:'hsk2', mins:4, cat:'Đời sống', title:'下雨天', vi:'Ngày mưa',
  intro:'HSK2. Chùm từ trọng tâm: thời tiết, mượn ô, lòng tốt nhỏ.',
  text:[
    '今天早上出门的时候天很好，下午忽然下起了大雨。',
    '我没带伞，站在公司门口等。同事小李看见我，把她的伞给了我。',
    '我说：“那你怎么办？”她说：“我男朋友来接我。”',
    '第二天我还伞的时候，买了一杯奶茶谢谢她。她笑着说：“一把伞而已。”'
  ],
  tr:[
    'Sáng nay lúc ra khỏi nhà trời rất đẹp, đến chiều bỗng đổ mưa to.',
    'Tôi không mang ô, đứng ở cửa công ty đợi. Đồng nghiệp Tiểu Lý nhìn thấy, đưa ô của cô ấy cho tôi.',
    'Tôi bảo: “Thế còn cậu thì sao?” Cô ấy nói: “Bạn trai tớ đến đón.”',
    'Hôm sau lúc trả ô, tôi mua một cốc trà sữa cảm ơn cô ấy. Cô ấy cười nói: “Có mỗi cái ô thôi mà.”'
  ],
  keys:[
    { w:'忽然', r:'hūrán', vi:'bỗng nhiên' },
    { w:'下起了', r:'xià qǐ le', vi:'bắt đầu đổ (mưa)' },
    { w:'伞', r:'sǎn', vi:'ô, dù' },
    { w:'同事', r:'tóngshì', vi:'đồng nghiệp' },
    { w:'接', r:'jiē', vi:'đón' },
    { w:'还', r:'huán', vi:'trả lại', note:'đọc huán, khác với 还 hái (còn)' },
    { w:'奶茶', r:'nǎichá', vi:'trà sữa' },
    { w:'而已', r:'éryǐ', vi:'…thôi mà' }
  ],
  qs:[
    { q:'Chiều nay trời thế nào?', o:['Nắng to','Bỗng mưa to','Có tuyết','Gió lớn'], c:1, e:'下午忽然下起了大雨.' },
    { q:'Ai cho mượn ô?', o:['Bảo vệ','Đồng nghiệp Tiểu Lý','Bạn trai','Sếp'], c:1, e:'同事小李… 把她的伞给了我.' },
    { q:'Hôm sau người viết làm gì?', o:['Mua ô mới','Trả ô và mua trà sữa cảm ơn','Quên mất','Gửi tiền'], c:1, e:'还伞的时候，买了一杯奶茶谢谢她.' }
  ],
  after:'Viết 5 câu về một lần được người khác giúp, dùng 忽然 · 把 · 而已.' }

  );
})();
