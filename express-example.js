var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Hello world requested');
    res.send('Hello World');
})

app.get('/server_check', function (req, res) {
    console.log('Server check requested');
    res.send('Server check');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})