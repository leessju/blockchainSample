
// Home

var http = require('http');  
var url = require('url');

exports.home = function (req, res) {
    res.json({ message: 'Home! welcome to our api!' });
};