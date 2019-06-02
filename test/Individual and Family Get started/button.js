const {assert} = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expected').IndividualAndFamilyGetStartedEng;

describe('Button', function () {
   it('Verify button image Src', function(){
       browser.url('/');
       let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellImage);
       let buttonSrc = elem.getAttribute('src');
       console.log(buttonSrc);
       assert.equal(buttonSrc, expected.button.imageSrc, "image source is different")
   });

   it('Verify after click direction', function () {
       let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellImage);
       elem.click();
       let verificationPage = $('#Title').getText();
       console.log(verificationPage);
       assert.equal(verificationPage, expected.button.directionUrlVerification, "redirect to another page");
   });
});
