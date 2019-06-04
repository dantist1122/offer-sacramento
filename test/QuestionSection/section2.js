const { assert } = require('chai');
const selectors = require('./../../test-data/selectors').QuestionsSection;
const expected = require('./../../test-data/expected').questionSection.section2;


describe('Section 1', function () {
    it('Verify that header exist', function () {
        browser.url('/');
        let elem = $(selectors.header.middle);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });
    it('Verify that link exist', function () {
        let elem = $(selectors.question.middle1);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });

    it('Verify that link exist', function () {
        let elem = $(selectors.question.middle2);
        let exist = elem.isExisting();
        console.log(exist);
        assert.isTrue(exist);
    });

    it('Verify header content', function () {
        let elem = $(selectors.header.middle);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.headerText);
    });

    it('Verify link1 content', function () {
        let elem = $(selectors.question.middle1);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.link1Text);
    });
    it('Verify link2 content', function () {
        let elem = $(selectors.question.middle2);
        let text = elem.getText();
        console.log(text);
        assert.equal(text, expected.link2Text);
    });


    it('Verify that link1 redirect properly', function () {
        let elem = $(selectors.question.middle1);
        elem.click().pause(1000);
        let popupTitle = browser.getText('body > div:nth-child(3) > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > span.ui-dialog-title');
        console.log(popupTitle);
        assert.equal(popupTitle, expected.link1RedirectTo);
    });

    it('Verify that link2 redirect properly', function () {
        browser.url('/');
        let elem = $(selectors.question.middle2);
        let target = elem.getAttribute('target');
        let src = elem.getAttribute('href');
        let newWindowUrl;
        if(target=== "_blank"){
            newWindowUrl = src;
        }
        console.log(target, src);
        assert.equal(newWindowUrl, expected.link2RedirectTo);
    });


});