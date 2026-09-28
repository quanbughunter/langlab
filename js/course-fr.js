/* ============================================================
   LangLab — Khoá tiếng Pháp theo khung CEFR
   ------------------------------------------------------------
   Nhân vật xuyên suốt: Quân — sinh viên Hà Nội sang Pháp học, nên
   tình huống bám sát đời sống thật: làm thủ tục, thuê nhà, đi chợ,
   đi tàu, gặp hành chính Pháp.

   Mỗi bài: mục tiêu giao tiếp · ngữ pháp · từ vựng (có IPA và GIỐNG)
   · cụm hay đi với nhau · hội thoại.

   GIỐNG của danh từ (g:'m' hoặc 'f') là bắt buộc phải ghi, vì tiếng
   Pháp không có danh từ trung tính: học từ mà không học giống thì
   sau phải học lại từ đầu. «un livre» chứ không bao giờ «une livre»
   (une livre lại là nửa cân — đổi giống là đổi nghĩa).

   Nội dung do LangLab tự biên soạn, không chép từ giáo trình nào.
   ============================================================ */

const COURSE_FR = {
  levels: [
    { id:'a1', vi:'A1 · Sơ cấp',        fr:'Débutant',        lessons:15, status:'active' },
    { id:'a2', vi:'A2 · Sơ trung cấp',  fr:'Élémentaire',     lessons:15, status:'soon' },
    { id:'b1', vi:'B1 · Trung cấp',     fr:'Intermédiaire',   lessons:15, status:'soon' },
    { id:'b2', vi:'B2 · Trung cao cấp', fr:'Avancé',          lessons:15, status:'soon' }
  ],

  lessons: [
  /* ==================== A1 ==================== */
  { level:'a1', no:1, fr:'Bonjour ! Je me présente', vi:'Chào hỏi và tự giới thiệu', skill:'Giao tiếp',
    grammar:[
      { form:'je suis / tu es / il est — động từ être', vi:'«Être» (là) nối chủ ngữ với tên, nghề, quốc tịch.', note:'Chia bất quy tắc, phải thuộc lòng: je suis · tu es · il/elle est · nous sommes · vous êtes · ils/elles sont.', ex:{ fr:'Je suis Quan. Je suis étudiant.', vi:'Tôi là Quân. Tôi là sinh viên.' } },
      { form:'tu và vous — hai kiểu xưng hô', vi:'«Tu» với bạn bè, người thân, trẻ con. «Vous» với người lạ, người lớn tuổi, cấp trên — và cũng là số nhiều.', note:'Người Việt hay dùng «tu» quá sớm. Ở Pháp, gọi «tu» người chưa quen bị coi là suồng sã. Cứ «vous» cho tới khi họ mời «on peut se tutoyer».', ex:{ fr:'Vous êtes Monsieur Martin ?', vi:'Ông là ông Martin phải không ạ?' } },
      { form:'un / une — mạo từ không xác định', vi:'«Un» đi với danh từ giống đực, «une» với giống cái.', note:'Học danh từ là phải học kèm mạo từ, đừng học trần: nhớ «une table» chứ đừng nhớ «table».', ex:{ fr:'C’est un livre. C’est une table.', vi:'Đây là một quyển sách. Đây là một cái bàn.' } },
      { form:'ne … pas — phủ định', vi:'Kẹp động từ giữa «ne» và «pas».', note:'Khi nói, người Pháp thường nuốt mất «ne»: «Je sais pas» thay vì «Je ne sais pas». Nghe thì phải quen, nhưng viết thì luôn giữ đủ.', ex:{ fr:'Je ne suis pas français.', vi:'Tôi không phải người Pháp.' } }
    ],
    vocab:[
      { fr:'bonjour', ipa:'bɔ̃.ʒuʁ', vi:'xin chào (ban ngày)', pos:'thán từ' },
      { fr:'bonsoir', ipa:'bɔ̃.swaʁ', vi:'chào buổi tối', pos:'thán từ' },
      { fr:'salut', ipa:'sa.ly', vi:'chào (thân mật)', pos:'thán từ', note:'Dùng cả khi gặp lẫn khi chia tay, chỉ với người thân quen.' },
      { fr:'au revoir', ipa:'o ʁə.vwaʁ', vi:'tạm biệt', pos:'thán từ' },
      { fr:'merci', ipa:'mɛʁ.si', vi:'cảm ơn', pos:'thán từ' },
      { fr:'pardon', ipa:'paʁ.dɔ̃', vi:'xin lỗi, cho hỏi', pos:'thán từ' },
      { fr:'nom', ipa:'nɔ̃', vi:'tên họ', pos:'danh từ', g:'m' },
      { fr:'prénom', ipa:'pʁe.nɔ̃', vi:'tên riêng', pos:'danh từ', g:'m', note:'Giấy tờ Pháp luôn tách «nom» (họ) và «prénom» (tên).' },
      { fr:'étudiant', ipa:'e.ty.djɑ̃', vi:'sinh viên', pos:'danh từ', g:'m', note:'Giống cái: étudiante.' },
      { fr:'professeur', ipa:'pʁɔ.fe.sœʁ', vi:'giáo viên', pos:'danh từ', g:'m' },
      { fr:'ami', ipa:'a.mi', vi:'bạn', pos:'danh từ', g:'m', note:'Giống cái: amie — đọc y hệt.' },
      { fr:'monsieur', ipa:'mə.sjø', vi:'ông, ngài', pos:'danh từ', g:'m', note:'Đọc là «mơ-xiơ», chữ «on» câm.' },
      { fr:'madame', ipa:'ma.dam', vi:'bà, cô', pos:'danh từ', g:'f' },
      { fr:'oui', ipa:'wi', vi:'vâng, đúng', pos:'trạng từ' },
      { fr:'non', ipa:'nɔ̃', vi:'không', pos:'trạng từ' },
      { fr:'être', ipa:'ɛtʁ', vi:'thì, là, ở', pos:'động từ' },
      { fr:'français', ipa:'fʁɑ̃.sɛ', vi:'người Pháp; tiếng Pháp', pos:'danh từ, tính từ', g:'m' },
      { fr:'vietnamien', ipa:'vjɛt.na.mjɛ̃', vi:'người Việt; tiếng Việt', pos:'danh từ, tính từ', g:'m' },
      { fr:'enchanté', ipa:'ɑ̃.ʃɑ̃.te', vi:'hân hạnh (khi gặp lần đầu)', pos:'tính từ', note:'Phụ nữ nói «enchantée» — viết khác, đọc giống.' },
      { fr:'comment', ipa:'kɔ.mɑ̃', vi:'thế nào, làm sao', pos:'trạng từ nghi vấn' }
    ],
    colloc:[
      { p:'Comment allez-vous ?', vi:'Ông/bà khoẻ không ạ? — trang trọng. Thân mật thì «Ça va ?»', ex:'Bonjour madame, comment allez-vous ?' },
      { p:'Je m’appelle…', vi:'Tôi tên là… Nghĩa đen là «tôi tự gọi mình là».', ex:'Je m’appelle Quan.' },
      { p:'Enchanté de faire votre connaissance.', vi:'Rất hân hạnh được làm quen — câu lịch sự đầy đủ.', ex:'Enchanté de faire votre connaissance, monsieur.' }
    ],
    dialogue:[
      { sp:'Mme Dubois', fr:'Bonjour. Vous êtes Monsieur Quan ?', vi:'Chào anh. Anh là anh Quân phải không?' },
      { sp:'Quan', fr:'Oui, c’est moi. Bonjour madame.', vi:'Vâng, tôi đây. Chào bà.' },
      { sp:'Mme Dubois', fr:'Enchantée. Je m’appelle Claire Dubois.', vi:'Hân hạnh. Tôi tên là Claire Dubois.' },
      { sp:'Quan', fr:'Enchanté. Vous êtes professeur ici ?', vi:'Hân hạnh. Bà là giáo viên ở đây ạ?' },
      { sp:'Mme Dubois', fr:'Oui. Et vous, vous êtes étudiant ?', vi:'Vâng. Còn anh, anh là sinh viên à?' },
      { sp:'Quan', fr:'Oui, je suis étudiant. Je suis vietnamien.', vi:'Vâng, tôi là sinh viên. Tôi là người Việt.' },
      { sp:'Mme Dubois', fr:'Vous parlez très bien français !', vi:'Anh nói tiếng Pháp giỏi lắm!' },
      { sp:'Quan', fr:'Merci, mais je ne parle pas encore très bien.', vi:'Cảm ơn bà, nhưng tôi nói chưa giỏi lắm đâu.' }
    ] },

  { level:'a1', no:2, fr:'Ma famille', vi:'Gia đình và sở hữu', skill:'Từ vựng',
    grammar:[
      { form:'j’ai / tu as / il a — động từ avoir', vi:'«Avoir» (có) dùng để nói sở hữu, tuổi tác và nhiều thành ngữ.', note:'j’ai · tu as · il/elle a · nous avons · vous avez · ils/elles ont. Chú ý «j’ai» chứ không phải «je ai».', ex:{ fr:'J’ai deux sœurs.', vi:'Tôi có hai chị em gái.' } },
      { form:'Tuổi dùng avoir, không dùng être', vi:'Tiếng Pháp nói «tôi CÓ 20 tuổi».', note:'Nói «je suis vingt ans» là sai hẳn — đây là lỗi kinh điển của người học. Tiếng Việt «tôi LÀ 20 tuổi» cũng không xuôi, nên dễ nhớ.', ex:{ fr:'J’ai vingt ans. Et toi, tu as quel âge ?', vi:'Tôi hai mươi tuổi. Còn bạn bao nhiêu tuổi?' } },
      { form:'mon / ma / mes — tính từ sở hữu', vi:'Đổi theo GIỐNG và SỐ của vật sở hữu, không theo người sở hữu.', note:'Đây là chỗ ngược với tiếng Anh: «son livre» vừa là «sách của anh ấy» vừa là «sách của cô ấy» — giống là giống của quyển sách. Trước danh từ giống cái bắt đầu bằng nguyên âm thì dùng «mon»: mon amie.', ex:{ fr:'mon père · ma mère · mes parents', vi:'bố tôi · mẹ tôi · bố mẹ tôi' } },
      { form:'le / la / les — mạo từ xác định', vi:'Dùng khi đã biết đang nói vật nào, hoặc nói chung cả loại.', note:'Trước nguyên âm rút thành «l’»: l’ami, l’école. Tiếng Pháp dùng mạo từ nhiều hơn tiếng Việt rất nhiều — gần như danh từ nào cũng phải có.', ex:{ fr:'J’aime le café.', vi:'Tôi thích cà phê (nói chung).' } }
    ],
    vocab:[
      { fr:'famille', ipa:'fa.mij', vi:'gia đình', pos:'danh từ', g:'f' },
      { fr:'père', ipa:'pɛʁ', vi:'bố', pos:'danh từ', g:'m' },
      { fr:'mère', ipa:'mɛʁ', vi:'mẹ', pos:'danh từ', g:'f' },
      { fr:'parents', ipa:'pa.ʁɑ̃', vi:'bố mẹ', pos:'danh từ số nhiều', g:'m' },
      { fr:'frère', ipa:'fʁɛʁ', vi:'anh, em trai', pos:'danh từ', g:'m' },
      { fr:'sœur', ipa:'sœʁ', vi:'chị, em gái', pos:'danh từ', g:'f' },
      { fr:'fils', ipa:'fis', vi:'con trai', pos:'danh từ', g:'m', note:'Chữ «l» câm, đọc là «phít».' },
      { fr:'fille', ipa:'fij', vi:'con gái; cô gái', pos:'danh từ', g:'f' },
      { fr:'mari', ipa:'ma.ʁi', vi:'chồng', pos:'danh từ', g:'m' },
      { fr:'femme', ipa:'fam', vi:'vợ; phụ nữ', pos:'danh từ', g:'f', note:'Viết «emme» nhưng đọc «am» — một ngoại lệ nổi tiếng.' },
      { fr:'enfant', ipa:'ɑ̃.fɑ̃', vi:'đứa trẻ', pos:'danh từ', g:'m' },
      { fr:'grand-père', ipa:'ɡʁɑ̃.pɛʁ', vi:'ông', pos:'danh từ', g:'m' },
      { fr:'grand-mère', ipa:'ɡʁɑ̃.mɛʁ', vi:'bà', pos:'danh từ', g:'f' },
      { fr:'oncle', ipa:'ɔ̃kl', vi:'chú, bác, cậu', pos:'danh từ', g:'m' },
      { fr:'tante', ipa:'tɑ̃t', vi:'cô, dì, bác gái', pos:'danh từ', g:'f' },
      { fr:'avoir', ipa:'a.vwaʁ', vi:'có', pos:'động từ' },
      { fr:'âge', ipa:'ɑʒ', vi:'tuổi', pos:'danh từ', g:'m' },
      { fr:'an', ipa:'ɑ̃', vi:'năm (đếm tuổi)', pos:'danh từ', g:'m' },
      { fr:'petit', ipa:'pə.ti', vi:'nhỏ, bé', pos:'tính từ', note:'Giống cái: petite — lúc đó chữ «t» mới đọc lên.' },
      { fr:'grand', ipa:'ɡʁɑ̃', vi:'to, lớn, cao', pos:'tính từ' }
    ],
    colloc:[
      { p:'Tu as quel âge ?', vi:'Bạn bao nhiêu tuổi? Trang trọng: «Quel âge avez-vous ?»', ex:'Tu as quel âge ? — J’ai vingt ans.' },
      { p:'avoir faim / avoir soif', vi:'Đói / khát — cũng dùng «avoir» chứ không dùng «être».', ex:'J’ai faim. On mange ?' },
      { p:'Je suis fils unique.', vi:'Tôi là con một. Con gái một thì «fille unique».', ex:'Je n’ai pas de frère, je suis fils unique.' }
    ],
    dialogue:[
      { sp:'Claire', fr:'Vous avez des frères et sœurs ?', vi:'Anh có anh chị em không?' },
      { sp:'Quan', fr:'Oui, j’ai une sœur. Elle a seize ans.', vi:'Có, tôi có một em gái. Em ấy mười sáu tuổi.' },
      { sp:'Claire', fr:'Et vos parents, ils habitent à Hanoï ?', vi:'Còn bố mẹ anh, họ sống ở Hà Nội à?' },
      { sp:'Quan', fr:'Oui. Mon père est professeur et ma mère est médecin.', vi:'Vâng. Bố tôi là giáo viên còn mẹ tôi là bác sĩ.' },
      { sp:'Claire', fr:'Votre famille vous manque ?', vi:'Anh có nhớ nhà không?' },
      { sp:'Quan', fr:'Un peu. Mais j’ai des amis ici.', vi:'Hơi nhớ. Nhưng tôi có bạn bè ở đây.' }
    ] },

  { level:'a1', no:3, fr:'Les chiffres et l’heure', vi:'Số đếm và giờ giấc', skill:'Từ vựng',
    grammar:[
      { form:'Số đếm 0–69', vi:'Đều đặn, chỉ cần thuộc 0–16 rồi ghép.', note:'17–19 ghép thẳng: dix-sept, dix-huit, dix-neuf. Từ 21 có «et»: vingt et un, nhưng 22 thì không: vingt-deux.', ex:{ fr:'vingt et un · trente-deux · soixante-neuf', vi:'21 · 32 · 69' } },
      { form:'Số 70, 80, 90 — chỗ lạ nhất của tiếng Pháp', vi:'70 là «soixante-dix» (60+10), 80 là «quatre-vingts» (4×20), 90 là «quatre-vingt-dix» (4×20+10).', note:'Đây là tàn dư của lối đếm theo hệ 20 thời xưa. Người Bỉ và Thuỵ Sĩ nói gọn hơn: septante (70), nonante (90) — nhưng ở Pháp thì không dùng.', ex:{ fr:'quatre-vingt-dix-neuf', vi:'99 — nghĩa đen «bốn hai mươi mười chín»' } },
      { form:'Quelle heure est-il ?', vi:'Mấy giờ rồi? Trả lời «Il est…»', note:'«Il» ở đây là chủ ngữ giả, không chỉ ai cả — giống «it» trong «it is raining».', ex:{ fr:'Il est trois heures et quart.', vi:'Bây giờ là ba giờ mười lăm.' } },
      { form:'Giờ hành chính 24 tiếng', vi:'Giấy tờ, tàu xe, hẹn khám đều dùng 0–24 giờ.', note:'«quatorze heures trente» là 14:30. Nói chuyện thường ngày thì vẫn dùng 12 giờ kèm «du matin / de l’après-midi / du soir».', ex:{ fr:'Le train part à dix-huit heures vingt.', vi:'Tàu chạy lúc 18 giờ 20.' } }
    ],
    vocab:[
      { fr:'un', ipa:'œ̃', vi:'một', pos:'số từ' },
      { fr:'deux', ipa:'dø', vi:'hai', pos:'số từ' },
      { fr:'trois', ipa:'tʁwa', vi:'ba', pos:'số từ' },
      { fr:'quatre', ipa:'katʁ', vi:'bốn', pos:'số từ' },
      { fr:'cinq', ipa:'sɛ̃k', vi:'năm', pos:'số từ' },
      { fr:'six', ipa:'sis', vi:'sáu', pos:'số từ', note:'Đứng lẻ đọc «xít», trước danh từ phụ âm thì «x» câm: six livres.' },
      { fr:'sept', ipa:'sɛt', vi:'bảy', pos:'số từ' },
      { fr:'huit', ipa:'ɥit', vi:'tám', pos:'số từ' },
      { fr:'neuf', ipa:'nœf', vi:'chín; mới', pos:'số từ, tính từ' },
      { fr:'dix', ipa:'dis', vi:'mười', pos:'số từ' },
      { fr:'vingt', ipa:'vɛ̃', vi:'hai mươi', pos:'số từ' },
      { fr:'trente', ipa:'tʁɑ̃t', vi:'ba mươi', pos:'số từ' },
      { fr:'cinquante', ipa:'sɛ̃.kɑ̃t', vi:'năm mươi', pos:'số từ' },
      { fr:'soixante', ipa:'swa.sɑ̃t', vi:'sáu mươi', pos:'số từ' },
      { fr:'cent', ipa:'sɑ̃', vi:'một trăm', pos:'số từ' },
      { fr:'heure', ipa:'œʁ', vi:'giờ', pos:'danh từ', g:'f', note:'Chữ «h» câm nên nói «une heure» nghe liền thành «uy-nơ».' },
      { fr:'minute', ipa:'mi.nyt', vi:'phút', pos:'danh từ', g:'f' },
      { fr:'demi', ipa:'də.mi', vi:'rưỡi, nửa', pos:'danh từ, tính từ', g:'m' },
      { fr:'quart', ipa:'kaʁ', vi:'một phần tư, mười lăm phút', pos:'danh từ', g:'m' },
      { fr:'midi', ipa:'mi.di', vi:'mười hai giờ trưa', pos:'danh từ', g:'m' }
    ],
    colloc:[
      { p:'Il est midi et demi.', vi:'Mười hai giờ rưỡi trưa. Nửa đêm là «minuit».', ex:'On déjeune à midi et demi.' },
      { p:'à quelle heure ?', vi:'Vào lúc mấy giờ?', ex:'À quelle heure part le train ?' },
      { p:'dix heures moins le quart', vi:'Mười giờ kém mười lăm — «moins» là kém.', ex:'Je pars à dix heures moins le quart.' }
    ],
    dialogue:[
      { sp:'Quan', fr:'Pardon, quelle heure est-il ?', vi:'Cho hỏi, mấy giờ rồi ạ?' },
      { sp:'Passant', fr:'Il est neuf heures moins dix.', vi:'Chín giờ kém mười.' },
      { sp:'Quan', fr:'Merci ! Mon cours commence à neuf heures.', vi:'Cảm ơn! Lớp tôi bắt đầu lúc chín giờ.' },
      { sp:'Passant', fr:'Alors dépêchez-vous !', vi:'Vậy thì anh nhanh lên!' },
      { sp:'Quan', fr:'Oui ! La bibliothèque ferme à quelle heure ?', vi:'Vâng! Thư viện đóng cửa lúc mấy giờ ạ?' },
      { sp:'Passant', fr:'À dix-neuf heures, je crois.', vi:'Bảy giờ tối, tôi nghĩ vậy.' }
    ] },

  { level:'a1', no:4, fr:'Au café', vi:'Gọi đồ ở quán', skill:'Giao tiếp',
    grammar:[
      { form:'Động từ nhóm -er', vi:'Nhóm đông nhất, chia rất đều: parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.', note:'Bốn dạng «parle · parles · parle · parlent» đọc GIỐNG HỆT NHAU. Nghe không phân biệt được, phải nhìn chủ ngữ mới biết.', ex:{ fr:'Nous parlons vietnamien à la maison.', vi:'Ở nhà chúng tôi nói tiếng Việt.' } },
      { form:'je voudrais — cách gọi đồ lịch sự', vi:'«Je voudrais» (tôi muốn) mềm hơn «je veux» rất nhiều.', note:'Nói «je veux un café» ở quán nghe cộc lốc như ra lệnh. Câu cửa miệng của người Pháp là «Je voudrais un café, s’il vous plaît».', ex:{ fr:'Je voudrais un café, s’il vous plaît.', vi:'Cho tôi một cà phê ạ.' } },
      { form:'du / de la / des — mạo từ bộ phận', vi:'Dùng khi nói một LƯỢNG không đếm được: du pain (một ít bánh mì).', note:'Tiếng Việt bỏ trống chỗ này nên người học hay quên: «je mange pain» là sai, phải «je mange du pain».', ex:{ fr:'Je prends du thé et des gâteaux.', vi:'Tôi lấy trà và mấy cái bánh.' } },
      { form:'Sau phủ định, du/de la/des thành «de»', vi:'«J’ai du pain» → «Je n’ai pas de pain».', note:'Quy tắc gọn mà rất hay quên. Ngoại lệ: với động từ être thì giữ nguyên — «Ce n’est pas du thé».', ex:{ fr:'Je ne prends pas de sucre, merci.', vi:'Tôi không lấy đường, cảm ơn.' } }
    ],
    vocab:[
      { fr:'café', ipa:'ka.fe', vi:'cà phê; quán cà phê', pos:'danh từ', g:'m' },
      { fr:'thé', ipa:'te', vi:'trà', pos:'danh từ', g:'m' },
      { fr:'eau', ipa:'o', vi:'nước', pos:'danh từ', g:'f', note:'Giống cái nhưng đi với «de l’eau» vì bắt đầu bằng nguyên âm.' },
      { fr:'pain', ipa:'pɛ̃', vi:'bánh mì', pos:'danh từ', g:'m' },
      { fr:'gâteau', ipa:'ɡɑ.to', vi:'bánh ngọt', pos:'danh từ', g:'m', note:'Số nhiều: gâteaux.' },
      { fr:'sucre', ipa:'sykʁ', vi:'đường', pos:'danh từ', g:'m' },
      { fr:'lait', ipa:'lɛ', vi:'sữa', pos:'danh từ', g:'m' },
      { fr:'addition', ipa:'a.di.sjɔ̃', vi:'hoá đơn', pos:'danh từ', g:'f' },
      { fr:'serveur', ipa:'sɛʁ.vœʁ', vi:'người phục vụ', pos:'danh từ', g:'m', note:'Giống cái: serveuse.' },
      { fr:'table', ipa:'tabl', vi:'cái bàn', pos:'danh từ', g:'f' },
      { fr:'terrasse', ipa:'te.ʁas', vi:'chỗ ngồi ngoài trời', pos:'danh từ', g:'f', note:'Ngồi «en terrasse» là nếp sống rất Pháp.' },
      { fr:'boire', ipa:'bwaʁ', vi:'uống', pos:'động từ' },
      { fr:'manger', ipa:'mɑ̃.ʒe', vi:'ăn', pos:'động từ' },
      { fr:'prendre', ipa:'pʁɑ̃dʁ', vi:'lấy, dùng, gọi món', pos:'động từ', note:'Gọi đồ ăn uống dùng «prendre» chứ hiếm khi dùng «manger».' },
      { fr:'vouloir', ipa:'vu.lwaʁ', vi:'muốn', pos:'động từ' },
      { fr:'parler', ipa:'paʁ.le', vi:'nói', pos:'động từ' },
      { fr:'chaud', ipa:'ʃo', vi:'nóng', pos:'tính từ' },
      { fr:'froid', ipa:'fʁwa', vi:'lạnh', pos:'tính từ' },
      { fr:'bon', ipa:'bɔ̃', vi:'ngon, tốt', pos:'tính từ', note:'Giống cái: bonne.' },
      { fr:'combien', ipa:'kɔ̃.bjɛ̃', vi:'bao nhiêu', pos:'trạng từ nghi vấn' }
    ],
    colloc:[
      { p:'s’il vous plaît', vi:'Làm ơn — gần như bắt buộc ở cuối mọi câu nhờ vả. Thân mật: «s’il te plaît».', ex:'Un café, s’il vous plaît.' },
      { p:'L’addition, s’il vous plaît.', vi:'Cho tôi thanh toán. Ở Pháp phải gọi, phục vụ không tự mang ra.', ex:'Excusez-moi, l’addition s’il vous plaît.' },
      { p:'un café noisette', vi:'Cà phê pha chút sữa — tên gọi theo màu hạt dẻ.', ex:'Je prends un café noisette.' }
    ],
    dialogue:[
      { sp:'Serveur', fr:'Bonjour ! Vous désirez ?', vi:'Chào anh! Anh dùng gì ạ?' },
      { sp:'Quan', fr:'Je voudrais un café, s’il vous plaît.', vi:'Cho tôi một cà phê ạ.' },
      { sp:'Serveur', fr:'Avec du lait ou du sucre ?', vi:'Anh có dùng sữa hay đường không?' },
      { sp:'Quan', fr:'Sans sucre, merci. Et un verre d’eau.', vi:'Không đường, cảm ơn. Và một cốc nước.' },
      { sp:'Serveur', fr:'Très bien. Vous mangez quelque chose ?', vi:'Vâng. Anh có ăn gì không?' },
      { sp:'Quan', fr:'Non merci, je n’ai pas faim.', vi:'Không, cảm ơn, tôi không đói.' },
      { sp:'Quan', fr:'L’addition, s’il vous plaît. C’est combien ?', vi:'Cho tôi thanh toán ạ. Hết bao nhiêu?' },
      { sp:'Serveur', fr:'Trois euros cinquante.', vi:'Ba euro rưỡi.' }
    ] },

  { level:'a1', no:5, fr:'En ville', vi:'Đi lại và hỏi đường', skill:'Giao tiếp',
    grammar:[
      { form:'aller — đi', vi:'je vais · tu vas · il va · nous allons · vous allez · ils vont.', note:'Cũng dùng để hỏi thăm sức khoẻ: «Comment ça va ?» nghĩa đen là «mọi thứ đi thế nào?».', ex:{ fr:'Je vais à la gare.', vi:'Tôi đi ra ga.' } },
      { form:'à + le = au · à + les = aux', vi:'Giới từ «à» dính vào mạo từ giống đực.', note:'Không bao giờ viết «à le». Với giống cái thì không dính: à la gare. Trước nguyên âm: à l’hôtel.', ex:{ fr:'Je vais au marché et aux magasins.', vi:'Tôi đi ra chợ và đi các cửa hàng.' } },
      { form:'il y a — có', vi:'Câu bất biến, nghĩa là «có tồn tại».', note:'Phủ định: «il n’y a pas de…». Nói nhanh nghe thành «ya» — «Y a un problème».', ex:{ fr:'Il y a une pharmacie près d’ici ?', vi:'Gần đây có hiệu thuốc nào không?' } },
      { form:'Hỏi đường bằng «Où est…?»', vi:'«Où» là ở đâu.', note:'Lịch sự hơn thì mở đầu bằng «Pardon» hoặc «Excusez-moi» rồi mới hỏi — hỏi trống không bị coi là bất nhã.', ex:{ fr:'Excusez-moi, où est la gare ?', vi:'Xin lỗi, ga ở đâu ạ?' } }
    ],
    vocab:[
      { fr:'ville', ipa:'vil', vi:'thành phố', pos:'danh từ', g:'f' },
      { fr:'rue', ipa:'ʁy', vi:'phố, đường', pos:'danh từ', g:'f' },
      { fr:'gare', ipa:'ɡaʁ', vi:'nhà ga', pos:'danh từ', g:'f' },
      { fr:'métro', ipa:'me.tʁo', vi:'tàu điện ngầm', pos:'danh từ', g:'m' },
      { fr:'bus', ipa:'bys', vi:'xe buýt', pos:'danh từ', g:'m' },
      { fr:'marché', ipa:'maʁ.ʃe', vi:'chợ', pos:'danh từ', g:'m' },
      { fr:'magasin', ipa:'ma.ɡa.zɛ̃', vi:'cửa hàng', pos:'danh từ', g:'m' },
      { fr:'boulangerie', ipa:'bu.lɑ̃.ʒʁi', vi:'tiệm bánh mì', pos:'danh từ', g:'f' },
      { fr:'pharmacie', ipa:'faʁ.ma.si', vi:'hiệu thuốc', pos:'danh từ', g:'f' },
      { fr:'école', ipa:'e.kɔl', vi:'trường học', pos:'danh từ', g:'f' },
      { fr:'hôtel', ipa:'o.tɛl', vi:'khách sạn', pos:'danh từ', g:'m' },
      { fr:'droite', ipa:'dʁwat', vi:'bên phải', pos:'danh từ', g:'f' },
      { fr:'gauche', ipa:'ɡoʃ', vi:'bên trái', pos:'danh từ', g:'f' },
      { fr:'tout droit', ipa:'tu dʁwa', vi:'đi thẳng', pos:'trạng từ', note:'Đừng lẫn với «à droite» (rẽ phải) — chỉ khác một chữ mà đi sai hẳn đường.' },
      { fr:'près', ipa:'pʁɛ', vi:'gần', pos:'trạng từ' },
      { fr:'loin', ipa:'lwɛ̃', vi:'xa', pos:'trạng từ' },
      { fr:'aller', ipa:'a.le', vi:'đi', pos:'động từ' },
      { fr:'tourner', ipa:'tuʁ.ne', vi:'rẽ, quay', pos:'động từ' },
      { fr:'où', ipa:'u', vi:'ở đâu', pos:'trạng từ nghi vấn' },
      { fr:'billet', ipa:'bi.jɛ', vi:'vé', pos:'danh từ', g:'m' }
    ],
    colloc:[
      { p:'Tournez à droite.', vi:'Rẽ phải. Rẽ trái là «tournez à gauche».', ex:'Tournez à droite après la banque.' },
      { p:'C’est loin d’ici ?', vi:'Có xa đây không?', ex:'La gare, c’est loin d’ici ?' },
      { p:'prendre le métro', vi:'Đi tàu điện ngầm — dùng «prendre», không dùng «aller par».', ex:'Je prends le métro tous les jours.' }
    ],
    dialogue:[
      { sp:'Quan', fr:'Excusez-moi madame, où est la gare ?', vi:'Xin lỗi bà, ga ở đâu ạ?' },
      { sp:'Dame', fr:'Allez tout droit, puis tournez à gauche.', vi:'Anh đi thẳng, rồi rẽ trái.' },
      { sp:'Quan', fr:'C’est loin ?', vi:'Có xa không ạ?' },
      { sp:'Dame', fr:'Non, c’est à dix minutes à pied.', vi:'Không, đi bộ mười phút thôi.' },
      { sp:'Quan', fr:'Il y a un métro près d’ici ?', vi:'Gần đây có bến tàu điện ngầm không ạ?' },
      { sp:'Dame', fr:'Oui, mais la gare est plus près.', vi:'Có, nhưng ga còn gần hơn.' },
      { sp:'Quan', fr:'Merci beaucoup, madame !', vi:'Cảm ơn bà nhiều ạ!' },
      { sp:'Dame', fr:'Je vous en prie. Bonne journée !', vi:'Không có gì. Chúc anh một ngày tốt lành!' }
    ] }

  ]
};

if (typeof window !== 'undefined') window.COURSE_FR = COURSE_FR;
if (typeof module !== 'undefined' && module.exports) module.exports = { COURSE_FR };
