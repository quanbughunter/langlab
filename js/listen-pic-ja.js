/* ============================================================
   LangLab — NGHE & CHỌN TRANH · TIẾNG NHẬT
   ------------------------------------------------------------
   Do LangLab tự soạn. Tranh ghép từ js/scene-svg.js, không dùng ảnh
   của bên thứ ba và không dùng ảnh do AI sinh.

   BẪY NGHE ĐANG DÙNG (mỗi câu ít nhất hai kiểu khác nhau):
     · います / あります — sinh vật với đồ vật, đây là bẫy gốc của tiếng Nhật
     · vị trí 上 · 下 · 中 · 前 · 後ろ · 間 · となり · そば
     · đơn vị đếm 匹(con vật nhỏ) · 羽(chim) · 本(vật dài, cả cây) ·
       枚(vật mỏng) · 冊(sách) · 人(người) · 台(máy móc) · 足(đôi giày) ·
       つ / 個 (đồ vật nói chung) · 杯(cốc nước)
     · số đọc hai kiểu: 四 し·よん · 七 しち·なな · 九 く·きゅう,
       và giờ thì BẮT BUỘC 四時 よじ · 七時 しちじ · 九時 くじ
     · 分 đọc ふん hay ぷん tuỳ số đứng trước
     · 着る · はく · かぶる · かける · さす — «mặc» chia theo bộ phận cơ thể
     · ～ている (đang) · ～てある (đã được làm sẵn) · ～た (đã) ·
       ～ところ (vừa đúng lúc)
     · に (nơi tồn tại) với で (nơi diễn ra hành động)
     · まだ (vẫn chưa) với もう (đã… rồi)

   LƯU Ý khi soạn thêm: trường âm và âm ngắt (おじさん / おじいさん,
   きて / きって) không vẽ ra tranh được nên KHÔNG dùng làm bẫy chọn
   đáp án — chỉ đưa vào phần ngữ pháp để học viên biết mà đề phòng.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ========== います · あります · VỊ TRÍ ========== */
{ id:'ja-01', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:150, y:220 }, { p:'cat', x:158, y:186, pose:'sit', s:0.8 },
    { p:'window', x:280, y:30, view:'sun' }
  ]},
  alt:'Con mèo ngồi trên giường, cửa sổ ở bên phải.',
  opts:[
    { t:'ねこがベッドの上にいます。', ok:true },
    { t:'ねこがベッドの上にあります。', why:'Sinh vật thì phải dùng います. あります chỉ dùng cho đồ vật.', trap:'います / あります' },
    { t:'ねこがベッドの下にいます。', why:'上 là trên, 下 là dưới. Con mèo ngồi trên mặt giường.', trap:'trên / dưới' },
    { t:'いぬがベッドの上にいます。', why:'いぬ là con chó. Con vật trong tranh có tai nhọn và ria mép.', trap:'chủ thể' }
  ],
  keys:[
    { w:'ねこ', r:'neko', vi:'con mèo' }, { w:'ベッド', r:'beddo', vi:'cái giường' },
    { w:'上', r:'うえ / ue', vi:'phía trên' }, { w:'いる', r:'iru', vi:'có, ở (dùng cho sinh vật)' }
  ],
  gram:[{ p:'います và あります', vi:'Người và con vật dùng います, đồ vật và cây cối dùng あります. Đây là chỗ sai nhiều nhất của người mới học.',
    ex:['ねこがベッドの上にいます。', 'Con mèo ở trên giường.'] }] },

{ id:'ja-02', lang:'ja', lv:'n5', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'book', x:170, y:158 },
    { p:'chair', x:290, y:220 }
  ]},
  alt:'Một quyển sách đặt trên bàn học, cái ghế ở bên phải.',
  opts:[
    { t:'つくえの上に本があります。', ok:true },
    { t:'つくえの上に本がいます。', why:'Quyển sách là đồ vật nên phải dùng あります.', trap:'います / あります' },
    { t:'つくえの下に本があります。', why:'Quyển sách nằm trên mặt bàn, không phải dưới gầm.', trap:'trên / dưới' },
    { t:'いすの上に本があります。', why:'Cái ghế có thật nhưng trống, quyển sách nằm trên bàn.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'つくえ', r:'tsukue', vi:'cái bàn học' }, { w:'本', r:'ほん / hon', vi:'quyển sách' },
    { w:'ある', r:'aru', vi:'có (dùng cho đồ vật)' }, { w:'いす', r:'isu', vi:'cái ghế' }
  ],
  gram:[{ p:'N の 上 に', vi:'Từ chỉ vị trí kẹp giữa hai trợ từ: つくえ の 上 に. Danh từ mốc đứng trước, không bao giờ đứng sau.',
    ex:['つくえの上に本があります。', 'Trên bàn có quyển sách.'] }] },

{ id:'ja-03', lang:'ja', lv:'n5', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:240, y:220 }, { p:'chair', x:130, y:220 }
  ]},
  alt:'Cái ghế đứng bên trái, cái bàn học ở bên phải.',
  opts:[
    { t:'いすはつくえのとなりにあります。', ok:true },
    { t:'いすはつくえの上にあります。', why:'となり là bên cạnh, 上 là bên trên. Cái ghế đứng dưới sàn.', trap:'cạnh / trên' },
    { t:'つくえはいすのとなりにあります。', why:'Đổi chỗ hai chủ thể — các chữ vẫn y nguyên.', trap:'hoán chủ thể' },
    { t:'いすはつくえのとなりにありません。', why:'Chỉ đuôi câu đổi từ あります sang ありません.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'となり', r:'tonari', vi:'bên cạnh (cùng loại, sát nhau)' }, { w:'そば', r:'soba', vi:'gần, kề bên' },
    { w:'いす', r:'isu', vi:'cái ghế' }, { w:'つくえ', r:'tsukue', vi:'cái bàn học' }
  ],
  gram:[{ p:'となり và そば', vi:'となり dùng cho hai vật cùng loại xếp sát nhau (nhà bên cạnh, ghế bên cạnh). そば chỉ nói là ở gần, không cần cùng loại.',
    ex:['いすはつくえのとなりにあります。', 'Cái ghế ở bên cạnh bàn học.'] }] },

{ id:'ja-04', lang:'ja', lv:'n5', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'bag', x:170, y:216, s:0.8 },
    { p:'book', x:170, y:158 }
  ]},
  alt:'Quyển sách trên mặt bàn, cái cặp để dưới gầm bàn.',
  opts:[
    { t:'かばんはつくえの下にあります。', ok:true },
    { t:'かばんはつくえの上にあります。', why:'Trên mặt bàn là quyển sách. Cái cặp nằm dưới gầm.', trap:'trên / dưới' },
    { t:'本はつくえの下にあります。', why:'Đổi mỗi chủ thể, phần còn lại giữ nguyên.', trap:'hoán chủ thể' },
    { t:'かばんはつくえの下にありません。', why:'Chỉ đuôi câu đổi.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'かばん', r:'kaban', vi:'cái cặp, túi xách' }, { w:'下', r:'した / shita', vi:'phía dưới' },
    { w:'本', r:'ほん / hon', vi:'quyển sách' }, { w:'つくえ', r:'tsukue', vi:'cái bàn học' }
  ],
  gram:[{ p:'は và が', vi:'Câu này dùng は vì đang NÓI VỀ cái cặp. Nếu trả lời câu hỏi «cái gì ở dưới bàn» thì lại dùng が: つくえの下にかばんがあります.',
    ex:['かばんはつくえの下にあります。', 'Cái cặp ở dưới gầm bàn.'] }] },

{ id:'ja-05', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'tree', x:150, y:220 },
    { p:'dog', x:250, y:220, s:1.1 }
  ]},
  alt:'Con chó đứng bên cạnh gốc cây.',
  opts:[
    { t:'いぬが木のそばにいます。', ok:true },
    { t:'いぬが木のそばにあります。', why:'Con chó là sinh vật nên phải dùng います.', trap:'います / あります' },
    { t:'いぬが木の上にいます。', why:'Con chó đứng dưới đất chứ không ở trên cây.', trap:'cạnh / trên' },
    { t:'とりが木のそばにいます。', why:'とり là con chim. Con vật trong tranh có bốn chân và cái đuôi.', trap:'chủ thể' }
  ],
  keys:[
    { w:'いぬ', r:'inu', vi:'con chó' }, { w:'とり', r:'tori', vi:'con chim' },
    { w:'木', r:'き / ki', vi:'cái cây' }, { w:'そば', r:'soba', vi:'gần, kề bên' }
  ],
  gram:[{ p:'とり và とおり', vi:'とり là con chim, とおり là con phố — chỉ khác một nhịp kéo dài. Trường âm trong tiếng Nhật đổi hẳn nghĩa, phải nghe kỹ độ dài.',
    ex:['いぬが木のそばにいます。', 'Con chó ở cạnh cái cây.'] }] },

