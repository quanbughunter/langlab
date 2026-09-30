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

/* ---------------- RÚT ĐUÔI TRƯỚC DANH TỪ (TIẾNG TÂY BAN NHA) ----------------
   Một nhúm tính từ và từ hạn định rụng đuôi khi đứng trước danh từ giống đực
   số ít: bueno → buen día, primero → primer piso, grande → gran libro.
   Dạng rút này xuất hiện dày đặc trong câu ví dụ mà tra thì không ra, vì nó
   không phải dạng chia nào cả. Sinh thẳng từ dạng đầy đủ. */
const ES_APOC = { 'bueno':'buen', 'malo':'mal', 'primero':'primer', 'tercero':'tercer',
  'alguno':'algún', 'ninguno':'ningún', 'grande':'gran', 'cualquiera':'cualquier',
  'santo':'san' };

/* Mức tuyệt đối -ísimo: bueno → buenísimo, generoso → generosísimo,
   mucho → muchísimo. Dùng rất nhiều trong nói thường mà không phải dạng chia
   nào, nên phải sinh riêng. Chính tả: c → qu, g → gu, z → c để giữ âm. */
function esSuper(w){
  let st = low(w).replace(/[oaeó]$/, '');
  if (!st) return null;
  if (/c$/.test(st))      st = st.slice(0, -1) + 'qu';
  else if (/g$/.test(st)) st = st + 'u';
  else if (/z$/.test(st)) st = st.slice(0, -1) + 'c';
  return st + 'ísimo';
}

/* ---------------- ĐẠI TỪ DÍNH SAU ĐỘNG TỪ (TIẾNG TÂY BAN NHA) ----------------
   Tiếng Tây Ban Nha dán đại từ vào sau nguyên mẫu, gerundio và mệnh lệnh:
   quedarme, irse, llamarte, ayudarme, devuélvemelo, dígame. Với người học thì
   đó vẫn là «quedar», «ir», «devolver» — nên bấm vào phải ra đúng động từ ấy.
   Dán hai đại từ thì trọng âm phải đánh dấu: devuelve → devuélvemelo, nên bóc
   xong còn phải thử bỏ dấu nữa. */
const ES_CLIT = ['melo','mela','melos','melas','telo','tela','telos','telas',
  'selo','sela','selos','selas','noslo','nosla','oslo','osla',
  'me','te','se','nos','os','lo','la','le','los','las','les'];
const ES_UNACC = s => s.replace(/[áéíóú]/g, c => 'aeiou'['áéíóú'.indexOf(c)]);

/** Mọi gốc có thể có sau khi bóc đại từ dính đuôi. Không tra từ điển ở đây —
    chỉ trả ứng viên, để chỗ gọi tự đối chiếu với danh sách dạng thật. */
function esUnclitic(w){
  const out = [];
  const peel = (s, depth) => {
    if (depth > 2) return;
    for (const c of ES_CLIT){
      /* Gốc chỉ cần hai chữ là đủ: «irse» → ir, «dame» → da. Ngưỡng cũ đòi
         ba chữ nên bỏ sót đúng những động từ ngắn hay gặp nhất. */
      if (s.length < c.length + 2 || s.slice(-c.length) !== c) continue;
      const base = s.slice(0, s.length - c.length);
      out.push(base, ES_UNACC(base));
      /* Ngược lại cũng có: «dele» ← dé + le, dấu sắc bị đại từ làm mất chỗ. */
      const m = base.match(/([aeiou])([^aeiouáéíóú]*)$/);
      if (m) out.push(base.slice(0, base.length - m[0].length)
        + 'áéíóú'['aeiou'.indexOf(m[1])] + m[2]);
      /* «se» của mệnh lệnh ngôi nosotros rụng chữ s: vámonos ← vamos + nos. */
      if (c === 'nos') out.push(base + 's', ES_UNACC(base) + 's');
      peel(base, depth + 1);
    }
  };
  peel(String(w || '').toLowerCase(), 1);
  return out.filter((x, i, a) => x && a.indexOf(x) === i);
}

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
  'falloir': { pres:['','','faut','','',''], futStem:'faudr', impStem:'fall', subjStem:['faill','faill'], pp:'fallu', ppr:'', aux:'avoir', only3s:true, noImper:true },

  /* ---- Bổ sung sau khi đo độ phủ. Trước đây những động từ này không có bảng
     riêng nên bị áp khuôn đều, và khuôn đều sinh ra dạng KHÔNG TỒN TẠI mà
     trông rất thật: valoir → «valois, valoit, valoissons» (đúng là vaux, vaut,
     valons), mourir → «mouris, mourissons» (đúng là meurs, mourons, meurent),
     envoyer → «envoye, envoyent» (đúng là envoie, envoient).
     Bảng chia bịa còn tệ hơn không có bảng, nên phải ghi thẳng ra. ---- */
  'sentir':  { pres:['sens','sens','sent','sentons','sentez','sentent'], futStem:'sentir', impStem:'sent', subjStem:['sent','sent'], pp:'senti', ppr:'sentant', aux:'avoir' },
  'mentir':  { pres:['mens','mens','ment','mentons','mentez','mentent'], futStem:'mentir', impStem:'ment', subjStem:['ment','ment'], pp:'menti', ppr:'mentant', aux:'avoir' },
  'plaire':  { pres:['plais','plais','plaît','plaisons','plaisez','plaisent'], futStem:'plair', impStem:'plais', subjStem:['plais','plais'], pp:'plu', ppr:'plaisant', aux:'avoir' },
  'taire':   { pres:['tais','tais','tait','taisons','taisez','taisent'], futStem:'tair', impStem:'tais', subjStem:['tais','tais'], pp:'tu', ppr:'taisant', aux:'avoir' },
  'valoir':  { pres:['vaux','vaux','vaut','valons','valez','valent'], futStem:'vaudr', impStem:'val', subjStem:['vaill','val'], pp:'valu', ppr:'valant', aux:'avoir', noImper:true },
  'mourir':  { pres:['meurs','meurs','meurt','mourons','mourez','meurent'], futStem:'mourr', impStem:'mour', subjStem:['meur','mour'], pp:'mort', ppr:'mourant', aux:'être' },
  'naître':  { pres:['nais','nais','naît','naissons','naissez','naissent'], futStem:'naîtr', impStem:'naiss', subjStem:['naiss','naiss'], pp:'né', ppr:'naissant', aux:'être' },
  'suffire': { pres:['suffis','suffis','suffit','suffisons','suffisez','suffisent'], futStem:'suffir', impStem:'suffis', subjStem:['suffis','suffis'], pp:'suffi', ppr:'suffisant', aux:'avoir', noImper:true },
  'conduire':{ pres:['conduis','conduis','conduit','conduisons','conduisez','conduisent'], futStem:'conduir', impStem:'conduis', subjStem:['conduis','conduis'], pp:'conduit', ppr:'conduisant', aux:'avoir' },
  'cuire':   { pres:['cuis','cuis','cuit','cuisons','cuisez','cuisent'], futStem:'cuir', impStem:'cuis', subjStem:['cuis','cuis'], pp:'cuit', ppr:'cuisant', aux:'avoir' },
  'craindre':{ pres:['crains','crains','craint','craignons','craignez','craignent'], futStem:'craindr', impStem:'craign', subjStem:['craign','craign'], pp:'craint', ppr:'craignant', aux:'avoir' },
  'peindre': { pres:['peins','peins','peint','peignons','peignez','peignent'], futStem:'peindr', impStem:'peign', subjStem:['peign','peign'], pp:'peint', ppr:'peignant', aux:'avoir' },
  'joindre': { pres:['joins','joins','joint','joignons','joignez','joignent'], futStem:'joindr', impStem:'joign', subjStem:['joign','joign'], pp:'joint', ppr:'joignant', aux:'avoir' },
  'battre':  { pres:['bats','bats','bat','battons','battez','battent'], futStem:'battr', impStem:'batt', subjStem:['batt','batt'], pp:'battu', ppr:'battant', aux:'avoir' },
  'rompre':  { pres:['romps','romps','rompt','rompons','rompez','rompent'], futStem:'rompr', impStem:'romp', subjStem:['romp','romp'], pp:'rompu', ppr:'rompant', aux:'avoir' },
  'vaincre': { pres:['vaincs','vaincs','vainc','vainquons','vainquez','vainquent'], futStem:'vaincr', impStem:'vainqu', subjStem:['vainqu','vainqu'], pp:'vaincu', ppr:'vainquant', aux:'avoir' },
  'conclure':{ pres:['conclus','conclus','conclut','concluons','concluez','concluent'], futStem:'conclur', impStem:'conclu', subjStem:['conclu','conclu'], pp:'conclu', ppr:'concluant', aux:'avoir' },
  'asseoir': { pres:['assieds','assieds','assied','asseyons','asseyez','asseyent'], futStem:'assiér', impStem:'assey', subjStem:['assey','assey'], pp:'assis', ppr:'asseyant', aux:'avoir' },
  'envoyer': { pres:['envoie','envoies','envoie','envoyons','envoyez','envoient'], futStem:'enverr', impStem:'envoy', subjStem:['envoi','envoy'], pp:'envoyé', ppr:'envoyant', aux:'avoir', imper:['envoie','envoyons','envoyez'] },
  'cueillir':{ pres:['cueille','cueilles','cueille','cueillons','cueillez','cueillent'], futStem:'cueiller', impStem:'cueill', subjStem:['cueill','cueill'], pp:'cueilli', ppr:'cueillant', aux:'avoir', imper:['cueille','cueillons','cueillez'] },
  'prévoir': { pres:['prévois','prévois','prévoit','prévoyons','prévoyez','prévoient'], futStem:'prévoir', impStem:'prévoy', subjStem:['prévoi','prévoy'], pp:'prévu', ppr:'prévoyant', aux:'avoir' },
  'plaindre':{ pres:['plains','plains','plaint','plaignons','plaignez','plaignent'], futStem:'plaindr', impStem:'plaign', subjStem:['plaign','plaign'], pp:'plaint', ppr:'plaignant', aux:'avoir' },
  'résoudre':{ pres:['résous','résous','résout','résolvons','résolvez','résolvent'], futStem:'résoudr', impStem:'résolv', subjStem:['résolv','résolv'], pp:'résolu', ppr:'résolvant', aux:'avoir' },
  'accueillir':{ pres:['accueille','accueilles','accueille','accueillons','accueillez','accueillent'], futStem:'accueiller', impStem:'accueill', subjStem:['accueill','accueill'], pp:'accueilli', ppr:'accueillant', aux:'avoir', imper:['accueille','accueillons','accueillez'] },
  'convaincre':{ pres:['convaincs','convaincs','convainc','convainquons','convainquez','convainquent'], futStem:'convaincr', impStem:'convainqu', subjStem:['convainqu','convainqu'], pp:'convaincu', ppr:'convainquant', aux:'avoir' }
};

