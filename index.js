var express = require('express');
var app = express();
app.get('/searching',function(req,res){
    res.send("Hello World");
});
app.listen(8085,function(){    
	console.log("Application is running on port 8085");
});