const Author= require("../models/authorModel")
const BookName=require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await Author.create(data)
    res.send({msg: savedData})
}

const findOneAndUpdate= async function (req, res) {

    let data5= await BookName.findOneAndUpdate({name:"two states"},{ $set: {prcie:100} }, { new: true , upsert:true});
       
    res.send({msg: data5})
}

module.exports.createAuthor= createAuthor
module.exports.findOneAndUpdate= findOneAndUpdate

