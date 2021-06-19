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

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};

const 
    countrySelect = document.querySelector('#country'),
    citySelect = document.querySelector('#city'),
    result = document.querySelector('.result'),
    countryOptions = countrySelect.querySelectorAll('option'),
    countryArr = {};

countryOptions.forEach(item => {
    countryArr[item.value] = item.textContent;
});

countrySelect.addEventListener('change', () => {
    citySelect.style.display = 'inline-block';
    citySelect.textContent = '';
    const country = countrySelect.value;
    const cities = cityArr[country];
    cities.forEach(item => {
        const city = document.createElement('option');
        city.value = item;
        city.textContent = item;
        citySelect.append(city);
    });
});

citySelect.addEventListener('change', () => {
    result.textContent = `${countryArr[countrySelect.value]}, ${citySelect.value}`;
});