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
,

/* ========== ĐỒ VẬT TRONG NHÀ ========== */
{ id:'es-26', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'fridge', x:130, y:220 }, { p:'stove', x:250, y:220 }, { p:'sink', x:340, y:220 }
  ]},
  alt:'Trong bếp có tủ lạnh, bếp nấu và bồn rửa xếp thành một hàng.',
  opts:[
    { t:'La nevera está a la izquierda de la cocina.', ok:true },
    { t:'La nevera está a la derecha de la cocina.', why:'izquierda là bên trái, derecha là bên phải. Tủ lạnh đứng bên TRÁI.', trap:'trái / phải' },
    { t:'La nevera está a la izquierda del fregadero.', why:'Cái đứng ngay bên phải tủ lạnh là bếp nấu, bồn rửa thì ở xa hơn.', trap:'đúng vật, sai mốc' },
    { t:'La nevera es a la izquierda de la cocina.', why:'Vị trí thì luôn dùng estar, không dùng ser.', trap:'ser / estar' }
  ],
  keys:[
    { w:'la nevera', r:'ne.βe.ɾa', vi:'tủ lạnh' }, { w:'la cocina', r:'ko.θi.na', vi:'bếp nấu; nhà bếp' },
    { w:'a la izquierda', r:'a la iθ.kjeɾ.ða', vi:'bên trái' }, { w:'a la derecha', r:'a la ðe.ɾe.tʃa', vi:'bên phải' }
  ],
  gram:[{ p:'la cocina có hai nghĩa', vi:'Vừa là cái bếp nấu, vừa là cả gian bếp. Muốn nói rõ cái bếp nấu thì dùng la cocina de gas hoặc los fogones. Ngữ cảnh quyết định.',
    ex:['Estoy en la cocina.', 'Tôi đang ở trong bếp.'] }] },

{ id:'es-27', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:140 }, { p:'bowl', x:165, y:158 }, { p:'plate', x:220, y:158 }
  ]},
  alt:'Trên bàn có một cái bát và một cái đĩa đặt cạnh nhau.',
  opts:[
    { t:'El cuenco está a la izquierda del plato.', ok:true },
    { t:'El cuenco está a la derecha del plato.', why:'Cái bát nằm bên TRÁI cái đĩa.', trap:'trái / phải' },
    { t:'El cuenco está dentro del plato.', why:'Hai vật đặt cạnh nhau trên mặt bàn.', trap:'bên cạnh / bên trong' },
    { t:'El plato está a la izquierda del cuenco.', why:'Câu này đảo ngược hai vật.', trap:'đảo vai' }
  ],
  keys:[
    { w:'el cuenco', r:'kwen.ko', vi:'cái bát' }, { w:'el plato', r:'pla.to', vi:'cái đĩa' },
    { w:'del', r:'del', vi:'của (de + el)' }, { w:'dentro de', r:'den.tɾo ðe', vi:'bên trong' }
  ],
  gram:[{ p:'a la izquierda DE', vi:'Cụm này luôn cần de, và de gặp el thì thành del: a la izquierda del plato, a la derecha de la mesa. Nghe del hay de la là biết giống của vật mốc.',
    ex:['a la derecha del sofá', 'bên phải ghế sofa'] }] },

{ id:'es-28', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:160, y:220 }, { p:'sleeper', x:160, y:186 },
    { p:'window', x:300, y:34, view:'night' }
  ]},
  alt:'Một người đang ngủ trên giường, ngoài cửa sổ là trời đêm có trăng.',
  opts:[
    { t:'Está durmiendo porque es de noche.', ok:true },
    { t:'Está durmiendo porque es de día.', why:'de día là ban ngày. Ngoài cửa sổ có mặt trăng.', trap:'ngày / đêm' },
    { t:'Se está levantando porque es de noche.', why:'levantarse là thức dậy. Người này vẫn đang nằm.', trap:'ngủ / dậy' },
    { t:'Está durmiendo porque está de noche.', why:'Nói «trời đang là đêm» thì dùng ser: es de noche. Đây là một trong ít chỗ thời gian dùng ser.', trap:'ser / estar' }
  ],
  keys:[
    { w:'dormir', r:'doɾ.miɾ', vi:'ngủ' }, { w:'es de noche', r:'es ðe no.tʃe', vi:'trời tối' },
    { w:'levantarse', r:'le.βan.taɾ.se', vi:'thức dậy' }, { w:'porque', r:'poɾ.ke', vi:'bởi vì' }
  ],
  gram:[{ p:'giờ giấc dùng SER', vi:'Vị trí thì estar, nhưng thời gian thì lại ser: es la una, son las tres, es de noche, es lunes. Đây là ngoại lệ phải nhớ riêng.',
    ex:['Es lunes y son las ocho.', 'Hôm nay thứ Hai và bây giờ là 8 giờ.'] }] },

