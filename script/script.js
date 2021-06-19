'use strict';

const
    sumBtn = document.querySelector('#sum'),
    multBtn = document.querySelector('#mult'),
    res = document.querySelector('#res'),
    calculator = {
        a: 0,
        b: 0,
        c: 0,
        getValues() {
            this.a = +document.querySelector('#a').value;
            this.b = +document.querySelector('#b').value;
        },
        sum() {
            this.getValues();
            this.c =  this.a + this.b;
            this.show();
        },
        mult() {
            this.getValues();
            this.c = this.a * this.b;
            this.show();
        },
        show() {
            res.value = this.c;
        },
        eventListeners() {
            sumBtn.addEventListener('click', this.sum.bind(this));
            multBtn.addEventListener('click', this.mult.bind(this));
        }
    };

calculator.eventListeners();