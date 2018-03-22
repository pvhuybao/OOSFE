import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { ProductModel } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, delay } from 'rxjs/operators';
import { Router, NavigationStart} from '@angular/router';

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
  expanded: boolean;
    constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) { 
      router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          if(this.router.url === "/") this.block = "block";
          else this.block = "";
        }
      });
    }
  
    ngOnInit() {
      if(this.router.url === "/") this.block = "block";
      else this.block = "";
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

    searchProduct() {
      if (this.keyword === undefined || this.keyword === "") {}
      else {
        this.router.navigate(['/search'], { queryParams: { cat: this.idCategory, op: this.keyword} });
      }
    }
}
