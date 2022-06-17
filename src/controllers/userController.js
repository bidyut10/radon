const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body
    console.log(data)
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data)
      res.status(201).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const loginUser = async function (req, res) {

  let userName = req.body.emailId;
  let password = req.body.password;
  try {
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(403).send({
        status: false,
        msg: "username or the password is not corerct",
      });


    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.status(203).send({ status: true, data: token });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const getUserData = async function (req, res) {
  //if userId is not present
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(401).send({ status: false, msg: "No such user exists" });

    res.status(203).send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

module.exports.createUser = createUser
module.exports.getUserData = getUserData
module.exports.loginUser = loginUser
