/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG PHÁP
   ------------------------------------------------------------
   Mức A1 · A2 · B1 — đọc để nhặt từ trong ngữ cảnh, không phải để thi.
   Đẩy thêm vào mảng READINGS của js/readings.js (nạp SAU tệp đó).

   Nhân vật xuyên suốt: Quân, sinh viên Hà Nội sang Pháp học. Tình huống
   bám đời sống thật — làm thủ tục, thuê nhà, đi chợ, đi tàu, gặp hành chính.

   Nội dung do LangLab tự biên soạn, không chép từ giáo trình nào.
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'fr', lv:'a1', mins:3, cat:'Đời sống', title:'Le premier matin', vi:'Buổi sáng đầu tiên',
  intro:'A1. Chùm từ trọng tâm: giờ giấc, thói quen buổi sáng, động từ nhóm -er.',
  text:[
    'Quân arrive à Lyon un mardi. Il ouvre la fenêtre à sept heures.',
    'Il fait froid. La rue est calme. Une boulangerie ouvre en face.',
    'Il achète une baguette et un café. Le vendeur parle vite.',
    'Quân ne comprend pas tout, mais il sourit. Il comprend le mot «merci».'
  ],
  tr:[
    'Quân đến Lyon vào một ngày thứ Ba. Bảy giờ, cậu mở cửa sổ.',
    'Trời lạnh. Con phố yên tĩnh. Một tiệm bánh mở cửa ở phía đối diện.',
    'Cậu mua một ổ bánh mì và một tách cà phê. Người bán nói rất nhanh.',
    'Quân không hiểu hết, nhưng cậu mỉm cười. Cậu hiểu được từ «cảm ơn».'
  ],
  keys:[
    { w:'le matin', r:'/ma.tɛ̃/', vi:'buổi sáng' },
    { w:'la fenêtre', r:'/fə.nɛtʁ/', vi:'cửa sổ' },
    { w:'la rue', r:'/ʁy/', vi:'con phố' },
    { w:'la boulangerie', r:'/bu.lɑ̃ʒ.ʁi/', vi:'tiệm bánh mì' },
    { w:'acheter', r:'/aʃ.te/', vi:'mua' },
    { w:'comprendre', r:'/kɔ̃.pʁɑ̃dʁ/', vi:'hiểu' },
    { w:'vite', r:'/vit/', vi:'nhanh' },
    { w:'merci', r:'/mɛʁ.si/', vi:'cảm ơn' }
  ],
  qs:[
    { q:'Quân mở cửa sổ lúc mấy giờ?', o:['6 giờ','7 giờ','8 giờ','9 giờ'], c:1, e:'Il ouvre la fenêtre à sept heures.' },
    { q:'Cậu mua gì?', o:['Bánh mì và cà phê','Bánh ngọt và trà','Sữa và trứng','Không mua gì'], c:0, e:'Il achète une baguette et un café.' },
    { q:'Vì sao cậu không hiểu hết?', o:['Vì cậu chưa ngủ dậy','Vì người bán nói nhanh','Vì ngoài phố ồn','Vì cậu quên kính'], c:1, e:'Le vendeur parle vite.' }
  ],
  after:'Viết 4 câu về buổi sáng của bạn, dùng: à sept heures · il fait froid · j’achète.' },

{ lang:'fr', lv:'a1', mins:3, cat:'Ẩm thực', title:'Au marché du samedi', vi:'Ở chợ phiên thứ Bảy',
  intro:'A1. Chùm từ trọng tâm: rau quả, số lượng, cách hỏi giá.',
  text:[
    'Le samedi, il y a un marché sur la place.',
    'Quân achète des tomates, deux kilos de pommes et un peu de fromage.',
    'Il demande : «C’est combien, s’il vous plaît ?»',
    'La marchande répond : «Six euros cinquante.» Elle ajoute une pomme pour lui.'
  ],
  tr:[
    'Thứ Bảy, ở quảng trường có phiên chợ.',
    'Quân mua cà chua, hai cân táo và một ít phô mai.',
    'Cậu hỏi: «Cái này bao nhiêu tiền ạ?»',
    'Bà bán hàng đáp: «Sáu euro rưỡi.» Bà còn cho thêm cậu một quả táo.'
  ],
  keys:[
    { w:'le marché', r:'/maʁ.ʃe/', vi:'chợ' },
    { w:'la place', r:'/plas/', vi:'quảng trường' },
    { w:'la tomate', r:'/tɔ.mat/', vi:'quả cà chua' },
    { w:'la pomme', r:'/pɔm/', vi:'quả táo' },
    { w:'le fromage', r:'/fʁɔ.maʒ/', vi:'phô mai' },
    { w:'combien', r:'/kɔ̃.bjɛ̃/', vi:'bao nhiêu' },
    { w:'un peu de', r:'/œ̃ pø də/', vi:'một ít' },
    { w:'la marchande', r:'/maʁ.ʃɑ̃d/', vi:'người bán hàng (nữ)' }
  ],
  qs:[
    { q:'Chợ họp vào ngày nào?', o:['Thứ Sáu','Thứ Bảy','Chủ nhật','Thứ Hai'], c:1, e:'Le samedi, il y a un marché sur la place.' },
    { q:'Quân mua bao nhiêu táo?', o:['Một cân','Hai cân','Ba cân','Nửa cân'], c:1, e:'deux kilos de pommes.' },
    { q:'Bà bán hàng làm thêm điều gì?', o:['Giảm giá','Cho thêm một quả táo','Gói lại cẩn thận','Chỉ đường'], c:1, e:'Elle ajoute une pomme pour lui.' }
  ],
  after:'Viết một đoạn hội thoại mua hàng 4 lượt, dùng: c’est combien · un peu de · s’il vous plaît.' },

{ lang:'fr', lv:'a1', mins:3, cat:'Học tập', title:'Le premier cours', vi:'Buổi học đầu tiên',
  intro:'A1. Chùm từ trọng tâm: lớp học, giới thiệu bản thân, quốc tịch.',
  text:[
    'Dans la classe, il y a douze étudiants et une professeure.',
    'Chacun se présente. «Je m’appelle Quân. Je suis vietnamien. J’ai vingt et un ans.»',
    'Une fille dit : «Moi, je suis brésilienne. J’habite ici depuis trois mois.»',
    'La professeure écrit au tableau : «Bienvenue.» Tout le monde répète le mot.'
  ],
  tr:[
    'Trong lớp có mười hai sinh viên và một cô giáo.',
    'Mỗi người tự giới thiệu. «Tôi tên là Quân. Tôi là người Việt Nam. Tôi hai mươi mốt tuổi.»',
    'Một cô gái nói: «Còn tôi là người Brazil. Tôi sống ở đây được ba tháng rồi.»',
    'Cô giáo viết lên bảng: «Chào mừng.» Cả lớp nhắc lại từ đó.'
  ],
  keys:[
    { w:'la classe', r:'/klas/', vi:'lớp học' },
    { w:'l’étudiant', r:'/e.ty.djɑ̃/', vi:'sinh viên' },
    { w:'se présenter', r:'/sə pʁe.zɑ̃.te/', vi:'tự giới thiệu' },
    { w:'vietnamien', r:'/vjɛt.na.mjɛ̃/', vi:'người Việt Nam' },
    { w:'habiter', r:'/a.bi.te/', vi:'sống, ở' },
    { w:'depuis', r:'/də.pɥi/', vi:'từ, được (bao lâu)' },
    { w:'le tableau', r:'/ta.blo/', vi:'cái bảng' },
    { w:'répéter', r:'/ʁe.pe.te/', vi:'nhắc lại' }
  ],
  qs:[
    { q:'Trong lớp có bao nhiêu sinh viên?', o:['Mười','Mười hai','Hai mươi','Hai mươi mốt'], c:1, e:'il y a douze étudiants.' },
    { q:'Quân bao nhiêu tuổi?', o:['20','21','22','23'], c:1, e:'J’ai vingt et un ans.' },
    { q:'Cô gái người Brazil đã ở đây bao lâu?', o:['Một tháng','Ba tháng','Sáu tháng','Một năm'], c:1, e:'J’habite ici depuis trois mois.' }
  ],
  after:'Tự giới thiệu bằng 4 câu, dùng: je m’appelle · je suis · j’ai … ans · depuis.' },

