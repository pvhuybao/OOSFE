import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'
<<<<<<< HEAD
import { CategoryModel } from '../../models/category'
=======
import { CategoryModel } from '../../Model/models/category'
>>>>>>> dd4b342feb6bb4b42b6b2d8795e015e4700f6e49
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

<<<<<<< HEAD
  ngOnInit() {
    this.getListCategories();
  }

=======
>>>>>>> dd4b342feb6bb4b42b6b2d8795e015e4700f6e49
  getListCategories() {
    this.categoryService.get().subscribe(data => {
      this.listCategories = data;
    })
  }

<<<<<<< HEAD
=======
  ngOnInit() {
    this.getListCategories();
  }

>>>>>>> dd4b342feb6bb4b42b6b2d8795e015e4700f6e49
  delete(category: CategoryModel) {
    this.categoryService.delete(category).subscribe(data => {
      this.getListCategories();
    });
  }


}
