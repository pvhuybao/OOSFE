import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/users';

@Injectable()
export class AccountService {

  private API_PATH = 'http://fbinterns.azurewebsites.net/api/User/';
  //private API_PATH = 'http://localhost:54766/api/User/';

  constructor(private authHttpService: AuthHttpService) { }

  getByUsername(name): Observable<UserModel> {
    return this.authHttpService.get(this.API_PATH + "CheckUser/" + name)
      .map(res => res.json());
  }

  getByEmail(email): Observable<UserModel> {
    return this.authHttpService.get(this.API_PATH + "CheckUserEmail/" + email)
      .map(res => res.json());
  }

  add(task: UserModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH + "Register", task);
  }

}
