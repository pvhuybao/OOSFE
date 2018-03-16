import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { Orders } from '../Model/orders';

@Injectable()
export class OrdersService {

  constructor(private authHttpService: AuthHttpService) { }

  getOrder() {
    return this.authHttpService.get("http://fbinterns.azurewebsites.net/api/order").map(res => res.json() || []);
  }
  deleteOrder(orderId) {
    return this.authHttpService.delete("http://fbinterns.azurewebsites.net/api/order/"+orderId).map(res => res.json() || []);
  }

}
