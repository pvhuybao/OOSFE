import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewChecked {

  constructor(private router: Router) { }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 10;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'Ab_kqVcRvhdOBaCbw7l9PMb_QV77A7dlLRn-XrJgtGgf3tb9F75Q9Lq4xuRbJ892oizds7EkiueVUX6R',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { 
              amount: {
                total: this.finalAmount, currency: 'USD',
                details: {
                  subtotal: "5",
                  tax: "0",
                  shipping: "5",
                }
              },
              description: "Orient Online Shop Payment Description",
              item_list: {
                items: [
                  {
                    name: "hat",
                    description: "Brown hat.",
                    quantity: "1",
                    price: "2",
                    currency: "USD"
                  },
                  {
                    name: "handbag",
                    description: "Black handbag.",
                    quantity: "1",
                    price: "3",
                    currency: "USD"
                  }
                ],
                shipping_address: {
                  recipient_name: "Barr454545ack Obama",
                  line1: "4th45454 Floor",
                  line2: "Uni4545t #34",
                  city: "San Jose",
                  country_code: "US",
                  postal_code: "95131",
                  phone: "01186224545412345678",
                  state: "CA"
                }
              }

            },
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        this.router.navigate(['/']);
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
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
