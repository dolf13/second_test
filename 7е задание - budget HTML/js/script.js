'use strict';

//  Скрипт задание 7

// Вносим переменные по заданию 

let budgetV = document.getElementsByClassName('budget-value'),
    daybudgetV = document.getElementsByClassName('daybudget-value'),
    levelV = document.getElementsByClassName('level-value'),
    expensesV = document.getElementsByClassName('expenses-value'),
    optionalexpensesV = document.getElementsByClassName('optionalexpenses-value'),
    incomeV = document.getElementsByClassName('income-value'),
    monthsavingsV = document.getElementsByClassName('monthsavings-value'),
    yearsavingsV = document.getElementsByClassName('yearsavings-value'),

    expensesItems = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncomeV = document.querySelector('.choose-income'),
    checkBoxSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    startBtn = document.querySelector('#start'),

    yearV = document.querySelector('.year-value'),
    monthV = document.querySelector('.month-value'),
    dayV = document.querySelector('.day-value');


// спрашиваем про бюджет и дату
let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

// start();


// Объект с информацией
let appData = {
    Budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function () {              // Спрашиваем и записываем обязательные расходы 
        for (let i = 0; i < 2; i++) {
            let
                a = prompt("Введите " + (i + 1) + "-ю обязательную статью расходов в месяц", ""),
                b = prompt("Во сколько это обойдется?", "");


            if (typeof (a) === 'string' && typeof (a) != null && (typeof (b)) != null &&
                a != "" && b != "" && a.length < 50 && b.length < 50) {
                appData.expenses[a] = b;
                console.log("ДА ДА ДА");
            } else {
                confirm('Вы ввели некорректные ответы на вопрос! Попробуйте еще раз.');
                i--;
            }
        }
    },
    detectDayBudget: function () {                 // Расчет дневного бюджета из бюджета за 1 месяц
        appData.moneyPerDay = (appData.Budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
        console.log(appData);
    },
    detectLevel: function () {                // Проверяем на уровень дохода по дневному бюджету
        if (appData.moneyPerDay < 1000) {
            console.log('У вас минимальный уровень дохода');
        } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 5000) {
            console.log('У вас средний уровень дохода');
        } else if (appData.moneyPerDay >= 5000) {
            console.log('У вас высокий уровень дохода');
        }
    },
    checkSavings: function () {               // Расчет ежемесячного дохода с процента от накоплений
        if (appData.saving == true) {
            let save = +prompt("Какая сумма накоплений"),
                procent = +prompt("Какой процент");

            appData.mothInCome = save / 100 / 12 * procent;
            alert("Доход в месяц: " + appData.mothInCome);
        }
    },
    chooseOptExpenses: function () {         // Записываем необязательные расходы
        let a = {};
        for (let i = 1; i < 4;) {
            a[i] = prompt(i + '-я статья необязательных расходов?');
            i++;
        }
        appData.optionalExpenses = a;
    },
    chooseIncome: function () {          // Записываем названия доп доходов
        let items = "";
        console.log(typeof (items));
        while (items == "" || items == null || items.length < 3) {
            items = prompt("Что вам приносит дополнительный доход. Перечисли через запятую", "");
        }

        appData.income = items.split(', ');
        appData.income.push(prompt("Допишите, если вспомнили что-то еще. "));
        appData.income.sort();

        appData.income.forEach(function (item, i, arrr) {
            alert("Способы доп зароботка:  \n" + (i + 1) + "- й:" + appData.income[i]);
        });

        // for (let xc of appData.income)  {         // Выводм значение массива циклом for of 
        //     console.log("Для элемента объекта c индексом :  " + appData.income.indexOf(xc)  + " \n Цикл FOR OF дает значение: " + xc);
        // } 
        
    }
};


for (let x in appData) {
    console.log("Программа содержит следующие данные:  " + x+ ' --- ' + appData[x]);
}
