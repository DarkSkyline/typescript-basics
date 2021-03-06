"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combinedAge = combine(30, 26, 'as-number');
console.log(combinedAge);
var combinedStringAge = combine('30', '26', 'as-number');
console.log(combinedStringAge);
var combinedNames = combine('Max', 'Ana', 'as-text');
console.log(combinedNames);
