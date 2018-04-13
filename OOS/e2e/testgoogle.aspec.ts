import { browser, by, element, protractor } from 'protractor';
browser.ignoreSynchronization = true;
describe('Protractor Demo App', function () {
  it('Google', function () {
    browser.driver.get('http://google.com/');
    expect(browser.driver.getTitle()).
      toEqual('Google'); // This is wrong!
  });
  it('Google Search', function () {
    element(by.id("lst-ib")).sendKeys("orient software");

    browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();


    expect(browser.driver.getTitle()).
      toEqual('orient software - Tìm với Google'); // This is wrong!
  });
});