'use strict';

const task1 = document.getElementById('task1');
task1.innerHTML = task1.innerHTML.replace(/функци.+?(?=[^а-я])/gi, '<strong>$&</strong>');

const task2 = document.getElementById('task2');
task2.innerHTML = task2.innerHTML.replace(/(<b>)\d\d:\d\d.?(<\/b>)/gi, match => match.substring(3, match.length - 4));
task2.innerHTML = task2.innerHTML.replace(/\d\d:\d\d/gi, '<b>$&</b>');

document.body.innerHTML = document.body.innerHTML.replace(/=?".+?"|«.+?»/g, match => match.match(/=".+?"/) ? match : `<mark>${match}</mark>`);

document.body.innerHTML = document.body.innerHTML.replace(/http:.+?ru/g, match => `<a href="${match}">${match.substr(7)}</a>`);

console.log(document.body.innerHTML.match(/#334455/));

document.body.innerHTML = document.body.innerHTML.replace(/http:.+?html/g, match => `<a href="${match}">${match.substr(7).replace(/\/.+?html/, '')}</a>`);

/* 

1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>». 

2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>,

5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>


Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/
 */