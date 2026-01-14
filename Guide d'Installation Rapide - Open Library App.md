# Guide d'Installation Rapide - Open Library App

## 📦 Prérequis

- **Node.js** : 22.x ou supérieur
- **npm** : 10.x ou supérieur
- **Git** (optionnel)

### Vérifier les versions installées

```bash
node --version
npm --version
```

## 🚀 Installation en 3 Étapes

### Étape 1 : Extraire l'archive

```bash
# Extraire l'archive source
tar -xzf open-library-app-source.tar.gz
cd open-library-app
```

### Étape 2 : Installer les dépendances

```bash
# Installer toutes les dépendances npm
npm install
```

**Durée estimée** : 2-5 minutes selon votre connexion Internet

### Étape 3 : Démarrer l'application

```bash
# Lancer le serveur de développement
npm start
```

ou

```bash
ng serve
```

**L'application sera accessible à** : `http://localhost:4200/`

## ✅ Vérification

Une fois le serveur démarré, vous devriez voir :

```
✔ Building...
Application bundle generation complete. [X.XXX seconds]
Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
```

Ouvrez votre navigateur et accédez à `http://localhost:4200/`

## 📋 Commandes Disponibles

```bash
# Démarrer le serveur de développement
npm start
ng serve

# Builder pour la production
npm run build
ng build --configuration production

# Vérifier la compilation TypeScript
ng check

# Lancer les tests unitaires
ng test

# Formater le code
npm run format
```

## 🔧 Installation d'Angular CLI (optionnel)

Si vous n'avez pas Angular CLI installé globalement :

```bash
npm install -g @angular/cli@21
```

## 📁 Structure du Projet

```
open-library-app/
├── src/
│   ├── app/
│   │   ├── components/        # Composants réutilisables
│   │   ├── pages/             # Pages principales
│   │   ├── services/          # Services (BookService)
│   │   ├── models/            # Interfaces (Book)
│   │   └── app.routes.ts      # Routage
│   ├── main.ts                # Point d'entrée
│   ├── index.html             # HTML principal
│   └── styles.css             # Styles globaux
├── package.json               # Dépendances
├── angular.json               # Configuration Angular
├── tsconfig.json              # Configuration TypeScript
└── DOCUMENTATION.md           # Documentation complète
```

## 🌐 Accès à l'Application

### En Local
```
http://localhost:4200/
```

### Pages Disponibles
- **Accueil** : `http://localhost:4200/`
- **Détails d'un livre** : `http://localhost:4200/book/OL123W`

## 🐛 Dépannage

### Le port 4200 est déjà utilisé

```bash
# Utiliser un port différent
ng serve --port 4300
```

### Les dépendances ne s'installent pas

```bash
# Supprimer le cache npm
npm cache clean --force

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Erreurs TypeScript

```bash
# Vérifier les erreurs TypeScript
ng check

# Nettoyer et reconstruire
rm -rf dist
ng build
```

## 📚 Documentation

- **DOCUMENTATION.md** : Documentation technique complète
- **README_EXAMEN.md** : Guide spécifique à l'examen
- **DEPLOYMENT.md** : Instructions de déploiement
- **ARCHITECTURE_PLAN.md** : Architecture du projet

## 🚢 Déploiement

### Build de Production

```bash
ng build --configuration production
```

Les fichiers compilés seront dans `dist/open-library-app/browser/`

### Déployer sur GitHub Pages

```bash
# Modifier angular.json pour ajouter baseHref
# Puis builder
ng build --base-href=/open-library-app/

# Déployer les fichiers de dist/
```

### Déployer sur Netlify

```bash
npm install -g netlify-cli
ng build --configuration production
netlify deploy --prod --dir=dist/open-library-app/browser
```

## 📞 Support

Pour toute question ou problème :

1. Consultez la **DOCUMENTATION.md**
2. Vérifiez les **logs de la console** (F12)
3. Vérifiez la **connexion Internet** (API Open Library)

## ✨ Fonctionnalités

✅ Chargement des livres d'informatique  
✅ Recherche par titre  
✅ Recherche par année  
✅ Affichage des détails  
✅ Images de couverture  
✅ Design responsive  
✅ Gestion des erreurs  

## 🎯 Prochaines Étapes

1. Installer les dépendances : `npm install`
2. Démarrer le serveur : `npm start`
3. Ouvrir le navigateur : `http://localhost:4200/`
4. Explorer l'application
5. Consulter la documentation pour plus de détails

Bon développement ! 🚀
