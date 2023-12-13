const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema here
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
