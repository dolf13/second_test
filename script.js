'use strict';



let Money = 0,
    Time = "13-05-1986";

alert("Приступим?");


Money = prompt("Ваш бюджет на месяц?", "");
console.log(Money);

Time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(Time);

var Question1 = "Введите обязательную статью расходов в месяц",
    Question2 = "Во сколько это обойдется?";

let Rashod1 = prompt(Question1, ""),
    Budget1 = prompt(Question2, ""),
    Rashod2 = prompt(Question1, ""),
    Budget2 = prompt(Question2, "");

let expenses = {
    "Rashod1" : "Budget1",
    "Rashod2" : "Budget2"
};




var appData = {
    Cache: Money,
    timeData: Time,
    expenses,
    optionalExpenses: {},
    income: {},
    saving: false

};

console.log(expenses);


console.log(appData.Cache);