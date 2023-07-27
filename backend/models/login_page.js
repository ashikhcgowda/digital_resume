
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let logindata = new Schema
({

name: {type:String},
email: {type:String},
city: {type:String},
phonenumber: {type:Number}

},

{collection:'login'}
)

module.exports = mongoose.model('login',logindata)
