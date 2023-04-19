test('acceptAlert() example test', function (browser) {
  browser
    .navigateTo('https://nightwatchjs.org/__e2e/window/alerts.html')
    .saveScreenshot('screens/api/test/acceptAlert1.png')
    .saveScreenshot('screens/api/test/acceptAlert2.png')
    .click('#show-alert')
    .ensure.alertIsPresent('> there is an alert open')
    .pause(500)
    .acceptAlert()
    .ensure.not.alertIsPresent('', 500);
});

