const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

const bookmodel=require("../models/bookmodel")
const bookscon=require("../controllers/bookscon")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/postone", function (req, res) {
//     console.log(req.body)
//     res.send({"name":"bidyut","password":"12345"})

//     let id= req.body.name
//     let pass= req.body.password
//     console.log(id,pass)
// })

// router.post("/post2", function (req, res) {
//     let array= [123,"functionupp"]
//     let ele=req.body.element
//     array.push(ele)
//     res.send({msg:array,status:true})
// })   problem 


router.post("/createBook", bookscon.createBook)
router.get("/getBookList", bookscon.getBookList)


router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;