const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// const emailError = document.querySelector('#email + span.error')
// const form = document.querySelector("form")
const pword = document.getElementById("pword");
// notValidate();

firstName.addEventListener("input", (e) => {
    if (firstName.validity.tooShort) {
        firstName.className = 'notValid'
        firstName.setCustomValidity("We need your name.");
    } else {
        firstName.className = 'isValid'
        firstName.setCustomValidity("");
    }
});

lastName.addEventListener("input", (e) => {
    if (lastName.validity.tooShort) {
        lastName.className = 'notValid'
        lastName.setCustomValidity("We need your name.");
    } else {
        lastName.className = 'isValid'
        lastName.setCustomValidity("");
    }
});

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.className = 'notValid'
        email.setCustomValidity("Must be in email form.");
    } else {
        email.className = 'isValid'
        email.setCustomValidity("");
    }
});

phone.addEventListener("input", (e) => {
    if (phone.validity.typeMismatch) {
        phone.className = 'notValid'
        phone.setCustomValidity("Must be in phone form.");
    } else {
        phone.className = 'isValid'
        phone.setCustomValidity("");
    }
});
// function notValidate () {
//     if (firstName.validityState.tooshort) {
//         firstName.className = 'notValid'
//     } else {
//         firstName.className = 'definput'
//     }
// } 