/* ============================================================
   LangLab — NGHE & CHỌN TRANH · TIẾNG TÂY BAN NHA
   ------------------------------------------------------------
   Do LangLab tự soạn. Tranh ghép từ js/scene-svg.js, không dùng ảnh
   của bên thứ ba và không dùng ảnh do AI sinh.

   BẪY NGHE ĐANG DÙNG (mỗi câu ít nhất hai kiểu khác nhau):
     · SER với ESTAR — hai động từ «là». ser cho bản chất, estar cho
       trạng thái và vị trí. Đây là bẫy nặng nhất của tiếng Tây Ban Nha.
     · GIỐNG của danh từ: el libro · la mesa · el agua (giống đực dù
       đi với la) · el problema (đực dù kết thúc bằng -a).
     · số nhiều CÓ phát âm: la mesa / las mesas — khác tiếng Pháp, ở
       đây chữ -s cuối nghe rõ, nên bẫy chuyển sang chỗ khác.
     · hay / no hay — có và không có. hay không đổi theo số.
     · giới từ: en · sobre · debajo de · delante de · detrás de ·
       al lado de · entre · junto a.
     · thời: come (hiện tại) · está comiendo (đang) · ha comido
       (đã, hiện tại hoàn thành) · va a comer (sắp).
     · por với para — hai từ đều dịch là «cho, vì», nhưng khác nghĩa.
     · số dễ lẫn: dos/doce · tres/trece · cuatro/catorce ·
       cinco/quince · seis/dieciséis.
     · r đơn với rr: caro (đắt) / carro (xe) · pero (nhưng) / perro (con chó).
     · muy với mucho.

   LƯU Ý khi soạn thêm: ở Tây Ban Nha c và z đọc như «th» tiếng Anh,
   ở Mỹ Latinh đọc là «s». Giọng dùng trong app là es-ES, nên KHÔNG
   lấy cặp casa/caza làm bẫy — người học theo lối Mỹ Latinh sẽ nghe
   hai từ đó y hệt nhau.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ========== SER VỚI ESTAR ========== */
{ id:'es-01', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'book', x:180, y:158 },
    { p:'chair', x:300, y:220 }
  ]},
  alt:'Một quyển sách nằm trên mặt bàn, bên phải có một cái ghế.',
  opts:[
    { t:'El libro está sobre la mesa.', ok:true },
    { t:'El libro es sobre la mesa.', why:'Vị trí thì luôn dùng ESTAR, không dùng ser. «es sobre la mesa» là sai ngữ pháp.', trap:'ser / estar' },
    { t:'El libro está debajo de la mesa.', why:'debajo de là ở dưới. Quyển sách nằm TRÊN mặt bàn.', trap:'trên / dưới' },
    { t:'El libro está sobre la silla.', why:'Cái ghế có thật trong tranh, nhưng quyển sách không nằm ở đó.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'el libro', r:'li.βɾo', vi:'quyển sách' }, { w:'la mesa', r:'me.sa', vi:'cái bàn' },
    { w:'sobre', r:'so.βɾe', vi:'trên' }, { w:'debajo de', r:'de.βa.xo ðe', vi:'dưới' }
  ],
  gram:[{ p:'ser hay estar cho vị trí?', vi:'Vị trí của một vật hay một người thì LUÔN dùng estar: el libro está aquí, Madrid está en España. ser chỉ dùng cho bản chất, nghề nghiệp, quốc tịch, vật liệu.',
    ex:['Mi casa está lejos. Mi casa es grande.', 'Nhà tôi ở xa. Nhà tôi thì rộng.'] }] },

{ id:'es-02', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:170, y:220, w:120 }, { p:'person', x:170, y:214, pose:'sit' },
    { p:'tv', x:320, y:220 }
  ]},
  alt:'Một người ngồi trên ghế sofa, bên phải là cái tivi.',
  opts:[
    { t:'Está sentada en el sofá.', ok:true },
    { t:'Es sentada en el sofá.', why:'Tư thế là trạng thái tạm thời, phải dùng estar.', trap:'ser / estar' },
    { t:'Está de pie delante del sofá.', why:'de pie là đứng. Trong tranh người này đang ngồi.', trap:'ngồi / đứng' },
    { t:'Está sentado en el sofá.', why:'sentado là giống đực, sentada là giống cái. Nhân vật trong tranh có tóc dài.', trap:'hợp giống' }
  ],
  keys:[
    { w:'sentado / sentada', r:'sen.ta.ðo', vi:'đang ngồi' },
    { w:'de pie', r:'de pje', vi:'đứng' }, { w:'el sofá', r:'so.fa', vi:'ghế sofa' },
    { w:'delante de', r:'de.lan.te ðe', vi:'phía trước' }
  ],
  gram:[{ p:'estar + tính từ hợp giống', vi:'Tính từ sau estar phải hợp giống và số với chủ ngữ: está sentado, está sentada, están sentados. Chữ -o và -a ở cuối nghe rất rõ, khác tiếng Pháp.',
    ex:['Ellas están sentadas.', 'Các cô ấy đang ngồi.'] }] },

