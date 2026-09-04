@echo off
chcp 65001 >nul
title LangLab - thu am giong neural tieng Han
cd /d "%~dp0.."

echo.
echo ============================================================
echo   LangLab - thu san giong doc tieng Han
echo ============================================================
echo.
echo   Se thu 298 tu va cau thanh mp3 bang giong neural cua
echo   Microsoft (ko-KR-SunHiNeural), luu vao audio\tts\
echo.
echo   Can mang. Mat khoang 2 phut, tong dung luong ~5 MB.
echo   Chay lai lan sau chi thu phan con thieu.
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

echo   [2/3] Doc danh sach tu va cau tu giao trinh...
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
  echo   Bam vao bat ky tu tieng Han nao - se nghe giong neural,
  echo   khong con giong may cua Windows nua.
  echo.
  echo   Muon giong nam thay giong nu, chay lai bang dong lenh:
  echo     python tools\make_audio.py --voice ko-KR-InJoonNeural --force
  echo ============================================================
)
echo.
pause