{ id:'ja-06', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:150, y:36, view:'sun' }, { p:'clock', x:280, y:72, r:28, time:'9:00' },
    { p:'sofa', x:180, y:220 }
  ]},
  alt:'Cái đồng hồ treo bên phải cửa sổ.',
  opts:[
    { t:'とけいはまどのそばにあります。', ok:true },
    { t:'とけいはまどの下にあります。', why:'Đồng hồ treo ngang tầm cửa sổ, về phía bên phải.', trap:'cạnh / dưới' },
    { t:'まどはとけいのそばにあります。', why:'Đổi chỗ hai chủ thể.', trap:'hoán chủ thể' },
    { t:'とけいはソファのそばにあります。', why:'Ghế sofa có thật nhưng ở dưới sàn, còn đồng hồ treo trên tường.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'とけい', r:'tokei', vi:'cái đồng hồ' }, { w:'まど', r:'mado', vi:'cửa sổ' },
    { w:'ソファ', r:'sofa', vi:'ghế sofa' }, { w:'となり', r:'tonari', vi:'bên cạnh' }
  ],
  gram:[{ p:'とけい — đồng hồ nào cũng gọi thế', vi:'うでどけい là đồng hồ đeo tay, めざましどけい là đồng hồ báo thức, còn とけい nói chung cho cả đồng hồ treo tường.',
    ex:['とけいはまどのそばにあります。', 'Đồng hồ ở cạnh cửa sổ.'] }] },

{ id:'ja-07', lang:'ja', lv:'n4', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:110, y:220 }, { p:'desk', x:290, y:220 },
    { p:'bag', x:200, y:220, s:1.2 }
  ]},
  alt:'Cái cặp đặt dưới sàn, ở khoảng giữa hai cái bàn.',
  opts:[
    { t:'かばんはつくえとつくえの間にあります。', ok:true },
    { t:'かばんはつくえの上にあります。', why:'Cái cặp nằm dưới sàn, không ở trên mặt bàn nào.', trap:'giữa / trên' },
    { t:'かばんはつくえのとなりにあります。', why:'となり chỉ nói cạnh một cái bàn. Ở đây cặp nằm giữa hai cái.', trap:'cạnh / giữa' },
    { t:'かばんはつくえとつくえの間にありません。', why:'Chỉ đuôi câu đổi.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'間', r:'あいだ / aida', vi:'khoảng giữa' }, { w:'かばん', r:'kaban', vi:'cái cặp' },
    { w:'と', r:'to', vi:'và (nối danh từ)' }, { w:'つくえ', r:'tsukue', vi:'cái bàn học' }
  ],
  gram:[{ p:'A と B の間に', vi:'間 luôn cần hai mốc nối bằng と. Nếu chỉ có một mốc thì phải dùng となり hoặc そば.',
    ex:['つくえとつくえの間にあります。', 'Ở khoảng giữa hai cái bàn.'] }] },

{ id:'ja-08', lang:'ja', lv:'n4', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:80, y:220 }, { p:'table', x:230, y:220, w:130 },
    { p:'egg', x:210, y:158 }, { p:'egg', x:242, y:158 }
  ]},
  alt:'Hai quả trứng nằm trên mặt bàn, tủ lạnh đóng kín ở bên trái.',
  opts:[
    { t:'たまごはれいぞうこの中にありません。', ok:true },
    { t:'たまごはれいぞうこの中にあります。', why:'Tủ lạnh đang đóng, hai quả trứng nằm trên bàn.', trap:'phủ định chìm' },
    { t:'たまごはテーブルの上にありません。', why:'Trên bàn có hai quả trứng thật.', trap:'đúng vật, sai mốc' },
    { t:'たまごはれいぞうこの中にいません。', why:'Quả trứng là đồ vật nên dùng ありません, không dùng いません.', trap:'います / あります' }
  ],
  keys:[
    { w:'たまご', r:'tamago', vi:'quả trứng' }, { w:'れいぞうこ', r:'reizouko', vi:'tủ lạnh' },
    { w:'中', r:'なか / naka', vi:'bên trong' }, { w:'テーブル', r:'teeburu', vi:'cái bàn' }
  ],
  gram:[{ p:'中 và 上', vi:'中 là bên trong vật có lòng chứa, 上 là trên bề mặt. Tủ lạnh, cặp, phòng thì dùng 中; bàn, ghế thì dùng 上.',
    ex:['たまごはれいぞうこの中にありません。', 'Trứng không có trong tủ lạnh.'] }] },

/* ========== ĐƠN VỊ ĐẾM ========== */
{ id:'ja-09', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'cat', x:130, y:176, pose:'sit', s:0.75 },
    { p:'cat', x:275, y:220, pose:'lie', s:0.85 }, { p:'lamp', x:350, y:220 }
  ]},
  alt:'Một con mèo ngồi trên ghế sofa, một con mèo khác nằm dưới sàn.',
  opts:[
    { t:'ねこが二匹います。', ok:true },
    { t:'ねこが二個います。', why:'個 là đơn vị đếm đồ vật. Con vật nhỏ phải đếm bằng 匹.', trap:'đơn vị đếm' },
    { t:'ねこが三匹います。', why:'二 là hai, 三 là ba. Trong tranh có hai con.', trap:'số lượng' },
    { t:'ねこが二匹あります。', why:'Con mèo là sinh vật nên dùng います.', trap:'います / あります' }
  ],
  keys:[
    { w:'匹', r:'ひき / hiki', vi:'con (đếm thú nhỏ, cá, côn trùng)' }, { w:'個', r:'こ / ko', vi:'cái (đếm đồ vật)' },
    { w:'二', r:'に / ni', vi:'hai' }, { w:'三', r:'さん / san', vi:'ba' }
  ],
  gram:[{ p:'匹 đổi âm theo số', vi:'一匹 いっぴき · 二匹 にひき · 三匹 さんびき · 六匹 ろっぴき. Cùng một chữ 匹 mà đọc ba kiểu, đây là chỗ khó nghe nhất.',
    ex:['ねこが二匹います。', 'Có hai con mèo.'] }] },

{ id:'ja-10', lang:'ja', lv:'n5', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:180, y:220, w:120 }, { p:'book', x:150, y:158 },
    { p:'book', x:180, y:158 }, { p:'book', x:210, y:158 }
  ]},
  alt:'Ba quyển sách đặt cạnh nhau trên bàn.',
  opts:[
    { t:'本が三冊あります。', ok:true },
    { t:'本が三個あります。', why:'Sách vở đếm bằng 冊.', trap:'đơn vị đếm' },
    { t:'本が四冊あります。', why:'三 là ba, 四 là bốn. Trên bàn có ba quyển.', trap:'số lượng' },
    { t:'本が三冊います。', why:'Quyển sách là đồ vật nên dùng あります.', trap:'います / あります' }
  ],
  keys:[
    { w:'冊', r:'さつ / satsu', vi:'quyển (đếm sách, vở)' }, { w:'三', r:'さん / san', vi:'ba' },
    { w:'四', r:'よん / し', vi:'bốn' }, { w:'本', r:'ほん / hon', vi:'quyển sách' }
  ],
  gram:[{ p:'四 đọc よん hay し', vi:'Đếm thì hay dùng よん cho rõ (四冊 よんさつ), nhưng 四時 thì bắt buộc đọc よじ. Số 四 và 七 là hai số đọc lắt léo nhất.',
    ex:['本が三冊あります。', 'Có ba quyển sách.'] }] },

{ id:'ja-11', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:140, y:220, pose:'stand' },
    { p:'person', x:230, y:220, pose:'wave' }, { p:'tree', x:330, y:220 }
  ]},
  alt:'Hai người đứng ngoài đường, một người đang giơ tay vẫy.',
  opts:[
    { t:'人が二人います。', ok:true },
    { t:'人が二匹います。', why:'匹 chỉ dùng cho con vật. Người phải đếm bằng 人.', trap:'đơn vị đếm' },
    { t:'人が三人います。', why:'二人 là hai người, 三人 là ba người.', trap:'số lượng' },
    { t:'人が二人あります。', why:'Người là sinh vật nên dùng います.', trap:'います / あります' }
  ],
  keys:[
    { w:'人', r:'にん / ひと', vi:'người (vừa là danh từ, vừa là đơn vị đếm)' }, { w:'二人', r:'ふたり / futari', vi:'hai người' },
    { w:'一人', r:'ひとり / hitori', vi:'một người' }, { w:'三人', r:'さんにん / sannin', vi:'ba người' }
  ],
  gram:[{ p:'一人 ひとり · 二人 ふたり · 三人 さんにん', vi:'Hai số đầu đọc theo lối thuần Nhật, từ ba người trở đi mới quay về にん. Nghe ふたり là biết ngay có hai người.',
    ex:['人が二人います。', 'Có hai người.'] }] },

