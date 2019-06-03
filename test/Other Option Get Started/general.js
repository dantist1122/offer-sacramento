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
      let paddingTop = elem.getCssProperty('padding-top').value;
      let paddingBottom = elem.getCssProperty('padding-bottom').value;
      let padding;
      if(paddingTop === paddingBottom){
         padding = paddingTop ;
      }
      console.log(padding);
      assert.equal(padding, expeceted.OtherOptionsGetStarted.general.paddingTopAndBottom, 'padding top and bottom is different');
   });

   it('Verify padding right and left', function () {
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let paddingRight = elem.getCssProperty('padding-right').value;
      let paddingLeft = elem.getCssProperty('padding-left').value;
      let padding;
      if(paddingRight === paddingLeft){
         padding = paddingLeft;
      }
      console.log(padding);
      assert.equal(padding, expeceted.OtherOptionsGetStarted.general.paddingRightAndLeft, 'padding right and left are different');
   });

   it('Verify background color', function () {
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let color = elem.getCssProperty('background-color').parsed.hex;
      console.log(color);
      assert.equal(color, expeceted.OtherOptionsGetStarted.general.backgroundColor, 'background color is different');
   });

   it('Verify border bottom', function () {
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let borderBottom = elem.getCssProperty('border-bottom-width').value;
      console.log(borderBottom);
      assert.equal(borderBottom, expeceted.OtherOptionsGetStarted.general.borderBottomWidth, "border bottom is different");
   });

   it('Verify border bottom style', function () {
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let borderStyle = elem.getCssProperty('border-bottom-style').value;
      console.log(borderStyle);
      assert.equal(borderStyle, expeceted.OtherOptionsGetStarted.general.borderBottomStyle, "border style is different");
   });

   it('Verify border bottom color',function () {
      let elem = $(selectors.OtherOptionsGetStarted.mainContainer);
      let borderColor = elem.getCssProperty('border-bottom-color').parsed.hex;
      console.log(borderColor);
      assert.equal(borderColor, expeceted.OtherOptionsGetStarted.general.borderBottomColor, "border color is different");
   });
});