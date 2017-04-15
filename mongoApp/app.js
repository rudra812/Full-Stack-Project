var MONGOOSE = require('MONGOOSE')
  , assert = require('assert')
  , process = require('process');

var AddressModel = require("./model/address");
var employeeModel = require("./model/employee");

var empAddDetails = new AddressModel();
empAddDetails.zipCode = 751021;
empAddDetails.state = "ODISHA";
empAddDetails.address = "VIM-45,Silashre vihar";

var employeeDetails = new employeeModel();
employeeDetails.empName = "Biswajit Mishra";
employeeDetails.empID = 554632;
employeeDetails.address = empAddDetails;

// Connection URL
var url = 'mongodb://localhost:27017/my_database';
// Use connect method to connect to the Server
MONGOOSE.connect(url);

MONGOOSE.connection.on('connected', function () {  
  console.log('MONGOOSE default connection open to ' + url);
  var promise = employeeDetails.save();
    assert.ok(promise instanceof require('mpromise'));

    promise.then(function (doc) {
      console.log("Operation done");
      MONGOOSE.connection.close();
    },function(){
      console.log("Operation failed");
      MONGOOSE.connection.close();
    });
  
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