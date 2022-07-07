const jwt = require('jsonwebtoken')
const userController = require('../controllers/userController')
const bookModel = require('../models/booksModel')
const userModel = require('../models/userModel')



const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length == 0) return false
    return true
}

const isValidRequest = function (value) {
    if (Object.keys(value).length == 0) return false
    return true
}
//--------user created--------//

const createBooks = async function (req, res) {
    try {
        let { title, excerpt, userId, ISBN, category, subcategory } = req.body

        if (!isValidRequest(req.body)) {
            return res
                .status(400)
                .send({ status: false, message: "body cannot be blank" })
        }
        if (!title) {
            return res.status(400).send({ status: false, message: "title cannot be blank" })
        }

        if (!isValid(title)) {
            return res
                .status(400)
                .send({ status: false, message: "title is required" })
        }

        if (!excerpt) {
            return res
                .status(400)
                .send({ status: false, message: "excerpt is require" })
        }

        if (userId.length != 24) {
            return res
                .status(400)
                .send({ status: false, message: "userId required" })
        }
        if (!/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(ISBN)) {
            return res
                .status(400)
                .send({ status: false, message: `ISBN  must be in 13 digit` });
        }
        if (!(/[A-Za-z][A-Za-z0-9_]{1,29}/.test(category))) {
            return res
                .status(400)
                .send({ status: false, message: `category  can not be empty` });

        }
        if (!(/^#?[a-zA-Z0-9 ]+/.test(subcategory))) {
            return res
                .status(400)
                .send({ status: false, message: `subcategory  can not be empty` });
        }
    
        
        let id = await userModel.find({ _id: userId }).select({ _id: 1 });
        let books = id.map((obj) => obj._id.toString());
        if (userId == books) {
            let data = req.body;
            let createBooks = await bookModel.create(data);
            let savedData= await bookModel.findOne({title:title}).select({deletedAt:0})
            return res
                .status(201)
                .send({ status: true, message: "success", data: savedData })
        }

    } catch (error) {
        // console.log(error);
        res.status(500).send({ status: false, message: error.message })
    }
}



module.exports = { createBooks }