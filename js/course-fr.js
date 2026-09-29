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
,

{ level:'a1', no:6, fr:'Le logement', vi:'Nhà cửa và đồ đạc', skill:'Từ vựng',
  grammar:[
    { form:'Giới từ chỉ vị trí', vi:'sur (trên) · sous (dưới) · dans (trong) · devant (trước) · derrière (sau) · entre (giữa) · à côté de (bên cạnh) · en face de (đối diện).',
      note:'Nhóm có «de» ở cuối thì de gặp le thành du: à côté DU lit, en face DU parc.',
      ex:{ fr:'La lampe est à côté du lit.', vi:'Cái đèn ở bên cạnh giường.' } },
    { form:'c’est và il est', vi:'c’est + danh từ (c’est une chambre), il est + tính từ hoặc nghề nghiệp (il est petit, il est étudiant).',
      note:'Người Việt hay nói «il est un étudiant» — sai. Nghề nghiệp đi sau être thì KHÔNG có mạo từ.',
      ex:{ fr:'C’est un appartement. Il est clair.', vi:'Đây là một căn hộ. Nó sáng sủa.' } },
    { form:'Tính từ hợp giống và số', vi:'petit → petite → petits → petites. Thêm -e cho giống cái, thêm -s cho số nhiều.',
      note:'Chữ -e làm phụ âm trước nó BẬT ra: petit đọc «pơ-ti», petite đọc «pơ-tít». Đây là chỗ nghe được giống.',
      ex:{ fr:'Une grande chambre et un petit salon.', vi:'Một phòng ngủ rộng và một phòng khách nhỏ.' } },
    { form:'Vị trí của tính từ', vi:'Phần lớn tính từ đứng SAU danh từ: une chambre claire. Nhưng một nhóm nhỏ đứng trước: grand, petit, beau, joli, vieux, nouveau, bon, mauvais, jeune.',
      note:'Nhớ theo nghĩa: nhóm đứng trước nói về kích cỡ, tuổi, cái đẹp và cái tốt.',
      ex:{ fr:'Un vieux immeuble avec une belle cour.', vi:'Một toà nhà cũ có cái sân đẹp.' } }
  ],
  vocab:[
    { fr:'appartement', ipa:'a.paʁ.tə.mɑ̃', vi:'căn hộ', pos:'danh từ', g:'m' },
    { fr:'immeuble', ipa:'i.mœbl', vi:'toà nhà chung cư', pos:'danh từ', g:'m' },
    { fr:'chambre', ipa:'ʃɑ̃bʁ', vi:'phòng ngủ', pos:'danh từ', g:'f' },
    { fr:'salon', ipa:'sa.lɔ̃', vi:'phòng khách', pos:'danh từ', g:'m' },
    { fr:'cuisine', ipa:'kɥi.zin', vi:'nhà bếp', pos:'danh từ', g:'f' },
    { fr:'salle de bains', ipa:'sal də bɛ̃', vi:'phòng tắm', pos:'danh từ', g:'f' },
    { fr:'lit', ipa:'li', vi:'cái giường', pos:'danh từ', g:'m' },
    { fr:'canapé', ipa:'ka.na.pe', vi:'ghế sofa', pos:'danh từ', g:'m' },
    { fr:'tapis', ipa:'ta.pi', vi:'tấm thảm', pos:'danh từ', g:'m' },
    { fr:'armoire', ipa:'aʁ.mwaʁ', vi:'cái tủ quần áo', pos:'danh từ', g:'f', note:'Bắt đầu bằng nguyên âm nên viết l’armoire — dấu nháy giấu mất giống.' },
    { fr:'étagère', ipa:'e.ta.ʒɛʁ', vi:'cái giá sách', pos:'danh từ', g:'f' },
    { fr:'fenêtre', ipa:'fə.nɛtʁ', vi:'cửa sổ', pos:'danh từ', g:'f' },
    { fr:'porte', ipa:'pɔʁt', vi:'cửa ra vào', pos:'danh từ', g:'f' },
    { fr:'mur', ipa:'myʁ', vi:'bức tường', pos:'danh từ', g:'m' },
    { fr:'loyer', ipa:'lwa.je', vi:'tiền thuê nhà', pos:'danh từ', g:'m' },
    { fr:'clair', ipa:'klɛʁ', vi:'sáng sủa', pos:'tính từ', g:'' },
    { fr:'sombre', ipa:'sɔ̃bʁ', vi:'tối', pos:'tính từ', g:'' },
    { fr:'cher', ipa:'ʃɛʁ', vi:'đắt', pos:'tính từ', g:'', note:'Giống cái là chère, đọc y hệt. Còn nghĩa nữa là «thân mến»: cher ami.' },
    { fr:'meublé', ipa:'mœ.ble', vi:'có sẵn đồ đạc', pos:'tính từ', g:'' },
    { fr:'louer', ipa:'lwe', vi:'thuê; cho thuê', pos:'động từ', g:'', note:'Một từ mà hai chiều: je loue un studio (tôi thuê) và il loue son studio (anh ấy cho thuê).' }
  ],
  colloc:[
    { p:'à louer', vi:'cho thuê — dòng chữ trên tờ rao vặt.', ex:'Studio meublé à louer, 450 euros.' },
    { p:'donner sur', vi:'nhìn ra (hướng nào).', ex:'La fenêtre donne sur la cour.' },
    { p:'bien situé', vi:'ở vị trí thuận tiện.', ex:'L’appartement est petit mais bien situé.' }
  ],
  dialogue:[
    { sp:'Quan', fr:'Bonjour, je téléphone pour le studio à louer.', vi:'Chào chị, tôi gọi về căn studio cho thuê ạ.' },
    { sp:'Agence', fr:'Oui, il est toujours libre. Il fait vingt-cinq mètres carrés.', vi:'Vâng, vẫn còn trống. Rộng hai mươi lăm mét vuông.' },
    { sp:'Quan', fr:'Il est meublé ?', vi:'Có sẵn đồ đạc không ạ?' },
    { sp:'Agence', fr:'Oui : un lit, une table, deux chaises et une armoire.', vi:'Có: một giường, một bàn, hai ghế và một tủ.' },
    { sp:'Quan', fr:'Et le loyer, c’est combien ?', vi:'Thế tiền thuê bao nhiêu ạ?' },
    { sp:'Agence', fr:'Quatre cent cinquante euros, charges comprises.', vi:'Bốn trăm năm mươi euro, đã gồm phí dịch vụ.' },
    { sp:'Quan', fr:'La fenêtre donne sur la rue ?', vi:'Cửa sổ nhìn ra phố ạ?' },
    { sp:'Agence', fr:'Non, sur une cour. C’est plus calme.', vi:'Không, nhìn ra sân trong. Yên tĩnh hơn.' }
  ] },

