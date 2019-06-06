const { assert } = require('chai');
const selectors = require('./../../test-data/selectors');
const expected = require('./../../test-data/expected');


describe('warning', function () {
    it('verify background color', function () {
        browser.url('/');
        let elem = $(selectors.warning.main);
        let color = elem.getCssProperty("background-color").parsed.hex;
        console.log(color);
        assert.equal(color, expected.warning.backgroundColor)
    });

    it('font size ', function () {
        let elem = $(selectors.warning.main);
        let fontSize = elem.getCssProperty('font-size').value;
        console.log(fontSize);
        assert.equal(fontSize, expected.warning.fontSize);
    });
    it('font family ', function () {
        let elem = $(selectors.warning.main);
        let fontFamily = elem.getCssProperty('font-family').value;
        console.log(fontFamily);
        assert.equal(fontFamily, expected.warning.fontFamily);
    });
    it('color ', function () {
        let elem = $(selectors.warning.main);
        let color = elem.getCssProperty('color').parsed.hex;
        console.log(color);
        assert.equal(color, expected.warning.color);
    });

    it('font style ', function () {
        let elem = $(selectors.warning.text);
        let fontStyle = elem.getCssProperty('font-style').value;
        console.log(fontStyle);
        assert.equal(fontStyle, expected.warning.fontStyle);
    });

    it('font style ', function () {
        let elem = $(selectors.warning.main);
        let width = elem.getCssProperty('width').value;
        console.log(width);
        assert.equal(width, expected.warning.width);
    });
});