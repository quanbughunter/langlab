/* ============================================================
   LangLab — HÌNH THÁI TIẾNG PHÁP VÀ TIẾNG TÂY BAN NHA
   ------------------------------------------------------------
   Hai việc, và chỉ hai việc:

     1. table(lang, lemma)  → bảng chia đầy đủ của một động từ,
        để màn «Chia động từ» và mục từ trong từ điển bày ra.
     2. forms(lang, lemma)  → mọi dạng biến đổi của một từ, để dựng
        bảng tra ngược dạng-biến-đổi → từ-gốc.

   CÁCH LÀM: SINH RA chứ không CẮT ĐUÔI.
   Cắt đuôi («allé» bỏ -é ra «all») thì nhanh nhưng đoán bừa: rất
   nhiều từ vô tội bị cắt thành một gốc không tồn tại, và người học
   nhận về một mục từ sai mà không biết là sai. Ở đây làm ngược lại:
   lấy danh sách từ gốc ĐÃ BIẾT (từ vựng của khoá + từ khoá bài đọc),
   sinh ra mọi dạng của chúng, rồi tra ngược. Không có trong bảng thì
   thà trả về rỗng còn hơn đoán sai.

   PHẠM VI: các thì và dạng thật sự dạy ở A1–A2.
     Pháp  — présent · imparfait · futur simple · conditionnel présent ·
             subjonctif présent · impératif · participe passé/présent
     TBN   — presente · pretérito indefinido · imperfecto · futuro ·
             condicional · presente de subjuntivo · imperativo ·
             participio · gerundio

   Bảng bất quy tắc chỉ gồm những động từ thật sự gặp ở hai cấp này.
   Thà ít mà đúng: động từ nào chưa có trong bảng thì chạy theo mẫu
   đều, và nếu mẫu đều không áp được thì bỏ qua, không bịa.

   Nội dung do LangLab tự biên soạn.
   ============================================================ */
(function(){
'use strict';

/* Sáu ngôi, theo đúng thứ tự mọi bảng chia trong tệp này. */
const FR_PRON = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
const ES_PRON = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'];

const zip = (stem, ends) => ends.map(e => stem + e);
const low = s => String(s || '').toLowerCase().trim();

/* ============================================================
   TIẾNG PHÁP
   ============================================================ */

/* Đuôi của ba nhóm đều. Nhóm -ir ở đây là nhóm «finir» (có -iss-),
   không phải nhóm «partir» — nhóm kia nằm trong bảng bất quy tắc. */
const FR_REG = {
  er: {
    pres: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
    imp:  ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
    subj: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
    pp:   'é',  ppr: 'ant',
    futStem: inf => inf                       // parler → parlerai
  },
  ir: {
    pres: ['is', 'is', 'it', 'issons', 'issez', 'issent'],
    imp:  ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'],
    subj: ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'],
    pp:   'i',  ppr: 'issant',
    futStem: inf => inf                       // finir → finirai
  },
  re: {
    pres: ['s', 's', '', 'ons', 'ez', 'ent'],
    imp:  ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
    subj: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
    pp:   'u',  ppr: 'ant',
    futStem: inf => inf.slice(0, -1)          // vendre → vendrai (rụng e)
  }
};

/* Đuôi futur và conditionnel dùng CHUNG một gốc — nhớ một lần là xong hai thì. */
const FR_FUT  = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];
const FR_COND = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];

/* Động từ bất quy tắc. Ghi thẳng cả sáu ngôi cho présent vì chúng lệch
   nhau quá nhiều để suy ra; các thì còn lại chỉ cần GỐC là đủ:
     futStem — gốc của futur và conditionnel
     impStem — gốc của imparfait (luôn lấy từ ngôi nous ở présent)
     subjStem— gốc của subjonctif; mảng hai phần tử nghĩa là ngôi
               nous/vous dùng gốc khác (aller, vouloir, prendre…) */
