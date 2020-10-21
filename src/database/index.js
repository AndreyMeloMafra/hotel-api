const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Reservations = require('../models/Reservations');

const connection = new Sequelize(dbConfig);

Reservations.init(connection);

module.exports = connection;
