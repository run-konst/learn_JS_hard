'use strict';

// 1 задание

const langForm = document.querySelector('.lang-form');
const ifOutput = document.querySelector('.if-output');
const switchCaseOutput = document.querySelector('.switch-case-output');
const arrayOutput = document.querySelector('.array-output');
let days = new Map([
    ['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
    ['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
]);

langForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const lang = document.querySelector('input[name="lang"]:checked').value;
    console.log(lang);

    if (lang === 'ru') {
        ifOutput.textContent = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';        
    } else {
        ifOutput.textContent = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';  
    }

    switch (lang) {
        case 'ru':
            switchCaseOutput.textContent = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';            
            break;
    
        case 'en':
            switchCaseOutput.textContent = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
            break;
    }
    arrayOutput.textContent = days.get(lang);
});

// 2 задание

const namePerson = 'Вася';

let result = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Максим') ? 'преподаватель' : 'студент';
console.log(`${namePerson} - ${result}`);