const FR_IRR = {
  'être':    { pres:['suis','es','est','sommes','êtes','sont'], futStem:'ser', impStem:'ét', subj:['sois','sois','soit','soyons','soyez','soient'], pp:'été', ppr:'étant', aux:'avoir', imper:['sois','soyons','soyez'] },
  'avoir':   { pres:['ai','as','a','avons','avez','ont'], futStem:'aur', impStem:'av', subj:['aie','aies','ait','ayons','ayez','aient'], pp:'eu', ppr:'ayant', aux:'avoir', imper:['aie','ayons','ayez'] },
  'aller':   { pres:['vais','vas','va','allons','allez','vont'], futStem:'ir', impStem:'all', subjStem:['aill','all'], pp:'allé', ppr:'allant', aux:'être', imper:['va','allons','allez'] },
  'faire':   { pres:['fais','fais','fait','faisons','faites','font'], futStem:'fer', impStem:'fais', subjStem:['fass','fass'], pp:'fait', ppr:'faisant', aux:'avoir' },
  'pouvoir': { pres:['peux','peux','peut','pouvons','pouvez','peuvent'], futStem:'pourr', impStem:'pouv', subjStem:['puiss','puiss'], pp:'pu', ppr:'pouvant', aux:'avoir', noImper:true },
  'vouloir': { pres:['veux','veux','veut','voulons','voulez','veulent'], futStem:'voudr', impStem:'voul', subjStem:['veuill','voul'], pp:'voulu', ppr:'voulant', aux:'avoir', imper:['veuille','veuillons','veuillez'] },
  'devoir':  { pres:['dois','dois','doit','devons','devez','doivent'], futStem:'devr', impStem:'dev', subjStem:['doiv','dev'], pp:'dû', ppr:'devant', aux:'avoir' },
  'savoir':  { pres:['sais','sais','sait','savons','savez','savent'], futStem:'saur', impStem:'sav', subjStem:['sach','sach'], pp:'su', ppr:'sachant', aux:'avoir', imper:['sache','sachons','sachez'] },
  'venir':   { pres:['viens','viens','vient','venons','venez','viennent'], futStem:'viendr', impStem:'ven', subjStem:['vienn','ven'], pp:'venu', ppr:'venant', aux:'être' },
  'tenir':   { pres:['tiens','tiens','tient','tenons','tenez','tiennent'], futStem:'tiendr', impStem:'ten', subjStem:['tienn','ten'], pp:'tenu', ppr:'tenant', aux:'avoir' },
  'prendre': { pres:['prends','prends','prend','prenons','prenez','prennent'], futStem:'prendr', impStem:'pren', subjStem:['prenn','pren'], pp:'pris', ppr:'prenant', aux:'avoir' },
  'dire':    { pres:['dis','dis','dit','disons','dites','disent'], futStem:'dir', impStem:'dis', subjStem:['dis','dis'], pp:'dit', ppr:'disant', aux:'avoir' },
  'voir':    { pres:['vois','vois','voit','voyons','voyez','voient'], futStem:'verr', impStem:'voy', subjStem:['voi','voy'], pp:'vu', ppr:'voyant', aux:'avoir' },
  'lire':    { pres:['lis','lis','lit','lisons','lisez','lisent'], futStem:'lir', impStem:'lis', subjStem:['lis','lis'], pp:'lu', ppr:'lisant', aux:'avoir' },
  'écrire':  { pres:['écris','écris','écrit','écrivons','écrivez','écrivent'], futStem:'écrir', impStem:'écriv', subjStem:['écriv','écriv'], pp:'écrit', ppr:'écrivant', aux:'avoir' },
  'mettre':  { pres:['mets','mets','met','mettons','mettez','mettent'], futStem:'mettr', impStem:'mett', subjStem:['mett','mett'], pp:'mis', ppr:'mettant', aux:'avoir' },
  'partir':  { pres:['pars','pars','part','partons','partez','partent'], futStem:'partir', impStem:'part', subjStem:['part','part'], pp:'parti', ppr:'partant', aux:'être' },
  'sortir':  { pres:['sors','sors','sort','sortons','sortez','sortent'], futStem:'sortir', impStem:'sort', subjStem:['sort','sort'], pp:'sorti', ppr:'sortant', aux:'être' },
  'dormir':  { pres:['dors','dors','dort','dormons','dormez','dorment'], futStem:'dormir', impStem:'dorm', subjStem:['dorm','dorm'], pp:'dormi', ppr:'dormant', aux:'avoir' },
  'servir':  { pres:['sers','sers','sert','servons','servez','servent'], futStem:'servir', impStem:'serv', subjStem:['serv','serv'], pp:'servi', ppr:'servant', aux:'avoir' },
  'boire':   { pres:['bois','bois','boit','buvons','buvez','boivent'], futStem:'boir', impStem:'buv', subjStem:['boiv','buv'], pp:'bu', ppr:'buvant', aux:'avoir' },
  'croire':  { pres:['crois','crois','croit','croyons','croyez','croient'], futStem:'croir', impStem:'croy', subjStem:['croi','croy'], pp:'cru', ppr:'croyant', aux:'avoir' },
  'connaître':{ pres:['connais','connais','connaît','connaissons','connaissez','connaissent'], futStem:'connaîtr', impStem:'connaiss', subjStem:['connaiss','connaiss'], pp:'connu', ppr:'connaissant', aux:'avoir' },
  'recevoir':{ pres:['reçois','reçois','reçoit','recevons','recevez','reçoivent'], futStem:'recevr', impStem:'recev', subjStem:['reçoiv','recev'], pp:'reçu', ppr:'recevant', aux:'avoir' },
  'ouvrir':  { pres:['ouvre','ouvres','ouvre','ouvrons','ouvrez','ouvrent'], futStem:'ouvrir', impStem:'ouvr', subjStem:['ouvr','ouvr'], pp:'ouvert', ppr:'ouvrant', aux:'avoir', imper:['ouvre','ouvrons','ouvrez'] },
  'offrir':  { pres:['offre','offres','offre','offrons','offrez','offrent'], futStem:'offrir', impStem:'offr', subjStem:['offr','offr'], pp:'offert', ppr:'offrant', aux:'avoir', imper:['offre','offrons','offrez'] },
  'courir':  { pres:['cours','cours','court','courons','courez','courent'], futStem:'courr', impStem:'cour', subjStem:['cour','cour'], pp:'couru', ppr:'courant', aux:'avoir' },
  'vivre':   { pres:['vis','vis','vit','vivons','vivez','vivent'], futStem:'vivr', impStem:'viv', subjStem:['viv','viv'], pp:'vécu', ppr:'vivant', aux:'avoir' },
  'suivre':  { pres:['suis','suis','suit','suivons','suivez','suivent'], futStem:'suivr', impStem:'suiv', subjStem:['suiv','suiv'], pp:'suivi', ppr:'suivant', aux:'avoir' },
  'rire':    { pres:['ris','ris','rit','rions','riez','rient'], futStem:'rir', impStem:'ri', subjStem:['ri','ri'], pp:'ri', ppr:'riant', aux:'avoir' },
  'attendre':{ pres:['attends','attends','attend','attendons','attendez','attendent'], futStem:'attendr', impStem:'attend', subjStem:['attend','attend'], pp:'attendu', ppr:'attendant', aux:'avoir' },
  'répondre':{ pres:['réponds','réponds','répond','répondons','répondez','répondent'], futStem:'répondr', impStem:'répond', subjStem:['répond','répond'], pp:'répondu', ppr:'répondant', aux:'avoir' },
  'descendre':{ pres:['descends','descends','descend','descendons','descendez','descendent'], futStem:'descendr', impStem:'descend', subjStem:['descend','descend'], pp:'descendu', ppr:'descendant', aux:'être' },
  'comprendre':{ pres:['comprends','comprends','comprend','comprenons','comprenez','comprennent'], futStem:'comprendr', impStem:'compren', subjStem:['comprenn','compren'], pp:'compris', ppr:'comprenant', aux:'avoir' },
  'apprendre':{ pres:['apprends','apprends','apprend','apprenons','apprenez','apprennent'], futStem:'apprendr', impStem:'appren', subjStem:['apprenn','appren'], pp:'appris', ppr:'apprenant', aux:'avoir' },
  'pleuvoir':{ pres:['','','pleut','','',''], futStem:'pleuvr', impStem:'pleuv', subjStem:['pleuv','pleuv'], pp:'plu', ppr:'pleuvant', aux:'avoir', only3s:true, noImper:true },
  'falloir': { pres:['','','faut','','',''], futStem:'faudr', impStem:'fall', subjStem:['faill','faill'], pp:'fallu', ppr:'', aux:'avoir', only3s:true, noImper:true }
};

