/* Bộ thu audio và app phải khớp nhau TỪNG TÊN TỆP.
   Băm lệch một chỗ là thu cả nghìn mp3 xong không ai dùng, mà chạy app thì
   vẫn ra giọng máy nên không ai phát hiện. Bài này chặn đúng chuyện đó:
   lấy đúng những câu app sẽ đòi, đem đối chiếu với danh sách Python sinh ra. */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { JSDOM, VirtualConsole } = require('jsdom');

const REPO = path.resolve(__dirname, '..', '..');
const html = fs.readFileSync(path.join(REPO, 'dist', 'langlab.html'), 'utf8');

let pass = 0, fail = 0;
const check = (n, f) => {
  let ok = false, why = '';
  try { const r = f(); ok = r === true || r === undefined; if (r && r !== true) why = ' — ' + r; }
  catch (e){ ok = false; why = ' — ' + e.message; }
  ok ? pass++ : fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + n + (ok ? '' : (why || ' — sai')));
};

/* ---------- chạy bộ thu ở chế độ chỉ in băm ---------- */
function dump(){
  const args = ['tools/make_audio.py', '--dump-hashes', '--en-voice', 'both'];
  for (const py of ['python3', 'python']){
    try {
      return JSON.parse(execFileSync(py, args, { cwd: REPO, maxBuffer: 64 * 1024 * 1024 }).toString());
    } catch (e){ if (py === 'python') throw e; }
  }
}

let items;
try { items = dump(); }
catch (e){
  console.log('BỎ QUA audio-test: không chạy được tools/make_audio.py (' + e.message.split('\n')[0] + ')');
  process.exit(0);
}

const byVoice = {};
items.forEach(it => { (byVoice[it.voice] = byVoice[it.voice] || new Map()).set(it.text, it.hash); });

const vc = new VirtualConsole();
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc,
  url:'http://localhost:9999/', beforeParse(w){
    w.Element.prototype.getBBox = () => ({x:0,y:0,width:100,height:100});
    w.Element.prototype.scrollIntoView = function(){};
    w.Element.prototype.getBoundingClientRect = () => ({left:0,top:0,width:300,height:300,right:300,bottom:300});
    w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, {get:()=>()=>{}});
    w.scrollTo = () => {};
    w.matchMedia = () => ({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
    w.Audio = function(){ return { preload:'', src:'', playbackRate:1, pause(){}, play(){}, addEventListener(){}, removeEventListener(){} }; };
    w.speechSynthesis = { getVoices:()=>[], addEventListener(){}, removeEventListener(){}, cancel(){}, speak(){} };
    w.SpeechSynthesisUtterance = function(t){ this.text = t; };
  }});

setTimeout(() => {
  const win = dom.window;
  const TTS = win.TTS, SAY = win.__say, PIC = win.__pic;
  const P = win.eval('LISTEN_PIC');
  const LANGS = ['ko', 'zh', 'ja', 'ru', 'en'];

  check('bộ thu in ra được danh sách băm', () => items.length > 500 || ('mới có ' + items.length + ' mục'));

  check('app có sẵn hàm chuẩn hoá và hàm chọn thư mục giọng', () => !!(SAY && SAY.plain && SAY.voice));

  check('mỗi thứ tiếng một thư mục audio riêng', () => {
    const v = LANGS.map(l => SAY.voice(l));
    return new Set(v).size === 5 || ('trùng thư mục: ' + v.join(' '));
  });

  check('thư mục dò đầu tiên là thư mục của thứ tiếng đó', () =>
    TTS.dirs('zh')[0] === 'audio/tts/zh/' || TTS.dirs('zh')[0]);

  check('thư mục gốc vẫn được dò sau cùng (giữ bộ tiếng Hàn thu từ trước)', () =>
    TTS.dirs('ko').indexOf('audio/tts/') >= 0);

  check('Python và JS băm ra cùng một chuỗi', () => {
    const bad = items.slice(0, 400).filter(it => TTS.hash(it.text) !== it.hash);
    return bad.length === 0 || (bad.length + ' chuỗi lệch, ví dụ «' + bad[0].text.slice(0, 24) + '»');
  });

  /* Phép thử thật sự: đúng những câu app sẽ đòi khi bấm Nghe. */
  check('mọi câu của bài nghe – xem tranh đều nằm trong danh sách thu', () => {
    const miss = [];
    P.forEach(q => {
      const voice = SAY.voice(q.lang);
      const have = byVoice[voice];
      if (!have) { miss.push(q.id + ' (thiếu hẳn thư mục ' + voice + ')'); return; }
      PIC.lines(q).map(l => SAY.plain(l, q.lang)).forEach(line => {
        if (!have.has(line)) miss.push(q.id + ': ' + line.slice(0, 30));
      });
    });
    if (miss.length) console.log('   thiếu:', miss.slice(0, 5).join(' | '), '(' + miss.length + ')');
    return miss.length === 0;
  });

  check('nút nghe từng phương án và câu ví dụ ngữ pháp cũng đã được thu', () => {
    const miss = [];
    P.forEach(q => {
      const have = byVoice[SAY.voice(q.lang)] || new Map();
      q.opts.forEach(o => { const t = SAY.plain(o.t, q.lang); if (!have.has(t)) miss.push(q.id + ': ' + t.slice(0, 24)); });
      (q.gram || []).forEach(g => { const t = SAY.plain(g.ex[0], q.lang); if (!have.has(t)) miss.push(q.id + ' ex: ' + t.slice(0, 24)); });
    });
    if (miss.length) console.log('   thiếu:', miss.slice(0, 5).join(' | '), '(' + miss.length + ')');
    return miss.length === 0;
  });

  check('câu dò của js/tts.js đúng là câu dẫn app sẽ đòi, và đã được thu', () => {
    const src = fs.readFileSync(path.join(REPO, 'js', 'tts.js'), 'utf8');
    const blk = src.slice(src.indexOf('const PROBE_WORDS'), src.indexOf(']', src.indexOf('const PROBE_WORDS') + 400));
    const probes = [...blk.matchAll(/\['((?:[^'\\]|\\.)*)',\s*'([a-z-]*)'\]/g)].map(m => [m[1], m[2]]);
    if (probes.length < 5) return 'không đọc được PROBE_WORDS';
    const bad = [];
    LANGS.forEach(l => {
      const q = P.find(x => x.lang === l);
      const prompt = SAY.plain(PIC.lines(q)[0], l), v = SAY.voice(l);
      if (!probes.some(([w, pv]) => w === prompt && (pv === v || (l === 'en' && pv.startsWith('en-')))))
        bad.push(l + ': tts.js chưa dò câu dẫn này');
      else if (!(byVoice[v] && byVoice[v].has(prompt))) bad.push(l + ': câu dò chưa nằm trong danh sách thu');
    });
    return bad.length === 0 || bad.join(' · ');
  });

  check('chuẩn hoá tiếng Nhật và tiếng Nga khớp nhau hai bên', () => {
    const ja = SAY.plain('本[ほん]を 読[よ]む「です」', 'ja');
    const ru = SAY.plain('Он говори́т', 'ru');
    return (ja === '本を読むです' && ru === 'Он говорит') || (ja + ' / ' + ru);
  });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 600);
