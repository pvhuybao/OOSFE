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

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  getListNewestProduct(){
    this.productService.getProductsByParameter().subscribe(newestProduct => { this.newestProduct=newestProduct });
  }
}
