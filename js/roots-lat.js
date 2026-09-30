/* ============================================================
   LangLab — GỐC TỪ CỦA TIẾNG PHÁP VÀ TIẾNG TÂY BAN NHA
   ------------------------------------------------------------
   Tiếng Trung có «cấu tạo từ»: mỗi chữ Hán là một viên gạch, biết
   chữ thì đoán được từ. Nhiều người tưởng hai tiếng chữ Latinh
   không có gì tương đương — thật ra có, và còn chặt hơn: gần như
   mọi từ dài đều tách được thành TIỀN TỐ + GỐC + HẬU TỐ, trong đó
   phần gốc hầu hết là một động từ hoặc danh từ La-tinh.

   Cái hay là cùng một gốc chạy xuyên cả ba thứ tiếng:

       La-tinh  scrībere  (viết)
       Pháp     écrire · écrit · décrire · inscription
       TBN      escribir · escrito · describir · inscripción
       Anh      script · describe · manuscript

   Học «scrib» một lần là mở được cả ba cột. Đó là lý do tệp này
   tồn tại: nó biến 2.000 từ rời rạc thành vài trăm họ từ.

   CÁCH LÀM: KHỚP CHỨ KHÔNG ĐOÁN.
   Bộ phân tích chỉ nhận một kết quả khi TOÀN BỘ từ được phủ kín
   bằng tiền tố + gốc + hậu tố có trong bảng này. Không phủ kín
   được thì trả về null và mục từ không hiện phần «cấu tạo từ».
   Thà không nói gì còn hơn bịa cho người học một gốc không có.

   Nguồn gốc ngoài La-tinh cũng được ghi, vì đó chính là chỗ người
   học hay vướng: những từ thông dụng nhất lại thường KHÔNG phải
   gốc La-tinh — «guerre/guerra» là tiếng German, «azúcar/sucre»
   là tiếng Ả Rập qua đường Andalucía.

   Nội dung do LangLab tự biên soạn.
   ============================================================ */

/* Ghi chú chính tả: mọi dạng dùng để KHỚP đều đã bỏ dấu phụ
   (écri → ecri), vì bộ phân tích chuẩn hoá từ trước khi so.
   Phần hiển thị thì lấy từ thật trong khoá học nên vẫn đủ dấu. */

