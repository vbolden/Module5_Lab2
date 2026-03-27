// VALUES
let form = document.getElementById('registrationForm');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

// EVENT LISTENERS
window.addEventListener('load', ()=> {
    const savedUser = sessionStorage.getItem('username');
    if(savedUser){
        username.value = savedUser;
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sessionStorage.setItem('username', username.value);
});

username.addEventListener('blur', (e) => {
    if(username.value == ''){
        username.setCustomValidity('Please enter your username')
    } else {
        username.setCustomValidity('')
    }
    username.reportValidity()
    
})

email.addEventListener('blur', (e) => {
    if(email.value == '') {
        email.setCustomValidity('Please enter your email')
    } else {
        email.setCustomValidity('')
    }
    email.reportValidity()
})

password.addEventListener('blur', (e) => {
    if(password.value == '') {
        password.setCustomValidity('Please enter your password')
        password.reportValidity()
        return
    } else if(password.validity.patternMismatch){
        password.setCustomValidity('Password does not meet requirements')
    } else {
        email.setCustomValidity('')
    }
})

confirmPassword.addEventListener('blur', (e) => {
    if(confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.reportValidity()
        confirmPassword.style.borderColor = 'red';
    } else if(confirmPassword.value == '') {
        confirmPassword.setCustomValidity('Please retype your password')
        confirmPassword.reportValidity()
    } else {
        confirmPassword.setCustomValidity('')
    }
})
