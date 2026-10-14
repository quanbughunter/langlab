#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""LangLab — dựng bộ ảnh nguồn cho biểu tượng ứng dụng Android.

VÌ SAO CẦN: `npx cap add android` dựng dự án kèm biểu tượng MẶC ĐỊNH của
Capacitor. Không thay thì cài app ra màn hình điện thoại thấy logo Capacitor
chứ không phải logo của mình.

Tệp này sinh ba ảnh nguồn vào `android-app/assets/`, rồi `@capacitor/assets`
sẽ cắt ra đủ mọi cỡ mà Android đòi.

BA ẢNH, VÀ VÌ SAO LẠI BA:

  icon.png            1024×1024 — biểu tượng kiểu cũ, máy Android đời trước
                      hiển thị nguyên khối vuông này.

  icon-foreground.png 1024×1024 — lớp TRƯỚC của biểu tượng thích ứng
                      (adaptive icon). Android cắt biểu tượng theo hình của
                      hãng máy: Samsung cắt squircle, Pixel cắt tròn, máy khác
                      cắt vuông bo góc. Phần bị cắt có thể lên tới một phần ba
                      mỗi bề, nên hình phải nằm gọn trong VÙNG AN TOÀN ở giữa —
                      chừng 66% bề rộng. Vẽ tràn ra là cụt mất quai bình.

  icon-background.png 1024×1024 — lớp SAU, ở đây là một màu phẳng lấy đúng
                      theme_color trong manifest.webmanifest, để biểu tượng
                      ăn màu với giao diện app.

Chạy:  python tools/tao-icon.py
"""
import json
import pathlib
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit('Thiếu thư viện Pillow. Cài bằng:  pip install Pillow')

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'android-app' / 'assets'

SIZE = 1024
# Tỉ lệ bề rộng mà hình được phép chiếm. Android khuyến nghị để hình nằm trong
# vòng tròn đường kính 66% của khung; lấy 0.62 cho chắc, vì logo này có quai
# bình thò ra góc trên bên trái.
SAFE = 0.62
# Biểu tượng kiểu cũ không bị cắt nên cho rộng rãi hơn.
LEGACY = 0.80


def nen():
    """Màu nền lấy thẳng từ manifest, để biểu tượng ăn màu với app."""
    try:
        m = json.loads((ROOT / 'manifest.webmanifest').read_text(encoding='utf-8'))
        c = m.get('background_color') or m.get('theme_color') or '#FFFFFF'
    except Exception:
        c = '#FFFFFF'
    c = c.lstrip('#')
    return tuple(int(c[i:i + 2], 16) for i in (0, 2, 4)) + (255,)


def dat_vao_giua(art, ty_le, nen_mau):
    """Thu hình cho vừa vùng an toàn rồi đặt vào giữa khung vuông."""
    khung = Image.new('RGBA', (SIZE, SIZE), nen_mau)
    rong = int(SIZE * ty_le)
    w, h = art.size
    ti = min(rong / w, rong / h)
    art2 = art.resize((max(1, int(w * ti)), max(1, int(h * ti))), Image.LANCZOS)
    khung.paste(art2, ((SIZE - art2.size[0]) // 2, (SIZE - art2.size[1]) // 2), art2)
    return khung


def main():
    src = ROOT / 'logo-icon.png'
    if not src.exists():
        sys.exit('Không thấy logo-icon.png ở thư mục gốc dự án.')

    art = Image.open(src).convert('RGBA')
    if art.size[0] < 512:
        print(f'  ! logo-icon.png chỉ {art.size[0]}px — phóng to lên sẽ hơi nhoè.')

    mau = nen()
    OUT.mkdir(parents=True, exist_ok=True)

    dat_vao_giua(art, LEGACY, mau).save(OUT / 'icon.png')
    # Lớp trước phải TRONG SUỐT: lớp sau nằm dưới nó.
    dat_vao_giua(art, SAFE, (0, 0, 0, 0)).save(OUT / 'icon-foreground.png')
    Image.new('RGBA', (SIZE, SIZE), mau).save(OUT / 'icon-background.png')

    print(f'Màu nền: #{mau[0]:02X}{mau[1]:02X}{mau[2]:02X}  (lấy từ manifest.webmanifest)')
    for f in ('icon.png', 'icon-foreground.png', 'icon-background.png'):
        p = OUT / f
        print(f'  {f:22} {Image.open(p).size[0]}×{Image.open(p).size[1]}  {p.stat().st_size // 1024} KB')
    print(f'Ra: {OUT}')
    print('\nTiếp theo, sau khi «npx cap add android»:')
    print('  npx @capacitor/assets generate --android')


if __name__ == '__main__':
    main()
