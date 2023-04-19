describe('windowHandle() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));

  it('demo test', function (browser) {
    browser.saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/windowHandle1.png');
    browser.saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/windowHandle2.png');
    browser
      .windowHandle(function (result) {
        console.log('window handle:', result);
      });
  });

  it('demo test async', async function (browser) {
    await browser.saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/windowHandle3.png');
    await browser.saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/windowHandle4.png');
    const result = await browser.windowHandle();
    console.log('window handle:', result);
  });
});
