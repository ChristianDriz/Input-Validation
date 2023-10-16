$(document).ready(function () {

    const emailphone = $('.email-phone');
    const pass = $('.pass');

    $('.form').submit(function (e) { 
        e.preventDefault();

        const emailphoneVal = emailphone.val().trim();
        const passVal = pass.val().trim();
    
        checkEmailPhone(emailphoneVal);
        checkPass(passVal);

        if (checkValid()){
            window.location.href = "home.html";
        }
    });

    //when user inputs in email or phone textbox
    $('.email-phone').on('input', function () {
        emailphoneVal = emailphone.val();
        checkEmailPhone(emailphoneVal);
    });

    //when user inputs in password textbox
    $('.pass').on('input', function () {
        passVal = pass.val().trim();
        checkPass(passVal);
        
        //will show the see passwword icon when the user starts to input pass
        $('.show-pass').css('visibility', 'visible');
    });

    //show password
    var state = false;

    $('.show-pass').click(function (e) { 
        e.preventDefault();
    
        var pass = $(this).parent().find('.pass');

        if (state){
            pass.attr('type', 'password');
            $(this).attr('class', 'far fa-eye-slash');
            state = false;
        }
        else{
            pass.attr('type', 'text');
            $(this).attr('class', 'far fa-eye');
            state = true;
        }
    });


    function checkEmailPhone(emailphoneVal){
        let valid = true;

        if(emailphoneVal === ""){   
            setError(emailphone, "Enter a valid email or phone number");
            valid = false;
        } else if (emailphoneVal.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/)){
            setSuccess(emailphone);
            valid = true;
        } else if (emailphoneVal.match(/^(09)[0-9]\d{8}$/)){
            setSuccess(emailphone);
            valid = true;
        } else{
            setError(emailphone, "Invalid email or phone");
            valid = false;
        }
        return valid;
    }

    // to check password
    function checkPass(passVal) { 
        let valid = true;
        
        if(passVal === "" || passVal.length < 8){
            setError(pass, "Your password contains 8 characters above");
            valid = false;
        } else{
            setSuccess(pass);
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

    // to check if all the fields are correct, if correct the form will be submitted
    function checkValid(){
        let isValid = true;

        if(checkEmailPhone(emailphoneVal) && checkPass(passVal)){
            isValid = true;
        }else{
            isValid = false;
        }
        return isValid;
    }
});
