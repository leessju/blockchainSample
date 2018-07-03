var request = require('request');
var fs = require('fs');

request('http://www.naver.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.info(body);
    }
});