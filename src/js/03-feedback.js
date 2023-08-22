


import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const saveToLocalStorage = throttle(() => {

  const valueInput = {
    email: emailInput.value,
    message: messageInput.value,
  }

  localStorage.setItem("feedback-form-state",JSON.stringify(valueInput));
},500);


feedbackForm.addEventListener('input', saveToLocalStorage);

const fieldsForm = () => {
  const valueInput = JSON.parse(localStorage.getItem("feedback-form-state"));

  if(valueInput){
    emailInput.value = valueInput.email;
    messageInput.value = valueInput.message;
  }
};

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log({
    email: emailInput.value,
    message: messageInput.value,
});
localStorage.removeItem("feedback-form-state");
    emailInput.value = '';
    messageInput.value = '';
})

fieldsForm();