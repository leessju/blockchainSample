//var app = require('express')();
//var http = require('http').Server(app);

////app.get('/', function(req, res){
////  res.send('<h1>Hello world</h1>');
////    console.log(__dirname);
////});

//app.get('/', function(req, res){
//    console.log('listening on *:3000');
    
//    res.sendFile(__dirname + '/index.html');
//    console.log(__dirname + '/index.html');
//});

//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//io.on('connection', function(socket){
//  console.log('a user connected');
//});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});



//var app  = require('express')();
//var http = require('http').Server(app);
//var io   = require('socket.io')(http);

//app.get('/', function(req, res){
//    res.sendFile(__dirname + '/index.html');
//});

//io.on('connection', function(socket){
//  console.log('a user connected');
//  socket.on('disconnect', function(){
//    console.log('user disconnected');
//  });
//});

//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});