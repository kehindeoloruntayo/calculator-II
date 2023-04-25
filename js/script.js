function add(number1, number2) {
    return number1 + number2;
}
function subtract(number3, number4) {
    return number3 - number4;
}
function multiply(number5, number6) {
    return number5 * number6;
}
function divide(number7, number8) {
    return number7 / number8;
}

// Addition function
$(document).ready(function () {
    $('#calculator-form').submit(function (event) {
        event.preventDefault();
        const number1 = parseInt($('#number1').val());
        const number2 = parseInt($('#number2').val());
        const result = add(number1, number2);
        $('#result').val(result);
    });
});

// Subtraction function
$(document).ready(function () {
    $('#calculator-form1').submit(function (event) {
        event.preventDefault();
        const number3 = parseInt($('#number3').val());
        const number4 = parseInt($('#number4').val());
        const result = subtract(number3, number4);
        $('#result1').val(result);
    });
});

// Multiplication function
$(document).ready(function () {
    $('#calculator-form2').submit(function (event) {
        event.preventDefault();
        const number5 = parseInt($('#number5').val());
        const number6 = parseInt($('#number6').val());
        const result = multiply(number5, number6);
        $('#result2').val(result);
    });
});

// Division function
$(document).ready(function () {
    $('#calculator-form3').submit(function (event) {
        event.preventDefault();
        const number7 = parseInt($('#number7').val());
        const number8 = parseInt($('#number8').val());
        const result = divide(number7, number8);
        $('#result3').val(result);
    });
});