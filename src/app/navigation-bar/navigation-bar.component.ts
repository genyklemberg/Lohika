import { Component, OnInit } from '@angular/core';
import { IBookCategory } from '../models/book-category';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  categories: IBookCategory[];
  constructor(private categoriesService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

}
