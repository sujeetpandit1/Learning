const { count } = require("console")
const OrderModel = require("../models/orderModel")


const createOrder= async function (req, res, next) {
    let data= req.body
    let savedData= await OrderModel.create(data)
    res.send({msg: savedData})
}





module.exports.createOrder = createOrder

