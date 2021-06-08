'use strict';

const
    date1 = document.querySelector('.date1'),
    date2 = document.querySelector('.date2'),
    options1 = {
        weekday: "long",
        day: "numeric",
        month: "long",
    },
    options2 = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    },
    options3 = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    },
    
    numWord = function (value, words){  
        value = Math.abs(value) % 100; 
        var num = value % 10;
        if (value > 10 && value < 20) {
            return words[2];
        }
        if (num > 1 && num < 5) {
            return words[1];
        }
        if (num === 1) {
            return words[0];
        } 
        return words[2];
    };

const showDate = function () {
    const 
        date = new Date(),
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    date1.textContent = `Сегодня ${date.toLocaleString('ru-RU', options1)} ${year} года, ${hours} ${numWord(hours, ['час', 'часа', 'часов'])} ${minutes} ${numWord(minutes, ['минута', 'минуты', 'минут'])} ${seconds} ${numWord(seconds, ['секунда', 'секунды', 'секунд'])}`;
    
    date2.textContent = `${date.toLocaleString('ru-RU', options2)} - ${date.toLocaleString('ru-RU', options3)}`;        
};

showDate();

setInterval(showDate, 1000);
