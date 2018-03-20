import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { OrdersModel } from '../../models/order';
import { AddressModel } from '../../models/Address';
import { OrderDetailModel } from '../../models/OrderDetail';
import { ProductService } from '../../services/Product.service';
import { Subject } from 'rxjs/Subject';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { ProductModel } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import { debounce } from 'rxjs/operator/debounce';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order : OrdersModel;
  
  public Email:string ='';

  public NameBill:string ='';
  public PhoneBill:string ='';
  public ProvinceBill:string ='';
  public DistrictBill:string ='';
  public StreetBill:string ='';
  
  public Name:string ='';
  public Phone:string ='';
  public Province:string ='';
  public District:string ='';
  public Street:string ='';

  public IdProduct: string = '';
  public NameProduct: string = '';
  public ImgProduct: string = 'http://moziru.com/images/grumpy-cat-clipart-nope-15.png';
  public Quantity: number = 1;
  public Price: number = 0;
  public TotalPrice: number = 0;

  public Total: number = 0;

  //Search product for order details
  private searchTerms = new Subject<string>();
  listProduct: Observable<ProductModel[]>;
  searchResult: string = '';
  choosedProduct: ProductModel;

  constructor(private orderService: OrdersService, private productService: ProductService, private router: Router) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  chooseProduct(product: ProductModel) {
    this.searchResult = product.name;
    this.choosedProduct = product;
    // this.listProduct.isEmpty;
  }

  ngOnInit(): void {
    this.listProduct = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(50),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productService.searchProduct(term)),
    );
  }

  copy(){
    this.Name = this.NameBill;
    this.Phone = this.PhoneBill;
    this.Province = this.ProvinceBill;
    this.District = this.DistrictBill;
    this.Street = this.StreetBill;

  }

  create() {
    let addressBill = new AddressModel();
      addressBill.name = this.NameBill;
      addressBill.phone = this.PhoneBill;
      addressBill.province = this.ProvinceBill;
      addressBill.district = this.DistrictBill;
      addressBill.street = this.StreetBill;
      addressBill.type = 0;


    let address = new AddressModel();
      address.name = this.Name;
      address.phone = this.Phone;
      address.province = this.Province;
      address.district = this.District;
      address.street = this.Street;
      address.type = 1;

    let orderDetails = new OrderDetailModel();
    orderDetails.idProduct = null;
    orderDetails.price = this.Price;
    orderDetails.quantity = this.Quantity;
    orderDetails.totalPrice = this.TotalPrice;

    let newOrder = new OrdersModel();
    newOrder.email = this.Email;
    newOrder.userId = null;
    newOrder.address = [addressBill, address];
    newOrder.orderDetails = [orderDetails];
    newOrder.total = this.Total;

    this.orderService.add(newOrder).subscribe(() => {
      this.router.navigateByUrl("/admin/orders");
    });
  }
}
