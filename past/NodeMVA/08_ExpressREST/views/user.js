

// User

var http = require('http');  
var url = require('url');

exports.user = function (req, res) {

    res.json({ message: 'User! welcome to our api!' });

    //var pathname = url.parse(req.url);
    //console.log('request for ' + pathname + ' received.');
    //console.log('request for ' + req.url + ' received.');
};