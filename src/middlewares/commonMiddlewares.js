const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
 try{   
    let token = req.headers["x-auth-token"];

  if (!token) token = req.headers["x-Auth-token"];
  console.log(token)
  //If no token is present
  if (!token) return res.status(403).send({ status: false, msg: "token must be present" });
  //Token validation check
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(403).send({ status: false, msg: "token is invalid" });
    req.decodedToken=decodedToken
}
catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
    next()
}


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request

// }

module.exports.authenticate= authenticate
// module.exports.authorise=authorise