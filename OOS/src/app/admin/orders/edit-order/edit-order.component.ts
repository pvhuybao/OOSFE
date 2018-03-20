import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../../../shopping/order/order.component';
import { OrdersService } from '../../services/orders.service';
import { AddressModel } from '../../models/Address';
import { OrderDetailModel } from '../../models/OrderDetail';
import { OrdersModel } from '../../models/order';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  order: OrdersModel
  id: string
  constructor(private ss: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.order = this.ss.getData()
    let params: any = this.activatedRoute.snapshot.params;
    console.log("EditOrder params =", params)
    this.id = params.id
    this.ss.getById(this.id).subscribe(data => {
      console.log("EditOrder data =", data);
      this.order = data

      console.log("EditOrder order =", this.order);
    })
  }

  edit() {
    this.ss.put(this.id, this.order).subscribe(data => console.log("EditOrder edit data =" + data))
  }

  updateTotal(orderDetail: OrderDetailModel) {
    console.log("Edit updateTotal")
    orderDetail.totalPrice = orderDetail.price * orderDetail.quantity
    this.calculateTotalOrder()


  }

  delete(orderDetail: OrderDetailModel) {
    var index = this.order.orderDetails.indexOf(orderDetail, 0);
    if (index > -1) {
      this.order.orderDetails.splice(index, 1);
    }
    this.calculateTotalOrder()
  }

  calculateTotalOrder () 
  {
    let total = 0
    for (let d of this.order.orderDetails) {
      total += d.totalPrice
    }
    this.order.total = total

  }

}
