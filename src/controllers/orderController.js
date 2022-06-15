// const orderModel = require("../models/orderModel")
// const OrderModel = require("../models/orderModel")
// const userModel = require("../models/userModel")

// const createOrder = async function (req, res) {
//     let data = req.body

//     let orderData = await OrderModel.create(data)
//     res.send({ msg: orderData })
// }
// const checkUserId = async function (req, res) {
//     let data= req.body
//     console.log(data)// for chceking 
//     let idCheck = await OrderModel.findById(data.User)
//     // console.log(idCheck)
//     if (!idCheck) {
//         res.send({ msg: "UserId is not valid" })
//     }
// }
// const checkProductId = async function (req, res) {
//     let data= req.body
//     console.log(data)
//     let idCheck = await OrderModel.findById(data.Product)
//     //console.log(idCheck)
//     if (!idCheck) {
//         res.send({ msg: "ProductId is not valid" })
//     }
// }
// module.exports.createOrder = createOrder
// module.exports.checkUserId = checkUserId
// module.exports.checkProductId=checkProductId
