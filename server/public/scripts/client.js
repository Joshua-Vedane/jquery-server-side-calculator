$(document).ready(handleReady);

function handleReady(){
    console.log('JQ');

    $('.operator').on('click', handleOperator);
    $('#submit').on('click', handleSubmit);
    // $('#clear').on('click', handleClear);
}

// should have syntax of {
//     operator : '*',
//     num1: 'number',
//     num2 : 'number'
// }
let calcObject = {};

function handleOperator (){
    delete calcObject.operator;
    let operator = $(this).data('operator'); 
    // operator = 'add'
    console.log(operator);
    calcObject.operator = operator;
    console.log(calcObject);
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
        //get the last calculation. 
        //Get all calculations(at this point, lastCalcObject/Result still exists)
        getLastCalculation();
        getCalculations();
        //clear input fields
        $('.numberIn').val('');
    })
    
}

//get last calculation and render
function getLastCalculation(){
    $.ajax({
        url : '/last',
        type : 'GET'
    }).then(function(response){
        console.log(response);
        $('#lastResultOut').text(response.result);
    });
}

//GET calculations and render to DOM
function getCalculations(){
    $.ajax({
        url : '/data',
        type : 'GET'
    }).then(function(response){
        console.log(response);
        $('#resultsOut').empty();
        for(let item of response){
            // let itemSign = '';
            // if(item.operator === 'add'){
            //     itemSign = '+';
            // }else if(item.operator === 'sub'){
            //     itemSign = '-';
            // }else if (item.operator === 'mult'){
            //     itemSign = 'x'
            // }else if(item.operator === 'divide'){
            //     itemSign = '/'
            $('#resultsOut').append(`<li>${item.num1} ${item.operator} ${item.num2} = ${item.result}</li>`)
            }
        })
    
}