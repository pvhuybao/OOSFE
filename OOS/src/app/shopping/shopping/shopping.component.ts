import { Component, OnInit, Pipe, PipeTransform, ElementRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { ProductModel } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, delay } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd, ChildActivationEnd } from '@angular/router';
import normalize, { normalizeSync } from 'normalize-diacritics';
import { CategoryModel } from '../models/category';
import { EmailService } from '../services/email.service';
import { SpinnerService } from '../../shared/services/spinner.service';
import { EmailSubscribeModel } from '../models/emailSubscribe';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { UserModel } from '../models/users';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, PipeTransform {
  transform(value: string) {
    let newvalue = value.replace(/\s/g, '_');
    return newvalue;
  }
  //Search product for order details
  private searchTerms = new Subject<string>();
  categories: any;
  listProduct: Observable<ProductModel[]>;
  searchResult: string = '';
  choosedProduct: ProductModel;
  hidden: boolean = false;
  idCategory: string = "all";
  keyword: string;
  expanded: boolean;
  test: string;
  path: string;
  dblock: string;

  public emailSubscribe: string;

  user = new UserModel;

  constructor(
    private accountService: AccountService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private ele: ElementRef,
    private emailService: EmailService,
    private spinnerService: SpinnerService,
    private toasterService: ToasterService
  ) {
    router.events.subscribe(event => {
      if (event instanceof ChildActivationEnd) {
        if (this.router.url == "/") this.dblock = "block";
        else this.dblock = "";
      }
    });
  }

  ngOnInit() {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    });

    this.listProduct = this.searchTerms.pipe(

      // wait 300ms after each keystroke before considering the term
      debounceTime(50),

      // ignore new term if same as previous term
      //distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productService.searchProductByIdCategory(this.idCategory, term)),
    );

    //console.log(JSON.parse(sessionStorage.getItem('user')));
    this.accountService.getUser().subscribe(data => this.user = data);
    this.accountService.setUser();
    //console.log(this.user)
    ;
  }

  search(term: string): void {
    if (term === "") this.hidden = true;
    else this.hidden = false;
    this.searchTerms.next(term);
  }

  hide() {
    this.hidden = true;
  }

  routeCategory(idCategory: string, categoryName: any) {
    categoryName = normalizeSync(categoryName);
    var path = "/category/" + idCategory + "_" + this.transform(categoryName);
    this.router.navigateByUrl(path);
  }

  routeProduct(productid: string) {
    this.router.navigateByUrl("/product/" + productid);
  }

  categoryName(catid: string): string {
    var name;
    for (var i = 0; i < this.categories.length; i++) {
      if (catid == this.categories[i].id) name = this.categories[i].name;
    }
    return name;
  }

  searchProduct() {
    if (this.keyword === undefined || this.keyword === "") { }
    else {
      this.router.navigate(['/search'], { queryParams: { cat: this.idCategory, op: this.keyword } });
    }
  }
  sentEmailSubscribe() {
    let email = new EmailSubscribeModel();
    email.emailSubscribe = this.emailSubscribe;
    this.spinnerService.startLoadingSpinner();
    this.emailService.emailSubscribe(email).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      setTimeout(() => {
        this.toasterService.pop('success', 'successfuly', 'Added!');
      }, 500)
    })
  }
}

