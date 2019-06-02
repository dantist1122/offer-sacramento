const { assert } = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expected').IndividualAndFamilyGetStartedEng;


describe('General section', function () {
   it("Verify that the section is located under the header", function () {
       browser.url('/');
       let banner = $(selectors.IndividualAndFamilyGetStartedEng.mainContainer);
       let locationBan = banner.getLocation('y');
       let header = $(selectors.headerEng.headerContainer);
       let locationHeader = header.getLocation('y');
       let headerHeight = header.getCssProperty('height').parsed.value;

       let locatedUnderTheHeader;
       if(Math.floor(headerHeight) + Math.floor(locationHeader) === Math.floor(locationBan)){
           locatedUnderTheHeader = true;
       }
       console.log(locatedUnderTheHeader);
       assert.isTrue(locatedUnderTheHeader, "the section is not located under header");
   });

   it('Verify that width: 100% (998px)', function () {
       let width = $(selectors.IndividualAndFamilyGetStartedEng.mainContainer).getCssProperty('width').value;
       console.log(width);
       assert.equal(width, expected.general.width, "width is not as expected");
   });

   it('Verify that the section is divided vertically into 2 cells: 55% of the width is left', function () {
       let firstCellWidth = $(selectors.IndividualAndFamilyGetStartedEng.TableForTwoCells).$$('td')[0].getCssProperty('width').parsed.value;
       let percentage = firstCellWidth * 100 / $(selectors.IndividualAndFamilyGetStartedEng.mainContainer).getCssProperty('width').parsed.value;
       let res = Math.round(percentage)+"%";
       console.log(res);
       assert.equal(res, expected.general.leftSectionWidth, "left cell has different width");
   });

   it('Verify that the section is divided vertically into 2 cells: 45% of the width is right', function () {
       let secondCellWidth = $(selectors.IndividualAndFamilyGetStartedEng.TableForTwoCells).$$('td')[1].getCssProperty('width').parsed.value;
       let padding = $(selectors.IndividualAndFamilyGetStartedEng.TableForTwoCells).$$('td')[1].getCssProperty('padding-left').parsed.value;
       let percentage = (secondCellWidth + padding) * 100 / $(selectors.IndividualAndFamilyGetStartedEng.mainContainer).getCssProperty('width').parsed.value;
       let res = Math.round(percentage)+ "%";
       console.log(res);
       assert.equal(res, expected.general.rightSectionWidth, "right cell has different width");
   });

   it('Verify that in the left cell displays the image', function () {
       let elem = $(selectors.IndividualAndFamilyGetStartedEng.leftCellImage);
       let imageSrc = elem.getAttribute('src');
       console.log(imageSrc);
       assert.equal(imageSrc, expected.general.leftCellImageSrc, "image course is different");
   });
});