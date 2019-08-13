let box = document.getElementById('box'),
    but = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'silver';

but[1].style.borderRadius = '100%';
but[1].style.border = "thick solid #0022FF";


circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


let div = document.createElement('div');
div.classList.add('black');


let text = document.createTextNode('А я все летала ла-ла');
document.body.insertBefore(text, circle[2]);

let text2 = document.createTextNode("Рок-н-Рол мертв!");
box.appendChild(text2);

//  document.body.appendChild(div);  //добавить div в конец body

// wrapper.appendChild(div); // добавить div в конец wrapper

// let i = 2;
// document.body.insertBefore(div, circle[i]); // вставить div перед дочерним circle у body



//  немного анимации )) 
let i = 0;
function testTime() {
    document.body.insertBefore(div, circle[i]);
    console.log(i);
    i++;

}

setTimeout(testTime, 1000);
setTimeout(testTime, 3000);
setTimeout(testTime, 5000);
setTimeout(testTime, 7000);