{ lang:'fr', lv:'a1', mins:3, cat:'Đời sống', title:'La chambre de Quân', vi:'Căn phòng của Quân',
  intro:'A1. Chùm từ trọng tâm: đồ đạc trong phòng, giới từ vị trí.',
  text:[
    'La chambre est petite mais claire. Il y a un lit, une table et une chaise.',
    'L’armoire est à gauche de la porte. La fenêtre donne sur une cour.',
    'Sur la table, il y a un ordinateur et trois livres.',
    'Sous le lit, Quân range sa valise. Il n’a pas beaucoup de choses.'
  ],
  tr:[
    'Căn phòng nhỏ nhưng sáng. Có một cái giường, một cái bàn và một cái ghế.',
    'Cái tủ ở bên trái cửa. Cửa sổ nhìn ra một cái sân.',
    'Trên bàn có một máy tính và ba quyển sách.',
    'Dưới gầm giường, Quân cất cái vali. Cậu không có nhiều đồ.'
  ],
  keys:[
    { w:'la chambre', r:'/ʃɑ̃bʁ/', vi:'phòng ngủ' },
    { w:'clair', r:'/klɛʁ/', vi:'sáng sủa' },
    { w:'l’armoire', r:'/aʁ.mwaʁ/', vi:'cái tủ' },
    { w:'la cour', r:'/kuʁ/', vi:'cái sân' },
    { w:'l’ordinateur', r:'/ɔʁ.di.na.tœʁ/', vi:'máy tính' },
    { w:'ranger', r:'/ʁɑ̃.ʒe/', vi:'cất, xếp gọn' },
    { w:'la valise', r:'/va.liz/', vi:'cái vali' },
    { w:'beaucoup de', r:'/bo.ku də/', vi:'nhiều' }
  ],
  qs:[
    { q:'Cái tủ ở đâu?', o:['Bên phải cửa','Bên trái cửa','Dưới gầm giường','Cạnh cửa sổ'], c:1, e:'L’armoire est à gauche de la porte.' },
    { q:'Trên bàn có gì?', o:['Một máy tính và ba quyển sách','Một cái vali','Một cái đèn','Không có gì'], c:0, e:'Sur la table, il y a un ordinateur et trois livres.' },
    { q:'Cửa sổ nhìn ra đâu?', o:['Ra phố','Ra một cái sân','Ra vườn','Ra bãi đỗ xe'], c:1, e:'La fenêtre donne sur une cour.' }
  ],
  after:'Tả phòng bạn bằng 4 câu, dùng: il y a · à gauche de · sur · sous.' },

