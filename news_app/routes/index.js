const express = require('express');
const router = express.Router();

// Import other route files
const userRoutes = require('./user.routes');
const guestRoutes = require('./guest.routes');

// Use routes
router.use('/users', userRoutes);
router.use('/guests', guestRoutes);

module.exports = router;
