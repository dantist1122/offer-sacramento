const {assert} = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expected').IndividualAndFamilyGetStartedEng;



describe('Title', function () {
    it('Verify that in the right cell there are 3 lines: 1 line - title, 2 line - text, 3 line button', function () {
        browser.url('/');
        let elem1 = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle).getTagName();
        let elem2 = $(selectors.IndividualAndFamilyGetStartedEng.rightCellText).getTagName();
        let elem3 = $(selectors.IndividualAndFamilyGetStartedEng.rightCellImage).getTagName();
        console.log(elem1, elem2, elem3);
        assert.equal(elem1+' '+elem2+' '+elem3, expected.title.rightCellContent, 'content is different')
    });

    it('Verify  title content', function () {
       let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle);
       let titleContent = elem.getText();
       console.log(titleContent);
       assert.equal(titleContent, expected.title.rightCellTitleContent, "title is different")
    });

    it('Verify  text-align', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle);
        let textAlign = elem.getCssProperty('text-align').value;
        console.log(textAlign);
        assert.equal(textAlign, expected.title.textAlign, "title text is not aligned right")
    });

    it('Verify  font-size', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle);
        let fontSize = elem.getCssProperty('font-size').value;
        console.log(fontSize);
        assert.equal(fontSize, expected.title.fontSize, "font-size is different");
    });

    it('Verify  font-weight', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle);
        let fontWeight = elem.getCssProperty('font-weight').value;
        console.log(fontWeight);
        assert.equal(fontWeight, expected.title.fontWeight, 'font-weight is different');
    });

    it('Verify font-family', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle);
        let fontFamily = elem.getCssProperty('font-family').value;
        console.log(fontFamily);
        assert.equal(fontFamily, expected.title.fontFamily, "font-family is different");
    });

    it('Verify font-color', function () {
        let elem = $(selectors.IndividualAndFamilyGetStartedEng.rightCellTitle);
        let fontColor = elem.getCssProperty('color').parsed.hex;
        console.log(fontColor);
        assert.equal(fontColor, expected.title.fontColor, "color is different");
    });
});