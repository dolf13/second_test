'use strict';

let items = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.column .adv'),
    // adv = document.querySelector('.adv'),
    // adv = document.getElementsByClassName('adv'), //не работает по имени класса - дает  HTML Collection
    column = document.querySelectorAll('.column'),
    mess = document.querySelector('.prompt'),
    ul = document.createElement('ul');


// добавить пятый пункт меню
ul.classList.add('menu-item');
ul.textContent = 'Пятый пункт';
menu.appendChild(ul);


// переименовать второй и третий - восстановить порядок
// items[1].textContent = 'Второй пункт';
// items[2].textContent = 'Третий пункт';

//правильно 
menu.insertBefore(items[2],items[1]);


// поменяли фон на попку
document.body.style.background = 'url(../img/popka.jpg)';


// изменили текст
title.textContent = 'Мы продаем только подлинную технику Apple';


// Удаляем элемент
//Важно! Если мы объявляем переменную блока через ClassName - получаем коллекцию, даже если объект 1 на странице 

// column[1].removeChild(adv[0]); // так нужно удалять если берешь объект по ClassName
// column[1].removeChild(adv);
adv.remove(); // правильно 

// Делаем функцию вопрос -ответ
function Qstn() {
    let k = prompt("Вам нравится техника Apple?");
    mess.textContent = "Вам нравится техника Apple? </br> Ответ: \n" + k;
    mess.innerHTML = "<p>Вам нравится техника Apple?</p> </br> <p>Ответ:</p> <H1>" + k + "</H1>";
}

// Запускаем функцию вопрос-ответ через 2 сек после 
setTimeout(Qstn, 2000);