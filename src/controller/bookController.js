const { Server } = require("http")
const AuthorModel= require("../Model/newAuthor")
const BookModel=require('../Model/newBook')
const PublisherModel=require('../Model/newPublisher')

const createdBook=async function (req, res){
    let book=req.body
    let createdBook=await BookModel.create(book)
    res.send({data:createdBook})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author_id')
    res.send({data: specificBook})

}





module.exports.createdBook=createdBook
module.exports.getBooksWithAuthorDetails=getBooksWithAuthorDetails