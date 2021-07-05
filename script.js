document.addEventListener('DOMContentLoaded', () => {

    const
        countries = data.RU,
        input = document.getElementById('select-cities'),
        closeBtn = document.querySelector('.close-button'),
        hrefBtn = document.querySelector('.button'),
        listDefault = document.querySelector('.dropdown-lists__list--default'),
        listSelect = document.querySelector('.dropdown-lists__list--select'),
        listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
        autocompleteCitiesBlock = listAutocomplete.querySelector('.dropdown-lists__countryBlock'),
        sortCities = (a, b) => {
            if (+a.count < +b.count) {
                return 1;
            }
            if (+a.count > +b.count) {
                return -1;
            }
            return 0;
        },
        initDefaults = () => {
            listDefault.style.display = 'block';
            listSelect.style.display = 'none';
            listAutocomplete.style.display = 'none';
            input.value = '';
            closeBtn.style.display = 'none';
            hrefBtn.href = '#';
        },
        initListSelect = () => {
            listDefault.style.display = 'none';
            listAutocomplete.style.display = 'none';
            listSelect.style.display = 'block';
            listSelect.querySelector('.dropdown-lists__col').textContent = '';
        },
        initListAutocomplete = () => {
            listDefault.style.display = 'none';
            listSelect.style.display = 'none';
            listAutocomplete.style.display = 'block';
            autocompleteCitiesBlock.textContent = '';
        },
        clickInput = () => {
            if (input.value !== '') {
                return;
            }
            initDefaults();
        },
        createCity = (city, country) => {
            const cityBlock = document.createElement('div');
            cityBlock.classList.add('dropdown-lists__line');
            cityBlock.innerHTML = `
            <div class="dropdown-lists__city">${city.name}</div>
            <div class="dropdown-lists__count">${city.count}</div>
            `;
            country.append(cityBlock);
        },
        createList = (list, country, citiesNum = country.cities.length) => {
            const col = list.querySelector('.dropdown-lists__col');
            const countryBlock = document.createElement('div');
            countryBlock.classList.add('dropdown-lists__countryBlock');
            countryBlock.innerHTML = `
            <div class="dropdown-lists__total-line">
                <div class="dropdown-lists__country">${country.country}</div>
                <div class="dropdown-lists__count">${country.count}</div>
            </div>
            `;
            col.append(countryBlock);
            for (let i = 0; i < citiesNum; i++) {
                createCity(country.cities[i], countryBlock);
            }
        },
        createListAutocomplete = () => {
            if (input.value === '') {
                initDefaults();
                return;
            }
            initListAutocomplete();
            const inputStr = new RegExp(`^${input.value}`, 'i');
            let matches = 0;
            countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.match(inputStr)) {
                        createCity(city, autocompleteCitiesBlock);
                        matches++;
                    }
                });
            });
            if (matches === 0) {
                autocompleteCitiesBlock.innerHTML = `
                <div class="dropdown-lists__line">
                    <div class="dropdown-lists__city">Совпадений не найдено</div>
                </div>
                `;
            }
        };

    countries.forEach(country => country.cities.sort(sortCities));
    countries.forEach(country => createList(listDefault, country, 3));

    input.addEventListener('click', clickInput);
    input.addEventListener('input', createListAutocomplete);
    closeBtn.addEventListener('click', initDefaults);

    document.addEventListener('click', event => {
        const
            targetCountry = event.target.closest('.dropdown-lists__total-line'),
            targetCity = event.target.closest('.dropdown-lists__line'),
            targetListDefault = event.target.closest('.dropdown-lists__list--default'),
            targetListSelect = event.target.closest('.dropdown-lists__list--select');
        if (targetCountry && targetListDefault) {
            const countryName = targetCountry.querySelector('.dropdown-lists__country').textContent;
            input.value = countryName;
            closeBtn.style.display = 'block';
            initListSelect();
            let country;
            countries.forEach(elem => {
                if (elem.country === countryName) {
                    country = elem;
                }
            });
            createList(listSelect, country);
        }
        if (targetCountry && targetListSelect) initDefaults();
        if (targetCity) {
            const cityName = targetCity.querySelector('.dropdown-lists__city').textContent;
            input.value = cityName;
            closeBtn.style.display = 'block';
            countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name === cityName) {
                        hrefBtn.href = city.link;
                    }
                });
            });
            createListAutocomplete();
        }
    });
});