{ level:'a1', no:7, fr:'Faire les courses', vi:'Đi chợ và mua sắm', skill:'Giao tiếp',
  grammar:[
    { form:'Số lượng: un kilo de, beaucoup de', vi:'Sau từ chỉ lượng thì luôn là DE trần, không có mạo từ: un kilo de pommes, beaucoup de monde, un peu de sucre, trop de sel.',
      note:'Đây là lỗi dai dẳng: nói «beaucoup des pommes» là sai. Chỉ «de» thôi.',
      ex:{ fr:'Je voudrais un kilo de tomates.', vi:'Cho tôi một cân cà chua.' } },
    { form:'combien — bao nhiêu', vi:'C’est combien ? (bao nhiêu tiền) · Combien de … ? (bao nhiêu cái).',
      note:'Combien de đi thẳng với danh từ, không thêm mạo từ: combien de frères ?',
      ex:{ fr:'Combien de pommes voulez-vous ?', vi:'Anh muốn mấy quả táo?' } },
    { form:'So sánh: plus / moins / aussi … que', vi:'plus cher que (đắt hơn) · moins cher que (rẻ hơn) · aussi cher que (đắt bằng).',
      note:'bon có dạng so sánh riêng: meilleur, không nói «plus bon». Giống good → better trong tiếng Anh.',
      ex:{ fr:'Le marché est moins cher que le supermarché.', vi:'Chợ rẻ hơn siêu thị.' } },
    { form:'Động từ prendre', vi:'je prends · tu prends · il prend · nous prenons · vous prenez · ils prennent.',
      note:'Dùng rất rộng: prendre le bus (đi xe buýt), prendre un café (uống cà phê), prendre une photo (chụp ảnh).',
      ex:{ fr:'Je prends deux baguettes, s’il vous plaît.', vi:'Cho tôi hai ổ bánh mì.' } }
  ],
  vocab:[
    { fr:'supermarché', ipa:'sy.pɛʁ.maʁ.ʃe', vi:'siêu thị', pos:'danh từ', g:'m' },
    { fr:'boucherie', ipa:'bu.ʃʁi', vi:'hàng thịt', pos:'danh từ', g:'f' },
    { fr:'épicerie', ipa:'e.pis.ʁi', vi:'cửa hàng tạp hoá', pos:'danh từ', g:'f' },
    { fr:'monnaie', ipa:'mɔ.nɛ', vi:'tiền lẻ, tiền thối lại', pos:'danh từ', g:'f', note:'Khác argent (tiền nói chung). «Vous avez la monnaie ?» là hỏi tiền lẻ.' },
    { fr:'caisse', ipa:'kɛs', vi:'quầy thu ngân', pos:'danh từ', g:'f' },
    { fr:'prix', ipa:'pʁi', vi:'giá', pos:'danh từ', g:'m' },
    { fr:'kilo', ipa:'ki.lo', vi:'cân, ki-lô', pos:'danh từ', g:'m' },
    { fr:'pomme', ipa:'pɔm', vi:'quả táo', pos:'danh từ', g:'f' },
    { fr:'tomate', ipa:'tɔ.mat', vi:'quả cà chua', pos:'danh từ', g:'f' },
    { fr:'oeuf', ipa:'œf', vi:'quả trứng', pos:'danh từ', g:'m', note:'Số ít đọc «ớp», số nhiều des oeufs đọc «đê-zơ» — chữ f biến mất hẳn.' },
    { fr:'fromage', ipa:'fʁɔ.maʒ', vi:'phô mai', pos:'danh từ', g:'m' },
    { fr:'viande', ipa:'vjɑ̃d', vi:'thịt', pos:'danh từ', g:'f' },
    { fr:'poisson', ipa:'pwa.sɔ̃', vi:'cá', pos:'danh từ', g:'m' },
    { fr:'légume', ipa:'le.ɡym', vi:'rau củ', pos:'danh từ', g:'m' },
    { fr:'fruit', ipa:'fʁɥi', vi:'quả, trái cây', pos:'danh từ', g:'m' },
    { fr:'sac', ipa:'sak', vi:'cái túi', pos:'danh từ', g:'m' },
    { fr:'gratuit', ipa:'ɡʁa.tɥi', vi:'miễn phí', pos:'tính từ', g:'' },
    { fr:'frais', ipa:'fʁɛ', vi:'tươi', pos:'tính từ', g:'', note:'Giống cái là fraîche — nghe rõ chữ «sơ» ở cuối.' },
    { fr:'coûter', ipa:'ku.te', vi:'có giá', pos:'động từ', g:'' },
    { fr:'payer', ipa:'pe.je', vi:'trả tiền', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'C’est combien ?', vi:'Bao nhiêu tiền? — câu hỏi giá thông dụng nhất.', ex:'C’est combien, le kilo de pommes ?' },
    { p:'Et avec ceci ?', vi:'Anh chị dùng thêm gì nữa ạ? — câu người bán luôn hỏi.', ex:'— Et avec ceci ? — Ce sera tout, merci.' },
    { p:'payer par carte', vi:'trả bằng thẻ. Trả tiền mặt là «payer en espèces».', ex:'Je peux payer par carte ?' }
  ],
  dialogue:[
    { sp:'Vendeur', fr:'Bonjour ! Vous désirez ?', vi:'Chào anh! Anh cần gì ạ?' },
    { sp:'Quan', fr:'Un kilo de pommes, s’il vous plaît.', vi:'Cho tôi một cân táo ạ.' },
    { sp:'Vendeur', fr:'Voilà. Et avec ceci ?', vi:'Đây ạ. Anh dùng thêm gì nữa không?' },
    { sp:'Quan', fr:'Un peu de fromage. C’est combien, celui-là ?', vi:'Một ít phô mai. Loại kia bao nhiêu ạ?' },
    { sp:'Vendeur', fr:'Vingt-deux euros le kilo. Il est très frais.', vi:'Hai mươi hai euro một cân. Tươi lắm.' },
    { sp:'Quan', fr:'Deux cents grammes alors.', vi:'Vậy cho tôi hai trăm gam.' },
    { sp:'Vendeur', fr:'Ça fait neuf euros quarante en tout.', vi:'Tất cả là chín euro bốn mươi.' },
    { sp:'Quan', fr:'Je peux payer par carte ?', vi:'Tôi trả bằng thẻ được không ạ?' }
  ] },

