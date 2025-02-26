document.getElementById("register-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    let registerUsername = document.getElementById("register-username").value; 
    let registerPassword = document.getElementById("register-password").value; 
    let errorMsgRegister = document.getElementById("error-msg-register");
    errorMsgRegister.style.display = "none"; 

    if (registerUsername && registerPassword) {
        localStorage.setItem("username", registerUsername);
        localStorage.setItem("password", registerPassword);
        
        document.getElementById("register-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    } else {
        errorMsgRegister.innerHTML = "Please fill in all fields.";
        errorMsgRegister.style.textAlign = "center";
        errorMsgRegister.style.fontSize
          = "15px";
        errorMsgRegister.style.color = "darkred";
        errorMsgRegister.style.display = "block"; 
    }
});
