import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/Product.service'
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;
  id: string;
  productId : string;
  constructor(private productService : ProductService, private categoryService : CategoryService) { }

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
    this.productService.delete(this.productId).subscribe(data => {
      this.productService.gets().subscribe(data=>{
        this.products = data
      });
    });
  }
  }
