/* ============================================================
   LangLab — NGHE & CHỌN TRANH · TIẾNG NGA
   ------------------------------------------------------------
   Do LangLab tự soạn. Tranh ghép từ js/scene-svg.js, không dùng ảnh
   của bên thứ ba và không dùng ảnh do AI sinh.

   BẪY NGHE ĐANG DÙNG (mỗi câu ít nhất hai kiểu khác nhau):
     · cách của danh từ sau giới từ — на столе (giới cách) ·
       под столом (công cụ cách) · в столе · около стола (sinh cách)
     · есть với нет + sinh cách: есть книга / нет книги
     · giống của số: один стол · одна книга · одно окно ·
       два стола với две книги
     · số 13–30, 15–50, 16–60, 17–70, 18–80 chỉ khác phần đuôi
     · thể động từ: пишет (chưa xong) · написал (đã xong) ·
       будет писать (sẽ làm)
     · động từ vị trí лежит (nằm) · стоит (đứng) · висит (treo) —
       tiếng Nga bắt buộc chọn đúng một trong ba
     · идёт (đi bộ) với едет (đi bằng xe) — hai động từ khác hẳn nhau
     · открыт · закрыт · включён · выключен
     · ещё не (vẫn chưa) với уже (đã… rồi)
     · giới từ на · в · под · за · перед · между · рядом с · около · у

   LƯU Ý khi soạn thêm: trọng âm tiếng Nga đổi cả nguyên âm (вода đọc
   вада) nên KHÔNG lấy cặp chỉ khác trọng âm làm bẫy chọn đáp án —
   chỉ đưa vào phần ngữ pháp để học viên biết mà đề phòng.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ========== ЕСТЬ · НЕТ · VỊ TRÍ ========== */
{ id:'ru-01', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:150, y:220 }, { p:'cat', x:158, y:186, pose:'sit', s:0.8 },
    { p:'window', x:280, y:30, view:'sun' }
  ]},
  alt:'Con mèo ngồi trên giường, cửa sổ ở bên phải.',
  opts:[
    { t:'Кошка на кровати.', ok:true },
    { t:'Кошка под кроватью.', why:'на + giới cách là ở trên, под + công cụ cách là ở dưới. Con mèo ngồi trên mặt giường.', trap:'trên / dưới' },
    { t:'Собака на кровати.', why:'Собака là con chó. Con vật trong tranh có tai nhọn và ria mép.', trap:'chủ thể' },
    { t:'Кошки нет на кровати.', why:'нет + sinh cách là không có. Cả câu chỉ đổi mấy chữ đầu.', trap:'есть / нет' }
  ],
  keys:[
    { w:'кошка', r:'kóshka', vi:'con mèo' }, { w:'кровать', r:'krovát’', vi:'cái giường' },
    { w:'на', r:'na', vi:'trên' }, { w:'под', r:'pod', vi:'dưới' }
  ],
  gram:[{ p:'на кровати và под кроватью', vi:'Cùng một danh từ mà đổi đuôi theo giới từ: на + giới cách (кровати), под + công cụ cách (кроватью). Nghe đuôi là biết vị trí.',
    ex:['Кошка на кровати.', 'Con mèo ở trên giường.'] }] },

{ id:'ru-02', lang:'ru', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:140, y:220 }, { p:'chair', x:250, y:220 }
  ]},
  alt:'Cái bàn học trống không, bên cạnh là một cái ghế.',
  opts:[
    { t:'На столе нет книги.', ok:true },
    { t:'На столе есть книга.', why:'есть là có, нет là không có. Mặt bàn trong tranh trống trơn.', trap:'есть / нет' },
    { t:'На стуле нет книги.', why:'Cái ghế có thật nhưng câu đúng nói về mặt bàn.', trap:'đúng vật, sai mốc' },
    { t:'Под столом нет книги.', why:'Gầm bàn cũng trống, nhưng câu đúng nói về mặt bàn.', trap:'trên / dưới' }
  ],
  keys:[
    { w:'стол', r:'stol', vi:'cái bàn' }, { w:'книга', r:'kníga', vi:'quyển sách' },
    { w:'нет', r:'net', vi:'không có' }, { w:'стул', r:'stul', vi:'cái ghế' }
  ],
  gram:[{ p:'нет + sinh cách', vi:'Sau нет, danh từ phải đổi sang sinh cách: есть книга → нет книги. Đuôi -и chính là dấu hiệu của câu phủ định.',
    ex:['На столе нет книги.', 'Trên bàn không có quyển sách nào.'] }] },

{ id:'ru-03', lang:'ru', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:240, y:220 }, { p:'chair', x:130, y:220 }
  ]},
  alt:'Cái ghế đứng bên trái, cái bàn học ở bên phải.',
  opts:[
    { t:'Стул стоит рядом со столом.', ok:true },
    { t:'Стул стоит на столе.', why:'рядом с là bên cạnh, на là bên trên. Cái ghế đứng dưới sàn.', trap:'cạnh / trên' },
    { t:'Стол стоит рядом со стулом.', why:'Đổi chỗ hai chủ thể — các chữ vẫn y nguyên.', trap:'hoán chủ thể' },
    { t:'Стул лежит рядом со столом.', why:'лежит là nằm. Cái ghế đứng bằng bốn chân nên phải dùng стоит.', trap:'лежит / стоит / висит' }
  ],
  keys:[
    { w:'рядом', r:'rjádom', vi:'bên cạnh' }, { w:'стоять', r:'stoját’', vi:'đứng' },
    { w:'лежать', r:'lezhát’', vi:'nằm' }, { w:'стул', r:'stul', vi:'cái ghế' }
  ],
  gram:[{ p:'лежит · стоит · висит', vi:'Tiếng Nga bắt vật phải có tư thế: sách nằm (лежит), chai đứng (стоит), tranh treo (висит). Không có câu chung chung như «cái bàn có quyển sách».',
    ex:['Стул стоит рядом со столом.', 'Cái ghế đứng cạnh cái bàn.'] }] },

{ id:'ru-04', lang:'ru', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'bag', x:170, y:216, s:0.8 },
    { p:'book', x:170, y:158 }
  ]},
  alt:'Quyển sách trên mặt bàn, cái cặp để dưới gầm bàn.',
  opts:[
    { t:'Сумка под столом.', ok:true },
    { t:'Сумка на столе.', why:'Trên mặt bàn là quyển sách. Cái cặp nằm dưới gầm.', trap:'trên / dưới' },
    { t:'Книга под столом.', why:'Đổi mỗi chủ thể, phần còn lại giữ nguyên.', trap:'hoán chủ thể' },
    { t:'Сумки нет под столом.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'сумка', r:'súmka', vi:'cái cặp, túi xách' }, { w:'под', r:'pod', vi:'dưới' },
    { w:'книга', r:'kníga', vi:'quyển sách' }, { w:'стол', r:'stol', vi:'cái bàn' }
  ],
  gram:[{ p:'под + công cụ cách', vi:'под столом, под кроватью, под стулом — đuôi -ом hoặc -ью. Còn на thì đi với giới cách: на столе.',
    ex:['Сумка под столом.', 'Cái cặp ở dưới gầm bàn.'] }] },

{ id:'ru-05', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'tree', x:150, y:220 },
    { p:'dog', x:250, y:220, s:1.1 }
  ]},
  alt:'Con chó đứng bên cạnh gốc cây.',
  opts:[
    { t:'Собака стоит около дерева.', ok:true },
    { t:'Собака стоит на дереве.', why:'Con chó đứng dưới đất chứ không ở trên cây.', trap:'cạnh / trên' },
    { t:'Птица стоит около дерева.', why:'Птица là con chim. Con vật trong tranh có bốn chân và cái đuôi.', trap:'chủ thể' },
    { t:'Собаки нет около дерева.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'собака', r:'sobáka', vi:'con chó' }, { w:'птица', r:'ptítsa', vi:'con chim' },
    { w:'дерево', r:'dérevo', vi:'cái cây' }, { w:'около', r:'ókolo', vi:'gần, bên cạnh' }
  ],
  gram:[{ p:'около + sinh cách', vi:'около дерева, около стола, около дома — đuôi -а hoặc -я. Đây cũng là đuôi của câu phủ định нет, nên phải nghe cả giới từ mới phân biệt được.',
    ex:['Собака стоит около дерева.', 'Con chó đứng cạnh cái cây.'] }] },

{ id:'ru-06', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:150, y:36, view:'sun' }, { p:'clock', x:280, y:72, r:28, time:'9:00' },
    { p:'sofa', x:180, y:220 }
  ]},
  alt:'Cái đồng hồ treo bên phải cửa sổ.',
  opts:[
    { t:'Часы висят рядом с окном.', ok:true },
    { t:'Часы стоят рядом с окном.', why:'Đồng hồ gắn trên tường nên phải dùng висят. стоят là đứng dưới đất.', trap:'лежит / стоит / висит' },
    { t:'Часы висят под окном.', why:'Đồng hồ treo ngang tầm cửa sổ, về phía bên phải.', trap:'cạnh / dưới' },
    { t:'Часы висят рядом с диваном.', why:'Ghế sofa có thật nhưng ở dưới sàn, còn đồng hồ treo trên tường.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'часы', r:'chasý', vi:'cái đồng hồ' }, { w:'окно', r:'oknó', vi:'cửa sổ' },
    { w:'висеть', r:'visét’', vi:'treo' }, { w:'диван', r:'diván', vi:'ghế sofa' }
  ],
  gram:[{ p:'часы luôn số nhiều', vi:'Chữ часы chỉ có dạng số nhiều, nên động từ cũng phải số nhiều: часы висят chứ không phải часы висит.',
    ex:['Часы висят рядом с окном.', 'Đồng hồ treo cạnh cửa sổ.'] }] },

