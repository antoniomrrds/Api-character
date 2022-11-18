const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes');
const error404 = require('./middlewares/Error404');
const ErrorHandler = require('./middlewares/HandleError');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(error404);
app.use(ErrorHandler);

module.exports = app;
