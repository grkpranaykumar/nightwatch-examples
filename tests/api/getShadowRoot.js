test('getShadowRoot() example test', async function (browser) {
  await browser
    .navigateTo('https://mdn.github.io/web-components-examples/popup-info-box-web-component/')
    .saveScreenshot('screens/api/test/getShadowRoot1.png')
    .saveScreenshot('screens/api/test/getShadowRoot2.png')
    .waitForElementVisible('form');

  const shadowRootEl = await browser.getShadowRoot('popup-info');
  const infoElement = await shadowRootEl.find('.info');

  await expect(infoElement.property('innerHTML')).to.include('card validation code');
  const iconElement = await shadowRootEl.find('.icon');
  const firstElement = await browser.getFirstElementChild(iconElement);

  await expect.element(firstElement).to.be.an('img');

});