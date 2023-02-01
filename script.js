const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pword = document.getElementById("pword");
const pwordConf = document.getElementById("pword-confirm");
// const form = document.querySelector("form")


// Checks validity and assings className
// based on state
firstName.addEventListener("input", (e) => {
    if (firstName.validity.tooShort) {
        firstName.className = 'notValid'
        firstName.setCustomValidity("Enter at least two letters");
    } else if (firstName.value == "") {
        firstName.className = 'def-input'
        firstName.setCustomValidity("What is your name?");
    } else {
        firstName.className = 'isValid';
        firstName.setCustomValidity("");
    }
});

// Have not fully customized any of the below Listener function yet 
lastName.addEventListener("input", (e) => {
    if (lastName.validity.tooShort) {
        lastName.className = 'notValid'
        lastName.setCustomValidity("Enter at least two letters");
    } else if (lastName.value == "") {
        lastName.className = 'def-input'
        lastName.setCustomValidity("And your last name?");
    } else {
        lastName.className = 'isValid';
        lastName.setCustomValidity("");
    }
});


//Validity alert occurs on every keystroke after
//first validity check, which is annoying.
email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.className = 'notValid'
        email.setCustomValidity("Must be in email form, including @");
    } else if (email.value == "") {
        email.className = 'def-input'
        email.setCustomValidity("Enter your email");
    } else {
        email.className = 'isValid';
        email.setCustomValidity("");
    }
});

phone.addEventListener("input", (e) => {
    if (phone.validity.patternMismatch) {
        phone.className = 'notValid'
        phone.setCustomValidity("Enter your ten digit phone number");
    } else if (phone.value == "") {
        phone.className = 'def-input'
        phone.setCustomValidity("Enter your phone number");
    } else {
        phone.className = 'isValid';
        phone.setCustomValidity("");
    }
});

pword.addEventListener("input", (e) => {
    if (pword.validity.patternMismatch) {
        pword.className = 'notValid'
        pword.setCustomValidity("Must have a letter and a number");
    } else if (pword.value == "") {
        pword.className = 'def-input'
        pword.setCustomValidity("Create a password");
    } else {
        pword.className = 'isValid';
        pword.setCustomValidity("");
    }
});

pwordConf.addEventListener("input", (e) => {
    if (pwordConf.value !== pword.value) {
        pwordConf.className = 'notValid'
        pwordConf.setCustomValidity("Passwords do not match");
    } else if (pwordConf.value == "") {
        pwordConf.className = 'def-input'
        pwordConf.setCustomValidity("Passwords do not match");
    } else {
        pwordConf.className = 'isValid';
        pwordConf.setCustomValidity("");
    }
});

// Switch case to set validity prior to user inteactions
// Since above listener only occurs on user input
// Use switch case to avoid if() statement on each field
switch (true) {
    case firstName.value == "":
        firstName.setCustomValidity("What is your name?");
        firstName.className = 'def-input';

    case lastName.value == "":
        lastName.setCustomValidity("And your last name?");
        lastName.className = 'def-input';

    case email.value == "":
        email.setCustomValidity("Enter your email address");
        email.className = 'def-input';

    case phone.value == "":
        phone.setCustomValidity("Enter your phone number");
        phone.className = 'def-input';

    case pword.value == "":
        pword.setCustomValidity("Create a password");
        pword.className = 'def-input';

    case pwordConf.value == "":
        pwordConf.setCustomValidity("Passwords do not match");
        pwordConf.className = 'def-input';

}
// function notValidate () {
//     if (firstName.validityState.tooshort) {
//         firstName.className = 'notValid'
//     } else {
//         firstName.className = 'definput'
//     }
// } 