{ lang:'fr', lv:'a1', mins:3, cat:'Đường phố', title:'Demander son chemin', vi:'Hỏi đường',
  intro:'A1. Chùm từ trọng tâm: chỉ đường, mệnh lệnh thức, phương hướng.',
  text:[
    'Quân cherche la gare. Il demande à une dame.',
    '«Pardon, madame, où est la gare, s’il vous plaît ?»',
    '«Allez tout droit, puis tournez à droite après la pharmacie.»',
    '«C’est loin ?» «Non, dix minutes à pied.» Quân la remercie et part.'
  ],
  tr:[
    'Quân tìm nhà ga. Cậu hỏi một bà.',
    '«Xin lỗi bà, nhà ga ở đâu ạ?»',
    '«Cứ đi thẳng, rồi rẽ phải sau hiệu thuốc.»',
    '«Có xa không ạ?» «Không, mười phút đi bộ.» Quân cảm ơn bà rồi đi.'
  ],
  keys:[
    { w:'la gare', r:'/ɡaʁ/', vi:'nhà ga' },
    { w:'tout droit', r:'/tu dʁwa/', vi:'đi thẳng' },
    { w:'tourner', r:'/tuʁ.ne/', vi:'rẽ, quay' },
    { w:'à droite', r:'/a dʁwat/', vi:'bên phải' },
    { w:'la pharmacie', r:'/faʁ.ma.si/', vi:'hiệu thuốc' },
    { w:'loin', r:'/lwɛ̃/', vi:'xa' },
    { w:'à pied', r:'/a pje/', vi:'đi bộ' },
    { w:'remercier', r:'/ʁə.mɛʁ.sje/', vi:'cảm ơn' }
  ],
  qs:[
    { q:'Quân tìm gì?', o:['Hiệu thuốc','Nhà ga','Tiệm bánh','Bưu điện'], c:1, e:'Quân cherche la gare.' },
    { q:'Phải rẽ ở đâu?', o:['Trước hiệu thuốc','Sau hiệu thuốc','Ở quảng trường','Ở ngã tư đầu tiên'], c:1, e:'tournez à droite après la pharmacie.' },
    { q:'Đi bộ mất bao lâu?', o:['Năm phút','Mười phút','Mười lăm phút','Nửa tiếng'], c:1, e:'dix minutes à pied.' }
  ],
  after:'Viết chỉ dẫn từ nhà bạn tới chợ gần nhất, dùng: allez tout droit · tournez à · après.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Hành chính', title:'À la préfecture', vi:'Ở sở hành chính',
  intro:'A2. Chùm từ trọng tâm: giấy tờ, xếp hàng, thì quá khứ kép.',
  text:[
    'Quân est arrivé à huit heures. Il y avait déjà trente personnes devant la porte.',
    'Il a pris un ticket et il a attendu deux heures.',
    'Au guichet, l’employée a demandé son passeport, une photo et un justificatif de domicile.',
    'Il avait oublié le justificatif. Il doit revenir la semaine prochaine.',
    'En sortant, il a écrit la liste sur son téléphone. Cette fois, il n’oubliera rien.'
  ],
  tr:[
    'Quân đến lúc tám giờ. Trước cửa đã có ba mươi người.',
    'Cậu lấy số và đợi hai tiếng.',
    'Ở quầy, cô nhân viên hỏi hộ chiếu, một tấm ảnh và giấy chứng nhận chỗ ở.',
    'Cậu đã quên mất giấy chứng nhận chỗ ở. Cậu phải quay lại vào tuần sau.',
    'Lúc ra về, cậu ghi danh sách vào điện thoại. Lần này thì sẽ không quên gì nữa.'
  ],
  keys:[
    { w:'la préfecture', r:'/pʁe.fɛk.tyʁ/', vi:'sở hành chính tỉnh' },
    { w:'le guichet', r:'/ɡi.ʃɛ/', vi:'quầy giao dịch' },
    { w:'le passeport', r:'/pas.pɔʁ/', vi:'hộ chiếu' },
    { w:'le justificatif', r:'/ʒys.ti.fi.ka.tif/', vi:'giấy chứng nhận' },
    { w:'le domicile', r:'/dɔ.mi.sil/', vi:'nơi cư trú' },
    { w:'oublier', r:'/u.bli.je/', vi:'quên' },
    { w:'revenir', r:'/ʁəv.niʁ/', vi:'quay lại' },
    { w:'la semaine prochaine', r:'/sə.mɛn pʁɔ.ʃɛn/', vi:'tuần sau' }
  ],
  qs:[
    { q:'Quân đợi bao lâu?', o:['Một tiếng','Hai tiếng','Ba tiếng','Nửa tiếng'], c:1, e:'il a attendu deux heures.' },
    { q:'Cậu thiếu giấy gì?', o:['Hộ chiếu','Ảnh','Giấy chứng nhận chỗ ở','Giấy khai sinh'], c:2, e:'Il avait oublié le justificatif.' },
    { q:'Cậu làm gì lúc ra về?', o:['Gọi điện về nhà','Ghi danh sách vào điện thoại','Đi ăn trưa','Quay lại quầy'], c:1, e:'il a écrit la liste sur son téléphone.' }
  ],
  after:'Kể một lần bạn đi làm giấy tờ, dùng: je suis arrivé · j’ai attendu · j’avais oublié.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Đời sống', title:'Chercher un logement', vi:'Đi tìm chỗ ở',
  intro:'A2. Chùm từ trọng tâm: thuê nhà, mô tả căn hộ, so sánh.',
  text:[
    'Quân a visité trois appartements en une semaine.',
    'Le premier était grand mais très cher. Le deuxième était moins cher, mais loin du centre.',
    'Le troisième est plus petit que les autres, pourtant il est clair et bien situé.',
    'Le propriétaire a demandé un garant. Un ami de Quân a accepté de signer.',
    'Maintenant Quân a les clés. Il range ses affaires et il respire.'
  ],
  tr:[
    'Trong một tuần, Quân đi xem ba căn hộ.',
    'Căn thứ nhất rộng nhưng rất đắt. Căn thứ hai rẻ hơn, nhưng xa trung tâm.',
    'Căn thứ ba nhỏ hơn hai căn kia, thế mà lại sáng và ở vị trí thuận tiện.',
    'Chủ nhà yêu cầu có người bảo lãnh. Một người bạn của Quân đồng ý ký.',
    'Giờ thì Quân đã có chìa khoá. Cậu xếp đồ đạc và thở phào.'
  ],
  keys:[
    { w:'le logement', r:'/lɔʒ.mɑ̃/', vi:'chỗ ở' },
    { w:'l’appartement', r:'/a.paʁ.tə.mɑ̃/', vi:'căn hộ' },
    { w:'cher', r:'/ʃɛʁ/', vi:'đắt' },
    { w:'le centre', r:'/sɑ̃tʁ/', vi:'trung tâm' },
    { w:'le propriétaire', r:'/pʁɔ.pʁi.je.tɛʁ/', vi:'chủ nhà' },
    { w:'le garant', r:'/ɡa.ʁɑ̃/', vi:'người bảo lãnh' },
    { w:'signer', r:'/si.ɲe/', vi:'ký' },
    { w:'les affaires', r:'/a.fɛʁ/', vi:'đồ đạc' }
  ],
  qs:[
    { q:'Quân xem mấy căn hộ?', o:['Hai','Ba','Bốn','Năm'], c:1, e:'Quân a visité trois appartements.' },
    { q:'Vì sao cậu không chọn căn thứ hai?', o:['Quá đắt','Xa trung tâm','Quá tối','Chủ nhà khó tính'], c:1, e:'moins cher, mais loin du centre.' },
    { q:'Chủ nhà yêu cầu gì?', o:['Trả trước sáu tháng','Có người bảo lãnh','Hợp đồng lao động','Không yêu cầu gì'], c:1, e:'Le propriétaire a demandé un garant.' }
  ],
  after:'So sánh hai chỗ ở bạn từng biết, dùng: plus … que · moins … que · pourtant.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Đường phố', title:'Le train de dix-huit heures', vi:'Chuyến tàu mười tám giờ',
  intro:'A2. Chùm từ trọng tâm: đi tàu, giờ 24 tiếng, tương lai gần.',
  text:[
    'Le train pour Paris part à dix-huit heures douze, voie sept.',
    'Quân va composter son billet, puis il monte dans la voiture douze.',
    'Une annonce dit que le train aura dix minutes de retard.',
    'Personne ne s’énerve. Les gens ouvrent un livre ou ferment les yeux.',
    'À l’arrivée, il fait déjà nuit. La gare sent le café et le pain chaud.'
  ],
  tr:[
    'Chuyến tàu đi Paris khởi hành lúc 18 giờ 12, đường ray số bảy.',
    'Quân đi dập vé, rồi lên toa số mười hai.',
    'Loa thông báo tàu sẽ chậm mười phút.',
    'Không ai cáu. Mọi người mở sách ra đọc hoặc nhắm mắt lại.',
    'Lúc tới nơi thì trời đã tối. Nhà ga thoảng mùi cà phê và bánh mì nóng.'
  ],
  keys:[
    { w:'le train', r:'/tʁɛ̃/', vi:'tàu hoả' },
    { w:'la voie', r:'/vwa/', vi:'đường ray, sân ga' },
    { w:'le billet', r:'/bi.jɛ/', vi:'vé' },
    { w:'la voiture', r:'/vwa.tyʁ/', vi:'toa tàu; xe hơi' },
    { w:'l’annonce', r:'/a.nɔ̃s/', vi:'thông báo' },
    { w:'le retard', r:'/ʁə.taʁ/', vi:'sự chậm trễ' },
    { w:'s’énerver', r:'/se.nɛʁ.ve/', vi:'cáu, bực' },
    { w:'l’arrivée', r:'/a.ʁi.ve/', vi:'lúc tới nơi' }
  ],
  qs:[
    { q:'Tàu chạy lúc mấy giờ?', o:['17 giờ 12','18 giờ 12','18 giờ 20','19 giờ 12'], c:1, e:'part à dix-huit heures douze.' },
    { q:'Tàu chậm bao lâu?', o:['Năm phút','Mười phút','Mười lăm phút','Không chậm'], c:1, e:'le train aura dix minutes de retard.' },
    { q:'Mọi người phản ứng thế nào?', o:['Cáu gắt','Bình thản đọc sách hoặc nhắm mắt','Đòi trả vé','Xuống tàu'], c:1, e:'Personne ne s’énerve.' }
  ],
  after:'Kể một chuyến đi bằng tàu, dùng: partir à · avoir du retard · à l’arrivée.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Ẩm thực', title:'Le repas de midi', vi:'Bữa trưa',
  intro:'A2. Chùm từ trọng tâm: gọi món, thực đơn trong ngày, mạo từ bộ phận.',
  text:[
    'À midi, Quân entre dans un petit restaurant près de la fac.',
    'Il prend le menu du jour : une entrée, un plat et un dessert.',
    'Il commande de la soupe, du poulet avec des haricots verts, et une tarte aux pommes.',
    'Le serveur apporte aussi du pain et une carafe d’eau, sans rien demander.',
    'Quân comprend enfin pourquoi le déjeuner dure une heure ici.'
  ],
  tr:[
    'Buổi trưa, Quân vào một quán ăn nhỏ gần trường.',
    'Cậu gọi thực đơn trong ngày: một món khai vị, một món chính và một món tráng miệng.',
    'Cậu gọi xúp, thịt gà với đậu que, và bánh táo.',
    'Người phục vụ còn mang thêm bánh mì và một bình nước, chẳng cần hỏi gì.',
    'Quân cuối cùng cũng hiểu vì sao bữa trưa ở đây kéo dài một tiếng.'
  ],
  keys:[
    { w:'le repas', r:'/ʁə.pɑ/', vi:'bữa ăn' },
    { w:'le menu du jour', r:'/mə.ny dy ʒuʁ/', vi:'thực đơn trong ngày' },
    { w:'l’entrée', r:'/ɑ̃.tʁe/', vi:'món khai vị' },
    { w:'le plat', r:'/pla/', vi:'món chính' },
    { w:'le dessert', r:'/de.sɛʁ/', vi:'món tráng miệng' },
    { w:'commander', r:'/kɔ.mɑ̃.de/', vi:'gọi món' },
    { w:'le serveur', r:'/sɛʁ.vœʁ/', vi:'người phục vụ' },
    { w:'la carafe', r:'/ka.ʁaf/', vi:'bình nước' }
  ],
  qs:[
    { q:'Thực đơn trong ngày gồm mấy món?', o:['Hai','Ba','Bốn','Năm'], c:1, e:'une entrée, un plat et un dessert.' },
    { q:'Người phục vụ mang thêm gì?', o:['Cà phê','Bánh mì và bình nước','Rượu vang','Không mang gì'], c:1, e:'apporte aussi du pain et une carafe d’eau.' },
    { q:'Bữa trưa kéo dài bao lâu?', o:['Nửa tiếng','Một tiếng','Hai tiếng','Mười lăm phút'], c:1, e:'le déjeuner dure une heure ici.' }
  ],
  after:'Gọi một bữa trưa bằng 4 câu, dùng: je prends · de la · du · des.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Đời sống', title:'Une lettre de la banque', vi:'Một lá thư của ngân hàng',
  intro:'A2. Chùm từ trọng tâm: ngân hàng, thư từ hành chính, đại từ tân ngữ.',
  text:[
    'Une lettre est arrivée. Quân l’ouvre lentement.',
    'La banque lui demande de confirmer son adresse avant la fin du mois.',
    'Il ne connaît pas tous les mots, alors il cherche les plus importants.',
    'Il écrit une réponse courte, il la relit deux fois, puis il l’envoie.',
    'Trois jours après, la banque lui répond : «Dossier complet.» Il est content.'
  ],
  tr:[
    'Một lá thư đến. Quân từ từ mở ra.',
    'Ngân hàng yêu cầu cậu xác nhận địa chỉ trước cuối tháng.',
    'Cậu không biết hết các từ, nên tra những từ quan trọng nhất.',
    'Cậu viết một câu trả lời ngắn, đọc lại hai lần, rồi gửi đi.',
    'Ba ngày sau, ngân hàng trả lời: «Hồ sơ đã đủ.» Cậu thấy nhẹ cả người.'
  ],
  keys:[
    { w:'la lettre', r:'/lɛtʁ/', vi:'lá thư' },
    { w:'la banque', r:'/bɑ̃k/', vi:'ngân hàng' },
    { w:'confirmer', r:'/kɔ̃.fiʁ.me/', vi:'xác nhận' },
    { w:'l’adresse', r:'/a.dʁɛs/', vi:'địa chỉ' },
    { w:'chercher', r:'/ʃɛʁ.ʃe/', vi:'tìm, tra' },
    { w:'relire', r:'/ʁə.liʁ/', vi:'đọc lại' },
    { w:'envoyer', r:'/ɑ̃.vwa.je/', vi:'gửi' },
    { w:'le dossier', r:'/do.sje/', vi:'hồ sơ' }
  ],
  qs:[
    { q:'Ngân hàng yêu cầu gì?', o:['Nộp thêm tiền','Xác nhận địa chỉ','Đổi mật khẩu','Tới trực tiếp'], c:1, e:'de confirmer son adresse.' },
    { q:'Quân đọc lại thư trả lời mấy lần?', o:['Một lần','Hai lần','Ba lần','Không đọc lại'], c:1, e:'il la relit deux fois.' },
    { q:'Bao lâu sau thì ngân hàng trả lời?', o:['Một ngày','Ba ngày','Một tuần','Một tháng'], c:1, e:'Trois jours après, la banque lui répond.' }
  ],
  after:'Viết một thư trả lời ngắn 4 câu, dùng: je confirme · avant le · je vous remercie.' }
