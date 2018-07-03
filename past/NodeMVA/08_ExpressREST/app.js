
var express = require('express');
var viewHome = require('./views/index');
var viewUser = require('./views/user');
var http    = require('http');

var app = express();

app.set('port', process.env.PORT || 8080);
app.get('/', viewHome.home);
app.get('/user', viewUser.user);

app.get('/users/:userId/books/:bookId', function (req, res) {
    //res.send(req.params);
    res.send(req.params["userId"]);
})

//app.listen(8080);
//app.listen(process.env.PORT || 8080);

var server = http.createServer(app).listen(app.get('port'), function () {

    console.log('Express server listening on port ' + app.get('port'));
    console.log('Express server listening on url ' + app.request.url);
});


server.addListener('connection', function(socket){  
    console.log('connected...');
    
});

server.addListener('close', function(socket){  
    console.log('close...');

});

server.addListener('listening', function(socket){  
    //console.log(socket.server.request.url);

});


function onRequest(request, response) {
    //var pathname = url.parse(request.url).pathname;
    console.log('request for ' + request.url + ' received.');

    //route(handle, pathname, response);
}

//http.createServer(app).addListener()
