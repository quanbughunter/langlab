/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG NHẬT (mở rộng)
   ------------------------------------------------------------
   Chỉ giữ mức N5 · N4 · N3 (tương đương A1–B1). Furigana viết theo quy ước
   của LangLab: 漢字[かんじ] — xem js/course-ja.js.
   Đẩy thêm vào mảng READINGS của js/readings.js (nạp SAU tệp đó).
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'わたしの一日', vi:'Một ngày của tôi',
  intro:'N5. Chùm từ trọng tâm: giờ giấc, hoạt động hằng ngày, trợ từ に và を.',
  text:[
    'わたしは まいあさ 六時[ろくじ]に おきます。かおを あらって、あさごはんを たべます。',
    '七時半[しちじはん]に うちを でて、電車[でんしゃ]で 学校[がっこう]へ 行[い]きます。',
    'ひるごはんは 友[とも]だちと たべます。きょうは カレーを たべました。',
    'よる、うちで しゅくだいを してから、すこし テレビを 見[み]ます。十一時[じゅういちじ]ごろ ねます。'
  ],
  tr:[
    'Sáng nào tôi cũng dậy lúc sáu giờ. Tôi rửa mặt rồi ăn sáng.',
    'Bảy giờ rưỡi tôi ra khỏi nhà, đi tàu điện đến trường.',
    'Bữa trưa tôi ăn cùng bạn. Hôm nay chúng tôi ăn cà ri.',
    'Buổi tối, ở nhà tôi làm bài tập xong rồi xem tivi một chút. Khoảng mười một giờ thì đi ngủ.'
  ],
  keys:[
    { w:'おきる', r:'okiru', vi:'thức dậy' },
    { w:'かおを あらう', r:'kao o arau', vi:'rửa mặt' },
    { w:'でる', r:'deru', vi:'ra khỏi' },
    { w:'電車', r:'densha', vi:'tàu điện' },
    { w:'ひるごはん', r:'hirugohan', vi:'bữa trưa' },
    { w:'しゅくだい', r:'shukudai', vi:'bài tập về nhà' },
    { w:'～てから', r:'-te kara', vi:'sau khi…', note:'してから — sau khi làm xong' },
    { w:'～ごろ', r:'-goro', vi:'khoảng (thời điểm)' }
  ],
  qs:[
    { q:'Người viết dậy lúc mấy giờ?', o:['5 giờ','6 giờ','7 giờ','7 giờ rưỡi'], c:1, e:'六時に おきます.' },
    { q:'Đi học bằng gì?', o:['Xe đạp','Tàu điện','Xe buýt','Đi bộ'], c:1, e:'電車で 学校へ 行きます.' },
    { q:'Buổi tối làm bài xong thì làm gì?', o:['Đi ngủ luôn','Xem tivi một chút','Ra ngoài chơi','Gọi điện về nhà'], c:1, e:'しゅくだいを してから、すこし テレビを 見ます.' }
  ],
  after:'Viết 4 câu về một ngày của bạn, dùng ～てから và ～ごろ.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Mua sắm', title:'スーパーで', vi:'Ở siêu thị',
  intro:'N5. Chùm từ trọng tâm: mua đồ, giá tiền, số đếm và lượng từ.',
  text:[
    'きょうの ゆうがた、スーパーへ 行[い]きました。たまごと ぎゅうにゅうを 買[か]いました。',
    'りんごは 一[ひと]つ 百五十円[ひゃくごじゅうえん]でした。三[みっ]つ 買いました。',
    'レジの 人[ひと]が「ふくろは いりますか」と 言[い]いました。「いいえ、けっこうです」と こたえました。',
    'ぜんぶで 八百円[はっぴゃくえん]でした。おもかったですが、うちまで 歩[ある]いて かえりました。'
  ],
  tr:[
    'Chiều nay tôi đi siêu thị. Tôi mua trứng và sữa.',
    'Táo một quả là một trăm năm mươi yên. Tôi mua ba quả.',
    'Nhân viên thu ngân nói: “Anh có cần túi không ạ?” Tôi trả lời: “Không, không cần đâu ạ.”',
    'Tổng cộng là tám trăm yên. Hơi nặng nhưng tôi vẫn đi bộ về nhà.'
  ],
  keys:[
    { w:'ゆうがた', r:'yuugata', vi:'buổi chiều tối' },
    { w:'たまご', r:'tamago', vi:'quả trứng' },
    { w:'ぎゅうにゅう', r:'gyuunyuu', vi:'sữa bò' },
    { w:'レジ', r:'reji', vi:'quầy thu ngân' },
    { w:'ふくろ', r:'fukuro', vi:'túi đựng' },
    { w:'けっこうです', r:'kekkou desu', vi:'không cần, thế là đủ' },
    { w:'ぜんぶで', r:'zenbu de', vi:'tổng cộng' },
    { w:'おもい', r:'omoi', vi:'nặng' }
  ],
  qs:[
    { q:'Người viết mua mấy quả táo?', o:['Một','Hai','Ba','Bốn'], c:2, e:'三つ 買いました.' },
    { q:'Trả lời nhân viên thế nào?', o:['Xin một túi','Không cần túi','Xin hai túi','Không nghe thấy'], c:1, e:'いいえ、けっこうです.' },
    { q:'Tổng cộng hết bao nhiêu?', o:['150 yên','450 yên','800 yên','1000 yên'], c:2, e:'ぜんぶで 八百円でした.' }
  ],
  after:'Viết 4 câu kể một lần đi siêu thị, dùng ぜんぶで và số đếm.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Gia đình', title:'わたしの かぞく', vi:'Gia đình tôi',
  intro:'N5. Chùm từ trọng tâm: người thân, nghề nghiệp, います và あります.',
  text:[
    'わたしの かぞくは 四人[よにん]です。ちちと ははと あねと わたしです。',
    'ちちは かいしゃいんです。ははは びょういんで はたらいて います。',
    'あねは 大学生[だいがくせい]で、おんがくが すきです。まいばん ギターを ひきます。',
    'うちには ちいさい いぬも います。なまえは ハナです。かぞくで さんぽに 行[い]くのが たのしみです。'
  ],
  tr:[
    'Gia đình tôi có bốn người. Bố, mẹ, chị gái và tôi.',
    'Bố là nhân viên công ty. Mẹ làm việc ở bệnh viện.',
    'Chị gái là sinh viên đại học, chị thích âm nhạc. Tối nào chị cũng chơi ghi ta.',
    'Nhà tôi còn có một con chó nhỏ. Tên nó là Hana. Cả nhà đi dạo cùng nhau là điều tôi mong nhất.'
  ],
  keys:[
    { w:'かぞく', r:'kazoku', vi:'gia đình' },
    { w:'ちち / はは', r:'chichi / haha', vi:'bố / mẹ (nói về nhà mình)' },
    { w:'あね', r:'ane', vi:'chị gái' },
    { w:'かいしゃいん', r:'kaishain', vi:'nhân viên công ty' },
    { w:'はたらく', r:'hataraku', vi:'làm việc' },
    { w:'ひく', r:'hiku', vi:'chơi (nhạc cụ dây)' },
    { w:'います', r:'imasu', vi:'có (người, động vật)', note:'đồ vật thì dùng あります' },
    { w:'たのしみ', r:'tanoshimi', vi:'điều mong đợi' }
  ],
  qs:[
    { q:'Gia đình có mấy người?', o:['Ba','Bốn','Năm','Sáu'], c:1, e:'かぞくは 四人です.' },
    { q:'Mẹ làm việc ở đâu?', o:['Công ty','Bệnh viện','Trường học','Cửa hàng'], c:1, e:'ははは びょういんで はたらいて います.' },
    { q:'Chị gái thích gì?', o:['Thể thao','Âm nhạc','Nấu ăn','Đọc sách'], c:1, e:'おんがくが すきです.' }
  ],
  after:'Giới thiệu gia đình bạn bằng 4 câu, chú ý phân biệt います và あります.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Giao thông', title:'道[みち]を きく', vi:'Hỏi đường',
  intro:'N4. Chùm từ trọng tâm: chỉ đường, thể て để nhờ vả, phương hướng.',
  text:[
    'きのう はじめて 行[い]く 駅[えき]で 道[みち]に まよって しまいました。',
    'こうばんの おまわりさんに「すみません、みどり図書館[としょかん]は どこですか」と ききました。',
    'おまわりさんは 地図[ちず]を 見[み]せながら 教[おし]えて くれました。「この 道を まっすぐ 行って、二[ふた]つめの かどを 右[みぎ]に まがって ください。」',
    'その とおりに 歩[ある]いたら、五分[ごふん]で つきました。しんせつに して もらって、ほんとうに たすかりました。'
  ],
  tr:[
    'Hôm qua tôi bị lạc đường ở một ga lần đầu đến.',
    'Tôi hỏi chú cảnh sát ở bốt: “Xin lỗi, thư viện Midori ở đâu ạ?”',
    'Chú vừa cho xem bản đồ vừa chỉ cho tôi: “Đi thẳng con đường này, đến ngã rẽ thứ hai thì rẽ phải.”',
    'Tôi đi đúng như vậy thì năm phút sau là tới. Được giúp đỡ tử tế, tôi thật sự thấy nhẹ cả người.'
  ],
  keys:[
    { w:'道に まよう', r:'michi ni mayou', vi:'lạc đường' },
    { w:'こうばん', r:'kouban', vi:'bốt cảnh sát khu phố' },
    { w:'まっすぐ', r:'massugu', vi:'thẳng' },
    { w:'かど', r:'kado', vi:'góc, ngã rẽ' },
    { w:'まがる', r:'magaru', vi:'rẽ' },
    { w:'～ながら', r:'-nagara', vi:'vừa… vừa…' },
    { w:'～て くれる', r:'-te kureru', vi:'ai đó làm cho mình' },
    { w:'たすかる', r:'tasukaru', vi:'được cứu, đỡ hẳn' }
  ],
  qs:[
    { q:'Người viết hỏi ai?', o:['Nhân viên nhà ga','Chú cảnh sát ở bốt','Người qua đường','Tài xế taxi'], c:1, e:'こうばんの おまわりさんに… ききました.' },
    { q:'Chỉ dẫn là gì?', o:['Rẽ trái ngay','Đi thẳng, ngã rẽ thứ hai rẽ phải','Quay lại ga','Đi tàu một bến'], c:1, e:'まっすぐ 行って、二つめの かどを 右に まがって ください.' },
    { q:'Mất bao lâu thì tới?', o:['2 phút','5 phút','15 phút','30 phút'], c:1, e:'五分で つきました.' }
  ],
  after:'Viết 5 câu chỉ đường từ ga đến nhà bạn, dùng ～て ください và まがる.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Văn hoá', title:'夏[なつ]まつりの夜[よる]', vi:'Đêm lễ hội mùa hè',
  intro:'N4. Chùm từ trọng tâm: lễ hội, trang phục, cảm nhận — thể た kể chuyện.',
  text:[
    '八月[はちがつ]の ある 土曜日[どようび]、近[ちか]くの 神社[じんじゃ]で 夏まつりが ありました。',
    '友[とも]だちは ゆかたを きて 来[き]ました。わたしも かりて、はじめて ゆかたを きました。',
    'やたいが ならんで いて、たこやきや かきごおりを 買[か]いました。人[ひと]が とても 多[おお]かったです。',
    '九時[くじ]ごろ、花火[はなび]が 上[あ]がりました。音[おと]が おなかに ひびいて、みんな しずかに 空[そら]を 見[み]て いました。'
  ],
  tr:[
    'Một thứ bảy tháng Tám, ở đền gần nhà có lễ hội mùa hè.',
    'Bạn tôi mặc yukata đến. Tôi cũng mượn một bộ, lần đầu mặc yukata.',
    'Các quầy hàng xếp thành dãy, chúng tôi mua takoyaki và đá bào. Người rất đông.',
    'Khoảng chín giờ, pháo hoa bắn lên. Tiếng nổ dội vào lồng ngực, mọi người lặng im ngước nhìn bầu trời.'
  ],
  keys:[
    { w:'神社', r:'jinja', vi:'đền thần đạo' },
    { w:'ゆかた', r:'yukata', vi:'yukata (kimono mùa hè)' },
    { w:'かりる', r:'kariru', vi:'mượn' },
    { w:'やたい', r:'yatai', vi:'quầy hàng rong' },
    { w:'ならぶ', r:'narabu', vi:'xếp hàng, xếp thành dãy' },
    { w:'かきごおり', r:'kakigoori', vi:'đá bào' },
    { w:'花火が 上がる', r:'hanabi ga agaru', vi:'pháo hoa bắn lên' },
    { w:'ひびく', r:'hibiku', vi:'vang, dội' }
  ],
  qs:[
    { q:'Lễ hội diễn ra ở đâu?', o:['Công viên','Đền thần đạo gần nhà','Trường học','Bờ sông'], c:1, e:'近くの 神社で 夏まつりが ありました.' },
    { q:'Người viết mặc gì?', o:['Kimono của mình','Yukata mượn','Đồng phục','Áo phông'], c:1, e:'わたしも かりて、はじめて ゆかたを きました.' },
    { q:'Chuyện gì xảy ra lúc chín giờ?', o:['Lễ hội kết thúc','Pháo hoa bắn lên','Trời mưa','Mọi người ra về'], c:1, e:'九時ごろ、花火が 上がりました.' }
  ],
  after:'Kể một lễ hội bạn từng đi bằng 5 câu, dùng thể た và ～て いました.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Sức khoẻ', title:'びょういんで', vi:'Ở bệnh viện',
  intro:'N4. Chùm từ trọng tâm: triệu chứng, lời dặn, ～ないで ください.',
  text:[
    '先週[せんしゅう]、かぜを ひいて びょういんへ 行[い]きました。のどが いたくて、ねつも ありました。',
    'お医者[いしゃ]さんは 「いつから ですか」と ききました。「三日[みっか]まえから です」と こたえました。',
    'みて もらった あと、お医者さんは 言[い]いました。「たいした ことは ありません。くすりを 三日分[みっかぶん] 出[だ]します。」',
    'そして 「おふろは 今日[きょう]は やめて、あたたかく して 早[はや]く ねて ください」と 言われました。二日[ふつか]で だいぶ よく なりました。'
  ],
  tr:[
    'Tuần trước tôi bị cảm nên đến bệnh viện. Họng đau và cũng có sốt.',
    'Bác sĩ hỏi: “Bị từ bao giờ?” Tôi trả lời: “Từ ba ngày trước ạ.”',
    'Sau khi khám, bác sĩ nói: “Không có gì nghiêm trọng. Tôi kê thuốc ba ngày.”',
    'Rồi bác dặn: “Hôm nay đừng tắm bồn, giữ ấm và đi ngủ sớm.” Hai ngày sau tôi đỡ hẳn.'
  ],
  keys:[
    { w:'かぜを ひく', r:'kaze o hiku', vi:'bị cảm' },
    { w:'のど', r:'nodo', vi:'cổ họng' },
    { w:'ねつ', r:'netsu', vi:'sốt' },
    { w:'たいした ことは ない', r:'taishita koto wa nai', vi:'không có gì nghiêm trọng' },
    { w:'くすりを 出す', r:'kusuri o dasu', vi:'kê thuốc' },
    { w:'～分', r:'-bun', vi:'phần cho (mấy ngày)', note:'三日分 — thuốc cho ba ngày' },
    { w:'～ないで ください', r:'-naide kudasai', vi:'xin đừng…' },
    { w:'だいぶ', r:'daibu', vi:'khá là, đỡ hẳn' }
  ],
  qs:[
    { q:'Triệu chứng là gì?', o:['Đau bụng','Đau họng và sốt','Đau đầu','Ho'], c:1, e:'のどが いたくて、ねつも ありました.' },
    { q:'Bác sĩ kê thuốc mấy ngày?', o:['Một ngày','Hai ngày','Ba ngày','Một tuần'], c:2, e:'くすりを 三日分 出します.' },
    { q:'Bác sĩ dặn không được làm gì?', o:['Không ăn cay','Hôm nay đừng tắm bồn','Không ra ngoài','Không uống nước lạnh'], c:1, e:'おふろは 今日は やめて…' }
  ],
  after:'Viết hội thoại với bác sĩ 6 câu, dùng ～ないで ください và ～て ください.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Công việc', title:'アルバイト初日[しょにち]', vi:'Ngày đầu làm thêm',
  intro:'N3. Chùm từ trọng tâm: công việc bán thời gian, mắc lỗi, kính ngữ đơn giản.',
  text:[
    'コンビニで アルバイトを 始[はじ]めた 初日、わたしは きんちょうで 手[て]が ふるえて いました。',
    'レジの 使[つか]い方[かた]を 教[おそ]わりましたが、はじめの お客[きゃく]さんの ときに ボタンを おしまちがえて しまいました。',
    '店長[てんちょう]は おこらずに 「だれでも 最初[さいしょ]は そうだよ」と 言[い]って、もう一度[いちど] ゆっくり 見[み]せて くれました。',
    '三時間[さんじかん]後[ご]には ひとりでも レジが できるように なりました。帰[かえ]り道[みち]、足[あし]は つかれて いましたが、気分[きぶん]は かるかったです。'
  ],
  tr:[
    'Ngày đầu bắt đầu làm thêm ở cửa hàng tiện lợi, tôi căng thẳng đến run cả tay.',
    'Tôi được dạy cách dùng máy tính tiền, nhưng đến vị khách đầu tiên thì lại bấm nhầm nút.',
    'Quản lý không nổi giận mà nói: “Ai lúc đầu cũng thế cả”, rồi làm mẫu lại thật chậm cho tôi xem.',
    'Ba tiếng sau tôi đã tự đứng quầy được một mình. Trên đường về, chân thì mỏi nhưng tâm trạng lại nhẹ tênh.'
  ],
  keys:[
    { w:'きんちょう', r:'kinchou', vi:'căng thẳng' },
    { w:'ふるえる', r:'furueru', vi:'run' },
    { w:'教わる', r:'osowaru', vi:'được dạy' },
    { w:'～まちがえる', r:'-machigaeru', vi:'làm nhầm', note:'おしまちがえる — bấm nhầm' },
    { w:'店長', r:'tenchou', vi:'quản lý cửa hàng' },
    { w:'おこる', r:'okoru', vi:'nổi giận' },
    { w:'～ように なる', r:'-you ni naru', vi:'trở nên… được' },
    { w:'かるい', r:'karui', vi:'nhẹ' }
  ],
  qs:[
    { q:'Người viết mắc lỗi gì?', o:['Đến muộn','Bấm nhầm nút máy tính tiền','Làm rơi hàng','Quên đồng phục'], c:1, e:'ボタンを おしまちがえて しまいました.' },
    { q:'Quản lý phản ứng thế nào?', o:['Nổi giận','Không giận, làm mẫu lại chậm','Cho nghỉ việc','Trừ lương'], c:1, e:'おこらずに… もう一度 ゆっくり 見せて くれました.' },
    { q:'Sau ba tiếng thì sao?', o:['Vẫn không làm được','Tự đứng quầy được','Xin nghỉ','Chuyển sang việc khác'], c:1, e:'ひとりでも レジが できるように なりました.' }
  ],
  after:'Kể ngày đầu làm việc mới bằng 6 câu, dùng ～ように なる và ～て しまう.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Đời sống', title:'部屋[へや]さがし', vi:'Đi tìm phòng',
  intro:'N3. Chùm từ trọng tâm: thuê nhà, điều kiện, so sánh và quyết định.',
  text:[
    '大学[だいがく]の 近[ちか]くで 部屋を さがすのは 思[おも]ったより たいへんでした。',
    '一[ひと]つめの 部屋は ひろかったけれど、駅[えき]から 歩[ある]いて 二十分[にじっぷん]も かかりました。',
    '二[ふた]つめは 駅に 近い かわりに、まどが 小[ちい]さくて 昼[ひる]でも くらかったです。',
    '結局[けっきょく]、三[みっ]つめに 決[き]めました。家賃[やちん]は 少[すこ]し 高[たか]いですが、日[ひ]が よく 入[はい]って 気持[きも]ちが いいからです。'
  ],
  tr:[
    'Tìm phòng gần trường đại học vất vả hơn tôi tưởng.',
    'Phòng thứ nhất rộng, nhưng đi bộ từ ga mất những hai mươi phút.',
    'Phòng thứ hai gần ga, bù lại cửa sổ nhỏ nên ban ngày cũng tối.',
    'Cuối cùng tôi quyết định chọn phòng thứ ba. Tiền nhà hơi cao, nhưng nắng vào nhiều nên thấy dễ chịu.'
  ],
  keys:[
    { w:'さがす', r:'sagasu', vi:'tìm' },
    { w:'思ったより', r:'omotta yori', vi:'hơn là mình tưởng' },
    { w:'～も かかる', r:'-mo kakaru', vi:'mất những… (nhấn mạnh)' },
    { w:'～かわりに', r:'-kawari ni', vi:'bù lại, đổi lấy' },
    { w:'くらい', r:'kurai', vi:'tối' },
    { w:'結局', r:'kekkyoku', vi:'cuối cùng thì' },
    { w:'家賃', r:'yachin', vi:'tiền thuê nhà' },
    { w:'日が 入る', r:'hi ga hairu', vi:'nắng chiếu vào' }
  ],
  qs:[
    { q:'Nhược điểm của phòng thứ nhất?', o:['Nhỏ','Xa ga, đi bộ 20 phút','Đắt','Ồn'], c:1, e:'駅から 歩いて 二十分も かかりました.' },
    { q:'Phòng thứ hai bị gì?', o:['Xa ga','Cửa sổ nhỏ nên tối','Không có bếp','Tiền nhà cao'], c:1, e:'まどが 小さくて 昼でも くらかったです.' },
    { q:'Vì sao chọn phòng thứ ba?', o:['Rẻ nhất','Nắng vào nhiều, dễ chịu','Gần ga nhất','Rộng nhất'], c:1, e:'日が よく 入って 気持ちが いいからです.' }
  ],
  after:'So sánh hai chỗ ở bằng 6 câu, dùng ～かわりに và ～けれど.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Văn hoá', title:'せんとうの ルール', vi:'Luật ở nhà tắm công cộng',
  intro:'N3. Chùm từ trọng tâm: quy tắc ứng xử, trình tự, ～なければ ならない.',
  text:[
    '日本[にほん]に 来[き]て しばらく して、友[とも]だちに さそわれて はじめて せんとうへ 行[い]きました。',
    '入[はい]る 前[まえ]に、からだを きれいに あらわなければ なりません。ゆぶねの 中[なか]は みんなで 使[つか]う ところ だからです。',
    'タオルを おゆに 入[い]れては いけません。頭[あたま]の 上[うえ]に のせて いる 人[ひと]も いました。',
    '知[し]らない 人[ひと]どうしでも、あがる ときに 「お先[さき]に」と 声[こえ]を かけます。ルールは きびしそうに 見[み]えて、じつは おたがいへの 気[き]づかいでした。'
  ],
  tr:[
    'Sang Nhật được một thời gian, được bạn rủ, lần đầu tôi đi nhà tắm công cộng.',
    'Trước khi vào, phải rửa sạch người. Vì bồn nước nóng là chỗ mọi người dùng chung.',
    'Không được thả khăn vào nước nóng. Có người còn đặt khăn lên đầu.',
    'Dù là người lạ với nhau, khi lên trước vẫn nói một câu “tôi xin phép trước”. Quy tắc nhìn thì nghiêm, thật ra là sự để ý đến nhau.'
  ],
  keys:[
    { w:'せんとう', r:'sentou', vi:'nhà tắm công cộng' },
    { w:'さそう', r:'sasou', vi:'rủ rê' },
    { w:'ゆぶね', r:'yubune', vi:'bồn nước nóng' },
    { w:'～なければ ならない', r:'-nakereba naranai', vi:'phải…' },
    { w:'～ては いけない', r:'-te wa ikenai', vi:'không được…' },
    { w:'のせる', r:'noseru', vi:'đặt lên' },
    { w:'声を かける', r:'koe o kakeru', vi:'cất lời, bắt chuyện' },
    { w:'気づかい', r:'kizukai', vi:'sự để ý, quan tâm' }
  ],
  qs:[
    { q:'Phải làm gì trước khi vào bồn?', o:['Uống nước','Rửa sạch người','Cởi khăn ra','Chào mọi người'], c:1, e:'からだを きれいに あらわなければ なりません.' },
    { q:'Điều gì bị cấm?', o:['Nói chuyện','Thả khăn vào nước nóng','Đội khăn lên đầu','Đi cùng bạn'], c:1, e:'タオルを おゆに 入れては いけません.' },
    { q:'Kết luận của người viết?', o:['Quy tắc quá phiền','Quy tắc thật ra là sự để ý đến nhau','Không nên đi sentou','Người Nhật khó tính'], c:1, e:'じつは おたがいへの 気づかいでした.' }
  ],
  after:'Viết 6 câu về một quy tắc ứng xử ở Việt Nam, dùng ～なければ ならない và ～ては いけない.' }

  );
})();