,

{ lang:'fr', lv:'a2', mins:4, cat:'Văn hoá', title:'Le dimanche de la ville', vi:'Chủ nhật của thành phố',
  intro:'A2. Chùm từ trọng tâm: ngày nghỉ, thói quen xã hội, thì chưa hoàn thành.',
  text:[
    'Le dimanche, presque tout est fermé. Quân l’a appris le premier week-end.',
    'Avant, il faisait ses courses n’importe quand. Maintenant il pense au samedi soir.',
    'Les gens marchent lentement, s’arrêtent, discutent au milieu du trottoir.',
    'Dans le parc, trois hommes jouent à la pétanque depuis deux heures.',
    'Quân s’assoit sur un banc et ne fait rien. C’est plus difficile qu’il ne croyait.'
  ],
  tr:[
    'Chủ nhật thì gần như mọi thứ đều đóng cửa. Quân học được điều đó ngay cuối tuần đầu tiên.',
    'Trước đây cậu đi chợ lúc nào cũng được. Bây giờ thì phải nhớ tới tối thứ Bảy.',
    'Người ta đi chậm rãi, dừng lại, đứng nói chuyện ngay giữa vỉa hè.',
    'Trong công viên, ba ông đã chơi bi sắt suốt hai tiếng.',
    'Quân ngồi xuống ghế đá và không làm gì cả. Việc đó khó hơn cậu tưởng.'
  ],
  keys:[
    { w:'le dimanche', r:'/di.mɑ̃ʃ/', vi:'Chủ nhật' },
    { w:'fermé', r:'/fɛʁ.me/', vi:'đóng cửa' },
    { w:'les courses', r:'/kuʁs/', vi:'việc đi chợ' },
    { w:'le trottoir', r:'/tʁɔ.twaʁ/', vi:'vỉa hè' },
    { w:'le parc', r:'/paʁk/', vi:'công viên' },
    { w:'le banc', r:'/bɑ̃/', vi:'ghế đá' },
    { w:'lentement', r:'/lɑ̃t.mɑ̃/', vi:'chậm rãi' },
    { w:'croire', r:'/kʁwaʁ/', vi:'nghĩ, tưởng' }
  ],
  qs:[
    { q:'Chủ nhật thì thế nào?', o:['Mọi thứ mở cửa','Gần như mọi thứ đóng cửa','Chỉ siêu thị mở','Chợ họp cả ngày'], c:1, e:'Le dimanche, presque tout est fermé.' },
    { q:'Giờ Quân phải nhớ đi chợ khi nào?', o:['Sáng Chủ nhật','Tối thứ Bảy','Chiều thứ Sáu','Bất cứ lúc nào'], c:1, e:'Maintenant il pense au samedi soir.' },
    { q:'Điều gì khó hơn cậu tưởng?', o:['Nói tiếng Pháp','Không làm gì cả','Tìm công viên','Chơi bi sắt'], c:1, e:'ne fait rien. C’est plus difficile qu’il ne croyait.' }
  ],
  after:'Tả một ngày nghỉ của bạn bằng 5 câu, dùng: avant … maintenant · depuis · plus … que.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Đời sống', title:'Chez le médecin', vi:'Ở phòng khám',
  intro:'A2. Chùm từ trọng tâm: bộ phận cơ thể, triệu chứng, đơn thuốc.',
  text:[
    'Quân a mal à la gorge depuis trois jours. Il prend rendez-vous en ligne.',
    'Le médecin l’écoute, regarde sa gorge et prend sa température.',
    '«Ce n’est pas grave. Buvez beaucoup d’eau et reposez-vous.»',
    'Il écrit une ordonnance pour deux médicaments et un arrêt de deux jours.',
    'À la pharmacie, on lui explique comment les prendre. Il note tout.'
  ],
  tr:[
    'Quân đau họng đã ba ngày. Cậu đặt lịch khám qua mạng.',
    'Bác sĩ nghe cậu kể, soi họng và đo nhiệt độ.',
    '«Không nặng đâu. Uống nhiều nước và nghỉ ngơi đi.»',
    'Bác sĩ kê đơn hai loại thuốc và cho nghỉ hai ngày.',
    'Ở hiệu thuốc, người ta giải thích cách uống. Cậu ghi lại hết.'
  ],
  keys:[
    { w:'avoir mal à', r:'/a.vwaʁ mal a/', vi:'đau ở đâu đó' },
    { w:'la gorge', r:'/ɡɔʁʒ/', vi:'cổ họng' },
    { w:'le rendez-vous', r:'/ʁɑ̃.de.vu/', vi:'cuộc hẹn' },
    { w:'le médecin', r:'/med.sɛ̃/', vi:'bác sĩ' },
    { w:'grave', r:'/ɡʁav/', vi:'nặng, nghiêm trọng' },
    { w:'se reposer', r:'/sə ʁə.po.ze/', vi:'nghỉ ngơi' },
    { w:'l’ordonnance', r:'/ɔʁ.dɔ.nɑ̃s/', vi:'đơn thuốc' },
    { w:'le médicament', r:'/me.di.ka.mɑ̃/', vi:'thuốc' }
  ],
  qs:[
    { q:'Quân bị làm sao?', o:['Đau đầu','Đau họng','Đau bụng','Sốt cao'], c:1, e:'Quân a mal à la gorge depuis trois jours.' },
    { q:'Bác sĩ khuyên gì?', o:['Đi bệnh viện','Uống nhiều nước và nghỉ ngơi','Tập thể dục','Đổi chỗ ở'], c:1, e:'Buvez beaucoup d’eau et reposez-vous.' },
    { q:'Đơn thuốc có mấy loại thuốc?', o:['Một','Hai','Ba','Bốn'], c:1, e:'une ordonnance pour deux médicaments.' }
  ],
  after:'Kể một lần bạn đi khám, dùng: j’ai mal à · depuis · le médecin m’a dit de.' },

