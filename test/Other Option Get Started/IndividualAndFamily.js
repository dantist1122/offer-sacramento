const {assert} = require('chai');
const selectors = require("./../../test-data/selectors").OtherOptionsGetStarted;
const expected = require('./../../test-data/expected').OtherOptionsGetStarted.IndividualAndFamily;

describe('General', function () {

   it('Verify width', function(){
       browser.url('/');
       let elem = $(selectors.Containers.right);
       let width = elem.getCssProperty('width').value;
       console.log(width);
       assert.equal(width, expected.general.width, "width right container is different");
   });

   it('Verify padding right', function () {
       let elem = $(selectors.Containers.right);
       let paddingRight = elem.getCssProperty('padding-right').value;
       console.log(paddingRight);
       assert.equal(paddingRight, expected.general.paddingRight, "padding right is different");
   });
});

describe('Image', function () {

    it(`Verify image source`, function () {
        browser.url('/');
        let elem = $(selectors.Images.right);
        let source = elem.getAttribute('src');
        console.log(source);
        assert.equal(source, expected.image.source, 'image source is different');
    });
    for(const link in selectors.Images) {
        let selector = selectors.Images[link];
    it(`Verify ${link} image size`, function () {
        let elem = $(selector);
        let width = elem.getCssProperty('width').parsed.value;
        let height = elem.getCssProperty('height').parsed.value;
        let size = width + '*' + height + 'px'
        console.log(size);
        assert.equal(size, expected.image.size, "image size is different");
    });
    }
    it(`Verify  border`, function () {
        let elem = $(selectors.Images.right);
        let border = elem.getCssProperty('border').value;
        console.log(border);
        assert.equal(border, expected.image.border, 'border is different');
    });
});

describe('Title', function () {
    it('Verify title content', function () {
        let elem = $(selectors.title.right);
        let title = elem.getText();
        console.log(title);
        assert.equal(title, expected.title.content, "title content is different");
    });

    for(const link in selectors.title){
        let selector = selectors.title[link];
        it(`Verify ${link} title text float`, function () {
            let elem = $(selector);
            let float = elem.getCssProperty('float').value;
            console.log(float);
            assert.equal(float, expected.title.float, "float is different");
        });

        it(`Verify ${link} title font size`, function () {
            let elem = $(selector);
            let fontSize = elem.getCssProperty('font-size').value;
            console.log(fontSize);
            assert.equal(fontSize, expected.title.fontSize, 'font size is different');
        });

        it(`Verify ${link} title font weight`, function () {
           let elem = $(selector);
           let fontWeight = elem.getCssProperty('font-weight').value;
           console.log(fontWeight);
           assert.equal(fontWeight, expected.title.fontWeight, "font weight is different");
        });

        it(`Verify ${link} title font family`, function () {
             let elem = $(selector);
             let fontFamily = elem.getCssProperty('font-family').value;
             console.log(fontFamily);
             assert.equal(fontFamily, expected.title.fontFamily, 'font family is different');
        });

        it(`Verify ${link} title color`, function () {
           let elem = $(selector);
           let color = elem.getCssProperty('color').parsed.hex;
           console.log(color);
           assert.equal(color, expected.title.color, "color is different");
        });

        it(`Verify ${link} title text transform`, function () {
           let elem =$(selector);
           let textTransform = elem.getCssProperty('text-transform').value;
           console.log(textTransform);
           assert.equal(textTransform, expected.title.textTransform, "text transform  is different");
        });
    }
});

