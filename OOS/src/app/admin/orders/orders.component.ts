import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { OrdersModel } from '../models/order';
import { SpinnerService } from '../../shared/services/spinner.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: Array<OrdersModel>;
  orderToDelete: any;
  constructor(
    private ordersService: OrdersService, 
    private router: Router, 
    private spinnerService: SpinnerService
    ) 
    { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() 
  {
    this.ordersService.getList().subscribe(data => {
      this.listOrders = data;
    });
  }

  get(orderId)
  {
    this.ordersService.getById(orderId).subscribe(data => {this.orderToDelete = data});
  }

  delete()
  {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.delete(this.orderToDelete.id).subscribe(()=> {
      this.spinnerService.turnOffSpinner();
      this.getOrderList();
      console.log(this.orderToDelete.id);
    });
  }

  edit (order)
  {
    this.ordersService.sendData(order);
    this.router.navigateByUrl("/admin/manager/orders/edit/" + order.id);

  }
}
