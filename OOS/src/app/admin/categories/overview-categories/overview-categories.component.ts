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
  name:string;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {
    this.name = `Angular! v${VERSION.full}`
   }

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

  startLoadingSpinner(){
    this.spinnerService.startLoadingSpinner();
    this.spinnerService.turnOffSpinner();
  }

}
