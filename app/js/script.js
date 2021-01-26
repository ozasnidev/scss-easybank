const btnHamburger = document.querySelector('#btnMobileMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElem = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', ()=> {
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElem.forEach(element =>{
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }); 
    }else{
        header.classList.add('open');
        fadeElem.forEach(element =>{
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    } 
})