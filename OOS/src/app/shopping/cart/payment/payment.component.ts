import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrdersModel } from '../../models/order';
import { OrderDetailModel } from '../../models/OrderDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { AddressModel } from '../../models/address';
import { CartService } from '../../services/cart.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { Observable } from 'rxjs/Observable';
declare var google: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  public order = new OrdersModel();
  @ViewChild('paypal') paypal;
  paymentMethod: number = 1;

  constructor(private orderService: OrderService,
    private router: Router, private cartService: CartService, private spinner: SpinnerService, private route: ActivatedRoute) {
  }
  get() {
    var total = 0;
    this.cartService.get().subscribe(x => {
      this.order.orderDetails = [];
      if (x) {
        x.forEach(value => {
          var detail = new OrderDetailModel;
          detail.idProduct = value.product.id;
          detail.nameProduct = value.product.name;
          detail.price = value.product.price;
          detail.quantity = value.quantity;
          total += detail.totalPrice = detail.price * detail.quantity;
          detail.color = value.product.color;
          detail.size = value.product.size;
          this.order.orderDetails.push(detail);
        })
      }
    });
    this.cartService.init()
    this.order.total = total;
  }

  ngOnInit() {
    this.spinner.startLoadingSpinner();
    this.order.orderDetails = [];
    this.get();
    if (this.order.orderDetails.length == 0)
      this.router.navigate(['/cart']);
    this.order.address = [];
    this.order.address.push(new AddressModel());
    this.order.address[0].type = 0;
    this.order.address.push(new AddressModel());
    this.order.address[1].type = 1;
    this.paypal.renderButton();
    this.spinner.turnOffSpinner();
  }

  Checkout() {
    this.order.status = 0;
    this.orderService.add(this.order).subscribe(() => {
      localStorage.removeItem("paymentMethod");
      localStorage.setItem("paymentMethod", this.paymentMethod.toString());
      this.router.navigate(['../thankyou'], { relativeTo: this.route });
      this.cartService.clear();
    });
  }

  useShippingAddress() {
    this.order.address[1] = this.order.address[0];
  }


  shippingFee: number = 0; 
  addDistance() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var onChangeHandler = function () {
      this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('reloadMap').addEventListener('click', onChangeHandler);

    this.calculateAndDisplayRoute(directionsService, directionsDisplay);       
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({     
      origin: '364 Cong Hoa',
      destination: 'quan ' + this.order.address[0].district,
      travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        //get direction info
        var htmlReturn = '';
        var route = response.routes[0];
        var money = 0.5 * route.legs[0].distance.value;
        this.shippingFee = money;
        htmlReturn += "Distance: <strong>" + route.legs[0].distance.text + "</strong>";
        htmlReturn += ", Tiền ship của bạn là: <strong>" + money + "</strong> VNĐ";
        document.getElementById('infoDirections').innerHTML = htmlReturn;

        var htmlReturn2 = '';
        htmlReturn2 = this.shippingFee;
        document.getElementById('shipfee').innerHTML = htmlReturn2;        
      } else {
        var htmlReturn = '';
        var route = response.routes[0];
        htmlReturn = "Dia chi nay khong ton tai";
        this.shippingFee = 0;
        document.getElementById('infoDirections').innerHTML = htmlReturn;

        var htmlReturn2 = '';
        htmlReturn2 = this.shippingFee;
        document.getElementById('shipfee').innerHTML = htmlReturn2;        
      }      
    });
  }

  onBlurMethod() {
    this.addDistance();    
  }
}
