const bookmodel= require("../models/bookmodel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})
}
const getBookList= async function (req, res) {
    let allbooks= await bookmodel.find()
    res.send({msg:allbooks})
}
module.exports.createBook= createBook
module.exports.getBookList= getBookList