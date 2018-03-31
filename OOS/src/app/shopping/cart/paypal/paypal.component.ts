import { Component, AfterViewChecked, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { OrdersModel } from '../../models/order';

declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewChecked {
  @Input() order: OrdersModel;
  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) { }

  addScript: boolean = false;

  paypalConfig = {
    env: "sandbox",
    client: {
      sandbox: 'AS_F2isdOalHFYG4JN-jeCXgZoGEVBqWFbNIoHYe5ZTGlm7Y9NenKKuplRxt_nhQ0OahWby92FlJYCjh',
      production: 'AXh5J33BEHGN1r78tGpnrpWzo00J4zMBGQEYWyThRNu4ZOYhbBURFfNqAb5jDXNKQ0A8xhjD2mWFnFlU'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: 10, currency: 'USD',
              },
              description: "Orient Online Shop Payment Description",
            },
          ]
        },
        experience: {
          input_fields: {
            no_shipping: 1
          }
        },
      });
    },

    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log("Authorized)");
        //this.order.status
        //this.orderService.setOrder
        //Do something when payment is successful.
        this.router.navigate(['../thankyou'], { relativeTo: this.route });
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
}
