import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
searchCategoryId : string;
searchKeywords : string;
  constructor() { }

  getSearchCategory() {
    return this.searchCategoryId;
  }

  setSearchCategory(searchCategoryId) {
    this.searchCategoryId = searchCategoryId;
  }

  getSearchKeywords() {
    return this.searchKeywords;
  }

  setSearchKeywords(searchKeywords) {
    this.searchKeywords = searchKeywords;
  }

}
