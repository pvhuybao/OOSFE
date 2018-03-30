import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product';
import { CartService } from '../services/cart.service';
import { ToasterService } from 'angular2-toaster';
import { SpinnerService } from '../../shared/services/spinner.service';
import { normalizeSync } from 'normalize-diacritics';
import { Router } from '@angular/router';

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
    private cartService: CartService,
    private router: Router, 
    private spinnerService: SpinnerService) {
    this.toasterService = toasterService;
   }

  ngOnInit() {
    
  }
  transform(value: string) {
    let newvalue = value.replace(' ', '_');
    return newvalue;
  }
  routeProduct() {
    var nameProduct = normalizeSync(this.productDetail.name);
    var path = "/product/" + this.productDetail.id + "_" + this.transform(nameProduct);
    this.router.navigateByUrl(path);
  }
  
  addProductCart(product){
    this.spinnerService.startLoadingSpinner();
    this.cartService.set(product,1);
    this.spinnerService.turnOffSpinner();
    //pop up toaster
    this.toasterService.pop('success', product.name, 'Added to cart');
  }
}
