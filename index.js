var express = require('express');
var bodyParser = require('body-parser');
//var cors = require('cors');
var app = express();
var urlencoder = bodyParser.urlencoded({extended:false});
var router = require('./router.js');
// var requestTime = function (req, res, next) {
//   req.requestTime = new Date(Date.now());
//   next();
// };
// app.use(requestTime);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.get('/searching',cors(), function(req,res){
//     res.send("'Hello World' message is printed at " + req.requestTime);
// });
// app.post('/login',cors(),function(req,res){
//   var user_id = req.body['user'];
//   var pwd = req.body['password']; 
//   if(user_id !== "614673"){
//       return res.status(400).send({
//           message: 'This is an error!'
//       });
//   }   
//   res.status(200).send({
//     message:"Logged in " + req.requestTime
//   });
// });
app.use('/',router);
app.listen(8085,function(){    
	console.log("Application is running on port 8085");
});