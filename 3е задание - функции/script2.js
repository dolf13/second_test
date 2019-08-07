// var num = 0,
//     a = "РУби Руби руби";

//     function ShowAlertText(text) {
//     alert(text);
//     let num =10;
// }



// ShowAlertText(a);

// console.log(num);


console.log(calc(5, 3));

// функция доступна во всем коде и до и после объявления 
function calc(a, b) {
    return (a + b);
}


// функция будет доступна в коде только после объявления
let minus = function (a, b) {
    let result = a - b;
    return result;
};

console.log(minus(10, 3));

// новая форма записи функции. Стрелочная форма.
let dif = (a, b) => a / b;
console.log(dif(20,2));