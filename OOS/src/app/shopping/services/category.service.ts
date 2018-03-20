import { Injectable } from '@angular/core';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable } from 'rxjs/Observable';

import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { CategoryModel } from '../models/category';

@Injectable()
export class CategoryService {
  private API_PATH = 'http://fbinterns.azurewebsites.net/api/Category';

  constructor(private authHttpService: AuthHttpService) { }

  get(): Observable<CategoryModel[]> {    
    return this.authHttpService.get(this.API_PATH + "/1/status")
      .map(res => res.json() || []);
  }
}
