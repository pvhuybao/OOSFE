import { Component, NgModule, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../../admin/services/configuration.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  /*options = [
    { name: "10", value: 10 },
    { name: "20", value: 20 },
    { name: "30", value: 30 }
  ]*/

  options: any[] = [];

  @Input() itemCount: number;


  @Output() page = new EventEmitter<number>();
  @Output() pageSize = new EventEmitter<number>();

  size: number[];
  pNow: number;
  pSize: number;

  constructor(private config: ConfigurationService) {

  }

  ngOnInit() {
    this.config.get().subscribe(data => {
      this.size = data.pageSize;
      this.size.forEach(el => {
        this.options.push({ name: el.toString(), value: el });
      });
      if (this.pNow == null || this.pSize == null) {
        this.pNow = 1;
        this.pSize = this.options[0].value;
        //this.pSize = this.options[0];
        this.page.emit(this.pNow);
        this.pageSize.emit(this.pSize);
      }
    });


  }

  getPage(page: number) {
    this.pNow = page;
    this.page.emit(this.pNow);
  }

  getPageSize(pageSize: number) {

    this.pSize = pageSize;
    this.pageSize.emit(this.pSize);
  }

  changePage() {
    this.page.emit(this.pNow);
  }
}

@NgModule({
  imports: [NgbPaginationModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [PagingComponent],
  declarations: [PagingComponent],
  bootstrap: [PagingComponent],
  providers: [ConfigurationService]
})
export class PagingModule { }
