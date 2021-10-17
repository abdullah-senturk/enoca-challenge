const form           = document.getElementById("enter-form");
const email          = document.getElementById("enter-email");
const passwordArea   = document.getElementById("enter-password");
const password       = document.getElementById("enter-password-input");
const passwordDiv    = document.getElementById("enter-password-div");

function errorEmail(input, message){
    input.className = "enter-email-invalid";
    const div       = input.nextElementSibling;
    div.textContent = message;
    div.className   = "enter-email-message"; 
}
function errorPassword(message) {
    passwordArea.className = "enter-password-invalid";
    passwordDiv.textContent = message;
    passwordDiv.className   = "enter-password-message"; 
}
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.length == 0){
        errorEmail(input, "Bu alan boş bırakılamaz!");
    }else if(input.value.length > 0){
        if(!re.test(input.value)){
            errorEmail(input, "Hatalı email girdiniz!");
        }else{
            input.className = "enter-email";
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
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkEmail(email);
    checkPassword(password);
});

$(document).ready(function () {
    // değiştir göz ikonuna tıklandığında
    $("#password-eye").click(function () {
        // eğer type niteliği password ise
        if ($(".enter-password-input").attr("type") == "password") {
            // type niteliğini text olarak değiştir
            $(".enter-password-input").attr("type", "text");
        }
        // password değil text ise
        else {
            // type niteliğini password olarak değiştir
            $(".enter-password-input").attr("type", "password");
        }
    });
});


