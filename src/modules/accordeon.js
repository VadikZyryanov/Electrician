const accordeon = () => {
    const accordeon = document.querySelector('.accordeon'),
        elements = accordeon.querySelectorAll('.element'),
        elementContents = accordeon.querySelectorAll('.element-content');

    const open = (elem, description) => {
        closeAll();
        elem.classList.add('active');
        description.style.display = 'block';
    };

    const close = (elem, description) => {
        elem.classList.remove('active');
        description.style.display = 'none';
    };

    const closeAll = () => {
        elements.forEach((item) => {
            item.classList.remove('active');
        })
        elementContents.forEach((item) => {
            item.style.display = 'none';
        })
    };

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.accordeon')) {
            closeAll();
        }
    })

    accordeon.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('title')) {
            const element = target.closest('.element');
            const elementContent = element.querySelector('.element-content');
            element.classList.contains('active') ? close(element, elementContent) : open(element, elementContent);
        }
    })
};

export default accordeon;