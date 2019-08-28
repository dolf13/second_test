// let timerId = setTimeout(SayHello, 3000);
// clearTimeout(timerId);


// function SayHello (){
//     alert("Hello World");
// };

// let timerId = setInterval(SayHello, 3000);
// // clearTimeout(timerId);


// function SayHello (){
//     console.log("Hello World");
// };

// let i=0;

// let timerId = setTimeout(function lock() {
//      i++;
//     console.log('Рекурсивная функция - ' + i);
//     setTimeout(lock, 2000);
// });


let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box'),
    btnA = document.querySelector('.btn1');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

function crazyCss() {
    let i = 1,
        k = 1,
        tiktak = setInterval(transform, 1000);

    function transform() {
        if (i == 6) {
            clearInterval(tiktak);
        }
        elem.className = 'box-animate' + k;
        i++;
        k++;
        if (k == 4) {
            k = 1;
        }
    }

}

btnA.addEventListener('click', crazyCss);


let buttonBlock = document.querySelector('#btn-block'),
    buts = document.getElementsByTagName('button');





// наследование элементов  по тэгу / по названию класса / по тегу и классу
buttonBlock.addEventListener('click', function (event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        // if (event.target && event.target.classList.contains('first')) {
        // if (event.target && event.target.matches('button.first')) {
        console.log('HelloTarget!' + event.target);
        
        event.target.hidden = !event.target.hidden;
         
        // console.log('elem = ' + elem);
    } else {
        if (event.target && event.target.matches('#btn-block')) {
           

            let buttonId = document.getElementById('button');
            console.log(buttonId); // вернет только 1 элемент (первый с id)

            let buttonC = document.getElementsByClassName('button');
            console.log(buttonC); // вернет HTMLколлекцию

            let button = document.getElementsByTagName('button');
            console.log(button); // вернет HTMLколлекцию

            console.log('HelloDIIIV!!!');

            //получаем детей блока с калассом btn-block переводим в массив 
            // let elem = Array.from(document.querySelector('#btn-block').children);
            // или такая сокращенная форма записи для переыода в массив
            // let elem = [...document.querySelector('#btn-block').children] ;
            // console.log(elem);

            // // для каждого элемента массива меняем свойство hidden  на обратное
            // elem.forEach(function(item){
            //     if (item.hidden == true)
            //     {item.hidden = !item.hidden;}
            // });

            // записываем без переменной elen и используем => для forEach
            [...document.querySelector('#btn-block').children].forEach(item => {
                if (item.hidden == true) {
                    item.hidden = !item.hidden;
                    
                }
            });



        }
    }

});