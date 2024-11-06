import { Component } from '@angular/core';
import { CommonModule, NgClass } from "@angular/common";
import { ThumbPipe } from "../../utils/pipes/thumb.pipe";
import { Book } from "../../utils/class/book";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    NgClass,
    ThumbPipe,
    FormsModule, CommonModule
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

  books: Book[] = [
    new Book(0, 'Une chambre à soi', 'Virginia Woolf', false),
    new Book(1, 'La Servante Ecarlate', 'Margaret Atwood', true),
    new Book(2, 'Les Impatientes', 'Djaïli Amadou Amal', true),
    new Book(3, 'La Tresse', 'Laetitia Colombani', false),
    new Book(4, 'Hunger Games', 'Susan Colins', true),
  ];

  newBook: Book = new Book();

  titleHasError = true;
  authorHasError = true;
  isSubmitted = false;

  validateTitle() {
    this.titleHasError = !this.newBook.title || this.newBook.title.length < 5;
  }

  validateAuthor() {
    this.authorHasError = !this.newBook.author || this.newBook.author.length < 5;
  }

  submitNewBook() {
    this.isSubmitted = true;
    this.validateTitle();
    this.validateAuthor();

    if (!this.titleHasError && !this.authorHasError) {
      const book = new Book(
        this.books.length,
        this.newBook.title,
        this.newBook.author,
        false
      );
      this.books.push(book);
      this.newBook = new Book();
      this.isSubmitted = false;
      this.titleHasError = true;
      this.authorHasError = true;
    }
  }

  toggleIsRead(book: Book) {
    book.isRead = !book.isRead;
  }
}
