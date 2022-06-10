const AuthorModel= require("../Model/newAuthor")
const BookModel=require('../Model/newBook')
const PublisherModel=require('../Model/newPublisher')


const createNewAuthor= async function(req, res){
    let author=req.body
    let authorCreated= await AuthorModel.create(author)
    res.send({author:authorCreated})
}



module.exports.createNewAuthor=createNewAuthor