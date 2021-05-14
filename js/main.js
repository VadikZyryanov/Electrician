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