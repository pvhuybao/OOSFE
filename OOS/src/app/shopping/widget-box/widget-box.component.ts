import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product';
import { CartService } from '../services/cart.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-widget-box',
  templateUrl: './widget-box.component.html',
  styleUrls: ['./widget-box.component.css',
  '../../../../node_modules/angular2-toaster/toaster.css',
  '../../../../node_modules/angular2-toaster/toaster.min.css'
]
})
export class WidgetBoxComponent implements OnInit {
  private toasterService: ToasterService;

  id:string='';
  @Input() productDetail: ProductModel;

  constructor(
    toasterService: ToasterService,
    private cartService: CartService
  ) {
    this.toasterService = toasterService;
   }

  ngOnInit() {
  }

  
  addProductCart(product){
    this.cartService.set(product);

    //pop up toaster
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }

}
