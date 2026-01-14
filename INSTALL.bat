@echo off
REM Script d'installation automatique - Open Library App (Windows)

echo ==========================================
echo Installation - Open Library App (Angular)
echo ==========================================
echo.

REM Vérifier Node.js
echo Vérification de Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js n'est pas installé
    echo Veuillez installer Node.js 22.x ou supérieur
    echo Téléchargez depuis : https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js trouvé : %NODE_VERSION%

REM Vérifier npm
echo.
echo Vérification de npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm n'est pas installé
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm trouvé : %NPM_VERSION%

REM Installer les dépendances
echo.
echo Installation des dépendances npm...
echo Cela peut prendre 2-5 minutes...
call npm install

if errorlevel 1 (
    echo ❌ Erreur lors de l'installation des dépendances
    pause
    exit /b 1
)

echo.
echo ==========================================
echo ✅ Installation terminée avec succès !
echo ==========================================
echo.
echo Pour démarrer l'application, exécutez :
echo.
echo   npm start
echo.
echo L'application sera accessible à :
echo   http://localhost:4200/
echo.
echo ==========================================
pause
