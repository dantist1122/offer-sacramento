const {assert} = require('chai');
const selectors = require("./../../test-data/selectors").OtherOptionsGetStarted;
const expected = require('./../../test-data/expected').OtherOptionsGetStarted.communityAssistor;

describe('General', function () {

    it('Verify width', function(){
        browser.url('/');
        let elem = $(selectors.Containers.right);
        let width = elem.getCssProperty('width').value;
        console.log(width);
        assert.equal(width, expected.general.width, "width right container is different");
    });
});

describe('Image', function () {

    it(`Verify image source`, function () {
        browser.url('/');
        let elem = $(selectors.Images.left);
        let source = elem.getAttribute('src');
        console.log(source);
        assert.equal(source, expected.image.source, 'image source is different');
    });
});

describe('Title', function () {
    it('Verify title content', function () {
        let elem = $(selectors.title.left);
        let title = elem.getText();
        console.log(title);
        assert.equal(title, expected.title.content, "title content is different");
    });
});

describe('Description', function () {
    it('Verify text content', function () {
        let elem = $(selectors.Descriptions.left);
        let content = elem.getText();
        console.log(content);
        assert.equal(content, expected.description.content, "content is different");
    });
});

describe('Link', function () {
    it('Verify that link redirect properly', function () {
        let elem = $(selectors.Links.left);
        elem.click();
        let url = browser.getUrl();
        console.log(url);
        browser.url('/');
        assert.equal(url, expected.link.redirectUrl, 'redirect to different page');
    });
});