import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart';
import { ProductModel } from '../../models/product';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { normalizeSync } from 'normalize-diacritics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: CartModel[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private spinner: SpinnerService, private router: Router) {
  }

  ngOnInit() {
    this.get();
  }
  get() {
    this.cartService.get().subscribe(x => {
      this.cart = x;
    });
    this.cartService.init()
    if (this.cart)
      this.updateTotal();
  }
  remove(product) {
    this.cartService.remove(product);
    this.updateTotal();
  }
  updateTotal() {
    var total = 0;
    this.cart.forEach(function (item) {
      total = total + item.product.price * item.quantity;
    })
    this.total = total;
  }
  updateQuantity(product, quantity) {
    if (quantity < 1)
      quantity = 1;
    this.cartService.updateQuantity(product, quantity);
    this.updateTotal();
  }
  routeProduct(name, id) {
    var nameProduct = normalizeSync(name);
    var path = "/product/" + id + "_" + this.transform(nameProduct);
    this.router.navigateByUrl(path);
  }
  transform(value: string) {
    let newvalue = value.replace(' ', '_');
    return newvalue;
  }
}
