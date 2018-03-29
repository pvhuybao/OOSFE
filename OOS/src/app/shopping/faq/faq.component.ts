import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
htmlString="<p><strong>AAA</strong></p><p><strong><em>aaa</em></strong></p><p>aaa</p>";
  constructor() { }

  ngOnInit() {
  }

}
