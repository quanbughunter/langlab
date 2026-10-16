#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""LangLab — bắt bản dựng dùng ĐÚNG MỘT khoá ký, lần nào cũng vậy.

VÌ SAO CẦN: Android không cho cài đè một app bằng khoá ký khác. Mà
`gradlew assembleDebug` thì ký bằng khoá debug nằm ở `~/.android/debug.keystore`
— tệp này **tự sinh ra nếu chưa có**. Máy chủ GitHub mỗi lần chạy là một máy
mới tinh, nên mỗi lần dựng lại sinh một khoá khác. Hậu quả: bản mới không cài
đè được bản cũ, phải gỡ đi cài lại, mà gỡ là mất sạch tiến độ học.

CÁCH SỬA: dùng một khoá có sẵn trong kho — `android-app/keystore/` — thay cho
khoá tự sinh. Script này chèn khai báo ấy vào `app/build.gradle` của dự án
Android (tệp do `npx cap add android` sinh ra nên không đưa lên kho được, phải
chèn lại sau mỗi lần sinh).

KHOÁ NÀY CÓ PHẢI BÍ MẬT KHÔNG — KHÔNG. Nó là khoá kiểu *debug*: mật khẩu là
chữ «android», đúng quy ước công khai của Android, ai cũng tạo được một cái y
hệt. Để trong kho là cố ý, vì đó mới là chỗ cả máy mình lẫn máy chủ GitHub đều
với tới. Đổi lại, bản ký bằng khoá này KHÔNG đăng Play được — muốn đăng Play
thì phải tạo khoá phát hành riêng, giữ kín, và cất vào GitHub Secrets.

Chạy sau `npx cap add android` / `npx cap sync android`:

    python tools/sua-ky.py

Chạy lại nhiều lần không sao: thấy khai báo rồi là bỏ qua.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
GRADLE = ROOT / 'android-app' / 'android' / 'app' / 'build.gradle'
KHOA = ROOT / 'android-app' / 'keystore' / 'langlab-debug.keystore'

# Đường dẫn trong build.gradle tính từ thư mục module (android-app/android/app),
# nên «../..» ra android-app/.
KHOI = """    signingConfigs {
        debug {
            // Khoá cố định trong kho, thay cho khoá debug tự sinh mỗi máy một
            // khác. Xem tools/sua-ky.py để biết vì sao không phải bí mật.
            storeFile file('../../keystore/langlab-debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
"""


def main():
    if not KHOA.exists():
        sys.exit(
            'Chưa thấy khoá ký ở:\n  %s\n'
            'Tạo lại bằng:\n'
            '  keytool -genkeypair -keystore "%s" -storetype PKCS12 \\\n'
            '    -storepass android -keypass android -alias androiddebugkey \\\n'
            '    -keyalg RSA -keysize 2048 -validity 10950 \\\n'
            '    -dname "CN=LangLab Debug, OU=LangLab, O=LangLab, L=Ha Noi, C=VN"'
            % (KHOA, KHOA)
        )

    if not GRADLE.exists():
        sys.exit(
            'Chưa thấy app/build.gradle ở:\n  %s\n'
            'Phải chạy «npx cap add android» trong android-app trước.' % GRADLE
        )

    src = GRADLE.read_text(encoding='utf-8')

    if 'langlab-debug.keystore' in src:
        print('→ build.gradle đã dùng khoá cố định, không sửa gì.')
        return

    if 'signingConfigs' in src:
        sys.exit('build.gradle đã có khai báo signingConfigs khác — dừng, không sửa mò.')

    # Chèn ngay trước buildTypes, tức là vẫn nằm trong khối android { }.
    m = re.search(r'^([ \t]*)buildTypes\s*\{', src, re.M)
    if not m:
        sys.exit('Không tìm thấy khối buildTypes trong build.gradle — dừng, không sửa mò.')

    moi = src[:m.start()] + KHOI + src[m.start():]

    # Soi lại chính kết quả mình vừa ghi, chứ không tin là đã ghi đúng.
    if moi.count('langlab-debug.keystore') != 1:
        sys.exit('Chèn ra kết quả lạ — dừng.')
    if moi.count('{') != moi.count('}'):
        sys.exit('Ngoặc trong build.gradle không còn cân — dừng, không ghi.')

    GRADLE.write_text(moi, encoding='utf-8')
    print('→ Đã trỏ bản dựng vào khoá cố định %s' % KHOA.name)


if __name__ == '__main__':
    main()
