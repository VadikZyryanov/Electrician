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

export default  scrolling;