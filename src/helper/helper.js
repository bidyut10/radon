const printDate=function(){
    let currentDate = new Date()
    console.log(currentDate)
}

const printMonth=function(){
    let currentDate= new Date()
    let currentMonth=currentDate.getMonth() +1
    console.log('the current month is'+ currentMonth)
 
}
const getBatchInfo= function(){
    let info= "Roadon, W3D1, the topic for today is Nodejs module system"
    console.log(info)
}

//than exports all file
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo