var cheerio = require('cheerio');
var request = require('request');

var Usage = function(browser, version) {
  request.get('http://caniuse.com/' + 'flexbox', function(err, xhr, body) {
     $ = cheerio.load(body);

     return($(body).find('h4 .browser--' + browser).text())

   });
}

module.exports = Usage;
