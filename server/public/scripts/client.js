$(document).ready(handleReady);

function handleReady(){
    console.log('JQ');

    $('.operator').on('click', handleOperator);
    // $('#submit').on('click', handleSubmit())
    // $('#clear').on('click', handleClear())
}

let calcObject = {};

function handleOperator (){
    delete calcObject.operator;
    let operator = $(this).data('operator');
    console.log(operator);
    calcObject.operator = operator;
}