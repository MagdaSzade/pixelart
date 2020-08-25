const express = require('express');

const { registerUser, confirmEmail } = require('../controllers/usersCtrl');

const router = express();

router.post('/register', registerUser);
router.get('/confirm/:token', confirmEmail);

module.exports = router;