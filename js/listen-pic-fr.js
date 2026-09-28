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
,

/* ========== ĐỒ VẬT TRONG NHÀ ========== */
{ id:'fr-26', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'fridge', x:130, y:220 }, { p:'stove', x:250, y:220 }, { p:'sink', x:340, y:220 }
  ]},
  alt:'Trong bếp có tủ lạnh, bếp nấu và bồn rửa xếp thành một hàng.',
  opts:[
    { t:'Le frigo est à gauche de la cuisinière.', ok:true },
    { t:'Le frigo est à droite de la cuisinière.', why:'à gauche là bên trái, à droite là bên phải. Tủ lạnh đứng bên TRÁI bếp nấu.', trap:'trái / phải' },
    { t:'Le frigo est à gauche de l’évier.', why:'Cái đứng ngay bên phải tủ lạnh là bếp nấu, còn bồn rửa thì ở xa hơn.', trap:'đúng vật, sai mốc' },
    { t:'Les frigos sont à gauche de la cuisinière.', why:'Chỉ có MỘT tủ lạnh. Chữ -s cuối frigos không đọc, phải bắt le với les.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le frigo', r:'fʁi.ɡo', vi:'tủ lạnh' }, { w:'la cuisinière', r:'kɥi.zi.njɛʁ', vi:'bếp nấu' },
    { w:'l’évier', r:'e.vje', vi:'bồn rửa' }, { w:'à gauche', r:'a ɡoʃ', vi:'bên trái' }
  ],
  gram:[{ p:'à gauche de · à droite de', vi:'Hai cụm này luôn kết thúc bằng de, và de gặp le thành du: à gauche du lit, à droite de la porte. Nghe được du hay de la là biết giống của vật mốc.',
    ex:['à droite du frigo', 'bên phải tủ lạnh'] }] },

{ id:'fr-27', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:140 }, { p:'bowl', x:165, y:158 }, { p:'plate', x:220, y:158 }
  ]},
  alt:'Trên bàn có một cái bát và một cái đĩa đặt cạnh nhau.',
  opts:[
    { t:'Le bol est à gauche de l’assiette.', ok:true },
    { t:'Le bol est à droite de l’assiette.', why:'Cái bát nằm bên TRÁI cái đĩa.', trap:'trái / phải' },
    { t:'Le bol est dans l’assiette.', why:'Hai vật đặt cạnh nhau trên mặt bàn, không cái nào ở trong cái nào.', trap:'à côté / dans' },
    { t:'L’assiette est à gauche du bol.', why:'Câu này đảo ngược hai vật.', trap:'đảo vai' }
  ],
  keys:[
    { w:'le bol', r:'bɔl', vi:'cái bát' }, { w:'l’assiette', r:'a.sjɛt', vi:'cái đĩa' },
    { w:'à droite', r:'a dʁwat', vi:'bên phải' }, { w:'à gauche', r:'a ɡoʃ', vi:'bên trái' }
  ],
  gram:[{ p:'le bol nhưng l’assiette', vi:'bol là giống đực, assiette là giống cái. Mạo từ l’ giấu mất giống, nên phải nghe câu có de: à gauche DE L’assiette không cho biết, nhưng cette assiette thì cho biết.',
    ex:['un bol, une assiette', 'một cái bát, một cái đĩa'] }] },

{ id:'fr-28', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bed', x:160, y:220 }, { p:'sleeper', x:160, y:186 },
    { p:'window', x:300, y:34, view:'night' }
  ]},
  alt:'Một người đang ngủ trên giường, ngoài cửa sổ là trời đêm có trăng.',
  opts:[
    { t:'Elle dort parce qu’il fait nuit.', ok:true },
    { t:'Elle dort parce qu’il fait jour.', why:'il fait jour là ban ngày. Ngoài cửa sổ có mặt trăng.', trap:'ngày / đêm' },
    { t:'Elle se lève parce qu’il fait nuit.', why:'se lever là thức dậy. Người này vẫn đang nằm, mắt nhắm.', trap:'ngủ / dậy' },
    { t:'Elle dormait parce qu’il faisait nuit.', why:'dormait và faisait là thời quá khứ chưa hoàn thành. Tranh mô tả việc đang xảy ra lúc này.', trap:'hiện tại / quá khứ' }
  ],
  keys:[
    { w:'dormir', r:'dɔʁ.miʁ', vi:'ngủ' }, { w:'il fait nuit', r:'il fɛ nɥi', vi:'trời tối' },
    { w:'se lever', r:'sə lə.ve', vi:'thức dậy' }, { w:'parce que', r:'paʁs kə', vi:'bởi vì' }
  ],
  gram:[{ p:'parce que → parce qu’ + nguyên âm', vi:'que rút thành qu’ khi từ sau bắt đầu bằng nguyên âm: parce qu’il, parce qu’elle. Nghe dính liền thành một tiếng nên dễ tưởng là một từ khác.',
    ex:['parce qu’il pleut', 'bởi vì trời mưa'] }] },