{ level:'a1', no:8, fr:'Une journée ordinaire', vi:'Một ngày bình thường', skill:'Từ vựng',
  grammar:[
    { form:'Động từ phản thân', vi:'se lever, se laver, s’habiller, se coucher. Chia: je me lève · tu te lèves · il se lève · nous nous levons · vous vous levez · ils se lèvent.',
      note:'Đại từ me/te/se đứng TRƯỚC động từ. Phủ định thì ne bọc cả cụm: je ne me lève pas.',
      ex:{ fr:'Je me lève à six heures et demie.', vi:'Tôi dậy lúc sáu rưỡi.' } },
    { form:'Trạng từ tần suất', vi:'toujours (luôn) · souvent (thường) · quelquefois (thỉnh thoảng) · rarement (hiếm khi) · jamais (không bao giờ).',
      note:'jamais luôn đi với ne: je ne bois jamais de café. Không có ne thì nghĩa đảo ngược.',
      ex:{ fr:'Je prends souvent le métro.', vi:'Tôi hay đi tàu điện ngầm.' } },
    { form:'Vị trí của trạng từ', vi:'Trạng từ ngắn đứng NGAY SAU động từ chia: je mange souvent ici. Không đứng giữa chủ ngữ và động từ như tiếng Anh.',
      note:'Nói «je souvent mange» là sai, dù tiếng Anh cho phép «I often eat».',
      ex:{ fr:'Il arrive toujours en retard.', vi:'Anh ấy lúc nào cũng đến muộn.' } },
    { form:'Động từ faire', vi:'je fais · tu fais · il fait · nous faisons · vous faites · ils font.',
      note:'vous faites và ils font là hai dạng bất quy tắc phải nhớ riêng. faire dùng cho việc nhà và thời tiết.',
      ex:{ fr:'Le soir, je fais la vaisselle.', vi:'Buổi tối tôi rửa bát.' } }
  ],
  vocab:[
    { fr:'journée', ipa:'ʒuʁ.ne', vi:'ngày (khoảng thời gian)', pos:'danh từ', g:'f', note:'jour là ngày như một đơn vị, journée là cả khoảng ngày đó. «Bonne journée!» chúc một ngày tốt lành.' },
    { fr:'matin', ipa:'ma.tɛ̃', vi:'buổi sáng', pos:'danh từ', g:'m' },
    { fr:'après-midi', ipa:'a.pʁɛ.mi.di', vi:'buổi chiều', pos:'danh từ', g:'m' },
    { fr:'soir', ipa:'swaʁ', vi:'buổi tối', pos:'danh từ', g:'m' },
    { fr:'nuit', ipa:'nɥi', vi:'đêm', pos:'danh từ', g:'f' },
    { fr:'réveil', ipa:'ʁe.vɛj', vi:'đồng hồ báo thức', pos:'danh từ', g:'m' },
    { fr:'douche', ipa:'duʃ', vi:'vòi sen, việc tắm', pos:'danh từ', g:'f' },
    { fr:'petit-déjeuner', ipa:'pə.ti.de.ʒø.ne', vi:'bữa sáng', pos:'danh từ', g:'m' },
    { fr:'déjeuner', ipa:'de.ʒø.ne', vi:'bữa trưa', pos:'danh từ', g:'m' },
    { fr:'dîner', ipa:'di.ne', vi:'bữa tối', pos:'danh từ', g:'m' },
    { fr:'travail', ipa:'tʁa.vaj', vi:'công việc', pos:'danh từ', g:'m' },
    { fr:'se lever', ipa:'sə lə.ve', vi:'thức dậy', pos:'động từ', g:'' },
    { fr:'se coucher', ipa:'sə ku.ʃe', vi:'đi ngủ', pos:'động từ', g:'' },
    { fr:'s’habiller', ipa:'sa.bi.je', vi:'mặc quần áo', pos:'động từ', g:'' },
    { fr:'commencer', ipa:'kɔ.mɑ̃.se', vi:'bắt đầu', pos:'động từ', g:'' },
    { fr:'finir', ipa:'fi.niʁ', vi:'kết thúc', pos:'động từ', g:'', note:'Nhóm -ir: je finis, nous finissons. Phần -iss- xuất hiện ở số nhiều.' },
    { fr:'rentrer', ipa:'ʁɑ̃.tʁe', vi:'về nhà', pos:'động từ', g:'' },
    { fr:'toujours', ipa:'tu.ʒuʁ', vi:'luôn luôn', pos:'trạng từ', g:'' },
    { fr:'souvent', ipa:'su.vɑ̃', vi:'thường xuyên', pos:'trạng từ', g:'' },
    { fr:'jamais', ipa:'ʒa.mɛ', vi:'không bao giờ', pos:'trạng từ', g:'' }
  ],
  colloc:[
    { p:'de bonne heure', vi:'sớm — trang trọng hơn «tôt».', ex:'Je me lève de bonne heure.' },
    { p:'être en retard', vi:'bị muộn. Đúng giờ là «être à l’heure».', ex:'Désolé, je suis en retard.' },
    { p:'faire la grasse matinée', vi:'ngủ nướng — nghĩa đen là «làm một buổi sáng béo».', ex:'Le dimanche, je fais la grasse matinée.' }
  ],
  dialogue:[
    { sp:'Léa', fr:'Tu te lèves à quelle heure, toi ?', vi:'Cậu dậy lúc mấy giờ?' },
    { sp:'Quan', fr:'À six heures et demie, en semaine.', vi:'Sáu rưỡi, ngày thường.' },
    { sp:'Léa', fr:'Si tôt ? Moi, jamais avant huit heures.', vi:'Sớm thế? Tớ thì không bao giờ trước tám giờ.' },
    { sp:'Quan', fr:'Mon cours commence à huit heures quinze.', vi:'Tiết học của tớ bắt đầu lúc tám giờ mười lăm.' },
    { sp:'Léa', fr:'Et tu rentres quand ?', vi:'Thế mấy giờ cậu về?' },
    { sp:'Quan', fr:'Vers dix-huit heures. Après, je fais la cuisine.', vi:'Khoảng sáu giờ chiều. Xong về nấu ăn.' },
    { sp:'Léa', fr:'Tu te couches tôt alors ?', vi:'Vậy cậu ngủ sớm nhỉ?' },
    { sp:'Quan', fr:'Vers vingt-trois heures. Le week-end, je fais la grasse matinée.', vi:'Khoảng mười một giờ đêm. Cuối tuần thì tớ ngủ nướng.' }
  ] },

{ level:'a1', no:9, fr:'Le temps et les saisons', vi:'Thời tiết và bốn mùa', skill:'Từ vựng',
  grammar:[
    { form:'Thời tiết với il fait', vi:'il fait beau · il fait chaud · il fait froid · il fait du vent · il fait du soleil.',
      note:'Chữ «il» ở đây không chỉ ai cả, chỉ là chủ ngữ hình thức. Nghe «il fait froid» đừng hiểu là «anh ấy».',
      ex:{ fr:'Aujourd’hui il fait froid et il pleut.', vi:'Hôm nay trời lạnh và đang mưa.' } },
    { form:'Mưa và tuyết có động từ riêng', vi:'il pleut (trời mưa) · il neige (trời có tuyết). Không nói «il fait pluie».',
      note:'Danh từ tương ứng là la pluie và la neige, dùng khi nói về hiện tượng chứ không phải trạng thái lúc này.',
      ex:{ fr:'Il neige depuis ce matin.', vi:'Trời có tuyết từ sáng.' } },
    { form:'Mùa: en hiver nhưng au printemps', vi:'en hiver · en été · en automne — nhưng au printemps.',
      note:'Ba mùa kia bắt đầu bằng nguyên âm nên dùng en; printemps bắt đầu bằng phụ âm nên dùng au.',
      ex:{ fr:'Au printemps, il fait doux.', vi:'Mùa xuân trời dịu mát.' } },
    { form:'Ngày và tháng', vi:'lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Tháng: janvier … décembre. Tất cả viết thường.',
      note:'«le lundi» có mạo từ nghĩa là thứ Hai nào cũng thế; «lundi» trần là thứ Hai tuần này.',
      ex:{ fr:'Le lundi, j’ai cours. Lundi, je vais à Paris.', vi:'Thứ Hai nào tôi cũng có học. Thứ Hai này tôi đi Paris.' } }
  ],
  vocab:[
    { fr:'temps', ipa:'tɑ̃', vi:'thời tiết; thời gian', pos:'danh từ', g:'m', note:'Một từ hai nghĩa: «Quel temps fait-il ?» hỏi thời tiết, «Je n’ai pas le temps» là không có thời gian.' },
    { fr:'saison', ipa:'sɛ.zɔ̃', vi:'mùa', pos:'danh từ', g:'f' },
    { fr:'printemps', ipa:'pʁɛ̃.tɑ̃', vi:'mùa xuân', pos:'danh từ', g:'m' },
    { fr:'été', ipa:'e.te', vi:'mùa hè', pos:'danh từ', g:'m' },
    { fr:'automne', ipa:'ɔ.tɔn', vi:'mùa thu', pos:'danh từ', g:'m' },
    { fr:'hiver', ipa:'i.vɛʁ', vi:'mùa đông', pos:'danh từ', g:'m' },
    { fr:'pluie', ipa:'plɥi', vi:'mưa', pos:'danh từ', g:'f' },
    { fr:'neige', ipa:'nɛʒ', vi:'tuyết', pos:'danh từ', g:'f' },
    { fr:'vent', ipa:'vɑ̃', vi:'gió', pos:'danh từ', g:'m' },
    { fr:'soleil', ipa:'sɔ.lɛj', vi:'mặt trời', pos:'danh từ', g:'m' },
    { fr:'nuage', ipa:'nɥaʒ', vi:'đám mây', pos:'danh từ', g:'m' },
    { fr:'ciel', ipa:'sjɛl', vi:'bầu trời', pos:'danh từ', g:'m' },
    { fr:'parapluie', ipa:'pa.ʁa.plɥi', vi:'cái dù', pos:'danh từ', g:'m' },
    { fr:'degré', ipa:'də.ɡʁe', vi:'độ (nhiệt độ)', pos:'danh từ', g:'m' },
    { fr:'orage', ipa:'ɔ.ʁaʒ', vi:'cơn giông', pos:'danh từ', g:'m' },
    { fr:'brouillard', ipa:'bʁu.jaʁ', vi:'sương mù', pos:'danh từ', g:'m' },
    { fr:'doux', ipa:'du', vi:'dịu, ôn hoà', pos:'tính từ', g:'', note:'Giống cái là douce. Cũng dùng cho vị ngọt nhẹ và tính cách hiền.' },
    { fr:'humide', ipa:'y.mid', vi:'ẩm', pos:'tính từ', g:'' },
    { fr:'pleuvoir', ipa:'plø.vwaʁ', vi:'mưa', pos:'động từ', g:'' },
    { fr:'neiger', ipa:'nɛ.ʒe', vi:'có tuyết', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'Quel temps fait-il ?', vi:'Thời tiết thế nào? — câu hỏi chuẩn.', ex:'— Quel temps fait-il ? — Il fait gris.' },
    { p:'il fait un temps de chien', vi:'thời tiết chó má — trời xấu kinh khủng.', ex:'Ne sors pas, il fait un temps de chien.' },
    { p:'sous la pluie', vi:'dưới trời mưa.', ex:'Il a marché une heure sous la pluie.' }
  ],
  dialogue:[
    { sp:'Léa', fr:'Tu sors ce week-end ?', vi:'Cuối tuần cậu có đi đâu không?' },
    { sp:'Quan', fr:'Ça dépend du temps. Il fait quoi samedi ?', vi:'Còn tuỳ thời tiết. Thứ Bảy trời thế nào?' },
    { sp:'Léa', fr:'Il va pleuvoir le matin, puis il fera beau.', vi:'Buổi sáng sẽ mưa, rồi trời sẽ đẹp.' },
    { sp:'Quan', fr:'Il fait combien de degrés ?', vi:'Bao nhiêu độ vậy?' },
    { sp:'Léa', fr:'Douze le matin, dix-huit l’après-midi.', vi:'Sáng mười hai, chiều mười tám.' },
    { sp:'Quan', fr:'C’est doux pour un mois de mars.', vi:'Vậy là dịu, so với tháng Ba.' },
    { sp:'Léa', fr:'Oui. En hiver, ici, il fait moins cinq.', vi:'Ừ. Mùa đông ở đây âm năm độ.' },
    { sp:'Quan', fr:'Alors je prends quand même mon parapluie.', vi:'Thế thì tớ vẫn cứ mang dù.' }
  ] },

