import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartModel[] = [];
  total: number = 0;
  quantity:number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  get() {
    this.cartService.get().subscribe(x => { 
      this.cart = x; 
    });
    this.cartService.init()
    if (this.cart)
      this.updateTotal();
  }
  updateTotal() {
    var total = 0;
    this.cart.forEach(function (item) {
      total = total + item.product.price * item.quantity;
    })
    this.total = total;
  }

}
