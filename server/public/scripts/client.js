$(document).ready(handleReady);

function handleReady(){
    console.log('JQ');

    $('.operator').on('click', handleOperator);
    $('#submit').on('click', handleSubmit);
    // $('#clear').on('click', handleClear);
}

// should have syntax of {
//     operator : 'signName',
//     num1: 'number',
//     num2 : 'number'
// }
let calcObject = {};

function handleOperator (){
    delete calcObject.operator;
    let operator = $(this).data('operator');
    console.log(operator);
    calcObject.operator = operator;
}

function handleSubmit(){
    //add in the numbers to the calcObject
    //clear the calcObject numbers here
    let number1 = $('#firstNumIn').val();
    let number2 = $('#secondNumIn').val();
    calcObject.num1 = number1;
    calcObject.num2 = number2;
    console.log(calcObject);

    // POST calcObject to server
    $.ajax({
        url : '/data',
        type : 'POST',
        data : calcObject
    }).then(function(response){
        console.log(response);
        //GO GET THE CALCULATIONS!!!
        // getCalculations();
    })
    //render to DOM function takes in calcObject
    // This won't work because need to keep all log of calcs in server. 
        /*
        <li>`${Number(calcObject.number1)} ${calcObject.operator} ${calcObject.number2} = ${response} `</li
        
        */
}

//GET calculations and render to DOM
// function getCalculations(){
//     $.ajax({
//         url : '/data',
//         type : 'GET'
//     }).then(function(response){
//         for(let calc of response){
                //APPEND TO DOM THE RESPONSE
                //APPEND THE response.
//         }
//     })
// }