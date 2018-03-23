import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { debounce } from 'rxjs/operator/debounce';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import { OrderComponent } from '../../../shopping/order/order.component';
import { OrdersService } from '../../services/orders.service';
import { AddressModel } from '../../models/Address';
import { OrderDetailModel } from '../../models/OrderDetail';
import { OrdersModel } from '../../models/order';
import { ProductModel } from '../../models/product';
import { ProductService } from '../../services/Product.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  order: OrdersModel
  id: string

  //Search product for order details
  private searchTerms = new Subject<string>();
  listProduct: Observable<ProductModel[]>;
  searchResult: string = '';
  choosedProduct: ProductModel;

  constructor(private ss: OrdersService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  search(term: string): void {
    console.log("EditOrder term =" + term)
    this.searchTerms.next(term);
  }

  chooseProduct(product: ProductModel) {
    this.searchResult = product.name;
    this.choosedProduct = product;
    // this.listProduct.isEmpty;
    let indexMatch = this.indexDetailMatch(product.id)
    if (indexMatch > -1) {
         this.order.orderDetails[indexMatch].quantity += 1
         let quantity = this.order.orderDetails[indexMatch].quantity
         let price =  this.order.orderDetails[indexMatch].price
         this.order.orderDetails[indexMatch].totalPrice = quantity * price 
    }
    else {
      let detail: OrderDetailModel = {
        idProduct: product.id,
        nameProduct: product.name,
        quantity: 1,
        price: product.price,
        totalPrice: product.price
      }
      this.order.orderDetails.push(detail)
    }
    this.calculateTotalOrder()
    this.search("");

  }

  indexDetailMatch(id: string) {
    for (let d of this.order.orderDetails) {
      if (d.idProduct == id) {
        let index = this.order.orderDetails.indexOf(d, 0)
        return index;
      }
    }
    return -1;
  }

  ngOnInit() {

    this.listProduct = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(50),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productService.searchProduct(term)),
    );

    let params: any = this.activatedRoute.snapshot.params;
    console.log("EditOrder params =", params)
    this.id = params.id
    this.ss.getById(this.id).subscribe(data => {
      console.log("EditOrder data =", data);
      this.order = data
      console.log("EditOrder order =", this.order);
    })   
  }

  edit() {
    this.ss.put(this.id, this.order).subscribe(data => console.log("EditOrder edit data =" + data))
  }

  updateTotal(orderDetail: OrderDetailModel) {
    console.log("Edit updateTotal")
    orderDetail.totalPrice = orderDetail.price * orderDetail.quantity
    this.calculateTotalOrder()


  }

  delete(orderDetail: OrderDetailModel) {
    var index = this.order.orderDetails.indexOf(orderDetail, 0);
    if (index > -1) {
      this.order.orderDetails.splice(index, 1);
    }
    this.calculateTotalOrder()
  }

  calculateTotalOrder() {
    let total = 0
    for (let d of this.order.orderDetails) {
      total += d.totalPrice
    }
    this.order.total = total

  }

}
