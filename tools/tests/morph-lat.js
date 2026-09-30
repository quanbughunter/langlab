/* ============================================================
   LangLab — KIỂM THỬ HÌNH THÁI PHÁP / TÂY BAN NHA
   ------------------------------------------------------------
   Mỗi phép thử là một bảng chia ĐÃ BIẾT ĐÚNG, gõ tay từ ngữ pháp
   chuẩn. Máy sinh ra lệch một ô là báo ngay ô đó.

   Chạy:  node tools/tests/morph-lat.js
   ============================================================ */
const M = require('../../js/morph-lat.js');
let pass = 0, fail = 0;
const check = (name, fn) => {
  try { const r = fn(); if (r !== true) throw new Error(r || 'sai'); pass++; console.log('ok   ' + name); }
  catch (e){ fail++; console.log('FAIL ' + name + ' — ' + e.message); }
};

/** So một thì với đáp án gõ tay. */
function eq(lang, inf, tenseId, want){
  const t = M.table(lang, inf);
  if (!t) return 'không chia được «' + inf + '»';
  const x = t.tenses.find(v => v.id === tenseId);
  if (!x) return 'không có thì ' + tenseId;
  const got = x.forms;
  for (let i = 0; i < want.length; i++){
    if (want[i] === null) continue;                       // ô cố ý bỏ qua
    if (got[i] !== want[i]) return inf + ' · ' + tenseId + ' ngôi ' + (i + 1)
      + ': ra «' + got[i] + '», cần «' + want[i] + '»';
  }
  return true;
}

/* ================= TIẾNG PHÁP ================= */

check('fr · parler — nhóm -er đều, cả sáu thì', () => {
  let r;
  r = eq('fr','parler','pres',['parle','parles','parle','parlons','parlez','parlent']); if (r !== true) return r;
  r = eq('fr','parler','imp', ['parlais','parlais','parlait','parlions','parliez','parlaient']); if (r !== true) return r;
  r = eq('fr','parler','fut', ['parlerai','parleras','parlera','parlerons','parlerez','parleront']); if (r !== true) return r;
  r = eq('fr','parler','cond',['parlerais','parlerais','parlerait','parlerions','parleriez','parleraient']); if (r !== true) return r;
  r = eq('fr','parler','subj',['parle','parles','parle','parlions','parliez','parlent']); if (r !== true) return r;
  return M.table('fr','parler').pp === 'parlé' || 'quá khứ phân từ sai';
});

check('fr · finir — nhóm -ir có -iss-', () => {
  let r;
  r = eq('fr','finir','pres',['finis','finis','finit','finissons','finissez','finissent']); if (r !== true) return r;
  r = eq('fr','finir','imp', ['finissais','finissais','finissait','finissions','finissiez','finissaient']); if (r !== true) return r;
  r = eq('fr','finir','fut', ['finirai','finiras','finira','finirons','finirez','finiront']); if (r !== true) return r;
  return M.table('fr','finir').ppr === 'finissant' || 'phân từ hiện tại sai';
});

check('fr · vendre — nhóm -re, ngôi thứ ba không đuôi', () => {
  let r;
  r = eq('fr','vendre','pres',['vends','vends','vend','vendons','vendez','vendent']); if (r !== true) return r;
  r = eq('fr','vendre','fut', ['vendrai','vendras','vendra','vendrons','vendrez','vendront']); if (r !== true) return r;
  return M.table('fr','vendre').pp === 'vendu' || 'quá khứ phân từ sai';
});

check('fr · être và avoir', () => {
  let r;
  r = eq('fr','être','pres',['suis','es','est','sommes','êtes','sont']); if (r !== true) return r;
  r = eq('fr','être','imp', ['étais','étais','était','étions','étiez','étaient']); if (r !== true) return r;
  r = eq('fr','être','fut', ['serai','seras','sera','serons','serez','seront']); if (r !== true) return r;
  r = eq('fr','avoir','pres',['ai','as','a','avons','avez','ont']); if (r !== true) return r;
  r = eq('fr','avoir','fut', ['aurai','auras','aura','aurons','aurez','auront']); if (r !== true) return r;
  return eq('fr','avoir','subj',['aie','aies','ait','ayons','ayez','aient']);
});

