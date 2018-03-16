import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'

@Injectable()
export class OrdersService {

  constructor(private authHttpService: AuthHttpService) { }

  getOrder() {
    return this.authHttpService.get("").map(result => result.json() || []);
  }
  deleteOrder(id){
    return this. authHttpService.delete(""+id);
  }

}
