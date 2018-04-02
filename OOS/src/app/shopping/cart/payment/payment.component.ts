import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrdersModel } from '../../models/order';
import { OrderDetailModel } from '../../models/OrderDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { AddressModel } from '../../models/address';
import { CartService } from '../../services/cart.service';
import { SpinnerService } from '../../../shared/services/spinner.service';

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
    this.order = this.orderService.getOrder();
    if (!this.order) {
      this.router.navigate(['./cart/shipping-info']);
    }
  }
  get() {
    var total = 0;
    this.cartService.get().subscribe(x => {
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
    });
    this.cartService.init()
    this.order.total = total;
  }

  ngOnInit() {
    this.spinner.startLoadingSpinner();
    this.order.address = [];
    this.order.address.push(new AddressModel());
    this.order.address[0].type = 0;
    this.order.address.push(new AddressModel());
    this.order.address[1].type = 1;
    this.order.orderDetails = [];
    this.get();
    this.paypal.renderButton();
    this.spinner.turnOffSpinner();
  }
  ngAfterViewChecked(): void {
  }

  Checkout() {
    // this.orderService.add(this.order).subscribe(data =>
    //   );
    
    localStorage.removeItem("paymentMethod");
    localStorage.setItem("paymentMethod",this.paymentMethod.toString());
    this.router.navigate(['../thankyou'], { relativeTo: this.route });
  }
  useShippingAddress() {
    this.order.address[1] = this.order.address[0];
  }
}
