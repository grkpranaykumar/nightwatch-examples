describe('registerBasicAuth() example test', function () {

  it('registerBasicAuth test', function (browser) {
    browser
      .registerBasicAuth('test', 'test')
      .saveScreenshot('screens/api/test/registerBasicAuth1.png')
      .saveScreenshot('screens/api/test/registerBasicAuth2.png')
      .navigateTo('http://browserspy.dk/password-ok.php')
      .waitForElementVisible('#content');
  });
});
