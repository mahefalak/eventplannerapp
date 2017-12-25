const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventTypeSchema = new Schema({
    Title : String
});

module.exports= mongoose.model('EventType',EventTypeSchema,'EventTypes');