{ id:'es-03', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:50, y:34, view:'rain' },
    { p:'table', x:200, y:220, w:130 }, { p:'cup', x:200, y:158 }
  ]},
  alt:'Ngoài cửa sổ trời mưa, trên bàn có một cái tách.',
  opts:[
    { t:'La taza está sobre la mesa.', ok:true },
    { t:'La taza es sobre la mesa.', why:'Vị trí thì luôn dùng estar. «es sobre la mesa» là sai ngữ pháp, dù chỉ lệch có một từ.', trap:'ser / estar' },
    { t:'La taza está debajo de la mesa.', why:'Cái tách đứng TRÊN mặt bàn.', trap:'trên / dưới' },
    { t:'Las tazas están sobre la mesa.', why:'Trong tranh chỉ có MỘT cái tách. Số nhiều tazas nghe rõ chữ -s.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'la taza', r:'ta.θa', vi:'cái tách' }, { w:'la mesa', r:'me.sa', vi:'cái bàn' },
    { w:'está', r:'es.ta', vi:'đang ở, thì (estar)' }, { w:'es', r:'es', vi:'là (ser)' }
  ],
  gram:[{ p:'ser và estar đổi cả nghĩa', vi:'Vị trí thì luôn estar. Ngoài ra có những tính từ đổi nghĩa hẳn theo động từ: ser listo là thông minh, estar listo là đã sẵn sàng; ser aburrido là nhàm chán, estar aburrido là đang buồn.',
    ex:['Estoy listo. Soy listo.', 'Tôi sẵn sàng rồi. Tôi thông minh.'] }] },

{ id:'es-04', lang:'es', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'chair', x:250, y:220 }
  ]},
  alt:'Một cái bàn học trống trơn, bên cạnh là một cái ghế.',
  opts:[
    { t:'No hay nada sobre la mesa.', ok:true },
    { t:'Hay un libro sobre la mesa.', why:'Mặt bàn trong tranh không có gì cả.', trap:'có / không có' },
    { t:'No hay nada debajo de la mesa.', why:'Gầm bàn cũng trống, nhưng câu đúng nói về MẶT bàn.', trap:'trên / dưới' },
    { t:'No hay nada sobre la silla.', why:'Cái ghế có thật, nhưng câu đúng nói về cái bàn.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'hay', r:'ai', vi:'có (tồn tại)' }, { w:'no hay nada', r:'no ai na.ða', vi:'không có gì' },
    { w:'la silla', r:'si.ʎa', vi:'cái ghế' },
    { w:'la mesa', r:'me.sa', vi:'cái bàn' }
  ],
  gram:[{ p:'hay không đổi theo số', vi:'hay dùng cho cả số ít và số nhiều: hay un libro, hay dos libros. Khác tiếng Pháp và tiếng Anh, không phải đổi động từ. Nhưng phủ định thì cần no + nada / ningún.',
    ex:['Hay tres sillas. No hay ninguna silla.', 'Có ba cái ghế. Không có cái ghế nào.'] }] },

{ id:'es-05', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:150, y:220 }, { p:'cat', x:158, y:186, pose:'sit', s:0.8 },
    { p:'window', x:290, y:30, view:'sun' }
  ]},
  alt:'Con mèo ngồi trên giường, cửa sổ ở bên phải.',
  opts:[
    { t:'El gato está en la cama.', ok:true },
    { t:'La gata está en la cama.', why:'el gato là mèo đực, la gata là mèo cái. Tranh không cho biết, nên dạng trung tính el gato mới đúng.', trap:'giống' },
    { t:'El gato está debajo de la cama.', why:'Con mèo ngồi TRÊN mặt giường.', trap:'trên / dưới' },
    { t:'El perro está en la cama.', why:'el perro là con chó. Con vật trong tranh có tai nhọn và có râu.', trap:'chủ thể' }
  ],
  keys:[
    { w:'el gato', r:'ɡa.to', vi:'con mèo' }, { w:'la cama', r:'ka.ma', vi:'cái giường' },
    { w:'el perro', r:'pe.ro', vi:'con chó' },
    { w:'la ventana', r:'ben.ta.na', vi:'cửa sổ' }
  ],
  gram:[{ p:'pero và perro', vi:'Một chữ r là âm nảy nhẹ, hai chữ rr là âm rung mạnh. pero là «nhưng», perro là «con chó». caro là đắt, carro là cái xe. Nghe phải bắt cho được độ rung.',
    ex:['El perro es caro, pero es bonito.', 'Con chó thì đắt, nhưng mà đẹp.'] }] },

/* ========== GIỚI TỪ VỊ TRÍ ========== */
{ id:'es-06', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:150 }, { p:'chair', x:120, y:220 }, { p:'chair', x:290, y:220 }
  ]},
  alt:'Cái bàn ở giữa, hai cái ghế đặt hai bên.',
  opts:[
    { t:'La mesa está entre las dos sillas.', ok:true },
    { t:'La mesa está delante de las dos sillas.', why:'delante de là ở phía trước. Trong tranh cái bàn nằm GIỮA hai ghế.', trap:'entre / delante' },
    { t:'Las sillas están sobre la mesa.', why:'Hai cái ghế đứng trên sàn, không ở trên mặt bàn.', trap:'đảo vai' },
    { t:'La mesa está entre las dos ventanas.', why:'Hai vật hai bên là ghế, không phải cửa sổ.', trap:'vật khác' }
  ],
  keys:[
    { w:'entre', r:'en.tɾe', vi:'giữa' }, { w:'delante de', r:'de.lan.te ðe', vi:'trước' },
    { w:'dos', r:'dos', vi:'hai' },
    { w:'la silla', r:'si.ʎa', vi:'cái ghế' }
  ],
  gram:[{ p:'entre không cần «de»', vi:'Phần lớn giới từ chỉ vị trí tiếng Tây Ban Nha phải có de: debajo de, delante de, detrás de, al lado de. Riêng entre và en thì không: entre las sillas, en la mesa.',
    ex:['entre la puerta y la ventana', 'giữa cửa và cửa sổ'] }] },

