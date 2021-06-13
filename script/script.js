'use strict';

let users = [];

const 
    username = document.querySelector('.username'),
    regBtn = document.querySelector('.reg-btn'),
    authBtn = document.querySelector('.auth-btn'),
    userList = document.querySelector('.user-list'),
    options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    },
    capitalizeFirstLetter = function (arr) {
        let newArr = [];
        arr.forEach( function (element) {
            newArr.push(element.charAt(0).toUpperCase() + element.slice(1));       
        });
        return newArr;
    },
    saveStorage = function () {
        localStorage.removeItem('users');
        localStorage.setItem('users', JSON.stringify(users));
    },
    loadStorage = function () {
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        } else {
            users = [];
        }
    },
    render = function () {
        userList.textContent = '';

        loadStorage();

        users.forEach(function (item) {
            const li = document.createElement('li');
            li.innerHTML = `Имя: ${item.name}, Фамилия: ${item.surname}, зарегистрирован: ${item.regDate}<button class="delete-btn">Удалить</button>`;
            userList.append(li);
            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                users.splice(users.indexOf(item), 1);
                saveStorage();
                render();    
            });
        });
    };

regBtn.addEventListener('click', function () {
    let newUser = {};
    let user = prompt('Введите ваши имя и фамилию через пробел');
    user = user.trim().toLocaleLowerCase().split(' ');
    if (user.length !== 2) {
        alert('Ошибка ввода');
        return;        
    }
    user = capitalizeFirstLetter(user);
    newUser.name = user[0];
    newUser.surname = user[1];
    newUser.login = prompt('Введите ваш логин');
    newUser.password = prompt('Введите пароль');
    newUser.regDate = new Date().toLocaleString('ru-RU', options);
    users.push(newUser);
    saveStorage();
    render(); 
});

authBtn.addEventListener('click', function () {
    const login = prompt('Введите логин');
    let logged = false;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.login === login) {
            const password = prompt('Введите пароль');
            if (user.password === password) {
                username.textContent = user.name;
                localStorage.setItem('username', user.name);
                logged = true;               
            } else {
                alert('Пароль не верен');
                return;
            }
        }
    }
    if (logged === false) {
        alert('Пользователь не найден');        
    }
});

if (localStorage.getItem('username')) {
    username.textContent = localStorage.getItem('username');
} else {
    username.textContent = 'Юзер';
}
render();