const checkPassword1 = document.querySelector('#password');
const checkPassword2 = document.querySelector('#confirmPassword');

// console.log(check)
function checkPassword(){
    const pass = document.querySelector('#password').value; 
    const passConfirm = document.querySelector('#confirmPassword').value; 
    if(pass != passConfirm) {
        document.querySelector('.error-message').style.visibility = 'visible';
        //input.error
    }
    if(pass == passConfirm) {
        document.querySelector('.error-message').style.visibility = 'hidden';
    }
}

checkPassword1.addEventListener('mouseleave', checkPassword);
checkPassword2.addEventListener('mouseleave', checkPassword);



const formSignUp = document.querySelector('#signUpForm');

formSignUp.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Cancelled submission');

});