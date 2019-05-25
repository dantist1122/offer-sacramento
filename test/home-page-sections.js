const {assert} = require('chai');


describe('Home page Sections', function(){
   it('Header exists', function(){
       browser.url('/');
       let element = $('.header-container');
       browser.pause(3000);
       let header = element.isExisting();
       console.log(header);
       assert.isTrue(header, 'Header is not exists')
   });

   it('Individual/Family Get started', function(){
      let elem = $('.banner');
      let banner = elem.isExisting();
      console.log(banner);
      assert.isTrue(banner, 'Banner is not exist' )
   });

   it('Other option get started', function(){
      let elem = $('.section-panel');
      let otherOption = elem.isExisting();
      console.log(otherOption);
      assert.isTrue(otherOption, 'Other option are not exist');
   });

   it('Question section', function(){
      let elem = $('.section-panel1');
      let QuestionSection = elem.isExisting();
      console.log(QuestionSection);
      assert.isTrue(QuestionSection, 'Question section is not exists')
   });

   it('Languages section', function(){
      let elem = $('div.header-menu div.announcement div#container div a#HyperLink4');
      console.log(elem.getText());
      let languagesSection = elem.isExisting();
      assert.isTrue(languagesSection, 'Languages sections is not exists')
   });

   it('Warning section', function(){
      let elem = $('.warningannouncement');
      let warningSection = elem.isExisting();
      console.log(warningSection);
      assert.isTrue(warningSection, 'Warning section is not existing');
   });

   it('Announcements', function(){
      let elem = $('.welcome');
      let announcement = elem.isExisting();
      console.log(announcement);
      assert.isTrue(announcement, 'Announcements is not exists');
   });

   it('Arizona logo', function(){
      let elem = $('#div_Arizona_Logo');
      let arizonaLogo = elem.isExisting();
      console.log(arizonaLogo);
      assert.isTrue(arizonaLogo, 'Arizona logo is not exists');
   });

   it('Footer', function(){
      let elem = $('.footer');
      let footer = elem.isExisting();
      console.log(footer);
      assert.isTrue(footer, 'Footer is not exists');
   });

});

