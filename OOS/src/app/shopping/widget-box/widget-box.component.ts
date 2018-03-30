import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-widget-box',
  templateUrl: './widget-box.component.html',
  styleUrls: ['./widget-box.component.css']
})
export class WidgetBoxComponent implements OnInit {

  id:string='';
  @Input() productDetail: ProductModel;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addProductCart(product){
    this.cartService.set(product,1);
  }

}