{ id:'fr-29', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:130 }, { p:'phone', x:180, y:158 },
    { p:'sofa', x:310, y:220 }
  ]},
  alt:'Cái điện thoại nằm trên bàn, bên phải là ghế sofa.',
  opts:[
    { t:'Le téléphone est sur la table.', ok:true },
    { t:'Le téléphone est sur le canapé.', why:'Ghế sofa có thật nhưng điện thoại nằm trên bàn.', trap:'đúng vật, sai mốc' },
    { t:'Le téléphone est sous la table.', why:'Điện thoại nằm trên mặt bàn.', trap:'sur / sous' },
    { t:'Les téléphones sont sur la table.', why:'Chỉ có MỘT cái. Phải bắt le với les và est với sont.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le téléphone', r:'te.le.fɔn', vi:'điện thoại' }, { w:'le canapé', r:'ka.na.pe', vi:'ghế sofa' },
    { w:'sur', r:'syʁ', vi:'trên' }, { w:'sous', r:'su', vi:'dưới' }
  ],
  gram:[{ p:'est và sont', vi:'Với số ít thì est đọc là «ê», với số nhiều thì sont đọc là «sôn». Đây là một trong số ít chỗ mà tiếng Pháp cho nghe được số rõ ràng.',
    ex:['Il est là. Ils sont là.', 'Anh ấy ở đó. Họ ở đó.'] }] },

{ id:'fr-30', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:140 }, { p:'laptop', x:190, y:158 },
    { p:'chair', x:300, y:220 }
  ]},
  alt:'Cái máy tính xách tay mở trên bàn, bên phải có một cái ghế trống.',
  opts:[
    { t:'Il n’y a personne devant l’ordinateur.', ok:true },
    { t:'Il n’y a rien devant l’ordinateur.', why:'rien là không có VẬT gì, personne là không có AI. Câu đúng nói về người.', trap:'rien / personne' },
    { t:'Il y a quelqu’un devant l’ordinateur.', why:'Cái ghế trong tranh để trống.', trap:'có / không có' },
    { t:'Il n’y a personne derrière l’ordinateur.', why:'Cái ghế đặt ở PHÍA TRƯỚC máy tính, nhìn từ phía người ngồi.', trap:'devant / derrière' }
  ],
  keys:[
    { w:'l’ordinateur', r:'ɔʁ.di.na.tœʁ', vi:'máy tính' },
    { w:'personne', r:'pɛʁ.sɔn', vi:'không ai' }, { w:'rien', r:'ʁjɛ̃', vi:'không gì' },
    { w:'quelqu’un', r:'kɛl.kœ̃', vi:'ai đó' }
  ],
  gram:[{ p:'personne có hai nghĩa', vi:'une personne là một con người. Nhưng ne … personne lại là «không ai cả». Cùng một chữ, nghĩa ngược nhau, phải nhìn có «ne» hay không.',
    ex:['Il n’y a personne. Une personne attend.', 'Không có ai. Có một người đang đợi.'] }] },

/* ========== NGOÀI ĐƯỜNG ========== */
{ id:'fr-31', lang:'fr', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'car', x:130, y:220 }, { p:'car', x:250, y:220 }, { p:'tree', x:340, y:220 }
  ]},
  alt:'Hai chiếc ô tô đỗ cạnh nhau trên phố, bên phải có một cái cây.',
  opts:[
    { t:'Il y a deux voitures dans la rue.', ok:true },
    { t:'Il y a douze voitures dans la rue.', why:'deux là hai, douze là mười hai. Hai từ đều bắt đầu bằng d-.', trap:'hai / mười hai' },
    { t:'Il y a deux voitures dans le jardin.', why:'Cảnh trong tranh là mặt phố, không phải khu vườn.', trap:'bối cảnh' },
    { t:'Il n’y a pas de voiture dans la rue.', why:'Trong tranh rõ ràng có xe.', trap:'có / không có' }
  ],
  keys:[
    { w:'deux', r:'dø', vi:'hai' }, { w:'douze', r:'duz', vi:'mười hai' },
    { w:'la rue', r:'ʁy', vi:'con phố' }, { w:'la voiture', r:'vwa.tyʁ', vi:'xe ô tô' }
  ],
  gram:[{ p:'deux · douze · dix', vi:'Ba số này đều bắt đầu bằng d nhưng nguyên âm khác hẳn: «đơ», «đuz», «đis». Nghe nguyên âm là phân biệt được ngay.',
    ex:['deux, douze, dix', 'hai, mười hai, mười'] }] },

