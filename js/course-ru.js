/* ============================================================
   LangLab — TIẾNG NGA: bảng chữ cái, phát âm, khoá học A1–B2
   Nội dung tự soạn cho người Việt, bám khung ТРКИ (A1 ТЭУ · A2 ТБУ · B1 ТРКИ-1 · B2 ТРКИ-2)
   và trình tự của giáo trình «Дорога в Россию» (chỉ dùng làm khung, không sao chép).
   Trọng âm ghi bằng dấu sắc kết hợp (U+0301) sau nguyên âm: молоко́. Chữ ё luôn mang trọng âm.
   ============================================================ */

/* ---------- 33 chữ cái ---------- */
const ALPHABET_RU = [
  { up:'А', low:'а', name:'а',  ipa:'[a]',  type:'vowel', vi:'như “a” tiếng Việt; không trọng âm đọc ngắn hơn', ex:[['ма́ма','mẹ'],['да','vâng']], hw:'Viết như a la-tinh; a hoa thảo viết như A.' },
  { up:'Б', low:'б', name:'бэ', ipa:'[b]',  type:'cons',  vi:'như “b”', ex:[['брат','anh/em trai'],['хлеб','bánh mì (cuối từ đọc [p])']], hw:'б thường có nét “cờ” hướng lên phải, dễ nhầm với в.' },
  { up:'В', low:'в', name:'вэ', ipa:'[v]',  type:'cons',  vi:'như “v”; cuối từ hoặc trước phụ âm vô thanh → [f]', ex:[['вода́','nước'],['Москва́','Mát-xcơ-va']], hw:'в thường thảo viết như số 8 hở; không nhầm với B la-tinh.' },
  { up:'Г', low:'г', name:'гэ', ipa:'[g]',  type:'cons',  vi:'như “g” trong “gà”; cuối từ → [k]', ex:[['го́род','thành phố'],['друг','bạn (đọc [друк])']], hw:'г thảo giống chữ r la-tinh quay ngược; Г hoa như số 7.' },
  { up:'Д', low:'д', name:'дэ', ipa:'[d]',  type:'cons',  vi:'như “đ”; cuối từ → [t]', ex:[['дом','nhà'],['сад','vườn (đọc [сат])']], hw:'д thảo viết như g la-tinh (đuôi vòng xuống) hoặc như ∂.' },
  { up:'Е', low:'е', name:'е',  ipa:'[je]/[ʲe]', type:'vowel', vi:'“ie” ở đầu từ/sau nguyên âm; sau phụ âm làm phụ âm mềm + “e”; không trọng âm → gần [i]', ex:[['ест','ăn'],['сестра́','chị/em gái']], hw:'е thảo như e la-tinh.' },
  { up:'Ё', low:'ё', name:'ё',  ipa:'[jo]/[ʲo]', type:'vowel', vi:'“io”; luôn mang trọng âm; sách báo thường viết е thay ё', ex:[['ёлка','cây thông'],['тётя','cô, dì']], hw:'Như е có hai chấm trên.' },
  { up:'Ж', low:'ж', name:'жэ', ipa:'[ʐ]',  type:'cons',  vi:'“gi” đọc nặng, cong lưỡi (như “j” tiếng Pháp); luôn cứng; cuối từ → [ш]', ex:[['жена́','vợ'],['журна́л','tạp chí']], hw:'ж thảo là ba nét: một vòng trái, gạch giữa, một vòng phải.' },
  { up:'З', low:'з', name:'зэ', ipa:'[z]',  type:'cons',  vi:'như “d” giọng Bắc (dạ); cuối từ → [s]', ex:[['зима́','mùa đông'],['газе́та','báo']], hw:'з thảo viết như số 3.' },
  { up:'И', low:'и', name:'и',  ipa:'[i]',  type:'vowel', vi:'như “i”; sau ж ш ц đọc như ы', ex:[['и','và'],['кни́га','sách']], hw:'и thảo viết như u la-tinh — điểm dễ nhầm nhất khi đọc chữ tay.' },
  { up:'Й', low:'й', name:'и кра́ткое', ipa:'[j]', type:'cons', vi:'“i ngắn”, như “y” trong “yêu”; chỉ đứng sau nguyên âm hoặc đầu từ nước ngoài', ex:[['чай','trà'],['музе́й','bảo tàng']], hw:'Như и có dấu ngoặc nhỏ trên.' },
  { up:'К', low:'к', name:'ка', ipa:'[k]',  type:'cons',  vi:'như “c/k”, không bật hơi', ex:[['кот','mèo'],['кто','ai']], hw:'к thảo viết thấp bằng chữ thường, không cao như k la-tinh.' },
  { up:'Л', low:'л', name:'эль', ipa:'[l]', type:'cons',  vi:'như “l”; л cứng đọc trầm, lưỡi lùi', ex:[['ло́жка','thìa'],['стол','bàn']], hw:'л thảo bắt đầu bằng móc nhỏ ở dưới (giống ʌ có móc); Л hoa cũng vậy.' },
  { up:'М', low:'м', name:'эм', ipa:'[m]',  type:'cons',  vi:'như “m”', ex:[['ма́ма','mẹ'],['мир','hoà bình, thế giới']], hw:'м thảo bắt đầu bằng móc nhỏ, giống л có thêm một sườn.' },
  { up:'Н', low:'н', name:'эн', ipa:'[n]',  type:'cons',  vi:'như “n”', ex:[['нет','không'],['но́вый','mới']], hw:'н thảo viết như n la-tinh có gạch ngang giữa (giống H nhỏ).' },
  { up:'О', low:'о', name:'о',  ipa:'[o]',  type:'vowel', vi:'có trọng âm: “ô” tròn môi; không trọng âm: đọc như [a] (молоко́ → малако́)', ex:[['он','anh ấy'],['молоко́','sữa']], hw:'Như o la-tinh.' },
  { up:'П', low:'п', name:'пэ', ipa:'[p]',  type:'cons',  vi:'như “p” không bật hơi', ex:[['па́па','bố'],['по́чта','bưu điện']], hw:'п thảo viết như n la-tinh (không gạch ngang) — đừng nhầm với н.' },
  { up:'Р', low:'р', name:'эр', ipa:'[r]',  type:'cons',  vi:'“r” rung đầu lưỡi (rung rõ, nhiều lần)', ex:[['ры́ба','cá'],['ру́сский','Nga; người Nga']], hw:'р thảo viết như p la-tinh có đuôi dài xuống dưới.' },
  { up:'С', low:'с', name:'эс', ipa:'[s]',  type:'cons',  vi:'như “x” tiếng Việt (không phải “c”)', ex:[['сын','con trai'],['спаси́бо','cảm ơn']], hw:'Như c la-tinh.' },
  { up:'Т', low:'т', name:'тэ', ipa:'[t]',  type:'cons',  vi:'như “t” không bật hơi', ex:[['там','ở đó'],['тётя','cô, dì']], hw:'т thảo viết như m la-tinh (ba chân) — điểm dễ nhầm với м; đôi khi có gạch ngang trên để phân biệt.' },
  { up:'У', low:'у', name:'у',  ipa:'[u]',  type:'vowel', vi:'như “u”, chu môi', ex:[['у́тро','buổi sáng'],['друг','bạn']], hw:'у thảo như y la-tinh.' },
  { up:'Ф', low:'ф', name:'эф', ipa:'[f]',  type:'cons',  vi:'như “ph”', ex:[['фильм','phim'],['телефо́н','điện thoại']], hw:'ф thảo là vòng tròn có nét dọc xuyên qua, cao trên và dài dưới.' },
  { up:'Х', low:'х', name:'ха', ipa:'[x]',  type:'cons',  vi:'như “kh” tiếng Việt', ex:[['хлеб','bánh mì'],['хорошо́','tốt']], hw:'Như x la-tinh.' },
  { up:'Ц', low:'ц', name:'цэ', ipa:'[ts]', type:'cons',  vi:'“ts” — đọc liền t+x; luôn cứng', ex:[['центр','trung tâm'],['у́лица','đường phố']], hw:'ц thảo như u có đuôi móc nhỏ ở góc phải dưới.' },
  { up:'Ч', low:'ч', name:'че', ipa:'[tɕ]', type:'cons',  vi:'như “ch” nhưng mềm hơn; luôn mềm', ex:[['час','giờ'],['чай','trà']], hw:'ч thảo như số 4 không khép, hoặc như y không đuôi.' },
  { up:'Ш', low:'ш', name:'ша', ipa:'[ʂ]',  type:'cons',  vi:'“s” nặng, cong lưỡi; luôn cứng', ex:[['шко́ла','trường học'],['хорошо́','tốt']], hw:'ш thảo như w la-tinh có ba chân; thường gạch dưới để khỏi nhầm với и/м.' },
  { up:'Щ', low:'щ', name:'ща', ipa:'[ɕː]', type:'cons',  vi:'“s” mềm, kéo dài (như “sh” nhẹ); luôn mềm', ex:[['щи','canh bắp cải'],['борщ','súp củ dền']], hw:'Như ш có đuôi móc nhỏ ở góc phải dưới.' },
  { up:'Ъ', low:'ъ', name:'твёрдый знак', ipa:'—', type:'sign', vi:'dấu cứng: ngăn cách, giữ phụ âm trước cứng, nguyên âm sau đọc [j…]', ex:[['подъе́зд','lối vào'],['объясня́ть','giải thích']], hw:'Hiếm gặp; giống ь có nét “cờ” trên.' },
  { up:'Ы', low:'ы', name:'ы',  ipa:'[ɨ]',  type:'vowel', vi:'gần “ư” tiếng Việt nhưng lưỡi lùi hơn; không đứng đầu từ', ex:[['мы','chúng tôi'],['сын','con trai']], hw:'Viết như ь + i không chấm (hai phần liền nhau).' },
  { up:'Ь', low:'ь', name:'мя́гкий знак', ipa:'—', type:'sign', vi:'dấu mềm: làm mềm phụ âm đứng trước (đầu lưỡi nâng lên vòm)', ex:[['мать','mẹ'],['семья́','gia đình']], hw:'Như b nhỏ không có nét cao.' },
  { up:'Э', low:'э', name:'э',  ipa:'[e]',  type:'vowel', vi:'như “e” tiếng Việt, không mềm hoá phụ âm', ex:[['э́то','đây là'],['экза́мен','kỳ thi']], hw:'Như số 3 lật ngược có gạch giữa.' },
  { up:'Ю', low:'ю', name:'ю',  ipa:'[ju]/[ʲu]', type:'vowel', vi:'“iu”; sau phụ âm làm mềm phụ âm + “u”', ex:[['юг','phía nam'],['люблю́','tôi yêu']], hw:'Viết như ı nối với o bằng nét ngang ngắn.' },
  { up:'Я', low:'я', name:'я',  ipa:'[ja]/[ʲa]', type:'vowel', vi:'“ia”; sau phụ âm làm mềm phụ âm + “a”; không trọng âm → gần [i]', ex:[['я','tôi'],['язы́к','ngôn ngữ, lưỡi']], hw:'я thảo giống chữ a có móc bên trái (như ᴙ mềm).' }
];

/* ---------- Quy tắc phát âm ---------- */
const PHON_RU = [
  { title:'Trọng âm (ударе́ние)', desc:'Mỗi từ có một âm tiết đọc mạnh và dài hơn. Trọng âm không cố định, phải học cùng từ; đặt sai trọng âm có thể đổi nghĩa. Chữ ё luôn mang trọng âm.',
    ex:[['за́мок — замо́к','lâu đài — ổ khoá'],['му́ка — мука́','nỗi khổ — bột mì'],['пи́сать — писа́ть','(thô tục) — viết']] },
  { title:'Giảm âm nguyên âm không trọng âm', desc:'о không trọng âm đọc như [a] ngắn; е, я không trọng âm đọc gần [i]. Vì thế Москва́ nghe như «Maskva», хорошо́ như «kharasho».',
    ex:[['молоко́ → [малако́]','sữa'],['сестра́ → [систра́]','chị/em gái'],['язы́к → [йизы́к]','ngôn ngữ']] },
  { title:'Vô thanh hoá cuối từ', desc:'Phụ âm hữu thanh б в г д ж з đứng cuối từ đọc thành п ф к т ш с.',
    ex:[['хлеб → [хлеп]','bánh mì'],['друг → [друк]','bạn'],['нож → [нош]','dao'],['зуб → [зуп]','răng']] },
  { title:'Đồng hoá phụ âm', desc:'Trong cụm phụ âm, âm sau quyết định: hữu thanh + vô thanh → cả cụm vô thanh và ngược lại.',
    ex:[['вто́рник → [фто́рник]','thứ Ba'],['сде́лать → [зде́лать]','làm xong'],['вокза́л → [вагза́л]','nhà ga']] },
  { title:'Phụ âm cứng và mềm', desc:'Nguyên âm е ё и ю я và dấu ь làm mềm phụ âm đứng trước (đầu lưỡi nâng lên vòm). ж ш ц luôn cứng; ч щ й luôn mềm.',
    ex:[['мат — мать','chiếu — mẹ'],['брат — брать','anh — lấy'],['у́гол — у́голь','góc — than']] },
  { title:'Dấu mềm ь và dấu cứng ъ', desc:'ь mềm hoá phụ âm hoặc ngăn cách (семья́ đọc [сим-йа́]); ъ chỉ ngăn cách sau tiền tố, nguyên âm sau đọc có [й].',
    ex:[['семья́','gia đình'],['подъе́зд','lối vào chung cư'],['объявле́ние','thông báo']] },
  { title:'Những cụm đọc khác cách viết', desc:'Đuôi -ого/-его đọc [-ова/-ева]; что đọc [што]; -тся/-ться đọc [ца]; một số phụ âm câm.',
    ex:[['сего́дня → [сиво́дня]','hôm nay'],['что → [што]','cái gì'],['учи́ться → [учи́ца]','học'],['здра́вствуйте → [здра́ствуйте]','xin chào (в câm)'],['со́лнце → [со́нце]','mặt trời (л câm)']] },
  { title:'Ngữ điệu cơ bản (ИК)', desc:'ИК-1: câu kể, hạ giọng cuối. ИК-2: câu hỏi có từ để hỏi (кто, где…), nhấn mạnh từ để hỏi. ИК-3: câu hỏi không có từ để hỏi — lên giọng mạnh ở từ muốn hỏi rồi hạ xuống.',
    ex:[['Э́то Анто́н. ↘','Đây là Anton. (ИК-1)'],['Кто э́то? ↘','Đây là ai? (ИК-2)'],['Э́то Анто́н? ↗↘','Đây là Anton à? (ИК-3)']] }
];

