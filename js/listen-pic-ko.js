/* ============================================================
   LangLab — NGHE & CHỌN TRANH · TIẾNG HÀN
   ------------------------------------------------------------
   Do LangLab tự soạn. Tranh ghép từ js/scene-svg.js, không dùng ảnh
   của bên thứ ba và không dùng ảnh do AI sinh.

   BẪY NGHE ĐANG DÙNG (mỗi câu ít nhất hai kiểu khác nhau):
     · 있어요 / 없어요  — phủ định nằm ở cuối câu, lúc tai đã buông
     · vị trí 위 · 밑(아래) · 옆 · 앞 · 뒤 · 사이 · 안 · 밖
     · đơn vị đếm 마리(con vật) · 개(đồ vật) · 명(người) · 권(sách) ·
       장(tờ, tấm) · 대(máy móc) · 켤레(đôi giày) · 그루(cây)
     · số đếm thuần Hàn 하나·둘·셋 với số Hán–Hàn 일·이·삼:
       GIỜ đọc thuần Hàn, PHÚT đọc Hán–Hàn — 세 시 삼십 분
     · ㅐ / ㅔ: 새 (con chim) với 세 (ba)
     · 입다 / 쓰다 / 신다 — ba động từ «mặc, đội, đi» khác nhau
     · đuôi -고 있어요 (đang) · -았/었어요 (đã) · -(으)ㄹ 거예요 (sẽ)
     · 에 (ở tại) với 에서 (làm việc gì ở đâu)
     · 아직 (vẫn chưa) với 벌써 (đã… rồi)

   LƯU Ý khi soạn thêm: không lấy 이/가 với 은/는 làm bẫy chính — trong
   câu nói nhanh chúng rất dễ nuốt, đó là bẫy không công bằng. Dùng
   chúng làm ghi chú ngữ pháp thì được.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ========== 있어요 · 없어요 · VỊ TRÍ ========== */
{ id:'ko-01', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:150, y:220 }, { p:'cat', x:158, y:186, pose:'sit', s:0.8 },
    { p:'window', x:280, y:30, view:'sun' }
  ]},
  alt:'Con mèo ngồi trên giường, cửa sổ ở bên phải.',
  opts:[
    { t:'고양이가 침대 위에 있어요.', ok:true },
    { t:'고양이가 침대 밑에 있어요.', why:'위 là trên, 밑 là dưới. Hai chữ này đứng đúng một chỗ trong câu.', trap:'trên / dưới' },
    { t:'고양이가 침대 위에 없어요.', why:'Cả câu giống hệt, chỉ chữ cuối đổi từ 있어요 sang 없어요.', trap:'있다 / 없다' },
    { t:'개가 침대 위에 있어요.', why:'개 là con chó. Con vật trong tranh có tai nhọn và ria mép.', trap:'chủ thể' }
  ],
  keys:[
    { w:'고양이', r:'goyangi', vi:'con mèo' }, { w:'침대', r:'chimdae', vi:'cái giường' },
    { w:'위', r:'wi', vi:'phía trên' }, { w:'밑', r:'mit', vi:'phía dưới' }
  ],
  gram:[{ p:'N 위에 있어요', vi:'Từ chỉ vị trí đứng SAU danh từ mốc rồi mới tới 에: 침대 위에. Đây là trật tự ngược hẳn với tiếng Việt.',
    ex:['고양이가 침대 위에 있어요.', 'Con mèo ở trên giường.'] }] },

{ id:'ko-02', lang:'ko', lv:'so-cap-1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:140, y:220 }, { p:'chair', x:250, y:220 }
  ]},
  alt:'Cái bàn học trống không, bên cạnh là một cái ghế.',
  opts:[
    { t:'책상 위에 책이 없어요.', ok:true },
    { t:'책상 위에 책이 있어요.', why:'Chỉ chữ cuối đổi. Mặt bàn trong tranh trống trơn.', trap:'있다 / 없다' },
    { t:'의자 위에 책이 없어요.', why:'Cái ghế có thật nhưng câu đúng nói về mặt bàn.', trap:'đúng vật, sai mốc' },
    { t:'책상 밑에 책이 없어요.', why:'밑 là gầm bàn — cũng trống, nhưng câu đúng nói về mặt bàn.', trap:'trên / dưới' }
  ],
  keys:[
    { w:'책상', r:'chaeksang', vi:'bàn học' }, { w:'책', r:'chaek', vi:'quyển sách' },
    { w:'없어요', r:'eopseoyo', vi:'không có' }, { w:'의자', r:'uija', vi:'cái ghế' }
  ],
  gram:[{ p:'있어요 và 없어요', vi:'Hai từ này luôn nằm ở CUỐI câu — chỗ tai dễ buông nhất. Nghe câu tiếng Hàn phải giữ sức đến chữ cuối cùng.',
    ex:['책상 위에 책이 없어요.', 'Trên bàn không có quyển sách nào.'] }] },

{ id:'ko-03', lang:'ko', lv:'so-cap-1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:230, y:220 }, { p:'chair', x:130, y:220 }
  ]},
  alt:'Cái ghế đứng bên trái, cái bàn học ở bên phải.',
  opts:[
    { t:'의자가 책상 옆에 있어요.', ok:true },
    { t:'의자가 책상 위에 있어요.', why:'옆 là bên cạnh, 위 là bên trên. Cái ghế đứng dưới sàn.', trap:'cạnh / trên' },
    { t:'책상이 의자 옆에 있어요.', why:'Đổi chỗ hai chủ thể — mọi chữ vẫn y nguyên.', trap:'hoán chủ thể' },
    { t:'의자가 책상 옆에 없어요.', why:'Thêm mỗi chữ cuối 없어요.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'옆', r:'yeop', vi:'bên cạnh' }, { w:'의자', r:'uija', vi:'cái ghế' },
    { w:'책상', r:'chaeksang', vi:'bàn học' }, { w:'있어요', r:'isseoyo', vi:'có, ở' }
  ],
  gram:[{ p:'A가 B 옆에 있어요', vi:'Vật cần tả đi với 이/가, vật làm mốc đi với 옆에. Đảo hai vật là đảo nghĩa dù chữ không đổi.',
    ex:['의자가 책상 옆에 있어요.', 'Cái ghế ở bên cạnh bàn học.'] }] },

{ id:'ko-04', lang:'ko', lv:'so-cap-1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'bag', x:170, y:216, s:0.8 },
    { p:'book', x:170, y:158 }
  ]},
  alt:'Quyển sách trên mặt bàn, cái cặp để dưới gầm bàn.',
  opts:[
    { t:'가방은 책상 밑에 있어요.', ok:true },
    { t:'가방은 책상 위에 있어요.', why:'Trên mặt bàn là quyển sách. Cái cặp nằm dưới gầm.', trap:'trên / dưới' },
    { t:'책은 책상 밑에 있어요.', why:'Đổi mỗi chủ thể, phần còn lại giữ nguyên.', trap:'hoán chủ thể' },
    { t:'가방은 책상 밑에 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'가방', r:'gabang', vi:'cái cặp, túi xách' }, { w:'밑', r:'mit', vi:'dưới, gầm' },
    { w:'책', r:'chaek', vi:'quyển sách' }, { w:'책상', r:'chaeksang', vi:'bàn học' }
  ],
  gram:[{ p:'밑 và 아래', vi:'Cả hai đều là «phía dưới». 밑 thiên về sát bên dưới hoặc gầm, 아래 thiên về thấp hơn nói chung.',
    ex:['가방은 책상 밑에 있어요.', 'Cái cặp để dưới gầm bàn.'] }] },

{ id:'ko-05', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'tree', x:150, y:220 },
    { p:'dog', x:240, y:220, s:1.1 }
  ]},
  alt:'Con chó đứng bên cạnh gốc cây.',
  opts:[
    { t:'개가 나무 옆에 있어요.', ok:true },
    { t:'개가 나무 위에 있어요.', why:'Con chó đứng dưới đất chứ không ở trên cây.', trap:'cạnh / trên' },
    { t:'새가 나무 옆에 있어요.', why:'새 là con chim. Con vật trong tranh có bốn chân và cái đuôi.', trap:'chủ thể' },
    { t:'개가 나무 옆에 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'개', r:'gae', vi:'con chó' }, { w:'새', r:'sae', vi:'con chim' },
    { w:'나무', r:'namu', vi:'cái cây' }, { w:'옆', r:'yeop', vi:'bên cạnh' }
  ],
  gram:[{ p:'개 · 새 · 게', vi:'Ba từ một âm tiết rất hay lẫn: 개 con chó, 새 con chim, 게 con cua. Chỉ khác mỗi nguyên âm.',
    ex:['개가 나무 옆에 있어요.', 'Con chó đứng cạnh cái cây.'] }] },

