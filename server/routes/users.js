const express = require('express');

const { registerUser } = require('../controllers/usersCtrl');

const router = express();

router.post('/register', registerUser);

module.exports = router;