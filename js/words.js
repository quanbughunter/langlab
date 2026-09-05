/* ============================================================
   LangLab — xử lý từ tiếng Hàn
   ------------------------------------------------------------
   · Tách mọi câu tiếng Hàn thành các từ bấm được
   · Gỡ trợ từ và đuôi chia để đoán dạng gốc (dạng tra từ điển)
   · Tìm câu ví dụ có chứa từ đó ngay trong khoá học
   · Sinh link nhảy sang các từ điển ngoài (đã kiểm chứng thủ công)
   ============================================================ */

const Words = (function(){
'use strict';

const HANGUL = '가-힣㄰-㆏';
const RE_TOKEN = new RegExp('^([^' + HANGUL + ']*)([' + HANGUL + ']+)([^' + HANGUL + ']*)$');
const RE_HAS   = new RegExp('[' + HANGUL + ']');

const escHtml = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/** Bọc từng từ tiếng Hàn trong <span class="kw"> để rê chuột và bấm được. */
function mark(text){
  return String(text).split(/(\s+)/).map(seg => {
    if (!seg.trim()) return seg;
    if (!RE_HAS.test(seg)) return escHtml(seg);
    const m = seg.match(RE_TOKEN);
    if (!m) return escHtml(seg);
    return escHtml(m[1])
      + '<span class="kw" data-kw="' + escHtml(m[2]) + '" tabindex="0" role="button">' + escHtml(m[2]) + '</span>'
      + escHtml(m[3]);
  }).join('');
}

/* ---------- gỡ trợ từ và đuôi chia ---------- */

/* Trợ từ (조사) — dính vào danh từ. Xếp dài trước để cắt cụm dài nhất. */
const PARTICLES = [
  '으로부터','로부터','에게서','한테서','에서는','에게도','으로는','이라고','이에요',
  '에서','께서','에게','한테','부터','까지','마다','처럼','보다','밖에','조차','이나',
  '으로','에는','에도','하고','이랑','라고','예요',
  '와','과','은','는','이','가','을','를','도','에','의','로','만','께','랑'
];

/* Đuôi bắt đầu bằng nguyên âm hoà (아/어/여/해) — cần xử lý riêng. */
const HARMONY_ENDINGS = ['요', '서'];

/* Đuôi còn lại: bỏ đuôi rồi thêm 다 là ra dạng gốc. */
const PLAIN_ENDINGS = [
  '았습니다','었습니다','였습니다','겠습니다','습니다','습니까',
  '으려고','으니까','으세요','는데요','은데요','읍시다',
  '니다','니까','시다','지만','으면','는데','은데','으러','려고','네요','나요',
  '고','지','게','는','면','러','며'
];

const jong = ch => { const p = (typeof decomposeHangul === 'function') && decomposeHangul(ch); return p ? p.jong : ''; };
const dropJong = ch => {
  const p = (typeof decomposeHangul === 'function') && decomposeHangul(ch);
  return p && p.jong ? composeHangul(p.cho, p.jung, '') : ch;
};
/* Gỡ hiện tượng co nguyên âm khi chia thì: 봐→보, 와→오, 줘→주, 돼→되, 해→하 */
const UNCONTRACT = { 'ㅘ':'ㅗ', 'ㅝ':'ㅜ', 'ㅙ':'ㅚ', 'ㅞ':'ㅜ' };
function uncontract(ch){
  if (ch === '해') return '하';
  const p = (typeof decomposeHangul === 'function') && decomposeHangul(ch);
  if (!p || p.jong || !UNCONTRACT[p.jung]) return null;
  return composeHangul(p.cho, UNCONTRACT[p.jung], '');
}

/** Sinh các dạng có thể tra được, xếp theo độ tin cậy. */
function forms(token){
  const out = [], seen = {};
  const add = (f, why, kind) => {
    if (!f || f.length < 1 || seen[f]) return;
    seen[f] = 1; out.push({ form: f, why: why, kind: kind || 'other' });
  };
  add(token, 'nguyên dạng trong câu', 'surface');

  /* --- động từ / tính từ --- */
  // (1) đuôi hoà âm: …아요 / …어요 / …해요 / …아서 …
  for (const e of HARMONY_ENDINGS){
    if (token.length <= e.length || token.slice(-e.length) !== e) continue;
    let s = token.slice(0, -e.length);              // 일어나 · 맛있어 · 공부해 · 갔어 · 앉으세
    if (/해$/.test(s)){
      add(s.slice(0, -1) + '하다', 'dạng gốc …하다', 'base');
    } else if (/[으]?세$/.test(s)){                  // -(으)세요 lịch sự
      add(s.replace(/으?세$/, '') + '다', 'dạng gốc …다', 'base');
    } else if (/[아어여]$/.test(s)){
      const core = s.slice(0, -1);                  // 맛있 · 갔 · 읽었
      const last = core.slice(-1);
      if (/[았었였]$/.test(last)){                    // đuôi quá khứ nguyên âm tiết
        add(core.slice(0, -1) + '다', 'dạng gốc, bỏ đuôi quá khứ', 'base');
      } else if (jong(last) === 'ㅆ' && last !== '있' && last !== '없'){
        const bare = dropJong(last);                 // 봤→봐 · 왔→와 · 했→해 · 갔→가
        const un = uncontract(bare);                 // 봐→보 · 와→오 · 해→하
        if (un) add(core.slice(0, -1) + un + '다', 'dạng gốc, gỡ đuôi quá khứ', 'base');
        add(core.slice(0, -1) + bare + '다', 'dạng gốc, bỏ đuôi quá khứ', 'base');
      }
      add(core + '다', 'dạng gốc …다', 'base');
    } else {
      const un = uncontract(s.slice(-1));           // 바꿔→바꾸 · 봐→보 · 와→오
      if (un) add(s.slice(0, -1) + un + '다', 'dạng gốc, gỡ nguyên âm co', 'base');
      add(s + '다', 'dạng gốc …다', 'base');
    }
    add(s, 'bỏ đuôi -' + e, 'stem');
    break;
  }

  // (2) đuôi thường: …습니다 · …지만 · …고 …
  if (!out.some(f => f.kind === 'base')){
    for (const e of PLAIN_ENDINGS){
      if (token.length <= e.length || token.slice(-e.length) !== e) continue;
      let s = token.slice(0, -e.length);
      // -ㅂ니다 : patchim ㅂ dính vào âm tiết trước (갑니다 → 가다)
      if ((e === '니다' || e === '니까' || e === '시다') && s.length && jong(s.slice(-1)) === 'ㅂ'){
        s = s.slice(0, -1) + dropJong(s.slice(-1));
      }
      if (s.length){
        add(s + '다', 'dạng gốc …다', 'base');
        add(s, 'bỏ đuôi -' + e, 'stem');
      }
      break;
    }
  }

  /* --- danh từ + trợ từ --- */
  for (const p of PARTICLES){
    if (token.length > p.length && token.slice(-p.length) === p){
      add(token.slice(0, -p.length), 'bỏ trợ từ ' + p, 'noun');
      break;
    }
  }

  // người dùng bấm ngay vào dạng gốc
  if (token.slice(-1) === '다') add(token.slice(0, -1), 'phần gốc', 'stem');
  return out;
}

/* ---------- tách đoạn văn thành câu ---------- */
const ENDERS = '.!?…。？！';

/** Tách một đoạn văn thành mảng câu. Giữ nguyên dấu kết thúc. */
function splitSentences(text){
  const flat = String(text).replace(/\r/g, '').split(/\n+/).join(' ').replace(/\s+/g, ' ').trim();
  if (!flat) return [];
  const out = [];
  let buf = '';
  for (const ch of flat){
    buf += ch;
    if (ENDERS.indexOf(ch) > -1){
      const t = buf.trim();
      if (t) out.push(t);
      buf = '';
    }
  }
  const rest = buf.trim();
  if (rest) out.push(rest);
  return out.filter(s => RE_HAS.test(s) || s.length > 1);
}

/** Các từ tiếng Hàn trong một câu, theo đúng thứ tự, không trùng. */
function tokens(sentence){
  const out = [], seen = {};
  String(sentence).split(/\s+/).forEach(seg => {
    const m = seg.match(RE_TOKEN);
    if (!m) return;
    const w = m[2];
    if (seen[w]) return;
    seen[w] = 1; out.push(w);
  });
  return out;
}

/* ---------- nhận diện mẫu ngữ pháp có trong câu ----------
   Không suy ra từ tên mẫu ngữ pháp, vì cách đó cho kết quả sai:
   « 조용하고 » sẽ bị nhận thành trợ từ 하고, còn « 먹고 싶어요 » thì lại
   không khớp với « -고 싶다 ». Nên viết tay từng biểu thức bám vào
   DẠNG THỰC TẾ xuất hiện trong câu, kèm số bài để mở lại lý thuyết.  */

const PATTERNS = [
  { re:/[가-힣]에서/,                 form:'N + 에서',            vi:'ở, tại — nơi diễn ra hành động', lesson:3 },
  { re:/(니다|니까)(?![가-힣])/,       form:'-ㅂ니다 / -습니다',    vi:'đuôi câu trang trọng',           lesson:3 },
  // Bỏ các đuôi có mẫu riêng bên dưới, tránh báo trùng: 예요 · 세요 · 까요 · 래요…
  { re:/[가-힣]요(?![가-힣])/, not:/(예요|에요|세요|까요|래요|네요|지요|군요)$/,
    form:'-아요 / -어요', vi:'đuôi câu lịch sự thân mật', lesson:5 },
  { re:/(^|\s)안\s/,                  form:'안 + động từ',        vi:'không (phủ định ý muốn)',        lesson:5 },
  { re:/[았었였했봤왔갔줬췄됐뒀켰]/,     form:'-았 / 었 -',           vi:'thì quá khứ',                    lesson:6 },
  // Chỉ nhận 이랑/랑. Bỏ 하고 vì không phân biệt được với đuôi -고 của
  // các động từ …하다 (조용하고, 공부하고) — thà thiếu hơn là báo sai.
  { re:/[가-힣](이랑|랑)(?![가-힣])/,  form:'N + 하고 / 이랑',      vi:'và; cùng với',                   lesson:6 },
  { re:/(읍시다|ㅂ시다|[가-힣]시다)(?![가-힣])/, form:'-(으)ㅂ시다', vi:'chúng ta hãy…',                  lesson:6 },
  { re:/고\s*싶/,                     form:'-고 싶다',             vi:'muốn làm gì',                    lesson:7 },
  { re:/세요(?![가-힣])/,              form:'-(으)세요',            vi:'mời / đề nghị lịch sự',          lesson:8 },
  { re:/지\s*않/,                     form:'-지 않다',             vi:'không… (phủ định dài)',          lesson:8 },
  { re:/겠[가-힣]/,                    form:'-겠-',                vi:'ý định, dự đoán',                lesson:8 },
  { re:/래요(?![가-힣])/,              form:'-(으)ㄹ래요',          vi:'bạn có muốn… không?',            lesson:9 },
  { re:/[가-힣]로(?![가-힣])/,         form:'N + (으)로',           vi:'về phía; bằng (phương tiện)',    lesson:9 },
  { re:/(께서|[가-힣]시[어었]?요)/,     form:'-(으)시- · 께서',      vi:'kính ngữ với chủ ngữ',           lesson:10 },
  { re:/부터/,                        form:'N부터 N까지',          vi:'từ… đến…',                       lesson:11 },
  { re:/거예요|거야(?![가-힣])/,        form:'-(으)ㄹ 거예요',       vi:'sẽ… (dự định, dự đoán)',         lesson:11 },
  { re:/고(?![가-힣])/,               form:'-고',                 vi:'và — nối hai vế cùng chủ ngữ',   lesson:11 },
  { re:/(에게|한테)/,                  form:'N + 에게 / 한테',      vi:'cho, tới (người nhận)',          lesson:12 },
  { re:/지만/,                        form:'-지만',               vi:'nhưng',                          lesson:12 },
  { re:/(려고|러\s*(가|오))/,          form:'-(으)려고 / -(으)러',   vi:'định làm gì / đi để làm gì',     lesson:12 },
  { re:/[아어여]서(?![가-힣])/,        form:'-아 / 어서',           vi:'vì… nên…; …rồi…',                lesson:13 },
  { re:/까요(?![가-힣])/,              form:'-(으)ㄹ까요?',         vi:'chúng ta… nhé? / liệu có…?',     lesson:13 },
  { re:/(^|\s)못\s/,                  form:'못 + động từ',        vi:'không thể (do hoàn cảnh)',       lesson:13 },
  { re:/[ㄹ을]\s*수\s*(있|없)/,        form:'-(으)ㄹ 수 있다/없다',  vi:'có thể / không thể',             lesson:14 },
  { re:/는\s*것|기(?=\s*(가|를|는|예요|이에요))/, form:'-기 / -는 것', vi:'danh từ hoá động từ',          lesson:14 },
  { re:/까지/,                        form:'N에서 N까지',          vi:'từ… đến… (địa điểm)',            lesson:15 }
];

let GRAMMAR_NOTES = {};

function buildGrammar(course){
  GRAMMAR_NOTES = {};
  course.lessons.forEach(l => (l.grammar || []).forEach(g => {
    GRAMMAR_NOTES[g.form] = { note: g.note, ex: g.ex, lesson: l.no, theme: l.vi };
  }));
}

/** Trả về các mẫu ngữ pháp nhận ra được trong câu, kèm số bài để tra lại. */
function grammarIn(sentence){
  const s = String(sentence);
  const out = [];
  PATTERNS.forEach(p => {
    const m = s.match(p.re);
    if (!m) return;
    if (p.not && p.not.test(m[0])) return;
    const extra = GRAMMAR_NOTES[p.form] || {};
    out.push({
      form: p.form, vi: p.vi, lesson: p.lesson,
      matched: (m[0] || '').trim(),
      note: extra.note || '', ex: extra.ex || null,
      theme: extra.theme || ''
    });
  });
  return out;
}

/* ---------- kho từ và câu của khoá học ---------- */
let INDEX = null;

function build(course, common, dict){
  const words = [], sents = [];
  const byKo = {};

  // Từ của khoá học trước — ưu tiên vì có số bài, dùng cho câu ví dụ
  course.lessons.forEach(l => {
    l.vocab.forEach(v => {
      if (byKo[v.ko]) return;
      const w = Object.assign({ lesson: l.no, level: l.level, theme: l.vi }, v);
      words.push(w); byKo[v.ko] = w;
    });
    (l.dialogue || []).forEach(d => sents.push({ ko: d.ko, vi: d.vi, lesson: l.no, from: 'Hội thoại bài ' + l.no }));
    (l.grammar || []).forEach(g => sents.push({ ko: g.ex.ko, vi: g.ex.vi, lesson: l.no, from: g.form.split('<')[0].trim() }));
  });

  // Từ thông dụng bổ sung — khử trùng lặp theo chữ Hàn
  (common || []).forEach(v => {
    if (byKo[v.ko]) return;
    const w = Object.assign({ theme: 'Từ thông dụng' }, v);
    words.push(w); byKo[v.ko] = w;
  });

  // Từ điển KRDict tự sinh (js/dict-ko.js) — lớn nhất, để sau cùng
  (dict || []).forEach(v => {
    if (byKo[v.ko]) return;
    const w = Object.assign({ theme: 'KRDict' }, v);
    words.push(w); byKo[v.ko] = w;
  });

  INDEX = { words, sents, byKo };
  buildGrammar(course);
  return INDEX;
}
function index(){ return INDEX; }

/** Gộp thêm một mẻ từ (dùng cho từ điển KRDict nạp muộn). Trả về số từ mới thêm. */
function addDict(list){
  if (!INDEX || !Array.isArray(list)) return 0;
  let n = 0;
  list.forEach(v => {
    if (!v || !v.ko || INDEX.byKo[v.ko]) return;
    const w = Object.assign({ theme: 'KRDict' }, v);
    INDEX.words.push(w); INDEX.byKo[v.ko] = w; n++;
  });
  return n;
}

/** Tra trong kho từ của khoá: trả về {hit, form, forms} */
function analyze(token){
  const fs = forms(token);
  if (!INDEX) return { surface: token, forms: fs, hit: null, best: token };
  for (const f of fs){
    const hit = INDEX.byKo[f.form];
    if (hit) return { surface: token, forms: fs, hit: hit, best: f.form, why: f.why };
  }
  // Không có trong khoá: ưu tiên dạng gốc …다, rồi tới danh từ đã gỡ trợ từ
  const pick = fs.find(f => f.kind === 'base')
            || fs.find(f => f.kind === 'noun')
            || fs[0];
  return { surface: token, forms: fs, hit: null, best: pick.form, why: pick.why };
}

/** Câu trong khoá học có chứa bất kỳ dạng nào của từ. */
function examples(token, limit){
  if (!INDEX) return [];
  const fs = forms(token).map(f => f.form).filter(f => f.length >= 2);
  const keys = [token].concat(fs);
  const out = [], seen = {};
  for (const s of INDEX.sents){
    if (seen[s.ko]) continue;
    if (keys.some(k => s.ko.indexOf(k) > -1)){ seen[s.ko] = 1; out.push(s); }
    if (out.length >= (limit || 4)) break;
  }
  return out;
}

/* ---------- từ điển ngoài ----------
   Mọi địa chỉ dưới đây đều đã được mở thử và trả về kết quả đúng.       */
const SOURCES = [
  { id:'krdict', name:'KRDict Hàn–Việt', ko:'한국어기초사전',
    note:'Từ điển chính thức của Viện Quốc ngữ Hàn Quốc, có bản dịch tiếng Việt và mục « Ví dụ cụ thể ».',
    tag:'nghĩa', primary:true,
    url:q => 'https://krdict.korean.go.kr/vie/dicMarinerSearch/search?nation=vie&nationCode=6&mainSearchWord=' + encodeURIComponent(q) },

  { id:'youglish', name:'Youglish', ko:'실제 발음',
    note:'Nghe hàng trăm người Hàn nói chính từ này trong video thật — chuẩn hơn mọi giọng đọc máy.',
    tag:'phát âm', primary:true,
    url:q => 'https://youglish.com/pronounce/' + encodeURIComponent(q) + '/korean' },

  { id:'tatoeba', name:'Tatoeba', ko:'예문',
    note:'Kho câu ví dụ có bản dịch, do người thật đóng góp. Lọc sẵn cặp Hàn → Việt.',
    tag:'câu ví dụ', primary:true,
    url:q => 'https://tatoeba.org/en/sentences/search?query=' + encodeURIComponent(q) + '&from=kor&to=vie' },

  { id:'opendict', name:'우리말샘', ko:'용례 사전',
    note:'Từ điển mở của Viện Quốc ngữ. Mục 용례 chứa rất nhiều câu dùng thật.',
    tag:'câu ví dụ',
    url:q => 'https://opendict.korean.go.kr/search/searchResult?query=' + encodeURIComponent(q) },

  { id:'stdict', name:'표준국어대사전', ko:'국립국어원',
    note:'Đại từ điển chuẩn quốc gia. Định nghĩa Hàn – Hàn, kèm Hán tự.',
    tag:'nghĩa',
    url:q => 'https://stdict.korean.go.kr/search/searchResult.do?searchKeyword=' + encodeURIComponent(q) },

  { id:'daum', name:'다음 어학사전', ko:'Daum',
    note:'Tra nhanh, có nút nghe và danh sách từ liên quan.',
    tag:'nghĩa',
    url:q => 'https://dic.daum.net/search.do?q=' + encodeURIComponent(q) },

  { id:'wikt', name:'Wiktionary', ko:'어원',
    note:'Từ nguyên và chữ Hán gốc — chỗ tốt nhất để nối sang âm Hán-Việt.',
    tag:'Hán tự',
    url:q => 'https://en.wiktionary.org/wiki/' + encodeURIComponent(q) },

  { id:'gtrans', name:'Google Dịch', ko:'번역',
    note:'Dịch nhanh cả câu khi cần hiểu ý chung.',
    tag:'dịch câu',
    url:q => 'https://translate.google.com/?sl=ko&tl=vi&op=translate&text=' + encodeURIComponent(q) }
];

/* ---------- tra cả câu ---------- */
const SENTENCE_SOURCES = [
  { id:'gtrans', name:'Google Dịch', ko:'번역', tag:'dịch cả câu', primary:true,
    note:'Dịch nhanh toàn bộ câu để nắm ý chung trước khi mổ từng từ.',
    url:q => 'https://translate.google.com/?sl=ko&tl=vi&op=translate&text=' + encodeURIComponent(q) },
  { id:'tatoeba', name:'Tatoeba', ko:'비슷한 문장', tag:'câu tương tự', primary:true,
    note:'Tìm câu có cấu trúc giống, kèm bản dịch của người thật.',
    url:q => 'https://tatoeba.org/en/sentences/search?query=' + encodeURIComponent(q) + '&from=kor&to=vie' },
  { id:'opendict', name:'우리말샘 용례', ko:'용례',
    note:'Kho câu dùng thật của Viện Quốc ngữ — tra theo một từ khoá trong câu.',
    tag:'câu ví dụ',
    url:q => 'https://opendict.korean.go.kr/search/searchResult?query=' + encodeURIComponent(q) },
  { id:'youglish', name:'Youglish', ko:'실제 발음',
    note:'Nghe người Hàn nói cụm này trong video thật.',
    tag:'phát âm',
    url:q => 'https://youglish.com/pronounce/' + encodeURIComponent(q) + '/korean' }
];

return { mark, forms, analyze, examples, build, index, addDict,
         splitSentences, tokens, grammarIn,
         SOURCES, SENTENCE_SOURCES, HANGUL_RE: RE_HAS };
})();
if (typeof window !== 'undefined') window.Words = Words;
