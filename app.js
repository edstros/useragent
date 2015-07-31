#!/usr/bin/env node

var chalk = require('chalk');
var port = process.env.PORT || 1337;
require('./lib/server')(port);

console.log('server running on' + ' ' + chalk.magenta.bold.underline("http://localhost:" + port));
