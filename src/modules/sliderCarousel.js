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

export default sliderCarousel;