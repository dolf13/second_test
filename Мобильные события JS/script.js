let first = document.querySelector('#first');

first.innerHTML = '<h1>Hello Dolf!</h1>';

window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');


    // box.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log("Blue box ");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Blue box - touchmove \n" + e.touches[0].pageX);
        // console.log(e.touches);
    });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Blue box - touchend ");
    //     // console.log(e.touches);
    // });


    // Регулярные выражения

    // new RegExp(pattern, flags);
    // /pattern/flags

    // let ans = prompt('Введите ваше имя ');
    // let reg = /n/ig;

    // console.log(reg.test(ans)); // проверка регулрного вырвжения reg строкой ans = boolean


    // // console.log(ans.search(reg));

    // i - неважно какой регистр
    // g - глобальный ищет несколько а не первое совпадение
    // m - много строчность 
    //  \d - любая цифры  
    //  \D - не цифра 
    //   \w - любая буквы 
    //   \W - не буква 
    //  \s - любой пробел
    //   \ - экранирующий слэш 

    let ans = prompt('Давай найдем в строке цифры ');
    let reg = /\d/g;
    console.log(ans.match(reg));


// найдем dd-mm-yyyy (любую дату) в произвольной строке 

let str = prompt("Введите строку с датой в виде dd-mm-yyyy");

let date = str.match(/\d\d-\d\d-\d\d\d\d/g);
console.log(date);


    // console.log(ans.match(reg));


    // let pass = prompt("Введите пароль!");

    // console.log(pass.replace(/./g, '#'));

    // alert('12-34-2019'.replace(/-/g,':'));

});