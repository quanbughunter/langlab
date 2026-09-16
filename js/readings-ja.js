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
  after:'Viết 6 câu về một quy tắc ứng xử ở Việt Nam, dùng ～なければ ならない và ～ては いけない.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'学校[がっこう]への 道[みち]', vi:'Đường đến trường',
  intro:'N5. Chùm từ trọng tâm: phương tiện, thời gian, trợ từ で và から～まで.',
  text:[
    'うちから 学校まで 三十分[さんじゅっぷん]ぐらい かかります。',
    'まず バスに のって、つぎの えきで 電車[でんしゃ]に のりかえます。',
    'あさは 人[ひと]が 多[おお]いので、すわれません。いつも 立[た]って います。',
    '電車の 中[なか]で わたしは たんごを おぼえます。みじかい 時間[じかん]ですが、いい べんきょうに なります。'
  ],
  tr:[
    'Từ nhà đến trường mất khoảng ba mươi phút.',
    'Trước tiên tôi lên xe buýt, rồi đổi sang tàu điện ở ga tiếp theo.',
    'Buổi sáng đông người nên không ngồi được. Tôi luôn đứng.',
    'Trên tàu tôi học thuộc từ vựng. Là khoảng thời gian ngắn nhưng lại học được nhiều.'
  ],
  keys:[
    { w:'～から ～まで', r:'-kara -made', vi:'từ… đến…' },
    { w:'かかる', r:'kakaru', vi:'mất (thời gian, tiền)' },
    { w:'のりかえる', r:'norikaeru', vi:'đổi tàu, chuyển tuyến' },
    { w:'すわる', r:'suwaru', vi:'ngồi' },
    { w:'立つ', r:'tatsu', vi:'đứng' },
    { w:'おぼえる', r:'oboeru', vi:'ghi nhớ, học thuộc' },
    { w:'みじかい', r:'mijikai', vi:'ngắn' },
    { w:'～ので', r:'-node', vi:'vì… nên…' }
  ],
  qs:[
    { q:'Mất bao lâu để đến trường?', o:['15 phút','Khoảng 30 phút','1 tiếng','10 phút'], c:1, e:'三十分ぐらい かかります.' },
    { q:'Buổi sáng vì sao không ngồi được?', o:['Không có ghế','Vì đông người','Vì đứng cho khoẻ','Vì chỉ đi một bến'], c:1, e:'あさは 人が 多いので、すわれません.' },
    { q:'Trên tàu người viết làm gì?', o:['Ngủ','Học thuộc từ vựng','Nghe nhạc','Xem điện thoại'], c:1, e:'たんごを おぼえます.' }
  ],
  after:'Tả đường đi học của bạn bằng 4 câu, dùng ～から ～まで và ～ので.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'きっさてんで', vi:'Ở quán cà phê',
  intro:'N5. Chùm từ trọng tâm: gọi đồ uống, nóng lạnh, ～ましょうか.',
  text:[
    'じゅぎょうの あと、友[とも]だちと きっさてんへ 行[い]きました。',
    'わたしは あたたかい コーヒーを、友だちは つめたい こうちゃを たのみました。',
    '友だちが「ケーキも たのみましょうか」と 言[い]いました。わたしは「いいですね」と こたえました。',
    'まどの そばの せきで 二時間[にじかん]ぐらい 話[はな]しました。そとは あめでしたが、中[なか]は あたたかかったです。'
  ],
  tr:[
    'Sau giờ học, tôi đi quán cà phê với bạn.',
    'Tôi gọi cà phê nóng, bạn tôi gọi hồng trà đá.',
    'Bạn nói: “Gọi cả bánh nữa nhé?” Tôi trả lời: “Hay đấy.”',
    'Chúng tôi ngồi chỗ cạnh cửa sổ nói chuyện khoảng hai tiếng. Bên ngoài trời mưa nhưng bên trong thì ấm.'
  ],
  keys:[
    { w:'きっさてん', r:'kissaten', vi:'quán cà phê' },
    { w:'たのむ', r:'tanomu', vi:'gọi món, nhờ' },
    { w:'あたたかい', r:'atatakai', vi:'ấm' },
    { w:'つめたい', r:'tsumetai', vi:'lạnh (đồ vật)' },
    { w:'～ましょうか', r:'-mashou ka', vi:'…nhé? (rủ rê)' },
    { w:'そば', r:'soba', vi:'bên cạnh' },
    { w:'せき', r:'seki', vi:'chỗ ngồi' },
    { w:'そと', r:'soto', vi:'bên ngoài' }
  ],
  qs:[
    { q:'Người viết gọi gì?', o:['Hồng trà đá','Cà phê nóng','Nước cam','Trà sữa'], c:1, e:'あたたかい コーヒーを… たのみました.' },
    { q:'Bạn rủ gọi thêm gì?', o:['Bánh','Kem','Nước','Cà phê nữa'], c:0, e:'ケーキも たのみましょうか.' },
    { q:'Bên ngoài trời thế nào?', o:['Nắng','Mưa','Tuyết','Nhiều gió'], c:1, e:'そとは あめでしたが…' }
  ],
  after:'Viết hội thoại gọi đồ uống 6 câu, dùng ～ましょうか hai lần.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Thiên nhiên', title:'きょうの てんき', vi:'Thời tiết hôm nay',
  intro:'N5. Chùm từ trọng tâm: bốn mùa, tính từ tả thời tiết, ～たい.',
  text:[
    '日本[にほん]には はる、なつ、あき、ふゆが あります。わたしは あきが いちばん すきです。',
    'なつは あつくて、あめが 多[おお]いです。ふゆは さむくて、ゆきが ふります。',
    'きょうは かぜが 少[すこ]し ふいて いますが、そらは とても きれいです。',
    'こんな 日[ひ]は こうえんへ 行[い]きたいです。でも しゅくだいが 多いので、うちに います。'
  ],
  tr:[
    'Nhật Bản có xuân, hạ, thu, đông. Tôi thích mùa thu nhất.',
    'Mùa hè nóng và mưa nhiều. Mùa đông lạnh và có tuyết rơi.',
    'Hôm nay gió thổi một chút nhưng bầu trời rất đẹp.',
    'Ngày như thế này tôi muốn ra công viên. Nhưng bài tập nhiều quá nên tôi ở nhà.'
  ],
  keys:[
    { w:'はる / なつ / あき / ふゆ', r:'haru/natsu/aki/fuyu', vi:'xuân/hạ/thu/đông' },
    { w:'あつい', r:'atsui', vi:'nóng' },
    { w:'さむい', r:'samui', vi:'lạnh' },
    { w:'ゆきが ふる', r:'yuki ga furu', vi:'tuyết rơi' },
    { w:'かぜが ふく', r:'kaze ga fuku', vi:'gió thổi' },
    { w:'そら', r:'sora', vi:'bầu trời' },
    { w:'～たい', r:'-tai', vi:'muốn…' },
    { w:'～くて', r:'-kute', vi:'nối tính từ đuôi い' }
  ],
  qs:[
    { q:'Người viết thích mùa nào?', o:['Xuân','Hè','Thu','Đông'], c:2, e:'あきが いちばん すきです.' },
    { q:'Mùa đông thế nào?', o:['Nóng','Lạnh và có tuyết','Nhiều mưa','Nhiều gió'], c:1, e:'ふゆは さむくて、ゆきが ふります.' },
    { q:'Vì sao không ra công viên?', o:['Trời mưa','Nhiều bài tập','Bạn bận','Xa quá'], c:1, e:'しゅくだいが 多いので、うちに います.' }
  ],
  after:'Tả bốn mùa ở Việt Nam bằng 4 câu, dùng ～くて và ～たい.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Gia đình', title:'友[とも]だちの たんじょうび', vi:'Sinh nhật bạn',
  intro:'N5. Chùm từ trọng tâm: quà, lời cảm ơn, thể た kể chuyện quá khứ.',
  text:[
    'きのうは たなかさんの たんじょうびでした。友だちが みんな あつまりました。',
    'わたしは 小[ちい]さい プレゼントを 用意[ようい]しました。日本語[にほんご]の 本[ほん]と きれいな ペンを 買[か]いました。',
    'たなかさんは「ありがとう。とても うれしいです」と 言[い]いました。',
    'みんなで ケーキを 食[た]べて、うたを うたいました。とても たのしい ばんでした。'
  ],
  tr:[
    'Hôm qua là sinh nhật anh Tanaka. Bạn bè tụ họp đông đủ.',
    'Tôi chuẩn bị một món quà nhỏ. Tôi mua một quyển sách tiếng Nhật và một cây bút đẹp.',
    'Anh Tanaka nói: “Cảm ơn nhé. Mình vui lắm.”',
    'Mọi người cùng ăn bánh và hát. Đó là một buổi tối rất vui.'
  ],
  keys:[
    { w:'たんじょうび', r:'tanjoubi', vi:'sinh nhật' },
    { w:'あつまる', r:'atsumaru', vi:'tụ họp' },
    { w:'プレゼント', r:'purezento', vi:'món quà' },
    { w:'用意する', r:'youi suru', vi:'chuẩn bị' },
    { w:'うれしい', r:'ureshii', vi:'vui mừng' },
    { w:'うたを うたう', r:'uta o utau', vi:'hát' },
    { w:'たのしい', r:'tanoshii', vi:'vui' },
    { w:'ばん', r:'ban', vi:'buổi tối' }
  ],
  qs:[
    { q:'Người viết mua quà gì?', o:['Bánh','Sách tiếng Nhật và bút','Hoa','Áo'], c:1, e:'日本語の 本と きれいな ペンを 買いました.' },
    { q:'Tanaka nói gì?', o:['Không cần đâu','Cảm ơn, mình vui lắm','Đắt quá','Mình có rồi'], c:1, e:'ありがとう。とても うれしいです.' },
    { q:'Mọi người làm gì?', o:['Xem phim','Ăn bánh và hát','Đi ăn ngoài','Chơi game'], c:1, e:'ケーキを 食べて、うたを うたいました.' }
  ],
  after:'Kể một buổi sinh nhật bằng 5 câu, toàn bộ dùng thể ました.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Ẩm thực', title:'りょうりを ならう', vi:'Học nấu ăn',
  intro:'N4. Chùm từ trọng tâm: các bước nấu ăn, trình tự, ～まえに / ～てから.',
  text:[
    'せんしゅうの 週末[しゅうまつ]、友[とも]だちに おにぎりの 作[つく]り方[かた]を 教[おそ]わりました。',
    'まず ごはんに 少[すこ]し しおを まぜます。にぎる まえに 手[て]を ぬらすと ごはんが つきません。',
    'つぎに 中[なか]に ぐを 入[い]れて、三角[さんかく]の かたちに にぎります。さいごに のりを まきます。',
    '作ってから すぐ 食[た]べたら、とても おいしかったです。かたちは あまり きれいでは ありませんでしたが。'
  ],
  tr:[
    'Cuối tuần trước tôi được bạn dạy cách làm onigiri.',
    'Trước tiên trộn chút muối vào cơm. Trước khi nắm, làm ướt tay thì cơm sẽ không dính.',
    'Tiếp theo cho nhân vào giữa rồi nắm thành hình tam giác. Cuối cùng quấn lá rong biển.',
    'Làm xong ăn ngay thì rất ngon. Chỉ có điều hình dạng thì không đẹp lắm.'
  ],
  keys:[
    { w:'作り方', r:'tsukurikata', vi:'cách làm' },
    { w:'教わる', r:'osowaru', vi:'được dạy' },
    { w:'まぜる', r:'mazeru', vi:'trộn' },
    { w:'にぎる', r:'nigiru', vi:'nắm' },
    { w:'～まえに', r:'-mae ni', vi:'trước khi…' },
    { w:'ぬらす', r:'nurasu', vi:'làm ướt' },
    { w:'ぐ', r:'gu', vi:'nhân (bánh, cơm)' },
    { w:'まく', r:'maku', vi:'quấn' }
  ],
  qs:[
    { q:'Trộn gì vào cơm?', o:['Đường','Chút muối','Dấm','Nước tương'], c:1, e:'ごはんに 少し しおを まぜます.' },
    { q:'Vì sao phải làm ướt tay?', o:['Cho sạch','Để cơm không dính tay','Cho mát','Để nắm chặt hơn'], c:1, e:'手を ぬらすと ごはんが つきません.' },
    { q:'Kết quả ra sao?', o:['Rất ngon, hình đẹp','Rất ngon nhưng hình không đẹp','Không ngon','Hỏng hoàn toàn'], c:1, e:'とても おいしかったです。かたちは あまり きれいでは ありませんでした.' }
  ],
  after:'Viết 6 bước nấu một món, dùng ～まえに và ～てから.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Dịch vụ', title:'ぎんこうで', vi:'Ở ngân hàng',
  intro:'N4. Chùm từ trọng tâm: mở tài khoản, giấy tờ, ～ないで ください.',
  text:[
    '日本[にほん]に 来[き]て 一週間[いっしゅうかん]で ぎんこうに 行[い]って こうざを 作[つく]りました。',
    'ばんごうふだを とって 十分[じゅっぷん]ぐらい 待[ま]ちました。じゅんばんに なると、店員[てんいん]さんが パスポートを 見[み]せて くださいと 言[い]いました。',
    'もうしこみしょに 名前[なまえ]、じゅうしょ、でんわばんごうを 書[か]きました。一[ひと]つ わからない ところが あったので、聞[き]きました。',
    '店員さんは しんせつに 教[おし]えて くれました。さいごに「あんしょうばんごうは ほかの 人[ひと]に 言わないで ください」と 言われました。'
  ],
  tr:[
    'Sang Nhật được một tuần thì tôi ra ngân hàng mở tài khoản.',
    'Tôi lấy số thứ tự rồi đợi khoảng mười phút. Đến lượt, nhân viên bảo tôi cho xem hộ chiếu.',
    'Tôi điền tên, địa chỉ, số điện thoại vào đơn. Có một chỗ không hiểu nên tôi đã hỏi.',
    'Nhân viên chỉ dẫn rất tận tình. Cuối cùng tôi được dặn: “Đừng nói mã PIN cho người khác.”'
  ],
  keys:[
    { w:'こうざ', r:'kouza', vi:'tài khoản ngân hàng' },
    { w:'ばんごうふだ', r:'bangoufuda', vi:'phiếu số thứ tự' },
    { w:'じゅんばん', r:'junban', vi:'lượt, thứ tự' },
    { w:'もうしこみしょ', r:'moushikomisho', vi:'đơn đăng ký' },
    { w:'じゅうしょ', r:'juusho', vi:'địa chỉ' },
    { w:'あんしょうばんごう', r:'anshou bangou', vi:'mã PIN' },
    { w:'～て くださる', r:'-te kudasaru', vi:'ai đó làm cho (kính ngữ)' },
    { w:'～ないで ください', r:'-naide kudasai', vi:'xin đừng…' }
  ],
  qs:[
    { q:'Việc đầu tiên khi vào ngân hàng?', o:['Điền đơn','Lấy số thứ tự','Đưa hộ chiếu','Gọi nhân viên'], c:1, e:'ばんごうふだを とって…' },
    { q:'Giấy tờ cần là gì?', o:['Thẻ cư trú','Hộ chiếu','Bằng lái','Thẻ sinh viên'], c:1, e:'パスポートを 見せて ください.' },
    { q:'Lời dặn cuối?', o:['Giữ sổ cẩn thận','Đừng nói mã PIN cho người khác','Quay lại sau một tuần','Không rút quá nhiều'], c:1, e:'あんしょうばんごうは ほかの 人に 言わないで ください.' }
  ],
  after:'Viết hội thoại ở ngân hàng 6 câu, dùng ～て ください và ～ないで ください.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Học tập', title:'としょかんの せき', vi:'Chỗ ngồi trong thư viện',
  intro:'N4. Chùm từ trọng tâm: mùa thi, quy định, ～ように なる.',
  text:[
    'しけんの 時期[じき]は としょかんに せきが ありません。あさ 八時[はちじ]に 行[い]っても もう いっぱいです。',
    '本[ほん]だけ 置[お]いて 何時間[なんじかん]も もどって こない 人[ひと]も いました。それでは ほかの 人が すわれません。',
    'さいきんは アプリで せきを よやく できるように なりました。時間[じかん]が すぎると せきが じどうてきに あきます。',
    'ルールが できてから、ずっと こうへいに なりました。わたしも あんしんして べんきょう できます。'
  ],
  tr:[
    'Mùa thi thì thư viện không còn chỗ. Tám giờ sáng đến cũng đã kín rồi.',
    'Có người chỉ để sách rồi mấy tiếng liền không quay lại. Như thế thì người khác không ngồi được.',
    'Gần đây đã có thể đặt chỗ bằng ứng dụng. Hết giờ là chỗ tự động được nhả ra.',
    'Từ khi có quy định, mọi thứ công bằng hơn hẳn. Tôi cũng yên tâm học hành.'
  ],
  keys:[
    { w:'時期', r:'jiki', vi:'thời kỳ, mùa' },
    { w:'いっぱい', r:'ippai', vi:'đầy, kín' },
    { w:'置く', r:'oku', vi:'đặt, để' },
    { w:'よやく', r:'yoyaku', vi:'đặt trước' },
    { w:'～ように なる', r:'-you ni naru', vi:'trở nên… được' },
    { w:'じどうてきに', r:'jidouteki ni', vi:'tự động' },
    { w:'こうへい', r:'kouhei', vi:'công bằng' },
    { w:'あんしんする', r:'anshin suru', vi:'yên tâm' }
  ],
  qs:[
    { q:'Vấn đề cũ là gì?', o:['Thư viện đóng sớm','Có người để sách giữ chỗ rồi bỏ đi','Không có ổ điện','Quá ồn'], c:1, e:'本だけ 置いて… もどって こない 人も いました.' },
    { q:'Cách giải quyết?', o:['Thuê bảo vệ','Đặt chỗ bằng ứng dụng','Cấm mang sách','Mở thêm phòng'], c:1, e:'アプリで せきを よやく できるように なりました.' },
    { q:'Kết quả?', o:['Tệ hơn','Công bằng hơn hẳn','Không đổi','Ít người đến hơn'], c:1, e:'ずっと こうへいに なりました.' }
  ],
  after:'Viết 6 câu về một quy định ở trường bạn, dùng ～ように なる.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Học tập', title:'日本語[にほんご]の むずかしさ', vi:'Cái khó của tiếng Nhật',
  intro:'N3. Chùm từ trọng tâm: kính ngữ, mức độ lịch sự, thái độ với lỗi sai.',
  text:[
    '日本語を 学[まな]んで きて 一番[いちばん] むずかしかったのは、文法[ぶんぽう]よりも 話[はな]し方[かた]でした。',
    'おなじ ことを 言[い]うのでも、あいてが だれかに よって「食[た]べて」「食べます」「めしあがって ください」と かわります。',
    'はじめの ころ、なかの いい 友[とも]だちに ていねいすぎる ことばを 使[つか]って、かえって よそよそしく なった ことも ありました。',
    '今[いま]は まちがえるのを こわがりません。まちがえながら おぼえるのが 一番 はやいと 思[おも]うからです。'
  ],
  tr:[
    'Học tiếng Nhật đến giờ, thứ khó nhất với tôi không phải ngữ pháp mà là cách nói.',
    'Cùng một điều muốn nói, tuỳ đối phương là ai mà thành “食べて”, “食べます”, “めしあがって ください”.',
    'Hồi đầu, tôi từng dùng lối nói quá lịch sự với bạn thân, hoá ra lại thành xa cách.',
    'Giờ tôi không sợ sai nữa. Vì tôi nghĩ vừa sai vừa nhớ mới là cách nhanh nhất.'
  ],
  keys:[
    { w:'話し方', r:'hanashikata', vi:'cách nói' },
    { w:'あいて', r:'aite', vi:'đối phương' },
    { w:'～に よって', r:'-ni yotte', vi:'tuỳ theo…' },
    { w:'ていねい', r:'teinei', vi:'lịch sự' },
    { w:'かえって', r:'kaette', vi:'trái lại, hoá ra' },
    { w:'よそよそしい', r:'yosoyososhii', vi:'xa cách, khách sáo' },
    { w:'こわがる', r:'kowagaru', vi:'sợ' },
    { w:'～ながら', r:'-nagara', vi:'vừa… vừa…' }
  ],
  qs:[
    { q:'Cái khó nhất là gì?', o:['Ngữ pháp','Cách nói theo đối phương','Chữ Hán','Phát âm'], c:1, e:'文法よりも 話し方でした.' },
    { q:'Người viết từng mắc lỗi gì?', o:['Nói trống không với thầy','Dùng lối quá lịch sự với bạn thân','Dùng sai thì','Nói quá nhanh'], c:1, e:'なかの いい 友だちに ていねいすぎる ことばを 使って…' },
    { q:'Quan điểm hiện tại?', o:['Học kỹ rồi mới nói','Vừa sai vừa nhớ là nhanh nhất','Chỉ nói với người quen','Tránh kính ngữ'], c:1, e:'まちがえながら おぼえるのが 一番 はやい…' }
  ],
  after:'Viết 6 câu về cái khó nhất khi học ngoại ngữ, dùng ～に よって và ～ながら.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Đời sống', title:'自転車[じてんしゃ]の ルール', vi:'Luật đi xe đạp',
  intro:'N3. Chùm từ trọng tâm: quy tắc giao thông, đỗ xe, ～ては いけない.',
  text:[
    '日本[にほん]では 自転車が とても べんりですが、ルールは 思[おも]ったより きびしいです。',
    'よる ライトを つけないで 走[はし]っては いけません。ふたりのりも きんしされて います。',
    'えきの まえに かってに とめると、すぐ てっきょされて しまいます。とりに 行[い]くと お金[かね]を はらわなければ なりません。',
    'はじめは めんどうだと 思いましたが、じこが 少[すく]ない 理由[りゆう]が わかりました。ルールは じぶんを まもる ものでも あります。'
  ],
  tr:[
    'Ở Nhật xe đạp rất tiện, nhưng luật lệ nghiêm hơn tôi tưởng.',
    'Ban đêm không được chạy mà không bật đèn. Chở hai người cũng bị cấm.',
    'Nếu đỗ bừa trước ga thì xe bị thu ngay. Đi lấy lại thì phải nộp tiền.',
    'Lúc đầu tôi thấy phiền, nhưng rồi hiểu ra vì sao tai nạn ít. Quy tắc cũng là thứ bảo vệ chính mình.'
  ],
  keys:[
    { w:'ライトを つける', r:'raito o tsukeru', vi:'bật đèn' },
    { w:'ふたりのり', r:'futarinori', vi:'chở hai người' },
    { w:'きんしする', r:'kinshi suru', vi:'cấm' },
    { w:'かってに', r:'katte ni', vi:'tuỳ tiện' },
    { w:'とめる', r:'tomeru', vi:'đỗ, dừng' },
    { w:'てっきょする', r:'tekkyo suru', vi:'thu dọn, cẩu đi' },
    { w:'はらう', r:'harau', vi:'trả (tiền)' },
    { w:'まもる', r:'mamoru', vi:'bảo vệ; tuân thủ' }
  ],
  qs:[
    { q:'Ban đêm bắt buộc phải làm gì?', o:['Đi chậm','Bật đèn','Đội mũ','Đi trên vỉa hè'], c:1, e:'ライトを つけないで 走っては いけません.' },
    { q:'Đỗ bừa trước ga thì sao?', o:['Bị phạt tại chỗ','Xe bị thu, lấy lại phải trả tiền','Không sao','Bị khoá bánh'], c:1, e:'すぐ てっきょされて しまいます.' },
    { q:'Kết luận của người viết?', o:['Luật quá phiền','Quy tắc cũng là thứ bảo vệ chính mình','Không nên đi xe đạp','Nên đi tàu'], c:1, e:'ルールは じぶんを まもる ものでも あります.' }
  ],
  after:'Viết 6 câu về luật giao thông ở Việt Nam, dùng ～ては いけない và ～なければ ならない.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Văn hoá', title:'お正月[しょうがつ]の 朝[あさ]', vi:'Buổi sáng ngày Tết',
  intro:'N3. Chùm từ trọng tâm: phong tục năm mới, món ăn, cảm nhận gia đình.',
  text:[
    '日本[にほん]の お正月は しずかです。大[おお]みそかの よるは 家族[かぞく]で そばを 食[た]べます。',
    '元日[がんじつ]の 朝[あさ]、おせちりょうりを ならべます。ひとつひとつの りょうりに いみが あります。',
    'たとえば くろまめは まめに はたらけるように、かずのこは 子[こ]どもが ふえるように という ねがいです。',
    'そのあと じんじゃへ はつもうでに 行[い]きます。人[ひと]が 多[おお]くて さむいですが、その 空気[くうき]が 好[す]きです。'
  ],
  tr:[
    'Tết ở Nhật khá tĩnh lặng. Đêm cuối năm cả nhà cùng ăn mì soba.',
    'Sáng mùng một, người ta bày mâm osechi. Từng món một đều mang một ý nghĩa.',
    'Ví dụ đậu đen là mong làm việc chăm chỉ, trứng cá trích là mong con cháu đông đúc.',
    'Sau đó cả nhà đi lễ đền đầu năm. Đông người và lạnh, nhưng tôi thích cái không khí ấy.'
  ],
  keys:[
    { w:'お正月', r:'oshougatsu', vi:'Tết Nguyên đán (dương lịch ở Nhật)' },
    { w:'大みそか', r:'oomisoka', vi:'đêm giao thừa' },
    { w:'元日', r:'ganjitsu', vi:'ngày mùng một' },
    { w:'おせちりょうり', r:'osechi ryouri', vi:'mâm cỗ Tết Nhật' },
    { w:'ならべる', r:'naraberu', vi:'bày biện' },
    { w:'ねがい', r:'negai', vi:'điều ước, mong muốn' },
    { w:'はつもうで', r:'hatsumoude', vi:'lễ đền đầu năm' },
    { w:'～ように', r:'-you ni', vi:'mong rằng, để mà' }
  ],
  qs:[
    { q:'Đêm cuối năm ăn món gì?', o:['Osechi','Mì soba','Bánh mochi','Sushi'], c:1, e:'大みそかの よるは 家族で そばを 食べます.' },
    { q:'Đậu đen mang ý nghĩa gì?', o:['Sống lâu','Làm việc chăm chỉ','Nhiều tiền','Bình an'], c:1, e:'くろまめは まめに はたらけるように…' },
    { q:'Sau bữa sáng cả nhà làm gì?', o:['Đi chơi','Đi lễ đền đầu năm','Ngủ tiếp','Đi mua sắm'], c:1, e:'じんじゃへ はつもうでに 行きます.' }
  ],
  after:'Viết 6 câu về Tết ở Việt Nam, dùng ～ように và ～たり～たり.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'コンビニで', vi:'Ở cửa hàng tiện lợi',
  intro:'N5. Chùm từ trọng tâm: mua đồ, hâm nóng, trả tiền.',
  text:[
    'うちの となりに コンビニが あります。二十四時間[にじゅうよじかん] あいて います。',
    'きょうは おにぎりと おちゃを 買[か]いました。ぜんぶで 三百円[さんびゃくえん]でした。',
    'てんいんさんが 「あたためますか」と ききました。わたしは 「はい、おねがいします」と 言[い]いました。',
    'コンビニは べんりですが、まいにち 行[い]くと お金[かね]が なくなります。'
  ],
  tr:[
    'Cạnh nhà tôi có một cửa hàng tiện lợi. Nó mở cửa hai mươi tư tiếng.',
    'Hôm nay tôi mua cơm nắm và trà. Tất cả là ba trăm yên.',
    'Nhân viên hỏi: “Anh có hâm nóng không ạ?” Tôi nói: “Vâng, phiền bạn.”',
    'Cửa hàng tiện lợi thì tiện, nhưng ngày nào cũng đi thì hết tiền.'
  ],
  keys:[
    { w:'となり', r:'tonari', vi:'bên cạnh' },
    { w:'あく', r:'aku', vi:'mở (cửa)' },
    { w:'おにぎり', r:'onigiri', vi:'cơm nắm' },
    { w:'ぜんぶで', r:'zenbu de', vi:'tất cả là' },
    { w:'てんいん', r:'ten-in', vi:'nhân viên' },
    { w:'あたためる', r:'atatameru', vi:'hâm nóng' },
    { w:'べんり', r:'benri', vi:'tiện lợi' },
    { w:'なくなる', r:'naku naru', vi:'hết, biến mất' }
  ],
  qs:[
    { q:'Cửa hàng mở mấy tiếng?', o:['12 tiếng','18 tiếng','24 tiếng','Chỉ ban ngày'], c:2, e:'二十四時間 あいて います.' },
    { q:'Người viết mua gì?', o:['Bánh mì và cà phê','Cơm nắm và trà','Mì ly','Sữa'], c:1, e:'おにぎりと おちゃを 買いました.' },
    { q:'Nhân viên hỏi gì?', o:['Có cần túi không','Có hâm nóng không','Có thẻ không','Có đũa không'], c:1, e:'「あたためますか」と ききました.' }
  ],
  after:'Viết 4 câu mua đồ ở cửa hàng, dùng ～と ～を 買う và ぜんぶで.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Giao thông', title:'でんしゃの 中[なか]で', vi:'Trên tàu điện',
  intro:'N5. Chùm từ trọng tâm: đi tàu, im lặng, nhường ghế.',
  text:[
    'あさの でんしゃは とても こんで います。みんな しずかです。',
    'でんわで 話[はな]す 人[ひと]は いません。メールを する 人[ひと]が おおいです。',
    'きょう、おばあさんが のりました。わたしは せきを ゆずりました。',
    'おばあさんは 「ありがとう」と 言[い]いました。うれしかったです。'
  ],
  tr:[
    'Tàu buổi sáng rất đông. Mọi người đều im lặng.',
    'Không ai nói chuyện điện thoại. Phần nhiều là nhắn tin.',
    'Hôm nay có một bà cụ lên tàu. Tôi nhường chỗ.',
    'Bà cụ nói “Cảm ơn cháu.” Tôi thấy vui.'
  ],
  keys:[
    { w:'こむ', r:'komu', vi:'đông đúc' },
    { w:'しずか', r:'shizuka', vi:'yên tĩnh' },
    { w:'～は いません', r:'-wa imasen', vi:'không có ai…' },
    { w:'メール', r:'meeru', vi:'tin nhắn' },
    { w:'おおい', r:'ooi', vi:'nhiều' },
    { w:'のる', r:'noru', vi:'lên xe' },
    { w:'せき', r:'seki', vi:'chỗ ngồi' },
    { w:'ゆずる', r:'yuzuru', vi:'nhường' }
  ],
  qs:[
    { q:'Tàu buổi sáng thế nào?', o:['Vắng','Rất đông','Sạch sẽ','Chậm'], c:1, e:'あさの でんしゃは とても こんで います.' },
    { q:'Trên tàu mọi người làm gì?', o:['Nói chuyện điện thoại','Nhắn tin, im lặng','Nghe nhạc to','Ăn uống'], c:1, e:'メールを する 人が おおいです.' },
    { q:'Người viết đã làm gì?', o:['Ngủ','Nhường chỗ cho bà cụ','Đọc sách','Xuống sớm'], c:1, e:'わたしは せきを ゆずりました.' }
  ],
  after:'Viết 4 câu về việc đi tàu/xe buýt, dùng ～て います và ～が おおい.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'わたしの へや', vi:'Căn phòng của tôi',
  intro:'N5. Chùm từ trọng tâm: đồ đạc, vị trí, tính từ.',
  text:[
    'わたしの へやは ひろくないですが、あかるいです。まどが 大[おお]きいです。',
    'つくえの 上[うえ]に パソコンと 本[ほん]が あります。ベッドは まどの そばです。',
    'かべに 日本[にほん]の ちずを はりました。まいにち 見[み]ます。',
    'そうじは しゅうに 一回[いっかい]します。きれいな へやで べんきょうすると、きもちが いいです。'
  ],
  tr:[
    'Phòng tôi không rộng nhưng sáng. Cửa sổ to.',
    'Trên bàn có máy tính và sách. Giường thì ở cạnh cửa sổ.',
    'Tôi dán một tấm bản đồ Nhật Bản lên tường. Ngày nào tôi cũng nhìn.',
    'Tôi dọn phòng mỗi tuần một lần. Học trong căn phòng sạch thì thấy dễ chịu.'
  ],
  keys:[
    { w:'ひろい', r:'hiroi', vi:'rộng' },
    { w:'あかるい', r:'akarui', vi:'sáng' },
    { w:'つくえ', r:'tsukue', vi:'bàn học' },
    { w:'そば', r:'soba', vi:'bên cạnh' },
    { w:'かべ', r:'kabe', vi:'tường' },
    { w:'はる', r:'haru', vi:'dán' },
    { w:'しゅうに 一回', r:'shuu ni ikkai', vi:'một lần mỗi tuần' },
    { w:'きもちが いい', r:'kimochi ga ii', vi:'thấy dễ chịu' }
  ],
  qs:[
    { q:'Phòng thế nào?', o:['Rộng và tối','Không rộng nhưng sáng','Rất rộng','Không có cửa sổ'], c:1, e:'ひろくないですが、あかるいです.' },
    { q:'Trên tường có gì?', o:['Tranh','Bản đồ Nhật Bản','Đồng hồ','Ảnh gia đình'], c:1, e:'かべに 日本の ちずを はりました.' },
    { q:'Dọn phòng bao lâu một lần?', o:['Mỗi ngày','Mỗi tuần một lần','Mỗi tháng','Hiếm khi'], c:1, e:'そうじは しゅうに 一回します.' }
  ],
  after:'Tả phòng bạn bằng 4 câu, dùng ～に ～が あります và ～は ～です.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Ẩm thực', title:'やおやさん', vi:'Hàng rau',
  intro:'N5. Chùm từ trọng tâm: rau củ, giá, đếm đơn vị.',
  text:[
    'うちの ちかくに やおやさんが あります。おじさんは とても げんきです。',
    'きょうは トマトを 三[みっ]つと にんじんを 二[ふた]つ 買[か]いました。',
    '「これ、きょうは やすいよ」と おじさんが 言[い]いました。ぜんぶで 四百円[よんひゃくえん]でした。',
    'スーパーより やすくて、やさいも 新[あたら]しいです。'
  ],
  tr:[
    'Gần nhà tôi có một hàng rau. Bác chủ rất vui tính.',
    'Hôm nay tôi mua ba quả cà chua và hai củ cà rốt.',
    'Bác bảo: “Cái này hôm nay rẻ đấy.” Tất cả là bốn trăm yên.',
    'Rẻ hơn siêu thị mà rau cũng tươi.'
  ],
  keys:[
    { w:'やおや', r:'yaoya', vi:'hàng rau' },
    { w:'ちかく', r:'chikaku', vi:'gần' },
    { w:'げんき', r:'genki', vi:'khoẻ, vui vẻ' },
    { w:'三つ', r:'mittsu', vi:'ba cái' },
    { w:'やすい', r:'yasui', vi:'rẻ' },
    { w:'～より', r:'-yori', vi:'hơn (so sánh)' },
    { w:'やさい', r:'yasai', vi:'rau' },
    { w:'新しい', r:'atarashii', vi:'mới, tươi' }
  ],
  qs:[
    { q:'Người viết mua gì?', o:['Cà chua và cà rốt','Khoai tây','Cải và hành','Táo'], c:0, e:'トマトを 三つと にんじんを 二つ 買いました.' },
    { q:'Hết bao nhiêu tiền?', o:['200 yên','300 yên','400 yên','500 yên'], c:2, e:'ぜんぶで 四百円でした.' },
    { q:'So với siêu thị thì sao?', o:['Đắt hơn','Rẻ hơn và tươi hơn','Giống nhau','Ít lựa chọn hơn'], c:1, e:'スーパーより やすくて、やさいも 新しいです.' }
  ],
  after:'Viết 4 câu đi chợ, dùng ～を ～つ 買う và ～より.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'あめの 日[ひ]', vi:'Ngày mưa',
  intro:'N5. Chùm từ trọng tâm: thời tiết, ô, muộn giờ.',
  text:[
    'けさ、あめが たくさん ふりました。かさを わすれました。',
    'えきまで はしりました。ふくが ぬれました。',
    'きょうしつに 十分[じゅっぷん] おくれて つきました。せんせいは 「だいじょうぶですか」と 言[い]いました。',
    'いま、かばんの 中[なか]に いつも かさが あります。'
  ],
  tr:[
    'Sáng nay mưa rất to. Tôi quên mang ô.',
    'Tôi chạy đến ga. Quần áo bị ướt.',
    'Tôi đến lớp muộn mười phút. Cô giáo hỏi: “Em không sao chứ?”',
    'Bây giờ trong cặp tôi lúc nào cũng có cái ô.'
  ],
  keys:[
    { w:'けさ', r:'kesa', vi:'sáng nay' },
    { w:'ふる', r:'furu', vi:'(mưa) rơi' },
    { w:'かさ', r:'kasa', vi:'ô, dù' },
    { w:'わすれる', r:'wasureru', vi:'quên' },
    { w:'はしる', r:'hashiru', vi:'chạy' },
    { w:'ぬれる', r:'nureru', vi:'bị ướt' },
    { w:'おくれる', r:'okureru', vi:'muộn, trễ' },
    { w:'いつも', r:'itsumo', vi:'lúc nào cũng' }
  ],
  qs:[
    { q:'Sáng nay thời tiết thế nào?', o:['Nắng','Mưa to','Có tuyết','Nhiều mây'], c:1, e:'あめが たくさん ふりました.' },
    { q:'Người viết đến lớp muộn bao lâu?', o:['5 phút','10 phút','15 phút','20 phút'], c:1, e:'十分 おくれて つきました.' },
    { q:'Bây giờ người viết làm gì?', o:['Dậy sớm hơn','Luôn để ô trong cặp','Đi taxi','Xem dự báo thời tiết'], c:1, e:'かばんの 中に いつも かさが あります.' }
  ],
  after:'Viết 4 câu về một ngày mưa, dùng ～て (nối câu) và いつも.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Giải trí', title:'しゅうまつの こうえん', vi:'Công viên cuối tuần',
  intro:'N5. Chùm từ trọng tâm: cuối tuần, hoạt động ngoài trời, gia đình.',
  text:[
    'にちようび、うちの ちかくの こうえんへ 行[い]きました。てんきが よかったです。',
    'こどもたちが ボールで あそんで いました。おとしよりは ベンチで 話[はな]して いました。',
    'わたしは 木[き]の 下[した]で 本[ほん]を よみました。とりの こえが きこえました。',
    'なにも しない 日[ひ]も、たいせつだと おもいます。'
  ],
  tr:[
    'Chủ nhật tôi ra công viên gần nhà. Thời tiết đẹp.',
    'Bọn trẻ đang chơi bóng. Các cụ già thì ngồi ghế đá trò chuyện.',
    'Tôi đọc sách dưới gốc cây. Nghe thấy cả tiếng chim.',
    'Tôi nghĩ một ngày chẳng làm gì cũng là ngày quan trọng.'
  ],
  keys:[
    { w:'こうえん', r:'kouen', vi:'công viên' },
    { w:'あそぶ', r:'asobu', vi:'chơi' },
    { w:'おとしより', r:'otoshiyori', vi:'người già' },
    { w:'ベンチ', r:'benchi', vi:'ghế đá' },
    { w:'木の 下', r:'ki no shita', vi:'dưới gốc cây' },
    { w:'こえ', r:'koe', vi:'tiếng, giọng' },
    { w:'きこえる', r:'kikoeru', vi:'nghe thấy' },
    { w:'たいせつ', r:'taisetsu', vi:'quan trọng' }
  ],
  qs:[
    { q:'Bọn trẻ đang làm gì?', o:['Chạy thi','Chơi bóng','Vẽ tranh','Đi xe đạp'], c:1, e:'こどもたちが ボールで あそんで いました.' },
    { q:'Người viết làm gì?', o:['Ngủ','Đọc sách dưới gốc cây','Chụp ảnh','Chạy bộ'], c:1, e:'木の 下で 本を よみました.' },
    { q:'Người viết nghĩ gì?', o:['Nên tập thể dục','Ngày chẳng làm gì cũng quan trọng','Công viên quá đông','Nên đi sớm hơn'], c:1, e:'なにも しない 日も、たいせつだと おもいます.' }
  ],
  after:'Viết 4 câu về cuối tuần của bạn, dùng ～て いました và ～と おもいます.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'ゆうびんきょくで', vi:'Ở bưu điện',
  intro:'N5. Chùm từ trọng tâm: gửi bưu kiện, cân, tem.',
  text:[
    'ベトナムの かぞくに にもつを おくりました。ゆうびんきょくは えきの まえに あります。',
    'はこは 二[に]キロでした。「ふねで 一[いっ]か月[げつ]、ひこうきで 一[いっ]しゅうかんです」と 言[い]われました。',
    'わたしは ひこうきを えらびました。五千円[ごせんえん]でした。',
    'すこし たかいですが、はやく とどく ほうが いいです。'
  ],
  tr:[
    'Tôi gửi một kiện hàng cho gia đình ở Việt Nam. Bưu điện ở trước ga.',
    'Cái hộp nặng hai ki-lô. Người ta bảo: “Đường biển một tháng, đường bay một tuần.”',
    'Tôi chọn đường bay. Hết năm nghìn yên.',
    'Hơi đắt nhưng đến nhanh thì vẫn hơn.'
  ],
  keys:[
    { w:'ゆうびんきょく', r:'yuubinkyoku', vi:'bưu điện' },
    { w:'にもつ', r:'nimotsu', vi:'hành lý, kiện hàng' },
    { w:'おくる', r:'okuru', vi:'gửi' },
    { w:'はこ', r:'hako', vi:'hộp' },
    { w:'ふね', r:'fune', vi:'tàu thuỷ' },
    { w:'ひこうき', r:'hikouki', vi:'máy bay' },
    { w:'えらぶ', r:'erabu', vi:'chọn' },
    { w:'とどく', r:'todoku', vi:'đến nơi' }
  ],
  qs:[
    { q:'Kiện hàng nặng bao nhiêu?', o:['1 kg','2 kg','3 kg','5 kg'], c:1, e:'はこは 二キロでした.' },
    { q:'Gửi đường biển mất bao lâu?', o:['Một tuần','Hai tuần','Một tháng','Hai tháng'], c:2, e:'ふねで 一か月…' },
    { q:'Người viết chọn cách nào?', o:['Đường biển','Đường bay','Chuyển phát nhanh','Nhờ người mang'], c:1, e:'わたしは ひこうきを えらびました.' }
  ],
  after:'Viết 4 câu gửi đồ về nhà, dùng ～を おくる và ～ほうが いい.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Học tập', title:'としょかんで 本[ほん]を かりる', vi:'Mượn sách ở thư viện',
  intro:'N5. Chùm từ trọng tâm: mượn sách, hạn trả, thẻ.',
  text:[
    'きのう、はじめて としょかんの カードを つくりました。パスポートが ひつようでした。',
    '一回[いっかい]に 五冊[ごさつ]まで かりられます。二[に]しゅうかんで かえします。',
    'わたしは やさしい 日本語[にほんご]の 本[ほん]を 三冊[さんさつ] かりました。',
    'かえすのを わすれると、つぎに かりられません。カレンダーに 書[か]きました。'
  ],
  tr:[
    'Hôm qua lần đầu tiên tôi làm thẻ thư viện. Cần hộ chiếu.',
    'Mỗi lần mượn được tối đa năm cuốn. Trả trong hai tuần.',
    'Tôi mượn ba cuốn sách tiếng Nhật dễ đọc.',
    'Nếu quên trả thì lần sau không mượn được. Tôi đã ghi vào lịch.'
  ],
  keys:[
    { w:'としょかん', r:'toshokan', vi:'thư viện' },
    { w:'カードを つくる', r:'kaado o tsukuru', vi:'làm thẻ' },
    { w:'ひつよう', r:'hitsuyou', vi:'cần thiết' },
    { w:'かりる', r:'kariru', vi:'mượn' },
    { w:'～まで', r:'-made', vi:'tối đa, đến' },
    { w:'かえす', r:'kaesu', vi:'trả lại' },
    { w:'～冊', r:'-satsu', vi:'cuốn (đếm sách)' },
    { w:'～と', r:'-to', vi:'nếu… thì', note:'わすれると — nếu quên thì' }
  ],
  qs:[
    { q:'Làm thẻ cần gì?', o:['Ảnh thẻ','Hộ chiếu','Tiền đặt cọc','Giấy giới thiệu'], c:1, e:'パスポートが ひつようでした.' },
    { q:'Mượn tối đa mấy cuốn?', o:['Ba','Bốn','Năm','Mười'], c:2, e:'五冊まで かりられます.' },
    { q:'Người viết mượn mấy cuốn?', o:['Một','Hai','Ba','Năm'], c:2, e:'三冊 かりました.' }
  ],
  after:'Viết 4 câu về thư viện, dùng ～まで · ～と · ～冊.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Đời sống', title:'ねこの さんぽ', vi:'Con mèo đi dạo',
  intro:'N5. Chùm từ trọng tâm: thú cưng hàng xóm, thói quen, mô tả.',
  text:[
    'アパートの まえに、しろい ねこが います。だれの ねこか わかりません。',
    'まいあさ 八時[はちじ]ごろ、おなじ ばしょに すわって います。',
    'わたしが 「おはよう」と 言[い]うと、しっぽを うごかします。',
    'なまえは しりませんが、わたしは 「しろ」と よんで います。'
  ],
  tr:[
    'Trước khu chung cư có một con mèo trắng. Tôi không biết nó là mèo của ai.',
    'Sáng nào khoảng tám giờ nó cũng ngồi ở đúng chỗ đó.',
    'Khi tôi nói “Chào buổi sáng”, nó ngoe nguẩy cái đuôi.',
    'Tôi không biết tên nó, nhưng tôi vẫn gọi nó là “Shiro”.'
  ],
  keys:[
    { w:'しろい', r:'shiroi', vi:'trắng' },
    { w:'だれの', r:'dare no', vi:'của ai' },
    { w:'おなじ', r:'onaji', vi:'giống nhau, cùng' },
    { w:'ばしょ', r:'basho', vi:'chỗ, địa điểm' },
    { w:'すわる', r:'suwaru', vi:'ngồi' },
    { w:'しっぽ', r:'shippo', vi:'cái đuôi' },
    { w:'うごかす', r:'ugokasu', vi:'làm cho động, ngoe nguẩy' },
    { w:'よぶ', r:'yobu', vi:'gọi' }
  ],
  qs:[
    { q:'Con mèo màu gì?', o:['Đen','Trắng','Vàng','Tam thể'], c:1, e:'しろい ねこが います.' },
    { q:'Mỗi sáng nó làm gì?', o:['Đi theo người viết','Ngồi đúng một chỗ','Kêu to','Vào nhà'], c:1, e:'おなじ ばしょに すわって います.' },
    { q:'Người viết gọi nó là gì?', o:['Kuro','Shiro','Tama','Mike'], c:1, e:'「しろ」と よんで います.' }
  ],
  after:'Viết 4 câu về một con vật bạn hay gặp, dùng ～て います và ～と 言うと.' },