{ id:'es-29', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'phone', x:180, y:158 },
    { p:'sofa', x:310, y:220 }
  ]},
  alt:'Cái điện thoại nằm trên bàn, bên phải là ghế sofa.',
  opts:[
    { t:'El móvil está sobre la mesa.', ok:true },
    { t:'El móvil está sobre el sofá.', why:'Ghế sofa có thật nhưng điện thoại nằm trên bàn.', trap:'đúng vật, sai mốc' },
    { t:'El móvil está debajo de la mesa.', why:'Điện thoại nằm trên mặt bàn.', trap:'trên / dưới' },
    { t:'Los móviles están sobre la mesa.', why:'Chỉ có MỘT cái. Số nhiều móviles nghe rõ chữ -es.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'el móvil', r:'mo.βil', vi:'điện thoại di động' }, { w:'el celular', r:'θe.lu.laɾ', vi:'điện thoại (Mỹ Latinh)' },
    { w:'el sofá', r:'so.fa', vi:'ghế sofa' }, { w:'sobre', r:'so.βɾe', vi:'trên' }
  ],
  gram:[{ p:'móvil hay celular?', vi:'Ở Tây Ban Nha gọi là el móvil, ở Mỹ Latinh gọi là el celular. Cả hai đều đúng, chỉ khác vùng — giống chuyện coche với carro.',
    ex:['Mi móvil no funciona.', 'Điện thoại của tôi không chạy.'] }] },

{ id:'es-30', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:140 }, { p:'laptop', x:190, y:158 },
    { p:'chair', x:300, y:220 }
  ]},
  alt:'Cái máy tính xách tay mở trên bàn, bên phải có một cái ghế trống.',
  opts:[
    { t:'No hay nadie delante del ordenador.', ok:true },
    { t:'No hay nada delante del ordenador.', why:'nada là không có VẬT gì, nadie là không có AI. Câu đúng nói về người.', trap:'nada / nadie' },
    { t:'Hay alguien delante del ordenador.', why:'Cái ghế trong tranh để trống.', trap:'có / không có' },
    { t:'No hay nadie detrás del ordenador.', why:'Cái ghế đặt ở PHÍA TRƯỚC máy tính.', trap:'trước / sau' }
  ],
  keys:[
    { w:'el ordenador', r:'oɾ.ðe.na.ðoɾ', vi:'máy tính' }, { w:'nadie', r:'na.ðje', vi:'không ai' },
    { w:'nada', r:'na.ða', vi:'không gì' }, { w:'alguien', r:'al.ɣjen', vi:'ai đó' }
  ],
  gram:[{ p:'phủ định kép là bắt buộc', vi:'Tiếng Tây Ban Nha giữ cả hai từ phủ định: «no hay nadie», «no veo nada». Bỏ chữ no đi thì câu thành sai, khác hẳn tiếng Anh vốn cấm phủ định kép.',
    ex:['No tengo nada.', 'Tôi chẳng có gì.'] }] },

/* ========== NGOÀI ĐƯỜNG ========== */
{ id:'es-31', lang:'es', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'car', x:130, y:220 }, { p:'car', x:250, y:220 }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai chiếc ô tô đỗ cạnh nhau trên phố, bên phải có một cái cây.',
  opts:[
    { t:'Hay dos coches en la calle.', ok:true },
    { t:'Hay doce coches en la calle.', why:'dos là hai, doce là mười hai.', trap:'hai / mười hai' },
    { t:'Hay dos coches en el jardín.', why:'Cảnh trong tranh là mặt phố, không phải khu vườn.', trap:'bối cảnh' },
    { t:'No hay coches en la calle.', why:'Trong tranh rõ ràng có xe.', trap:'có / không có' }
  ],
  keys:[
    { w:'la calle', r:'ka.ʎe', vi:'con phố' }, { w:'el coche', r:'ko.tʃe', vi:'xe ô tô' },
    { w:'dos', r:'dos', vi:'hai' }, { w:'el jardín', r:'xaɾ.ðin', vi:'khu vườn' }
  ],
  gram:[{ p:'hai chữ ll', vi:'calle, llave, llover, lluvia — tổ hợp ll ở Tây Ban Nha đọc gần như «y» trong tiếng Việt. Ở Argentina thì lại đọc thành «sh», nghe rất khác.',
    ex:['la calle, la llave', 'con phố, chìa khoá'] }] },

