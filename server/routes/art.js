const express = require('express');
const { saveArt, isPaid, getArt } = require('../controllers/artCtrl');

const router = express();

router.post('/saveArt', saveArt);
router.get('/isPaid/:id', isPaid);
router.get('/find/:id', getArt);


module.exports = router;