{ id:'ja-12', lang:'ja', lv:'n5', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'apple', x:145, y:158 },
    { p:'apple', x:178, y:158 }, { p:'apple', x:211, y:158 }, { p:'apple', x:244, y:158 }
  ]},
  alt:'Bốn quả táo xếp hàng trên bàn.',
  opts:[
    { t:'りんごが四つあります。', ok:true },
    { t:'りんごが三つあります。', why:'四つ よっつ là bốn, 三つ みっつ là ba. Trên bàn có bốn quả.', trap:'số lượng' },
    { t:'りんごが四冊あります。', why:'冊 chỉ dùng cho sách. Quả táo dùng つ hoặc 個.', trap:'đơn vị đếm' },
    { t:'りんごが四つしかありません。', why:'しか…ない là «chỉ có… thôi», mang ý chê ít. Câu đúng chỉ tả số lượng.', trap:'しか (chỉ có)' }
  ],
  keys:[
    { w:'一つ', r:'ひとつ / hitotsu', vi:'một cái' }, { w:'四つ', r:'よっつ / yottsu', vi:'bốn cái' },
    { w:'りんご', r:'ringo', vi:'quả táo' }, { w:'しか', r:'shika', vi:'chỉ… (đi với phủ định)' }
  ],
  gram:[{ p:'ひとつ ふたつ みっつ よっつ', vi:'Dãy này đếm đồ vật nói chung, dùng tới mười (とお) rồi thôi. Từ mười một trở đi phải chuyển sang 十一個.',
    ex:['りんごが四つあります。', 'Có bốn quả táo.'] }] },

{ id:'ja-13', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shoe', x:140, y:220 }, { p:'shoe', x:215, y:220, flip:true },
    { p:'door', x:300, y:100 }
  ]},
  alt:'Một đôi giày để dưới sàn cạnh cửa ra vào.',
  opts:[
    { t:'くつが一足あります。', ok:true },
    { t:'くつが一個あります。', why:'Giày dép đi thành đôi nên đếm bằng 足.', trap:'đơn vị đếm' },
    { t:'くつが二足あります。', why:'Hai chiếc trong tranh là MỘT đôi, không phải hai đôi.', trap:'số lượng' },
    { t:'くつが一足もありません。', why:'一足も…ない là «không có lấy một đôi nào».', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'くつ', r:'kutsu', vi:'giày' }, { w:'足', r:'そく / soku', vi:'đôi (đếm giày, tất)' },
    { w:'一足', r:'いっそく / issoku', vi:'một đôi' }, { w:'ドア', r:'doa', vi:'cửa ra vào' }
  ],
  gram:[{ p:'～も…ない', vi:'Thêm も vào sau số đếm rồi kết bằng phủ định là thành «không có lấy một… nào». Nghe sót chữ も là hiểu ngược.',
    ex:['くつが一足あります。', 'Có một đôi giày.'] }] },

{ id:'ja-14', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:44 }, { p:'tree', x:180, y:220 },
    { p:'bird', x:290, y:218 }
  ]},
  alt:'Một con chim đậu dưới đất, cạnh một cái cây.',
  opts:[
    { t:'とりが一羽います。', ok:true },
    { t:'とりが一匹います。', why:'Chim chóc có đơn vị đếm riêng là 羽. 匹 dùng cho thú bốn chân nhỏ.', trap:'đơn vị đếm' },
    { t:'とりが木の上にいます。', why:'Con chim đứng dưới đất chứ không đậu trên cây.', trap:'vị trí' },
    { t:'とりが一羽もいません。', why:'一羽も…ない là «không có lấy một con nào».', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'羽', r:'わ / wa', vi:'con (đếm chim, thỏ)' }, { w:'とり', r:'tori', vi:'con chim' },
    { w:'一羽', r:'いちわ / ichiwa', vi:'một con (chim)' }, { w:'木', r:'き / ki', vi:'cái cây' }
  ],
  gram:[{ p:'羽 — đơn vị của loài có cánh', vi:'Chữ 羽 nghĩa gốc là cái lông vũ. Thỏ cũng đếm bằng 羽 vì tai dài trông như cánh — đây là ngoại lệ nổi tiếng.',
    ex:['とりが一羽います。', 'Có một con chim.'] }] },

{ id:'ja-15', lang:'ja', lv:'n4', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'car', x:150, y:220 },
    { p:'bicycle', x:300, y:220 }
  ]},
  alt:'Một chiếc ô tô bên trái, một chiếc xe đạp bên phải.',
  opts:[
    { t:'車が一台あります。', ok:true },
    { t:'車が一個あります。', why:'Xe cộ và máy móc đếm bằng 台.', trap:'đơn vị đếm' },
    { t:'車が二台あります。', why:'Vật bên phải là xe đạp, không phải ô tô.', trap:'số lượng' },
    { t:'じてんしゃが一台あります。', why:'車 là ô tô, じてんしゃ là xe đạp — hai từ cùng có chữ 車.', trap:'gần nghĩa: 車 · じてんしゃ' }
  ],
  keys:[
    { w:'車', r:'くるま / kuruma', vi:'ô tô, xe' }, { w:'じてんしゃ', r:'jitensha', vi:'xe đạp' },
    { w:'台', r:'だい / dai', vi:'chiếc (đếm xe, máy móc)' }, { w:'一台', r:'いちだい / ichidai', vi:'một chiếc' }
  ],
  gram:[{ p:'台 — đơn vị của máy móc', vi:'Ô tô, xe đạp, máy tính, tủ lạnh, tivi đều đếm bằng 台 vì đều là đồ có máy hoặc có khung lớn.',
    ex:['車が一台あります。', 'Có một chiếc ô tô.'] }] },

{ id:'ja-16', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:110, y:50 }, { p:'picture', x:230, y:50 },
    { p:'sofa', x:190, y:220 }
  ]},
  alt:'Hai bức tranh treo cạnh nhau trên tường.',
  opts:[
    { t:'絵が二枚あります。', ok:true },
    { t:'絵が二個あります。', why:'Vật mỏng và phẳng như tranh, giấy, vé đếm bằng 枚.', trap:'đơn vị đếm' },
    { t:'絵が三枚あります。', why:'二 là hai, 三 là ba. Trên tường treo hai bức.', trap:'số lượng' },
    { t:'絵が二枚もありません。', why:'二枚も…ない là «không có tới hai bức».', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'絵', r:'え / e', vi:'bức tranh' }, { w:'枚', r:'まい / mai', vi:'tờ, tấm (đếm vật mỏng)' },
    { w:'かべ', r:'kabe', vi:'bức tường' }, { w:'二枚', r:'にまい / nimai', vi:'hai tấm' }
  ],
  gram:[{ p:'枚 — tờ, tấm', vi:'Giấy, ảnh, vé, đĩa, áo sơ mi đều đếm bằng 枚 vì đều mỏng và phẳng.',
    ex:['絵が二枚あります。', 'Có hai bức tranh.'] }] },

/* ========== SỐ VÀ GIỜ ========== */
{ id:'ja-17', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:120, y:82, time:'10:00', r:34 }, { p:'table', x:250, y:220, w:120 },
    { p:'cup', x:250, y:158 }
  ]},
  alt:'Đồng hồ chỉ đúng 10 giờ, trên bàn có một cái cốc.',
  opts:[
    { t:'今、十時です。', ok:true },
    { t:'今、十二時です。', why:'十時 là 10 giờ, 十二時 là 12 giờ. Kim ngắn đang ở số 10.', trap:'giờ: số' },
    { t:'今、十時十分です。', why:'Kim dài đang chỉ thẳng lên số 12, tức là đúng giờ.', trap:'giờ: phút' },
    { t:'今、十時ではありません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'今', r:'いま / ima', vi:'bây giờ' }, { w:'時', r:'じ / ji', vi:'giờ' },
    { w:'分', r:'ふん・ぷん', vi:'phút' }, { w:'十', r:'じゅう / juu', vi:'mười' }
  ],
  gram:[{ p:'分 đọc ふん hay ぷん', vi:'一分 いっぷん · 二分 にふん · 三分 さんぷん · 四分 よんぷん · 五分 ごふん. Số đứng trước quyết định cách đọc, không có cách nào ngoài học thuộc.',
    ex:['今、十時です。', 'Bây giờ là mười giờ.'] }] },

{ id:'ja-18', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:120, y:82, time:'3:30', r:34 }, { p:'sofa', x:260, y:220 }
  ]},
  alt:'Đồng hồ chỉ 3 giờ rưỡi.',
  opts:[
    { t:'三時半です。', ok:true },
    { t:'三時十三分です。', why:'半 là rưỡi (30 phút). Kim dài đang chỉ thẳng xuống.', trap:'giờ: phút' },
    { t:'四時半です。', why:'三 là ba, 四 là bốn. Kim ngắn nằm giữa 3 và 4.', trap:'giờ: số' },
    { t:'三時半前です。', why:'Thêm chữ 前 ở cuối là thành «chưa tới ba giờ rưỡi».', trap:'前 (trước)' }
  ],
  keys:[
    { w:'半', r:'はん / han', vi:'rưỡi, ba mươi phút' }, { w:'三時', r:'さんじ / sanji', vi:'ba giờ' },
    { w:'四時', r:'よじ / yoji', vi:'bốn giờ' }, { w:'前', r:'まえ / mae', vi:'trước' }
  ],
  gram:[{ p:'四時 đọc よじ', vi:'Không bao giờ đọc しじ hay よんじ. Tương tự 七時 しちじ và 九時 くじ. Ba giờ này là ba ngoại lệ bắt buộc thuộc.',
    ex:['三時半です。', 'Bây giờ là ba giờ rưỡi.'] }] },

