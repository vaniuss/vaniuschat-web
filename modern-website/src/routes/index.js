const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for the homepage
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src/public' });
});

// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);

// Additional routes can be defined here

module.exports = router;