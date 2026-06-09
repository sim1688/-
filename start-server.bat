@echo off
cd /d "%~dp0"
echo Starting OceanEngine batch creator...
echo.
set "NODE_EXE=C:\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%NODE_EXE%" (
  "%NODE_EXE%" server.js
) else (
  node server.js
)
pause
