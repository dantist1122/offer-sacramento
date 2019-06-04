const { assert } = require('chai');
const selectors = require('./../../test-data/selectors').QuestionsSection;
const expected = require('./../../test-data/expected').questionSection.section1;


describe('Section 1', function () {
   it('Verify that header exist', function () {
        browser.url('/');
        let elem = $(selectors.header.left);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
   });
    it('Verify that link exist', function () {
        let elem = $(selectors.question.left);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });

    it('Verify header content', function () {
        let elem = $(selectors.header.left);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.headerText);
    });

    it('Verify link content', function () {
        let elem = $(selectors.question.left);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.linkText);
    });
    it('Verify that link redirect properly', function () {
       let elem = $(selectors.question.left);
       elem.click();
       let url = browser.getUrl();
       console.log(url);
       assert.equal(url, expected.linkRedirectTo);
    });


});