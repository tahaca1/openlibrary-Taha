import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchByTitle = new EventEmitter<string>();
  @Output() searchByYear = new EventEmitter<number>();
  @Output() resetSearch = new EventEmitter<void>();

  searchTitle: string = '';
  searchYear: number | null = null;

  onSearchTitle(): void {
    if (this.searchTitle.trim()) {
      this.searchByTitle.emit(this.searchTitle);
    }
  }

  onSearchYear(): void {
    if (this.searchYear) {
      this.searchByYear.emit(this.searchYear);
    }
  }

  onReset(): void {
    this.searchTitle = '';
    this.searchYear = null;
    this.resetSearch.emit();
  }
}
