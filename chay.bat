@echo off
chcp 65001 >nul
title LangLab
cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo.
  echo   [X] Khong tim thay Python. Tai tai https://www.python.org/downloads/
  echo       Nho tich "Add python.exe to PATH" khi cai.
  echo.
  pause
  exit /b 1
)

python -c "import edge_tts" >nul 2>nul
if errorlevel 1 (
  echo.
  echo   Chua co thu vien edge-tts - dang cai de doc duoc van ban tuy y...
  python -m pip install --quiet --disable-pip-version-check edge-tts
  echo.
)

python tools\serve.py %*
pause