{ id:'es-07', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:150, y:220 }, { p:'shoe', x:150, y:220, s:0.8 },
    { p:'lamp', x:290, y:220 }
  ]},
  alt:'Đôi giày để dưới gầm giường, bên phải có cái đèn cây.',
  opts:[
    { t:'Los zapatos están debajo de la cama.', ok:true },
    { t:'El zapato está debajo de la cama.', why:'Trong tranh có một ĐÔI giày, nên phải dùng số nhiều: los zapatos, están.', trap:'số ít / số nhiều' },
    { t:'Los zapatos están detrás de la cama.', why:'detrás de là phía sau. Đôi giày nằm bên dưới.', trap:'dưới / sau' },
    { t:'Los calcetines están debajo de la cama.', why:'el calcetín là cái tất, el zapato là cái giày.', trap:'vật khác' }
  ],
  keys:[
    { w:'el zapato', r:'θa.pa.to', vi:'cái giày' }, { w:'el calcetín', r:'kal.θe.tin', vi:'cái tất' },
    { w:'debajo de', r:'de.βa.xo ðe', vi:'dưới' },
    { w:'detrás de', r:'de.tɾas ðe', vi:'phía sau' }
  ],
  gram:[{ p:'số nhiều tiếng Tây Ban Nha nghe rõ', vi:'Từ kết thúc bằng nguyên âm thêm -s (zapato → zapatos), kết thúc bằng phụ âm thêm -es (calcetín → calcetines). Cả hai đều PHÁT ÂM — đây là chỗ dễ hơn tiếng Pháp rất nhiều.',
    ex:['un zapato, dos zapatos', 'một cái giày, hai cái giày'] }] },

{ id:'es-08', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:50, w:90, h:120, rows:3 },
    { p:'plant', x:230, y:220 }, { p:'plant', x:310, y:220 }
  ]},
  alt:'Giá sách treo sát tường bên trái, hai chậu cây đặt trên sàn ở bên phải nó.',
  opts:[
    { t:'Hay dos plantas al lado de la estantería.', ok:true },
    { t:'Hay doce plantas al lado de la estantería.', why:'dos là hai, doce là mười hai. Hai từ đều bắt đầu bằng do-, phải nghe hết đuôi.', trap:'hai / mười hai' },
    { t:'Hay dos plantas encima de la estantería.', why:'encima de là ở trên nóc. Hai chậu cây đứng dưới sàn.', trap:'bên cạnh / bên trên' },
    { t:'Hay dos flores al lado de la estantería.', why:'la flor là bông hoa, la planta là cây trồng trong chậu.', trap:'vật khác' }
  ],
  keys:[
    { w:'la estantería', r:'es.tan.te.ɾi.a', vi:'giá sách' },
    { w:'dos', r:'dos', vi:'hai' }, { w:'doce', r:'do.θe', vi:'mười hai' },
    { w:'la planta', r:'plan.ta', vi:'cây cảnh' }
  ],
  gram:[{ p:'dos/doce · tres/trece · cuatro/catorce', vi:'Các cặp số này có phần đầu giống nhau, nên phải nghe đến hết từ. quince (15) thì lại khác hẳn cinco (5), dễ hơn.',
    ex:['dos, doce, veintidós', 'hai, mười hai, hai mươi hai'] }] },

{ id:'es-09', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'bag', x:250, y:220 },
    { p:'key', x:180, y:158 }
  ]},
  alt:'Chùm chìa khoá nằm trên bàn, cái túi để dưới sàn bên cạnh bàn.',
  opts:[
    { t:'Las llaves están sobre la mesa, al lado del bolso.', ok:true },
    { t:'Las llaves están dentro del bolso.', why:'dentro de là ở trong. Chìa khoá nằm trên mặt bàn.', trap:'trên / trong' },
    { t:'El bolso está sobre la mesa, al lado de las llaves.', why:'Câu này đảo ngược: cái túi để dưới sàn.', trap:'đảo vai' },
    { t:'Las llaves están debajo de la mesa, al lado del bolso.', why:'Câu này chỉ đổi sobre thành debajo de. Chìa khoá nằm TRÊN mặt bàn.', trap:'trên / dưới' }
  ],
  keys:[
    { w:'la llave', r:'ʎa.βe', vi:'chìa khoá' }, { w:'el bolso', r:'bol.so', vi:'cái túi' },
    { w:'al lado de', r:'al la.ðo ðe', vi:'bên cạnh' },
    { w:'dentro de', r:'den.tɾo ðe', vi:'ở trong' }
  ],
  gram:[{ p:'de + el = del', vi:'de gặp el thì rút thành del: al lado del bolso. Nhưng với la, los, las thì không rút: al lado de la mesa, al lado de las llaves.',
    ex:['del libro, de la mesa', 'của quyển sách, của cái bàn'] }] },

