import { Component, OnInit, VERSION } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { CategoryModel } from '../../models/category'
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';


@Component({
  selector: 'app-overview-categories',
  templateUrl: './overview-categories.component.html',
  styleUrls: ['./overview-categories.component.css']
})
export class OverviewCategoriesComponent implements OnInit {

  listCategories: CategoryModel[];

  cateDel = new CategoryModel;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {
   }

  ngOnInit() {
    this.getListCategories();
  }
  getListCategories() {
    this.categoryService.get().subscribe(data => {
      this.listCategories = data;
    })
  }

  get(id) {
    this.categoryService.getById(id).subscribe(data => {
      this.cateDel = data;
    })
  }

  delete() {  
    this.spinnerService.startLoadingSpinner();
    this.categoryService.delete(this.cateDel).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.getListCategories();
    });
  }
}
