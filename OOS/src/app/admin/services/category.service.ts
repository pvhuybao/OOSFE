import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { CategoryModel } from '../Model/category'
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/Category';

  constructor(private authHttpService: AuthHttpService) { }

  get(): Observable<CategoryModel[]> {
    //return this.authHttpService.get(this.API_PATH)
    //  .map(res => res.json() || []);
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }

  add(task): Observable<any> {
    return this.authHttpService.post(this.API_PATH, task);
  }

  getById(id): Observable<CategoryModel> {
    return this.authHttpService.get(this.API_PATH + "/" + id)
      .map(res => res.json() || []);
  }

  put(id, task): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + id, task);
  }
}
