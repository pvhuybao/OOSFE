import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../models/product';

@Injectable()
export class ProductService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/Product/';

  constructor(private authHttpService: AuthHttpService) { }

  gets(): Observable<ProductModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }

  add(task: ProductModel): Observable<ProductModel> {
    return this.authHttpService.post(this.API_PATH, task)
      .map(res => res.json());
  }
  get(id) :Observable<ProductModel>{
    return this.authHttpService.get(this.API_PATH + id).map(res => res.json() || []);
  }
}