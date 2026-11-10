@echo off
title Deploy to Firebase Hosting - Abhinand Portfolio
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo ========================================================
echo       Abhinand Portfolio - Firebase Web Hosting
echo ========================================================
echo.

echo [1/3] Building latest production assets (Vite)...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Build failed! Please resolve errors above.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Checking Firebase login status...
call npx -y firebase-tools login --reauth
echo.

echo [3/3] Deploying to Firebase Hosting...
call npx -y firebase-tools deploy --only hosting
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo SUCCESS! Your website is live on Firebase Hosting!
    echo ========================================================
) else (
    echo.
    echo If this is your first time deploying:
    echo 1. Go to https://console.firebase.google.com and click "Add project"
    echo 2. Give it a name (e.g. abhinand-portfolio)
    echo 3. Run: npx firebase-tools use --add
    echo 4. Run this script again!
)

pause

