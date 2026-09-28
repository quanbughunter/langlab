/* ============================================================
   LangLab — Cloudflare Worker dịch tiếng Hàn sang tiếng Việt
   ------------------------------------------------------------
   Cùng vai trò với endpoint /_translate của tools/serve.py, nhưng
   chạy trên Cloudflare (miễn phí, 100.000 lượt/ngày) để app đã đưa
   lên mạng vẫn dịch được mà không cần máy nào của bạn bật.

   Khoá API KHÔNG nằm trong mã này. Đặt nó làm "secret" của Worker:
     tên biến  GEMINI_API_KEY   giá trị  AIza…            (Google Gemini)
   Nếu muốn dùng nhà khác (Groq…) thì đặt thêm:
     LLM_BASE_URL   ví dụ  https://api.groq.com/openai/v1
     LLM_MODEL      ví dụ  llama-3.3-70b-versatile
     LLM_API_KEY    khoá tương ứng

   Cách deploy: xem worker/README.md
   ============================================================ */

const SYSTEM = [
  'Bạn là người dịch Hàn–Việt cho một ứng dụng học tiếng Hàn.',
  'Nhiệm vụ: dịch từng câu sang tiếng Việt TỰ NHIÊN, như người Việt thật sẽ nói.',
  '',
  'Nguyên tắc:',
  '- Dịch ý, không dịch sát từng chữ. Được phép đổi trật tự từ, thêm hoặc bỏ hư từ cho câu tiếng Việt trôi chảy.',
  '- Giữ đúng sắc thái và mức độ lịch sự của bản gốc: 반말 dịch suồng sã, -습니다 trang trọng, -아/어요 lịch sự bình thường.',
  '- Dùng đại từ tiếng Việt cho tự nhiên theo ngữ cảnh; đừng máy móc dịch 저 thành "tôi" ở mọi chỗ.',
  '- Đừng thêm chú thích, đừng giải thích ngữ pháp, đừng phiên âm.',
  '- Câu nào là câu hỏi thì bản dịch cũng phải là câu hỏi.',
  '- Cả đoạn phải đọc liền mạch như một đoạn văn tiếng Việt.',
  '',
  'Trả về DUY NHẤT một mảng JSON gồm các chuỗi, đúng thứ tự và đúng số lượng câu được đưa vào.',
  'Không viết gì thêm ngoài mảng JSON.'
].join('\n');

/* Băm FNV-1a 32 bit — phải khớp js/tts.js, js/translate.js, tools/*.py */
function hash(s) {
  const t = String(s).replace(/\s+/g, ' ').trim();
  const bytes = new TextEncoder().encode(t);
  let h = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i++) {
    h ^= bytes[i];
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return ('0000000' + h.toString(16)).slice(-8);
}

function extractArray(text, n) {
  let t = String(text).trim()
    .replace(/^```(?:json)?\s*/, '')
    .replace(/\s*```$/, '');
  const i = t.indexOf('['), j = t.lastIndexOf(']');
  if (i >= 0 && j > i) t = t.slice(i, j + 1);
  const arr = JSON.parse(t);
  if (!Array.isArray(arr)) throw new Error('không phải mảng JSON');
  const out = arr.map(x => String(x).trim());
  if (out.length !== n) throw new Error('trả về ' + out.length + ' câu, cần ' + n);
  return out;
}

function prompt(sentences) {
  const numbered = sentences.map((s, i) => (i + 1) + '. ' + s).join('\n');
  return 'Đoạn tiếng Hàn gồm ' + sentences.length + ' câu:\n\n' + numbered +
         '\n\nTrả về mảng JSON gồm đúng ' + sentences.length + ' bản dịch tiếng Việt.';
}

const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.5-flash-lite'];

async function callGemini(sentences, key) {
  const body = {
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: [{ role: 'user', parts: [{ text: prompt(sentences) }] }],
    generationConfig: { temperature: 0.4, maxOutputTokens: 4096 }
  };
  let lastErr = 'không rõ lỗi';
  for (const model of GEMINI_MODELS) {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
                encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);
    for (let attempt = 0; attempt < 2; attempt++) {
      const r = await fetch(url, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
      });
      if (r.ok) {
        const data = await r.json();
        const parts = (((data.candidates || [])[0] || {}).content || {}).parts || [];
        return extractArray(parts.map(p => p.text || '').join(''), sentences.length);
      }
      lastErr = 'HTTP ' + r.status + ' — ' + (await r.text()).slice(0, 200);
      if ((r.status === 503 || r.status === 429) && attempt === 0) {
        await new Promise(res => setTimeout(res, 1200));   // nghẽn: đợi rồi thử lại
        continue;
      }
      break;                                                // lỗi khác: sang model tiếp
    }
  }
  throw new Error(lastErr);
}

