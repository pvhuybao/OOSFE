import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrdersModel } from '../../models/order';
import { OrderDetailModel } from '../../models/OrderDetail';
import { Router } from '@angular/router';
import { AddressModel } from '../../models/address';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public order: OrdersModel;

  constructor(private orderService: OrderService,
              private router: Router) { 

                this.order = this.orderService.getOrder();
                if(!this.order) {
                  this.router.navigate(['./cart/shipping-info']);
                }

              }
  
  public listDetails: OrderDetailModel[];
  public address: AddressModel;

  ngOnInit() {    
    this.listDetails = this.order.orderDetails;
  }

  Checkout() {        
    this.orderService.put(this.order.id,this.order).subscribe(data =>
      this.router.navigate(['./cart/thankyou']));    
  }

}
