import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';
import {CategoryService} from '../services/category.service';
import { ProductModel } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
categories: any;
//Search product for order details
private searchTerms = new Subject<string>();
listProduct: Observable<ProductModel[]>;
searchResult: string = '';
choosedProduct: ProductModel;

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

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
    this.searchTerms.next(term);
  }

}