/* ---------------- HỌ ĐỘNG TỪ ----------------
   Tiếng Pháp ghép tiền tố rất nhiều: revenir, devenir, parvenir, survenir đều
   chia y như venir; obtenir, contenir, soutenir, maintenir đều theo tenir;
   admettre, permettre, remettre, transmettre đều theo mettre. Ghi tay từng cái
   thì vừa dài vừa chắc chắn sót, mà sót là quay lại bịa dạng.
   Bảng dưới đây khai báo ĐUÔI và ĐỘNG TỪ MẪU của đuôi ấy. Dài trước ngắn sau,
   để «prendre» thắng «endre» và «naître» thắng «aître». */
const FR_FAM = [
  ['accueillir','accueillir'], ['cueillir','cueillir'], ['convaincre','convaincre'],
  ['comprendre','comprendre'], ['apprendre','apprendre'], ['prendre','prendre'],
  ['connaître','connaître'], ['naître','naître'], ['aître','connaître'],
  ['plaindre','plaindre'], ['craindre','craindre'], ['aindre','craindre'],
  ['eindre','peindre'], ['oindre','joindre'],
  ['résoudre','résoudre'], ['soudre','résoudre'],
  ['mettre','mettre'], ['battre','battre'],
  ['venir','venir'], ['tenir','tenir'],
  ['prévoir','prévoir'], ['cevoir','recevoir'],
  ['écrire','écrire'], ['crire','écrire'],
  ['conduire','conduire'], ['duire','conduire'], ['uire','cuire'],
  ['courir','courir'], ['mourir','mourir'],
  ['sentir','sentir'], ['mentir','mentir'], ['partir','partir'], ['sortir','sortir'],
  ['dormir','dormir'], ['servir','servir'],
  ['suivre','suivre'], ['vivre','vivre'],
  ['plaire','plaire'], ['taire','taire'], ['faire','faire'],
  ['suffire','suffire'], ['dire','dire'], ['lire','lire'], ['rire','rire'],
  ['boire','boire'], ['croire','croire'],
  ['valoir','valoir'], ['vouloir','vouloir'], ['pouvoir','pouvoir'], ['savoir','savoir'],
  ['devoir','devoir'], ['asseoir','asseoir'],
  ['vrir','ouvrir'], ['ffrir','offrir'],
  ['rompre','rompre'], ['aincre','vaincre'], ['clure','conclure'],
  ['envoyer','envoyer'],
  /* ['voir','voir'] phải nằm CUỐI: mọi động từ -cevoir, và avoir/devoir/
     pouvoir/savoir/prévoir, đều đã được nhận trước đó. */
  ['voir','voir']
  /* KHÔNG khai họ cho être, avoir và aller. Chúng không phải gốc của họ nào —
     mà «aller» thì lại là đuôi của installer, rappeler, appeler… nên khai vào
     đây là installer chia thành «instvais, instvont». Tôi đã tự mắc đúng lỗi
     ấy: đuôi càng thông dụng càng phải cẩn thận. */
];

