import { Injectable } from '@angular/core';
import { CartsModel, CartItemModel } from '../models/cart';

@Injectable()
export class CartService {
  key = 'cart';
  value: any[];
  constructor() {
  }
  get() {
    localStorage.getItem(this.key);
  }
  set(item) {
    var data = JSON.parse(localStorage.getItem(this.key));
    if (!data) data = new CartsModel;
    if (!data.items) data.items = [];
    data.total+=item.amount;
    data.items.push(item);
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  remove(product) {
  }
  clear() {
    localStorage.clear();
  }
  quantityUpdate(item, quantity) {
    var data = JSON.parse(localStorage.getItem('cart'));
    data.items[item].quantity=quantity;
    data.items[item].amount=item*quantity;
    localStorage.setItem('cart', JSON.stringify(data));
  }
}
