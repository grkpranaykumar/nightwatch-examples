test('captureBrowserExceptions() example test', async function (browser) {

  let eventData;

  await browser.captureBrowserExceptions((event) => {
    eventData = event;
    console.log('>>> Exception:', event);
  });

  const buttonEl = await browser.navigateTo('https://nightwatchjs.org/__e2e/window/').findElement('#openWindowBttn');

  await browser
    .executeScript(function (el) {
      el.setAttribute('onclick', 'throw new Error("Test error.")');
    }, [buttonEl])
    .click(buttonEl)
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/captureBrowserExceptions1.png')
    .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/captureBrowserExceptions2.png')
    .perform(function () {
      expect(eventData).is.an('object').and.not.null;
      expect(eventData).to.have.own.property('exceptionDetails');

      const {exceptionDetails} = eventData;
      expect(exceptionDetails.exception.description).to.include('Test error');
    });

});
