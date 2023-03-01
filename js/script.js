const loginButton = document.querySelector('.cnopka-login');
const loginPopUp = document.querySelector('.login-popup');
const closeButton = document.querySelector('.cnopka-close');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', snowPopUp);
closeButton.addEventListener('click', close);

function snowPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('trigger')
};

function close() {
    loginPopUp.classList.remove('trigger')
};

loginPopUp.addEventListener('click', (e) => {
    if (e.target.classList.contains(trigger)) {close();}
})