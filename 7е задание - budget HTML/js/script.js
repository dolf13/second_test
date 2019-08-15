'use strict';

//  Скрипт задание 7

// Вносим переменные по заданию 

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesV = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsV = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsV = document.getElementsByClassName('yearsavings-value')[0],

    expensesItems = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncomeV = document.querySelector('.choose-income'),
    checkBoxSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),


    yearV = document.querySelector('.year-value'),
    monthV = document.querySelector('.month-value'),
    dayV = document.querySelector('.day-value');

let money, time, nowDate;
// Объект с информацией
let appData = {
    Budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
    monthSum: 0
};



// Начать расчет
startBtn.addEventListener('click', function () {
    // вводим дату и проверяем на валидность костылем
    do {
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        nowDate = new Date(Date.parse(time));
        console.log(nowDate);
    } while (nowDate == 'Invalid Date');

    // спрашиваем про бюджет и проверяем ввод 
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.Budget = money;
    appData.timeData = time;
    budgetValue.textContent = appData.Budget.toFixed();

    yearV.value = nowDate.getFullYear();
    monthV.value = nowDate.getMonth() + 1;
    dayV.value = nowDate.getDate();

// Показываем кнопки, если бюджет ввели 
    if (appData.Budget != undefined){
    expensesBtn.style.display = ''; 
    optionalExpensesBtn.style.display = ''; 
    countBtn.style.display = ''; 
}
});

//Сначала скроем все кнопки кроме Старт. 
 expensesBtn.style.display = 'none'; 
 optionalExpensesBtn.style.display = 'none';
 countBtn.style.display = 'none';

// Спрашиваем и записываем обязательные расходы 
expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let
            a = expensesItems[i].value,
            b = expensesItems[++i].value;
        console.log(i);
        // expensesItems[i].value = '';
        // expensesItems[i-1].value = '';

        if (typeof (a) === 'string' && typeof (a) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            appData.monthSum = sum;
            expensesValue.textContent = sum;


        } else {
            confirm('Вы ввели некорректные ответы на вопрос! Попробуйте еще раз.');
            i--;
            break;
        }
    }

});


// Записываем необязательные расходы
optionalExpensesBtn.addEventListener('click', function () {

    for (let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        console.log(optionalExpensesItem[i].value);
        optionalExpensesV.textContent += (i + 1) + ')' + appData.optionalExpenses[i] + '  ';
    }
});


// Расчет дневного бюджета из бюджета за 1 месяц
countBtn.addEventListener('click', detectDayBudgetAndLavel);

function detectDayBudgetAndLavel() {
    if (appData.Budget != undefined) {
        appData.moneyPerDay = ((appData.Budget-appData.monthSum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        // Проверяем на уровень дохода по дневному бюджету
        if (appData.moneyPerDay < 1000) {
            levelValue.textContent = 'У вас минимальный уровень дохода';
        } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 5000) {
            levelValue.textContent = 'У вас средний уровень дохода';
        } else if (appData.moneyPerDay >= 5000) {
            levelValue.textContent = 'У вас высокий уровень дохода';
        }
    } else {
        dayBudgetValue.textContent = 'Ошибка! Начни расчет';
    }
}

// Записываем источники доп дохода
chooseIncomeV.addEventListener('input', function () {

    let items = chooseIncomeV.value;
    appData.income = items.split(', ');
    appData.income.sort();
    incomeValue.textContent = appData.income;
});

// Расчитываем доп доход с накоплений и указываем  за 1 месяй и 1 год
checkBoxSavings.addEventListener('click', function () {
    if (appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }

});


chooseSum.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum = +chooseSum.value,
            prcnt = +percent.value;
        appData.mothInCome = sum / 100 / 12 * prcnt;
        appData.yearInCome = sum / 100 * prcnt;

        monthSavingsV.textContent = appData.mothInCome;
        yearSavingsV.textContent = appData.yearInCome;

    }

});

percent.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum = +chooseSum.value,
            prcnt = +percent.value;
        appData.mothInCome = sum / 100 / 12 * prcnt;
        appData.yearInCome = sum / 100 * prcnt;

        monthSavingsV.textContent = appData.mothInCome.toFixed(1);
        yearSavingsV.textContent = appData.yearInCome.toFixed(1);
    }

});