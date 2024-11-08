const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passport.LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ where: { username } });
  if (!user) return done(null, false, { message: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return done(null, false, { message: 'Incorrect password' });
  return done(null, user);
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});
