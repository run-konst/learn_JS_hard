document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const
        valInput = document.querySelector('.val-input'),
        rubToValSelect = document.querySelector('.rub-to-val-select'),
        rubResult = document.querySelector('.rub-result'),
        valBtn = document.querySelector('.val-btn'),
        rubInput = document.querySelector('.rub-input'),
        valToRubSelect = document.querySelector('.val-to-rub-select'),
        valResult = document.querySelector('.val-result'),
        rubBtn = document.querySelector('.rub-btn'),
        rates = {},
        getRates = (data) => {
            rates.EUR = data.rates.RUB;
            rates.USD = data.rates.RUB/data.rates.USD;
            },
        calculateVal = () => {
            rubResult.value = Math.round(valInput.value * rates[rubToValSelect.value] * 100) / 100;
        },
        calculateRub = () => {
            valResult.value = Math.round(rubInput.value / rates[valToRubSelect.value] * 100) / 100;
        };

    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=5152f4e656ceaf0d38358bc090f7cbe9')
        .then(response => {    
            if (response.status !== 200) {
                throw new Error('Network status is not 200');
            }
            return response.json();
        })
        .then(getRates)
        .catch(error => {
            console.error(error);
        });

    valBtn.addEventListener('click', calculateVal);
    rubBtn.addEventListener('click', calculateRub);

});