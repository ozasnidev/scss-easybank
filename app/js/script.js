const btnHamburger = document.querySelector('#btnMobileMenu');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', ()=> {
   header.classList.contains('open') 
    ? header.classList.remove('open') 
    : header.classList.add('open');
})