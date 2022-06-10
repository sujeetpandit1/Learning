const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema= new mongoose.Schema({
    name:String,
    author_id:{
        type:ObjectId,
        ref:"Publisher"
    },
    headQuarter:String
}, {timestamps:true})

module.exports=mongoose.model('Publisher', publisherSchema)
