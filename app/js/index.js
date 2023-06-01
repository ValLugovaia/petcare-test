const openPopup = document.querySelector('.slider__button_right');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-button');
const openNavbar = document.querySelector('.header__burger-button');
const navbar = document.querySelector('.header__nav-bar');
const closeNavbar = document.querySelector('.header__close-button');

openPopup.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});

openNavbar.addEventListener('click', () => {
    navbar.classList.add('header__nav-bar_opened');
});

closeNavbar.addEventListener('click', () => {
    navbar.classList.remove('header__nav-bar_opened');
});