/* «dites» là của riêng dire và redire. Các động từ ghép khác thì theo đuôi đều:
   vous interdisez, vous contredisez — nói «vous interdites» là sai. */
const FR_DIRE_REG = new Set(['interdire','contredire','prédire','médire','dédire']);

/* Suy bảng của một động từ ghép từ bảng của động từ mẫu. Chỉ thay phần đầu,
   không sinh thêm gì mới, nên không có chỗ nào để đoán. */
function frInherit(inf){
  for (const [suf, base] of FR_FAM){
    if (inf.length <= suf.length || inf.slice(-suf.length) !== suf) continue;
    const B = FR_IRR[base];
    if (!B) continue;
    /* Động từ mẫu BẮT BUỘC phải kết thúc bằng chính cái đuôi ấy, nếu không thì
       phép thay phần đầu ra chữ vô nghĩa. Tôi đã tự mắc lỗi này một lần:
       khai ['struire','conduire'] — mà «conduire» không kết thúc bằng
       «struire» — nên construire chia thành «cononduis». Chặn ngay tại đây. */
    if (base.length < suf.length || base.slice(-suf.length) !== suf) continue;
    const bs  = base.slice(0, base.length - suf.length);   // phần đầu của mẫu
    const pre = inf.slice(0, inf.length - suf.length);     // phần đầu của từ cần chia
    const sw  = f => !f ? f
      : (bs && f.slice(0, bs.length) === bs) ? pre + f.slice(bs.length) : pre + f;
    const out = {
      pres: B.pres.map(sw), futStem: sw(B.futStem), impStem: sw(B.impStem),
      /* Phân từ riêng của chính động từ ấy PHẢI thắng phân từ mượn của họ:
         inclure cùng họ conclure nhưng phân từ là «inclus», không phải «inclu».
         Không chặn thì cơ chế họ vừa sửa xong một lỗi lại tạo ra lỗi khác. */
      pp: FR_PP_EXACT[inf] || sw(B.pp), ppr: sw(B.ppr),
      /* Trợ động từ KHÔNG di truyền: revenir đi với être mà obtenir đi với
         avoir, dù cả hai cùng họ. Quyết định theo danh sách FR_ETRE. */
      aux: FR_ETRE.has(inf) ? 'être' : 'avoir'
    };
    if (B.subj) out.subj = B.subj.map(sw);
    if (B.subjStem) out.subjStem = B.subjStem.map(sw);
    if (B.imper) out.imper = B.imper.map(sw);
    if (B.noImper) out.noImper = true;
    if (B.only3s) out.only3s = true;
    if (base === 'dire' && FR_DIRE_REG.has(inf)) out.pres[4] = pre + 'disez';
    return out;
  }
  return null;
}

/* Nhóm động từ đi với ÊTRE ở thì kép. Quá khứ phân từ khi đó phải hợp
   giống số với chủ ngữ: elle est allée, ils sont allés. */
const FR_ETRE = new Set(['aller','venir','partir','arriver','entrer','sortir','monter','descendre',
  'rester','tomber','naître','mourir','devenir','revenir','rentrer','retourner','passer',
  'parvenir','survenir','intervenir','repartir','ressortir','remonter','redescendre',
  'renaître','décéder','demeurer']);

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
    /* -oyer / -uyer / -ayer: chữ y thành i trước đuôi câm.
       nettoyer → je nettoie · essayer → j’essaie · appuyer → j’appuie.
       Không có luật này thì sinh ra «nettoye», «essayent» — dạng không tồn tại
       mà lại rất giống thật, nên người học không có cách nào biết là sai. */
    if (soft && /[oua]y$/.test(st)) return st.slice(0, -1) + 'i';
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

/* ---------------- PHÂN TỪ BẤT QUY TẮC ----------------
   Đây là chỗ dễ sai mà khó thấy: bảng chia trông rất đầy đủ, chỉ có
   ô «đã làm» là sai. Mà ô đó lại dựng nên toàn bộ các thì kép — sai
   một chỗ là sai lan ra sáu ô của thì hoàn thành.

   Không liệt kê từng động từ, vì tiếng nào cũng có hàng loạt động từ
   ghép thêm tiền tố: describir, inscribir, suscribir đều theo escribir;
   componer, proponer, disponer đều theo poner. Nên bắt theo ĐUÔI, dài
   trước ngắn sau, và chỉ nhận những đuôi đủ đặc trưng để không vơ nhầm
   (mover không được ăn theo ver, nên «ver» phải liệt kê đích danh). */
const ES_PP = [
  ['scribir','scrito'], ['solver','suelto'], ['volver','vuelto'], ['poner','puesto'],
  ['cubrir','cubierto'], ['hacer','hecho'], ['decir','dicho'], ['abrir','abierto'],
  ['morir','muerto'], ['romper','roto'], ['imprimir','impreso'], ['freír','frito']
];
const ES_PP_EXACT = { 'ver':'visto', 'prever':'previsto', 'entrever':'entrevisto',
  'satisfacer':'satisfecho', 'bendecir':'bendecido' };
function esPart(inf, fallback){
  if (ES_PP_EXACT[inf]) return ES_PP_EXACT[inf];
  for (const [end, pp] of ES_PP){
    /* Dùng >= chứ không phải >: chính động từ gốc (cubrir, morir) cũng phải
       khớp với đuôi của nó, không chỉ các động từ ghép thêm tiền tố. */
    if (inf.length >= end.length && inf.slice(-end.length) === end)
      return inf.slice(0, inf.length - end.length) + pp;
  }
  return fallback;
}

const FR_PP = [
  ['crire','crit'], ['ffrir','ffert'], ['vrir','vert'], ['eindre','eint'],
  ['aindre','aint'], ['oindre','oint'], ['duire','duit'], ['struire','struit'],
  ['mettre','mis'], ['prendre','pris']
];
const FR_PP_EXACT = { 'mourir':'mort', 'naître':'né', 'renaître':'rené',
  'résoudre':'résolu', 'absoudre':'absous', 'coudre':'cousu', 'moudre':'moulu',
  'conclure':'conclu', 'exclure':'exclu', 'inclure':'inclus', 'vivre':'vécu',
  'suivre':'suivi', 'rire':'ri', 'sourire':'souri', 'plaire':'plu', 'taire':'tu',
  'croire':'cru', 'croître':'crû', 'battre':'battu', 'rompre':'rompu' };
function frPart(inf, fallback){
  if (FR_PP_EXACT[inf]) return FR_PP_EXACT[inf];
  for (const [end, pp] of FR_PP){
    if (inf.length >= end.length && inf.slice(-end.length) === end)
      return inf.slice(0, inf.length - end.length) + pp;
  }
  return fallback;
}