{ id:'es-10', lang:'es', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'car', x:120, y:220 }, { p:'tree', x:300, y:220 }, { p:'bicycle', x:220, y:220 }
  ]},
  alt:'Ô tô bên trái, xe đạp ở giữa, cây bên phải.',
  opts:[
    { t:'La bicicleta está entre el coche y el árbol.', ok:true },
    { t:'El coche está entre la bicicleta y el árbol.', why:'Ô tô ở ngoài cùng bên trái. Vật nằm giữa là cái xe đạp.', trap:'đảo vai' },
    { t:'La bicicleta está delante del coche y el árbol.', why:'Câu này chỉ đổi entre thành delante de. Xe đạp nằm giữa hai vật, không ở phía trước chúng.', trap:'entre / delante' },
    { t:'La bicicleta está junto al árbol.', why:'junto a là sát bên. Xe đạp ở giữa, cách cây một quãng.', trap:'vị trí' }
  ],
  keys:[
    { w:'la bicicleta', r:'bi.θi.kle.ta', vi:'xe đạp' }, { w:'el coche', r:'ko.tʃe', vi:'xe ô tô' },
    { w:'el árbol', r:'aɾ.βol', vi:'cái cây' },
    { w:'entre', r:'en.tɾe', vi:'giữa' }
  ],
  gram:[{ p:'coche · carro · auto', vi:'Cùng một thứ nhưng tên khác theo vùng: coche ở Tây Ban Nha, carro ở phần lớn Mỹ Latinh, auto ở Argentina và Chile. Cả ba đều đúng, chỉ khác nơi.',
    ex:['Mi coche es viejo.', 'Xe tôi cũ rồi.'] }] },

/* ========== THỜI CỦA ĐỘNG TỪ ========== */
{ id:'es-11', lang:'es', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:160, y:220 }, { p:'person', x:160, y:216, pose:'write' }
  ]},
  alt:'Một người đang ngồi viết ở bàn học, phía sau là bảng.',
  opts:[
    { t:'Está escribiendo en el cuaderno.', ok:true },
    { t:'Ha escrito en el cuaderno.', why:'ha escrito là đã viết xong. Trong tranh việc đang diễn ra.', trap:'đang làm / đã làm' },
    { t:'Va a escribir en el cuaderno.', why:'va a escribir là sắp viết, chưa bắt đầu.', trap:'sắp làm / đang làm' },
    { t:'Está leyendo el cuaderno.', why:'leer là đọc, escribir là viết. Người trong tranh đang cầm bút.', trap:'động từ khác' }
  ],
  keys:[
    { w:'escribir', r:'es.kɾi.βiɾ', vi:'viết' }, { w:'el cuaderno', r:'kwa.ðeɾ.no', vi:'quyển vở' },
    { w:'está escribiendo', r:'es.ta es.kɾi.βjen.do', vi:'đang viết' },
    { w:'leer', r:'le.eɾ', vi:'đọc' }
  ],
  gram:[{ p:'estar + -ando / -iendo', vi:'Muốn nói «đang làm» thì dùng estar cộng với dạng -ando (động từ -ar) hoặc -iendo (động từ -er, -ir): está hablando, está comiendo, está escribiendo.',
    ex:['Estoy comiendo.', 'Tôi đang ăn.'] }] },

{ id:'es-12', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'plate', x:180, y:158 },
    { p:'person', x:280, y:220, pose:'stand' }
  ]},
  alt:'Cái đĩa trống trên bàn, một người đứng bên cạnh.',
  opts:[
    { t:'Ya ha comido.', ok:true },
    { t:'Todavía no ha comido.', why:'todavía no là vẫn chưa. Đĩa đã trống, nghĩa là ăn xong rồi.', trap:'đã / chưa' },
    { t:'Va a comer.', why:'va a comer là sắp ăn. Đĩa trống cho thấy việc đã xong.', trap:'sắp / đã' },
    { t:'Está comiendo.', why:'está comiendo là đang ăn. Người này đã rời bàn và đĩa đã trống.', trap:'đang / đã' }
  ],
  keys:[
    { w:'comer', r:'ko.meɾ', vi:'ăn' }, { w:'ya', r:'ʝa', vi:'đã… rồi' },
    { w:'todavía no', r:'to.ða.βi.a no', vi:'vẫn chưa' },
    { w:'el plato', r:'pla.to', vi:'cái đĩa' }
  ],
  gram:[{ p:'haber + quá khứ phân từ', vi:'Hiện tại hoàn thành tiếng Tây Ban Nha luôn dùng haber, không bao giờ dùng ser hay estar: he comido, has comido, ha comido. Quá khứ phân từ KHÔNG đổi theo giống ở thời này.',
    ex:['Ella ha comido. Él ha comido.', 'Cô ấy đã ăn. Anh ấy đã ăn.'] }] },

