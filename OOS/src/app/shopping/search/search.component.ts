import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import 'rxjs/add/operator/filter';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
idCategory: string;
keyword: string;
products: any[]=[];
check: boolean;
  constructor(private router: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.router.queryParams
      .filter(params => params.cat)
      .filter(params => params.op)
      .subscribe(params => {
        this.idCategory = params.cat;
        this.keyword = params.op;
        this.productService.searchProductByIdCategory(this.idCategory, this.keyword).subscribe(data => {
          this.products = data;
          if(this.products.length == 0) this.check = true;
          else this.check = false;
        });
        
      });
  }
}