{ id:'ko-06', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:160, y:36, view:'sun' }, { p:'clock', x:280, y:70, time:'9:00', r:28 },
    { p:'sofa', x:170, y:220 }
  ]},
  alt:'Cái đồng hồ treo bên phải cửa sổ.',
  opts:[
    { t:'시계가 창문 옆에 있어요.', ok:true },
    { t:'시계가 창문 밑에 있어요.', why:'Đồng hồ treo ngang tầm cửa sổ, về phía bên phải.', trap:'cạnh / dưới' },
    { t:'창문이 시계 옆에 있어요.', why:'Đổi chỗ hai chủ thể.', trap:'hoán chủ thể' },
    { t:'시계가 소파 옆에 있어요.', why:'Ghế sofa có thật nhưng ở dưới sàn, còn đồng hồ treo trên tường.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'시계', r:'sigye', vi:'cái đồng hồ' }, { w:'창문', r:'changmun', vi:'cửa sổ' },
    { w:'소파', r:'sopa', vi:'ghế sofa' }, { w:'옆', r:'yeop', vi:'bên cạnh' }
  ],
  gram:[{ p:'시계 và 세계', vi:'시계 là đồng hồ, 세계 là thế giới. Chỉ khác nguyên âm ㅣ với ㅔ ở âm tiết đầu, nói nhanh rất dễ lẫn.',
    ex:['시계가 창문 옆에 있어요.', 'Đồng hồ ở cạnh cửa sổ.'] }] },

{ id:'ko-07', lang:'ko', lv:'so-cap-2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:110, y:220 }, { p:'desk', x:290, y:220 },
    { p:'bag', x:200, y:220, s:1.2 }
  ]},
  alt:'Cái cặp đặt dưới sàn, ở khoảng giữa hai cái bàn.',
  opts:[
    { t:'가방이 책상 사이에 있어요.', ok:true },
    { t:'가방이 책상 위에 있어요.', why:'Cái cặp nằm dưới sàn, không ở trên mặt bàn nào.', trap:'giữa / trên' },
    { t:'가방이 책상 옆에 있어요.', why:'옆 chỉ nói cạnh một cái bàn. Ở đây cặp nằm giữa hai cái.', trap:'cạnh / giữa' },
    { t:'가방이 책상 사이에 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'사이', r:'sai', vi:'khoảng giữa' }, { w:'가방', r:'gabang', vi:'cái cặp' },
    { w:'책상', r:'chaeksang', vi:'bàn học' }, { w:'옆', r:'yeop', vi:'bên cạnh' }
  ],
  gram:[{ p:'사이에 — ở giữa hai vật', vi:'사이 luôn cần hai mốc. Nếu chỉ có một mốc thì phải dùng 옆에.',
    ex:['가방이 책상 사이에 있어요.', 'Cái cặp nằm giữa hai cái bàn.'] }] },

{ id:'ko-08', lang:'ko', lv:'so-cap-2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'fridge', x:80, y:220 }, { p:'table', x:230, y:220, w:130 },
    { p:'egg', x:210, y:158 }, { p:'egg', x:242, y:158 }
  ]},
  alt:'Hai quả trứng nằm trên mặt bàn, tủ lạnh đóng kín ở bên trái.',
  opts:[
    { t:'달걀이 냉장고 밖에 있어요.', ok:true },
    { t:'달걀이 냉장고 안에 있어요.', why:'안 là bên trong, 밖 là bên ngoài. Tủ lạnh đang đóng, trứng nằm trên bàn.', trap:'trong / ngoài' },
    { t:'달걀이 냉장고 안에 없어요.', why:'Câu này cũng đúng sự thật nhưng nói theo hướng phủ định, còn câu đúng tả thẳng chỗ của quả trứng.', trap:'있다 / 없다' },
    { t:'달걀이 탁자 밖에 있어요.', why:'밖 chỉ dùng được với vật có lòng trong. Cái bàn thì không có «bên ngoài».', trap:'mốc không hợp' }
  ],
  keys:[
    { w:'달걀', r:'dalgyal', vi:'quả trứng gà' }, { w:'냉장고', r:'naengjanggo', vi:'tủ lạnh' },
    { w:'안', r:'an', vi:'bên trong' }, { w:'밖', r:'bak', vi:'bên ngoài' }
  ],
  gram:[{ p:'안 và 밖', vi:'Hai từ này chỉ dùng với vật có lòng trong: tủ lạnh, phòng, cặp. Bàn hay ghế thì dùng 위·밑·옆.',
    ex:['달걀이 냉장고 밖에 있어요.', 'Quả trứng ở bên ngoài tủ lạnh.'] }] },

/* ========== ĐƠN VỊ ĐẾM ========== */
{ id:'ko-09', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'cat', x:130, y:176, pose:'sit', s:0.75 },
    { p:'cat', x:275, y:220, pose:'lie', s:0.85 }, { p:'lamp', x:350, y:220 }
  ]},
  alt:'Một con mèo ngồi trên ghế sofa, một con mèo khác nằm dưới sàn.',
  opts:[
    { t:'고양이가 두 마리 있어요.', ok:true },
    { t:'고양이가 두 개 있어요.', why:'개 là đơn vị đếm đồ vật. Con vật phải đếm bằng 마리.', trap:'đơn vị đếm' },
    { t:'고양이가 세 마리 있어요.', why:'두 là hai, 세 là ba. Trong tranh có hai con.', trap:'số lượng' },
    { t:'고양이가 두 마리 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'마리', r:'mari', vi:'con (đơn vị đếm động vật)' }, { w:'개', r:'gae', vi:'cái (đơn vị đếm đồ vật)' },
    { w:'두', r:'du', vi:'hai' }, { w:'세', r:'se', vi:'ba' }
  ],
  gram:[{ p:'수 + 단위명사', vi:'Tiếng Hàn luôn phải có đơn vị đếm: 마리 cho con vật, 개 cho đồ vật, 명 cho người, 권 cho sách. Nghe được đơn vị là biết đang đếm thứ gì.',
    ex:['고양이가 두 마리 있어요.', 'Có hai con mèo.'] }] },

{ id:'ko-10', lang:'ko', lv:'so-cap-1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:180, y:220, w:120 }, { p:'book', x:150, y:158 },
    { p:'book', x:180, y:158 }, { p:'book', x:210, y:158 }
  ]},
  alt:'Ba quyển sách đặt cạnh nhau trên bàn.',
  opts:[
    { t:'책이 세 권 있어요.', ok:true },
    { t:'책이 세 개 있어요.', why:'Sách vở đếm bằng 권. 개 là đơn vị chung cho đồ vật khác.', trap:'đơn vị đếm' },
    { t:'책이 네 권 있어요.', why:'세 là ba, 네 là bốn. Trên bàn có ba quyển.', trap:'số lượng' },
    { t:'책이 세 권 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'권', r:'gwon', vi:'quyển (đơn vị đếm sách)' }, { w:'세', r:'se', vi:'ba' },
    { w:'네', r:'ne', vi:'bốn' }, { w:'책', r:'chaek', vi:'quyển sách' }
  ],
  gram:[{ p:'세 và 네', vi:'Số thuần Hàn khi đứng trước đơn vị đếm sẽ rút gọn: 셋→세, 넷→네, 하나→한, 둘→두. Hai chữ 세 và 네 chỉ khác mỗi nguyên âm.',
    ex:['책이 세 권 있어요.', 'Có ba quyển sách.'] }] },

{ id:'ko-11', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:140, y:220, pose:'stand' },
    { p:'person', x:230, y:220, pose:'wave' }, { p:'tree', x:330, y:220 }
  ]},
  alt:'Hai người đứng ngoài đường, một người đang giơ tay vẫy.',
  opts:[
    { t:'사람이 두 명 있어요.', ok:true },
    { t:'사람이 두 마리 있어요.', why:'마리 chỉ dùng cho con vật. Người phải đếm bằng 명.', trap:'đơn vị đếm' },
    { t:'사람이 세 명 있어요.', why:'두 là hai, 세 là ba. Trong tranh có hai người.', trap:'số lượng' },
    { t:'사람이 두 명 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'명', r:'myeong', vi:'người (đơn vị đếm người)' }, { w:'사람', r:'saram', vi:'người' },
    { w:'마리', r:'mari', vi:'con (đơn vị đếm động vật)' }, { w:'두', r:'du', vi:'hai' }
  ],
  gram:[{ p:'명 và 분', vi:'명 dùng cho người bình thường, 분 là cách nói kính trọng cho người lớn tuổi hoặc khách.',
    ex:['사람이 두 명 있어요.', 'Có hai người.'] }] },

{ id:'ko-12', lang:'ko', lv:'so-cap-1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'apple', x:145, y:158 },
    { p:'apple', x:178, y:158 }, { p:'apple', x:211, y:158 }, { p:'apple', x:244, y:158 }
  ]},
  alt:'Bốn quả táo xếp hàng trên bàn.',
  opts:[
    { t:'사과가 네 개 있어요.', ok:true },
    { t:'사과가 네 권 있어요.', why:'권 chỉ dùng cho sách. Quả táo dùng 개.', trap:'đơn vị đếm' },
    { t:'사과가 다섯 개 있어요.', why:'네 là bốn, 다섯 là năm. Trên bàn có bốn quả.', trap:'số lượng' },
    { t:'사과가 네 개 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'사과', r:'sagwa', vi:'quả táo' }, { w:'개', r:'gae', vi:'cái, quả (đơn vị đếm đồ vật)' },
    { w:'네', r:'ne', vi:'bốn' }, { w:'다섯', r:'daseot', vi:'năm' }
  ],
  gram:[{ p:'하나 둘 셋 넷 다섯', vi:'Đây là dãy số thuần Hàn, dùng để đếm vật và đọc GIỜ. Dãy 일 이 삼 사 오 là Hán–Hàn, dùng cho phút, tiền và số điện thoại.',
    ex:['사과가 네 개 있어요.', 'Có bốn quả táo.'] }] },

