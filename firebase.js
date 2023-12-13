
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

  
  
  const firebaseConfig = {
    apiKey: "AIzaSyCqNJas-T0qBx4MXoqERkUNC1V-WiXnQIM",
    authDomain: "ritzytest-24365.firebaseapp.com",
    projectId: "ritzytest-24365",
    storageBucket: "ritzytest-24365.appspot.com",
    messagingSenderId: "139354533672",
    appId: "1:139354533672:web:89c1c9f8a98c482b512a1d",
    measurementId: "G-2N5MEFQ84G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //get ref to database service
  const db = getDatabase(app);

  document.getElementById("login now").addEventListener('click', function(e){

    set(ref(db, 'user/' + document.getElementById("login now").value),
    {
        username: document.getElementById("login-username").value,
        email: document.getElementById("login-email").value
    });
    
    alert("Login Sucessfully !")

  })