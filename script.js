const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Phone Number cannot be blank');
    } else if (!isPhoneNumber(phoneNumberValue)) {
        setErrorFor(phoneNumber, 'Invalid Phone Number');
    } else {
        setSuccessFor(phoneNumber);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'Confirm Password cannot be blank');
    } else if ( passwordValue != confirmPasswordValue ) {
        setErrorFor(confirmPassword, 'Passwords don\'t match');
    } else {
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const field = input.parentElement;
    const small = field.querySelector('small');

    small.innerText = message;

    field.className = 'field error';
}

function setSuccessFor(input) {
    const field = input.parentElement;

    field.className = 'field success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhoneNumber(phoneNumber) {
    return /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(phoneNumber);
}