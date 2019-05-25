const {assert} = require('chai');

describe('Header', function(){
   it('Go to home page', function(){
      browser.url('/');
      let baseUrl = browser.getUrl();
      console.log(baseUrl);
      assert.equal(baseUrl, 'https://www.healthearizonaplus.gov/Default/Default.aspx', 'url is not correct')
   });

   it('Verify that Header is the first element', function(){
      let elem  = $('.header-container');
      let locationY  = elem.getLocation('y');
      console.log(locationY);
      assert.equal(locationY, 0, 'The Header is not on the very top')
   });

   it('Verify Header width', function(){
      let elem = $('.header-container');
      let headerWidth = elem.getCssProperty('width').value;
      console.log(headerWidth);
      assert.equal(headerWidth, '1012px', 'Header width is not 1012px')
   });
});