@echo off
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%LOCALAPPDATA%\Programs\nodejs;%PATH%"
echo ========================================================
echo Pushing portfolio code to:
echo https://github.com/Abhinandh1981/Abhinand.git
echo ========================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo SUCCESS! Your code has been pushed to GitHub.
    echo ========================================================
) else (
    echo.
    echo If GitHub prompted for credentials, sign in through your browser
    echo or use a Personal Access Token ^(PAT^).
)
pause
