/* ============================================================
   LangLab — BÀI ĐỌC TIẾNG TÂY BAN NHA
   ------------------------------------------------------------
   Mức A1 · A2 · B1 — đọc để nhặt từ trong ngữ cảnh, không phải để thi.
   Đẩy thêm vào mảng READINGS của js/readings.js (nạp SAU tệp đó).

   Nhân vật xuyên suốt: Quân, sinh viên Hà Nội sang Tây Ban Nha học.
   Tình huống bám đời sống thật — nhịp sinh hoạt muộn, chợ phiên, tàu xe,
   giấy tờ cư trú, quán tapas.

   Nội dung do LangLab tự biên soạn, không chép từ giáo trình nào.
   ============================================================ */
(function(){
  if (typeof READINGS === 'undefined') return;
  READINGS.push(

{ lang:'es', lv:'a1', mins:3, cat:'Đời sống', title:'El primer día', vi:'Ngày đầu tiên',
  intro:'A1. Chùm từ trọng tâm: giờ giấc, nhịp ngày ở Tây Ban Nha, động từ ser và estar.',
  text:[
    'Quân llega a Valencia un martes por la tarde. Hace calor.',
    'A las nueve de la noche las calles están llenas de gente.',
    'Él tiene hambre, pero los restaurantes abren tarde.',
    'Una vecina le dice: «Aquí se cena a las diez.» Quân sonríe y espera.'
  ],
  tr:[
    'Quân tới Valencia vào chiều một ngày thứ Ba. Trời nóng.',
    'Chín giờ tối, đường phố đông nghịt người.',
    'Cậu đói, nhưng các nhà hàng mở muộn.',
    'Một bà hàng xóm bảo: «Ở đây mười giờ mới ăn tối.» Quân mỉm cười và chờ.'
  ],
  keys:[
    { w:'llegar', r:'/ʎe.ˈɣaɾ/', vi:'đến, tới' },
    { w:'la tarde', r:'/ˈtaɾ.ðe/', vi:'buổi chiều' },
    { w:'hace calor', r:'/ˈa.θe ka.ˈloɾ/', vi:'trời nóng' },
    { w:'la calle', r:'/ˈka.ʎe/', vi:'con phố' },
    { w:'la gente', r:'/ˈxen.te/', vi:'người ta, mọi người' },
    { w:'tener hambre', r:'/te.ˈneɾ ˈam.bɾe/', vi:'đói' },
    { w:'tarde', r:'/ˈtaɾ.ðe/', vi:'muộn' },
    { w:'cenar', r:'/θe.ˈnaɾ/', vi:'ăn tối' }
  ],
  qs:[
    { q:'Quân tới vào lúc nào?', o:['Sáng thứ Hai','Chiều thứ Ba','Tối thứ Tư','Trưa Chủ nhật'], c:1, e:'llega a Valencia un martes por la tarde.' },
    { q:'Chín giờ tối, phố xá thế nào?', o:['Vắng tanh','Đông nghịt người','Đang mưa','Đã đóng cửa'], c:1, e:'las calles están llenas de gente.' },
    { q:'Ở đây người ta ăn tối lúc mấy giờ?', o:['7 giờ','8 giờ','9 giờ','10 giờ'], c:3, e:'Aquí se cena a las diez.' }
  ],
  after:'Viết 4 câu về nhịp một ngày của bạn, dùng: a las … · hace calor · tener hambre.' },

{ lang:'es', lv:'a1', mins:3, cat:'Ẩm thực', title:'En el mercado', vi:'Ở chợ',
  intro:'A1. Chùm từ trọng tâm: rau quả, số lượng, hỏi giá.',
  text:[
    'El mercado abre a las ocho. Hay naranjas, tomates y pescado fresco.',
    'Quân compra un kilo de naranjas y medio kilo de tomates.',
    '«¿Cuánto es?», pregunta. «Tres euros con veinte», responde la señora.',
    'Ella le da una naranja más. «Para probar», dice, y sonríe.'
  ],
  tr:[
    'Chợ mở cửa lúc tám giờ. Có cam, cà chua và cá tươi.',
    'Quân mua một cân cam và nửa cân cà chua.',
    '«Bao nhiêu tiền ạ?», cậu hỏi. «Ba euro hai mươi», bà đáp.',
    'Bà cho cậu thêm một quả cam. «Ăn thử đi», bà nói và cười.'
  ],
  keys:[
    { w:'el mercado', r:'/meɾ.ˈka.ðo/', vi:'chợ' },
    { w:'la naranja', r:'/na.ˈɾaŋ.xa/', vi:'quả cam' },
    { w:'el pescado', r:'/pes.ˈka.ðo/', vi:'cá (để ăn)' },
    { w:'fresco', r:'/ˈfɾes.ko/', vi:'tươi' },
    { w:'comprar', r:'/kom.ˈpɾaɾ/', vi:'mua' },
    { w:'el kilo', r:'/ˈki.lo/', vi:'cân, ki-lô' },
    { w:'¿cuánto es?', r:'/ˈkwan.to es/', vi:'bao nhiêu tiền?' },
    { w:'probar', r:'/pɾo.ˈβaɾ/', vi:'nếm thử' }
  ],
  qs:[
    { q:'Chợ mở cửa lúc mấy giờ?', o:['7 giờ','8 giờ','9 giờ','10 giờ'], c:1, e:'El mercado abre a las ocho.' },
    { q:'Quân mua bao nhiêu cà chua?', o:['Một cân','Nửa cân','Hai cân','Không mua'], c:1, e:'medio kilo de tomates.' },
    { q:'Bà bán hàng cho thêm gì?', o:['Một quả cam','Một túi nilon','Giảm giá','Không cho gì'], c:0, e:'Ella le da una naranja más.' }
  ],
  after:'Viết một đoạn hội thoại mua hàng 4 lượt, dùng: ¿cuánto es? · un kilo de · medio kilo de.' },

{ lang:'es', lv:'a1', mins:3, cat:'Học tập', title:'La clase de español', vi:'Lớp học tiếng Tây Ban Nha',
  intro:'A1. Chùm từ trọng tâm: lớp học, giới thiệu, quốc tịch, động từ ser.',
  text:[
    'En la clase hay quince estudiantes de ocho países.',
    'Quân se presenta: «Me llamo Quân. Soy vietnamita. Tengo veintiún años.»',
    'Una chica dice: «Yo soy italiana y estudio arquitectura.»',
    'La profesora escribe en la pizarra: «Bienvenidos.» Todos repiten la palabra.'
  ],
  tr:[
    'Trong lớp có mười lăm sinh viên từ tám nước.',
    'Quân tự giới thiệu: «Tôi tên là Quân. Tôi là người Việt Nam. Tôi hai mươi mốt tuổi.»',
    'Một cô gái nói: «Tôi là người Ý và tôi học kiến trúc.»',
    'Cô giáo viết lên bảng: «Chào mừng.» Cả lớp nhắc lại từ đó.'
  ],
  keys:[
    { w:'el estudiante', r:'/es.tu.ˈðjan.te/', vi:'sinh viên' },
    { w:'el país', r:'/pa.ˈis/', vi:'đất nước' },
    { w:'presentarse', r:'/pɾe.sen.ˈtaɾ.se/', vi:'tự giới thiệu' },
    { w:'vietnamita', r:'/bjet.na.ˈmi.ta/', vi:'người Việt Nam' },
    { w:'estudiar', r:'/es.tu.ˈðjaɾ/', vi:'học' },
    { w:'la pizarra', r:'/pi.ˈθa.ra/', vi:'cái bảng' },
    { w:'bienvenido', r:'/bjem.be.ˈni.ðo/', vi:'chào mừng' },
    { w:'repetir', r:'/re.pe.ˈtiɾ/', vi:'nhắc lại' }
  ],
  qs:[
    { q:'Trong lớp có bao nhiêu sinh viên?', o:['Mười','Mười hai','Mười lăm','Hai mươi'], c:2, e:'hay quince estudiantes.' },
    { q:'Quân bao nhiêu tuổi?', o:['20','21','22','23'], c:1, e:'Tengo veintiún años.' },
    { q:'Cô gái người Ý học ngành gì?', o:['Y khoa','Kiến trúc','Luật','Kinh tế'], c:1, e:'estudio arquitectura.' }
  ],
  after:'Tự giới thiệu bằng 4 câu, dùng: me llamo · soy · tengo … años · estudio.' },

{ lang:'es', lv:'a1', mins:3, cat:'Đời sống', title:'El piso de Quân', vi:'Căn hộ của Quân',
  intro:'A1. Chùm từ trọng tâm: đồ đạc, giới từ vị trí, hay và estar.',
  text:[
    'El piso es pequeño pero tiene mucha luz.',
    'Hay una cama, una mesa y dos sillas. El armario está a la derecha de la puerta.',
    'La ventana da a un patio con dos árboles.',
    'Debajo de la cama Quân guarda la maleta. No tiene muchas cosas.'
  ],
  tr:[
    'Căn hộ nhỏ nhưng rất nhiều ánh sáng.',
    'Có một cái giường, một cái bàn và hai cái ghế. Cái tủ ở bên phải cửa.',
    'Cửa sổ nhìn ra một cái sân có hai cây.',
    'Dưới gầm giường, Quân cất cái vali. Cậu không có nhiều đồ.'
  ],
  keys:[
    { w:'el piso', r:'/ˈpi.so/', vi:'căn hộ' },
    { w:'la luz', r:'/luθ/', vi:'ánh sáng' },
    { w:'la cama', r:'/ˈka.ma/', vi:'cái giường' },
    { w:'el armario', r:'/aɾ.ˈma.ɾjo/', vi:'cái tủ' },
    { w:'la puerta', r:'/ˈpweɾ.ta/', vi:'cửa ra vào' },
    { w:'el patio', r:'/ˈpa.tjo/', vi:'cái sân trong' },
    { w:'guardar', r:'/ɡwaɾ.ˈðaɾ/', vi:'cất giữ' },
    { w:'las cosas', r:'/ˈko.sas/', vi:'đồ đạc' }
  ],
  qs:[
    { q:'Cái tủ ở đâu?', o:['Bên trái cửa','Bên phải cửa','Dưới gầm giường','Cạnh cửa sổ'], c:1, e:'El armario está a la derecha de la puerta.' },
    { q:'Cửa sổ nhìn ra đâu?', o:['Ra phố','Ra một cái sân có hai cây','Ra vườn','Ra bãi xe'], c:1, e:'La ventana da a un patio con dos árboles.' },
    { q:'Quân cất vali ở đâu?', o:['Trong tủ','Dưới gầm giường','Trên nóc tủ','Ngoài hành lang'], c:1, e:'Debajo de la cama Quân guarda la maleta.' }
  ],
  after:'Tả chỗ ở của bạn bằng 4 câu, dùng: hay · está · a la derecha de · debajo de.' },

{ lang:'es', lv:'a1', mins:3, cat:'Đường phố', title:'Preguntar el camino', vi:'Hỏi đường',
  intro:'A1. Chùm từ trọng tâm: chỉ đường, mệnh lệnh thức, phương hướng.',
  text:[
    'Quân busca la estación. Pregunta a un señor mayor.',
    '«Perdone, ¿dónde está la estación, por favor?»',
    '«Siga todo recto y gire a la izquierda después de la farmacia.»',
    '«¿Está lejos?» «No, diez minutos andando.» Quân le da las gracias.'
  ],
  tr:[
    'Quân tìm nhà ga. Cậu hỏi một ông cụ.',
    '«Xin lỗi, nhà ga ở đâu ạ?»',
    '«Cứ đi thẳng rồi rẽ trái sau hiệu thuốc.»',
    '«Có xa không ạ?» «Không, mười phút đi bộ.» Quân cảm ơn ông.'
  ],
  keys:[
    { w:'la estación', r:'/es.ta.ˈθjon/', vi:'nhà ga' },
    { w:'todo recto', r:'/ˈto.ðo ˈrek.to/', vi:'đi thẳng' },
    { w:'girar', r:'/xi.ˈɾaɾ/', vi:'rẽ, quay' },
    { w:'a la izquierda', r:'/a la iθ.ˈkjeɾ.ða/', vi:'bên trái' },
    { w:'la farmacia', r:'/faɾ.ˈma.θja/', vi:'hiệu thuốc' },
    { w:'lejos', r:'/ˈle.xos/', vi:'xa' },
    { w:'andando', r:'/an.ˈdan.do/', vi:'đi bộ' },
    { w:'dar las gracias', r:'/daɾ las ˈɡɾa.θjas/', vi:'cảm ơn' }
  ],
  qs:[
    { q:'Quân hỏi ai?', o:['Một cô gái','Một ông cụ','Người bán hàng','Cảnh sát'], c:1, e:'Pregunta a un señor mayor.' },
    { q:'Phải rẽ hướng nào?', o:['Bên phải','Bên trái','Đi thẳng luôn','Quay lại'], c:1, e:'gire a la izquierda después de la farmacia.' },
    { q:'Đi bộ mất bao lâu?', o:['Năm phút','Mười phút','Mười lăm phút','Nửa tiếng'], c:1, e:'diez minutos andando.' }
  ],
  after:'Viết chỉ dẫn từ nhà bạn tới chợ, dùng: siga todo recto · gire a · después de.' },

{ lang:'es', lv:'a2', mins:4, cat:'Hành chính', title:'La cita en extranjería', vi:'Buổi hẹn ở phòng quản lý người nước ngoài',
  intro:'A2. Chùm từ trọng tâm: giấy tờ, đặt hẹn, thì quá khứ.',
  text:[
    'Quân pidió cita por internet y esperó tres semanas.',
    'El día de la cita llegó media hora antes. Ya había mucha gente.',
    'En la ventanilla le pidieron el pasaporte, una foto y el empadronamiento.',
    'Se le había olvidado el empadronamiento. Tiene que volver otro día.',
    'Al salir apuntó la lista en el móvil. Esta vez no olvidará nada.'
  ],
  tr:[
    'Quân đặt hẹn qua mạng rồi đợi ba tuần.',
    'Đến hôm hẹn, cậu tới sớm nửa tiếng. Đã có rất đông người.',
    'Ở quầy, người ta hỏi hộ chiếu, một tấm ảnh và giấy đăng ký cư trú.',
    'Cậu quên mất giấy đăng ký cư trú. Cậu phải quay lại hôm khác.',
    'Lúc ra về, cậu ghi danh sách vào điện thoại. Lần này thì sẽ không quên gì.'
  ],
  keys:[
    { w:'la cita', r:'/ˈθi.ta/', vi:'buổi hẹn' },
    { w:'la extranjería', r:'/eks.tɾan.xe.ˈɾi.a/', vi:'cơ quan quản lý người nước ngoài' },
    { w:'la ventanilla', r:'/ben.ta.ˈni.ʎa/', vi:'quầy giao dịch' },
    { w:'el pasaporte', r:'/pa.sa.ˈpoɾ.te/', vi:'hộ chiếu' },
    { w:'el empadronamiento', r:'/em.pa.ðɾo.na.ˈmjen.to/', vi:'giấy đăng ký cư trú' },
    { w:'olvidar', r:'/ol.βi.ˈðaɾ/', vi:'quên' },
    { w:'volver', r:'/bol.ˈβeɾ/', vi:'quay lại' },
    { w:'apuntar', r:'/a.pun.ˈtaɾ/', vi:'ghi lại' }
  ],
  qs:[
    { q:'Quân đợi bao lâu mới tới ngày hẹn?', o:['Một tuần','Hai tuần','Ba tuần','Một tháng'], c:2, e:'esperó tres semanas.' },
    { q:'Cậu thiếu giấy gì?', o:['Hộ chiếu','Ảnh','Giấy đăng ký cư trú','Hợp đồng thuê nhà'], c:2, e:'Se le había olvidado el empadronamiento.' },
    { q:'Cậu làm gì lúc ra về?', o:['Gọi điện','Ghi danh sách vào điện thoại','Đặt hẹn mới ngay','Về thẳng nhà'], c:1, e:'apuntó la lista en el móvil.' }
  ],
  after:'Kể một lần bạn đi làm giấy tờ, dùng: pedí cita · esperé · se me había olvidado.' },

{ lang:'es', lv:'a2', mins:4, cat:'Đời sống', title:'Buscar piso', vi:'Đi tìm căn hộ',
  intro:'A2. Chùm từ trọng tâm: thuê nhà, so sánh, mô tả.',
  text:[
    'Quân vio tres pisos en una semana.',
    'El primero era grande pero carísimo. El segundo era más barato, aunque estaba lejos del centro.',
    'El tercero es más pequeño que los otros, sin embargo tiene luz y está bien comunicado.',
    'El dueño pidió una nómina o un aval. Un compañero de clase firmó por él.',
    'Ahora Quân tiene las llaves. Coloca sus cosas y por fin respira.'
  ],
  tr:[
    'Trong một tuần, Quân xem ba căn hộ.',
    'Căn thứ nhất rộng nhưng đắt kinh khủng. Căn thứ hai rẻ hơn, tuy xa trung tâm.',
    'Căn thứ ba nhỏ hơn hai căn kia, thế nhưng sáng và đi lại thuận tiện.',
    'Chủ nhà đòi bảng lương hoặc người bảo lãnh. Một bạn cùng lớp ký thay cho cậu.',
    'Giờ thì Quân đã có chìa khoá. Cậu xếp đồ đạc và cuối cùng cũng thở phào.'
  ],
  keys:[
    { w:'el dueño', r:'/ˈdwe.ɲo/', vi:'chủ nhà' },
    { w:'barato', r:'/ba.ˈɾa.to/', vi:'rẻ' },
    { w:'caro', r:'/ˈka.ɾo/', vi:'đắt' },
    { w:'el centro', r:'/ˈθen.tɾo/', vi:'trung tâm' },
    { w:'la nómina', r:'/ˈno.mi.na/', vi:'bảng lương' },
    { w:'el aval', r:'/a.ˈβal/', vi:'người bảo lãnh' },
    { w:'firmar', r:'/fiɾ.ˈmaɾ/', vi:'ký' },
    { w:'la llave', r:'/ˈʎa.βe/', vi:'chìa khoá' }
  ],
  qs:[
    { q:'Vì sao cậu không chọn căn thứ hai?', o:['Quá đắt','Xa trung tâm','Quá tối','Chủ nhà khó tính'], c:1, e:'más barato, aunque estaba lejos del centro.' },
    { q:'Chủ nhà đòi gì?', o:['Trả trước một năm','Bảng lương hoặc người bảo lãnh','Hộ chiếu','Không đòi gì'], c:1, e:'El dueño pidió una nómina o un aval.' },
    { q:'Ai ký thay cho Quân?', o:['Cô giáo','Một bạn cùng lớp','Người hàng xóm','Không ai'], c:1, e:'Un compañero de clase firmó por él.' }
  ],
  after:'So sánh hai chỗ ở bạn từng biết, dùng: más … que · menos … que · sin embargo.' },

{ lang:'es', lv:'a2', mins:4, cat:'Đường phố', title:'El tren de las seis', vi:'Chuyến tàu sáu giờ',
  intro:'A2. Chùm từ trọng tâm: đi tàu, giờ giấc, tương lai gần.',
  text:[
    'El tren a Madrid sale a las dieciocho y cinco, vía cuatro.',
    'Quân pasa el control de equipajes y sube al vagón siete.',
    'Por megafonía anuncian diez minutos de retraso.',
    'Nadie se enfada. La gente abre un libro o cierra los ojos.',
    'Al llegar ya es de noche. La estación huele a café y a pan caliente.'
  ],
  tr:[
    'Chuyến tàu đi Madrid khởi hành lúc 18 giờ 05, đường ray số bốn.',
    'Quân qua chỗ soi hành lý rồi lên toa số bảy.',
    'Loa thông báo tàu chậm mười phút.',
    'Không ai cáu. Mọi người mở sách ra đọc hoặc nhắm mắt lại.',
    'Lúc tới nơi thì trời đã tối. Nhà ga thoảng mùi cà phê và bánh mì nóng.'
  ],
  keys:[
    { w:'el tren', r:'/tɾen/', vi:'tàu hoả' },
    { w:'salir', r:'/sa.ˈliɾ/', vi:'khởi hành, ra khỏi' },
    { w:'la vía', r:'/ˈbi.a/', vi:'đường ray' },
    { w:'el equipaje', r:'/e.ki.ˈpa.xe/', vi:'hành lý' },
    { w:'el vagón', r:'/ba.ˈɣon/', vi:'toa tàu' },
    { w:'el retraso', r:'/re.ˈtɾa.so/', vi:'sự chậm trễ' },
    { w:'enfadarse', r:'/em.fa.ˈðaɾ.se/', vi:'cáu, bực' },
    { w:'oler a', r:'/o.ˈleɾ a/', vi:'thoảng mùi' }
  ],
  qs:[
    { q:'Tàu chạy lúc mấy giờ?', o:['17 giờ 05','18 giờ 05','18 giờ 15','19 giờ 05'], c:1, e:'sale a las dieciocho y cinco.' },
    { q:'Quân lên toa số mấy?', o:['Bốn','Năm','Bảy','Mười'], c:2, e:'sube al vagón siete.' },
    { q:'Tàu chậm bao lâu?', o:['Năm phút','Mười phút','Hai mươi phút','Không chậm'], c:1, e:'anuncian diez minutos de retraso.' }
  ],
  after:'Kể một chuyến đi bằng tàu, dùng: sale a las · con retraso · al llegar.' },

{ lang:'es', lv:'a2', mins:4, cat:'Ẩm thực', title:'Una ronda de tapas', vi:'Một vòng tapas',
  intro:'A2. Chùm từ trọng tâm: gọi món, quán bar, đại từ tân ngữ.',
  text:[
    'Sus compañeros lo invitan a salir de tapas el jueves.',
    'En el primer bar piden unas bravas y una tortilla. Les traen las cañas primero.',
    'No se sientan: comen de pie, en la barra, y hablan muy alto.',
    'Después van a otro bar, y luego a un tercero. En cada uno comen una cosa distinta.',
    'Quân entiende que la cena no es un sitio, sino un recorrido.'
  ],
  tr:[
    'Các bạn cùng lớp rủ cậu đi ăn tapas vào thứ Năm.',
    'Ở quán đầu tiên họ gọi khoai tây sốt cay và trứng chiên khoai. Bia được mang ra trước.',
    'Họ không ngồi: đứng ăn ngay ở quầy, và nói rất to.',
    'Sau đó họ sang quán thứ hai, rồi quán thứ ba. Mỗi quán ăn một món khác nhau.',
    'Quân hiểu ra rằng bữa tối ở đây không phải một chỗ, mà là một hành trình.'
  ],
  keys:[
    { w:'la tapa', r:'/ˈta.pa/', vi:'món nhắm nhỏ' },
    { w:'invitar', r:'/im.bi.ˈtaɾ/', vi:'mời, rủ' },
    { w:'la caña', r:'/ˈka.ɲa/', vi:'cốc bia nhỏ' },
    { w:'la barra', r:'/ˈba.ra/', vi:'quầy bar' },
    { w:'de pie', r:'/de ˈpje/', vi:'đứng' },
    { w:'distinto', r:'/dis.ˈtin.to/', vi:'khác nhau' },
    { w:'el recorrido', r:'/re.ko.ˈri.ðo/', vi:'hành trình, chặng đi' },
    { w:'entender', r:'/en.ten.ˈdeɾ/', vi:'hiểu ra' }
  ],
  qs:[
    { q:'Họ đi ăn tapas vào thứ mấy?', o:['Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu'], c:2, e:'salir de tapas el jueves.' },
    { q:'Họ ăn như thế nào?', o:['Ngồi bàn','Đứng ở quầy','Mang về nhà','Ngồi ngoài trời'], c:1, e:'comen de pie, en la barra.' },
    { q:'Họ đi mấy quán?', o:['Một','Hai','Ba','Bốn'], c:2, e:'van a otro bar, y luego a un tercero.' }
  ],
  after:'Kể một buổi đi ăn với bạn bè, dùng: nos invitan a · pedimos · de pie.' },

{ lang:'es', lv:'a2', mins:4, cat:'Đời sống', title:'Una carta del banco', vi:'Một lá thư của ngân hàng',
  intro:'A2. Chùm từ trọng tâm: ngân hàng, thư từ hành chính, đại từ.',
  text:[
    'Llega una carta. Quân la abre despacio.',
    'El banco le pide confirmar su dirección antes de fin de mes.',
    'No conoce todas las palabras, así que busca solo las importantes.',
    'Escribe una respuesta corta, la relee dos veces y la envía.',
    'Tres días después el banco le contesta: «Expediente completo.» Quân respira.'
  ],
  tr:[
    'Một lá thư đến. Quân từ từ mở ra.',
    'Ngân hàng yêu cầu cậu xác nhận địa chỉ trước cuối tháng.',
    'Cậu không biết hết các từ, nên chỉ tra những từ quan trọng.',
    'Cậu viết một câu trả lời ngắn, đọc lại hai lần rồi gửi đi.',
    'Ba ngày sau ngân hàng trả lời: «Hồ sơ đã đủ.» Quân thở phào.'
  ],
  keys:[
    { w:'la carta', r:'/ˈkaɾ.ta/', vi:'lá thư' },
    { w:'el banco', r:'/ˈbaŋ.ko/', vi:'ngân hàng' },
    { w:'confirmar', r:'/kom.fiɾ.ˈmaɾ/', vi:'xác nhận' },
    { w:'la dirección', r:'/di.ɾek.ˈθjon/', vi:'địa chỉ' },
    { w:'la palabra', r:'/pa.ˈla.βɾa/', vi:'từ, chữ' },
    { w:'releer', r:'/re.le.ˈeɾ/', vi:'đọc lại' },
    { w:'enviar', r:'/em.ˈbjaɾ/', vi:'gửi' },
    { w:'el expediente', r:'/eks.pe.ˈðjen.te/', vi:'hồ sơ' }
  ],
  qs:[
    { q:'Ngân hàng yêu cầu gì?', o:['Nộp thêm tiền','Xác nhận địa chỉ','Đổi mật khẩu','Tới trực tiếp'], c:1, e:'le pide confirmar su dirección.' },
    { q:'Cậu đọc lại thư mấy lần?', o:['Một lần','Hai lần','Ba lần','Không đọc lại'], c:1, e:'la relee dos veces.' },
    { q:'Bao lâu sau thì ngân hàng trả lời?', o:['Một ngày','Ba ngày','Một tuần','Một tháng'], c:1, e:'Tres días después el banco le contesta.' }
  ],
  after:'Viết một thư trả lời ngắn 4 câu, dùng: confirmo · antes de · le saluda atentamente.' }
,

{ lang:'es', lv:'a2', mins:4, cat:'Văn hoá', title:'El domingo en el barrio', vi:'Chủ nhật trong khu phố',
  intro:'A2. Chùm từ trọng tâm: ngày nghỉ, nhịp khu phố, thì quá khứ chưa hoàn thành.',
  text:[
    'Los domingos casi todo está cerrado. Quân lo aprendió el primer fin de semana.',
    'Antes compraba a cualquier hora. Ahora piensa en el sábado por la tarde.',
    'La gente camina despacio, se para y habla en medio de la acera.',
    'En la plaza, unos niños juegan al fútbol y unos abuelos miran sin decir nada.',
    'Quân se sienta en un banco y no hace nada. Le cuesta más de lo que creía.'
  ],
  tr:[
    'Chủ nhật thì gần như mọi thứ đóng cửa. Quân học được điều đó ngay cuối tuần đầu tiên.',
    'Trước đây cậu mua sắm lúc nào cũng được. Bây giờ phải nhớ tới chiều thứ Bảy.',
    'Người ta đi chậm rãi, dừng lại, đứng nói chuyện giữa vỉa hè.',
    'Ngoài quảng trường, mấy đứa trẻ đá bóng còn mấy ông cụ ngồi nhìn chẳng nói gì.',
    'Quân ngồi xuống ghế đá và không làm gì cả. Việc đó khó hơn cậu tưởng.'
  ],
  keys:[
    { w:'el domingo', r:'/do.ˈmiŋ.ɡo/', vi:'Chủ nhật' },
    { w:'cerrado', r:'/θe.ˈra.ðo/', vi:'đóng cửa' },
    { w:'el fin de semana', r:'/fin de se.ˈma.na/', vi:'cuối tuần' },
    { w:'la acera', r:'/a.ˈθe.ɾa/', vi:'vỉa hè' },
    { w:'la plaza', r:'/ˈpla.θa/', vi:'quảng trường' },
    { w:'el banco', r:'/ˈbaŋ.ko/', vi:'ghế đá; ngân hàng' },
    { w:'despacio', r:'/des.ˈpa.θjo/', vi:'chậm rãi' },
    { w:'costar', r:'/kos.ˈtaɾ/', vi:'khó, tốn công' }
  ],
  qs:[
    { q:'Chủ nhật thì thế nào?', o:['Mọi thứ mở cửa','Gần như mọi thứ đóng cửa','Chỉ chợ mở','Đường vắng người'], c:1, e:'Los domingos casi todo está cerrado.' },
    { q:'Giờ Quân phải mua sắm khi nào?', o:['Sáng Chủ nhật','Chiều thứ Bảy','Tối thứ Sáu','Lúc nào cũng được'], c:1, e:'Ahora piensa en el sábado por la tarde.' },
    { q:'Điều gì khó hơn cậu tưởng?', o:['Nói tiếng Tây Ban Nha','Không làm gì cả','Tìm quảng trường','Đá bóng'], c:1, e:'no hace nada. Le cuesta más de lo que creía.' }
  ],
  after:'Tả một ngày nghỉ của bạn bằng 5 câu, dùng: antes … ahora · se para · le cuesta.' },

{ lang:'es', lv:'a2', mins:4, cat:'Đời sống', title:'En el centro de salud', vi:'Ở trạm y tế',
  intro:'A2. Chùm từ trọng tâm: triệu chứng, đơn thuốc, thẻ y tế.',
  text:[
    'A Quân le duele la garganta desde hace tres días. Pide cita por teléfono.',
    'La médica lo escucha, le mira la garganta y le toma la temperatura.',
    '«No es grave. Bebe mucha agua y descansa.»',
    'Le receta dos medicamentos y le da la baja por dos días.',
    'En la farmacia le explican cómo tomarlos. Él lo apunta todo.'
  ],
  tr:[
    'Quân đau họng đã ba ngày. Cậu gọi điện đặt lịch khám.',
    'Bác sĩ nghe cậu kể, soi họng và đo nhiệt độ.',
    '«Không nặng đâu. Uống nhiều nước và nghỉ ngơi đi.»',
    'Bác sĩ kê hai loại thuốc và cho cậu nghỉ hai ngày.',
    'Ở hiệu thuốc, người ta giải thích cách uống. Cậu ghi lại hết.'
  ],
  keys:[
    { w:'doler', r:'/do.ˈleɾ/', vi:'đau' },
    { w:'la garganta', r:'/ɡaɾ.ˈɣan.ta/', vi:'cổ họng' },
    { w:'la cita', r:'/ˈθi.ta/', vi:'lịch hẹn khám' },
    { w:'el médico', r:'/ˈme.ði.ko/', vi:'bác sĩ' },
    { w:'grave', r:'/ˈɡɾa.βe/', vi:'nặng' },
    { w:'descansar', r:'/des.kan.ˈsaɾ/', vi:'nghỉ ngơi' },
    { w:'recetar', r:'/re.θe.ˈtaɾ/', vi:'kê đơn' },
    { w:'la baja', r:'/ˈba.xa/', vi:'giấy nghỉ ốm' }
  ],
  qs:[
    { q:'Quân bị làm sao?', o:['Đau đầu','Đau họng','Đau bụng','Gãy tay'], c:1, e:'A Quân le duele la garganta.' },
    { q:'Bác sĩ khuyên gì?', o:['Đi bệnh viện','Uống nhiều nước và nghỉ ngơi','Tập thể dục','Đổi chỗ ở'], c:1, e:'Bebe mucha agua y descansa.' },
    { q:'Cậu được nghỉ mấy ngày?', o:['Một','Hai','Ba','Bốn'], c:1, e:'le da la baja por dos días.' }
  ],
  after:'Kể một lần bạn đi khám, dùng: me duele · desde hace · el médico me dijo que.' },

{ lang:'es', lv:'b1', mins:5, cat:'Học tập', title:'La primera exposición', vi:'Buổi thuyết trình đầu tiên',
  intro:'B1. Chùm từ trọng tâm: nói trước lớp, chuẩn bị, xử lý câu hỏi bất ngờ.',
  text:[
    'Quân tiene que exponer diez minutos delante de veinte personas.',
    'La víspera ensaya tres veces en voz alta, solo en su cuarto.',
    'El día llega. Al principio le tiembla la voz, luego se estabiliza.',
    'Había preparado demasiado texto, así que se salta dos diapositivas y nadie se da cuenta.',
    'Al final, una compañera le hace una pregunta que no había previsto.',
    'Él responde con sinceridad: «No lo sé, pero lo voy a mirar.» La profesora asiente.'
  ],
  tr:[
    'Quân phải trình bày mười phút trước hai mươi người.',
    'Tối hôm trước cậu tập ba lần thành tiếng, một mình trong phòng.',
    'Đến hôm đó. Lúc đầu giọng cậu run, rồi vững dần.',
    'Cậu soạn quá nhiều chữ, nên bỏ qua hai trang chiếu mà chẳng ai nhận ra.',
    'Cuối buổi, một bạn nữ đặt một câu hỏi cậu không lường trước.',
    'Cậu trả lời thật lòng: «Tôi chưa biết, nhưng tôi sẽ tìm hiểu.» Cô giáo gật đầu.'
  ],
  keys:[
    { w:'exponer', r:'/eks.po.ˈneɾ/', vi:'trình bày' },
    { w:'la víspera', r:'/ˈbis.pe.ɾa/', vi:'hôm trước' },
    { w:'ensayar', r:'/en.sa.ˈʝaɾ/', vi:'tập dượt' },
    { w:'en voz alta', r:'/en boθ ˈal.ta/', vi:'thành tiếng' },
    { w:'temblar', r:'/tem.ˈblaɾ/', vi:'run' },
    { w:'saltarse', r:'/sal.ˈtaɾ.se/', vi:'bỏ qua' },
    { w:'prever', r:'/pɾe.ˈβeɾ/', vi:'lường trước' },
    { w:'asentir', r:'/a.sen.ˈtiɾ/', vi:'gật đầu tán thành' }
  ],
  qs:[
    { q:'Buổi trình bày dài bao lâu?', o:['Năm phút','Mười phút','Hai mươi phút','Nửa tiếng'], c:1, e:'exponer diez minutos.' },
    { q:'Vì sao cậu bỏ qua hai trang chiếu?', o:['Máy hỏng','Soạn quá nhiều chữ','Hết giờ','Quên mất'], c:1, e:'Había preparado demasiado texto.' },
    { q:'Cậu xử lý câu hỏi bất ngờ ra sao?', o:['Nói bừa','Thừa nhận chưa biết và hứa tìm hiểu','Không trả lời','Hỏi lại cô giáo'], c:1, e:'No lo sé, pero lo voy a mirar.' }
  ],
  after:'Viết 5 câu về một lần bạn nói trước đám đông, dùng: la víspera · al principio · al final.' },

{ lang:'es', lv:'b1', mins:5, cat:'Văn hoá', title:'Hablar todos a la vez', vi:'Cả nhà nói cùng một lúc',
  intro:'B1. Chùm từ trọng tâm: trò chuyện, âm lượng, hiểu lầm về văn hoá.',
  text:[
    'La primera vez que cenó en casa de un amigo, Quân pensó que discutían.',
    'Seis personas hablaban a la vez y nadie parecía escuchar.',
    'Pero se reían, se interrumpían y seguían comiendo tranquilamente.',
    'Después entendió que interrumpir, allí, significa que te interesa lo que dicen.',
    'El silencio, en cambio, puede parecer frialdad o enfado.',
    'Aquella noche habló más alto que nunca, y por primera vez no se sintió invitado sino parte de la mesa.'
  ],
  tr:[
    'Lần đầu ăn tối ở nhà một người bạn, Quân tưởng họ đang cãi nhau.',
    'Sáu người nói cùng lúc và chẳng ai có vẻ đang nghe.',
    'Nhưng họ cười, cắt lời nhau, rồi vẫn ăn uống bình thản.',
    'Sau đó cậu hiểu rằng cắt lời, ở đây, nghĩa là bạn quan tâm tới điều người kia nói.',
    'Ngược lại, im lặng có thể bị hiểu là lạnh nhạt hoặc đang giận.',
    'Tối hôm ấy cậu nói to hơn bao giờ hết, và lần đầu tiên cậu không thấy mình là khách mà là một phần của bàn ăn.'
  ],
  keys:[
    { w:'discutir', r:'/dis.ku.ˈtiɾ/', vi:'cãi nhau, tranh luận' },
    { w:'a la vez', r:'/a la ˈbeθ/', vi:'cùng một lúc' },
    { w:'interrumpir', r:'/in.te.rum.ˈpiɾ/', vi:'cắt lời' },
    { w:'tranquilamente', r:'/tɾaŋ.ki.la.ˈmen.te/', vi:'bình thản' },
    { w:'el silencio', r:'/si.ˈlen.θjo/', vi:'sự im lặng' },
    { w:'la frialdad', r:'/fɾjal.ˈdað/', vi:'sự lạnh nhạt' },
    { w:'el enfado', r:'/em.ˈfa.ðo/', vi:'sự bực bội' },
    { w:'sentirse', r:'/sen.ˈtiɾ.se/', vi:'cảm thấy' }
  ],
  qs:[
    { q:'Lần đầu Quân nghĩ gì?', o:['Họ đang vui','Họ đang cãi nhau','Họ đang bàn công việc','Họ đang hát'], c:1, e:'Quân pensó que discutían.' },
    { q:'Cắt lời ở đó có nghĩa gì?', o:['Bất lịch sự','Bạn quan tâm tới điều người kia nói','Bạn muốn về','Bạn không hiểu'], c:1, e:'interrumpir, allí, significa que te interesa lo que dicen.' },
    { q:'Im lặng có thể bị hiểu là gì?', o:['Lịch sự','Lạnh nhạt hoặc đang giận','Đồng ý','Mệt'], c:1, e:'puede parecer frialdad o enfado.' }
  ],
  after:'Viết 5 câu về một hiểu lầm văn hoá bạn từng gặp, dùng: al principio pensé que · después entendí que.' },

{ lang:'es', lv:'b1', mins:5, cat:'Đời sống', title:'El trabajo de los sábados', vi:'Công việc ngày thứ Bảy',
  intro:'B1. Chùm từ trọng tâm: làm thêm, khách hàng, tiến bộ ngoài lớp học.',
  text:[
    'Quân trabaja doce horas a la semana en una librería del centro.',
    'Coloca los libros, cobra y atiende a quien busca un título.',
    'El primer mes fue duro: confundía las secciones y hablaba demasiado despacio.',
    'Ahora se sabe la tienda de memoria e incluso recomienda novelas.',
    'El sueldo cubre el alquiler y parte de la compra.',
    'Lo que más le sorprende es que su español ha mejorado más aquí que en clase.'
  ],
  tr:[
    'Quân làm mười hai tiếng một tuần ở một hiệu sách trong trung tâm.',
    'Cậu xếp sách, thu tiền và tiếp những người tìm một đầu sách.',
    'Tháng đầu rất vất vả: cậu lẫn các khu sách và nói quá chậm.',
    'Bây giờ cậu thuộc lòng cửa hàng, thậm chí còn gợi ý được tiểu thuyết.',
    'Lương đủ trả tiền nhà và một phần tiền chợ.',
    'Điều làm cậu ngạc nhiên nhất là tiếng Tây Ban Nha tiến bộ ở đây nhanh hơn trên lớp.'
  ],
  keys:[
    { w:'la librería', r:'/li.βɾe.ˈɾi.a/', vi:'hiệu sách' },
    { w:'colocar', r:'/ko.lo.ˈkaɾ/', vi:'xếp, đặt' },
    { w:'cobrar', r:'/ko.ˈβɾaɾ/', vi:'thu tiền' },
    { w:'atender', r:'/a.ten.ˈdeɾ/', vi:'tiếp khách' },
    { w:'confundir', r:'/kom.fun.ˈdiɾ/', vi:'lẫn lộn' },
    { w:'de memoria', r:'/de me.ˈmo.ɾja/', vi:'thuộc lòng' },
    { w:'el sueldo', r:'/ˈswel.do/', vi:'lương' },
    { w:'mejorar', r:'/me.xo.ˈɾaɾ/', vi:'tiến bộ, cải thiện' }
  ],
  qs:[
    { q:'Quân làm bao nhiêu tiếng mỗi tuần?', o:['Mười','Mười hai','Mười lăm','Hai mươi'], c:1, e:'doce horas a la semana.' },
    { q:'Tháng đầu khó ở chỗ nào?', o:['Lương thấp','Lẫn các khu sách và nói quá chậm','Đồng nghiệp khó tính','Đi lại xa'], c:1, e:'confundía las secciones y hablaba demasiado despacio.' },
    { q:'Điều gì làm cậu ngạc nhiên nhất?', o:['Lương cao','Tiếng Tây Ban Nha tiến bộ nhanh hơn ở lớp','Khách rất đông','Sách rất rẻ'], c:1, e:'su español ha mejorado más aquí que en clase.' }
  ],
  after:'Kể một công việc bạn từng làm, dùng: trabajaba · al principio · ahora.' },

{ lang:'es', lv:'b1', mins:5, cat:'Thiên nhiên', title:'Tres días en la sierra', vi:'Ba ngày trên núi',
  intro:'B1. Chùm từ trọng tâm: đi bộ đường dài, thời tiết đổi, quyết định quay về.',
  text:[
    'Salieron a las seis con la mochila al hombro, para tres días de marcha.',
    'El primer día el cielo estaba despejado y el camino era fácil.',
    'El segundo, la niebla bajó en veinte minutos. Ya no se veía el sendero.',
    'El guía decidió volver. Nadie discutió.',
    'Por la noche, en el refugio, alguien dijo: «En la montaña, saber renunciar también es saber.»',
    'Quân apuntó la frase. Le sirvió mucho después, lejos de cualquier montaña.'
  ],
  tr:[
    'Họ khởi hành lúc sáu giờ, ba lô trên vai, cho ba ngày đi bộ.',
    'Ngày đầu trời quang và đường dễ đi.',
    'Ngày thứ hai, sương mù ập xuống trong hai mươi phút. Không còn nhìn thấy lối mòn nữa.',
    'Người dẫn đường quyết định quay về. Không ai bàn cãi.',
    'Tối đó, ở nhà nghỉ trên núi, có người nói: «Trên núi, biết từ bỏ cũng là một thứ hiểu biết.»',
    'Quân ghi lại câu ấy. Nó có ích cho cậu rất lâu sau này, ở nơi chẳng còn núi non nào.'
  ],
  keys:[
    { w:'la sierra', r:'/ˈsje.ra/', vi:'dãy núi' },
    { w:'la mochila', r:'/mo.ˈtʃi.la/', vi:'ba lô' },
    { w:'despejado', r:'/des.pe.ˈxa.ðo/', vi:'quang đãng' },
    { w:'la niebla', r:'/ˈnje.βla/', vi:'sương mù' },
    { w:'el sendero', r:'/sen.ˈde.ɾo/', vi:'lối mòn' },
    { w:'el guía', r:'/ˈɡi.a/', vi:'người dẫn đường' },
    { w:'el refugio', r:'/re.ˈfu.xjo/', vi:'nhà nghỉ trên núi' },
    { w:'renunciar', r:'/re.nun.ˈθjaɾ/', vi:'từ bỏ' }
  ],
  qs:[
    { q:'Họ dự tính đi mấy ngày?', o:['Hai','Ba','Bốn','Năm'], c:1, e:'para tres días de marcha.' },
    { q:'Chuyện gì xảy ra ngày thứ hai?', o:['Mưa to','Sương mù ập xuống','Có người ngã','Hết nước'], c:1, e:'la niebla bajó en veinte minutos.' },
    { q:'Người dẫn đường quyết định gì?', o:['Đi tiếp','Quay về','Dựng trại','Gọi cứu hộ'], c:1, e:'El guía decidió volver.' }
  ],
  after:'Kể một lần bạn phải bỏ dở kế hoạch, dùng: salimos · luego · al final.' },

{ lang:'es', lv:'b1', mins:5, cat:'Văn hoá', title:'Las palabras que no se traducen', vi:'Những từ không dịch được',
  intro:'B1. Chùm từ trọng tâm: ngôn ngữ và văn hoá, sắc thái, dấu mốc tiến bộ.',
  text:[
    'Al principio Quân traducía cada frase en la cabeza.',
    'Luego se topó con palabras que se resistían: «vale», «venga», «hombre».',
    'Ninguna traducción funcionaba del todo. Había que adivinarlas por el uso.',
    'Un día dijo «venga» sin pensarlo, y sus amigos se rieron de la sorpresa.',
    'Ese día sintió que había dejado de traducir.',
    'El idioma ya no era un muro; se había vuelto una habitación donde podía sentarse.'
  ],
  tr:[
    'Lúc đầu Quân dịch từng câu trong đầu.',
    'Rồi cậu vấp phải những từ cứng đầu: «vale», «venga», «hombre».',
    'Không bản dịch nào thật sự ổn. Phải đoán qua cách người ta dùng.',
    'Một hôm cậu buột miệng nói «venga», và đám bạn bật cười vì bất ngờ.',
    'Hôm ấy cậu cảm thấy mình đã thôi dịch.',
    'Ngôn ngữ không còn là bức tường nữa; nó đã thành một căn phòng cậu ngồi được vào.'
  ],
  keys:[
    { w:'traducir', r:'/tɾa.ðu.ˈθiɾ/', vi:'dịch' },
    { w:'la cabeza', r:'/ka.ˈβe.θa/', vi:'cái đầu' },
    { w:'toparse con', r:'/to.ˈpaɾ.se kon/', vi:'vấp phải, gặp phải' },
    { w:'resistirse', r:'/re.sis.ˈtiɾ.se/', vi:'cưỡng lại, cứng đầu' },
    { w:'adivinar', r:'/a.ði.βi.ˈnaɾ/', vi:'đoán' },
    { w:'el uso', r:'/ˈu.so/', vi:'cách dùng' },
    { w:'dejar de', r:'/de.ˈxaɾ de/', vi:'thôi không làm gì nữa' },
    { w:'el muro', r:'/ˈmu.ɾo/', vi:'bức tường' }
  ],
  qs:[
    { q:'Lúc đầu Quân làm gì khi nghe?', o:['Ghi chép','Dịch từng câu trong đầu','Hỏi lại','Im lặng'], c:1, e:'Quân traducía cada frase en la cabeza.' },
    { q:'Vì sao ba từ kia khó?', o:['Phát âm khó','Không bản dịch nào thật sự ổn','Ít người dùng','Chỉ có trong sách'], c:1, e:'Ninguna traducción funcionaba del todo.' },
    { q:'Dấu hiệu nào cho thấy cậu tiến bộ?', o:['Điểm thi cao','Buột miệng nói «venga» mà không nghĩ','Đọc nhanh hơn','Viết dài hơn'], c:1, e:'dijo «venga» sin pensarlo.' }
  ],
  after:'Kể ba từ tiếng Việt bạn thấy khó dịch, mỗi từ giải thích bằng một câu tiếng Tây Ban Nha.' },

{ lang:'es', lv:'a2', mins:4, cat:'Đời sống', title:'El paquete', vi:'Kiện hàng',
  intro:'A2. Chùm từ trọng tâm: bưu điện, nhận hàng, thời gian chờ.',
  text:[
    'La familia de Quân le mandó un paquete desde Hanói. Salió hace un mes.',
    'La web dijo «en tránsito» durante dos semanas y luego nada más.',
    'Quân va a Correos con el aviso y el carné de identidad.',
    'El empleado busca, desaparece cinco minutos y vuelve con una caja abollada.',
    'Dentro hay té, fotos y una carta de su madre. No se ha roto nada.'
  ],
  tr:[
    'Gia đình Quân gửi cho cậu một kiện hàng từ Hà Nội. Nó rời đi cách đây một tháng.',
    'Trang tra cứu báo «đang vận chuyển» suốt hai tuần rồi im bặt.',
    'Quân ra bưu điện với giấy báo và thẻ căn cước.',
    'Nhân viên tìm, biến mất năm phút, rồi quay ra với một cái hộp móp.',
    'Bên trong có trà, mấy tấm ảnh và một lá thư của mẹ. Không có gì vỡ.'
  ],
  keys:[
    { w:'el paquete', r:'/pa.ˈke.te/', vi:'kiện hàng' },
    { w:'mandar', r:'/man.ˈdaɾ/', vi:'gửi' },
    { w:'Correos', r:'/ko.ˈre.os/', vi:'bưu điện' },
    { w:'el aviso', r:'/a.ˈβi.so/', vi:'giấy báo' },
    { w:'el carné de identidad', r:'/kaɾ.ˈne de i.ðen.ti.ˈðað/', vi:'thẻ căn cước' },
    { w:'la caja', r:'/ˈka.xa/', vi:'cái hộp' },
    { w:'romperse', r:'/rom.ˈpeɾ.se/', vi:'vỡ' },
    { w:'hace un mes', r:'/ˈa.θe un mes/', vi:'cách đây một tháng' }
  ],
  qs:[
    { q:'Kiện hàng gửi đi từ bao giờ?', o:['Một tuần trước','Hai tuần trước','Một tháng trước','Hai tháng trước'], c:2, e:'Salió hace un mes.' },
    { q:'Quân mang theo những gì?', o:['Hộ chiếu','Giấy báo và thẻ căn cước','Chỉ điện thoại','Không mang gì'], c:1, e:'con el aviso y el carné de identidad.' },
    { q:'Trong hộp có gì?', o:['Quần áo','Trà, ảnh và một lá thư','Sách','Thuốc'], c:1, e:'Dentro hay té, fotos y una carta de su madre.' }
  ],
  after:'Kể một lần bạn chờ một kiện hàng, dùng: hace … · durante · por fin.' },

{ lang:'es', lv:'a2', mins:4, cat:'Đường phố', title:'Una multa en el metro', vi:'Một vé phạt dưới tàu điện ngầm',
  intro:'A2. Chùm từ trọng tâm: giao thông công cộng, quy định, hậu quả.',
  text:[
    'Quân entró en el metro con prisa y pasó detrás de otra persona.',
    'Dos revisores lo pararon en el andén siguiente.',
    'Él explicó, buscando las palabras, que tenía abono pero se lo había dejado en casa.',
    'Un revisor contestó: «Sin abono, no puedo hacer nada.»',
    'La multa fue de cincuenta euros. Desde entonces, Quân lleva el abono en el bolsillo del abrigo.'
  ],
  tr:[
    'Quân vội vàng vào ga tàu điện ngầm và lách qua ngay sau lưng một người khác.',
    'Hai nhân viên kiểm soát chặn cậu lại ở sân ga tiếp theo.',
    'Cậu giải thích, chật vật tìm từ, rằng cậu có thẻ tháng nhưng để quên ở nhà.',
    'Một người đáp: «Không có thẻ thì tôi chẳng làm gì được.»',
    'Tiền phạt là năm mươi euro. Từ đó, Quân luôn để thẻ trong túi áo khoác.'
  ],
  keys:[
    { w:'la multa', r:'/ˈmul.ta/', vi:'tiền phạt' },
    { w:'con prisa', r:'/kom ˈpɾi.sa/', vi:'vội vàng' },
    { w:'el revisor', r:'/re.βi.ˈsoɾ/', vi:'nhân viên kiểm soát' },
    { w:'el andén', r:'/an.ˈden/', vi:'sân ga' },
    { w:'el abono', r:'/a.ˈβo.no/', vi:'thẻ đi lại tháng' },
    { w:'dejarse', r:'/de.ˈxaɾ.se/', vi:'để quên' },
    { w:'desde entonces', r:'/ˈdez.ðe en.ˈton.θes/', vi:'từ đó' },
    { w:'el bolsillo', r:'/bol.ˈsi.ʎo/', vi:'túi áo' }
  ],
  qs:[
    { q:'Quân sai ở chỗ nào?', o:['Không có thẻ','Có thẻ nhưng để quên ở nhà','Lên nhầm tàu','Đi quá bến'], c:1, e:'tenía abono pero se lo había dejado en casa.' },
    { q:'Nhân viên kiểm soát nói gì?', o:['Lần này bỏ qua','Không có thẻ thì không làm gì được','Phải xuống tàu','Mua thẻ mới ngay'], c:1, e:'Sin abono, no puedo hacer nada.' },
    { q:'Từ đó cậu làm gì?', o:['Đi bộ','Luôn để thẻ trong túi áo khoác','Mua vé lẻ','Không đi tàu nữa'], c:1, e:'lleva el abono en el bolsillo del abrigo.' }
  ],
  after:'Kể một lần bạn bị phạt hoặc bị nhắc nhở, dùng: tenía · me lo había dejado · desde entonces.' },

{ lang:'es', lv:'b1', mins:5, cat:'Đời sống', title:'Un año después', vi:'Một năm sau',
  intro:'B1. Chùm từ trọng tâm: nhìn lại, so sánh trước và nay, thì quá khứ chưa hoàn thành.',
  text:[
    'Hace un año Quân contaba los días. Ahora ya no los cuenta.',
    'Antes preparaba cada frase antes de hablar. Hoy habla primero y se corrige después.',
    'Sabe el nombre de la panadera, el día del mercado y la hora del último metro.',
    'También sabe lo que le falta: una mesa donde diez personas comen demasiado y hablan a la vez.',
    'Su madre le pregunta por teléfono si vuelve pronto. Él responde: «Pronto.»',
    'Luego cuelga y abre el cuaderno. Mañana tiene una exposición que preparar.'
  ],
  tr:[
    'Một năm trước Quân đếm từng ngày. Bây giờ cậu không đếm nữa.',
    'Trước đây cậu chuẩn bị sẵn từng câu rồi mới nói. Hôm nay cậu nói trước rồi sửa sau.',
    'Cậu biết tên bà bán bánh, biết ngày họp chợ, biết giờ chuyến tàu điện ngầm cuối.',
    'Cậu cũng biết mình thiếu gì: một cái bàn có mười người ăn quá nhiều và nói cùng lúc.',
    'Mẹ cậu hỏi qua điện thoại bao giờ về. Cậu đáp: «Sắp thôi ạ.»',
    'Rồi cậu cúp máy và mở vở ra. Ngày mai có một buổi thuyết trình phải chuẩn bị.'
  ],
  keys:[
    { w:'contar', r:'/kon.ˈtaɾ/', vi:'đếm; kể' },
    { w:'corregirse', r:'/ko.re.ˈxiɾ.se/', vi:'tự sửa' },
    { w:'la panadera', r:'/pa.na.ˈðe.ɾa/', vi:'bà bán bánh mì' },
    { w:'faltar', r:'/fal.ˈtaɾ/', vi:'thiếu' },
    { w:'a la vez', r:'/a la ˈbeθ/', vi:'cùng lúc' },
    { w:'volver', r:'/bol.ˈβeɾ/', vi:'về, quay lại' },
    { w:'colgar', r:'/kol.ˈɣaɾ/', vi:'cúp máy; treo' },
    { w:'el cuaderno', r:'/kwa.ˈðeɾ.no/', vi:'quyển vở' }
  ],
  qs:[
    { q:'Một năm trước Quân làm gì?', o:['Đếm từng ngày','Không nói tiếng Tây Ban Nha','Không đi học','Ở nhà suốt'], c:0, e:'Hace un año Quân contaba los días.' },
    { q:'Cách nói của cậu thay đổi ra sao?', o:['Nói chậm hơn','Nói trước rồi sửa sau','Ít nói hơn','Chỉ viết'], c:1, e:'habla primero y se corrige después.' },
    { q:'Cậu thiếu điều gì?', o:['Tiền','Một bàn ăn đông người nói cùng lúc','Bạn bè','Thời gian'], c:1, e:'una mesa donde diez personas comen demasiado y hablan a la vez.' }
  ],
  after:'Viết 5 câu so sánh bạn của một năm trước với bây giờ, dùng: antes · ahora · ya no.' }
  );
})();