/* Nhóm động từ đi với ÊTRE ở thì kép. Quá khứ phân từ khi đó phải hợp
   giống số với chủ ngữ: elle est allée, ils sont allés. */
const FR_ETRE = new Set(['aller','venir','partir','arriver','entrer','sortir','monter','descendre',
  'rester','tomber','naître','mourir','devenir','revenir','rentrer','retourner','passer']);

/* Động từ -eler / -eter chia làm hai phe, và KHÔNG có quy tắc nào đoán được
   một động từ thuộc phe nào — phải nhớ. Phe đông thì gấp đôi phụ âm
   (appeler → j'appelle, jeter → je jette); phe dưới đây thì thêm dấu huyền
   (acheter → j'achète). Danh sách ngắn nên ghi thẳng ra. */
const FR_ELER_GRAVE = new Set(['acheter','racheter','geler','dégeler','congeler','surgeler',
  'peler','celer','déceler','modeler','harceler','marteler','ciseler','crocheter','fureter','haleter']);

/* Vài chỗ chính tả của nhóm -er mà nếu bỏ qua thì sinh ra dạng sai:
     -ger  → nous mangeons (giữ e để g còn đọc mềm)
     -cer  → nous commençons (ç để c còn đọc là «x»)
     e_er  → lever → je lève (thêm dấu huyền)
     é_er  → préférer → je préfère
     -eler/-eter → tuỳ động từ: appeler → j'appelle, acheter → j'achète */
function frErStem(inf, personIndex, tense){
  const st = inf.slice(0, -2);
  const soft = [0, 1, 2, 5].indexOf(personIndex) >= 0;      // ngôi có đuôi câm
  if (tense === 'pres' || tense === 'subj'){
    if (soft){
      if (/é[bcdfglmnprstvz]+$/.test(st)) return st.replace(/é([bcdfglmnprstvz]+)$/, 'è$1');
      if (/[^e]e[lt]$/.test(st)){
        return FR_ELER_GRAVE.has(inf)
          ? st.replace(/e([lt])$/, 'è$1')                    // achet → achèt
          : st.replace(/e([lt])$/, 'e$1$1');                 // appel → appell
      }
      if (/[^e]e[bcdfgmnprsvz]$/.test(st)) return st.replace(/e([bcdfgmnprsvz])$/, 'è$1');
    }
  }
  if (tense === 'presNous' || tense === 'imparf'){
    if (/g$/.test(st)) return st + 'e';
    if (/c$/.test(st)) return st.slice(0, -1) + 'ç';
  }
  return st;
}

function frGroup(inf){
  if (/er$/.test(inf)) return 'er';
  if (/re$/.test(inf)) return 're';
  if (/ir$/.test(inf)) return 'ir';
  return null;
}

