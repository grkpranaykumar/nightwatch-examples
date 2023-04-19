describe('duckduckgo example', function() {
  it('Search Nightwatch.js and check results', function(browser) {
    browser
      .navigateTo('https://duckduckgo.com')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/duckduckgo1.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/duckduckgo2.png')
      .waitForElementVisible('#search_form_input_homepage')
      .sendKeys('#search_form_input_homepage', ['Nightwatch.js'])
      .click('#search_button_homepage')
      .assert.visible('.results--main')
      .assert.textContains('.results--main', 'Nightwatch.js');
  }); 
});