{ id:'fr-32', lang:'fr', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:150, y:220, pose:'wave' }, { p:'person', x:260, y:220, pose:'walk', hair:'long' }
  ]},
  alt:'Một người đứng giơ tay vẫy, người kia đang bước đi.',
  opts:[
    { t:'Il lui dit au revoir.', ok:true },
    { t:'Il lui dit bonjour.', why:'Người kia đang bước đi xa dần, nên đây là lời tạm biệt.', trap:'chào / tạm biệt' },
    { t:'Elle lui dit au revoir.', why:'Người giơ tay vẫy là nhân vật bên trái, không có tóc dài.', trap:'il / elle' },
    { t:'Il leur dit au revoir.', why:'lui là cho MỘT người, leur là cho NHIỀU người. Chỉ có một người đang đi.', trap:'lui / leur' }
  ],
  keys:[
    { w:'au revoir', r:'o ʁə.vwaʁ', vi:'tạm biệt' }, { w:'bonjour', r:'bɔ̃.ʒuʁ', vi:'xin chào' },
    { w:'lui', r:'lɥi', vi:'cho anh/chị ấy' }, { w:'leur', r:'lœʁ', vi:'cho họ' }
  ],
  gram:[{ p:'lui và leur', vi:'Hai đại từ này thay cho «à + người»: je parle à Marie → je lui parle. Số nhiều thì dùng leur. Cả hai đều đứng TRƯỚC động từ, khác hẳn tiếng Việt.',
    ex:['Je lui parle. Je leur parle.', 'Tôi nói với anh ấy. Tôi nói với họ.'] }] },

{ id:'fr-33', lang:'fr', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'bus', x:180, y:220 }, { p:'person', x:310, y:220, pose:'stand' }
  ]},
  alt:'Chiếc xe buýt bên trái, một người đứng đợi bên phải.',
  opts:[
    { t:'Elle attend le bus.', ok:true },
    { t:'Elle attend le train.', why:'un train là tàu hoả. Phương tiện trong tranh có bánh và cửa bên hông.', trap:'vật khác' },
    { t:'Elle prend le bus.', why:'prendre le bus là lên xe. Người này còn đứng ngoài.', trap:'đợi / lên xe' },
    { t:'Elles attendent le bus.', why:'Chỉ có MỘT người. attend và attendent nghe khác nhau ở âm cuối «đ».', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'attendre', r:'a.tɑ̃dʁ', vi:'đợi' }, { w:'le bus', r:'bys', vi:'xe buýt' },
    { w:'prendre', r:'pʁɑ̃dʁ', vi:'lấy, đi (phương tiện)' }, { w:'le train', r:'tʁɛ̃', vi:'tàu hoả' }
  ],
  gram:[{ p:'elle attend · elles attendent', vi:'Nhóm động từ kết thúc bằng -dre có phụ âm cuối bật ra ở số nhiều: attend đọc «a-tăng», attendent đọc «a-tăng-đ». Nghe được chữ «đ» là biết số nhiều.',
    ex:['Elle vend. Elles vendent.', 'Chị ấy bán. Họ bán.'] }] },

{ id:'fr-34', lang:'fr', lv:'a2', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'person', x:140, y:220, pose:'run' }, { p:'bicycle', x:290, y:220 }
  ]},
  alt:'Một người đang chạy, chiếc xe đạp dựng ở bên phải.',
  opts:[
    { t:'Il court vers son vélo.', ok:true },
    { t:'Il va à vélo.', why:'aller à vélo là đi bằng xe đạp. Người này vẫn đang chạy bộ, chưa lên xe.', trap:'chạy bộ / đi xe' },
    { t:'Il court vers sa voiture.', why:'Vật bên phải có hai bánh và bàn đạp, đó là xe đạp.', trap:'vật khác' },
    { t:'Il a couru vers son vélo.', why:'a couru là đã chạy xong. Trong tranh việc đang diễn ra.', trap:'đang làm / đã làm' }
  ],
  keys:[
    { w:'courir', r:'ku.ʁiʁ', vi:'chạy' }, { w:'le vélo', r:'ve.lo', vi:'xe đạp' },
    { w:'vers', r:'vɛʁ', vi:'về phía' }, { w:'son / sa', r:'sɔ̃ / sa', vi:'của anh ấy' }
  ],
  gram:[{ p:'son vélo nhưng sa voiture', vi:'son và sa chọn theo GIỐNG CỦA VẬT, không theo giới tính người sở hữu. son vélo dù chủ là nữ, sa voiture dù chủ là nam. Đây là chỗ người Việt hay nhầm nhất.',
    ex:['son vélo, sa voiture', 'xe đạp của anh/chị ấy, ô tô của anh/chị ấy'] }] },

