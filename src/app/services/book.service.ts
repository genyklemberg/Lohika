import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IBook } from '../models/book';

@Injectable()
export class BookService {
  books: FirebaseListObservable<IBook[]>;

  constructor(db: AngularFireDatabase) {
    this.books = db.list('/items');
  }

  getBooks(): FirebaseListObservable<IBook[]> {
    return this.books;
  }
}
