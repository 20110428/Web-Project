const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hash, email });
    res.redirect('/login');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
};

exports.loginUser = async (req, res) => {
  // Implement login functionality with Passport.js
};
