#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""LangLab — gom nội dung để đóng gói thành APK.

Dựng thư mục `android-app/www/`: bản HTML một tệp, bộ biểu tượng, và audio
của những thứ tiếng được chọn.

VÌ SAO PHẢI CÓ TỆP RIÊNG CHỨ KHÔNG COPY CẢ THƯ MỤC:

  1. `api-key.txt` nằm ngay thư mục gốc của dự án. Copy bừa là khoá API
     theo vào APK, và APK thì ai cài cũng mở ra xem được. Đây là thứ phải
     chặn bằng danh sách cho phép, không phải bằng danh sách loại trừ —
     quên một dòng trong danh sách loại trừ là lọt.

  2. `audio/ko/` là 153 bản thu đĩa CD có bản quyền. Chỉ `audio/tts/` là
     do máy đọc, mới được phát hành.

  3. Toàn bộ audio/tts khoảng 1 GB. Nhét hết vào một APK thì vừa không
     đăng Play được (giới hạn 150 MB), vừa nặng nề khi cài. Nên chọn
     thứ tiếng mà đóng.

Dùng:
    python tools/gom-app.py --tieng ko          # chỉ tiếng Hàn
    python tools/gom-app.py --tieng ko en fr    # ba thứ tiếng
    python tools/gom-app.py --khong-audio       # chỉ app, không audio
    python tools/gom-app.py --tat-ca            # tất cả (rất nặng)
