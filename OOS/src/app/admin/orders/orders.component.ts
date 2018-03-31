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

  email: string = "";
  phone: string = "";
  page: number = 1;
  pageSize: number = 10;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;

  pFirst: number;
  pCenter: number;
  pLast: number;
  active = "active";

  constructor(
    private ordersService: OrdersService,
    private router: Router,

    private spinnerService: SpinnerService) {
    this.listStatus.push(new StatusOrder(0, "Confirming"))
    this.listStatus.push(new StatusOrder(1, "Confirmed"))
    this.listStatus.push(new StatusOrder(2, "Shipping"))
    this.listStatus.push(new StatusOrder(3, "Shipped"))

  }



  ngOnInit() {
    this.getOrderList();
  }
  
  getOrderList() {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.getList(this.email, this.phone, this.pageSize, this.page).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.listOrders = data.items;
      this.pageCount = data.pageCount;
      console.log(data);
    });
  }

  choosePage(page: string) {

    // for (let i = 1; i <= page.totalPages; i++) {
    //   if (i === first || i === last || activePage === i
    //     || last < 5
    //     || activePage - 1 === i || (activePage < 3 && i < 4)
    //     || activePage + 1 === i || (activePage > last - 2 && i > last - 3)
    //   ) {
    //     pageNumbers = [...pageNumbers, i];
    //   }
    // }
    // if(page!=="next" && page!=="Previous")
    // {
    //     this.page = parseInt(page);
    //     console.log(this.page);
    // }
  }

  get(orderId) {
    this.ordersService.getById(orderId).subscribe(data => { this.orderToDelete = data });
  }

  delete() {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.delete(this.orderToDelete.id).subscribe(() => {
      this.spinnerService.turnOffSpinner();
      this.getOrderList();
      console.log(this.orderToDelete.id);
    });
  }

  edit(order) {
    this.ordersService.sendData(order);
    this.router.navigateByUrl("/admin/manager/orders/edit/" + order.id);

  }

  updateStatus(order: OrdersModel) {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.getById(order.id).subscribe(ord => {
      ord.status = order.status;
      this.ordersService.put(ord.id, ord).subscribe(data => {
        this.spinnerService.turnOffSpinner();
        console.log(order.status);
      });
    });

  }
}
