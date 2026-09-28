/* ============================================================
   LangLab — NGHE & CHỌN TRANH · TIẾNG PHÁP
   ------------------------------------------------------------
   Do LangLab tự soạn. Tranh ghép từ js/scene-svg.js, không dùng ảnh
   của bên thứ ba và không dùng ảnh do AI sinh.

   BẪY NGHE ĐANG DÙNG (mỗi câu ít nhất hai kiểu khác nhau):
     · GIỐNG của danh từ — le/la, un/une, ce/cette. Tiếng Pháp không
       có danh từ trung tính, nghe sai mạo từ là hiểu sai từ.
     · SỐ NHIỀU KHÔNG PHÁT ÂM — le livre và les livres chỉ khác nhau ở
       mạo từ, chữ -s ở cuối câm. Đây là bẫy nghe đặc trưng nhất.
     · liaison: les amis (lê-zami) · un homme (ơ-nôm) — phụ âm cuối
       vốn câm lại nối sang từ sau, nghe như một từ.
     · âm mũi an / on / in: un pain · un pont · un banc.
     · il y a với il n'y a pas de — phủ định đổi luôn mạo từ.
     · giới từ sur · sous · dans · devant · derrière · à côté de ·
       entre · près de · en face de.
     · thời: présent (il écrit) · passé composé (il a écrit) ·
       futur proche (il va écrire).
     · être với avoir trong passé composé: il est allé · il a mangé.
     · hợp giống của tính từ nghe được: petit/petite · assis/assise ·
       grand/grande · ouvert/ouverte.
     · số đếm dễ lẫn: deux/douze · trois/treize · quatre/quatorze ·
       cinq/quinze · six/seize · sept/dix-sept.
     · ouvert/fermé · allumé/éteint · déjà/pas encore.

   LƯU Ý khi soạn thêm: KHÔNG lấy cặp chỉ khác nhau ở chữ viết mà đọc
   y hệt (ver / vers / vert / verre) làm bẫy chọn đáp án — người nghe
   không thể phân biệt được. Chỉ đưa vào phần ngữ pháp để biết mà đề
   phòng khi viết.
   ============================================================ */
(function(){
  if (typeof LISTEN_PIC === 'undefined') return;
  LISTEN_PIC.push(

/* ========== GIỐNG CỦA DANH TỪ · SỐ NHIỀU CÂM ========== */
{ id:'fr-01', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'book', x:180, y:158 },
    { p:'chair', x:300, y:220 }
  ]},
  alt:'Một quyển sách nằm trên mặt bàn, bên phải có một cái ghế.',
  opts:[
    { t:'Le livre est sur la table.', ok:true },
    { t:'Les livres sont sur la table.', why:'Chữ -s ở cuối livres không đọc, nên hai câu chỉ khác ở mạo từ le và les, và ở động từ est với sont. Trong tranh chỉ có MỘT quyển.', trap:'số ít / số nhiều' },
    { t:'Le livre est sous la table.', why:'sur là ở trên mặt bàn, sous là ở dưới gầm bàn.', trap:'sur / sous' },
    { t:'Le livre est sur la chaise.', why:'Cái ghế có thật trong tranh, nhưng quyển sách không nằm ở đó.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'le livre', r:'lə livʁ', vi:'quyển sách (giống đực)' },
    { w:'la table', r:'la tabl', vi:'cái bàn (giống cái)' },
    { w:'sur', r:'syʁ', vi:'trên' }, { w:'sous', r:'su', vi:'dưới' }
  ],
  gram:[{ p:'le livre / les livres', vi:'Số nhiều tiếng Pháp thường KHÔNG nghe được ở danh từ, vì -s cuối câm. Muốn biết một hay nhiều thì phải bắt mạo từ (le / les) và động từ (est / sont).',
    ex:['Les livres sont sur la table.', 'Những quyển sách ở trên bàn.'] }] },

{ id:'fr-02', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:140 },
    { p:'cup', x:170, y:158 }, { p:'cup', x:205, y:158 }, { p:'cup', x:240, y:158 }
  ]},
  alt:'Ba cái cốc đứng cạnh nhau trên bàn.',
  opts:[
    { t:'Il y a trois tasses sur la table.', ok:true },
    { t:'Il y a treize tasses sur la table.', why:'trois là ba, treize là mười ba. Hai từ đều bắt đầu bằng tr-, phải nghe hết đuôi.', trap:'ba / mười ba' },
    { t:'Il y a trois verres sur la table.', why:'une tasse là cái cốc có tay cầm, un verre là cái ly thuỷ tinh không tay cầm.', trap:'vật khác' },
    { t:'Il n’y a pas de tasses sur la table.', why:'Phủ định il n’y a pas de nghĩa là không có. Trong tranh rõ ràng có cốc.', trap:'có / không có' }
  ],
  keys:[
    { w:'il y a', r:'il i a', vi:'có (tồn tại)' },
    { w:'la tasse', r:'tas', vi:'cái cốc, chén' },
    { w:'trois', r:'tʁwa', vi:'ba' }, { w:'treize', r:'tʁɛz', vi:'mười ba' }
  ],
  gram:[{ p:'il y a → il n’y a pas DE', vi:'Khi phủ định, mạo từ un/une/des đổi thành de. Nghe thấy «pas de» là biết câu đang nói KHÔNG có.',
    ex:['Il n’y a pas de tasse.', 'Không có cái cốc nào.'] }] },

