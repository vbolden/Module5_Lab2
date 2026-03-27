// VALUES
let form = document.getElementById('registrationForm');
let userName = document.getElementById('username');
let nameErrorMsg = document.getElementById('usernameError');
let email = document.getElementById('email');
let emailErrorMsg = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordErrorMsg = document.getElementById('passwordError');
let confirmPassword = document.getElementById('confirmPassword');
let confirmErrorMsg = document.getElementById('confirmPasswordError');

// EVENT LISTENERS
window.addEventListener('load', () => {
  const savedUserName = localStorage.getItem('username');
  if (savedUserName) {
    username.value = savedUserName;
  }
});