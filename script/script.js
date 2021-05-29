'use strict';
let num = 266219;
let numArr = [];

num = num.toString();
num = num.split('');

num.forEach(element => {
    let i = parseInt(element, 10);
    numArr.push(i);
});

let result = numArr[0];
for (let i = 0; i < numArr.length - 1; i++) {
    result *= numArr[i + 1];
}
console.log(result);

let cube = result**3;
console.log(cube.toString().substring(0, 2));
