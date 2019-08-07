// // var num = 0,
// //     a = "РУби Руби руби";

// //     function ShowAlertText(text) {
// //     alert(text);
// //     let num =10;
// // }



// // ShowAlertText(a);

// // console.log(num);


// console.log(calc(5, 3));

// // функция доступна во всем коде и до и после объявления 
// function calc(a, b) {
//     return (a + b);
// }


// // функция будет доступна в коде только после объявления
// let minus = function (a, b) {
//     let result = a - b;
//     return result;
// };

// console.log(minus(10, 3));

// // новая форма записи функции. Стрелочная форма.
// let dif = (a, b) => a / b;
// console.log(dif(20,2));






// function first() {
//     setTimeout(function(){
//         console.log('Доброе утро');},
//         1000);

// }


// function second (a) {
//     console.log(a);
// }

// // first();
// // second();

// function OneTwoThree (lang, callback){
//     second(lang);

//     callback();
// }

// OneTwoThree("JS",first);






let options = {
    height : 1024,
    width : 1024,
    name: "test"
};

options.bool = true;

options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("свойства " + key + " имеет значение:" + options[key] );
}


console.log(Object.keys(options).length);

let arr = ["one", 3, 4, "six", 3, 23];

arr.pop();
arr.push(123);

arr.shift();

arr.unshift(435435);

console.log(arr);

// arr[99] = 99;

console.log("Пример перебора массива ");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


console.log("Пример использования forEach");

arr.forEach(function(item, i, mass){
    console.log(i + ": " + item + ", массива " + mass);
});


console.log("Пример использования in для массива ");


let mas =[1,223,345,56, 0,67];

for (let r in mas) {
    console.log(r);
}


console.log("Пример разбивки масива на элементы по разделителю");
let ans = prompt("","");
let arr1 = [];


arr1 = ans.split(',');

console.log(arr1);


console.log("Пример объединения масива в строку с разделителем");

let arr3 = ["as","qw","w","q",1,3,4,"sdfds",23];

let A = arr3.join(' >> ');

console.log(A);

console.log("Пример сортировки");
let arr4 = ["as","qw","w","q",1,3,4,"sdfds",23];

let A1 = arr4.sort();

console.log(A1);
 

let boys = {
    health:100,
    age: 33,
    power: 250
};

let kirill = {
age : 21
}; 

kirill.__proto__ = boys;

console.log(kirill);
console.log(kirill.power); 






