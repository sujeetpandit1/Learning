const { count } = require("console")
const ProductModel = require("../models/productModel")


const createProduct= async function (req, res, next) {
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}





module.exports.createProduct = createProduct
