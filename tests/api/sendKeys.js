describe('sendKeys() example test', function () {
  it('demo test', function (browser) {
    browser
      .navigateTo('https://www.ecosia.org/')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/sendKeys1.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/sendKeys2.png')
      // send some simple text to an input
      .sendKeys('input[type=search]', 'nightwatch')
      .assert.valueEquals('input[type=search]', 'nightwatch')
      // send some text to an input and hit enter
      .sendKeys('input[type=search]', ['nightwatch', browser.Keys.ENTER]);
  });
});
