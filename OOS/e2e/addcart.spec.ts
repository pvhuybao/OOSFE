import { browser, element, by } from 'protractor'
import { AppPage } from './app.po';
import { CartService } from '../src/app/shopping/services/cart.service';
import { CartModel } from '../src/app/shopping/models/cart';
browser.ignoreSynchronization = true;

describe('Add to Cart TEST', () => {
    let quantity: any

    beforeEach(() => {
    });

    it('Should have a right quantity', () => {
        browser.get('http://localhost:4200/product/0b7f79e7-01d6-4c2b-9235-03031ed67bff_Ao_khoac_nam');
        browser.sleep(1000);
        element(by.css('.qty-input>.input')).sendKeys(2); //add quantity
        browser.sleep(1000);
        element(by.className('primary-btn add-to-cart')).click();
        browser.sleep(5000);
        element.all(by.tagName('app-cart')).element.all(by.repeater('item of cart')).then(function (item) {
            quantity = item[0].element(by.className('qty'))
        })
        expect(quantity.getText()).toEqual('12');
    })
})
