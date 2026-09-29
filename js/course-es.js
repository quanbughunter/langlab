/* ============================================================
   LangLab — Khoá tiếng Tây Ban Nha theo khung CEFR
   ------------------------------------------------------------
   Nhân vật xuyên suốt: Quân — sinh viên Hà Nội sang Tây Ban Nha
   trao đổi, nên tình huống bám đời sống thật: tìm nhà, đi chợ,
   ăn tapas, bắt tàu, làm giấy tờ.

   Mỗi bài: mục tiêu giao tiếp · ngữ pháp · từ vựng (có IPA và GIỐNG)
   · cụm hay đi với nhau · hội thoại.

   Tin mừng cho người Việt: tiếng Tây Ban Nha đọc ĐÚNG NHƯ VIẾT. Học
   xong bảng chữ cái là đọc được mọi từ, kể cả từ chưa gặp bao giờ —
   khác hẳn tiếng Pháp hay tiếng Anh. Phần khó nằm ở chia động từ.

   Bản tiếng dùng ở đây là tiếng Tây Ban Nha châu Âu (España). Chỗ nào
   Mỹ Latinh nói khác đáng kể thì có ghi chú riêng.

   Nội dung do LangLab tự biên soạn, không chép từ giáo trình nào.
   ============================================================ */

