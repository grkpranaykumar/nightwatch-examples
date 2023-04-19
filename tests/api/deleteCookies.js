test('deleteCookies() example test', async function (browser) {

  await browser
    .navigateTo('https://nightwatchjs.org/')
    .saveScreenshot('screens/api/test/deleteCookies1.png')
    .setCookie({
      name: 'test_cookie',
      value: '1'
    })
    .saveScreenshot('screens/api/test/deleteCookies2.png')
    .expect.cookie('test_cookie').toEqual('1')
    .deleteCookies(function () {
      console.log('  >> cookies deleted');
    });

  const cookies = await browser.getCookies();
  expect(cookies).to.have.length(0);

});
