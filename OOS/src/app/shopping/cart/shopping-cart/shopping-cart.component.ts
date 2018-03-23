import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart';
import { ProductModel } from '../../models/product';
import { SpinnerService } from '../../../shared/services/spinner.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: CartModel[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private spinner:SpinnerService) {
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
  // addCart(id) {
  //   var product = new ProductModel();
  //   product.id = id.value;
  //   product.idCategory = "5";
  //   product.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
  //   product.name = id.value;
  //   product.price = 50000;
  //   product.description = id.value;
  //   this.cartService.set(product);
  //   this.updateTotal();
  // }
  updateTotal() {
    var total = 0;
    this.cart.forEach(function (item) {
      total = total + item.product.price * item.quantity;
    })
    this.total = total;
  }
  updateQuantity(product, quantity) {
    this.cartService.updateQuantity(product, quantity.value);
    this.updateTotal();
  }
}
