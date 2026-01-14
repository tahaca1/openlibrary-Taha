import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() bookSelected = new EventEmitter<Book>();

  onBookClick(book: Book): void {
    this.bookSelected.emit(book);
  }

  getCoverImageUrl(coverId: number): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  }

  getBookKey(book: Book): string {
    return book.key.split('/').pop() || '';
  }
}
