'use strict';
let num = 266219;
let numArr = [];

num = num.toString().split('');

num.forEach(element => {
    let i = parseInt(element, 10);
    numArr.push(i);
});

let result = numArr[0];
for (let i = 0; i < numArr.length - 1; i++) {
    result *= numArr[i + 1];
}
console.log(result);

console.log((result**3).toString().substring(0, 2));