/** Bảng chia đầy đủ của một động từ tiếng Pháp. null nếu không nhận ra. */
function frTable(inf){
  inf = low(inf);
  const irr = FR_IRR[inf];
  const g   = frGroup(inf);
  if (!irr && !g) return null;

  let pres, imparf, subj, pp, ppr, futStem, imper;

  if (irr){
    pres    = irr.pres.slice();
    imparf  = zip(irr.impStem, FR_REG.er.imp);
    subj    = irr.subj ? irr.subj.slice()
            : irr.subjStem ? [0,1,2,3,4,5].map(i => (i === 3 || i === 4 ? irr.subjStem[1] : irr.subjStem[0])
                + FR_REG.er.subj[i]) : [];
    pp      = irr.pp; ppr = irr.ppr; futStem = irr.futStem;
    imper   = irr.imper || (irr.noImper ? null : [pres[1], pres[3], pres[4]]);
    if (irr.only3s){ imparf = ['','', imparf[2], '','','']; subj = ['','', subj[2], '','','']; }
  } else {
    const R = FR_REG[g];
    if (g === 'er'){
      pres = [0,1,2,3,4,5].map(i =>
        frErStem(inf, i, i === 3 ? 'presNous' : 'pres') + R.pres[i]);
      imparf = [0,1,2,3,4,5].map(i =>
        (i === 3 || i === 4 ? inf.slice(0, -2) : frErStem(inf, i, 'imparf')) + R.imp[i]);
      subj = [0,1,2,3,4,5].map(i =>
        (i === 3 || i === 4 ? inf.slice(0, -2) : frErStem(inf, i, 'subj')) + R.subj[i]);
    } else {
      const st = inf.slice(0, -2);
      pres = zip(st, R.pres); imparf = zip(st, R.imp); subj = zip(st, R.subj);
    }
    const st = inf.slice(0, -2);
    pp = st + R.pp; ppr = (g === 'ir' ? st + 'issant' : st + 'ant');
    futStem = R.futStem(inf);
    imper = [g === 'er' ? pres[2] : pres[1], pres[3], pres[4]];
  }

  const aux = irr ? irr.aux : (FR_ETRE.has(inf) ? 'être' : 'avoir');
  return {
    lang:'fr', inf, group: irr ? 'bất quy tắc' : ('nhóm -' + g), aux,
    pron: FR_PRON,
    tenses: [
      { id:'pres',  vi:'Hiện tại',            nat:'présent',              forms: pres },
      { id:'pc',    vi:'Quá khứ kép',         nat:'passé composé',        forms: frCompound(aux, pp) },
      { id:'imp',   vi:'Quá khứ chưa hoàn thành', nat:'imparfait',        forms: imparf },
      { id:'fut',   vi:'Tương lai đơn',       nat:'futur simple',         forms: zip(futStem, FR_FUT) },
      { id:'cond',  vi:'Điều kiện',           nat:'conditionnel présent', forms: zip(futStem, FR_COND) },
      { id:'subj',  vi:'Giả định',            nat:'subjonctif présent',   forms: subj, lead:'que ' }
    ],
    imper, imperPron: ['(tu)', '(nous)', '(vous)'],
    pp, ppr
  };
}

/* Thì kép: trợ động từ chia ở hiện tại + quá khứ phân từ. */
function frCompound(aux, pp){
  const A = aux === 'être' ? ['suis','es','est','sommes','êtes','sont']
                           : ['ai','as','a','avons','avez','ont'];
  /* Chỉ trả về phần ĐỘNG TỪ, không kèm đại từ — đại từ đã nằm ở đầu cột
     của bảng chia rồi, viết lại lần nữa thành «je j'ai mangé». */
  return A.map((a, i) => {
    if (!a) return '';
    /* Với être, quá khứ phân từ hợp số với chủ ngữ. Bảng chia quy ước coi
       «vous» là số nhiều, nên nous · vous · ils đều lấy dạng số nhiều. */
    const e = (aux === 'être')
      ? (i >= 3 ? pp + 's' : pp)
      : pp;
    return a + ' ' + e;
  });
}

/* ---- danh từ và tính từ tiếng Pháp ---- */
/* Tính từ kết thúc bằng -s: phần lớn chỉ thêm -e (français → française),
   nhưng một nhúm thì gấp đôi chữ s (gros → grosse). Không đoán được, phải nhớ. */
const FR_S_DOUBLE = new Set(['bas','gros','épais','gras','las','métis','exprès']);
/* Tính từ -et: phần lớn gấp đôi t (muet → muette), nhóm dưới đây lấy dấu huyền. */
const FR_ET_GRAVE = new Set(['complet','incomplet','inquiet','secret','discret','indiscret',
  'concret','replet','désuet']);

const FR_ADJ_F = [
  [/^beau$/, 'belle'], [/^nouveau$/, 'nouvelle'], [/^vieux$/, 'vieille'],
  [/^fou$/, 'folle'], [/^mou$/, 'molle'],
  [/^blanc$/, 'blanche'], [/^franc$/, 'franche'], [/^long$/, 'longue'],
  [/^frais$/, 'fraîche'], [/^doux$/, 'douce'], [/^faux$/, 'fausse'],
  [/^roux$/, 'rousse'], [/^gentil$/, 'gentille'], [/^nul$/, 'nulle'],
  [/^sec$/, 'sèche'], [/^favori$/, 'favorite'], [/^public$/, 'publique'],
  [/^turc$/, 'turque'], [/^grec$/, 'grecque'],
  [/eux$/, m => m.replace(/eux$/, 'euse')],
  [/teur$/, m => m.replace(/teur$/, 'trice')],
  [/eur$/, m => m.replace(/eur$/, 'euse')],
  [/f$/,   m => m.replace(/f$/, 've')],
  [/er$/,  m => m.replace(/er$/, 'ère')],
  [/(eil|el)$/, m => m + 'le'],                 // pareil → pareille · cruel → cruelle
  [/(on|en)$/,  m => m + 'ne'],                 // bon → bonne · ancien → ancienne
  [/et$/,  m => FR_ET_GRAVE.has(m) ? m.replace(/et$/, 'ète') : m + 'te'],
  [/s$/,   m => FR_S_DOUBLE.has(m) ? m + 'se' : m + 'e']
];

