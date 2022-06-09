const Book= require("../models/bookModel")
const AuthorName=require("../models/authorModel")

const bookCollection= async function (req, res) {
    let data= req.body
    let savedData= await Book.create(data)
    res.send({msg: savedData})
}

const getBooksByChetanBhagat= async function (req, res) {
    let data= await AuthorName.find({author_name:'Chetan Bhagat'}).select('author_id') //picked out of authormodel
    let bookdata=await Book.find({author_id:data[0].author_id})
    res.send({msg: bookdata})
}


const priceBetween= async function (req, res) {
    let between= await Book.find({ price : {$gt: 50, $lt: 100}   })
    res.send({msg: target})
    } //sales is between 20 and 100.... sales > 20 AND sales <100
    

module.exports.bookCollection= bookCollection
module.exports.getBooksByChetanBhagat= getBooksByChetanBhagat
module.exports.priceBetween= priceBetween