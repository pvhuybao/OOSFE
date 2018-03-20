import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../models/product';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ProductService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/Product/';
  idProduct: string;
  constructor(private authHttpService: AuthHttpService) { }

  get(id): Observable<ProductModel> {
    return this.authHttpService.get(this.API_PATH + id).map(res => res.json() || []);
  }
  delete(id): Observable<any> {
    return this.authHttpService.delete(this.API_PATH + id);
  }
  setId(id) {
    this.idProduct = id;
  }
  gets(): Observable<ProductModel[]> {
    return this.authHttpService.get(this.API_PATH)
      //.map(res => res.json() || []);
      .map(res => res.json());
  }

  postProduct(product) {
    return this.authHttpService.post(this.API_PATH, product);
  }

  putProduct(task: ProductModel): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + task.id, task);
  }

  searchProduct(term: string): Observable<ProductModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.authHttpService.search(this.API_PATH + term +"/searchproduct").map(res => res.json() || []);
  }
}