{ lang:'ja', lv:'n5', mins:3, cat:'Học tập', title:'かんじの べんきょう', vi:'Học Hán tự',
  intro:'N5. Chùm từ trọng tâm: học chữ Hán, cách nhớ, kiên trì.',
  text:[
    'ひらがなと カタカナは 二[に]しゅうかんで おぼえました。でも かんじは むずかしいです。',
    'まいにち 五[いつ]つ ずつ おぼえます。ノートに 十回[じゅっかい] 書[か]きます。',
    'ベトナム語[ご]の かん語[ご]と にて いる ことばが おおいです。「学生[がくせい]」は 「học sinh」です。',
    'それを しって から、かんじが すこし たのしく なりました。'
  ],
  tr:[
    'Hiragana và katakana tôi thuộc trong hai tuần. Nhưng Hán tự thì khó.',
    'Mỗi ngày tôi nhớ năm chữ. Tôi viết mười lần vào vở.',
    'Có nhiều từ giống với từ Hán Việt. 「学生」 chính là “học sinh”.',
    'Từ khi biết điều đó, Hán tự trở nên vui hơn một chút.'
  ],
  keys:[
    { w:'おぼえる', r:'oboeru', vi:'ghi nhớ' },
    { w:'むずかしい', r:'muzukashii', vi:'khó' },
    { w:'～ずつ', r:'-zutsu', vi:'mỗi… một' },
    { w:'ノート', r:'nooto', vi:'vở' },
    { w:'～回', r:'-kai', vi:'lần' },
    { w:'にる', r:'niru', vi:'giống' },
    { w:'しる', r:'shiru', vi:'biết' },
    { w:'～く なる', r:'-ku naru', vi:'trở nên…' }
  ],
  qs:[
    { q:'Hiragana và katakana học mất bao lâu?', o:['Một tuần','Hai tuần','Một tháng','Ba tháng'], c:1, e:'二しゅうかんで おぼえました.' },
    { q:'Mỗi ngày nhớ mấy chữ Hán?', o:['Ba','Năm','Mười','Hai mươi'], c:1, e:'まいにち 五つ ずつ おぼえます.' },
    { q:'Điều gì khiến việc học vui hơn?', o:['Có thầy giỏi','Nhận ra nhiều từ giống Hán Việt','Học nhóm','Dùng ứng dụng'], c:1, e:'ベトナム語の かん語と にて いる ことばが おおいです.' }
  ],
  after:'Viết 4 câu về cách bạn học chữ, dùng ～ずつ · ～回 · ～く なる.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Đời sống', title:'ゴミの 出[だ]し方[かた]', vi:'Cách đổ rác',
  intro:'N4. Chùm từ trọng tâm: phân loại rác, lịch thu gom, quy tắc khu phố.',
  text:[
    '日本[にほん]に 来[き]て いちばん おどろいたのは ゴミの 出[だ]し方[かた]です。',
    'もえる ゴミは 火曜日[かようび]と 金曜日[きんようび]、ペットボトルは 水曜日[すいようび]です。',
    'ちがう 日[ひ]に 出[だ]すと、ゴミが のこったまま になります。一度[いちど] やって しまって、はずかしかったです。',
    'いまは カレンダーを れいぞうこに はって います。めんどうですが、なれると むずかしく ありません。'
  ],
  tr:[
    'Điều khiến tôi ngạc nhiên nhất khi sang Nhật là cách đổ rác.',
    'Rác cháy được thì thứ Ba và thứ Sáu, chai nhựa thì thứ Tư.',
    'Đổ nhầm ngày thì rác cứ nằm nguyên đó. Tôi đã lỡ làm thế một lần, ngượng lắm.',
    'Bây giờ tôi dán lịch lên tủ lạnh. Phiền thật, nhưng quen rồi thì không khó.'
  ],
  keys:[
    { w:'～方', r:'-kata', vi:'cách làm…', note:'出し方 — cách đổ (rác)' },
    { w:'おどろく', r:'odoroku', vi:'ngạc nhiên' },
    { w:'もえる ゴミ', r:'moeru gomi', vi:'rác cháy được' },
    { w:'ペットボトル', r:'petto botoru', vi:'chai nhựa' },
    { w:'～たまま', r:'-ta mama', vi:'cứ để nguyên trạng thái' },
    { w:'～て しまう', r:'-te shimau', vi:'lỡ làm mất rồi' },
    { w:'めんどう', r:'mendou', vi:'phiền phức' },
    { w:'なれる', r:'nareru', vi:'quen dần' }
  ],
  qs:[
    { q:'Rác cháy được đổ ngày nào?', o:['Thứ Hai và thứ Năm','Thứ Ba và thứ Sáu','Thứ Tư','Cuối tuần'], c:1, e:'もえる ゴミは 火曜日と 金曜日…' },
    { q:'Đổ nhầm ngày thì sao?', o:['Bị phạt tiền','Rác cứ nằm nguyên đó','Bị nhắc nhở','Không sao'], c:1, e:'ゴミが のこったまま になります.' },
    { q:'Bây giờ người viết làm gì?', o:['Nhờ hàng xóm','Dán lịch lên tủ lạnh','Đặt báo thức','Thuê dịch vụ'], c:1, e:'カレンダーを れいぞうこに はって います.' }
  ],
  after:'Viết 5 câu về quy tắc đổ rác nơi bạn sống, dùng ～方 · ～て しまう · なれる.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Đời sống', title:'コインランドリー', vi:'Tiệm giặt tự động',
  intro:'N4. Chùm từ trọng tâm: giặt sấy, chờ đợi, gặp gỡ tình cờ.',
  text:[
    'うちの せんたくきが こわれたので、コインランドリーへ 行[い]きました。',
    'せんたくは 三十分[さんじゅっぷん]、かんそうは 二十分[にじゅっぷん] かかります。',
    'まって いる あいだ、となりの おばさんと 話[はな]しました。この まちに 四十年[よんじゅうねん] 住[す]んで いるそうです。',
    'せんたくきが なおるまで、ここに 来[き]ます。ふべんでしたが、いい 出会[であ]いも ありました。'
  ],
  tr:[
    'Máy giặt nhà tôi hỏng nên tôi ra tiệm giặt tự động.',
    'Giặt mất ba mươi phút, sấy mất hai mươi phút.',
    'Trong lúc chờ, tôi nói chuyện với bà cô bên cạnh. Nghe nói bà sống ở khu này bốn mươi năm rồi.',
    'Cho đến khi máy giặt được sửa, tôi sẽ đến đây. Bất tiện thật, nhưng cũng có một cuộc gặp gỡ hay.'
  ],
  keys:[
    { w:'せんたくき', r:'sentakuki', vi:'máy giặt' },
    { w:'こわれる', r:'kowareru', vi:'hỏng' },
    { w:'かんそう', r:'kansou', vi:'sấy khô' },
    { w:'～あいだ', r:'-aida', vi:'trong lúc' },
    { w:'～そうです', r:'-sou desu', vi:'nghe nói là' },
    { w:'なおる', r:'naoru', vi:'được sửa, khỏi' },
    { w:'ふべん', r:'fuben', vi:'bất tiện' },
    { w:'出会い', r:'deai', vi:'cuộc gặp gỡ' }
  ],
  qs:[
    { q:'Vì sao phải ra tiệm giặt?', o:['Nhà không có máy','Máy giặt hỏng','Đồ quá nhiều','Rẻ hơn'], c:1, e:'うちの せんたくきが こわれたので…' },
    { q:'Giặt và sấy mất tổng bao lâu?', o:['30 phút','40 phút','50 phút','1 tiếng'], c:2, e:'三十分 + 二十分 = 50 phút.' },
    { q:'Bà cô sống ở khu này bao lâu?', o:['10 năm','20 năm','30 năm','40 năm'], c:3, e:'四十年 住んで いるそうです.' }
  ],
  after:'Viết 5 câu về một lần đồ đạc trong nhà hỏng, dùng ～ので · ～あいだ · ～そうです.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Văn hoá', title:'お花見[はなみ]', vi:'Ngắm hoa anh đào',
  intro:'N4. Chùm từ trọng tâm: mùa xuân, hoa anh đào, tiệc ngoài trời.',
  text:[
    '四月[しがつ]の はじめ、会社[かいしゃ]の みんなで お花見[はなみ]に 行[い]きました。',
    'こうえんの さくらは まんかいでした。人[ひと]が 多[おお]くて、ばしょを とるのが たいへんでした。',
    'わたしたちは 朝[あさ] 七時[しちじ]から ブルーシートを しいて まちました。',
    'さくらは 一[いっ]しゅうかんで ちって しまいます。だから みんな 急[いそ]いで 見[み]に 行[い]くのだと 分[わ]かりました。'
  ],
  tr:[
    'Đầu tháng Tư, cả công ty tôi đi ngắm hoa anh đào.',
    'Anh đào ở công viên nở rộ. Người đông nên giữ được chỗ rất vất vả.',
    'Chúng tôi trải tấm bạt xanh từ bảy giờ sáng rồi ngồi đợi.',
    'Hoa anh đào chỉ một tuần là rụng hết. Vì thế tôi hiểu ra vì sao ai cũng vội vã đi ngắm.'
  ],
  keys:[
    { w:'お花見', r:'ohanami', vi:'ngắm hoa anh đào' },
    { w:'まんかい', r:'mankai', vi:'nở rộ' },
    { w:'ばしょを とる', r:'basho o toru', vi:'giữ chỗ' },
    { w:'たいへん', r:'taihen', vi:'vất vả' },
    { w:'しく', r:'shiku', vi:'trải ra' },
    { w:'ちる', r:'chiru', vi:'rụng (hoa)' },
    { w:'急ぐ', r:'isogu', vi:'vội' },
    { w:'～のだ', r:'-no da', vi:'là vì…, hoá ra là' }
  ],
  qs:[
    { q:'Đi ngắm hoa vào lúc nào?', o:['Cuối tháng Ba','Đầu tháng Tư','Tháng Năm','Tháng Sáu'], c:1, e:'四月の はじめ…' },
    { q:'Họ giữ chỗ từ mấy giờ?', o:['6 giờ','7 giờ','8 giờ','9 giờ'], c:1, e:'朝 七時から ブルーシートを しいて まちました.' },
    { q:'Hoa anh đào nở được bao lâu?', o:['Ba ngày','Một tuần','Hai tuần','Một tháng'], c:1, e:'一しゅうかんで ちって しまいます.' }
  ],
  after:'Viết 5 câu về một lễ hội mùa xuân ở Việt Nam, dùng ～て しまう và ～のだ.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Sức khoẻ', title:'かぜを ひきました', vi:'Tôi bị cảm',
  intro:'N4. Chùm từ trọng tâm: bị cảm, hiệu thuốc, xin nghỉ.',
  text:[
    '二日[ふつか]まえから のどが いたくて、ねつも 出[で]ました。かぜを ひいたようです。',
    '会社[かいしゃ]に でんわを して、休[やす]ませて もらいました。',
    'やっきょくで くすりを 買[か]って、あたたかく して ねました。',
    '日本[にほん]では マスクを する 人[ひと]が 多[おお]いです。じぶんの ためだけでなく、ほかの 人[ひと]の ためでも あります。'
  ],
  tr:[
    'Từ hai hôm trước tôi đau họng, lại còn sốt. Hình như tôi bị cảm.',
    'Tôi gọi điện cho công ty và xin phép nghỉ.',
    'Tôi mua thuốc ở hiệu thuốc, giữ ấm rồi đi ngủ.',
    'Ở Nhật nhiều người đeo khẩu trang. Không chỉ vì mình mà còn vì người khác nữa.'
  ],
  keys:[
    { w:'かぜを ひく', r:'kaze o hiku', vi:'bị cảm' },
    { w:'のど', r:'nodo', vi:'cổ họng' },
    { w:'ねつが 出る', r:'netsu ga deru', vi:'bị sốt' },
    { w:'～ようです', r:'-you desu', vi:'hình như' },
    { w:'～させて もらう', r:'-sasete morau', vi:'xin phép được…' },
    { w:'やっきょく', r:'yakkyoku', vi:'hiệu thuốc' },
    { w:'マスク', r:'masuku', vi:'khẩu trang' },
    { w:'～だけでなく', r:'-dake de naku', vi:'không chỉ… mà còn' }
  ],
  qs:[
    { q:'Triệu chứng là gì?', o:['Đau bụng','Đau họng và sốt','Đau đầu','Chóng mặt'], c:1, e:'のどが いたくて、ねつも 出ました.' },
    { q:'Người viết làm gì với công ty?', o:['Đi làm bình thường','Gọi điện xin nghỉ','Làm ở nhà','Nhờ đồng nghiệp báo'], c:1, e:'会社に でんわを して、休ませて もらいました.' },
    { q:'Vì sao người Nhật đeo khẩu trang?', o:['Vì lạnh','Không chỉ vì mình mà còn vì người khác','Vì bụi','Vì quy định'], c:1, e:'じぶんの ためだけでなく、ほかの 人の ためでも あります.' }
  ],
  after:'Viết 5 câu về một lần bị ốm, dùng ～ようです · ～させて もらう · ～だけでなく.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Du lịch', title:'りょこうの けいかく', vi:'Kế hoạch du lịch',
  intro:'N4. Chùm từ trọng tâm: đặt vé, khách sạn, ngân sách.',
  text:[
    'こんどの れんきゅうに 京都[きょうと]へ 行[い]く つもりです。',
    'しんかんせんの きっぷは 早[はや]く よやくすれば やすく なります。だから きのう よやくしました。',
    'ホテルは えきから あるいて 十分[じゅっぷん]の ところに しました。',
    'よさんは 三万円[さんまんえん]です。お土産[みやげ]の ぶんも のこして おかなければ なりません。'
  ],
  tr:[
    'Kỳ nghỉ dài sắp tới tôi định đi Kyoto.',
    'Vé tàu siêu tốc đặt sớm thì rẻ hơn. Nên hôm qua tôi đã đặt.',
    'Khách sạn thì tôi chọn chỗ đi bộ mười phút từ ga.',
    'Ngân sách là ba mươi nghìn yên. Còn phải chừa lại phần mua quà nữa.'
  ],
  keys:[
    { w:'れんきゅう', r:'renkyuu', vi:'kỳ nghỉ dài' },
    { w:'～つもり', r:'-tsumori', vi:'dự định' },
    { w:'よやくする', r:'yoyaku suru', vi:'đặt trước' },
    { w:'～ば', r:'-ba', vi:'nếu… thì', note:'よやくすれば — nếu đặt thì' },
    { w:'～に する', r:'-ni suru', vi:'quyết định chọn' },
    { w:'よさん', r:'yosan', vi:'ngân sách' },
    { w:'お土産', r:'omiyage', vi:'quà đặc sản' },
    { w:'～なければ ならない', r:'-nakereba naranai', vi:'phải…' }
  ],
  qs:[
    { q:'Định đi đâu?', o:['Tokyo','Kyoto','Osaka','Hokkaido'], c:1, e:'京都へ 行く つもりです.' },
    { q:'Vé tàu đặt sớm thì sao?', o:['Được chọn ghế','Rẻ hơn','Được ăn miễn phí','Đổi được vé'], c:1, e:'早く よやくすれば やすく なります.' },
    { q:'Khách sạn cách ga bao xa?', o:['Ngay cạnh ga','Đi bộ 10 phút','Đi xe buýt 20 phút','Cách 1 ga'], c:1, e:'えきから あるいて 十分の ところ…' }
  ],
  after:'Lập kế hoạch một chuyến đi bằng 5 câu, dùng ～つもり · ～ば · ～に する.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Công việc', title:'アルバイトの めんせつ', vi:'Phỏng vấn việc làm thêm',
  intro:'N4. Chùm từ trọng tâm: phỏng vấn, kính ngữ, hồi hộp.',
  text:[
    'コンビニの アルバイトの めんせつを うけました。とても きんちょうしました。',
    'てんちょうさんに 「日本語[にほんご]は どのくらい 話[はな]せますか」と きかれました。',
    'わたしは 「まだ 上手[じょうず]では ありませんが、まいにち べんきょうして います」と 答[こた]えました。',
    'つぎの 日[ひ]、「来[らい]しゅうから 来[き]て ください」と でんわが ありました。うれしくて、こえが ふるえました。'
  ],
  tr:[
    'Tôi đi phỏng vấn việc làm thêm ở cửa hàng tiện lợi. Tôi hồi hộp lắm.',
    'Cửa hàng trưởng hỏi tôi: “Em nói tiếng Nhật được đến mức nào?”',
    'Tôi trả lời: “Em chưa giỏi, nhưng ngày nào em cũng học ạ.”',
    'Hôm sau có điện thoại: “Tuần sau em đến làm nhé.” Tôi mừng đến run cả giọng.'
  ],
  keys:[
    { w:'めんせつ', r:'mensetsu', vi:'phỏng vấn' },
    { w:'うける', r:'ukeru', vi:'dự (thi, phỏng vấn)' },
    { w:'きんちょうする', r:'kinchou suru', vi:'hồi hộp' },
    { w:'てんちょう', r:'tenchou', vi:'cửa hàng trưởng' },
    { w:'～れる/られる', r:'-reru/rareru', vi:'thể bị động', note:'きかれました — bị/được hỏi' },
    { w:'どのくらい', r:'dono kurai', vi:'đến mức nào' },
    { w:'答える', r:'kotaeru', vi:'trả lời' },
    { w:'ふるえる', r:'furueru', vi:'run' }
  ],
  qs:[
    { q:'Phỏng vấn ở đâu?', o:['Nhà hàng','Cửa hàng tiện lợi','Siêu thị','Quán cà phê'], c:1, e:'コンビニの アルバイトの めんせつを うけました.' },
    { q:'Người viết trả lời thế nào?', o:['“Em nói rất giỏi”','“Chưa giỏi nhưng ngày nào cũng học”','“Em không nói được”','Không trả lời'], c:1, e:'まだ 上手では ありませんが、まいにち べんきょうして います.' },
    { q:'Kết quả?', o:['Bị từ chối','Được gọi đi làm từ tuần sau','Phải phỏng vấn lại','Chưa có tin'], c:1, e:'「来しゅうから 来て ください」と でんわが ありました.' }
  ],
  after:'Viết 5 câu về một buổi phỏng vấn, dùng ～れる/られる · どのくらい · ～が (nhưng).' },

