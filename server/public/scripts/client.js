$(document).ready(handleReady);

function handleReady(){
    //click listeners
    $('.operator').on('click', handleOperator);
    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleClear);
}

let calcObject = {};

function handleOperator (){
    delete calcObject.operator;
    let operator = $(this).data('operator'); 
    // console.log(operator);
    calcObject.operator = operator;
    // console.log(calcObject);
}


function handleSubmit(){
    let number1 = $('#firstNumIn').val();
    let number2 = $('#secondNumIn').val();
    calcObject.num1 = number1;
    calcObject.num2 = number2;
    // console.log(calcObject);

    // POST calcObject to server
    $.ajax({
        url : '/data',
        type : 'POST',
        data : calcObject
    }).then(function(response){
        // console.log(response);
        //get results 
        getCalculations();
    })
    
}

//clear input fields
function handleClear(){
    $('.numberIn').val('');
}

//GET calculations and render to DOM
function getCalculations(){
    $.ajax({
        url : '/data',
        type : 'GET'
    }).then(function(response){
        // console.log(response);
        $('#resultsOut').empty();
        for(let item of response){
            $('#resultsOut').append(`<li>${item.num1} ${item.operator} ${item.num2} = ${item.result}</li>`)
            $('#lastResultOut').text(item.result);
            }
        })
    
}