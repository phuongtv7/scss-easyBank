const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const fadeElems = document.querySelectorAll('.has-fade')
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) { //Close Hamburger menu
        body.classList.remove('noscroll')
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        header.classList.remove('open')
    } else {
        //open hambuerger menu
        body.classList.add('noscroll')
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
        header.classList.add('open')
    }
})