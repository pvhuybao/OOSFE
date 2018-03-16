import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import {Orders} from '../../shared/order-models/orders';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Orders[];
  constructor(private orderService:OrdersService) { }

  ngOnInit() {
    this.orderService.getOrder().subscribe(data => {this.orders = data});
  }

  delete(id)
  {
    this.orderService.deleteOrder(id).subscribe(data => {
      this.orderService.getOrder().subscribe(data => {this.orders = data});
    });
  }

}
