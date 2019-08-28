'use strict' ;

window.addEventListener('DOMContentLoaded', function(){

    let tab = document.querySelectorAll('.info-header-tab'), 
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    

    hideContent(0);
    showContent (0);
    
    
    function hideContent (a){
        for (let i = a; i < tabContent.length; i++ ) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('info-header-tab-active');
            tab[i].classList.add('info-header-tab');
        }
    }


    function showContent (b) {
        tab[b].classList.remove('info-header-tab');
        tab[b].classList.add('info-header-tab-active');
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.add('show');
        }
    }
 

    info.addEventListener('click', function(e){
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i =0; i < tab.length; i++){
                if (tab[i] == target) {
                    hideContent(0);
                    showContent(i);
                }
            }
        }
    });

});