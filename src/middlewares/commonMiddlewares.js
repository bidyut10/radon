const OrderModel = require("../models/orderModel")
const UserModel = require("../models/userModel")
const productModel = require("../models/productModel")

const mid1 = function (req, res, next) {
    let data = req.headers["isFreeAppUser"]
    if (!data) {
        res.send({ msg: " The request is missing a mandatory header" })
    }else{
    next()
    }
}

const mid2= function ( req, res, next) {
    let head = req.headers["isFreeAppUser"]
    if (!head) {
        res.send({ msg:" The request is missing a mandatory header" })
    }else{
    next()
    }
}

// const mid3= function ( req, res, next) {
//     let idCheck = await OrderModel.findOne({ userId: Number[0] })
//     if (!idCheck){
//         res.send({ msg: "Author doesnt have id" })
//     }else{
//         next()
//     }
  
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.mid1= mid1
module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
