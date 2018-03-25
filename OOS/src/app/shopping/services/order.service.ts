import { Injectable } from '@angular/core';
import { OrdersModel } from '../models/order';
import { Observable } from 'rxjs/Observable';
import { AuthHttpService } from '../../auth/auth-http.service';

@Injectable()
export class OrderService {

  constructor(private authHttpService: AuthHttpService) { }

  public order: OrdersModel;  

  private API_PATH = 'http://fbinterns.azurewebsites.net/api/order/';  

  add(order: OrdersModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH, order);      
  }  

  getOderDetails(id): Observable<OrdersModel[]> {
    return this.authHttpService.get(this.API_PATH + "/" + id)
      .map(res => res.json() || [])
  }

  setOrder(order) {
    this.order = order;
  }

  getOrder() {
    return this.order;
  }

}
