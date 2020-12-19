$(document).ready(handleReady);

function handleReady(){
    console.log('JQ');

    $('.operator').on('click', handleOperator);
    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleClear);
}

let calcObject = {};

function handleOperator (){
    delete calcObject.operator;
    let operator = $(this).data('operator');
    console.log(operator);
    calcObject.operator = operator;
}

function handleSubmit(){
    //add in the numbers to the calcObject
    let number1 = $('#firstNumIn').val();
    let number2 = $('#secondNumIn').val();
    calcObject.numOne = number1;
    calcObject.numTwo = number2;

    // POST calcObject to server
    $.ajax({
        url : '/data',
        type : 'POST',
        data : calcObject
    }).then(function)(response){
        console.log(response);
        //GO GET THE CALCULATIONS!!!
    }

    //clear calcObject? or in clear is fine too 
    //reset inputs (in clear as well?)
}