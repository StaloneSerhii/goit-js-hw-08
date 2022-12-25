import throttle from 'lodash.throttle';

const formInput = {
    form:document.querySelector('.feedback-form'),
    textarea:document.querySelector('.feedback-form textarea')
};

    

formInput.form.addEventListener('submit', onForm);
formInput.textarea.addEventListener('input', onTextarea);

function onTextarea (evt) {
    const message = evt.currentTarget.value;

    console.log(evt);
}