check('fr · aller — subjonctif đổi gốc ở nous/vous', () => {
  let r;
  r = eq('fr','aller','pres',['vais','vas','va','allons','allez','vont']); if (r !== true) return r;
  r = eq('fr','aller','fut', ['irai','iras','ira','irons','irez','iront']); if (r !== true) return r;
  return eq('fr','aller','subj',['aille','ailles','aille','allions','alliez','aillent']);
});

check('fr · prendre, boire, vouloir — gốc subjonctif kép', () => {
  let r;
  r = eq('fr','prendre','pres',['prends','prends','prend','prenons','prenez','prennent']); if (r !== true) return r;
  r = eq('fr','prendre','subj',['prenne','prennes','prenne','prenions','preniez','prennent']); if (r !== true) return r;
  r = eq('fr','boire','pres',['bois','bois','boit','buvons','buvez','boivent']); if (r !== true) return r;
  r = eq('fr','boire','imp', ['buvais','buvais','buvait','buvions','buviez','buvaient']); if (r !== true) return r;
  return eq('fr','vouloir','subj',['veuille','veuilles','veuille','voulions','vouliez','veuillent']);
});

/* Ô trong bảng chỉ chứa phần động từ; đại từ nằm ở đầu cột. */
check('fr · passé composé chọn đúng trợ động từ', () => {
  const a = M.table('fr','manger').tenses.find(t => t.id === 'pc').forms;
  if (a[0] !== 'ai mangé') return 'manger: ra «' + a[0] + '»';
  const b = M.table('fr','aller').tenses.find(t => t.id === 'pc').forms;
  if (b[0] !== 'suis allé') return 'aller: ra «' + b[0] + '»';
  if (b[3] !== 'sommes allés') return 'aller ngôi nous: ra «' + b[3] + '» — thiếu hợp số';
  if (b[4] !== 'êtes allés') return 'aller ngôi vous: ra «' + b[4] + '»';
  if (b[5] !== 'sont allés') return 'aller ngôi ils: ra «' + b[5] + '»';
  return M.table('fr','partir').aux === 'être' || 'partir phải đi với être';
});

check('fr · chính tả nhóm -er: manger, commencer, acheter, préférer, appeler', () => {
  let r;
  r = eq('fr','manger','pres',['mange','manges','mange','mangeons','mangez','mangent']); if (r !== true) return r;
  r = eq('fr','manger','imp', ['mangeais','mangeais','mangeait','mangions','mangiez','mangeaient']); if (r !== true) return r;
  r = eq('fr','commencer','pres',['commence','commences','commence','commençons','commencez','commencent']); if (r !== true) return r;
  r = eq('fr','acheter','pres',['achète','achètes','achète','achetons','achetez','achètent']); if (r !== true) return r;
  r = eq('fr','préférer','pres',['préfère','préfères','préfère','préférons','préférez','préfèrent']); if (r !== true) return r;
  return eq('fr','appeler','pres',['appelle','appelles','appelle','appelons','appelez','appellent']);
});

check('fr · động từ vô nhân xưng chỉ có ngôi thứ ba', () => {
  const t = M.table('fr','pleuvoir');
  const p = t.tenses.find(x => x.id === 'pres').forms;
  if (p[2] !== 'pleut') return 'ra «' + p[2] + '»';
  if (p[0] !== '') return 'ngôi je lẽ ra phải trống, ra «' + p[0] + '»';
  return M.table('fr','falloir').tenses.find(x => x.id === 'pres').forms[2] === 'faut' || 'falloir sai';
});

