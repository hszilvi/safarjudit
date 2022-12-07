const submitBtn = document.querySelector('#form-submit-button');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const nameValue = document.querySelector('#name');
    const emailValue = document.querySelector('#email');
    const noteValue = document.querySelector('#note');
    const gdprCheck = document.querySelector('#gdpr-check');
    const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    // name check 
    if (nameValue.value.trim() === '') {
        let parent = nameValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = nameValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
    // email validator
    if (emailValue.value.trim() === '') {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else if (!regex.test(emailValue.value)) {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = emailValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
    // note check
    if (noteValue.value.trim() === '') {
        let parent = noteValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    } else {
        let parent = noteValue.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    }
    // gdpr check
    if (gdprCheck.checked == true) {
        let parent = gdprCheck.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'hidden';
    } else {
        let parent = gdprCheck.parentElement;
        let errorMsg = parent.querySelector('.error');
        errorMsg.style.visibility = 'visible';
    }
};