{ id:'ru-07', lang:'ru', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:110, y:220 }, { p:'desk', x:290, y:220 },
    { p:'bag', x:200, y:220, s:1.2 }
  ]},
  alt:'Cái cặp đặt dưới sàn, ở khoảng giữa hai cái bàn.',
  opts:[
    { t:'Сумка стоит между столами.', ok:true },
    { t:'Сумка стоит на столе.', why:'Cái cặp nằm dưới sàn, không ở trên mặt bàn nào.', trap:'giữa / trên' },
    { t:'Сумка стоит около стола.', why:'около chỉ nói cạnh một cái bàn. Ở đây cặp nằm giữa hai cái.', trap:'cạnh / giữa' },
    { t:'Сумка висит между столами.', why:'Cái cặp đặt dưới sàn nên dùng стоит, không dùng висит.', trap:'лежит / стоит / висит' }
  ],
  keys:[
    { w:'между', r:'mézhdu', vi:'ở giữa' }, { w:'сумка', r:'súmka', vi:'cái cặp' },
    { w:'стол', r:'stol', vi:'cái bàn' }, { w:'около', r:'ókolo', vi:'gần, cạnh' }
  ],
  gram:[{ p:'между + công cụ cách số nhiều', vi:'между столами, между окнами — đuôi -ами. Giới từ này luôn cần hai vật trở lên.',
    ex:['Сумка стоит между столами.', 'Cái cặp nằm giữa hai cái bàn.'] }] },

{ id:'ru-08', lang:'ru', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:80, y:220 }, { p:'table', x:230, y:220, w:130 },
    { p:'egg', x:210, y:158 }, { p:'egg', x:242, y:158 }
  ]},
  alt:'Hai quả trứng nằm trên mặt bàn, tủ lạnh đóng kín ở bên trái.',
  opts:[
    { t:'Яйца лежат на столе.', ok:true },
    { t:'Яйца лежат в холодильнике.', why:'Tủ lạnh đang đóng, hai quả trứng nằm trên bàn.', trap:'trong / trên' },
    { t:'Яйцо лежит на столе.', why:'Яйцо là một quả, яйца là nhiều quả. Trên bàn có hai quả.', trap:'số ít / số nhiều' },
    { t:'Яиц нет на столе.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'яйцо', r:'jajtsó', vi:'quả trứng' }, { w:'холодильник', r:'kholodíl’nik', vi:'tủ lạnh' },
    { w:'лежать', r:'lezhát’', vi:'nằm' }, { w:'в', r:'v', vi:'trong' }
  ],
  gram:[{ p:'в холодильнике và на столе', vi:'в dùng cho vật có lòng chứa (tủ lạnh, phòng, cặp), на dùng cho bề mặt (bàn, ghế, sàn). Chọn sai giới từ là sai hẳn.',
    ex:['Яйца лежат на столе.', 'Mấy quả trứng nằm trên bàn.'] }] },

/* ========== GIỐNG VÀ SỐ ĐẾM ========== */
{ id:'ru-09', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'cat', x:130, y:176, pose:'sit', s:0.75 },
    { p:'cat', x:275, y:220, pose:'lie', s:0.85 }, { p:'lamp', x:350, y:220 }
  ]},
  alt:'Một con mèo ngồi trên ghế sofa, một con mèo khác nằm dưới sàn.',
  opts:[
    { t:'Здесь две кошки.', ok:true },
    { t:'Здесь два кошки.', why:'кошка là giống cái nên phải dùng две. два chỉ đi với giống đực và giống trung.', trap:'giống của số' },
    { t:'Здесь три кошки.', why:'две là hai, три là ba. Trong tranh có hai con.', trap:'số lượng' },
    { t:'Здесь две собаки.', why:'собака là con chó. Cả hai con trong tranh đều là mèo.', trap:'chủ thể' }
  ],
  keys:[
    { w:'два', r:'dva', vi:'hai (giống đực, giống trung)' }, { w:'две', r:'dve', vi:'hai (giống cái)' },
    { w:'три', r:'tri', vi:'ba' }, { w:'здесь', r:'zdes’', vi:'ở đây' }
  ],
  gram:[{ p:'два và две', vi:'Chỉ riêng số 2 mới đổi theo giống: два стола (bàn, giống đực) nhưng две книги (sách, giống cái). Từ số 3 trở đi thì không đổi nữa.',
    ex:['Здесь две кошки.', 'Ở đây có hai con mèo.'] }] },

{ id:'ru-10', lang:'ru', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:180, y:220, w:120 }, { p:'book', x:150, y:158 },
    { p:'book', x:180, y:158 }, { p:'book', x:210, y:158 }
  ]},
  alt:'Ba quyển sách đặt cạnh nhau trên bàn.',
  opts:[
    { t:'На столе три книги.', ok:true },
    { t:'На столе три книг.', why:'Sau 2, 3, 4 danh từ phải ở sinh cách số ít: три книги. Дạng книг chỉ dùng từ số 5 trở lên.', trap:'cách sau số đếm' },
    { t:'На столе четыре книги.', why:'три là ba, четыре là bốn. Trên bàn có ba quyển.', trap:'số lượng' },
    { t:'На столе нет книги.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'три', r:'tri', vi:'ba' }, { w:'четыре', r:'chetýre', vi:'bốn' },
    { w:'книга', r:'kníga', vi:'quyển sách' }, { w:'пять', r:'pjat’', vi:'năm' }
  ],
  gram:[{ p:'2·3·4 + sinh cách số ít, từ 5 + sinh cách số nhiều', vi:'три книги nhưng пять книг. Đuôi của danh từ chính là manh mối cho biết con số đứng trước là bao nhiêu.',
    ex:['На столе три книги.', 'Trên bàn có ba quyển sách.'] }] },

{ id:'ru-11', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:140, y:220, pose:'stand' },
    { p:'person', x:230, y:220, pose:'wave' }, { p:'tree', x:330, y:220 }
  ]},
  alt:'Hai người đứng ngoài đường, một người đang giơ tay vẫy.',
  opts:[
    { t:'На улице два человека.', ok:true },
    { t:'На улице две человека.', why:'человек là giống đực nên phải dùng два.', trap:'giống của số' },
    { t:'На улице три человека.', why:'два là hai, три là ba. Trong tranh có hai người.', trap:'số lượng' },
    { t:'На улице нет людей.', why:'нет + sinh cách là không có ai.', trap:'есть / нет' }
  ],
  keys:[
    { w:'человек', r:'chelovék', vi:'người' }, { w:'люди', r:'ljúdi', vi:'mọi người (số nhiều của человек)' },
    { w:'улица', r:'úlitsa', vi:'đường phố' }, { w:'два', r:'dva', vi:'hai' }
  ],
  gram:[{ p:'человек và люди', vi:'Số nhiều của человек là люди, hoàn toàn khác gốc. Nhưng sau số đếm thì lại quay về человек: два человека, пять человек.',
    ex:['На улице два человека.', 'Ngoài đường có hai người.'] }] },

{ id:'ru-12', lang:'ru', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'apple', x:145, y:158 },
    { p:'apple', x:178, y:158 }, { p:'apple', x:211, y:158 }, { p:'apple', x:244, y:158 }
  ]},
  alt:'Bốn quả táo xếp hàng trên bàn.',
  opts:[
    { t:'На столе четыре яблока.', ok:true },
    { t:'На столе пять яблок.', why:'Sau пять thì danh từ đổi thành яблок. Trên bàn có bốn quả.', trap:'cách sau số đếm' },
    { t:'На столе три яблока.', why:'четыре là bốn, три là ba.', trap:'số lượng' },
    { t:'На столе нет яблок.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'яблоко', r:'jábloko', vi:'quả táo' }, { w:'четыре', r:'chetýre', vi:'bốn' },
    { w:'пять', r:'pjat’', vi:'năm' }, { w:'стол', r:'stol', vi:'cái bàn' }
  ],
  gram:[{ p:'четыре яблока và пять яблок', vi:'Nghe đuôi danh từ là đoán ngay được con số: đuôi -а thì con số là 2–4, đuôi cụt thì con số từ 5 trở lên.',
    ex:['На столе четыре яблока.', 'Trên bàn có bốn quả táo.'] }] },

