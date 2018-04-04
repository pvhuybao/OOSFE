import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //for payment process bar
  listTitles: string[] = [
    "Cart", "Shipping Information", "Payment", "Thank You",
  ];

  active: string = "Cart";

  activeProcessNumber: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
