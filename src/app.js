const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
