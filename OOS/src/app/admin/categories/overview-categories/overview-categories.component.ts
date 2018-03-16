import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { CategoryModel } from '../../models/category'
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-categories',
  templateUrl: './overview-categories.component.html',
  styleUrls: ['./overview-categories.component.css']
})
export class OverviewCategoriesComponent implements OnInit {

  listCategories: CategoryModel[];

  constructor(
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.getListCategories();
  }

  getListCategories() {
    this.categoryService.get().subscribe(data => {
      this.listCategories = data;
    })
  }

  delete(category: CategoryModel) {
    this.categoryService.delete(category).subscribe(data => {
      this.getListCategories();
    });
  }


}
