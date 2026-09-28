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

  ]
};

if (typeof window !== 'undefined') window.COURSE_ES = COURSE_ES;
if (typeof module !== 'undefined' && module.exports) module.exports = { COURSE_ES };
