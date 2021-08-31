const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');


btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        header.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else {//open hamburger menu
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }
});