{ level:'a1', no:10, fr:'Les vêtements et les couleurs', vi:'Quần áo và màu sắc', skill:'Từ vựng',
  grammar:[
    { form:'Tính từ chỉ định: ce / cet / cette / ces', vi:'ce pull (đực) · cet homme (đực, trước nguyên âm) · cette veste (cái) · ces chaussures (số nhiều).',
      note:'cet chỉ dùng trước nguyên âm hoặc h câm, để khỏi phải đọc hai nguyên âm liền nhau.',
      ex:{ fr:'Ce manteau est trop grand.', vi:'Cái áo khoác này rộng quá.' } },
    { form:'Màu sắc hợp giống và số', vi:'un pull vert → une veste verte · un pantalon noir → une jupe noire.',
      note:'Một số màu KHÔNG đổi: marron, orange, và các màu ghép như bleu clair, vert foncé.',
      ex:{ fr:'Une chemise blanche et un pantalon noir.', vi:'Một cái áo sơ mi trắng và một cái quần đen.' } },
    { form:'trop và très', vi:'très là rất (khen), trop là quá (chê, vượt mức).',
      note:'Người học hay nhầm hai từ này. «C’est très cher» là đắt thật đấy; «c’est trop cher» là đắt quá, tôi không mua.',
      ex:{ fr:'Elle est très belle mais trop chère.', vi:'Nó đẹp lắm nhưng đắt quá.' } },
    { form:'Động từ mettre', vi:'je mets · tu mets · il met · nous mettons · vous mettez · ils mettent.',
      note:'mettre là mặc vào, đặt vào; porter là đang mặc trên người. Hai việc khác nhau.',
      ex:{ fr:'Je mets un manteau parce qu’il fait froid.', vi:'Tôi mặc áo khoác vì trời lạnh.' } }
  ],
  vocab:[
    { fr:'vêtement', ipa:'vɛt.mɑ̃', vi:'quần áo', pos:'danh từ', g:'m' },
    { fr:'chemise', ipa:'ʃə.miz', vi:'áo sơ mi', pos:'danh từ', g:'f' },
    { fr:'pull', ipa:'pyl', vi:'áo len', pos:'danh từ', g:'m' },
    { fr:'veste', ipa:'vɛst', vi:'áo vest, áo khoác nhẹ', pos:'danh từ', g:'f' },
    { fr:'manteau', ipa:'mɑ̃.to', vi:'áo khoác dày', pos:'danh từ', g:'m' },
    { fr:'pantalon', ipa:'pɑ̃.ta.lɔ̃', vi:'cái quần', pos:'danh từ', g:'m', note:'Khác tiếng Anh, tiếng Pháp dùng SỐ ÍT: un pantalon, chứ không phải «trousers».' },
    { fr:'jupe', ipa:'ʒyp', vi:'cái váy', pos:'danh từ', g:'f' },
    { fr:'robe', ipa:'ʁɔb', vi:'áo đầm', pos:'danh từ', g:'f' },
    { fr:'chaussure', ipa:'ʃo.syʁ', vi:'cái giày', pos:'danh từ', g:'f' },
    { fr:'chaussette', ipa:'ʃo.sɛt', vi:'cái tất', pos:'danh từ', g:'f' },
    { fr:'taille', ipa:'taj', vi:'cỡ, kích cỡ', pos:'danh từ', g:'f' },
    { fr:'couleur', ipa:'ku.lœʁ', vi:'màu sắc', pos:'danh từ', g:'f' },
    { fr:'blanc', ipa:'blɑ̃', vi:'trắng', pos:'tính từ', g:'', note:'Giống cái là blanche — nghe rõ chữ «sơ» ở cuối.' },
    { fr:'noir', ipa:'nwaʁ', vi:'đen', pos:'tính từ', g:'' },
    { fr:'rouge', ipa:'ʁuʒ', vi:'đỏ', pos:'tính từ', g:'' },
    { fr:'bleu', ipa:'blø', vi:'xanh lam', pos:'tính từ', g:'' },
    { fr:'vert', ipa:'vɛʁ', vi:'xanh lá', pos:'tính từ', g:'', note:'Đọc y hệt verre (cái ly), vers (về phía) và ver (con giun). Phải dựa vào cả câu.' },
    { fr:'marron', ipa:'ma.ʁɔ̃', vi:'nâu', pos:'tính từ', g:'', note:'Không bao giờ đổi theo giống hay số: des chaussures marron.' },
    { fr:'porter', ipa:'pɔʁ.te', vi:'mặc, mang trên người', pos:'động từ', g:'' },
    { fr:'essayer', ipa:'e.sɛ.je', vi:'thử', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'faire du 40', vi:'mặc cỡ 40 — cách nói cỡ quần áo và giày.', ex:'Je fais du quarante en chaussures.' },
    { p:'la cabine d’essayage', vi:'phòng thử đồ.', ex:'La cabine d’essayage est au fond à droite.' },
    { p:'ça te va bien', vi:'cái này hợp với bạn.', ex:'Ce pull vert te va très bien.' }
  ],
  dialogue:[
    { sp:'Vendeuse', fr:'Bonjour, je peux vous aider ?', vi:'Chào anh, tôi giúp được gì ạ?' },
    { sp:'Quan', fr:'Je cherche un manteau pour l’hiver.', vi:'Tôi tìm một cái áo khoác mùa đông.' },
    { sp:'Vendeuse', fr:'Vous faites quelle taille ?', vi:'Anh mặc cỡ nào ạ?' },
    { sp:'Quan', fr:'Du M, je crois. Je peux essayer celui-ci ?', vi:'Chắc là M. Tôi thử cái này được không?' },
    { sp:'Vendeuse', fr:'Bien sûr. La cabine est au fond.', vi:'Tất nhiên rồi. Phòng thử ở phía trong.' },
    { sp:'Quan', fr:'Il est un peu trop grand. Vous l’avez en noir ?', vi:'Hơi rộng một chút. Chị có màu đen không?' },
    { sp:'Vendeuse', fr:'En noir, seulement en L. Mais ce bleu foncé vous va bien.', vi:'Màu đen chỉ còn cỡ L. Nhưng màu xanh đậm này hợp với anh đấy.' },
    { sp:'Quan', fr:'D’accord, je le prends.', vi:'Vâng, tôi lấy cái này.' }
  ] },

