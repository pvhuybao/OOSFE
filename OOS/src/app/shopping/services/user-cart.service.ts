import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { UserCartModel } from '../models/UserCart';

@Injectable()
export class UserCartService {

  private API_PATH = 'http://localhost:55912/api/cart';

  constructor(private authHttpService: AuthHttpService) { }

  getUserCart(id:string): Observable<UserCartModel> {
    return this.authHttpService.get(this.API_PATH + "/" + id)
    .map(res => res.json() || []);
  }

  getUserCartByEmail(email:string): Observable<UserCartModel> {
    return this.authHttpService.get(this.API_PATH + "/" + email + "/email")
    .map(res => res.json() || []);
  }
  
  add(task: UserCartModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH, task);
  }

  edit(task: UserCartModel): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + task.id, task);
  }

}
