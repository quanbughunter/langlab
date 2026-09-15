/* ============================================================
   LangLab — KHO NGHĨA TỪ ĐIỂN TIẾNG TRUNG (soạn tay) cho các từ lõi
   ------------------------------------------------------------
   Khoá học chỉ ghi được MỘT dòng nghĩa cho mỗi từ. Tệp này bù phần mà một
   cuốn từ điển thật phải có: nhiều nghĩa tách bạch, cách dùng, chỗ người Việt
   hay nhầm, lượng từ đi kèm, kết hợp thường gặp, từ trái nghĩa.

   Khoá của mỗi mục phải TRÙNG với chữ Hán của từ trong khoá học (COURSE_ZH),
   vì app gộp theo khoá đó (xem zhEntryHTML trong js/app.js). Mục nào không
   khớp từ nào thì bị bỏ qua, không gây lỗi.

   Shape:
     '词': {
       senses: [{ vi, note?, ex?:[chữ Hán, pinyin, nghĩa tiếng Việt] }],
       note?:  'ghi chú cách dùng chung cho cả mục',
       coll?:  ['kết hợp — nghĩa', …],
       syn?:   'từ gần nghĩa', ant?: 'từ trái nghĩa', meas?: 'lượng từ'
     }
   Nội dung do LangLab tự soạn, không chép từ từ điển nào.
   ============================================================ */

const ZH_DICT = {

  /* ---------- Chào hỏi · xã giao ---------- */
  '你好':{ senses:[{vi:'xin chào', note:'Câu chào trung tính, dùng được mọi lúc, không phân biệt sáng chiều.', ex:['你好！我叫小明。','Nǐ hǎo! Wǒ jiào Xiǎo Míng.','Xin chào! Tôi tên Tiểu Minh.']}], note:'Với người lớn tuổi hoặc cần lịch sự thì dùng 您好. Chào nhiều người: 你们好. Khác tiếng Việt, người Trung ít chào bằng cách hỏi “ăn cơm chưa” trong hoàn cảnh trang trọng.', coll:['你好吗？— Bạn khoẻ không?','大家好 — chào cả nhà'] },
  '您好':{ senses:[{vi:'chào (kính trọng)', note:'您 là dạng lịch sự của 你, dùng với thầy cô, người lớn tuổi, khách hàng.'}], note:'您 không có dạng số nhiều chuẩn; chào nhiều người vẫn nói 你们好 hoặc 大家好.' },
  '谢谢':{ senses:[{vi:'cảm ơn', ex:['谢谢你的帮助。','Xièxie nǐ de bāngzhù.','Cảm ơn sự giúp đỡ của bạn.']}], note:'Đáp lại: 不客气 hoặc 不用谢. Âm tiết sau đọc nhẹ (xièxie), không đọc thành hai thanh 4.', coll:['谢谢你 — cảm ơn bạn','多谢 — cảm ơn nhiều (thân mật)'] },
  '不客气':{ senses:[{vi:'không có gì, đừng khách sáo', note:'Câu đáp chuẩn cho 谢谢.'}], note:'Nghĩa đen: đừng khách sáo (客气 = khách khí). Cách đáp khác: 不用谢, 没事儿.' },
  '对不起':{ senses:[{vi:'xin lỗi', note:'Dùng khi mình có lỗi thật sự hoặc khi làm phiền ai.'}], note:'Đáp lại: 没关系. Muốn gọi người lạ để hỏi đường thì dùng 请问 chứ không dùng 对不起.', syn:'抱歉 (trang trọng hơn)' },
  '没关系':{ senses:[{vi:'không sao đâu', note:'Câu đáp cho 对不起.'}], note:'Khẩu ngữ còn nói 没事儿.' },
  '再见':{ senses:[{vi:'tạm biệt', note:'Nghĩa đen: gặp lại.'}], coll:['明天见 — mai gặp','一会儿见 — lát nữa gặp','回头见 — gặp sau'] },
  '请':{ senses:[{vi:'mời, xin mời', ex:['请坐。','Qǐng zuò.','Mời ngồi.']},{vi:'làm ơn (đặt trước động từ để lịch sự)'},{vi:'mời (ai đi đâu, ăn gì) — đãi'}], note:'请 đứng trước động từ là cách lịch sự hoá đơn giản nhất: 请进 (mời vào), 请等一下 (xin đợi chút).', coll:['请问 — xin hỏi','请客 — đãi khách, mời ăn'] },

  /* ---------- Đại từ · từ để hỏi ---------- */
  '什么':{ senses:[{vi:'gì, cái gì', ex:['这是什么？','Zhè shì shénme?','Đây là cái gì?']},{vi:'gì đó (nghi vấn không xác định)', note:'你想吃点什么吗？— Bạn muốn ăn gì đó không?'}], note:'Khác tiếng Việt: từ để hỏi ĐỨNG ĐÚNG VỊ TRÍ của thành phần được hỏi, không đảo lên đầu câu. 你叫什么名字？chứ không phải “什么 bạn tên”.' },
  '谁':{ senses:[{vi:'ai'}], note:'Đọc shéi trong khẩu ngữ, shuí trong văn viết — cả hai đều đúng.' },
  '哪':{ senses:[{vi:'nào (chọn trong nhóm)', note:'Luôn đi với lượng từ: 哪个 (cái nào), 哪本书 (quyển nào).'}], note:'Phân biệt 哪 (nào) với 那 (kia) — chỉ khác thanh điệu nǎ / nà, viết gần giống, rất dễ nhầm.' },
  '哪儿':{ senses:[{vi:'ở đâu'}], note:'Miền Bắc nói 哪儿 (nǎr), miền Nam và văn viết dùng 哪里 (nǎlǐ). Nghĩa như nhau.' },
  '几':{ senses:[{vi:'mấy (hỏi số lượng nhỏ, dưới 10)', ex:['你家有几口人？','Nǐ jiā yǒu jǐ kǒu rén?','Nhà bạn có mấy người?']},{vi:'vài, mấy (số lượng không xác định)', note:'几个朋友 — vài người bạn.'}], note:'Hỏi số lớn hoặc không đoán được thì dùng 多少. 几 luôn đi kèm lượng từ, 多少 thì không bắt buộc.' },
  '多少':{ senses:[{vi:'bao nhiêu'}], note:'Hỏi giá: 多少钱？Hỏi số điện thoại: 你的电话号码是多少？' },

  /* ---------- Hư từ · trợ từ (chỗ khó nhất) ---------- */
  '是':{ senses:[{vi:'là', note:'Nối hai danh từ. KHÔNG dùng trước tính từ.', ex:['我是学生。','Wǒ shì xuéshēng.','Tôi là học sinh.']},{vi:'đúng, phải (đáp lại)'}], note:'Sai kinh điển của người Việt: “Tôi rất bận” KHÔNG phải 我是很忙 mà là 我很忙 — trước tính từ dùng 很 chứ không dùng 是.', ant:'不是' },
  '的':{ senses:[{vi:'trợ từ sở hữu: của', ex:['这是我的书。','Zhè shì wǒ de shū.','Đây là sách của tôi.']},{vi:'trợ từ định ngữ: nối cụm bổ nghĩa với danh từ', note:'很大的房子 — ngôi nhà rất to.'},{vi:'trợ từ kết thúc câu nhấn mạnh sự khẳng định', note:'我会去的。— Tôi nhất định sẽ đi.'}], note:'Bỏ 的 khi quan hệ thân thuộc hoặc rất gắn bó: 我妈妈, 我们学校, 我朋友. Đọc nhẹ (de), không đọc dí.' },
  '了':{ senses:[{vi:'đặt sau động từ: việc đã hoàn thành', ex:['我吃了饭。','Wǒ chī le fàn.','Tôi ăn cơm rồi.']},{vi:'đặt cuối câu: tình hình đã thay đổi', note:'下雨了。— Mưa rồi (trước đó chưa mưa).'}], note:'了 KHÔNG phải thì quá khứ. Câu quá khứ mà nói thói quen thì không dùng 了: 小时候我常常去那儿 (không thêm 了). Phủ định dùng 没 và BỎ 了: 我没吃饭.' },
  '吗':{ senses:[{vi:'trợ từ nghi vấn, biến câu trần thuật thành câu hỏi có/không', ex:['你是学生吗？','Nǐ shì xuéshēng ma?','Bạn là học sinh phải không?']}], note:'Đã dùng từ để hỏi (什么, 谁, 几…) thì KHÔNG thêm 吗 nữa. Cũng không dùng 吗 với câu hỏi chính phản (你去不去？).' },
  '呢':{ senses:[{vi:'trợ từ hỏi lại: còn… thì sao', ex:['我很好，你呢？','Wǒ hěn hǎo, nǐ ne?','Tôi khoẻ, còn bạn?']},{vi:'trợ từ cuối câu diễn tả việc đang diễn ra', note:'他在睡觉呢。— Anh ấy đang ngủ đấy.'}] },
  '不':{ senses:[{vi:'không (phủ định hiện tại, tương lai, thói quen, ý muốn)'}], note:'不 biến thanh: trước thanh 4 đọc thành bú (不是 bú shì), các trường hợp khác giữ bù. Phủ định việc ĐÃ xảy ra thì phải dùng 没 chứ không dùng 不.' },
  '没':{ senses:[{vi:'không, chưa (phủ định việc đã xảy ra)'},{vi:'không có (phủ định của 有)'}], note:'Cặp đối lập cần thuộc: 我不去 (tôi không đi — ý muốn) ≠ 我没去 (tôi đã không đi — sự việc). 有 chỉ phủ định bằng 没有, không bao giờ 不有.' },
  '很':{ senses:[{vi:'rất'}], note:'Trong câu tính từ, 很 thường chỉ là chỗ đệm chứ không thật sự “rất”: 我很好 nghĩa là “tôi khoẻ”. Nói 我好 trống trơn nghe như đang so sánh dở dang.' },
  '太':{ senses:[{vi:'quá (mức, thường mang ý chê)', ex:['太贵了！','Tài guì le!','Đắt quá!']}], note:'Hay đi với 了 ở cuối: 太…了. Khen thì 太好了！ (tốt quá).' },
  '都':{ senses:[{vi:'đều, tất cả'}], note:'都 đứng SAU chủ ngữ và TRƯỚC động từ: 我们都是学生 chứ không phải 都我们是学生. Phủ định khác nhau: 都不 (đều không) ≠ 不都 (không phải đều).' },
  '也':{ senses:[{vi:'cũng'}], note:'Vị trí giống 都: sau chủ ngữ, trước động từ/tính từ. 我也很忙.' },
  '还':{ senses:[{vi:'còn, vẫn'},{vi:'thêm, nữa', note:'我还要一杯茶。— Tôi muốn thêm một ly trà.'}], note:'Đọc hái ở các nghĩa trên; đọc huán khi nghĩa là “trả lại” (还书 — trả sách).' },
  '就':{ senses:[{vi:'ngay, liền (việc xảy ra sớm/nhanh)'},{vi:'chính là (nhấn mạnh)', note:'他就是我的老师。— Ông ấy chính là thầy tôi.'}], note:'Cặp đối lập với 才: 就 hàm ý sớm/dễ hơn mong đợi, 才 hàm ý muộn/khó hơn mong đợi.' },
  '才':{ senses:[{vi:'mới, mãi mới (muộn hơn mong đợi)', ex:['他九点才来。','Tā jiǔ diǎn cái lái.','Mãi chín giờ anh ấy mới đến.']}], note:'Câu có 才 thường KHÔNG dùng 了 ở cuối.' },

  /* ---------- Động từ năng nguyện (dễ nhầm nhất) ---------- */
  '会':{ senses:[{vi:'biết làm (do học mà có)', ex:['我会说汉语。','Wǒ huì shuō Hànyǔ.','Tôi biết nói tiếng Trung.']},{vi:'sẽ (khả năng xảy ra)', note:'明天会下雨。— Mai trời sẽ mưa.'}], note:'Ba từ hay lẫn: 会 = biết vì đã học · 能 = đủ sức/điều kiện làm được · 可以 = được phép. “Tôi bị đau tay nên không viết được” dùng 不能 chứ không dùng 不会.' },
  '能':{ senses:[{vi:'có thể (đủ sức, đủ điều kiện)'},{vi:'được phép (dùng trong câu hỏi, phủ định)'}], note:'Xem so sánh ở mục 会.' },
  '可以':{ senses:[{vi:'có thể, được phép'},{vi:'được đấy, tạm ổn (khẩu ngữ)'}], note:'Xin phép thì hỏi 我可以…吗？ Trả lời không cho phép thường dùng 不行 hoặc 不能 chứ ít khi 不可以 (nghe nặng).' },
  '要':{ senses:[{vi:'muốn, cần (có ý chí)', ex:['我要一杯咖啡。','Wǒ yào yì bēi kāfēi.','Tôi muốn một ly cà phê.']},{vi:'sắp (sự việc sắp xảy ra)', note:'要下雨了。— Sắp mưa rồi.'},{vi:'phải, cần phải'}], note:'Phủ định của 要 (muốn) là 不想 chứ không phải 不要 — 不要 nghĩa là “đừng”.' },
  '想':{ senses:[{vi:'muốn (nguyện vọng, nhẹ hơn 要)'},{vi:'nghĩ, cho rằng'},{vi:'nhớ (nhớ người)', note:'我很想家。— Tôi rất nhớ nhà.'}] },
  '喜欢':{ senses:[{vi:'thích'}], note:'Theo sau được cả danh từ và động từ: 我喜欢中国菜 / 我喜欢看书.' },

  /* ---------- Động từ cơ bản ---------- */
  '有':{ senses:[{vi:'có (sở hữu)'},{vi:'tồn tại, có (ở đâu đó)', note:'桌子上有一本书。— Trên bàn có một quyển sách.'}], note:'Phủ định BẮT BUỘC là 没有. Câu tồn tại tiếng Trung đi theo trật tự: nơi chốn + 有 + vật.', ant:'没有' },
  '在':{ senses:[{vi:'ở (động từ)', ex:['我在家。','Wǒ zài jiā.','Tôi ở nhà.']},{vi:'ở, tại (giới từ, đứng trước động từ)', note:'我在图书馆学习。— Tôi học ở thư viện.'},{vi:'đang (trước động từ, chỉ việc đang diễn ra)', note:'他在吃饭。— Anh ấy đang ăn cơm.'}], note:'Khác tiếng Việt: cụm chỉ nơi chốn đứng TRƯỚC động từ, không đứng sau. Nói 我学习在图书馆 là sai.' },
  '去':{ senses:[{vi:'đi (rời chỗ người nói)'}], note:'Cặp hướng: 去 = đi khỏi chỗ người nói, 来 = đến chỗ người nói. Người Việt hay dùng nhầm khi rủ: đứng ở nhà mà rủ bạn sang thì nói 你来我家.', ant:'来' },
  '来':{ senses:[{vi:'đến (về phía người nói)'},{vi:'gọi món, lấy (khẩu ngữ)', note:'来一个西红柿炒鸡蛋。— Cho một đĩa trứng xào cà chua.'}], ant:'去' },
  '看':{ senses:[{vi:'nhìn, xem'},{vi:'đọc (sách, báo)', note:'看书 — đọc sách; tiếng Trung dùng 看 chứ không dùng 读 cho việc đọc thầm.'},{vi:'thăm (người)', note:'看朋友 — thăm bạn.'},{vi:'khám (bệnh)', note:'看病 — đi khám bệnh.'}], coll:['看电影 — xem phim','看电视 — xem tivi','看看 — xem thử một chút'] },
  '听':{ senses:[{vi:'nghe'}], note:'Nghe mà hiểu thì nói 听懂; nghe mà không ra thì 听不懂.', coll:['听音乐 — nghe nhạc','听说 — nghe nói rằng'] },
  '说':{ senses:[{vi:'nói'},{vi:'nói về, bàn'}], coll:['说话 — nói chuyện','说汉语 — nói tiếng Trung','听说 — nghe nói'] },
  '读':{ senses:[{vi:'đọc thành tiếng'},{vi:'học (ở trường)', note:'读大学 — học đại học.'}], note:'Đọc thầm, đọc để giải trí thì dùng 看书 chứ không dùng 读书.' },
  '写':{ senses:[{vi:'viết'}], coll:['写字 — viết chữ','写信 — viết thư','写作业 — làm bài tập viết'] },
  '学':{ senses:[{vi:'học'}], note:'Dạng hai chữ 学习 trang trọng và dùng độc lập được; 学 một chữ thường phải có tân ngữ: 学汉语.' },
  '学习':{ senses:[{vi:'học tập, học'}], note:'Vừa là động từ vừa là danh từ: 他的学习很好 — việc học của cậu ấy tốt.' },
  '工作':{ senses:[{vi:'làm việc (động từ)'},{vi:'công việc (danh từ)'}], meas:'份', coll:['找工作 — tìm việc','上班 — đi làm (khẩu ngữ hằng ngày)'] },
  '吃':{ senses:[{vi:'ăn'}], coll:['吃饭 — ăn cơm','吃药 — uống thuốc (tiếng Trung dùng «ăn» thuốc)'] },
  '喝':{ senses:[{vi:'uống'}], note:'Thuốc thì dùng 吃药 chứ không phải 喝药 (trừ thuốc nước).', coll:['喝水 — uống nước','喝茶 — uống trà'] },
  '买':{ senses:[{vi:'mua'}], note:'Phân biệt với 卖 (bán) — chỉ khác thanh điệu mǎi / mài và một nét, rất dễ viết nhầm.', ant:'卖' },
  '卖':{ senses:[{vi:'bán'}], ant:'买' },
  '做':{ senses:[{vi:'làm, chế tạo'},{vi:'làm (nghề)', note:'他做老师。— Anh ấy làm giáo viên.'}], coll:['做饭 — nấu cơm','做作业 — làm bài tập'] },
  '给':{ senses:[{vi:'cho, đưa (động từ)', ex:['我给你一本书。','Wǒ gěi nǐ yì běn shū.','Tôi cho bạn một quyển sách.']},{vi:'cho, với (giới từ, đứng trước động từ)', note:'我给你打电话。— Tôi gọi điện cho bạn.'}] },
  '打':{ senses:[{vi:'đánh, đập'},{vi:'gọi (điện thoại)', note:'打电话 — gọi điện.'},{vi:'chơi (môn thể thao dùng tay)', note:'打篮球 — chơi bóng rổ.'}], note:'打 là động từ “vạn năng” ghép được rất nhiều cụm; học theo cụm chứ đừng học nghĩa lẻ.', coll:['打车 — bắt taxi','打工 — làm thêm','打扫 — quét dọn'] },
  '开':{ senses:[{vi:'mở'},{vi:'lái, vận hành', note:'开车 — lái xe.'},{vi:'bật (đèn, máy)'},{vi:'mở (cuộc họp, tiệc)', note:'开会 — họp.'}], ant:'关' },
  '关':{ senses:[{vi:'đóng'},{vi:'tắt (đèn, máy)'}], ant:'开' },
  '住':{ senses:[{vi:'ở, cư trú'}], coll:['住在… — sống ở…','住院 — nằm viện'] },
  '等':{ senses:[{vi:'đợi'},{vi:'vân vân'}], coll:['等一下 — đợi một chút','等等 — đợi đã'] },
  '找':{ senses:[{vi:'tìm'},{vi:'trả lại tiền thừa', note:'找钱 — thối tiền.'}], note:'Tìm thấy rồi thì nói 找到.' },
  '认识':{ senses:[{vi:'quen biết (người)'},{vi:'nhận ra, biết mặt chữ', note:'这个字我不认识。— Chữ này tôi không biết.'}], note:'Phân biệt với 知道 (biết thông tin): 我知道他 = tôi biết có người đó; 我认识他 = tôi quen anh ta.' },
  '知道':{ w:{pinyin:'zhīdào', hv:'tri đạo', vi:'biết', pos:'động từ'}, senses:[{vi:'biết (thông tin, sự việc)'}], note:'Không biết thì nói 不知道 — người Trung ít khi nói 没知道.' },
  '觉得':{ senses:[{vi:'cảm thấy, thấy rằng'}], note:'Nêu ý kiến cá nhân nhẹ nhàng, dùng nhiều hơn 认为 (cho rằng — trang trọng, chắc chắn hơn).' },
  '高兴':{ senses:[{vi:'vui, vui mừng'}], coll:['很高兴认识你 — rất vui được làm quen'] },

  /* ---------- Người · nơi chốn ---------- */
  '人':{ senses:[{vi:'người'},{vi:'người (thuộc nước/nơi nào)', note:'中国人 — người Trung Quốc; 越南人 — người Việt Nam.'}], meas:'个 (口 khi đếm nhân khẩu trong nhà)' },
  '朋友':{ senses:[{vi:'bạn, bạn bè'}], meas:'个', coll:['好朋友 — bạn thân','男朋友 / 女朋友 — bạn trai / bạn gái'] },
  '老师':{ senses:[{vi:'thầy, cô giáo'}], note:'Cũng là từ xưng hô: gọi thầy họ Vương là 王老师. Tiếng Trung gọi «họ + chức danh», ngược với tiếng Việt.', meas:'位 (lịch sự), 个' },
  '学生':{ senses:[{vi:'học sinh, sinh viên'}], note:'Sinh viên đại học nói rõ là 大学生.', meas:'个' },
  '医生':{ senses:[{vi:'bác sĩ'}], note:'Gọi trực tiếp: 大夫 (dàifu) trong khẩu ngữ miền Bắc.', meas:'位, 个' },
  '中国':{ senses:[{vi:'Trung Quốc'}], coll:['中国人 — người Trung Quốc','中国菜 — món Trung'] },
  '汉语':{ senses:[{vi:'tiếng Hán, tiếng Trung'}], note:'汉语 nhấn vào ngôn ngữ của dân tộc Hán (dùng trong giảng dạy); 中文 nghiêng về chữ viết và văn bản; 普通话 là tiếng phổ thông chuẩn. Ba từ thay nhau được trong hầu hết câu đời thường.' },
  '家':{ senses:[{vi:'nhà, gia đình'},{vi:'lượng từ cho cửa hàng, công ty', note:'一家饭店 — một nhà hàng.'},{vi:'hậu tố chỉ nhà chuyên môn', note:'作家 — nhà văn; 画家 — hoạ sĩ.'}] },
  '学校':{ senses:[{vi:'trường học'}], meas:'所, 个' },
  '医院':{ senses:[{vi:'bệnh viện'}], meas:'家, 所' },
  '公司':{ senses:[{vi:'công ty'}], meas:'家' },
  '商店':{ senses:[{vi:'cửa hàng'}], meas:'家' },
  '饭店':{ senses:[{vi:'nhà hàng; khách sạn'}], note:'Nghĩa «khách sạn» hay gặp ở tên các khách sạn lớn (北京饭店). Quán ăn nhỏ thường là 饭馆 hoặc 餐厅.' },
  '东西':{ senses:[{vi:'đồ, thứ, đồ vật'}], note:'Đọc dōngxi (chữ sau nhẹ) mới là «đồ vật»; đọc dōngxī đủ hai thanh thì nghĩa là «đông và tây».', coll:['买东西 — mua sắm','吃东西 — ăn gì đó'] },
  '时候':{ senses:[{vi:'lúc, khi'}], coll:['什么时候 — khi nào','…的时候 — lúc mà…'] },
  '地方':{ senses:[{vi:'nơi, chỗ'}], note:'Đọc dìfang, chữ sau nhẹ.' },
  '事情':{ senses:[{vi:'việc, chuyện'}], meas:'件', coll:['有事儿 — có việc bận'] },
  '问题':{ senses:[{vi:'câu hỏi'},{vi:'vấn đề, trục trặc'}], meas:'个', coll:['问问题 — đặt câu hỏi','没问题 — không thành vấn đề'] },

  /* ---------- Thời gian ---------- */
  '天':{ senses:[{vi:'ngày'},{vi:'trời, bầu trời'}], note:'天 tự nó là lượng từ, không nói 一个天 mà nói 一天.' },
  '今天':{ senses:[{vi:'hôm nay'}], note:'Cụm thời gian đứng TRƯỚC động từ hoặc đầu câu: 我今天很忙 / 今天我很忙. Không đặt cuối câu như tiếng Việt.' },
  '明天':{ senses:[{vi:'ngày mai'}], ant:'昨天' },
  '昨天':{ senses:[{vi:'hôm qua'}], ant:'明天' },
  '上午':{ senses:[{vi:'buổi sáng (từ khoảng 9 giờ tới trưa)'}], note:'Sáng sớm là 早上, trưa là 中午, chiều 下午, tối 晚上.' },
  '下午':{ senses:[{vi:'buổi chiều'}] },
  '年':{ senses:[{vi:'năm'}], note:'Cũng là lượng từ: 三年 (ba năm), không nói 三个年. Hỏi năm nào: 哪一年.' },
  '月':{ senses:[{vi:'tháng'},{vi:'mặt trăng'}], note:'Tháng mấy: 几月. Mấy tháng (khoảng thời gian): 几个月 — có 个, khác hẳn nhau.' },
  '星期':{ senses:[{vi:'tuần'},{vi:'thứ (trong tuần)', note:'星期一 thứ hai … 星期六 thứ bảy, riêng chủ nhật là 星期天 hoặc 星期日.'}], note:'Cách nói khác: 周 (周一, 周末) trang trọng hơn; 礼拜 khẩu ngữ.' },
  '点':{ senses:[{vi:'giờ (khi xem đồng hồ)', note:'三点 — ba giờ.'},{vi:'điểm, chấm'},{vi:'gọi món, chọn', note:'点菜 — gọi món.'},{vi:'một chút', note:'一点儿 — một chút.'}] },
  '分':{ senses:[{vi:'phút'},{vi:'điểm (số điểm)'},{vi:'chia, tách'}], note:'Hai giờ mười lăm: 两点十五分 hoặc 两点一刻.' },

  /* ---------- Lượng từ ---------- */
  '个':{ senses:[{vi:'lượng từ thông dụng nhất, dùng cho người và phần lớn đồ vật'}], note:'Khi bí thì dùng 个 vẫn hiểu được, nhưng dùng đúng lượng từ riêng nghe tự nhiên hơn nhiều. Đọc nhẹ: yí ge.' },
  '本':{ senses:[{vi:'lượng từ cho sách vở'}], coll:['一本书 — một quyển sách','两本词典 — hai quyển từ điển'] },
  '件':{ senses:[{vi:'lượng từ cho áo, sự việc, hành lý'}], coll:['一件衣服 — một cái áo','一件事 — một việc'] },
  '条':{ senses:[{vi:'lượng từ cho vật dài: quần, đường, cá, sông'}], coll:['一条路 — một con đường','一条鱼 — một con cá'] },
  '张':{ senses:[{vi:'lượng từ cho vật phẳng: giấy, bàn, vé, ảnh'}], coll:['一张纸 — một tờ giấy','一张票 — một tấm vé'] },
  '只':{ senses:[{vi:'lượng từ cho động vật nhỏ và vật đi theo đôi'}], note:'Đọc zhī khi là lượng từ; đọc zhǐ khi nghĩa là «chỉ» (只有 — chỉ có).' },
  '杯':{ senses:[{vi:'ly, cốc (lượng từ và danh từ)'}], coll:['一杯水 — một ly nước'] },
  '块':{ senses:[{vi:'đồng (tiền, khẩu ngữ)', note:'十块钱 — mười tệ. Văn viết là 元.'},{vi:'miếng, cục'}] },
  '二':{ senses:[{vi:'hai (số đếm, số thứ tự)'}], note:'Quy tắc cốt lõi: đếm số, đọc số, ngày tháng, số thứ tự → dùng 二 (二月, 第二). Đứng trước lượng từ để đếm vật → dùng 两 (两个人). Nói 二个人 là sai.' },
  '两':{ senses:[{vi:'hai (đứng trước lượng từ)'},{vi:'vài, đôi ba', note:'说两句 — nói vài câu.'}], note:'Xem quy tắc ở mục 二.' },

  /* ---------- Tính từ ---------- */
  '大':{ senses:[{vi:'to, lớn'},{vi:'(tuổi) lớn', note:'你多大？— Bạn bao nhiêu tuổi?'}], ant:'小' },
  '小':{ senses:[{vi:'nhỏ, bé'},{vi:'tiền tố gọi thân mật người ít tuổi hơn', note:'小王 — cậu Vương.'}], ant:'大' },
  '多':{ senses:[{vi:'nhiều'},{vi:'bao nhiêu (đặt trước tính từ để hỏi mức độ)', note:'多大 — bao nhiêu tuổi; 多远 — bao xa.'}], ant:'少' },
  '少':{ senses:[{vi:'ít'}], note:'Đọc shǎo là «ít»; đọc shào trong 少年 (thiếu niên).', ant:'多' },
  '长':{ senses:[{vi:'dài (cháng)'},{vi:'trưởng, lớn lên (zhǎng)', note:'长大 — lớn lên; 校长 — hiệu trưởng.'}], note:'Một chữ hai âm hai nghĩa — chú ý khi tra.', ant:'短' },
  '高':{ senses:[{vi:'cao'}], ant:'低 (thấp về độ cao/mức), 矮 (thấp về người)' },
  '新':{ senses:[{vi:'mới'}], ant:'旧' },
  '快':{ senses:[{vi:'nhanh'},{vi:'sắp', note:'快到了。— Sắp đến rồi.'}], ant:'慢' },
  '慢':{ senses:[{vi:'chậm'}], coll:['慢走 — đi thong thả (câu tiễn khách)'], ant:'快' },
  '冷':{ senses:[{vi:'lạnh'}], ant:'热' },
  '热':{ senses:[{vi:'nóng'},{vi:'sốt sắng, nhiệt tình', note:'热情 — nhiệt tình.'}], ant:'冷' },
  '忙':{ senses:[{vi:'bận'}], coll:['帮忙 — giúp đỡ','忙什么呢？— bận gì thế?'] },
  '累':{ senses:[{vi:'mệt, mỏi'}], note:'Đọc lèi. Người Việt hay nhầm với 热 (rè) khi nghe.' },
  '贵':{ senses:[{vi:'đắt'},{vi:'quý (kính ngữ)', note:'您贵姓？— Ông/bà quý danh là gì?'}], ant:'便宜' },
  '便宜':{ senses:[{vi:'rẻ'}], note:'Đọc piányi — chữ 便 ở đây KHÔNG đọc biàn.', ant:'贵' },
  '漂亮':{ senses:[{vi:'đẹp, xinh'}], note:'Dùng cho người, đồ vật, cảnh. Khen đàn ông thường dùng 帅 (đẹp trai).' },

  /* ---------- Cụm hay dùng · liên từ ---------- */
  '一起':{ senses:[{vi:'cùng nhau'}], note:'Đứng trước động từ: 我们一起去吧。' },
  '一下':{ senses:[{vi:'một chút, thử một cái'}], note:'Đặt SAU động từ để câu nhẹ đi, lịch sự hơn: 你看一下 (bạn xem thử một chút) nghe mềm hơn 你看.' },
  '一点儿':{ senses:[{vi:'một chút (số lượng nhỏ)'}], note:'Cặp cực dễ nhầm: 一点儿 đứng SAU tính từ/trước danh từ và trung tính (便宜一点儿 — rẻ một chút); 有点儿 đứng TRƯỚC tính từ và luôn mang ý chê (有点儿贵 — hơi đắt).' },
  '有点儿':{ senses:[{vi:'hơi (mang ý không hài lòng)'}], note:'Xem so sánh ở mục 一点儿.' },
  '因为':{ senses:[{vi:'bởi vì'}], note:'Tiếng Trung cho phép dùng CẢ HAI vế: 因为…所以… — không bị coi là thừa như trong tiếng Việt.' },
  '所以':{ senses:[{vi:'cho nên'}] },
  '但是':{ senses:[{vi:'nhưng'}], note:'Hay đi cặp với 虽然: 虽然…但是… (tuy… nhưng…).', syn:'可是 (khẩu ngữ hơn)' },
  '虽然':{ senses:[{vi:'tuy, mặc dù'}] },
  '如果':{ senses:[{vi:'nếu'}], note:'Vế sau thường có 就: 如果你去，我就去。' },
  '还是':{ senses:[{vi:'hay là (trong câu hỏi lựa chọn)', ex:['你喝茶还是咖啡？','Nǐ hē chá háishi kāfēi?','Bạn uống trà hay cà phê?']},{vi:'vẫn, tốt hơn là', note:'还是你去吧。— Hay là bạn đi đi.'}], note:'Quy tắc phải nhớ: câu HỎI lựa chọn dùng 还是, câu KỂ lựa chọn dùng 或者. Nói 你喝茶或者咖啡？là sai.' },
  '或者':{ senses:[{vi:'hoặc (trong câu trần thuật)'}], note:'Xem so sánh ở mục 还是.' },
  /* ---------- Từ hay gặp ở HSK 2–3 ---------- */
  '运动':{ senses:[{vi:'thể thao, vận động (danh từ)'},{vi:'tập thể dục, chơi thể thao (động từ)', ex:['我每天早上运动。','Wǒ měitiān zǎoshang yùndòng.','Sáng nào tôi cũng tập thể dục.']},{vi:'phong trào (xã hội)'}], coll:['做运动 — tập thể thao','运动员 — vận động viên','运动会 — hội thao'] },
  '运气':{ senses:[{vi:'vận may, may mắn'}], note:'Đọc yùnqi, chữ sau nhẹ.', coll:['运气好 — số may','碰运气 — thử vận may'] },
  '帮忙':{ senses:[{vi:'giúp đỡ'}], note:'Là cấu trúc động–tân nên tân ngữ chen vào giữa: «giúp tôi» là 帮我的忙 hoặc 帮我, KHÔNG nói 帮忙我.' },
  '介绍':{ senses:[{vi:'giới thiệu'}], coll:['自我介绍 — tự giới thiệu'] },
  '见面':{ senses:[{vi:'gặp mặt'}], note:'Cũng là động–tân: «gặp anh ấy» nói 跟他见面, không nói 见面他.' },
  '结婚':{ senses:[{vi:'kết hôn'}], note:'Động–tân: 跟她结婚 — cưới cô ấy.' },
  '生日':{ senses:[{vi:'sinh nhật'}], coll:['过生日 — mừng sinh nhật','生日快乐 — chúc mừng sinh nhật'] },
  '意思':{ w:{pinyin:'yìsi', hv:'ý tứ', vi:'ý nghĩa; ý', pos:'danh từ'}, senses:[{vi:'ý nghĩa'},{vi:'ý, thâm ý'}], note:'Đọc yìsi. 有意思 = thú vị, hay; 不好意思 = ngại quá / xin lỗi nhẹ.', coll:['什么意思？— nghĩa là gì?','有意思 — thú vị'] },
  '希望':{ w:{pinyin:'xīwàng', hv:'hy vọng', vi:'hy vọng, mong', pos:'động từ; danh từ'}, senses:[{vi:'hy vọng, mong'},{vi:'niềm hy vọng (danh từ)'}] },
  '应该':{ w:{pinyin:'yīnggāi', hv:'ứng cai', vi:'nên, phải', pos:'động từ năng nguyện'}, senses:[{vi:'nên, phải'},{vi:'chắc là, lẽ ra', note:'他应该到了。— Chắc anh ấy đến rồi.'}] },
  '注意':{ w:{pinyin:'zhùyì', hv:'chú ý', vi:'chú ý, để ý', pos:'động từ'}, senses:[{vi:'chú ý, để ý'}], coll:['注意安全 — chú ý an toàn','注意身体 — giữ gìn sức khoẻ'] },
  '需要':{ w:{pinyin:'xūyào', hv:'nhu yếu', vi:'cần; nhu cầu', pos:'động từ; danh từ'}, senses:[{vi:'cần'},{vi:'nhu cầu'}], note:'需要 nghiêng về nhu cầu khách quan; 要 nghiêng về ý muốn chủ quan.' },
  '当然':{ w:{pinyin:'dāngrán', hv:'đương nhiên', vi:'đương nhiên', pos:'phó từ'}, senses:[{vi:'đương nhiên, tất nhiên'}] },
  '感觉':{ w:{pinyin:'gǎnjué', hv:'cảm giác', vi:'cảm thấy; cảm giác', pos:'động từ; danh từ'}, senses:[{vi:'cảm thấy'},{vi:'cảm giác'}] },
  '刚才':{ w:{pinyin:'gāngcái', hv:'cương tài', vi:'vừa nãy', pos:'danh từ chỉ thời gian'}, senses:[{vi:'vừa nãy, lúc nãy'}], note:'刚才 là danh từ chỉ thời gian nên đứng đầu câu được; 刚 là phó từ, chỉ đứng trước động từ: 他刚走.' },
  '或许':{ w:{pinyin:'huòxǔ', hv:'hoặc hứa', vi:'có lẽ', pos:'phó từ'}, senses:[{vi:'có lẽ, biết đâu'}], syn:'也许, 可能' },
  '可能':{ senses:[{vi:'có thể, có lẽ'},{vi:'khả năng (danh từ)'}] },
  '一定':{ senses:[{vi:'nhất định, chắc chắn'},{vi:'nhất định (trong lời hứa, lời mời)'}], note:'Phủ định có hai nghĩa khác nhau: 一定不 (nhất định không) ≠ 不一定 (không chắc).' },
  '已经':{ senses:[{vi:'đã, đã rồi'}], note:'Thường đi với 了 ở cuối: 我已经吃了。' },
  '准备':{ senses:[{vi:'chuẩn bị'},{vi:'định, dự tính', note:'我准备去中国。— Tôi định đi Trung Quốc.'}] },
  '决定':{ senses:[{vi:'quyết định (động từ và danh từ)'}] },
  '习惯':{ senses:[{vi:'thói quen (danh từ)'},{vi:'quen với (động từ)', note:'我习惯了这里的生活。— Tôi đã quen với cuộc sống ở đây.'}] },
  '影响':{ senses:[{vi:'ảnh hưởng (động từ và danh từ)'}], note:'Thường mang sắc thái tiêu cực khi làm động từ: 别影响别人 — đừng làm phiền người khác.' },
  '其实':{ senses:[{vi:'thật ra, kỳ thực'}], note:'Dùng để nói ngược lại điều người nghe đang nghĩ.' },
  '特别':{ senses:[{vi:'đặc biệt, rất'},{vi:'nhất là, đặc biệt là'}] },
  '差不多':{ senses:[{vi:'gần như, xấp xỉ'},{vi:'tàm tạm được'}], note:'Câu cửa miệng rất hay gặp trong khẩu ngữ.' },
  '终于':{ senses:[{vi:'cuối cùng thì, rốt cuộc'}], note:'Chỉ dùng cho kết quả MONG ĐỢI. Kết quả xấu thì dùng 结果 hoặc 最后.' },
  '重要':{ senses:[{vi:'quan trọng'}], coll:['很重要 — rất quan trọng','重要的是… — điều quan trọng là…'] },
  '简单':{ senses:[{vi:'đơn giản'}], ant:'复杂' },
  '清楚':{ senses:[{vi:'rõ ràng'},{vi:'hiểu rõ', note:'我不清楚。— Tôi không rõ.'}], note:'Hay làm bổ ngữ kết quả: 看清楚 (nhìn cho rõ), 说清楚 (nói cho rõ).' },
};

if (typeof window !== 'undefined') window.ZH_DICT = ZH_DICT;
if (typeof module !== 'undefined' && module.exports) module.exports = { ZH_DICT };
