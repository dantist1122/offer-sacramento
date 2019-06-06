const language = ['english', "spanish"];


module.exports = function () {
    let res = [];
    language.forEach(function(){
        res.push({ maxInstances: 1,
            browserName: 'chrome',
            specs:['./test/languages/functionality.js'],
            'goog:chromeOptions': {
                prefs: {
                    language: 'english'
                }
            }})
    });
    return res;
};