{ id:'ja-19', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'4:15', r:32 }, { p:'desk', x:250, y:220 },
    { p:'laptop', x:250, y:158 }
  ]},
  alt:'Đồng hồ chỉ 4 giờ 15, trên bàn có cái laptop đang mở.',
  opts:[
    { t:'四時十五分です。', ok:true },
    { t:'四時五十分です。', why:'十五 là 15, 五十 là 50 — chỉ đảo thứ tự hai chữ.', trap:'đảo số: 十五 · 五十' },
    { t:'五時十五分です。', why:'四 là bốn, 五 là năm. Kim ngắn vừa qua số 4.', trap:'giờ: số' },
    { t:'四時十五分前です。', why:'Thêm chữ 前 là lùi xuống 3 giờ 45.', trap:'前 (kém)' }
  ],
  keys:[
    { w:'十五', r:'じゅうご / juugo', vi:'mười lăm' }, { w:'五十', r:'ごじゅう / gojuu', vi:'năm mươi' },
    { w:'四時', r:'よじ / yoji', vi:'bốn giờ' }, { w:'五時', r:'ごじ / goji', vi:'năm giờ' }
  ],
  gram:[{ p:'十五 và 五十', vi:'Cùng hai chữ, chỉ đảo thứ tự: 十五 là 10+5, 五十 là 5×10. Nghe chữ nào đứng trước là ra ngay.',
    ex:['四時十五分です。', 'Bây giờ là bốn giờ mười lăm.'] }] },

{ id:'ja-20', lang:'ja', lv:'n4', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:150, y:220, w:120 }, { p:'bread', x:150, y:158 },
    { p:'tag', x:300, y:130, text:'300' }
  ]},
  alt:'Ổ bánh mì trên bàn, bảng giá ghi 300.',
  opts:[
    { t:'パンは三百円です。', ok:true },
    { t:'パンは三千円です。', why:'百 là trăm, 千 là nghìn — chỉ khác một chữ ở giữa.', trap:'trăm / nghìn' },
    { t:'パンは四百円です。', why:'三 là ba, 四 là bốn. Bảng giá ghi 300.', trap:'số lượng' },
    { t:'パンは三百円ではありません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'パン', r:'pan', vi:'bánh mì' }, { w:'百', r:'ひゃく / hyaku', vi:'trăm' },
    { w:'千', r:'せん / sen', vi:'nghìn' }, { w:'円', r:'えん / en', vi:'yên (tiền Nhật)' }
  ],
  gram:[{ p:'百 đổi âm theo số', vi:'三百 さんびゃく · 六百 ろっぴゃく · 八百 はっぴゃく. Chữ 百 bị biến âm nên nghe rất khác nhau, phải quen từng cái.',
    ex:['パンは三百円です。', 'Bánh mì ba trăm yên.'] }] },

{ id:'ja-21', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'7:00', r:32 }, { p:'bed', x:250, y:220 },
    { p:'sleeper', x:258, y:180 }
  ]},
  alt:'Đồng hồ chỉ 7 giờ, một người vẫn đang nằm ngủ.',
  opts:[
    { t:'七時なのに、まだ寝ています。', ok:true },
    { t:'七時なのに、もう起きました。', why:'まだ là vẫn chưa, もう là đã… rồi. Người trong tranh vẫn nhắm mắt nằm.', trap:'まだ / もう' },
    { t:'一時なのに、まだ寝ています。', why:'七時 しちじ và 一時 いちじ nghe rất gần nhau. Kim ngắn đang ở số 7.', trap:'gần âm: しちじ · いちじ' },
    { t:'七時なのに、まだ寝ていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'まだ', r:'mada', vi:'vẫn chưa, vẫn còn' }, { w:'もう', r:'mou', vi:'đã… rồi' },
    { w:'七時', r:'しちじ / shichiji', vi:'bảy giờ' }, { w:'起きる', r:'okiru', vi:'thức dậy' }
  ],
  gram:[{ p:'しちじ và いちじ', vi:'Vì hay nhầm với 一時 nên người Nhật thường đọc 七 là なな cho rõ, nhưng riêng 七時 thì vẫn giữ しちじ. Phải bắt phụ âm đầu.',
    ex:['七時なのに、まだ寝ています。', 'Bảy giờ rồi mà vẫn đang ngủ.'] }] },

{ id:'ja-22', lang:'ja', lv:'n3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'2:45', r:32 }, { p:'sofa', x:250, y:220 },
    { p:'lamp', x:350, y:220 }
  ]},
  alt:'Đồng hồ chỉ 2 giờ 45 phút.',
  opts:[
    { t:'三時十五分前です。', ok:true },
    { t:'三時十五分です。', why:'Bỏ mỗi chữ 前 ở cuối là vọt lên 3 giờ 15.', trap:'前 (kém)' },
    { t:'二時十五分前です。', why:'Câu này là 1 giờ 45. Kim ngắn đang gần số 3.', trap:'giờ: số' },
    { t:'三時五十分前です。', why:'十五 là 15, 五十 là 50 — chỉ đảo thứ tự.', trap:'đảo số: 十五 · 五十' }
  ],
  keys:[
    { w:'前', r:'まえ / mae', vi:'trước, kém' }, { w:'三時', r:'さんじ / sanji', vi:'ba giờ' },
    { w:'二時', r:'にじ / niji', vi:'hai giờ' }, { w:'十五分', r:'じゅうごふん', vi:'mười lăm phút' }
  ],
  gram:[{ p:'～分前 — kém mấy phút', vi:'Người Nhật nói giờ kém bằng cách nêu GIỜ SẮP TỚI rồi thêm 前: 2:45 là 三時十五分前. Chữ 前 nằm cuối nên rất dễ nghe sót.',
    ex:['三時十五分前です。', 'Ba giờ kém mười lăm.'] }] },

/* ========== 着る · はく · かぶる · かける ========== */
{ id:'ja-23', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:120 }, { p:'hat', x:160, y:158 },
    { p:'coat', x:300, y:180 }
  ]},
  alt:'Cái mũ đặt trên bàn, áo khoác treo trên móc.',
  opts:[
    { t:'ぼうしはテーブルの上にあります。', ok:true },
    { t:'コートはテーブルの上にあります。', why:'Áo khoác có thật nhưng đang treo trên móc, không nằm trên bàn.', trap:'đúng vật, sai vị trí' },
    { t:'ぼうしはテーブルの下にあります。', why:'上 là trên, 下 là dưới.', trap:'trên / dưới' },
    { t:'ぼうしはテーブルの上にいます。', why:'Cái mũ là đồ vật nên dùng あります.', trap:'います / あります' }
  ],
  keys:[
    { w:'ぼうし', r:'boushi', vi:'cái mũ' }, { w:'コート', r:'kooto', vi:'áo khoác' },
    { w:'かぶる', r:'kaburu', vi:'đội (mũ)' }, { w:'着る', r:'きる / kiru', vi:'mặc (áo)' }
  ],
  gram:[{ p:'着る · はく · かぶる · かける', vi:'Tiếng Nhật chia «mặc» theo bộ phận: シャツを着る mặc áo, ズボンをはく mặc quần, ぼうしをかぶる đội mũ, めがねをかける đeo kính.',
    ex:['ぼうしはテーブルの上にあります。', 'Cái mũ ở trên bàn.'] }] },

{ id:'ja-24', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:60, y:100 }, { p:'shoe', x:180, y:220 },
    { p:'shoe', x:255, y:220, flip:true }, { p:'umbrella', x:345, y:220, s:1.4 }
  ]},
  alt:'Đôi giày để dưới sàn, cái ô gập đứng ở góc phải.',
  opts:[
    { t:'くつをはいて、かさをさします。', ok:true },
    { t:'くつをさして、かさをはきます。', why:'Hai động từ bị đổi chỗ cho nhau. Giày thì はく, ô thì さす.', trap:'着る / はく / さす' },
    { t:'くつをはいて、かさを着ます。', why:'着る dùng cho áo mặc phần trên người, không dùng cho cái ô.', trap:'着る / はく / さす' },
    { t:'くつをはいて、かさをさしません。', why:'Phủ định nằm ở đuôi cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'はく', r:'haku', vi:'đi (giày, tất), mặc (quần)' }, { w:'さす', r:'sasu', vi:'giương (ô)' },
    { w:'かさ', r:'kasa', vi:'cái ô' }, { w:'くつ', r:'kutsu', vi:'giày' }
  ],
  gram:[{ p:'かさをさす', vi:'Cái ô đi với động từ riêng là さす. Nói かさをかぶる hay かさを着る đều sai.',
    ex:['くつをはいて、かさをさします。', 'Đi giày và giương ô.'] }] },

