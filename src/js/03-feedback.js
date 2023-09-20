
import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
// console.log(refs.form);
// console.log(refs.input);
// console.log(refs.textarea);
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', throttle(onTextareaInput, 500))
populateTextarea();
// функція відправки форми
function onFormSubmit(evt) {
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);

}
// функція запису localStorage
function onTextareaInput(evt) {
    // const message = evt.target.value;
    formData[evt.target.name] = evt.target.value;
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}
// функція отримуємо дані сховища
// якщо(if) - в DOM
function populateTextarea() {
    const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMassege) {
        refs.input.value = savedMassege[`email`];
        refs.textarea.value = savedMassege[`message`];
    }
    
}