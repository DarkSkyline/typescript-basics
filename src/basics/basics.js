"use strict";
console.log('your code goes here!');
function addNumber(n1, n2, showResult) {
    console.log(typeof n1);
    // How verify the types without TypeScript
    if (typeof n1 !== 'number' && typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    return showResult ? console.log(n1 + n2) : 'no result to show';
}
var number1 = 5;
var number2 = 2.8;
var showResult = true;
addNumber(number1, number2, showResult);
