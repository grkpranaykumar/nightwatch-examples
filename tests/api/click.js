describe('.click() example test', function () {

  this.desiredCapabilities = {
    pageLoadStrategy: 'eager'
  };

  const githubButton = 'a[aria-label="Nightwatch on Github"]';

  before(browser => browser.navigateTo('https://nightwatchjs.org/'));

  after(browser => browser.end());

  it('click element', function (browser) {
    browser
      .click(githubButton)
      .click(githubButton, function (result) {
        console.log('Click result', result);
      })
      // with explicit locate strategy
      .click('css selector', githubButton)
      .saveScreenshot('screens/api/test/click1.png')

      // with selector object
      .click({
        selector: githubButton,
        index: 0,
        suppressNotFoundErrors: true
      })
      .saveScreenshot('screens/api/test/click2.png')
      .windowHandles(result => {
        expect(result.value, '--> There should be 5 tabs open').to.have.length(5);
      });
  });

});
