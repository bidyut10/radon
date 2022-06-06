const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    BookName: {
        type: String,
        required: true,
        unique: true
    },
    AuthorName: {
        type: String,
        required: true
    },

    // BookName: String,
    // autherName: String,
    // tags: [ String ],
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     usPrice: String,
    // },
    // sales:{ type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Book', booksSchema) //books