{ id:'fr-35', lang:'fr', lv:'a1', cat:'Đường phố',
  scene:{ bg:'street', items:[
    { p:'tree', x:110, y:220 }, { p:'tree', x:200, y:220 }, { p:'tree', x:290, y:220 }
  ]},
  alt:'Ba cái cây trồng thành hàng dọc phố.',
  opts:[
    { t:'Il y a trois arbres dans la rue.', ok:true },
    { t:'Il y a treize arbres dans la rue.', why:'trois là ba, treize là mười ba.', trap:'ba / mười ba' },
    { t:'Il y a trois fleurs dans la rue.', why:'une fleur là bông hoa. Trong tranh là cây có thân và tán lá.', trap:'vật khác' },
    { t:'Il y a trois arbres dans le jardin.', why:'Cảnh trong tranh là mặt phố.', trap:'bối cảnh' }
  ],
  keys:[
    { w:'l’arbre', r:'aʁbʁ', vi:'cái cây' }, { w:'la fleur', r:'flœʁ', vi:'bông hoa' },
    { w:'trois', r:'tʁwa', vi:'ba' }, { w:'le jardin', r:'ʒaʁ.dɛ̃', vi:'khu vườn' }
  ],
  gram:[{ p:'liaison sau trois', vi:'trois arbres đọc là «tʁwa-zaʁbʁ» — chữ -s cuối trois bật ra thành «z» rồi nối sang. Cũng vậy với deux arbres («đơ-zaʁbʁ») và six arbres.',
    ex:['trois arbres, deux amis', 'ba cái cây, hai người bạn'] }] },

/* ========== LỚP HỌC ========== */
{ id:'fr-36', lang:'fr', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:160, y:220 }, { p:'book', x:160, y:162 }, { p:'bag', x:280, y:220 }
  ]},
  alt:'Quyển sách nằm trên bàn học, cái cặp để dưới sàn bên phải.',
  opts:[
    { t:'Le livre est sur le bureau, le sac est par terre.', ok:true },
    { t:'Le livre est par terre, le sac est sur le bureau.', why:'Câu này đảo ngược hai vật.', trap:'đảo vai' },
    { t:'Le livre est sous le bureau, le sac est par terre.', why:'Quyển sách nằm TRÊN mặt bàn.', trap:'sur / sous' },
    { t:'Les livres sont sur le bureau, le sac est par terre.', why:'Chỉ có MỘT quyển sách.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'par terre', r:'paʁ tɛʁ', vi:'dưới sàn' }, { w:'le sac', r:'sak', vi:'cái cặp, túi' },
    { w:'le bureau', r:'by.ʁo', vi:'bàn học' }, { w:'le livre', r:'livʁ', vi:'quyển sách' }
  ],
  gram:[{ p:'par terre không có mạo từ', vi:'Một số cụm chỉ nơi chốn không dùng mạo từ: par terre, à pied, en classe, à la maison thì lại có. Đây là cụm cố định, phải học nguyên khối.',
    ex:['Le sac est par terre.', 'Cái cặp để dưới sàn.'] }] },

{ id:'fr-37', lang:'fr', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'person', x:120, y:220, pose:'point' }, { p:'desk', x:260, y:220 }, { p:'person', x:260, y:216, pose:'write' }
  ]},
  alt:'Một người đứng chỉ tay về phía bảng, người kia ngồi viết ở bàn.',
  opts:[
    { t:'Le professeur explique, l’élève écrit.', ok:true },
    { t:'Le professeur écrit, l’élève explique.', why:'Câu này đảo ngược hai vai.', trap:'đảo vai' },
    { t:'Le professeur explique, l’élève lit.', why:'lire là đọc. Người ngồi ở bàn đang cầm bút viết.', trap:'đọc / viết' },
    { t:'Les professeurs expliquent, l’élève écrit.', why:'Chỉ có MỘT người đứng giảng. explique và expliquent đọc giống nhau, nên phải bắt le với les.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le professeur', r:'pʁɔ.fɛ.sœʁ', vi:'giáo viên' }, { w:'l’élève', r:'e.lɛv', vi:'học sinh' },
    { w:'expliquer', r:'ɛks.pli.ke', vi:'giảng giải' }, { w:'écrire', r:'e.kʁiʁ', vi:'viết' }
  ],
  gram:[{ p:'explique và expliquent đọc y hệt', vi:'Với động từ nhóm -er, cả sáu dạng chia số ít và ngôi thứ ba số nhiều đều đọc giống nhau. Số chỉ nghe được ở MẠO TỪ hoặc đại từ đi trước.',
    ex:['Il parle. Ils parlent.', 'Anh ấy nói. Họ nói.'] }] },

{ id:'fr-38', lang:'fr', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:150, y:220 }, { p:'desk', x:280, y:220 }
  ]},
  alt:'Hai cái bàn học đứng cách nhau trong lớp, cả hai đều trống.',
  opts:[
    { t:'Les deux bureaux sont vides.', ok:true },
    { t:'Les deux bureaux sont pleins.', why:'plein là đầy, vide là trống. Trên cả hai bàn không có gì.', trap:'đầy / trống' },
    { t:'Le bureau est vide.', why:'Trong tranh có HAI cái bàn.', trap:'số ít / số nhiều' },
    { t:'Les deux chaises sont vides.', why:'Trong tranh là hai cái bàn, không phải ghế.', trap:'vật khác' }
  ],
  keys:[
    { w:'vide', r:'vid', vi:'trống' }, { w:'plein', r:'plɛ̃', vi:'đầy' },
    { w:'le bureau', r:'by.ʁo', vi:'cái bàn' }, { w:'deux', r:'dø', vi:'hai' }
  ],
  gram:[{ p:'vide không đổi theo giống', vi:'Tính từ đã kết thúc bằng -e thì dạng giống cái giữ nguyên: vide, rouge, facile, jeune. Chỉ thêm -s ở số nhiều, mà -s thì câm.',
    ex:['un livre rouge, une chaise rouge', 'quyển sách đỏ, cái ghế đỏ'] }] },

