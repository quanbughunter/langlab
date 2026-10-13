@echo off
chcp 65001 >nul
title LangLab - dung file APK cho Android
cd /d "%~dp0.."

echo.
echo ============================================================
echo   LangLab - dung file APK
echo ============================================================
echo.
echo   Chay lan dau se tai ve khoang 100-300 MB thu vien Android.
echo   Nhung lan sau nhanh hon nhieu.
echo.
echo   CAN CO SAN:
echo     - Node.js        (node -v)
echo     - Android Studio (kem theo Android SDK va JDK)
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo   [X] Khong tim thay Node.js. Tai tai https://nodejs.org/
  echo.
  pause
  exit /b 1
)

where python >nul 2>nul
if errorlevel 1 (
  echo   [X] Khong tim thay Python.
  echo.
  pause
  exit /b 1
)

echo   [1/5] Dung ban HTML mot tep...
python build.py
if errorlevel 1 goto loi

echo.
echo   [2/5] Gom noi dung vao android-app\www ...
echo         (mac dinh chi dong audio tieng Han; sua o dong duoi neu muon khac)
python tools\gom-app.py --tieng ko
if errorlevel 1 goto loi

echo.
echo   [3/5] Cai thu vien Capacitor...
cd android-app
if not exist node_modules (
  call npm install
  if errorlevel 1 goto loi
)

echo.
echo   [4/5] Tao / cap nhat du an Android...
if not exist android (
  call npx cap add android
  if errorlevel 1 goto loi
) else (
  call npx cap sync android
  if errorlevel 1 goto loi
)

echo.
echo   [5/5] Bien dich APK...
cd android
call gradlew.bat assembleDebug
if errorlevel 1 goto loi_gradle
cd ..\..

echo.
echo ============================================================
echo   XONG.
echo.
echo   File APK nam o:
echo     android-app\android\app\build\outputs\apk\debug\app-debug.apk
echo.
echo   Chep sang dien thoai roi cai. May se hoi "cai tu nguon
echo   khong xac dinh" - bam dong y la duoc.
echo ============================================================
echo.
pause
exit /b 0

:loi_gradle
cd ..\..
echo.
echo   [X] Gradle bien dich that bai.
echo.
echo   Thuong la do phien ban JDK. Capacitor 8.5 bien dich o muc
echo   Java 21 (xem capacitor-cordova-android-plugins/build.gradle),
echo   nen JDK cu hon se bao "invalid source release: 21".
echo   Cach chac an nhat: mo du an bang Android Studio roi de
echo   Android Studio dung JDK di kem cua no --
echo     Settings  Build, Execution, Deployment  Build Tools
echo       Gradle  Gradle JDK  chon JDK di kem (jbr)
echo.
echo   Mo du an bang lenh:
echo     cd android-app ^&^& npx cap open android
echo.
pause
exit /b 1

:loi
echo.
echo   [X] Co loi xay ra. Doc thong bao phia tren.
echo.
pause
exit /b 1
