let loginButton = document.querySelector('.cnopka-login');
let loginPopUp = document.querySelector('.login-popup');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', snowPopUp);

function snowPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('trigger')
};