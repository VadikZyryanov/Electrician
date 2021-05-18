'use strict';

import togglePopup from './modules/togglePopup';
import scrolling from './modules/scrolling';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import upScrolling from './modules/upScrolling';
import accordeon from './modules/accordeon';
import sendForm from './modules/sendForm';

//модальное окно
togglePopup();
//прокрутка
scrolling();
//слайдер
slider();
//слайдер карусель
sliderCarousel();
//прокрутка наверх
upScrolling();
//аккордеон
accordeon();
//отправка формы
sendForm();