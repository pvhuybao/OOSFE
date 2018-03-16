import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderModel } from '../../shared/order';

@Injectable()
export class OrdersService {

  private HttpOptions;

  private Url = 'http://fbinterns.azurewebsites.net/api/order'

  listOrder: Array<OrderModel>;

  constructor(private http: HttpClient) { }

}