{ id:'fr-03', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:40, y:34, view:'rain' },
    { p:'clock', x:330, y:70, time:'7:30' },
    { p:'table', x:190, y:220, w:120 }, { p:'cat', x:190, y:218, pose:'lie' }
  ]},
  alt:'Con mèo nằm dưới gầm bàn, đồng hồ chỉ 7 giờ 30, ngoài cửa sổ trời mưa.',
  opts:[
    { t:'Le chat est sous la table.', ok:true },
    { t:'La chatte est sous la table.', why:'le chat là mèo đực, la chatte là mèo cái. Tranh vẽ không cho biết, nên câu trung tính le chat mới đúng.', trap:'giống' },
    { t:'Le chat est sur la table.', why:'Trong tranh con mèo nằm BÊN DƯỚI mặt bàn.', trap:'sur / sous' },
    { t:'Le chien est sous la table.', why:'un chien là con chó. Con vật trong tranh có tai nhọn và có râu.', trap:'chủ thể' }
  ],
  keys:[
    { w:'le chat', r:'ʃa', vi:'con mèo' }, { w:'sous', r:'su', vi:'dưới' },
    { w:'il pleut', r:'il plø', vi:'trời đang mưa' },
    { w:'le chien', r:'ʃjɛ̃', vi:'con chó' }
  ],
  gram:[{ p:'chat / chatte, chien / chienne', vi:'Nhiều tên con vật và nghề nghiệp có hai dạng theo giống. Dạng giống cái thường đọc thêm phụ âm cuối: chat đọc «sa», chatte đọc «sát».',
    ex:['Le chat dort sous la table.', 'Con mèo ngủ dưới gầm bàn.'] }] },

{ id:'fr-04', lang:'fr', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'chair', x:250, y:220 }
  ]},
  alt:'Một cái bàn học trống trơn, bên cạnh là một cái ghế.',
  opts:[
    { t:'Il n’y a rien sur le bureau.', ok:true },
    { t:'Il y a un livre sur le bureau.', why:'Mặt bàn trong tranh không có gì cả.', trap:'có / không có' },
    { t:'Il n’y a rien sous le bureau.', why:'Gầm bàn cũng trống, nhưng câu đúng nói về MẶT bàn.', trap:'sur / sous' },
    { t:'Il n’y a rien sur la chaise.', why:'Cái ghế có thật, nhưng câu đúng nói về cái bàn.', trap:'đúng vật, sai mốc' }
  ],
  keys:[
    { w:'le bureau', r:'by.ʁo', vi:'bàn làm việc, bàn học' },
    { w:'rien', r:'ʁjɛ̃', vi:'không gì cả' }, { w:'la chaise', r:'ʃɛz', vi:'cái ghế' },
    { w:'il n’y a rien', r:'il nja ʁjɛ̃', vi:'không có gì cả' }
  ],
  gram:[{ p:'ne … rien', vi:'Phủ định tiếng Pháp đi thành cặp: ne … pas (không), ne … rien (không gì), ne … personne (không ai). Trong lời nói ne thường bị lược, nên phải bắt từ thứ hai.',
    ex:['Il n’y a rien dans le sac.', 'Trong túi không có gì.'] }] },

{ id:'fr-05', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:160, y:220 }, { p:'person', x:160, y:216, pose:'sit' },
    { p:'tv', x:320, y:220 }
  ]},
  alt:'Một người ngồi trên ghế sofa, bên phải là cái tivi.',
  opts:[
    { t:'Elle est assise sur le canapé.', ok:true },
    { t:'Elle est assis sur le canapé.', why:'Với chủ ngữ giống cái phải hợp giống: assise, nghe rõ âm «z» ở cuối. assis là dạng giống đực.', trap:'hợp giống' },
    { t:'Elle est debout devant le canapé.', why:'debout là đứng. Trong tranh người này đang ngồi.', trap:'assis / debout' },
    { t:'Elle est assise devant la télé.', why:'Cái tivi ở xa bên phải, người này không ngồi trước nó.', trap:'vị trí' }
  ],
  keys:[
    { w:'assis / assise', r:'a.si / a.siz', vi:'đang ngồi' },
    { w:'le canapé', r:'ka.na.pe', vi:'ghế sofa' },
    { w:'debout', r:'də.bu', vi:'đứng' },
    { w:'la télé', r:'te.le', vi:'cái tivi' }
  ],
  gram:[{ p:'assis → assise', vi:'Tính từ giống cái thường thêm -e, và chữ -e đó làm phụ âm trước nó BẬT ra: assis đọc «a-si», assise đọc «a-zi-z». Nghe phụ âm cuối là biết đang nói về nam hay nữ.',
    ex:['Marie est assise. Paul est assis.', 'Marie đang ngồi. Paul đang ngồi.'] }] },