/* ---------- Khoá học ---------- */
const COURSE_RU = {
  levels:[
    { id:'a1', ru:'A1 · ТЭУ',    vi:'A1 · Sơ cấp (Элементарный)', lessons:15, status:'active' },
    { id:'a2', ru:'A2 · ТБУ',    vi:'A2 · Cơ bản (Базовый)',      lessons:15, status:'active' },
    { id:'b1', ru:'B1 · ТРКИ-1', vi:'B1 · Trung cấp 1',           lessons:15, status:'planned' },
    { id:'b2', ru:'B2 · ТРКИ-2', vi:'B2 · Trung cấp 2',           lessons:15, status:'planned' }
  ],
  lessons:[

    /* ================= A1 ================= */
    {
      level:'a1', no:1, ru:'Знако́мство', vi:'Làm quen',
      skill:'Chào hỏi, giới thiệu tên; hỏi “đây là ai/cái gì?”',
      grammar:[
        { form:'Э́то + N. / Кто э́то? / Что э́то?', vi:'“Đây là …” — câu không cần động từ “là”',
          note:'Tiếng Nga hiện tại không dùng động từ “là”: Э́то Анто́н = Đây là Anton. Кто hỏi người, что hỏi vật. Tên riêng viết hoa.',
          ex:{ ru:'Э́то Анна, а э́то Ива́н.', vi:'Đây là Anna, còn đây là Ivan.' } },
        { form:'Меня́ зову́т … / Как вас зову́т?', vi:'“Tôi tên là …” / “Bạn tên gì?”',
          note:'Nghĩa đen “người ta gọi tôi là …”. Thân mật: Как тебя́ зову́т? Đáp lễ: О́чень прия́тно (rất hân hạnh).',
          ex:{ ru:'— Как вас зову́т? — Меня́ зову́т Хиен. О́чень прия́тно!', vi:'— Bạn tên gì? — Tôi tên là Hiển. Rất hân hạnh!' } }
      ],
      vocab:[
        { ru:'здра́вствуйте', vi:'xin chào (lịch sự)', pos:'thán từ' },
        { ru:'приве́т', vi:'chào (thân mật)', pos:'thán từ' },
        { ru:'до свида́ния', vi:'tạm biệt', pos:'cụm cố định' },
        { ru:'пока́', vi:'tạm biệt (thân mật)', pos:'thán từ' },
        { ru:'спаси́бо', vi:'cảm ơn', pos:'thán từ' },
        { ru:'пожа́луйста', vi:'làm ơn; không có gì', pos:'tiểu từ' },
        { ru:'да', vi:'vâng, có', pos:'tiểu từ' },
        { ru:'нет', vi:'không', pos:'tiểu từ' },
        { ru:'э́то', vi:'đây là, cái này', pos:'đại từ' },
        { ru:'кто', vi:'ai', pos:'đại từ nghi vấn' },
        { ru:'что', vi:'cái gì', pos:'đại từ nghi vấn' },
        { ru:'студе́нт', vi:'sinh viên (nam)', pos:'danh từ giống đực' },
        { ru:'студе́нтка', vi:'sinh viên (nữ)', pos:'danh từ giống cái' },
        { ru:'преподава́тель', vi:'giảng viên', pos:'danh từ giống đực' },
        { ru:'о́чень прия́тно', vi:'rất hân hạnh', pos:'cụm cố định' }
      ],
      dialogue:[
        { sp:'A', ru:'Здра́вствуйте! Меня́ зову́т Анна. А как вас зову́т?', vi:'Xin chào! Tôi tên là Anna. Còn bạn tên gì?' },
        { sp:'B', ru:'Меня́ зову́т Хиен. О́чень прия́тно.', vi:'Tôi tên là Hiển. Rất hân hạnh.' },
        { sp:'A', ru:'О́чень прия́тно. Хиен, кто э́то?', vi:'Rất hân hạnh. Hiển, đây là ai?' },
        { sp:'B', ru:'Э́то Ива́н. Он студе́нт. А э́то преподава́тель.', vi:'Đây là Ivan. Anh ấy là sinh viên. Còn đây là giảng viên.' }
      ]
    },

    {
      level:'a1', no:2, ru:'Моя́ семья́', vi:'Gia đình tôi',
      skill:'Giống của danh từ; đại từ sở hữu; “tôi có …”',
      grammar:[
        { form:'Giống danh từ: -∅/-й/-ь (đực) · -а/-я (cái) · -о/-е (trung)', vi:'3 giống quyết định mọi hoà hợp',
          note:'Nhìn chữ cuối: стол, музе́й (đực); ма́ма, семья́ (cái); окно́, мо́ре (trung). Từ tận cùng -ь phải tra: день (đực), ночь (cái). Ngoại lệ: па́па, де́душка là giống đực dù tận -а.',
          ex:{ ru:'Э́то мой брат, моя́ сестра́ и моё окно́.', vi:'Đây là anh tôi, chị tôi và cửa sổ của tôi.' } },
        { form:'мой / моя́ / моё / мои́ · твой · наш · ваш · его́ / её / их', vi:'đại từ sở hữu hoà hợp theo giống, số',
          note:'его́ (của anh ấy), её (của cô ấy), их (của họ) không đổi dạng. У меня́ есть + N = tôi có ….',
          ex:{ ru:'У меня́ есть брат. Его́ зову́т Минь.', vi:'Tôi có một em trai. Em ấy tên là Minh.' } }
      ],
      vocab:[
        { ru:'семья́', vi:'gia đình', pos:'danh từ giống cái' },
        { ru:'ма́ма', vi:'mẹ', pos:'danh từ giống cái' },
        { ru:'па́па', vi:'bố', pos:'danh từ giống đực' },
        { ru:'роди́тели', vi:'bố mẹ', pos:'danh từ số nhiều' },
        { ru:'брат', vi:'anh/em trai', pos:'danh từ giống đực' },
        { ru:'сестра́', vi:'chị/em gái', pos:'danh từ giống cái' },
        { ru:'сын', vi:'con trai', pos:'danh từ giống đực' },
        { ru:'дочь', vi:'con gái', pos:'danh từ giống cái' },
        { ru:'де́душка', vi:'ông', pos:'danh từ giống đực' },
        { ru:'ба́бушка', vi:'bà', pos:'danh từ giống cái' },
        { ru:'муж', vi:'chồng', pos:'danh từ giống đực' },
        { ru:'жена́', vi:'vợ', pos:'danh từ giống cái' },
        { ru:'ребёнок', vi:'đứa trẻ, con', pos:'danh từ giống đực' },
        { ru:'у меня́ есть', vi:'tôi có', pos:'cụm cố định' },
        { ru:'фотогра́фия', vi:'bức ảnh', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, э́то твоя́ семья́?', vi:'Hiển, đây là gia đình cậu à?' },
        { sp:'B', ru:'Да, э́то моя́ семья́. Э́то мой па́па, а э́то моя́ ма́ма.', vi:'Ừ, đây là gia đình mình. Đây là bố mình, còn đây là mẹ mình.' },
        { sp:'A', ru:'А кто э́то? Твой брат?', vi:'Còn đây là ai? Em trai cậu à?' },
        { sp:'B', ru:'Нет, э́то моя́ сестра́. Её зову́т Лан. У меня́ есть ещё мла́дший брат.', vi:'Không, đây là em gái mình. Em ấy tên Lan. Mình còn có một em trai nữa.' }
      ]
    },

    {
      level:'a1', no:3, ru:'Числа и во́зраст', vi:'Số đếm và tuổi',
      skill:'Đếm 1–100; hỏi tuổi; год / го́да / лет',
      grammar:[
        { form:'Số đếm: оди́н, два, три … де́сять; 11–19: -надцать; 20, 30 …; 100 сто', vi:'cấu tạo số',
          note:'11 оди́ннадцать … 19 девятна́дцать; 20 два́дцать, 30 три́дцать, 40 со́рок, 50 пятьдеся́т, 90 девяно́сто. Ghép: два́дцать пять = 25. оди́н/одна́/одно́ và два/две đổi theo giống.',
          ex:{ ru:'Оди́н, два, три, четы́ре, пять — два́дцать оди́н, три́дцать две.', vi:'1, 2, 3, 4, 5 — 21, 32.' } },
        { form:'Ско́лько вам лет? — Мне … год / го́да / лет.', vi:'hỏi và nói tuổi (đại từ ở cách 3)',
          note:'1, 21, 31… + год; 2–4, 22–24… + го́да; 5–20, 25–30… + лет. Мне (tôi), тебе́, ему́, ей, нам, вам, им.',
          ex:{ ru:'— Ско́лько тебе́ лет? — Мне два́дцать два го́да. А бра́ту де́сять лет.', vi:'— Cậu bao nhiêu tuổi? — Mình 22 tuổi. Còn em trai 10 tuổi.' } }
      ],
      vocab:[
        { ru:'оди́н', vi:'một', pos:'số từ' },
        { ru:'два', vi:'hai', pos:'số từ' },
        { ru:'три', vi:'ba', pos:'số từ' },
        { ru:'четы́ре', vi:'bốn', pos:'số từ' },
        { ru:'пять', vi:'năm', pos:'số từ' },
        { ru:'шесть', vi:'sáu', pos:'số từ' },
        { ru:'семь', vi:'bảy', pos:'số từ' },
        { ru:'во́семь', vi:'tám', pos:'số từ' },
        { ru:'де́вять', vi:'chín', pos:'số từ' },
        { ru:'де́сять', vi:'mười', pos:'số từ' },
        { ru:'два́дцать', vi:'hai mươi', pos:'số từ' },
        { ru:'сто', vi:'một trăm', pos:'số từ' },
        { ru:'год', vi:'năm (tuổi, thời gian)', pos:'danh từ giống đực' },
        { ru:'ско́лько', vi:'bao nhiêu', pos:'đại từ nghi vấn' },
        { ru:'во́зраст', vi:'tuổi tác', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Ско́лько тебе́ лет, Хиен?', vi:'Hiển, cậu bao nhiêu tuổi?' },
        { sp:'B', ru:'Мне два́дцать три го́да. А тебе́?', vi:'Mình 23 tuổi. Còn cậu?' },
        { sp:'A', ru:'Мне девятна́дцать лет. А ско́лько лет твоему́ бра́ту?', vi:'Mình 19 tuổi. Còn em trai cậu bao nhiêu tuổi?' },
        { sp:'B', ru:'Ему́ оди́ннадцать лет. Он ещё шко́льник.', vi:'Em ấy 11 tuổi. Em ấy vẫn là học sinh.' }
      ]
    },

    {
      level:'a1', no:4, ru:'Мой день', vi:'Một ngày của tôi',
      skill:'Động từ nhóm I thì hiện tại; trạng từ tần suất',
      grammar:[
        { form:'Nhóm I (-ать/-ять): я чита́-ю, ты чита́-ешь, он чита́-ет, мы чита́-ем, вы чита́-ете, они́ чита́-ют', vi:'chia động từ nhóm I',
          note:'Bỏ -ть, thêm đuôi -ю/-ешь/-ет/-ем/-ете/-ют. Cùng mẫu: рабо́тать, знать, де́лать, гуля́ть, за́втракать, слу́шать, изуча́ть.',
          ex:{ ru:'Я рабо́таю, а ты отдыха́ешь. Мы изуча́ем ру́сский язы́к.', vi:'Tôi làm việc, còn bạn nghỉ ngơi. Chúng tôi học tiếng Nga.' } },
        { form:'всегда́ · обы́чно · ча́сто · иногда́ · ре́дко · никогда́ не', vi:'trạng từ tần suất đứng trước động từ',
          note:'Phủ định: я никогда́ не за́втракаю (không bao giờ ăn sáng) — tiếng Nga dùng hai lần phủ định.',
          ex:{ ru:'У́тром я обы́чно за́втракаю до́ма, а ве́чером ча́сто гуля́ю.', vi:'Buổi sáng tôi thường ăn sáng ở nhà, còn buổi tối thường đi dạo.' } }
      ],
      vocab:[
        { ru:'чита́ть', vi:'đọc', pos:'động từ NSV' },
        { ru:'рабо́тать', vi:'làm việc', pos:'động từ NSV' },
        { ru:'знать', vi:'biết', pos:'động từ NSV' },
        { ru:'де́лать', vi:'làm', pos:'động từ NSV' },
        { ru:'гуля́ть', vi:'đi dạo', pos:'động từ NSV' },
        { ru:'за́втракать', vi:'ăn sáng', pos:'động từ NSV' },
        { ru:'обе́дать', vi:'ăn trưa', pos:'động từ NSV' },
        { ru:'у́жинать', vi:'ăn tối', pos:'động từ NSV' },
        { ru:'слу́шать', vi:'nghe', pos:'động từ NSV' },
        { ru:'отдыха́ть', vi:'nghỉ ngơi', pos:'động từ NSV' },
        { ru:'у́тром', vi:'vào buổi sáng', pos:'trạng từ' },
        { ru:'днём', vi:'vào ban ngày', pos:'trạng từ' },
        { ru:'ве́чером', vi:'vào buổi tối', pos:'trạng từ' },
        { ru:'обы́чно', vi:'thường', pos:'trạng từ' },
        { ru:'иногда́', vi:'đôi khi', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Что ты обы́чно де́лаешь у́тром?', vi:'Buổi sáng cậu thường làm gì?' },
        { sp:'B', ru:'У́тром я за́втракаю и слу́шаю ра́дио. Пото́м я рабо́таю.', vi:'Buổi sáng mình ăn sáng và nghe đài. Sau đó mình làm việc.' },
        { sp:'A', ru:'А ве́чером?', vi:'Còn buổi tối?' },
        { sp:'B', ru:'Ве́чером я гуля́ю и чита́ю. Иногда́ я отдыха́ю до́ма.', vi:'Buổi tối mình đi dạo và đọc sách. Đôi khi mình nghỉ ở nhà.' }
      ]
    },

    {
      level:'a1', no:5, ru:'Что вы лю́бите де́лать?', vi:'Bạn thích làm gì?',
      skill:'Động từ nhóm II; люби́ть + động từ nguyên thể; хоте́ть',
      grammar:[
        { form:'Nhóm II (-ить/-еть): говор-ю́, говор-и́шь, говор-и́т, говор-и́м, говор-и́те, говор-я́т', vi:'chia động từ nhóm II',
          note:'Đuôi -ю/-ишь/-ит/-им/-ите/-ят. Cùng mẫu: смотре́ть, учи́ть, звони́ть. люби́ть có л xen ở ngôi tôi: я люблю́.',
          ex:{ ru:'Я говорю́ по-ру́сски, а она́ говори́т по-вьетна́мски.', vi:'Tôi nói tiếng Nga, còn cô ấy nói tiếng Việt.' } },
        { form:'люби́ть / хоте́ть + động từ nguyên thể', vi:'“thích / muốn làm gì”',
          note:'хоте́ть chia đặc biệt: хочу́, хо́чешь, хо́чет, хоти́м, хоти́те, хотя́т. Sau люби́ть có thể là danh từ cách 4: я люблю́ му́зыку.',
          ex:{ ru:'Я люблю́ смотре́ть фи́льмы, но сего́дня я хочу́ спать.', vi:'Tôi thích xem phim, nhưng hôm nay tôi muốn ngủ.' } }
      ],
      vocab:[
        { ru:'говори́ть', vi:'nói', pos:'động từ NSV' },
        { ru:'смотре́ть', vi:'xem, nhìn', pos:'động từ NSV' },
        { ru:'люби́ть', vi:'yêu, thích', pos:'động từ NSV' },
        { ru:'хоте́ть', vi:'muốn', pos:'động từ NSV' },
        { ru:'учи́ть', vi:'học (thuộc), dạy', pos:'động từ NSV' },
        { ru:'спать', vi:'ngủ', pos:'động từ NSV' },
        { ru:'звони́ть', vi:'gọi điện', pos:'động từ NSV' },
        { ru:'фильм', vi:'phim', pos:'danh từ giống đực' },
        { ru:'му́зыка', vi:'âm nhạc', pos:'danh từ giống cái' },
        { ru:'спорт', vi:'thể thao', pos:'danh từ giống đực' },
        { ru:'по-ру́сски', vi:'bằng tiếng Nga', pos:'trạng từ' },
        { ru:'по-вьетна́мски', vi:'bằng tiếng Việt', pos:'trạng từ' },
        { ru:'но', vi:'nhưng', pos:'liên từ' },
        { ru:'то́же', vi:'cũng', pos:'trạng từ' },
        { ru:'сего́дня', vi:'hôm nay', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, ты лю́бишь спорт?', vi:'Hiển, cậu thích thể thao không?' },
        { sp:'B', ru:'Да, о́чень. Я люблю́ футбо́л. А ты что лю́бишь де́лать?', vi:'Có, rất thích. Mình thích bóng đá. Còn cậu thích làm gì?' },
        { sp:'A', ru:'Я люблю́ слу́шать му́зыку и смотре́ть фи́льмы.', vi:'Mình thích nghe nhạc và xem phim.' },
        { sp:'B', ru:'Я то́же. Ты хо́чешь смотре́ть фильм сего́дня ве́чером?', vi:'Mình cũng vậy. Tối nay cậu muốn xem phim không?' },
        { sp:'A', ru:'Хочу́! Но я не говорю́ по-ру́сски хорошо́…', vi:'Muốn chứ! Nhưng mình nói tiếng Nga chưa tốt…' }
      ]
    },

    {
      level:'a1', no:6, ru:'Где вы живёте?', vi:'Bạn sống ở đâu?',
      skill:'Cách 6 (giới cách) chỉ nơi chốn với в/на; động từ жить',
      grammar:[
        { form:'Где? → в/на + cách 6: -е (в го́роде, на у́лице, в Москве́); -ии → -ии (в Росси́и); -ь → -и (в тетра́ди)', vi:'nơi chốn tĩnh',
          note:'в = trong (không gian kín, nước, thành phố); на = trên/tại (sự kiện, đảo, у́лица, по́чта, вокза́л, рабо́та, факульте́т). Số nhiều: -ах/-ях.',
          ex:{ ru:'Я живу́ в Хано́е, а мой друг живёт на Сахали́не.', vi:'Tôi sống ở Hà Nội, còn bạn tôi sống trên đảo Sakhalin.' } },
        { form:'жить: живу́, живёшь, живёт, живём, живёте, живу́т', vi:'động từ “sống” (nhóm I, gốc đổi)',
          note:'Trọng âm ở đuôi nên е viết thành ё. Hỏi: Где вы живёте? Đáp: Я живу́ в … (cách 6).',
          ex:{ ru:'— Где вы живёте? — Мы живём в общежи́тии на второ́м этаже́.', vi:'— Bạn sống ở đâu? — Chúng tôi sống ở ký túc xá, tầng hai.' } }
      ],
      vocab:[
        { ru:'жить', vi:'sống', pos:'động từ NSV' },
        { ru:'где', vi:'ở đâu', pos:'trạng từ nghi vấn' },
        { ru:'го́род', vi:'thành phố', pos:'danh từ giống đực' },
        { ru:'страна́', vi:'đất nước', pos:'danh từ giống cái' },
        { ru:'у́лица', vi:'đường phố', pos:'danh từ giống cái' },
        { ru:'дом', vi:'nhà', pos:'danh từ giống đực' },
        { ru:'кварти́ра', vi:'căn hộ', pos:'danh từ giống cái' },
        { ru:'ко́мната', vi:'phòng', pos:'danh từ giống cái' },
        { ru:'общежи́тие', vi:'ký túc xá', pos:'danh từ giống trung' },
        { ru:'эта́ж', vi:'tầng', pos:'danh từ giống đực' },
        { ru:'центр', vi:'trung tâm', pos:'danh từ giống đực' },
        { ru:'дере́вня', vi:'làng quê', pos:'danh từ giống cái' },
        { ru:'Росси́я', vi:'nước Nga', pos:'danh từ giống cái' },
        { ru:'Вьетна́м', vi:'Việt Nam', pos:'danh từ giống đực' },
        { ru:'далеко́ / бли́зко', vi:'xa / gần', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, где ты живёшь?', vi:'Hiển, cậu sống ở đâu?' },
        { sp:'B', ru:'Я живу́ в общежи́тии, в це́нтре го́рода. А ты?', vi:'Mình sống ở ký túc xá, ở trung tâm thành phố. Còn cậu?' },
        { sp:'A', ru:'Я живу́ в кварти́ре на у́лице Ле́нина. Э́то далеко́ от це́нтра.', vi:'Mình sống trong căn hộ trên phố Lenin. Chỗ đó xa trung tâm.' },
        { sp:'B', ru:'А твои́ роди́тели живу́т в Москве́?', vi:'Còn bố mẹ cậu sống ở Moskva à?' },
        { sp:'A', ru:'Нет, они́ живу́т в дере́вне.', vi:'Không, họ sống ở quê.' }
      ]
    },

    {
      level:'a1', no:7, ru:'Что вы чита́ете?', vi:'Bạn đọc gì?',
      skill:'Cách 4 (đối cách) của tân ngữ bất động vật; hỏi что/кого́',
      grammar:[
        { form:'Cách 4 bất động vật: giống đực & trung = cách 1; giống cái -а → -у, -я → -ю', vi:'tân ngữ trực tiếp',
          note:'Я чита́ю журна́л / письмо́ (không đổi); Я чита́ю кни́гу, газе́ту (-у). Từ giống cái -ь không đổi: тетра́дь.',
          ex:{ ru:'Ка́ждый день я чита́ю газе́ту и слу́шаю му́зыку.', vi:'Mỗi ngày tôi đọc báo và nghe nhạc.' } },
        { form:'Cách 4 động vật giống đực: -а/-я (бра́та, учи́теля); giống cái như trên (сестру́)', vi:'tân ngữ chỉ người/động vật',
          note:'Кого́ вы зна́ете? — Я зна́ю Анто́на и Анну. Đại từ: меня́, тебя́, его́, её, нас, вас, их.',
          ex:{ ru:'Я хорошо́ зна́ю Ива́на и его́ сестру́.', vi:'Tôi biết rõ Ivan và chị của anh ấy.' } }
      ],
      vocab:[
        { ru:'кни́га', vi:'sách', pos:'danh từ giống cái' },
        { ru:'газе́та', vi:'báo', pos:'danh từ giống cái' },
        { ru:'журна́л', vi:'tạp chí', pos:'danh từ giống đực' },
        { ru:'письмо́', vi:'bức thư', pos:'danh từ giống trung' },
        { ru:'текст', vi:'bài đọc, văn bản', pos:'danh từ giống đực' },
        { ru:'сло́во', vi:'từ', pos:'danh từ giống trung' },
        { ru:'уро́к', vi:'bài học, tiết học', pos:'danh từ giống đực' },
        { ru:'учи́тель', vi:'thầy giáo', pos:'danh từ giống đực' },
        { ru:'друг', vi:'bạn (nam)', pos:'danh từ giống đực' },
        { ru:'подру́га', vi:'bạn (nữ)', pos:'danh từ giống cái' },
        { ru:'писа́ть', vi:'viết', pos:'động từ NSV' },
        { ru:'понима́ть', vi:'hiểu', pos:'động từ NSV' },
        { ru:'повторя́ть', vi:'nhắc lại, ôn', pos:'động từ NSV' },
        { ru:'ка́ждый день', vi:'mỗi ngày', pos:'cụm cố định' },
        { ru:'по́сле', vi:'sau (khi)', pos:'giới từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Что ты чита́ешь?', vi:'Cậu đang đọc gì thế?' },
        { sp:'B', ru:'Я чита́ю ру́сскую газе́ту. Но я понима́ю не всё.', vi:'Mình đọc báo Nga. Nhưng mình không hiểu hết.' },
        { sp:'A', ru:'Ты зна́ешь э́то сло́во?', vi:'Cậu biết từ này không?' },
        { sp:'B', ru:'Нет. Я спрошу́ учи́теля по́сле уро́ка.', vi:'Không. Mình sẽ hỏi thầy sau giờ học.' },
        { sp:'A', ru:'Хорошо́. А ве́чером мы повторя́ем слова́ вме́сте.', vi:'Được. Còn buổi tối chúng ta cùng ôn từ.' }
      ]
    },

    {
      level:'a1', no:8, ru:'Вчера́ и за́втра', vi:'Hôm qua và ngày mai',
      skill:'Thì quá khứ -л; động từ быть; tương lai với бу́ду + nguyên thể',
      grammar:[
        { form:'Quá khứ: gốc + -л / -ла / -ло / -ли (theo giống & số chủ ngữ)', vi:'thì quá khứ không chia theo ngôi',
          note:'Я/он чита́л, я/она́ чита́ла, оно́ чита́ло, мы/вы/они́ чита́ли. быть: был, была́, бы́ло, бы́ли. Hiện tại của быть lược bỏ: Вчера́ я был до́ма.',
          ex:{ ru:'Вчера́ я был в теа́тре, а моя́ сестра́ была́ до́ма.', vi:'Hôm qua tôi ở nhà hát, còn chị tôi ở nhà.' } },
        { form:'Tương lai NSV: бу́ду / бу́дешь / бу́дет / бу́дем / бу́дете / бу́дут + động từ nguyên thể', vi:'“sẽ (đang) làm gì”',
          note:'Dùng với động từ chưa hoàn thành để nói kế hoạch, hành động kéo dài. За́втра я бу́ду рабо́тать.',
          ex:{ ru:'За́втра мы бу́дем отдыха́ть, а в понеде́льник бу́дем учи́ться.', vi:'Ngày mai chúng tôi sẽ nghỉ, còn thứ Hai sẽ đi học.' } }
      ],
      vocab:[
        { ru:'вчера́', vi:'hôm qua', pos:'trạng từ' },
        { ru:'за́втра', vi:'ngày mai', pos:'trạng từ' },
        { ru:'быть', vi:'là, có, ở', pos:'động từ' },
        { ru:'был / была́ / бы́ли', vi:'đã (ở/là)', pos:'quá khứ của быть' },
        { ru:'понеде́льник', vi:'thứ Hai', pos:'danh từ giống đực' },
        { ru:'вто́рник', vi:'thứ Ba', pos:'danh từ giống đực' },
        { ru:'среда́', vi:'thứ Tư', pos:'danh từ giống cái' },
        { ru:'четве́рг', vi:'thứ Năm', pos:'danh từ giống đực' },
        { ru:'пя́тница', vi:'thứ Sáu', pos:'danh từ giống cái' },
        { ru:'суббо́та', vi:'thứ Bảy', pos:'danh từ giống cái' },
        { ru:'воскресе́нье', vi:'Chủ nhật', pos:'danh từ giống trung' },
        { ru:'неде́ля', vi:'tuần', pos:'danh từ giống cái' },
        { ru:'теа́тр', vi:'nhà hát', pos:'danh từ giống đực' },
        { ru:'учи́ться', vi:'học (ở trường)', pos:'động từ NSV' },
        { ru:'ра́ньше', vi:'trước đây', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Где ты был вчера́? Я звони́л, но ты не отвеча́л.', vi:'Hôm qua cậu ở đâu? Mình gọi mà cậu không trả lời.' },
        { sp:'B', ru:'Вчера́ я был в теа́тре. Там бы́ло о́чень интере́сно.', vi:'Hôm qua mình ở nhà hát. Ở đó rất thú vị.' },
        { sp:'A', ru:'А что ты бу́дешь де́лать за́втра?', vi:'Còn ngày mai cậu sẽ làm gì?' },
        { sp:'B', ru:'За́втра суббо́та. Я бу́ду отдыха́ть и чита́ть. А в воскресе́нье бу́ду гуля́ть.', vi:'Mai là thứ Bảy. Mình sẽ nghỉ và đọc sách. Còn Chủ nhật sẽ đi dạo.' }
      ]
    },

    {
      level:'a1', no:9, ru:'Профе́ссии и национа́льности', vi:'Nghề nghiệp và quốc tịch',
      skill:'Hỏi nghề; tính từ hoà hợp với danh từ; какой?',
      grammar:[
        { form:'Кто вы по профе́ссии? — Я инжене́р / врач / студе́нт.', vi:'nói nghề nghiệp (cách 1, không mạo từ)',
          note:'Nhiều nghề có dạng nữ: студе́нт – студе́нтка, учи́тель – учи́тельница; врач, инжене́р dùng chung. Quốc tịch: вьетна́мец / вьетна́мка, ру́сский / ру́сская.',
          ex:{ ru:'Мой оте́ц инжене́р, а мать — врач. Я курса́нт.', vi:'Bố tôi là kỹ sư, còn mẹ là bác sĩ. Tôi là học viên sĩ quan.' } },
        { form:'Tính từ: но́вый / но́вая / но́вое / но́вые (-ый/-ий/-ой · -ая/-яя · -ое/-ее · -ые/-ие)', vi:'tính từ hoà hợp giống, số với danh từ',
          note:'Hỏi: Како́й (đực) / кака́я (cái) / како́е (trung) / каки́е (nhiều) + N? Sau г к х ж ш щ ч viết -ий/-ие: ру́сский, хоро́шие.',
          ex:{ ru:'Э́то но́вый студе́нт. Он о́чень хоро́ший и у́мный.', vi:'Đây là sinh viên mới. Cậu ấy rất tốt và thông minh.' } }
      ],
      vocab:[
        { ru:'профе́ссия', vi:'nghề nghiệp', pos:'danh từ giống cái' },
        { ru:'врач', vi:'bác sĩ', pos:'danh từ giống đực' },
        { ru:'инжене́р', vi:'kỹ sư', pos:'danh từ giống đực' },
        { ru:'учи́тельница', vi:'cô giáo', pos:'danh từ giống cái' },
        { ru:'курса́нт', vi:'học viên (quân sự)', pos:'danh từ giống đực' },
        { ru:'офице́р', vi:'sĩ quan', pos:'danh từ giống đực' },
        { ru:'води́тель', vi:'tài xế', pos:'danh từ giống đực' },
        { ru:'вьетна́мец', vi:'người Việt (nam)', pos:'danh từ giống đực' },
        { ru:'вьетна́мка', vi:'người Việt (nữ)', pos:'danh từ giống cái' },
        { ru:'ру́сский', vi:'(người) Nga', pos:'tính từ / danh từ' },
        { ru:'но́вый', vi:'mới', pos:'tính từ' },
        { ru:'ста́рый', vi:'cũ, già', pos:'tính từ' },
        { ru:'хоро́ший', vi:'tốt', pos:'tính từ' },
        { ru:'у́мный', vi:'thông minh', pos:'tính từ' },
        { ru:'како́й', vi:'nào, như thế nào', pos:'đại từ nghi vấn' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, кто ты по профе́ссии?', vi:'Hiển, cậu làm nghề gì?' },
        { sp:'B', ru:'Я курса́нт. Я учу́сь в вое́нной акаде́мии. А ты?', vi:'Mình là học viên. Mình học ở học viện quân sự. Còn cậu?' },
        { sp:'A', ru:'Я студе́нтка, бу́дущий врач. Э́то тру́дная, но интере́сная профе́ссия.', vi:'Mình là sinh viên, bác sĩ tương lai. Đó là nghề khó nhưng thú vị.' },
        { sp:'B', ru:'Кака́я у тебя́ хоро́шая профе́ссия!', vi:'Nghề của cậu thật tốt!' }
      ]
    },

    {
      level:'a1', no:10, ru:'В магази́не', vi:'Ở cửa hàng',
      skill:'Hỏi giá; danh từ sau số đếm (cách 2); нет + cách 2',
      grammar:[
        { form:'1 рубль · 2–4 рубля́ · 5–20 рубле́й (cách 2 số ít / số nhiều)', vi:'danh từ sau số đếm',
          note:'2, 3, 4 (và 22, 23, 24…) + cách 2 số ít; 5–20, 25–30… + cách 2 số nhiều. Ско́лько сто́ит? (số ít) / Ско́лько сто́ят? (số nhiều).',
          ex:{ ru:'Хлеб сто́ит три́дцать два рубля́, а сыр — две́сти рубле́й.', vi:'Bánh mì giá 32 rúp, còn phô mai 200 rúp.' } },
        { form:'Нет + cách 2: нет хле́ба, нет молока́, нет вре́мени', vi:'“không có …” đòi cách 2',
          note:'Cách 2 số ít: đực/trung -а/-я (стол → стола́, окно́ → окна́), cái -ы/-и (кни́га → кни́ги). Đại từ: у меня́ нет де́нег (tôi không có tiền).',
          ex:{ ru:'Извини́те, у нас сего́дня нет молока́. Есть то́лько сок.', vi:'Xin lỗi, hôm nay chúng tôi không có sữa. Chỉ có nước ép.' } }
      ],
      vocab:[
        { ru:'магази́н', vi:'cửa hàng', pos:'danh từ giống đực' },
        { ru:'ры́нок', vi:'chợ', pos:'danh từ giống đực' },
        { ru:'сто́ить', vi:'có giá', pos:'động từ NSV' },
        { ru:'рубль', vi:'rúp', pos:'danh từ giống đực' },
        { ru:'де́ньги', vi:'tiền', pos:'danh từ số nhiều' },
        { ru:'хлеб', vi:'bánh mì', pos:'danh từ giống đực' },
        { ru:'молоко́', vi:'sữa', pos:'danh từ giống trung' },
        { ru:'сыр', vi:'phô mai', pos:'danh từ giống đực' },
        { ru:'мя́со', vi:'thịt', pos:'danh từ giống trung' },
        { ru:'ры́ба', vi:'cá', pos:'danh từ giống cái' },
        { ru:'фру́кты', vi:'hoa quả', pos:'danh từ số nhiều' },
        { ru:'о́вощи', vi:'rau củ', pos:'danh từ số nhiều' },
        { ru:'вода́', vi:'nước', pos:'danh từ giống cái' },
        { ru:'дорого́й / дешёвый', vi:'đắt / rẻ', pos:'tính từ' },
        { ru:'да́йте, пожа́луйста', vi:'cho tôi … với', pos:'cụm cố định' }
      ],
      dialogue:[
        { sp:'A', ru:'Скажи́те, пожа́луйста, ско́лько сто́ит э́тот сыр?', vi:'Cho hỏi, phô mai này giá bao nhiêu?' },
        { sp:'B', ru:'Две́сти со́рок рубле́й.', vi:'240 rúp.' },
        { sp:'A', ru:'Дорого́. А молоко́ есть?', vi:'Đắt quá. Có sữa không?' },
        { sp:'B', ru:'Молока́ нет. Есть хлеб и фру́кты.', vi:'Không có sữa. Có bánh mì và hoa quả.' },
        { sp:'A', ru:'Да́йте, пожа́луйста, хлеб и два я́блока.', vi:'Cho tôi bánh mì và hai quả táo.' }
      ]
    },

    {
      level:'a1', no:11, ru:'Куда́ вы идёте?', vi:'Bạn đi đâu?',
      skill:'Куда́ + cách 4 (hướng chuyển động); идти́ / е́хать',
      grammar:[
        { form:'Куда́? → в/на + cách 4: в го́род, в шко́лу, на по́чту, на рабо́ту', vi:'hướng chuyển động (khác Где? + cách 6)',
          note:'So sánh: Я в шко́ле (đang ở trường, cách 6) — Я иду́ в шко́лу (đang đi đến trường, cách 4). Đực/trung không đổi, cái -а → -у.',
          ex:{ ru:'У́тром я иду́ в акаде́мию, а ве́чером — на стадио́н.', vi:'Buổi sáng tôi đi đến học viện, còn buổi tối ra sân vận động.' } },
        { form:'идти́ (đi bộ): иду́, идёшь, идёт… · е́хать (đi xe): е́ду, е́дешь, е́дет…', vi:'động từ chuyển động một hướng',
          note:'идти́ dùng khi đi bộ, е́хать khi đi bằng phương tiện. Quá khứ: шёл/шла/шли; е́хал/е́хала.',
          ex:{ ru:'— Куда́ ты идёшь? — Я иду́ на по́чту. А пото́м е́ду домо́й.', vi:'— Cậu đi đâu đấy? — Mình đi ra bưu điện. Rồi sau đó về nhà (bằng xe).' } }
      ],
      vocab:[
        { ru:'куда́', vi:'đi đâu', pos:'trạng từ nghi vấn' },
        { ru:'идти́', vi:'đi (bộ, một hướng)', pos:'động từ NSV' },
        { ru:'е́хать', vi:'đi (bằng xe, một hướng)', pos:'động từ NSV' },
        { ru:'домо́й', vi:'về nhà', pos:'trạng từ' },
        { ru:'шко́ла', vi:'trường học', pos:'danh từ giống cái' },
        { ru:'акаде́мия', vi:'học viện', pos:'danh từ giống cái' },
        { ru:'по́чта', vi:'bưu điện', pos:'danh từ giống cái' },
        { ru:'рабо́та', vi:'công việc, chỗ làm', pos:'danh từ giống cái' },
        { ru:'стадио́н', vi:'sân vận động', pos:'danh từ giống đực' },
        { ru:'библиоте́ка', vi:'thư viện', pos:'danh từ giống cái' },
        { ru:'парк', vi:'công viên', pos:'danh từ giống đực' },
        { ru:'вокза́л', vi:'nhà ga', pos:'danh từ giống đực' },
        { ru:'музе́й', vi:'bảo tàng', pos:'danh từ giống đực' },
        { ru:'сейча́с', vi:'bây giờ', pos:'trạng từ' },
        { ru:'пото́м', vi:'sau đó', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Приве́т, Хиен! Куда́ ты идёшь?', vi:'Chào Hiển! Cậu đi đâu đấy?' },
        { sp:'B', ru:'Я иду́ в библиоте́ку. А ты?', vi:'Mình đi thư viện. Còn cậu?' },
        { sp:'A', ru:'Я е́ду на вокза́л. Мой брат сего́дня приезжа́ет.', vi:'Mình đi ra ga. Hôm nay anh mình đến.' },
        { sp:'B', ru:'Здо́рово! А пото́м куда́?', vi:'Tuyệt! Rồi sau đó đi đâu?' },
        { sp:'A', ru:'Пото́м мы е́дем домо́й.', vi:'Sau đó bọn mình về nhà.' }
      ]
    },

    {
      level:'a1', no:12, ru:'Тра́нспорт', vi:'Phương tiện đi lại',
      skill:'на чём? — е́хать на авто́бусе; hỏi đường; cách 5 nhập môn',
      grammar:[
        { form:'е́хать на + cách 6: на авто́бусе, на метро́, на маши́не, на такси́', vi:'đi bằng phương tiện gì',
          note:'метро́, такси́ không biến đổi. Đi bộ: идти́ пешко́м. Hỏi: На чём вы е́дете? / Как дое́хать до …? (cách 2).',
          ex:{ ru:'Я е́ду на рабо́ту на авто́бусе, а домо́й иду́ пешко́м.', vi:'Tôi đi làm bằng xe buýt, còn về nhà thì đi bộ.' } },
        { form:'Cách 5 (tạo cách) nhập môn: с + N (с дру́гом, с сестро́й) — “với ai”', vi:'“cùng với …”',
          note:'Đực/trung -ом/-ем, cái -ой/-ей. Đại từ: со мной, с тобо́й, с ним, с ней, с на́ми, с ва́ми, с ни́ми.',
          ex:{ ru:'Я е́ду в центр с дру́гом. Хо́чешь пое́хать с на́ми?', vi:'Tôi đi vào trung tâm với bạn. Cậu muốn đi cùng bọn mình không?' } }
      ],
      vocab:[
        { ru:'тра́нспорт', vi:'giao thông, phương tiện', pos:'danh từ giống đực' },
        { ru:'авто́бус', vi:'xe buýt', pos:'danh từ giống đực' },
        { ru:'метро́', vi:'tàu điện ngầm', pos:'danh từ giống trung (bất biến)' },
        { ru:'маши́на', vi:'ô tô', pos:'danh từ giống cái' },
        { ru:'такси́', vi:'taxi', pos:'danh từ giống trung (bất biến)' },
        { ru:'по́езд', vi:'tàu hoả', pos:'danh từ giống đực' },
        { ru:'самолёт', vi:'máy bay', pos:'danh từ giống đực' },
        { ru:'велосипе́д', vi:'xe đạp', pos:'danh từ giống đực' },
        { ru:'остано́вка', vi:'bến, điểm dừng', pos:'danh từ giống cái' },
        { ru:'ста́нция', vi:'ga (tàu điện)', pos:'danh từ giống cái' },
        { ru:'биле́т', vi:'vé', pos:'danh từ giống đực' },
        { ru:'пешко́м', vi:'đi bộ', pos:'trạng từ' },
        { ru:'напра́во / нале́во', vi:'sang phải / sang trái', pos:'trạng từ' },
        { ru:'пря́мо', vi:'thẳng', pos:'trạng từ' },
        { ru:'скажи́те, пожа́луйста', vi:'xin cho hỏi', pos:'cụm cố định' }
      ],
      dialogue:[
        { sp:'A', ru:'Скажи́те, пожа́луйста, как дое́хать до музе́я?', vi:'Xin cho hỏi, đến bảo tàng đi thế nào?' },
        { sp:'B', ru:'На метро́. Ста́нция «Пу́шкинская», пото́м пря́мо и напра́во.', vi:'Đi tàu điện ngầm. Ga «Pushkinskaya», rồi đi thẳng và rẽ phải.' },
        { sp:'A', ru:'А на авто́бусе мо́жно?', vi:'Đi xe buýt được không?' },
        { sp:'B', ru:'Мо́жно, но авто́бус идёт до́лго. Остано́вка вон там, нале́во.', vi:'Được, nhưng xe buýt đi lâu. Bến ở đằng kia, bên trái.' },
        { sp:'A', ru:'Спаси́бо большо́е!', vi:'Cảm ơn nhiều!' }
      ]
    },

    {
      level:'a1', no:13, ru:'Мне нра́вится', vi:'Tôi thích',
      skill:'Cách 3 (tặng cách) với нра́виться, ну́жно, мо́жно/нельзя́',
      grammar:[
        { form:'Кому́? + нра́вится / нра́вятся + N (cách 1)', vi:'“ai thích cái gì” — chủ thể ở cách 3',
          note:'Мне нра́вится Москва́ (số ít) / Мне нра́вятся кни́ги (số nhiều). Quá khứ: понра́вился/-лась/-лось/-лись. Cách 3: мне, тебе́, ему́, ей, нам, вам, им; danh từ: -у/-ю (бра́ту), -е (сестре́).',
          ex:{ ru:'Мне о́чень нра́вится ру́сская му́зыка, а бра́ту нра́вятся фи́льмы.', vi:'Tôi rất thích nhạc Nga, còn em trai thích phim.' } },
        { form:'Кому́ + ну́жно / мо́жно / нельзя́ + nguyên thể', vi:'“cần / được phép / không được”',
          note:'Ну́жно cũng đi với danh từ hoà hợp: мне ну́жен слова́рь, нужна́ ру́чка, ну́жно вре́мя, нужны́ де́ньги.',
          ex:{ ru:'Мне ну́жно учи́ть слова́. Здесь нельзя́ говори́ть гро́мко.', vi:'Tôi cần học từ. Ở đây không được nói to.' } }
      ],
      vocab:[
        { ru:'нра́виться', vi:'thích (ai đó thấy thích)', pos:'động từ NSV' },
        { ru:'ну́жно', vi:'cần', pos:'trạng từ vị ngữ' },
        { ru:'мо́жно', vi:'có thể, được phép', pos:'trạng từ vị ngữ' },
        { ru:'нельзя́', vi:'không được', pos:'trạng từ vị ngữ' },
        { ru:'слова́рь', vi:'từ điển', pos:'danh từ giống đực' },
        { ru:'ру́чка', vi:'bút', pos:'danh từ giống cái' },
        { ru:'вре́мя', vi:'thời gian', pos:'danh từ giống trung' },
        { ru:'пода́рок', vi:'món quà', pos:'danh từ giống đực' },
        { ru:'цвето́к / цветы́', vi:'bông hoa / hoa', pos:'danh từ' },
        { ru:'гро́мко / ти́хо', vi:'to / khẽ', pos:'trạng từ' },
        { ru:'помога́ть', vi:'giúp (ai — cách 3)', pos:'động từ NSV' },
        { ru:'дари́ть', vi:'tặng', pos:'động từ NSV' },
        { ru:'сове́товать', vi:'khuyên', pos:'động từ NSV' },
        { ru:'коне́чно', vi:'tất nhiên', pos:'trạng từ' },
        { ru:'жаль', vi:'tiếc', pos:'trạng từ vị ngữ' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, тебе́ нра́вится Москва́?', vi:'Hiển, cậu có thích Moskva không?' },
        { sp:'B', ru:'О́чень нра́вится! Но мне ну́жно бо́льше говори́ть по-ру́сски.', vi:'Rất thích! Nhưng mình cần nói tiếng Nga nhiều hơn.' },
        { sp:'A', ru:'Я могу́ помога́ть тебе́. Мо́жно говори́ть ка́ждый день.', vi:'Mình có thể giúp cậu. Có thể nói chuyện mỗi ngày.' },
        { sp:'B', ru:'Спаси́бо! А что тебе́ подари́ть? За́втра твой день рожде́ния.', vi:'Cảm ơn! Thế tặng cậu gì đây? Mai là sinh nhật cậu.' },
        { sp:'A', ru:'Мне нра́вятся цветы́. Но нельзя́ дари́ть жёлтые!', vi:'Mình thích hoa. Nhưng không được tặng hoa vàng đâu!' }
      ]
    },

    {
      level:'a1', no:14, ru:'Пого́да и времена́ го́да', vi:'Thời tiết và các mùa',
      skill:'Câu vô nhân xưng; tháng, ngày tháng; какое сегодня число?',
      grammar:[
        { form:'Câu vô nhân xưng: Сего́дня хо́лодно / тепло́ / жа́рко. Идёт дождь / снег.', vi:'nói thời tiết không có chủ ngữ',
          note:'Trạng từ -о làm vị ngữ. Quá khứ thêm бы́ло: Вчера́ бы́ло хо́лодно. Tương lai: бу́дет тепло́. Mùa: зимо́й, весно́й, ле́том, о́сенью (cách 5 chỉ thời gian).',
          ex:{ ru:'Ле́том в Хано́е о́чень жа́рко, а зимо́й в Москве́ идёт снег.', vi:'Mùa hè ở Hà Nội rất nóng, còn mùa đông ở Moskva có tuyết.' } },
        { form:'Како́е сего́дня число́? — Сего́дня пя́тое ма́рта. (số thứ tự giống trung + tháng ở cách 2)', vi:'ngày tháng',
          note:'Tháng: янва́рь, февра́ль, март, апре́ль, май, ию́нь, ию́ль, а́вгуст, сентя́брь, октя́брь, ноя́брь, дека́брь. “Vào ngày…”: пя́того ма́рта (cách 2).',
          ex:{ ru:'Сего́дня деся́тое декабря́. За́втра бу́дет хо́лодно.', vi:'Hôm nay là mùng 10 tháng 12. Ngày mai sẽ lạnh.' } }
      ],
      vocab:[
        { ru:'пого́да', vi:'thời tiết', pos:'danh từ giống cái' },
        { ru:'хо́лодно', vi:'lạnh', pos:'trạng từ' },
        { ru:'тепло́', vi:'ấm', pos:'trạng từ' },
        { ru:'жа́рко', vi:'nóng', pos:'trạng từ' },
        { ru:'дождь', vi:'mưa', pos:'danh từ giống đực' },
        { ru:'снег', vi:'tuyết', pos:'danh từ giống đực' },
        { ru:'со́лнце', vi:'mặt trời', pos:'danh từ giống trung' },
        { ru:'ве́тер', vi:'gió', pos:'danh từ giống đực' },
        { ru:'зима́ / зимо́й', vi:'mùa đông / vào mùa đông', pos:'danh từ' },
        { ru:'весна́ / весно́й', vi:'mùa xuân / vào mùa xuân', pos:'danh từ' },
        { ru:'ле́то / ле́том', vi:'mùa hè / vào mùa hè', pos:'danh từ' },
        { ru:'о́сень / о́сенью', vi:'mùa thu / vào mùa thu', pos:'danh từ' },
        { ru:'ме́сяц', vi:'tháng', pos:'danh từ giống đực' },
        { ru:'число́', vi:'ngày (tháng); con số', pos:'danh từ giống trung' },
        { ru:'гра́дус', vi:'độ (nhiệt độ)', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Кака́я сего́дня пого́да в Москве́?', vi:'Hôm nay thời tiết ở Moskva thế nào?' },
        { sp:'B', ru:'Хо́лодно, ми́нус де́сять гра́дусов, идёт снег.', vi:'Lạnh, âm 10 độ, đang có tuyết.' },
        { sp:'A', ru:'А в Хано́е сейча́с тепло́, плюс два́дцать пять.', vi:'Còn ở Hà Nội bây giờ ấm, 25 độ.' },
        { sp:'B', ru:'Како́е сего́дня число́? Я забы́л.', vi:'Hôm nay ngày bao nhiêu nhỉ? Mình quên mất.' },
        { sp:'A', ru:'Сего́дня пятна́дцатое января́. Ско́ро Тет!', vi:'Hôm nay 15 tháng Một. Sắp Tết rồi!' }
      ]
    },

    {
      level:'a1', no:15, ru:'Письмо́ дру́гу', vi:'Thư gửi bạn',
      skill:'Mệnh lệnh thức; nói chuyện điện thoại; viết thư ngắn — tổng ôn A1',
      grammar:[
        { form:'Mệnh lệnh thức: -й(те) sau nguyên âm (чита́й(те)), -и(те) sau phụ âm (скажи́(те)), -ь(те) (гото́вь(те))', vi:'yêu cầu, đề nghị',
          note:'Thêm пожа́луйста cho lịch sự. Các mẫu hay dùng: Скажи́те, Да́йте, Покажи́те, Извини́те, Повтори́те, Пиши́те.',
          ex:{ ru:'Повтори́те, пожа́луйста, я не по́нял. Говори́те ме́дленно.', vi:'Xin nhắc lại, tôi chưa hiểu. Hãy nói chậm thôi.' } },
        { form:'Bố cục thư ngắn: Дорого́й/Дорога́я …! — nội dung — С уваже́нием / Пока́, + tên', vi:'viết thư/tin nhắn A1',
          note:'Tổng ôn A1: giống & sở hữu (bài 2) · động từ I/II (4–5) · cách 6 где (6) · cách 4 что/куда́ (7, 11) · quá khứ/tương lai (8) · tính từ (9) · cách 2 sau số/нет (10) · cách 3 (13). Thử viết thư 6–8 câu kể về một ngày của bạn.',
          ex:{ ru:'Дорого́й Анто́н! Как дела́? Я живу́ в Хано́е и изуча́ю ру́сский язы́к. Приезжа́й ле́том! Пока́, Хиен.', vi:'Anton thân mến! Bạn khoẻ không? Mình sống ở Hà Nội và học tiếng Nga. Hè này đến chơi nhé! Tạm biệt, Hiển.' } }
      ],
      vocab:[
        { ru:'скажи́те', vi:'hãy nói', pos:'mệnh lệnh' },
        { ru:'покажи́те', vi:'hãy chỉ/cho xem', pos:'mệnh lệnh' },
        { ru:'извини́те', vi:'xin lỗi', pos:'mệnh lệnh' },
        { ru:'повтори́те', vi:'hãy nhắc lại', pos:'mệnh lệnh' },
        { ru:'алло́', vi:'a-lô', pos:'thán từ' },
        { ru:'слу́шаю', vi:'tôi nghe đây', pos:'cụm cố định' },
        { ru:'позови́те', vi:'gọi giúp (ai)', pos:'mệnh lệnh' },
        { ru:'дорого́й / дорога́я', vi:'thân mến (mở đầu thư)', pos:'tính từ' },
        { ru:'как дела́?', vi:'dạo này thế nào?', pos:'cụm cố định' },
        { ru:'с уваже́нием', vi:'trân trọng (cuối thư)', pos:'cụm cố định' },
        { ru:'приезжа́й', vi:'hãy đến (bằng xe)', pos:'mệnh lệnh' },
        { ru:'ме́дленно / бы́стро', vi:'chậm / nhanh', pos:'trạng từ' },
        { ru:'по́нял / поняла́', vi:'đã hiểu', pos:'quá khứ' },
        { ru:'но́мер', vi:'số (điện thoại, phòng)', pos:'danh từ giống đực' },
        { ru:'встре́ча', vi:'cuộc gặp', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'Алло́! Позови́те, пожа́луйста, Ива́на.', vi:'A-lô! Làm ơn gọi giúp Ivan.' },
        { sp:'B', ru:'Слу́шаю. Э́то Ива́н. Кто говори́т?', vi:'Tôi nghe đây. Ivan đây. Ai đấy ạ?' },
        { sp:'A', ru:'Э́то Хиен. Ива́н, скажи́, пожа́луйста, когда́ на́ша встре́ча?', vi:'Hiển đây. Ivan, cho hỏi khi nào chúng ta gặp?' },
        { sp:'B', ru:'В суббо́ту, в два часа́. Повтори́, пожа́луйста, твой но́мер.', vi:'Thứ Bảy, 2 giờ. Nhắc lại số của cậu với.' },
        { sp:'A', ru:'Во́семь, де́вять, шесть… Извини́, говори́ ме́дленно, я пишу́.', vi:'8, 9, 6… Xin lỗi, nói chậm thôi, mình đang ghi.' }
      ]
    },

    /* ================= A2 ================= */
    {
      level:'a2', no:1, ru:'Идти́ и́ли ходи́ть?', vi:'Động từ chuyển động: một hướng và nhiều hướng',
      skill:'Phân biệt идти́/ходи́ть, е́хать/е́здить; kể thói quen đi lại',
      grammar:[
        { form:'идти́ (đang đi, một hướng, lúc này) — ходи́ть (đi đi lại lại, thường xuyên, đã đi và về)', vi:'cặp động từ chuyển động đi bộ',
          note:'Сейча́с я иду́ в шко́лу (đang trên đường). Я ка́ждый день хожу́ в шко́лу (thói quen). Вчера́ я ходи́л в кино́ (đi và đã về = был в кино). ходи́ть: хожу́, хо́дишь, хо́дят.',
          ex:{ ru:'Ка́ждое у́тро я хожу́ в бассе́йн, а сейча́с иду́ в библиоте́ку.', vi:'Sáng nào tôi cũng đi bơi, còn bây giờ đang đi thư viện.' } },
        { form:'е́хать (một hướng) — е́здить (nhiều hướng); лете́ть — лета́ть; плыть — пла́вать', vi:'chuyển động bằng phương tiện',
          note:'е́здить: е́зжу, е́здишь, е́здят. Ле́том мы е́здили на мо́ре (đi và về). Quá khứ е́хал = đang trên đường đi.',
          ex:{ ru:'В про́шлом году́ мы е́здили в Росси́ю. Туда́ мы лете́ли на самолёте.', vi:'Năm ngoái chúng tôi đi Nga. Chiều đi chúng tôi bay bằng máy bay.' } }
      ],
      vocab:[
        { ru:'ходи́ть', vi:'đi (bộ, nhiều hướng/thường xuyên)', pos:'động từ NSV' },
        { ru:'е́здить', vi:'đi (xe, nhiều hướng/thường xuyên)', pos:'động từ NSV' },
        { ru:'лете́ть / лета́ть', vi:'bay', pos:'động từ NSV' },
        { ru:'плыть / пла́вать', vi:'bơi, đi thuyền', pos:'động từ NSV' },
        { ru:'бе́гать', vi:'chạy (nhiều hướng)', pos:'động từ NSV' },
        { ru:'бассе́йн', vi:'bể bơi', pos:'danh từ giống đực' },
        { ru:'ка́ждое у́тро', vi:'mỗi sáng', pos:'cụm cố định' },
        { ru:'туда́ / обра́тно', vi:'đến đó / trở lại', pos:'trạng từ' },
        { ru:'по́езд', vi:'tàu hoả', pos:'danh từ giống đực' },
        { ru:'команди́ровка', vi:'chuyến công tác', pos:'danh từ giống cái' },
        { ru:'путеше́ствовать', vi:'du lịch, đi xa', pos:'động từ NSV' },
        { ru:'о́тпуск', vi:'kỳ nghỉ phép', pos:'danh từ giống đực' },
        { ru:'мо́ре', vi:'biển', pos:'danh từ giống trung' },
        { ru:'обы́чно', vi:'thường', pos:'trạng từ' },
        { ru:'ре́дко', vi:'hiếm khi', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, куда́ ты идёшь так ра́но?', vi:'Hiển, cậu đi đâu sớm thế?' },
        { sp:'B', ru:'В бассе́йн. Я хожу́ туда́ ка́ждое у́тро.', vi:'Đi bể bơi. Sáng nào mình cũng đến đó.' },
        { sp:'A', ru:'А ле́том ты е́здил на мо́ре?', vi:'Thế hè cậu có đi biển không?' },
        { sp:'B', ru:'Да, мы е́здили в Нячанг. Туда́ лете́ли на самолёте, а обра́тно е́хали на по́езде.', vi:'Có, bọn mình đi Nha Trang. Chiều đi bay, chiều về đi tàu.' }
      ]
    },

    {
      level:'a2', no:2, ru:'Де́лать и сде́лать', vi:'Thể động từ: chưa hoàn thành và hoàn thành',
      skill:'Cặp thể НСВ/СВ; tương lai thể hoàn thành',
      grammar:[
        { form:'НСВ (quá trình, lặp lại) — СВ (kết quả, một lần): де́лать → сде́лать, чита́ть → прочита́ть, писа́ть → написа́ть, учи́ть → вы́учить', vi:'thể động từ',
          note:'Я вчера́ чита́л кни́гу (đọc, quá trình) — Я прочита́л кни́гу (đã đọc xong). СВ thường thêm tiền tố (с-, про-, на-, вы́-, по-) hoặc đổi hậu tố: реша́ть → реши́ть, покупа́ть → купи́ть.',
          ex:{ ru:'Я до́лго учи́л слова́ и наконе́ц вы́учил их.', vi:'Tôi học từ rất lâu và cuối cùng đã thuộc.' } },
        { form:'Tương lai СВ = chia như hiện tại: я прочита́ю, ты прочита́ешь…; НСВ: я бу́ду чита́ть', vi:'hai kiểu tương lai',
          note:'СВ không có hiện tại: сде́лаю = tôi sẽ làm xong. За́втра я напишу́ письмо́ (một lần, xong) — За́втра я бу́ду писа́ть письмо́ (sẽ ngồi viết).',
          ex:{ ru:'Сего́дня ве́чером я сде́лаю дома́шнее зада́ние, а пото́м бу́ду смотре́ть фильм.', vi:'Tối nay tôi sẽ làm xong bài tập, sau đó sẽ xem phim.' } }
      ],
      vocab:[
        { ru:'сде́лать', vi:'làm (xong)', pos:'động từ СВ' },
        { ru:'прочита́ть', vi:'đọc (xong)', pos:'động từ СВ' },
        { ru:'написа́ть', vi:'viết (xong)', pos:'động từ СВ' },
        { ru:'вы́учить', vi:'học thuộc', pos:'động từ СВ' },
        { ru:'реша́ть / реши́ть', vi:'giải, quyết định', pos:'động từ НСВ/СВ' },
        { ru:'покупа́ть / купи́ть', vi:'mua', pos:'động từ НСВ/СВ' },
        { ru:'получа́ть / получи́ть', vi:'nhận', pos:'động từ НСВ/СВ' },
        { ru:'отвеча́ть / отве́тить', vi:'trả lời', pos:'động từ НСВ/СВ' },
        { ru:'зада́ние', vi:'bài tập, nhiệm vụ', pos:'danh từ giống trung' },
        { ru:'наконе́ц', vi:'cuối cùng', pos:'trạng từ' },
        { ru:'уже́', vi:'đã, rồi', pos:'trạng từ' },
        { ru:'ещё не', vi:'vẫn chưa', pos:'cụm' },
        { ru:'до́лго', vi:'lâu', pos:'trạng từ' },
        { ru:'снача́ла', vi:'đầu tiên', pos:'trạng từ' },
        { ru:'результа́т', vi:'kết quả', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Ты уже́ сде́лал дома́шнее зада́ние?', vi:'Cậu làm xong bài tập chưa?' },
        { sp:'B', ru:'Ещё нет. Я до́лго реша́л одну́ зада́чу и не реши́л.', vi:'Chưa. Mình giải một bài rất lâu mà không ra.' },
        { sp:'A', ru:'Дава́й вме́сте. Снача́ла прочита́ем усло́вие ещё раз.', vi:'Cùng làm nhé. Trước hết đọc lại đề lần nữa.' },
        { sp:'B', ru:'Хорошо́. Е́сли реши́м, ве́чером я напишу́ тебе́ отве́т.', vi:'Được. Nếu giải được, tối mình sẽ viết đáp án cho cậu.' }
      ]
    },

    {
      level:'a2', no:3, ru:'Роди́тельный паде́ж', vi:'Cách 2 (sinh cách)',
      skill:'Sở hữu, “không có”, “từ đâu đến”, giới từ đi với cách 2',
      grammar:[
        { form:'Cách 2: đực -а/-я, cái -ы/-и, trung -а/-я; số nhiều -ов/-ев, -ей, -∅', vi:'đuôi cách 2',
          note:'Dùng khi: sở hữu (кни́га бра́та), phủ định (нет вре́мени), số lượng (мно́го друзе́й), giới từ у, из, с, от, до, без, о́коло, для, по́сле.',
          ex:{ ru:'Э́то маши́на моего́ отца́. У него́ нет вре́мени для о́тдыха.', vi:'Đây là xe của bố tôi. Ông ấy không có thời gian nghỉ ngơi.' } },
        { form:'Отку́да? из + cách 2 (из Вьетна́ма, из до́ма) / с + cách 2 (с рабо́ты, с ю́га) / от + người', vi:'“từ đâu”',
          note:'Cặp đối xứng: в ↔ из, на ↔ с, к ↔ от. Я из Ханоя. Она́ идёт с рабо́ты. Письмо́ от дру́га.',
          ex:{ ru:'— Отку́да вы? — Я из Вьетна́ма, из Хайфо́на. А сейча́с иду́ с заня́тий.', vi:'— Bạn từ đâu đến? — Tôi từ Việt Nam, từ Hải Phòng. Còn bây giờ đang đi từ lớp về.' } }
      ],
      vocab:[
        { ru:'отку́да', vi:'từ đâu', pos:'trạng từ nghi vấn' },
        { ru:'без', vi:'không có, thiếu (+ cách 2)', pos:'giới từ' },
        { ru:'для', vi:'cho, dành cho (+ cách 2)', pos:'giới từ' },
        { ru:'о́коло', vi:'gần, khoảng (+ cách 2)', pos:'giới từ' },
        { ru:'по́сле', vi:'sau (+ cách 2)', pos:'giới từ' },
        { ru:'до', vi:'trước; đến (+ cách 2)', pos:'giới từ' },
        { ru:'мно́го / ма́ло', vi:'nhiều / ít', pos:'trạng từ' },
        { ru:'не́сколько', vi:'vài', pos:'số từ' },
        { ru:'оте́ц', vi:'cha', pos:'danh từ giống đực' },
        { ru:'мать', vi:'mẹ', pos:'danh từ giống cái' },
        { ru:'заня́тие', vi:'buổi học', pos:'danh từ giống trung' },
        { ru:'о́тдых', vi:'sự nghỉ ngơi', pos:'danh từ giống đực' },
        { ru:'вопро́с', vi:'câu hỏi', pos:'danh từ giống đực' },
        { ru:'отве́т', vi:'câu trả lời', pos:'danh từ giống đực' },
        { ru:'коне́ц / нача́ло', vi:'kết thúc / bắt đầu', pos:'danh từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Отку́да ты идёшь? Ты вы́глядишь уста́лым.', vi:'Cậu từ đâu về thế? Trông mệt quá.' },
        { sp:'B', ru:'С трениро́вки. По́сле заня́тий у нас был футбо́л.', vi:'Từ buổi tập. Sau giờ học bọn mình đá bóng.' },
        { sp:'A', ru:'У тебя́ есть вре́мя для ко́фе? Кафе́ о́коло вокза́ла.', vi:'Cậu có thời gian uống cà phê không? Quán gần ga.' },
        { sp:'B', ru:'К сожале́нию, нет вре́мени. Че́рез час у меня́ встре́ча с дру́гом из Росси́и.', vi:'Tiếc là không có thời gian. Một tiếng nữa mình có hẹn với người bạn từ Nga.' }
      ]
    },

    {
      level:'a2', no:4, ru:'Да́тельный паде́ж', vi:'Cách 3 (tặng cách)',
      skill:'Cho ai, giúp ai, gọi ai, đến chỗ ai; tuổi; по + cách 3',
      grammar:[
        { form:'Cách 3: đực/trung -у/-ю, cái -е (-ии → -ии), số nhiều -ам/-ям; đại từ мне, тебе́, ему́, ей, нам, вам, им', vi:'đuôi cách 3',
          note:'Động từ đòi cách 3: дать, дари́ть, помога́ть, звони́ть, говори́ть, сове́товать, меша́ть, отвеча́ть (кому́). Я звоню́ ма́ме. Он помога́ет дру́гу.',
          ex:{ ru:'Я подари́л сестре́ кни́гу и позвони́л роди́телям.', vi:'Tôi tặng em gái cuốn sách và gọi điện cho bố mẹ.' } },
        { form:'к + cách 3 (đến chỗ ai: к врачу́, к дру́гу) · по + cách 3 (по телефо́ну, по у́лице, по суббо́там)', vi:'giới từ với cách 3',
          note:'К кому́ ты идёшь? — К ба́бушке. Гуля́ть по па́рку = đi dạo khắp công viên. По вечера́м = vào các buổi tối.',
          ex:{ ru:'По воскресе́ньям я е́зжу к ба́бушке и звоню́ ей по телефо́ну ка́ждый ве́чер.', vi:'Chủ nhật tôi đến chỗ bà và gọi cho bà mỗi tối.' } }
      ],
      vocab:[
        { ru:'дава́ть / дать', vi:'đưa, cho', pos:'động từ НСВ/СВ' },
        { ru:'помога́ть / помо́чь', vi:'giúp', pos:'động từ НСВ/СВ' },
        { ru:'звони́ть / позвони́ть', vi:'gọi điện', pos:'động từ НСВ/СВ' },
        { ru:'дари́ть / подари́ть', vi:'tặng', pos:'động từ НСВ/СВ' },
        { ru:'меша́ть', vi:'làm phiền, cản trở', pos:'động từ NSV' },
        { ru:'объясня́ть / объясни́ть', vi:'giải thích', pos:'động từ НСВ/СВ' },
        { ru:'к', vi:'đến chỗ (+ cách 3)', pos:'giới từ' },
        { ru:'по', vi:'theo, dọc, qua (+ cách 3)', pos:'giới từ' },
        { ru:'врач', vi:'bác sĩ', pos:'danh từ giống đực' },
        { ru:'сосе́д', vi:'hàng xóm', pos:'danh từ giống đực' },
        { ru:'по вечера́м', vi:'vào các buổi tối', pos:'cụm cố định' },
        { ru:'по суббо́там', vi:'vào các thứ Bảy', pos:'cụm cố định' },
        { ru:'сообще́ние', vi:'tin nhắn', pos:'danh từ giống trung' },
        { ru:'сове́т', vi:'lời khuyên', pos:'danh từ giống đực' },
        { ru:'ра́д / ра́да', vi:'vui mừng', pos:'tính từ ngắn' }
      ],
      dialogue:[
        { sp:'A', ru:'Кому́ ты звони́шь?', vi:'Cậu gọi cho ai thế?' },
        { sp:'B', ru:'Ма́ме. Я звоню́ ей по вечера́м. А за́втра пое́ду к ней.', vi:'Cho mẹ. Tối nào mình cũng gọi. Mai mình sẽ đến chỗ mẹ.' },
        { sp:'A', ru:'Переда́й ей приве́т! Кста́ти, ты мо́жешь помо́чь мне с ру́сским?', vi:'Cho mình gửi lời chào! Nhân tiện, cậu giúp mình môn tiếng Nga được không?' },
        { sp:'B', ru:'Коне́чно. Я объясню́ тебе́ да́тельный паде́ж по́сле уро́ка.', vi:'Tất nhiên. Sau giờ học mình sẽ giải thích cách 3 cho cậu.' }
      ]
    },

    {
      level:'a2', no:5, ru:'Твори́тельный паде́ж', vi:'Cách 5 (tạo cách)',
      skill:'Với ai/bằng gì; “là/trở thành/làm nghề gì”; занима́ться чем',
      grammar:[
        { form:'Cách 5: đực/trung -ом/-ем, cái -ой/-ей (-ью), số nhiều -ами/-ями', vi:'đuôi cách 5',
          note:'Dùng với: с (với ai), công cụ (писа́ть ру́чкой), быть/стать/рабо́тать + nghề (стать врачо́м), занима́ться/интересова́ться (спо́ртом, му́зыкой), над/под/пе́ред/за/ме́жду (vị trí).',
          ex:{ ru:'Мой брат хо́чет стать инжене́ром, а я занима́юсь спо́ртом с дру́гом.', vi:'Em trai tôi muốn trở thành kỹ sư, còn tôi chơi thể thao với bạn.' } },
        { form:'быть кем (quá khứ/tương lai): он был студе́нтом, она́ бу́дет учи́тельницей; рабо́тать кем', vi:'vị ngữ danh từ ở cách 5',
          note:'Hiện tại dùng cách 1 (Он студе́нт); quá khứ/tương lai/nguyên thể dùng cách 5. Интересова́ться чем = quan tâm tới.',
          ex:{ ru:'Ра́ньше оте́ц рабо́тал води́телем, а тепе́рь он стал дире́ктором.', vi:'Trước đây bố làm tài xế, còn giờ đã thành giám đốc.' } }
      ],
      vocab:[
        { ru:'стать', vi:'trở thành (+ cách 5)', pos:'động từ СВ' },
        { ru:'занима́ться', vi:'làm, tập (môn gì + cách 5)', pos:'động từ NSV' },
        { ru:'интересова́ться', vi:'quan tâm (+ cách 5)', pos:'động từ NSV' },
        { ru:'по́льзоваться', vi:'sử dụng (+ cách 5)', pos:'động từ NSV' },
        { ru:'дире́ктор', vi:'giám đốc', pos:'danh từ giống đực' },
        { ru:'ме́жду', vi:'giữa (+ cách 5)', pos:'giới từ' },
        { ru:'пе́ред', vi:'trước (mặt) (+ cách 5)', pos:'giới từ' },
        { ru:'над / под', vi:'trên / dưới (+ cách 5)', pos:'giới từ' },
        { ru:'за', vi:'sau, đằng sau (+ cách 5)', pos:'giới từ' },
        { ru:'ру́чкой / карандашо́м', vi:'bằng bút / bằng bút chì', pos:'cách 5' },
        { ru:'ша́хматы', vi:'cờ vua', pos:'danh từ số nhiều' },
        { ru:'исто́рия', vi:'lịch sử', pos:'danh từ giống cái' },
        { ru:'вме́сте с', vi:'cùng với', pos:'cụm' },
        { ru:'тепе́рь', vi:'giờ đây', pos:'trạng từ' },
        { ru:'бу́дущий', vi:'tương lai (tính từ)', pos:'tính từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Чем ты занима́ешься в свобо́дное вре́мя?', vi:'Lúc rảnh cậu làm gì?' },
        { sp:'B', ru:'Занима́юсь спо́ртом и игра́ю в ша́хматы с сосе́дом.', vi:'Chơi thể thao và đánh cờ với hàng xóm.' },
        { sp:'A', ru:'А кем ты хо́чешь стать по́сле акаде́мии?', vi:'Sau học viện cậu muốn thành gì?' },
        { sp:'B', ru:'Вое́нным инжене́ром. Мой оте́ц то́же был инжене́ром.', vi:'Kỹ sư quân sự. Bố mình cũng từng là kỹ sư.' }
      ]
    },

    {
      level:'a2', no:6, ru:'Бо́льше, лу́чше, интере́снее', vi:'So sánh hơn và so sánh nhất',
      skill:'Cấp so sánh của tính từ/trạng từ; чем; са́мый',
      grammar:[
        { form:'So sánh hơn: -ее (интере́снее, краси́вее); bất quy tắc: бо́льше, ме́ньше, лу́чше, ху́же, ста́рше, моло́же, вы́ше, ни́же, доро́же, деше́вле', vi:'cấp so sánh hơn (không đổi dạng)',
          note:'Cấu trúc: A + so sánh + чем + B (cách 1) hoặc A + so sánh + B (cách 2): Москва́ бо́льше, чем Хано́й = Москва́ бо́льше Хано́я. Thêm mức độ: гора́здо/намно́го бо́льше.',
          ex:{ ru:'Э́тот фильм интере́снее, чем кни́га, но кни́га гора́здо длинне́е.', vi:'Bộ phim này thú vị hơn cuốn sách, nhưng sách dài hơn nhiều.' } },
        { form:'So sánh nhất: са́мый + tính từ (са́мый большо́й, са́мая краси́вая); лу́чший, ху́дший', vi:'cấp cao nhất',
          note:'са́мый hoà hợp giống, số, cách với danh từ. Trạng từ: бо́льше всего́ (nhất), лу́чше всех.',
          ex:{ ru:'Байка́л — са́мое глубо́кое о́зеро в ми́ре. Бо́льше всего́ я люблю́ зи́му.', vi:'Baikal là hồ sâu nhất thế giới. Tôi thích nhất là mùa đông.' } }
      ],
      vocab:[
        { ru:'бо́льше / ме́ньше', vi:'nhiều hơn / ít hơn', pos:'so sánh' },
        { ru:'лу́чше / ху́же', vi:'tốt hơn / tệ hơn', pos:'so sánh' },
        { ru:'ста́рше / моло́же', vi:'già hơn / trẻ hơn', pos:'so sánh' },
        { ru:'вы́ше / ни́же', vi:'cao hơn / thấp hơn', pos:'so sánh' },
        { ru:'доро́же / деше́вле', vi:'đắt hơn / rẻ hơn', pos:'so sánh' },
        { ru:'интере́снее', vi:'thú vị hơn', pos:'so sánh' },
        { ru:'чем', vi:'hơn (so với)', pos:'liên từ' },
        { ru:'гора́здо', vi:'hơn nhiều', pos:'trạng từ' },
        { ru:'са́мый', vi:'nhất', pos:'đại từ' },
        { ru:'о́зеро', vi:'hồ', pos:'danh từ giống trung' },
        { ru:'глубо́кий', vi:'sâu', pos:'tính từ' },
        { ru:'дли́нный / коро́ткий', vi:'dài / ngắn', pos:'tính từ' },
        { ru:'тру́дный / лёгкий', vi:'khó / dễ', pos:'tính từ' },
        { ru:'мир', vi:'thế giới', pos:'danh từ giống đực' },
        { ru:'по-мо́ему', vi:'theo tôi', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Что тру́днее: ру́сский язы́к и́ли кита́йский?', vi:'Cái gì khó hơn: tiếng Nga hay tiếng Trung?' },
        { sp:'B', ru:'По-мо́ему, кита́йский тру́днее чита́ть, а ру́сский тру́днее говори́ть.', vi:'Theo mình, tiếng Trung khó đọc hơn, còn tiếng Nga khó nói hơn.' },
        { sp:'A', ru:'А како́й язы́к са́мый краси́вый?', vi:'Thế ngôn ngữ nào đẹp nhất?' },
        { sp:'B', ru:'Вьетна́мский, коне́чно! Но ру́сский мне нра́вится бо́льше всех иностра́нных.', vi:'Tiếng Việt chứ! Nhưng trong các tiếng nước ngoài mình thích tiếng Nga nhất.' }
      ]
    },

    {
      level:'a2', no:7, ru:'Глаго́лы на -ся', vi:'Động từ phản thân -ся',
      skill:'учи́ться, занима́ться, встреча́ться, начина́ться / конча́ться',
      grammar:[
        { form:'Động từ + -ся/-сь: учу́сь, у́чишься, у́чится, у́чимся, у́читесь, у́чатся; quá khứ учи́лся/учи́лась/учи́лись', vi:'chia động từ phản thân',
          note:'-ся sau phụ âm, -сь sau nguyên âm. Nhóm nghĩa: học/tự thân (учи́ться, занима́ться), qua lại (встреча́ться, знако́миться с), tự động (начина́ться, конча́ться, открыва́ться), cảm xúc (ра́доваться, боя́ться + cách 2).',
          ex:{ ru:'Уро́к начина́ется в де́вять и конча́ется в де́сять. Мы встреча́емся по́сле уро́ка.', vi:'Buổi học bắt đầu lúc 9 và kết thúc lúc 10. Chúng tôi gặp nhau sau giờ học.' } },
        { form:'учи́ть (что) — учи́ться (где / + inf) — изуча́ть (что) — занима́ться (чем)', vi:'bốn động từ “học” dễ nhầm',
          note:'учи́ть слова́ (học thuộc gì), учи́ться в акаде́мии (học ở đâu), изуча́ть ру́сский язы́к (nghiên cứu/học môn), занима́ться ру́сским (luyện tập môn).',
          ex:{ ru:'Я учу́сь в акаде́мии, изуча́ю ру́сский язы́к, ка́ждый день учу́ но́вые слова́ и занима́юсь грамма́тикой.', vi:'Tôi học ở học viện, học tiếng Nga, mỗi ngày học từ mới và luyện ngữ pháp.' } }
      ],
      vocab:[
        { ru:'встреча́ться / встре́титься', vi:'gặp nhau', pos:'động từ НСВ/СВ' },
        { ru:'знако́миться / познако́миться', vi:'làm quen (с + cách 5)', pos:'động từ НСВ/СВ' },
        { ru:'начина́ться / нача́ться', vi:'bắt đầu (tự thân)', pos:'động từ НСВ/СВ' },
        { ru:'конча́ться / ко́нчиться', vi:'kết thúc (tự thân)', pos:'động từ НСВ/СВ' },
        { ru:'открыва́ться / закрыва́ться', vi:'mở cửa / đóng cửa', pos:'động từ NSV' },
        { ru:'находи́ться', vi:'nằm ở, toạ lạc', pos:'động từ NSV' },
        { ru:'боя́ться', vi:'sợ (+ cách 2)', pos:'động từ NSV' },
        { ru:'ра́доваться', vi:'vui mừng (+ cách 3)', pos:'động từ NSV' },
        { ru:'смея́ться', vi:'cười', pos:'động từ NSV' },
        { ru:'улыба́ться', vi:'mỉm cười', pos:'động từ NSV' },
        { ru:'гото́виться', vi:'chuẩn bị (к + cách 3)', pos:'động từ NSV' },
        { ru:'изуча́ть', vi:'học, nghiên cứu (môn)', pos:'động từ NSV' },
        { ru:'экза́мен', vi:'kỳ thi', pos:'danh từ giống đực' },
        { ru:'по́здно / ра́но', vi:'muộn / sớm', pos:'trạng từ' },
        { ru:'ошиба́ться', vi:'nhầm lẫn', pos:'động từ NSV' }
      ],
      dialogue:[
        { sp:'A', ru:'Во ско́лько начина́ется экза́мен?', vi:'Mấy giờ kỳ thi bắt đầu?' },
        { sp:'B', ru:'В де́вять. Я гото́вился всю ночь и боюсь оши́бок.', vi:'9 giờ. Mình ôn cả đêm và sợ mắc lỗi.' },
        { sp:'A', ru:'Не бо́йся! Ты хорошо́ у́чишься. Дава́й встре́тимся по́сле экза́мена.', vi:'Đừng sợ! Cậu học tốt mà. Sau thi gặp nhau nhé.' },
        { sp:'B', ru:'Дава́й. Кафе́ открыва́ется в двена́дцать, там и встре́тимся.', vi:'Ừ. Quán mở lúc 12, gặp ở đó.' }
      ]
    },

    {
      level:'a2', no:8, ru:'Челове́к, кото́рый…', vi:'Câu phức với кото́рый; nguyên nhân – kết quả',
      skill:'Mệnh đề quan hệ; потому́ что / поэ́тому',
      grammar:[
        { form:'кото́рый / кото́рая / кото́рое / кото́рые — hoà hợp giống, số với danh từ đứng trước; cách theo vai trò trong mệnh đề', vi:'đại từ quan hệ',
          note:'Э́то друг, кото́рый живёт в Москве́ (cách 1). Э́то друг, кото́рого я зна́ю (cách 4). Э́то го́род, в кото́ром я роди́лся (cách 6). Luôn có dấu phẩy trước кото́рый.',
          ex:{ ru:'Я чита́ю кни́гу, кото́рую мне подари́ла сестра́.', vi:'Tôi đang đọc cuốn sách mà em gái tặng.' } },
        { form:'A, потому́ что B (vì) · A, поэ́тому B (nên)', vi:'nguyên nhân – kết quả',
          note:'потому́ что đứng trước nguyên nhân; поэ́тому đứng trước kết quả. Hỏi: Почему́? Trang trọng: так как.',
          ex:{ ru:'Я не пошёл гуля́ть, потому́ что шёл дождь. Шёл дождь, поэ́тому я оста́лся до́ма.', vi:'Tôi không đi dạo vì trời mưa. Trời mưa nên tôi ở nhà.' } }
      ],
      vocab:[
        { ru:'кото́рый', vi:'mà, người mà', pos:'đại từ quan hệ' },
        { ru:'потому́ что', vi:'bởi vì', pos:'liên từ' },
        { ru:'поэ́тому', vi:'vì thế', pos:'liên từ' },
        { ru:'так как', vi:'vì (trang trọng)', pos:'liên từ' },
        { ru:'почему́', vi:'tại sao', pos:'trạng từ nghi vấn' },
        { ru:'остава́ться / оста́ться', vi:'ở lại', pos:'động từ НСВ/СВ' },
        { ru:'опа́здывать / опозда́ть', vi:'đến muộn', pos:'động từ НСВ/СВ' },
        { ru:'боле́ть', vi:'ốm; đau', pos:'động từ NSV' },
        { ru:'устава́ть / уста́ть', vi:'mệt', pos:'động từ НСВ/СВ' },
        { ru:'челове́к / лю́ди', vi:'người / mọi người', pos:'danh từ' },
        { ru:'вещь', vi:'đồ vật', pos:'danh từ giống cái' },
        { ru:'ме́сто', vi:'chỗ, nơi', pos:'danh từ giống trung' },
        { ru:'изве́стный', vi:'nổi tiếng', pos:'tính từ' },
        { ru:'ва́жный', vi:'quan trọng', pos:'tính từ' },
        { ru:'осо́бенно', vi:'đặc biệt', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Кто э́тот челове́к, кото́рый стои́т у окна́?', vi:'Người đứng cạnh cửa sổ là ai thế?' },
        { sp:'B', ru:'Э́то преподава́тель, кото́рый ведёт у нас исто́рию. Он о́чень изве́стный.', vi:'Đó là thầy dạy lịch sử của bọn mình. Thầy rất nổi tiếng.' },
        { sp:'A', ru:'Почему́ ты опозда́л на его́ ле́кцию?', vi:'Sao cậu đến muộn buổi giảng của thầy?' },
        { sp:'B', ru:'Потому́ что боле́л. Я уста́л, поэ́тому оста́лся до́ма.', vi:'Vì mình ốm. Mình mệt nên ở nhà.' }
      ]
    },

    {
      level:'a2', no:9, ru:'Е́сли и что́бы', vi:'Điều kiện và mục đích',
      skill:'Câu điều kiện thực; câu mục đích với что́бы',
      grammar:[
        { form:'Е́сли A, (то) B — điều kiện có thật (hiện tại/tương lai)', vi:'“nếu… thì…”',
          note:'Vế е́сли ở tương lai СВ nếu nói về tương lai: Е́сли за́втра бу́дет хоро́шая пого́да, мы пое́дем на да́чу. Không dùng бу́ду + е́сли như tiếng Anh.',
          ex:{ ru:'Е́сли ты сдашь экза́мен, мы пойдём в рестора́н.', vi:'Nếu cậu thi đỗ, chúng ta sẽ đi nhà hàng.' } },
        { form:'что́бы + nguyên thể (cùng chủ ngữ) / что́бы + quá khứ (khác chủ ngữ)', vi:'mục đích và mong muốn',
          note:'Я учу́ ру́сский, что́бы рабо́тать в Росси́и (cùng chủ ngữ). Я хочу́, что́бы ты помо́г мне (khác chủ ngữ → động từ quá khứ). Hỏi: Заче́м? (để làm gì).',
          ex:{ ru:'Я звоню́, что́бы узна́ть расписа́ние. Мама хо́чет, что́бы я верну́лся ра́но.', vi:'Tôi gọi để biết lịch. Mẹ muốn tôi về sớm.' } }
      ],
      vocab:[
        { ru:'е́сли', vi:'nếu', pos:'liên từ' },
        { ru:'что́бы', vi:'để; muốn rằng', pos:'liên từ' },
        { ru:'заче́м', vi:'để làm gì', pos:'trạng từ nghi vấn' },
        { ru:'сдава́ть / сдать экза́мен', vi:'thi / thi đỗ', pos:'động từ НСВ/СВ' },
        { ru:'узнава́ть / узна́ть', vi:'tìm hiểu, biết được', pos:'động từ НСВ/СВ' },
        { ru:'возвраща́ться / верну́ться', vi:'quay về', pos:'động từ НСВ/СВ' },
        { ru:'расписа́ние', vi:'thời khoá biểu, lịch', pos:'danh từ giống trung' },
        { ru:'да́ча', vi:'nhà nghỉ ngoại ô', pos:'danh từ giống cái' },
        { ru:'рестора́н', vi:'nhà hàng', pos:'danh từ giống đực' },
        { ru:'то', vi:'thì', pos:'liên từ' },
        { ru:'обяза́тельно', vi:'nhất định', pos:'trạng từ' },
        { ru:'успева́ть / успе́ть', vi:'kịp', pos:'động từ НСВ/СВ' },
        { ru:'проси́ть / попроси́ть', vi:'xin, nhờ', pos:'động từ НСВ/СВ' },
        { ru:'по́мощь', vi:'sự giúp đỡ', pos:'danh từ giống cái' },
        { ru:'цель', vi:'mục đích', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'Заче́м ты так ра́но встаёшь?', vi:'Cậu dậy sớm thế để làm gì?' },
        { sp:'B', ru:'Что́бы успе́ть повтори́ть слова́ пе́ред экза́меном.', vi:'Để kịp ôn từ trước khi thi.' },
        { sp:'A', ru:'Е́сли хо́чешь, я помогу́ тебе́ ве́чером.', vi:'Nếu cậu muốn, tối mình giúp.' },
        { sp:'B', ru:'Спаси́бо! Е́сли сдам экза́мен, обяза́тельно приглашу́ тебя́ в рестора́н.', vi:'Cảm ơn! Nếu thi đỗ, nhất định mời cậu đi nhà hàng.' }
      ]
    },

    {
      level:'a2', no:10, ru:'Прие́хать, уе́хать, вы́йти', vi:'Tiền tố với động từ chuyển động',
      skill:'при-/у-, в-/вы-, по-, пере-; kể hành trình',
      grammar:[
        { form:'при- (đến) ↔ у- (rời đi); в- (vào) ↔ вы- (ra); под- (lại gần) ↔ от- (rời khỏi); пере- (băng qua); по- (bắt đầu đi)', vi:'tiền tố chuyển động',
          note:'Ghép với идти́/е́хать: прийти́, прие́хать, уйти́, уе́хать, войти́, вы́йти, вы́ехать, перейти́, пойти́, пое́хать. Ở quá khứ chú ý: пришёл/пришла́, вы́шел/вы́шла.',
          ex:{ ru:'Он вы́шел из до́ма, перешёл у́лицу и пошёл в парк.', vi:'Anh ấy ra khỏi nhà, băng qua đường và đi vào công viên.' } },
        { form:'Giới từ đi kèm: прийти́ в/на + cách 4, к + cách 3; уйти́ из/с + cách 2, от + cách 2; вы́йти из + cách 2', vi:'tiền tố + giới từ đối xứng',
          note:'прие́хать в Москву́ ↔ уе́хать из Москвы́; прийти́ к дру́гу ↔ уйти́ от дру́га. пойти́/пое́хать = khởi hành: Пойдём в кино́! (Đi xem phim thôi!).',
          ex:{ ru:'Анна прие́хала в Хано́й в сентябре́, а уе́дет в ию́не.', vi:'Anna đến Hà Nội vào tháng Chín và sẽ rời đi vào tháng Sáu.' } }
      ],
      vocab:[
        { ru:'приходи́ть / прийти́', vi:'đến (bộ)', pos:'động từ НСВ/СВ' },
        { ru:'приезжа́ть / прие́хать', vi:'đến (xe)', pos:'động từ НСВ/СВ' },
        { ru:'уходи́ть / уйти́', vi:'rời đi (bộ)', pos:'động từ НСВ/СВ' },
        { ru:'уезжа́ть / уе́хать', vi:'rời đi (xe)', pos:'động từ НСВ/СВ' },
        { ru:'входи́ть / войти́', vi:'đi vào', pos:'động từ НСВ/СВ' },
        { ru:'выходи́ть / вы́йти', vi:'đi ra', pos:'động từ НСВ/СВ' },
        { ru:'переходи́ть / перейти́', vi:'băng qua', pos:'động từ НСВ/СВ' },
        { ru:'пойти́ / пое́хать', vi:'bắt đầu đi, khởi hành', pos:'động từ СВ' },
        { ru:'подходи́ть / подойти́', vi:'lại gần', pos:'động từ НСВ/СВ' },
        { ru:'прие́зд / отъе́зд', vi:'sự đến / sự đi', pos:'danh từ' },
        { ru:'вход / вы́ход', vi:'lối vào / lối ra', pos:'danh từ' },
        { ru:'перехо́д', vi:'lối sang đường', pos:'danh từ giống đực' },
        { ru:'светофо́р', vi:'đèn giao thông', pos:'danh từ giống đực' },
        { ru:'встреча́ть / встре́тить', vi:'đón, gặp', pos:'động từ НСВ/СВ' },
        { ru:'провожа́ть / проводи́ть', vi:'tiễn', pos:'động từ НСВ/СВ' }
      ],
      dialogue:[
        { sp:'A', ru:'Когда́ прие́дет твой друг из Москвы́?', vi:'Khi nào bạn cậu từ Moskva đến?' },
        { sp:'B', ru:'В суббо́ту у́тром. Я пое́ду в аэропо́рт встреча́ть его́.', vi:'Sáng thứ Bảy. Mình sẽ ra sân bay đón.' },
        { sp:'A', ru:'А как дойти́ до твоего́ общежи́тия?', vi:'Đến ký túc của cậu đi thế nào?' },
        { sp:'B', ru:'Вы́йди из метро́, перейди́ у́лицу у светофо́ра и иди́ пря́мо. Че́рез пять мину́т придёшь.', vi:'Ra khỏi ga tàu điện, băng qua đường chỗ đèn giao thông rồi đi thẳng. Năm phút là tới.' }
      ]
    },

    {
      level:'a2', no:11, ru:'Кото́рый час?', vi:'Giờ giấc và ngày tháng năm',
      skill:'Nói giờ; в кото́ром часу́; năm; số thứ tự',
      grammar:[
        { form:'Кото́рый час? — Два часа́. Полови́на тре́тьего (2:30). Без пятна́дцати три (2:45). Де́сять мину́т четвёртого (3:10).', vi:'nói giờ kiểu Nga',
          note:'Sau giờ chẵn: 1 час, 2–4 часа́, 5–12 часо́в. Cách đơn giản (chính thức): два три́дцать, во́семь со́рок пять. Hỏi lúc mấy giờ: В кото́ром часу́? / Во ско́лько? — В два часа́, в полови́не тре́тьего.',
          ex:{ ru:'— Во ско́лько начина́ется фильм? — В полови́не седьмо́го, без че́тверти семь мы уже́ в за́ле.', vi:'— Phim bắt đầu lúc mấy giờ? — 6 rưỡi, 7 giờ kém 15 chúng ta đã ở trong rạp.' } },
        { form:'Năm: в две ты́сячи два́дцать пя́том году́ (cách 6 của số thứ tự cuối cùng); tháng: в ма́рте; ngày: пя́того ма́рта', vi:'diễn đạt mốc thời gian',
          note:'Số thứ tự: пе́рвый, второ́й, тре́тий, четвёртый, пя́тый… деся́тый, два́дцать пе́рвый. Tuần/năm trước–sau: на про́шлой неде́ле, в бу́дущем году́.',
          ex:{ ru:'Я роди́лся в две ты́сячи тре́тьем году́, два́дцать второ́го ма́я.', vi:'Tôi sinh năm 2003, ngày 22 tháng Năm.' } }
      ],
      vocab:[
        { ru:'час', vi:'giờ', pos:'danh từ giống đực' },
        { ru:'мину́та', vi:'phút', pos:'danh từ giống cái' },
        { ru:'полови́на', vi:'nửa', pos:'danh từ giống cái' },
        { ru:'че́тверть', vi:'một phần tư (15 phút)', pos:'danh từ giống cái' },
        { ru:'без', vi:'kém (giờ)', pos:'giới từ' },
        { ru:'пе́рвый / второ́й / тре́тий', vi:'thứ nhất / thứ hai / thứ ba', pos:'số thứ tự' },
        { ru:'ты́сяча', vi:'nghìn', pos:'số từ' },
        { ru:'на про́шлой неде́ле', vi:'tuần trước', pos:'cụm cố định' },
        { ru:'на сле́дующей неде́ле', vi:'tuần sau', pos:'cụm cố định' },
        { ru:'в бу́дущем году́', vi:'năm tới', pos:'cụm cố định' },
        { ru:'по́лдень / по́лночь', vi:'giữa trưa / nửa đêm', pos:'danh từ' },
        { ru:'ра́ньше / по́зже', vi:'sớm hơn / muộn hơn', pos:'so sánh' },
        { ru:'да́та', vi:'ngày tháng', pos:'danh từ giống cái' },
        { ru:'роди́ться', vi:'sinh ra', pos:'động từ СВ' },
        { ru:'то́чно', vi:'chính xác', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Кото́рый час? Мои́ часы́ стоя́т.', vi:'Mấy giờ rồi? Đồng hồ mình đứng.' },
        { sp:'B', ru:'Без пятна́дцати де́вять. Во ско́лько у нас ле́кция?', vi:'9 giờ kém 15. Mấy giờ mình có giảng?' },
        { sp:'A', ru:'В полови́не деся́того. Кста́ти, когда́ ты роди́лся?', vi:'9 rưỡi. Nhân tiện, cậu sinh khi nào?' },
        { sp:'B', ru:'Пятна́дцатого а́вгуста две ты́сячи второ́го го́да. А ты?', vi:'Ngày 15 tháng Tám năm 2002. Còn cậu?' }
      ]
    },

    {
      level:'a2', no:12, ru:'У меня́ боли́т голова́', vi:'Sức khoẻ, đi khám',
      skill:'Nói triệu chứng; чу́вствовать себя́; на́до / до́лжен; lời khuyên',
      grammar:[
        { form:'У кого́ боли́т / боля́т + N (cách 1): у меня́ боли́т голова́, боля́т зу́бы', vi:'“ai đau ở đâu”',
          note:'Cấu trúc sở hữu у + cách 2. Quá khứ: боле́л(а). Чу́вствовать себя́ + trạng từ: хорошо́/пло́хо. Заболе́ть = bị ốm; быть больны́м.',
          ex:{ ru:'Вчера́ у меня́ боле́ло го́рло, и я пло́хо себя́ чу́вствовал.', vi:'Hôm qua tôi đau họng và thấy khó chịu.' } },
        { form:'Кому́ + на́до/ну́жно + inf · Кто + до́лжен/должна́/должны́ + inf', vi:'“cần / phải”',
          note:'на́до (cách 3, khách quan): Мне на́до к врачу́. до́лжен (cách 1, hoà hợp giống-số, nghĩa vụ): Ты до́лжен лежа́ть. Lời khuyên: Вам сле́дует…, Принима́йте лека́рство три ра́за в день.',
          ex:{ ru:'Вам на́до лежа́ть и пить мно́го воды́. Вы должны́ принима́ть табле́тки два ра́за в день.', vi:'Anh cần nằm nghỉ và uống nhiều nước. Anh phải uống thuốc hai lần mỗi ngày.' } }
      ],
      vocab:[
        { ru:'боле́ть (боли́т)', vi:'đau', pos:'động từ NSV' },
        { ru:'голова́', vi:'đầu', pos:'danh từ giống cái' },
        { ru:'го́рло', vi:'họng', pos:'danh từ giống trung' },
        { ru:'зуб / зу́бы', vi:'răng', pos:'danh từ' },
        { ru:'живо́т', vi:'bụng', pos:'danh từ giống đực' },
        { ru:'температу́ра', vi:'nhiệt độ, sốt', pos:'danh từ giống cái' },
        { ru:'на́сморк', vi:'sổ mũi', pos:'danh từ giống đực' },
        { ru:'ка́шель', vi:'ho', pos:'danh từ giống đực' },
        { ru:'чу́вствовать себя́', vi:'cảm thấy (trong người)', pos:'động từ NSV' },
        { ru:'заболе́ть', vi:'bị ốm', pos:'động từ СВ' },
        { ru:'лека́рство', vi:'thuốc', pos:'danh từ giống trung' },
        { ru:'табле́тка', vi:'viên thuốc', pos:'danh từ giống cái' },
        { ru:'принима́ть / приня́ть', vi:'uống (thuốc), nhận', pos:'động từ НСВ/СВ' },
        { ru:'до́лжен / должна́', vi:'phải', pos:'tính từ ngắn' },
        { ru:'поликли́ника', vi:'phòng khám', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'До́ктор, у меня́ боли́т го́рло и есть температу́ра.', vi:'Bác sĩ, tôi đau họng và bị sốt.' },
        { sp:'B', ru:'Как вы себя́ чу́вствуете? Ка́шель есть?', vi:'Anh thấy trong người thế nào? Có ho không?' },
        { sp:'A', ru:'Чу́вствую себя́ пло́хо. Ка́шля нет, но есть на́сморк.', vi:'Tôi thấy mệt. Không ho nhưng sổ mũi.' },
        { sp:'B', ru:'Э́то просту́да. Вам на́до лежа́ть три дня и принима́ть э́ти табле́тки два ра́за в день.', vi:'Cảm lạnh thôi. Anh cần nằm nghỉ ba ngày và uống thuốc này hai lần mỗi ngày.' }
      ]
    },

    {
      level:'a2', no:13, ru:'В кафе́', vi:'Ở quán cà phê, nhà hàng',
      skill:'Gọi món lịch sự; хоте́л бы; số lượng với cách 2 số nhiều',
      grammar:[
        { form:'Я хоте́л(а) бы + cách 4 / inf · Да́йте / Принеси́те, пожа́луйста · Мо́жно + cách 4?', vi:'yêu cầu lịch sự',
          note:'хоте́л бы lịch sự hơn хочу́. Мо́жно счёт? = Cho xin hoá đơn. Trả lời: Коне́чно / Сейча́с принесу́.',
          ex:{ ru:'Я хоте́л бы борщ и чай с лимо́ном. И принеси́те, пожа́луйста, счёт.', vi:'Tôi muốn súp củ dền và trà chanh. Và làm ơn mang hoá đơn.' } },
        { form:'Cách 2 số nhiều sau мно́го / ма́ло / не́сколько / 5+: мно́го друзе́й, пять я́блок, не́сколько книг, ма́ло де́нег', vi:'số lượng',
          note:'Đực -ов/-ев (столо́в, музе́ев), -ей (рубле́й, друзе́й); cái/trung -∅ (книг, я́блок, мест); bất quy tắc: люде́й, дете́й, дне́й.',
          ex:{ ru:'В кафе́ бы́ло мно́го люде́й и ма́ло свобо́дных мест.', vi:'Trong quán có nhiều người và ít chỗ trống.' } }
      ],
      vocab:[
        { ru:'кафе́', vi:'quán cà phê', pos:'danh từ giống trung (bất biến)' },
        { ru:'официа́нт', vi:'phục vụ bàn', pos:'danh từ giống đực' },
        { ru:'меню́', vi:'thực đơn', pos:'danh từ giống trung (bất biến)' },
        { ru:'зака́зывать / заказа́ть', vi:'gọi món, đặt', pos:'động từ НСВ/СВ' },
        { ru:'счёт', vi:'hoá đơn', pos:'danh từ giống đực' },
        { ru:'борщ', vi:'súp củ dền', pos:'danh từ giống đực' },
        { ru:'суп', vi:'súp', pos:'danh từ giống đực' },
        { ru:'сала́т', vi:'salad', pos:'danh từ giống đực' },
        { ru:'ку́рица', vi:'thịt gà', pos:'danh từ giống cái' },
        { ru:'карто́шка', vi:'khoai tây', pos:'danh từ giống cái' },
        { ru:'блю́до', vi:'món ăn', pos:'danh từ giống trung' },
        { ru:'вку́сный', vi:'ngon', pos:'tính từ' },
        { ru:'сла́дкий / о́стрый', vi:'ngọt / cay', pos:'tính từ' },
        { ru:'приноси́ть / принести́', vi:'mang đến', pos:'động từ НСВ/СВ' },
        { ru:'счита́ть', vi:'tính; cho rằng', pos:'động từ NSV' }
      ],
      dialogue:[
        { sp:'A', ru:'Здра́вствуйте! Что вы бу́дете зака́зывать?', vi:'Xin chào! Quý khách gọi gì ạ?' },
        { sp:'B', ru:'Я хоте́л бы борщ, сала́т и ку́рицу с карто́шкой.', vi:'Tôi muốn súp củ dền, salad và gà với khoai tây.' },
        { sp:'A', ru:'Что-нибу́дь пить?', vi:'Uống gì không ạ?' },
        { sp:'B', ru:'Чай с лимо́ном, пожа́луйста. И мо́жно сра́зу счёт? У меня́ ма́ло вре́мени.', vi:'Trà chanh. Và cho xin hoá đơn luôn được không? Tôi có ít thời gian.' }
      ]
    },

    {
      level:'a2', no:14, ru:'Пла́ны и мечты́', vi:'Kế hoạch và ước mơ',
      skill:'собира́ться + inf; tương lai СВ; мечта́ть о + cách 6',
      grammar:[
        { form:'собира́ться + inf (định); хоте́ть + inf; tương lai СВ (пойду́, ку́плю, пое́ду)', vi:'nói kế hoạch',
          note:'Ле́том я собира́юсь пое́хать в Росси́ю. Đặc biệt: пойду́, пойдёшь… пое́ду, пое́дешь… ку́плю, ку́пишь… Thời gian tương lai: че́рез год (sau một năm), в сле́дующем году́.',
          ex:{ ru:'Че́рез два го́да я око́нчу акаде́мию и пое́ду рабо́тать в Россию.', vi:'Hai năm nữa tôi sẽ tốt nghiệp học viện và sang Nga làm việc.' } },
        { form:'мечта́ть о + cách 6 / мечта́ть + inf; ду́мать о + cách 6; говори́ть о + cách 6', vi:'giới từ о với cách 6 (“về”)',
          note:'о + phụ âm, об + nguyên âm (об Анне), обо мне. Я мечта́ю о путеше́ствии = Я мечта́ю путеше́ствовать.',
          ex:{ ru:'Я мечта́ю о со́бственной кварти́ре и ча́сто ду́маю о бу́дущем.', vi:'Tôi mơ về một căn hộ của riêng mình và hay nghĩ về tương lai.' } }
      ],
      vocab:[
        { ru:'собира́ться', vi:'định, chuẩn bị', pos:'động từ NSV' },
        { ru:'мечта́ть', vi:'mơ ước', pos:'động từ NSV' },
        { ru:'мечта́', vi:'ước mơ', pos:'danh từ giống cái' },
        { ru:'план', vi:'kế hoạch', pos:'danh từ giống đực' },
        { ru:'ока́нчивать / око́нчить', vi:'tốt nghiệp, kết thúc', pos:'động từ НСВ/СВ' },
        { ru:'че́рез', vi:'sau (khoảng thời gian) (+ cách 4)', pos:'giới từ' },
        { ru:'наде́яться', vi:'hy vọng', pos:'động từ NSV' },
        { ru:'ду́мать о', vi:'nghĩ về', pos:'động từ NSV' },
        { ru:'бу́дущее', vi:'tương lai', pos:'danh từ giống trung' },
        { ru:'со́бственный', vi:'của riêng', pos:'tính từ' },
        { ru:'карье́ра', vi:'sự nghiệp', pos:'danh từ giống cái' },
        { ru:'зараба́тывать', vi:'kiếm tiền', pos:'động từ NSV' },
        { ru:'же́ниться / вы́йти за́муж', vi:'lấy vợ / lấy chồng', pos:'động từ' },
        { ru:'возмо́жность', vi:'khả năng, cơ hội', pos:'danh từ giống cái' },
        { ru:'обо мне́ / о тебе́', vi:'về tôi / về bạn', pos:'cách 6' }
      ],
      dialogue:[
        { sp:'A', ru:'Что ты собира́ешься де́лать по́сле акаде́мии?', vi:'Sau học viện cậu định làm gì?' },
        { sp:'B', ru:'Снача́ла бу́ду служи́ть, а че́рез не́сколько лет пое́ду учи́ться в Росси́ю.', vi:'Đầu tiên đi phục vụ, vài năm nữa sang Nga học tiếp.' },
        { sp:'A', ru:'А о чём ты мечта́ешь?', vi:'Thế cậu mơ ước điều gì?' },
        { sp:'B', ru:'Мечта́ю о со́бственном до́ме и о большо́й семье́. Наде́юсь, всё полу́чится.', vi:'Mơ về ngôi nhà riêng và một gia đình đông. Hy vọng mọi thứ sẽ thành.' }
      ]
    },

    {
      level:'a2', no:15, ru:'Расска́з о себе́', vi:'Kể về bản thân — tổng ôn A2',
      skill:'Bố cục bài kể; liên từ nối đoạn; ôn 6 cách và thể động từ',
      grammar:[
        { form:'Liên từ nối ý: снача́ла … пото́м … наконе́ц; кро́ме того́; одна́ко; поэ́тому; наприме́р; во-пе́рвых … во-вторы́х', vi:'liên kết văn bản',
          note:'Bố cục расска́з о себе́: 1) tên, tuổi, quê; 2) học tập/công việc; 3) gia đình; 4) sở thích; 5) kế hoạch. Mỗi phần 2–3 câu.',
          ex:{ ru:'Во-пе́рвых, я люблю́ спорт, во-вторы́х, му́зыку. Кро́ме того́, я мно́го чита́ю.', vi:'Thứ nhất, tôi thích thể thao, thứ hai là âm nhạc. Ngoài ra, tôi đọc nhiều.' } },
        { form:'Tổng ôn A2: 6 cách · thể НСВ/СВ · động từ chuyển động có tiền tố · кото́рый · е́сли/что́бы · so sánh · -ся', vi:'bản đồ ngữ pháp A2',
          note:'Bảng câu hỏi 6 cách: кто/что (1) · кого́/чего́, отку́да, у кого́ (2) · кому́, к кому́ (3) · кого́/что, куда́ (4) · кем/чем, с кем (5) · о ком/о чём, где (6). Tự kể về mình 10 câu, dùng mỗi cách ít nhất một lần.',
          ex:{ ru:'Меня́ зову́т Хиен, мне 23 го́да. Я живу́ в Хано́е, учу́сь в акаде́мии и мечта́ю стать инжене́ром.', vi:'Tôi tên là Hiển, 23 tuổi. Tôi sống ở Hà Nội, học ở học viện và mơ trở thành kỹ sư.' } }
      ],
      vocab:[
        { ru:'во-пе́рвых', vi:'thứ nhất', pos:'trạng từ' },
        { ru:'во-вторы́х', vi:'thứ hai', pos:'trạng từ' },
        { ru:'кро́ме того́', vi:'ngoài ra', pos:'cụm' },
        { ru:'одна́ко', vi:'tuy nhiên', pos:'liên từ' },
        { ru:'наприме́р', vi:'ví dụ', pos:'trạng từ' },
        { ru:'вообще́', vi:'nói chung', pos:'trạng từ' },
        { ru:'к сча́стью', vi:'may thay', pos:'cụm' },
        { ru:'к сожале́нию', vi:'tiếc thay', pos:'cụm' },
        { ru:'расска́зывать / рассказа́ть', vi:'kể', pos:'động từ НСВ/СВ' },
        { ru:'опи́сывать / описа́ть', vi:'miêu tả', pos:'động từ НСВ/СВ' },
        { ru:'хара́ктер', vi:'tính cách', pos:'danh từ giống đực' },
        { ru:'вне́шность', vi:'ngoại hình', pos:'danh từ giống cái' },
        { ru:'увлече́ние', vi:'sở thích', pos:'danh từ giống trung' },
        { ru:'де́тство', vi:'tuổi thơ', pos:'danh từ giống trung' },
        { ru:'по́мнить', vi:'nhớ', pos:'động từ NSV' }
      ],
      dialogue:[
        { sp:'A', ru:'Расскажи́ немно́го о себе́.', vi:'Kể một chút về cậu đi.' },
        { sp:'B', ru:'Меня́ зову́т Хиен, мне 23 го́да, я из Хайфо́на. Сейча́с я учу́сь в Хано́е, в вое́нной акаде́мии.', vi:'Mình tên Hiển, 23 tuổi, quê Hải Phòng. Hiện học ở Hà Nội, tại học viện quân sự.' },
        { sp:'A', ru:'Чем ты увлека́ешься?', vi:'Cậu có sở thích gì?' },
        { sp:'B', ru:'Во-пе́рвых, футбо́лом, во-вторы́х, ру́сским языко́м. Кро́ме того́, я люблю́ путеше́ствовать. К сожале́нию, вре́мени ма́ло.', vi:'Thứ nhất là bóng đá, thứ hai là tiếng Nga. Ngoài ra mình thích du lịch. Tiếc là ít thời gian.' }
      ]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { ALPHABET_RU, PHON_RU, COURSE_RU };