{ lang:'ja', lv:'n4', mins:4, cat:'Đời sống', title:'手紙[てがみ]を 書[か]く', vi:'Viết một lá thư',
  intro:'N4. Chùm từ trọng tâm: thư tay, cách mở đầu, gửi về nhà.',
  text:[
    'いまは メールの じだいですが、わたしは ときどき 手紙[てがみ]を 書[か]きます。',
    '日本[にほん]の 手紙[てがみ]は 天気[てんき]の 話[はなし]から はじめる ことが 多[おお]いです。',
    'せんげつ、日本語[にほんご]の せんせいに はじめて 日本語[にほんご]で 手紙[てがみ]を 書[か]きました。',
    'まちがいも あったと 思[おも]いますが、せんせいは 「大切[たいせつ]に します」と 言[い]って くれました。'
  ],
  tr:[
    'Bây giờ là thời của email, nhưng thỉnh thoảng tôi vẫn viết thư tay.',
    'Thư của người Nhật thường mở đầu bằng chuyện thời tiết.',
    'Tháng trước, lần đầu tiên tôi viết thư bằng tiếng Nhật cho cô giáo.',
    'Chắc là có cả lỗi sai, nhưng cô bảo tôi: “Cô sẽ giữ gìn cẩn thận.”'
  ],
  keys:[
    { w:'じだい', r:'jidai', vi:'thời đại' },
    { w:'ときどき', r:'tokidoki', vi:'thỉnh thoảng' },
    { w:'～から はじめる', r:'-kara hajimeru', vi:'bắt đầu từ…' },
    { w:'～ことが 多い', r:'-koto ga ooi', vi:'thường hay…' },
    { w:'はじめて', r:'hajimete', vi:'lần đầu tiên' },
    { w:'まちがい', r:'machigai', vi:'lỗi sai' },
    { w:'大切に する', r:'taisetsu ni suru', vi:'trân trọng, giữ gìn' },
    { w:'～て くれる', r:'-te kureru', vi:'ai đó làm cho mình' }
  ],
  qs:[
    { q:'Thư Nhật thường mở đầu bằng gì?', o:['Lời chào','Chuyện thời tiết','Lời xin lỗi','Ngày tháng'], c:1, e:'天気の 話から はじめる ことが 多いです.' },
    { q:'Người viết gửi thư cho ai?', o:['Gia đình','Cô giáo tiếng Nhật','Bạn thân','Đồng nghiệp'], c:1, e:'日本語の せんせいに… 手紙を 書きました.' },
    { q:'Cô giáo nói gì?', o:['“Nhiều lỗi quá”','“Cô sẽ giữ gìn cẩn thận”','“Viết lại đi”','Không nói gì'], c:1, e:'「大切に します」と 言って くれました.' }
  ],
  after:'Viết một lá thư ngắn 5 câu, dùng ～ことが 多い · はじめて · ～て くれる.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Đời sống', title:'日本[にほん]の なつ', vi:'Mùa hè ở Nhật',
  intro:'N4. Chùm từ trọng tâm: nóng ẩm, cách chống nóng, tiếng ve.',
  text:[
    '日本[にほん]の なつは 思[おも]って いたより ずっと あついです。しつどが 高[たか]いからです。',
    'そとに 出[で]ると、すぐ あせが 出[で]ます。だから みんな タオルを 持[も]って います。',
    'セミの こえが あさから 聞[き]こえます。はじめは うるさいと 思[おも]いましたが、いまは なつの おとだと 感[かん]じます。',
    'ゆうがた、まどを あけると すずしい かぜが 入[はい]って きます。その ときだけ、なつが すきに なります。'
  ],
  tr:[
    'Mùa hè ở Nhật nóng hơn tôi tưởng nhiều. Vì độ ẩm cao.',
    'Cứ ra ngoài là đổ mồ hôi ngay. Nên ai cũng mang theo khăn.',
    'Tiếng ve nghe từ sáng sớm. Lúc đầu tôi thấy ồn, giờ thì thấy đó là âm thanh của mùa hè.',
    'Chiều tối, mở cửa sổ ra là có gió mát lùa vào. Chỉ những lúc ấy tôi mới thấy thích mùa hè.'
  ],
  keys:[
    { w:'～より ずっと', r:'-yori zutto', vi:'hơn… nhiều' },
    { w:'しつど', r:'shitsudo', vi:'độ ẩm' },
    { w:'あせが 出る', r:'ase ga deru', vi:'đổ mồ hôi' },
    { w:'タオル', r:'taoru', vi:'khăn' },
    { w:'セミ', r:'semi', vi:'con ve' },
    { w:'うるさい', r:'urusai', vi:'ồn ào' },
    { w:'感じる', r:'kanjiru', vi:'cảm thấy' },
    { w:'すずしい', r:'suzushii', vi:'mát mẻ' }
  ],
  qs:[
    { q:'Vì sao mùa hè Nhật nóng khó chịu?', o:['Nhiệt độ rất cao','Độ ẩm cao','Không có gió','Nắng gắt'], c:1, e:'しつどが 高いからです.' },
    { q:'Mọi người mang theo gì?', o:['Ô','Khăn','Quạt giấy','Nước đá'], c:1, e:'みんな タオルを 持って います.' },
    { q:'Cảm nhận về tiếng ve đổi thế nào?', o:['Vẫn thấy ồn','Từ ồn thành âm thanh của mùa hè','Không để ý','Thấy buồn'], c:1, e:'いまは なつの おとだと 感じます.' }
  ],
  after:'Tả mùa hè ở Việt Nam bằng 5 câu, dùng ～より ずっと · ～と 感じる · ～だけ.' },