{ id:'ja-25', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'hanger', x:140, y:110 }, { p:'coat', x:140, y:180 },
    { p:'glasses', x:280, y:158 }, { p:'table', x:280, y:220, w:110 }
  ]},
  alt:'Áo khoác treo trên móc, cặp kính đặt trên bàn.',
  opts:[
    { t:'コートはかけてあって、めがねはテーブルの上にあります。', ok:true },
    { t:'コートはテーブルの上にあって、めがねはかけてあります。', why:'Hai vế bị đổi chỗ cho nhau, mọi chữ vẫn y nguyên.', trap:'hoán chủ thể' },
    { t:'コートはかけてあって、めがねはテーブルの下にあります。', why:'Vế đầu đúng nên tai buông. Cặp kính nằm trên mặt bàn.', trap:'đúng một nửa' },
    { t:'コートはかけてあって、めがねはテーブルの上にありません。', why:'Phủ định nằm ở tận cuối câu dài.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'コート', r:'kooto', vi:'áo khoác' }, { w:'めがね', r:'megane', vi:'cái kính' },
    { w:'かける', r:'kakeru', vi:'treo lên; đeo (kính)' }, { w:'テーブル', r:'teeburu', vi:'cái bàn' }
  ],
  gram:[{ p:'～てある — có người làm sẵn', vi:'かけてあります nghĩa là có ai đó đã treo lên và nó vẫn đang ở đấy. Khác với かけています là đang treo (động tác).',
    ex:['コートはかけてあります。', 'Áo khoác đã được treo sẵn.'] }] },

/* ========== ～ている (ĐANG LÀM) ========== */
{ id:'ja-26', lang:'ja', lv:'n5', cat:'Học tập',
  scene:{ bg:'room', items:[
    { p:'sofa', x:170, y:220 }, { p:'person', x:170, y:216, pose:'read' },
    { p:'lamp', x:330, y:220 }
  ]},
  alt:'Một người ngồi trên ghế sofa, hai tay cầm sách mở ra trước mặt.',
  opts:[
    { t:'その人は本を読んでいます。', ok:true },
    { t:'その人は本を書いています。', why:'読む là đọc, 書く là viết. Người này cầm sách mở bằng cả hai tay.', trap:'hành động gần giống' },
    { t:'その人は本を読みました。', why:'～ている là đang làm, ～ました là đã làm xong.', trap:'thì: đang / đã' },
    { t:'その人は本を読んでいません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'読む', r:'よむ / yomu', vi:'đọc' }, { w:'書く', r:'かく / kaku', vi:'viết' },
    { w:'本', r:'ほん / hon', vi:'quyển sách' }, { w:'人', r:'ひと / hito', vi:'người' }
  ],
  gram:[{ p:'～ている', vi:'Động từ chuyển sang thể て rồi ghép いる: 読む → 読んでいる. Nghe được đuôi ている là biết câu nói về việc đang diễn ra.',
    ex:['本を読んでいます。', 'Đang đọc sách.'] }] },

{ id:'ja-27', lang:'ja', lv:'n5', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:210, y:220, w:130 }, { p:'bowl', x:210, y:158 },
    { p:'person', x:110, y:220, pose:'eat' }, { p:'window', x:290, y:28, view:'sun' }
  ]},
  alt:'Một người đang đưa tay lên miệng ăn, trên bàn có một cái bát.',
  opts:[
    { t:'ごはんを食べています。', ok:true },
    { t:'ごはんを食べます。', why:'～ています là đang ăn, thể ます trơn lại nói về thói quen hoặc việc sắp làm.', trap:'thì: đang / sẽ' },
    { t:'ごはんをもう食べました。', why:'もう…ました là ăn xong rồi. Bữa vẫn đang dở.', trap:'thì: đã xong' },
    { t:'水を飲んでいます。', why:'Trong tranh là cái bát chứ không phải cốc nước.', trap:'chủ thể' }
  ],
  keys:[
    { w:'ごはん', r:'gohan', vi:'cơm; bữa ăn' }, { w:'食べる', r:'たべる / taberu', vi:'ăn' },
    { w:'飲む', r:'のむ / nomu', vi:'uống' }, { w:'水', r:'みず / mizu', vi:'nước' }
  ],
  gram:[{ p:'Ba mốc thời gian', vi:'食べます sẽ ăn hoặc hay ăn · 食べています đang ăn · 食べました đã ăn. Tranh chỉ khớp đúng một mốc.',
    ex:['ごはんを食べています。', 'Đang ăn cơm.'] }] },

{ id:'ja-28', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'phone' }, { p:'table', x:270, y:220, w:110 },
    { p:'phone', x:270, y:158 }
  ]},
  alt:'Một người áp điện thoại lên tai, trên bàn còn một chiếc điện thoại nữa.',
  opts:[
    { t:'でんわをしています。', ok:true },
    { t:'でんわをしていません。', why:'Phủ định nằm ở đuôi dài cuối câu. Người này đang áp máy lên tai.', trap:'phủ định chìm' },
    { t:'でんわをしました。', why:'～ています là đang gọi, ～ました là đã gọi xong.', trap:'thì: đang / đã' },
    { t:'テーブルの上にでんわがありません。', why:'Trên bàn có một chiếc điện thoại thật.', trap:'phủ định sai sự thật' }
  ],
  keys:[
    { w:'でんわ', r:'denwa', vi:'điện thoại; cuộc gọi' }, { w:'する', r:'suru', vi:'làm' },
    { w:'テーブル', r:'teeburu', vi:'cái bàn' }, { w:'上', r:'うえ / ue', vi:'phía trên' }
  ],
  gram:[{ p:'名詞 + する', vi:'Rất nhiều động từ là danh từ ghép với する: でんわする, べんきょうする, りょうりする. Phần danh từ mới là chỗ mang nghĩa.',
    ex:['でんわをしています。', 'Đang gọi điện thoại.'] }] },

{ id:'ja-29', lang:'ja', lv:'n4', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:60, y:220 }, { p:'person', x:160, y:220, pose:'cook' },
    { p:'stove', x:250, y:220 }
  ]},
  alt:'Một người đứng trước bếp, tay đưa về phía nồi.',
  opts:[
    { t:'りょうりをしています。', ok:true },
    { t:'さらをあらっています。', why:'さらをあらう là rửa bát. Trong tranh là cái bếp đang nấu, không có bồn rửa.', trap:'hành động gần giống' },
    { t:'りょうりをするところです。', why:'～るところ là vừa sắp làm. Người này đã đứng vào bếp và đưa tay ra rồi.', trap:'thì: sắp / đang' },
    { t:'りょうりをしていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'りょうり', r:'ryouri', vi:'việc nấu ăn; món ăn' }, { w:'あらう', r:'arau', vi:'rửa' },
    { w:'さら', r:'sara', vi:'cái đĩa' }, { w:'れいぞうこ', r:'reizouko', vi:'tủ lạnh' }
  ],
  gram:[{ p:'～ところ', vi:'するところ sắp làm · しているところ đang làm · したところ vừa làm xong. Ba mốc này nằm cùng một chỗ trong câu nên rất dễ nghe nhầm.',
    ex:['りょうりをしています。', 'Đang nấu ăn.'] }] },

{ id:'ja-30', lang:'ja', lv:'n5', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:170, y:220, pose:'run' },
    { p:'tree', x:320, y:220 }
  ]},
  alt:'Một người đang chạy, thân đổ về phía trước.',
  opts:[
    { t:'その人は走っています。', ok:true },
    { t:'その人は歩いています。', why:'歩く là đi bộ, 走る là chạy. Người trong tranh đổ người về trước, chân xoạc rộng.', trap:'hành động gần giống' },
    { t:'その人は立っています。', why:'立っている là đứng yên một chỗ.', trap:'hành động' },
    { t:'その人は走っていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'走る', r:'はしる / hashiru', vi:'chạy' }, { w:'歩く', r:'あるく / aruku', vi:'đi bộ' },
    { w:'立つ', r:'たつ / tatsu', vi:'đứng' }, { w:'人', r:'ひと / hito', vi:'người' }
  ],
  gram:[{ p:'立っています — đang đứng', vi:'Với động từ tư thế, ～ている lại chỉ TRẠNG THÁI chứ không phải động tác đang diễn ra. 立っている là đang ở tư thế đứng.',
    ex:['その人は走っています。', 'Người đó đang chạy.'] }] },

{ id:'ja-31', lang:'ja', lv:'n4', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'person', x:170, y:216, pose:'write' },
    { p:'shelf', x:300, y:120, w:80, h:94, rows:3 }
  ]},
  alt:'Một người ngồi ở bàn, tay cầm bút viết.',
  opts:[
    { t:'その人は字を書いています。', ok:true },
    { t:'その人は本を読んでいます。', why:'読む là đọc. Người này cúi xuống mặt bàn, một tay cầm bút.', trap:'hành động gần giống' },
    { t:'その人は字を書きました。', why:'～ている là đang viết, ～ました là đã viết xong.', trap:'thì: đang / đã' },
    { t:'その人は字を書いていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'字', r:'じ / ji', vi:'chữ viết' }, { w:'書く', r:'かく / kaku', vi:'viết' },
    { w:'読む', r:'よむ / yomu', vi:'đọc' }, { w:'本だな', r:'hondana', vi:'kệ sách' }
  ],
  gram:[{ p:'書く và かく', vi:'字を書く là viết chữ, 絵をかく là vẽ tranh — cùng một âm かく nhưng viết bằng chữ Hán khác nhau. Phải nghe danh từ đứng trước.',
    ex:['字を書いています。', 'Đang viết chữ.'] }] },