const LAT_ROOTS = {

/* ---------------- TIỀN TỐ ----------------
   Đứng trước gốc, đổi hướng nghĩa. Một tiền tố thường có nhiều
   cách viết vì phụ âm đầu của gốc kéo nó biến dạng theo: in- + legal
   thành illégal, con- + rompre thành corrompre. Bảng này liệt kê
   đủ các biến thể đó để bộ phân tích không bị hụt. */
pre: {
  ad:   { vi:'hướng tới, thêm vào', la:'ad-', f:['a','ad','ac','af','ag','al','ap','ar','as','at'], note:'Chữ d nuốt theo phụ âm sau: ad+prochier → approcher.' },
  ab:   { vi:'rời khỏi, bỏ đi', la:'ab-', f:['ab','abs','av'] },
  ante: { vi:'trước', la:'ante-', f:['ante','anté','anti'] },
  bene: { vi:'tốt, lành', la:'bene-', f:['bene','béné','bien','ben'] },
  bi:   { vi:'hai', la:'bi-', f:['bi','bis','biz'] },
  circ: { vi:'vòng quanh', la:'circum-', f:['circon','circun','circum','circu'] },
  co:   { vi:'cùng nhau', la:'cum-', f:['co','col','com','con','cor','cons','conv'], note:'Tiền tố năng sản nhất của cả hai tiếng.' },
  contra:{ vi:'ngược lại, chống', la:'contra-', f:['contra','contre','contro'] },
  de:   { vi:'xuống, tách ra, làm ngược', la:'de-', f:['de','dé'] },
  dis:  { vi:'tách rời, phủ định', la:'dis-', f:['dis','di','des','dés','dif','dir'] },
  ex:   { vi:'ra khỏi, hết', la:'ex-', f:['ex','e','é','es','ef'], note:'Tiếng TBN thêm e- cho dễ đọc: ex-scribere → escribir.' },
  en:   { vi:'vào trong, làm cho thành', la:'in-', f:['en','em','in','im'] },
  inNeg:{ vi:'không, chưa (phủ định)', la:'in-', f:['in','im','il','ir','i'], note:'Trùng mặt chữ với in- «vào trong» — phải xét nghĩa mới phân biệt được: incorporer là đưa vào, incapable là không có khả năng.' },
  inter:{ vi:'giữa, qua lại', la:'inter-', f:['inter','entre','entr'] },
  intra:{ vi:'bên trong', la:'intra-', f:['intra','intro'] },
  mal:  { vi:'xấu, hỏng', la:'male-', f:['mal','mau','mé'] },
  mi:   { vi:'nửa', la:'medius', f:['mi','medi','media'] },
  multi:{ vi:'nhiều', la:'multi-', f:['multi','mult'] },
  ob:   { vi:'chắn trước, đối lại', la:'ob-', f:['ob','o','oc','of','op','os'] },
  per:  { vi:'xuyên suốt, hoàn toàn', la:'per-', f:['per','par','por'] },
  post: { vi:'sau', la:'post-', f:['post','pos','pós'] },
  pre:  { vi:'trước', la:'prae-', f:['pre','pré'] },
  pro:  { vi:'về phía trước, thay mặt', la:'pro-', f:['pro','pour','pur'] },
  re:   { vi:'lại, lần nữa, ngược về', la:'re-', f:['re','ré','r','red','res'] },
  retro:{ vi:'lùi về sau', la:'retro-', f:['retro','rétro'] },
  semi: { vi:'nửa', la:'semi-', f:['semi'] },
  sub:  { vi:'dưới, phụ', la:'sub-', f:['sub','sou','sous','su','suc','suf','sug','sup','sus','so'] },
  super:{ vi:'trên, vượt mức', la:'super-', f:['super','sur','sobre','supr','sopr'] },
  trans:{ vi:'xuyên qua, sang bên kia', la:'trans-', f:['trans','tras','tra','tré'] },
  ultra:{ vi:'quá mức', la:'ultra-', f:['ultra','outre'] },
  vice: { vi:'phó, thay thế', la:'vice-', f:['vice','vi','viz'] },
  /* Gốc Hy Lạp — đi thẳng vào hai tiếng qua đường khoa học và nhà thờ */
  anti: { vi:'chống lại', la:'ἀντί', src:'gr', f:['anti','ant'] },
  auto: { vi:'tự thân', la:'αὐτός', src:'gr', f:['auto','aut'] },
  hyper:{ vi:'quá, vượt', la:'ὑπέρ', src:'gr', f:['hyper','hiper'] },
  hypo: { vi:'dưới, thiếu', la:'ὑπό', src:'gr', f:['hypo','hipo'] },
  micro:{ vi:'nhỏ', la:'μικρός', src:'gr', f:['micro'] },
  mono: { vi:'một', la:'μόνος', src:'gr', f:['mono'] },
  poly: { vi:'nhiều', la:'πολύς', src:'gr', f:['poly','poli'] },
  tele: { vi:'xa', la:'τῆλε', src:'gr', f:['tele','télé'] },
  syn:  { vi:'cùng, chung', la:'σύν', src:'gr', f:['syn','sin','sym','sim'] },
  peri: { vi:'quanh', la:'περί', src:'gr', f:['peri','péri'] },
  meta: { vi:'sau, vượt lên', la:'μετά', src:'gr', f:['meta','méta'] },
  a_gr: { vi:'không, thiếu', la:'ἀ-', src:'gr', f:['a','an'] }
},

/* ---------------- HẬU TỐ ----------------
   Hậu tố quyết định TỪ LOẠI và thường quyết định luôn GIỐNG của
   danh từ — thứ người Việt hay phải học thuộc từng từ một. Biết
   bảng này thì đoán được giống mà không cần tra:
   -tion/-ción luôn giống cái, -ment/-miento luôn giống đực. */
suf: {
  tion:  { vi:'hành động hoặc kết quả của hành động', pos:'danh từ', g:'f', fr:['tion','ation','ition','sion','ssion','xion','ion'], es:['cion','acion','icion','sion','xion','ion'], note:'Luôn giống CÁI ở cả hai tiếng. Không có ngoại lệ đáng kể.' },
  ment:  { vi:'hành động hoặc kết quả', pos:'danh từ', g:'m', fr:['ment','ement','issement'], es:['miento','amiento','imiento'], note:'Luôn giống ĐỰC. Đừng lẫn với hậu tố trạng từ -ment của tiếng Pháp, viết giống hệt nhưng gắn vào tính từ.' },
  ance:  { vi:'trạng thái, tính chất', pos:'danh từ', g:'f', fr:['ance','ence','ance'], es:['ancia','encia'] },
  te:    { vi:'tính chất trừu tượng', pos:'danh từ', g:'f', fr:['té','ité','eté'], es:['dad','idad','edad','tad'], note:'Cặp tương ứng rất đều: liberté ↔ libertad, réalité ↔ realidad.' },
  eur:   { vi:'người làm việc đó, hoặc máy làm việc đó', pos:'danh từ', g:'m', fr:['eur','ateur','iteur','isseur'], es:['dor','ador','idor','or'] },
  age:   { vi:'việc làm, hoặc tập hợp', pos:'danh từ', g:'m', fr:['age','issage'], es:['aje'] },
  ure:   { vi:'kết quả, vật tạo ra', pos:'danh từ', g:'f', fr:['ure','ture','ature'], es:['ura','tura','atura'] },
  isme:  { vi:'học thuyết, khuynh hướng', pos:'danh từ', g:'m', fr:['isme'], es:['ismo'] },
  iste:  { vi:'người theo, người làm nghề', pos:'danh từ', fr:['iste'], es:['ista'], note:'Không đổi theo giống: un artiste, une artiste; el artista, la artista.' },
  erie:  { vi:'nơi làm hoặc bán thứ đó', pos:'danh từ', g:'f', fr:['erie','rie'], es:['eria','ria'], note:'boulangerie ↔ panadería: cùng một khuôn, ghép vào tên món là ra tên cửa hàng.' },
  esse:  { vi:'tính chất', pos:'danh từ', g:'f', fr:['esse'], es:['eza'] },
  itude: { vi:'trạng thái', pos:'danh từ', g:'f', fr:['itude'], es:['itud'] },
  at:    { vi:'chức vụ, trạng thái', pos:'danh từ', g:'m', fr:['at','at'], es:['ado'] },
  ade:   { vi:'hành động, lượt, món', pos:'danh từ', g:'f', fr:['ade'], es:['ada'] },
  ie:    { vi:'ngành, tính chất, nơi', pos:'danh từ', g:'f', fr:['ie'], es:['ia'] },
  able:  { vi:'có thể làm được điều đó', pos:'tính từ', fr:['able','ible','uble'], es:['able','ible'] },
  eux:   { vi:'đầy, nhiều, mang tính', pos:'tính từ', fr:['eux','euse','ueux'], es:['oso','osa'], note:'Cặp rất đều: dangereux ↔ peligroso, curieux ↔ curioso.' },
  if:    { vi:'có xu hướng, có tác dụng', pos:'tính từ', fr:['if','ive','atif','itif'], es:['ivo','iva','ativo','itivo'] },
  aire:  { vi:'thuộc về, liên quan tới', pos:'tính từ', fr:['aire'], es:['ario','aria'] },
  al:    { vi:'thuộc về', pos:'tính từ', fr:['al','el','ale','elle','iel'], es:['al','ial'] },
  ique:  { vi:'thuộc về, mang tính', pos:'tính từ', fr:['ique','atique'], es:['ico','ica','atico'] },
  ant:   { vi:'đang làm, gây ra', pos:'tính từ', fr:['ant','ent','ante','ente'], es:['ante','iente','ente'] },
  e_pp:  { vi:'đã bị làm (quá khứ phân từ)', pos:'tính từ', fr:['é','ée','i','ie','u','ue'], es:['ado','ada','ido','ida'] },
  ense:  { vi:'người hoặc vật xứ đó', pos:'tính từ', fr:['ais','aise','ois','oise','ien','ienne'], es:['es','esa','ano','ana','eno','ena','ense'] },
  er_v:  { vi:'động từ nhóm đều', pos:'động từ', fr:['er'], es:['ar'] },
  ir_v:  { vi:'động từ nhóm -ir', pos:'động từ', fr:['ir'], es:['ir'] },
  re_v:  { vi:'động từ nhóm -re', pos:'động từ', fr:['re','oir'], es:['er'] },
  iser:  { vi:'làm cho thành, biến thành', pos:'động từ', fr:['iser'], es:['izar'] },
  ifier: { vi:'làm cho thành', pos:'động từ', fr:['ifier'], es:['ificar'] },
  oyer:  { vi:'làm việc đó nhiều lần', pos:'động từ', fr:['oyer','ayer','eyer'], es:['ear'] },
  mente: { vi:'tạo trạng từ từ tính từ', pos:'trạng từ', fr:['ment'], es:['mente'], note:'Cả hai tiếng đều lấy dạng GIỐNG CÁI rồi gắn vào: lente → lentement, lenta → lentamente.' },
  ito:   { vi:'nhỏ, thân mật', pos:'hậu tố nhỏ hoá', es:['ito','ita','illo','illa','cito','cita'], fr:['et','ette'], note:'Tiếng TBN dùng dày đặc, không chỉ để chỉ nhỏ mà còn để nói cho dịu: ahorita, un momentito.' },
  on_aug:{ vi:'to, quá mức', pos:'hậu tố to hoá', es:['on','ona','azo','aza'], fr:['on','asse'], note:'Có khi mang nghĩa xấu: mandón là kẻ thích ra lệnh.' },
  isimo: { vi:'rất, cực kỳ', pos:'mức tuyệt đối', es:['isimo','isima'], fr:['issime'], note:'Tiếng TBN dùng hằng ngày; tiếng Pháp gần như không dùng nữa.' }
},

/* ---------------- GỐC TỪ ----------------
   Mỗi mục: dạng La-tinh gốc, nghĩa, các cách viết phần gốc trong
   tiếng Pháp và tiếng Tây Ban Nha, và từ tiếng Anh cùng gốc để
   người học bắt cầu bằng vốn tiếng Anh sẵn có. */
roots: {
  lex:    { la:'lex, legis', vi:'luật', fr:['légal','legal','légis','legisl','loi'], es:['ley','legal','legisl'], en:'legal, legislate', note:'Khác gốc legere (đọc) tuy mặt chữ rất giống: loi/ley là luật, lire/leer là đọc.' },
  umbr:   { la:'umbra', vi:'bóng râm', fr:['ombr','sombr'], es:['sombr','umbr'], en:'umbrella, sombre', note:'sombre và sombra là «dưới bóng» — sub + umbra.' },
  vitr:   { la:'vitrum', vi:'thuỷ tinh', fr:['verr','vitr'], es:['vidri','vitr'], en:'vitreous, vitrine' },
  salnou: { la:'sal', vi:'muối', fr:['sel','salé','sale'], es:['sal','salad'], en:'salt, salary', note:'Lính La-mã từng được trả công bằng muối — chữ salaire và salario ra đời từ đó.' },
  perd:   { la:'perdere', vi:'mất, làm hỏng', fr:['perd','pert','perte'], es:['perd','pérd','perdic'], en:'perdition' },
  par3:   { la:'parere', vi:'hiện ra, lộ ra', fr:['parai','paraî','apparai','apparaî'], es:['parec','parez','aparec','aparez'], en:'appear, apparent', note:'parecer của tiếng TBN là «lộ ra» — trông có vẻ thế nào.' },
  extran: { la:'extraneus', vi:'ở bên ngoài, xa lạ', fr:['étrang','etrang'], es:['extrañ','extran','estrañ'], en:'strange, extraneous' },
  caten:  { la:'catena', vi:'dây xích', fr:['chaîn','chain'], es:['caden','cadén'], en:'chain, concatenate' },
  faci:   { la:'facies', vi:'khuôn mặt, bề mặt', fr:['façad','facad','visag'], es:['fach','faz','faci'], en:'face, facade, surface' },
  virid:  { la:'viridis', vi:'xanh lá', fr:['verdur','verdoy'], es:['verd','verdur'], en:'verdant, verdure' },
  infer:  { la:'inferus', vi:'ở dưới, thấp hơn', fr:['inféri','inferi'], es:['inferi'], en:'inferior, infernal' },
  superu: { la:'superus', vi:'ở trên, cao hơn', fr:['supéri','superi'], es:['superi'], en:'superior, supreme' },
  vit:    { la:'vitare', vi:'tránh', fr:['évit','evit'], es:['evit'], en:'inevitable' },
  surd:   { la:'surdus', vi:'điếc, câm lặng', fr:['sourd','surd'], es:['sord','surd'], en:'absurd, surd', note:'absurde nghĩa gốc là «điếc đặc» — nghe mà không lọt tai được.' },
  cruc:   { la:'crux, crucis', vi:'cây thập, chỗ bắt chéo', fr:['crois','croix','cruc'], es:['cruz','cruc'], en:'cross, crucial', note:'croiser và cruzar là «bắt chéo như hình thập».' },
  vir:    { la:'virare', vi:'quay, đổi hướng', fr:['vir'], es:['vir','gir'], en:'veer' },
  lic:    { la:'licere', vi:'được phép', fr:['loisir','licen'], es:['licen','lícit','licit'], en:'licence, leisure', note:'loisir nghĩa gốc là «điều được phép làm» — thời gian ngoài bổn phận.' },
  invit:  { la:'invitare', vi:'mời', fr:['invit'], es:['invit'], en:'invite' },
  pasc:   { la:'pascere', vi:'cho ăn, nuôi', fr:['repas','past'], es:['past','pasto'], en:'pasture, repast' },
  ventus: { la:'ventus', vi:'gió', fr:['vent'], es:['ventan','vient','vent'], en:'vent, ventilate', note:'ventana của tiếng TBN là «lỗ đón gió» — cửa sổ sinh ra từ chữ gió.' },
  bon:    { la:'bonus', vi:'tốt', fr:['bon','bonn','bien'], es:['buen','bon','bien'], en:'bonus, bounty' },
  jour:   { la:'diurnum', vi:'ngày', fr:['jour','journ'], es:['día','dia','diurn','jorn'], en:'journal, diurnal', note:'jour và día cùng một gốc: dies → diurnum. Tiếng Pháp giữ phần «diurnum», tiếng TBN giữ phần «dies».' },
  noct:   { la:'nox, noctis', vi:'đêm', fr:['nuit','nocturn'], es:['noch','nocturn'], en:'nocturnal', note:'Cụm -ct- của La-tinh thành -ch- trong tiếng TBN và -it- trong tiếng Pháp: noctem → noche · nuit, lactem → leche · lait, factum → hecho · fait. Nhận ra quy luật này là đọc được rất nhiều từ.' },
  lact:   { la:'lac, lactis', vi:'sữa', fr:['lait','lact'], es:['lech','lact'], en:'lactose, lactic' },
  fil:    { la:'filius', vi:'con (trai, gái)', fr:['fils','fill'], es:['hij','fili'], en:'filial, affiliate', note:'Lại một lần f- La-tinh thành h- câm trong tiếng TBN: filius → hijo.' },
  oct:    { la:'octo', vi:'tám', fr:['huit','oct'], es:['och','oct'], en:'octopus, October' },
  fest:   { la:'festum', vi:'ngày lễ', fr:['fêt','fet','fest'], es:['fiest','fest'], en:'festival, feast' },
  camp:   { la:'campus', vi:'cánh đồng, bãi', fr:['champ','camp'], es:['camp'], en:'camp, campus, champion' },
  cas:    { la:'casa', vi:'nhà', fr:['chez'], es:['casa','caser'], en:'casino', note:'chez của tiếng Pháp chính là casa rút gọn: «chez moi» là «ở nhà tôi».' },
  fin2:   { la:'focus', vi:'bếp lửa', fr:['feu','foy'], es:['fueg','hog'], en:'focus, fuel', note:'hogar (mái ấm) nghĩa gốc là «chỗ có bếp lửa».' },
  ag:     { la:'agere', vi:'làm, dẫn dắt', fr:['agent','exig','ag','acte','act','agi'], es:['agent','exig','ag','acte','act','actu'], en:'act, agent, agile' },
  alt:    { la:'altus', vi:'cao', fr:['haut','alt'], es:['alt'], en:'altitude, alto' },
  am:     { la:'amare', vi:'yêu', fr:['aim','am'], es:['am'], en:'amateur, amorous' },
  anim:   { la:'anima', vi:'hơi thở, hồn', fr:['anim'], es:['anim'], en:'animal, animate' },
  ann:    { la:'annus', vi:'năm', fr:['an','ann'], es:['an','añ','anu'], en:'annual, anniversary' },
  aper:   { la:'aperire', vi:'mở', fr:['ouvr','ouvert','ouver'], es:['abr','abiert','apert'], en:'aperture' },
  aqu:    { la:'aqua', vi:'nước', fr:['eau','aqu'], es:['agu','acu'], en:'aquarium, aquatic' },
  arm:    { la:'arma', vi:'vũ khí', fr:['arm'], es:['arm'], en:'army, armour' },
  art:    { la:'ars, artis', vi:'nghề, kỹ năng', fr:['art'], es:['art'], en:'art, artisan' },
  aud:    { la:'audire', vi:'nghe', fr:['aud','obéi','obei','ouï','oui'], es:['aud','obedec','obedez','oí','oi'], en:'audio, audience' },
  bell1:  { la:'bellus', vi:'đẹp', fr:['beau','bel','bell'], es:['bell'], en:'beautiful, embellish' },
  bell2:  { la:'bellum', vi:'chiến tranh', fr:['bell'], es:['bel'], en:'rebel, belligerent', note:'Trùng mặt chữ với bellus «đẹp» nhưng không họ hàng gì: rebelle là kẻ gây chiến lại, không phải kẻ đẹp lại.' },
  brev:   { la:'brevis', vi:'ngắn', fr:['bref','brev','brèv','abrég'], es:['brev','abrev'], en:'brief, abbreviate' },
  cad:    { la:'cadere', vi:'rơi, ngã', fr:['cad','cas','ché','chu'], es:['ca','cad','cas','caí','cai'], en:'cadence, accident, case' },
  cap:    { la:'capere', vi:'nắm lấy, chứa', fr:['cap','cep','cev','cip','çoi','coi'], es:['caber','cup','cep','cib','cip'], en:'capture, receive, accept', note:'Một trong những gốc năng sản nhất: recevoir/recibir, concevoir/concebir, accepter/aceptar đều từ đây.' },
  capit:  { la:'caput', vi:'cái đầu', fr:['chef','chap','capit','cap'], es:['cab','capit'], en:'captain, chapter, capital', note:'chef và cabeza cùng một gốc: người đứng đầu chính là cái đầu.' },
  car:    { la:'carus', vi:'thân yêu, đắt', fr:['cher','chèr','chér'], es:['car','cariñ'], en:'charity, cherish', note:'Cả hai tiếng dùng một từ cho «đắt» và «thân yêu» — cher, caro.' },
  carn:   { la:'caro, carnis', vi:'thịt', fr:['charn','carn'], es:['carn'], en:'carnivore, carnal' },
  cav:    { la:'cavus', vi:'rỗng, hang', fr:['cav','creu'], es:['cav','cuev'], en:'cave, cavity' },
  ced:    { la:'cedere', vi:'đi, nhường bước', fr:['céd','ced','cès','cess'], es:['ced','ces'], en:'proceed, concede, process' },
  cent:   { la:'centum', vi:'trăm', fr:['cent'], es:['cien','cent'], en:'century, percent' },
  cern:   { la:'cernere', vi:'phân biệt, sàng lọc', fr:['cern','cret','cert'], es:['cern','cret','cert'], en:'discern, secret, certain' },
  cid:    { la:'caedere', vi:'cắt, chặt', fr:['cid','cis'], es:['cid','cis'], en:'decide, precise, scissors' },
  circ:   { la:'circus', vi:'vòng tròn', fr:['cherch','cerc','circ'], es:['cerc','circ','busc'], en:'circle, circus' },
  civ:    { la:'civis', vi:'công dân', fr:['civ'], es:['civ','ciud'], en:'city, civil' },
  clam:   { la:'clamare', vi:'kêu to', fr:['clam','clâm'], es:['clam','llam'], en:'claim, exclaim', note:'Tiếng TBN biến cl- thành ll-: clamare → llamar, nên «gọi» và «kêu ca» chung một gốc.' },
  clar:   { la:'clarus', vi:'sáng, rõ', fr:['clair','clar'], es:['clar'], en:'clear, declare' },
  claud:  { la:'claudere', vi:'đóng', fr:['clos','clô','clu','clau'], es:['clus','claus','clu'], en:'close, include, conclude' },
  clav:   { la:'clavis', vi:'chìa khoá', fr:['clé','clef','clav'], es:['llav','clav'], en:'key, clavicle', note:'Lại một cặp cl- → ll-: clavis → llave.' },
  cord:   { la:'cor, cordis', vi:'trái tim', fr:['coeur','cord','accord','cordial'], es:['coraz','cord','cuerd'], en:'core, courage, record', note:'recordar nghĩa đen là «đưa trở lại vào tim» — đó là cách tiếng TBN nói «nhớ».' },
  corp:   { la:'corpus', vi:'thân thể', fr:['corp'], es:['cuerp','corp'], en:'corpse, corporate' },
  cred:   { la:'credere', vi:'tin', fr:['croi','croy','créd','cred'], es:['cre','créd','cred'], en:'credit, incredible' },
  cresc:  { la:'crescere', vi:'lớn lên', fr:['croît','croit','croiss','crû'], es:['crec','crez'], en:'increase, crescent' },
  culp:   { la:'culpa', vi:'lỗi', fr:['coup','culp'], es:['culp'], en:'culprit, culpable' },
  cur:    { la:'cura', vi:'sự chăm lo', fr:['cur','sûr','sur','assur'], es:['cur','segur'], en:'cure, secure, curious', note:'sécurité và seguridad đều là «se- (không) + cura (lo)»: không phải lo gì nữa.' },
  curr:   { la:'currere', vi:'chạy', fr:['couri','cours','courr','curs','cour'], es:['corr','curs','curr'], en:'current, course, occur' },
  dic:    { la:'dicere', vi:'nói', fr:['di','dic','dict','dis'], es:['dec','dic','dich'], en:'dictate, predict, diction' },
  dign:   { la:'dignus', vi:'xứng đáng', fr:['dign'], es:['dign'], en:'dignity, indignant' },
  doc:    { la:'docere', vi:'dạy', fr:['doc','doct'], es:['doc','doct'], en:'doctor, document' },
  dol:    { la:'dolor', vi:'đau', fr:['doul','dol'], es:['dol','duel'], en:'dolorous, condolence' },
  domin:  { la:'dominus', vi:'chủ, người làm chủ', fr:['domin','dam','dom'], es:['domin','dueñ','dueñ','don'], en:'dominate, dominion' },
  dorm:   { la:'dormire', vi:'ngủ', fr:['dorm'], es:['dorm','duerm'], en:'dormitory, dormant' },
  duc:    { la:'ducere', vi:'dẫn dắt', fr:['duir','duc','duit','dui'], es:['duc','duj','duct'], en:'conduct, produce, reduce' },
  dur:    { la:'durus, durare', vi:'cứng, kéo dài', fr:['dur'], es:['dur'], en:'durable, endure, hard' },
  equ:    { la:'aequus', vi:'ngang bằng', fr:['égal','egal','équi','equi'], es:['igual','equi'], en:'equal, equator' },
  err:    { la:'errare', vi:'đi lạc, sai', fr:['err'], es:['err'], en:'error, err' },
  fac:    { la:'facere', vi:'làm', fr:['fai','fait','fac','fic','fect'], es:['hac','hech','fac','fic','fect'], en:'factory, perfect, difficult', note:'Tiếng TBN đổi f- đầu từ La-tinh thành h- câm: facere → hacer, farina → harina, ferrum → hierro.' },
  fall:   { la:'fallere', vi:'đánh lừa, hụt', fr:['faut','faux','fauss','fail','fall'], es:['falt','fals','fall'], en:'false, fault, fail' },
  fer:    { la:'ferre', vi:'mang, chịu', fr:['fer','fèr','ffr','ffer'], es:['fer','fre','fri'], en:'transfer, offer, suffer' },
  fid:    { la:'fides', vi:'lòng tin', fr:['fi','fid','fian','fianc'], es:['fi','fid','fianz','fiel'], en:'confide, fidelity' },
  fin:    { la:'finis', vi:'ranh giới, cuối', fr:['fin'], es:['fin'], en:'finish, define, final' },
  firm:   { la:'firmus', vi:'chắc, vững', fr:['ferm','firm'], es:['firm','ferm','enferm'], en:'firm, confirm', note:'enfermo nghĩa đen là «không vững» — in + firmus — nên ốm và yếu chung một gốc.' },
  flect:  { la:'flectere', vi:'uốn cong', fr:['fléch','flech','flex'], es:['flex','flect'], en:'reflect, flexible' },
  flor:   { la:'flos, floris', vi:'hoa', fr:['fleur','flor'], es:['flor'], en:'flower, flourish' },
  flu:    { la:'fluere', vi:'chảy', fr:['flu','fleuv'], es:['flu'], en:'fluid, influence' },
  form:   { la:'forma', vi:'hình dạng', fr:['form'], es:['form'], en:'form, inform, reform' },
  fort:   { la:'fortis', vi:'mạnh', fr:['fort','forc'], es:['fuert','fuerz','fort','forz','esfuerz'], en:'force, effort, comfort' },
  frang:  { la:'frangere', vi:'bẻ gãy', fr:['fract','fragil','fraction'], es:['fract','frágil','fragil'], en:'fracture, fragile' },
  fug:    { la:'fugere', vi:'chạy trốn', fr:['fui','fuy','fug'], es:['hui','huy','fug'], en:'refuge, fugitive' },
  fund:   { la:'fundere', vi:'đổ, chảy tan', fr:['fond','fus','fond'], es:['fund','fus'], en:'fuse, confuse, refund' },
  gen:    { la:'genus, gignere', vi:'dòng giống, sinh ra', fr:['gen','gén','gent','genr'], es:['gen','gent','géner','gener'], en:'gene, general, generate' },
  grad:   { la:'gradus', vi:'bước, bậc', fr:['grad','gré','gress'], es:['grad','gres'], en:'grade, progress, aggression' },
  grand:  { la:'grandis', vi:'lớn', fr:['grand'], es:['grand'], en:'grand, aggrandize' },
  grat:   { la:'gratus', vi:'dễ chịu, biết ơn', fr:['grâc','grac','grat'], es:['graci','grat'], en:'grateful, gratis, grace' },
  grav:   { la:'gravis', vi:'nặng, nghiêm', fr:['grav','grev'], es:['grav'], en:'grave, gravity' },
  hab:    { la:'habere', vi:'có, giữ', fr:['av','habit','hab'], es:['hab','habit'], en:'habit, inhabit, able' },
  hom:    { la:'homo', vi:'con người', fr:['homm','hom','hum'], es:['hombr','hum'], en:'human, homage' },
  hosp:   { la:'hospes', vi:'chủ nhà, khách trọ', fr:['hôt','hot','hosp','hôp'], es:['huésp','huesp','hosp','hotel'], en:'hospital, hotel, host' },
  hum:    { la:'humus', vi:'đất', fr:['humbl','humil'], es:['humild','humil'], en:'humble, humility', note:'Khiêm tốn nghĩa đen là «sát đất».' },
  jact:   { la:'jacere', vi:'ném', fr:['jet','ject'], es:['ech','yect'], en:'eject, project, object', note:'echar của tiếng TBN chính là jactare — «ném».' },
  jud:    { la:'jus, juris', vi:'luật, lẽ phải', fr:['jug','just','jur'], es:['juzg','juez','just','jur'], en:'judge, justice, jury' },
  junct:  { la:'jungere', vi:'nối, ghép', fr:['joi','join','joint','jonct'], es:['junt','yunt','junc'], en:'join, junction, conjunction' },
  lab:    { la:'labor', vi:'công sức', fr:['labor','labeur'], es:['labor'], en:'labour, collaborate' },
  lav:    { la:'lavare', vi:'rửa', fr:['lav'], es:['lav'], en:'lavatory, launder' },
  leg:    { la:'legere', vi:'đọc, chọn ra', fr:['li','lis','lect','élir','elir','lectur'], es:['le','lect','leg','coger','cog','coj','elig','elec'], en:'legible, collect, elect, intelligent' },
  lev:    { la:'levare', vi:'nâng lên, nhẹ', fr:['lev','lèv','lég','leg'], es:['lev','llev','liger','ligr'], en:'elevate, levity, relieve' },
  liber:  { la:'liber', vi:'tự do', fr:['libr','libér','liber','délivr','delivr'], es:['libr','liber'], en:'liberty, deliver' },
  libr:   { la:'liber (vỏ cây)', vi:'sách', fr:['livr','librair'], es:['librer','libr'], en:'library, libretto', note:'Người La-tinh viết lên vỏ cây, nên «vỏ cây» thành «sách».' },
  lig:    { la:'ligare', vi:'buộc, ràng', fr:['li','lig','liais'], es:['lig','liga'], en:'ligature, oblige, religion' },
  loc:    { la:'locus', vi:'nơi chốn', fr:['lieu','loc','lou'], es:['lug','loc'], en:'local, locate, locomotive' },
  long:   { la:'longus', vi:'dài', fr:['long'], es:['long','lueng'], en:'long, prolong, longitude' },
  loqu:   { la:'loqui', vi:'nói chuyện', fr:['loqu','locut'], es:['locu','locut'], en:'eloquent, colloquial' },
  luc:    { la:'lux, lucis', vi:'ánh sáng', fr:['lumi','lueur','luc'], es:['luz','luc','lumin'], en:'lucid, illuminate, translucent' },
  magn:   { la:'magnus, major', vi:'lớn, lớn hơn', fr:['majeur','major','maj','maît','mait'], es:['mayor','may','maest','magn'], en:'major, magnify, master' },
  man:    { la:'manus', vi:'bàn tay', fr:['main','manu','man','manœuvr'], es:['manu','man','manej'], en:'manual, manage, maintain', note:'maintenir và mantener là «manu + tenere»: giữ trong tay.' },
  mand:   { la:'mandare', vi:'giao việc, sai bảo', fr:['mand'], es:['mand'], en:'command, demand, mandate' },
  mane:   { la:'manere', vi:'ở lại', fr:['maison','manoir','manso'], es:['mansi','manso'], en:'mansion, remain, permanent' },
  mar:    { la:'mare', vi:'biển', fr:['mer','mar','marin'], es:['mar','marin'], en:'marine, maritime' },
  matr:   { la:'mater', vi:'mẹ', fr:['mere','matern','matri'], es:['madr','matern','matri'], en:'maternal, matrix' },
  med:    { la:'medius', vi:'ở giữa', fr:['milieu','moy','médi','medi'], es:['medi','mitad'], en:'medium, mediate, middle' },
  medic:  { la:'medicus', vi:'thầy thuốc', fr:['médec','medec','médic','medic'], es:['médic','medic'], en:'medicine, medical' },
  memor:  { la:'memoria', vi:'trí nhớ', fr:['mémoir','memoir','mémor'], es:['memori','memor'], en:'memory, memorial' },
  ment:   { la:'mens, mentis', vi:'trí óc', fr:['ment','menti'], es:['ment','menti'], en:'mental, mention, demented' },
  merc:   { la:'merx, mercis', vi:'hàng hoá', fr:['march','merc','merci'], es:['merc','mercad'], en:'market, merchant, commerce' },
  mil:    { la:'mille', vi:'nghìn', fr:['mill','mil'], es:['mil','mill'], en:'million, mile, millennium' },
  min:    { la:'minor, minuere', vi:'nhỏ hơn, giảm', fr:['moin','min','minu','minist'], es:['men','min','minu','minist'], en:'minor, minute, diminish, minister' },
  mir:    { la:'mirari', vi:'nhìn, ngạc nhiên', fr:['mir','merveill','admir'], es:['mir','milagr','admir','marav'], en:'mirror, admire, miracle', note:'Tiếng TBN giữ mirar cho «nhìn»; tiếng Pháp chuyển sang regarder và chỉ giữ mirar trong miroir.' },
  mit:    { la:'mittere', vi:'gửi đi, thả ra', fr:['met','mett','mis','miss'], es:['met','mit','mis'], en:'mission, permit, transmit, message' },
  mod:    { la:'modus', vi:'cách thức, chừng mực', fr:['mod'], es:['mod'], en:'mode, model, modern, modest' },
  mont:   { la:'mons, montis', vi:'núi', fr:['mont'], es:['mont','mont'], en:'mountain, mount, amount' },
  mor:    { la:'mors, mortis', vi:'cái chết', fr:['mort','mour','meur'], es:['muert','mor','muer'], en:'mortal, mortgage' },
  mov:    { la:'movere', vi:'chuyển động', fr:['mouv','meu','mot','mobil'], es:['mov','muev','mot','móvil','movil'], en:'move, motor, emotion, mobile' },
  mut:    { la:'mutare', vi:'thay đổi', fr:['mu','mut'], es:['mud','mut'], en:'mutate, commute', note:'mudarse của tiếng TBN là «đổi chỗ ở» — đúng nghĩa gốc.' },
  nasc:   { la:'nasci', vi:'sinh ra', fr:['naî','nai','nat','naiss'], es:['nac','nat'], en:'native, nature, nation, renaissance' },
  nav:    { la:'navis', vi:'tàu thuyền', fr:['navir','nav'], es:['nav','nave'], en:'navy, navigate' },
  neg:    { la:'negare', vi:'từ chối, nói không', fr:['ni','nég','neg'], es:['neg','nieg'], en:'negative, deny, renegade' },
  nomin:  { la:'nomen', vi:'tên gọi', fr:['nom','nomm','nomin'], es:['nombr','nomin'], en:'nominate, noun, renown' },
  nosc:   { la:'noscere', vi:'biết, nhận ra', fr:['connaiss','connaî','connai','conn','not'], es:['conozc','conoc','not','noti'], en:'recognize, notice, notion', note:'noticia (tin tức) chính là «thứ đáng biết».' },
  nov:    { la:'novus', vi:'mới', fr:['neuf','neuv','nouv','nov'], es:['nuev','nov'], en:'novel, renovate, innovation' },
  numer:  { la:'numerus', vi:'con số', fr:['nombr','numér','numer'], es:['númer','numer'], en:'number, numeral' },
  ocul:   { la:'oculus', vi:'con mắt', fr:['œil','oeil','yeux','ocul'], es:['ojo','ocul','oj'], en:'ocular, monocle' },
  oper:   { la:'opus, operis', vi:'công việc, tác phẩm', fr:['œuvr','oeuvr','ouvrier','ouvrag','opér','oper'], es:['obr','oper'], en:'opera, operate, cooperate' },
  opt:    { la:'optare', vi:'chọn', fr:['opt'], es:['opt'], en:'option, adopt, optional' },
  ord:    { la:'ordo, ordinis', vi:'trật tự, hàng lối', fr:['ordr','ordon','ordin'], es:['orden','ordin'], en:'order, ordinary, coordinate' },
  orig:   { la:'oriri', vi:'mọc lên, bắt đầu', fr:['origin','orient'], es:['origen','origin','orient'], en:'origin, orient, abort' },
  par1:   { la:'parare', vi:'sửa soạn, làm sẵn', fr:['par','pare','parei'], es:['par','parat','par'], en:'prepare, repair, apparatus' },
  par2:   { la:'par', vi:'ngang nhau, đôi', fr:['pair','par'], es:['par'], en:'pair, compare, parity' },
  part:   { la:'pars, partis', vi:'phần, chia phần', fr:['part','parti','partag'], es:['part','partid'], en:'part, depart, particular', note:'partir nghĩa gốc là «chia ra» — tách khỏi chỗ đang đứng, nên thành «ra đi».' },
  pass:   { la:'passus, pati', vi:'bước đi; chịu đựng', fr:['pas','pass','passi','pati'], es:['pas','pasi','paci'], en:'pass, passion, patient' },
  patr:   { la:'pater', vi:'cha', fr:['pèr','per','patr','patron'], es:['padr','patr','patrón','patron'], en:'paternal, patron, patriot' },
  ped:    { la:'pes, pedis', vi:'bàn chân', fr:['pied','péd','ped'], es:['pie','peat','ped','pid'], en:'pedal, pedestrian, expedite', note:'impedir là «chặn chân» — in + pes.' },
  pell:   { la:'pellere', vi:'đẩy', fr:['puls','pouss','pel'], es:['puls','pel','emp'], en:'impulse, expel, propel' },
  pend:   { la:'pendere', vi:'treo, cân, trả', fr:['pend','pens','pendr'], es:['pend','pens','peso'], en:'pending, suspend, expensive', note:'pensar của tiếng TBN là «cân nhắc» — cân một ý trong đầu.' },
  pet:    { la:'petere', vi:'nhắm tới, xin', fr:['pét','pet','pét','appét'], es:['pet','pit','apet'], en:'appetite, compete, repeat, petition' },
  plac:   { la:'placere', vi:'làm vừa lòng', fr:['plai','plais','plaî'], es:['plac','place'], en:'please, pleasant, placid' },
  plan:   { la:'planus', vi:'bằng phẳng', fr:['plan','plain'], es:['plan','llan'], en:'plain, plane, explain', note:'Tiếng TBN đổi pl- La-tinh thành ll-: planus → llano, plenus → lleno, pluvia → lluvia.' },
  plen:   { la:'plenus', vi:'đầy', fr:['plein','plén','plen','plir','plit'], es:['llen','plen'], en:'plenty, complete, replenish' },
  plic:   { la:'plicare', vi:'gấp, xếp lớp', fr:['pli','ploi','ploy','pliqu'], es:['pleg','plic','ple'], en:'apply, complicate, explain, employ' },
  plor:   { la:'plorare', vi:'khóc', fr:['pleur','plor'], es:['llor','plor'], en:'deplore, implore' },
  plu:    { la:'pluvia', vi:'mưa', fr:['plu','pleuv','pluv'], es:['lluv','llov','pluv'], en:'pluvial' },
  pon:    { la:'ponere', vi:'đặt để', fr:['pos','pon'], es:['pon','posi','posit','puest','pues'], en:'position, compose, propose, deposit' },
  popul:  { la:'populus', vi:'dân chúng', fr:['peupl','popul'], es:['puebl','popul'], en:'people, popular, population' },
  port1:  { la:'portare', vi:'mang, chở', fr:['port'], es:['port'], en:'transport, import, portable' },
  port2:  { la:'porta, portus', vi:'cửa, bến', fr:['oportun','opportun','port','portai'], es:['oportun','puert','port'], en:'portal, porch' },
  pot:    { la:'posse, potere', vi:'có thể, quyền lực', fr:['pouv','peu','puiss','poss','possib','possibl','pot'], es:['pod','pued','posib','posibl','pot'], en:'power, possible, potent', note:'possible và posible thuộc gốc này (posse — có thể), không phải gốc ponere (đặt) tuy mặt chữ rất giống.' },
  prehend:{ la:'prehendere', vi:'nắm bắt', fr:['prend','pren','pris','prehen'], es:['prend','pren','prendi','pris'], en:'apprehend, comprehend, prison', note:'Hiểu chính là «nắm được»: comprendre, comprender, comprehend.' },
  press:  { la:'premere', vi:'ép, nén', fr:['press','imprim','exprim','oppress','prim'], es:['pres','imprim','exprim','oprim'], en:'press, express, impression' },
  prim:   { la:'primus', vi:'đầu tiên', fr:['premi','prim','princ'], es:['prim','princ'], en:'primary, prince, principle', note:'printemps và primavera đều là «mùa đầu tiên».' },
  priv:   { la:'privus', vi:'riêng, tách khỏi chung', fr:['priv'], es:['priv'], en:'private, deprive, privilege' },
  prob:   { la:'probare', vi:'thử, chứng tỏ', fr:['prouv','preuv','prob','prouv'], es:['prob','prueb'], en:'prove, probe, approve' },
  propri: { la:'proprius', vi:'của riêng', fr:['propr'], es:['propi','propr'], en:'proper, property, appropriate' },
  public: { la:'publicus', vi:'thuộc về dân chúng', fr:['public','publi'], es:['públic','public'], en:'public, publish, republic' },
  punct:  { la:'pungere', vi:'chích, chấm', fr:['point','ponct'], es:['punt','punz'], en:'point, punctual, puncture' },
  put:    { la:'putare', vi:'tính toán, cân nhắc', fr:['compt','put','pute'], es:['cont','put','pute'], en:'compute, dispute, reputation', note:'compter và contar đều từ computare — đếm và kể chuyện chung một gốc.' },
  quaer:  { la:'quaerere', vi:'tìm, hỏi', fr:['quêt','quet','quér','quer','quest','quis'], es:['quer','quier','quist','cuest','quisit'], en:'question, quest, require, acquire', note:'querer của tiếng TBN — muốn, yêu — nghĩa gốc là «đi tìm».' },
  radic:  { la:'radix, radicis', vi:'rễ', fr:['racin','radic'], es:['raíz','raiz','radic'], en:'radical, radish, eradicate' },
  rap:    { la:'rapere', vi:'giật lấy, nhanh', fr:['rapid','rap'], es:['rápid','rapid','rapt'], en:'rapid, rapture' },
  rect:   { la:'regere, rectus', vi:'cai quản, thẳng', fr:['règl','regl','rect','droit','direc','rein','rég','reg'], es:['regl','rect','derech','direc','rein','reg','rig'], en:'rule, correct, direct, regime', note:'droit và derecho cùng từ directus: «thẳng» rồi thành «luật» và «quyền».' },
  rid:    { la:'ridere', vi:'cười', fr:['ri','rir','ris'], es:['re','reí','rei','ris'], en:'ridicule, derision' },
  rog:    { la:'rogare', vi:'hỏi, cầu xin', fr:['rog'], es:['rog','rueg'], en:'interrogate, arrogant' },
  rump:   { la:'rumpere', vi:'làm vỡ', fr:['romp','rupt','rompr'], es:['romp','rupt','rot'], en:'rupture, interrupt, corrupt' },
  sal:    { la:'salire', vi:'nhảy', fr:['saut','sail','sult'], es:['salt','sult','salir'], en:'salient, result, assault' },
  salut:  { la:'salus, salvus', vi:'sức khoẻ, an toàn', fr:['salu','sauv','sauf','salv'], es:['salud','salv','salu'], en:'salute, save, salvage' },
  sanguin:{ la:'sanguis', vi:'máu', fr:['sang','sangui'], es:['sangr','sangui'], en:'sanguine, consanguinity' },
  sci:    { la:'scire', vi:'biết', fr:['sci','scien','consci'], es:['cienc','conci','sci'], en:'science, conscious' },
  scrib:  { la:'scribere', vi:'viết', fr:['écri','ecri','écrit','ecrit','scri','scrip','scriv','script'], es:['escrib','escrit','scrib','scrip'], en:'script, describe, manuscript' },
  sec:    { la:'secare', vi:'cắt', fr:['sect','segm','scie'], es:['sect','segm','seg'], en:'section, insect, segment' },
  sed:    { la:'sedere', vi:'ngồi', fr:['sied','sièg','sieg','sid','sess','assoi','asse'], es:['sid','ses','asient','sedent'], en:'sedentary, president, session, reside', note:'Trong tiếng TBN, sentarse (ngồi) và sentir (cảm thấy) có thân trùng nhau — bảng này bỏ thân mơ hồ đó ra để không gán nhầm gốc.' },
  sent:   { la:'sentire', vi:'cảm thấy', fr:['sent','sens','senti'], es:['sent','sient','sens'], en:'sense, sentiment, consent' },
  sequ:   { la:'sequi', vi:'đi theo', fr:['sui','suiv','séqu','sequ','second'], es:['sigu','segu','sigo','secu','segund'], en:'sequence, consequence, second, pursue' },
  serv1:  { la:'servire', vi:'phục vụ', fr:['servic','serv'], es:['servici','servic','serv','sirv'], en:'serve, service, servant' },
  serv2:  { la:'servare', vi:'giữ gìn', fr:['serv','conserv','réserv','reserv','observ'], es:['serv','conserv','reserv','observ'], en:'preserve, observe, reserve' },
  sign:   { la:'signum', vi:'dấu hiệu', fr:['sign','enseign','seign','dessin'], es:['sign','señal','senal','enseñ','ensen','diseñ','disen','reseñ'], en:'sign, design, signal', note:'enseigner và enseñar là «in + signare»: ghi dấu vào đầu người học.' },
  simil:  { la:'similis', vi:'giống nhau', fr:['sembl','simil','simul'], es:['semej','simil','simul'], en:'similar, assemble, simulate' },
  sol1:   { la:'solus', vi:'một mình', fr:['seul','sol','solit'], es:['sol','solit'], en:'sole, solitude, desolate' },
  sol2:   { la:'sol', vi:'mặt trời', fr:['soleil','solair','sol'], es:['sol','solar'], en:'solar, parasol' },
  solv:   { la:'solvere', vi:'cởi ra, giải quyết', fr:['soud','solu','solv','soudr'], es:['solv','soluc','suelv'], en:'solve, solution, absolve' },
  somn:   { la:'somnus', vi:'giấc ngủ', fr:['somm','somn','song'], es:['sueñ','suen','somn'], en:'insomnia, somnolent' },
  son:    { la:'sonus', vi:'âm thanh', fr:['son','sonn','sonor'], es:['son','sonid','sonor'], en:'sound, sonic, resonate' },
  spec:   { la:'specere', vi:'nhìn, ngó', fr:['spect','spèc','spec','espèc','espec','soupçon'], es:['spect','espect','especi','espej','sospech'], en:'spectacle, inspect, species, suspect', note:'espejo là speculum — thứ để soi; sospechar là «nhìn từ dưới lên».' },
  sper:   { la:'sperare', vi:'hy vọng', fr:['espér','esper','espoir','espér'], es:['esper','esperanz'], en:'prosper, desperate' },
  spir:   { la:'spirare', vi:'thở', fr:['spir','espri','respir'], es:['spir','espírit','espirit','respir'], en:'spirit, respire, inspire' },
  sta:    { la:'stare', vi:'đứng, đứng yên', fr:['stant','stanc','stat','stabl','sist','rest','état','etat','instan','constan'], es:['stant','stanc','est','estad','establ','sist','rest','instan','constan'], en:'stand, state, stable, resist', note:'estar của tiếng TBN chính là stare — đứng ở đâu, trong trạng thái nào.' },
  string: { la:'stringere', vi:'siết chặt', fr:['strict','étroit','etroit','strein'], es:['estrict','estrech','string'], en:'strict, restrict, stringent' },
  stru:   { la:'struere', vi:'xây dựng', fr:['stru','struct','struir'], es:['stru','struct','struir'], en:'structure, construct, destroy' },
  sum:    { la:'sumere', vi:'lấy, nhận vào', fr:['consom','assum','présum','presum','résum','resum','sum'], es:['sum','sumir'], en:'consume, assume, resume' },
  surg:   { la:'surgere', vi:'trỗi dậy', fr:['surg','sourc','ressourc'], es:['surg','surt','recurs'], en:'surge, resurrect, source' },
  tang:   { la:'tangere', vi:'chạm', fr:['tact','tang','teind'], es:['tact','tang'], en:'contact, tangible, intact' },
  temp:   { la:'tempus', vi:'thời gian, thời tiết', fr:['temp','tempêt','tempet'], es:['tiemp','temp','tempest'], en:'temporary, tempest, contemporary' },
  ten:    { la:'tenere', vi:'giữ, nắm', fr:['ten','tien','tenu'], es:['ten','tien','tuv'], en:'tenant, contain, maintain, retain' },
  tend:   { la:'tendere', vi:'căng ra, hướng tới', fr:['tend','tens','tent','attend','entend'], es:['tend','tens','tent','atend','entend'], en:'tend, extend, intend, attention', note:'entender của tiếng TBN là «căng đầu về phía» điều đang nghe.' },
  term:   { la:'terminus', vi:'cột mốc, ranh giới', fr:['term','termin'], es:['términ','termin'], en:'term, terminate, determine' },
  terr:   { la:'terra', vi:'đất', fr:['terr','enterr'], es:['tierr','terr','entierr'], en:'terrain, territory, inter' },
  test:   { la:'testis', vi:'người làm chứng', fr:['témoi','temoi','test','attest','protest'], es:['testig','test','atestig','protest'], en:'testify, protest, attest' },
  text:   { la:'texere', vi:'dệt', fr:['text','tissu','tiss'], es:['text','tej','tejid'], en:'text, textile, context', note:'Một bài viết chính là một tấm vải dệt bằng chữ.' },
  tim:    { la:'timere', vi:'sợ', fr:['timid','craint'], es:['tem','tím','tim'], en:'timid, intimidate' },
  tract:  { la:'trahere', vi:'kéo', fr:['trai','trait','tract','tir'], es:['tra','trat','tract','traig'], en:'attract, contract, extract, tractor' },
  trad:   { la:'tradere', vi:'trao sang tay khác', fr:['trad','trahi','trahir'], es:['trad','traic','traicion'], en:'tradition, traitor, translate', note:'Cùng một hành động «trao sang»: trao kiến thức thì thành truyền thống, trao người của mình thì thành phản bội.' },
  trib:   { la:'tribuere', vi:'chia cho', fr:['tribu'], es:['tribu'], en:'distribute, contribute, tribute' },
  turb:   { la:'turba', vi:'đám đông hỗn loạn', fr:['troubl','turb','perturb'], es:['turb','disturb','perturb'], en:'disturb, turbulent, trouble' },
  un:     { la:'unus', vi:'một', fr:['un','uni','uniqu'], es:['un','uni','únic','unic'], en:'unit, union, unique, unite' },
  urb:    { la:'urbs', vi:'thành phố', fr:['urb'], es:['urb'], en:'urban, suburb' },
  us:     { la:'uti, usus', vi:'dùng', fr:['us','util','usag'], es:['us','útil','util'], en:'use, utility, abuse' },
  vac:    { la:'vacuus, vacare', vi:'trống, rỗi', fr:['vide','vac','vacanc'], es:['vací','vaci','vac','vacac'], en:'vacant, vacation, evacuate' },
  val:    { la:'valere', vi:'có giá trị, khoẻ', fr:['val','vail','vaill'], es:['val','valg'], en:'value, valid, evaluate, prevail' },
  ven:    { la:'venire', vi:'đến', fr:['ven','vien','venu','avenir'], es:['ven','vien','venid','porvenir'], en:'advent, convene, invent, adventure', note:'souvenir là «sub + venire» — từ dưới trồi lên: một kỷ niệm tự nổi lên trong đầu.' },
  vend:   { la:'vendere', vi:'bán', fr:['vend','vent'], es:['vend','venta'], en:'vendor, vending' },
  ver:    { la:'verus', vi:'thật', fr:['vrai','vér','vérit','vérif','verif'], es:['verdad','verdader','verif'], en:'verify, verdict, very' },
  verb:   { la:'verbum', vi:'lời, từ', fr:['verb','proverb'], es:['verb','proverbi'], en:'verb, proverb, verbal' },
  vert:   { la:'vertere', vi:'quay, xoay', fr:['vers','vert','virt','divers','avert'], es:['vers','vert','virt','divers','advert'], en:'convert, version, reverse, universe', note:'univers và universo là «quay về một mối»: unus + vertere.' },
  vest:   { la:'vestis', vi:'áo quần', fr:['vêt','vet','vest'], es:['vest','vist'], en:'vest, invest, travesty' },
  via:    { la:'via', vi:'đường đi', fr:['voie','voyag','dévi','devi','envoi','envoy'], es:['vía','via','viaj','enví','envi','desví','desvi'], en:'via, voyage, deviate, obvious', note:'envoyer và enviar là «đưa vào đường» — cho lên đường.' },
  vinc:   { la:'vincere', vi:'thắng', fr:['vainc','vain','vict','convainc'], es:['venc','vict','convenc'], en:'victory, convince, invincible' },
  vid:    { la:'videre', vi:'nhìn thấy', fr:['voi','voy','vu','vis','vid','évid','evid'], es:['ve','vis','evid'], en:'vision, visit, evident, provide' },
  viv:    { la:'vivere', vi:'sống', fr:['viv','vie','vit'], es:['viv','vid','vit'], en:'vivid, survive, vital, revive' },
  voc:    { la:'vocare, vox', vi:'gọi, giọng nói', fr:['voix','voc','vocab','avocat'], es:['voz','voc','vocab','abogad'], en:'vocal, vocabulary, invoke, advocate' },
  vol:    { la:'velle', vi:'muốn', fr:['voul','veu','vol','volont'], es:['volunt','volunt'], en:'volunteer, voluntary, benevolent' },
  volv:   { la:'volvere', vi:'cuộn, lăn', fr:['volumin','volum','volu','velopp','volv'], es:['volumin','volum','volv','vuelv','volu','arroll'], en:'revolve, evolve, envelope' },
  vot:    { la:'votum', vi:'lời nguyện, lá phiếu', fr:['vot','vœu','voeu','dévou'], es:['vot','devot'], en:'vote, devote, votive' },
  vulg:   { la:'vulgus', vi:'dân thường', fr:['vulg','divulg'], es:['vulg','divulg'], en:'vulgar, divulge' },

  /* ---- Gốc Hy Lạp: vào hai tiếng qua đường khoa học, y học, nhà thờ ---- */
  graph:  { la:'γράφειν', src:'gr', vi:'viết, vẽ', fr:['graph','gramm'], es:['graf','gram'], en:'graph, grammar, photograph' },
  log:    { la:'λόγος', src:'gr', vi:'lời, lẽ, ngành học', fr:['log','logi'], es:['log','logí','logi'], en:'logic, dialogue, biology' },
  metr:   { la:'μέτρον', src:'gr', vi:'đo lường', fr:['mètr','metr'], es:['metr','métr'], en:'metre, geometry, thermometer' },
  phon:   { la:'φωνή', src:'gr', vi:'âm thanh, tiếng', fr:['phon','phoni'], es:['fon','foní','foni'], en:'phone, symphony, phonetic' },
  photo:  { la:'φῶς, φωτός', src:'gr', vi:'ánh sáng', fr:['phot'], es:['fot'], en:'photo, photograph' },
  psych:  { la:'ψυχή', src:'gr', vi:'tâm hồn', fr:['psych'], es:['psic','sic'], en:'psychology, psyche' },
  techn:  { la:'τέχνη', src:'gr', vi:'kỹ nghệ, tay nghề', fr:['techn'], es:['técnic','tecn'], en:'technique, technology' },
  therm:  { la:'θερμός', src:'gr', vi:'nóng', fr:['therm'], es:['term'], en:'thermos, thermal' },
  bio:    { la:'βίος', src:'gr', vi:'sự sống', fr:['bio'], es:['bio'], en:'biology, biography' },
  geo:    { la:'γῆ', src:'gr', vi:'đất, trái đất', fr:['géo','geo'], es:['geo','geó'], en:'geography, geology' },
  crat:   { la:'κράτος', src:'gr', vi:'quyền lực', fr:['crat','cratie'], es:['crat','cracia'], en:'democracy, bureaucrat' },
  dem:    { la:'δῆμος', src:'gr', vi:'dân', fr:['démo','demo'], es:['demo'], en:'democracy, epidemic' },
  chron:  { la:'χρόνος', src:'gr', vi:'thời gian', fr:['chron'], es:['cron','crón'], en:'chronology, chronic' },
  path:   { la:'πάθος', src:'gr', vi:'cảm xúc, bệnh', fr:['path'], es:['pát','patolog'], en:'sympathy, pathology' },
  scop:   { la:'σκοπεῖν', src:'gr', vi:'nhìn, xem xét', fr:['scop'], es:['scop','scóp'], en:'telescope, microscope' },

  /* ---- Gốc Ả Rập: vào tiếng Tây Ban Nha tám thế kỷ Al-Andalus,
     rồi một phần sang tiếng Pháp. Đây là lý do rất nhiều từ TBN
     thông dụng bắt đầu bằng al- — đó chính là mạo từ tiếng Ả Rập
     dính luôn vào từ. ---- */
azucar: { la:'as-sukkar', src:'ar', vi:'đường (gia vị)', fr:['sucr'], es:['azúcar','azucar','azucar'], en:'sugar' },
aceit:  { la:'az-zayt', src:'ar', vi:'dầu ô liu', fr:['huil'], es:['aceit'], en:'olive oil', note:'Tiếng Pháp lấy oleum của La-tinh (huile), tiếng TBN lấy az-zayt của Ả Rập.' },
alcohol:{ la:'al-kuḥl', src:'ar', vi:'rượu cồn', fr:['alcool','alcoo'], es:['alcohol','alcoh'], en:'alcohol' },
algod:  { la:'al-quṭn', src:'ar', vi:'bông', fr:['coton'], es:['algod'], en:'cotton' },
arroz:  { la:'ar-ruzz', src:'ar', vi:'gạo', fr:['riz'], es:['arroz','arroc'], en:'rice' },
barri:  { la:'barrī', src:'ar', vi:'khu phố ngoài thành', fr:['quarti'], es:['barri'], en:'barrio' },
naranj: { la:'nāranj', src:'ar', vi:'quả cam', fr:['orang'], es:['naranj'], en:'orange' },
ojala:  { la:'law šāʾ allāh', src:'ar', vi:'ước gì, mong sao', es:['ojalá','ojala'], fr:[], en:'inshallah', note:'Nghĩa đen là «nếu Chúa muốn thế». Giờ chỉ còn là một từ để ước, không còn nghĩa tôn giáo.' },
alcald: { la:'al-qāḍī', src:'ar', vi:'thị trưởng', fr:['mair'], es:['alcald'], en:'mayor (alcalde)' },
alfombr:{ la:'al-ḫumra', src:'ar', vi:'tấm thảm', fr:['tapis'], es:['alfombr'], en:'carpet' },
alm:    { la:'al-miḫadda', src:'ar', vi:'cái gối', fr:['oreill'], es:['almohad'], en:'pillow' },

  /* ---- Gốc German: người Frank ở phía bắc và người Goth ở Tây Ban Nha
     để lại một lớp từ rất thông dụng. Chúng không tách được theo
     kiểu La-tinh, nên biết chúng là gốc German cũng là biết vì sao
     không nên cố tìm gốc La-tinh ở đó. ---- */
guerr:  { la:'*werra', src:'germ', vi:'chiến tranh', fr:['guerr'], es:['guerr'], en:'war', note:'Tiếng Anh lấy chữ war từ cùng gốc này qua tiếng Pháp Norman.' },
blank:  { la:'*blank', src:'germ', vi:'trắng', fr:['blanc','blanch'], es:['blanc','blanqu'], en:'blank, blanch' },
gard:   { la:'*wardōn', src:'germ', vi:'trông coi, giữ', fr:['gard'], es:['guard'], en:'guard, ward, regard' },
gan:    { la:'*waidanjan', src:'germ', vi:'kiếm được, thắng', fr:['gagn'], es:['gan'], en:'gain' },
rich:   { la:'*rīkja', src:'germ', vi:'giàu, có thế lực', fr:['rich'], es:['ric','riqu'], en:'rich, realm' },
jard:   { la:'*gardo', src:'germ', vi:'vườn rào', fr:['jard'], es:['jard'], en:'garden, yard' },
choi:   { la:'*kausjan', src:'germ', vi:'chọn, nếm thử', fr:['chois','choix'], es:[], en:'choose' },
danz:   { la:'*dansōn', src:'germ', vi:'nhảy múa', fr:['dans'], es:['danz','baila'], en:'dance' },
hont:   { la:'*haunitha', src:'germ', vi:'sự xấu hổ', fr:['hont'], es:[], en:'shame' },
bleu:   { la:'*blao', src:'germ', vi:'màu xanh lam', fr:['bleu'], es:['azul'], en:'blue', note:'Tiếng TBN không lấy từ German mà lấy azul của Ba Tư qua Ả Rập — nên hai tiếng khác hẳn nhau ở đúng một màu này.' }
},

/* ---------------- BẠN GIẢ ----------------
   Từ nhìn quen mà nghĩa lệch. Ba nguồn bẫy, xếp theo mức nguy hiểm:

   1. Giữa chính hai tiếng này — nguy nhất, vì mặt chữ gần như trùng.
      «salir» ở Pháp là làm bẩn, ở Tây Ban Nha là đi ra.
   2. Với tiếng Anh — người Việt học tiếng Anh trước nên rất dễ mắc.
   3. Với tiếng Việt qua đường phiên âm.

   Mục từ nào có tên ở đây thì hiện một dòng cảnh báo. */
ff: {
  fr: {
    'salir':      { vi:'làm bẩn', warn:'Tiếng Tây Ban Nha «salir» lại là ĐI RA. Muốn nói đi ra trong tiếng Pháp thì dùng «sortir».' },
    'entendre':   { vi:'nghe thấy', warn:'Tiếng Tây Ban Nha «entender» là HIỂU. Hai việc khác nhau: nghe được chưa chắc đã hiểu.' },
    'rester':     { vi:'ở lại', warn:'Tiếng Tây Ban Nha «restar» là TRỪ ĐI (phép toán). Nghỉ ngơi trong tiếng Pháp là «se reposer».' },
    'quitter':    { vi:'rời khỏi', warn:'Tiếng Tây Ban Nha «quitar» là LẤY ĐI, BỎ RA — không phải rời đi.' },
    'large':      { vi:'rộng', warn:'Tiếng Tây Ban Nha «largo» là DÀI, không phải rộng. Rộng trong tiếng Tây Ban Nha là «ancho».' },
    'subir':      { vi:'chịu đựng, hứng lấy', warn:'Tiếng Tây Ban Nha «subir» là ĐI LÊN. Nghĩa gần như ngược nhau.' },
    'demander':   { vi:'hỏi, yêu cầu', warn:'Tiếng Tây Ban Nha «demandar» là KIỆN RA TOÀ. Hỏi là «preguntar».' },
    'attendre':   { vi:'chờ đợi', warn:'Tiếng Tây Ban Nha «atender» là TIẾP, PHỤC VỤ. Chờ là «esperar». Tiếng Anh «attend» lại là dự — ba đường ba nghĩa.' },
    'constipé':   { vi:'táo bón', warn:'Tiếng Tây Ban Nha «constipado» là BỊ CẢM LẠNH. Nói nhầm ở hiệu thuốc thì phiền to.' },
    'actuellement':{ vi:'hiện nay', warn:'Không phải «actually» của tiếng Anh. «Thật ra» là «en fait».' },
    'éventuellement':{ vi:'nếu cần thì', warn:'Không phải «eventually». «Cuối cùng» là «finalement».' },
    'librairie':  { vi:'hiệu sách', warn:'Không phải thư viện. Thư viện là «bibliothèque».' },
    'monnaie':    { vi:'tiền lẻ, tiền thối', warn:'Không phải tiền nói chung. Tiền là «argent».' },
    'journée':    { vi:'cả ngày', warn:'Không phải chuyến đi. Chuyến đi là «voyage».' },
    'sensible':   { vi:'nhạy cảm', warn:'Không phải «hợp lý». Hợp lý là «raisonnable».' },
    'prétendre':  { vi:'cho rằng, tự nhận', warn:'Không phải giả vờ. Giả vờ là «faire semblant».' },
    'déception':  { vi:'sự thất vọng', warn:'Không phải lừa dối. Lừa dối là «tromperie».' },
    'blesser':    { vi:'làm bị thương', warn:'Không phải ban phước. Ban phước là «bénir».' },
    'pain':       { vi:'bánh mì', warn:'Không phải nỗi đau. Đau là «douleur».' },
    'raisin':     { vi:'quả nho tươi', warn:'Nho khô mới là «raisin sec».' }
  },
  es: {
    'salir':      { vi:'đi ra', warn:'Tiếng Pháp «salir» lại là LÀM BẨN. Cùng mặt chữ, hai việc chẳng liên quan.' },
    'entender':   { vi:'hiểu', warn:'Tiếng Pháp «entendre» là NGHE THẤY. Nghe được chưa chắc đã hiểu.' },
    'restar':     { vi:'trừ đi', warn:'Tiếng Pháp «rester» là Ở LẠI. Ở lại trong tiếng Tây Ban Nha là «quedarse».' },
    'quitar':     { vi:'lấy đi, bỏ ra', warn:'Tiếng Pháp «quitter» là RỜI KHỎI. Rời khỏi ở đây là «irse».' },
    'largo':      { vi:'dài', warn:'Tiếng Pháp «large» là RỘNG. Rộng ở đây là «ancho».' },
    'subir':      { vi:'đi lên', warn:'Tiếng Pháp «subir» là CHỊU ĐỰNG. Nghĩa gần như ngược nhau.' },
    'demandar':   { vi:'kiện ra toà', warn:'Tiếng Pháp «demander» chỉ là HỎI. Hỏi ở đây là «preguntar».' },
    'atender':    { vi:'tiếp, phục vụ, chăm', warn:'Tiếng Pháp «attendre» là CHỜ. Chờ ở đây là «esperar».' },
    'constipado': { vi:'bị cảm lạnh', warn:'Tiếng Pháp «constipé» là TÁO BÓN. Nói nhầm ở hiệu thuốc thì phiền to.' },
    'embarazada': { vi:'có thai', warn:'Không phải «embarrassed» của tiếng Anh. Ngượng là «avergonzada».' },
    'éxito':      { vi:'thành công', warn:'Không phải lối ra. Lối ra là «salida».' },
    'suceso':     { vi:'vụ việc xảy ra', warn:'Không phải thành công. Thành công là «éxito».' },
    'realizar':   { vi:'thực hiện', warn:'Không phải «nhận ra». Nhận ra là «darse cuenta».' },
    'recordar':   { vi:'nhớ, nhắc nhớ', warn:'Không phải ghi âm. Ghi âm là «grabar».' },
    'ropa':       { vi:'quần áo', warn:'Không phải dây thừng. Dây là «cuerda».' },
    'sopa':       { vi:'món xúp', warn:'Không phải xà phòng. Xà phòng là «jabón».' },
    'fábrica':    { vi:'nhà máy', warn:'Không phải vải. Vải là «tela».' },
    'librería':   { vi:'hiệu sách', warn:'Không phải thư viện. Thư viện là «biblioteca».' },
    'sensible':   { vi:'nhạy cảm', warn:'Không phải «hợp lý». Hợp lý là «sensato».' },
    'pretender':  { vi:'toan tính, định làm', warn:'Không phải giả vờ. Giả vờ là «fingir».' },
    'molestar':   { vi:'làm phiền', warn:'Chỉ là làm phiền thôi — không mang nghĩa nặng như «molest» trong tiếng Anh.' },
    'introducir': { vi:'đưa vào, nhét vào', warn:'Giới thiệu người thì dùng «presentar», không dùng từ này.' },
    'discutir':   { vi:'tranh cãi', warn:'Nặng hơn «discuss» của tiếng Anh: thường là cãi nhau chứ không phải bàn bạc.' },
    'carpeta':    { vi:'cặp đựng hồ sơ', warn:'Không phải thảm. Thảm là «alfombra».' }
  }
}
};


