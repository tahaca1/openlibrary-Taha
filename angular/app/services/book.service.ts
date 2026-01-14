import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Récupère la liste de tous les livres d'informatique
   * Utilise le cache si les données sont déjà chargées
   */
  getBooks(forceReload: boolean = false): Observable<any> {
    // Return cached data if available and not forcing reload
    if (!forceReload && this.booksSubject.value.length > 0) {
      return of(this.booksSubject.value);
    }

    return this.http.get(`${this.apiUrl}/subjects/computers.json`).pipe(
      map((response: any) => {
        const books = response.works || [];
        const mappedBooks = books.map((book: any) => this.mapBook(book));
        this.booksSubject.next(mappedBooks);
        return mappedBooks;
      })
    );
  }

  /**
   * Récupère un livre par son identifiant
   */
  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/works/${id}.json`).pipe(
      map((response: any) => this.mapBookDetails(response))
    );
  }

  /**
   * Recherche les livres par titre
   */
  searchByTitle(title: string): Observable<Book[]> {
    return this.books$.pipe(
      map(books =>
        books.filter(book =>
          book.title.toLowerCase().includes(title.toLowerCase())
        )
      )
    );
  }

  /**
   * Recherche les livres par année de première édition
   */
  searchByYear(year: number): Observable<Book[]> {
    return this.books$.pipe(
      map(books =>
        books.filter(book => book.first_publish_year === year)
      )
    );
  }

  /**
   * Mappe les données de l'API vers le modèle Book
   */
  private mapBook(apiBook: any): Book {
    return {
      key: apiBook.key,
      title: apiBook.title || '',
      edition_count: apiBook.edition_count || 0,
      cover_id: apiBook.cover_id || 0,
      first_publish_year: apiBook.first_publish_year || 0,
      subtitle: apiBook.subtitle || '',
      description: apiBook.description || ''
    };
  }

  private mapBookDetails(apiBook: any): Book {
    let description = 'Aucune description disponible.';

    // Robust description extraction
    if (apiBook.description) {
      if (typeof apiBook.description === 'string') {
        description = apiBook.description;
      } else if (apiBook.description.value) {
        description = apiBook.description.value;
      }
    }

    // Extract year from available date fields
    let year = 0;
    if (apiBook.first_publish_date) {
      // Try to parse "1994" or "August 1994"
      const match = apiBook.first_publish_date.match(/\d{4}/);
      if (match) {
        year = parseInt(match[0], 10);
      }
    }

    if (year === 0 && apiBook.created && apiBook.created.value) {
      year = parseInt(apiBook.created.value.substring(0, 4), 10) || 0;
    }

    const mappedBook = {
      key: apiBook.key || '',
      title: apiBook.title || 'Titre inconnu',
      edition_count: apiBook.edition_count || 0,
      cover_id: (apiBook.covers && apiBook.covers.length > 0) ? apiBook.covers[0] : 0,
      first_publish_year: year,
      subtitle: apiBook.subtitle || '',
      description: description
    };

    return mappedBook;
  }
}
