//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Name: String,
    Author: String,
    Published: String,
    Description: String,
    Price: Number
},
{
    collection:"Job_surveys"
});
module.exports =mongoose.model('Book',bookModel);
