import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { SpinnerService } from '../../shared/services/spinner.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
page: string;
title: string;
content: string = "<p><strong>AAA</strong></p><p><strong><em>aaa</em></strong></p><p>aaa</p>";
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(d => {
        this.page = d['page'];
        this.changeVariables();
      });
  }

  changeVariables() {
    if(this.page == "return") this.title = "SHIPPING & RETURN";
    if(this.page == "guide") this.title = "SHIPPING GUIDE";
    if(this.page == "faq") this.title = "FAQ";
  }

}
