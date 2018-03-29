import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
//import { Orders } from '../models/orders';
import { OrdersModel } from '../models/order';
import { PagingModel } from '../models/paging';

@Injectable()
export class OrdersService {

  private API_PATH = 'http://fbinterns.azurewebsites.net/api/order/';

  listOrder: Array<OrdersModel>;

  order: OrdersModel;

  pageSize: number = 15;
  page: number = 1;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;

  constructor(private authHttpService: AuthHttpService) { }

  sendData(order: OrdersModel)
  {
    this.order = order;
  }

  getData()
  {
    return this.order;
  }
  
  getList(email: string, phone: string, page: number): Observable<PagingModel> {
    return this.authHttpService.get(this.API_PATH+"?Email="+email+"&Phone="+phone+"&PageSize=15&Page=1")
      .map(res => res.json() || [])
  }

  getById(id: string): Observable<OrdersModel>
  {
    return this.authHttpService.get(this.API_PATH+id)
      .map(res => res.json() || [])
  }

  add(order: OrdersModel): Observable<OrdersModel> {
    return this.authHttpService.post(this.API_PATH, order)
      .map(res => res.json());
  }

  put(id :string,order: OrdersModel): Observable<OrdersModel> {
    return this.authHttpService.put(this.API_PATH + id, order)
      .map(res => {
        console.log("order service res =" + res)
        console.log("order service res.json =" + res.json())
        return res.json() || []})
  }

  delete(id: string)
  {
    return this.authHttpService.delete(this.API_PATH+id);
  }

}
