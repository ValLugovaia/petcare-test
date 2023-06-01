const openPopup = document.querySelector('.slider__button_right');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-button');

openPopup.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});

openPopup.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});

