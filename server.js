const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const db = mongoose.connection;
const User = require('/Users/d_tadros/Desktop/RITZY-TRAVEL-test/js/user.js'); // Adjust the path accordingly


const app = express();
const port = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve your static files (including register.html)
app.use(express.static('public'));

app.post('/register', (req, res) => {
    // Get registration data from the request body
    const registrationData = req.body;

    // Save registration data to a file
    fs.writeFileSync('users.json', JSON.stringify(registrationData));

    res.send('Registration successful!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3001}`);
});
//diala

module.exports = User;

// Serve your static files (HTML, CSS, images)
app.use(express.static('public'));

// Endpoint to handle user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Save user data to a local file (users.json)
  const userData = { username, email, password };
  const users = JSON.parse(fs.readFileSync('users.json', 'utf8')) || [];
  users.push(userData);
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  res.json({ success: true, message: 'Registration successful' });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Implement your login logic here (compare with data from users.json)

  res.json({ success: true, message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3001}`);
});




