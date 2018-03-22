import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/Product.service'
import { CategoryService } from '../services/category.service';
import { SpinnerService } from '../../shared/services/spinner.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;
  id: string;
  productId : string;
  constructor(private productService : ProductService, private categoryService : CategoryService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.productService.gets().subscribe(data =>{
      this.products = data;
    });
  }
  setId(id){
    this.productService.setId(id);
  }
  setIdModal(id){
    this.productId = id; 
  }
  deleteProduct(){
    this.spinnerService.startLoadingSpinner();
    this.productService.delete(this.productId).subscribe(data => {
      this.productService.gets().subscribe(data=>{
        this.spinnerService.turnOffSpinner();
        this.products = data
      });
    });
  }
  }
