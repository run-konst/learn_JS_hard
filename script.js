document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const
        select = document.getElementById('cars'),
        output = document.getElementById('output'),
        getCar = () => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        resolve(JSON.parse(request.responseText));
                    } else {
                        reject(request.status);
                    }
                });
                request.open('GET', './cars.json');
                request.setRequestHeader('Content-type', 'application/json');
                request.send();
            });
        },
        showCar = (data) => {
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                    const {brand, model, price} = item;
                    output.innerHTML = `Тачка ${brand} ${model} <br>
                    Цена: ${price}$`;
                }
            });
        },        
        showError = (error) => {
            output.innerHTML = 'Произошла ошибка';
            console.error(error);
        };

    select.addEventListener('change', () => {
        getCar()
            .then(showCar)
            .catch(showError);
    });

});