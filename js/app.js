/* ============================================================
   LangLab — logic ứng dụng
   ============================================================ */
(function(){
'use strict';

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- lưu trạng thái nhẹ ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem('langlab.' + k); return v === null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem('langlab.' + k, JSON.stringify(v)); } catch(e){} }
};

const state = {
  view: 'home',
  level: store.get('level', 'so-cap-1'),
  lesson: null,
  tab: 'vocab',
  jamo: 'ㄱ',
  syll: { cho:'ㅎ', jung:'ㅏ', jong:'ㄴ' },
  speed: 1,
  quiz: null,
  topik: null,
  deck: store.get('deck', []),
  done: store.get('done', {}),
  theme: store.get('theme', 'auto'),
  shadow: Object.assign(
    { raw:'', sents:[], breaks:{}, loop:1, gap:600, mimic:0, slow:false,
      trans:{}, showVi:true },
    store.get('shadow', {})
  )
};

/* ---------- nhiều cấp học ---------- */
function curLessons(){ return COURSE_KO.lessons.filter(l => l.level === state.level); }
function curLesson(){ return curLessons().find(l => l.no === state.lesson); }
function levelHasLessons(id){ return COURSE_KO.lessons.some(l => l.level === id); }
function curLevel(){ return (COURSE_KO.levels || []).find(x => x.id === state.level) || { vi:'Sơ cấp 1', ko:'초급 1' }; }

/* ---------- đọc số tiếng Hàn ---------- */
function sino4(n){                                   // 1..9999 (Hán Hàn), bỏ 일 trước 십/백/천
  const d = ['','일','이','삼','사','오','육','칠','팔','구'];
  const u = ['','십','백','천'];
  let s = '', pos = 0;
  while (n > 0){ const dig = n % 10; if (dig){ s = ((dig === 1 && pos > 0) ? '' : d[dig]) + u[pos] + s; } n = Math.floor(n / 10); pos++; }
  return s;
}
function koSino(n){                                   // số Hán Hàn (일, 이, 삼...)
  n = Math.floor(n);
  if (n === 0) return '영';
  if (n < 0) return '마이너스 ' + koSino(-n);
  const big = ['','만','억','조'];
  let out = '', g = 0;
  while (n > 0 && g < big.length){
    const part = n % 10000;
    if (part){ let ps = sino4(part); if (g === 1 && part === 1) ps = ''; out = ps + big[g] + out; }
    n = Math.floor(n / 10000); g++;
  }
  return out;
}
function koNative(n){                                 // số thuần Hàn 1..99 (하나, 둘...)
  n = Math.floor(n);
  if (n < 1 || n > 99) return '';
  const ones = ['','하나','둘','셋','넷','다섯','여섯','일곱','여덟','아홉'];
  const tens = ['','열','스물','서른','마흔','쉰','예순','일흔','여든','아흔'];
  return (tens[Math.floor(n / 10)] || '') + (ones[n % 10] || '');
}
function koNativeCounter(n){                          // dạng rút gọn trước đơn vị đếm
  return koNative(n).replace(/하나$/, '한').replace(/둘$/, '두').replace(/셋$/, '세').replace(/넷$/, '네').replace(/스물$/, '스무');
}

/* ============================================================
   THI THỬ TOPIK — đề tự soạn theo dạng thức, KHÔNG phải đề thật
   ============================================================ */
