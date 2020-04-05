const express = require('express');
const userCtrl = require('../controllers/userCtrl');

const router = express();

router.post('/register', userCtrl.createUser);
router.get('/', userCtrl.getAllUsers);
router.get('/:username', userCtrl.getUserByUsername);
router.get('/login', userCtrl.login);
router.delete('/:id', userCtrl.deleteUserById);

module.exports = router;