describe('Description', function () {
    it('Verify text content', function () {
       let elem = $(selectors.Descriptions.right);
       let content = elem.getText();
       console.log(content);
       assert.equal(content, expected.description.content, "content is different");
    });
    for(const link in selectors.Descriptions){
        let selector = selectors.Descriptions[link];
        it(`Verify ${link} description font weight`, function () {
           let elem = $(selector);
           let fontWeight = elem.getCssProperty('font-weight').value;
           console.log(fontWeight);
           assert.equal(fontWeight, expected.description.fontWeight, 'font weight is different');
        });

        it(`Verify ${link} description font family`, function () {
           let elem = $(selector);
           let fontFamily = elem.getCssProperty('font-family').parsed.value.join(', ');
           console.log(fontFamily);
           assert.equal(fontFamily, expected.description.fontFamily, 'font family is different');
        });

        it(`Verify ${link} description font size`, function () {
           let elem = $(selector);
           let fontSize = elem.getCssProperty('font-size').value;
           console.log(fontSize);
           assert.equal(fontSize, expected.description.fontSize, 'font size is different');
        });

        it(`Verify ${link} description color`, function () {
           let elem = $(selector);
           let color = elem.getCssProperty('color').parsed.hex;
           console.log(color);
           assert.equal(color, expected.description.color, 'color is different');
        });
    }
});

describe('Link', function () {
    for(const link in selectors.Links) {
        let selector = selectors.Links[link];

        it(`Verify ${link} link text content`, function () {
            let elem = $(selector);
            let linkContent = elem.getText();
            console.log(linkContent);
            assert.equal(linkContent, expected.link.content, 'link content is different');
        });
    }

    it('Verify that link redirect properly', function () {
       let elem = $(selectors.Links.right);
       elem.click();
       let url = browser.getUrl();
       console.log(url);
       browser.url('/');
       assert.equal(url, expected.link.redirectUrl, 'redirect to different page');
    });

    for(const  link in selectors.Links){
        let selector = selectors.Links[link];
        it(`Verify ${link} link font weight`, function () {
            let elem = $(selector);
            let fontWeight = elem.getCssProperty('font-weight').value;
            console.log(fontWeight);
            assert.equal(fontWeight, expected.link.fontWeight, 'font weight is different');
        });

        it(`Verify ${link} link font family`, function () {
            let elem = $(selector);
            let fontFamily = elem.getCssProperty('font-family').value;
            console.log(fontFamily);
            assert.equal(fontFamily, expected.link.fontFamily, 'font family is different');
        });

        it(`Verify ${link} link font size`, function () {
            let elem = $(selector);
            let fontSize = elem.getCssProperty('font-size').value;
            console.log(fontSize);
            assert.equal(fontSize, expected.link.fontSize, 'font size is different');
        });

        it(`Verify ${link} link color`, function () {
            let elem = $(selector);
            let color = elem.getCssProperty('color').parsed.hex;
            console.log(color);
            assert.equal(color, expected.link.color, 'color is different');
        });

        it(`Verify ${link} link text transform`, function () {
            let elem =$(selector);
            let textTransform = elem.getCssProperty('text-transform').value;
            console.log(textTransform);
            assert.equal(textTransform, expected.link.textTransform, "text transform  is different");
        });

        it(`Verify that ${link} link has hover effect`, function(){
           let elem = $(selector);
           elem.moveToObject();
           let textDecoration = elem.getCssProperty('text-decoration-line').value;
           console.log(textDecoration);
           assert.equal(textDecoration, expected.link.textDecorationHover, 'hover effect is different');
        });

        it(`Verify that ${link} link has outline color effect when you click`, function(){
            let elem = $(selector);
            elem.moveToObject().buttonDown();
            let outlineColor = elem.getCssProperty('outline-color').value;
            browser.url('/');
            console.log(outlineColor);
            assert.equal(outlineColor, expected.link.outlineColor, 'hover effect is different');
        });
        it(`Verify that ${link} link has outline width effect when you click`, function(){
            let elem = $(selector);
            elem.moveToObject().buttonDown();
            let outlineWidth = elem.getCssProperty('outline-width').value;
            browser.url('/');
            console.log(outlineWidth);
            assert.equal(outlineWidth, expected.link.outlineWidth, 'hover effect is different');
        });
    }
});











