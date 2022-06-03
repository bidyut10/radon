const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash') //installation with the help of npm

const router = express.Router();


// router.get('/hello', function (req, res) {

//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })
router.get('/sol1', function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let missingNumber
    let diff = arr[0] - 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - i != diff) 
        {
            while (diff < arr[i] - i)
            {
                missingNumber = i + 1
            diff++;
            }
        }   //livetask
    }
    res.send({data:missingNumber})
})
router.get('/sol2', function (req, res) {
    let arrone = [33, 34, 35, 37, 38]
    let missingnumber
    let diff = arrone[0] - 0;
    for (let i = 0; i < arrone.length; i++) {
        if (arrone[i] - i != diff) 
        {
             while (diff < arrone[i] - i)
            {
                missingnumber = i + 1
            diff++;
            }
        }   //livetask
    }
    res.send({data:missingnumber})
})


//problem no-4: first part
router.get('/hello', function (req, res) {
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }
    const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    console.log(sliceIntoChunks(arr, 4));
    res.send(sliceIntoChunks(arr, 4))
})
//sencond part:
router.get('/help', function (req, res) {
    const abc = require('lodash')
    let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let newarray = abc.tail(arr)
    console.log(newarray)
    res.send(newarray)
})

router.get('/help2', function (req, res) {
    const arr1 = [1, 2, 3, 5];
    const arr2 = [3, 12, 14, 15];
    const arr3 = [2, 12, 11, 15];
    const arr4 = [14, 1, 5, 20];
    const arr5 = [4, 8, 11, 20];
    const fullArr = arr1.concat(arr1, arr2, arr3, arr4, arr5);
    console.log(fullArr)
    for (let i=0; i<fullArr.length;i++){

    }
})

//problem no:5-step1
router.get('/helper', function (req, res) {
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})
//step:2
router.get('/moviesindex', function (req, res) {
    let testdata = ["dark", "3idots", "moonknight", "avengers"]
    for (let i = 0; i = testdata.length; i++) {
        console.log(testdata[1])
        break;
    }
    res.send(testdata[1])
})
//step:3


//step:4
router.get('/flims', function (req, res) {
    let flims = [
        {
            id: 1,
            name: "The Shining"
        },
        {
            id: 2,
            name: "Incendies"
        },
        {
            id: 3,
            name: "Rang de Basanti"
        },
        {
            id: 4,
            name: "Finding Nemo"
        }]

    for (let i = 0; i = flims.length; i++) {
        console.log(flims[i])
        break;
    }
    res.send(flims[0])
})
//step:5



module.exports = router;
// adding this comment for no reason