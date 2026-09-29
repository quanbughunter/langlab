#!/usr/bin/env python3
"""Thay một mục từ trong tệp bài học nháp, tìm theo CHÍNH TỪ chứ không theo cả dòng.

    python tools/swap_word.py outputs/fr-a1-26.txt fr durer \
        "{ fr:'annuler', ipa:'a.ny.le', vi:'huỷ', pos:'động từ', g:'' }"

Vì sao cần: khi ghép báo «từ lặp», việc sửa bằng cách đối chiếu nguyên dòng rất
dễ trượt — chỉ cần một dấu phẩy hay một chữ note khác là không khớp. Tìm theo
khoá từ thì chắc chắn trúng, và thay được cả khi từ xuất hiện ở nhiều bài.
"""
import re
import sys
from pathlib import Path


def main():
    if len(sys.argv) < 5:
        print(__doc__)
        return 2
    path, lang, word, new = Path(sys.argv[1]), sys.argv[2], sys.argv[3], sys.argv[4]
    if not path.exists():
        print('Không thấy tệp %s' % path); return 2

    s = path.read_text(encoding='utf-8')
    new = new.strip().rstrip(',')

    # { fr:'durer', … } — bắt trọn một mục từ, kể cả khi có note dài
    pat = re.compile(r"\{\s*%s\s*:\s*'%s'\s*,(?:[^{}]|'[^']*')*?\}" % (lang, re.escape(word)))
    hits = pat.findall(s)
    if not hits:
        print('✗ Không thấy mục từ «%s» trong tệp' % word); return 1

    s = pat.sub(lambda m: new, s)
    path.write_text(s, encoding='utf-8')
    print('✓ thay %d chỗ: %s → %s' % (len(hits), word, new[:60]))
    return 0


if __name__ == '__main__':
    sys.exit(main())
