const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    //answer
   let allBooks = await BookModel.find().select({BookName:1, AuthorName:1, _id: 0})
   let allBooks = await BookModel.find({"year":2021})

   //not showing result
   let allBooks = await BookModel.find({$or:[{"prices":{"indianPrice":"RS200"}},{"prices":{"indianPrice":"RS1500"}},{"prices":{"indianPrice":"RS499"}}]}) 
   let allBooks = await BookModel.find({$or:[{"prices":"RS200"},{"prices":"RS1500"},{"prices":"RS499"}]}) 
   let allBooks = await BookModel.find({$or:[{"prices":200},{"prices":1500},{"prices":499}]}) 

   let allBooks = await BookModel.find({$or:[{stocksAvailable:true},{TotalPages:{$gt:500}}]})
   let allBooks = await BookModel.find({$or:[{body:{$in:"hi"}},{"year":2021}]})


    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData