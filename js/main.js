'use strict';

//модальное окно
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

    const addText = (elem, index) => {
        const text = document.createElement('div');
        text.classList.add('img-wrapper_text');
        text.textContent = 'Оформить заявку';
        text.style.display = 'block';
        imgWrapper[index].append(text);
        text.addEventListener('click', openPopup);
        elem.addEventListener('mouseleave', () => {
            text.style.display = 'none';
        });
    }
    
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('mouseenter', (event) => {
            const target = event.target;
            addText(target, i);
        });
    }

    callbackBtn.addEventListener('click', openPopup);

    buttonServices.addEventListener('click', openPopup);
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
        prevSlide(slide, currentSlide, 'active-slider');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active-slider');
    };

    setInterval(autoPlaySlide, 3000);
};
slider();

//слайдер карусель
const sliderCarousel = () => {
    const servicesCarousel = document.querySelector('.services-carousel'),
        element = document.querySelectorAll('.element.relative'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right');
    let currentSlide = 0;

    const prevSlide = () => {
        if (currentSlide > 0) {
            --currentSlide;
            servicesCarousel.style.transform = `translateX(-${currentSlide * 400}px)`;
        } 
    };

    const nextSlide = () => {
        if (currentSlide < 3) {
            ++currentSlide;
            servicesCarousel.style.transform = `translateX(-${currentSlide * 400}px)`;
        }
    };

    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
};
sliderCarousel();

//прокрутка наверх
const upScrolling = () => {
    const title = document.querySelector('.title-h2'),
        upButton = document.querySelector('.up');

    upButton.style.display = 'block';
    upButton.addEventListener('click', () => {
        document.body.scrollIntoView({behavior: "smooth"});
    })
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > title.offsetTop - 100) {
            upButton.style.display = 'block';
            upButton.addEventListener('click', () => {
                document.body.scrollIntoView({behavior: "smooth"});
            });
        } else {
            upButton.style.display = 'none';
        }
    })
};
upScrolling();

//аккордеон
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
accordeon();

//отправка формы
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро с вами свяжемся.',
        errorMesageTwo = 'Проверь имя, адрес почты, телефон';
    const form = document.getElementById('form-callback');
    const statusMessage = document.createElement('section');
    statusMessage.className = 'section';

    const getForm = (form) => {
        form.addEventListener('submit', (event) => {
            const formName = form.querySelector('.form-control'),
                formPhone = form.querySelector('.form-control.tel');

            const patternName = /[А-Яа-яЁё|\s]{2,50}/;
            let patternPhone = /.{11,}/,
                patternPhoneTwo = /.{12,}/;
                
            event.preventDefault();
            statusMessage.innerHTML = `
                <div class="sk-rotating-plane"></div>
            `;
            form.append(statusMessage);
            const formData = new FormData(form);
            formData.append('retut', JSON.stringify(formName));

            const timeOutPostData = () => postData(formData)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    formName.value = '';
                    formPhone.value = '';
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
            
            if (formPhone.value[0] === '+') patternPhone = patternPhoneTwo;
            
            if (patternName.test(formName.value) && patternPhone.test(formPhone.value)) {
                setTimeout(timeOutPostData, 3000);

            } else {
                statusMessage.textContent = errorMesageTwo;
            }
        });
    };

    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    };

    getForm(form);
};
sendForm();