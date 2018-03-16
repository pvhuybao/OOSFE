import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { CategoryModel } from '../../shared/category'

@Injectable()
export class CategoryService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/Category';

  constructor(private authHttpService: AuthHttpService) { }

  get(): Observable<CategoryModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }

  getCategory(id: string): Observable<CategoryModel> {
    return this.authHttpService.get(this.API_PATH + "/" + id)
      .map(res => res.json() || []);
  }

  add(task: CategoryModel): Observable<CategoryModel> {
    return this.authHttpService.post(this.API_PATH, task)
      .map(res => res.json());
  }

  delete(id: string): Observable<CategoryModel> {
    return this.authHttpService.delete(this.API_PATH + "/" + id)
      .map(res => res.json() || []);
  }
}
