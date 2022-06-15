const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middlewares/auth")

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)
router.delete("/users/:userId", auth.validateToken, userController.deleteUser)
module.exports = router;