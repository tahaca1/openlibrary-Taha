# Documentation - Open Library App (Angular)

## Vue d'ensemble

**Open Library App** est une application Angular complète conforme à l'énoncé de l'examen universitaire IHEC Carthage (3BI - Framework de développement web avancé). L'application exploite l'API publique **Open Library** pour permettre aux utilisateurs de rechercher et consulter des livres d'informatique.

## Architecture de l'Application

### Structure du Projet

```
src/
├── app/
│   ├── components/
│   │   ├── head-bar/              # Barre d'en-tête de l'application
│   │   ├── search-bar/            # Composant de recherche
│   │   ├── book-list/             # Liste des livres
│   │   └── book-details/          # Détails d'un livre
│   ├── pages/
│   │   └── home/                  # Page d'accueil
│   ├── services/
│   │   └── book.service.ts        # Service API
│   ├── models/
│   │   └── book.model.ts          # Interface Book
│   ├── app.ts                     # Composant racine
│   ├── app.routes.ts              # Configuration des routes
│   ├── app.config.ts              # Configuration de l'application
│   └── app.html                   # Template racine
├── main.ts                        # Point d'entrée
├── index.html                     # HTML principal
└── styles.css                     # Styles globaux
```

## Composants

### 1. HeadBar Component
- **Localisation** : `src/app/components/head-bar/`
- **Responsabilité** : Affiche le titre et la description de l'application
- **Fichiers** :
  - `head-bar.component.ts` : Logique du composant
  - `head-bar.component.html` : Template
  - `head-bar.component.css` : Styles

### 2. SearchBar Component
- **Localisation** : `src/app/components/search-bar/`
- **Responsabilité** : Fournit une interface de recherche par titre et année
- **Événements émis** :
  - `searchByTitle(title: string)` : Recherche par titre
  - `searchByYear(year: number)` : Recherche par année
  - `resetSearch()` : Réinitialise la recherche

### 3. BookList Component
- **Localisation** : `src/app/components/book-list/`
- **Responsabilité** : Affiche la liste des livres sous forme de grille
- **Entrées** :
  - `@Input() books: Book[]` : Liste des livres à afficher
- **Événements émis** :
  - `@Output() bookSelected` : Émis lors du clic sur un livre

### 4. BookDetails Component
- **Localisation** : `src/app/components/book-details/`
- **Responsabilité** : Affiche les détails complets d'un livre
- **Fonctionnalités** :
  - Récupère l'ID du livre depuis les paramètres de route
  - Charge les détails via le service
  - Affiche titre, sous-titre, année, description

### 5. Home Component
- **Localisation** : `src/app/pages/home/`
- **Responsabilité** : Page principale orchestrant tous les composants
- **Fonctionnalités** :
  - Charge la liste initiale des livres
  - Gère les recherches
  - Navigue vers les détails

## Service

### BookService
- **Localisation** : `src/app/services/book.service.ts`
- **Méthodes** :

#### `getBooks(): Observable<Book[]>`
Récupère la liste de tous les livres d'informatique depuis l'API Open Library.
```typescript
https://openlibrary.org/subjects/computers.json
```

#### `getBookById(id: string): Observable<Book>`
Récupère les détails d'un livre spécifique.
```typescript
https://openlibrary.org/works/${id}.json
```

#### `searchByTitle(title: string): Observable<Book[]>`
Filtre les livres par titre (recherche locale).

#### `searchByYear(year: number): Observable<Book[]>`
Filtre les livres par année de première édition (recherche locale).

## Modèle de Données

### Interface Book
```typescript
export interface Book {
  key: string;                    // Identifiant unique (/works/OL123W)
  title: string;                  // Titre du livre
  edition_count: number;          // Nombre d'éditions
  cover_id: number;               // ID de la couverture
  first_publish_year: number;     // Année de première publication
  subtitle: string;               // Sous-titre
  description: string;            // Description du livre
}
```

## Routes

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | HomeComponent | Page d'accueil avec liste des livres |
| `/book/:id` | BookDetailsComponent | Détails d'un livre |
| `**` | Redirection vers `/` | Toute autre route |