{ id:'es-13', lang:'es', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:130, y:220, pose:'walk' }, { p:'bus', x:300, y:220 }
  ]},
  alt:'Một người đang đi bộ, chiếc xe buýt ở phía bên phải.',
  opts:[
    { t:'Va andando a la parada del autobús.', ok:true },
    { t:'Va corriendo a la parada del autobús.', why:'correr là chạy, andar là đi bộ. Dáng người trong tranh đang bước.', trap:'đi / chạy' },
    { t:'Está esperando el autobús.', why:'esperar là đứng đợi. Người này đang di chuyển.', trap:'đứng / đi' },
    { t:'Va en autobús a la parada.', why:'ir en autobús là đi bằng xe buýt. Người này còn chưa lên xe.', trap:'đi bộ / đi xe' }
  ],
  keys:[
    { w:'andar', r:'an.daɾ', vi:'đi bộ' }, { w:'correr', r:'ko.reɾ', vi:'chạy' },
    { w:'la parada', r:'pa.ɾa.ða', vi:'điểm dừng' },
    { w:'esperar', r:'es.pe.ɾaɾ', vi:'đợi' }
  ],
  gram:[{ p:'ir a pie · ir en autobús', vi:'Phương tiện dùng en: en coche, en tren, en autobús. Nhưng đi bộ thì dùng a: a pie. Đây là cụm cố định, không suy luận được.',
    ex:['Voy a pie. Voy en tren.', 'Tôi đi bộ. Tôi đi tàu.'] }] },

{ id:'es-14', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:60, y:34, view:'sun', open:true },
    { p:'door', x:300, y:100 }, { p:'lamp', x:200, y:220 }
  ]},
  alt:'Cửa sổ mở, trời nắng, cửa ra vào đóng, trong phòng có cái đèn.',
  opts:[
    { t:'La ventana está abierta y la puerta está cerrada.', ok:true },
    { t:'La ventana está abierto y la puerta está cerrado.', why:'ventana và puerta đều giống cái, nên phải là abierta, cerrada. Chữ -a cuối nghe rất rõ.', trap:'hợp giống' },
    { t:'La ventana está cerrada y la puerta está abierta.', why:'Câu này đảo ngược trạng thái hai thứ.', trap:'đảo vai' },
    { t:'La ventana está abierta y la lámpara está encendida.', why:'Cái đèn có thật nhưng trong tranh nó chưa bật.', trap:'đúng vật, sai trạng thái' }
  ],
  keys:[
    { w:'abierto / abierta', r:'a.βjeɾ.to', vi:'đang mở' },
    { w:'cerrado / cerrada', r:'θe.ra.ðo', vi:'đang đóng' },
    { w:'la ventana', r:'ben.ta.na', vi:'cửa sổ' },
    { w:'la puerta', r:'pweɾ.ta', vi:'cửa ra vào' }
  ],
  gram:[{ p:'estar abierto / ser abierto', vi:'estar abierto là đang mở (trạng thái). ser abierto nói về người thì nghĩa là tính cách cởi mở. Cùng một tính từ, đổi động từ là đổi nghĩa.',
    ex:['La tienda está abierta. Es una persona abierta.', 'Cửa hàng đang mở. Đó là người cởi mở.'] }] },

{ id:'es-15', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:130 }, { p:'lamp', x:300, y:220 },
    { p:'clock', x:80, y:70, time:'9:15' }
  ]},
  alt:'Đồng hồ chỉ 9 giờ 15, có cái đèn cây và một cái bàn.',
  opts:[
    { t:'Son las nueve y cuarto.', ok:true },
    { t:'Son las nueve menos cuarto.', why:'menos cuarto là kém mười lăm, tức 8 giờ 45. Kim phút đang ở sau số 9.', trap:'y cuarto / menos cuarto' },
    { t:'Son las nueve y media.', why:'y media là hơn ba mươi. Kim phút đang ở số 3.', trap:'15 / 30 phút' },
    { t:'Es la una y cuarto.', why:'Chỉ 1 giờ mới dùng «es la una», các giờ khác dùng «son las». Đồng hồ chỉ 9 giờ.', trap:'số giờ' }
  ],
  keys:[
    { w:'y cuarto', r:'i kwaɾ.to', vi:'hơn mười lăm' },
    { w:'y media', r:'i me.ðja', vi:'hơn ba mươi' },
    { w:'menos cuarto', r:'me.nos kwaɾ.to', vi:'kém mười lăm' },
    { w:'la hora', r:'o.ɾa', vi:'giờ' }
  ],
  gram:[{ p:'es la una nhưng son las dos', vi:'1 giờ là số ít nên dùng es la una. Từ 2 giờ trở đi là số nhiều: son las dos, son las tres. Bắt được es hay son là biết ngay có phải 1 giờ hay không.',
    ex:['Es la una y media. Son las tres.', '1 giờ 30. 3 giờ.'] }] },

