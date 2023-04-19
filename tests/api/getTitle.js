describe('getTitle() example test', function () {

  before(browser => browser.navigateTo('https://nightwatchjs.org/'));

  it('demo test', async function (browser) {
    const title = await browser.getTitle();
    await browser.saveScreenshot('screens/api/test/getTitle1.png');
    await browser.assert.equal(title, 'Nightwatch.js | Node.js powered End-to-End testing framework');
    await browser.saveScreenshot('screens/api/test/getTitle2.png');
  });
});
