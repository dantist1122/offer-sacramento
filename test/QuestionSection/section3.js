const { assert } = require('chai');
const selectors = require('./../../test-data/selectors').QuestionsSection;
const expected = require('./../../test-data/expected').questionSection.section3;


describe('Section 1', function () {
    it('Verify that header exist', function () {
        browser.url('/');
        let elem = $(selectors.header.right);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });
    it('Verify that link exist', function () {
        let elem = $(selectors.question.right);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });

    it('Verify that link exist', function () {
        let elem = $(selectors.descriptionRight);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });

    it('Verify header content', function () {
        let elem = $(selectors.header.right);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.headerText);
    });

    it('Verify link1 content', function () {
        let elem = $(selectors.question.right);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.linkText);
    });
    it('Verify description content', function () {
        let elem = $(selectors.descriptionRight);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.DescriptionContent);
    });

    it('Verify that link redirect properly', function () {
        let elem = $(selectors.question.right);
        elem.click().pause(1000);
        let popupTitle = browser.getText('body > div:nth-child(3) > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > span.ui-dialog-title');
        console.log(popupTitle);
        assert.equal(popupTitle, expected.linkRedirectTo);
    });



});