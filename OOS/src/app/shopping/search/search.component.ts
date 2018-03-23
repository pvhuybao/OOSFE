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
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private spinner: SpinnerService) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .filter(params => params.cat)
      .filter(params => params.op)
      .subscribe(params => {
        this.spinner.startLoadingSpinner();
        this.idCategory = params.cat;
        this.keyword = params.op;
        this.productService.searchProductByIdCategory(this.idCategory, this.keyword).subscribe(data => {
          this.spinner.turnOffSpinner();
          this.products = data;
          if (this.products.length == 0) this.check = true;
          else this.check = false;
        });
      });
  }
}