check('fr · hợp giống tính từ', () => {
  const T = [['petit','petite'],['grand','grande'],['heureux','heureuse'],['actif','active'],
             ['premier','première'],['beau','belle'],['vieux','vieille'],['blanc','blanche'],
             ['long','longue'],['gentil','gentille'],['rouge','rouge'],['bon','bonne']];
  for (const [m, f] of T) if (M.frFem(m) !== f) return m + ' → ra «' + M.frFem(m) + '», cần «' + f + '»';
  return true;
});

check('fr · số nhiều danh từ', () => {
  const T = [['livre','livres'],['bureau','bureaux'],['cheveu','cheveux'],['journal','journaux'],
             ['pays','pays'],['prix','prix'],['nez','nez']];
  for (const [s, p] of T) if (M.frPlural(s) !== p) return s + ' → ra «' + M.frPlural(s) + '», cần «' + p + '»';
  return true;
});

/* ================= TIẾNG TÂY BAN NHA ================= */

check('es · hablar, comer, vivir — ba nhóm đều', () => {
  let r;
  r = eq('es','hablar','pres',['hablo','hablas','habla','hablamos','habláis','hablan']); if (r !== true) return r;
  r = eq('es','hablar','pret',['hablé','hablaste','habló','hablamos','hablasteis','hablaron']); if (r !== true) return r;
  r = eq('es','hablar','imp', ['hablaba','hablabas','hablaba','hablábamos','hablabais','hablaban']); if (r !== true) return r;
  r = eq('es','hablar','fut', ['hablaré','hablarás','hablará','hablaremos','hablaréis','hablarán']); if (r !== true) return r;
  r = eq('es','hablar','subj',['hable','hables','hable','hablemos','habléis','hablen']); if (r !== true) return r;
  r = eq('es','comer','pres',['como','comes','come','comemos','coméis','comen']); if (r !== true) return r;
  r = eq('es','comer','pret',['comí','comiste','comió','comimos','comisteis','comieron']); if (r !== true) return r;
  r = eq('es','vivir','pres',['vivo','vives','vive','vivimos','vivís','viven']); if (r !== true) return r;
  return eq('es','vivir','imp',['vivía','vivías','vivía','vivíamos','vivíais','vivían']);
});

check('es · đổi gốc e→ie, o→ue, e→i, u→ue', () => {
  let r;
  r = eq('es','querer','pres',['quiero','quieres','quiere','queremos','queréis','quieren']); if (r !== true) return r;
  r = eq('es','empezar','pres',['empiezo','empiezas','empieza','empezamos','empezáis','empiezan']); if (r !== true) return r;
  r = eq('es','volver','pres',['vuelvo','vuelves','vuelve','volvemos','volvéis','vuelven']); if (r !== true) return r;
  r = eq('es','contar','pres',['cuento','cuentas','cuenta','contamos','contáis','cuentan']); if (r !== true) return r;
  r = eq('es','pedir','pres',['pido','pides','pide','pedimos','pedís','piden']); if (r !== true) return r;
  return eq('es','jugar','pres',['juego','juegas','juega','jugamos','jugáis','juegan']);
});

check('es · -ir đổi gốc còn đổi ở quá khứ đơn và gerundio', () => {
  const r = eq('es','pedir','pret',['pedí','pediste','pidió','pedimos','pedisteis','pidieron']);
  if (r !== true) return r;
  if (M.table('es','pedir').ger !== 'pidiendo') return 'gerundio ra «' + M.table('es','pedir').ger + '»';
  if (M.table('es','dormir').ger !== 'durmiendo') return 'dormir gerundio ra «' + M.table('es','dormir').ger + '»';
  return true;
});

