//  Скрипт задание 3

let money, 
    time;


function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


    while (isNaN(money) || money == "" || money == null){ 
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    Budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let
            a = prompt("Введите " + (i+1) + "-ю обязательную статью расходов в месяц", ""),
            b = prompt("Во сколько это обойдется?", "");
    
    
        if (typeof (a) === 'string' && typeof (a) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;
            console.log("ДА ДА ДА");
        }
        else {
            confirm('Вы ввели некорректные ответы на вопрос! Попробуйте еще раз.');
            i--;
    
        }
    }

}
chooseExpenses();



// Расчет дневного бюджета из бюджета за 1 месяц
function detectDayBudget(){
    appData.moneyPerDay = (appData.Budget / 30).toFixed(1);

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    console.log(appData);
}
detectDayBudget();



// Проверяем на уровень дохода по дневному бюджету
function detectLevel(){
    if (appData.moneyPerDay < 1000) {
        console.log('У вас минимальный уровень дохода');
    }
    else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 5000) {
        console.log('У вас средний уровень дохода');
    } 
    else if (appData.moneyPerDay >= 5000) {
        console.log('У вас высокий уровень дохода');
    }
}
detectLevel();


function checkSavings() {
    if (appData.saving == true ) {
        let save = +prompt("Какая сумма накоплений"),
            procent = +prompt("Какой процент");

        appData.mothInCome = save/100/12*procent;
        alert("Доход в месяц: " + appData.mothInCome);
    }
    
}

checkSavings();



function chooseOptExpenses() {
    let a = {};  
    for (let i =1; i < 4;) {
        a[i] = prompt('Статья необязательных расходов?');
        i++;
    }
    return a;
        
}

let optionalExpenses = chooseOptExpenses();
console.log(optionalExpenses);