const COURSE_ES = {
  levels: [
    { id:'a1', vi:'A1 · Sơ cấp',        es:'Principiante',  lessons:15, status:'active' },
    { id:'a2', vi:'A2 · Sơ trung cấp',  es:'Elemental',     lessons:15, status:'soon' },
    { id:'b1', vi:'B1 · Trung cấp',     es:'Intermedio',    lessons:15, status:'soon' },
    { id:'b2', vi:'B2 · Trung cao cấp', es:'Avanzado',      lessons:15, status:'soon' }
  ],

  lessons: [
  /* ==================== A1 ==================== */
  { level:'a1', no:1, es:'¡Hola! Me presento', vi:'Chào hỏi và tự giới thiệu', skill:'Giao tiếp',
    grammar:[
      { form:'ser — là (bản chất)', vi:'soy · eres · es · somos · sois · son.', note:'Dùng cho tên, nghề, quốc tịch, tính cách — những thứ lâu dài.', ex:{ es:'Soy Quan. Soy estudiante.', vi:'Tôi là Quân. Tôi là sinh viên.' } },
      { form:'ser và estar — hai động từ «là»', vi:'«Ser» cho bản chất, «estar» cho trạng thái và vị trí.', note:'Đây là chỗ khó nhất với người mới. «Soy aburrido» = tôi là người nhạt nhẽo. «Estoy aburrido» = tôi đang thấy chán. Cùng một tính từ, đổi động từ là đổi nghĩa.', ex:{ es:'Madrid es grande. Madrid está en España.', vi:'Madrid thì lớn. Madrid nằm ở Tây Ban Nha.' } },
      { form:'Bỏ đại từ chủ ngữ', vi:'Đuôi động từ đã cho biết ai làm, nên «yo, tú» thường được lược đi.', note:'Nói «yo soy estudiante» không sai nhưng nghe như đang nhấn mạnh «TÔI thì là sinh viên (còn anh thì không)». Bình thường chỉ nói «soy estudiante».', ex:{ es:'¿Eres vietnamita? — Sí, soy de Hanói.', vi:'Bạn là người Việt à? — Vâng, tôi từ Hà Nội.' } },
      { form:'Dấu ¿ và ¡ mở đầu', vi:'Câu hỏi và câu cảm thán có dấu ngược ở ĐẦU câu.', note:'Chỉ tiếng Tây Ban Nha có. Nó báo trước cho người đọc biết ngữ điệu ngay từ đầu, thay vì đọc hết câu mới biết là câu hỏi.', ex:{ es:'¿Cómo te llamas? ¡Mucho gusto!', vi:'Bạn tên gì? Rất hân hạnh!' } }
    ],
    vocab:[
      { es:'hola', ipa:'ˈo.la', vi:'xin chào', pos:'thán từ', note:'Chữ «h» luôn câm trong tiếng Tây Ban Nha.' },
      { es:'adiós', ipa:'a.ˈðjos', vi:'tạm biệt', pos:'thán từ' },
      { es:'gracias', ipa:'ˈɡɾa.θjas', vi:'cảm ơn', pos:'thán từ', note:'Ở Tây Ban Nha «ci/ce» đọc như «th» tiếng Anh; Mỹ Latinh đọc là «s».' },
      { es:'perdón', ipa:'peɾ.ˈðon', vi:'xin lỗi', pos:'thán từ' },
      { es:'nombre', ipa:'ˈnom.bɾe', vi:'tên', pos:'danh từ', g:'m' },
      { es:'apellido', ipa:'a.pe.ˈʎi.ðo', vi:'họ', pos:'danh từ', g:'m', note:'Người Tây Ban Nha có HAI họ: của bố rồi của mẹ.' },
      { es:'estudiante', ipa:'es.tu.ˈðjan.te', vi:'sinh viên', pos:'danh từ', g:'m', note:'Không đổi theo giống: el estudiante / la estudiante.' },
      { es:'profesor', ipa:'pɾo.fe.ˈsoɾ', vi:'giáo viên', pos:'danh từ', g:'m', note:'Giống cái: profesora.' },
      { es:'amigo', ipa:'a.ˈmi.ɣo', vi:'bạn', pos:'danh từ', g:'m', note:'Giống cái: amiga.' },
      { es:'señor', ipa:'se.ˈɲoɾ', vi:'ông, ngài', pos:'danh từ', g:'m' },
      { es:'señora', ipa:'se.ˈɲo.ɾa', vi:'bà', pos:'danh từ', g:'f' },
      { es:'sí', ipa:'si', vi:'vâng, đúng', pos:'trạng từ', note:'Có dấu sắc để phân biệt với «si» (nếu).' },
      { es:'no', ipa:'no', vi:'không', pos:'trạng từ' },
      { es:'ser', ipa:'seɾ', vi:'là (bản chất)', pos:'động từ' },
      { es:'estar', ipa:'es.ˈtaɾ', vi:'ở, đang (trạng thái)', pos:'động từ' },
      { es:'español', ipa:'es.pa.ˈɲol', vi:'người Tây Ban Nha; tiếng TBN', pos:'danh từ, tính từ', g:'m' },
      { es:'vietnamita', ipa:'bjet.na.ˈmi.ta', vi:'người Việt', pos:'danh từ, tính từ', note:'Đuôi -a nhưng dùng chung cho cả nam lẫn nữ.' },
      { es:'mucho', ipa:'ˈmu.tʃo', vi:'nhiều, rất', pos:'tính từ, trạng từ' },
      { es:'gusto', ipa:'ˈɡus.to', vi:'sự thích thú', pos:'danh từ', g:'m' },
      { es:'cómo', ipa:'ˈko.mo', vi:'thế nào', pos:'trạng từ nghi vấn' }
    ],
    colloc:[
      { p:'¿Cómo te llamas?', vi:'Bạn tên gì? Trang trọng: «¿Cómo se llama usted?»', ex:'¿Cómo te llamas? — Me llamo Quan.' },
      { p:'Mucho gusto.', vi:'Rất hân hạnh. Đáp lại: «Igualmente» (tôi cũng vậy).', ex:'Mucho gusto. — Igualmente.' },
      { p:'¿Qué tal?', vi:'Dạo này sao? — câu chào thân mật, dùng suốt ngày.', ex:'¡Hola! ¿Qué tal?' }
    ],
    dialogue:[
      { sp:'Lucía', es:'¡Hola! ¿Eres Quan?', vi:'Chào! Bạn là Quân phải không?' },
      { sp:'Quan', es:'Sí, soy yo. ¿Y tú?', vi:'Vâng, tôi đây. Còn bạn?' },
      { sp:'Lucía', es:'Me llamo Lucía. Mucho gusto.', vi:'Tôi tên Lucía. Rất hân hạnh.' },
      { sp:'Quan', es:'Igualmente. ¿Eres de Madrid?', vi:'Tôi cũng vậy. Bạn là người Madrid à?' },
      { sp:'Lucía', es:'No, soy de Sevilla. ¿Tú eres vietnamita?', vi:'Không, tôi từ Sevilla. Bạn là người Việt à?' },
      { sp:'Quan', es:'Sí, soy de Hanói. Estudio aquí este año.', vi:'Vâng, tôi từ Hà Nội. Năm nay tôi học ở đây.' },
      { sp:'Lucía', es:'¡Qué bien! Hablas muy bien español.', vi:'Hay quá! Bạn nói tiếng Tây Ban Nha giỏi lắm.' },
      { sp:'Quan', es:'Gracias, pero todavía aprendo.', vi:'Cảm ơn, nhưng tôi vẫn đang học thôi.' }
    ] },

  { level:'a1', no:2, es:'Mi familia', vi:'Gia đình và sở hữu', skill:'Từ vựng',
    grammar:[
      { form:'tener — có', vi:'tengo · tienes · tiene · tenemos · tenéis · tienen.', note:'Chú ý «tengo» đổi gốc. Cũng dùng cho tuổi: «tengo veinte años» (tôi CÓ hai mươi tuổi), giống tiếng Pháp và khác tiếng Việt.', ex:{ es:'Tengo una hermana.', vi:'Tôi có một em gái.' } },
      { form:'el / la / los / las — mạo từ xác định', vi:'Danh từ đuôi -o thường là giống đực, đuôi -a thường là giống cái.', note:'Ngoại lệ hay gặp: el día (ngày, giống đực dù đuôi -a), la mano (bàn tay, giống cái dù đuôi -o), el problema.', ex:{ es:'el libro · la mesa · los libros · las mesas', vi:'quyển sách · cái bàn · những quyển sách · những cái bàn' } },
      { form:'mi / tu / su — tính từ sở hữu', vi:'Chỉ đổi theo SỐ, không đổi theo giống.', note:'Dễ hơn tiếng Pháp nhiều: mi padre, mi madre — cùng một chữ «mi». Số nhiều mới thêm -s: mis padres.', ex:{ es:'mi padre · mis hermanos', vi:'bố tôi · các anh chị em tôi' } },
      { form:'Tính từ đứng SAU danh từ và phải hợp giống', vi:'«una casa pequeña» chứ không phải «una pequeña casa».', note:'Ngược hẳn tiếng Anh. Tính từ còn phải đổi đuôi theo danh từ: chico alto / chica alta / chicos altos.', ex:{ es:'Tengo una hermana pequeña.', vi:'Tôi có một em gái nhỏ.' } }
    ],
    vocab:[
      { es:'familia', ipa:'fa.ˈmi.lja', vi:'gia đình', pos:'danh từ', g:'f' },
      { es:'padre', ipa:'ˈpa.ðɾe', vi:'bố', pos:'danh từ', g:'m' },
      { es:'madre', ipa:'ˈma.ðɾe', vi:'mẹ', pos:'danh từ', g:'f' },
      { es:'padres', ipa:'ˈpa.ðɾes', vi:'bố mẹ', pos:'danh từ số nhiều', g:'m', note:'Số nhiều giống đực gộp cả hai giới — như «los hermanos» là cả anh lẫn chị em.' },
      { es:'hermano', ipa:'eɾ.ˈma.no', vi:'anh, em trai', pos:'danh từ', g:'m' },
      { es:'hermana', ipa:'eɾ.ˈma.na', vi:'chị, em gái', pos:'danh từ', g:'f' },
      { es:'hijo', ipa:'ˈi.xo', vi:'con trai', pos:'danh từ', g:'m' },
      { es:'hija', ipa:'ˈi.xa', vi:'con gái', pos:'danh từ', g:'f' },
      { es:'marido', ipa:'ma.ˈɾi.ðo', vi:'chồng', pos:'danh từ', g:'m' },
      { es:'mujer', ipa:'mu.ˈxeɾ', vi:'vợ; phụ nữ', pos:'danh từ', g:'f' },
      { es:'abuelo', ipa:'a.ˈβwe.lo', vi:'ông', pos:'danh từ', g:'m' },
      { es:'abuela', ipa:'a.ˈβwe.la', vi:'bà', pos:'danh từ', g:'f' },
      { es:'tío', ipa:'ˈti.o', vi:'chú, bác, cậu', pos:'danh từ', g:'m', note:'Trong tiếng lóng, «tío/tía» còn là «cậu ấy / cô ấy» khi nói chuyện bạn bè.' },
      { es:'primo', ipa:'ˈpɾi.mo', vi:'anh chị em họ', pos:'danh từ', g:'m' },
      { es:'tener', ipa:'te.ˈneɾ', vi:'có', pos:'động từ' },
      { es:'año', ipa:'ˈa.ɲo', vi:'năm, tuổi', pos:'danh từ', g:'m', note:'Chữ «ñ» đọc như «nh» tiếng Việt. Viết thiếu dấu ngã thành «ano» — nghĩa khác hẳn, rất bất lịch sự.' },
      { es:'casa', ipa:'ˈka.sa', vi:'nhà', pos:'danh từ', g:'f' },
      { es:'pequeño', ipa:'pe.ˈke.ɲo', vi:'nhỏ', pos:'tính từ' },
      { es:'grande', ipa:'ˈɡɾan.de', vi:'to, lớn', pos:'tính từ', note:'Không đổi theo giống: un libro grande / una casa grande.' },
      { es:'mayor', ipa:'ma.ˈjoɾ', vi:'lớn tuổi hơn, cả', pos:'tính từ' }
    ],
    colloc:[
      { p:'¿Cuántos años tienes?', vi:'Bạn bao nhiêu tuổi?', ex:'¿Cuántos años tienes? — Tengo veinte años.' },
      { p:'hermano mayor / menor', vi:'Anh (chị) / em — tiếng TBN không có từ riêng nên phải thêm mayor hoặc menor.', ex:'Tengo un hermano mayor.' },
      { p:'tener ganas de…', vi:'Thèm, muốn làm gì đó.', ex:'Tengo ganas de volver a casa.' }
    ],
    dialogue:[
      { sp:'Lucía', es:'¿Tienes hermanos?', vi:'Bạn có anh chị em không?' },
      { sp:'Quan', es:'Sí, tengo una hermana menor. Tiene dieciséis años.', vi:'Có, tôi có một em gái. Em ấy mười sáu tuổi.' },
      { sp:'Lucía', es:'¿Y tus padres viven en Hanói?', vi:'Bố mẹ bạn sống ở Hà Nội à?' },
      { sp:'Quan', es:'Sí. Mi padre es profesor y mi madre es médica.', vi:'Vâng. Bố tôi là giáo viên còn mẹ tôi là bác sĩ.' },
      { sp:'Lucía', es:'Mi familia es muy grande. Tengo ocho primos.', vi:'Gia đình tôi đông lắm. Tôi có tám anh chị em họ.' },
      { sp:'Quan', es:'¡Qué bien! ¿Os veis mucho?', vi:'Hay quá! Các bạn có hay gặp nhau không?' },
      { sp:'Lucía', es:'Sí, comemos juntos todos los domingos.', vi:'Có, Chủ nhật nào cả nhà cũng ăn cùng nhau.' }
    ] },

  { level:'a1', no:3, es:'Los números y la hora', vi:'Số đếm và giờ giấc', skill:'Từ vựng',
    grammar:[
      { form:'Số đếm 0–100', vi:'Rất đều: 16–29 viết liền (dieciséis, veintiuno), từ 31 trở đi tách bằng «y».', note:'treinta y uno (31), cuarenta y dos (42). Không có kiểu «bốn hai mươi» như tiếng Pháp — dễ thở hơn nhiều.', ex:{ es:'veintitrés · cuarenta y cinco · noventa y nueve', vi:'23 · 45 · 99' } },
      { form:'¿Qué hora es? — Mấy giờ rồi?', vi:'Trả lời «Es la una» (1 giờ) hoặc «Son las dos» (2 giờ).', note:'Chỉ 1 giờ mới dùng số ít «es la», còn lại đều «son las». Người học hay quên chỗ này.', ex:{ es:'Son las tres y media.', vi:'Bây giờ là ba giờ rưỡi.' } },
      { form:'y / menos — hơn và kém', vi:'«y» cộng phút, «menos» trừ phút.', note:'Son las cuatro y cuarto (4:15) · Son las cinco menos diez (4:50).', ex:{ es:'Son las ocho menos cuarto.', vi:'Tám giờ kém mười lăm.' } },
      { form:'Giờ trong ngày', vi:'Thêm «de la mañana / de la tarde / de la noche».', note:'Người Tây Ban Nha ăn trưa lúc 14h và ăn tối lúc 21–22h, nên «la tarde» kéo dài tới tận 20h — muộn hơn cảm nhận của người Việt rất nhiều.', ex:{ es:'Cenamos a las diez de la noche.', vi:'Chúng tôi ăn tối lúc mười giờ đêm.' } }
    ],
    vocab:[
      { es:'uno', ipa:'ˈu.no', vi:'một', pos:'số từ', note:'Trước danh từ giống đực rút thành «un»: un libro.' },
      { es:'dos', ipa:'dos', vi:'hai', pos:'số từ' },
      { es:'tres', ipa:'tɾes', vi:'ba', pos:'số từ' },
      { es:'cuatro', ipa:'ˈkwa.tɾo', vi:'bốn', pos:'số từ' },
      { es:'cinco', ipa:'ˈθiŋ.ko', vi:'năm', pos:'số từ' },
      { es:'seis', ipa:'sejs', vi:'sáu', pos:'số từ' },
      { es:'siete', ipa:'ˈsje.te', vi:'bảy', pos:'số từ' },
      { es:'ocho', ipa:'ˈo.tʃo', vi:'tám', pos:'số từ' },
      { es:'nueve', ipa:'ˈnwe.βe', vi:'chín', pos:'số từ' },
      { es:'diez', ipa:'djeθ', vi:'mười', pos:'số từ' },
      { es:'veinte', ipa:'ˈbejn.te', vi:'hai mươi', pos:'số từ' },
      { es:'treinta', ipa:'ˈtɾejn.ta', vi:'ba mươi', pos:'số từ' },
      { es:'cincuenta', ipa:'θiŋ.ˈkwen.ta', vi:'năm mươi', pos:'số từ' },
      { es:'cien', ipa:'θjen', vi:'một trăm', pos:'số từ', note:'Đúng 100 là «cien», từ 101 thì thành «ciento uno».' },
      { es:'hora', ipa:'ˈo.ɾa', vi:'giờ', pos:'danh từ', g:'f' },
      { es:'minuto', ipa:'mi.ˈnu.to', vi:'phút', pos:'danh từ', g:'m' },
      { es:'media', ipa:'ˈme.ðja', vi:'rưỡi, nửa', pos:'tính từ', g:'f' },
      { es:'cuarto', ipa:'ˈkwaɾ.to', vi:'mười lăm phút; căn phòng', pos:'danh từ', g:'m' },
      { es:'mañana', ipa:'ma.ˈɲa.na', vi:'buổi sáng; ngày mai', pos:'danh từ', g:'f', note:'Một từ hai nghĩa — phân biệt nhờ ngữ cảnh: «por la mañana» là buổi sáng, «mañana» đứng lẻ là ngày mai.' },
      { es:'noche', ipa:'ˈno.tʃe', vi:'ban đêm', pos:'danh từ', g:'f' }
    ],
    colloc:[
      { p:'¿A qué hora…?', vi:'Vào lúc mấy giờ…?', ex:'¿A qué hora sale el tren?' },
      { p:'en punto', vi:'Đúng giờ chẵn.', ex:'Son las nueve en punto.' },
      { p:'de la mañana / de la tarde', vi:'Buổi sáng / buổi chiều — gắn sau giờ để nói rõ.', ex:'A las siete de la tarde.' }
    ],
    dialogue:[
      { sp:'Quan', es:'Perdona, ¿qué hora es?', vi:'Xin lỗi, mấy giờ rồi?' },
      { sp:'Lucía', es:'Son las nueve menos diez.', vi:'Chín giờ kém mười.' },
      { sp:'Quan', es:'¡Uy! Mi clase empieza a las nueve.', vi:'Ối! Lớp tôi bắt đầu lúc chín giờ.' },
      { sp:'Lucía', es:'Tranquilo, está aquí al lado.', vi:'Bình tĩnh, ngay cạnh đây thôi.' },
      { sp:'Quan', es:'¿A qué hora cierra la biblioteca?', vi:'Thư viện đóng cửa lúc mấy giờ?' },
      { sp:'Lucía', es:'A las nueve de la noche.', vi:'Chín giờ tối.' },
      { sp:'Quan', es:'Entonces estudiamos juntos esta tarde.', vi:'Vậy chiều nay mình học cùng nhau nhé.' }
    ] },

  { level:'a1', no:4, es:'En el bar de tapas', vi:'Gọi đồ ở quán tapas', skill:'Giao tiếp',
    grammar:[
      { form:'Ba nhóm động từ: -ar · -er · -ir', vi:'hablar → hablo, hablas, habla, hablamos, habláis, hablan.', note:'Nhóm -er và -ir gần giống nhau, chỉ khác ở «nosotros» và «vosotros»: comemos / vivimos.', ex:{ es:'Hablamos español en clase.', vi:'Trong lớp chúng tôi nói tiếng Tây Ban Nha.' } },
      { form:'querer — muốn (đổi gốc e→ie)', vi:'quiero · quieres · quiere · queremos · queréis · quieren.', note:'Chú ý «nosotros/vosotros» KHÔNG đổi gốc — đó là quy luật chung của mọi động từ đổi gốc.', ex:{ es:'Quiero una caña, por favor.', vi:'Cho tôi một cốc bia ạ.' } },
      { form:'gustar — nói ngược', vi:'«Me gusta el café» nghĩa đen là «cà phê làm vừa lòng tôi».', note:'Chủ ngữ là thứ được thích, không phải người thích. Nhiều thứ thì đổi thành «me gustan»: «Me gustan las tapas».', ex:{ es:'Me gusta la tortilla. Me gustan las aceitunas.', vi:'Tôi thích món trứng khoai. Tôi thích ô liu.' } },
      { form:'hay — có', vi:'Một dạng duy nhất, không chia, dùng cho cả số ít lẫn số nhiều.', note:'«Hay una mesa» và «hay dos mesas» — đều là «hay». Khác «está/están» vốn để nói vị trí của thứ đã biết.', ex:{ es:'¿Hay una mesa libre?', vi:'Có bàn trống không ạ?' } }
    ],
    vocab:[
      { es:'bar', ipa:'baɾ', vi:'quán bar, quán ăn nhẹ', pos:'danh từ', g:'m', note:'Ở Tây Ban Nha «bar» là quán bình dân, sáng bán cà phê, trưa bán đồ ăn — không giống bar rượu đêm.' },
      { es:'tapa', ipa:'ˈta.pa', vi:'món nhắm nhỏ', pos:'danh từ', g:'f' },
      { es:'café', ipa:'ka.ˈfe', vi:'cà phê', pos:'danh từ', g:'m' },
      { es:'agua', ipa:'ˈa.ɣwa', vi:'nước', pos:'danh từ', g:'f', note:'Giống cái nhưng nói «el agua» để tránh hai âm «a» dính nhau; số nhiều lại về «las aguas».' },
      { es:'cerveza', ipa:'θeɾ.ˈβe.θa', vi:'bia', pos:'danh từ', g:'f' },
      { es:'vino', ipa:'ˈbi.no', vi:'rượu vang', pos:'danh từ', g:'m' },
      { es:'pan', ipa:'pan', vi:'bánh mì', pos:'danh từ', g:'m' },
      { es:'tortilla', ipa:'toɾ.ˈti.ʎa', vi:'món trứng chiên khoai tây', pos:'danh từ', g:'f', note:'Ở Tây Ban Nha là trứng khoai; ở Mexico lại là bánh tráng ngô — hai món khác hẳn.' },
      { es:'jamón', ipa:'xa.ˈmon', vi:'giăm bông', pos:'danh từ', g:'m' },
      { es:'queso', ipa:'ˈke.so', vi:'phô mai', pos:'danh từ', g:'m' },
      { es:'cuenta', ipa:'ˈkwen.ta', vi:'hoá đơn', pos:'danh từ', g:'f' },
      { es:'mesa', ipa:'ˈme.sa', vi:'cái bàn', pos:'danh từ', g:'f' },
      { es:'camarero', ipa:'ka.ma.ˈɾe.ɾo', vi:'người phục vụ', pos:'danh từ', g:'m' },
      { es:'querer', ipa:'ke.ˈɾeɾ', vi:'muốn; yêu', pos:'động từ' },
      { es:'comer', ipa:'ko.ˈmeɾ', vi:'ăn', pos:'động từ' },
      { es:'beber', ipa:'be.ˈβeɾ', vi:'uống', pos:'động từ' },
      { es:'hablar', ipa:'a.ˈβlaɾ', vi:'nói', pos:'động từ' },
      { es:'gustar', ipa:'ɡus.ˈtaɾ', vi:'làm vừa lòng, thích', pos:'động từ' },
      { es:'rico', ipa:'ˈri.ko', vi:'ngon; giàu', pos:'tính từ' },
      { es:'cuánto', ipa:'ˈkwan.to', vi:'bao nhiêu', pos:'trạng từ nghi vấn' }
    ],
    colloc:[
      { p:'por favor', vi:'Làm ơn — gắn cuối mọi câu nhờ vả.', ex:'Una caña, por favor.' },
      { p:'La cuenta, por favor.', vi:'Cho tôi thanh toán.', ex:'Perdona, la cuenta por favor.' },
      { p:'ir de tapas', vi:'Đi ăn tapas — đi lần lượt vài quán, mỗi quán một món, một cốc.', ex:'Esta noche vamos de tapas.' }
    ],
    dialogue:[
      { sp:'Camarero', es:'¡Hola! ¿Qué queréis tomar?', vi:'Chào các bạn! Các bạn dùng gì ạ?' },
      { sp:'Quan', es:'Una caña y un agua, por favor.', vi:'Cho một cốc bia và một chai nước ạ.' },
      { sp:'Camarero', es:'¿Y para comer? Hay tortilla y jamón.', vi:'Còn đồ ăn? Có trứng khoai và giăm bông.' },
      { sp:'Quan', es:'Una tortilla. Me gusta mucho.', vi:'Một phần trứng khoai. Tôi thích lắm.' },
      { sp:'Lucía', es:'Para mí, queso y pan.', vi:'Cho tôi phô mai với bánh mì.' },
      { sp:'Camarero', es:'Muy bien. Ahora mismo.', vi:'Vâng. Có ngay đây.' },
      { sp:'Quan', es:'¿Cuánto es todo?', vi:'Tất cả hết bao nhiêu ạ?' },
      { sp:'Camarero', es:'Ocho euros con cincuenta.', vi:'Tám euro rưỡi.' }
    ] },

  { level:'a1', no:5, es:'Por la ciudad', vi:'Đi lại và hỏi đường', skill:'Giao tiếp',
    grammar:[
      { form:'ir — đi', vi:'voy · vas · va · vamos · vais · van.', note:'Bất quy tắc hoàn toàn, không nhận ra gốc «ir» đâu cả. Phải thuộc.', ex:{ es:'Voy a la estación.', vi:'Tôi đi ra ga.' } },
      { form:'a + el = al · de + el = del', vi:'Chỉ hai chỗ dính này thôi, còn lại giữ nguyên.', note:'Voy al mercado (không viết «a el»). Nhưng «voy a la plaza» thì giữ nguyên vì là giống cái.', ex:{ es:'Vengo del mercado y voy al banco.', vi:'Tôi từ chợ về và đang đi ra ngân hàng.' } },
      { form:'ir a + động từ nguyên thể — tương lai gần', vi:'Cách nói tương lai thông dụng nhất trong đời thường.', note:'«Voy a comer» = tôi sắp ăn. Dễ hơn thì tương lai chia đuôi rất nhiều, và người bản xứ cũng dùng cách này nhiều hơn.', ex:{ es:'Mañana voy a visitar el museo.', vi:'Mai tôi sẽ đi thăm bảo tàng.' } },
      { form:'estar cho vị trí', vi:'Vị trí luôn dùng «estar», không bao giờ dùng «ser».', note:'«¿Dónde está la estación?» — hỏi «¿Dónde es…?» là sai. Ngoại lệ: sự kiện thì dùng ser — «La fiesta es en mi casa».', ex:{ es:'¿Dónde está el baño?', vi:'Nhà vệ sinh ở đâu ạ?' } }
    ],
    vocab:[
      { es:'ciudad', ipa:'θju.ˈðað', vi:'thành phố', pos:'danh từ', g:'f' },
      { es:'calle', ipa:'ˈka.ʎe', vi:'phố, đường', pos:'danh từ', g:'f' },
      { es:'plaza', ipa:'ˈpla.θa', vi:'quảng trường', pos:'danh từ', g:'f' },
      { es:'estación', ipa:'es.ta.ˈθjon', vi:'nhà ga, bến', pos:'danh từ', g:'f' },
      { es:'metro', ipa:'ˈme.tɾo', vi:'tàu điện ngầm', pos:'danh từ', g:'m' },
      { es:'autobús', ipa:'aw.to.ˈβus', vi:'xe buýt', pos:'danh từ', g:'m' },
      { es:'mercado', ipa:'meɾ.ˈka.ðo', vi:'chợ', pos:'danh từ', g:'m' },
      { es:'tienda', ipa:'ˈtjen.da', vi:'cửa hàng', pos:'danh từ', g:'f' },
      { es:'farmacia', ipa:'faɾ.ˈma.θja', vi:'hiệu thuốc', pos:'danh từ', g:'f' },
      { es:'banco', ipa:'ˈbaŋ.ko', vi:'ngân hàng; ghế băng', pos:'danh từ', g:'m' },
      { es:'museo', ipa:'mu.ˈse.o', vi:'bảo tàng', pos:'danh từ', g:'m' },
      { es:'derecha', ipa:'de.ˈɾe.tʃa', vi:'bên phải', pos:'danh từ', g:'f' },
      { es:'izquierda', ipa:'iθ.ˈkjeɾ.ða', vi:'bên trái', pos:'danh từ', g:'f' },
      { es:'recto', ipa:'ˈrek.to', vi:'thẳng', pos:'tính từ', note:'Đi thẳng: «todo recto».' },
      { es:'cerca', ipa:'ˈθeɾ.ka', vi:'gần', pos:'trạng từ' },
      { es:'lejos', ipa:'ˈle.xos', vi:'xa', pos:'trạng từ' },
      { es:'ir', ipa:'iɾ', vi:'đi', pos:'động từ' },
      { es:'girar', ipa:'xi.ˈɾaɾ', vi:'rẽ, quay', pos:'động từ' },
      { es:'dónde', ipa:'ˈdon.de', vi:'ở đâu', pos:'trạng từ nghi vấn' },
      { es:'billete', ipa:'bi.ˈʎe.te', vi:'vé', pos:'danh từ', g:'m', note:'Mỹ Latinh hay nói «boleto».' }
    ],
    colloc:[
      { p:'todo recto', vi:'Đi thẳng.', ex:'Sigue todo recto hasta la plaza.' },
      { p:'a la derecha / a la izquierda', vi:'Bên phải / bên trái.', ex:'Gira a la derecha en el banco.' },
      { p:'está aquí al lado', vi:'Ngay cạnh đây thôi.', ex:'La farmacia está aquí al lado.' }
    ],
    dialogue:[
      { sp:'Quan', es:'Perdone, ¿dónde está la estación?', vi:'Xin lỗi, ga ở đâu ạ?' },
      { sp:'Señora', es:'Sigue todo recto y luego gira a la izquierda.', vi:'Cháu đi thẳng rồi rẽ trái.' },
      { sp:'Quan', es:'¿Está lejos?', vi:'Có xa không ạ?' },
      { sp:'Señora', es:'No, está a diez minutos andando.', vi:'Không, đi bộ mười phút thôi.' },
      { sp:'Quan', es:'¿Hay metro por aquí?', vi:'Quanh đây có tàu điện ngầm không ạ?' },
      { sp:'Señora', es:'Sí, pero la estación está más cerca.', vi:'Có, nhưng ga còn gần hơn.' },
      { sp:'Quan', es:'Muchas gracias, señora.', vi:'Cảm ơn bà nhiều ạ.' },
      { sp:'Señora', es:'De nada. ¡Buen viaje!', vi:'Không có gì. Chúc cháu đi đường bình an!' }
    ] }
,

{ level:'a1', no:6, es:'La casa', vi:'Nhà cửa và đồ đạc', skill:'Từ vựng',
  grammar:[
    { form:'hay và está', vi:'hay giới thiệu cái CHƯA biết: «Hay una mesa». está nói vị trí cái ĐÃ biết: «La mesa está aquí».',
      note:'Sau hay không bao giờ có el/la. Nói «hay la mesa» là sai; phải là «está la mesa».',
      ex:{ es:'Hay un armario y está a la derecha.', vi:'Có một cái tủ, và nó ở bên phải.' } },
    { form:'Giới từ chỉ vị trí', vi:'en (trong, trên) · sobre (trên) · debajo de (dưới) · delante de (trước) · detrás de (sau) · entre (giữa) · al lado de (bên cạnh).',
      note:'Nhóm có de thì de gặp el thành del: al lado DEL sofá. Riêng entre và en không cần de.',
      ex:{ es:'La lámpara está al lado del sofá.', vi:'Cái đèn ở bên cạnh ghế sofa.' } },
    { form:'Tính từ hợp giống và số', vi:'pequeño → pequeña → pequeños → pequeñas. Tính từ kết thúc bằng -e hoặc phụ âm thì không đổi theo giống: grande, azul.',
      note:'Khác tiếng Pháp, ở đây đuôi -o và -a nghe rõ mồn một, nên sai là lộ ngay.',
      ex:{ es:'Una habitación pequeña y un salón grande.', vi:'Một phòng ngủ nhỏ và một phòng khách rộng.' } },
    { form:'Vị trí của tính từ', vi:'Tính từ đứng SAU danh từ: una casa blanca. Đứng trước thì mang sắc thái nhấn mạnh hoặc văn chương.',
      note:'Vài tính từ đổi nghĩa theo vị trí: un hombre grande là người to lớn, un gran hombre là một vĩ nhân.',
      ex:{ es:'Es un piso viejo pero cómodo.', vi:'Đó là một căn hộ cũ nhưng dễ chịu.' } }
  ],
  vocab:[
    { es:'piso', ipa:'ˈpi.so', vi:'căn hộ; tầng', pos:'danh từ', g:'m', note:'Ở Mỹ Latinh thường gọi là el departamento hoặc el apartamento.' },
    { es:'edificio', ipa:'e.ði.ˈfi.θjo', vi:'toà nhà', pos:'danh từ', g:'m' },
    { es:'habitación', ipa:'a.βi.ta.ˈθjon', vi:'phòng ngủ', pos:'danh từ', g:'f' },
    { es:'salón', ipa:'sa.ˈlon', vi:'phòng khách', pos:'danh từ', g:'m' },
    { es:'baño', ipa:'ˈba.ɲo', vi:'phòng tắm', pos:'danh từ', g:'m' },
    { es:'cama', ipa:'ˈka.ma', vi:'cái giường', pos:'danh từ', g:'f' },
    { es:'armario', ipa:'aɾ.ˈma.ɾjo', vi:'cái tủ quần áo', pos:'danh từ', g:'m' },
    { es:'estantería', ipa:'es.tan.te.ˈɾi.a', vi:'cái giá sách', pos:'danh từ', g:'f' },
    { es:'sofá', ipa:'so.ˈfa', vi:'ghế sofa', pos:'danh từ', g:'m', note:'Kết thúc bằng -á nhưng là giống ĐỰC: el sofá. Ngoại lệ phải nhớ.' },
    { es:'lámpara', ipa:'ˈlam.pa.ɾa', vi:'cái đèn', pos:'danh từ', g:'f' },
    { es:'ventana', ipa:'ben.ˈta.na', vi:'cửa sổ', pos:'danh từ', g:'f' },
    { es:'puerta', ipa:'ˈpweɾ.ta', vi:'cửa ra vào', pos:'danh từ', g:'f' },
    { es:'pared', ipa:'pa.ˈɾeð', vi:'bức tường', pos:'danh từ', g:'f' },
    { es:'alquiler', ipa:'al.ki.ˈleɾ', vi:'tiền thuê nhà', pos:'danh từ', g:'m' },
    { es:'vecino', ipa:'be.ˈθi.no', vi:'hàng xóm', pos:'danh từ', g:'m' },
    { es:'cómodo', ipa:'ˈko.mo.ðo', vi:'dễ chịu, tiện nghi', pos:'tính từ', g:'' },
    { es:'luminoso', ipa:'lu.mi.ˈno.so', vi:'sáng sủa', pos:'tính từ', g:'' },
    { es:'ruidoso', ipa:'rwi.ˈðo.so', vi:'ồn ào', pos:'tính từ', g:'' },
    { es:'amueblado', ipa:'a.mwe.ˈβla.ðo', vi:'có sẵn đồ đạc', pos:'tính từ', g:'' },
    { es:'alquilar', ipa:'al.ki.ˈlaɾ', vi:'thuê; cho thuê', pos:'động từ', g:'', note:'Một từ hai chiều, giống louer trong tiếng Pháp. Ngữ cảnh quyết định ai thuê của ai.' }
  ],
  colloc:[
    { p:'se alquila', vi:'cho thuê — dòng chữ trên biển rao.', ex:'Se alquila piso amueblado, 600 euros.' },
    { p:'dar a', vi:'nhìn ra (hướng nào).', ex:'La ventana da a un patio interior.' },
    { p:'bien comunicado', vi:'đi lại thuận tiện — cụm bất động sản nào cũng dùng.', ex:'El piso es pequeño pero está bien comunicado.' }
  ],
  dialogue:[
    { sp:'Quan', es:'Buenos días, llamo por el piso que se alquila.', vi:'Chào chị, tôi gọi về căn hộ cho thuê ạ.' },
    { sp:'Agente', es:'Sí, todavía está libre. Son treinta metros cuadrados.', vi:'Vâng, vẫn còn trống. Ba mươi mét vuông.' },
    { sp:'Quan', es:'¿Está amueblado?', vi:'Có sẵn đồ đạc không ạ?' },
    { sp:'Agente', es:'Sí: cama, mesa, dos sillas y un armario grande.', vi:'Có: giường, bàn, hai ghế và một cái tủ lớn.' },
    { sp:'Quan', es:'¿Y el alquiler?', vi:'Thế tiền thuê bao nhiêu ạ?' },
    { sp:'Agente', es:'Seiscientos euros, gastos incluidos.', vi:'Sáu trăm euro, đã gồm phí dịch vụ.' },
    { sp:'Quan', es:'¿La ventana da a la calle?', vi:'Cửa sổ nhìn ra phố ạ?' },
    { sp:'Agente', es:'No, da a un patio. Es más tranquilo.', vi:'Không, nhìn ra sân trong. Yên tĩnh hơn.' }
  ] },

{ level:'a1', no:7, es:'Hacer la compra', vi:'Đi chợ và mua sắm', skill:'Giao tiếp',
  grammar:[
    { form:'Số lượng: un kilo de, mucho', vi:'un kilo de tomates · un poco de azúcar · demasiada sal. Sau từ chỉ lượng thì dùng de trần.',
      note:'Nhưng mucho, poco, demasiado là TÍNH TỪ và phải hợp giống số: mucha agua, muchos libros.',
      ex:{ es:'Quiero medio kilo de queso.', vi:'Cho tôi nửa cân phô mai.' } },
    { form:'muy và mucho', vi:'muy + tính từ hoặc trạng từ: muy caro, muy rápido. mucho + động từ hoặc danh từ: cuesta mucho, mucha gente.',
      note:'Nói «muy gusta» hay «mucho caro» đều sai. Đây là lỗi phổ biến nhất của người mới học.',
      ex:{ es:'Es muy caro y hay mucha gente.', vi:'Đắt lắm mà lại đông người.' } },
    { form:'So sánh: más / menos … que', vi:'más caro que · menos caro que · tan caro como (đắt bằng).',
      note:'Bốn từ có dạng so sánh riêng: bueno → mejor, malo → peor, grande → mayor, pequeño → menor.',
      ex:{ es:'El mercado es más barato que el supermercado.', vi:'Chợ rẻ hơn siêu thị.' } },
    { form:'Động từ querer (e → ie)', vi:'quiero · quieres · quiere · queremos · queréis · quieren.',
      note:'Ngôi nosotros và vosotros giữ nguyên chữ e. Cùng nhóm: poder (puedo), empezar (empiezo), preferir (prefiero).',
      ex:{ es:'¿Qué quieres tomar?', vi:'Cậu muốn uống gì?' } }
  ],
  vocab:[
    { es:'supermercado', ipa:'su.peɾ.meɾ.ˈka.ðo', vi:'siêu thị', pos:'danh từ', g:'m' },
    { es:'panadería', ipa:'pa.na.ðe.ˈɾi.a', vi:'tiệm bánh mì', pos:'danh từ', g:'f' },
    { es:'carnicería', ipa:'kaɾ.ni.θe.ˈɾi.a', vi:'hàng thịt', pos:'danh từ', g:'f' },
    { es:'frutería', ipa:'fɾu.te.ˈɾi.a', vi:'hàng hoa quả', pos:'danh từ', g:'f' },
    { es:'caja', ipa:'ˈka.xa', vi:'quầy thu ngân; cái hộp', pos:'danh từ', g:'f' },
    { es:'precio', ipa:'ˈpɾe.θjo', vi:'giá', pos:'danh từ', g:'m' },
    { es:'kilo', ipa:'ˈki.lo', vi:'cân, ki-lô', pos:'danh từ', g:'m' },
    { es:'manzana', ipa:'man.ˈθa.na', vi:'quả táo; ô phố', pos:'danh từ', g:'f' },
    { es:'tomate', ipa:'to.ˈma.te', vi:'quả cà chua', pos:'danh từ', g:'m', note:'Từ này gốc Nahuatl ở Mexico, người Tây Ban Nha mang về rồi cả thế giới dùng theo.' },
    { es:'aceite', ipa:'a.ˈθei̯.te', vi:'dầu ăn', pos:'danh từ', g:'m', note:'Gốc Ả Rập, như rất nhiều từ tiếng Tây Ban Nha bắt đầu bằng a-.' },
    { es:'carne', ipa:'ˈkaɾ.ne', vi:'thịt', pos:'danh từ', g:'f' },
    { es:'pescado', ipa:'pes.ˈka.ðo', vi:'cá (để ăn)', pos:'danh từ', g:'m', note:'Cá còn bơi là el pez; lên đĩa rồi mới là el pescado.' },
    { es:'verdura', ipa:'beɾ.ˈðu.ɾa', vi:'rau', pos:'danh từ', g:'f' },
    { es:'fruta', ipa:'ˈfɾu.ta', vi:'trái cây', pos:'danh từ', g:'f' },
    { es:'bolsa', ipa:'ˈbol.sa', vi:'cái túi', pos:'danh từ', g:'f' },
    { es:'gratis', ipa:'ˈɡɾa.tis', vi:'miễn phí', pos:'tính từ', g:'', note:'Không bao giờ đổi theo giống số: entradas gratis.' },
    { es:'fresco', ipa:'ˈfɾes.ko', vi:'tươi; mát', pos:'tính từ', g:'' },
    { es:'barato', ipa:'ba.ˈɾa.to', vi:'rẻ', pos:'tính từ', g:'' },
    { es:'costar', ipa:'kos.ˈtaɾ', vi:'có giá; khó nhọc', pos:'động từ', g:'', note:'Đổi gốc o → ue: cuesta. «Me cuesta hablar» là tôi thấy khó nói.' },
    { es:'pagar', ipa:'pa.ˈɣaɾ', vi:'trả tiền', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'¿Cuánto cuesta?', vi:'Bao nhiêu tiền? — hỏi giá một món.', ex:'¿Cuánto cuesta el kilo de naranjas?' },
    { p:'¿Algo más?', vi:'Anh chị dùng thêm gì nữa ạ?', ex:'— ¿Algo más? — No, nada más, gracias.' },
    { p:'pagar con tarjeta', vi:'trả bằng thẻ. Tiền mặt là «en efectivo».', ex:'¿Puedo pagar con tarjeta?' }
  ],
  dialogue:[
    { sp:'Vendedor', es:'¡Buenos días! ¿Qué le pongo?', vi:'Chào anh! Anh lấy gì ạ?' },
    { sp:'Quan', es:'Un kilo de manzanas, por favor.', vi:'Cho tôi một cân táo ạ.' },
    { sp:'Vendedor', es:'Aquí tiene. ¿Algo más?', vi:'Của anh đây. Thêm gì nữa không ạ?' },
    { sp:'Quan', es:'Un poco de queso. ¿Cuánto cuesta ése?', vi:'Một ít phô mai. Loại kia bao nhiêu ạ?' },
    { sp:'Vendedor', es:'Veinte euros el kilo. Está muy bueno.', vi:'Hai mươi euro một cân. Ngon lắm.' },
    { sp:'Quan', es:'Entonces doscientos gramos.', vi:'Vậy cho tôi hai trăm gam.' },
    { sp:'Vendedor', es:'Son ocho euros con cincuenta en total.', vi:'Tất cả là tám euro năm mươi.' },
    { sp:'Quan', es:'¿Puedo pagar con tarjeta?', vi:'Tôi trả bằng thẻ được không ạ?' }
  ] },

{ level:'a1', no:8, es:'Un día normal', vi:'Một ngày bình thường', skill:'Từ vựng',
  grammar:[
    { form:'Động từ phản thân', vi:'levantarse, ducharse, vestirse, acostarse. Chia: me levanto · te levantas · se levanta · nos levantamos · os levantáis · se levantan.',
      note:'Đại từ đứng trước động từ chia, nhưng DÍNH VÀO SAU động từ nguyên thể: voy a levantarme.',
      ex:{ es:'Me levanto a las seis y media.', vi:'Tôi dậy lúc sáu rưỡi.' } },
    { form:'Động từ đổi gốc o → ue', vi:'dormir → duermo · poder → puedo · volver → vuelvo · acostarse → me acuesto.',
      note:'Ngôi nosotros và vosotros giữ nguyên: dormimos, volvemos. Đây là chỗ hay sai nhất.',
      ex:{ es:'Duermo ocho horas pero dormimos poco en época de exámenes.', vi:'Tôi ngủ tám tiếng nhưng mùa thi thì chúng tôi ngủ ít.' } },
    { form:'Trạng từ tần suất', vi:'siempre (luôn) · a menudo (thường) · a veces (thỉnh thoảng) · casi nunca (hầu như không) · nunca (không bao giờ).',
      note:'nunca đứng đầu câu thì không cần no: «Nunca como carne». Đứng sau động từ thì phải có no: «No como carne nunca».',
      ex:{ es:'A veces desayuno en la cafetería.', vi:'Thỉnh thoảng tôi ăn sáng ở quán.' } },
    { form:'Động từ ir và hacer', vi:'ir: voy · vas · va · vamos · vais · van. hacer: hago · haces · hace · hacemos · hacéis · hacen.',
      note:'Ngôi yo của hacer là hago, có chữ g xen vào. Cùng kiểu: tener → tengo, poner → pongo, salir → salgo.',
      ex:{ es:'Por la tarde hago la compra y voy al gimnasio.', vi:'Buổi chiều tôi đi chợ rồi tới phòng tập.' } }
  ],
  vocab:[
    { es:'madrugada', ipa:'ma.ðɾu.ˈɣa.ða', vi:'rạng sáng, lúc tờ mờ', pos:'danh từ', g:'f', note:'Từ nửa đêm tới khoảng sáu giờ sáng. Người Tây Ban Nha ra về lúc «las tres de la madrugada» là chuyện thường.' },
    { es:'tarde', ipa:'ˈtaɾ.ðe', vi:'buổi chiều; muộn', pos:'danh từ', g:'f' },
    { es:'horario', ipa:'o.ˈɾa.ɾjo', vi:'thời khoá biểu, giờ giấc', pos:'danh từ', g:'m' },
    { es:'despertador', ipa:'des.peɾ.ta.ˈðoɾ', vi:'đồng hồ báo thức', pos:'danh từ', g:'m' },
    { es:'ducha', ipa:'ˈdu.tʃa', vi:'vòi sen, việc tắm', pos:'danh từ', g:'f' },
    { es:'desayuno', ipa:'de.sa.ˈʝu.no', vi:'bữa sáng', pos:'danh từ', g:'m' },
    { es:'comida', ipa:'ko.ˈmi.ða', vi:'bữa trưa; đồ ăn', pos:'danh từ', g:'f', note:'Ở Tây Ban Nha la comida là bữa TRƯA, không phải bữa tối. Bữa tối là la cena.' },
    { es:'cena', ipa:'ˈθe.na', vi:'bữa tối', pos:'danh từ', g:'f' },
    { es:'siesta', ipa:'ˈsjes.ta', vi:'giấc nghỉ trưa', pos:'danh từ', g:'f' },
    { es:'trabajo', ipa:'tɾa.ˈβa.xo', vi:'công việc', pos:'danh từ', g:'m' },
    { es:'gimnasio', ipa:'xim.ˈna.sjo', vi:'phòng tập', pos:'danh từ', g:'m' },
    { es:'levantarse', ipa:'le.βan.ˈtaɾ.se', vi:'thức dậy', pos:'động từ', g:'' },
    { es:'acostarse', ipa:'a.kos.ˈtaɾ.se', vi:'đi ngủ', pos:'động từ', g:'' },
    { es:'ducharse', ipa:'du.ˈtʃaɾ.se', vi:'tắm', pos:'động từ', g:'' },
    { es:'empezar', ipa:'em.pe.ˈθaɾ', vi:'bắt đầu', pos:'động từ', g:'' },
    { es:'terminar', ipa:'teɾ.mi.ˈnaɾ', vi:'kết thúc', pos:'động từ', g:'' },
    { es:'volver', ipa:'bol.ˈβeɾ', vi:'trở về', pos:'động từ', g:'' },
    { es:'siempre', ipa:'ˈsjem.pɾe', vi:'luôn luôn', pos:'trạng từ', g:'' },
    { es:'a veces', ipa:'a ˈbe.θes', vi:'thỉnh thoảng', pos:'trạng từ', g:'' },
    { es:'nunca', ipa:'ˈnuŋ.ka', vi:'không bao giờ', pos:'trạng từ', g:'' }
  ],
  colloc:[
    { p:'temprano', vi:'sớm. Ngược lại là «tarde».', ex:'Me levanto temprano entre semana.' },
    { p:'llegar tarde', vi:'đến muộn. Đúng giờ là «llegar a tiempo».', ex:'Perdona, he llegado tarde.' },
    { p:'echarse la siesta', vi:'ngủ trưa một giấc.', ex:'Los domingos me echo la siesta.' }
  ],
  dialogue:[
    { sp:'Lucía', es:'¿A qué hora te levantas tú?', vi:'Cậu dậy lúc mấy giờ?' },
    { sp:'Quan', es:'A las seis y media entre semana.', vi:'Sáu rưỡi, ngày thường.' },
    { sp:'Lucía', es:'¿Tan temprano? Yo nunca antes de las ocho.', vi:'Sớm thế? Tớ thì không bao giờ trước tám giờ.' },
    { sp:'Quan', es:'Mi clase empieza a las ocho y cuarto.', vi:'Lớp tớ bắt đầu lúc tám giờ mười lăm.' },
    { sp:'Lucía', es:'¿Y a qué hora vuelves?', vi:'Thế mấy giờ cậu về?' },
    { sp:'Quan', es:'Sobre las seis. Luego hago la cena.', vi:'Khoảng sáu giờ. Về rồi tớ nấu bữa tối.' },
    { sp:'Lucía', es:'¿Te acuestas pronto entonces?', vi:'Vậy cậu ngủ sớm nhỉ?' },
    { sp:'Quan', es:'Sobre las once. Los domingos me echo la siesta.', vi:'Khoảng mười một giờ. Chủ nhật thì tớ ngủ trưa.' }
  ] },

{ level:'a1', no:9, es:'El tiempo y las estaciones', vi:'Thời tiết và bốn mùa', skill:'Từ vựng',
  grammar:[
    { form:'Thời tiết với hacer', vi:'hace calor · hace frío · hace sol · hace viento · hace buen tiempo.',
      note:'Chữ hace ở đây không có chủ ngữ thật. Đừng dịch là «nó làm».',
      ex:{ es:'Hoy hace frío y viento.', vi:'Hôm nay trời lạnh và có gió.' } },
    { form:'Mưa và tuyết có động từ riêng', vi:'llover → llueve (trời mưa) · nevar → nieva (trời có tuyết).',
      note:'Cả hai đổi gốc và chỉ dùng ở ngôi thứ ba số ít. Không nói «hace lluvia».',
      ex:{ es:'Llueve desde esta mañana.', vi:'Trời mưa từ sáng.' } },
    { form:'Mùa và tháng', vi:'la primavera · el verano · el otoño · el invierno. Tháng: enero … diciembre, viết thường.',
      note:'Mùa đi với en: en verano, en invierno. Tháng cũng vậy: en marzo.',
      ex:{ es:'En verano hace mucho calor aquí.', vi:'Mùa hè ở đây rất nóng.' } },
    { form:'Ngày trong tuần', vi:'lunes, martes, miércoles, jueves, viernes, sábado, domingo — viết thường.',
      note:'«el lunes» là thứ Hai này; «los lunes» là thứ Hai nào cũng thế. Năm ngày đầu có dạng số nhiều giống hệt số ít.',
      ex:{ es:'Los lunes tengo clase; el lunes voy a Madrid.', vi:'Thứ Hai nào tôi cũng có học; thứ Hai này tôi đi Madrid.' } }
  ],
  vocab:[
    { es:'tiempo', ipa:'ˈtjem.po', vi:'thời tiết; thời gian', pos:'danh từ', g:'m', note:'Hỏi thời tiết: «¿Qué tiempo hace?». Nói không có thời gian: «No tengo tiempo».' },
    { es:'temporada', ipa:'tem.po.ˈɾa.ða', vi:'mùa vụ, thời kỳ', pos:'danh từ', g:'f', note:'Khác estación (mùa trong năm): temporada là mùa của một việc — temporada alta là mùa cao điểm du lịch.' },
    { es:'primavera', ipa:'pɾi.ma.ˈβe.ɾa', vi:'mùa xuân', pos:'danh từ', g:'f' },
    { es:'verano', ipa:'be.ˈɾa.no', vi:'mùa hè', pos:'danh từ', g:'m' },
    { es:'otoño', ipa:'o.ˈto.ɲo', vi:'mùa thu', pos:'danh từ', g:'m' },
    { es:'invierno', ipa:'im.ˈbjeɾ.no', vi:'mùa đông', pos:'danh từ', g:'m' },
    { es:'lluvia', ipa:'ˈʎu.βja', vi:'mưa', pos:'danh từ', g:'f' },
    { es:'nieve', ipa:'ˈnje.βe', vi:'tuyết', pos:'danh từ', g:'f' },
    { es:'viento', ipa:'ˈbjen.to', vi:'gió', pos:'danh từ', g:'m' },
    { es:'sol', ipa:'sol', vi:'mặt trời', pos:'danh từ', g:'m' },
    { es:'nube', ipa:'ˈnu.βe', vi:'đám mây', pos:'danh từ', g:'f' },
    { es:'cielo', ipa:'ˈθje.lo', vi:'bầu trời', pos:'danh từ', g:'m' },
    { es:'paraguas', ipa:'pa.ˈɾa.ɣwas', vi:'cái dù', pos:'danh từ', g:'m', note:'Luôn có -s ở cuối kể cả số ít: el paraguas, los paraguas.' },
    { es:'grado', ipa:'ˈɡɾa.ðo', vi:'độ (nhiệt độ)', pos:'danh từ', g:'m' },
    { es:'tormenta', ipa:'toɾ.ˈmen.ta', vi:'cơn giông', pos:'danh từ', g:'f' },
    { es:'niebla', ipa:'ˈnje.βla', vi:'sương mù', pos:'danh từ', g:'f' },
    { es:'caluroso', ipa:'ka.lu.ˈɾo.so', vi:'nóng bức', pos:'tính từ', g:'' },
    { es:'húmedo', ipa:'ˈu.me.ðo', vi:'ẩm', pos:'tính từ', g:'' },
    { es:'llover', ipa:'ʎo.ˈβeɾ', vi:'mưa', pos:'động từ', g:'' },
    { es:'nevar', ipa:'ne.ˈβaɾ', vi:'có tuyết', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'¿Qué tiempo hace?', vi:'Thời tiết thế nào? — câu hỏi chuẩn.', ex:'— ¿Qué tiempo hace? — Está nublado.' },
    { p:'hace un tiempo de perros', vi:'thời tiết chó má — trời xấu kinh khủng.', ex:'No salgas, hace un tiempo de perros.' },
    { p:'estar nublado', vi:'trời nhiều mây. Dùng estar chứ không dùng hacer.', ex:'Hoy está nublado todo el día.' }
  ],
  dialogue:[
    { sp:'Lucía', es:'¿Sales este fin de semana?', vi:'Cuối tuần cậu có đi đâu không?' },
    { sp:'Quan', es:'Depende del tiempo. ¿Qué dan para el sábado?', vi:'Còn tuỳ thời tiết. Thứ Bảy dự báo thế nào?' },
    { sp:'Lucía', es:'Lluvia por la mañana y sol por la tarde.', vi:'Sáng mưa, chiều nắng.' },
    { sp:'Quan', es:'¿Cuántos grados hace?', vi:'Bao nhiêu độ vậy?' },
    { sp:'Lucía', es:'Doce por la mañana, dieciocho por la tarde.', vi:'Sáng mười hai, chiều mười tám.' },
    { sp:'Quan', es:'No está mal para marzo.', vi:'Vậy là không tệ, so với tháng Ba.' },
    { sp:'Lucía', es:'No. En invierno aquí llega a cero.', vi:'Không tệ. Mùa đông ở đây xuống tới không độ.' },
    { sp:'Quan', es:'Pues me llevo el paraguas igualmente.', vi:'Thế thì tớ vẫn cứ mang dù.' }
  ] },

{ level:'a1', no:10, es:'La ropa y los colores', vi:'Quần áo và màu sắc', skill:'Từ vựng',
  grammar:[
    { form:'Tính từ chỉ định: este / ese / aquel', vi:'este (này, gần người nói) · ese (đó, gần người nghe) · aquel (kia, xa cả hai).',
      note:'Tiếng Tây Ban Nha có BA bậc khoảng cách, tiếng Anh và tiếng Pháp chỉ có hai. Hợp giống số: esta falda, estos zapatos.',
      ex:{ es:'Este jersey es más caro que aquel.', vi:'Cái áo len này đắt hơn cái kia.' } },
    { form:'Màu sắc hợp giống và số', vi:'un jersey rojo → una falda roja · un pantalón negro → unas botas negras.',
      note:'Màu kết thúc bằng -e hoặc phụ âm thì không đổi theo giống: verde, azul, gris, marrón — chỉ thêm -s ở số nhiều.',
      ex:{ es:'Una camisa blanca y unos zapatos negros.', vi:'Một cái áo sơ mi trắng và một đôi giày đen.' } },
    { form:'quedar bien — hợp với ai', vi:'Cấu trúc giống gustar: «Te queda bien» nghĩa là cái đó hợp với bạn.',
      note:'Chủ ngữ ngữ pháp là món đồ, không phải người: «Estos zapatos te quedan bien» — động từ ở số nhiều.',
      ex:{ es:'Ese color te queda muy bien.', vi:'Màu đó hợp với cậu lắm.' } },
    { form:'Động từ ponerse và llevar', vi:'ponerse là mặc vào (hành động): me pongo el abrigo. llevar là đang mặc (trạng thái): lleva una camisa azul.',
      note:'ponerse có ngôi yo bất quy tắc: me pongo. Đừng nhầm với «poner» trần là đặt, để.',
      ex:{ es:'Hace frío: ponte el abrigo.', vi:'Trời lạnh đấy: mặc áo khoác vào đi.' } }
  ],
  vocab:[
    { es:'ropa', ipa:'ˈro.pa', vi:'quần áo', pos:'danh từ', g:'f', note:'Luôn số ít dù chỉ nhiều món: «mucha ropa», không nói «muchas ropas».' },
    { es:'camisa', ipa:'ka.ˈmi.sa', vi:'áo sơ mi', pos:'danh từ', g:'f' },
    { es:'camiseta', ipa:'ka.mi.ˈse.ta', vi:'áo phông', pos:'danh từ', g:'f' },
    { es:'jersey', ipa:'xeɾ.ˈsei', vi:'áo len', pos:'danh từ', g:'m' },
    { es:'abrigo', ipa:'a.ˈβɾi.ɣo', vi:'áo khoác dày', pos:'danh từ', g:'m' },
    { es:'pantalones', ipa:'pan.ta.ˈlo.nes', vi:'cái quần', pos:'danh từ số nhiều', g:'m', note:'Luôn dùng số nhiều, như tiếng Anh. Khác tiếng Pháp vốn dùng số ít.' },
    { es:'falda', ipa:'ˈfal.da', vi:'cái váy', pos:'danh từ', g:'f' },
    { es:'vestido', ipa:'bes.ˈti.ðo', vi:'áo đầm', pos:'danh từ', g:'m' },
    { es:'zapato', ipa:'θa.ˈpa.to', vi:'cái giày', pos:'danh từ', g:'m' },
    { es:'calcetín', ipa:'kal.θe.ˈtin', vi:'cái tất', pos:'danh từ', g:'m' },
    { es:'talla', ipa:'ˈta.ʎa', vi:'cỡ quần áo', pos:'danh từ', g:'f', note:'Cỡ giày thì gọi riêng là «el número».' },
    { es:'color', ipa:'ko.ˈloɾ', vi:'màu sắc', pos:'danh từ', g:'m' },
    { es:'blanco', ipa:'ˈblaŋ.ko', vi:'trắng', pos:'tính từ', g:'' },
    { es:'negro', ipa:'ˈne.ɣɾo', vi:'đen', pos:'tính từ', g:'' },
    { es:'rojo', ipa:'ˈro.xo', vi:'đỏ', pos:'tính từ', g:'' },
    { es:'azul', ipa:'a.ˈθul', vi:'xanh lam', pos:'tính từ', g:'' },
    { es:'verde', ipa:'ˈbeɾ.ðe', vi:'xanh lá', pos:'tính từ', g:'' },
    { es:'marrón', ipa:'ma.ˈron', vi:'nâu', pos:'tính từ', g:'' },
    { es:'llevar', ipa:'ʎe.ˈβaɾ', vi:'mặc; mang theo', pos:'động từ', g:'' },
    { es:'probarse', ipa:'pɾo.ˈβaɾ.se', vi:'thử (quần áo)', pos:'động từ', g:'', note:'Đổi gốc o → ue: me pruebo. Không có «se» thì probar là nếm thử đồ ăn.' }
  ],
  colloc:[
    { p:'el probador', vi:'phòng thử đồ.', ex:'El probador está al fondo a la derecha.' },
    { p:'¿Qué talla usa?', vi:'Anh chị mặc cỡ nào ạ?', ex:'— ¿Qué talla usa? — La M, creo.' },
    { p:'me queda grande', vi:'cái này rộng quá so với tôi. Chật là «me queda pequeño».', ex:'Este abrigo me queda grande.' }
  ],
  dialogue:[
    { sp:'Dependienta', es:'Hola, ¿le ayudo en algo?', vi:'Chào anh, tôi giúp được gì ạ?' },
    { sp:'Quan', es:'Busco un abrigo para el invierno.', vi:'Tôi tìm một cái áo khoác mùa đông.' },
    { sp:'Dependienta', es:'¿Qué talla usa?', vi:'Anh mặc cỡ nào ạ?' },
    { sp:'Quan', es:'La M, creo. ¿Puedo probarme éste?', vi:'Chắc là M. Tôi thử cái này được không ạ?' },
    { sp:'Dependienta', es:'Claro. El probador está al fondo.', vi:'Được chứ. Phòng thử ở phía trong.' },
    { sp:'Quan', es:'Me queda un poco grande. ¿Lo tiene en negro?', vi:'Hơi rộng một chút. Chị có màu đen không?' },
    { sp:'Dependienta', es:'En negro sólo en L. Pero este azul le queda muy bien.', vi:'Màu đen chỉ còn cỡ L. Nhưng màu xanh này hợp với anh lắm.' },
    { sp:'Quan', es:'Vale, me lo llevo.', vi:'Vâng, tôi lấy cái này.' }
  ] },

{ level:'a1', no:11, es:'En el médico', vi:'Đi khám bệnh', skill:'Giao tiếp',
  grammar:[
    { form:'doler — cấu trúc ngược', vi:'me duele la cabeza · te duelen los pies. Chủ ngữ ngữ pháp là BỘ PHẬN đau, không phải người.',
      note:'Nên động từ theo số của bộ phận: duele (một chỗ), duelen (nhiều chỗ). Cùng nhóm với gustar.',
      ex:{ es:'Me duele la garganta desde ayer.', vi:'Tôi đau họng từ hôm qua.' } },
    { form:'Mệnh lệnh thức', vi:'Ngôi tú: habla, come, bebe. Ngôi usted: hable, coma, beba — đảo nguyên âm đuôi.',
      note:'Phủ định của ngôi tú lại dùng dạng usted có thêm -s: no hables, no comas. Đây là chỗ rất dễ sai.',
      ex:{ es:'Tome esta pastilla dos veces al día.', vi:'Uống viên này ngày hai lần.' } },
    { form:'desde hace — đã bao lâu rồi', vi:'desde hace tres días (đã ba ngày) · desde el lunes (từ thứ Hai).',
      note:'Câu dùng desde hace thì động từ ở HIỆN TẠI: «vivo aquí desde hace un año», không dùng quá khứ.',
      ex:{ es:'Toso desde hace una semana.', vi:'Tôi ho đã một tuần rồi.' } },
    { form:'tener que và hay que', vi:'tener que + nguyên thể là ai đó phải làm: tengo que descansar. hay que là nói chung ai cũng phải: hay que beber agua.',
      note:'hay que không có chủ ngữ, dùng cho lời khuyên chung chung.',
      ex:{ es:'Tiene que descansar dos días.', vi:'Anh phải nghỉ hai ngày.' } }
  ],
  vocab:[
    { es:'médico', ipa:'ˈme.ði.ko', vi:'bác sĩ', pos:'danh từ', g:'m' },
    { es:'enfermera', ipa:'em.feɾ.ˈme.ɾa', vi:'y tá (nữ)', pos:'danh từ', g:'f' },
    { es:'jarabe', ipa:'xa.ˈɾa.βe', vi:'thuốc si-rô', pos:'danh từ', g:'m' },
    { es:'receta', ipa:'re.ˈθe.ta', vi:'đơn thuốc; công thức nấu ăn', pos:'danh từ', g:'f', note:'Một từ hai nghĩa: bác sĩ kê receta, đầu bếp cũng có receta.' },
    { es:'pastilla', ipa:'pas.ˈti.ʎa', vi:'viên thuốc', pos:'danh từ', g:'f' },
    { es:'cabeza', ipa:'ka.ˈβe.θa', vi:'cái đầu', pos:'danh từ', g:'f' },
    { es:'estómago', ipa:'es.ˈto.ma.ɣo', vi:'cái dạ dày, bụng', pos:'danh từ', g:'m' },
    { es:'garganta', ipa:'ɡaɾ.ˈɣan.ta', vi:'cổ họng', pos:'danh từ', g:'f' },
    { es:'muela', ipa:'ˈmwe.la', vi:'cái răng hàm', pos:'danh từ', g:'f', note:'diente là răng cửa, muela là răng hàm. Đau răng hàm thì nói «me duele una muela».' },
    { es:'espalda', ipa:'es.ˈpal.da', vi:'cái lưng', pos:'danh từ', g:'f' },
    { es:'fiebre', ipa:'ˈfje.βɾe', vi:'cơn sốt', pos:'danh từ', g:'f' },
    { es:'resfriado', ipa:'res.ˈfɾja.ðo', vi:'bệnh cảm lạnh', pos:'danh từ', g:'m' },
    { es:'salud', ipa:'sa.ˈluð', vi:'sức khoẻ', pos:'danh từ', g:'f', note:'Cũng là câu chúc khi nâng cốc, và câu nói khi ai đó hắt hơi.' },
    { es:'enfermo', ipa:'em.ˈfeɾ.mo', vi:'ốm', pos:'tính từ', g:'' },
    { es:'cansado', ipa:'kan.ˈsa.ðo', vi:'mệt', pos:'tính từ', g:'' },
    { es:'toser', ipa:'to.ˈseɾ', vi:'ho', pos:'động từ', g:'' },
    { es:'descansar', ipa:'des.kan.ˈsaɾ', vi:'nghỉ ngơi', pos:'động từ', g:'' },
    { es:'curarse', ipa:'ku.ˈɾaɾ.se', vi:'khỏi bệnh', pos:'động từ', g:'' },
    { es:'doler', ipa:'do.ˈleɾ', vi:'đau', pos:'động từ', g:'' },
    { es:'recetar', ipa:'re.θe.ˈtaɾ', vi:'kê đơn', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'pedir cita', vi:'đặt lịch hẹn khám.', ex:'Quiero pedir cita con el doctor Ruiz.' },
    { p:'No es nada grave.', vi:'Không có gì nghiêm trọng đâu.', ex:'Tranquilo, no es nada grave.' },
    { p:'ponerse bueno', vi:'khỏi bệnh, khoẻ lại. Câu chúc: «¡Que te pongas bueno!»', ex:'Con estas pastillas te pondrás bueno enseguida.' }
  ],
  dialogue:[
    { sp:'Médica', es:'Buenos días. ¿Qué le pasa?', vi:'Chào anh. Anh thấy thế nào ạ?' },
    { sp:'Quan', es:'Me duele la garganta desde hace tres días.', vi:'Tôi đau họng ba hôm nay rồi ạ.' },
    { sp:'Médica', es:'¿Tiene fiebre?', vi:'Anh có sốt không?' },
    { sp:'Quan', es:'Un poco, treinta y ocho esta mañana. Y toso por la noche.', vi:'Hơi sốt, sáng nay ba mươi tám độ. Ban đêm thì tôi ho.' },
    { sp:'Médica', es:'Abra la boca… No es nada grave, es un resfriado fuerte.', vi:'Há miệng ra nào… Không nặng đâu, cảm lạnh nặng thôi.' },
    { sp:'Quan', es:'¿Puedo ir a clase mañana?', vi:'Mai tôi đi học được không ạ?' },
    { sp:'Médica', es:'Tiene que descansar dos días. Y beba mucha agua.', vi:'Anh phải nghỉ hai ngày. Với lại uống nhiều nước vào.' },
    { sp:'Quan', es:'De acuerdo. Muchas gracias, doctora.', vi:'Vâng ạ. Cảm ơn bác sĩ nhiều.' }
  ] },

{ level:'a1', no:12, es:'¿Qué has hecho hoy?', vi:'Kể lại chuyện hôm nay', skill:'Ngữ pháp',
  grammar:[
    { form:'Pretérito perfecto: haber + quá khứ phân từ', vi:'he comido · has ido · ha hecho · hemos visto · habéis dicho · han vuelto.',
      note:'Luôn dùng haber, không bao giờ dùng ser hay estar. Quá khứ phân từ KHÔNG đổi theo giống ở thời này.',
      ex:{ es:'Hoy he comido en casa.', vi:'Hôm nay tôi ăn ở nhà.' } },
    { form:'Quá khứ phân từ bất quy tắc', vi:'hacer → hecho · ver → visto · decir → dicho · escribir → escrito · volver → vuelto · abrir → abierto · poner → puesto · romper → roto.',
      note:'Tám từ này gom lại học một lần là xong phần lớn câu kể chuyện hằng ngày.',
      ex:{ es:'He visto una película y he escrito un correo.', vi:'Tôi xem một bộ phim và viết một cái thư.' } },
    { form:'Khi nào dùng pretérito perfecto', vi:'Dùng cho khoảng thời gian CHƯA khép lại: hoy, esta semana, este año, últimamente.',
      note:'Nếu khoảng thời gian đã khép (ayer, la semana pasada) thì dùng thì khác — pretérito indefinido, học ở A2.',
      ex:{ es:'Esta semana he trabajado mucho.', vi:'Tuần này tôi làm việc nhiều.' } },
    { form:'ya và todavía no', vi:'ya là đã… rồi; todavía no là vẫn chưa.',
      note:'Cả hai thường đi với pretérito perfecto: «¿Ya has comido?» — «Todavía no he comido.»',
      ex:{ es:'Ya he terminado, pero todavía no he enviado el correo.', vi:'Tôi xong rồi, nhưng vẫn chưa gửi thư.' } }
  ],
  vocab:[
    { es:'hoy', ipa:'oi', vi:'hôm nay', pos:'trạng từ', g:'' },
    { es:'ayer', ipa:'a.ˈʝeɾ', vi:'hôm qua', pos:'trạng từ', g:'' },
    { es:'anteayer', ipa:'an.te.a.ˈʝeɾ', vi:'hôm kia', pos:'trạng từ', g:'' },
    { es:'ya', ipa:'ʝa', vi:'đã… rồi', pos:'trạng từ', g:'' },
    { es:'todavía', ipa:'to.ða.ˈβi.a', vi:'vẫn, còn', pos:'trạng từ', g:'' },
    { es:'luego', ipa:'ˈlwe.ɣo', vi:'sau đó', pos:'trạng từ', g:'' },
    { es:'por fin', ipa:'poɾ fin', vi:'cuối cùng thì', pos:'trạng từ', g:'' },
    { es:'película', ipa:'pe.ˈli.ku.la', vi:'bộ phim', pos:'danh từ', g:'f' },
    { es:'concierto', ipa:'kon.ˈθjeɾ.to', vi:'buổi hoà nhạc', pos:'danh từ', g:'m' },
    { es:'obra de teatro', ipa:'ˈo.βɾa de te.ˈa.tɾo', vi:'vở kịch', pos:'danh từ', g:'f' },
    { es:'exposición', ipa:'eks.po.si.ˈθjon', vi:'cuộc triển lãm', pos:'danh từ', g:'f' },
    { es:'entrada', ipa:'en.ˈtɾa.ða', vi:'vé vào cửa; lối vào; món khai vị', pos:'danh từ', g:'f' },
    { es:'ver', ipa:'beɾ', vi:'nhìn, xem', pos:'động từ', g:'' },
    { es:'decir', ipa:'de.ˈθiɾ', vi:'nói', pos:'động từ', g:'' },
    { es:'escribir', ipa:'es.kɾi.ˈβiɾ', vi:'viết', pos:'động từ', g:'' },
    { es:'leer', ipa:'le.ˈeɾ', vi:'đọc', pos:'động từ', g:'' },
    { es:'salir', ipa:'sa.ˈliɾ', vi:'ra ngoài, đi chơi', pos:'động từ', g:'', note:'«Salir con alguien» còn nghĩa là hẹn hò với ai đó.' },
    { es:'llegar', ipa:'ʎe.ˈɣaɾ', vi:'đến nơi', pos:'động từ', g:'' },
    { es:'quedarse', ipa:'ke.ˈðaɾ.se', vi:'ở lại', pos:'động từ', g:'' },
    { es:'olvidar', ipa:'ol.βi.ˈðaɾ', vi:'quên', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'¿Qué has hecho?', vi:'Cậu đã làm gì? — câu mở đầu kể chuyện.', ex:'¿Qué has hecho este fin de semana?' },
    { p:'me lo he pasado bien', vi:'tớ chơi vui lắm.', ex:'Me lo he pasado muy bien en el concierto.' },
    { p:'primero … luego … por fin', vi:'trước hết… sau đó… cuối cùng — bộ khung kể chuyện.', ex:'Primero he comido, luego he estudiado y por fin he dormido.' }
  ],
  dialogue:[
    { sp:'Lucía', es:'Bueno, ¿qué has hecho hoy?', vi:'Thế hôm nay cậu làm gì?' },
    { sp:'Quan', es:'He ido al museo con Marc.', vi:'Tớ đi bảo tàng với Marc.' },
    { sp:'Lucía', es:'¿Ah, sí? ¿Os habéis quedado mucho rato?', vi:'Thế à? Hai đứa ở đó lâu không?' },
    { sp:'Quan', es:'Tres horas. Luego hemos tomado un café.', vi:'Ba tiếng. Sau đó bọn tớ đi uống cà phê.' },
    { sp:'Lucía', es:'¿Has visto la exposición sobre Hanói?', vi:'Cậu có xem triển lãm về Hà Nội không?' },
    { sp:'Quan', es:'No, todavía no la he visto. Empieza el sábado.', vi:'Chưa, tớ chưa xem. Thứ Bảy mới mở.' },
    { sp:'Lucía', es:'¿Vamos juntos entonces?', vi:'Thế đi cùng nhau nhé?' },
    { sp:'Quan', es:'Vale. Ya he apuntado la fecha.', vi:'Ừ. Tớ ghi ngày rồi.' }
  ] },

{ level:'a1', no:13, es:'Los transportes', vi:'Tàu xe và đi lại', skill:'Giao tiếp',
  grammar:[
    { form:'Tương lai gần: ir a + nguyên thể', vi:'voy a salir · vas a coger · va a llegar.',
      note:'Đây là cách nói tương lai thông dụng nhất trong hội thoại, dùng nhiều hơn thì tương lai chính thức.',
      ex:{ es:'Voy a coger el tren de las nueve.', vi:'Tôi sẽ đi chuyến tàu chín giờ.' } },
    { form:'en và a với phương tiện', vi:'en coche · en tren · en autobús · en avión — nhưng a pie và a caballo.',
      note:'Chỉ hai trường hợp dùng a: đi bộ và cưỡi ngựa. Còn lại đều là en.',
      ex:{ es:'Voy a la facultad en bicicleta.', vi:'Tôi đạp xe tới trường.' } },
    { form:'Số thứ tự', vi:'primero, segundo, tercero, cuarto, quinto… Hợp giống số: la primera parada, el tercer andén.',
      note:'primero và tercero rụng chữ -o khi đứng trước danh từ giống đực: el primer día, el tercer vagón.',
      ex:{ es:'Baje en la segunda parada.', vi:'Anh xuống ở bến thứ hai.' } },
    { form:'Hỏi đường và chỉ dẫn', vi:'¿Cómo se va a…? · ¿Cuánto se tarda? · Tiene que cambiar en…',
      note:'«se va» và «se tarda» là dạng vô nhân xưng — không nói ai đi, ai mất bao lâu, mà nói chung chung.',
      ex:{ es:'¿Cuánto se tarda hasta el centro?', vi:'Vào trung tâm mất bao lâu ạ?' } }
  ],
  vocab:[
    { es:'avión', ipa:'a.ˈβjon', vi:'máy bay', pos:'danh từ', g:'m' },
    { es:'estación de autobuses', ipa:'es.ta.ˈθjon de au̯.to.ˈβu.ses', vi:'bến xe khách', pos:'danh từ', g:'f' },
    { es:'tranvía', ipa:'tɾam.ˈbi.a', vi:'tàu điện mặt đất', pos:'danh từ', g:'m' },
    { es:'horario de salidas', ipa:'o.ˈɾa.ɾjo de sa.ˈli.ðas', vi:'bảng giờ khởi hành', pos:'danh từ', g:'m' },
    { es:'andén', ipa:'an.ˈden', vi:'sân ga', pos:'danh từ', g:'m' },
    { es:'vía', ipa:'ˈbi.a', vi:'đường ray', pos:'danh từ', g:'f' },
    { es:'parada', ipa:'pa.ˈɾa.ða', vi:'bến, trạm dừng', pos:'danh từ', g:'f' },
    { es:'transbordo', ipa:'tɾanz.ˈβoɾ.ðo', vi:'chỗ đổi tuyến', pos:'danh từ', g:'m' },
    { es:'retraso', ipa:'re.ˈtɾa.so', vi:'sự chậm trễ', pos:'danh từ', g:'m' },
    { es:'ida y vuelta', ipa:'ˈi.ða i ˈbwel.ta', vi:'vé khứ hồi', pos:'danh từ', g:'f' },
    { es:'maleta', ipa:'ma.ˈle.ta', vi:'cái vali', pos:'danh từ', g:'f' },
    { es:'conductor', ipa:'kon.duk.ˈtoɾ', vi:'người lái', pos:'danh từ', g:'m' },
    { es:'directo', ipa:'di.ˈɾek.to', vi:'đi thẳng, không đổi tuyến', pos:'tính từ', g:'' },
    { es:'completo', ipa:'kom.ˈple.to', vi:'hết chỗ', pos:'tính từ', g:'' },
    { es:'subir', ipa:'su.ˈβiɾ', vi:'lên (xe, tàu)', pos:'động từ', g:'' },
    { es:'bajar', ipa:'ba.ˈxaɾ', vi:'xuống (xe, tàu)', pos:'động từ', g:'' },
    { es:'cambiar', ipa:'kam.ˈbjaɾ', vi:'đổi (tuyến)', pos:'động từ', g:'' },
    { es:'reservar', ipa:'re.seɾ.ˈβaɾ', vi:'đặt trước', pos:'động từ', g:'' },
    { es:'tardar', ipa:'taɾ.ˈðaɾ', vi:'mất (bao lâu)', pos:'động từ', g:'' },
    { es:'perder', ipa:'peɾ.ˈðeɾ', vi:'lỡ; làm mất', pos:'động từ', g:'', note:'«Perder el tren» là lỡ tàu. Đổi gốc e → ie: pierdo.' }
  ],
  colloc:[
    { p:'un billete de ida', vi:'vé một chiều. Khứ hồi là «de ida y vuelta».', ex:'Un billete de ida para Sevilla, por favor.' },
    { p:'llevar retraso', vi:'bị chậm giờ.', ex:'El tren lleva veinte minutos de retraso.' },
    { p:'hacer transbordo', vi:'đổi tuyến.', ex:'Tiene que hacer transbordo en Sol.' }
  ],
  dialogue:[
    { sp:'Quan', es:'Buenos días, un billete de ida y vuelta a Sevilla.', vi:'Chào chị, cho tôi một vé khứ hồi đi Sevilla ạ.' },
    { sp:'Taquilla', es:'¿Para cuándo?', vi:'Đi hôm nào ạ?' },
    { sp:'Quan', es:'El viernes por la mañana, vuelta el domingo por la tarde.', vi:'Sáng thứ Sáu, về chiều Chủ nhật.' },
    { sp:'Taquilla', es:'El de las ocho está completo. ¿El de las nueve?', vi:'Chuyến tám giờ hết chỗ rồi. Chuyến chín giờ được không ạ?' },
    { sp:'Quan', es:'Vale. ¿Es directo?', vi:'Vâng. Có phải đổi tàu không ạ?' },
    { sp:'Taquilla', es:'No, hace transbordo en Córdoba. Se tarda cuatro horas.', vi:'Có, đổi ở Córdoba. Cả chặng mất bốn tiếng.' },
    { sp:'Quan', es:'Muy bien. ¿Tengo que imprimir el billete?', vi:'Được ạ. Tôi có phải in vé ra không?' },
    { sp:'Taquilla', es:'No hace falta, se lo mando al móvil.', vi:'Không cần, tôi gửi vào điện thoại anh.' }
  ] },

{ level:'a1', no:14, es:'En el restaurante', vi:'Ở nhà hàng', skill:'Giao tiếp',
  grammar:[
    { form:'Đại từ tân ngữ trực tiếp: lo / la / los / las', vi:'— ¿Tomas el pescado? — Sí, lo tomo. — ¿Quieres la tarta? — Sí, la quiero.',
      note:'Đại từ đứng TRƯỚC động từ chia, hoặc dính vào sau nguyên thể: voy a tomarlo.',
      ex:{ es:'Esta sopa la encuentro buenísima.', vi:'Món xúp này tôi thấy ngon tuyệt.' } },
    { form:'Đại từ gián tiếp: le / les', vi:'Thay cho «a + người»: le traigo la cuenta (tôi mang hoá đơn cho anh ấy).',
      note:'Khi le đứng cạnh lo/la thì le đổi thành se: «se lo traigo», không nói «le lo traigo».',
      ex:{ es:'El camarero le trae la cuenta.', vi:'Người phục vụ mang hoá đơn cho anh ấy.' } },
    { form:'Cách gọi món lịch sự', vi:'Para mí… · Yo voy a tomar… · ¿Me trae…? — cả ba đều tự nhiên và lịch sự.',
      note:'Nói trống «quiero» nghe hơi cộc. Thêm «por favor» hoặc dùng «me pone» là ổn.',
      ex:{ es:'Para mí, la sopa y el pollo, por favor.', vi:'Cho tôi món xúp và thịt gà ạ.' } },
    { form:'Hỏi ý kiến: ¿Qué tal está?', vi:'¿Qué tal está la sopa? — Está buenísima.',
      note:'Nhận xét món ăn thì dùng ESTAR: está bueno (hôm nay ngon). Dùng ser là nói về bản chất món đó.',
      ex:{ es:'¿Qué tal está el postre?', vi:'Món tráng miệng thế nào?' } }
  ],
  vocab:[
    { es:'restaurante', ipa:'res.tau̯.ˈɾan.te', vi:'nhà hàng', pos:'danh từ', g:'m' },
    { es:'cuchillo', ipa:'ku.ˈtʃi.ʎo', vi:'con dao', pos:'danh từ', g:'m' },
    { es:'carta', ipa:'ˈkaɾ.ta', vi:'thực đơn; lá thư', pos:'danh từ', g:'f' },
    { es:'primer plato', ipa:'pɾi.ˈmeɾ ˈpla.to', vi:'món thứ nhất', pos:'danh từ', g:'m' },
    { es:'segundo plato', ipa:'se.ˈɣun.do ˈpla.to', vi:'món thứ hai', pos:'danh từ', g:'m' },
    { es:'postre', ipa:'ˈpos.tɾe', vi:'món tráng miệng', pos:'danh từ', g:'m' },
    { es:'mantel', ipa:'man.ˈtel', vi:'khăn trải bàn', pos:'danh từ', g:'m' },
    { es:'propina', ipa:'pɾo.ˈpi.na', vi:'tiền boa', pos:'danh từ', g:'f', note:'Không bắt buộc: giá đã gồm phục vụ. Để lại tiền lẻ là thể hiện hài lòng.' },
    { es:'sopa', ipa:'ˈso.pa', vi:'món xúp', pos:'danh từ', g:'f' },
    { es:'ensalada', ipa:'en.sa.ˈla.ða', vi:'món rau trộn', pos:'danh từ', g:'f' },
    { es:'pollo', ipa:'ˈpo.ʎo', vi:'thịt gà', pos:'danh từ', g:'m' },
    { es:'arroz', ipa:'a.ˈroθ', vi:'cơm, gạo', pos:'danh từ', g:'m' },
    { es:'sal', ipa:'sal', vi:'muối', pos:'danh từ', g:'f' },
    { es:'servilleta', ipa:'seɾ.βi.ˈʎe.ta', vi:'khăn ăn', pos:'danh từ', g:'f' },
    { es:'picante', ipa:'pi.ˈkan.te', vi:'cay', pos:'tính từ', g:'' },
    { es:'salado', ipa:'sa.ˈla.ðo', vi:'mặn', pos:'tính từ', g:'' },
    { es:'dulce', ipa:'ˈdul.θe', vi:'ngọt', pos:'tính từ', g:'' },
    { es:'probar', ipa:'pɾo.ˈβaɾ', vi:'nếm thử', pos:'động từ', g:'' },
    { es:'traer', ipa:'tɾa.ˈeɾ', vi:'mang đến', pos:'động từ', g:'', note:'Ngôi yo bất quy tắc: traigo. Cùng kiểu với caer → caigo.' },
    { es:'recomendar', ipa:'re.ko.men.ˈdaɾ', vi:'gợi ý, giới thiệu', pos:'động từ', g:'' }
  ],
  colloc:[
    { p:'La cuenta, por favor.', vi:'Cho tôi xin hoá đơn.', ex:'¿Nos trae la cuenta, por favor?' },
    { p:'el menú del día', vi:'thực đơn trong ngày — bữa trưa nhiều món giá cố định.', ex:'¿Tienen menú del día?' },
    { p:'¿Qué me recomienda?', vi:'Anh gợi ý món nào ạ? — câu rất nên dùng khi chưa biết gọi gì.', ex:'No conozco la carta, ¿qué me recomienda?' }
  ],
  dialogue:[
    { sp:'Camarero', es:'Buenas noches. ¿Han elegido ya?', vi:'Chào anh chị. Đã chọn món chưa ạ?' },
    { sp:'Quan', es:'Sí. De primero, la sopa.', vi:'Rồi ạ. Món thứ nhất cho tôi món xúp.' },
    { sp:'Camarero', es:'¿Y de segundo?', vi:'Món thứ hai thì sao ạ?' },
    { sp:'Quan', es:'El pollo con arroz. ¿Está picante?', vi:'Thịt gà với cơm. Món đó có cay không ạ?' },
    { sp:'Camarero', es:'No, para nada. ¿Y para beber?', vi:'Không hề ạ. Đồ uống thì sao ạ?' },
    { sp:'Quan', es:'Sólo agua, gracias.', vi:'Nước lọc thôi, cảm ơn anh.' },
    { sp:'Camarero', es:'Muy bien. Se lo traigo enseguida.', vi:'Vâng ạ. Tôi mang lên ngay.' },
    { sp:'Quan', es:'Gracias. Y luego la cuenta, por favor.', vi:'Cảm ơn anh. Lát nữa cho tôi xin hoá đơn nhé.' }
  ] },

{ level:'a1', no:15, es:'Escribir y llamar', vi:'Viết thư và gọi điện', skill:'Giao tiếp',
  grammar:[
    { form:'Thì pretérito imperfecto — bước đầu', vi:'Nhóm -ar: hablaba, hablabas, hablaba… Nhóm -er/-ir: comía, comías, comía…',
      note:'Chỉ ba động từ bất quy tắc: ser → era, ir → iba, ver → veía. Imperfecto tả khung cảnh và thói quen cũ.',
      ex:{ es:'Cuando era pequeño, vivía en Hanói.', vi:'Hồi nhỏ tôi sống ở Hà Nội.' } },
    { form:'Mở và đóng một lá thư', vi:'Thân mật: Hola… Un abrazo. Trang trọng: Estimado señor… Atentamente / Le saluda atentamente.',
      note:'«Un abrazo» nghĩa đen là một cái ôm, nhưng dùng cả với người chỉ quen biết vừa phải.',
      ex:{ es:'Atentamente, Nguyen Dinh Quan.', vi:'Trân trọng, Nguyễn Đình Quân.' } },
    { form:'Gọi điện', vi:'¿Dígame? · ¿De parte de quién? · No cuelgue, por favor. · ¿Puede repetir?',
      note:'Người Tây Ban Nha bắt máy bằng «¿Dígame?» hoặc «¿Sí?», không nói «hola» như khi gặp mặt.',
      ex:{ es:'¿Dígame? Buenos días, ¿está el señor Ruiz?', vi:'A lô? Chào anh, ông Ruiz có ở đó không ạ?' } },
    { form:'Xin nhắc lại cho rõ', vi:'¿Cómo dice? · ¿Puede hablar más despacio? · ¿Cómo se escribe?',
      note:'Ba câu quan trọng nhất của người mới học. Dùng thoải mái, không có gì đáng ngại.',
      ex:{ es:'¿Cómo se escribe su apellido, por favor?', vi:'Họ của anh viết thế nào ạ?' } }
  ],
  vocab:[
    { es:'sobre', ipa:'ˈso.βɾe', vi:'phong bì; về (chủ đề)', pos:'danh từ', g:'m', note:'Một từ ba vai: danh từ là phong bì, giới từ là «trên» và «về».' },
    { es:'sello', ipa:'ˈse.ʎo', vi:'con tem; con dấu', pos:'danh từ', g:'m' },
    { es:'correo', ipa:'ko.ˈre.o', vi:'thư; thư điện tử', pos:'danh từ', g:'m' },
    { es:'buzón', ipa:'bu.ˈθon', vi:'hòm thư', pos:'danh từ', g:'m' },
    { es:'paquete', ipa:'pa.ˈke.te', vi:'kiện hàng', pos:'danh từ', g:'m' },
    { es:'número', ipa:'ˈnu.me.ɾo', vi:'con số; cỡ giày', pos:'danh từ', g:'m' },
    { es:'mensaje', ipa:'men.ˈsa.xe', vi:'tin nhắn', pos:'danh từ', g:'m' },
    { es:'llamada', ipa:'ʎa.ˈma.ða', vi:'cuộc gọi', pos:'danh từ', g:'f' },
    { es:'respuesta', ipa:'res.ˈpwes.ta', vi:'câu trả lời', pos:'danh từ', g:'f' },
    { es:'firma', ipa:'ˈfiɾ.ma', vi:'chữ ký', pos:'danh từ', g:'f' },
    { es:'destinatario', ipa:'des.ti.na.ˈta.ɾjo', vi:'người nhận', pos:'danh từ', g:'m' },
    { es:'remitente', ipa:'re.mi.ˈten.te', vi:'người gửi', pos:'danh từ', g:'m' },
    { es:'llamar', ipa:'ʎa.ˈmaɾ', vi:'gọi điện; gọi tên', pos:'động từ', g:'' },
    { es:'contestar', ipa:'kon.tes.ˈtaɾ', vi:'trả lời', pos:'động từ', g:'' },
    { es:'mandar', ipa:'man.ˈdaɾ', vi:'gửi; ra lệnh', pos:'động từ', g:'' },
    { es:'recibir', ipa:'re.θi.ˈβiɾ', vi:'nhận', pos:'động từ', g:'' },
    { es:'firmar', ipa:'fiɾ.ˈmaɾ', vi:'ký', pos:'động từ', g:'' },
    { es:'colgar', ipa:'kol.ˈɣaɾ', vi:'cúp máy; treo lên', pos:'động từ', g:'' },
    { es:'repetir', ipa:'re.pe.ˈtiɾ', vi:'nhắc lại', pos:'động từ', g:'' },
    { es:'despacio', ipa:'des.ˈpa.θjo', vi:'chậm rãi', pos:'trạng từ', g:'' }
  ],
  colloc:[
    { p:'No cuelgue.', vi:'Xin giữ máy.', ex:'No cuelgue, ahora le paso.' },
    { p:'¿De parte de quién?', vi:'Ai đang gọi đấy ạ?', ex:'— Quería hablar con el señor Ruiz. — ¿De parte de quién?' },
    { p:'Le vuelvo a llamar.', vi:'Tôi sẽ gọi lại cho anh chị.', ex:'Estoy en una reunión, le vuelvo a llamar en una hora.' }
  ],
  dialogue:[
    { sp:'Recepción', es:'Consulta del doctor Ruiz, buenos días.', vi:'Phòng khám bác sĩ Ruiz xin nghe.' },
    { sp:'Quan', es:'Buenos días. Quería pedir cita.', vi:'Chào chị. Tôi muốn đặt lịch khám ạ.' },
    { sp:'Recepción', es:'Sí. ¿De parte de quién?', vi:'Vâng. Anh tên là gì ạ?' },
    { sp:'Quan', es:'Nguyen Dinh Quan. ¿Puede hablar un poco más despacio?', vi:'Nguyễn Đình Quân. Chị nói chậm lại giúp tôi được không ạ?' },
    { sp:'Recepción', es:'Claro. ¿Cómo se escribe su apellido?', vi:'Tất nhiên rồi. Họ của anh viết thế nào ạ?' },
    { sp:'Quan', es:'Ene, ge, u, i griega, e, ene.', vi:'N, G, U, Y, E, N.' },
    { sp:'Recepción', es:'Gracias. ¿Le viene bien el jueves a las tres?', vi:'Cảm ơn anh. Thứ Năm ba giờ chiều được không ạ?' },
    { sp:'Quan', es:'Perfecto. Muchas gracias, hasta luego.', vi:'Vâng, tốt quá ạ. Cảm ơn chị nhiều, chào chị.' }
  ] }
  ]
};

if (typeof window !== 'undefined') window.COURSE_ES = COURSE_ES;
if (typeof module !== 'undefined' && module.exports) module.exports = { COURSE_ES };
