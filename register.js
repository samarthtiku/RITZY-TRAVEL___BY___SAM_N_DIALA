// register.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

//  web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqNJas-T0qBx4MXoqERkUNC1V-WiXnQIM",
    authDomain: "ritzytest-24365.firebaseapp.com",
    databaseURL: "https://ritzytest-24365-default-rtdb.firebaseio.com",
    projectId: "ritzytest-24365",
    storageBucket: "ritzytest-24365.appspot.com",
    messagingSenderId: "139354533672",
    appId: "1:139354533672:web:89c1c9f8a98c482b512a1d",
    measurementId: "G-2N5MEFQ84G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase authentication service
const auth = getAuth(app);

//get ref to database services
const db = getDatabase(app);

// Function to save registration data to Firebase
function saveRegistrationData(event) {
    event.preventDefault();

    // Retrieve values from the form
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;

    // Save registration data to Firebase Realtime Database
    set(ref(db, 'user/' + username), {
        username: username,
        email: email,
        PhoneNumber: phoneNumber
    });

    // Display success message
    document.getElementById("registrationSuccess").style.display = "block";
}

// Function to handle login
function login() {
    const email = document.getElementById("email").value;
    const password = prompt("Please enter your password"); // Prompt the user for password, you may use a more secure method
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Login successful!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Login failed: ${errorMessage}`);
        });
}

// Add an event listener to the registration form
document.getElementById("submit").addEventListener('click', saveRegistrationData);


function saveRegistrationData() {
    // Get input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create an object with the registration data
    var registrationData = {
        email: email,
        password: password
    };

    // Convert the object to a JSON string
    var jsonData = JSON.stringify(registrationData);

    // Save the data to local storage
    localStorage.setItem('registrationData', jsonData);

    // Redirect to another page (optional)
    window.location.href = "http://localhost:3001/success"; // Change the URL as needed
}

    
