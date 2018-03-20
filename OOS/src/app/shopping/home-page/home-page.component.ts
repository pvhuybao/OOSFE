import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartModel } from '../models/cart';
import { ProductModel } from '../models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  abc:CartModel=new CartModel();
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.abc.product=new ProductModel();
    this.addCart();
    this.abc.id="abcb";
    this.abc.quantity=5;
    this.abc.total=this.abc.product.price*this.abc.quantity;
    this.cart.set(this.abc);
  }
  addCart(){
    this.abc.product.id="abc";
    this.abc.product.idCategory="5";
    this.abc.product.image="";
    this.abc.product.name="aaa";
    this.abc.product.price=50000;
    this.abc.product.description="aaaaaaaaaa";
  }

}
