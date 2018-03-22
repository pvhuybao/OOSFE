import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartModel } from '../models/cart';
import { ProductModel } from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: any[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.get();
  }
  get() {
    this.cart = this.cartService.get();
    if (this.cart)
      this.updateTotal();
  }
  remove(item) {
    this.cartService.remove(item);
    this.get();
  }
  addCart(id) {
    var product = new ProductModel();
    product.id = id.value;
    product.idCategory = "5";
    product.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    product.name = id.value;
    product.price = 50000;
    product.description = id.value;
    this.cartService.set(product);
    this.get();
  }
  updateTotal() {
    var total = 0;
    this.cart.forEach(function (item) {
      total = total + item.product.price * item.quantity;
    })
    this.total = total;
  }
  updateQuantity(item, quantity) {
    this.cartService.updateQuantity(item, quantity.value);
    this.get();
  }
}
