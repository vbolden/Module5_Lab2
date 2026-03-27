// VALUES
let form = document.getElementById('registrationForm');
let username = document.getElementById('username');
let nameErrorMsg = document.getElementById('usernameError');
let email = document.getElementById('email');
let emailErrorMsg = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordErrorMsg = document.getElementById('passwordError');
let confirmPassword = document.getElementById('confirmPassword');
let confirmErrorMsg = document.getElementById('confirmPasswordError');

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
