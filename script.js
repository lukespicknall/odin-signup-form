let firstName = document.getElementById('first-name');
// const email = document.getElementById("email");
// const emailError = document.querySelector('#email + span.error')
// const form = document.querySelector("form")
const pword = document.getElementById("pword");
notValidate();

function notValidate () {
    if (firstName.value === "M") {
        firstName.className = 'notValid'
    } else {
        firstName.className = 'definput'
    }
} 