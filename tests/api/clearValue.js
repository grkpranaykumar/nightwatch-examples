describe('.clearValue() example test', function () {

  before(browser => browser.navigateTo('https://middlemarch.netlify.app/'));

  it('clear value', function (browser) {
    browser
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue1.png')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.valueEquals('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue2.png')
      .clearValue('input[type=search]')
      .assert.valueEquals('input[type=search]', '');
  });

  it('clear value – using callback argument', function (browser) {
    browser
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue3.png')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue4.png')
      .clearValue('input[type=search]', function (result) {
        console.log('clearValue result', result);
      })
      .assert.valueEquals('input[type=search]', '');
  });

  it('clear value – with explicit locate strategy', function (browser) {
    browser
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue5.png')
      .clearValue('css selector', 'input[type=search]')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue6.png')
      .assert.valueEquals('input[type=search]', '');
  });

  it('clear value – with selector object', function (browser) {
    // see https://nightwatchjs.org/guide/writing-tests/finding-interacting-with-dom-elements.html#element-properties
    browser
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue7.png')
      .clearValue({
        selector: 'input[type=search]',
        suppressNotFoundErrors: true
      })
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/clearValue8.png')
      .assert.valueEquals('input[type=search]', '');
  });
});