check('es · ser, estar, ir, tener, hacer', () => {
  let r;
  r = eq('es','ser','pres',['soy','eres','es','somos','sois','son']); if (r !== true) return r;
  r = eq('es','ser','pret',['fui','fuiste','fue','fuimos','fuisteis','fueron']); if (r !== true) return r;
  r = eq('es','ser','imp', ['era','eras','era','éramos','erais','eran']); if (r !== true) return r;
  r = eq('es','estar','pres',['estoy','estás','está','estamos','estáis','están']); if (r !== true) return r;
  r = eq('es','ir','pres',['voy','vas','va','vamos','vais','van']); if (r !== true) return r;
  r = eq('es','ir','imp', ['iba','ibas','iba','íbamos','ibais','iban']); if (r !== true) return r;
  r = eq('es','tener','pres',['tengo','tienes','tiene','tenemos','tenéis','tienen']); if (r !== true) return r;
  r = eq('es','tener','fut', ['tendré','tendrás','tendrá','tendremos','tendréis','tendrán']); if (r !== true) return r;
  return eq('es','hacer','pret',['hice','hiciste','hizo','hicimos','hicisteis','hicieron']);
});

check('es · phân từ bất quy tắc', () => {
  const T = [['hacer','hecho'],['decir','dicho'],['ver','visto'],['poner','puesto'],
             ['escribir','escrito'],['volver','vuelto'],['abrir','abierto'],['romper','roto']];
  for (const [v, p] of T){
    const t = M.table('es', v);
    if (!t || t.part !== p) return v + ' → ra «' + (t && t.part) + '», cần «' + p + '»';
  }
  return true;
});

check('es · hiện tại hoàn thành ghép đúng haber + phân từ', () => {
  const a = M.table('es','comer').tenses.find(t => t.id === 'perf').forms;
  if (a[0] !== 'he comido') return 'ra «' + a[0] + '»';
  const b = M.table('es','hacer').tenses.find(t => t.id === 'perf').forms;
  return b[2] === 'ha hecho' || 'hacer ngôi thứ ba ra «' + b[2] + '»';
});

check('es · động từ phản thân giữ đại từ đúng ngôi', () => {
  const t = M.table('es','levantarse');
  if (!t) return 'không chia được levantarse';
  const p = t.tenses.find(x => x.id === 'pres').forms;
  const want = ['me levanto','te levantas','se levanta','nos levantamos','os levantáis','se levantan'];
  for (let i = 0; i < 6; i++) if (p[i] !== want[i]) return 'ngôi ' + (i+1) + ': ra «' + p[i] + '»';
  const a = M.table('es','acostarse').tenses.find(x => x.id === 'pres').forms;
  return a[0] === 'me acuesto' || 'acostarse ra «' + a[0] + '» — thiếu đổi gốc';
});

check('es · động từ thời tiết chỉ có ngôi thứ ba', () => {
  const p = M.table('es','llover').tenses.find(x => x.id === 'pres').forms;
  if (p[2] !== 'llueve') return 'ra «' + p[2] + '»';
  return p[0] === '' || 'ngôi yo lẽ ra phải trống';
});

check('es · hợp giống và số nhiều', () => {
  const F = [['pequeño','pequeña'],['trabajador','trabajadora'],['inglés','inglesa'],
             ['grande','grande'],['azul','azul']];
  for (const [m, f] of F) if (M.esFem(m) !== f) return m + ' → ra «' + M.esFem(m) + '», cần «' + f + '»';
  const P = [['libro','libros'],['papel','papeles'],['lápiz','lápices'],['canción','canciones'],
             ['inglés','ingleses'],['ciudad','ciudades']];
  for (const [s, p] of P) if (M.esPlural(s) !== p) return s + ' → ra «' + M.esPlural(s) + '», cần «' + p + '»';
  return true;
});

/* ================= SINH DẠNG ĐỂ TRA NGƯỢC ================= */

