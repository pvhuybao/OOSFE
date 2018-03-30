import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../../models/address';
import { OrdersModel } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart';
import { OrderDetailModel } from '../../models/OrderDetail';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  public order = new OrdersModel;
  public address = new AddressModel; // address shipping
  public address2 = new AddressModel; // address billing
  public email: string = "";
  public addressInput = new AddressModel;
  cart: CartModel[] = [];     
  listOrderDetails: OrderDetailModel[] = [];
  public i: number = 0;
  public detail: OrderDetailModel;
  public orderAddress: any;

  constructor(private orderService: OrderService, private router: Router,
              private cartService: CartService) 
              { }

  ngOnInit() {    
    this.get();
    
  }

  get() {    
    this.cartService.get().subscribe(x => { 
      this.cart = x;

      for(this.i = 0;this.i < x.length; this.i++)
      {
        this.detail = new OrderDetailModel;
        this.detail.idProduct = x[this.i].product.id;
        this.detail.nameProduct = x[this.i].product.name;
        //this.detail.price = x[this.i].product.price;
        this.detail.price = 3000;
        this.detail.quantity = x[this.i].quantity;
        this.detail.totalPrice = this.detail.price * this.detail.quantity;
        this.listOrderDetails.push(this.detail);
      }
    });
    this.cartService.init()
    
  }

  create() {
    this.address = this.addressInput;
    this.address.type = 0;

    this.address2 = this.address; 
    this.address2.type = 1   
        
    this.order.email = this.email;
    this.order.userId = null;
    this.order.address = [this.address,this.address2];
    this.order.orderDetails = this.listOrderDetails;
    this.order.total = 0;
    
    this.orderService.add(this.order).subscribe(() => {      
      this.orderService.setOrder(this.order);
      this.router.navigateByUrl("/cart/payment");
    });
  }

}