{ id:'es-32', lang:'es', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:150, y:220, pose:'wave' }, { p:'person', x:260, y:220, pose:'walk', hair:'long' }
  ]},
  alt:'Một người đứng giơ tay vẫy, người kia đang bước đi.',
  opts:[
    { t:'Le dice adiós.', ok:true },
    { t:'Le dice hola.', why:'Người kia đang bước đi xa dần, nên đây là lời tạm biệt.', trap:'chào / tạm biệt' },
    { t:'Les dice adiós.', why:'le là cho MỘT người, les là cho NHIỀU người. Chỉ có một người đang đi.', trap:'le / les' },
    { t:'Le dijo adiós.', why:'dijo là thời quá khứ. Việc đang diễn ra trước mắt.', trap:'hiện tại / quá khứ' }
  ],
  keys:[
    { w:'adiós', r:'a.ðjos', vi:'tạm biệt' }, { w:'hola', r:'o.la', vi:'xin chào' },
    { w:'le', r:'le', vi:'cho anh/chị ấy' }, { w:'decir', r:'de.θiɾ', vi:'nói' }
  ],
  gram:[{ p:'le và les', vi:'Đại từ tân ngữ gián tiếp, thay cho «a + người»: le digo a María → le digo. Nó đứng TRƯỚC động từ chia, hoặc dính vào sau động từ nguyên thể: voy a decirle.',
    ex:['Le doy el libro. Les doy el libro.', 'Tôi đưa sách cho anh ấy. Tôi đưa sách cho họ.'] }] },

{ id:'es-33', lang:'es', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'bus', x:180, y:220 }, { p:'person', x:310, y:220, pose:'stand' }
  ]},
  alt:'Chiếc xe buýt bên trái, một người đứng đợi bên phải.',
  opts:[
    { t:'Está esperando el autobús.', ok:true },
    { t:'Está esperando el tren.', why:'el tren là tàu hoả. Phương tiện trong tranh có bánh và cửa bên hông.', trap:'vật khác' },
    { t:'Está cogiendo el autobús.', why:'coger el autobús là lên xe. Người này còn đứng ngoài.', trap:'đợi / lên xe' },
    { t:'Están esperando el autobús.', why:'Chỉ có MỘT người. está và están khác nhau ở chữ -n cuối.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'esperar', r:'es.pe.ɾaɾ', vi:'đợi' }, { w:'el autobús', r:'au̯.to.βus', vi:'xe buýt' },
    { w:'el tren', r:'tɾen', vi:'tàu hoả' }, { w:'coger', r:'ko.xeɾ', vi:'bắt, lấy (xe)' }
  ],
  gram:[{ p:'coger — cẩn thận khi sang Mỹ Latinh', vi:'Ở Tây Ban Nha coger el autobús là chuyện bình thường. Ở Mexico và Argentina thì từ này thô tục. Dùng tomar el autobús thì đi đâu cũng an toàn.',
    ex:['Voy a tomar el autobús.', 'Tôi sẽ bắt xe buýt.'] }] },

{ id:'es-34', lang:'es', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:140, y:220, pose:'run' }, { p:'bicycle', x:290, y:220 }
  ]},
  alt:'Một người đang chạy, chiếc xe đạp dựng ở bên phải.',
  opts:[
    { t:'Corre hacia su bicicleta.', ok:true },
    { t:'Va en bicicleta.', why:'ir en bicicleta là đi bằng xe đạp. Người này vẫn đang chạy bộ.', trap:'chạy bộ / đi xe' },
    { t:'Corre hacia su coche.', why:'Vật bên phải có hai bánh và bàn đạp.', trap:'vật khác' },
    { t:'Ha corrido hacia su bicicleta.', why:'ha corrido là đã chạy xong. Trong tranh việc đang diễn ra.', trap:'đang làm / đã làm' }
  ],
  keys:[
    { w:'correr', r:'ko.reɾ', vi:'chạy' }, { w:'hacia', r:'a.θja', vi:'về phía' },
    { w:'la bicicleta', r:'bi.θi.kle.ta', vi:'xe đạp' }, { w:'su', r:'su', vi:'của anh/chị ấy' }
  ],
  gram:[{ p:'su không đổi theo giống người', vi:'su bicicleta, su coche — chữ su chỉ hợp SỐ với vật sở hữu (sus libros), không hợp giống, và không cho biết chủ là nam hay nữ. Muốn rõ thì thêm: la bicicleta de ella.',
    ex:['su libro, sus libros', 'sách của anh ấy, những quyển sách của anh ấy'] }] },

