# Plan d'Architecture - Open Library App (Angular)

## Structure du Projet

```
src/
├── app/
│   ├── services/
│   │   └── book.service.ts          # Service pour les requêtes API
│   ├── models/
│   │   └── book.model.ts            # Interface Book
│   ├── components/
│   │   ├── head-bar/                # Composant barre d'en-tête
│   │   ├── search-bar/              # Composant recherche
│   │   ├── book-list/               # Composant liste des livres
│   │   └── book-details/            # Composant détails du livre
│   ├── app.component.ts             # Composant racine
│   ├── app.routes.ts                # Configuration des routes
│   └── app.config.ts                # Configuration de l'app
├── main.ts                          # Point d'entrée
├── index.html                       # HTML principal
└── styles.css                       # Styles globaux
```

## Composants à Créer

### 1. **BookService** (`services/book.service.ts`)
- Méthode `getBooks()` : Récupère la liste des livres d'informatique
- Méthode `getBookById(id: string)` : Récupère un livre par son identifiant
- Méthode `searchByTitle(title: string)` : Recherche par titre
- Méthode `searchByYear(year: number)` : Recherche par année

### 2. **Book Model** (`models/book.model.ts`)
```typescript
export interface Book {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  first_publish_year: number;
  subtitle: string;
  description: string;
}
```

### 3. **HeadBar Component**
- Affiche le titre "Open Library App"
- Barre de navigation simple

### 4. **SearchBar Component**
- Champs de recherche : titre et année
- Boutons de recherche
- Affiche les résultats filtrés

### 5. **BookList Component**
- Affiche la liste des livres
- Chaque livre affiche : titre, couverture, auteur
- Clic sur un livre → navigation vers BookDetails

### 6. **BookDetails Component**
- Affiche les détails complets d'un livre
- Titre, sous-titre, année d'édition, description
- Bouton retour à la liste

## Routes
- `/` : Page d'accueil avec liste des livres
- `/book/:id` : Détails d'un livre

## API Utilisées
- `https://openlibrary.org/subjects/computers.json` : Liste des livres
- `https://openlibrary.org/works/${id}.json` : Détails d'un livre
- `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg` : Images de couverture
