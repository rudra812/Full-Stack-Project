var express = require('express');
var cors = require('cors');
var router = express.Router();
var MONGOOSE = require('MONGOOSE');
var process = require('process');
var AddressModel = require("./mongoApp/model/address");
var employeeModel = require("./mongoApp/model/employee");
// Connection URL
var url = 'mongodb://localhost:27017/my_database';
// Use connect method to connect to the Server

MONGOOSE.connection.on('connected', function () {  
  console.log('MONGOOSE default connection open to ' + url); 
}); 

// If the connection throws an error
MONGOOSE.connection.on('error',function (err) {  
  console.log('MONGOOSE default connection error: ' + err);
}); 

// When the connection is disconnected
MONGOOSE.connection.on('disconnected', function () {  
  console.log('MONGOOSE default connection disconnected'); 
});

process.on('SIGINT', function(){
    MONGOOSE.connection.close(function(){
         console.log('MONGOOSE default connection process Terminated'); 
         process.exit(0);
    });
});


var requestTime = function (req, res, next) {
   req.requestTime = new Date(Date.now());
   next();
 };
 router.use(requestTime);
 router.get('/searching',cors(), function(req,res){
     res.send("'Hello World' message is printed at " + req.requestTime);
 });
 router.post('/login',cors(),function(req,res){
   var user_id = req.body['user'];
   var pwd = req.body['password']; 
   MONGOOSE.connect(url);
    employeeModel.find({empID:Number(user_id)},function(err,users){
      console.log(users);
      MONGOOSE.connection.close();  
      res.send({
        message:"Logged in " + req.requestTime,
        data:users
      });  
    });
 });
 module.exports = router;
