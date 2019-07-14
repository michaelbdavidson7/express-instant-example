var express = require('express');
var util = require('util');
var fs = require('fs');
var app = express();

// var morgan = require('morgan');
// // var logger = morgan('combined')
// app.use(morgan('common', {
//     stream: fs.createWriteStream('./access.log', { flags: 'a' })
// }));
// app.use(morgan,('dev'))

var logger = require('morgan');

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.use(logger('combined', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(logger('dev'));
// var log4js = require('log4js');

// log4js.configure({
//     appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
//   });
// var logger = log4js.getLogger();
// logger.level = 'debug';
// logger.debug("Some debug messages");

app.get('/', function (req, res) {
    console.log('Hello world requested');
    res.send('Hello World');
})

app.get('/server_check', function (req, res) {
    // throw new Error()
    console.log(util.inspect('Server check requested'));
    res.send('Server check');
})



var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})