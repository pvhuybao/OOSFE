import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../models/product';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private API_PATH = '/api/Product';

  constructor(private authHttpService: AuthHttpService,private http: HttpClient) { }

  // get(): Observable<ProductModel[]> {
  //   return this.authHttpService.get(this.API_PATH)
  //     .map(res => res.json() || []);
  // }

  // add(task: ProductModel): Observable<ProductModel> {
  //   return this.authHttpService.post(this.API_PATH, task)
  //     .map(res => res.json());
  // }

  postProduct(name, id){ 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',        
      })
    };
    var product = {
      id: id,
      name : name
    };
    return this.http.post('http://localhost:60499/API/product', product, httpOptions);
  }
}