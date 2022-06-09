const express = require('express');
const router = express.Router();
const AuthorModel= require("../models/authorModel.js")
const AuthorController= require("../controllers/authorController")
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createAuthor', AuthorController.createAuthor)
router.post('/bookCollection',BookController.bookCollection)

router.get('/getBooksByChetanBhagat', BookController.getBooksByChetanBhagat)
router.get('/findOneAndUpdate', AuthorController.findOneAndUpdate)
router.get('./priceBetween', BookController.priceBetween)



module.exports = router;