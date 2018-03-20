import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { OrdersModel } from '../../models/order';
import { AddressModel } from '../../models/Address';
import { OrderDetailModel } from '../../models/OrderDetail';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  message:string;
  order : OrdersModel;
  public Email:string ='';
  public NameBill:string ='';
  public PhoneBill:string ='';
  public ProvinceBill:string ='';
  public DistrictBill:string ='';
  public StreetBill:string ='';
  
  public Name:string ='';
  public Phone:string ='';
  public Province:string ='';
  public District:string ='';
  public Street:string ='';
  public IdProduct: string = '';
  public NameProduct: string='';
  public ImgProduct: string='http://moziru.com/images/grumpy-cat-clipart-nope-15.png';
  public Quantity:number = 1;
  public Price: number = 0;
  public TotalPrice:number = 0;

  public Total:number = 0;
  

  constructor(  private orderService : OrdersService) { }

  ngOnInit() {
  }

  create(){
    let addressBill = new AddressModel();
    addressBill.name = this.NameBill;
    addressBill.phone = this.PhoneBill;
    addressBill.province = this.ProvinceBill;
    addressBill.district = this.DistrictBill;
    addressBill.street = this.StreetBill;
    addressBill.type = 0;

    let address = new AddressModel();
    address.name = this.Name;
    address.phone = this.Phone;
    address.province = this.Province;
    address.district = this.District;
    address.street = this.Street;
    address.type = 1;
    
    let orderDetails = new OrderDetailModel();
    orderDetails.idProduct = null;
    orderDetails.price = this.Price;
    orderDetails.quantity = this.Quantity;
    orderDetails.totalPrice = this.TotalPrice;

    let newOrder = new OrdersModel();
    newOrder.email = this.Email;
    newOrder.userId = null;
    newOrder.address =[addressBill,address];
    newOrder.orderDetails = [orderDetails];
    newOrder.total = this.Total;

    this.orderService.add(newOrder).subscribe((data)=>{
      this.message = "success";
      console.log(data);
    });

  }

  removeAlert(){
    this.message = null;
  }
}
