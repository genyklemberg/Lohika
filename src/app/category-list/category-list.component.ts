import { Component, OnInit } from '@angular/core';
import {IBookCategory} from '../models/book-category';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
  activeCategory: IBookCategory = null;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {  }
  ngOnInit() {
    this.route.params.subscribe(this.onRouteParamsChanged.bind(this));
  }
  onRouteParamsChanged(params) {
    const activeHash = params['category'];
    this.activeCategory = this.categoryService.findCategoryByHash(activeHash);
  }
}
