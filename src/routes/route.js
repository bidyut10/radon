const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const OrderController = require("../controllers/orderController")
const productController = require("../controllers/productController")
const commonMW = require("../middlewares/commonMiddlewares");
const orderModel = require('../models/orderModel');

router.post("/createOrder", commonMW.mid2,OrderController.createOrder)
router.post("/createProduct", productController.createProduct)
router.post("/createUser",commonMW.mid1, UserController.createUser)
// router.get("/checkUserId", OrderController.checkUserId)
router.post("/checkUserId", OrderController.checkUserId)
router.post("/checkProductId", OrderController.checkProductId)

module.exports = router;