/* ========== GIỚI TỪ VỊ TRÍ ========== */
{ id:'fr-06', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:200, y:220, w:150 }, { p:'chair', x:120, y:220 }, { p:'chair', x:290, y:220 }
  ]},
  alt:'Cái bàn ở giữa, hai cái ghế đặt hai bên.',
  opts:[
    { t:'La table est entre les deux chaises.', ok:true },
    { t:'La table est devant les deux chaises.', why:'devant là ở phía trước. Trong tranh cái bàn nằm GIỮA hai ghế.', trap:'entre / devant' },
    { t:'Les chaises sont sur la table.', why:'Hai cái ghế đứng trên sàn, không ở trên mặt bàn.', trap:'đảo vai' },
    { t:'La table est entre les deux fenêtres.', why:'Hai vật hai bên là ghế, không phải cửa sổ.', trap:'vật khác' }
  ],
  keys:[
    { w:'entre', r:'ɑ̃tʁ', vi:'giữa (hai vật)' },
    { w:'à côté de', r:'a ko.te də', vi:'bên cạnh' },
    { w:'deux', r:'dø', vi:'hai' },
    { w:'la chaise', r:'ʃɛz', vi:'cái ghế' }
  ],
  gram:[{ p:'entre A et B', vi:'entre luôn cần hai mốc. Nếu chỉ có một mốc thì dùng à côté de (bên cạnh) hoặc près de (gần).',
    ex:['La table est entre la porte et la fenêtre.', 'Cái bàn ở giữa cửa và cửa sổ.'] }] },

{ id:'fr-07', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:150, y:220 }, { p:'shoe', x:150, y:220, s:0.8 },
    { p:'lamp', x:290, y:220 }
  ]},
  alt:'Đôi giày để dưới gầm giường, bên phải có cái đèn cây.',
  opts:[
    { t:'Les chaussures sont sous le lit.', ok:true },
    { t:'La chaussure est sous le lit.', why:'Trong tranh có một ĐÔI giày, nên phải dùng số nhiều: les chaussures, sont.', trap:'số ít / số nhiều' },
    { t:'Les chaussures sont derrière le lit.', why:'derrière là phía sau. Đôi giày nằm bên dưới giường.', trap:'sous / derrière' },
    { t:'Les chaussettes sont sous le lit.', why:'une chaussette là cái tất, une chaussure là cái giày. Hai từ rất giống nhau ở phần đầu.', trap:'từ gần âm' }
  ],
  keys:[
    { w:'la chaussure', r:'ʃo.syʁ', vi:'cái giày' },
    { w:'la chaussette', r:'ʃo.sɛt', vi:'cái tất' },
    { w:'le lit', r:'li', vi:'cái giường' },
    { w:'derrière', r:'dɛ.ʁjɛʁ', vi:'phía sau' }
  ],
  gram:[{ p:'chaussure và chaussette', vi:'Hai từ chỉ khác nhau ở đuôi. Cả hai đều giống cái. Nhớ theo cỡ: chaussure dài hơn, và vật cũng lớn hơn.',
    ex:['Mes chaussures sont noires.', 'Giày của tôi màu đen.'] }] },

{ id:'fr-08', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'shelf', x:40, y:50, w:90, h:120, rows:3 },
    { p:'plant', x:230, y:220 }, { p:'plant', x:310, y:220 }
  ]},
  alt:'Giá sách treo sát tường bên trái, hai chậu cây đặt trên sàn ở bên phải nó.',
  opts:[
    { t:'Les plantes sont à côté de l’étagère.', ok:true },
    { t:'La plante est à côté de l’étagère.', why:'Trong tranh có HAI chậu cây. Chữ -s cuối plantes không đọc, nên phải bắt les và sont.', trap:'số ít / số nhiều' },
    { t:'Les plantes sont sur l’étagère.', why:'Hai chậu cây đứng dưới sàn, không đặt lên giá.', trap:'bên cạnh / bên trên' },
    { t:'Les fleurs sont à côté de l’étagère.', why:'une fleur là bông hoa, une plante là cây trồng trong chậu.', trap:'vật khác' }
  ],
  keys:[
    { w:'l’étagère', r:'e.ta.ʒɛʁ', vi:'cái giá sách (giống cái)' },
    { w:'la plante', r:'plɑ̃t', vi:'cây cảnh' },
    { w:'la fleur', r:'flœʁ', vi:'bông hoa' }, { w:'à côté de', r:'a ko.te də', vi:'bên cạnh' }
  ],
  gram:[{ p:'le / la → l’ trước nguyên âm', vi:'l’étagère che mất giống của từ. Muốn biết nó là giống cái thì phải nhớ, hoặc nghe tính từ đi sau: l’étagère est haute (giống cái) chứ không phải haut.',
    ex:['L’étagère est haute.', 'Cái giá cao.'] }] },

{ id:'fr-09', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'bag', x:250, y:220 },
    { p:'key', x:180, y:158 }
  ]},
  alt:'Chùm chìa khoá nằm trên bàn, cái túi để dưới sàn bên cạnh bàn.',
  opts:[
    { t:'Les clés sont sur la table, à côté du sac.', ok:true },
    { t:'Les clés sont dans le sac.', why:'dans là ở trong. Chìa khoá nằm trên mặt bàn, không ở trong túi.', trap:'sur / dans' },
    { t:'Le sac est sur la table, à côté des clés.', why:'Câu này đảo ngược: cái túi để dưới sàn, còn chìa khoá thì ở trên bàn.', trap:'đảo vai' },
    { t:'Les clés sont sous la table, à côté du sac.', why:'Câu này chỉ đổi MỘT từ: sur thành sous. Chìa khoá nằm trên mặt bàn.', trap:'sur / sous' }
  ],
  keys:[
    { w:'la clé', r:'kle', vi:'chìa khoá' }, { w:'le sac', r:'sak', vi:'cái túi' },
    { w:'à côté de', r:'a ko.te də', vi:'bên cạnh' }, { w:'dans', r:'dɑ̃', vi:'trong' }
  ],
  gram:[{ p:'à côté DE + le = du', vi:'de gặp le thành du, gặp les thành des: à côté du sac, à côté des clés. Nghe du hay des là biết vật sau đó là số ít hay số nhiều.',
    ex:['à côté du lit · à côté des livres', 'bên cạnh giường · bên cạnh mấy quyển sách'] }] },

