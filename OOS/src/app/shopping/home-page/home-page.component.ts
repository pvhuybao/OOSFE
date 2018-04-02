import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductService } from '../services/product.service';
import { BannerModel } from '../models/banner';
import { ConfigurationService } from '../../admin/services/configuration.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newestProduct: ProductModel[] = [];
  topSales: ProductModel[] = [];
  topDiscount: ProductModel[] = [];

  listBanners: BannerModel[] = [];

  constructor(
    private productService: ProductService,
    private configurationService: ConfigurationService
  ) { }


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

    this.getCarouselBanners();
  }

  getListNewestProduct() {
    this.productService.getProductsByParameter("newestProduct").subscribe(newestProduct => {
      this.newestProduct = newestProduct;
      console.log(newestProduct)
    });
  }

  getListTopSalesProduct() {
    this.productService.getProductsByParameter("topSales").subscribe(newestProduct => {
      this.newestProduct = newestProduct
    });
  }

  getListTopDiscountProduct() {
    this.productService.getProductsByParameter("topDiscount").subscribe(newestProduct => {
      this.newestProduct = newestProduct
    });
  }

  getCarouselBanners(){
    this.configurationService.get().subscribe(data => {
      data.carousel.forEach(item => {
        this.listBanners.push({
          image: item,
          title: "",
          content: ""
        } as BannerModel)
      })
    })
  }

}
