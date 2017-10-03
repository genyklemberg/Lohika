import { Component, OnInit } from '@angular/core';
import { IBookCategory } from '../models/book-category';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  categories: IBookCategory[];
  constructor() { }

  ngOnInit() {
    this.categories = [
      {hash: 'scientific', id: 'scientific', caption: 'Scientific'},
      {hash: 'fantasy', id: 'fantasy', caption: 'Fantasy'},
      {hash: 'classic', id: 'classic', caption: 'Classic'},
    ];
  }

}
