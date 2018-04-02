import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {


  @Output() page = new EventEmitter<number>();
  @Output() pageSize = new EventEmitter<number>();

  @Input() nextPage: boolean;
  @Input() PrevPage: boolean;
  @Input() totalPage: number;

  pSize: number;

  options = [
    {name: "10", value: 10},
    {name: "20", value: 20},
    {name: "30", value: 30}
  ]

  constructor() {
   }

  ngOnInit() {
    if(this.pSize==null)
    {
      this.pSize = this.options[0].value;
      this.pageSize.emit(this.pSize);
    }
  }

  getPage(page: number){
    this.page.emit(page);
    // console.log(this.page);
  }

  changePageSize()
  {
    this.pageSize.emit(this.pSize);
  }

}
