import { Injectable } from '@angular/core';
import { OrdersModel } from '../models/order';
import { Observable } from 'rxjs/Observable';
import { AuthHttpService } from '../../auth/auth-http.service';

@Injectable()
export class OrderService {

  constructor(private authHttpService: AuthHttpService) { }

  private API_PATH = 'http://fbinterns.azurewebsites.net/api/order/';

  add(order: OrdersModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH, order);      
  }

}
