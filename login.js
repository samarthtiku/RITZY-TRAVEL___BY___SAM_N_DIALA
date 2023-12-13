// login.js

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const hardcodedEmail = "test@example.com";
    const hardcodedPassword = "password";

    if (email === hardcodedEmail && password === hardcodedPassword) {
        // Login successful
        console.log("Login successful:", { email, password });
        showUserInfo(email);

        // Redirect to index.html with the signed-in email
        window.location.href = 'index.html?email=' + encodeURIComponent(email);
    } else {
        // Login failed
        console.log("Login failed. Invalid credentials.");
        // Optionally, you can display an error message to the user
        document.getElementById("login-error-message").style.display = "block";
    }
}

function showUserInfo(email) {
    // Show user info or perform actions after successful login
    document.getElementById("logged-in-email").innerText = email;
    document.getElementById("user-info").style.display = "block";
}