{ lang:'ja', lv:'n4', mins:4, cat:'Xã hội', title:'コンビニの 店員[てんいん]として', vi:'Làm nhân viên cửa hàng tiện lợi',
  intro:'N4. Chùm từ trọng tâm: làm thêm, kính ngữ với khách, mệt và vui.',
  text:[
    'アルバイトを はじめて 三[さん]か月[げつ]に なります。しごとは レジと しなものを ならべる ことです。',
    'いちばん むずかしいのは けいごです。「いらっしゃいませ」「かしこまりました」を まいにち 何十回[なんじゅっかい]も 言[い]います。',
    'つかれる 日[ひ]も ありますが、おきゃくさんに 「ありがとう」と 言[い]われると、つかれが 消[き]えます。',
    'きょうかしょでは おぼえられない 日本語[にほんご]を、ここで おぼえて います。'
  ],
  tr:[
    'Tôi bắt đầu làm thêm được ba tháng. Công việc là đứng quầy và xếp hàng lên kệ.',
    'Khó nhất là kính ngữ. Mỗi ngày tôi nói “Kính chào quý khách”, “Vâng ạ” đến mấy chục lần.',
    'Cũng có hôm mệt, nhưng được khách nói “Cảm ơn” thì mệt tan hết.',
    'Thứ tiếng Nhật không học được trong sách giáo khoa, tôi đang học ở đây.'
  ],
  keys:[
    { w:'～に なります', r:'-ni narimasu', vi:'đã được (thời gian)' },
    { w:'レジ', r:'reji', vi:'quầy thu ngân' },
    { w:'ならべる', r:'naraberu', vi:'xếp, bày' },
    { w:'けいご', r:'keigo', vi:'kính ngữ' },
    { w:'かしこまりました', r:'kashikomarimashita', vi:'vâng ạ (kính ngữ)' },
    { w:'つかれる', r:'tsukareru', vi:'mệt' },
    { w:'消える', r:'kieru', vi:'biến mất, tan đi' },
    { w:'きょうかしょ', r:'kyoukasho', vi:'sách giáo khoa' }
  ],
  qs:[
    { q:'Làm thêm được bao lâu?', o:['Một tháng','Hai tháng','Ba tháng','Nửa năm'], c:2, e:'はじめて 三か月に なります.' },
    { q:'Khó nhất là gì?', o:['Tính tiền','Kính ngữ','Xếp hàng lên kệ','Ca đêm'], c:1, e:'いちばん むずかしいのは けいごです.' },
    { q:'Điều gì làm hết mệt?', o:['Nghỉ giải lao','Được khách cảm ơn','Lương cao','Đồng nghiệp tốt'], c:1, e:'「ありがとう」と 言われると、つかれが 消えます.' }
  ],
  after:'Viết 5 câu về một công việc làm thêm, dùng ～に なります · ～られる · ～と (khi… thì).' },

