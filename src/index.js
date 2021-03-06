'use strict';

import togglePopup from './modules/togglePopup';
import scrolling from './modules/scrolling';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import upScrolling from './modules/upScrolling';
import accordeon from './modules/accordeon';
import sendForm from './modules/sendForm';
import regularExpressions from './modules/regularExpressions';

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
//валидация
regularExpressions();
//отправка формы
sendForm();