check('forms() phủ được những dạng người học thật sự gõ vào', () => {
  const T = [
    ['fr','aller','động từ', ['vais','va','allons','allé','irai','allais','aille']],
    ['fr','être','động từ',  ['suis','est','sommes','été','serai','étais']],
    ['fr','manger','động từ',['mange','mangeons','mangé','mangeais','mangerai']],
    ['fr','petit','tính từ', ['petite','petits','petites']],
    ['fr','le livre','danh từ', ['livre','livres']],
    ['es','ir','động từ',    ['voy','va','vamos','fui','fuimos','iba','ido']],
    ['es','ser','động từ',   ['soy','es','fue','era','sido']],
    ['es','pequeño','tính từ',['pequeña','pequeños','pequeñas']],
    ['es','la canción','danh từ', ['canción','canciones']],
    ['es','levantarse','động từ', ['levanto','levantas','levantado']]
  ];
  for (const [lang, w, pos, want] of T){
    const f = new Set(M.forms(lang, w, pos));
    const miss = want.filter(x => !f.has(x));
    if (miss.length) return w + ' thiếu: ' + miss.join(' ');
  }
  return true;
});

check('stripLead() bóc mạo từ dính trước từ', () => {
  const T = [['fr','le livre','livre'],['fr','l’étagère','étagère'],['fr','une pomme','pomme'],
             ['es','el agua','agua'],['es','la mesa','mesa'],['es','los zapatos','zapatos']];
  for (const [l, a, b] of T) if (M.stripLead(l, a) !== b) return a + ' → «' + M.stripLead(l, a) + '»';
  return true;
});

check('không bịa: từ không phải động từ thì trả về null', () => {
  if (M.table('fr','maison') !== null && M.table('fr','maison')) {
    /* «maison» kết thúc bằng -on, không thuộc nhóm nào → phải null */
    return 'fr/maison lẽ ra không chia được';
  }
  if (M.table('es','mesa')) return 'es/mesa lẽ ra không chia được';
  return true;
});

/* Phân từ quá khứ dựng nên mọi thì kép, nên sai một chỗ là sai lan ra cả
   bảng. Trước đây «describir» ra «describido» (đúng: descrito) và
   «craindre» ra «craindu» (đúng: craint) — chốt lại cho chắc. */
check('phân từ bất quy tắc — kể cả động từ ghép thêm tiền tố', () => {
  const want = {
    es: { escribir:'escrito', describir:'descrito', inscribir:'inscrito',
          poner:'puesto', componer:'compuesto', disponer:'dispuesto',
          hacer:'hecho', deshacer:'deshecho', satisfacer:'satisfecho',
          volver:'vuelto', devolver:'devuelto', envolver:'envuelto',
          resolver:'resuelto', cubrir:'cubierto', descubrir:'descubierto',
          abrir:'abierto', morir:'muerto', romper:'roto', decir:'dicho',
          ver:'visto', prever:'previsto', imprimir:'impreso',
          /* và những động từ ĐỀU thì phải để yên */
          mover:'movido', comer:'comido', vivir:'vivido', subir:'subido' },
    fr: { 'écrire':'écrit', 'décrire':'décrit', ouvrir:'ouvert', couvrir:'couvert',
          'découvrir':'découvert', offrir:'offert', souffrir:'souffert',
          mourir:'mort', 'naître':'né', craindre:'craint', joindre:'joint',
          peindre:'peint', 'éteindre':'éteint', 'résoudre':'résolu',
          conclure:'conclu', inclure:'inclus',
          parler:'parlé', finir:'fini', vendre:'vendu', dormir:'dormi' }
  };
  const bad = [];
  for (const id of ['fr', 'es']){
    for (const inf of Object.keys(want[id])){
      const t = M.table(id, inf);
      if (!t){ bad.push(id + ' ' + inf + ': không dựng được bảng'); continue; }
      const got = String(t.part || t.pp || '');
      if (got !== want[id][inf]) bad.push(id + ' ' + inf + ': «' + got + '» đáng lẽ «' + want[id][inf] + '»');
    }
  }
  return bad.length ? bad.slice(0, 5).join(' | ') : true;
});

console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
process.exit(fail ? 1 : 0);
