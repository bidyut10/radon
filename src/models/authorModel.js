const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_Name: String,
    age:Number,
    address:String,
    author_Rating: Number

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
