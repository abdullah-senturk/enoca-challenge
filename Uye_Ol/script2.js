const form           = document.getElementById("enter-form");
const names          = document.getElementById("input-name");
const surname        = document.getElementById("input-surname");
const email          = document.getElementById("input-email");
const phone          = document.getElementById("input-phone");
const passwordArea   = document.getElementById("enter-password");
const password       = document.getElementById("enter-password-input");
const passwordDiv    = document.getElementById("enter-password-div");
const repasswordArea = document.getElementById("enter-repassword");
const repassword     = document.getElementById("enter-repassword-input");
const repasswordDiv  = document.getElementById("enter-repassword-div");
const formButton     = document.getElementById("form-entry");
const formCheckbox   = document.getElementById("form-group-checkbox");

function errorEmail(input, message){
    input.className = "input-email-invalid";
    const div       = input.nextElementSibling;
    div.textContent = message;
    div.className   = "input-email-message"; 
}
function errorPhone(input, message) {
    input.className = "input-phone-invalid";
    const div       = input.nextElementSibling;
    div.textContent = message;
    div.className   = "input-phone-message";
}
function errorName(input, message) {
    input.className = "input-name-invalid";
    const div       = input.nextElementSibling;
    div.textContent = message;
    div.className   = "input-name-message";
}
function errorSurname(input, message) {
    input.className = "input-surname-invalid";
    const div       = input.nextElementSibling;
    div.textContent = message;
    div.className   = "input-surname-message";
}
function errorPassword(message) {
    passwordArea.className = "enter-password-invalid";
    passwordDiv.textContent = message;
    passwordDiv.className   = "enter-password-message"; 
}
function errorRepassword(message) {
    repasswordArea.className = "enter-repassword-invalid";
    repasswordDiv.textContent = message;
    repasswordDiv.className   = "enter-repassword-message"; 
}
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.length == 0){
        errorEmail(input, "Bu alan boş bırakılamaz!");
    }else if(input.value.length > 0){
        if(!re.test(input.value)){
            errorEmail(input, "Hatalı email girdiniz!");
        }else{
            input.className = "input-email";
            const div       = input.nextElementSibling;
            div.textContent = "";
        }     
    }
}
function checkPassword(input) {
    const re2 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{4,}/;
    if(input.value.length == 0){
        errorPassword("Bu alan boş bırakılamaz!");
    }else if(input.value.length > 0 && input.value.length < 4){
		errorPassword("En az 4 karakter girmek zorundasınız!");
	}else if(input.value.length >= 4){
		if(!re2.test(input.value)){
            errorPassword("En az 1 rakam, 1 büyük harf, 1 küçük harf, 1 sembol girmek zorundasınız!");
        }else{
            passwordArea.className = "enter-password";
            passwordDiv.textContent = "";
        }
	}
}
function checkRepassword(input) {
    if(input.value != password.value){
        errorRepassword("Şifreler birbiriyle aynı olmak zorunda!");
    }else{
        repasswordArea.className = "enter-repassword";
        repasswordDiv.textContent = "";
    }
}
function checkPhone(input) {
    const re3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(input.value.length == 0){
        errorPhone(input, "Bu alan boş bırakılamaz!");
    }else if(input.value.length > 0 && input.value.length < 11){
        if(re3.test(input.value)){
            errorPhone(input, "Lütfen numaranızı doğru giriniz!");
        }else{
            input.className = "input-phone";
            const div       = input.nextElementSibling;
            div.textContent = "";
        }
    }else{
        errorPhone(input, "10 karakterden fazla girilemez!");
    }
}
function checkName(input) {
    const re4 = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if(input.value.length == 0){
        errorName(input, "Bu alan boş bırakılamaz!");
    }else if(input.value.length > 2 && input.value.length < 25){
        if(re4.test(input.value)){
            errorName(input, "İsim formatına uygun bir şekilde giriniz!");
        }else{
            input.className = "input-name";
            const div       = input.nextElementSibling;
            div.textContent = "";
        }
    }else{
        errorName(input, "En az 3, en fazla 24 karakter girebilirsiniz!");
    }
}
function checkSurname(input) {
    const re5 = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if(input.value.length == 0){
        errorSurname(input, "Bu alan boş bırakılamaz!");
    }else if(input.value.length > 2 && input.value.length < 25){
        if(re5.test(input.value)){
            errorSurname(input, "Soyisim formatına uygun bir şekilde giriniz!");
        }
        else{
            input.className = "input-surname";
            const div       = input.nextElementSibling;
            div.textContent = "";
        }
    }else{
        errorSurname(input, "En az 3, en fazla 24 karakter girebilirsiniz!");
    }
}
function checkForm(){
    if(formCheckbox.checked == "true"){
        if(names.style.borderColor != "red" && surname.style.borderColor != "red" && email.style.borderColor != "red" && phone.style.borderColor != "red" && password.style.borderColor != "red" && repassword.style.borderColor != "red"){
            formButton.disabled = "false";
        }
    }
};

$(document).ready(function () {
    $("#input-email").keyup(function(){
        checkEmail(email);
    });

    $("#input-phone").keyup(function(){
        checkPhone(phone);
    });

    $("#input-name").keyup(function(){ 
        checkName(names);
    });

    $("#input-surname").keyup(function(){ 
        checkSurname(surname);
    });

    $("#enter-password-input").keyup(function(){
        checkPassword(password);
    });

    $("#enter-repassword-input").keyup(function(){
        checkRepassword(repassword);
    });

    $("#password-eye").click(function () {
        if ($(".enter-password-input").attr("type") == "password") {
            $(".enter-password-input").attr("type", "text");
        }else{
            $(".enter-password-input").attr("type", "password");
        }
    });

    $("#repassword-eye").click(function () {
        if ($(".enter-repassword-input").attr("type") == "password") {
            $(".enter-repassword-input").attr("type", "text");
        }else{
            $(".enter-repassword-input").attr("type", "password");
        }
    });
});

