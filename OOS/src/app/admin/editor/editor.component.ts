import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../shared/services/spinner.service';
import { ConfigurationService } from '../services/configuration.service';
import { ConfigurationModel, Currency } from '../models/configuration';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
config = new ConfigurationModel(); 
page: string;
title: string;
content: string;
  constructor(private route: ActivatedRoute, private configService: ConfigurationService, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(d => {
        this.page = d['page'];
        this.configService.get().subscribe(data => {
          this.config = data;
          this.changeVariables();
        });
      });
  }

  changeVariables() {
    if(this.page == "return") {
      this.title = "SHIPPING & RETURN";
      this.content = this.config.shippingReturnHtml;
    }
    if(this.page == "guide") {
      this.title = "SHIPPING GUIDE";
      this.content = this.config.shippingGuideHtml;
    }
    if(this.page == "faq") {
      this.title = "FAQ";
      this.content = this.config.faqHtml;
    }
  }

  save() {
    this.spinnerService.startLoadingSpinner();
    if(this.page == "return") {
      this.config.shippingReturnHtml = this.content;
    }
    if(this.page == "guide") {
      this.config.shippingGuideHtml = this.content;
    }
    if(this.page == "faq") {
      this.config.faqHtml = this.content;
    }
    this.configService.edit(this.config).subscribe(r =>{
      this.spinnerService.turnOffSpinner();
    });
  }

}
