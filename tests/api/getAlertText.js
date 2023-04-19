test('getAlertText() example test', function (browser) {

  browser
    .navigateTo('https://nightwatchjs.org/__e2e/window/alerts.html')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getAlertText1.png')
    .click('#show-confirm')
    .ensure.alertIsPresent('> there is an alert open')
    .pause(500)
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/getAlertText2.png')
    .getAlertText(function (res) {
      browser.assert.strictEqual(res.value, 'Are you sure?');
    });

});