/* Những từ mà mặt chữ gợi một gốc, còn lịch sử thật lại đi đường khác.
   Chặn hẳn còn hơn để bộ khớp tự tin dạy sai: «potage» là cái nồi của
   tiếng German chứ không phải posse, «empate» không dính gì tới πάθος. */
const LAT_NO_SPLIT = {
  fr: ['rhume','abonnement','abonner','potage','autonome','entretien','entreprise','apercevoir','personne','parfum','pourtant','souvent','toujours','sondage','carrefour','trottoir'],
  es: ['mientras','empate','empatar','acontecimiento','acontecer','reciente','recientemente','apenas','alrededor','entonces','tampoco','siquiera','despacho','bocadillo','carretera']
};

/* ============================================================
   BỘ PHÂN TÍCH
   ------------------------------------------------------------
   Nguyên tắc: chỉ trả kết quả khi PHỦ KÍN được cả từ bằng
   tiền tố + gốc + hậu tố có thật trong bảng. Không phủ kín
   được thì trả null, và mục từ sẽ không hiện phần cấu tạo.
   Thà im lặng còn hơn dạy người học một gốc không tồn tại.
   ============================================================ */
(function(){
  const R = LAT_ROOTS;
  /* œ và æ phải thành oe/ae TRƯỚC khi bỏ dấu; nếu không «cœur» teo lại
     thành «cur» rồi bị nhận nhầm sang gốc cura. */
  const norm = s => String(s || '').toLowerCase()
    .replace(/\u0153/g, 'oe').replace(/\u00e6/g, 'ae')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z]/g, '');

  /* Bảng tra ngược: dạng viết của gốc → khoá gốc. Dựng một lần. */
  const STEM = { fr:null, es:null };
  function stems(id){
    if (STEM[id]) return STEM[id];
    const m = new Map();
    for (const k of Object.keys(R.roots)){
      for (const s of (R.roots[k][id] || [])){
        const n = norm(s);
        if (n.length < 3) continue;
        /* Một thân có thể thuộc hai gốc khác hẳn nhau — «bell» vừa là
           bellus (đẹp) vừa là bellum (chiến tranh), «sol» vừa là solus
           (một mình) vừa là sol (mặt trời). Giữ cả danh sách rồi để mục
           từ nói rõ là có hai khả năng, chứ không tự chọn một cái. */
        if (!m.has(n)) m.set(n, [k]);
        else if (m.get(n).indexOf(k) < 0) m.get(n).push(k);
      }
    }
    /* Dài trước ngắn sau: «escrit» phải thắng «escrib» khi cả hai cùng khớp. */
    STEM[id] = { map:m, list:Array.from(m.keys()).sort((a, b) => b.length - a.length) };
    return STEM[id];
  }

  /* Các tiền tố / hậu tố có thể áp cho từ này, dài trước ngắn sau. */
  function preList(w){
    const out = [];
    for (const k of Object.keys(R.pre)){
      for (const f of R.pre[k].f){
        const n = norm(f);
        if (n && w.startsWith(n) && w.length - n.length >= 3) out.push({ k, n });
      }
    }
    return out.sort((a, b) => b.n.length - a.n.length);
  }
  function sufList(id, w){
    const out = [];
    for (const k of Object.keys(R.suf)){
      const arr = R.suf[k][id] || [];
      for (const f of arr){
        const n = norm(f);
        /* Hậu tố một chữ cái thì vô dụng: «é» bỏ dấu thành «e», mà chữ e
           đứng cuối thì từ nào chẳng có. Nhận nó vào là mọi phép tách đều
           lệch đi một nấc. */
        if (n && n.length >= 2 && w.endsWith(n) && w.length - n.length >= 3) out.push({ k, n });
      }
    }
    return out.sort((a, b) => b.n.length - a.n.length);
  }

  /* Khớp phần giữa. Cho thừa tối đa 2 chữ cái — đó là nguyên âm nối
     hoặc đuôi thân động từ, không đủ để thành một hình vị riêng. */
  function oneRoot(id, mid){
    if (mid.length < 3) return null;
    const S = stems(id);
    if (S.map.has(mid)){ const ks = S.map.get(mid); return { key:ks[0], alt:ks.slice(1), stem:mid, extra:'' }; }
    for (const s of S.list){
      if (s.length >= 3 && mid.startsWith(s) && mid.length - s.length <= 2){
        const ks = S.map.get(s);
        return { key:ks[0], alt:ks.slice(1), stem:s, extra:mid.slice(s.length) };
      }
    }
    return null;
  }

  /* Từ ghép hai gốc: maintenir = manus + tenere, manuscrit = manus +
     scribere. Không đỡ trường hợp này thì cả một lớp từ rất hay bị
     bỏ trắng, mà đây lại đúng là chỗ người học thích nhất. */
  function matchMid(id, mid){
    const one = oneRoot(id, mid);
    if (one && !one.extra) return { roots:[one], extra:'' };
    const S = stems(id);
    for (let i = mid.length - 3; i >= 3; i--){
      const head = mid.slice(0, i);
      if (!S.map.has(head)) continue;
      const tail = oneRoot(id, mid.slice(i));
      if (tail && tail.extra.length <= 1)
        return { roots:[{ key:S.map.get(head)[0], alt:S.map.get(head).slice(1), stem:head, extra:'' }, tail], extra:tail.extra };
    }
    return one ? { roots:[one], extra:one.extra } : null;
  }

  /* Trả về { pre:[], roots:[…], suf:[] } hoặc null. */
  function analyze(id, word){
    const w = norm(word);
    if (w.length < 4) return null;
    const raw = String(word).toLowerCase().trim();
    if ((LAT_NO_SPLIT[id] || []).some(x => x === raw || norm(x) === w)) return null;
    if (String(word).indexOf(' ') >= 0) return null;   /* cụm từ thì không tách */

    const PS = [{ k:null, n:'' }].concat(preList(w));
    const SS = [{ k:null, n:'' }].concat(sufList(id, w));
    let best = null;

    for (const p of PS){
      const afterPre = w.slice(p.n.length);
      const PS2 = [{ k:null, n:'' }].concat(
        p.k ? preList(afterPre).filter(x => x.n.length + 3 <= afterPre.length) : []);
      for (const p2 of PS2){
        const mid0 = afterPre.slice(p2.n.length);
        for (const s of SS){
          if (s.n.length >= mid0.length) continue;
          const mid = mid0.slice(0, mid0.length - s.n.length);
          const hit = matchMid(id, mid);
          if (!hit) continue;
          const stemLen = hit.roots.reduce((a, r) => a + r.stem.length, 0);
          /* Phần «extra» là chữ không hình vị nào giải thích được, nên phạt
             nặng nhất. Hậu tố dài được thưởng, nếu không thì «inscription»
             bị cắt thành in-script-i-on thay vì in-scrip-tion. */
          /* Ghép hai gốc là chuyện có thật (maintenir = manus + tenere) nhưng
             hiếm, nên phải trả giá: không phạt thì «chercher» bị bẻ thành
             cher + cher và «oportunidad» thành port + uni. */
          const score = stemLen * 10 + s.n.length * 6 + p.n.length * 4
                      - hit.extra.length * 8 - (p2.k ? 2 : 0)
                      - (hit.roots.length - 1) * 14;
          if (!best || score > best.score)
            best = { score, pre:[p, p2].filter(x => x.k), hit, suf:s.k ? [s] : [] };
        }
      }
    }
    if (!best) return null;
    const mk = r => Object.assign({ id:r.key, form:r.stem, extra:r.extra || '',
      alt:(r.alt || []).map(k => Object.assign({ id:k }, R.roots[k])) }, R.roots[r.key]);
    /* Chiều dài từng mảnh theo thứ tự trái sang phải, tính trên chuỗi ĐÃ bỏ
       dấu. Giao diện dùng nó để cắt lại từ chuỗi CÒN dấu — không thì mục từ
       bày ra «ecri» trong khi từ thật là «écri», trông như lỗi chính tả. */
    const lens = best.pre.map(x => x.n.length)
      .concat(best.hit.roots.map((r, i) => r.stem.length + (i === best.hit.roots.length - 1 ? (r.extra || '').length : 0)))
      .concat(best.suf.map(x => x.n.length));
    return {
      pre:  best.pre.map(x => ({ id:x.k, form:x.n, vi:R.pre[x.k].vi, la:R.pre[x.k].la, src:R.pre[x.k].src || 'la', note:R.pre[x.k].note })),
      lens,
      root: mk(best.hit.roots[0]),
      roots: best.hit.roots.map(mk),
      suf:  best.suf.map(x => ({ id:x.k, form:x.n, vi:R.suf[x.k].vi, pos:R.suf[x.k].pos, g:R.suf[x.k].g, note:R.suf[x.k].note }))
    };
  }

  function falseFriend(id, word){
    const t = String(word || '').toLowerCase().trim();
    const tbl = (R.ff && R.ff[id]) || {};
    if (tbl[t]) return tbl[t];
    const n = norm(t);
    for (const k of Object.keys(tbl)) if (norm(k) === n) return tbl[k];
    return null;
  }

  /* Cắt chuỗi gốc (còn dấu) theo các độ dài đo trên chuỗi đã bỏ dấu.
     Một chữ có dấu vẫn là một chữ sau khi bỏ dấu, nhưng œ thành hai — nên
     phải đi từng chữ mà đếm chứ không cắt thẳng theo chỉ số. */
  function segments(word, lens){
    const raw = String(word || '');
    const out = []; let i = 0, need = 0, k = 0, buf = '';
    for (const ch of raw){
      const n = norm(ch).length;
      if (n === 0){ buf += ch; continue; }          /* dấu nháy, gạch nối */
      while (k < lens.length && need === 0){ need = lens[k]; if (need === 0) { out.push(''); k++; } }
      if (k >= lens.length){ buf += ch; continue; }
      buf += ch; need -= n;
      if (need <= 0){ out.push(buf); buf = ''; need = 0; k++; }
    }
    if (buf) { if (out.length) out[out.length - 1] += buf; else out.push(buf); }
    while (out.length < lens.length) out.push('');
    return out;
  }

  R.segments = segments;
  R.norm = norm;
  R.analyze = analyze;
  R.falseFriend = falseFriend;
  R.rootOf = (id, w) => { const a = analyze(id, w); return a ? a.root.id : null; };
})();

if (typeof module !== 'undefined') module.exports = { LAT_ROOTS };