{ id:'ru-13', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shoe', x:140, y:220 }, { p:'shoe', x:215, y:220, flip:true },
    { p:'door', x:300, y:100 }
  ]},
  alt:'Một đôi giày để dưới sàn cạnh cửa ra vào.',
  opts:[
    { t:'У двери стоит одна пара обуви.', ok:true },
    { t:'У двери стоят две пары обуви.', why:'Hai chiếc trong tranh là MỘT đôi, không phải hai đôi.', trap:'số lượng' },
    { t:'У окна стоит одна пара обуви.', why:'дверь là cửa ra vào, окно là cửa sổ. Trong tranh không vẽ cửa sổ.', trap:'đúng vật, sai mốc' },
    { t:'У двери лежит одна пара обуви.', why:'Đôi giày đặt thẳng trên sàn nên dùng стоит.', trap:'лежит / стоит / висит' }
  ],
  keys:[
    { w:'пара', r:'pára', vi:'đôi, cặp' }, { w:'обувь', r:'óbuv’', vi:'giày dép' },
    { w:'дверь', r:'dver’', vi:'cửa ra vào' }, { w:'у', r:'u', vi:'ở cạnh, ở chỗ' }
  ],
  gram:[{ p:'у + sinh cách', vi:'у двери, у окна, у стола — nghĩa là ngay sát bên cạnh. Đây là giới từ rất hay gặp khi tả tranh.',
    ex:['У двери стоит одна пара обуви.', 'Cạnh cửa có một đôi giày.'] }] },

{ id:'ru-14', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:44 }, { p:'tree', x:180, y:220 },
    { p:'bird', x:290, y:218 }
  ]},
  alt:'Một con chim đậu dưới đất, cạnh một cái cây.',
  opts:[
    { t:'Одна птица стоит на земле.', ok:true },
    { t:'Одна птица сидит на дереве.', why:'Con chim đứng dưới đất chứ không đậu trên cây.', trap:'vị trí' },
    { t:'Один птица стоит на земле.', why:'птица là giống cái nên phải dùng одна, không dùng один.', trap:'giống của số' },
    { t:'Две птицы стоят на земле.', why:'одна là một, две là hai. Trong tranh có một con.', trap:'số lượng' }
  ],
  keys:[
    { w:'птица', r:'ptítsa', vi:'con chim' }, { w:'земля', r:'zemljá', vi:'mặt đất' },
    { w:'один', r:'odín', vi:'một (giống đực)' }, { w:'одна', r:'odná', vi:'một (giống cái)' }
  ],
  gram:[{ p:'один · одна · одно', vi:'Số 1 đổi theo giống của danh từ: один стол, одна книга, одно окно. Nghe đuôi của số là biết danh từ theo sau thuộc giống nào.',
    ex:['Одна птица стоит на земле.', 'Có một con chim đứng dưới đất.'] }] },

{ id:'ru-15', lang:'ru', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'car', x:150, y:220 },
    { p:'bicycle', x:300, y:220 }
  ]},
  alt:'Một chiếc ô tô bên trái, một chiếc xe đạp bên phải.',
  opts:[
    { t:'На улице стоит одна машина.', ok:true },
    { t:'На улице стоит один машина.', why:'машина là giống cái nên phải dùng одна.', trap:'giống của số' },
    { t:'На улице стоят две машины.', why:'Vật bên phải là xe đạp, không phải ô tô.', trap:'số lượng' },
    { t:'На улице стоит один велосипед.', why:'машина là ô tô, велосипед là xe đạp. Câu đúng nói về chiếc ô tô.', trap:'chủ thể' }
  ],
  keys:[
    { w:'машина', r:'mashína', vi:'ô tô' }, { w:'велосипед', r:'velosipéd', vi:'xe đạp' },
    { w:'улица', r:'úlitsa', vi:'đường phố' }, { w:'стоять', r:'stoját’', vi:'đứng, đỗ' }
  ],
  gram:[{ p:'машина стоит', vi:'Xe đỗ ngoài đường thì dùng стоит. Nếu xe đang chạy thì phải nói машина едет.',
    ex:['На улице стоит одна машина.', 'Ngoài đường có một chiếc ô tô đang đỗ.'] }] },

{ id:'ru-16', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:110, y:50 }, { p:'picture', x:230, y:50 },
    { p:'sofa', x:190, y:220 }
  ]},
  alt:'Hai bức tranh treo cạnh nhau trên tường.',
  opts:[
    { t:'На стене висят две картины.', ok:true },
    { t:'На стене стоят две картины.', why:'Tranh gắn trên tường nên phải dùng висят.', trap:'лежит / стоит / висит' },
    { t:'На стене висят три картины.', why:'две là hai, три là ba. Trên tường treo hai bức.', trap:'số lượng' },
    { t:'На стене висят два картины.', why:'картина là giống cái nên phải dùng две.', trap:'giống của số' }
  ],
  keys:[
    { w:'картина', r:'kartína', vi:'bức tranh' }, { w:'стена', r:'stená', vi:'bức tường' },
    { w:'висеть', r:'visét’', vi:'treo' }, { w:'две', r:'dve', vi:'hai (giống cái)' }
  ],
  gram:[{ p:'на стене', vi:'Tường dùng giới từ на chứ không dùng в: картина на стене. Còn в стене nghĩa là nằm bên trong bức tường.',
    ex:['На стене висят две картины.', 'Trên tường treo hai bức tranh.'] }] },

/* ========== SỐ VÀ GIỜ ========== */
{ id:'ru-17', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:120, y:82, time:'10:00', r:34 }, { p:'table', x:250, y:220, w:120 },
    { p:'cup', x:250, y:158 }
  ]},
  alt:'Đồng hồ chỉ đúng 10 giờ, trên bàn có một cái cốc.',
  opts:[
    { t:'Сейчас десять часов.', ok:true },
    { t:'Сейчас двенадцать часов.', why:'десять là mười, двенадцать là mười hai. Kim ngắn đang ở số 10.', trap:'giờ: số' },
    { t:'Сейчас десять часов десять минут.', why:'Kim dài đang chỉ thẳng lên số 12, tức là đúng giờ.', trap:'giờ: phút' },
    { t:'Сейчас девять часов.', why:'девять là chín, десять là mười — hai từ nghe rất gần nhau.', trap:'gần âm: девять · десять' }
  ],
  keys:[
    { w:'сейчас', r:'sejchás', vi:'bây giờ' }, { w:'час', r:'chas', vi:'giờ, tiếng đồng hồ' },
    { w:'минута', r:'minúta', vi:'phút' }, { w:'десять', r:'désjat’', vi:'mười' }
  ],
  gram:[{ p:'час · часа · часов', vi:'один час · два часа · пять часов. Danh từ đổi ba dạng theo con số đứng trước, nghe đuôi là đoán được số.',
    ex:['Сейчас десять часов.', 'Bây giờ là mười giờ.'] }] },

{ id:'ru-18', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:120, y:82, time:'3:30', r:34 }, { p:'sofa', x:260, y:220 }
  ]},
  alt:'Đồng hồ chỉ 3 giờ rưỡi.',
  opts:[
    { t:'Сейчас три часа тридцать минут.', ok:true },
    { t:'Сейчас три часа тринадцать минут.', why:'тридцать là 30, тринадцать là 13 — hai từ chỉ khác phần đuôi.', trap:'13 / 30' },
    { t:'Сейчас четыре часа тридцать минут.', why:'три là ba, четыре là bốn. Kim ngắn nằm giữa 3 và 4.', trap:'giờ: số' },
    { t:'Сейчас три часа тридцать секунд.', why:'минута là phút, секунда là giây.', trap:'phút / giây' }
  ],
  keys:[
    { w:'тридцать', r:'trídtsat’', vi:'ba mươi' }, { w:'тринадцать', r:'trinádtsat’', vi:'mười ba' },
    { w:'минута', r:'minúta', vi:'phút' }, { w:'секунда', r:'sekúnda', vi:'giây' }
  ],
  gram:[{ p:'тринадцать và тридцать', vi:'Dãy 11–19 kết thúc bằng -надцать, dãy hàng chục kết thúc bằng -дцать hoặc -десят. Nghe được phần đuôi là phân biệt được ngay.',
    ex:['Сейчас три часа тридцать минут.', 'Bây giờ là ba giờ ba mươi.'] }] },

{ id:'ru-19', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'4:15', r:32 }, { p:'desk', x:250, y:220 },
    { p:'laptop', x:250, y:158 }
  ]},
  alt:'Đồng hồ chỉ 4 giờ 15, trên bàn có cái laptop đang mở.',
  opts:[
    { t:'Сейчас четыре часа пятнадцать минут.', ok:true },
    { t:'Сейчас четыре часа пятьдесят минут.', why:'пятнадцать là 15, пятьдесят là 50 — chỉ khác phần đuôi.', trap:'15 / 50' },
    { t:'Сейчас пять часов пятнадцать минут.', why:'четыре là bốn, пять là năm. Kim ngắn vừa qua số 4.', trap:'giờ: số' },
    { t:'Сейчас без пятнадцати четыре.', why:'без пятнадцати четыре là 3 giờ 45. Kim dài đang ở số 3, tức là đã qua giờ.', trap:'без (kém)' }
  ],
  keys:[
    { w:'пятнадцать', r:'pjatnádtsat’', vi:'mười lăm' }, { w:'пятьдесят', r:'pjat’desját', vi:'năm mươi' },
    { w:'без', r:'bez', vi:'kém, thiếu' }, { w:'четыре', r:'chetýre', vi:'bốn' }
  ],
  gram:[{ p:'без + sinh cách — giờ kém', vi:'без пятнадцати четыре là «bốn giờ kém mười lăm». Chữ без đứng ĐẦU, và giờ nêu ra là giờ sắp tới.',
    ex:['Сейчас четыре часа пятнадцать минут.', 'Bây giờ là bốn giờ mười lăm.'] }] },