{ id:'fr-10', lang:'fr', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'car', x:120, y:220 }, { p:'tree', x:300, y:220 }, { p:'bicycle', x:220, y:220 }
  ]},
  alt:'Ô tô bên trái, xe đạp ở giữa, cây bên phải.',
  opts:[
    { t:'Le vélo est entre la voiture et l’arbre.', ok:true },
    { t:'La voiture est entre le vélo et l’arbre.', why:'Ô tô ở ngoài cùng bên trái. Vật nằm giữa là cái xe đạp.', trap:'đảo vai' },
    { t:'Le vélo est devant la voiture et l’arbre.', why:'Câu này chỉ đổi MỘT từ: entre thành devant. Xe đạp nằm giữa hai vật, không ở phía trước chúng.', trap:'entre / devant' },
    { t:'Les vélos sont entre la voiture et l’arbre.', why:'Chỉ có MỘT cái xe đạp. Chữ -s cuối vélos không đọc, phải bắt le với les.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le vélo', r:'ve.lo', vi:'xe đạp' }, { w:'la voiture', r:'vwa.tyʁ', vi:'xe ô tô' },
    { w:'l’arbre', r:'aʁbʁ', vi:'cái cây (giống đực)' },
    { w:'entre', r:'ɑ̃tʁ', vi:'giữa (hai vật)' }
  ],
  gram:[{ p:'la voiture nhưng l’arbre', vi:'voiture giống cái, arbre giống đực nhưng bắt đầu bằng nguyên âm nên mạo từ rút thành l’. Đừng suy ra giống từ dấu nháy.',
    ex:['un arbre, une voiture', 'một cái cây, một cái xe'] }] },

/* ========== THỜI CỦA ĐỘNG TỪ ========== */
{ id:'fr-11', lang:'fr', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:160, y:220 }, { p:'person', x:160, y:216, pose:'write' }
  ]},
  alt:'Một người đang ngồi viết ở bàn học, phía sau là bảng.',
  opts:[
    { t:'Il écrit dans son cahier.', ok:true },
    { t:'Il a écrit dans son cahier.', why:'il a écrit là passé composé — việc đã xong. Trong tranh người này đang viết, bút vẫn trên giấy.', trap:'đang làm / đã làm' },
    { t:'Il va écrire dans son cahier.', why:'il va écrire là sắp viết, chưa bắt đầu. Trong tranh việc đang diễn ra.', trap:'sắp làm / đang làm' },
    { t:'Il lit son cahier.', why:'lire là đọc, écrire là viết. Người trong tranh đang cầm bút.', trap:'động từ khác' }
  ],
  keys:[
    { w:'écrire', r:'e.kʁiʁ', vi:'viết' }, { w:'le cahier', r:'ka.je', vi:'quyển vở' },
    { w:'il écrit', r:'il e.kʁi', vi:'anh ấy đang viết' },
    { w:'lire', r:'liʁ', vi:'đọc' }
  ],
  gram:[{ p:'il écrit · il a écrit · il va écrire', vi:'Ba thời cơ bản: hiện tại, quá khứ (avoir/être + quá khứ phân từ), và tương lai gần (aller + động từ nguyên thể). Nghe phần ĐẦU câu là biết ngay thời nào.',
    ex:['Il va écrire une lettre.', 'Anh ấy sắp viết một bức thư.'] }] },

{ id:'fr-12', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'plate', x:180, y:158 },
    { p:'person', x:280, y:220, pose:'stand' }
  ]},
  alt:'Cái đĩa trống trên bàn, một người đứng bên cạnh.',
  opts:[
    { t:'Il a déjà mangé.', ok:true },
    { t:'Il n’a pas encore mangé.', why:'pas encore là vẫn chưa. Đĩa đã trống, nghĩa là ăn xong rồi.', trap:'déjà / pas encore' },
    { t:'Il est déjà mangé.', why:'manger đi với avoir, không đi với être. «Il est mangé» thì thành «anh ấy bị ăn».', trap:'être / avoir' },
    { t:'Il va manger.', why:'va manger là sắp ăn. Đĩa trống cho thấy việc đã xong.', trap:'sắp làm / đã làm' }
  ],
  keys:[
    { w:'manger', r:'mɑ̃.ʒe', vi:'ăn' }, { w:'déjà', r:'de.ʒa', vi:'đã… rồi' },
    { w:'pas encore', r:'pa.zɑ̃.kɔʁ', vi:'vẫn chưa' },
    { w:'l’assiette', r:'a.sjɛt', vi:'cái đĩa' }
  ],
  gram:[{ p:'avoir mangé nhưng être allé', vi:'Phần lớn động từ dùng avoir. Nhóm động từ di chuyển và thay đổi trạng thái (aller, venir, partir, arriver, entrer, sortir, naître, mourir, devenir, rester) dùng être, và khi đó quá khứ phân từ phải hợp giống: elle est allée.',
    ex:['Elle est allée à l’école.', 'Cô ấy đã đến trường.'] }] },

