const {assert} = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expected').IndividualAndFamilyGetStartedEng;


describe('Text', function () {
   it('Verify text content', function () {
       browser.url('/');
       let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText);
       let textContent = elem.getText();
       console.log(textContent);
       assert.equal(textContent, expected.text.textContent, "content is different");

   });

    it('Verify  text-align', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText);
        let textAlign = elem.getCssProperty('text-align').value;
        console.log(textAlign);
        assert.equal(textAlign, expected.text.textAlign, "title text is not aligned right")
    });

    it('Verify  font-size', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText);
        let fontSize = elem.getCssProperty('font-size').value;
        console.log(fontSize);
        assert.equal(fontSize, expected.text.fontSize, "font-size is different");
    });

    it('Verify  font-weight', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText);
        let fontWeight = elem.getCssProperty('font-weight').value;
        console.log(fontWeight);
        assert.equal(fontWeight, expected.text.fontWeight, 'font-weight is different');
    });

    it('Verify font-family', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText);
        let fontFamily = elem.getCssProperty('font-family').parsed.value.join(', ');
        console.log(fontFamily);
        assert.equal(fontFamily, expected.text.fontFamily, "font-family is different");
    });

    it('Verify font-color', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText);
        let fontColor = elem.getCssProperty('color').value;
        console.log(fontColor);
        assert.equal(fontColor, expected.text.fontColor, "color is different");
    });
});