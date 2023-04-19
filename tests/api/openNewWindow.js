describe('openNewWindow() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/'));
  afterEach(browser => browser.end());

  it('demo test new window', function (browser) {
    browser
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/openNewWindow1.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/openNewWindow2.png')
      .openNewWindow()
      .windowHandles(function(result) {
        expect(result.value).to.have.length(2);
      });
  });

  it('demo test new tab', async function (browser) {
    await browser.openNewWindow('tab').pause(1000)
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/openNewWindow3.png')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/openNewWindow4.png');

    const handles = browser.windowHandles();
    await expect(handles).to.have.length(2);
  });
});
