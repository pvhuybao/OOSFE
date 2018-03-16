import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../Models/orders';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Orders[];
  
  constructor(private orderService:OrdersService) { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList()
  {
    this.orderService.getOrder().subscribe(data => {this.orders = data});
  }

  delete(orderId)
  {
    this.orderService.deleteOrder(orderId).subscribe(()=> {this.getOrderList();});
  }

}