function frFem(w){
  w = low(w);
  for (const [re, to] of FR_ADJ_F){
    if (re.test(w)) return typeof to === 'function' ? to(w) : to;
  }
  return /e$/.test(w) ? w : w + 'e';
}
function frPlural(w){
  w = low(w);
  if (/(s|x|z)$/.test(w)) return w;
  if (/(eau|eu)$/.test(w)) return w + 'x';
  if (/al$/.test(w)) return w.replace(/al$/, 'aux');
  return w + 's';
}

/* ============================================================
   TIẾNG TÂY BAN NHA
   ============================================================ */

const ES_REG = {
  ar: {
    pres: ['o','as','a','amos','áis','an'],
    pret: ['é','aste','ó','amos','asteis','aron'],
    imp:  ['aba','abas','aba','ábamos','abais','aban'],
    subj: ['e','es','e','emos','éis','en'],
    part: 'ado', ger: 'ando'
  },
  er: {
    pres: ['o','es','e','emos','éis','en'],
    pret: ['í','iste','ió','imos','isteis','ieron'],
    imp:  ['ía','ías','ía','íamos','íais','ían'],
    subj: ['a','as','a','amos','áis','an'],
    part: 'ido', ger: 'iendo'
  },
  ir: {
    pres: ['o','es','e','imos','ís','en'],
    pret: ['í','iste','ió','imos','isteis','ieron'],
    imp:  ['ía','ías','ía','íamos','íais','ían'],
    subj: ['a','as','a','amos','áis','an'],
    part: 'ido', ger: 'iendo'
  }
};
const ES_FUT  = ['é','ás','á','emos','éis','án'];
const ES_COND = ['ía','ías','ía','íamos','íais','ían'];

/* Động từ đổi gốc. Ba kiểu, ghi bằng cặp [tìm, thay].
   Đổi gốc chỉ xảy ra ở ngôi có TRỌNG ÂM rơi vào gốc — tức là 1s, 2s,
   3s và 3p; ngôi nosotros và vosotros thì giữ nguyên. Đây đúng là chỗ
   người học sai nhiều nhất, nên tách hẳn ra thành quy tắc. */
const ES_STEM = {
  'e>ie': [/e([^e]*)$/, 'ie$1'],
  'o>ue': [/o([^o]*)$/, 'ue$1'],
  'e>i':  [/e([^e]*)$/, 'i$1'],
  'u>ue': [/u([^u]*)$/, 'ue$1']
};
const ES_STEMV = {
  'pensar':'e>ie','empezar':'e>ie','cerrar':'e>ie','despertar':'e>ie','sentarse':'e>ie',
  'querer':'e>ie','entender':'e>ie','perder':'e>ie','encender':'e>ie',
  'preferir':'e>ie','sentir':'e>ie','sentirse':'e>ie','divertirse':'e>ie','mentir':'e>ie',
  'contar':'o>ue','encontrar':'o>ue','recordar':'o>ue','costar':'o>ue','acostarse':'o>ue',
  'probar':'o>ue','probarse':'o>ue','volar':'o>ue','soñar':'o>ue','almorzar':'o>ue',
  'poder':'o>ue','volver':'o>ue','llover':'o>ue','doler':'o>ue','mover':'o>ue',
  'dormir':'o>ue','morir':'o>ue',
  'pedir':'e>i','servir':'e>i','repetir':'e>i','seguir':'e>i','vestirse':'e>i','medir':'e>i',
  'jugar':'u>ue'
};

