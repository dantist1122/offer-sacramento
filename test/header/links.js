const assert = require('chai');
const selectors = require('./../../test-data/selectors').header;
const expected = require("./../../test-data/expected");

describe('links', ()=>{
    it("Verify links design", ()=>{
       browser.url('/');
       let elem = $(selectors.CreateAccountLink);
       let fontColor = elem.getCssProperty('color').parsed.hex;
       let fontFamily = elem.getCssProperty('font-family').parsed.value;
       let fontSize = elem.getCssProperty('font-size').value;
       let fontWeight = elem.getCssProperty('font-weight').value;
       //browser.pause(1000);
       elem.moveToObject().pause(1000);
       let underlineHover = elem.getCssProperty('text-decoration-line').value;
       elem.moveToObject().buttonDown().pause(1000);
       let outlineColor = elem.getCssProperty('outline-color').value;
       console.log(fontColor, fontFamily, fontSize, fontWeight, underlineHover, outlineColor);
    });
});