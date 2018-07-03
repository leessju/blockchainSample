var express = require("express");  
var app = express();  

app.use(express.static("js"));
app.use(express.static("css"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
})

app.listen(8080);