{ level:'a1', no:11, fr:'Chez le médecin', vi:'Đi khám bệnh', skill:'Giao tiếp',
  grammar:[
    { form:'avoir mal à', vi:'j’ai mal à la tête · au ventre · aux dents · à la gorge.',
      note:'à + le = au, à + les = aux. Nên «au ventre» chứ không phải «à le ventre».',
      ex:{ fr:'J’ai mal à la gorge depuis hier.', vi:'Tôi đau họng từ hôm qua.' } },
    { form:'Mệnh lệnh thức', vi:'Bỏ chủ ngữ đi là thành câu sai khiến: Buvez de l’eau ! Reposez-vous ! Ne sortez pas !',
      note:'Động từ nhóm -er mất chữ -s ở ngôi tu: tu manges → Mange !',
      ex:{ fr:'Prenez ce médicament deux fois par jour.', vi:'Uống thuốc này ngày hai lần.' } },
    { form:'depuis — từ bao giờ', vi:'depuis + mốc thời gian (depuis lundi) hoặc + khoảng thời gian (depuis trois jours).',
      note:'Câu dùng depuis thì động từ ở HIỆN TẠI, không ở quá khứ như tiếng Việt hay nghĩ: «j’habite ici depuis un an».',
      ex:{ fr:'Je tousse depuis une semaine.', vi:'Tôi ho đã một tuần rồi.' } },
    { form:'Động từ pouvoir và devoir', vi:'pouvoir (có thể): je peux · tu peux · il peut · nous pouvons · ils peuvent. devoir (phải): je dois · tu dois · il doit · nous devons · ils doivent.',
      note:'Cả hai đi thẳng với động từ nguyên thể: je peux venir, je dois partir.',
      ex:{ fr:'Vous devez vous reposer deux jours.', vi:'Anh phải nghỉ hai ngày.' } }
  ],
  vocab:[
    { fr:'médecin', ipa:'med.sɛ̃', vi:'bác sĩ', pos:'danh từ', g:'m', note:'Luôn giống đực dù bác sĩ là nữ. Muốn rõ thì nói «une femme médecin».' },
    { fr:'infirmière', ipa:'ɛ̃.fiʁ.mjɛʁ', vi:'y tá (nữ)', pos:'danh từ', g:'f' },
    { fr:'ordonnance', ipa:'ɔʁ.dɔ.nɑ̃s', vi:'đơn thuốc', pos:'danh từ', g:'f' },
    { fr:'médicament', ipa:'me.di.ka.mɑ̃', vi:'thuốc', pos:'danh từ', g:'m' },
    { fr:'tête', ipa:'tɛt', vi:'cái đầu', pos:'danh từ', g:'f' },
    { fr:'ventre', ipa:'vɑ̃tʁ', vi:'cái bụng', pos:'danh từ', g:'m' },
    { fr:'gorge', ipa:'ɡɔʁʒ', vi:'cổ họng', pos:'danh từ', g:'f' },
    { fr:'dent', ipa:'dɑ̃', vi:'cái răng', pos:'danh từ', g:'f' },
    { fr:'dos', ipa:'do', vi:'cái lưng', pos:'danh từ', g:'m' },
    { fr:'fièvre', ipa:'fjɛvʁ', vi:'cơn sốt', pos:'danh từ', g:'f' },
    { fr:'rhume', ipa:'ʁym', vi:'cảm lạnh', pos:'danh từ', g:'m' },
    { fr:'rendez-vous', ipa:'ʁɑ̃.de.vu', vi:'cuộc hẹn', pos:'danh từ', g:'m' },
    { fr:'santé', ipa:'sɑ̃.te', vi:'sức khoẻ', pos:'danh từ', g:'f' },
    { fr:'malade', ipa:'ma.lad', vi:'ốm', pos:'tính từ', g:'' },
    { fr:'fatigué', ipa:'fa.ti.ɡe', vi:'mệt', pos:'tính từ', g:'' },
    { fr:'grave', ipa:'ɡʁav', vi:'nặng, nghiêm trọng', pos:'tính từ', g:'' },
    { fr:'tousser', ipa:'tu.se', vi:'ho', pos:'động từ', g:'' },
    { fr:'se reposer', ipa:'sə ʁə.po.ze', vi:'nghỉ ngơi', pos:'động từ', g:'' },
    { fr:'guérir', ipa:'ɡe.ʁiʁ', vi:'khỏi bệnh', pos:'động từ', g:'' },
    { fr:'dormir', ipa:'dɔʁ.miʁ', vi:'ngủ', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'prendre rendez-vous', vi:'đặt lịch hẹn.', ex:'Je voudrais prendre rendez-vous avec le docteur.' },
    { p:'Ce n’est pas grave.', vi:'Không sao đâu. Dùng cả khi an ủi người khác.', ex:'— Je suis désolé. — Ce n’est pas grave.' },
    { p:'être en forme', vi:'khoẻ, sung sức.', ex:'Après une semaine de repos, il est de nouveau en forme.' }
  ],
  dialogue:[
    { sp:'Médecin', fr:'Bonjour. Qu’est-ce qui ne va pas ?', vi:'Chào anh. Anh thấy trong người thế nào?' },
    { sp:'Quan', fr:'J’ai mal à la gorge depuis trois jours.', vi:'Tôi đau họng ba hôm nay rồi ạ.' },
    { sp:'Médecin', fr:'Vous avez de la fièvre ?', vi:'Anh có sốt không?' },
    { sp:'Quan', fr:'Un peu, trente-huit ce matin. Et je tousse la nuit.', vi:'Hơi sốt, sáng nay ba mươi tám độ. Ban đêm thì tôi ho.' },
    { sp:'Médecin', fr:'Ouvrez la bouche… Ce n’est pas grave, c’est un gros rhume.', vi:'Há miệng ra nào… Không nặng đâu, cảm lạnh thôi.' },
    { sp:'Quan', fr:'Je peux aller en cours demain ?', vi:'Mai tôi đi học được không ạ?' },
    { sp:'Médecin', fr:'Reposez-vous deux jours. Buvez beaucoup d’eau.', vi:'Nghỉ hai ngày đi. Uống nhiều nước vào.' },
    { sp:'Quan', fr:'D’accord. Merci, docteur.', vi:'Vâng ạ. Cảm ơn bác sĩ.' }
  ] },

