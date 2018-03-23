import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../../models/address';
import { OrdersModel } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  public order = new OrdersModel;
  public address = new AddressModel;
  public address2 = new AddressModel;
  public email: string = "";
  public name: string = "";
  public phone: string = "";
  public province: string = "";
  public district: string = "";
  public street: string = "";


  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.address.name = this.name;
    this.address.phone = this.phone;
    this.address.province = this.province;
    this.address.district = this.district;    
    this.address.street = this.street;
    this.address.type = 0;

    this.address2 = this.address;

    this.order.email = this.email;
    this.order.userId = null;
    this.order.address = [this.address,this.address2];
    this.order.orderDetails = null;
    this.order.total = 0;   
    
    this.orderService.add(this.order).subscribe(() => {
      this.router.navigateByUrl("/cart/thankyou");
    });
  }

}
