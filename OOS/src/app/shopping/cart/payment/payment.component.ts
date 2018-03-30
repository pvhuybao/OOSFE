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

  constructor(private orderService: OrderService, private router: Router) { }

  public order: OrdersModel;
  public listDetails: OrderDetailModel[];
  public address: AddressModel;

  ngOnInit() {
    this.order = this.orderService.getOrder();
    this.listDetails = this.order.orderDetails;
    this.address = this.order.address[0];
  }

  Checkout() {
    this.order.address.push(this.address);
    this.router.navigateByUrl("cart/thankyou");
  }

}
