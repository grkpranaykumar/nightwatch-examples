describe('execute() example test', function() {

  it('demo test', async function (browser) {
    await browser
      .url('https://nightwatchjs.org')
      .waitForElementPresent('body')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/execute1.png')

      // execute the function
      .execute(function() {document.title = 'Nightwatch.js'})
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/execute2.png')

      .waitUntil(async function () {
        const title = await this.execute(function() {
          return document.title;
        });

        console.log('  page title is:', title);

        return title === 'Nightwatch.js';
      }, 1000);
  });

});