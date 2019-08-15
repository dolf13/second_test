let btn = document.querySelectorAll('button'),
    wrp = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function(){
//     alert('Нажал кнопку!');
// } ;

// btn[0].onclick = function(){
//     alert('Нажал опять кнопку!');
// } ;

console.log(btn);


btn[0].addEventListener('click', function(event){
    
    console.log('Произошло событие: ' + event.type + ' на элементе  ' + event.target);
    
    }) ;

wrp.addEventListener('click', function(event){
    console.log('Произошло событие: ' + event.type + ' на элементе  ' + event.target);
});

link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе  ' + event.target);
});

btn.forEach(function(item, i){
    item.addEventListener('mouseleave', function(){
        console.log('Мышка ушла с кнопки Номер ' + i);
    });
});

// btn[0].addEventListener('mouseenter', function(){

//     alert('Нажал кнопку - mouseenter!');
// } );