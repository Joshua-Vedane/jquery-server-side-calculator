const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));

//Store Data and functions here
const receivedCalcs = [];
let lastCalcResult = {};
let lastCalcObject = {};

function calculateResults(newCalc){
    //loop over new object
    //newCalc not iterable. remove for loop and just do condos
    //bring lastCalcResult into this function. add key:values to it. then, push it into receivedCalcs. 
        console.log(`newCalc in CalculateResults:`,newCalc);
        if (newCalc.operator === 'add'){
            let newAddCalc = Number(newCalc.num1) + Number(newCalc.num2);
            lastCalcResult.result = Number(newAddCalc);
            lastCalcObject.result = newAddCalc;
        } else if(newCalc.operator === 'sub'){
            let newSubCalc = Number(newCalc.num1) - Number(newCalc.num2);
            lastCalcResult.result = Number(newSubCalc);
            lastCalcObject.result = newSubCalc;
        } else if(newCalc.operator === 'mult'){
            let newMultCalc = Number(newCalc.num1) * Number(newCalc.num2);
            lastCalcResult.result = Number(newMultCalc);
            lastCalcObject.result = newMultCalc;
        } else if(newCalc.operator === 'divide'){
            let newDivideCalc = Number(newCalc.num1) / Number(newCalc.num2);
            lastCalcResult.result = Number(newDivideCalc);
            lastCalcObject.result = newDivideCalc;
        }else{
            console.log('something wrong');
        }
    lastCalcObject.num1 = newCalc.num1;
    lastCalcObject.num2 = newCalc.num2;
    lastCalcObject.operator = newCalc.operator;

   
}


//End DATA AND FUNCTIONS


//GET REQUESTS
// app.get('/data', (req,res) =>{
//     console.log('get requested /data');
//     res.send(receivedCalcs);
//     console.log(receivedCalcs);
// })

//POST REQUESTS
// post calcObject
app.post('/data', (req,res) => {
    let newCalc = req.body;
    console.log('POST REQ /post', newCalc);
    //no need to clear out lastCalcObject/Results b/c reassigning in function. 
    
    //here we'll want to call a new function that takes in 'newCalc' as a parameter and do our calculations there. The result of which will be put into the receivedCalcs array or something similar
    calculateResults(newCalc);
    //push lastCalcObject to receivedCalcs?
    console.log(`lastCalcObject is;`, lastCalcObject);
    console.log(`lastCalcResult is: `,lastCalcResult.result);


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