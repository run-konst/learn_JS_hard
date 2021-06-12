'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {    
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.create = function () {
    if (this.selector[0] === '.') {
        const newElement = document.createElement('div');
        newElement.classList.add(this.selector.substr(1));
        newElement.textContent = 'Привет, я Div c классом ' + this.selector.substr(1);
        this.addStyle(newElement);
        document.body.append(newElement);        
    } else if (this.selector[0] === '#') {
        const newElement = document.createElement('p');
        newElement.id = this.selector.substr(1);
        newElement.textContent = 'Привет, я параграф с ID ' + this.selector.substr(1);
        this.addStyle(newElement);
        document.body.append(newElement);      
    }
};
DomElement.prototype.addStyle = function (elem) {
    elem.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background-color: ${this.bg};
    font-size: ${this.fontSize};
    `;     
};

const elem = new DomElement('#block', '100px', '300px', 'yellow', '30px');
elem.create();

const squareElem = new DomElement('.square', '100px', '100px', 'red', '16px');

document.addEventListener("DOMContentLoaded", squareElem.create());

const square = document.querySelector('.square');

square.style.position = 'absolute';
square.style.top = 0;
square.style.left = 0;

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 38) {
        square.style.top = parseInt(square.style.top) - 10 + 'px';        
    } //up
    if (event.keyCode === 40) {
        square.style.top = parseInt(square.style.top) + 10 + 'px';     
    } //down
    if (event.keyCode === 37) {
        square.style.left = parseInt(square.style.left) - 10 + 'px';        
    } //left
    if (event.keyCode === 39) {
        square.style.left = parseInt(square.style.left) + 10 + 'px';        
    } //right
});