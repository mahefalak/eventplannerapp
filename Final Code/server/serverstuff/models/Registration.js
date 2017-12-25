const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    password : String,
    userName : String,
    emailAddress : String,
    isAdmin : String,
    name : String
});

module.exports= mongoose.model('registration',registrationSchema,'registrations');
