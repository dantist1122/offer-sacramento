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

   it('Verify logo', function(){
      let elem = $('div.logo a img')
      let logo = $('div.logo')
      let imgSource = elem.getAttribute('src');
      let position;
      console.log(imgSource);
      if(imgSource === 'https://www.healthearizonaplus.gov/Default/images/health-e-arizona-plus-logo.png'){
         position = logo.getCssProperty('position').value;
      }
      let dis = elem.getCssProperty('display').value;
      console.log(dis);
      assert.equal(position, 'absolute', 'logo is not on the left')
   });

   it('verify first Right rows in header', function(){
      let elem = $('div.header-wrapper');
      let firstRow = elem.$$('div.header-menu')[0].$('ul').getCssProperty('float').value;
      console.log(firstRow);
      assert.equal(firstRow, 'right', 'element is not on the right')
   });

   it('Verify second right row in header', function(){
      let elem = $('div.header-wrapper');
      let secondRow = elem.$$('div.header-menu')[1].$('ul').getCssProperty('float').value;
      console.log(secondRow);
      assert.equal(secondRow, 'right', 'element is not on the right')
   });

   it('Verify first row content', function(){
      let elem = $('div.header-wrapper');
      let arr = [];
      //let rowContent = elem.$$('div.header-menu')[0].$$('ul li a')[0].getText();
      for(let i = 0; i<elem.$$('div.header-menu')[0].$$('ul li a').length; i++){
         arr.push(elem.$$('div.header-menu')[0].$$('ul li a')[i].getText());
      }
      console.log(arr);
      assert.equal(arr.join(', '), 'Create Account, Returning User Log In, Help, FAQs', 'content is different')
   });

   it('verify spanish version first row content', function(){
       let spanishLanguageButton = $('#lnk_Spanish');
       spanishLanguageButton.click();
       //browser.pause(5000);
      let elem = $('div.header-wrapper');
      let arr = [];
      //let rowContent = elem.$$('div.header-menu')[0].$$('ul li a')[0].getText();
      for(let i = 0; i<elem.$$('div.header-menu')[0].$$('ul li a').length; i++){
         arr.push(elem.$$('div.header-menu')[0].$$('ul li a')[i].getText());
      }
      console.log(arr);
      assert.equal(arr.join(', '), 'Crear una cuenta, Inicio de la sesión del usuario, Ayuda, FAQs', 'content is different')
   });

   it('Verify that Links are aligned vertically and separated by a pipe separator', function(){
      let backToEnglish = $('#lnk_English');
      backToEnglish.click();
      //browser.pause(3000);
      let elem = $('div.header-menu ul li');
      let propertyFloat = elem.getCssProperty('float').value;
      let propertyBorder = elem.getCssProperty('border-right').value;
      console.log(propertyFloat, propertyBorder);
      assert.equal(propertyFloat+" "+propertyBorder, 'left 1px solid rgb(255, 255, 255)', 'there is no separator')
   });

   it('Verify that Second row includes “English”|“Español” toggle in English version', function(){
      let elem = $('div.header-wrapper');
      let arr = [];
      //let rowContent = elem.$$('div.header-menu')[0].$$('ul li a')[0].getText();
      for(let i = 0; i<elem.$$('div.header-menu')[1].$$('ul li a').length; i++){
         arr.push(elem.$$('div.header-menu')[1].$$('ul li a')[i].getText());
      }
      console.log(arr);
      assert.equal(arr.join(', '), 'English, Español', 'Content is different')
   });

   it('Verify that second row includes “Inglés”|“Español” toggle in Spanish version', function(){
      let spanishLanguageButton = $('#lnk_Spanish');
      spanishLanguageButton.click();
      let elem = $('div.header-wrapper');
      let arr = [];
      //let rowContent = elem.$$('div.header-menu')[0].$$('ul li a')[0].getText();
      for(let i = 0; i<elem.$$('div.header-menu')[1].$$('ul li a').length; i++){
         arr.push(elem.$$('div.header-menu')[1].$$('ul li a')[i].getText());
      }
      console.log(arr);
      assert.equal(arr.join(', '), 'Inglés, Español', 'Content are not tha same')
   });
});