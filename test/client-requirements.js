const {assert} = require('chai');

describe('Page opening', function () {
    it('get title', function(){
        browser.url('/');
        let title = browser.getTitle();
        browser.pause(5000);
        console.log(title + ' it works');
        assert.equal(title, 'Health-e-Arizona > Home', 'Title is incorrect');
    });

    it('get page url', function(){
       //browser.url('/');
       let baseUrl = browser.getUrl();
       //browser.pause(5000);
       console.log(baseUrl);
       assert.equal(baseUrl, 'https://www.healthearizonaplus.gov/Default/Default.aspx', 'Url is incorrect')
    });
});