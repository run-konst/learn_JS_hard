'use strict';

const 
    btn = document.querySelector('button'),
    colorText = document.querySelector('.color'),
    setColor = function () {
        let 
            r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256),
            color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        document.body.style.backgroundColor = color;
        colorText.textContent = color;   
    };

btn.addEventListener('click', setColor);

setColor();