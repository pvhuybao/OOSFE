import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../Model/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  listCategory: CategoryModel[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getListCategory();
  }

  getListCategory() {
    this.categoryService.get().subscribe(result => {
      this.listCategory = result
    })
  }

  addCategory(categoryName: string){

    let newCategory = new CategoryModel();
    newCategory.name = categoryName;

    this.categoryService.add(newCategory).subscribe(() => {
      this.getListCategory();
    })
  }

}
