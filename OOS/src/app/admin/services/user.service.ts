import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user';

@Injectable()
export class UserService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/User';

  constructor(private authHttpService: AuthHttpService) { }

  get(): Observable<UserModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }
  getById(id): Observable<UserModel> {
    return this.authHttpService.get(this.API_PATH + "/" + id)
      .map(res => res.json());
  }

  add(task: UserModel): Observable<any> {
    return this.authHttpService.post(this.API_PATH, task);
  }

  edit(task: UserModel): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + task.id, task);
  }

  delete(user: UserModel): Observable<any>{
    var url: string = this.API_PATH + "/" + user.id;
    return this.authHttpService.delete(url)
  }

  public user:UserModel;

  getUser(user:UserModel)
  {
    return this.user = user;
  }

  setUser()
  {
    return this.user;
  }
}