const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));

//Store Data and functions here
const receivedCalcs = [];
let lastCalcResult = {};

function calculateResults(newCalc){
    //loop over new object
    //newCalc not iterable. remove for loop and just do condos
    // for (let calc of newCalc){
        console.log(newCalc);
        if (newCalc.operator === 'add'){
            let newAddCalc = Number(newCalc.num1) + Number(newCalc.num2);
            lastCalcResult.result = Number(newAddCalc);
        } else if(newCalc.operator === 'sub'){
            let newSubCalc = Number(newCalc.num1) - Number(newCalc.num2);
            lastCalcResult.result = Number(newSubCalc);
        } else if(newCalc.operator === 'mult'){
            let newMultCalc = Number(newCalc.num1) * Number(newCalc.num2);
            lastCalcResult.result = Number(newMultCalc);
        } else if(newCalc.operator === 'divide'){
            let newDivideCalc = Number(newCalc.num1) / Number(newCalc.num2);
            lastCalcResult.result = Number(newDivideCalc);
        }else{
            console.log('something wrong');
        }
    // }
   
}


//End DATA AND FUNCTIONS


//GET REQUESTS


//POST REQUESTS
// post calcObject
app.post('/data', (req,res) => {
    let newCalc = req.body;
    console.log('POST REQ /post', newCalc);
    //here we'll want to call a new function that takes in 'newCalc' as a parameter and do our calculations there. The result of which will be put into the receivedCalcs array or something similar
    calculateResults(newCalc);
    console.log(lastCalcResult.result);


        // these not needed once calculator function works
    // receivedCalcs.push(newCalc);
    // console.log(receivedCalcs);
    res.sendStatus(201);

})


//ZOOM ZOOM
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serve is running on PORT:`, PORT);
})