{ id:'fr-13', lang:'fr', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:130, y:220, pose:'walk' }, { p:'bus', x:300, y:220 }
  ]},
  alt:'Một người đang đi bộ, chiếc xe buýt ở phía bên phải.',
  opts:[
    { t:'Il marche vers l’arrêt de bus.', ok:true },
    { t:'Il court vers l’arrêt de bus.', why:'courir là chạy, marcher là đi bộ. Trong tranh dáng người đang bước, không phải chạy.', trap:'động từ khác' },
    { t:'Il attend le bus.', why:'attendre là đứng đợi. Người này đang di chuyển.', trap:'đứng / đi' },
    { t:'Elle marche vers l’arrêt de bus.', why:'Elle là chị ấy. Câu đúng dùng il, và nghe khác nhau rõ ở đầu câu.', trap:'il / elle' }
  ],
  keys:[
    { w:'marcher', r:'maʁ.ʃe', vi:'đi bộ' }, { w:'courir', r:'ku.ʁiʁ', vi:'chạy' },
    { w:'l’arrêt de bus', r:'a.ʁɛ də bys', vi:'điểm dừng xe buýt' },
    { w:'attendre', r:'a.tɑ̃dʁ', vi:'đợi' }
  ],
  gram:[{ p:'il và elle', vi:'Hai từ này nghe hoàn toàn khác nhau: il là «il», elle là «èl». Đây là chỗ đầu câu nên nghe thật kỹ ngay từ tiếng đầu.',
    ex:['Il marche. Elle court.', 'Anh ấy đi bộ. Chị ấy chạy.'] }] },

{ id:'fr-14', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'window', x:60, y:34, view:'sun', open:true },
    { p:'door', x:300, y:100 }, { p:'lamp', x:200, y:220 }
  ]},
  alt:'Cửa sổ mở, trời nắng, cửa ra vào đóng, trong phòng có cái đèn.',
  opts:[
    { t:'La fenêtre est ouverte et la porte est fermée.', ok:true },
    { t:'La fenêtre est ouvert et la porte est fermé.', why:'fenêtre và porte đều giống cái, nên phải là ouverte, fermée — nghe rõ chữ «t» cuối ouverte.', trap:'hợp giống' },
    { t:'La fenêtre est fermée et la porte est ouverte.', why:'Câu này đảo ngược: trong tranh cửa sổ mở, cửa ra vào đóng.', trap:'đảo vai' },
    { t:'La fenêtre est ouverte et la lampe est allumée.', why:'Cái đèn có thật nhưng trong tranh nó chưa bật.', trap:'đúng vật, sai trạng thái' }
  ],
  keys:[
    { w:'ouvert / ouverte', r:'u.vɛʁ / u.vɛʁt', vi:'đang mở' },
    { w:'fermé / fermée', r:'fɛʁ.me', vi:'đang đóng' },
    { w:'la fenêtre', r:'fə.nɛtʁ', vi:'cửa sổ' },
    { w:'la porte', r:'pɔʁt', vi:'cửa ra vào' }
  ],
  gram:[{ p:'ouvert → ouverte nghe được, fermé → fermée thì không', vi:'Thêm -e vào ouvert thì bật ra âm «t». Còn fermé vốn đã kết thúc bằng nguyên âm nên fermée đọc y hệt. Có cặp nghe được giống, có cặp không.',
    ex:['La porte est ouverte.', 'Cửa đang mở.'] }] },

{ id:'fr-15', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:130 }, { p:'lamp', x:300, y:220 },
    { p:'clock', x:80, y:70, time:'9:15' }
  ]},
  alt:'Đồng hồ chỉ 9 giờ 15, có cái đèn cây và một cái bàn.',
  opts:[
    { t:'Il est neuf heures et quart.', ok:true },
    { t:'Il est neuf heures moins le quart.', why:'moins le quart là kém mười lăm, tức 8 giờ 45. Kim đồng hồ đang ở sau số 9.', trap:'et quart / moins le quart' },
    { t:'Il est neuf heures et demie.', why:'et demie là 30 phút. Kim phút đang ở số 3, tức 15 phút.', trap:'15 / 30 phút' },
    { t:'Il est dix heures et quart.', why:'dix là mười, neuf là chín. Hai số này nghe khác hẳn nhau, chỉ cần bắt đúng tiếng đầu.', trap:'số giờ' }
  ],
  keys:[
    { w:'et quart', r:'e kaʁ', vi:'hơn mười lăm' },
    { w:'et demie', r:'e də.mi', vi:'hơn ba mươi' },
    { w:'moins le quart', r:'mwɛ̃ lə kaʁ', vi:'kém mười lăm' },
    { w:'l’heure', r:'œʁ', vi:'giờ' }
  ],
  gram:[{ p:'giờ trong tiếng Pháp', vi:'Từ phút 1 đến 30 thì cộng: neuf heures vingt. Từ phút 31 trở đi thì trừ vào giờ sau: dix heures moins vingt (9 giờ 40). Nghe thấy moins là biết phải cộng thêm giờ.',
    ex:['Il est huit heures moins dix.', '7 giờ 50.'] }] },

