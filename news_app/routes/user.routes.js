const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// User authentication routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Profile management routes
router.get('/profile/:id', userController.getProfile);
router.put('/profile/:id', userController.updateProfile);

module.exports = router;

router.post('/extend-subscription', extendSubscriber);
