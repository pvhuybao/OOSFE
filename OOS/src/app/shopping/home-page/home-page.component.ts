import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductService } from '../services/product.service';
import { BannerModel } from '../models/banner';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newestProduct: ProductModel[] = [];
  topSales: ProductModel[] = [];
  topDiscount: ProductModel[] = [];

  listBanners: BannerModel[] = [
    {
      image: "/assets/img/banner01.jpg",
      title: "BAGS SALE",
      content: "Up to 50% Discount"
    },
    {
      image: "/assets/img/banner02.jpg",
      title: "BAGS SALE",
      content: "Up to 50% Discount"
    },
    {
      image: "/assets/img/banner03.jpg",
      title: "BAGS SALE",
      content: "Up to 50% Discount"
    }
  ];

  constructor(private productService: ProductService) { }


  ngOnInit() {
    // this.newestProduct = [{
    //   id: "1", code: "", name: "product 1",
    //   price: 0, description: "", image: "", idCategory: ""
    // },
    // {
    //   id: "1", code: "", name: "product 2",
    //   price: 123, description: "", image: "", idCategory: ""
    // },
    // {
    //   id: "1", code: "", name: "product 3",
    //   price: 222, description: "", image: "", idCategory: ""
    // },
    // {
    //   id: "1", code: "", name: "product 4",
    //   price: 3344, description: "", image: "", idCategory: ""
    // },]
    this.getListNewestProduct();
    this.getListTopDiscountProduct();
  }

  getListNewestProduct() {
    this.productService.getProductsByParameter("newestProduct").subscribe(newestProduct => {
      this.newestProduct = newestProduct;
      console.log(newestProduct)
    });
  }

  getListTopSalesProduct() {
    this.productService.getProductsByParameter("topSales").subscribe(topSales => {
      this.topSales = topSales;
    });
  }

  getListTopDiscountProduct() {
    this.productService.getProductsByParameter("topDiscount").subscribe(topDiscount => {
      this.topDiscount = topDiscount;
    });
  }

}