/* ========== GIỐNG CỦA DANH TỪ ========== */
{ id:'es-16', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:140 }, { p:'glass', x:165, y:158 }, { p:'bottle', x:215, y:158 }
  ]},
  alt:'Trên bàn có một cái ly và một cái chai đặt cạnh nhau.',
  opts:[
    { t:'El vaso está al lado de la botella.', ok:true },
    { t:'El vaso está dentro de la botella.', why:'Câu này chỉ đổi giới từ. Cái ly đứng BÊN CẠNH cái chai.', trap:'bên cạnh / bên trong' },
    { t:'El vaso está detrás de la botella.', why:'Hai vật đứng cùng một hàng, cạnh nhau, không cái nào ở phía sau.', trap:'bên cạnh / phía sau' },
    { t:'Los vasos están al lado de la botella.', why:'Trong tranh chỉ có MỘT cái ly. Số nhiều vasos nghe rõ chữ -s.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'el vaso', r:'ba.so', vi:'cái ly' }, { w:'la botella', r:'bo.te.ʎa', vi:'cái chai' },
    { w:'al lado de', r:'al la.ðo ðe', vi:'bên cạnh' },
    { w:'dentro de', r:'den.tɾo ðe', vi:'bên trong' }
  ],
  gram:[{ p:'dentro de · fuera de · al lado de', vi:'Nhóm giới từ này luôn kết thúc bằng de, và de gặp el thì rút thành del: dentro del vaso, al lado del sofá. Nghe được chữ de cuối là biết còn một danh từ nữa theo sau.',
    ex:['dentro de la caja, al lado del sofá', 'trong cái hộp, bên cạnh ghế sofa'] }] },

{ id:'es-17', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'stand' }, { p:'person', x:230, y:220, pose:'stand', hair:'long' },
    { p:'table', x:330, y:220, w:80 }
  ]},
  alt:'Hai người đứng cạnh nhau trong phòng, bên phải là cái bàn.',
  opts:[
    { t:'Son mis amigos.', ok:true },
    { t:'Es mi amigo.', why:'Trong tranh có HAI người. Số nhiều là son mis amigos.', trap:'số ít / số nhiều' },
    { t:'Son mis amigas.', why:'amigas là toàn nữ. Trong tranh có một nam và một nữ, nên tiếng Tây Ban Nha dùng dạng giống đực amigos cho nhóm hỗn hợp.', trap:'giống của nhóm' },
    { t:'Son mis hermanos.', why:'hermano là anh em ruột, amigo là bạn. Tranh không cho biết họ là họ hàng.', trap:'từ khác' }
  ],
  keys:[
    { w:'el amigo', r:'a.mi.ɣo', vi:'người bạn (nam)' },
    { w:'la amiga', r:'a.mi.ɣa', vi:'người bạn (nữ)' },
    { w:'mis amigos', r:'mis a.mi.ɣos', vi:'các bạn của tôi' },
    { w:'el hermano', r:'eɾ.ma.no', vi:'anh, em trai' }
  ],
  gram:[{ p:'nhóm hỗn hợp lấy giống đực', vi:'Một nam một nữ thì gọi là amigos. Chỉ khi toàn bộ là nữ mới dùng amigas. Quy tắc này áp cho mọi danh từ chỉ người: los padres có thể là cả bố và mẹ.',
    ex:['mis padres, mis hermanos', 'bố mẹ tôi, các anh chị em tôi'] }] },

{ id:'es-18', lang:'es', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:200, y:220, pose:'stand' }, { p:'tree', x:320, y:220 }
  ]},
  alt:'Một người đàn ông đứng trên phố, bên phải có một cái cây.',
  opts:[
    { t:'Es un hombre.', ok:true },
    { t:'Son unos hombres.', why:'Chỉ có MỘT người. Số nhiều unos hombres nghe rõ chữ -s ở cuối.', trap:'số ít / số nhiều' },
    { t:'Es una mujer.', why:'una mujer là người phụ nữ. Nhân vật trong tranh không có tóc dài.', trap:'giống' },
    { t:'Está un hombre.', why:'Nói «đó là ai» thì dùng ser, không dùng estar. Phải là es un hombre.', trap:'ser / estar' }
  ],
  keys:[
    { w:'el hombre', r:'om.bɾe', vi:'người đàn ông' },
    { w:'la mujer', r:'mu.xeɾ', vi:'người phụ nữ' },
    { w:'ser', r:'seɾ', vi:'là (bản chất)' }, { w:'estar', r:'es.taɾ', vi:'là, ở (trạng thái)' }
  ],
  gram:[{ p:'chữ h không bao giờ đọc', vi:'hombre đọc «ôm-brê», hola đọc «ô-la», hora đọc «ô-ra». Chữ h trong tiếng Tây Ban Nha hoàn toàn câm, không như tiếng Anh.',
    ex:['hombre, hora, hola', 'người đàn ông, giờ, xin chào'] }] },

