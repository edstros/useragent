var cheerio = require('cheerio');
var request = require('request');

var Usage = function(browser, version) {
  var title;
  request.get('http://caniuse.com/' + 'flexbox', function(err, xhr, body) {
     $ = cheerio.load(body);

     var parse = $(body).find('h4.browser--' + browser).next().children().each(function() {
        if($(this).text() == version) {
          //console.log($(this).attr('title'))
          title = $(this).attr('title');
          return title;
        }
     });

   });
  //console.log(title)
  //return title;
}

module.exports = Usage;
