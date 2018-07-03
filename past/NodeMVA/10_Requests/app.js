var request = require("request");
 
request("http://www.naver.com", function(error, response, body) {
    console.log(body);
    //response.send(body);
});
