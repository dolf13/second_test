'use strict';

// constTimer = "2019-08-29", // так получаем  +3 часа ко времени 2019-08-29T03:00:00

// очень важно! Писать полное время иначе констурктор добавляет  3 часа (см выше)
// месяц в записи цифра от 1 до 12
let  constTimer = "2019-08-31T00:00:00",   
     idTimerHtml = 'timer';
    
// функция расчет разницы в датах текущей и таймера в миллисекундах 
// возвращает объект: дельта в мс, дней, часов, минут и секунд
function UpdateTime (endOfTime) {
    
    let timeNow = Date.parse(new Date()), //parse возвращает значение в ms 
        timeTimer = Date.parse(endOfTime), 
        timeDelta = timeTimer - timeNow;
        console.log(timeDelta);

    // получаем значение для таймера 
    let d = Math.floor(timeDelta/(1000*60*60*24)),
        h = Math.floor((timeDelta/1000/60/60) % 24),  
        m = Math.floor((timeDelta/1000/60) % 60),
        s = Math.floor((timeDelta/1000) % 60);
        
    // проверка расчета в консоль
    // console.log(d + ' дней : ' + h + ' часов : ' + m + ' минут : ' + s + ' секунд'); 

    // возвращаем объект значений
    return {
        total : timeDelta,
        days : d,
        hours : h, 
        minutes : m,
        seconds : s
    };

}
// основная функция 
//передаем конечную дату и блок HTML 
//в блоке должны быть объекты с классами  days / hours / minutes / seconds + ::after
function SetTimerClock (timerDate, divId) {
    let timer = document.getElementById(divId),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
    
    // обновляем контент в HTML 
    function UpDate () {
        //убрать дни если их нет
        if (UpdateTime(timerDate).days <= 0) {
            days.style.display = 'none';
        }
        if (UpdateTime(timerDate).days < 10) {
            days.textContent = '0' + UpdateTime(timerDate).days; 
        }
        else {
            days.textContent = UpdateTime(timerDate).days;
        }
        if (UpdateTime(timerDate).hours < 10) {
            hours.textContent = '0' + UpdateTime(timerDate).hours;
        }
        else {
            hours.textContent = UpdateTime(timerDate).hours;
        }
        if (UpdateTime(timerDate).minutes < 10) {
            minutes.textContent = '0' + UpdateTime(timerDate).minutes;
        }
        else {
            minutes.textContent = UpdateTime(timerDate).minutes;
        }
        if (UpdateTime(timerDate).seconds < 10) {
            seconds.textContent = '0' + UpdateTime(timerDate).seconds;
        }
        else {
            seconds.textContent = UpdateTime(timerDate).seconds;
        }
         
        
        
        // подмена на нули если дата прошла
        if (UpdateTime(timerDate).seconds < 0 ){
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
        //останавливаем таймер если дельта меньше нуля
        if (UpdateTime(timerDate).total <= 0 ) {
            console.log(UpdateTime (timerDate).total);
             clearInterval(set);
        }
    }


    let set = setInterval (UpDate, 1000);
   
}

// Запуск передаем HTML id блока и полную дату до которой включен таймер
SetTimerClock(constTimer, idTimerHtml);