{ lang:'fr', lv:'b1', mins:5, cat:'Học tập', title:'La première présentation', vi:'Buổi thuyết trình đầu tiên',
  intro:'B1. Chùm từ trọng tâm: nói trước lớp, cấu trúc lập luận, cảm xúc.',
  text:[
    'Quân doit présenter un exposé de dix minutes devant vingt personnes.',
    'La veille, il répète trois fois à voix haute, seul dans sa chambre.',
    'Le jour venu, sa voix tremble au début, puis se stabilise.',
    'Il avait préparé trop de texte, alors il saute deux diapositives et personne ne le remarque.',
    'À la fin, une étudiante lui pose une question qu’il n’avait pas prévue.',
    'Il répond honnêtement : «Je ne sais pas, mais je vais chercher.» La professeure approuve.'
  ],
  tr:[
    'Quân phải trình bày một bài mười phút trước hai mươi người.',
    'Tối hôm trước, cậu tập ba lần thành tiếng, một mình trong phòng.',
    'Đến hôm đó, giọng cậu run lúc đầu, rồi vững dần.',
    'Cậu soạn quá nhiều chữ, nên bỏ qua hai trang chiếu mà chẳng ai nhận ra.',
    'Cuối buổi, một nữ sinh đặt một câu hỏi cậu không lường trước.',
    'Cậu trả lời thật: «Tôi chưa biết, nhưng tôi sẽ tìm hiểu.» Cô giáo gật đầu tán thành.'
  ],
  keys:[
    { w:'l’exposé', r:'/ɛks.po.ze/', vi:'bài thuyết trình' },
    { w:'la veille', r:'/vɛj/', vi:'hôm trước' },
    { w:'à voix haute', r:'/a vwa ot/', vi:'thành tiếng' },
    { w:'trembler', r:'/tʁɑ̃.ble/', vi:'run' },
    { w:'la diapositive', r:'/dja.po.zi.tiv/', vi:'trang chiếu' },
    { w:'remarquer', r:'/ʁə.maʁ.ke/', vi:'nhận ra' },
    { w:'prévoir', r:'/pʁe.vwaʁ/', vi:'lường trước' },
    { w:'approuver', r:'/a.pʁu.ve/', vi:'tán thành' }
  ],
  qs:[
    { q:'Bài thuyết trình dài bao lâu?', o:['Năm phút','Mười phút','Mười lăm phút','Nửa tiếng'], c:1, e:'un exposé de dix minutes.' },
    { q:'Vì sao cậu bỏ qua hai trang chiếu?', o:['Máy hỏng','Cậu soạn quá nhiều chữ','Hết giờ','Quên mất'], c:1, e:'Il avait préparé trop de texte.' },
    { q:'Cậu trả lời câu hỏi bất ngờ thế nào?', o:['Nói bừa','Thừa nhận chưa biết và hứa tìm hiểu','Không trả lời','Hỏi lại cô giáo'], c:1, e:'Je ne sais pas, mais je vais chercher.' }
  ],
  after:'Viết 5 câu về một lần bạn nói trước đám đông, dùng: la veille · au début · à la fin.' },

