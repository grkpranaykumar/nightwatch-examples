xdescribe('Ecosia.org Demo', function() {

  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/ecosia1.png')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/ecosia2.png')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.textContains('.layout__content', 'Nightwatch.js');
  });

  after(browser => browser.end());
});
