const { assert } = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expectedSpanish.json');

describe("header", function () {
   it('content', function () {
     browser.url('/');
     let elem = $(selectors.headerEng.links.español);
     elem.click().pause(500);
     let expect = $(selectors.headerEng.links.CreateAccountLink);
     let res = expect.getText();
     console.log(res);
     assert.equal(res, expected.header.firstLine.createAccount);
   });
});
