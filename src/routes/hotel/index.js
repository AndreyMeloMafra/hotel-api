const express = require('express');
const router = express.Router();

const reservation = require('../../modules/reservation');

router.get('/', reservation.index);
router.post('/create', reservation.create);
router.get('/see', reservation.read);

module.exports = router;
