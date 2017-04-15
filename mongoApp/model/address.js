var MONGOOSE = require('MONGOOSE');
var Schema = MONGOOSE.Schema;

var addressSchema = Schema({
        zipCode:Number,
        state:String,
        address:String
});

module.exports = MONGOOSE.model('Address', addressSchema);