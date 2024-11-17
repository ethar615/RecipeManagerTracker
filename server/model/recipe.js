//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let recipeModel = mongoose.Schema({
    Name: String,
    Category: String,
    PreperationTime: String,
    Calories: Number,
    Ingredients: String
},

{
    collection:"Cooking_recipes"
});
module.exports =mongoose.model('Recipe',recipeModel);
