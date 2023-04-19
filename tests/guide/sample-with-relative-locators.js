/* eslint-disable no-undef */
describe('sample with relative locators', function () {
  before(browser => browser.navigateTo('https://archive.org/account/login'));

  it('locate password input', function (browser) {
    const passwordElement = locateWith(By.tagName('input')).below(By.css('input[type=email]'));

    browser
      .waitForElementVisible(passwordElement)
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/relativelocators1.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/relativelocators2.png')
      .expect.element(passwordElement).to.be.an('input');

    browser.expect.element(passwordElement).attribute('type').equal('password');
  });

  it('fill in password input', function (browser) {
    const passwordElement = locateWith(By.tagName('input')).below(By.css('input[type=email]'));

    browser
      .waitForElementVisible('form.login-form')
      .setValue(passwordElement, 'password')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/relativelocators3.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/relativelocators4.png')
      .assert.valueEquals('input[type=password]', 'password');
  });

  after(browser => browser.end());
});