{ id:'fr-39', lang:'fr', lv:'a2', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'desk', x:170, y:220 }, { p:'laptop', x:170, y:162 }, { p:'person', x:290, y:220, pose:'stand' }
  ]},
  alt:'Máy tính xách tay mở trên bàn, một người đứng bên cạnh.',
  opts:[
    { t:'L’ordinateur est allumé.', ok:true },
    { t:'L’ordinateur est éteint.', why:'éteint là đã tắt. Màn hình trong tranh đang mở và sáng.', trap:'bật / tắt' },
    { t:'L’ordinateur est allumée.', why:'ordinateur là giống đực nên phải là allumé, không thêm -e. Chữ -e đó không đọc nhưng viết sai vẫn là sai.', trap:'hợp giống' },
    { t:'Les ordinateurs sont allumés.', why:'Chỉ có MỘT máy. Nghe liaison «lê-zoʁ-đi-na-tơʁ» là biết số nhiều.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'allumé', r:'a.ly.me', vi:'đang bật' }, { w:'éteint', r:'e.tɛ̃', vi:'đã tắt' },
    { w:'l’ordinateur', r:'ɔʁ.di.na.tœʁ', vi:'máy tính' }, { w:'l’écran', r:'e.kʁɑ̃', vi:'màn hình' }
  ],
  gram:[{ p:'allumé và éteint', vi:'Cặp này dùng cho đèn, máy móc, bếp: la lampe est allumée, la télé est éteinte. Chú ý éteinte (giống cái) nghe rõ chữ «t» ở cuối, còn allumée thì không nghe khác allumé.',
    ex:['La télé est éteinte.', 'Cái tivi đã tắt.'] }] },

{ id:'fr-40', lang:'fr', lv:'a1', cat:'Học tập',
  scene:{ bg:'classroom', items:[
    { p:'clock', x:320, y:70, time:'8:00' }, { p:'desk', x:150, y:220 }, { p:'person', x:150, y:216, pose:'sit' }
  ]},
  alt:'Đồng hồ chỉ đúng 8 giờ, một người đang ngồi ở bàn học.',
  opts:[
    { t:'Le cours commence à huit heures.', ok:true },
    { t:'Le cours commence à deux heures.', why:'huit là tám, deux là hai. Kim ngắn đang ở số 8.', trap:'số giờ' },
    { t:'Le cours finit à huit heures.', why:'finir là kết thúc, commencer là bắt đầu. Học sinh vừa mới ngồi vào bàn.', trap:'bắt đầu / kết thúc' },
    { t:'Les cours commencent à huit heures.', why:'Câu đúng nói về MỘT tiết. commence và commencent đọc giống nhau, phải bắt le với les.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le cours', r:'kuʁ', vi:'tiết học' }, { w:'commencer', r:'kɔ.mɑ̃.se', vi:'bắt đầu' },
    { w:'finir', r:'fi.niʁ', vi:'kết thúc' }, { w:'huit heures', r:'ɥi.tœʁ', vi:'tám giờ' }
  ],
  gram:[{ p:'huit heures đọc dính thành «uy-tơʁ»', vi:'Chữ -t cuối huit vốn câm khi đứng một mình, nhưng trước heures thì bật ra và nối. Cũng vậy: six heures («si-zơʁ»), dix heures («đi-zơʁ»).',
    ex:['Il est six heures.', 'Bây giờ là sáu giờ.'] }] },

/* ========== THỜI TIẾT VÀ THỜI GIAN ========== */
{ id:'fr-41', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'sun', x:320, y:60 }, { p:'person', x:160, y:220, pose:'walk' }
  ]},
  alt:'Trời nắng, một người đi bộ trên phố.',
  opts:[
    { t:'Il fait beau aujourd’hui.', ok:true },
    { t:'Il fait mauvais aujourd’hui.', why:'mauvais là xấu trời. Trong tranh mặt trời đang chiếu.', trap:'đẹp / xấu trời' },
    { t:'Il fait froid aujourd’hui.', why:'froid là lạnh. Người trong tranh không mặc áo khoác dày.', trap:'nóng / lạnh' },
    { t:'Il faisait beau hier.', why:'faisait và hier là quá khứ. Tranh nói về hôm nay.', trap:'hiện tại / quá khứ' }
  ],
  keys:[
    { w:'il fait beau', r:'il fɛ bo', vi:'trời đẹp' }, { w:'il fait froid', r:'il fɛ fʁwa', vi:'trời lạnh' },
    { w:'aujourd’hui', r:'o.ʒuʁ.dɥi', vi:'hôm nay' }, { w:'hier', r:'jɛʁ', vi:'hôm qua' }
  ],
  gram:[{ p:'thời tiết dùng «il fait»', vi:'il fait beau, il fait chaud, il fait froid, il fait du vent. Nhưng mưa và tuyết thì có động từ riêng: il pleut, il neige. Không nói «il fait pluie».',
    ex:['Il fait chaud et il pleut.', 'Trời nóng và đang mưa.'] }] },

