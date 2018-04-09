import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import 'rxjs/add/operator/filter';
import { delay } from 'rxjs/operators';
import { SpinnerService } from '../../shared/services/spinner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  idCategory: string;
  keyword: string;
  products: any[] = [];
  check: boolean;
  sort : string = "name";
  name: string ="";

  pageSize: number;
  page: number;
  itemCount: number;
  pNow: number = 1;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private spinner: SpinnerService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.activatedRoute.queryParams
      .filter(params => params.cat)
      .filter(params => params.op)
      .subscribe(params => {
        this.spinner.startLoadingSpinner();
        this.idCategory = params.cat;
        this.keyword = params.op;
        this.productService.searchProductByIdCategory( this.idCategory, this.keyword, this.sort, this.name, this.pageSize, this.page).subscribe(data => {
          this.spinner.turnOffSpinner();
          this.products = data.items;
          this.itemCount = data.totalItemCount;
          if (this.products.length == 0) this.check = true;
          else this.check = false;
        });
      });
  }

  getPage(page: number)
  {
    if(this.page!= page)
    {
      this.page = page;
      this.loadProducts();
    }
  }

  getPageSize(pageSize: number)
  {
    if(this.pageSize!= pageSize)
    {
      this.pageSize = pageSize;
      this.loadProducts();
    }
  }

  changeSort() {
    console.log(this.sort);
    this.page = 1;
    this.loadProducts();
  }
}
