'use strict';

//модальное окно
const togglePopup = () => {
    const callbackBtn = document.querySelector('#callback'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');
    
    const eventBody = (event) => {
        const target = event.target;
        console.log(target);
        if (target.classList.contains('modal-overlay') || target.closest('.modal-close')) {
            closePopup();
        }
    };

    const openPopup = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';      
        document.body.addEventListener('click', eventBody);
    };

    const closePopup = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';   
        document.body.removeEventListener('click', eventBody);
    };
    
    callbackBtn.addEventListener('click', () => {
        openPopup();
    });
};
togglePopup();

//прокрутка
const scrolling = () => {
    const menu = document.querySelector('.top-menu'),
        menuItems = menu.querySelectorAll('ul>li');

    const smoothScrolling = idElem => {
        const element = document.querySelector(idElem);
        const addSmoothScrolling = () => {
            let count = element.offsetTop - Math.floor(document.documentElement.scrollTop);
            if (count > 0) {
                if (count > 50) {
                    document.documentElement.scrollTop += 10;
                } else {
                    document.documentElement.scrollTop += 1;
                }
            } else if (count < 0) {
                if (count < -50) {
                    document.documentElement.scrollTop -= 10;
                } else {
                    document.documentElement.scrollTop -= 1;
                }
            } else {
                clearInterval(idAddSmoothScrolling);
            }
        };
        const idAddSmoothScrolling = setInterval(addSmoothScrolling, 1);
    };

    menuItems.forEach((items) => {
        const idItems = items.querySelector('a');
        idItems.addEventListener('click', event => {
            event.preventDefault();
            const id = idItems.getAttribute('href');
            smoothScrolling(id);
        });
    });
};
scrolling();

//слайдер
const slider = () => {
    const slide = document.querySelectorAll('.item');
    let currentSlide = 0;
    
    const prevSlide = (elm, index, strClass) => {
        elm[index].classList.remove(strClass);
    };

    const nextSlide = (elm, index, strClass) => {
        elm[index].classList.add(strClass);
    }

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active');
    };

    setInterval(autoPlaySlide, 3000);
};
slider();