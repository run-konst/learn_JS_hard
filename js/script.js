'use strict';

const 
	filterByType = (type, ...values) => values.filter(value => typeof value === type), 
	//Объявляем функцию, в которую передаем тип и массив значений с помощью rest параметра, 
	//функция отфильтровывает массив, оставляя там только значения заданного типа

	hideAllResponseBlocks = () => { // Объявляем функцию
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		//Получаем все блоки div.dialog__response-block, делаем из них массив
		responseBlocksArray.forEach(block => block.style.display = 'none');
		//Прячем все блоки на странице
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => { // Объявляем функцию с 3 параметрами
		hideAllResponseBlocks(); // Прячем блоки
		document.querySelector(blockSelector).style.display = 'block'; //Показываем блок с переданным селектором
		if (spanSelector) { //если передан параметр spanSelector
			document.querySelector(spanSelector).textContent = msgText; //задаем этому span переданный msgText
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
	//Объявляем функцию, которая покажет блок с ошибкой на основе функции showResponseBlock

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	//Объявляем функцию, которая покажет блок с результатом на основе функции showResponseBlock

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
	//Объявляем функцию, которая покажет блок без результата на основе функции showResponseBlock

	tryFilterByType = (type, values) => {
		//Объявляем функцию
		try { //Если код ниже выдаст ошибку, т.к. filterByType может не определить тип данных, перейти к блоку catch
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			//В переменную valuesArray записываем строку, полученную с помощью функции filterByType и метода join
			const alertMsg = (valuesArray.length) ? 
			//Создаем переменную в которую будем записывать сообщение с результатом работы программы
				`Данные с типом ${type}: ${valuesArray}` : // результат, если valuesArray не пустая строка				
				`Отсутствуют данные типа ${type}`; // результат, если valuesArray пустая строка				
			showResults(alertMsg); // выводим результат в верстку
		} catch (e) {
			showError(`Ошибка: ${e}`); // выводим ошибку в верстку
		}
	};

const filterButton = document.querySelector('#filter-btn'); //Получим кнопку

filterButton.addEventListener('click', e => { //Повесим на кнопку слушатель на клик
	const typeInput = document.querySelector('#type'); //Получим поле с выбором типа
	const dataInput = document.querySelector('#data'); //Получим поле с вводом данных

	if (dataInput.value === '') { //Если в поле данных ничего не введено
		dataInput.setCustomValidity('Поле не должно быть пустым!'); //Сообщение-подсказка при валидации формы
		showNoResults(); // выводим в верстку блок с пустым результатом
	} else {
		dataInput.setCustomValidity('');//Убирает сообщение-подсказку при валидации формы
		e.preventDefault(); //Запрещаем поведение по умолчанию при отправке формы
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
		//Запускаем функцию tryFilterByType, передаем в нее значения из полей типа и данных, обрезаем пробелы на концах
	}
});

