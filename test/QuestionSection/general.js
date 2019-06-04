const { assert } = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expected').questionSection.general;

describe('General', function(){
   it('Verify location', function(){
       browser.url('/');
       let other = $(selectors.OtherOptionsGetStarted.mainContainer);
       let otherOpLocation = other.getLocation('y');
       let otherOpHeight = other.getCssProperty('height').parsed.value;
       let otherOpPaddingTop = other.getCssProperty('padding-top').parsed.value;
       let otherOpPaddingBottom = other.getCssProperty('padding-bottom').parsed.value;
       const shouldStart = otherOpLocation +otherOpHeight+otherOpPaddingTop+otherOpPaddingBottom;

       let questionSec = $(selectors.QuestionsSection.mainContainer);
       let quesLoc = questionSec.getLocation('y');
       let located = quesLoc-shouldStart;
       if(located<1){
           located = "under other option section";
       }else{
           located = "wrong location";
       }
       console.log(located);
       assert.equal(located, expected.location);
   });

   it('verify width', function () {
       let elem = $(selectors.QuestionsSection.mainContainer);
       let width = elem.getCssProperty('width').value;
       console.log(width);
       assert.equal(width, expected.width);
   });

   it('Verify position', function(){
      let elem = $(selectors.QuestionsSection.mainContainer);
      let display = elem.getCssProperty('display').value;
      console.log(display);
      assert.equal(display, expected.display);
   });

   for(const link in selectors.QuestionsSection.containers){
       let selector = selectors.QuestionsSection.containers[link];
       it(`Verify ${link} container float`, function () {
           let elem = $(selector);
           let float = elem.getCssProperty('float').value;
           console.log(float);
           assert.equal(float, expected.float);
       });

       it(`Verify ${link} container border`, function () {
          let elem = $(selector);
          let border = elem.getCssProperty('border-width').value;
          console.log(border);
          assert.equal(border, expected.borderWidth);
       });


   }
   for(const link in selectors.QuestionsSection.question){
       let selector = selectors.QuestionsSection.question[link];
       it(`Verify ${link} link has hover effect`, function () {
           let elem = $(selector);
           elem.moveToObject();
           let hover = elem.getCssProperty('text-decoration-line').value;
           console.log(hover);
           assert.equal(hover, expected.textDecorationHover);
       });

   }

   for(const link in selectors.QuestionsSection.question){
       let selector = selectors.QuestionsSection.question[link];

       it(`Verify ${link} link has no after click effect`, function () {
           browser.url('/');
           let elem = $(selector);
           elem.click();
           browser.url('/');
           let decor = elem.getCssProperty('text-decoration-line').value;
           console.log(decor);
           assert.equal(decor, expected.afterClickTExtDecoration);
       });
   }
});

describe('content design', function () {
    for(const link in selectors.QuestionsSection.header){
        let selector = selectors.QuestionsSection.header[link];
        it(`Verify ${link} header text size`, function () {
            let elem = $(selector);
            let size = elem.getCssProperty('font-size').value;
            console.log(size);
            assert.equal(size, expected.textSize);
        });

        it(`Verify ${link} header text font family`, function () {
           let elem = $(selector);
           let fontFamily = elem.getCssProperty('font-family').parsed.value.join(', ');
           console.log(fontFamily);
           assert.equal(fontFamily, expected.fontFamily);
        });

        it(`Verify ${link} header text font weight`, function () {
            let elem = $(selector);
            let weight = elem.getCssProperty('font-weight').value;
            console.log(weight);
            assert.equal(weight, expected.fontWeight);
        });

        it(`Verify ${link} header text color`, function () {
            let elem = $(selector);
            let color = elem.getCssProperty('color').parsed.hex;
            console.log(color);
            assert.equal(color, expected.textColor);
        });
    }

    for(const link in selectors.QuestionsSection.question) {
        let selector = selectors.QuestionsSection.question[link];
        it(`Verify ${link}  link color`, function () {
            let elem = $(selector);
            let color = elem.getCssProperty('color').parsed.hex;
            console.log(color);
            assert.equal(color, expected.linkColor);
        });
    }
});