{ level:'a1', no:12, fr:'Hier, qu’est-ce que tu as fait ?', vi:'Kể lại chuyện hôm qua', skill:'Ngữ pháp',
  grammar:[
    { form:'Passé composé với avoir', vi:'avoir chia ở hiện tại + quá khứ phân từ: j’ai mangé · tu as fini · il a pris.',
      note:'Quá khứ phân từ: nhóm -er thành -é (manger → mangé), nhóm -ir thành -i (finir → fini), còn lại phải học thuộc.',
      ex:{ fr:'Hier, j’ai mangé au restaurant.', vi:'Hôm qua tôi ăn ở nhà hàng.' } },
    { form:'Passé composé với être', vi:'Nhóm động từ di chuyển và đổi trạng thái: aller, venir, partir, arriver, entrer, sortir, monter, descendre, rester, tomber, naître, mourir, devenir.',
      note:'Khi đi với être thì quá khứ phân từ HỢP GIỐNG với chủ ngữ: elle est allée, ils sont allés, elles sont allées.',
      ex:{ fr:'Elle est arrivée à midi.', vi:'Cô ấy đến lúc trưa.' } },
    { form:'Phủ định ở quá khứ', vi:'ne và pas bọc lấy phần CHIA, không bọc cả cụm: je n’ai pas mangé, il n’est pas venu.',
      note:'Nói «je n’ai mangé pas» là sai. Quá khứ phân từ luôn nằm ngoài, sau pas.',
      ex:{ fr:'Je n’ai pas compris la question.', vi:'Tôi không hiểu câu hỏi.' } },
    { form:'Quá khứ phân từ bất quy tắc hay gặp', vi:'être → été · avoir → eu · faire → fait · prendre → pris · voir → vu · dire → dit · écrire → écrit · lire → lu · vouloir → voulu · pouvoir → pu.',
      note:'Học thuộc mười từ này là xử lý được phần lớn câu kể chuyện hằng ngày.',
      ex:{ fr:'J’ai vu un film et j’ai pris le métro.', vi:'Tôi xem một bộ phim rồi đi tàu điện ngầm.' } }
  ],
  vocab:[
    { fr:'hier', ipa:'jɛʁ', vi:'hôm qua', pos:'trạng từ', g:'' },
    { fr:'avant-hier', ipa:'a.vɑ̃.tjɛʁ', vi:'hôm kia', pos:'trạng từ', g:'' },
    { fr:'ce matin', ipa:'sə ma.tɛ̃', vi:'sáng nay', pos:'trạng từ', g:'' },
    { fr:'déjà', ipa:'de.ʒa', vi:'đã… rồi', pos:'trạng từ', g:'' },
    { fr:'ensuite', ipa:'ɑ̃.sɥit', vi:'sau đó', pos:'trạng từ', g:'' },
    { fr:'enfin', ipa:'ɑ̃.fɛ̃', vi:'cuối cùng', pos:'trạng từ', g:'' },
    { fr:'semaine dernière', ipa:'sə.mɛn dɛʁ.njɛʁ', vi:'tuần trước', pos:'danh từ', g:'f' },
    { fr:'film', ipa:'film', vi:'bộ phim', pos:'danh từ', g:'m' },
    { fr:'concert', ipa:'kɔ̃.sɛʁ', vi:'buổi hoà nhạc', pos:'danh từ', g:'m' },
    { fr:'musée', ipa:'my.ze', vi:'bảo tàng', pos:'danh từ', g:'m', note:'Kết thúc bằng -ée nhưng lại là giống ĐỰC. Ngoại lệ cùng nhóm: lycée.' },
    { fr:'exposition', ipa:'ɛks.po.zi.sjɔ̃', vi:'cuộc triển lãm', pos:'danh từ', g:'f' },
    { fr:'sortie', ipa:'sɔʁ.ti', vi:'buổi đi chơi; lối ra', pos:'danh từ', g:'f' },
    { fr:'voir', ipa:'vwaʁ', vi:'nhìn, xem', pos:'động từ', g:'' },
    { fr:'dire', ipa:'diʁ', vi:'nói', pos:'động từ', g:'' },
    { fr:'écrire', ipa:'e.kʁiʁ', vi:'viết', pos:'động từ', g:'' },
    { fr:'lire', ipa:'liʁ', vi:'đọc', pos:'động từ', g:'' },
    { fr:'partir', ipa:'paʁ.tiʁ', vi:'ra đi, khởi hành', pos:'động từ', g:'' },
    { fr:'arriver', ipa:'a.ʁi.ve', vi:'đến nơi', pos:'động từ', g:'' },
    { fr:'rester', ipa:'ʁɛs.te', vi:'ở lại', pos:'động từ', g:'' },
    { fr:'oublier', ipa:'u.bli.je', vi:'quên', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'Qu’est-ce que tu as fait ?', vi:'Cậu đã làm gì? — câu mở đầu quen thuộc nhất khi kể chuyện.', ex:'Alors, qu’est-ce que tu as fait ce week-end ?' },
    { p:'ça s’est bien passé', vi:'mọi chuyện ổn cả.', ex:'L’examen s’est bien passé.' },
    { p:'d’abord … ensuite … enfin', vi:'trước hết… sau đó… cuối cùng — bộ khung kể chuyện.', ex:'D’abord j’ai mangé, ensuite j’ai travaillé, enfin j’ai dormi.' }
  ],
  dialogue:[
    { sp:'Léa', fr:'Alors, qu’est-ce que tu as fait hier ?', vi:'Thế hôm qua cậu làm gì?' },
    { sp:'Quan', fr:'Je suis allé au musée avec Marc.', vi:'Tớ đi bảo tàng với Marc.' },
    { sp:'Léa', fr:'Ah oui ? Vous êtes restés longtemps ?', vi:'Thế à? Hai đứa ở đó lâu không?' },
    { sp:'Quan', fr:'Trois heures. Après, on a pris un café.', vi:'Ba tiếng. Sau đó bọn tớ đi uống cà phê.' },
    { sp:'Léa', fr:'Tu as vu l’exposition sur Hanoï ?', vi:'Cậu có xem triển lãm về Hà Nội không?' },
    { sp:'Quan', fr:'Non, je ne l’ai pas vue. Elle commence samedi.', vi:'Không, tớ chưa xem. Thứ Bảy mới mở.' },
    { sp:'Léa', fr:'On y va ensemble alors ?', vi:'Thế đi cùng nhau nhé?' },
    { sp:'Quan', fr:'Avec plaisir. J’ai déjà noté la date.', vi:'Rất sẵn lòng. Tớ ghi ngày rồi.' }
  ] },

{ level:'a1', no:13, fr:'Les transports', vi:'Tàu xe và đi lại', skill:'Giao tiếp',
  grammar:[
    { form:'Tương lai gần: aller + nguyên thể', vi:'je vais partir · tu vas prendre · il va arriver.',
      note:'Đây là cách nói tương lai thông dụng nhất trong hội thoại, dùng nhiều hơn cả thì tương lai chính thức.',
      ex:{ fr:'Je vais prendre le train de neuf heures.', vi:'Tôi sẽ đi chuyến tàu chín giờ.' } },
    { form:'en / à với phương tiện', vi:'en voiture · en train · en bus · en avion — nhưng à pied · à vélo · à moto.',
      note:'Mẹo: ngồi BÊN TRONG thì dùng en, ngồi LÊN TRÊN thì dùng à.',
      ex:{ fr:'Je vais à la fac à vélo.', vi:'Tôi đi xe đạp tới trường.' } },
    { form:'Đại từ y', vi:'y thay cho một NƠI CHỐN đã nhắc tới: — Tu vas à Paris ? — Oui, j’y vais demain.',
      note:'y đứng trước động từ chia. Trong tương lai gần thì đứng trước nguyên thể: je vais y aller.',
      ex:{ fr:'— Tu es allé à la gare ? — Oui, j’y suis allé.', vi:'— Cậu ra ga chưa? — Rồi, tớ ra rồi.' } },
    { form:'Hỏi bằng est-ce que', vi:'Est-ce que tu viens ? — cách hỏi trung tính, dùng được ở mọi tình huống.',
      note:'Ba cách hỏi cùng nghĩa: Tu viens ? (thân mật) · Est-ce que tu viens ? (trung tính) · Viens-tu ? (trang trọng, viết).',
      ex:{ fr:'Est-ce que le train part à l’heure ?', vi:'Tàu có chạy đúng giờ không ạ?' } }
  ],
  vocab:[
    { fr:'avion', ipa:'a.vjɔ̃', vi:'máy bay', pos:'danh từ', g:'m' },
    { fr:'gare routière', ipa:'ɡaʁ ʁu.tjɛʁ', vi:'bến xe khách', pos:'danh từ', g:'f' },
    { fr:'tramway', ipa:'tʁam.wɛ', vi:'tàu điện mặt đất', pos:'danh từ', g:'m' },
    { fr:'horaire', ipa:'ɔ.ʁɛʁ', vi:'giờ chạy, lịch trình', pos:'danh từ', g:'m' },
    { fr:'quai', ipa:'kɛ', vi:'sân ga', pos:'danh từ', g:'m' },
    { fr:'voie', ipa:'vwa', vi:'đường ray', pos:'danh từ', g:'f' },
    { fr:'arrêt', ipa:'a.ʁɛ', vi:'bến, trạm dừng', pos:'danh từ', g:'m' },
    { fr:'correspondance', ipa:'kɔ.ʁɛs.pɔ̃.dɑ̃s', vi:'chỗ đổi tuyến', pos:'danh từ', g:'f' },
    { fr:'retard', ipa:'ʁə.taʁ', vi:'sự chậm trễ', pos:'danh từ', g:'m' },
    { fr:'aller-retour', ipa:'a.le.ʁə.tuʁ', vi:'vé khứ hồi', pos:'danh từ', g:'m' },
    { fr:'valise', ipa:'va.liz', vi:'cái vali', pos:'danh từ', g:'f' },
    { fr:'conducteur', ipa:'kɔ̃.dyk.tœʁ', vi:'người lái', pos:'danh từ', g:'m' },
    { fr:'direct', ipa:'di.ʁɛkt', vi:'đi thẳng, không đổi tuyến', pos:'tính từ', g:'' },
    { fr:'complet', ipa:'kɔ̃.plɛ', vi:'hết chỗ', pos:'tính từ', g:'', note:'Giống cái là complète. Thấy chữ COMPLET trên bảng nghĩa là hết vé.' },
    { fr:'monter', ipa:'mɔ̃.te', vi:'lên (xe, tàu)', pos:'động từ', g:'' },
    { fr:'descendre', ipa:'de.sɑ̃dʁ', vi:'xuống (xe, tàu)', pos:'động từ', g:'' },
    { fr:'changer', ipa:'ʃɑ̃.ʒe', vi:'đổi (tuyến)', pos:'động từ', g:'' },
    { fr:'composter', ipa:'kɔ̃.pɔs.te', vi:'dập vé', pos:'động từ', g:'', note:'Vé chưa dập thì coi như không có vé, dù đã mua. Đây là chỗ khách nước ngoài hay bị phạt.' },
    { fr:'réserver', ipa:'ʁe.zɛʁ.ve', vi:'đặt trước', pos:'động từ', g:'' },
    { fr:'durer', ipa:'dy.ʁe', vi:'kéo dài', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'un aller simple', vi:'vé một chiều. Khứ hồi là «un aller-retour».', ex:'Un aller simple pour Lyon, s’il vous plaît.' },
    { p:'être en retard', vi:'bị muộn — dùng cho cả người và phương tiện.', ex:'Le train a vingt minutes de retard.' },
    { p:'changer à', vi:'đổi tuyến tại đâu.', ex:'Vous changez à Châtelet.' }
  ],
  dialogue:[
    { sp:'Quan', fr:'Bonjour, un aller-retour pour Marseille, s’il vous plaît.', vi:'Chào chị, cho tôi một vé khứ hồi đi Marseille ạ.' },
    { sp:'Guichet', fr:'Pour quand ?', vi:'Đi hôm nào ạ?' },
    { sp:'Quan', fr:'Vendredi matin, retour dimanche soir.', vi:'Sáng thứ Sáu, về tối Chủ nhật.' },
    { sp:'Guichet', fr:'Le train de huit heures est complet. Celui de neuf heures ?', vi:'Chuyến tám giờ hết chỗ rồi. Chuyến chín giờ được không ạ?' },
    { sp:'Quan', fr:'D’accord. C’est direct ?', vi:'Vâng. Có phải đổi tàu không ạ?' },
    { sp:'Guichet', fr:'Non, vous changez à Lyon. Le trajet dure quatre heures.', vi:'Có, anh đổi ở Lyon. Cả chặng bốn tiếng.' },
    { sp:'Quan', fr:'Très bien. Je dois composter le billet ?', vi:'Được ạ. Tôi có phải dập vé không?' },
    { sp:'Guichet', fr:'Non, il est électronique. Mais gardez-le sur votre téléphone.', vi:'Không, vé điện tử. Nhưng anh giữ trong điện thoại nhé.' }
  ] },

