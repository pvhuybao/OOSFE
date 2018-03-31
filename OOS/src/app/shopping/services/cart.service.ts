import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart';
import { ProductModel } from '../models/product'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { ProductCartModel } from '../models/productCart';

@Injectable()
export class CartService {
  key = 'cart';
  private value = new Subject<CartModel[]>();
  constructor() {
  }

  get() {
    return this.value.asObservable();
  }
  init() {
    this.value.next(JSON.parse(localStorage.getItem(this.key)));
  }

  set(product: ProductCartModel, quantity: number) {
    var data = JSON.parse(localStorage.getItem(this.key));
    if (!data) data = [];
    if (!data.find(x => x.product.id == product.id && x.product.color == product.color && x.product.size == product.size)) {
      var item = new CartModel();
      item.product = product;
      item.quantity = quantity;
      data.splice(0, 0, item);
      localStorage.setItem(this.key, JSON.stringify(data));
      this.value.next(data);
    }
    else {
      this.updateQuantity(product, data.find(x => x.product.id == product.id).quantity + 1);
    }
  }

  remove(product: ProductModel) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data = data.filter(x => x.product.id != product.id);
    localStorage.setItem(this.key, JSON.stringify(data));
    this.value.next(data);
  }

  updateQuantity(product: ProductCartModel, quantity: number) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data.filter(x => x.product.id == product.id)[0].quantity = quantity;
    localStorage.setItem(this.key, JSON.stringify(data));
    this.value.next(data);
  }

  count() {
    return JSON.parse(localStorage.getItem(this.key)).length();
  }
}
