import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
<<<<<<< HEAD
import { CategoryModel } from '../Model/category';
import { EventEmitter,Input, Output } from '@angular/core';
=======
import { CategoryModel } from '../models/category';
>>>>>>> develop

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
  

}
