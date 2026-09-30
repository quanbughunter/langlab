@echo off
chcp 65001 >nul
title LangLab - thu am cac dang da chia (Phap, Tay Ban Nha)
cd /d "%~dp0.."

echo.
echo ============================================================
echo   LangLab - thu am CAC DANG DA CHIA
echo ============================================================
echo.
echo   Bang chia trong tu dien gio bam duoc vao tung dang, va bam
echo   thi ra nut nghe. Lenh nay thu san giong doc cho tung dang.
echo.
echo   Dang nhat la tieng Tay Ban Nha: cung mot dong tu ma trong am
echo   nhay cho theo duoi chia — lla-MAR, LLA-mas, lla-ME. Nghe ra
echo   duoc cho nhan la hieu ra luon.
echo.
echo   Tieng Tay Ban Nha : 30.097 tep con thieu  (~337 MB, ~12 tieng)
echo   Tieng Phap        : ~18.500 tep con thieu  (~200 MB, ~8 tieng)
echo.
echo   Lau vi dich vu chi cho thu 4 tep mot luc. Muon nhanh hon thi
echo   them --jobs 8, nhung de bi chan; bi chan thi ha xuong --jobs 2.
echo.
echo   DUNG LUC NAO CUNG DUOC bang Ctrl+C. Lan sau chay lai chi thu
echo   phan con thieu. Dong tu duoc thu TRUOC, nen dung giua chung
echo   thi phan da thu van la phan dang gia nhat.
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

echo   [2/3] Sinh lai danh sach dang tu du lieu moi nhat...
where node >nul 2>nul
if errorlevel 1 (
  echo         Khong co Node — dung danh sach co san tools\forms-audio.json
) else (
  node tools\gen-forms.js
)

echo.
echo   [3/3] Bat dau thu am...
echo.

REM Mac dinh thu ca hai thu tieng. Muon rieng mot thu tieng thi chay:
REM   tools\thu-am-dang-chia.bat --lang es
python tools\make_audio.py --only forms --lang fr es %*
set RC=%ERRORLEVEL%

echo.
if %RC% NEQ 0 (
  echo   [X] Co loi xay ra. Doc thong bao phia tren.
) else (
  echo ============================================================
  echo   XONG. Mo index.html, vao Tu dien tieng Tay Ban Nha,
  echo   go "llamar", roi bam vao tung o trong bang chia.
  echo   Moi dang gio doc bang giong thu san.
  echo ============================================================
)
echo.
pause