const ES_IRR = {
  'ser':   { pres:['soy','eres','es','somos','sois','son'], pret:['fui','fuiste','fue','fuimos','fuisteis','fueron'], imp:['era','eras','era','éramos','erais','eran'], subj:['sea','seas','sea','seamos','seáis','sean'], part:'sido', ger:'siendo', imper:['sé','sea','sed','sean'] },
  'estar': { pres:['estoy','estás','está','estamos','estáis','están'], pret:['estuve','estuviste','estuvo','estuvimos','estuvisteis','estuvieron'], subj:['esté','estés','esté','estemos','estéis','estén'], part:'estado', ger:'estando' },
  'ir':    { pres:['voy','vas','va','vamos','vais','van'], pret:['fui','fuiste','fue','fuimos','fuisteis','fueron'], imp:['iba','ibas','iba','íbamos','ibais','iban'], subj:['vaya','vayas','vaya','vayamos','vayáis','vayan'], part:'ido', ger:'yendo', imper:['ve','vaya','id','vayan'] },
  'haber': { pres:['he','has','ha','hemos','habéis','han'], pret:['hube','hubiste','hubo','hubimos','hubisteis','hubieron'], subj:['haya','hayas','haya','hayamos','hayáis','hayan'], futStem:'habr', part:'habido', ger:'habiendo', noImper:true },
  'tener': { pres:['tengo','tienes','tiene','tenemos','tenéis','tienen'], pret:['tuve','tuviste','tuvo','tuvimos','tuvisteis','tuvieron'], subj:['tenga','tengas','tenga','tengamos','tengáis','tengan'], futStem:'tendr', part:'tenido', ger:'teniendo', imper:['ten','tenga','tened','tengan'] },
  'hacer': { pres:['hago','haces','hace','hacemos','hacéis','hacen'], pret:['hice','hiciste','hizo','hicimos','hicisteis','hicieron'], subj:['haga','hagas','haga','hagamos','hagáis','hagan'], futStem:'har', part:'hecho', ger:'haciendo', imper:['haz','haga','haced','hagan'] },
  'decir': { pres:['digo','dices','dice','decimos','decís','dicen'], pret:['dije','dijiste','dijo','dijimos','dijisteis','dijeron'], subj:['diga','digas','diga','digamos','digáis','digan'], futStem:'dir', part:'dicho', ger:'diciendo', imper:['di','diga','decid','digan'] },
  'poner': { pres:['pongo','pones','pone','ponemos','ponéis','ponen'], pret:['puse','pusiste','puso','pusimos','pusisteis','pusieron'], subj:['ponga','pongas','ponga','pongamos','pongáis','pongan'], futStem:'pondr', part:'puesto', ger:'poniendo', imper:['pon','ponga','poned','pongan'] },
  'ponerse':{ pres:['me pongo','te pones','se pone','nos ponemos','os ponéis','se ponen'], pret:['me puse','te pusiste','se puso','nos pusimos','os pusisteis','se pusieron'], subj:['me ponga','te pongas','se ponga','nos pongamos','os pongáis','se pongan'], futStem:null, part:'puesto', ger:'poniéndose', noImper:true },
  'salir': { pres:['salgo','sales','sale','salimos','salís','salen'], subj:['salga','salgas','salga','salgamos','salgáis','salgan'], futStem:'saldr', part:'salido', ger:'saliendo', imper:['sal','salga','salid','salgan'] },
  'venir': { pres:['vengo','vienes','viene','venimos','venís','vienen'], pret:['vine','viniste','vino','vinimos','vinisteis','vinieron'], subj:['venga','vengas','venga','vengamos','vengáis','vengan'], futStem:'vendr', part:'venido', ger:'viniendo', imper:['ven','venga','venid','vengan'] },
  'poder': { pres:['puedo','puedes','puede','podemos','podéis','pueden'], pret:['pude','pudiste','pudo','pudimos','pudisteis','pudieron'], subj:['pueda','puedas','pueda','podamos','podáis','puedan'], futStem:'podr', part:'podido', ger:'pudiendo', noImper:true },
  'querer':{ pres:['quiero','quieres','quiere','queremos','queréis','quieren'], pret:['quise','quisiste','quiso','quisimos','quisisteis','quisieron'], subj:['quiera','quieras','quiera','queramos','queráis','quieran'], futStem:'querr', part:'querido', ger:'queriendo' },
  'saber': { pres:['sé','sabes','sabe','sabemos','sabéis','saben'], pret:['supe','supiste','supo','supimos','supisteis','supieron'], subj:['sepa','sepas','sepa','sepamos','sepáis','sepan'], futStem:'sabr', part:'sabido', ger:'sabiendo' },
  'ver':   { pres:['veo','ves','ve','vemos','veis','ven'], pret:['vi','viste','vio','vimos','visteis','vieron'], imp:['veía','veías','veía','veíamos','veíais','veían'], subj:['vea','veas','vea','veamos','veáis','vean'], part:'visto', ger:'viendo' },
  'dar':   { pres:['doy','das','da','damos','dais','dan'], pret:['di','diste','dio','dimos','disteis','dieron'], subj:['dé','des','dé','demos','deis','den'], part:'dado', ger:'dando' },
  'traer': { pres:['traigo','traes','trae','traemos','traéis','traen'], pret:['traje','trajiste','trajo','trajimos','trajisteis','trajeron'], subj:['traiga','traigas','traiga','traigamos','traigáis','traigan'], part:'traído', ger:'trayendo' },
  'conocer':{ pres:['conozco','conoces','conoce','conocemos','conocéis','conocen'], subj:['conozca','conozcas','conozca','conozcamos','conozcáis','conozcan'], part:'conocido', ger:'conociendo' },
  'leer':  { pres:['leo','lees','lee','leemos','leéis','leen'], pret:['leí','leíste','leyó','leímos','leísteis','leyeron'], subj:['lea','leas','lea','leamos','leáis','lean'], part:'leído', ger:'leyendo' },
  'oír':   { pres:['oigo','oyes','oye','oímos','oís','oyen'], pret:['oí','oíste','oyó','oímos','oísteis','oyeron'], subj:['oiga','oigas','oiga','oigamos','oigáis','oigan'], part:'oído', ger:'oyendo', imper:['oye','oiga','oíd','oigan'] },
  'escribir':{ pres:['escribo','escribes','escribe','escribimos','escribís','escriben'], subj:['escriba','escribas','escriba','escribamos','escribáis','escriban'], part:'escrito', ger:'escribiendo' },
  'volver':{ pres:['vuelvo','vuelves','vuelve','volvemos','volvéis','vuelven'], subj:['vuelva','vuelvas','vuelva','volvamos','volváis','vuelvan'], part:'vuelto', ger:'volviendo' },
  'abrir': { pres:['abro','abres','abre','abrimos','abrís','abren'], subj:['abra','abras','abra','abramos','abráis','abran'], part:'abierto', ger:'abriendo' },
  'romper':{ pres:['rompo','rompes','rompe','rompemos','rompéis','rompen'], subj:['rompa','rompas','rompa','rompamos','rompáis','rompan'], part:'roto', ger:'rompiendo' },
  'llover':{ pres:['','','llueve','','',''], subj:['','','llueva','','',''], part:'llovido', ger:'lloviendo', only3s:true, noImper:true },
  'nevar': { pres:['','','nieva','','',''], subj:['','','nieve','','',''], part:'nevado', ger:'nevando', only3s:true, noImper:true }
};