/* ========== ÂM MŨI VÀ LIAISON ========== */
{ id:'fr-16', lang:'fr', lv:'a2', cat:'Đường phố',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:130 }, { p:'bread', x:190, y:158 }
  ]},
  alt:'Một ổ bánh mì đặt trên bàn, ngoài ra không có gì khác.',
  opts:[
    { t:'Il y a du pain sur la table.', ok:true },
    { t:'Il y a du vin sur la table.', why:'pain là bánh mì, vin là rượu vang. Hai từ chỉ khác nhau ở phụ âm đầu p và v, phần âm mũi phía sau giống hệt.', trap:'âm mũi giống nhau' },
    { t:'Il y a des pains sur la table.', why:'du pain là một lượng bánh nói chung; des pains là nhiều ổ riêng lẻ. Trong tranh chỉ có một ổ.', trap:'du / des' },
    { t:'Il n’y a pas de pain sur la table.', why:'Trong tranh rõ ràng có bánh.', trap:'có / không có' }
  ],
  keys:[
    { w:'le pain', r:'pɛ̃', vi:'bánh mì' }, { w:'le vin', r:'vɛ̃', vi:'rượu vang' },
    { w:'acheter', r:'aʃ.te', vi:'mua' },
    { w:'vendre', r:'vɑ̃dʁ', vi:'bán' }
  ],
  gram:[{ p:'pain · vin · bain · main', vi:'Bốn từ này chỉ khác nhau ở phụ âm đầu, phần đuôi -ain/-in đọc y hệt nhau. Khi nghe phải bắt cho được tiếng đầu tiên.',
    ex:['du pain, du vin, une main', 'bánh mì, rượu vang, bàn tay'] }] },

{ id:'fr-17', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'person', x:130, y:220, pose:'stand' }, { p:'person', x:230, y:220, pose:'stand', hair:'long' },
    { p:'table', x:330, y:220, w:80 }
  ]},
  alt:'Hai người đứng cạnh nhau trong phòng, bên phải là cái bàn.',
  opts:[
    { t:'Ce sont mes amis.', ok:true },
    { t:'C’est mon ami.', why:'Trong tranh có HAI người. Số nhiều là ce sont mes amis, và có liaison «mê-zami».', trap:'số ít / số nhiều' },
    { t:'Ce sont mes enfants.', why:'un enfant là đứa trẻ. Hai người trong tranh cao bằng nhau và cao như người lớn.', trap:'từ khác' },
    { t:'Ce sont ses amis.', why:'mes là của tôi, ses là của anh ấy hoặc chị ấy. Hai từ nghe khác nhau ở nguyên âm đầu.', trap:'mes / ses' }
  ],
  keys:[
    { w:'l’ami', r:'a.mi', vi:'người bạn' }, { w:'mes amis', r:'me.za.mi', vi:'bạn của tôi (số nhiều)' },
    { w:'ce sont', r:'sə sɔ̃', vi:'đó là (số nhiều)' },
    { w:'l’enfant', r:'ɑ̃.fɑ̃', vi:'đứa trẻ' }
  ],
  gram:[{ p:'liaison: mes amis → «mê-zami»', vi:'Chữ -s cuối mes vốn câm, nhưng khi từ sau bắt đầu bằng nguyên âm thì nó bật ra thành âm «z» và nối liền. Đây chính là dấu hiệu duy nhất cho biết đang nói số nhiều.',
    ex:['mon ami → mes amis', 'bạn tôi → những người bạn của tôi'] }] },

{ id:'fr-18', lang:'fr', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:200, y:220, pose:'stand' }, { p:'tree', x:320, y:220 }
  ]},
  alt:'Một người đàn ông đứng trên phố, bên phải có một cái cây.',
  opts:[
    { t:'C’est un homme.', ok:true },
    { t:'Ce sont des hommes.', why:'Chỉ có MỘT người. Số nhiều des hommes nghe là «đê-zom».', trap:'số ít / số nhiều' },
    { t:'C’est une femme.', why:'une femme là người phụ nữ. Nhân vật trong tranh không có tóc dài.', trap:'giống' },
    { t:'C’est un arbre.', why:'Cái cây có thật, nhưng chủ thể chính của tranh là con người.', trap:'đúng vật, sai chủ thể' }
  ],
  keys:[
    { w:'un homme', r:'œ̃.nɔm', vi:'một người đàn ông' },
    { w:'une femme', r:'yn fam', vi:'một người phụ nữ' },
    { w:'c’est', r:'sɛ', vi:'đó là (số ít)' }, { w:'l’arbre', r:'aʁbʁ', vi:'cái cây' }
  ],
  gram:[{ p:'un homme đọc «ơ-nôm»', vi:'Chữ h ở đầu homme hoàn toàn không đọc, nên n của un nối luôn sang. Cũng vì thế mà nghe un homme rất dễ lẫn với une homme — nhưng dạng sau thì không tồn tại, homme luôn là giống đực.',
    ex:['un homme, une femme, des hommes', 'một người đàn ông, một người phụ nữ, những người đàn ông'] }] },