{ id:'es-35', lang:'es', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'tree', x:110, y:220 }, { p:'tree', x:200, y:220 }, { p:'tree', x:290, y:220 }
  ]},
  alt:'Ba cái cây trồng thành hàng dọc phố.',
  opts:[
    { t:'Hay tres árboles en la calle.', ok:true },
    { t:'Hay trece árboles en la calle.', why:'tres là ba, trece là mười ba.', trap:'ba / mười ba' },
    { t:'Hay tres flores en la calle.', why:'la flor là bông hoa. Trong tranh là cây có thân và tán lá.', trap:'vật khác' },
    { t:'Hay tres árboles en el jardín.', why:'Cảnh trong tranh là mặt phố.', trap:'bối cảnh' }
  ],
  keys:[
    { w:'el árbol', r:'aɾ.βol', vi:'cái cây' }, { w:'los árboles', r:'aɾ.βo.les', vi:'những cái cây' },
    { w:'la flor', r:'floɾ', vi:'bông hoa' }, { w:'tres', r:'tɾes', vi:'ba' }
  ],
  gram:[{ p:'árbol → árboles, trọng âm không đổi', vi:'Dấu sắc trong árbol biến mất ở số nhiều (árboles) vì trọng âm vẫn rơi đúng chỗ theo quy tắc mặc định. Chữ viết đổi nhưng cách đọc phần gốc thì không.',
    ex:['el árbol, los árboles', 'cái cây, những cái cây'] }] },

/* ========== LỚP HỌC ========== */
{ id:'es-36', lang:'es', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:160, y:220 }, { p:'book', x:160, y:162 }, { p:'bag', x:280, y:220 }
  ]},
  alt:'Quyển sách nằm trên bàn học, cái cặp để dưới sàn bên phải.',
  opts:[
    { t:'El libro está sobre la mesa y la mochila en el suelo.', ok:true },
    { t:'El libro está en el suelo y la mochila sobre la mesa.', why:'Câu này đảo ngược hai vật.', trap:'đảo vai' },
    { t:'El libro está debajo de la mesa y la mochila en el suelo.', why:'Quyển sách nằm TRÊN mặt bàn.', trap:'trên / dưới' },
    { t:'Los libros están sobre la mesa y la mochila en el suelo.', why:'Chỉ có MỘT quyển sách.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'el suelo', r:'swe.lo', vi:'sàn nhà' }, { w:'la mochila', r:'mo.tʃi.la', vi:'cái cặp sách' },
    { w:'el libro', r:'li.βɾo', vi:'quyển sách' }, { w:'sobre', r:'so.βɾe', vi:'trên' }
  ],
  gram:[{ p:'en el suelo, không phải «sobre el suelo»', vi:'Vật để dưới sàn thì nói en el suelo. Cũng vậy: en la mesa được dùng nhiều hơn sobre la mesa trong đời thường, dù cả hai đều đúng.',
    ex:['Las llaves están en el suelo.', 'Chìa khoá rơi dưới sàn.'] }] },

{ id:'es-37', lang:'es', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:120, y:220, pose:'point' }, { p:'desk', x:260, y:220 }, { p:'person', x:260, y:216, pose:'write' }
  ]},
  alt:'Một người đứng chỉ tay về phía bảng, người kia ngồi viết ở bàn.',
  opts:[
    { t:'El profesor explica y el alumno escribe.', ok:true },
    { t:'El profesor escribe y el alumno explica.', why:'Câu này đảo ngược hai vai.', trap:'đảo vai' },
    { t:'El profesor explica y el alumno lee.', why:'leer là đọc. Người ngồi ở bàn đang cầm bút.', trap:'đọc / viết' },
    { t:'Los profesores explican y el alumno escribe.', why:'Chỉ có MỘT người đứng giảng. explica và explican khác nhau ở chữ -n cuối.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'el profesor', r:'pɾo.fe.soɾ', vi:'giáo viên' }, { w:'el alumno', r:'a.lum.no', vi:'học sinh' },
    { w:'explicar', r:'eks.pli.kaɾ', vi:'giảng giải' }, { w:'escribir', r:'es.kɾi.βiɾ', vi:'viết' }
  ],
  gram:[{ p:'chữ -n cuối cho biết số nhiều', vi:'explica / explican, escribe / escriben, lee / leen. Chữ -n này phát âm rõ ràng, nên khác tiếng Pháp, ở đây nghe được số ngay ở động từ.',
    ex:['El alumno escribe. Los alumnos escriben.', 'Học sinh viết. Các học sinh viết.'] }] },

{ id:'es-38', lang:'es', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'desk', x:280, y:220 }
  ]},
  alt:'Hai cái bàn học đứng cách nhau trong lớp, cả hai đều trống.',
  opts:[
    { t:'Las dos mesas están vacías.', ok:true },
    { t:'Las dos mesas están llenas.', why:'lleno là đầy, vacío là trống. Trên cả hai bàn không có gì.', trap:'đầy / trống' },
    { t:'La mesa está vacía.', why:'Trong tranh có HAI cái bàn.', trap:'số ít / số nhiều' },
    { t:'Las dos sillas están vacías.', why:'Trong tranh là hai cái bàn, không phải ghế.', trap:'vật khác' }
  ],
  keys:[
    { w:'vacío / vacía', r:'ba.θi.o', vi:'trống' }, { w:'lleno / llena', r:'ʎe.no', vi:'đầy' },
    { w:'la mesa', r:'me.sa', vi:'cái bàn' }, { w:'dos', r:'dos', vi:'hai' }
  ],
  gram:[{ p:'tính từ hợp cả giống lẫn số', vi:'vacío → vacía → vacíos → vacías. Bốn dạng, và cả bốn đều nghe được rõ. Tiếng Tây Ban Nha để lộ giống và số nhiều hơn hẳn tiếng Pháp.',
    ex:['Las mesas están vacías.', 'Mấy cái bàn đều trống.'] }] },

