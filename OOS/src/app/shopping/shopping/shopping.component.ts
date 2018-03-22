import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { ProductModel } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  categories: any;
  //Search product for order details
  private searchTerms = new Subject<string>();
  listProduct: Observable<ProductModel[]>;
  searchResult: string = '';
  choosedProduct: ProductModel;
  hidden : boolean = false;
  block : string;
  idCategory: string = "all";
  keyword: string;
    constructor(private categoryService: CategoryService, private productService: ProductService, private searchService: SearchService,
      private router: Router) { }
  
    ngOnInit() {
      this.categoryService.get().subscribe(
        data =>{
          this.categories = data;}
      );
  
      this.listProduct = this.searchTerms.pipe(
        
        // wait 300ms after each keystroke before considering the term
        debounceTime(50),
  
        // ignore new term if same as previous term
        distinctUntilChanged(),
  
        // switch to new search observable each time the term changes
        switchMap((term: string) => this.productService.searchProduct(term)),
      );
    }

    

    search(term: string): void {
      if(term === "") this.hidden = true;
      else this.hidden = false;
      this.searchTerms.next(term);
    }
  
    hide() {
      this.hidden = true;
    }

    searchProduct(idCategory: string, keyword: string) {
      if (keyword === undefined || keyword === "") {}
      else {
        this.searchService.setSearchIdCategory(idCategory);
        this.searchService.setSearchKeyword(keyword);
        var path = "";
        this.router.navigateByUrl(path);
      }
    }
}
