describe('title() example test', function () {
  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/'));

  it('demo test', function (browser) {
    browser.saveScreenshot('screens/api/test/title1.png');
    browser.saveScreenshot('screens/api/test/title2.png');
    browser.title(function (result) {
      console.log('Title:', result.value);
    });
  });

  it('demo test async', async function (browser) {
    await browser.saveScreenshot('screens/api/test/title3.png');
    await browser.saveScreenshot('screens/api/test/title4.png');
    const title = await browser.title();
    console.log('Title:', title);
  });
});