{ id:'es-39', lang:'es', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'laptop', x:170, y:162 }, { p:'person', x:290, y:220, pose:'stand' }
  ]},
  alt:'Máy tính xách tay mở trên bàn, một người đứng bên cạnh.',
  opts:[
    { t:'El ordenador está encendido.', ok:true },
    { t:'El ordenador está apagado.', why:'apagado là đã tắt. Màn hình trong tranh đang mở và sáng.', trap:'bật / tắt' },
    { t:'El ordenador está encendida.', why:'ordenador là giống đực nên phải là encendido. Chữ -a cuối nghe rất rõ, đây là lỗi nghe được.', trap:'hợp giống' },
    { t:'Los ordenadores están encendidos.', why:'Chỉ có MỘT máy.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'encendido', r:'en.θen.di.ðo', vi:'đang bật' }, { w:'apagado', r:'a.pa.ɣa.ðo', vi:'đã tắt' },
    { w:'el ordenador', r:'oɾ.ðe.na.ðoɾ', vi:'máy tính' }, { w:'la pantalla', r:'pan.ta.ʎa', vi:'màn hình' }
  ],
  gram:[{ p:'encender và apagar', vi:'Dùng cho đèn, máy, bếp: enciende la luz (bật đèn), apaga la tele (tắt tivi). Ở dạng trạng thái thì đi với estar: está encendido, está apagado.',
    ex:['Apaga la luz, por favor.', 'Tắt đèn giúp tôi.'] }] },

{ id:'es-40', lang:'es', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'clock', x:320, y:70, time:'8:00' }, { p:'desk', x:150, y:220 }, { p:'person', x:150, y:216, pose:'sit' }
  ]},
  alt:'Đồng hồ chỉ đúng 8 giờ, một người đang ngồi ở bàn học.',
  opts:[
    { t:'La clase empieza a las ocho.', ok:true },
    { t:'La clase empieza a las dos.', why:'ocho là tám, dos là hai. Kim ngắn đang ở số 8.', trap:'số giờ' },
    { t:'La clase termina a las ocho.', why:'terminar là kết thúc, empezar là bắt đầu. Học sinh vừa ngồi vào bàn.', trap:'bắt đầu / kết thúc' },
    { t:'Las clases empiezan a las ocho.', why:'Câu đúng nói về MỘT tiết. empieza và empiezan khác nhau ở chữ -n cuối.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'la clase', r:'kla.se', vi:'tiết học, lớp học' }, { w:'empezar', r:'em.pe.θaɾ', vi:'bắt đầu' },
    { w:'terminar', r:'teɾ.mi.naɾ', vi:'kết thúc' }, { w:'a las ocho', r:'a las o.tʃo', vi:'lúc tám giờ' }
  ],
  gram:[{ p:'empezar đổi gốc: e → ie', vi:'empiezo, empiezas, empieza… nhưng empezamos (chúng tôi) thì giữ nguyên e. Nhóm động từ đổi gốc rất đông: querer/quiero, poder/puedo, dormir/duermo.',
    ex:['Empiezo a las nueve.', 'Tôi bắt đầu lúc chín giờ.'] }] },

/* ========== THỜI TIẾT VÀ THỜI GIAN ========== */
{ id:'es-41', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:320, y:60 }, { p:'person', x:160, y:220, pose:'walk' }
  ]},
  alt:'Trời nắng, một người đi bộ trên phố.',
  opts:[
    { t:'Hoy hace buen tiempo.', ok:true },
    { t:'Hoy hace mal tiempo.', why:'mal tiempo là thời tiết xấu. Trong tranh mặt trời đang chiếu.', trap:'đẹp / xấu trời' },
    { t:'Hoy hace frío.', why:'frío là lạnh. Người trong tranh không mặc áo khoác dày.', trap:'nóng / lạnh' },
    { t:'Ayer hizo buen tiempo.', why:'ayer và hizo là quá khứ. Tranh nói về hôm nay.', trap:'hiện tại / quá khứ' }
  ],
  keys:[
    { w:'hace buen tiempo', r:'a.θe βwen tjem.po', vi:'trời đẹp' }, { w:'hace frío', r:'a.θe fɾi.o', vi:'trời lạnh' },
    { w:'hoy', r:'oi', vi:'hôm nay' }, { w:'ayer', r:'a.ʝeɾ', vi:'hôm qua' }
  ],
  gram:[{ p:'thời tiết dùng HACER', vi:'hace frío, hace calor, hace sol, hace viento. Nhưng mưa và tuyết có động từ riêng: llueve, nieva. Không nói «hace lluvia».',
    ex:['Hace calor y llueve.', 'Trời nóng và đang mưa.'] }] },