{ level:'a1', no:14, fr:'Au restaurant', vi:'Ở nhà hàng', skill:'Giao tiếp',
  grammar:[
    { form:'Đại từ tân ngữ trực tiếp: le / la / les', vi:'— Tu prends le poisson ? — Oui, je le prends. — Tu aimes la tarte ? — Oui, je l’aime.',
      note:'Đại từ đứng TRƯỚC động từ, ngược hẳn tiếng Việt. le và la rút thành l’ trước nguyên âm.',
      ex:{ fr:'Cette soupe, je la trouve excellente.', vi:'Món xúp này tôi thấy ngon tuyệt.' } },
    { form:'Đại từ gián tiếp: lui / leur', vi:'Thay cho «à + người»: je parle à Marie → je lui parle. Số nhiều là leur.',
      note:'lui dùng cho cả nam lẫn nữ. Đừng nhầm với «lui» nghĩa là «anh ấy» sau giới từ.',
      ex:{ fr:'Le serveur lui apporte l’addition.', vi:'Người phục vụ mang hoá đơn cho anh ấy.' } },
    { form:'Điều kiện lịch sự: je voudrais', vi:'je voudrais là dạng lịch sự của je veux. Dùng khi gọi món, khi hỏi mua, khi nhờ vả.',
      note:'Nói thẳng «je veux» nghe như ra lệnh. Trong nhà hàng luôn dùng je voudrais hoặc je vais prendre.',
      ex:{ fr:'Je voudrais réserver une table pour deux.', vi:'Tôi muốn đặt một bàn hai người.' } },
    { form:'Hỏi ý kiến: Comment tu trouves… ?', vi:'trouver ở đây nghĩa là «thấy thế nào», không phải «tìm thấy».',
      note:'Trả lời bằng: je trouve ça bon / délicieux / un peu salé.',
      ex:{ fr:'Comment tu trouves le dessert ?', vi:'Cậu thấy món tráng miệng thế nào?' } }
  ],
  vocab:[
    { fr:'restaurant', ipa:'ʁɛs.to.ʁɑ̃', vi:'nhà hàng', pos:'danh từ', g:'m' },
    { fr:'couteau', ipa:'ku.to', vi:'con dao', pos:'danh từ', g:'m' },
    { fr:'carte', ipa:'kaʁt', vi:'thực đơn; tấm thẻ', pos:'danh từ', g:'f', note:'la carte là thực đơn đầy đủ, le menu là suất cố định nhiều món. Ngược với tiếng Anh.' },
    { fr:'entrée', ipa:'ɑ̃.tʁe', vi:'món khai vị; lối vào', pos:'danh từ', g:'f' },
    { fr:'plat', ipa:'pla', vi:'món chính', pos:'danh từ', g:'m' },
    { fr:'dessert', ipa:'de.sɛʁ', vi:'món tráng miệng', pos:'danh từ', g:'m' },
    { fr:'nappe', ipa:'nap', vi:'khăn trải bàn', pos:'danh từ', g:'f' },
    { fr:'pourboire', ipa:'puʁ.bwaʁ', vi:'tiền boa', pos:'danh từ', g:'m', note:'Không bắt buộc: giá đã gồm phục vụ. Để lại vài đồng lẻ là thể hiện hài lòng.' },
    { fr:'soupe', ipa:'sup', vi:'món xúp', pos:'danh từ', g:'f' },
    { fr:'salade', ipa:'sa.lad', vi:'món rau trộn', pos:'danh từ', g:'f' },
    { fr:'poulet', ipa:'pu.lɛ', vi:'thịt gà', pos:'danh từ', g:'m' },
    { fr:'riz', ipa:'ʁi', vi:'cơm, gạo', pos:'danh từ', g:'m' },
    { fr:'sel', ipa:'sɛl', vi:'muối', pos:'danh từ', g:'m' },
    { fr:'poivre', ipa:'pwavʁ', vi:'hạt tiêu', pos:'danh từ', g:'m' },
    { fr:'délicieux', ipa:'de.li.sjø', vi:'ngon tuyệt', pos:'tính từ', g:'', note:'Giống cái là délicieuse, nghe rõ chữ «zơ» ở cuối.' },
    { fr:'salé', ipa:'sa.le', vi:'mặn', pos:'tính từ', g:'' },
    { fr:'sucré', ipa:'sy.kʁe', vi:'ngọt', pos:'tính từ', g:'' },
    { fr:'goûter', ipa:'ɡu.te', vi:'nếm thử', pos:'động từ', g:'' },
    { fr:'servir', ipa:'sɛʁ.viʁ', vi:'phục vụ, dọn ra', pos:'động từ', g:'' },
    { fr:'trouver', ipa:'tʁu.ve', vi:'thấy, cho rằng; tìm thấy', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'L’addition, s’il vous plaît.', vi:'Cho tôi xin hoá đơn. — câu kết thúc bữa ăn.', ex:'On peut avoir l’addition, s’il vous plaît ?' },
    { p:'à point', vi:'thịt chín vừa. Tái là «saignant», chín kỹ là «bien cuit».', ex:'Un steak à point, s’il vous plaît.' },
    { p:'C’est offert.', vi:'Cái này quán mời. — nghe câu này là không phải trả tiền món đó.', ex:'Le café, c’est offert.' }
  ],
  dialogue:[
    { sp:'Serveur', fr:'Bonsoir. Vous avez choisi ?', vi:'Chào anh chị. Đã chọn món chưa ạ?' },
    { sp:'Quan', fr:'Oui. Je voudrais la soupe en entrée.', vi:'Rồi ạ. Khai vị cho tôi món xúp.' },
    { sp:'Serveur', fr:'Et comme plat ?', vi:'Món chính thì sao ạ?' },
    { sp:'Quan', fr:'Le poulet avec du riz. Il est épicé ?', vi:'Thịt gà với cơm. Món đó có cay không ạ?' },
    { sp:'Serveur', fr:'Non, pas du tout. Et comme boisson ?', vi:'Không hề ạ. Đồ uống thì sao ạ?' },
    { sp:'Quan', fr:'Juste une carafe d’eau, merci.', vi:'Một bình nước lọc thôi, cảm ơn anh.' },
    { sp:'Serveur', fr:'Très bien. Je vous apporte ça tout de suite.', vi:'Vâng ạ. Tôi mang lên ngay.' },
    { sp:'Quan', fr:'Merci. Et l’addition après, s’il vous plaît.', vi:'Cảm ơn anh. Lát nữa cho tôi xin hoá đơn nhé.' }
  ] },

