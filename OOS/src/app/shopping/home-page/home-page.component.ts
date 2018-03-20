import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newestProduct : ProductModel[];
  topSales : ProductModel[];
  topDiscount : ProductModel[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  getListNewestProduct(){
    this.productService.getProductsByParameter("newestProduct").subscribe(newestProduct => { 
      this.newestProduct=newestProduct });
  }

  getListTopSalesProduct(){
    this.productService.getProductsByParameter("topSales").subscribe(newestProduct => { 
      this.newestProduct=newestProduct });
  }

  getListTopDiscountProduct(){
    this.productService.getProductsByParameter("topDiscount").subscribe(newestProduct => { 
      this.newestProduct=newestProduct });
  }
}