const TOPIK_TESTS = [
  {
    id:'topik1', badge:'TOPIK I', title:'Đề thi thử TOPIK I — Sơ cấp (đầy đủ)',
    official:'Đúng cấu trúc đề thật: Nghe 30 câu + Đọc 40 câu · 100 phút · 200 điểm',
    minutes:100, maxScore:200,
    questions:[
      /* ===== 듣기 (Nghe) 1–30 ===== */
      {sec:{ko:'듣기 [1~4] 다음을 듣고 물음에 맞는 대답을 고르십시오.', vi:'PHẦN NGHE · [1–4] Nghe câu hỏi và chọn câu trả lời đúng'},
        k:'listen', a:'학생이에요?', q:'', o:['네, 학생이에요.','네, 학생이 없어요.','아니요, 학생을 좋아해요.','아니요, 학생이 많아요.'], c:0, e:'Câu hỏi Có/Không → trả lời “네, 학생이에요”.'},
      {k:'listen', a:'이거 우산이에요?', q:'', o:['네, 우산이 아니에요.','네, 우산이에요.','아니요, 우산이 커요.','아니요, 우산을 사요.'], c:1, e:'“네” phải đi với khẳng định 우산이에요.'},
      {k:'listen', a:'공부를 언제 해요?', q:'', o:['도서관에서 해요.','친구하고 해요.','저녁에 해요.','한국어를 해요.'], c:2, e:'언제 = khi nào → trả lời thời gian (저녁에).'},
      {k:'listen', a:'어디에 가요?', q:'', o:['동생하고 가요.','시장에 가요.','버스로 가요.','오후에 가요.'], c:1, e:'어디 = ở đâu → trả lời nơi chốn (시장에).'},
      {sec:{ko:'[5~6] 다음을 듣고 이어지는 말을 고르십시오.', vi:'[5–6] Chọn lời đáp nối tiếp phù hợp'},
        k:'listen', a:'안녕히 계세요.', q:'', o:['안녕히 가세요.','반갑습니다.','처음 뵙겠습니다.','잘 먹겠습니다.'], c:0, e:'Người ở lại nói 계세요, người đi đáp 가세요.'},
      {k:'listen', a:'정말 고맙습니다.', q:'', o:['축하합니다.','괜찮습니다.','천만에요.','실례합니다.'], c:2, e:'Đáp lại lời cảm ơn → 천만에요 (không có chi).'},
      {sec:{ko:'[7~10] 여기는 어디입니까? 알맞은 것을 고르십시오.', vi:'[7–10] Đây là ở đâu?'},
        k:'listen', a:'가: 이 책 얼마예요? 나: 만 오천 원이에요.', q:'', o:['서점','은행','병원','공항'], c:0, e:'Mua sách, hỏi giá → hiệu sách (서점).'},
      {k:'listen', a:'가: 어디가 아프세요? 나: 목이 아파요.', q:'', o:['학교','병원','시장','우체국'], c:1, e:'Hỏi đau ở đâu → bệnh viện.'},
      {k:'listen', a:'가: 통장을 만들고 싶어요. 나: 여기 신청서를 쓰세요.', q:'', o:['은행','도서관','식당','약국'], c:0, e:'Mở sổ tài khoản → ngân hàng.'},
      {k:'listen', a:'가: 표 두 장 주세요. 나: 몇 시 영화를 보시겠어요?', q:'', o:['극장','서점','시장','공원'], c:0, e:'Mua vé xem phim → rạp chiếu phim (극장).'},
      {sec:{ko:'[11~14] 다음은 무엇에 대해 말하고 있습니까?', vi:'[11–14] Đang nói về chủ đề gì?'},
        k:'listen', a:'저는 형이 한 명 있어요. 여동생도 있어요.', q:'', o:['가족','친구','취미','날씨'], c:0, e:'Nói về anh, em gái → gia đình.'},
      {k:'listen', a:'오늘은 비가 오고 바람이 불어요.', q:'', o:['날씨','여행','운동','음식'], c:0, e:'Mưa, gió → thời tiết.'},
      {k:'listen', a:'주말에 등산을 하거나 영화를 봐요.', q:'', o:['취미','직업','계획','가족'], c:0, e:'Việc làm lúc rảnh → sở thích.'},
      {k:'listen', a:'저는 아홉 시에 회사에 가요. 여섯 시에 집에 와요.', q:'', o:['하루 일과','여행','쇼핑','건강'], c:0, e:'Đi làm, về nhà → công việc trong ngày.'},
      {sec:{ko:'[15~16] 다음을 듣고 알맞은 것을 고르십시오.', vi:'[15–16] Nghe hội thoại và chọn ý đúng'},
        k:'listen', a:'가: 여보세요, 민수 씨 있어요? 나: 지금 없는데요. 나중에 다시 전화하세요.', q:'들은 내용과 같은 것을 고르십시오.', o:['지금 민수 씨와 통화할 수 없어요.','민수 씨가 전화를 받았어요.','여자가 민수 씨예요.','남자는 집에 있어요.'], c:0, e:'Min-su không có mặt → chưa gọi được.'},
      {k:'listen', a:'가: 이번 주말에 같이 등산 갈까요? 나: 좋아요. 그런데 토요일은 바빠서 일요일에 가요.', q:'들은 내용과 같은 것을 고르십시오.', o:['두 사람은 토요일에 등산을 가요.','두 사람은 일요일에 등산을 가요.','여자는 등산을 싫어해요.','남자는 일요일에 바빠요.'], c:1, e:'Bận thứ Bảy nên đi Chủ nhật.'},
      {sec:{ko:'[17~21] 다음을 듣고 내용과 같은 것을 고르십시오.', vi:'[17–21] Chọn ý đúng với nội dung nghe được'},
        k:'listen', a:'저는 매일 아침에 커피를 마셔요. 하지만 저녁에는 안 마셔요.', q:'들은 내용과 같은 것을 고르십시오.', o:['저녁에 커피를 마셔요.','아침마다 커피를 마셔요.','커피를 안 좋아해요.','하루에 두 번 마셔요.'], c:1, e:'Sáng nào cũng uống, tối thì không.'},
      {k:'listen', a:'가: 무슨 운동을 좋아해요? 나: 저는 수영을 제일 좋아해요. 일주일에 세 번 해요.', q:'들은 내용과 같은 것을 고르십시오.', o:['여자는 수영을 일주일에 세 번 해요.','여자는 운동을 싫어해요.','여자는 축구를 좋아해요.','여자는 매일 수영해요.'], c:0, e:'Bơi 3 lần/tuần.'},
      {k:'listen', a:'내일은 친구 생일이에요. 그래서 선물을 사러 백화점에 갈 거예요.', q:'들은 내용과 같은 것을 고르십시오.', o:['오늘은 친구 생일이에요.','친구에게 선물을 줄 거예요.','백화점에서 일해요.','선물을 이미 샀어요.'], c:1, e:'Mai sinh nhật bạn, sẽ mua quà tặng.'},
      {k:'listen', a:'가: 방학에 뭐 할 거예요? 나: 고향에 갈 거예요. 부모님을 오랜만에 만나요.', q:'들은 내용과 같은 것을 고르십시오.', o:['남자는 방학에 고향에 가요.','남자는 부모님과 같이 살아요.','남자는 해외여행을 가요.','남자는 방학이 없어요.'], c:0, e:'Kỳ nghỉ về quê thăm bố mẹ.'},
      {k:'listen', a:'이 식당은 음식이 맛있고 값도 싸요. 그래서 사람이 항상 많아요.', q:'들은 내용과 같은 것을 고르십시오.', o:['이 식당은 비싸요.','이 식당은 사람이 적어요.','이 식당은 음식이 맛없어요.','이 식당은 인기가 많아요.'], c:3, e:'Ngon, rẻ, đông khách → được ưa chuộng.'},
      {sec:{ko:'[22~24] 다음을 듣고 중심 생각을 고르십시오.', vi:'[22–24] Chọn ý chính của người nói'},
        k:'listen', a:'가: 요즘 너무 피곤해요. 나: 그럼 좀 쉬는 게 어때요? 건강이 제일 중요해요.', q:'여자의 중심 생각으로 알맞은 것을 고르십시오.', o:['건강이 가장 중요해요.','일을 더 해야 해요.','여행을 가야 해요.','커피를 마셔야 해요.'], c:0, e:'“건강이 제일 중요” → ý chính là sức khoẻ quan trọng nhất.'},
      {k:'listen', a:'가: 한국어가 너무 어려워요. 나: 매일 조금씩 공부하면 실력이 늘어요. 포기하지 마세요.', q:'남자의 중심 생각으로 알맞은 것을 고르십시오.', o:['한국어는 포기하는 게 좋아요.','꾸준히 공부하면 실력이 늘어요.','한국어는 아주 쉬워요.','공부는 필요 없어요.'], c:1, e:'Học đều mỗi ngày sẽ tiến bộ, đừng bỏ cuộc.'},
      {k:'listen', a:'가: 새 휴대폰을 살까요? 나: 지금 쓰는 것도 괜찮잖아요. 돈을 아끼는 게 좋아요.', q:'남자의 중심 생각으로 알맞은 것을 고르십시오.', o:['새 휴대폰을 꼭 사야 해요.','돈을 아끼는 게 좋아요.','휴대폰이 고장 났어요.','휴대폰이 너무 비싸요.'], c:1, e:'Máy cũ vẫn ổn → nên tiết kiệm tiền.'},
      {sec:{ko:'[25~26] 다음을 듣고 물음에 답하십시오. (안내 방송)', vi:'[25–26] Nghe đoạn thông báo và trả lời'},
        k:'listen', a:'손님 여러분, 안녕하십니까? 오늘 저녁 일곱 시부터 지하 일 층에서 과일을 싸게 팝니다. 사과와 배를 반값에 살 수 있습니다. 많이 오세요.', q:'무엇에 대한 이야기입니까?', o:['과일 판매 안내','식당 예약','영화 시간','버스 시간'], c:0, e:'Thông báo bán hoa quả giảm giá.'},
      {k:'listen', a:'손님 여러분, 안녕하십니까? 오늘 저녁 일곱 시부터 지하 일 층에서 과일을 싸게 팝니다. 사과와 배를 반값에 살 수 있습니다. 많이 오세요.', q:'들은 내용과 같은 것을 고르십시오.', o:['과일을 반값에 팝니다.','오전에 과일을 팝니다.','지하 이 층에서 팝니다.','과일이 아주 비쌉니다.'], c:0, e:'“반값” = nửa giá.'},
      {sec:{ko:'[27~28] 다음을 듣고 물음에 답하십시오.', vi:'[27–28] Nghe hội thoại và trả lời'},
        k:'listen', a:'가: 수진 씨, 이번 주 토요일에 우리 집에서 파티를 하는데 올 수 있어요? 나: 네, 좋아요. 몇 시예요? 가: 저녁 여섯 시요. 음식은 제가 준비할게요. 나: 그럼 저는 음료수를 가져갈게요.', q:'두 사람은 무엇에 대해 이야기합니까?', o:['파티 준비','여행 계획','시험 공부','회사 업무'], c:0, e:'Bàn về chuẩn bị tiệc.'},
      {k:'listen', a:'가: 수진 씨, 이번 주 토요일에 우리 집에서 파티를 하는데 올 수 있어요? 나: 네, 좋아요. 몇 시예요? 가: 저녁 여섯 시요. 음식은 제가 준비할게요. 나: 그럼 저는 음료수를 가져갈게요.', q:'들은 내용과 같은 것을 고르십시오.', o:['파티는 토요일 저녁에 해요.','여자가 음식을 준비해요.','파티는 식당에서 해요.','남자는 파티에 안 가요.'], c:0, e:'Tiệc tối thứ Bảy; nam chuẩn bị đồ ăn, nữ mang nước.'},
      {sec:{ko:'[29~30] 다음을 듣고 물음에 답하십시오.', vi:'[29–30] Nghe hội thoại và trả lời'},
        k:'listen', a:'가: 민수 씨, 요즘 자전거로 회사에 다닌다면서요? 나: 네, 한 달 전부터요. 처음에는 힘들었는데 이제 건강해진 것 같아요. 가: 시간은 얼마나 걸려요? 나: 삼십 분쯤 걸려요. 지하철보다 조금 오래 걸리지만 운동도 돼서 좋아요.', q:'남자는 왜 자전거로 회사에 다닙니까?', o:['건강에 좋아서','돈이 없어서','지하철이 없어서','집이 아주 멀어서'], c:0, e:'Vừa đi làm vừa tập, thấy khoẻ hơn.'},
      {k:'listen', a:'가: 민수 씨, 요즘 자전거로 회사에 다닌다면서요? 나: 네, 한 달 전부터요. 처음에는 힘들었는데 이제 건강해진 것 같아요. 가: 시간은 얼마나 걸려요? 나: 삼십 분쯤 걸려요. 지하철보다 조금 오래 걸리지만 운동도 돼서 좋아요.', q:'들은 내용과 같은 것을 고르십시오.', o:['자전거로 삼십 분쯤 걸려요.','오늘부터 자전거를 타요.','자전거가 지하철보다 빨라요.','자전거가 힘들어서 그만뒀어요.'], c:0, e:'Mất khoảng 30 phút, chậm hơn tàu điện một chút.'},

      /* ===== 읽기 (Đọc) 31–70 ===== */
      {sec:{ko:'읽기 [31~33] 무엇에 대한 내용입니까? 알맞은 것을 고르십시오.', vi:'PHẦN ĐỌC · [31–33] Đoạn văn nói về chủ đề gì?'},
        k:'read', p:'저는 사과를 좋아합니다. 바나나도 좋아합니다.', q:'무엇에 대한 내용입니까?', o:['과일','운동','가족','계절'], c:0, e:'사과, 바나나 → hoa quả.'},
      {k:'read', p:'봄에는 따뜻합니다. 겨울에는 춥습니다.', q:'무엇에 대한 내용입니까?', o:['계절','시간','가격','건강'], c:0, e:'봄, 겨울 → mùa (계절).'},
      {k:'read', p:'제 방에는 침대가 있습니다. 책상도 있습니다.', q:'무엇에 대한 내용입니까?', o:['가구','음식','옷','교통'], c:0, e:'침대, 책상 → đồ nội thất (가구).'},
      {sec:{ko:'[34~39] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.', vi:'[34–39] Chọn từ/trợ từ phù hợp điền vào chỗ trống'},
        k:'read', p:'저는 학생입니다. 학교( ) 한국어를 공부합니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['에서','에게','도','만'], c:0, e:'Nơi diễn ra hành động → 에서.'},
      {k:'read', p:'날씨가 춥습니다. 그래서 창문을 ( ).', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['엽니다','닫습니다','봅니다','만듭니다'], c:1, e:'Lạnh nên “đóng” cửa sổ.'},
      {k:'read', p:'저는 매일 아침 ( )을/를 마십니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['밥','커피','책','노래'], c:1, e:'마시다 = uống → cà phê.'},
      {k:'read', p:'어제는 친구를 ( ). 정말 반가웠습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['만났습니다','먹었습니다','읽었습니다','탔습니다'], c:0, e:'친구를 만나다 = gặp bạn.'},
      {k:'read', p:'이 옷은 너무 큽니다. 작은 것( ) 주세요.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['을','에','에서','도'], c:0, e:'Tân ngữ → 작은 것을 주세요.'},
      {k:'read', p:'저는 한국 음식을 좋아합니다. ( ) 김치를 제일 좋아합니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['그러면','특히','하지만','그런데'], c:1, e:'특히 = đặc biệt (nhấn mạnh một thứ trong nhóm).'},
      {sec:{ko:'[40~42] 다음을 읽고 맞지 않는 것을 고르십시오.', vi:'[40–42] Đọc thông báo và chọn ý KHÔNG đúng'},
        k:'read', p:'[한국어 말하기 대회]  날짜: 5월 10일  ·  장소: 학생회관  ·  시간: 오후 2시  ·  신청: 4월 30일까지', q:'맞지 않는 것을 고르십시오.', o:['대회는 오월 십 일에 합니다.','오후 두 시에 시작합니다.','학생회관에서 합니다.','오월 삼십 일까지 신청합니다.'], c:3, e:'Hạn đăng ký là 30/4, không phải 30/5.'},
      {k:'read', p:'[도서관 이용 안내]  월~금: 9시~21시  ·  토요일: 9시~17시  ·  일요일: 쉽니다', q:'맞지 않는 것을 고르십시오.', o:['일요일에는 문을 닫습니다.','토요일에는 다섯 시까지 합니다.','평일에는 아홉 시에 엽니다.','토요일에는 밤 아홉 시까지 합니다.'], c:3, e:'Thứ Bảy chỉ đến 17h (5 giờ chiều).'},
      {k:'read', p:'[커피숍 아르바이트]  시간: 오전 8시~12시  ·  시급: 만 원  ·  연락: 전화', q:'맞지 않는 것을 고르십시오.', o:['오전에 일합니다.','한 시간에 만 원을 받습니다.','전화로 연락합니다.','저녁에 일합니다.'], c:3, e:'Làm buổi sáng, không phải buổi tối.'},
      {sec:{ko:'[43~45] 다음의 내용과 같은 것을 고르십시오.', vi:'[43–45] Chọn ý đúng với nội dung'},
        k:'read', p:'저는 어제 백화점에 갔습니다. 신발을 사고 싶었지만 너무 비싸서 안 샀습니다.', q:'내용과 같은 것을 고르십시오.', o:['신발을 샀습니다.','신발이 비쌌습니다.','백화점에 안 갔습니다.','신발이 쌌습니다.'], c:1, e:'Giày đắt nên không mua.'},
      {k:'read', p:'우리 반에는 학생이 스무 명 있습니다. 남학생이 여덟 명이고 여학생이 열두 명입니다.', q:'내용과 같은 것을 고르십시오.', o:['남학생이 더 많습니다.','여학생이 열두 명입니다.','학생이 모두 열 명입니다.','여학생이 여덟 명입니다.'], c:1, e:'Nữ 12, nam 8.'},
      {k:'read', p:'민수 씨는 요리를 잘합니다. 그래서 주말마다 친구들을 집에 초대해서 음식을 만들어 줍니다.', q:'내용과 같은 것을 고르십시오.', o:['민수 씨는 요리를 못합니다.','민수 씨는 식당에서 일합니다.','민수 씨는 주말에 친구를 초대합니다.','민수 씨는 혼자 밥을 먹습니다.'], c:2, e:'Cuối tuần mời bạn đến nhà.'},
      {sec:{ko:'[46~48] 다음을 읽고 중심 생각을 고르십시오.', vi:'[46–48] Chọn ý chính của đoạn văn'},
        k:'read', p:'저는 아침을 꼭 먹습니다. 아침을 먹으면 하루 종일 힘이 나고 공부도 잘됩니다.', q:'중심 생각을 고르십시오.', o:['아침을 먹는 것이 좋습니다.','아침을 먹으면 안 됩니다.','공부는 어렵습니다.','아침은 맛없습니다.'], c:0, e:'Ăn sáng có lợi.'},
      {k:'read', p:'운동은 건강에 좋습니다. 매일 삼십 분씩 걷기만 해도 건강해집니다. 그래서 저는 매일 걷습니다.', q:'중심 생각을 고르십시오.', o:['매일 운동하는 것이 건강에 좋습니다.','걷기는 너무 힘듭니다.','운동은 필요 없습니다.','삼십 분은 짧습니다.'], c:0, e:'Vận động mỗi ngày tốt cho sức khoẻ.'},
      {k:'read', p:'책을 많이 읽으면 여러 가지를 알게 됩니다. 그래서 저는 시간이 있을 때마다 책을 읽으려고 합니다.', q:'중심 생각을 고르십시오.', o:['책을 많이 읽는 것이 좋습니다.','책은 너무 비쌉니다.','읽을 시간이 없습니다.','책은 재미없습니다.'], c:0, e:'Đọc sách nhiều thì biết nhiều.'},
      {sec:{ko:'[49~50] 다음을 읽고 물음에 답하십시오.', vi:'[49–50] Đọc đoạn văn và trả lời (điền + nội dung)'},
        k:'read', p:'저는 지난 주말에 가족과 함께 바다에 갔습니다. 날씨가 아주 좋아서 사진도 많이 찍었습니다. 바다에서 수영도 하고 맛있는 음식도 먹었습니다. 정말 ( ) 하루였습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['즐거운','슬픈','무서운','심심한'], c:0, e:'Cả ngày vui vẻ → 즐거운.'},
      {k:'read', p:'저는 지난 주말에 가족과 함께 바다에 갔습니다. 날씨가 아주 좋아서 사진도 많이 찍었습니다. 바다에서 수영도 하고 맛있는 음식도 먹었습니다. 정말 즐거운 하루였습니다.', q:'내용과 같은 것을 고르십시오.', o:['혼자 바다에 갔습니다.','날씨가 나빴습니다.','사진을 많이 찍었습니다.','수영을 못 했습니다.'], c:2, e:'Chụp nhiều ảnh.'},
      {sec:{ko:'[51~52] 다음을 읽고 물음에 답하십시오.', vi:'[51–52] Đọc và trả lời'},
        k:'read', p:'한국에는 사계절이 있습니다. 봄에는 꽃이 피고 여름에는 덥습니다. 가을에는 단풍이 아름답고 겨울에는 눈이 옵니다. 저는 그중에서 ( ) 가을을 제일 좋아합니다. 단풍 구경을 갈 수 있기 때문입니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['특히','전혀','별로','아직'], c:0, e:'특히 = đặc biệt.'},
      {k:'read', p:'한국에는 사계절이 있습니다. 봄에는 꽃이 피고 여름에는 덥습니다. 가을에는 단풍이 아름답고 겨울에는 눈이 옵니다. 저는 그중에서 특히 가을을 제일 좋아합니다. 단풍 구경을 갈 수 있기 때문입니다.', q:'이 사람이 가을을 좋아하는 이유는 무엇입니까?', o:['눈이 와서','꽃이 피어서','단풍을 볼 수 있어서','날씨가 더워서'], c:2, e:'Vì được ngắm lá đỏ (단풍).'},
      {sec:{ko:'[53~54] 다음을 읽고 물음에 답하십시오.', vi:'[53–54] Đọc và trả lời'},
        k:'read', p:'제 취미는 사진 찍기입니다. 처음에는 그냥 재미로 시작했습니다. 그런데 사진을 찍으면 찍을수록 더 ( ). 요즘은 주말마다 카메라를 가지고 여러 곳에 갑니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['재미있어졌습니다','힘들어졌습니다','싫어졌습니다','비싸졌습니다'], c:0, e:'Càng chụp càng thấy thú vị.'},
      {k:'read', p:'제 취미는 사진 찍기입니다. 처음에는 그냥 재미로 시작했습니다. 그런데 사진을 찍으면 찍을수록 더 재미있어졌습니다. 요즘은 주말마다 카메라를 가지고 여러 곳에 갑니다.', q:'내용과 같은 것을 고르십시오.', o:['주말마다 사진을 찍으러 갑니다.','사진이 싫어졌습니다.','카메라가 없습니다.','사진을 이제 그만둡니다.'], c:0, e:'Cuối tuần nào cũng đi chụp.'},
      {sec:{ko:'[55~56] 다음을 읽고 물음에 답하십시오.', vi:'[55–56] Đọc và trả lời'},
        k:'read', p:'저는 한국 드라마를 좋아합니다. 드라마를 보면서 한국어도 배우고 한국 문화도 알게 됩니다. 그래서 저는 친구들에게 한국 드라마를 자주 ( ). 친구들도 재미있다고 합니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['추천합니다','싫어합니다','팝니다','만듭니다'], c:0, e:'Hay giới thiệu phim cho bạn → 추천합니다.'},
      {k:'read', p:'저는 한국 드라마를 좋아합니다. 드라마를 보면서 한국어도 배우고 한국 문화도 알게 됩니다. 그래서 저는 친구들에게 한국 드라마를 자주 추천합니다. 친구들도 재미있다고 합니다.', q:'내용과 같은 것을 고르십시오.', o:['드라마로 한국어를 배웁니다.','친구들은 드라마를 싫어합니다.','드라마가 재미없습니다.','한국어를 못 배웁니다.'], c:0, e:'Học tiếng Hàn qua phim.'},
      {sec:{ko:'[57~58] 다음을 순서대로 맞게 배열한 것을 고르십시오.', vi:'[57–58] Sắp xếp các câu theo đúng thứ tự'},
        k:'read', p:'(가) 그래서 병원에 갔습니다.\n(나) 어제 저는 배가 아팠습니다.\n(다) 의사 선생님이 약을 주었습니다.\n(라) 약을 먹고 지금은 괜찮습니다.', q:'순서대로 맞게 배열한 것을 고르십시오.', o:['(나)-(가)-(다)-(라)','(나)-(다)-(가)-(라)','(가)-(나)-(다)-(라)','(라)-(나)-(가)-(다)'], c:0, e:'Đau bụng → đi viện → bác sĩ cho thuốc → uống rồi khỏi.'},
      {k:'read', p:'(가) 표를 사서 기차를 탔습니다.\n(나) 저는 부산에 가고 싶었습니다.\n(다) 그래서 서울역에 갔습니다.\n(라) 세 시간 후에 부산에 도착했습니다.', q:'순서대로 맞게 배열한 것을 고르십시오.', o:['(나)-(다)-(가)-(라)','(가)-(나)-(다)-(라)','(나)-(가)-(다)-(라)','(다)-(나)-(가)-(라)'], c:0, e:'Muốn đi Busan → ra ga Seoul → mua vé lên tàu → 3 tiếng sau tới nơi.'},
      {sec:{ko:'[59~60] 다음을 읽고 물음에 답하십시오.', vi:'[59–60] Đọc đoạn dài và trả lời'},
        k:'read', p:'저는 대학교에서 한국어를 공부하는 유학생입니다. 한국에 온 지 벌써 일 년이 되었습니다. 처음에는 한국말을 잘 못해서 힘들었습니다. 특히 물건을 살 때나 길을 물어볼 때 많이 ( ). 하지만 매일 열심히 공부하고 한국 친구들과 이야기하면서 이제는 많이 좋아졌습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['당황했습니다','기뻤습니다','편했습니다','즐거웠습니다'], c:0, e:'Lúc đầu khó khăn nên bối rối (당황하다).'},
      {k:'read', p:'저는 대학교에서 한국어를 공부하는 유학생입니다. 한국에 온 지 벌써 일 년이 되었습니다. 처음에는 한국말을 잘 못해서 힘들었습니다. 특히 물건을 살 때나 길을 물어볼 때 많이 당황했습니다. 하지만 매일 열심히 공부하고 한국 친구들과 이야기하면서 이제는 많이 좋아졌습니다.', q:'내용과 같은 것을 고르십시오.', o:['한국에 온 지 일 년이 되었습니다.','지금도 한국말이 아주 어렵습니다.','한국 친구가 없습니다.','한국어 공부를 그만두었습니다.'], c:0, e:'Đã ở Hàn được một năm.'},
      {sec:{ko:'[61~62] 다음을 읽고 물음에 답하십시오.', vi:'[61–62] Đọc đoạn dài và trả lời'},
        k:'read', p:'요즘 사람들은 스마트폰을 많이 사용합니다. 스마트폰으로 전화도 하고 사진도 찍고 인터넷도 합니다. 아주 ( ). 하지만 스마트폰을 너무 오래 보면 눈이 나빠질 수 있습니다. 그래서 가끔 쉬면서 사용하는 것이 좋습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['편리합니다','불편합니다','위험합니다','비쌉니다'], c:0, e:'Làm được nhiều việc → tiện lợi.'},
      {k:'read', p:'요즘 사람들은 스마트폰을 많이 사용합니다. 스마트폰으로 전화도 하고 사진도 찍고 인터넷도 합니다. 아주 편리합니다. 하지만 스마트폰을 너무 오래 보면 눈이 나빠질 수 있습니다. 그래서 가끔 쉬면서 사용하는 것이 좋습니다.', q:'이 글의 중심 생각을 고르십시오.', o:['스마트폰을 쉬면서 사용하는 게 좋습니다.','스마트폰을 사면 안 됩니다.','스마트폰은 전화만 됩니다.','스마트폰은 눈에 좋습니다.'], c:0, e:'Nên dùng điều độ, có nghỉ.'},
      {sec:{ko:'[63~64] 다음을 읽고 물음에 답하십시오.', vi:'[63–64] Đọc thư mời và trả lời'},
        k:'read', p:'받는 사람: 김민수\n제목: 모임 안내\n\n민수 씨, 안녕하세요. 다음 주 금요일 저녁 일곱 시에 한국어 반 친구들 모임이 있습니다. 장소는 학교 앞 식당입니다. 오실 수 있으면 수요일까지 저에게 연락해 주세요.  - 수진 드림', q:'수진 씨는 왜 이 글을 썼습니까?', o:['모임을 안내하려고','식당을 소개하려고','숙제를 물어보려고','선물을 주려고'], c:0, e:'Viết để thông báo buổi họp mặt.'},
      {k:'read', p:'받는 사람: 김민수\n제목: 모임 안내\n\n민수 씨, 안녕하세요. 다음 주 금요일 저녁 일곱 시에 한국어 반 친구들 모임이 있습니다. 장소는 학교 앞 식당입니다. 오실 수 있으면 수요일까지 저에게 연락해 주세요.  - 수진 드림', q:'내용과 같은 것을 고르십시오.', o:['모임은 금요일 저녁에 있습니다.','모임은 학교 안에서 합니다.','월요일까지 연락해야 합니다.','수진 씨는 모임에 안 갑니다.'], c:0, e:'Họp tối thứ Sáu tại quán ăn trước trường, báo trước thứ Tư.'},
      {sec:{ko:'[65~66] 다음을 읽고 물음에 답하십시오.', vi:'[65–66] Đọc đoạn dài và trả lời'},
        k:'read', p:'저는 한 달 전부터 아침마다 운동을 시작했습니다. 매일 일찍 일어나서 삼십 분 동안 공원을 걷습니다. 처음에는 일찍 일어나는 것이 ( ). 그런데 지금은 습관이 되어서 괜찮습니다. 운동을 하니까 몸도 건강해지고 기분도 좋아졌습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['힘들었습니다','즐거웠습니다','쉬웠습니다','재미있었습니다'], c:0, e:'Lúc đầu dậy sớm rất vất vả.'},
      {k:'read', p:'저는 한 달 전부터 아침마다 운동을 시작했습니다. 매일 일찍 일어나서 삼십 분 동안 공원을 걷습니다. 처음에는 일찍 일어나는 것이 힘들었습니다. 그런데 지금은 습관이 되어서 괜찮습니다. 운동을 하니까 몸도 건강해지고 기분도 좋아졌습니다.', q:'내용과 같은 것을 고르십시오.', o:['아침마다 공원에서 걷습니다.','저녁에 운동합니다.','운동을 어제 시작했습니다.','운동이 힘들어서 그만뒀습니다.'], c:0, e:'Sáng nào cũng đi bộ ở công viên.'},
      {sec:{ko:'[67~68] 다음을 읽고 물음에 답하십시오.', vi:'[67–68] Đọc đoạn văn hoá và trả lời'},
        k:'read', p:'한국에서는 이사를 하면 이웃에게 떡을 나누어 주는 문화가 있습니다. 이것은 앞으로 사이좋게 지내자는 인사입니다. 요즘에는 이런 문화가 많이 ( ) 있지만, 아직도 떡을 나누는 사람들이 있습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['사라지고','늘어나고','시작되고','비싸지고'], c:0, e:'Văn hoá này đang dần mất đi (사라지다).'},
      {k:'read', p:'한국에서는 이사를 하면 이웃에게 떡을 나누어 주는 문화가 있습니다. 이것은 앞으로 사이좋게 지내자는 인사입니다. 요즘에는 이런 문화가 많이 사라지고 있지만, 아직도 떡을 나누는 사람들이 있습니다.', q:'내용과 같은 것을 고르십시오.', o:['이사할 때 이웃에게 떡을 줍니다.','떡을 주는 것은 새로운 문화입니다.','요즘 떡을 주는 사람이 많아집니다.','떡은 아주 비쌉니다.'], c:0, e:'Khi chuyển nhà tặng bánh tteok cho hàng xóm.'},
      {sec:{ko:'[69~70] 다음을 읽고 물음에 답하십시오.', vi:'[69–70] Đọc đoạn dài và trả lời'},
        k:'read', p:'저는 지난달에 처음으로 김치를 만들어 보았습니다. 인터넷을 보면서 배추와 여러 가지 재료를 준비했습니다. 생각보다 시간이 오래 걸리고 ( ). 하지만 제가 직접 만든 김치를 먹으니까 정말 맛있고 뿌듯했습니다. 다음에는 가족에게도 만들어 주고 싶습니다.', q:'( )에 들어갈 알맞은 것을 고르십시오.', o:['힘들었습니다','쉬웠습니다','빨랐습니다','심심했습니다'], c:0, e:'Mất nhiều thời gian và vất vả hơn tưởng.'},
      {k:'read', p:'저는 지난달에 처음으로 김치를 만들어 보았습니다. 인터넷을 보면서 배추와 여러 가지 재료를 준비했습니다. 생각보다 시간이 오래 걸리고 힘들었습니다. 하지만 제가 직접 만든 김치를 먹으니까 정말 맛있고 뿌듯했습니다. 다음에는 가족에게도 만들어 주고 싶습니다.', q:'내용과 같은 것을 고르십시오.', o:['김치를 처음 만들어 봤습니다.','김치를 사서 먹었습니다.','김치 만들기가 쉬웠습니다.','김치가 맛없었습니다.'], c:0, e:'Lần đầu tự làm kimchi.'}
    ]
  },
  {
    id:'topik2', badge:'TOPIK II', title:'Đề luyện nhanh TOPIK II — Trung/Cao cấp',
    official:'Cấu trúc đầy đủ: Nghe 50 + Viết 4 + Đọc 50 · 180 phút. Đây là phần luyện Nghe–Đọc rút gọn.',
    minutes:30,
    questions:[
      {sec:{ko:'듣기 · 다음을 듣고 물음에 답하십시오.', vi:'PHẦN NGHE'},
        k:'listen', a:'가: 이번 주말에 등산 갈래요? 나: 미안해요. 주말에 아르바이트를 하기로 했어요.', q:'여자는 왜 등산을 갈 수 없습니까?', o:['몸이 아파서','아르바이트를 해서','날씨가 나빠서','약속을 잊어서'], c:1, e:'Đã hẹn làm thêm cuối tuần.'},
      {k:'listen', a:'요즘 미세먼지 때문에 마스크를 쓰는 사람이 많아졌습니다.', q:'무엇에 대한 이야기입니까?', o:['환경과 건강','여행 계획','음식 문화','운동 방법'], c:0, e:'Bụi mịn + khẩu trang → môi trường và sức khoẻ.'},
      {k:'listen', a:'가: 시험 잘 봤어요? 나: 아니요, 미리 공부했어야 했는데 후회돼요.', q:'남자의 기분은 어떻습니까?', o:['기쁩니다','후회합니다','놀랍니다','만족합니다'], c:1, e:'“후회돼요” = hối tiếc.'},
      {k:'listen', a:'이 영화는 슬프지만 정말 감동적이어서 꼭 보라고 추천하고 싶어요.', q:'이 사람은 영화를 어떻게 생각합니까?', o:['지루하다','감동적이다','무섭다','어렵다'], c:1, e:'Cảm động nên muốn giới thiệu.'},
      {k:'listen', a:'가: 여보세요, 지금 통화 괜찮으세요? 나: 죄송한데 회의 중이라서 이따가 전화드릴게요.', q:'여자는 왜 지금 통화할 수 없습니까?', o:['집에 없어서','회의 중이라서','전화가 고장 나서','시간이 많아서'], c:1, e:'Vì đang họp.'},
      {sec:{ko:'읽기 · 다음을 읽고 물음에 답하십시오.', vi:'PHẦN ĐỌC'},
        k:'read', p:'한국에서는 설날에 어른들께 세배를 합니다. 세배를 하면 어른들이 덕담과 함께 세뱃돈을 주십니다.', q:'세배를 하면 무엇을 받습니까?', o:['선물','세뱃돈','떡국','편지'], c:1, e:'세뱃돈 = tiền lì xì đầu năm.'},
      {k:'read', q:'빈칸에 알맞은 것을 고르십시오: 열심히 준비한 ( ) 시험에 합격했어요.', o:['덕분에','때문에','바람에','대신에'], c:0, e:'덕분에 = nhờ (kết quả tốt).'},
      {k:'read', p:'도시는 편리한 반면에 공기가 나쁩니다. 그래서 요즘 시골로 이사하는 사람이 늘고 있습니다.', q:'글의 내용과 같은 것은?', o:['도시는 공기가 좋다','시골로 가는 사람이 많아진다','도시는 불편하다','시골은 복잡하다'], c:1, e:'Người về quê đang tăng.'},
      {k:'read', q:'빈칸에 알맞은 것을 고르십시오: 한국어는 공부하면 ( ) 재미있어요.', o:['할수록','하지만','하니까','하려고'], c:0, e:'을수록 = càng… càng.'},
      {k:'read', p:'제 친구는 성격이 활발한 편입니다. 그래서 사람들과 쉽게 친해집니다. 하지만 가끔 실수를 해서 후회할 때도 있습니다.', q:'친구의 성격으로 알맞은 것은?', o:['조용하다','활발하다','게으르다','차갑다'], c:1, e:'“활발한 편” = thuộc kiểu năng động.'},
      {k:'read', q:'빈칸에 알맞은 것을 고르십시오: 친구가 내일 ( ) 했어요.', o:['온다고','오다고','올다고','와다고'], c:0, e:'Gián tiếp: 오다 → 온다고 하다.'},
      {k:'read', p:'일회용품 사용을 줄이면 환경을 보호할 수 있습니다. 작은 실천이 지구를 살립니다.', q:'글쓴이가 하고 싶은 말은?', o:['일회용품을 많이 쓰자','환경을 위해 실천하자','여행을 자주 가자','돈을 아끼자'], c:1, e:'Hãy hành động vì môi trường.'},
      {k:'read', q:'빈칸에 알맞은 것을 고르십시오: 어제 시험 공부를 ( ) 잠을 못 잤어요.', o:['하느라고','하지만','하려고','하는데'], c:0, e:'느라고 = vì mải làm việc này.'},
      {k:'read', q:'관용 표현 「손이 크다」의 뜻으로 알맞은 것은?', o:['인심이 좋다','키가 크다','힘이 세다','바쁘다'], c:0, e:'“손이 크다” (nghĩa bóng) = hào phóng, rộng rãi.'},
      {k:'read', p:'가: 요즘도 매일 운동해요? 나: 네, 꾸준히 하다 보니 이제 습관이 됐어요.', q:'「나」에 대한 설명으로 알맞은 것은?', o:['운동을 그만두었다','운동이 습관이 되었다','운동을 싫어한다','가끔만 운동한다'], c:1, e:'Làm mãi thành thói quen.'}
    ]
  }
];

let topikTimerId = null;
function topikClock(s){ s = Math.max(0, s); const m = Math.floor(s / 60); return String(m).padStart(2,'0') + ':' + String(s % 60).padStart(2,'0'); }
function topikStopTimer(){ if (topikTimerId){ clearInterval(topikTimerId); topikTimerId = null; } }
function topikStartTest(id){
  const test = TOPIK_TESTS.find(x => x.id === id);
  if (!test) return;
  state.topik = { testId:id, phase:'doing', answers:{}, remaining: test.minutes * 60 };
  render(); window.scrollTo({ top:0 });
}
function mountTopik(){
  topikStopTimer();
  topikTimerId = setInterval(() => {
    const S = state.topik;
    const el = $('#topikTimer');
    if (!S || S.phase !== 'doing' || !el){ topikStopTimer(); return; }
    S.remaining--;
    el.textContent = topikClock(S.remaining);
    if (S.remaining <= 60) el.classList.add('low');
    if (S.remaining <= 0){ topikStopTimer(); S.phase = 'done'; render(); window.scrollTo({ top:0 }); }
  }, 1000);
}
function topikQ(q, i, chosen){
  const sec = q.sec ? `<div class="tk-section"><span class="tk-sec-ko ko">${esc(q.sec.ko)}</span><span class="tk-sec-vi">${esc(q.sec.vi)}</span></div>` : '';
  const head = q.k === 'listen'
    ? `<button class="pbtn" data-speak="${esc(q.a)}"><svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe câu ${i + 1}</button>`
    : (q.p ? `<div class="tk-passage ko">${esc(q.p)}</div>` : '');
  const opts = q.o.map((o, oi) => `
    <button class="tk-opt${chosen === oi ? ' on' : ''}" data-topik-ans="${i}" data-opt="${oi}">
      <span class="tk-onum">${oi + 1}</span><span class="${/[가-힣]/.test(o) ? 'ko' : ''}">${esc(o)}</span>
    </button>`).join('');
  return `${sec}<div class="tk-q">
    <div class="tk-q-no">Câu ${i + 1} <span class="tk-tag">${q.k === 'listen' ? '듣기 · Nghe' : '읽기 · Đọc'}</span></div>
    ${head}
    ${q.q ? `<div class="tk-q-text ko">${esc(q.q)}</div>` : ''}
    <div class="tk-opts">${opts}</div>
  </div>`;
}
function topikResult(t){
  const S = state.topik;
  let correct = 0;
  t.questions.forEach((q, i) => { if (S.answers[i] === q.c) correct++; });
  const total = t.questions.length, pct = Math.round(correct / total * 100);
  const used = topikClock(t.minutes * 60 - Math.max(0, S.remaining));
  let scoreLine = '';
  if (t.maxScore){
    const score = Math.round(correct / total * t.maxScore);
    const lv = score >= 140 ? 'ước lượng đạt <b>Cấp 2 (2급)</b>' : score >= 80 ? 'ước lượng đạt <b>Cấp 1 (1급)</b>' : 'chưa đạt Cấp 1 — cần luyện thêm';
    scoreLine = ` · khoảng <b>${score}/${t.maxScore}</b> điểm · ${lv}`;
  }
  return `
  <div class="page-head">
    <span class="eyebrow">${esc(t.badge)} · Kết quả</span>
    <h1>${correct}/${total} câu đúng</h1>
    <p>${pct >= 80 ? 'Tuyệt vời! 🎉' : pct >= 60 ? 'Khá tốt — cố thêm chút nữa nhé.' : 'Cần luyện thêm — xem kỹ đáp án và giải thích bên dưới.'} Thời gian đã dùng: ${used} / ${t.minutes} phút.${scoreLine}</p>
    ${t.maxScore ? '<p class="tk-note-small">Điểm và cấp độ ở đây chỉ ước lượng theo tỉ lệ câu đúng, không phải cách chấm chính thức của TOPIK.</p>' : ''}
    <div class="wp-actions" style="padding:6px 0 0">
      <button class="pbtn primary" data-topik-retry="${t.id}">Làm lại đề này</button>
      <button class="pbtn" data-topik-home="1">Chọn đề khác</button>
    </div>
  </div>
  <div class="topik-quiz review">
    ${t.questions.map((q, i) => {
      const chosen = S.answers[i];
      return `<div class="tk-q">
        <div class="tk-q-no">Câu ${i + 1} <span class="tk-tag">${q.k === 'listen' ? '듣기' : '읽기'}</span> ${chosen === q.c ? '<span class="tk-ok">✓ Đúng</span>' : '<span class="tk-no">✗ ' + (chosen === undefined ? 'Chưa chọn' : 'Sai') + '</span>'}</div>
        ${q.k === 'listen' ? `<button class="pbtn" data-speak="${esc(q.a)}">Nghe lại</button>` : (q.p ? `<div class="tk-passage ko">${esc(q.p)}</div>` : '')}
        <div class="tk-q-text ko">${esc(q.q)}</div>
        <div class="tk-opts">${q.o.map((o, oi) => `<div class="tk-opt${oi === q.c ? ' correct' : ''}${oi === chosen && oi !== q.c ? ' wrong' : ''}"><span class="tk-onum">${oi + 1}</span><span class="${/[가-힣]/.test(o) ? 'ko' : ''}">${esc(o)}</span></div>`).join('')}</div>
        ${q.e ? `<div class="tk-explain"><b>Giải thích:</b> ${esc(q.e)}</div>` : ''}
      </div>`;
    }).join('')}
  </div>`;
}
function topikView(){
  const S = state.topik;
  if (!S || S.phase === 'intro' || !S.testId){
    return `
    <div class="page-head">
      <span class="eyebrow">TOPIK · Thi thử</span>
      <h1>Thi thử TOPIK</h1>
      <p>Tìm hiểu TOPIK và luyện với <b>đề đầy đủ đúng cấu trúc đề thật</b> — có <b>bấm giờ</b>, chấm điểm, <b>đáp án kèm giải thích</b>. Câu Nghe phát bằng giọng đọc (bấm nút “Nghe”). Đề do LangLab tự soạn theo dạng thức, không phải đề thi chính thức.</p>
    </div>

    <div class="tk-guide">
      <div class="tkg-card">
        <h4>TOPIK là gì?</h4>
        <p>TOPIK (<span class="ko">한국어능력시험</span> · Test of Proficiency in Korean) là kỳ thi năng lực tiếng Hàn chính thức do Viện Giáo dục Quốc tế Quốc gia Hàn Quốc (NIIED), thuộc Bộ Giáo dục Hàn Quốc, tổ chức. Kỳ thi đánh giá năng lực tiếng Hàn của người nước ngoài và kiều bào, chia thành <b>6 cấp độ</b> (1–6).</p>
      </div>
      <div class="tkg-card">
        <h4>Chứng chỉ dùng để làm gì?</h4>
        <ul>
          <li><b>Du học:</b> điều kiện nhập học đại học / cao học ở Hàn (thường cần cấp 3–4 trở lên).</li>
          <li><b>Xin việc &amp; visa:</b> hồ sơ xin việc, visa lao động (E-7), cộng điểm cho lao động EPS.</li>
          <li><b>Định cư, nhập tịch:</b> được cộng điểm.</li>
          <li>Chứng chỉ có <b>hiệu lực 2 năm</b>.</li>
        </ul>
      </div>
      <div class="tkg-card wide">
        <h4>Cấu trúc &amp; thời gian một đề TOPIK</h4>
        <div class="tkg-table">
          <div class="tkg-row head"><span>Kỳ thi</span><span>Kỹ năng</span><span>Số câu</span><span>Thời gian</span></div>
          <div class="tkg-row"><span><b>TOPIK I</b><br><small>Sơ cấp · cấp 1–2</small></span><span>Nghe 듣기<br>Đọc 읽기</span><span>30<br>40</span><span>40 phút<br>60 phút</span></div>
          <div class="tkg-row total"><span></span><span>Tổng</span><span>70 câu</span><span>100 phút · 200 điểm</span></div>
          <div class="tkg-row"><span><b>TOPIK II</b><br><small>Trung–Cao · cấp 3–6</small></span><span>Nghe 듣기<br>Viết 쓰기<br>Đọc 읽기</span><span>50<br>4<br>50</span><span>60 phút<br>50 phút<br>70 phút</span></div>
          <div class="tkg-row total"><span></span><span>Tổng</span><span>104 câu</span><span>180 phút · 300 điểm</span></div>
        </div>
        <p class="tkg-note">TOPIK I thi liền một buổi (Nghe rồi Đọc). TOPIK II chia hai buổi: buổi 1 Nghe + Viết (110 phút), nghỉ giải lao, buổi 2 Đọc (70 phút). Phần Nghe–Đọc là trắc nghiệm 4 đáp án; phần Viết TOPIK II là tự luận (điền câu, viết đoạn 200–300 chữ và bài luận 600–700 chữ).</p>
      </div>
      <div class="tkg-card">
        <h4>Cách xét cấp độ</h4>
        <p><b>TOPIK I:</b> ≥ 80 điểm → Cấp 1; ≥ 140 → Cấp 2.</p>
        <p><b>TOPIK II:</b> ≥ 120 → Cấp 3; ≥ 150 → Cấp 4; ≥ 190 → Cấp 5; ≥ 230 → Cấp 6.</p>
        <p>Chỉ cần đạt ngưỡng điểm là được cấp tương ứng.</p>
      </div>
      <div class="tkg-card">
        <h4>Gợi ý chiến lược ôn</h4>
        <ul>
          <li>Làm quen <b>đúng dạng đề</b> và <b>bấm giờ</b> như thi thật.</li>
          <li>Học từ vựng theo <b>chủ đề</b>, luyện <b>nghe mỗi ngày</b>.</li>
          <li>Phần Đọc: đọc câu hỏi trước rồi tìm ý trong đoạn.</li>
          <li>TOPIK II: luyện <b>Viết</b> theo mẫu (biểu đồ, bài luận).</li>
          <li>Làm đề thử định kỳ để theo dõi tiến bộ.</li>
        </ul>
      </div>
    </div>

    <h2 class="tk-list-title">Chọn một đề để bắt đầu</h2>
    <div class="topik-list">
      ${TOPIK_TESTS.map(t => `
        <div class="topik-card">
          <span class="tk-badge">${esc(t.badge)}</span>
          <h3>${esc(t.title)}</h3>
          <p class="tk-meta">${t.questions.length} câu · ${t.minutes} phút · có đáp án</p>
          <p class="tk-official">${esc(t.official)}</p>
          <button class="pbtn primary" data-topik-start="${t.id}">Bắt đầu làm bài</button>
        </div>`).join('')}
    </div>
    <p class="tk-disclaimer">Đề do LangLab biên soạn theo cấu trúc TOPIK để luyện tập, không phải đề thi chính thức của Viện Giáo dục Quốc tế Quốc gia Hàn Quốc (NIIED).</p>`;
  }
  const t = TOPIK_TESTS.find(x => x.id === S.testId);
  if (S.phase === 'done') return topikResult(t);
  return `
  <div class="topik-bar" id="topikBar">
    <div class="tk-bar-info"><span class="eyebrow">${esc(t.badge)}</span><b>${esc(t.title)}</b></div>
    <div class="tk-timer" id="topikTimer">${topikClock(S.remaining)}</div>
    <button class="pbtn primary" data-topik-submit="1">Nộp bài</button>
  </div>
  <div class="topik-quiz">
    ${t.questions.map((q, i) => topikQ(q, i, S.answers[i])).join('')}
  </div>
  <div class="topik-foot"><button class="pbtn primary" data-topik-submit="1">Nộp bài · chấm điểm</button></div>`;
}

/* ---------- thông báo ngắn ---------- */
let toastTimer;
function toast(msg){
  let el = $('#toast');
  if (!el){ el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}

/* ---------- phát âm ---------- */
function ensureVoice(){
  if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return false; }
  if (!Speech.hasKorean()){
    toast('Máy chưa có giọng tiếng Hàn — thử mở bằng Microsoft Edge để có giọng Hàn');
    return false;
  }
  return true;
}

/* Ưu tiên tệp mp3 thu sẵn bằng giọng neural; giọng máy chỉ là dự phòng. */
function speak(text, opts){
  opts = opts || {};
  Speech.stop();
  TTS.play(text, {
    rate: opts.slow ? .72 : 1,
    onEnd: opts.onEnd,
    onFail(){
      if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return; }
      Speech.onReady(() => {
        if (!ensureVoice()) return;
        Speech.speak(text, { rate: opts.slow ? Math.max(.45, Speech.cfg.rate - .3) : opts.rate, onEnd: opts.onEnd });
      });
    }
  });
}

function speakSlow(text){ speak(text, { slow: true }); }

function stopAudio(){
  shToken++;
  TTS.stop(); Speech.stop();
  $$('.dlg-row').forEach(r => r.classList.remove('speaking'));
  $$('.sh-row').forEach(r => r.classList.remove('on', 'waiting'));
  $$('.sh-chunk').forEach(c => c.classList.remove('on'));
}

/* ============================================================
   VẼ NÉT — bộ máy dùng chung cho chữ cái đơn và âm tiết ghép
   ============================================================ */

function guideSvg(){
  return `<svg class="guide" viewBox="0 0 100 100" aria-hidden="true">
    <rect x="4" y="4" width="92" height="92" rx="2"></rect>
    <line x1="50" y1="4" x2="50" y2="96"></line>
    <line x1="4" y1="50" x2="96" y2="50"></line>
    <line x1="4" y1="4" x2="96" y2="96"></line>
    <line x1="96" y1="4" x2="4" y2="96"></line>
  </svg>`;
}

/* strokes: [{d, transform?}] */
function renderGlyph(host, strokes){
  const layer = cls => strokes.map((s, i) =>
    `<g${s.transform ? ` transform="${s.transform}"` : ''}><path d="${s.d}" class="${cls}" data-i="${i}"></path></g>`
  ).join('');

  host.innerHTML = guideSvg() +
    `<svg class="glyph" viewBox="0 0 100 100" role="img">
       <g class="ghosts">${layer('ghost')}</g>
       <g class="paths">${layer('ink')}</g>
       <g class="nums"></g>
     </svg>`;

  const svg = $('.glyph', host);
  const nums = $('.nums', svg);
  $$('.paths path', svg).forEach((p, i) => {
    const len = p.getTotalLength();
    p.dataset.len = len;
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = 0;
    // số thứ tự nét đặt ở điểm bắt đầu
    const pt = p.getPointAtLength(0);
    const m  = p.parentNode.transform.baseVal.consolidate();
    const g  = m ? { x: m.matrix.a * pt.x + m.matrix.e, y: m.matrix.d * pt.y + m.matrix.f } : pt;
    const ns = 'http://www.w3.org/2000/svg';
    const c  = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', g.x); c.setAttribute('cy', g.y); c.setAttribute('r', 5.4);
    c.setAttribute('class', 'snum-bg'); c.dataset.i = i;
    const t = document.createElementNS(ns, 'text');
    t.setAttribute('x', g.x); t.setAttribute('y', g.y + 2.5);
    t.setAttribute('text-anchor', 'middle'); t.setAttribute('class', 'snum'); t.dataset.i = i;
    t.textContent = i + 1;
    nums.appendChild(c); nums.appendChild(t);
  });
  return svg;
}

function showUpTo(svg, n){          // hiển thị tĩnh: n nét đầu tiên đã viết xong
  $$('.paths path', svg).forEach((p, i) => {
    p.style.transition = 'none';
    p.setAttribute('class', i < n ? 'done' : (i === n ? 'live' : 'ink'));
    p.style.strokeDashoffset = i <= n ? 0 : p.dataset.len;
  });
  $$('.snum,.snum-bg', svg).forEach(el => { el.style.opacity = (+el.dataset.i <= n) ? 1 : .3; });
}

let animToken = 0;
function playStrokes(svg, speed, onStep){
  const token = ++animToken;
  const paths = $$('.paths path', svg);
  paths.forEach(p => {
    p.style.transition = 'none';
    p.setAttribute('class', 'ink');
    p.style.strokeDashoffset = p.dataset.len;
  });
  $$('.snum,.snum-bg', svg).forEach(el => el.style.opacity = .25);

  let i = 0;
  const step = () => {
    if (token !== animToken) return;
    if (i >= paths.length){ if (onStep) onStep(paths.length - 1, true); return; }
    const p = paths[i];
    const len = +p.dataset.len;
    const dur = Math.max(260, Math.min(1400, len * 11)) / speed;
    p.setAttribute('class', 'live');
    p.style.transition = 'none';
    p.style.strokeDashoffset = len;
    $$('.snum,.snum-bg', svg).forEach(el => { if (+el.dataset.i === i) el.style.opacity = 1; });
    if (onStep) onStep(i, false);
    // ép trình duyệt tính lại rồi mới chạy transition
    void p.getBoundingClientRect();
    p.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(.4,.05,.35,1)`;
    p.style.strokeDashoffset = 0;
    setTimeout(() => {
      if (token !== animToken) return;
      p.setAttribute('class', 'done');
      i++;
      setTimeout(step, 190 / speed);
    }, dur + 20);
  };
  step();
}

/* ============================================================
   CÁC MÀN HÌNH
   ============================================================ */

const VIEWS = {

/* ---------------- Khoá học ---------------- */
home(){
  const L = curLessons();
  const lv = curLevel();
  return `
  <div class="page-head">
    <span class="eyebrow">Khoá tiếng Hàn · ${esc(lv.ko)}</span>
    <h1>Học theo bài, đúng thứ tự của giáo trình</h1>
    <p>${L.length} bài của <em>${esc(lv.vi)}</em>, mỗi bài giữ nguyên cấu trúc quen thuộc: từ vựng → ngữ pháp → hội thoại → phát âm → văn hoá. Bấm vào một bài để bắt đầu.</p>
  </div>

  <div class="level-strip">
    ${COURSE_KO.levels.map(v => {
      const has = levelHasLessons(v.id);
      return `<button class="level-chip" data-level="${v.id}"${state.level === v.id ? ' aria-pressed="true"' : ''}${has ? '' : ' disabled'} title="${has ? '' : 'Đang biên soạn'}">
        ${esc(v.vi)} <span class="lv-ko ko">${esc(v.ko)}</span>${has ? '' : ' <span class="lv-soon">sắp có</span>'}
      </button>`;
    }).join('')}
  </div>

  <div class="lesson-grid">
    ${L.map(l => {
      const pct = state.done[l.level + '-' + l.no] ? 100 : 0;
      return `
      <button class="lesson-card" data-lesson="${l.no}">
        <span class="lesson-no"><i></i> BÀI ${String(l.no).padStart(2,'0')}</span>
        <h3 class="ko">${esc(l.ko)}</h3>
        <p class="vi">${esc(l.vi)}</p>
        <p class="skill">${esc(l.skill)}</p>
        <div class="gram-tags">${(l.grammar || []).slice(0,3).map(g =>
          `<span class="gtag">${esc(g.form.split('<')[0].trim())}</span>`).join('')}</div>
        <div class="lesson-foot">
          <span class="n">${l.vocab.length} từ</span>
          <span class="prog"><i style="width:${pct}%"></i></span>
          <span class="n">${pct}%</span>
        </div>
      </button>`;
    }).join('')}
  </div>`;
},

/* ---------------- Chi tiết bài học ---------------- */
lesson(){
  const l = curLesson();
  if (!l) return VIEWS.home();
  const tabs = [
    ['vocab','어휘','Từ vựng'], ['gram','문법','Ngữ pháp'], ['talk','회화','Hội thoại'],
    ['write','쓰기','Tập viết'], ['pron','발음','Phát âm'],
    ['culture','문화','Văn hoá']
  ];
  if (!tabs.some(t => t[0] === state.tab)) state.tab = 'vocab';
  return `
  <div class="lesson-hero">
    <div>
      <span class="eyebrow">Sơ cấp 1 · Bài ${String(l.no).padStart(2,'0')}</span>
      <h1 class="ko">${esc(l.ko)}</h1>
      <p class="sub">${esc(l.vi)}</p>
      <div class="hero-meta">
        <div><span class="eyebrow">Kỹ năng</span><p>${esc(l.skill)}</p></div>
        <div><span class="eyebrow">Phát âm</span><p>${esc(l.pron)}</p></div>
        <div><span class="eyebrow">Từ mới</span><p>${l.vocab.length} từ · ${l.grammar.length} mẫu ngữ pháp</p></div>
      </div>
    </div>
    <button class="btn-back" data-go="home">← Tất cả các bài</button>
  </div>

  <div class="tabs" role="tablist">
    ${tabs.map(([id, k, vi]) => `
      <button class="tab" role="tab" data-tab="${id}" aria-selected="${state.tab === id}">
        <span class="k ko">${k}</span> ${vi}
      </button>`).join('')}
  </div>

  <div id="tabbody">${VIEWS['tab_' + state.tab](l)}</div>`;
},

tab_vocab(l){
  return `<div class="vocab-grid">${l.vocab.map(v => `
    <div class="vcard">
      <span class="pos">${esc(v.pos)}</span>
      <span class="w ko"><span class="kw" data-kw="${esc(v.ko)}" tabindex="0" role="button">${esc(v.ko)}</span></span>
      <span class="r">${esc(v.rom)}</span>
      <span class="m">${esc(v.vi)}</span>
      ${v.hanja ? `<span class="h">${esc(v.hanja)} · ${esc(v.hv)}</span>` : ''}
      <div class="vcard-actions">
        <button class="mini" data-speak="${esc(v.ko)}">Nghe</button>
        <button class="mini" data-add="${esc(v.ko)}">+ Thẻ</button>
        <button class="mini" data-write="${esc(v.ko)}">Nét viết</button>
      </div>
    </div>`).join('')}</div>`;
},

tab_gram(l){
  return `<div class="gram-list">${l.grammar.map(g => `
    <div class="gram">
      <div class="gram-form ko">${esc(g.form)}</div>
      <div class="gram-vi">${esc(g.vi)}</div>
      <p class="gram-note">${esc(g.note)}</p>
      <div class="gram-ex">
        <span class="k ko">${Words.mark(g.ex.ko)}</span>
        <span class="v">${esc(g.ex.vi)}</span>
        <button class="icon-btn ex-play" data-speak="${esc(g.ex.ko)}" title="Nghe câu này">
          <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
        </button>
      </div>
    </div>`).join('')}</div>`;
},

tab_talk(l){
  return `
  <div class="dlg-bar">
    <button class="pbtn primary" data-speak-all="1">
      <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Đọc cả bài
    </button>
    <button class="pbtn" data-stop="1">Dừng</button>
    <span class="eyebrow">Rê chuột vào bất kỳ từ nào để xem nghĩa · bấm để mở bảng tra</span>
  </div>
  <div class="dlg" id="dlg">${l.dialogue.map((d, i) => `
    <div class="dlg-row" data-line="${i}">
      <span class="dlg-sp ko">${esc(d.sp)}</span>
      <span>
        <span class="dlg-ko">${Words.mark(d.ko)}</span>
        <span class="dlg-vi">${esc(d.vi)}</span>
      </span>
      <span class="row-tools">
        <button class="icon-btn" data-speak="${esc(d.ko)}" title="Nghe câu này">
          <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
        </button>
        <button class="icon-btn" data-speak-slow="${esc(d.ko)}" title="Nghe chậm">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
        </button>
      </span>
    </div>`).join('')}</div>`;
},

tab_write(l){
  const words = l.vocab.slice(0, 6).map(v => v.ko);
  return `
  <div class="note-card" style="margin-bottom:16px">
    <span class="mark ko">쓰</span>
    <div>
      <h4>Luyện viết từ vựng của bài ${l.no}</h4>
      <p>Mỗi ô là một chữ. Bấm <b>Xem nét</b> để mở màn Tập viết với đúng chữ đó, hoặc viết trực tiếp lên ô bên dưới bằng chuột hoặc ngón tay.</p>
    </div>
  </div>
  <div class="trace-wrap">
    ${words.map((w, i) => {
      const ch = w[0];
      return `<div class="trace-cell">
        <span class="lbl">${esc(w)}</span>
        <span class="model ko">${esc(ch)}</span>
        <canvas data-trace="${i}"></canvas>
      </div>`;
    }).join('')}
  </div>
  <div class="stage-ctrl" style="margin-top:14px">
    <button class="pbtn" data-clear-trace="1">Xoá hết</button>
    <button class="pbtn primary" data-write="${esc(words[0])}">Xem nét chữ ${esc(words[0][0])}</button>
  </div>`;
},

tab_pron(l){
  return `
  <div class="note-card">
    <span class="mark ko">발</span>
    <div>
      <h4>${esc(l.pron)}</h4>
      <p>Trọng tâm phát âm của bài này. Hãy nghe lại các câu trong phần Hội thoại và chú ý riêng hiện tượng trên — đây là điểm người Việt hay bị sai nhất khi học tới bài ${l.no}.</p>
    </div>
  </div>
  <div class="gram-list" style="margin-top:14px">
    ${l.dialogue.map(d => `
    <div class="gram">
      <div class="gram-form ko" style="font-size:17px;color:var(--ink)">${Words.mark(d.ko)}</div>
      <p class="gram-note">${esc(d.vi)}</p>
      <div class="stage-ctrl" style="margin-top:10px">
        <button class="pbtn" data-speak="${esc(d.ko)}">Nghe</button>
        <button class="pbtn" data-speak-slow="${esc(d.ko)}">Nghe chậm</button>
        <button class="pbtn" data-syl="${esc(d.ko)}">Đọc rời từng chữ</button>
      </div>
    </div>`).join('')}
  </div>`;
},

tab_culture(l){
  return `
  <div class="note-card">
    <span class="mark ko">문</span>
    <div>
      <h4>${esc(l.culture)}</h4>
      <p>Phần văn hoá của bài ${l.no}. Trong bản đầy đủ, đây là nơi đặt bài đọc song ngữ, hình ảnh và phần đối chiếu với văn hoá Việt Nam — đúng nguyên tắc "trước khi học · trong khi học · sau khi học" của giáo trình.</p>
    </div>
  </div>`;
},

/* ---------------- Tập viết ---------------- */
write(){
  const rows = [
    ['Phụ âm cơ bản', '기본 자음 · 14 chữ', JAMO_ORDER.consonantBasic],
    ['Phụ âm căng',   '쌍자음 · 5 chữ',     JAMO_ORDER.consonantDouble],
    ['Nguyên âm cơ bản','기본 모음 · 10 chữ', JAMO_ORDER.vowelBasic],
    ['Nguyên âm ghép','복합 모음 · 11 chữ',  JAMO_ORDER.vowelCompound]
  ];
  return `
  <div class="page-head">
    <span class="eyebrow">한글 획순 · Thứ tự nét</span>
    <h1>Tập viết chữ Hangul</h1>
    <p>Chữ Hàn luôn viết theo hai quy tắc: <b>trên xuống dưới</b> và <b>trái sang phải</b>. Chọn một chữ cái để xem từng nét chạy theo đúng thứ tự, hoặc ghép cả một âm tiết ở phần bên dưới.</p>
  </div>

  <div class="write-layout">
    <div class="jamo-panel">
      ${rows.map(([vi, ko, list]) => `
        <div class="jamo-row-label"><h4>${vi}</h4><span class="ko">${ko}</span></div>
        <div class="jamo-grid">
          ${list.map(j => `<button class="jbtn ko" data-jamo="${j}" aria-pressed="${state.jamo === j}">${j}</button>`).join('')}
        </div>`).join('')}

      <div class="builder">
        <h4>Ghép âm tiết — 음절 조합</h4>
        <p>Một âm tiết tiếng Hàn gồm phụ âm đầu + nguyên âm + patchim (nếu có). Chọn từng thành phần để xem toàn bộ thứ tự nét của cả khối chữ.</p>
        ${[['cho','Phụ âm đầu','초성', CHOSEONG],
           ['jung','Nguyên âm','중성', JUNGSEONG],
           ['jong','Patchim','종성', JONGSEONG]].map(([key, vi, ko, list]) => `
          <div class="pick-row">
            <div class="pick-label">${vi}<span class="ko">${ko}</span></div>
            <div class="pick-opts">
              ${list.map(v => `<button class="pick ${v === '' ? 'none' : 'ko'}" data-pick="${key}" data-val="${v}"
                aria-pressed="${state.syll[key] === v}">${v === '' ? 'không' : v}</button>`).join('')}
            </div>
          </div>`).join('')}
        <div class="stage-ctrl">
          <button class="pbtn primary" data-build="1">Xem nét của âm tiết ghép</button>
          <span class="eyebrow" id="syllPreview"></span>
        </div>
      </div>
    </div>

    <div class="stage" id="stage"></div>
  </div>`;
},

/* ---------------- Ôn tập SRS ---------------- */
srs(){
  const base = curLessons()[0] || COURSE_KO.lessons[0];
  const deck = state.deck.length ? state.deck : base.vocab.slice(0, 8).map(v => v.ko);
  const all = COURSE_KO.lessons.flatMap(l => l.vocab);
  const w = all.find(v => v.ko === deck[0]) || all[0];
  return `
  <div class="page-head">
    <span class="eyebrow">복습 · Lặp lại ngắt quãng</span>
    <h1>Ôn tập hôm nay</h1>
    <p>Lịch ôn do thuật toán FSRS quyết định. Bốn mức đánh giá phía dưới là toàn bộ thao tác bạn cần — không có nút nào khác.</p>
  </div>
  <div class="srs-layout">
    <div>
      <div class="flash" id="flash">
        <span class="w ko"><span class="kw" data-kw="${esc(w.ko)}" tabindex="0" role="button">${esc(w.ko)}</span></span>
        <div class="back">
          <span class="r">${esc(w.rom)}</span>
          ${w.hanja ? `<div class="h">${esc(w.hanja)} · ${esc(w.hv)}</div>` : ''}
          <div class="m">${esc(w.vi)}</div>
          <div class="p">${esc(w.pos)}</div>
        </div>
        <span class="hint">Nhớ lại nghĩa rồi lật thẻ · phím cách</span>
      </div>
      <div class="stage-ctrl" style="margin-top:12px">
        <button class="pbtn primary" id="flipBtn" style="flex:1;justify-content:center">Lật thẻ</button>
        <button class="pbtn" data-speak="${esc(w.ko)}">Nghe</button>
        <button class="pbtn" data-write="${esc(w.ko)}">Nét viết</button>
      </div>
      <div class="grades" id="grades">
        <button class="grade again"><b>Lại</b><span>&lt;1 phút</span></button>
        <button class="grade"><b>Khó</b><span>6 phút</span></button>
        <button class="grade"><b>Tốt</b><span>1 ngày</span></button>
        <button class="grade"><b>Dễ</b><span>4 ngày</span></button>
      </div>
    </div>
    <div>
      <div class="aside-card">
        <h5>Bộ thẻ</h5>
        ${curLessons().slice(0,5).map(l => `
          <div class="krow"><span>Bài ${String(l.no).padStart(2,'0')} · ${esc(l.vi)}</span><span class="n">${l.vocab.length}</span></div>`).join('')}
      </div>
      <div class="aside-card" style="margin-top:14px">
        <h5>Thẻ bạn đã lưu</h5>
        ${state.deck.length
          ? state.deck.slice(0,8).map(k => `<div class="krow"><span class="ko">${esc(k)}</span></div>`).join('')
          : '<p style="font-size:12.5px;color:var(--muted)">Chưa có thẻ nào. Bấm «+ Thẻ» ở màn Từ vựng để thêm.</p>'}
      </div>
    </div>
  </div>`;
},

/* ---------------- Từ điển ---------------- */
dict(){
  return `
  <div class="page-head">
    <span class="eyebrow">사전 · Từ điển Hàn – Việt</span>
    <h1>Tra từ</h1>
    <p>Tra trong ${allWords().length} từ: toàn bộ từ vựng Sơ cấp 1 cộng với một bộ từ thông dụng theo chủ đề. Bản đầy đủ sẽ nạp thêm dữ liệu từ KRDict — từ điển của Viện Quốc ngữ Hàn Quốc, vốn đã có sẵn bản dịch tiếng Việt.</p>
  </div>
  <div class="dict-layout">
    <div>
      <div class="dsearch">
        <input id="dq" type="search" placeholder="Gõ tiếng Hàn, tiếng Việt hoặc phiên âm…  ví dụ: 도서관 · thư viện · chingu" autocomplete="off">
      </div>
      <div class="dhits" id="dhits"></div>
      <div id="dentry"></div>
    </div>
    <div>
      <div class="aside-card">
        <h5>Mẹo cho người Việt</h5>
        <p style="font-size:12.5px;color:var(--muted)">Khoảng 60% từ vựng tiếng Hàn có gốc Hán. Ô <b style="color:var(--gold)">Hán tự</b> trong mỗi mục từ cho bạn âm Hán-Việt tương ứng — nhớ một chữ Hán là nhớ được cả chùm từ.</p>
      </div>
      <div class="aside-card" style="margin-top:14px">
        <h5>Sẽ có ở bản đầy đủ</h5>
        <div class="krow"><span>Gỡ đuôi chia động từ</span></div>
        <div class="krow"><span>Câu ví dụ Tatoeba</span></div>
        <div class="krow"><span>Phát âm thu sẵn</span></div>
        <div class="krow"><span>Lịch sử tra từ</span></div>
      </div>
    </div>
  </div>`;
},

/* ---------------- Luyện shadowing ---------------- */
shadow(){
  const sh = state.shadow;
  if (!sh.sents.length){
    return `
    <div class="page-head">
      <span class="eyebrow">쉐도잉 · Nghe và nhại theo</span>
      <h1>Luyện shadowing</h1>
      <p>Dán một đoạn tiếng Hàn vào — tin tức, lời bài hát, hội thoại trong sách, bất cứ thứ gì.
      LangLab tách thành câu, cho bấm từng từ để tra, và đọc lại theo nhịp bạn chọn.</p>
    </div>
    <div class="sh-editor">
      <textarea id="shInput" class="free-text ko" rows="9" placeholder="Dán đoạn tiếng Hàn vào đây…"></textarea>
      <div class="stage-ctrl" style="margin-top:12px">
        <button class="pbtn primary" id="shParse">Tách thành câu</button>
        <button class="pbtn" id="shSample">Dùng đoạn mẫu</button>
      </div>
      <p class="wp-hint" style="margin-top:12px">Câu được tách ở dấu chấm, chấm hỏi và chấm than.
      Sau khi tách, bạn có thể tự ngắt đoạn thành nhiều <b>ý</b> và cho đọc liền mạch từng ý.</p>
    </div>`;
  }

  const chunks = shadowChunks();
  return `
  <div class="page-head">
    <span class="eyebrow">쉐도잉 · ${sh.sents.length} câu · ${chunks.length} ý</span>
    <h1>Luyện shadowing</h1>
  </div>

  <div class="sh-bar">
    <button class="pbtn primary" data-sh-all="1">
      <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Đọc cả đoạn
    </button>
    <button class="pbtn" data-stop="1">Dừng</button>

    <span class="sh-sep"></span>

    <span class="sh-field">
      <label>Lặp mỗi câu</label>
      <span class="seg">
        ${[1,2,3].map(n => `<button class="sp" data-sh-loop="${n}" aria-pressed="${sh.loop === n}">${n}×</button>`).join('')}
      </span>
    </span>

    <span class="sh-field">
      <label>Tốc độ</label>
      <span class="seg">
        <button class="sp" data-sh-slow="0" aria-pressed="${!sh.slow}">1×</button>
        <button class="sp" data-sh-slow="1" aria-pressed="${sh.slow}">0.7×</button>
      </span>
    </span>

    <span class="sh-field">
      <label>Chờ để nhại</label>
      <span class="seg">
        ${[[0,'tắt'],[1,'1×'],[1.5,'1.5×']].map(([v,t]) =>
          `<button class="sp" data-sh-mimic="${v}" aria-pressed="${sh.mimic === v}">${t}</button>`).join('')}
      </span>
    </span>

    <span class="sh-sep"></span>

    <button class="pbtn" id="shTrans">
      <svg viewBox="0 0 24 24"><path d="M4 5h10M9 3v2c0 5-2.5 8-5 9"/><path d="M8 11c1.5 3 4 5 6 6"/><path d="M13 20l4-9 4 9M14.5 17h5"/></svg>
      Dịch cả đoạn
    </button>
    <button class="pbtn ${sh.showVi ? 'primary' : ''}" id="shToggleVi">
      ${sh.showVi ? 'Ẩn bản dịch' : 'Hiện bản dịch'}
    </button>

    <button class="pbtn" id="shEdit" style="margin-left:auto">Sửa đoạn</button>
  </div>

  <div id="shTransBox"></div>

  ${sh.mimic ? `<p class="sh-note">Chế độ nhại đang bật: sau mỗi câu, máy im lặng đúng ${sh.mimic}× độ dài câu đó để bạn nói theo.</p>` : ''}

  <div class="sh-body">
    ${chunks.map((c, ci) => `
      <div class="sh-chunk" data-chunk="${ci}">
        <div class="sh-chunk-head">
          <span class="sh-chunk-no mono">Ý ${ci + 1}</span>
          <span class="sh-chunk-n">${c.indices.length} câu</span>
          <button class="pbtn" data-sh-chunk="${ci}">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Đọc liền mạch ý này
          </button>
          ${ci > 0 ? `<button class="mini" data-sh-merge="${c.from}">Gộp với ý trên</button>` : ''}
        </div>
        ${c.indices.map((i, k) => `
          <div class="sh-row" data-si="${i}">
            <span class="sh-no mono">${String(i + 1).padStart(2,'0')}</span>
            <span class="sh-main">
              <span class="sh-text ko" data-sent="${i}">${Words.mark(sh.sents[i])}</span>
              ${sh.showVi && sh.trans[Translate.hash(sh.sents[i])]
                ? `<span class="sh-vi">${esc(sh.trans[Translate.hash(sh.sents[i])])}</span>` : ''}
            </span>
            <span class="sh-tools">
              <button class="icon-btn" data-sh-play="${i}" title="Nghe câu này">
                <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
              </button>
              <button class="icon-btn" data-sh-play="${i}" data-slow="1" title="Nghe chậm">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </button>
              <button class="icon-btn" data-sent="${i}" title="Tra cả câu">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              </button>
            </span>
          </div>
          ${k < c.indices.length - 1
            ? `<button class="sh-break" data-sh-break="${c.indices[k + 1]}">＋ ngắt ý ở đây</button>`
            : ''}
        `).join('')}
      </div>`).join('')}
  </div>

  <p class="wp-hint" style="margin-top:16px">Bấm vào <b>một từ</b> để mở bảng tra từ · bấm vào <b>phần trống của câu</b> hoặc nút kính lúp để tra cả câu ·
  bấm <b>＋ ngắt ý</b> giữa hai câu để chia đoạn thành các ý riêng.</p>`;
},

/* ---------------- Bài tập ---------------- */
quiz(){
  if (!state.quiz || !state.quiz.qs) quizStart(state.quiz && state.quiz.type);
  return `
  <div class="page-head">
    <span class="eyebrow">연습 · Bài tập</span>
    <h1>Luyện tập</h1>
    <p>Câu hỏi sinh ra từ chính từ vựng, ngữ pháp và hội thoại của khoá học — mỗi lượt 10 câu.</p>
  </div>
  <div class="qtypes">
    ${QUIZ_TYPES.map(([id, label]) =>
      `<button class="qt" data-qtype="${id}" aria-pressed="${(state.quiz.type || 'mix') === id}">${label}</button>`).join('')}
  </div>
  <div id="quizArea">${quizCard()}</div>`;
},

/* ---------------- Số đếm ---------------- */
numbers(){
  const sino = [['0','영 · 공'],['1','일'],['2','이'],['3','삼'],['4','사'],['5','오'],['6','육'],['7','칠'],['8','팔'],['9','구'],['10','십'],['20','이십'],['100','백'],['1.000','천'],['10.000','만'],['억','억']];
  const nat = [['1','하나'],['2','둘'],['3','셋'],['4','넷'],['5','다섯'],['6','여섯'],['7','일곱'],['8','여덟'],['9','아홉'],['10','열'],['20','스물'],['30','서른'],['40','마흔'],['50','쉰'],['60','예순'],['70','일흔'],['80','여든'],['90','아흔']];
  const counters = [
    ['개','cái, vật','사과 세 개','ba quả táo'],
    ['명 · 사람','người','학생 네 명','bốn học sinh'],
    ['분','người (kính ngữ)','손님 두 분','hai vị khách'],
    ['마리','con (động vật)','고양이 한 마리','một con mèo'],
    ['권','quyển (sách)','책 다섯 권','năm quyển sách'],
    ['장','tờ, tấm','종이 열 장','mười tờ giấy'],
    ['병','chai','물 두 병','hai chai nước'],
    ['잔','ly, cốc','커피 세 잔','ba ly cà phê'],
    ['대','chiếc (xe, máy)','자동차 한 대','một chiếc ô tô'],
    ['살','tuổi','스무 살','20 tuổi'],
    ['시','giờ','세 시','3 giờ'],
    ['번','lần','두 번','hai lần']
  ];
  const chip = ([num, ko]) => `<button class="num-chip" data-speak="${esc(ko)}"><span class="num-n">${esc(num)}</span><span class="num-ko ko">${esc(ko)}</span></button>`;
  return `
  <div class="page-head">
    <span class="eyebrow">숫자 · Số đếm</span>
    <h1>Số đếm tiếng Hàn</h1>
    <p>Tiếng Hàn có <b>hai hệ số đếm</b> dùng song song: số <b>Hán Hàn</b> (한자어) và số <b>thuần Hàn</b> (순우리말). Dùng hệ nào là tuỳ theo <b>đơn vị đi kèm</b>.</p>
  </div>

  <div class="num-conv">
    <label for="numInput">Nhập một số để xem cách đọc (0–999.999.999)</label>
    <div class="num-conv-row">
      <input id="numInput" type="number" min="0" max="999999999" placeholder="Ví dụ: 25" inputmode="numeric">
      <div id="numOut" class="num-out"><span class="no-note">Gõ một số vào ô bên trái…</span></div>
    </div>
  </div>

  <div class="note-card">
    <span class="mark ko">漢</span>
    <div>
      <h4>Số Hán Hàn (한자어) — 일, 이, 삼…</h4>
      <p>Dùng cho <b>phút · giây</b> (분·초), <b>ngày · tháng · năm</b> (일·월·년), <b>tiền</b> (원), số điện thoại, số nhà, cân đo, phép toán — và mọi số <b>từ 100 trở lên</b>.</p>
      <div class="num-grid">${sino.map(chip).join('')}</div>
    </div>
  </div>

  <div class="note-card">
    <span class="mark ko">한</span>
    <div>
      <h4>Số thuần Hàn (순우리말) — 하나, 둘, 셋…</h4>
      <p>Dùng để <b>đếm sự vật</b> với đơn vị đếm (개, 명, 마리…), nói <b>giờ</b> (시), <b>tuổi</b> (살), <b>số lần</b> (번). Chỉ có tới 99; từ 100 trở lên mượn số Hán Hàn (백, 천…).</p>
      <div class="num-grid">${nat.map(chip).join('')}</div>
    </div>
  </div>

  <div class="note-card">
    <span class="mark">✎</span>
    <div>
      <h4>Dạng rút gọn trước đơn vị đếm</h4>
      <p>Bốn số đầu và 20 đổi dạng khi đứng trước đơn vị đếm:
      <b class="ko">하나→한, 둘→두, 셋→세, 넷→네, 스물→스무</b>.
      Ví dụ: <span class="ko">한 개 · 두 명 · 세 시 · 네 살 · 스무 살</span>.</p>
    </div>
  </div>

  <div class="num-sec-title"><h2>Đơn vị đếm thường gặp</h2></div>
  <div class="num-table">
    ${counters.map(([u, vi, ex, exvi]) => `
      <div class="num-row">
        <span class="nr-u ko">${esc(u)}</span>
        <span class="nr-vi">${esc(vi)}</span>
        <span class="nr-ex ko">${Words.mark(ex)}</span>
        <span class="nr-exvi">${esc(exvi)}</span>
        <button class="icon-btn" data-speak="${esc(ex)}" title="Nghe"><svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg></button>
      </div>`).join('')}
  </div>

  <div class="num-sec-title"><h2>Cách dùng theo ngữ cảnh</h2></div>
  <div class="num-use">
    <div class="nu-card"><h5>Giờ + phút</h5><p class="nu-ko ko">${Words.mark('세 시 삼십 분')}</p><p class="nu-vi">3 giờ 30 — giờ (thuần Hàn) + phút (Hán Hàn)</p><button class="mini" data-speak="세 시 삼십 분">Nghe</button></div>
    <div class="nu-card"><h5>Ngày tháng</h5><p class="nu-ko ko">${Words.mark('시월 구 일')}</p><p class="nu-vi">Ngày 9 tháng 10 — nhớ 6월=유월, 10월=시월</p><button class="mini" data-speak="시월 구 일">Nghe</button></div>
    <div class="nu-card"><h5>Tiền</h5><p class="nu-ko ko">${Words.mark('만 오천 원')}</p><p class="nu-vi">15.000 won (Hán Hàn)</p><button class="mini" data-speak="만 오천 원">Nghe</button></div>
    <div class="nu-card"><h5>Tuổi</h5><p class="nu-ko ko">${Words.mark('스물세 살')}</p><p class="nu-vi">23 tuổi (thuần Hàn)</p><button class="mini" data-speak="스물세 살">Nghe</button></div>
  </div>`;
},

/* ---------------- Thi thử TOPIK ---------------- */
topik(){
  return topikView();
}
};

/* ============================================================
   BÀI TẬP — sinh câu hỏi từ dữ liệu khoá học
   ============================================================ */
const QUIZ_TYPES = [
  ['mix','Trộn'], ['meaning','Chọn nghĩa'], ['word','Chọn từ'],
  ['listen','Nghe hiểu'], ['fill','Điền vào câu'], ['order','Sắp xếp câu']
];
const QUIZ_KINDS = ['meaning','word','listen','fill','order'];
const QUIZ_ROUND = 10;

let quizData = null;
function quizPool(){
  if (quizData) return quizData;
  const seen = {}, vocab = [], sents = [];
  curLessons().forEach(l => {
    (l.vocab || []).forEach(v => {
      if (v.ko && v.vi && !seen[v.ko]){ seen[v.ko] = 1; vocab.push({ ko:v.ko, rom:v.rom, vi:v.vi, lesson:l.no }); }
    });
    (l.dialogue || []).forEach(d => { if (d.ko && d.vi) sents.push({ ko:d.ko, vi:d.vi, lesson:l.no }); });
    (l.grammar  || []).forEach(g => { if (g.ex && g.ex.ko && g.ex.vi) sents.push({ ko:g.ex.ko, vi:g.ex.vi, lesson:l.no }); });
  });
  quizData = { vocab, sents };
  return quizData;
}

const _qrnd = n => Math.floor(Math.random() * n);
const _qpick = a => a[_qrnd(a.length)];
function _qsample(a, n){ a = a.slice(); const out = []; while (out.length < n && a.length) out.push(a.splice(_qrnd(a.length), 1)[0]); return out; }
function _qshuffle(a){ a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = _qrnd(i + 1); const x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

function makeQuestion(type, depth){
  depth = depth || 0;
  const P = quizPool();
  if (!P.vocab.length || depth > 4) return null;
  let kind = type === 'mix' ? _qpick(QUIZ_KINDS) : type;
  if ((kind === 'fill' || kind === 'order') && P.sents.length < 3) kind = 'meaning';

  if (kind === 'meaning' || kind === 'listen'){
    const w = _qpick(P.vocab);
    const distr = _qsample(P.vocab.filter(x => x.vi !== w.vi), 3).map(x => x.vi);
    if (distr.length < 3) return makeQuestion('word', depth + 1);
    const options = _qshuffle([w.vi].concat(distr));
    return { kind, ko:w.ko, rom:w.rom, hideStem: kind === 'listen',
             prompt: kind === 'listen' ? 'Nghe rồi chọn nghĩa đúng' : 'Từ này nghĩa là gì?',
             options, correct: options.indexOf(w.vi) };
  }
  if (kind === 'word'){
    const w = _qpick(P.vocab);
    const distr = _qsample(P.vocab.filter(x => x.ko !== w.ko), 3).map(x => x.ko);
    if (distr.length < 3) return makeQuestion('meaning', depth + 1);
    const options = _qshuffle([w.ko].concat(distr));
    return { kind, vi:w.vi, prompt:'Chọn từ tiếng Hàn đúng', koOpts:true,
             options, correct: options.indexOf(w.ko) };
  }
  if (kind === 'fill'){
    for (const s of _qshuffle(P.sents)){
      const toks = s.ko.split(/\s+/);
      for (let i = 0; i < toks.length; i++){
        const bare = toks[i].replace(/[.,?!~]/g, '');
        const w = P.vocab.find(v => v.ko === bare);
        if (w){
          const distr = _qsample(P.vocab.filter(x => x.ko !== w.ko), 3).map(x => x.ko);
          if (distr.length < 3) return makeQuestion('meaning', depth + 1);
          const options = _qshuffle([w.ko].concat(distr));
          const stem = toks.map((t, k) => k === i ? '____' : t).join(' ');
          return { kind, stem, hint:s.vi, koOpts:true, options, correct: options.indexOf(w.ko) };
        }
      }
    }
    return makeQuestion('meaning', depth + 1);
  }
  if (kind === 'order'){
    const cand = _qshuffle(P.sents).find(s => { const n = s.ko.split(/\s+/).length; return n >= 3 && n <= 6; });
    if (!cand) return makeQuestion('meaning', depth + 1);
    const tokens = cand.ko.split(/\s+/);
    return { kind, tokens, hint:cand.vi, chips: _qshuffle(tokens.map((t, id) => ({ t, id }))), order: [] };
  }
  return null;
}

function quizStart(type){
  type = type || 'mix';
  const qs = [];
  let guard = 0;
  while (qs.length < QUIZ_ROUND && guard++ < 80){ const q = makeQuestion(type); if (q) qs.push(q); }
  state.quiz = { type, qs, idx:0, score:0, answered:false, chosen:null };
}

function paintQuiz(){ const a = $('#quizArea'); if (a) a.innerHTML = quizCard(); }

function quizCard(){
  const Q = state.quiz;
  if (!Q || !Q.qs || !Q.qs.length) return '<div class="quiz-card"><p class="wp-empty">Chưa tạo được câu hỏi.</p></div>';
  if (Q.idx >= Q.qs.length) return quizSummary();
  const q = Q.qs[Q.idx];
  const dots = Q.qs.map((_, k) => `<i class="${k < Q.idx ? 'done' : k === Q.idx ? 'now' : ''}"></i>`).join('');
  const top = `<div class="quiz-top">
      <span class="eyebrow">Câu ${Q.idx + 1} / ${Q.qs.length}</span>
      <div class="dots">${dots}</div>
      <span class="quiz-score">${Q.score} điểm</span>
    </div>`;
  if (q.kind === 'order') return `<div class="quiz-card">${top}${quizOrder(q)}</div>`;

  let stem;
  if (q.kind === 'word'){
    stem = `<p class="q-stem q-vi">${esc(q.vi)}</p>`;
  } else if (q.kind === 'fill'){
    stem = `<p class="q-stem ko">${esc(q.stem).replace('____', '<span class="blank">____</span>')}</p>`;
  } else if (q.hideStem){
    stem = `<div class="q-listen-wrap"><button class="pbtn primary" data-quiz-say="${esc(q.ko)}">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe từ</button></div>`;
  } else {
    stem = `<p class="q-stem ko">${esc(q.ko)}${q.rom ? ` <span class="q-rom">[${esc(q.rom)}]</span>` : ''}</p>`;
  }
  const prompt = q.prompt ? `<p class="q-prompt">${esc(q.prompt)}</p>` : '';
  const hint = q.hint ? `<p class="q-hint">${esc(q.hint)}</p>` : '';
  const opts = `<div class="opts" id="opts">${q.options.map((o, k) => {
      let cls = 'opt' + (q.koOpts ? ' ko' : '');
      if (Q.answered){ if (k === q.correct) cls += ' ok'; else if (k === Q.chosen) cls += ' no'; }
      return `<button class="${cls}" data-quiz-opt="${k}"${Q.answered ? ' disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>`;
  const fb = Q.answered ? quizFeedback(q) : '';
  return `<div class="quiz-card">${top}${stem}${prompt}${hint}${opts}${fb}</div>`;
}

function quizFeedback(q){
  const Q = state.quiz, right = Q.chosen === q.correct, last = Q.idx + 1 >= Q.qs.length;
  return `<div class="fb show" style="background:${right ? 'var(--ok-soft)' : 'var(--seal-soft)'}">
      <b>${right ? 'Chính xác 👍' : 'Chưa đúng.'}</b> ${right ? '' : 'Đáp án: <b>' + esc(q.options[q.correct]) + '</b>'}
      <div class="q-next"><button class="pbtn primary" data-quiz-next="1">${last ? 'Xem kết quả' : 'Câu tiếp →'}</button></div>
    </div>`;
}

function quizOrder(q){
  const Q = state.quiz, done = Q.answered;
  const chosen = q.order.map(id => { const c = q.chips.find(x => x.id === id); return `<button class="ochip" data-quiz-orm="${id}">${esc(c.t)}</button>`; }).join('');
  const remain = q.chips.filter(x => q.order.indexOf(x.id) < 0).map(x => `<button class="ochip pool" data-quiz-oadd="${x.id}">${esc(x.t)}</button>`).join('');
  let tail;
  if (done){
    const built = q.order.map(id => q.chips.find(x => x.id === id).t).join(' ');
    const right = built === q.tokens.join(' '), last = Q.idx + 1 >= Q.qs.length;
    tail = `<div class="fb show" style="background:${right ? 'var(--ok-soft)' : 'var(--seal-soft)'}">
        <b>${right ? 'Chính xác 👍' : 'Chưa đúng.'}</b> ${right ? '' : 'Câu đúng: <b class="ko">' + esc(q.tokens.join(' ')) + '</b>'}
        <div class="q-next"><button class="pbtn primary" data-quiz-next="1">${last ? 'Xem kết quả' : 'Câu tiếp →'}</button></div>
      </div>`;
  } else {
    tail = `<div class="q-next">
        <button class="pbtn" data-quiz-oclear="1"${q.order.length ? '' : ' disabled'}>Xoá</button>
        <button class="pbtn primary" data-quiz-ocheck="1"${q.order.length === q.tokens.length ? '' : ' disabled'}>Kiểm tra</button></div>`;
  }
  return `<p class="q-prompt">Sắp xếp các mảnh thành câu đúng</p><p class="q-hint">${esc(q.hint)}</p>
    <div class="obuild">${chosen || '<span class="obuild-ph">Bấm các mảnh bên dưới để ghép câu…</span>'}</div>
    <div class="opool">${remain}</div>${tail}`;
}

function quizSummary(){
  const Q = state.quiz, pct = Math.round(Q.score / Q.qs.length * 100);
  const msg = pct >= 80 ? 'Xuất sắc! 🎉' : pct >= 50 ? 'Khá tốt — luyện thêm chút nữa nhé.' : 'Cứ luyện tiếp, nhớ dần thôi.';
  return `<div class="quiz-card quiz-done">
      <div class="qd-score">${Q.score}<span>/ ${Q.qs.length}</span></div>
      <p class="qd-msg">${msg}</p>
      <div class="q-next" style="justify-content:center"><button class="pbtn primary" data-quiz-restart="1">Làm lại 10 câu</button></div>
    </div>`;
}

/* ============================================================
   ĐIỀU HƯỚNG & GẮN SỰ KIỆN
   ============================================================ */

const CRUMBS = {
  home:'Khoá học', lesson:'Bài học', write:'Tập viết',
  srs:'Ôn tập', dict:'Từ điển', quiz:'Bài tập', shadow:'Luyện shadowing',
  numbers:'Số đếm', topik:'Thi thử TOPIK'
};

function render(){
  const view = $('#view');
  view.innerHTML = VIEWS[state.view]();
  view.classList.toggle('wide', state.view === 'write');

  $$('.nav-btn').forEach(b => {
    const on = b.dataset.go === state.view || (state.view === 'lesson' && b.dataset.go === 'home');
    b.setAttribute('aria-current', on ? 'page' : 'false');
  });

  const l = state.lesson && curLesson();
  $('#crumb').innerHTML = state.view === 'lesson' && l
    ? `<button class="crumb-link" data-go="home">Tiếng Hàn</button> <span>›</span> <button class="crumb-link" data-go="home">Sơ cấp 1</button> <span>›</span> <b>Bài ${String(l.no).padStart(2,'0')} · ${esc(l.vi)}</b>`
    : `<button class="crumb-link" data-go="home">Tiếng Hàn</button> <span>›</span> <b>${CRUMBS[state.view]}</b>`;

  if (state.view === 'write') mountWrite();
  if (state.view === 'dict'){ mountDict(); loadDict(added => { if (added && state.view === 'dict') render(); }); }
  if (state.view === 'shadow'){
    const box = $('#shInput');
    if (box && state.shadow.raw) box.value = state.shadow.raw;
  }
  if (state.view === 'lesson' && state.tab === 'write') mountTrace();
  if (state.view === 'topik' && state.topik && state.topik.phase === 'doing') mountTopik(); else topikStopTimer();
  window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
}

function go(v, lessonNo){
  if (v !== state.view) stopAudio();
  state.view = v;
  if (lessonNo){ state.lesson = lessonNo; state.tab = 'vocab'; }
  render();
}

/* ---------- màn Tập viết ---------- */
function mountWrite(){ drawStage(); }

function currentStrokes(){
  if (state.jamo && JAMO[state.jamo]) return JAMO[state.jamo].strokes.map(d => ({ d }));
  return [];
}

let stageMode = 'jamo';   // 'jamo' | 'syllable'
let stageChar = '';

function drawStage(){
  const stage = $('#stage'); if (!stage) return;
  let strokes, title, name, rom, tip;

  if (stageMode === 'syllable'){
    strokes = syllableStrokes(stageChar);
    const p = decomposeHangul(stageChar);
    title = stageChar;
    name  = p ? `${p.cho} + ${p.jung}${p.jong ? ' + ' + p.jong : ''}` : '';
    rom   = `${strokes.length} nét`;
    tip   = 'Trong một khối chữ, viết hết phụ âm đầu, rồi tới nguyên âm, cuối cùng mới tới patchim ở dưới đáy.';
  } else {
    const j = JAMO[state.jamo];
    strokes = currentStrokes();
    title = state.jamo; name = j.name; rom = j.rom; tip = j.tip;
  }

  stage.innerHTML = `
    <div class="stage-head">
      <div>
        <div class="big ko">${esc(title)}</div>
        <div class="nm ko">${esc(name)}</div>
      </div>
      <div class="rm">${esc(rom)}</div>
    </div>
    <div class="paper" id="paper"></div>
    <div class="stage-ctrl">
      <button class="pbtn primary" id="play">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Chạy lại
      </button>
      <button class="pbtn" data-speak="${esc(title)}">Nghe</button>
      <div class="speed">
        ${[[.5,'0.5×'],[1,'1×'],[2,'2×']].map(([v,t]) =>
          `<button class="sp" data-speed="${v}" aria-pressed="${state.speed === v}">${t}</button>`).join('')}
      </div>
    </div>
    <div class="stroke-steps">
      <h5>${strokes.length} nét — bấm để xem từng bước</h5>
      <div class="steps">${strokes.map((s,i) =>
        `<button class="step-dot" data-step="${i}">${i+1}</button>`).join('')}</div>
      <p class="tip">${esc(tip)}</p>
    </div>
    <div class="trace-wrap" style="grid-template-columns:1fr;margin-top:16px">
      <div class="trace-cell">
        <span class="lbl">VIẾT THỬ</span>
        <span class="model ko">${esc(title)}</span>
        <canvas data-trace="0"></canvas>
      </div>
    </div>
    <div class="stage-ctrl" style="margin-top:10px">
      <button class="pbtn" data-clear-trace="1">Xoá nét vừa viết</button>
    </div>`;

  const svg = renderGlyph($('#paper', stage), strokes);
  playStrokes(svg, state.speed, i => {
    $$('.step-dot', stage).forEach((d, k) => d.setAttribute('aria-pressed', k === i));
  });
  mountTrace();
}

/* ---------- canvas viết thử ---------- */
function mountTrace(){
  $$('canvas[data-trace]').forEach(cv => {
    if (cv.dataset.ready) return;
    cv.dataset.ready = '1';
    const fit = () => {
      const r = cv.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (!r.width) return;
      cv.width = r.width * dpr; cv.height = r.height * dpr;
      const c = cv.getContext('2d');
      c.scale(dpr, dpr);
      c.lineWidth = Math.max(6, r.width / 22);
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#1B4D8F';
    };
    fit();
    window.addEventListener('resize', fit);

    let drawing = false;
    const pos = e => {
      const r = cv.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    cv.addEventListener('pointerdown', e => {
      drawing = true; cv.setPointerCapture(e.pointerId);
      const c = cv.getContext('2d'), p = pos(e);
      c.beginPath(); c.moveTo(p.x, p.y);
    });
    cv.addEventListener('pointermove', e => {
      if (!drawing) return;
      const c = cv.getContext('2d'), p = pos(e);
      c.lineTo(p.x, p.y); c.stroke();
    });
    const stop = () => { drawing = false; };
    cv.addEventListener('pointerup', stop);
    cv.addEventListener('pointerleave', stop);
    cv.addEventListener('pointercancel', stop);
  });
}
function clearTrace(){
  $$('canvas[data-trace]').forEach(cv => {
    const c = cv.getContext('2d');
    c.save(); c.setTransform(1,0,0,1,0,0); c.clearRect(0,0,cv.width,cv.height); c.restore();
  });
}

/* ---------- màn Từ điển ---------- */
function allWords(){
  // dùng đúng kho đã gộp (khoá học + từ thông dụng, đã khử trùng lặp)
  const idx = Words.index();
  return idx ? idx.words : COURSE_KO.lessons.flatMap(l => l.vocab.map(v => Object.assign({ lesson: l.no, level: l.level, theme: l.vi }, v)));
}
function mountDict(){
  const words = allWords();
  const q = $('#dq'), hits = $('#dhits'), entry = $('#dentry');

  const showEntry = w => {
    entry.innerHTML = `
      <div class="entry">
        <div class="entry-actions" style="margin:0 0 14px">
          <button class="pbtn" data-speak="${esc(w.ko)}">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe
          </button>
          <button class="pbtn" data-add="${esc(w.ko)}">+ Bộ thẻ</button>
          <button class="pbtn" data-write="${esc(w.ko)}">Nét viết</button>
          <button class="pbtn" data-kw-open="${esc(w.ko)}">Tra sâu · nguồn ngoài</button>
        </div>
        ${dictEntryHtml(w)}
      </div>`;
  };

  const search = term => {
    const t = (term || '').trim().toLowerCase();
    const list = (t ? words.filter(w =>
      w.ko.includes(t) || w.rom.includes(t) || w.vi.toLowerCase().includes(t) ||
      (w.hv || '').toLowerCase().includes(t) ||
      (w.senses || []).some(s => (s.def_vi || '').toLowerCase().includes(t))) : words).slice(0, 60);
    hits.innerHTML = list.length ? list.map((w, i) => `
      <button class="dhit" data-hit="${esc(w.ko)}"${i === 0 ? ' aria-current="true"' : ''}>
        <span class="k">${esc(w.ko)}</span><span class="v">${esc(w.vi)}</span>
        <span class="l">${w.lesson ? 'BÀI ' + String(w.lesson).padStart(2,'0') : 'THÔNG DỤNG'}</span>
      </button>`).join('')
      : '<div style="padding:14px;color:var(--faint);font-size:13px">Không tìm thấy. Thử «도서관», «thư viện» hoặc «chingu».</div>';
    if (list.length) showEntry(list[0]);
    else entry.innerHTML = '<div class="empty">Bản đầy đủ sẽ gỡ đuôi chia động từ rồi tra lại lần nữa trước khi báo không có kết quả.</div>';
  };

  q.addEventListener('input', () => search(q.value));
  hits.addEventListener('click', e => {
    const b = e.target.closest('.dhit'); if (!b) return;
    $$('.dhit', hits).forEach(x => x.removeAttribute('aria-current'));
    b.setAttribute('aria-current', 'true');
    const w = words.find(x => x.ko === b.dataset.hit);
    if (w) showEntry(w);
  });
  search('');
}

/* ============================================================
   LUYỆN SHADOWING — bộ phát theo câu, theo ý, cả đoạn
   ============================================================ */

const SAMPLE_TEXT = '저는 매일 아침 일곱 시에 일어나요. 세수를 하고 아침을 먹은 다음에 학교에 가요. '
  + '오전에는 한국어 수업을 듣고 오후에는 도서관에서 숙제를 해요. '
  + '도서관은 조용하고 책이 많아서 공부하기에 좋아요. '
  + '수업이 끝나면 친구를 만나서 같이 저녁을 먹어요. '
  + '한국 음식은 조금 맵지만 정말 맛있어서 자주 먹고 싶어요. '
  + '주말에는 아르바이트를 하거나 집에서 쉬어요. '
  + '다음 학기에는 장학금을 받고 싶어서 열심히 공부할 거예요.';

function saveShadow(){
  const sh = state.shadow;
  store.set('shadow', { raw: sh.raw, sents: sh.sents, breaks: sh.breaks,
                        loop: sh.loop, gap: sh.gap, mimic: sh.mimic, slow: sh.slow,
                        trans: sh.trans, showVi: sh.showVi });
}

/** Nhóm các câu thành từng « ý » theo các mốc ngắt người học đặt. */
function shadowChunks(){
  const sh = state.shadow, out = [];
  let cur = null;
  sh.sents.forEach((_, i) => {
    if (i === 0 || sh.breaks[i]){ cur = { from: i, indices: [] }; out.push(cur); }
    cur.indices.push(i);
  });
  return out;
}

/** Đọc một câu: ưu tiên tệp thu sẵn / máy chủ, cuối cùng mới tới giọng máy. */
function sayOne(text, opts){
  opts = opts || {};
  Speech.stop();
  const fin = () => { try { opts.onEnd && opts.onEnd(); } catch(e){} };
  TTS.play(text, {
    rate: opts.slow ? .7 : 1,
    onEnd: fin,
    onFail(){
      if (!Speech.supported || !Speech.hasKorean()){ setTimeout(fin, 300); return; }
      Speech.onReady(() => Speech.speak(text, {
        rate: opts.slow ? Math.max(.45, Speech.cfg.rate - .3) : undefined,
        onEnd: fin
      }));
    }
  });
}

let shToken = 0;

function shStop(){
  shToken++;
  TTS.stop(); Speech.stop();
  $$('.sh-row').forEach(r => r.classList.remove('on', 'waiting'));
  $$('.sh-chunk').forEach(c => c.classList.remove('on'));
}

/** Ước lượng thời gian đọc một câu, để biết chờ bao lâu cho người học nhại lại. */
function estimateMs(text){
  return Math.max(900, text.length * 195 * (state.shadow.slow ? 1.4 : 1));
}

function shPlay(indices, chunkIdx){
  const sh = state.shadow;
  shStop();
  const mine = ++shToken;
  if (chunkIdx !== undefined){
    const c = $(`.sh-chunk[data-chunk="${chunkIdx}"]`);
    if (c) c.classList.add('on');
  }

  let i = 0, rep = 0;
  const step = () => {
    if (mine !== shToken) return;
    if (i >= indices.length){ shStop(); return; }
    const idx = indices[i];
    const row = $(`.sh-row[data-si="${idx}"]`);
    $$('.sh-row').forEach(r => r.classList.remove('on', 'waiting'));
    if (row){
      row.classList.add('on');
      if (row.scrollIntoView) row.scrollIntoView({ block:'center', behavior:'smooth' });
    }
    sayOne(sh.sents[idx], {
      slow: sh.slow,
      onEnd(){
        if (mine !== shToken) return;
        rep++;
        if (rep < sh.loop){ setTimeout(step, 320); return; }
        rep = 0; i++;
        let wait = sh.gap;
        if (sh.mimic){
          wait = estimateMs(sh.sents[idx]) * sh.mimic;
          if (row){ row.classList.remove('on'); row.classList.add('waiting'); }
        }
        setTimeout(step, wait);
      }
    });
  };
  step();
}

/* ---------- dịch cả đoạn ---------- */
function transBox(html, cls){
  const b = $('#shTransBox');
  if (b) b.innerHTML = html ? `<div class="sh-trans ${cls || ''}">${html}</div>` : '';
}

function runTranslate(){
  const sh = state.shadow;
  if (!sh.sents.length) return;

  const gg = `<a class="pbtn" href="${Translate.googleUrl(sh.raw || sh.sents.join(' '))}"
                 target="_blank" rel="noopener noreferrer">Mở cả đoạn trong Google Dịch</a>`;

  const hasWorker = !!(window.LANGLAB_CONFIG && (window.LANGLAB_CONFIG.translateWorker || '').trim());
  if (!Translate.online() && !hasWorker){
    transBox(`<b>Chưa dịch được ở chế độ này</b>
      <p>Trang đang mở trực tiếp từ tệp và chưa nối máy dịch. Khi mở qua link web, phần dịch chạy bình thường.</p>
      <p>Tạm thời dùng cách này, không cần cài gì:</p><div class="wp-actions" style="padding:10px 0 0">${gg}</div>`, 'warn');
    return;
  }

  transBox('<b>Đang dịch cả đoạn…</b><p>Cả đoạn được gửi một lượt để bản dịch có ngữ cảnh, nên hơi lâu một chút.</p>');

  Translate.run(sh.sents, (map, err) => {
    Object.assign(sh.trans, map);
    const total = sh.sents.length;
    const got = sh.sents.filter(s => sh.trans[Translate.hash(s)]).length;
    const missing = total - got;

    // Chỉ báo thành công khi ĐỦ câu. Trước đây chỗ này đếm cả bản dịch cũ
    // trong bộ nhớ nên vẫn báo « xong » dù lần gọi này hỏng — che mất lỗi.
    if (!missing){
      sh.showVi = true;
      saveShadow(); render();
      // Gọn thôi: một dòng xanh, tự ẩn sau vài giây. Bản dịch đã nằm dưới từng câu rồi.
      transBox('<b>Đã dịch xong ✓</b>', 'good');
      setTimeout(() => { if ($('#shTransBox')) transBox(''); }, 3000);
      return;
    }

    if (got){                                   // dịch được một phần
      sh.showVi = true;
      saveShadow(); render();
    }
    const partial = got ? `<p>Đã có ${got}/${total} câu, còn <b>${missing} câu chưa dịch được</b>.</p>` : '';

    if (err === 'no-key' || err === 'no-module'){
      transBox(`<b>Máy dịch của trang chưa sẵn sàng</b>
        ${partial}
        <p>Phần dịch chạy qua máy chủ dịch của trang (Cloudflare Worker) và máy chủ này chưa nhận được khoá API.</p>
        <p><i>Nếu bạn là người quản trị trang:</i> vào Worker <span class="mono">langlab-translate</span> →
        Settings → Variables and Secrets, thêm secret <span class="mono">GEMINI_API_KEY</span> (khoá lấy miễn phí ở
        <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>).</p>
        <p>Trong lúc đó, dùng tạm:</p>
        <div class="wp-actions" style="padding:10px 0 0">${gg}</div>`, 'warn');
      return;
    }

    transBox(`<b>Dịch không thành công</b>
      ${partial}
      <p class="mono" style="font-size:11px;word-break:break-all">${esc(String(err || 'không rõ lỗi'))}</p>
      <p>Thường do hết hạn mức của khoá hoặc mạng chập chờn — thử lại sau ít phút.
      Nếu bạn quản trị trang, kiểm tra khoá và hạn mức của Worker dịch.</p>
      <div class="wp-actions" style="padding:10px 0 0">${gg}</div>`, 'warn');
  });
}

/* ============================================================
   BẢNG TRA CẢ CÂU
   ============================================================ */
function openSentence(text){
  const el = wordPanel();
  const toks = Words.tokens(text);
  const gram = Words.grammarIn(text);
  const idx = Words.index();

  const srcBtn = s => `
    <a class="src" href="${s.url(text)}" target="_blank" rel="noopener noreferrer">
      <span class="src-top"><b>${esc(s.name)}</b><span class="src-tag">${esc(s.tag)}</span></span>
      <span class="src-ko ko">${esc(s.ko)}</span>
      <span class="src-note">${esc(s.note)}</span>
    </a>`;

  el.innerHTML = `
    <div class="wp-head">
      <div>
        <span class="eyebrow">Tra cả câu</span>
        <div class="wp-sent ko">${Words.mark(text)}</div>
        ${state.shadow.trans[Translate.hash(text)]
          ? `<div class="wp-sent-vi">${esc(state.shadow.trans[Translate.hash(text)])}</div>` : ''}
      </div>
${WP_TOOLS}
    </div>

    <div class="wp-actions">
      <button class="pbtn primary" data-speak="${esc(text)}">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe
      </button>
      <button class="pbtn" data-speak-slow="${esc(text)}">Chậm</button>
      <button class="pbtn" data-stop="1">Dừng</button>
    </div>

    <div class="wp-sec">
      <h5>Từ trong câu — bấm để tra</h5>
      <div class="tok-list">
        ${toks.map(w => {
          const a = Words.analyze(w);
          return `<button class="tok ${a.hit ? 'known' : ''}" data-kw="${esc(w)}">
            <span class="tok-ko ko">${esc(w)}</span>
            <span class="tok-vi">${a.hit ? esc(a.hit.vi) : (a.best !== w ? esc(a.best) : '?')}</span>
          </button>`;
        }).join('')}
      </div>
      <p class="wp-hint">Ô tô đậm là từ đã có trong ${idx ? idx.words.length : 0} từ của Sơ cấp 1.
      Ô nhạt là từ ngoài khoá — bấm vào vẫn tra được ở từ điển ngoài.</p>
    </div>

    <div class="wp-sec">
      <h5>Ngữ pháp nhận ra trong câu</h5>
      ${gram.length ? gram.map(g => `
        <div class="gram-hit">
          <div class="gram-hit-top">
            <span class="ko">${esc(g.form)}</span>
            <button class="chip link" data-lesson="${g.lesson}">Bài ${String(g.lesson).padStart(2,'0')}</button>
          </div>
          <div class="gram-hit-vi">${esc(g.vi)}</div>
          <div class="gram-hit-m">khớp ở «<span class="ko">${esc(g.matched)}</span>»</div>
          ${g.note ? `<p class="gram-hit-note">${esc(g.note)}</p>` : ''}
        </div>`).join('')
      : `<p class="wp-empty">Không thấy mẫu nào trong danh sách ngữ pháp Sơ cấp 1.
         Câu này có thể dùng cấu trúc của trình độ cao hơn.</p>`}
    </div>

    <div class="wp-sec">
      <h5>Tra cả câu ở nguồn ngoài</h5>
      <div class="src-list">${Words.SENTENCE_SOURCES.filter(s => s.primary).map(srcBtn).join('')}</div>
      <div class="src-list compact">${Words.SENTENCE_SOURCES.filter(s => !s.primary).map(srcBtn).join('')}</div>
      <p class="wp-hint">우리말샘 và Youglish tra theo cụm nên câu dài có thể không ra kết quả —
      khi đó hãy bấm vào một từ riêng ở trên.</p>
    </div>`;

  showPanel(el);
}

/* ============================================================
   MỘT MỤC TỪ ĐIỂN đầy đủ — dùng chung cho bảng tra và màn Từ điển
   ============================================================ */
const LEVEL_VI = { '초급':'Sơ cấp', '중급':'Trung cấp', '고급':'Cao cấp' };

function dictEntryHtml(hit){
  const senses = (hit.senses && hit.senses.length) ? hit.senses
               : [{ def_vi: hit.vi, def_ko: '' }];

  // cấu tạo từ: Hán-Hàn (kèm Hán-Việt nếu có) hay thuần Hàn
  let structure = '';
  if (hit.hanja){
    structure = `<div class="de-struct">
      <span class="de-lbl">Cấu tạo</span>
      <span class="de-hanja">${esc(hit.hanja)}</span>
      <span class="de-note">${hit.hv ? 'âm Hán-Việt: <b>' + esc(hit.hv) + '</b> — ' : ''}từ gốc Hán, nhớ chữ Hán là nhớ cả chùm từ cùng gốc.</span>
    </div>`;
  }

  const level = hit.level && LEVEL_VI[hit.level] ? LEVEL_VI[hit.level] : (hit.level || '');

  return `
    <div class="dict-entry">
      <div class="de-head">
        <span class="de-word ko">${esc(hit.ko)}</span>
        ${hit.rom ? `<span class="de-rom">[${esc(hit.rom)}]</span>` : ''}
      </div>
      <div class="de-meta">
        ${hit.pos ? `<span class="chip">${esc(hit.pos)}</span>` : ''}
        ${level ? `<span class="chip lv">${esc(level)}</span>` : ''}
        ${hit.hanja ? `<span class="chip gold">${esc(hit.hanja)}${hit.hv ? ' · ' + esc(hit.hv) : ''}</span>` : ''}
        ${hit.lesson
          ? `<button class="chip link" data-lesson="${hit.lesson}" data-lv="${esc(hit.level || '')}">Bài ${String(hit.lesson).padStart(2,'0')}</button>`
          : `<span class="chip soft">${esc(hit.theme || '')}</span>`}
      </div>
      ${structure}
      <ol class="de-senses">
        ${senses.map(s => `
          <li>
            <div class="de-vi">${esc(s.def_vi || '')}</div>
            ${s.def_ko ? `<div class="de-ko ko">${esc(s.def_ko)}</div>` : ''}
            ${(s.examples && s.examples.length) ? `
              <div class="de-ex-list">
                ${s.examples.map(e => `
                  <div class="de-ex">
                    <span class="ko">${Words.mark(typeof e === 'string' ? e : e.ko)}</span>
                    ${(e && e.vi) ? `<span class="de-ex-vi">${esc(e.vi)}</span>` : ''}
                  </div>`).join('')}
              </div>` : ''}
          </li>`).join('')}
      </ol>
      ${senses.length > 1 ? `<p class="de-hint">${senses.length} nghĩa theo ngữ cảnh khác nhau.</p>` : ''}
      ${(hit.examples && hit.examples.length) ? `
        <div class="de-usage">
          <span class="de-lbl">Cách dùng</span>
          <div class="de-ex-list">
            ${hit.examples.map(e => {
              const ko = typeof e === 'string' ? e : e.ko;
              return `<div class="de-ex">
                <span class="ko">${Words.mark(ko)}</span>
                ${(e && e.vi) ? `<span class="de-ex-vi">${esc(e.vi)}</span>` : ''}
                <button class="icon-btn de-ex-play" data-speak="${esc(ko)}" title="Nghe">
                  <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
                </button>
              </div>`;
            }).join('')}
          </div>
        </div>` : ''}
    </div>`;
}

/* ============================================================
   BẢNG TRA TỪ — mở khi bấm vào bất kỳ từ tiếng Hàn nào
   ============================================================ */
let wordState = { token:'', query:'' };

/* ---------- cửa sổ tra từ: nổi, kéo-thả, thu gọn ---------- */
const WP_DESKTOP = 641;   // từ 641px mới cho kéo-thả (khớp breakpoint mobile 640)
const WP_TOOLS = `
      <div class="wp-tools">
        <button class="icon-btn wp-min" id="wpMin" title="Thu gọn / mở rộng">
          <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <button class="icon-btn wp-close" id="wpClose" title="Đóng">
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>`;

function clampPanel(el, left, top){
  const w = el.offsetWidth || 384;
  const maxL = Math.max(8, window.innerWidth  - w - 8);
  const maxT = Math.max(8, window.innerHeight - 46 - 8);   // luôn chừa header để kéo lại được
  return { left: Math.max(8, Math.min(left, maxL)), top: Math.max(8, Math.min(top, maxT)) };
}

function showPanel(el){
  el.classList.add('open');
  el.classList.toggle('collapsed', !!store.get('wpanelCollapsed', false));
  if (window.innerWidth >= WP_DESKTOP){
    const saved = store.get('wpanelPos', null);
    const pos = saved || { left: window.innerWidth - 384 - 24, top: 76 };
    const c = clampPanel(el, pos.left, pos.top);
    el.style.left = c.left + 'px'; el.style.top = c.top + 'px';
    el.style.right = 'auto'; el.style.bottom = 'auto';
  } else {
    el.style.left = el.style.top = el.style.right = el.style.bottom = '';
  }
  document.body.classList.add('wp-open');
}

/* kéo cửa sổ bằng thanh tiêu đề (chuột hoặc cảm ứng) */
let wpDrag = null;
document.addEventListener('pointerdown', e => {
  if (window.innerWidth < WP_DESKTOP) return;
  const head = e.target.closest && e.target.closest('.wp-head');
  if (!head) return;
  if (e.target.closest('button, a, input, textarea, select')) return;   // bấm nút thì không kéo
  const el = head.closest('.wpanel');
  if (!el) return;
  const r = el.getBoundingClientRect();
  wpDrag = { el, dx: e.clientX - r.left, dy: e.clientY - r.top };
  el.classList.add('dragging');
});
document.addEventListener('pointermove', e => {
  if (!wpDrag) return;
  const c = clampPanel(wpDrag.el, e.clientX - wpDrag.dx, e.clientY - wpDrag.dy);
  wpDrag.el.style.left = c.left + 'px'; wpDrag.el.style.top = c.top + 'px';
  wpDrag.el.style.right = 'auto'; wpDrag.el.style.bottom = 'auto';
});
function wpDragEnd(){
  if (!wpDrag) return;
  const el = wpDrag.el; el.classList.remove('dragging');
  store.set('wpanelPos', { left: parseInt(el.style.left, 10) || 0, top: parseInt(el.style.top, 10) || 0 });
  wpDrag = null;
}
document.addEventListener('pointerup', wpDragEnd);
document.addEventListener('pointercancel', wpDragEnd);

function wordPanel(){
  let el = $('#wordPanel');
  if (!el){
    el = document.createElement('aside');
    el.id = 'wordPanel'; el.className = 'wpanel';
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  return el;
}

function openWord(token, queryOverride){
  const a  = Words.analyze(token);
  const q  = queryOverride || a.best;
  wordState = { token: token, query: q };
  const ex = Words.examples(token, 5);
  const hit = a.hit;
  const el = wordPanel();

  const primary = Words.SOURCES.filter(s => s.primary);
  const rest    = Words.SOURCES.filter(s => !s.primary);
  const srcBtn = s => `
    <a class="src" href="${s.url(q)}" target="_blank" rel="noopener noreferrer">
      <span class="src-top">
        <b>${esc(s.name)}</b>
        <span class="src-tag">${esc(s.tag)}</span>
      </span>
      <span class="src-ko ko">${esc(s.ko)}</span>
      <span class="src-note">${esc(s.note)}</span>
    </a>`;

  el.innerHTML = `
    <div class="wp-head">
      <div>
        <span class="eyebrow">Tra từ</span>
        <div class="wp-word ko">${esc(token)}</div>
        ${hit ? `<div class="wp-rom">${esc(hit.rom)}</div>` : ''}
      </div>
${WP_TOOLS}
    </div>

    <div class="wp-actions">
      <button class="pbtn primary" data-speak="${esc(token)}">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg> Nghe
      </button>
      <button class="pbtn" data-speak-slow="${esc(token)}">Chậm</button>
      <button class="pbtn" data-syl="${esc(token)}">Từng chữ</button>
      <button class="pbtn" data-add="${esc(token)}">+ Thẻ</button>
      <button class="pbtn" data-write="${esc(token)}">Nét viết</button>
    </div>

    <div class="wp-sec">
      <h5>Dạng dùng để tra</h5>
      <div class="form-chips">
        ${a.forms.map(f => `
          <button class="fchip ${f.form === q ? 'on' : ''}" data-kw-form="${esc(f.form)}">
            <span class="ko">${esc(f.form)}</span>
            <span>${esc(f.why)}</span>
          </button>`).join('')}
      </div>
      <p class="wp-hint">Tiếng Hàn dính trợ từ và đuôi chia vào sau từ, nên tra nguyên dạng thường không ra.
        Chọn dạng gốc rồi mới bấm sang từ điển.</p>
    </div>

    <div class="wp-sec">
      <h5>Mục từ</h5>
      ${hit ? dictEntryHtml(hit)
      : `<p class="wp-empty">Chưa có trong ${Words.index().words.length} từ của LangLab. Dùng các từ điển bên dưới để tra.</p>`}
    </div>

    <div class="wp-sec">
      <h5>Dùng trong câu</h5>
      ${ex.length ? ex.map(s => `
        <div class="wp-ex">
          <span class="ko">${Words.mark(s.ko)}</span>
          <span class="wp-ex-vi">${esc(s.vi)}</span>
          <span class="wp-ex-from">${esc(s.from)}</span>
          <button class="icon-btn wp-ex-play" data-speak="${esc(s.ko)}" title="Nghe câu này">
            <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
          </button>
        </div>`).join('')
      : `<p class="wp-empty">Chưa có câu nào trong khoá dùng từ này. Tatoeba và 우리말샘 bên dưới có sẵn hàng trăm câu thật.</p>`}
    </div>

    <div class="wp-sec">
      <h5>Tra ở từ điển ngoài — «${esc(q)}»</h5>
      <div class="src-list">${primary.map(srcBtn).join('')}</div>
      <div class="src-list compact">${rest.map(srcBtn).join('')}</div>
    </div>`;

  showPanel(el);
}

function closeWord(){
  const el = $('#wordPanel');
  if (el) el.classList.remove('open');
  document.body.classList.remove('wp-open');
}

/* ---------- gợi ý nhanh khi rê chuột ---------- */
let tipTimer;
function showTip(el){
  const token = el.dataset.kw;
  const a = Words.analyze(token);
  let tip = $('#kwtip');
  if (!tip){ tip = document.createElement('div'); tip.id = 'kwtip'; tip.className = 'kwtip'; document.body.appendChild(tip); }
  tip.innerHTML = a.hit
    ? `<b class="ko">${esc(a.hit.ko)}</b> <span class="r">${esc(a.hit.rom)}</span><span class="v">${esc(a.hit.vi)}</span>`
    : `<b class="ko">${esc(token)}</b><span class="v">Chưa có trong khoá — bấm để tra ngoài</span>`;
  const r = el.getBoundingClientRect();
  tip.style.left = Math.max(8, Math.min(window.innerWidth - 250, r.left)) + 'px';
  tip.style.top  = (r.top > 90 ? r.top - 8 : r.bottom + 8) + 'px';
  tip.classList.toggle('below', r.top <= 90);
  tip.classList.add('show');
}
function hideTip(){ const t = $('#kwtip'); if (t) t.classList.remove('show'); }

document.addEventListener('mouseover', e => {
  const k = e.target.closest && e.target.closest('.kw');
  if (!k){ clearTimeout(tipTimer); hideTip(); return; }
  clearTimeout(tipTimer);
  tipTimer = setTimeout(() => showTip(k), 180);
});
document.addEventListener('scroll', hideTip, true);

/* ============================================================
   SỰ KIỆN TOÀN CỤC
   ============================================================ */
document.addEventListener('click', e => {
  const t = e.target;

  /* ----- bảng tra từ ----- */
  // gồm cả span .kw trong câu và ô .tok trong bảng tra câu
  const kw = t.closest('[data-kw]');
  if (kw){ hideTip(); openWord(kw.dataset.kw); return; }

  /* ----- luyện shadowing ----- */
  if (t.closest('#shParse') || t.closest('#shSample')){
    const box = $('#shInput');
    const raw = t.closest('#shSample') ? SAMPLE_TEXT : (box ? box.value : '');
    const sents = Words.splitSentences(raw);
    if (!sents.length){ toast('Chưa tách được câu nào — đoạn văn có chữ Hàn chưa?'); return; }
    state.shadow.raw = raw.trim();
    state.shadow.sents = sents;
    state.shadow.breaks = {};
    saveShadow();
    render();
    toast('Đã tách ' + sents.length + ' câu');
    return;
  }
  if (t.closest('#shEdit')){
    shStop();
    const keep = state.shadow.raw;
    state.shadow.sents = [];
    saveShadow();
    render();
    const box = $('#shInput'); if (box){ box.value = keep; box.focus(); }
    return;
  }

  const shb = t.closest('[data-sh-break]');
  if (shb){
    const i = +shb.dataset.shBreak;
    state.shadow.breaks[i] = true;
    saveShadow(); render();
    return;
  }
  const shm = t.closest('[data-sh-merge]');
  if (shm){
    delete state.shadow.breaks[+shm.dataset.shMerge];
    saveShadow(); render();
    return;
  }
  const shp = t.closest('[data-sh-play]');
  if (shp){
    const i = +shp.dataset.shPlay;
    const slow = shp.dataset.slow === '1';
    shStop();
    const mine = ++shToken;
    const row = $(`.sh-row[data-si="${i}"]`);
    if (row) row.classList.add('on');
    let rep = 0;
    const once = () => {
      if (mine !== shToken) return;
      sayOne(state.shadow.sents[i], { slow: slow || state.shadow.slow, onEnd(){
        if (mine !== shToken) return;
        rep++;
        if (rep < state.shadow.loop){ setTimeout(once, 320); return; }
        if (row) row.classList.remove('on');
      }});
    };
    once();
    return;
  }
  const shc = t.closest('[data-sh-chunk]');
  if (shc){
    const ci = +shc.dataset.shChunk;
    const c = shadowChunks()[ci];
    if (c) shPlay(c.indices, ci);
    return;
  }
  if (t.closest('[data-sh-all]')){
    shPlay(state.shadow.sents.map((_, i) => i));
    return;
  }
  const shl = t.closest('[data-sh-loop]');
  if (shl){
    state.shadow.loop = +shl.dataset.shLoop;
    $$('[data-sh-loop]').forEach(x => x.setAttribute('aria-pressed', x === shl));
    saveShadow();
    return;
  }
  const shs = t.closest('[data-sh-slow]');
  if (shs){
    state.shadow.slow = shs.dataset.shSlow === '1';
    $$('[data-sh-slow]').forEach(x => x.setAttribute('aria-pressed', x === shs));
    saveShadow();
    return;
  }
  const shx = t.closest('[data-sh-mimic]');
  if (shx){
    state.shadow.mimic = parseFloat(shx.dataset.shMimic);
    saveShadow(); render();
    return;
  }
  if (t.closest('#shToggleVi')){
    state.shadow.showVi = !state.shadow.showVi;
    saveShadow(); render();
    return;
  }
  if (t.closest('#shTrans')){ runTranslate(); return; }

  const sent = t.closest('[data-sent]');
  if (sent){
    const i = +sent.dataset.sent;
    const txt = state.shadow.sents[i];
    if (txt) openSentence(txt);
    return;
  }

  const kwo = t.closest('[data-kw-open]');
  if (kwo){ openWord(kwo.dataset.kwOpen); return; }

  const kwf = t.closest('[data-kw-form]');
  if (kwf){ openWord(wordState.token, kwf.dataset.kwForm); return; }

  if (t.closest('#wpMin')){
    const p = $('#wordPanel');
    if (p){ const c = !p.classList.contains('collapsed'); p.classList.toggle('collapsed', c); store.set('wpanelCollapsed', c); }
    return;
  }
  if (t.closest('#wpClose')){ closeWord(); return; }

  if (t.closest('[data-stop]')){ stopAudio(); return; }

  const ss = t.closest('[data-speak-slow]');
  if (ss){ speakSlow(ss.dataset.speakSlow); return; }

  const sy = t.closest('[data-syl]');
  if (sy){
    // đọc rời từng chữ để nghe rõ patchim và chỗ nối âm
    const chars = sy.dataset.syl.split('').filter(c => Words.HANGUL_RE.test(c));
    if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return; }
    Speech.onReady(() => {
      if (ensureVoice()) Speech.speakLines(chars, { rate: Math.max(.5, Speech.cfg.rate - .2), gap: 240 });
    });
    return;
  }

  const lvchip = t.closest('.level-chip');
  if (lvchip && lvchip.dataset.level){
    if (!lvchip.disabled && lvchip.dataset.level !== state.level){
      state.level = lvchip.dataset.level; store.set('level', state.level);
      quizData = null; state.quiz = null; state.lesson = null; state.view = 'home';
      render();
    }
    return;
  }

  const nav = t.closest('[data-go]');
  if (nav){ go(nav.dataset.go); return; }

  const les = t.closest('[data-lesson]');
  if (les){
    if (les.dataset.lv && les.dataset.lv !== state.level){ state.level = les.dataset.lv; store.set('level', state.level); quizData = null; state.quiz = null; }
    closeWord(); go('lesson', +les.dataset.lesson); return;
  }

  const tab = t.closest('.tab');
  if (tab){
    state.tab = tab.dataset.tab;
    $$('.tab').forEach(x => x.setAttribute('aria-selected', x === tab));
    const l = curLesson();
    $('#tabbody').innerHTML = VIEWS['tab_' + state.tab](l);
    if (state.tab === 'write') mountTrace();
    return;
  }

  const sp = t.closest('[data-speak]');
  if (sp){ speak(sp.dataset.speak); return; }

  if (t.closest('[data-speak-all]')){
    const l = curLesson();
    const rows = $$('.dlg-row');
    const lines = l.dialogue.map(d => d.ko);
    const hi = i => {
      rows.forEach((r, k) => r.classList.toggle('speaking', k === i));
      if (rows[i] && rows[i].scrollIntoView) rows[i].scrollIntoView({ block:'nearest', behavior:'smooth' });
    };
    const clear = () => rows.forEach(r => r.classList.remove('speaking'));

    Speech.stop();
    TTS.playSeq(lines, {
      onLine: hi,
      onEnd: clear,
      onFail(){                                  // chưa thu sẵn → dùng giọng máy
        if (!Speech.supported){ toast('Trình duyệt này chưa hỗ trợ phát âm'); return; }
        Speech.onReady(() => {
          if (!ensureVoice()) return;
          Speech.speakLines(lines, { onChunk: c => hi(c.line), onEnd: clear });
        });
      }
    });
    return;
  }

  const add = t.closest('[data-add]');
  if (add){
    const k = add.dataset.add;
    if (!state.deck.includes(k)){ state.deck.unshift(k); store.set('deck', state.deck); toast('Đã thêm ' + k + ' vào bộ thẻ'); }
    else toast(k + ' đã có trong bộ thẻ');
    return;
  }

  const wr = t.closest('[data-write]');
  if (wr){
    const ch = wr.dataset.write[0];
    const parts = decomposeHangul(ch);
    if (parts){ stageMode = 'syllable'; stageChar = ch; state.syll = { cho:parts.cho, jung:parts.jung, jong:parts.jong }; }
    else if (JAMO[ch]){ stageMode = 'jamo'; state.jamo = ch; }
    go('write');
    return;
  }

  const jb = t.closest('[data-jamo]');
  if (jb){
    state.jamo = jb.dataset.jamo; stageMode = 'jamo';
    $$('.jbtn').forEach(b => b.setAttribute('aria-pressed', b === jb));
    drawStage();
    return;
  }

  const pk = t.closest('[data-pick]');
  if (pk){
    state.syll[pk.dataset.pick] = pk.dataset.val;
    $$(`[data-pick="${pk.dataset.pick}"]`).forEach(b => b.setAttribute('aria-pressed', b === pk));
    const ch = composeHangul(state.syll.cho, state.syll.jung, state.syll.jong);
    const pv = $('#syllPreview'); if (pv) pv.textContent = ch ? 'Kết quả: ' + ch : '';
    return;
  }

  if (t.closest('[data-build]')){
    const ch = composeHangul(state.syll.cho, state.syll.jung, state.syll.jong);
    if (!ch){ toast('Chưa chọn đủ phụ âm đầu và nguyên âm'); return; }
    stageMode = 'syllable'; stageChar = ch; drawStage();
    return;
  }

  if (t.closest('#play')){ drawStage(); return; }

  const spd = t.closest('[data-speed]');
  if (spd){
    state.speed = +spd.dataset.speed;
    $$('[data-speed]').forEach(b => b.setAttribute('aria-pressed', b === spd));
    return;
  }

  const st = t.closest('[data-step]');
  if (st){
    animToken++;                                  // dừng animation đang chạy
    const svg = $('#paper .glyph');
    if (svg){
      showUpTo(svg, +st.dataset.step);
      $$('.step-dot').forEach((d, k) => d.setAttribute('aria-pressed', k === +st.dataset.step));
    }
    return;
  }

  if (t.closest('[data-clear-trace]')){ clearTrace(); return; }

  if (t.closest('#flipBtn') || t.closest('#flash')){
    const f = $('#flash'); if (!f) return;
    const on = f.classList.toggle('open');
    const b = $('#flipBtn'); if (b) b.textContent = on ? 'Ẩn đáp án' : 'Lật thẻ';
    return;
  }

  const gr = t.closest('.grade');
  if (gr){
    $('#flash').classList.remove('open');
    const b = $('#flipBtn'); if (b) b.textContent = 'Lật thẻ';
    toast('Đã ghi nhận · ' + gr.querySelector('b').textContent);
    return;
  }

  /* ----- bài tập ----- */
  const qopt = t.closest('[data-quiz-opt]');
  if (qopt){
    const Q = state.quiz;
    if (Q && !Q.answered){
      Q.chosen = +qopt.dataset.quizOpt; Q.answered = true;
      if (Q.chosen === Q.qs[Q.idx].correct) Q.score++;
      paintQuiz();
    }
    return;
  }
  const qadd = t.closest('[data-quiz-oadd]');
  if (qadd){ const q = state.quiz.qs[state.quiz.idx]; q.order.push(+qadd.dataset.quizOadd); paintQuiz(); return; }
  const qorm = t.closest('[data-quiz-orm]');
  if (qorm){ const q = state.quiz.qs[state.quiz.idx]; const id = +qorm.dataset.quizOrm; q.order = q.order.filter(x => x !== id); paintQuiz(); return; }
  if (t.closest('[data-quiz-oclear]')){ state.quiz.qs[state.quiz.idx].order = []; paintQuiz(); return; }
  if (t.closest('[data-quiz-ocheck]')){
    const Q = state.quiz, q = Q.qs[Q.idx];
    Q.answered = true;
    if (q.order.map(id => q.chips.find(x => x.id === id).t).join(' ') === q.tokens.join(' ')) Q.score++;
    paintQuiz(); return;
  }
  if (t.closest('[data-quiz-next]')){ const Q = state.quiz; Q.idx++; Q.answered = false; Q.chosen = null; paintQuiz(); return; }
  if (t.closest('[data-quiz-restart]')){ quizStart(state.quiz.type); paintQuiz(); return; }
  const qsay = t.closest('[data-quiz-say]');
  if (qsay){ speak(qsay.dataset.quizSay); return; }

  const qt = t.closest('.qt');
  if (qt){ quizStart(qt.dataset.qtype); $$('.qt').forEach(x => x.setAttribute('aria-pressed', x === qt)); paintQuiz(); return; }

  /* ----- thi thử TOPIK ----- */
  const tkstart = t.closest('[data-topik-start]');
  if (tkstart){ topikStartTest(tkstart.dataset.topikStart); return; }
  const tkans = t.closest('[data-topik-ans]');
  if (tkans){
    const qi = +tkans.dataset.topikAns, oi = +tkans.dataset.opt;
    if (state.topik){ state.topik.answers[qi] = oi; }
    const box = tkans.closest('.tk-opts');
    if (box) box.querySelectorAll('.tk-opt').forEach(x => x.classList.toggle('on', x === tkans));
    return;
  }
  if (t.closest('[data-topik-submit]')){ topikStopTimer(); if (state.topik) state.topik.phase = 'done'; render(); return; }
  const tkretry = t.closest('[data-topik-retry]');
  if (tkretry){ topikStartTest(tkretry.dataset.topikRetry); return; }
  if (t.closest('[data-topik-home]')){ topikStopTimer(); state.topik = null; render(); return; }

  const th = t.closest('#themeBtn');
  if (th){
    const order = ['auto','light','dark'];
    state.theme = order[(order.indexOf(state.theme) + 1) % 3];
    applyTheme(); store.set('theme', state.theme);
    return;
  }
});

/* phím tắt */
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && state.view === 'srs'){
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    e.preventDefault();
    const f = $('#flash'); if (!f) return;
    const on = f.classList.toggle('open');
    const b = $('#flipBtn'); if (b) b.textContent = on ? 'Ẩn đáp án' : 'Lật thẻ';
  }
  if (e.key === 'Enter' && state.view === 'write'){ drawStage(); }
  if (e.key === 'Escape'){ closeWord(); hideTip(); Speech.stop(); }
  // Enter trên một từ = mở bảng tra (dùng bàn phím)
  if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('kw')){
    e.preventDefault(); openWord(e.target.dataset.kw);
  }
});

/* tìm nhanh trên thanh trên cùng + ô chuyển số */
document.addEventListener('input', e => {
  if (e.target.id === 'numInput'){
    const out = $('#numOut'); if (!out) return;
    const n = parseInt(e.target.value, 10);
    if (isNaN(n) || n < 0){ out.innerHTML = '<span class="no-note">Gõ một số vào ô bên trái…</span>'; return; }
    const sino = koSino(n), nat = (n >= 1 && n <= 99) ? koNative(n) : '';
    out.innerHTML =
      `<span class="no-line"><span class="no-tag">Hán Hàn</span> <span class="ko">${esc(sino)}</span> <button class="mini" data-speak="${esc(sino)}">Nghe</button></span>` +
      (nat ? `<span class="no-line"><span class="no-tag">Thuần Hàn</span> <span class="ko">${esc(nat)}</span> <button class="mini" data-speak="${esc(nat)}">Nghe</button></span>`
           : `<span class="no-line no-note">Thuần Hàn chỉ có từ 1–99</span>`);
    return;
  }
  if (e.target.id !== 'topq') return;
  const v = e.target.value.trim();
  if (!v) return;
  if (state.view !== 'dict'){ go('dict'); }
  const d = $('#dq'); if (d){ d.value = v; d.dispatchEvent(new Event('input')); }
});

/* ---------- giao diện sáng/tối ---------- */
function applyTheme(){
  const r = document.documentElement;
  if (state.theme === 'auto') r.removeAttribute('data-theme');
  else r.setAttribute('data-theme', state.theme);
  const b = $('#themeBtn');
  if (b) b.textContent = { auto:'Giao diện: theo hệ thống', light:'Giao diện: sáng', dark:'Giao diện: tối' }[state.theme];
}

/* ---------- khởi động ---------- */
if (typeof window !== "undefined") window.__langlab_wordcount = () => (Words.index() ? Words.index().words.length : 0);

Words.build(COURSE_KO,
  (typeof VOCAB_COMMON !== 'undefined') ? VOCAB_COMMON : [],
  (typeof DICT_KO !== 'undefined') ? DICT_KO : []);

/* ---------- nạp từ điển KRDict kiểu lazy ----------
   Từ điển lớn (có thể tới ~50k mục) không tải lúc khởi động để app hiện nhanh.
   Tải ngầm ngay sau khi vẽ xong; nếu đã nhúng sẵn (bản gộp) thì bỏ qua. */
let dictLoaded = (typeof DICT_KO !== 'undefined') && DICT_KO.length > 0;
function loadDict(cb){
  if (dictLoaded){ cb && cb(false); return; }
  dictLoaded = true;
  const finish = () => {
    const added = (typeof window.DICT_KO !== 'undefined') ? Words.addDict(window.DICT_KO) : 0;
    cb && cb(added > 0);
  };
  const s = document.createElement('script');
  s.src = 'js/dict-ko.js';
  s.onload = finish;
  s.onerror = () => { cb && cb(false); };
  document.head.appendChild(s);
}
applyTheme();
render();

// Tải từ điển KRDict ngầm ngay sau khi app đã hiện — không chặn khởi động.
// Nếu người dùng đang ở màn Từ điển, vẽ lại khi có thêm từ.
setTimeout(() => loadDict(added => {
  if (added && (state.view === 'dict')) render();
}), 300);

})();
