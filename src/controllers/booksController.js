const jwt=require('jsonwebtoken')
const userController=require('../controllers/userController')
const bookModel=require('../models/booksModel')
const userModel=require('../models/userModel')
const {isValid, isValidRequest} = require('../validators/booksValidation')


//--------user created--------//
const createBooks = async function(req, res){
    try {
        let {title, excerpt, userId, ISBN, category, subcategory}= req.body

        if (!isValidRequest(req.body)) {
            return res.status(400).send({status: false, message : "body cannot be blank"})
        }
        
        if (!title) {
            return res.status(400).send({status: false, message : "title cannot be blank"})
        }

        if (!isValid(title)) {
            return res.status(400).send({status: false, message : "title is required"})
        }

        if (!excerpt) {
            return res.status(400).send({status: false, message : "excerpt is require"})
        }

        if (userId.length != 24) {
            return res.status(400).send({status: false, message : "userId required"})
        }
        if (!/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(ISBN)) {
        return res
              .status(400)
              .send({ status: false, message: `ISBN  must be in 13 digit` });
        }
        if (!(/[A-Za-z][A-Za-z0-9_]{1,29}/.test(category))) {
            return res
            .status(400)
            .send({ status: false, message:  `category  can not be empty` });
           
        }
        if (!(/^#?[a-zA-Z0-9 ]+/.test(subcategory))) {
            return res
            .status(400)
            .send({ status: false, message:  `subcategory  can not be empty` });  
        }
        let id = await userModel.find({ _id: userId }).select({ _id: 1 });
        let books = id.map((obj) => obj._id.toString());
        if (userId == books) {
        let data = req.body;
        let createBooks = await bookModel.create(data);
        return res
        .status(201)
        .send({status:true, message: "success" , data:createBooks})
    }
 
    } catch (error) {
        // console.log(error);
        res.status(500).send({status:false, message:error.message})
    }   
}



module.exports={createBooks}