{ id:'es-19', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'fridge', x:140, y:220 }, { p:'apple', x:250, y:158 }, { p:'table', x:250, y:220, w:100 }
  ]},
  alt:'Cái tủ lạnh bên trái, một quả táo đặt trên bàn bên phải.',
  opts:[
    { t:'Hay una manzana sobre la mesa.', ok:true },
    { t:'Hay unas manzanas sobre la mesa.', why:'Trong tranh chỉ có MỘT quả. Số nhiều manzanas nghe rõ chữ -s.', trap:'số ít / số nhiều' },
    { t:'Hay una manzana en la nevera.', why:'en la nevera là ở trong tủ lạnh. Quả táo đang để trên bàn.', trap:'trên / trong' },
    { t:'Hay un manzano sobre la mesa.', why:'la manzana là quả táo, el manzano là CÂY táo. Đổi đuôi là đổi hẳn vật.', trap:'giống đổi nghĩa' }
  ],
  keys:[
    { w:'la manzana', r:'man.θa.na', vi:'quả táo' }, { w:'el manzano', r:'man.θa.no', vi:'cây táo' },
    { w:'la nevera', r:'ne.βe.ɾa', vi:'tủ lạnh' },
    { w:'sobre', r:'so.βɾe', vi:'trên' }
  ],
  gram:[{ p:'cây đực, quả cái', vi:'Rất nhiều cặp theo quy luật này: el manzano / la manzana, el naranjo / la naranja, el cerezo / la cereza. Cây là giống đực, quả là giống cái.',
    ex:['el naranjo, la naranja', 'cây cam, quả cam'] }] },

{ id:'es-20', lang:'es', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:110, y:220, w:96 }, { p:'desk', x:220, y:220, w:96 }, { p:'desk', x:330, y:220, w:96 }
  ]},
  alt:'Ba cái bàn học trong lớp, phía trên là cái bảng.',
  opts:[
    { t:'Hay tres mesas en el aula.', ok:true },
    { t:'Hay trece mesas en el aula.', why:'tres là ba, trece là mười ba. Phải nghe hết đuôi từ.', trap:'ba / mười ba' },
    { t:'Hay tres pizarras en el aula.', why:'la pizarra là cái bảng. Trong tranh có một bảng và ba bàn.', trap:'chủ thể' },
    { t:'No hay mesas en el aula.', why:'Trong tranh rõ ràng có bàn.', trap:'có / không có' }
  ],
  keys:[
    { w:'el aula', r:'au̯.la', vi:'lớp học (giống cái!)' },
    { w:'la pizarra', r:'pi.θa.ra', vi:'cái bảng' }, { w:'tres', r:'tɾes', vi:'ba' },
    { w:'trece', r:'tɾe.θe', vi:'mười ba' }
  ],
  gram:[{ p:'el aula giống el agua', vi:'aula cũng là danh từ giống cái bắt đầu bằng a- có trọng âm, nên lấy mạo từ el: el aula. Tính từ vẫn hợp giống cái: el aula está limpia.',
    ex:['el aula grande, las aulas', 'lớp học rộng, các lớp học'] }] },

/* ========== POR VỚI PARA · MUY VỚI MUCHO ========== */
{ id:'es-21', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'stove', x:130, y:220 }, { p:'person', x:196, y:220, pose:'cook', flip:true },
    { p:'plate', x:290, y:158 }, { p:'table', x:290, y:220, w:90 }
  ]},
  alt:'Một người đang nấu ở bếp, trên bàn bên phải có cái đĩa.',
  opts:[
    { t:'Cocina para su familia.', ok:true },
    { t:'Cocina por su familia.', why:'para chỉ người nhận, por chỉ nguyên nhân. Nấu CHO ai thì dùng para.', trap:'por / para' },
    { t:'Come con su familia.', why:'comer là ăn, cocinar là nấu. Người này đang đứng ở bếp, tay trên nồi.', trap:'động từ khác' },
    { t:'Ha cocinado para su familia.', why:'ha cocinado là đã nấu xong. Trong tranh việc đang diễn ra.', trap:'đang / đã' }
  ],
  keys:[
    { w:'cocinar', r:'ko.θi.naɾ', vi:'nấu ăn' }, { w:'para', r:'pa.ɾa', vi:'cho, để' },
    { w:'por', r:'poɾ', vi:'vì, qua' },
    { w:'la familia', r:'fa.mi.lja', vi:'gia đình' }
  ],
  gram:[{ p:'por và para', vi:'para cho đích đến, người nhận, mục đích: para ti, para Madrid, para aprender. por cho nguyên nhân, đường đi, sự đổi chác: por ti (vì em), por la calle (dọc phố), gracias por todo.',
    ex:['Es para ti. Lo hago por ti.', 'Cái này cho em. Anh làm việc đó vì em.'] }] },

{ id:'es-22', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:170, y:220 }, { p:'person', x:170, y:216, pose:'read' },
    { p:'lamp', x:300, y:220 }
  ]},
  alt:'Một người ngồi trên sofa cầm sách đọc, bên phải là cái đèn.',
  opts:[
    { t:'Lee un libro en el sofá.', ok:true },
    { t:'Escribe en un libro en el sofá.', why:'escribir là viết. Người này giữ sách bằng hai tay.', trap:'đọc / viết' },
    { t:'Lee un libro debajo del sofá.', why:'debajo del sofá là dưới gầm ghế. Người này ngồi TRÊN ghế.', trap:'trên / dưới' },
    { t:'Leen un libro en el sofá.', why:'leen là số nhiều. Trong tranh chỉ có một người, nghe «lê-ê» với «lê-ên».', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'leer', r:'le.eɾ', vi:'đọc' }, { w:'lee', r:'le.e', vi:'anh ấy đọc' },
    { w:'leen', r:'le.en', vi:'họ đọc' },
    { w:'el sofá', r:'so.fa', vi:'ghế sofa' }
  ],
  gram:[{ p:'lee và leen', vi:'Ngôi thứ ba số ít và số nhiều khác nhau ở chữ -n cuối: habla/hablan, come/comen, lee/leen. Chữ -n này phát âm rõ, nên tiếng Tây Ban Nha nghe được số dễ hơn tiếng Pháp.',
    ex:['Él lee. Ellos leen.', 'Anh ấy đọc. Họ đọc.'] }] },

