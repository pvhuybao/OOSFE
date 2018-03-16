import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { OrdersModel } from '../Model/Order';

@Injectable()
export class OrdersService {

  private HttpOptions;

  private API_PATH = '/api/order'

  listOrder: Array<OrdersModel>;

  constructor(private authHttpService: AuthHttpService) { }

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

  delete(id: string): Observable<OrdersModel[]>
  {
    return this.authHttpService.delete(this.API_PATH+id)
      .map(res => res.json() || [])
  }

}
