describe('elementActive() example test', function () {
  it('demo test async', async function (browser) {
    const result = await browser
      .navigateTo('https://nightwatchjs.org/')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/elementActive1.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/elementActive2.png')
      .elementActive();

    console.log('element active:', result);
  });
});
