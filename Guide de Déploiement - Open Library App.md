# Guide de Déploiement - Open Library App

## Déploiement sur GitHub Pages

### Prérequis
- Repository GitHub créé
- Git configuré localement
- Angular CLI installé

### Étapes

1. **Modifier le fichier angular.json**
```json
{
  "projects": {
    "open-library-app": {
      "architect": {
        "build": {
          "options": {
            "baseHref": "/open-library-app/"
          }
        }
      }
    }
  }
}
```

2. **Builder l'application**
```bash
ng build --configuration production
```

3. **Initialiser le repository Git**
```bash
git init
git add .
git commit -m "Initial commit: Open Library App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/open-library-app.git
git push -u origin main
```

4. **Configurer GitHub Pages**
- Aller sur Settings > Pages
- Sélectionner "Deploy from a branch"
- Choisir la branche `main` et le dossier `/dist/open-library-app/browser`
- Cliquer sur "Save"

5. **Vérifier le déploiement**
- L'application sera accessible à : `https://YOUR_USERNAME.github.io/open-library-app/`

## Déploiement sur Netlify

### Via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Builder l'application
ng build --configuration production

# Déployer
netlify deploy --prod --dir=dist/open-library-app/browser
```

### Via Interface Web

1. Connectez-vous à [Netlify](https://netlify.com)
2. Cliquez sur "New site from Git"
3. Sélectionnez votre repository GitHub
4. Configurez les paramètres de build :
   - Build command: `ng build --configuration production`
   - Publish directory: `dist/open-library-app/browser`
5. Cliquez sur "Deploy site"

## Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Builder et déployer
vercel
```

Configuration `vercel.json` :
```json
{
  "buildCommand": "ng build --configuration production",
  "outputDirectory": "dist/open-library-app/browser"
}
```

## Déploiement sur Firebase Hosting

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Initialiser Firebase
firebase init hosting

# Builder l'application
ng build --configuration production

# Déployer
firebase deploy
```

Configuration `firebase.json` :
```json
{
  "hosting": {
    "public": "dist/open-library-app/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Vérification Post-Déploiement

- ✅ L'application charge correctement
- ✅ Les livres s'affichent
- ✅ La recherche fonctionne
- ✅ Les images de couverture s'affichent
- ✅ La navigation entre pages fonctionne
- ✅ Les erreurs sont gérées correctement

## Optimisations pour la Production

```bash
# Build optimisé
ng build --configuration production --optimization --build-optimizer

# Vérifier la taille du bundle
npm install -g webpack-bundle-analyzer
```

## Monitoring

Configurez les outils de monitoring :
- Google Analytics
- Sentry pour les erreurs
- CloudFlare pour le CDN
