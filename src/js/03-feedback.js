import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const objAll = localStorage.getItem(STORAGE_KEY);
const parsDate = JSON.parse(objAll)

const forms = document.querySelector('form');

forms.addEventListener('input', throttle(onForm, 500));
forms.addEventListener('submit', onClickSubj);
saveDate()

function onForm (e) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: forms.elements.email.value, message: forms.elements.message.value }));

    parsDate[e.target.name] = e.target.value;

}


function saveDate() {
  
    forms.elements.email.value = parsDate.email
    forms.elements.message.value = parsDate.message
}


function onClickSubj(e) {
    console.log(parsDate);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
 
    
       console.log(objAll);
}