{ id:'ru-20', lang:'ru', lv:'a2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:150, y:220, w:120 }, { p:'bread', x:150, y:158 },
    { p:'tag', x:300, y:130, text:'300' }
  ]},
  alt:'Ổ bánh mì trên bàn, bảng giá ghi 300.',
  opts:[
    { t:'Хлеб стоит триста рублей.', ok:true },
    { t:'Хлеб стоит тринадцать рублей.', why:'триста là 300, тринадцать là 13 — hai từ đều bắt đầu bằng три.', trap:'13 / 300' },
    { t:'Хлеб стоит три тысячи рублей.', why:'триста là ba trăm, три тысячи là ba nghìn.', trap:'trăm / nghìn' },
    { t:'Хлеб стоит триста рублей и тридцать копеек.', why:'Bảng giá chỉ ghi một con số tròn.', trap:'thêm thông tin thừa' }
  ],
  keys:[
    { w:'хлеб', r:'khleb', vi:'bánh mì' }, { w:'триста', r:'trísta', vi:'ba trăm' },
    { w:'тысяча', r:'týsjacha', vi:'nghìn' }, { w:'рубль', r:'rubl’', vi:'rúp (tiền Nga)' }
  ],
  gram:[{ p:'стоить — giá bao nhiêu', vi:'Động từ стоит vừa là «đứng» vừa là «có giá». Phân biệt bằng chữ đi sau: стоит на столе là đứng, стоит триста рублей là giá 300.',
    ex:['Хлеб стоит триста рублей.', 'Bánh mì giá ba trăm rúp.'] }] },

{ id:'ru-21', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'7:00', r:32 }, { p:'bed', x:250, y:220 },
    { p:'sleeper', x:258, y:180 }
  ]},
  alt:'Đồng hồ chỉ 7 giờ, một người vẫn đang nằm ngủ.',
  opts:[
    { t:'Уже семь часов, а он ещё спит.', ok:true },
    { t:'Уже семь часов, а он уже встал.', why:'ещё là vẫn còn, уже là đã rồi. Người trong tranh vẫn nhắm mắt nằm.', trap:'ещё / уже' },
    { t:'Уже восемь часов, а он ещё спит.', why:'семь là bảy, восемь là tám. Kim ngắn đang ở số 7.', trap:'giờ: số' },
    { t:'Уже семь часов, а он ещё не спит.', why:'Thêm mỗi chữ не là thành «vẫn chưa đi ngủ».', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'ещё', r:'jeshchó', vi:'vẫn còn, nữa' }, { w:'уже', r:'uzhé', vi:'đã… rồi' },
    { w:'спать', r:'spat’', vi:'ngủ' }, { w:'встать', r:'vstat’', vi:'ngủ dậy, đứng dậy' }
  ],
  gram:[{ p:'ещё và уже', vi:'ещё đi với việc còn kéo dài, уже đi với việc đã xong. Thêm не vào sau ещё là đảo hẳn nghĩa: ещё не спит là vẫn chưa ngủ.',
    ex:['Уже семь часов, а он ещё спит.', 'Bảy giờ rồi mà anh ấy vẫn đang ngủ.'] }] },

{ id:'ru-22', lang:'ru', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'2:45', r:32 }, { p:'sofa', x:250, y:220 },
    { p:'lamp', x:350, y:220 }
  ]},
  alt:'Đồng hồ chỉ 2 giờ 45 phút.',
  opts:[
    { t:'Сейчас без пятнадцати три.', ok:true },
    { t:'Сейчас пятнадцать минут третьего.', why:'Câu này là 2 giờ 15. Kim dài đang ở bên trái mặt đồng hồ.', trap:'quá giờ / kém giờ' },
    { t:'Сейчас без пятнадцати два.', why:'Câu này là 1 giờ 45. Kim ngắn đang gần số 3.', trap:'giờ: số' },
    { t:'Сейчас без пятидесяти три.', why:'пятнадцати là 15, пятидесяти là 50.', trap:'15 / 50' }
  ],
  keys:[
    { w:'без', r:'bez', vi:'kém' }, { w:'третий', r:'trétij', vi:'thứ ba' },
    { w:'пятнадцать', r:'pjatnádtsat’', vi:'mười lăm' }, { w:'час', r:'chas', vi:'giờ' }
  ],
  gram:[{ p:'Hai cách nói giờ', vi:'Nửa đầu giờ nói «пятнадцать минут третьего» (2:15), nửa sau nói «без пятнадцати три» (2:45). Nghe chữ без đứng đầu là biết đang kém giờ.',
    ex:['Сейчас без пятнадцати три.', 'Bây giờ là ba giờ kém mười lăm.'] }] },

/* ========== ЛЕЖИТ · СТОИТ · ВИСИТ ========== */
{ id:'ru-23', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:120 }, { p:'hat', x:160, y:158 },
    { p:'coat', x:300, y:180 }
  ]},
  alt:'Cái mũ đặt trên bàn, áo khoác treo trên móc.',
  opts:[
    { t:'Шляпа лежит на столе.', ok:true },
    { t:'Шляпа висит на стене.', why:'Cái mũ đặt trên mặt bàn, không treo trên tường.', trap:'лежит / стоит / висит' },
    { t:'Пальто лежит на столе.', why:'Áo khoác có thật nhưng đang treo trên móc.', trap:'đúng vật, sai vị trí' },
    { t:'Шляпы нет на столе.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'шляпа', r:'shljápa', vi:'cái mũ' }, { w:'пальто', r:'pal’tó', vi:'áo khoác' },
    { w:'лежать', r:'lezhát’', vi:'nằm' }, { w:'висеть', r:'visét’', vi:'treo' }
  ],
  gram:[{ p:'пальто không đổi đuôi', vi:'Từ mượn tận cùng bằng -о như пальто, метро, кино giữ nguyên hình dạng ở mọi cách. Nghe không thấy đuôi đổi thì đó là dấu hiệu.',
    ex:['Шляпа лежит на столе.', 'Cái mũ nằm trên bàn.'] }] },

{ id:'ru-24', lang:'ru', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:140 }, { p:'bottle', x:170, y:158 },
    { p:'book', x:248, y:158, open:true }, { p:'window', x:300, y:28, view:'sun' }
  ]},
  alt:'Cái chai đứng trên bàn, bên cạnh là một quyển sách nằm.',
  opts:[
    { t:'Бутылка стоит, а книга лежит.', ok:true },
    { t:'Бутылка лежит, а книга стоит.', why:'Hai động từ bị đổi chỗ cho nhau. Chai cao thì đứng, sách phẳng thì nằm.', trap:'лежит / стоит / висит' },
    { t:'Бутылка стоит, а книга висит.', why:'Vế đầu đúng nên tai buông. Quyển sách nằm trên mặt bàn.', trap:'đúng một nửa' },
    { t:'Бутылка стоит, а книги нет.', why:'Quyển sách có thật trong tranh.', trap:'есть / нет' }
  ],
  keys:[
    { w:'бутылка', r:'butýlka', vi:'cái chai' }, { w:'стоять', r:'stoját’', vi:'đứng' },
    { w:'лежать', r:'lezhát’', vi:'nằm' }, { w:'а', r:'a', vi:'còn, trong khi đó' }
  ],
  gram:[{ p:'Quy tắc đứng hay nằm', vi:'Vật cao hơn bề rộng thì стоит (chai, cốc, lọ hoa). Vật phẳng, bè ra thì лежит (sách, giấy, khăn). Đây là quy tắc bắt buộc của tiếng Nga.',
    ex:['Бутылка стоит, а книга лежит.', 'Cái chai đứng, còn quyển sách thì nằm.'] }] },

{ id:'ru-25', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'hanger', x:140, y:110 }, { p:'coat', x:140, y:180 },
    { p:'glasses', x:280, y:158 }, { p:'table', x:280, y:220, w:110 }
  ]},
  alt:'Áo khoác treo trên móc, cặp kính đặt trên bàn.',
  opts:[
    { t:'Пальто висит, а очки лежат на столе.', ok:true },
    { t:'Пальто лежит на столе, а очки висят.', why:'Hai vế bị đổi chỗ cho nhau.', trap:'лежит / стоит / висит' },
    { t:'Пальто висит, а очки лежат под столом.', why:'Vế đầu đúng nên tai buông. Cặp kính nằm trên mặt bàn.', trap:'trên / dưới' },
    { t:'Пальто висит, а очков нет.', why:'Cặp kính có thật trong tranh.', trap:'есть / нет' }
  ],
  keys:[
    { w:'пальто', r:'pal’tó', vi:'áo khoác' }, { w:'очки', r:'ochkí', vi:'cái kính' },
    { w:'висеть', r:'visét’', vi:'treo' }, { w:'стол', r:'stol', vi:'cái bàn' }
  ],
  gram:[{ p:'очки luôn số nhiều', vi:'Giống như часы và брюки, từ очки chỉ có dạng số nhiều nên động từ cũng phải số nhiều: очки лежат.',
    ex:['Очки лежат на столе.', 'Cặp kính nằm trên bàn.'] }] },

