import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart';

@Injectable()
export class CartService {
  key = 'cart';
  constructor() {
  }
  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }
  set(item) {
    var data = JSON.parse(localStorage.getItem(this.key));
    if (!data) data = [];
    if (!data.find(x => x.product.id == item.product.id)) {
      data.splice(0, 0, item);
      localStorage.setItem(this.key, JSON.stringify(data));
    }
    else{
      this.updateQuantity(item,data.find(x => x.product.id == item.product.id).quantity+1);
    }
  }
  remove(item) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data = data.filter(x => x.product.id != item.product.id);
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  clear() {
    localStorage.clear();
  }
  updateQuantity(item, quantity) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data.filter(x => x.product.id == item.product.id)[0].quantity = quantity;
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  count(){
    return JSON.parse(localStorage.getItem(this.key)).length();
  }
}
