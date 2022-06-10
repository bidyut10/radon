const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.post("/createAuthor", authorController.createAuthor  )

router.post ("/createPublisher", publisherController.createPublisher)

router.post("/createBook", bookController.createBook)

router.get("/checkAuthorId",bookController.checkAuthorId)

router.get("/authorIdValid", bookController.authorIdValid)

router.get("/publisherIdValid", bookController.publisherIdValid)

router.get("/publisherIdValid",bookController.publisherIdValid)

router.get("/bookWithAuthor", bookController.bookWithAuthor)

module.exports = router;