## API Utilisées

### 1. Récupérer les livres d'informatique
```
GET https://openlibrary.org/subjects/computers.json
```
**Réponse** : Liste des livres avec propriétés de base

### 2. Récupérer les détails d'un livre
```
GET https://openlibrary.org/works/{id}.json
```
**Réponse** : Détails complets du livre

### 3. Images de couverture
```
GET https://covers.openlibrary.org/b/id/{cover_id}-M.jpg
```
**Paramètres** :
- `M` : Taille moyenne (couverture standard)

## Installation et Démarrage

### Prérequis
- Node.js 22.x
- npm 10.x
- Angular CLI 21.x

### Installation
```bash
cd open-library-app
npm install
```

### Démarrage du serveur de développement
```bash
ng serve
```
L'application est accessible à `http://localhost:4200/`

### Build de production
```bash
ng build
```
Les fichiers compilés sont dans `dist/open-library-app/`

## Styles et Design

### Palette de couleurs
- **Primaire** : `#667eea` (Bleu-violet)
- **Secondaire** : `#764ba2` (Violet)
- **Arrière-plan** : `#ffffff` (Blanc)
- **Texte** : `#333333` (Gris foncé)

### Typographie
- **Police** : Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tailles** : Responsive (mobile-first)

### Responsive Design
- **Mobile** : < 480px
- **Tablette** : 480px - 1024px
- **Desktop** : > 1024px

## Fonctionnalités Implémentées

✅ Récupération des livres d'informatique via API  
✅ Affichage en grille responsive  
✅ Recherche par titre  
✅ Recherche par année  
✅ Affichage des détails d'un livre  
✅ Images de couverture  
✅ Navigation entre pages  
✅ Gestion des erreurs  
✅ États de chargement  

## Technologies Utilisées

- **Framework** : Angular 21.0.5
- **Langage** : TypeScript 5.9+
- **HTTP Client** : @angular/common/http
- **Routage** : @angular/router
- **Styling** : CSS3 avec responsive design
- **Build Tool** : Angular CLI

## Conformité à l'Énoncé

Cette application respecte strictement tous les critères de l'examen IHEC Carthage :

1. ✅ Application Angular nommée `open-library-app`
2. ✅ Interface `Book` avec toutes les propriétés requises
3. ✅ Service `BookService` avec méthodes `getBooks()` et `getBookById()`
4. ✅ Méthodes de recherche par titre et année
5. ✅ Composant `head-bar` affichant le titre
6. ✅ Composant `search-bar` avec recherche
7. ✅ Composant `book-list` affichant les livres avec couvertures
8. ✅ Composant `book-details` affichant les détails
9. ✅ Utilisation de l'API Open Library
10. ✅ Routage Angular pour la navigation
11. ✅ Requêtes HTTP via le service
12. ✅ Observables RxJS pour la gestion des données

## Fichiers Importants

| Fichier | Description |
|---------|-------------|
| `src/app/services/book.service.ts` | Service d'accès aux données |
| `src/app/models/book.model.ts` | Interface Book |
| `src/app/app.routes.ts` | Configuration des routes |
| `src/app/app.config.ts` | Configuration de l'application |
| `src/app/pages/home/home.component.ts` | Composant principal |
| `src/styles.css` | Styles globaux |

## Exécution des Tests

```bash
# Tests unitaires
ng test

# Build de production
ng build --configuration production
```

## Notes de Développement

- L'application utilise les **Standalone Components** d'Angular (dernière approche recommandée)
- Les **Observables** sont utilisés pour la gestion asynchrone
- Le **Responsive Design** est appliqué sur tous les composants
- Les **erreurs** sont gérées et affichées à l'utilisateur
- Le **chargement** est indiqué par des messages

## Déploiement

L'application peut être déployée sur n'importe quelle plateforme supportant les applications Angular statiques :
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Manus Hosting

## Support et Documentation

- [Documentation Angular](https://angular.dev)
- [API Open Library](https://openlibrary.org/developers/api)
- [Énoncé de l'examen](./Enoncé.pdf)
