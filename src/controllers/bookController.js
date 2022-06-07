const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    return res.send({ msg: savedData })
}
const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    return res.send({ msg: savedData })
}
const idOfAuthor = async function (req, res) {
    let idCheck = await AuthorModel.findOne({ author_id: Number[0] })
    if (idCheck) res.send({ msg: idCheck })
    else res.send({ msg: "Author doesnt have id" })
}
const idOfBook = async function (req, res) {
    let idCheckOfBook = await BookModel.findOne({ author_id: Number[0] })
    if (idCheckOfBook) res.send({ msg: idCheckOfBook })
    else res.send({ msg: "Book doesnt have id" })
}
const getBooksByChetan = async function (req, res) {
    let data = await AuthorModel.find({ author_name: "Chetan Bhagat" }).select("author_id")
    let finaldata = await BookModel.find({ author_id: data[0].author_id })
    return res.send({ msg: finaldata })
}
const authorOfBook = async function (req, res) {
    let data = req.body
    let newPrice = await BookModel.findOneAndUpdate({ name: "Two states" }, { $set: { "price": 100 } }, { new: true })
    let Authordata = await AuthorModel.find({ author_id: newPrice.author_id }).select("author_name")
    return res.send({ msg: Authordata, newPrice })
}
const findBook = async function (req, res) {
    let lastBook = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 })
    return res.send({ msg: lastBook })
}

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooksByChetan = getBooksByChetan
module.exports.authorOfBook = authorOfBook
module.exports.idOfAuthor = idOfAuthor
module.exports.idOfBook = idOfBook
module.exports.findBook = findBook