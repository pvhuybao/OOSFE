import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/users';
import { LoginAccountModel } from '../models/loginAccount';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable()
export class AccountService {

  currentUser=new Subject<UserModel>();
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/User/';
  //private API_PATH = 'http://localhost:54766/api/User/';

  login:LoginAccountModel;
  constructor(private http: Http, private authHttpService: AuthHttpService) { }

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

  loginAccount(login){
    return this.authHttpService.post(this.API_PATH + "Login", login).map(res => res.json() || []);
  }

  setUserSession(){
    this.currentUser.next(JSON.parse(sessionStorage.getItem('user')));
  }

  getUserSession(){
    return this.currentUser.asObservable();
  }

}
