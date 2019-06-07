const {assert} = require('chai');
const selectors = require('./../../test-data/selectors').headerEng.links;
const expected = require("./../../test-data/expected").headerEng.links.functionality;

describe('Verify links functionality', function(){
    it('Create Account link', function(){

      browser.url('/');
      let elem = $(selectors.CreateAccountLink);
      elem.click();
      let res = browser.getUrl();
      console.log(res);
      assert.equal(res, expected.CreateAccount, "Create Account goes to another page");
    });

    it('Returning User Log In functionality', function (){
       browser.url('/');
       let elem = $(selectors.ReturningUserLogIn);
       elem.click().pause(2000);
       let res = browser.isExisting('#lbl_login_heading');
       console.log(res);
       assert.isTrue(res, 'Returning User Log In do nothing' )
    });

    it('Help link functionality', function () {
        browser.url('/');
        let elem = $(selectors.Help);
        elem.click().pause(1000);
        let popupTitle = browser.getText('body > div:nth-child(3) > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > span.ui-dialog-title');
        console.log(popupTitle);
        assert.equal(popupTitle, expected.Help, 'popup is different')
    });

    it('FAQs link functionality', function () {
        browser.url('/');
        let elem = $(selectors.FAQs);
        elem.click().pause(1000);
        let popupTitle = browser.getText('body > div:nth-child(3) > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > span.ui-dialog-title');
        console.log(popupTitle);
        assert.equal(popupTitle, expected.FAQs, 'popup is different' );
    });

    it('Verify that pain page is in English', function () {
       browser.url('/');
       let elem = $(selectors.CreateAccountLink);
       let englishContent = elem.getText();
       console.log(englishContent);
       assert.equal(englishContent, expected.HomePageIsInEnglish, 'home page is not in English')
    });

    it('Verify that after click on English Button page do not change content', function () {
       browser.url('/');
       let elem = $(selectors.English);
       elem.click().pause(1000);
       let verification = $(selectors.CreateAccountLink);
       let englishContent = verification.getText();
       console.log(englishContent);
       assert.equal(englishContent, expected.HomePageIsInEnglish, 'after click on English Button page do change content')
    });

    it('Verify that when user clicks “Español” link, all text elements (except in  “Languages section”) are translated into Spanish', function () {
       browser.url('/');
       let elem = $(selectors.español);
       elem.click();
       let verificationAll = $(selectors.CreateAccountLink);
       let spanishContent = verificationAll.getText();
       let verificationEsp = $(selectors.español);
       let remainEsp = verificationEsp.getText();
       console.log(spanishContent, remainEsp);
       assert.equal(spanishContent +' '+ remainEsp, expected.PageIsInSpanish +' '+ expected.EspañolAlwaysEspañol, "page translated")
    });

    it('Verify that when user clicks “Español” link in Spanish version, the language of the page remains Spanish', function () {
       browser.url('/');
       let elem = $(selectors.español);
       elem.click();
       elem.click();
       let verification = $(selectors.CreateAccountLink);
       let content = verification.getText();
       console.log(content);
       assert.equal(content, expected.PageIsInSpanish, 'page change content')
    });
});