{ id:'ja-32', lang:'ja', lv:'n5', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'person', x:120, y:220, pose:'drink' }, { p:'table', x:250, y:220, w:120 },
    { p:'bottle', x:250, y:158 }
  ]},
  alt:'Một người đang đưa cốc lên miệng, trên bàn có một cái chai.',
  opts:[
    { t:'水を飲んでいます。', ok:true },
    { t:'水を飲みました。', why:'～ている là đang uống, ～ました là đã uống xong.', trap:'thì: đang / đã' },
    { t:'ごはんを食べています。', why:'Người này đưa cốc lên miệng, trên bàn là cái chai chứ không phải bát cơm.', trap:'chủ thể' },
    { t:'水を飲んでいません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'飲む', r:'のむ / nomu', vi:'uống' }, { w:'水', r:'みず / mizu', vi:'nước' },
    { w:'びん', r:'bin', vi:'cái chai' }, { w:'コップ', r:'koppu', vi:'cái cốc' }
  ],
  gram:[{ p:'飲む — uống và uống thuốc', vi:'くすりを飲む là uống thuốc, dù viên thuốc thì nuốt chứ không uống. Đây là cách nói cố định.',
    ex:['水を飲んでいます。', 'Đang uống nước.'] }] },

{ id:'ja-33', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:160, y:220 }, { p:'sleeper', x:168, y:180 },
    { p:'window', x:280, y:30, view:'night' }
  ]},
  alt:'Trời đã tối ngoài cửa sổ, một người đang nằm ngủ trên giường.',
  opts:[
    { t:'その人は寝ています。', ok:true },
    { t:'その人は起きています。', why:'起きている là đang thức. Người này nhắm mắt nằm yên.', trap:'hành động ngược' },
    { t:'その人は寝るところです。', why:'寝るところ là sắp đi ngủ. Người này đã nằm xuống và nhắm mắt rồi.', trap:'thì: sắp / đang' },
    { t:'その人は寝ていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'寝る', r:'ねる / neru', vi:'ngủ, nằm' }, { w:'起きる', r:'おきる / okiru', vi:'thức dậy' },
    { w:'よる', r:'yoru', vi:'ban đêm' }, { w:'まど', r:'mado', vi:'cửa sổ' }
  ],
  gram:[{ p:'起きています — hai nghĩa', vi:'Tuỳ ngữ cảnh mà 起きています là «đã dậy rồi» hoặc «đang thức». Muốn nói động tác đang ngồi dậy thì phải nói 起きようとしています.',
    ex:['その人は寝ています。', 'Người đó đang ngủ.'] }] },

/* ========== TRẠNG THÁI: MỞ · ĐÓNG · BẬT · TẮT ========== */
{ id:'ja-34', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:110, y:32, view:'sun', open:true }, { p:'window', x:250, y:32, view:'sun' },
    { p:'sofa', x:200, y:220 }
  ]},
  alt:'Hai cửa sổ: cửa bên trái mở cánh ra ngoài, cửa bên phải đóng kín.',
  opts:[
    { t:'左のまどは開いています。', ok:true },
    { t:'左のまどは閉まっています。', why:'開く là mở, 閉まる là đóng. Cửa bên trái có cánh bật ra.', trap:'mở / đóng' },
    { t:'右のまどは開いています。', why:'左 là bên trái, 右 là bên phải.', trap:'trái / phải' },
    { t:'まどは二つとも開いています。', why:'二つとも là cả hai. Chỉ một cửa mở.', trap:'とも (cả hai)' }
  ],
  keys:[
    { w:'左', r:'ひだり / hidari', vi:'bên trái' }, { w:'右', r:'みぎ / migi', vi:'bên phải' },
    { w:'開く', r:'あく / aku', vi:'mở ra (tự nó)' }, { w:'閉まる', r:'しまる / shimaru', vi:'đóng lại (tự nó)' }
  ],
  gram:[{ p:'開いている và 開けてある', vi:'開いています tả trạng thái cửa đang mở. 開けてあります nhấn rằng có người cố ý mở ra và để nguyên như thế.',
    ex:['左のまどは開いています。', 'Cửa sổ bên trái đang mở.'] }] },

{ id:'ja-35', lang:'ja', lv:'n3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'lamp', x:110, y:220 }, { p:'desk', x:250, y:220 },
    { p:'laptop', x:250, y:158 }
  ]},
  alt:'Cây đèn bàn đứng bên trái, cái laptop đang mở trên bàn.',
  opts:[
    { t:'パソコンはついているのに、だれも使っていません。', ok:true },
    { t:'パソコンは消えているのに、だれも使っていません。', why:'ついている là đang bật, 消えている là đang tắt. Màn hình laptop đang dựng lên.', trap:'bật / tắt' },
    { t:'パソコンはついていて、一人が使っています。', why:'Vế đầu đúng nên tai buông. Trong tranh không có ai ngồi ở bàn.', trap:'đúng một nửa' },
    { t:'でんきはついているのに、だれも使っていません。', why:'でんき là cây đèn — có thật nhưng câu đúng nói về cái laptop.', trap:'đúng vật, sai chủ thể' }
  ],
  keys:[
    { w:'パソコン', r:'pasokon', vi:'máy tính' }, { w:'つく', r:'tsuku', vi:'sáng lên, bật lên' },
    { w:'消える', r:'きえる / kieru', vi:'tắt đi' }, { w:'だれも', r:'daremo', vi:'không một ai (đi với phủ định)' }
  ],
  gram:[{ p:'だれも + phủ định', vi:'だれも bắt buộc đi với phủ định: だれも使っていません. Nếu dùng với khẳng định thì phải đổi thành だれか (ai đó).',
    ex:['だれも使っていません。', 'Không ai dùng cả.'] }] },

{ id:'ja-36', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:80, y:96, open:true }, { p:'sofa', x:250, y:220 },
    { p:'plant', x:350, y:220, s:1.3 }
  ]},
  alt:'Cánh cửa ra vào đang mở, trong phòng có ghế sofa và chậu cây.',
  opts:[
    { t:'ドアが開いています。', ok:true },
    { t:'ドアが閉まっています。', why:'Cánh cửa trong tranh bật ra một góc.', trap:'mở / đóng' },
    { t:'まどが開いています。', why:'ドア là cửa ra vào, まど là cửa sổ. Trong tranh không vẽ cửa sổ.', trap:'chủ thể' },
    { t:'ドアが開いていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'ドア', r:'doa', vi:'cửa ra vào' }, { w:'まど', r:'mado', vi:'cửa sổ' },
    { w:'開く', r:'あく / aku', vi:'mở ra' }, { w:'うえきばち', r:'uekibachi', vi:'chậu cây' }
  ],
  gram:[{ p:'開く あく và 開ける あける', vi:'あく là cửa tự mở (không nói ai làm), あける là người mở cửa ra. Cùng một chữ Hán 開 mà hai cách đọc, hai nghĩa.',
    ex:['ドアが開いています。', 'Cửa đang mở.'] }] },

{ id:'ja-37', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:130 }, { p:'key', x:160, y:156, s:1.4 },
    { p:'door', x:300, y:100 }
  ]},
  alt:'Chiếc chìa khoá nằm trên bàn, cánh cửa đóng ở bên phải.',
  opts:[
    { t:'かぎがテーブルの上に置いてあります。', ok:true },
    { t:'かぎがドアにさしてあります。', why:'Cánh cửa có thật nhưng chìa khoá nằm trên mặt bàn.', trap:'đúng vật, sai vị trí' },
    { t:'かぎがテーブルの下に置いてあります。', why:'上 là trên, 下 là dưới.', trap:'trên / dưới' },
    { t:'かぎがテーブルの上に置いてありません。', why:'Phủ định nằm ở tận cuối câu dài.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'かぎ', r:'kagi', vi:'chìa khoá' }, { w:'置く', r:'おく / oku', vi:'đặt, để' },
    { w:'ドア', r:'doa', vi:'cánh cửa' }, { w:'テーブル', r:'teeburu', vi:'cái bàn' }
  ],
  gram:[{ p:'置いてあります', vi:'～てあります nói rằng có người đặt sẵn rồi để nguyên đấy. Nếu chỉ tả vật nằm ở đâu thì nói かぎがあります là đủ.',
    ex:['かぎがテーブルの上に置いてあります。', 'Chìa khoá được để sẵn trên bàn.'] }] },

