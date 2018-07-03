var server = require('./server_router2');  
var router = require('./router2');  
var requestHandlers = require('./requestHandlers');

server.start(router.route, requestHandlers.handle);  