import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any;
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
