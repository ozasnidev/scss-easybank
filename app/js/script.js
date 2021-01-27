const body = document.querySelector('body');
const header = document.querySelector('.header');

const btnHamburger = document.querySelector('#btnMobileMenu');
const overlay = document.querySelector('.overlay');
const fadeElem = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', ()=> {
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElem.forEach(element =>{
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }); 
    }else{
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElem.forEach(element =>{
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    } 
})