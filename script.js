'use strict';

let 
    money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let
    appData = {
    cache: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
    };

let
    Ras1 = prompt("Введите обязательную статью расходов в месяц", ""),
    Bu1 = prompt("Во сколько это обойдется?", ""),
    Ras2 = prompt("Введите  вторую обязательную статью расходов в месяц", ""),
    Bu2 = prompt("Во сколько это обойдется?", "");

// так работает правильно
appData.expenses[Ras1] = Bu1;
appData.expenses[Ras2] = Bu2;

console.log(appData.expenses);

alert(appData.Cache/30);

// а так работает неправильно
// appData.expenses.Rashod1 = Budget1;
// appData.expenses.Rashod2 = Budget2;