{ id:'es-42', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'snowfall', x:200, y:24, n:8 }, { p:'person', x:150, y:220, pose:'walk' }, { p:'tree', x:320, y:220 }
  ]},
  alt:'Tuyết rơi, một người đi bộ trên phố, bên phải có một cái cây.',
  opts:[
    { t:'En invierno nieva mucho aquí.', ok:true },
    { t:'En verano nieva mucho aquí.', why:'el verano là mùa hè. Trong tranh có tuyết đang rơi.', trap:'mùa' },
    { t:'En invierno llueve mucho aquí.', why:'llover là mưa. Những chấm tròn rơi trong tranh là tuyết.', trap:'mưa / tuyết' },
    { t:'En invierno nieva muy aquí.', why:'muy chỉ đi trước tính từ. Với động từ phải dùng mucho.', trap:'muy / mucho' }
  ],
  keys:[
    { w:'el invierno', r:'im.bjeɾ.no', vi:'mùa đông' }, { w:'el verano', r:'be.ɾa.no', vi:'mùa hè' },
    { w:'nevar', r:'ne.βaɾ', vi:'có tuyết' }, { w:'aquí', r:'a.ki', vi:'ở đây' }
  ],
  gram:[{ p:'nevar cũng đổi gốc', vi:'nevar → nieva, llover → llueve. Hai động từ thời tiết này chỉ dùng ở ngôi thứ ba số ít, không có chủ ngữ thật.',
    ex:['Nieva. Llueve.', 'Trời có tuyết. Trời mưa.'] }] },

{ id:'es-43', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'calendar', x:290, y:60, text:'12' }, { p:'table', x:160, y:220, w:120 }
  ]},
  alt:'Tờ lịch treo tường chỉ ngày 12, bên trái là cái bàn.',
  opts:[
    { t:'Hoy es doce.', ok:true },
    { t:'Hoy es dos.', why:'doce là mười hai, dos là hai. Trên lịch ghi số 12.', trap:'hai / mười hai' },
    { t:'Son las doce.', why:'Câu này nói về GIỜ, không phải ngày. Tranh là tờ lịch, không phải đồng hồ.', trap:'giờ / ngày' },
    { t:'Hoy está doce.', why:'Ngày tháng thì dùng ser, không dùng estar.', trap:'ser / estar' }
  ],
  keys:[
    { w:'el calendario', r:'ka.len.da.ɾjo', vi:'tờ lịch' }, { w:'doce', r:'do.θe', vi:'mười hai' },
    { w:'hoy', r:'oi', vi:'hôm nay' }, { w:'el día', r:'di.a', vi:'ngày' }
  ],
  gram:[{ p:'el día là giống ĐỰC dù kết thúc bằng -a', vi:'Một nhóm từ gốc Hy Lạp kết thúc bằng -a nhưng là giống đực: el día, el problema, el tema, el mapa, el idioma. Phải nhớ riêng từng từ.',
    ex:['el problema, el mapa', 'vấn đề, tấm bản đồ'] }] },

{ id:'es-44', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'suitcase', x:170, y:220 }, { p:'coat', x:300, y:180 }, { p:'hanger', x:300, y:150 }
  ]},
  alt:'Cái vali để dưới sàn, áo khoác treo trên móc bên phải.',
  opts:[
    { t:'Va a salir de viaje.', ok:true },
    { t:'Ha salido de viaje.', why:'ha salido là đã đi rồi. Vali vẫn còn ở nhà.', trap:'sắp đi / đã đi' },
    { t:'Está saliendo de viaje.', why:'está saliendo là đang ra khỏi cửa. Vali còn để giữa phòng, áo còn treo.', trap:'sắp / đang' },
    { t:'Va a salir de casa.', why:'salir de viaje là đi xa, salir de casa chỉ là ra khỏi nhà. Cái vali cho biết đây là chuyến đi xa.', trap:'cụm gần nghĩa' }
  ],
  keys:[
    { w:'salir de viaje', r:'sa.liɾ ðe βja.xe', vi:'đi xa, lên đường' }, { w:'la maleta', r:'ma.le.ta', vi:'cái vali' },
    { w:'el abrigo', r:'a.βɾi.ɣo', vi:'áo khoác' }, { w:'la casa', r:'ka.sa', vi:'ngôi nhà' }
  ],
  gram:[{ p:'ir a + động từ nguyên thể', vi:'Đây là cách nói tương lai gần, giống aller trong tiếng Pháp và be going to trong tiếng Anh: voy a comer, vas a salir. Rất hay dùng, hơn cả thì tương lai chính thức.',
    ex:['Voy a estudiar esta noche.', 'Tối nay tôi sẽ học.'] }] },

