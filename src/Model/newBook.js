const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const  bookSchema=new mongoose.Schema({
    name:String,
    author_id:{
        type:ObjectId,
        ref: "Book"
    },
    price:Number,
    rating:Number

}, {timestamps:true});

module.exports=mongoose.model('Book', bookSchema)


