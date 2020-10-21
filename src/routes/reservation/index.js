const express = require('express');
const router = express.Router();

const reservation = require('../../modules/reservation');
const email = require('../../modules/email');

router.get('/', reservation.index);
router.post('/create', reservation.create);
router.get('/see', reservation.read);
router.post('/send', email.send);

module.exports = router;