/* ========== ĐANG LÀM ========== */
{ id:'ru-26', lang:'ru', lv:'a1', cat:'Học tập',
  scene:{ bg:'room', items:[
    { p:'sofa', x:170, y:220 }, { p:'person', x:170, y:216, pose:'read' },
    { p:'lamp', x:330, y:220 }
  ]},
  alt:'Một người ngồi trên ghế sofa, hai tay cầm sách mở ra trước mặt.',
  opts:[
    { t:'Он читает книгу.', ok:true },
    { t:'Он пишет письмо.', why:'читать là đọc, писать là viết. Người này cầm sách mở bằng cả hai tay.', trap:'hành động gần giống' },
    { t:'Он прочитал книгу.', why:'читает là đang đọc, прочитал là đã đọc xong.', trap:'thể: chưa xong / đã xong' },
    { t:'Он не читает книгу.', why:'Thêm mỗi chữ не vào giữa câu ngắn.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'читать', r:'chitát’', vi:'đọc' }, { w:'писать', r:'pisát’', vi:'viết' },
    { w:'книга', r:'kníga', vi:'quyển sách' }, { w:'прочитать', r:'prochitát’', vi:'đọc xong' }
  ],
  gram:[{ p:'читает và прочитал', vi:'Tiếng Nga có hai thể: chưa hoàn thành (читать — đang làm, hay làm) và hoàn thành (прочитать — làm xong). Tiền tố про- chính là dấu hiệu.',
    ex:['Он читает книгу.', 'Anh ấy đang đọc sách.'] }] },

{ id:'ru-27', lang:'ru', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:210, y:220, w:130 }, { p:'bowl', x:210, y:158 },
    { p:'person', x:110, y:220, pose:'eat' }, { p:'window', x:290, y:28, view:'sun' }
  ]},
  alt:'Một người đang đưa tay lên miệng ăn, trên bàn có một cái bát.',
  opts:[
    { t:'Он ест.', ok:true },
    { t:'Он пьёт.', why:'есть là ăn, пить là uống. Trên bàn là cái bát chứ không phải cốc.', trap:'hành động gần giống' },
    { t:'Он поел.', why:'ест là đang ăn, поел là đã ăn xong. Bữa vẫn đang dở.', trap:'thể: chưa xong / đã xong' },
    { t:'Он будет есть.', why:'будет есть là sẽ ăn. Tay đã đưa tới miệng rồi.', trap:'thì: đang / sẽ' }
  ],
  keys:[
    { w:'есть', r:'jest’', vi:'ăn' }, { w:'пить', r:'pit’', vi:'uống' },
    { w:'поесть', r:'pojést’', vi:'ăn xong' }, { w:'тарелка', r:'tarélka', vi:'cái đĩa' }
  ],
  gram:[{ p:'есть — hai nghĩa', vi:'есть vừa là động từ «ăn», vừa là chữ «có» trong câu «на столе есть книга». Phải nhìn vị trí trong câu mới biết nghĩa nào.',
    ex:['Он ест.', 'Anh ấy đang ăn.'] }] },

{ id:'ru-28', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'phone' }, { p:'table', x:270, y:220, w:110 },
    { p:'phone', x:270, y:158 }
  ]},
  alt:'Một người áp điện thoại lên tai, trên bàn còn một chiếc điện thoại nữa.',
  opts:[
    { t:'Он говорит по телефону.', ok:true },
    { t:'Он не говорит по телефону.', why:'Thêm mỗi chữ не. Người này đang áp máy lên tai.', trap:'phủ định chìm' },
    { t:'Он поговорил по телефону.', why:'говорит là đang nói, поговорил là đã nói xong.', trap:'thể: chưa xong / đã xong' },
    { t:'На столе нет телефона.', why:'Trên bàn có một chiếc điện thoại thật.', trap:'есть / нет' }
  ],
  keys:[
    { w:'говорить', r:'govorít’', vi:'nói, nói chuyện' }, { w:'телефон', r:'telefón', vi:'điện thoại' },
    { w:'по', r:'po', vi:'qua, bằng (phương tiện)' }, { w:'стол', r:'stol', vi:'cái bàn' }
  ],
  gram:[{ p:'по телефону', vi:'Đây là cách nói cố định: nói chuyện QUA điện thoại thì dùng по + tặng cách. Cũng như по радио, по телевизору.',
    ex:['Он говорит по телефону.', 'Anh ấy đang nói chuyện điện thoại.'] }] },

{ id:'ru-29', lang:'ru', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:60, y:220 }, { p:'person', x:160, y:220, pose:'cook' },
    { p:'stove', x:250, y:220 }
  ]},
  alt:'Một người đứng trước bếp, tay đưa về phía nồi.',
  opts:[
    { t:'Она готовит на кухне.', ok:true },
    { t:'Она моет посуду.', why:'мыть посуду là rửa bát. Trong tranh là cái bếp đang nấu.', trap:'hành động gần giống' },
    { t:'Она приготовила обед.', why:'готовит là đang nấu, приготовила là đã nấu xong.', trap:'thể: chưa xong / đã xong' },
    { t:'Она не готовит на кухне.', why:'Thêm mỗi chữ не vào giữa.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'готовить', r:'gotóvit’', vi:'nấu ăn' }, { w:'мыть', r:'myt’', vi:'rửa' },
    { w:'посуда', r:'posúda', vi:'bát đĩa' }, { w:'кухня', r:'kúkhnja', vi:'nhà bếp' }
  ],
  gram:[{ p:'готовит và приготовила', vi:'Tiền tố при- biến động từ sang thể hoàn thành. Ngoài ra đuôi -ла cho biết chủ ngữ là phụ nữ — tiếng Nga chia quá khứ theo giống.',
    ex:['Она готовит на кухне.', 'Cô ấy đang nấu ăn trong bếp.'] }] },

{ id:'ru-30', lang:'ru', lv:'a1', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:170, y:220, pose:'run' },
    { p:'tree', x:320, y:220 }
  ]},
  alt:'Một người đang chạy, thân đổ về phía trước.',
  opts:[
    { t:'Он бежит по улице.', ok:true },
    { t:'Он идёт по улице.', why:'идти là đi bộ, бежать là chạy. Người trong tranh đổ người về trước, chân xoạc rộng.', trap:'hành động gần giống' },
    { t:'Он едет по улице.', why:'ехать là đi bằng xe. Người này đang tự chạy bằng chân.', trap:'идти / ехать' },
    { t:'Он стоит на улице.', why:'стоит là đứng yên một chỗ.', trap:'hành động' }
  ],
  keys:[
    { w:'бежать', r:'bezhát’', vi:'chạy' }, { w:'идти', r:'idtí', vi:'đi bộ' },
    { w:'ехать', r:'jékhat’', vi:'đi bằng phương tiện' }, { w:'улица', r:'úlitsa', vi:'đường phố' }
  ],
  gram:[{ p:'идти và ехать', vi:'Tiếng Nga tách hẳn hai động từ: đi bằng chân là идти, đi bằng xe là ехать. Nói «я иду в Москву» là sai, phải nói «я еду в Москву».',
    ex:['Он бежит по улице.', 'Anh ấy đang chạy trên phố.'] }] },

{ id:'ru-31', lang:'ru', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'person', x:170, y:216, pose:'write' },
    { p:'shelf', x:300, y:120, w:80, h:94, rows:3 }
  ]},
  alt:'Một người ngồi ở bàn, tay cầm bút viết.',
  opts:[
    { t:'Она пишет за столом.', ok:true },
    { t:'Она читает за столом.', why:'читать là đọc. Người này cúi xuống mặt bàn, một tay cầm bút.', trap:'hành động gần giống' },
    { t:'Она написала письмо.', why:'пишет là đang viết, написала là đã viết xong.', trap:'thể: chưa xong / đã xong' },
    { t:'Она сидит на столе.', why:'за столом là ngồi vào bàn, на столе là ngồi lên mặt bàn.', trap:'за / на' }
  ],
  keys:[
    { w:'писать', r:'pisát’', vi:'viết' }, { w:'написать', r:'napisát’', vi:'viết xong' },
    { w:'за', r:'za', vi:'sau, phía sau; vào (bàn)' }, { w:'сидеть', r:'sidét’', vi:'ngồi' }
  ],
  gram:[{ p:'сидеть за столом', vi:'Ngồi vào bàn làm việc thì nói за столом (công cụ cách). Còn на столе là ngồi lên trên mặt bàn — nghĩa hoàn toàn khác.',
    ex:['Она пишет за столом.', 'Cô ấy đang ngồi viết ở bàn.'] }] },