{ id:'ko-13', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shoe', x:140, y:220 }, { p:'shoe', x:215, y:220, flip:true },
    { p:'door', x:300, y:100 }
  ]},
  alt:'Một đôi giày để dưới sàn cạnh cửa ra vào.',
  opts:[
    { t:'신발이 한 켤레 있어요.', ok:true },
    { t:'신발이 한 개 있어요.', why:'Giày dép đi thành đôi nên đếm bằng 켤레.', trap:'đơn vị đếm' },
    { t:'신발이 두 켤레 있어요.', why:'Hai chiếc trong tranh là MỘT đôi, không phải hai đôi.', trap:'số lượng' },
    { t:'신발이 한 켤레 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'신발', r:'sinbal', vi:'giày dép' }, { w:'켤레', r:'kyeolle', vi:'đôi (đơn vị đếm giày, tất)' },
    { w:'한', r:'han', vi:'một' }, { w:'두', r:'du', vi:'hai' }
  ],
  gram:[{ p:'켤레 — đôi', vi:'Giày, tất, găng tay dùng 켤레. Hai chiếc rời nhau thì mới là 두 짝.',
    ex:['신발이 한 켤레 있어요.', 'Có một đôi giày.'] }] },

{ id:'ko-14', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:80, y:44 }, { p:'tree', x:180, y:220 },
    { p:'bird', x:290, y:218 }
  ]},
  alt:'Một con chim đậu dưới đất, cạnh một cái cây.',
  opts:[
    { t:'새가 한 마리 있어요.', ok:true },
    { t:'새가 세 마리 있어요.', why:'새 và 세 chỉ khác mỗi nguyên âm mà lại đứng sát nhau. Trong tranh có một con.', trap:'ㅐ / ㅔ: 새 · 세' },
    { t:'새가 나무 위에 있어요.', why:'Con chim đứng dưới đất chứ không đậu trên cây.', trap:'vị trí' },
    { t:'새가 한 마리 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'새', r:'sae', vi:'con chim' }, { w:'세', r:'se', vi:'ba' },
    { w:'한', r:'han', vi:'một' }, { w:'마리', r:'mari', vi:'con (đơn vị đếm động vật)' }
  ],
  gram:[{ p:'새 한 마리 và 세 마리', vi:'Câu «새가 세 마리» có tới hai âm gần nhau đứng liền. Mẹo: sau 새 luôn có 가 hoặc 는, còn 세 thì dính thẳng vào đơn vị đếm.',
    ex:['새가 한 마리 있어요.', 'Có một con chim.'] }] },

{ id:'ko-15', lang:'ko', lv:'so-cap-2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'car', x:150, y:220 },
    { p:'bicycle', x:300, y:220 }
  ]},
  alt:'Một chiếc ô tô bên trái, một chiếc xe đạp bên phải.',
  opts:[
    { t:'자동차가 한 대 있어요.', ok:true },
    { t:'자동차가 한 개 있어요.', why:'Xe cộ và máy móc đếm bằng 대.', trap:'đơn vị đếm' },
    { t:'자동차가 두 대 있어요.', why:'Vật bên phải là xe đạp, không phải ô tô.', trap:'số lượng' },
    { t:'자전거가 한 대 있어요.', why:'자동차 là ô tô, 자전거 là xe đạp — hai từ đều bắt đầu bằng 자.', trap:'gần âm: 자동차 · 자전거' }
  ],
  keys:[
    { w:'자동차', r:'jadongcha', vi:'ô tô' }, { w:'자전거', r:'jajeongeo', vi:'xe đạp' },
    { w:'대', r:'dae', vi:'chiếc (đơn vị đếm xe, máy)' }, { w:'한', r:'han', vi:'một' }
  ],
  gram:[{ p:'대 — chiếc', vi:'Ô tô, xe đạp, máy tính, tivi đều đếm bằng 대. Đây là đơn vị cho vật có máy móc hoặc bánh xe.',
    ex:['자동차가 한 대 있어요.', 'Có một chiếc ô tô.'] }] },

{ id:'ko-16', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'picture', x:110, y:50 }, { p:'picture', x:230, y:50 },
    { p:'sofa', x:190, y:220 }
  ]},
  alt:'Hai bức tranh treo cạnh nhau trên tường.',
  opts:[
    { t:'사진이 두 장 있어요.', ok:true },
    { t:'사진이 두 개 있어요.', why:'Vật mỏng và phẳng như ảnh, giấy, vé đếm bằng 장.', trap:'đơn vị đếm' },
    { t:'사진이 세 장 있어요.', why:'두 là hai, 세 là ba. Trên tường treo hai bức.', trap:'số lượng' },
    { t:'사진이 두 장 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'사진', r:'sajin', vi:'bức ảnh' }, { w:'장', r:'jang', vi:'tờ, tấm (đơn vị đếm vật mỏng)' },
    { w:'두', r:'du', vi:'hai' }, { w:'벽', r:'byeok', vi:'bức tường' }
  ],
  gram:[{ p:'장 — tờ, tấm', vi:'Giấy, ảnh, vé, thẻ đều đếm bằng 장 vì đều mỏng và phẳng.',
    ex:['사진이 두 장 있어요.', 'Có hai bức ảnh.'] }] },

/* ========== SỐ ĐẾM VÀ GIỜ ========== */
{ id:'ko-17', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:120, y:82, time:'10:00', r:34 }, { p:'table', x:250, y:220, w:120 },
    { p:'cup', x:250, y:158 }
  ]},
  alt:'Đồng hồ chỉ đúng 10 giờ, trên bàn có một cái cốc.',
  opts:[
    { t:'지금 열 시예요.', ok:true },
    { t:'지금 열두 시예요.', why:'열 là mười, 열두 là mười hai. Kim ngắn đang ở số 10.', trap:'giờ: số' },
    { t:'지금 십 시예요.', why:'Giờ phải đọc bằng số thuần Hàn 열, không đọc Hán–Hàn 십.', trap:'thuần Hàn / Hán–Hàn' },
    { t:'지금 열 시 십 분이에요.', why:'Kim dài đang chỉ thẳng lên số 12, tức là đúng giờ.', trap:'giờ: phút' }
  ],
  keys:[
    { w:'지금', r:'jigeum', vi:'bây giờ' }, { w:'열', r:'yeol', vi:'mười' },
    { w:'시', r:'si', vi:'giờ' }, { w:'분', r:'bun', vi:'phút' }
  ],
  gram:[{ p:'GIỜ thuần Hàn, PHÚT Hán–Hàn', vi:'Đây là quy tắc bắt buộc: 열 시 삼십 분 — giờ đọc 열, phút đọc 삼십. Không bao giờ nói 십 시 hay 서른 분.',
    ex:['지금 열 시예요.', 'Bây giờ là mười giờ.'] }] },

{ id:'ko-18', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:120, y:82, time:'3:30', r:34 }, { p:'sofa', x:260, y:220 }
  ]},
  alt:'Đồng hồ chỉ 3 giờ rưỡi.',
  opts:[
    { t:'세 시 삼십 분이에요.', ok:true },
    { t:'세 시 십삼 분이에요.', why:'삼십 là 30, 십삼 là 13 — chỉ đảo thứ tự hai âm tiết.', trap:'đảo số: 삼십 · 십삼' },
    { t:'네 시 삼십 분이에요.', why:'세 là ba, 네 là bốn. Kim ngắn đang ở khoảng giữa 3 và 4.', trap:'giờ: số' },
    { t:'세 시 삼십 분 전이에요.', why:'Thêm chữ 전 ở cuối là thành «kém ba mươi phút nữa mới tới ba giờ».', trap:'전 (kém)' }
  ],
  keys:[
    { w:'삼십', r:'samsip', vi:'ba mươi' }, { w:'십삼', r:'sipsam', vi:'mười ba' },
    { w:'전', r:'jeon', vi:'trước, kém' }, { w:'반', r:'ban', vi:'rưỡi' }
  ],
  gram:[{ p:'삼십 và 십삼', vi:'Cùng hai âm tiết, chỉ đảo thứ tự: 삼십 là 3×10, 십삼 là 10+3. Nghe âm nào đứng trước là ra ngay.',
    ex:['세 시 삼십 분이에요.', 'Bây giờ là ba giờ ba mươi.'] }] },

{ id:'ko-19', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'4:15', r:32 }, { p:'desk', x:250, y:220 },
    { p:'laptop', x:250, y:158 }
  ]},
  alt:'Đồng hồ chỉ 4 giờ 15, trên bàn có cái laptop đang mở.',
  opts:[
    { t:'네 시 십오 분이에요.', ok:true },
    { t:'네 시 오십 분이에요.', why:'십오 là 15, 오십 là 50 — chỉ đảo thứ tự.', trap:'đảo số: 십오 · 오십' },
    { t:'다섯 시 십오 분이에요.', why:'네 là bốn, 다섯 là năm. Kim ngắn vừa qua số 4.', trap:'giờ: số' },
    { t:'네 시 십오 분 전이에요.', why:'Thêm chữ 전 là lùi xuống 3 giờ 45.', trap:'전 (kém)' }
  ],
  keys:[
    { w:'십오', r:'sibo', vi:'mười lăm' }, { w:'오십', r:'osip', vi:'năm mươi' },
    { w:'네', r:'ne', vi:'bốn' }, { w:'다섯', r:'daseot', vi:'năm' }
  ],
  gram:[{ p:'… 분 전이에요', vi:'Chữ 전 đứng CUỐI câu và đổi hẳn nghĩa: «kém mấy phút nữa mới tới giờ đó». Nghe phải giữ tới chữ cuối.',
    ex:['네 시 십오 분이에요.', 'Bây giờ là bốn giờ mười lăm.'] }] },

