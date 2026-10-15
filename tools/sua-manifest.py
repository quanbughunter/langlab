#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""LangLab — bật cử chỉ vuốt cạnh có hình xem trước trong AndroidManifest.xml.

VÌ SAO CẦN: cú back của Android (nút back ảo hoặc cử chỉ vuốt cạnh) đến được bộ
định tuyến của app là nhờ plugin @capacitor/app — nó đăng kí một
OnBackPressedCallback vào OnBackPressedDispatcher của Activity. Chuyện ấy chạy
mà không cần sửa manifest.

Cờ này thêm một thứ khác: HÌNH XEM TRƯỚC khi vuốt (predictive back) — vuốt từ
cạnh màn hình thì thấy hé trang sẽ lùi về, nhả tay giữa đường thì trả lại chỗ
cũ. Android chia ba mốc:

  API 33, 34 (Android 13, 14) — phải khai `android:enableOnBackInvokedCallback`
                                mới có. Không khai thì back vẫn chạy, chỉ là
                                lùi khô, không có hình hé.
  API 35 trở lên              — app nhắm targetSdk ≥ 35 thì bật sẵn, cờ này bị
                                bỏ qua. Dự án đang nhắm 36 nên máy mới không
                                cần gì cả.

Tức là tệp này chỉ để lo cho máy Android 13 và 14. `npx cap add android` không
khai cờ ấy — tôi đã đọc manifest nó sinh ra để chắc, chứ không đoán.

An toàn: AndroidX Activity từ 1.6 trở lên tự lo cả hai đường, và dự án đang
dùng 1.11.0 (xem android/variables.gradle). Lớp BridgeActivity của Capacitor 8
cũng không ghi đè onBackPressed() — không có lớp nào bị cờ này gạt ra ngoài.

Chạy sau `npx cap add android` / `npx cap sync android`:

    python tools/sua-manifest.py

Chạy lại nhiều lần không sao: thấy có cờ rồi là bỏ qua.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
MANIFEST = ROOT / 'android-app' / 'android' / 'app' / 'src' / 'main' / 'AndroidManifest.xml'

CO = 'android:enableOnBackInvokedCallback="true"'


def main():
    if not MANIFEST.exists():
        sys.exit(
            'Chưa thấy AndroidManifest.xml ở:\n  %s\n'
            'Phải chạy «npx cap add android» trong android-app trước.' % MANIFEST
        )

    xml = MANIFEST.read_text(encoding='utf-8')

    if 'enableOnBackInvokedCallback' in xml:
        print('→ Manifest đã có cờ enableOnBackInvokedCallback, không sửa gì.')
        return

    # Chèn vào thẻ <application ...>, ngay sau tên thẻ, giữ đúng thụt lề của
    # thuộc tính liền sau để tệp vẫn dễ đọc.
    m = re.search(r'<application(\s+)', xml)
    if not m:
        sys.exit('Không tìm thấy thẻ <application trong manifest — dừng, không sửa mò.')

    thut = m.group(1)
    moi = xml[:m.end(1)] + CO + thut + xml[m.end(1):]

    # Soi lại chính kết quả mình vừa ghi, chứ không tin là đã ghi đúng.
    if moi.count('enableOnBackInvokedCallback') != 1:
        sys.exit('Chèn cờ ra kết quả lạ — dừng.')
    if not re.search(r'<application\s+' + re.escape(CO), moi):
        sys.exit('Cờ không nằm trong thẻ <application> — dừng.')

    MANIFEST.write_text(moi, encoding='utf-8')
    print('→ Đã thêm %s vào <application> của %s' % (CO, MANIFEST.name))


if __name__ == '__main__':
    main()
