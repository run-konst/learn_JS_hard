'use strict';

let 
    count = 0,
    animationFrame,
    animation = false;

const
    square = document.querySelector('.square'),
    circle = document.querySelector('.circle'),
    start = document.querySelector('.start-btn'),
    reset = document.querySelector('.reset-btn'),
    animate = () => {
        animationFrame = requestAnimationFrame(animate);
        count++;
        if (count < 100) {
            square.style.top = count*2 + 'px';
        }
        if (count < 200) {
            circle.style.top = count*2 + 'px';
        } else {
            cancelAnimationFrame(animationFrame);
        }
    };

start.addEventListener('click', () => {
    if (animation) {
        cancelAnimationFrame(animationFrame);
        animation = false;     
    } else {
        animationFrame = requestAnimationFrame(animate);
        animation = true; 
    }
});

reset.addEventListener('click', () => {
    cancelAnimationFrame(animationFrame);
    count = 0;
    square.style.top = 0;
    circle.style.top = 0;
    animation = false;    
});