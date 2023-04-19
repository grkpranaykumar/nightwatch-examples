describe('getValue() example test', function () {

  beforeEach(browser => browser.navigateTo('https://middlemarch.netlify.app/'));

  it('demo test', function (browser) {
    browser
      .assert.visible('input[type=search]')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getValue1.png')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getValue2.png')
      .getValue('input[type=search]', function (result) {
        console.log('result', result);
      })
      // with explicit locate strategy
      .getValue('css selector', 'input[type=search]', function (result) {
        console.log('result', result);
      });
  });

  it('demo test async', async function (browser) {
    await browser
      .assert.visible('input[type=search]')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getValue3.png')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getValue4.png');

    const result = await browser.getValue('input[type=search]');
    console.log('Value:', result);
  });

  // with selector object
  it('demo test', async function (browser) {
    await browser
      .assert.visible('input[type=search]')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getValue5.png')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getValue6.png');

    const result = await browser.getValue({
      selector: 'input[type=search]'
    });
    console.log('Value:', result);
  });
});
