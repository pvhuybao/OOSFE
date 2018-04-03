import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-progress-bar',
  templateUrl: './payment-progress-bar.component.html',
  styleUrls: ['./payment-progress-bar.component.css']
})
export class PaymentProgressBarComponent implements OnInit {

  @Input() listTitles: string[];

  @Input() active: string;

  @Input() activeProcessNumber: number;

  constructor() { }

  ngOnInit() {
    this.getActiveProcessNumber(this.listTitles);
  }

  getActiveProcessNumber(listTitles: string[]) {

    for (var i = 0; i < listTitles.length; i++) {
      if (listTitles[i] === this.active) {
        this.activeProcessNumber = i;
        break;
      }
    }

  }
}
