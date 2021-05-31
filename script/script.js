'use strict';

// 1 задание

const days = new Map([
    ['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
    ['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
]);
const lang = prompt('Введите язык (ru или en)');

if (lang === 'ru') {
    console.log(days.get('ru'));
} else {
    console.log(days.get('en'));
}

switch (lang) {
    case 'ru':
        console.log(days.get('ru'));          
        break;

    case 'en':
        console.log(days.get('en'));
        break;
}
console.log(days.get(lang));

// 2 задание

const namePerson = 'Вася';

let result = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Максим') ? 'преподаватель' : 'студент';
console.log(`${namePerson} - ${result}`);