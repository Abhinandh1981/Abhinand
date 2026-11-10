@echo off
title Abhinand Portfolio Dev Server
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"
echo ========================================================
echo Starting Vite Dev Server for Abhinand Portfolio...
echo Node location: %LOCALAPPDATA%\Programs\nodejs
echo ========================================================
echo.
npm run dev
pause
