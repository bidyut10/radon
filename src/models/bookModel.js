const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: ObjectId,
        required: true,
        ref: "Author"
    },
    price: Number,
    book_Ratings: Number,
    publisher_details: {
        type: ObjectId,
        required: true,
        ref: "Publisher"
    }
}, { timestamps: true });

module.exports = mongoose.model('Assignmentbook', bookSchema)
