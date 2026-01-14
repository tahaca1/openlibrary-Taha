import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { HeadBarComponent } from '../../components/head-bar/head-bar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { BookListComponent } from '../../components/book-list/book-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeadBarComponent, SearchBarComponent, BookListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.error = null;
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.filteredBooks = books;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des livres:', err);
        this.error = 'Impossible de charger les livres. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  onSearchByTitle(title: string): void {
    this.bookService.searchByTitle(title).subscribe(results => {
      this.filteredBooks = results;
    });
  }

  onSearchByYear(year: number): void {
    this.bookService.searchByYear(year).subscribe(results => {
      this.filteredBooks = results;
    });
  }

  onResetSearch(): void {
    this.filteredBooks = this.books;
  }

  onBookSelected(book: Book): void {
    const bookId = book.key.split('/').pop();
    this.router.navigate(['/book', bookId]);
  }
}
