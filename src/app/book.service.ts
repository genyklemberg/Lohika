import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.books = db.list('/items');
  }

  getBooks(): FirebaseListObservable<any[]> {
    return this.books;
  }
}
