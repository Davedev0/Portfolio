

    document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    let username = document.getElementById("login-username").value; 
    let password = document.getElementById("login-password").value; 
    let errorMsg = document.getElementById("error-msg");
    errorMsg.style.display = "none"; 
    
    // Check credentials
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        // Redirect to the specified file upon successful login
        window.location.href = "https://www.facebook.com/share/1BB3RESn2s/"; 
    } else {
        // Display specific error messages
        if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
    // Redirect to the specified file upon successful login
    window.location.href = "https://www.facebook.com/share/1BB3RESn2s/"; 
} else {
    // Display specific error messages
    if (username !== localStorage.getItem("username") && password !== localStorage.getItem("password")) {
        errorMsg.innerHTML = "Incorrect login, please try again!";
    } else if (username !== localStorage.getItem("username")) {
        errorMsg.innerHTML = "Username incorrect, please try again!";
    } else if (password !== localStorage.getItem("password")) {
        errorMsg.innerHTML = "Password incorrect, please try again!"; // This condition checks for incorrect password
    }
    errorMsg.style.display = "block"; 
}
        errorMsg.style.display = "block"; 
    } 
});