"""
import argparse
import pathlib
import re
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT  = ROOT / 'android-app' / 'www'

# Thư mục giọng trong audio/tts/. Tên thư mục chính là tên giọng, xem VOICES
# trong tools/make_audio.py.
VOICES = {
    'ko': ['ko'],
    'zh': ['zh'],
    'ja': ['ja'],
    'ru': ['ru'],
    'en': ['en-gb', 'en-us'],
    'fr': ['fr'],
    'es': ['es'],
}

# CHỈ những tệp này được vào gói. Danh sách CHO PHÉP, không phải danh sách cấm.
#
# Danh sách cho phép có một chỗ yếu: quên một tệp thì THIẾU. Tôi đã quên
# logo-full.png thật, và trang Giới thiệu trong APK hiện ra ô ảnh vỡ. Nên bên
# dưới có thêm phép kiểm tự động soi mọi ảnh mà trang gọi tới — thiếu là dừng
# hẳn, không cho ra gói hỏng nữa.
ASSETS = [
    'icon-192.png',
    'icon-512.png',
    'maskable-512.png',
    'apple-touch-icon.png',
    'logo.svg',
    'logo.png',
    'logo-icon.png',
    'logo-full.png',
    'manifest.webmanifest',
    # Từ điển Hàn–Việt 1,9 MB. build.py KHÔNG nhúng tệp này vào bản gộp — app
    # nạp nó lúc chạy bằng thẻ <script> (xem js/app.js, dictLoaded). Thiếu nó
    # thì từ điển tiếng Hàn mất nguồn lớn nhất, mà hỏng ÂM THẦM: s.onerror chỉ
    # trả về false chứ không báo gì cả.
    'js/dict-ko.js',
]

# Không bao giờ được đóng gói, dù có lọt vào danh sách trên đi nữa.
NEVER = {'api-key.txt', 'logo-b2.png', 'logo-goc-co-vien.png',
         'krdict-key.txt', 'tools/krdict-key.txt'}


def mb(n):
    return f'{n / 1024 / 1024:.0f} MB'


# src="..." · href="..." · url(...) — bắt cả ba cách nhúng tệp.
REF = re.compile(r'''(?:src|href)\s*=\s*["']([^"'>]+)["']|url\(\s*["']?([^"')]+)["']?\s*\)''')


def kiem_tham_chieu(www):
    """Soi trang đã gom: mọi tệp cục bộ mà nó gọi tới đều phải có mặt.

    Đây là tấm lưới đỡ cho danh sách cho phép ở trên. Quên một tệp thì trong
    APK nó hiện ra ô ảnh vỡ — mà lúc ấy mới phát hiện thì đã đóng gói, đã cài
    vào máy, đã mất một vòng. Kiểm ngay lúc gom thì biết ngay.
    """
    html = (www / 'index.html').read_text(encoding='utf-8', errors='ignore')
    thieu, da_xet = [], set()
    for m in REF.finditer(html):
        ref = (m.group(1) or m.group(2) or '').strip()
        if not ref or ref in da_xet:
            continue
        da_xet.add(ref)
        # Bỏ qua thứ không phải tệp cục bộ.
        if ref.startswith(('data:', 'http://', 'https://', '//', '#', 'mailto:', 'tel:', 'blob:')):
            continue
        # Chuỗi mẫu trong JavaScript — `${...}` — không phải đường dẫn.
        if '${' in ref or '{{' in ref:
            continue
        # Phải trông như một tên tệp: có phần mở rộng.
        if not re.search(r'\.[a-z0-9]{2,5}($|\?|#)', ref, re.I):
            continue
        duong = ref.split('?')[0].split('#')[0].lstrip('./')
        if not duong:
            continue
        # audio/ tra theo mã băm lúc chạy, không nằm trong trang — bỏ qua.
        if duong.startswith('audio/'):
            continue
        if not (www / duong).exists():
            thieu.append(ref)
    return thieu


def copy_audio(voices, dst_root):
    """Chép audio/tts/<giọng>/. Trả về (số tệp, số byte)."""
    src_root = ROOT / 'audio' / 'tts'
    n = total = 0
    for v in voices:
        src = src_root / v
        if not src.is_dir():
            print(f'  ! chưa có audio/tts/{v}/ — bỏ qua')
            continue
        dst = dst_root / 'audio' / 'tts' / v
        dst.mkdir(parents=True, exist_ok=True)
        for f in src.iterdir():
            if f.suffix.lower() != '.mp3':
                continue
            shutil.copy2(f, dst / f.name)
            n += 1
            total += f.stat().st_size
        print(f'  audio/tts/{v}/  {n:>6} tệp')
    return n, total


def main():
    ap = argparse.ArgumentParser(description='Gom nội dung LangLab để đóng gói APK.')
    ap.add_argument('--tieng', nargs='*', default=['ko'], choices=list(VOICES),
                    help='thu audio của thứ tiếng nào (mặc định: ko)')
    ap.add_argument('--tat-ca', action='store_true', help='mọi thứ tiếng (rất nặng)')
    ap.add_argument('--khong-audio', action='store_true',
                    help='không đóng audio — APK nhẹ, nhưng chỉ còn giọng máy')
    a = ap.parse_args()

    html = ROOT / 'dist' / 'langlab.html'
    if not html.exists():
        sys.exit('Chưa có dist/langlab.html — chạy «python build.py» trước đã.')

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    # Bản HTML một tệp thành trang chủ của app.
    shutil.copy2(html, OUT / 'index.html')
    size = (OUT / 'index.html').stat().st_size
    print(f'index.html        {mb(size)}')

    for name in ASSETS:
        if name in NEVER:
            continue
        src = ROOT / name
        if src.exists():
            dst = OUT / name
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)
        else:
            print(f'  ! thiếu {name} ở thư mục gốc dự án')

    # Kiểm tra lại lần cuối: không tệp cấm nào lọt vào.
    leaked = [p.name for p in OUT.rglob('*') if p.name in NEVER]
    if leaked:
        sys.exit(f'DỪNG: tệp cấm lọt vào gói: {leaked}')

    # Và không tệp nào trang cần mà lại thiếu.
    thieu = kiem_tham_chieu(OUT)
    if thieu:
        print('DỪNG: trang gọi tới những tệp này mà gói không có:')
        for t in thieu:
            print(f'    {t}')
        sys.exit('Thêm chúng vào ASSETS trong tools/gom-app.py rồi chạy lại.')
    print('tham chiếu       đủ cả')

    n = total = 0
    if a.khong_audio:
        print('audio             bỏ qua (chỉ còn giọng máy của điện thoại)')
    else:
        voices = []
        langs = list(VOICES) if a.tat_ca else a.tieng
        for lg in langs:
            voices += VOICES[lg]
        print(f'audio             {", ".join(langs)}')
        n, total = copy_audio(voices, OUT)

    print('—' * 46)
    print(f'Tổng cộng: {mb(size + total)}  ({n} tệp audio)')
    print(f'Ra: {OUT}')
    if size + total > 150 * 1024 * 1024:
        print('\nLưu ý: quá 150 MB nên Google Play không nhận APK thường.')
        print('Cài trực tiếp vào máy thì vẫn được, hoặc dựng AAB + Play Asset Delivery.')


if __name__ == '__main__':
    main()
