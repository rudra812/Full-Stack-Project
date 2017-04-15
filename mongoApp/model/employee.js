var MONGOOSE = require('MONGOOSE');
var Schema = MONGOOSE.Schema;
var Address  = require('./address');

var employeeSchema = Schema({
        empName:String,
        empID:Number,
        address:Address.schema
})
module.exports =  MONGOOSE.model('Employee', employeeSchema);