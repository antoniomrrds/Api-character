const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const swaggerUI = require('swagger-ui-express');

const router = require('./routes/routes');
const handleRouteNotFound = require('./middlewares/handleRouteNotFound');
const ErrorHandler = require('./middlewares/ErrorHandler');
const specs = require('./swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

// Rota não encontrada
app.use(handleRouteNotFound);
app.use(ErrorHandler);

module.exports = app;