async function callOpenAICompat(sentences, base, model, key) {
  const r = await fetch(base.replace(/\/$/, '') + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
    body: JSON.stringify({
      model, temperature: 0.4,
      messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: prompt(sentences) }]
    })
  });
  if (!r.ok) throw new Error('HTTP ' + r.status + ' — ' + (await r.text()).slice(0, 200));
  const data = await r.json();
  return extractArray(data.choices[0].message.content, sentences.length);
}

/* ================= Hỏi đáp (chatbot học ngôn ngữ) ================= */
const CHAT_SYSTEM = [
  'Bạn là Labi — trợ lý học ngoại ngữ của ứng dụng LangLab, nói chuyện với người Việt.',
  'Trả lời bằng TIẾNG VIỆT là chính, tự nhiên, ngắn gọn, dễ hiểu. Xưng «mình», gọi người dùng là «bạn».',
  '',
  'PHẠM VI — bạn giúp MỌI thứ tiếng, không bó vào riêng tiếng nào:',
  '- LangLab dạy tiếng Hàn, Trung, Nhật, Nga và Anh. Nhưng người dùng hỏi về tiếng Pháp, Đức, Thái,',
  '  Tây Ban Nha hay bất kỳ ngoại ngữ nào khác thì bạn VẪN trả lời bình thường.',
  '- Thuộc phạm vi: ngữ pháp, từ vựng, chữ viết, phát âm, thanh điệu, trọng âm, chữ Hán, kính ngữ,',
  '  thành ngữ, dịch thuật, luyện thi (TOPIK, HSK, JLPT, ТРКИ, IELTS, TOEFL), phương pháp học, mẹo nhớ từ,',
  '  so sánh giữa các thứ tiếng, và văn hoá – lối sống gắn với cách người bản xứ dùng ngôn ngữ.',
  '- TUYỆT ĐỐI KHÔNG từ chối chỉ vì câu hỏi thuộc thứ tiếng khác với thứ tiếng người dùng đang mở.',
  '  Câu «mình là trợ lý tiếng X nên không trả lời về tiếng Y» là SAI, không bao giờ được nói như vậy.',
  '',
  'CÁCH TRẢ LỜI:',
  '- Giải thích ngữ pháp hay từ vựng thì nêu ví dụ bằng chính thứ tiếng đang bàn, kèm nghĩa tiếng Việt,',
  '  và kèm phiên âm nếu chữ viết không phải chữ Latinh.',
  '- Chữ Hán / kanji: nêu cả âm đọc lẫn nghĩa. Tiếng Nhật: ghi kèm kana. Tiếng Nga: đánh dấu trọng âm.',
  '- Không bịa. Không chắc thì nói thẳng là không chắc.',
  '- Dài chừng vài câu, trừ khi cần ví dụ dài.',
  '',
  'NGOÀI PHẠM VI — toán, lý, hoá, lập trình, y tế, tài chính, chính trị, tin tức, tâm sự chuyện đời:',
  '- Từ chối, nhưng phải VUI và KHÉO, một hai câu thôi, rồi kéo về chuyện học tiếng bằng một gợi ý cụ thể.',
  '- Được phép tự trêu mình. Không lên lớp, không trách móc, không đọc lại một câu từ chối cứng nhắc.',
  '- Mỗi lần từ chối nói một kiểu khác nhau. Vài ví dụ về GIỌNG ĐIỆU (đừng chép nguyên văn):',
  '  · «Đạo hàm thì mình chịu — hồi đi học mình mải chia động từ nên trốn tiết Toán mất rồi.',
  '     Nhưng «đạo hàm» tiếng Anh là derivative, cần mình kể thêm mấy từ Toán học nữa không?»',
  '  · «Phương trình hoá học nằm ngoài tầm với của mình. Mình chỉ phân biệt nổi 산 trong tiếng Hàn',
  '     là «núi» hay là «axit» thôi.»',
  '- Câu hỏi nửa nọ nửa kia (ví dụ «dịch giúp mình đề Toán này sang tiếng Anh») thì cứ làm phần ngôn ngữ,',
  '  và nói rõ là mình không giải hộ phần chuyên môn.'
].join('\n');

const LANG_VI = { ko:'tiếng Hàn', zh:'tiếng Trung', ja:'tiếng Nhật', ru:'tiếng Nga', en:'tiếng Anh' };

/* App gửi kèm thứ tiếng người dùng đang mở, để câu hỏi cộc lốc kiểu
   «chữ ô đọc thế nào?» được hiểu đúng ngữ cảnh — nhưng KHÔNG vì thế mà
   khoá Labi vào mỗi thứ tiếng đó. */
