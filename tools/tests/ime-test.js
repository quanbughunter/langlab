/* ============================================================
   LangLab — BỘ GÕ NHIỀU NHỊP (tiếng Việt, Hàn, Nhật, Trung)
   ------------------------------------------------------------
   Gõ «as» ra «á», «dd» ra «đ»: bộ gõ gom nhiều phím thành một chữ,
   và trong lúc gom nó giữ một đoạn CHƯA CHỐT ngay trong ô nhập.
   Đụng vào ô giữa chừng — vẽ lại khung, gọi focus(), đổi chiều cao
   — là đoạn chưa chốt bị huỷ.

   Lỗi người dùng gặp: không nhắn được tiếng Việt CÓ DẤU cho Labi.
   Cùng một nguyên nhân cũng làm hỏng gõ tiếng Hàn / Nhật / Trung
   vào ô tra từ, chỉ là chưa ai để ý.

   jsdom không có bộ gõ thật, nên bộ này bắn đúng chuỗi sự kiện mà
   bộ gõ thật bắn: compositionstart → input… → compositionend.

   Chạy từ thư mục gốc repo: node tools/tests/ime-test.js
   ============================================================ */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync(process.cwd() + '/dist/langlab.html', 'utf8');
let pass = 0, fail = 0;
const check = async (name, fn) => {
  let r; try { r = await fn(); } catch(e){ r = e.message; }
  if (r === true){ pass++; console.log('ok   ' + name); }
  else { fail++; console.log('FAIL ' + name + ' — ' + r); }
};

const vc = new VirtualConsole();
const dom = new JSDOM(html, { runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc,
  url:'http://localhost:9999/', beforeParse(w){
    w.Element.prototype.getBBox = () => ({ x:0, y:0, width:100, height:100 });
    w.Element.prototype.scrollIntoView = function(){};
    w.Element.prototype.getBoundingClientRect = () => ({ left:0, top:0, width:300, height:300, right:300, bottom:300 });
    w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get:() => () => {} });
    w.scrollTo = () => {};
    w.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
    w.fetch = () => Promise.reject(new Error('x'));
    w.speechSynthesis = { getVoices:() => [], addEventListener(){}, removeEventListener(){}, cancel(){}, speak(){} };
    w.SpeechSynthesisUtterance = function(t){ this.text = t; };
  }});
const win = dom.window, doc = win.document;
const wait = ms => new Promise(r => setTimeout(r, ms));

/** Bắn đúng chuỗi sự kiện của một bộ gõ thật. */
function comp(el, text){
  el.dispatchEvent(new win.CompositionEvent('compositionstart', { bubbles:true }));
  el.value = text;
  el.dispatchEvent(new win.Event('input', { bubbles:true }));
}
function compEnd(el){
  el.dispatchEvent(new win.CompositionEvent('compositionend', { bubbles:true, data:el.value }));
}

setTimeout(async () => {
  await check('app phơi ra trạng thái bộ gõ để chỗ khác hỏi được', () =>
    (win.__ime && typeof win.__ime.composing === 'function') || 'không thấy window.__ime');

  await check('phím Enter lúc đang gom phím là để CHỐT chữ, không phải để gửi', () => {
    if (win.__ime.busy({ keyCode:229 }) !== true) return 'keyCode 229 phải tính là đang gom';
    if (win.__ime.busy({ isComposing:true }) !== true) return 'isComposing phải tính là đang gom';
    if (win.__ime.busy({ key:'Enter' }) !== false) return 'Enter bình thường lại bị chặn';
    return true;
  });

  /* ---------- chỗ hỏng thật: ô nhập bị vẽ lại giữa chừng ----------
     Nhánh #enq trong bộ bắt sự kiện input thay nguyên innerHTML của #view rồi
     gọi focus() — đúng kiểu thao tác làm bộ gõ mất đoạn chưa chốt. */
  const view = doc.getElementById('view');
  await check('dựng được cảnh thử trên chính ô tra từ của app', () => {
    if (!view) return 'không thấy #view';
    view.innerHTML = '<input id="enq" value="">';
    return !!doc.getElementById('enq') || 'không tạo được ô';
  });

  await check('ĐANG gom phím: ô nhập không bị thay mất', async () => {
    const el = doc.getElementById('enq');
    comp(el, 'ba');                                   // mới gõ «ba», chưa chốt thành «bà»
    await wait(30);
    const sau = doc.getElementById('enq');
    if (sau !== el) return 'ô nhập đã bị vẽ lại — bộ gõ sẽ mất dấu ở đây';
    if (sau.value !== 'ba') return 'nội dung đang gõ bị đổi: ' + sau.value;
    return true;
  });

  await check('CHỐT xong: app xử lí lại, nhận đúng chữ có dấu', async () => {
    const el = doc.getElementById('enq');
    el.value = 'bà';                                  // bộ gõ chốt thành chữ có dấu
    compEnd(el);
    await wait(60);
    if (win.__ime.composing() !== false) return 'vẫn tưởng đang gom phím';
    const sau = doc.getElementById('enq');
    if (!sau) return 'ô nhập biến mất sau khi chốt';
    if (sau.value !== 'bà') return 'chữ đã chốt không giữ được: ' + sau.value;
    return true;
  });

  await check('gõ bình thường (không qua bộ gõ) vẫn xử lí ngay như cũ', async () => {
    view.innerHTML = '<input id="enq" value="">';
    const el = doc.getElementById('enq');
    el.value = 'cat';
    el.dispatchEvent(new win.Event('input', { bubbles:true }));
    await wait(30);
    /* Nhánh #enq vẽ lại #view, nên ô cũ phải bị thay — đó là dấu hiệu bộ bắt
       sự kiện CÓ chạy khi không có bộ gõ chen vào. */
    return doc.getElementById('enq') !== el || 'bộ bắt sự kiện không chạy nữa';
  });

  console.log('\n' + pass + ' đạt / ' + fail + ' lỗi');
  process.exit(fail ? 1 : 0);
}, 1200);