{ id:'ko-20', lang:'ko', lv:'so-cap-2', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'table', x:150, y:220, w:120 }, { p:'bread', x:150, y:158 },
    { p:'tag', x:300, y:130, text:'3000' }
  ]},
  alt:'Ổ bánh mì trên bàn, bảng giá ghi 3000.',
  opts:[
    { t:'빵이 삼천 원이에요.', ok:true },
    { t:'빵이 삼백 원이에요.', why:'천 là nghìn, 백 là trăm — chỉ khác một âm tiết ở giữa.', trap:'trăm / nghìn' },
    { t:'빵이 사천 원이에요.', why:'삼 là ba, 사 là bốn. Bảng giá ghi 3000.', trap:'gần âm: 삼 · 사' },
    { t:'빵이 삼천 원이 아니에요.', why:'Thêm 아니에요 ở cuối là phủ định cả câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'빵', r:'ppang', vi:'bánh mì' }, { w:'천', r:'cheon', vi:'nghìn' },
    { w:'백', r:'baek', vi:'trăm' }, { w:'원', r:'won', vi:'won (tiền Hàn)' }
  ],
  gram:[{ p:'Giá tiền đọc bằng số Hán–Hàn', vi:'Tiền luôn dùng dãy 일 이 삼 사…: 삼천 원, 오만 원. Không bao giờ dùng 셋 hay 다섯 cho tiền.',
    ex:['빵이 삼천 원이에요.', 'Bánh mì ba nghìn won.'] }] },

{ id:'ko-21', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'6:00', r:32 }, { p:'bed', x:250, y:220 },
    { p:'sleeper', x:258, y:180 }
  ]},
  alt:'Đồng hồ chỉ 6 giờ, một người vẫn đang nằm ngủ.',
  opts:[
    { t:'여섯 시인데 아직 자고 있어요.', ok:true },
    { t:'여섯 시인데 벌써 일어났어요.', why:'아직 là vẫn chưa, 벌써 là đã… rồi. Người trong tranh vẫn nhắm mắt nằm.', trap:'아직 / 벌써' },
    { t:'여덟 시인데 아직 자고 있어요.', why:'여섯 là sáu, 여덟 là tám — hai từ đều bắt đầu bằng 여.', trap:'gần âm: 여섯 · 여덟' },
    { t:'여섯 시인데 아직 안 자요.', why:'Thêm chữ 안 là thành «vẫn chưa đi ngủ».', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'아직', r:'ajik', vi:'vẫn chưa, vẫn còn' }, { w:'벌써', r:'beolsseo', vi:'đã… rồi' },
    { w:'여섯', r:'yeoseot', vi:'sáu' }, { w:'여덟', r:'yeodeol', vi:'tám' }
  ],
  gram:[{ p:'아직 và 벌써', vi:'아직 đi với việc chưa xong hoặc còn kéo dài, 벌써 đi với việc đã xong sớm hơn mong đợi. Hai từ đứng cùng một chỗ trong câu.',
    ex:['여섯 시인데 아직 자고 있어요.', 'Sáu giờ rồi mà vẫn đang ngủ.'] }] },

{ id:'ko-22', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'clock', x:110, y:80, time:'2:45', r:32 }, { p:'sofa', x:250, y:220 },
    { p:'lamp', x:350, y:220 }
  ]},
  alt:'Đồng hồ chỉ 2 giờ 45 phút.',
  opts:[
    { t:'세 시 십오 분 전이에요.', ok:true },
    { t:'세 시 십오 분이에요.', why:'Bỏ mỗi chữ 전 ở cuối là vọt lên 3 giờ 15.', trap:'전 (kém)' },
    { t:'두 시 십오 분 전이에요.', why:'Câu này là 1 giờ 45. Kim ngắn đang gần số 3.', trap:'giờ: số' },
    { t:'세 시 오십 분 전이에요.', why:'십오 là 15, 오십 là 50 — chỉ đảo thứ tự.', trap:'đảo số: 십오 · 오십' }
  ],
  keys:[
    { w:'전', r:'jeon', vi:'trước, kém' }, { w:'세', r:'se', vi:'ba' },
    { w:'두', r:'du', vi:'hai' }, { w:'분', r:'bun', vi:'phút' }
  ],
  gram:[{ p:'… 분 전 — kém mấy phút', vi:'Người Hàn nói giờ kém bằng cách nêu GIỜ SẮP TỚI rồi thêm 전: 2:45 là 세 시 십오 분 전. Đây là chỗ dễ nhầm nhất khi nghe.',
    ex:['세 시 십오 분 전이에요.', 'Ba giờ kém mười lăm.'] }] },

/* ========== 입다 · 쓰다 · 신다 ========== */
{ id:'ko-23', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:120 }, { p:'hat', x:160, y:158 },
    { p:'coat', x:300, y:180 }
  ]},
  alt:'Cái mũ đặt trên bàn, áo khoác treo trên móc.',
  opts:[
    { t:'모자가 탁자 위에 있어요.', ok:true },
    { t:'외투가 탁자 위에 있어요.', why:'Áo khoác có thật nhưng đang treo trên móc, không nằm trên bàn.', trap:'đúng vật, sai vị trí' },
    { t:'모자가 탁자 밑에 있어요.', why:'위 là trên, 밑 là dưới.', trap:'trên / dưới' },
    { t:'모자가 탁자 위에 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'모자', r:'moja', vi:'cái mũ' }, { w:'외투', r:'oetu', vi:'áo khoác' },
    { w:'쓰다', r:'sseuda', vi:'đội (mũ), đeo (kính)' }, { w:'입다', r:'ipda', vi:'mặc (quần áo)' }
  ],
  gram:[{ p:'입다 · 쓰다 · 신다', vi:'Tiếng Hàn chia động từ «mặc» theo bộ phận: 옷을 입다 mặc áo, 모자를 쓰다 đội mũ, 신발을 신다 đi giày. Dùng nhầm là sai ngay.',
    ex:['모자가 탁자 위에 있어요.', 'Cái mũ ở trên bàn.'] }] },

{ id:'ko-24', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:60, y:100 }, { p:'shoe', x:180, y:220 },
    { p:'shoe', x:255, y:220, flip:true }, { p:'umbrella', x:345, y:220, s:1.4 }
  ]},
  alt:'Đôi giày để dưới sàn, cái ô gập đứng ở góc phải.',
  opts:[
    { t:'신발을 신고 우산을 써요.', ok:true },
    { t:'신발을 쓰고 우산을 신어요.', why:'Hai động từ bị đổi chỗ cho nhau. Giày thì 신다, ô thì 쓰다.', trap:'입다 / 쓰다 / 신다' },
    { t:'신발을 신고 우산을 입어요.', why:'입다 dùng cho quần áo, không dùng cho cái ô.', trap:'입다 / 쓰다 / 신다' },
    { t:'신발을 신고 우산을 안 써요.', why:'Thêm chữ 안 ở gần cuối.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'신다', r:'sinda', vi:'đi (giày, tất)' }, { w:'쓰다', r:'sseuda', vi:'đội, đeo, giương (ô)' },
    { w:'입다', r:'ipda', vi:'mặc (quần áo)' }, { w:'우산', r:'usan', vi:'cái ô' }
  ],
  gram:[{ p:'우산을 쓰다', vi:'Cái ô dùng chung động từ với mũ và kính: đều là 쓰다, vì đều đặt lên phía trên đầu.',
    ex:['신발을 신고 우산을 써요.', 'Đi giày và giương ô.'] }] },

{ id:'ko-25', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'hanger', x:140, y:110 }, { p:'coat', x:140, y:180 },
    { p:'glasses', x:280, y:158 }, { p:'table', x:280, y:220, w:110 }
  ]},
  alt:'Áo khoác treo trên móc, cặp kính đặt trên bàn.',
  opts:[
    { t:'외투는 걸려 있고 안경은 탁자 위에 있어요.', ok:true },
    { t:'외투는 탁자 위에 있고 안경은 걸려 있어요.', why:'Hai vế bị đổi chỗ cho nhau, mọi chữ vẫn y nguyên.', trap:'hoán chủ thể' },
    { t:'외투는 걸려 있고 안경은 탁자 밑에 있어요.', why:'Vế đầu đúng nên tai buông. Cặp kính nằm trên mặt bàn.', trap:'đúng một nửa' },
    { t:'외투는 걸려 있고 안경은 탁자 위에 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'외투', r:'oetu', vi:'áo khoác' }, { w:'안경', r:'angyeong', vi:'cái kính' },
    { w:'걸리다', r:'geollida', vi:'được treo' }, { w:'탁자', r:'takja', vi:'cái bàn' }
  ],
  gram:[{ p:'-아/어 있다 — trạng thái còn giữ', vi:'걸려 있다 là «đang ở trạng thái được treo». Khác với 걸고 있다 là «đang treo lên» (động tác).',
    ex:['외투는 걸려 있어요.', 'Áo khoác đang được treo.'] }] },

