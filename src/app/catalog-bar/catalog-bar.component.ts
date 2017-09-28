import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/primeng';

@Component({
  selector: 'app-catalog-bar',
  templateUrl: './catalog-bar.component.html',
  styleUrls: ['./catalog-bar.component.css']
})
export class CatalogBarComponent implements OnInit {

  categories: TreeNode[];

  constructor() {}
  ngOnInit() {
    this.categories = [{label: 'category1', children: [{label: 'sub category 11'}, {label: 'sub category 12'}]}, {label: 'category2'}];
  }

}
