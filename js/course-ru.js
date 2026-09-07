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
    { id:'b1', ru:'B1 · ТРКИ-1', vi:'B1 · Trung cấp 1',           lessons:15, status:'active' },
    { id:'b2', ru:'B2 · ТРКИ-2', vi:'B2 · Trung cấp 2',           lessons:15, status:'active' }
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
    },

    /* ================= B1 ================= */
    {
      level:'b1', no:1, ru:'Вид глаго́ла: тонкости', vi:'Thể động từ — những điểm tinh tế',
      skill:'Chọn thể trong quá khứ/tương lai; từ tín hiệu; phủ định và mệnh lệnh với thể',
      grammar:[
        { form:'НСВ: quá trình, lặp lại, sự kiện đã xảy ra nói chung (факт) · СВ: kết quả, một lần, chuỗi hành động nối tiếp', vi:'nguyên tắc chọn thể',
          note:'Từ tín hiệu НСВ: всегда́, ча́сто, обы́чно, до́лго, ка́ждый день, всё вре́мя. СВ: вдруг, наконе́ц, сра́зу, уже́, одна́жды, за час. Chuỗi hành động: Он вошёл, сел и на́чал чита́ть (СВ). Hỏi “đã từng chưa”: Ты чита́л «Войну́ и мир»? (НСВ, факт).',
          ex:{ ru:'Я до́лго писа́л докла́д и наконе́ц написа́л его́ за два дня до защи́ты.', vi:'Tôi viết báo cáo rất lâu và cuối cùng hoàn thành hai ngày trước buổi bảo vệ.' } },
        { form:'Phủ định: не + НСВ (không hề làm) / не + СВ (định làm nhưng không xong) · Mệnh lệnh: НСВ (không làm!, lời mời chung), СВ (yêu cầu một lần)', vi:'thể trong phủ định và mệnh lệnh',
          note:'Я не чита́л э́то письмо́ (chưa hề đọc) — Я не прочита́л письмо́ (đọc chưa xong). Не открыва́й окно́! (đừng mở) — Не откро́й окно́! (coi chừng lỡ mở). Заходи́те, сади́тесь (mời chung) — Сади́тесь на э́то ме́сто (một lần).',
          ex:{ ru:'Не забу́дь позвони́ть ма́ме! И не звони́ мне по́сле оди́ннадцати.', vi:'Đừng quên gọi cho mẹ nhé! Và đừng gọi tôi sau 11 giờ.' } }
      ],
      vocab:[
        { ru:'вдруг', vi:'bỗng nhiên', pos:'trạng từ' },
        { ru:'сра́зу', vi:'ngay lập tức', pos:'trạng từ' },
        { ru:'одна́жды', vi:'một lần nọ', pos:'trạng từ' },
        { ru:'постепе́нно', vi:'dần dần', pos:'trạng từ' },
        { ru:'докла́д', vi:'báo cáo (thuyết trình)', pos:'danh từ giống đực' },
        { ru:'защи́та', vi:'buổi bảo vệ (luận văn)', pos:'danh từ giống cái' },
        { ru:'добива́ться / доби́ться', vi:'đạt được (+ cách 2)', pos:'động từ НСВ/СВ' },
        { ru:'привыка́ть / привы́кнуть', vi:'quen (к + cách 3)', pos:'động từ НСВ/СВ' },
        { ru:'замеча́ть / заме́тить', vi:'nhận thấy', pos:'động từ НСВ/СВ' },
        { ru:'происходи́ть / произойти́', vi:'xảy ra', pos:'động từ НСВ/СВ' },
        { ru:'уда́ваться / уда́ться', vi:'thành công (кому + inf)', pos:'động từ НСВ/СВ' },
        { ru:'факт', vi:'sự kiện, thực tế', pos:'danh từ giống đực' },
        { ru:'по́пытка', vi:'nỗ lực, lần thử', pos:'danh từ giống cái' },
        { ru:'терпе́ние', vi:'sự kiên nhẫn', pos:'danh từ giống trung' },
        { ru:'заверша́ть / заверши́ть', vi:'hoàn tất', pos:'động từ НСВ/СВ' }
      ],
      dialogue:[
        { sp:'A', ru:'Ты чита́л «Ма́стера и Маргари́ту»?', vi:'Cậu đã đọc «Nghệ nhân và Margarita» chưa?' },
        { sp:'B', ru:'Чита́л, но не дочита́л: бро́сил на середи́не. А ты?', vi:'Đọc rồi nhưng chưa đọc hết: bỏ dở giữa chừng. Còn cậu?' },
        { sp:'A', ru:'Я прочита́л её за неде́лю и сра́зу на́чал чита́ть второ́й раз.', vi:'Mình đọc xong trong một tuần và ngay lập tức đọc lần hai.' },
        { sp:'B', ru:'Здо́рово. Не забу́дь дать мне свои́ замеча́ния — я попро́бую ещё раз.', vi:'Tuyệt. Đừng quên cho mình nhận xét nhé — mình sẽ thử lại lần nữa.' }
      ]
    },

    {
      level:'b1', no:2, ru:'Действи́тельные прича́стия', vi:'Tính động từ chủ động',
      skill:'Cấu tạo và dùng причастие -ущ/-ющ/-ащ/-ящ, -вш/-ш; thay cho который',
      grammar:[
        { form:'Hiện tại: gốc ngôi 3 số nhiều + -ущ-/-ющ- (nhóm I), -ащ-/-ящ- (nhóm II) + đuôi tính từ: чита́ющий, говоря́щий', vi:'tính động từ chủ động hiện tại (chỉ từ НСВ)',
          note:'= кото́рый чита́ет. Hoà hợp giống, số, cách với danh từ: студе́нты, чита́ющие кни́ги = студе́нты, кото́рые чита́ют кни́ги. Từ -ся giữ -ся: уча́щийся.',
          ex:{ ru:'Челове́к, сидя́щий у окна́, — наш но́вый преподава́тель.', vi:'Người đang ngồi cạnh cửa sổ là giảng viên mới của chúng ta.' } },
        { form:'Quá khứ: gốc quá khứ + -вш- (sau nguyên âm) / -ш- (sau phụ âm): чита́вший, прочита́вший, принёсший', vi:'tính động từ chủ động quá khứ (НСВ và СВ)',
          note:'= кото́рый чита́л/прочита́л. Văn viết dùng nhiều; văn nói thay bằng кото́рый. Dấu phẩy khi cụm đứng sau danh từ.',
          ex:{ ru:'Студе́нты, сда́вшие экза́мен, мо́гут уе́хать на кани́кулы.', vi:'Những sinh viên đã thi xong có thể đi nghỉ.' } }
      ],
      vocab:[
        { ru:'прича́стие', vi:'tính động từ', pos:'danh từ giống trung' },
        { ru:'уча́щийся', vi:'người học', pos:'danh từ (причастие)' },
        { ru:'сле́дующий', vi:'tiếp theo', pos:'tính từ (причастие)' },
        { ru:'настоя́щий', vi:'hiện tại; đích thực', pos:'tính từ' },
        { ru:'подходя́щий', vi:'phù hợp', pos:'tính từ (причастие)' },
        { ru:'выдаю́щийся', vi:'xuất sắc, kiệt xuất', pos:'tính từ (причастие)' },
        { ru:'окружа́ющий', vi:'xung quanh', pos:'tính từ (причастие)' },
        { ru:'происше́ствие', vi:'sự việc, tai nạn', pos:'danh từ giống trung' },
        { ru:'уча́стник', vi:'người tham gia', pos:'danh từ giống đực' },
        { ru:'побе́дитель', vi:'người chiến thắng', pos:'danh từ giống đực' },
        { ru:'опозда́вший', vi:'người đến muộn', pos:'причастие' },
        { ru:'сдава́ть / сдать', vi:'thi; nộp', pos:'động từ НСВ/СВ' },
        { ru:'кани́кулы', vi:'kỳ nghỉ (học)', pos:'danh từ số nhiều' },
        { ru:'вы́ставка', vi:'triển lãm', pos:'danh từ giống cái' },
        { ru:'худо́жник', vi:'hoạ sĩ', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Кто э́тот челове́к, стоя́щий ря́дом с дире́ктором?', vi:'Người đứng cạnh giám đốc là ai vậy?' },
        { sp:'B', ru:'Э́то худо́жник, написа́вший карти́ны для вы́ставки.', vi:'Đó là hoạ sĩ đã vẽ tranh cho triển lãm.' },
        { sp:'A', ru:'А студе́нты, помога́вшие организова́ть вы́ставку, полу́чат благода́рность?', vi:'Thế những sinh viên đã giúp tổ chức triển lãm có được khen không?' },
        { sp:'B', ru:'Коне́чно. Все уча́ствовавшие бу́дут награждены́ на сле́дующей неде́ле.', vi:'Tất nhiên. Tất cả người tham gia sẽ được khen thưởng vào tuần tới.' }
      ]
    },

    {
      level:'b1', no:3, ru:'Страда́тельные прича́стия', vi:'Tính động từ bị động và dạng ngắn',
      skill:'-ем/-им, -нн/-енн/-т; dạng ngắn сде́лан/-а/-о/-ы; câu bị động',
      grammar:[
        { form:'Hiện tại (НСВ): чита́емый, люби́мый, изуча́емый · Quá khứ (СВ): прочи́танный, постро́енный, откры́тый', vi:'tính động từ bị động',
          note:'Từ động từ ngoại động (có tân ngữ cách 4). -нн- sau -а/-я (напи́санный), -енн- (постро́енный, from -ить), -т- (откры́тый, взя́тый, забы́тый). Tác nhân ở cách 5: кни́га, напи́санная То́лстым.',
          ex:{ ru:'Ко́мната, у́бранная у́тром, к ве́черу опя́ть была́ гря́зной.', vi:'Căn phòng được dọn buổi sáng đến tối lại bẩn.' } },
        { form:'Dạng ngắn (vị ngữ): дом постро́ен / зада́ча решена́ / окно́ откры́то / кни́ги прочи́таны; quá khứ: был постро́ен', vi:'câu bị động với dạng ngắn',
          note:'Dạng ngắn chỉ có СВ, một -н-. Hoà hợp với chủ ngữ. Магази́н закры́т (đang đóng) — Магази́н был закры́т в 8 (đã đóng lúc 8). Tương lai: бу́дет постро́ен.',
          ex:{ ru:'Пи́сьма отпра́влены, докуме́нты подпи́саны, вопро́с решён.', vi:'Thư đã gửi, giấy tờ đã ký, vấn đề đã giải quyết.' } }
      ],
      vocab:[
        { ru:'люби́мый', vi:'yêu thích', pos:'tính từ (причастие)' },
        { ru:'изве́стный', vi:'nổi tiếng', pos:'tính từ' },
        { ru:'постро́енный', vi:'được xây', pos:'причастие' },
        { ru:'откры́тый / закры́тый', vi:'mở / đóng', pos:'причастие' },
        { ru:'подпи́сывать / подписа́ть', vi:'ký', pos:'động từ НСВ/СВ' },
        { ru:'отправля́ть / отпра́вить', vi:'gửi đi', pos:'động từ НСВ/СВ' },
        { ru:'убира́ть / убра́ть', vi:'dọn dẹp', pos:'động từ НСВ/СВ' },
        { ru:'докуме́нт', vi:'giấy tờ, tài liệu', pos:'danh từ giống đực' },
        { ru:'зая́вка', vi:'đơn đăng ký', pos:'danh từ giống cái' },
        { ru:'приня́т / при́нята', vi:'được nhận, được chấp thuận', pos:'dạng ngắn' },
        { ru:'запрещён / разрешён', vi:'bị cấm / được phép', pos:'dạng ngắn' },
        { ru:'постро́ить', vi:'xây', pos:'động từ СВ' },
        { ru:'а́втор', vi:'tác giả', pos:'danh từ giống đực' },
        { ru:'изда́ние', vi:'ấn bản, xuất bản', pos:'danh từ giống trung' },
        { ru:'перево́д', vi:'bản dịch', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Ва́ша зая́вка на конфере́нцию при́нята. Докла́д уже́ напи́сан?', vi:'Đơn đăng ký hội thảo của bạn đã được nhận. Báo cáo viết xong chưa?' },
        { sp:'B', ru:'Напи́сан, но ещё не переведён на англи́йский.', vi:'Viết xong rồi, nhưng chưa được dịch sang tiếng Anh.' },
        { sp:'A', ru:'Перево́д до́лжен быть сдан до пя́тницы. Статьи́, сда́нные по́зже, не бу́дут опублико́ваны.', vi:'Bản dịch phải nộp trước thứ Sáu. Bài nộp muộn sẽ không được đăng.' },
        { sp:'B', ru:'По́нял. Всё бу́дет сде́лано во́время.', vi:'Hiểu rồi. Mọi thứ sẽ được làm đúng hạn.' }
      ]
    },

    {
      level:'b1', no:4, ru:'Дееприча́стия', vi:'Trạng động từ',
      skill:'чита́я / прочита́в; cùng chủ ngữ; nghĩa thời gian, nguyên nhân, cách thức',
      grammar:[
        { form:'НСВ: gốc hiện tại + -я (-а sau ж ш ч щ): чита́я, говоря́, слу́шая — hành động đồng thời', vi:'trạng động từ chưa hoàn thành',
          note:'Chỉ dùng khi cùng chủ ngữ với động từ chính. = когда́ / пока́ + động từ. Không tạo từ: писа́ть, пить, ждать, петь (dùng câu phụ).',
          ex:{ ru:'Слу́шая ле́кцию, студе́нты де́лали заме́тки.', vi:'Vừa nghe giảng, sinh viên vừa ghi chép.' } },
        { form:'СВ: gốc quá khứ + -в / -вши (-ся → -вшись) / -ши: прочита́в, верну́вшись, принёсши — hành động trước', vi:'trạng động từ hoàn thành',
          note:'= по́сле того́ как / когда́ + СВ quá khứ. Đứng đầu câu ngăn cách bằng dấu phẩy. Nghĩa nguyên nhân: Заболе́в, он не пришёл (Vì ốm nên…).',
          ex:{ ru:'Верну́вшись домо́й, я сра́зу позвони́л роди́телям.', vi:'Về đến nhà, tôi gọi ngay cho bố mẹ.' } }
      ],
      vocab:[
        { ru:'дееприча́стие', vi:'trạng động từ', pos:'danh từ giống trung' },
        { ru:'заме́тка', vi:'ghi chú', pos:'danh từ giống cái' },
        { ru:'одновреме́нно', vi:'đồng thời', pos:'trạng từ' },
        { ru:'пре́жде чем', vi:'trước khi', pos:'liên từ' },
        { ru:'по́сле того́ как', vi:'sau khi', pos:'liên từ' },
        { ru:'обраща́ть / обрати́ть внима́ние', vi:'chú ý (на + cách 4)', pos:'cụm động từ' },
        { ru:'учи́тывать / уче́сть', vi:'tính đến, lưu ý', pos:'động từ НСВ/СВ' },
        { ru:'не спеша́', vi:'không vội', pos:'trạng động từ' },
        { ru:'мо́лча', vi:'im lặng', pos:'trạng động từ' },
        { ru:'стоя́ / си́дя / лёжа', vi:'đứng / ngồi / nằm (khi làm gì)', pos:'trạng động từ' },
        { ru:'несмотря́ на', vi:'bất chấp', pos:'giới từ' },
        { ru:'благодаря́', vi:'nhờ (+ cách 3)', pos:'giới từ' },
        { ru:'заболева́ть / заболе́ть', vi:'ngã bệnh', pos:'động từ НСВ/СВ' },
        { ru:'осторо́жно', vi:'cẩn thận', pos:'trạng từ' },
        { ru:'то́чно', vi:'chính xác', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Как ты успева́ешь так мно́го чита́ть?', vi:'Sao cậu đọc được nhiều thế?' },
        { sp:'B', ru:'Чита́ю в метро́, е́дучи на рабо́ту, а ве́чером, гуля́я с соба́кой, слу́шаю аудиокни́ги.', vi:'Mình đọc trên tàu điện lúc đi làm, còn buổi tối, khi dắt chó đi dạo thì nghe sách nói.' },
        { sp:'A', ru:'А заме́тки де́лаешь?', vi:'Có ghi chú không?' },
        { sp:'B', ru:'Обяза́тельно. Прочита́в главу́, я запи́сываю гла́вные мы́сли, не спеша́ и мо́лча.', vi:'Nhất định. Đọc xong một chương, mình ghi các ý chính, thong thả và im lặng.' }
      ]
    },

    {
      level:'b1', no:5, ru:'Глаго́лы движе́ния: перено́сные значе́ния', vi:'Động từ chuyển động: nghĩa bóng và cụm cố định',
      skill:'при-/у-/про-/до-/об-/за- với nghĩa mở rộng; thành ngữ thông dụng',
      grammar:[
        { form:'про- (đi qua/suốt: пройти́ курс, проводи́ть вре́мя) · до- (tới đích: дойти́ до су́ти) · об- (vòng quanh: обойти́ го́род) · за- (ghé: зайти́ к дру́гу, зайти́ в магази́н)', vi:'tiền tố ít gặp hơn',
          note:'Проходи́ть ми́мо = đi ngang qua; проводи́ть о́тпуск = trải qua kỳ nghỉ; доводи́ть до конца́ = làm đến cùng; обходи́ться без = xoay xở không cần; заходи́те! = mời ghé vào.',
          ex:{ ru:'По доро́ге домо́й я зашёл в апте́ку и обошёл весь ры́нок в по́исках лека́рства.', vi:'Trên đường về tôi ghé hiệu thuốc và đi khắp chợ tìm thuốc.' } },
        { form:'Nghĩa bóng: приходи́ть в го́лову (nảy ra ý), выходи́ть из себя́ (mất bình tĩnh), переходи́ть к де́лу (vào việc), вести́ себя́ (cư xử), идти́ навстре́чу (nhượng bộ), вре́мя идёт/лети́т', vi:'thành ngữ với động từ chuyển động',
          note:'Идти́ còn dùng với: дождь идёт, фильм идёт (đang chiếu), часы́ иду́т, э́то пла́тье тебе́ идёт (hợp), де́ло идёт хорошо́.',
          ex:{ ru:'Мне пришла́ в го́лову иде́я, но дава́йте сра́зу перейдём к де́лу.', vi:'Tôi nảy ra một ý, nhưng ta hãy vào việc luôn.' } }
      ],
      vocab:[
        { ru:'проходи́ть / пройти́', vi:'đi qua; trải qua', pos:'động từ НСВ/СВ' },
        { ru:'проводи́ть / провести́', vi:'tiến hành; trải qua (thời gian)', pos:'động từ НСВ/СВ' },
        { ru:'доходи́ть / дойти́', vi:'đi tới', pos:'động từ НСВ/СВ' },
        { ru:'обходи́ть / обойти́', vi:'đi vòng, đi khắp', pos:'động từ НСВ/СВ' },
        { ru:'заходи́ть / зайти́', vi:'ghé vào', pos:'động từ НСВ/СВ' },
        { ru:'приходи́ть в го́лову', vi:'nảy ra ý', pos:'thành ngữ' },
        { ru:'выходи́ть из себя́', vi:'mất bình tĩnh', pos:'thành ngữ' },
        { ru:'переходи́ть к де́лу', vi:'vào việc chính', pos:'thành ngữ' },
        { ru:'вести́ себя́', vi:'cư xử', pos:'thành ngữ' },
        { ru:'идти́ навстре́чу', vi:'nhượng bộ, tạo điều kiện', pos:'thành ngữ' },
        { ru:'ми́мо', vi:'ngang qua', pos:'trạng từ / giới từ' },
        { ru:'по́иск', vi:'sự tìm kiếm', pos:'danh từ giống đực' },
        { ru:'обходи́ться без', vi:'xoay xở không cần', pos:'cụm động từ' },
        { ru:'суть', vi:'bản chất', pos:'danh từ giống cái' },
        { ru:'терпели́во', vi:'kiên nhẫn', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Дава́йте перейдём к де́лу: как прошла́ встре́ча с партнёрами?', vi:'Ta vào việc luôn: cuộc gặp với đối tác diễn ra thế nào?' },
        { sp:'B', ru:'Непро́сто. Снача́ла они́ вели́ себя́ хо́лодно, но пото́м пошли́ нам навстре́чу.', vi:'Không đơn giản. Ban đầu họ lạnh nhạt, nhưng sau đó đã nhượng bộ.' },
        { sp:'A', ru:'Кто-нибу́дь вы́шел из себя́?', vi:'Có ai mất bình tĩnh không?' },
        { sp:'B', ru:'Нет, все терпели́во дошли́ до су́ти. Мне да́же пришла́ в го́лову но́вая иде́я.', vi:'Không, mọi người kiên nhẫn đi tới bản chất vấn đề. Mình còn nảy ra ý mới.' }
      ]
    },

    {
      level:'b1', no:6, ru:'Ко́свенная речь', vi:'Lời nói gián tiếp',
      skill:'сказа́л, что…; спроси́л, …ли; попроси́л, что́бы…; đổi ngôi và trạng từ',
      grammar:[
        { form:'Kể: X сказа́л, что + mệnh đề (giữ nguyên thì!) · Hỏi có/không: X спроси́л, + động từ + ли · Hỏi có từ hỏi: X спроси́л, где/когда́/почему́…', vi:'chuyển câu kể và câu hỏi',
          note:'Tiếng Nga KHÔNG lùi thì: Он сказа́л: «Я приду́» → Он сказа́л, что (он) придёт. Đại từ đổi theo ngữ cảnh. «Ты был там?» → Он спроси́л, был ли я там (ли sau từ được hỏi).',
          ex:{ ru:'Анна спроси́ла, пойду́ ли я на конце́рт, и сказа́ла, что биле́ты уже́ ку́плены.', vi:'Anna hỏi liệu tôi có đi hoà nhạc không và nói rằng vé đã mua rồi.' } },
        { form:'Yêu cầu/mệnh lệnh: X попроси́л / сказа́л / посове́товал, что́бы Y + quá khứ (hoặc + inf khi cùng người)', vi:'chuyển câu cầu khiến',
          note:'«Позвони́ мне!» → Она́ попроси́ла, что́бы я позвони́л ей = Она́ попроси́ла меня́ позвони́ть ей. Trạng từ: сего́дня → в тот день, за́втра → на сле́дующий день, здесь → там (khi kể lại sau).',
          ex:{ ru:'Врач посове́товал, что́бы я бо́льше отдыха́л и ме́ньше сиде́л за компью́тером.', vi:'Bác sĩ khuyên tôi nghỉ nhiều hơn và ngồi máy tính ít hơn.' } }
      ],
      vocab:[
        { ru:'ко́свенная речь', vi:'lời nói gián tiếp', pos:'thuật ngữ' },
        { ru:'пряма́я речь', vi:'lời nói trực tiếp', pos:'thuật ngữ' },
        { ru:'сообща́ть / сообщи́ть', vi:'thông báo', pos:'động từ НСВ/СВ' },
        { ru:'утвержда́ть', vi:'khẳng định', pos:'động từ NSV' },
        { ru:'спра́шивать / спроси́ть', vi:'hỏi', pos:'động từ НСВ/СВ' },
        { ru:'интересова́ться', vi:'hỏi thăm, quan tâm', pos:'động từ NSV' },
        { ru:'проси́ть / попроси́ть', vi:'nhờ, xin', pos:'động từ НСВ/СВ' },
        { ru:'сове́товать / посове́товать', vi:'khuyên', pos:'động từ НСВ/СВ' },
        { ru:'предлага́ть / предложи́ть', vi:'đề nghị', pos:'động từ НСВ/СВ' },
        { ru:'обеща́ть / пообеща́ть', vi:'hứa', pos:'động từ НСВ/СВ' },
        { ru:'ли', vi:'liệu … có', pos:'tiểu từ' },
        { ru:'на сле́дующий день', vi:'ngày hôm sau', pos:'cụm cố định' },
        { ru:'в тот день', vi:'hôm đó', pos:'cụm cố định' },
        { ru:'накану́не', vi:'hôm trước, đêm trước', pos:'trạng từ' },
        { ru:'переда́ть', vi:'chuyển lời', pos:'động từ СВ' }
      ],
      dialogue:[
        { sp:'A', ru:'Что сказа́л дека́н?', vi:'Trưởng khoa nói gì?' },
        { sp:'B', ru:'Он сказа́л, что экза́мен перено́сится, и спроси́л, гото́вы ли мы сдава́ть в пя́тницу.', vi:'Thầy nói kỳ thi được dời và hỏi liệu chúng ta có sẵn sàng thi vào thứ Sáu không.' },
        { sp:'A', ru:'А что ты отве́тил?', vi:'Thế cậu trả lời sao?' },
        { sp:'B', ru:'Я попроси́л, что́бы нам да́ли ещё два дня, и пообеща́л, что все придём подгото́вленными.', vi:'Mình xin thêm hai ngày và hứa rằng tất cả sẽ đến với sự chuẩn bị tốt.' }
      ]
    },

    {
      level:'b1', no:7, ru:'Е́сли бы…', vi:'Thức giả định',
      skill:'если бы + бы; ước muốn; хоте́лось бы; жаль, что',
      grammar:[
        { form:'Е́сли бы + quá khứ, + quá khứ + бы — giả định trái với thực tế (hiện tại hoặc quá khứ)', vi:'câu điều kiện không thật',
          note:'Е́сли бы у меня́ бы́ло вре́мя, я бы пое́хал (nhưng không có). Cùng một dạng cho cả hiện tại và quá khứ; ngữ cảnh quyết định. бы có thể đứng sau động từ hoặc sau từ được nhấn.',
          ex:{ ru:'Е́сли бы я знал ру́сский лу́чше, я бы по́нял э́тот фильм без субти́тров.', vi:'Nếu tôi biết tiếng Nga tốt hơn, tôi đã hiểu bộ phim này không cần phụ đề.' } },
        { form:'Mong muốn lịch sự/ước: Я хоте́л бы…, Мне хоте́лось бы…, Хорошо́ бы…, Е́сли бы то́лько…; tiếc: Жаль, что…', vi:'ước muốn và tiếc nuối',
          note:'Хоте́лось бы + inf lịch sự hơn хочу́. Не могли́ бы вы + inf? = Ông/bà có thể … không? Жаль, что он не пришёл.',
          ex:{ ru:'Не могли́ бы вы говори́ть ме́дленнее? Мне хоте́лось бы поня́ть ка́ждое сло́во.', vi:'Ông có thể nói chậm hơn không? Tôi muốn hiểu từng từ.' } }
      ],
      vocab:[
        { ru:'бы', vi:'tiểu từ giả định', pos:'tiểu từ' },
        { ru:'хоте́лось бы', vi:'muốn (lịch sự)', pos:'cụm' },
        { ru:'не могли́ бы вы', vi:'ông/bà có thể … không', pos:'cụm' },
        { ru:'жаль', vi:'tiếc', pos:'trạng từ vị ngữ' },
        { ru:'сожале́ть', vi:'tiếc nuối (о + cách 6)', pos:'động từ NSV' },
        { ru:'мечта́', vi:'ước mơ', pos:'danh từ giống cái' },
        { ru:'возмо́жность', vi:'khả năng', pos:'danh từ giống cái' },
        { ru:'усло́вие', vi:'điều kiện', pos:'danh từ giống trung' },
        { ru:'субти́тры', vi:'phụ đề', pos:'danh từ số nhiều' },
        { ru:'ина́че', vi:'khác đi; nếu không', pos:'trạng từ' },
        { ru:'на твоём ме́сте', vi:'ở địa vị cậu', pos:'cụm cố định' },
        { ru:'вы́бор', vi:'sự lựa chọn', pos:'danh từ giống đực' },
        { ru:'реша́ться / реши́ться', vi:'dám quyết', pos:'động từ НСВ/СВ' },
        { ru:'рискова́ть', vi:'mạo hiểm', pos:'động từ NSV' },
        { ru:'упуска́ть / упусти́ть', vi:'bỏ lỡ', pos:'động từ НСВ/СВ' }
      ],
      dialogue:[
        { sp:'A', ru:'Е́сли бы ты мог вы́брать любо́й го́род, где бы ты жил?', vi:'Nếu được chọn bất kỳ thành phố nào, cậu sẽ sống ở đâu?' },
        { sp:'B', ru:'Наве́рное, в Санкт-Петербу́рге. Жаль, что я там ещё не́ был.', vi:'Chắc là Saint-Petersburg. Tiếc là mình chưa từng đến đó.' },
        { sp:'A', ru:'На твоём ме́сте я бы пое́хал ле́том, пока́ бе́лые но́чи.', vi:'Ở địa vị cậu mình sẽ đi vào mùa hè, khi còn đêm trắng.' },
        { sp:'B', ru:'Хоте́лось бы. Е́сли бы не экза́мены, я бы уе́хал за́втра же.', vi:'Muốn lắm. Nếu không phải thi, mình đi ngay ngày mai.' }
      ]
    },

    {
      level:'b1', no:8, ru:'Хотя́, поско́льку, для того́ что́бы', vi:'Câu phức: nhượng bộ, nguyên nhân, mục đích',
      skill:'хотя́ / несмотря́ на то что; так как / поско́льку; для того́ что́бы; в то вре́мя как',
      grammar:[
        { form:'Nhượng bộ: хотя́ … , (но/всё-таки) … · несмотря́ на то что … · несмотря́ на + cách 4', vi:'“mặc dù”',
          note:'Хотя́ шёл дождь, мы пошли́ гуля́ть = Несмотря́ на дождь, мы пошли́ гуля́ть. Đảo vế tuỳ ý; dấu phẩy ngăn cách.',
          ex:{ ru:'Несмотря́ на то что он о́чень за́нят, он всегда́ нахо́дит вре́мя для семьи́.', vi:'Mặc dù rất bận, anh ấy luôn tìm được thời gian cho gia đình.' } },
        { form:'Nguyên nhân sách vở: так как / поско́льку (đứng đầu được) · Mục đích: для того́ что́бы · Đối chiếu: в то вре́мя как / тогда́ как', vi:'liên từ văn viết',
          note:'Потому́ что không đứng đầu câu; так как/поско́льку thì được: Поско́льку биле́тов не́ было, мы оста́лись до́ма. В то вре́мя как оди́н рабо́тает, друго́й отдыха́ет.',
          ex:{ ru:'Поско́льку встре́ча перенесена́, у нас есть вре́мя для того́ что́бы подгото́виться лу́чше.', vi:'Vì cuộc họp đã dời, chúng ta có thời gian để chuẩn bị tốt hơn.' } }
      ],
      vocab:[
        { ru:'хотя́', vi:'mặc dù', pos:'liên từ' },
        { ru:'несмотря́ на то что', vi:'bất chấp việc', pos:'liên từ' },
        { ru:'поско́льку', vi:'vì (văn viết)', pos:'liên từ' },
        { ru:'для того́ что́бы', vi:'để (nhấn mạnh)', pos:'liên từ' },
        { ru:'в то вре́мя как', vi:'trong khi', pos:'liên từ' },
        { ru:'всё-таки', vi:'dù sao, vẫn', pos:'tiểu từ' },
        { ru:'зато́', vi:'bù lại', pos:'liên từ' },
        { ru:'ины́ми слова́ми', vi:'nói cách khác', pos:'cụm' },
        { ru:'сле́довательно', vi:'do đó', pos:'trạng từ' },
        { ru:'таки́м о́бразом', vi:'như vậy', pos:'cụm' },
        { ru:'за́нят / занята́', vi:'bận', pos:'tính từ ngắn' },
        { ru:'находи́ть / найти́', vi:'tìm thấy', pos:'động từ НСВ/СВ' },
        { ru:'переноси́ть / перенести́', vi:'dời (lịch)', pos:'động từ НСВ/СВ' },
        { ru:'причи́на / сле́дствие', vi:'nguyên nhân / hệ quả', pos:'danh từ' },
        { ru:'обстоя́тельство', vi:'hoàn cảnh', pos:'danh từ giống trung' }
      ],
      dialogue:[
        { sp:'A', ru:'Ты пойдёшь на трениро́вку, хотя́ идёт снег?', vi:'Cậu vẫn đi tập dù trời có tuyết à?' },
        { sp:'B', ru:'Пойду́. Несмотря́ на пого́ду, тре́нер ждёт всех, поско́льку че́рез неде́лю соревнова́ния.', vi:'Đi chứ. Bất chấp thời tiết, huấn luyện viên đợi tất cả, vì một tuần nữa là thi đấu.' },
        { sp:'A', ru:'В то вре́мя как ты бе́гаешь по сне́гу, я бу́ду пить чай до́ма.', vi:'Trong khi cậu chạy trên tuyết, mình sẽ uống trà ở nhà.' },
        { sp:'B', ru:'Зато́ я вы́играю, а ты бу́дешь боле́ть за меня́. Таки́м о́бразом, все дово́льны.', vi:'Bù lại mình sẽ thắng, còn cậu cổ vũ. Như vậy ai cũng hài lòng.' }
      ]
    },

    {
      level:'b1', no:9, ru:'Кто-то, кто-нибу́дь, никто́', vi:'Đại từ bất định và phủ định',
      skill:'-то / -нибу́дь / -либо / ко́е-; никто́ / ничто́; не́кого / не́чего',
      grammar:[
        { form:'-то (có nhưng không rõ, đã xảy ra) · -нибу́дь (bất kỳ, chưa xảy ra: câu hỏi, cầu khiến, tương lai) · -либо (văn viết = -нибудь) · ко́е- (một số, người nói biết)', vi:'đại từ bất định',
          note:'Кто́-то звони́л (đã có ai gọi). Кто-нибу́дь звони́л? (có ai gọi không?). Купи́ что-нибу́дь. Ко́е-кто уже́ зна́ет. Biến cách phần gốc: кого́-то, кому́-нибудь.',
          ex:{ ru:'Кто́-то оста́вил су́мку. Е́сли кто-нибу́дь её и́щет, пусть подойдёт к охра́не.', vi:'Ai đó bỏ quên túi. Nếu có ai tìm nó, hãy đến chỗ bảo vệ.' } },
        { form:'никто́ / ничто́ / никогда́ / нигде́ + не (phủ định kép) · не́кого / не́чего / не́когда / не́где + inf (không có ai/gì/lúc/chỗ để)', vi:'đại từ phủ định',
          note:'Никто́ не пришёл. Giới từ chen giữa: ни у кого́, ни с кем, не́ с кем. Мне не́когда = tôi không có lúc nào rảnh; Мне не́чего де́лать = tôi không có gì để làm.',
          ex:{ ru:'Ни с кем не посове́товавшись, он реши́л всё сам, и тепе́рь ему́ не́чего сказа́ть.', vi:'Không hỏi ý ai, anh ấy tự quyết tất cả, và giờ chẳng có gì để nói.' } }
      ],
      vocab:[
        { ru:'кто́-то / что́-то', vi:'ai đó / cái gì đó', pos:'đại từ bất định' },
        { ru:'кто-нибу́дь / что-нибу́дь', vi:'bất kỳ ai / bất kỳ gì', pos:'đại từ bất định' },
        { ru:'како́й-нибудь', vi:'nào đó (bất kỳ)', pos:'đại từ bất định' },
        { ru:'где́-то / куда́-нибудь', vi:'ở đâu đó / đi đâu đó', pos:'trạng từ' },
        { ru:'ко́е-кто / ко́е-что', vi:'vài người / vài thứ', pos:'đại từ' },
        { ru:'никто́ / ничто́', vi:'không ai / không gì', pos:'đại từ phủ định' },
        { ru:'ниче́й', vi:'không của ai', pos:'đại từ phủ định' },
        { ru:'не́кого / не́чего', vi:'không có ai / không có gì để', pos:'đại từ' },
        { ru:'не́когда / не́где', vi:'không có lúc / không có chỗ', pos:'trạng từ' },
        { ru:'оставля́ть / оста́вить', vi:'để lại, bỏ quên', pos:'động từ НСВ/СВ' },
        { ru:'иска́ть', vi:'tìm', pos:'động từ NSV' },
        { ru:'охра́на', vi:'bảo vệ', pos:'danh từ giống cái' },
        { ru:'сове́товаться / посове́товаться', vi:'hỏi ý kiến (с + cách 5)', pos:'động từ НСВ/СВ' },
        { ru:'вряд ли', vi:'khó mà, chưa chắc', pos:'tiểu từ' },
        { ru:'вероя́тно', vi:'có lẽ', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Кто-нибу́дь ви́дел мой слова́рь?', vi:'Có ai thấy từ điển của mình không?' },
        { sp:'B', ru:'Кто́-то положи́л како́й-то слова́рь на подоко́нник. Посмотри́ там.', vi:'Ai đó để một cuốn từ điển nào đó trên bậu cửa sổ. Xem thử.' },
        { sp:'A', ru:'Нет, э́то ниче́й, ста́рый. Мне не́где бо́льше иска́ть.', vi:'Không, cuốn đó không của ai, cũ rồi. Mình chẳng còn chỗ nào để tìm.' },
        { sp:'B', ru:'Спроси́ у охра́ны. Вряд ли кто́-нибудь унёс его́ наро́чно.', vi:'Hỏi bảo vệ đi. Khó mà có ai cố ý mang đi.' }
      ]
    },

    {
      level:'b1', no:10, ru:'Бо́лее ва́жный, важне́йший', vi:'So sánh đầy đủ và cấp cao nhất',
      skill:'бо́лее/ме́нее + adj; наибо́лее; -ейш-/-айш-; чем…, тем…',
      grammar:[
        { form:'Dạng phức: бо́лее / ме́нее + tính từ (đổi đuôi): бо́лее ва́жный вопро́с, ме́нее интере́сная кни́га', vi:'so sánh hơn dạng phức (làm định ngữ)',
          note:'Dạng đơn (важне́е) không đổi đuôi, thường làm vị ngữ; dạng phức làm định ngữ đứng trước danh từ. Không dùng cả hai: ✗ бо́лее важне́е.',
          ex:{ ru:'Э́то бо́лее сло́жная зада́ча, чем каза́лось, но она́ важне́е остальны́х.', vi:'Đây là bài toán phức tạp hơn tưởng, nhưng nó quan trọng hơn những bài còn lại.' } },
        { form:'Cấp cao nhất: са́мый + adj · -ейш-/-айш- (важне́йший, ближа́йший, велича́йший) · наибо́лее/наиме́нее + adj · чем + so sánh, тем + so sánh', vi:'cấp cao nhất và tương quan',
          note:'-айш- sau г к х (высоча́йший, строжа́йший). Наибо́лее văn viết. Чем бо́льше чита́ешь, тем лу́чше пи́шешь.',
          ex:{ ru:'Ближа́йшая ста́нция — в трёх мину́тах, и чем ра́ньше вы́йдем, тем ме́ньше бу́дет наро́ду.', vi:'Ga gần nhất cách ba phút, và càng đi sớm thì càng ít người.' } }
      ],
      vocab:[
        { ru:'бо́лее / ме́нее', vi:'hơn / kém (dạng phức)', pos:'trạng từ' },
        { ru:'наибо́лее / наиме́нее', vi:'nhất / ít nhất', pos:'trạng từ' },
        { ru:'важне́йший', vi:'quan trọng nhất', pos:'tính từ' },
        { ru:'ближа́йший', vi:'gần nhất', pos:'tính từ' },
        { ru:'велича́йший', vi:'vĩ đại nhất', pos:'tính từ' },
        { ru:'сложне́йший', vi:'phức tạp nhất', pos:'tính từ' },
        { ru:'чем…, тем…', vi:'càng… càng…', pos:'cấu trúc' },
        { ru:'по сравне́нию с', vi:'so với (+ cách 5)', pos:'cụm' },
        { ru:'остально́й', vi:'còn lại', pos:'tính từ' },
        { ru:'каза́ться / показа́ться', vi:'có vẻ (кому + cách 5)', pos:'động từ НСВ/СВ' },
        { ru:'наро́д', vi:'nhân dân; đám đông', pos:'danh từ giống đực' },
        { ru:'эффекти́вный', vi:'hiệu quả', pos:'tính từ' },
        { ru:'у́ровень', vi:'trình độ, mức', pos:'danh từ giống đực' },
        { ru:'ка́чество', vi:'chất lượng', pos:'danh từ giống cái' },
        { ru:'значи́тельно', vi:'đáng kể', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Како́й спо́соб изуче́ния языка́ наибо́лее эффекти́вный?', vi:'Cách học ngôn ngữ nào hiệu quả nhất?' },
        { sp:'B', ru:'По сравне́нию с уче́бниками, о́бщение с носи́телями значи́тельно бо́лее поле́зно.', vi:'So với sách giáo khoa, giao tiếp với người bản ngữ hữu ích hơn nhiều.' },
        { sp:'A', ru:'Но и сложне́е. Чем бо́льше говорю́, тем бо́льше оши́бок замеча́ю.', vi:'Nhưng cũng khó hơn. Càng nói nhiều, mình càng nhận ra nhiều lỗi.' },
        { sp:'B', ru:'Э́то важне́йший знак: ты растёшь. Ху́дшая оши́бка — молча́ть.', vi:'Đó là dấu hiệu quan trọng nhất: cậu đang tiến bộ. Lỗi tệ nhất là im lặng.' }
      ]
    },

    {
      level:'b1', no:11, ru:'Дом стро́ится — дом постро́ен', vi:'Câu bị động',
      skill:'-ся với НСВ; dạng ngắn với СВ; tác nhân ở cách 5; chuyển chủ động ↔ bị động',
      grammar:[
        { form:'Bị động НСВ: N (cách 1) + động từ -ся + (кем — cách 5): Дом стро́ится рабо́чими. Пи́сьма отправля́ются ка́ждый день.', vi:'bị động chưa hoàn thành',
          note:'Chủ động: Рабо́чие стро́ят дом. Bị động: Дом стро́ится рабо́чими. Thì quá khứ/tương lai: стро́ился, бу́дет стро́иться.',
          ex:{ ru:'В на́шем университе́те ру́сский язы́к изуча́ется студе́нтами из три́дцати стран.', vi:'Ở trường chúng tôi, tiếng Nga được sinh viên từ 30 nước học.' } },
        { form:'Bị động СВ: N + dạng ngắn của прича́стие (+ был/бу́дет) + кем: Дом постро́ен рабо́чими. Пи́сьмо бы́ло отпра́влено вчера́.', vi:'bị động hoàn thành',
          note:'Không có dạng -ся cho СВ trong nghĩa bị động. Khẩu ngữ ưa dùng câu vô nhân xưng số nhiều: Дом постро́или в про́шлом году́.',
          ex:{ ru:'Э́тот мост был постро́ен в 1930 году́ и недавно́ отремонти́рован.', vi:'Cây cầu này được xây năm 1930 và mới được sửa chữa gần đây.' } }
      ],
      vocab:[
        { ru:'стро́ить / постро́ить', vi:'xây dựng', pos:'động từ НСВ/СВ' },
        { ru:'стро́иться', vi:'được xây', pos:'động từ bị động' },
        { ru:'ремонти́ровать / отремонти́ровать', vi:'sửa chữa', pos:'động từ НСВ/СВ' },
        { ru:'создава́ть / созда́ть', vi:'tạo ra', pos:'động từ НСВ/СВ' },
        { ru:'производи́ть / произвести́', vi:'sản xuất', pos:'động từ НСВ/СВ' },
        { ru:'испо́льзовать', vi:'sử dụng', pos:'động từ НСВ/СВ' },
        { ru:'обсужда́ть / обсуди́ть', vi:'thảo luận', pos:'động từ НСВ/СВ' },
        { ru:'публикова́ть / опубликова́ть', vi:'công bố', pos:'động từ НСВ/СВ' },
        { ru:'рабо́чий', vi:'công nhân', pos:'danh từ giống đực' },
        { ru:'мост', vi:'cây cầu', pos:'danh từ giống đực' },
        { ru:'зда́ние', vi:'toà nhà', pos:'danh từ giống trung' },
        { ru:'страна́ / стра́ны', vi:'nước / các nước', pos:'danh từ' },
        { ru:'учёный', vi:'nhà khoa học', pos:'danh từ giống đực' },
        { ru:'откры́тие', vi:'phát minh, khám phá', pos:'danh từ giống trung' },
        { ru:'недавно́', vi:'gần đây', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Когда́ была́ постро́ена э́та ба́шня?', vi:'Toà tháp này được xây khi nào?' },
        { sp:'B', ru:'В шестна́дцатом ве́ке. Сейча́с она́ ремонти́руется, поэ́тому закры́та для тури́стов.', vi:'Thế kỷ XVI. Hiện đang được sửa nên đóng cửa với khách du lịch.' },
        { sp:'A', ru:'А кем она́ была́ спроекти́рована?', vi:'Nó do ai thiết kế?' },
        { sp:'B', ru:'Италья́нским архите́ктором. Его́ и́мя упомина́ется во всех путеводи́телях.', vi:'Một kiến trúc sư Ý. Tên ông được nhắc trong mọi sách hướng dẫn.' }
      ]
    },

    {
      level:'b1', no:12, ru:'Числи́тельные в падежа́х', vi:'Số từ biến cách',
      skill:'Số đếm ở 6 cách; số tập hợp дво́е/тро́е; phân số, phần trăm',
      grammar:[
        { form:'Biến cách số đếm: оди́н (như tính từ), два/две → двух, двум, двумя́; три → трёх, трём, тремя́; пять → пяти́, пятью́; со́рок → сорока́; сто → ста', vi:'số đếm theo cách',
          note:'Sau giới từ, cả số và danh từ cùng biến: с двумя́ друзья́ми, о́коло трёх часо́в, к пяти́ студе́нтам, в двадцати́ киломе́трах. Số ghép biến mọi phần: с двадцатью́ пятью́ рубля́ми.',
          ex:{ ru:'Мы встре́тимся о́коло трёх часо́в с двумя́ колле́гами из Ханоя.', vi:'Chúng ta sẽ gặp khoảng ba giờ với hai đồng nghiệp từ Hà Nội.' } },
        { form:'Số tập hợp дво́е, тро́е, че́тверо + cách 2 số nhiều (дво́е дете́й, тро́е друзе́й) · Phân số: одна́ вторая, две тре́тьих, полтора́ · Phần trăm: проце́нт/проце́нта/проце́нтов', vi:'số đặc biệt',
          note:'дво́е dùng với danh từ chỉ người nam, trẻ em, danh từ chỉ có số nhiều (дво́е су́ток). полтора́ часа́ = một tiếng rưỡi. 50 проце́нтов, 2,5 проце́нта.',
          ex:{ ru:'У них тро́е дете́й; ста́ршему полтора́ го́да наза́д испо́лнилось два́дцать.', vi:'Họ có ba đứa con; đứa lớn tròn hai mươi cách đây một năm rưỡi.' } }
      ],
      vocab:[
        { ru:'числи́тельное', vi:'số từ', pos:'danh từ giống trung' },
        { ru:'дво́е / тро́е / че́тверо', vi:'hai / ba / bốn (người)', pos:'số tập hợp' },
        { ru:'полтора́', vi:'một rưỡi', pos:'số từ' },
        { ru:'полови́на / треть / че́тверть', vi:'một nửa / một phần ba / một phần tư', pos:'danh từ' },
        { ru:'проце́нт', vi:'phần trăm', pos:'danh từ giống đực' },
        { ru:'су́тки', vi:'một ngày đêm', pos:'danh từ số nhiều' },
        { ru:'исполня́ться / испо́лниться', vi:'tròn (tuổi)', pos:'động từ НСВ/СВ' },
        { ru:'колле́га', vi:'đồng nghiệp', pos:'danh từ' },
        { ru:'киломе́тр', vi:'ki-lô-mét', pos:'danh từ giống đực' },
        { ru:'расстоя́ние', vi:'khoảng cách', pos:'danh từ giống trung' },
        { ru:'приме́рно', vi:'khoảng', pos:'trạng từ' },
        { ru:'ро́вно', vi:'đúng, tròn', pos:'trạng từ' },
        { ru:'коли́чество', vi:'số lượng', pos:'danh từ giống trung' },
        { ru:'большинство́ / меньшинство́', vi:'đa số / thiểu số', pos:'danh từ' },
        { ru:'увели́чиваться / уме́ньшаться', vi:'tăng / giảm', pos:'động từ NSV' }
      ],
      dialogue:[
        { sp:'A', ru:'Ско́лько челове́к бу́дет на конфере́нции?', vi:'Có bao nhiêu người dự hội thảo?' },
        { sp:'B', ru:'О́коло двухсо́т, из них приме́рно три́дцать проце́нтов — иностра́нцы.', vi:'Khoảng hai trăm, trong đó khoảng 30% là người nước ngoài.' },
        { sp:'A', ru:'Я прие́ду с тремя́ колле́гами. Гости́ница далеко́?', vi:'Mình sẽ đến với ba đồng nghiệp. Khách sạn có xa không?' },
        { sp:'B', ru:'В полутора́ киломе́трах, мину́т пятна́дцать пешко́м. Регистра́ция начнётся ро́вно в де́вять.', vi:'Cách một cây rưỡi, khoảng mười lăm phút đi bộ. Đăng ký bắt đầu đúng 9 giờ.' }
      ]
    },

    {
      level:'b1', no:13, ru:'Официа́льное письмо́ и заявле́ние', vi:'Thư chính thức và đơn từ',
      skill:'Bố cục заявле́ние; клише công vụ; xưng hô trang trọng',
      grammar:[
        { form:'Заявле́ние: góc phải trên — Кому́ (Дека́ну факульте́та … И.И. Ивано́ву) / от кого́ (от студе́нта 2 ку́рса Хиена); giữa — ЗАЯВЛЕ́НИЕ; nội dung — Прошу́ + inf …; dưới — ngày, chữ ký', vi:'khuôn mẫu đơn',
          note:'Прошу́ разреши́ть мне… / Прошу́ предоста́вить мне о́тпуск с … по … в связи́ с … / Прошу́ перевести́ меня́ на… Lý do đi với в связи́ с + cách 5, по причи́не + cách 2.',
          ex:{ ru:'Прошу́ разреши́ть мне сдать экза́мен досро́чно в связи́ с уча́стием в соревнова́ниях.', vi:'Kính đề nghị cho phép tôi thi sớm do tham gia thi đấu.' } },
        { form:'Thư chính thức: Уважа́емый/-ая + tên đệm! → mục đích (Обраща́юсь к Вам по вопро́су…; Дово́жу до Ва́шего све́дения, что…) → yêu cầu (Прошу́ Вас…) → kết (Зара́нее благода́рен/-рна. С уваже́нием, …)', vi:'khuôn thư công vụ',
          note:'Vы viết hoa khi xưng hô một người trang trọng. Tránh khẩu ngữ, câu cảm thán. Thư mời: Приглаша́ем Вас приня́ть уча́стие в…',
          ex:{ ru:'Уважа́емая Ольга Петро́вна! Обраща́юсь к Вам по вопро́су прохожде́ния пра́ктики. Прошу́ Вас рассмотре́ть мою́ кандидату́ру. С уваже́нием, Хиен.', vi:'Kính gửi bà Olga Petrovna! Tôi liên hệ về việc thực tập. Kính mong bà xem xét hồ sơ của tôi. Trân trọng, Hiển.' } }
      ],
      vocab:[
        { ru:'заявле́ние', vi:'đơn', pos:'danh từ giống trung' },
        { ru:'уважа́емый', vi:'kính gửi, kính thưa', pos:'tính từ' },
        { ru:'обраща́ться / обрати́ться', vi:'liên hệ, gửi đến (к + cách 3)', pos:'động từ НСВ/СВ' },
        { ru:'по вопро́су', vi:'về vấn đề (+ cách 2)', pos:'cụm' },
        { ru:'в связи́ с', vi:'do, liên quan đến (+ cách 5)', pos:'cụm' },
        { ru:'по причи́не', vi:'vì lý do (+ cách 2)', pos:'cụm' },
        { ru:'разреша́ть / разреши́ть', vi:'cho phép', pos:'động từ НСВ/СВ' },
        { ru:'предоставля́ть / предоста́вить', vi:'cấp, cung cấp', pos:'động từ НСВ/СВ' },
        { ru:'рассма́тривать / рассмотре́ть', vi:'xem xét', pos:'động từ НСВ/СВ' },
        { ru:'дово́дить до све́дения', vi:'thông báo (trang trọng)', pos:'cụm' },
        { ru:'досро́чно', vi:'trước hạn', pos:'trạng từ' },
        { ru:'пра́ктика', vi:'thực tập', pos:'danh từ giống cái' },
        { ru:'кандидату́ра', vi:'ứng viên, hồ sơ', pos:'danh từ giống cái' },
        { ru:'по́дпись', vi:'chữ ký', pos:'danh từ giống cái' },
        { ru:'зара́нее', vi:'trước (từ trước)', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Мне ну́жно уе́хать на неде́лю. Что написа́ть дека́ну?', vi:'Mình cần đi một tuần. Viết gì cho trưởng khoa đây?' },
        { sp:'B', ru:'Заявле́ние: «Прошу́ разреши́ть мне отсу́тствовать с пя́того по двена́дцатое ма́рта в связи́ с семе́йными обстоя́тельствами».', vi:'Đơn: «Kính đề nghị cho phép tôi vắng mặt từ 5 đến 12 tháng Ba do hoàn cảnh gia đình».' },
        { sp:'A', ru:'А в конце́?', vi:'Còn cuối đơn?' },
        { sp:'B', ru:'Да́та, по́дпись. И не забу́дь в пра́вом ве́рхнем углу́: кому́ и от кого́.', vi:'Ngày, chữ ký. Và đừng quên góc trên bên phải: gửi ai và từ ai.' }
      ]
    },

    {
      level:'b1', no:14, ru:'Разгово́рный стиль и этике́т', vi:'Phong cách hội thoại và phép lịch sự',
      skill:'Tiểu từ же, ведь, -то, ну; xưng hô; đồng ý – từ chối khéo',
      grammar:[
        { form:'Tiểu từ hội thoại: же (nhấn: Я же говори́л!), ведь (lý lẽ hiển nhiên: Ведь по́здно уже́), -то (nhấn chủ đề: Я-то зна́ю), ну (thúc giục/bắt đầu), ла́дно (thôi được)', vi:'sắc thái khẩu ngữ',
          note:'Không dùng trong văn viết trang trọng. Đặt sau từ được nhấn: Ты же обеща́л! Куда́ же ты идёшь?',
          ex:{ ru:'Ну ла́дно, пойдём. Ты же зна́ешь, что я не люблю́ опа́здывать, ведь э́то невежли́во.', vi:'Thôi được, đi thôi. Cậu biết mà, mình không thích đến muộn, vì như thế bất lịch sự.' } },
        { form:'Xưng hô: Вы / ты; tên + tên đệm (Ива́н Петро́вич) với người lớn; giảm nhẹ: -ка (скажи́-ка), Извини́те, что беспоко́ю · Từ chối khéo: Бою́сь, что не смогу́; К сожале́нию, у меня́ други́е пла́ны; Дава́йте в друго́й раз', vi:'phép lịch sự',
          note:'Chuyển sang ты chỉ khi được đề nghị: Дава́й на «ты». Đáp lời khen: Спаси́бо, мне прия́тно. Lời mời: Заходи́те в го́сти! — С удово́льствием.',
          ex:{ ru:'— Пойдём в кино́? — Бою́сь, что не смогу́: за́втра экза́мен. Дава́й в друго́й раз, ла́дно?', vi:'— Đi xem phim không? — E là không được: mai thi. Để lần khác nhé, được không?' } }
      ],
      vocab:[
        { ru:'же', vi:'(tiểu từ nhấn mạnh) mà, chứ', pos:'tiểu từ' },
        { ru:'ведь', vi:'(tiểu từ) mà, bởi vì', pos:'tiểu từ' },
        { ru:'ла́дно', vi:'thôi được', pos:'tiểu từ' },
        { ru:'вро́де', vi:'hình như', pos:'tiểu từ' },
        { ru:'-ка', vi:'(hậu tố làm mềm mệnh lệnh)', pos:'tiểu từ' },
        { ru:'беспоко́ить', vi:'làm phiền', pos:'động từ NSV' },
        { ru:'невежли́во', vi:'bất lịch sự', pos:'trạng từ' },
        { ru:'с удово́льствием', vi:'rất sẵn lòng', pos:'cụm' },
        { ru:'бою́сь, что', vi:'e rằng', pos:'cụm' },
        { ru:'в друго́й раз', vi:'lần khác', pos:'cụm' },
        { ru:'догово́рились', vi:'thoả thuận xong, chốt nhé', pos:'động từ' },
        { ru:'на «ты» / на «вы»', vi:'xưng hô thân / trang trọng', pos:'cụm' },
        { ru:'о́тчество', vi:'tên đệm (theo tên cha)', pos:'danh từ giống trung' },
        { ru:'комплиме́нт', vi:'lời khen', pos:'danh từ giống đực' },
        { ru:'неудо́бно', vi:'ngại, bất tiện', pos:'trạng từ' }
      ],
      dialogue:[
        { sp:'A', ru:'Хиен, дава́й на «ты», мы же ровесники.', vi:'Hiển, xưng «ты» đi, mình cùng tuổi mà.' },
        { sp:'B', ru:'Дава́й. Слу́шай, а мо́жно тебя́ попроси́ть? Мне неудо́бно…', vi:'Ừ. Này, nhờ cậu chút được không? Mình ngại quá…' },
        { sp:'A', ru:'Ну говори́-ка, ведь для того́ и друзья́.', vi:'Nói đi chứ, bạn bè là để thế mà.' },
        { sp:'B', ru:'Прове́рь мою́ статью́, ла́дно? — Догово́рились, зайду́ ве́чером.', vi:'Kiểm tra bài viết của mình nhé, được không? — Chốt nhé, tối mình ghé.' }
      ]
    },

    {
      level:'b1', no:15, ru:'Сочине́ние-рассужде́ние', vi:'Bài viết nghị luận — tổng ôn B1',
      skill:'Тезис – аргументы – вывод; từ nối lập luận; tổng ôn ngữ pháp B1',
      grammar:[
        { form:'Bố cục: Те́зис (Я счита́ю, что…; На мой взгляд…) → Аргуме́нты (Во-пе́рвых…; Кро́ме того́…; Наприме́р…) → Контраргуме́нт (С одно́й стороны́…, с друго́й стороны́…) → Вы́вод (Таки́м о́бразом…; Подводя́ ито́г…)', vi:'khung bài nghị luận',
          note:'Trong ТРКИ-1 phần Viết yêu cầu 150–200 từ có lập luận. Dùng câu phức (хотя́, поско́льку, для того́ что́бы), прича́стие/дееприча́стие, bị động — những gì đã học ở B1.',
          ex:{ ru:'На мой взгляд, изуче́ние иностра́нных языко́в необходи́мо ка́ждому. Во-пе́рвых, э́то расширя́ет кругозо́р; во-вторы́х, открыва́ет но́вые возмо́жности. Таки́м о́бразом, вре́мя, потра́ченное на язы́к, никогда́ не пропада́ет.', vi:'Theo tôi, học ngoại ngữ là cần thiết với mọi người. Thứ nhất, nó mở rộng tầm nhìn; thứ hai, mở ra cơ hội mới. Như vậy, thời gian dành cho ngôn ngữ không bao giờ uổng.' } },
        { form:'Tổng ôn B1: thể · причастия · деепричастия · косвенная речь · если бы · хотя/поскольку · -то/-нибудь · более/наиболее · bị động · số từ biến cách · văn phong', vi:'kiểm tra lại 14 bài',
          note:'Tự viết bài 150 từ về «Почему́ я изуча́ю ру́сский язы́к», dùng ít nhất: một прича́стие, một дееприча́стие, một câu е́сли бы, một câu bị động và hai liên từ văn viết.',
          ex:{ ru:'Подводя́ ито́г, хочу́ сказа́ть, что язы́к — э́то не цель, а мост, соединя́ющий люде́й.', vi:'Tóm lại, tôi muốn nói rằng ngôn ngữ không phải mục đích mà là cây cầu nối con người.' } }
      ],
      vocab:[
        { ru:'сочине́ние', vi:'bài văn', pos:'danh từ giống trung' },
        { ru:'рассужде́ние', vi:'nghị luận, lập luận', pos:'danh từ giống trung' },
        { ru:'те́зис', vi:'luận điểm', pos:'danh từ giống đực' },
        { ru:'аргуме́нт', vi:'luận cứ', pos:'danh từ giống đực' },
        { ru:'вы́вод', vi:'kết luận', pos:'danh từ giống đực' },
        { ru:'на мой взгляд', vi:'theo quan điểm của tôi', pos:'cụm' },
        { ru:'с одно́й стороны́… с друго́й стороны́', vi:'một mặt… mặt khác', pos:'cụm' },
        { ru:'подводя́ ито́г', vi:'tóm lại', pos:'cụm' },
        { ru:'расширя́ть кругозо́р', vi:'mở rộng tầm nhìn', pos:'cụm động từ' },
        { ru:'необходи́мо', vi:'cần thiết', pos:'trạng từ vị ngữ' },
        { ru:'тра́тить / потра́тить', vi:'tiêu tốn', pos:'động từ НСВ/СВ' },
        { ru:'пропада́ть / пропа́сть', vi:'mất đi, uổng', pos:'động từ НСВ/СВ' },
        { ru:'соединя́ть / соедини́ть', vi:'nối, kết nối', pos:'động từ НСВ/СВ' },
        { ru:'убеди́тельный', vi:'thuyết phục', pos:'tính từ' },
        { ru:'то́чка зре́ния', vi:'quan điểm', pos:'cụm' }
      ],
      dialogue:[
        { sp:'A', ru:'Как ты стро́ишь сочине́ние на экза́мене?', vi:'Cậu xây dựng bài viết trong kỳ thi thế nào?' },
        { sp:'B', ru:'Снача́ла те́зис, пото́м два-три аргуме́нта с приме́рами, зате́м контраргуме́нт и вы́вод.', vi:'Đầu tiên luận điểm, rồi hai ba luận cứ có ví dụ, sau đó phản luận và kết luận.' },
        { sp:'A', ru:'А е́сли не хвата́ет слов?', vi:'Nếu không đủ từ thì sao?' },
        { sp:'B', ru:'Испо́льзуй прича́стия и дееприча́стия, приводи́ приме́ры из жи́зни — э́то де́лает текст убеди́тельнее.', vi:'Dùng tính động từ và trạng động từ, đưa ví dụ từ đời sống — bài sẽ thuyết phục hơn.' }
      ]
    },

    /* ================= B2 ================= */
    {
      level:'b2', no:1, ru:'Выраже́ние вре́мени', vi:'Diễn đạt thời gian nâng cao',
      skill:'в тече́ние, в хо́де, накану́не, спустя́, по ме́ре того́ как, с тех пор как, до тех пор пока́ не',
      grammar:[
        { form:'Giới từ thời gian sách vở: в тече́ние + cách 2 (trong suốt), в хо́де + cách 2 (trong quá trình), накану́не + cách 2 (đêm trước), спустя́ + cách 4 (sau), по́сле + cách 2, к + cách 3 (đến lúc)', vi:'giới từ thời gian',
          note:'В тече́ние го́да (suốt năm) ≠ че́рез год (sau một năm). Спустя́ два го́да = че́рез два го́да (văn viết). К ве́черу = đến tối. По́сле оконча́ния = sau khi kết thúc.',
          ex:{ ru:'В тече́ние всего́ семе́стра он гото́вился к защи́те, и спустя́ ме́сяц по́сле экза́менов получи́л дипло́м.', vi:'Suốt cả học kỳ anh ấy chuẩn bị bảo vệ, và một tháng sau kỳ thi đã nhận bằng.' } },
        { form:'Liên từ thời gian: по ме́ре того́ как (theo đà), с тех пор как (kể từ khi), до тех пор пока́ не (cho đến khi), как то́лько (ngay khi), пре́жде чем (trước khi), пока́ (trong khi)', vi:'mệnh đề thời gian',
          note:'По ме́ре того́ как расте́т о́пыт, расте́т и уве́ренность. С тех пор как я прие́хал, прошло́ два го́да. Мы ждём до тех пор, пока́ он не позвони́т (пока не + СВ).',
          ex:{ ru:'Как то́лько зако́нчится дождь, мы вы́йдем, а до тех пор бу́дем рабо́тать, пока́ не сде́лаем всё.', vi:'Ngay khi tạnh mưa chúng ta sẽ ra ngoài, còn trước đó sẽ làm việc cho đến khi xong hết.' } }
      ],
      vocab:[
        { ru:'в тече́ние', vi:'trong suốt (+ cách 2)', pos:'giới từ' },
        { ru:'в хо́де', vi:'trong quá trình (+ cách 2)', pos:'giới từ' },
        { ru:'накану́не', vi:'đêm trước, trước hôm (+ cách 2)', pos:'giới từ / trạng từ' },
        { ru:'спустя́', vi:'sau (+ cách 4)', pos:'giới từ' },
        { ru:'по ме́ре того́ как', vi:'theo đà, khi … thì', pos:'liên từ' },
        { ru:'с тех пор как', vi:'kể từ khi', pos:'liên từ' },
        { ru:'до тех пор пока́ не', vi:'cho đến khi', pos:'liên từ' },
        { ru:'как то́лько', vi:'ngay khi', pos:'liên từ' },
        { ru:'семе́стр', vi:'học kỳ', pos:'danh từ giống đực' },
        { ru:'дипло́м', vi:'bằng tốt nghiệp', pos:'danh từ giống đực' },
        { ru:'о́пыт', vi:'kinh nghiệm', pos:'danh từ giống đực' },
        { ru:'уве́ренность', vi:'sự tự tin', pos:'danh từ giống cái' },
        { ru:'своевре́менно', vi:'đúng lúc, kịp thời', pos:'trạng từ' },
        { ru:'постоя́нно', vi:'liên tục', pos:'trạng từ' },
        { ru:'срок', vi:'thời hạn', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'С тех пор как ты на́чал рабо́тать, мы почти́ не ви́димся.', vi:'Kể từ khi cậu đi làm, bọn mình hầu như không gặp nhau.' },
        { sp:'B', ru:'В тече́ние ме́сяца бу́дет ещё тяжеле́е: накану́не сда́чи прое́кта все рабо́тают допоздна́.', vi:'Trong tháng tới còn nặng hơn: trước ngày nộp dự án ai cũng làm đến khuya.' },
        { sp:'A', ru:'А пото́м?', vi:'Rồi sau đó?' },
        { sp:'B', ru:'Как то́лько сдади́м, возьму́ о́тпуск. Спустя́ два го́да без о́тдыха я его́ заслужи́л.', vi:'Ngay khi nộp xong, mình sẽ nghỉ phép. Sau hai năm không nghỉ, mình xứng đáng.' }
      ]
    },

    {
      level:'b2', no:2, ru:'Причи́на и сле́дствие', vi:'Nguyên nhân và hệ quả trong văn viết',
      skill:'ввиду́, всле́дствие, благодаря́, из-за, в си́лу, в результа́те; сле́довательно, зна́чит',
      grammar:[
        { form:'Giới từ nguyên nhân: благодаря́ + cách 3 (nhờ, tích cực) · из-за + cách 2 (do, tiêu cực) · всле́дствие / ввиду́ / в си́лу / в результа́те + cách 2 (trang trọng, trung tính)', vi:'sắc thái nguyên nhân',
          note:'Благодаря́ по́мощи друзе́й (nhờ) ≠ из-за боле́зни (vì, xấu). В си́лу обстоя́тельств = do hoàn cảnh. По + cách 3 với nguyên nhân chủ quan: по оши́бке, по невнима́тельности.',
          ex:{ ru:'Благодаря́ но́вой техноло́гии произво́дство вы́росло, но из-за нехва́тки ка́дров сро́ки сорвали́сь.', vi:'Nhờ công nghệ mới sản xuất tăng, nhưng do thiếu nhân lực nên tiến độ bị vỡ.' } },
        { form:'Hệ quả: сле́довательно, зна́чит, поэ́тому, в результа́те чего́, всле́дствие чего́, так что · Liên từ nguyên nhân: и́бо (cổ), благодаря́ тому́ что, из-за того́ что, ввиду́ того́ что', vi:'nối nguyên nhân – hệ quả',
          note:'Зна́чит khẩu ngữ, сле́довательно khoa học. Из-за того́ что + mệnh đề. В результа́те чего́ nối hai vế: Шёл дождь, в результа́те чего́ доро́гу размы́ло.',
          ex:{ ru:'Ввиду́ того́ что спрос упа́л, це́ны сни́зились, сле́довательно, поку́пка сейча́с вы́годна.', vi:'Do cầu giảm, giá hạ, do đó mua lúc này có lợi.' } }
      ],
      vocab:[
        { ru:'благодаря́', vi:'nhờ (+ cách 3)', pos:'giới từ' },
        { ru:'из-за', vi:'do, vì (+ cách 2)', pos:'giới từ' },
        { ru:'всле́дствие', vi:'do hậu quả của (+ cách 2)', pos:'giới từ' },
        { ru:'ввиду́', vi:'xét vì (+ cách 2)', pos:'giới từ' },
        { ru:'в си́лу', vi:'do (+ cách 2)', pos:'giới từ' },
        { ru:'в результа́те', vi:'kết quả là (+ cách 2)', pos:'giới từ' },
        { ru:'сле́довательно', vi:'do đó', pos:'trạng từ' },
        { ru:'зна́чит', vi:'nghĩa là, vậy thì', pos:'từ nối' },
        { ru:'произво́дство', vi:'sản xuất', pos:'danh từ giống trung' },
        { ru:'нехва́тка', vi:'sự thiếu hụt', pos:'danh từ giống cái' },
        { ru:'ка́дры', vi:'nhân lực', pos:'danh từ số nhiều' },
        { ru:'спрос / предложе́ние', vi:'cầu / cung', pos:'danh từ' },
        { ru:'снижа́ться / сни́зиться', vi:'giảm', pos:'động từ НСВ/СВ' },
        { ru:'вы́годный', vi:'có lợi', pos:'tính từ' },
        { ru:'обстоя́тельства', vi:'hoàn cảnh', pos:'danh từ số nhiều' }
      ],
      dialogue:[
        { sp:'A', ru:'Почему́ отмени́ли рейс?', vi:'Sao chuyến bay bị huỷ?' },
        { sp:'B', ru:'Из-за тума́на. Всле́дствие э́того сотни́ пассажи́ров оста́лись в аэропорту́.', vi:'Do sương mù. Hậu quả là hàng trăm hành khách kẹt ở sân bay.' },
        { sp:'A', ru:'Зна́чит, ты не успе́ешь на конфере́нцию?', vi:'Vậy cậu không kịp hội thảo à?' },
        { sp:'B', ru:'Успе́ю: благодаря́ колле́ге меня́ пересади́ли на у́тренний рейс.', vi:'Kịp: nhờ đồng nghiệp mình được chuyển sang chuyến sáng.' }
      ]
    },

    {
      level:'b2', no:3, ru:'Усту́пка', vi:'Nhượng bộ nâng cao',
      skill:'вопреки́, как бы ни, ско́лько бы ни, что бы ни, пусть',
      grammar:[
        { form:'вопреки́ + cách 3 (bất chấp, ngược với) · несмотря́ на + cách 4 · при всём + cách 6 (при всём уваже́нии) · невзира́я на (trang trọng)', vi:'giới từ nhượng bộ',
          note:'Вопреки́ прогно́зу пого́да была́ хоро́шей. При всём жела́нии я не смогу́ прийти́.',
          ex:{ ru:'Вопреки́ ожида́ниям кри́тиков, фильм собра́л по́лные за́лы.', vi:'Trái với kỳ vọng của giới phê bình, bộ phim kín rạp.' } },
        { form:'Nhượng bộ khái quát: как бы ни / ско́лько бы ни / что бы ни / куда́ бы ни + quá khứ, … (dù … thế nào) · пусть / пуска́й + hiện tại, (но/зато́) …', vi:'“dù có … đi nữa”',
          note:'Как бы тру́дно ни́ было, не сдава́йся. Что бы он ни говори́л, я ему́ не ве́рю. Пусть он молодо́й, зато́ о́пытный.',
          ex:{ ru:'Ско́лько бы раз я ни перечи́тывал э́тот текст, ка́ждый раз нахожу́ что́-то но́вое.', vi:'Dù có đọc lại bài này bao nhiêu lần, mỗi lần tôi vẫn thấy điều gì mới.' } }
      ],
      vocab:[
        { ru:'вопреки́', vi:'bất chấp, trái với (+ cách 3)', pos:'giới từ' },
        { ru:'при всём', vi:'dù rất (+ cách 6)', pos:'cụm' },
        { ru:'как бы ни', vi:'dù … thế nào', pos:'liên từ' },
        { ru:'ско́лько бы ни', vi:'dù bao nhiêu', pos:'liên từ' },
        { ru:'что бы ни', vi:'dù … gì', pos:'liên từ' },
        { ru:'пусть / пуска́й', vi:'dù cho, cứ để', pos:'tiểu từ' },
        { ru:'ожида́ние', vi:'sự mong đợi', pos:'danh từ giống trung' },
        { ru:'кри́тик', vi:'nhà phê bình', pos:'danh từ giống đực' },
        { ru:'сдава́ться / сда́ться', vi:'đầu hàng', pos:'động từ НСВ/СВ' },
        { ru:'перечи́тывать / перечита́ть', vi:'đọc lại', pos:'động từ НСВ/СВ' },
        { ru:'о́пытный', vi:'có kinh nghiệm', pos:'tính từ' },
        { ru:'упря́мый', vi:'bướng bỉnh', pos:'tính từ' },
        { ru:'насто́йчиво', vi:'kiên định, bền bỉ', pos:'trạng từ' },
        { ru:'тем не ме́нее', vi:'tuy nhiên, dù vậy', pos:'cụm' },
        { ru:'всё равно́', vi:'dù sao cũng, vẫn', pos:'cụm' }
      ],
      dialogue:[
        { sp:'A', ru:'Как бы я ни стара́лся, произноше́ние не улучша́ется.', vi:'Dù cố thế nào, phát âm của mình vẫn không khá lên.' },
        { sp:'B', ru:'Пусть ме́дленно, зато́ ве́рно. Ско́лько бы ни занима́лся, гла́вное — регуля́рно.', vi:'Dù chậm nhưng chắc. Dù tập bao nhiêu, quan trọng là đều đặn.' },
        { sp:'A', ru:'Тем не ме́нее иногда́ хо́чется всё бро́сить.', vi:'Dù vậy đôi khi muốn bỏ hết.' },
        { sp:'B', ru:'Вопреки́ э́тому жела́нию ты продолжа́ешь — вот что важне́е всего́.', vi:'Bất chấp ý muốn đó cậu vẫn tiếp tục — đó mới là điều quan trọng nhất.' }
      ]
    },

    {
      level:'b2', no:4, ru:'Усло́вие', vi:'Điều kiện nâng cao',
      skill:'при усло́вии что, в слу́чае е́сли, е́сли бы не, сто́ит… как, ра́зве что',
      grammar:[
        { form:'при усло́вии (что) · в слу́чае (е́сли) / в слу́чае + cách 2 · е́сли бы не + cách 1 (nếu không nhờ) · сто́ит (то́лько) + inf, как … (chỉ cần … là)', vi:'điều kiện trang trọng và đặc biệt',
          note:'При усло́вии своевре́менной опла́ты = với điều kiện thanh toán đúng hạn. В слу́чае пожа́ра звони́те 101. Е́сли бы не ты, я бы не сдал. Сто́ит ему́ войти́, как все замолка́ют.',
          ex:{ ru:'Мы подпи́шем догово́р при усло́вии, что вы гаранти́руете ка́чество, а в слу́чае наруше́ния сро́ков — штраф.', vi:'Chúng tôi sẽ ký hợp đồng với điều kiện các vị bảo đảm chất lượng, còn trường hợp vi phạm thời hạn — phạt.' } },
        { form:'ра́зве что (trừ phi, họa chăng) · ина́че / а то (nếu không thì) · то́лько е́сли · е́сли … то · Điều kiện tiềm ẩn: đảo trật tự với imperative: Приди́ он во́время, ничего́ бы не случи́лось', vi:'điều kiện ngầm',
          note:'Я не пойду́, ра́зве что ты попро́сишь. Поторопи́сь, а то опозда́ем. Cấu trúc imperative giả định là văn nói-văn học.',
          ex:{ ru:'Знай я об э́том ра́ньше, я бы поступи́л ина́че; тепе́рь же ничего́ не изме́нишь, ра́зве что извини́шься.', vi:'Biết sớm hơn tôi đã hành xử khác; giờ thì chẳng đổi được gì, họa chăng là xin lỗi.' } }
      ],
      vocab:[
        { ru:'при усло́вии, что', vi:'với điều kiện là', pos:'liên từ' },
        { ru:'в слу́чае', vi:'trong trường hợp (+ cách 2)', pos:'giới từ' },
        { ru:'е́сли бы не', vi:'nếu không nhờ', pos:'liên từ' },
        { ru:'сто́ит… как', vi:'chỉ cần … là', pos:'cấu trúc' },
        { ru:'ра́зве что', vi:'họa chăng, trừ phi', pos:'liên từ' },
        { ru:'а то', vi:'không thì', pos:'liên từ' },
        { ru:'догово́р', vi:'hợp đồng', pos:'danh từ giống đực' },
        { ru:'гаранти́ровать', vi:'bảo đảm', pos:'động từ' },
        { ru:'наруше́ние', vi:'sự vi phạm', pos:'danh từ giống trung' },
        { ru:'штраф', vi:'tiền phạt', pos:'danh từ giống đực' },
        { ru:'опла́та', vi:'thanh toán', pos:'danh từ giống cái' },
        { ru:'пожа́р', vi:'hoả hoạn', pos:'danh từ giống đực' },
        { ru:'случа́ться / случи́ться', vi:'xảy ra', pos:'động từ НСВ/СВ' },
        { ru:'изменя́ть / измени́ть', vi:'thay đổi', pos:'động từ НСВ/СВ' },
        { ru:'торопи́ться', vi:'vội', pos:'động từ NSV' }
      ],
      dialogue:[
        { sp:'A', ru:'Вы согла́сны на э́ти усло́вия?', vi:'Các vị đồng ý với những điều kiện này chứ?' },
        { sp:'B', ru:'При усло́вии, что срок поста́вки не превы́сит ме́сяца. В слу́чае заде́ржки мы вправе расто́ргнуть догово́р.', vi:'Với điều kiện thời hạn giao hàng không quá một tháng. Trường hợp chậm trễ chúng tôi có quyền huỷ hợp đồng.' },
        { sp:'A', ru:'Заде́ржки не бу́дет, ра́зве что из-за тамо́жни.', vi:'Sẽ không chậm, họa chăng là do hải quan.' },
        { sp:'B', ru:'Е́сли бы не про́шлый о́пыт, я бы вам пове́рил на сло́во. Пропи́шем э́то в догово́ре.', vi:'Nếu không vì kinh nghiệm lần trước, tôi đã tin lời các vị. Ta ghi vào hợp đồng.' }
      ]
    },

    {
      level:'b2', no:5, ru:'Цель', vi:'Mục đích nâng cao',
      skill:'с це́лью, в це́лях, ра́ди, во и́мя; что́бы не; для того́ что́бы',
      grammar:[
        { form:'с це́лью + cách 2 / + inf (trang trọng) · в це́лях + cách 2 (văn bản pháp quy: в це́лях безопа́сности) · ра́ди + cách 2 (vì ai/gì, cảm xúc) · во и́мя + cách 2 (cao cả)', vi:'giới từ mục đích',
          note:'С це́лью повыше́ния ка́чества = để nâng cao chất lượng. Ра́ди дете́й он бро́сил кури́ть. Во и́мя ми́ра.',
          ex:{ ru:'В це́лях эконо́мии вре́мени собра́ние проведу́т онла́йн, а ра́ди удо́бства сотру́дников — ве́чером.', vi:'Để tiết kiệm thời gian cuộc họp sẽ tổ chức trực tuyến, và vì tiện cho nhân viên — vào buổi tối.' } },
        { form:'что́бы не + inf/quá khứ (để không) · для того́ что́бы (nhấn) · с тем что́бы (trang trọng) · Mục đích với động từ chuyển động + inf: пришёл поговори́ть', vi:'mệnh đề mục đích',
          note:'Я записа́л а́дрес, что́бы не забы́ть. Он пришёл (, что́бы) поговори́ть — sau động từ chuyển động có thể bỏ что́бы.',
          ex:{ ru:'Она́ уе́хала в дере́вню, что́бы никто́ не меша́л ей рабо́тать над кни́гой.', vi:'Cô ấy về quê để không ai làm phiền việc viết sách.' } }
      ],
      vocab:[
        { ru:'с це́лью', vi:'với mục đích (+ cách 2)', pos:'giới từ' },
        { ru:'в це́лях', vi:'nhằm (+ cách 2)', pos:'giới từ' },
        { ru:'ра́ди', vi:'vì (+ cách 2)', pos:'giới từ' },
        { ru:'во и́мя', vi:'nhân danh, vì (+ cách 2)', pos:'giới từ' },
        { ru:'с тем что́бы', vi:'nhằm để', pos:'liên từ' },
        { ru:'эконо́мия', vi:'tiết kiệm', pos:'danh từ giống cái' },
        { ru:'безопа́сность', vi:'an toàn', pos:'danh từ giống cái' },
        { ru:'собра́ние', vi:'cuộc họp', pos:'danh từ giống trung' },
        { ru:'сотру́дник', vi:'nhân viên', pos:'danh từ giống đực' },
        { ru:'удо́бство', vi:'sự tiện lợi', pos:'danh từ giống trung' },
        { ru:'повыше́ние', vi:'sự nâng cao', pos:'danh từ giống trung' },
        { ru:'стремле́ние', vi:'sự khát khao, vươn tới', pos:'danh từ giống trung' },
        { ru:'стреми́ться', vi:'hướng tới (к + cách 3)', pos:'động từ NSV' },
        { ru:'добро́', vi:'điều thiện', pos:'danh từ giống trung' },
        { ru:'же́ртвовать', vi:'hy sinh (+ cách 5)', pos:'động từ NSV' }
      ],
      dialogue:[
        { sp:'A', ru:'Ра́ди чего́ ты ка́ждый день встаёшь в пять?', vi:'Vì điều gì mà ngày nào cậu cũng dậy lúc 5 giờ?' },
        { sp:'B', ru:'Ра́ди мечты́. Я гото́влюсь к соревнова́ниям с це́лью попа́сть в сбо́рную.', vi:'Vì ước mơ. Mình chuẩn bị thi đấu với mục đích vào đội tuyển.' },
        { sp:'A', ru:'А не бои́шься, что здоро́вье пострада́ет?', vi:'Không sợ sức khoẻ bị ảnh hưởng à?' },
        { sp:'B', ru:'Что́бы не пострада́ло, у меня́ есть тре́нер и врач. Во и́мя це́ли мо́жно поже́ртвовать сном, но не здоро́вьем.', vi:'Để không bị ảnh hưởng mình có huấn luyện viên và bác sĩ. Vì mục tiêu có thể hy sinh giấc ngủ, chứ không phải sức khoẻ.' }
      ]
    },

    {
      level:'b2', no:6, ru:'Мода́льность', vi:'Tình thái: phải, nên, buộc phải',
      skill:'до́лжен / обя́зан / вы́нужден; сле́дует / сто́ит / прихо́дится; нельзя́ не; не мо́жет не',
      grammar:[
        { form:'до́лжен (phải, nghĩa vụ/dự đoán) · обя́зан (bắt buộc theo luật/đạo đức) · вы́нужден (buộc phải do hoàn cảnh) · Cách 3 + сле́дует (nên, trang trọng) · сто́ит (đáng, nên) · прихо́дится / пришло́сь (đành phải)', vi:'thang độ bắt buộc',
          note:'Он до́лжен был прийти́ (đáng lẽ). Мы обя́заны соблюда́ть пра́вила. Я был вы́нужден отказа́ться. Вам сле́дует обрати́ться к врачу́. Не сто́ит волнова́ться. Мне прихо́дится мно́го е́здить.',
          ex:{ ru:'Сотру́дники обя́заны носи́ть пропуска́, а гостя́м сле́дует зарегистри́роваться, ина́че охра́не придётся их не пусти́ть.', vi:'Nhân viên bắt buộc đeo thẻ, còn khách nên đăng ký, nếu không bảo vệ đành phải không cho vào.' } },
        { form:'Phủ định kép tình thái: нельзя́ не + inf (không thể không) · не мо́жет не + inf · не мог не заме́тить · Khả năng: в состоя́нии / не в состоя́нии + inf; спосо́бен на + cách 4', vi:'khẳng định mạnh qua phủ định',
          note:'Нельзя́ не согласи́ться = phải đồng ý thôi. Я не могу́ не отме́тить = tôi không thể không nhận xét. Он не в состоя́нии рабо́тать сего́дня.',
          ex:{ ru:'Нельзя́ не призна́ть, что кри́тика справедли́ва, хотя́ а́втор не в состоя́нии э́то приня́ть.', vi:'Không thể không thừa nhận lời phê bình là đúng, dù tác giả không thể chấp nhận điều đó.' } }
      ],
      vocab:[
        { ru:'обя́зан / обя́зана', vi:'bắt buộc phải', pos:'tính từ ngắn' },
        { ru:'вы́нужден / вы́нуждена', vi:'buộc phải', pos:'tính từ ngắn' },
        { ru:'сле́дует', vi:'nên (+ cách 3)', pos:'động từ' },
        { ru:'сто́ит', vi:'đáng, nên', pos:'động từ' },
        { ru:'приходи́ться / прийти́сь', vi:'đành phải', pos:'động từ НСВ/СВ' },
        { ru:'нельзя́ не', vi:'không thể không', pos:'cấu trúc' },
        { ru:'в состоя́нии', vi:'có khả năng, đủ sức', pos:'cụm' },
        { ru:'спосо́бен', vi:'có khả năng (на + cách 4)', pos:'tính từ ngắn' },
        { ru:'соблюда́ть', vi:'tuân thủ', pos:'động từ NSV' },
        { ru:'пра́вило', vi:'quy tắc', pos:'danh từ giống trung' },
        { ru:'про́пуск', vi:'thẻ ra vào', pos:'danh từ giống đực' },
        { ru:'признава́ть / призна́ть', vi:'thừa nhận', pos:'động từ НСВ/СВ' },
        { ru:'справедли́вый', vi:'công bằng, đúng', pos:'tính từ' },
        { ru:'отка́зываться / отказа́ться', vi:'từ chối (от + cách 2)', pos:'động từ НСВ/СВ' },
        { ru:'отве́тственность', vi:'trách nhiệm', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'Мне придётся отказа́ться от пое́здки: нача́льник не отпуска́ет.', vi:'Mình đành phải bỏ chuyến đi: sếp không cho.' },
        { sp:'B', ru:'Ты обя́зан отрабо́тать, я понима́ю. Но тебе́ сле́довало предупреди́ть его́ ра́ньше.', vi:'Cậu bắt buộc phải làm, mình hiểu. Nhưng cậu nên báo trước sớm hơn.' },
        { sp:'A', ru:'Нельзя́ не согласи́ться. Я был вы́нужден реши́ть всё в после́дний моме́нт.', vi:'Không thể không đồng ý. Mình buộc phải quyết mọi thứ vào phút chót.' },
        { sp:'B', ru:'Не сто́ит расстра́иваться: пое́дем в сле́дующем ме́сяце.', vi:'Không đáng buồn: tháng sau đi.' }
      ]
    },

    {
      level:'b2', no:7, ru:'Приста́вки глаго́лов', vi:'Tiền tố động từ (không chuyển động)',
      skill:'пере-, до-, за-, недо-, раз-/рас-, при-, от-, с- với nghĩa khái quát',
      grammar:[
        { form:'пере- (lại: переде́лать; quá: пересоли́ть; qua: пережи́ть) · до- (tới cùng: дочита́ть, дописа́ть) · за- (bắt đầu: заговори́ть, запе́ть; kín: закры́ть) · недо- (chưa đủ: недоспа́ть, недооцени́ть)', vi:'tiền tố thay đổi nghĩa',
          note:'Пере- + -ся = qua lại: перепи́сываться, перезва́ниваться. За- + -ся = mải: зачита́ться, заговори́ться. До- + -ся = đạt tới qua nỗ lực: дозвони́ться, дожда́ться.',
          ex:{ ru:'Я так зачита́лся, что недоспа́л, а у́тром пришло́сь переде́лывать рабо́ту.', vi:'Tôi mải đọc đến mức thiếu ngủ, sáng lại phải làm lại công việc.' } },
        { form:'раз-/рас- (ra, tách: разда́ть, рассказа́ть, разойти́сь) · при- (thêm chút, gắn: прикры́ть, приба́вить) · от- (tách rời, xong: отдохну́ть, отказа́ться) · с- (xuống, gộp, một lần: собра́ть, сде́лать)', vi:'các tiền tố sản sinh',
          note:'Раз- trước phụ âm hữu thanh, рас- trước vô thanh: разби́ть / расписа́ть. Đoán nghĩa từ mới bằng tiền tố + gốc: пере + вод → перево́д (dịch, dẫn qua).',
          ex:{ ru:'Разда́в анке́ты, преподава́тель попроси́л отве́тить на все вопро́сы и не отвлека́ться.', vi:'Phát xong phiếu, giảng viên yêu cầu trả lời hết câu hỏi và không xao nhãng.' } }
      ],
      vocab:[
        { ru:'переде́лывать / переде́лать', vi:'làm lại', pos:'động từ НСВ/СВ' },
        { ru:'пережива́ть / пережи́ть', vi:'trải qua; lo lắng', pos:'động từ НСВ/СВ' },
        { ru:'дочи́тывать / дочита́ть', vi:'đọc hết', pos:'động từ НСВ/СВ' },
        { ru:'дозвони́ться', vi:'gọi được (ai)', pos:'động từ СВ' },
        { ru:'заговори́ть', vi:'bắt đầu nói; bắt chuyện', pos:'động từ СВ' },
        { ru:'зачита́ться', vi:'mải đọc', pos:'động từ СВ' },
        { ru:'недооце́нивать / недооцени́ть', vi:'đánh giá thấp', pos:'động từ НСВ/СВ' },
        { ru:'недоспа́ть', vi:'thiếu ngủ', pos:'động từ СВ' },
        { ru:'раздава́ть / разда́ть', vi:'phát ra', pos:'động từ НСВ/СВ' },
        { ru:'расходи́ться / разойти́сь', vi:'giải tán, chia tay', pos:'động từ НСВ/СВ' },
        { ru:'прибавля́ть / приба́вить', vi:'thêm vào', pos:'động từ НСВ/СВ' },
        { ru:'отвлека́ться / отвле́чься', vi:'xao nhãng', pos:'động từ НСВ/СВ' },
        { ru:'собира́ть / собра́ть', vi:'thu gom, tập hợp', pos:'động từ НСВ/СВ' },
        { ru:'анке́та', vi:'phiếu khảo sát', pos:'danh từ giống cái' },
        { ru:'приста́вка', vi:'tiền tố', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'Ты дочита́л отчёт? Я не могла́ тебе́ дозвони́ться.', vi:'Cậu đọc hết báo cáo chưa? Mình gọi mãi không được.' },
        { sp:'B', ru:'Дочита́л и, че́стно говоря́, переде́лал бы полови́ну: а́втор недооцени́л ри́ски.', vi:'Đọc hết rồi, và thật lòng thì muốn làm lại một nửa: tác giả đánh giá thấp rủi ro.' },
        { sp:'A', ru:'Не пережива́й, за́втра разберём вме́сте и разда́дим зада́чи.', vi:'Đừng lo, mai cùng phân tích và phân việc.' },
        { sp:'B', ru:'Дава́й, то́лько не зачита́йся сего́дня, а то опя́ть недоспи́шь.', vi:'Được, nhưng hôm nay đừng mải đọc, kẻo lại thiếu ngủ.' }
      ]
    },

    {
      level:'b2', no:8, ru:'Словообразова́ние', vi:'Cấu tạo từ',
      skill:'Hậu tố danh từ -ость/-ение/-тель/-ник/-ство; tính từ -ский/-ный/-ичный; động từ -ова-/-ирова-',
      grammar:[
        { form:'Danh từ: adj + -ость (тру́дность, ско́рость) · động từ + -ение/-ание (реше́ние, чте́ние) · -тель (người/vật làm: учи́тель, выключа́тель) · -ник/-ница (рабо́тник, учени́ца) · -ство (trạng thái/tập thể: де́тство, о́бщество)', vi:'hậu tố danh từ',
          note:'Đoán từ: незави́симость = не + зави́симый + -ость (độc lập). -ение từ động từ -ить: реши́ть → реше́ние; -ание từ -ать: чита́ть → чте́ние (ngoại lệ), жела́ть → жела́ние.',
          ex:{ ru:'Отве́тственность руководи́теля — приня́тие реше́ний в усло́виях неопределённости.', vi:'Trách nhiệm của người lãnh đạo là ra quyết định trong điều kiện bất định.' } },
        { form:'Tính từ: -ский (thuộc về: университе́тский, вьетна́мский) · -ный (có tính chất: интере́сный) · -ичный/-ический (логи́чный, эконо́мический) · -оватый (hơi: краснова́тый) · Động từ: -ова-/-ева- (сове́товать), -ирова- (планировать, организова́ть)', vi:'hậu tố tính từ và động từ',
          note:'Экономи́чный (tiết kiệm) ≠ экономи́ческий (thuộc kinh tế). Động từ -ирова- thường lưỡng thể: организова́ть (НСВ = СВ).',
          ex:{ ru:'Экономи́чный автомоби́ль — не то же, что экономи́ческий кри́зис: суффи́ксы меня́ют смысл.', vi:'Xe tiết kiệm không giống khủng hoảng kinh tế: hậu tố đổi nghĩa.' } }
      ],
      vocab:[
        { ru:'су́ффикс', vi:'hậu tố', pos:'danh từ giống đực' },
        { ru:'ко́рень', vi:'gốc từ', pos:'danh từ giống đực' },
        { ru:'тру́дность', vi:'khó khăn', pos:'danh từ giống cái' },
        { ru:'незави́симость', vi:'độc lập', pos:'danh từ giống cái' },
        { ru:'реше́ние', vi:'quyết định, lời giải', pos:'danh từ giống trung' },
        { ru:'руководи́тель', vi:'người lãnh đạo', pos:'danh từ giống đực' },
        { ru:'выключа́тель', vi:'công tắc', pos:'danh từ giống đực' },
        { ru:'о́бщество', vi:'xã hội', pos:'danh từ giống trung' },
        { ru:'неопределённость', vi:'sự bất định', pos:'danh từ giống cái' },
        { ru:'логи́чный', vi:'hợp logic', pos:'tính từ' },
        { ru:'экономи́чный / экономи́ческий', vi:'tiết kiệm / thuộc kinh tế', pos:'tính từ' },
        { ru:'краснова́тый', vi:'hơi đỏ', pos:'tính từ' },
        { ru:'плани́ровать', vi:'lập kế hoạch', pos:'động từ NSV' },
        { ru:'организо́вывать / организова́ть', vi:'tổ chức', pos:'động từ НСВ/СВ' },
        { ru:'смысл', vi:'ý nghĩa', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Как ты запомина́ешь сто́лько слов?', vi:'Sao cậu nhớ được nhiều từ thế?' },
        { sp:'B', ru:'По корня́м и су́ффиксам. Уви́дел «ответственность» — ви́жу «отве́т» плюс «-ость», зна́чит, ка́чество.', vi:'Theo gốc và hậu tố. Thấy «ответственность» — thấy «ответ» cộng «-ость», nghĩa là một phẩm chất.' },
        { sp:'A', ru:'А «руководи́тель»?', vi:'Còn «руководитель»?' },
        { sp:'B', ru:'«Рука́» + «води́ть» + «-тель» — тот, кто ведёт руко́й. Логи́чно, пра́вда?', vi:'«Tay» + «dẫn» + «-тель» — người dẫn dắt bằng tay. Hợp lý nhỉ?' }
      ]
    },

    {
      level:'b2', no:9, ru:'Поря́док слов и части́цы', vi:'Trật tự từ và tiểu từ nhấn mạnh',
      skill:'Актуа́льное члене́ние (đã biết → mới); лишь, то́лько, да́же, и́менно, ведь, же; đảo ngữ',
      grammar:[
        { form:'Nguyên tắc: thông tin đã biết (те́ма) đứng trước, thông tin mới (ре́ма) đứng cuối câu và mang trọng âm câu', vi:'trật tự từ mang nghĩa',
          note:'В ко́мнате сиди́т ма́льчик (trả lời: ai ở trong phòng?) ≠ Ма́льчик сиди́т в ко́мнате (cậu bé ở đâu?). Trong văn nói, ngữ điệu (ИК-2) có thể thay đảo trật tự.',
          ex:{ ru:'Э́ту кни́гу написа́л не Толсто́й, а Достое́вский — и́менно Достое́вский.', vi:'Cuốn này không phải Tolstoy mà là Dostoevsky viết — chính là Dostoevsky.' } },
        { form:'Tiểu từ giới hạn/nhấn: то́лько / лишь (chỉ) · да́же (thậm chí) · и́менно (chính là) · ведь (cơ mà) · же (nhấn/đối lập) · -то (chủ đề) · всё-таки (dù sao) · разве / неуже́ли (câu hỏi nghi ngờ)', vi:'tiểu từ',
          note:'Tiểu từ đứng ngay trước từ được nhấn: Лишь он знал. Он знал лишь э́то. Неуже́ли ты не по́мнишь? Ра́зве э́то пробле́ма?',
          ex:{ ru:'Да́же о́пытные перево́дчики ошиба́ются; и́менно поэ́тому текст всегда́ проверя́ет реда́ктор.', vi:'Ngay cả dịch giả giàu kinh nghiệm cũng sai; chính vì thế văn bản luôn được biên tập viên kiểm tra.' } }
      ],
      vocab:[
        { ru:'поря́док слов', vi:'trật tự từ', pos:'cụm' },
        { ru:'лишь', vi:'chỉ', pos:'tiểu từ' },
        { ru:'да́же', vi:'thậm chí', pos:'tiểu từ' },
        { ru:'и́менно', vi:'chính là', pos:'tiểu từ' },
        { ru:'ра́зве', vi:'chẳng lẽ', pos:'tiểu từ' },
        { ru:'неуже́ли', vi:'lẽ nào', pos:'tiểu từ' },
        { ru:'всё-таки', vi:'dù sao thì', pos:'tiểu từ' },
        { ru:'реда́ктор', vi:'biên tập viên', pos:'danh từ giống đực' },
        { ru:'перево́дчик', vi:'phiên dịch viên', pos:'danh từ giống đực' },
        { ru:'проверя́ть / прове́рить', vi:'kiểm tra', pos:'động từ НСВ/СВ' },
        { ru:'подчёркивать / подчеркну́ть', vi:'nhấn mạnh, gạch chân', pos:'động từ НСВ/СВ' },
        { ru:'логи́ческое ударе́ние', vi:'trọng âm logic (trọng âm câu)', pos:'cụm' },
        { ru:'оттено́к', vi:'sắc thái', pos:'danh từ giống đực' },
        { ru:'вы́делить', vi:'làm nổi bật', pos:'động từ СВ' },
        { ru:'ины́ми слова́ми', vi:'nói cách khác', pos:'cụm' }
      ],
      dialogue:[
        { sp:'A', ru:'«Он то́лько чита́л статью́» и «Он чита́л то́лько статью́» — э́то одно́ и то же?', vi:'«Он только читал статью» và «Он читал только статью» — có giống nhau không?' },
        { sp:'B', ru:'Нет. В пе́рвом слу́чае он лишь чита́л, не писа́л; во второ́м — чита́л лишь статью́, ничего́ друго́го.', vi:'Không. Trường hợp đầu anh ta chỉ đọc, không viết; trường hợp hai — chỉ đọc bài báo, không đọc gì khác.' },
        { sp:'A', ru:'Неуже́ли одно́ сло́во меня́ет весь смысл?', vi:'Lẽ nào một từ đổi cả nghĩa?' },
        { sp:'B', ru:'И́менно. Да́же поря́док слов в ру́сском — э́то грамма́тика.', vi:'Chính xác. Ngay cả trật tự từ trong tiếng Nga cũng là ngữ pháp.' }
      ]
    },

    {
      level:'b2', no:10, ru:'Фразеологи́змы', vi:'Thành ngữ thông dụng',
      skill:'20 thành ngữ hay gặp trong hội thoại và báo chí; cách dùng trong câu',
      grammar:[
        { form:'Thành ngữ = cụm cố định, nghĩa không suy từ từng từ: бить баклу́ши (lười nhác), заруби́ть на носу́ (khắc cốt ghi tâm), води́ть за́ нос (lừa), сиде́ть сложа́ ру́ки (khoanh tay), ве́шать лапшу́ на́ уши (nói dối)', vi:'thành ngữ về hành động',
          note:'Không thay từ trong thành ngữ, không dịch từng chữ. Trong ТРКИ-2 phần Лексика có câu chọn thành ngữ đúng ngữ cảnh.',
          ex:{ ru:'Хва́тит бить баклу́ши — заруби́ себе́ на носу́: экза́мен че́рез неде́лю.', vi:'Đủ rồi cái sự lười — khắc cốt ghi tâm đi: một tuần nữa thi.' } },
        { form:'Thành ngữ trạng thái/đánh giá: как ры́ба в воде́ (như cá gặp nước), не в свое́й таре́лке (không thoải mái), душа́ в пя́тки ушла́ (sợ chết khiếp), на седьмо́м не́бе (hạnh phúc tột cùng), ни пу́ха ни пера́ (chúc may — đáp: к чёрту!), с глазу на глаз (mặt đối mặt), рука́ об ру́ку (kề vai sát cánh), кот напла́кал (ít ỏi), за трёх рабо́тать (làm bằng ba người), в двух слова́х (vắn tắt), с лёгкой руки́ (nhờ khởi đầu của ai), де́лать из му́хи слона́ (bé xé to), у́тро ве́чера мудрене́е (để mai tính)', vi:'thành ngữ về cảm xúc, tình huống',
          note:'Ни пу́ха ни пера́! dùng trước kỳ thi; phải đáp «К чёрту!» mới đúng lệ.',
          ex:{ ru:'Пе́ред защи́той душа́ ушла́ в пя́тки, а по́сле — я был на седьмо́м не́бе. В двух слова́х: сдал.', vi:'Trước buổi bảo vệ tôi sợ chết khiếp, còn sau đó — hạnh phúc tột cùng. Vắn tắt: đỗ rồi.' } }
      ],
      vocab:[
        { ru:'фразеологи́зм', vi:'thành ngữ', pos:'danh từ giống đực' },
        { ru:'бить баклу́ши', vi:'lười nhác, vô công rồi nghề', pos:'thành ngữ' },
        { ru:'заруби́ть на носу́', vi:'khắc cốt ghi tâm', pos:'thành ngữ' },
        { ru:'води́ть за́ нос', vi:'lừa dối, dắt mũi', pos:'thành ngữ' },
        { ru:'сиде́ть сложа́ ру́ки', vi:'ngồi khoanh tay', pos:'thành ngữ' },
        { ru:'как ры́ба в воде́', vi:'như cá gặp nước', pos:'thành ngữ' },
        { ru:'не в свое́й таре́лке', vi:'không thoải mái', pos:'thành ngữ' },
        { ru:'душа́ в пя́тки ушла́', vi:'sợ chết khiếp', pos:'thành ngữ' },
        { ru:'на седьмо́м не́бе', vi:'hạnh phúc tột cùng', pos:'thành ngữ' },
        { ru:'ни пу́ха ни пера́', vi:'chúc may mắn (trước thi)', pos:'thành ngữ' },
        { ru:'с гла́зу на глаз', vi:'mặt đối mặt, riêng tư', pos:'thành ngữ' },
        { ru:'кот напла́кал', vi:'ít ỏi', pos:'thành ngữ' },
        { ru:'в двух слова́х', vi:'nói vắn tắt', pos:'thành ngữ' },
        { ru:'де́лать из му́хи слона́', vi:'chuyện bé xé to', pos:'thành ngữ' },
        { ru:'у́тро ве́чера мудрене́е', vi:'để sáng mai tính', pos:'tục ngữ' }
      ],
      dialogue:[
        { sp:'A', ru:'За́втра собесе́дование. Ни пу́ха ни пера́!', vi:'Mai phỏng vấn. Chúc may mắn!' },
        { sp:'B', ru:'К чёрту! Че́стно, я не в свое́й таре́лке: о́пыта у меня́ кот напла́кал.', vi:'(Đáp lệ) К чёрту! Thật lòng mình không thoải mái: kinh nghiệm chẳng có bao nhiêu.' },
        { sp:'A', ru:'Не де́лай из му́хи слона́. Расскажи́ в двух слова́х, что уме́ешь, и бу́дешь как ры́ба в воде́.', vi:'Đừng bé xé to. Kể vắn tắt cậu làm được gì, rồi sẽ như cá gặp nước.' },
        { sp:'B', ru:'Ла́дно, у́тро ве́чера мудрене́е. Пойду́ спать.', vi:'Được, để mai tính. Đi ngủ đây.' }
      ]
    },

    {
      level:'b2', no:11, ru:'Нау́чный стиль', vi:'Phong cách khoa học: tóm tắt và chú giải',
      skill:'Конспе́кт, аннота́ция; клише khoa học; danh từ hoá',
      grammar:[
        { form:'Đặc điểm: danh từ hoá (изуче́ние thay vì изуча́ть), bị động, câu vô nhân xưng (счита́ется, что…; сле́дует отме́тить), thuật ngữ, không cảm xúc, câu dài có прича́стие/дееприча́стие', vi:'nhận diện văn phong',
          note:'Клише: В статье́ рассма́тривается…; Авто́р анализи́рует…; Осо́бое внима́ние уделя́ется…; Приво́дятся да́нные…; Де́лается вы́вод о том, что…; Как пока́зано в табли́це….',
          ex:{ ru:'В рабо́те рассма́тривается влия́ние двуязы́чия на па́мять; осо́бое внима́ние уделя́ется де́тям дошко́льного во́зраста.', vi:'Bài viết xem xét ảnh hưởng của song ngữ tới trí nhớ; đặc biệt chú ý trẻ lứa tuổi mẫu giáo.' } },
        { form:'Аннота́ция (3–5 câu): chủ đề → mục đích → phương pháp/nội dung chính → kết luận → đối tượng độc giả · Конспе́кт: ghi ý chính bằng cụm danh từ, viết tắt, mũi tên, số thứ tự', vi:'viết tóm tắt',
          note:'Kết luận: Авто́р прихо́дит к вы́воду, что…; Результа́ты свиде́тельствуют о…; Статья́ адресо́вана специали́стам в о́бласти….',
          ex:{ ru:'Авто́р прихо́дит к вы́воду, что регуля́рное чте́ние вслух ускоря́ет усвое́ние произноше́ния. Статья́ адресо́вана преподава́телям РКИ.', vi:'Tác giả đi đến kết luận rằng đọc to thường xuyên đẩy nhanh việc tiếp thu phát âm. Bài viết dành cho giáo viên tiếng Nga cho người nước ngoài.' } }
      ],
      vocab:[
        { ru:'нау́чный стиль', vi:'phong cách khoa học', pos:'cụm' },
        { ru:'конспе́кт', vi:'bản tóm tắt ghi chép', pos:'danh từ giống đực' },
        { ru:'аннота́ция', vi:'bản chú giải, tóm tắt', pos:'danh từ giống cái' },
        { ru:'рассма́тривать / рассмотре́ть', vi:'xem xét', pos:'động từ НСВ/СВ' },
        { ru:'анализи́ровать', vi:'phân tích', pos:'động từ' },
        { ru:'уделя́ть внима́ние', vi:'dành sự chú ý', pos:'cụm động từ' },
        { ru:'приводи́ть да́нные', vi:'đưa ra số liệu', pos:'cụm động từ' },
        { ru:'приходи́ть к вы́воду', vi:'đi đến kết luận', pos:'cụm động từ' },
        { ru:'свиде́тельствовать', vi:'chứng tỏ (о + cách 6)', pos:'động từ NSV' },
        { ru:'исследова́ние', vi:'nghiên cứu', pos:'danh từ giống trung' },
        { ru:'влия́ние', vi:'ảnh hưởng', pos:'danh từ giống trung' },
        { ru:'усвое́ние', vi:'sự tiếp thu', pos:'danh từ giống trung' },
        { ru:'специали́ст', vi:'chuyên gia', pos:'danh từ giống đực' },
        { ru:'о́бласть', vi:'lĩnh vực', pos:'danh từ giống cái' },
        { ru:'табли́ца', vi:'bảng', pos:'danh từ giống cái' }
      ],
      dialogue:[
        { sp:'A', ru:'Как написа́ть аннота́цию к курсово́й?', vi:'Viết tóm tắt cho khoá luận thế nào?' },
        { sp:'B', ru:'Четы́ре предложе́ния: что рассма́тривается, с како́й це́лью, каки́е да́нные приво́дятся, к како́му вы́воду прихо́дит а́втор.', vi:'Bốn câu: xem xét gì, mục đích gì, đưa số liệu nào, tác giả kết luận gì.' },
        { sp:'A', ru:'А мо́жно писа́ть «я ду́маю»?', vi:'Có được viết «tôi nghĩ» không?' },
        { sp:'B', ru:'В нау́чном сти́ле лу́чше «предполага́ется» и́ли «по мне́нию а́втора». Никаки́х эмо́ций.', vi:'Trong văn phong khoa học nên dùng «được giả định» hoặc «theo tác giả». Không cảm xúc.' }
      ]
    },

    {
      level:'b2', no:12, ru:'Публици́стика и аргумента́ция', vi:'Phong cách báo chí và lập luận',
      skill:'Từ mở đầu (вво́дные слова́), câu hỏi tu từ, dẫn ý kiến, phản bác lịch sự',
      grammar:[
        { form:'Вво́дные слова́ (ngăn bằng dấu phẩy): по мне́нию + cách 2, как изве́стно, безусло́вно, несомне́нно, к сча́стью, по-ви́димому, во́-первых, наприме́р, ины́ми слова́ми, одни́м сло́вом', vi:'từ chêm biểu thị thái độ',
          note:'Không phải thành phần câu, có thể bỏ. Phân biệt: Наконе́ц он пришёл (trạng từ) — Наконе́ц, э́то невы́годно (từ chêm = cuối cùng thì).',
          ex:{ ru:'По мне́нию экспе́ртов, дистанцио́нное обуче́ние, безусло́вно, удо́бно, одна́ко, к сожале́нию, снижа́ет мотива́цию.', vi:'Theo các chuyên gia, học từ xa dĩ nhiên tiện, nhưng tiếc là làm giảm động lực.' } },
        { form:'Kỹ thuật lập luận: câu hỏi tu từ (Ра́зве мо́жно с э́тим согласи́ться?), dẫn ý kiến (Как утвержда́ет…; Сторо́нники счита́ют…; Проти́вники возража́ют…), phản bác lịch sự (Тру́дно согласи́ться с тем, что…; Э́то утвержде́ние спо́рно), kết (Всё э́то позволя́ет сде́лать вы́вод…)', vi:'khung bài bình luận',
          note:'Bài đọc ТРКИ-2 hay lấy từ báo: cần nhận ra quan điểm tác giả qua từ chêm và tiểu từ (лишь, да́же, и́менно).',
          ex:{ ru:'Сторо́нники запре́та смартфо́нов в шко́ле ссыла́ются на па́дение успева́емости; проти́вники же возража́ют, что де́ло не в телефо́не, а в организа́ции уро́ка.', vi:'Người ủng hộ cấm điện thoại ở trường viện dẫn học lực giảm; người phản đối lại cho rằng vấn đề không ở điện thoại mà ở cách tổ chức giờ học.' } }
      ],
      vocab:[
        { ru:'вво́дное сло́во', vi:'từ chêm', pos:'cụm' },
        { ru:'по мне́нию', vi:'theo ý kiến (+ cách 2)', pos:'cụm' },
        { ru:'как изве́стно', vi:'như đã biết', pos:'cụm' },
        { ru:'безусло́вно', vi:'dĩ nhiên', pos:'trạng từ' },
        { ru:'несомне́нно', vi:'không nghi ngờ gì', pos:'trạng từ' },
        { ru:'по-ви́димому', vi:'có vẻ như', pos:'trạng từ' },
        { ru:'сторо́нник / проти́вник', vi:'người ủng hộ / người phản đối', pos:'danh từ' },
        { ru:'возража́ть / возрази́ть', vi:'phản bác', pos:'động từ НСВ/СВ' },
        { ru:'ссыла́ться / сосла́ться', vi:'viện dẫn (на + cách 4)', pos:'động từ НСВ/СВ' },
        { ru:'утвержде́ние', vi:'khẳng định, luận điểm', pos:'danh từ giống trung' },
        { ru:'спо́рный', vi:'gây tranh cãi', pos:'tính từ' },
        { ru:'успева́емость', vi:'học lực', pos:'danh từ giống cái' },
        { ru:'мотива́ция', vi:'động lực', pos:'danh từ giống cái' },
        { ru:'запре́т', vi:'sự cấm', pos:'danh từ giống đực' },
        { ru:'рито́рический вопро́с', vi:'câu hỏi tu từ', pos:'cụm' }
      ],
      dialogue:[
        { sp:'A', ru:'Ты чита́л статью́ о запре́те смартфо́нов в шко́лах?', vi:'Cậu đọc bài về cấm điện thoại thông minh ở trường chưa?' },
        { sp:'B', ru:'Чита́л. По мне́нию а́втора, запре́т, несомне́нно, полезен. Но, по-мо́ему, э́то утвержде́ние спо́рно.', vi:'Đọc rồi. Theo tác giả, cấm chắc chắn có ích. Nhưng theo mình, khẳng định đó gây tranh cãi.' },
        { sp:'A', ru:'Ра́зве телефо́н сам по себе́ меша́ет учи́ться?', vi:'Chẳng lẽ điện thoại tự nó cản trở học tập?' },
        { sp:'B', ru:'И́менно. Как изве́стно, де́ло в органи́зации уро́ка. Ины́ми слова́ми, запре́т — лишь просте́йшее реше́ние.', vi:'Chính thế. Như đã biết, vấn đề ở cách tổ chức giờ học. Nói cách khác, cấm chỉ là giải pháp đơn giản nhất.' }
      ]
    },

    {
      level:'b2', no:13, ru:'Резюме́ и делово́е письмо́', vi:'CV và thư công việc',
      skill:'Bố cục резюме́; thư xin việc; thư phúc đáp; клише kinh doanh',
      grammar:[
        { form:'Резюме́: ли́чные да́нные → цель (Соиска́ние до́лжности…) → образова́ние → о́пыт рабо́ты (ngược thời gian, động từ ở danh từ hoá: разрабо́тка, организа́ция, руково́дство) → на́выки (владе́ние…, зна́ние языко́в: ру́сский — свобо́дно) → дополни́тельно', vi:'khung CV',
          note:'Viết ngắn, không đại từ «я». Mức ngôn ngữ: свобо́дно / продви́нутый / сре́дний / базо́вый. Кандида́т техни́ческих нау́к = tiến sĩ kỹ thuật.',
          ex:{ ru:'О́пыт рабо́ты: 2022–2025 — инжене́р, ООО «Те́хника»: разрабо́тка документа́ции, руково́дство гру́ппой из пяти́ челове́к.', vi:'Kinh nghiệm: 2022–2025 — kỹ sư, Công ty TNHH «Tekhnika»: soạn tài liệu, quản lý nhóm 5 người.' } },
        { form:'Thư công việc: Уважа́емый(-ая) …! → Настоя́щим сообща́ем / Обраща́емся к Вам с про́сьбой / В отве́т на Ва́ше письмо́ от … → nội dung → Про́сим подтверди́ть… / Бу́дем призна́тельны за… → С уваже́нием, chức danh, tên', vi:'khung thư kinh doanh',
          note:'Клише: в приложе́нии направля́ем (đính kèm); в кратча́йшие сро́ки (sớm nhất); по согласова́нию с (theo thoả thuận với); наде́емся на да́льнейшее сотру́дничество.',
          ex:{ ru:'В отве́т на Ва́ше письмо́ от 3 ма́рта сообща́ем, что зака́з при́нят; в приложе́нии направля́ем счёт. Наде́емся на да́льнейшее сотру́дничество.', vi:'Phúc đáp thư ngày 3/3 của Quý vị, chúng tôi thông báo đơn hàng đã được nhận; hoá đơn gửi kèm. Mong tiếp tục hợp tác.' } }
      ],
      vocab:[
        { ru:'резюме́', vi:'CV', pos:'danh từ giống trung (bất biến)' },
        { ru:'соиска́ние до́лжности', vi:'ứng tuyển vị trí', pos:'cụm' },
        { ru:'о́пыт рабо́ты', vi:'kinh nghiệm làm việc', pos:'cụm' },
        { ru:'на́вык', vi:'kỹ năng', pos:'danh từ giống đực' },
        { ru:'владе́ние', vi:'sự thành thạo (+ cách 5)', pos:'danh từ giống trung' },
        { ru:'свобо́дно', vi:'thành thạo (ngôn ngữ)', pos:'trạng từ' },
        { ru:'разрабо́тка', vi:'sự phát triển, soạn thảo', pos:'danh từ giống cái' },
        { ru:'руково́дство', vi:'sự quản lý; ban lãnh đạo', pos:'danh từ giống trung' },
        { ru:'настоя́щим сообща́ем', vi:'bằng văn bản này thông báo', pos:'клише' },
        { ru:'в отве́т на', vi:'phúc đáp (+ cách 4)', pos:'cụm' },
        { ru:'в приложе́нии', vi:'trong phần đính kèm', pos:'cụm' },
        { ru:'подтвержда́ть / подтверди́ть', vi:'xác nhận', pos:'động từ НСВ/СВ' },
        { ru:'призна́телен', vi:'biết ơn', pos:'tính từ ngắn' },
        { ru:'сотру́дничество', vi:'sự hợp tác', pos:'danh từ giống trung' },
        { ru:'в кратча́йшие сро́ки', vi:'trong thời gian sớm nhất', pos:'cụm' }
      ],
      dialogue:[
        { sp:'A', ru:'Мне ну́жно отпра́вить резюме́ в росси́йскую компа́нию. С чего́ нача́ть?', vi:'Mình cần gửi CV cho một công ty Nga. Bắt đầu từ đâu?' },
        { sp:'B', ru:'С це́ли: «Соиска́ние до́лжности инжене́ра». Пото́м образова́ние и о́пыт в обра́тном поря́дке.', vi:'Từ mục tiêu: «Ứng tuyển vị trí kỹ sư». Rồi học vấn và kinh nghiệm theo thứ tự ngược thời gian.' },
        { sp:'A', ru:'А сопроводи́тельное письмо́?', vi:'Còn thư xin việc?' },
        { sp:'B', ru:'Кра́тко: «Уважа́емые господа́! Обраща́юсь по вопро́су вака́нсии… В приложе́нии направля́ю резюме́. С уваже́нием…». Бу́дут призна́тельны за кра́ткость.', vi:'Ngắn gọn: «Kính gửi Quý vị! Tôi liên hệ về vị trí tuyển dụng… Đính kèm CV. Trân trọng…». Họ sẽ cảm kích sự ngắn gọn.' }
      ]
    },

    {
      level:'b2', no:14, ru:'Худо́жественный текст', vi:'Văn bản văn học và phương tiện biểu cảm',
      skill:'Метафора, сравнение, эпитет, олицетворение; đọc hiểu văn học; viết đoạn tả',
      grammar:[
        { form:'Phương tiện biểu cảm: эпи́тет (định ngữ nghệ thuật: золота́я о́сень) · сравне́ние (như: как, сло́вно, бу́дто, похо́ж на, cách 5: снег лежи́т ковро́м) · мета́фора (ẩn dụ: мо́ре огне́й) · олицетворе́ние (nhân hoá: ве́тер шепта́л) · гипе́рбола', vi:'nhận diện khi đọc',
          note:'So sánh bằng cách 5 là nét đặc trưng tiếng Nga: слёзы текли́ ручьём (lệ tuôn như suối). Sло́вно/бу́дто = tựa như.',
          ex:{ ru:'Го́род спал, уку́танный тума́ном, сло́вно ребёнок в одея́ле, и лишь фонари́ шепта́лись с дождём.', vi:'Thành phố ngủ, quấn trong sương như đứa trẻ trong chăn, chỉ những ngọn đèn đường thì thầm với mưa.' } },
        { form:'Đoạn tả (описа́ние): từ chung → chi tiết (từ xa đến gần), giác quan (ви́дно, слы́шно, па́хнет), thì hiện tại hoặc quá khứ NSV, câu ngắn xen câu dài', vi:'tự viết đoạn văn học 80–100 từ',
          note:'Mở bằng thời gian/không gian (Ра́нним у́тром…), dùng 2 эпи́тет, 1 сравне́ние, 1 олицетворе́ние; kết bằng cảm xúc người kể.',
          ex:{ ru:'Ра́нним у́тром Хано́й похо́ж на огро́мный у́лей: мотоци́клы гудя́т, па́хнет ко́фе и жа́реным ри́сом, а со́лнце ле́ниво поднима́ется над о́зером.', vi:'Sáng sớm Hà Nội giống một tổ ong khổng lồ: xe máy rền, mùi cà phê và cơm rang, còn mặt trời uể oải nhô lên trên hồ.' } }
      ],
      vocab:[
        { ru:'эпи́тет', vi:'tính ngữ nghệ thuật', pos:'danh từ giống đực' },
        { ru:'сравне́ние', vi:'so sánh', pos:'danh từ giống trung' },
        { ru:'мета́фора', vi:'ẩn dụ', pos:'danh từ giống cái' },
        { ru:'олицетворе́ние', vi:'nhân hoá', pos:'danh từ giống trung' },
        { ru:'гипе́рбола', vi:'ngoa dụ', pos:'danh từ giống cái' },
        { ru:'сло́вно / бу́дто', vi:'tựa như', pos:'liên từ' },
        { ru:'уку́танный', vi:'được quấn kín', pos:'причастие' },
        { ru:'тума́н', vi:'sương mù', pos:'danh từ giống đực' },
        { ru:'одея́ло', vi:'chăn', pos:'danh từ giống trung' },
        { ru:'фона́рь', vi:'đèn đường', pos:'danh từ giống đực' },
        { ru:'шепта́ть', vi:'thì thầm', pos:'động từ NSV' },
        { ru:'у́лей', vi:'tổ ong', pos:'danh từ giống đực' },
        { ru:'гуде́ть', vi:'rền, ù', pos:'động từ NSV' },
        { ru:'ле́ниво', vi:'uể oải', pos:'trạng từ' },
        { ru:'о́браз', vi:'hình tượng', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'«Ве́тер шепта́л» — э́то что за приём?', vi:'«Gió thì thầm» — đó là biện pháp gì?' },
        { sp:'B', ru:'Олицетворе́ние: ве́тер де́лает то, что де́лают лю́ди. А «тума́н, сло́вно одея́ло» — сравне́ние.', vi:'Nhân hoá: gió làm điều con người làm. Còn «sương như tấm chăn» — so sánh.' },
        { sp:'A', ru:'Мне тру́дно так писа́ть по-ру́сски.', vi:'Mình khó viết kiểu đó bằng tiếng Nga.' },
        { sp:'B', ru:'Начни́ с одного́ о́браза: опиши́ у́тро в Ханое как у́лей. Дальше слова́ са́ми придут.', vi:'Bắt đầu với một hình ảnh: tả buổi sáng Hà Nội như tổ ong. Rồi từ ngữ tự đến.' }
      ]
    },

    {
      level:'b2', no:15, ru:'Эссе́ на актуа́льную те́му', vi:'Tiểu luận về đề tài thời sự — tổng ôn B2',
      skill:'Bố cục эссе́ 250 từ; checklist ngữ pháp B2; đề luyện',
      grammar:[
        { form:'Эссе́ ТРКИ-2: 1) Вступле́ние — актуа́льность те́мы + вопро́с; 2) Основна́я часть — 2 аргуме́нта «за», 1 «про́тив» + опроверже́ние; 3) Заключе́ние — вы́вод + ли́чная пози́ция', vi:'khung tiểu luận',
          note:'Từ nối theo phần: Актуа́льность те́мы не вызыва́ет сомне́ний… / Пре́жде всего… / Не ме́нее ва́жно и то, что… / Одна́ко нельзя́ не учи́тывать… / Подводя́ ито́г, сле́дует подчеркну́ть…',
          ex:{ ru:'Актуа́льность те́мы не вызыва́ет сомне́ний: иску́сственный интелле́кт уже́ меня́ет рабо́ту перево́дчика. Одна́ко нельзя́ не учи́тывать, что маши́на не понима́ет культу́рных оттено́ков.', vi:'Tính thời sự của đề tài không cần bàn cãi: trí tuệ nhân tạo đã thay đổi công việc dịch giả. Tuy nhiên không thể không tính đến việc máy không hiểu sắc thái văn hoá.' } },
        { form:'Checklist B2: ☐ thời gian (в тече́ние, по ме́ре того́ как) ☐ nguyên nhân (благодаря́/из-за/всле́дствие) ☐ nhượng bộ (вопреки́, как бы ни) ☐ điều kiện (при усло́вии) ☐ mục đích (с це́лью) ☐ tình thái (сле́дует, нельзя́ не) ☐ tiểu từ (и́менно, лишь) ☐ 1 thành ngữ ☐ từ chêm ☐ прича́стие + дееприча́стие', vi:'tự kiểm trước khi nộp',
          note:'Đề luyện: «Ну́жно ли изуча́ть иностра́нные языки́ в эпо́ху маши́нного перево́да?», «Го́род и́ли дере́вня: где лу́чше жить?», «Челове́ческие це́нности в XXI ве́ке» (xem Luyện nói).',
          ex:{ ru:'Подводя́ ито́г, сле́дует подчеркну́ть: язы́к — э́то не набо́р слов, а спо́соб мышле́ния, и и́менно поэ́тому его́ сто́ит изуча́ть вопреки́ любы́м техноло́гиям.', vi:'Tóm lại, cần nhấn mạnh: ngôn ngữ không phải tập hợp từ mà là cách tư duy, và chính vì thế đáng học bất chấp mọi công nghệ.' } }
      ],
      vocab:[
        { ru:'эссе́', vi:'tiểu luận', pos:'danh từ giống trung (bất biến)' },
        { ru:'актуа́льность', vi:'tính thời sự', pos:'danh từ giống cái' },
        { ru:'вступле́ние', vi:'phần mở', pos:'danh từ giống trung' },
        { ru:'заключе́ние', vi:'phần kết', pos:'danh từ giống trung' },
        { ru:'опроверже́ние', vi:'sự bác bỏ', pos:'danh từ giống trung' },
        { ru:'не вызыва́ть сомне́ний', vi:'không gây nghi ngờ', pos:'cụm' },
        { ru:'пре́жде всего́', vi:'trước hết', pos:'cụm' },
        { ru:'не ме́нее ва́жно', vi:'không kém phần quan trọng', pos:'cụm' },
        { ru:'учи́тывать', vi:'tính đến', pos:'động từ NSV' },
        { ru:'иску́сственный интелле́кт', vi:'trí tuệ nhân tạo', pos:'cụm' },
        { ru:'маши́нный перево́д', vi:'dịch máy', pos:'cụm' },
        { ru:'мышле́ние', vi:'tư duy', pos:'danh từ giống trung' },
        { ru:'пози́ция', vi:'lập trường', pos:'danh từ giống cái' },
        { ru:'эпо́ха', vi:'kỷ nguyên', pos:'danh từ giống cái' },
        { ru:'набо́р', vi:'tập hợp, bộ', pos:'danh từ giống đực' }
      ],
      dialogue:[
        { sp:'A', ru:'Че́рез неде́лю ТРКИ-2. Как гото́вишься к эссе́?', vi:'Một tuần nữa thi ТРКИ-2. Cậu chuẩn bị bài tiểu luận thế nào?' },
        { sp:'B', ru:'Пишу́ по одному́ эссе́ в день по чек-ли́сту: вступле́ние с вопро́сом, два аргуме́нта, контраргуме́нт, вы́вод.', vi:'Mỗi ngày viết một bài theo checklist: mở bằng câu hỏi, hai luận cứ, phản luận, kết luận.' },
        { sp:'A', ru:'А грамма́тику как прове́рить?', vi:'Còn ngữ pháp thì kiểm tra thế nào?' },
        { sp:'B', ru:'Отмеча́ю: есть ли прича́стие, дееприча́стие, «вопреки́», «при усло́вии» и хотя́ бы оди́н фразеологи́зм. Как бы ни бы́ло тру́дно — э́то рабо́тает.', vi:'Đánh dấu: có tính động từ, trạng động từ, «вопреки», «при условии» và ít nhất một thành ngữ chưa. Dù khó thế nào — cách này hiệu quả.' }
      ]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { ALPHABET_RU, PHON_RU, COURSE_RU };
