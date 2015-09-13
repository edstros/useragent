var cheerio = require('cheerio');
var request = require('request');

/*<<<<<<< HEAD*/
var Usage = function (browser, version) {
  // var browser = browser.toLowerCase();
  console.log(version)
  request.get('http://caniuse.com/' + 'flexbox', function (err, xhr, body) {
    $ = cheerio.load(body);
    //console.log($(body).find('h4').find('.browser--' + browser).attr('class'))
    var li = [];
    // console.log(li.each(function(i, elem) {
    //    // if(version === $(this).text()) {
    //      //this.title
    //      console.log($(this)[0])
    //    // }
    //  }))
    var parse = $(body).find('h4.browser--' + browser).next('ol').find('li').each(function (i, elem) {
      li[i] = $(this).text();
      console.log(li[i])
      if (version === (li[i] * 1)) {
           console.log(li[i])
         console.log(li.attribs.title)
      }
    })
  })
/*=======
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
>>>>>>> 172d92ddb99becc7bac19e4b0afd9ac16195ba95*/
}
/*
var Usage = function (browser, version) {
  console.log(version);
  request.get('http://caniuse.com/' + 'flexbox', function (err, xhr, body) {
    $ = cheerio.load(body);
    //    return($(body).find('h4 .browser--' + browser).text());
    console.log($(body).find('h4.browser--' + browser).next('ol.li').each(function (i, el) {
         li[i] = $(this).text();
         console.log(li[i])
         if(version === (li[i] * 1)) {
         //   console.log(li[i])
         // console.log(li.attribs.title)
         }
     })
                )
    console.log(li)
    // li.forEach(function(i, elem) {
    //    if(version === $(this)) {
    //      console.log(li.attribs.title)
    //    }
    // })
    //console.log($(body).find('h4.browser--' + browser).attr('class'))
     return 'yes'
  });
}
*/
module.exports = Usage;
