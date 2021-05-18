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

export default upScrolling;