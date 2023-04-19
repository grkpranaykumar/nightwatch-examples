describe('mockNetworkResponse() example test', function () {
  it('demo test', function (browser) {
    browser
      .mockNetworkResponse('https://www.google.com', {
        status: 200,
        headers: {
          'Content-Type': 'UTF-8'
        },
        body: 'Hello there!'
      })
      .navigateTo('https://www.google.com')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/mockNetworkResponse1.png')
      .saveScreenshot('/Users/pranaykumar/Documents/nightwatch-examples/screens/api/test/mockNetworkResponse2.png');
  });
});