{ id:'fr-42', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'street', items:[
    { p:'snowfall', x:200, y:24, n:8 }, { p:'person', x:150, y:220, pose:'walk' }, { p:'tree', x:320, y:220 }
  ]},
  alt:'Tuyết rơi, một người đi bộ trên phố, bên phải có một cái cây.',
  opts:[
    { t:'En hiver, il neige souvent ici.', ok:true },
    { t:'En été, il neige souvent ici.', why:'l’été là mùa hè. Trong tranh có tuyết đang rơi.', trap:'mùa' },
    { t:'En hiver, il pleut souvent ici.', why:'pleuvoir là mưa. Những chấm tròn rơi trong tranh là tuyết.', trap:'mưa / tuyết' },
    { t:'En hiver, il neigeait souvent ici.', why:'neigeait là quá khứ chưa hoàn thành, nói về thói quen ngày xưa.', trap:'hiện tại / quá khứ' }
  ],
  keys:[
    { w:'l’hiver', r:'i.vɛʁ', vi:'mùa đông' }, { w:'l’été', r:'e.te', vi:'mùa hè' },
    { w:'neiger', r:'nɛ.ʒe', vi:'có tuyết' }, { w:'souvent', r:'su.vɑ̃', vi:'thường xuyên' }
  ],
  gram:[{ p:'en hiver nhưng au printemps', vi:'Ba mùa dùng en: en hiver, en été, en automne. Riêng mùa xuân dùng au: au printemps. Lý do là printemps bắt đầu bằng phụ âm, ba mùa kia bắt đầu bằng nguyên âm.',
    ex:['au printemps, en été', 'vào mùa xuân, vào mùa hè'] }] },

{ id:'fr-43', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'calendar', x:290, y:60, text:'12' }, { p:'table', x:160, y:220, w:120 }
  ]},
  alt:'Tờ lịch treo tường chỉ ngày 12, bên trái là cái bàn.',
  opts:[
    { t:'Nous sommes le douze.', ok:true },
    { t:'Nous sommes le deux.', why:'douze là mười hai, deux là hai. Trên lịch ghi số 12.', trap:'hai / mười hai' },
    { t:'Il est douze heures.', why:'Câu này nói về GIỜ, không phải ngày. Tranh là tờ lịch, không phải đồng hồ.', trap:'giờ / ngày' },
    { t:'Nous serons le douze.', why:'serons là thời tương lai. Tranh nói về hôm nay.', trap:'hiện tại / tương lai' }
  ],
  keys:[
    { w:'le calendrier', r:'ka.lɑ̃.dʁi.je', vi:'tờ lịch' }, { w:'douze', r:'duz', vi:'mười hai' },
    { w:'nous sommes le…', r:'nu sɔm lə', vi:'hôm nay là ngày…' }, { w:'le jour', r:'ʒuʁ', vi:'ngày' }
  ],
  gram:[{ p:'nói ngày tháng', vi:'Tiếng Pháp nói «nous sommes le 12» hoặc «on est le 12». Ngày mùng 1 là biệt lệ duy nhất dùng số thứ tự: le premier mai, chứ không phải «le un mai».',
    ex:['le premier janvier, le deux janvier', 'mùng 1 tháng Giêng, ngày 2 tháng Giêng'] }] },

{ id:'fr-44', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'suitcase', x:170, y:220 }, { p:'coat', x:300, y:180 }, { p:'hanger', x:300, y:150 }
  ]},
  alt:'Cái vali để dưới sàn, áo khoác treo trên móc bên phải.',
  opts:[
    { t:'Elle va partir en voyage.', ok:true },
    { t:'Elle est partie en voyage.', why:'est partie là đã đi rồi. Vali vẫn còn ở nhà.', trap:'sắp đi / đã đi' },
    { t:'Elle a partie en voyage.', why:'partir đi với être, không đi với avoir. Đây là lỗi rất hay gặp.', trap:'être / avoir' },
    { t:'Il va partir en voyage.', why:'Câu đúng dùng elle.', trap:'il / elle' }
  ],
  keys:[
    { w:'partir', r:'paʁ.tiʁ', vi:'ra đi, khởi hành' }, { w:'le voyage', r:'vwa.jaʒ', vi:'chuyến đi' },
    { w:'la valise', r:'va.liz', vi:'cái vali' }, { w:'le manteau', r:'mɑ̃.to', vi:'áo khoác' }
  ],
  gram:[{ p:'nhóm động từ đi với être', vi:'aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, devenir. Khi đi với être, quá khứ phân từ hợp giống: elle est partie, ils sont partis.',
    ex:['Elle est arrivée. Il est arrivé.', 'Cô ấy đã đến. Anh ấy đã đến.'] }] },

