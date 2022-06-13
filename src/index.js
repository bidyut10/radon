const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://bidyut10:kabir34268@cluster0.rw6eu.mongodb.net/File?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

const globalMid = function (req, res, next) {
    var currendate = new Date()
    var datetime =currendate.getDate() + " "
    + (currendate.getMonth() + 1) + " "
    + currendate.getFullYear() + "  "
    + currendate.getHours() + ":"
    + currendate.getMinutes() + ":"
    + currendate.getSeconds();
    let ipAddress = req.ip
    let url = req.originalUrl
    next()
    console.log(datetime,ipAddress,url)
}
app.use(globalMid);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});