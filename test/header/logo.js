const { assert } = require('chai');
const expected = require("./../../test-data/expected").headerEng.logo;
const selector = require ('./../../test-data/selectors').headerEng;

describe('logo', function(){
   // it('verify logo', function(){
   //    browser.url('/');
   //    let elem = $('.logo a img');
   //    let url = elem.getAttribute('src');
   //    browser.url(url);
   //    browser.pause(3000);
   //
   //    browser.saveElementScreenshot(elem,'./images/logo4.png');
   //    console.log(url);
   //
   // });

   it('get size of the logo', function(){
      browser.url('/');
      let widthLogo = $(selector.logo).getCssProperty('width').value;
      let heightLogo = $(selector.logo).getCssProperty('height').value;
      console.log(widthLogo, heightLogo);
      assert.equal(widthLogo +'*'+ heightLogo, expected.width +'*'+ expected.height , "size logo is different");
   });
   it('Verify the image source', function(){
      let imageSource = $(selector.logo).getAttribute("src");
      console.log(imageSource);
      assert.equal(imageSource, expected.source, "image source is different");
   });
});


