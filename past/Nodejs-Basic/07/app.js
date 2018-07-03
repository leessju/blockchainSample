var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var httpServer = http.createServer(app).listen(8080, function(req,res) {
  console.log('Socket IO server has been started');
});

// upgrade http server to socket.io server
var io = require('socket.io').listen(httpServer);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function(socket){
   socket.emit('toclient',{msg:'Welcome !'});

   socket.on('fromclient',function(data){
       socket.broadcast.emit('toclient',data);  // �ڽ��� �����ϰ� �ٸ� Ŭ���̾�Ʈ���� ����
       socket.emit('toclient',data);            // �ش� Ŭ���̾�Ʈ���Ը� ����. �ٸ� Ŭ���̾�Ʈ�� ��������?
       console.log('Message from client :' + data.msg);
   })
});