/* ========== -고 있어요 (ĐANG LÀM) ========== */
{ id:'ko-26', lang:'ko', lv:'so-cap-1', cat:'Học tập',
  scene:{ bg:'room', items:[
    { p:'sofa', x:170, y:220 }, { p:'person', x:170, y:216, pose:'read' },
    { p:'lamp', x:330, y:220 }
  ]},
  alt:'Một người ngồi trên ghế sofa, hai tay cầm sách mở ra trước mặt.',
  opts:[
    { t:'그 사람은 책을 읽고 있어요.', ok:true },
    { t:'그 사람은 책을 쓰고 있어요.', why:'읽다 là đọc, 쓰다 là viết. Người này cầm sách mở bằng cả hai tay.', trap:'hành động gần giống' },
    { t:'그 사람은 책을 읽었어요.', why:'-고 있어요 là đang làm, -었어요 là đã làm xong.', trap:'thì: đang / đã' },
    { t:'그 사람은 책을 안 읽고 있어요.', why:'Thêm mỗi chữ 안 vào giữa câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'읽다', r:'ikda', vi:'đọc' }, { w:'쓰다', r:'sseuda', vi:'viết' },
    { w:'책', r:'chaek', vi:'quyển sách' }, { w:'사람', r:'saram', vi:'người' }
  ],
  gram:[{ p:'-고 있어요', vi:'Đuôi này gắn vào gốc động từ để nói việc đang diễn ra: 읽다 → 읽고 있어요. Nghe được 고 있 là biết câu nói về hiện tại.',
    ex:['책을 읽고 있어요.', 'Đang đọc sách.'] }] },

{ id:'ko-27', lang:'ko', lv:'so-cap-1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:210, y:220, w:130 }, { p:'bowl', x:210, y:158 },
    { p:'person', x:110, y:220, pose:'eat' }, { p:'window', x:290, y:28, view:'sun' }
  ]},
  alt:'Một người đang đưa tay lên miệng ăn, trên bàn có một cái bát.',
  opts:[
    { t:'밥을 먹고 있어요.', ok:true },
    { t:'밥을 먹을 거예요.', why:'-고 있어요 là đang ăn, -(으)ㄹ 거예요 là sẽ ăn. Tay đã đưa tới miệng rồi.', trap:'thì: đang / sẽ' },
    { t:'밥을 다 먹었어요.', why:'다 먹었어요 là ăn xong hết rồi. Bữa vẫn đang dở.', trap:'thì: đã xong' },
    { t:'물을 먹고 있어요.', why:'Nước thì phải nói 마시다. Trong tranh là cái bát, không phải cốc nước.', trap:'chủ thể' }
  ],
  keys:[
    { w:'밥', r:'bap', vi:'cơm; bữa ăn' }, { w:'먹다', r:'meokda', vi:'ăn' },
    { w:'마시다', r:'masida', vi:'uống' }, { w:'물', r:'mul', vi:'nước' }
  ],
  gram:[{ p:'Ba mốc thời gian', vi:'-(으)ㄹ 거예요 sẽ làm · -고 있어요 đang làm · -았/었어요 đã làm. Tranh chỉ khớp đúng một mốc.',
    ex:['밥을 먹고 있어요.', 'Đang ăn cơm.'] }] },

{ id:'ko-28', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'phone' }, { p:'table', x:270, y:220, w:110 },
    { p:'phone', x:270, y:158 }
  ]},
  alt:'Một người áp điện thoại lên tai, trên bàn còn một chiếc điện thoại nữa.',
  opts:[
    { t:'전화를 하고 있어요.', ok:true },
    { t:'전화를 하지 않아요.', why:'-지 않아요 là không làm. Người này đang áp máy lên tai.', trap:'phủ định chìm' },
    { t:'전화를 했어요.', why:'-고 있어요 là đang gọi, -았어요 là đã gọi xong.', trap:'thì: đang / đã' },
    { t:'전화가 탁자 위에 없어요.', why:'Trên bàn có một chiếc điện thoại thật.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'전화', r:'jeonhwa', vi:'điện thoại; cuộc gọi' }, { w:'하다', r:'hada', vi:'làm' },
    { w:'탁자', r:'takja', vi:'cái bàn' }, { w:'위', r:'wi', vi:'phía trên' }
  ],
  gram:[{ p:'-지 않아요 và 안 …', vi:'Hai cách phủ định đều đúng: 안 해요 và 하지 않아요. Cách sau dài hơn nên khi nghe rất dễ trôi mất.',
    ex:['전화를 하고 있어요.', 'Đang gọi điện thoại.'] }] },

{ id:'ko-29', lang:'ko', lv:'so-cap-2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'stove', x:250, y:220 }, { p:'person', x:160, y:220, pose:'cook' },
    { p:'fridge', x:60, y:220 }
  ]},
  alt:'Một người đứng trước bếp, tay đưa về phía nồi.',
  opts:[
    { t:'요리를 하고 있어요.', ok:true },
    { t:'설거지를 하고 있어요.', why:'설거지 là rửa bát. Trong tranh là cái bếp đang nấu, không có bồn rửa.', trap:'hành động gần giống' },
    { t:'요리를 할 거예요.', why:'-고 있어요 là đang nấu, -(으)ㄹ 거예요 là sẽ nấu.', trap:'thì: đang / sẽ' },
    { t:'요리를 하고 있지 않아요.', why:'Phủ định nằm ở phần đuôi dài, lúc tai đã buông.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'요리', r:'yori', vi:'nấu ăn, món ăn' }, { w:'설거지', r:'seolgeoji', vi:'việc rửa bát' },
    { w:'냉장고', r:'naengjanggo', vi:'tủ lạnh' }, { w:'하다', r:'hada', vi:'làm' }
  ],
  gram:[{ p:'명사 + 하다', vi:'Rất nhiều động từ tiếng Hàn là danh từ ghép với 하다: 요리하다, 공부하다, 전화하다. Phần danh từ mới là chỗ mang nghĩa.',
    ex:['요리를 하고 있어요.', 'Đang nấu ăn.'] }] },

{ id:'ko-30', lang:'ko', lv:'so-cap-1', cat:'Thể thao',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:170, y:220, pose:'run' },
    { p:'tree', x:320, y:220 }
  ]},
  alt:'Một người đang chạy, thân đổ về phía trước.',
  opts:[
    { t:'그 사람은 달리고 있어요.', ok:true },
    { t:'그 사람은 걷고 있어요.', why:'걷다 là đi bộ, 달리다 là chạy. Người trong tranh đổ người về trước, chân xoạc rộng.', trap:'hành động gần giống' },
    { t:'그 사람은 서 있어요.', why:'서 있다 là đứng yên.', trap:'hành động' },
    { t:'그 사람은 달리고 있지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'달리다', r:'dallida', vi:'chạy' }, { w:'걷다', r:'geotda', vi:'đi bộ' },
    { w:'서다', r:'seoda', vi:'đứng' }, { w:'사람', r:'saram', vi:'người' }
  ],
  gram:[{ p:'서 있다 và 서고 있다', vi:'Với động từ tư thế, 서 있다 mới là «đang đứng». 서고 있다 gần như không dùng. Ngược lại 달리다 thì phải nói 달리고 있다.',
    ex:['그 사람은 달리고 있어요.', 'Người đó đang chạy.'] }] },

{ id:'ko-31', lang:'ko', lv:'so-cap-2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'person', x:170, y:216, pose:'write' },
    { p:'shelf', x:300, y:120, w:80, h:94, rows:3 }
  ]},
  alt:'Một người ngồi ở bàn, tay cầm bút viết.',
  opts:[
    { t:'그 사람은 글씨를 쓰고 있어요.', ok:true },
    { t:'그 사람은 책을 읽고 있어요.', why:'읽다 là đọc. Người này cúi xuống mặt bàn, một tay cầm bút.', trap:'hành động gần giống' },
    { t:'그 사람은 모자를 쓰고 있어요.', why:'쓰다 có hai nghĩa: viết và đội mũ. Trong tranh không có mũ.', trap:'từ đồng âm: 쓰다' },
    { t:'그 사람은 글씨를 안 쓰고 있어요.', why:'Thêm mỗi chữ 안 vào giữa.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'글씨', r:'geulssi', vi:'chữ viết' }, { w:'쓰다', r:'sseuda', vi:'viết; đội (mũ)' },
    { w:'읽다', r:'ikda', vi:'đọc' }, { w:'모자', r:'moja', vi:'cái mũ' }
  ],
  gram:[{ p:'쓰다 — một từ ba nghĩa', vi:'글씨를 쓰다 viết chữ · 모자를 쓰다 đội mũ · 우산을 쓰다 giương ô. Phải nghe danh từ đứng trước mới biết nghĩa nào.',
    ex:['글씨를 쓰고 있어요.', 'Đang viết chữ.'] }] },

