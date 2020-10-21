const express = require("express");
const router = express.Router();

const reserv = require('./reservation');
const hoteis = require('./hotel');

router.use('/reservation', reserv);
router.use('/hotel', hoteis);

router.get('/', (req, res) => {
    return res.json({ message: "Bem vindo a minha API" })
})

module.exports = router;
