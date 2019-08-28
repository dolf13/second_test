let text = document.querySelector('.text'),
    btn = document.querySelector('.button');

// let width = text.scrollWidth,
//     height = text.scrollHeight;

let width = text.clientWidth,
    height = text.clientHeight;

console.log(width + "_______" + height);
console.log(text.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);


let i = 1; 
btn.addEventListener('click', function(){
      text.style.height = 2000 + 'px';
    //  text.scrollTop = 0;
    // отматать страницу наверх
    document.documentElement.scrollTop = 0;
    

    scrollBy(0, 200*i); //перемещение от текущего положения окна 
    i++;
    
    scrollTo(0, 200);  // перемещение от начала окна

});