const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SuperMarketSchema = new Schema({
    "Invoice ID" : String,
    Branch: String,
    City: String,
    "Customer type": String,
    Gender: String,
    "Product line" : String,
    "Unit price" : Number,
    Quantity : Number,
    "Tax 5%" : Number,
    Total : Number,
    Date : String,
    Time : String,
    Payment : String,
    cogs : Number,
    "gross margin percentage" : Number,
    "gross income" : Number,
    Rating : Number,
});

module.exports =  mongoose.model('super-market', SuperMarketSchema);