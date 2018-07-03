var server = require('./server_router');  
var router = require('./router');

server.start(router.route);  