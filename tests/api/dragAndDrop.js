describe('dragAndDrop() example test', function () {

  it('demo test', function (browser) {
    browser
      .navigateTo('https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html')
      .saveScreenshot('screens/api/test/dragAndDrop1.png')
      .waitForElementVisible('#src_copy')
      .pause(1000)
      .assert.visible('#dest_copy')
      .saveScreenshot('screens/api/test/dragAndDrop2.png')
      .dragAndDrop('#src_copy', '#dest_copy')
      .assert.elementPresent('#src_copy #newId');
  });
});

