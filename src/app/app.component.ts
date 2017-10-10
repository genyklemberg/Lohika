import { Component } from '@angular/core';
import { BookService} from './services/book.service';
import {CategoryService} from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.components.css'],
  providers:  [
    BookService,
    CategoryService
  ]
})
export class AppComponent {
  constructor() {
  }
}