{ lang:'fr', lv:'b1', mins:5, cat:'Văn hoá', title:'Une conversation qui dérape', vi:'Một cuộc trò chuyện đi quá xa',
  intro:'B1. Chùm từ trọng tâm: tranh luận, lịch sự, cách rút lui khỏi một chủ đề.',
  text:[
    'Au dîner, quelqu’un lance un sujet politique. Le ton monte très vite.',
    'Deux amis se coupent la parole, rient, puis recommencent.',
    'Quân se tait. Chez lui, une discussion pareille serait un conflit.',
    'Mais dix minutes plus tard, les mêmes personnes partagent un dessert et parlent de vélo.',
    'Il comprend alors que le désaccord, ici, n’abîme pas la relation.',
    'Il ose donner son avis. On l’écoute, on le contredit, et on lui ressert du vin.'
  ],
  tr:[
    'Trong bữa tối, có người nêu một chuyện chính trị. Giọng cao lên rất nhanh.',
    'Hai người bạn cướp lời nhau, cười, rồi lại tiếp tục.',
    'Quân im lặng. Ở nhà cậu, một cuộc bàn cãi như thế sẽ thành xung đột.',
    'Nhưng mười phút sau, chính hai người đó cùng chia nhau món tráng miệng và bàn chuyện xe đạp.',
    'Lúc ấy cậu hiểu rằng ở đây, bất đồng không làm hỏng quan hệ.',
    'Cậu mạnh dạn nêu ý kiến. Người ta nghe, người ta phản bác, rồi rót thêm rượu cho cậu.'
  ],
  keys:[
    { w:'le sujet', r:'/sy.ʒɛ/', vi:'chủ đề' },
    { w:'couper la parole', r:'/ku.pe la pa.ʁɔl/', vi:'cướp lời' },
    { w:'se taire', r:'/sə tɛʁ/', vi:'im lặng' },
    { w:'le conflit', r:'/kɔ̃.fli/', vi:'xung đột' },
    { w:'le désaccord', r:'/de.za.kɔʁ/', vi:'sự bất đồng' },
    { w:'abîmer', r:'/a.bi.me/', vi:'làm hỏng' },
    { w:'oser', r:'/o.ze/', vi:'dám, mạnh dạn' },
    { w:'contredire', r:'/kɔ̃.tʁə.diʁ/', vi:'phản bác' }
  ],
  qs:[
    { q:'Vì sao lúc đầu Quân im lặng?', o:['Cậu không hiểu','Ở nhà cậu, bàn cãi như thế là xung đột','Cậu mệt','Cậu không quan tâm'], c:1, e:'Chez lui, une discussion pareille serait un conflit.' },
    { q:'Mười phút sau, hai người bạn làm gì?', o:['Bỏ về','Chia nhau món tráng miệng và đổi chuyện','Tiếp tục cãi','Giận nhau'], c:1, e:'partagent un dessert et parlent de vélo.' },
    { q:'Cậu rút ra điều gì?', o:['Không nên nói chính trị','Bất đồng không làm hỏng quan hệ','Nên nói to hơn','Nên tránh bữa tối đông người'], c:1, e:'le désaccord, ici, n’abîme pas la relation.' }
  ],
  after:'Viết 5 câu về một lần bạn nêu ý kiến trái chiều, dùng: je me suis tu · j’ai osé · on m’a contredit.' },

{ lang:'fr', lv:'b1', mins:5, cat:'Đời sống', title:'Le petit boulot', vi:'Việc làm thêm',
  intro:'B1. Chùm từ trọng tâm: đi làm thêm, hợp đồng, mệt mỏi và thu xếp.',
  text:[
    'Quân travaille quinze heures par semaine dans une librairie.',
    'Il range les rayons, encaisse, et répond aux clients qui cherchent un titre.',
    'Le premier mois a été dur : il confondait les rayons et parlait trop lentement.',
    'Maintenant, il connaît la boutique par cœur et conseille même des romans.',
    'Le salaire couvre le loyer et une partie des courses.',
    'Ce qui le surprend le plus, c’est que son français a plus progressé ici qu’en classe.'
  ],
  tr:[
    'Quân làm mười lăm tiếng một tuần ở một hiệu sách.',
    'Cậu xếp giá, thu tiền, và trả lời khách tìm một đầu sách nào đó.',
    'Tháng đầu rất vất vả: cậu lẫn giá sách và nói quá chậm.',
    'Bây giờ cậu thuộc lòng cửa hàng, thậm chí còn gợi ý được cả tiểu thuyết.',
    'Lương đủ trả tiền nhà và một phần tiền chợ.',
    'Điều làm cậu ngạc nhiên nhất là tiếng Pháp tiến bộ ở đây nhanh hơn ở trên lớp.'
  ],
  keys:[
    { w:'le petit boulot', r:'/pə.ti bu.lo/', vi:'việc làm thêm' },
    { w:'la librairie', r:'/li.bʁɛ.ʁi/', vi:'hiệu sách' },
    { w:'le rayon', r:'/ʁɛ.jɔ̃/', vi:'giá hàng, quầy hàng' },
    { w:'encaisser', r:'/ɑ̃.kɛ.se/', vi:'thu tiền' },
    { w:'confondre', r:'/kɔ̃.fɔ̃dʁ/', vi:'lẫn lộn' },
    { w:'par cœur', r:'/paʁ kœʁ/', vi:'thuộc lòng' },
    { w:'le loyer', r:'/lwa.je/', vi:'tiền thuê nhà' },
    { w:'progresser', r:'/pʁo.ɡʁe.se/', vi:'tiến bộ' }
  ],
  qs:[
    { q:'Quân làm bao nhiêu tiếng mỗi tuần?', o:['Mười','Mười lăm','Hai mươi','Hai mươi lăm'], c:1, e:'quinze heures par semaine.' },
    { q:'Tháng đầu khó ở chỗ nào?', o:['Lương thấp','Lẫn giá sách và nói quá chậm','Đồng nghiệp khó tính','Đi lại xa'], c:1, e:'il confondait les rayons et parlait trop lentement.' },
    { q:'Điều gì làm cậu ngạc nhiên nhất?', o:['Lương cao hơn dự tính','Tiếng Pháp tiến bộ nhanh hơn ở lớp','Khách rất đông','Sách rất rẻ'], c:1, e:'son français a plus progressé ici qu’en classe.' }
  ],
  after:'Kể một công việc bạn từng làm, dùng: je travaillais · au début · maintenant.' },

