import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
//import { Orders } from '../Models/orders';

import { OrdersModel } from '../models/order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: Array<OrdersModel>;

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList()
  {
    this.ordersService.getList().subscribe(data => {this.listOrders = data});
  }

  delete(orderId)
  {
    this.ordersService.delete(orderId).subscribe(()=> {this.getOrderList();});
  }

  edit (order)
  {
    this.ordersService.sendData(order);
    this.router.navigateByUrl("/admin/orders/edit");

  }

}
