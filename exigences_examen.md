# Exigences de l'Examen Angular - IHEC Carthage (3BI)

## Informations Générales
- **Matière** : Framework de développement web avancé
- **Enseignante** : Ilhem Baroud
- **Date** : Janvier 2026
- **Objectif** : Créer une application web exploitant l'API `openlibrary.org`.

## Spécifications Techniques
- **Nom de l'application** : `open-library-app`
- **Interface `Book`** :
  - `key`: string (format `/works/id`)
  - `title`: string
  - `edition_count`: number
  - `cover_id`: number
  - `first_publish_year`: number
  - `subtitle`: string
  - `description`: string

## Service `BookService`
- `getBooks()` : Retourne la liste des livres d'informatique via `https://openlibrary.org/subjects/computers.json`.
- `getBookById(id: string)` : Retourne un livre par son identifiant via `https://openlibrary.org/works/${id}.json`.
- Méthodes de recherche par **titre** et par **année d'édition**.

## Composants
1. **`head-bar`** : Affiche le titre de l'application.
2. **`search-bar`** : Zone de recherche par titre et par année de première édition.
3. **`book-list`** : Affiche la liste des livres (titres + photos de couverture).
   - URL images : `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
4. **`book-details`** : Affiche les détails d'un livre sélectionné (titre, sous-titre, année d'édition, description).

## Navigation & Routage
- Utilisation du routage Angular pour naviguer entre les composants.
- Passage de la liste aux détails en cliquant sur un livre.
