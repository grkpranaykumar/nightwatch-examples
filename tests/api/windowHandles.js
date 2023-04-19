describe('.windowHandles() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));
  afterEach(browser => browser.end());

  it('basic window test', function (browser) {
    browser
      .windowHandles(res => {
        browser.assert.equal(res.value.length, 1);
      })
      .click('#openWindowBttn')
      .saveScreenshot('screens/api/test/windowHandles1.png')
      .saveScreenshot('screens/api/test/windowHandles2.png')
      .windowHandles(res => {
        browser.assert.equal(res.value.length, 2);
      })
      .windowHandles(function (result) {
        console.log('result:', result);
      });
  });

  it('async window test', async function (browser) {
    await browser.click('#openWindowBttn');
    await browser.saveScreenshot('screens/api/test/windowHandles3.png');
    await browser.saveScreenshot('screens/api/test/windowHandles4.png');
    let windowHandles = await browser.windowHandles();
    browser.assert.equal(windowHandles.length, 2);

    await browser.switchWindow(windowHandles[1]);
    await browser.waitForElementVisible('form');
  });
});

