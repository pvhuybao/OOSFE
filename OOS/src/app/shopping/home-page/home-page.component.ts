import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../admin/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  newestProduct: ProductModel[];

  ngOnInit() {
    this.newestProduct = [{
      id: "1", code: "", name: "product 1",
      price: 0, description: "", image: "", idCategory: ""
    },
    {
      id: "1", code: "", name: "product 2",
      price: 123, description: "", image: "", idCategory: ""
    },
    {
      id: "1", code: "", name: "product 3",
      price: 222, description: "", image: "", idCategory: ""
    },
    {
      id: "1", code: "", name: "product 4",
      price: 3344, description: "", image: "", idCategory: ""
    },]
  }

}
