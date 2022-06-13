const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    userID : String,
    productId: String,
    Price: Number,
    isFreeAppUser: Boolean,
    date:String

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
