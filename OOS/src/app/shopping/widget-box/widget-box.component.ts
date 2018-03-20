import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product';

@Component({
  selector: 'app-widget-box',
  templateUrl: './widget-box.component.html',
  styleUrls: ['./widget-box.component.css']
})
export class WidgetBoxComponent implements OnInit {

  @Input() productDetail: ProductModel;
  constructor() { }

  ngOnInit() {
  }

}
