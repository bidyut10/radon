const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}
const checkAuthorId = async function (req, res) {
    let data = req.body
    if (!data.author_name)
        res.send({ msg: "AuthorId detail is required" })
}
const authorIdValid = async function (req, res) {
    let data = req.body
    let author_id = data.author
    if (!author_id)res.send({ msg: "Author id is not valid" })
}
const checkpublisherId = async function (req, res) {
    let data = req.body
    if (!data.publisher_name)
        res.send({ msg: "PublisherId detail is required" })
}
const publisherIdValid = async function (req, res) {
    let data = req.body
    let publisher_id = data.publisher
    if (!publisher_id)res.send({ msg: "Publisher id is not valid" })
}
const bookWithAuthor= async function (req,res){
    let allbooks= await bookModel.find().populate('author')
    res.send({msg: allbooks})
}

module.exports.createBook = createBook
module.exports.checkAuthorId = checkAuthorId
module.exports.authorIdValid = authorIdValid
module.exports.checkpublisherId=checkpublisherId
module.exports.publisherIdValid=publisherIdValid
module.exports.bookWithAuthor=bookWithAuthor