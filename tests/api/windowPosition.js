describe('windowPosition() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));

  it('demo test', function (browser) {
    browser
      .saveScreenshot('screens/api/test/windowPosition1.png')
      .saveScreenshot('screens/api/test/windowPosition2.png')
      .windowPosition('current', function (result) {
        console.log('windowPosition current:', result.value);
      });
  });
});
