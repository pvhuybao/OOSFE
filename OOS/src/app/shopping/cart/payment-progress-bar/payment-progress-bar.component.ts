import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-payment-progress-bar',
  templateUrl: './payment-progress-bar.component.html',
  styleUrls: ['./payment-progress-bar.component.css']
})
export class PaymentProgressBarComponent implements OnInit {

  @Input() listTitles: string[];

  @Input() active: string;

  @Input() activeProcessNumber: number;

  constructor(private router: Router, private route: ActivatedRoute) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        route.firstChild.data.subscribe(d => {
          this.activeProcessNumber = d['activeProcessNumber'];
          this.active = d['active'];
        })
      }
    })
  }

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
