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

export default sendForm;