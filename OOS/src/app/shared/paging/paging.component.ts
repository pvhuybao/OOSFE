import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {


  options = [
    { name: "10", value: 10 },
    { name: "20", value: 20 },
    { name: "30", value: 30 }
  ]

  @Input() itemCount:number;

  @Output() page = new EventEmitter<number>();
  @Output() pageSize = new EventEmitter<number>();

  pNow: number;
  pSize: number;

  constructor() {

  }

  ngOnInit() {
    if(this.pNow == null || this.pSize==null)
    {
      this.pNow = 1;
      this.pSize = this.options[0].value;
      this.page.emit(this.pNow);
      this.pageSize.emit(this.pSize);
    }
  }

  getPage(page: number)
  {
    this.pNow = page;
    this.page.emit(this.pNow);
  }

  getPageSize(pageSize: number)
  {
    this.pSize = pageSize;
    this.pageSize.emit(this.pSize);
  }

  changePage()
  {
    this.page.emit(this.pNow);
  }
}
