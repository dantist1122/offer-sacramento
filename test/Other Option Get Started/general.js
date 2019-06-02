const {assert} = require('chai');
const selectors = require("./../../test-data/selectors");
const expeceted = require('./../../test-data/expected');

describe("General", function(){
   it('Verify section location', function(){
       browser.url('/');
      let topElem = $(selectors.IndividualAndFamilyGetStartedEng.mainContainer);
      let indAndFamLocation = topElem.getLocation('y');
      let indAndFamHeight = topElem.getCssProperty('height').parsed.value;

      let searchElement = $(selectors.OtherOptionsGetStarted.mainContainer);
      let otherOpLocation = searchElement.getLocation('y');
      let otherOpHeight = searchElement.getCssProperty('height').parsed.value;
      let otherOpPaddingTop = searchElement.getCssProperty('padding-top').parsed.value;
      let otherOpPaddingBottom = searchElement.getCssProperty('padding-bottom').parsed.value;
      let bottomElement = $(selectors.QuestionsSection.mainContainer);

      let questionSecLocation = bottomElement.getLocation('y');

      let shouldStart = indAndFamLocation + indAndFamHeight;

      let locatedProperly;
      if(shouldStart < otherOpLocation && (otherOpLocation + otherOpHeight + otherOpPaddingTop + otherOpPaddingBottom)<questionSecLocation){
         locatedProperly = 'located between ’Individual/Family Get started’ section and ’Questions’ section';
      }
      console.log(locatedProperly);
      assert.equal(locatedProperly, expeceted.OtherOptionsGetStarted.general.location, "location is incorrect");
   });

   it('Verify width', function(){
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let widthElement = elem.getCssProperty('width').parsed.value;
      let paddingLeft = elem.getCssProperty('padding-left').parsed.value;
      let paddingRight = elem.getCssProperty('padding-right').parsed.value;
      let widthContainer = (widthElement + paddingLeft + paddingRight) + 'px';
      console.log(widthContainer);
      assert.equal(widthContainer, expeceted.OtherOptionsGetStarted.general.width, "width is different");
   });

   it('Verify padding top and bottom', function(){
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let paddingTop = elem.getCssProperty('padding-top').parsed.value;
      let paddingBottom = elem.getCssProperty('padding-bottom').parsed.value;
      let padding;
      if(paddingTop === paddingBottom){
         padding = paddingTop ;
      }
      console.log(padding);
   });
});