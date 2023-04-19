describe('isSelected() example test', function () {

  it('demo test', function (browser) {
    browser
      .navigateTo('https://www.w3docs.com/learn-html/html-select-tag.html')
      .saveScreenshot('screens/api/test/isSelected1.png')
      .saveScreenshot('screens/api/test/isSelected2.png')
      .isSelected('select option[value=books]', function (result) {
        this.assert.equal(result.value, true);
      });
  });

  it('demo test async', async function (browser) {
    await browser.navigateTo('https://www.w3docs.com/learn-html/html-select-tag.html')
    .saveScreenshot('screens/api/test/isSelected3.png')
    .saveScreenshot('screens/api/test/isSelected4.png');
    const result = await browser.isSelected('select option[value=books]');

    await browser.assert.equal(result, true);
  });
});
