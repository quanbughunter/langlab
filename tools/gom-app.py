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
ASSETS = [
    'icon-192.png',
    'icon-512.png',
    'maskable-512.png',
    'apple-touch-icon.png',
    'logo.svg',
    'logo-icon.png',
    'manifest.webmanifest',
]

# Không bao giờ được đóng gói, dù có lọt vào danh sách trên đi nữa.
NEVER = {'api-key.txt', 'logo-b2.png', 'logo-goc-co-vien.png',
         'krdict-key.txt', 'tools/krdict-key.txt'}


def mb(n):
    return f'{n / 1024 / 1024:.0f} MB'


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
            shutil.copy2(src, OUT / name)

    # Kiểm tra lại lần cuối: không tệp cấm nào lọt vào.
    leaked = [p.name for p in OUT.rglob('*') if p.name in NEVER]
    if leaked:
        sys.exit(f'DỪNG: tệp cấm lọt vào gói: {leaked}')

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
