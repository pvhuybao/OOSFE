import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../models/product';

@Injectable()
export class ProductService {
  private API_PATH = '/api/Product';

  constructor(private authHttpService: AuthHttpService) { }

  get(): Observable<ProductModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }

  add(task: ProductModel): Observable<ProductModel> {
    return this.authHttpService.post(this.API_PATH, task)
      .map(res => res.json());
  }
}