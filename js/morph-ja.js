/* ============================================================
   LangLab — Bộ hình thái tiếng Nhật (JaMorph): chia động từ (nhóm I 五段 · II 一段 · III する/来る),
   tính từ い/な, khôi phục thể từ điển (deinflect), chuyển romaji ⇄ kana.
   Tự soạn; hoạt động trên chữ có kanji miễn là các kana cuối là đuôi biến đổi.
   ============================================================ */
const JaMorph = (function(){
  const ROWS = {
    'u': 'うくぐすつぬぶむる', 'a': 'わかがさたなばまら', 'i': 'いきぎしちにびみり', 'e': 'えけげせてねべめれ', 'o': 'おこごそとのぼもろ'
  };
  const idx = ch => ROWS.u.indexOf(ch);
  const shift = (ch, row) => { const i = idx(ch); return i < 0 ? null : ROWS[row][i]; };
  const KANA_RE = /[぀-ヿ]/;
  const isKana = s => KANA_RE.test(s);
  const hira = s => s.replace(/[ァ-ン]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  const kata = s => s.replace(/[ぁ-ん]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));

  /* ---- xác định nhóm động từ khi không khai báo ---- */
  const G1_RU = new Set(['帰る','入る','はいる','走る','はしる','知る','しる','切る','要る','減る','へる','照る','蹴る','ける','喋る','しゃべる','限る','かぎる','握る','にぎる','焦る','あせる','滑る','すべる','参る','まいる','混じる','まじる','散る','ちる','練る','嘲る','あざける','陥る','おちいる','弄る','いじる','遮る','さえぎる','翻る','茂る','しげる','湿る','しめる','罵る','ののしる','捻る','ひねる','ほとばしる','迸る','蘇る','よみがえる','嘲る','覆る','くつがえる','詰る','なじる','漲る','みなぎる','脂ぎる','あぶらぎる','くねる','しくじる','せせる','どじる','びびる','やじる','萎びる','しなびる','ねじる','捩る']);
  function group(dict, hint, kana){
    const w = String(dict || '');
    if (hint) return String(hint);
    if (w === 'する' || w.endsWith('する')) return '3';
    if (w.endsWith('来る') || w === 'くる') return '3';
    if (!w.endsWith('る')) return '1';
    if (G1_RU.has(w) || G1_RU.has(hira(w))) return '1';
    const rd = hira(String(kana || w));
    const pre = rd[rd.length - 2];
    if (pre && /[いきぎしじちにひびみりえけげせぜてでねへべめれ]/.test(pre)) return '2';
    if (!kana && pre && /[一-鿿]/.test(pre)) return '2'; // không có cách đọc: đoán nhóm II (nên khai báo g)
    return '1';
  }

  /* ---- chia động từ ---- */
  function verb(dict, hint, kana){
    const w = String(dict || '').trim();
    const g = group(w, hint, kana);
    const r = { dict:w, group:g, forms:{}, notes:[] };
    const F = r.forms;
    if (g === '3'){
      const isSuru = w.endsWith('する'), pre = isSuru ? w.slice(0, -2) : w.slice(0, -2);
      if (isSuru){
        Object.assign(F, { masu:pre+'します', masen:pre+'しません', mashita:pre+'しました', masendeshita:pre+'しませんでした', te:pre+'して', ta:pre+'した', nai:pre+'しない', nakatta:pre+'しなかった', tai:pre+'したい', potential:pre+'できる', volitional:pre+'しよう', imperative:pre+'しろ', passive:pre+'される', causative:pre+'させる', ba:pre+'すれば', masho:pre+'しましょう', stem:pre+'し' });
      } else { // 来る
        const k = w.endsWith('来る') ? w.slice(0, -2) + '来' : '';
        const kk = w.endsWith('来る') ? '来' : 'き', ko = w.endsWith('来る') ? '来' : 'こ';
        const base = w.endsWith('来る') ? w.slice(0, -2) : w.slice(0, -2);
        Object.assign(F, { masu:base+kk+'ます', masen:base+kk+'ません', mashita:base+kk+'ました', masendeshita:base+kk+'ませんでした', te:base+kk+'て', ta:base+kk+'た', nai:base+ko+'ない', nakatta:base+ko+'なかった', tai:base+kk+'たい', potential:base+ko+'られる', volitional:base+ko+'よう', imperative:base+ko+'い', passive:base+ko+'られる', causative:base+ko+'させる', ba:base+(w.endsWith('来る') ? '来' : 'く')+'れば', masho:base+kk+'ましょう', stem:base+kk });
        r.notes.push('来る đọc: 来ます (きます), 来ない (こない), 来られる (こられる).');
      }
      return r;
    }
    if (g === '2'){
      const s = w.slice(0, -1);
      Object.assign(F, { masu:s+'ます', masen:s+'ません', mashita:s+'ました', masendeshita:s+'ませんでした', te:s+'て', ta:s+'た', nai:s+'ない', nakatta:s+'なかった', tai:s+'たい', potential:s+'られる', volitional:s+'よう', imperative:s+'ろ', passive:s+'られる', causative:s+'させる', ba:s+'れば', masho:s+'ましょう', stem:s });
      r.notes.push('Nhóm II: bỏ る rồi thêm đuôi. Khẩu ngữ: dạng khả năng rút gọn ～れる (食べれる).');
      return r;
    }
    // nhóm I
    const last = w[w.length - 1], s = w.slice(0, -1);
    if (idx(last) < 0){ r.notes.push('Không nhận ra đuôi động từ.'); return r; }
    const a = last === 'う' ? 'わ' : shift(last, 'a'), i = shift(last, 'i'), e = shift(last, 'e'), o = shift(last, 'o');
    let te;
    if ('うつる'.includes(last)) te = s + 'って';
    else if ('むぶぬ'.includes(last)) te = s + 'んで';
    else if (last === 'く') te = (w === '行く' || w === 'いく' || w.endsWith('行く')) ? s + 'って' : s + 'いて';
    else if (last === 'ぐ') te = s + 'いで';
    else te = s + 'して';
    const ta = te.replace(/て$/, 'た').replace(/で$/, 'だ');
    const nai = (w === 'ある') ? 'ない' : s + a + 'ない';
    Object.assign(F, { masu:s+i+'ます', masen:s+i+'ません', mashita:s+i+'ました', masendeshita:s+i+'ませんでした', te, ta, nai, nakatta:nai.replace(/ない$/, 'なかった'), tai:s+i+'たい', potential:s+e+'る', volitional:s+o+'う', imperative:s+e, passive:s+a+'れる', causative:s+a+'せる', ba:s+e+'ば', masho:s+i+'ましょう', stem:s+i });
    if (w === 'ある') r.notes.push('ある: phủ định là ない (không phải あらない).');
    if (w.endsWith('行く') || w === 'いく') r.notes.push('行く: thể て là 行って (ngoại lệ).');
    return r;
  }

  /* ---- tính từ ---- */
  function adj(dict, type){
    const w = String(dict || '').trim();
    const t = type || (w.endsWith('い') && !/[^ぁ-ん]い$/.test(w) === false ? 'i' : (w.endsWith('い') ? 'i' : 'na'));
    const r = { dict:w, type:t, forms:{}, notes:[] };
    if (t === 'i'){
      const s = (w === 'いい' || w === '良い' || w === 'よい') ? 'よ' : w.slice(0, -1);
      Object.assign(r.forms, { pres:w, presPolite:w+'です', neg:s+'くない', negPolite:s+'くないです', past:s+'かった', pastPolite:s+'かったです', negPast:s+'くなかった', te:s+'くて', adv:s+'く', ba:s+'ければ', nara:w+'なら', noun:s+'さ', attr:w });
      if (s === 'よ') r.notes.push('いい biến đổi theo よい: よくない, よかった, よくて.');
      return r;
    }
    Object.assign(r.forms, { pres:w+'だ', presPolite:w+'です', neg:w+'じゃない', negPolite:w+'じゃありません', past:w+'だった', pastPolite:w+'でした', negPast:w+'じゃなかった', te:w+'で', adv:w+'に', ba:w+'なら', nara:w+'なら', noun:w+'さ', attr:w+'な' });
    r.notes.push('Tính từ な: trước danh từ thêm な (静かな町); trang trọng: ではない, ではありません.');
    return r;
  }

  /* ---- khôi phục thể từ điển: trả về danh sách ứng viên ---- */
  function deinflect(surface){
    const s = String(surface || '').trim().replace(/[。、！？「」（）\s]/g, '');
    const out = new Set();
    if (!s) return [];
    out.add(s);
    const add = x => { if (x && x.length >= 1) out.add(x); };
    const godanFromRow = (stem, ch, row) => { const i = ROWS[row].indexOf(ch); if (i >= 0) add(stem + ROWS.u[i]); };
    const tryStem = (stem) => { // stem = dạng trước ます/たい/て…
      if (!stem) return;
      const last = stem[stem.length - 1];
      add(stem + 'る');                       // nhóm II
      godanFromRow(stem.slice(0, -1), last, 'i'); // nhóm I: い-row → う-row
      if (last === 'し'){ add(stem.slice(0, -1) + 'する'); if (stem === 'し') add('する'); }
      if (last === 'き' && stem.length === 1) add('くる');
      if (stem.endsWith('来')) add(stem + 'る');
    };
    const rules = [
      [/(ませんでした|ました|ません|まして|ましょう|ます)$/, m => tryStem(m)],
      [/(たくない|たかった|たい)$/, m => tryStem(m)],
      [/なかった$/, m => negStem(m)], [/なくて$/, m => negStem(m)], [/ない$/, m => negStem(m)], [/ず$/, m => negStem(m)],
      [/(られない|られる|られた|られて)$/, m => { add(m + 'る'); add(m + 'る'); if (m.endsWith('来') || m === 'こ') add('くる'); }],
      [/(させる|させた|させて|せる|せた|せて|れる|れた|れて)$/, (m, suf) => { const last = m[m.length - 1]; if (/^(させ|せ)/.test(suf)){ godanFromRow(m.slice(0, -1), last, 'a'); if (last === 'わ') add(m.slice(0, -1) + 'う'); add(m + 'る'); if (m.endsWith('し')||m==='') add(m.replace(/し$/, '') + 'する'); } else { godanFromRow(m.slice(0, -1), last, 'a'); if (last === 'わ') add(m.slice(0, -1) + 'う'); godanFromRow(m.slice(0, -1), last, 'e'); add(m + 'る'); } }],
      [/(よう)$/, m => { const last = m[m.length - 1]; godanFromRow(m.slice(0, -1), last, 'o'); add(m + 'る'); if (m.endsWith('し')) add(m.slice(0, -1) + 'する'); if (m === 'こ') add('くる'); }],
      [/([おこごそとのぼもろ])う$/, (m, suf) => { godanFromRow(m, suf[0], 'o'); }],
      [/([えけげせてねべめれ])(る|ます|ない|た|て|ました|ません|ば)$/, (m, suf) => { godanFromRow(m, suf[0], 'e'); }],
      [/(れば)$/, m => { const last = m[m.length - 1]; godanFromRow(m.slice(0, -1), last, 'e'); add(m + 'る'); if (m === 'す' || m.endsWith('す')) add(m + 'る'); if (m === 'く') add('くる'); }],
      [/(ば)$/, m => { const last = m[m.length - 1]; godanFromRow(m.slice(0, -1), last, 'e'); }],
      [/って$/, m => { add(m + 'う'); add(m + 'つ'); add(m + 'る'); add(m + 'く'); }],
      [/った$/, m => { add(m + 'う'); add(m + 'つ'); add(m + 'る'); add(m + 'く'); }],
      [/んで$/, m => { add(m + 'む'); add(m + 'ぶ'); add(m + 'ぬ'); }],
      [/んだ$/, m => { add(m + 'む'); add(m + 'ぶ'); add(m + 'ぬ'); }],
      [/いて$/, m => add(m + 'く')], [/いた$/, m => add(m + 'く')],
      [/いで$/, m => add(m + 'ぐ')], [/いだ$/, m => add(m + 'ぐ')],
      [/して$/, m => { add(m + 'す'); add(m + 'する'); }], [/した$/, m => { add(m + 'す'); add(m + 'する'); }],
      [/(て|た)$/, m => { add(m + 'る'); if (m.endsWith('き') && m.length <= 2) add('くる'); }],
      [/(ています|ていた|ている|てる|ていて|てある|ておく|てみる|てしまう|ちゃう|ちゃった|てください|てくれる|てあげる|てもらう|ていました|ていない)$/, (m) => { add(m + 'る'); add(m + 'て'); }],
      [/(でいます|でいた|でいる|でる|でいて|でおく|でみる|でしまう|でください|でいました)$/, (m) => { add(m + 'で'); }],
      [/(たら|たり)$/, m => add(m + 'た')], [/(だら|だり)$/, m => add(m + 'だ')],
      [/(くない|かった|くて|ければ|くなかった|さ)$/, m => add(m + 'い')],
      [/^よ(くない|かった|くて|ければ|くなかった)$/, () => add('いい')],
      [/(じゃない|じゃなかった|ではない|ではなかった|だった|でした|です|だ|なら|な|に)$/, m => add(m)],
      [/(ましょう)$/, m => tryStem(m)],
      [/(そう|すぎる|すぎ|やすい|にくい|ながら|方|かた)$/, m => tryStem(m)],
      [/(ろ|よ)$/, m => add(m + 'る')],
      [/(え|け|げ|せ|て|ね|べ|め|れ)$/, m => { /* mệnh lệnh nhóm I */ }]
    ];
    function negStem(m){
      if (!m) return;
      const last = m[m.length - 1];
      add(m + 'る');                                // nhóm II
      if (last === 'わ') add(m.slice(0, -1) + 'う');  // 買わない → 買う
      godanFromRow(m.slice(0, -1), last, 'a');
      if (last === 'し') add(m.slice(0, -1) + 'する');
      if (m === 'こ' || m.endsWith('来')) add(m.replace(/こ$/, '') + (m.endsWith('来') ? 'る' : 'くる'));
      if (m === '' ) add('ある');
    }
    // áp dụng từng quy tắc (một tầng), rồi lặp thêm một tầng cho các dạng ghép (ていました → ている → いる)
    const apply = (str) => { rules.forEach(([re, fn]) => { const mm = str.match(re); if (mm){ const stem = str.slice(0, str.length - mm[0].length); fn(stem, mm[0]); } }); };
    apply(s);
    const second = [...out];
    second.forEach(x => { if (x !== s) apply(x); });
    // dạng lịch sự phức: 食べています → 食べて → 食べる
    if (/ています$/.test(s)) { const st = s.replace(/ています$/, ''); add(st + 'る'); apply(st + 'て'); }
    if (/でいます$/.test(s)) { const st = s.replace(/でいます$/, ''); apply(st + 'で'); }
    if (/ませんか$/.test(s)) tryStem(s.replace(/ませんか$/, ''));
    if (/ましょうか$/.test(s)) tryStem(s.replace(/ましょうか$/, ''));
    if (s === 'ない' || s === 'なかった') add('ある');
    if (/^(来|き|こ)(ます|ました|ません|て|た|ない|なかった|られる|よう|い)$/.test(s)) add('来る');
    if (/^(し)(ます|ました|ません|て|た|ない|なかった|よう|ろ)$/.test(s)) add('する');
    if (/^(でき)(ます|ました|ません|る|て|た|ない)$/.test(s)) add('できる');
    return [...out].filter(x => x.length >= 1 && x !== s || x === s).filter((x, i, arr) => arr.indexOf(x) === i);
  }

  /* ---- romaji ⇄ kana ---- */
  const R2K = { 'kya':'きゃ','kyu':'きゅ','kyo':'きょ','sha':'しゃ','shu':'しゅ','sho':'しょ','sya':'しゃ','syu':'しゅ','syo':'しょ','cha':'ちゃ','chu':'ちゅ','cho':'ちょ','tya':'ちゃ','tyu':'ちゅ','tyo':'ちょ','nya':'にゃ','nyu':'にゅ','nyo':'にょ','hya':'ひゃ','hyu':'ひゅ','hyo':'ひょ','mya':'みゃ','myu':'みゅ','myo':'みょ','rya':'りゃ','ryu':'りゅ','ryo':'りょ','gya':'ぎゃ','gyu':'ぎゅ','gyo':'ぎょ','ja':'じゃ','ju':'じゅ','jo':'じょ','jya':'じゃ','jyu':'じゅ','jyo':'じょ','bya':'びゃ','byu':'びゅ','byo':'びょ','pya':'ぴゃ','pyu':'ぴゅ','pyo':'ぴょ',
    'shi':'し','chi':'ち','tsu':'つ','tu':'つ','si':'し','ti':'ち','fu':'ふ','hu':'ふ','ji':'じ','zi':'じ','di':'ぢ','du':'づ',
    'ka':'か','ki':'き','ku':'く','ke':'け','ko':'こ','sa':'さ','su':'す','se':'せ','so':'そ','ta':'た','te':'て','to':'と','na':'な','ni':'に','nu':'ぬ','ne':'ね','no':'の','ha':'は','hi':'ひ','he':'へ','ho':'ほ','ma':'ま','mi':'み','mu':'む','me':'め','mo':'も','ya':'や','yu':'ゆ','yo':'よ','ra':'ら','ri':'り','ru':'る','re':'れ','ro':'ろ','wa':'わ','wo':'を','ga':'が','gi':'ぎ','gu':'ぐ','ge':'げ','go':'ご','za':'ざ','zu':'ず','ze':'ぜ','zo':'ぞ','da':'だ','de':'で','do':'ど','ba':'ば','bi':'び','bu':'ぶ','be':'べ','bo':'ぼ','pa':'ぱ','pi':'ぴ','pu':'ぷ','pe':'ぺ','po':'ぽ',
    'a':'あ','i':'い','u':'う','e':'え','o':'お','n':'ん' };
  function romajiToKana(r){
    let s = String(r || '').toLowerCase().replace(/ō/g, 'ou').replace(/ū/g, 'uu').replace(/ā/g, 'aa').replace(/ē/g, 'ee').replace(/ī/g, 'ii').replace(/[^a-z'-]/g, '');
    let out = '';
    while (s.length){
      if (/^(n)(?![aeiouy])/.test(s) && !/^nn/.test(s)){ out += 'ん'; s = s.slice(1); continue; }
      if (/^nn/.test(s) && !/^nn[aeiouy]/.test(s)){ out += 'ん'; s = s.slice(2); continue; }
      if (/^([kstnhmyrwgzdbpcfj])\1/.test(s) && s[0] !== 'n'){ out += 'っ'; s = s.slice(1); continue; }
      if (s[0] === "'" || s[0] === '-'){ s = s.slice(1); continue; }
      let hit = null;
      for (const L of [3, 2, 1]){ const k = s.slice(0, L); if (R2K[k]){ hit = k; break; } }
      if (!hit) return null;
      out += R2K[hit]; s = s.slice(hit.length);
    }
    return out;
  }
  const K2R = {}; Object.keys(R2K).forEach(k => { const v = R2K[k]; if (!K2R[v] || k.length < K2R[v].length) K2R[v] = k; });
  Object.assign(K2R, { 'し':'shi','ち':'chi','つ':'tsu','ふ':'fu','じ':'ji','ぢ':'ji','づ':'zu','を':'o','しゃ':'sha','しゅ':'shu','しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','じゃ':'ja','じゅ':'ju','じょ':'jo' });
  function kanaToRomaji(k){
    let s = hira(String(k || '')).replace(/ー/g, '-');
    let out = '';
    for (let i = 0; i < s.length; i++){
      const two = s.slice(i, i + 2);
      if (K2R[two] && /[ゃゅょ]/.test(two[1])){ out += K2R[two]; i++; continue; }
      const ch = s[i];
      if (ch === 'っ'){ const nx = s.slice(i + 1, i + 3); const r = K2R[nx] || K2R[s[i + 1]] || ''; out += r ? r[0] : ''; continue; }
      if (ch === 'ん'){ out += (/[あいうえおやゆよ]/.test(s[i + 1] || '') ? "n'" : 'n'); continue; }
      if (ch === '-'){ out += out.slice(-1); continue; }
      out += K2R[ch] || ch;
    }
    return out.replace(/ou/g, 'ō').replace(/uu/g, 'ū').replace(/aa/g, 'ā').replace(/ee/g, 'ē').replace(/ii/g, 'ii').replace(/oo/g, 'ō');
  }

  const FORM_LABELS = [
    ['masu','～ます (lịch sự)'],['masen','～ません (phủ định)'],['mashita','～ました (quá khứ)'],['masendeshita','～ませんでした'],['te','Thể て'],['ta','Thể た (quá khứ thường)'],['nai','Thể ない'],['nakatta','～なかった'],['tai','～たい (muốn)'],['potential','Khả năng'],['volitional','Ý chí (～よう)'],['imperative','Mệnh lệnh'],['passive','Bị động'],['causative','Sai khiến'],['ba','Điều kiện ～ば'],['masho','～ましょう (rủ)']
  ];
  const ADJ_LABELS = [
    ['pres','Hiện tại (thường)'],['presPolite','Hiện tại (lịch sự)'],['neg','Phủ định'],['negPolite','Phủ định lịch sự'],['past','Quá khứ'],['pastPolite','Quá khứ lịch sự'],['negPast','Phủ định quá khứ'],['te','Thể て (nối)'],['adv','Trạng từ'],['ba','Điều kiện'],['attr','Trước danh từ'],['noun','Danh từ hoá (～さ)']
  ];
  return { group, verb, adj, deinflect, romajiToKana, kanaToRomaji, hira, kata, isKana, FORM_LABELS, ADJ_LABELS };
})();
if (typeof module !== 'undefined') module.exports = JaMorph;
