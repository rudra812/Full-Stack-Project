var express = require('express');
var cors = require('cors');
var router = express.Router();
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
   if(user_id !== "614673"){
       return res.status(400).send({
           message: 'This is an error!'
       });
   }   
   res.status(200).send({
     message:"Logged in " + req.requestTime
   });
 });
 module.exports = router;
