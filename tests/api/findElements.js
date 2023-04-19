describe('findElements() example test', function () {
  it('demo test async', async function (browser) {
    await browser.navigateTo('https://nightwatchjs.org/')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/findElements1.png')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/findElements2.png');
    const resultElements = await browser.findElements('.nav-links-left .nav-item');

    await expect(resultElements).to.have.length(4);

    resultElements.forEach((item) => console.log('Element Id:', item.getId()));
  });
});
