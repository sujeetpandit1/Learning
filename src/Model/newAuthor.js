const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const  authorSchema=new mongoose.Schema({
    name:String,
    author_id:{
        type:ObjectId,
        ref: "Author"
    },
    age:Number,
    address:String,
    rating:Number

}, {timestamps:true});

module.exports=mongoose.model('Author', authorSchema)