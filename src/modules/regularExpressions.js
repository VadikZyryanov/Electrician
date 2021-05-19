const regularExpressions = () => {
    const formName = document.querySelector('.form-control'),
        formPhone = document.querySelector('.form-control.tel');

    const checkName = (input) => {
        input.value = input.value.replace(/[^А-Яа-яЁё|\s]/g, '');
        input.addEventListener('blur', () => {
            input.value = input.value.replace(/\s+/g, ' ');
            input.value = input.value.replace(/\-+/g, '-');
            input.value = input.value.replace(/^-+|-+$/g, '');
            input.value = input.value.trim();
            let number = input.value.split(' ');
            for (let i = 0; i < number.length; i++) {
                number[i] = number[i][0].toUpperCase() + number[i].slice(1).toLowerCase();
            }
            input.value = number.join(' ');
        });
    };

    const checkPhone = (input) => {
        input.value = input.value.replace(/[^0-9|\+]/g, '');
        input.addEventListener('blur', () => {
            input.value = input.value.replace(/^-+|-+$/g, '');
        });
    };

    formName.addEventListener('input', () => {
        checkName(formName);
    });

    formPhone.addEventListener('input', () => {
        checkPhone(formPhone);
    });
};

export default regularExpressions;