{ lang:'ja', lv:'n3', mins:5, cat:'Xã hội', title:'満員[まんいん]電車[でんしゃ]', vi:'Tàu điện giờ cao điểm',
  intro:'N3. Chùm từ trọng tâm: giờ cao điểm, trật tự, cái giá của tiện lợi.',
  text:[
    '朝[あさ]八時[はちじ]の 山手線[やまのてせん]は、体[からだ]が 動[うご]かせないほど こんで います。',
    'それでも だれも 文句[もんく]を 言[い]いません。ドアが 開[ひ]らくと、人[ひと]の 波[なみ]が 静[しず]かに 動[うご]きます。',
    'この 光景[こうけい]を はじめて 見[み]た とき、私[わたし]は おどろきました。これほどの 人[ひと]が、これほど 静[しず]かで いられる ものかと。',
    'べんりな 都市[とし]の 裏[うら]には、毎朝[まいあさ] 一時間[いちじかん]を 電車[でんしゃ]に あずける 生活[せいかつ]が あります。'
  ],
  tr:[
    'Tuyến Yamanote lúc tám giờ sáng đông đến mức không cựa mình được.',
    'Vậy mà không ai phàn nàn. Cửa mở ra là dòng người lặng lẽ chuyển động.',
    'Lần đầu nhìn thấy cảnh ấy tôi đã sững người. Chừng ấy con người mà có thể im lặng đến thế sao.',
    'Đằng sau một đô thị tiện lợi là cuộc sống mỗi sáng phải gửi một tiếng đồng hồ cho chuyến tàu.'
  ],
  keys:[
    { w:'満員', r:'man-in', vi:'chật kín người' },
    { w:'～ほど', r:'-hodo', vi:'đến mức' },
    { w:'文句を 言う', r:'monku o iu', vi:'phàn nàn' },
    { w:'波', r:'nami', vi:'làn sóng' },
    { w:'光景', r:'koukei', vi:'quang cảnh' },
    { w:'～ものか', r:'-mono ka', vi:'lẽ nào lại…', note:'diễn tả kinh ngạc' },
    { w:'裏', r:'ura', vi:'mặt sau, mặt khuất' },
    { w:'あずける', r:'azukeru', vi:'gửi, ký gửi' }
  ],
  qs:[
    { q:'Tàu đông đến mức nào?', o:['Phải đứng','Không cựa mình được','Không lên nổi','Phải đợi chuyến sau'], c:1, e:'体が 動かせないほど こんで います.' },
    { q:'Phản ứng của hành khách?', o:['Cãi nhau','Không ai phàn nàn','Chen lấn','Xuống tàu'], c:1, e:'それでも だれも 文句を 言いません.' },
    { q:'Ý cuối của bài?', o:['Nên xây thêm tàu','Tiện lợi của đô thị có cái giá của nó','Người Nhật kiên nhẫn','Nên đi sớm hơn'], c:1, e:'べんりな 都市の 裏には… 生活が あります.' }
  ],
  after:'Viết 6 câu về giờ cao điểm ở thành phố bạn, dùng ～ほど · それでも · 裏.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Đời sống', title:'一人暮[ひとりぐ]らし', vi:'Sống một mình',
  intro:'N3. Chùm từ trọng tâm: tự lập, cô đơn, trưởng thành.',
  text:[
    '一人暮[ひとりぐ]らしを はじめて 一年[いちねん]が たちました。',
    '最初[さいしょ]の 一[いっ]か月[げつ]は、家[いえ]に 帰[かえ]っても 「ただいま」と 言[い]う 相手[あいて]が いない ことが つらかったです。',
    'でも、自分[じぶん]で ごはんを 作[つく]り、自分[じぶん]で 決[き]める 生活[せいかつ]には、静[しず]かな 自由[じゆう]が あります。',
    '母[はは]に 電話[でんわ]を する 回数[かいすう]は 減[へ]りましたが、母[はは]の ことを 考[かんが]える 時間[じかん]は 増[ふ]えました。'
  ],
  tr:[
    'Tôi bắt đầu sống một mình đã tròn một năm.',
    'Tháng đầu tiên khổ nhất là về đến nhà mà chẳng có ai để nói câu “Con về rồi”.',
    'Nhưng cuộc sống tự nấu ăn, tự quyết định lại có một thứ tự do rất lặng lẽ.',
    'Số lần gọi điện cho mẹ thì giảm đi, nhưng thời gian nghĩ về mẹ lại nhiều lên.'
  ],
  keys:[
    { w:'一人暮らし', r:'hitorigurashi', vi:'sống một mình' },
    { w:'たつ', r:'tatsu', vi:'(thời gian) trôi qua' },
    { w:'相手', r:'aite', vi:'đối phương, người cùng' },
    { w:'つらい', r:'tsurai', vi:'khổ sở, khó chịu' },
    { w:'自由', r:'jiyuu', vi:'tự do' },
    { w:'回数', r:'kaisuu', vi:'số lần' },
    { w:'減る', r:'heru', vi:'giảm' },
    { w:'増える', r:'fueru', vi:'tăng' }
  ],
  qs:[
    { q:'Sống một mình bao lâu rồi?', o:['Nửa năm','Một năm','Hai năm','Ba năm'], c:1, e:'一人暮らしを はじめて 一年が たちました.' },
    { q:'Tháng đầu khó ở chỗ nào?', o:['Không biết nấu ăn','Không có ai để nói “Con về rồi”','Nhà quá nhỏ','Thiếu tiền'], c:1, e:'「ただいま」と 言う 相手が いない ことが つらかったです.' },
    { q:'Điều gì tăng lên?', o:['Số lần gọi mẹ','Thời gian nghĩ về mẹ','Số bạn bè','Chi tiêu'], c:1, e:'母の ことを 考える 時間は 増えました.' }
  ],
  after:'Viết 6 câu về lần đầu sống xa nhà, dùng ～が たつ · 減る/増える · ～ことが つらい.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Xã hội', title:'田舎[いなか]と 都会[とかい]', vi:'Nông thôn và thành phố',
  intro:'N3. Chùm từ trọng tâm: so sánh vùng miền, dân số giảm, lựa chọn sống.',
  text:[
    '日本[にほん]の 田舎[いなか]では、若[わか]い 人[ひと]が どんどん 都会[とかい]へ 出[で]て いきます。',
    '去年[きょねん]、友[とも]だちの 家[いえ]が ある 村[むら]を たずねました。小学校[しょうがっこう]の 生徒[せいと]は 十二人[じゅうににん]だけでした。',
    'その 一方[いっぽう]で、家[いえ]は 広[ひろ]く、空気[くうき]は きれいで、となりの 人[ひと]の 名前[なまえ]を みんなが 知[し]って います。',
    'どちらが いいかは、人[ひと]に よって ちがうでしょう。ただ、選[えら]べる ことが 大切[たいせつ]だと 思[おも]います。'
  ],
  tr:[
    'Ở nông thôn Nhật Bản, người trẻ cứ lần lượt kéo ra thành phố.',
    'Năm ngoái tôi ghé thăm ngôi làng có nhà của bạn tôi. Trường tiểu học chỉ có mười hai học sinh.',
    'Mặt khác, nhà thì rộng, không khí thì trong lành, và ai cũng biết tên người hàng xóm.',
    'Bên nào tốt hơn thì tuỳ từng người. Chỉ có điều, tôi nghĩ được quyền lựa chọn mới là điều quan trọng.'
  ],
  keys:[
    { w:'田舎', r:'inaka', vi:'nông thôn' },
    { w:'都会', r:'tokai', vi:'đô thị' },
    { w:'どんどん', r:'dondon', vi:'liên tục, ào ạt' },
    { w:'たずねる', r:'tazuneru', vi:'ghé thăm' },
    { w:'生徒', r:'seito', vi:'học sinh' },
    { w:'その 一方で', r:'sono ippou de', vi:'mặt khác' },
    { w:'～に よって', r:'-ni yotte', vi:'tuỳ theo' },
    { w:'選ぶ', r:'erabu', vi:'lựa chọn' }
  ],
  qs:[
    { q:'Trường tiểu học ở làng có bao nhiêu học sinh?', o:['Hai','Mười hai','Hai mươi','Năm mươi'], c:1, e:'小学校の 生徒は 十二人だけでした.' },
    { q:'Ưu điểm của nông thôn?', o:['Nhiều việc làm','Nhà rộng, không khí sạch, ai cũng biết nhau','Giao thông tốt','Trường học tốt'], c:1, e:'家は 広く、空気は きれいで…' },
    { q:'Kết luận của người viết?', o:['Nông thôn tốt hơn','Được quyền lựa chọn mới là quan trọng','Thành phố tốt hơn','Nên về quê'], c:1, e:'選べる ことが 大切だと 思います.' }
  ],
  after:'So sánh quê và thành phố bằng 6 câu, dùng その 一方で · ～に よって · ～でしょう.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Văn hoá', title:'温泉[おんせん]の マナー', vi:'Phép tắc ở suối nước nóng',
  intro:'N3. Chùm từ trọng tâm: onsen, quy tắc, ngại ngùng ban đầu.',
  text:[
    'はじめて 温泉[おんせん]に 行[い]った とき、いちばん こまったのは 服[ふく]を 全部[ぜんぶ] ぬぐ ことでした。',
    'でも 入[はい]って みると、だれも 他人[たにん]を 見[み]て いません。みんな ただ 静[しず]かに お湯[ゆ]に つかって います。',
    'ルールは 単純[たんじゅん]です。湯[ゆ]に 入[はい]る まえに 体[からだ]を 洗[あら]う こと、タオルを 湯[ゆ]に 入[い]れない こと。',
    '三十分[さんじゅっぷん] 後[ご]、肩[かた]の 力[ちから]が 抜[ぬ]けて いる ことに 気[き]が つきました。日本[にほん]人[じん]が 温泉[おんせん]を 愛[あい]する 理由[りゆう]が 少[すこ]し 分[わ]かりました。'
  ],
  tr:[
    'Lần đầu đi onsen, điều khiến tôi lúng túng nhất là phải cởi hết quần áo.',
    'Nhưng vào rồi mới thấy chẳng ai nhìn người khác cả. Ai cũng chỉ lặng lẽ ngâm mình trong nước nóng.',
    'Quy tắc thì đơn giản: tắm rửa sạch trước khi xuống bồn, và không nhúng khăn vào nước.',
    'Ba mươi phút sau, tôi nhận ra vai mình đã buông lỏng. Tôi hiểu được đôi chút vì sao người Nhật yêu onsen đến thế.'
  ],
  keys:[
    { w:'温泉', r:'onsen', vi:'suối nước nóng' },
    { w:'こまる', r:'komaru', vi:'lúng túng, khó xử' },
    { w:'ぬぐ', r:'nugu', vi:'cởi (quần áo)' },
    { w:'他人', r:'tanin', vi:'người khác, người lạ' },
    { w:'つかる', r:'tsukaru', vi:'ngâm mình' },
    { w:'単純', r:'tanjun', vi:'đơn giản' },
    { w:'力が 抜ける', r:'chikara ga nukeru', vi:'buông lỏng, hết căng' },
    { w:'気が つく', r:'ki ga tsuku', vi:'nhận ra' }
  ],
  qs:[
    { q:'Điều gì khiến người viết lúng túng?', o:['Nước quá nóng','Phải cởi hết quần áo','Không biết đường','Giá vé'], c:1, e:'服を 全部 ぬぐ ことでした.' },
    { q:'Quy tắc là gì?', o:['Không nói chuyện','Rửa người trước, không nhúng khăn vào nước','Không ngâm quá 10 phút','Phải đi theo nhóm'], c:1, e:'体を 洗う こと、タオルを 湯に 入れない こと.' },
    { q:'Sau 30 phút người viết nhận ra gì?', o:['Bị chóng mặt','Vai đã buông lỏng','Đói bụng','Muốn về'], c:1, e:'肩の 力が 抜けて いる ことに 気が つきました.' }
  ],
  after:'Viết 6 câu về một phong tục bạn thấy lạ lúc đầu, dùng ～て みる · ～ことに 気が つく.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Ngôn ngữ', title:'方言[ほうげん]', vi:'Phương ngữ',
  intro:'N3. Chùm từ trọng tâm: tiếng vùng miền, Kansai, sự gần gũi.',
  text:[
    '教科書[きょうかしょ]で 習[なら]った 日本語[にほんご]は 標準語[ひょうじゅんご]です。しかし 大阪[おおさか]に 行[い]くと、ほとんど 通[つう]じないような 気[き]が しました。',
    '「ありがとう」が 「おおきに」、「ちがう」が 「ちゃう」に なります。',
    '最初[さいしょ]は 分[わ]からなくて 不安[ふあん]でしたが、しばらく すると 方言[ほうげん]の ほうが あたたかく 感[かん]じられました。',
    '言葉[ことば]は 正[ただ]しさ だけで できて いるのでは ありません。その 土地[とち]の 人[ひと]の 距離[きょり]の 取[と]り方[かた]でも あります。'
  ],
  tr:[
    'Tiếng Nhật tôi học trong sách giáo khoa là tiếng chuẩn. Nhưng đến Osaka thì tôi có cảm giác gần như không hiểu được gì.',
    '“Arigatou” thành “ookini”, “chigau” thành “chau”.',
    'Lúc đầu không hiểu nên tôi thấy bất an, nhưng một thời gian sau tôi lại thấy phương ngữ ấm áp hơn.',
    'Ngôn ngữ không chỉ được làm nên bởi sự chuẩn xác. Nó còn là cách người ở vùng đất ấy giữ khoảng cách với nhau.'
  ],
  keys:[
    { w:'方言', r:'hougen', vi:'phương ngữ' },
    { w:'標準語', r:'hyoujungo', vi:'tiếng chuẩn' },
    { w:'通じる', r:'tsuujiru', vi:'hiểu được, thông' },
    { w:'～ような 気が する', r:'-you na ki ga suru', vi:'có cảm giác như' },
    { w:'不安', r:'fuan', vi:'bất an' },
    { w:'しばらく', r:'shibaraku', vi:'một lúc, một thời gian' },
    { w:'土地', r:'tochi', vi:'vùng đất' },
    { w:'距離の 取り方', r:'kyori no torikata', vi:'cách giữ khoảng cách' }
  ],
  qs:[
    { q:'Ở Osaka “ありがとう” nói thế nào?', o:['どうも','おおきに','ちゃう','あかん'], c:1, e:'「ありがとう」が 「おおきに」…' },
    { q:'Cảm giác lúc đầu?', o:['Thú vị','Bất an vì không hiểu','Bực mình','Không để ý'], c:1, e:'最初は 分からなくて 不安でした.' },
    { q:'Ý cuối của bài?', o:['Nên học tiếng chuẩn thôi','Ngôn ngữ còn là cách giữ khoảng cách giữa người với người','Phương ngữ khó quá','Osaka khác hẳn Tokyo'], c:1, e:'その 土地の 人の 距離の 取り方でも あります.' }
  ],
  after:'Viết 6 câu về phương ngữ vùng bạn, dùng ～ような 気が する · しばらく · ～だけで は ない.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Xã hội', title:'ボランティア', vi:'Làm tình nguyện',
  intro:'N3. Chùm từ trọng tâm: tình nguyện, dọn dẹp, cộng đồng.',
  text:[
    '先月[せんげつ]、町[まち]の そうじの ボランティアに 参加[さんか]しました。朝[あさ] 七時[しちじ]に 公園[こうえん]に 集[あつ]まりました。',
    '参加者[さんかしゃ]は 三十人[さんじゅうにん]ほどで、小学生[しょうがくせい]から お年寄[としよ]りまで いました。',
    '一時間[いちじかん] 歩[ある]いただけで、ゴミ袋[ぶくろ]が 五[いつ]つも いっぱいに なりました。',
    'きれいに なった 道[みち]を 見[み]ながら、「自分[じぶん]の 町[まち]」と いう 言葉[ことば]の 意味[いみ]が 少[すこ]し 変[か]わった 気[き]が しました。'
  ],
  tr:[
    'Tháng trước tôi tham gia buổi tình nguyện dọn vệ sinh khu phố. Bảy giờ sáng chúng tôi tập trung ở công viên.',
    'Có khoảng ba mươi người tham gia, từ học sinh tiểu học đến các cụ già.',
    'Chỉ đi bộ một tiếng mà đã đầy tới năm túi rác.',
    'Nhìn con đường sạch sẽ, tôi thấy nghĩa của từ “khu phố của mình” đã đổi đi đôi chút.'
  ],
  keys:[
    { w:'ボランティア', r:'borantia', vi:'tình nguyện' },
    { w:'参加する', r:'sanka suru', vi:'tham gia' },
    { w:'集まる', r:'atsumaru', vi:'tập trung' },
    { w:'～から ～まで', r:'-kara -made', vi:'từ… đến…' },
    { w:'お年寄り', r:'otoshiyori', vi:'người cao tuổi' },
    { w:'～だけで', r:'-dake de', vi:'chỉ… mà đã' },
    { w:'いっぱいに なる', r:'ippai ni naru', vi:'đầy' },
    { w:'意味', r:'imi', vi:'ý nghĩa' }
  ],
  qs:[
    { q:'Có bao nhiêu người tham gia?', o:['Khoảng 10','Khoảng 20','Khoảng 30','Khoảng 50'], c:2, e:'参加者は 三十人ほどで…' },
    { q:'Một tiếng thu được bao nhiêu túi rác?', o:['Hai','Ba','Bốn','Năm'], c:3, e:'ゴミ袋が 五つも いっぱいに なりました.' },
    { q:'Điều gì thay đổi trong người viết?', o:['Thói quen dậy sớm','Ý nghĩa của từ “khu phố của mình”','Cách phân loại rác','Quan hệ với hàng xóm'], c:1, e:'「自分の 町」と いう 言葉の 意味が 少し 変わった…' }
  ],
  after:'Viết 6 câu về một hoạt động cộng đồng, dùng ～から ～まで · ～だけで · ～気が する.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Ngôn ngữ', title:'はっきり 言[い]わない 文化[ぶんか]', vi:'Văn hoá không nói thẳng',
  intro:'N3. Chùm từ trọng tâm: cách từ chối gián tiếp, đọc không khí, hiểu lầm.',
  text:[
    '日本語[にほんご]で いちばん むずかしいのは 文法[ぶんぽう]では なく、「言[い]わない こと」を 読[よ]む ことです。',
    '「ちょっと…」で 終[お]わる 文[ぶん]は、たいてい 「できません」と いう 意味[いみ]です。',
    '「考[かんが]えて おきます」も、多[おお]くの 場合[ばあい] 断[ことわ]りの 言葉[ことば]です。',
    'はじめは 不[ふ]しんせつだと 思[おも]いました。でも いまは、相手[あいて]を きずつけない ための 工夫[くふう]だと 理解[りかい]して います。'
  ],
  tr:[
    'Thứ khó nhất trong tiếng Nhật không phải ngữ pháp mà là đọc được “điều không nói ra”.',
    'Câu kết thúc bằng “chotto…” hầu như đều mang nghĩa “không được đâu”.',
    '“Tôi sẽ suy nghĩ” cũng là lời từ chối trong phần lớn trường hợp.',
    'Ban đầu tôi thấy như vậy là thiếu thân thiện. Nhưng giờ tôi hiểu đó là cách người ta khéo léo để không làm tổn thương đối phương.'
  ],
  keys:[
    { w:'はっきり', r:'hakkiri', vi:'rõ ràng, dứt khoát' },
    { w:'文法', r:'bunpou', vi:'ngữ pháp' },
    { w:'たいてい', r:'taitei', vi:'hầu hết, thường' },
    { w:'場合', r:'baai', vi:'trường hợp' },
    { w:'断り', r:'kotowari', vi:'lời từ chối' },
    { w:'不しんせつ', r:'fu-shinsetsu', vi:'thiếu tử tế' },
    { w:'きずつける', r:'kizutsukeru', vi:'làm tổn thương' },
    { w:'工夫', r:'kufuu', vi:'sự khéo léo, cách xoay xở' }
  ],
  qs:[
    { q:'Theo bài, điều khó nhất là gì?', o:['Ngữ pháp','Đọc được điều không nói ra','Kanji','Kính ngữ'], c:1, e:'文法では なく、「言わない こと」を 読む ことです.' },
    { q:'“ちょっと…” thường nghĩa là gì?', o:['Đợi một chút','Không được đâu','Có lẽ được','Để mai tính'], c:1, e:'たいてい 「できません」と いう 意味です.' },
    { q:'Bây giờ người viết hiểu thế nào?', o:['Vẫn thấy thiếu thân thiện','Là cách để không làm tổn thương người khác','Là thói quen xấu','Là do nhút nhát'], c:1, e:'相手を きずつけない ための 工夫だと 理解して います.' }
  ],
  after:'Viết 6 câu so sánh cách từ chối ở Việt Nam và Nhật, dùng ～では なく · たいてい · ～ための.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Công việc', title:'日本[にほん]で はたらく こと', vi:'Đi làm ở Nhật',
  intro:'N3. Chùm từ trọng tâm: giờ làm, báo cáo, thay đổi gần đây.',
  text:[
    '日本[にほん]の 会社[かいしゃ]は 残業[ざんぎょう]が 多[おお]いと よく 言[い]われます。たしかに 以前[いぜん]は そうでした。',
    'しかし 最近[さいきん]は 「働[はたら]き方[かた] 改革[かいかく]」と いう 言葉[ことば]が 広[ひろ]まり、早[はや]く 帰[かえ]る 会社[かいしゃ]も 増[ふ]えて います。',
    'わたしの 会社[かいしゃ]では 「報[ほう]・連[れん]・相[そう]」——報告[ほうこく]・連絡[れんらく]・相談[そうだん]——が とても 大切[たいせつ]に されて います。',
    '小[ちい]さな ことでも 早[はや]めに 相談[そうだん]する。この 習慣[しゅうかん]は、国[くに]に 帰[かえ]っても 続[つづ]けたいと 思[おも]います。'
  ],
  tr:[
    'Người ta hay nói công ty Nhật làm thêm giờ nhiều. Đúng là trước đây như vậy.',
    'Nhưng gần đây cụm từ “cải cách cách làm việc” lan rộng, và số công ty cho về sớm cũng tăng lên.',
    'Ở công ty tôi, “hou-ren-sou” — báo cáo, liên lạc, bàn bạc — được coi trọng vô cùng.',
    'Việc nhỏ cũng phải hỏi ý sớm. Thói quen ấy, tôi muốn giữ cả khi về nước.'
  ],
  keys:[
    { w:'残業', r:'zangyou', vi:'làm thêm giờ' },
    { w:'～と 言われる', r:'-to iwareru', vi:'được cho là, người ta nói' },
    { w:'たしかに', r:'tashika ni', vi:'quả thực là' },
    { w:'以前', r:'izen', vi:'trước đây' },
    { w:'広まる', r:'hiromaru', vi:'lan rộng' },
    { w:'報告', r:'houkoku', vi:'báo cáo' },
    { w:'相談する', r:'soudan suru', vi:'bàn bạc, hỏi ý' },
    { w:'習慣', r:'shuukan', vi:'thói quen' }
  ],
  qs:[
    { q:'“働き方改革” dẫn đến điều gì?', o:['Lương tăng','Nhiều công ty cho về sớm hơn','Tuyển thêm người','Làm từ xa'], c:1, e:'早く 帰る 会社も 増えて います.' },
    { q:'“報・連・相” gồm những gì?', o:['Báo cáo, liên lạc, bàn bạc','Học, hỏi, làm','Nhanh, đúng, rẻ','Chào, cảm ơn, xin lỗi'], c:0, e:'報告・連絡・相談.' },
    { q:'Người viết muốn giữ điều gì?', o:['Làm thêm giờ','Thói quen hỏi ý sớm','Giờ giấc nghiêm','Đồng phục'], c:1, e:'小さな ことでも 早めに 相談する… 続けたいと 思います.' }
  ],
  after:'Viết 6 câu về văn hoá công sở bạn biết, dùng ～と 言われる · たしかに · ～たいと 思う.' },