{ id:'ko-32', lang:'ko', lv:'so-cap-1', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'person', x:120, y:220, pose:'drink' }, { p:'table', x:250, y:220, w:120 },
    { p:'bottle', x:250, y:158 }
  ]},
  alt:'Một người đang đưa cốc lên miệng, trên bàn có một cái chai.',
  opts:[
    { t:'물을 마시고 있어요.', ok:true },
    { t:'물을 먹고 있어요.', why:'Nước thì dùng 마시다. 먹다 là ăn thức ăn.', trap:'hành động gần giống' },
    { t:'물을 마실 거예요.', why:'-고 있어요 là đang uống, -(으)ㄹ 거예요 là sẽ uống.', trap:'thì: đang / sẽ' },
    { t:'물을 다 마셨어요.', why:'다 마셨어요 là uống hết rồi. Cốc vẫn đang trên tay.', trap:'thì: đã xong' }
  ],
  keys:[
    { w:'마시다', r:'masida', vi:'uống' }, { w:'물', r:'mul', vi:'nước' },
    { w:'병', r:'byeong', vi:'cái chai' }, { w:'다', r:'da', vi:'hết, toàn bộ' }
  ],
  gram:[{ p:'다 -았/었어요', vi:'Chữ 다 đứng trước động từ quá khứ nghĩa là «xong hết». Nghe thấy 다 là biết việc đã kết thúc, không còn đang làm.',
    ex:['물을 마시고 있어요.', 'Đang uống nước.'] }] },

{ id:'ko-33', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:160, y:220 }, { p:'sleeper', x:168, y:180 },
    { p:'window', x:280, y:30, view:'night' }
  ]},
  alt:'Trời đã tối ngoài cửa sổ, một người đang nằm ngủ trên giường.',
  opts:[
    { t:'자고 있어요.', ok:true },
    { t:'차고 있어요.', why:'자다 là ngủ, 차다 là đá. Hai từ chỉ khác âm đầu bật hơi.', trap:'bật hơi: 자 · 차' },
    { t:'일어나고 있어요.', why:'일어나다 là thức dậy. Người này vẫn nhắm mắt nằm yên.', trap:'hành động ngược' },
    { t:'자고 있지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'자다', r:'jada', vi:'ngủ' }, { w:'차다', r:'chada', vi:'đá (chân)' },
    { w:'일어나다', r:'ireonada', vi:'thức dậy, đứng dậy' }, { w:'밤', r:'bam', vi:'ban đêm' }
  ],
  gram:[{ p:'ㅈ và ㅊ', vi:'Tiếng Hàn phân biệt phụ âm thường với phụ âm bật hơi: 자다 ngủ · 차다 đá, 달 mặt trăng · 탈 mặt nạ. Luồng hơi ra mạnh là chữ bật hơi.',
    ex:['자고 있어요.', 'Đang ngủ.'] }] },

/* ========== TRẠNG THÁI: MỞ · ĐÓNG · BẬT · TẮT ========== */
{ id:'ko-34', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:110, y:32, view:'sun', open:true }, { p:'window', x:250, y:32, view:'sun' },
    { p:'sofa', x:200, y:220 }
  ]},
  alt:'Hai cửa sổ: cửa bên trái mở cánh ra ngoài, cửa bên phải đóng kín.',
  opts:[
    { t:'왼쪽 창문은 열려 있어요.', ok:true },
    { t:'왼쪽 창문은 닫혀 있어요.', why:'열리다 là mở, 닫히다 là đóng. Cửa bên trái có cánh bật ra.', trap:'mở / đóng' },
    { t:'오른쪽 창문은 열려 있어요.', why:'왼쪽 là bên trái, 오른쪽 là bên phải.', trap:'trái / phải' },
    { t:'창문이 두 개 다 열려 있어요.', why:'다 là cả hai. Chỉ một cửa mở.', trap:'다 (cả hai)' }
  ],
  keys:[
    { w:'왼쪽', r:'oenjjok', vi:'bên trái' }, { w:'오른쪽', r:'oreunjjok', vi:'bên phải' },
    { w:'열리다', r:'yeollida', vi:'được mở' }, { w:'닫히다', r:'dachida', vi:'được đóng' }
  ],
  gram:[{ p:'열려 있다 · 닫혀 있다', vi:'Đây là trạng thái của vật, không phải hành động của người. Nếu người mở cửa thì nói 창문을 열어요.',
    ex:['왼쪽 창문은 열려 있어요.', 'Cửa sổ bên trái đang mở.'] }] },

{ id:'ko-35', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'lamp', x:110, y:220 }, { p:'desk', x:250, y:220 },
    { p:'laptop', x:250, y:158 }
  ]},
  alt:'Cây đèn bàn đứng bên trái, cái laptop đang mở trên bàn.',
  opts:[
    { t:'노트북은 켜져 있는데 아무도 안 써요.', ok:true },
    { t:'노트북은 꺼져 있는데 아무도 안 써요.', why:'켜지다 là bật, 꺼지다 là tắt. Màn hình laptop đang dựng lên.', trap:'bật / tắt' },
    { t:'노트북은 켜져 있고 한 사람이 쓰고 있어요.', why:'Vế đầu đúng nên tai buông. Trong tranh không có ai ngồi ở bàn.', trap:'đúng một nửa' },
    { t:'전등은 켜져 있는데 아무도 안 써요.', why:'전등 là cây đèn — có thật nhưng câu đúng nói về cái laptop.', trap:'đúng vật, sai chủ thể' }
  ],
  keys:[
    { w:'노트북', r:'noteubuk', vi:'máy tính xách tay' }, { w:'켜지다', r:'kyeojida', vi:'được bật' },
    { w:'꺼지다', r:'kkeojida', vi:'bị tắt' }, { w:'아무도', r:'amudo', vi:'không một ai' }
  ],
  gram:[{ p:'아무도 + 안 …', vi:'아무도 bắt buộc đi kèm phủ định: 아무도 안 써요. Không bao giờ nói 아무도 써요.',
    ex:['아무도 안 써요.', 'Không ai dùng cả.'] }] },

{ id:'ko-36', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'door', x:80, y:96, open:true }, { p:'sofa', x:250, y:220 },
    { p:'plant', x:350, y:220, s:1.3 }
  ]},
  alt:'Cánh cửa ra vào đang mở hé, trong phòng có ghế sofa và chậu cây.',
  opts:[
    { t:'문이 열려 있어요.', ok:true },
    { t:'문이 닫혀 있어요.', why:'Cánh cửa trong tranh bật ra một góc.', trap:'mở / đóng' },
    { t:'창문이 열려 있어요.', why:'문 là cửa ra vào, 창문 là cửa sổ — chỉ khác một âm tiết ở đầu.', trap:'gần âm: 문 · 창문' },
    { t:'문이 열려 있지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'문', r:'mun', vi:'cửa ra vào' }, { w:'창문', r:'changmun', vi:'cửa sổ' },
    { w:'열리다', r:'yeollida', vi:'được mở' }, { w:'화분', r:'hwabun', vi:'chậu cây' }
  ],
  gram:[{ p:'문 và 창문', vi:'창문 chính là 창 (cửa sổ) ghép với 문 (cửa). Nghe hụt âm tiết đầu là nhầm ngay sang cửa ra vào.',
    ex:['문이 열려 있어요.', 'Cửa đang mở.'] }] },

/* ========== THỜI TIẾT · NGOÀI TRỜI ========== */
{ id:'ko-37', lang:'ko', lv:'so-cap-1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:42 }, { p:'rain', x:90, y:62, n:6 },
    { p:'person', x:230, y:220, pose:'walk' }, { p:'umbrella', x:236, y:104, open:true, s:1.2 }
  ]},
  alt:'Trời mưa, một người che ô đi bộ ngoài đường.',
  opts:[
    { t:'비가 오는데 우산을 쓰고 있어요.', ok:true },
    { t:'눈이 오는데 우산을 쓰고 있어요.', why:'Vế sau đúng nên tai buông. Trong tranh là những vạch xiên, tức là mưa.', trap:'mưa / tuyết' },
    { t:'비가 오는데 우산이 없어요.', why:'Cái ô đang xoè trên đầu người đó.', trap:'있다 / 없다' },
    { t:'비가 오는데 우산을 안 쓰고 있어요.', why:'Thêm mỗi chữ 안 vào giữa vế sau.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'비', r:'bi', vi:'mưa' }, { w:'눈', r:'nun', vi:'tuyết; mắt' },
    { w:'우산', r:'usan', vi:'cái ô' }, { w:'오다', r:'oda', vi:'đến; (mưa, tuyết) rơi' }
  ],
  gram:[{ p:'비가 오다 · 눈이 오다', vi:'Tiếng Hàn dùng động từ 오다 (đến) cho cả mưa lẫn tuyết. Chữ mang nghĩa nằm ở danh từ đứng đầu câu.',
    ex:['비가 와요.', 'Trời đang mưa.'] }] },

{ id:'ko-38', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'cloud', x:90, y:42 }, { p:'snowfall', x:90, y:66, n:7 },
    { p:'tree', x:200, y:220 }, { p:'person', x:310, y:220, pose:'stand' }
  ]},
  alt:'Tuyết rơi lất phất, một cái cây và một người đứng ngoài trời.',
  opts:[
    { t:'눈이 오고 있어요.', ok:true },
    { t:'비가 오고 있어요.', why:'Mưa vẽ bằng vạch xiên, tuyết vẽ bằng chấm tròn.', trap:'mưa / tuyết' },
    { t:'눈이 올 거예요.', why:'-고 있어요 là đang rơi, -(으)ㄹ 거예요 là sắp rơi.', trap:'thì: đang / sẽ' },
    { t:'눈이 오지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'눈', r:'nun', vi:'tuyết' }, { w:'비', r:'bi', vi:'mưa' },
    { w:'나무', r:'namu', vi:'cái cây' }, { w:'밖', r:'bak', vi:'bên ngoài' }
  ],
  gram:[{ p:'눈 — hai nghĩa', vi:'눈 vừa là tuyết vừa là con mắt. Phân biệt bằng độ dài: tuyết đọc dài hơn, và bằng chữ đi cùng (눈이 오다 chỉ có thể là tuyết).',
    ex:['눈이 오고 있어요.', 'Tuyết đang rơi.'] }] },

