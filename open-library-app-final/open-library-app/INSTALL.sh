#!/bin/bash

# Script d'installation automatique - Open Library App

echo "=========================================="
echo "Installation - Open Library App (Angular)"
echo "=========================================="
echo ""

# Vérifier Node.js
echo "Vérification de Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "Veuillez installer Node.js 22.x ou supérieur"
    echo "Téléchargez depuis : https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js trouvé : $NODE_VERSION"

# Vérifier npm
echo ""
echo "Vérification de npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm trouvé : $NPM_VERSION"

# Installer les dépendances
echo ""
echo "Installation des dépendances npm..."
echo "Cela peut prendre 2-5 minutes..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi

echo ""
echo "=========================================="
echo "✅ Installation terminée avec succès !"
echo "=========================================="
echo ""
echo "Pour démarrer l'application, exécutez :"
echo ""
echo "  npm start"
echo ""
echo "L'application sera accessible à :"
echo "  http://localhost:4200/"
echo ""
echo "=========================================="