{ id:'ru-32', lang:'ru', lv:'a1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'person', x:120, y:220, pose:'drink' }, { p:'table', x:250, y:220, w:120 },
    { p:'bottle', x:250, y:158 }
  ]},
  alt:'Một người đang đưa cốc lên miệng, trên bàn có một cái chai.',
  opts:[
    { t:'Он пьёт воду.', ok:true },
    { t:'Он ест суп.', why:'пить là uống, есть là ăn. Người này đưa cốc lên miệng.', trap:'hành động gần giống' },
    { t:'Он выпил воду.', why:'пьёт là đang uống, выпил là đã uống hết.', trap:'thể: chưa xong / đã xong' },
    { t:'Он будет пить воду.', why:'будет пить là sẽ uống. Cốc đã đưa tới miệng rồi.', trap:'thì: đang / sẽ' }
  ],
  keys:[
    { w:'пить', r:'pit’', vi:'uống' }, { w:'вода', r:'vodá', vi:'nước' },
    { w:'выпить', r:'výpit’', vi:'uống hết' }, { w:'бутылка', r:'butýlka', vi:'cái chai' }
  ],
  gram:[{ p:'вода đọc là «вада»', vi:'Chữ о không mang trọng âm sẽ đọc thành а: вода → вада, молоко → малако. Nhìn chữ viết mà đọc theo mặt chữ là sai ngay.',
    ex:['Он пьёт воду.', 'Anh ấy đang uống nước.'] }] },

{ id:'ru-33', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:160, y:220 }, { p:'sleeper', x:168, y:180 },
    { p:'window', x:280, y:30, view:'night' }
  ]},
  alt:'Trời đã tối ngoài cửa sổ, một người đang nằm ngủ trên giường.',
  opts:[
    { t:'Он спит на кровати.', ok:true },
    { t:'Он встал с кровати.', why:'спит là đang ngủ, встал là đã dậy. Người này vẫn nhắm mắt nằm.', trap:'hành động ngược' },
    { t:'Он сидит на кровати.', why:'сидит là ngồi. Người này nằm dài trên giường.', trap:'nằm / ngồi' },
    { t:'Он не спит на кровати.', why:'Thêm mỗi chữ не vào giữa câu ngắn.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'спать', r:'spat’', vi:'ngủ' }, { w:'встать', r:'vstat’', vi:'ngủ dậy' },
    { w:'сидеть', r:'sidét’', vi:'ngồi' }, { w:'ночь', r:'noch’', vi:'ban đêm' }
  ],
  gram:[{ p:'лежать · сидеть · стоять với người', vi:'Ba động từ tư thế này dùng cho cả người lẫn vật. Với người thì лежит là nằm, сидит là ngồi, стоит là đứng.',
    ex:['Он спит на кровати.', 'Anh ấy đang ngủ trên giường.'] }] },

/* ========== TRẠNG THÁI ========== */
{ id:'ru-34', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:110, y:32, view:'sun', open:true }, { p:'window', x:250, y:32, view:'sun' },
    { p:'sofa', x:200, y:220 }
  ]},
  alt:'Hai cửa sổ: cửa bên trái mở cánh ra ngoài, cửa bên phải đóng kín.',
  opts:[
    { t:'Левое окно открыто.', ok:true },
    { t:'Левое окно закрыто.', why:'открыто là mở, закрыто là đóng. Cửa bên trái có cánh bật ra.', trap:'mở / đóng' },
    { t:'Правое окно открыто.', why:'левое là bên trái, правое là bên phải.', trap:'trái / phải' },
    { t:'Оба окна открыты.', why:'оба là cả hai. Chỉ một cửa mở.', trap:'оба (cả hai)' }
  ],
  keys:[
    { w:'левый', r:'lévyj', vi:'bên trái' }, { w:'правый', r:'právyj', vi:'bên phải' },
    { w:'открыт', r:'otkrýt', vi:'được mở' }, { w:'закрыт', r:'zakrýt', vi:'được đóng' }
  ],
  gram:[{ p:'открыто · открыта · открыт', vi:'Tính động từ ngắn phải hợp giống với danh từ: окно открыто, дверь открыта, магазин открыт. Nghe đuôi là biết đang nói về vật gì.',
    ex:['Левое окно открыто.', 'Cửa sổ bên trái đang mở.'] }] },

{ id:'ru-35', lang:'ru', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'lamp', x:110, y:220 }, { p:'desk', x:250, y:220 },
    { p:'laptop', x:250, y:158 }
  ]},
  alt:'Cây đèn bàn đứng bên trái, cái laptop đang mở trên bàn.',
  opts:[
    { t:'Компьютер включён, но никто им не пользуется.', ok:true },
    { t:'Компьютер выключен, но никто им не пользуется.', why:'включён là đang bật, выключен là đã tắt. Màn hình laptop đang dựng lên.', trap:'bật / tắt' },
    { t:'Компьютер включён, и один человек им пользуется.', why:'Vế đầu đúng nên tai buông. Trong tranh không có ai ngồi ở bàn.', trap:'đúng một nửa' },
    { t:'Лампа включена, но никто ей не пользуется.', why:'Cây đèn có thật nhưng câu đúng nói về cái máy tính.', trap:'đúng vật, sai chủ thể' }
  ],
  keys:[
    { w:'компьютер', r:'kompjúter', vi:'máy tính' }, { w:'включить', r:'vkljuchít’', vi:'bật lên' },
    { w:'выключить', r:'vykljuchít’', vi:'tắt đi' }, { w:'никто', r:'niktó', vi:'không một ai' }
  ],
  gram:[{ p:'никто … не …', vi:'Tiếng Nga dùng phủ định kép: никто не пользуется. Bỏ chữ не đi là câu sai ngữ pháp, chứ không phải đổi nghĩa.',
    ex:['Никто им не пользуется.', 'Không ai dùng nó cả.'] }] },

{ id:'ru-36', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:80, y:96, open:true }, { p:'sofa', x:250, y:220 },
    { p:'plant', x:350, y:220, s:1.3 }
  ]},
  alt:'Cánh cửa ra vào đang mở, trong phòng có ghế sofa và chậu cây.',
  opts:[
    { t:'Дверь открыта.', ok:true },
    { t:'Дверь закрыта.', why:'Cánh cửa trong tranh bật ra một góc.', trap:'mở / đóng' },
    { t:'Окно открыто.', why:'дверь là cửa ra vào, окно là cửa sổ. Trong tranh không vẽ cửa sổ.', trap:'chủ thể' },
    { t:'Дверь не открыта.', why:'Thêm mỗi chữ не vào giữa câu ngắn.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'дверь', r:'dver’', vi:'cửa ra vào' }, { w:'окно', r:'oknó', vi:'cửa sổ' },
    { w:'открыта', r:'otkrýta', vi:'đang mở (giống cái)' }, { w:'цветок', r:'tsvetók', vi:'cây, hoa' }
  ],
  gram:[{ p:'дверь là giống cái', vi:'Danh từ tận cùng bằng -ь có thể là giống đực hoặc giống cái. дверь, кровать, ночь là giống cái; словарь, день là giống đực. Phải nhớ từng từ.',
    ex:['Дверь открыта.', 'Cửa đang mở.'] }] },

{ id:'ru-37', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:130 }, { p:'key', x:160, y:156, s:1.4 },
    { p:'door', x:300, y:100 }
  ]},
  alt:'Chiếc chìa khoá nằm trên bàn, cánh cửa đóng ở bên phải.',
  opts:[
    { t:'Ключ лежит на столе.', ok:true },
    { t:'Ключ висит на двери.', why:'Cánh cửa có thật nhưng chìa khoá nằm trên mặt bàn.', trap:'đúng vật, sai vị trí' },
    { t:'Ключ лежит под столом.', why:'на là trên, под là dưới.', trap:'trên / dưới' },
    { t:'Ключа нет на столе.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'ключ', r:'kljuch', vi:'chìa khoá' }, { w:'лежать', r:'lezhát’', vi:'nằm' },
    { w:'дверь', r:'dver’', vi:'cánh cửa' }, { w:'стол', r:'stol', vi:'cái bàn' }
  ],
  gram:[{ p:'на двери và на дверь', vi:'на + giới cách (двери) là đang ở đó, на + đối cách (дверь) là chuyển tới đó. Повесить ключ на дверь là treo lên, ключ висит на двери là đang treo.',
    ex:['Ключ лежит на столе.', 'Chìa khoá nằm trên bàn.'] }] },

/* ========== THỜI TIẾT · NGOÀI TRỜI ========== */
{ id:'ru-38', lang:'ru', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:42 }, { p:'rain', x:90, y:62, n:6 },
    { p:'person', x:230, y:220, pose:'walk' }, { p:'umbrella', x:236, y:104, open:true, s:1.2 }
  ]},
  alt:'Trời mưa, một người che ô đi bộ ngoài đường.',
  opts:[
    { t:'Идёт дождь, и она под зонтом.', ok:true },
    { t:'Идёт снег, и она под зонтом.', why:'Vế sau đúng nên tai buông. Trong tranh là những vạch xiên, tức là mưa.', trap:'mưa / tuyết' },
    { t:'Идёт дождь, но она без зонта.', why:'Cái ô đang xoè trên đầu người đó.', trap:'с / без' },
    { t:'Идёт дождь, и она под столом.', why:'зонт là cái ô, стол là cái bàn. Ngoài đường không có bàn.', trap:'chủ thể' }
  ],
  keys:[
    { w:'дождь', r:'dozhd’', vi:'mưa' }, { w:'снег', r:'sneg', vi:'tuyết' },
    { w:'зонт', r:'zont', vi:'cái ô' }, { w:'без', r:'bez', vi:'không có, thiếu' }
  ],
  gram:[{ p:'идёт дождь', vi:'Tiếng Nga nói mưa «đi»: идёт дождь, идёт снег. Cùng động từ идти với «người đi bộ», nên phải nghe chủ ngữ mới hiểu đúng.',
    ex:['Идёт дождь.', 'Trời đang mưa.'] }] },

