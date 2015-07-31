var http = require('http');
var https = require('https');
var chalk = require('chalk');
var request = require('request');
var Usage = require('./usage');

module.exports = function (port) {
  http.createServer(function (req, res) {
    var userAgent = req.headers['user-agent'];
    request.get('http://www.useragentstring.com/?uas=' + userAgent + '&getJSON=all', function (err, xhr, body) {
      var json = JSON.parse(body);
      var browser = json.agent_name;
      var version = json.agent_version;
      var caniuse = Usage(browser, version);
      res.end(caniuse);
    });

  }).listen(port);
}
