const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Store Data and functions here
const receivedCalcs = [];

let lastCalcObject = {};

function calculateResults(newCalc) {
    lastCalcObject = {};
    // console.log(`newCalc in CalculateResults:`,newCalc);
    if (newCalc.operator === '+') {
        let newAddCalc = Number(newCalc.num1) + Number(newCalc.num2);
        lastCalcObject.result = newAddCalc;
    } else if (newCalc.operator === '-') {
        let newSubCalc = Number(newCalc.num1) - Number(newCalc.num2);
        lastCalcObject.result = newSubCalc;
    } else if (newCalc.operator === '*') {
        let newMultCalc = Number(newCalc.num1) * Number(newCalc.num2);
        lastCalcObject.result = newMultCalc;
    } else if (newCalc.operator === '/') {
        let newDivideCalc = Number(newCalc.num1) / Number(newCalc.num2);
        lastCalcObject.result = newDivideCalc;
    } else {
        console.log('something wrong');
    }
    lastCalcObject.num1 = newCalc.num1;
    lastCalcObject.num2 = newCalc.num2;
    lastCalcObject.operator = newCalc.operator;
}
//End DATA AND FUNCTIONS

//GET REQUESTS
//get all calcs
app.get('/data', (req, res) => {
    // console.log('get requested /data', receivedCalcs);
    res.send(receivedCalcs);
})

//POST REQUESTS
// post calcObject
app.post('/data', (req, res) => {
    let newCalc = req.body;
    // console.log('POST REQ /post', newCalc);
    calculateResults(newCalc);
    // console.log(`lastCalcObject is;`, lastCalcObject);
    receivedCalcs.push(lastCalcObject);
    // console.log(receivedCalcs);
    res.sendStatus(201);

})

//ZOOM ZOOM
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serve is running on PORT:`, PORT);
})