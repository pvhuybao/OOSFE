import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://localhost:4200/product/ad3d179f-40d7-4bae-bff4-94966c73791e_Giay_bot_nam');
  }
  
  getTitle() {
    return browser.getTitle();
  }
  addCart() {
  }
}