{ id:'ru-39', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:42 }, { p:'snowfall', x:90, y:66, n:7 },
    { p:'tree', x:200, y:220 }, { p:'person', x:310, y:220, pose:'stand' }
  ]},
  alt:'Tuyết rơi lất phất, một cái cây và một người đứng ngoài trời.',
  opts:[
    { t:'На улице идёт снег.', ok:true },
    { t:'На улице идёт дождь.', why:'Mưa vẽ bằng vạch xiên, tuyết vẽ bằng chấm tròn.', trap:'mưa / tuyết' },
    { t:'На улице будет снег.', why:'идёт là đang rơi, будет là sắp có.', trap:'thì: đang / sẽ' },
    { t:'На улице нет снега.', why:'нет + sinh cách là không có.', trap:'есть / нет' }
  ],
  keys:[
    { w:'снег', r:'sneg', vi:'tuyết' }, { w:'дождь', r:'dozhd’', vi:'mưa' },
    { w:'дерево', r:'dérevo', vi:'cái cây' }, { w:'улица', r:'úlitsa', vi:'đường phố' }
  ],
  gram:[{ p:'на улице', vi:'«Ở ngoài trời» tiếng Nga nói на улице chứ không nói в улице. Đây là cách nói cố định, cũng như на работе, на почте.',
    ex:['На улице идёт снег.', 'Ngoài trời đang có tuyết rơi.'] }] },

{ id:'ru-40', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:60, y:44 }, { p:'tree', x:150, y:220, h:82 },
    { p:'tree', x:300, y:220, h:82 }
  ]},
  alt:'Trời nắng, hai cái cây cao bằng nhau đứng ngoài đường.',
  opts:[
    { t:'На улице растут два дерева.', ok:true },
    { t:'На улице растут две дерева.', why:'дерево là giống trung nên phải dùng два.', trap:'giống của số' },
    { t:'На улице растут три дерева.', why:'два là hai, три là ba.', trap:'số lượng' },
    { t:'Левое дерево выше правого.', why:'Hai cây trong tranh cao bằng nhau.', trap:'so sánh' }
  ],
  keys:[
    { w:'дерево', r:'dérevo', vi:'cái cây' }, { w:'расти', r:'rastí', vi:'mọc, lớn lên' },
    { w:'высокий', r:'vysókij', vi:'cao' }, { w:'выше', r:'výshe', vi:'cao hơn' }
  ],
  gram:[{ p:'Giống trung đi với два', vi:'окно, дерево, письмо đều là giống trung, dùng два như giống đực: два окна, два дерева. Chỉ giống cái mới dùng две.',
    ex:['На улице растут два дерева.', 'Ngoài đường có hai cái cây.'] }] },

{ id:'ru-41', lang:'ru', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'bus', x:160, y:220 },
    { p:'person', x:300, y:220, pose:'stand' }, { p:'sign', x:350, y:220, dir:'right' }
  ]},
  alt:'Một người đứng cạnh biển chỉ đường, xe buýt đỗ ở bên trái.',
  opts:[
    { t:'Он стоит около автобуса.', ok:true },
    { t:'Он сидит в автобусе.', why:'Người này đứng ngoài đường, không ở trong xe.', trap:'trong / ngoài' },
    { t:'Он сидит около автобуса.', why:'стоит là đứng, сидит là ngồi.', trap:'đứng / ngồi' },
    { t:'Он едет на автобусе.', why:'едет là đang đi xe. Người này đứng trên vỉa hè.', trap:'идти / ехать' }
  ],
  keys:[
    { w:'автобус', r:'avtóbus', vi:'xe buýt' }, { w:'стоять', r:'stoját’', vi:'đứng' },
    { w:'сидеть', r:'sidét’', vi:'ngồi' }, { w:'в', r:'v', vi:'trong' }
  ],
  gram:[{ p:'на автобусе và в автобусе', vi:'Đi xe buýt nói ехать на автобусе (phương tiện), còn ngồi bên trong nói сидеть в автобусе (vị trí). Hai giới từ, hai ý khác nhau.',
    ex:['Он стоит около автобуса.', 'Anh ấy đứng cạnh xe buýt.'] }] },

/* ========== CÁCH · SO SÁNH · SỐ LƯỢNG ========== */
{ id:'ru-42', lang:'ru', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'person', x:150, y:216, pose:'write' },
    { p:'desk', x:290, y:220 }
  ]},
  alt:'Một người ngồi viết ở cái bàn bên trái, cái bàn bên phải bỏ trống.',
  opts:[
    { t:'Она занимается в классе.', ok:true },
    { t:'Она занимается в класс.', why:'Sau в chỉ nơi chốn thì danh từ phải ở giới cách: в классе. Дạng в класс là chỉ hướng đi vào.', trap:'giới cách / đối cách' },
    { t:'Она спит в классе.', why:'Người này cúi xuống bàn, tay cầm bút.', trap:'hành động' },
    { t:'Два человека занимаются в классе.', why:'Chỉ có một người, cái bàn bên phải bỏ trống.', trap:'số lượng' }
  ],
  keys:[
    { w:'класс', r:'klass', vi:'lớp học' }, { w:'заниматься', r:'zanimát’sja', vi:'học bài, làm việc' },
    { w:'в', r:'v', vi:'trong; vào' }, { w:'спать', r:'spat’', vi:'ngủ' }
  ],
  gram:[{ p:'в классе và в класс', vi:'в + giới cách là Ở ĐÂU (в классе), в + đối cách là ĐI ĐÂU (в класс). Chỉ khác mỗi đuôi mà một bên là đứng yên, một bên là chuyển động.',
    ex:['Она занимается в классе.', 'Cô ấy đang học ở trong lớp.'] }] },

{ id:'ru-43', lang:'ru', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'person', x:160, y:216, pose:'sit' },
    { p:'tv', x:320, y:170 }
  ]},
  alt:'Một người ngồi trên ghế sofa, đối diện là cái tivi.',
  opts:[
    { t:'Он сидит дома и смотрит телевизор.', ok:true },
    { t:'Он идёт домой и смотрит телевизор.', why:'дома là đang ở nhà, домой là đang về nhà. Người này đã ngồi trên ghế.', trap:'дома / домой' },
    { t:'Он сидит дома и читает книгу.', why:'Vế đầu đúng nên tai buông. Trong tranh là cái tivi có màn hình và chân đế.', trap:'chủ thể' },
    { t:'Он сидит дома и не смотрит телевизор.', why:'Thêm mỗi chữ не ở gần cuối.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'телевизор', r:'televízor', vi:'tivi' }, { w:'дома', r:'dóma', vi:'ở nhà' },
    { w:'домой', r:'domój', vi:'về nhà' }, { w:'смотреть', r:'smotrét’', vi:'xem, nhìn' }
  ],
  gram:[{ p:'дома và домой', vi:'дома là ở nhà (đứng yên), домой là về nhà (chuyển động). Hai từ chỉ khác đuôi mà một bên đứng yên, một bên đang đi.',
    ex:['Он сидит дома.', 'Anh ấy đang ngồi ở nhà.'] }] },

{ id:'ru-44', lang:'ru', lv:'a2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:44 }, { p:'bus', x:150, y:220, w:126 },
    { p:'car', x:310, y:220 }
  ]},
  alt:'Xe buýt bên trái to hơn hẳn chiếc ô tô con bên phải.',
  opts:[
    { t:'Автобус больше машины.', ok:true },
    { t:'Машина больше автобуса.', why:'Đổi chỗ hai chủ thể. Vật đứng ĐẦU câu mới là vật hơn.', trap:'hoán chủ thể' },
    { t:'Автобус меньше машины.', why:'больше là to hơn, меньше là nhỏ hơn.', trap:'to / nhỏ' },
    { t:'Автобус такой же, как машина.', why:'такой же là giống hệt. Xe buýt dài hơn hẳn.', trap:'so sánh bằng / hơn' }
  ],
  keys:[
    { w:'больше', r:'ból’she', vi:'to hơn, nhiều hơn' }, { w:'меньше', r:'mén’she', vi:'nhỏ hơn, ít hơn' },
    { w:'автобус', r:'avtóbus', vi:'xe buýt' }, { w:'машина', r:'mashína', vi:'ô tô' }
  ],
  gram:[{ p:'больше + sinh cách', vi:'So sánh hơn có hai cách: больше машины (sinh cách) hoặc больше, чем машина. Cách đầu ngắn hơn nên hay gặp khi nói.',
    ex:['Автобус больше машины.', 'Xe buýt to hơn ô tô.'] }] },

