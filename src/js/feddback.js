import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const forms = document.querySelector('form');

forms.addEventListener('input', throttle(onForm, 500));
forms.addEventListener('submit', onClickSubj);

const date = {};

if (localStorage.getItem(STORAGE_KEY)) {
    const parse = JSON.parse(localStorage.getItem(STORAGE_KEY))
    forms.elements.email.value = parse.email;
    
    
    forms.elements.message.value = parse.message;
        console.log(localStorage.getItem(JSON.parse(STORAGE_KEY)));
}


function onForm (e) {

    date[e.target.name] = e.target.value;
    
    
    const pDate = JSON.stringify(date)
    
    localStorage.setItem(STORAGE_KEY, pDate)

}

function onClickSubj(e) {

    console.log(date);
    
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);

    e.currentTarget.reset();
    delete(date.email);
 delete(date.message);
}
