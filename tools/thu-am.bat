@echo off
chcp 65001 >nul
title LangLab - thu am giong neural 5 thu tieng
cd /d "%~dp0.."

echo.
echo ============================================================
echo   LangLab - thu san giong doc 5 thu tieng
echo ============================================================
echo.
echo   Se thu cau hoi bai nghe - xem tranh cua ca 5 thu tieng
echo   (Han, Trung, Nhat, Nga, Anh) thanh mp3 bang giong neural
echo   cua Microsoft, luu vao audio\tts\<thu tieng>\
echo.
echo   Can mang. Khoang 3300 tep, ~30 MB, mat chung 20-30 phut.
echo   Chay lai lan sau chi thu phan con thieu.
echo.
echo   Muon thu them tu vung va hoi thoai cua giao trinh:
echo     python tools\make_audio.py --with-course
echo.

where python >nul 2>nul
if errorlevel 1 (
  echo   [X] Khong tim thay Python.
  echo       Tai tai https://www.python.org/downloads/
  echo       Nho tich "Add python.exe to PATH" khi cai.
  echo.
  pause
  exit /b 1
)

echo   [1/3] Kiem tra thu vien edge-tts...
python -c "import edge_tts" >nul 2>nul
if errorlevel 1 (
  echo         Chua co, dang cai...
  python -m pip install --quiet --disable-pip-version-check edge-tts
  if errorlevel 1 (
    echo.
    echo   [X] Cai edge-tts that bai. Thu chay tay:
    echo       python -m pip install edge-tts
    echo.
    pause
    exit /b 1
  )
  echo         Da cai xong.
) else (
  echo         Da co san.
)

echo   [2/3] Doc danh sach cau tu du lieu bai hoc...
echo   [3/3] Bat dau thu am...
echo.

python tools\make_audio.py %*
set RC=%ERRORLEVEL%

echo.
if %RC% NEQ 0 (
  echo   [X] Co loi xay ra. Doc thong bao phia tren.
) else (
  echo ============================================================
  echo   XONG. Gio mo index.html va tai lai trang.
  echo   Bam nghe o bat ky thu tieng nao - se ra giong neural,
  echo   khong con phu thuoc giong cai san trong Windows nua.
  echo.
  echo   Doi sang giong nam, chay lai bang dong lenh:
  echo     python tools\make_audio.py --voice ko=ko-KR-InJoonNeural --force
  echo   Thu them giao trinh va bai doc:
  echo     python tools\make_audio.py --with-course --with-readings
  echo ============================================================
)
echo.
pause
