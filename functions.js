// functions.js

function showSignupForm() {
    document.querySelector(".login-form-container").style.display = "none";
    document.querySelector(".signup-form-container").style.display = "flex";
}

function signup() {
    
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    console.log("Signup Data:", { username, email, password });
}

function login() {
   
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    console.log("Login Data:", { email, password });
}

function openCartModal() {
    // Redirect to the cart.html page or implement your cart logic here
    window.location.href = 'cart.html';
}
