document.getElementById("register-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    let registerUsername = document.getElementById("register-username").value; 
    let registerPassword = document.getElementById("register-password").value; 
    let errorMsgRegister = document.getElementById("error-msg-register");
    errorMsgRegister.style.display = "none"; 

    if (registerUsername && registerPassword) {
        localStorage.setItem("username", registerUsername);
        localStorage.setItem("password", registerPassword);
        
        // Redirect to login after successful registration
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

document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
});
    document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    let username = document.getElementById("login-username").value; 
    let password = document.getElementById("login-password").value; 
    let errorMsg = document.getElementById("error-msg");
    errorMsg.style.display = "none"; 
    
    // Check credentials
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        // Redirect to the specified file upon successful login
        window.location.href = "Personal_Portfolio.html"; 
    } else {
        // Display specific error messages
        if (username !== localStorage.getItem("username") && password !== localStorage.getItem("password")) {
            errorMsg.innerHTML = "Incorrect login, please try again!";
        } else if (username !== localStorage.getItem("username")) {
            errorMsg.innerHTML = "Username incorrect, please try again!";
        } else if (username === localStorage.getItem("username")){
          correctMsg.innerHTML = "Successful to login!";
        }else {
          errorMsg.innerHTML = "Password incorrect, please try again!";
        }
        errorMsg.style.display = "block"; 
    } 
});