import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Récupère la liste de tous les livres d'informatique
   */
  getBooks(): Observable<any> {
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

  /**
   * Mappe les détails d'un livre depuis l'API
   */
  private mapBookDetails(apiBook: any): Book {
    const description = typeof apiBook.description === 'string' 
      ? apiBook.description 
      : (apiBook.description?.value || '');

    return {
      key: apiBook.key,
      title: apiBook.title || '',
      edition_count: apiBook.edition_count || 0,
      cover_id: apiBook.covers?.[0] || 0,
      first_publish_year: apiBook.first_publish_year || 0,
      subtitle: apiBook.subtitle || '',
      description: description
    };
  }
}