{ id:'es-45', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'cake', x:165, y:158 }, { p:'cup', x:225, y:158 }
  ]},
  alt:'Trên bàn có một miếng bánh ngọt và một cái tách.',
  opts:[
    { t:'Hay un pastel y una taza sobre la mesa.', ok:true },
    { t:'Hay un pastel y un vaso sobre la mesa.', why:'una taza là cái tách có tay cầm, un vaso là ly thẳng.', trap:'vật khác' },
    { t:'Hay una pastel y una taza sobre la mesa.', why:'pastel là giống đực nên phải là UN pastel.', trap:'giống' },
    { t:'Hay unos pasteles y una taza sobre la mesa.', why:'Chỉ có MỘT miếng bánh.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'el pastel', r:'pas.tel', vi:'bánh ngọt' }, { w:'la taza', r:'ta.θa', vi:'cái tách' },
    { w:'el vaso', r:'ba.so', vi:'cái ly' }, { w:'y', r:'i', vi:'và' }
  ],
  gram:[{ p:'y đổi thành e trước i-', vi:'Chữ «và» là y, nhưng nếu từ sau bắt đầu bằng âm i thì đổi thành e: padre e hijo, España e Italia. Cũng vậy, o (hoặc) đổi thành u trước âm o: siete u ocho.',
    ex:['padre e hijo, siete u ocho', 'cha và con trai, bảy hoặc tám'] }] },

/* ========== TRẠNG THÁI VÀ SỐ LƯỢNG ========== */
{ id:'es-46', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bin', x:150, y:220 }, { p:'box', x:280, y:220 }
  ]},
  alt:'Thùng rác bên trái, cái hộp giấy bên phải, cả hai đều đặt dưới sàn.',
  opts:[
    { t:'La papelera está a la izquierda de la caja.', ok:true },
    { t:'La papelera está a la derecha de la caja.', why:'Thùng rác đứng bên TRÁI.', trap:'trái / phải' },
    { t:'La papelera está dentro de la caja.', why:'Hai vật đứng riêng trên sàn.', trap:'bên cạnh / bên trong' },
    { t:'La caja está a la izquierda de la papelera.', why:'Câu này đảo ngược hai vật.', trap:'đảo vai' }
  ],
  keys:[
    { w:'la papelera', r:'pa.pe.le.ɾa', vi:'thùng rác giấy' }, { w:'la caja', r:'ka.xa', vi:'cái hộp' },
    { w:'la basura', r:'ba.su.ɾa', vi:'rác' }, { w:'dentro de', r:'den.tɾo ðe', vi:'bên trong' }
  ],
  gram:[{ p:'papelera và cubo de basura', vi:'la papelera là sọt giấy trong phòng, el cubo de basura là thùng rác trong bếp. Đồ vật giống nhau nhưng tên khác theo chỗ đặt.',
    ex:['Tira el papel a la papelera.', 'Vứt tờ giấy vào sọt.'] }] },

{ id:'es-47', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'apple', x:160, y:158 }, { p:'apple', x:195, y:158 },
    { p:'banana', x:235, y:158 }
  ]},
  alt:'Trên bàn có hai quả táo và một quả chuối.',
  opts:[
    { t:'Hay dos manzanas y un plátano.', ok:true },
    { t:'Hay una manzana y dos plátanos.', why:'Câu này đảo ngược số lượng: có hai quả táo và một quả chuối.', trap:'đảo số lượng' },
    { t:'Hay doce manzanas y un plátano.', why:'dos là hai, doce là mười hai.', trap:'hai / mười hai' },
    { t:'Hay dos peras y un plátano.', why:'la pera là quả lê. Quả trong tranh tròn và có cuống ngắn.', trap:'vật khác' }
  ],
  keys:[
    { w:'la manzana', r:'man.θa.na', vi:'quả táo' }, { w:'el plátano', r:'pla.ta.no', vi:'quả chuối' },
    { w:'la pera', r:'pe.ɾa', vi:'quả lê' }, { w:'dos', r:'dos', vi:'hai' }
  ],
  gram:[{ p:'plátano hay banana?', vi:'Ở Tây Ban Nha là el plátano, ở nhiều nước Mỹ Latinh là la banana hoặc el banano. Tên trái cây là chỗ khác biệt vùng miền nhiều nhất trong tiếng Tây Ban Nha.',
    ex:['un plátano, dos plátanos', 'một quả chuối, hai quả chuối'] }] },

