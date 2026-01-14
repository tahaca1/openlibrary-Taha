@echo off
REM Script de démarrage - Open Library App (Windows)

echo ==========================================
echo Démarrage - Open Library App (Angular)
echo ==========================================
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo Les dépendances ne sont pas installées.
    echo Exécutez d'abord : npm install
    echo.
    echo Ou utilisez le script d'installation :
    echo   INSTALL.bat
    pause
    exit /b 1
)

echo Démarrage du serveur de développement...
echo.
echo L'application sera accessible à :
echo   http://localhost:4200/
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo.

call npm start
pause
