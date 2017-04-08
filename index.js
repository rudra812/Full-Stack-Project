var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencoder = bodyParser.urlencoded({extended:false});
var routerHome = require('./router.js');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routerHome);
app.listen(8085,function(){    
	console.log("Application is running on port 8085");
});