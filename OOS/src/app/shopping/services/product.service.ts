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
    let listProduct = new Subject<ProductModel[]>();
    setTimeout(() => {
      listProduct.next([{ id: "0", name: "product 0" },
      { id: "1", name: "product 1" },
      { id: "2", name: "product 2" },
      { id: "3", name: "product 3" },
      { id: "4", name: "product 4" },
      { id: "5", name: "product 5" }])
    }, 500);

    return listProduct;
  }
}
