// var num = 0,
//     a = "РУби Руби руби";

//     function ShowAlertText(text) {
//     alert(text);
//     let num =10;
// }



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






// let options = {
//     height : 1024,
//     width : 1024,
//     name: "test"
// };

// options.bool = true;

// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("свойства " + key + " имеет значение:" + options[key] );
// }


// console.log(Object.keys(options).length);

// let arr = ["one", 3, 4, "six", 3, 23];

// arr.pop();
// arr.push(123);

// arr.shift();

// arr.unshift(435435);

// console.log(arr);

// // arr[99] = 99;

// console.log("Пример перебора массива ");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// console.log("Пример использования forEach");

// arr.forEach(function(item, i, mass){
//     console.log(i + ": " + item + ", массива " + mass);
// });


// console.log("Пример использования in для массива ");


// let mas =[1,223,345,56, 0,67];

// for (let r in mas) {
//     console.log(r);
// }


// console.log("Пример разбивки масива на элементы по разделителю");
// let ans = prompt("","");
// let arr1 = [];


// arr1 = ans.split(',');

// console.log(arr1);


// console.log("Пример объединения масива в строку с разделителем");

// let arr3 = ["as","qw","w","q",1,3,4,"sdfds",23];

// let A = arr3.join(' >> ');

// console.log(A);

// console.log("Пример сортировки");
// let arr4 = ["as","qw","w","q",1,3,4,"sdfds",23];

// let A1 = arr4.sort();

// console.log(A1);


// let boys = {
//     health:100,
//     age: 33,
//     power: 250
// };

// let kirill = {
// age : 21
// }; 

// kirill.__proto__ = boys;

// console.log(kirill);
// console.log(kirill.power); 





/////////////////////////////////////////  ПОЛУЧАЕМ СТРОКУ
/*

1) a = 6;
   a = String(a);
   a- строка  теперь

2) Канкотинация (сложение со строкой)
let a = "qwe" + false;
console.log(a);
let b = typeof(a);
console.log(b);
-- string
-- string

*/

/////////////////////////////////////////  ПОЛУЧАЕМ ЧИСЛО

/*

1)
a = "5";
a = Number(a);
console.log(typeof (a));
-- numder

2) 
a = "5";
a = +a;
console.log(typeof (a));
-- numder

3) 
a = "15px"; 
b = parseInt(a, 10);
console.log(b);


/////////////////////////////////////////  FALSE 

0 
"" //пустая строка без пробела  
null 
undefined
NaN

/////////////////////////////////////////  TRUE 
Это все остальное, что не FALSE !!! 


/////////////////////////////////////////  ПОЛУЧАЕМ BOOLEAN 
1) 
let switcher = null;

if (switcher) {
    console.log("Пам парам! Свичер стал TRu")
}

switcher = 1;

if (switcher) {
    console.log("Пам парам! Свичер стал TRu")
}

/////////////////////////////////////////   


2) 
a = 5;
a = Boolean(a);
console.log(typeof(a));
-- boolean

3) 
a = '5sdfdsf';
a = !!a;
console.log(typeof(a));
-- boolean



let aa = ([ ] + false - null + true);


console.log(aa);

let y = 1; 
let x = y = 2; 
console.log(x);


v =  [ ] + 1 + 2;
console.log(v);
console.log(typeof(v));

v =   "1"[0] ;
console.log(v);
console.log(typeof(v));


b = (2 && 1 && null && 0 && undefined);
 console.log(b);
 console.log(typeof(b));


 if (null || 2 && 3 || 4) {
    console.log("Trueeeeee");
 }


 if (2 && 1 && null && 0 && undefined) {
    console.log("Falseeeee");
 }


 */


//  Вопросы к этому заданию

//  Какое будет выведено значение: let x = 5; alert( x++ ); ?
//5 тк в алерт переменная типа строка и ++ является сложением строк
 
//  Чему равно такое выражение: [ ] + false - null + true ?
//NaN    []объект + false = string  // string - null = NaN
 
//  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//2
 
//  Чему равна сумма [ ] + 1 + 2?
//12   тк складываются строки 
 
//  Что выведет этот код: alert( "1"[0] )?
// 1 тк обращаемся к первому элементу псевдомассива строки "1"
 
//  Чему равно 2 && 1 && null && 0 && undefined ?
 // null  логическое И возвращает false слева если его там нет возвращает правый элемент

 //  Есть ли разница между выражениями? !!( a && b ) и (a && b)?
 // есть  - пример ниже

//  let a = 12;
// let b = null;

// let c = !!( a && b ); 
// let k =  (a && b);
// alert(c); false 
// alert(typeof(c)); boolean
// alert(k); null
// alert(typeof(k)); object

//  Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// 3 (тип number)
 
//  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// a == b false  почему одинаковые массивы не равны - потому что это разные объекты, идет сравнение ссылок на разные объекты

 
//  Что выведет этот код: alert( +"Infinity" ); ?
//Infinity - это число 
 
//  Верно ли сравнение: "Ёжик" > "яблоко"?
 // false тк alert( 'Z' > 'A' ); // true



//  Чему равно 0 || "" || 2 || undefined || true || falsе ?
// 2
 let aaa = (0 || "" || 2 || undefined || true || falsе);
alert( aaa ) ;
// alert(c);
 alert(typeof(aaa)); 




// alert(12 && 3 );

// alert(12 || 3 );
//  alert(null || 12 && 3 || 4);

//  alert(2 && 1 && null && 0 && undefined);