{ lang:'fr', lv:'b1', mins:5, cat:'Thiên nhiên', title:'Trois jours en montagne', vi:'Ba ngày trên núi',
  intro:'B1. Chùm từ trọng tâm: đi bộ đường dài, thời tiết đổi, quyết định quay về.',
  text:[
    'Ils sont partis à six heures, sac au dos, pour trois jours de marche.',
    'Le premier jour, le ciel était clair et le chemin facile.',
    'Le deuxième, le brouillard est tombé en vingt minutes. On ne voyait plus le sentier.',
    'Le guide a décidé de redescendre. Personne n’a discuté.',
    'Le soir, au refuge, quelqu’un a dit : «En montagne, renoncer, c’est aussi savoir.»',
    'Quân a noté la phrase. Elle lui a servi bien après, loin des montagnes.'
  ],
  tr:[
    'Họ khởi hành lúc sáu giờ, ba lô trên vai, cho ba ngày đi bộ.',
    'Ngày đầu, trời quang và đường dễ đi.',
    'Ngày thứ hai, sương mù ập xuống trong hai mươi phút. Không còn nhìn thấy lối mòn nữa.',
    'Người dẫn đường quyết định quay xuống. Không ai bàn cãi.',
    'Tối đó, ở nhà nghỉ trên núi, có người nói: «Trên núi, biết từ bỏ cũng là một thứ hiểu biết.»',
    'Quân ghi lại câu ấy. Nó có ích cho cậu rất lâu sau này, ở nơi chẳng còn núi non gì.'
  ],
  keys:[
    { w:'la montagne', r:'/mɔ̃.taɲ/', vi:'núi' },
    { w:'le sac à dos', r:'/sak a do/', vi:'ba lô' },
    { w:'le brouillard', r:'/bʁu.jaʁ/', vi:'sương mù' },
    { w:'le sentier', r:'/sɑ̃.tje/', vi:'lối mòn' },
    { w:'le guide', r:'/ɡid/', vi:'người dẫn đường' },
    { w:'redescendre', r:'/ʁə.de.sɑ̃dʁ/', vi:'đi xuống lại' },
    { w:'le refuge', r:'/ʁə.fyʒ/', vi:'nhà nghỉ trên núi' },
    { w:'renoncer', r:'/ʁə.nɔ̃.se/', vi:'từ bỏ' }
  ],
  qs:[
    { q:'Họ đi mấy ngày theo dự tính?', o:['Hai','Ba','Bốn','Năm'], c:1, e:'pour trois jours de marche.' },
    { q:'Chuyện gì xảy ra ngày thứ hai?', o:['Mưa to','Sương mù ập xuống','Có người ngã','Hết nước'], c:1, e:'le brouillard est tombé en vingt minutes.' },
    { q:'Người dẫn đường quyết định gì?', o:['Đi tiếp','Quay xuống','Dựng trại','Gọi cứu hộ'], c:1, e:'Le guide a décidé de redescendre.' }
  ],
  after:'Kể một lần bạn phải bỏ dở kế hoạch, dùng: nous sommes partis · puis · finalement.' },

{ lang:'fr', lv:'b1', mins:5, cat:'Văn hoá', title:'Les mots qu’on ne traduit pas', vi:'Những từ không dịch được',
  intro:'B1. Chùm từ trọng tâm: ngôn ngữ và văn hoá, dịch thuật, sắc thái.',
  text:[
    'Au début, Quân traduisait chaque phrase dans sa tête.',
    'Puis il a rencontré des mots qui résistaient : «voilà», «quand même», «bof».',
    'Aucune traduction ne marchait vraiment. Il fallait deviner par l’usage.',
    'Un jour, il a dit «bof» sans y penser, et ses amis ont ri de surprise.',
    'Ce jour-là, il a senti qu’il avait cessé de traduire.',
    'La langue n’était plus un mur ; elle était devenue une pièce où il pouvait s’asseoir.'
  ],
  tr:[
    'Lúc đầu, Quân dịch từng câu trong đầu.',
    'Rồi cậu gặp những từ cứng đầu: «voilà», «quand même», «bof».',
    'Không bản dịch nào thật sự ổn. Phải đoán qua cách người ta dùng.',
    'Một hôm cậu buột miệng nói «bof», và đám bạn bật cười vì bất ngờ.',
    'Hôm ấy, cậu cảm thấy mình đã thôi dịch.',
    'Ngôn ngữ không còn là bức tường nữa; nó đã thành một căn phòng cậu ngồi được vào.'
  ],
  keys:[
    { w:'traduire', r:'/tʁa.dɥiʁ/', vi:'dịch' },
    { w:'la tête', r:'/tɛt/', vi:'cái đầu' },
    { w:'résister', r:'/ʁe.zis.te/', vi:'cưỡng lại, cứng đầu' },
    { w:'deviner', r:'/də.vi.ne/', vi:'đoán' },
    { w:'l’usage', r:'/y.zaʒ/', vi:'cách dùng' },
    { w:'la surprise', r:'/syʁ.pʁiz/', vi:'sự bất ngờ' },
    { w:'cesser', r:'/sɛ.se/', vi:'thôi, ngừng' },
    { w:'le mur', r:'/myʁ/', vi:'bức tường' }
  ],
  qs:[
    { q:'Lúc đầu Quân làm gì khi nghe?', o:['Ghi chép','Dịch từng câu trong đầu','Hỏi lại','Im lặng'], c:1, e:'Quân traduisait chaque phrase dans sa tête.' },
    { q:'Vì sao ba từ kia khó?', o:['Phát âm khó','Không bản dịch nào thật sự ổn','Ít người dùng','Chỉ có trong sách'], c:1, e:'Aucune traduction ne marchait vraiment.' },
    { q:'Dấu hiệu nào cho thấy cậu tiến bộ?', o:['Điểm thi cao','Buột miệng nói «bof» mà không nghĩ','Đọc nhanh hơn','Viết dài hơn'], c:1, e:'il a dit «bof» sans y penser.' }
  ],
  after:'Kể ba từ tiếng Việt bạn thấy khó dịch, và giải thích bằng tiếng Pháp mỗi từ một câu.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Đời sống', title:'Le colis', vi:'Kiện hàng',
  intro:'A2. Chùm từ trọng tâm: bưu điện, nhận hàng, thời gian chờ.',
  text:[
    'La famille de Quân a envoyé un colis depuis Hanoï. Il est parti il y a un mois.',
    'Le site dit «en transit» pendant deux semaines, puis plus rien.',
    'Quân va à la poste avec son avis de passage et sa carte d’identité.',
    'L’employé cherche, disparaît cinq minutes, et revient avec une boîte cabossée.',
    'Dedans : du thé, des photos, et une lettre de sa mère. Rien n’est cassé.'
  ],
  tr:[
    'Gia đình Quân gửi một kiện hàng từ Hà Nội. Nó rời đi cách đây một tháng.',
    'Trang tra cứu báo «đang vận chuyển» suốt hai tuần, rồi im bặt.',
    'Quân ra bưu điện, mang theo giấy báo và thẻ căn cước.',
    'Nhân viên tìm, biến mất năm phút, rồi quay ra với một cái hộp móp.',
    'Bên trong: trà, mấy tấm ảnh, và một lá thư của mẹ. Không có gì vỡ.'
  ],
  keys:[
    { w:'le colis', r:'/kɔ.li/', vi:'kiện hàng' },
    { w:'envoyer', r:'/ɑ̃.vwa.je/', vi:'gửi' },
    { w:'la poste', r:'/pɔst/', vi:'bưu điện' },
    { w:'l’avis de passage', r:'/a.vi də pa.saʒ/', vi:'giấy báo nhận hàng' },
    { w:'la carte d’identité', r:'/kaʁt di.dɑ̃.ti.te/', vi:'thẻ căn cước' },
    { w:'la boîte', r:'/bwat/', vi:'cái hộp' },
    { w:'cassé', r:'/kɑ.se/', vi:'vỡ' },
    { w:'il y a un mois', r:'/il ja œ̃ mwa/', vi:'cách đây một tháng' }
  ],
  qs:[
    { q:'Kiện hàng gửi đi từ bao giờ?', o:['Một tuần trước','Hai tuần trước','Một tháng trước','Hai tháng trước'], c:2, e:'Il est parti il y a un mois.' },
    { q:'Quân mang theo những gì?', o:['Hộ chiếu','Giấy báo và thẻ căn cước','Chỉ điện thoại','Không mang gì'], c:1, e:'avec son avis de passage et sa carte d’identité.' },
    { q:'Trong hộp có gì?', o:['Quần áo','Trà, ảnh và một lá thư','Sách','Thuốc'], c:1, e:'du thé, des photos, et une lettre de sa mère.' }
  ],
  after:'Kể một lần bạn chờ một kiện hàng, dùng: il y a … · pendant · enfin.' },

