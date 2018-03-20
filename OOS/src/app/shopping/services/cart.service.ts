import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable()
export class CartService {
  public data:any[];
  constructor(private localStorage: LocalStorageService) {

  }
  set(object) {
    this.localStorage.set(`${localStorage.length+1}`, object);
  }

  remove(key) {
    this.localStorage.remove(key);
  }

  get(key) {
    this.localStorage = this.localStorage.get(key);
  }

  clear() {
    this.localStorage.clear();
  }

}
