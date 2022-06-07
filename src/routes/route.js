const express = require('express');
const router = express.Router();
//const UserController= require("../controllers/userController")

const bookModel= require("../models/bookModel")
const bookController= require("../controllers/bookController")

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

module.exports = router;