const btnHamburger = document.querySelector('#btnMobileMenu');

btnHamburger.addEventListener('click', ()=> {
   btnHamburger.classList.contains('open') 
    ? btnHamburger.classList.remove('open') 
    : btnHamburger.classList.add('open');
})