function esGroup(inf){
  if (/ar$/.test(inf)) return 'ar';
  if (/er$/.test(inf)) return 'er';
  if (/ir$/.test(inf)) return 'ir';
  return null;
}

/** Bảng chia đầy đủ của một động từ tiếng Tây Ban Nha. null nếu không nhận ra. */
function esTable(inf){
  inf = low(inf);
  const refl = /se$/.test(inf) && inf.length > 4;
  const base = refl ? inf.slice(0, -2) : inf;      // acostarse → acostar
  const irr  = ES_IRR[inf] || (refl ? ES_IRR[base] : null);
  const g    = esGroup(base);
  if (!irr && !g) return null;

  const R = g ? ES_REG[g] : null;
  const st = base.slice(0, -2);
  const change = ES_STEMV[inf] || (refl ? ES_STEMV[base] : null);

  const stemAt = i => {
    if (!change || i === 3 || i === 4) return st;   // nosotros/vosotros giữ nguyên
    const [re, to] = ES_STEM[change];
    return st.replace(re, to);
  };

  let pres, pret, imp, subj, part, ger, futStem;
  if (irr){
    pres = irr.pres.slice();
    pret = irr.pret ? irr.pret.slice() : zip(st, R.pret);
    imp  = irr.imp  ? irr.imp.slice()  : zip(st, R.imp);
    subj = irr.subj.slice();
    part = irr.part; ger = irr.ger;
    futStem = irr.futStem !== undefined ? irr.futStem : base;
    if (irr.only3s){ pret = ['','', (pret[2] || ''), '','','']; imp = ['','', (imp[2] || ''), '','','']; }
  } else {
    pres = [0,1,2,3,4,5].map(i => stemAt(i) + R.pres[i]);
    /* -ir đổi gốc còn đổi cả ở ngôi thứ ba của quá khứ đơn và ở gerundio:
       pedir → pidió, pidieron, pidiendo. */
    const irChange = change && g === 'ir';
    pret = [0,1,2,3,4,5].map(i => {
      if (irChange && (i === 2 || i === 5)){
        const [re] = ES_STEM['e>i'];
        const s2 = change === 'o>ue' ? st.replace(/o([^o]*)$/, 'u$1') : st.replace(re, 'i$1');
        return s2 + R.pret[i];
      }
      return st + R.pret[i];
    });
    imp  = zip(st, R.imp);
    subj = [0,1,2,3,4,5].map(i => {
      if (g === 'ir' && change && (i === 3 || i === 4)){
        const s2 = change === 'o>ue' ? st.replace(/o([^o]*)$/, 'u$1') : st.replace(/e([^e]*)$/, 'i$1');
        return s2 + R.subj[i];
      }
      return stemAt(i) + R.subj[i];
    });
    part = st + R.part;
    ger  = irChange
      ? (change === 'o>ue' ? st.replace(/o([^o]*)$/, 'u$1') : st.replace(/e([^e]*)$/, 'i$1')) + R.ger
      : st + R.ger;
    futStem = base;
  }

  const pre = refl ? ['me ','te ','se ','nos ','os ','se '] : ['','','','','',''];
  const wrap = arr => arr.map((f, i) => f ? (irr && /^(me|te|se|nos|os) /.test(f) ? f : pre[i] + f) : '');

  const imper = irr && irr.imper ? irr.imper
    : irr && irr.noImper ? null
    : g ? [stemAt(2) + (g === 'ar' ? 'a' : 'e'), subjOf(2), st + (g === 'ar' ? 'ad' : g === 'er' ? 'ed' : 'id'), subjOf(5)]
    : null;
  function subjOf(i){ return (irr ? irr.subj[i] : stemAt(i) + R.subj[i]); }

  return {
    lang:'es', inf,
    group: irr ? 'bất quy tắc' : (change ? 'đổi gốc ' + change.replace('>', ' → ') : 'nhóm -' + g),
    refl,
    pron: ES_PRON,
    tenses: [
      { id:'pres', vi:'Hiện tại',          nat:'presente',              forms: wrap(pres) },
      { id:'perf', vi:'Hiện tại hoàn thành', nat:'pretérito perfecto',  forms: esCompound(part, refl) },
      { id:'pret', vi:'Quá khứ đơn',       nat:'pretérito indefinido',  forms: wrap(pret) },
      { id:'imp',  vi:'Quá khứ chưa hoàn thành', nat:'imperfecto',      forms: wrap(imp) },
      { id:'fut',  vi:'Tương lai',         nat:'futuro simple',         forms: futStem ? zip(futStem, ES_FUT) : [] },
      { id:'cond', vi:'Điều kiện',         nat:'condicional',           forms: futStem ? zip(futStem, ES_COND) : [] },
      { id:'subj', vi:'Giả định',          nat:'presente de subjuntivo', forms: wrap(subj), lead:'que ' }
    ],
    imper, imperPron: ['(tú)', '(usted)', '(vosotros)', '(ustedes)'],
    part, ger
  };
}

