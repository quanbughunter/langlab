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
    { id:'a2', ru:'A2 · ТБУ',    vi:'A2 · Cơ bản (Базовый)',      lessons:15, status:'planned' },
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
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { ALPHABET_RU, PHON_RU, COURSE_RU };
