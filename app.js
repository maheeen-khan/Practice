function checkEmail(){

    var emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var email = document.getElementById('email').value;


// Password validation


    var passwordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var password = document.getElementById('password').value;

    if(passwordValid.test(password) === true && emailValid.test(email) === true){
        alert('Correct Information');
    }
    else  if(passwordValid.test(password) === true && emailValid.test(email) === false){

        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.backgroundColor = '#ffe7e0';

        alert('Invalid email');

    }
    else  if(passwordValid.test(password) === false && emailValid.test(email) === true){
        
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.backgroundColor = '#ffe7e0';

        alert('Invalid password');
    }
    else{
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.backgroundColor = '#ffe7e0';

        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.backgroundColor = '#ffe7e0';
        
        alert('Invalid Information');
    }
}
