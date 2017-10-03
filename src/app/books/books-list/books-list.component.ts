import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: FirebaseListObservable<IBook[]>;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  getThumbnail(book): string {
    if (!book ||
      !book.volumeInfo ||
      !book.volumeInfo.imageLinks ||
      !book.volumeInfo.imageLinks.smallThumbnail) {
        return 'http://via.placeholder.com/128x217';
      }

    return book.volumeInfo.imageLinks.smallThumbnail;
  }

  ngOnInit() {
  }

}
