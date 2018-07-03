var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var path    = require('path');

app.set('port', 3000);
app.use(express.json());
app.use('/script', express.static(path.join(__dirname, 'script')));
app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/socket.io.js', function(req, res){
  res.sendFile(__dirname + '/socket.io.js');
});

/*
    io : global
    socket : client
 */

io.on('connection', function(socket){
    console.log('a user connected ' + socket.id);

    // to #client
    socket.emit('chat message', "hi :" + socket.id);

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
});

http.listen(app.get('port'), function(){
  console.log('listening on *:3000');
});






//var express = require('express');
//var app = express();

//var http    = require('http').Server(app);
//var io      = require('socket.io')(http);
//var path    = require('path');

//app.get('/', function(req, res){
//  res.sendFile(__dirname + '/index.html');
//});

////app.get('/socket.io.js', function(req, res){
////  res.sendFile(__dirname + '/socket.io.js');
////});

////io.on('connection', function(socket){
////  console.log('a user connected');
////});

//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});



//var routes  = require('./routes');
//var user    = require('./routes/user');

// all environments
//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));

//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
