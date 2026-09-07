/* ============================================================
   LangLab — TIẾNG NHẬT: bảng chữ Kana (Hiragana · Katakana), quy tắc phát âm.
   Nội dung tự soạn cho người Việt. Nét viết: hanzi-jp/<codepoint>.json (gói hanzi-writer-data-jp).
   Mỗi ô: h (hiragana), k (katakana), r (romaji Hepburn), row/col, hint (mẹo nhớ), ex [từ kana, romaji, nghĩa]
   ============================================================ */
const KANA_JA = {
  /* 46 chữ cơ bản (五十音) — theo hàng (a·ka·sa…), cột (a·i·u·e·o); null = ô trống trong bảng */
  rows: [
    { id:'a',  name:'あ行', items:[
      { h:'あ', k:'ア', r:'a',  hint:'Như chữ «a» viết tay có nét ngang đội mũ; ア là góc trên bên trái của 阿.', ex:['あさ','asa','buổi sáng'] },
      { h:'い', k:'イ', r:'i',  hint:'Hai nét như hai «lươn» song song (ii); イ là bộ nhân đứng 亻.', ex:['いぬ','inu','con chó'] },
      { h:'う', k:'ウ', r:'u',  hint:'Người cúi gập lưng kêu «ư»; ウ là mái nhà 宀 kêu «u».', ex:['うみ','umi','biển'] },
      { h:'え', k:'エ', r:'e',  hint:'Như hình vận động viên nhảy sào «ê»; エ là chữ 工 (công) — «ê, công việc».', ex:['えき','eki','nhà ga'] },
      { h:'お', k:'オ', r:'o',  hint:'Như chữ «お» có cái đuôi vòng — «ồ, cái đuôi»; オ giống 才.', ex:['おかね','okane','tiền'] } ] },
    { id:'ka', name:'か行', items:[
      { h:'か', k:'カ', r:'ka', hint:'Hình dáng cái «ca» có quai và nắp; カ là 力 (lực) — «ka-lực».', ex:['かさ','kasa','cái ô'] },
      { h:'き', k:'キ', r:'ki', hint:'Chìa «khoá» (key) hai gạch ngang; キ giống chìa khoá nữa.', ex:['きた','kita','phía bắc'] },
      { h:'く', k:'ク', r:'ku', hint:'Cái mỏ chim «cúc» mở ra; ク là ク của 久.', ex:['くるま','kuruma','ô tô'] },
      { h:'け', k:'ケ', r:'ke', hint:'Như chữ «け» = «kê» có cái chân; ケ giống chữ K nằm.', ex:['けさ','kesa','sáng nay'] },
      { h:'こ', k:'コ', r:'ko', hint:'Hai nét như «cô» đang cười (miệng hai đường); コ là góc vuông.', ex:['こども','kodomo','trẻ em'] } ] },
    { id:'sa', name:'さ行', items:[
      { h:'さ', k:'サ', r:'sa', hint:'Giống «sa» (cá) móc câu; サ giống 廿 — «sa-pa».', ex:['さかな','sakana','cá'] },
      { h:'し', k:'シ', r:'shi', hint:'Lưỡi câu thẳng «shi»; シ ba nét — hai chấm + nét hất lên (phân biệt ツ).', ex:['しお','shio','muối'] },
      { h:'す', k:'ス', r:'su', hint:'Vòng thắt nút «su»; ス như chữ 又 mở.', ex:['すし','sushi','sushi'] },
      { h:'せ', k:'セ', r:'se', hint:'Giống chữ 世; セ cũng từ 世 mà ra.', ex:['せんせい','sensei','giáo viên'] },
      { h:'そ', k:'ソ', r:'so', hint:'Đường zic-zac khâu vá «so»; ソ hai nét — chấm + nét dài (phân biệt ン).', ex:['そら','sora','bầu trời'] } ] },
    { id:'ta', name:'た行', items:[
      { h:'た', k:'タ', r:'ta', hint:'Nửa trái như «t», nửa phải như «a» → ta; タ là 夕 (tịch).', ex:['たまご','tamago','trứng'] },
      { h:'ち', k:'チ', r:'chi', hint:'Số 5 «chi» có ngạnh; チ giống 千 — «chi-thiên».', ex:['ちず','chizu','bản đồ'] },
      { h:'つ', k:'ツ', r:'tsu', hint:'Cơn sóng «tsunami»; ツ hai chấm nằm + nét cong (phân biệt シ).', ex:['つくえ','tsukue','cái bàn'] },
      { h:'て', k:'テ', r:'te', hint:'Bàn tay «te» (手) giơ ra; テ cũng giống 手 giản lược.', ex:['て','te','bàn tay'] },
      { h:'と', k:'ト', r:'to', hint:'Cái đinh «to» đóng vào; ト giống móng tay.', ex:['とけい','tokei','đồng hồ'] } ] },
    { id:'na', name:'な行', items:[
      { h:'な', k:'ナ', r:'na', hint:'Chữ có nút thắt bên dưới — «ná»; ナ là 十 bớt nét.', ex:['なつ','natsu','mùa hè'] },
      { h:'に', k:'ニ', r:'ni', hint:'Số 二 (ni) có thêm nét đứng; ニ chính là 二.', ex:['にく','niku','thịt'] },
      { h:'ぬ', k:'ヌ', r:'nu', hint:'Mì sợi «nu-dle» xoắn; ヌ như 又 có gạch.', ex:['ぬの','nuno','vải'] },
      { h:'ね', k:'ネ', r:'ne', hint:'Con mèo «ne-ko» cuộn đuôi; ネ là bộ 礻.', ex:['ねこ','neko','con mèo'] },
      { h:'の', k:'ノ', r:'no', hint:'Vòng tròn xoắn «no» (giống chữ の của「私の」); ノ một nét phẩy.', ex:['のみもの','nomimono','đồ uống'] } ] },
    { id:'ha', name:'は行', items:[
      { h:'は', k:'ハ', r:'ha', hint:'Như «ha» có nét đứng + vòng; ハ giống 八 — «ha-bát».', ex:['はな','hana','hoa'] },
      { h:'ひ', k:'ヒ', r:'hi', hint:'Nụ cười «hi hi»; ヒ giống 匕.', ex:['ひと','hito','người'] },
      { h:'ふ', k:'フ', r:'fu', hint:'Núi Phú Sĩ «Fu-ji» có mây; フ như cái móc.', ex:['ふゆ','fuyu','mùa đông'] },
      { h:'へ', k:'ヘ', r:'he', hint:'Mái nhà «hê» — hiragana và katakana giống nhau.', ex:['へや','heya','căn phòng'] },
      { h:'ほ', k:'ホ', r:'ho', hint:'Như は thêm nét ngang — «hộ»; ホ giống 木 bỏ nét.', ex:['ほん','hon','sách'] } ] },
    { id:'ma', name:'ま行', items:[
      { h:'ま', k:'マ', r:'ma', hint:'«Ma» hai gạch ngang + vòng; マ như mũi tên.', ex:['まど','mado','cửa sổ'] },
      { h:'み', k:'ミ', r:'mi', hint:'Số 21 → «mi» (mì); ミ ba gạch ngang xiên.', ex:['みず','mizu','nước'] },
      { h:'む', k:'ム', r:'mu', hint:'Con bò «mu» có sừng; ム giống 厶.', ex:['むし','mushi','côn trùng'] },
      { h:'め', k:'メ', r:'me', hint:'Con mắt «me» (目); メ dấu X.', ex:['め','me','mắt'] },
      { h:'も', k:'モ', r:'mo', hint:'Lưỡi câu «mồi» hai ngạnh; モ giống 毛 bỏ nét.', ex:['もの','mono','đồ vật'] } ] },
    { id:'ya', name:'や行', items:[
      { h:'や', k:'ヤ', r:'ya', hint:'Cái «ya-tch» thuyền buồm; ヤ tương tự.', ex:['やま','yama','núi'] },
      null,
      { h:'ゆ', k:'ユ', r:'yu', hint:'Con cá «yu» bơi qua vòng; ユ như chữ U vuông.', ex:['ゆき','yuki','tuyết'] },
      null,
      { h:'よ', k:'ヨ', r:'yo', hint:'«Yo» như chữ よ có móc; ヨ ba nét như chữ E ngược.', ex:['よる','yoru','đêm'] } ] },
    { id:'ra', name:'ら行', items:[
      { h:'ら', k:'ラ', r:'ra', hint:'«Ra» có chấm trên; ラ giống ラ của 良.', ex:['らいねん','rainen','năm sau'] },
      { h:'り', k:'リ', r:'ri', hint:'Hai nét như «ri-ban» buông xuống; リ giống bộ 刂.', ex:['りんご','ringo','táo'] },
      { h:'る', k:'ル', r:'ru', hint:'Như ろ thêm vòng cuối — «ru»; ル giống 儿.', ex:['るす','rusu','vắng nhà'] },
      { h:'れ', k:'レ', r:'re', hint:'Như ね không vòng — «re»; レ một nét gấp.', ex:['れきし','rekishi','lịch sử'] },
      { h:'ろ', k:'ロ', r:'ro', hint:'Số 3 «rô»; ロ là 口 (khẩu) — «rô-khẩu».', ex:['ろく','roku','số sáu'] } ] },
    { id:'wa', name:'わ行', items:[
      { h:'わ', k:'ワ', r:'wa', hint:'Như ね nhưng vòng mở — «wa»; ワ giống 冂.', ex:['わたし','watashi','tôi'] },
      null, null, null,
      { h:'を', k:'ヲ', r:'o (wo)', hint:'Chỉ dùng làm trợ từ tân ngữ; đọc là «o».', ex:['ほんをよむ','hon o yomu','đọc sách'] } ] },
    { id:'n', name:'ん', items:[
      { h:'ん', k:'ン', r:'n', hint:'Âm mũi đứng một mình; ン hai nét — chấm + nét hất (phân biệt ソ).', ex:['ほん','hon','sách'] },
      null, null, null, null ] }
  ],
  /* Âm đục (濁音) và bán đục (半濁音) */
  dakuten: [
    { id:'ga', name:'が行', items:[ ['が','ガ','ga','がっこう','gakkō','trường học'],['ぎ','ギ','gi','ぎんこう','ginkō','ngân hàng'],['ぐ','グ','gu','ぐんたい','guntai','quân đội'],['げ','ゲ','ge','げんき','genki','khoẻ'],['ご','ゴ','go','ごはん','gohan','cơm'] ] },
    { id:'za', name:'ざ行', items:[ ['ざ','ザ','za','ざっし','zasshi','tạp chí'],['じ','ジ','ji','じかん','jikan','thời gian'],['ず','ズ','zu','みず','mizu','nước'],['ぜ','ゼ','ze','ぜんぶ','zenbu','tất cả'],['ぞ','ゾ','zo','かぞく','kazoku','gia đình'] ] },
    { id:'da', name:'だ行', items:[ ['だ','ダ','da','だいがく','daigaku','đại học'],['ぢ','ヂ','ji','はなぢ','hanaji','chảy máu cam'],['づ','ヅ','zu','つづく','tsuzuku','tiếp tục'],['で','デ','de','でんわ','denwa','điện thoại'],['ど','ド','do','どようび','doyōbi','thứ Bảy'] ] },
    { id:'ba', name:'ば行', items:[ ['ば','バ','ba','かばん','kaban','cặp'],['び','ビ','bi','びょういん','byōin','bệnh viện'],['ぶ','ブ','bu','ぶんか','bunka','văn hoá'],['べ','ベ','be','べんきょう','benkyō','học'],['ぼ','ボ','bo','ぼうし','bōshi','mũ'] ] },
    { id:'pa', name:'ぱ行', items:[ ['ぱ','パ','pa','ぱん','pan','bánh mì'],['ぴ','ピ','pi','えんぴつ','enpitsu','bút chì'],['ぷ','プ','pu','てんぷら','tenpura','tempura'],['ぺ','ペ','pe','ぺん','pen','bút'],['ぽ','ポ','po','さんぽ','sanpo','đi dạo'] ] }
  ],
  /* Âm ghép (拗音): chữ hàng い + ゃゅょ nhỏ */
  yoon: [
    ['きゃ','キャ','kya','きゃく','kyaku','khách'],['きゅ','キュ','kyu','きゅう','kyū','số chín'],['きょ','キョ','kyo','きょう','kyō','hôm nay'],
    ['しゃ','シャ','sha','しゃしん','shashin','ảnh'],['しゅ','シュ','shu','しゅくだい','shukudai','bài tập'],['しょ','ショ','sho','しょくどう','shokudō','nhà ăn'],
    ['ちゃ','チャ','cha','おちゃ','ocha','trà'],['ちゅ','チュ','chu','ちゅうごく','chūgoku','Trung Quốc'],['ちょ','チョ','cho','ちょっと','chotto','một chút'],
    ['にゃ','ニャ','nya','こんにゃく','konnyaku','konnyaku'],['にゅ','ニュ','nyu','にゅうがく','nyūgaku','nhập học'],['にょ','ニョ','nyo','にょうぼう','nyōbō','vợ (cũ)'],
    ['ひゃ','ヒャ','hya','ひゃく','hyaku','một trăm'],['ひゅ','ヒュ','hyu','ヒューズ','hyūzu','cầu chì'],['ひょ','ヒョ','hyo','ひょう','hyō','bảng'],
    ['みゃ','ミャ','mya','みゃく','myaku','mạch'],['みゅ','ミュ','myu','ミュージック','myūjikku','âm nhạc'],['みょ','ミョ','myo','みょうじ','myōji','họ'],
    ['りゃ','リャ','rya','りゃくご','ryakugo','từ viết tắt'],['りゅ','リュ','ryu','りゅうがく','ryūgaku','du học'],['りょ','リョ','ryo','りょこう','ryokō','du lịch'],
    ['ぎゃ','ギャ','gya','ぎゃく','gyaku','ngược'],['ぎゅ','ギュ','gyu','ぎゅうにゅう','gyūnyū','sữa bò'],['ぎょ','ギョ','gyo','ぎょうざ','gyōza','há cảo'],
    ['じゃ','ジャ','ja','じゃあ','jā','vậy thì'],['じゅ','ジュ','ju','じゅぎょう','jugyō','giờ học'],['じょ','ジョ','jo','じょせい','josei','phụ nữ'],
    ['びゃ','ビャ','bya','さんびゃく','sanbyaku','ba trăm'],['びゅ','ビュ','byu','ビュッフェ','byuffe','buffet'],['びょ','ビョ','byo','びょうき','byōki','bệnh'],
    ['ぴゃ','ピャ','pya','ろっぴゃく','roppyaku','sáu trăm'],['ぴゅ','ピュ','pyu','ピュア','pyua','thuần khiết'],['ぴょ','ピョ','pyo','はっぴょう','happyō','phát biểu']
  ],
  /* Quy tắc phát âm & chính tả */
  rules: [
    { title:'Trường âm (長音) — kéo dài nguyên âm', desc:'Nguyên âm dài đọc gấp đôi độ dài và phân biệt nghĩa: おばさん (cô) ≠ おばあさん (bà). Hiragana: thêm あ/い/う; ええ hoặc えい (đọc «ê-ê»); おう hoặc おお (đọc «ô-ô»). Katakana dùng gạch dài ー.', ex:[['おばあさん','obāsan','bà'],['とうきょう','Tōkyō','Tokyo'],['コーヒー','kōhī','cà phê'],['せんせい','sensē','giáo viên']] },
    { title:'Âm ngắt (促音) — っ nhỏ', desc:'っ nhỏ không phát âm mà tạo một khoảng ngừng bằng một phách trước phụ âm sau: きて (đến) ≠ きって (tem). Romaji gấp đôi phụ âm.', ex:[['きって','kitte','tem'],['がっこう','gakkō','trường'],['ざっし','zasshi','tạp chí'],['ちょっと','chotto','một chút']] },
    { title:'Âm mũi ん — một phách riêng', desc:'ん chiếm trọn một phách, không bao giờ đứng đầu từ. Trước b/p/m nghe như «m» (しんぶん → shimbun), trước k/g như «ng», cuối từ như «N» mũi.', ex:[['しんぶん','shinbun','báo'],['にほん','nihon','Nhật Bản'],['おんな','onna','phụ nữ'],['てんき','tenki','thời tiết']] },
    { title:'Nguyên âm câm (無声化) — う, い bị nuốt', desc:'Giữa hai phụ âm vô thanh (k, s, t, h, p) hoặc cuối từ sau です/ます, う và い gần như không phát âm: です → «des», すき → «ski», した → «shta».', ex:[['です','desu','là'],['すき','suki','thích'],['ひと','hito','người'],['がくせい','gakusei','sinh viên']] },
    { title:'Trợ từ viết khác đọc khác', desc:'Ba trợ từ giữ chính tả cổ: は đọc «wa» (わたしは), へ đọc «e» (がっこうへ), を đọc «o» (ほんを). Trong từ thường vẫn đọc ha/he.', ex:[['わたしは','watashi wa','tôi thì'],['えきへ','eki e','đến ga'],['ほんを','hon o','(đọc) sách'],['こんにちは','konnichiwa','xin chào']] },
    { title:'Âm đục và bán đục', desc:'Hai chấm ゛(dakuten) biến k→g, s→z, t→d, h→b; vòng tròn ゜(handakuten) biến h→p. じ/ぢ và ず/づ đọc giống nhau; ぢ, づ chỉ xuất hiện trong từ ghép (はなぢ, つづく).', ex:[['かき→かぎ','kaki→kagi','quả hồng→chìa khoá'],['はし→ばし','hashi→bashi','đũa/cầu→…cầu (ghép)'],['ふん→ぷん','fun→pun','phút']] },
    { title:'Trọng âm cao–thấp (高低アクセント)', desc:'Tiếng Nhật không nhấn mạnh mà lên–xuống cao độ: はし (đũa: ha↑shi↓) ≠ はし (cầu: ha↓shi↑) ≠ はし (rìa). Mẫu Tokyo: âm tiết 1 và 2 luôn khác cao độ. Nghe nhiều và bắt chước cả câu.', ex:[['あめ (mưa) ↘','áme','mưa'],['あめ (kẹo) ↗','amé','kẹo'],['はし ↘','háshi','đũa'],['はし ↗','hashí','cầu']] },
    { title:'Katakana — từ ngoại lai và quy ước', desc:'Katakana dùng cho từ mượn (コーヒー), tên nước ngoài (ベトナム), tiếng động (ワンワン) và nhấn mạnh. Có thêm tổ hợp mở rộng: ティ ti, ディ di, ファ fa, フィ fi, フェ fe, フォ fo, ウィ wi, ヴ vu, シェ she, ジェ je, チェ che.', ex:[['ベトナム','Betonamu','Việt Nam'],['パーティー','pātī','tiệc'],['フォーク','fōku','cái nĩa'],['ハノイ','Hanoi','Hà Nội']] }
  ]
};
if (typeof module !== 'undefined') module.exports = { KANA_JA };
