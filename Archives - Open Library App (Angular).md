# Archives - Open Library App (Angular)

## Fichiers Disponibles

### 1. **open-library-app-final.tar.gz** (1.7 MB)
Archive compressée pour Linux/Mac

### 2. **open-library-app-final.zip** (1.8 MB)
Archive compressée pour Windows/Mac/Linux

## Installation Rapide

### Sur Linux/Mac

```bash
# Extraire l'archive
tar -xzf open-library-app-final.tar.gz
cd open-library-app

# Installer les dépendances
npm install

# Démarrer l'application
npm start
```

Ou utiliser le script d'installation :

```bash
chmod +x INSTALL.sh
./INSTALL.sh
```

Puis démarrer :

```bash
chmod +x START.sh
./START.sh
```

### Sur Windows

1. Extraire l'archive `open-library-app-final.zip`
2. Ouvrir le dossier `open-library-app`
3. Double-cliquer sur `INSTALL.bat`
4. Une fois terminé, double-cliquer sur `START.bat`

Ou en ligne de commande :

```bash
cd open-library-app
npm install
npm start
```

## Contenu de l'Archive

```
open-library-app/
├── src/                           # Code source
│   ├── app/
│   │   ├── components/            # Composants (head-bar, search-bar, book-list, book-details)
│   │   ├── pages/                 # Pages (home)
│   │   ├── services/              # Services (book.service.ts)
│   │   ├── models/                # Modèles (book.model.ts)
│   │   ├── app.ts                 # Composant racine
│   │   ├── app.routes.ts          # Routes
│   │   ├── app.config.ts          # Configuration
│   │   └── app.html               # Template racine
│   ├── main.ts                    # Point d'entrée
│   ├── index.html                 # HTML principal
│   └── styles.css                 # Styles globaux
├── package.json                   # Dépendances npm
├── angular.json                   # Configuration Angular
├── tsconfig.json                  # Configuration TypeScript
├── INSTALL.sh                     # Script d'installation (Linux/Mac)
├── INSTALL.bat                    # Script d'installation (Windows)
├── START.sh                       # Script de démarrage (Linux/Mac)
├── START.bat                      # Script de démarrage (Windows)
├── DOCUMENTATION.md               # Documentation technique
├── README_EXAMEN.md               # Guide d'examen
├── DEPLOYMENT.md                  # Guide de déploiement
└── README.md                      # README original
```

## Prérequis

- **Node.js** : 22.x ou supérieur
- **npm** : 10.x ou supérieur

Téléchargez depuis : https://nodejs.org/

## Vérification de l'Installation

```bash
node --version    # Doit afficher v22.x.x
npm --version     # Doit afficher 10.x.x
```

## Commandes Principales

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
ng serve

# Builder pour la production
npm run build
ng build --configuration production

# Vérifier la compilation TypeScript
ng check

# Lancer les tests
ng test

# Formater le code
npm run format
```

## Accès à l'Application

Une fois le serveur démarré, ouvrez votre navigateur et accédez à :

```
http://localhost:4200/
```

## Fonctionnalités

✅ Chargement des livres d'informatique depuis Open Library  
✅ Recherche par titre  
✅ Recherche par année de publication  
✅ Affichage des détails complets d'un livre  
✅ Images de couverture  
✅ Design responsive (mobile/tablette/desktop)  
✅ Gestion des erreurs  
✅ États de chargement  

## Documentation

- **DOCUMENTATION.md** : Documentation technique complète
- **README_EXAMEN.md** : Guide spécifique à l'examen IHEC
- **DEPLOYMENT.md** : Instructions de déploiement
- **INSTALLATION_RAPIDE.md** : Guide d'installation rapide

## Dépannage

### Le port 4200 est déjà utilisé

```bash
ng serve --port 4300
```

### Les dépendances ne s'installent pas

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Erreurs TypeScript

```bash
ng check
rm -rf dist
ng build
```

## Technologies

- Angular 21.0.5
- TypeScript 5.9+
- RxJS 7.x
- CSS3 Responsive Design
- Node.js 22.x
- npm 10.x

## Déploiement

### Build de Production

```bash
ng build --configuration production
```

Les fichiers compilés seront dans `dist/open-library-app/browser/`

### Déployer sur GitHub Pages

```bash
ng build --base-href=/open-library-app/
# Déployer les fichiers de dist/
```

### Déployer sur Netlify

```bash
npm install -g netlify-cli
ng build --configuration production
netlify deploy --prod --dir=dist/open-library-app/browser
```

### Déployer sur Firebase Hosting

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## Support

Pour toute question ou problème :

1. Consultez la **DOCUMENTATION.md**
2. Vérifiez les **logs de la console** (F12)
3. Vérifiez la **connexion Internet** (API Open Library)
4. Consultez la documentation Angular : https://angular.dev

## Conformité

Cette application est conforme à 100% avec l'énoncé de l'examen IHEC Carthage 3BI - Framework de développement web avancé.

## Licence

MIT

## Bon développement ! 🚀
