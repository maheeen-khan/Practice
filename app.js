function checkEmail(){

    var emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var email = document.getElementById('email').value;


// Password validation


    var passwordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var password = document.getElementById('password').value;

    if(passwordValid.test(password) === true && emailValid.test(email) === true){
        alert('Correct Information');
    }
    else{
        alert('Invalid Information');
    }
}