function chatSystem(lang) {
  const cur = LANG_VI[lang];
  if (!cur) return CHAT_SYSTEM;
  return CHAT_SYSTEM + '\n\nNGỮ CẢNH: người dùng đang mở phần ' + cur + ' của ứng dụng. '
    + 'Câu hỏi nào không nêu rõ thứ tiếng thì hiểu là hỏi về ' + cur + '. '
    + 'Còn hỏi rõ về thứ tiếng khác thì trả lời thứ tiếng đó, không được viện cớ để từ chối.';
}

async function geminiChat(messages, key, lang) {
  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.content || '').slice(0, 4000) }]
  }));
  const body = {
    systemInstruction: { parts: [{ text: chatSystem(lang) }] },
    contents,
    generationConfig: { temperature: 0.6, maxOutputTokens: 1024 }
  };
  let lastErr = 'không rõ lỗi';
  for (const model of GEMINI_MODELS) {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
                encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);
    for (let attempt = 0; attempt < 2; attempt++) {
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (r.ok) {
        const data = await r.json();
        const parts = (((data.candidates || [])[0] || {}).content || {}).parts || [];
        const text = parts.map(p => p.text || '').join('').trim();
        if (text) return text;
        lastErr = 'phản hồi rỗng';
      } else {
        lastErr = 'HTTP ' + r.status + ' — ' + (await r.text()).slice(0, 200);
        if ((r.status === 503 || r.status === 429) && attempt === 0) { await new Promise(res => setTimeout(res, 1200)); continue; }
      }
      break;
    }
  }
  throw new Error(lastErr);
}

async function openaiChat(messages, base, model, key, lang) {
  const r = await fetch(base.replace(/\/$/, '') + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
    body: JSON.stringify({
      model, temperature: 0.6, max_tokens: 1024,
      messages: [{ role: 'system', content: chatSystem(lang) }].concat(
        messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 4000) })))
    })
  });
  if (!r.ok) throw new Error('HTTP ' + r.status + ' — ' + (await r.text()).slice(0, 200));
  const data = await r.json();
  return String(data.choices[0].message.content || '').trim();
}

/* ================= Phân tích tệp âm thanh (Gemini đa phương thức) ================= */
const AUDIO_SYSTEM = [
  'Bạn là công cụ phân tích âm thanh cho ứng dụng học ngôn ngữ, phục vụ người Việt.',
  'Bạn nhận một đoạn âm thanh và phải: (1) nhận diện ngôn ngữ; (2) chép lời chính xác;',
  '(3) tách thành từng câu; (4) với mỗi câu tách thành từng từ có nghĩa; (5) dịch sang tiếng Việt tự nhiên.',
  '',
  'Trả về DUY NHẤT một đối tượng JSON, không kèm chữ nào khác, theo đúng dạng:',
  '{',
  '  "lang": "mã ngôn ngữ ISO (vd: ko, en, ja, vi, zh)",',
  '  "langVi": "tên ngôn ngữ bằng tiếng Việt (vd: Tiếng Hàn)",',
  '  "sentences": [',
  '    {',
  '      "text": "nguyên văn câu",',
  '      "rom": "phiên âm Latinh cả câu (rỗng nếu là chữ Latinh)",',
  '      "vi": "bản dịch tiếng Việt tự nhiên của câu",',
  '      "words": [ { "w": "từ", "rom": "phiên âm từ (rỗng nếu Latinh)", "vi": "nghĩa tiếng Việt ngắn của từ" } ]',
  '    }',
  '  ]',
  '}',
  '',
  'Quy tắc: tách từ theo đơn vị có nghĩa (với tiếng Hàn: tách theo 어절/từ, bỏ trợ từ dính nếu tách được nghĩa rõ hơn thì vẫn giữ nguyên 어절).',
  'Không thêm dấu câu không có. Nếu không nghe rõ, cứ chép phần nghe được. Không bịa nội dung.',
  'Giới hạn tối đa 40 câu để phản hồi gọn.'
].join('\n');

function extractObject(text) {
  let t = String(text).trim().replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
  const i = t.indexOf('{'), j = t.lastIndexOf('}');
  if (i >= 0 && j > i) t = t.slice(i, j + 1);
  const obj = JSON.parse(t);
  if (!obj || typeof obj !== 'object') throw new Error('không phải JSON hợp lệ');
  return obj;
}

