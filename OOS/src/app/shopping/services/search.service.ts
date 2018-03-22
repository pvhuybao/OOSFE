import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
searchIdCategory : string;
searchKeyword : string;
  constructor() { }

  public getSearchIdCategory() {
    return this.searchIdCategory;
  }

  public setSearchIdCategory(searchCategoryId: string) {
    this.searchIdCategory = searchCategoryId;
  }

  public getSearchKeyword() {
    return this.searchKeyword;
  }

  public setSearchKeyword(searchKeyword: string) {
    this.searchKeyword = searchKeyword;
  }

}
