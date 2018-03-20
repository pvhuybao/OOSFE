import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { OrdersModel } from '../models/order';
import { ModalService } from '../services/modal.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: Array<OrdersModel>;

  constructor(public dialog: MatDialog, private ordersService: OrdersService, private router: Router, private modal:ModalService) { }

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
    //this.ordersService.sendData(order);
    this.router.navigateByUrl("/admin/orders/edit/" + order.id);

  }

  openDialog(orderId){
    this.modal.openDialog(orderId);
    this.getOrderList();
  }
}
