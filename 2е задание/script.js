// Первое задание

let
    money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let
    appData = {
        Budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    };

// с первого урока!
// let 
//     Ras1 = prompt("Введите обязательную статью расходов в месяц", ""),
//     Bu1 = prompt("Во сколько это обойдется?", ""),
//     Ras2 = prompt("Введите  вторую обязательную статью расходов в месяц", ""),
//     Bu2 = prompt("Во сколько это обойдется?", "");

// так работает правильно
// appData.expenses[Ras1] = Bu1;
// appData.expenses[Ras2] = Bu2;

// а так работает неправильно
// appData.expenses.Ras1 = Bu1;
// appData.expenses.Ras2 = Bu2;

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
// Расчет дневного бюджета из бюджета за 1 месяц
appData.moneyPerDay = appData.Budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
console.log(appData);


// Проверяем на уровень дохода по дневному бюджету
if (appData.moneyPerDay < 1000) {
    console.log('У вас минимальный уровень дохода');
}
else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 5000) {
    console.log('У вас средний уровень дохода');
} 
else if (appData.moneyPerDay >= 5000) {
    console.log('У вас высокий уровень дохода');
}