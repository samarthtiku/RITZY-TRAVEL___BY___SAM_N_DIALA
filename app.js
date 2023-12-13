// Initialize Firebase
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
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById('login-form');
const loginErrorMessage = document.getElementById('login-error-message');
const loggedInUserInfo = document.getElementById('user-info');
const loggedInEmailSpan = document.getElementById('logged-in-email');

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      console.log('Login successful:', user.email);
      loginErrorMessage.textContent = '';
      showLoggedInUser(user.email);
    })
    .catch((error) => {
      // Handle errors
      console.error('Login error:', error.message);
      loginErrorMessage.textContent = 'Invalid email or password';
    });
}

function showLoggedInUser(email) {
  loggedInEmailSpan.textContent = email;
  loginForm.style.display = 'none';
  loggedInUserInfo.style.display = 'block';
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
      // Logout successful
      console.log('Logout successful');
      loginForm.style.display = 'block';
      loggedInUserInfo.style.display = 'none';
    })
    .catch((error) => {
      // Handle errors
      console.error('Logout error:', error.message);
    });
}