test('doubleClick() example test', function (browser) {
  browser
    .navigateTo('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
    .saveScreenshot('screens/api/test/doubleClick1.png')
    .assert.not.hasClass('aside', 'large')
    .doubleClick('aside')
    .saveScreenshot('screens/api/test/doubleClick2.png')
    .assert.hasClass('aside', 'large');
});