{ id:'fr-45', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'cake', x:165, y:158 }, { p:'cup', x:225, y:158 }
  ]},
  alt:'Trên bàn có một miếng bánh ngọt và một cái cốc.',
  opts:[
    { t:'Il y a un gâteau et une tasse sur la table.', ok:true },
    { t:'Il y a un gâteau et un verre sur la table.', why:'une tasse là cái cốc có tay cầm, un verre là ly thuỷ tinh.', trap:'vật khác' },
    { t:'Il y a une gâteau et une tasse sur la table.', why:'gâteau là giống đực nên phải là UN gâteau.', trap:'giống' },
    { t:'Il y a des gâteaux et une tasse sur la table.', why:'Chỉ có MỘT miếng bánh. Nghe un với des là phân biệt được.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'le gâteau', r:'ɡɑ.to', vi:'bánh ngọt' }, { w:'la tasse', r:'tas', vi:'cái cốc' },
    { w:'le verre', r:'vɛʁ', vi:'cái ly' }, { w:'et', r:'e', vi:'và' }
  ],
  gram:[{ p:'et không bao giờ có liaison', vi:'Dù từ sau bắt đầu bằng nguyên âm, chữ -t của et KHÔNG bao giờ nối: «un gâteau et / une tasse». Đây là ngoại lệ tuyệt đối, và cũng là cách phân biệt et (và) với est (thì, là).',
    ex:['Il est ici et il attend.', 'Anh ấy ở đây và đang đợi.'] }] },

/* ========== TRẠNG THÁI VÀ SỐ LƯỢNG ========== */
{ id:'fr-46', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'bin', x:150, y:220 }, { p:'box', x:280, y:220 }
  ]},
  alt:'Thùng rác bên trái, cái hộp giấy bên phải, cả hai đều đặt dưới sàn.',
  opts:[
    { t:'La poubelle est à gauche de la boîte.', ok:true },
    { t:'La poubelle est à droite de la boîte.', why:'Thùng rác đứng bên TRÁI.', trap:'trái / phải' },
    { t:'La poubelle est dans la boîte.', why:'Hai vật đứng riêng trên sàn.', trap:'bên cạnh / bên trong' },
    { t:'La boîte est à gauche de la poubelle.', why:'Câu này đảo ngược hai vật.', trap:'đảo vai' }
  ],
  keys:[
    { w:'la poubelle', r:'pu.bɛl', vi:'thùng rác' }, { w:'la boîte', r:'bwat', vi:'cái hộp' },
    { w:'à gauche de', r:'a ɡoʃ də', vi:'bên trái của' }, { w:'dans', r:'dɑ̃', vi:'trong' }
  ],
  gram:[{ p:'la boîte có dấu mũ', vi:'Dấu mũ trên î thường đánh dấu chỗ từng có chữ s bị mất: boîte từ boiste, hôpital từ hospital, forêt từ forest. Biết mẹo này thì đoán được nghĩa nhiều từ qua tiếng Anh.',
    ex:['hôpital, forêt, île', 'bệnh viện, khu rừng, hòn đảo'] }] },

{ id:'fr-47', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:190, y:220, w:150 }, { p:'apple', x:160, y:158 }, { p:'apple', x:195, y:158 },
    { p:'banana', x:235, y:158 }
  ]},
  alt:'Trên bàn có hai quả táo và một quả chuối.',
  opts:[
    { t:'Il y a deux pommes et une banane.', ok:true },
    { t:'Il y a une pomme et deux bananes.', why:'Câu này đảo ngược số lượng: có hai quả táo và một quả chuối.', trap:'đảo số lượng' },
    { t:'Il y a douze pommes et une banane.', why:'deux là hai, douze là mười hai.', trap:'hai / mười hai' },
    { t:'Il y a deux poires et une banane.', why:'une poire là quả lê. Quả trong tranh tròn và có cuống ngắn.', trap:'vật khác' }
  ],
  keys:[
    { w:'la pomme', r:'pɔm', vi:'quả táo' }, { w:'la banane', r:'ba.nan', vi:'quả chuối' },
    { w:'la poire', r:'pwaʁ', vi:'quả lê' }, { w:'deux', r:'dø', vi:'hai' }
  ],
  gram:[{ p:'pomme · poire · pomme de terre', vi:'pomme là táo, poire là lê, còn pomme de terre («táo của đất») lại là khoai tây. Nghe thấy «pomme» chưa đủ, phải nghe hết cả cụm.',
    ex:['des pommes de terre', 'mấy củ khoai tây'] }] },

