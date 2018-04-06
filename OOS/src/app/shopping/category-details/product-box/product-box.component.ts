import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ToasterService } from 'angular2-toaster';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { normalizeSync } from 'normalize-diacritics';
import { Router } from '@angular/router';
import { ProductCartModel } from '../../models/productCart';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css',
    '../../../../../node_modules/angular2-toaster/toaster.css',
    '../../../../../node_modules/angular2-toaster/toaster.min.css']
})
export class ProductBoxComponent implements OnInit {

  private toasterService: ToasterService;

  id: string = '';
  @Input() productDetail: ProductModel;

  constructor(
    toasterService: ToasterService,
    private cartService: CartService,
    private router: Router,
    private spinnerService: SpinnerService) {
    this.toasterService = toasterService;
  }

  ngOnInit() {

  }
  transform(value: string) {
    let newvalue = value
      .replace(/Đ/g, 'D')
      .replace(/đ/g, 'd')
      .replace(/&/g, '')
      .replace(/\s/g, '_');
    return newvalue;
  }
  routeProduct() {
    var nameProduct = normalizeSync(this.productDetail.name);
    var path = "/product/" + this.productDetail.id + "_" + this.transform(nameProduct);
    this.router.navigateByUrl(path);
  }

  addProductCart(product) {
    this.spinnerService.startLoadingSpinner();
    var productCart = {
      name: this.productDetail.name,
      id: this.productDetail.id,
      price: this.productDetail.productTails[0].price,
      description: this.productDetail.description,
      image: this.productDetail.productTails[0].image,
      color: this.productDetail.productTails[0].color,
      size: this.productDetail.productTails[0].size,
      quantity: this.productDetail.productTails[0].quantity,
    }
    this.cartService.set(productCart, 1);
    this.spinnerService.turnOffSpinner();
    //pop up toaster
    this.toasterService.pop('success', product.name, 'Added to cart success!');
  }
}