{ lang:'ja', lv:'n3', mins:5, cat:'Đời sống', title:'外国人[がいこくじん]として 暮[く]らす', vi:'Sống với tư cách người nước ngoài',
  intro:'N3. Chùm từ trọng tâm: thủ tục, khoảng cách, thuộc về.',
  text:[
    '外国[がいこく]で 暮[く]らすと、当[あ]たり前[まえ]だった ことが 当[あ]たり前[まえ]では なく なります。',
    '銀行[ぎんこう]の 口座[こうざ]を 作[つく]るのにも、部屋[へや]を 借[か]りるのにも、書類[しょるい]が たくさん 必要[ひつよう]です。',
    'ときどき、自分[じぶん]が この 社会[しゃかい]の 「外[そと]」に いるように 感[かん]じます。',
    'それでも、近[ちか]所[じょ]の 人[ひと]が 名前[なまえ]を 覚[おぼ]えて くれた 日[ひ]、わたしは たしかに ここに 住[す]んで いると 思[おも]いました。'
  ],
  tr:[
    'Sống ở nước ngoài, những thứ vốn là đương nhiên bỗng không còn đương nhiên nữa.',
    'Mở tài khoản ngân hàng cũng cần, thuê phòng cũng cần, rất nhiều giấy tờ.',
    'Đôi khi tôi cảm thấy mình đang đứng ở “bên ngoài” xã hội này.',
    'Dù vậy, cái ngày người hàng xóm nhớ được tên tôi, tôi đã nghĩ rằng mình đúng là đang sống ở đây thật.'
  ],
  keys:[
    { w:'暮らす', r:'kurasu', vi:'sinh sống' },
    { w:'当たり前', r:'atarimae', vi:'đương nhiên' },
    { w:'口座', r:'kouza', vi:'tài khoản ngân hàng' },
    { w:'書類', r:'shorui', vi:'giấy tờ' },
    { w:'必要', r:'hitsuyou', vi:'cần thiết' },
    { w:'～ように 感じる', r:'-you ni kanjiru', vi:'cảm thấy như' },
    { w:'それでも', r:'sore demo', vi:'dù vậy' },
    { w:'覚える', r:'oboeru', vi:'nhớ' }
  ],
  qs:[
    { q:'Việc gì cần nhiều giấy tờ?', o:['Đi tàu','Mở tài khoản và thuê phòng','Mua đồ','Đăng ký học'], c:1, e:'銀行の 口座を 作るのにも、部屋を 借りるのにも…' },
    { q:'Người viết đôi khi cảm thấy gì?', o:['Rất thoải mái','Như đang ở “bên ngoài” xã hội','Muốn về nước','Không khác gì người bản xứ'], c:1, e:'この 社会の 「外」に いるように 感じます.' },
    { q:'Điều gì làm người viết thấy thuộc về nơi đó?', o:['Có việc làm','Hàng xóm nhớ được tên mình','Nói tiếng Nhật tốt','Có nhà riêng'], c:1, e:'近所の 人が 名前を 覚えて くれた 日…' }
  ],
  after:'Viết 6 câu về cảm giác sống ở nơi xa lạ, dùng 当たり前 · ～ように 感じる · それでも.' }

  );
})();
