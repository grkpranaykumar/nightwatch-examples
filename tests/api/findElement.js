describe('findElement() example test', function () {
  it('demo test async', async function (browser) {
    await browser.navigateTo('https://nightwatchjs.org/')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/findElement1.png')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/findElement2.png');

    const resultElement = await browser.findElement('#index-container');
    browser.assert.ok('element-6066-11e4-a52e-4f735466cecf' in resultElement);
    console.log('Element ID:', resultElement.getId());
  });
});