{ id:'ko-39', lang:'ko', lv:'so-cap-2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:60, y:44 }, { p:'tree', x:150, y:220, h:82 },
    { p:'tree', x:300, y:220, h:82 }
  ]},
  alt:'Trời nắng, hai cái cây cao bằng nhau đứng ngoài đường.',
  opts:[
    { t:'나무가 두 그루 있어요.', ok:true },
    { t:'나무가 두 개 있어요.', why:'Cây cối đếm bằng 그루.', trap:'đơn vị đếm' },
    { t:'나무가 세 그루 있어요.', why:'두 là hai, 세 là ba.', trap:'số lượng' },
    { t:'나무 한 그루가 더 커요.', why:'Hai cây trong tranh cao bằng nhau.', trap:'so sánh' }
  ],
  keys:[
    { w:'그루', r:'geuru', vi:'cây (đơn vị đếm cây cối)' }, { w:'나무', r:'namu', vi:'cái cây' },
    { w:'크다', r:'keuda', vi:'to, lớn' }, { w:'더', r:'deo', vi:'hơn' }
  ],
  gram:[{ p:'그루 — đơn vị đếm cây', vi:'Cây cối trồng dưới đất đếm bằng 그루. Hoa cắt cành thì dùng 송이.',
    ex:['나무가 두 그루 있어요.', 'Có hai cái cây.'] }] },

{ id:'ko-40', lang:'ko', lv:'so-cap-2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'bus', x:160, y:220 },
    { p:'person', x:300, y:220, pose:'stand' }, { p:'sign', x:350, y:220, dir:'right' }
  ]},
  alt:'Một người đứng cạnh biển chỉ đường, xe buýt đỗ ở bên trái.',
  opts:[
    { t:'그 사람은 버스 옆에 서 있어요.', ok:true },
    { t:'그 사람은 버스 안에 앉아 있어요.', why:'Người này đứng ngoài đường, không ở trong xe.', trap:'trong / ngoài' },
    { t:'그 사람은 버스 옆에 앉아 있어요.', why:'서다 là đứng, 앉다 là ngồi — chỉ khác một chữ.', trap:'đứng / ngồi' },
    { t:'버스가 그 사람 옆에 없어요.', why:'Chiếc xe buýt có thật trong tranh.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'버스', r:'beoseu', vi:'xe buýt' }, { w:'서다', r:'seoda', vi:'đứng' },
    { w:'앉다', r:'anda', vi:'ngồi' }, { w:'표지판', r:'pyojipan', vi:'biển chỉ đường' }
  ],
  gram:[{ p:'서 있다 và 앉아 있다', vi:'Tư thế của người luôn dùng -아/어 있다 chứ không dùng -고 있다: 서 있다 đang đứng, 앉아 있다 đang ngồi.',
    ex:['버스 옆에 서 있어요.', 'Đang đứng cạnh xe buýt.'] }] },

/* ========== 에 · 에서 · SO SÁNH · SỐ LƯỢNG ========== */
{ id:'ko-41', lang:'ko', lv:'trung-cap-1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'person', x:150, y:216, pose:'write' },
    { p:'desk', x:290, y:220 }
  ]},
  alt:'Một người ngồi viết ở cái bàn bên trái, cái bàn bên phải bỏ trống.',
  opts:[
    { t:'그 사람은 교실에서 공부해요.', ok:true },
    { t:'그 사람은 교실에 공부해요.', why:'에 chỉ nơi TỒN TẠI, 에서 mới chỉ nơi DIỄN RA hành động. Ở đây có hành động học.', trap:'에 / 에서' },
    { t:'그 사람은 교실에서 자요.', why:'Người này cúi xuống bàn, tay cầm bút.', trap:'hành động' },
    { t:'두 사람이 교실에서 공부해요.', why:'Chỉ có một người, cái bàn bên phải bỏ trống.', trap:'số lượng' }
  ],
  keys:[
    { w:'교실', r:'gyosil', vi:'phòng học' }, { w:'공부하다', r:'gongbuhada', vi:'học' },
    { w:'에서', r:'eseo', vi:'ở (nơi diễn ra hành động)' }, { w:'에', r:'e', vi:'ở, tại (nơi tồn tại)' }
  ],
  gram:[{ p:'에 và 에서', vi:'교실에 있어요 là ở trong lớp (tồn tại), 교실에서 공부해요 là học ở trong lớp (hành động). Động từ quyết định dùng chữ nào.',
    ex:['교실에서 공부해요.', 'Học ở trong lớp.'] }] },

{ id:'ko-42', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'person', x:160, y:216, pose:'sit' },
    { p:'tv', x:320, y:170 }
  ]},
  alt:'Một người ngồi trên ghế sofa, đối diện là cái tivi.',
  opts:[
    { t:'그 사람은 집에서 텔레비전을 봐요.', ok:true },
    { t:'그 사람은 집에 텔레비전을 봐요.', why:'Có hành động xem nên phải dùng 에서.', trap:'에 / 에서' },
    { t:'그 사람은 집에서 책을 봐요.', why:'Trong tranh là cái tivi có màn hình, không có quyển sách.', trap:'chủ thể' },
    { t:'그 사람은 집에서 텔레비전을 안 봐요.', why:'Thêm mỗi chữ 안 vào gần cuối.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'텔레비전', r:'tellebijeon', vi:'tivi' }, { w:'집', r:'jip', vi:'nhà' },
    { w:'보다', r:'boda', vi:'xem, nhìn' }, { w:'소파', r:'sopa', vi:'ghế sofa' }
  ],
  gram:[{ p:'보다 — xem và đọc', vi:'책을 보다 cũng có nghĩa là đọc sách. Muốn rõ là đọc thì nói 읽다, còn 보다 nghiêng về nhìn, xem.',
    ex:['텔레비전을 봐요.', 'Xem tivi.'] }] },

{ id:'ko-43', lang:'ko', lv:'so-cap-2', cat:'Giao thông',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:44 }, { p:'bus', x:150, y:220, w:126 },
    { p:'car', x:310, y:220 }
  ]},
  alt:'Xe buýt bên trái to hơn hẳn chiếc ô tô con bên phải.',
  opts:[
    { t:'버스가 자동차보다 커요.', ok:true },
    { t:'자동차가 버스보다 커요.', why:'Đổi chỗ hai chủ thể quanh chữ 보다. Vật đứng ĐẦU câu mới là vật hơn.', trap:'hoán chủ thể' },
    { t:'버스가 자동차보다 작아요.', why:'Chỉ chữ cuối đổi. 크다 là to, 작다 là nhỏ.', trap:'to / nhỏ' },
    { t:'버스와 자동차가 크기가 같아요.', why:'같다 là bằng nhau. Xe buýt dài hơn hẳn.', trap:'so sánh bằng / hơn' }
  ],
  keys:[
    { w:'보다', r:'boda', vi:'hơn (dùng khi so sánh)' }, { w:'크다', r:'keuda', vi:'to, lớn' },
    { w:'작다', r:'jakda', vi:'nhỏ' }, { w:'같다', r:'gatda', vi:'giống nhau, bằng nhau' }
  ],
  gram:[{ p:'A가 B보다 …', vi:'보다 bám sau vật bị đem ra so. Vật đứng đầu câu là vật hơn. Lưu ý 보다 này khác hẳn động từ 보다 (xem).',
    ex:['버스가 자동차보다 커요.', 'Xe buýt to hơn ô tô.'] }] },

{ id:'ko-44', lang:'ko', lv:'so-cap-2', cat:'Ẩm thực',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:190 }, { p:'cup', x:150, y:158 },
    { p:'cup', x:185, y:158 }, { p:'cup', x:220, y:158 }, { p:'teapot', x:268, y:158 }
  ]},
  alt:'Ba cái cốc xếp hàng trên bàn, bên phải là ấm trà.',
  opts:[
    { t:'컵이 세 개 있어요.', ok:true },
    { t:'컵이 두 개 있어요.', why:'세 là ba, 두 là hai. Trên bàn có ba cái.', trap:'số lượng' },
    { t:'컵이 세 잔 있어요.', why:'잔 đếm phần nước bên trong (một ly trà), còn cái cốc rỗng thì đếm bằng 개.', trap:'đơn vị đếm' },
    { t:'컵이 세 개 없어요.', why:'Chỉ chữ cuối đổi.', trap:'있다 / 없다' }
  ],
  keys:[
    { w:'컵', r:'keop', vi:'cái cốc' }, { w:'잔', r:'jan', vi:'ly, chén (đếm đồ uống)' },
    { w:'주전자', r:'jujeonja', vi:'cái ấm' }, { w:'개', r:'gae', vi:'cái (đơn vị đếm đồ vật)' }
  ],
  gram:[{ p:'개 và 잔', vi:'컵 세 개 là ba cái cốc (vật), 커피 세 잔 là ba ly cà phê (đồ uống). Cùng một cái cốc nhưng đếm khác nhau tuỳ ý muốn nói.',
    ex:['컵이 세 개 있어요.', 'Có ba cái cốc.'] }] },

