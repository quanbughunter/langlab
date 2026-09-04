@echo off
chcp 65001 >nul
title LangLab - kiem tra khoa API
cd /d "%~dp0.."

echo.
echo ============================================================
echo   Kiem tra khoa API dung de dich
echo ============================================================
echo.

where python >nul 2>nul
if errorlevel 1 (
  echo   [X] Khong tim thay Python.
  echo.
  pause
  exit /b 1
)

python tools\translate.py --check

echo.
echo ------------------------------------------------------------
echo   Khoa nam o tep api-key.txt trong thu muc langlab.
echo   Chi can dan khoa vao, moi dong mot khoa, luu lai la xong.
echo ------------------------------------------------------------
echo.
pause
