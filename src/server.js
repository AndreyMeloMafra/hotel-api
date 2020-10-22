require('dotenv').config();

const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./routes');


require('./database');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    return console.log(`server iniciado ${PORT}`);
});