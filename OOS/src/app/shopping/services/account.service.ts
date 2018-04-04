import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/users';

@Injectable()
export class AccountService {

  private API_PATH = 'http://fbinterns.azurewebsites.net/api/User/';


  constructor(private authHttpService: AuthHttpService) { }

  add(task: UserModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH + "Register", task);
  }

  getById(id: string): Observable<UserModel> {
    return this.authHttpService.get(this.API_PATH + id)
      .map(res => {
        return res.json() || []
      }
      )
  }



  put(user: any): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "UpdateProfile", user)
  }
}