{ id:'fr-19', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'fridge', x:140, y:220 }, { p:'apple', x:250, y:158 }, { p:'table', x:250, y:220, w:100 }
  ]},
  alt:'Cái tủ lạnh bên trái, một quả táo đặt trên bàn bên phải.',
  opts:[
    { t:'Il y a une pomme sur la table.', ok:true },
    { t:'Il y a des pommes sur la table.', why:'des pommes là nhiều quả. Trong tranh chỉ có một quả. Chữ -s cuối pommes không đọc, phải bắt une với des.', trap:'số ít / số nhiều' },
    { t:'Il y a une pomme dans le frigo.', why:'dans le frigo là ở trong tủ lạnh. Quả táo đang để trên bàn.', trap:'sur / dans' },
    { t:'Il y a un pomme sur la table.', why:'pomme là danh từ giống cái, phải là UNE pomme. Đây là lỗi giống rất hay gặp.', trap:'giống' }
  ],
  keys:[
    { w:'la pomme', r:'pɔm', vi:'quả táo (giống cái)' },
    { w:'le frigo', r:'fʁi.ɡo', vi:'tủ lạnh' },
    { w:'une', r:'yn', vi:'một (giống cái)' }, { w:'des', r:'de', vi:'những (số nhiều)' }
  ],
  gram:[{ p:'un / une / des', vi:'Ba mạo từ không xác định. un và une nghe rất khác nhau: «ơ» và «uyn». des thì luôn là số nhiều. Bắt được mạo từ là bắt được cả giống và số.',
    ex:['un livre, une pomme, des livres', 'một quyển sách, một quả táo, những quyển sách'] }] },

{ id:'fr-20', lang:'fr', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:110, y:220, w:96 }, { p:'desk', x:220, y:220, w:96 }, { p:'desk', x:330, y:220, w:96 }
  ]},
  alt:'Ba cái bàn học trong lớp, phía trên là cái bảng.',
  opts:[
    { t:'Il y a trois bureaux dans la classe.', ok:true },
    { t:'Il y a treize bureaux dans la classe.', why:'trois là ba, treize là mười ba. Phải nghe hết đuôi của từ.', trap:'ba / mười ba' },
    { t:'Il y a trois tableaux dans la classe.', why:'un tableau là cái bảng, un bureau là cái bàn. Trong tranh có một bảng và ba bàn.', trap:'từ gần âm' },
    { t:'Il n’y a pas de bureau dans la classe.', why:'Trong tranh rõ ràng có bàn.', trap:'có / không có' }
  ],
  keys:[
    { w:'le bureau', r:'by.ʁo', vi:'cái bàn học' },
    { w:'le tableau', r:'ta.blo', vi:'cái bảng' },
    { w:'la classe', r:'klas', vi:'lớp học' },
    { w:'trois', r:'tʁwa', vi:'ba' }
  ],
  gram:[{ p:'số nhiều -eau → -eaux', vi:'Từ kết thúc bằng -eau thêm -x chứ không thêm -s: bureau → bureaux, tableau → tableaux. Nhưng cả -x lẫn -s đều câm, nên nghe vẫn y hệt nhau.',
    ex:['un bureau, deux bureaux', 'một cái bàn, hai cái bàn'] }] },

/* ========== ĐỘNG TỪ QUEN DÙNG ========== */
{ id:'fr-21', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'stove', x:130, y:220 }, { p:'person', x:196, y:220, pose:'cook', flip:true },
    { p:'teapot', x:290, y:158 }, { p:'table', x:290, y:220, w:90 }
  ]},
  alt:'Một người đang nấu ở bếp, trên bàn bên phải có cái ấm.',
  opts:[
    { t:'Elle fait la cuisine.', ok:true },
    { t:'Elle fait le ménage.', why:'faire le ménage là dọn nhà. Người này đang đứng ở bếp, tay trên nồi.', trap:'cụm gần nghĩa' },
    { t:'Elle prépare le thé.', why:'Cái ấm có thật nhưng ở trên bàn, không phải việc người này đang làm.', trap:'đúng vật, sai việc' },
    { t:'Elle a fait la cuisine.', why:'a fait là đã làm xong. Trong tranh việc đang diễn ra.', trap:'đang làm / đã làm' }
  ],
  keys:[
    { w:'faire la cuisine', r:'fɛʁ la kwi.zin', vi:'nấu ăn' },
    { w:'faire le ménage', r:'fɛʁ lə me.naʒ', vi:'dọn dẹp nhà' },
    { w:'la théière', r:'te.jɛʁ', vi:'cái ấm trà' }, { w:'préparer', r:'pʁe.pa.ʁe', vi:'chuẩn bị, pha' }
  ],
  gram:[{ p:'faire + việc nhà', vi:'Rất nhiều việc thường ngày tiếng Pháp đều dùng faire: faire la cuisine, faire le ménage, faire la vaisselle (rửa bát), faire les courses (đi chợ). Học theo cụm, đừng dịch từng từ.',
    ex:['Je fais les courses le samedi.', 'Thứ Bảy tôi đi chợ.'] }] },

{ id:'fr-22', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:170, y:220 }, { p:'person', x:170, y:216, pose:'read' },
    { p:'lamp', x:300, y:220 }
  ]},
  alt:'Một người ngồi trên sofa cầm sách đọc, bên phải là cái đèn.',
  opts:[
    { t:'Il lit un livre sur le canapé.', ok:true },
    { t:'Il écrit dans un livre sur le canapé.', why:'écrire là viết. Người này giữ sách bằng hai tay, không cầm bút.', trap:'đọc / viết' },
    { t:'Il lit un livre sous le canapé.', why:'sous le canapé là dưới gầm ghế. Người này ngồi TRÊN ghế.', trap:'sur / sous' },
    { t:'Ils lisent un livre sur le canapé.', why:'ils lisent là số nhiều. Trong tranh chỉ có một người. Nghe «il li» với «il liz» là phân biệt được.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'lire', r:'liʁ', vi:'đọc' }, { w:'il lit', r:'il li', vi:'anh ấy đọc' },
    { w:'ils lisent', r:'il liz', vi:'họ đọc' },
    { w:'le canapé', r:'ka.na.pe', vi:'ghế sofa' }
  ],
  gram:[{ p:'il lit và ils lisent', vi:'Với phần lớn động từ, dạng số ít và số nhiều ngôi thứ ba đọc giống nhau (il parle / ils parlent). Nhưng một số động từ thì khác rõ: lit/lisent, fait/font, va/vont, est/sont, a/ont. Đây là những chỗ nghe được số.',
    ex:['Il est là. Ils sont là.', 'Anh ấy ở đây. Họ ở đây.'] }] },

