const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: true  
    },
    itemPrice:{
        type: Number,
        required: true
    },
    itemDesc:{
        type: String,
        required: true
    },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
