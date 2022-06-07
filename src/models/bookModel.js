const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    BookName:{type: String,required:true},
    AuthorName: String,
    TotalPages:Number, 
    tags: [String],
    year: Number,
    
    stocksAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    // sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users