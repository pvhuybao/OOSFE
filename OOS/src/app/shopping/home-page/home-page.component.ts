import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductService } from '../services/product.service';
import { BannerModel } from '../models/banner';
import { ConfigurationService } from '../../admin/services/configuration.service';
import { AccountService } from '../services/account.service';


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
  idUser: string

  constructor(
    private productService: ProductService,
    private configurationService: ConfigurationService,
    private accountService: AccountService
  ) {

  }


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
    this.accountService.getUserSession().subscribe(data => {
      if (data != null) {
        this.idUser = data.id
      }
      else {
        this.idUser = null
      }
      this.getListNewestProduct();
      this.getListTopDiscountProduct();
      this.getListTopSalesProduct();
    })
    this.getCarouselBanners();
  }

  checkWishList(list: ProductModel[]) {
    list.forEach(product => {
      this.accountService.checkWishProduct(this.idUser, product.id).subscribe(data => {
        if (data.isWishProduct)
          product.isLove = true
      })
    })
  }

  getListNewestProduct() {
    this.productService.getProductsByParameter("newestProduct").subscribe(newestProduct => {
      if (this.idUser != null)
        this.checkWishList(newestProduct)
      this.newestProduct = newestProduct;
    });
  }

  getListTopSalesProduct() {
    this.productService.getProductsByParameter("topSales").subscribe(topSales => {
      if (this.idUser != null)
        this.checkWishList(topSales)
      this.topSales = topSales;
    });
  }

  getListTopDiscountProduct() {
    this.productService.getProductsByParameter("topDiscount").subscribe(topDiscount => {
      if (this.idUser != null)
        this.checkWishList(topDiscount)
      this.topDiscount = topDiscount;
    });
  }

  getCarouselBanners() {
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
