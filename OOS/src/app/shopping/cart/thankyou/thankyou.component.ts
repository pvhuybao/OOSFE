import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  Paypal: boolean = false;
  Bank: boolean = false;
  COD: boolean = false;
  methodPayment: number = 3;

  ngOnInit() {
    this.hide();
  }

  hide() {
    if(this.methodPayment == 1) {
      this.Paypal = true;
    }
    if(this.methodPayment == 2) {
      this.Bank = true;
    }
    if(this.methodPayment == 3) {
      this.COD = true;
    }
  }

}
