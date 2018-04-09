import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/Product.service'
import { CategoryService } from '../services/category.service';
import { ProductStatus } from '../models/product';
import { SpinnerService } from '../../shared/services/spinner.service';
import { PagingComponent } from '../../shared/paging/paging.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  statusDefine = ProductStatus;
  products : any;
  id: string;

  pageSize: number;
  page: number;

  itemCount: number;
  pNow: number = 1;
  constructor(private productService : ProductService, private categoryService : CategoryService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.loadProducts();

  }

  loadProducts(){
    this.spinnerService.startLoadingSpinner();
    this.productService.gets("", "", "", 0, 3000, this.pageSize, this.page).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.products = data.items;
      this.itemCount = data.totalItemCount;
      console.log(data);
    });
  }

  getPage(page: number)
  {
    if(this.page!= page)
    {
      this.page = page;
      this.loadProducts();
    }
  }

  getPageSize(pageSize: number)
  {
    if(this.pageSize!= pageSize)
    {
      this.pageSize = pageSize;
      this.loadProducts();
    }
  }

  setId(id){
    this.id = id; 
  }
  deleteProduct(){
    this.productService.delete(this.id).subscribe(data => {
      this.loadProducts();
    });
  }
  }
