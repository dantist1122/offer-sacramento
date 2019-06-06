const { assert } = require('chai');
const selectors = require('./../../test-data/selectors').languages;
const expected = require('./../../test-data/expected').languages;

describe('functionality', function () {
   it ('spanish', function(){
        browser.url('/');
        let elem = $(selectors.languages.spanish);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.spanish);
    });

    it ('navajo', function(){
        browser.url('/');
        let elem = $(selectors.languages.navajo);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.navajo);
    });

    it ('chinese', function(){
        browser.url('/');
        let elem = $(selectors.languages.chinese);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.chinese);
    });

    it ('vietnamese', function(){
        browser.url('/');
        let elem = $(selectors.languages.vietnamese);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.vietnamese);
    });

    it ('arabic', function(){
        browser.url('/');
        let elem = $(selectors.languages.arabic);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.arabic);
    });

    it ('tagalog', function(){
        browser.url('/');
        let elem = $(selectors.languages.tagalog);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.tagalog);
    });

    it ('korean', function(){
        browser.url('/');
        let elem = $(selectors.languages.korean);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.korean);
    });

    it ('french', function(){
        browser.url('/');
        let elem = $(selectors.languages.french);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.french);
    });

    it ('german', function(){
        browser.url('/');
        let elem = $(selectors.languages.german);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.german);
    });

    it ('russian', function(){
        browser.url('/');
        let elem = $(selectors.languages.russian);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.russian);
    });

    it ('japanese', function(){
        browser.url('/');
        let elem = $(selectors.languages.japanese);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.japanese);
    });

    it ('persian/Farsi', function(){
        browser.url('/');
        let elem = $(selectors.languages["persian/Farsi"]);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information["persian/Farsi"]);
    });

    it ('syriac/Assyrian', function(){
        browser.url('/');
        let elem = $(selectors.languages["syriac/Assyrian"]);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information["syriac/Assyrian"]);
    });

    it ('serbo-Croatian/Serbian', function(){
        browser.url('/');
        let elem = $(selectors.languages["serbo-Croatian/Serbian"]);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information["serbo-Croatian/Serbian"]);
    });

    it ('thai', function(){
        browser.url('/');
        let elem = $(selectors.languages.thai);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.thai);
    });

    it ('italian', function(){
        browser.url('/');
        let elem = $(selectors.languages.italian);
        elem.click();
        let verifyElement = $(selectors.boardWithInformation);
        let text = verifyElement.getText();
        console.log(text);
        assert.equal(text, expected.information.italian);
    });
});
