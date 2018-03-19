import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../../../shopping/order/order.component';
import { OrdersService } from '../../services/orders.service';
import { AddressModel } from '../../models/Address';
import { OrderDetailModel } from '../../models/OrderDetail';
import { OrdersModel } from '../../models/order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  order : OrdersModel

  constructor(private ss: OrdersService) { }

  ngOnInit() {
    this.order = this.ss.getData()
    console.log("EditOrder order =",this.order)
  }
  
  edit(){
    /*
    let address : AddressModel = {
      name : "lon",
      phone : "113",
      street : "Lac Long Quan",
      province : "TP HCM",
      district : "Tan Binh",
      type :0
    }

    let detail : OrderDetailModel = {
      idProduct : "HH001",
      nameProduct : 'Xe Dream',
      quantity : 2,
      price : 1500,
      totalPrice : 3000
    }

    let order : OrdersModel = {
      email : "da@gmail.com",
      userId : null,
      orderDetails : [detail],
      address : [address],
      total : 0
    }
    */
      this.ss.put(this.order).subscribe (data => console.log(data));
      
    

  }

}
