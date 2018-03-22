
import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../models/product';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import { Subject } from 'rxjs';
import { timeout } from 'q';

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
    return this.authHttpService.get(this.API_PATH + term +"/searchproduct").map(res => res.json() || []);
  }

  getProductsByParameter(widgetName: string): Observable<ProductModel[]> {
    // let listProduct = new Subject<ProductModel[]>();
    // setTimeout(() => {
    //   listProduct.next([
    //       { id: "0", name: "product 0", price: 1, description: "", image:"",idCategory:"" },
    //       { id: "0", name: "product 1", price: 1, description: "", image:"",idCategory:"" },
    //       { id: "0", name: "product 2", price: 1, description: "", image:"",idCategory:"" },
    //       { id: "0", name: "product 3", price: 1, description: "", image:"",idCategory:"" },
    //   ])
    // }, 500);
    //return listProduct;
    return this.authHttpService.get(this.API_PATH +widgetName+"/widget").map(res => res.json() || []);
  }

  getByCategory(id:string) {
    return this.authHttpService.get(this.API_PATH + id +"/category").map(res => res.json() || []);
  }

  searchProductByIdCategory(idCategory: string, keyword: string): Observable<ProductModel[]>  {
    if (!keyword.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    var path = this.API_PATH + idCategory + "&" + keyword + "/search";
    return this.authHttpService.get(path).map(res => res.json() || []);
  }
  
}