async function geminiAudio(audioB64, mime, key) {
  const body = {
    systemInstruction: { parts: [{ text: AUDIO_SYSTEM }] },
    contents: [{ role: 'user', parts: [
      { text: 'Phân tích đoạn âm thanh sau và trả về JSON đúng dạng đã quy định.' },
      { inlineData: { mimeType: mime || 'audio/mpeg', data: audioB64 } }
    ] }],
    generationConfig: { temperature: 0.2, maxOutputTokens: 8192, responseMimeType: 'application/json' }
  };
  let lastErr = 'không rõ lỗi';
  for (const model of GEMINI_MODELS) {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
                encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);
    for (let attempt = 0; attempt < 2; attempt++) {
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (r.ok) {
        const data = await r.json();
        const parts = (((data.candidates || [])[0] || {}).content || {}).parts || [];
        return extractObject(parts.map(p => p.text || '').join(''));
      }
      lastErr = 'HTTP ' + r.status + ' — ' + (await r.text()).slice(0, 200);
      if ((r.status === 503 || r.status === 429) && attempt === 0) { await new Promise(res => setTimeout(res, 1500)); continue; }
      break;
    }
  }
  throw new Error(lastErr);
}

function json(obj, extra) {
  return new Response(JSON.stringify(obj), {
    headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, extra || {})
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    const hasKey = !!(env.GEMINI_API_KEY || env.LLM_API_KEY);

    if (url.pathname.endsWith('/_translate/status')) {
      return json({
        ok: hasKey,
        provider: env.LLM_API_KEY ? 'openai-compat' : 'gemini',
        model: env.LLM_MODEL || '(tự chọn)',
        chat: hasKey,
        audio: !!env.GEMINI_API_KEY   // phân tích âm thanh cần Gemini đa phương thức
      }, cors);
    }

    if (url.pathname.endsWith('/_chat') && request.method === 'POST') {
      if (!hasKey) return json({ error: 'no-key' }, cors);
      let messages, lang = '';
      try {
        const req = await request.json();
        lang = LANG_VI[req.lang] ? req.lang : '';
        messages = (req.messages || [])
          .filter(m => m && m.content && (m.role === 'user' || m.role === 'assistant'))
          .slice(-12);
      } catch (e) { return json({ error: 'body không hợp lệ' }, cors); }
      if (!messages.length) return json({ error: 'trống' }, cors);
      try {
        const reply = env.LLM_API_KEY
          ? await openaiChat(messages, env.LLM_BASE_URL || 'https://api.openai.com/v1', env.LLM_MODEL || 'gpt-4o-mini', env.LLM_API_KEY, lang)
          : await geminiChat(messages, env.GEMINI_API_KEY, lang);
        return json({ reply }, cors);
      } catch (e) { return json({ error: String(e && e.message || e) }, cors); }
    }

    if (url.pathname.endsWith('/_audio') && request.method === 'POST') {
      if (!env.GEMINI_API_KEY) return json({ error: 'no-gemini' }, cors);   // audio cần Gemini
      let audio, mime;
      try {
        const req = await request.json();
        audio = String(req.audio || '');
        mime = String(req.mime || 'audio/mpeg');
      } catch (e) { return json({ error: 'body không hợp lệ' }, cors); }
      if (!audio) return json({ error: 'thiếu âm thanh' }, cors);
      if (audio.length > 26000000) return json({ error: 'tệp quá lớn (giới hạn khoảng 18 MB)' }, cors);
      try {
        const result = await geminiAudio(audio, mime, env.GEMINI_API_KEY);
        return json(result, cors);
      } catch (e) { return json({ error: String(e && e.message || e) }, cors); }
    }

    if (url.pathname.endsWith('/_translate') && request.method === 'POST') {
      if (!hasKey) return json({ error: 'no-key' }, cors);
      let sentences;
      try {
        const req = await request.json();
        sentences = (req.sentences || []).map(s => String(s).replace(/\s+/g, ' ').trim())
                        .filter(Boolean).slice(0, 120);
      } catch (e) {
        return json({ error: 'body không hợp lệ' }, cors);
      }
      if (!sentences.length) return json({ translations: {} }, cors);

      try {
        const arr = env.LLM_API_KEY
          ? await callOpenAICompat(sentences, env.LLM_BASE_URL || 'https://api.openai.com/v1',
                                    env.LLM_MODEL || 'gpt-4o-mini', env.LLM_API_KEY)
          : await callGemini(sentences, env.GEMINI_API_KEY);
        const translations = {};
        sentences.forEach((s, i) => { translations[hash(s)] = arr[i]; });
        return json({ translations }, cors);
      } catch (e) {
        return json({ error: String(e && e.message || e) }, cors);
      }
    }

    return new Response('LangLab translate worker — POST /_translate', { headers: cors });
  }
};
