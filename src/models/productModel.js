const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String, 
    catogery: String, 
    price:Number,
   
}, { timestamps: true });


module.exports = mongoose.model('product', productSchema)