{ id:'fr-48', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'sofa', x:180, y:220 }, { p:'person', x:180, y:216, pose:'phone' }, { p:'tv', x:320, y:220 }
  ]},
  alt:'Một người ngồi trên sofa nghe điện thoại, tivi tắt ở bên phải.',
  opts:[
    { t:'Elle est au téléphone.', ok:true },
    { t:'Elle regarde la télé.', why:'Cái tivi trong tranh đang tắt, và người này áp điện thoại vào tai.', trap:'đúng vật, sai việc' },
    { t:'Elle était au téléphone.', why:'était là quá khứ. Việc đang diễn ra.', trap:'hiện tại / quá khứ' },
    { t:'Elles sont au téléphone.', why:'Chỉ có MỘT người. est và sont nghe khác hẳn nhau.', trap:'số ít / số nhiều' }
  ],
  keys:[
    { w:'être au téléphone', r:'ɛtʁ o te.le.fɔn', vi:'đang nghe điện thoại' },
    { w:'regarder', r:'ʁə.ɡaʁ.de', vi:'xem, nhìn' }, { w:'la télé', r:'te.le', vi:'cái tivi' },
    { w:'était', r:'e.tɛ', vi:'đã là (quá khứ)' }
  ],
  gram:[{ p:'est và était', vi:'est là hiện tại («ê»), était là quá khứ chưa hoàn thành («ê-tè»). Chỉ khác một âm tiết nhưng đổi hẳn thời điểm của câu chuyện.',
    ex:['Il est là. Il était là.', 'Anh ấy ở đây. Anh ấy đã ở đây.'] }] },

{ id:'fr-49', lang:'fr', lv:'a1', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'cupboard', x:150, y:220 }, { p:'cat', x:270, y:220, pose:'sit' }, { p:'bowl', x:330, y:220 }
  ]},
  alt:'Con mèo ngồi giữa cái tủ và cái bát thức ăn.',
  opts:[
    { t:'Le chat est entre l’armoire et le bol.', ok:true },
    { t:'Le chat est dans l’armoire.', why:'Con mèo ngồi bên ngoài, trên sàn.', trap:'entre / dans' },
    { t:'Le chat est derrière le bol.', why:'Con mèo ngồi bên cạnh, cùng một hàng với cái bát.', trap:'entre / derrière' },
    { t:'Le chien est entre l’armoire et le bol.', why:'Con vật trong tranh có tai nhọn và đuôi cong — đó là con mèo.', trap:'chủ thể' }
  ],
  keys:[
    { w:'le chat', r:'ʃa', vi:'con mèo' }, { w:'l’armoire', r:'aʁ.mwaʁ', vi:'cái tủ' },
    { w:'le bol', r:'bɔl', vi:'cái bát' }, { w:'entre', r:'ɑ̃tʁ', vi:'giữa' }
  ],
  gram:[{ p:'entre A et B, không có mạo từ rút', vi:'Khác à và de, chữ entre không bao giờ rút với le: entre le chat et le chien. Không có dạng «entru» hay «entrau».',
    ex:['entre le lit et la fenêtre', 'giữa giường và cửa sổ'] }] },

{ id:'fr-50', lang:'fr', lv:'a2', cat:'Đời sống',
  scene:{ bg:'room', items:[
    { p:'table', x:180, y:220, w:140 }, { p:'glasses', x:180, y:158 },
    { p:'book', x:290, y:220 }
  ]},
  alt:'Cặp kính đặt trên bàn, quyển sách nằm dưới sàn bên phải.',
  opts:[
    { t:'Les lunettes sont sur la table.', ok:true },
    { t:'La lunette est sur la table.', why:'lunettes chỉ dùng ở số nhiều khi nói về cặp kính. Dạng số ít có nghĩa khác hẳn.', trap:'luôn số nhiều' },
    { t:'Les lunettes sont par terre.', why:'Quyển sách nằm dưới sàn, còn cặp kính thì trên bàn.', trap:'đảo vai' },
    { t:'Les lunettes sont sous la table.', why:'Cặp kính nằm TRÊN mặt bàn.', trap:'sur / sous' }
  ],
  keys:[
    { w:'les lunettes', r:'ly.nɛt', vi:'cặp kính (luôn số nhiều)' },
    { w:'par terre', r:'paʁ tɛʁ', vi:'dưới sàn' }, { w:'la table', r:'tabl', vi:'cái bàn' },
    { w:'le livre', r:'livʁ', vi:'quyển sách' }
  ],
  gram:[{ p:'từ chỉ dùng ở số nhiều', vi:'les lunettes (kính), les ciseaux (kéo), les vacances (kỳ nghỉ), les gens (người ta) — luôn đi số nhiều. Nghe thấy «les» mà vật chỉ có một cái thì phải nghĩ tới nhóm này.',
    ex:['Les vacances commencent.', 'Kỳ nghỉ bắt đầu.'] }] }
  );
})();
