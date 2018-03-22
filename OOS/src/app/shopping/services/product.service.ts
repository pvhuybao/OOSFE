import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../models/product';
import { Subject } from 'rxjs';
import { timeout } from 'q';

@Injectable()
export class ProductService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/Product/';

  constructor(private authHttpService: AuthHttpService) { }

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

  getByCategory(id:string){
   return this.authHttpService.get(this.API_PATH + id +"/category").map(res => res.json() || []);;
  }
}
