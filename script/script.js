'use strict';

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();
let dayNumber;
if (date.getDay() === 0) {
    dayNumber = 6;        
} else {        
    dayNumber = date.getDay() - 1;
}

for (let i = 0; i < days.length; i++) {
    let day = days[i];
    if (i === dayNumber) {
        if (day === 'Суббота' || day === 'Воскресенье') {
            day = day.bold().italics();        
        } else {
            day = day.bold();            
        }
    }
    if (day === 'Суббота' || day === 'Воскресенье') {
        day = day.italics();        
    } 
    document.write(day + '<br>');    
}
