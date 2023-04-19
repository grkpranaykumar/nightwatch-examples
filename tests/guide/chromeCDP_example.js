describe('Chrome DevTools Example', function() {

  it ('using CDP DOM Snapshot', async function(browser) {
    await browser.navigateTo('https://nightwatchjs.org')
    .saveScreenshot('screens/api/test/ChromeDevTools1.png')
    .saveScreenshot('screens/api/test/ChromeDevTools2.png');

    const dom = await browser.chrome.sendAndGetDevToolsCommand('DOMSnapshot.captureSnapshot', {
      computedStyles: []
    });

    browser.assert.deepStrictEqual(Object.keys(dom), ['documents', 'strings']);
  });
});