{ id:'ru-45', lang:'ru', lv:'a2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:190 }, { p:'cup', x:150, y:158 },
    { p:'cup', x:185, y:158 }, { p:'cup', x:220, y:158 }, { p:'teapot', x:268, y:158 }
  ]},
  alt:'Ba cái cốc xếp hàng trên bàn, bên phải là ấm trà.',
  opts:[
    { t:'На столе стоят три чашки.', ok:true },
    { t:'На столе стоят две чашки.', why:'три là ba, две là hai. Trên bàn có ba cái.', trap:'số lượng' },
    { t:'На столе стоят пять чашек.', why:'Sau пять danh từ đổi thành чашек. Trên bàn có ba cái.', trap:'cách sau số đếm' },
    { t:'На столе лежат три чашки.', why:'Cái cốc cao nên dùng стоят, không dùng лежат.', trap:'лежит / стоит / висит' }
  ],
  keys:[
    { w:'чашка', r:'cháshka', vi:'cái cốc, chén' }, { w:'чайник', r:'chájnik', vi:'cái ấm trà' },
    { w:'три', r:'tri', vi:'ba' }, { w:'пять', r:'pjat’', vi:'năm' }
  ],
  gram:[{ p:'три чашки và пять чашек', vi:'Danh từ đổi đuôi theo con số: 2–4 lấy sinh cách số ít (чашки), từ 5 lấy sinh cách số nhiều (чашек). Nghe đuôi là đoán được số.',
    ex:['На столе стоят три чашки.', 'Trên bàn có ba cái cốc.'] }] },

{ id:'ru-46', lang:'ru', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'lamp', x:70, y:220 }, { p:'person', x:170, y:220, pose:'stand' },
    { p:'sofa', x:290, y:220 }
  ]},
  alt:'Chỉ có một người đứng trong phòng, ghế sofa bỏ trống.',
  opts:[
    { t:'В комнате только один человек.', ok:true },
    { t:'В комнате только два человека.', why:'один là một, два là hai. Ghế sofa không ai ngồi.', trap:'số lượng' },
    { t:'В комнате нет никого.', why:'никого là không có ai. Trong tranh rõ ràng có một người.', trap:'есть / нет' },
    { t:'В комнате только один человек сидит.', why:'Người này đang đứng chứ không ngồi.', trap:'đứng / ngồi' }
  ],
  keys:[
    { w:'только', r:'tól’ko', vi:'chỉ, duy nhất' }, { w:'никто', r:'niktó', vi:'không một ai' },
    { w:'комната', r:'kómnata', vi:'căn phòng' }, { w:'один', r:'odín', vi:'một' }
  ],
  gram:[{ p:'в комнате нет никого', vi:'Phủ định kép lại xuất hiện: нет + никого. Tiếng Nga càng phủ định nhiều thì câu càng đúng ngữ pháp, khác hẳn tiếng Việt.',
    ex:['В комнате только один человек.', 'Trong phòng chỉ có một người.'] }] },

{ id:'ru-47', lang:'ru', lv:'b1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:46, w:90, h:120, rows:4 }, { p:'tag', x:220, y:130, text:'5000' },
    { p:'coat', x:310, y:184 }
  ]},
  alt:'Chiếc áo khoác treo bên phải, bảng giá ghi 5000.',
  opts:[
    { t:'Это пальто стоит пять тысяч рублей.', ok:true },
    { t:'Это пальто стоит пятьсот рублей.', why:'пять тысяч là 5000, пятьсот là 500.', trap:'trăm / nghìn' },
    { t:'Это пальто стоит шесть тысяч рублей.', why:'пять là năm, шесть là sáu. Bảng giá ghi 5000.', trap:'số lượng' },
    { t:'Эти пальто стоят пять тысяч рублей.', why:'это пальто là chiếc áo này, эти пальто là những chiếc này. Trong tranh treo một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'тысяча', r:'týsjacha', vi:'nghìn' }, { w:'пятьсот', r:'pjat’sót', vi:'năm trăm' },
    { w:'рубль', r:'rubl’', vi:'rúp' }, { w:'пальто', r:'pal’tó', vi:'áo khoác' }
  ],
  gram:[{ p:'пять тысяч', vi:'Sau số 5 trở lên, тысяча đổi thành тысяч (sinh cách số nhiều). So với две тысячи thì đuôi khác hẳn — đó là manh mối để nghe ra con số.',
    ex:['Это пальто стоит пять тысяч рублей.', 'Chiếc áo khoác này giá năm nghìn rúp.'] }] },

{ id:'ru-48', lang:'ru', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:120, y:60, w:110, h:120, rows:3 }, { p:'ladder', x:290, y:220 },
    { p:'person', x:350, y:220, pose:'point', flip:true }
  ]},
  alt:'Kệ sách đầy sách, cái thang dựng bên cạnh, một người đứng chỉ tay về phía kệ.',
  opts:[
    { t:'Он показывает на книжную полку.', ok:true },
    { t:'Он показывает на лестницу.', why:'Cái thang có thật nhưng cánh tay vươn qua nó, chỉ tới cái kệ.', trap:'đúng vật, sai hướng' },
    { t:'Он поднимается по лестнице.', why:'Người này đứng dưới đất, chưa đặt chân lên thang.', trap:'hành động' },
    { t:'Он не показывает на книжную полку.', why:'Thêm mỗi chữ не vào giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'полка', r:'pólka', vi:'cái kệ, giá' }, { w:'лестница', r:'léstnitsa', vi:'cái thang, cầu thang' },
    { w:'показывать', r:'pokázyvat’', vi:'chỉ ra, cho xem' }, { w:'подниматься', r:'podnimát’sja', vi:'trèo lên, đi lên' }
  ],
  gram:[{ p:'показывать на + đối cách', vi:'Chỉ tay về phía gì thì dùng на + đối cách: показывает на полку. Nếu nói показывает полку thì lại là «cho xem cái kệ».',
    ex:['Он показывает на книжную полку.', 'Anh ấy chỉ tay về phía kệ sách.'] }] },

{ id:'ru-49', lang:'ru', lv:'b1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:250, y:30, view:'rain' }, { p:'sofa', x:150, y:220 },
    { p:'person', x:150, y:216, pose:'read' }, { p:'umbrella', x:340, y:220, s:1.4 }
  ]},
  alt:'Ngoài cửa sổ trời mưa, một người ngồi trong nhà đọc sách, cái ô gập dựng ở góc.',
  opts:[
    { t:'На улице дождь, а она дома читает.', ok:true },
    { t:'Дома дождь, а она на улице читает.', why:'Hai từ на улице và дома bị đổi chỗ cho nhau.', trap:'trong / ngoài' },
    { t:'На улице дождь, а она дома спит.', why:'Vế đầu đúng nên tai buông. Cô ấy ngồi thẳng, hai tay cầm sách mở.', trap:'hành động' },
    { t:'На улице снег, а она дома читает.', why:'Ngoài cửa sổ là những vạch xiên, tức là mưa.', trap:'mưa / tuyết' }
  ],
  keys:[
    { w:'улица', r:'úlitsa', vi:'đường phố, bên ngoài' }, { w:'дома', r:'dóma', vi:'ở nhà' },
    { w:'дождь', r:'dozhd’', vi:'mưa' }, { w:'а', r:'a', vi:'còn, trong khi đó' }
  ],
  gram:[{ p:'а và но', vi:'а nối hai vế ĐỐI CHIẾU nhau (ngoài thì mưa, trong thì đọc sách). но mới là «nhưng» trái ý hẳn. Nghe được а là biết vế sau nói chuyện khác.',
    ex:['На улице дождь, а она дома читает.', 'Ngoài trời mưa, còn cô ấy ở nhà đọc sách.'] }] },

{ id:'ru-50', lang:'ru', lv:'b1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:150, y:220, pose:'walk' },
    { p:'person', x:240, y:220, pose:'walk' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai người cùng đi bộ ngoài đường.',
  opts:[
    { t:'Два человека идут вместе.', ok:true },
    { t:'Один человек идёт один.', why:'один là một mình. Trong tranh có hai người đi cùng nhau.', trap:'một mình / cùng nhau' },
    { t:'Два человека бегут вместе.', why:'Vế đầu đúng nên tai buông. Hai người này bước thong thả, thân thẳng.', trap:'hành động gần giống' },
    { t:'Два человека едут вместе.', why:'едут là đi bằng xe. Hai người này đi bằng chân.', trap:'идти / ехать' }
  ],
  keys:[
    { w:'вместе', r:'vméste', vi:'cùng nhau' }, { w:'идти', r:'idtí', vi:'đi bộ' },
    { w:'бежать', r:'bezhát’', vi:'chạy' }, { w:'ехать', r:'jékhat’', vi:'đi bằng xe' }
  ],
  gram:[{ p:'идут · бегут · едут', vi:'Ba động từ chuyển động ở ngôi thứ ba số nhiều nghe rất giống nhau vì cùng đuôi -ут. Phải bắt phần gốc: ид-, бег-, ед-.',
    ex:['Два человека идут вместе.', 'Hai người đang đi bộ cùng nhau.'] }] }

  );
})();