/* Động từ mà khuôn đều CHẮC CHẮN cho ra dạng sai, và không thuộc họ nào ở trên.
   Thà không hiện bảng chia còn hơn hiện một bảng bịa: người học không có cách
   nào biết ô nào thật ô nào giả. */
const FR_NO_TABLE = new Set([
  'fuir','s’enfuir','enfuir','haïr','bouillir','acquérir','conquérir','requérir',
  'faillir','saillir','tressaillir','vêtir','revêtir','gésir','ouïr','seoir',
  'coudre','moudre','croître','accroître','décroître','traire','distraire',
  'extraire','soustraire','abstraire','clore','enclore','frire','maudire',
  'circoncire','confire','choir','déchoir','échoir','braire','paître','repaître',
  'pourvoir','mouvoir','émouvoir','promouvoir','dépourvoir'
]);

function frTable(inf){
  inf = low(inf);
  /* Bảng riêng trước; không có thì suy theo họ động từ; không được nữa mới
     tới khuôn đều. */
  const irr = FR_IRR[inf] || (FR_NO_TABLE.has(inf) ? null : frInherit(inf));
  const g   = frGroup(inf);
  if (!irr && (!g || FR_NO_TABLE.has(inf))) return null;

  let pres, imparf, subj, pp, ppr, futStem, imper;

  if (irr){
    pres    = irr.pres.slice();
    imparf  = zip(irr.impStem, FR_REG.er.imp);
    subj    = irr.subj ? irr.subj.slice()
            : irr.subjStem ? [0,1,2,3,4,5].map(i => (i === 3 || i === 4 ? irr.subjStem[1] : irr.subjStem[0])
                + FR_REG.er.subj[i]) : [];
    pp      = irr.pp || frPart(inf, ''); ppr = irr.ppr; futStem = irr.futStem;
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
    pp = frPart(inf, st + R.pp);
    /* Phân từ hiện tại dựng trên gốc NGÔI NOUS, nên giữ nguyên chỗ chính tả:
       manger → mangeant (không phải «mangant»), commencer → commençant.
       Lỗi này nằm im vì phân từ hiện tại ít gặp hơn các thì khác, nhưng
       «c’est en forgeant qu’on devient forgeron» thì hiện ngay ra. */
    ppr = (g === 'ir') ? st + 'issant'
        : (g === 'er') ? frErStem(inf, 3, 'presNous') + 'ant'
        : st + 'ant';
    /* Futur của nhóm -er dùng NGUYÊN dạng nguyên mẫu — nhưng những động từ đổi
       chính tả ở présent thì đổi luôn cả ở futur: acheter → j’achèterai,
       appeler → j’appellerai, lever → je lèverai, nettoyer → je nettoierai.
       Ngoại lệ là nhóm é_er: theo chính tả truyền thống vẫn là je préférerai,
       giữ nguyên dấu sắc. */
    futStem = (g !== 'er') ? R.futStem(inf)
      : /[oua]yer$/.test(inf)                    ? inf.slice(0, -3) + 'ier'
      : /é[bcdfglmnprstvz]+er$/.test(inf)        ? inf
      : frErStem(inf, 0, 'pres') + 'er';
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

/* Ba tính từ này có dạng riêng khi đứng trước nguyên âm: un bel homme, le
   nouvel an, un vieil ami. Không phải giống cái, cũng không phải số nhiều —
   nên nếu không sinh riêng thì bấm vào «bel» hay «vieil» không ra gì. */
/* Danh từ chỉ người kết thúc bằng -eur chia làm ba phe, và quy tắc chung
   (-eur → -euse) chỉ đúng với phe đông: vendeur → vendeuse. Phe -teur thành
   -trice (directeur → directrice), còn một nhúm thì chỉ thêm -e
   (professeur → professeure). Áp quy tắc chung cho cả ba là sinh ra
   «professeuse» — một chữ không tồn tại. */
const FR_FEM_NOUN = { 'professeur':'professeure', 'auteur':'autrice',
  'docteur':'docteure', 'ingénieur':'ingénieure', 'entraîneur':'entraîneuse',
  'maire':'mairesse', 'maître':'maîtresse', 'chat':'chatte', 'chien':'chienne',
  'copain':'copine', 'héros':'héroïne', 'roi':'reine', 'neveu':'nièce',
  'garçon':'fille', 'homme':'femme', 'monsieur':'madame', 'père':'mère',
  'frère':'sœur', 'fils':'fille', 'oncle':'tante' };

const FR_PRE_VOWEL = { 'beau':'bel', 'nouveau':'nouvel', 'vieux':'vieil',
  'fou':'fol', 'mou':'mol' };

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
/* Số nhiều bất quy tắc. Đuôi -ail và -ou chia làm hai phe mà không có luật nào
   đoán được: travail → travaux nhưng détail → détails; bijou → bijoux nhưng
   clou → clous. Phe ít thì ghi thẳng ra. */
const FR_PLUR_X = { 'travail':'travaux', 'vitrail':'vitraux', 'corail':'coraux',
  'émail':'émaux', 'bail':'baux', 'soupirail':'soupiraux',
  'bijou':'bijoux', 'caillou':'cailloux', 'chou':'choux', 'genou':'genoux',
  'hibou':'hiboux', 'joujou':'joujoux', 'pou':'poux',
  'œil':'yeux', 'oeil':'yeux', 'ciel':'cieux', 'aïeul':'aïeux' };

function frPlural(w){
  w = low(w);
  if (FR_PLUR_X[w]) return FR_PLUR_X[w];
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
  'jugar':'u>ue',
  /* Bổ sung sau khi đo: những động từ này đã vào từ điển mà chưa khai đổi gốc,
     nên chia thành «recomenda», «atravesa», «cuelga» thiếu chuyển âm. */
  'recomendar':'e>ie','atravesar':'e>ie','fregar':'e>ie','temblar':'e>ie',
  'apretar':'e>ie','arrepentir':'e>ie','arrepentirse':'e>ie','hervir':'e>ie',
  'colgar':'o>ue','sonar':'o>ue','apostar':'o>ue','oler':'o>ue'
};

/* Bảng trên là danh sách đích danh, nên mỗi động từ ghép thêm tiền tố lại lọt:
   «mostrar» không có trong bảng nên chia thành «mostro» thay vì «muestro»,
   «convertir» thành «converto» thay vì «convierto», «conseguir» thành
   «conseguo». Đổi gốc đi theo GỐC TỪ, nên bắt theo đuôi thì một dòng phủ được
   cả họ: demostrar, mostrar; convertir, invertir, divertir, advertir. */
const ES_STEMV_SUF = [
  ['vertir','e>ie'], ['sentir','e>ie'], ['mentir','e>ie'], ['pensar','e>ie'],
  ['cerrar','e>ie'], ['empezar','e>ie'], ['tender','e>ie'], ['perder','e>ie'],
  ['querer','e>ie'], ['sentar','e>ie'], ['despertar','e>ie'], ['encender','e>ie'],
  ['helar','e>ie'], ['negar','e>ie'], ['pezar','e>ie'], ['ferir','e>ie'],
  ['mostrar','o>ue'], ['contar','o>ue'], ['encontrar','o>ue'], ['recordar','o>ue'],
  ['costar','o>ue'], ['probar','o>ue'], ['volar','o>ue'], ['soñar','o>ue'],
  ['almorzar','o>ue'], ['forzar','o>ue'], ['volver','o>ue'], ['solver','o>ue'],
  ['mover','o>ue'], ['doler','o>ue'], ['llover','o>ue'], ['morder','o>ue'],
  ['dormir','o>ue'], ['morir','o>ue'], ['contrar','o>ue'],
  ['pedir','e>i'], ['servir','e>i'], ['petir','e>i'], ['seguir','e>i'],
  ['vestir','e>i'], ['medir','e>i'], ['egir','e>i'], ['reír','e>i'],
  ['jugar','u>ue']
];
/* Trùng đuôi mà KHÔNG đổi gốc. «presentar» kết thúc bằng -sentar như
   «sentar» nhưng chia là presento, không phải «presiento»; «pretender» kết
   thúc bằng -tender như «entender» nhưng chia là pretendo. Bắt theo đuôi thì
   phải có danh sách chặn, nếu không là sai ngay ở những từ hay dùng nhất. */
const ES_NO_STEM = new Set(['presentar','presentarse','representar','ausentar',
  'ausentarse','pretender','alimentar','aumentar','comentar','intentar',
  'lamentar','fomentar','orientar','sentenciar','atentar','patentar']);

function esStemChange(inf){
  if (ES_STEMV[inf]) return ES_STEMV[inf];
  if (ES_NO_STEM.has(inf)) return null;
  for (const [suf, ch] of ES_STEMV_SUF)
    if (inf.length >= suf.length && inf.slice(-suf.length) === suf) return ch;
  return null;
}

/* ---------------- CHÍNH TẢ NGÔI «YO» VÀ THÌ GIẢ ĐỊNH ----------------
   Tiếng Tây Ban Nha có một lớp thay đổi KHÔNG phải đổi gốc mà là chính tả: chữ
   viết phải đổi để giữ nguyên ÂM. Bỏ qua lớp này thì sinh ra «cogo» thay cho
   «cojo», «busce» thay cho «busque», «llege» thay cho «llegue», «pareco» thay
   cho «parezco» — sai mà nhìn rất hợp lí, nên người học không thể tự phát hiện.
   Đây là quy tắc thật, áp cho mọi động từ có đuôi ấy, chứ không phải danh sách. */

/* nguyên âm + cer/cir → thêm z ở ngôi yo và cả thì giả định: conozco, parezco,
   traduzco. «hacer», «decir», «cocer» đi đường khác nên loại riêng. */
const ES_ZCO_SKIP = new Set(['hacer','decir','cocer','escocer','recocer','mecer','remecer']);
/* Nhận vào gốc ĐÃ đổi nguyên âm (stemAt(0)), vì hai lớp này cộng dồn:
   seguir đổi gốc e>i thành «sigu», rồi chính tả bỏ chữ u thành «sig» → sigo.
   Làm riêng lẻ thì ra «sego» hoặc «siguo», cả hai đều không tồn tại. */
function esYoStem(base, g, st){
  /* -cer / -cir sau nguyên âm: chữ c thành zc, KHÔNG phải thêm z vào sau.
     conocer → cono|zc|o, parecer → pare|zc|o, traducir → tradu|zc|o. */
  if (/[aeiou]c(er|ir)$/.test(base) && !ES_ZCO_SKIP.has(base)) return st.slice(0, -1) + 'zc';
  if (/gu(ir)$/.test(base))     return st.slice(0, -1);           // seguir → sigo
  if (/qu(ir)$/.test(base))     return st.slice(0, -2) + 'c';     // delinquir → delinco
  if (/g(er|ir)$/.test(base))   return st.slice(0, -1) + 'j';     // coger → cojo, elegir → elijo
  return null;
}
/* Đuôi -uir (không phải -guir, -quir) thêm y trước đuôi không bắt đầu bằng i:
   construyo, construyes, incluyen. */
const esUir = base => /[^gq]uir$/.test(base);
/* Gốc kết thúc bằng nguyên âm ở nhóm -er/-ir: leer, creer, caer, oír.
   Ngôi thứ ba quá khứ đơn thành -yó/-yeron, gerundio thành -yendo, phân từ có
   dấu sắc: leído, caído, oído. */
const esVowelStem = (st, g) => g !== 'ar' && /[aeoáéó]$/.test(st);

/* -car / -gar / -zar đổi chính tả ở quá khứ đơn ngôi yo và ở toàn bộ thì giả
   định: buscar → busqué, busque · llegar → llegué, llegue · empezar → empecé,
   empiece. Đây là ba đuôi rất thông dụng nên bỏ sót là sai khắp bảng. */
function esSpell(st, base){
  if (/car$/.test(base)) return st.slice(0, -1) + 'qu';
  if (/gar$/.test(base)) return st + 'u';
  if (/zar$/.test(base)) return st.slice(0, -1) + 'c';
  if (/guar$/.test(base)) return st + 'ü';
  return st;
}

/* Động từ -iar / -uar mà trọng âm rơi vào i hoặc u, thành í / ú có dấu:
   enviar → envío · continuar → continúo. Cùng đuôi mà cambiar → cambio,
   estudiar → estudio thì KHÔNG có dấu. Không có quy tắc nào đoán được, nên
   phải ghi danh sách — và chỉ ghi những từ tôi chắc. */
const ES_ACC_IU = new Set(['enviar','continuar','actuar','situar','esquiar','confiar',
  'guiar','vaciar','variar','espiar','liar','fiar','graduar','evaluar','acentuar',
  'insinuar','atenuar','efectuar','habituar','perpetuar','ampliar','enfriar','desviar',
  'rociar','criar','aliar','desafiar','fotografiar','telegrafiar','desconfiar',
  'confiarse','fiarse','enviarse','resfriar']);

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
  'nevar': { pres:['','','nieva','','',''], subj:['','','nieve','','',''], part:'nevado', ger:'nevando', only3s:true, noImper:true },

  /* ---- Bổ sung sau khi đo: những động từ này thiếu bảng nên bị áp khuôn đều
     và ra dạng không tồn tại — caer → «cao» (đúng là caigo), valer → «valo»
     (đúng là valgo), reír → «reo» (đúng là río). ---- */
  'caer':  { pres:['caigo','caes','cae','caemos','caéis','caen'], pret:['caí','caíste','cayó','caímos','caísteis','cayeron'], subj:['caiga','caigas','caiga','caigamos','caigáis','caigan'], part:'caído', ger:'cayendo' },
  'valer': { pres:['valgo','vales','vale','valemos','valéis','valen'], subj:['valga','valgas','valga','valgamos','valgáis','valgan'], futStem:'valdr', part:'valido', ger:'valiendo' },
  'creer': { pres:['creo','crees','cree','creemos','creéis','creen'], pret:['creí','creíste','creyó','creímos','creísteis','creyeron'], subj:['crea','creas','crea','creamos','creáis','crean'], part:'creído', ger:'creyendo' },
  'reír':  { pres:['río','ríes','ríe','reímos','reís','ríen'], pret:['reí','reíste','rio','reímos','reísteis','rieron'], subj:['ría','rías','ría','riamos','riais','rían'], part:'reído', ger:'riendo', imper:['ríe','ría','reíd','rían'] },
  'sonreír':{ pres:['sonrío','sonríes','sonríe','sonreímos','sonreís','sonríen'], pret:['sonreí','sonreíste','sonrio','sonreímos','sonreísteis','sonrieron'], subj:['sonría','sonrías','sonría','sonriamos','sonriais','sonrían'], part:'sonreído', ger:'sonriendo' },
  /* Hai động từ gần giống hacer và ver nhưng lệch đủ để không mượn được họ:
     satisfacer có tương lai satisfaré, prever thì ngôi «yo» là preveo. */
  'satisfacer':{ pres:['satisfago','satisfaces','satisface','satisfacemos','satisfacéis','satisfacen'], pret:['satisfice','satisficiste','satisfizo','satisficimos','satisficisteis','satisficieron'], subj:['satisfaga','satisfagas','satisfaga','satisfagamos','satisfagáis','satisfagan'], futStem:'satisfar', part:'satisfecho', ger:'satisfaciendo' },
  /* soler là động từ khuyết — không có mệnh lệnh, không có tương lai — nhưng
     hiện tại và quá khứ chưa hoàn thành thì dùng liên tục: «solía ir», «solemos
     comer». Chặn hẳn thì «solíamos» tra vào không ra gì. */
  'soler': { pres:['suelo','sueles','suele','solemos','soléis','suelen'], pret:['solí','soliste','solió','solimos','solisteis','solieron'], subj:['suela','suelas','suela','solamos','soláis','suelan'], futStem:null, part:'solido', ger:'soliendo', noImper:true },
  /* Ba động từ lộ ra khi đo độ phủ: oler phải thêm chữ h (huelo, không phải
     «uelo»), conducir có quá khứ -duje kéo theo cả họ -ducir, và rehacer/
     deshacer cần dấu sắc ở quá khứ (rehíce) mà phép suy theo họ không đặt được. */
  'oler':  { pres:['huelo','hueles','huele','olemos','oléis','huelen'], subj:['huela','huelas','huela','olamos','oláis','huelan'], part:'olido', ger:'oliendo' },
  'conducir':{ pres:['conduzco','conduces','conduce','conducimos','conducís','conducen'], pret:['conduje','condujiste','condujo','condujimos','condujisteis','condujeron'], subj:['conduzca','conduzcas','conduzca','conduzcamos','conduzcáis','conduzcan'], part:'conducido', ger:'conduciendo' },
  'rehacer':{ pres:['rehago','rehaces','rehace','rehacemos','rehacéis','rehacen'], pret:['rehíce','rehiciste','rehízo','rehicimos','rehicisteis','rehicieron'], subj:['rehaga','rehagas','rehaga','rehagamos','rehagáis','rehagan'], futStem:'rehar', part:'rehecho', ger:'rehaciendo' },
  'deshacer':{ pres:['deshago','deshaces','deshace','deshacemos','deshacéis','deshacen'], pret:['deshice','deshiciste','deshizo','deshicimos','deshicisteis','deshicieron'], subj:['deshaga','deshagas','deshaga','deshagamos','deshagáis','deshagan'], futStem:'deshar', part:'deshecho', ger:'deshaciendo' },
  'prever': { pres:['preveo','prevés','prevé','prevemos','prevéis','prevén'], pret:['preví','previste','previó','previmos','previsteis','previeron'], imp:['preveía','preveías','preveía','preveíamos','preveíais','preveían'], subj:['prevea','preveas','prevea','preveamos','preveáis','prevean'], part:'previsto', ger:'previendo' }
};

/* ---------------- HỌ ĐỘNG TỪ TIẾNG TÂY BAN NHA ----------------
   Cùng lí do như bên tiếng Pháp: contener, obtener, mantener, detener đều chia
   theo tener; suponer, componer, proponer theo poner; describir, inscribir theo
   escribir. Khai báo đuôi và động từ mẫu, khỏi phải ghi tay từng cái rồi sót. */
const ES_FAM = [
  ['hacer','hacer'],
  ['tener','tener'], ['poner','poner'], ['venir','venir'],
  ['traer','traer'], ['caer','caer'],
  ['decir','decir'],
  /* KHÔNG khai ['ver','ver']: đuôi ba chữ ấy vơ luôn volver, mover, resolver,
     devolver — và resolver liền chia phân từ thành «resolvisto» theo ver.
     Đuôi càng ngắn càng dễ vơ nhầm, nên chỉ nhận đuôi đủ đặc trưng. */
  ['volver','volver'],
  ['escribir','escribir'], ['scribir','escribir'],
  ['poder','poder'], ['querer','querer'], ['saber','saber'],
  ['salir','salir'], ['oír','oír'], ['leer','leer'], ['creer','creer'],
  ['reír','reír'], ['abrir','abrir'], ['conocer','conocer'],
  ['seguir','seguir'], ['sentir','sentir'], ['dormir','dormir'],
  ['contar','contar'], ['pedir','pedir'], ['servir','servir'],
  ['conducir','conducir'], ['ducir','conducir']
  /* KHÔNG khai họ cho oler: «doler» kết thúc bằng -oler nên sẽ chia thành
     «dhuelo». oler và soler đã có bảng riêng, không cần họ. */
];
/* Ngoại lệ của họ: bendecir và maldecir tuy cùng đuôi -decir nhưng phân từ là
   bendecido / maldecido và tương lai là bendeciré, không theo decir. */
const ES_FAM_SKIP = new Set(['bendecir','maldecir','predecir']);

function esInherit(inf){
  if (ES_FAM_SKIP.has(inf)) return null;
  for (const [suf, base] of ES_FAM){
    if (inf.length <= suf.length || inf.slice(-suf.length) !== suf) continue;
    const B = ES_IRR[base];
    if (!B) continue;
    if (base.length < suf.length || base.slice(-suf.length) !== suf) continue;
    const bs  = base.slice(0, base.length - suf.length);
    const pre = inf.slice(0, inf.length - suf.length);
    const sw  = f => !f ? f
      : (bs && f.slice(0, bs.length) === bs) ? pre + f.slice(bs.length) : pre + f;
    const out = { pres:B.pres.map(sw), subj:B.subj.map(sw),
                  /* Phân từ riêng thắng phân từ mượn của họ — cùng lí do như
                     bên tiếng Pháp. */
                  part: ES_PP_EXACT[inf] || sw(B.part), ger: sw(B.ger) };
    if (B.pret) out.pret = B.pret.map(sw);
    if (B.imp)  out.imp  = B.imp.map(sw);
    if (B.futStem !== undefined) out.futStem = B.futStem ? sw(B.futStem) : B.futStem;
    if (B.imper) out.imper = B.imper.map(sw);
    if (B.noImper) out.noImper = true;
    if (B.only3s)  out.only3s  = true;
    return out;
  }
  return null;
}

/* Động từ khuyết hoặc quá lệch, không có bảng nào đúng để mượn. Thà không hiện
   bảng còn hơn hiện bảng bịa. */
const ES_NO_TABLE = new Set(['abolir','asir','raer','roer','argüir','erguir','yacer',
  'placer','cocer','escocer','mecer','atañer','concernir','balbucir',
  'bendecir','maldecir']);

/* ---------------- GIẢ ĐỊNH QUÁ KHỨ ----------------
   Thì này không có ngoại lệ nào: lấy quá khứ đơn ngôi thứ ba số nhiều, cắt
   «-ron», thay bằng -ra / -ras / -ra / -ramos / -rais / -ran.
     hablaron → hablara · tuvieron → tuviera · fueron → fuera
     hubieron → hubiera · vinieron → viniera · pudieron → pudiera
   Không có thì này thì cả mảng câu điều kiện của A2 — «si tuviera tiempo»,
   «si fuera tú» — tra vào không ra gì, mà đó lại là thứ người học gặp liên tục.
   Ngôi nosotros mang dấu: habláramos, tuviéramos. */
const ES_SUBJI = ['ra','ras','ra','ramos','rais','ran'];
/* Tiếng Tây Ban Nha có HAI dạng giả định quá khứ dùng thay nhau được:
   tuviera / tuviese, pudiera / pudiese. Bảng chia hiện dạng -ra vì thông dụng
   hơn, nhưng dạng -se cũng phải tra được. */
const ES_SUBJI_SE = ['se','ses','se','semos','seis','sen'];
function esSubjImp(pret, endings){
  const E = endings || ES_SUBJI;
  const p3 = String(pret && pret[5] || '');
  if (!/ron$/.test(p3)) return ['','','','','',''];
  const st = p3.slice(0, -3);                       // hablaron → habla
  return E.map((e, i) => {
    if (i !== 3) return st + e;
    /* nosotros: trọng âm lùi một âm tiết nên nguyên âm cuối gốc mang dấu. */
    const m = st.match(/([aeiou])([^aeiou]*)$/);
    if (!m) return st + e;
    const acc = 'áéíóú'['aeiou'.indexOf(m[1])];
    return st.slice(0, st.length - m[0].length) + acc + m[2] + e;
  });
}

function esGroup(inf){
  if (/ar$/.test(inf)) return 'ar';
  if (/[eé]r$/.test(inf)) return 'er';
  /* oír, reír, freír viết có dấu sắc nhưng vẫn là nhóm -ir. Không nhận ra thì
     esGroup trả null và cả bảng chia biến mất. */
  if (/[ií]r$/.test(inf)) return 'ir';
  return null;
}

/** Bảng chia đầy đủ của một động từ tiếng Tây Ban Nha. null nếu không nhận ra. */
function esTable(inf){
  inf = low(inf);
  const refl = /se$/.test(inf) && inf.length > 4;
  const base = refl ? inf.slice(0, -2) : inf;      // acostarse → acostar
  const irr  = ES_IRR[inf] || (refl ? ES_IRR[base] : null)
            || (ES_NO_TABLE.has(base) ? null : (esInherit(inf) || (refl ? esInherit(base) : null)));
  const g    = esGroup(base);
  if (ES_NO_TABLE.has(base) && !irr) return null;
  if (!irr && !g) return null;

  const R = g ? ES_REG[g] : null;
  const st = base.slice(0, -2);
  const change = esStemChange(inf) || (refl ? esStemChange(base) : null);

  const stemAt = i => {
    if (!change || i === 3 || i === 4) return st;   // nosotros/vosotros giữ nguyên
    const [re, to] = ES_STEM[change];
    return st.replace(re, to);
  };

  let pres, pret, imp, subj, part, ger, futStem;
  if (irr){
    pres = irr.pres.slice();
    /* Bảng bất quy tắc có thể thiếu pret hoặc imp và mượn đuôi đều — nhưng
       «acabar de», «tener que» thì esGroup trả null nên R cũng null. Không
       chặn ở đây thì sập cả trang. Không có đuôi đều để mượn thì thà không ra
       bảng, còn hơn ra bảng bịa. */
    if ((!irr.pret || !irr.imp) && !R) return null;
    pret = irr.pret ? irr.pret.slice() : zip(st, R.pret);
    imp  = irr.imp  ? irr.imp.slice()  : zip(st, R.imp);
    subj = irr.subj.slice();
    part = irr.part || esPart(inf, ''); ger = irr.ger;
    futStem = irr.futStem !== undefined ? irr.futStem : base;
    if (irr.only3s){ pret = ['','', (pret[2] || ''), '','','']; imp = ['','', (imp[2] || ''), '','','']; }
  } else {
    /* Ngôi «yo» và toàn bộ thì giả định dùng một gốc riêng khi chính tả buộc
       phải đổi: conocer → conozco/conozca, coger → cojo/coja, seguir → sigo. */
    const yo = esYoStem(base, g, stemAt(0));
    const uy = esUir(base);
    const accIU = ES_ACC_IU.has(base);
    /* enviar → envío: dấu sắc rơi vào i/u ở đúng những ngôi có trọng âm gốc. */
    const accSt = accIU ? st.replace(/([iu])$/, m => m === 'i' ? 'í' : 'ú') : st;
    pres = [0,1,2,3,4,5].map(i => {
      if (i === 0 && yo) return yo + R.pres[0];
      const soft = (i !== 3 && i !== 4);
      let s = soft && accIU ? accSt : stemAt(i);
      if (uy && soft) s = s + 'y';
      return s + R.pres[i];
    });
    /* -ir đổi gốc còn đổi cả ở ngôi thứ ba của quá khứ đơn và ở gerundio:
       pedir → pidió, pidieron, pidiendo. */
    const irChange = change && g === 'ir';
    const vow = esVowelStem(st, g);
    pret = [0,1,2,3,4,5].map(i => {
      /* buscar → busqué, llegar → llegué, empezar → empecé: chỉ đổi ở ngôi yo,
         vì chỉ ngôi ấy có đuôi bắt đầu bằng é. */
      if (i === 0 && g === 'ar') return esSpell(st, base) + R.pret[0];
      /* leer → leyó, leyeron · caer → cayó · construir → construyó */
      if ((vow || esUir(base)) && (i === 2 || i === 5))
        return st + R.pret[i].replace(/^i/, 'y');
      if (irChange && (i === 2 || i === 5)){
        const [re] = ES_STEM['e>i'];
        const s2 = change === 'o>ue' ? st.replace(/o([^o]*)$/, 'u$1') : st.replace(re, 'i$1');
        return s2 + R.pret[i];
      }
      return st + R.pret[i];
    });
    imp  = zip(st, R.imp);
    subj = [0,1,2,3,4,5].map(i => {
      /* Thì giả định dựng từ gốc của ngôi yo — đó là lí do conozca, coja, siga
         đều theo yo chứ không theo nguyên mẫu. */
      if (yo) return yo + R.subj[i];
      /* Dấu sắc của enviar/continuar phải xét TRƯỚC chính tả -ar, nếu không thì
         nhánh -ar nuốt luôn và ra «envie» thay vì «envíe». */
      if (accIU && i !== 3 && i !== 4) return esSpell(accSt, base) + R.subj[i];
      if (g === 'ar') return esSpell(stemAt(i), base) + R.subj[i];
      if (esUir(base)) return st + 'y' + R.subj[i];
      if (g === 'ir' && change && (i === 3 || i === 4)){
        const s2 = change === 'o>ue' ? st.replace(/o([^o]*)$/, 'u$1') : st.replace(/e([^e]*)$/, 'i$1');
        return s2 + R.subj[i];
      }
      return stemAt(i) + R.subj[i];
    });
    /* Gốc kết thúc bằng nguyên âm thì phân từ có dấu sắc: leído, caído, oído,
       traído. Không có dấu là sai chính tả, mà lại rất dễ bỏ qua. */
    part = esPart(inf, (vow ? st + 'ído' : st + R.part));
    ger  = (vow || esUir(base))
      ? st + R.ger.replace(/^i/, 'y')                    // leyendo, construyendo
      : irChange
        ? (change === 'o>ue' ? st.replace(/o([^o]*)$/, 'u$1') : st.replace(/e([^e]*)$/, 'i$1')) + R.ger
        : st + R.ger;
    /* Tương lai và điều kiện luôn dựng trên NGUYÊN MẪU đầy đủ — kể cả với động
       từ có dấu: enviaré, continuaré, oiré. */
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
      { id:'subj', vi:'Giả định',          nat:'presente de subjuntivo', forms: wrap(subj), lead:'que ' },
      { id:'subji', vi:'Giả định quá khứ', nat:'imperfecto de subjuntivo', forms: wrap(esSubjImp(pret)), lead:'si ' }
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
  /* Tính từ chỉ dân tộc: español → española, alemán → alemana,
     mallorquín → mallorquina. Các tính từ khác kết thúc bằng -l hay -n
     (fácil, joven) thì KHÔNG đổi, nên chỉ nhận đúng ba đuôi này. */
  if (/ol$/.test(w))  return w + 'a';
  if (/án$/.test(w))  return w.replace(/án$/, 'ana');
  if (/ín$/.test(w))  return w.replace(/ín$/, 'ina');
  return w;
}
/* Số nhiều làm trọng âm lùi thêm một âm tiết nên phải thêm dấu sắc, mà quy tắc
   thì không đoán được từ chính tả: examen → exámenes, joven → jóvenes. Danh
   sách ngắn nên ghi đích danh. */
const ES_PLUR_ACC = { 'examen':'exámenes', 'joven':'jóvenes', 'origen':'orígenes',
  'imagen':'imágenes', 'margen':'márgenes', 'volumen':'volúmenes',
  'crimen':'crímenes', 'resumen':'resúmenes', 'certamen':'certámenes',
  'régimen':'regímenes', 'espécimen':'especímenes', 'carácter':'caracteres' };

function esPlural(w){
  w = low(w);
  if (ES_PLUR_ACC[w]) return ES_PLUR_ACC[w];
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
      /* Dạng -se của giả định quá khứ: tuviese bên cạnh tuviera. Bảng chia chỉ
         hiện một dạng cho gọn, nhưng cả hai đều đúng nên cả hai phải tra được. */
      if (lang === 'es'){
        const pr = (t.tenses.find(x => x.id === 'pret') || {}).forms;
        if (pr) esSubjImp(pr.map(f => low(String(f || '')).replace(/^(me|te|se|nos|os) /, '')), ES_SUBJI_SE)
          .forEach(f => { if (f) out.add(f); });
      }
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
      if (FR_PRE_VOWEL[w]) out.add(FR_PRE_VOWEL[w]);
      /* Danh từ chỉ NGƯỜI có dạng giống cái: professeur → professeure,
         vendeur → vendeuse, étudiant → étudiante, boulanger → boulangère.
         Chỉ áp cho những đuôi chỉ tác nhân, vì áp bừa thì «port» sẽ sinh ra
         «porte» — mà porte là cái cửa, một từ thật, khác hẳn. */
      if (/danh từ/.test(p)){
        const f = FR_FEM_NOUN[w]
          || (/(teur|eur|ien|ier|er|ant|ent|é|eux|if)$/.test(w) ? frFem(w) : null);
        if (f && f !== w){ out.add(f); out.add(frPlural(f)); }
      }
      /* Hợp giống KHÔNG chỉ dành cho tính từ: «quel» là từ hỏi mà vẫn ra quelle,
         quels, quelles; «premier» được khoá ghi là số từ mà vẫn ra première.
         Chỉ xét «tính từ» thì những dạng ấy tra vào không có gì. */
      if (/tính từ|từ hỏi|từ hạn định|từ chỉ định|từ sở hữu|đại từ|số/.test(p)){
        const f = frFem(w); out.add(f); out.add(frPlural(f)); out.add(frPlural(w));
      }
    } else {
      out.add(esPlural(w));
      if (/tính từ|từ hỏi|từ hạn định|từ chỉ định|từ sở hữu|đại từ|số/.test(p)){
        const f = esFem(w); out.add(f); out.add(esPlural(f));
        /* Từ vốn ở dạng số nhiều — trescientos, varios, ambos — vẫn phải có
           dạng giống cái: trescientas personas, varias veces. */
        if (/os$/.test(w)) out.add(w.replace(/os$/, 'as'));
      }
      /* Danh từ chỉ người: profesor → profesora, vecino → vecina. */
      if (/danh từ/.test(p) && /(o|or|és|ón|ol|án|ín)$/.test(w)){
        const f = esFem(w); if (f !== w){ out.add(f); out.add(esPlural(f)); }
      }
      if (ES_APOC[w]) out.add(ES_APOC[w]);
      if (/tính từ|trạng từ/.test(p)){
        const sup = esSuper(w);
        if (sup){ out.add(sup); out.add(esFem(sup)); out.add(esPlural(sup)); out.add(esPlural(esFem(sup))); }
      }
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
              FR_PRON, ES_PRON, isVerbForm, esUnclitic };

if (typeof window !== 'undefined') window.LAT_MORPH = API;
if (typeof module !== 'undefined' && module.exports) module.exports = API;
})();