{ id:'es-48', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:180, y:220 }, { p:'person', x:180, y:216, pose:'phone' }, { p:'tv', x:320, y:220 }
  ]},
  alt:'Một người ngồi trên sofa nghe điện thoại, tivi tắt ở bên phải.',
  opts:[
    { t:'Está hablando por teléfono.', ok:true },
    { t:'Está viendo la tele.', why:'Cái tivi trong tranh đang tắt, và người này áp điện thoại vào tai.', trap:'đúng vật, sai việc' },
    { t:'Estaba hablando por teléfono.', why:'estaba là quá khứ. Việc đang diễn ra trước mắt.', trap:'hiện tại / quá khứ' },
    { t:'Está hablando para teléfono.', why:'Phương tiện liên lạc dùng por: por teléfono, por correo. Không dùng para.', trap:'por / para' }
  ],
  keys:[
    { w:'hablar por teléfono', r:'a.βlaɾ poɾ te.le.fo.no', vi:'nói chuyện điện thoại' },
    { w:'ver la tele', r:'beɾ la te.le', vi:'xem tivi' }, { w:'estaba', r:'es.ta.βa', vi:'đã đang (quá khứ)' },
    { w:'por', r:'poɾ', vi:'bằng, qua' }
  ],
  gram:[{ p:'por chỉ phương tiện', vi:'por teléfono, por correo, por internet — chữ por dùng cho cách thức và đường truyền. Còn para thì cho người nhận: una carta para ti.',
    ex:['Te llamo por teléfono.', 'Tôi sẽ gọi điện cho bạn.'] }] },

{ id:'es-49', lang:'es', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:150, y:220 }, { p:'cat', x:270, y:220, pose:'sit' }, { p:'bowl', x:330, y:220 }
  ]},
  alt:'Con mèo ngồi giữa cái tủ và cái bát thức ăn.',
  opts:[
    { t:'El gato está entre el armario y el cuenco.', ok:true },
    { t:'El gato está dentro del armario.', why:'Con mèo ngồi bên ngoài, trên sàn.', trap:'giữa / bên trong' },
    { t:'El gato está detrás del cuenco.', why:'Con mèo ngồi bên cạnh, cùng một hàng với cái bát.', trap:'giữa / phía sau' },
    { t:'El perro está entre el armario y el cuenco.', why:'Con vật trong tranh có tai nhọn và đuôi cong — đó là con mèo.', trap:'chủ thể' }
  ],
  keys:[
    { w:'el gato', r:'ɡa.to', vi:'con mèo' }, { w:'el armario', r:'aɾ.ma.ɾjo', vi:'cái tủ' },
    { w:'el cuenco', r:'kwen.ko', vi:'cái bát' }, { w:'entre', r:'en.tɾe', vi:'giữa' }
  ],
  gram:[{ p:'entre không rút với el', vi:'Chỉ a và de mới rút: al, del. entre el armario giữ nguyên hai từ, không có dạng «entrel».',
    ex:['entre la cama y la ventana', 'giữa giường và cửa sổ'] }] },

{ id:'es-50', lang:'es', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:140 }, { p:'glasses', x:180, y:158 },
    { p:'book', x:290, y:220 }
  ]},
  alt:'Cặp kính đặt trên bàn, quyển sách nằm dưới sàn bên phải.',
  opts:[
    { t:'Las gafas están sobre la mesa.', ok:true },
    { t:'La gafa está sobre la mesa.', why:'gafas chỉ dùng ở số nhiều khi nói về cặp kính.', trap:'luôn số nhiều' },
    { t:'Las gafas están en el suelo.', why:'Quyển sách nằm dưới sàn, còn cặp kính thì trên bàn.', trap:'đảo vai' },
    { t:'Las gafas están debajo de la mesa.', why:'Cặp kính nằm TRÊN mặt bàn.', trap:'trên / dưới' }
  ],
  keys:[
    { w:'las gafas', r:'ɡa.fas', vi:'cặp kính (luôn số nhiều)' },
    { w:'los anteojos', r:'an.te.o.xos', vi:'cặp kính (Mỹ Latinh)' },
    { w:'el suelo', r:'swe.lo', vi:'sàn nhà' }, { w:'la mesa', r:'me.sa', vi:'cái bàn' }
  ],
  gram:[{ p:'từ chỉ dùng ở số nhiều', vi:'las gafas (kính), las tijeras (kéo), los pantalones (quần), las vacaciones (kỳ nghỉ). Một vật nhưng luôn nói số nhiều, vì nó gồm hai phần giống nhau.',
    ex:['Las vacaciones empiezan mañana.', 'Kỳ nghỉ bắt đầu từ mai.'] }] }
  );
})();
