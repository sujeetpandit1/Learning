const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const authorController= require("../controller/authorController")
const bookController= require("../controller/bookController")
const publisherController= require("../controller/publisherController")

router.get("/test-me", function (req, res) {
    res.send("ok to proceed")
})


router.post('/createNewAuthor', authorController.createNewAuthor)
router.post('/createNewPublisher', publisherController.createNewPublisher)
router.post('/createdBook', bookController.createdBook)
router.get('/getBooksWithAuthorDetails',bookController.getBooksWithAuthorDetails )


module.exports = router;