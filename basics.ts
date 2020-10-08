console.log('your code goes here!');

function add(n1: number, n2: number, showResult: boolean){
    console.log(typeof n1);

    // How verify the types without TypeScript
    if(typeof n1 !== 'number' && typeof n2 !== 'number'){
        throw new Error('Incorrect input');
    }

    return showResult ? console.log(n1 + n2) : 'no result to show';
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(number1, number2, printResult);