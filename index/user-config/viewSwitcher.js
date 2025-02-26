document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
});