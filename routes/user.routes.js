const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/register', (req, res) => res.render('register'));
router.post('/register', userController.registerUser);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;

const userRoutes = require('./routes/user.routes');
app.use(userRoutes);