/* ========== THỜI TIẾT · NGOÀI TRỜI ========== */
{ id:'ja-38', lang:'ja', lv:'n5', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:42 }, { p:'rain', x:90, y:62, n:6 },
    { p:'person', x:230, y:220, pose:'walk' }, { p:'umbrella', x:236, y:104, open:true, s:1.2 }
  ]},
  alt:'Trời mưa, một người che ô đi bộ ngoài đường.',
  opts:[
    { t:'雨がふっていて、かさをさしています。', ok:true },
    { t:'雪がふっていて、かさをさしています。', why:'Vế sau đúng nên tai buông. Trong tranh là những vạch xiên, tức là mưa.', trap:'mưa / tuyết' },
    { t:'雨がふっていて、かさをさしていません。', why:'Cái ô đang xoè trên đầu người đó.', trap:'phủ định chìm' },
    { t:'雨がふっていて、ぼうしをかぶっています。', why:'Vật trên đầu người đó là cái ô xoè ra, không phải cái mũ.', trap:'chủ thể' }
  ],
  keys:[
    { w:'雨', r:'あめ / ame', vi:'mưa' }, { w:'雪', r:'ゆき / yuki', vi:'tuyết' },
    { w:'ふる', r:'furu', vi:'(mưa, tuyết) rơi' }, { w:'かさ', r:'kasa', vi:'cái ô' }
  ],
  gram:[{ p:'雨 あめ và 飴 あめ', vi:'Cùng đọc あめ nhưng 雨 (mưa) cao giọng ở âm đầu, còn 飴 (kẹo) cao giọng ở âm sau. Tiếng Nhật phân biệt bằng cao độ chứ không phải bằng âm.',
    ex:['雨がふっています。', 'Trời đang mưa.'] }] },

{ id:'ja-39', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:42 }, { p:'snowfall', x:90, y:66, n:7 },
    { p:'tree', x:200, y:220 }, { p:'person', x:310, y:220, pose:'stand' }
  ]},
  alt:'Tuyết rơi lất phất, một cái cây và một người đứng ngoài trời.',
  opts:[
    { t:'雪がふっています。', ok:true },
    { t:'雨がふっています。', why:'Mưa vẽ bằng vạch xiên, tuyết vẽ bằng chấm tròn.', trap:'mưa / tuyết' },
    { t:'雪がふるところです。', why:'ふるところ là sắp rơi. Tuyết đã rơi đầy trời rồi.', trap:'thì: sắp / đang' },
    { t:'雪がふっていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'雪', r:'ゆき / yuki', vi:'tuyết' }, { w:'雨', r:'あめ / ame', vi:'mưa' },
    { w:'木', r:'き / ki', vi:'cái cây' }, { w:'外', r:'そと / soto', vi:'bên ngoài' }
  ],
  gram:[{ p:'ゆき và ゆうき', vi:'ゆき là tuyết, ゆうき là dũng khí — chỉ khác một nhịp kéo dài. Trường âm là chỗ người Việt hay bỏ qua nhất khi nghe.',
    ex:['雪がふっています。', 'Tuyết đang rơi.'] }] },

{ id:'ja-40', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:60, y:44 }, { p:'tree', x:150, y:220, h:82 },
    { p:'tree', x:300, y:220, h:82 }
  ]},
  alt:'Trời nắng, hai cái cây cao bằng nhau đứng ngoài đường.',
  opts:[
    { t:'木が二本あります。', ok:true },
    { t:'木が二個あります。', why:'Cây cối và vật dài đếm bằng 本.', trap:'đơn vị đếm' },
    { t:'木が三本あります。', why:'二 là hai, 三 là ba.', trap:'số lượng' },
    { t:'左の木のほうが高いです。', why:'Hai cây trong tranh cao bằng nhau.', trap:'so sánh' }
  ],
  keys:[
    { w:'本', r:'ほん / hon', vi:'cây, chiếc (đếm vật dài)' }, { w:'木', r:'き / ki', vi:'cái cây' },
    { w:'高い', r:'たかい / takai', vi:'cao; đắt' }, { w:'ほう', r:'hou', vi:'phía, bên (khi so sánh)' }
  ],
  gram:[{ p:'本 đổi âm theo số', vi:'一本 いっぽん · 二本 にほん · 三本 さんぼん · 六本 ろっぽん. Cùng chữ 本 mà ba cách đọc, y như 匹 và 百.',
    ex:['木が二本あります。', 'Có hai cái cây.'] }] },

{ id:'ja-41', lang:'ja', lv:'n4', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'bus', x:160, y:220 },
    { p:'person', x:300, y:220, pose:'stand' }, { p:'sign', x:350, y:220, dir:'right' }
  ]},
  alt:'Một người đứng cạnh biển chỉ đường, xe buýt đỗ ở bên trái.',
  opts:[
    { t:'その人はバスのそばに立っています。', ok:true },
    { t:'その人はバスの中にすわっています。', why:'Người này đứng ngoài đường, không ở trong xe.', trap:'trong / ngoài' },
    { t:'その人はバスのそばにすわっています。', why:'立つ là đứng, すわる là ngồi.', trap:'đứng / ngồi' },
    { t:'その人はバスのそばに立っていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'バス', r:'basu', vi:'xe buýt' }, { w:'立つ', r:'たつ / tatsu', vi:'đứng' },
    { w:'すわる', r:'suwaru', vi:'ngồi' }, { w:'中', r:'なか / naka', vi:'bên trong' }
  ],
  gram:[{ p:'立っています và すわっています', vi:'Tư thế của người luôn dùng ～ている: 立っている đang đứng, すわっている đang ngồi. Không nói 立ちます để tả tranh.',
    ex:['バスのそばに立っています。', 'Đang đứng cạnh xe buýt.'] }] },

/* ========== に · で · SO SÁNH · SỐ LƯỢNG ========== */
{ id:'ja-42', lang:'ja', lv:'n4', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'person', x:150, y:216, pose:'write' },
    { p:'desk', x:290, y:220 }
  ]},
  alt:'Một người ngồi viết ở cái bàn bên trái, cái bàn bên phải bỏ trống.',
  opts:[
    { t:'その人はきょうしつで勉強しています。', ok:true },
    { t:'その人はきょうしつに勉強しています。', why:'に chỉ nơi TỒN TẠI, で mới chỉ nơi DIỄN RA hành động. Ở đây có hành động học.', trap:'に / で' },
    { t:'その人はきょうしつで寝ています。', why:'Người này cúi xuống bàn, tay cầm bút.', trap:'hành động' },
    { t:'二人がきょうしつで勉強しています。', why:'Chỉ có một người, cái bàn bên phải bỏ trống.', trap:'số lượng' }
  ],
  keys:[
    { w:'きょうしつ', r:'kyoushitsu', vi:'phòng học' }, { w:'勉強', r:'べんきょう / benkyou', vi:'việc học' },
    { w:'で', r:'de', vi:'ở (nơi diễn ra hành động)' }, { w:'に', r:'ni', vi:'ở (nơi tồn tại)' }
  ],
  gram:[{ p:'に và で', vi:'きょうしつにいます là ở trong lớp (tồn tại), きょうしつで勉強します là học ở trong lớp (hành động). Động từ quyết định dùng chữ nào.',
    ex:['きょうしつで勉強しています。', 'Đang học ở trong lớp.'] }] },

{ id:'ja-43', lang:'ja', lv:'n4', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'person', x:160, y:216, pose:'sit' },
    { p:'tv', x:320, y:170 }
  ]},
  alt:'Một người ngồi trên ghế sofa, đối diện là cái tivi.',
  opts:[
    { t:'その人はうちでテレビを見ています。', ok:true },
    { t:'その人はうちにテレビを見ています。', why:'Có hành động xem nên phải dùng で.', trap:'に / で' },
    { t:'その人はうちで本を読んでいます。', why:'Trong tranh là cái tivi có màn hình và chân đế, không có quyển sách.', trap:'chủ thể' },
    { t:'その人はうちでテレビを見ていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'テレビ', r:'terebi', vi:'tivi' }, { w:'うち', r:'uchi', vi:'nhà (mình)' },
    { w:'見る', r:'みる / miru', vi:'xem, nhìn' }, { w:'ソファ', r:'sofa', vi:'ghế sofa' }
  ],
  gram:[{ p:'見る và 読む', vi:'本を見る là giở ra ngắm, 本を読む mới là đọc hiểu nội dung. テレビ thì luôn đi với 見る.',
    ex:['テレビを見ています。', 'Đang xem tivi.'] }] },

{ id:'ja-44', lang:'ja', lv:'n4', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:44 }, { p:'bus', x:150, y:220, w:126 },
    { p:'car', x:310, y:220 }
  ]},
  alt:'Xe buýt bên trái to hơn hẳn chiếc ô tô con bên phải.',
  opts:[
    { t:'バスは車より大きいです。', ok:true },
    { t:'車はバスより大きいです。', why:'Đổi chỗ hai chủ thể quanh chữ より. Vật đứng ĐẦU câu mới là vật hơn.', trap:'hoán chủ thể' },
    { t:'バスは車より小さいです。', why:'Chỉ tính từ cuối đổi. 大きい là to, 小さい là nhỏ.', trap:'to / nhỏ' },
    { t:'バスと車は同じ大きさです。', why:'同じ là như nhau. Xe buýt dài hơn hẳn.', trap:'so sánh bằng / hơn' }
  ],
  keys:[
    { w:'より', r:'yori', vi:'hơn (dùng khi so sánh)' }, { w:'大きい', r:'おおきい / ookii', vi:'to, lớn' },
    { w:'小さい', r:'ちいさい / chiisai', vi:'nhỏ' }, { w:'同じ', r:'おなじ / onaji', vi:'giống nhau' }
  ],
  gram:[{ p:'A は B より …', vi:'より bám sau vật bị đem ra so. Vật đứng đầu câu là vật hơn. Đảo hai vật là đảo hẳn nghĩa.',
    ex:['バスは車より大きいです。', 'Xe buýt to hơn ô tô.'] }] },

