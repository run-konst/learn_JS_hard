'use strict';

const foo = function (str) {
    if (typeof str !== 'string') {
        console.log('Not a string');
    } else {
        let trimedStr = str.trim();
        if (trimedStr.length > 30) {
            console.log(trimedStr.substring(0, 30).trim() + '...');            
        } else {
            console.log(trimedStr);
        }
    }
};

foo('         asdasd   asd sdklasdjkh asdjk ldhajksdh sajkdhjkd ahdkjads asd    ');