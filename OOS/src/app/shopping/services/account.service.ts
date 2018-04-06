import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { LoginAccountModel } from '../models/loginAccount';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs';
import { CreateUserModel } from '../models/user/create-user/create-user';
import { UserModel } from '../models/user/user';

@Injectable()
export class AccountService {

  currentUser=new Subject<CreateUserModel>();
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/User/';

  login:LoginAccountModel;
  constructor(private http: Http, private authHttpService: AuthHttpService) { }

  checkUserExist(terms): Observable<CreateUserModel> {
    return this.authHttpService.get(this.API_PATH + "CheckUserExist/" + terms)
      .map(res => res.json());
  }

  add(task: CreateUserModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH, task);
  }

  loginAccount(login){
    return this.authHttpService.post(this.API_PATH + "Login", login).map(res => res.json() || []);
  }

  setUserSession(){
    this.currentUser.next(JSON.parse(sessionStorage.getItem('user')));
  }

  getUserSession(){
    return this.currentUser.asObservable();
  }

  getById(id: string): Observable<UserModel> {
    return this.authHttpService.get(this.API_PATH + id)
      .map(res => {
        return res.json() || []
      }
      )
  }

  put(id: string,user: UserModel): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + id, user)
  }
}
