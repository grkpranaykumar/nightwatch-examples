describe('.closeWindow() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));
  afterEach(browser => browser.end());

  it('basic window test', function (browser) {
    browser
      .windowHandles(result => {
        expect(result.value).to.have.length(1);
      })
      .saveScreenshot('screens/api/test/closeWindow1.png')
      .click('#openWindowBttn')
      .windowHandles(result => {
        expect(result.value).to.have.length(2);
      })
      .closeWindow(function (result) {
        console.log('    closeWindow result', result);
      })
      .saveScreenshot('screens/api/test/closeWindow2.png')
      .windowHandles(result => {
        expect(result.value).to.have.length(1);
      });

  });

  it('async window test', async function (browser) {
    await browser.click('#openWindowBttn');

    let windowHandles = await browser.windowHandles();
    expect(windowHandles).to.have.length(2);

    await browser.switchWindow(windowHandles[1]).saveScreenshot('screens/api/test/closeWindow3.png');
    await browser.closeWindow().saveScreenshot('screens/api/test/closeWindow4.png');

    windowHandles = await browser.windowHandles();
    expect(windowHandles).to.have.length(1);
  });
});
