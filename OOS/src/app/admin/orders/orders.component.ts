import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { OrdersModel } from '../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: Array<OrdersModel>;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

}
