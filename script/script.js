'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const playGame = function () {
    let gameNum = Math.ceil(Math.random()*100);
    let counter = 10;
    const gameStart = function () {
        const newGame = function () {
            counter = 10;
            gameNum = Math.ceil(Math.random()*100);
            gameStart();      
        };
        if (counter === 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                newGame();
            } else {
                return;
            }            
        }
        let playerNum = prompt('Угадай число от 1 до 100');
        if (playerNum === null) {
            return;
        }
        while (!isNumber(playerNum) || playerNum > 100 || playerNum < 0) {
            alert('Введи число от 1 до 100!');
            playerNum = prompt('Угадай число от 1 до 100');
            if (playerNum === null) {
                return;
            }
        }
        playerNum = Number(playerNum);
        if (playerNum === gameNum) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                newGame();
            } else {
                return;
            }            
        } else if (playerNum > gameNum) {
            counter--;
            alert('Загаданное число меньше, осталось попыток ' + counter);
            gameStart(); 
        } else if (playerNum < gameNum) {
            counter--;
            alert('Загаданное число больше, осталось попыток ' + counter);
            gameStart();  
        }
    };
    gameStart();
};

playGame();