{ id:'ko-45', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:170, y:220, pose:'stand' }, { p:'sofa', x:290, y:220 },
    { p:'lamp', x:70, y:220 }
  ]},
  alt:'Chỉ có một người đứng trong phòng, ghế sofa bỏ trống.',
  opts:[
    { t:'방에 한 사람만 있어요.', ok:true },
    { t:'방에 두 사람이 있어요.', why:'Trong phòng chỉ có một người, ghế sofa không ai ngồi.', trap:'số lượng' },
    { t:'방에 한 사람도 없어요.', why:'한 사람도 없다 là không có một ai. Chỉ khác chữ 만 với 도.', trap:'만 / 도' },
    { t:'방에 한 사람만 앉아 있어요.', why:'Người này đang đứng chứ không ngồi.', trap:'đứng / ngồi' }
  ],
  keys:[
    { w:'만', r:'man', vi:'chỉ, duy nhất' }, { w:'도', r:'do', vi:'cũng; (với phủ định) một… nào' },
    { w:'방', r:'bang', vi:'căn phòng' }, { w:'혼자', r:'honja', vi:'một mình' }
  ],
  gram:[{ p:'만 và 도', vi:'한 사람만 있어요 là chỉ có một người. 한 사람도 없어요 là không có một ai. Đổi mỗi một chữ mà nghĩa lật ngược.',
    ex:['방에 한 사람만 있어요.', 'Trong phòng chỉ có một người.'] }] },

{ id:'ko-46', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:54, y:42 }, { p:'person', x:150, y:220, pose:'walk' },
    { p:'person', x:240, y:220, pose:'walk' }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai người cùng đi bộ ngoài đường.',
  opts:[
    { t:'두 사람이 같이 걷고 있어요.', ok:true },
    { t:'한 사람이 혼자 걷고 있어요.', why:'혼자 là một mình. Trong tranh có hai người đi cùng nhau.', trap:'혼자 / 같이' },
    { t:'두 사람이 같이 달리고 있어요.', why:'Vế đầu đúng nên tai buông. Hai người này bước thong thả, thân thẳng.', trap:'hành động gần giống' },
    { t:'두 사람이 같이 걷고 있지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'같이', r:'gachi', vi:'cùng nhau' }, { w:'혼자', r:'honja', vi:'một mình' },
    { w:'걷다', r:'geotda', vi:'đi bộ' }, { w:'달리다', r:'dallida', vi:'chạy' }
  ],
  gram:[{ p:'같이 đọc là [가치]', vi:'Chữ ㅌ đứng trước 이 sẽ đọc thành ㅊ. Vì thế 같이 phát âm là 가치 chứ không phải 가티.',
    ex:['두 사람이 같이 걷고 있어요.', 'Hai người đang đi bộ cùng nhau.'] }] },

{ id:'ko-47', lang:'ko', lv:'trung-cap-1', cat:'Mua sắm',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:46, w:90, h:120, rows:4 }, { p:'tag', x:220, y:130, text:'5000' },
    { p:'coat', x:310, y:184 }
  ]},
  alt:'Chiếc áo khoác treo bên phải, bảng giá ghi 5000.',
  opts:[
    { t:'이 외투는 오천 원이에요.', ok:true },
    { t:'이 외투는 오만 원이에요.', why:'천 là nghìn, 만 là vạn — chỉ khác một âm tiết ở giữa.', trap:'nghìn / vạn' },
    { t:'이 외투는 육천 원이에요.', why:'오 là năm, 육 là sáu. Bảng giá ghi 5000.', trap:'số lượng' },
    { t:'이 외투들은 오천 원이에요.', why:'이 외투 là chiếc áo này, 이 외투들 là những chiếc áo này. Trong tranh treo một chiếc.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'오천', r:'ocheon', vi:'năm nghìn' }, { w:'만', r:'man', vi:'vạn, mười nghìn' },
    { w:'육', r:'yuk', vi:'sáu' }, { w:'들', r:'deul', vi:'đuôi số nhiều' }
  ],
  gram:[{ p:'천 · 만 · 십만', vi:'Tiếng Hàn đếm theo vạn như tiếng Trung: 만 là 10 000, 십만 là 100 000. Nhầm 천 với 만 là lệch mười lần.',
    ex:['이 외투는 오천 원이에요.', 'Chiếc áo khoác này năm nghìn won.'] }] },

{ id:'ko-48', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:160, y:220, w:130 }, { p:'key', x:160, y:156, s:1.4 },
    { p:'door', x:300, y:100 }
  ]},
  alt:'Chiếc chìa khoá nằm trên bàn, cánh cửa đóng ở bên phải.',
  opts:[
    { t:'열쇠는 탁자 위에 놓여 있어요.', ok:true },
    { t:'열쇠는 문에 꽂혀 있어요.', why:'Cánh cửa có thật nhưng chìa khoá nằm trên mặt bàn.', trap:'đúng vật, sai vị trí' },
    { t:'열쇠는 탁자 밑에 놓여 있어요.', why:'위 là trên, 밑 là dưới.', trap:'trên / dưới' },
    { t:'열쇠는 탁자 위에 놓여 있지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'열쇠', r:'yeolsoe', vi:'chìa khoá' }, { w:'놓이다', r:'nochida', vi:'được đặt, được để' },
    { w:'문', r:'mun', vi:'cánh cửa' }, { w:'탁자', r:'takja', vi:'cái bàn' }
  ],
  gram:[{ p:'놓다 và 놓이다', vi:'놓다 là người đặt vật xuống, 놓이다 là vật đang được đặt ở đó. Thêm 이 vào giữa là chuyển sang bị động.',
    ex:['열쇠는 탁자 위에 놓여 있어요.', 'Chìa khoá đang để trên bàn.'] }] },

{ id:'ko-49', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:120, y:60, w:110, h:120, rows:3 }, { p:'ladder', x:290, y:220 },
    { p:'person', x:350, y:220, pose:'point', flip:true }
  ]},
  alt:'Kệ sách đầy sách, cái thang dựng bên cạnh, một người đứng chỉ tay về phía kệ.',
  opts:[
    { t:'그 사람은 책장을 가리키고 있어요.', ok:true },
    { t:'그 사람은 사다리를 가리키고 있어요.', why:'Cái thang có thật nhưng cánh tay vươn qua nó, chỉ tới cái kệ.', trap:'đúng vật, sai hướng' },
    { t:'그 사람은 사다리에 올라가고 있어요.', why:'Người này đứng dưới đất, chưa đặt chân lên thang.', trap:'hành động' },
    { t:'그 사람은 책장을 가리키고 있지 않아요.', why:'Phủ định nằm ở đuôi dài cuối câu.', trap:'phủ định chìm' }
  ],
  keys:[
    { w:'책장', r:'chaekjang', vi:'kệ sách' }, { w:'사다리', r:'sadari', vi:'cái thang' },
    { w:'가리키다', r:'garikida', vi:'chỉ tay về' }, { w:'올라가다', r:'ollagada', vi:'trèo lên' }
  ],
  gram:[{ p:'가리키다 và 가르치다', vi:'가리키다 là chỉ tay về, 가르치다 là dạy học. Hai từ dài gần bằng nhau và chỉ khác vài nguyên âm.',
    ex:['책장을 가리키고 있어요.', 'Đang chỉ tay về kệ sách.'] }] },

{ id:'ko-50', lang:'ko', lv:'trung-cap-1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:250, y:30, view:'rain' }, { p:'sofa', x:150, y:220 },
    { p:'person', x:150, y:216, pose:'read' }, { p:'umbrella', x:340, y:220, s:1.4 }
  ]},
  alt:'Ngoài cửa sổ trời mưa, một người ngồi trong nhà đọc sách, cái ô gập dựng ở góc.',
  opts:[
    { t:'밖에는 비가 오는데 안에서 책을 읽고 있어요.', ok:true },
    { t:'안에는 비가 오는데 밖에서 책을 읽고 있어요.', why:'Hai từ 밖 và 안 bị đổi chỗ cho nhau.', trap:'trong / ngoài' },
    { t:'밖에는 비가 오는데 안에서 우산을 쓰고 있어요.', why:'Vế đầu đúng nên tai buông. Cái ô đang gập lại dựng ở góc.', trap:'đúng một nửa' },
    { t:'밖에는 눈이 오는데 안에서 책을 읽고 있어요.', why:'Ngoài cửa sổ là những vạch xiên, tức là mưa.', trap:'mưa / tuyết' }
  ],
  keys:[
    { w:'밖', r:'bak', vi:'bên ngoài' }, { w:'안', r:'an', vi:'bên trong' },
    { w:'비', r:'bi', vi:'mưa' }, { w:'읽다', r:'ikda', vi:'đọc' }
  ],
  gram:[{ p:'-는데 — nối hai vế', vi:'Đuôi -는데 dựng bối cảnh cho vế sau: «ngoài trời thì mưa, mà trong nhà thì…». Nghe được 는데 là biết câu còn một vế nữa.',
    ex:['밖에는 비가 오는데 안에서 책을 읽고 있어요.', 'Ngoài trời mưa còn trong nhà thì đang đọc sách.'] }] }

  );
})();
