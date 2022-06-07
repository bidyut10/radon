const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")

router.post("/createBook", BookController.createBook)

router.post("/createAuthor", BookController.createAuthor)
router.get("/getBooksByChetan", BookController.getBooksByChetan)
router.get("/authorOfBook", BookController.authorOfBook)
router.get("/idOfAuthor", BookController.idOfAuthor)
router.get("/idOfBook", BookController.idOfBook)

module.exports = router;