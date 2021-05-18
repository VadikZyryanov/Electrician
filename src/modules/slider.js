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

export default slider;