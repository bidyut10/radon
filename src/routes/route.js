const express = require('express');
const externalModule = require('../logger/logger')
const dateModule=require('../helper/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    dateModule.printDate()
    dateModule.printMonth()
    dateModule.getBatchInfo()
    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason