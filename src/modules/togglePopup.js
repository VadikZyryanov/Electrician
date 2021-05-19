const togglePopup = () => {
    const callbackBtn = document.querySelector('#callback'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        element = document.querySelectorAll('.element.relative'),
        buttonServices = document.querySelector('.button-services'),
        imgWrapper = document.querySelectorAll('.img-wrapper');
    
    const eventBody = (event) => {
        const target = event.target;
        if (target.classList.contains('modal-overlay') || target.closest('.modal-close')) {
            closePopup();
        }
    };

    const openPopup = (event) => {
        event.preventDefault();
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

    const addText = (elem, index) => {
        console.log(elem);
        const textWrapper = document.createElement('div');
        textWrapper.classList.add('img-wrapper_text');
        textWrapper.textContent = 'Оформить заявку';
        textWrapper.style.display = 'block';
        imgWrapper[index].append(textWrapper);
        textWrapper.addEventListener('click', openPopup);
        elem.addEventListener('mouseleave', () => {
            textWrapper.remove();
        });
    }
    
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('mouseenter', (event) => {
            const target = event.target;
            addText(target, i);
        });
        element[i].addEventListener('click', (event) => {
            event.preventDefault();
        });
    }

    callbackBtn.addEventListener('click', openPopup);

    buttonServices.addEventListener('click', openPopup);
};

export default togglePopup;