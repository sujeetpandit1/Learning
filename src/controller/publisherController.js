const AuthorModel= require("../Model/newAuthor")
const BookModel=require('../Model/newBook')
const PublisherModel=require('../Model/newPublisher')

const createNewPublisher=async function (req, res){
    let publisher=req.body
    let publisherCreated=await PublisherModel.create(publisher)
    res.send({data:publisherCreated})
}




module.exports.createNewPublisher=createNewPublisher

