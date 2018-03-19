import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
//import { Orders } from '../models/orders';
import { OrdersModel } from '../models/order';

@Injectable()
export class OrdersService {

  private API_PATH = 'http://fbinterns.azurewebsites.net/api/order/'

  listOrder: Array<OrdersModel>;

  order: OrdersModel;

  constructor(private authHttpService: AuthHttpService) { }

  sendData(order: OrdersModel)
  {
    this.order = order;
  }

  getData()
  {
    return this.order;
  }
  
  getList(): Observable<OrdersModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || [])
  }

  getById(id: string): Observable<OrdersModel[]>
  {
    return this.authHttpService.get(this.API_PATH+id)
      .map(res => res.json() || [])
  }

  add(order: OrdersModel): Observable<OrdersModel> {
    return this.authHttpService.post(this.API_PATH, order)
      .map(res => res.json());
  }

  put(order: OrdersModel): Observable<OrdersModel> {
    return this.authHttpService.put(this.API_PATH, order)
      .map(res => res.json() || [])
  }

  delete(id: string)
  {
    return this.authHttpService.delete(this.API_PATH+id);
  }

}
