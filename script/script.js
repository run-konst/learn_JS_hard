'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const foo = function (str) {
    if (isNumber(str)) {
        console.log(`It's a number ${str}`);                
    } else if (typeof str !== 'string') {
        console.log('Not a string or number');
    } else {
        let trimedStr = str.trim();
        if (trimedStr.length > 30) {
            console.log(trimedStr.substring(0, 30).trim() + '...');            
        } else {
            console.log(trimedStr);
        }
    }
};

foo('asdasd asd ads dda dsada dadss ad as dsa ddas dasd asd asd da  a   ');