const {assert }= require('chai');
const selectors = require('./../../test-data/selectors').headerEng.links;
const expected = require("./../../test-data/expected").headerEng.links;


let exp = Object.values(expected.design);

    describe('Verify links design', () => {
        for (const link in selectors) {
            let selector = selectors[link];
            let fontColor, fontFamily, fontSize, fontWeight, underlineHover, outlineColor, outlineWidth;
            it(`Verify ${link} design `, function () {
                browser.url('/');
                console.log(selector);
                let elem = $(selector);
                fontColor = elem.getCssProperty('color').parsed.hex;
                fontFamily = elem.getCssProperty('font-family').parsed.value.join(', ');
                fontSize = elem.getCssProperty('font-size').value;
                fontWeight = elem.getCssProperty('font-weight').value;
                elem.moveToObject();
                underlineHover = elem.getCssProperty('text-decoration-line').value;
                elem.moveToObject().buttonDown();
                outlineColor = elem.getCssProperty('outline-color').value;
                outlineWidth = elem.getCssProperty('outline-width').value;
                console.log(fontColor, fontFamily, fontSize, fontWeight, underlineHover, outlineColor, outlineWidth);
                //browser.url('/');
                assert.equal(fontColor+fontFamily+fontSize+fontWeight+underlineHover+outlineColor+outlineWidth, exp.join('') , "design is incorrect");
            });
        }
    });

