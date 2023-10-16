$(document).ready(function () {

    const name = $('.name');
    const email = $('.email');
    const phone = $('.phone');
    const pass = $('.pass');
    const confpass = $('.confirm-pass');

    $('.form').submit(function (e) { 
        e.preventDefault();

        const nameVal = name.val().trim();
        const emailVal = email.val().trim();
        const phoneVal = phone.val().trim();
        const passVal = pass.val().trim();
        const confpassVal = confpass.val().trim();
    
        checkName(nameVal);
        checkEmail(emailVal);
        checkPhone(phoneVal);
        checkPass(passVal);
        checkConfirmPass(confpassVal, passVal);

        if (checkValid()){
            Swal.fire({
                title: 'Success!',
                text: "Registration Success! You may now sign in.",
                icon: 'success'
            }).then(() => {
                window.location.href = "sign-in.html";
            })
        }
    });

    $('.name').on('input', function () {
        nameVal = name.val().trim();
        checkName(nameVal);
    });

    $('.email').on('input', function () {
        emailVal = email.val().trim();
        checkEmail(emailVal);
    });

    $('.phone').on('input', function () {
        phoneVal = phone.val().trim();
        checkPhone(phoneVal);
    });

    $('.pass').on('input', function () {
        passVal = pass.val().trim();
        checkPass(passVal);
    });
    
    $('.confirm-pass').on('input', function () {
        passVal = pass.val().trim();
        confpassVal = confpass.val().trim();
        checkConfirmPass(confpassVal, passVal);
    });
    
    // to check name
    function checkName(nameVal){
        let valid = true;

        if(nameVal === ""){
            setError(name, "Name is required");
            valid = false;
        } else if(!nameVal.match(/^[a-zA-z .]*$/)){
            setError(name, "Invalid name format");
            valid = false;
        } else{
            setSuccess(name);
            valid = true;
        }
        return valid;
    }

    //to check email
    function checkEmail(emailVal){
        let valid = true;

        if(emailVal === ""){
            setError(email, "Email is required");
            valid = false;
        } else if(!emailVal.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/)){
            valid = false;
            setError(email, "Invalid email format");
        } else{
            setSuccess(email);
            valid = true;
        }
        return valid;
    }

    //to check phone number
    function checkPhone(phoneVal){
        let valid = true;

        if(phoneVal === ""){
            setError(phone, "Phone is required");
            valid = false;
        } else if(!phoneVal.match(/^(09)[0-9]\d{8}$/)){
            setError(phone, "Invalid phone numer");
            valid = false;
        } else{
            setSuccess(phone);
            valid = true;
        }
        return valid;
    }

    // to check password
    function checkPass(passVal) { 
        let valid = true;
        
        if(passVal === ""){
            setError(pass, "Password is required");
            valid = false;
        } else if(passVal.length < 8){
            setError(pass, "Must be 8 characters in length ");
            valid = false;
        } else if(!passVal.match(/[A-Z]/)){
            setError(pass, "Must have uppercase");
            valid = false;
        } else if(!passVal.match(/[0-9]/)){
            setError(pass, "Must contain numbers");
            valid = false;
        } else if(!passVal.match(/[!@#$%&*_?]/)){
            setError(pass, "Must have special characters");
            valid = false;
        } else{
            setSuccess(pass);
            valid = true;
        }
        return valid;
    }
    
    // to check confirm password
    function checkConfirmPass(confpassVal, passVal){
        let valid = true;

        if(confpassVal === ""){
            setError(confpass, "Confirm Password is required");
            valid = false;
        } else if(passVal === ""){
            setError(confpass, "Set password first");
            valid = false;
        } else if(confpassVal !== passVal ){
            setError(confpass, "Password does not match");
            valid = false;
        } else{
            setSuccess(confpass);
            valid = true;
        }
        return valid;
    }

    function setError(input, message) {
        input.parent().attr('class', 'form-group error'); 
        input.parent().find('small').html(message); 
    }

    function setSuccess(input){
        input.parent().attr('class', 'form-group success'); 
    }

    //only accepts number in input type text
    $('.phone').keypress(function(e) {
        var x  = e.which || e.keycode;
        if(x >= 48 && x <= 57){
            return true;
        }
        else{
            return false;
        }
    });

    // to check if all the fields are correct, if correct the form will be submitted
    function checkValid(){
        let isValid = true;

        if(checkName(nameVal) && checkEmail(emailVal) && checkPhone(phoneVal) && checkPass(passVal) && checkConfirmPass(confpassVal, passVal)){
            isValid = true;
        }else{
            isValid = false;
        }
        return isValid;
    }
});