function esCompound(part, refl){
  const H = ['he','has','ha','hemos','habéis','han'];
  const pre = refl ? ['me ','te ','se ','nos ','os ','se '] : ['','','','','',''];
  return H.map((h, i) => pre[i] + h + ' ' + part);
}

/* ---- danh từ và tính từ tiếng Tây Ban Nha ---- */
function esFem(w){
  w = low(w);
  if (/o$/.test(w))   return w.replace(/o$/, 'a');
  if (/or$/.test(w))  return w + 'a';
  if (/és$/.test(w))  return w.replace(/és$/, 'esa');
  if (/ón$/.test(w))  return w.replace(/ón$/, 'ona');
  return w;
}
function esPlural(w){
  w = low(w);
  if (/[aeiouáéíóú]$/.test(w)) return w + 's';
  if (/z$/.test(w))  return w.replace(/z$/, 'ces');
  /* Thêm -es thì trọng âm lùi một nhịp, nên dấu sắc ở âm cuối rụng đi:
     canción → canciones · alemán → alemanes · inglés → ingleses */
  const noAcc = w.replace(/ón$/, 'on').replace(/án$/, 'an').replace(/és$/, 'es').replace(/ín$/, 'in');
  return noAcc + 'es';
}

/* ============================================================
   SINH MỌI DẠNG CỦA MỘT TỪ — để dựng bảng tra ngược
   ============================================================ */

/* Bỏ mạo từ và tiểu từ dính trước từ khi dựng chỉ mục.
   «le livre», «l’étagère», «un peu de», «el agua» đều phải quy về từ trần. */
const FR_LEAD = /^(le |la |les |l’|l'|un |une |des |du |de la |au |aux |à la |se |s’|s')/;
const ES_LEAD = /^(el |la |los |las |un |una |unos |unas |al |del )/;

function stripLead(lang, w){
  const s = low(w).replace(/\s+/g, ' ');
  const re = lang === 'fr' ? FR_LEAD : ES_LEAD;
  return s.replace(re, '').trim();
}

/** Mọi dạng biến đổi của một mục từ. Trả về mảng chuỗi đã hạ chữ thường. */
function forms(lang, word, pos){
  const w = stripLead(lang, word);
  if (!w) return [];
  const out = new Set([w, low(word)]);
  const p = String(pos || '');

  const isVerb = /động từ/.test(p) || (lang === 'fr' ? /(er|ir|re)$/.test(w) && !/danh từ|tính từ|trạng từ/.test(p)
                                                     : /(ar|er|ir|arse|erse|irse)$/.test(w) && !/danh từ|tính từ|trạng từ/.test(p));

  if (isVerb){
    const t = lang === 'fr' ? frTable(w) : esTable(w);
    if (t){
      t.tenses.forEach(x => x.forms.forEach(f => { if (f) f.split(/\s+/).forEach(k => out.add(low(k))); }));
      (t.imper || []).forEach(f => { if (f) out.add(low(f)); });
      if (t.pp)   out.add(low(t.pp));
      if (t.ppr)  out.add(low(t.ppr));
      if (t.part) out.add(low(t.part));
      if (t.ger)  out.add(low(t.ger));
      /* Quá khứ phân từ dùng như tính từ thì còn hợp giống số. */
      const base = t.pp || t.part;
      if (base){
        if (lang === 'fr'){ out.add(frFem(base)); out.add(frPlural(base)); out.add(frPlural(frFem(base))); }
        else { out.add(esFem(base)); out.add(esPlural(base)); out.add(esPlural(esFem(base))); }
      }
    }
  }

  if (/danh từ|tính từ/.test(p) || !isVerb){
    if (lang === 'fr'){
      out.add(frPlural(w));
      if (/tính từ/.test(p)){ const f = frFem(w); out.add(f); out.add(frPlural(f)); out.add(frPlural(w)); }
    } else {
      out.add(esPlural(w));
      if (/tính từ/.test(p)){ const f = esFem(w); out.add(f); out.add(esPlural(f)); }
    }
  }

  out.delete('');
  return Array.from(out);
}

/** Bảng chia — dùng chung cho hai tiếng. */
function table(lang, inf){
  return lang === 'fr' ? frTable(inf) : lang === 'es' ? esTable(inf) : null;
}

/** Có phải một động từ mà ta chia được không? */
function isVerbForm(lang, w){
  return !!table(lang, stripLead(lang, w));
}

const API = { table, forms, stripLead, frFem, frPlural, esFem, esPlural,
              FR_PRON, ES_PRON, isVerbForm };

if (typeof window !== 'undefined') window.LAT_MORPH = API;
if (typeof module !== 'undefined' && module.exports) module.exports = API;
})();
