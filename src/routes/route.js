const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController=require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createProduct", productController.createProduct  )

router.post("/createOrder", orderController.createOrder  )

router.post("/createUser", UserController.createUser)

module.exports = router;