{ level:'a1', no:15, fr:'Écrire et téléphoner', vi:'Viết thư và gọi điện', skill:'Giao tiếp',
  grammar:[
    { form:'Thì imparfait — bước đầu', vi:'Lấy gốc ngôi nous ở hiện tại rồi thêm đuôi: nous parlons → je parlais · tu parlais · il parlait · nous parlions · ils parlaient.',
      note:'imparfait tả khung cảnh và thói quen cũ; passé composé kể sự việc xảy ra một lần. «Il pleuvait quand je suis sorti.»',
      ex:{ fr:'Quand j’étais petit, j’habitais à Hanoï.', vi:'Hồi nhỏ tôi sống ở Hà Nội.' } },
    { form:'Mở và đóng một lá thư', vi:'Thân mật: Salut … Bises. Trang trọng: Madame, Monsieur … Cordialement / Je vous prie d’agréer mes salutations distinguées.',
      note:'Thư hành chính Pháp có công thức kết rất dài. Học thuộc một câu là đủ dùng cả đời.',
      ex:{ fr:'Cordialement, Nguyen Dinh Quan.', vi:'Trân trọng, Nguyễn Đình Quân.' } },
    { form:'Gọi điện', vi:'Allô ? · C’est de la part de qui ? · Ne quittez pas. · Vous pouvez répéter, s’il vous plaît ?',
      note:'«Ne quittez pas» nghĩa đen là «đừng rời đi», tức là giữ máy.',
      ex:{ fr:'Allô ? Bonjour, je suis bien chez Madame Petit ?', vi:'A lô? Chào bà, đây có phải nhà bà Petit không ạ?' } },
    { form:'Xin nhắc lại cho rõ', vi:'Pardon ? · Vous pouvez parler plus lentement ? · Comment ça s’écrit ?',
      note:'Đây là ba câu quan trọng nhất của người mới học. Dùng chúng thoải mái, không có gì đáng ngại.',
      ex:{ fr:'Comment ça s’écrit, s’il vous plaît ?', vi:'Cái đó viết thế nào ạ?' } }
  ],
  vocab:[
    { fr:'lettre', ipa:'lɛtʁ', vi:'lá thư; chữ cái', pos:'danh từ', g:'f' },
    { fr:'courriel', ipa:'ku.ʁjɛl', vi:'thư điện tử', pos:'danh từ', g:'m', note:'Từ chính thức do Québec đặt ra. Trong đời thường người Pháp vẫn hay nói «un mail».' },
    { fr:'enveloppe', ipa:'ɑ̃v.lɔp', vi:'phong bì', pos:'danh từ', g:'f' },
    { fr:'timbre', ipa:'tɛ̃bʁ', vi:'con tem', pos:'danh từ', g:'m' },
    { fr:'poste', ipa:'pɔst', vi:'bưu điện', pos:'danh từ', g:'f', note:'la poste là bưu điện, còn le poste là cái máy hoặc chức vụ. Đổi giống là đổi nghĩa.' },
    { fr:'colis', ipa:'kɔ.li', vi:'kiện hàng', pos:'danh từ', g:'m' },
    { fr:'numéro', ipa:'ny.me.ʁo', vi:'con số, số điện thoại', pos:'danh từ', g:'m' },
    { fr:'message', ipa:'me.saʒ', vi:'tin nhắn', pos:'danh từ', g:'m' },
    { fr:'appel', ipa:'a.pɛl', vi:'cuộc gọi', pos:'danh từ', g:'m' },
    { fr:'réponse', ipa:'ʁe.pɔ̃s', vi:'câu trả lời', pos:'danh từ', g:'f' },
    { fr:'signature', ipa:'si.ɲa.tyʁ', vi:'chữ ký', pos:'danh từ', g:'f' },
    { fr:'rendez-vous manqué', ipa:'ʁɑ̃.de.vu mɑ̃.ke', vi:'cuộc hẹn bị lỡ', pos:'danh từ', g:'m' },
    { fr:'appeler', ipa:'ap.le', vi:'gọi điện', pos:'động từ', g:'' },
    { fr:'répondre', ipa:'ʁe.pɔ̃dʁ', vi:'trả lời', pos:'động từ', g:'' },
    { fr:'envoyer', ipa:'ɑ̃.vwa.je', vi:'gửi', pos:'động từ', g:'' },
    { fr:'recevoir', ipa:'ʁə.sə.vwaʁ', vi:'nhận', pos:'động từ', g:'' },
    { fr:'signer', ipa:'si.ɲe', vi:'ký', pos:'động từ', g:'' },
    { fr:'rappeler', ipa:'ʁap.le', vi:'gọi lại', pos:'động từ', g:'' },
    { fr:'expliquer', ipa:'ɛks.pli.ke', vi:'giải thích', pos:'động từ', g:'' },
    { fr:'lentement', ipa:'lɑ̃t.mɑ̃', vi:'chậm rãi', pos:'trạng từ', g:'' }
  ],
  colloc:[
    { p:'Ne quittez pas.', vi:'Xin giữ máy.', ex:'Ne quittez pas, je vous le passe.' },
    { p:'C’est de la part de qui ?', vi:'Ai đang gọi đấy ạ? — câu hỏi chuẩn khi nghe máy hộ.', ex:'— Je voudrais parler à Monsieur Petit. — C’est de la part de qui ?' },
    { p:'Je vous rappelle.', vi:'Tôi sẽ gọi lại cho anh chị.', ex:'Je suis en réunion, je vous rappelle dans une heure.' }
  ],
  dialogue:[
    { sp:'Secrétaire', fr:'Cabinet du docteur Roux, bonjour.', vi:'Phòng khám bác sĩ Roux xin nghe.' },
    { sp:'Quan', fr:'Bonjour. Je voudrais prendre rendez-vous.', vi:'Chào chị. Tôi muốn đặt lịch khám ạ.' },
    { sp:'Secrétaire', fr:'Oui. C’est de la part de qui ?', vi:'Vâng. Anh tên là gì ạ?' },
    { sp:'Quan', fr:'Nguyen Dinh Quan. Vous pouvez répéter plus lentement ?', vi:'Nguyễn Đình Quân. Chị nói chậm lại giúp tôi được không ạ?' },
    { sp:'Secrétaire', fr:'Bien sûr. Comment ça s’écrit, votre nom ?', vi:'Tất nhiên rồi. Tên anh viết thế nào ạ?' },
    { sp:'Quan', fr:'N comme Nicolas, G, U, Y, E, N.', vi:'N như Nicolas, G, U, Y, E, N.' },
    { sp:'Secrétaire', fr:'Merci. Jeudi quinze heures, ça vous convient ?', vi:'Cảm ơn anh. Thứ Năm ba giờ chiều được không ạ?' },
    { sp:'Quan', fr:'C’est parfait. Merci beaucoup, au revoir.', vi:'Vâng, tốt quá ạ. Cảm ơn chị nhiều, chào chị.' }
  ] }
  ]
};

if (typeof window !== 'undefined') window.COURSE_FR = COURSE_FR;
if (typeof module !== 'undefined' && module.exports) module.exports = { COURSE_FR };
