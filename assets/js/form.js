$(document).ready(function () {
    // var state = false;

    // $('.show-pass').click(function (e) { 
    //     e.preventDefault();
        
    //     var pass = $(this).closest('.form-group').find('.pass');

    //     if (state){
    //         pass.attr('type', 'password');
    //         $(this).attr('class', 'fas fa-eye-slash');
    //         state = false;
    //     }
    //     else{
    //         pass.attr('type', 'text');
    //         $(this).attr('class', 'fas fa-eye');
    //         state = true;
    //     }
    // });

    //checking email 
    $('.email').on('input', function () {
        var imeyl = $(this).val();
        var result =  $(this).closest('.form-group').find('.validate');
        var icon =  $(this).closest('.form-group').find('#icon');
        
        if(imeyl.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
            icon.attr('class', 'fas fa-check-circle');
            result.html('');
        } 
        else{
            $('#icon').attr('class', 'fas fa-exclamation-circle');
            result.html('Invalid email');
        }
    });

    //checking phone number
    $('.phone').on('input', function () {
        var phone = $(this).val();
        var result =  $(this).closest('.form-group').find('.validate');
        var icon =  $(this).closest('.form-group').find('#icon');

        if(phone.match(/^(09)[0-9]\d{8}$/)){
            icon.attr('class', 'fas fa-check-circle');
            result.html('');
        } 
        else{
            icon.attr('class', 'fas fa-exclamation-circle');
            result.html('Invalid phone number');
        }
    });


    $('.pass').on('input', function () {

        var pass = $(this).val();

        //will show the instruction if there is value on input
        if(pass != ""){
            $('.val-pass').css('display', 'grid');
        }
        else{
            $('.val-pass').css('display', 'none');
        }
    
        // for uppercase
        if(pass.match(/[A-Z]/)){
            $('#upper').attr('class', 'fas fa-check');
            $('.txt-upper').css('color', 'green');
        }
        else{
            $('#upper').attr('class', 'fas fa-times');
            $('.txt-upper').css('color', 'red');
        }
        
        // for lowercase
        if(pass.match(/[a-z]/)){
            $('#lower').attr('class', 'fas fa-check');
            $('.txt-lower').css('color', 'green');
        }
        else{
            $('#lower').attr('class', 'fas fa-times');
            $('.txt-lower').css('color', 'red');
        }

        // for pass length
        if(pass.length >= 8){
            $('#length').attr('class', 'fas fa-check');
            $('.txt-lngth').css('color', 'green');
        }
        else{
            $('#length').attr('class', 'fas fa-times');
            $('.txt-lngth').css('color', 'red');
        }

        // for pass must have numbers
        if(pass.match(/[0-9]/)){
            $('#num').attr('class', 'fas fa-check');
            $('.txt-num').css('color', 'green');
        }
        else{
            $('#num').attr('class', 'fas fa-times');
            $('.txt-num').css('color', 'red');
        }

        // for pass must have special chars
        if(pass.match(/[!@#$%&*_?]/)){
            $('#special').attr('class', 'fas fa-check');
            $('.txt-spcl').css('color', 'green');
        }
        else{
            $('#special').attr('class', 'fas fa-times');
            $('.txt-spcl').css('color', 'red');
        }

    });

    //will show the instruction if the input is clicked
    $('.pass').on('focus', function () {
        $('.val-pass').css('display', 'grid');
    });

    //will hide the instruction if clicked outside the input pass
    $(document).on("click", function (event) {
        // Check if the target of the click event is not the input text or the div
        if (!$(event.target).is(".pass") && !$(event.target).is(".val-pass")) {
            // Hide the div
            $(".val-pass").hide();
        }
    });

    $('.confirm-pass').on('input', function () {
        var pass = $('.pass').val();
        var confpass = $(this).val();
        var result =  $(this).closest('.form-group').find('.validate');
        var icon =  $(this).closest('.form-group').find('#icon');

        //if password is not set
        if(pass == ""){
            icon.attr('class', 'fas fa-exclamation-circle');
            result.html('Please set your password first.');
        }
        //if password is not match with confirm pass
        else if(confpass != pass){
            icon.attr('class', 'fas fa-exclamation-circle');
            result.html('Password does not match.');
        }
        else {
            icon.attr('class', 'fas fa-check-circle');
            result.html('');
        }
    });

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

});