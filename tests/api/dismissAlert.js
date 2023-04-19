test('dismissAlert() example test', function (browser) {
  browser
    .navigateTo('https://nightwatchjs.org/__e2e/window/alerts.html')
    .saveScreenshot('screens/api/test/dismissAlert2.png')
    .click('#show-alert')
    .saveScreenshot('screens/api/test/dismissAlert2.png')
    .ensure.alertIsPresent('> there is an alert open')
    .pause(500)
    .dismissAlert(function (result) {
      console.log(result);
    })
    .ensure.not.alertIsPresent('');
});