{ id:'ja-45', lang:'ja', lv:'n4', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:190 }, { p:'cup', x:150, y:158 },
    { p:'cup', x:185, y:158 }, { p:'cup', x:220, y:158 }, { p:'teapot', x:268, y:158 }
  ]},
  alt:'Ba cái cốc xếp hàng trên bàn, bên phải là ấm trà.',
  opts:[
    { t:'コップが三つあります。', ok:true },
    { t:'コップが二つあります。', why:'三つ みっつ là ba, 二つ ふたつ là hai. Trên bàn có ba cái.', trap:'số lượng' },
    { t:'コップが三杯あります。', why:'杯 đếm phần nước bên trong (ba cốc nước), còn cái cốc rỗng thì đếm bằng つ.', trap:'đơn vị đếm' },
    { t:'コップが三つしかありません。', why:'しか…ない là «chỉ có ba cái thôi», mang ý chê ít.', trap:'しか (chỉ có)' }
  ],
  keys:[
    { w:'コップ', r:'koppu', vi:'cái cốc' }, { w:'杯', r:'はい / hai', vi:'cốc, chén (đếm đồ uống)' },
    { w:'きゅうす', r:'kyuusu', vi:'cái ấm trà' }, { w:'三つ', r:'みっつ / mittsu', vi:'ba cái' }
  ],
  gram:[{ p:'つ và 杯', vi:'コップ三つ là ba cái cốc (vật), 水三杯 là ba cốc nước (lượng). 杯 cũng đổi âm: 一杯 いっぱい · 三杯 さんばい.',
    ex:['コップが三つあります。', 'Có ba cái cốc.'] }] },

{ id:'ja-46', lang:'ja', lv:'n3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'lamp', x:70, y:220 }, { p:'person', x:170, y:220, pose:'stand' },
    { p:'sofa', x:290, y:220 }
  ]},
  alt:'Chỉ có một người đứng trong phòng, ghế sofa bỏ trống.',
  opts:[
    { t:'へやには一人だけいます。', ok:true },
    { t:'へやには二人だけいます。', why:'一人 là một người, 二人 là hai người — chỉ khác đúng một chữ. Ghế sofa không ai ngồi.', trap:'số lượng' },
    { t:'へやにはだれもいません。', why:'だれもいない là không có một ai. Trong tranh rõ ràng có một người.', trap:'だれも (không ai)' },
    { t:'へやには一人だけすわっています。', why:'Người này đang đứng chứ không ngồi.', trap:'đứng / ngồi' }
  ],
  keys:[
    { w:'だけ', r:'dake', vi:'chỉ, duy nhất' }, { w:'だれも', r:'daremo', vi:'không một ai' },
    { w:'へや', r:'heya', vi:'căn phòng' }, { w:'一人', r:'ひとり / hitori', vi:'một người' }
  ],
  gram:[{ p:'だけ và しか…ない', vi:'一人だけいます và 一人しかいません đều là «chỉ có một người», nhưng しか kèm ý tiếc là ít quá. だけ thì trung tính.',
    ex:['へやには一人だけいます。', 'Trong phòng chỉ có một người.'] }] },

{ id:'ja-47', lang:'ja', lv:'n3', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:46, w:90, h:120, rows:4 }, { p:'tag', x:220, y:130, text:'5000' },
    { p:'coat', x:310, y:184 }
  ]},
  alt:'Chiếc áo khoác treo bên phải, bảng giá ghi 5000.',
  opts:[
    { t:'このコートは五千円です。', ok:true },
    { t:'このコートは五百円です。', why:'千 là nghìn, 百 là trăm — chỉ khác một chữ ở giữa.', trap:'trăm / nghìn' },
    { t:'このコートは六千円です。', why:'五 là năm, 六 là sáu. Bảng giá ghi 5000.', trap:'số lượng' },
    { t:'このコートは五千円ではありません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'五千', r:'ごせん / gosen', vi:'năm nghìn' }, { w:'五百', r:'ごひゃく / gohyaku', vi:'năm trăm' },
    { w:'六', r:'ろく / roku', vi:'sáu' }, { w:'コート', r:'kooto', vi:'áo khoác' }
  ],
  gram:[{ p:'千 đổi âm theo số', vi:'三千 さんぜん · 八千 はっせん. Chữ 千 cũng bị biến âm như 百 và 本, nên nghe số tiền tiếng Nhật phải quen từng tổ hợp.',
    ex:['このコートは五千円です。', 'Chiếc áo khoác này năm nghìn yên.'] }] },

{ id:'ja-48', lang:'ja', lv:'n3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:120, y:60, w:110, h:120, rows:3 }, { p:'ladder', x:290, y:220 },
    { p:'person', x:350, y:220, pose:'point', flip:true }
  ]},
  alt:'Kệ sách đầy sách, cái thang dựng bên cạnh, một người đứng chỉ tay về phía kệ.',
  opts:[
    { t:'その人は本だなを指しています。', ok:true },
    { t:'その人ははしごを指しています。', why:'Cái thang có thật nhưng cánh tay vươn qua nó, chỉ tới cái kệ.', trap:'đúng vật, sai hướng' },
    { t:'その人ははしごに登っています。', why:'Người này đứng dưới đất, chưa đặt chân lên thang.', trap:'hành động' },
    { t:'その人は本だなを指していません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'本だな', r:'hondana', vi:'kệ sách' }, { w:'はしご', r:'hashigo', vi:'cái thang' },
    { w:'指す', r:'さす / sasu', vi:'chỉ tay về' }, { w:'登る', r:'のぼる / noboru', vi:'trèo lên' }
  ],
  gram:[{ p:'さす — một âm nhiều nghĩa', vi:'かさをさす giương ô · 指をさす chỉ tay · 日がさす nắng chiếu. Phải nghe danh từ đứng trước mới biết nghĩa nào.',
    ex:['本だなを指しています。', 'Đang chỉ tay về kệ sách.'] }] },

{ id:'ja-49', lang:'ja', lv:'n3', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:250, y:30, view:'rain' }, { p:'sofa', x:150, y:220 },
    { p:'person', x:150, y:216, pose:'read' }, { p:'umbrella', x:340, y:220, s:1.4 }
  ]},
  alt:'Ngoài cửa sổ trời mưa, một người ngồi trong nhà đọc sách, cái ô gập dựng ở góc.',
  opts:[
    { t:'外は雨ですが、中で本を読んでいます。', ok:true },
    { t:'中は雨ですが、外で本を読んでいます。', why:'Hai từ 外 và 中 bị đổi chỗ cho nhau.', trap:'trong / ngoài' },
    { t:'外は雨ですが、中でかさをさしています。', why:'Vế đầu đúng nên tai buông. Cái ô đang gập lại dựng ở góc.', trap:'đúng một nửa' },
    { t:'外は雪ですが、中で本を読んでいます。', why:'Ngoài cửa sổ là những vạch xiên, tức là mưa.', trap:'mưa / tuyết' }
  ],
  keys:[
    { w:'外', r:'そと / soto', vi:'bên ngoài' }, { w:'中', r:'なか / naka', vi:'bên trong' },
    { w:'雨', r:'あめ / ame', vi:'mưa' }, { w:'が', r:'ga', vi:'nhưng (nối hai vế trái ý)' }
  ],
  gram:[{ p:'～が — nhưng', vi:'Chữ が đứng giữa câu nối hai vế trái ý nhau. Nó khác hẳn trợ từ が đứng sau chủ ngữ. Nghe được が ở giữa là biết vế sau sẽ ngược chiều.',
    ex:['外は雨ですが、中で本を読んでいます。', 'Ngoài trời mưa nhưng trong nhà thì đang đọc sách.'] }] },

{ id:'ja-50', lang:'ja', lv:'n3', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:150, y:220, pose:'walk' },
    { p:'person', x:240, y:220, pose:'walk' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai người cùng đi bộ ngoài đường.',
  opts:[
    { t:'二人がいっしょに歩いています。', ok:true },
    { t:'一人で歩いています。', why:'一人で là đi một mình. Trong tranh có hai người đi cùng nhau.', trap:'一人で / いっしょに' },
    { t:'二人がいっしょに走っています。', why:'Vế đầu đúng nên tai buông. Hai người này bước thong thả, thân thẳng.', trap:'hành động gần giống' },
    { t:'二人はいっしょに歩いていません。', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'いっしょに', r:'issho ni', vi:'cùng nhau' }, { w:'一人で', r:'ひとりで / hitori de', vi:'một mình' },
    { w:'歩く', r:'あるく / aruku', vi:'đi bộ' }, { w:'走る', r:'はしる / hashiru', vi:'chạy' }
  ],
  gram:[{ p:'いっしょに — có âm ngắt', vi:'Chữ っ nhỏ là một nhịp lặng bắt buộc: いっしょ chứ không phải いしょ. Bỏ mất nhịp này là người Nhật nghe không ra.',
    ex:['二人がいっしょに歩いています。', 'Hai người đang đi bộ cùng nhau.'] }] }

  );
})();
