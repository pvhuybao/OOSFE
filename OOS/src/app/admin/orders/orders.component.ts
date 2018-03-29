import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { OrdersModel } from '../models/order';
import { SpinnerService } from '../../shared/services/spinner.service';
import { StatusOrder } from '../models/statusOrder';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: Array<Object>
  listStatus = new Array<StatusOrder>()
  orderToDelete: OrdersModel;

  email: string="";
  phone: string="";
  page: number=1;
  constructor(
    private ordersService: OrdersService, 
    private router: Router, 

    private spinnerService: SpinnerService) 
    { 
      this.listStatus.push(new StatusOrder(0,"Confirming"))
      this.listStatus.push(new StatusOrder(1,"Confirmed"))
      this.listStatus.push(new StatusOrder(2,"Shipping"))
      this.listStatus.push(new StatusOrder(3,"Shipped"))
      
    }

   

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() 
  {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.getList(this.email,this.phone,this.page).subscribe(data=>{
      this.spinnerService.turnOffSpinner();
      this.listOrders = data.items;
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

  updateStatus(order)
  {
    this.spinnerService.startLoadingSpinner()
    console.log("Overview Order status = ",order.id)
    this.ordersService.put(order.id,order).subscribe(data => {
      this.spinnerService.turnOffSpinner()


    })
  }
}
