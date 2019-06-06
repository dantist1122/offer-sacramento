const { assert } = require('chai');
const selectors = require('./../../test-data/selectors').languages;
const expected = require('./../../test-data/expected').languages;

describe('Other languages', function () {
    it('general color', function () {
        browser.url('/');
       let elem = $(selectors.general.mainContainer);
       let color = elem.getCssProperty("background-color").parsed.hex;
       console.log(color);
       assert.equal(color, expected.general.color)
    });

    it('general width', function () {
        let elem = $(selectors.general.mainContainer);
        let width = elem.getCssProperty("width").value;
        console.log(width);
        assert.equal(width, expected.general.width)

    });
});

describe('header design', function () {
  it('align', function () {
   browser.url('/');
   let elem = $(selectors.general.header);
   let align = elem.getCssProperty('text-align').value;
   console.log(align);
   assert.equal(align, expected.header.align);
  });

  it('content', function () {
     let elem = $(selectors.general.header);
     let content = elem.getText();
     console.log(content);
     assert.equal(content, expected.header.content);
  });

  it('font family', function () {
     let elem = $(selectors.general.header);
     let fontFamily = elem.getCssProperty('font-family').value;
     console.log(fontFamily);
     assert.equal(fontFamily, expected.header.fontFamily);
  });

  it('font size', function () {
      let elem = $(selectors.general.header);
      let fontSize = elem.getCssProperty('font-size').value;
      console.log(fontSize);
      assert.equal(fontSize, expected.header.fontSize);
  });
    it('font weight', function () {
        let elem = $(selectors.general.header);
        let fontWeight = elem.getCssProperty('font-weight').value;
        console.log(fontWeight);
        assert.equal(fontWeight, expected.header.fontWeight);
    });

    it('color', function () {
        let elem = $(selectors.general.header);
        let color = elem.getCssProperty('color').parsed.hex;
        console.log(color);
        assert.equal(color, expected.header.color);
    });
});

describe.only('list of languages', function () {
    browser.url('/');

   for(let i =0; i<16; i++) {
       it('width of column', function () {
           let elem = $(selectors.general.listOfLanguages);
           let width = elem.$$('div')[i].getCssProperty('width').value;
           console.log(width);
           assert.equal(width, expected.listOfLanguages.width);
       });

       it('margin of column', function () {
           let elem = $(selectors.general.listOfLanguages);
           let margin = elem.$$('div')[i].getCssProperty('margin').value;
           console.log(margin);
           assert.equal(margin, expected.listOfLanguages.margin);
       });
   }
   for (const link in selectors.languages) {
       let selector = selectors.languages[link];
       it('color of column', function () {
           let elem = $(selector);
           let color = elem.getCssProperty('color').parsed.hex;
           console.log(color);
           assert.equal(color, expected.listOfLanguages.color);
       });
       it('font size of column', function () {
           let elem = $(selector);
           let fontSize = elem.getCssProperty('font-size').value;
           console.log(fontSize);
           assert.equal(fontSize, expected.listOfLanguages.fontSize);
       });
       it('font family of column', function () {
           let elem = $(selector);
           let fontFamily = elem.getCssProperty('font-family').value;
           console.log(fontFamily);
           assert.equal(fontFamily, expected.listOfLanguages.fontFamily);
       });
       it('font weight of column', function () {
           let elem = $(selector);
           let fontWeight = elem.getCssProperty('font-weight').value;
           console.log(fontWeight);
           assert.equal(fontWeight, expected.listOfLanguages.fontWeight);
       });

   }
    let listOfLanguages = "";
    for (const link in selectors.languages) {
        let selector = selectors.languages[link];
        it('content of column', function () {
            let elem = $(selector);
            let content = elem.getText();
            listOfLanguages += content + ', ';
            console.log(content);
            if(listOfLanguages.length > 320) {
                assert.equal(listOfLanguages, expected.listOfLanguages.languagesContent);
            }
        });
    }

    it('verify background color', function () {
        browser.url('/');
        let elem = $(selectors.boardWithInformation);
        let color = elem.getCssProperty("background-color").parsed.hex;
        console.log(color);
        assert.equal(color, expected.boardWithInformation.backgroundColor)
    });
    it('align', function () {
        let elem = $(selectors.boardWithInformation);
        let align = elem.getCssProperty('text-align').value;
        console.log(align);
        assert.equal(align, expected.boardWithInformation.textAlign);
    });
    it('font size of column', function () {
        let elem = $(selectors.boardWithInformation);
        let fontSize = elem.getCssProperty('font-size').value;
        console.log(fontSize);
        assert.equal(fontSize, expected.boardWithInformation.fontSize);
    });
    it('font family of column', function () {
        let elem = $(selectors.boardWithInformation);
        let fontFamily = elem.getCssProperty('font-family').value;
        console.log(fontFamily);
        assert.equal(fontFamily, expected.boardWithInformation.fontFamily);
    });
    it('color of column', function () {
        let elem = $(selectors.boardWithInformation);
        let color = elem.getCssProperty('color').parsed.hex;
        console.log(color);
        assert.equal(color, expected.boardWithInformation.color);
    });

});