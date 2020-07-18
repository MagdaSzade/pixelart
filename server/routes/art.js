const express = require('express');
const { saveArt, isPayed, getArt } = require('../controllers/artCtrl');

const router = express();

router.post('/saveArt', saveArt);
router.get('/isPayed/:id', isPayed)
router.get('/:id', getArt);

module.exports = router;