{ lang:'fr', lv:'a2', mins:4, cat:'Đường phố', title:'Une amende de tramway', vi:'Một vé phạt trên tàu điện',
  intro:'A2. Chùm từ trọng tâm: giao thông công cộng, quy định, hậu quả.',
  text:[
    'Quân est monté dans le tram en retard, sans valider son ticket.',
    'Deux contrôleurs sont montés à l’arrêt suivant.',
    'Il a expliqué, en cherchant ses mots, qu’il avait bien un ticket mais qu’il ne l’avait pas composté.',
    'Un contrôleur a répondu : «Un ticket non validé ne compte pas, monsieur.»',
    'L’amende était de cinquante euros. Depuis, Quân valide avant même de s’asseoir.'
  ],
  tr:[
    'Quân lên tàu điện lúc đang muộn giờ, chưa dập vé.',
    'Hai nhân viên kiểm soát lên ở bến sau.',
    'Cậu giải thích, chật vật tìm từ, rằng cậu có vé nhưng chưa dập.',
    'Một người đáp: «Vé chưa dập thì không tính, thưa anh.»',
    'Tiền phạt là năm mươi euro. Từ đó, Quân dập vé trước cả khi ngồi xuống.'
  ],
  keys:[
    { w:'le tramway', r:'/tʁam.wɛ/', vi:'tàu điện mặt đất' },
    { w:'valider', r:'/va.li.de/', vi:'dập vé, xác nhận vé' },
    { w:'le contrôleur', r:'/kɔ̃.tʁo.lœʁ/', vi:'nhân viên kiểm soát' },
    { w:'l’arrêt', r:'/a.ʁɛ/', vi:'bến, trạm dừng' },
    { w:'expliquer', r:'/ɛks.pli.ke/', vi:'giải thích' },
    { w:'l’amende', r:'/a.mɑ̃d/', vi:'tiền phạt' },
    { w:'compter', r:'/kɔ̃.te/', vi:'được tính, có giá trị' },
    { w:'depuis', r:'/də.pɥi/', vi:'kể từ đó' }
  ],
  qs:[
    { q:'Quân sai ở chỗ nào?', o:['Không mua vé','Có vé nhưng chưa dập','Lên nhầm tàu','Đi quá bến'], c:1, e:'sans valider son ticket.' },
    { q:'Nhân viên kiểm soát nói gì?', o:['Lần này bỏ qua','Vé chưa dập thì không tính','Phải xuống tàu','Mua vé mới đi'], c:1, e:'Un ticket non validé ne compte pas.' },
    { q:'Tiền phạt bao nhiêu?', o:['20 euro','30 euro','50 euro','100 euro'], c:2, e:'L’amende était de cinquante euros.' }
  ],
  after:'Kể một lần bạn bị phạt hoặc bị nhắc nhở, dùng: j’avais · je n’avais pas · depuis.' },

{ lang:'fr', lv:'b1', mins:5, cat:'Đời sống', title:'Un an après', vi:'Một năm sau',
  intro:'B1. Chùm từ trọng tâm: nhìn lại, so sánh quá khứ với hiện tại, thì chưa hoàn thành.',
  text:[
    'Il y a un an, Quân comptait les jours. Maintenant il ne les compte plus.',
    'Avant, il préparait chaque phrase avant de parler. Aujourd’hui, il parle d’abord et se corrige après.',
    'Il connaît le nom de la boulangère, le jour du marché, et l’heure du dernier bus.',
    'Il sait aussi ce qui lui manque : une table où dix personnes mangent trop et parlent en même temps.',
    'Sa mère lui demande au téléphone s’il rentre bientôt. Il répond : «Bientôt.»',
    'Puis il raccroche et ouvre son cahier. Demain, il a un exposé à préparer.'
  ],
  tr:[
    'Một năm trước, Quân đếm từng ngày. Bây giờ cậu không đếm nữa.',
    'Trước đây, cậu chuẩn bị sẵn từng câu rồi mới nói. Hôm nay, cậu nói trước rồi sửa sau.',
    'Cậu biết tên bà bán bánh, biết ngày họp chợ, biết giờ chuyến xe buýt cuối.',
    'Cậu cũng biết mình thiếu gì: một cái bàn có mười người ăn quá nhiều và nói cùng lúc.',
    'Mẹ cậu hỏi qua điện thoại bao giờ về. Cậu đáp: «Sắp thôi ạ.»',
    'Rồi cậu cúp máy và mở vở ra. Ngày mai có một bài thuyết trình phải chuẩn bị.'
  ],
  keys:[
    { w:'compter', r:'/kɔ̃.te/', vi:'đếm' },
    { w:'se corriger', r:'/sə kɔ.ʁi.ʒe/', vi:'tự sửa' },
    { w:'le dernier bus', r:'/dɛʁ.nje bys/', vi:'chuyến xe buýt cuối' },
    { w:'manquer', r:'/mɑ̃.ke/', vi:'thiếu, nhớ' },
    { w:'en même temps', r:'/ɑ̃ mɛm tɑ̃/', vi:'cùng lúc' },
    { w:'rentrer', r:'/ʁɑ̃.tʁe/', vi:'về nhà, về nước' },
    { w:'raccrocher', r:'/ʁa.kʁɔ.ʃe/', vi:'cúp máy' },
    { w:'le cahier', r:'/ka.je/', vi:'quyển vở' }
  ],
  qs:[
    { q:'Một năm trước Quân làm gì?', o:['Đếm từng ngày','Không nói tiếng Pháp','Không đi học','Ở nhà suốt'], c:0, e:'Il y a un an, Quân comptait les jours.' },
    { q:'Cách nói của cậu thay đổi ra sao?', o:['Nói chậm hơn','Nói trước rồi sửa sau','Ít nói hơn','Chỉ viết'], c:1, e:'il parle d’abord et se corrige après.' },
    { q:'Cậu thiếu điều gì?', o:['Tiền','Một bàn ăn đông người nói cùng lúc','Bạn bè','Thời gian'], c:1, e:'une table où dix personnes mangent trop et parlent en même temps.' }
  ],
  after:'Viết 5 câu so sánh bạn của một năm trước với bây giờ, dùng: avant · maintenant · je ne … plus.' }
  );
})();
