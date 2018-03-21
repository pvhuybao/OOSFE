import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryModel, CategoryStatus } from '../../models/category';
import { StringDecoder } from 'string_decoder';
import { SpinnerService } from '../../../shared/services/spinner.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router, 
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {
    }


  public cate = new CategoryModel;
  public status = CategoryStatus;
  public keys: Array<string>;  
  public item: number;

  public id: string;  

  ngOnInit() {
    
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;    
    this.getById(this.id);    

    this.getStatus();    
  }

  getStatus() {
    this.keys = Object.keys(this.status).filter(Number);
    //this.item = CategoryStatus.Unpublish;
  }

  getById(id) {
    this.categoryService.getById(id).subscribe(category => this.cate = category);
  }

  editCategory() {
    this.spinnerService.startLoadingSpinner();
    this.cate.name = this.cate.name;
    this.cate.description = this.cate.description;
    this.cate.status = this.cate.status;

    this.categoryService.put(this.cate.id,this.cate).subscribe(data => {

      this.spinnerService.turnOffSpinner();
      //this.router.navigate(['/admin/categories']);
      this.router.navigate(['/admin/manager/categories']);
    });
  }

  
}
