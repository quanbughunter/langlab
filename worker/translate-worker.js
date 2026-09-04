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
        model: env.LLM_MODEL || '(tự chọn)'
      }, cors);
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
