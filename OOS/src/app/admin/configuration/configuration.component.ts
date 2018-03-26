import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';
import { ConfigurationModel, Currency } from '../models/configuration';
import { SpinnerService } from '../../shared/services/spinner.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  configuration = new ConfigurationModel();
  Currency = Currency;
  currency: string[];

  constructor(private configService: ConfigurationService, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.get();
    this.currency = Object.keys(Currency).filter(Number);
  }

  get() {
    this.configService.get().subscribe(data => this.configuration = data);
  }

  delete(i) {
    this.configuration.carousel.splice(i, 1);
  }

  add() {
    if (this.configuration.carousel[this.configuration.carousel.length - 1] !== "")
      this.configuration.carousel.push("");
  }

  save() {
    this.spinnerService.startLoadingSpinner();
    this.configService.edit(this.configuration).subscribe(res => {
      this.spinnerService.turnOffSpinner();
    });
  }
}
