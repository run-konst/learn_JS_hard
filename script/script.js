'use strict';

const
    input = document.querySelector('input'),
    text = document.querySelector('p'),
    handleEvent = () => text.textContent = input.value,
    debounce = (func, time) => {
        return function (args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= time)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => func(args), time);
        };
    };
    
input.addEventListener('input', debounce(handleEvent, 300));