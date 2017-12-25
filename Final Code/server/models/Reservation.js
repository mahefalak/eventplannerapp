const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    name: String,
    email : String,
    phone : String,
    address : String, 
    city : String,
    description : String,
    eventType : String,
    isCateringService : String
   
});

module.exports= mongoose.model('reservation',reservationSchema,'reservations');
