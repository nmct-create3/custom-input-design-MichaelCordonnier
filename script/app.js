



const init = function(){
    let passwordCheckbox = document.querySelector(".js-password-toggle-checkbox");

    const passwordInput = document.querySelector(".js-password-input");

    passwordCheckbox.addEventListener("click", function(){
        if(passwordInput.type == "password"){
            passwordInput.type = "text";
        }else{
            passwordInput.type = "password"
        };
    })
}

document.addEventListener('DOMContentLoaded',init);