{ id:'fr-23', lang:'fr', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:120, y:220, pose:'walk' }, { p:'umbrella', x:120, y:118, open:true, s:1.2 },
    { p:'rain', x:200, y:20, n:7 }
  ]},
  alt:'Trời mưa, một người đi bộ và giương dù.',
  opts:[
    { t:'Il pleut, donc elle ouvre son parapluie.', ok:true },
    { t:'Il neige, donc elle ouvre son parapluie.', why:'neiger là có tuyết. Trong tranh là những vạch mưa xiên.', trap:'mưa / tuyết' },
    { t:'Il pleut, mais elle ferme son parapluie.', why:'Cái dù trong tranh đang mở căng ra.', trap:'mở / đóng' },
    { t:'Il pleut, donc il ouvre son parapluie.', why:'Câu đúng dùng elle. il và elle nghe khác nhau rõ ràng.', trap:'il / elle' }
  ],
  keys:[
    { w:'il pleut', r:'il plø', vi:'trời mưa' }, { w:'il neige', r:'il nɛʒ', vi:'trời có tuyết' },
    { w:'le parapluie', r:'pa.ʁa.plɥi', vi:'cái dù' },
    { w:'ouvrir', r:'u.vʁiʁ', vi:'mở' }
  ],
  gram:[{ p:'thời tiết luôn dùng «il»', vi:'il pleut, il neige, il fait froid — chữ il ở đây không chỉ ai cả, chỉ là chủ ngữ hình thức. Nghe «il pleut» thì không được hiểu là «anh ấy».',
    ex:['Il fait froid aujourd’hui.', 'Hôm nay trời lạnh.'] }] },

{ id:'fr-24', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:140 }, { p:'glass', x:165, y:158 }, { p:'bottle', x:215, y:158 }
  ]},
  alt:'Trên bàn có một cái ly và một cái chai đặt cạnh nhau.',
  opts:[
    { t:'Le verre est à côté de la bouteille.', ok:true },
    { t:'Le verre est derrière la bouteille.', why:'derrière là phía sau. Hai vật đứng cùng một hàng, cạnh nhau.', trap:'à côté / derrière' },
    { t:'Le verre est à côté de la table.', why:'Câu này chỉ đổi từ cuối. Cái ly đứng TRÊN mặt bàn chứ không ở bên cạnh cái bàn.', trap:'đúng vật, sai mốc' },
    { t:'Les verres sont à côté de la bouteille.', why:'Chỉ có MỘT cái ly. Phải bắt le với les và est với sont.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le verre', r:'vɛʁ', vi:'cái ly' }, { w:'la bouteille', r:'bu.tɛj', vi:'cái chai' },
    { w:'à côté de', r:'a ko.te də', vi:'bên cạnh' }, { w:'derrière', r:'dɛ.ʁjɛʁ', vi:'phía sau' }
  ],
  gram:[{ p:'verre · vers · vert · vert', vi:'Bốn từ này đọc y hệt nhau — cái ly, về hướng, màu xanh lá. Nghe thì phải dựa vào cả câu, không dựa vào từ đơn lẻ. Vì thế bài tập này không bao giờ lấy chúng làm hai đáp án.',
    ex:['un verre vert', 'một cái ly màu xanh'] }] },

{ id:'fr-25', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:130, y:220 }, { p:'coat', x:290, y:180 }, { p:'hanger', x:290, y:150 }
  ]},
  alt:'Cái tủ bên trái, cái áo khoác treo trên móc ở bên phải.',
  opts:[
    { t:'Le manteau est accroché au mur.', ok:true },
    { t:'Le manteau est dans l’armoire.', why:'dans l’armoire là ở trong tủ. Cái áo đang treo bên ngoài, trên tường.', trap:'trong / ngoài' },
    { t:'Le manteau est accroché à l’armoire.', why:'Câu này chỉ đổi mốc: cái áo treo trên TƯỜNG, không treo vào tủ.', trap:'đúng vật, sai mốc' },
    { t:'Les manteaux sont accrochés au mur.', why:'Chỉ có MỘT cái áo. Chữ -x cuối manteaux không đọc, phải bắt le với les.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le manteau', r:'mɑ̃.to', vi:'áo khoác' }, { w:'l’armoire', r:'aʁ.mwaʁ', vi:'cái tủ' },
    { w:'accroché', r:'a.kʁɔ.ʃe', vi:'được treo' },
    { w:'le mur', r:'myʁ', vi:'bức tường' }
  ],
  gram:[{ p:'au = à + le', vi:'à gặp le thành au, gặp les thành aux: au mur, aux murs. Cả au và aux đọc giống nhau, nên số nhiều lại phải đoán từ danh từ đi sau.',
    ex:['au mur, à la porte, aux fenêtres', 'trên tường, ở cửa, ở các cửa sổ'] }] }

  );
})();
