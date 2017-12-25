const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    path : String
});

module.exports= mongoose.model('portfolio',portfolioSchema,'portfolios');
