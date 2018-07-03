var server = require('./server_router3');  
var router = require('./router3');  
var requestHandlers = require('./requestHandlers');

server.start(router.route, requestHandlers.handle);  