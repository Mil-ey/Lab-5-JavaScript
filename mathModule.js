let a = 12 ;
let b = 7 ;
let c = 3 ;
const add = (a,b) => {
    return a + b;
}
const sub = (c,b) => {
    return c - b;
}
console.log(add(a,b));
console.log(sub(c,b));
console.log(mul(a,c));
export {add,sub};
export default function mul(a,c) {
    return a * c;
}


import {toUpperCase} from './stringModule.js';

let num1 = 12;
let num2 = 10;
const addAndLogUpper = (num1, num2) => {
    const result = num1 + num2;
    const resultAsString = result.toString();
    console.log(toUpperCase(resultAsString)); 
}

addAndLogUpper(12,10);
export {addAndLogUpper};

import {findMax} from './arrayModule.js';
let B = [1,2,3,4,5,6,7,8,9,10];
console.log(findMax(B));

let num3 = findMax(B);
let num4 = 3;
const multiply = (num3,num4) => {  
const result = num3 * num4;
const finalResult = result.toString();
console.log(toUpperCase(finalResult));
console.log(finalResult);
}

export {multiply};











