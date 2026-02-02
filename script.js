function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    // Dummy credentials
    let correctUsername = "admin";
    let correctPassword = "12345";

    if (username === "" || password === "") {
        error.textContent = "Please fill all fields";
        return false;
    }

    if (username === correctUsername && password === correctPassword) {
        alert("Login Successful!");
        return true;
    } else {
        error.textContent = "Invalid Username or Password";
        return false;
    }
}
