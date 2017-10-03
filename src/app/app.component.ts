import { Component } from '@angular/core';
import { BookService} from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.components.css'],
  providers:  [
    BookService
  ]
})
export class AppComponent {
  constructor() {
  }
}
