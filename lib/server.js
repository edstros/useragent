var http = require('http');
var https = require('https');
var chalk = require('chalk');
var request = require('request');
var cheerio = require('cheerio');

module.exports = function (port) {
  http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/topnews') { //if is a routing engine if this, then go to what follows
      request.get('http://reddit.com', function (err, xhr, body) {
        res.end($(body).find('#siteTable a.title').first().text());
      });
    } else if (req.method === 'GET' && req.url === '/news') { //if is a routing engine if this, then go to what follows
      request.get('http://reddit.com', function (err, xhr, body) {
        $ = cheerio.load(body);
        $('a').attr('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        res.end($.html());
      });
    } else if (req.method === 'GET' && req.url === '/weather') { //if is a routing engine if this, then go to what follows
      res.writeHeader(200, { //200 is the 'success' response code
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' //so that it can be seen on codepen
      });
      //http.get('http://swapi.co/api/films/')
      https.get('https://api.forecast.io/forecast/d9457495596bb7c73b77f404895cdcd9/37.8267,-122.423')
        .on('response', function (xhr) {
          xhr.pipe(res);
          //  ^^^^^^^ this does what the function inthe star wars call below does
          //just pipes the response from the server instead of parsing it as below
        });
    }

    else if (req.method === 'GET' && req.url === '/starwarsmovies') {
      request('http://swapi.co/api/films/', function (err, xhr, body) {
        var data = JSON.parse(body);
        data.results.forEach(function (r) {
          res.write(r.title + '\n');
        });
        res.end();
      });
    } else {
      res.writeHead(403);
      res.end('Access Denied!');
    }
  }).listen(port);
}
