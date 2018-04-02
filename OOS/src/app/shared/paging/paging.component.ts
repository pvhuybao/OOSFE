import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {


  @Output() page = new EventEmitter<number>();
  @Output() pageSize = new EventEmitter<number>();

  @Input() nextPage: boolean;
  @Input() prevPage: boolean;
  @Input() totalPage: number;
  @Input() pages: number[];

  pSize: number;
  pNow: number;

  options = [
    { name: "10", value: 10 },
    { name: "20", value: 20 },
    { name: "30", value: 30 }
  ]

  fPage: number;
  mPage: number;
  lPage: number;
  pDisplay = new Array<number>();

  constructor() {
  }

  ngOnInit() {
    if (this.pSize == null && this.pNow == null) {
      this.pSize = this.options[0].value;
      this.pNow = 1;
      this.pageSize.emit(this.pSize);
      this.page.emit(this.pNow);
    }
    // this.changePageNow();
  }

  changePageNow() {
    if (this.totalPage > 3) {
      this.pDisplay = new Array<number>();
      for (let i = 0; i < 3; i++) {
        this.pDisplay[i] = i + 1;
      }
    }
    if (this.totalPage <= 3) {
      this.pDisplay = new Array<number>();
      for (let i = 0; i < this.pages.length; i++) {
        this.pDisplay[i] = i + 1;
      }
    }

    if (this.pNow + 2 > this.pages.length) {
      this.pDisplay = new Array<number>();
      for (let i = this.pNow - 1; i <= this.pages.length; i++) {
        this.pDisplay[i] = i;
      }
    }
    if (this.pNow + 2 == this.pages.length && this.pNow != this.pDisplay[1]) {
      this.pDisplay = new Array<number>();
      for (let i = this.pNow; i <= this.pages.length; i++) {
        this.pDisplay[i] = i;
      }
    }

    if (this.pNow + 2 == this.pages.length && this.pNow == this.pDisplay[1]) {
      this.pDisplay = new Array<number>();
      for (let i = this.pNow - 1; i <= this.pages.length; i++) {
        this.pDisplay[i] = i;
      }
    }
  }

  getPage(page: number) {
    this.pNow = page;
    this.page.emit(this.pNow);
    // this.changePageNow();
  }

  changePageSize() {
    this.pageSize.emit(this.pSize);
    this.pNow = 1;
    this.page.emit(this.pNow);
    // this.changePageNow();
  }

  goPrev() {
    if (this.prevPage == true) {
      this.pNow = this.pNow - 1;
      this.page.emit(this.pNow);
      // this.changePageNow();
    }
  }

  goNext() {
    if (this.nextPage == true) {
      this.pNow = this.pNow + 1;
      this.page.emit(this.pNow);
      // this.changePageNow();
    }
  }
}
