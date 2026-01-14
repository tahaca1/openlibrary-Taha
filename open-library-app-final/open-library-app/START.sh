#!/bin/bash

# Script de démarrage - Open Library App

echo "=========================================="
echo "Démarrage - Open Library App (Angular)"
echo "=========================================="
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Les dépendances ne sont pas installées."
    echo "Exécutez d'abord : npm install"
    echo ""
    echo "Ou utilisez le script d'installation :"
    echo "  ./INSTALL.sh"
    exit 1
fi

echo "Démarrage du serveur de développement..."
echo ""
echo "L'application sera accessible à :"
echo "  http://localhost:4200/"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""

npm start
