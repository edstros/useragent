var http = require('http');
var https = require('https');
var chalk = require('chalk');
var request = require('request');
var cheerio = require('cheerio');
var Usage = require('./usage');

module.exports = function (port) {
  http.createServer(function (req, res) {
    var userAgent = req.headers['user-agent'];

    request.get('http://www.useragentstring.com/?uas=' + userAgent + '&getJSON=all', function (err, xhr, body) {
      var json = JSON.parse(body);
/*<<<<<<< HEAD*/
      var browser = json.agent_name.toLowerCase;
      var version = parseInt(json.agent_version);
      var caniuse = Usage(browser, version);
      res.end(caniuse);
/*=======
      var browser = json.agent_name.toLowerCase();
      var version = parseInt(json.agent_version);

    request.get('http://caniuse.com/' + 'flexbox', function(err, xhr, body) {
     $ = cheerio.load(body);

     var parse = $(body).find('h4.browser--' + browser).next().children().each(function() {
        if($(this).text() == version) {
          //console.log($(this).attr('title'))
          var title = $(this).attr('title');
          res.end(title);
        }
      });
    });

      // res.end(title);
>>>>>>> 172d92ddb99becc7bac19e4b0afd9ac16195ba95*/
    });


  }).listen(port);
}
