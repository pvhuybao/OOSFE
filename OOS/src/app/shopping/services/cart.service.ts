import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart';
import { ProductModel } from '../models/product'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { UserCartService } from './user-cart.service';
import { UserCartModel } from '../models/UserCart';

@Injectable()
export class CartService {

  usercartmodel = new UserCartModel;
  isUserLoggedIn: boolean = false;
  countinit: number = 1;

  key = 'cart';
  private value = new Subject<CartModel[]>();
  constructor(private userCartService: UserCartService) {
  }

  get() {
    return this.value.asObservable();
  }

  init() {
    // If user is not logging in
    if(this.countinit == 1 ){
      if (this.isUserLoggedIn) {     // if user logged in
        console.log("User is logging");
        this.userCartService.getUserCartByEmail("abc@gmail.com").subscribe(x => {
          this.usercartmodel = x;
  
          console.log(this.usercartmodel.email);
          if (!this.usercartmodel.email) { // if no cartuser in db
          }
          else {    // if have usercart in db
            this.usercartmodel.cartDetails.forEach(element => {
              for(var i=1;i<=element.quantity;i++){
                this.set(element.product);
              }           
            });
          }
        });
        this.countinit++;
      }
    }

    this.value.next(JSON.parse(localStorage.getItem(this.key)));
  }

  set(product: ProductModel) {
    var data = JSON.parse(localStorage.getItem(this.key));
    if (!data) data = [];
    if (!data.find(x => x.product.id == product.id)) {
      var item = new CartModel();
      item.product = product;
      item.quantity = 1;
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

  updateQuantity(product: ProductModel, quantity: number) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data.filter(x => x.product.id == product.id)[0].quantity = quantity;
    localStorage.setItem(this.key, JSON.stringify(data));
    this.value.next(data);
  }

  count() {
    return JSON.parse(localStorage.getItem(this.key)).length();
  }

  clear(){
    localStorage.removeItem(this.key);
  }
}