{ id:'es-23', lang:'es', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:120, y:220, pose:'walk' }, { p:'umbrella', x:120, y:118, open:true, s:1.2 },
    { p:'rain', x:200, y:20, n:7 }
  ]},
  alt:'Trời mưa, một người đi bộ và giương dù.',
  opts:[
    { t:'Llueve mucho, así que abre el paraguas.', ok:true },
    { t:'Llueve muy, así que abre el paraguas.', why:'muy chỉ đi trước tính từ hoặc trạng từ. Với động từ phải dùng mucho: llueve mucho.', trap:'muy / mucho' },
    { t:'Nieva mucho, así que abre el paraguas.', why:'nevar là có tuyết. Trong tranh là những vạch mưa xiên.', trap:'mưa / tuyết' },
    { t:'Llueve mucho, pero cierra el paraguas.', why:'Cái dù trong tranh đang mở căng ra.', trap:'mở / đóng' }
  ],
  keys:[
    { w:'llover', r:'ʎo.βeɾ', vi:'mưa' }, { w:'el paraguas', r:'pa.ɾa.ɣwas', vi:'cái dù' },
    { w:'mucho', r:'mu.tʃo', vi:'nhiều, rất (với động từ)' },
    { w:'muy', r:'mui', vi:'rất (với tính từ)' }
  ],
  gram:[{ p:'muy hay mucho?', vi:'muy + tính từ / trạng từ: muy grande, muy rápido. mucho + động từ hoặc danh từ: llueve mucho, mucha agua. Nói «muy llueve» hay «mucho grande» đều sai.',
    ex:['Es muy grande. Come mucho.', 'Nó rất lớn. Anh ấy ăn nhiều.'] }] },

{ id:'es-24', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:130, y:220 }, { p:'coat', x:290, y:180 }, { p:'hanger', x:290, y:150 }
  ]},
  alt:'Cái tủ bên trái, cái áo khoác treo trên móc ở bên phải.',
  opts:[
    { t:'El abrigo está colgado en la pared.', ok:true },
    { t:'El abrigo está dentro del armario.', why:'dentro del armario là ở trong tủ. Cái áo đang treo bên ngoài.', trap:'trong / ngoài' },
    { t:'El abrigo está en el suelo.', why:'en el suelo là ở dưới sàn. Cái áo đang treo cao.', trap:'vị trí' },
    { t:'El abrigo es colgado en la pared.', why:'Trạng thái thì dùng estar, không dùng ser.', trap:'ser / estar' }
  ],
  keys:[
    { w:'el abrigo', r:'a.βɾi.ɣo', vi:'áo khoác' }, { w:'el armario', r:'aɾ.ma.ɾjo', vi:'cái tủ' },
    { w:'la pared', r:'pa.ɾeð', vi:'bức tường' },
    { w:'colgado', r:'kol.ɣa.ðo', vi:'được treo' }
  ],
  gram:[{ p:'colgado là quá khứ phân từ dùng như tính từ', vi:'Khi đi với estar, quá khứ phân từ trở thành tính từ và phải hợp giống số: está colgado, está colgada, están colgados.',
    ex:['Las fotos están colgadas.', 'Mấy tấm ảnh được treo lên.'] }] },

{ id:'es-25', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:140 },
    { p:'cup', x:170, y:158 }, { p:'cup', x:205, y:158 }, { p:'cup', x:240, y:158 }
  ]},
  alt:'Ba cái tách đứng cạnh nhau trên bàn.',
  opts:[
    { t:'Hay tres tazas sobre la mesa.', ok:true },
    { t:'Hay trece tazas sobre la mesa.', why:'tres là ba, trece là mười ba.', trap:'ba / mười ba' },
    { t:'Hay tres vasos sobre la mesa.', why:'la taza là cái tách có tay cầm, el vaso là cái ly không tay cầm.', trap:'vật khác' },
    { t:'Hay tres tazas debajo de la mesa.', why:'Ba cái tách đứng TRÊN mặt bàn.', trap:'trên / dưới' }
  ],
  keys:[
    { w:'la taza', r:'ta.θa', vi:'cái tách' }, { w:'el vaso', r:'ba.so', vi:'cái ly' },
    { w:'tres', r:'tɾes', vi:'ba' },
    { w:'la copa', r:'ko.pa', vi:'ly có chân' }
  ],
  gram:[{ p:'taza · vaso · copa', vi:'Ba thứ khác nhau: taza là tách có tay cầm để uống nóng, vaso là ly thẳng để uống nước, copa là ly có chân để uống rượu. Gọi sai thì người phục vụ mang sai.',
    ex:['una taza de café, un vaso de agua, una copa de vino', 'một tách cà phê, một ly nước, một ly rượu'] }] }

  );
})();
