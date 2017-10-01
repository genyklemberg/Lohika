import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.css']
})
export class BooksListItemComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
