describe('elementActive() example test', function () {
  it('demo test async', async function (browser) {
    const result = await browser
      .navigateTo('https://nightwatchjs.org/')
      .saveScreenshot('screens/api/test/elementActive1.png')
      .saveScreenshot('screens/api/test/elementActive2.png')
      .elementActive();

    console.log('element active:', result);
  });
});
