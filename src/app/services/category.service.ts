import { Injectable } from '@angular/core';
import {IBookCategory} from '../models/book-category';
import has = Reflect.has;

@Injectable()
export class CategoryService {
  categories: IBookCategory[];
  constructor() {
    this.categories = [
      {
        hash: 'scientific',
        id: 'scientific',
        caption: 'Scientific',
        categories: [
          {hash: 'scientific1', id: 'scientific1', caption: 'Scientific1'},
          {hash: 'scientific2', id: 'scientific2', caption: 'Scientific2'}]
      },
      {
        hash: 'fantasy',
        id: 'fantasy',
        caption: 'Fantasy',
        categories: [
          {hash: 'fantasy1', id: 'fantasy1', caption: 'Fantasy1'},
          {hash: 'fantasy2', id: 'fantasy2', caption: 'Fantasy2'}]
      },
      {
        hash: 'classic',
        id: 'classic',
        caption: 'Classic',
        categories: [
          {hash: 'classic1', id: 'classic1', caption: 'Classic1'},
          {hash: 'classic2', id: 'classic2', caption: 'Classic2'}]
      },
    ];
  }
  findCategoryByHash(hash: string): IBookCategory {
    return this.categories.find(category => category.hash === hash);
  }
  findSubCategoryByHash(hash: string): IBookCategory {
    const subCategories: IBookCategory[] = [];
    this.categories.forEach(elem => {
      Array.prototype.push.apply(subCategories, elem.categories);
    });
    return subCategories.find(category => category.hash === hash);
  }
  getCategories(): IBookCategory[] {
    return this.categories.splice(0);
  }
}
