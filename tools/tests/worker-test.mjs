import { pathToFileURL } from 'url';
const mod = await import(pathToFileURL('/sessions/serene-blissful-faraday/mnt/N1.NGOAI NGU/langlab/worker/translate-worker.js').href);
const worker = mod.default;

let pass=0, fail=0;
const ok=(n,c)=>{ (c?pass++:fail++); console.log((c?'ok   ':'FAIL ')+n); };

// mock Gemini
let nextText='', lastBody=null;
globalThis.fetch = async (url, opts) => {
  try { lastBody = JSON.parse(opts && opts.body || '{}'); } catch(e){ lastBody = null; }
  return new Response(JSON.stringify({ candidates:[{content:{parts:[{text: nextText}]}}] }), { status:200, headers:{'Content-Type':'application/json'} });
};
const sysText = () => (lastBody && lastBody.systemInstruction && lastBody.systemInstruction.parts[0].text) || '';
const req = (path, body, method='POST') => new Request('https://w.example'+path, { method, headers:{'Content-Type':'application/json'}, body: body?JSON.stringify(body):undefined });
const envKey = { GEMINI_API_KEY:'test' };

// 1. status
let r = await worker.fetch(req('/_translate/status', null, 'GET'), envKey);
let j = await r.json();
ok('status: ok/chat/audio = true', j.ok===true && j.chat===true && j.audio===true);

// 2. chat
nextText = 'Trợ từ 은/는 nêu chủ đề, 이/가 nêu chủ ngữ mới.';
r = await worker.fetch(req('/_chat', { messages:[{role:'user',content:'phân biệt 은/는 và 이/가'}] }), envKey);
j = await r.json();
ok('chat: trả về reply', typeof j.reply==='string' && j.reply.includes('은/는'));

// 3. chat off-topic still returns (Worker không tự chặn, prompt lo việc đó) — chỉ kiểm định dạng
ok('chat: reply không rỗng', j.reply.length>5);

// 4. audio
nextText = JSON.stringify({ lang:'ko', langVi:'Tiếng Hàn', sentences:[
  { text:'저는 학생이에요.', rom:'jeoneun haksaengieyo', vi:'Tôi là học sinh.',
    words:[{w:'저는',rom:'jeoneun',vi:'tôi'},{w:'학생이에요',rom:'haksaengieyo',vi:'là học sinh'}] }
]});
r = await worker.fetch(req('/_audio', { audio:'QUFBQQ==', mime:'audio/mpeg' }), envKey);
j = await r.json();
ok('audio: parse JSON (lang + sentences + words)',
   j.lang==='ko' && Array.isArray(j.sentences) && j.sentences[0].words.length===2 && j.sentences[0].words[0].w==='저는');

// 5. audio thiếu Gemini
r = await worker.fetch(req('/_audio', { audio:'QQ==' }), {});
j = await r.json();
ok('audio: không có GEMINI_API_KEY → no-gemini', j.error==='no-gemini');

// 6. chat thiếu key
r = await worker.fetch(req('/_chat', { messages:[{role:'user',content:'hi'}] }), {});
j = await r.json();
ok('chat: không có key → no-key', j.error==='no-key');

// 7. translate cũ vẫn chạy
nextText = JSON.stringify(['Xin chào.']);
r = await worker.fetch(req('/_translate', { sentences:['안녕하세요.'] }), envKey);
j = await r.json();
ok('translate cũ vẫn hoạt động', j.translations && Object.keys(j.translations).length===1);

/* 8. Labi phải mở cho MỌI ngoại ngữ — từng có lỗi «mình là trợ lý tiếng Hàn
      nên không trả lời câu hỏi tiếng Nhật». */
nextText = 'Chữ お đọc là «o».';
r = await worker.fetch(req('/_chat', { messages:[{role:'user',content:'chữ ô trong tiếng Nhật là gì'}], lang:'ko' }), envKey);
await r.json();
const S = sysText();
ok('Labi: prompt không tự nhận là trợ lý của riêng một thứ tiếng',
   !/trợ lý học tiếng Hàn/.test(S) && /MỌI thứ tiếng/.test(S));
ok('Labi: cấm hẳn việc từ chối vì câu hỏi thuộc thứ tiếng khác',
   /KHÔNG từ chối chỉ vì câu hỏi thuộc thứ tiếng khác/.test(S));
ok('Labi: có dặn từ chối chuyện ngoài ngôn ngữ một cách vui và khéo',
   /toán, lý, hoá/.test(S) && /VUI và KHÉO/.test(S));
ok('Labi: biết người dùng đang mở phần tiếng Hàn, nhưng chỉ để hiểu ngữ cảnh',
   /đang mở phần tiếng Hàn/.test(S) && /không được viện cớ để từ chối/.test(S));

nextText = 'x';
r = await worker.fetch(req('/_chat', { messages:[{role:'user',content:'hi'}], lang:'ru' }), envKey);
await r.json();
ok('Labi: đổi màn tiếng Nga thì ngữ cảnh đổi theo', /đang mở phần tiếng Nga/.test(sysText()));

r = await worker.fetch(req('/_chat', { messages:[{role:'user',content:'hi'}], lang:'xx' }), envKey);
await r.json();
ok('Labi: mã ngôn ngữ lạ thì bỏ qua, không chèn ngữ cảnh bậy', !/NGỮ CẢNH/.test(sysText()));

console.log('\n'+pass+' đạt / '+fail+' lỗi');
process.exit(fail?1:0);
