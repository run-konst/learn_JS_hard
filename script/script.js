'use strict';

// 1 задание

const arr = ['2345', '1234', '2315', '12354', '4567', '5467456', '46768'];

const filtered = arr.filter(
    function checkElement( num ) {
      return num.split('')[0] === '2' || num.split('')[0] === '4';
    }
);

console.log(filtered);

for (let i = 0; i < arr.length; i++) {
    const num = arr[i].split('');
    if (num[0] === '2' || num[0] === '4') {
        console.log(arr[i]);          
    }  
}

// 2 задание

for (let i = 1; i <= 100; i++) {
    let k = 0;
    for (let j = 1; j <= i; j++) {
        if ((i % j) === 0) {
            k++;
        }
    }
    if (k === 2) {
        console.log(`Число ${i} - простое, делители 1 и ${i}`);        
    }  
}